/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Firebase/FirebaseEvents.js":
/*!****************************************!*\
  !*** ./src/Firebase/FirebaseEvents.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _on_dispatchOnEvent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../on/dispatchOnEvent */ \"./src/on/dispatchOnEvent.js\");\n\r\n\r\nlet firebase;\r\n\r\nclass FirebaseEvents {\r\n\r\n    constructor(){\r\n        if(typeof firebase === 'undefined')\r\n            firebase = new Firebase(window.FIREBASE_ROOT + window.campaign_storage_path + \"/\");\r\n    }\r\n\r\n    initChatEvents(){\r\n        let firebaseChat = firebase.child(\"chat\");\r\n        let firebaseChatListener = firebaseChat.limitToLast(100);\r\n        firebaseChatListener.on('child_added', event => {\r\n            Object(_on_dispatchOnEvent__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('chat:message', event.val());\r\n        });\r\n    }\r\n\r\n    sendToChat(){\r\n        let message = {\r\n            avatar: \"/users/avatar/161928/30\",\r\n            content: \"/r 3d6\",\r\n            inlinerolls: [],\r\n            playerid: \"-LqNI8VgrmhbnpFUiH-8\",\r\n            type: \"general\",\r\n            who: \"Аслан (GM)\",\r\n        };\r\n        let firebaseChat = firebase.child(\"chat\");\r\n        let chatKey = firebaseChat.push().key();\r\n        firebaseChat.child(chatKey).setWithPriority(message, Firebase.ServerValue.TIMESTAMP)\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (FirebaseEvents);\n\n//# sourceURL=webpack:///./src/Firebase/FirebaseEvents.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Firebase_FirebaseEvents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Firebase/FirebaseEvents */ \"./src/Firebase/FirebaseEvents.js\");\n//require global functions\r\n__webpack_require__(/*! ./chat/sendChat.js */ \"./src/chat/sendChat.js\");\r\n\r\n\r\n\r\nfunction start(){\r\n    console.log(\"AVAILABLE!\");\r\n    let firebaseEvents = new _Firebase_FirebaseEvents__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n    firebaseEvents.initChatEvents();\r\n    firebaseEvents.sendToChat();\r\n}\r\nconsole.log(\"START!\");\r\nfunction whenAvailable(name, callback) {\r\n    var interval = 10; // ms\r\n    window.setTimeout(function() {\r\n        if (window[name]) {\r\n            callback(window[name]);\r\n        } else {\r\n            window.setTimeout(arguments.callee, interval);\r\n        }\r\n    }, interval);\r\n}\r\n\r\nwhenAvailable('Firebase', start);\r\n\r\n//players\r\n//characters\r\n///char-attribs/char/-LqNL6ygV93sW5RdFI7C/-M5HluzGebUmm730-7id\r\n\r\n// Backbone.sync = function(e, n, s) {\r\n//     if (n.nofirebase)\r\n//         return o(e, n, s);\r\n//     if (r(),\r\n//     typeof Firebase === t)\r\n//         return !1;\r\n//     s || (s = {});\r\n//     try {\r\n//         var l = a(n, \"url\")\r\n//     } catch (d) {\r\n//         return void console.log(\"No url, probably already deleted.\")\r\n//     }\r\n//     var c = new Firebase(i + l)\r\n//       , u = !0;\r\n//     switch (n.collection === t && (u = !1),\r\n//     e) {\r\n//     case \"read\":\r\n//         c.once(\"value\", function(e) {\r\n//             e = _.toArray(e.val()),\r\n//             s.success && s.success(e, \"success\", {})\r\n//         });\r\n//         break;\r\n//     case \"create\":\r\n//     case \"update\":\r\n//         (new Date).getTime();\r\n//         c.once(\"value\", function(e) {\r\n//             var i = e.val();\r\n//             null == i && (i = {},\r\n//             n.persisted = !0);\r\n//             var o = n.toJSON()\r\n//               , r = {};\r\n//             for (var a in o)\r\n//                 if (i[a] === t)\r\n//                     o[a] !== n.defaults[a] && (r[a] = o[a]);\r\n//                 else if (window.is_gm && u && o[a] === n.defaults[a])\r\n//                     r[a] = null;\r\n//                 else if (i[a] !== o[a]) {\r\n//                     if (\"object\" == typeof o[a] && _.isEqual(i[a], o[a]))\r\n//                         continue;\r\n//                     r[a] = o[a]\r\n//                 }\r\n//             _.keys(r).length > 0 && (n._ignore_remote = !0,\r\n//             c.update(r, function(e) {\r\n//                 !e && s.success ? s.success() : e && s.error && s.error()\r\n//             }),\r\n//             n._ignore_remote = !1)\r\n//         }, function() {\r\n//             \"tutorial\" !== window.GNTKN ? (console.log(\"ERROR: UNABLE TO READ OR SET DATA\"),\r\n//             alert(\"Unable to read or set data from server. There may be a problem with your session. Try reloading the page to fix this issue. If you are persistently receiving this error, please contact your ISP for support.\")) : s.success && s.success()\r\n//         });\r\n//         break;\r\n//     case \"delete\":\r\n//         c.remove(function(e) {\r\n//             !e && s.success ? s.success() : e && s.error && s.error()\r\n//         })\r\n//     }\r\n//     return c\r\n// }\r\n// ;\r\n// var a = function(e, t) {\r\n//     return e && e[t] ? _.isFunction(e[t]) ? e[t]() : e[t] : null\r\n// };\r\n// e.BackboneFirebase = n\r\n// }(\"undefined\" != typeof exports ? exports : this),\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/chat/sendChat.js":
/*!******************************!*\
  !*** ./src/chat/sendChat.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/chat/sendChat.js?");

/***/ }),

/***/ "./src/on/dispatchOnEvent.js":
/*!***********************************!*\
  !*** ./src/on/dispatchOnEvent.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nlet events = {};\r\nfunction dispatchOnEvent(eventName, ...args){\r\n    if(Array.isArray(events[eventName])){\r\n        for(let callback of events[eventName]){\r\n            if(typeof callback === 'function'){\r\n                callback(...args);\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\nfunction on(eventName, callback){\r\n    if(!Array.isArray(events[eventName]))\r\n        events[eventName] = [];\r\n    events[eventName].push(callback);\r\n}\r\n\r\nwindow.on = on;\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (dispatchOnEvent);\n\n//# sourceURL=webpack:///./src/on/dispatchOnEvent.js?");

/***/ })

/******/ });