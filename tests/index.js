/**
 * Kalm websockets test suite
 */

'use strict';

/* Requires ------------------------------------------------------------------*/

const expect = require('chai').expect;
const bsplit = require('../');

/* Suite ---------------------------------------------------------------------*/

describe('bsplit', () => {
	describe('default settings', () => {
		let testSplitter = bsplit();

		it('should have the proper settings', () => {
			expect(testSplitter.charCode).to.equal(10);
		});

		it('end()', (done) => {
			testSplitter.on('data', () => done());
			testSplitter.end('foo');
		});
	});
});
