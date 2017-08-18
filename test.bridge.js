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

var assert = require("should");





//: @bridge:
var path = require("path");
//: @end-bridge







//: @bridge:

describe("difpro", function () {

	var bridgeURL = "file://" + path.resolve(__dirname, "bridge.html");

	describe("\"difpro( { \"test\": \"123\", \"hello\": \"world\" },\n\t\t{ \"hello\": \"world\", \"apple\": \"orange\" } )\"",
	function () {

		it("should be equal to [ 'test', 'apple' ]", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					return difpro( { "test": "123", "hello": "world" },
   						{ "hello": "world", "apple": "orange" } )
   				}
   
   			).value;
   			//: @end-ignore

			assert.deepEqual(result, ["test", "apple"]);

		});
	});


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

});

//: @end-bridge
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuYnJpZGdlLmpzIl0sIm5hbWVzIjpbImFzc2VydCIsInJlcXVpcmUiLCJwYXRoIiwiZGVzY3JpYmUiLCJicmlkZ2VVUkwiLCJyZXNvbHZlIiwiX19kaXJuYW1lIiwiaXQiLCJkZWVwRXF1YWwiLCJyZXN1bHQiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdURBLElBQU1BLFNBQVNDLFFBQVMsUUFBVCxDQUFmOzs7Ozs7QUFNQTtBQUNBLElBQU1DLE9BQU9ELFFBQVMsTUFBVCxDQUFiO0FBQ0E7Ozs7Ozs7O0FBUUE7O0FBRUFFLFNBQVUsUUFBVixFQUFvQixZQUFPOztBQUUxQixLQUFJQyx3QkFBdUJGLEtBQUtHLE9BQUwsQ0FBY0MsU0FBZCxFQUF5QixhQUF6QixDQUEzQjs7QUFFQUg7QUFDOEMsYUFBTzs7QUFFcERJLEtBQUksd0NBQUosRUFBOEMsWUFBTztBQUNwRDtBQUNIOzs7Ozs7Ozs7O0FBVUE7O0FBRUdQLFVBQU9RLFNBQVAsQ0FBa0JDLE1BQWxCLEVBQTBCLENBQUUsTUFBRixFQUFVLE9BQVYsQ0FBMUI7O0FBRUEsR0FoQkQ7QUFpQkEsRUFwQkQ7OztBQXVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNEOzs7Ozs7Ozs7OztBQVdBO0FBQ0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQWpERDs7QUFtREEiLCJmaWxlIjoidGVzdC5icmlkZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8qO1xyXG5cdEB0ZXN0LWxpY2Vuc2U6XHJcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcclxuXHRcdEBtaXQtbGljZW5zZVxyXG5cclxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3JcclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxyXG5cclxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcclxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcclxuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcclxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuXHJcblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcclxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcblxyXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXHJcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxyXG5cdFx0U09GVFdBUkUuXHJcblx0QGVuZC10ZXN0LWxpY2Vuc2VcclxuXHJcblx0QHRlc3QtY29uZmlndXJhdGlvbjpcclxuXHRcdHtcclxuXHRcdFx0XCJwYWNrYWdlXCI6IFwiZGlmcHJvXCIsXHJcblx0XHRcdFwicGF0aFwiOiBcImRpZnByby90ZXN0Lm1vZHVsZS5qc1wiLFxyXG5cdFx0XHRcImZpbGVcIjogXCJ0ZXN0Lm1vZHVsZS5qc1wiLFxyXG5cdFx0XHRcIm1vZHVsZVwiOiBcInRlc3RcIixcclxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcclxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcclxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xyXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiLFxyXG5cdFx0XHRcdFwiVmluc2UgVmluYWxvbiA8dmluc2V2aW5hbG9uQGdtYWlsLmNvbT5cIlxyXG5cdFx0XHRdLFxyXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvZGlmcHJvLmdpdFwiXHJcblx0XHR9XHJcblx0QGVuZC10ZXN0LWNvbmZpZ3VyYXRpb25cclxuXHJcblx0QHRlc3QtZG9jdW1lbnRhdGlvbjpcclxuXHJcblx0QGVuZC10ZXN0LWRvY3VtZW50YXRpb25cclxuXHJcblx0QGluY2x1ZGU6XHJcblx0XHR7XHJcblx0XHRcdFwiYXNzZXJ0XCI6IFwic2hvdWxkXCIsXHJcblx0XHRcdFwiZGlmcHJvXCI6IFwiZGlmcHJvXCJcclxuXHRcdH1cclxuXHRAZW5kLWluY2x1ZGVcclxuKi9cclxuXHJcbmNvbnN0IGFzc2VydCA9IHJlcXVpcmUoIFwic2hvdWxkXCIgKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4vLzogQGJyaWRnZTpcclxuY29uc3QgcGF0aCA9IHJlcXVpcmUoIFwicGF0aFwiICk7XHJcbi8vOiBAZW5kLWJyaWRnZVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLy86IEBicmlkZ2U6XHJcblxyXG5kZXNjcmliZSggXCJkaWZwcm9cIiwgKCApID0+IHtcclxuXHJcblx0bGV0IGJyaWRnZVVSTCA9IGBmaWxlOi8vJHsgcGF0aC5yZXNvbHZlKCBfX2Rpcm5hbWUsIFwiYnJpZGdlLmh0bWxcIiApIH1gO1xyXG5cclxuXHRkZXNjcmliZSggYFwiZGlmcHJvKCB7IFwidGVzdFwiOiBcIjEyM1wiLCBcImhlbGxvXCI6IFwid29ybGRcIiB9LFxyXG5cdFx0eyBcImhlbGxvXCI6IFwid29ybGRcIiwgXCJhcHBsZVwiOiBcIm9yYW5nZVwiIH0gKVwiYCwgKCApID0+IHtcclxuXHJcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gWyAndGVzdCcsICdhcHBsZScgXVwiLCAoICkgPT4ge1xyXG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXHJcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcclxuXHJcblx0XHRcdFx0ZnVuY3Rpb24oICl7XHJcblx0XHRcdFx0XHRyZXR1cm4gZGlmcHJvKCB7IFwidGVzdFwiOiBcIjEyM1wiLCBcImhlbGxvXCI6IFwid29ybGRcIiB9LFxyXG5cdFx0XHRcdFx0XHR7IFwiaGVsbG9cIjogXCJ3b3JsZFwiLCBcImFwcGxlXCI6IFwib3JhbmdlXCIgfSApXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0KS52YWx1ZTtcclxuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxyXG5cclxuXHRcdFx0YXNzZXJ0LmRlZXBFcXVhbCggcmVzdWx0LCBbIFwidGVzdFwiLCBcImFwcGxlXCIgXSApO1xyXG5cclxuXHRcdH0gKTtcclxuXHR9ICk7XHJcblx0XHJcblxyXG5cdC8vVGhlc2UgdGVzdCBuZWVkcyB0byBiZSBmaXhlZFxyXG5cdC8vIGRlc2NyaWJlKCBcImBkaWZwcm8gd2l0aCBzeW1ib2xzYFwiLCAoICkgPT4ge1xyXG5cdC8vIFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIFsgU3ltYm9sLmZvciggJ2hpJyApIF1cIiwgKCApID0+IHtcclxuXHQvLyBcdFx0Ly86IEBpZ25vcmU6XG4vKlxyXG5cdC8vIFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXHJcblx0Ly9cclxuXHQvLyBcdFx0XHRmdW5jdGlvbiggKXtcclxuXHQvLyBcdFx0XHRcdHJldHVybiBkaWZwcm8oIHsgWyBTeW1ib2wuZm9yKCBcImhlbGxvXCIgKSBdOiBcImhlbGxvXCIgfSxcclxuXHQvLyBcdFx0XHRcdFx0eyBbIFN5bWJvbC5mb3IoIFwiaGVsbG9cIiApIF06IFwiaGVsbG9cIixcclxuXHQvLyBcdFx0XHRcdFx0WyBTeW1ib2wuZm9yKCBcImhpXCIgKSBdOiBcImhpXCIgfSApXHJcblx0Ly8gXHRcdFx0fVxyXG5cdC8vXHJcblx0Ly8gXHRcdCkudmFsdWU7XHJcblx0Ly8gXHRcdCovXG4vLzogQGVuZC1pZ25vcmVcclxuXHQvL1xyXG5cdC8vIFx0XHRhc3NlcnQuZGVlcEVxdWFsKCByZXN1bHQsIFsgU3ltYm9sLmZvciggXCJoaVwiICkgXSApO1xyXG5cdC8vXHJcblx0Ly8gXHR9ICk7XHJcblx0Ly8gfSApO1xyXG5cclxufSApO1xyXG5cclxuLy86IEBlbmQtYnJpZGdlXHJcbiJdfQ==
//# sourceMappingURL=test.bridge.js.map
