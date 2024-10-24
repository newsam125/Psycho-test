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
exports.id = "pages/api/saveResult";
exports.ids = ["pages/api/saveResult"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./lib/mongodb.js":
/*!************************!*\
  !*** ./lib/mongodb.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst uri = process.env.MONGODB_URI;\nconst options = {\n    useUnifiedTopology: true,\n    useNewUrlParser: true\n};\nlet client;\nlet clientPromise;\nif (!process.env.MONGODB_URI) {\n    throw new Error(\"Please add your Mongo URI to .env.local\");\n}\nif (true) {\n    if (!global._mongoClientPromise) {\n        client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, options);\n        global._mongoClientPromise = client.connect();\n    }\n    clientPromise = global._mongoClientPromise;\n} else {}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvbW9uZ29kYi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBc0M7QUFFdEMsTUFBTUMsR0FBRyxHQUFHQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsV0FBVztBQUNuQyxNQUFNQyxPQUFPLEdBQUc7SUFDZEMsa0JBQWtCLEVBQUUsSUFBSTtJQUN4QkMsZUFBZSxFQUFFLElBQUk7Q0FDdEI7QUFFRCxJQUFJQyxNQUFNO0FBQ1YsSUFBSUMsYUFBYTtBQUVqQixJQUFJLENBQUNQLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxXQUFXLEVBQUU7SUFDNUIsTUFBTSxJQUFJTSxLQUFLLENBQUMseUNBQXlDLENBQUMsQ0FBQztBQUM3RCxDQUFDO0FBRUQsSUFBSVIsSUFBc0MsRUFBRTtJQUMxQyxJQUFJLENBQUNTLE1BQU0sQ0FBQ0MsbUJBQW1CLEVBQUU7UUFDL0JKLE1BQU0sR0FBRyxJQUFJUixnREFBVyxDQUFDQyxHQUFHLEVBQUVJLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZDTSxNQUFNLENBQUNDLG1CQUFtQixHQUFHSixNQUFNLENBQUNLLE9BQU8sRUFBRSxDQUFDO0lBQ2hELENBQUM7SUFDREosYUFBYSxHQUFHRSxNQUFNLENBQUNDLG1CQUFtQixDQUFDO0FBQzdDLE9BQU8sRUFHTjtBQUVELGlFQUFlSCxhQUFhLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wc3ljaG8tdGVzdC8uL2xpYi9tb25nb2RiLmpzP2Q5MjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tICdtb25nb2RiJztcclxuXHJcbmNvbnN0IHVyaSA9IHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJO1xyXG5jb25zdCBvcHRpb25zID0ge1xyXG4gIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZSxcclxuICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXHJcbn07XHJcblxyXG5sZXQgY2xpZW50O1xyXG5sZXQgY2xpZW50UHJvbWlzZTtcclxuXHJcbmlmICghcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkkpIHtcclxuICB0aHJvdyBuZXcgRXJyb3IoJ1BsZWFzZSBhZGQgeW91ciBNb25nbyBVUkkgdG8gLmVudi5sb2NhbCcpO1xyXG59XHJcblxyXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcclxuICBpZiAoIWdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlKSB7XHJcbiAgICBjbGllbnQgPSBuZXcgTW9uZ29DbGllbnQodXJpLCBvcHRpb25zKTtcclxuICAgIGdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlID0gY2xpZW50LmNvbm5lY3QoKTtcclxuICB9XHJcbiAgY2xpZW50UHJvbWlzZSA9IGdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlO1xyXG59IGVsc2Uge1xyXG4gIGNsaWVudCA9IG5ldyBNb25nb0NsaWVudCh1cmksIG9wdGlvbnMpO1xyXG4gIGNsaWVudFByb21pc2UgPSBjbGllbnQuY29ubmVjdCgpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGllbnRQcm9taXNlO1xyXG4iXSwibmFtZXMiOlsiTW9uZ29DbGllbnQiLCJ1cmkiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9VUkkiLCJvcHRpb25zIiwidXNlVW5pZmllZFRvcG9sb2d5IiwidXNlTmV3VXJsUGFyc2VyIiwiY2xpZW50IiwiY2xpZW50UHJvbWlzZSIsIkVycm9yIiwiZ2xvYmFsIiwiX21vbmdvQ2xpZW50UHJvbWlzZSIsImNvbm5lY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/mongodb.js\n");

/***/ }),

/***/ "(api)/./pages/api/saveResult.js":
/*!*********************************!*\
  !*** ./pages/api/saveResult.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/mongodb */ \"(api)/./lib/mongodb.js\");\n\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        try {\n            const client = await _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n            const db = client.db(\"psycho-test\");\n            const result = req.body;\n            // 确保所有需要的字段都存在\n            const requiredFields = [\n                \"grade\",\n                \"class\",\n                \"studentId\",\n                \"name\",\n                \"age\",\n                \"teacherName\",\n                \"date\",\n                \"scores\",\n                \"description\"\n            ];\n            for (let field of requiredFields){\n                if (!(field in result)) {\n                    return res.status(400).json({\n                        message: `Missing required field: ${field}`\n                    });\n                }\n            }\n            await db.collection(\"results\").insertOne(result);\n            res.status(200).json({\n                message: \"Result saved successfully\"\n            });\n        } catch (e) {\n            console.error(e);\n            res.status(500).json({\n                message: \"Error saving result\"\n            });\n        }\n    } else {\n        res.status(405).end(); // Method Not Allowed\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2F2ZVJlc3VsdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUE4QztBQUUvQixlQUFlQyxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzlDLElBQUlELEdBQUcsQ0FBQ0UsTUFBTSxLQUFLLE1BQU0sRUFBRTtRQUN6QixJQUFJO1lBQ0YsTUFBTUMsTUFBTSxHQUFHLE1BQU1MLG9EQUFhO1lBQ2xDLE1BQU1NLEVBQUUsR0FBR0QsTUFBTSxDQUFDQyxFQUFFLENBQUMsYUFBYSxDQUFDO1lBQ25DLE1BQU1DLE1BQU0sR0FBR0wsR0FBRyxDQUFDTSxJQUFJO1lBQ3ZCLGVBQWU7WUFDZixNQUFNQyxjQUFjLEdBQUc7Z0JBQUMsT0FBTztnQkFBRSxPQUFPO2dCQUFFLFdBQVc7Z0JBQUUsTUFBTTtnQkFBRSxLQUFLO2dCQUFFLGFBQWE7Z0JBQUUsTUFBTTtnQkFBRSxRQUFRO2dCQUFFLGFBQWE7YUFBQztZQUNySCxLQUFLLElBQUlDLEtBQUssSUFBSUQsY0FBYyxDQUFFO2dCQUNoQyxJQUFJLENBQUVDLENBQUFBLEtBQUssSUFBSUgsTUFBTSxHQUFHO29CQUN0QixPQUFPSixHQUFHLENBQUNRLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO3dCQUFFQyxPQUFPLEVBQUUsQ0FBQyx3QkFBd0IsRUFBRUgsS0FBSyxDQUFDLENBQUM7cUJBQUUsQ0FBQyxDQUFDO2dCQUMvRSxDQUFDO1lBQ0gsQ0FBQztZQUNELE1BQU1KLEVBQUUsQ0FBQ1EsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDQyxTQUFTLENBQUNSLE1BQU0sQ0FBQyxDQUFDO1lBQ2pESixHQUFHLENBQUNRLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO2dCQUFFQyxPQUFPLEVBQUUsMkJBQTJCO2FBQUUsQ0FBQyxDQUFDO1FBQ2pFLEVBQUUsT0FBT0csQ0FBQyxFQUFFO1lBQ1ZDLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDRixDQUFDLENBQUMsQ0FBQztZQUNqQmIsR0FBRyxDQUFDUSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztnQkFBRUMsT0FBTyxFQUFFLHFCQUFxQjthQUFFLENBQUMsQ0FBQztRQUMzRCxDQUFDO0lBQ0gsT0FBTztRQUNMVixHQUFHLENBQUNRLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ1EsR0FBRyxFQUFFLENBQUMsQ0FBQyxxQkFBcUI7SUFDOUMsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wc3ljaG8tdGVzdC8uL3BhZ2VzL2FwaS9zYXZlUmVzdWx0LmpzP2NkMWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsaWVudFByb21pc2UgZnJvbSAnLi4vLi4vbGliL21vbmdvZGInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gIGlmIChyZXEubWV0aG9kID09PSAnUE9TVCcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNsaWVudFByb21pc2U7XHJcbiAgICAgIGNvbnN0IGRiID0gY2xpZW50LmRiKFwicHN5Y2hvLXRlc3RcIik7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHJlcS5ib2R5O1xyXG4gICAgICAvLyDnoa7kv53miYDmnInpnIDopoHnmoTlrZfmrrXpg73lrZjlnKhcclxuICAgICAgY29uc3QgcmVxdWlyZWRGaWVsZHMgPSBbJ2dyYWRlJywgJ2NsYXNzJywgJ3N0dWRlbnRJZCcsICduYW1lJywgJ2FnZScsICd0ZWFjaGVyTmFtZScsICdkYXRlJywgJ3Njb3JlcycsICdkZXNjcmlwdGlvbiddO1xyXG4gICAgICBmb3IgKGxldCBmaWVsZCBvZiByZXF1aXJlZEZpZWxkcykge1xyXG4gICAgICAgIGlmICghKGZpZWxkIGluIHJlc3VsdCkpIHtcclxuICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IG1lc3NhZ2U6IGBNaXNzaW5nIHJlcXVpcmVkIGZpZWxkOiAke2ZpZWxkfWAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGF3YWl0IGRiLmNvbGxlY3Rpb24oXCJyZXN1bHRzXCIpLmluc2VydE9uZShyZXN1bHQpO1xyXG4gICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lc3NhZ2U6ICdSZXN1bHQgc2F2ZWQgc3VjY2Vzc2Z1bGx5JyB9KTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihlKTtcclxuICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiAnRXJyb3Igc2F2aW5nIHJlc3VsdCcgfSk7XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIHJlcy5zdGF0dXMoNDA1KS5lbmQoKTsgLy8gTWV0aG9kIE5vdCBBbGxvd2VkXHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJjbGllbnRQcm9taXNlIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsImNsaWVudCIsImRiIiwicmVzdWx0IiwiYm9keSIsInJlcXVpcmVkRmllbGRzIiwiZmllbGQiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsImNvbGxlY3Rpb24iLCJpbnNlcnRPbmUiLCJlIiwiY29uc29sZSIsImVycm9yIiwiZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/saveResult.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/saveResult.js"));
module.exports = __webpack_exports__;

})();