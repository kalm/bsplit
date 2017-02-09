# bsplit

[![bsplit](https://img.shields.io/npm/v/bsplit.svg)](https://www.npmjs.com/package/bsplit)
[![Build Status](https://travis-ci.org/kalm/bsplit.svg?branch=master)](https://travis-ci.org/kalm/bsplit)
[![Dependencies Status](https://david-dm.org/kalm/bsplit.svg)](https://www.npmjs.com/package/bsplit)

---

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