import { AudioData } from "../AudioData.js";
import { initAutoResize } from "../resize.js";
import { createShader, tagObject } from "../shaderUtils.js";

const COLOR_SCHEMES = {
  // red and orange
  excelsior: [240, 273],
  // blue and green
  illuminati: [0, 30],
}
export class Gold {
  /**
   *
   * @param {HTMLCanvasElement} canvas
   * @param {AudioData} audioData
   * @param {string} shaderUrl
   */
  constructor(canvas, audioData) {
    this.canvas = canvas;
    this.audioData = audioData;
    this.gl = canvas.getContext("webgl2");
    this.startTime = performance.now();
    this.knobs = {
      RADIUS: 0.5,
      SPEED: 0.5,
      colorScheme: COLOR_SCHEMES.illuminati,
    }
    this.lastSectionIndex = -1;
    this.lastLoudness = 0;
    this.COLOR_SCHEMES = COLOR_SCHEMES;
  }

  writeAudioDataToTexture = () => {
    const frequencyData = this.audioData.getFrequencyData();
    const waveform = this.audioData.getWaveform();
    const lastHalfOfWaveform = waveform.slice(waveform.length / 2);

    this.gl.bindTexture(this.gl.TEXTURE_2D, this.state.audioTexture);
    this.gl.texSubImage2D(this.gl.TEXTURE_2D, 0, 0, 0, frequencyData.length, 1, this.gl.RED, this.gl.UNSIGNED_BYTE, frequencyData);
    this.gl.texSubImage2D(this.gl.TEXTURE_2D, 0, 0, 1, lastHalfOfWaveform.length, 1, this.gl.RED, this.gl.UNSIGNED_BYTE, lastHalfOfWaveform);
    this._cleanup();
  }

  frame = () => {
    if (!this.running) return;

    const loudnesses = this.audioData.loudnesses;
    const currentLoudness = loudnesses[loudnesses.length - 1];
    if (this.lastLoudness < currentLoudness) {
      this.lastLoudness = currentLoudness;
    } else {
      this.lastLoudness -= 5.0;
    }

    const frequencyData = this.audioData.getFrequencyData()
    // get the ratio of low frequencies to high frequencies
    const lowFreqs = frequencyData.slice(0, 300);
    const highFreqs = frequencyData.slice(300);
    const lowFreqSum = lowFreqs.reduce((acc, val) => acc + val, 0);
    const highFreqSum = highFreqs.reduce((acc, val) => acc + val, 0);
    const freqRatio = lowFreqSum / highFreqSum;
    // console.log({ freqRatio });
    const loudness = this.lastLoudness / 128;
    const numSamples = 10;
    const averageLoudnesses = loudnesses.slice(loudnesses.length - numSamples).reduce((acc, val) => acc + val, 0) / numSamples;
    const renderRadius = loudness;
    const renderSpeed = averageLoudnesses / 512;
    this.knobs.RADIUS = this.audioData.loudness.low / 5;
    this.knobs.SPEED = this.audioData.loudness.mid;
    this.knobs.colorScheme = (this.audioData.loudness.high / (this.audioData.loudness.low + this.audioData.loudness.high)) || 0.0;


    // if(key !== tweenedKey) console.log({key, tweenedKey});
    this.writeAudioDataToTexture();
    this.gl.useProgram(this.state.program);
    this.gl.bindTexture(this.gl.TEXTURE_2D, this.state.audioTexture);
    this.gl.bindVertexArray(this.state.vao);
    this.gl.uniform3f(this.state.attribs.iResolution, this.canvas.width, this.canvas.height, 1.0);
    this.gl.uniform1f(this.state.attribs.iTime, loudness * (performance.now() - this.startTime) / 1000);
    this.gl.uniform1f(this.state.attribs.RADIUS, this.knobs.RADIUS);
    this.gl.uniform1f(this.state.attribs.SPEED, this.knobs.SPEED);
    this.gl.uniform2fv(this.state.attribs.colorScheme1, COLOR_SCHEMES.excelsior.map(i => i / 360));
    this.gl.uniform2fv(this.state.attribs.colorScheme2, COLOR_SCHEMES.illuminati.map(i => i / 360));
    this.gl.uniform1f(this.state.attribs.colorSchemeMix, this.knobs.colorScheme);


    this.gl.drawArrays(this.gl.TRIANGLES, 0, 6);
    // console.log({mode})

    this._cleanup();
    requestAnimationFrame(this.frame);
  }

  start = async () => {
    setInterval(() => {
      console.log(this.knobs)
    }, 1000);
    this.running = true;
    initAutoResize(this.canvas);

    this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);

    const textureVerticesBuffer = this._createTextureVerticesBuffer()
    const textureCoordsBuffer = this._createTextureCoordsBuffer()
    const audioTexture = this._createAudioTexture(this.audioData.getFrequencyData().length)

    const { program, vao, attribs } = await this._createRenderProgram(textureVerticesBuffer, textureCoordsBuffer)

    this.state = {
      textureVerticesBuffer,
      textureCoordsBuffer,
      audioTexture,
      program,
      vao,
      attribs,
    }

    this._cleanup();
    requestAnimationFrame(this.frame);
  }

  stop = () => {
    this.running = false;
  }

  _cleanup = () => {
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, null);
    this.gl.bindBuffer(this.gl.TRANSFORM_FEEDBACK_BUFFER, null);
    this.gl.bindBufferBase(this.gl.TRANSFORM_FEEDBACK_BUFFER, 0, null);
    this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
    this.gl.bindTexture(this.gl.TEXTURE_2D, null);
    this.gl.bindTransformFeedback(this.gl.TRANSFORM_FEEDBACK, null);
    this.gl.bindVertexArray(null);
    this.gl.disable(this.gl.RASTERIZER_DISCARD);
  }

  /**
 * @returns {WebGlBuffer}
 */
  _createTextureVerticesBuffer = () => {
    this._cleanup()
    const buffer = this.gl.createBuffer()
    tagObject(this.gl, buffer, "textureVerticesBuffer")
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, buffer)
    this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array([
      // triangle 1
      -1, -1,
      -1, 1,
      1, -1,
      // triangle 2
      1, -1,
      -1, 1,
      1, 1,
    ]), this.gl.STATIC_DRAW) // Two triangles covering the entire screen
    this._cleanup()
    return buffer
  }

  _createAudioTexture = (size) => {
    const texture = this.gl.createTexture()
    tagObject(this.gl, texture, "audioTexture")
    this.gl.bindTexture(this.gl.TEXTURE_2D, texture)
    this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT, 1);
    this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.R8, size, 2, 0, this.gl.RED, this.gl.UNSIGNED_BYTE, null)
    this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.NEAREST)
    this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.NEAREST)
    this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.gl.CLAMP_TO_EDGE)
    this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.gl.CLAMP_TO_EDGE)
    this._cleanup()
    return texture
  }

  /**
   * @returns {WebGlBuffer}
   */
  _createTextureCoordsBuffer = () => {
    const buffer = this.gl.createBuffer()
    tagObject(this.gl, buffer, "textureCoordsBuffer")
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, buffer)
    this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array([
      // triangle 1
      0, 0,
      0, 1,
      1, 0,
      // triangle 2
      1, 0,
      0, 1,
      1, 1,
    ]), this.gl.STATIC_DRAW) // Two triangles covering the entire texture
    this._cleanup()
    return buffer
  }

  /**
   * @param {WebGlBuffer} textureVertices
   * @param {WebGlBuffer} textureCoords
   * @returns {Promise<{computeProgram: WebGlProgram, renderVao: WebGlVertexArrayObject}>}
   */
  _createRenderProgram = async (textureVertices, textureCoords) => {
    const program = await createRenderProgram(this.gl);
    tagObject(this.gl, program, "program")

    const vao = this.gl.createVertexArray()
    tagObject(this.gl, vao, "vao")
    bindRenderBuffer(this.gl, program, vao, textureVertices, textureCoords)

    const attribs = {
      iResolution: this.gl.getUniformLocation(program, "iResolution"),
      iTime: this.gl.getUniformLocation(program, "iTime"),
      RADIUS: this.gl.getUniformLocation(program, "RADIUS"),
      SPEED: this.gl.getUniformLocation(program, "SPEED"),
      colorScheme1: this.gl.getUniformLocation(program, "colorScheme1"),
      colorScheme2: this.gl.getUniformLocation(program, "colorScheme2"),
      colorSchemeMix: this.gl.getUniformLocation(program, "colorSchemeMix"),
    }

    this._cleanup()
    return { program, vao, attribs }
  }
}

/**
 * @param {WebGL2RenderingContext} gl
 * @param {string} shaderPathPrefix
 * @returns {Promise<WebGLProgram>}
 */
const createRenderProgram = async (gl) => {
  const program = gl.createProgram()

  gl.attachShader(program, await createShader(gl, gl.VERTEX_SHADER, `/src/shaders/generic-vertex.glsl`))
  gl.attachShader(program, await createShader(gl, gl.FRAGMENT_SHADER, `/src/Gold/shader.glsl`))

  gl.linkProgram(program);

  const status = gl.getProgramParameter(program, gl.LINK_STATUS);
  if (!status) {
    throw new Error(`Could not link render program. ${gl.getProgramInfoLog(program)}\n`);
  }
  return program;
}

/**
 * @param {WebGL2RenderingContext} gl
 * @param {WebGLProgram} program
 * @param {WebGLVertexArrayObject} vao
 * @param {WebGLBuffer} texturePositions
 * @param {WebGLBuffer} textureCoords
 */
const bindRenderBuffer = (gl, program, vao, texturePositions, textureCoords) => {
  const positionAttrib = gl.getAttribLocation(program, "inPosition");
  // const texCoordsAttrib = gl.getAttribLocation(program, "inTexCoord");

  gl.bindVertexArray(vao);

  gl.bindBuffer(gl.ARRAY_BUFFER, texturePositions);
  gl.enableVertexAttribArray(positionAttrib);
  gl.vertexAttribPointer(positionAttrib, 2, gl.FLOAT, false, 0, 0);

  // gl.bindBuffer(gl.ARRAY_BUFFER, textureCoords);
  // gl.enableVertexAttribArray(texCoordsAttrib);
  // gl.vertexAttribPointer(texCoordsAttrib, 2, gl.FLOAT, false, 0, 0);
}
