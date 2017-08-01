"use strict";

/*;
	@test-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-test-license

	@test-configuration:
		{
			"package": "difpro",
			"path": "difpro/test.module.js",
			"file": "test.module.js",
			"module": "test",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
				"Vinse Vinalon <vinsevinalon@gmail.com>"
			],
			"repository": "https://github.com/volkovasystems/difpro.git"
		}
	@end-test-configuration

	@test-documentation:

	@end-test-documentation

	@include:
		{
			"assert": "should",
			"difpro": "difpro"
		}
	@end-include
*/

const assert = require( "should" );

//: @server:
const difpro = require( "./difpro.js" );
//: @end-server

//: @client:
const difpro = require( "./difpro.support.js" );
//: @end-client

//: @bridge:
const path = require( "path" );
//: @end-bridge

//: @server:

describe( "difpro", ( ) => {

	describe( `"difpro( { "test": "123", "hello": "world" }, { "hello": "world", "apple": "orange" } )"`, ( ) => {
		it( "should be deeply equal", ( ) => {

			assert.deepEqual( difpro( { "test": "123", "hello": "world" }, { "hello": "world", "apple": "orange" } ),
									[ "test", "apple" ]);

		} );
	} );
} );


//: @end-server


//: @client:


describe( "difpro", ( ) => {

	describe( `"difpro( { "test": "123", "hello": "world" }, { "hello": "world", "apple": "orange" } )"`, ( ) => {
		it( "should be deeply equal", ( ) => {

			assert.deepEqual( difpro( { "test": "123", "hello": "world" }, { "hello": "world", "apple": "orange" } ),
									[ "test", "apple" ]);

		} );
	} );
} );

//: @end-client


//: @bridge:

describe( "difpro", ( ) => {

	let bridgeURL = `file://${ path.resolve( __dirname, "bridge.html" ) }`;

	describe( `"difpro( { "test": "123", "hello": "world" },
		{ "hello": "world", "apple": "orange" } )"`, ( ) => {

		it( "should be equal to [ 'test', 'apple' ]", ( ) => {
			//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){
					return difpro( { "test": "123", "hello": "world" },
						{ "hello": "world", "apple": "orange" } )
				}

			).value;
			//: @end-ignore

			assert.deepEqual( result, [ "test", "apple" ] );

		} );
	} );

	//These test needs to be fixed
	// describe( "`difpro with symbols`", ( ) => {
	// 	it( "should be equal to [ Symbol.for( 'hi' ) ]", ( ) => {
	// 		//: @ignore:
	// 		let result = browser.url( bridgeURL ).execute(
	//
	// 			function( ){
	// 				return difpro( { [ Symbol.for( "hello" ) ]: "hello" },
	// 					{ [ Symbol.for( "hello" ) ]: "hello",
	// 					[ Symbol.for( "hi" ) ]: "hi" } )
	// 			}
	//
	// 		).value;
	// 		//: @end-ignore
	//
	// 		assert.deepEqual( result, [ Symbol.for( "hi" ) ] );
	//
	// 	} );
	// } );

} );

//: @end-bridge
