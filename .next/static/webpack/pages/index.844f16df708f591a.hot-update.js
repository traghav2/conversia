"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Avatar.jsx":
/*!*******************************!*\
  !*** ./components/Avatar.jsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Avatar = (param)=>{\n    let { size, user, onClick } = param;\n    var _user, _user1, _user2;\n    const s = size === \"small\" ? 32 : size === \"medium\" ? 36 : size === \"x-large\" ? 56 : size === \"xx-large\" ? 96 : 40;\n    const c = size === \"small\" ? \"w-8 h-8\" : size === \"medium\" ? \"w-9 h-9\" : size === \"large\" ? \"w-10 h-10\" : size === \"x-large\" ? \"w-14 h-14\" : \"w-24 h-24\";\n    const f = size === \"x-large\" ? \"text-2xl\" : size === \"xx-large\" ? \"text-4xl\" : \"text-base\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\".concat(c, \" rounded-full flex items-center justify-center text-base shrink-0 relative\"),\n        style: {\n            backgroundColor: (_user = user) === null || _user === void 0 ? void 0 : _user.color\n        },\n        onClick: onclick,\n        children: ((_user1 = user) === null || _user1 === void 0 ? void 0 : _user1.photoURL) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"\".concat(c, \" overflow-hidden rounded-full\"),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Image, {\n                src: (_user2 = user) === null || _user2 === void 0 ? void 0 : _user2.photoURL,\n                alt: \"User Avatar\",\n                width: s,\n                height: s\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ragha\\\\OneDrive\\\\Documents\\\\ChatAppNext\\\\conversia\\\\components\\\\Avatar.jsx\",\n                lineNumber: 18,\n                columnNumber: 21\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\ragha\\\\OneDrive\\\\Documents\\\\ChatAppNext\\\\conversia\\\\components\\\\Avatar.jsx\",\n            lineNumber: 17,\n            columnNumber: 17\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"\".concat(f, \" uppercase font-semibold\"),\n            children: user.displayName.charAt(0)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\ragha\\\\OneDrive\\\\Documents\\\\ChatAppNext\\\\conversia\\\\components\\\\Avatar.jsx\",\n            lineNumber: 26,\n            columnNumber: 17\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ragha\\\\OneDrive\\\\Documents\\\\ChatAppNext\\\\conversia\\\\components\\\\Avatar.jsx\",\n        lineNumber: 12,\n        columnNumber: 9\n    }, undefined);\n};\n_c = Avatar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Avatar);\nvar _c;\n$RefreshReg$(_c, \"Avatar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0F2YXRhci5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXlCO0FBRXpCLE1BQU1DLFNBQVM7UUFBQyxFQUFFQyxJQUFJLEVBQUVDLElBQUksRUFBRUMsT0FBTyxFQUFFO1FBVURELE9BR3pCQSxRQUdnQkE7SUFkekIsTUFBTUUsSUFBSUgsU0FBUyxVQUFVLEtBQUtBLFNBQVMsV0FBVyxLQUFLQSxTQUFTLFlBQVksS0FBS0EsU0FBUyxhQUFhLEtBQUs7SUFFaEgsTUFBTUksSUFBSUosU0FBUyxVQUFVLFlBQVlBLFNBQVMsV0FBVyxZQUFZQSxTQUFTLFVBQVUsY0FBY0EsU0FBUyxZQUFZLGNBQWM7SUFFN0ksTUFBTUssSUFBSUwsU0FBUyxZQUFZLGFBQWFBLFNBQVMsYUFBYSxhQUFhO0lBRS9FLHFCQUNJLDhEQUFDTTtRQUFJQyxXQUFXLEdBQUssT0FBRkgsR0FBRTtRQUNqQkksT0FBTztZQUFFQyxlQUFlLEdBQUVSLFFBQUFBLGtCQUFBQSw0QkFBQUEsTUFBTVMsS0FBSztRQUFDO1FBQ3RDUixTQUFTUztrQkFFUlYsRUFBQUEsU0FBQUEsa0JBQUFBLDZCQUFBQSxPQUFNVyxRQUFRLGtCQUNYLDhEQUFDTjtZQUFJQyxXQUFXLEdBQUssT0FBRkgsR0FBRTtzQkFDakIsNEVBQUNTO2dCQUNHQyxHQUFHLEdBQUViLFNBQUFBLGtCQUFBQSw2QkFBQUEsT0FBTVcsUUFBUTtnQkFDbkJHLEtBQUs7Z0JBQ0xDLE9BQU9iO2dCQUNQYyxRQUFRZDs7Ozs7Ozs7OztzQ0FJaEIsOERBQUNHO1lBQUlDLFdBQVcsR0FBSyxPQUFGRixHQUFFO3NCQUNoQkosS0FBS2lCLFdBQVcsQ0FBQ0MsTUFBTSxDQUFDOzs7Ozs7Ozs7OztBQUs3QztLQTdCTXBCO0FBK0JOLCtEQUFlQSxNQUFNQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQXZhdGFyLmpzeD81N2I1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IEF2YXRhciA9ICh7IHNpemUsIHVzZXIsIG9uQ2xpY2sgfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHMgPSBzaXplID09PSBcInNtYWxsXCIgPyAzMiA6IHNpemUgPT09IFwibWVkaXVtXCIgPyAzNiA6IHNpemUgPT09IFwieC1sYXJnZVwiID8gNTYgOiBzaXplID09PSBcInh4LWxhcmdlXCIgPyA5NiA6IDQwXHJcblxyXG4gICAgY29uc3QgYyA9IHNpemUgPT09IFwic21hbGxcIiA/IFwidy04IGgtOFwiIDogc2l6ZSA9PT0gXCJtZWRpdW1cIiA/IFwidy05IGgtOVwiIDogc2l6ZSA9PT0gXCJsYXJnZVwiID8gXCJ3LTEwIGgtMTBcIiA6IHNpemUgPT09IFwieC1sYXJnZVwiID8gXCJ3LTE0IGgtMTRcIiA6IFwidy0yNCBoLTI0XCJcclxuXHJcbiAgICBjb25zdCBmID0gc2l6ZSA9PT0gXCJ4LWxhcmdlXCIgPyBcInRleHQtMnhsXCIgOiBzaXplID09PSBcInh4LWxhcmdlXCIgPyBcInRleHQtNHhsXCIgOiBcInRleHQtYmFzZVwiXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7Y30gcm91bmRlZC1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtYmFzZSBzaHJpbmstMCByZWxhdGl2ZWB9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogdXNlcj8uY29sb3IgfX1cclxuICAgICAgICAgICAgb25DbGljaz17b25jbGlja31cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIHt1c2VyPy5waG90b1VSTCA/IChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtjfSBvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC1mdWxsYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17dXNlcj8ucGhvdG9VUkx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17XCJVc2VyIEF2YXRhclwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXtzfSBcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7Zn0gdXBwZXJjYXNlIGZvbnQtc2VtaWJvbGRgfT5cclxuICAgICAgICAgICAgICAgICAgICB7dXNlci5kaXNwbGF5TmFtZS5jaGFyQXQoMCl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEF2YXRhciAgIl0sIm5hbWVzIjpbIlJlYWN0IiwiQXZhdGFyIiwic2l6ZSIsInVzZXIiLCJvbkNsaWNrIiwicyIsImMiLCJmIiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsIm9uY2xpY2siLCJwaG90b1VSTCIsIkltYWdlIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJkaXNwbGF5TmFtZSIsImNoYXJBdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Avatar.jsx\n"));

/***/ })

});