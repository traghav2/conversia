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

/***/ "./components/leftNav.jsx":
/*!********************************!*\
  !*** ./components/leftNav.jsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/bi */ \"./node_modules/react-icons/bi/index.esm.js\");\n/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Avatar */ \"./components/Avatar.jsx\");\n/* harmony import */ var _context_authContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/context/authContext */ \"./context/authContext.js\");\n/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icon */ \"./components/icon.jsx\");\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fi */ \"./node_modules/react-icons/fi/index.esm.js\");\n/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/io5 */ \"./node_modules/react-icons/io5/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst LeftNav = ()=>{\n    _s();\n    const { currentUser, signOut } = (0,_context_authContext__WEBPACK_IMPORTED_MODULE_3__.useAuth)();\n    const [editProfile, setEditProfile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    function handleEditProfile() {\n        setEditProfile(true);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\".concat(editProfile ? \"w-[30%]\" : \"w-[10%]\", \" items-center flex flex-col justify-between py-5 shrink-0 transition-all\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClick: handleEditProfile,\n                className: \"relative group cursor-pointer\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Avatar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        size: \"large\",\n                        user: currentUser\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ragha\\\\OneDrive\\\\Documents\\\\ChatAppNext\\\\conversia\\\\components\\\\leftNav.jsx\",\n                        lineNumber: 21,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full h-full rounded-full bg-black/[0.5] absolute top-0 left-0 justify-center items-center hidden group-hover:flex\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bi__WEBPACK_IMPORTED_MODULE_5__.BiEdit, {\n                            size: 16\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ragha\\\\OneDrive\\\\Documents\\\\ChatAppNext\\\\conversia\\\\components\\\\leftNav.jsx\",\n                            lineNumber: 23,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ragha\\\\OneDrive\\\\Documents\\\\ChatAppNext\\\\conversia\\\\components\\\\leftNav.jsx\",\n                        lineNumber: 22,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ragha\\\\OneDrive\\\\Documents\\\\ChatAppNext\\\\conversia\\\\components\\\\leftNav.jsx\",\n                lineNumber: 20,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex gap-5 flex-col items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icon__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        size: \"x-large\",\n                        className: \"bg-gradient-to-r from-blue-700 to-cyan-500 00 hover:from-blue-600 hover:to-cyan-500\",\n                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fi__WEBPACK_IMPORTED_MODULE_6__.FiPlus, {\n                            size: 24\n                        }, void 0, false, void 0, void 0),\n                        onClick: ()=>{}\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ragha\\\\OneDrive\\\\Documents\\\\ChatAppNext\\\\conversia\\\\components\\\\leftNav.jsx\",\n                        lineNumber: 28,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icon__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        size: \"x-large\",\n                        className: \"hover:bg-gray-700\",\n                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io5__WEBPACK_IMPORTED_MODULE_7__.IoLogOutOutline, {\n                            size: 24\n                        }, void 0, false, void 0, void 0),\n                        onClick: signOut\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ragha\\\\OneDrive\\\\Documents\\\\ChatAppNext\\\\conversia\\\\components\\\\leftNav.jsx\",\n                        lineNumber: 34,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ragha\\\\OneDrive\\\\Documents\\\\ChatAppNext\\\\conversia\\\\components\\\\leftNav.jsx\",\n                lineNumber: 27,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ragha\\\\OneDrive\\\\Documents\\\\ChatAppNext\\\\conversia\\\\components\\\\leftNav.jsx\",\n        lineNumber: 19,\n        columnNumber: 9\n    }, undefined);\n};\n_s(LeftNav, \"hs0HBSU1CVi41/TMwpSSj9byszA=\", false, function() {\n    return [\n        _context_authContext__WEBPACK_IMPORTED_MODULE_3__.useAuth\n    ];\n});\n_c = LeftNav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LeftNav);\nvar _c;\n$RefreshReg$(_c, \"LeftNav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xlZnROYXYuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFDRjtBQUNSO0FBQ2tCO0FBQ3RCO0FBQ1k7QUFDVTtBQUUvQyxNQUFNUSxVQUFVOztJQUVaLE1BQU0sRUFBQ0MsV0FBVyxFQUFFQyxPQUFPLEVBQUMsR0FBR04sNkRBQU9BO0lBQ3RDLE1BQU0sQ0FBQ08sYUFBYUMsZUFBZSxHQUFHWCwrQ0FBUUEsQ0FBQztJQUUvQyxTQUFTWTtRQUNMRCxlQUFlO0lBQ25CO0lBRUEscUJBQ0ksOERBQUNFO1FBQUlDLFdBQVcsR0FBd0MsT0FBckNKLGNBQWMsWUFBWSxXQUFXOzswQkFDcEQsOERBQUNHO2dCQUFJRSxTQUFTSDtnQkFBbUJFLFdBQVU7O2tDQUN2Qyw4REFBQ1osK0NBQU1BO3dCQUFDYyxNQUFLO3dCQUFRQyxNQUFNVDs7Ozs7O2tDQUMzQiw4REFBQ0s7d0JBQUlDLFdBQVU7a0NBQ1gsNEVBQUNiLGtEQUFNQTs0QkFBQ2UsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSXRCLDhEQUFDSDtnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNWLDZDQUFJQTt3QkFDRFksTUFBSzt3QkFDTEYsV0FBVzt3QkFDWEksb0JBQU0sOERBQUNiLGtEQUFNQTs0QkFBQ1csTUFBTzs7d0JBQ3JCRCxTQUFTLEtBQU87Ozs7OztrQ0FFcEIsOERBQUNYLDZDQUFJQTt3QkFDRFksTUFBSzt3QkFDTEYsV0FBVzt3QkFDWEksb0JBQU0sOERBQUNaLDREQUFlQTs0QkFBQ1UsTUFBTzs7d0JBQzlCRCxTQUFTTjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzdCO0dBbENNRjs7UUFFNkJKLHlEQUFPQTs7O0tBRnBDSTtBQW9DTiwrREFBZUEsT0FBT0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2xlZnROYXYuanN4PzEzMTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7QmlFZGl0fSBmcm9tICdyZWFjdC1pY29ucy9iaSdcclxuaW1wb3J0IEF2YXRhciBmcm9tICcuL0F2YXRhcidcclxuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gJ0AvY29udGV4dC9hdXRoQ29udGV4dCdcclxuaW1wb3J0IEljb24gZnJvbSAnLi9pY29uJ1xyXG5pbXBvcnQge0ZpUGx1c30gZnJvbSAncmVhY3QtaWNvbnMvZmknXHJcbmltcG9ydCB7SW9Mb2dPdXRPdXRsaW5lfSBmcm9tICdyZWFjdC1pY29ucy9pbzUnXHJcblxyXG5jb25zdCBMZWZ0TmF2ID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHtjdXJyZW50VXNlciwgc2lnbk91dH0gPSB1c2VBdXRoKCk7XHJcbiAgICBjb25zdCBbZWRpdFByb2ZpbGUsIHNldEVkaXRQcm9maWxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVFZGl0UHJvZmlsZSgpIHtcclxuICAgICAgICBzZXRFZGl0UHJvZmlsZSh0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtlZGl0UHJvZmlsZSA/ICd3LVszMCVdJyA6ICd3LVsxMCVdJyB9IGl0ZW1zLWNlbnRlciBmbGV4IGZsZXgtY29sIGp1c3RpZnktYmV0d2VlbiBweS01IHNocmluay0wIHRyYW5zaXRpb24tYWxsYH0+XHJcbiAgICAgICAgICAgIDxkaXYgb25DbGljaz17aGFuZGxlRWRpdFByb2ZpbGV9IGNsYXNzTmFtZT0ncmVsYXRpdmUgZ3JvdXAgY3Vyc29yLXBvaW50ZXInPlxyXG4gICAgICAgICAgICAgICAgPEF2YXRhciBzaXplPVwibGFyZ2VcIiB1c2VyPXtjdXJyZW50VXNlcn0vPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctZnVsbCBoLWZ1bGwgcm91bmRlZC1mdWxsIGJnLWJsYWNrL1swLjVdIGFic29sdXRlIHRvcC0wIGxlZnQtMCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgaGlkZGVuIGdyb3VwLWhvdmVyOmZsZXgnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCaUVkaXQgc2l6ZT17MTZ9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBnYXAtNSBmbGV4LWNvbCBpdGVtcy1jZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgPEljb24gXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT0neC1sYXJnZSdcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9ICdiZy1ncmFkaWVudC10by1yIGZyb20tYmx1ZS03MDAgdG8tY3lhbi01MDAgMDAgaG92ZXI6ZnJvbS1ibHVlLTYwMCBob3Zlcjp0by1jeWFuLTUwMCdcclxuICAgICAgICAgICAgICAgICAgICBpY29uPXs8RmlQbHVzIHNpemU9IHsyNH0vPn1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7fX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8SWNvbiBcclxuICAgICAgICAgICAgICAgICAgICBzaXplPSd4LWxhcmdlJ1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0gJ2hvdmVyOmJnLWdyYXktNzAwJ1xyXG4gICAgICAgICAgICAgICAgICAgIGljb249ezxJb0xvZ091dE91dGxpbmUgc2l6ZT0gezI0fS8+fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3NpZ25PdXR9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGVmdE5hdiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQmlFZGl0IiwiQXZhdGFyIiwidXNlQXV0aCIsIkljb24iLCJGaVBsdXMiLCJJb0xvZ091dE91dGxpbmUiLCJMZWZ0TmF2IiwiY3VycmVudFVzZXIiLCJzaWduT3V0IiwiZWRpdFByb2ZpbGUiLCJzZXRFZGl0UHJvZmlsZSIsImhhbmRsZUVkaXRQcm9maWxlIiwiZGl2IiwiY2xhc3NOYW1lIiwib25DbGljayIsInNpemUiLCJ1c2VyIiwiaWNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/leftNav.jsx\n"));

/***/ })

});