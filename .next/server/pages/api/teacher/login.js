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
exports.id = "pages/api/teacher/login";
exports.ids = ["pages/api/teacher/login"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "next-iron-session":
/*!************************************!*\
  !*** external "next-iron-session" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("next-iron-session");

/***/ }),

/***/ "(api)/./pages/api/teacher/login.js":
/*!************************************!*\
  !*** ./pages/api/teacher/login.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_iron_session__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-iron-session */ \"next-iron-session\");\n/* harmony import */ var next_iron_session__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_iron_session__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/mongodb */ \"(api)/./utils/mongodb.js\");\n\n\nasync function handler(req, res) {\n    if (req.method !== \"POST\") {\n        return res.status(405).json({\n            error: \"方法不允许\"\n        });\n    }\n    try {\n        console.log(\"尝试连接数据库\");\n        const { db  } = await (0,_utils_mongodb__WEBPACK_IMPORTED_MODULE_1__.connectToDatabase)();\n        console.log(\"数据库连接成功\");\n        const { username , password  } = req.body;\n        console.log(\"尝试登录用户:\", username);\n        const teacher = await db.collection(\"teachers\").findOne({\n            username\n        });\n        console.log(\"查询结果:\", teacher ? \"找到教师\" : \"未找到教师\");\n        if (!teacher) {\n            console.log(\"登录失败：未找到教师\");\n            return res.status(401).json({\n                error: \"用户名或密码错误\"\n            });\n        }\n        console.log(\"数据库中的密码:\", teacher.password);\n        console.log(\"用户输入的密码:\", password);\n        if (teacher.password !== password) {\n            console.log(\"登录失败：密码不匹配\");\n            return res.status(401).json({\n                error: \"用户名或密码错误\"\n            });\n        }\n        req.session.set(\"teacher\", {\n            id: teacher._id,\n            username: teacher.username\n        });\n        await req.session.save();\n        console.log(\"登录成功，会话已保存\");\n        res.status(200).json({\n            message: \"登录成功\"\n        });\n    } catch (error) {\n        console.error(\"登录错误:\", error);\n        res.status(500).json({\n            error: \"服务器错误\",\n            details: error.message\n        });\n    }\n}\nif (!process.env.SESSION_PASSWORD) {\n    console.error(\"SESSION_PASSWORD 未设置\");\n    throw new Error(\"SESSION_PASSWORD 必须在环境变量中设置\");\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_iron_session__WEBPACK_IMPORTED_MODULE_0__.withIronSession)(handler, {\n    password: process.env.SESSION_PASSWORD,\n    cookieName: \"teacher_session\",\n    cookieOptions: {\n        secure: \"development\" === \"production\"\n    }\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TyxDQUFDRCxLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQztJQUN0QyxNQUFNLElBQUlvQixLQUFLLENBQUMsNkJBQTZCLENBQUMsQ0FBQztBQUNqRCxDQUFDO0FBRUQsaUVBQWU1QixrRUFBZSxDQUFDRSxPQUFPLEVBQUU7SUFDdENXLFFBQVEsRUFBRVksT0FBTyxDQUFDQyxHQUFHLENBQUNDLGdCQUFnQjtJQUN0Q0UsVUFBVSxFQUFFLGlCQUFpQjtJQUM3QkMsYUFBYSxFQUFFO1FBQ2JDLE1BQU0sRUFBRU4sYUF2REMsS0F1RHdCLFlBQVk7S0FDOUM7Q0FDRixDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wc3ljaG8tdGVzdC8uL3BhZ2VzL2FwaS90ZWFjaGVyL2xvZ2luLmpzPzU3MDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgd2l0aElyb25TZXNzaW9uIH0gZnJvbSBcIm5leHQtaXJvbi1zZXNzaW9uXCI7XHJcbmltcG9ydCB7IGNvbm5lY3RUb0RhdGFiYXNlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvbW9uZ29kYic7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgaWYgKHJlcS5tZXRob2QgIT09ICdQT1NUJykge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA1KS5qc29uKHsgZXJyb3I6ICfmlrnms5XkuI3lhYHorrgnIH0pO1xyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnNvbGUubG9nKCflsJ3or5Xov57mjqXmlbDmja7lupMnKTtcclxuICAgIGNvbnN0IHsgZGIgfSA9IGF3YWl0IGNvbm5lY3RUb0RhdGFiYXNlKCk7XHJcbiAgICBjb25zb2xlLmxvZygn5pWw5o2u5bqT6L+e5o6l5oiQ5YqfJyk7XHJcblxyXG4gICAgY29uc3QgeyB1c2VybmFtZSwgcGFzc3dvcmQgfSA9IHJlcS5ib2R5O1xyXG4gICAgY29uc29sZS5sb2coJ+WwneivleeZu+W9leeUqOaItzonLCB1c2VybmFtZSk7XHJcblxyXG4gICAgY29uc3QgdGVhY2hlciA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oJ3RlYWNoZXJzJykuZmluZE9uZSh7IHVzZXJuYW1lIH0pO1xyXG4gICAgY29uc29sZS5sb2coJ+afpeivoue7k+aenDonLCB0ZWFjaGVyID8gJ+aJvuWIsOaVmeW4iCcgOiAn5pyq5om+5Yiw5pWZ5biIJyk7XHJcblxyXG4gICAgaWYgKCF0ZWFjaGVyKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCfnmbvlvZXlpLHotKXvvJrmnKrmib7liLDmlZnluIgnKTtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAxKS5qc29uKHsgZXJyb3I6IFwi55So5oi35ZCN5oiW5a+G56CB6ZSZ6K+vXCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc29sZS5sb2coJ+aVsOaNruW6k+S4reeahOWvhueggTonLCB0ZWFjaGVyLnBhc3N3b3JkKTtcclxuICAgIGNvbnNvbGUubG9nKCfnlKjmiLfovpPlhaXnmoTlr4bnoIE6JywgcGFzc3dvcmQpO1xyXG5cclxuICAgIGlmICh0ZWFjaGVyLnBhc3N3b3JkICE9PSBwYXNzd29yZCkge1xyXG4gICAgICBjb25zb2xlLmxvZygn55m75b2V5aSx6LSl77ya5a+G56CB5LiN5Yy56YWNJyk7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMSkuanNvbih7IGVycm9yOiBcIueUqOaIt+WQjeaIluWvhueggemUmeivr1wiIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlcS5zZXNzaW9uLnNldChcInRlYWNoZXJcIiwge1xyXG4gICAgICBpZDogdGVhY2hlci5faWQsXHJcbiAgICAgIHVzZXJuYW1lOiB0ZWFjaGVyLnVzZXJuYW1lXHJcbiAgICB9KTtcclxuICAgIGF3YWl0IHJlcS5zZXNzaW9uLnNhdmUoKTtcclxuICAgIGNvbnNvbGUubG9nKCfnmbvlvZXmiJDlip/vvIzkvJror53lt7Lkv53lrZgnKTtcclxuXHJcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lc3NhZ2U6IFwi55m75b2V5oiQ5YqfXCIgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ+eZu+W9lemUmeivrzonLCBlcnJvcik7XHJcbiAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiAn5pyN5Yqh5Zmo6ZSZ6K+vJywgZGV0YWlsczogZXJyb3IubWVzc2FnZSB9KTtcclxuICB9XHJcbn1cclxuXHJcbmlmICghcHJvY2Vzcy5lbnYuU0VTU0lPTl9QQVNTV09SRCkge1xyXG4gIGNvbnNvbGUuZXJyb3IoJ1NFU1NJT05fUEFTU1dPUkQg5pyq6K6+572uJyk7XHJcbiAgdGhyb3cgbmV3IEVycm9yKCdTRVNTSU9OX1BBU1NXT1JEIOW/hemhu+WcqOeOr+Wig+WPmOmHj+S4reiuvue9ricpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoSXJvblNlc3Npb24oaGFuZGxlciwge1xyXG4gIHBhc3N3b3JkOiBwcm9jZXNzLmVudi5TRVNTSU9OX1BBU1NXT1JELFxyXG4gIGNvb2tpZU5hbWU6IFwidGVhY2hlcl9zZXNzaW9uXCIsXHJcbiAgY29va2llT3B0aW9uczoge1xyXG4gICAgc2VjdXJlOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIsXHJcbiAgfSxcclxufSk7XHJcbiJdLCJuYW1lcyI6WyJ3aXRoSXJvblNlc3Npb24iLCJjb25uZWN0VG9EYXRhYmFzZSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiZGIiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiYm9keSIsInRlYWNoZXIiLCJjb2xsZWN0aW9uIiwiZmluZE9uZSIsInNlc3Npb24iLCJzZXQiLCJpZCIsIl9pZCIsInNhdmUiLCJtZXNzYWdlIiwiZGV0YWlscyIsInByb2Nlc3MiLCJlbnYiLCJTRVNTSU9OX1BBU1NXT1JEIiwiRXJyb3IiLCJjb29raWVOYW1lIiwiY29va2llT3B0aW9ucyIsInNlY3VyZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/teacher/login.js\n");

/***/ }),

/***/ "(api)/./utils/mongodb.js":
/*!**************************!*\
  !*** ./utils/mongodb.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"connectToDatabase\": () => (/* binding */ connectToDatabase)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst uri = process.env.MONGODB_URI;\nconst options = {\n    useUnifiedTopology: true,\n    useNewUrlParser: true\n};\nlet cachedClient = null;\nlet cachedDb = null;\nasync function connectToDatabase() {\n    if (cachedClient && cachedDb) {\n        return {\n            client: cachedClient,\n            db: cachedDb\n        };\n    }\n    if (!uri) {\n        throw new Error(\"请设置 MONGODB_URI 环境变量\");\n    }\n    try {\n        const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(uri, options);\n        const db = client.db(process.env.MONGODB_DB);\n        cachedClient = client;\n        cachedDb = db;\n        console.log(\"MongoDB 连接成功\");\n        return {\n            client,\n            db\n        };\n    } catch (error) {\n        console.error(\"MongoDB 连接错误:\", error);\n        throw error;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9tb25nb2RiLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFzQztBQUV0QyxNQUFNQyxHQUFHLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxXQUFXO0FBQ25DLE1BQU1DLE9BQU8sR0FBRztJQUNkQyxrQkFBa0IsRUFBRSxJQUFJO0lBQ3hCQyxlQUFlLEVBQUUsSUFBSTtDQUN0QjtBQUVELElBQUlDLFlBQVksR0FBRyxJQUFJO0FBQ3ZCLElBQUlDLFFBQVEsR0FBRyxJQUFJO0FBRVosZUFBZUMsaUJBQWlCLEdBQUc7SUFDeEMsSUFBSUYsWUFBWSxJQUFJQyxRQUFRLEVBQUU7UUFDNUIsT0FBTztZQUFFRSxNQUFNLEVBQUVILFlBQVk7WUFBRUksRUFBRSxFQUFFSCxRQUFRO1NBQUUsQ0FBQztJQUNoRCxDQUFDO0lBRUQsSUFBSSxDQUFDUixHQUFHLEVBQUU7UUFDUixNQUFNLElBQUlZLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCxJQUFJO1FBQ0YsTUFBTUYsTUFBTSxHQUFHLE1BQU1YLHdEQUFtQixDQUFDQyxHQUFHLEVBQUVJLE9BQU8sQ0FBQztRQUN0RCxNQUFNTyxFQUFFLEdBQUdELE1BQU0sQ0FBQ0MsRUFBRSxDQUFDVixPQUFPLENBQUNDLEdBQUcsQ0FBQ1ksVUFBVSxDQUFDO1FBRTVDUCxZQUFZLEdBQUdHLE1BQU0sQ0FBQztRQUN0QkYsUUFBUSxHQUFHRyxFQUFFLENBQUM7UUFFZEksT0FBTyxDQUFDQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDNUIsT0FBTztZQUFFTixNQUFNO1lBQUVDLEVBQUU7U0FBRSxDQUFDO0lBQ3hCLEVBQUUsT0FBT00sS0FBSyxFQUFFO1FBQ2RGLE9BQU8sQ0FBQ0UsS0FBSyxDQUFDLGVBQWUsRUFBRUEsS0FBSyxDQUFDLENBQUM7UUFDdEMsTUFBTUEsS0FBSyxDQUFDO0lBQ2QsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wc3ljaG8tdGVzdC8uL3V0aWxzL21vbmdvZGIuanM/OGZkNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gJ21vbmdvZGInO1xyXG5cclxuY29uc3QgdXJpID0gcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkk7XHJcbmNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlLFxyXG4gIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcclxufTtcclxuXHJcbmxldCBjYWNoZWRDbGllbnQgPSBudWxsO1xyXG5sZXQgY2FjaGVkRGIgPSBudWxsO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNvbm5lY3RUb0RhdGFiYXNlKCkge1xyXG4gIGlmIChjYWNoZWRDbGllbnQgJiYgY2FjaGVkRGIpIHtcclxuICAgIHJldHVybiB7IGNsaWVudDogY2FjaGVkQ2xpZW50LCBkYjogY2FjaGVkRGIgfTtcclxuICB9XHJcblxyXG4gIGlmICghdXJpKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ+ivt+iuvue9riBNT05HT0RCX1VSSSDnjq/looPlj5jph48nKTtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KHVyaSwgb3B0aW9ucyk7XHJcbiAgICBjb25zdCBkYiA9IGNsaWVudC5kYihwcm9jZXNzLmVudi5NT05HT0RCX0RCKTtcclxuXHJcbiAgICBjYWNoZWRDbGllbnQgPSBjbGllbnQ7XHJcbiAgICBjYWNoZWREYiA9IGRiO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKCdNb25nb0RCIOi/nuaOpeaIkOWKnycpO1xyXG4gICAgcmV0dXJuIHsgY2xpZW50LCBkYiB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdNb25nb0RCIOi/nuaOpemUmeivrzonLCBlcnJvcik7XHJcbiAgICB0aHJvdyBlcnJvcjtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIk1vbmdvQ2xpZW50IiwidXJpIiwicHJvY2VzcyIsImVudiIsIk1PTkdPREJfVVJJIiwib3B0aW9ucyIsInVzZVVuaWZpZWRUb3BvbG9neSIsInVzZU5ld1VybFBhcnNlciIsImNhY2hlZENsaWVudCIsImNhY2hlZERiIiwiY29ubmVjdFRvRGF0YWJhc2UiLCJjbGllbnQiLCJkYiIsIkVycm9yIiwiY29ubmVjdCIsIk1PTkdPREJfREIiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./utils/mongodb.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/teacher/login.js"));
module.exports = __webpack_exports__;

})();