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
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
              			"repository": "https://github.com/volkovasystems/difpro.git",
              			"test": "difpro-test.js",
              			"global": true
              		}
              	@end-module-configuration
              
              	@module-documentation:
              		Property difference.
              
              		This will return the list of property difference between the source and target.
              
              		The will return own properties and symbols.
              	@end-module-documentation
              
              	@include:
              		{
              			"difray": "difray",
              			"falzy": "falzy",
              			"truly": "truly"
              		}
              	@end-include
              */var _getOwnPropertySymbols = require("babel-runtime/core-js/object/get-own-property-symbols");var _getOwnPropertySymbols2 = _interopRequireDefault(_getOwnPropertySymbols);var _getOwnPropertyNames = require("babel-runtime/core-js/object/get-own-property-names");var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var difray = require("difray");
var falzy = require("falzy");
var truly = require("truly");

var getOwnPropertyNames = _getOwnPropertyNames2.default;
var getOwnPropertySymbols = _getOwnPropertySymbols2.default;

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

	if (falzy(source) && truly(target)) {
		return getOwnPropertyNames(target).concat(getOwnPropertySymbols(target));
	}

	if (falzy(target) && truly(source)) {
		return getOwnPropertyNames(source).concat(getOwnPropertySymbols(source));
	}

	source = getOwnPropertyNames(source).concat(getOwnPropertySymbols(source));

	target = getOwnPropertyNames(target).concat(getOwnPropertySymbols(target));

	return difray(source, target);
};

module.exports = difpro;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpZnByby5zdXBwb3J0LmpzIl0sIm5hbWVzIjpbImRpZnJheSIsInJlcXVpcmUiLCJmYWx6eSIsInRydWx5IiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsImdldE93blByb3BlcnR5U3ltYm9scyIsImRpZnBybyIsInNvdXJjZSIsInRhcmdldCIsImNvbmNhdCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQThEQSxJQUFNQSxTQUFTQyxRQUFTLFFBQVQsQ0FBZjtBQUNBLElBQU1DLFFBQVFELFFBQVMsT0FBVCxDQUFkO0FBQ0EsSUFBTUUsUUFBUUYsUUFBUyxPQUFULENBQWQ7O0FBRUEsSUFBTUcsbURBQU47QUFDQSxJQUFNQyx1REFBTjs7QUFFQSxJQUFNQyxTQUFTLFNBQVNBLE1BQVQsQ0FBaUJDLE1BQWpCLEVBQXlCQyxNQUF6QixFQUFpQztBQUMvQzs7Ozs7Ozs7O0FBU0EsS0FBSU4sTUFBT0ssTUFBUCxLQUFtQkwsTUFBT00sTUFBUCxDQUF2QixFQUF3QztBQUN2QyxTQUFPLEVBQVA7QUFDQTs7QUFFRCxLQUFJTixNQUFPSyxNQUFQLEtBQW1CSixNQUFPSyxNQUFQLENBQXZCLEVBQXdDO0FBQ3ZDLFNBQU9KLG9CQUFxQkksTUFBckIsRUFBOEJDLE1BQTlCLENBQXNDSixzQkFBdUJHLE1BQXZCLENBQXRDLENBQVA7QUFDQTs7QUFFRCxLQUFJTixNQUFPTSxNQUFQLEtBQW1CTCxNQUFPSSxNQUFQLENBQXZCLEVBQXdDO0FBQ3ZDLFNBQU9ILG9CQUFxQkcsTUFBckIsRUFBOEJFLE1BQTlCLENBQXNDSixzQkFBdUJFLE1BQXZCLENBQXRDLENBQVA7QUFDQTs7QUFFREEsVUFBU0gsb0JBQXFCRyxNQUFyQixFQUE4QkUsTUFBOUIsQ0FBc0NKLHNCQUF1QkUsTUFBdkIsQ0FBdEMsQ0FBVDs7QUFFQUMsVUFBU0osb0JBQXFCSSxNQUFyQixFQUE4QkMsTUFBOUIsQ0FBc0NKLHNCQUF1QkcsTUFBdkIsQ0FBdEMsQ0FBVDs7QUFFQSxRQUFPUixPQUFRTyxNQUFSLEVBQWdCQyxNQUFoQixDQUFQO0FBQ0EsQ0EzQkQ7O0FBNkJBRSxPQUFPQyxPQUFQLEdBQWlCTCxNQUFqQiIsImZpbGUiOiJkaWZwcm8uc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QG1vZHVsZS1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtbW9kdWxlLWxpY2Vuc2VcblxuXHRAbW9kdWxlLWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwiZGlmcHJvXCIsXG5cdFx0XHRcInBhdGhcIjogXCJkaWZwcm8vZGlmcHJvLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJkaWZwcm8uanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwiZGlmcHJvXCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCIsXG5cdFx0XHRcdFwiVmluc2UgVmluYWxvbiA8dmluc2V2aW5hbG9uQGdtYWlsLmNvbT5cIlxuXHRcdFx0XSxcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9kaWZwcm8uZ2l0XCIsXG5cdFx0XHRcInRlc3RcIjogXCJkaWZwcm8tdGVzdC5qc1wiLFxuXHRcdFx0XCJnbG9iYWxcIjogdHJ1ZVxuXHRcdH1cblx0QGVuZC1tb2R1bGUtY29uZmlndXJhdGlvblxuXG5cdEBtb2R1bGUtZG9jdW1lbnRhdGlvbjpcblx0XHRQcm9wZXJ0eSBkaWZmZXJlbmNlLlxuXG5cdFx0VGhpcyB3aWxsIHJldHVybiB0aGUgbGlzdCBvZiBwcm9wZXJ0eSBkaWZmZXJlbmNlIGJldHdlZW4gdGhlIHNvdXJjZSBhbmQgdGFyZ2V0LlxuXG5cdFx0VGhlIHdpbGwgcmV0dXJuIG93biBwcm9wZXJ0aWVzIGFuZCBzeW1ib2xzLlxuXHRAZW5kLW1vZHVsZS1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJkaWZyYXlcIjogXCJkaWZyYXlcIixcblx0XHRcdFwiZmFsenlcIjogXCJmYWx6eVwiLFxuXHRcdFx0XCJ0cnVseVwiOiBcInRydWx5XCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgZGlmcmF5ID0gcmVxdWlyZSggXCJkaWZyYXlcIiApO1xuY29uc3QgZmFsenkgPSByZXF1aXJlKCBcImZhbHp5XCIgKTtcbmNvbnN0IHRydWx5ID0gcmVxdWlyZSggXCJ0cnVseVwiIClcblxuY29uc3QgZ2V0T3duUHJvcGVydHlOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO1xuY29uc3QgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcblxuY29uc3QgZGlmcHJvID0gZnVuY3Rpb24gZGlmcHJvKCBzb3VyY2UsIHRhcmdldCApe1xuXHQvKjtcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0e1xuXHRcdFx0XHRcInNvdXJjZTpyZXF1aXJlZFwiOiBcIipcIixcblx0XHRcdFx0XCJ0YXJnZXQ6cmVxdWlyZWRcIjogXCIqXCJcblx0XHRcdH1cblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHQqL1xuXG5cdGlmKCBmYWx6eSggc291cmNlICkgJiYgZmFsenkoIHRhcmdldCApICl7XG5cdFx0cmV0dXJuIFsgXTtcblx0fVxuXG5cdGlmKCBmYWx6eSggc291cmNlICkgJiYgdHJ1bHkoIHRhcmdldCApICl7XG5cdFx0cmV0dXJuIGdldE93blByb3BlcnR5TmFtZXMoIHRhcmdldCApLmNvbmNhdCggZ2V0T3duUHJvcGVydHlTeW1ib2xzKCB0YXJnZXQgKSApO1xuXHR9XG5cblx0aWYoIGZhbHp5KCB0YXJnZXQgKSAmJiB0cnVseSggc291cmNlICkgKXtcblx0XHRyZXR1cm4gZ2V0T3duUHJvcGVydHlOYW1lcyggc291cmNlICkuY29uY2F0KCBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoIHNvdXJjZSApICk7XG5cdH1cblxuXHRzb3VyY2UgPSBnZXRPd25Qcm9wZXJ0eU5hbWVzKCBzb3VyY2UgKS5jb25jYXQoIGdldE93blByb3BlcnR5U3ltYm9scyggc291cmNlICkgKTtcblxuXHR0YXJnZXQgPSBnZXRPd25Qcm9wZXJ0eU5hbWVzKCB0YXJnZXQgKS5jb25jYXQoIGdldE93blByb3BlcnR5U3ltYm9scyggdGFyZ2V0ICkgKTtcblxuXHRyZXR1cm4gZGlmcmF5KCBzb3VyY2UsIHRhcmdldCApO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBkaWZwcm87XG4iXX0=
//# sourceMappingURL=difpro.support.js.map
