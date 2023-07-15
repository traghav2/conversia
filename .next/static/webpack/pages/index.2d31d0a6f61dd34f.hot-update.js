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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/bi */ \"./node_modules/react-icons/bi/index.esm.js\");\n/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Avatar */ \"./components/Avatar.jsx\");\n/* harmony import */ var _context_authContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/context/authContext */ \"./context/authContext.js\");\n/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icon */ \"./components/icon.jsx\");\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fi */ \"./node_modules/react-icons/fi/index.esm.js\");\n/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/io5 */ \"./node_modules/react-icons/io5/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst LeftNav = ()=>{\n    _s();\n    const { currentUser, signOut } = (0,_context_authContext__WEBPACK_IMPORTED_MODULE_3__.useAuth)();\n    const [editProfile, setEditProfile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    function handleEditProfile() {\n        setEditProfile(!editProfile);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\".concat(editProfile ? \"w-[300px]\" : \"w-[100px]\", \" items-center flex flex-col justify-between py-5 shrink-0 transition-all\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClick: handleEditProfile,\n                className: \"relative group cursor-pointer\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Avatar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        size: \"large\",\n                        user: currentUser\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ragha\\\\OneDrive\\\\Documents\\\\ChatAppNext\\\\conversia\\\\components\\\\leftNav.jsx\",\n                        lineNumber: 21,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full h-full rounded-full bg-black/[0.5] absolute top-0 left-0 justify-center items-center hidden group-hover:flex\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bi__WEBPACK_IMPORTED_MODULE_5__.BiEdit, {\n                            size: 16\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ragha\\\\OneDrive\\\\Documents\\\\ChatAppNext\\\\conversia\\\\components\\\\leftNav.jsx\",\n                            lineNumber: 23,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ragha\\\\OneDrive\\\\Documents\\\\ChatAppNext\\\\conversia\\\\components\\\\leftNav.jsx\",\n                        lineNumber: 22,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ragha\\\\OneDrive\\\\Documents\\\\ChatAppNext\\\\conversia\\\\components\\\\leftNav.jsx\",\n                lineNumber: 20,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\".concat(editProfile ? \"ml-5 flex-row\" : \"flex gap-5 flex-col items-center}\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icon__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        size: \"x-large\",\n                        className: \"bg-gradient-to-r from-blue-700 to-cyan-500 00 hover:from-blue-600 hover:to-cyan-500\",\n                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fi__WEBPACK_IMPORTED_MODULE_6__.FiPlus, {\n                            size: 24\n                        }, void 0, false, void 0, void 0),\n                        onClick: ()=>{}\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ragha\\\\OneDrive\\\\Documents\\\\ChatAppNext\\\\conversia\\\\components\\\\leftNav.jsx\",\n                        lineNumber: 28,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icon__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        size: \"x-large\",\n                        className: \"hover:bg-gray-700\",\n                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io5__WEBPACK_IMPORTED_MODULE_7__.IoLogOutOutline, {\n                            size: 24\n                        }, void 0, false, void 0, void 0),\n                        onClick: signOut\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ragha\\\\OneDrive\\\\Documents\\\\ChatAppNext\\\\conversia\\\\components\\\\leftNav.jsx\",\n                        lineNumber: 34,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ragha\\\\OneDrive\\\\Documents\\\\ChatAppNext\\\\conversia\\\\components\\\\leftNav.jsx\",\n                lineNumber: 27,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ragha\\\\OneDrive\\\\Documents\\\\ChatAppNext\\\\conversia\\\\components\\\\leftNav.jsx\",\n        lineNumber: 19,\n        columnNumber: 9\n    }, undefined);\n};\n_s(LeftNav, \"hs0HBSU1CVi41/TMwpSSj9byszA=\", false, function() {\n    return [\n        _context_authContext__WEBPACK_IMPORTED_MODULE_3__.useAuth\n    ];\n});\n_c = LeftNav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LeftNav);\nvar _c;\n$RefreshReg$(_c, \"LeftNav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xlZnROYXYuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFDRjtBQUNSO0FBQ2tCO0FBQ3RCO0FBQ1k7QUFDVTtBQUUvQyxNQUFNUSxVQUFVOztJQUVaLE1BQU0sRUFBQ0MsV0FBVyxFQUFFQyxPQUFPLEVBQUMsR0FBR04sNkRBQU9BO0lBQ3RDLE1BQU0sQ0FBQ08sYUFBYUMsZUFBZSxHQUFHWCwrQ0FBUUEsQ0FBQztJQUUvQyxTQUFTWTtRQUNMRCxlQUFlLENBQUNEO0lBQ3BCO0lBRUEscUJBQ0ksOERBQUNHO1FBQUlDLFdBQVcsR0FBNEMsT0FBekNKLGNBQWMsY0FBYyxhQUFhOzswQkFDeEQsOERBQUNHO2dCQUFJRSxTQUFTSDtnQkFBbUJFLFdBQVU7O2tDQUN2Qyw4REFBQ1osK0NBQU1BO3dCQUFDYyxNQUFLO3dCQUFRQyxNQUFNVDs7Ozs7O2tDQUMzQiw4REFBQ0s7d0JBQUlDLFdBQVU7a0NBQ1gsNEVBQUNiLGtEQUFNQTs0QkFBQ2UsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSXRCLDhEQUFDSDtnQkFBSUMsV0FBVyxHQUF1RSxPQUFwRUosY0FBYyxrQkFBa0I7O2tDQUMvQyw4REFBQ04sNkNBQUlBO3dCQUNEWSxNQUFLO3dCQUNMRixXQUFXO3dCQUNYSSxvQkFBTSw4REFBQ2Isa0RBQU1BOzRCQUFDVyxNQUFPOzt3QkFDckJELFNBQVMsS0FBTzs7Ozs7O2tDQUVwQiw4REFBQ1gsNkNBQUlBO3dCQUNEWSxNQUFLO3dCQUNMRixXQUFXO3dCQUNYSSxvQkFBTSw4REFBQ1osNERBQWVBOzRCQUFDVSxNQUFPOzt3QkFDOUJELFNBQVNOOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLN0I7R0FsQ01GOztRQUU2QkoseURBQU9BOzs7S0FGcENJO0FBb0NOLCtEQUFlQSxPQUFPQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbGVmdE5hdi5qc3g/MTMxNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtCaUVkaXR9IGZyb20gJ3JlYWN0LWljb25zL2JpJ1xyXG5pbXBvcnQgQXZhdGFyIGZyb20gJy4vQXZhdGFyJ1xyXG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSAnQC9jb250ZXh0L2F1dGhDb250ZXh0J1xyXG5pbXBvcnQgSWNvbiBmcm9tICcuL2ljb24nXHJcbmltcG9ydCB7RmlQbHVzfSBmcm9tICdyZWFjdC1pY29ucy9maSdcclxuaW1wb3J0IHtJb0xvZ091dE91dGxpbmV9IGZyb20gJ3JlYWN0LWljb25zL2lvNSdcclxuXHJcbmNvbnN0IExlZnROYXYgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3Qge2N1cnJlbnRVc2VyLCBzaWduT3V0fSA9IHVzZUF1dGgoKTtcclxuICAgIGNvbnN0IFtlZGl0UHJvZmlsZSwgc2V0RWRpdFByb2ZpbGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUVkaXRQcm9maWxlKCkge1xyXG4gICAgICAgIHNldEVkaXRQcm9maWxlKCFlZGl0UHJvZmlsZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7ZWRpdFByb2ZpbGUgPyAndy1bMzAwcHhdJyA6ICd3LVsxMDBweF0nIH0gaXRlbXMtY2VudGVyIGZsZXggZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuIHB5LTUgc2hyaW5rLTAgdHJhbnNpdGlvbi1hbGxgfT5cclxuICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXtoYW5kbGVFZGl0UHJvZmlsZX0gY2xhc3NOYW1lPSdyZWxhdGl2ZSBncm91cCBjdXJzb3ItcG9pbnRlcic+XHJcbiAgICAgICAgICAgICAgICA8QXZhdGFyIHNpemU9XCJsYXJnZVwiIHVzZXI9e2N1cnJlbnRVc2VyfS8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndy1mdWxsIGgtZnVsbCByb3VuZGVkLWZ1bGwgYmctYmxhY2svWzAuNV0gYWJzb2x1dGUgdG9wLTAgbGVmdC0wIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBoaWRkZW4gZ3JvdXAtaG92ZXI6ZmxleCc+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJpRWRpdCBzaXplPXsxNn0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtlZGl0UHJvZmlsZSA/ICdtbC01IGZsZXgtcm93JyA6ICdmbGV4IGdhcC01IGZsZXgtY29sIGl0ZW1zLWNlbnRlcn0nfWB9PlxyXG4gICAgICAgICAgICAgICAgPEljb24gXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT0neC1sYXJnZSdcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9ICdiZy1ncmFkaWVudC10by1yIGZyb20tYmx1ZS03MDAgdG8tY3lhbi01MDAgMDAgaG92ZXI6ZnJvbS1ibHVlLTYwMCBob3Zlcjp0by1jeWFuLTUwMCdcclxuICAgICAgICAgICAgICAgICAgICBpY29uPXs8RmlQbHVzIHNpemU9IHsyNH0vPn1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7fX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8SWNvbiBcclxuICAgICAgICAgICAgICAgICAgICBzaXplPSd4LWxhcmdlJ1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0gJ2hvdmVyOmJnLWdyYXktNzAwJ1xyXG4gICAgICAgICAgICAgICAgICAgIGljb249ezxJb0xvZ091dE91dGxpbmUgc2l6ZT0gezI0fS8+fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3NpZ25PdXR9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGVmdE5hdiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQmlFZGl0IiwiQXZhdGFyIiwidXNlQXV0aCIsIkljb24iLCJGaVBsdXMiLCJJb0xvZ091dE91dGxpbmUiLCJMZWZ0TmF2IiwiY3VycmVudFVzZXIiLCJzaWduT3V0IiwiZWRpdFByb2ZpbGUiLCJzZXRFZGl0UHJvZmlsZSIsImhhbmRsZUVkaXRQcm9maWxlIiwiZGl2IiwiY2xhc3NOYW1lIiwib25DbGljayIsInNpemUiLCJ1c2VyIiwiaWNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/leftNav.jsx\n"));

/***/ })

});