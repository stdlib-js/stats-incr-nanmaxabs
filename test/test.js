/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var isPositiveZero = require( '@stdlib/math-base-assert-is-positive-zero' );
var incrmaxabs = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof incrmaxabs, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns an accumulator function', function test( t ) {
	t.equal( typeof incrmaxabs(), 'function', 'returns a function' );
	t.end();
});

tape( 'the initial accumulated value is `null`', function test( t ) {
	var acc = incrmaxabs();
	t.equal( acc(), null, 'returns null' );
	t.end();
});

tape( 'the accumulator function incrementally computes a maximum absolute value', function test( t ) {
	var expected;
	var actual;
	var data;
	var acc;
	var N;
	var i;

	data = [ 2.0, -3.0, NaN, 2.0, -4.0, NaN, 3.0, 4.0 ];
	N = data.length;

	expected = [ 2.0, 3.0, 3.0, 3.0, 4.0, 4.0, 4.0, 4.0 ];
	actual = [];

	acc = incrmaxabs();

	for ( i = 0; i < N; i++ ) {
		actual.push( acc( data[ i ] ) );
	}
	t.deepEqual( actual, expected, 'returns expected incremental results' );
	t.end();
});

tape( 'if not provided an input value, the accumulator function returns the current maximum absolute value', function test( t ) {
	var data;
	var acc;
	var i;

	data = [ 2.0, NaN, -3.0, 1.0 ];
	acc = incrmaxabs();
	for ( i = 0; i < data.length; i++ ) {
		acc( data[ i ] );
	}
	t.equal( acc(), 3.0, 'returns expected value' );
	t.end();
});

tape( 'the accumulator function correctly handles signed zeros', function test( t ) {
	var acc;
	var v;

	acc = incrmaxabs();

	v = acc( -0.0 );
	t.equal( isPositiveZero( v ), true, 'returns expected value' );

	v = acc( 0.0 );
	t.equal( isPositiveZero( v ), true, 'returns expected value' );

	v = acc( -0.0 );
	t.equal( isPositiveZero( v ), true, 'returns expected value' );

	t.end();
});
