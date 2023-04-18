#version 300 es
precision highp float;

uniform sampler2D iChannel0;
uniform vec3 iResolution;
uniform float iTime;
uniform int iIters;
uniform int iColorScheme;
out vec4 fragColor;

// Fractal Audio 01
// Author: relampago2048
// Source: https://www.shadertoy.com/view/llB3W1

int fractal(vec2 p, vec2 point) {
	vec2 so = (-1.0 + 2.0 * point) * 0.4;
	vec2 seed = vec2(0.098386255 + so.x, 0.6387662 + so.y);

	for (int i = 0; i < iIters; i++) {

		if (length(p) > 2.0) {
			return i;
		}
		vec2 r = p;
		p = vec2(p.x * p.x - p.y * p.y, 2.0* p.x * p.y);
		p = vec2(p.x * r.x - p.y * r.y + seed.x, r.x * p.y + p.x * r.y + seed.y);
	}

	return 0;
}

vec3 color(int i) {
	float f = float(i)/float(iIters) * 2.0;
	f=f*f*2.;
	return vec3((sin(f*2.0)), (sin(f*3.0)), abs(sin(f*7.0)));
}

float sampleMusicA() {
	return float(iColorScheme)/255.0 * (
		texture( iChannel0, vec2( 0.15, 0.25 ) ).x +
		texture( iChannel0, vec2( 0.30, 0.25 ) ).x);
}

/*Transform a value from 0-256 in to rgb colors*/
vec3 getColorScheme(){
	// get the red value
	float r = float(iColorScheme & 0xFF);
	// get the green value
	float g = float((iColorScheme >> 8) & 0xFF);
	// get the blue value
	float b = float((iColorScheme >> 16) & 0xFF);
	// return the color
	return vec3(r/255.0, g/255.0, b/255.0);
}

void mainImage( out vec4 fragColor, in vec2 fragCoord ) {
	vec2 uv = fragCoord.xy / iResolution.xy;

	vec2 position = 3. * (-0.5 + fragCoord.xy / iResolution.xy );
	position.x *= iResolution.x/iResolution.y;

	vec2 iFC = vec2(iResolution.x-fragCoord.x,iResolution.y-fragCoord.y);
	vec2 pos2 = 2. * (-0.5 + iFC.xy / iResolution.xy);
	pos2.x*=iResolution.x/iResolution.y;

	vec4 t3 = texture(iChannel0, vec2(length(position)/2.0,0.1) );
	float pulse = 0.5+sampleMusicA()*1.8;

	vec3 invFract = color(fractal(pos2,vec2(0.55+sin(iTime/3.+0.5)/2.0,pulse*.9)));

	vec3 fract4 = color(fractal(position/1.6,vec2(0.6+cos(iTime/2.+0.5)/2.0,pulse*.8)));

	vec3 colorFromScheme = getColorScheme();
	vec3 c = color(fractal(position,vec2(0.5+sin(iTime/3.)/2.0,pulse)));

  c = mix(c, colorFromScheme, 0.00025);

	t3=abs(vec4(0.5,0.1,0.5,1.)-t3)*2.;

	vec4 fract01 =  vec4( c , 1.0 );
	vec4 salida;
	salida = fract01 / t3 + fract01 * t3 + vec4(invFract,0.6) + vec4(fract4,0.3);
	fragColor = salida;
}

void main(void) {
  vec4 color = vec4(0);
  mainImage(color, gl_FragCoord.xy);
  fragColor = color;
}
