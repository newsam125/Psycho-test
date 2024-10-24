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
exports.id = "pages/api/teacher/test";
exports.ids = ["pages/api/teacher/test"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./pages/api/teacher/test.js":
/*!***********************************!*\
  !*** ./pages/api/teacher/test.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _utils_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/mongodb */ \"(api)/./utils/mongodb.js\");\n\nasync function handler(req, res) {\n    try {\n        const { db  } = await (0,_utils_mongodb__WEBPACK_IMPORTED_MODULE_0__.connectToDatabase)();\n        const teachers = await db.collection(\"teachers\").find({}).toArray();\n        res.status(200).json({\n            message: \"数据库连接成功\",\n            teacherCount: teachers.length\n        });\n    } catch (error) {\n        console.error(\"测试路由错误:\", error);\n        res.status(500).json({\n            error: \"服务器错误\",\n            details: error.message\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdGVhY2hlci90ZXN0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQTJEO0FBRTVDLGVBQWVDLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDOUMsSUFBSTtRQUNGLE1BQU0sRUFBRUMsRUFBRSxHQUFFLEdBQUcsTUFBTUosaUVBQWlCLEVBQUU7UUFDeEMsTUFBTUssUUFBUSxHQUFHLE1BQU1ELEVBQUUsQ0FBQ0UsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUNDLE9BQU8sRUFBRTtRQUNuRUwsR0FBRyxDQUFDTSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFQyxPQUFPLEVBQUUsU0FBUztZQUFFQyxZQUFZLEVBQUVQLFFBQVEsQ0FBQ1EsTUFBTTtTQUFFLENBQUMsQ0FBQztJQUM5RSxFQUFFLE9BQU9DLEtBQUssRUFBRTtRQUNkQyxPQUFPLENBQUNELEtBQUssQ0FBQyxTQUFTLEVBQUVBLEtBQUssQ0FBQyxDQUFDO1FBQ2hDWCxHQUFHLENBQUNNLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVJLEtBQUssRUFBRSxPQUFPO1lBQUVFLE9BQU8sRUFBRUYsS0FBSyxDQUFDSCxPQUFPO1NBQUUsQ0FBQyxDQUFDO0lBQ25FLENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHN5Y2hvLXRlc3QvLi9wYWdlcy9hcGkvdGVhY2hlci90ZXN0LmpzPzFjNjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29ubmVjdFRvRGF0YWJhc2UgfSBmcm9tICcuLi8uLi8uLi91dGlscy9tb25nb2RiJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBkYiB9ID0gYXdhaXQgY29ubmVjdFRvRGF0YWJhc2UoKTtcclxuICAgIGNvbnN0IHRlYWNoZXJzID0gYXdhaXQgZGIuY29sbGVjdGlvbigndGVhY2hlcnMnKS5maW5kKHt9KS50b0FycmF5KCk7XHJcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lc3NhZ2U6IFwi5pWw5o2u5bqT6L+e5o6l5oiQ5YqfXCIsIHRlYWNoZXJDb3VudDogdGVhY2hlcnMubGVuZ3RoIH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCfmtYvor5Xot6/nlLHplJnor686JywgZXJyb3IpO1xyXG4gICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogJ+acjeWKoeWZqOmUmeivrycsIGRldGFpbHM6IGVycm9yLm1lc3NhZ2UgfSk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJjb25uZWN0VG9EYXRhYmFzZSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJkYiIsInRlYWNoZXJzIiwiY29sbGVjdGlvbiIsImZpbmQiLCJ0b0FycmF5Iiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJ0ZWFjaGVyQ291bnQiLCJsZW5ndGgiLCJlcnJvciIsImNvbnNvbGUiLCJkZXRhaWxzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/teacher/test.js\n");

/***/ }),

/***/ "(api)/./utils/mongodb.js":
/*!**************************!*\
  !*** ./utils/mongodb.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"connectToDatabase\": () => (/* binding */ connectToDatabase)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst uri = process.env.MONGODB_URI;\nconst options = {\n    useUnifiedTopology: true,\n    useNewUrlParser: true\n};\nlet client;\nlet clientPromise;\nif (!process.env.MONGODB_URI) {\n    throw new Error(\"请添加 Mongo URI 到 .env.local\");\n}\nif (true) {\n    if (!global._mongoClientPromise) {\n        client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, options);\n        global._mongoClientPromise = client.connect();\n    }\n    clientPromise = global._mongoClientPromise;\n} else {}\nasync function connectToDatabase() {\n    const client = await clientPromise;\n    const db = client.db(process.env.MONGODB_DB);\n    return {\n        client,\n        db\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9tb25nb2RiLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFzQztBQUV0QyxNQUFNQyxHQUFHLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxXQUFXO0FBQ25DLE1BQU1DLE9BQU8sR0FBRztJQUNkQyxrQkFBa0IsRUFBRSxJQUFJO0lBQ3hCQyxlQUFlLEVBQUUsSUFBSTtDQUN0QjtBQUVELElBQUlDLE1BQU07QUFDVixJQUFJQyxhQUFhO0FBRWpCLElBQUksQ0FBQ1AsT0FBTyxDQUFDQyxHQUFHLENBQUNDLFdBQVcsRUFBRTtJQUM1QixNQUFNLElBQUlNLEtBQUssQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO0FBQ2hELENBQUM7QUFFRCxJQUFJUixJQUFzQyxFQUFFO0lBQzFDLElBQUksQ0FBQ1MsTUFBTSxDQUFDQyxtQkFBbUIsRUFBRTtRQUMvQkosTUFBTSxHQUFHLElBQUlSLGdEQUFXLENBQUNDLEdBQUcsRUFBRUksT0FBTyxDQUFDLENBQUM7UUFDdkNNLE1BQU0sQ0FBQ0MsbUJBQW1CLEdBQUdKLE1BQU0sQ0FBQ0ssT0FBTyxFQUFFLENBQUM7SUFDaEQsQ0FBQztJQUNESixhQUFhLEdBQUdFLE1BQU0sQ0FBQ0MsbUJBQW1CLENBQUM7QUFDN0MsT0FBTyxFQUdOO0FBRU0sZUFBZUUsaUJBQWlCLEdBQUc7SUFDeEMsTUFBTU4sTUFBTSxHQUFHLE1BQU1DLGFBQWE7SUFDbEMsTUFBTU0sRUFBRSxHQUFHUCxNQUFNLENBQUNPLEVBQUUsQ0FBQ2IsT0FBTyxDQUFDQyxHQUFHLENBQUNhLFVBQVUsQ0FBQztJQUM1QyxPQUFPO1FBQUVSLE1BQU07UUFBRU8sRUFBRTtLQUFFLENBQUM7QUFDeEIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3BzeWNoby10ZXN0Ly4vdXRpbHMvbW9uZ29kYi5qcz84ZmQ0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSAnbW9uZ29kYic7XHJcblxyXG5jb25zdCB1cmkgPSBwcm9jZXNzLmVudi5NT05HT0RCX1VSSTtcclxuY29uc3Qgb3B0aW9ucyA9IHtcclxuICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWUsXHJcbiAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxyXG59O1xyXG5cclxubGV0IGNsaWVudDtcclxubGV0IGNsaWVudFByb21pc2U7XHJcblxyXG5pZiAoIXByb2Nlc3MuZW52Lk1PTkdPREJfVVJJKSB7XHJcbiAgdGhyb3cgbmV3IEVycm9yKCfor7fmt7vliqAgTW9uZ28gVVJJIOWIsCAuZW52LmxvY2FsJyk7XHJcbn1cclxuXHJcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xyXG4gIGlmICghZ2xvYmFsLl9tb25nb0NsaWVudFByb21pc2UpIHtcclxuICAgIGNsaWVudCA9IG5ldyBNb25nb0NsaWVudCh1cmksIG9wdGlvbnMpO1xyXG4gICAgZ2xvYmFsLl9tb25nb0NsaWVudFByb21pc2UgPSBjbGllbnQuY29ubmVjdCgpO1xyXG4gIH1cclxuICBjbGllbnRQcm9taXNlID0gZ2xvYmFsLl9tb25nb0NsaWVudFByb21pc2U7XHJcbn0gZWxzZSB7XHJcbiAgY2xpZW50ID0gbmV3IE1vbmdvQ2xpZW50KHVyaSwgb3B0aW9ucyk7XHJcbiAgY2xpZW50UHJvbWlzZSA9IGNsaWVudC5jb25uZWN0KCk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjb25uZWN0VG9EYXRhYmFzZSgpIHtcclxuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjbGllbnRQcm9taXNlO1xyXG4gIGNvbnN0IGRiID0gY2xpZW50LmRiKHByb2Nlc3MuZW52Lk1PTkdPREJfREIpO1xyXG4gIHJldHVybiB7IGNsaWVudCwgZGIgfTtcclxufVxyXG4iXSwibmFtZXMiOlsiTW9uZ29DbGllbnQiLCJ1cmkiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9VUkkiLCJvcHRpb25zIiwidXNlVW5pZmllZFRvcG9sb2d5IiwidXNlTmV3VXJsUGFyc2VyIiwiY2xpZW50IiwiY2xpZW50UHJvbWlzZSIsIkVycm9yIiwiZ2xvYmFsIiwiX21vbmdvQ2xpZW50UHJvbWlzZSIsImNvbm5lY3QiLCJjb25uZWN0VG9EYXRhYmFzZSIsImRiIiwiTU9OR09EQl9EQiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./utils/mongodb.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/teacher/test.js"));
module.exports = __webpack_exports__;

})();