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
exports.id = "pages/api/categories";
exports.ids = ["pages/api/categories"];
exports.modules = {

/***/ "@next-auth/mongodb-adapter":
/*!*********************************************!*\
  !*** external "@next-auth/mongodb-adapter" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("@next-auth/mongodb-adapter");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/google":
/*!*********************************************!*\
  !*** external "next-auth/providers/google" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

/***/ }),

/***/ "sweetalert2":
/*!******************************!*\
  !*** external "sweetalert2" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("sweetalert2");

/***/ }),

/***/ "(api)/./lib/mongodb.js":
/*!************************!*\
  !*** ./lib/mongodb.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n// This approach is taken from https://github.com/vercel/next.js/tree/canary/examples/with-mongodb\n\nif (!process.env.MONGODB_URI) {\n    throw new Error('Invalid/Missing environment variable: \"MONGODB_URI\"');\n}\nconst uri = process.env.MONGODB_URI;\nconst options = {};\nlet client;\nlet clientPromise;\nif (true) {\n    // In development mode, use a global variable so that the value\n    // is preserved across module reloads caused by HMR (Hot Module Replacement).\n    if (!global._mongoClientPromise) {\n        client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, options);\n        global._mongoClientPromise = client.connect();\n    }\n    clientPromise = global._mongoClientPromise;\n} else {}\n// Export a module-scoped MongoClient promise. By doing this in a\n// separate module, the client can be shared across functions.\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvbW9uZ29kYi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxrR0FBa0c7QUFDN0Q7QUFFckMsSUFBSSxDQUFDQyxRQUFRQyxHQUFHLENBQUNDLFdBQVcsRUFBRTtJQUM1QixNQUFNLElBQUlDLE1BQU0sdURBQXNEO0FBQ3hFLENBQUM7QUFFRCxNQUFNQyxNQUFNSixRQUFRQyxHQUFHLENBQUNDLFdBQVc7QUFDbkMsTUFBTUcsVUFBVSxDQUFDO0FBRWpCLElBQUlDO0FBQ0osSUFBSUM7QUFFSixJQUFJUCxJQUF5QixFQUFlO0lBQzFDLCtEQUErRDtJQUMvRCw2RUFBNkU7SUFDN0UsSUFBSSxDQUFDUSxPQUFPQyxtQkFBbUIsRUFBRTtRQUMvQkgsU0FBUyxJQUFJUCxnREFBV0EsQ0FBQ0ssS0FBS0M7UUFDOUJHLE9BQU9DLG1CQUFtQixHQUFHSCxPQUFPSSxPQUFPO0lBQzdDLENBQUM7SUFDREgsZ0JBQWdCQyxPQUFPQyxtQkFBbUI7QUFDNUMsT0FBTyxFQUlOO0FBRUQsaUVBQWlFO0FBQ2pFLDhEQUE4RDtBQUM5RCxpRUFBZUYsYUFBYUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Vjb21tZXJjZS1hZG1pbi8uL2xpYi9tb25nb2RiLmpzP2Q5MjAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhpcyBhcHByb2FjaCBpcyB0YWtlbiBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS92ZXJjZWwvbmV4dC5qcy90cmVlL2NhbmFyeS9leGFtcGxlcy93aXRoLW1vbmdvZGJcclxuaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tICdtb25nb2RiJ1xyXG5cclxuaWYgKCFwcm9jZXNzLmVudi5NT05HT0RCX1VSSSkge1xyXG4gIHRocm93IG5ldyBFcnJvcignSW52YWxpZC9NaXNzaW5nIGVudmlyb25tZW50IHZhcmlhYmxlOiBcIk1PTkdPREJfVVJJXCInKVxyXG59XHJcblxyXG5jb25zdCB1cmkgPSBwcm9jZXNzLmVudi5NT05HT0RCX1VSSVxyXG5jb25zdCBvcHRpb25zID0ge31cclxuXHJcbmxldCBjbGllbnQ7XHJcbmxldCBjbGllbnRQcm9taXNlO1xyXG5cclxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XHJcbiAgLy8gSW4gZGV2ZWxvcG1lbnQgbW9kZSwgdXNlIGEgZ2xvYmFsIHZhcmlhYmxlIHNvIHRoYXQgdGhlIHZhbHVlXHJcbiAgLy8gaXMgcHJlc2VydmVkIGFjcm9zcyBtb2R1bGUgcmVsb2FkcyBjYXVzZWQgYnkgSE1SIChIb3QgTW9kdWxlIFJlcGxhY2VtZW50KS5cclxuICBpZiAoIWdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlKSB7XHJcbiAgICBjbGllbnQgPSBuZXcgTW9uZ29DbGllbnQodXJpLCBvcHRpb25zKVxyXG4gICAgZ2xvYmFsLl9tb25nb0NsaWVudFByb21pc2UgPSBjbGllbnQuY29ubmVjdCgpXHJcbiAgfVxyXG4gIGNsaWVudFByb21pc2UgPSBnbG9iYWwuX21vbmdvQ2xpZW50UHJvbWlzZVxyXG59IGVsc2Uge1xyXG4gIC8vIEluIHByb2R1Y3Rpb24gbW9kZSwgaXQncyBiZXN0IHRvIG5vdCB1c2UgYSBnbG9iYWwgdmFyaWFibGUuXHJcbiAgY2xpZW50ID0gbmV3IE1vbmdvQ2xpZW50KHVyaSwgb3B0aW9ucylcclxuICBjbGllbnRQcm9taXNlID0gY2xpZW50LmNvbm5lY3QoKVxyXG59XHJcblxyXG4vLyBFeHBvcnQgYSBtb2R1bGUtc2NvcGVkIE1vbmdvQ2xpZW50IHByb21pc2UuIEJ5IGRvaW5nIHRoaXMgaW4gYVxyXG4vLyBzZXBhcmF0ZSBtb2R1bGUsIHRoZSBjbGllbnQgY2FuIGJlIHNoYXJlZCBhY3Jvc3MgZnVuY3Rpb25zLlxyXG5leHBvcnQgZGVmYXVsdCBjbGllbnRQcm9taXNlIl0sIm5hbWVzIjpbIk1vbmdvQ2xpZW50IiwicHJvY2VzcyIsImVudiIsIk1PTkdPREJfVVJJIiwiRXJyb3IiLCJ1cmkiLCJvcHRpb25zIiwiY2xpZW50IiwiY2xpZW50UHJvbWlzZSIsImdsb2JhbCIsIl9tb25nb0NsaWVudFByb21pc2UiLCJjb25uZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/mongodb.js\n");

/***/ }),

/***/ "(api)/./lib/mongoose.js":
/*!*************************!*\
  !*** ./lib/mongoose.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"mongooseConnect\": () => (/* binding */ mongooseConnect)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction mongooseConnect() {\n    if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection.readyState) === 1) {\n        return mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection.asPromise();\n    } else {\n        const uri = process.env.MONGODB_URI;\n        return mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(uri);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvbW9uZ29vc2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRXpCLFNBQVNDLGtCQUFrQjtJQUNoQyxJQUFJRCx1RUFBOEIsS0FBSyxHQUFHO1FBQ3hDLE9BQU9BLG9FQUE2QjtJQUN0QyxPQUFPO1FBQ0wsTUFBTUssTUFBTUMsUUFBUUMsR0FBRyxDQUFDQyxXQUFXO1FBQ25DLE9BQU9SLHVEQUFnQixDQUFDSztJQUMxQixDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Vjb21tZXJjZS1hZG1pbi8uL2xpYi9tb25nb29zZS5qcz8xNjNkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtb25nb29zZUNvbm5lY3QoKSB7XHJcbiAgaWYgKG1vbmdvb3NlLmNvbm5lY3Rpb24ucmVhZHlTdGF0ZSA9PT0gMSkge1xyXG4gICAgcmV0dXJuIG1vbmdvb3NlLmNvbm5lY3Rpb24uYXNQcm9taXNlKCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnN0IHVyaSA9IHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJO1xyXG4gICAgcmV0dXJuIG1vbmdvb3NlLmNvbm5lY3QodXJpKTtcclxuICB9XHJcbn0iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJtb25nb29zZUNvbm5lY3QiLCJjb25uZWN0aW9uIiwicmVhZHlTdGF0ZSIsImFzUHJvbWlzZSIsInVyaSIsInByb2Nlc3MiLCJlbnYiLCJNT05HT0RCX1VSSSIsImNvbm5lY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/mongoose.js\n");

/***/ }),

/***/ "(api)/./models/Category.js":
/*!****************************!*\
  !*** ./models/Category.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Category\": () => (/* binding */ Category)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst CategorySchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    name: {\n        type: String,\n        required: true\n    },\n    featuredImg: {\n        type: String\n    },\n    coverImg: {\n        type: String\n    },\n    parent: {\n        type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Types.ObjectId),\n        ref: \"Category\"\n    },\n    description: {\n        type: String\n    },\n    properties: [\n        {\n            type: Object\n        }\n    ]\n});\nconst Category = mongoose__WEBPACK_IMPORTED_MODULE_0__.models?.Category || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)(\"Category\", CategorySchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvQ2F0ZWdvcnkuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTJEO0FBRTNELE1BQU1JLGlCQUFpQixJQUFJRCw0Q0FBTUEsQ0FBQztJQUNoQ0UsTUFBTTtRQUFFQyxNQUFNQztRQUFRQyxVQUFVLElBQUk7SUFBQztJQUNyQ0MsYUFBYTtRQUFFSCxNQUFNQztJQUFPO0lBQzVCRyxVQUFVO1FBQUVKLE1BQU1DO0lBQU87SUFDekJJLFFBQVE7UUFBRUwsTUFBTU4sZ0VBQXVCO1FBQUVjLEtBQUs7SUFBVztJQUN6REMsYUFBYTtRQUFFVCxNQUFNQztJQUFPO0lBQzVCUyxZQUFZO1FBQUM7WUFBRVYsTUFBTVc7UUFBTztLQUFFO0FBQ2hDO0FBRU8sTUFBTUMsV0FBV2hCLDRDQUFNQSxFQUFFZ0IsWUFBWWpCLCtDQUFLQSxDQUFDLFlBQVlHLGdCQUFnQiIsInNvdXJjZXMiOlsid2VicGFjazovL2Vjb21tZXJjZS1hZG1pbi8uL21vZGVscy9DYXRlZ29yeS5qcz80YzgxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSwgeyBtb2RlbCwgbW9kZWxzLCBTY2hlbWEgfSBmcm9tIFwibW9uZ29vc2VcIjtcclxuXHJcbmNvbnN0IENhdGVnb3J5U2NoZW1hID0gbmV3IFNjaGVtYSh7XHJcbiAgbmFtZTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgZmVhdHVyZWRJbWc6IHsgdHlwZTogU3RyaW5nIH0sXHJcbiAgY292ZXJJbWc6IHsgdHlwZTogU3RyaW5nIH0sXHJcbiAgcGFyZW50OiB7IHR5cGU6IG1vbmdvb3NlLlR5cGVzLk9iamVjdElkLCByZWY6ICdDYXRlZ29yeScgfSxcclxuICBkZXNjcmlwdGlvbjogeyB0eXBlOiBTdHJpbmcgfSxcclxuICBwcm9wZXJ0aWVzOiBbeyB0eXBlOiBPYmplY3QgfV1cclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgQ2F0ZWdvcnkgPSBtb2RlbHM/LkNhdGVnb3J5IHx8IG1vZGVsKCdDYXRlZ29yeScsIENhdGVnb3J5U2NoZW1hKTsiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJtb2RlbCIsIm1vZGVscyIsIlNjaGVtYSIsIkNhdGVnb3J5U2NoZW1hIiwibmFtZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsImZlYXR1cmVkSW1nIiwiY292ZXJJbWciLCJwYXJlbnQiLCJUeXBlcyIsIk9iamVjdElkIiwicmVmIiwiZGVzY3JpcHRpb24iLCJwcm9wZXJ0aWVzIiwiT2JqZWN0IiwiQ2F0ZWdvcnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./models/Category.js\n");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authOptions\": () => (/* binding */ authOptions),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"isAdminRequest\": () => (/* binding */ isAdminRequest)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _next_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @next-auth/mongodb-adapter */ \"@next-auth/mongodb-adapter\");\n/* harmony import */ var _next_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_next_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/mongodb */ \"(api)/./lib/mongodb.js\");\n/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ \"sweetalert2\");\n/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst adminEmails = [\n    \"reply.portray@gmail.com\"\n];\nconst authOptions = {\n    secret: process.env.SECRET,\n    providers: [\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: process.env.GOOGLE_ID,\n            clientSecret: process.env.GOOGLE_SECRET\n        })\n    ],\n    adapter: (0,_next_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_2__.MongoDBAdapter)(_lib_mongodb__WEBPACK_IMPORTED_MODULE_3__[\"default\"]),\n    callbacks: {\n        session: ({ session , token , user  })=>{\n            if (adminEmails.includes(session?.user?.email)) {\n                return session;\n            } else {\n                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({\n                    icon: \"error\",\n                    title: \"Oops...\",\n                    text: \"Something went wrong!\"\n                });\n                return false;\n            }\n        }\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions));\nasync function isAdminRequest(req, res) {\n    const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_0__.getServerSession)(req, res, authOptions);\n    console.log(\"session?.user?.email\", session?.user?.email);\n    if (!adminEmails.includes(session?.user?.email)) {\n        res.status(401);\n        res.end();\n        throw \"not an admin\";\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRDtBQUNDO0FBQ0s7QUFDbEI7QUFDWDtBQUMvQixNQUFNTSxjQUFjO0lBQUM7Q0FBMEI7QUFFeEMsTUFBTUMsY0FBYztJQUN6QkMsUUFBUUMsUUFBUUMsR0FBRyxDQUFDQyxNQUFNO0lBQzFCQyxXQUFXO1FBQ1RWLGlFQUFjQSxDQUFDO1lBQ2JXLFVBQVVKLFFBQVFDLEdBQUcsQ0FBQ0ksU0FBUztZQUMvQkMsY0FBY04sUUFBUUMsR0FBRyxDQUFDTSxhQUFhO1FBQ3pDO0tBQ0Q7SUFDREMsU0FBU2QsMEVBQWNBLENBQUNDLG9EQUFhQTtJQUNyQ2MsV0FBVztRQUNUQyxTQUFTLENBQUMsRUFBRUEsUUFBTyxFQUFFQyxNQUFLLEVBQUVDLEtBQUksRUFBRSxHQUFLO1lBQ3JDLElBQUlmLFlBQVlnQixRQUFRLENBQUNILFNBQVNFLE1BQU1FLFFBQVE7Z0JBQzlDLE9BQU9KO1lBQ1QsT0FBTztnQkFDTGQsdURBQVMsQ0FBQztvQkFDUm9CLE1BQU07b0JBQ05DLE9BQU87b0JBQ1BDLE1BQU07Z0JBQ1I7Z0JBQ0EsT0FBTyxLQUFLO1lBQ2QsQ0FBQztRQUNIO0lBQ0Y7QUFDRixFQUFFO0FBRUYsaUVBQWUzQixnREFBUUEsQ0FBQ08sWUFBWUEsRUFBQztBQUU5QixlQUFlcUIsZUFBZUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDN0MsTUFBTVgsVUFBVSxNQUFNbEIsMkRBQWdCQSxDQUFDNEIsS0FBS0MsS0FBS3ZCO0lBQ2pEd0IsUUFBUUMsR0FBRyxDQUFDLHdCQUF3QmIsU0FBU0UsTUFBTUU7SUFDbkQsSUFBSSxDQUFDakIsWUFBWWdCLFFBQVEsQ0FBQ0gsU0FBU0UsTUFBTUUsUUFBUTtRQUMvQ08sSUFBSUcsTUFBTSxDQUFDO1FBQ1hILElBQUlJLEdBQUc7UUFDUCxNQUFNLGVBQWU7SUFDdkIsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lY29tbWVyY2UtYWRtaW4vLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzPzUyN2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoLCB7IGdldFNlcnZlclNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgnXHJcbmltcG9ydCBHb29nbGVQcm92aWRlciBmcm9tICduZXh0LWF1dGgvcHJvdmlkZXJzL2dvb2dsZSdcclxuaW1wb3J0IHsgTW9uZ29EQkFkYXB0ZXIgfSBmcm9tIFwiQG5leHQtYXV0aC9tb25nb2RiLWFkYXB0ZXJcIjtcclxuaW1wb3J0IGNsaWVudFByb21pc2UgZnJvbSBcIkAvbGliL21vbmdvZGJcIjtcclxuaW1wb3J0IFN3YWwgZnJvbSAnc3dlZXRhbGVydDInO1xyXG5jb25zdCBhZG1pbkVtYWlscyA9IFsncmVwbHkucG9ydHJheUBnbWFpbC5jb20nXTtcclxuXHJcbmV4cG9ydCBjb25zdCBhdXRoT3B0aW9ucyA9IHtcclxuICBzZWNyZXQ6IHByb2Nlc3MuZW52LlNFQ1JFVCxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIEdvb2dsZVByb3ZpZGVyKHtcclxuICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdPT0dMRV9JRCxcclxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HT09HTEVfU0VDUkVUXHJcbiAgICB9KSxcclxuICBdLFxyXG4gIGFkYXB0ZXI6IE1vbmdvREJBZGFwdGVyKGNsaWVudFByb21pc2UpLFxyXG4gIGNhbGxiYWNrczoge1xyXG4gICAgc2Vzc2lvbjogKHsgc2Vzc2lvbiwgdG9rZW4sIHVzZXIgfSkgPT4ge1xyXG4gICAgICBpZiAoYWRtaW5FbWFpbHMuaW5jbHVkZXMoc2Vzc2lvbj8udXNlcj8uZW1haWwpKSB7XHJcbiAgICAgICAgcmV0dXJuIHNlc3Npb247XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgU3dhbC5maXJlKHtcclxuICAgICAgICAgIGljb246IFwiZXJyb3JcIixcclxuICAgICAgICAgIHRpdGxlOiBcIk9vcHMuLi5cIixcclxuICAgICAgICAgIHRleHQ6IFwiU29tZXRoaW5nIHdlbnQgd3JvbmchXCIsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aChhdXRoT3B0aW9ucyk7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaXNBZG1pblJlcXVlc3QocmVxLCByZXMpIHtcclxuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2VydmVyU2Vzc2lvbihyZXEsIHJlcywgYXV0aE9wdGlvbnMpO1xyXG4gIGNvbnNvbGUubG9nKFwic2Vzc2lvbj8udXNlcj8uZW1haWxcIiwgc2Vzc2lvbj8udXNlcj8uZW1haWwpXHJcbiAgaWYgKCFhZG1pbkVtYWlscy5pbmNsdWRlcyhzZXNzaW9uPy51c2VyPy5lbWFpbCkpIHtcclxuICAgIHJlcy5zdGF0dXMoNDAxKTtcclxuICAgIHJlcy5lbmQoKTtcclxuICAgIHRocm93ICdub3QgYW4gYWRtaW4nO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJnZXRTZXJ2ZXJTZXNzaW9uIiwiR29vZ2xlUHJvdmlkZXIiLCJNb25nb0RCQWRhcHRlciIsImNsaWVudFByb21pc2UiLCJTd2FsIiwiYWRtaW5FbWFpbHMiLCJhdXRoT3B0aW9ucyIsInNlY3JldCIsInByb2Nlc3MiLCJlbnYiLCJTRUNSRVQiLCJwcm92aWRlcnMiLCJjbGllbnRJZCIsIkdPT0dMRV9JRCIsImNsaWVudFNlY3JldCIsIkdPT0dMRV9TRUNSRVQiLCJhZGFwdGVyIiwiY2FsbGJhY2tzIiwic2Vzc2lvbiIsInRva2VuIiwidXNlciIsImluY2x1ZGVzIiwiZW1haWwiLCJmaXJlIiwiaWNvbiIsInRpdGxlIiwidGV4dCIsImlzQWRtaW5SZXF1ZXN0IiwicmVxIiwicmVzIiwiY29uc29sZSIsImxvZyIsInN0YXR1cyIsImVuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

/***/ }),

/***/ "(api)/./pages/api/categories.js":
/*!*********************************!*\
  !*** ./pages/api/categories.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handle)\n/* harmony export */ });\n/* harmony import */ var _models_Category__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/models/Category */ \"(api)/./models/Category.js\");\n/* harmony import */ var _lib_mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/mongoose */ \"(api)/./lib/mongoose.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _pages_api_auth_nextauth___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/pages/api/auth/[...nextauth] */ \"(api)/./pages/api/auth/[...nextauth].js\");\n\n\n\n\nasync function handle(req, res) {\n    const { method  } = req;\n    await (0,_lib_mongoose__WEBPACK_IMPORTED_MODULE_1__.mongooseConnect)();\n    // await isAdminRequest(req, res);\n    if (method === \"GET\") {\n        let result = await _models_Category__WEBPACK_IMPORTED_MODULE_0__.Category.find();\n        res.json(result);\n    }\n    if (method === \"POST\") {\n        const { name , parentCategory , properties , featuredImg , coverImg  } = req.body;\n        console.log(\"\\uD83D\\uDE80 ~ handle ~ req.body:\", req.body);\n        const categoryDoc = await _models_Category__WEBPACK_IMPORTED_MODULE_0__.Category.create({\n            name,\n            featuredImg: featuredImg || \"\",\n            coverImg: coverImg || \"\",\n            parent: parentCategory || undefined,\n            properties\n        });\n        res.json(categoryDoc);\n    }\n    if (method === \"PUT\") {\n        const { name , parentCategory , properties , featuredImg , coverImg , _id  } = req.body;\n        const categoryDoc = await _models_Category__WEBPACK_IMPORTED_MODULE_0__.Category.updateOne({\n            _id\n        }, {\n            name,\n            parent: parentCategory || undefined,\n            properties,\n            featuredImg: featuredImg || \"\",\n            coverImg: coverImg || \"\"\n        });\n        res.json(categoryDoc);\n    }\n    if (method === \"DELETE\") {\n        const { _id  } = req.query;\n        await _models_Category__WEBPACK_IMPORTED_MODULE_0__.Category.deleteOne({\n            _id\n        });\n        res.json(\"ok\");\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY2F0ZWdvcmllcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBNkM7QUFDSTtBQUNKO0FBQ2dDO0FBRTlELGVBQWVLLE9BQU9DLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzdDLE1BQU0sRUFBRUMsT0FBTSxFQUFFLEdBQUdGO0lBQ25CLE1BQU1MLDhEQUFlQTtJQUNyQixrQ0FBa0M7SUFFbEMsSUFBSU8sV0FBVyxPQUFPO1FBQ3BCLElBQUlDLFNBQVMsTUFBTVQsMkRBQWE7UUFDaENPLElBQUlJLElBQUksQ0FBQ0Y7SUFDWCxDQUFDO0lBRUQsSUFBSUQsV0FBVyxRQUFRO1FBQ3JCLE1BQU0sRUFBRUksS0FBSSxFQUFFQyxlQUFjLEVBQUVDLFdBQVUsRUFBRUMsWUFBVyxFQUFFQyxTQUFRLEVBQUUsR0FBR1YsSUFBSVcsSUFBSTtRQUM1RUMsUUFBUUMsR0FBRyxDQUFDLHFDQUEyQmIsSUFBSVcsSUFBSTtRQUMvQyxNQUFNRyxjQUFjLE1BQU1wQiw2REFBZSxDQUFDO1lBQ3hDWTtZQUNBRyxhQUFhQSxlQUFlO1lBQzVCQyxVQUFVQSxZQUFZO1lBQ3RCTSxRQUFRVCxrQkFBa0JVO1lBQzFCVDtRQUNGO1FBQ0FQLElBQUlJLElBQUksQ0FBQ1M7SUFDWCxDQUFDO0lBRUQsSUFBSVosV0FBVyxPQUFPO1FBQ3BCLE1BQU0sRUFBRUksS0FBSSxFQUFFQyxlQUFjLEVBQUVDLFdBQVUsRUFBRUMsWUFBVyxFQUFFQyxTQUFRLEVBQUVRLElBQUcsRUFBRSxHQUFHbEIsSUFBSVcsSUFBSTtRQUNqRixNQUFNRyxjQUFjLE1BQU1wQixnRUFBa0IsQ0FBQztZQUFFd0I7UUFBSSxHQUFHO1lBQ3BEWjtZQUNBVSxRQUFRVCxrQkFBa0JVO1lBQzFCVDtZQUNBQyxhQUFhQSxlQUFlO1lBQzVCQyxVQUFVQSxZQUFZO1FBQ3hCO1FBQ0FULElBQUlJLElBQUksQ0FBQ1M7SUFDWCxDQUFDO0lBRUQsSUFBSVosV0FBVyxVQUFVO1FBQ3ZCLE1BQU0sRUFBRWdCLElBQUcsRUFBRSxHQUFHbEIsSUFBSW9CLEtBQUs7UUFDekIsTUFBTTFCLGdFQUFrQixDQUFDO1lBQUV3QjtRQUFJO1FBQy9CakIsSUFBSUksSUFBSSxDQUFDO0lBQ1gsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lY29tbWVyY2UtYWRtaW4vLi9wYWdlcy9hcGkvY2F0ZWdvcmllcy5qcz82OGQ4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhdGVnb3J5IH0gZnJvbSBcIkAvbW9kZWxzL0NhdGVnb3J5XCI7XHJcbmltcG9ydCB7IG1vbmdvb3NlQ29ubmVjdCB9IGZyb20gXCJAL2xpYi9tb25nb29zZVwiO1xyXG5pbXBvcnQgeyBnZXRTZXJ2ZXJTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aFwiO1xyXG5pbXBvcnQgeyBhdXRoT3B0aW9ucywgaXNBZG1pblJlcXVlc3QgfSBmcm9tIFwiQC9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGUocmVxLCByZXMpIHtcclxuICBjb25zdCB7IG1ldGhvZCB9ID0gcmVxO1xyXG4gIGF3YWl0IG1vbmdvb3NlQ29ubmVjdCgpO1xyXG4gIC8vIGF3YWl0IGlzQWRtaW5SZXF1ZXN0KHJlcSwgcmVzKTtcclxuXHJcbiAgaWYgKG1ldGhvZCA9PT0gJ0dFVCcpIHtcclxuICAgIGxldCByZXN1bHQgPSBhd2FpdCBDYXRlZ29yeS5maW5kKClcclxuICAgIHJlcy5qc29uKHJlc3VsdCk7XHJcbiAgfVxyXG5cclxuICBpZiAobWV0aG9kID09PSAnUE9TVCcpIHtcclxuICAgIGNvbnN0IHsgbmFtZSwgcGFyZW50Q2F0ZWdvcnksIHByb3BlcnRpZXMsIGZlYXR1cmVkSW1nLCBjb3ZlckltZyB9ID0gcmVxLmJvZHk7XHJcbiAgICBjb25zb2xlLmxvZyhcIvCfmoAgfiBoYW5kbGUgfiByZXEuYm9keTpcIiwgcmVxLmJvZHkpXHJcbiAgICBjb25zdCBjYXRlZ29yeURvYyA9IGF3YWl0IENhdGVnb3J5LmNyZWF0ZSh7XHJcbiAgICAgIG5hbWUsXHJcbiAgICAgIGZlYXR1cmVkSW1nOiBmZWF0dXJlZEltZyB8fCBcIlwiLFxyXG4gICAgICBjb3ZlckltZzogY292ZXJJbWcgfHwgXCJcIixcclxuICAgICAgcGFyZW50OiBwYXJlbnRDYXRlZ29yeSB8fCB1bmRlZmluZWQsXHJcbiAgICAgIHByb3BlcnRpZXMsXHJcbiAgICB9KTtcclxuICAgIHJlcy5qc29uKGNhdGVnb3J5RG9jKTtcclxuICB9XHJcblxyXG4gIGlmIChtZXRob2QgPT09ICdQVVQnKSB7XHJcbiAgICBjb25zdCB7IG5hbWUsIHBhcmVudENhdGVnb3J5LCBwcm9wZXJ0aWVzLCBmZWF0dXJlZEltZywgY292ZXJJbWcsIF9pZCB9ID0gcmVxLmJvZHk7XHJcbiAgICBjb25zdCBjYXRlZ29yeURvYyA9IGF3YWl0IENhdGVnb3J5LnVwZGF0ZU9uZSh7IF9pZCB9LCB7XHJcbiAgICAgIG5hbWUsXHJcbiAgICAgIHBhcmVudDogcGFyZW50Q2F0ZWdvcnkgfHwgdW5kZWZpbmVkLFxyXG4gICAgICBwcm9wZXJ0aWVzLFxyXG4gICAgICBmZWF0dXJlZEltZzogZmVhdHVyZWRJbWcgfHwgXCJcIixcclxuICAgICAgY292ZXJJbWc6IGNvdmVySW1nIHx8IFwiXCJcclxuICAgIH0pO1xyXG4gICAgcmVzLmpzb24oY2F0ZWdvcnlEb2MpO1xyXG4gIH1cclxuXHJcbiAgaWYgKG1ldGhvZCA9PT0gJ0RFTEVURScpIHtcclxuICAgIGNvbnN0IHsgX2lkIH0gPSByZXEucXVlcnk7XHJcbiAgICBhd2FpdCBDYXRlZ29yeS5kZWxldGVPbmUoeyBfaWQgfSk7XHJcbiAgICByZXMuanNvbignb2snKTtcclxuICB9XHJcbn0iXSwibmFtZXMiOlsiQ2F0ZWdvcnkiLCJtb25nb29zZUNvbm5lY3QiLCJnZXRTZXJ2ZXJTZXNzaW9uIiwiYXV0aE9wdGlvbnMiLCJpc0FkbWluUmVxdWVzdCIsImhhbmRsZSIsInJlcSIsInJlcyIsIm1ldGhvZCIsInJlc3VsdCIsImZpbmQiLCJqc29uIiwibmFtZSIsInBhcmVudENhdGVnb3J5IiwicHJvcGVydGllcyIsImZlYXR1cmVkSW1nIiwiY292ZXJJbWciLCJib2R5IiwiY29uc29sZSIsImxvZyIsImNhdGVnb3J5RG9jIiwiY3JlYXRlIiwicGFyZW50IiwidW5kZWZpbmVkIiwiX2lkIiwidXBkYXRlT25lIiwicXVlcnkiLCJkZWxldGVPbmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/categories.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/categories.js"));
module.exports = __webpack_exports__;

})();