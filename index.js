/**
 * Dependency-less binary stream splitter
 */

'use strict';

/* Requires ------------------------------------------------------------------*/

const EE = require('events').EventEmitter;

/* Methods -------------------------------------------------------------------*/

function bsplit(charCode=10) {
	const splitter = Object.assign({ acc: [], charCode }, EE.prototype);

	splitter.write = write.bind(splitter);
	splitter.end = end.bind(splitter);
	splitter.flush = flush.bind(splitter);
	return splitter;
}

function write(bytes=[]) {
	const bytes_len = bytes.length;
	for(let i = 0; i < bytes_len; i++) {
		if (bytes[i] === this.charCode) this.flush();
		else this.acc.push(bytes[i]);
	}
	//this.flush();
}

function end(bytes) {
	this.write(bytes);
	this.flush();
}

function flush() {
	if (this.acc.length > 0) {
		this.emit('data', this.acc.splice(0, this.acc.length));
	}
}

/* Exports -------------------------------------------------------------------*/

module.exports = bsplit;