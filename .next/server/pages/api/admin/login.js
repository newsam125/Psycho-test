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
exports.id = "pages/api/admin/login";
exports.ids = ["pages/api/admin/login"];
exports.modules = {

/***/ "next-iron-session":
/*!************************************!*\
  !*** external "next-iron-session" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("next-iron-session");

/***/ }),

/***/ "(api)/./pages/api/admin/login.js":
/*!**********************************!*\
  !*** ./pages/api/admin/login.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_iron_session__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-iron-session */ \"next-iron-session\");\n/* harmony import */ var next_iron_session__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_iron_session__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        const { username , password  } = req.body;\n        // 检查用户名和密码是否都为 \"admin\"\n        if (username === \"admin\" && password === \"admin\") {\n            req.session.set(\"user\", {\n                isLoggedIn: true,\n                username: \"admin\"\n            });\n            await req.session.save();\n            res.status(200).json({\n                message: \"Login successful\"\n            });\n        } else {\n            res.status(401).json({\n                message: \"Invalid username or password\"\n            });\n        }\n    } else {\n        res.status(405).end(); // Method Not Allowed\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_iron_session__WEBPACK_IMPORTED_MODULE_0__.withIronSession)(handler, {\n    password: \"complex_password_at_least_32_characters_long\",\n    cookieName: \"myapp_cookiename\",\n    cookieOptions: {\n        secure: \"development\" === \"production\"\n    }\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYWRtaW4vbG9naW4uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQW9EO0FBRXBELGVBQWVDLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDL0IsSUFBSUQsR0FBRyxDQUFDRSxNQUFNLEtBQUssTUFBTSxFQUFFO1FBQ3pCLE1BQU0sRUFBRUMsUUFBUSxHQUFFQyxRQUFRLEdBQUUsR0FBR0osR0FBRyxDQUFDSyxJQUFJO1FBQ3ZDLHVCQUF1QjtRQUN2QixJQUFJRixRQUFRLEtBQUssT0FBTyxJQUFJQyxRQUFRLEtBQUssT0FBTyxFQUFFO1lBQ2hESixHQUFHLENBQUNNLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sRUFBRTtnQkFBRUMsVUFBVSxFQUFFLElBQUk7Z0JBQUVMLFFBQVEsRUFBRSxPQUFPO2FBQUUsQ0FBQyxDQUFDO1lBQ2pFLE1BQU1ILEdBQUcsQ0FBQ00sT0FBTyxDQUFDRyxJQUFJLEVBQUUsQ0FBQztZQUN6QlIsR0FBRyxDQUFDUyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztnQkFBRUMsT0FBTyxFQUFFLGtCQUFrQjthQUFFLENBQUMsQ0FBQztRQUN4RCxPQUFPO1lBQ0xYLEdBQUcsQ0FBQ1MsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7Z0JBQUVDLE9BQU8sRUFBRSw4QkFBOEI7YUFBRSxDQUFDLENBQUM7UUFDcEUsQ0FBQztJQUNILE9BQU87UUFDTFgsR0FBRyxDQUFDUyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNHLEdBQUcsRUFBRSxDQUFDLENBQUMscUJBQXFCO0lBQzlDLENBQUM7QUFDSCxDQUFDO0FBRUQsaUVBQWVmLGtFQUFlLENBQUNDLE9BQU8sRUFBRTtJQUN0Q0ssUUFBUSxFQUFFLDhDQUE4QztJQUN4RFUsVUFBVSxFQUFFLGtCQUFrQjtJQUM5QkMsYUFBYSxFQUFFO1FBQ2JDLE1BQU0sRUFBRUMsYUF0QkMsS0FzQndCLFlBQVk7S0FDOUM7Q0FDRixDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wc3ljaG8tdGVzdC8uL3BhZ2VzL2FwaS9hZG1pbi9sb2dpbi5qcz83ZmY3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHdpdGhJcm9uU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWlyb24tc2Vzc2lvblwiO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gIGlmIChyZXEubWV0aG9kID09PSAnUE9TVCcpIHtcclxuICAgIGNvbnN0IHsgdXNlcm5hbWUsIHBhc3N3b3JkIH0gPSByZXEuYm9keTtcclxuICAgIC8vIOajgOafpeeUqOaIt+WQjeWSjOWvhueggeaYr+WQpumDveS4uiBcImFkbWluXCJcclxuICAgIGlmICh1c2VybmFtZSA9PT0gJ2FkbWluJyAmJiBwYXNzd29yZCA9PT0gJ2FkbWluJykge1xyXG4gICAgICByZXEuc2Vzc2lvbi5zZXQoXCJ1c2VyXCIsIHsgaXNMb2dnZWRJbjogdHJ1ZSwgdXNlcm5hbWU6ICdhZG1pbicgfSk7XHJcbiAgICAgIGF3YWl0IHJlcS5zZXNzaW9uLnNhdmUoKTtcclxuICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZXNzYWdlOiAnTG9naW4gc3VjY2Vzc2Z1bCcgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXMuc3RhdHVzKDQwMSkuanNvbih7IG1lc3NhZ2U6ICdJbnZhbGlkIHVzZXJuYW1lIG9yIHBhc3N3b3JkJyB9KTtcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgcmVzLnN0YXR1cyg0MDUpLmVuZCgpOyAvLyBNZXRob2QgTm90IEFsbG93ZWRcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhJcm9uU2Vzc2lvbihoYW5kbGVyLCB7XHJcbiAgcGFzc3dvcmQ6IFwiY29tcGxleF9wYXNzd29yZF9hdF9sZWFzdF8zMl9jaGFyYWN0ZXJzX2xvbmdcIixcclxuICBjb29raWVOYW1lOiBcIm15YXBwX2Nvb2tpZW5hbWVcIixcclxuICBjb29raWVPcHRpb25zOiB7XHJcbiAgICBzZWN1cmU6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIixcclxuICB9LFxyXG59KTtcclxuIl0sIm5hbWVzIjpbIndpdGhJcm9uU2Vzc2lvbiIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiYm9keSIsInNlc3Npb24iLCJzZXQiLCJpc0xvZ2dlZEluIiwic2F2ZSIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwiZW5kIiwiY29va2llTmFtZSIsImNvb2tpZU9wdGlvbnMiLCJzZWN1cmUiLCJwcm9jZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/admin/login.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/admin/login.js"));
module.exports = __webpack_exports__;

})();