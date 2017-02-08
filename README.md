# bsplit

A light, dependency-less stream splitter for kalm transports.

It acts like a stream, emitting 'data' events, and implementing 'write' and 'end' functions while splitting payloads by a given character or `\n` by default.

Output is a UINT8 array (easier for internal deserialization).