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
              */var _getOwnPropertySymbols = require("babel-runtime/core-js/object/get-own-property-symbols");var _getOwnPropertySymbols2 = _interopRequireDefault(_getOwnPropertySymbols);var _getOwnPropertyNames = require("babel-runtime/core-js/object/get-own-property-names");var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var difray = require("difray");
var falzy = require("falzy");

var difpro = function difpro(source, target) {
	/*;
                                              	@meta-configuration:
                                              		{
                                              			"source:required": "*",
                                              			"target:required": "*"
                                              		}
                                              	@end-meta-configuration
                                              */

	if (falzy(source) && falzy(target)) {
		return [];
	}

	if (falzy(source)) {
		return (0, _getOwnPropertyNames2.default)(target).
		concat((0, _getOwnPropertySymbols2.default)(target));
	}

	if (falzy(target)) {
		return (0, _getOwnPropertyNames2.default)(source).
		concat((0, _getOwnPropertySymbols2.default)(source));
	}

	source = (0, _getOwnPropertyNames2.default)(source).concat((0, _getOwnPropertySymbols2.default)(source));

	target = (0, _getOwnPropertyNames2.default)(target).concat((0, _getOwnPropertySymbols2.default)(target));

	return difray(source, target);
};

module.exports = difpro;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpZnByby5zdXBwb3J0LmpzIl0sIm5hbWVzIjpbImRpZnJheSIsInJlcXVpcmUiLCJmYWx6eSIsImRpZnBybyIsInNvdXJjZSIsInRhcmdldCIsImNvbmNhdCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5REEsSUFBTUEsU0FBU0MsUUFBUyxRQUFULENBQWY7QUFDQSxJQUFNQyxRQUFRRCxRQUFTLE9BQVQsQ0FBZDs7QUFFQSxJQUFNRSxTQUFTLFNBQVNBLE1BQVQsQ0FBaUJDLE1BQWpCLEVBQXlCQyxNQUF6QixFQUFpQztBQUMvQzs7Ozs7Ozs7O0FBU0EsS0FBSUgsTUFBT0UsTUFBUCxLQUFtQkYsTUFBT0csTUFBUCxDQUF2QixFQUF3QztBQUN2QyxTQUFPLEVBQVA7QUFDQTs7QUFFRCxLQUFJSCxNQUFPRSxNQUFQLENBQUosRUFBcUI7QUFDcEIsU0FBTyxtQ0FBNEJDLE1BQTVCO0FBQ0xDLFFBREssQ0FDRyxxQ0FBOEJELE1BQTlCLENBREgsQ0FBUDtBQUVBOztBQUVELEtBQUlILE1BQU9HLE1BQVAsQ0FBSixFQUFxQjtBQUNwQixTQUFPLG1DQUE0QkQsTUFBNUI7QUFDTEUsUUFESyxDQUNHLHFDQUE4QkYsTUFBOUIsQ0FESCxDQUFQO0FBRUE7O0FBRURBLFVBQVMsbUNBQTRCQSxNQUE1QixFQUFxQ0UsTUFBckMsQ0FBNkMscUNBQThCRixNQUE5QixDQUE3QyxDQUFUOztBQUVBQyxVQUFTLG1DQUE0QkEsTUFBNUIsRUFBcUNDLE1BQXJDLENBQTZDLHFDQUE4QkQsTUFBOUIsQ0FBN0MsQ0FBVDs7QUFFQSxRQUFPTCxPQUFRSSxNQUFSLEVBQWdCQyxNQUFoQixDQUFQO0FBQ0EsQ0E3QkQ7O0FBK0JBRSxPQUFPQyxPQUFQLEdBQWlCTCxNQUFqQiIsImZpbGUiOiJkaWZwcm8uc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLyo7XHJcblx0QG1vZHVsZS1saWNlbnNlOlxyXG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXHJcblx0XHRAbWl0LWxpY2Vuc2VcclxuXHJcblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXHJcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cclxuXHJcblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXHJcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXHJcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXHJcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcclxuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcblxyXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXHJcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG5cclxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxyXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcclxuXHRcdFNPRlRXQVJFLlxyXG5cdEBlbmQtbW9kdWxlLWxpY2Vuc2VcclxuXHJcblx0QG1vZHVsZS1jb25maWd1cmF0aW9uOlxyXG5cdFx0e1xyXG5cdFx0XHRcInBhY2thZ2VcIjogXCJkaWZwcm9cIixcclxuXHRcdFx0XCJwYXRoXCI6IFwiZGlmcHJvL2RpZnByby5qc1wiLFxyXG5cdFx0XHRcImZpbGVcIjogXCJkaWZwcm8uanNcIixcclxuXHRcdFx0XCJtb2R1bGVcIjogXCJkaWZwcm9cIixcclxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcclxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcclxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL2RpZnByby5naXRcIixcclxuXHRcdFx0XCJ0ZXN0XCI6IFwiZGlmcHJvLXRlc3QuanNcIixcclxuXHRcdFx0XCJnbG9iYWxcIjogdHJ1ZVxyXG5cdFx0fVxyXG5cdEBlbmQtbW9kdWxlLWNvbmZpZ3VyYXRpb25cclxuXHJcblx0QG1vZHVsZS1kb2N1bWVudGF0aW9uOlxyXG5cdFx0UHJvcGVydHkgZGlmZmVyZW5jZS5cclxuXHJcblx0XHRUaGlzIHdpbGwgcmV0dXJuIHRoZSBsaXN0IG9mIHByb3BlcnR5IGRpZmZlcmVudCBiZXR3ZWVuIHRoZSBzb3VyY2UgYW5kIHRhcmdldC5cclxuXHJcblx0XHRUaGUgd2lsbCByZXR1cm4gb3duIHByb3BlcnRpZXMgYW5kIHN5bWJvbHMuXHJcblx0QGVuZC1tb2R1bGUtZG9jdW1lbnRhdGlvblxyXG5cclxuXHRAaW5jbHVkZTpcclxuXHRcdHtcclxuXHRcdFx0XCJkaWZyYXlcIjogXCJkaWZyYXlcIixcclxuXHRcdFx0XCJmYWx6eVwiOiBcImZhbHp5XCJcclxuXHRcdH1cclxuXHRAZW5kLWluY2x1ZGVcclxuKi9cclxuXHJcbmNvbnN0IGRpZnJheSA9IHJlcXVpcmUoIFwiZGlmcmF5XCIgKTtcclxuY29uc3QgZmFsenkgPSByZXF1aXJlKCBcImZhbHp5XCIgKTtcclxuXHJcbmNvbnN0IGRpZnBybyA9IGZ1bmN0aW9uIGRpZnBybyggc291cmNlLCB0YXJnZXQgKXtcclxuXHQvKjtcclxuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XHJcblx0XHRcdHtcclxuXHRcdFx0XHRcInNvdXJjZTpyZXF1aXJlZFwiOiBcIipcIixcclxuXHRcdFx0XHRcInRhcmdldDpyZXF1aXJlZFwiOiBcIipcIlxyXG5cdFx0XHR9XHJcblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxyXG5cdCovXHJcblxyXG5cdGlmKCBmYWx6eSggc291cmNlICkgJiYgZmFsenkoIHRhcmdldCApICl7XHJcblx0XHRyZXR1cm4gWyBdO1xyXG5cdH1cclxuXHJcblx0aWYoIGZhbHp5KCBzb3VyY2UgKSApe1xyXG5cdFx0cmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKCB0YXJnZXQgKVxyXG5cdFx0XHQuY29uY2F0KCBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKCB0YXJnZXQgKSApO1xyXG5cdH1cclxuXHJcblx0aWYoIGZhbHp5KCB0YXJnZXQgKSApe1xyXG5cdFx0cmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKCBzb3VyY2UgKVxyXG5cdFx0XHQuY29uY2F0KCBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKCBzb3VyY2UgKSApO1xyXG5cdH1cclxuXHJcblx0c291cmNlID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoIHNvdXJjZSApLmNvbmNhdCggT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyggc291cmNlICkgKTtcclxuXHJcblx0dGFyZ2V0ID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoIHRhcmdldCApLmNvbmNhdCggT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyggdGFyZ2V0ICkgKTtcclxuXHJcblx0cmV0dXJuIGRpZnJheSggc291cmNlLCB0YXJnZXQgKTtcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZGlmcHJvO1xyXG4iXX0=
//# sourceMappingURL=difpro.support.js.map
