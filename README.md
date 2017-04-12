# bsplit

[![bsplit](https://img.shields.io/npm/v/bsplit.svg)](https://www.npmjs.com/package/bsplit)
[![Build Status](https://travis-ci.org/kalm/bsplit.svg?branch=master)](https://travis-ci.org/kalm/bsplit)
[![Dependencies Status](https://david-dm.org/kalm/bsplit.svg)](https://www.npmjs.com/package/bsplit)

---

## Status

This project is currently shelved. It was created to reduce the dependency count in Kalm v1 but is no longer required in the newer version. Feel free to contribute or open issues, but you shouldn't expect any updates on this project. Thanks!


## What

A light, dependency-less binary stream splitter for kalm transports.

It acts like a stream, emitting 'data' events, and implementing 'write' and 'end' functions while splitting payloads by a given character or `\n` by default.

Output is a UINT8 array (easier for internal deserialization).


## Usage

```node
const bsplit = require('bsplit');

const socket = net.connect(...);
const stream = socket.pipe(bsplit());
stream.on('data', (data) => console.log(String.fromCharCode.apply(null, data)));
```

Where `bsplit()` can take an argument <UINT8> corresponding to the byte to split on.

## License

Copyright 2017 Frederic Charette

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
