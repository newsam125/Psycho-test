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
exports.id = "pages/api/teachers";
exports.ids = ["pages/api/teachers"];
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

/***/ "(api)/./pages/api/teachers.js":
/*!*******************************!*\
  !*** ./pages/api/teachers.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/mongodb */ \"(api)/./lib/mongodb.js\");\n\nasync function handler(req, res) {\n    if (req.method === \"GET\") {\n        try {\n            const client = await _lib_mongodb__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n            const db = client.db(\"psycho-test\");\n            const teachers = await db.collection(\"teachers\").find({}).toArray();\n            res.status(200).json(teachers);\n        } catch (e) {\n            console.error(e);\n            res.status(500).json({\n                message: \"Error fetching teachers\"\n            });\n        }\n    } else {\n        res.status(405).end(); // Method Not Allowed\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdGVhY2hlcnMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBOEM7QUFFL0IsZUFBZUMsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM5QyxJQUFJRCxHQUFHLENBQUNFLE1BQU0sS0FBSyxLQUFLLEVBQUU7UUFDeEIsSUFBSTtZQUNGLE1BQU1DLE1BQU0sR0FBRyxNQUFNTCxvREFBYTtZQUNsQyxNQUFNTSxFQUFFLEdBQUdELE1BQU0sQ0FBQ0MsRUFBRSxDQUFDLGFBQWEsQ0FBQztZQUNuQyxNQUFNQyxRQUFRLEdBQUcsTUFBTUQsRUFBRSxDQUFDRSxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUNDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQ0MsT0FBTyxFQUFFO1lBQ25FUCxHQUFHLENBQUNRLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDTCxRQUFRLENBQUMsQ0FBQztRQUNqQyxFQUFFLE9BQU9NLENBQUMsRUFBRTtZQUNWQyxPQUFPLENBQUNDLEtBQUssQ0FBQ0YsQ0FBQyxDQUFDLENBQUM7WUFDakJWLEdBQUcsQ0FBQ1EsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7Z0JBQUVJLE9BQU8sRUFBRSx5QkFBeUI7YUFBRSxDQUFDLENBQUM7UUFDL0QsQ0FBQztJQUNILE9BQU87UUFDTGIsR0FBRyxDQUFDUSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNNLEdBQUcsRUFBRSxDQUFDLENBQUMscUJBQXFCO0lBQzlDLENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHN5Y2hvLXRlc3QvLi9wYWdlcy9hcGkvdGVhY2hlcnMuanM/OWRiYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xpZW50UHJvbWlzZSBmcm9tICcuLi8uLi9saWIvbW9uZ29kYic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgaWYgKHJlcS5tZXRob2QgPT09ICdHRVQnKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBjbGllbnRQcm9taXNlO1xyXG4gICAgICBjb25zdCBkYiA9IGNsaWVudC5kYihcInBzeWNoby10ZXN0XCIpO1xyXG4gICAgICBjb25zdCB0ZWFjaGVycyA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oXCJ0ZWFjaGVyc1wiKS5maW5kKHt9KS50b0FycmF5KCk7XHJcbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHRlYWNoZXJzKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihlKTtcclxuICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiAnRXJyb3IgZmV0Y2hpbmcgdGVhY2hlcnMnIH0pO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXMuc3RhdHVzKDQwNSkuZW5kKCk7IC8vIE1ldGhvZCBOb3QgQWxsb3dlZFxyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiY2xpZW50UHJvbWlzZSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJjbGllbnQiLCJkYiIsInRlYWNoZXJzIiwiY29sbGVjdGlvbiIsImZpbmQiLCJ0b0FycmF5Iiwic3RhdHVzIiwianNvbiIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJtZXNzYWdlIiwiZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/teachers.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/teachers.js"));
module.exports = __webpack_exports__;

})();