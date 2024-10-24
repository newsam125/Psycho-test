"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/admin/checkAuth";
exports.ids = ["pages/api/admin/checkAuth"];
exports.modules = {

/***/ "next-iron-session":
/*!************************************!*\
  !*** external "next-iron-session" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("next-iron-session");

/***/ }),

/***/ "(api)/./pages/api/admin/checkAuth.js":
/*!**************************************!*\
  !*** ./pages/api/admin/checkAuth.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_iron_session__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-iron-session */ \"next-iron-session\");\n/* harmony import */ var next_iron_session__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_iron_session__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    const user = req.session.get(\"user\");\n    if (user) {\n        res.json({\n            isLoggedIn: true\n        });\n    } else {\n        res.json({\n            isLoggedIn: false\n        });\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_iron_session__WEBPACK_IMPORTED_MODULE_0__.withIronSession)(handler, {\n    password: \"complex_password_at_least_32_characters_long\",\n    cookieName: \"myapp_cookiename\",\n    cookieOptions: {\n        secure: \"development\" === \"production\"\n    }\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYWRtaW4vY2hlY2tBdXRoLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFvRDtBQUVwRCxlQUFlQyxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQy9CLE1BQU1DLElBQUksR0FBR0YsR0FBRyxDQUFDRyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxNQUFNLENBQUM7SUFDcEMsSUFBSUYsSUFBSSxFQUFFO1FBQ1JELEdBQUcsQ0FBQ0ksSUFBSSxDQUFDO1lBQUVDLFVBQVUsRUFBRSxJQUFJO1NBQUUsQ0FBQyxDQUFDO0lBQ2pDLE9BQU87UUFDTEwsR0FBRyxDQUFDSSxJQUFJLENBQUM7WUFBRUMsVUFBVSxFQUFFLEtBQUs7U0FBRSxDQUFDLENBQUM7SUFDbEMsQ0FBQztBQUNILENBQUM7QUFFRCxpRUFBZVIsa0VBQWUsQ0FBQ0MsT0FBTyxFQUFFO0lBQ3RDUSxRQUFRLEVBQUUsOENBQThDO0lBQ3hEQyxVQUFVLEVBQUUsa0JBQWtCO0lBQzlCQyxhQUFhLEVBQUU7UUFDYkMsTUFBTSxFQUFFQyxhQWZDLEtBZXdCLFlBQVk7S0FDOUM7Q0FDRixDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wc3ljaG8tdGVzdC8uL3BhZ2VzL2FwaS9hZG1pbi9jaGVja0F1dGguanM/MTZiMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB3aXRoSXJvblNlc3Npb24gfSBmcm9tIFwibmV4dC1pcm9uLXNlc3Npb25cIjtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICBjb25zdCB1c2VyID0gcmVxLnNlc3Npb24uZ2V0KFwidXNlclwiKTtcclxuICBpZiAodXNlcikge1xyXG4gICAgcmVzLmpzb24oeyBpc0xvZ2dlZEluOiB0cnVlIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXMuanNvbih7IGlzTG9nZ2VkSW46IGZhbHNlIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aElyb25TZXNzaW9uKGhhbmRsZXIsIHtcclxuICBwYXNzd29yZDogXCJjb21wbGV4X3Bhc3N3b3JkX2F0X2xlYXN0XzMyX2NoYXJhY3RlcnNfbG9uZ1wiLFxyXG4gIGNvb2tpZU5hbWU6IFwibXlhcHBfY29va2llbmFtZVwiLFxyXG4gIGNvb2tpZU9wdGlvbnM6IHtcclxuICAgIHNlY3VyZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiLFxyXG4gIH0sXHJcbn0pO1xyXG4iXSwibmFtZXMiOlsid2l0aElyb25TZXNzaW9uIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInVzZXIiLCJzZXNzaW9uIiwiZ2V0IiwianNvbiIsImlzTG9nZ2VkSW4iLCJwYXNzd29yZCIsImNvb2tpZU5hbWUiLCJjb29raWVPcHRpb25zIiwic2VjdXJlIiwicHJvY2VzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/admin/checkAuth.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/admin/checkAuth.js"));
module.exports = __webpack_exports__;

})();