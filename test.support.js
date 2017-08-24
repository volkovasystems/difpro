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
              */var _defineProperty2 = require("babel-runtime/helpers/defineProperty");var _defineProperty3 = _interopRequireDefault(_defineProperty2);var _for = require("babel-runtime/core-js/symbol/for");var _for2 = _interopRequireDefault(_for);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var assert = require("should");



//: @client:
var difpro = require("./difpro.support.js");
//: @end-client






//: @client:

describe("difpro", function () {

	describe("`difpro( { 'test': '123', 'hello': 'world' }, { 'hello': 'world', 'apple': 'orange' } )`", function () {
		it("should be equal to [ 'test', 'apple' ]", function () {

			var test = difpro({ "test": "123", "hello": "world" }, { "hello": "world", "apple": "orange" });
			assert.deepEqual(test, ["test", "apple"]);

		});
	});

	describe("`difpro( { [ Symbol.for( 'hello' ) ]: 'hello' }, { [ Symbol.for( 'hello' ) ]: 'hello', [ Symbol.for( 'hi' ) ]: 'hi' } )`", function () {
		it("should be equal to [ Symbol.for( 'hi' ) ]", function () {var _difpro2;

			var test = difpro((0, _defineProperty3.default)({}, (0, _for2.default)("hello"), "hello"), (_difpro2 = {}, (0, _defineProperty3.default)(_difpro2, (0, _for2.default)("hello"), "hello"), (0, _defineProperty3.default)(_difpro2, (0, _for2.default)("hi"), "hi"), _difpro2));

			assert.deepEqual(test, [(0, _for2.default)("hi")], "should be equal to [ Symbol.for( 'hi' ) ]");

		});
	});

});

//: @end-client
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwiZGlmcHJvIiwiZGVzY3JpYmUiLCJpdCIsInRlc3QiLCJkZWVwRXF1YWwiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdURBLElBQU1BLFNBQVNDLFFBQVMsUUFBVCxDQUFmOzs7O0FBSUE7QUFDQSxJQUFNQyxTQUFTRCxRQUFTLHFCQUFULENBQWY7QUFDQTs7Ozs7OztBQU9BOztBQUVBRSxTQUFVLFFBQVYsRUFBb0IsWUFBTzs7QUFFMUJBLFVBQVUsMEZBQVYsRUFBc0csWUFBTztBQUM1R0MsS0FBSSx3Q0FBSixFQUE4QyxZQUFPOztBQUVwRCxPQUFJQyxPQUFPSCxPQUFRLEVBQUUsUUFBUSxLQUFWLEVBQWlCLFNBQVMsT0FBMUIsRUFBUixFQUE2QyxFQUFFLFNBQVMsT0FBWCxFQUFvQixTQUFTLFFBQTdCLEVBQTdDLENBQVg7QUFDQUYsVUFBT00sU0FBUCxDQUFrQkQsSUFBbEIsRUFBd0IsQ0FBRSxNQUFGLEVBQVUsT0FBVixDQUF4Qjs7QUFFQSxHQUxEO0FBTUEsRUFQRDs7QUFTQUYsVUFBVSwwSEFBVixFQUFzSSxZQUFPO0FBQzVJQyxLQUFJLDJDQUFKLEVBQWlELFlBQU87O0FBRXZELE9BQUlDLE9BQU9ILHlDQUFZLG1CQUFZLE9BQVosQ0FBWixFQUFxQyxPQUFyQywyREFBb0QsbUJBQVksT0FBWixDQUFwRCxFQUE2RSxPQUE3RSwyQ0FBd0YsbUJBQVksSUFBWixDQUF4RixFQUE4RyxJQUE5RyxhQUFYOztBQUVBRixVQUFPTSxTQUFQLENBQWtCRCxJQUFsQixFQUF3QixDQUFFLG1CQUFZLElBQVosQ0FBRixDQUF4QixFQUFnRCwyQ0FBaEQ7O0FBRUEsR0FORDtBQU9BLEVBUkQ7O0FBVUEsQ0FyQkQ7O0FBdUJBIiwiZmlsZSI6InRlc3Quc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QHRlc3QtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLXRlc3QtbGljZW5zZVxuXG5cdEB0ZXN0LWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwiZGlmcHJvXCIsXG5cdFx0XHRcInBhdGhcIjogXCJkaWZwcm8vdGVzdC5tb2R1bGUuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcInRlc3QubW9kdWxlLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcInRlc3RcIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIixcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXG5cdFx0XHRdLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL2RpZnByby5naXRcIlxuXHRcdH1cblx0QGVuZC10ZXN0LWNvbmZpZ3VyYXRpb25cblxuXHRAdGVzdC1kb2N1bWVudGF0aW9uOlxuXG5cdEBlbmQtdGVzdC1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJhc3NlcnRcIjogXCJzaG91bGRcIixcblx0XHRcdFwiZGlmcHJvXCI6IFwiZGlmcHJvXCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgYXNzZXJ0ID0gcmVxdWlyZSggXCJzaG91bGRcIiApO1xuXG5cblxuLy86IEBjbGllbnQ6XG5jb25zdCBkaWZwcm8gPSByZXF1aXJlKCBcIi4vZGlmcHJvLnN1cHBvcnQuanNcIiApO1xuLy86IEBlbmQtY2xpZW50XG5cblxuXG5cblxuXG4vLzogQGNsaWVudDpcblxuZGVzY3JpYmUoIFwiZGlmcHJvXCIsICggKSA9PiB7XG5cblx0ZGVzY3JpYmUoIFwiYGRpZnBybyggeyAndGVzdCc6ICcxMjMnLCAnaGVsbG8nOiAnd29ybGQnIH0sIHsgJ2hlbGxvJzogJ3dvcmxkJywgJ2FwcGxlJzogJ29yYW5nZScgfSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byBbICd0ZXN0JywgJ2FwcGxlJyBdXCIsICggKSA9PiB7XG5cblx0XHRcdGxldCB0ZXN0ID0gZGlmcHJvKCB7IFwidGVzdFwiOiBcIjEyM1wiLCBcImhlbGxvXCI6IFwid29ybGRcIiB9LCB7IFwiaGVsbG9cIjogXCJ3b3JsZFwiLCBcImFwcGxlXCI6IFwib3JhbmdlXCIgfSApO1xuXHRcdFx0YXNzZXJ0LmRlZXBFcXVhbCggdGVzdCwgWyBcInRlc3RcIiwgXCJhcHBsZVwiIF0gKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBkaWZwcm8oIHsgWyBTeW1ib2wuZm9yKCAnaGVsbG8nICkgXTogJ2hlbGxvJyB9LCB7IFsgU3ltYm9sLmZvciggJ2hlbGxvJyApIF06ICdoZWxsbycsIFsgU3ltYm9sLmZvciggJ2hpJyApIF06ICdoaScgfSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byBbIFN5bWJvbC5mb3IoICdoaScgKSBdXCIsICggKSA9PiB7XG5cblx0XHRcdGxldCB0ZXN0ID0gZGlmcHJvKCB7IFsgU3ltYm9sLmZvciggXCJoZWxsb1wiICkgXTogXCJoZWxsb1wiIH0sIHsgWyBTeW1ib2wuZm9yKCBcImhlbGxvXCIgKSBdOiBcImhlbGxvXCIsIFsgU3ltYm9sLmZvciggXCJoaVwiICkgXTogXCJoaVwiIH0gKTtcblxuXHRcdFx0YXNzZXJ0LmRlZXBFcXVhbCggdGVzdCwgWyBTeW1ib2wuZm9yKCBcImhpXCIgKSBdLCBcInNob3VsZCBiZSBlcXVhbCB0byBbIFN5bWJvbC5mb3IoICdoaScgKSBdXCIgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG59ICk7XG5cbi8vOiBAZW5kLWNsaWVudFxuXG5cblxuIl19
//# sourceMappingURL=test.support.js.map
