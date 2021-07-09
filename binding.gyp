{
  "targets": [{
    "target_name": "z3",
    "sources": [
      "src/main.cpp"
    ],
    "include_dirs": [
      "<!@(node -p \"require('path').join(process.cwd(), 'z3/4.8.10/include')\")",
      "<!@(node -p \"require('node-addon-api').include\")"
    ],
    "libraries": [
      "<!@(node -p \"require('path').join(process.cwd(), '/z3/4.8.10/bin/libz3.a')\")"
    ],
    'defines': [ 'NAPI_DISABLE_CPP_EXCEPTIONS' ],
    "xcode_settings": {
      "MACOSX_DEPLOYMENT_TARGET": "10.10",
      "OTHER_CFLAGS": [
        "-std=c++14",
        "-stdlib=libc++",
        "-Wall",
        "-Werror"
      ]
    },
    "conditions": [
      ["OS == 'linux'", {
        "cflags": [
          "-std=c++11",
          "-Wall",
          "-Werror"
        ],
        "cflags_cc": [
          "-Wno-cast-function-type"
        ]
      }],
      ["OS == 'win'", {
        "cflags": [
          "/WX"
        ]
      }]
    ]
  }]
}