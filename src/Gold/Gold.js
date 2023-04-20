import { AudioData } from "../AudioData.js";
import { initAutoResize } from "../resize.js";
import { createShader, tagObject } from "../shaderUtils.js";

const goldSongData =
{
  "meta": {
    "analyzer_version": "4.0.0",
    "platform": "Linux",
    "detailed_status": "OK",
    "status_code": 0,
    "timestamp": 1495193577,
    "analysis_time": 6.93906,
    "input_process": "libvorbisfile L+R 44100->22050"
  },
  "track": {
    "num_samples": 4585515,
    "duration": 207.95985,
    "sample_md5": "",
    "offset_seconds": 0,
    "window_seconds": 0,
    "analysis_sample_rate": 22050,
    "analysis_channels": 1,
    "end_of_fade_in": 0,
    "start_of_fade_out": 201.13705,
    "loudness": -2.743,
    "tempo": 114.944,
    "tempo_confidence": 0.74,
    "time_signature": 4,
    "time_signature_confidence": 0.994,
    "key": 2,
    "key_confidence": 0.408,
    "mode": 1,
  },
  "bars": [
    {
      "start": 0.49567,
      "duration": 2.18749,
      "confidence": 0.925
    },
    {
      "start": 2.68316,
      "duration": 2.10995,
      "confidence": 0.707
    },
    {
      "start": 4.79311,
      "duration": 2.17781,
      "confidence": 0.091
    },
    {
      "start": 6.97092,
      "duration": 2.22058,
      "confidence": 0.093
    },
    {
      "start": 9.1915,
      "duration": 2.23333,
      "confidence": 0.207
    },
    {
      "start": 11.42483,
      "duration": 2.24668,
      "confidence": 0.506
    },
    {
      "start": 13.67151,
      "duration": 2.2263,
      "confidence": 0.818
    },
    {
      "start": 15.89782,
      "duration": 2.18375,
      "confidence": 0.126
    },
    {
      "start": 18.08157,
      "duration": 2.1262,
      "confidence": 0.302
    },
    {
      "start": 20.20777,
      "duration": 2.27342,
      "confidence": 0.652
    },
    {
      "start": 22.48119,
      "duration": 2.26574,
      "confidence": 0.881
    },
    {
      "start": 24.74693,
      "duration": 2.16735,
      "confidence": 0.604
    },
    {
      "start": 26.91428,
      "duration": 2.12009,
      "confidence": 0.693
    },
    {
      "start": 29.03437,
      "duration": 0.52165,
      "confidence": 0.256
    },
    {
      "start": 29.55603,
      "duration": 2.08912,
      "confidence": 0.232
    },
    {
      "start": 31.64515,
      "duration": 2.08389,
      "confidence": 0.389
    },
    {
      "start": 33.72904,
      "duration": 2.07887,
      "confidence": 0.461
    },
    {
      "start": 35.8079,
      "duration": 2.07976,
      "confidence": 0.547
    },
    {
      "start": 37.88766,
      "duration": 2.09136,
      "confidence": 0.538
    },
    {
      "start": 39.97902,
      "duration": 2.08923,
      "confidence": 0.66
    },
    {
      "start": 42.06825,
      "duration": 2.08642,
      "confidence": 0.157
    },
    {
      "start": 44.15467,
      "duration": 2.08653,
      "confidence": 0.449
    },
    {
      "start": 46.2412,
      "duration": 2.09244,
      "confidence": 0.637
    },
    {
      "start": 48.33364,
      "duration": 2.08751,
      "confidence": 0.546
    },
    {
      "start": 50.42115,
      "duration": 2.08,
      "confidence": 0.376
    },
    {
      "start": 52.50116,
      "duration": 2.09073,
      "confidence": 0.602
    },
    {
      "start": 54.59189,
      "duration": 2.09302,
      "confidence": 0.237
    },
    {
      "start": 56.68492,
      "duration": 2.08203,
      "confidence": 0.743
    },
    {
      "start": 58.76694,
      "duration": 2.08357,
      "confidence": 0.646
    },
    {
      "start": 60.85051,
      "duration": 2.08549,
      "confidence": 0.656
    },
    {
      "start": 62.936,
      "duration": 2.08561,
      "confidence": 0.41
    },
    {
      "start": 65.02161,
      "duration": 2.08565,
      "confidence": 0.693
    },
    {
      "start": 67.10726,
      "duration": 2.09163,
      "confidence": 0.234
    },
    {
      "start": 69.19889,
      "duration": 1.56302,
      "confidence": 0.585
    },
    {
      "start": 70.76191,
      "duration": 2.08663,
      "confidence": 0.457
    },
    {
      "start": 72.84854,
      "duration": 2.09968,
      "confidence": 0.546
    },
    {
      "start": 74.94822,
      "duration": 2.08695,
      "confidence": 0.657
    },
    {
      "start": 77.03517,
      "duration": 2.08232,
      "confidence": 0.561
    },
    {
      "start": 79.11749,
      "duration": 2.08797,
      "confidence": 0.895
    },
    {
      "start": 81.20546,
      "duration": 2.08418,
      "confidence": 0.828
    },
    {
      "start": 83.28964,
      "duration": 2.08409,
      "confidence": 0.686
    },
    {
      "start": 85.37373,
      "duration": 2.08971,
      "confidence": 0.902
    },
    {
      "start": 87.46344,
      "duration": 2.0808,
      "confidence": 0.18
    },
    {
      "start": 89.54424,
      "duration": 2.60865,
      "confidence": 0.673
    },
    {
      "start": 92.1529,
      "duration": 2.09503,
      "confidence": 0.27
    },
    {
      "start": 94.24792,
      "duration": 2.08477,
      "confidence": 0.561
    },
    {
      "start": 96.33269,
      "duration": 2.08297,
      "confidence": 0.617
    },
    {
      "start": 98.41566,
      "duration": 2.08399,
      "confidence": 0.533
    },
    {
      "start": 100.49965,
      "duration": 2.09068,
      "confidence": 0.554
    },
    {
      "start": 102.59033,
      "duration": 2.08722,
      "confidence": 0.373
    },
    {
      "start": 104.67755,
      "duration": 2.08459,
      "confidence": 0.26
    },
    {
      "start": 106.76214,
      "duration": 2.0861,
      "confidence": 0.472
    },
    {
      "start": 108.84824,
      "duration": 2.09516,
      "confidence": 0.388
    },
    {
      "start": 110.9434,
      "duration": 2.08536,
      "confidence": 0.578
    },
    {
      "start": 113.02876,
      "duration": 2.08117,
      "confidence": 0.117
    },
    {
      "start": 115.10993,
      "duration": 2.08953,
      "confidence": 0.704
    },
    {
      "start": 117.19946,
      "duration": 2.0932,
      "confidence": 0.274
    },
    {
      "start": 119.29266,
      "duration": 2.0842,
      "confidence": 0.632
    },
    {
      "start": 121.37686,
      "duration": 2.08658,
      "confidence": 0.517
    },
    {
      "start": 123.46345,
      "duration": 2.08417,
      "confidence": 0.671
    },
    {
      "start": 125.54762,
      "duration": 2.08272,
      "confidence": 0.677
    },
    {
      "start": 127.63034,
      "duration": 2.08266,
      "confidence": 0.485
    },
    {
      "start": 129.71301,
      "duration": 2.08537,
      "confidence": 0.432
    },
    {
      "start": 131.79839,
      "duration": 2.0937,
      "confidence": 0.415
    },
    {
      "start": 133.89207,
      "duration": 2.0881,
      "confidence": 0.275
    },
    {
      "start": 135.98018,
      "duration": 2.08662,
      "confidence": 0.367
    },
    {
      "start": 138.0668,
      "duration": 2.08377,
      "confidence": 0.689
    },
    {
      "start": 140.15057,
      "duration": 2.08839,
      "confidence": 0.454
    },
    {
      "start": 142.23895,
      "duration": 2.08789,
      "confidence": 0.604
    },
    {
      "start": 144.32686,
      "duration": 2.08694,
      "confidence": 0.437
    },
    {
      "start": 146.4138,
      "duration": 2.08697,
      "confidence": 0.12
    },
    {
      "start": 148.50076,
      "duration": 2.09026,
      "confidence": 0.568
    },
    {
      "start": 150.59103,
      "duration": 2.09083,
      "confidence": 0.187
    },
    {
      "start": 152.68185,
      "duration": 2.08063,
      "confidence": 0.481
    },
    {
      "start": 154.76248,
      "duration": 2.08333,
      "confidence": 0.714
    },
    {
      "start": 156.84583,
      "duration": 2.08763,
      "confidence": 0.57
    },
    {
      "start": 158.93346,
      "duration": 2.09084,
      "confidence": 0.507
    },
    {
      "start": 161.02428,
      "duration": 2.0845,
      "confidence": 0.728
    },
    {
      "start": 163.1088,
      "duration": 2.08893,
      "confidence": 0.487
    },
    {
      "start": 165.19771,
      "duration": 2.08642,
      "confidence": 0.591
    },
    {
      "start": 167.28413,
      "duration": 2.09055,
      "confidence": 0.436
    },
    {
      "start": 169.3747,
      "duration": 2.08696,
      "confidence": 0.514
    },
    {
      "start": 171.46165,
      "duration": 2.07944,
      "confidence": 0.382
    },
    {
      "start": 173.54109,
      "duration": 2.09108,
      "confidence": 0.421
    },
    {
      "start": 175.63217,
      "duration": 2.09423,
      "confidence": 0.364
    },
    {
      "start": 177.7264,
      "duration": 2.07796,
      "confidence": 0.636
    },
    {
      "start": 179.80437,
      "duration": 2.08638,
      "confidence": 0.632
    },
    {
      "start": 181.89073,
      "duration": 2.09164,
      "confidence": 0.264
    },
    {
      "start": 183.98238,
      "duration": 2.08185,
      "confidence": 0.285
    },
    {
      "start": 186.06422,
      "duration": 2.08856,
      "confidence": 0.772
    },
    {
      "start": 188.15279,
      "duration": 2.08847,
      "confidence": 0.15
    },
    {
      "start": 190.24126,
      "duration": 2.08621,
      "confidence": 0.479
    },
    {
      "start": 192.32745,
      "duration": 2.09087,
      "confidence": 0.528
    },
    {
      "start": 194.41832,
      "duration": 2.08398,
      "confidence": 0.261
    },
    {
      "start": 196.5023,
      "duration": 2.08674,
      "confidence": 0.124
    },
    {
      "start": 198.58904,
      "duration": 2.08615,
      "confidence": 0.417
    },
    {
      "start": 200.67519,
      "duration": 2.10169,
      "confidence": 0
    }
  ],
  "beats": [
    {
      "start": 0.49567,
      "duration": 0.56431,
      "confidence": 0.612
    },
    {
      "start": 1.05998,
      "duration": 0.54896,
      "confidence": 0.325
    },
    {
      "start": 1.60894,
      "duration": 0.53701,
      "confidence": 0.228
    },
    {
      "start": 2.14594,
      "duration": 0.53722,
      "confidence": 0.643
    },
    {
      "start": 2.68316,
      "duration": 0.53331,
      "confidence": 0.82
    },
    {
      "start": 3.21647,
      "duration": 0.52698,
      "confidence": 0.64
    },
    {
      "start": 3.74345,
      "duration": 0.5226,
      "confidence": 0.667
    },
    {
      "start": 4.26605,
      "duration": 0.52706,
      "confidence": 0.782
    },
    {
      "start": 4.79311,
      "duration": 0.53004,
      "confidence": 0.838
    },
    {
      "start": 5.32316,
      "duration": 0.54088,
      "confidence": 0.639
    },
    {
      "start": 5.86403,
      "duration": 0.54778,
      "confidence": 0.813
    },
    {
      "start": 6.41182,
      "duration": 0.55911,
      "confidence": 0.759
    },
    {
      "start": 6.97092,
      "duration": 0.55767,
      "confidence": 0.585
    },
    {
      "start": 7.5286,
      "duration": 0.55624,
      "confidence": 0.645
    },
    {
      "start": 8.08483,
      "duration": 0.55283,
      "confidence": 0.544
    },
    {
      "start": 8.63766,
      "duration": 0.55384,
      "confidence": 0.634
    },
    {
      "start": 9.1915,
      "duration": 0.55779,
      "confidence": 0.55
    },
    {
      "start": 9.7493,
      "duration": 0.5588,
      "confidence": 0.641
    },
    {
      "start": 10.3081,
      "duration": 0.55884,
      "confidence": 0.739
    },
    {
      "start": 10.86693,
      "duration": 0.5579,
      "confidence": 0.471
    },
    {
      "start": 11.42483,
      "duration": 0.56677,
      "confidence": 0.673
    },
    {
      "start": 11.9916,
      "duration": 0.56351,
      "confidence": 0.473
    },
    {
      "start": 12.55512,
      "duration": 0.5583,
      "confidence": 0.534
    },
    {
      "start": 13.11341,
      "duration": 0.5581,
      "confidence": 0.633
    },
    {
      "start": 13.67151,
      "duration": 0.55691,
      "confidence": 0.417
    },
    {
      "start": 14.22842,
      "duration": 0.55726,
      "confidence": 0.311
    },
    {
      "start": 14.78568,
      "duration": 0.55909,
      "confidence": 0.352
    },
    {
      "start": 15.34477,
      "duration": 0.55305,
      "confidence": 0.486
    },
    {
      "start": 15.89782,
      "duration": 0.5513,
      "confidence": 0.278
    },
    {
      "start": 16.44912,
      "duration": 0.55204,
      "confidence": 0.671
    },
    {
      "start": 17.00116,
      "duration": 0.54185,
      "confidence": 0.642
    },
    {
      "start": 17.54301,
      "duration": 0.53856,
      "confidence": 0.184
    },
    {
      "start": 18.08157,
      "duration": 0.52485,
      "confidence": 0.604
    },
    {
      "start": 18.60642,
      "duration": 0.51995,
      "confidence": 0.736
    },
    {
      "start": 19.12637,
      "duration": 0.53281,
      "confidence": 0.744
    },
    {
      "start": 19.65918,
      "duration": 0.5486,
      "confidence": 0.54
    },
    {
      "start": 20.20777,
      "duration": 0.55748,
      "confidence": 0.49
    },
    {
      "start": 20.76525,
      "duration": 0.56425,
      "confidence": 0.523
    },
    {
      "start": 21.3295,
      "duration": 0.57299,
      "confidence": 0.237
    },
    {
      "start": 21.90249,
      "duration": 0.5787,
      "confidence": 0.407
    },
    {
      "start": 22.48119,
      "duration": 0.58047,
      "confidence": 0.327
    },
    {
      "start": 23.06166,
      "duration": 0.56541,
      "confidence": 0.215
    },
    {
      "start": 23.62708,
      "duration": 0.56019,
      "confidence": 0.532
    },
    {
      "start": 24.18726,
      "duration": 0.55967,
      "confidence": 0.503
    },
    {
      "start": 24.74693,
      "duration": 0.55195,
      "confidence": 0.129
    },
    {
      "start": 25.29888,
      "duration": 0.5396,
      "confidence": 0.644
    },
    {
      "start": 25.83848,
      "duration": 0.54041,
      "confidence": 0.428
    },
    {
      "start": 26.37889,
      "duration": 0.53539,
      "confidence": 0.678
    },
    {
      "start": 26.91428,
      "duration": 0.53956,
      "confidence": 0.526
    },
    {
      "start": 27.45383,
      "duration": 0.53291,
      "confidence": 0.532
    },
    {
      "start": 27.98674,
      "duration": 0.52616,
      "confidence": 0.24
    },
    {
      "start": 28.5129,
      "duration": 0.52147,
      "confidence": 0.379
    },
    {
      "start": 29.03437,
      "duration": 0.52165,
      "confidence": 0.531
    },
    {
      "start": 29.55603,
      "duration": 0.51908,
      "confidence": 0.631
    },
    {
      "start": 30.07511,
      "duration": 0.52417,
      "confidence": 0.321
    },
    {
      "start": 30.59928,
      "duration": 0.52262,
      "confidence": 0.096
    },
    {
      "start": 31.1219,
      "duration": 0.52325,
      "confidence": 0.259
    },
    {
      "start": 31.64515,
      "duration": 0.51879,
      "confidence": 0.225
    },
    {
      "start": 32.16394,
      "duration": 0.52185,
      "confidence": 0.494
    },
    {
      "start": 32.68579,
      "duration": 0.52215,
      "confidence": 0.315
    },
    {
      "start": 33.20794,
      "duration": 0.5211,
      "confidence": 0.63
    },
    {
      "start": 33.72904,
      "duration": 0.52022,
      "confidence": 0.718
    },
    {
      "start": 34.24926,
      "duration": 0.52142,
      "confidence": 0.532
    },
    {
      "start": 34.77068,
      "duration": 0.51809,
      "confidence": 0.335
    },
    {
      "start": 35.28876,
      "duration": 0.51914,
      "confidence": 0.502
    },
    {
      "start": 35.8079,
      "duration": 0.52043,
      "confidence": 0.326
    },
    {
      "start": 36.32833,
      "duration": 0.51879,
      "confidence": 0.512
    },
    {
      "start": 36.84712,
      "duration": 0.51961,
      "confidence": 0.369
    },
    {
      "start": 37.36674,
      "duration": 0.52092,
      "confidence": 0.668
    },
    {
      "start": 37.88766,
      "duration": 0.52135,
      "confidence": 0.255
    },
    {
      "start": 38.40902,
      "duration": 0.52407,
      "confidence": 0.287
    },
    {
      "start": 38.93309,
      "duration": 0.52428,
      "confidence": 0.466
    },
    {
      "start": 39.45737,
      "duration": 0.52165,
      "confidence": 0.52
    },
    {
      "start": 39.97902,
      "duration": 0.52424,
      "confidence": 0.662
    },
    {
      "start": 40.50327,
      "duration": 0.52183,
      "confidence": 0.362
    },
    {
      "start": 41.02509,
      "duration": 0.52082,
      "confidence": 0.254
    },
    {
      "start": 41.54592,
      "duration": 0.52233,
      "confidence": 0.47
    },
    {
      "start": 42.06825,
      "duration": 0.52254,
      "confidence": 0.442
    },
    {
      "start": 42.59079,
      "duration": 0.51993,
      "confidence": 0.407
    },
    {
      "start": 43.11072,
      "duration": 0.5221,
      "confidence": 0.572
    },
    {
      "start": 43.63282,
      "duration": 0.52185,
      "confidence": 0.563
    },
    {
      "start": 44.15467,
      "duration": 0.52309,
      "confidence": 0.648
    },
    {
      "start": 44.67776,
      "duration": 0.52147,
      "confidence": 0.49
    },
    {
      "start": 45.19923,
      "duration": 0.52039,
      "confidence": 0.388
    },
    {
      "start": 45.71962,
      "duration": 0.52158,
      "confidence": 0.555
    },
    {
      "start": 46.2412,
      "duration": 0.52232,
      "confidence": 0.398
    },
    {
      "start": 46.76352,
      "duration": 0.52398,
      "confidence": 0.325
    },
    {
      "start": 47.2875,
      "duration": 0.52432,
      "confidence": 0.485
    },
    {
      "start": 47.81183,
      "duration": 0.52181,
      "confidence": 0.51
    },
    {
      "start": 48.33364,
      "duration": 0.52402,
      "confidence": 0.493
    },
    {
      "start": 48.85766,
      "duration": 0.52149,
      "confidence": 0.557
    },
    {
      "start": 49.37915,
      "duration": 0.52088,
      "confidence": 0.584
    },
    {
      "start": 49.90002,
      "duration": 0.52113,
      "confidence": 0.625
    },
    {
      "start": 50.42115,
      "duration": 0.51995,
      "confidence": 0.357
    },
    {
      "start": 50.9411,
      "duration": 0.5197,
      "confidence": 0.43
    },
    {
      "start": 51.46081,
      "duration": 0.51955,
      "confidence": 0.498
    },
    {
      "start": 51.98036,
      "duration": 0.5208,
      "confidence": 0.503
    },
    {
      "start": 52.50116,
      "duration": 0.52356,
      "confidence": 0.568
    },
    {
      "start": 53.02472,
      "duration": 0.52168,
      "confidence": 0.655
    },
    {
      "start": 53.5464,
      "duration": 0.52222,
      "confidence": 0.605
    },
    {
      "start": 54.06862,
      "duration": 0.52327,
      "confidence": 0.537
    },
    {
      "start": 54.59189,
      "duration": 0.52343,
      "confidence": 0.385
    },
    {
      "start": 55.11532,
      "duration": 0.52542,
      "confidence": 0.438
    },
    {
      "start": 55.64074,
      "duration": 0.52322,
      "confidence": 0.557
    },
    {
      "start": 56.16395,
      "duration": 0.52096,
      "confidence": 0.54
    },
    {
      "start": 56.68492,
      "duration": 0.52243,
      "confidence": 0.528
    },
    {
      "start": 57.20734,
      "duration": 0.51968,
      "confidence": 0.403
    },
    {
      "start": 57.72703,
      "duration": 0.51973,
      "confidence": 0.337
    },
    {
      "start": 58.24675,
      "duration": 0.52019,
      "confidence": 0.46
    },
    {
      "start": 58.76694,
      "duration": 0.52019,
      "confidence": 0.44
    },
    {
      "start": 59.28714,
      "duration": 0.52019,
      "confidence": 0.337
    },
    {
      "start": 59.80733,
      "duration": 0.52252,
      "confidence": 0.494
    },
    {
      "start": 60.32985,
      "duration": 0.52066,
      "confidence": 0.54
    },
    {
      "start": 60.85051,
      "duration": 0.52253,
      "confidence": 0.576
    },
    {
      "start": 61.37304,
      "duration": 0.52114,
      "confidence": 0.44
    },
    {
      "start": 61.89418,
      "duration": 0.52114,
      "confidence": 0.381
    },
    {
      "start": 62.41532,
      "duration": 0.52068,
      "confidence": 0.387
    },
    {
      "start": 62.936,
      "duration": 0.52162,
      "confidence": 0.328
    },
    {
      "start": 63.45763,
      "duration": 0.52024,
      "confidence": 0.351
    },
    {
      "start": 63.97786,
      "duration": 0.52164,
      "confidence": 0.54
    },
    {
      "start": 64.4995,
      "duration": 0.52211,
      "confidence": 0.714
    },
    {
      "start": 65.02161,
      "duration": 0.52118,
      "confidence": 0.75
    },
    {
      "start": 65.54279,
      "duration": 0.52025,
      "confidence": 0.785
    },
    {
      "start": 66.06304,
      "duration": 0.52165,
      "confidence": 0.787
    },
    {
      "start": 66.58469,
      "duration": 0.52257,
      "confidence": 0.738
    },
    {
      "start": 67.10726,
      "duration": 0.52163,
      "confidence": 0.699
    },
    {
      "start": 67.62889,
      "duration": 0.52209,
      "confidence": 0.632
    },
    {
      "start": 68.15099,
      "duration": 0.52209,
      "confidence": 0.688
    },
    {
      "start": 68.67308,
      "duration": 0.52582,
      "confidence": 0.492
    },
    {
      "start": 69.19889,
      "duration": 0.51836,
      "confidence": 0.421
    },
    {
      "start": 69.71725,
      "duration": 0.52442,
      "confidence": 0.427
    },
    {
      "start": 70.24167,
      "duration": 0.52024,
      "confidence": 0.618
    },
    {
      "start": 70.76191,
      "duration": 0.52072,
      "confidence": 0.579
    },
    {
      "start": 71.28263,
      "duration": 0.52212,
      "confidence": 0.613
    },
    {
      "start": 71.80475,
      "duration": 0.52306,
      "confidence": 0.723
    },
    {
      "start": 72.32781,
      "duration": 0.52074,
      "confidence": 0.779
    },
    {
      "start": 72.84854,
      "duration": 0.5282,
      "confidence": 0.666
    },
    {
      "start": 73.37674,
      "duration": 0.52027,
      "confidence": 0.662
    },
    {
      "start": 73.89701,
      "duration": 0.52585,
      "confidence": 0.527
    },
    {
      "start": 74.42285,
      "duration": 0.52537,
      "confidence": 0.717
    },
    {
      "start": 74.94822,
      "duration": 0.52396,
      "confidence": 0.693
    },
    {
      "start": 75.47218,
      "duration": 0.52116,
      "confidence": 0.615
    },
    {
      "start": 75.99334,
      "duration": 0.52162,
      "confidence": 0.512
    },
    {
      "start": 76.51496,
      "duration": 0.52021,
      "confidence": 0.696
    },
    {
      "start": 77.03517,
      "duration": 0.52161,
      "confidence": 0.536
    },
    {
      "start": 77.55678,
      "duration": 0.52022,
      "confidence": 0.616
    },
    {
      "start": 78.07701,
      "duration": 0.52163,
      "confidence": 0.428
    },
    {
      "start": 78.59864,
      "duration": 0.51885,
      "confidence": 0.586
    },
    {
      "start": 79.11749,
      "duration": 0.52118,
      "confidence": 0.512
    },
    {
      "start": 79.63866,
      "duration": 0.52118,
      "confidence": 0.452
    },
    {
      "start": 80.15984,
      "duration": 0.52397,
      "confidence": 0.645
    },
    {
      "start": 80.68382,
      "duration": 0.52164,
      "confidence": 0.752
    },
    {
      "start": 81.20546,
      "duration": 0.52024,
      "confidence": 0.693
    },
    {
      "start": 81.7257,
      "duration": 0.51977,
      "confidence": 0.615
    },
    {
      "start": 82.24547,
      "duration": 0.52302,
      "confidence": 0.535
    },
    {
      "start": 82.76849,
      "duration": 0.52115,
      "confidence": 0.724
    },
    {
      "start": 83.28964,
      "duration": 0.51881,
      "confidence": 0.728
    },
    {
      "start": 83.80845,
      "duration": 0.52207,
      "confidence": 0.638
    },
    {
      "start": 84.33052,
      "duration": 0.5216,
      "confidence": 0.456
    },
    {
      "start": 84.85212,
      "duration": 0.52161,
      "confidence": 0.584
    },
    {
      "start": 85.37373,
      "duration": 0.52068,
      "confidence": 0.381
    },
    {
      "start": 85.89441,
      "duration": 0.52254,
      "confidence": 0.355
    },
    {
      "start": 86.41695,
      "duration": 0.52255,
      "confidence": 0.547
    },
    {
      "start": 86.9395,
      "duration": 0.52394,
      "confidence": 0.715
    },
    {
      "start": 87.46344,
      "duration": 0.51928,
      "confidence": 0.591
    },
    {
      "start": 87.98273,
      "duration": 0.5216,
      "confidence": 0.459
    },
    {
      "start": 88.50433,
      "duration": 0.51926,
      "confidence": 0.419
    },
    {
      "start": 89.02359,
      "duration": 0.52065,
      "confidence": 0.578
    },
    {
      "start": 89.54424,
      "duration": 0.5197,
      "confidence": 0.402
    },
    {
      "start": 90.06395,
      "duration": 0.52202,
      "confidence": 0.374
    },
    {
      "start": 90.58596,
      "duration": 0.52387,
      "confidence": 0.262
    },
    {
      "start": 91.10983,
      "duration": 0.5206,
      "confidence": 0.417
    },
    {
      "start": 91.63043,
      "duration": 0.52246,
      "confidence": 0.432
    },
    {
      "start": 92.1529,
      "duration": 0.52573,
      "confidence": 0.41
    },
    {
      "start": 92.67862,
      "duration": 0.5248,
      "confidence": 0.239
    },
    {
      "start": 93.20342,
      "duration": 0.52295,
      "confidence": 0.363
    },
    {
      "start": 93.72637,
      "duration": 0.52155,
      "confidence": 0.431
    },
    {
      "start": 94.24792,
      "duration": 0.52109,
      "confidence": 0.532
    },
    {
      "start": 94.76902,
      "duration": 0.52155,
      "confidence": 0.584
    },
    {
      "start": 95.29057,
      "duration": 0.52108,
      "confidence": 0.636
    },
    {
      "start": 95.81165,
      "duration": 0.52105,
      "confidence": 0.619
    },
    {
      "start": 96.33269,
      "duration": 0.52195,
      "confidence": 0.464
    },
    {
      "start": 96.85464,
      "duration": 0.52052,
      "confidence": 0.465
    },
    {
      "start": 97.37515,
      "duration": 0.52096,
      "confidence": 0.498
    },
    {
      "start": 97.89612,
      "duration": 0.51954,
      "confidence": 0.447
    },
    {
      "start": 98.41566,
      "duration": 0.52235,
      "confidence": 0.482
    },
    {
      "start": 98.93801,
      "duration": 0.51957,
      "confidence": 0.58
    },
    {
      "start": 99.45758,
      "duration": 0.52054,
      "confidence": 0.647
    },
    {
      "start": 99.97812,
      "duration": 0.52153,
      "confidence": 0.562
    },
    {
      "start": 100.49965,
      "duration": 0.52251,
      "confidence": 0.346
    },
    {
      "start": 101.02216,
      "duration": 0.52163,
      "confidence": 0.435
    },
    {
      "start": 101.54379,
      "duration": 0.5249,
      "confidence": 0.541
    },
    {
      "start": 102.06869,
      "duration": 0.52164,
      "confidence": 0.559
    },
    {
      "start": 102.59033,
      "duration": 0.52442,
      "confidence": 0.577
    },
    {
      "start": 103.11475,
      "duration": 0.52065,
      "confidence": 0.354
    },
    {
      "start": 103.6354,
      "duration": 0.51969,
      "confidence": 0.275
    },
    {
      "start": 104.1551,
      "duration": 0.52245,
      "confidence": 0.406
    },
    {
      "start": 104.67755,
      "duration": 0.52429,
      "confidence": 0.409
    },
    {
      "start": 105.20184,
      "duration": 0.51823,
      "confidence": 0.403
    },
    {
      "start": 105.72007,
      "duration": 0.52196,
      "confidence": 0.547
    },
    {
      "start": 106.24203,
      "duration": 0.52011,
      "confidence": 0.559
    },
    {
      "start": 106.76214,
      "duration": 0.52338,
      "confidence": 0.597
    },
    {
      "start": 107.28552,
      "duration": 0.52199,
      "confidence": 0.479
    },
    {
      "start": 107.80752,
      "duration": 0.5206,
      "confidence": 0.404
    },
    {
      "start": 108.32812,
      "duration": 0.52012,
      "confidence": 0.475
    },
    {
      "start": 108.84824,
      "duration": 0.52429,
      "confidence": 0.416
    },
    {
      "start": 109.37254,
      "duration": 0.52427,
      "confidence": 0.368
    },
    {
      "start": 109.89681,
      "duration": 0.52471,
      "confidence": 0.515
    },
    {
      "start": 110.42152,
      "duration": 0.52189,
      "confidence": 0.496
    },
    {
      "start": 110.9434,
      "duration": 0.52279,
      "confidence": 0.486
    },
    {
      "start": 111.46619,
      "duration": 0.52042,
      "confidence": 0.566
    },
    {
      "start": 111.98661,
      "duration": 0.52132,
      "confidence": 0.57
    },
    {
      "start": 112.50793,
      "duration": 0.52083,
      "confidence": 0.579
    },
    {
      "start": 113.02876,
      "duration": 0.51988,
      "confidence": 0.413
    },
    {
      "start": 113.54865,
      "duration": 0.51985,
      "confidence": 0.468
    },
    {
      "start": 114.06849,
      "duration": 0.52028,
      "confidence": 0.517
    },
    {
      "start": 114.58878,
      "duration": 0.52115,
      "confidence": 0.518
    },
    {
      "start": 115.10993,
      "duration": 0.5239,
      "confidence": 0.581
    },
    {
      "start": 115.63383,
      "duration": 0.5215,
      "confidence": 0.668
    },
    {
      "start": 116.15533,
      "duration": 0.52142,
      "confidence": 0.612
    },
    {
      "start": 116.67675,
      "duration": 0.52271,
      "confidence": 0.556
    },
    {
      "start": 117.19946,
      "duration": 0.52449,
      "confidence": 0.389
    },
    {
      "start": 117.72395,
      "duration": 0.52485,
      "confidence": 0.441
    },
    {
      "start": 118.24879,
      "duration": 0.52291,
      "confidence": 0.556
    },
    {
      "start": 118.7717,
      "duration": 0.52096,
      "confidence": 0.544
    },
    {
      "start": 119.29266,
      "duration": 0.52275,
      "confidence": 0.523
    },
    {
      "start": 119.81542,
      "duration": 0.52083,
      "confidence": 0.385
    },
    {
      "start": 120.33625,
      "duration": 0.51986,
      "confidence": 0.349
    },
    {
      "start": 120.85611,
      "duration": 0.52075,
      "confidence": 0.49
    },
    {
      "start": 121.37686,
      "duration": 0.5212,
      "confidence": 0.461
    },
    {
      "start": 121.89806,
      "duration": 0.52118,
      "confidence": 0.365
    },
    {
      "start": 122.41924,
      "duration": 0.52303,
      "confidence": 0.503
    },
    {
      "start": 122.94228,
      "duration": 0.52117,
      "confidence": 0.519
    },
    {
      "start": 123.46345,
      "duration": 0.52256,
      "confidence": 0.56
    },
    {
      "start": 123.98601,
      "duration": 0.52302,
      "confidence": 0.433
    },
    {
      "start": 124.50902,
      "duration": 0.51976,
      "confidence": 0.331
    },
    {
      "start": 125.02879,
      "duration": 0.51883,
      "confidence": 0.31
    },
    {
      "start": 125.54762,
      "duration": 0.52069,
      "confidence": 0.227
    },
    {
      "start": 126.0683,
      "duration": 0.51929,
      "confidence": 0.336
    },
    {
      "start": 126.58759,
      "duration": 0.52068,
      "confidence": 0.525
    },
    {
      "start": 127.10827,
      "duration": 0.52207,
      "confidence": 0.712
    },
    {
      "start": 127.63034,
      "duration": 0.52067,
      "confidence": 0.686
    },
    {
      "start": 128.15102,
      "duration": 0.51974,
      "confidence": 0.774
    },
    {
      "start": 128.67075,
      "duration": 0.52206,
      "confidence": 0.73
    },
    {
      "start": 129.19281,
      "duration": 0.5202,
      "confidence": 0.792
    },
    {
      "start": 129.71301,
      "duration": 0.52158,
      "confidence": 0.718
    },
    {
      "start": 130.23459,
      "duration": 0.52111,
      "confidence": 0.601
    },
    {
      "start": 130.7557,
      "duration": 0.52157,
      "confidence": 0.528
    },
    {
      "start": 131.27727,
      "duration": 0.52111,
      "confidence": 0.462
    },
    {
      "start": 131.79839,
      "duration": 0.52343,
      "confidence": 0.571
    },
    {
      "start": 132.32181,
      "duration": 0.5225,
      "confidence": 0.592
    },
    {
      "start": 132.8443,
      "duration": 0.52482,
      "confidence": 0.687
    },
    {
      "start": 133.36913,
      "duration": 0.52296,
      "confidence": 0.661
    },
    {
      "start": 133.89207,
      "duration": 0.52203,
      "confidence": 0.566
    },
    {
      "start": 134.41412,
      "duration": 0.5211,
      "confidence": 0.573
    },
    {
      "start": 134.93521,
      "duration": 0.52249,
      "confidence": 0.48
    },
    {
      "start": 135.4577,
      "duration": 0.52248,
      "confidence": 0.54
    },
    {
      "start": 135.98018,
      "duration": 0.52248,
      "confidence": 0.66
    },
    {
      "start": 136.50266,
      "duration": 0.51969,
      "confidence": 0.691
    },
    {
      "start": 137.02234,
      "duration": 0.52247,
      "confidence": 0.79
    },
    {
      "start": 137.54482,
      "duration": 0.52199,
      "confidence": 0.716
    },
    {
      "start": 138.0668,
      "duration": 0.52153,
      "confidence": 0.605
    },
    {
      "start": 138.58833,
      "duration": 0.52152,
      "confidence": 0.57
    },
    {
      "start": 139.10986,
      "duration": 0.52106,
      "confidence": 0.584
    },
    {
      "start": 139.6309,
      "duration": 0.51966,
      "confidence": 0.504
    },
    {
      "start": 140.15057,
      "duration": 0.52198,
      "confidence": 0.613
    },
    {
      "start": 140.67256,
      "duration": 0.52059,
      "confidence": 0.628
    },
    {
      "start": 141.19315,
      "duration": 0.52244,
      "confidence": 0.68
    },
    {
      "start": 141.71559,
      "duration": 0.52337,
      "confidence": 0.481
    },
    {
      "start": 142.23895,
      "duration": 0.52105,
      "confidence": 0.371
    },
    {
      "start": 142.76001,
      "duration": 0.52151,
      "confidence": 0.458
    },
    {
      "start": 143.28152,
      "duration": 0.5229,
      "confidence": 0.511
    },
    {
      "start": 143.80441,
      "duration": 0.52243,
      "confidence": 0.591
    },
    {
      "start": 144.32686,
      "duration": 0.52336,
      "confidence": 0.694
    },
    {
      "start": 144.85022,
      "duration": 0.52243,
      "confidence": 0.711
    },
    {
      "start": 145.37265,
      "duration": 0.51965,
      "confidence": 0.773
    },
    {
      "start": 145.89229,
      "duration": 0.5215,
      "confidence": 0.688
    },
    {
      "start": 146.4138,
      "duration": 0.52336,
      "confidence": 0.576
    },
    {
      "start": 146.93716,
      "duration": 0.52383,
      "confidence": 0.491
    },
    {
      "start": 147.46098,
      "duration": 0.5229,
      "confidence": 0.492
    },
    {
      "start": 147.9839,
      "duration": 0.51687,
      "confidence": 0.574
    },
    {
      "start": 148.50076,
      "duration": 0.52105,
      "confidence": 0.528
    },
    {
      "start": 149.02182,
      "duration": 0.52477,
      "confidence": 0.532
    },
    {
      "start": 149.54659,
      "duration": 0.52291,
      "confidence": 0.375
    },
    {
      "start": 150.0695,
      "duration": 0.52153,
      "confidence": 0.243
    },
    {
      "start": 150.59103,
      "duration": 0.52154,
      "confidence": 0.187
    },
    {
      "start": 151.11256,
      "duration": 0.52108,
      "confidence": 0.177
    },
    {
      "start": 151.63364,
      "duration": 0.52619,
      "confidence": 0.313
    },
    {
      "start": 152.15984,
      "duration": 0.52202,
      "confidence": 0.391
    },
    {
      "start": 152.68185,
      "duration": 0.52063,
      "confidence": 0.498
    },
    {
      "start": 153.20248,
      "duration": 0.52062,
      "confidence": 0.537
    },
    {
      "start": 153.72311,
      "duration": 0.51922,
      "confidence": 0.62
    },
    {
      "start": 154.24234,
      "duration": 0.52015,
      "confidence": 0.587
    },
    {
      "start": 154.76248,
      "duration": 0.522,
      "confidence": 0.468
    },
    {
      "start": 155.28448,
      "duration": 0.5206,
      "confidence": 0.476
    },
    {
      "start": 155.80508,
      "duration": 0.52013,
      "confidence": 0.511
    },
    {
      "start": 156.32521,
      "duration": 0.5206,
      "confidence": 0.461
    },
    {
      "start": 156.84583,
      "duration": 0.52246,
      "confidence": 0.454
    },
    {
      "start": 157.36829,
      "duration": 0.52155,
      "confidence": 0.532
    },
    {
      "start": 157.88983,
      "duration": 0.52157,
      "confidence": 0.607
    },
    {
      "start": 158.41139,
      "duration": 0.52205,
      "confidence": 0.545
    },
    {
      "start": 158.93346,
      "duration": 0.52254,
      "confidence": 0.307
    },
    {
      "start": 159.45598,
      "duration": 0.52304,
      "confidence": 0.391
    },
    {
      "start": 159.97902,
      "duration": 0.52447,
      "confidence": 0.511
    },
    {
      "start": 160.5035,
      "duration": 0.5208,
      "confidence": 0.547
    },
    {
      "start": 161.02428,
      "duration": 0.52315,
      "confidence": 0.576
    },
    {
      "start": 161.54742,
      "duration": 0.51948,
      "confidence": 0.336
    },
    {
      "start": 162.06691,
      "duration": 0.51905,
      "confidence": 0.177
    },
    {
      "start": 162.58595,
      "duration": 0.52282,
      "confidence": 0.273
    },
    {
      "start": 163.1088,
      "duration": 0.52425,
      "confidence": 0.269
    },
    {
      "start": 163.63304,
      "duration": 0.51872,
      "confidence": 0.39
    },
    {
      "start": 164.15176,
      "duration": 0.52295,
      "confidence": 0.525
    },
    {
      "start": 164.67471,
      "duration": 0.523,
      "confidence": 0.453
    },
    {
      "start": 165.19771,
      "duration": 0.52352,
      "confidence": 0.543
    },
    {
      "start": 165.72124,
      "duration": 0.5231,
      "confidence": 0.464
    },
    {
      "start": 166.24432,
      "duration": 0.52081,
      "confidence": 0.375
    },
    {
      "start": 166.76515,
      "duration": 0.51899,
      "confidence": 0.457
    },
    {
      "start": 167.28413,
      "duration": 0.52134,
      "confidence": 0.431
    },
    {
      "start": 167.80548,
      "duration": 0.52415,
      "confidence": 0.364
    },
    {
      "start": 168.32964,
      "duration": 0.52276,
      "confidence": 0.429
    },
    {
      "start": 168.85239,
      "duration": 0.5223,
      "confidence": 0.442
    },
    {
      "start": 169.3747,
      "duration": 0.52324,
      "confidence": 0.445
    },
    {
      "start": 169.89792,
      "duration": 0.52045,
      "confidence": 0.546
    },
    {
      "start": 170.41837,
      "duration": 0.52047,
      "confidence": 0.533
    },
    {
      "start": 170.93884,
      "duration": 0.52281,
      "confidence": 0.496
    },
    {
      "start": 171.46165,
      "duration": 0.52052,
      "confidence": 0.291
    },
    {
      "start": 171.98216,
      "duration": 0.51961,
      "confidence": 0.303
    },
    {
      "start": 172.50179,
      "duration": 0.51918,
      "confidence": 0.317
    },
    {
      "start": 173.02097,
      "duration": 0.52013,
      "confidence": 0.341
    },
    {
      "start": 173.54109,
      "duration": 0.52389,
      "confidence": 0.474
    },
    {
      "start": 174.06499,
      "duration": 0.52299,
      "confidence": 0.518
    },
    {
      "start": 174.58797,
      "duration": 0.52209,
      "confidence": 0.463
    },
    {
      "start": 175.11006,
      "duration": 0.52211,
      "confidence": 0.29
    },
    {
      "start": 175.63217,
      "duration": 0.52306,
      "confidence": 0.278
    },
    {
      "start": 176.15523,
      "duration": 0.52633,
      "confidence": 0.227
    },
    {
      "start": 176.68156,
      "duration": 0.5245,
      "confidence": 0.391
    },
    {
      "start": 177.20605,
      "duration": 0.52034,
      "confidence": 0.479
    },
    {
      "start": 177.7264,
      "duration": 0.5213,
      "confidence": 0.514
    },
    {
      "start": 178.2477,
      "duration": 0.51854,
      "confidence": 0.379
    },
    {
      "start": 178.76624,
      "duration": 0.51857,
      "confidence": 0.314
    },
    {
      "start": 179.2848,
      "duration": 0.51954,
      "confidence": 0.42
    },
    {
      "start": 179.80437,
      "duration": 0.52005,
      "confidence": 0.346
    },
    {
      "start": 180.32442,
      "duration": 0.51961,
      "confidence": 0.281
    },
    {
      "start": 180.84402,
      "duration": 0.52335,
      "confidence": 0.42
    },
    {
      "start": 181.36737,
      "duration": 0.52336,
      "confidence": 0.431
    },
    {
      "start": 181.89073,
      "duration": 0.52477,
      "confidence": 0.56
    },
    {
      "start": 182.4155,
      "duration": 0.52431,
      "confidence": 0.447
    },
    {
      "start": 182.9398,
      "duration": 0.52151,
      "confidence": 0.375
    },
    {
      "start": 183.46132,
      "duration": 0.52105,
      "confidence": 0.41
    },
    {
      "start": 183.98238,
      "duration": 0.52338,
      "confidence": 0.367
    },
    {
      "start": 184.50575,
      "duration": 0.52012,
      "confidence": 0.378
    },
    {
      "start": 185.02586,
      "duration": 0.51825,
      "confidence": 0.494
    },
    {
      "start": 185.54411,
      "duration": 0.5201,
      "confidence": 0.504
    },
    {
      "start": 186.06422,
      "duration": 0.52288,
      "confidence": 0.417
    },
    {
      "start": 186.5871,
      "duration": 0.52239,
      "confidence": 0.366
    },
    {
      "start": 187.10948,
      "duration": 0.5219,
      "confidence": 0.304
    },
    {
      "start": 187.63138,
      "duration": 0.5214,
      "confidence": 0.285
    },
    {
      "start": 188.15279,
      "duration": 0.52136,
      "confidence": 0.383
    },
    {
      "start": 188.67413,
      "duration": 0.52318,
      "confidence": 0.342
    },
    {
      "start": 189.19733,
      "duration": 0.52268,
      "confidence": 0.288
    },
    {
      "start": 189.72,
      "duration": 0.52125,
      "confidence": 0.386
    },
    {
      "start": 190.24126,
      "duration": 0.52309,
      "confidence": 0.384
    },
    {
      "start": 190.76433,
      "duration": 0.52074,
      "confidence": 0.389
    },
    {
      "start": 191.28506,
      "duration": 0.5184,
      "confidence": 0.427
    },
    {
      "start": 191.80347,
      "duration": 0.52398,
      "confidence": 0.445
    },
    {
      "start": 192.32745,
      "duration": 0.52445,
      "confidence": 0.341
    },
    {
      "start": 192.8519,
      "duration": 0.52167,
      "confidence": 0.288
    },
    {
      "start": 193.37357,
      "duration": 0.5226,
      "confidence": 0.272
    },
    {
      "start": 193.89616,
      "duration": 0.52215,
      "confidence": 0.392
    },
    {
      "start": 194.41832,
      "duration": 0.52215,
      "confidence": 0.486
    },
    {
      "start": 194.94048,
      "duration": 0.52076,
      "confidence": 0.331
    },
    {
      "start": 195.46124,
      "duration": 0.51937,
      "confidence": 0.186
    },
    {
      "start": 195.9806,
      "duration": 0.52169,
      "confidence": 0.261
    },
    {
      "start": 196.5023,
      "duration": 0.52355,
      "confidence": 0.395
    },
    {
      "start": 197.02585,
      "duration": 0.51983,
      "confidence": 0.402
    },
    {
      "start": 197.54568,
      "duration": 0.52215,
      "confidence": 0.4
    },
    {
      "start": 198.06783,
      "duration": 0.52121,
      "confidence": 0.487
    },
    {
      "start": 198.58904,
      "duration": 0.52586,
      "confidence": 0.532
    },
    {
      "start": 199.1149,
      "duration": 0.51887,
      "confidence": 0.376
    },
    {
      "start": 199.63377,
      "duration": 0.51979,
      "confidence": 0.279
    },
    {
      "start": 200.15356,
      "duration": 0.52163,
      "confidence": 0.341
    },
    {
      "start": 200.67519,
      "duration": 0.52347,
      "confidence": 0.351
    },
    {
      "start": 201.19865,
      "duration": 0.52198,
      "confidence": 0.2
    },
    {
      "start": 201.72064,
      "duration": 0.52695,
      "confidence": 0.081
    },
    {
      "start": 202.24759,
      "duration": 0.52929,
      "confidence": 0.046
    },
    {
      "start": 202.77689,
      "duration": 0.52929,
      "confidence": 0.053
    }
  ],
  "sections": [
    {
      "start": 0,
      "duration": 6.97092,
      "confidence": 1,
      "loudness": -14.938,
      "tempo": 113.178,
      "tempo_confidence": 0.647,
      "key": 9,
      "key_confidence": 0.297,
      "mode": 1,
      "mode_confidence": 0.471,
      "time_signature": 4,
      "time_signature_confidence": 1
    },
    {
      "start": 6.97092,
      "duration": 23.10418,
      "confidence": 0.829,
      "loudness": -7.771,
      "tempo": 109.173,
      "tempo_confidence": 0.501,
      "key": 9,
      "key_confidence": 0.162,
      "mode": 0,
      "mode_confidence": 0.319,
      "time_signature": 4,
      "time_signature_confidence": 1
    },
    {
      "start": 30.07511,
      "duration": 34.4244,
      "confidence": 0.743,
      "loudness": -1.593,
      "tempo": 115.02,
      "tempo_confidence": 0.458,
      "key": 9,
      "key_confidence": 0,
      "mode": 1,
      "mode_confidence": 0.214,
      "time_signature": 4,
      "time_signature_confidence": 0.969
    },
    {
      "start": 64.4995,
      "duration": 28.70392,
      "confidence": 0.86,
      "loudness": -6.108,
      "tempo": 115.066,
      "tempo_confidence": 0.575,
      "key": 11,
      "key_confidence": 0.54,
      "mode": 0,
      "mode_confidence": 0.486,
      "time_signature": 4,
      "time_signature_confidence": 1
    },
    {
      "start": 93.20342,
      "duration": 35.98939,
      "confidence": 0.73,
      "loudness": -1.492,
      "tempo": 115.081,
      "tempo_confidence": 0.495,
      "key": 9,
      "key_confidence": 0,
      "mode": 1,
      "mode_confidence": 0.026,
      "time_signature": 4,
      "time_signature_confidence": 1
    },
    {
      "start": 129.19281,
      "duration": 20.87669,
      "confidence": 0.614,
      "loudness": -3.597,
      "tempo": 114.954,
      "tempo_confidence": 0.591,
      "key": 11,
      "key_confidence": 0.398,
      "mode": 0,
      "mode_confidence": 0.383,
      "time_signature": 4,
      "time_signature_confidence": 1
    },
    {
      "start": 150.0695,
      "duration": 57.89036,
      "confidence": 0.701,
      "loudness": -1.024,
      "tempo": 114.986,
      "tempo_confidence": 0.39,
      "key": 2,
      "key_confidence": 0.043,
      "mode": 1,
      "mode_confidence": 0.382,
      "time_signature": 4,
      "time_signature_confidence": 1
    }
  ],
  "segments": [
    {
      "start": 0,
      "duration": 0.24317,
      "confidence": 1,
      "loudness_start": -59.656,
      "loudness_max_time": 0.21478,
      "loudness_max": -36.317,
      "loudness_end": 0,
      "pitches": [
        0.769,
        1,
        0.262,
        0.182,
        0.28,
        0.316,
        0.129,
        0.116,
        0.188,
        0.213,
        0.241,
        0.423
      ],
      "timbre": [
        7.406,
        64.456,
        37.595,
        -176.296,
        43.329,
        -43.952,
        71.439,
        -117.9,
        -41.103,
        37.712,
        20.429,
        -8.869
      ]
    },
    {
      "start": 0.24317,
      "duration": 0.2624,
      "confidence": 0.975,
      "loudness_start": -34.039,
      "loudness_max_time": 0.07659,
      "loudness_max": -20.161,
      "loudness_end": 0,
      "pitches": [
        0.517,
        0.464,
        0.286,
        0.5,
        0.476,
        0.446,
        0.323,
        0.759,
        1,
        0.621,
        0.447,
        0.388
      ],
      "timbre": [
        32.213,
        8.343,
        41.371,
        -125.928,
        -20.494,
        -14.643,
        34.569,
        31.383,
        1.863,
        -4.452,
        -3.377,
        -6.69
      ]
    },
    {
      "start": 0.50558,
      "duration": 0.19596,
      "confidence": 0.362,
      "loudness_start": -24.576,
      "loudness_max_time": 0.07177,
      "loudness_max": -16.295,
      "loudness_end": 0,
      "pitches": [
        0.667,
        0.772,
        0.963,
        1,
        0.884,
        0.491,
        0.345,
        0.396,
        0.399,
        0.342,
        0.361,
        0.726
      ],
      "timbre": [
        40.463,
        57.892,
        1.418,
        -24.92,
        -7.913,
        -53.271,
        -21.592,
        -0.285,
        -0.743,
        9.137,
        -8.135,
        17.104
      ]
    },
    {
      "start": 0.70154,
      "duration": 0.19891,
      "confidence": 0.435,
      "loudness_start": -23.053,
      "loudness_max_time": 0.07305,
      "loudness_max": -14.25,
      "loudness_end": 0,
      "pitches": [
        0.212,
        0.141,
        0.294,
        0.396,
        1,
        0.761,
        0.791,
        0.364,
        0.826,
        0.477,
        0.271,
        0.169
      ],
      "timbre": [
        42.115,
        64.373,
        -0.233,
        -62.878,
        15.916,
        -52.444,
        -26.514,
        23.189,
        -10.518,
        10.089,
        -2.726,
        36.01
      ]
    },
    {
      "start": 0.90045,
      "duration": 0.12082,
      "confidence": 0.253,
      "loudness_start": -18.084,
      "loudness_max_time": 0.00395,
      "loudness_max": -13.326,
      "loudness_end": 0,
      "pitches": [
        0.28,
        0.292,
        0.373,
        0.515,
        0.596,
        0.803,
        1,
        0.251,
        0.573,
        0.747,
        0.764,
        0.439
      ],
      "timbre": [
        43.633,
        83.613,
        -21.969,
        -26.144,
        23.659,
        -59.22,
        -26.908,
        -0.353,
        -20.946,
        -14.37,
        -18.398,
        34.41
      ]
    },
    {
      "start": 1.02127,
      "duration": 0.13397,
      "confidence": 0.192,
      "loudness_start": -18.845,
      "loudness_max_time": 0.01286,
      "loudness_max": -13.767,
      "loudness_end": 0,
      "pitches": [
        0.593,
        0.248,
        0.446,
        0.28,
        0.463,
        0.388,
        0.215,
        0.516,
        1,
        0.941,
        0.849,
        0.712
      ],
      "timbre": [
        44.266,
        99.305,
        -22.798,
        -30.886,
        39.336,
        -47.621,
        -27.068,
        4.321,
        -29.58,
        1.306,
        -5.506,
        -0.861
      ]
    },
    {
      "start": 1.15524,
      "duration": 0.06925,
      "confidence": 0.138,
      "loudness_start": -18.386,
      "loudness_max_time": 0.00814,
      "loudness_max": -13.666,
      "loudness_end": 0,
      "pitches": [
        1,
        0.615,
        0.664,
        0.192,
        0.821,
        0.44,
        0.703,
        0.39,
        0.156,
        0.261,
        0.3,
        0.862
      ],
      "timbre": [
        44.676,
        95.024,
        -42.257,
        -50.65,
        49.857,
        -62.797,
        -20.237,
        -12.859,
        -29.442,
        15.683,
        -5.127,
        -13.065
      ]
    },
    {
      "start": 1.22449,
      "duration": 0.12794,
      "confidence": 0.165,
      "loudness_start": -16.504,
      "loudness_max_time": 0.07301,
      "loudness_max": -12.099,
      "loudness_end": 0,
      "pitches": [
        0.659,
        0.517,
        0.146,
        0.134,
        0.473,
        0.255,
        0.55,
        0.475,
        0.985,
        0.49,
        0.395,
        1
      ],
      "timbre": [
        45.915,
        97.503,
        -26.322,
        -48.833,
        56.106,
        -49.835,
        -13.812,
        -11.249,
        -21.705,
        -6.644,
        -17.087,
        -14.821
      ]
    },
    {
      "start": 1.35243,
      "duration": 0.26712,
      "confidence": 0.316,
      "loudness_start": -16.901,
      "loudness_max_time": 0.01498,
      "loudness_max": -9.849,
      "loudness_end": 0,
      "pitches": [
        0.722,
        0.682,
        0.799,
        0.542,
        0.788,
        0.416,
        0.549,
        0.516,
        0.533,
        1,
        0.603,
        0.963
      ],
      "timbre": [
        41.75,
        147.291,
        42.697,
        147.985,
        58.828,
        -62.169,
        -16.427,
        36.229,
        -2.323,
        -38.945,
        -32.106,
        0.207
      ]
    },
    {
      "start": 1.61955,
      "duration": 0.12771,
      "confidence": 0.049,
      "loudness_start": -32.781,
      "loudness_max_time": 0.01443,
      "loudness_max": -28.842,
      "loudness_end": 0,
      "pitches": [
        0.347,
        0.373,
        0.839,
        0.418,
        1,
        0.232,
        0.236,
        0.334,
        0.362,
        0.52,
        0.384,
        0.385
      ],
      "timbre": [
        27.549,
        147.295,
        63.185,
        49.348,
        84.831,
        -50.119,
        -22.682,
        -9.317,
        -13.382,
        7.916,
        -14.081,
        -15.827
      ]
    },
    {
      "start": 1.74726,
      "duration": 0.11619,
      "confidence": 0.751,
      "loudness_start": -37.662,
      "loudness_max_time": 0.03201,
      "loudness_max": -27.191,
      "loudness_end": 0,
      "pitches": [
        0.757,
        0.506,
        0.91,
        0.625,
        0.908,
        0.468,
        0.575,
        0.624,
        0.9,
        0.857,
        1,
        0.62
      ],
      "timbre": [
        29.043,
        205.51,
        65.807,
        50.667,
        46.007,
        -26.052,
        -14.346,
        -24.236,
        -10.665,
        -0.232,
        5.551,
        7.381
      ]
    },
    {
      "start": 1.86345,
      "duration": 0.27293,
      "confidence": 1,
      "loudness_start": -35.78,
      "loudness_max_time": 0.01517,
      "loudness_max": -13.48,
      "loudness_end": 0,
      "pitches": [
        0.941,
        0.863,
        0.756,
        0.727,
        0.776,
        0.593,
        0.821,
        0.701,
        0.673,
        0.698,
        0.653,
        1
      ],
      "timbre": [
        38.641,
        153.202,
        75.3,
        164.709,
        58.086,
        -30.942,
        -13.077,
        54.485,
        -16.993,
        -20.054,
        -25.239,
        12.092
      ]
    },
    {
      "start": 2.13637,
      "duration": 0.1332,
      "confidence": 0.524,
      "loudness_start": -38.476,
      "loudness_max_time": 0.02296,
      "loudness_max": -30.907,
      "loudness_end": 0,
      "pitches": [
        0.753,
        0.556,
        0.623,
        0.44,
        0.347,
        0.355,
        0.444,
        0.619,
        0.83,
        0.775,
        1,
        0.463
      ],
      "timbre": [
        24.65,
        170.76,
        41.883,
        56.703,
        32.906,
        -28.097,
        7.596,
        -13.523,
        -23.321,
        0.105,
        2.103,
        11.217
      ]
    },
    {
      "start": 2.26957,
      "duration": 0.11633,
      "confidence": 0.891,
      "loudness_start": -40.49,
      "loudness_max_time": 0.02933,
      "loudness_max": -28.262,
      "loudness_end": 0,
      "pitches": [
        0.694,
        0.515,
        0.801,
        0.58,
        0.532,
        0.508,
        0.621,
        0.715,
        0.888,
        0.631,
        1,
        0.5
      ],
      "timbre": [
        28.006,
        225.388,
        62.176,
        52.508,
        29.728,
        -24.915,
        -0.656,
        -24.972,
        -22.289,
        -0.424,
        7.753,
        27.552
      ]
    },
    {
      "start": 2.3859,
      "duration": 0.27279,
      "confidence": 1,
      "loudness_start": -37.705,
      "loudness_max_time": 0.03593,
      "loudness_max": -13.085,
      "loudness_end": 0,
      "pitches": [
        0.954,
        1,
        0.887,
        0.923,
        0.795,
        0.687,
        0.948,
        0.774,
        0.768,
        0.799,
        0.755,
        0.995
      ],
      "timbre": [
        38.779,
        146.515,
        61.676,
        183.78,
        52.308,
        -23.296,
        -11.282,
        44.738,
        -11.799,
        -27.779,
        -39.641,
        16.555
      ]
    },
    {
      "start": 2.65868,
      "duration": 0.11615,
      "confidence": 0.793,
      "loudness_start": -38.745,
      "loudness_max_time": 0.02069,
      "loudness_max": -28.314,
      "loudness_end": 0,
      "pitches": [
        0.721,
        0.464,
        0.723,
        0.592,
        0.412,
        0.502,
        0.516,
        0.593,
        0.703,
        0.698,
        1,
        0.542
      ],
      "timbre": [
        26.873,
        220.947,
        56.154,
        69.706,
        32.42,
        -36.04,
        0.995,
        -32.17,
        -28.067,
        -2.619,
        -2.714,
        18.485
      ]
    },
    {
      "start": 2.77483,
      "duration": 0.26113,
      "confidence": 1,
      "loudness_start": -38.973,
      "loudness_max_time": 0.01426,
      "loudness_max": -13.087,
      "loudness_end": 0,
      "pitches": [
        0.805,
        0.747,
        0.643,
        0.638,
        0.703,
        0.547,
        0.744,
        0.667,
        0.603,
        0.623,
        0.588,
        1
      ],
      "timbre": [
        39.125,
        160.012,
        76.558,
        158.392,
        58.879,
        -22.358,
        -12.274,
        50.553,
        -15.913,
        -16.7,
        -16.079,
        13.899
      ]
    },
    {
      "start": 3.03596,
      "duration": 0.27855,
      "confidence": 1,
      "loudness_start": -37.312,
      "loudness_max_time": 0.01516,
      "loudness_max": -13.433,
      "loudness_end": 0,
      "pitches": [
        0.855,
        0.857,
        0.703,
        0.706,
        0.74,
        0.573,
        0.786,
        0.712,
        0.629,
        0.619,
        0.573,
        1
      ],
      "timbre": [
        38.261,
        141.303,
        72.982,
        158.139,
        54.298,
        -35.166,
        -10.387,
        57.44,
        -21.958,
        -6.69,
        -10.647,
        17.551
      ]
    },
    {
      "start": 3.31451,
      "duration": 0.11039,
      "confidence": 0.713,
      "loudness_start": -38.571,
      "loudness_max_time": 0.02925,
      "loudness_max": -28.454,
      "loudness_end": 0,
      "pitches": [
        0.875,
        0.682,
        0.942,
        0.822,
        0.706,
        0.643,
        0.716,
        0.874,
        0.875,
        0.624,
        1,
        0.598
      ],
      "timbre": [
        27.723,
        223.731,
        58.846,
        58.218,
        35.937,
        -31.22,
        -3.165,
        -19.42,
        -22.007,
        -0.985,
        0.802,
        33.478
      ]
    },
    {
      "start": 3.4249,
      "duration": 0.28472,
      "confidence": 1,
      "loudness_start": -36.779,
      "loudness_max_time": 0.01872,
      "loudness_max": -13.198,
      "loudness_end": 0,
      "pitches": [
        0.867,
        0.802,
        0.738,
        0.713,
        0.73,
        0.56,
        0.816,
        0.698,
        0.654,
        0.65,
        0.672,
        1
      ],
      "timbre": [
        38.658,
        163.238,
        69.87,
        169.664,
        63.071,
        -0.398,
        -8.837,
        54.711,
        -16.73,
        -17.608,
        -14.036,
        8.891
      ]
    },
    {
      "start": 3.70961,
      "duration": 0.12154,
      "confidence": 0.494,
      "loudness_start": -38.719,
      "loudness_max_time": 0.0157,
      "loudness_max": -31.443,
      "loudness_end": 0,
      "pitches": [
        0.886,
        0.768,
        0.828,
        0.612,
        0.465,
        0.542,
        0.555,
        0.854,
        0.878,
        0.78,
        1,
        0.703
      ],
      "timbre": [
        24.301,
        174.972,
        43.319,
        58.001,
        22.821,
        -49.485,
        8.811,
        -11.654,
        -30.686,
        5.646,
        -9.736,
        19.766
      ]
    },
    {
      "start": 3.83116,
      "duration": 0.1161,
      "confidence": 0.893,
      "loudness_start": -40.753,
      "loudness_max_time": 0.03083,
      "loudness_max": -28.662,
      "loudness_end": 0,
      "pitches": [
        0.71,
        0.57,
        0.944,
        0.7,
        0.592,
        0.614,
        0.702,
        0.821,
        0.905,
        0.585,
        1,
        0.621
      ],
      "timbre": [
        27.425,
        224.973,
        54.84,
        53.249,
        37.41,
        -5.133,
        3.356,
        -17.959,
        -22.947,
        -0.611,
        7.844,
        31.196
      ]
    },
    {
      "start": 3.94726,
      "duration": 0.27891,
      "confidence": 1,
      "loudness_start": -37.642,
      "loudness_max_time": 0.01509,
      "loudness_max": -13.232,
      "loudness_end": 0,
      "pitches": [
        0.907,
        0.865,
        0.743,
        0.715,
        0.8,
        0.61,
        0.853,
        0.712,
        0.68,
        0.715,
        0.663,
        1
      ],
      "timbre": [
        38.385,
        153.91,
        75.136,
        169.781,
        59.186,
        -13.126,
        -9.472,
        54.315,
        -17.62,
        -10.486,
        -12.717,
        8.988
      ]
    },
    {
      "start": 4.22617,
      "duration": 0.13333,
      "confidence": 0.512,
      "loudness_start": -39.178,
      "loudness_max_time": 0.02006,
      "loudness_max": -31.509,
      "loudness_end": 0,
      "pitches": [
        0.779,
        0.51,
        0.57,
        0.404,
        0.311,
        0.364,
        0.403,
        0.609,
        0.775,
        0.698,
        1,
        0.502
      ],
      "timbre": [
        24.409,
        183.173,
        47.742,
        55.871,
        29.2,
        -39.24,
        9.508,
        -9.49,
        -29.052,
        1.846,
        -0.743,
        20.104
      ]
    },
    {
      "start": 4.3595,
      "duration": 0.11039,
      "confidence": 0.898,
      "loudness_start": -40.957,
      "loudness_max_time": 0.02413,
      "loudness_max": -28.235,
      "loudness_end": 0,
      "pitches": [
        0.539,
        0.533,
        1,
        0.764,
        0.614,
        0.641,
        0.706,
        0.83,
        0.875,
        0.508,
        0.872,
        0.652
      ],
      "timbre": [
        27.804,
        223.36,
        58.877,
        61.227,
        29.834,
        -32.708,
        -5.025,
        -23.769,
        -21.759,
        -1.034,
        -3.969,
        33.216
      ]
    },
    {
      "start": 4.46989,
      "duration": 0.2727,
      "confidence": 1,
      "loudness_start": -37.713,
      "loudness_max_time": 0.01419,
      "loudness_max": -12.778,
      "loudness_end": 0,
      "pitches": [
        0.892,
        0.875,
        0.772,
        0.793,
        0.724,
        0.618,
        0.853,
        0.699,
        0.685,
        0.702,
        0.653,
        1
      ],
      "timbre": [
        38.589,
        146.621,
        62.863,
        177.408,
        53.202,
        -10.089,
        -7.362,
        44.634,
        -14.564,
        -21.493,
        -26.698,
        14.529
      ]
    },
    {
      "start": 4.74259,
      "duration": 0.11624,
      "confidence": 0.807,
      "loudness_start": -39.179,
      "loudness_max_time": 0.02357,
      "loudness_max": -27.694,
      "loudness_end": 0,
      "pitches": [
        0.726,
        0.507,
        0.873,
        0.755,
        0.515,
        0.575,
        0.632,
        0.761,
        0.755,
        0.731,
        1,
        0.788
      ],
      "timbre": [
        27.001,
        224.696,
        54.473,
        77.455,
        31.337,
        -24.558,
        -0.936,
        -27.678,
        -26.627,
        -1.675,
        -4.053,
        16.477
      ]
    },
    {
      "start": 4.85882,
      "duration": 0.26712,
      "confidence": 1,
      "loudness_start": -38.937,
      "loudness_max_time": 0.02237,
      "loudness_max": -12.985,
      "loudness_end": 0,
      "pitches": [
        0.876,
        0.826,
        0.715,
        0.743,
        0.788,
        0.608,
        0.811,
        0.721,
        0.653,
        0.677,
        0.659,
        1
      ],
      "timbre": [
        38.787,
        161.634,
        74.804,
        160.36,
        60.734,
        1.758,
        -8.277,
        50.527,
        -16.958,
        -7.325,
        -2.206,
        13.033
      ]
    },
    {
      "start": 5.12594,
      "duration": 0.27855,
      "confidence": 1,
      "loudness_start": -36.648,
      "loudness_max_time": 0.01322,
      "loudness_max": -13.714,
      "loudness_end": 0,
      "pitches": [
        0.864,
        0.853,
        0.716,
        0.693,
        0.705,
        0.563,
        0.746,
        0.684,
        0.62,
        0.583,
        0.543,
        1
      ],
      "timbre": [
        38.412,
        141.842,
        73.81,
        160.301,
        52.024,
        -44.249,
        -15.887,
        57.838,
        -17.888,
        -12.302,
        -19.128,
        14.342
      ]
    },
    {
      "start": 5.40449,
      "duration": 0.11029,
      "confidence": 0.703,
      "loudness_start": -38.857,
      "loudness_max_time": 0.02365,
      "loudness_max": -28.014,
      "loudness_end": 0,
      "pitches": [
        0.819,
        0.592,
        0.699,
        0.628,
        0.524,
        0.469,
        0.624,
        0.765,
        0.892,
        0.708,
        1,
        0.505
      ],
      "timbre": [
        28.176,
        222.92,
        68.988,
        54.372,
        26.158,
        -43.144,
        -4.642,
        -20.704,
        -22.499,
        1.606,
        5.167,
        31.871
      ]
    },
    {
      "start": 5.51478,
      "duration": 0.27882,
      "confidence": 1,
      "loudness_start": -36.353,
      "loudness_max_time": 0.02971,
      "loudness_max": -12.901,
      "loudness_end": 0,
      "pitches": [
        0.621,
        0.693,
        0.489,
        0.414,
        0.495,
        0.368,
        0.477,
        0.561,
        0.634,
        1,
        0.578,
        0.741
      ],
      "timbre": [
        41.57,
        134.462,
        102.563,
        127.227,
        74.333,
        -13.584,
        2.065,
        6.592,
        -11.266,
        -14.76,
        -19.084,
        4.805
      ]
    },
    {
      "start": 5.79361,
      "duration": 0.24948,
      "confidence": 1,
      "loudness_start": -28.677,
      "loudness_max_time": 0.19716,
      "loudness_max": -10.699,
      "loudness_end": 0,
      "pitches": [
        0.163,
        0.536,
        0.859,
        0.616,
        1,
        0.418,
        0.09,
        0.072,
        0.185,
        0.276,
        0.278,
        0.396
      ],
      "timbre": [
        46.45,
        87.147,
        157.897,
        31.33,
        62.518,
        -27.058,
        27.602,
        40.398,
        -44.535,
        32.71,
        26.143,
        34.825
      ]
    },
    {
      "start": 6.04308,
      "duration": 0.31946,
      "confidence": 0.514,
      "loudness_start": -15.2,
      "loudness_max_time": 0.07033,
      "loudness_max": -7.877,
      "loudness_end": 0,
      "pitches": [
        0.249,
        0.153,
        0.17,
        0.509,
        1,
        0.284,
        0.077,
        0.072,
        0.089,
        0.153,
        0.21,
        0.85
      ],
      "timbre": [
        48.048,
        111.423,
        103.548,
        77.885,
        72.542,
        -14.703,
        6.552,
        -53.954,
        -35.533,
        9.544,
        -49.66,
        14.528
      ]
    },
    {
      "start": 6.36254,
      "duration": 0.1912,
      "confidence": 0.909,
      "loudness_start": -24.662,
      "loudness_max_time": 0.1316,
      "loudness_max": -8.463,
      "loudness_end": 0,
      "pitches": [
        0.061,
        0.147,
        0.223,
        0.333,
        1,
        0.186,
        0.037,
        0.021,
        0.038,
        0.071,
        0.043,
        0.121
      ],
      "timbre": [
        45.755,
        137.188,
        45.591,
        -81.054,
        96.083,
        8.027,
        2.807,
        -76.674,
        -2.386,
        41.431,
        15.321,
        -7.786
      ]
    },
    {
      "start": 6.55374,
      "duration": 0.26023,
      "confidence": 0.336,
      "loudness_start": -10.651,
      "loudness_max_time": 0.02455,
      "loudness_max": -7.228,
      "loudness_end": 0,
      "pitches": [
        0.032,
        0.074,
        0.045,
        0.515,
        1,
        0.121,
        0.047,
        0.042,
        0.04,
        0.056,
        0.033,
        0.05
      ],
      "timbre": [
        49.764,
        70.205,
        23.141,
        43.668,
        52.834,
        -18.613,
        -52.235,
        -38.64,
        13.867,
        2.94,
        -21.634,
        27.833
      ]
    },
    {
      "start": 6.81397,
      "duration": 0.14,
      "confidence": 0.259,
      "loudness_start": -16.578,
      "loudness_max_time": 0.04847,
      "loudness_max": -12.312,
      "loudness_end": 0,
      "pitches": [
        0.017,
        0.073,
        1,
        0.1,
        0.042,
        0.01,
        0.013,
        0.007,
        0.018,
        0.116,
        0.014,
        0.011
      ],
      "timbre": [
        45.868,
        -30.312,
        19.785,
        -23.165,
        86.109,
        -33.147,
        0.623,
        -29.721,
        -13.79,
        2.482,
        -0.642,
        23.784
      ]
    },
    {
      "start": 6.95397,
      "duration": 0.14558,
      "confidence": 0.63,
      "loudness_start": -15.599,
      "loudness_max_time": 0.01905,
      "loudness_max": -9.028,
      "loudness_end": 0,
      "pitches": [
        0.115,
        0.735,
        1,
        0.114,
        0.097,
        0.06,
        0.088,
        0.074,
        0.175,
        0.256,
        0.07,
        0.075
      ],
      "timbre": [
        47.695,
        14.849,
        38.37,
        62.229,
        70.128,
        -33.342,
        -20.19,
        -21.374,
        -1.778,
        -6.713,
        -32.595,
        6.388
      ]
    },
    {
      "start": 7.09955,
      "duration": 0.11596,
      "confidence": 0.457,
      "loudness_start": -19.848,
      "loudness_max_time": 0.08048,
      "loudness_max": -14.084,
      "loudness_end": 0,
      "pitches": [
        0.223,
        1,
        0.165,
        0.059,
        0.081,
        0.098,
        0.03,
        0.079,
        0.33,
        0.078,
        0.05,
        0.062
      ],
      "timbre": [
        44.797,
        -17.929,
        50.211,
        -19.026,
        104.268,
        -36.713,
        -10.007,
        1.243,
        -15.669,
        27.243,
        3.827,
        6.471
      ]
    },
    {
      "start": 7.21551,
      "duration": 0.2556,
      "confidence": 0.442,
      "loudness_start": -15.892,
      "loudness_max_time": 0.00541,
      "loudness_max": -10.556,
      "loudness_end": 0,
      "pitches": [
        0.062,
        0.202,
        1,
        0.119,
        0.032,
        0.029,
        0.054,
        0.029,
        0.059,
        0.136,
        0.033,
        0.042
      ],
      "timbre": [
        46.365,
        48.13,
        44.598,
        45.662,
        55.721,
        -38.134,
        -11.788,
        -19.765,
        -35.334,
        4.888,
        -31.937,
        14.505
      ]
    },
    {
      "start": 7.47111,
      "duration": 0.13365,
      "confidence": 0.985,
      "loudness_start": -20.93,
      "loudness_max_time": 0.08692,
      "loudness_max": -7.278,
      "loudness_end": 0,
      "pitches": [
        0.086,
        0.088,
        0.095,
        0.159,
        0.315,
        1,
        0.234,
        0.032,
        0.024,
        0.091,
        0.04,
        0.038
      ],
      "timbre": [
        47.914,
        76.98,
        44.96,
        -94.629,
        60.071,
        24.812,
        -35.073,
        60.997,
        -11.17,
        -0.811,
        26.594,
        13.14
      ]
    },
    {
      "start": 7.60476,
      "duration": 0.41764,
      "confidence": 0.218,
      "loudness_start": -10.714,
      "loudness_max_time": 0.04535,
      "loudness_max": -6.547,
      "loudness_end": 0,
      "pitches": [
        0.032,
        0.21,
        0.492,
        0.522,
        1,
        0.076,
        0.05,
        0.066,
        0.091,
        0.074,
        0.066,
        0.101
      ],
      "timbre": [
        49.621,
        115.02,
        33.159,
        78.456,
        36.067,
        -10.582,
        -40.507,
        -42.58,
        -23.522,
        -11.076,
        -45.038,
        34.465
      ]
    },
    {
      "start": 8.0224,
      "duration": 0.35964,
      "confidence": 0.929,
      "loudness_start": -25.625,
      "loudness_max_time": 0.11282,
      "loudness_max": -11.405,
      "loudness_end": 0,
      "pitches": [
        0.796,
        1,
        0.646,
        0.637,
        0.74,
        0.551,
        0.704,
        0.729,
        0.967,
        0.93,
        0.758,
        0.906
      ],
      "timbre": [
        38.98,
        130.952,
        90.666,
        -29.326,
        94.899,
        -11.013,
        15.927,
        1.547,
        -31.211,
        7.339,
        -31.623,
        43.783
      ]
    },
    {
      "start": 8.38204,
      "duration": 0.14531,
      "confidence": 1,
      "loudness_start": -27.748,
      "loudness_max_time": 0.08452,
      "loudness_max": -8.687,
      "loudness_end": 0,
      "pitches": [
        0.034,
        0.222,
        1,
        0.268,
        0.069,
        0.043,
        0.264,
        0.024,
        0.028,
        0.155,
        0.078,
        0.026
      ],
      "timbre": [
        48.062,
        56.215,
        95.665,
        -34.27,
        63.852,
        26.643,
        -0.908,
        28.562,
        -32.142,
        5.192,
        26.559,
        15.422
      ]
    },
    {
      "start": 8.52735,
      "duration": 0.3717,
      "confidence": 0.307,
      "loudness_start": -9.884,
      "loudness_max_time": 0.02416,
      "loudness_max": -6.262,
      "loudness_end": 0,
      "pitches": [
        0.266,
        0.403,
        0.365,
        0.69,
        0.876,
        0.214,
        0.27,
        0.374,
        0.524,
        0.259,
        0.609,
        1
      ],
      "timbre": [
        50.492,
        137.737,
        122.996,
        63.37,
        54.804,
        -33.289,
        4.097,
        13.959,
        -16.756,
        -13.179,
        -13.495,
        15.117
      ]
    },
    {
      "start": 8.89905,
      "duration": 0.1454,
      "confidence": 0.617,
      "loudness_start": -18.312,
      "loudness_max_time": 0.09756,
      "loudness_max": -10.293,
      "loudness_end": 0,
      "pitches": [
        0.045,
        0.059,
        1,
        0.397,
        0.027,
        0.014,
        0.045,
        0.017,
        0.025,
        0.143,
        0.044,
        0.027
      ],
      "timbre": [
        47.72,
        50.345,
        40.023,
        -35.482,
        42.18,
        -12.626,
        -31.254,
        -21.708,
        -20.265,
        15.833,
        5.513,
        14.233
      ]
    },
    {
      "start": 9.04444,
      "duration": 0.26091,
      "confidence": 0.192,
      "loudness_start": -13.689,
      "loudness_max_time": 0.00317,
      "loudness_max": -8.706,
      "loudness_end": 0,
      "pitches": [
        0.465,
        1,
        0.352,
        0.265,
        0.281,
        0.156,
        0.142,
        0.134,
        0.201,
        0.197,
        0.189,
        0.231
      ],
      "timbre": [
        48.031,
        73.829,
        37.016,
        35.236,
        31.403,
        -48.883,
        -39.467,
        22.2,
        -11.02,
        -15.599,
        -4.912,
        6.186
      ]
    },
    {
      "start": 9.30535,
      "duration": 0.38281,
      "confidence": 0.614,
      "loudness_start": -17.546,
      "loudness_max_time": 0.13631,
      "loudness_max": -10.921,
      "loudness_end": 0,
      "pitches": [
        0.124,
        0.744,
        1,
        0.162,
        0.032,
        0.046,
        0.066,
        0.039,
        0.135,
        0.193,
        0.093,
        0.075
      ],
      "timbre": [
        45.644,
        55.582,
        66.461,
        65.001,
        74.381,
        -31.844,
        -20.441,
        27.388,
        -34.979,
        4.583,
        -34.496,
        23.199
      ]
    },
    {
      "start": 9.68816,
      "duration": 0.35279,
      "confidence": 1,
      "loudness_start": -28.701,
      "loudness_max_time": 0.01814,
      "loudness_max": -3.765,
      "loudness_end": 0,
      "pitches": [
        0.997,
        0.634,
        0.304,
        0.147,
        0.15,
        0.12,
        0.245,
        0.581,
        0.774,
        1,
        0.582,
        0.858
      ],
      "timbre": [
        49.62,
        27.77,
        -37.2,
        58.528,
        7.541,
        -41.499,
        27.28,
        35.797,
        -13.114,
        11.483,
        10.206,
        29.714
      ]
    },
    {
      "start": 10.04095,
      "duration": 0.15252,
      "confidence": 0.278,
      "loudness_start": -23.173,
      "loudness_max_time": 0.09176,
      "loudness_max": -18.802,
      "loudness_end": 0,
      "pitches": [
        1,
        0.414,
        0.097,
        0.094,
        0.25,
        0.252,
        0.244,
        0.224,
        0.288,
        0.379,
        0.737,
        0.135
      ],
      "timbre": [
        38.709,
        26.842,
        -24.199,
        -41.149,
        13.88,
        -46.907,
        35.893,
        23.588,
        35.129,
        12.918,
        -24.106,
        18.309
      ]
    },
    {
      "start": 10.19347,
      "duration": 0.42993,
      "confidence": 1,
      "loudness_start": -24.503,
      "loudness_max_time": 0.03545,
      "loudness_max": -7.742,
      "loudness_end": 0,
      "pitches": [
        0.282,
        0.218,
        0.12,
        0.114,
        0.088,
        0.192,
        0.533,
        1,
        0.903,
        0.512,
        0.36,
        0.334
      ],
      "timbre": [
        44.545,
        14.175,
        -53.263,
        -1.42,
        21.388,
        49.836,
        18.097,
        25.85,
        34.628,
        -2.966,
        -0.278,
        0.758
      ]
    },
    {
      "start": 10.6234,
      "duration": 0.0927,
      "confidence": 0.263,
      "loudness_start": -23.444,
      "loudness_max_time": 0.02141,
      "loudness_max": -19.079,
      "loudness_end": 0,
      "pitches": [
        0.186,
        0.121,
        0.074,
        0.075,
        0.504,
        0.498,
        0.997,
        1,
        0.372,
        0.407,
        0.193,
        0.161
      ],
      "timbre": [
        39.396,
        50.72,
        -27.898,
        -29.443,
        15.118,
        -56.63,
        29.855,
        -19.605,
        37.126,
        18.064,
        -8.312,
        13.113
      ]
    },
    {
      "start": 10.7161,
      "duration": 0.24254,
      "confidence": 1,
      "loudness_start": -21.302,
      "loudness_max_time": 0.06649,
      "loudness_max": -5.542,
      "loudness_end": 0,
      "pitches": [
        1,
        0.57,
        0.417,
        0.348,
        0.252,
        0.219,
        0.244,
        0.456,
        0.594,
        0.707,
        0.521,
        0.919
      ],
      "timbre": [
        48.753,
        23.534,
        -28.851,
        32.922,
        27.685,
        20.25,
        53.107,
        26.351,
        -20.103,
        27.273,
        -16.8,
        14.331
      ]
    },
    {
      "start": 10.95864,
      "duration": 0.13161,
      "confidence": 0.014,
      "loudness_start": -21.074,
      "loudness_max_time": 0.05636,
      "loudness_max": -17.694,
      "loudness_end": 0,
      "pitches": [
        0.821,
        0.773,
        0.411,
        0.422,
        1,
        0.973,
        0.855,
        0.857,
        0.184,
        0.216,
        0.823,
        0.115
      ],
      "timbre": [
        39.972,
        12.125,
        -53.306,
        -40.623,
        21.84,
        -43.185,
        44.624,
        36.878,
        11.902,
        -16.893,
        -21.795,
        -0.786
      ]
    },
    {
      "start": 11.09025,
      "duration": 0.3019,
      "confidence": 1,
      "loudness_start": -22.93,
      "loudness_max_time": 0.05736,
      "loudness_max": -5.103,
      "loudness_end": 0,
      "pitches": [
        1,
        0.588,
        0.373,
        0.2,
        0.321,
        0.234,
        0.349,
        0.73,
        0.446,
        0.352,
        0.269,
        0.952
      ],
      "timbre": [
        45.32,
        -11.43,
        -12.438,
        -79.766,
        36.428,
        46.802,
        52.578,
        16.1,
        6.686,
        -31.477,
        -44.526,
        3.671
      ]
    },
    {
      "start": 11.39215,
      "duration": 0.14866,
      "confidence": 0.945,
      "loudness_start": -19.095,
      "loudness_max_time": 0.07109,
      "loudness_max": -6.791,
      "loudness_end": 0,
      "pitches": [
        1,
        0.755,
        0.077,
        0.047,
        0.27,
        0.274,
        0.553,
        0.479,
        0.657,
        0.847,
        0.841,
        0.228
      ],
      "timbre": [
        51.013,
        24.042,
        17.392,
        -29.991,
        9.462,
        -1.88,
        31.599,
        3.483,
        -17.953,
        19.581,
        9.095,
        -3.08
      ]
    },
    {
      "start": 11.54082,
      "duration": 0.24263,
      "confidence": 0.398,
      "loudness_start": -10.705,
      "loudness_max_time": 0.05362,
      "loudness_max": -5.519,
      "loudness_end": 0,
      "pitches": [
        0.204,
        0.177,
        0.121,
        0.078,
        0.084,
        0.744,
        0.536,
        0.138,
        0.118,
        0.172,
        0.194,
        1
      ],
      "timbre": [
        50.347,
        54.658,
        3.694,
        30.682,
        13.168,
        -9.694,
        10.75,
        8.861,
        26.993,
        -17.049,
        -40.924,
        10.213
      ]
    },
    {
      "start": 11.78345,
      "duration": 0.39578,
      "confidence": 0.863,
      "loudness_start": -17.843,
      "loudness_max_time": 0.02607,
      "loudness_max": -6.941,
      "loudness_end": 0,
      "pitches": [
        0.253,
        0.202,
        0.108,
        0.063,
        0.061,
        0.173,
        0.58,
        1,
        0.619,
        0.339,
        0.244,
        0.26
      ],
      "timbre": [
        47.571,
        36.354,
        -69.03,
        55.597,
        -9.699,
        -47.547,
        -2.201,
        -5.31,
        23.702,
        -6.906,
        -30.112,
        11.933
      ]
    },
    {
      "start": 12.17923,
      "duration": 0.0985,
      "confidence": 0.107,
      "loudness_start": -22.648,
      "loudness_max_time": 0.02967,
      "loudness_max": -19.11,
      "loudness_end": 0,
      "pitches": [
        1,
        0.844,
        0.305,
        0.24,
        0.351,
        0.336,
        0.197,
        0.201,
        0.544,
        0.504,
        0.978,
        0.36
      ],
      "timbre": [
        38.677,
        44.074,
        -35.439,
        -8.883,
        3.694,
        -41.36,
        43.985,
        -18.534,
        8.604,
        -9.013,
        -0.228,
        42.101
      ]
    },
    {
      "start": 12.27773,
      "duration": 0.418,
      "confidence": 1,
      "loudness_start": -23.656,
      "loudness_max_time": 0.07667,
      "loudness_max": -6.55,
      "loudness_end": 0,
      "pitches": [
        0.31,
        0.225,
        0.131,
        0.124,
        0.124,
        0.194,
        0.534,
        1,
        0.767,
        0.457,
        0.3,
        0.364
      ],
      "timbre": [
        45.141,
        3.758,
        -29.993,
        -1.462,
        30.491,
        46.708,
        56.828,
        48.257,
        5.807,
        -15.415,
        -15.303,
        17.251
      ]
    },
    {
      "start": 12.69574,
      "duration": 0.1337,
      "confidence": 0.138,
      "loudness_start": -20.773,
      "loudness_max_time": 0.03294,
      "loudness_max": -17.491,
      "loudness_end": 0,
      "pitches": [
        0.99,
        0.577,
        0.15,
        0.11,
        0.288,
        0.334,
        0.285,
        0.257,
        0.347,
        0.395,
        1,
        0.108
      ],
      "timbre": [
        39.755,
        36.699,
        -21.059,
        6.585,
        6.885,
        -44.405,
        54.963,
        -14.432,
        -6.223,
        -13.166,
        0.443,
        29.161
      ]
    },
    {
      "start": 12.82943,
      "duration": 0.38263,
      "confidence": 1,
      "loudness_start": -24.557,
      "loudness_max_time": 0.01173,
      "loudness_max": -4.57,
      "loudness_end": 0,
      "pitches": [
        0.274,
        0.2,
        0.165,
        0.087,
        0.095,
        0.195,
        0.626,
        1,
        0.667,
        0.406,
        0.345,
        0.26
      ],
      "timbre": [
        49.428,
        15.04,
        -28.899,
        67.992,
        -9.339,
        -59.617,
        40.996,
        13.941,
        -23.764,
        -4.962,
        -21.16,
        29.793
      ]
    },
    {
      "start": 13.21206,
      "duration": 0.26907,
      "confidence": 0.991,
      "loudness_start": -18.785,
      "loudness_max_time": 0.01924,
      "loudness_max": -4.781,
      "loudness_end": 0,
      "pitches": [
        1,
        0.496,
        0.246,
        0.123,
        0.212,
        0.117,
        0.192,
        0.468,
        0.283,
        0.301,
        0.204,
        0.984
      ],
      "timbre": [
        49.073,
        52.058,
        -60.845,
        38.154,
        12.414,
        -38.951,
        3.169,
        42.671,
        -9.492,
        26.459,
        -6.423,
        5.63
      ]
    },
    {
      "start": 13.48113,
      "duration": 0.2068,
      "confidence": 0.939,
      "loudness_start": -20.33,
      "loudness_max_time": 0.06862,
      "loudness_max": -6.98,
      "loudness_end": 0,
      "pitches": [
        0.366,
        0.689,
        0.574,
        0.15,
        0.22,
        0.37,
        0.308,
        0.512,
        0.68,
        0.802,
        0.453,
        1
      ],
      "timbre": [
        51.118,
        49.228,
        5.145,
        -30.151,
        9.513,
        -27.178,
        38.828,
        23.46,
        -21.882,
        33.823,
        0.609,
        12.007
      ]
    },
    {
      "start": 13.68794,
      "duration": 0.18,
      "confidence": 0.184,
      "loudness_start": -9.924,
      "loudness_max_time": 0.05268,
      "loudness_max": -6.093,
      "loudness_end": 0,
      "pitches": [
        0.43,
        0.596,
        0.495,
        0.533,
        1,
        0.962,
        0.55,
        0.489,
        0.233,
        0.247,
        0.13,
        0.745
      ],
      "timbre": [
        51.444,
        100.653,
        23.413,
        -9.247,
        14.482,
        -32.699,
        -6.07,
        5.517,
        9.806,
        -8.311,
        -2.946,
        -0.757
      ]
    },
    {
      "start": 13.86794,
      "duration": 0.1859,
      "confidence": 0.11,
      "loudness_start": -10.121,
      "loudness_max_time": 0.01392,
      "loudness_max": -7.918,
      "loudness_end": 0,
      "pitches": [
        0.236,
        0.144,
        0.146,
        0.176,
        0.197,
        0.187,
        0.177,
        0.128,
        0.12,
        0.231,
        0.229,
        1
      ],
      "timbre": [
        48.915,
        104.119,
        35.877,
        48.603,
        14.743,
        -34.687,
        -23.865,
        18.659,
        -5.432,
        -13.726,
        -17.747,
        10.257
      ]
    },
    {
      "start": 14.05383,
      "duration": 0.11664,
      "confidence": 0.517,
      "loudness_start": -18.499,
      "loudness_max_time": 0.04006,
      "loudness_max": -12.724,
      "loudness_end": 0,
      "pitches": [
        0.626,
        0.833,
        0.757,
        0.525,
        0.58,
        0.338,
        0.224,
        0.343,
        0.422,
        0.736,
        0.578,
        1
      ],
      "timbre": [
        45.386,
        168.911,
        115.215,
        40.479,
        73.315,
        -9.556,
        43.395,
        -22.413,
        -35.914,
        -11.784,
        -1.877,
        19.545
      ]
    },
    {
      "start": 14.17048,
      "duration": 0.19025,
      "confidence": 0.757,
      "loudness_start": -16.752,
      "loudness_max_time": 0.04626,
      "loudness_max": -7.909,
      "loudness_end": 0,
      "pitches": [
        0.103,
        0.13,
        0.687,
        1,
        0.617,
        0.182,
        0.258,
        0.254,
        0.156,
        0.7,
        0.339,
        0.162
      ],
      "timbre": [
        48.393,
        80.473,
        78.237,
        93.672,
        53.377,
        -9.561,
        -12.861,
        -7.475,
        -16.857,
        -21.828,
        -43.865,
        21.716
      ]
    },
    {
      "start": 14.36073,
      "duration": 0.27937,
      "confidence": 1,
      "loudness_start": -22.395,
      "loudness_max_time": 0.0665,
      "loudness_max": -6.183,
      "loudness_end": 0,
      "pitches": [
        0.078,
        0.08,
        0.083,
        0.072,
        1,
        0.402,
        0.075,
        0.038,
        0.066,
        0.087,
        0.039,
        0.12
      ],
      "timbre": [
        47.558,
        56.672,
        48.092,
        -25.973,
        55.103,
        67.793,
        -24.185,
        21.341,
        -6.005,
        -25.64,
        -4.421,
        6.784
      ]
    },
    {
      "start": 14.64009,
      "duration": 0.48195,
      "confidence": 0.591,
      "loudness_start": -15.723,
      "loudness_max_time": 0.16518,
      "loudness_max": -7.808,
      "loudness_end": 0,
      "pitches": [
        0.12,
        0.252,
        0.204,
        0.211,
        1,
        0.24,
        0.17,
        0.187,
        0.361,
        0.232,
        0.214,
        0.835
      ],
      "timbre": [
        49.425,
        111.62,
        89.721,
        8.113,
        40.112,
        -14.646,
        -23.424,
        3.849,
        -48.706,
        -18.248,
        5.593,
        -3.356
      ]
    },
    {
      "start": 15.12204,
      "duration": 0.17447,
      "confidence": 0.328,
      "loudness_start": -18.755,
      "loudness_max_time": 0.05924,
      "loudness_max": -14.606,
      "loudness_end": 0,
      "pitches": [
        0.018,
        0.159,
        1,
        0.187,
        0.059,
        0.019,
        0.034,
        0.021,
        0.043,
        0.151,
        0.036,
        0.036
      ],
      "timbre": [
        43.23,
        27.725,
        35.054,
        7.729,
        49.471,
        -23.534,
        -39.621,
        -33.735,
        20.512,
        1.853,
        -28.481,
        14.444
      ]
    },
    {
      "start": 15.29651,
      "duration": 0.15061,
      "confidence": 0.873,
      "loudness_start": -22.719,
      "loudness_max_time": 0.02365,
      "loudness_max": -10.829,
      "loudness_end": 0,
      "pitches": [
        0.94,
        0.966,
        1,
        0.931,
        0.72,
        0.547,
        0.725,
        0.711,
        0.613,
        0.786,
        0.648,
        0.852
      ],
      "timbre": [
        46.717,
        168.743,
        120.311,
        45.512,
        68.941,
        0.282,
        7.89,
        13.445,
        -21.725,
        -53.031,
        3.886,
        -1.696
      ]
    },
    {
      "start": 15.44712,
      "duration": 0.08753,
      "confidence": 0.603,
      "loudness_start": -18.257,
      "loudness_max_time": 0.00275,
      "loudness_max": -9.284,
      "loudness_end": 0,
      "pitches": [
        0.036,
        0.541,
        1,
        0.053,
        0.038,
        0.149,
        0.062,
        0.015,
        0.079,
        0.464,
        0.054,
        0.03
      ],
      "timbre": [
        48.041,
        46.102,
        98.553,
        47.821,
        101.613,
        -60.288,
        11.471,
        -13.648,
        -4.178,
        15.634,
        -6.868,
        30.306
      ]
    },
    {
      "start": 15.53465,
      "duration": 0.28385,
      "confidence": 0.33,
      "loudness_start": -14.072,
      "loudness_max_time": 0.03691,
      "loudness_max": -8.946,
      "loudness_end": 0,
      "pitches": [
        0.577,
        0.642,
        1,
        0.668,
        0.449,
        0.311,
        0.474,
        0.361,
        0.457,
        0.847,
        0.514,
        0.575
      ],
      "timbre": [
        44.683,
        73.225,
        75.411,
        114.657,
        100.102,
        -32.156,
        -18.821,
        65.937,
        -10.252,
        -27.863,
        -17.183,
        3.441
      ]
    },
    {
      "start": 15.8185,
      "duration": 0.09365,
      "confidence": 1,
      "loudness_start": -25.74,
      "loudness_max_time": 0.02551,
      "loudness_max": -7.661,
      "loudness_end": 0,
      "pitches": [
        0.065,
        0.084,
        0.114,
        0.19,
        1,
        0.775,
        0.105,
        0.141,
        0.055,
        0.113,
        0.044,
        0.048
      ],
      "timbre": [
        49.082,
        142.273,
        12.497,
        -3.743,
        28.427,
        -6.376,
        -87.148,
        -45.822,
        1.343,
        9.318,
        25.601,
        -8.356
      ]
    },
    {
      "start": 15.91215,
      "duration": 0.53923,
      "confidence": 0.43,
      "loudness_start": -12.064,
      "loudness_max_time": 0.04767,
      "loudness_max": -7.516,
      "loudness_end": 0,
      "pitches": [
        0.237,
        0.84,
        0.55,
        1,
        0.812,
        0.586,
        0.565,
        0.316,
        0.257,
        0.218,
        0.237,
        0.287
      ],
      "timbre": [
        46.492,
        82.436,
        7.803,
        67.089,
        34.893,
        -5.209,
        -57.893,
        -14.093,
        -12.665,
        2.766,
        -40.347,
        32.383
      ]
    },
    {
      "start": 16.45138,
      "duration": 0.27868,
      "confidence": 1,
      "loudness_start": -28.774,
      "loudness_max_time": 0.07587,
      "loudness_max": -8.84,
      "loudness_end": 0,
      "pitches": [
        0.148,
        1,
        0.885,
        0.1,
        0.054,
        0.033,
        0.038,
        0.037,
        0.062,
        0.098,
        0.058,
        0.131
      ],
      "timbre": [
        44.136,
        55.332,
        64.475,
        3.271,
        66.636,
        61.114,
        16.339,
        -0.131,
        -35.328,
        -4.817,
        -8.643,
        21.508
      ]
    },
    {
      "start": 16.73007,
      "duration": 0.15646,
      "confidence": 0.843,
      "loudness_start": -19.901,
      "loudness_max_time": 0.06761,
      "loudness_max": -9.641,
      "loudness_end": 0,
      "pitches": [
        0.029,
        0.105,
        1,
        0.208,
        0.028,
        0.01,
        0.017,
        0.006,
        0.017,
        0.085,
        0.02,
        0.02
      ],
      "timbre": [
        47.807,
        89.692,
        25.918,
        -38.117,
        27.767,
        12.927,
        -17.16,
        -19.068,
        -59.202,
        -8.917,
        6.566,
        6.559
      ]
    },
    {
      "start": 16.88653,
      "duration": 0.40649,
      "confidence": 0.59,
      "loudness_start": -13.107,
      "loudness_max_time": 0.0164,
      "loudness_max": -6.116,
      "loudness_end": 0,
      "pitches": [
        0.287,
        0.284,
        0.231,
        0.462,
        1,
        0.328,
        0.183,
        0.297,
        0.454,
        0.198,
        0.361,
        0.915
      ],
      "timbre": [
        50.372,
        118.54,
        130.826,
        79.695,
        37.891,
        -22.02,
        9.481,
        16.14,
        -21.955,
        -41.343,
        -12.77,
        7.426
      ]
    },
    {
      "start": 17.29302,
      "duration": 0.36018,
      "confidence": 0.868,
      "loudness_start": -20.64,
      "loudness_max_time": 0.07633,
      "loudness_max": -9.423,
      "loudness_end": 0,
      "pitches": [
        0.202,
        1,
        0.541,
        0.1,
        0.109,
        0.09,
        0.11,
        0.103,
        0.359,
        0.212,
        0.082,
        0.133
      ],
      "timbre": [
        44.191,
        118.685,
        72.909,
        -32.39,
        93.919,
        1.176,
        -10.341,
        -64.436,
        -9.616,
        20.185,
        -41.989,
        14.63
      ]
    },
    {
      "start": 17.6532,
      "duration": 0.38163,
      "confidence": 0.607,
      "loudness_start": -19.912,
      "loudness_max_time": 0.07623,
      "loudness_max": -8.061,
      "loudness_end": 0,
      "pitches": [
        0.319,
        1,
        0.457,
        0.056,
        0.037,
        0.048,
        0.058,
        0.05,
        0.093,
        0.044,
        0.051,
        0.173
      ],
      "timbre": [
        45.329,
        78.517,
        63.332,
        51.589,
        50.344,
        -26.349,
        -11.308,
        -17.355,
        -26.733,
        -8.422,
        -50.149,
        36.662
      ]
    },
    {
      "start": 18.03483,
      "duration": 0.41143,
      "confidence": 1,
      "loudness_start": -24.655,
      "loudness_max_time": 0.01961,
      "loudness_max": -6.32,
      "loudness_end": 0,
      "pitches": [
        0.281,
        0.208,
        0.129,
        0.08,
        0.08,
        0.164,
        0.573,
        1,
        0.58,
        0.484,
        0.24,
        0.29
      ],
      "timbre": [
        46.806,
        -3.429,
        -70.015,
        81.806,
        11.212,
        -30.162,
        9.305,
        10.13,
        3.264,
        16.54,
        -21.338,
        15.427
      ]
    },
    {
      "start": 18.44626,
      "duration": 0.08875,
      "confidence": 0.499,
      "loudness_start": -23.444,
      "loudness_max_time": 0.01436,
      "loudness_max": -19.366,
      "loudness_end": 0,
      "pitches": [
        0.225,
        0.078,
        0.055,
        0.055,
        0.477,
        0.47,
        1,
        0.998,
        0.484,
        0.515,
        0.204,
        0.186
      ],
      "timbre": [
        38.393,
        41.974,
        -41.486,
        -7.735,
        7.012,
        -60.773,
        30.281,
        -17.638,
        32.127,
        19.016,
        -6.009,
        15.489
      ]
    },
    {
      "start": 18.53501,
      "duration": 0.42694,
      "confidence": 1,
      "loudness_start": -23.494,
      "loudness_max_time": 0.04243,
      "loudness_max": -7.479,
      "loudness_end": 0,
      "pitches": [
        0.299,
        0.227,
        0.131,
        0.127,
        0.099,
        0.191,
        0.512,
        1,
        0.816,
        0.59,
        0.338,
        0.365
      ],
      "timbre": [
        44.493,
        16.664,
        -55.875,
        2.005,
        35.735,
        47.709,
        28.631,
        -2.848,
        14.495,
        7.548,
        -32.193,
        5.317
      ]
    },
    {
      "start": 18.96195,
      "duration": 0.12481,
      "confidence": 0.54,
      "loudness_start": -24.176,
      "loudness_max_time": 0.03172,
      "loudness_max": -19.05,
      "loudness_end": 0,
      "pitches": [
        0.985,
        0.529,
        0.119,
        0.105,
        0.288,
        0.325,
        0.276,
        0.283,
        0.465,
        0.661,
        1,
        0.103
      ],
      "timbre": [
        38.622,
        24.623,
        -39.767,
        -10.996,
        29.941,
        -30.88,
        39.966,
        -24.434,
        40.861,
        -10.368,
        -6.727,
        10.11
      ]
    },
    {
      "start": 19.08676,
      "duration": 0.24726,
      "confidence": 1,
      "loudness_start": -25.228,
      "loudness_max_time": 0.01869,
      "loudness_max": -5.555,
      "loudness_end": 0,
      "pitches": [
        1,
        0.45,
        0.298,
        0.294,
        0.139,
        0.121,
        0.208,
        0.22,
        0.674,
        0.607,
        0.671,
        0.994
      ],
      "timbre": [
        49.688,
        -3.393,
        -28.412,
        46.758,
        18.627,
        -30.552,
        41.216,
        16.319,
        12.976,
        7.051,
        -30.005,
        17.239
      ]
    },
    {
      "start": 19.33401,
      "duration": 0.11406,
      "confidence": 0.169,
      "loudness_start": -20.959,
      "loudness_max_time": 0.03101,
      "loudness_max": -16.721,
      "loudness_end": 0,
      "pitches": [
        0.807,
        1,
        0.439,
        0.411,
        0.74,
        0.723,
        0.665,
        0.668,
        0.463,
        0.498,
        0.65,
        0.069
      ],
      "timbre": [
        40.336,
        -2.128,
        -42.972,
        -12.098,
        11.386,
        -49.281,
        53.938,
        -7.297,
        29.237,
        -36.827,
        2.151,
        9.429
      ]
    },
    {
      "start": 19.44807,
      "duration": 0.29478,
      "confidence": 1,
      "loudness_start": -21.562,
      "loudness_max_time": 0.0463,
      "loudness_max": -3.842,
      "loudness_end": 0,
      "pitches": [
        1,
        0.566,
        0.337,
        0.181,
        0.298,
        0.268,
        0.21,
        0.631,
        0.458,
        0.369,
        0.23,
        0.945
      ],
      "timbre": [
        48.103,
        18.675,
        -19.952,
        -19.108,
        32.526,
        49.778,
        51.823,
        -1.749,
        -0.956,
        -0.077,
        -18.383,
        -8.903
      ]
    },
    {
      "start": 19.74286,
      "duration": 0.35841,
      "confidence": 0.78,
      "loudness_start": -17.742,
      "loudness_max_time": 0.06009,
      "loudness_max": -8.382,
      "loudness_end": 0,
      "pitches": [
        0.448,
        0.191,
        0.093,
        0.283,
        0.204,
        0.251,
        0.528,
        0.243,
        0.326,
        0.454,
        0.423,
        1
      ],
      "timbre": [
        48.501,
        30.108,
        -44.903,
        -5.768,
        8.921,
        -32.368,
        -28.816,
        7.406,
        33.985,
        15.991,
        -28.935,
        5.613
      ]
    },
    {
      "start": 20.10127,
      "duration": 0.43664,
      "confidence": 1,
      "loudness_start": -20.284,
      "loudness_max_time": 0.07832,
      "loudness_max": -5.777,
      "loudness_end": 0,
      "pitches": [
        0.299,
        0.211,
        0.113,
        0.087,
        0.073,
        0.18,
        0.533,
        1,
        0.722,
        0.38,
        0.228,
        0.322
      ],
      "timbre": [
        45.561,
        33.789,
        -54.62,
        13.413,
        22.598,
        32.42,
        41.972,
        -1.586,
        -10.462,
        14.743,
        -35.252,
        8.844
      ]
    },
    {
      "start": 20.53791,
      "duration": 0.07764,
      "confidence": 0.021,
      "loudness_start": -22.14,
      "loudness_max_time": 0.0204,
      "loudness_max": -19.57,
      "loudness_end": 0,
      "pitches": [
        0.21,
        0.248,
        0.181,
        0.176,
        0.634,
        0.629,
        1,
        1,
        0.479,
        0.473,
        0.169,
        0.176
      ],
      "timbre": [
        38.395,
        58.282,
        -39.655,
        -18.415,
        3.27,
        -59.169,
        35.446,
        -12.755,
        6.388,
        12.356,
        -4.77,
        44.871
      ]
    },
    {
      "start": 20.61556,
      "duration": 0.30304,
      "confidence": 0.989,
      "loudness_start": -22.759,
      "loudness_max_time": 0.04645,
      "loudness_max": -7.994,
      "loudness_end": 0,
      "pitches": [
        0.994,
        0.582,
        0.315,
        0.352,
        0.216,
        0.163,
        0.201,
        0.423,
        0.574,
        0.532,
        0.604,
        1
      ],
      "timbre": [
        45.406,
        37.154,
        -41.561,
        -38.793,
        41.247,
        29.709,
        47.731,
        -7.062,
        -21.511,
        18.735,
        -32.428,
        21.277
      ]
    },
    {
      "start": 20.91859,
      "duration": 0.25805,
      "confidence": 0.557,
      "loudness_start": -21.995,
      "loudness_max_time": 0.08124,
      "loudness_max": -15.758,
      "loudness_end": 0,
      "pitches": [
        0.222,
        0.209,
        0.081,
        0.079,
        0.114,
        0.213,
        0.643,
        1,
        0.552,
        0.235,
        0.281,
        0.26
      ],
      "timbre": [
        40.756,
        40.444,
        -20.997,
        -25.308,
        6.586,
        -11.718,
        43.245,
        15.522,
        -6.228,
        -19.218,
        -23.209,
        31.53
      ]
    },
    {
      "start": 21.17664,
      "duration": 0.39465,
      "confidence": 1,
      "loudness_start": -24.709,
      "loudness_max_time": 0.04863,
      "loudness_max": -4.299,
      "loudness_end": 0,
      "pitches": [
        0.275,
        0.199,
        0.169,
        0.083,
        0.088,
        0.191,
        0.633,
        1,
        0.671,
        0.36,
        0.32,
        0.247
      ],
      "timbre": [
        49.193,
        60.295,
        -56.56,
        27.117,
        -22.189,
        -9.891,
        -10.279,
        10.944,
        30.955,
        -20.677,
        -34.198,
        13.55
      ]
    },
    {
      "start": 21.57129,
      "duration": 0.26163,
      "confidence": 1,
      "loudness_start": -19.308,
      "loudness_max_time": 0.02438,
      "loudness_max": -4.997,
      "loudness_end": 0,
      "pitches": [
        0.988,
        0.527,
        0.269,
        0.175,
        0.188,
        0.111,
        0.196,
        0.526,
        0.363,
        0.378,
        0.251,
        1
      ],
      "timbre": [
        50.683,
        35.127,
        -31.237,
        36.106,
        2.488,
        -50.822,
        -0.191,
        25.557,
        18.374,
        14.762,
        -23.154,
        -2.446
      ]
    },
    {
      "start": 21.83293,
      "duration": 0.37161,
      "confidence": 0.848,
      "loudness_start": -19.761,
      "loudness_max_time": 0.06015,
      "loudness_max": -6.682,
      "loudness_end": 0,
      "pitches": [
        0.209,
        0.094,
        0.094,
        0.105,
        0.105,
        0.28,
        0.918,
        1,
        0.506,
        0.363,
        0.378,
        0.473
      ],
      "timbre": [
        50.532,
        55.856,
        -7.802,
        -39.839,
        -4.915,
        -36.57,
        -19.026,
        4.397,
        6.565,
        -0.764,
        -13.87,
        -9.423
      ]
    },
    {
      "start": 22.20454,
      "duration": 0.21456,
      "confidence": 0.389,
      "loudness_start": -11.544,
      "loudness_max_time": 0.02318,
      "loudness_max": -6.975,
      "loudness_end": 0,
      "pitches": [
        0.587,
        0.469,
        0.407,
        0.518,
        0.728,
        0.728,
        0.735,
        0.56,
        0.577,
        0.652,
        0.486,
        1
      ],
      "timbre": [
        47.301,
        130.709,
        26.032,
        83.208,
        24.485,
        -29.534,
        -9.685,
        6.095,
        3.203,
        -10.565,
        -12.792,
        1.369
      ]
    },
    {
      "start": 22.41909,
      "duration": 0.29583,
      "confidence": 0.791,
      "loudness_start": -18.364,
      "loudness_max_time": 0.08348,
      "loudness_max": -6.316,
      "loudness_end": 0,
      "pitches": [
        0.134,
        0.566,
        0.978,
        0.574,
        0.901,
        0.2,
        0.525,
        0.306,
        0.508,
        1,
        0.513,
        0.46
      ],
      "timbre": [
        48.709,
        130.867,
        150.89,
        -31.493,
        59.641,
        -14.702,
        14.271,
        -22.492,
        -34.641,
        15.624,
        3.501,
        10.086
      ]
    },
    {
      "start": 22.71492,
      "duration": 0.26694,
      "confidence": 0.444,
      "loudness_start": -10.364,
      "loudness_max_time": 0.04653,
      "loudness_max": -4.636,
      "loudness_end": 0,
      "pitches": [
        0.125,
        0.205,
        0.2,
        0.456,
        1,
        0.177,
        0.114,
        0.129,
        0.245,
        0.394,
        0.128,
        0.312
      ],
      "timbre": [
        49.691,
        111.849,
        52.626,
        106.153,
        101.157,
        -8.527,
        -14.987,
        18.391,
        -7.733,
        -0.993,
        -53.014,
        33.046
      ]
    },
    {
      "start": 22.98186,
      "duration": 0.26748,
      "confidence": 1,
      "loudness_start": -24.907,
      "loudness_max_time": 0.04272,
      "loudness_max": -9.165,
      "loudness_end": 0,
      "pitches": [
        0.116,
        0.28,
        0.321,
        0.591,
        1,
        0.159,
        0.07,
        0.127,
        0.205,
        0.396,
        0.151,
        0.116
      ],
      "timbre": [
        44.475,
        93.025,
        22.527,
        56.865,
        78.685,
        16.623,
        -24.695,
        49.205,
        -45.734,
        20.889,
        11.954,
        3.259
      ]
    },
    {
      "start": 23.24934,
      "duration": 0.40041,
      "confidence": 1,
      "loudness_start": -23.614,
      "loudness_max_time": 0.03633,
      "loudness_max": -6.087,
      "loudness_end": 0,
      "pitches": [
        0.186,
        0.247,
        1,
        0.408,
        0.191,
        0.07,
        0.212,
        0.453,
        0.303,
        0.332,
        0.156,
        0.456
      ],
      "timbre": [
        47.86,
        119.91,
        91.566,
        92.001,
        110.257,
        43.302,
        -11.457,
        29.368,
        -13.134,
        15.418,
        -15.202,
        -5.703
      ]
    },
    {
      "start": 23.64975,
      "duration": 0.26104,
      "confidence": 1,
      "loudness_start": -24.082,
      "loudness_max_time": 0.04832,
      "loudness_max": -7.42,
      "loudness_end": 0,
      "pitches": [
        0.245,
        1,
        0.177,
        0.088,
        0.223,
        0.111,
        0.048,
        0.065,
        0.359,
        0.133,
        0.106,
        0.198
      ],
      "timbre": [
        48.142,
        105.232,
        61.857,
        24.83,
        71.498,
        -11.8,
        -14.828,
        33.686,
        -15.439,
        28.413,
        -8.496,
        3.473
      ]
    },
    {
      "start": 23.91079,
      "duration": 0.35401,
      "confidence": 0.591,
      "loudness_start": -17.082,
      "loudness_max_time": 0.01138,
      "loudness_max": -9.483,
      "loudness_end": 0,
      "pitches": [
        0.119,
        0.754,
        1,
        0.285,
        0.05,
        0.07,
        0.346,
        0.074,
        0.085,
        0.153,
        0.104,
        0.07
      ],
      "timbre": [
        48.016,
        119.021,
        32.495,
        39.182,
        74.328,
        -37.56,
        -12.918,
        -11.063,
        -58.683,
        26.508,
        -32.232,
        9.086
      ]
    },
    {
      "start": 24.26481,
      "duration": 0.23206,
      "confidence": 1,
      "loudness_start": -19.74,
      "loudness_max_time": 0.09755,
      "loudness_max": -5.717,
      "loudness_end": 0,
      "pitches": [
        0.213,
        0.389,
        0.356,
        0.521,
        1,
        0.226,
        0.454,
        0.457,
        0.44,
        0.738,
        0.182,
        0.282
      ],
      "timbre": [
        47.196,
        121,
        72.271,
        8.874,
        107.569,
        53.145,
        -40.358,
        37.501,
        5.451,
        22.958,
        -40.543,
        -1.243
      ]
    },
    {
      "start": 24.49687,
      "duration": 0.27873,
      "confidence": 0.937,
      "loudness_start": -21.006,
      "loudness_max_time": 0.09071,
      "loudness_max": -7.437,
      "loudness_end": 0,
      "pitches": [
        0.138,
        0.493,
        1,
        0.121,
        0.069,
        0.09,
        0.491,
        0.106,
        0.06,
        0.082,
        0.06,
        0.074
      ],
      "timbre": [
        45.592,
        74.025,
        2.796,
        -12.65,
        58.765,
        28.031,
        -22.297,
        18.631,
        9.787,
        -10.77,
        -24.551,
        37.102
      ]
    },
    {
      "start": 24.7756,
      "duration": 0.40082,
      "confidence": 0.999,
      "loudness_start": -21.501,
      "loudness_max_time": 0.0828,
      "loudness_max": -8.5,
      "loudness_end": 0,
      "pitches": [
        0.202,
        1,
        0.165,
        0.062,
        0.24,
        0.136,
        0.051,
        0.052,
        0.116,
        0.114,
        0.148,
        0.102
      ],
      "timbre": [
        43.722,
        102.323,
        39.908,
        -18.675,
        100.586,
        24.866,
        3.171,
        1.053,
        -54.635,
        48.637,
        -52.848,
        44.88
      ]
    },
    {
      "start": 25.17642,
      "duration": 0.52812,
      "confidence": 1,
      "loudness_start": -23.137,
      "loudness_max_time": 0.08554,
      "loudness_max": -4.048,
      "loudness_end": 0,
      "pitches": [
        0.401,
        0.29,
        0.284,
        0.325,
        0.623,
        0.202,
        0.267,
        0.326,
        0.482,
        0.725,
        0.248,
        1
      ],
      "timbre": [
        44.242,
        141.449,
        138.91,
        -58.739,
        125.229,
        20.284,
        41.586,
        -1.577,
        -42.036,
        -5.912,
        -35.848,
        20.083
      ]
    },
    {
      "start": 25.70454,
      "duration": 0.14512,
      "confidence": 0.937,
      "loudness_start": -24.596,
      "loudness_max_time": 0.04458,
      "loudness_max": -11.73,
      "loudness_end": 0,
      "pitches": [
        0.502,
        1,
        0.658,
        0.61,
        0.769,
        0.529,
        0.804,
        0.607,
        0.462,
        0.668,
        0.544,
        0.682
      ],
      "timbre": [
        43.46,
        158.304,
        134.181,
        18.3,
        86.483,
        34.432,
        13.797,
        20.841,
        -24.71,
        -1.715,
        6.781,
        6.225
      ]
    },
    {
      "start": 25.84966,
      "duration": 0.19714,
      "confidence": 0.73,
      "loudness_start": -17.792,
      "loudness_max_time": 0.09279,
      "loudness_max": -8.344,
      "loudness_end": 0,
      "pitches": [
        0.322,
        0.908,
        0.24,
        0.548,
        1,
        0.497,
        0.158,
        0.117,
        0.135,
        0.103,
        0.157,
        0.217
      ],
      "timbre": [
        47.789,
        155.917,
        132.212,
        9.716,
        87.789,
        -12.129,
        29.024,
        -16.832,
        -28.791,
        12.692,
        -6.303,
        22.437
      ]
    },
    {
      "start": 26.0468,
      "duration": 0.31946,
      "confidence": 0.329,
      "loudness_start": -12.789,
      "loudness_max_time": 0.01063,
      "loudness_max": -8.464,
      "loudness_end": 0,
      "pitches": [
        0.115,
        0.175,
        0.089,
        0.191,
        1,
        0.332,
        0.132,
        0.06,
        0.09,
        0.087,
        0.091,
        0.142
      ],
      "timbre": [
        49.459,
        45.613,
        82.804,
        29.727,
        67.088,
        -36.862,
        -34.696,
        35.106,
        3.737,
        -5.115,
        -14.042,
        13.053
      ]
    },
    {
      "start": 26.36626,
      "duration": 0.17864,
      "confidence": 1,
      "loudness_start": -20.397,
      "loudness_max_time": 0.03666,
      "loudness_max": -3.682,
      "loudness_end": 0,
      "pitches": [
        0.981,
        0.625,
        0.14,
        0.071,
        0.109,
        0.112,
        0.448,
        0.444,
        0.905,
        0.931,
        1,
        0.048
      ],
      "timbre": [
        50.582,
        75.048,
        16.699,
        -12.625,
        15.522,
        38.959,
        39.977,
        -17.609,
        -25.697,
        45.541,
        20.115,
        16.624
      ]
    },
    {
      "start": 26.5449,
      "duration": 0.37261,
      "confidence": 0.046,
      "loudness_start": -9.981,
      "loudness_max_time": 0.05509,
      "loudness_max": -8.052,
      "loudness_end": 0,
      "pitches": [
        0.359,
        0.301,
        0.086,
        0.132,
        0.61,
        0.314,
        0.68,
        0.845,
        0.45,
        1,
        0.158,
        0.209
      ],
      "timbre": [
        50.765,
        4.988,
        51.699,
        -11.638,
        52.093,
        -41.302,
        48.653,
        -9.225,
        9.348,
        0.353,
        -8.3,
        11.728
      ]
    },
    {
      "start": 26.91751,
      "duration": 0.48735,
      "confidence": 0.558,
      "loudness_start": -10.092,
      "loudness_max_time": 0.00673,
      "loudness_max": -3.527,
      "loudness_end": 0,
      "pitches": [
        0.268,
        0.251,
        0.096,
        0.084,
        0.254,
        0.193,
        0.748,
        1,
        0.511,
        0.623,
        0.298,
        0.268
      ],
      "timbre": [
        52.571,
        -1.048,
        19.836,
        21.491,
        31.01,
        -75.385,
        36.247,
        3.075,
        3.888,
        8.409,
        -13.112,
        9.059
      ]
    },
    {
      "start": 27.40485,
      "duration": 0.13968,
      "confidence": 0.782,
      "loudness_start": -12.24,
      "loudness_max_time": 0.0444,
      "loudness_max": -3.852,
      "loudness_end": 0,
      "pitches": [
        0.93,
        1,
        0.303,
        0.098,
        0.195,
        0.183,
        0.42,
        0.397,
        0.51,
        0.573,
        0.75,
        0.089
      ],
      "timbre": [
        53.898,
        13.334,
        63.507,
        -28.842,
        36.008,
        -9.324,
        72.403,
        14.438,
        -4.295,
        19.055,
        9.355,
        11.296
      ]
    },
    {
      "start": 27.54454,
      "duration": 0.18,
      "confidence": 0.229,
      "loudness_start": -6.148,
      "loudness_max_time": 0.07121,
      "loudness_max": -1.971,
      "loudness_end": 0,
      "pitches": [
        0.285,
        0.329,
        0.06,
        0.042,
        0.702,
        0.546,
        0.992,
        1,
        0.35,
        0.541,
        0.17,
        0.066
      ],
      "timbre": [
        56.463,
        116.779,
        97.971,
        9.541,
        7.324,
        -36.911,
        71.584,
        30.079,
        2.141,
        -12.628,
        -6.865,
        -11.069
      ]
    },
    {
      "start": 27.72454,
      "duration": 0.31887,
      "confidence": 0.21,
      "loudness_start": -5.536,
      "loudness_max_time": 0.1523,
      "loudness_max": -0.633,
      "loudness_end": 0,
      "pitches": [
        1,
        0.827,
        0.632,
        0.368,
        0.648,
        0.522,
        0.564,
        0.754,
        0.309,
        0.493,
        0.298,
        0.922
      ],
      "timbre": [
        57.149,
        125.958,
        92.151,
        11.914,
        17.839,
        -26.964,
        64.045,
        11.299,
        -3.562,
        9.401,
        -15.044,
        2.636
      ]
    },
    {
      "start": 28.0434,
      "duration": 0.43578,
      "confidence": 0.488,
      "loudness_start": -5.426,
      "loudness_max_time": 0.05461,
      "loudness_max": -0.083,
      "loudness_end": 0,
      "pitches": [
        0.193,
        0.146,
        0.092,
        0.187,
        0.234,
        0.225,
        0.848,
        1,
        0.554,
        0.367,
        0.304,
        0.34
      ],
      "timbre": [
        55.119,
        87.183,
        68.652,
        77.953,
        29.784,
        -16.203,
        54.495,
        -17.449,
        -5.944,
        14.655,
        -47.111,
        5.043
      ]
    },
    {
      "start": 28.47918,
      "duration": 0.23746,
      "confidence": 0.71,
      "loudness_start": -14.133,
      "loudness_max_time": 0.01181,
      "loudness_max": -3.686,
      "loudness_end": 0,
      "pitches": [
        0.791,
        0.37,
        0.216,
        0.102,
        0.327,
        0.127,
        0.141,
        0.263,
        0.274,
        0.349,
        0.279,
        1
      ],
      "timbre": [
        52.83,
        14.907,
        13.851,
        19.537,
        16.795,
        -62.527,
        52.114,
        -12.028,
        -4.224,
        10.906,
        -14.695,
        4.994
      ]
    },
    {
      "start": 28.71664,
      "duration": 0.28499,
      "confidence": 0.345,
      "loudness_start": -11.496,
      "loudness_max_time": 0.03971,
      "loudness_max": -7.329,
      "loudness_end": 0,
      "pitches": [
        0.253,
        0.452,
        0.056,
        0.186,
        1,
        0.185,
        0.213,
        0.334,
        0.356,
        0.217,
        0.17,
        0.683
      ],
      "timbre": [
        50.179,
        -17.167,
        90.052,
        25.715,
        68.819,
        -40.641,
        46.286,
        26.666,
        11.795,
        1.218,
        -5.981,
        -6.923
      ]
    },
    {
      "start": 29.00163,
      "duration": 0.13937,
      "confidence": 0.643,
      "loudness_start": -12.273,
      "loudness_max_time": 0.00772,
      "loudness_max": -5.365,
      "loudness_end": 0,
      "pitches": [
        1,
        0.777,
        0.176,
        0.071,
        0.207,
        0.171,
        0.514,
        0.523,
        0.823,
        0.814,
        0.908,
        0.086
      ],
      "timbre": [
        51.923,
        28.305,
        10.121,
        -0.122,
        3.327,
        -64.759,
        39.07,
        29.423,
        -7.925,
        2.237,
        -8.278,
        11.985
      ]
    },
    {
      "start": 29.141,
      "duration": 0.34798,
      "confidence": 0.043,
      "loudness_start": -10.414,
      "loudness_max_time": 0.07009,
      "loudness_max": -8.069,
      "loudness_end": 0,
      "pitches": [
        0.484,
        0.828,
        0.232,
        0.147,
        0.554,
        0.184,
        0.485,
        1,
        0.493,
        0.218,
        0.223,
        0.292
      ],
      "timbre": [
        50.335,
        80.09,
        39.439,
        8.631,
        35.415,
        -38.137,
        50.536,
        1.398,
        -3.143,
        -0.863,
        -24.352,
        3.152
      ]
    },
    {
      "start": 29.48898,
      "duration": 0.16825,
      "confidence": 0.91,
      "loudness_start": -13.369,
      "loudness_max_time": 0.12338,
      "loudness_max": -2.479,
      "loudness_end": 0,
      "pitches": [
        1,
        0.896,
        0.178,
        0.149,
        0.322,
        0.262,
        0.521,
        0.529,
        0.8,
        0.801,
        0.911,
        0.082
      ],
      "timbre": [
        53.978,
        46.105,
        58.224,
        -57.529,
        31.013,
        10.919,
        56.94,
        27.992,
        -13.523,
        4.751,
        12.181,
        10.47
      ]
    },
    {
      "start": 29.65723,
      "duration": 0.26213,
      "confidence": 0.076,
      "loudness_start": -4.6,
      "loudness_max_time": 0.03122,
      "loudness_max": -1.038,
      "loudness_end": 0,
      "pitches": [
        0.712,
        1,
        0.324,
        0.334,
        0.321,
        0.241,
        0.134,
        0.229,
        0.133,
        0.101,
        0.079,
        0.375
      ],
      "timbre": [
        57.17,
        108.786,
        44.929,
        -3.222,
        14.305,
        -42.911,
        43.639,
        26.821,
        12.66,
        -16.27,
        7.834,
        8.479
      ]
    },
    {
      "start": 29.91937,
      "duration": 0.26109,
      "confidence": 0.284,
      "loudness_start": -5.117,
      "loudness_max_time": 0.01102,
      "loudness_max": -0.014,
      "loudness_end": 0,
      "pitches": [
        0.84,
        0.678,
        0.568,
        0.441,
        0.614,
        0.231,
        0.279,
        0.471,
        0.337,
        0.282,
        0.196,
        1
      ],
      "timbre": [
        57.271,
        77.258,
        36.649,
        4.663,
        8.918,
        -66.995,
        33.551,
        -14.51,
        -0.86,
        20.154,
        -10.797,
        16.247
      ]
    },
    {
      "start": 30.18045,
      "duration": 0.26073,
      "confidence": 0.129,
      "loudness_start": -4.56,
      "loudness_max_time": 0.05711,
      "loudness_max": -0.836,
      "loudness_end": 0,
      "pitches": [
        0.559,
        1,
        0.46,
        0.44,
        0.642,
        0.356,
        0.671,
        0.507,
        0.613,
        0.256,
        0.269,
        0.877
      ],
      "timbre": [
        57.981,
        83.541,
        56.512,
        -3.961,
        -1.42,
        -45.533,
        58.145,
        15.318,
        -5.605,
        -8.727,
        -10.402,
        28.744
      ]
    },
    {
      "start": 30.44118,
      "duration": 0.12186,
      "confidence": 0.371,
      "loudness_start": -5.361,
      "loudness_max_time": 0.02435,
      "loudness_max": 0.394,
      "loudness_end": 0,
      "pitches": [
        0.439,
        1,
        0.252,
        0.416,
        0.735,
        0.513,
        0.373,
        0.383,
        0.378,
        0.256,
        0.281,
        0.188
      ],
      "timbre": [
        58.18,
        112.244,
        42.69,
        8.535,
        1.203,
        -41.503,
        47.747,
        14.578,
        1.523,
        -15.557,
        3.42,
        23.678
      ]
    },
    {
      "start": 30.56304,
      "duration": 0.20907,
      "confidence": 0.034,
      "loudness_start": -3.603,
      "loudness_max_time": 0.03442,
      "loudness_max": -0.047,
      "loudness_end": 0,
      "pitches": [
        0.673,
        1,
        0.778,
        0.558,
        0.465,
        0.336,
        0.428,
        0.213,
        0.172,
        0.18,
        0.173,
        0.52
      ],
      "timbre": [
        57.873,
        69.065,
        37.307,
        -4.508,
        -9.408,
        -46.694,
        43.493,
        29.284,
        -7.02,
        12.216,
        2.765,
        6.112
      ]
    },
    {
      "start": 30.77211,
      "duration": 0.26721,
      "confidence": 0.272,
      "loudness_start": -4.167,
      "loudness_max_time": 0.18565,
      "loudness_max": 0.175,
      "loudness_end": 0,
      "pitches": [
        0.069,
        0.407,
        0.165,
        0.154,
        0.163,
        0.204,
        1,
        0.33,
        0.134,
        0.464,
        0.16,
        0.101
      ],
      "timbre": [
        58.145,
        96.182,
        79.908,
        -2.653,
        9.892,
        -37.463,
        47.716,
        12.484,
        -11.277,
        11.177,
        -12.894,
        1.504
      ]
    },
    {
      "start": 31.03932,
      "duration": 0.29039,
      "confidence": 0.302,
      "loudness_start": -4.29,
      "loudness_max_time": 0.10685,
      "loudness_max": 0.386,
      "loudness_end": 0,
      "pitches": [
        0.382,
        0.919,
        1,
        0.719,
        0.748,
        0.325,
        0.28,
        0.295,
        0.251,
        0.429,
        0.182,
        0.306
      ],
      "timbre": [
        58.227,
        85.531,
        64.334,
        -1.949,
        17.441,
        -31.434,
        48.335,
        25.891,
        2.668,
        -2.59,
        -1.545,
        1.745
      ]
    },
    {
      "start": 31.32971,
      "duration": 0.28422,
      "confidence": 0.082,
      "loudness_start": -3.792,
      "loudness_max_time": 0.13499,
      "loudness_max": -0.773,
      "loudness_end": 0,
      "pitches": [
        0.376,
        1,
        0.18,
        0.109,
        0.149,
        0.071,
        0.083,
        0.052,
        0.157,
        0.308,
        0.162,
        0.078
      ],
      "timbre": [
        57.206,
        89.412,
        60.754,
        2.469,
        22.769,
        -32.971,
        29.75,
        -3.376,
        -12.941,
        13.029,
        -17.89,
        0.927
      ]
    },
    {
      "start": 31.61392,
      "duration": 0.13995,
      "confidence": 0.095,
      "loudness_start": -7.356,
      "loudness_max_time": 0.02961,
      "loudness_max": -2.832,
      "loudness_end": 0,
      "pitches": [
        0.342,
        1,
        0.181,
        0.123,
        0.197,
        0.155,
        0.572,
        0.577,
        0.861,
        0.918,
        0.498,
        0.024
      ],
      "timbre": [
        54.89,
        37.244,
        -5.411,
        0.639,
        -8.541,
        -48.383,
        30.461,
        8.941,
        14.055,
        9.886,
        -12.73,
        7.98
      ]
    },
    {
      "start": 31.75388,
      "duration": 0.12159,
      "confidence": 0.02,
      "loudness_start": -8.611,
      "loudness_max_time": 0.01136,
      "loudness_max": -4.378,
      "loudness_end": 0,
      "pitches": [
        0.28,
        0.446,
        0.393,
        0.294,
        0.77,
        0.734,
        0.966,
        0.952,
        0.856,
        1,
        0.603,
        0.026
      ],
      "timbre": [
        53.793,
        115.741,
        43.825,
        0.461,
        29.511,
        -54.589,
        36.612,
        -5.201,
        36.233,
        14.487,
        -12.459,
        3.883
      ]
    },
    {
      "start": 31.87546,
      "duration": 0.26086,
      "confidence": 0.851,
      "loudness_start": -7.974,
      "loudness_max_time": 0.05367,
      "loudness_max": 1.781,
      "loudness_end": 0,
      "pitches": [
        0.406,
        1,
        0.248,
        0.05,
        0.033,
        0.02,
        0.03,
        0.018,
        0.086,
        0.26,
        0.05,
        0.02
      ],
      "timbre": [
        58.778,
        112.354,
        36.452,
        2.59,
        24.337,
        12.227,
        -1.39,
        -6.168,
        -8.447,
        12.168,
        -4.772,
        -2.843
      ]
    },
    {
      "start": 32.13633,
      "duration": 0.21492,
      "confidence": 0.421,
      "loudness_start": -5.957,
      "loudness_max_time": 0.02641,
      "loudness_max": 0.877,
      "loudness_end": 0,
      "pitches": [
        0.707,
        1,
        0.883,
        0.533,
        0.382,
        0.222,
        0.152,
        0.271,
        0.217,
        0.29,
        0.107,
        0.538
      ],
      "timbre": [
        56.696,
        84.4,
        -12.008,
        27.715,
        -1.772,
        -58.154,
        7.925,
        12.011,
        -9.883,
        -11.379,
        -2.09,
        -3.374
      ]
    },
    {
      "start": 32.35125,
      "duration": 0.56308,
      "confidence": 0.613,
      "loudness_start": -7.849,
      "loudness_max_time": 0.14688,
      "loudness_max": -0.298,
      "loudness_end": 0,
      "pitches": [
        0.336,
        0.673,
        1,
        0.577,
        0.39,
        0.366,
        0.335,
        0.318,
        0.553,
        0.526,
        0.223,
        0.339
      ],
      "timbre": [
        55.082,
        61.885,
        32.471,
        -8.826,
        28.573,
        -9.832,
        37.422,
        15.451,
        -11.483,
        8.052,
        -41.607,
        6.258
      ]
    },
    {
      "start": 32.91433,
      "duration": 0.26118,
      "confidence": 0.965,
      "loudness_start": -12.211,
      "loudness_max_time": 0.03457,
      "loudness_max": 0.149,
      "loudness_end": 0,
      "pitches": [
        0.662,
        1,
        0.073,
        0.011,
        0.024,
        0.024,
        0.011,
        0.042,
        0.196,
        0.095,
        0.018,
        0.016
      ],
      "timbre": [
        57.359,
        68.94,
        50.706,
        5.034,
        31.784,
        8.574,
        18.227,
        29.107,
        11.231,
        11.362,
        -9.667,
        -20.053
      ]
    },
    {
      "start": 33.17551,
      "duration": 0.23832,
      "confidence": 0.562,
      "loudness_start": -10.49,
      "loudness_max_time": 0.00934,
      "loudness_max": -1.114,
      "loudness_end": 0,
      "pitches": [
        0.731,
        1,
        0.679,
        0.28,
        0.268,
        0.134,
        0.074,
        0.128,
        0.091,
        0.093,
        0.038,
        0.332
      ],
      "timbre": [
        54.902,
        70.693,
        -26.261,
        20.628,
        -0.507,
        -61.961,
        10.625,
        9.628,
        -1.799,
        -8.987,
        -17.907,
        7.239
      ]
    },
    {
      "start": 33.41383,
      "duration": 0.28268,
      "confidence": 0.931,
      "loudness_start": -11.788,
      "loudness_max_time": 0.05465,
      "loudness_max": 0.819,
      "loudness_end": 0,
      "pitches": [
        0.193,
        1,
        0.272,
        0.286,
        0.4,
        0.308,
        0.076,
        0.077,
        0.076,
        0.148,
        0.045,
        0.262
      ],
      "timbre": [
        55.506,
        73.751,
        13.859,
        0.638,
        41.215,
        12.284,
        9.531,
        2.893,
        -1.542,
        -9.394,
        -27.228,
        -14.892
      ]
    },
    {
      "start": 33.69651,
      "duration": 0.50671,
      "confidence": 0.692,
      "loudness_start": -8.988,
      "loudness_max_time": 0.27577,
      "loudness_max": -0.481,
      "loudness_end": 0,
      "pitches": [
        0.191,
        0.406,
        0.292,
        0.5,
        1,
        0.654,
        0.259,
        0.653,
        0.532,
        0.391,
        0.12,
        0.235
      ],
      "timbre": [
        57.331,
        80.009,
        12.372,
        -32.565,
        0.306,
        -24.467,
        -6.913,
        15.828,
        16.685,
        -0.298,
        -10.043,
        -10.934
      ]
    },
    {
      "start": 34.20322,
      "duration": 0.53556,
      "confidence": 0.755,
      "loudness_start": -7.455,
      "loudness_max_time": 0.02962,
      "loudness_max": 0.299,
      "loudness_end": 0,
      "pitches": [
        0.14,
        0.309,
        0.509,
        0.787,
        1,
        0.18,
        0.317,
        0.48,
        0.544,
        0.442,
        0.206,
        0.39
      ],
      "timbre": [
        57.463,
        76.51,
        18.608,
        11.407,
        11.768,
        -19.068,
        38.837,
        0.646,
        4.101,
        14.135,
        1.913,
        -1.247
      ]
    },
    {
      "start": 34.73878,
      "duration": 0.25415,
      "confidence": 0.271,
      "loudness_start": -9.249,
      "loudness_max_time": 0.01075,
      "loudness_max": -3.403,
      "loudness_end": 0,
      "pitches": [
        0.556,
        1,
        0.764,
        0.355,
        0.394,
        0.181,
        0.357,
        0.144,
        0.106,
        0.131,
        0.081,
        0.434
      ],
      "timbre": [
        53.575,
        49.797,
        -14.827,
        -11.905,
        -12.241,
        -59.616,
        25.79,
        5.63,
        -6.913,
        3.085,
        4.317,
        4.883
      ]
    },
    {
      "start": 34.99293,
      "duration": 0.27247,
      "confidence": 0.806,
      "loudness_start": -9.382,
      "loudness_max_time": 0.04132,
      "loudness_max": -0.568,
      "loudness_end": 0,
      "pitches": [
        0.077,
        0.397,
        0.093,
        0.098,
        0.197,
        0.171,
        1,
        0.251,
        0.134,
        0.327,
        0.144,
        0.076
      ],
      "timbre": [
        57.212,
        86.582,
        49.935,
        1.875,
        15.78,
        -7.607,
        56.806,
        14.577,
        0.819,
        -2.218,
        10.257,
        11.879
      ]
    },
    {
      "start": 35.2654,
      "duration": 0.23787,
      "confidence": 0.265,
      "loudness_start": -6.127,
      "loudness_max_time": 0.01737,
      "loudness_max": -0.257,
      "loudness_end": 0,
      "pitches": [
        0.609,
        1,
        0.873,
        0.385,
        0.481,
        0.184,
        0.255,
        0.246,
        0.166,
        0.279,
        0.106,
        0.461
      ],
      "timbre": [
        57.892,
        95.403,
        15.088,
        -4.782,
        10.343,
        -57.795,
        41.204,
        34.275,
        5.996,
        -3.342,
        -4.631,
        25.46
      ]
    },
    {
      "start": 35.50327,
      "duration": 0.15116,
      "confidence": 0.681,
      "loudness_start": -8.826,
      "loudness_max_time": 0.03539,
      "loudness_max": -0.344,
      "loudness_end": 0,
      "pitches": [
        0.485,
        1,
        0.784,
        0.709,
        0.694,
        0.662,
        0.226,
        0.189,
        0.162,
        0.352,
        0.147,
        0.05
      ],
      "timbre": [
        57.591,
        97.955,
        43.101,
        -4.882,
        26.793,
        -7.107,
        -3.451,
        6.345,
        14.891,
        7.366,
        -10.339,
        -23.309
      ]
    },
    {
      "start": 35.65442,
      "duration": 0.25383,
      "confidence": 0.105,
      "loudness_start": -5.432,
      "loudness_max_time": 0.06249,
      "loudness_max": -1.879,
      "loudness_end": 0,
      "pitches": [
        0.601,
        1,
        0.196,
        0.359,
        0.271,
        0.234,
        0.262,
        0.183,
        0.163,
        0.214,
        0.089,
        0.153
      ],
      "timbre": [
        55.679,
        69.641,
        -2.933,
        9.64,
        -2.429,
        -33.539,
        -2.56,
        -5.539,
        7.227,
        16.405,
        -23.603,
        5.444
      ]
    },
    {
      "start": 35.90825,
      "duration": 0.12957,
      "confidence": 0.469,
      "loudness_start": -9.422,
      "loudness_max_time": 0.0393,
      "loudness_max": -3.921,
      "loudness_end": 0,
      "pitches": [
        0.168,
        0.201,
        0.161,
        0.104,
        0.578,
        0.573,
        1,
        0.992,
        0.934,
        1,
        0.496,
        0.018
      ],
      "timbre": [
        53.501,
        125.44,
        19.803,
        -0.758,
        8.252,
        -19.037,
        31.036,
        -11.856,
        38.811,
        -5.258,
        6.124,
        0.273
      ]
    },
    {
      "start": 36.03782,
      "duration": 0.2668,
      "confidence": 0.739,
      "loudness_start": -8.482,
      "loudness_max_time": 0.03571,
      "loudness_max": 0.12,
      "loudness_end": 0,
      "pitches": [
        0.417,
        1,
        0.251,
        0.055,
        0.033,
        0.012,
        0.022,
        0.012,
        0.042,
        0.176,
        0.038,
        0.014
      ],
      "timbre": [
        57.096,
        92.08,
        50.614,
        15.149,
        37.556,
        -17.74,
        56.481,
        8.609,
        9.461,
        13.213,
        7.072,
        19.014
      ]
    },
    {
      "start": 36.30463,
      "duration": 0.20848,
      "confidence": 0.553,
      "loudness_start": -5.647,
      "loudness_max_time": 0.03079,
      "loudness_max": 0.652,
      "loudness_end": 0,
      "pitches": [
        0.663,
        1,
        0.925,
        0.643,
        0.498,
        0.248,
        0.174,
        0.3,
        0.241,
        0.431,
        0.146,
        0.488
      ],
      "timbre": [
        58.446,
        70.004,
        4.279,
        5.643,
        20.675,
        -48.723,
        19.005,
        -3.915,
        -2.967,
        -5.88,
        -10.336,
        20.26
      ]
    },
    {
      "start": 36.51311,
      "duration": 0.31574,
      "confidence": 0.248,
      "loudness_start": -4.766,
      "loudness_max_time": 0.07062,
      "loudness_max": -1.542,
      "loudness_end": 0,
      "pitches": [
        0.237,
        1,
        0.624,
        0.087,
        0.059,
        0.03,
        0.041,
        0.05,
        0.1,
        0.302,
        0.039,
        0.031
      ],
      "timbre": [
        55.943,
        21.852,
        42.476,
        10.045,
        40.689,
        -31.623,
        30.734,
        19.805,
        -30.885,
        11.013,
        -25.587,
        17.145
      ]
    },
    {
      "start": 36.82884,
      "duration": 0.10358,
      "confidence": 0.391,
      "loudness_start": -7.734,
      "loudness_max_time": 0.00744,
      "loudness_max": -2.389,
      "loudness_end": 0,
      "pitches": [
        0.523,
        1,
        0.112,
        0.057,
        0.092,
        0.098,
        0.119,
        0.138,
        0.243,
        0.242,
        0.31,
        0.06
      ],
      "timbre": [
        53.446,
        30.272,
        -51.128,
        -7.099,
        -11.256,
        -80.21,
        15.58,
        -0.332,
        -12.11,
        7.99,
        -10.917,
        12.06
      ]
    },
    {
      "start": 36.93243,
      "duration": 0.13442,
      "confidence": 0.167,
      "loudness_start": -9.36,
      "loudness_max_time": 0.0441,
      "loudness_max": -5.732,
      "loudness_end": 0,
      "pitches": [
        0.303,
        0.457,
        0.33,
        0.319,
        0.55,
        0.554,
        0.994,
        1,
        0.884,
        0.891,
        0.332,
        0.012
      ],
      "timbre": [
        51.702,
        74.76,
        -20.404,
        7.337,
        22.689,
        -36.715,
        55.197,
        -26.808,
        -12.799,
        -13.892,
        -28.08,
        -18.978
      ]
    },
    {
      "start": 37.06685,
      "duration": 0.2766,
      "confidence": 0.955,
      "loudness_start": -12.052,
      "loudness_max_time": 0.08068,
      "loudness_max": 0.059,
      "loudness_end": 0,
      "pitches": [
        0.64,
        1,
        0.07,
        0.009,
        0.025,
        0.023,
        0.01,
        0.037,
        0.179,
        0.136,
        0.036,
        0.015
      ],
      "timbre": [
        56.026,
        68.082,
        15.153,
        -23.587,
        42.057,
        37.198,
        -3.875,
        -16.616,
        9.911,
        -3.748,
        -6.464,
        -11.077
      ]
    },
    {
      "start": 37.34345,
      "duration": 0.23909,
      "confidence": 0.566,
      "loudness_start": -6.995,
      "loudness_max_time": 0.0149,
      "loudness_max": -0.24,
      "loudness_end": 0,
      "pitches": [
        0.716,
        1,
        0.725,
        0.385,
        0.322,
        0.172,
        0.106,
        0.163,
        0.1,
        0.09,
        0.069,
        0.339
      ],
      "timbre": [
        55.702,
        78.357,
        -21.344,
        19.46,
        -6.715,
        -54.321,
        11.886,
        14.73,
        -9.114,
        -8.421,
        -8.289,
        4.83
      ]
    },
    {
      "start": 37.58254,
      "duration": 0.2834,
      "confidence": 0.971,
      "loudness_start": -11.731,
      "loudness_max_time": 0.05728,
      "loudness_max": 1.195,
      "loudness_end": 0,
      "pitches": [
        0.219,
        1,
        0.266,
        0.309,
        0.435,
        0.33,
        0.073,
        0.066,
        0.127,
        0.276,
        0.11,
        0.257
      ],
      "timbre": [
        56.658,
        90.118,
        40.651,
        -17.254,
        38.906,
        36.23,
        20.913,
        10.862,
        21.663,
        0.776,
        -9.503,
        -6.547
      ]
    },
    {
      "start": 37.86594,
      "duration": 0.27846,
      "confidence": 0.428,
      "loudness_start": -5.712,
      "loudness_max_time": 0.04648,
      "loudness_max": -1.133,
      "loudness_end": 0,
      "pitches": [
        0.64,
        1,
        0.857,
        0.341,
        0.671,
        0.278,
        0.159,
        0.253,
        0.244,
        0.159,
        0.129,
        0.571
      ],
      "timbre": [
        57.195,
        117.235,
        2.189,
        -32.063,
        -21.464,
        -26.899,
        -36.643,
        20.916,
        34.803,
        -18.948,
        17.932,
        -25.104
      ]
    },
    {
      "start": 38.1444,
      "duration": 0.24408,
      "confidence": 0.039,
      "loudness_start": -3.765,
      "loudness_max_time": 0.00284,
      "loudness_max": -1.42,
      "loudness_end": 0,
      "pitches": [
        0.217,
        0.599,
        0.09,
        0.373,
        1,
        0.369,
        0.069,
        0.037,
        0.086,
        0.087,
        0.091,
        0.386
      ],
      "timbre": [
        57.082,
        101.977,
        42.745,
        -21.875,
        10.989,
        -61.699,
        25.324,
        -0.375,
        6.759,
        21.643,
        -13.962,
        7.057
      ]
    },
    {
      "start": 38.38848,
      "duration": 0.19778,
      "confidence": 0.218,
      "loudness_start": -3.173,
      "loudness_max_time": 0.01105,
      "loudness_max": 0.855,
      "loudness_end": 0,
      "pitches": [
        0.521,
        0.916,
        1,
        0.617,
        0.7,
        0.348,
        0.196,
        0.247,
        0.152,
        0.116,
        0.115,
        0.516
      ],
      "timbre": [
        57.436,
        91.624,
        -7.478,
        8.344,
        13.053,
        -65.354,
        18.787,
        13.74,
        -2.016,
        -8.568,
        -13.538,
        15.357
      ]
    },
    {
      "start": 38.58626,
      "duration": 0.57392,
      "confidence": 0.479,
      "loudness_start": -6.428,
      "loudness_max_time": 0.10029,
      "loudness_max": -0.757,
      "loudness_end": 0,
      "pitches": [
        0.51,
        1,
        0.577,
        0.844,
        0.572,
        0.313,
        0.364,
        0.391,
        0.511,
        0.577,
        0.451,
        0.391
      ],
      "timbre": [
        55.794,
        90.489,
        -5.311,
        -29.197,
        45.644,
        -28.697,
        17.227,
        -17.017,
        2.815,
        4.818,
        -33.83,
        20.77
      ]
    },
    {
      "start": 39.16018,
      "duration": 0.25714,
      "confidence": 0.861,
      "loudness_start": -11.627,
      "loudness_max_time": 0.02572,
      "loudness_max": -0.606,
      "loudness_end": 0,
      "pitches": [
        0.09,
        0.359,
        0.071,
        0.041,
        0.155,
        0.281,
        1,
        0.222,
        0.064,
        0.174,
        0.105,
        0.076
      ],
      "timbre": [
        57.61,
        113.303,
        47.059,
        4.685,
        6.716,
        -19.244,
        55.78,
        9.094,
        -33.025,
        -2.058,
        2.876,
        9.412
      ]
    },
    {
      "start": 39.41732,
      "duration": 0.28916,
      "confidence": 0.45,
      "loudness_start": -6.147,
      "loudness_max_time": 0.02559,
      "loudness_max": 0.276,
      "loudness_end": 0,
      "pitches": [
        0.55,
        1,
        0.962,
        0.474,
        0.448,
        0.225,
        0.618,
        0.278,
        0.141,
        0.13,
        0.113,
        0.434
      ],
      "timbre": [
        57.472,
        81.543,
        36.06,
        8.506,
        8.912,
        -42.168,
        42.121,
        40.405,
        -7.506,
        3.045,
        13.432,
        -8.692
      ]
    },
    {
      "start": 39.70649,
      "duration": 0.20875,
      "confidence": 0.308,
      "loudness_start": -6.13,
      "loudness_max_time": 0.07259,
      "loudness_max": -1.825,
      "loudness_end": 0,
      "pitches": [
        0.538,
        1,
        0.125,
        0.073,
        0.12,
        0.053,
        0.056,
        0.024,
        0.096,
        0.112,
        0.051,
        0.067
      ],
      "timbre": [
        56.119,
        82.27,
        30.665,
        21.144,
        18.365,
        -28.984,
        17.478,
        -5.265,
        -8.763,
        -11.449,
        -30.029,
        -26.007
      ]
    },
    {
      "start": 39.91524,
      "duration": 0.30168,
      "confidence": 0.804,
      "loudness_start": -7.161,
      "loudness_max_time": 0.09697,
      "loudness_max": 1.883,
      "loudness_end": 0,
      "pitches": [
        0.58,
        1,
        0.613,
        0.63,
        0.722,
        0.383,
        0.279,
        0.29,
        0.201,
        0.139,
        0.103,
        0.414
      ],
      "timbre": [
        56.014,
        89.71,
        25.624,
        -24.754,
        7.961,
        -0.155,
        19.452,
        30.932,
        -3.98,
        4.392,
        -33.102,
        -17.264
      ]
    },
    {
      "start": 40.21692,
      "duration": 0.49918,
      "confidence": 0.855,
      "loudness_start": -9.31,
      "loudness_max_time": 0.07723,
      "loudness_max": 0.785,
      "loudness_end": 0,
      "pitches": [
        0.217,
        0.787,
        1,
        0.681,
        0.343,
        0.197,
        0.236,
        0.308,
        0.309,
        0.335,
        0.208,
        0.086
      ],
      "timbre": [
        57.152,
        102.733,
        13.501,
        -10.915,
        54.887,
        3.244,
        -4.277,
        11.595,
        5.829,
        29.511,
        -16.871,
        -15.252
      ]
    },
    {
      "start": 40.7161,
      "duration": 0.29029,
      "confidence": 0.867,
      "loudness_start": -9.197,
      "loudness_max_time": 0.04329,
      "loudness_max": 1.822,
      "loudness_end": 0,
      "pitches": [
        0.247,
        1,
        0.56,
        0.068,
        0.028,
        0.037,
        0.025,
        0.019,
        0.042,
        0.14,
        0.028,
        0.044
      ],
      "timbre": [
        57.915,
        112.116,
        35.629,
        -24.824,
        20.474,
        20.209,
        -10.469,
        16.749,
        19.164,
        10.538,
        7.711,
        -32.33
      ]
    },
    {
      "start": 41.00639,
      "duration": 0.51692,
      "confidence": 0.318,
      "loudness_start": -4.347,
      "loudness_max_time": 0.06951,
      "loudness_max": 0.755,
      "loudness_end": 0,
      "pitches": [
        0.307,
        1,
        0.527,
        0.059,
        0.066,
        0.108,
        0.207,
        0.287,
        0.49,
        0.213,
        0.079,
        0.18
      ],
      "timbre": [
        56.913,
        100.122,
        10.733,
        -18.241,
        -5.861,
        -34.187,
        10.188,
        11.67,
        6.05,
        -5.31,
        -14.623,
        0.224
      ]
    },
    {
      "start": 41.52331,
      "duration": 0.26671,
      "confidence": 0.468,
      "loudness_start": -8.658,
      "loudness_max_time": 0.00895,
      "loudness_max": -0.049,
      "loudness_end": 0,
      "pitches": [
        0.727,
        1,
        0.589,
        0.209,
        0.274,
        0.117,
        0.066,
        0.131,
        0.071,
        0.156,
        0.05,
        0.309
      ],
      "timbre": [
        56.197,
        87.614,
        -3.751,
        5.189,
        -12.128,
        -61.31,
        2.486,
        12.512,
        1.542,
        -8.397,
        -13.535,
        11.161
      ]
    },
    {
      "start": 41.79002,
      "duration": 0.23791,
      "confidence": 0.518,
      "loudness_start": -9.719,
      "loudness_max_time": 0.13519,
      "loudness_max": -3.952,
      "loudness_end": 0,
      "pitches": [
        0.26,
        1,
        0.306,
        0.211,
        0.338,
        0.292,
        0.068,
        0.055,
        0.048,
        0.072,
        0.041,
        0.206
      ],
      "timbre": [
        54.922,
        75.728,
        -6.185,
        -22.071,
        33.314,
        -47.305,
        18.609,
        -3.261,
        -4.19,
        12.155,
        -12.629,
        0.317
      ]
    },
    {
      "start": 42.02794,
      "duration": 0.12893,
      "confidence": 0.693,
      "loudness_start": -6.791,
      "loudness_max_time": 0.04115,
      "loudness_max": 0.337,
      "loudness_end": 0,
      "pitches": [
        0.505,
        1,
        0.16,
        0.154,
        0.254,
        0.22,
        0.212,
        0.291,
        0.456,
        0.368,
        0.298,
        0.123
      ],
      "timbre": [
        58.29,
        44.029,
        21.378,
        -8.954,
        16.572,
        -33.741,
        52.73,
        27.812,
        24.662,
        13.64,
        13.086,
        7.694
      ]
    },
    {
      "start": 42.15687,
      "duration": 0.138,
      "confidence": 0.057,
      "loudness_start": -2.694,
      "loudness_max_time": 0.04878,
      "loudness_max": -0.078,
      "loudness_end": 0,
      "pitches": [
        0.136,
        0.144,
        0.116,
        0.126,
        0.643,
        0.534,
        0.969,
        0.974,
        0.902,
        1,
        0.403,
        0.051
      ],
      "timbre": [
        57.832,
        84.567,
        61.76,
        18.477,
        44.336,
        -30.175,
        50.724,
        13.581,
        25.954,
        -12.87,
        -19.073,
        18.131
      ]
    },
    {
      "start": 42.29488,
      "duration": 0.26776,
      "confidence": 0.407,
      "loudness_start": -5.918,
      "loudness_max_time": 0.16746,
      "loudness_max": -0.934,
      "loudness_end": 0,
      "pitches": [
        0.137,
        0.5,
        0.057,
        0.321,
        1,
        0.371,
        0.06,
        0.043,
        0.134,
        0.239,
        0.063,
        0.281
      ],
      "timbre": [
        57.726,
        99.443,
        37.562,
        -17.091,
        33.002,
        -33.568,
        14.026,
        13.123,
        17.227,
        9.41,
        5.414,
        3.082
      ]
    },
    {
      "start": 42.56263,
      "duration": 0.25451,
      "confidence": 0.287,
      "loudness_start": -3.919,
      "loudness_max_time": 0.01368,
      "loudness_max": 0.605,
      "loudness_end": 0,
      "pitches": [
        0.638,
        1,
        0.968,
        0.333,
        0.703,
        0.319,
        0.423,
        0.405,
        0.286,
        0.23,
        0.14,
        0.592
      ],
      "timbre": [
        58.122,
        62.288,
        6.788,
        4.133,
        23.481,
        -54.976,
        14.977,
        3.759,
        19.561,
        3.771,
        -4.572,
        0.368
      ]
    },
    {
      "start": 42.81714,
      "duration": 0.27342,
      "confidence": 0.006,
      "loudness_start": -5.209,
      "loudness_max_time": 0.04723,
      "loudness_max": -2.881,
      "loudness_end": 0,
      "pitches": [
        0.273,
        0.95,
        1,
        0.757,
        0.504,
        0.073,
        0.04,
        0.033,
        0.107,
        0.111,
        0.054,
        0.213
      ],
      "timbre": [
        55.575,
        62.62,
        2.686,
        -4.22,
        24.124,
        -38.37,
        28.193,
        3.863,
        2.653,
        0.223,
        -17.897,
        0.382
      ]
    },
    {
      "start": 43.09057,
      "duration": 0.09506,
      "confidence": 0.499,
      "loudness_start": -8.315,
      "loudness_max_time": 0.00698,
      "loudness_max": -1.507,
      "loudness_end": 0,
      "pitches": [
        0.627,
        1,
        0.147,
        0.086,
        0.205,
        0.186,
        0.303,
        0.313,
        0.382,
        0.374,
        0.403,
        0.106
      ],
      "timbre": [
        54.872,
        66.373,
        -36.88,
        -5.999,
        -21.187,
        -68.561,
        10.647,
        20.846,
        -17.891,
        -3.034,
        -9.398,
        12.734
      ]
    },
    {
      "start": 43.18562,
      "duration": 0.13211,
      "confidence": 0.127,
      "loudness_start": -8.007,
      "loudness_max_time": 0.06419,
      "loudness_max": -4.32,
      "loudness_end": 0,
      "pitches": [
        0.083,
        0.139,
        0.085,
        0.073,
        0.448,
        0.431,
        1,
        0.978,
        0.886,
        0.917,
        0.321,
        0.012
      ],
      "timbre": [
        53.641,
        74.77,
        16.441,
        -2.3,
        -2.373,
        -26.773,
        49.849,
        -1.09,
        -4.271,
        5.044,
        -19.456,
        -0.669
      ]
    },
    {
      "start": 43.31773,
      "duration": 0.28912,
      "confidence": 0.774,
      "loudness_start": -8.525,
      "loudness_max_time": 0.04895,
      "loudness_max": -0.393,
      "loudness_end": 0,
      "pitches": [
        0.064,
        0.361,
        0.096,
        0.088,
        0.192,
        0.229,
        1,
        0.192,
        0.073,
        0.174,
        0.111,
        0.063
      ],
      "timbre": [
        57.055,
        86.738,
        65.593,
        -3.747,
        4.022,
        6.75,
        61.458,
        28.557,
        -21.324,
        -7.279,
        1.056,
        12.944
      ]
    },
    {
      "start": 43.60685,
      "duration": 0.27283,
      "confidence": 0.41,
      "loudness_start": -6.312,
      "loudness_max_time": 0.02095,
      "loudness_max": 0.15,
      "loudness_end": 0,
      "pitches": [
        0.592,
        1,
        0.92,
        0.397,
        0.409,
        0.225,
        0.893,
        0.278,
        0.111,
        0.147,
        0.098,
        0.414
      ],
      "timbre": [
        57.969,
        72.395,
        40.533,
        2.67,
        11.028,
        -54.462,
        31.54,
        29.622,
        0.245,
        4.718,
        -10.056,
        -6.366
      ]
    },
    {
      "start": 43.87968,
      "duration": 0.22712,
      "confidence": 0.492,
      "loudness_start": -6.052,
      "loudness_max_time": 0.02879,
      "loudness_max": -0.812,
      "loudness_end": 0,
      "pitches": [
        0.475,
        1,
        0.151,
        0.084,
        0.122,
        0.059,
        0.067,
        0.031,
        0.106,
        0.139,
        0.06,
        0.075
      ],
      "timbre": [
        56.649,
        80.776,
        34.55,
        42.02,
        16.283,
        -32.534,
        24.551,
        -15.661,
        -18.272,
        -4.783,
        -23.865,
        -26.289
      ]
    },
    {
      "start": 44.1068,
      "duration": 0.28943,
      "confidence": 0.799,
      "loudness_start": -7.724,
      "loudness_max_time": 0.06961,
      "loudness_max": 0.806,
      "loudness_end": 0,
      "pitches": [
        0.618,
        1,
        0.664,
        0.609,
        0.765,
        0.335,
        0.236,
        0.282,
        0.187,
        0.145,
        0.106,
        0.478
      ],
      "timbre": [
        56.627,
        82.875,
        16.779,
        -12.49,
        21.473,
        4.415,
        12.228,
        46.354,
        9.277,
        1.992,
        -14.96,
        -27.378
      ]
    },
    {
      "start": 44.39624,
      "duration": 0.25542,
      "confidence": 0.815,
      "loudness_start": -8.561,
      "loudness_max_time": 0.04278,
      "loudness_max": 0.786,
      "loudness_end": 0,
      "pitches": [
        0.406,
        1,
        0.248,
        0.05,
        0.018,
        0.011,
        0.025,
        0.011,
        0.04,
        0.159,
        0.034,
        0.017
      ],
      "timbre": [
        57.717,
        109.019,
        26.323,
        -34.361,
        41.776,
        2.46,
        -0.619,
        -1.335,
        2.607,
        30.668,
        -4.979,
        -12.722
      ]
    },
    {
      "start": 44.65166,
      "duration": 0.23837,
      "confidence": 0.345,
      "loudness_start": -2.014,
      "loudness_max_time": 0.03543,
      "loudness_max": 1.611,
      "loudness_end": 0,
      "pitches": [
        0.745,
        1,
        0.862,
        0.53,
        0.4,
        0.228,
        0.174,
        0.343,
        0.278,
        0.28,
        0.119,
        0.52
      ],
      "timbre": [
        57.412,
        92.419,
        -11.424,
        39.721,
        10.014,
        -51.539,
        1.233,
        16.634,
        -4.923,
        -9.049,
        -8.847,
        -3.246
      ]
    },
    {
      "start": 44.89002,
      "duration": 0.29057,
      "confidence": 0.835,
      "loudness_start": -8.758,
      "loudness_max_time": 0.04719,
      "loudness_max": 0.284,
      "loudness_end": 0,
      "pitches": [
        0.234,
        1,
        0.582,
        0.082,
        0.029,
        0.032,
        0.02,
        0.02,
        0.051,
        0.144,
        0.031,
        0.047
      ],
      "timbre": [
        57.586,
        104.389,
        34.913,
        -35.358,
        36.203,
        13.016,
        -11.314,
        15.108,
        25.368,
        10.218,
        -0.257,
        -33.623
      ]
    },
    {
      "start": 45.18059,
      "duration": 0.2439,
      "confidence": 0.077,
      "loudness_start": -3.78,
      "loudness_max_time": 0.03834,
      "loudness_max": -0.825,
      "loudness_end": 0,
      "pitches": [
        0.574,
        1,
        0.553,
        0.23,
        0.261,
        0.142,
        0.102,
        0.108,
        0.103,
        0.053,
        0.055,
        0.582
      ],
      "timbre": [
        57.872,
        83.404,
        30.637,
        -4.169,
        -1.183,
        -44.395,
        21.335,
        14.791,
        -0.246,
        4.058,
        -3.177,
        -9.655
      ]
    },
    {
      "start": 45.42449,
      "duration": 0.25052,
      "confidence": 0.018,
      "loudness_start": -3.899,
      "loudness_max_time": 0.10278,
      "loudness_max": -1.109,
      "loudness_end": 0,
      "pitches": [
        0.697,
        1,
        0.076,
        0.01,
        0.028,
        0.024,
        0.015,
        0.038,
        0.147,
        0.05,
        0.009,
        0.082
      ],
      "timbre": [
        56.29,
        92.611,
        47.437,
        22.58,
        18.836,
        -31.678,
        38.133,
        -8.048,
        15.277,
        10.349,
        -43.022,
        13.429
      ]
    },
    {
      "start": 45.67501,
      "duration": 0.28893,
      "confidence": 0.805,
      "loudness_start": -10.34,
      "loudness_max_time": 0.03098,
      "loudness_max": 0.209,
      "loudness_end": 0,
      "pitches": [
        0.732,
        1,
        0.626,
        0.316,
        0.327,
        0.162,
        0.119,
        0.172,
        0.107,
        0.164,
        0.071,
        0.306
      ],
      "timbre": [
        55.981,
        85.134,
        -2.755,
        -4.862,
        11.601,
        -5.091,
        17.736,
        27.079,
        8.84,
        -4.849,
        17.887,
        -2.214
      ]
    },
    {
      "start": 45.96395,
      "duration": 0.24889,
      "confidence": 0.372,
      "loudness_start": -8.493,
      "loudness_max_time": 0.14993,
      "loudness_max": -3.729,
      "loudness_end": 0,
      "pitches": [
        0.256,
        1,
        0.309,
        0.242,
        0.352,
        0.281,
        0.071,
        0.049,
        0.048,
        0.073,
        0.04,
        0.201
      ],
      "timbre": [
        54.773,
        79.009,
        -8.382,
        -25.337,
        31.179,
        -51.243,
        17.9,
        -10.446,
        -5.901,
        11.348,
        -12.024,
        1.747
      ]
    },
    {
      "start": 46.21283,
      "duration": 0.1029,
      "confidence": 0.689,
      "loudness_start": -7.138,
      "loudness_max_time": 0.01785,
      "loudness_max": 0.463,
      "loudness_end": 0,
      "pitches": [
        0.669,
        1,
        0.17,
        0.195,
        0.142,
        0.1,
        0.09,
        0.21,
        0.353,
        0.134,
        0.262,
        0.1
      ],
      "timbre": [
        58.168,
        24.328,
        22.416,
        10.847,
        21.738,
        -46.118,
        42.934,
        22.326,
        22.745,
        21.175,
        -1.049,
        3.329
      ]
    },
    {
      "start": 46.31574,
      "duration": 0.15252,
      "confidence": 0.221,
      "loudness_start": -4.105,
      "loudness_max_time": 0.09927,
      "loudness_max": -0.947,
      "loudness_end": 0,
      "pitches": [
        0.447,
        0.494,
        0.188,
        0.201,
        0.831,
        0.768,
        0.985,
        1,
        0.362,
        0.427,
        0.382,
        0.13
      ],
      "timbre": [
        57.877,
        57.786,
        42.81,
        -6.884,
        31.647,
        -33.05,
        52.022,
        13.493,
        20.269,
        -1.854,
        -9.391,
        19.389
      ]
    },
    {
      "start": 46.46825,
      "duration": 0.2688,
      "confidence": 0.437,
      "loudness_start": -5.203,
      "loudness_max_time": 0.06622,
      "loudness_max": 0.426,
      "loudness_end": 0,
      "pitches": [
        0.199,
        0.577,
        0.123,
        0.495,
        1,
        0.381,
        0.109,
        0.099,
        0.164,
        0.478,
        0.071,
        0.386
      ],
      "timbre": [
        58.324,
        81.415,
        27.883,
        -21.44,
        40.88,
        -27.205,
        18.118,
        9.591,
        27.946,
        -2.051,
        -1.53,
        8.712
      ]
    },
    {
      "start": 46.73705,
      "duration": 0.52726,
      "confidence": 0.169,
      "loudness_start": -2.618,
      "loudness_max_time": 0.01075,
      "loudness_max": 1.074,
      "loudness_end": 0,
      "pitches": [
        0.139,
        0.296,
        0.451,
        0.842,
        1,
        0.371,
        0.514,
        0.383,
        0.725,
        0.34,
        0.149,
        0.249
      ],
      "timbre": [
        57.78,
        66.704,
        -10.122,
        6.676,
        20.842,
        -58.317,
        -2.007,
        7.44,
        10.75,
        3.509,
        -10.101,
        0.215
      ]
    },
    {
      "start": 47.26431,
      "duration": 0.20272,
      "confidence": 0.387,
      "loudness_start": -6.396,
      "loudness_max_time": 0.00716,
      "loudness_max": -1.482,
      "loudness_end": 0,
      "pitches": [
        0.53,
        1,
        0.856,
        0.518,
        0.447,
        0.255,
        0.323,
        0.152,
        0.139,
        0.108,
        0.202,
        0.455
      ],
      "timbre": [
        56.301,
        58.898,
        12.965,
        -9.308,
        -12.149,
        -55.637,
        30.886,
        11.291,
        -10.521,
        2.967,
        -8.972,
        -16.905
      ]
    },
    {
      "start": 47.46703,
      "duration": 0.3078,
      "confidence": 0.635,
      "loudness_start": -7.145,
      "loudness_max_time": 0.10666,
      "loudness_max": -0.724,
      "loudness_end": 0,
      "pitches": [
        0.072,
        0.394,
        0.129,
        0.096,
        0.145,
        0.172,
        1,
        0.202,
        0.137,
        0.159,
        0.143,
        0.058
      ],
      "timbre": [
        55.924,
        72.175,
        75.318,
        -37.971,
        -7.527,
        -24.924,
        47.084,
        29.665,
        -18.818,
        -4.136,
        -11.485,
        -3.797
      ]
    },
    {
      "start": 47.77483,
      "duration": 0.24363,
      "confidence": 0.249,
      "loudness_start": -4.583,
      "loudness_max_time": 0.03198,
      "loudness_max": 0.066,
      "loudness_end": 0,
      "pitches": [
        0.565,
        1,
        0.976,
        0.544,
        0.524,
        0.197,
        0.244,
        0.302,
        0.238,
        0.223,
        0.147,
        0.429
      ],
      "timbre": [
        56.957,
        57.592,
        2.804,
        22.279,
        22.768,
        -35.49,
        23.153,
        17.871,
        6.103,
        4.289,
        -10.363,
        17.598
      ]
    },
    {
      "start": 48.01846,
      "duration": 0.42912,
      "confidence": 0.76,
      "loudness_start": -9.559,
      "loudness_max_time": 0.09065,
      "loudness_max": 0.058,
      "loudness_end": 0,
      "pitches": [
        0.235,
        0.334,
        0.771,
        1,
        0.544,
        0.153,
        0.246,
        0.127,
        0.175,
        0.295,
        0.114,
        0.078
      ],
      "timbre": [
        55.389,
        59.045,
        24.002,
        -35.095,
        36.008,
        -6.931,
        14.838,
        6.487,
        -0.585,
        19.645,
        -24.02,
        -4.214
      ]
    },
    {
      "start": 48.44757,
      "duration": 0.12286,
      "confidence": 0.231,
      "loudness_start": -7.435,
      "loudness_max_time": 0.01427,
      "loudness_max": -4.256,
      "loudness_end": 0,
      "pitches": [
        0.245,
        0.334,
        0.372,
        0.272,
        0.727,
        0.703,
        0.974,
        0.952,
        0.88,
        1,
        0.572,
        0.026
      ],
      "timbre": [
        53.716,
        111.668,
        52.846,
        11.909,
        27.581,
        -51.737,
        38.366,
        -8.145,
        37.177,
        3.149,
        -12.496,
        2.747
      ]
    },
    {
      "start": 48.57043,
      "duration": 0.25605,
      "confidence": 0.832,
      "loudness_start": -9.191,
      "loudness_max_time": 0.04408,
      "loudness_max": 1.08,
      "loudness_end": 0,
      "pitches": [
        0.426,
        1,
        0.224,
        0.04,
        0.016,
        0.012,
        0.028,
        0.013,
        0.043,
        0.273,
        0.049,
        0.016
      ],
      "timbre": [
        58.367,
        63.009,
        43.611,
        25.532,
        69.776,
        -32.666,
        26.247,
        22.841,
        13.145,
        19.352,
        -11.118,
        2.095
      ]
    },
    {
      "start": 48.82649,
      "duration": 0.23152,
      "confidence": 0.564,
      "loudness_start": -6.064,
      "loudness_max_time": 0.00912,
      "loudness_max": 0.437,
      "loudness_end": 0,
      "pitches": [
        0.746,
        1,
        0.89,
        0.66,
        0.452,
        0.253,
        0.198,
        0.345,
        0.275,
        0.444,
        0.18,
        0.527
      ],
      "timbre": [
        56.915,
        94.678,
        -22.658,
        13.769,
        15.118,
        -56.732,
        2.604,
        0.152,
        5.696,
        -9.034,
        -15.029,
        1.995
      ]
    },
    {
      "start": 49.058,
      "duration": 0.19184,
      "confidence": 0.805,
      "loudness_start": -8.674,
      "loudness_max_time": 0.10991,
      "loudness_max": 1.222,
      "loudness_end": 0,
      "pitches": [
        0.479,
        1,
        0.535,
        0.146,
        0.06,
        0.054,
        0.06,
        0.051,
        0.121,
        0.403,
        0.362,
        0.141
      ],
      "timbre": [
        55.839,
        59.536,
        60.506,
        -63.145,
        43.241,
        -16.085,
        42.825,
        -3.651,
        10.043,
        17.054,
        -18.177,
        -5.059
      ]
    },
    {
      "start": 49.24984,
      "duration": 0.36658,
      "confidence": 0.192,
      "loudness_start": -3.684,
      "loudness_max_time": 0.0466,
      "loudness_max": -0.441,
      "loudness_end": 0,
      "pitches": [
        0.608,
        1,
        0.856,
        0.64,
        0.565,
        0.405,
        0.309,
        0.379,
        0.332,
        0.191,
        0.15,
        0.353
      ],
      "timbre": [
        56.016,
        65.737,
        15.359,
        35.911,
        20.87,
        -35.631,
        28.82,
        7.528,
        30.296,
        2.599,
        -32.184,
        -1.863
      ]
    },
    {
      "start": 49.61642,
      "duration": 0.24023,
      "confidence": 0.94,
      "loudness_start": -11.077,
      "loudness_max_time": 0.07104,
      "loudness_max": 2.423,
      "loudness_end": 0,
      "pitches": [
        0.72,
        1,
        0.031,
        0.017,
        0.046,
        0.033,
        0.011,
        0.051,
        0.185,
        0.114,
        0.04,
        0.017
      ],
      "timbre": [
        56.565,
        72.438,
        37.199,
        -32.22,
        50.452,
        14.023,
        8.584,
        12.462,
        7.521,
        5.18,
        -26.532,
        -5.452
      ]
    },
    {
      "start": 49.85664,
      "duration": 0.2585,
      "confidence": 0.443,
      "loudness_start": -8.745,
      "loudness_max_time": 0.02359,
      "loudness_max": -1.123,
      "loudness_end": 0,
      "pitches": [
        0.69,
        1,
        0.66,
        0.337,
        0.301,
        0.149,
        0.097,
        0.14,
        0.096,
        0.088,
        0.053,
        0.268
      ],
      "timbre": [
        54.744,
        75.228,
        -23.963,
        23.268,
        2.488,
        -36.549,
        15.164,
        11.18,
        -9.434,
        0.416,
        7.742,
        4.47
      ]
    },
    {
      "start": 50.11515,
      "duration": 0.26141,
      "confidence": 0.994,
      "loudness_start": -12.351,
      "loudness_max_time": 0.05401,
      "loudness_max": 1.996,
      "loudness_end": 0,
      "pitches": [
        0.195,
        1,
        0.282,
        0.337,
        0.524,
        0.379,
        0.085,
        0.072,
        0.154,
        0.285,
        0.089,
        0.266
      ],
      "timbre": [
        56.221,
        93.427,
        19.295,
        -33.527,
        32.606,
        39.986,
        -2.562,
        -1.121,
        24.701,
        -13.934,
        -2.322,
        -23.19
      ]
    },
    {
      "start": 50.37655,
      "duration": 0.27773,
      "confidence": 0.555,
      "loudness_start": -5.75,
      "loudness_max_time": 0.05236,
      "loudness_max": -0.791,
      "loudness_end": 0,
      "pitches": [
        0.725,
        0.989,
        1,
        0.515,
        0.816,
        0.246,
        0.194,
        0.257,
        0.149,
        0.086,
        0.092,
        0.693
      ],
      "timbre": [
        57.444,
        107.309,
        27.26,
        -18.943,
        3.461,
        -26.451,
        28.712,
        26.474,
        16.065,
        1.497,
        16.434,
        15.432
      ]
    },
    {
      "start": 50.65429,
      "duration": 0.2507,
      "confidence": 0.044,
      "loudness_start": -3.736,
      "loudness_max_time": 0.06257,
      "loudness_max": -1.038,
      "loudness_end": 0,
      "pitches": [
        0.128,
        0.729,
        0.069,
        0.359,
        1,
        0.362,
        0.044,
        0.037,
        0.081,
        0.095,
        0.042,
        0.294
      ],
      "timbre": [
        56.628,
        101.479,
        21.522,
        5.139,
        17.128,
        -37.556,
        5.879,
        -7.753,
        12.303,
        20.65,
        -22.289,
        3.202
      ]
    },
    {
      "start": 50.90499,
      "duration": 0.53265,
      "confidence": 0.579,
      "loudness_start": -5.466,
      "loudness_max_time": 0.04084,
      "loudness_max": 0.008,
      "loudness_end": 0,
      "pitches": [
        0.124,
        0.286,
        0.484,
        0.809,
        1,
        0.18,
        0.304,
        0.43,
        0.48,
        0.378,
        0.191,
        0.315
      ],
      "timbre": [
        57.746,
        79.677,
        11.94,
        -2.276,
        22.445,
        -37.258,
        29.428,
        -2.672,
        10.767,
        23.927,
        -2.213,
        4.956
      ]
    },
    {
      "start": 51.43764,
      "duration": 0.24422,
      "confidence": 0.003,
      "loudness_start": -8.296,
      "loudness_max_time": 0.00696,
      "loudness_max": -2.782,
      "loudness_end": 0,
      "pitches": [
        0.55,
        1,
        0.753,
        0.338,
        0.369,
        0.17,
        0.352,
        0.122,
        0.102,
        0.129,
        0.071,
        0.433
      ],
      "timbre": [
        53.743,
        54.438,
        -18.375,
        -20.187,
        -3.401,
        -74.718,
        24.336,
        3.157,
        -8.342,
        -1.845,
        -4.661,
        10.722
      ]
    },
    {
      "start": 51.68186,
      "duration": 0.1215,
      "confidence": 0.834,
      "loudness_start": -8.689,
      "loudness_max_time": 0.04314,
      "loudness_max": 0.765,
      "loudness_end": 0,
      "pitches": [
        0.076,
        0.524,
        0.506,
        0.42,
        0.901,
        0.9,
        1,
        0.981,
        0.479,
        0.525,
        0.111,
        0.032
      ],
      "timbre": [
        57.317,
        88.024,
        52.393,
        -0.88,
        19.431,
        12.65,
        70.51,
        14.435,
        6.204,
        -18.015,
        1.536,
        17.373
      ]
    },
    {
      "start": 51.80336,
      "duration": 0.15714,
      "confidence": 0.194,
      "loudness_start": -4.166,
      "loudness_max_time": 0.06588,
      "loudness_max": -0.19,
      "loudness_end": 0,
      "pitches": [
        0.028,
        0.279,
        0.206,
        0.19,
        0.904,
        0.888,
        1,
        0.975,
        0.283,
        0.343,
        0.05,
        0.012
      ],
      "timbre": [
        57.181,
        90.934,
        37.511,
        20.895,
        14.869,
        -29.811,
        50.008,
        -5.344,
        9.961,
        -7.006,
        -30.175,
        21.461
      ]
    },
    {
      "start": 51.9605,
      "duration": 0.22113,
      "confidence": 0.424,
      "loudness_start": -6.796,
      "loudness_max_time": 0.00569,
      "loudness_max": -0.56,
      "loudness_end": 0,
      "pitches": [
        0.618,
        1,
        0.902,
        0.447,
        0.482,
        0.193,
        0.217,
        0.252,
        0.159,
        0.374,
        0.118,
        0.51
      ],
      "timbre": [
        57.549,
        56.678,
        13.144,
        -17.488,
        29.536,
        -61.851,
        25.117,
        6.652,
        6.092,
        1.202,
        -9.915,
        12.741
      ]
    },
    {
      "start": 52.18163,
      "duration": 0.28385,
      "confidence": 0.54,
      "loudness_start": -6.121,
      "loudness_max_time": 0.08541,
      "loudness_max": -0.403,
      "loudness_end": 0,
      "pitches": [
        0.456,
        1,
        0.152,
        0.122,
        0.11,
        0.074,
        0.091,
        0.052,
        0.141,
        0.231,
        0.109,
        0.051
      ],
      "timbre": [
        56.789,
        73.763,
        36.27,
        -12.579,
        39.724,
        -12.16,
        10.153,
        8.471,
        8.088,
        -3.946,
        -13.44,
        8.634
      ]
    },
    {
      "start": 52.46549,
      "duration": 0.16045,
      "confidence": 0.262,
      "loudness_start": -6.837,
      "loudness_max_time": 0.02287,
      "loudness_max": -2.495,
      "loudness_end": 0,
      "pitches": [
        0.301,
        1,
        0.207,
        0.161,
        0.078,
        0.077,
        0.547,
        0.559,
        0.768,
        0.766,
        0.455,
        0.049
      ],
      "timbre": [
        54.569,
        78.471,
        -36.704,
        -16.35,
        -16.343,
        -47.611,
        8.362,
        6.636,
        1.464,
        14.385,
        9.114,
        12.666
      ]
    },
    {
      "start": 52.62594,
      "duration": 0.09506,
      "confidence": 0.125,
      "loudness_start": -7.034,
      "loudness_max_time": 0.02127,
      "loudness_max": -5.026,
      "loudness_end": 0,
      "pitches": [
        0.306,
        0.398,
        0.357,
        0.299,
        0.674,
        0.661,
        0.939,
        0.926,
        0.897,
        1,
        0.609,
        0.02
      ],
      "timbre": [
        53.94,
        137.557,
        42.421,
        -6.306,
        23.897,
        -45.215,
        29.278,
        3.308,
        37.5,
        7.903,
        -16.065,
        -0.541
      ]
    },
    {
      "start": 52.721,
      "duration": 0.27261,
      "confidence": 0.707,
      "loudness_start": -7.486,
      "loudness_max_time": 0.07139,
      "loudness_max": 0.245,
      "loudness_end": 0,
      "pitches": [
        0.418,
        1,
        0.262,
        0.042,
        0.029,
        0.014,
        0.032,
        0.013,
        0.052,
        0.206,
        0.052,
        0.023
      ],
      "timbre": [
        57.114,
        105.299,
        50.005,
        19.936,
        53.102,
        -6.993,
        42.359,
        3.083,
        16.34,
        15.193,
        -14.469,
        10.607
      ]
    },
    {
      "start": 52.99361,
      "duration": 0.25474,
      "confidence": 0.717,
      "loudness_start": -8.318,
      "loudness_max_time": 0.01586,
      "loudness_max": 0.64,
      "loudness_end": 0,
      "pitches": [
        0.663,
        1,
        0.818,
        0.566,
        0.423,
        0.251,
        0.219,
        0.368,
        0.277,
        0.605,
        0.279,
        0.488
      ],
      "timbre": [
        57.627,
        83.432,
        -9.79,
        7.783,
        20.736,
        -27.628,
        -10.843,
        14.741,
        -2.427,
        1.42,
        -9.873,
        -5.66
      ]
    },
    {
      "start": 53.24834,
      "duration": 0.24998,
      "confidence": 0.771,
      "loudness_start": -9.335,
      "loudness_max_time": 0.05217,
      "loudness_max": -0.421,
      "loudness_end": 0,
      "pitches": [
        0.342,
        1,
        0.454,
        0.082,
        0.042,
        0.021,
        0.036,
        0.037,
        0.209,
        0.358,
        0.074,
        0.029
      ],
      "timbre": [
        56.453,
        72.695,
        6.753,
        -16.284,
        52.487,
        -0.372,
        5.927,
        -31.504,
        9.627,
        5.301,
        -15.818,
        -4.339
      ]
    },
    {
      "start": 53.49832,
      "duration": 0.25546,
      "confidence": 0.154,
      "loudness_start": -6.67,
      "loudness_max_time": 0.03203,
      "loudness_max": -2.261,
      "loudness_end": 0,
      "pitches": [
        0.564,
        1,
        0.816,
        0.526,
        0.46,
        0.285,
        0.199,
        0.247,
        0.185,
        0.139,
        0.089,
        0.322
      ],
      "timbre": [
        54.258,
        45.986,
        -24.012,
        -2.034,
        10.387,
        -43.439,
        6.488,
        21.325,
        6.978,
        -12.488,
        10.593,
        0.11
      ]
    },
    {
      "start": 53.75379,
      "duration": 0.27347,
      "confidence": 0.916,
      "loudness_start": -11.175,
      "loudness_max_time": 0.08285,
      "loudness_max": 0.353,
      "loudness_end": 0,
      "pitches": [
        0.663,
        1,
        0.036,
        0.014,
        0.057,
        0.029,
        0.006,
        0.035,
        0.179,
        0.104,
        0.035,
        0.02
      ],
      "timbre": [
        56.221,
        72.959,
        60.051,
        -22.366,
        53.253,
        22.398,
        58,
        11.359,
        21.836,
        -13.492,
        -1.47,
        14.732
      ]
    },
    {
      "start": 54.02726,
      "duration": 0.23986,
      "confidence": 0.518,
      "loudness_start": -8.051,
      "loudness_max_time": 0.02628,
      "loudness_max": 0.028,
      "loudness_end": 0,
      "pitches": [
        0.695,
        1,
        0.76,
        0.471,
        0.384,
        0.208,
        0.133,
        0.168,
        0.118,
        0.09,
        0.068,
        0.31
      ],
      "timbre": [
        55.357,
        64.468,
        -17.985,
        23.756,
        7.178,
        -28.15,
        19.686,
        12.348,
        -4.664,
        -8.947,
        12.727,
        2.718
      ]
    },
    {
      "start": 54.26712,
      "duration": 0.2937,
      "confidence": 0.87,
      "loudness_start": -10.933,
      "loudness_max_time": 0.06028,
      "loudness_max": -0.12,
      "loudness_end": 0,
      "pitches": [
        0.191,
        1,
        0.251,
        0.369,
        0.551,
        0.401,
        0.079,
        0.062,
        0.133,
        0.287,
        0.118,
        0.317
      ],
      "timbre": [
        54.647,
        70.96,
        34.163,
        -43.963,
        43.033,
        9.64,
        22.274,
        -1.624,
        -6.023,
        -2.535,
        -34.687,
        -10.022
      ]
    },
    {
      "start": 54.56082,
      "duration": 0.36036,
      "confidence": 0.67,
      "loudness_start": -6.763,
      "loudness_max_time": 0.08162,
      "loudness_max": 0.591,
      "loudness_end": 0,
      "pitches": [
        0.765,
        1,
        0.714,
        0.253,
        0.85,
        0.183,
        0.177,
        0.218,
        0.26,
        0.259,
        0.265,
        0.622
      ],
      "timbre": [
        57.409,
        76.567,
        11.808,
        -14.705,
        16.127,
        -32.808,
        4.08,
        28.577,
        11.627,
        19.033,
        -4.563,
        -9.638
      ]
    },
    {
      "start": 54.92118,
      "duration": 0.40608,
      "confidence": 0.691,
      "loudness_start": -6.216,
      "loudness_max_time": 0.1792,
      "loudness_max": 0.71,
      "loudness_end": 0,
      "pitches": [
        0.148,
        0.354,
        0.631,
        0.644,
        1,
        0.464,
        0.53,
        0.465,
        0.471,
        0.407,
        0.318,
        0.171
      ],
      "timbre": [
        56.546,
        76.213,
        5.314,
        -30.512,
        32.169,
        -10.815,
        17.084,
        30.759,
        11.675,
        -9.646,
        -33.004,
        -14.855
      ]
    },
    {
      "start": 55.32726,
      "duration": 0.28444,
      "confidence": 0.595,
      "loudness_start": -7.568,
      "loudness_max_time": 0.04187,
      "loudness_max": -1.265,
      "loudness_end": 0,
      "pitches": [
        0.244,
        0.9,
        1,
        0.899,
        0.697,
        0.061,
        0.045,
        0.034,
        0.143,
        0.28,
        0.129,
        0.191
      ],
      "timbre": [
        56.645,
        67.429,
        14.733,
        -12.4,
        68.26,
        -23.337,
        68.373,
        -1.445,
        1.372,
        21.432,
        -18.721,
        7.407
      ]
    },
    {
      "start": 55.6117,
      "duration": 0.09506,
      "confidence": 0.077,
      "loudness_start": -6.864,
      "loudness_max_time": 0.00572,
      "loudness_max": -0.899,
      "loudness_end": 0,
      "pitches": [
        0.628,
        1,
        0.148,
        0.085,
        0.194,
        0.186,
        0.286,
        0.304,
        0.378,
        0.366,
        0.396,
        0.086
      ],
      "timbre": [
        54.307,
        37.542,
        -40.239,
        1.803,
        2.617,
        -87.372,
        15.479,
        18.827,
        2.378,
        3.416,
        -14.951,
        7.446
      ]
    },
    {
      "start": 55.70676,
      "duration": 0.15533,
      "confidence": 0.188,
      "loudness_start": -9.06,
      "loudness_max_time": 0.05259,
      "loudness_max": -5.236,
      "loudness_end": 0,
      "pitches": [
        0.075,
        0.122,
        0.068,
        0.058,
        0.31,
        0.302,
        1,
        0.981,
        0.822,
        0.839,
        0.224,
        0.012
      ],
      "timbre": [
        52.271,
        55.747,
        -4.767,
        -15.254,
        16.401,
        -24.451,
        35.83,
        -0.212,
        3.853,
        -9.051,
        -26.461,
        -6.179
      ]
    },
    {
      "start": 55.86209,
      "duration": 0.26694,
      "confidence": 0.9,
      "loudness_start": -11.223,
      "loudness_max_time": 0.03477,
      "loudness_max": 0.392,
      "loudness_end": 0,
      "pitches": [
        0.068,
        0.318,
        0.069,
        0.047,
        0.189,
        0.324,
        1,
        0.174,
        0.093,
        0.123,
        0.107,
        0.082
      ],
      "timbre": [
        57.476,
        99.807,
        53.952,
        8.667,
        -0.091,
        12.91,
        58.004,
        18.331,
        -25.077,
        -7.601,
        16.774,
        0.3
      ]
    },
    {
      "start": 56.12902,
      "duration": 0.27973,
      "confidence": 0.437,
      "loudness_start": -4.592,
      "loudness_max_time": 0.00865,
      "loudness_max": -0.36,
      "loudness_end": 0,
      "pitches": [
        0.597,
        1,
        0.918,
        0.365,
        0.394,
        0.184,
        0.754,
        0.238,
        0.107,
        0.106,
        0.098,
        0.437
      ],
      "timbre": [
        57.896,
        77.194,
        38.215,
        9.781,
        7.346,
        -47.387,
        37.912,
        34.27,
        -10.719,
        5.875,
        -10.81,
        -2.465
      ]
    },
    {
      "start": 56.40875,
      "duration": 0.22141,
      "confidence": 0.593,
      "loudness_start": -6.354,
      "loudness_max_time": 0.02385,
      "loudness_max": 0.592,
      "loudness_end": 0,
      "pitches": [
        0.476,
        1,
        0.188,
        0.144,
        0.144,
        0.066,
        0.102,
        0.038,
        0.118,
        0.115,
        0.067,
        0.074
      ],
      "timbre": [
        57.338,
        105.396,
        25.884,
        36.374,
        28.619,
        -32.117,
        26.345,
        -18.216,
        -13.746,
        8.598,
        -17.4,
        -23.614
      ]
    },
    {
      "start": 56.63016,
      "duration": 0.28785,
      "confidence": 0.669,
      "loudness_start": -6.572,
      "loudness_max_time": 0.08873,
      "loudness_max": 0.694,
      "loudness_end": 0,
      "pitches": [
        0.648,
        1,
        0.782,
        0.63,
        0.77,
        0.335,
        0.244,
        0.292,
        0.192,
        0.167,
        0.12,
        0.513
      ],
      "timbre": [
        56.739,
        97.668,
        12.855,
        -9.159,
        12.156,
        -6.085,
        7.696,
        31.779,
        -4.658,
        15.631,
        -18.009,
        -14.294
      ]
    },
    {
      "start": 56.918,
      "duration": 0.14481,
      "confidence": 0.804,
      "loudness_start": -9.509,
      "loudness_max_time": 0.07551,
      "loudness_max": -0.215,
      "loudness_end": 0,
      "pitches": [
        0.462,
        1,
        0.806,
        0.666,
        0.438,
        0.436,
        0.098,
        0.082,
        0.069,
        0.113,
        0.027,
        0.021
      ],
      "timbre": [
        57.179,
        108.314,
        19.123,
        -40.057,
        54.853,
        -8.463,
        -6.427,
        -4.915,
        11.208,
        26.385,
        -10.888,
        -15.131
      ]
    },
    {
      "start": 57.06281,
      "duration": 0.09882,
      "confidence": 0.198,
      "loudness_start": -2.888,
      "loudness_max_time": 0.03794,
      "loudness_max": 0.452,
      "loudness_end": 0,
      "pitches": [
        0.687,
        1,
        0.966,
        0.763,
        0.519,
        0.512,
        0.21,
        0.196,
        0.05,
        0.07,
        0.038,
        0.024
      ],
      "timbre": [
        58.836,
        102.868,
        14.58,
        -10.257,
        53.515,
        -45.196,
        -4.558,
        1.67,
        15.158,
        16.148,
        -15.529,
        -22.798
      ]
    },
    {
      "start": 57.16163,
      "duration": 0.25546,
      "confidence": 0.134,
      "loudness_start": -2.669,
      "loudness_max_time": 0.02316,
      "loudness_max": 0.886,
      "loudness_end": 0,
      "pitches": [
        0.722,
        1,
        0.846,
        0.608,
        0.434,
        0.235,
        0.212,
        0.354,
        0.252,
        0.233,
        0.131,
        0.458
      ],
      "timbre": [
        57.27,
        88.471,
        -9.296,
        30.083,
        15.906,
        -39.13,
        1.821,
        15.404,
        -11.482,
        -0.715,
        -8.408,
        -7.477
      ]
    },
    {
      "start": 57.4171,
      "duration": 0.32467,
      "confidence": 0.838,
      "loudness_start": -9.182,
      "loudness_max_time": 0.07204,
      "loudness_max": 0.752,
      "loudness_end": 0,
      "pitches": [
        0.259,
        1,
        0.346,
        0.058,
        0.031,
        0.036,
        0.041,
        0.022,
        0.047,
        0.148,
        0.038,
        0.095
      ],
      "timbre": [
        55.863,
        99.727,
        44.649,
        -65.068,
        10.109,
        1.31,
        12.376,
        8.764,
        8.581,
        5.817,
        -12.446,
        -19.21
      ]
    },
    {
      "start": 57.74177,
      "duration": 0.47651,
      "confidence": 0.058,
      "loudness_start": -4.717,
      "loudness_max_time": 0.03289,
      "loudness_max": -0.85,
      "loudness_end": 0,
      "pitches": [
        0.359,
        1,
        0.571,
        0.054,
        0.083,
        0.093,
        0.157,
        0.201,
        0.423,
        0.172,
        0.06,
        0.19
      ],
      "timbre": [
        57.16,
        101.799,
        24.031,
        -18.059,
        2.479,
        -28.124,
        24.058,
        -7.796,
        9.549,
        3.668,
        -0.625,
        -7.924
      ]
    },
    {
      "start": 58.21828,
      "duration": 0.26685,
      "confidence": 0.505,
      "loudness_start": -8.396,
      "loudness_max_time": 0.00922,
      "loudness_max": -0.466,
      "loudness_end": 0,
      "pitches": [
        0.694,
        1,
        0.526,
        0.201,
        0.257,
        0.105,
        0.063,
        0.134,
        0.073,
        0.176,
        0.044,
        0.282
      ],
      "timbre": [
        56.031,
        83.503,
        -6.827,
        12.68,
        -10.023,
        -56.489,
        3.595,
        5.294,
        -2.664,
        -12.506,
        -11.275,
        11.697
      ]
    },
    {
      "start": 58.48512,
      "duration": 0.24027,
      "confidence": 0.539,
      "loudness_start": -9.734,
      "loudness_max_time": 0.13589,
      "loudness_max": -3.347,
      "loudness_end": 0,
      "pitches": [
        0.273,
        1,
        0.29,
        0.212,
        0.372,
        0.318,
        0.073,
        0.051,
        0.054,
        0.086,
        0.041,
        0.211
      ],
      "timbre": [
        55.019,
        72.27,
        -8.272,
        -21.349,
        31.822,
        -49.442,
        22.858,
        -8.335,
        -12.849,
        6.308,
        -10.555,
        8.538
      ]
    },
    {
      "start": 58.7254,
      "duration": 0.26476,
      "confidence": 0.703,
      "loudness_start": -6.874,
      "loudness_max_time": 0.04814,
      "loudness_max": 0.197,
      "loudness_end": 0,
      "pitches": [
        0.643,
        0.979,
        1,
        0.61,
        0.855,
        0.331,
        0.254,
        0.433,
        0.365,
        0.223,
        0.15,
        0.548
      ],
      "timbre": [
        57.844,
        52.92,
        39.519,
        -8.663,
        28.538,
        -21.583,
        50.501,
        35.171,
        17.982,
        12.436,
        19.254,
        -2.966
      ]
    },
    {
      "start": 58.99016,
      "duration": 0.26685,
      "confidence": 0.572,
      "loudness_start": -6.062,
      "loudness_max_time": 0.06143,
      "loudness_max": 0.121,
      "loudness_end": 0,
      "pitches": [
        0.109,
        0.511,
        0.059,
        0.325,
        1,
        0.336,
        0.057,
        0.058,
        0.144,
        0.291,
        0.06,
        0.301
      ],
      "timbre": [
        58.396,
        98.451,
        51.771,
        -8.007,
        40.253,
        -26.369,
        28.196,
        14.944,
        19.103,
        19.727,
        3.263,
        5.246
      ]
    },
    {
      "start": 59.25701,
      "duration": 0.52834,
      "confidence": 0.114,
      "loudness_start": -2.561,
      "loudness_max_time": 0.01385,
      "loudness_max": 0.835,
      "loudness_end": 0,
      "pitches": [
        0.154,
        0.278,
        0.489,
        0.839,
        1,
        0.27,
        0.351,
        0.415,
        0.454,
        0.324,
        0.146,
        0.198
      ],
      "timbre": [
        57.861,
        61.323,
        -0.524,
        11.796,
        22.374,
        -57.377,
        8.837,
        -3.245,
        11.402,
        10.628,
        -10.89,
        1.154
      ]
    },
    {
      "start": 59.78535,
      "duration": 0.2151,
      "confidence": 0.319,
      "loudness_start": -6.603,
      "loudness_max_time": 0.00803,
      "loudness_max": -1.096,
      "loudness_end": 0,
      "pitches": [
        0.564,
        1,
        0.801,
        0.451,
        0.428,
        0.246,
        0.375,
        0.196,
        0.141,
        0.122,
        0.098,
        0.501
      ],
      "timbre": [
        55.637,
        71.72,
        -4.578,
        -8.38,
        -11.03,
        -72.269,
        26.508,
        5.006,
        -13.747,
        -2.142,
        0.435,
        7.147
      ]
    },
    {
      "start": 60.00045,
      "duration": 0.30236,
      "confidence": 0.67,
      "loudness_start": -8.06,
      "loudness_max_time": 0.05723,
      "loudness_max": -0.91,
      "loudness_end": 0,
      "pitches": [
        0.072,
        0.417,
        0.101,
        0.124,
        0.184,
        0.243,
        1,
        0.169,
        0.082,
        0.115,
        0.118,
        0.068
      ],
      "timbre": [
        56.513,
        86.404,
        62.674,
        -15.824,
        4.285,
        -1.334,
        58.637,
        16.894,
        -23.169,
        -3.652,
        -6.991,
        12.48
      ]
    },
    {
      "start": 60.30281,
      "duration": 0.27179,
      "confidence": 0.537,
      "loudness_start": -4.744,
      "loudness_max_time": 0.00811,
      "loudness_max": 0.61,
      "loudness_end": 0,
      "pitches": [
        0.611,
        1,
        0.918,
        0.338,
        0.371,
        0.239,
        0.66,
        0.257,
        0.115,
        0.143,
        0.105,
        0.433
      ],
      "timbre": [
        58.257,
        82.128,
        36.161,
        7.862,
        17.519,
        -53.866,
        35.255,
        29.137,
        4.103,
        -4.233,
        -4.099,
        -6.204
      ]
    },
    {
      "start": 60.5746,
      "duration": 0.23447,
      "confidence": 0.433,
      "loudness_start": -4.557,
      "loudness_max_time": 0.06329,
      "loudness_max": -0.386,
      "loudness_end": 0,
      "pitches": [
        0.451,
        1,
        0.18,
        0.137,
        0.142,
        0.066,
        0.093,
        0.038,
        0.11,
        0.111,
        0.062,
        0.071
      ],
      "timbre": [
        56.743,
        101.151,
        26.876,
        25.762,
        21.425,
        -27.134,
        34.103,
        -6.309,
        -16.251,
        2.417,
        -22.919,
        -11.858
      ]
    },
    {
      "start": 60.80907,
      "duration": 0.2595,
      "confidence": 0.767,
      "loudness_start": -6.576,
      "loudness_max_time": 0.06703,
      "loudness_max": 1.407,
      "loudness_end": 0,
      "pitches": [
        0.733,
        1,
        0.78,
        0.69,
        0.834,
        0.427,
        0.296,
        0.337,
        0.199,
        0.164,
        0.104,
        0.567
      ],
      "timbre": [
        57.606,
        85.563,
        20.203,
        11.664,
        21.78,
        -13.116,
        8.626,
        49.46,
        9.069,
        21.574,
        -20.218,
        -23.465
      ]
    },
    {
      "start": 61.06857,
      "duration": 0.51642,
      "confidence": 0.828,
      "loudness_start": -9.426,
      "loudness_max_time": 0.1035,
      "loudness_max": 0.577,
      "loudness_end": 0,
      "pitches": [
        0.202,
        0.825,
        1,
        0.714,
        0.333,
        0.179,
        0.224,
        0.279,
        0.293,
        0.315,
        0.205,
        0.08
      ],
      "timbre": [
        55.506,
        120.189,
        33.248,
        -48.195,
        44.77,
        2.58,
        13.376,
        -4.363,
        -13.412,
        20.786,
        -29.042,
        -2.081
      ]
    },
    {
      "start": 61.58499,
      "duration": 0.29029,
      "confidence": 0.839,
      "loudness_start": -9.051,
      "loudness_max_time": 0.0486,
      "loudness_max": 0.621,
      "loudness_end": 0,
      "pitches": [
        0.254,
        1,
        0.425,
        0.063,
        0.027,
        0.032,
        0.037,
        0.021,
        0.052,
        0.146,
        0.036,
        0.05
      ],
      "timbre": [
        57.419,
        103.696,
        39.432,
        -34.008,
        32.45,
        13.029,
        -6.293,
        10.146,
        23.985,
        11.963,
        -8.374,
        -30.715
      ]
    },
    {
      "start": 61.87528,
      "duration": 0.16245,
      "confidence": 0.37,
      "loudness_start": -4.338,
      "loudness_max_time": 0.04334,
      "loudness_max": 0.342,
      "loudness_end": 0,
      "pitches": [
        0.483,
        0.882,
        0.071,
        0.039,
        0.237,
        0.226,
        0.642,
        0.635,
        0.989,
        1,
        0.7,
        0.216
      ],
      "timbre": [
        58.016,
        56.908,
        29.102,
        6.213,
        10.941,
        -34.145,
        47.547,
        5.028,
        8.19,
        6.282,
        -12.407,
        8.074
      ]
    },
    {
      "start": 62.03773,
      "duration": 0.0927,
      "confidence": 0.063,
      "loudness_start": -4.873,
      "loudness_max_time": 0.0185,
      "loudness_max": -1.621,
      "loudness_end": 0,
      "pitches": [
        1,
        0.987,
        0.858,
        0.871,
        0.953,
        0.857,
        0.588,
        0.551,
        0.627,
        0.745,
        0.298,
        0.83
      ],
      "timbre": [
        56.946,
        99.274,
        81.758,
        20.511,
        45.234,
        -45.102,
        53.447,
        1.599,
        14.949,
        18.176,
        -6.414,
        18.813
      ]
    },
    {
      "start": 62.13043,
      "duration": 0.25669,
      "confidence": 0.241,
      "loudness_start": -4.063,
      "loudness_max_time": 0.03553,
      "loudness_max": -1.255,
      "loudness_end": 0,
      "pitches": [
        0.691,
        1,
        0.032,
        0.013,
        0.042,
        0.025,
        0.012,
        0.037,
        0.15,
        0.051,
        0.01,
        0.084
      ],
      "timbre": [
        56.822,
        80.079,
        54.898,
        29.119,
        38.965,
        -26.162,
        42.707,
        2.14,
        13.365,
        13.797,
        -28.676,
        11.053
      ]
    },
    {
      "start": 62.38712,
      "duration": 0.27184,
      "confidence": 0.563,
      "loudness_start": -8.598,
      "loudness_max_time": 0.01462,
      "loudness_max": -0.364,
      "loudness_end": 0,
      "pitches": [
        0.694,
        1,
        0.544,
        0.212,
        0.265,
        0.122,
        0.076,
        0.139,
        0.083,
        0.198,
        0.063,
        0.308
      ],
      "timbre": [
        56.185,
        95.817,
        -7.275,
        4.082,
        -5.12,
        -51.586,
        3.727,
        23.844,
        -0.317,
        -0.864,
        4.08,
        12.985
      ]
    },
    {
      "start": 62.65896,
      "duration": 0.11692,
      "confidence": 0.42,
      "loudness_start": -8.053,
      "loudness_max_time": 0.02396,
      "loudness_max": -3.573,
      "loudness_end": 0,
      "pitches": [
        0.481,
        0.907,
        0.779,
        0.771,
        1,
        0.953,
        0.633,
        0.635,
        0.188,
        0.202,
        0.105,
        0.142
      ],
      "timbre": [
        54.985,
        89.92,
        -13.629,
        -12.197,
        27.173,
        -57.169,
        24.476,
        -4.896,
        -8.867,
        8.953,
        -11.429,
        3.604
      ]
    },
    {
      "start": 62.77587,
      "duration": 0.13683,
      "confidence": 0.163,
      "loudness_start": -6.461,
      "loudness_max_time": 0.01935,
      "loudness_max": -3.145,
      "loudness_end": 0,
      "pitches": [
        0.636,
        0.929,
        0.795,
        0.786,
        1,
        0.879,
        0.643,
        0.65,
        0.237,
        0.239,
        0.179,
        0.126
      ],
      "timbre": [
        54.929,
        45.814,
        -1.797,
        -2.455,
        22.242,
        -52.354,
        21.209,
        -0.519,
        -1.362,
        12.905,
        -8.235,
        -22.614
      ]
    },
    {
      "start": 62.9127,
      "duration": 0.35551,
      "confidence": 0.601,
      "loudness_start": -7.057,
      "loudness_max_time": 0.0145,
      "loudness_max": 0.382,
      "loudness_end": 0,
      "pitches": [
        0.689,
        0.769,
        0.744,
        0.321,
        1,
        0.213,
        0.185,
        0.324,
        0.707,
        0.597,
        0.321,
        0.552
      ],
      "timbre": [
        58.101,
        56.914,
        36.319,
        -16.844,
        21.434,
        -64.903,
        34.302,
        28.068,
        11.604,
        16.622,
        5.483,
        11.375
      ]
    },
    {
      "start": 63.26821,
      "duration": 0.15274,
      "confidence": 0.015,
      "loudness_start": -2.975,
      "loudness_max_time": 0.04732,
      "loudness_max": -0.692,
      "loudness_end": 0,
      "pitches": [
        0.225,
        0.805,
        0.822,
        0.899,
        1,
        0.931,
        0.279,
        0.299,
        0.102,
        0.241,
        0.075,
        0.099
      ],
      "timbre": [
        58.068,
        71.641,
        20.577,
        -22.199,
        17.025,
        -37.656,
        1.282,
        32.34,
        5.096,
        1.373,
        -4.163,
        -0.536
      ]
    },
    {
      "start": 63.42095,
      "duration": 0.39905,
      "confidence": 0.233,
      "loudness_start": -3.048,
      "loudness_max_time": 0.02179,
      "loudness_max": 1.065,
      "loudness_end": 0,
      "pitches": [
        0.226,
        0.263,
        0.349,
        0.357,
        0.643,
        0.407,
        0.712,
        0.763,
        1,
        0.443,
        0.221,
        0.324
      ],
      "timbre": [
        58.263,
        85.124,
        -3.08,
        -1.672,
        19.3,
        -49.545,
        -0.142,
        2.193,
        4.283,
        19.485,
        -4.163,
        0.728
      ]
    },
    {
      "start": 63.82,
      "duration": 0.40639,
      "confidence": 0.052,
      "loudness_start": -4.622,
      "loudness_max_time": 0.02104,
      "loudness_max": -1.401,
      "loudness_end": 0,
      "pitches": [
        0.311,
        0.397,
        0.381,
        0.58,
        0.53,
        0.536,
        0.775,
        0.828,
        1,
        0.708,
        0.586,
        0.245
      ],
      "timbre": [
        54.525,
        52.383,
        -21.707,
        26.829,
        23.763,
        -60.137,
        11.678,
        -2,
        3.507,
        3.105,
        -14.33,
        -15.438
      ]
    },
    {
      "start": 64.22639,
      "duration": 0.24961,
      "confidence": 0.106,
      "loudness_start": -12.824,
      "loudness_max_time": 0.1496,
      "loudness_max": -8.804,
      "loudness_end": 0,
      "pitches": [
        0.073,
        0.171,
        0.032,
        0.025,
        0.056,
        0.219,
        1,
        0.165,
        0.062,
        0.094,
        0.082,
        0.031
      ],
      "timbre": [
        49.238,
        28.693,
        39.089,
        -5.309,
        9.872,
        -43.702,
        10.424,
        -12.515,
        -6.41,
        16.254,
        -8.158,
        -13.326
      ]
    },
    {
      "start": 64.47601,
      "duration": 0.24957,
      "confidence": 0.934,
      "loudness_start": -13.073,
      "loudness_max_time": 0.01421,
      "loudness_max": -0.212,
      "loudness_end": 0,
      "pitches": [
        0.432,
        0.982,
        1,
        0.476,
        0.544,
        0.257,
        0.7,
        0.392,
        0.166,
        0.138,
        0.13,
        0.522
      ],
      "timbre": [
        53.562,
        65.958,
        -32.474,
        60.527,
        -6.306,
        -60.689,
        6.068,
        -1.872,
        -9.108,
        -13.511,
        -9.751,
        6.767
      ]
    },
    {
      "start": 64.72558,
      "duration": 0.27256,
      "confidence": 0.203,
      "loudness_start": -15.559,
      "loudness_max_time": 0.16414,
      "loudness_max": -11.969,
      "loudness_end": 0,
      "pitches": [
        0.037,
        0.173,
        0.025,
        0.019,
        0.042,
        0.194,
        1,
        0.139,
        0.021,
        0.043,
        0.033,
        0.016
      ],
      "timbre": [
        46.205,
        41.569,
        36.091,
        1.804,
        4.415,
        -28.142,
        40.737,
        -15.322,
        -6.993,
        -15.233,
        2.473,
        -8.024
      ]
    },
    {
      "start": 64.99814,
      "duration": 0.26707,
      "confidence": 0.905,
      "loudness_start": -17.058,
      "loudness_max_time": 0.01437,
      "loudness_max": -3.725,
      "loudness_end": 0,
      "pitches": [
        0.595,
        1,
        0.896,
        0.523,
        0.639,
        0.31,
        0.765,
        0.464,
        0.192,
        0.114,
        0.09,
        0.738
      ],
      "timbre": [
        50.286,
        6.821,
        -43.913,
        39.383,
        -1.96,
        -63.295,
        5.155,
        -16.128,
        -5.538,
        0.972,
        -1.203,
        9.336
      ]
    },
    {
      "start": 65.26522,
      "duration": 0.09946,
      "confidence": 0.401,
      "loudness_start": -16.505,
      "loudness_max_time": 0.00766,
      "loudness_max": -12.627,
      "loudness_end": 0,
      "pitches": [
        0.147,
        0.461,
        0.371,
        0.327,
        0.569,
        0.64,
        1,
        0.628,
        0.368,
        0.519,
        0.138,
        0.018
      ],
      "timbre": [
        46.092,
        20.038,
        10.637,
        -0.507,
        60.398,
        -44.796,
        12.79,
        -29.741,
        -7.73,
        20.511,
        -21.103,
        21.317
      ]
    },
    {
      "start": 65.36467,
      "duration": 0.15592,
      "confidence": 0.598,
      "loudness_start": -16.174,
      "loudness_max_time": 0.05155,
      "loudness_max": -9.867,
      "loudness_end": 0,
      "pitches": [
        0.045,
        0.272,
        0.207,
        0.18,
        0.738,
        0.753,
        1,
        0.832,
        0.264,
        0.313,
        0.028,
        0.028
      ],
      "timbre": [
        46.938,
        45.01,
        25.589,
        -2.672,
        17.743,
        4.231,
        31.281,
        10.596,
        -1.093,
        -22.627,
        -13.508,
        -2.222
      ]
    },
    {
      "start": 65.52059,
      "duration": 0.26717,
      "confidence": 0.985,
      "loudness_start": -17.211,
      "loudness_max_time": 0.01227,
      "loudness_max": -0.688,
      "loudness_end": 0,
      "pitches": [
        0.439,
        1,
        0.943,
        0.389,
        0.476,
        0.247,
        0.397,
        0.378,
        0.137,
        0.151,
        0.107,
        0.5
      ],
      "timbre": [
        52.747,
        70.417,
        -37.747,
        60.287,
        -3.671,
        -65.23,
        10.139,
        1.46,
        -7.007,
        -16.554,
        -16.853,
        10.718
      ]
    },
    {
      "start": 65.78776,
      "duration": 0.12594,
      "confidence": 0.254,
      "loudness_start": -18.23,
      "loudness_max_time": 0.02394,
      "loudness_max": -13.948,
      "loudness_end": 0,
      "pitches": [
        0.061,
        0.45,
        0.361,
        0.305,
        0.785,
        0.785,
        1,
        0.835,
        0.407,
        0.496,
        0.094,
        0.011
      ],
      "timbre": [
        43.962,
        32.512,
        15.957,
        19.746,
        29.279,
        -56.184,
        44.004,
        -38.572,
        -12.4,
        21.155,
        -17.258,
        10.623
      ]
    },
    {
      "start": 65.9137,
      "duration": 0.12939,
      "confidence": 0.54,
      "loudness_start": -18.27,
      "loudness_max_time": 0.02905,
      "loudness_max": -12.694,
      "loudness_end": 0,
      "pitches": [
        0.067,
        0.452,
        0.365,
        0.319,
        0.845,
        0.846,
        1,
        0.898,
        0.395,
        0.441,
        0.05,
        0.006
      ],
      "timbre": [
        44.645,
        16.09,
        31.818,
        31.113,
        6.279,
        -42.137,
        67.421,
        -15.059,
        -21.426,
        -11.386,
        -1.893,
        -3.476
      ]
    },
    {
      "start": 66.04308,
      "duration": 0.26154,
      "confidence": 0.95,
      "loudness_start": -19.03,
      "loudness_max_time": 0.01183,
      "loudness_max": -4.101,
      "loudness_end": 0,
      "pitches": [
        0.564,
        1,
        0.882,
        0.501,
        0.606,
        0.29,
        0.503,
        0.436,
        0.174,
        0.083,
        0.073,
        0.724
      ],
      "timbre": [
        49.058,
        20.94,
        -65.823,
        49.832,
        -11.65,
        -72.879,
        -3.835,
        0.068,
        -1.542,
        -8.1,
        -11.614,
        14.75
      ]
    },
    {
      "start": 66.30463,
      "duration": 0.12848,
      "confidence": 0.655,
      "loudness_start": -21.51,
      "loudness_max_time": 0.01943,
      "loudness_max": -13.521,
      "loudness_end": 0,
      "pitches": [
        0.055,
        0.365,
        0.293,
        0.247,
        0.649,
        0.661,
        1,
        0.698,
        0.32,
        0.364,
        0.06,
        0.006
      ],
      "timbre": [
        44.02,
        16.308,
        -4.08,
        16.321,
        43.146,
        -35.718,
        4.932,
        -38.696,
        -32.804,
        18.571,
        -12.644,
        12.625
      ]
    },
    {
      "start": 66.43311,
      "duration": 0.12694,
      "confidence": 0.331,
      "loudness_start": -19.467,
      "loudness_max_time": 0.0338,
      "loudness_max": -14.667,
      "loudness_end": 0,
      "pitches": [
        0.067,
        0.439,
        0.355,
        0.312,
        0.813,
        0.816,
        1,
        0.855,
        0.391,
        0.409,
        0.056,
        0.007
      ],
      "timbre": [
        43.416,
        23.538,
        -15.641,
        -11.864,
        29.358,
        -31.564,
        18.054,
        -32.574,
        -7.448,
        4.388,
        -6.039,
        6.551
      ]
    },
    {
      "start": 66.56005,
      "duration": 0.26118,
      "confidence": 1,
      "loudness_start": -19.537,
      "loudness_max_time": 0.0166,
      "loudness_max": -0.523,
      "loudness_end": 0,
      "pitches": [
        0.42,
        0.991,
        1,
        0.474,
        0.514,
        0.28,
        0.384,
        0.425,
        0.143,
        0.132,
        0.122,
        0.533
      ],
      "timbre": [
        52.519,
        70.161,
        -43.313,
        74.509,
        -1.163,
        -40.29,
        14.706,
        13.697,
        -23.657,
        -11.932,
        -5.996,
        14.032
      ]
    },
    {
      "start": 66.82122,
      "duration": 0.14454,
      "confidence": 0.16,
      "loudness_start": -20.116,
      "loudness_max_time": 0.01439,
      "loudness_max": -15.718,
      "loudness_end": 0,
      "pitches": [
        0.041,
        0.383,
        0.263,
        0.218,
        0.761,
        0.769,
        1,
        0.835,
        0.319,
        0.365,
        0.047,
        0.008
      ],
      "timbre": [
        42.072,
        71.805,
        17.455,
        19.324,
        10.16,
        -37.168,
        60.528,
        -41.13,
        -20.918,
        4.874,
        -5.889,
        5.82
      ]
    },
    {
      "start": 66.96576,
      "duration": 0.09927,
      "confidence": 0.408,
      "loudness_start": -19.845,
      "loudness_max_time": 0.01347,
      "loudness_max": -15.358,
      "loudness_end": 0,
      "pitches": [
        0.189,
        0.596,
        0.542,
        0.486,
        0.86,
        0.882,
        1,
        0.921,
        0.558,
        0.609,
        0.192,
        0.015
      ],
      "timbre": [
        42.484,
        27.504,
        22.512,
        9.104,
        16.981,
        -64.265,
        79.856,
        -21.509,
        -0.804,
        17.136,
        -16.053,
        -4.193
      ]
    },
    {
      "start": 67.06503,
      "duration": 0.41206,
      "confidence": 1,
      "loudness_start": -19.452,
      "loudness_max_time": 0.03179,
      "loudness_max": -1.744,
      "loudness_end": 0,
      "pitches": [
        0.191,
        0.386,
        0.464,
        0.586,
        0.299,
        0.545,
        1,
        0.859,
        0.458,
        0.567,
        0.385,
        0.233
      ],
      "timbre": [
        51.602,
        59.827,
        9.354,
        7.62,
        -10.609,
        25.065,
        24.887,
        17.709,
        -6.083,
        11.792,
        39.253,
        -5.746
      ]
    },
    {
      "start": 67.4771,
      "duration": 0.12222,
      "confidence": 0.763,
      "loudness_start": -15.181,
      "loudness_max_time": 0.01134,
      "loudness_max": -5.643,
      "loudness_end": 0,
      "pitches": [
        0.392,
        0.404,
        0.579,
        1,
        0.437,
        0.329,
        0.508,
        0.338,
        0.509,
        0.752,
        0.611,
        0.158
      ],
      "timbre": [
        52.593,
        95.875,
        28.176,
        -15.611,
        -7.875,
        -41.373,
        2.978,
        12.918,
        -16.537,
        -10.992,
        5.869,
        -0.681
      ]
    },
    {
      "start": 67.59932,
      "duration": 0.51465,
      "confidence": 0.606,
      "loudness_start": -8.667,
      "loudness_max_time": 0.01859,
      "loudness_max": -1.069,
      "loudness_end": 0,
      "pitches": [
        0.137,
        0.177,
        0.23,
        0.263,
        0.338,
        0.345,
        0.612,
        0.565,
        1,
        0.246,
        0.194,
        0.182
      ],
      "timbre": [
        53.419,
        62.91,
        -26.887,
        33.523,
        -14.004,
        -54.924,
        -2.113,
        4.767,
        -7.782,
        14.411,
        6.936,
        10.582
      ]
    },
    {
      "start": 68.11397,
      "duration": 0.25111,
      "confidence": 0.499,
      "loudness_start": -15.628,
      "loudness_max_time": 0.02522,
      "loudness_max": -9.399,
      "loudness_end": 0,
      "pitches": [
        0.747,
        0.661,
        0.376,
        0.519,
        0.597,
        0.443,
        0.448,
        0.47,
        0.77,
        1,
        0.512,
        0.643
      ],
      "timbre": [
        44.17,
        90.146,
        12.777,
        87.866,
        21.546,
        -22.591,
        24.61,
        31.428,
        10.911,
        -32.875,
        -14.142,
        -9.025
      ]
    },
    {
      "start": 68.36508,
      "duration": 0.28463,
      "confidence": 1,
      "loudness_start": -26.222,
      "loudness_max_time": 0.09226,
      "loudness_max": -6.531,
      "loudness_end": 0,
      "pitches": [
        0.065,
        0.107,
        0.144,
        0.223,
        1,
        0.082,
        0.039,
        0.039,
        0.059,
        0.132,
        0.075,
        0.092
      ],
      "timbre": [
        46.079,
        127.836,
        32.189,
        25.582,
        76.135,
        35.486,
        -15.904,
        -51.488,
        4.525,
        23.348,
        -47.543,
        18.607
      ]
    },
    {
      "start": 68.64971,
      "duration": 0.51628,
      "confidence": 0.916,
      "loudness_start": -21.248,
      "loudness_max_time": 0.15198,
      "loudness_max": -9.47,
      "loudness_end": 0,
      "pitches": [
        0.018,
        0.027,
        0.03,
        0.056,
        1,
        0.053,
        0.018,
        0.013,
        0.064,
        0.046,
        0.022,
        0.108
      ],
      "timbre": [
        48.047,
        56.326,
        102.083,
        0.431,
        67.296,
        -10.461,
        -6.279,
        -22.118,
        -30.756,
        17.897,
        -3.154,
        3.13
      ]
    },
    {
      "start": 69.16599,
      "duration": 0.18036,
      "confidence": 0.696,
      "loudness_start": -14.966,
      "loudness_max_time": 0.0308,
      "loudness_max": -7.456,
      "loudness_end": 0,
      "pitches": [
        0.134,
        0.241,
        0.248,
        0.607,
        1,
        0.098,
        0.128,
        0.11,
        0.2,
        0.194,
        0.129,
        0.326
      ],
      "timbre": [
        48.486,
        38.479,
        64.449,
        76.013,
        86.023,
        -16.457,
        -32.675,
        23.929,
        0.024,
        -28.997,
        -32.622,
        -20.454
      ]
    },
    {
      "start": 69.34635,
      "duration": 0.21569,
      "confidence": 0.736,
      "loudness_start": -19.491,
      "loudness_max_time": 0.03265,
      "loudness_max": -11.121,
      "loudness_end": 0,
      "pitches": [
        0.276,
        1,
        0.582,
        0.063,
        0.063,
        0.033,
        0.022,
        0.013,
        0.055,
        0.149,
        0.039,
        0.082
      ],
      "timbre": [
        44.776,
        18.57,
        3.53,
        29.222,
        67.147,
        -13.176,
        -25.97,
        14.632,
        -21.74,
        23.622,
        -5.02,
        2.684
      ]
    },
    {
      "start": 69.56204,
      "duration": 0.26041,
      "confidence": 0.942,
      "loudness_start": -20.11,
      "loudness_max_time": 0.03579,
      "loudness_max": -8.283,
      "loudness_end": 0,
      "pitches": [
        0.309,
        1,
        0.084,
        0.036,
        0.031,
        0.031,
        0.03,
        0.037,
        0.071,
        0.09,
        0.051,
        0.068
      ],
      "timbre": [
        48.246,
        68.912,
        28.004,
        19.563,
        60.932,
        -31.469,
        -47.622,
        43.341,
        4.081,
        25.082,
        3.216,
        0.927
      ]
    },
    {
      "start": 69.82245,
      "duration": 0.26118,
      "confidence": 0.472,
      "loudness_start": -17.841,
      "loudness_max_time": 0.04644,
      "loudness_max": -10.506,
      "loudness_end": 0,
      "pitches": [
        0.088,
        0.925,
        1,
        0.249,
        0.052,
        0.026,
        0.031,
        0.025,
        0.063,
        0.111,
        0.041,
        0.065
      ],
      "timbre": [
        46.609,
        86.348,
        27.195,
        45.98,
        61.699,
        -43.411,
        -17.494,
        -41.741,
        -60.284,
        36.795,
        -20.503,
        14.757
      ]
    },
    {
      "start": 70.08363,
      "duration": 0.10005,
      "confidence": 0.267,
      "loudness_start": -19.188,
      "loudness_max_time": 0.05219,
      "loudness_max": -15.443,
      "loudness_end": 0,
      "pitches": [
        1,
        0.317,
        0.154,
        0.054,
        0.053,
        0.022,
        0.027,
        0.035,
        0.026,
        0.104,
        0.108,
        0.515
      ],
      "timbre": [
        42.974,
        29.29,
        -45.601,
        -45.759,
        75.664,
        -27.446,
        -5.164,
        -46.641,
        -24.032,
        -1.775,
        -6.532,
        9.617
      ]
    },
    {
      "start": 70.18367,
      "duration": 0.29982,
      "confidence": 0.952,
      "loudness_start": -17.298,
      "loudness_max_time": 0.05582,
      "loudness_max": -4.538,
      "loudness_end": 0,
      "pitches": [
        0.068,
        0.097,
        0.107,
        0.115,
        1,
        0.081,
        0.043,
        0.048,
        0.139,
        0.055,
        0.067,
        0.456
      ],
      "timbre": [
        49.196,
        36.627,
        48.458,
        -36.412,
        62.452,
        37.073,
        -11.649,
        18.923,
        1.089,
        -33.296,
        -12.212,
        17.452
      ]
    },
    {
      "start": 70.48349,
      "duration": 0.23234,
      "confidence": 0.28,
      "loudness_start": -12.895,
      "loudness_max_time": 0.07932,
      "loudness_max": -9.421,
      "loudness_end": 0,
      "pitches": [
        0.039,
        0.13,
        1,
        0.173,
        0.08,
        0.026,
        0.039,
        0.026,
        0.052,
        0.731,
        0.056,
        0.035
      ],
      "timbre": [
        47.945,
        40.016,
        76.879,
        16.721,
        89.513,
        -29.083,
        6.748,
        47.521,
        -9.701,
        16.357,
        -5.056,
        36.882
      ]
    },
    {
      "start": 70.71583,
      "duration": 0.23841,
      "confidence": 0.953,
      "loudness_start": -19.348,
      "loudness_max_time": 0.06619,
      "loudness_max": -6.175,
      "loudness_end": 0,
      "pitches": [
        0.27,
        1,
        0.206,
        0.113,
        0.086,
        0.08,
        0.049,
        0.051,
        0.22,
        0.101,
        0.067,
        0.125
      ],
      "timbre": [
        47.412,
        108.434,
        106.802,
        0.653,
        85.212,
        39.344,
        -8.976,
        14.103,
        -18.264,
        -2.184,
        -34.069,
        6.417
      ]
    },
    {
      "start": 70.95424,
      "duration": 0.19161,
      "confidence": 0.423,
      "loudness_start": -18.761,
      "loudness_max_time": 0.03434,
      "loudness_max": -12.206,
      "loudness_end": 0,
      "pitches": [
        0.828,
        1,
        0.87,
        0.467,
        0.191,
        0.086,
        0.113,
        0.095,
        0.197,
        0.441,
        0.488,
        0.87
      ],
      "timbre": [
        41.96,
        51.569,
        34.185,
        83.337,
        40.064,
        -35.101,
        -9.782,
        19.768,
        -48.727,
        -0.402,
        15.129,
        6.447
      ]
    },
    {
      "start": 71.14585,
      "duration": 0.29605,
      "confidence": 1,
      "loudness_start": -23.48,
      "loudness_max_time": 0.06092,
      "loudness_max": -7.801,
      "loudness_end": 0,
      "pitches": [
        0.093,
        0.175,
        0.19,
        0.311,
        1,
        0.2,
        0.276,
        0.137,
        0.166,
        0.118,
        0.107,
        0.183
      ],
      "timbre": [
        44.563,
        131.455,
        113.41,
        -49.511,
        89.451,
        35.611,
        -20.707,
        13.702,
        -8.898,
        22.807,
        -36.366,
        14.541
      ]
    },
    {
      "start": 71.4419,
      "duration": 0.20322,
      "confidence": 0.77,
      "loudness_start": -19.549,
      "loudness_max_time": 0.12056,
      "loudness_max": -9.127,
      "loudness_end": 0,
      "pitches": [
        0.049,
        0.381,
        1,
        0.184,
        0.062,
        0.036,
        0.072,
        0.02,
        0.036,
        0.176,
        0.031,
        0.025
      ],
      "timbre": [
        46.029,
        112.077,
        45.395,
        -61.039,
        62.446,
        -1.317,
        -6.125,
        6.405,
        -48.636,
        23.922,
        -4.506,
        19.525
      ]
    },
    {
      "start": 71.64512,
      "duration": 0.14567,
      "confidence": 0.251,
      "loudness_start": -16.344,
      "loudness_max_time": 0.03683,
      "loudness_max": -10.787,
      "loudness_end": 0,
      "pitches": [
        0.713,
        0.555,
        0.371,
        0.237,
        0.267,
        0.202,
        0.308,
        0.251,
        0.194,
        0.282,
        0.33,
        1
      ],
      "timbre": [
        45.755,
        87.83,
        35.588,
        54.816,
        40.077,
        -24.82,
        3.891,
        10.352,
        -35.221,
        -30.18,
        -17.439,
        22.175
      ]
    },
    {
      "start": 71.79079,
      "duration": 0.51039,
      "confidence": 0.912,
      "loudness_start": -21.148,
      "loudness_max_time": 0.05539,
      "loudness_max": -8.73,
      "loudness_end": 0,
      "pitches": [
        0.204,
        0.244,
        0.119,
        0.133,
        0.32,
        0.216,
        0.143,
        0.162,
        0.222,
        0.564,
        1,
        0.369
      ],
      "timbre": [
        44.615,
        84.683,
        17.675,
        15.579,
        60.37,
        22.798,
        -11.282,
        6.256,
        -20.272,
        -22.754,
        -17.49,
        11.471
      ]
    },
    {
      "start": 72.30118,
      "duration": 0.34853,
      "confidence": 1,
      "loudness_start": -27.935,
      "loudness_max_time": 0.01346,
      "loudness_max": -4.375,
      "loudness_end": 0,
      "pitches": [
        1,
        0.635,
        0.319,
        0.176,
        0.208,
        0.311,
        0.391,
        0.809,
        0.759,
        0.948,
        0.638,
        0.971
      ],
      "timbre": [
        49.403,
        29.934,
        -39.893,
        53.867,
        1.428,
        -65.477,
        23.367,
        22.571,
        -7.918,
        8.982,
        -8.147,
        34.796
      ]
    },
    {
      "start": 72.64971,
      "duration": 0.12159,
      "confidence": 0.267,
      "loudness_start": -21.664,
      "loudness_max_time": 0.07966,
      "loudness_max": -17.719,
      "loudness_end": 0,
      "pitches": [
        1,
        0.709,
        0.326,
        0.382,
        0.501,
        0.482,
        0.411,
        0.378,
        0.604,
        0.869,
        0.912,
        0.339
      ],
      "timbre": [
        40.532,
        21.827,
        3.98,
        -47.333,
        28.206,
        -51.654,
        42.599,
        32.707,
        25.081,
        19.323,
        -16.638,
        13.342
      ]
    },
    {
      "start": 72.77129,
      "duration": 0.4517,
      "confidence": 0.97,
      "loudness_start": -20.84,
      "loudness_max_time": 0.07931,
      "loudness_max": -5.354,
      "loudness_end": 0,
      "pitches": [
        0.465,
        0.304,
        0.221,
        0.175,
        0.189,
        0.28,
        0.532,
        1,
        0.938,
        0.7,
        0.48,
        0.605
      ],
      "timbre": [
        45.219,
        84.936,
        -24.293,
        14.605,
        24.215,
        19.125,
        33.744,
        -40.824,
        28.001,
        26.729,
        -67.327,
        19.29
      ]
    },
    {
      "start": 73.22299,
      "duration": 0.11873,
      "confidence": 0.322,
      "loudness_start": -24.026,
      "loudness_max_time": 0.02783,
      "loudness_max": -17.924,
      "loudness_end": 0,
      "pitches": [
        0.702,
        0.549,
        0.24,
        0.142,
        0.459,
        0.508,
        0.631,
        0.69,
        0.527,
        1,
        0.755,
        0.476
      ],
      "timbre": [
        39.315,
        24.174,
        -17.064,
        1.961,
        28.364,
        -53.895,
        34.656,
        -15.244,
        29.417,
        3.826,
        -3.681,
        10.594
      ]
    },
    {
      "start": 73.34172,
      "duration": 0.38172,
      "confidence": 1,
      "loudness_start": -23.513,
      "loudness_max_time": 0.04073,
      "loudness_max": -3.585,
      "loudness_end": 0,
      "pitches": [
        0.372,
        0.22,
        0.206,
        0.113,
        0.105,
        0.282,
        0.563,
        1,
        0.772,
        0.552,
        0.389,
        0.417
      ],
      "timbre": [
        47.89,
        25.258,
        -67.251,
        55.54,
        17.931,
        18.43,
        -1.377,
        17.793,
        32.28,
        4.925,
        13.527,
        -3.234
      ]
    },
    {
      "start": 73.72345,
      "duration": 0.28209,
      "confidence": 1,
      "loudness_start": -22.519,
      "loudness_max_time": 0.02926,
      "loudness_max": -3.261,
      "loudness_end": 0,
      "pitches": [
        0.982,
        0.599,
        0.358,
        0.131,
        0.344,
        0.214,
        0.215,
        0.441,
        0.29,
        0.34,
        0.224,
        1
      ],
      "timbre": [
        48.8,
        46.068,
        -67.757,
        30.593,
        18.268,
        17.7,
        10.524,
        23.192,
        14.502,
        18.49,
        21.09,
        -3.984
      ]
    },
    {
      "start": 74.00553,
      "duration": 0.37379,
      "confidence": 0.849,
      "loudness_start": -20.079,
      "loudness_max_time": 0.07799,
      "loudness_max": -7.138,
      "loudness_end": 0,
      "pitches": [
        0.198,
        0.268,
        0.226,
        0.367,
        0.473,
        1,
        0.924,
        0.409,
        0.514,
        0.412,
        0.462,
        0.633
      ],
      "timbre": [
        48.14,
        24.635,
        15.757,
        0.984,
        18.279,
        -29.744,
        26.262,
        -3.417,
        -8.438,
        22.916,
        -47.651,
        7.292
      ]
    },
    {
      "start": 74.37932,
      "duration": 0.41429,
      "confidence": 0.949,
      "loudness_start": -19.504,
      "loudness_max_time": 0.09429,
      "loudness_max": -6.617,
      "loudness_end": 0,
      "pitches": [
        0.343,
        0.241,
        0.168,
        0.097,
        0.129,
        0.241,
        0.532,
        1,
        0.696,
        0.549,
        0.35,
        0.408
      ],
      "timbre": [
        47.113,
        20.329,
        -53.773,
        33.618,
        11.357,
        9.849,
        15.375,
        -10.497,
        10.05,
        -2.621,
        -1.197,
        4.064
      ]
    },
    {
      "start": 74.79361,
      "duration": 0.09016,
      "confidence": 0.368,
      "loudness_start": -22.285,
      "loudness_max_time": 0.01204,
      "loudness_max": -17.652,
      "loudness_end": 0,
      "pitches": [
        0.176,
        0.305,
        0.225,
        0.207,
        0.749,
        0.774,
        1,
        0.995,
        0.39,
        0.398,
        0.366,
        0.079
      ],
      "timbre": [
        39.37,
        29.056,
        -22.181,
        10.53,
        13.123,
        -55.504,
        26.261,
        -15.686,
        6.307,
        -3.303,
        -5.214,
        20.86
      ]
    },
    {
      "start": 74.88376,
      "duration": 0.16476,
      "confidence": 1,
      "loudness_start": -23.53,
      "loudness_max_time": 0.08793,
      "loudness_max": -6.392,
      "loudness_end": 0,
      "pitches": [
        1,
        0.868,
        0.19,
        0.042,
        0.116,
        0.145,
        0.362,
        0.353,
        0.576,
        0.601,
        0.855,
        0.153
      ],
      "timbre": [
        46.562,
        20.312,
        -2.861,
        -74.935,
        8.205,
        57.137,
        31.354,
        28.486,
        21.238,
        -8.461,
        -12.335,
        16.125
      ]
    },
    {
      "start": 75.04853,
      "duration": 0.138,
      "confidence": 0.112,
      "loudness_start": -15.627,
      "loudness_max_time": 0.03575,
      "loudness_max": -11.967,
      "loudness_end": 0,
      "pitches": [
        0.525,
        0.964,
        0.209,
        0.196,
        0.797,
        0.79,
        0.961,
        1,
        0.351,
        0.485,
        0.249,
        0.081
      ],
      "timbre": [
        44.845,
        31.8,
        -53.031,
        3.487,
        2.312,
        -21.582,
        -3.164,
        6.783,
        44.173,
        2.906,
        -20.659,
        19.317
      ]
    },
    {
      "start": 75.18653,
      "duration": 0.24934,
      "confidence": 0.653,
      "loudness_start": -22.784,
      "loudness_max_time": 0.13895,
      "loudness_max": -13.098,
      "loudness_end": 0,
      "pitches": [
        0.272,
        0.375,
        0.195,
        0.197,
        0.396,
        0.503,
        0.951,
        1,
        0.62,
        0.469,
        0.256,
        0.398
      ],
      "timbre": [
        42.293,
        54.196,
        11.961,
        -34.135,
        -0.388,
        -4.164,
        55.518,
        14.791,
        -9.618,
        -25.147,
        -23.611,
        22.443
      ]
    },
    {
      "start": 75.43587,
      "duration": 0.3824,
      "confidence": 1,
      "loudness_start": -23.99,
      "loudness_max_time": 0.02344,
      "loudness_max": -6.631,
      "loudness_end": 0,
      "pitches": [
        0.366,
        0.241,
        0.219,
        0.127,
        0.127,
        0.277,
        0.557,
        1,
        0.698,
        0.515,
        0.42,
        0.397
      ],
      "timbre": [
        48.533,
        5.628,
        -31.999,
        50.333,
        20.69,
        -37.271,
        48.921,
        25.815,
        4.047,
        13.684,
        -13.528,
        23.561
      ]
    },
    {
      "start": 75.81828,
      "duration": 0.27356,
      "confidence": 0.991,
      "loudness_start": -18.788,
      "loudness_max_time": 0.0207,
      "loudness_max": -4.343,
      "loudness_end": 0,
      "pitches": [
        0.968,
        0.567,
        0.319,
        0.09,
        0.25,
        0.129,
        0.217,
        0.413,
        0.341,
        0.361,
        0.183,
        1
      ],
      "timbre": [
        49.767,
        46.368,
        -63.248,
        17.018,
        15.112,
        -20.952,
        10.621,
        7.135,
        -2.043,
        23.317,
        16.643,
        13.906
      ]
    },
    {
      "start": 76.09184,
      "duration": 0.37728,
      "confidence": 0.827,
      "loudness_start": -19.926,
      "loudness_max_time": 0.1621,
      "loudness_max": -7.007,
      "loudness_end": 0,
      "pitches": [
        0.155,
        0.278,
        0.236,
        0.229,
        0.415,
        1,
        0.808,
        0.272,
        0.342,
        0.355,
        0.375,
        0.389
      ],
      "timbre": [
        50.155,
        45.759,
        22.029,
        -27.687,
        19.928,
        -33.074,
        35.747,
        2.675,
        -7.165,
        21.965,
        -20.667,
        -2.574
      ]
    },
    {
      "start": 76.46912,
      "duration": 0.278,
      "confidence": 0.643,
      "loudness_start": -16.45,
      "loudness_max_time": 0.06236,
      "loudness_max": -8.855,
      "loudness_end": 0,
      "pitches": [
        0.729,
        0.527,
        0.243,
        0.44,
        0.307,
        0.462,
        1,
        0.739,
        0.63,
        0.465,
        0.351,
        0.724
      ],
      "timbre": [
        46.741,
        64.991,
        16.142,
        54.053,
        15.229,
        -9.916,
        50.453,
        3.625,
        2.22,
        -0.984,
        -26.416,
        0.662
      ]
    },
    {
      "start": 76.74712,
      "duration": 0.25025,
      "confidence": 1,
      "loudness_start": -23.332,
      "loudness_max_time": 0.05964,
      "loudness_max": -8.323,
      "loudness_end": 0,
      "pitches": [
        0.356,
        0.701,
        0.807,
        1,
        0.813,
        0.587,
        0.5,
        0.429,
        0.542,
        0.472,
        0.466,
        0.49
      ],
      "timbre": [
        48.647,
        64.432,
        117.904,
        8.946,
        45.604,
        44.418,
        85.943,
        2.442,
        -10.741,
        1.496,
        24.212,
        14.011
      ]
    },
    {
      "start": 76.99737,
      "duration": 0.28476,
      "confidence": 0.486,
      "loudness_start": -14.944,
      "loudness_max_time": 0.06128,
      "loudness_max": -8.147,
      "loudness_end": 0,
      "pitches": [
        0.414,
        0.294,
        0.148,
        0.307,
        1,
        0.443,
        0.524,
        0.473,
        0.381,
        0.272,
        0.239,
        0.638
      ],
      "timbre": [
        49.41,
        3.443,
        38.375,
        10.798,
        48.885,
        -35.578,
        17.754,
        -15.018,
        -20.489,
        7.641,
        -10.303,
        10.378
      ]
    },
    {
      "start": 77.28213,
      "duration": 0.23782,
      "confidence": 0.458,
      "loudness_start": -14.192,
      "loudness_max_time": 0.08156,
      "loudness_max": -9.176,
      "loudness_end": 0,
      "pitches": [
        0.285,
        0.26,
        0.21,
        0.645,
        1,
        0.336,
        0.199,
        0.136,
        0.14,
        0.356,
        0.3,
        0.318
      ],
      "timbre": [
        46.824,
        35.117,
        30.485,
        35.315,
        54.373,
        -12.922,
        -26.18,
        27.891,
        25.288,
        -19.019,
        -40.72,
        0.425
      ]
    },
    {
      "start": 77.51995,
      "duration": 0.38825,
      "confidence": 1,
      "loudness_start": -22.906,
      "loudness_max_time": 0.05209,
      "loudness_max": -6.722,
      "loudness_end": 0,
      "pitches": [
        0.356,
        0.358,
        1,
        0.998,
        0.974,
        0.461,
        0.424,
        0.558,
        0.448,
        0.549,
        0.476,
        0.769
      ],
      "timbre": [
        49.264,
        28.916,
        51.899,
        42.24,
        44.189,
        -4.271,
        53.624,
        -14.655,
        -19.611,
        25.619,
        -10.503,
        11.077
      ]
    },
    {
      "start": 77.90821,
      "duration": 0.26186,
      "confidence": 0.717,
      "loudness_start": -16.315,
      "loudness_max_time": 0.05691,
      "loudness_max": -8.541,
      "loudness_end": 0,
      "pitches": [
        0.509,
        1,
        0.187,
        0.221,
        0.155,
        0.281,
        0.512,
        0.395,
        0.556,
        0.28,
        0.193,
        0.347
      ],
      "timbre": [
        48.434,
        27.914,
        11.688,
        35.5,
        34.691,
        -19.807,
        12.784,
        19.145,
        -19.514,
        1.807,
        -31.488,
        6.345
      ]
    },
    {
      "start": 78.17007,
      "duration": 0.38372,
      "confidence": 0.861,
      "loudness_start": -20.627,
      "loudness_max_time": 0.08674,
      "loudness_max": -8.476,
      "loudness_end": 0,
      "pitches": [
        0.228,
        0.391,
        1,
        0.329,
        0.184,
        0.246,
        0.26,
        0.32,
        0.277,
        0.324,
        0.227,
        0.292
      ],
      "timbre": [
        47.985,
        42.505,
        28.087,
        9.191,
        18.888,
        -19.397,
        4.968,
        -8.363,
        -18.444,
        19.892,
        -22.487,
        3.847
      ]
    },
    {
      "start": 78.55379,
      "duration": 0.51025,
      "confidence": 0.932,
      "loudness_start": -16.162,
      "loudness_max_time": 0.05146,
      "loudness_max": -5.211,
      "loudness_end": 0,
      "pitches": [
        0.3,
        0.305,
        0.775,
        0.626,
        1,
        0.293,
        0.233,
        0.344,
        0.31,
        0.408,
        0.268,
        0.539
      ],
      "timbre": [
        51.478,
        59.942,
        37.234,
        -8.143,
        51.228,
        4.434,
        8.032,
        30.984,
        1.269,
        -8.768,
        17.218,
        17.288
      ]
    },
    {
      "start": 79.06404,
      "duration": 0.30163,
      "confidence": 0.961,
      "loudness_start": -22.952,
      "loudness_max_time": 0.07866,
      "loudness_max": -9.019,
      "loudness_end": 0,
      "pitches": [
        0.557,
        0.73,
        1,
        0.314,
        0.192,
        0.304,
        0.582,
        0.438,
        0.397,
        0.315,
        0.208,
        0.442
      ],
      "timbre": [
        45.898,
        37.109,
        32.348,
        3.551,
        25.586,
        27.71,
        32.931,
        -4.164,
        -8.606,
        -1.622,
        -0.914,
        10.459
      ]
    },
    {
      "start": 79.36567,
      "duration": 0.12726,
      "confidence": 0.002,
      "loudness_start": -20.037,
      "loudness_max_time": 0.07448,
      "loudness_max": -16.259,
      "loudness_end": 0,
      "pitches": [
        0.978,
        0.702,
        0.332,
        0.204,
        0.266,
        0.16,
        0.285,
        0.25,
        0.627,
        0.689,
        1,
        0.168
      ],
      "timbre": [
        41.583,
        110.07,
        9.792,
        -14.507,
        58.203,
        -38.596,
        59.768,
        9.02,
        -11.062,
        -34.093,
        -14.797,
        6.645
      ]
    },
    {
      "start": 79.49293,
      "duration": 0.25596,
      "confidence": 0.96,
      "loudness_start": -22.05,
      "loudness_max_time": 0.14558,
      "loudness_max": -5.44,
      "loudness_end": 0,
      "pitches": [
        0.487,
        0.417,
        0.448,
        0.835,
        1,
        0.306,
        0.337,
        0.288,
        0.289,
        0.404,
        0.377,
        0.66
      ],
      "timbre": [
        47.471,
        82.488,
        46.529,
        -93.192,
        51.306,
        14.97,
        -2.173,
        5.103,
        -10.033,
        -10.75,
        -17.297,
        17.903
      ]
    },
    {
      "start": 79.74889,
      "duration": 0.25546,
      "confidence": 0.604,
      "loudness_start": -12.726,
      "loudness_max_time": 0.04536,
      "loudness_max": -5.94,
      "loudness_end": 0,
      "pitches": [
        0.275,
        0.372,
        1,
        0.287,
        0.27,
        0.125,
        0.126,
        0.106,
        0.098,
        0.529,
        0.181,
        0.194
      ],
      "timbre": [
        51.131,
        72.127,
        53.079,
        -14.607,
        33.272,
        -0.849,
        -6.023,
        -23.828,
        -5.373,
        -1.194,
        -1.405,
        -13.962
      ]
    },
    {
      "start": 80.00435,
      "duration": 0.13941,
      "confidence": 0.094,
      "loudness_start": -10.404,
      "loudness_max_time": 0.02499,
      "loudness_max": -8.025,
      "loudness_end": 0,
      "pitches": [
        1,
        0.973,
        0.319,
        0.181,
        0.163,
        0.219,
        0.234,
        0.199,
        0.239,
        0.229,
        0.383,
        0.525
      ],
      "timbre": [
        48.092,
        15.672,
        3.002,
        62.228,
        14.753,
        -45.646,
        3.043,
        -11.528,
        -11.517,
        -14.23,
        -24.544,
        9.434
      ]
    },
    {
      "start": 80.14376,
      "duration": 0.50413,
      "confidence": 0.685,
      "loudness_start": -18.432,
      "loudness_max_time": 0.14481,
      "loudness_max": -8.734,
      "loudness_end": 0,
      "pitches": [
        0.672,
        1,
        0.281,
        0.277,
        0.23,
        0.332,
        0.545,
        0.451,
        0.362,
        0.409,
        0.32,
        0.539
      ],
      "timbre": [
        46.53,
        31.744,
        7.881,
        -9.203,
        25.169,
        -4.387,
        -12.905,
        -30.961,
        5.108,
        11.86,
        -43.341,
        3.5
      ]
    },
    {
      "start": 80.64789,
      "duration": 0.38218,
      "confidence": 1,
      "loudness_start": -21.457,
      "loudness_max_time": 0.03,
      "loudness_max": -4.957,
      "loudness_end": 0,
      "pitches": [
        0.361,
        0.233,
        0.186,
        0.127,
        0.134,
        0.228,
        0.527,
        1,
        0.661,
        0.549,
        0.323,
        0.425
      ],
      "timbre": [
        49.384,
        13.253,
        -27.886,
        59.643,
        20.909,
        -29.029,
        38.208,
        13.712,
        19.925,
        30.127,
        -15.55,
        12.589
      ]
    },
    {
      "start": 81.03007,
      "duration": 0.10635,
      "confidence": 0.514,
      "loudness_start": -23.283,
      "loudness_max_time": 0.0448,
      "loudness_max": -16.795,
      "loudness_end": 0,
      "pitches": [
        0.596,
        0.521,
        0.288,
        0.357,
        0.564,
        0.558,
        0.6,
        0.585,
        0.618,
        1,
        0.806,
        0.211
      ],
      "timbre": [
        40.429,
        15.931,
        -4.834,
        -8.798,
        23.76,
        -22.787,
        39.368,
        14.348,
        27.663,
        -26.209,
        -9.375,
        -4.319
      ]
    },
    {
      "start": 81.13642,
      "duration": 0.44218,
      "confidence": 1,
      "loudness_start": -22.507,
      "loudness_max_time": 0.07206,
      "loudness_max": -6.49,
      "loudness_end": 0,
      "pitches": [
        0.404,
        0.26,
        0.197,
        0.141,
        0.17,
        0.267,
        0.535,
        1,
        0.869,
        0.613,
        0.403,
        0.52
      ],
      "timbre": [
        44.652,
        17.435,
        -12.731,
        -25.462,
        25.713,
        45.748,
        31.33,
        12.471,
        27.802,
        2.931,
        -38.418,
        3.524
      ]
    },
    {
      "start": 81.57859,
      "duration": 0.08091,
      "confidence": 0.379,
      "loudness_start": -21.44,
      "loudness_max_time": 0.02063,
      "loudness_max": -15.995,
      "loudness_end": 0,
      "pitches": [
        0.217,
        0.322,
        0.29,
        0.273,
        0.85,
        0.878,
        1,
        0.995,
        0.365,
        0.414,
        0.364,
        0.064
      ],
      "timbre": [
        40.734,
        32.487,
        -3.985,
        5.375,
        15.695,
        -67.828,
        23.981,
        -4.268,
        24.417,
        7.568,
        2.118,
        3.16
      ]
    },
    {
      "start": 81.6595,
      "duration": 0.37247,
      "confidence": 1,
      "loudness_start": -21.255,
      "loudness_max_time": 0.07874,
      "loudness_max": -5.893,
      "loudness_end": 0,
      "pitches": [
        0.48,
        0.272,
        0.199,
        0.137,
        0.134,
        0.303,
        0.541,
        0.986,
        1,
        0.807,
        0.4,
        0.582
      ],
      "timbre": [
        44.91,
        28.095,
        -28.834,
        -36.848,
        37.865,
        35.44,
        30.371,
        -16.756,
        16.463,
        13.888,
        -39.872,
        6.744
      ]
    },
    {
      "start": 82.03197,
      "duration": 0.31587,
      "confidence": 0.819,
      "loudness_start": -17.04,
      "loudness_max_time": 0.08746,
      "loudness_max": -6.567,
      "loudness_end": 0,
      "pitches": [
        0.982,
        0.714,
        0.439,
        0.206,
        0.384,
        0.348,
        0.295,
        0.566,
        0.701,
        0.41,
        0.253,
        1
      ],
      "timbre": [
        46.834,
        63.424,
        -29.564,
        -59.16,
        49.46,
        -19.627,
        45.295,
        -44.692,
        -0.088,
        17.989,
        -38.134,
        12.265
      ]
    },
    {
      "start": 82.34785,
      "duration": 0.39673,
      "confidence": 0.755,
      "loudness_start": -18.145,
      "loudness_max_time": 0.08401,
      "loudness_max": -6.689,
      "loudness_end": 0,
      "pitches": [
        0.234,
        0.08,
        0.108,
        0.193,
        0.179,
        0.282,
        1,
        0.997,
        0.577,
        0.49,
        0.436,
        0.474
      ],
      "timbre": [
        49.474,
        57.029,
        -22.899,
        -37.67,
        12.597,
        -26.121,
        -29.465,
        10.662,
        35.808,
        10.341,
        -13.153,
        2.068
      ]
    },
    {
      "start": 82.74458,
      "duration": 0.34757,
      "confidence": 0.895,
      "loudness_start": -17.684,
      "loudness_max_time": 0.03048,
      "loudness_max": -4.564,
      "loudness_end": 0,
      "pitches": [
        0.983,
        0.65,
        0.356,
        0.176,
        0.172,
        0.371,
        0.316,
        1,
        0.624,
        0.378,
        0.563,
        0.973
      ],
      "timbre": [
        48.178,
        11.318,
        -62.422,
        70.659,
        15.329,
        -56.095,
        18.89,
        29.383,
        10.583,
        12.9,
        -16.162,
        5.444
      ]
    },
    {
      "start": 83.09215,
      "duration": 0.1458,
      "confidence": 0.483,
      "loudness_start": -20.866,
      "loudness_max_time": 0.08137,
      "loudness_max": -15.861,
      "loudness_end": 0,
      "pitches": [
        0.58,
        0.919,
        0.585,
        0.472,
        0.905,
        0.833,
        0.806,
        0.891,
        0.696,
        1,
        0.913,
        0.481
      ],
      "timbre": [
        41.294,
        65.624,
        -11.453,
        -25.567,
        27.569,
        -16.806,
        47.733,
        -11.205,
        -16.76,
        -6.206,
        -29.353,
        7.309
      ]
    },
    {
      "start": 83.23796,
      "duration": 0.29546,
      "confidence": 1,
      "loudness_start": -23.437,
      "loudness_max_time": 0.074,
      "loudness_max": -6.005,
      "loudness_end": 0,
      "pitches": [
        1,
        0.49,
        0.228,
        0.199,
        0.202,
        0.285,
        0.483,
        0.355,
        0.647,
        0.595,
        0.483,
        0.98
      ],
      "timbre": [
        47.389,
        37.895,
        -23.726,
        3.464,
        14.002,
        55.71,
        40.237,
        5.83,
        20.175,
        7.21,
        5.21,
        11.82
      ]
    },
    {
      "start": 83.53342,
      "duration": 0.25152,
      "confidence": 0.556,
      "loudness_start": -20.59,
      "loudness_max_time": 0.07511,
      "loudness_max": -14.658,
      "loudness_end": 0,
      "pitches": [
        0.292,
        0.338,
        0.186,
        0.216,
        0.403,
        0.501,
        0.969,
        1,
        0.599,
        0.37,
        0.172,
        0.376
      ],
      "timbre": [
        42.665,
        53.438,
        -5.52,
        5.444,
        4.515,
        -16.499,
        34.524,
        1.045,
        13.115,
        -19.73,
        -21.817,
        11.738
      ]
    },
    {
      "start": 83.78494,
      "duration": 0.33424,
      "confidence": 1,
      "loudness_start": -24.267,
      "loudness_max_time": 0.01624,
      "loudness_max": -5.348,
      "loudness_end": 0,
      "pitches": [
        1,
        0.648,
        0.37,
        0.212,
        0.231,
        0.358,
        0.392,
        0.888,
        0.768,
        0.728,
        0.615,
        0.969
      ],
      "timbre": [
        49.928,
        27.071,
        -40.06,
        30.563,
        9.292,
        -41.245,
        -9.722,
        -2.134,
        12.144,
        10.999,
        -13.366,
        -5.942
      ]
    },
    {
      "start": 84.11918,
      "duration": 0.3205,
      "confidence": 1,
      "loudness_start": -19.513,
      "loudness_max_time": 0.07389,
      "loudness_max": -4.624,
      "loudness_end": 0,
      "pitches": [
        0.927,
        0.673,
        0.387,
        0.177,
        0.307,
        0.242,
        0.272,
        0.471,
        0.444,
        0.276,
        0.167,
        1
      ],
      "timbre": [
        45.939,
        18.943,
        10.643,
        -91.059,
        14.124,
        -4.044,
        19.779,
        25.9,
        11.084,
        9.568,
        -31.827,
        10.223
      ]
    },
    {
      "start": 84.43968,
      "duration": 0.14531,
      "confidence": 0.655,
      "loudness_start": -16.081,
      "loudness_max_time": 0.06853,
      "loudness_max": -6.512,
      "loudness_end": 0,
      "pitches": [
        0.58,
        0.478,
        0.186,
        0.128,
        0.313,
        0.322,
        0.752,
        0.749,
        0.966,
        1,
        0.894,
        0.112
      ],
      "timbre": [
        50.163,
        46.447,
        -7.141,
        -51.628,
        2.037,
        -35.669,
        -25.098,
        1.858,
        5.98,
        21.615,
        -19.793,
        -7.634
      ]
    },
    {
      "start": 84.58499,
      "duration": 0.19088,
      "confidence": 0.184,
      "loudness_start": -10.779,
      "loudness_max_time": 0.06882,
      "loudness_max": -7.837,
      "loudness_end": 0,
      "pitches": [
        0.342,
        0.163,
        0.099,
        0.234,
        0.332,
        0.437,
        0.316,
        0.312,
        0.173,
        0.122,
        0.108,
        1
      ],
      "timbre": [
        50.408,
        56.975,
        -3.657,
        -16.986,
        34.952,
        -33.801,
        -50.762,
        2.047,
        44.347,
        8.827,
        -15.983,
        -11.735
      ]
    },
    {
      "start": 84.77587,
      "duration": 0.30181,
      "confidence": 0.479,
      "loudness_start": -12.741,
      "loudness_max_time": 0.07536,
      "loudness_max": -7.387,
      "loudness_end": 0,
      "pitches": [
        0.764,
        0.541,
        0.32,
        0.556,
        0.477,
        0.458,
        1,
        0.463,
        0.565,
        0.564,
        0.358,
        0.896
      ],
      "timbre": [
        48.552,
        116.654,
        10.434,
        15.224,
        1.052,
        -10.654,
        -1.823,
        -9.972,
        17.468,
        1.689,
        -38.08,
        2.525
      ]
    },
    {
      "start": 85.07769,
      "duration": 0.16263,
      "confidence": 1,
      "loudness_start": -19.689,
      "loudness_max_time": 0.06171,
      "loudness_max": -5.793,
      "loudness_end": 0,
      "pitches": [
        0.767,
        0.537,
        0.308,
        0.725,
        0.921,
        0.407,
        0.283,
        0.357,
        0.689,
        1,
        0.732,
        0.288
      ],
      "timbre": [
        49.006,
        103.598,
        38.566,
        80.835,
        42.065,
        20.231,
        12.698,
        -39.981,
        -10.402,
        6.364,
        -34.093,
        -0.074
      ]
    },
    {
      "start": 85.24032,
      "duration": 0.26259,
      "confidence": 0.901,
      "loudness_start": -17.795,
      "loudness_max_time": 0.15972,
      "loudness_max": -4.966,
      "loudness_end": 0,
      "pitches": [
        0.624,
        0.463,
        0.462,
        0.473,
        0.669,
        0.695,
        0.787,
        0.483,
        0.382,
        0.765,
        0.696,
        1
      ],
      "timbre": [
        47.438,
        97.689,
        69.456,
        -89.767,
        42.193,
        -17.353,
        17.33,
        -44.239,
        5.115,
        -15.495,
        -9.556,
        -5.075
      ]
    },
    {
      "start": 85.5029,
      "duration": 0.18458,
      "confidence": 0.424,
      "loudness_start": -10.337,
      "loudness_max_time": 0.02117,
      "loudness_max": -5.211,
      "loudness_end": 0,
      "pitches": [
        0.473,
        1,
        0.298,
        0.714,
        0.926,
        0.216,
        0.235,
        0.27,
        0.368,
        0.584,
        0.326,
        0.368
      ],
      "timbre": [
        49.014,
        55.297,
        9.588,
        82.318,
        28.529,
        -30.829,
        -21.764,
        4.382,
        -6.799,
        -15.136,
        -17.167,
        -2.077
      ]
    },
    {
      "start": 85.68748,
      "duration": 0.20322,
      "confidence": 0.924,
      "loudness_start": -19.074,
      "loudness_max_time": 0.15022,
      "loudness_max": -5.584,
      "loudness_end": 0,
      "pitches": [
        0.178,
        0.145,
        0.123,
        0.174,
        1,
        0.459,
        0.354,
        0.53,
        0.592,
        0.558,
        0.218,
        0.263
      ],
      "timbre": [
        47.307,
        102.652,
        94.264,
        -81.485,
        43.303,
        -42.693,
        24.658,
        -46.916,
        -17.933,
        9.545,
        8.106,
        -22.429
      ]
    },
    {
      "start": 85.8907,
      "duration": 0.1454,
      "confidence": 0.25,
      "loudness_start": -8.374,
      "loudness_max_time": 0.05484,
      "loudness_max": -4.688,
      "loudness_end": 0,
      "pitches": [
        0.576,
        0.314,
        0.095,
        0.266,
        1,
        0.208,
        0.128,
        0.127,
        0.108,
        0.302,
        0.255,
        0.233
      ],
      "timbre": [
        53.813,
        46.634,
        60.523,
        14.712,
        32.785,
        -36.962,
        33.091,
        5.34,
        -5.215,
        0.052,
        -17.282,
        8.102
      ]
    },
    {
      "start": 86.0361,
      "duration": 0.21469,
      "confidence": 0.12,
      "loudness_start": -8.483,
      "loudness_max_time": 0.03264,
      "loudness_max": -5.155,
      "loudness_end": 0,
      "pitches": [
        0.137,
        0.267,
        1,
        0.12,
        0.18,
        0.117,
        0.292,
        0.204,
        0.186,
        0.23,
        0.075,
        0.132
      ],
      "timbre": [
        52.509,
        72.952,
        36.217,
        10.926,
        27.277,
        -30.463,
        -30.172,
        8.115,
        16.426,
        -3.095,
        -7.531,
        16.291
      ]
    },
    {
      "start": 86.25079,
      "duration": 0.22027,
      "confidence": 0.49,
      "loudness_start": -11.165,
      "loudness_max_time": 0.03895,
      "loudness_max": -6.317,
      "loudness_end": 0,
      "pitches": [
        0.494,
        1,
        0.358,
        0.295,
        0.46,
        0.326,
        0.476,
        0.23,
        0.465,
        0.352,
        0.165,
        0.466
      ],
      "timbre": [
        50.817,
        16.709,
        16.018,
        29.022,
        59.629,
        -25.457,
        -11.448,
        8.379,
        3.946,
        18.201,
        -23.528,
        -9.383
      ]
    },
    {
      "start": 86.47107,
      "duration": 0.4293,
      "confidence": 0.69,
      "loudness_start": -17.581,
      "loudness_max_time": 0.11306,
      "loudness_max": -6.927,
      "loudness_end": 0,
      "pitches": [
        0.418,
        0.682,
        1,
        0.427,
        0.253,
        0.365,
        0.563,
        0.41,
        0.423,
        0.438,
        0.314,
        0.439
      ],
      "timbre": [
        48.006,
        143.392,
        7.488,
        -21.535,
        57.107,
        -14.07,
        10.265,
        -44.425,
        -21.746,
        23.723,
        -55.563,
        -11.846
      ]
    },
    {
      "start": 86.90036,
      "duration": 0.16249,
      "confidence": 0.985,
      "loudness_start": -17.857,
      "loudness_max_time": 0.06563,
      "loudness_max": -4.2,
      "loudness_end": 0,
      "pitches": [
        1,
        0.987,
        0.346,
        0.335,
        0.272,
        0.263,
        0.325,
        0.333,
        0.426,
        0.347,
        0.454,
        0.477
      ],
      "timbre": [
        50.638,
        105.714,
        13.605,
        20.213,
        37.224,
        19.249,
        -3.425,
        22.512,
        9.891,
        17.4,
        -38.206,
        -1.452
      ]
    },
    {
      "start": 87.06286,
      "duration": 0.22073,
      "confidence": 0.678,
      "loudness_start": -18.023,
      "loudness_max_time": 0.17507,
      "loudness_max": -7.868,
      "loudness_end": 0,
      "pitches": [
        0.172,
        0.33,
        0.854,
        1,
        0.694,
        0.339,
        0.333,
        0.396,
        0.166,
        0.099,
        0.117,
        0.182
      ],
      "timbre": [
        47.262,
        95.348,
        33.8,
        -74.102,
        1.152,
        -36.982,
        -17.497,
        -28.005,
        -0.164,
        27.97,
        11.366,
        10.722
      ]
    },
    {
      "start": 87.28358,
      "duration": 0.12204,
      "confidence": 0.09,
      "loudness_start": -10.925,
      "loudness_max_time": 0.04566,
      "loudness_max": -6.789,
      "loudness_end": 0,
      "pitches": [
        0.763,
        1,
        0.815,
        0.342,
        0.272,
        0.263,
        0.694,
        0.355,
        0.441,
        0.538,
        0.509,
        0.442
      ],
      "timbre": [
        49.295,
        119.049,
        2.953,
        40.858,
        22.251,
        -17.78,
        -72.84,
        -16.112,
        25.916,
        9.434,
        -35.386,
        8.469
      ]
    },
    {
      "start": 87.40562,
      "duration": 0.17374,
      "confidence": 0.992,
      "loudness_start": -19.433,
      "loudness_max_time": 0.06656,
      "loudness_max": -3.735,
      "loudness_end": 0,
      "pitches": [
        0.611,
        1,
        0.36,
        0.129,
        0.265,
        0.137,
        0.151,
        0.09,
        0.163,
        0.116,
        0.241,
        0.294
      ],
      "timbre": [
        49.942,
        78.077,
        19.945,
        -9.062,
        36.385,
        55.767,
        4.003,
        -26.437,
        13.02,
        -14.03,
        -30.295,
        10.359
      ]
    },
    {
      "start": 87.57937,
      "duration": 0.21501,
      "confidence": 0.801,
      "loudness_start": -14.793,
      "loudness_max_time": 0.11779,
      "loudness_max": -4.34,
      "loudness_end": 0,
      "pitches": [
        0.208,
        0.74,
        1,
        0.32,
        0.235,
        0.176,
        0.423,
        0.353,
        0.249,
        0.229,
        0.186,
        0.202
      ],
      "timbre": [
        49.673,
        71.018,
        35.384,
        -87.071,
        45.531,
        -19.725,
        -19.777,
        11.666,
        24.326,
        -24.738,
        -4.211,
        11.275
      ]
    },
    {
      "start": 87.79438,
      "duration": 0.17433,
      "confidence": 0.688,
      "loudness_start": -13.722,
      "loudness_max_time": 0.0734,
      "loudness_max": -5.84,
      "loudness_end": 0,
      "pitches": [
        0.342,
        0.466,
        0.293,
        0.249,
        1,
        0.202,
        0.267,
        0.229,
        0.425,
        0.491,
        0.355,
        0.508
      ],
      "timbre": [
        52.302,
        165.139,
        112.849,
        1.039,
        54.041,
        -17.019,
        66.015,
        24.031,
        -14.584,
        -12.26,
        11.595,
        39.016
      ]
    },
    {
      "start": 87.96871,
      "duration": 0.24952,
      "confidence": 0.513,
      "loudness_start": -7.369,
      "loudness_max_time": 0.05948,
      "loudness_max": -2.612,
      "loudness_end": 0,
      "pitches": [
        0.619,
        0.523,
        0.321,
        0.444,
        1,
        0.559,
        0.857,
        0.792,
        0.674,
        0.564,
        0.39,
        0.727
      ],
      "timbre": [
        53.515,
        139.673,
        17.967,
        70.61,
        28.454,
        -30.32,
        42.746,
        -14.338,
        -26.86,
        3.903,
        -47.643,
        53.064
      ]
    },
    {
      "start": 88.21823,
      "duration": 0.12245,
      "confidence": 0.618,
      "loudness_start": -17.159,
      "loudness_max_time": 0.03492,
      "loudness_max": -9.036,
      "loudness_end": 0,
      "pitches": [
        0.219,
        0.347,
        1,
        0.179,
        0.072,
        0.048,
        0.232,
        0.18,
        0.087,
        0.1,
        0.185,
        0.028
      ],
      "timbre": [
        47.737,
        9.674,
        14.497,
        11.021,
        34.309,
        -14.796,
        -21.837,
        -18.767,
        -45.116,
        -1.896,
        13.511,
        4.91
      ]
    },
    {
      "start": 88.34068,
      "duration": 0.21456,
      "confidence": 0.78,
      "loudness_start": -14.217,
      "loudness_max_time": 0.05121,
      "loudness_max": -5.358,
      "loudness_end": 0,
      "pitches": [
        0.583,
        0.942,
        1,
        0.344,
        0.283,
        0.425,
        0.77,
        0.289,
        0.331,
        0.378,
        0.236,
        0.438
      ],
      "timbre": [
        52.131,
        43.261,
        45.243,
        -20.43,
        16.768,
        -8.126,
        -8.219,
        4.384,
        -10.716,
        -8.108,
        11.37,
        3.126
      ]
    },
    {
      "start": 88.55524,
      "duration": 0.44045,
      "confidence": 0.536,
      "loudness_start": -11.182,
      "loudness_max_time": 0.11489,
      "loudness_max": -5.116,
      "loudness_end": 0,
      "pitches": [
        1,
        0.894,
        0.544,
        0.459,
        0.485,
        0.574,
        0.744,
        0.697,
        0.664,
        0.759,
        0.588,
        0.927
      ],
      "timbre": [
        50.397,
        62.494,
        43.936,
        43.157,
        25.998,
        -21.59,
        12.694,
        44.212,
        -7.952,
        5.503,
        -7.512,
        36.853
      ]
    },
    {
      "start": 88.99569,
      "duration": 0.39537,
      "confidence": 0.992,
      "loudness_start": -20.634,
      "loudness_max_time": 0.02131,
      "loudness_max": -5.089,
      "loudness_end": 0,
      "pitches": [
        0.417,
        0.244,
        0.199,
        0.173,
        0.212,
        0.274,
        0.589,
        1,
        0.707,
        0.649,
        0.289,
        0.457
      ],
      "timbre": [
        51.851,
        31.398,
        5.142,
        13.183,
        13.841,
        -40.879,
        42.377,
        -14.926,
        -11.759,
        15.494,
        10.113,
        10.213
      ]
    },
    {
      "start": 89.39107,
      "duration": 0.11605,
      "confidence": 0.039,
      "loudness_start": -11.028,
      "loudness_max_time": 0.04586,
      "loudness_max": -8.474,
      "loudness_end": 0,
      "pitches": [
        0.157,
        0.35,
        0.064,
        0.073,
        0.386,
        0.134,
        0.105,
        0.097,
        0.212,
        1,
        0.223,
        0.09
      ],
      "timbre": [
        49.74,
        -11.876,
        71.785,
        20.922,
        62.796,
        -42.371,
        43.638,
        15.397,
        8.552,
        5.376,
        -10.806,
        19.063
      ]
    },
    {
      "start": 89.50712,
      "duration": 0.50499,
      "confidence": 0.647,
      "loudness_start": -12.393,
      "loudness_max_time": 0.02517,
      "loudness_max": -5.082,
      "loudness_end": 0,
      "pitches": [
        0.329,
        0.253,
        0.205,
        0.124,
        0.31,
        0.259,
        0.668,
        1,
        0.564,
        0.812,
        0.394,
        0.443
      ],
      "timbre": [
        51.195,
        2.802,
        25.555,
        28.116,
        30.454,
        -33.643,
        42.982,
        6.3,
        6.599,
        14.266,
        15.915,
        6.426
      ]
    },
    {
      "start": 90.01211,
      "duration": 0.15705,
      "confidence": 0.853,
      "loudness_start": -12.981,
      "loudness_max_time": 0.0743,
      "loudness_max": -3.126,
      "loudness_end": 0,
      "pitches": [
        1,
        0.989,
        0.252,
        0.073,
        0.177,
        0.177,
        0.439,
        0.372,
        0.525,
        0.566,
        0.824,
        0.14
      ],
      "timbre": [
        53.551,
        18.569,
        68.979,
        -37.636,
        42.879,
        0.207,
        68.4,
        14.375,
        7.744,
        21.38,
        3.563,
        8.807
      ]
    },
    {
      "start": 90.16916,
      "duration": 0.20281,
      "confidence": 0.387,
      "loudness_start": -5.393,
      "loudness_max_time": 0.05424,
      "loudness_max": -1.38,
      "loudness_end": 0,
      "pitches": [
        0.251,
        0.454,
        0.364,
        0.285,
        0.514,
        0.206,
        0.296,
        0.509,
        0.206,
        1,
        0.128,
        0.157
      ],
      "timbre": [
        57.214,
        107.911,
        93.669,
        11.254,
        4.239,
        -29.781,
        59.38,
        20.137,
        -10.013,
        -14.289,
        -7.821,
        -7.247
      ]
    },
    {
      "start": 90.37197,
      "duration": 0.30789,
      "confidence": 0.168,
      "loudness_start": -4.724,
      "loudness_max_time": 0.10045,
      "loudness_max": -0.839,
      "loudness_end": 0,
      "pitches": [
        0.994,
        0.773,
        0.491,
        0.213,
        0.61,
        0.382,
        0.321,
        0.575,
        0.267,
        0.679,
        0.227,
        1
      ],
      "timbre": [
        57.186,
        124.211,
        96.338,
        13.109,
        11.762,
        -43.621,
        47.752,
        18.845,
        -7.469,
        9.06,
        -14.839,
        -1.752
      ]
    },
    {
      "start": 90.67986,
      "duration": 0.41143,
      "confidence": 0.041,
      "loudness_start": -4.125,
      "loudness_max_time": 0.07672,
      "loudness_max": -1.334,
      "loudness_end": 0,
      "pitches": [
        0.236,
        0.165,
        0.151,
        0.224,
        0.294,
        0.243,
        0.842,
        1,
        0.576,
        0.508,
        0.285,
        0.257
      ],
      "timbre": [
        55.173,
        82.646,
        63.611,
        67.43,
        6.711,
        -32.819,
        52.824,
        -16.062,
        -21.183,
        0.073,
        -30.557,
        13.422
      ]
    },
    {
      "start": 91.09129,
      "duration": 0.48848,
      "confidence": 0.563,
      "loudness_start": -10.258,
      "loudness_max_time": 0.0069,
      "loudness_max": -3.833,
      "loudness_end": 0,
      "pitches": [
        0.193,
        0.24,
        0.164,
        0.122,
        0.506,
        0.177,
        0.438,
        1,
        0.645,
        0.576,
        0.409,
        0.361
      ],
      "timbre": [
        52.792,
        -7.884,
        16.051,
        10.691,
        28.507,
        -63.238,
        36.734,
        -7.039,
        -1.971,
        -0.58,
        -11.341,
        -1.045
      ]
    },
    {
      "start": 91.57977,
      "duration": 0.1507,
      "confidence": 0.673,
      "loudness_start": -12.266,
      "loudness_max_time": 0.03859,
      "loudness_max": -4.527,
      "loudness_end": 0,
      "pitches": [
        0.393,
        0.652,
        0.161,
        0.201,
        0.454,
        0.399,
        0.795,
        0.709,
        1,
        0.93,
        0.851,
        0.179
      ],
      "timbre": [
        51.283,
        -5.939,
        17.363,
        -0.428,
        23.003,
        -13.606,
        41.02,
        22.48,
        -4.989,
        3.77,
        -0.185,
        10.579
      ]
    },
    {
      "start": 91.73048,
      "duration": 0.38336,
      "confidence": 0.072,
      "loudness_start": -10.98,
      "loudness_max_time": 0.20403,
      "loudness_max": -8.436,
      "loudness_end": 0,
      "pitches": [
        0.171,
        0.56,
        0.33,
        0.218,
        0.64,
        0.397,
        1,
        0.902,
        0.278,
        0.152,
        0.215,
        0.167
      ],
      "timbre": [
        49.838,
        47.286,
        29.607,
        -17.703,
        38.55,
        -38.735,
        47.058,
        12.144,
        12.174,
        -8.874,
        -9.002,
        -4.171
      ]
    },
    {
      "start": 92.11383,
      "duration": 0.39478,
      "confidence": 0.911,
      "loudness_start": -13.458,
      "loudness_max_time": 0.15618,
      "loudness_max": -1.928,
      "loudness_end": 0,
      "pitches": [
        0.311,
        0.313,
        0.533,
        0.632,
        0.377,
        0.305,
        0.447,
        0.51,
        1,
        0.96,
        0.543,
        0.411
      ],
      "timbre": [
        55.471,
        60.219,
        36.365,
        -38.601,
        25.281,
        -4.646,
        49.127,
        42.042,
        -7.161,
        19.341,
        41.554,
        10.119
      ]
    },
    {
      "start": 92.50862,
      "duration": 0.15029,
      "confidence": 0.239,
      "loudness_start": -4.595,
      "loudness_max_time": 0.01699,
      "loudness_max": -0.761,
      "loudness_end": 0,
      "pitches": [
        0.878,
        0.524,
        0.204,
        0.183,
        0.202,
        0.12,
        0.419,
        0.433,
        0.814,
        0.824,
        1,
        0.128
      ],
      "timbre": [
        57.205,
        90.487,
        47.506,
        22.441,
        25.006,
        -54.646,
        46.362,
        9.954,
        2.855,
        33.283,
        -16.095,
        39.186
      ]
    },
    {
      "start": 92.65891,
      "duration": 0.1229,
      "confidence": 0.272,
      "loudness_start": -5.818,
      "loudness_max_time": 0.0483,
      "loudness_max": -2.188,
      "loudness_end": 0,
      "pitches": [
        0.605,
        0.772,
        0.446,
        0.485,
        0.642,
        0.653,
        0.663,
        0.657,
        1,
        0.993,
        0.986,
        0.178
      ],
      "timbre": [
        56.711,
        31.614,
        36.455,
        -11.141,
        2.848,
        -41.586,
        47.206,
        28.596,
        -1.636,
        -0.985,
        -5.933,
        13.008
      ]
    },
    {
      "start": 92.78181,
      "duration": 0.21401,
      "confidence": 0.187,
      "loudness_start": -4.634,
      "loudness_max_time": 0.07765,
      "loudness_max": -1.265,
      "loudness_end": 0,
      "pitches": [
        0.72,
        0.9,
        0.677,
        0.447,
        0.801,
        0.444,
        0.741,
        0.391,
        0.66,
        0.451,
        0.383,
        1
      ],
      "timbre": [
        57.222,
        83.662,
        51.748,
        -9.237,
        -4.297,
        -35.296,
        41.438,
        19.499,
        -9.772,
        -2.732,
        -2.277,
        14.731
      ]
    },
    {
      "start": 92.99583,
      "duration": 0.17388,
      "confidence": 0.243,
      "loudness_start": -4.31,
      "loudness_max_time": 0.07405,
      "loudness_max": 0.045,
      "loudness_end": 0,
      "pitches": [
        0.281,
        1,
        0.314,
        0.308,
        0.973,
        0.792,
        0.653,
        0.52,
        0.256,
        0.383,
        0.346,
        0.404
      ],
      "timbre": [
        57.787,
        86.576,
        57.96,
        16.682,
        15.938,
        -33.578,
        59.634,
        2.731,
        -1.241,
        -1.356,
        -13.264,
        40.647
      ]
    },
    {
      "start": 93.16971,
      "duration": 0.12816,
      "confidence": 0.059,
      "loudness_start": -4.46,
      "loudness_max_time": 0.01052,
      "loudness_max": -1.885,
      "loudness_end": 0,
      "pitches": [
        0.305,
        1,
        0.189,
        0.131,
        0.328,
        0.33,
        0.614,
        0.619,
        0.561,
        0.521,
        0.139,
        0.105
      ],
      "timbre": [
        57.083,
        56.838,
        19.351,
        -14.627,
        -8.336,
        -56.602,
        33.214,
        15.251,
        -11.256,
        18.412,
        -4.698,
        9.521
      ]
    },
    {
      "start": 93.29787,
      "duration": 0.07646,
      "confidence": 0.035,
      "loudness_start": -3.755,
      "loudness_max_time": 0.00956,
      "loudness_max": -0.762,
      "loudness_end": 0,
      "pitches": [
        0.477,
        0.789,
        0.758,
        0.754,
        0.853,
        0.818,
        0.931,
        0.92,
        0.847,
        1,
        0.335,
        0.305
      ],
      "timbre": [
        56.935,
        79.257,
        67.249,
        10.051,
        9.887,
        -64.329,
        45.803,
        5.325,
        6.817,
        5.329,
        -10.72,
        -8.131
      ]
    },
    {
      "start": 93.37433,
      "duration": 0.1498,
      "confidence": 0.432,
      "loudness_start": -4.343,
      "loudness_max_time": 0.0818,
      "loudness_max": 0.705,
      "loudness_end": 0,
      "pitches": [
        0.049,
        0.338,
        0.269,
        0.206,
        0.846,
        0.814,
        1,
        0.938,
        0.295,
        0.505,
        0.103,
        0.038
      ],
      "timbre": [
        57.762,
        68.528,
        90.746,
        -14.031,
        29.515,
        -38.955,
        59.766,
        35.403,
        7.562,
        13.065,
        -19.365,
        1.421
      ]
    },
    {
      "start": 93.52413,
      "duration": 0.14503,
      "confidence": 0.171,
      "loudness_start": -3.807,
      "loudness_max_time": 0.04238,
      "loudness_max": -0.243,
      "loudness_end": 0,
      "pitches": [
        0.036,
        0.314,
        0.262,
        0.259,
        1,
        0.89,
        0.976,
        0.938,
        0.314,
        0.384,
        0.044,
        0.026
      ],
      "timbre": [
        58.017,
        97.721,
        73.746,
        8.648,
        8.344,
        -25.113,
        66.529,
        5.197,
        -12.908,
        -0.845,
        -16.318,
        15.668
      ]
    },
    {
      "start": 93.66916,
      "duration": 0.26685,
      "confidence": 0.199,
      "loudness_start": -3.153,
      "loudness_max_time": 0.09087,
      "loudness_max": -0.094,
      "loudness_end": 0,
      "pitches": [
        0.469,
        0.976,
        1,
        0.634,
        0.62,
        0.265,
        0.289,
        0.3,
        0.244,
        0.403,
        0.147,
        0.378
      ],
      "timbre": [
        58.152,
        79.143,
        46.544,
        0.068,
        17.621,
        -41.101,
        37.486,
        19.159,
        -0.172,
        8.399,
        -3.649,
        3.887
      ]
    },
    {
      "start": 93.93601,
      "duration": 0.28494,
      "confidence": 0.474,
      "loudness_start": -6.01,
      "loudness_max_time": 0.06613,
      "loudness_max": -0.659,
      "loudness_end": 0,
      "pitches": [
        0.383,
        1,
        0.196,
        0.11,
        0.161,
        0.069,
        0.085,
        0.047,
        0.155,
        0.273,
        0.175,
        0.074
      ],
      "timbre": [
        56.695,
        85.514,
        57.413,
        2.307,
        20.504,
        -18.936,
        34.671,
        5.839,
        -14.498,
        14.612,
        -14.381,
        3.638
      ]
    },
    {
      "start": 94.22095,
      "duration": 0.14077,
      "confidence": 0.202,
      "loudness_start": -6.929,
      "loudness_max_time": 0.02518,
      "loudness_max": -2.597,
      "loudness_end": 0,
      "pitches": [
        0.33,
        1,
        0.18,
        0.124,
        0.165,
        0.14,
        0.549,
        0.556,
        0.825,
        0.867,
        0.473,
        0.024
      ],
      "timbre": [
        54.899,
        41.846,
        -6.149,
        3.035,
        -12.173,
        -58.619,
        26.547,
        11.177,
        13.393,
        5.699,
        -3.022,
        11.237
      ]
    },
    {
      "start": 94.36172,
      "duration": 0.1258,
      "confidence": 0.106,
      "loudness_start": -8.12,
      "loudness_max_time": 0.01228,
      "loudness_max": -4.166,
      "loudness_end": 0,
      "pitches": [
        0.287,
        0.401,
        0.396,
        0.285,
        0.727,
        0.702,
        0.937,
        0.909,
        0.824,
        1,
        0.589,
        0.026
      ],
      "timbre": [
        53.988,
        116.417,
        49.955,
        1.407,
        29.011,
        -55.272,
        39.82,
        -4.87,
        35.879,
        12.972,
        -12.63,
        0.093
      ]
    },
    {
      "start": 94.48753,
      "duration": 0.25587,
      "confidence": 0.837,
      "loudness_start": -7.733,
      "loudness_max_time": 0.05078,
      "loudness_max": 1.787,
      "loudness_end": 0,
      "pitches": [
        0.414,
        1,
        0.24,
        0.052,
        0.03,
        0.019,
        0.03,
        0.018,
        0.081,
        0.266,
        0.052,
        0.019
      ],
      "timbre": [
        59.211,
        114.157,
        33.316,
        11.619,
        20.564,
        -1.064,
        -7.312,
        -10.013,
        -6.66,
        6.035,
        -4.19,
        -5.754
      ]
    },
    {
      "start": 94.7434,
      "duration": 0.21451,
      "confidence": 0.404,
      "loudness_start": -5.8,
      "loudness_max_time": 0.02886,
      "loudness_max": 0.713,
      "loudness_end": 0,
      "pitches": [
        0.711,
        1,
        0.878,
        0.568,
        0.389,
        0.225,
        0.161,
        0.28,
        0.211,
        0.305,
        0.109,
        0.538
      ],
      "timbre": [
        56.682,
        85.038,
        -10.461,
        24.149,
        -3.012,
        -56.996,
        4.049,
        12.581,
        -12.148,
        -9.858,
        -2.406,
        -4.089
      ]
    },
    {
      "start": 94.95791,
      "duration": 0.4278,
      "confidence": 0.643,
      "loudness_start": -7.899,
      "loudness_max_time": 0.11509,
      "loudness_max": 0.069,
      "loudness_end": 0,
      "pitches": [
        0.269,
        0.699,
        1,
        0.407,
        0.182,
        0.14,
        0.088,
        0.106,
        0.166,
        0.351,
        0.203,
        0.225
      ],
      "timbre": [
        55.823,
        68.3,
        45.476,
        -34.974,
        30.125,
        -13.894,
        38.835,
        18.604,
        -13.842,
        15.323,
        -25.592,
        5.74
      ]
    },
    {
      "start": 95.38571,
      "duration": 0.13615,
      "confidence": 0.094,
      "loudness_start": -11.831,
      "loudness_max_time": 0.03865,
      "loudness_max": -6.982,
      "loudness_end": 0,
      "pitches": [
        0.474,
        0.433,
        0.207,
        0.177,
        0.441,
        0.443,
        0.993,
        1,
        0.931,
        0.954,
        0.442,
        0.016
      ],
      "timbre": [
        50.049,
        35.905,
        19.536,
        8.246,
        -0.8,
        -24.285,
        56.097,
        -7.308,
        -9.22,
        2.682,
        -5.633,
        -18.327
      ]
    },
    {
      "start": 95.52186,
      "duration": 0.26023,
      "confidence": 0.957,
      "loudness_start": -12.36,
      "loudness_max_time": 0.0727,
      "loudness_max": 0.07,
      "loudness_end": 0,
      "pitches": [
        0.667,
        1,
        0.076,
        0.011,
        0.03,
        0.026,
        0.01,
        0.043,
        0.194,
        0.087,
        0.018,
        0.014
      ],
      "timbre": [
        57.069,
        69.88,
        49.446,
        -0.198,
        33.619,
        12.839,
        18.644,
        27.135,
        11.472,
        9.044,
        -11.257,
        -22.915
      ]
    },
    {
      "start": 95.78209,
      "duration": 0.24444,
      "confidence": 0.587,
      "loudness_start": -10.453,
      "loudness_max_time": 0.01018,
      "loudness_max": -0.457,
      "loudness_end": 0,
      "pitches": [
        0.735,
        1,
        0.7,
        0.294,
        0.284,
        0.148,
        0.078,
        0.138,
        0.094,
        0.105,
        0.044,
        0.341
      ],
      "timbre": [
        54.998,
        69,
        -22.435,
        26.126,
        1.431,
        -63.659,
        12.706,
        11.282,
        -1.868,
        -4.533,
        -18.086,
        7.183
      ]
    },
    {
      "start": 96.02653,
      "duration": 0.27868,
      "confidence": 0.967,
      "loudness_start": -11.714,
      "loudness_max_time": 0.04888,
      "loudness_max": 1.462,
      "loudness_end": 0,
      "pitches": [
        0.194,
        1,
        0.274,
        0.286,
        0.401,
        0.302,
        0.074,
        0.07,
        0.073,
        0.13,
        0.043,
        0.259
      ],
      "timbre": [
        56.042,
        79.311,
        13.634,
        13.755,
        34.829,
        15.155,
        9.177,
        1.676,
        -1.229,
        -15.466,
        -23.348,
        -10.863
      ]
    },
    {
      "start": 96.30522,
      "duration": 0.50485,
      "confidence": 0.713,
      "loudness_start": -9.696,
      "loudness_max_time": 0.10384,
      "loudness_max": -0.683,
      "loudness_end": 0,
      "pitches": [
        0.193,
        0.411,
        0.287,
        0.51,
        1,
        0.652,
        0.257,
        0.661,
        0.533,
        0.394,
        0.118,
        0.24
      ],
      "timbre": [
        57.444,
        81.969,
        9.966,
        -29.057,
        2.739,
        -23.72,
        -2.761,
        16.569,
        11.988,
        3.062,
        -9.194,
        -8.116
      ]
    },
    {
      "start": 96.81007,
      "duration": 0.53923,
      "confidence": 0.725,
      "loudness_start": -6.948,
      "loudness_max_time": 0.05884,
      "loudness_max": 0.094,
      "loudness_end": 0,
      "pitches": [
        0.145,
        0.302,
        0.514,
        0.791,
        1,
        0.18,
        0.324,
        0.5,
        0.563,
        0.445,
        0.216,
        0.386
      ],
      "timbre": [
        57.267,
        75.835,
        16.089,
        7.499,
        14.158,
        -17.226,
        37.315,
        0.548,
        8.866,
        10.386,
        -0.762,
        1.316
      ]
    },
    {
      "start": 97.3493,
      "duration": 0.25238,
      "confidence": 0.255,
      "loudness_start": -8.661,
      "loudness_max_time": 0.00779,
      "loudness_max": -2.812,
      "loudness_end": 0,
      "pitches": [
        0.542,
        1,
        0.751,
        0.331,
        0.378,
        0.163,
        0.381,
        0.137,
        0.105,
        0.131,
        0.078,
        0.424
      ],
      "timbre": [
        53.795,
        47.699,
        -12.807,
        -13.652,
        -8.588,
        -71.538,
        26.141,
        7.136,
        -4.031,
        4.924,
        -6.584,
        11.781
      ]
    },
    {
      "start": 97.60168,
      "duration": 0.27025,
      "confidence": 0.791,
      "loudness_start": -9.011,
      "loudness_max_time": 0.04448,
      "loudness_max": -0.714,
      "loudness_end": 0,
      "pitches": [
        0.072,
        0.361,
        0.086,
        0.09,
        0.179,
        0.165,
        1,
        0.237,
        0.125,
        0.281,
        0.124,
        0.068
      ],
      "timbre": [
        56.788,
        81.782,
        48.485,
        -3.62,
        13.15,
        -3.262,
        59.972,
        17.021,
        -1.872,
        -6.729,
        8.443,
        9.417
      ]
    },
    {
      "start": 97.87193,
      "duration": 0.23832,
      "confidence": 0.194,
      "loudness_start": -6.004,
      "loudness_max_time": 0.00878,
      "loudness_max": -0.452,
      "loudness_end": 0,
      "pitches": [
        0.588,
        1,
        0.886,
        0.41,
        0.492,
        0.186,
        0.228,
        0.255,
        0.161,
        0.283,
        0.102,
        0.444
      ],
      "timbre": [
        57.599,
        87.352,
        18.731,
        -9.012,
        8.625,
        -60.591,
        39.302,
        42.526,
        5.024,
        -1.887,
        -6.861,
        23.888
      ]
    },
    {
      "start": 98.11025,
      "duration": 0.41483,
      "confidence": 0.7,
      "loudness_start": -8.884,
      "loudness_max_time": 0.07524,
      "loudness_max": -0.544,
      "loudness_end": 0,
      "pitches": [
        0.237,
        0.336,
        0.751,
        1,
        0.545,
        0.145,
        0.208,
        0.105,
        0.15,
        0.273,
        0.126,
        0.079
      ],
      "timbre": [
        56.353,
        82.349,
        11.227,
        6.339,
        20.64,
        -4.238,
        -6.08,
        -5.399,
        8.508,
        4.828,
        -22.941,
        -16.453
      ]
    },
    {
      "start": 98.52508,
      "duration": 0.12553,
      "confidence": 0.281,
      "loudness_start": -8.67,
      "loudness_max_time": 0.03128,
      "loudness_max": -4.801,
      "loudness_end": 0,
      "pitches": [
        0.151,
        0.251,
        0.18,
        0.135,
        0.635,
        0.625,
        1,
        0.997,
        0.931,
        0.996,
        0.545,
        0.021
      ],
      "timbre": [
        53.133,
        128.517,
        29.187,
        -2.309,
        8.21,
        -32.218,
        31.487,
        -5.274,
        34.984,
        3.394,
        1.881,
        -9.11
      ]
    },
    {
      "start": 98.65061,
      "duration": 0.25465,
      "confidence": 0.771,
      "loudness_start": -8.711,
      "loudness_max_time": 0.03507,
      "loudness_max": 0.269,
      "loudness_end": 0,
      "pitches": [
        0.445,
        1,
        0.225,
        0.055,
        0.031,
        0.013,
        0.02,
        0.012,
        0.045,
        0.174,
        0.039,
        0.013
      ],
      "timbre": [
        57.107,
        100.051,
        48.564,
        17.572,
        39.52,
        -18.975,
        60.469,
        6.177,
        11.456,
        12.996,
        8.7,
        18.484
      ]
    },
    {
      "start": 98.90526,
      "duration": 0.22036,
      "confidence": 0.588,
      "loudness_start": -6.214,
      "loudness_max_time": 0.04144,
      "loudness_max": 0.955,
      "loudness_end": 0,
      "pitches": [
        0.643,
        1,
        0.953,
        0.685,
        0.515,
        0.265,
        0.203,
        0.322,
        0.247,
        0.441,
        0.155,
        0.452
      ],
      "timbre": [
        58.202,
        67.008,
        1.449,
        8.498,
        21.467,
        -31.955,
        14.409,
        -3.11,
        -1.429,
        -7.016,
        3.914,
        13.961
      ]
    },
    {
      "start": 99.12562,
      "duration": 0.31224,
      "confidence": 0.314,
      "loudness_start": -5.242,
      "loudness_max_time": 0.06647,
      "loudness_max": -1.828,
      "loudness_end": 0,
      "pitches": [
        0.228,
        1,
        0.619,
        0.092,
        0.063,
        0.029,
        0.038,
        0.048,
        0.098,
        0.29,
        0.042,
        0.029
      ],
      "timbre": [
        55.817,
        24.634,
        42.761,
        8.487,
        36.384,
        -31.321,
        30.768,
        21.406,
        -31.314,
        12.338,
        -24.467,
        16.685
      ]
    },
    {
      "start": 99.43787,
      "duration": 0.08717,
      "confidence": 0.336,
      "loudness_start": -8.038,
      "loudness_max_time": 0.00718,
      "loudness_max": -2.395,
      "loudness_end": 0,
      "pitches": [
        0.652,
        1,
        0.855,
        0.861,
        0.807,
        0.808,
        0.696,
        0.697,
        0.47,
        0.485,
        0.624,
        0.499
      ],
      "timbre": [
        53.375,
        29.765,
        -47.834,
        -12.165,
        -18.054,
        -81.416,
        12.357,
        5.582,
        -14.822,
        5.691,
        -15.596,
        5.538
      ]
    },
    {
      "start": 99.52503,
      "duration": 0.14517,
      "confidence": 0.146,
      "loudness_start": -9.325,
      "loudness_max_time": 0.05578,
      "loudness_max": -6.04,
      "loudness_end": 0,
      "pitches": [
        0.181,
        0.407,
        0.295,
        0.29,
        0.58,
        0.584,
        0.996,
        1,
        0.82,
        0.83,
        0.235,
        0.012
      ],
      "timbre": [
        51.873,
        69.557,
        -20.771,
        -6.676,
        20.668,
        -27.539,
        57.794,
        -16.04,
        -7.701,
        -26.349,
        -19.093,
        -14.182
      ]
    },
    {
      "start": 99.6702,
      "duration": 0.2858,
      "confidence": 0.949,
      "loudness_start": -12.165,
      "loudness_max_time": 0.0851,
      "loudness_max": -0.386,
      "loudness_end": 0,
      "pitches": [
        0.62,
        1,
        0.071,
        0.01,
        0.018,
        0.022,
        0.009,
        0.035,
        0.171,
        0.123,
        0.035,
        0.015
      ],
      "timbre": [
        55.675,
        64.631,
        17.739,
        -25.67,
        41.032,
        39.306,
        0.922,
        -9.899,
        1.577,
        -8.744,
        -9.421,
        -11.725
      ]
    },
    {
      "start": 99.95601,
      "duration": 0.22735,
      "confidence": 0.579,
      "loudness_start": -7.835,
      "loudness_max_time": 0.00991,
      "loudness_max": 0.057,
      "loudness_end": 0,
      "pitches": [
        0.741,
        1,
        0.737,
        0.399,
        0.323,
        0.177,
        0.108,
        0.161,
        0.108,
        0.084,
        0.072,
        0.37
      ],
      "timbre": [
        55.59,
        81.893,
        -22.969,
        14.913,
        -5.653,
        -65.45,
        9.716,
        18.372,
        -8.613,
        -7.373,
        -17.688,
        5.247
      ]
    },
    {
      "start": 100.18336,
      "duration": 0.29469,
      "confidence": 0.998,
      "loudness_start": -12.394,
      "loudness_max_time": 0.06452,
      "loudness_max": 1.504,
      "loudness_end": 0,
      "pitches": [
        0.228,
        1,
        0.267,
        0.333,
        0.437,
        0.345,
        0.08,
        0.074,
        0.127,
        0.277,
        0.111,
        0.29
      ],
      "timbre": [
        55.52,
        77.939,
        44.954,
        -41.081,
        39.004,
        39.877,
        20.443,
        19.126,
        14.81,
        -7.824,
        -19.261,
        -2.932
      ]
    },
    {
      "start": 100.47805,
      "duration": 0.51755,
      "confidence": 0.457,
      "loudness_start": -5.351,
      "loudness_max_time": 0.04204,
      "loudness_max": -0.659,
      "loudness_end": 0,
      "pitches": [
        0.192,
        0.299,
        0.292,
        0.529,
        1,
        0.657,
        0.251,
        0.625,
        0.493,
        0.396,
        0.139,
        0.256
      ],
      "timbre": [
        57.493,
        104.741,
        8.148,
        -28.395,
        -15.469,
        -31.028,
        -12.982,
        3.033,
        28.826,
        -22.209,
        15.371,
        -16.499
      ]
    },
    {
      "start": 100.9956,
      "duration": 0.20304,
      "confidence": 0.13,
      "loudness_start": -3.288,
      "loudness_max_time": 0.01463,
      "loudness_max": 0.9,
      "loudness_end": 0,
      "pitches": [
        0.513,
        0.915,
        1,
        0.592,
        0.697,
        0.345,
        0.191,
        0.253,
        0.161,
        0.137,
        0.118,
        0.51
      ],
      "timbre": [
        57.475,
        90.909,
        -5.42,
        9.376,
        11.012,
        -60.82,
        18.902,
        13.57,
        -4.928,
        -7.836,
        -8.944,
        16.24
      ]
    },
    {
      "start": 101.19864,
      "duration": 0.5702,
      "confidence": 0.467,
      "loudness_start": -6.162,
      "loudness_max_time": 0.1102,
      "loudness_max": -1.058,
      "loudness_end": 0,
      "pitches": [
        0.519,
        1,
        0.576,
        0.83,
        0.558,
        0.314,
        0.368,
        0.385,
        0.516,
        0.564,
        0.452,
        0.387
      ],
      "timbre": [
        55.902,
        95.374,
        -9.788,
        -28.992,
        42.765,
        -26.806,
        16.72,
        -22.439,
        1.993,
        5.693,
        -34.629,
        20.453
      ]
    },
    {
      "start": 101.76884,
      "duration": 0.25161,
      "confidence": 0.884,
      "loudness_start": -12.109,
      "loudness_max_time": 0.02795,
      "loudness_max": -0.227,
      "loudness_end": 0,
      "pitches": [
        0.079,
        0.385,
        0.073,
        0.045,
        0.168,
        0.291,
        1,
        0.226,
        0.072,
        0.158,
        0.106,
        0.072
      ],
      "timbre": [
        57.5,
        112.792,
        46.186,
        8.46,
        2.704,
        -13.078,
        55.972,
        9.624,
        -29.181,
        -1.104,
        4.911,
        8.635
      ]
    },
    {
      "start": 102.02045,
      "duration": 0.29229,
      "confidence": 0.571,
      "loudness_start": -6.672,
      "loudness_max_time": 0.03512,
      "loudness_max": 0.322,
      "loudness_end": 0,
      "pitches": [
        0.528,
        1,
        0.97,
        0.516,
        0.486,
        0.232,
        0.611,
        0.284,
        0.14,
        0.129,
        0.117,
        0.418
      ],
      "timbre": [
        57.354,
        76.867,
        35.499,
        5,
        11.029,
        -30.966,
        40.617,
        36.111,
        -5.405,
        6.692,
        14.068,
        -10.236
      ]
    },
    {
      "start": 102.31274,
      "duration": 0.21497,
      "confidence": 0.404,
      "loudness_start": -6.04,
      "loudness_max_time": 0.0521,
      "loudness_max": -1.137,
      "loudness_end": 0,
      "pitches": [
        0.511,
        1,
        0.139,
        0.076,
        0.12,
        0.056,
        0.061,
        0.026,
        0.097,
        0.123,
        0.054,
        0.063
      ],
      "timbre": [
        56.402,
        81.602,
        28.279,
        23.033,
        18.812,
        -24.681,
        17.643,
        -6.56,
        -9.701,
        -7.674,
        -22.978,
        -25.839
      ]
    },
    {
      "start": 102.52771,
      "duration": 0.30168,
      "confidence": 0.797,
      "loudness_start": -6.947,
      "loudness_max_time": 0.09567,
      "loudness_max": 1.813,
      "loudness_end": 0,
      "pitches": [
        0.59,
        1,
        0.628,
        0.596,
        0.697,
        0.359,
        0.264,
        0.281,
        0.196,
        0.129,
        0.097,
        0.429
      ],
      "timbre": [
        56.423,
        92.513,
        25.244,
        -18.597,
        9.114,
        4.993,
        17.098,
        32.218,
        -2.461,
        7.247,
        -31.452,
        -14.659
      ]
    },
    {
      "start": 102.82939,
      "duration": 0.49392,
      "confidence": 0.849,
      "loudness_start": -9.44,
      "loudness_max_time": 0.07245,
      "loudness_max": 0.989,
      "loudness_end": 0,
      "pitches": [
        0.225,
        0.779,
        1,
        0.696,
        0.36,
        0.191,
        0.236,
        0.311,
        0.307,
        0.338,
        0.211,
        0.086
      ],
      "timbre": [
        57.45,
        98.401,
        9.73,
        -4.612,
        50.386,
        -1.741,
        -7.859,
        15.15,
        4.98,
        29.318,
        -12.684,
        -14.11
      ]
    },
    {
      "start": 103.32331,
      "duration": 0.34921,
      "confidence": 0.848,
      "loudness_start": -8.705,
      "loudness_max_time": 0.04533,
      "loudness_max": 1.757,
      "loudness_end": 0,
      "pitches": [
        0.223,
        1,
        0.485,
        0.056,
        0.029,
        0.041,
        0.027,
        0.021,
        0.033,
        0.126,
        0.037,
        0.105
      ],
      "timbre": [
        57.334,
        107.561,
        29.242,
        -31.234,
        18.862,
        21.81,
        -6.414,
        11.318,
        18.263,
        2.544,
        -2.612,
        -29.357
      ]
    },
    {
      "start": 103.67252,
      "duration": 0.45741,
      "confidence": 0.356,
      "loudness_start": -4.553,
      "loudness_max_time": 0.01169,
      "loudness_max": 0.582,
      "loudness_end": 0,
      "pitches": [
        0.351,
        1,
        0.565,
        0.061,
        0.049,
        0.077,
        0.113,
        0.13,
        0.327,
        0.117,
        0.045,
        0.125
      ],
      "timbre": [
        57.761,
        111.65,
        31.101,
        12.34,
        4.345,
        -53.212,
        39.22,
        11.916,
        16.859,
        6.612,
        -16.046,
        12.312
      ]
    },
    {
      "start": 104.12993,
      "duration": 0.26068,
      "confidence": 0.434,
      "loudness_start": -8.095,
      "loudness_max_time": 0.01017,
      "loudness_max": 0.326,
      "loudness_end": 0,
      "pitches": [
        0.729,
        1,
        0.625,
        0.249,
        0.31,
        0.127,
        0.079,
        0.143,
        0.076,
        0.141,
        0.052,
        0.322
      ],
      "timbre": [
        56.211,
        90.319,
        -2.16,
        9.925,
        -14.893,
        -63.105,
        5.664,
        17.351,
        0.458,
        -8.193,
        -8.401,
        14.772
      ]
    },
    {
      "start": 104.39061,
      "duration": 0.25302,
      "confidence": 0.511,
      "loudness_start": -9.347,
      "loudness_max_time": 0.15583,
      "loudness_max": -3.792,
      "loudness_end": 0,
      "pitches": [
        0.238,
        1,
        0.305,
        0.253,
        0.386,
        0.307,
        0.068,
        0.054,
        0.056,
        0.076,
        0.041,
        0.192
      ],
      "timbre": [
        54.65,
        75.966,
        -1.098,
        -21.584,
        31.508,
        -39.311,
        28.666,
        -9.426,
        -14.411,
        10.661,
        -3.512,
        1.948
      ]
    },
    {
      "start": 104.64363,
      "duration": 0.11737,
      "confidence": 0.647,
      "loudness_start": -6.897,
      "loudness_max_time": 0.03154,
      "loudness_max": 0.404,
      "loudness_end": 0,
      "pitches": [
        0.534,
        1,
        0.15,
        0.136,
        0.218,
        0.186,
        0.199,
        0.287,
        0.395,
        0.311,
        0.302,
        0.102
      ],
      "timbre": [
        58.332,
        44.816,
        17.781,
        -0.233,
        8.865,
        -53.973,
        46.036,
        17.531,
        25.277,
        14.402,
        4.084,
        10.065
      ]
    },
    {
      "start": 104.761,
      "duration": 0.14698,
      "confidence": 0.168,
      "loudness_start": -3.476,
      "loudness_max_time": 0.05322,
      "loudness_max": -0.325,
      "loudness_end": 0,
      "pitches": [
        0.12,
        0.141,
        0.111,
        0.117,
        0.645,
        0.53,
        0.989,
        0.997,
        0.89,
        1,
        0.364,
        0.051
      ],
      "timbre": [
        57.72,
        83.849,
        61.951,
        14.869,
        47.692,
        -29.657,
        51.89,
        16.836,
        25.085,
        -9.558,
        -14.742,
        20.367
      ]
    },
    {
      "start": 104.90798,
      "duration": 0.26721,
      "confidence": 0.474,
      "loudness_start": -5.797,
      "loudness_max_time": 0.08647,
      "loudness_max": 0.129,
      "loudness_end": 0,
      "pitches": [
        0.115,
        0.452,
        0.061,
        0.312,
        1,
        0.372,
        0.05,
        0.045,
        0.143,
        0.263,
        0.063,
        0.297
      ],
      "timbre": [
        57.836,
        101.293,
        32.127,
        -17.876,
        36.232,
        -34.322,
        16.112,
        12.935,
        13.244,
        7.74,
        -5.062,
        9.798
      ]
    },
    {
      "start": 105.17519,
      "duration": 0.52834,
      "confidence": 0.317,
      "loudness_start": -3.624,
      "loudness_max_time": 0.01026,
      "loudness_max": 0.784,
      "loudness_end": 0,
      "pitches": [
        0.154,
        0.325,
        0.542,
        0.893,
        1,
        0.287,
        0.331,
        0.4,
        0.447,
        0.293,
        0.148,
        0.197
      ],
      "timbre": [
        57.673,
        59.918,
        -3.768,
        15.331,
        20.418,
        -59.909,
        12.196,
        4.259,
        14.971,
        3.066,
        -14.894,
        4.612
      ]
    },
    {
      "start": 105.70354,
      "duration": 0.10753,
      "confidence": 0.383,
      "loudness_start": -6.823,
      "loudness_max_time": 0.00195,
      "loudness_max": -1.608,
      "loudness_end": 0,
      "pitches": [
        0.295,
        1,
        0.145,
        0.071,
        0.248,
        0.228,
        0.467,
        0.463,
        0.541,
        0.55,
        0.341,
        0.053
      ],
      "timbre": [
        54.695,
        59.18,
        -28.342,
        -15.556,
        -21.461,
        -75.983,
        20.077,
        12.192,
        -14.828,
        -6.601,
        -6.079,
        14.912
      ]
    },
    {
      "start": 105.81107,
      "duration": 0.08961,
      "confidence": 0.075,
      "loudness_start": -7.39,
      "loudness_max_time": 0.03922,
      "loudness_max": -4.538,
      "loudness_end": 0,
      "pitches": [
        0.341,
        0.769,
        0.709,
        0.695,
        0.798,
        0.788,
        1,
        0.984,
        0.911,
        0.943,
        0.256,
        0.244
      ],
      "timbre": [
        53.38,
        64.364,
        13.997,
        18.087,
        1.211,
        -46.292,
        47.677,
        -1.186,
        -4.428,
        0.69,
        -21.635,
        2.203
      ]
    },
    {
      "start": 105.90068,
      "duration": 0.3132,
      "confidence": 0.787,
      "loudness_start": -9.369,
      "loudness_max_time": 0.07943,
      "loudness_max": -0.128,
      "loudness_end": 0,
      "pitches": [
        0.064,
        0.343,
        0.104,
        0.111,
        0.208,
        0.216,
        1,
        0.163,
        0.079,
        0.183,
        0.131,
        0.07
      ],
      "timbre": [
        55.536,
        79.953,
        64.74,
        -43.365,
        3.318,
        -2.497,
        57.159,
        24.936,
        -20.941,
        -6.812,
        -11.908,
        12.133
      ]
    },
    {
      "start": 106.21388,
      "duration": 0.27315,
      "confidence": 0.373,
      "loudness_start": -5.993,
      "loudness_max_time": 0.0181,
      "loudness_max": 0.092,
      "loudness_end": 0,
      "pitches": [
        0.575,
        1,
        0.918,
        0.401,
        0.426,
        0.224,
        0.81,
        0.275,
        0.119,
        0.147,
        0.099,
        0.421
      ],
      "timbre": [
        57.798,
        74.761,
        36.67,
        7.261,
        12.763,
        -49.722,
        34.543,
        24.525,
        0.749,
        3.503,
        -7.014,
        -6.648
      ]
    },
    {
      "start": 106.48703,
      "duration": 0.22608,
      "confidence": 0.519,
      "loudness_start": -6.376,
      "loudness_max_time": 0.0498,
      "loudness_max": -1.037,
      "loudness_end": 0,
      "pitches": [
        0.487,
        1,
        0.161,
        0.083,
        0.119,
        0.059,
        0.075,
        0.03,
        0.1,
        0.119,
        0.058,
        0.07
      ],
      "timbre": [
        56.559,
        87.445,
        29.917,
        38.277,
        14.725,
        -27.894,
        20.488,
        -10.335,
        -16.26,
        -7.978,
        -28.65,
        -28.326
      ]
    },
    {
      "start": 106.71311,
      "duration": 0.29619,
      "confidence": 0.798,
      "loudness_start": -8.429,
      "loudness_max_time": 0.10557,
      "loudness_max": 1.806,
      "loudness_end": 0,
      "pitches": [
        0.608,
        1,
        0.622,
        0.585,
        0.738,
        0.327,
        0.237,
        0.281,
        0.185,
        0.147,
        0.099,
        0.464
      ],
      "timbre": [
        56.508,
        83.826,
        20.692,
        -15.552,
        19.45,
        8.675,
        9.942,
        45.212,
        11.167,
        3.453,
        -16.267,
        -25.379
      ]
    },
    {
      "start": 107.0093,
      "duration": 0.25556,
      "confidence": 0.829,
      "loudness_start": -8.616,
      "loudness_max_time": 0.03749,
      "loudness_max": 0.97,
      "loudness_end": 0,
      "pitches": [
        0.403,
        1,
        0.224,
        0.047,
        0.017,
        0.01,
        0.02,
        0.011,
        0.039,
        0.153,
        0.032,
        0.017
      ],
      "timbre": [
        57.883,
        110.809,
        25.703,
        -28.692,
        41.122,
        2.444,
        0.02,
        -0.292,
        7.324,
        28.683,
        -1.085,
        -19.425
      ]
    },
    {
      "start": 107.26485,
      "duration": 0.24952,
      "confidence": 0.294,
      "loudness_start": -2.023,
      "loudness_max_time": 0.02599,
      "loudness_max": 1.216,
      "loudness_end": 0,
      "pitches": [
        0.776,
        1,
        0.858,
        0.458,
        0.389,
        0.21,
        0.174,
        0.36,
        0.308,
        0.323,
        0.126,
        0.525
      ],
      "timbre": [
        57.221,
        91.171,
        -10.191,
        37.378,
        9.733,
        -57.58,
        2.041,
        15.42,
        -5.809,
        -7.065,
        -7.703,
        -4.221
      ]
    },
    {
      "start": 107.51438,
      "duration": 0.27247,
      "confidence": 0.806,
      "loudness_start": -8.429,
      "loudness_max_time": 0.16853,
      "loudness_max": -0.07,
      "loudness_end": 0,
      "pitches": [
        0.257,
        1,
        0.563,
        0.077,
        0.029,
        0.03,
        0.022,
        0.019,
        0.055,
        0.127,
        0.032,
        0.053
      ],
      "timbre": [
        58.456,
        98.811,
        32.012,
        -15.777,
        30.719,
        -17.603,
        -29.814,
        10.383,
        26.694,
        16.302,
        2.685,
        -39.41
      ]
    },
    {
      "start": 107.78685,
      "duration": 0.20286,
      "confidence": 0.207,
      "loudness_start": -4.527,
      "loudness_max_time": 0.04027,
      "loudness_max": -0.637,
      "loudness_end": 0,
      "pitches": [
        0.596,
        1,
        0.744,
        0.455,
        0.398,
        0.239,
        0.172,
        0.155,
        0.134,
        0.063,
        0.06,
        0.733
      ],
      "timbre": [
        57.908,
        81.751,
        26.153,
        -0.915,
        -4.413,
        -43.521,
        21.224,
        5.561,
        2.153,
        2.821,
        -5.959,
        -8.518
      ]
    },
    {
      "start": 107.98971,
      "duration": 0.29252,
      "confidence": 0.081,
      "loudness_start": -4.67,
      "loudness_max_time": 0.15059,
      "loudness_max": 0.152,
      "loudness_end": 0,
      "pitches": [
        0.614,
        1,
        0.067,
        0.011,
        0.02,
        0.026,
        0.02,
        0.041,
        0.176,
        0.084,
        0.049,
        0.095
      ],
      "timbre": [
        56.974,
        100.007,
        70.451,
        11.209,
        26.932,
        -31.893,
        51.656,
        -5.884,
        15.647,
        8.051,
        -33.501,
        11.664
      ]
    },
    {
      "start": 108.28222,
      "duration": 0.28834,
      "confidence": 0.651,
      "loudness_start": -8.299,
      "loudness_max_time": 0.0312,
      "loudness_max": 0.122,
      "loudness_end": 0,
      "pitches": [
        0.705,
        1,
        0.64,
        0.343,
        0.374,
        0.172,
        0.136,
        0.168,
        0.115,
        0.147,
        0.072,
        0.3
      ],
      "timbre": [
        56.003,
        85.07,
        10.222,
        4.134,
        6.791,
        -17.424,
        19.353,
        25.644,
        8.321,
        -5.278,
        7.316,
        -10.505
      ]
    },
    {
      "start": 108.57057,
      "duration": 0.24961,
      "confidence": 0.526,
      "loudness_start": -8.618,
      "loudness_max_time": 0.0338,
      "loudness_max": -3.747,
      "loudness_end": 0,
      "pitches": [
        0.254,
        1,
        0.302,
        0.237,
        0.347,
        0.283,
        0.08,
        0.076,
        0.067,
        0.081,
        0.047,
        0.205
      ],
      "timbre": [
        55.14,
        76.351,
        -4.623,
        -15.491,
        30.756,
        -48.432,
        15.863,
        -6.961,
        -9.115,
        12.772,
        -12.068,
        -3.963
      ]
    },
    {
      "start": 108.82018,
      "duration": 0.11973,
      "confidence": 0.698,
      "loudness_start": -8.211,
      "loudness_max_time": 0.02098,
      "loudness_max": 0.07,
      "loudness_end": 0,
      "pitches": [
        0.59,
        1,
        0.148,
        0.149,
        0.129,
        0.088,
        0.114,
        0.211,
        0.29,
        0.128,
        0.193,
        0.067
      ],
      "timbre": [
        58.047,
        30.385,
        21.558,
        0.957,
        21.54,
        -37.232,
        47.663,
        29.814,
        26.537,
        18.28,
        7.751,
        3.904
      ]
    },
    {
      "start": 108.93991,
      "duration": 0.14172,
      "confidence": 0.09,
      "loudness_start": -3.649,
      "loudness_max_time": 0.05077,
      "loudness_max": -0.644,
      "loudness_end": 0,
      "pitches": [
        0.517,
        0.735,
        0.335,
        0.353,
        1,
        0.914,
        0.878,
        0.906,
        0.262,
        0.396,
        0.29,
        0.113
      ],
      "timbre": [
        57.834,
        58.767,
        46.916,
        -4.045,
        33.797,
        -39.44,
        43.179,
        19.597,
        17.381,
        1.902,
        -14.845,
        21.326
      ]
    },
    {
      "start": 109.08163,
      "duration": 0.26639,
      "confidence": 0.343,
      "loudness_start": -4.172,
      "loudness_max_time": 0.06378,
      "loudness_max": 0.043,
      "loudness_end": 0,
      "pitches": [
        0.192,
        0.558,
        0.142,
        0.515,
        1,
        0.381,
        0.103,
        0.097,
        0.173,
        0.461,
        0.088,
        0.392
      ],
      "timbre": [
        58.458,
        85.775,
        28.883,
        -17.03,
        34.325,
        -31.585,
        17.944,
        8.824,
        26.774,
        3.035,
        -3.027,
        5.649
      ]
    },
    {
      "start": 109.34803,
      "duration": 0.39057,
      "confidence": 0.173,
      "loudness_start": -2.712,
      "loudness_max_time": 0.01032,
      "loudness_max": 1.203,
      "loudness_end": 0,
      "pitches": [
        0.194,
        0.209,
        0.297,
        0.378,
        0.822,
        0.444,
        0.726,
        0.734,
        1,
        0.467,
        0.204,
        0.287
      ],
      "timbre": [
        58.116,
        66.181,
        -2.89,
        -0.268,
        21.605,
        -63.399,
        -2.498,
        3.583,
        13.524,
        2.267,
        -11.503,
        -1.031
      ]
    },
    {
      "start": 109.73859,
      "duration": 0.10857,
      "confidence": 0.177,
      "loudness_start": -6.034,
      "loudness_max_time": 0.01552,
      "loudness_max": -1.863,
      "loudness_end": 0,
      "pitches": [
        1,
        0.962,
        0.202,
        0.11,
        0.211,
        0.119,
        0.092,
        0.082,
        0.254,
        0.253,
        0.558,
        0.137
      ],
      "timbre": [
        55.472,
        63.723,
        -26.849,
        -1.818,
        27.807,
        -62.233,
        28.266,
        -5.244,
        -14.494,
        11.359,
        -12.034,
        -10.914
      ]
    },
    {
      "start": 109.84717,
      "duration": 0.27215,
      "confidence": 0.379,
      "loudness_start": -6.807,
      "loudness_max_time": 0.03196,
      "loudness_max": -1.61,
      "loudness_end": 0,
      "pitches": [
        0.533,
        1,
        0.836,
        0.547,
        0.491,
        0.279,
        0.407,
        0.205,
        0.172,
        0.12,
        0.161,
        0.397
      ],
      "timbre": [
        55.023,
        56.138,
        -8.03,
        -10.327,
        -2.28,
        -24.989,
        25.81,
        6.091,
        -2.604,
        -1.559,
        3.472,
        -19.558
      ]
    },
    {
      "start": 110.11932,
      "duration": 0.27438,
      "confidence": 0.742,
      "loudness_start": -7.532,
      "loudness_max_time": 0.02958,
      "loudness_max": -0.392,
      "loudness_end": 0,
      "pitches": [
        0.056,
        0.436,
        0.149,
        0.102,
        0.189,
        0.205,
        1,
        0.248,
        0.15,
        0.172,
        0.149,
        0.064
      ],
      "timbre": [
        57.348,
        103.688,
        44.731,
        4.118,
        8.117,
        -7.381,
        57.77,
        1.979,
        -5.558,
        -2.309,
        14.423,
        17.838
      ]
    },
    {
      "start": 110.3937,
      "duration": 0.23111,
      "confidence": 0.273,
      "loudness_start": -4.638,
      "loudness_max_time": 0.02367,
      "loudness_max": 0.082,
      "loudness_end": 0,
      "pitches": [
        0.608,
        1,
        0.93,
        0.449,
        0.459,
        0.178,
        0.228,
        0.253,
        0.21,
        0.21,
        0.131,
        0.479
      ],
      "timbre": [
        57.082,
        59.959,
        4.035,
        24.757,
        19.895,
        -46.871,
        26.09,
        16.675,
        6.583,
        -3.274,
        -20.945,
        18.918
      ]
    },
    {
      "start": 110.62481,
      "duration": 0.43147,
      "confidence": 0.78,
      "loudness_start": -9.319,
      "loudness_max_time": 0.09493,
      "loudness_max": 0.063,
      "loudness_end": 0,
      "pitches": [
        0.239,
        0.33,
        0.768,
        1,
        0.542,
        0.149,
        0.239,
        0.123,
        0.172,
        0.292,
        0.112,
        0.077
      ],
      "timbre": [
        55.228,
        60.431,
        22.158,
        -39.858,
        33.029,
        -4.4,
        15.676,
        6.89,
        2.606,
        16.439,
        -23.593,
        -2.049
      ]
    },
    {
      "start": 111.05628,
      "duration": 0.12082,
      "confidence": 0.033,
      "loudness_start": -7.536,
      "loudness_max_time": 0.0106,
      "loudness_max": -3.83,
      "loudness_end": 0,
      "pitches": [
        0.239,
        0.369,
        0.38,
        0.275,
        0.729,
        0.721,
        1,
        0.977,
        0.906,
        0.992,
        0.57,
        0.024
      ],
      "timbre": [
        53.758,
        114.593,
        49.678,
        0.665,
        28.303,
        -58.353,
        28.673,
        -10.857,
        38.543,
        10.441,
        -10.811,
        -0.192
      ]
    },
    {
      "start": 111.1771,
      "duration": 0.238,
      "confidence": 0.788,
      "loudness_start": -8.181,
      "loudness_max_time": 0.04333,
      "loudness_max": 0.85,
      "loudness_end": 0,
      "pitches": [
        0.481,
        1,
        0.248,
        0.05,
        0.021,
        0.014,
        0.029,
        0.012,
        0.049,
        0.306,
        0.055,
        0.018
      ],
      "timbre": [
        58.374,
        61.896,
        45.934,
        19.357,
        69.183,
        -33.279,
        27.584,
        18.701,
        13.832,
        24.076,
        -10.558,
        3.794
      ]
    },
    {
      "start": 111.4151,
      "duration": 0.23791,
      "confidence": 0.519,
      "loudness_start": -5.9,
      "loudness_max_time": 0.02769,
      "loudness_max": 0.527,
      "loudness_end": 0,
      "pitches": [
        0.676,
        1,
        0.991,
        0.827,
        0.542,
        0.302,
        0.266,
        0.371,
        0.246,
        0.416,
        0.198,
        0.419
      ],
      "timbre": [
        56.641,
        88.055,
        -19.796,
        7.974,
        26.434,
        -20.65,
        14.714,
        15.218,
        14.247,
        -9.79,
        -0.088,
        -0.775
      ]
    },
    {
      "start": 111.65302,
      "duration": 0.19755,
      "confidence": 0.791,
      "loudness_start": -8.782,
      "loudness_max_time": 0.12495,
      "loudness_max": 1.477,
      "loudness_end": 0,
      "pitches": [
        0.483,
        1,
        0.536,
        0.13,
        0.064,
        0.054,
        0.064,
        0.052,
        0.125,
        0.358,
        0.311,
        0.141
      ],
      "timbre": [
        55.14,
        68.643,
        57.177,
        -71.974,
        37.566,
        -30.322,
        43.823,
        -10.749,
        14.36,
        25.555,
        -7.104,
        -3.181
      ]
    },
    {
      "start": 111.85057,
      "duration": 0.3688,
      "confidence": 0.103,
      "loudness_start": -3.838,
      "loudness_max_time": 0.07449,
      "loudness_max": -0.931,
      "loudness_end": 0,
      "pitches": [
        0.596,
        1,
        0.841,
        0.633,
        0.556,
        0.411,
        0.316,
        0.383,
        0.332,
        0.203,
        0.155,
        0.351
      ],
      "timbre": [
        55.891,
        59.869,
        21.403,
        36.452,
        18.941,
        -39.222,
        31.117,
        9.448,
        26.035,
        6.445,
        -35.916,
        -4.855
      ]
    },
    {
      "start": 112.21937,
      "duration": 0.24599,
      "confidence": 0.904,
      "loudness_start": -10.495,
      "loudness_max_time": 0.07423,
      "loudness_max": 1.713,
      "loudness_end": 0,
      "pitches": [
        0.706,
        1,
        0.032,
        0.015,
        0.038,
        0.031,
        0.011,
        0.05,
        0.181,
        0.111,
        0.039,
        0.017
      ],
      "timbre": [
        56.536,
        72.576,
        38.131,
        -33.708,
        47.728,
        10.077,
        6.635,
        12.45,
        0.366,
        7.692,
        -22.246,
        -4.211
      ]
    },
    {
      "start": 112.46535,
      "duration": 0.26132,
      "confidence": 0.48,
      "loudness_start": -8.815,
      "loudness_max_time": 0.02249,
      "loudness_max": -0.37,
      "loudness_end": 0,
      "pitches": [
        0.69,
        1,
        0.659,
        0.332,
        0.302,
        0.153,
        0.095,
        0.138,
        0.096,
        0.088,
        0.051,
        0.267
      ],
      "timbre": [
        54.73,
        77.581,
        -27.617,
        31.257,
        5.361,
        -31.451,
        11.904,
        10.034,
        -1.344,
        -0.527,
        7.292,
        3.299
      ]
    },
    {
      "start": 112.72667,
      "duration": 0.24925,
      "confidence": 1,
      "loudness_start": -12.333,
      "loudness_max_time": 0.05355,
      "loudness_max": 2.126,
      "loudness_end": 0,
      "pitches": [
        0.228,
        1,
        0.278,
        0.335,
        0.493,
        0.367,
        0.088,
        0.074,
        0.146,
        0.264,
        0.091,
        0.242
      ],
      "timbre": [
        56.798,
        95.733,
        19.089,
        -19.312,
        26.519,
        33.273,
        -2.605,
        -3.722,
        23.553,
        -11.125,
        1.296,
        -25.505
      ]
    },
    {
      "start": 112.97592,
      "duration": 0.28508,
      "confidence": 0.546,
      "loudness_start": -5.85,
      "loudness_max_time": 0.07643,
      "loudness_max": -0.852,
      "loudness_end": 0,
      "pitches": [
        0.674,
        0.961,
        1,
        0.562,
        0.842,
        0.293,
        0.219,
        0.283,
        0.161,
        0.104,
        0.103,
        0.629
      ],
      "timbre": [
        57.291,
        102.953,
        28.103,
        -22.007,
        2.392,
        -23.097,
        26.833,
        28.563,
        14.675,
        2.372,
        11.832,
        17.079
      ]
    },
    {
      "start": 113.261,
      "duration": 0.24971,
      "confidence": 0.028,
      "loudness_start": -4.339,
      "loudness_max_time": 0.0655,
      "loudness_max": -1.346,
      "loudness_end": 0,
      "pitches": [
        0.147,
        0.813,
        0.068,
        0.386,
        1,
        0.398,
        0.045,
        0.038,
        0.093,
        0.108,
        0.044,
        0.308
      ],
      "timbre": [
        56.487,
        103.877,
        18.522,
        0.698,
        16.604,
        -38.915,
        2.987,
        -11.155,
        11.008,
        20.63,
        -24.5,
        3.458
      ]
    },
    {
      "start": 113.5107,
      "duration": 0.26735,
      "confidence": 0.593,
      "loudness_start": -4.981,
      "loudness_max_time": 0.04861,
      "loudness_max": 0.117,
      "loudness_end": 0,
      "pitches": [
        0.612,
        0.907,
        1,
        0.43,
        0.629,
        0.263,
        0.218,
        0.24,
        0.174,
        0.149,
        0.117,
        0.849
      ],
      "timbre": [
        57.988,
        84.998,
        16.969,
        -2.563,
        20.277,
        -35.26,
        33.773,
        3.419,
        5.528,
        26.124,
        5.139,
        5.922
      ]
    },
    {
      "start": 113.77805,
      "duration": 0.26703,
      "confidence": 0.118,
      "loudness_start": -3.86,
      "loudness_max_time": 0.0329,
      "loudness_max": -1.319,
      "loudness_end": 0,
      "pitches": [
        0.293,
        1,
        0.993,
        0.778,
        0.6,
        0.053,
        0.037,
        0.029,
        0.139,
        0.244,
        0.059,
        0.212
      ],
      "timbre": [
        56.921,
        77.103,
        37.889,
        22.648,
        17.348,
        -36.142,
        50.358,
        -6.04,
        12.761,
        14.964,
        -28.877,
        5.199
      ]
    },
    {
      "start": 114.04508,
      "duration": 0.09714,
      "confidence": 0.166,
      "loudness_start": -8.893,
      "loudness_max_time": 0.00793,
      "loudness_max": -2.145,
      "loudness_end": 0,
      "pitches": [
        0.631,
        1,
        0.124,
        0.067,
        0.168,
        0.166,
        0.271,
        0.287,
        0.349,
        0.339,
        0.387,
        0.094
      ],
      "timbre": [
        53.958,
        53.541,
        -45.157,
        -18.299,
        -12.631,
        -75.889,
        12.271,
        9.586,
        -6.741,
        3.234,
        -6.878,
        14.956
      ]
    },
    {
      "start": 114.14222,
      "duration": 0.14748,
      "confidence": 0.135,
      "loudness_start": -8.19,
      "loudness_max_time": 0.06571,
      "loudness_max": -5.384,
      "loudness_end": 0,
      "pitches": [
        0.078,
        0.123,
        0.064,
        0.049,
        0.361,
        0.348,
        1,
        0.98,
        0.845,
        0.87,
        0.254,
        0.015
      ],
      "timbre": [
        52.809,
        57.084,
        11.706,
        -12.771,
        8.436,
        -33.452,
        46.164,
        9.135,
        -6.901,
        4.791,
        -25.33,
        -7.834
      ]
    },
    {
      "start": 114.28971,
      "duration": 0.121,
      "confidence": 0.823,
      "loudness_start": -9.017,
      "loudness_max_time": 0.04092,
      "loudness_max": -0.456,
      "loudness_end": 0,
      "pitches": [
        0.087,
        0.533,
        0.512,
        0.428,
        0.898,
        0.903,
        1,
        0.968,
        0.475,
        0.524,
        0.102,
        0.032
      ],
      "timbre": [
        57.208,
        87.474,
        53.281,
        -7.857,
        18.021,
        8.164,
        68.422,
        13.328,
        7.643,
        -13.043,
        7.357,
        19.399
      ]
    },
    {
      "start": 114.4107,
      "duration": 0.15687,
      "confidence": 0.294,
      "loudness_start": -3.664,
      "loudness_max_time": 0.06603,
      "loudness_max": 0.814,
      "loudness_end": 0,
      "pitches": [
        0.028,
        0.269,
        0.205,
        0.191,
        0.899,
        0.884,
        1,
        0.968,
        0.284,
        0.342,
        0.054,
        0.013
      ],
      "timbre": [
        57.27,
        98.699,
        32.162,
        17.292,
        14.661,
        -18.587,
        49.126,
        -4.292,
        13.855,
        -17.605,
        -28.122,
        26.258
      ]
    },
    {
      "start": 114.56757,
      "duration": 0.22644,
      "confidence": 0.471,
      "loudness_start": -6.685,
      "loudness_max_time": 0.00934,
      "loudness_max": -0.812,
      "loudness_end": 0,
      "pitches": [
        0.614,
        1,
        0.907,
        0.452,
        0.484,
        0.192,
        0.221,
        0.257,
        0.156,
        0.388,
        0.118,
        0.497
      ],
      "timbre": [
        57.562,
        57.887,
        10.141,
        -10.767,
        32.62,
        -55.465,
        26.414,
        4.127,
        5.582,
        -0.665,
        -10.436,
        11.826
      ]
    },
    {
      "start": 114.79401,
      "duration": 0.27034,
      "confidence": 0.528,
      "loudness_start": -6.851,
      "loudness_max_time": 0.0811,
      "loudness_max": -0.958,
      "loudness_end": 0,
      "pitches": [
        0.462,
        1,
        0.169,
        0.113,
        0.104,
        0.071,
        0.093,
        0.048,
        0.137,
        0.229,
        0.102,
        0.049
      ],
      "timbre": [
        57.141,
        83.855,
        25.017,
        -6.151,
        40.726,
        -17.688,
        5.966,
        0.66,
        10.538,
        4.124,
        -10.75,
        9.368
      ]
    },
    {
      "start": 115.06435,
      "duration": 0.17029,
      "confidence": 0.285,
      "loudness_start": -6.867,
      "loudness_max_time": 0.0321,
      "loudness_max": -2.544,
      "loudness_end": 0,
      "pitches": [
        0.307,
        1,
        0.243,
        0.211,
        0.04,
        0.053,
        0.535,
        0.543,
        0.664,
        0.658,
        0.409,
        0.062
      ],
      "timbre": [
        54.582,
        75.718,
        -32.104,
        -16.798,
        -10.952,
        -35.989,
        8.789,
        5.808,
        1.876,
        14.168,
        5.197,
        11.911
      ]
    },
    {
      "start": 115.23465,
      "duration": 0.09846,
      "confidence": 0.169,
      "loudness_start": -7.109,
      "loudness_max_time": 0.01878,
      "loudness_max": -4.692,
      "loudness_end": 0,
      "pitches": [
        0.312,
        0.433,
        0.36,
        0.292,
        0.686,
        0.663,
        0.952,
        0.934,
        0.898,
        1,
        0.604,
        0.021
      ],
      "timbre": [
        54.129,
        131.335,
        48.718,
        -5.202,
        27.63,
        -47.121,
        30.327,
        -1.389,
        29.872,
        10.432,
        -15.589,
        0.533
      ]
    },
    {
      "start": 115.33311,
      "duration": 0.26807,
      "confidence": 0.693,
      "loudness_start": -7.275,
      "loudness_max_time": 0.07321,
      "loudness_max": 0.099,
      "loudness_end": 0,
      "pitches": [
        0.424,
        1,
        0.237,
        0.042,
        0.032,
        0.013,
        0.033,
        0.013,
        0.053,
        0.21,
        0.052,
        0.023
      ],
      "timbre": [
        57.263,
        107.663,
        47.377,
        24.285,
        46.007,
        -11.816,
        43.857,
        4.338,
        15.157,
        12.786,
        -13.672,
        11.995
      ]
    },
    {
      "start": 115.60118,
      "duration": 0.25492,
      "confidence": 0.741,
      "loudness_start": -8.397,
      "loudness_max_time": 0.01677,
      "loudness_max": 0.609,
      "loudness_end": 0,
      "pitches": [
        0.661,
        1,
        0.809,
        0.569,
        0.427,
        0.259,
        0.222,
        0.364,
        0.27,
        0.6,
        0.275,
        0.482
      ],
      "timbre": [
        57.652,
        86.726,
        -9.067,
        8.327,
        16.425,
        -21.689,
        -7.606,
        12.993,
        -2.491,
        5.118,
        -5.51,
        -9.161
      ]
    },
    {
      "start": 115.8561,
      "duration": 0.24871,
      "confidence": 0.776,
      "loudness_start": -9.316,
      "loudness_max_time": 0.05534,
      "loudness_max": -0.161,
      "loudness_end": 0,
      "pitches": [
        0.338,
        1,
        0.434,
        0.084,
        0.044,
        0.021,
        0.043,
        0.037,
        0.203,
        0.362,
        0.079,
        0.026
      ],
      "timbre": [
        56.326,
        74.131,
        7.733,
        -16.949,
        51.772,
        3.889,
        6.674,
        -28.977,
        9.36,
        3.088,
        -17.845,
        -7.831
      ]
    },
    {
      "start": 116.10481,
      "duration": 0.26118,
      "confidence": 0.268,
      "loudness_start": -7.139,
      "loudness_max_time": 0.03392,
      "loudness_max": -1.878,
      "loudness_end": 0,
      "pitches": [
        0.563,
        1,
        0.832,
        0.527,
        0.469,
        0.279,
        0.205,
        0.245,
        0.193,
        0.142,
        0.088,
        0.32
      ],
      "timbre": [
        54.295,
        46.407,
        -23.546,
        -0.981,
        10.12,
        -36.853,
        5.188,
        19.936,
        5.297,
        -16.357,
        10.887,
        1.423
      ]
    },
    {
      "start": 116.36599,
      "duration": 0.26766,
      "confidence": 0.885,
      "loudness_start": -11.436,
      "loudness_max_time": 0.0891,
      "loudness_max": 0.223,
      "loudness_end": 0,
      "pitches": [
        0.68,
        1,
        0.032,
        0.014,
        0.061,
        0.029,
        0.007,
        0.034,
        0.175,
        0.104,
        0.033,
        0.021
      ],
      "timbre": [
        56.299,
        73.242,
        63.804,
        -11.622,
        50.975,
        11.521,
        58.861,
        11.219,
        18.728,
        -10.401,
        -5.119,
        13.778
      ]
    },
    {
      "start": 116.63365,
      "duration": 0.23678,
      "confidence": 0.585,
      "loudness_start": -7.912,
      "loudness_max_time": 0.02829,
      "loudness_max": 0.178,
      "loudness_end": 0,
      "pitches": [
        0.693,
        1,
        0.787,
        0.514,
        0.406,
        0.217,
        0.152,
        0.171,
        0.122,
        0.089,
        0.075,
        0.314
      ],
      "timbre": [
        55.243,
        69.182,
        -20.852,
        26.491,
        7.959,
        -21.504,
        20.649,
        20.063,
        -2.277,
        -7.212,
        7.516,
        3.719
      ]
    },
    {
      "start": 116.87043,
      "duration": 0.30313,
      "confidence": 0.901,
      "loudness_start": -11.63,
      "loudness_max_time": 0.06887,
      "loudness_max": -0.101,
      "loudness_end": 0,
      "pitches": [
        0.189,
        1,
        0.253,
        0.387,
        0.516,
        0.39,
        0.091,
        0.069,
        0.126,
        0.293,
        0.121,
        0.329
      ],
      "timbre": [
        54.212,
        72.82,
        34.449,
        -49.608,
        40.447,
        7.704,
        24.688,
        -0.183,
        -4.293,
        1.19,
        -35.138,
        -11.498
      ]
    },
    {
      "start": 117.17356,
      "duration": 0.35528,
      "confidence": 0.659,
      "loudness_start": -6.56,
      "loudness_max_time": 0.07204,
      "loudness_max": 0.366,
      "loudness_end": 0,
      "pitches": [
        0.758,
        1,
        0.71,
        0.232,
        0.804,
        0.18,
        0.174,
        0.198,
        0.301,
        0.236,
        0.169,
        0.601
      ],
      "timbre": [
        57.468,
        72.81,
        15.196,
        -15.022,
        11.901,
        -37.971,
        3.56,
        33.1,
        13.71,
        14.666,
        -7.517,
        -9.159
      ]
    },
    {
      "start": 117.52884,
      "duration": 0.40449,
      "confidence": 0.693,
      "loudness_start": -6.441,
      "loudness_max_time": 0.06543,
      "loudness_max": 0.551,
      "loudness_end": 0,
      "pitches": [
        0.144,
        0.349,
        0.622,
        0.635,
        1,
        0.467,
        0.523,
        0.455,
        0.462,
        0.4,
        0.315,
        0.173
      ],
      "timbre": [
        56.491,
        76.662,
        10,
        -27.155,
        30.222,
        -9.835,
        22.087,
        31.378,
        10.133,
        -5.36,
        -33.722,
        -11.93
      ]
    },
    {
      "start": 117.93333,
      "duration": 0.28567,
      "confidence": 0.615,
      "loudness_start": -7.458,
      "loudness_max_time": 0.05069,
      "loudness_max": -1.098,
      "loudness_end": 0,
      "pitches": [
        0.237,
        0.88,
        1,
        0.945,
        0.718,
        0.068,
        0.043,
        0.034,
        0.139,
        0.276,
        0.134,
        0.177
      ],
      "timbre": [
        56.522,
        70.127,
        15.831,
        -12.187,
        63.42,
        -21.567,
        69.46,
        -5.959,
        6.341,
        16.893,
        -19.855,
        8.918
      ]
    },
    {
      "start": 118.219,
      "duration": 0.09642,
      "confidence": 0.183,
      "loudness_start": -6.366,
      "loudness_max_time": 0.00755,
      "loudness_max": -0.878,
      "loudness_end": 0,
      "pitches": [
        0.631,
        1,
        0.147,
        0.086,
        0.192,
        0.187,
        0.284,
        0.306,
        0.38,
        0.37,
        0.393,
        0.092
      ],
      "timbre": [
        54.665,
        34.625,
        -41.625,
        4.739,
        11.244,
        -86.888,
        19.952,
        17.635,
        5.313,
        5.609,
        -11.452,
        5.85
      ]
    },
    {
      "start": 118.31542,
      "duration": 0.15175,
      "confidence": 0.118,
      "loudness_start": -8.613,
      "loudness_max_time": 0.05556,
      "loudness_max": -5.244,
      "loudness_end": 0,
      "pitches": [
        0.081,
        0.119,
        0.067,
        0.056,
        0.33,
        0.322,
        1,
        0.982,
        0.844,
        0.862,
        0.247,
        0.012
      ],
      "timbre": [
        52.555,
        63.266,
        -6.004,
        -13.633,
        10.497,
        -26.377,
        28.868,
        -5.208,
        2.664,
        -7.377,
        -22.393,
        -9.499
      ]
    },
    {
      "start": 118.46717,
      "duration": 0.26776,
      "confidence": 0.873,
      "loudness_start": -10.689,
      "loudness_max_time": 0.06889,
      "loudness_max": 0.112,
      "loudness_end": 0,
      "pitches": [
        0.065,
        0.341,
        0.075,
        0.047,
        0.204,
        0.331,
        1,
        0.172,
        0.09,
        0.112,
        0.111,
        0.089
      ],
      "timbre": [
        57.148,
        95.458,
        55.213,
        -0.795,
        3.633,
        12.234,
        60.976,
        28.075,
        -23.958,
        -8.21,
        10.425,
        2.152
      ]
    },
    {
      "start": 118.73492,
      "duration": 0.27887,
      "confidence": 0.51,
      "loudness_start": -5.638,
      "loudness_max_time": 0.03399,
      "loudness_max": 0.09,
      "loudness_end": 0,
      "pitches": [
        0.587,
        1,
        0.939,
        0.398,
        0.415,
        0.193,
        0.749,
        0.254,
        0.112,
        0.112,
        0.11,
        0.434
      ],
      "timbre": [
        57.934,
        78.298,
        40.565,
        10.812,
        7.809,
        -41.448,
        40.461,
        31.891,
        -11.706,
        4.818,
        -4.829,
        -4.471
      ]
    },
    {
      "start": 119.01379,
      "duration": 0.23805,
      "confidence": 0.558,
      "loudness_start": -6.173,
      "loudness_max_time": 0.02429,
      "loudness_max": 0.858,
      "loudness_end": 0,
      "pitches": [
        0.427,
        1,
        0.189,
        0.151,
        0.142,
        0.075,
        0.108,
        0.043,
        0.122,
        0.127,
        0.067,
        0.073
      ],
      "timbre": [
        57.232,
        106.608,
        22.872,
        34.704,
        25.728,
        -33.093,
        21.11,
        -13.299,
        -11.155,
        11.565,
        -18.172,
        -22.189
      ]
    },
    {
      "start": 119.25184,
      "duration": 0.27873,
      "confidence": 0.662,
      "loudness_start": -5.951,
      "loudness_max_time": 0.07473,
      "loudness_max": 1.03,
      "loudness_end": 0,
      "pitches": [
        0.725,
        1,
        0.791,
        0.62,
        0.771,
        0.284,
        0.221,
        0.265,
        0.179,
        0.162,
        0.11,
        0.593
      ],
      "timbre": [
        57.113,
        91.138,
        12.545,
        4.752,
        20.082,
        -19.569,
        4.028,
        40.289,
        5.159,
        14.029,
        -22.995,
        -12.267
      ]
    },
    {
      "start": 119.53057,
      "duration": 0.14091,
      "confidence": 0.807,
      "loudness_start": -9.366,
      "loudness_max_time": 0.07438,
      "loudness_max": 0.011,
      "loudness_end": 0,
      "pitches": [
        0.475,
        1,
        0.793,
        0.665,
        0.43,
        0.425,
        0.098,
        0.077,
        0.063,
        0.092,
        0.028,
        0.02
      ],
      "timbre": [
        57.507,
        108.32,
        16.357,
        -35.522,
        55.303,
        -12.146,
        -7.747,
        -3.396,
        17.662,
        25.136,
        -10.492,
        -16.744
      ]
    },
    {
      "start": 119.67147,
      "duration": 0.10753,
      "confidence": 0.182,
      "loudness_start": -2.926,
      "loudness_max_time": 0.03751,
      "loudness_max": 0.459,
      "loudness_end": 0,
      "pitches": [
        0.673,
        1,
        0.943,
        0.767,
        0.498,
        0.493,
        0.17,
        0.158,
        0.035,
        0.055,
        0.021,
        0.024
      ],
      "timbre": [
        58.88,
        103.768,
        19.169,
        -12.664,
        52.568,
        -42.589,
        -1.233,
        9.29,
        12.451,
        11.437,
        -11.63,
        -23.661
      ]
    },
    {
      "start": 119.779,
      "duration": 0.24526,
      "confidence": 0.066,
      "loudness_start": -2.176,
      "loudness_max_time": 0.01417,
      "loudness_max": 0.903,
      "loudness_end": 0,
      "pitches": [
        0.75,
        1,
        0.789,
        0.582,
        0.411,
        0.229,
        0.189,
        0.345,
        0.258,
        0.243,
        0.126,
        0.518
      ],
      "timbre": [
        57.314,
        88.757,
        -11.369,
        30.788,
        11.866,
        -53.827,
        1.408,
        13.631,
        -8.937,
        -5.96,
        -11.279,
        -6.739
      ]
    },
    {
      "start": 120.02426,
      "duration": 0.80063,
      "confidence": 0.823,
      "loudness_start": -8.823,
      "loudness_max_time": 0.07455,
      "loudness_max": 0.763,
      "loudness_end": 0,
      "pitches": [
        0.392,
        1,
        0.847,
        0.528,
        0.387,
        0.409,
        0.56,
        0.651,
        0.946,
        0.624,
        0.278,
        0.452
      ],
      "timbre": [
        55.367,
        98.09,
        46.379,
        -55.38,
        15.166,
        -10.629,
        31.627,
        5.887,
        4.306,
        -0.501,
        -9.687,
        -6.971
      ]
    },
    {
      "start": 120.8249,
      "duration": 0.26717,
      "confidence": 0.54,
      "loudness_start": -7.903,
      "loudness_max_time": 0.01202,
      "loudness_max": -0.242,
      "loudness_end": 0,
      "pitches": [
        0.689,
        1,
        0.538,
        0.206,
        0.263,
        0.117,
        0.069,
        0.131,
        0.074,
        0.137,
        0.041,
        0.277
      ],
      "timbre": [
        55.901,
        87.397,
        -10.77,
        18.847,
        -6.552,
        -53.827,
        -0.303,
        8.329,
        2.537,
        -9.575,
        -10.259,
        7.407
      ]
    },
    {
      "start": 121.09206,
      "duration": 0.11982,
      "confidence": 0.595,
      "loudness_start": -10.165,
      "loudness_max_time": 0.03431,
      "loudness_max": -4.237,
      "loudness_end": 0,
      "pitches": [
        0.473,
        0.869,
        0.748,
        0.744,
        1,
        0.927,
        0.616,
        0.613,
        0.178,
        0.197,
        0.106,
        0.137
      ],
      "timbre": [
        54.798,
        79.159,
        -9.446,
        -17.378,
        25.521,
        -49.063,
        25.519,
        1.529,
        -15.992,
        5.449,
        -9.38,
        2.426
      ]
    },
    {
      "start": 121.21188,
      "duration": 0.121,
      "confidence": 0.135,
      "loudness_start": -6.89,
      "loudness_max_time": 0.01568,
      "loudness_max": -3.063,
      "loudness_end": 0,
      "pitches": [
        0.774,
        1,
        0.747,
        0.744,
        0.993,
        0.84,
        0.763,
        0.768,
        0.431,
        0.446,
        0.263,
        0.139
      ],
      "timbre": [
        55.003,
        48.383,
        -9.203,
        -5.694,
        21.358,
        -58.266,
        19.719,
        -1.307,
        -8.851,
        11.112,
        -7.907,
        -12.825
      ]
    },
    {
      "start": 121.33288,
      "duration": 0.14816,
      "confidence": 0.704,
      "loudness_start": -6.693,
      "loudness_max_time": 0.04543,
      "loudness_max": 0.505,
      "loudness_end": 0,
      "pitches": [
        0.215,
        1,
        0.1,
        0.084,
        0.256,
        0.229,
        0.394,
        0.485,
        0.72,
        0.578,
        0.376,
        0.079
      ],
      "timbre": [
        57.875,
        43.467,
        22.392,
        -8.34,
        18.339,
        -13.173,
        52.43,
        27.799,
        20.096,
        18.421,
        5.014,
        1.318
      ]
    },
    {
      "start": 121.48104,
      "duration": 0.12163,
      "confidence": 0.145,
      "loudness_start": -3.595,
      "loudness_max_time": 0.03666,
      "loudness_max": -0.268,
      "loudness_end": 0,
      "pitches": [
        0.216,
        0.194,
        0.133,
        0.16,
        0.746,
        0.548,
        0.857,
        0.869,
        0.903,
        1,
        0.497,
        0.058
      ],
      "timbre": [
        57.061,
        85.066,
        71.565,
        34.171,
        41.751,
        -35.376,
        59.452,
        0.791,
        8.683,
        -1.735,
        -18.014,
        16.953
      ]
    },
    {
      "start": 121.60268,
      "duration": 0.2556,
      "confidence": 0.568,
      "loudness_start": -6.006,
      "loudness_max_time": 0.05921,
      "loudness_max": 0.161,
      "loudness_end": 0,
      "pitches": [
        0.103,
        0.538,
        0.049,
        0.356,
        1,
        0.365,
        0.051,
        0.056,
        0.131,
        0.275,
        0.063,
        0.289
      ],
      "timbre": [
        58.876,
        104.872,
        45.241,
        -4.561,
        37.997,
        -38.069,
        24.344,
        14.26,
        18.077,
        22.445,
        -0.575,
        11.892
      ]
    },
    {
      "start": 121.85828,
      "duration": 0.52844,
      "confidence": 0.112,
      "loudness_start": -2.682,
      "loudness_max_time": 0.0218,
      "loudness_max": 0.917,
      "loudness_end": 0,
      "pitches": [
        0.154,
        0.261,
        0.462,
        0.804,
        1,
        0.281,
        0.386,
        0.465,
        0.509,
        0.38,
        0.155,
        0.191
      ],
      "timbre": [
        57.993,
        68.283,
        -4.341,
        11.075,
        27.747,
        -46.197,
        3.43,
        -3.656,
        12.735,
        9.714,
        -3.791,
        2.467
      ]
    },
    {
      "start": 122.38671,
      "duration": 0.21991,
      "confidence": 0.429,
      "loudness_start": -7.394,
      "loudness_max_time": 0.01633,
      "loudness_max": -0.847,
      "loudness_end": 0,
      "pitches": [
        0.534,
        1,
        0.815,
        0.523,
        0.481,
        0.291,
        0.405,
        0.215,
        0.165,
        0.132,
        0.105,
        0.468
      ],
      "timbre": [
        55.622,
        69.726,
        -5.904,
        -0.002,
        -7.191,
        -55.945,
        35.086,
        6.037,
        -14.558,
        4.991,
        14.124,
        9.691
      ]
    },
    {
      "start": 122.60662,
      "duration": 0.30762,
      "confidence": 0.709,
      "loudness_start": -8.852,
      "loudness_max_time": 0.06096,
      "loudness_max": -0.753,
      "loudness_end": 0,
      "pitches": [
        0.064,
        0.36,
        0.089,
        0.115,
        0.174,
        0.227,
        1,
        0.161,
        0.078,
        0.12,
        0.121,
        0.066
      ],
      "timbre": [
        56.336,
        88.668,
        62.323,
        -21.497,
        -0.038,
        1.526,
        61.375,
        12.137,
        -23.186,
        -6.03,
        -6.968,
        14.363
      ]
    },
    {
      "start": 122.91424,
      "duration": 0.2732,
      "confidence": 0.477,
      "loudness_start": -4.9,
      "loudness_max_time": 0.06559,
      "loudness_max": 0.103,
      "loudness_end": 0,
      "pitches": [
        0.604,
        1,
        0.887,
        0.309,
        0.362,
        0.223,
        0.651,
        0.247,
        0.115,
        0.134,
        0.091,
        0.439
      ],
      "timbre": [
        58.262,
        82.448,
        37.429,
        8.462,
        17.17,
        -54.494,
        38.044,
        29.805,
        5.42,
        -8.709,
        -6.697,
        -6.92
      ]
    },
    {
      "start": 123.18744,
      "duration": 0.20381,
      "confidence": 0.433,
      "loudness_start": -4.977,
      "loudness_max_time": 0.03579,
      "loudness_max": -0.509,
      "loudness_end": 0,
      "pitches": [
        0.555,
        1,
        0.145,
        0.109,
        0.139,
        0.06,
        0.075,
        0.03,
        0.1,
        0.111,
        0.056,
        0.071
      ],
      "timbre": [
        56.929,
        100.347,
        27.718,
        26.992,
        19.335,
        -26.195,
        31.658,
        -14.017,
        -21.546,
        3.669,
        -22.205,
        -14.179
      ]
    },
    {
      "start": 123.39125,
      "duration": 0.31302,
      "confidence": 0.744,
      "loudness_start": -6.716,
      "loudness_max_time": 0.08593,
      "loudness_max": 0.993,
      "loudness_end": 0,
      "pitches": [
        0.611,
        1,
        0.688,
        0.598,
        0.72,
        0.42,
        0.305,
        0.322,
        0.204,
        0.171,
        0.109,
        0.429
      ],
      "timbre": [
        56.119,
        90.482,
        24.74,
        -17.334,
        22.326,
        -0.447,
        10.952,
        32.678,
        0.165,
        9.946,
        -30.715,
        -20.312
      ]
    },
    {
      "start": 123.70426,
      "duration": 0.4932,
      "confidence": 0.813,
      "loudness_start": -8.555,
      "loudness_max_time": 0.07457,
      "loudness_max": 0.836,
      "loudness_end": 0,
      "pitches": [
        0.251,
        0.873,
        1,
        0.783,
        0.408,
        0.203,
        0.273,
        0.344,
        0.369,
        0.359,
        0.252,
        0.093
      ],
      "timbre": [
        56.889,
        109.265,
        11.885,
        -17.287,
        42.603,
        -3.886,
        0.702,
        7.092,
        0.129,
        28.334,
        -22.256,
        -8.556
      ]
    },
    {
      "start": 124.19746,
      "duration": 0.28472,
      "confidence": 0.832,
      "loudness_start": -8.799,
      "loudness_max_time": 0.04327,
      "loudness_max": 1.221,
      "loudness_end": 0,
      "pitches": [
        0.26,
        1,
        0.397,
        0.063,
        0.028,
        0.032,
        0.032,
        0.019,
        0.051,
        0.146,
        0.035,
        0.052
      ],
      "timbre": [
        57.804,
        109.588,
        34.174,
        -24.75,
        35.913,
        13.145,
        -3.587,
        0.434,
        24.876,
        12.198,
        -0.114,
        -31.896
      ]
    },
    {
      "start": 124.48218,
      "duration": 0.16844,
      "confidence": 0.323,
      "loudness_start": -3.938,
      "loudness_max_time": 0.05223,
      "loudness_max": -0.152,
      "loudness_end": 0,
      "pitches": [
        0.463,
        0.845,
        0.053,
        0.024,
        0.216,
        0.205,
        0.639,
        0.633,
        0.989,
        1,
        0.672,
        0.208
      ],
      "timbre": [
        57.975,
        57.523,
        25.011,
        6.768,
        14.171,
        -36.951,
        43.288,
        2.763,
        9.345,
        9.513,
        -18.663,
        12.707
      ]
    },
    {
      "start": 124.65061,
      "duration": 0.08145,
      "confidence": 0.128,
      "loudness_start": -5.326,
      "loudness_max_time": 0.0176,
      "loudness_max": -0.913,
      "loudness_end": 0,
      "pitches": [
        0.993,
        1,
        0.849,
        0.862,
        0.942,
        0.856,
        0.654,
        0.619,
        0.686,
        0.796,
        0.292,
        0.792
      ],
      "timbre": [
        57.003,
        97.505,
        82.029,
        20.766,
        46.121,
        -56.348,
        50.627,
        0.619,
        10.834,
        24.915,
        -8.654,
        18.549
      ]
    },
    {
      "start": 124.73206,
      "duration": 0.26363,
      "confidence": 0.13,
      "loudness_start": -4.258,
      "loudness_max_time": 0.02938,
      "loudness_max": -1.41,
      "loudness_end": 0,
      "pitches": [
        0.688,
        1,
        0.027,
        0.012,
        0.039,
        0.025,
        0.013,
        0.037,
        0.159,
        0.045,
        0.011,
        0.092
      ],
      "timbre": [
        56.908,
        84.695,
        54.133,
        29.302,
        36.098,
        -31.217,
        34.264,
        0.768,
        13.063,
        21.951,
        -31.488,
        16.674
      ]
    },
    {
      "start": 124.99569,
      "duration": 0.26426,
      "confidence": 0.687,
      "loudness_start": -9.219,
      "loudness_max_time": 0.01511,
      "loudness_max": -0.226,
      "loudness_end": 0,
      "pitches": [
        0.698,
        1,
        0.549,
        0.243,
        0.302,
        0.14,
        0.084,
        0.166,
        0.118,
        0.205,
        0.059,
        0.304
      ],
      "timbre": [
        57.453,
        97.513,
        13.114,
        -13.973,
        -0.283,
        -36.91,
        8.592,
        18.257,
        5.135,
        2.471,
        17.355,
        2.357
      ]
    },
    {
      "start": 125.25995,
      "duration": 0.10762,
      "confidence": 0.105,
      "loudness_start": -5.465,
      "loudness_max_time": 0.04353,
      "loudness_max": -2.262,
      "loudness_end": 0,
      "pitches": [
        0.548,
        1,
        0.616,
        0.607,
        0.889,
        0.824,
        0.744,
        0.749,
        0.47,
        0.51,
        0.239,
        0.164
      ],
      "timbre": [
        56.421,
        96.319,
        15.243,
        -9.974,
        10.458,
        -37.762,
        8.758,
        3.956,
        2.813,
        16.148,
        -11.311,
        -7.245
      ]
    },
    {
      "start": 125.36757,
      "duration": 0.15379,
      "confidence": 0.322,
      "loudness_start": -4.757,
      "loudness_max_time": 0.05125,
      "loudness_max": -1.327,
      "loudness_end": 0,
      "pitches": [
        0.765,
        1,
        0.792,
        0.792,
        0.829,
        0.716,
        0.81,
        0.796,
        0.404,
        0.424,
        0.298,
        0.172
      ],
      "timbre": [
        57.544,
        112.841,
        14.546,
        -18.264,
        -6.316,
        -21.976,
        -15.871,
        5.885,
        29.169,
        14.922,
        -9.951,
        -12.859
      ]
    },
    {
      "start": 125.52136,
      "duration": 0.51061,
      "confidence": 0.29,
      "loudness_start": -4.313,
      "loudness_max_time": 0.0131,
      "loudness_max": 1.175,
      "loudness_end": 0,
      "pitches": [
        0.164,
        0.24,
        0.266,
        0.497,
        1,
        0.578,
        0.23,
        0.587,
        0.564,
        0.544,
        0.153,
        0.218
      ],
      "timbre": [
        58.746,
        83.931,
        30.097,
        -7.587,
        7.414,
        -57.203,
        17.643,
        7.698,
        16.622,
        20.02,
        -2.907,
        10.311
      ]
    },
    {
      "start": 126.03197,
      "duration": 1.03937,
      "confidence": 0.014,
      "loudness_start": -3.719,
      "loudness_max_time": 0.02087,
      "loudness_max": 0.497,
      "loudness_end": 0,
      "pitches": [
        0.577,
        1,
        0.655,
        0.88,
        0.642,
        0.493,
        0.526,
        0.725,
        0.963,
        0.797,
        0.458,
        0.407
      ],
      "timbre": [
        56.109,
        73.915,
        -5.144,
        44.459,
        15.803,
        -38.957,
        -0.66,
        -4.443,
        5.395,
        0.822,
        -20.787,
        1.57
      ]
    },
    {
      "start": 127.07134,
      "duration": 0.53959,
      "confidence": 1,
      "loudness_start": -15.866,
      "loudness_max_time": 0.04644,
      "loudness_max": 0.051,
      "loudness_end": 0,
      "pitches": [
        0.172,
        0.24,
        0.292,
        0.125,
        0.175,
        0.264,
        0.564,
        0.886,
        1,
        0.634,
        0.216,
        0.128
      ],
      "timbre": [
        53.546,
        69.488,
        34.658,
        65.031,
        35.632,
        4.021,
        17.348,
        20.739,
        -7.689,
        21.416,
        26.893,
        -6.105
      ]
    },
    {
      "start": 127.61093,
      "duration": 0.27868,
      "confidence": 0.774,
      "loudness_start": -14.858,
      "loudness_max_time": 0.00726,
      "loudness_max": -3.852,
      "loudness_end": 0,
      "pitches": [
        0.645,
        1,
        0.856,
        0.323,
        0.407,
        0.15,
        0.104,
        0.2,
        0.11,
        0.089,
        0.048,
        0.431
      ],
      "timbre": [
        50.393,
        -9.064,
        -9.11,
        37.403,
        -17.679,
        -80.144,
        26.552,
        16.063,
        7.478,
        11.85,
        -8.533,
        6.245
      ]
    },
    {
      "start": 127.88961,
      "duration": 0.11057,
      "confidence": 0.123,
      "loudness_start": -18.035,
      "loudness_max_time": 0.01362,
      "loudness_max": -13.955,
      "loudness_end": 0,
      "pitches": [
        0.034,
        0.037,
        0.032,
        0.049,
        0.108,
        0.082,
        0.057,
        0.038,
        0.096,
        1,
        0.103,
        0.022
      ],
      "timbre": [
        43.458,
        46.087,
        166.269,
        68.527,
        99.672,
        -41.606,
        -0.062,
        17.32,
        0.786,
        20.815,
        0.523,
        9.472
      ]
    },
    {
      "start": 128.00018,
      "duration": 0.12136,
      "confidence": 0.592,
      "loudness_start": -20.554,
      "loudness_max_time": 0.02995,
      "loudness_max": -10.885,
      "loudness_end": 0,
      "pitches": [
        0.307,
        0.325,
        0.246,
        0.193,
        0.311,
        0.356,
        0.345,
        0.243,
        0.242,
        1,
        0.22,
        0.186
      ],
      "timbre": [
        44.41,
        73.598,
        151.777,
        94.587,
        78.026,
        -32.465,
        4.56,
        -2.86,
        -7.589,
        21.077,
        -6.763,
        -2.5
      ]
    },
    {
      "start": 128.12154,
      "duration": 0.5234,
      "confidence": 1,
      "loudness_start": -21.228,
      "loudness_max_time": 0.01856,
      "loudness_max": 0.078,
      "loudness_end": 0,
      "pitches": [
        0.173,
        0.241,
        0.282,
        0.132,
        0.179,
        0.252,
        0.566,
        0.9,
        1,
        0.752,
        0.206,
        0.136
      ],
      "timbre": [
        54.63,
        64.926,
        20.082,
        47.371,
        26.633,
        -7.867,
        20.595,
        2.183,
        -0.615,
        15.619,
        16.591,
        -14.253
      ]
    },
    {
      "start": 128.64494,
      "duration": 0.35905,
      "confidence": 0.798,
      "loudness_start": -15.75,
      "loudness_max_time": 0.01711,
      "loudness_max": -4.335,
      "loudness_end": 0,
      "pitches": [
        0.636,
        1,
        0.832,
        0.267,
        0.408,
        0.151,
        0.113,
        0.188,
        0.101,
        0.102,
        0.054,
        0.391
      ],
      "timbre": [
        48.99,
        -0.594,
        -4.588,
        52.728,
        -10.095,
        -44.852,
        12.663,
        8.99,
        -9.531,
        11.281,
        25.2,
        -4.614
      ]
    },
    {
      "start": 129.00398,
      "duration": 0.16875,
      "confidence": 0.508,
      "loudness_start": -19.809,
      "loudness_max_time": 0.07863,
      "loudness_max": -14.338,
      "loudness_end": 0,
      "pitches": [
        0.218,
        0.23,
        0.386,
        0.331,
        0.565,
        0.835,
        0.438,
        0.382,
        0.715,
        1,
        0.944,
        0.332
      ],
      "timbre": [
        42.338,
        47.057,
        117.718,
        27.117,
        65.634,
        -11.481,
        15.62,
        -1.194,
        7.359,
        -7.48,
        -28.188,
        -1.183
      ]
    },
    {
      "start": 129.17274,
      "duration": 0.28417,
      "confidence": 1,
      "loudness_start": -21.424,
      "loudness_max_time": 0.01095,
      "loudness_max": -0.427,
      "loudness_end": 0,
      "pitches": [
        0.616,
        1,
        0.94,
        0.328,
        0.337,
        0.157,
        0.097,
        0.209,
        0.107,
        0.073,
        0.059,
        0.401
      ],
      "timbre": [
        52.467,
        67.817,
        -35.573,
        74.698,
        -13.148,
        -62.597,
        6.205,
        27.777,
        -13.171,
        -7.56,
        -23.269,
        13.863
      ]
    },
    {
      "start": 129.45692,
      "duration": 0.09274,
      "confidence": 0.308,
      "loudness_start": -20.615,
      "loudness_max_time": 0.025,
      "loudness_max": -15.719,
      "loudness_end": 0,
      "pitches": [
        0.358,
        0.301,
        0.256,
        0.289,
        0.399,
        0.199,
        0.208,
        0.255,
        0.309,
        1,
        0.537,
        0.395
      ],
      "timbre": [
        40.237,
        51.093,
        111.102,
        70.243,
        65.78,
        -51.914,
        13.905,
        1.825,
        -2.078,
        26.738,
        3.19,
        -7.848
      ]
    },
    {
      "start": 129.54967,
      "duration": 0.14549,
      "confidence": 0.573,
      "loudness_start": -23.032,
      "loudness_max_time": 0.05442,
      "loudness_max": -15.433,
      "loudness_end": 0,
      "pitches": [
        0.125,
        0.129,
        0.147,
        0.125,
        0.39,
        0.408,
        0.296,
        0.25,
        0.185,
        1,
        0.154,
        0.09
      ],
      "timbre": [
        39.866,
        63.287,
        160.545,
        60.009,
        96.848,
        -3.703,
        46.627,
        -1.439,
        27.288,
        21.231,
        -33.253,
        -10.021
      ]
    },
    {
      "start": 129.69514,
      "duration": 0.14748,
      "confidence": 1,
      "loudness_start": -25.085,
      "loudness_max_time": 0.01134,
      "loudness_max": -4.708,
      "loudness_end": 0,
      "pitches": [
        0.238,
        1,
        0.071,
        0.034,
        0.168,
        0.163,
        0.462,
        0.477,
        0.72,
        0.716,
        0.456,
        0.023
      ],
      "timbre": [
        48.675,
        -33.076,
        -70.47,
        33.254,
        -33.792,
        -75.508,
        -1.671,
        -0.045,
        -19.48,
        13.441,
        -14.125,
        16.217
      ]
    },
    {
      "start": 129.84264,
      "duration": 0.11379,
      "confidence": 0.234,
      "loudness_start": -17.555,
      "loudness_max_time": 0.02689,
      "loudness_max": -12.247,
      "loudness_end": 0,
      "pitches": [
        0.393,
        0.458,
        0.307,
        0.3,
        0.767,
        0.76,
        0.998,
        1,
        0.899,
        0.912,
        0.628,
        0.003
      ],
      "timbre": [
        43.127,
        30.287,
        20.615,
        45.342,
        -27.795,
        -56.448,
        59.057,
        16.105,
        9.881,
        -5.021,
        3.55,
        4.402
      ]
    },
    {
      "start": 129.95642,
      "duration": 0.12753,
      "confidence": 0.551,
      "loudness_start": -21.78,
      "loudness_max_time": 0.04333,
      "loudness_max": -14.763,
      "loudness_end": 0,
      "pitches": [
        0.505,
        0.594,
        0.232,
        0.205,
        0.447,
        0.23,
        0.147,
        0.224,
        0.308,
        1,
        0.273,
        0.395
      ],
      "timbre": [
        42.073,
        72.095,
        101.383,
        23.022,
        36.632,
        -7.119,
        20.032,
        -5.14,
        2.978,
        14.192,
        -11.597,
        -3.128
      ]
    },
    {
      "start": 130.08395,
      "duration": 0.10372,
      "confidence": 0.798,
      "loudness_start": -19.716,
      "loudness_max_time": 0.04577,
      "loudness_max": -10.397,
      "loudness_end": 0,
      "pitches": [
        0.597,
        0.853,
        0.618,
        0.473,
        0.47,
        0.799,
        0.687,
        0.818,
        0.801,
        1,
        0.495,
        0.244
      ],
      "timbre": [
        47.891,
        97.545,
        77.877,
        -0.854,
        50.817,
        -21.069,
        12.605,
        11.054,
        -16.016,
        13.097,
        1.898,
        5.202
      ]
    },
    {
      "start": 130.18765,
      "duration": 0.41918,
      "confidence": 0.96,
      "loudness_start": -12.4,
      "loudness_max_time": 0.03828,
      "loudness_max": 0.332,
      "loudness_end": 0,
      "pitches": [
        0.196,
        0.311,
        0.376,
        0.204,
        0.223,
        0.246,
        0.546,
        0.923,
        1,
        0.628,
        0.282,
        0.167
      ],
      "timbre": [
        53.887,
        79.679,
        -0.256,
        49.052,
        35.627,
        -0.119,
        6.657,
        30.924,
        11.524,
        9.773,
        -3.749,
        4.177
      ]
    },
    {
      "start": 130.60686,
      "duration": 0.11565,
      "confidence": 0.292,
      "loudness_start": -17.223,
      "loudness_max_time": 0.07669,
      "loudness_max": -12.538,
      "loudness_end": 0,
      "pitches": [
        0.34,
        0.387,
        0.275,
        0.246,
        1,
        0.469,
        0.285,
        0.788,
        0.791,
        0.998,
        0.517,
        0.256
      ],
      "timbre": [
        45.81,
        99.368,
        43.755,
        -13.537,
        77.93,
        -41.978,
        27.063,
        42.686,
        -15.66,
        27.765,
        -9.492,
        -13.299
      ]
    },
    {
      "start": 130.72249,
      "duration": 0.27841,
      "confidence": 0.897,
      "loudness_start": -15.08,
      "loudness_max_time": 0.02584,
      "loudness_max": -2.788,
      "loudness_end": 0,
      "pitches": [
        0.545,
        1,
        0.945,
        0.579,
        0.656,
        0.277,
        0.189,
        0.251,
        0.152,
        0.063,
        0.069,
        0.449
      ],
      "timbre": [
        52.403,
        64.825,
        -20.959,
        -1.417,
        8.398,
        7.42,
        2.817,
        2.289,
        -11.294,
        58.234,
        11.44,
        -4.294
      ]
    },
    {
      "start": 131.00092,
      "duration": 0.12277,
      "confidence": 0.456,
      "loudness_start": -17.562,
      "loudness_max_time": 0.07043,
      "loudness_max": -12.201,
      "loudness_end": 0,
      "pitches": [
        0.897,
        0.367,
        0.531,
        0.571,
        0.435,
        0.175,
        0.198,
        0.237,
        0.205,
        0.444,
        0.324,
        1
      ],
      "timbre": [
        46.125,
        71.617,
        43.995,
        3.512,
        47.293,
        -6.886,
        -19.522,
        -35.512,
        -6.775,
        6.997,
        -19.238,
        13.201
      ]
    },
    {
      "start": 131.12367,
      "duration": 0.08086,
      "confidence": 0.824,
      "loudness_start": -15.139,
      "loudness_max_time": 0.05166,
      "loudness_max": -6.059,
      "loudness_end": 0,
      "pitches": [
        0.166,
        0.122,
        1,
        0.721,
        0.284,
        0.149,
        0.164,
        0.09,
        0.178,
        0.366,
        0.172,
        0.108
      ],
      "timbre": [
        51.467,
        80.219,
        52.906,
        -69.55,
        42.225,
        11.462,
        -41.009,
        15.545,
        26.627,
        -6.888,
        2.75,
        6.962
      ]
    },
    {
      "start": 131.20454,
      "duration": 0.35365,
      "confidence": 0.636,
      "loudness_start": -6.377,
      "loudness_max_time": 0.0657,
      "loudness_max": 0.71,
      "loudness_end": 0,
      "pitches": [
        0.428,
        0.872,
        1,
        0.589,
        0.495,
        0.251,
        0.204,
        0.256,
        0.156,
        0.107,
        0.119,
        0.299
      ],
      "timbre": [
        53.642,
        94.623,
        8.07,
        19.653,
        26.308,
        -16.304,
        -16.996,
        -9.471,
        24.35,
        -4.951,
        -24.135,
        17.888
      ]
    },
    {
      "start": 131.5582,
      "duration": 0.22141,
      "confidence": 0.05,
      "loudness_start": -11.511,
      "loudness_max_time": 0.01884,
      "loudness_max": -8.22,
      "loudness_end": 0,
      "pitches": [
        0.099,
        1,
        0.219,
        0.061,
        0.065,
        0.078,
        0.046,
        0.033,
        0.095,
        0.088,
        0.03,
        0.056
      ],
      "timbre": [
        49.547,
        25.738,
        27.867,
        12.011,
        46.287,
        -23.659,
        -39.867,
        -16.675,
        5.107,
        -12.188,
        -18.003,
        -1.944
      ]
    },
    {
      "start": 131.77959,
      "duration": 0.38839,
      "confidence": 0.826,
      "loudness_start": -15.245,
      "loudness_max_time": 0.01283,
      "loudness_max": -4.576,
      "loudness_end": 0,
      "pitches": [
        0.184,
        0.334,
        0.414,
        0.13,
        0.18,
        0.249,
        0.584,
        0.959,
        1,
        0.594,
        0.216,
        0.146
      ],
      "timbre": [
        51.677,
        40.139,
        -2.478,
        -10.485,
        1.382,
        -62.132,
        -6.384,
        65.738,
        -2.713,
        23.825,
        24.732,
        16.497
      ]
    },
    {
      "start": 132.16798,
      "duration": 0.08689,
      "confidence": 0.68,
      "loudness_start": -13.161,
      "loudness_max_time": 0.05224,
      "loudness_max": -8.398,
      "loudness_end": 0,
      "pitches": [
        0.236,
        0.699,
        1,
        0.376,
        0.4,
        0.208,
        0.238,
        0.216,
        0.201,
        0.226,
        0.148,
        0.238
      ],
      "timbre": [
        50.764,
        116.276,
        101.943,
        -11.64,
        90.341,
        -17.782,
        -2.899,
        -57.256,
        -29.913,
        77.776,
        -16.579,
        14.322
      ]
    },
    {
      "start": 132.25488,
      "duration": 0.5688,
      "confidence": 0.729,
      "loudness_start": -7.768,
      "loudness_max_time": 0.05857,
      "loudness_max": 0.718,
      "loudness_end": 0,
      "pitches": [
        0.19,
        0.511,
        0.461,
        0.199,
        0.205,
        0.233,
        0.531,
        0.889,
        1,
        0.649,
        0.276,
        0.197
      ],
      "timbre": [
        54.833,
        104.123,
        51.877,
        19.741,
        40.244,
        -11.64,
        -9.685,
        14.881,
        21.801,
        -0.198,
        -21.842,
        3.432
      ]
    },
    {
      "start": 132.82367,
      "duration": 0.28481,
      "confidence": 0.713,
      "loudness_start": -9.901,
      "loudness_max_time": 0.01281,
      "loudness_max": -2.359,
      "loudness_end": 0,
      "pitches": [
        0.624,
        1,
        0.858,
        0.348,
        0.425,
        0.177,
        0.128,
        0.209,
        0.124,
        0.085,
        0.07,
        0.443
      ],
      "timbre": [
        52.197,
        60.329,
        -30.904,
        57.022,
        -19.223,
        -40.513,
        8.214,
        1.334,
        4.798,
        -5.445,
        -30.881,
        13.587
      ]
    },
    {
      "start": 133.10847,
      "duration": 0.22531,
      "confidence": 0.866,
      "loudness_start": -18.793,
      "loudness_max_time": 0.01935,
      "loudness_max": -7.987,
      "loudness_end": 0,
      "pitches": [
        0.079,
        0.048,
        0.061,
        0.079,
        0.083,
        0.09,
        0.403,
        0.066,
        0.071,
        0.105,
        0.186,
        1
      ],
      "timbre": [
        49.362,
        36.671,
        81.455,
        44.909,
        61.699,
        -34.357,
        15.491,
        -25.558,
        -8.007,
        37.648,
        -20.225,
        31.87
      ]
    },
    {
      "start": 133.33379,
      "duration": 0.36095,
      "confidence": 1,
      "loudness_start": -14.859,
      "loudness_max_time": 0.02389,
      "loudness_max": -0.421,
      "loudness_end": 0,
      "pitches": [
        0.647,
        1,
        0.93,
        0.317,
        0.365,
        0.179,
        0.154,
        0.227,
        0.116,
        0.107,
        0.12,
        0.566
      ],
      "timbre": [
        53.253,
        42.167,
        -23.324,
        53.787,
        25.297,
        -12.214,
        4.481,
        10.162,
        5.223,
        -12.807,
        28.346,
        0.09
      ]
    },
    {
      "start": 133.69473,
      "duration": 0.14558,
      "confidence": 0.758,
      "loudness_start": -18.889,
      "loudness_max_time": 0.0718,
      "loudness_max": -8.127,
      "loudness_end": 0,
      "pitches": [
        0.558,
        0.097,
        0.091,
        0.139,
        0.083,
        0.079,
        1,
        0.209,
        0.144,
        0.31,
        0.179,
        0.753
      ],
      "timbre": [
        49.008,
        46.115,
        70.49,
        7.45,
        82.583,
        -15.588,
        -6.647,
        -13.074,
        -16.511,
        27.966,
        -2.992,
        3.542
      ]
    },
    {
      "start": 133.84032,
      "duration": 0.3771,
      "confidence": 0.831,
      "loudness_start": -14.704,
      "loudness_max_time": 0.03932,
      "loudness_max": -3.955,
      "loudness_end": 0,
      "pitches": [
        0.196,
        0.298,
        0.355,
        0.214,
        0.257,
        0.269,
        0.611,
        0.931,
        1,
        0.601,
        0.284,
        0.237
      ],
      "timbre": [
        50.192,
        12.441,
        32.96,
        8.805,
        45.93,
        -4.705,
        20.177,
        22.668,
        19.99,
        18.822,
        1.496,
        -0.08
      ]
    },
    {
      "start": 134.2174,
      "duration": 0.13882,
      "confidence": 0.478,
      "loudness_start": -13.598,
      "loudness_max_time": 0.07193,
      "loudness_max": -8.024,
      "loudness_end": 0,
      "pitches": [
        0.172,
        1,
        0.565,
        0.138,
        0.114,
        0.169,
        0.126,
        0.176,
        0.277,
        0.235,
        0.099,
        0.19
      ],
      "timbre": [
        50.063,
        38.457,
        60.458,
        -10.065,
        69.994,
        -24.254,
        -1.312,
        3.072,
        -11.336,
        22.222,
        -4.87,
        11.534
      ]
    },
    {
      "start": 134.35625,
      "duration": 0.43574,
      "confidence": 0.995,
      "loudness_start": -11.829,
      "loudness_max_time": 0.0642,
      "loudness_max": 1.984,
      "loudness_end": 0,
      "pitches": [
        0.25,
        0.365,
        0.367,
        0.202,
        0.206,
        0.23,
        0.538,
        0.88,
        1,
        0.584,
        0.254,
        0.236
      ],
      "timbre": [
        55.333,
        92.354,
        43.702,
        -23.41,
        48.087,
        29.178,
        18.413,
        22.786,
        5.667,
        12.972,
        -1.078,
        6.982
      ]
    },
    {
      "start": 134.79198,
      "duration": 0.10444,
      "confidence": 0.462,
      "loudness_start": -9.385,
      "loudness_max_time": 0.02918,
      "loudness_max": -4.395,
      "loudness_end": 0,
      "pitches": [
        1,
        0.58,
        0.234,
        0.151,
        0.247,
        0.299,
        0.541,
        0.671,
        0.563,
        0.618,
        0.337,
        0.967
      ],
      "timbre": [
        54.425,
        161.695,
        64.316,
        3.703,
        96.761,
        -24.484,
        -1.746,
        5.37,
        -10.977,
        -7.553,
        -1.914,
        15.577
      ]
    },
    {
      "start": 134.89642,
      "duration": 0.31909,
      "confidence": 0.654,
      "loudness_start": -6.968,
      "loudness_max_time": 0.05857,
      "loudness_max": 0.121,
      "loudness_end": 0,
      "pitches": [
        0.561,
        1,
        0.845,
        0.441,
        0.654,
        0.323,
        0.203,
        0.245,
        0.157,
        0.064,
        0.093,
        0.616
      ],
      "timbre": [
        57.297,
        102.32,
        34.386,
        -8.441,
        42.065,
        -26.278,
        27.026,
        19.84,
        1.471,
        27.425,
        17.91,
        15.191
      ]
    },
    {
      "start": 135.21552,
      "duration": 0.21492,
      "confidence": 0.345,
      "loudness_start": -6.481,
      "loudness_max_time": 0.07947,
      "loudness_max": -2.284,
      "loudness_end": 0,
      "pitches": [
        0.095,
        0.31,
        1,
        0.24,
        0.105,
        0.052,
        0.104,
        0.052,
        0.071,
        0.193,
        0.053,
        0.554
      ],
      "timbre": [
        55.742,
        111.454,
        88.401,
        -3.909,
        41.385,
        -32.244,
        -10.496,
        2.869,
        -4.462,
        18.547,
        -6.585,
        40.437
      ]
    },
    {
      "start": 135.43044,
      "duration": 0.25537,
      "confidence": 0.363,
      "loudness_start": -6.786,
      "loudness_max_time": 0.01361,
      "loudness_max": 0.157,
      "loudness_end": 0,
      "pitches": [
        0.543,
        0.996,
        1,
        0.413,
        0.363,
        0.203,
        0.127,
        0.196,
        0.112,
        0.065,
        0.071,
        0.403
      ],
      "timbre": [
        55.128,
        91.781,
        -30.093,
        31.802,
        -5.986,
        -63.008,
        -7.272,
        36.805,
        2.661,
        8.981,
        -8.814,
        8.531
      ]
    },
    {
      "start": 135.6858,
      "duration": 0.2727,
      "confidence": 0.518,
      "loudness_start": -11.615,
      "loudness_max_time": 0.04143,
      "loudness_max": -6.276,
      "loudness_end": 0,
      "pitches": [
        0.239,
        1,
        0.343,
        0.062,
        0.062,
        0.06,
        0.054,
        0.078,
        0.079,
        0.118,
        0.059,
        0.15
      ],
      "timbre": [
        51.361,
        99.277,
        5.763,
        10.068,
        29.495,
        -8.499,
        -44.458,
        -14.313,
        5.408,
        2.2,
        -24.844,
        11.975
      ]
    },
    {
      "start": 135.9585,
      "duration": 0.22671,
      "confidence": 0.891,
      "loudness_start": -15.528,
      "loudness_max_time": 0.06535,
      "loudness_max": -3.934,
      "loudness_end": 0,
      "pitches": [
        0.557,
        1,
        0.992,
        0.484,
        0.44,
        0.208,
        0.139,
        0.21,
        0.114,
        0.124,
        0.037,
        0.421
      ],
      "timbre": [
        53.78,
        10.444,
        -1.225,
        -13.828,
        -7.975,
        -41.758,
        9.1,
        16.501,
        3.904,
        13.606,
        -25.676,
        -7.177
      ]
    },
    {
      "start": 136.18523,
      "duration": 0.19129,
      "confidence": 0.23,
      "loudness_start": -12.756,
      "loudness_max_time": 0.06642,
      "loudness_max": -8.007,
      "loudness_end": 0,
      "pitches": [
        0.365,
        0.586,
        0.984,
        0.364,
        0.293,
        0.247,
        0.3,
        0.338,
        0.361,
        1,
        0.388,
        0.43
      ],
      "timbre": [
        50.339,
        198.166,
        67.261,
        4.503,
        91.791,
        -34.946,
        -15.89,
        8.037,
        29.889,
        -20.949,
        0.16,
        4.797
      ]
    },
    {
      "start": 136.37651,
      "duration": 0.10476,
      "confidence": 0.522,
      "loudness_start": -11.498,
      "loudness_max_time": 0.06747,
      "loudness_max": -5.963,
      "loudness_end": 0,
      "pitches": [
        0.207,
        1,
        0.844,
        0.161,
        0.107,
        0.096,
        0.064,
        0.12,
        0.977,
        0.363,
        0.108,
        0.122
      ],
      "timbre": [
        52.642,
        92.624,
        100.665,
        -8.289,
        90.495,
        -34.338,
        -24.707,
        12.802,
        24.77,
        26.335,
        -1.794,
        2.786
      ]
    },
    {
      "start": 136.48128,
      "duration": 0.45859,
      "confidence": 0.676,
      "loudness_start": -8.886,
      "loudness_max_time": 0.00639,
      "loudness_max": 0.147,
      "loudness_end": 0,
      "pitches": [
        0.277,
        0.358,
        0.294,
        0.114,
        0.147,
        0.255,
        0.574,
        0.919,
        1,
        0.571,
        0.219,
        0.138
      ],
      "timbre": [
        53.998,
        63.033,
        -29.841,
        59.555,
        13.624,
        -66.741,
        -8.605,
        7.684,
        8.197,
        -14.028,
        -26.696,
        7.541
      ]
    },
    {
      "start": 136.93987,
      "duration": 0.31923,
      "confidence": 0.884,
      "loudness_start": -14.089,
      "loudness_max_time": 0.06977,
      "loudness_max": -2.275,
      "loudness_end": 0,
      "pitches": [
        0.419,
        1,
        0.984,
        0.728,
        0.672,
        0.424,
        0.31,
        0.35,
        0.236,
        0.134,
        0.136,
        0.347
      ],
      "timbre": [
        48.894,
        92.306,
        23.486,
        -21.938,
        24.49,
        3.12,
        24.858,
        -6.588,
        22.603,
        -12.637,
        -40.014,
        17.411
      ]
    },
    {
      "start": 137.2591,
      "duration": 0.23215,
      "confidence": 0.959,
      "loudness_start": -20.921,
      "loudness_max_time": 0.07104,
      "loudness_max": -7.564,
      "loudness_end": 0,
      "pitches": [
        0.18,
        0.074,
        0.06,
        0.061,
        0.057,
        0.062,
        0.193,
        0.058,
        0.077,
        0.198,
        0.618,
        1
      ],
      "timbre": [
        49.077,
        69.074,
        55.16,
        31.421,
        42.223,
        5.93,
        8.367,
        -26.777,
        6.661,
        25.939,
        -4.174,
        18.309
      ]
    },
    {
      "start": 137.49126,
      "duration": 0.30218,
      "confidence": 1,
      "loudness_start": -17.84,
      "loudness_max_time": 0.0407,
      "loudness_max": -0.802,
      "loudness_end": 0,
      "pitches": [
        0.482,
        0.922,
        1,
        0.556,
        0.482,
        0.235,
        0.191,
        0.238,
        0.133,
        0.103,
        0.159,
        0.611
      ],
      "timbre": [
        51.596,
        73.338,
        -27.263,
        -13.381,
        40.281,
        58.081,
        15.946,
        1.47,
        -18.904,
        29.029,
        -9.581,
        2.652
      ]
    },
    {
      "start": 137.79343,
      "duration": 0.24327,
      "confidence": 0.713,
      "loudness_start": -14.529,
      "loudness_max_time": 0.15556,
      "loudness_max": -6.809,
      "loudness_end": 0,
      "pitches": [
        0.189,
        0.078,
        0.052,
        0.082,
        0.092,
        0.081,
        0.179,
        0.146,
        0.14,
        0.265,
        0.282,
        1
      ],
      "timbre": [
        49.634,
        56.547,
        25.43,
        -43.866,
        14.372,
        0.482,
        -29.468,
        30.654,
        22.604,
        -27.017,
        5.823,
        8.527
      ]
    },
    {
      "start": 138.0367,
      "duration": 0.27288,
      "confidence": 0.824,
      "loudness_start": -18.986,
      "loudness_max_time": 0.01753,
      "loudness_max": -2.636,
      "loudness_end": 0,
      "pitches": [
        0.573,
        1,
        0.889,
        0.458,
        0.48,
        0.214,
        0.239,
        0.238,
        0.114,
        0.064,
        0.098,
        0.537
      ],
      "timbre": [
        52.176,
        2.113,
        -8.414,
        34.763,
        6.493,
        -44.929,
        30.899,
        -5.504,
        5.959,
        33.987,
        13.207,
        16.838
      ]
    },
    {
      "start": 138.30957,
      "duration": 0.11524,
      "confidence": 0.44,
      "loudness_start": -16.445,
      "loudness_max_time": 0.02543,
      "loudness_max": -9.757,
      "loudness_end": 0,
      "pitches": [
        0.088,
        0.057,
        0.031,
        0.051,
        0.319,
        0.086,
        0.056,
        0.081,
        0.205,
        1,
        0.337,
        0.065
      ],
      "timbre": [
        46.731,
        -20.324,
        19.984,
        19.024,
        56.794,
        -32.278,
        -19.468,
        -5.768,
        -13.115,
        30.084,
        11.044,
        12.039
      ]
    },
    {
      "start": 138.4248,
      "duration": 0.12263,
      "confidence": 0.732,
      "loudness_start": -15.497,
      "loudness_max_time": 0.03662,
      "loudness_max": -8.204,
      "loudness_end": 0,
      "pitches": [
        0.117,
        0.13,
        0.102,
        0.125,
        0.578,
        0.159,
        0.152,
        0.201,
        0.339,
        1,
        0.321,
        0.146
      ],
      "timbre": [
        50.466,
        33.289,
        42.934,
        -27.809,
        47.765,
        -18.177,
        -25.427,
        35.945,
        0.844,
        10.011,
        11.704,
        -4.195
      ]
    },
    {
      "start": 138.54744,
      "duration": 0.4181,
      "confidence": 0.806,
      "loudness_start": -10.01,
      "loudness_max_time": 0.02693,
      "loudness_max": -0.1,
      "loudness_end": 0,
      "pitches": [
        0.176,
        0.27,
        0.332,
        0.178,
        0.2,
        0.243,
        0.545,
        0.905,
        1,
        0.61,
        0.268,
        0.147
      ],
      "timbre": [
        53.719,
        86.915,
        -21.634,
        43.581,
        16.43,
        -15.126,
        -5.893,
        23.4,
        5.781,
        11.635,
        12.981,
        1.82
      ]
    },
    {
      "start": 138.96553,
      "duration": 0.11605,
      "confidence": 0.154,
      "loudness_start": -15.838,
      "loudness_max_time": 0.01426,
      "loudness_max": -11.362,
      "loudness_end": 0,
      "pitches": [
        0.23,
        0.233,
        0.19,
        0.11,
        0.304,
        0.163,
        0.208,
        0.449,
        0.589,
        1,
        0.308,
        0.22
      ],
      "timbre": [
        46.393,
        104.229,
        45.15,
        1.347,
        81.574,
        -60.635,
        33.472,
        56.075,
        -7.171,
        -0.208,
        -2.514,
        -3.445
      ]
    },
    {
      "start": 139.08159,
      "duration": 0.27297,
      "confidence": 0.915,
      "loudness_start": -15.043,
      "loudness_max_time": 0.01517,
      "loudness_max": -1.955,
      "loudness_end": 0,
      "pitches": [
        0.583,
        1,
        0.895,
        0.471,
        0.626,
        0.219,
        0.151,
        0.22,
        0.118,
        0.098,
        0.09,
        0.448
      ],
      "timbre": [
        53.103,
        62.156,
        -21.872,
        18.12,
        -6.554,
        -41.444,
        -2.631,
        7.102,
        6.132,
        34.027,
        -5.388,
        0.78
      ]
    },
    {
      "start": 139.35455,
      "duration": 0.12236,
      "confidence": 0.562,
      "loudness_start": -17.601,
      "loudness_max_time": 0.03963,
      "loudness_max": -11.517,
      "loudness_end": 0,
      "pitches": [
        1,
        0.447,
        0.426,
        0.358,
        0.469,
        0.358,
        0.23,
        0.216,
        0.398,
        0.726,
        0.445,
        0.936
      ],
      "timbre": [
        47.514,
        59.187,
        72.977,
        15.265,
        60.144,
        -15.74,
        7.412,
        -46.161,
        0.505,
        30.023,
        -17.796,
        14.731
      ]
    },
    {
      "start": 139.47691,
      "duration": 0.12744,
      "confidence": 0.68,
      "loudness_start": -13.189,
      "loudness_max_time": 0.05937,
      "loudness_max": -5.888,
      "loudness_end": 0,
      "pitches": [
        0.146,
        0.21,
        1,
        0.409,
        0.233,
        0.115,
        0.348,
        0.085,
        0.206,
        0.458,
        0.095,
        0.094
      ],
      "timbre": [
        52.282,
        101.074,
        61.31,
        -35.251,
        34.107,
        -4.692,
        -33.078,
        43.588,
        26.381,
        -26.289,
        16.312,
        12.332
      ]
    },
    {
      "start": 139.60435,
      "duration": 0.52898,
      "confidence": 0.69,
      "loudness_start": -7.66,
      "loudness_max_time": 0.01712,
      "loudness_max": 0.051,
      "loudness_end": 0,
      "pitches": [
        0.266,
        0.677,
        0.451,
        0.134,
        0.215,
        0.268,
        0.562,
        0.907,
        1,
        0.636,
        0.24,
        0.159
      ],
      "timbre": [
        55.087,
        53.786,
        -6.961,
        45.497,
        5.755,
        -49.167,
        -5.635,
        -6.934,
        2.188,
        2.281,
        -4.1,
        13.941
      ]
    },
    {
      "start": 140.13333,
      "duration": 0.21329,
      "confidence": 0.805,
      "loudness_start": -13.882,
      "loudness_max_time": 0.00642,
      "loudness_max": -4.045,
      "loudness_end": 0,
      "pitches": [
        0.529,
        1,
        0.932,
        0.509,
        0.448,
        0.226,
        0.173,
        0.217,
        0.12,
        0.093,
        0.044,
        0.442
      ],
      "timbre": [
        53.004,
        -5.265,
        -15.617,
        3.054,
        -3.34,
        -58.539,
        19.91,
        0.674,
        6.446,
        8.458,
        -15.96,
        2.298
      ]
    },
    {
      "start": 140.34662,
      "duration": 0.17465,
      "confidence": 0.31,
      "loudness_start": -12.005,
      "loudness_max_time": 0.02154,
      "loudness_max": -6.756,
      "loudness_end": 0,
      "pitches": [
        0.242,
        0.546,
        0.651,
        0.299,
        0.3,
        0.303,
        0.238,
        0.196,
        0.251,
        1,
        0.473,
        0.276
      ],
      "timbre": [
        51.525,
        160.066,
        55.077,
        -10.272,
        107.717,
        -39.904,
        5.638,
        14.203,
        31.612,
        -31.73,
        15.684,
        17.453
      ]
    },
    {
      "start": 140.52127,
      "duration": 0.07596,
      "confidence": 0.373,
      "loudness_start": -11.353,
      "loudness_max_time": 0.04264,
      "loudness_max": -6.409,
      "loudness_end": 0,
      "pitches": [
        0.472,
        0.801,
        1,
        0.487,
        0.399,
        0.349,
        0.191,
        0.203,
        0.214,
        0.594,
        0.251,
        0.392
      ],
      "timbre": [
        51.913,
        90.174,
        73.672,
        0.627,
        71.256,
        -34.656,
        -9.633,
        -41.009,
        -17.039,
        64.621,
        -6.436,
        6.029
      ]
    },
    {
      "start": 140.59723,
      "duration": 0.43542,
      "confidence": 0.71,
      "loudness_start": -8.263,
      "loudness_max_time": 0.06554,
      "loudness_max": 0.147,
      "loudness_end": 0,
      "pitches": [
        0.194,
        0.507,
        0.471,
        0.272,
        0.268,
        0.245,
        0.521,
        0.896,
        1,
        0.652,
        0.321,
        0.172
      ],
      "timbre": [
        52.982,
        72.701,
        42.64,
        13.12,
        41.917,
        -12.463,
        -2.635,
        -1.035,
        7.645,
        -9.065,
        -33.565,
        11.372
      ]
    },
    {
      "start": 141.03265,
      "duration": 0.08086,
      "confidence": 0.372,
      "loudness_start": -15.303,
      "loudness_max_time": 0.04139,
      "loudness_max": -12.432,
      "loudness_end": 0,
      "pitches": [
        0.228,
        0.573,
        0.214,
        0.271,
        0.439,
        0.329,
        0.219,
        0.164,
        0.298,
        1,
        0.234,
        0.24
      ],
      "timbre": [
        47.584,
        88.219,
        99.137,
        -14.005,
        50.078,
        -35.613,
        48.572,
        29.006,
        9.823,
        0.77,
        2.402,
        -5.01
      ]
    },
    {
      "start": 141.11351,
      "duration": 0.3307,
      "confidence": 0.818,
      "loudness_start": -11.79,
      "loudness_max_time": 0.07136,
      "loudness_max": -1.694,
      "loudness_end": 0,
      "pitches": [
        0.44,
        1,
        0.985,
        0.702,
        0.66,
        0.405,
        0.31,
        0.362,
        0.239,
        0.149,
        0.14,
        0.389
      ],
      "timbre": [
        49.599,
        100.439,
        31.616,
        8.875,
        15.762,
        -0.447,
        31.325,
        -15.748,
        -2.716,
        4.211,
        -52.936,
        14.448
      ]
    },
    {
      "start": 141.44421,
      "duration": 0.25029,
      "confidence": 1,
      "loudness_start": -19.463,
      "loudness_max_time": 0.04599,
      "loudness_max": -4.368,
      "loudness_end": 0,
      "pitches": [
        0.143,
        0.166,
        0.613,
        0.311,
        0.159,
        0.153,
        0.681,
        0.458,
        0.492,
        0.439,
        0.329,
        1
      ],
      "timbre": [
        52.083,
        80.317,
        111.994,
        63.218,
        66.029,
        2.447,
        45.115,
        -33.31,
        -16.6,
        10.577,
        0.341,
        32.258
      ]
    },
    {
      "start": 141.6945,
      "duration": 0.20322,
      "confidence": 0.894,
      "loudness_start": -12.035,
      "loudness_max_time": 0.01167,
      "loudness_max": -0.584,
      "loudness_end": 0,
      "pitches": [
        0.553,
        0.977,
        1,
        0.603,
        0.44,
        0.26,
        0.173,
        0.226,
        0.118,
        0.109,
        0.124,
        0.608
      ],
      "timbre": [
        56.289,
        68.268,
        -8.089,
        2.566,
        -3.389,
        -58.708,
        12.406,
        31.232,
        -3.508,
        6.164,
        1.441,
        6.968
      ]
    },
    {
      "start": 141.89774,
      "duration": 0.13311,
      "confidence": 0.189,
      "loudness_start": -8.136,
      "loudness_max_time": 0.02063,
      "loudness_max": -3.169,
      "loudness_end": 0,
      "pitches": [
        0.788,
        0.515,
        0.537,
        0.348,
        0.297,
        0.239,
        0.262,
        0.201,
        0.239,
        1,
        0.458,
        0.917
      ],
      "timbre": [
        53.096,
        121.882,
        44.956,
        48.171,
        31.325,
        -38.233,
        -18.622,
        -8.353,
        -19.287,
        -18.917,
        -12.655,
        2.464
      ]
    },
    {
      "start": 142.03084,
      "duration": 0.19111,
      "confidence": 0.631,
      "loudness_start": -12.392,
      "loudness_max_time": 0.06986,
      "loudness_max": -5.401,
      "loudness_end": 0,
      "pitches": [
        0.434,
        0.128,
        0.33,
        0.142,
        0.33,
        0.13,
        0.598,
        0.288,
        0.176,
        1,
        0.172,
        0.66
      ],
      "timbre": [
        51.803,
        107.173,
        90.672,
        -3.571,
        70.037,
        -10.359,
        -17.574,
        -11.001,
        -18.927,
        21.302,
        -2.202,
        10.098
      ]
    },
    {
      "start": 142.22195,
      "duration": 0.06268,
      "confidence": 0.486,
      "loudness_start": -8.988,
      "loudness_max_time": 0.00677,
      "loudness_max": -2.774,
      "loudness_end": 0,
      "pitches": [
        0.897,
        1,
        0.764,
        0.782,
        0.66,
        0.655,
        0.648,
        0.617,
        0.742,
        0.735,
        0.981,
        0.517
      ],
      "timbre": [
        54.56,
        -8.789,
        -7.971,
        -17.366,
        -17.384,
        -68.525,
        42.14,
        3.562,
        -14.704,
        7.527,
        -10.75,
        17.444
      ]
    },
    {
      "start": 142.28464,
      "duration": 0.2859,
      "confidence": 0.509,
      "loudness_start": -6.359,
      "loudness_max_time": 0.02159,
      "loudness_max": 1.272,
      "loudness_end": 0,
      "pitches": [
        0.915,
        0.821,
        0.351,
        0.235,
        0.165,
        0.118,
        0.429,
        0.158,
        0.089,
        0.274,
        0.136,
        1
      ],
      "timbre": [
        55.906,
        97.201,
        30.095,
        54.786,
        30.052,
        -46.003,
        58.958,
        3.611,
        19.237,
        5.92,
        5.234,
        23.524
      ]
    },
    {
      "start": 142.57053,
      "duration": 0.15678,
      "confidence": 0.264,
      "loudness_start": -9.516,
      "loudness_max_time": 0.11363,
      "loudness_max": -5.064,
      "loudness_end": 0,
      "pitches": [
        0.195,
        1,
        0.283,
        0.147,
        0.244,
        0.143,
        0.408,
        0.255,
        0.336,
        0.297,
        0.142,
        0.655
      ],
      "timbre": [
        53.322,
        67.281,
        72.992,
        -22.331,
        83.054,
        -34.32,
        -3.704,
        8.909,
        -0.902,
        -0.005,
        0.017,
        11.278
      ]
    },
    {
      "start": 142.7273,
      "duration": 0.4058,
      "confidence": 0.698,
      "loudness_start": -6.837,
      "loudness_max_time": 0.0216,
      "loudness_max": 0.478,
      "loudness_end": 0,
      "pitches": [
        0.205,
        0.345,
        0.306,
        0.159,
        0.179,
        0.234,
        0.536,
        0.881,
        1,
        0.595,
        0.242,
        0.229
      ],
      "timbre": [
        56.999,
        100.555,
        10.706,
        22.284,
        27.093,
        -33.372,
        -0.359,
        35.834,
        9.976,
        9.013,
        3.77,
        10.67
      ]
    },
    {
      "start": 143.1331,
      "duration": 0.12236,
      "confidence": 0.546,
      "loudness_start": -13.465,
      "loudness_max_time": 0.03232,
      "loudness_max": -5.933,
      "loudness_end": 0,
      "pitches": [
        0.419,
        0.63,
        0.309,
        0.216,
        0.377,
        0.638,
        0.608,
        0.67,
        1,
        0.669,
        0.436,
        0.491
      ],
      "timbre": [
        50.66,
        198.367,
        38.83,
        7.688,
        77.846,
        -13.529,
        7.467,
        30.754,
        30.383,
        -10.534,
        8.29,
        -17.969
      ]
    },
    {
      "start": 143.25546,
      "duration": 0.41098,
      "confidence": 0.663,
      "loudness_start": -11.593,
      "loudness_max_time": 0.01717,
      "loudness_max": -2.481,
      "loudness_end": 0,
      "pitches": [
        0.176,
        0.242,
        0.279,
        0.147,
        0.261,
        0.27,
        0.582,
        0.947,
        1,
        0.554,
        0.203,
        0.162
      ],
      "timbre": [
        53.203,
        81.215,
        -24.94,
        9.344,
        21.681,
        -42.6,
        3.441,
        -21.285,
        -9.24,
        20.166,
        -1.796,
        13.307
      ]
    },
    {
      "start": 143.66644,
      "duration": 0.11143,
      "confidence": 0.719,
      "loudness_start": -12.092,
      "loudness_max_time": 0.05743,
      "loudness_max": -4.743,
      "loudness_end": 0,
      "pitches": [
        0.072,
        0.186,
        1,
        0.344,
        0.241,
        0.059,
        0.236,
        0.157,
        0.223,
        0.374,
        0.107,
        0.057
      ],
      "timbre": [
        52.421,
        120.865,
        58.253,
        -37.763,
        48.514,
        8.325,
        -34.677,
        26.856,
        36.823,
        -17.831,
        5.529,
        13.35
      ]
    },
    {
      "start": 143.77786,
      "duration": 0.25546,
      "confidence": 0.608,
      "loudness_start": -7.874,
      "loudness_max_time": 0.01346,
      "loudness_max": -0.121,
      "loudness_end": 0,
      "pitches": [
        0.558,
        0.996,
        1,
        0.426,
        0.37,
        0.187,
        0.116,
        0.202,
        0.132,
        0.124,
        0.125,
        0.414
      ],
      "timbre": [
        55.733,
        75.957,
        -13.005,
        30.617,
        -1.368,
        -52.436,
        5.026,
        22.896,
        15.304,
        12.241,
        -6.772,
        7.187
      ]
    },
    {
      "start": 144.03333,
      "duration": 0.27274,
      "confidence": 0.304,
      "loudness_start": -10.4,
      "loudness_max_time": 0.04751,
      "loudness_max": -5.85,
      "loudness_end": 0,
      "pitches": [
        0.166,
        1,
        0.235,
        0.073,
        0.153,
        0.085,
        0.07,
        0.074,
        0.072,
        0.11,
        0.089,
        0.077
      ],
      "timbre": [
        51.101,
        97.96,
        7.109,
        -2.812,
        22.868,
        -1.832,
        -50.119,
        -1.678,
        5.226,
        -3.926,
        -30.066,
        18.345
      ]
    },
    {
      "start": 144.30608,
      "duration": 0.22635,
      "confidence": 0.905,
      "loudness_start": -15.418,
      "loudness_max_time": 0.00831,
      "loudness_max": -3.837,
      "loudness_end": 0,
      "pitches": [
        0.514,
        1,
        0.92,
        0.457,
        0.419,
        0.2,
        0.163,
        0.201,
        0.112,
        0.116,
        0.052,
        0.402
      ],
      "timbre": [
        53.499,
        22.53,
        -6.935,
        -9.899,
        -16.155,
        -45.451,
        18.28,
        8.243,
        -5.385,
        7.95,
        -24.25,
        3.471
      ]
    },
    {
      "start": 144.53242,
      "duration": 0.16272,
      "confidence": 0.327,
      "loudness_start": -13.939,
      "loudness_max_time": 0.074,
      "loudness_max": -8.265,
      "loudness_end": 0,
      "pitches": [
        0.445,
        0.578,
        1,
        0.377,
        0.338,
        0.403,
        0.418,
        0.434,
        0.356,
        0.725,
        0.639,
        0.554
      ],
      "timbre": [
        49.829,
        208.229,
        47.276,
        -15.097,
        75.624,
        -30.213,
        -15.349,
        0.3,
        23.161,
        -25.427,
        -1.959,
        14.405
      ]
    },
    {
      "start": 144.69514,
      "duration": 0.12177,
      "confidence": 0.387,
      "loudness_start": -12.2,
      "loudness_max_time": 0.06073,
      "loudness_max": -8.017,
      "loudness_end": 0,
      "pitches": [
        0.36,
        1,
        0.698,
        0.178,
        0.424,
        0.213,
        0.167,
        0.196,
        0.301,
        0.215,
        0.14,
        0.294
      ],
      "timbre": [
        50.536,
        145.841,
        93.638,
        -7.914,
        66.538,
        -26.003,
        -15.339,
        -20.172,
        -18.827,
        47.736,
        -5.947,
        4.297
      ]
    },
    {
      "start": 144.81693,
      "duration": 0.46993,
      "confidence": 0.809,
      "loudness_start": -9.362,
      "loudness_max_time": 0.01858,
      "loudness_max": 0.074,
      "loudness_end": 0,
      "pitches": [
        0.264,
        0.348,
        0.334,
        0.136,
        0.17,
        0.25,
        0.564,
        0.928,
        1,
        0.622,
        0.242,
        0.143
      ],
      "timbre": [
        54.223,
        70.7,
        -14.787,
        63.424,
        21.337,
        -28.643,
        -2.998,
        16.427,
        4.614,
        6.758,
        -3.328,
        5.933
      ]
    },
    {
      "start": 145.28685,
      "duration": 0.32531,
      "confidence": 0.965,
      "loudness_start": -15.647,
      "loudness_max_time": 0.07194,
      "loudness_max": -2.518,
      "loudness_end": 0,
      "pitches": [
        0.438,
        1,
        0.967,
        0.716,
        0.669,
        0.401,
        0.294,
        0.347,
        0.238,
        0.125,
        0.137,
        0.348
      ],
      "timbre": [
        48.161,
        110.014,
        26.983,
        -47.765,
        6.435,
        8.609,
        22.982,
        -14.123,
        5.724,
        -5.929,
        -36.401,
        19.634
      ]
    },
    {
      "start": 145.61215,
      "duration": 0.24975,
      "confidence": 0.822,
      "loudness_start": -19.087,
      "loudness_max_time": 0.02525,
      "loudness_max": -9.189,
      "loudness_end": 0,
      "pitches": [
        0.198,
        0.102,
        0.19,
        0.083,
        0.097,
        0.067,
        0.149,
        0.088,
        0.123,
        0.34,
        0.694,
        1
      ],
      "timbre": [
        48.75,
        64.833,
        66.892,
        34.708,
        54.408,
        -21.994,
        11.274,
        -14.136,
        2.1,
        30.878,
        -11.336,
        12.438
      ]
    },
    {
      "start": 145.8619,
      "duration": 0.27474,
      "confidence": 0.983,
      "loudness_start": -14.829,
      "loudness_max_time": 0.01778,
      "loudness_max": -0.585,
      "loudness_end": 0,
      "pitches": [
        0.588,
        1,
        0.996,
        0.433,
        0.387,
        0.185,
        0.142,
        0.215,
        0.113,
        0.09,
        0.141,
        0.611
      ],
      "timbre": [
        53.978,
        68.463,
        -30.901,
        37.881,
        5.66,
        -33.825,
        -0.604,
        9.867,
        -19.754,
        19.14,
        1.1,
        2.253
      ]
    },
    {
      "start": 146.13664,
      "duration": 0.24748,
      "confidence": 0.658,
      "loudness_start": -13.872,
      "loudness_max_time": 0.06433,
      "loudness_max": -7.442,
      "loudness_end": 0,
      "pitches": [
        0.169,
        0.106,
        0.143,
        0.11,
        0.129,
        0.082,
        0.25,
        0.132,
        0.126,
        0.254,
        0.271,
        1
      ],
      "timbre": [
        49.63,
        78.092,
        24.46,
        -50.457,
        37.447,
        -3.414,
        -39.148,
        37.812,
        19.146,
        -25.148,
        6.404,
        -10.077
      ]
    },
    {
      "start": 146.38412,
      "duration": 0.26912,
      "confidence": 0.863,
      "loudness_start": -16.658,
      "loudness_max_time": 0.02797,
      "loudness_max": -2.415,
      "loudness_end": 0,
      "pitches": [
        0.714,
        1,
        0.891,
        0.456,
        0.426,
        0.26,
        0.299,
        0.303,
        0.231,
        0.163,
        0.211,
        0.601
      ],
      "timbre": [
        53.734,
        18.973,
        -8.475,
        14.937,
        6.134,
        -31.375,
        24.67,
        -9.681,
        3.897,
        22.44,
        16.227,
        16.88
      ]
    },
    {
      "start": 146.65324,
      "duration": 0.12544,
      "confidence": 0.395,
      "loudness_start": -13.112,
      "loudness_max_time": 0.02393,
      "loudness_max": -6.561,
      "loudness_end": 0,
      "pitches": [
        0.265,
        0.566,
        0.169,
        0.161,
        0.333,
        0.196,
        0.256,
        0.172,
        0.493,
        1,
        0.296,
        0.201
      ],
      "timbre": [
        50.134,
        -4.516,
        22.089,
        21.123,
        45.08,
        -20.638,
        -1.137,
        -10.167,
        -5.363,
        5.029,
        -3.033,
        17.361
      ]
    },
    {
      "start": 146.77869,
      "duration": 0.1278,
      "confidence": 0.738,
      "loudness_start": -13.682,
      "loudness_max_time": 0.02602,
      "loudness_max": -4.057,
      "loudness_end": 0,
      "pitches": [
        0.306,
        0.321,
        0.214,
        0.144,
        0.363,
        0.268,
        0.192,
        0.23,
        0.697,
        1,
        0.283,
        0.346
      ],
      "timbre": [
        54.017,
        40.578,
        26.753,
        -16.188,
        34.515,
        -30.607,
        3.664,
        14.335,
        -1.127,
        9.289,
        16.937,
        3.313
      ]
    },
    {
      "start": 146.9065,
      "duration": 0.25002,
      "confidence": 0.671,
      "loudness_start": -6.861,
      "loudness_max_time": 0.01688,
      "loudness_max": 0.763,
      "loudness_end": 0,
      "pitches": [
        0.568,
        1,
        0.932,
        0.537,
        0.465,
        0.288,
        0.242,
        0.324,
        0.239,
        0.407,
        0.166,
        0.471
      ],
      "timbre": [
        57.735,
        70.429,
        1.523,
        1.3,
        17.745,
        -45.593,
        -1.302,
        20.762,
        15.073,
        26.466,
        8.147,
        4.642
      ]
    },
    {
      "start": 147.15651,
      "duration": 0.26658,
      "confidence": 0.455,
      "loudness_start": -9.466,
      "loudness_max_time": 0.06379,
      "loudness_max": -3.775,
      "loudness_end": 0,
      "pitches": [
        0.608,
        0.371,
        0.529,
        0.561,
        0.987,
        0.589,
        0.996,
        0.491,
        0.421,
        1,
        0.672,
        0.732
      ],
      "timbre": [
        53.636,
        49.434,
        41.246,
        6.147,
        43.72,
        -20.089,
        14.684,
        -4.647,
        8.937,
        8.612,
        -15.275,
        23.094
      ]
    },
    {
      "start": 147.42308,
      "duration": 0.1629,
      "confidence": 0.581,
      "loudness_start": -12.011,
      "loudness_max_time": 0.02168,
      "loudness_max": -4.018,
      "loudness_end": 0,
      "pitches": [
        1,
        0.577,
        0.092,
        0.091,
        0.162,
        0.145,
        0.384,
        0.387,
        0.963,
        0.854,
        0.948,
        0.188
      ],
      "timbre": [
        52.116,
        -2.422,
        0.366,
        19.277,
        24.267,
        -36.754,
        11.452,
        -20.812,
        -4.088,
        21.922,
        6.068,
        6.372
      ]
    },
    {
      "start": 147.58598,
      "duration": 0.33125,
      "confidence": 0.097,
      "loudness_start": -10.609,
      "loudness_max_time": 0.03642,
      "loudness_max": -7.894,
      "loudness_end": 0,
      "pitches": [
        0.287,
        1,
        0.83,
        0.624,
        0.941,
        0.266,
        0.253,
        0.172,
        0.801,
        0.927,
        0.291,
        0.351
      ],
      "timbre": [
        50.353,
        -9.461,
        36.982,
        -3.328,
        50.71,
        -37.419,
        -4.234,
        6.211,
        30.792,
        -7.759,
        -0.834,
        10.173
      ]
    },
    {
      "start": 147.91724,
      "duration": 0.14481,
      "confidence": 0.841,
      "loudness_start": -11.808,
      "loudness_max_time": 0.07407,
      "loudness_max": -1.767,
      "loudness_end": 0,
      "pitches": [
        0.173,
        0.188,
        0.104,
        0.113,
        0.167,
        0.073,
        0.106,
        0.204,
        0.307,
        1,
        0.541,
        0.136
      ],
      "timbre": [
        54.588,
        59.78,
        102.886,
        -18.808,
        105.358,
        13.594,
        -20.079,
        7.743,
        1.694,
        9.323,
        13.653,
        10.389
      ]
    },
    {
      "start": 148.06204,
      "duration": 0.11569,
      "confidence": 0.196,
      "loudness_start": -6.362,
      "loudness_max_time": 0.05229,
      "loudness_max": -2.949,
      "loudness_end": 0,
      "pitches": [
        0.162,
        0.33,
        0.217,
        0.189,
        0.354,
        0.158,
        0.687,
        0.277,
        0.311,
        1,
        0.266,
        0.818
      ],
      "timbre": [
        55.06,
        157.584,
        106.095,
        40.823,
        92.497,
        -8.416,
        -62.536,
        -28.304,
        23.9,
        -18.011,
        -17.811,
        4.665
      ]
    },
    {
      "start": 148.17773,
      "duration": 0.2732,
      "confidence": 0.264,
      "loudness_start": -10.164,
      "loudness_max_time": 0.06563,
      "loudness_max": -5.666,
      "loudness_end": 0,
      "pitches": [
        0.112,
        0.381,
        0.251,
        0.181,
        1,
        0.335,
        0.285,
        0.184,
        0.614,
        0.715,
        0.157,
        0.148
      ],
      "timbre": [
        52.208,
        57.409,
        80.858,
        6.03,
        85.3,
        -28.897,
        -32.402,
        -4.955,
        12.487,
        15.411,
        -5.932,
        -5.328
      ]
    },
    {
      "start": 148.45093,
      "duration": 0.23814,
      "confidence": 0.492,
      "loudness_start": -11.112,
      "loudness_max_time": 0.06449,
      "loudness_max": -6.261,
      "loudness_end": 0,
      "pitches": [
        0.891,
        0.49,
        0.322,
        0.298,
        0.363,
        0.221,
        0.608,
        0.392,
        0.912,
        1,
        0.664,
        0.911
      ],
      "timbre": [
        51.399,
        3.871,
        41.488,
        15.659,
        42.052,
        -23.025,
        13.02,
        -3.225,
        25.364,
        12.545,
        -15.679,
        2.083
      ]
    },
    {
      "start": 148.68907,
      "duration": 0.29592,
      "confidence": 0.469,
      "loudness_start": -12.026,
      "loudness_max_time": 0.13069,
      "loudness_max": -7.121,
      "loudness_end": 0,
      "pitches": [
        0.437,
        0.687,
        0.691,
        0.584,
        1,
        0.378,
        0.799,
        0.371,
        0.348,
        0.793,
        0.356,
        0.681
      ],
      "timbre": [
        49.708,
        -7.809,
        55.79,
        -19.688,
        60.359,
        -27.336,
        28.377,
        6.561,
        7.908,
        -13.637,
        -11.937,
        23.467
      ]
    },
    {
      "start": 148.98499,
      "duration": 0.14535,
      "confidence": 0.837,
      "loudness_start": -12.188,
      "loudness_max_time": 0.07163,
      "loudness_max": -1.639,
      "loudness_end": 0,
      "pitches": [
        0.132,
        0.272,
        0.082,
        0.133,
        0.225,
        0.052,
        0.102,
        0.17,
        0.571,
        1,
        0.153,
        0.104
      ],
      "timbre": [
        55.156,
        67.747,
        95.104,
        -34.321,
        88.451,
        0.703,
        -30.035,
        37.323,
        3.81,
        17.424,
        11.353,
        2.97
      ]
    },
    {
      "start": 149.13034,
      "duration": 0.12771,
      "confidence": 0.238,
      "loudness_start": -4.946,
      "loudness_max_time": 0.028,
      "loudness_max": -1.141,
      "loudness_end": 0,
      "pitches": [
        0.112,
        0.211,
        0.219,
        0.109,
        0.388,
        0.174,
        0.094,
        0.148,
        0.506,
        1,
        0.348,
        0.161
      ],
      "timbre": [
        56.526,
        128.967,
        79.061,
        40.443,
        68.342,
        -23.691,
        -50.88,
        -36.414,
        13.672,
        7.9,
        -12.281,
        10.839
      ]
    },
    {
      "start": 149.25806,
      "duration": 0.26685,
      "confidence": 0.48,
      "loudness_start": -7.363,
      "loudness_max_time": 0.09737,
      "loudness_max": -1.803,
      "loudness_end": 0,
      "pitches": [
        0.101,
        0.422,
        0.244,
        0.227,
        0.867,
        0.104,
        0.1,
        0.223,
        0.384,
        1,
        0.149,
        0.241
      ],
      "timbre": [
        55.193,
        112.318,
        106.731,
        11.917,
        73.953,
        -4.388,
        -26.872,
        4.245,
        23.994,
        -7.814,
        -15.437,
        -13.795
      ]
    },
    {
      "start": 149.5249,
      "duration": 0.33673,
      "confidence": 0.852,
      "loudness_start": -11.152,
      "loudness_max_time": 0.03696,
      "loudness_max": 0.635,
      "loudness_end": 0,
      "pitches": [
        0.75,
        0.722,
        0.257,
        0.191,
        0.224,
        0.225,
        0.463,
        0.622,
        0.736,
        0.469,
        0.589,
        1
      ],
      "timbre": [
        57.088,
        78.207,
        72.949,
        27.493,
        14.434,
        -11.009,
        47.004,
        6.561,
        1.692,
        -4.534,
        -6.102,
        21.242
      ]
    },
    {
      "start": 149.86163,
      "duration": 0.11569,
      "confidence": 0.615,
      "loudness_start": -7.799,
      "loudness_max_time": 0.05412,
      "loudness_max": -1.863,
      "loudness_end": 0,
      "pitches": [
        0.416,
        1,
        0.524,
        0.306,
        0.556,
        0.366,
        0.608,
        0.206,
        0.258,
        0.249,
        0.139,
        0.857
      ],
      "timbre": [
        55.898,
        101.203,
        87.002,
        7.856,
        62.281,
        -2.896,
        3.411,
        -3.12,
        -10.181,
        -22.62,
        6.153,
        31.974
      ]
    },
    {
      "start": 149.97733,
      "duration": 0.59288,
      "confidence": 0.566,
      "loudness_start": -5.33,
      "loudness_max_time": 0.07625,
      "loudness_max": 0.005,
      "loudness_end": 0,
      "pitches": [
        0.352,
        0.485,
        0.368,
        0.199,
        0.42,
        0.216,
        0.68,
        0.822,
        0.583,
        0.571,
        0.363,
        1
      ],
      "timbre": [
        57.148,
        119.711,
        98.663,
        5.854,
        59.028,
        -16.326,
        17.651,
        15.588,
        0.526,
        -9.197,
        5.074,
        17.38
      ]
    },
    {
      "start": 150.5702,
      "duration": 0.10385,
      "confidence": 0.423,
      "loudness_start": -3.457,
      "loudness_max_time": 0.03621,
      "loudness_max": 0.125,
      "loudness_end": 0,
      "pitches": [
        1,
        0.86,
        0.166,
        0.202,
        0.376,
        0.302,
        0.557,
        0.573,
        0.903,
        0.872,
        0.998,
        0.159
      ],
      "timbre": [
        59.132,
        99.58,
        33.942,
        -5.893,
        19.807,
        -51.819,
        41.75,
        21.432,
        16.677,
        9.034,
        -5.137,
        20.372
      ]
    },
    {
      "start": 150.67406,
      "duration": 0.24413,
      "confidence": 0.033,
      "loudness_start": -2.058,
      "loudness_max_time": 0.03808,
      "loudness_max": 1.061,
      "loudness_end": 0,
      "pitches": [
        0.691,
        1,
        0.465,
        0.377,
        0.22,
        0.203,
        0.121,
        0.14,
        0.239,
        0.126,
        0.11,
        0.675
      ],
      "timbre": [
        59.351,
        111.201,
        54.393,
        -0.877,
        22.986,
        -44.454,
        33.988,
        26.403,
        6.694,
        1.073,
        8.528,
        22.517
      ]
    },
    {
      "start": 150.91818,
      "duration": 0.17397,
      "confidence": 0.212,
      "loudness_start": -3.093,
      "loudness_max_time": 0.0634,
      "loudness_max": 0.71,
      "loudness_end": 0,
      "pitches": [
        0.322,
        0.389,
        0.516,
        1,
        0.751,
        0.318,
        0.222,
        0.347,
        0.551,
        0.425,
        0.439,
        0.504
      ],
      "timbre": [
        58.174,
        91.752,
        75.559,
        19.757,
        45.73,
        -35.059,
        35.524,
        4.557,
        0.31,
        14.831,
        -21.67,
        41.355
      ]
    },
    {
      "start": 151.09215,
      "duration": 0.33669,
      "confidence": 0.248,
      "loudness_start": -4.562,
      "loudness_max_time": 0.0783,
      "loudness_max": -0.414,
      "loudness_end": 0,
      "pitches": [
        0.6,
        1,
        0.342,
        0.418,
        0.722,
        0.458,
        0.342,
        0.259,
        0.496,
        0.185,
        0.17,
        0.676
      ],
      "timbre": [
        57.816,
        71.927,
        47.812,
        -23.479,
        16.974,
        -42.939,
        28.04,
        32.027,
        -12.854,
        5.494,
        -1.055,
        13.323
      ]
    },
    {
      "start": 151.42883,
      "duration": 0.16254,
      "confidence": 0.248,
      "loudness_start": -3.501,
      "loudness_max_time": 0.07281,
      "loudness_max": 0.592,
      "loudness_end": 0,
      "pitches": [
        0.311,
        0.957,
        0.337,
        0.328,
        1,
        0.719,
        0.532,
        0.439,
        0.25,
        0.355,
        0.383,
        0.439
      ],
      "timbre": [
        58.348,
        98.524,
        39.836,
        -8.037,
        31.251,
        -35.401,
        43.395,
        6.413,
        -4.787,
        14.842,
        -25.695,
        26.692
      ]
    },
    {
      "start": 151.59138,
      "duration": 0.10467,
      "confidence": 0.061,
      "loudness_start": -3.675,
      "loudness_max_time": 0.02965,
      "loudness_max": -0.607,
      "loudness_end": 0,
      "pitches": [
        0.459,
        1,
        0.217,
        0.097,
        0.14,
        0.232,
        0.369,
        0.362,
        0.455,
        0.317,
        0.218,
        0.313
      ],
      "timbre": [
        57.511,
        55.231,
        21.217,
        6.673,
        -6.064,
        -41.571,
        47.229,
        17.527,
        -15.337,
        11.709,
        -8.245,
        17.32
      ]
    },
    {
      "start": 151.69604,
      "duration": 0.13342,
      "confidence": 0.125,
      "loudness_start": -4.517,
      "loudness_max_time": 0.04879,
      "loudness_max": -0.917,
      "loudness_end": 0,
      "pitches": [
        0.102,
        0.234,
        0.143,
        0.151,
        0.515,
        0.495,
        1,
        0.963,
        0.849,
        0.987,
        0.275,
        0.022
      ],
      "timbre": [
        57.206,
        81.135,
        66.388,
        -4.699,
        6.809,
        -30.5,
        54.879,
        11.145,
        5.88,
        5.848,
        -11.518,
        -11.975
      ]
    },
    {
      "start": 151.82948,
      "duration": 0.1629,
      "confidence": 0.257,
      "loudness_start": -3.524,
      "loudness_max_time": 0.05907,
      "loudness_max": -0.514,
      "loudness_end": 0,
      "pitches": [
        0.046,
        0.296,
        0.231,
        0.172,
        0.867,
        0.859,
        1,
        0.933,
        0.237,
        0.368,
        0.085,
        0.029
      ],
      "timbre": [
        58.026,
        86.797,
        78.224,
        10.081,
        21.7,
        -32.98,
        60.641,
        20.733,
        6.209,
        1.88,
        -17.043,
        1.179
      ]
    },
    {
      "start": 151.99239,
      "duration": 0.12177,
      "confidence": 0.128,
      "loudness_start": -3.421,
      "loudness_max_time": 0.0067,
      "loudness_max": -0.062,
      "loudness_end": 0,
      "pitches": [
        0.079,
        0.485,
        0.43,
        0.409,
        0.995,
        0.924,
        1,
        0.953,
        0.471,
        0.576,
        0.095,
        0.022
      ],
      "timbre": [
        58.277,
        98.593,
        72.877,
        16.816,
        10.473,
        -47.76,
        57.053,
        4.947,
        -10.101,
        5.795,
        -21.241,
        15.652
      ]
    },
    {
      "start": 152.11415,
      "duration": 0.25542,
      "confidence": 0.27,
      "loudness_start": -3.35,
      "loudness_max_time": 0.02815,
      "loudness_max": 0.171,
      "loudness_end": 0,
      "pitches": [
        0.545,
        1,
        0.993,
        0.586,
        0.613,
        0.246,
        0.282,
        0.309,
        0.249,
        0.416,
        0.128,
        0.421
      ],
      "timbre": [
        58.785,
        92.889,
        45.115,
        5.788,
        13.049,
        -41.269,
        36.86,
        20.316,
        -2.694,
        8.756,
        1.836,
        7.069
      ]
    },
    {
      "start": 152.36957,
      "duration": 0.28431,
      "confidence": 0.345,
      "loudness_start": -4.439,
      "loudness_max_time": 0.07527,
      "loudness_max": -0.656,
      "loudness_end": 0,
      "pitches": [
        0.384,
        1,
        0.189,
        0.098,
        0.148,
        0.07,
        0.078,
        0.049,
        0.152,
        0.292,
        0.174,
        0.071
      ],
      "timbre": [
        57.111,
        94.282,
        64.716,
        1.495,
        16.093,
        -26.505,
        35.294,
        -2.819,
        -19.003,
        21.338,
        -16.59,
        -0.047
      ]
    },
    {
      "start": 152.65388,
      "duration": 0.14209,
      "confidence": 0.077,
      "loudness_start": -5.486,
      "loudness_max_time": 0.00799,
      "loudness_max": -2.463,
      "loudness_end": 0,
      "pitches": [
        0.315,
        1,
        0.179,
        0.128,
        0.169,
        0.138,
        0.551,
        0.556,
        0.806,
        0.852,
        0.457,
        0.024
      ],
      "timbre": [
        55.146,
        38.784,
        -5.917,
        12.317,
        -8.981,
        -53.361,
        27.62,
        8.51,
        10.599,
        11.461,
        -15,
        10.101
      ]
    },
    {
      "start": 152.79596,
      "duration": 0.12503,
      "confidence": 0.217,
      "loudness_start": -8.662,
      "loudness_max_time": 0.0163,
      "loudness_max": -4.272,
      "loudness_end": 0,
      "pitches": [
        0.268,
        0.407,
        0.349,
        0.251,
        0.676,
        0.662,
        0.888,
        0.871,
        0.788,
        1,
        0.561,
        0.027
      ],
      "timbre": [
        54.172,
        109.312,
        45.402,
        -0.908,
        30.045,
        -44.97,
        33.384,
        -12.745,
        28.368,
        8.915,
        -10.879,
        5.464
      ]
    },
    {
      "start": 152.921,
      "duration": 0.25528,
      "confidence": 0.845,
      "loudness_start": -7.831,
      "loudness_max_time": 0.03028,
      "loudness_max": 3.234,
      "loudness_end": 0,
      "pitches": [
        0.419,
        1,
        0.249,
        0.06,
        0.037,
        0.019,
        0.033,
        0.017,
        0.096,
        0.26,
        0.055,
        0.02
      ],
      "timbre": [
        59.713,
        109.065,
        51.992,
        24.971,
        28.914,
        -6.761,
        12.976,
        -0.678,
        -8.327,
        18.6,
        6.914,
        2.977
      ]
    },
    {
      "start": 153.17628,
      "duration": 0.22014,
      "confidence": 0.309,
      "loudness_start": -3.673,
      "loudness_max_time": 0.03183,
      "loudness_max": 1.272,
      "loudness_end": 0,
      "pitches": [
        0.691,
        1,
        0.916,
        0.582,
        0.39,
        0.225,
        0.214,
        0.29,
        0.228,
        0.335,
        0.12,
        0.517
      ],
      "timbre": [
        57.075,
        75.972,
        2.014,
        31.001,
        3.16,
        -52.095,
        16.109,
        10.626,
        -5.526,
        -6.657,
        -3.997,
        -3.269
      ]
    },
    {
      "start": 153.39642,
      "duration": 0.56327,
      "confidence": 0.504,
      "loudness_start": -7.205,
      "loudness_max_time": 0.11268,
      "loudness_max": -0.51,
      "loudness_end": 0,
      "pitches": [
        0.365,
        0.702,
        1,
        0.616,
        0.42,
        0.389,
        0.362,
        0.338,
        0.604,
        0.562,
        0.231,
        0.374
      ],
      "timbre": [
        55.269,
        57.31,
        39.3,
        -2.381,
        25.667,
        -15.472,
        38.338,
        19.729,
        -8.888,
        3.655,
        -36.309,
        5.993
      ]
    },
    {
      "start": 153.95969,
      "duration": 0.24345,
      "confidence": 0.955,
      "loudness_start": -11.978,
      "loudness_max_time": 0.03509,
      "loudness_max": 0.317,
      "loudness_end": 0,
      "pitches": [
        0.703,
        1,
        0.073,
        0.012,
        0.035,
        0.028,
        0.011,
        0.049,
        0.201,
        0.107,
        0.021,
        0.016
      ],
      "timbre": [
        57.676,
        75.592,
        56.878,
        3.223,
        29.347,
        -1.368,
        15.181,
        27.832,
        8.743,
        9.453,
        -7.27,
        -18.862
      ]
    },
    {
      "start": 154.20312,
      "duration": 0.25605,
      "confidence": 0.529,
      "loudness_start": -10.18,
      "loudness_max_time": 0.02412,
      "loudness_max": -0.707,
      "loudness_end": 0,
      "pitches": [
        0.719,
        1,
        0.732,
        0.39,
        0.338,
        0.171,
        0.111,
        0.157,
        0.107,
        0.095,
        0.055,
        0.304
      ],
      "timbre": [
        54.515,
        67.128,
        -24.688,
        21.536,
        4.793,
        -23.234,
        22.086,
        14.694,
        2.625,
        -3.546,
        14.233,
        -0.818
      ]
    },
    {
      "start": 154.45918,
      "duration": 0.28431,
      "confidence": 0.934,
      "loudness_start": -12.095,
      "loudness_max_time": 0.05228,
      "loudness_max": 0.297,
      "loudness_end": 0,
      "pitches": [
        0.198,
        1,
        0.274,
        0.309,
        0.402,
        0.295,
        0.08,
        0.074,
        0.074,
        0.127,
        0.04,
        0.243
      ],
      "timbre": [
        55.675,
        72.564,
        15.173,
        4.519,
        38.804,
        7.018,
        11.87,
        3.698,
        -0.013,
        -11.716,
        -21.735,
        -17.844
      ]
    },
    {
      "start": 154.74348,
      "duration": 0.50141,
      "confidence": 0.694,
      "loudness_start": -9.159,
      "loudness_max_time": 0.0407,
      "loudness_max": -0.187,
      "loudness_end": 0,
      "pitches": [
        0.193,
        0.412,
        0.285,
        0.517,
        1,
        0.664,
        0.259,
        0.658,
        0.528,
        0.39,
        0.119,
        0.236
      ],
      "timbre": [
        57.615,
        81.004,
        11.153,
        -22.714,
        1.395,
        -25.739,
        -4.745,
        18.387,
        14.598,
        -3.09,
        -10.407,
        -11.825
      ]
    },
    {
      "start": 155.2449,
      "duration": 0.54385,
      "confidence": 0.747,
      "loudness_start": -7.272,
      "loudness_max_time": 0.02925,
      "loudness_max": 0.18,
      "loudness_end": 0,
      "pitches": [
        0.149,
        0.319,
        0.513,
        0.777,
        1,
        0.177,
        0.314,
        0.48,
        0.541,
        0.438,
        0.21,
        0.383
      ],
      "timbre": [
        57.241,
        79.429,
        21.348,
        8.757,
        13.688,
        -15.702,
        37.284,
        3.489,
        7.251,
        13.522,
        0.556,
        1.301
      ]
    },
    {
      "start": 155.78876,
      "duration": 0.20576,
      "confidence": 0.281,
      "loudness_start": -7.195,
      "loudness_max_time": 0.00459,
      "loudness_max": -2.696,
      "loudness_end": 0,
      "pitches": [
        0.563,
        1,
        0.807,
        0.446,
        0.405,
        0.21,
        0.302,
        0.141,
        0.117,
        0.113,
        0.067,
        0.483
      ],
      "timbre": [
        54.139,
        51.35,
        -15.691,
        -18.519,
        -10.407,
        -74.664,
        26.978,
        3.366,
        1.067,
        3.795,
        -3.487,
        12.953
      ]
    },
    {
      "start": 155.9945,
      "duration": 0.2878,
      "confidence": 0.788,
      "loudness_start": -9.39,
      "loudness_max_time": 0.0778,
      "loudness_max": -0.31,
      "loudness_end": 0,
      "pitches": [
        0.119,
        0.445,
        0.141,
        0.195,
        0.182,
        0.219,
        1,
        0.24,
        0.196,
        0.339,
        0.237,
        0.12
      ],
      "timbre": [
        56.566,
        77.685,
        71.725,
        -34.366,
        15.943,
        -1.283,
        54.855,
        55.569,
        3.008,
        11.277,
        2.89,
        11.214
      ]
    },
    {
      "start": 156.2823,
      "duration": 0.26054,
      "confidence": 0.407,
      "loudness_start": -4.612,
      "loudness_max_time": 0.05028,
      "loudness_max": 1.53,
      "loudness_end": 0,
      "pitches": [
        0.474,
        1,
        0.998,
        0.616,
        0.661,
        0.264,
        0.254,
        0.31,
        0.186,
        0.409,
        0.148,
        0.38
      ],
      "timbre": [
        58.44,
        119.943,
        24.975,
        -3.305,
        16.509,
        -28.426,
        38.181,
        22.864,
        -2.32,
        21.873,
        -10.791,
        26.436
      ]
    },
    {
      "start": 156.54286,
      "duration": 0.40884,
      "confidence": 0.691,
      "loudness_start": -8.352,
      "loudness_max_time": 0.04973,
      "loudness_max": 0.37,
      "loudness_end": 0,
      "pitches": [
        0.23,
        0.356,
        0.755,
        1,
        0.554,
        0.131,
        0.196,
        0.092,
        0.146,
        0.319,
        0.132,
        0.085
      ],
      "timbre": [
        57.743,
        94.305,
        24.085,
        4.58,
        21.568,
        -4.312,
        -13.436,
        6.865,
        1.117,
        1.618,
        -16.516,
        -15.041
      ]
    },
    {
      "start": 156.9517,
      "duration": 0.12594,
      "confidence": 0.246,
      "loudness_start": -8.436,
      "loudness_max_time": 0.04306,
      "loudness_max": -5.325,
      "loudness_end": 0,
      "pitches": [
        0.167,
        0.217,
        0.153,
        0.111,
        0.579,
        0.572,
        0.982,
        0.976,
        0.929,
        1,
        0.499,
        0.017
      ],
      "timbre": [
        52.971,
        116.045,
        27.856,
        -10.945,
        8.564,
        -22.02,
        25.454,
        -4.126,
        32.02,
        -11.26,
        -8.574,
        -4.75
      ]
    },
    {
      "start": 157.07764,
      "duration": 0.27247,
      "confidence": 0.785,
      "loudness_start": -9.599,
      "loudness_max_time": 0.03915,
      "loudness_max": 0.668,
      "loudness_end": 0,
      "pitches": [
        0.411,
        1,
        0.215,
        0.047,
        0.047,
        0.024,
        0.046,
        0.014,
        0.041,
        0.172,
        0.043,
        0.034
      ],
      "timbre": [
        57.963,
        112.746,
        58.851,
        32.276,
        43.788,
        -31.481,
        54.665,
        -7.738,
        4.224,
        15.116,
        -6.169,
        28.66
      ]
    },
    {
      "start": 157.35011,
      "duration": 0.22045,
      "confidence": 0.512,
      "loudness_start": -5.742,
      "loudness_max_time": 0.007,
      "loudness_max": 0.235,
      "loudness_end": 0,
      "pitches": [
        0.69,
        1,
        0.905,
        0.601,
        0.815,
        0.243,
        0.175,
        0.306,
        0.261,
        0.476,
        0.148,
        0.5
      ],
      "timbre": [
        58.406,
        59.581,
        9.961,
        4.658,
        30.551,
        -49.183,
        16.975,
        -12.12,
        -1.131,
        -2.837,
        -11.717,
        8.256
      ]
    },
    {
      "start": 157.57057,
      "duration": 0.25814,
      "confidence": 0.076,
      "loudness_start": -4.34,
      "loudness_max_time": 0.05294,
      "loudness_max": -1.998,
      "loudness_end": 0,
      "pitches": [
        0.292,
        1,
        0.687,
        0.134,
        0.181,
        0.036,
        0.04,
        0.052,
        0.115,
        0.307,
        0.053,
        0.032
      ],
      "timbre": [
        56.504,
        6.409,
        50.945,
        6.184,
        44.159,
        -36.691,
        22.341,
        17.71,
        -23.98,
        2.398,
        -15.301,
        8.673
      ]
    },
    {
      "start": 157.8287,
      "duration": 0.28181,
      "confidence": 0.315,
      "loudness_start": -6.849,
      "loudness_max_time": 0.04924,
      "loudness_max": -1.587,
      "loudness_end": 0,
      "pitches": [
        0.459,
        0.938,
        1,
        0.528,
        0.476,
        0.316,
        0.229,
        0.254,
        0.209,
        0.101,
        0.085,
        0.287
      ],
      "timbre": [
        54.405,
        31.604,
        -16.529,
        -11.638,
        34.397,
        -33.157,
        11.15,
        16.319,
        -3.658,
        -3.522,
        -15.277,
        -16.121
      ]
    },
    {
      "start": 158.11052,
      "duration": 0.27882,
      "confidence": 0.862,
      "loudness_start": -10.396,
      "loudness_max_time": 0.11667,
      "loudness_max": -0.567,
      "loudness_end": 0,
      "pitches": [
        0.57,
        1,
        0.06,
        0.009,
        0.017,
        0.02,
        0.01,
        0.029,
        0.148,
        0.104,
        0.029,
        0.015
      ],
      "timbre": [
        56.658,
        58.406,
        8.468,
        -12.486,
        40.561,
        16.38,
        -21.88,
        -22.421,
        8.501,
        -7.537,
        -9.977,
        -8.711
      ]
    },
    {
      "start": 158.38934,
      "duration": 0.25533,
      "confidence": 0.608,
      "loudness_start": -6.697,
      "loudness_max_time": 0.01132,
      "loudness_max": -0.074,
      "loudness_end": 0,
      "pitches": [
        0.712,
        1,
        0.631,
        0.269,
        0.272,
        0.132,
        0.083,
        0.144,
        0.083,
        0.088,
        0.064,
        0.316
      ],
      "timbre": [
        55.624,
        73.225,
        -19.734,
        25.162,
        -0.23,
        -61.66,
        1.936,
        18.427,
        0.783,
        -10.44,
        -15.278,
        -3.78
      ]
    },
    {
      "start": 158.64467,
      "duration": 0.27293,
      "confidence": 0.976,
      "loudness_start": -11.205,
      "loudness_max_time": 0.03997,
      "loudness_max": 1.412,
      "loudness_end": 0,
      "pitches": [
        0.212,
        1,
        0.28,
        0.228,
        0.314,
        0.223,
        0.055,
        0.039,
        0.09,
        0.172,
        0.07,
        0.199
      ],
      "timbre": [
        58.039,
        82.016,
        19.207,
        13.616,
        29.31,
        -3.294,
        0.632,
        -2.525,
        12.32,
        3.257,
        -4.088,
        1.502
      ]
    },
    {
      "start": 158.9176,
      "duration": 0.3249,
      "confidence": 0.471,
      "loudness_start": -5.383,
      "loudness_max_time": 0.01316,
      "loudness_max": -0.741,
      "loudness_end": 0,
      "pitches": [
        0.513,
        0.955,
        1,
        0.29,
        0.472,
        0.192,
        0.119,
        0.136,
        0.172,
        0.199,
        0.146,
        0.479
      ],
      "timbre": [
        57.782,
        103.99,
        2.223,
        -31.633,
        -16.732,
        -38.51,
        -42.221,
        -5.439,
        33.821,
        -11.932,
        12.285,
        -20.479
      ]
    },
    {
      "start": 159.2425,
      "duration": 0.38889,
      "confidence": 0.12,
      "loudness_start": -4.964,
      "loudness_max_time": 0.20124,
      "loudness_max": 0.815,
      "loudness_end": 0,
      "pitches": [
        0.114,
        0.238,
        0.48,
        0.661,
        1,
        0.536,
        0.378,
        0.232,
        0.246,
        0.246,
        0.22,
        0.13
      ],
      "timbre": [
        57.265,
        80.487,
        41.612,
        -11.148,
        12.936,
        -41.997,
        32.798,
        22.527,
        4.078,
        10.518,
        -27,
        7.458
      ]
    },
    {
      "start": 159.63138,
      "duration": 0.57397,
      "confidence": 0.468,
      "loudness_start": -6.33,
      "loudness_max_time": 0.07922,
      "loudness_max": -1.161,
      "loudness_end": 0,
      "pitches": [
        0.532,
        1,
        0.578,
        0.87,
        0.609,
        0.333,
        0.376,
        0.412,
        0.536,
        0.58,
        0.473,
        0.408
      ],
      "timbre": [
        56.037,
        90.192,
        -8.642,
        -27.97,
        43.746,
        -27.228,
        13.14,
        -15.946,
        -2.241,
        1.846,
        -30.051,
        18.825
      ]
    },
    {
      "start": 160.20535,
      "duration": 0.25556,
      "confidence": 0.819,
      "loudness_start": -10.858,
      "loudness_max_time": 0.02452,
      "loudness_max": -0.085,
      "loudness_end": 0,
      "pitches": [
        0.076,
        0.326,
        0.064,
        0.038,
        0.155,
        0.256,
        1,
        0.215,
        0.074,
        0.171,
        0.097,
        0.074
      ],
      "timbre": [
        57.731,
        113.751,
        44.889,
        7.847,
        0.734,
        -27.446,
        49.588,
        7.238,
        -34.165,
        -2.314,
        0.317,
        14.58
      ]
    },
    {
      "start": 160.4609,
      "duration": 0.27787,
      "confidence": 0.501,
      "loudness_start": -5.94,
      "loudness_max_time": 0.02745,
      "loudness_max": 0.033,
      "loudness_end": 0,
      "pitches": [
        0.535,
        1,
        0.953,
        0.497,
        0.466,
        0.223,
        0.558,
        0.275,
        0.131,
        0.122,
        0.107,
        0.436
      ],
      "timbre": [
        57.446,
        77.869,
        32.028,
        9.043,
        10.363,
        -40.561,
        40.089,
        37.131,
        -8.39,
        0.331,
        14.021,
        -5.613
      ]
    },
    {
      "start": 160.73878,
      "duration": 0.22213,
      "confidence": 0.413,
      "loudness_start": -5.972,
      "loudness_max_time": 0.06041,
      "loudness_max": -1.257,
      "loudness_end": 0,
      "pitches": [
        0.501,
        1,
        0.158,
        0.082,
        0.119,
        0.056,
        0.056,
        0.023,
        0.09,
        0.128,
        0.059,
        0.059
      ],
      "timbre": [
        56.123,
        80.074,
        28.291,
        18.768,
        18.44,
        -19.571,
        21.562,
        -2.522,
        -11.167,
        -4.363,
        -24.547,
        -27.596
      ]
    },
    {
      "start": 160.9609,
      "duration": 0.30753,
      "confidence": 0.803,
      "loudness_start": -7.637,
      "loudness_max_time": 0.09625,
      "loudness_max": 1.592,
      "loudness_end": 0,
      "pitches": [
        0.578,
        1,
        0.625,
        0.601,
        0.681,
        0.351,
        0.26,
        0.279,
        0.187,
        0.132,
        0.099,
        0.406
      ],
      "timbre": [
        56.025,
        95.419,
        23.778,
        -18.965,
        5.231,
        3.58,
        20.486,
        30.306,
        -3.486,
        7.786,
        -32.005,
        -14.421
      ]
    },
    {
      "start": 161.26843,
      "duration": 0.49338,
      "confidence": 0.84,
      "loudness_start": -9.183,
      "loudness_max_time": 0.06477,
      "loudness_max": 0.666,
      "loudness_end": 0,
      "pitches": [
        0.23,
        0.796,
        1,
        0.703,
        0.377,
        0.204,
        0.254,
        0.336,
        0.333,
        0.352,
        0.223,
        0.089
      ],
      "timbre": [
        57.585,
        96.043,
        9.359,
        -0.27,
        51.207,
        -5.452,
        -9.178,
        16.889,
        6.446,
        26.228,
        -16.996,
        -14.098
      ]
    },
    {
      "start": 161.76181,
      "duration": 0.33986,
      "confidence": 0.857,
      "loudness_start": -8.671,
      "loudness_max_time": 0.04595,
      "loudness_max": 1.507,
      "loudness_end": 0,
      "pitches": [
        0.229,
        1,
        0.538,
        0.065,
        0.031,
        0.042,
        0.028,
        0.022,
        0.033,
        0.126,
        0.036,
        0.107
      ],
      "timbre": [
        57.661,
        100.335,
        29.622,
        -21.067,
        14.984,
        16.883,
        -7.105,
        11.664,
        13.293,
        8.055,
        2.473,
        -28.391
      ]
    },
    {
      "start": 162.10168,
      "duration": 0.45016,
      "confidence": 0.315,
      "loudness_start": -4.537,
      "loudness_max_time": 0.01779,
      "loudness_max": -0.054,
      "loudness_end": 0,
      "pitches": [
        0.355,
        1,
        0.565,
        0.062,
        0.046,
        0.088,
        0.136,
        0.168,
        0.361,
        0.158,
        0.05,
        0.129
      ],
      "timbre": [
        57.679,
        109.457,
        30.717,
        8.852,
        3.202,
        -46.717,
        36.84,
        12.38,
        16.011,
        3.226,
        -14.953,
        12.555
      ]
    },
    {
      "start": 162.55183,
      "duration": 0.50998,
      "confidence": 0.598,
      "loudness_start": -6.335,
      "loudness_max_time": 0.02461,
      "loudness_max": 0.678,
      "loudness_end": 0,
      "pitches": [
        0.449,
        0.646,
        0.903,
        0.51,
        0.758,
        0.572,
        1,
        0.661,
        0.808,
        0.815,
        0.308,
        0.359
      ],
      "timbre": [
        58.215,
        75.699,
        28.453,
        -3.044,
        10.566,
        -29.827,
        30.399,
        12.045,
        3.199,
        -3.122,
        18.392,
        5.015
      ]
    },
    {
      "start": 163.06181,
      "duration": 0.36676,
      "confidence": 0.157,
      "loudness_start": -3.373,
      "loudness_max_time": 0.03493,
      "loudness_max": -0.086,
      "loudness_end": 0,
      "pitches": [
        0.756,
        1,
        0.838,
        0.453,
        0.844,
        0.258,
        0.276,
        0.355,
        0.291,
        0.462,
        0.148,
        0.634
      ],
      "timbre": [
        58.251,
        77.178,
        44.304,
        -4.163,
        30.224,
        -41.554,
        43.785,
        26.445,
        27.017,
        8.958,
        4.804,
        17.735
      ]
    },
    {
      "start": 163.42857,
      "duration": 0.18508,
      "confidence": 0.039,
      "loudness_start": -2.567,
      "loudness_max_time": 0.03965,
      "loudness_max": -1.007,
      "loudness_end": 0,
      "pitches": [
        0.082,
        0.749,
        0.755,
        0.743,
        1,
        0.954,
        0.196,
        0.18,
        0.051,
        0.089,
        0.017,
        0.12
      ],
      "timbre": [
        58.445,
        109.094,
        39.774,
        -12.616,
        21.776,
        -46.54,
        34.05,
        -0.605,
        16.409,
        0.722,
        -7.953,
        10.048
      ]
    },
    {
      "start": 163.61365,
      "duration": 0.48907,
      "confidence": 0.194,
      "loudness_start": -2.094,
      "loudness_max_time": 0.00454,
      "loudness_max": 0.883,
      "loudness_end": 0,
      "pitches": [
        0.131,
        0.216,
        0.385,
        0.72,
        1,
        0.273,
        0.331,
        0.412,
        0.451,
        0.322,
        0.142,
        0.188
      ],
      "timbre": [
        57.725,
        67.521,
        6.941,
        13.124,
        14.408,
        -63.683,
        16.817,
        7.987,
        8.667,
        -0.551,
        -11.791,
        5.895
      ]
    },
    {
      "start": 164.10272,
      "duration": 0.23846,
      "confidence": 0.541,
      "loudness_start": -7.106,
      "loudness_max_time": 0.04068,
      "loudness_max": -1.319,
      "loudness_end": 0,
      "pitches": [
        0.518,
        1,
        0.906,
        0.754,
        0.64,
        0.423,
        0.519,
        0.368,
        0.264,
        0.181,
        0.18,
        0.437
      ],
      "timbre": [
        55.526,
        84.881,
        -1.531,
        -17.892,
        -11.523,
        -14.598,
        36.84,
        15.766,
        -3.168,
        -9.518,
        1.29,
        23.711
      ]
    },
    {
      "start": 164.34119,
      "duration": 0.31197,
      "confidence": 0.851,
      "loudness_start": -8.546,
      "loudness_max_time": 0.06027,
      "loudness_max": 1.371,
      "loudness_end": 0,
      "pitches": [
        0.068,
        0.373,
        0.104,
        0.123,
        0.22,
        0.202,
        1,
        0.164,
        0.227,
        0.318,
        0.148,
        0.07
      ],
      "timbre": [
        57.214,
        91.599,
        66.152,
        -17.181,
        16.96,
        15.9,
        60.161,
        26.229,
        -0.586,
        -10.541,
        -8.139,
        12.798
      ]
    },
    {
      "start": 164.65315,
      "duration": 0.26662,
      "confidence": 0.393,
      "loudness_start": -3.544,
      "loudness_max_time": 0.02867,
      "loudness_max": 0.018,
      "loudness_end": 0,
      "pitches": [
        0.616,
        1,
        0.864,
        0.371,
        0.493,
        0.202,
        0.797,
        0.252,
        0.135,
        0.317,
        0.091,
        0.454
      ],
      "timbre": [
        58.982,
        105.1,
        37.262,
        -9.109,
        26.584,
        -47.651,
        31.739,
        24.129,
        22.453,
        -3.405,
        0.517,
        4.368
      ]
    },
    {
      "start": 164.91977,
      "duration": 0.25533,
      "confidence": 0.046,
      "loudness_start": -3.122,
      "loudness_max_time": 0.01181,
      "loudness_max": -0.809,
      "loudness_end": 0,
      "pitches": [
        0.383,
        1,
        0.205,
        0.11,
        0.142,
        0.072,
        0.091,
        0.036,
        0.126,
        0.175,
        0.077,
        0.072
      ],
      "timbre": [
        57.089,
        103.982,
        46.681,
        34.476,
        11.688,
        -48.558,
        21.082,
        -5.138,
        -12.256,
        4.806,
        -21.136,
        -19.048
      ]
    },
    {
      "start": 165.1751,
      "duration": 0.26707,
      "confidence": 0.568,
      "loudness_start": -5.087,
      "loudness_max_time": 0.05812,
      "loudness_max": 0.981,
      "loudness_end": 0,
      "pitches": [
        0.745,
        1,
        0.572,
        0.491,
        0.71,
        0.232,
        0.167,
        0.234,
        0.151,
        0.184,
        0.087,
        0.661
      ],
      "timbre": [
        57.704,
        93.881,
        21.65,
        13.71,
        27.379,
        -31.739,
        9.838,
        36.011,
        23.131,
        4.19,
        -25.737,
        -9.443
      ]
    },
    {
      "start": 165.44218,
      "duration": 0.49356,
      "confidence": 0.844,
      "loudness_start": -8.632,
      "loudness_max_time": 0.04293,
      "loudness_max": 1.01,
      "loudness_end": 0,
      "pitches": [
        0.257,
        0.796,
        1,
        0.721,
        0.37,
        0.186,
        0.256,
        0.328,
        0.355,
        0.362,
        0.249,
        0.17
      ],
      "timbre": [
        57.372,
        108.109,
        20.117,
        -12.564,
        53.754,
        10.881,
        5.144,
        13.882,
        4.937,
        17.883,
        -21.57,
        -9.148
      ]
    },
    {
      "start": 165.93575,
      "duration": 0.28431,
      "confidence": 0.875,
      "loudness_start": -8.288,
      "loudness_max_time": 0.04873,
      "loudness_max": 1.753,
      "loudness_end": 0,
      "pitches": [
        0.242,
        1,
        0.655,
        0.097,
        0.037,
        0.035,
        0.035,
        0.031,
        0.065,
        0.166,
        0.056,
        0.115
      ],
      "timbre": [
        58.159,
        122.372,
        27.334,
        -23.76,
        36.448,
        14.318,
        -18.345,
        6.85,
        27.518,
        1.435,
        3.339,
        -30.754
      ]
    },
    {
      "start": 166.22005,
      "duration": 0.30771,
      "confidence": 0.278,
      "loudness_start": -3.439,
      "loudness_max_time": 0.01778,
      "loudness_max": 0.124,
      "loudness_end": 0,
      "pitches": [
        0.544,
        1,
        0.332,
        0.142,
        0.183,
        0.089,
        0.078,
        0.095,
        0.165,
        0.186,
        0.06,
        0.431
      ],
      "timbre": [
        58.373,
        113.533,
        39.198,
        3.664,
        -1.917,
        -51.055,
        12.225,
        0.205,
        5.054,
        13.681,
        -3.003,
        -14.525
      ]
    },
    {
      "start": 166.52776,
      "duration": 0.20898,
      "confidence": 0.155,
      "loudness_start": -4.419,
      "loudness_max_time": 0.05382,
      "loudness_max": -0.696,
      "loudness_end": 0,
      "pitches": [
        0.741,
        1,
        0.08,
        0.011,
        0.027,
        0.023,
        0.017,
        0.054,
        0.137,
        0.096,
        0.015,
        0.062
      ],
      "timbre": [
        56.833,
        123.396,
        43.838,
        25.471,
        16.841,
        -29.807,
        32.94,
        -8.036,
        26.581,
        4.71,
        -27.817,
        0.365
      ]
    },
    {
      "start": 166.73672,
      "duration": 0.51701,
      "confidence": 0.749,
      "loudness_start": -7.509,
      "loudness_max_time": 0.0368,
      "loudness_max": 1.169,
      "loudness_end": 0,
      "pitches": [
        0.417,
        0.58,
        0.884,
        0.603,
        0.805,
        0.648,
        1,
        0.553,
        0.693,
        0.81,
        0.231,
        0.31
      ],
      "timbre": [
        58.335,
        96.227,
        11.898,
        0.574,
        12.473,
        -26.347,
        -3.311,
        5.57,
        22.422,
        -2.217,
        -7.857,
        -0.141
      ]
    },
    {
      "start": 167.25374,
      "duration": 0.51678,
      "confidence": 0.815,
      "loudness_start": -7.18,
      "loudness_max_time": 0.0373,
      "loudness_max": 2.187,
      "loudness_end": 0,
      "pitches": [
        0.256,
        0.447,
        0.564,
        0.355,
        1,
        0.702,
        0.477,
        0.653,
        0.301,
        0.654,
        0.215,
        0.354
      ],
      "timbre": [
        59.138,
        82.548,
        27.86,
        0.964,
        23.357,
        -20.154,
        11.134,
        17.549,
        30.384,
        15.375,
        11.477,
        -1.182
      ]
    },
    {
      "start": 167.77052,
      "duration": 0.17959,
      "confidence": 0.569,
      "loudness_start": -4.558,
      "loudness_max_time": 0.03532,
      "loudness_max": 1.503,
      "loudness_end": 0,
      "pitches": [
        0.551,
        1,
        0.365,
        0.323,
        0.302,
        0.265,
        0.604,
        0.635,
        0.473,
        0.506,
        0.349,
        0.059
      ],
      "timbre": [
        58.538,
        81.203,
        18.458,
        6.582,
        17.503,
        -24.216,
        3.329,
        9.675,
        28.994,
        16.906,
        5.935,
        -4.41
      ]
    },
    {
      "start": 167.9501,
      "duration": 0.18585,
      "confidence": 0.089,
      "loudness_start": -3.677,
      "loudness_max_time": 0.04357,
      "loudness_max": -1.508,
      "loudness_end": 0,
      "pitches": [
        0.101,
        0.119,
        0.196,
        0.665,
        1,
        0.447,
        0.178,
        0.221,
        0.301,
        0.25,
        0.081,
        0.144
      ],
      "timbre": [
        56.993,
        86.937,
        28.165,
        4.846,
        34.589,
        -45.948,
        16.424,
        1.162,
        25.026,
        23.526,
        -18.12,
        -7.56
      ]
    },
    {
      "start": 168.13596,
      "duration": 0.17397,
      "confidence": 0.043,
      "loudness_start": -4.861,
      "loudness_max_time": 0.05074,
      "loudness_max": -2.873,
      "loudness_end": 0,
      "pitches": [
        0.879,
        1,
        0.188,
        0.08,
        0.234,
        0.129,
        0.081,
        0.061,
        0.092,
        0.105,
        0.317,
        0.098
      ],
      "timbre": [
        56.295,
        68.26,
        6.178,
        -18.468,
        32.981,
        -45.162,
        24.258,
        4.386,
        30.522,
        6.402,
        -14.578,
        -11.279
      ]
    },
    {
      "start": 168.30994,
      "duration": 0.26136,
      "confidence": 0.017,
      "loudness_start": -5.347,
      "loudness_max_time": 0.00532,
      "loudness_max": -2.159,
      "loudness_end": 0,
      "pitches": [
        0.557,
        1,
        0.71,
        0.283,
        0.371,
        0.167,
        0.432,
        0.134,
        0.124,
        0.14,
        0.228,
        0.41
      ],
      "timbre": [
        55.761,
        54.169,
        16.116,
        -0.802,
        -12.019,
        -53.617,
        28.311,
        5.313,
        -4.274,
        -4.502,
        -8.987,
        -17.231
      ]
    },
    {
      "start": 168.57129,
      "duration": 0.25501,
      "confidence": 0.618,
      "loudness_start": -6.771,
      "loudness_max_time": 0.04772,
      "loudness_max": -0.413,
      "loudness_end": 0,
      "pitches": [
        0.078,
        0.411,
        0.16,
        0.119,
        0.191,
        0.234,
        1,
        0.259,
        0.175,
        0.183,
        0.135,
        0.064
      ],
      "timbre": [
        57.868,
        98.338,
        52.204,
        11.365,
        8.397,
        -36.955,
        49.218,
        7.421,
        -8.078,
        11.316,
        -7.766,
        18.501
      ]
    },
    {
      "start": 168.8263,
      "duration": 0.23837,
      "confidence": 0.219,
      "loudness_start": -4.321,
      "loudness_max_time": 0.02181,
      "loudness_max": -0.27,
      "loudness_end": 0,
      "pitches": [
        0.604,
        1,
        0.929,
        0.455,
        0.468,
        0.191,
        0.225,
        0.295,
        0.215,
        0.211,
        0.134,
        0.443
      ],
      "timbre": [
        56.912,
        58.991,
        3.982,
        21.768,
        16.622,
        -47.961,
        23.06,
        14.232,
        7.207,
        -1.757,
        -18.094,
        18.75
      ]
    },
    {
      "start": 169.06467,
      "duration": 0.48141,
      "confidence": 0.739,
      "loudness_start": -9.199,
      "loudness_max_time": 0.0922,
      "loudness_max": -0.421,
      "loudness_end": 0,
      "pitches": [
        0.275,
        0.392,
        0.799,
        1,
        0.587,
        0.206,
        0.307,
        0.224,
        0.26,
        0.361,
        0.159,
        0.093
      ],
      "timbre": [
        55.508,
        62.96,
        22.163,
        -37.048,
        35.991,
        -11.16,
        16.15,
        15.471,
        4.645,
        17.052,
        -14.744,
        -5.905
      ]
    },
    {
      "start": 169.54608,
      "duration": 0.29628,
      "confidence": 0.815,
      "loudness_start": -6.68,
      "loudness_max_time": 0.07503,
      "loudness_max": 2.676,
      "loudness_end": 0,
      "pitches": [
        0.483,
        1,
        0.325,
        0.047,
        0.047,
        0.044,
        0.053,
        0.037,
        0.158,
        0.504,
        0.094,
        0.065
      ],
      "timbre": [
        58.193,
        79.644,
        62.074,
        -17.929,
        68.226,
        5.729,
        2.678,
        15.321,
        22.336,
        28.756,
        -20.926,
        16.224
      ]
    },
    {
      "start": 169.84236,
      "duration": 0.26168,
      "confidence": 0.588,
      "loudness_start": -4.793,
      "loudness_max_time": 0.06364,
      "loudness_max": 0.728,
      "loudness_end": 0,
      "pitches": [
        0.727,
        1,
        0.817,
        0.682,
        0.481,
        0.262,
        0.281,
        0.364,
        0.232,
        0.392,
        0.206,
        0.495
      ],
      "timbre": [
        57.811,
        87.782,
        2.904,
        -5.117,
        34.402,
        -14.028,
        -7.744,
        10.379,
        13.739,
        5.031,
        -15.794,
        -4.713
      ]
    },
    {
      "start": 170.10403,
      "duration": 0.55138,
      "confidence": 0.688,
      "loudness_start": -7.376,
      "loudness_max_time": 0.08186,
      "loudness_max": 0.896,
      "loudness_end": 0,
      "pitches": [
        0.435,
        0.758,
        1,
        0.684,
        0.426,
        0.384,
        0.418,
        0.391,
        0.658,
        0.627,
        0.281,
        0.479
      ],
      "timbre": [
        55.838,
        66.596,
        44.762,
        -18.274,
        30.746,
        -21.354,
        18.763,
        15.517,
        21.195,
        9.576,
        -26.204,
        -6.197
      ]
    },
    {
      "start": 170.65543,
      "duration": 0.24327,
      "confidence": 0.915,
      "loudness_start": -9.745,
      "loudness_max_time": 0.07687,
      "loudness_max": 2.778,
      "loudness_end": 0,
      "pitches": [
        0.7,
        1,
        0.03,
        0.016,
        0.055,
        0.033,
        0.013,
        0.052,
        0.184,
        0.144,
        0.043,
        0.032
      ],
      "timbre": [
        57.807,
        77.582,
        53.705,
        -18.453,
        42.488,
        15.466,
        4.645,
        27.051,
        8.48,
        -4.107,
        -9.094,
        -2.89
      ]
    },
    {
      "start": 170.89868,
      "duration": 0.26109,
      "confidence": 0.347,
      "loudness_start": -7.531,
      "loudness_max_time": 0.02265,
      "loudness_max": -1.407,
      "loudness_end": 0,
      "pitches": [
        0.67,
        1,
        0.652,
        0.341,
        0.301,
        0.152,
        0.095,
        0.151,
        0.103,
        0.108,
        0.058,
        0.28
      ],
      "timbre": [
        54.997,
        78.802,
        -6.048,
        15.888,
        -0.16,
        -30.033,
        11.174,
        14.195,
        2.001,
        0.636,
        1.381,
        1.765
      ]
    },
    {
      "start": 171.15977,
      "duration": 0.25016,
      "confidence": 0.956,
      "loudness_start": -11.621,
      "loudness_max_time": 0.03014,
      "loudness_max": 1.438,
      "loudness_end": 0,
      "pitches": [
        0.216,
        1,
        0.279,
        0.339,
        0.537,
        0.366,
        0.113,
        0.094,
        0.144,
        0.268,
        0.087,
        0.272
      ],
      "timbre": [
        58.762,
        125.742,
        33.456,
        5.836,
        7.076,
        -8.098,
        -39.037,
        -2.407,
        19.712,
        0.174,
        10.822,
        -28.2
      ]
    },
    {
      "start": 171.40993,
      "duration": 0.5459,
      "confidence": 0.378,
      "loudness_start": -5.236,
      "loudness_max_time": 0.06418,
      "loudness_max": -0.511,
      "loudness_end": 0,
      "pitches": [
        0.215,
        0.377,
        0.304,
        0.499,
        1,
        0.61,
        0.266,
        0.651,
        0.56,
        0.4,
        0.133,
        0.26
      ],
      "timbre": [
        57.019,
        108.989,
        36.133,
        -19.232,
        3.305,
        -25.34,
        15.598,
        27.307,
        25.414,
        1.445,
        -0.306,
        14.291
      ]
    },
    {
      "start": 171.95583,
      "duration": 0.4698,
      "confidence": 0.602,
      "loudness_start": -5.987,
      "loudness_max_time": 0.05475,
      "loudness_max": 0.405,
      "loudness_end": 0,
      "pitches": [
        0.126,
        0.195,
        0.33,
        0.64,
        1,
        0.208,
        0.372,
        0.506,
        0.557,
        0.414,
        0.201,
        0.366
      ],
      "timbre": [
        58.456,
        100.251,
        33.594,
        -16.846,
        15.872,
        -40.134,
        22.498,
        10.937,
        12.535,
        9.904,
        -7.444,
        2.803
      ]
    },
    {
      "start": 172.42561,
      "duration": 0.25601,
      "confidence": 0.157,
      "loudness_start": -2.729,
      "loudness_max_time": 0.03039,
      "loudness_max": -0.371,
      "loudness_end": 0,
      "pitches": [
        0.484,
        1,
        0.94,
        0.945,
        0.783,
        0.524,
        0.554,
        0.389,
        0.395,
        0.341,
        0.2,
        0.399
      ],
      "timbre": [
        57.388,
        102.365,
        23.957,
        29.747,
        11.239,
        -36.127,
        38.702,
        -5.463,
        20.59,
        16.058,
        -27.783,
        5.367
      ]
    },
    {
      "start": 172.68163,
      "duration": 0.1966,
      "confidence": 0.64,
      "loudness_start": -7.537,
      "loudness_max_time": 0.14033,
      "loudness_max": -0.562,
      "loudness_end": 0,
      "pitches": [
        0.263,
        0.62,
        0.456,
        0.361,
        0.253,
        0.408,
        1,
        0.471,
        0.167,
        0.331,
        0.242,
        0.184
      ],
      "timbre": [
        55.868,
        74.511,
        72.197,
        -49.078,
        16.448,
        -30.74,
        52.753,
        8.588,
        3.585,
        16.151,
        -2.834,
        7.453
      ]
    },
    {
      "start": 172.87823,
      "duration": 0.12794,
      "confidence": 0.028,
      "loudness_start": -2.528,
      "loudness_max_time": 0.03437,
      "loudness_max": 0.169,
      "loudness_end": 0,
      "pitches": [
        0.05,
        0.429,
        0.373,
        0.353,
        0.946,
        0.902,
        1,
        0.979,
        0.468,
        0.592,
        0.087,
        0.021
      ],
      "timbre": [
        59.021,
        134.185,
        43.936,
        -7.477,
        32.483,
        -42.753,
        38.174,
        7.525,
        15.153,
        15.096,
        0.393,
        30.645
      ]
    },
    {
      "start": 173.00616,
      "duration": 0.27261,
      "confidence": 0.147,
      "loudness_start": -1.187,
      "loudness_max_time": 0.00189,
      "loudness_max": 1.04,
      "loudness_end": 0,
      "pitches": [
        0.597,
        1,
        0.781,
        0.271,
        0.556,
        0.151,
        0.246,
        0.216,
        0.183,
        0.789,
        0.13,
        0.439
      ],
      "timbre": [
        59.294,
        105.015,
        30.636,
        -0.896,
        25.4,
        -54.913,
        37.835,
        -1.743,
        14.701,
        3.493,
        -6.564,
        26.353
      ]
    },
    {
      "start": 173.27878,
      "duration": 0.48798,
      "confidence": 0.216,
      "loudness_start": -3.003,
      "loudness_max_time": 0.05113,
      "loudness_max": 0.364,
      "loudness_end": 0,
      "pitches": [
        0.34,
        0.584,
        0.903,
        1,
        0.74,
        0.295,
        0.431,
        0.483,
        0.504,
        0.507,
        0.261,
        0.156
      ],
      "timbre": [
        57.934,
        106.763,
        41.756,
        33.984,
        8.669,
        -33.208,
        8.785,
        17.835,
        4.586,
        -1.829,
        -26.251,
        4.618
      ]
    },
    {
      "start": 173.76675,
      "duration": 0.26553,
      "confidence": 0.744,
      "loudness_start": -6.814,
      "loudness_max_time": 0.07512,
      "loudness_max": 0.797,
      "loudness_end": 0,
      "pitches": [
        0.44,
        1,
        0.263,
        0.05,
        0.08,
        0.05,
        0.074,
        0.016,
        0.062,
        0.198,
        0.062,
        0.044
      ],
      "timbre": [
        57.766,
        72.94,
        54.207,
        10.98,
        52.877,
        -3.368,
        24.148,
        9.042,
        1.42,
        12.573,
        -3.873,
        4.994
      ]
    },
    {
      "start": 174.03229,
      "duration": 0.25705,
      "confidence": 0.612,
      "loudness_start": -7.302,
      "loudness_max_time": 0.02059,
      "loudness_max": -0.313,
      "loudness_end": 0,
      "pitches": [
        0.678,
        1,
        0.806,
        0.629,
        0.815,
        0.313,
        0.244,
        0.368,
        0.263,
        0.55,
        0.255,
        0.461
      ],
      "timbre": [
        57.293,
        78.722,
        -7.505,
        -5.909,
        22.392,
        -22.261,
        -5.91,
        0.034,
        -4.642,
        3.086,
        1.612,
        -6.604
      ]
    },
    {
      "start": 174.28934,
      "duration": 0.51025,
      "confidence": 0.566,
      "loudness_start": -6.822,
      "loudness_max_time": 0.0567,
      "loudness_max": -0.926,
      "loudness_end": 0,
      "pitches": [
        0.455,
        0.751,
        1,
        0.672,
        0.43,
        0.415,
        0.389,
        0.339,
        0.635,
        0.586,
        0.266,
        0.425
      ],
      "timbre": [
        56.382,
        76.625,
        0.486,
        -14.284,
        38.367,
        -18.475,
        -5.719,
        8.801,
        9.669,
        0.686,
        -15.849,
        2.042
      ]
    },
    {
      "start": 174.79959,
      "duration": 0.48794,
      "confidence": 0.938,
      "loudness_start": -10.539,
      "loudness_max_time": 0.03717,
      "loudness_max": 1.527,
      "loudness_end": 0,
      "pitches": [
        0.463,
        1,
        0.842,
        0.318,
        0.315,
        0.215,
        0.147,
        0.15,
        0.309,
        0.264,
        0.169,
        0.098
      ],
      "timbre": [
        59.046,
        128.129,
        52.255,
        18.019,
        34.936,
        -9.144,
        39.245,
        8.848,
        18.476,
        -4.42,
        -1.551,
        14.788
      ]
    },
    {
      "start": 175.28754,
      "duration": 0.32508,
      "confidence": 0.619,
      "loudness_start": -6.261,
      "loudness_max_time": 0.08266,
      "loudness_max": 1.049,
      "loudness_end": 0,
      "pitches": [
        0.207,
        1,
        0.233,
        0.477,
        0.628,
        0.418,
        0.088,
        0.082,
        0.128,
        0.284,
        0.133,
        0.394
      ],
      "timbre": [
        56.378,
        93.935,
        56.253,
        -4.198,
        30.393,
        -17.586,
        14.908,
        -0.86,
        -7.324,
        1.201,
        -44.379,
        -10.619
      ]
    },
    {
      "start": 175.61261,
      "duration": 0.38249,
      "confidence": 0.686,
      "loudness_start": -6.679,
      "loudness_max_time": 0.06982,
      "loudness_max": 0.203,
      "loudness_end": 0,
      "pitches": [
        0.269,
        0.334,
        0.297,
        0.203,
        0.586,
        0.377,
        0.519,
        1,
        0.991,
        0.619,
        0.232,
        0.29
      ],
      "timbre": [
        58.091,
        66.54,
        21.89,
        -14.508,
        21.865,
        -33.526,
        -8.759,
        38.848,
        23.741,
        10.969,
        -12.477,
        -28.403
      ]
    },
    {
      "start": 175.9951,
      "duration": 0.31401,
      "confidence": 0.562,
      "loudness_start": -4.651,
      "loudness_max_time": 0.07848,
      "loudness_max": 0.477,
      "loudness_end": 0,
      "pitches": [
        0.299,
        0.948,
        0.928,
        0.649,
        1,
        0.473,
        0.428,
        0.462,
        0.407,
        0.269,
        0.265,
        0.288
      ],
      "timbre": [
        58.541,
        89.02,
        23.001,
        -12.831,
        38.891,
        -24.17,
        12.215,
        19.94,
        5.225,
        -0.035,
        -13.715,
        -15.457
      ]
    },
    {
      "start": 176.30911,
      "duration": 0.56912,
      "confidence": 0.31,
      "loudness_start": -4.388,
      "loudness_max_time": 0.1056,
      "loudness_max": 0.332,
      "loudness_end": 0,
      "pitches": [
        0.469,
        1,
        0.616,
        0.748,
        0.491,
        0.246,
        0.293,
        0.292,
        0.402,
        0.473,
        0.36,
        0.366
      ],
      "timbre": [
        58.131,
        125.825,
        31.465,
        -12.141,
        23.641,
        -31.678,
        9.547,
        -17.616,
        25.923,
        12.704,
        -19.314,
        -0.656
      ]
    },
    {
      "start": 176.87823,
      "duration": 0.29592,
      "confidence": 0.534,
      "loudness_start": -6.132,
      "loudness_max_time": 0.05139,
      "loudness_max": -0.655,
      "loudness_end": 0,
      "pitches": [
        0.076,
        0.391,
        0.097,
        0.06,
        0.19,
        0.245,
        1,
        0.147,
        0.101,
        0.221,
        0.115,
        0.082
      ],
      "timbre": [
        57.244,
        108.173,
        64.99,
        -15.66,
        2.28,
        -17.674,
        46.082,
        9.846,
        -8.87,
        4.798,
        -10.404,
        -0.04
      ]
    },
    {
      "start": 177.17415,
      "duration": 0.27274,
      "confidence": 0.207,
      "loudness_start": -4.007,
      "loudness_max_time": 0.03056,
      "loudness_max": -0.582,
      "loudness_end": 0,
      "pitches": [
        0.591,
        1,
        0.873,
        0.346,
        0.417,
        0.178,
        0.616,
        0.227,
        0.127,
        0.317,
        0.097,
        0.394
      ],
      "timbre": [
        57.586,
        74.38,
        46.789,
        13.24,
        -1.514,
        -41.469,
        36.877,
        24.492,
        -11.611,
        6.165,
        -10.054,
        -9.945
      ]
    },
    {
      "start": 177.44688,
      "duration": 0.22653,
      "confidence": 0.503,
      "loudness_start": -6.034,
      "loudness_max_time": 0.0266,
      "loudness_max": -0.533,
      "loudness_end": 0,
      "pitches": [
        0.472,
        1,
        0.174,
        0.138,
        0.129,
        0.066,
        0.09,
        0.036,
        0.113,
        0.123,
        0.064,
        0.072
      ],
      "timbre": [
        56.78,
        102.984,
        31.287,
        27.139,
        19.683,
        -31.937,
        23.346,
        -12.468,
        -13.857,
        8.429,
        -18.039,
        -23.579
      ]
    },
    {
      "start": 177.67342,
      "duration": 0.29011,
      "confidence": 0.652,
      "loudness_start": -6.821,
      "loudness_max_time": 0.08532,
      "loudness_max": -0.247,
      "loudness_end": 0,
      "pitches": [
        0.675,
        1,
        0.81,
        0.63,
        0.756,
        0.346,
        0.253,
        0.29,
        0.194,
        0.177,
        0.113,
        0.528
      ],
      "timbre": [
        56.596,
        96.636,
        15.324,
        -0.825,
        10.631,
        -14.162,
        10.282,
        31.583,
        -0.788,
        12.726,
        -14.601,
        -9.215
      ]
    },
    {
      "start": 177.96355,
      "duration": 0.13927,
      "confidence": 0.818,
      "loudness_start": -9.525,
      "loudness_max_time": 0.07497,
      "loudness_max": 0.195,
      "loudness_end": 0,
      "pitches": [
        0.476,
        1,
        0.803,
        0.675,
        0.452,
        0.445,
        0.11,
        0.092,
        0.073,
        0.114,
        0.041,
        0.023
      ],
      "timbre": [
        57.336,
        112.092,
        20.086,
        -37.744,
        48.525,
        -5.119,
        -6.811,
        -2.52,
        13.045,
        19.047,
        -14.955,
        -13.976
      ]
    },
    {
      "start": 178.10281,
      "duration": 0.09864,
      "confidence": 0.138,
      "loudness_start": -3.231,
      "loudness_max_time": 0.0417,
      "loudness_max": 0.284,
      "loudness_end": 0,
      "pitches": [
        0.701,
        1,
        0.942,
        0.76,
        0.521,
        0.514,
        0.217,
        0.2,
        0.048,
        0.077,
        0.051,
        0.021
      ],
      "timbre": [
        58.527,
        98.969,
        15.647,
        -14.022,
        44.879,
        -39.989,
        -4.531,
        9.327,
        12.549,
        14.066,
        -13.412,
        -26.016
      ]
    },
    {
      "start": 178.20145,
      "duration": 0.25048,
      "confidence": 0.134,
      "loudness_start": -2.694,
      "loudness_max_time": 0.02803,
      "loudness_max": 0.737,
      "loudness_end": 0,
      "pitches": [
        0.74,
        1,
        0.872,
        0.695,
        0.469,
        0.257,
        0.23,
        0.368,
        0.253,
        0.225,
        0.14,
        0.471
      ],
      "timbre": [
        57.329,
        90.84,
        -8.62,
        25.207,
        14.046,
        -38.526,
        5.652,
        13.606,
        -10.384,
        1.235,
        -6.732,
        -8.147
      ]
    },
    {
      "start": 178.45193,
      "duration": 0.55107,
      "confidence": 0.786,
      "loudness_start": -8.149,
      "loudness_max_time": 0.08046,
      "loudness_max": 0.817,
      "loudness_end": 0,
      "pitches": [
        0.393,
        0.81,
        1,
        0.625,
        0.373,
        0.389,
        0.385,
        0.341,
        0.61,
        0.508,
        0.224,
        0.429
      ],
      "timbre": [
        55.344,
        95.624,
        43.32,
        -63.004,
        8.182,
        -15.967,
        23.985,
        11.562,
        2.832,
        2.631,
        -13.474,
        -0.965
      ]
    },
    {
      "start": 179.00299,
      "duration": 0.25488,
      "confidence": 0.027,
      "loudness_start": -3.89,
      "loudness_max_time": 0.08117,
      "loudness_max": -1.316,
      "loudness_end": 0,
      "pitches": [
        0.707,
        1,
        0.024,
        0.014,
        0.039,
        0.024,
        0.014,
        0.039,
        0.156,
        0.056,
        0.014,
        0.073
      ],
      "timbre": [
        56.95,
        96.91,
        49.557,
        12.804,
        28.15,
        -36.601,
        24.108,
        -1.055,
        10.589,
        19.331,
        -24.438,
        6.542
      ]
    },
    {
      "start": 179.25787,
      "duration": 0.26698,
      "confidence": 0.498,
      "loudness_start": -7.594,
      "loudness_max_time": 0.01332,
      "loudness_max": -0.115,
      "loudness_end": 0,
      "pitches": [
        0.699,
        1,
        0.554,
        0.232,
        0.287,
        0.127,
        0.072,
        0.136,
        0.072,
        0.149,
        0.047,
        0.288
      ],
      "timbre": [
        55.985,
        85.283,
        -5.374,
        16.441,
        -6.732,
        -52.395,
        4.798,
        3.256,
        1.305,
        -5.855,
        -7.767,
        6.16
      ]
    },
    {
      "start": 179.52486,
      "duration": 0.24404,
      "confidence": 0.59,
      "loudness_start": -9.735,
      "loudness_max_time": 0.15241,
      "loudness_max": -3.389,
      "loudness_end": 0,
      "pitches": [
        0.247,
        1,
        0.287,
        0.226,
        0.403,
        0.323,
        0.076,
        0.049,
        0.056,
        0.103,
        0.041,
        0.204
      ],
      "timbre": [
        55.272,
        69.569,
        -1.158,
        -17.442,
        32.486,
        -46.127,
        24.664,
        -9.019,
        -13.245,
        13.597,
        -8.226,
        2.649
      ]
    },
    {
      "start": 179.76889,
      "duration": 0.53361,
      "confidence": 0.728,
      "loudness_start": -6.416,
      "loudness_max_time": 0.13319,
      "loudness_max": 1.243,
      "loudness_end": 0,
      "pitches": [
        0.162,
        0.21,
        0.244,
        0.46,
        1,
        0.534,
        0.241,
        0.603,
        0.522,
        0.606,
        0.186,
        0.249
      ],
      "timbre": [
        59.005,
        81.618,
        49.353,
        -13.728,
        22.693,
        -16.567,
        35.145,
        47.064,
        13.015,
        10.758,
        7.703,
        5.299
      ]
    },
    {
      "start": 180.30249,
      "duration": 0.1629,
      "confidence": 0.103,
      "loudness_start": -2.411,
      "loudness_max_time": 0.01075,
      "loudness_max": 0.934,
      "loudness_end": 0,
      "pitches": [
        0.462,
        1,
        0.187,
        0.158,
        0.186,
        0.159,
        0.735,
        0.771,
        0.879,
        0.832,
        0.558,
        0.168
      ],
      "timbre": [
        58.766,
        93.96,
        23.682,
        -3.093,
        8.264,
        -53.052,
        11.472,
        3.939,
        18.847,
        8.201,
        -8.174,
        4.391
      ]
    },
    {
      "start": 180.4654,
      "duration": 0.36571,
      "confidence": 0.158,
      "loudness_start": -3.531,
      "loudness_max_time": 0.02891,
      "loudness_max": -0.5,
      "loudness_end": 0,
      "pitches": [
        0.177,
        0.52,
        0.634,
        1,
        0.737,
        0.104,
        0.065,
        0.046,
        0.08,
        0.098,
        0.06,
        0.203
      ],
      "timbre": [
        57.936,
        108.302,
        37.252,
        9.829,
        33.569,
        -38.015,
        35.8,
        -1.938,
        12.049,
        9.681,
        -16.269,
        14.547
      ]
    },
    {
      "start": 180.83112,
      "duration": 0.22009,
      "confidence": 0.296,
      "loudness_start": -3.93,
      "loudness_max_time": 0.00763,
      "loudness_max": -1.38,
      "loudness_end": 0,
      "pitches": [
        0.587,
        1,
        0.75,
        0.414,
        0.397,
        0.21,
        0.376,
        0.165,
        0.154,
        0.128,
        0.101,
        0.534
      ],
      "timbre": [
        55.825,
        91.596,
        -0.977,
        -0.177,
        -10.402,
        -65.677,
        30.847,
        -2.485,
        -9.258,
        -1.235,
        -3.805,
        9.079
      ]
    },
    {
      "start": 181.0512,
      "duration": 0.25011,
      "confidence": 0.676,
      "loudness_start": -7.091,
      "loudness_max_time": 0.20582,
      "loudness_max": -0.136,
      "loudness_end": 0,
      "pitches": [
        0.102,
        0.408,
        0.107,
        0.151,
        0.203,
        0.301,
        1,
        0.262,
        0.245,
        0.328,
        0.127,
        0.11
      ],
      "timbre": [
        57.54,
        100.762,
        70.902,
        -18.89,
        9.707,
        -9.02,
        49.145,
        35.689,
        -7.021,
        6.455,
        3.77,
        16.87
      ]
    },
    {
      "start": 181.30132,
      "duration": 0.52245,
      "confidence": 0.297,
      "loudness_start": -3.714,
      "loudness_max_time": 0.05512,
      "loudness_max": 1.084,
      "loudness_end": 0,
      "pitches": [
        0.164,
        0.325,
        0.45,
        0.247,
        0.386,
        0.293,
        0.845,
        1,
        0.567,
        0.604,
        0.218,
        0.157
      ],
      "timbre": [
        58.48,
        115.847,
        39.881,
        2.232,
        33.757,
        -31.442,
        30.971,
        11.631,
        23.218,
        -11.44,
        -9.199,
        0.117
      ]
    },
    {
      "start": 181.82376,
      "duration": 0.30776,
      "confidence": 0.582,
      "loudness_start": -6.232,
      "loudness_max_time": 0.09778,
      "loudness_max": 0.062,
      "loudness_end": 0,
      "pitches": [
        0.622,
        1,
        0.715,
        0.619,
        0.714,
        0.418,
        0.309,
        0.334,
        0.212,
        0.188,
        0.113,
        0.43
      ],
      "timbre": [
        56.079,
        106.451,
        30.108,
        -0.798,
        5.55,
        -11.961,
        8.925,
        21.078,
        -6.759,
        14.846,
        -30.891,
        -16.446
      ]
    },
    {
      "start": 182.13152,
      "duration": 0.49406,
      "confidence": 0.911,
      "loudness_start": -9.117,
      "loudness_max_time": 0.04731,
      "loudness_max": 2.121,
      "loudness_end": 0,
      "pitches": [
        0.243,
        0.855,
        1,
        0.765,
        0.394,
        0.197,
        0.253,
        0.332,
        0.35,
        0.445,
        0.253,
        0.101
      ],
      "timbre": [
        57.675,
        104.578,
        27.135,
        2.106,
        39.674,
        22.511,
        -11.335,
        15.744,
        -18.204,
        14.424,
        -13.452,
        -15.163
      ]
    },
    {
      "start": 182.62558,
      "duration": 0.28907,
      "confidence": 0.865,
      "loudness_start": -9.107,
      "loudness_max_time": 0.04276,
      "loudness_max": 1.689,
      "loudness_end": 0,
      "pitches": [
        0.253,
        1,
        0.429,
        0.072,
        0.058,
        0.034,
        0.044,
        0.044,
        0.069,
        0.2,
        0.052,
        0.051
      ],
      "timbre": [
        57.917,
        137.7,
        38.37,
        -26.473,
        28.272,
        19.734,
        -15.4,
        10.79,
        22.941,
        -1.248,
        2.03,
        -26.945
      ]
    },
    {
      "start": 182.91466,
      "duration": 0.26735,
      "confidence": 0.256,
      "loudness_start": -3.847,
      "loudness_max_time": 0.02825,
      "loudness_max": -0.391,
      "loudness_end": 0,
      "pitches": [
        0.667,
        1,
        0.462,
        0.236,
        0.257,
        0.132,
        0.1,
        0.164,
        0.245,
        0.216,
        0.058,
        0.571
      ],
      "timbre": [
        58.088,
        82.407,
        46.077,
        3.666,
        18.275,
        -48.069,
        30.926,
        13.63,
        26.529,
        5.543,
        -0.828,
        -0.788
      ]
    },
    {
      "start": 183.182,
      "duration": 0.25574,
      "confidence": 0.117,
      "loudness_start": -3.903,
      "loudness_max_time": 0.06585,
      "loudness_max": -1.041,
      "loudness_end": 0,
      "pitches": [
        0.7,
        1,
        0.023,
        0.019,
        0.042,
        0.024,
        0.014,
        0.044,
        0.16,
        0.066,
        0.013,
        0.07
      ],
      "timbre": [
        56.592,
        90.674,
        57.466,
        20.046,
        26.665,
        -33.791,
        18.792,
        6.766,
        19.326,
        11.263,
        -25.218,
        13.815
      ]
    },
    {
      "start": 183.43773,
      "duration": 0.26671,
      "confidence": 0.525,
      "loudness_start": -9.244,
      "loudness_max_time": 0.00739,
      "loudness_max": -0.821,
      "loudness_end": 0,
      "pitches": [
        0.698,
        1,
        0.475,
        0.173,
        0.253,
        0.105,
        0.057,
        0.133,
        0.09,
        0.182,
        0.051,
        0.288
      ],
      "timbre": [
        56.022,
        92.953,
        2.087,
        4.556,
        -6.583,
        -57.651,
        1.729,
        13.501,
        4.607,
        -3.926,
        -13.193,
        9.558
      ]
    },
    {
      "start": 183.70444,
      "duration": 0.24943,
      "confidence": 0.547,
      "loudness_start": -9.199,
      "loudness_max_time": 0.14122,
      "loudness_max": -3.16,
      "loudness_end": 0,
      "pitches": [
        0.262,
        1,
        0.288,
        0.193,
        0.371,
        0.29,
        0.072,
        0.049,
        0.05,
        0.097,
        0.04,
        0.22
      ],
      "timbre": [
        55.471,
        77.07,
        -1.285,
        -14.996,
        25.096,
        -44.59,
        19.191,
        -15.941,
        -3.6,
        14.159,
        -16.631,
        -1.755
      ]
    },
    {
      "start": 183.95387,
      "duration": 0.27315,
      "confidence": 0.584,
      "loudness_start": -7.773,
      "loudness_max_time": 0.01821,
      "loudness_max": 0.112,
      "loudness_end": 0,
      "pitches": [
        0.733,
        0.985,
        1,
        0.467,
        0.967,
        0.309,
        0.204,
        0.422,
        0.66,
        0.389,
        0.333,
        0.622
      ],
      "timbre": [
        57.876,
        53.459,
        32.012,
        -13.252,
        24.502,
        -53.598,
        39.547,
        20.241,
        9.972,
        20.039,
        13.145,
        11.097
      ]
    },
    {
      "start": 184.22704,
      "duration": 0.23814,
      "confidence": 0.131,
      "loudness_start": -3.73,
      "loudness_max_time": 0.17931,
      "loudness_max": -1.085,
      "loudness_end": 0,
      "pitches": [
        0.149,
        0.615,
        0.139,
        0.569,
        1,
        0.369,
        0.098,
        0.081,
        0.134,
        0.422,
        0.082,
        0.316
      ],
      "timbre": [
        58.101,
        89.213,
        23.419,
        -15.157,
        23.916,
        -46.892,
        5.323,
        -3.394,
        12.118,
        18.195,
        -9.632,
        12.941
      ]
    },
    {
      "start": 184.46516,
      "duration": 0.26485,
      "confidence": 0.246,
      "loudness_start": -3.977,
      "loudness_max_time": 0.0221,
      "loudness_max": 0.969,
      "loudness_end": 0,
      "pitches": [
        0.685,
        1,
        0.716,
        0.383,
        0.565,
        0.204,
        0.263,
        0.303,
        0.304,
        0.197,
        0.145,
        0.589
      ],
      "timbre": [
        58.129,
        83.006,
        1.02,
        -3.924,
        16.517,
        -44.414,
        1.716,
        -2.178,
        9.607,
        13.937,
        -0.302,
        4.436
      ]
    },
    {
      "start": 184.73003,
      "duration": 0.51846,
      "confidence": 0.063,
      "loudness_start": -5.297,
      "loudness_max_time": 0.15842,
      "loudness_max": -1.699,
      "loudness_end": 0,
      "pitches": [
        1,
        0.932,
        0.617,
        0.886,
        0.776,
        0.564,
        0.595,
        0.637,
        0.987,
        0.95,
        0.535,
        0.753
      ],
      "timbre": [
        55.811,
        77.125,
        -6.905,
        -7.221,
        28.385,
        -38.013,
        23.041,
        2.733,
        -2.251,
        12.495,
        -18.646,
        -14.618
      ]
    },
    {
      "start": 185.24847,
      "duration": 0.09896,
      "confidence": 0.807,
      "loudness_start": -8.465,
      "loudness_max_time": 0.03978,
      "loudness_max": 0.585,
      "loudness_end": 0,
      "pitches": [
        0.198,
        0.655,
        0.591,
        0.517,
        0.887,
        0.888,
        1,
        0.94,
        0.557,
        0.593,
        0.21,
        0.04
      ],
      "timbre": [
        57.861,
        107.267,
        58.698,
        21.924,
        1.58,
        -20.661,
        64.674,
        4.235,
        -17.128,
        8.364,
        0.249,
        18.805
      ]
    },
    {
      "start": 185.34744,
      "duration": 0.16095,
      "confidence": 0.189,
      "loudness_start": -3.655,
      "loudness_max_time": 0.04285,
      "loudness_max": 0.306,
      "loudness_end": 0,
      "pitches": [
        0.033,
        0.23,
        0.174,
        0.178,
        1,
        0.893,
        0.999,
        0.97,
        0.242,
        0.306,
        0.052,
        0.021
      ],
      "timbre": [
        57.592,
        100.904,
        52.57,
        23.681,
        15.06,
        -23.629,
        71.55,
        4.044,
        -4.209,
        -7.845,
        -24.742,
        34.292
      ]
    },
    {
      "start": 185.50839,
      "duration": 0.24626,
      "confidence": 0.526,
      "loudness_start": -5.351,
      "loudness_max_time": 0.02437,
      "loudness_max": 0.044,
      "loudness_end": 0,
      "pitches": [
        0.512,
        0.997,
        1,
        0.593,
        0.652,
        0.239,
        0.234,
        0.284,
        0.203,
        0.32,
        0.125,
        0.395
      ],
      "timbre": [
        57.366,
        77.185,
        18.292,
        20.751,
        18.343,
        -28.52,
        40.133,
        19.956,
        7.285,
        1.23,
        -13.764,
        18.515
      ]
    },
    {
      "start": 185.75465,
      "duration": 0.39651,
      "confidence": 0.728,
      "loudness_start": -9.781,
      "loudness_max_time": 0.10042,
      "loudness_max": -0.813,
      "loudness_end": 0,
      "pitches": [
        0.214,
        0.318,
        0.773,
        1,
        0.548,
        0.119,
        0.176,
        0.095,
        0.132,
        0.288,
        0.134,
        0.079
      ],
      "timbre": [
        55.762,
        71.554,
        40.565,
        -18.407,
        21.713,
        -10.358,
        35.119,
        9.933,
        -9.75,
        16.347,
        -19.505,
        -4.516
      ]
    },
    {
      "start": 186.15115,
      "duration": 0.16023,
      "confidence": 0.157,
      "loudness_start": -6.897,
      "loudness_max_time": 0.05286,
      "loudness_max": -3.609,
      "loudness_end": 0,
      "pitches": [
        0.113,
        0.155,
        0.11,
        0.068,
        0.499,
        0.489,
        1,
        0.987,
        0.845,
        0.906,
        0.345,
        0.013
      ],
      "timbre": [
        54.528,
        106.381,
        49.397,
        -6.294,
        4.49,
        -39.035,
        43.206,
        21.675,
        24.075,
        -6.697,
        -9.62,
        -9.295
      ]
    },
    {
      "start": 186.31139,
      "duration": 0.25546,
      "confidence": 0.804,
      "loudness_start": -6.94,
      "loudness_max_time": 0.05356,
      "loudness_max": 2.059,
      "loudness_end": 0,
      "pitches": [
        0.412,
        1,
        0.204,
        0.049,
        0.032,
        0.02,
        0.027,
        0.016,
        0.087,
        0.264,
        0.051,
        0.017
      ],
      "timbre": [
        59.168,
        118.513,
        39.121,
        6.059,
        20.939,
        -0.34,
        -7.953,
        -6.542,
        -13.001,
        6.548,
        -7.165,
        -3.215
      ]
    },
    {
      "start": 186.56685,
      "duration": 0.22018,
      "confidence": 0.333,
      "loudness_start": -5.909,
      "loudness_max_time": 0.02997,
      "loudness_max": 0.46,
      "loudness_end": 0,
      "pitches": [
        0.739,
        1,
        0.905,
        0.608,
        0.414,
        0.229,
        0.169,
        0.297,
        0.234,
        0.341,
        0.112,
        0.555
      ],
      "timbre": [
        56.861,
        83.314,
        -5.754,
        22.868,
        0.358,
        -50.789,
        9.766,
        13.307,
        -19.2,
        -7.644,
        -5.344,
        -1.267
      ]
    },
    {
      "start": 186.78703,
      "duration": 0.51329,
      "confidence": 0.6,
      "loudness_start": -7.015,
      "loudness_max_time": 0.11231,
      "loudness_max": 0.395,
      "loudness_end": 0,
      "pitches": [
        0.348,
        0.673,
        1,
        0.559,
        0.361,
        0.321,
        0.244,
        0.208,
        0.394,
        0.474,
        0.215,
        0.333
      ],
      "timbre": [
        55.518,
        68.642,
        37.897,
        -10.485,
        33.163,
        -14.925,
        38.741,
        24.931,
        -10.314,
        7.928,
        -39.515,
        4.744
      ]
    },
    {
      "start": 187.30032,
      "duration": 0.2644,
      "confidence": 0.704,
      "loudness_start": -10.747,
      "loudness_max_time": 0.21363,
      "loudness_max": -0.66,
      "loudness_end": 0,
      "pitches": [
        0.675,
        1,
        0.066,
        0.017,
        0.046,
        0.029,
        0.011,
        0.045,
        0.212,
        0.115,
        0.012,
        0.017
      ],
      "timbre": [
        55.371,
        76.697,
        58.495,
        -61.142,
        11.33,
        -9.434,
        14.05,
        14.308,
        -13.917,
        4.724,
        8.483,
        4.292
      ]
    },
    {
      "start": 187.56471,
      "duration": 0.29628,
      "confidence": 0.129,
      "loudness_start": -2.586,
      "loudness_max_time": 0.05332,
      "loudness_max": 0.469,
      "loudness_end": 0,
      "pitches": [
        0.687,
        1,
        0.713,
        0.485,
        0.411,
        0.206,
        0.155,
        0.181,
        0.145,
        0.23,
        0.088,
        0.252
      ],
      "timbre": [
        58.523,
        115.705,
        15.199,
        -13.154,
        13.795,
        -37.386,
        10.566,
        6.308,
        -12.581,
        13.633,
        -1.758,
        6.011
      ]
    },
    {
      "start": 187.861,
      "duration": 0.11025,
      "confidence": 0.007,
      "loudness_start": -2.74,
      "loudness_max_time": 0.01719,
      "loudness_max": -0.479,
      "loudness_end": 0,
      "pitches": [
        0.598,
        1,
        0.579,
        0.583,
        0.958,
        0.797,
        0.787,
        0.784,
        0.568,
        0.703,
        0.349,
        0.119
      ],
      "timbre": [
        57.236,
        91.807,
        7.109,
        16.087,
        40.194,
        -55.307,
        4.297,
        -10.36,
        3.198,
        7.304,
        -12.502,
        3.971
      ]
    },
    {
      "start": 187.97125,
      "duration": 0.13964,
      "confidence": 0.212,
      "loudness_start": -5.309,
      "loudness_max_time": 0.10537,
      "loudness_max": -2.418,
      "loudness_end": 0,
      "pitches": [
        0.901,
        1,
        0.612,
        0.591,
        0.514,
        0.359,
        0.821,
        0.822,
        0.706,
        0.759,
        0.405,
        0.197
      ],
      "timbre": [
        56.425,
        79.833,
        3.057,
        -39.017,
        34.996,
        -39.824,
        23.552,
        34.056,
        -5.649,
        8.757,
        -9.917,
        -4.206
      ]
    },
    {
      "start": 188.11089,
      "duration": 0.28422,
      "confidence": 0.365,
      "loudness_start": -3.948,
      "loudness_max_time": 0.06429,
      "loudness_max": 0.829,
      "loudness_end": 0,
      "pitches": [
        0.744,
        1,
        0.951,
        0.519,
        0.781,
        0.309,
        0.229,
        0.286,
        0.186,
        0.122,
        0.109,
        0.803
      ],
      "timbre": [
        57.294,
        81.499,
        25.288,
        1.087,
        26.354,
        -36.885,
        48.889,
        16.805,
        5.722,
        5.608,
        -12.404,
        8.546
      ]
    },
    {
      "start": 188.3951,
      "duration": 0.49982,
      "confidence": 0.634,
      "loudness_start": -6.711,
      "loudness_max_time": 0.08811,
      "loudness_max": 0.749,
      "loudness_end": 0,
      "pitches": [
        0.125,
        0.208,
        0.393,
        0.601,
        1,
        0.47,
        0.345,
        0.267,
        0.264,
        0.234,
        0.192,
        0.215
      ],
      "timbre": [
        57.285,
        91.522,
        29.253,
        -9.491,
        37.877,
        -20.306,
        21.42,
        19.137,
        4.993,
        12.418,
        -26.715,
        -2.455
      ]
    },
    {
      "start": 188.89491,
      "duration": 0.66222,
      "confidence": 0.753,
      "loudness_start": -7.222,
      "loudness_max_time": 0.0224,
      "loudness_max": 0.724,
      "loudness_end": 0,
      "pitches": [
        0.521,
        0.973,
        0.55,
        0.866,
        0.671,
        0.362,
        0.608,
        0.919,
        1,
        0.775,
        0.508,
        0.45
      ],
      "timbre": [
        58.901,
        136.554,
        35.414,
        5.209,
        -2.223,
        -27.088,
        10.546,
        -4.511,
        7.122,
        5.333,
        7.946,
        6.685
      ]
    },
    {
      "start": 189.55714,
      "duration": 0.13814,
      "confidence": 0.005,
      "loudness_start": -4.523,
      "loudness_max_time": 0.06823,
      "loudness_max": -1.216,
      "loudness_end": 0,
      "pitches": [
        0.033,
        0.384,
        0.304,
        0.289,
        0.93,
        0.893,
        1,
        0.956,
        0.387,
        0.502,
        0.051,
        0.032
      ],
      "timbre": [
        56.556,
        94.062,
        55.87,
        1.921,
        15.853,
        -34.379,
        48.314,
        10.924,
        7.485,
        1.057,
        -24.154,
        20.71
      ]
    },
    {
      "start": 189.69528,
      "duration": 0.23823,
      "confidence": 0.308,
      "loudness_start": -6.321,
      "loudness_max_time": 0.0212,
      "loudness_max": -0.538,
      "loudness_end": 0,
      "pitches": [
        0.573,
        1,
        0.859,
        0.425,
        0.521,
        0.194,
        0.239,
        0.26,
        0.17,
        0.354,
        0.109,
        0.43
      ],
      "timbre": [
        57.805,
        101.326,
        29.55,
        -6.163,
        12.838,
        -54.149,
        43.63,
        32.157,
        7.235,
        1.967,
        2.67,
        22.783
      ]
    },
    {
      "start": 189.93352,
      "duration": 0.41778,
      "confidence": 0.545,
      "loudness_start": -6.62,
      "loudness_max_time": 0.03558,
      "loudness_max": -0.645,
      "loudness_end": 0,
      "pitches": [
        0.235,
        0.342,
        0.726,
        1,
        0.551,
        0.146,
        0.206,
        0.119,
        0.154,
        0.346,
        0.132,
        0.094
      ],
      "timbre": [
        56.721,
        85.483,
        24.34,
        5.469,
        23.789,
        -13.291,
        1.792,
        1.887,
        3.557,
        9.309,
        -15.944,
        -8.523
      ]
    },
    {
      "start": 190.35129,
      "duration": 0.09891,
      "confidence": 0.215,
      "loudness_start": -7.409,
      "loudness_max_time": 0.01902,
      "loudness_max": -4.09,
      "loudness_end": 0,
      "pitches": [
        0.275,
        0.328,
        0.271,
        0.224,
        0.634,
        0.629,
        0.967,
        0.96,
        0.944,
        1,
        0.584,
        0.018
      ],
      "timbre": [
        53.714,
        133.659,
        39.594,
        12.469,
        -3.355,
        -36.473,
        25.006,
        6.41,
        19.691,
        -5.172,
        -2.749,
        -13.632
      ]
    },
    {
      "start": 190.4502,
      "duration": 0.29057,
      "confidence": 0.727,
      "loudness_start": -8.322,
      "loudness_max_time": 0.069,
      "loudness_max": -0.277,
      "loudness_end": 0,
      "pitches": [
        0.397,
        1,
        0.248,
        0.047,
        0.038,
        0.015,
        0.025,
        0.013,
        0.044,
        0.193,
        0.039,
        0.02
      ],
      "timbre": [
        55.841,
        99.138,
        68.684,
        -10.433,
        41.188,
        -13.425,
        54.452,
        13.197,
        8.458,
        11.125,
        -16.114,
        16.415
      ]
    },
    {
      "start": 190.74077,
      "duration": 0.20834,
      "confidence": 0.435,
      "loudness_start": -5.035,
      "loudness_max_time": 0.00737,
      "loudness_max": 0.611,
      "loudness_end": 0,
      "pitches": [
        0.675,
        1,
        0.907,
        0.626,
        0.497,
        0.244,
        0.17,
        0.302,
        0.26,
        0.503,
        0.148,
        0.5
      ],
      "timbre": [
        58.365,
        69.528,
        7.551,
        1.284,
        23.242,
        -51.12,
        16.59,
        -5.046,
        -8.58,
        -10.023,
        -12.152,
        17.107
      ]
    },
    {
      "start": 190.94913,
      "duration": 0.31542,
      "confidence": 0.182,
      "loudness_start": -4.391,
      "loudness_max_time": 0.06973,
      "loudness_max": -1.792,
      "loudness_end": 0,
      "pitches": [
        0.227,
        1,
        0.658,
        0.099,
        0.076,
        0.036,
        0.046,
        0.055,
        0.108,
        0.334,
        0.043,
        0.034
      ],
      "timbre": [
        56.366,
        20.941,
        53.171,
        5.828,
        43.075,
        -35.577,
        30.449,
        20.952,
        -26.458,
        10.707,
        -21.861,
        15.24
      ]
    },
    {
      "start": 191.26454,
      "duration": 0.23052,
      "confidence": 0.186,
      "loudness_start": -7.594,
      "loudness_max_time": 0.00628,
      "loudness_max": -2.274,
      "loudness_end": 0,
      "pitches": [
        0.565,
        1,
        0.704,
        0.321,
        0.329,
        0.165,
        0.105,
        0.14,
        0.111,
        0.06,
        0.045,
        0.343
      ],
      "timbre": [
        53.824,
        61.907,
        -31.286,
        -8.545,
        -9.396,
        -74.097,
        18.799,
        8.344,
        -3.843,
        -1.835,
        -7.634,
        10.739
      ]
    },
    {
      "start": 191.49506,
      "duration": 0.15138,
      "confidence": 0.416,
      "loudness_start": -11.7,
      "loudness_max_time": 0.05671,
      "loudness_max": -6.997,
      "loudness_end": 0,
      "pitches": [
        0.897,
        1,
        0.749,
        0.737,
        0.228,
        0.251,
        0.027,
        0.027,
        0.05,
        0.082,
        0.032,
        0.023
      ],
      "timbre": [
        51.115,
        38.444,
        10.37,
        -17.354,
        32.991,
        -26.85,
        39.685,
        -3.515,
        0.272,
        -8.349,
        -17.745,
        -15.789
      ]
    },
    {
      "start": 191.64644,
      "duration": 0.13365,
      "confidence": 0.549,
      "loudness_start": -10.32,
      "loudness_max_time": 0.06866,
      "loudness_max": -4.73,
      "loudness_end": 0,
      "pitches": [
        0.929,
        1,
        0.759,
        0.747,
        0.278,
        0.274,
        0.02,
        0.023,
        0.051,
        0.074,
        0.055,
        0.042
      ],
      "timbre": [
        53.689,
        52.796,
        1.303,
        -15.069,
        39.814,
        -33.959,
        58.226,
        -3.508,
        8.075,
        11.63,
        -16.127,
        -7.839
      ]
    },
    {
      "start": 191.78009,
      "duration": 0.2722,
      "confidence": 0.776,
      "loudness_start": -8.621,
      "loudness_max_time": 0.02385,
      "loudness_max": 1.963,
      "loudness_end": 0,
      "pitches": [
        0.714,
        1,
        0.589,
        0.244,
        0.312,
        0.127,
        0.073,
        0.141,
        0.083,
        0.505,
        0.057,
        0.312
      ],
      "timbre": [
        59.346,
        72.388,
        55.428,
        8.901,
        16.857,
        -49.005,
        51.936,
        31.147,
        4.183,
        16.61,
        12.142,
        -13.84
      ]
    },
    {
      "start": 192.05229,
      "duration": 0.24907,
      "confidence": 0.045,
      "loudness_start": -3.532,
      "loudness_max_time": 0.03605,
      "loudness_max": -0.893,
      "loudness_end": 0,
      "pitches": [
        0.278,
        1,
        0.301,
        0.262,
        0.349,
        0.256,
        0.088,
        0.046,
        0.052,
        0.113,
        0.045,
        0.404
      ],
      "timbre": [
        57.759,
        73.015,
        45.234,
        24.084,
        37.271,
        -43.182,
        52.922,
        3.127,
        7.508,
        7.549,
        -29.459,
        21.159
      ]
    },
    {
      "start": 192.30136,
      "duration": 0.51569,
      "confidence": 0.679,
      "loudness_start": -7.114,
      "loudness_max_time": 0.07016,
      "loudness_max": 0.53,
      "loudness_end": 0,
      "pitches": [
        0.323,
        0.316,
        0.28,
        0.543,
        1,
        0.627,
        0.276,
        0.653,
        0.508,
        0.42,
        0.151,
        0.411
      ],
      "timbre": [
        57.898,
        78.79,
        33.516,
        -12.49,
        13.823,
        -25.353,
        50.487,
        25.104,
        11.569,
        -1.46,
        -2.636,
        18.983
      ]
    },
    {
      "start": 192.81705,
      "duration": 0.47873,
      "confidence": 0.625,
      "loudness_start": -5.769,
      "loudness_max_time": 0.0415,
      "loudness_max": 0.619,
      "loudness_end": 0,
      "pitches": [
        0.127,
        0.206,
        0.302,
        0.584,
        1,
        0.203,
        0.339,
        0.536,
        0.583,
        0.429,
        0.222,
        0.392
      ],
      "timbre": [
        58.502,
        75.476,
        29.329,
        -4.279,
        23.901,
        -39.797,
        45.377,
        21.684,
        0.661,
        13.841,
        10.087,
        12.526
      ]
    },
    {
      "start": 193.29578,
      "duration": 0.24853,
      "confidence": 0.067,
      "loudness_start": -2.44,
      "loudness_max_time": 0.06406,
      "loudness_max": 0.23,
      "loudness_end": 0,
      "pitches": [
        0.501,
        0.924,
        0.862,
        1,
        0.819,
        0.523,
        0.625,
        0.454,
        0.405,
        0.279,
        0.222,
        0.563
      ],
      "timbre": [
        58.472,
        104.555,
        36.712,
        -9.372,
        18.618,
        -41.627,
        58.56,
        6.423,
        12.262,
        16.159,
        -13.286,
        24.408
      ]
    },
    {
      "start": 193.54431,
      "duration": 0.60363,
      "confidence": 0.37,
      "loudness_start": -3.573,
      "loudness_max_time": 0.06016,
      "loudness_max": 0.273,
      "loudness_end": 0,
      "pitches": [
        0.104,
        0.264,
        0.241,
        0.24,
        0.22,
        0.497,
        1,
        0.477,
        0.198,
        0.224,
        0.172,
        0.11
      ],
      "timbre": [
        58.176,
        129.799,
        59.744,
        -0.463,
        18.343,
        -26.847,
        51.543,
        -6.591,
        2.766,
        12.163,
        -12.876,
        15.818
      ]
    },
    {
      "start": 194.14793,
      "duration": 0.18522,
      "confidence": 0.323,
      "loudness_start": -4.709,
      "loudness_max_time": 0.048,
      "loudness_max": -0.571,
      "loudness_end": 0,
      "pitches": [
        0.529,
        1,
        0.976,
        0.904,
        0.462,
        0.386,
        0.096,
        0.062,
        0.046,
        0.106,
        0.03,
        0.064
      ],
      "timbre": [
        56.854,
        100.726,
        39.607,
        31.475,
        23.492,
        -28.252,
        24.838,
        -16.641,
        -9.371,
        8.041,
        -28.46,
        -7.235
      ]
    },
    {
      "start": 194.33315,
      "duration": 0.2961,
      "confidence": 0.586,
      "loudness_start": -6.149,
      "loudness_max_time": 0.10705,
      "loudness_max": 0.725,
      "loudness_end": 0,
      "pitches": [
        0.584,
        1,
        0.584,
        0.613,
        0.647,
        0.434,
        0.311,
        0.318,
        0.228,
        0.155,
        0.103,
        0.351
      ],
      "timbre": [
        56.09,
        92.153,
        39.815,
        -26.492,
        14.008,
        -20.357,
        31.619,
        25.103,
        6.615,
        -2.708,
        -19.005,
        2.058
      ]
    },
    {
      "start": 194.62926,
      "duration": 0.53002,
      "confidence": 0.738,
      "loudness_start": -8.384,
      "loudness_max_time": 0.30934,
      "loudness_max": 0.696,
      "loudness_end": 0,
      "pitches": [
        0.204,
        0.84,
        1,
        0.665,
        0.321,
        0.176,
        0.217,
        0.277,
        0.302,
        0.32,
        0.191,
        0.078
      ],
      "timbre": [
        55.599,
        106.649,
        40.584,
        -37.249,
        53.138,
        -10.484,
        16.433,
        -7.908,
        -6.065,
        17.664,
        -33.276,
        -5.536
      ]
    },
    {
      "start": 195.15927,
      "duration": 0.2829,
      "confidence": 0.841,
      "loudness_start": -8.796,
      "loudness_max_time": 0.04444,
      "loudness_max": 1.708,
      "loudness_end": 0,
      "pitches": [
        0.224,
        1,
        0.597,
        0.08,
        0.029,
        0.033,
        0.023,
        0.019,
        0.042,
        0.121,
        0.028,
        0.049
      ],
      "timbre": [
        58.257,
        102.424,
        35.839,
        -28.728,
        35.745,
        10.477,
        -10.435,
        7.918,
        23.949,
        17.872,
        9.679,
        -39.017
      ]
    },
    {
      "start": 195.44218,
      "duration": 0.25587,
      "confidence": 0.076,
      "loudness_start": -2.842,
      "loudness_max_time": 0.07467,
      "loudness_max": 0.007,
      "loudness_end": 0,
      "pitches": [
        0.567,
        1,
        0.539,
        0.194,
        0.25,
        0.125,
        0.104,
        0.106,
        0.096,
        0.076,
        0.055,
        0.586
      ],
      "timbre": [
        58.226,
        94.131,
        34.108,
        -9.294,
        9.877,
        -40.497,
        31.548,
        17.495,
        9.172,
        8.436,
        -4.175,
        0.071
      ]
    },
    {
      "start": 195.69804,
      "duration": 0.78857,
      "confidence": 0.269,
      "loudness_start": -3.579,
      "loudness_max_time": 0.00803,
      "loudness_max": 0.173,
      "loudness_end": 0,
      "pitches": [
        0.507,
        1,
        0.797,
        0.574,
        0.67,
        0.344,
        0.6,
        0.691,
        0.875,
        0.762,
        0.345,
        0.214
      ],
      "timbre": [
        58.421,
        110.971,
        69.508,
        13.791,
        21.066,
        -51.725,
        43.474,
        10.589,
        -1.847,
        7.26,
        -18.886,
        16.788
      ]
    },
    {
      "start": 196.48662,
      "duration": 0.24399,
      "confidence": 0.329,
      "loudness_start": -4.875,
      "loudness_max_time": 0.01508,
      "loudness_max": -0.6,
      "loudness_end": 0,
      "pitches": [
        0.73,
        1,
        0.852,
        0.305,
        0.76,
        0.22,
        0.13,
        0.208,
        0.143,
        0.165,
        0.056,
        0.656
      ],
      "timbre": [
        56.344,
        82.44,
        19.545,
        1.686,
        -6.494,
        -66.803,
        39.503,
        23.074,
        -7.411,
        0.38,
        5.464,
        22.545
      ]
    },
    {
      "start": 196.7306,
      "duration": 0.25039,
      "confidence": 0.676,
      "loudness_start": -7.027,
      "loudness_max_time": 0.11107,
      "loudness_max": 0.471,
      "loudness_end": 0,
      "pitches": [
        0.16,
        0.626,
        0.062,
        0.307,
        1,
        0.346,
        0.067,
        0.1,
        0.374,
        0.26,
        0.083,
        0.386
      ],
      "timbre": [
        58.057,
        96.369,
        41.716,
        -33.486,
        37.415,
        -11.716,
        14.893,
        3.389,
        -11.288,
        21.431,
        1.531,
        5.737
      ]
    },
    {
      "start": 196.981,
      "duration": 0.25483,
      "confidence": 0.066,
      "loudness_start": -2.957,
      "loudness_max_time": 0.02603,
      "loudness_max": 1.375,
      "loudness_end": 0,
      "pitches": [
        0.524,
        0.881,
        1,
        0.437,
        0.636,
        0.333,
        0.217,
        0.288,
        0.197,
        0.202,
        0.134,
        0.492
      ],
      "timbre": [
        57.651,
        102.069,
        -1.857,
        20.088,
        4.174,
        -41.18,
        14.143,
        5.745,
        -12.573,
        12.175,
        3.859,
        10.065
      ]
    },
    {
      "start": 197.23582,
      "duration": 0.12789,
      "confidence": 0.744,
      "loudness_start": -6.029,
      "loudness_max_time": 0.03785,
      "loudness_max": 2.054,
      "loudness_end": 0,
      "pitches": [
        0.278,
        1,
        0.167,
        0.509,
        0.628,
        0.194,
        0.154,
        0.213,
        0.307,
        0.295,
        0.366,
        0.259
      ],
      "timbre": [
        59.5,
        142.392,
        15.969,
        13.758,
        12.268,
        -38.881,
        -5.962,
        -13.682,
        3.261,
        17.179,
        -4.604,
        2.207
      ]
    },
    {
      "start": 197.36372,
      "duration": 0.38884,
      "confidence": 0.311,
      "loudness_start": -2.175,
      "loudness_max_time": 0.03578,
      "loudness_max": 0.248,
      "loudness_end": 0,
      "pitches": [
        0.485,
        0.795,
        0.5,
        0.96,
        0.789,
        0.481,
        0.698,
        0.804,
        1,
        0.87,
        0.679,
        0.377
      ],
      "timbre": [
        58.158,
        113.131,
        2.157,
        16.539,
        21.323,
        -34.025,
        11.298,
        -39.914,
        6.523,
        11.171,
        -19.799,
        -2.429
      ]
    },
    {
      "start": 197.75256,
      "duration": 0.18005,
      "confidence": 0.651,
      "loudness_start": -6.76,
      "loudness_max_time": 0.04653,
      "loudness_max": -0.167,
      "loudness_end": 0,
      "pitches": [
        0.033,
        0.229,
        0.163,
        0.184,
        0.974,
        0.911,
        1,
        0.981,
        0.194,
        0.228,
        0.07,
        0.026
      ],
      "timbre": [
        57.469,
        88.165,
        70.437,
        9.733,
        7.008,
        -12.435,
        54.237,
        25.165,
        -20.188,
        -2.582,
        0.309,
        13.337
      ]
    },
    {
      "start": 197.93262,
      "duration": 0.11034,
      "confidence": 0.048,
      "loudness_start": -2.961,
      "loudness_max_time": 0.01689,
      "loudness_max": -1.066,
      "loudness_end": 0,
      "pitches": [
        0.112,
        0.516,
        0.456,
        0.42,
        0.842,
        0.869,
        1,
        0.892,
        0.501,
        0.533,
        0.145,
        0.015
      ],
      "timbre": [
        56.99,
        84.573,
        42.515,
        23.505,
        17.889,
        -45.27,
        45.728,
        -12.943,
        -18.919,
        10.331,
        -20.406,
        -4.589
      ]
    },
    {
      "start": 198.04295,
      "duration": 0.27306,
      "confidence": 0.36,
      "loudness_start": -5.794,
      "loudness_max_time": 0.02245,
      "loudness_max": 0.054,
      "loudness_end": 0,
      "pitches": [
        0.597,
        1,
        0.911,
        0.383,
        0.458,
        0.224,
        0.992,
        0.298,
        0.205,
        0.389,
        0.121,
        0.438
      ],
      "timbre": [
        58.138,
        69.807,
        42.641,
        0.93,
        22.095,
        -50.774,
        32.365,
        16.776,
        -1.133,
        1.765,
        -4.661,
        -4.077
      ]
    },
    {
      "start": 198.31601,
      "duration": 0.24295,
      "confidence": 0.345,
      "loudness_start": -4.554,
      "loudness_max_time": 0.02463,
      "loudness_max": -0.795,
      "loudness_end": 0,
      "pitches": [
        0.415,
        1,
        0.185,
        0.105,
        0.141,
        0.068,
        0.103,
        0.049,
        0.13,
        0.168,
        0.075,
        0.076
      ],
      "timbre": [
        56.81,
        97.078,
        34.492,
        37.066,
        15.436,
        -38.419,
        17.762,
        -9.701,
        -24.274,
        -7.011,
        -19.41,
        -28.264
      ]
    },
    {
      "start": 198.55896,
      "duration": 0.27361,
      "confidence": 0.702,
      "loudness_start": -6.174,
      "loudness_max_time": 0.09943,
      "loudness_max": 0.733,
      "loudness_end": 0,
      "pitches": [
        0.638,
        1,
        0.632,
        0.518,
        0.734,
        0.265,
        0.182,
        0.241,
        0.16,
        0.2,
        0.083,
        0.512
      ],
      "timbre": [
        57.735,
        93.801,
        18.116,
        13.202,
        24.841,
        -25.414,
        6.871,
        37.06,
        20.422,
        -2.912,
        -19.049,
        -20.314
      ]
    },
    {
      "start": 198.83257,
      "duration": 0.25528,
      "confidence": 0.803,
      "loudness_start": -8.446,
      "loudness_max_time": 0.07109,
      "loudness_max": 0.781,
      "loudness_end": 0,
      "pitches": [
        0.402,
        1,
        0.237,
        0.045,
        0.019,
        0.011,
        0.021,
        0.012,
        0.041,
        0.159,
        0.035,
        0.02
      ],
      "timbre": [
        57.911,
        109.006,
        36.47,
        -37.871,
        49.551,
        -3.818,
        -0.276,
        6.03,
        0.974,
        31.669,
        -5.02,
        -13.26
      ]
    },
    {
      "start": 199.08784,
      "duration": 0.25601,
      "confidence": 0.103,
      "loudness_start": -1.879,
      "loudness_max_time": 0.02469,
      "loudness_max": 1.216,
      "loudness_end": 0,
      "pitches": [
        0.792,
        1,
        0.909,
        0.515,
        0.428,
        0.223,
        0.197,
        0.367,
        0.327,
        0.333,
        0.134,
        0.542
      ],
      "timbre": [
        57.392,
        90.389,
        -0.618,
        33.862,
        13.397,
        -58.814,
        8.645,
        10.354,
        -6.787,
        -5.804,
        -6.529,
        -11.717
      ]
    },
    {
      "start": 199.34386,
      "duration": 0.51034,
      "confidence": 0.787,
      "loudness_start": -8.139,
      "loudness_max_time": 0.03086,
      "loudness_max": 0.902,
      "loudness_end": 0,
      "pitches": [
        0.431,
        0.833,
        1,
        0.606,
        0.398,
        0.371,
        0.336,
        0.296,
        0.582,
        0.507,
        0.238,
        0.531
      ],
      "timbre": [
        58.758,
        99.9,
        32.635,
        1.417,
        30.691,
        -16.968,
        -9.825,
        -0.047,
        20.177,
        8.243,
        -2.341,
        -32.825
      ]
    },
    {
      "start": 199.8542,
      "duration": 0.21986,
      "confidence": 0.133,
      "loudness_start": -4.184,
      "loudness_max_time": 0.06868,
      "loudness_max": -0.956,
      "loudness_end": 0,
      "pitches": [
        0.722,
        1,
        0.082,
        0.016,
        0.091,
        0.03,
        0.02,
        0.051,
        0.151,
        0.14,
        0.015,
        0.114
      ],
      "timbre": [
        57.536,
        99.999,
        84.374,
        12.775,
        21.984,
        -33.147,
        59.324,
        9.615,
        -2.716,
        13.32,
        -26.519,
        22.382
      ]
    },
    {
      "start": 200.07407,
      "duration": 0.2737,
      "confidence": 0.513,
      "loudness_start": -5.467,
      "loudness_max_time": 0.0634,
      "loudness_max": 0.08,
      "loudness_end": 0,
      "pitches": [
        0.738,
        1,
        0.69,
        0.592,
        0.515,
        0.28,
        0.242,
        0.24,
        0.18,
        0.267,
        0.126,
        0.258
      ],
      "timbre": [
        56.883,
        60.847,
        58.573,
        -27.015,
        23.034,
        -35.89,
        49.112,
        44.706,
        7.582,
        -1.547,
        -10.167,
        12.517
      ]
    },
    {
      "start": 200.34776,
      "duration": 0.30834,
      "confidence": 0.148,
      "loudness_start": -3.05,
      "loudness_max_time": 0.01381,
      "loudness_max": -0.591,
      "loudness_end": 0,
      "pitches": [
        0.187,
        1,
        0.271,
        0.357,
        0.464,
        0.351,
        0.091,
        0.064,
        0.068,
        0.217,
        0.06,
        0.323
      ],
      "timbre": [
        57.375,
        74.16,
        62.915,
        26.93,
        23.479,
        -43.149,
        24.263,
        7.007,
        -16.668,
        2.442,
        -9.962,
        -1.555
      ]
    },
    {
      "start": 200.6561,
      "duration": 0.26127,
      "confidence": 0.574,
      "loudness_start": -6.603,
      "loudness_max_time": 0.04395,
      "loudness_max": 1.243,
      "loudness_end": 0,
      "pitches": [
        0.586,
        1,
        0.633,
        0.455,
        0.436,
        0.141,
        0.193,
        0.218,
        0.206,
        0.237,
        0.236,
        0.753
      ],
      "timbre": [
        57.839,
        69.813,
        12.832,
        2.933,
        4.274,
        -20.977,
        21.23,
        6.254,
        4.315,
        -7.305,
        -21.543,
        12.868
      ]
    },
    {
      "start": 200.91737,
      "duration": 0.26009,
      "confidence": 0.614,
      "loudness_start": -6.545,
      "loudness_max_time": 0.12574,
      "loudness_max": 0.453,
      "loudness_end": 0,
      "pitches": [
        0.355,
        0.689,
        0.156,
        0.555,
        1,
        0.363,
        0.135,
        0.126,
        0.179,
        0.363,
        0.137,
        0.653
      ],
      "timbre": [
        58.865,
        93.281,
        26.269,
        -10.741,
        28.609,
        -38.132,
        -6.341,
        -6.961,
        8.594,
        9.671,
        -8.469,
        5.604
      ]
    },
    {
      "start": 201.17746,
      "duration": 0.18009,
      "confidence": 0.167,
      "loudness_start": -3.485,
      "loudness_max_time": 0.00562,
      "loudness_max": 0.159,
      "loudness_end": 0,
      "pitches": [
        0.642,
        1,
        0.319,
        0.287,
        0.528,
        0.472,
        0.926,
        0.916,
        0.855,
        0.869,
        0.558,
        0.097
      ],
      "timbre": [
        57.454,
        84.48,
        -0.327,
        -13.384,
        -1.498,
        -64.466,
        10.085,
        1.556,
        -1.297,
        -11.676,
        -0.69,
        15.461
      ]
    },
    {
      "start": 201.35754,
      "duration": 0.5405,
      "confidence": 0.464,
      "loudness_start": -4.748,
      "loudness_max_time": 0.09921,
      "loudness_max": -0.441,
      "loudness_end": 0,
      "pitches": [
        0.744,
        0.914,
        0.853,
        0.881,
        0.825,
        0.28,
        0.172,
        0.204,
        0.28,
        0.461,
        0.315,
        1
      ],
      "timbre": [
        57.187,
        101.909,
        26.968,
        -31.682,
        8.958,
        -14.999,
        -17.49,
        3.186,
        11.808,
        -8.916,
        -9.869,
        -3.464
      ]
    },
    {
      "start": 201.89806,
      "duration": 1.07964,
      "confidence": 0.3,
      "loudness_start": -6.688,
      "loudness_max_time": 0.058,
      "loudness_max": -3.079,
      "loudness_end": 0,
      "pitches": [
        0.047,
        0.114,
        0.054,
        0.056,
        0.203,
        0.036,
        0.044,
        0.04,
        0.189,
        1,
        0.104,
        0.111
      ],
      "timbre": [
        52.404,
        101.727,
        116.355,
        86.995,
        69.965,
        -8.111,
        -24.071,
        15.424,
        -18.184,
        -8.169,
        -45.125,
        3.943
      ]
    },
    {
      "start": 202.97769,
      "duration": 4.98218,
      "confidence": 0.054,
      "loudness_start": -23.839,
      "loudness_max_time": 0.05905,
      "loudness_max": -21.116,
      "loudness_end": -60,
      "pitches": [
        0.267,
        0.264,
        0.28,
        0.236,
        0.394,
        0.24,
        0.274,
        0.224,
        0.4,
        1,
        0.539,
        0.55
      ],
      "timbre": [
        23.384,
        115.685,
        -41.789,
        304.61,
        53.212,
        -64.284,
        -54.325,
        73.195,
        21.897,
        -45.016,
        -64.452,
        5.275
      ]
    }
  ],
  "tatums": [
    {
      "start": 0.49567,
      "duration": 0.28215,
      "confidence": 0.612
    },
    {
      "start": 0.77782,
      "duration": 0.28215,
      "confidence": 0.612
    },
    {
      "start": 1.05998,
      "duration": 0.27448,
      "confidence": 0.325
    },
    {
      "start": 1.33446,
      "duration": 0.27448,
      "confidence": 0.325
    },
    {
      "start": 1.60894,
      "duration": 0.2685,
      "confidence": 0.228
    },
    {
      "start": 1.87744,
      "duration": 0.2685,
      "confidence": 0.228
    },
    {
      "start": 2.14594,
      "duration": 0.26861,
      "confidence": 0.643
    },
    {
      "start": 2.41455,
      "duration": 0.26861,
      "confidence": 0.643
    },
    {
      "start": 2.68316,
      "duration": 0.26666,
      "confidence": 0.82
    },
    {
      "start": 2.94982,
      "duration": 0.26666,
      "confidence": 0.82
    },
    {
      "start": 3.21647,
      "duration": 0.26349,
      "confidence": 0.64
    },
    {
      "start": 3.47996,
      "duration": 0.26349,
      "confidence": 0.64
    },
    {
      "start": 3.74345,
      "duration": 0.2613,
      "confidence": 0.667
    },
    {
      "start": 4.00475,
      "duration": 0.2613,
      "confidence": 0.667
    },
    {
      "start": 4.26605,
      "duration": 0.26353,
      "confidence": 0.782
    },
    {
      "start": 4.52958,
      "duration": 0.26353,
      "confidence": 0.782
    },
    {
      "start": 4.79311,
      "duration": 0.26502,
      "confidence": 0.838
    },
    {
      "start": 5.05813,
      "duration": 0.26502,
      "confidence": 0.838
    },
    {
      "start": 5.32316,
      "duration": 0.27044,
      "confidence": 0.639
    },
    {
      "start": 5.59359,
      "duration": 0.27044,
      "confidence": 0.639
    },
    {
      "start": 5.86403,
      "duration": 0.27389,
      "confidence": 0.813
    },
    {
      "start": 6.13792,
      "duration": 0.27389,
      "confidence": 0.813
    },
    {
      "start": 6.41182,
      "duration": 0.27955,
      "confidence": 0.759
    },
    {
      "start": 6.69137,
      "duration": 0.27955,
      "confidence": 0.759
    },
    {
      "start": 6.97092,
      "duration": 0.27884,
      "confidence": 0.585
    },
    {
      "start": 7.24976,
      "duration": 0.27884,
      "confidence": 0.585
    },
    {
      "start": 7.5286,
      "duration": 0.27812,
      "confidence": 0.645
    },
    {
      "start": 7.80671,
      "duration": 0.27812,
      "confidence": 0.645
    },
    {
      "start": 8.08483,
      "duration": 0.27641,
      "confidence": 0.544
    },
    {
      "start": 8.36125,
      "duration": 0.27641,
      "confidence": 0.544
    },
    {
      "start": 8.63766,
      "duration": 0.27692,
      "confidence": 0.634
    },
    {
      "start": 8.91458,
      "duration": 0.27692,
      "confidence": 0.634
    },
    {
      "start": 9.1915,
      "duration": 0.2789,
      "confidence": 0.55
    },
    {
      "start": 9.4704,
      "duration": 0.2789,
      "confidence": 0.55
    },
    {
      "start": 9.7493,
      "duration": 0.2794,
      "confidence": 0.641
    },
    {
      "start": 10.0287,
      "duration": 0.2794,
      "confidence": 0.641
    },
    {
      "start": 10.3081,
      "duration": 0.27942,
      "confidence": 0.739
    },
    {
      "start": 10.58751,
      "duration": 0.27942,
      "confidence": 0.739
    },
    {
      "start": 10.86693,
      "duration": 0.27895,
      "confidence": 0.471
    },
    {
      "start": 11.14588,
      "duration": 0.27895,
      "confidence": 0.471
    },
    {
      "start": 11.42483,
      "duration": 0.28339,
      "confidence": 0.673
    },
    {
      "start": 11.70822,
      "duration": 0.28339,
      "confidence": 0.673
    },
    {
      "start": 11.9916,
      "duration": 0.28176,
      "confidence": 0.473
    },
    {
      "start": 12.27336,
      "duration": 0.28176,
      "confidence": 0.473
    },
    {
      "start": 12.55512,
      "duration": 0.27915,
      "confidence": 0.534
    },
    {
      "start": 12.83426,
      "duration": 0.27915,
      "confidence": 0.534
    },
    {
      "start": 13.11341,
      "duration": 0.27905,
      "confidence": 0.633
    },
    {
      "start": 13.39246,
      "duration": 0.27905,
      "confidence": 0.633
    },
    {
      "start": 13.67151,
      "duration": 0.27845,
      "confidence": 0.417
    },
    {
      "start": 13.94997,
      "duration": 0.27845,
      "confidence": 0.417
    },
    {
      "start": 14.22842,
      "duration": 0.27863,
      "confidence": 0.311
    },
    {
      "start": 14.50705,
      "duration": 0.27863,
      "confidence": 0.311
    },
    {
      "start": 14.78568,
      "duration": 0.27955,
      "confidence": 0.352
    },
    {
      "start": 15.06523,
      "duration": 0.27955,
      "confidence": 0.352
    },
    {
      "start": 15.34477,
      "duration": 0.27652,
      "confidence": 0.486
    },
    {
      "start": 15.6213,
      "duration": 0.27652,
      "confidence": 0.486
    },
    {
      "start": 15.89782,
      "duration": 0.27565,
      "confidence": 0.278
    },
    {
      "start": 16.17347,
      "duration": 0.27565,
      "confidence": 0.278
    },
    {
      "start": 16.44912,
      "duration": 0.27602,
      "confidence": 0.671
    },
    {
      "start": 16.72514,
      "duration": 0.27602,
      "confidence": 0.671
    },
    {
      "start": 17.00116,
      "duration": 0.27093,
      "confidence": 0.642
    },
    {
      "start": 17.27209,
      "duration": 0.27093,
      "confidence": 0.642
    },
    {
      "start": 17.54301,
      "duration": 0.26928,
      "confidence": 0.184
    },
    {
      "start": 17.81229,
      "duration": 0.26928,
      "confidence": 0.184
    },
    {
      "start": 18.08157,
      "duration": 0.26242,
      "confidence": 0.604
    },
    {
      "start": 18.34399,
      "duration": 0.26242,
      "confidence": 0.604
    },
    {
      "start": 18.60642,
      "duration": 0.25998,
      "confidence": 0.736
    },
    {
      "start": 18.86639,
      "duration": 0.25998,
      "confidence": 0.736
    },
    {
      "start": 19.12637,
      "duration": 0.26641,
      "confidence": 0.744
    },
    {
      "start": 19.39277,
      "duration": 0.26641,
      "confidence": 0.744
    },
    {
      "start": 19.65918,
      "duration": 0.2743,
      "confidence": 0.54
    },
    {
      "start": 19.93347,
      "duration": 0.2743,
      "confidence": 0.54
    },
    {
      "start": 20.20777,
      "duration": 0.27874,
      "confidence": 0.49
    },
    {
      "start": 20.48651,
      "duration": 0.27874,
      "confidence": 0.49
    },
    {
      "start": 20.76525,
      "duration": 0.28213,
      "confidence": 0.523
    },
    {
      "start": 21.04737,
      "duration": 0.28213,
      "confidence": 0.523
    },
    {
      "start": 21.3295,
      "duration": 0.2865,
      "confidence": 0.237
    },
    {
      "start": 21.616,
      "duration": 0.2865,
      "confidence": 0.237
    },
    {
      "start": 21.90249,
      "duration": 0.28935,
      "confidence": 0.407
    },
    {
      "start": 22.19184,
      "duration": 0.28935,
      "confidence": 0.407
    },
    {
      "start": 22.48119,
      "duration": 0.29023,
      "confidence": 0.327
    },
    {
      "start": 22.77143,
      "duration": 0.29023,
      "confidence": 0.327
    },
    {
      "start": 23.06166,
      "duration": 0.28271,
      "confidence": 0.215
    },
    {
      "start": 23.34437,
      "duration": 0.28271,
      "confidence": 0.215
    },
    {
      "start": 23.62708,
      "duration": 0.28009,
      "confidence": 0.532
    },
    {
      "start": 23.90717,
      "duration": 0.28009,
      "confidence": 0.532
    },
    {
      "start": 24.18726,
      "duration": 0.27983,
      "confidence": 0.503
    },
    {
      "start": 24.4671,
      "duration": 0.27983,
      "confidence": 0.503
    },
    {
      "start": 24.74693,
      "duration": 0.27597,
      "confidence": 0.129
    },
    {
      "start": 25.0229,
      "duration": 0.27597,
      "confidence": 0.129
    },
    {
      "start": 25.29888,
      "duration": 0.2698,
      "confidence": 0.644
    },
    {
      "start": 25.56868,
      "duration": 0.2698,
      "confidence": 0.644
    },
    {
      "start": 25.83848,
      "duration": 0.2702,
      "confidence": 0.428
    },
    {
      "start": 26.10868,
      "duration": 0.2702,
      "confidence": 0.428
    },
    {
      "start": 26.37889,
      "duration": 0.2677,
      "confidence": 0.678
    },
    {
      "start": 26.64658,
      "duration": 0.2677,
      "confidence": 0.678
    },
    {
      "start": 26.91428,
      "duration": 0.26978,
      "confidence": 0.526
    },
    {
      "start": 27.18405,
      "duration": 0.26978,
      "confidence": 0.526
    },
    {
      "start": 27.45383,
      "duration": 0.26646,
      "confidence": 0.532
    },
    {
      "start": 27.72029,
      "duration": 0.26646,
      "confidence": 0.532
    },
    {
      "start": 27.98674,
      "duration": 0.26308,
      "confidence": 0.24
    },
    {
      "start": 28.24982,
      "duration": 0.26308,
      "confidence": 0.24
    },
    {
      "start": 28.5129,
      "duration": 0.26073,
      "confidence": 0.379
    },
    {
      "start": 28.77364,
      "duration": 0.26073,
      "confidence": 0.379
    },
    {
      "start": 29.03437,
      "duration": 0.26083,
      "confidence": 0.531
    },
    {
      "start": 29.2952,
      "duration": 0.26083,
      "confidence": 0.531
    },
    {
      "start": 29.55603,
      "duration": 0.25954,
      "confidence": 0.631
    },
    {
      "start": 29.81557,
      "duration": 0.25954,
      "confidence": 0.631
    },
    {
      "start": 30.07511,
      "duration": 0.26209,
      "confidence": 0.321
    },
    {
      "start": 30.33719,
      "duration": 0.26209,
      "confidence": 0.321
    },
    {
      "start": 30.59928,
      "duration": 0.26131,
      "confidence": 0.096
    },
    {
      "start": 30.86059,
      "duration": 0.26131,
      "confidence": 0.096
    },
    {
      "start": 31.1219,
      "duration": 0.26162,
      "confidence": 0.259
    },
    {
      "start": 31.38353,
      "duration": 0.26162,
      "confidence": 0.259
    },
    {
      "start": 31.64515,
      "duration": 0.2594,
      "confidence": 0.225
    },
    {
      "start": 31.90455,
      "duration": 0.2594,
      "confidence": 0.225
    },
    {
      "start": 32.16394,
      "duration": 0.26092,
      "confidence": 0.494
    },
    {
      "start": 32.42487,
      "duration": 0.26092,
      "confidence": 0.494
    },
    {
      "start": 32.68579,
      "duration": 0.26107,
      "confidence": 0.315
    },
    {
      "start": 32.94687,
      "duration": 0.26107,
      "confidence": 0.315
    },
    {
      "start": 33.20794,
      "duration": 0.26055,
      "confidence": 0.63
    },
    {
      "start": 33.46849,
      "duration": 0.26055,
      "confidence": 0.63
    },
    {
      "start": 33.72904,
      "duration": 0.26011,
      "confidence": 0.718
    },
    {
      "start": 33.98915,
      "duration": 0.26011,
      "confidence": 0.718
    },
    {
      "start": 34.24926,
      "duration": 0.26071,
      "confidence": 0.532
    },
    {
      "start": 34.50997,
      "duration": 0.26071,
      "confidence": 0.532
    },
    {
      "start": 34.77068,
      "duration": 0.25904,
      "confidence": 0.335
    },
    {
      "start": 35.02972,
      "duration": 0.25904,
      "confidence": 0.335
    },
    {
      "start": 35.28876,
      "duration": 0.25957,
      "confidence": 0.502
    },
    {
      "start": 35.54833,
      "duration": 0.25957,
      "confidence": 0.502
    },
    {
      "start": 35.8079,
      "duration": 0.26021,
      "confidence": 0.326
    },
    {
      "start": 36.06812,
      "duration": 0.26021,
      "confidence": 0.326
    },
    {
      "start": 36.32833,
      "duration": 0.2594,
      "confidence": 0.512
    },
    {
      "start": 36.58773,
      "duration": 0.2594,
      "confidence": 0.512
    },
    {
      "start": 36.84712,
      "duration": 0.25981,
      "confidence": 0.369
    },
    {
      "start": 37.10693,
      "duration": 0.25981,
      "confidence": 0.369
    },
    {
      "start": 37.36674,
      "duration": 0.26046,
      "confidence": 0.668
    },
    {
      "start": 37.6272,
      "duration": 0.26046,
      "confidence": 0.668
    },
    {
      "start": 37.88766,
      "duration": 0.26068,
      "confidence": 0.255
    },
    {
      "start": 38.14834,
      "duration": 0.26068,
      "confidence": 0.255
    },
    {
      "start": 38.40902,
      "duration": 0.26203,
      "confidence": 0.287
    },
    {
      "start": 38.67105,
      "duration": 0.26203,
      "confidence": 0.287
    },
    {
      "start": 38.93309,
      "duration": 0.26214,
      "confidence": 0.466
    },
    {
      "start": 39.19523,
      "duration": 0.26214,
      "confidence": 0.466
    },
    {
      "start": 39.45737,
      "duration": 0.26083,
      "confidence": 0.52
    },
    {
      "start": 39.7182,
      "duration": 0.26083,
      "confidence": 0.52
    },
    {
      "start": 39.97902,
      "duration": 0.26212,
      "confidence": 0.662
    },
    {
      "start": 40.24114,
      "duration": 0.26212,
      "confidence": 0.662
    },
    {
      "start": 40.50327,
      "duration": 0.26091,
      "confidence": 0.362
    },
    {
      "start": 40.76418,
      "duration": 0.26091,
      "confidence": 0.362
    },
    {
      "start": 41.02509,
      "duration": 0.26041,
      "confidence": 0.254
    },
    {
      "start": 41.28551,
      "duration": 0.26041,
      "confidence": 0.254
    },
    {
      "start": 41.54592,
      "duration": 0.26117,
      "confidence": 0.47
    },
    {
      "start": 41.80708,
      "duration": 0.26117,
      "confidence": 0.47
    },
    {
      "start": 42.06825,
      "duration": 0.26127,
      "confidence": 0.442
    },
    {
      "start": 42.32952,
      "duration": 0.26127,
      "confidence": 0.442
    },
    {
      "start": 42.59079,
      "duration": 0.25996,
      "confidence": 0.407
    },
    {
      "start": 42.85075,
      "duration": 0.25996,
      "confidence": 0.407
    },
    {
      "start": 43.11072,
      "duration": 0.26105,
      "confidence": 0.572
    },
    {
      "start": 43.37177,
      "duration": 0.26105,
      "confidence": 0.572
    },
    {
      "start": 43.63282,
      "duration": 0.26093,
      "confidence": 0.563
    },
    {
      "start": 43.89375,
      "duration": 0.26093,
      "confidence": 0.563
    },
    {
      "start": 44.15467,
      "duration": 0.26154,
      "confidence": 0.648
    },
    {
      "start": 44.41622,
      "duration": 0.26154,
      "confidence": 0.648
    },
    {
      "start": 44.67776,
      "duration": 0.26074,
      "confidence": 0.49
    },
    {
      "start": 44.9385,
      "duration": 0.26074,
      "confidence": 0.49
    },
    {
      "start": 45.19923,
      "duration": 0.26019,
      "confidence": 0.388
    },
    {
      "start": 45.45943,
      "duration": 0.26019,
      "confidence": 0.388
    },
    {
      "start": 45.71962,
      "duration": 0.26079,
      "confidence": 0.555
    },
    {
      "start": 45.98041,
      "duration": 0.26079,
      "confidence": 0.555
    },
    {
      "start": 46.2412,
      "duration": 0.26116,
      "confidence": 0.398
    },
    {
      "start": 46.50236,
      "duration": 0.26116,
      "confidence": 0.398
    },
    {
      "start": 46.76352,
      "duration": 0.26199,
      "confidence": 0.325
    },
    {
      "start": 47.02551,
      "duration": 0.26199,
      "confidence": 0.325
    },
    {
      "start": 47.2875,
      "duration": 0.26216,
      "confidence": 0.485
    },
    {
      "start": 47.54967,
      "duration": 0.26216,
      "confidence": 0.485
    },
    {
      "start": 47.81183,
      "duration": 0.26091,
      "confidence": 0.51
    },
    {
      "start": 48.07274,
      "duration": 0.26091,
      "confidence": 0.51
    },
    {
      "start": 48.33364,
      "duration": 0.26201,
      "confidence": 0.493
    },
    {
      "start": 48.59565,
      "duration": 0.26201,
      "confidence": 0.493
    },
    {
      "start": 48.85766,
      "duration": 0.26074,
      "confidence": 0.557
    },
    {
      "start": 49.1184,
      "duration": 0.26074,
      "confidence": 0.557
    },
    {
      "start": 49.37915,
      "duration": 0.26044,
      "confidence": 0.584
    },
    {
      "start": 49.63959,
      "duration": 0.26044,
      "confidence": 0.584
    },
    {
      "start": 49.90002,
      "duration": 0.26056,
      "confidence": 0.625
    },
    {
      "start": 50.16059,
      "duration": 0.26056,
      "confidence": 0.625
    },
    {
      "start": 50.42115,
      "duration": 0.25998,
      "confidence": 0.357
    },
    {
      "start": 50.68113,
      "duration": 0.25998,
      "confidence": 0.357
    },
    {
      "start": 50.9411,
      "duration": 0.25985,
      "confidence": 0.43
    },
    {
      "start": 51.20096,
      "duration": 0.25985,
      "confidence": 0.43
    },
    {
      "start": 51.46081,
      "duration": 0.25978,
      "confidence": 0.498
    },
    {
      "start": 51.72058,
      "duration": 0.25978,
      "confidence": 0.498
    },
    {
      "start": 51.98036,
      "duration": 0.2604,
      "confidence": 0.503
    },
    {
      "start": 52.24076,
      "duration": 0.2604,
      "confidence": 0.503
    },
    {
      "start": 52.50116,
      "duration": 0.26178,
      "confidence": 0.568
    },
    {
      "start": 52.76294,
      "duration": 0.26178,
      "confidence": 0.568
    },
    {
      "start": 53.02472,
      "duration": 0.26084,
      "confidence": 0.655
    },
    {
      "start": 53.28556,
      "duration": 0.26084,
      "confidence": 0.655
    },
    {
      "start": 53.5464,
      "duration": 0.26111,
      "confidence": 0.605
    },
    {
      "start": 53.80751,
      "duration": 0.26111,
      "confidence": 0.605
    },
    {
      "start": 54.06862,
      "duration": 0.26163,
      "confidence": 0.537
    },
    {
      "start": 54.33026,
      "duration": 0.26163,
      "confidence": 0.537
    },
    {
      "start": 54.59189,
      "duration": 0.26172,
      "confidence": 0.385
    },
    {
      "start": 54.85361,
      "duration": 0.26172,
      "confidence": 0.385
    },
    {
      "start": 55.11532,
      "duration": 0.26271,
      "confidence": 0.438
    },
    {
      "start": 55.37803,
      "duration": 0.26271,
      "confidence": 0.438
    },
    {
      "start": 55.64074,
      "duration": 0.26161,
      "confidence": 0.557
    },
    {
      "start": 55.90235,
      "duration": 0.26161,
      "confidence": 0.557
    },
    {
      "start": 56.16395,
      "duration": 0.26048,
      "confidence": 0.54
    },
    {
      "start": 56.42444,
      "duration": 0.26048,
      "confidence": 0.54
    },
    {
      "start": 56.68492,
      "duration": 0.26121,
      "confidence": 0.528
    },
    {
      "start": 56.94613,
      "duration": 0.26121,
      "confidence": 0.528
    },
    {
      "start": 57.20734,
      "duration": 0.25984,
      "confidence": 0.403
    },
    {
      "start": 57.46719,
      "duration": 0.25984,
      "confidence": 0.403
    },
    {
      "start": 57.72703,
      "duration": 0.25986,
      "confidence": 0.337
    },
    {
      "start": 57.98689,
      "duration": 0.25986,
      "confidence": 0.337
    },
    {
      "start": 58.24675,
      "duration": 0.2601,
      "confidence": 0.46
    },
    {
      "start": 58.50685,
      "duration": 0.2601,
      "confidence": 0.46
    },
    {
      "start": 58.76694,
      "duration": 0.2601,
      "confidence": 0.44
    },
    {
      "start": 59.02704,
      "duration": 0.2601,
      "confidence": 0.44
    },
    {
      "start": 59.28714,
      "duration": 0.2601,
      "confidence": 0.337
    },
    {
      "start": 59.54723,
      "duration": 0.2601,
      "confidence": 0.337
    },
    {
      "start": 59.80733,
      "duration": 0.26126,
      "confidence": 0.494
    },
    {
      "start": 60.06859,
      "duration": 0.26126,
      "confidence": 0.494
    },
    {
      "start": 60.32985,
      "duration": 0.26033,
      "confidence": 0.54
    },
    {
      "start": 60.59018,
      "duration": 0.26033,
      "confidence": 0.54
    },
    {
      "start": 60.85051,
      "duration": 0.26126,
      "confidence": 0.576
    },
    {
      "start": 61.11178,
      "duration": 0.26126,
      "confidence": 0.576
    },
    {
      "start": 61.37304,
      "duration": 0.26057,
      "confidence": 0.44
    },
    {
      "start": 61.63361,
      "duration": 0.26057,
      "confidence": 0.44
    },
    {
      "start": 61.89418,
      "duration": 0.26057,
      "confidence": 0.381
    },
    {
      "start": 62.15475,
      "duration": 0.26057,
      "confidence": 0.381
    },
    {
      "start": 62.41532,
      "duration": 0.26034,
      "confidence": 0.387
    },
    {
      "start": 62.67566,
      "duration": 0.26034,
      "confidence": 0.387
    },
    {
      "start": 62.936,
      "duration": 0.26081,
      "confidence": 0.328
    },
    {
      "start": 63.19681,
      "duration": 0.26081,
      "confidence": 0.328
    },
    {
      "start": 63.45763,
      "duration": 0.26012,
      "confidence": 0.351
    },
    {
      "start": 63.71774,
      "duration": 0.26012,
      "confidence": 0.351
    },
    {
      "start": 63.97786,
      "duration": 0.26082,
      "confidence": 0.54
    },
    {
      "start": 64.23868,
      "duration": 0.26082,
      "confidence": 0.54
    },
    {
      "start": 64.4995,
      "duration": 0.26105,
      "confidence": 0.714
    },
    {
      "start": 64.76056,
      "duration": 0.26105,
      "confidence": 0.714
    },
    {
      "start": 65.02161,
      "duration": 0.26059,
      "confidence": 0.75
    },
    {
      "start": 65.2822,
      "duration": 0.26059,
      "confidence": 0.75
    },
    {
      "start": 65.54279,
      "duration": 0.26013,
      "confidence": 0.785
    },
    {
      "start": 65.80292,
      "duration": 0.26013,
      "confidence": 0.785
    },
    {
      "start": 66.06304,
      "duration": 0.26082,
      "confidence": 0.787
    },
    {
      "start": 66.32387,
      "duration": 0.26082,
      "confidence": 0.787
    },
    {
      "start": 66.58469,
      "duration": 0.26129,
      "confidence": 0.738
    },
    {
      "start": 66.84598,
      "duration": 0.26129,
      "confidence": 0.738
    },
    {
      "start": 67.10726,
      "duration": 0.26082,
      "confidence": 0.699
    },
    {
      "start": 67.36808,
      "duration": 0.26082,
      "confidence": 0.699
    },
    {
      "start": 67.62889,
      "duration": 0.26105,
      "confidence": 0.632
    },
    {
      "start": 67.88994,
      "duration": 0.26105,
      "confidence": 0.632
    },
    {
      "start": 68.15099,
      "duration": 0.26105,
      "confidence": 0.688
    },
    {
      "start": 68.41203,
      "duration": 0.26105,
      "confidence": 0.688
    },
    {
      "start": 68.67308,
      "duration": 0.26291,
      "confidence": 0.492
    },
    {
      "start": 68.93598,
      "duration": 0.26291,
      "confidence": 0.492
    },
    {
      "start": 69.19889,
      "duration": 0.25918,
      "confidence": 0.421
    },
    {
      "start": 69.45807,
      "duration": 0.25918,
      "confidence": 0.421
    },
    {
      "start": 69.71725,
      "duration": 0.26221,
      "confidence": 0.427
    },
    {
      "start": 69.97946,
      "duration": 0.26221,
      "confidence": 0.427
    },
    {
      "start": 70.24167,
      "duration": 0.26012,
      "confidence": 0.618
    },
    {
      "start": 70.50179,
      "duration": 0.26012,
      "confidence": 0.618
    },
    {
      "start": 70.76191,
      "duration": 0.26036,
      "confidence": 0.579
    },
    {
      "start": 71.02227,
      "duration": 0.26036,
      "confidence": 0.579
    },
    {
      "start": 71.28263,
      "duration": 0.26106,
      "confidence": 0.613
    },
    {
      "start": 71.54369,
      "duration": 0.26106,
      "confidence": 0.613
    },
    {
      "start": 71.80475,
      "duration": 0.26153,
      "confidence": 0.723
    },
    {
      "start": 72.06628,
      "duration": 0.26153,
      "confidence": 0.723
    },
    {
      "start": 72.32781,
      "duration": 0.26037,
      "confidence": 0.779
    },
    {
      "start": 72.58817,
      "duration": 0.26037,
      "confidence": 0.779
    },
    {
      "start": 72.84854,
      "duration": 0.2641,
      "confidence": 0.666
    },
    {
      "start": 73.11264,
      "duration": 0.2641,
      "confidence": 0.666
    },
    {
      "start": 73.37674,
      "duration": 0.26013,
      "confidence": 0.662
    },
    {
      "start": 73.63687,
      "duration": 0.26013,
      "confidence": 0.662
    },
    {
      "start": 73.89701,
      "duration": 0.26292,
      "confidence": 0.527
    },
    {
      "start": 74.15993,
      "duration": 0.26292,
      "confidence": 0.527
    },
    {
      "start": 74.42285,
      "duration": 0.26268,
      "confidence": 0.717
    },
    {
      "start": 74.68554,
      "duration": 0.26268,
      "confidence": 0.717
    },
    {
      "start": 74.94822,
      "duration": 0.26198,
      "confidence": 0.693
    },
    {
      "start": 75.2102,
      "duration": 0.26198,
      "confidence": 0.693
    },
    {
      "start": 75.47218,
      "duration": 0.26058,
      "confidence": 0.615
    },
    {
      "start": 75.73276,
      "duration": 0.26058,
      "confidence": 0.615
    },
    {
      "start": 75.99334,
      "duration": 0.26081,
      "confidence": 0.512
    },
    {
      "start": 76.25415,
      "duration": 0.26081,
      "confidence": 0.512
    },
    {
      "start": 76.51496,
      "duration": 0.26011,
      "confidence": 0.696
    },
    {
      "start": 76.77506,
      "duration": 0.26011,
      "confidence": 0.696
    },
    {
      "start": 77.03517,
      "duration": 0.26081,
      "confidence": 0.536
    },
    {
      "start": 77.29598,
      "duration": 0.26081,
      "confidence": 0.536
    },
    {
      "start": 77.55678,
      "duration": 0.26011,
      "confidence": 0.616
    },
    {
      "start": 77.8169,
      "duration": 0.26011,
      "confidence": 0.616
    },
    {
      "start": 78.07701,
      "duration": 0.26082,
      "confidence": 0.428
    },
    {
      "start": 78.33782,
      "duration": 0.26082,
      "confidence": 0.428
    },
    {
      "start": 78.59864,
      "duration": 0.25942,
      "confidence": 0.586
    },
    {
      "start": 78.85806,
      "duration": 0.25942,
      "confidence": 0.586
    },
    {
      "start": 79.11749,
      "duration": 0.26059,
      "confidence": 0.512
    },
    {
      "start": 79.37808,
      "duration": 0.26059,
      "confidence": 0.512
    },
    {
      "start": 79.63866,
      "duration": 0.26059,
      "confidence": 0.452
    },
    {
      "start": 79.89925,
      "duration": 0.26059,
      "confidence": 0.452
    },
    {
      "start": 80.15984,
      "duration": 0.26199,
      "confidence": 0.645
    },
    {
      "start": 80.42183,
      "duration": 0.26199,
      "confidence": 0.645
    },
    {
      "start": 80.68382,
      "duration": 0.26082,
      "confidence": 0.752
    },
    {
      "start": 80.94464,
      "duration": 0.26082,
      "confidence": 0.752
    },
    {
      "start": 81.20546,
      "duration": 0.26012,
      "confidence": 0.693
    },
    {
      "start": 81.46558,
      "duration": 0.26012,
      "confidence": 0.693
    },
    {
      "start": 81.7257,
      "duration": 0.25988,
      "confidence": 0.615
    },
    {
      "start": 81.98558,
      "duration": 0.25988,
      "confidence": 0.615
    },
    {
      "start": 82.24547,
      "duration": 0.26151,
      "confidence": 0.535
    },
    {
      "start": 82.50698,
      "duration": 0.26151,
      "confidence": 0.535
    },
    {
      "start": 82.76849,
      "duration": 0.26057,
      "confidence": 0.724
    },
    {
      "start": 83.02906,
      "duration": 0.26057,
      "confidence": 0.724
    },
    {
      "start": 83.28964,
      "duration": 0.25941,
      "confidence": 0.728
    },
    {
      "start": 83.54904,
      "duration": 0.25941,
      "confidence": 0.728
    },
    {
      "start": 83.80845,
      "duration": 0.26103,
      "confidence": 0.638
    },
    {
      "start": 84.06948,
      "duration": 0.26103,
      "confidence": 0.638
    },
    {
      "start": 84.33052,
      "duration": 0.2608,
      "confidence": 0.456
    },
    {
      "start": 84.59132,
      "duration": 0.2608,
      "confidence": 0.456
    },
    {
      "start": 84.85212,
      "duration": 0.2608,
      "confidence": 0.584
    },
    {
      "start": 85.11292,
      "duration": 0.2608,
      "confidence": 0.584
    },
    {
      "start": 85.37373,
      "duration": 0.26034,
      "confidence": 0.381
    },
    {
      "start": 85.63407,
      "duration": 0.26034,
      "confidence": 0.381
    },
    {
      "start": 85.89441,
      "duration": 0.26127,
      "confidence": 0.355
    },
    {
      "start": 86.15568,
      "duration": 0.26127,
      "confidence": 0.355
    },
    {
      "start": 86.41695,
      "duration": 0.26127,
      "confidence": 0.547
    },
    {
      "start": 86.67822,
      "duration": 0.26127,
      "confidence": 0.547
    },
    {
      "start": 86.9395,
      "duration": 0.26197,
      "confidence": 0.715
    },
    {
      "start": 87.20147,
      "duration": 0.26197,
      "confidence": 0.715
    },
    {
      "start": 87.46344,
      "duration": 0.25964,
      "confidence": 0.591
    },
    {
      "start": 87.72308,
      "duration": 0.25964,
      "confidence": 0.591
    },
    {
      "start": 87.98273,
      "duration": 0.2608,
      "confidence": 0.459
    },
    {
      "start": 88.24353,
      "duration": 0.2608,
      "confidence": 0.459
    },
    {
      "start": 88.50433,
      "duration": 0.25963,
      "confidence": 0.419
    },
    {
      "start": 88.76396,
      "duration": 0.25963,
      "confidence": 0.419
    },
    {
      "start": 89.02359,
      "duration": 0.26032,
      "confidence": 0.578
    },
    {
      "start": 89.28392,
      "duration": 0.26032,
      "confidence": 0.578
    },
    {
      "start": 89.54424,
      "duration": 0.25985,
      "confidence": 0.402
    },
    {
      "start": 89.80409,
      "duration": 0.25985,
      "confidence": 0.402
    },
    {
      "start": 90.06395,
      "duration": 0.26101,
      "confidence": 0.374
    },
    {
      "start": 90.32495,
      "duration": 0.26101,
      "confidence": 0.374
    },
    {
      "start": 90.58596,
      "duration": 0.26193,
      "confidence": 0.262
    },
    {
      "start": 90.8479,
      "duration": 0.26193,
      "confidence": 0.262
    },
    {
      "start": 91.10983,
      "duration": 0.2603,
      "confidence": 0.417
    },
    {
      "start": 91.37013,
      "duration": 0.2603,
      "confidence": 0.417
    },
    {
      "start": 91.63043,
      "duration": 0.26123,
      "confidence": 0.432
    },
    {
      "start": 91.89167,
      "duration": 0.26123,
      "confidence": 0.432
    },
    {
      "start": 92.1529,
      "duration": 0.26286,
      "confidence": 0.41
    },
    {
      "start": 92.41576,
      "duration": 0.26286,
      "confidence": 0.41
    },
    {
      "start": 92.67862,
      "duration": 0.2624,
      "confidence": 0.239
    },
    {
      "start": 92.94102,
      "duration": 0.2624,
      "confidence": 0.239
    },
    {
      "start": 93.20342,
      "duration": 0.26147,
      "confidence": 0.363
    },
    {
      "start": 93.4649,
      "duration": 0.26147,
      "confidence": 0.363
    },
    {
      "start": 93.72637,
      "duration": 0.26078,
      "confidence": 0.431
    },
    {
      "start": 93.98715,
      "duration": 0.26078,
      "confidence": 0.431
    },
    {
      "start": 94.24792,
      "duration": 0.26055,
      "confidence": 0.532
    },
    {
      "start": 94.50847,
      "duration": 0.26055,
      "confidence": 0.532
    },
    {
      "start": 94.76902,
      "duration": 0.26078,
      "confidence": 0.584
    },
    {
      "start": 95.02979,
      "duration": 0.26078,
      "confidence": 0.584
    },
    {
      "start": 95.29057,
      "duration": 0.26054,
      "confidence": 0.636
    },
    {
      "start": 95.55111,
      "duration": 0.26054,
      "confidence": 0.636
    },
    {
      "start": 95.81165,
      "duration": 0.26052,
      "confidence": 0.619
    },
    {
      "start": 96.07217,
      "duration": 0.26052,
      "confidence": 0.619
    },
    {
      "start": 96.33269,
      "duration": 0.26097,
      "confidence": 0.464
    },
    {
      "start": 96.59367,
      "duration": 0.26097,
      "confidence": 0.464
    },
    {
      "start": 96.85464,
      "duration": 0.26026,
      "confidence": 0.465
    },
    {
      "start": 97.1149,
      "duration": 0.26026,
      "confidence": 0.465
    },
    {
      "start": 97.37515,
      "duration": 0.26048,
      "confidence": 0.498
    },
    {
      "start": 97.63564,
      "duration": 0.26048,
      "confidence": 0.498
    },
    {
      "start": 97.89612,
      "duration": 0.25977,
      "confidence": 0.447
    },
    {
      "start": 98.15589,
      "duration": 0.25977,
      "confidence": 0.447
    },
    {
      "start": 98.41566,
      "duration": 0.26117,
      "confidence": 0.482
    },
    {
      "start": 98.67684,
      "duration": 0.26117,
      "confidence": 0.482
    },
    {
      "start": 98.93801,
      "duration": 0.25978,
      "confidence": 0.58
    },
    {
      "start": 99.19779,
      "duration": 0.25978,
      "confidence": 0.58
    },
    {
      "start": 99.45758,
      "duration": 0.26027,
      "confidence": 0.647
    },
    {
      "start": 99.71785,
      "duration": 0.26027,
      "confidence": 0.647
    },
    {
      "start": 99.97812,
      "duration": 0.26076,
      "confidence": 0.562
    },
    {
      "start": 100.23888,
      "duration": 0.26076,
      "confidence": 0.562
    },
    {
      "start": 100.49965,
      "duration": 0.26126,
      "confidence": 0.346
    },
    {
      "start": 100.7609,
      "duration": 0.26126,
      "confidence": 0.346
    },
    {
      "start": 101.02216,
      "duration": 0.26081,
      "confidence": 0.435
    },
    {
      "start": 101.28297,
      "duration": 0.26081,
      "confidence": 0.435
    },
    {
      "start": 101.54379,
      "duration": 0.26245,
      "confidence": 0.541
    },
    {
      "start": 101.80624,
      "duration": 0.26245,
      "confidence": 0.541
    },
    {
      "start": 102.06869,
      "duration": 0.26082,
      "confidence": 0.559
    },
    {
      "start": 102.32951,
      "duration": 0.26082,
      "confidence": 0.559
    },
    {
      "start": 102.59033,
      "duration": 0.26221,
      "confidence": 0.577
    },
    {
      "start": 102.85254,
      "duration": 0.26221,
      "confidence": 0.577
    },
    {
      "start": 103.11475,
      "duration": 0.26033,
      "confidence": 0.354
    },
    {
      "start": 103.37508,
      "duration": 0.26033,
      "confidence": 0.354
    },
    {
      "start": 103.6354,
      "duration": 0.25985,
      "confidence": 0.275
    },
    {
      "start": 103.89525,
      "duration": 0.25985,
      "confidence": 0.275
    },
    {
      "start": 104.1551,
      "duration": 0.26123,
      "confidence": 0.406
    },
    {
      "start": 104.41632,
      "duration": 0.26123,
      "confidence": 0.406
    },
    {
      "start": 104.67755,
      "duration": 0.26214,
      "confidence": 0.409
    },
    {
      "start": 104.93969,
      "duration": 0.26214,
      "confidence": 0.409
    },
    {
      "start": 105.20184,
      "duration": 0.25912,
      "confidence": 0.403
    },
    {
      "start": 105.46095,
      "duration": 0.25912,
      "confidence": 0.403
    },
    {
      "start": 105.72007,
      "duration": 0.26098,
      "confidence": 0.547
    },
    {
      "start": 105.98105,
      "duration": 0.26098,
      "confidence": 0.547
    },
    {
      "start": 106.24203,
      "duration": 0.26006,
      "confidence": 0.559
    },
    {
      "start": 106.50208,
      "duration": 0.26006,
      "confidence": 0.559
    },
    {
      "start": 106.76214,
      "duration": 0.26169,
      "confidence": 0.597
    },
    {
      "start": 107.02383,
      "duration": 0.26169,
      "confidence": 0.597
    },
    {
      "start": 107.28552,
      "duration": 0.261,
      "confidence": 0.479
    },
    {
      "start": 107.54652,
      "duration": 0.261,
      "confidence": 0.479
    },
    {
      "start": 107.80752,
      "duration": 0.2603,
      "confidence": 0.404
    },
    {
      "start": 108.06782,
      "duration": 0.2603,
      "confidence": 0.404
    },
    {
      "start": 108.32812,
      "duration": 0.26006,
      "confidence": 0.475
    },
    {
      "start": 108.58818,
      "duration": 0.26006,
      "confidence": 0.475
    },
    {
      "start": 108.84824,
      "duration": 0.26215,
      "confidence": 0.416
    },
    {
      "start": 109.11039,
      "duration": 0.26215,
      "confidence": 0.416
    },
    {
      "start": 109.37254,
      "duration": 0.26213,
      "confidence": 0.368
    },
    {
      "start": 109.63467,
      "duration": 0.26213,
      "confidence": 0.368
    },
    {
      "start": 109.89681,
      "duration": 0.26236,
      "confidence": 0.515
    },
    {
      "start": 110.15916,
      "duration": 0.26236,
      "confidence": 0.515
    },
    {
      "start": 110.42152,
      "duration": 0.26094,
      "confidence": 0.496
    },
    {
      "start": 110.68246,
      "duration": 0.26094,
      "confidence": 0.496
    },
    {
      "start": 110.9434,
      "duration": 0.26139,
      "confidence": 0.486
    },
    {
      "start": 111.2048,
      "duration": 0.26139,
      "confidence": 0.486
    },
    {
      "start": 111.46619,
      "duration": 0.26021,
      "confidence": 0.566
    },
    {
      "start": 111.7264,
      "duration": 0.26021,
      "confidence": 0.566
    },
    {
      "start": 111.98661,
      "duration": 0.26066,
      "confidence": 0.57
    },
    {
      "start": 112.24727,
      "duration": 0.26066,
      "confidence": 0.57
    },
    {
      "start": 112.50793,
      "duration": 0.26042,
      "confidence": 0.579
    },
    {
      "start": 112.76835,
      "duration": 0.26042,
      "confidence": 0.579
    },
    {
      "start": 113.02876,
      "duration": 0.25994,
      "confidence": 0.413
    },
    {
      "start": 113.28871,
      "duration": 0.25994,
      "confidence": 0.413
    },
    {
      "start": 113.54865,
      "duration": 0.25992,
      "confidence": 0.468
    },
    {
      "start": 113.80857,
      "duration": 0.25992,
      "confidence": 0.468
    },
    {
      "start": 114.06849,
      "duration": 0.26014,
      "confidence": 0.517
    },
    {
      "start": 114.32864,
      "duration": 0.26014,
      "confidence": 0.517
    },
    {
      "start": 114.58878,
      "duration": 0.26058,
      "confidence": 0.518
    },
    {
      "start": 114.84935,
      "duration": 0.26058,
      "confidence": 0.518
    },
    {
      "start": 115.10993,
      "duration": 0.26195,
      "confidence": 0.581
    },
    {
      "start": 115.37188,
      "duration": 0.26195,
      "confidence": 0.581
    },
    {
      "start": 115.63383,
      "duration": 0.26075,
      "confidence": 0.668
    },
    {
      "start": 115.89458,
      "duration": 0.26075,
      "confidence": 0.668
    },
    {
      "start": 116.15533,
      "duration": 0.26071,
      "confidence": 0.612
    },
    {
      "start": 116.41604,
      "duration": 0.26071,
      "confidence": 0.612
    },
    {
      "start": 116.67675,
      "duration": 0.26136,
      "confidence": 0.556
    },
    {
      "start": 116.9381,
      "duration": 0.26136,
      "confidence": 0.556
    },
    {
      "start": 117.19946,
      "duration": 0.26224,
      "confidence": 0.389
    },
    {
      "start": 117.4617,
      "duration": 0.26224,
      "confidence": 0.389
    },
    {
      "start": 117.72395,
      "duration": 0.26242,
      "confidence": 0.441
    },
    {
      "start": 117.98637,
      "duration": 0.26242,
      "confidence": 0.441
    },
    {
      "start": 118.24879,
      "duration": 0.26145,
      "confidence": 0.556
    },
    {
      "start": 118.51025,
      "duration": 0.26145,
      "confidence": 0.556
    },
    {
      "start": 118.7717,
      "duration": 0.26048,
      "confidence": 0.544
    },
    {
      "start": 119.03218,
      "duration": 0.26048,
      "confidence": 0.544
    },
    {
      "start": 119.29266,
      "duration": 0.26138,
      "confidence": 0.523
    },
    {
      "start": 119.55404,
      "duration": 0.26138,
      "confidence": 0.523
    },
    {
      "start": 119.81542,
      "duration": 0.26042,
      "confidence": 0.385
    },
    {
      "start": 120.07583,
      "duration": 0.26042,
      "confidence": 0.385
    },
    {
      "start": 120.33625,
      "duration": 0.25993,
      "confidence": 0.349
    },
    {
      "start": 120.59618,
      "duration": 0.25993,
      "confidence": 0.349
    },
    {
      "start": 120.85611,
      "duration": 0.26038,
      "confidence": 0.49
    },
    {
      "start": 121.11649,
      "duration": 0.26038,
      "confidence": 0.49
    },
    {
      "start": 121.37686,
      "duration": 0.2606,
      "confidence": 0.461
    },
    {
      "start": 121.63746,
      "duration": 0.2606,
      "confidence": 0.461
    },
    {
      "start": 121.89806,
      "duration": 0.26059,
      "confidence": 0.365
    },
    {
      "start": 122.15865,
      "duration": 0.26059,
      "confidence": 0.365
    },
    {
      "start": 122.41924,
      "duration": 0.26152,
      "confidence": 0.503
    },
    {
      "start": 122.68076,
      "duration": 0.26152,
      "confidence": 0.503
    },
    {
      "start": 122.94228,
      "duration": 0.26059,
      "confidence": 0.519
    },
    {
      "start": 123.20286,
      "duration": 0.26059,
      "confidence": 0.519
    },
    {
      "start": 123.46345,
      "duration": 0.26128,
      "confidence": 0.56
    },
    {
      "start": 123.72473,
      "duration": 0.26128,
      "confidence": 0.56
    },
    {
      "start": 123.98601,
      "duration": 0.26151,
      "confidence": 0.433
    },
    {
      "start": 124.24751,
      "duration": 0.26151,
      "confidence": 0.433
    },
    {
      "start": 124.50902,
      "duration": 0.25988,
      "confidence": 0.331
    },
    {
      "start": 124.76891,
      "duration": 0.25988,
      "confidence": 0.331
    },
    {
      "start": 125.02879,
      "duration": 0.25942,
      "confidence": 0.31
    },
    {
      "start": 125.2882,
      "duration": 0.25942,
      "confidence": 0.31
    },
    {
      "start": 125.54762,
      "duration": 0.26034,
      "confidence": 0.227
    },
    {
      "start": 125.80796,
      "duration": 0.26034,
      "confidence": 0.227
    },
    {
      "start": 126.0683,
      "duration": 0.25964,
      "confidence": 0.336
    },
    {
      "start": 126.32795,
      "duration": 0.25964,
      "confidence": 0.336
    },
    {
      "start": 126.58759,
      "duration": 0.26034,
      "confidence": 0.525
    },
    {
      "start": 126.84793,
      "duration": 0.26034,
      "confidence": 0.525
    },
    {
      "start": 127.10827,
      "duration": 0.26103,
      "confidence": 0.712
    },
    {
      "start": 127.36931,
      "duration": 0.26103,
      "confidence": 0.712
    },
    {
      "start": 127.63034,
      "duration": 0.26034,
      "confidence": 0.686
    },
    {
      "start": 127.89068,
      "duration": 0.26034,
      "confidence": 0.686
    },
    {
      "start": 128.15102,
      "duration": 0.25987,
      "confidence": 0.774
    },
    {
      "start": 128.41087,
      "duration": 0.25987,
      "confidence": 0.774
    },
    {
      "start": 128.67075,
      "duration": 0.26103,
      "confidence": 0.73
    },
    {
      "start": 128.93178,
      "duration": 0.26103,
      "confidence": 0.73
    },
    {
      "start": 129.19281,
      "duration": 0.2601,
      "confidence": 0.792
    },
    {
      "start": 129.45291,
      "duration": 0.2601,
      "confidence": 0.792
    },
    {
      "start": 129.71301,
      "duration": 0.26079,
      "confidence": 0.718
    },
    {
      "start": 129.9738,
      "duration": 0.26079,
      "confidence": 0.718
    },
    {
      "start": 130.23459,
      "duration": 0.26056,
      "confidence": 0.601
    },
    {
      "start": 130.49513,
      "duration": 0.26056,
      "confidence": 0.601
    },
    {
      "start": 130.7557,
      "duration": 0.26079,
      "confidence": 0.528
    },
    {
      "start": 131.0165,
      "duration": 0.26079,
      "confidence": 0.528
    },
    {
      "start": 131.27727,
      "duration": 0.26055,
      "confidence": 0.462
    },
    {
      "start": 131.53783,
      "duration": 0.26055,
      "confidence": 0.462
    },
    {
      "start": 131.79839,
      "duration": 0.26171,
      "confidence": 0.571
    },
    {
      "start": 132.06009,
      "duration": 0.26171,
      "confidence": 0.571
    },
    {
      "start": 132.32181,
      "duration": 0.26125,
      "confidence": 0.592
    },
    {
      "start": 132.58305,
      "duration": 0.26125,
      "confidence": 0.592
    },
    {
      "start": 132.8443,
      "duration": 0.26241,
      "confidence": 0.687
    },
    {
      "start": 133.1067,
      "duration": 0.26241,
      "confidence": 0.687
    },
    {
      "start": 133.36913,
      "duration": 0.26148,
      "confidence": 0.661
    },
    {
      "start": 133.6306,
      "duration": 0.26148,
      "confidence": 0.661
    },
    {
      "start": 133.89207,
      "duration": 0.26102,
      "confidence": 0.566
    },
    {
      "start": 134.1531,
      "duration": 0.26102,
      "confidence": 0.566
    },
    {
      "start": 134.41412,
      "duration": 0.26055,
      "confidence": 0.573
    },
    {
      "start": 134.67467,
      "duration": 0.26055,
      "confidence": 0.573
    },
    {
      "start": 134.93521,
      "duration": 0.26124,
      "confidence": 0.48
    },
    {
      "start": 135.19646,
      "duration": 0.26124,
      "confidence": 0.48
    },
    {
      "start": 135.4577,
      "duration": 0.26124,
      "confidence": 0.54
    },
    {
      "start": 135.71893,
      "duration": 0.26124,
      "confidence": 0.54
    },
    {
      "start": 135.98018,
      "duration": 0.26124,
      "confidence": 0.66
    },
    {
      "start": 136.24142,
      "duration": 0.26124,
      "confidence": 0.66
    },
    {
      "start": 136.50266,
      "duration": 0.25984,
      "confidence": 0.691
    },
    {
      "start": 136.7625,
      "duration": 0.25984,
      "confidence": 0.691
    },
    {
      "start": 137.02234,
      "duration": 0.26123,
      "confidence": 0.79
    },
    {
      "start": 137.28358,
      "duration": 0.26123,
      "confidence": 0.79
    },
    {
      "start": 137.54482,
      "duration": 0.261,
      "confidence": 0.716
    },
    {
      "start": 137.80582,
      "duration": 0.261,
      "confidence": 0.716
    },
    {
      "start": 138.0668,
      "duration": 0.26076,
      "confidence": 0.605
    },
    {
      "start": 138.32758,
      "duration": 0.26076,
      "confidence": 0.605
    },
    {
      "start": 138.58833,
      "duration": 0.26076,
      "confidence": 0.57
    },
    {
      "start": 138.84909,
      "duration": 0.26076,
      "confidence": 0.57
    },
    {
      "start": 139.10986,
      "duration": 0.26053,
      "confidence": 0.584
    },
    {
      "start": 139.37038,
      "duration": 0.26053,
      "confidence": 0.584
    },
    {
      "start": 139.6309,
      "duration": 0.25983,
      "confidence": 0.504
    },
    {
      "start": 139.89075,
      "duration": 0.25983,
      "confidence": 0.504
    },
    {
      "start": 140.15057,
      "duration": 0.26099,
      "confidence": 0.613
    },
    {
      "start": 140.41158,
      "duration": 0.26099,
      "confidence": 0.613
    },
    {
      "start": 140.67256,
      "duration": 0.26029,
      "confidence": 0.628
    },
    {
      "start": 140.93285,
      "duration": 0.26029,
      "confidence": 0.628
    },
    {
      "start": 141.19315,
      "duration": 0.26122,
      "confidence": 0.68
    },
    {
      "start": 141.45438,
      "duration": 0.26122,
      "confidence": 0.68
    },
    {
      "start": 141.71559,
      "duration": 0.26169,
      "confidence": 0.481
    },
    {
      "start": 141.97728,
      "duration": 0.26169,
      "confidence": 0.481
    },
    {
      "start": 142.23895,
      "duration": 0.26052,
      "confidence": 0.371
    },
    {
      "start": 142.4995,
      "duration": 0.26052,
      "confidence": 0.371
    },
    {
      "start": 142.76001,
      "duration": 0.26075,
      "confidence": 0.458
    },
    {
      "start": 143.02077,
      "duration": 0.26075,
      "confidence": 0.458
    },
    {
      "start": 143.28152,
      "duration": 0.26145,
      "confidence": 0.511
    },
    {
      "start": 143.54297,
      "duration": 0.26145,
      "confidence": 0.511
    },
    {
      "start": 143.80441,
      "duration": 0.26122,
      "confidence": 0.591
    },
    {
      "start": 144.06564,
      "duration": 0.26122,
      "confidence": 0.591
    },
    {
      "start": 144.32686,
      "duration": 0.26168,
      "confidence": 0.694
    },
    {
      "start": 144.58855,
      "duration": 0.26168,
      "confidence": 0.694
    },
    {
      "start": 144.85022,
      "duration": 0.26122,
      "confidence": 0.711
    },
    {
      "start": 145.11143,
      "duration": 0.26122,
      "confidence": 0.711
    },
    {
      "start": 145.37265,
      "duration": 0.25982,
      "confidence": 0.773
    },
    {
      "start": 145.63248,
      "duration": 0.25982,
      "confidence": 0.773
    },
    {
      "start": 145.89229,
      "duration": 0.26075,
      "confidence": 0.688
    },
    {
      "start": 146.15305,
      "duration": 0.26075,
      "confidence": 0.688
    },
    {
      "start": 146.4138,
      "duration": 0.26168,
      "confidence": 0.576
    },
    {
      "start": 146.67548,
      "duration": 0.26168,
      "confidence": 0.576
    },
    {
      "start": 146.93716,
      "duration": 0.26192,
      "confidence": 0.491
    },
    {
      "start": 147.19908,
      "duration": 0.26192,
      "confidence": 0.491
    },
    {
      "start": 147.46098,
      "duration": 0.26145,
      "confidence": 0.492
    },
    {
      "start": 147.72244,
      "duration": 0.26145,
      "confidence": 0.492
    },
    {
      "start": 147.9839,
      "duration": 0.25844,
      "confidence": 0.574
    },
    {
      "start": 148.24232,
      "duration": 0.25844,
      "confidence": 0.574
    },
    {
      "start": 148.50076,
      "duration": 0.26053,
      "confidence": 0.528
    },
    {
      "start": 148.76129,
      "duration": 0.26053,
      "confidence": 0.528
    },
    {
      "start": 149.02182,
      "duration": 0.26238,
      "confidence": 0.532
    },
    {
      "start": 149.2842,
      "duration": 0.26238,
      "confidence": 0.532
    },
    {
      "start": 149.54659,
      "duration": 0.26146,
      "confidence": 0.375
    },
    {
      "start": 149.80804,
      "duration": 0.26146,
      "confidence": 0.375
    },
    {
      "start": 150.0695,
      "duration": 0.26076,
      "confidence": 0.243
    },
    {
      "start": 150.33026,
      "duration": 0.26076,
      "confidence": 0.243
    },
    {
      "start": 150.59103,
      "duration": 0.26077,
      "confidence": 0.187
    },
    {
      "start": 150.85179,
      "duration": 0.26077,
      "confidence": 0.187
    },
    {
      "start": 151.11256,
      "duration": 0.26054,
      "confidence": 0.177
    },
    {
      "start": 151.3731,
      "duration": 0.26054,
      "confidence": 0.177
    },
    {
      "start": 151.63364,
      "duration": 0.2631,
      "confidence": 0.313
    },
    {
      "start": 151.89674,
      "duration": 0.2631,
      "confidence": 0.313
    },
    {
      "start": 152.15984,
      "duration": 0.26101,
      "confidence": 0.391
    },
    {
      "start": 152.42085,
      "duration": 0.26101,
      "confidence": 0.391
    },
    {
      "start": 152.68185,
      "duration": 0.26032,
      "confidence": 0.498
    },
    {
      "start": 152.94217,
      "duration": 0.26032,
      "confidence": 0.498
    },
    {
      "start": 153.20248,
      "duration": 0.26031,
      "confidence": 0.537
    },
    {
      "start": 153.4628,
      "duration": 0.26031,
      "confidence": 0.537
    },
    {
      "start": 153.72311,
      "duration": 0.25961,
      "confidence": 0.62
    },
    {
      "start": 153.98273,
      "duration": 0.25961,
      "confidence": 0.62
    },
    {
      "start": 154.24234,
      "duration": 0.26007,
      "confidence": 0.587
    },
    {
      "start": 154.50241,
      "duration": 0.26007,
      "confidence": 0.587
    },
    {
      "start": 154.76248,
      "duration": 0.261,
      "confidence": 0.468
    },
    {
      "start": 155.02348,
      "duration": 0.261,
      "confidence": 0.468
    },
    {
      "start": 155.28448,
      "duration": 0.2603,
      "confidence": 0.476
    },
    {
      "start": 155.54478,
      "duration": 0.2603,
      "confidence": 0.476
    },
    {
      "start": 155.80508,
      "duration": 0.26007,
      "confidence": 0.511
    },
    {
      "start": 156.06516,
      "duration": 0.26007,
      "confidence": 0.511
    },
    {
      "start": 156.32521,
      "duration": 0.2603,
      "confidence": 0.461
    },
    {
      "start": 156.58553,
      "duration": 0.2603,
      "confidence": 0.461
    },
    {
      "start": 156.84583,
      "duration": 0.26123,
      "confidence": 0.454
    },
    {
      "start": 157.10706,
      "duration": 0.26123,
      "confidence": 0.454
    },
    {
      "start": 157.36829,
      "duration": 0.26078,
      "confidence": 0.532
    },
    {
      "start": 157.62904,
      "duration": 0.26078,
      "confidence": 0.532
    },
    {
      "start": 157.88983,
      "duration": 0.26078,
      "confidence": 0.607
    },
    {
      "start": 158.1506,
      "duration": 0.26078,
      "confidence": 0.607
    },
    {
      "start": 158.41139,
      "duration": 0.26103,
      "confidence": 0.545
    },
    {
      "start": 158.67242,
      "duration": 0.26103,
      "confidence": 0.545
    },
    {
      "start": 158.93346,
      "duration": 0.26127,
      "confidence": 0.307
    },
    {
      "start": 159.19472,
      "duration": 0.26127,
      "confidence": 0.307
    },
    {
      "start": 159.45598,
      "duration": 0.26152,
      "confidence": 0.391
    },
    {
      "start": 159.7175,
      "duration": 0.26152,
      "confidence": 0.391
    },
    {
      "start": 159.97902,
      "duration": 0.26223,
      "confidence": 0.511
    },
    {
      "start": 160.24126,
      "duration": 0.26223,
      "confidence": 0.511
    },
    {
      "start": 160.5035,
      "duration": 0.2604,
      "confidence": 0.547
    },
    {
      "start": 160.76389,
      "duration": 0.2604,
      "confidence": 0.547
    },
    {
      "start": 161.02428,
      "duration": 0.26157,
      "confidence": 0.576
    },
    {
      "start": 161.28586,
      "duration": 0.26157,
      "confidence": 0.576
    },
    {
      "start": 161.54742,
      "duration": 0.25974,
      "confidence": 0.336
    },
    {
      "start": 161.80717,
      "duration": 0.25974,
      "confidence": 0.336
    },
    {
      "start": 162.06691,
      "duration": 0.25953,
      "confidence": 0.177
    },
    {
      "start": 162.32643,
      "duration": 0.25953,
      "confidence": 0.177
    },
    {
      "start": 162.58595,
      "duration": 0.26141,
      "confidence": 0.273
    },
    {
      "start": 162.84737,
      "duration": 0.26141,
      "confidence": 0.273
    },
    {
      "start": 163.1088,
      "duration": 0.26213,
      "confidence": 0.269
    },
    {
      "start": 163.37091,
      "duration": 0.26213,
      "confidence": 0.269
    },
    {
      "start": 163.63304,
      "duration": 0.25936,
      "confidence": 0.39
    },
    {
      "start": 163.8924,
      "duration": 0.25936,
      "confidence": 0.39
    },
    {
      "start": 164.15176,
      "duration": 0.26147,
      "confidence": 0.525
    },
    {
      "start": 164.41324,
      "duration": 0.26147,
      "confidence": 0.525
    },
    {
      "start": 164.67471,
      "duration": 0.2615,
      "confidence": 0.453
    },
    {
      "start": 164.9362,
      "duration": 0.2615,
      "confidence": 0.453
    },
    {
      "start": 165.19771,
      "duration": 0.26176,
      "confidence": 0.543
    },
    {
      "start": 165.45947,
      "duration": 0.26176,
      "confidence": 0.543
    },
    {
      "start": 165.72124,
      "duration": 0.26155,
      "confidence": 0.464
    },
    {
      "start": 165.98277,
      "duration": 0.26155,
      "confidence": 0.464
    },
    {
      "start": 166.24432,
      "duration": 0.26041,
      "confidence": 0.375
    },
    {
      "start": 166.50475,
      "duration": 0.26041,
      "confidence": 0.375
    },
    {
      "start": 166.76515,
      "duration": 0.2595,
      "confidence": 0.457
    },
    {
      "start": 167.02464,
      "duration": 0.2595,
      "confidence": 0.457
    },
    {
      "start": 167.28413,
      "duration": 0.26067,
      "confidence": 0.431
    },
    {
      "start": 167.54482,
      "duration": 0.26067,
      "confidence": 0.431
    },
    {
      "start": 167.80548,
      "duration": 0.26207,
      "confidence": 0.364
    },
    {
      "start": 168.06755,
      "duration": 0.26207,
      "confidence": 0.364
    },
    {
      "start": 168.32964,
      "duration": 0.26138,
      "confidence": 0.429
    },
    {
      "start": 168.591,
      "duration": 0.26138,
      "confidence": 0.429
    },
    {
      "start": 168.85239,
      "duration": 0.26115,
      "confidence": 0.442
    },
    {
      "start": 169.11354,
      "duration": 0.26115,
      "confidence": 0.442
    },
    {
      "start": 169.3747,
      "duration": 0.26162,
      "confidence": 0.445
    },
    {
      "start": 169.6363,
      "duration": 0.26162,
      "confidence": 0.445
    },
    {
      "start": 169.89792,
      "duration": 0.26023,
      "confidence": 0.546
    },
    {
      "start": 170.15816,
      "duration": 0.26023,
      "confidence": 0.546
    },
    {
      "start": 170.41837,
      "duration": 0.26023,
      "confidence": 0.533
    },
    {
      "start": 170.6786,
      "duration": 0.26023,
      "confidence": 0.533
    },
    {
      "start": 170.93884,
      "duration": 0.26141,
      "confidence": 0.496
    },
    {
      "start": 171.20026,
      "duration": 0.26141,
      "confidence": 0.496
    },
    {
      "start": 171.46165,
      "duration": 0.26026,
      "confidence": 0.291
    },
    {
      "start": 171.72191,
      "duration": 0.26026,
      "confidence": 0.291
    },
    {
      "start": 171.98216,
      "duration": 0.25981,
      "confidence": 0.303
    },
    {
      "start": 172.24197,
      "duration": 0.25981,
      "confidence": 0.303
    },
    {
      "start": 172.50179,
      "duration": 0.25959,
      "confidence": 0.317
    },
    {
      "start": 172.76137,
      "duration": 0.25959,
      "confidence": 0.317
    },
    {
      "start": 173.02097,
      "duration": 0.26007,
      "confidence": 0.341
    },
    {
      "start": 173.28104,
      "duration": 0.26007,
      "confidence": 0.341
    },
    {
      "start": 173.54109,
      "duration": 0.26195,
      "confidence": 0.474
    },
    {
      "start": 173.80304,
      "duration": 0.26195,
      "confidence": 0.474
    },
    {
      "start": 174.06499,
      "duration": 0.26149,
      "confidence": 0.518
    },
    {
      "start": 174.32648,
      "duration": 0.26149,
      "confidence": 0.518
    },
    {
      "start": 174.58797,
      "duration": 0.26104,
      "confidence": 0.463
    },
    {
      "start": 174.84901,
      "duration": 0.26104,
      "confidence": 0.463
    },
    {
      "start": 175.11006,
      "duration": 0.26106,
      "confidence": 0.29
    },
    {
      "start": 175.37111,
      "duration": 0.26106,
      "confidence": 0.29
    },
    {
      "start": 175.63217,
      "duration": 0.26153,
      "confidence": 0.278
    },
    {
      "start": 175.8937,
      "duration": 0.26153,
      "confidence": 0.278
    },
    {
      "start": 176.15523,
      "duration": 0.26317,
      "confidence": 0.227
    },
    {
      "start": 176.4184,
      "duration": 0.26317,
      "confidence": 0.227
    },
    {
      "start": 176.68156,
      "duration": 0.26225,
      "confidence": 0.391
    },
    {
      "start": 176.94382,
      "duration": 0.26225,
      "confidence": 0.391
    },
    {
      "start": 177.20605,
      "duration": 0.26017,
      "confidence": 0.479
    },
    {
      "start": 177.46623,
      "duration": 0.26017,
      "confidence": 0.479
    },
    {
      "start": 177.7264,
      "duration": 0.26065,
      "confidence": 0.514
    },
    {
      "start": 177.98705,
      "duration": 0.26065,
      "confidence": 0.514
    },
    {
      "start": 178.2477,
      "duration": 0.25927,
      "confidence": 0.379
    },
    {
      "start": 178.50697,
      "duration": 0.25927,
      "confidence": 0.379
    },
    {
      "start": 178.76624,
      "duration": 0.25929,
      "confidence": 0.314
    },
    {
      "start": 179.02553,
      "duration": 0.25929,
      "confidence": 0.314
    },
    {
      "start": 179.2848,
      "duration": 0.25977,
      "confidence": 0.42
    },
    {
      "start": 179.54459,
      "duration": 0.25977,
      "confidence": 0.42
    },
    {
      "start": 179.80437,
      "duration": 0.26003,
      "confidence": 0.346
    },
    {
      "start": 180.06438,
      "duration": 0.26003,
      "confidence": 0.346
    },
    {
      "start": 180.32442,
      "duration": 0.25981,
      "confidence": 0.281
    },
    {
      "start": 180.58421,
      "duration": 0.25981,
      "confidence": 0.281
    },
    {
      "start": 180.84402,
      "duration": 0.26167,
      "confidence": 0.42
    },
    {
      "start": 181.1057,
      "duration": 0.26167,
      "confidence": 0.42
    },
    {
      "start": 181.36737,
      "duration": 0.26168,
      "confidence": 0.431
    },
    {
      "start": 181.62904,
      "duration": 0.26168,
      "confidence": 0.431
    },
    {
      "start": 181.89073,
      "duration": 0.26238,
      "confidence": 0.56
    },
    {
      "start": 182.15312,
      "duration": 0.26238,
      "confidence": 0.56
    },
    {
      "start": 182.4155,
      "duration": 0.26215,
      "confidence": 0.447
    },
    {
      "start": 182.67764,
      "duration": 0.26215,
      "confidence": 0.447
    },
    {
      "start": 182.9398,
      "duration": 0.26076,
      "confidence": 0.375
    },
    {
      "start": 183.20058,
      "duration": 0.26076,
      "confidence": 0.375
    },
    {
      "start": 183.46132,
      "duration": 0.26052,
      "confidence": 0.41
    },
    {
      "start": 183.72185,
      "duration": 0.26052,
      "confidence": 0.41
    },
    {
      "start": 183.98238,
      "duration": 0.26169,
      "confidence": 0.367
    },
    {
      "start": 184.24406,
      "duration": 0.26169,
      "confidence": 0.367
    },
    {
      "start": 184.50575,
      "duration": 0.26006,
      "confidence": 0.378
    },
    {
      "start": 184.76581,
      "duration": 0.26006,
      "confidence": 0.378
    },
    {
      "start": 185.02586,
      "duration": 0.25913,
      "confidence": 0.494
    },
    {
      "start": 185.28499,
      "duration": 0.25913,
      "confidence": 0.494
    },
    {
      "start": 185.54411,
      "duration": 0.26005,
      "confidence": 0.504
    },
    {
      "start": 185.80417,
      "duration": 0.26005,
      "confidence": 0.504
    },
    {
      "start": 186.06422,
      "duration": 0.26144,
      "confidence": 0.417
    },
    {
      "start": 186.32565,
      "duration": 0.26144,
      "confidence": 0.417
    },
    {
      "start": 186.5871,
      "duration": 0.26119,
      "confidence": 0.366
    },
    {
      "start": 186.8483,
      "duration": 0.26119,
      "confidence": 0.366
    },
    {
      "start": 187.10948,
      "duration": 0.26095,
      "confidence": 0.304
    },
    {
      "start": 187.37044,
      "duration": 0.26095,
      "confidence": 0.304
    },
    {
      "start": 187.63138,
      "duration": 0.2607,
      "confidence": 0.285
    },
    {
      "start": 187.89207,
      "duration": 0.2607,
      "confidence": 0.285
    },
    {
      "start": 188.15279,
      "duration": 0.26068,
      "confidence": 0.383
    },
    {
      "start": 188.41347,
      "duration": 0.26068,
      "confidence": 0.383
    },
    {
      "start": 188.67413,
      "duration": 0.26159,
      "confidence": 0.342
    },
    {
      "start": 188.93573,
      "duration": 0.26159,
      "confidence": 0.342
    },
    {
      "start": 189.19733,
      "duration": 0.26134,
      "confidence": 0.288
    },
    {
      "start": 189.45866,
      "duration": 0.26134,
      "confidence": 0.288
    },
    {
      "start": 189.72,
      "duration": 0.26062,
      "confidence": 0.386
    },
    {
      "start": 189.98062,
      "duration": 0.26062,
      "confidence": 0.386
    },
    {
      "start": 190.24126,
      "duration": 0.26154,
      "confidence": 0.384
    },
    {
      "start": 190.50279,
      "duration": 0.26154,
      "confidence": 0.384
    },
    {
      "start": 190.76433,
      "duration": 0.26037,
      "confidence": 0.389
    },
    {
      "start": 191.0247,
      "duration": 0.26037,
      "confidence": 0.389
    },
    {
      "start": 191.28506,
      "duration": 0.2592,
      "confidence": 0.427
    },
    {
      "start": 191.54427,
      "duration": 0.2592,
      "confidence": 0.427
    },
    {
      "start": 191.80347,
      "duration": 0.26199,
      "confidence": 0.445
    },
    {
      "start": 192.06546,
      "duration": 0.26199,
      "confidence": 0.445
    },
    {
      "start": 192.32745,
      "duration": 0.26223,
      "confidence": 0.341
    },
    {
      "start": 192.58968,
      "duration": 0.26223,
      "confidence": 0.341
    },
    {
      "start": 192.8519,
      "duration": 0.26083,
      "confidence": 0.288
    },
    {
      "start": 193.11275,
      "duration": 0.26083,
      "confidence": 0.288
    },
    {
      "start": 193.37357,
      "duration": 0.2613,
      "confidence": 0.272
    },
    {
      "start": 193.63487,
      "duration": 0.2613,
      "confidence": 0.272
    },
    {
      "start": 193.89616,
      "duration": 0.26107,
      "confidence": 0.392
    },
    {
      "start": 194.15726,
      "duration": 0.26107,
      "confidence": 0.392
    },
    {
      "start": 194.41832,
      "duration": 0.26108,
      "confidence": 0.486
    },
    {
      "start": 194.6794,
      "duration": 0.26108,
      "confidence": 0.486
    },
    {
      "start": 194.94048,
      "duration": 0.26038,
      "confidence": 0.331
    },
    {
      "start": 195.20087,
      "duration": 0.26038,
      "confidence": 0.331
    },
    {
      "start": 195.46124,
      "duration": 0.25968,
      "confidence": 0.186
    },
    {
      "start": 195.72092,
      "duration": 0.25968,
      "confidence": 0.186
    },
    {
      "start": 195.9806,
      "duration": 0.26085,
      "confidence": 0.261
    },
    {
      "start": 196.24146,
      "duration": 0.26085,
      "confidence": 0.261
    },
    {
      "start": 196.5023,
      "duration": 0.26178,
      "confidence": 0.395
    },
    {
      "start": 196.76408,
      "duration": 0.26178,
      "confidence": 0.395
    },
    {
      "start": 197.02585,
      "duration": 0.25991,
      "confidence": 0.402
    },
    {
      "start": 197.28577,
      "duration": 0.25991,
      "confidence": 0.402
    },
    {
      "start": 197.54568,
      "duration": 0.26107,
      "confidence": 0.4
    },
    {
      "start": 197.80676,
      "duration": 0.26107,
      "confidence": 0.4
    },
    {
      "start": 198.06783,
      "duration": 0.26061,
      "confidence": 0.487
    },
    {
      "start": 198.32845,
      "duration": 0.26061,
      "confidence": 0.487
    },
    {
      "start": 198.58904,
      "duration": 0.26293,
      "confidence": 0.532
    },
    {
      "start": 198.85197,
      "duration": 0.26293,
      "confidence": 0.532
    },
    {
      "start": 199.1149,
      "duration": 0.25943,
      "confidence": 0.376
    },
    {
      "start": 199.37434,
      "duration": 0.25943,
      "confidence": 0.376
    },
    {
      "start": 199.63377,
      "duration": 0.25989,
      "confidence": 0.279
    },
    {
      "start": 199.89366,
      "duration": 0.25989,
      "confidence": 0.279
    },
    {
      "start": 200.15356,
      "duration": 0.26081,
      "confidence": 0.341
    },
    {
      "start": 200.41437,
      "duration": 0.26081,
      "confidence": 0.341
    },
    {
      "start": 200.67519,
      "duration": 0.26173,
      "confidence": 0.351
    },
    {
      "start": 200.93692,
      "duration": 0.26173,
      "confidence": 0.351
    },
    {
      "start": 201.19865,
      "duration": 0.26099,
      "confidence": 0.2
    },
    {
      "start": 201.45966,
      "duration": 0.26099,
      "confidence": 0.2
    },
    {
      "start": 201.72064,
      "duration": 0.26348,
      "confidence": 0.081
    },
    {
      "start": 201.98412,
      "duration": 0.26348,
      "confidence": 0.081
    },
    {
      "start": 202.24759,
      "duration": 0.26464,
      "confidence": 0.046
    },
    {
      "start": 202.51224,
      "duration": 0.26464,
      "confidence": 0.046
    },
    {
      "start": 202.77689,
      "duration": 0.26464,
      "confidence": 0.053
    },
    {
      "start": 203.04153,
      "duration": 0.26464,
      "confidence": 0.053
    }
  ]
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
  }
  getCurrentSongData = () => {
    const currentTime = ((performance.now() - this.startTime) / 1000)* 10;

    // find the current section based off of the play time
    const currentSection = goldSongData.sections.find(section => {
      return currentTime >= section.start && currentTime <= section.start + section.duration;
    })
    const currentSectionIndex = goldSongData.sections.indexOf(currentSection);

    // find the previous section, or the first section if we're at the beginning
    const previousSection = goldSongData.sections[currentSectionIndex - 1] || goldSongData.sections[0];

    const currentBeat = goldSongData.beats.find(beat => {
      return currentTime >= beat.start && currentTime <= beat.start + beat.duration;
    })
    const percentDone = (currentTime - currentSection.start)/(currentSection.duration);
    return {percentDone, currentSection, previousSection, currentBeat};
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
    const audioData = this.getCurrentSongData();
    const {percentDone, currentSection, previousSection} = audioData;
    const {key, loudness, tempo} = currentSection;
    const {key: previousKey} = previousSection;
    const keyDiff = key - previousKey;
    const tweenedKey = previousKey + (keyDiff * percentDone);
    // convert loudness from decible to a number between 0 and 1
    const loudnessNormalized = (loudness + 60) / 60;

    const renderRadius = loudnessNormalized;
    const renderSpeed = tempo / 100;
    if(key !== tweenedKey) console.log({key, tweenedKey});
    this.writeAudioDataToTexture();
    this.gl.useProgram(this.state.program);
    this.gl.bindTexture(this.gl.TEXTURE_2D, this.state.audioTexture);
    this.gl.bindVertexArray(this.state.vao);
    this.gl.uniform3f(this.state.attribs.iResolution, this.canvas.width, this.canvas.height, 1.0);
    this.gl.uniform1f(this.state.attribs.iTime, (performance.now() - this.startTime) / 1000);
    this.gl.uniform1f(this.state.attribs.RADIUS, renderRadius);
    this.gl.uniform1f(this.state.attribs.SPEED, renderSpeed * 43);
    this.gl.uniform1f(this.state.attribs.iColorScheme, tweenedKey);
    this.gl.drawArrays(this.gl.TRIANGLES, 0, 6);

    this._cleanup();
    requestAnimationFrame(this.frame);
  }

  start = async () => {
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
      iColorScheme: this.gl.getUniformLocation(program, "iColorScheme"),
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
