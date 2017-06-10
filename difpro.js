"use strict";

/*;
	@module-license:
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
	@end-module-license

	@module-configuration:
		{
			"package": "difpro",
			"path": "difpro/difpro.js",
			"file": "difpro.js",
			"module": "difpro",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>"
			],
			"repository": "https://github.com/volkovasystems/difpro.git",
			"test": "difpro-test.js",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Property difference.

		This will return the list of property different between the source and target.

		The will return own properties and symbols.
	@end-module-documentation

	@include:
		{
			"difray": "difray",
			"falzy": "falzy"
		}
	@end-include
*/

const difray = require( "difray" );
const falzy = require( "falzy" );

const difpro = function difpro( source, target ){
	/*;
		@meta-configuration:
			{
				"source:required": "*",
				"target:required": "*"
			}
		@end-meta-configuration
	*/

	if( falzy( source ) && falzy( target ) ){
		return [ ];
	}

	if( falzy( source ) ){
		return Object.getOwnPropertyNames( target )
			.concat( Object.getOwnPropertySymbols( target ) );
	}

	if( falzy( target ) ){
		return Object.getOwnPropertyNames( source )
			.concat( Object.getOwnPropertySymbols( source ) );
	}

	source = Object.getOwnPropertyNames( source ).concat( Object.getOwnPropertySymbols( source ) );

	target = Object.getOwnPropertyNames( target ).concat( Object.getOwnPropertySymbols( target ) );

	return difray( source, target );
};

module.exports = difpro;
