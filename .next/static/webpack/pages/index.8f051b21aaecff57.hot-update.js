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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/bi */ \"./node_modules/react-icons/bi/index.esm.js\");\n/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Avatar */ \"./components/Avatar.jsx\");\n/* harmony import */ var _context_authContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/context/authContext */ \"./context/authContext.js\");\n/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icon */ \"./components/icon.jsx\");\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/fi */ \"./node_modules/react-icons/fi/index.esm.js\");\n/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/io5 */ \"./node_modules/react-icons/io5/index.esm.js\");\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/md */ \"./node_modules/react-icons/md/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst LeftNav = ()=>{\n    _s();\n    const { currentUser, signOut } = (0,_context_authContext__WEBPACK_IMPORTED_MODULE_3__.useAuth)();\n    const [editProfile, setEditProfile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const editProfileContainer = ()=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"relative flex flex-col items-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icon__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    size: \"small\",\n                    className: \"absolute top-0 right-5 hover:bg-c2\",\n                    icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io5__WEBPACK_IMPORTED_MODULE_5__.IoClose, {\n                        size: 20\n                    }, void 0, false, void 0, void 0),\n                    onClick: handleEditProfile\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ragha\\\\OneDrive\\\\Documents\\\\ChatAppNext\\\\conversia\\\\components\\\\leftNav.jsx\",\n                    lineNumber: 18,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative group cursor-pointer\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Avatar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            size: \"xx-large\",\n                            user: currentUser\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ragha\\\\OneDrive\\\\Documents\\\\ChatAppNext\\\\conversia\\\\components\\\\leftNav.jsx\",\n                            lineNumber: 26,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-full h-full rounded-full bg-black/[0.5] absolute top-0 left-0 justify-center items-center hidden group-hover:flex\",\n                            children: currentUser.photoURL ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_md__WEBPACK_IMPORTED_MODULE_6__.MdPhotoCamera, {\n                                size: 34\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ragha\\\\OneDrive\\\\Documents\\\\ChatAppNext\\\\conversia\\\\components\\\\leftNav.jsx\",\n                                lineNumber: 32,\n                                columnNumber: 50\n                            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_md__WEBPACK_IMPORTED_MODULE_6__.MdAddAPhoto, {\n                                size: 34\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ragha\\\\OneDrive\\\\Documents\\\\ChatAppNext\\\\conversia\\\\components\\\\leftNav.jsx\",\n                                lineNumber: 32,\n                                columnNumber: 82\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ragha\\\\OneDrive\\\\Documents\\\\ChatAppNext\\\\conversia\\\\components\\\\leftNav.jsx\",\n                            lineNumber: 31,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\ragha\\\\OneDrive\\\\Documents\\\\ChatAppNext\\\\conversia\\\\components\\\\leftNav.jsx\",\n                    lineNumber: 25,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\ragha\\\\OneDrive\\\\Documents\\\\ChatAppNext\\\\conversia\\\\components\\\\leftNav.jsx\",\n            lineNumber: 17,\n            columnNumber: 13\n        }, undefined);\n    };\n    function handleEditProfile() {\n        setEditProfile(!editProfile);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\".concat(editProfile ? \"w-[300px]\" : \"w-[100px] items-center\", \" flex flex-col justify-between py-5 shrink-0 transition-all\"),\n        children: [\n            editProfile ? editProfileContainer() : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClick: handleEditProfile,\n                className: \"relative group cursor-pointer\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Avatar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        size: \"large\",\n                        user: currentUser\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ragha\\\\OneDrive\\\\Documents\\\\ChatAppNext\\\\conversia\\\\components\\\\leftNav.jsx\",\n                        lineNumber: 49,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full h-full rounded-full bg-black/[0.5] absolute top-0 left-0 justify-center items-center hidden group-hover:flex\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bi__WEBPACK_IMPORTED_MODULE_7__.BiEdit, {\n                            size: 16\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ragha\\\\OneDrive\\\\Documents\\\\ChatAppNext\\\\conversia\\\\components\\\\leftNav.jsx\",\n                            lineNumber: 51,\n                            columnNumber: 17\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ragha\\\\OneDrive\\\\Documents\\\\ChatAppNext\\\\conversia\\\\components\\\\leftNav.jsx\",\n                        lineNumber: 50,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ragha\\\\OneDrive\\\\Documents\\\\ChatAppNext\\\\conversia\\\\components\\\\leftNav.jsx\",\n                lineNumber: 48,\n                columnNumber: 21\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex gap-5 \".concat(editProfile ? \"ml-5\" : \"flex-col items-center}\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icon__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        size: \"x-large\",\n                        className: \"bg-gradient-to-r from-blue-700 to-cyan-500 00 hover:from-blue-600 hover:to-cyan-500\",\n                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fi__WEBPACK_IMPORTED_MODULE_8__.FiPlus, {\n                            size: 24\n                        }, void 0, false, void 0, void 0),\n                        onClick: ()=>{}\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ragha\\\\OneDrive\\\\Documents\\\\ChatAppNext\\\\conversia\\\\components\\\\leftNav.jsx\",\n                        lineNumber: 58,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_icon__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        size: \"x-large\",\n                        className: \"hover:bg-gray-700\",\n                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io5__WEBPACK_IMPORTED_MODULE_5__.IoLogOutOutline, {\n                            size: 24\n                        }, void 0, false, void 0, void 0),\n                        onClick: signOut\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ragha\\\\OneDrive\\\\Documents\\\\ChatAppNext\\\\conversia\\\\components\\\\leftNav.jsx\",\n                        lineNumber: 64,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ragha\\\\OneDrive\\\\Documents\\\\ChatAppNext\\\\conversia\\\\components\\\\leftNav.jsx\",\n                lineNumber: 57,\n                columnNumber: 1\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ragha\\\\OneDrive\\\\Documents\\\\ChatAppNext\\\\conversia\\\\components\\\\leftNav.jsx\",\n        lineNumber: 44,\n        columnNumber: 9\n    }, undefined);\n};\n_s(LeftNav, \"P1bjv1SGNW0zxYtxSYWgD41TXqQ=\", false, function() {\n    return [\n        _context_authContext__WEBPACK_IMPORTED_MODULE_3__.useAuth\n    ];\n});\n_c = LeftNav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LeftNav);\nvar _c;\n$RefreshReg$(_c, \"LeftNav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xlZnROYXYuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQXVDO0FBQ0E7QUFDVjtBQUNrQjtBQUN0QjtBQUNjO0FBQ21CO0FBQ0Q7QUFFekQsTUFBTVcsVUFBVTs7SUFFWixNQUFNLEVBQUVDLFdBQVcsRUFBRUMsT0FBTyxFQUFFLEdBQUdULDZEQUFPQTtJQUN4QyxNQUFNLENBQUNVLGFBQWFDLGVBQWUsR0FBR2QsK0NBQVFBLENBQUM7SUFFL0MsTUFBTWUsdUJBQXVCO1FBQ3pCLHFCQUNJLDhEQUFDQztZQUFJQyxXQUFVOzs4QkFDWCw4REFBQ2IsNkNBQUlBO29CQUNEYyxNQUFPO29CQUNQRCxXQUFVO29CQUNWRSxvQkFBTSw4REFBQ2Isb0RBQU9BO3dCQUFDWSxNQUFNOztvQkFDckJFLFNBQVNDOzs7Ozs7OEJBR2IsOERBQUNMO29CQUFJQyxXQUFVOztzQ0FDWCw4REFBQ2YsK0NBQU1BOzRCQUNIZ0IsTUFBSzs0QkFDTEksTUFBTVg7Ozs7OztzQ0FHViw4REFBQ0s7NEJBQUlDLFdBQVU7c0NBQ1ZOLFlBQVlZLFFBQVEsaUJBQUksOERBQUNmLHlEQUFhQTtnQ0FBQ1UsTUFBTTs7Ozs7MERBQVcsOERBQUNULHVEQUFXQTtnQ0FBQ1MsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFLaEc7SUFFQSxTQUFTRztRQUNMUCxlQUFlLENBQUNEO0lBQ3BCO0lBRUEscUJBQ0ksOERBQUNHO1FBQUlDLFdBQVcsR0FBd0QsT0FBckRKLGNBQWMsY0FBYywwQkFBeUI7O1lBQ25FQSxjQUNHRSx1Q0FFSSw4REFBQ0M7Z0JBQUlJLFNBQVlDO2dCQUFvQkosV0FBWTs7a0NBQ3JELDhEQUFDZiwrQ0FBTUE7d0JBQUNnQixNQUFPO3dCQUFRSSxNQUFTWDs7Ozs7O2tDQUNwQyw4REFBQ0s7d0JBQUlDLFdBQVU7a0NBQ1gsNEVBQUNoQixrREFBTUE7NEJBQUNpQixNQUFNOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFNOUIsOERBQUNGO2dCQUFJQyxXQUFXLGNBQThELE9BQWhESixjQUFjLFNBQVM7O2tDQUNqRCw4REFBQ1QsNkNBQUlBO3dCQUNEYyxNQUFLO3dCQUNMRCxXQUFVO3dCQUNWRSxvQkFBTSw4REFBQ2Qsa0RBQU1BOzRCQUFDYSxNQUFNOzt3QkFDcEJFLFNBQVMsS0FBUTs7Ozs7O2tDQUVyQiw4REFBQ2hCLDZDQUFJQTt3QkFDRGMsTUFBSzt3QkFDTEQsV0FBVTt3QkFDVkUsb0JBQU0sOERBQUNaLDREQUFlQTs0QkFBQ1csTUFBTTs7d0JBQzdCRSxTQUFTUjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2pCO0dBL0RNRjs7UUFFK0JQLHlEQUFPQTs7O0tBRnRDTztBQWlFTiwrREFBZUEsT0FBT0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2xlZnROYXYuanN4PzEzMTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IEJpRWRpdCB9IGZyb20gJ3JlYWN0LWljb25zL2JpJ1xyXG5pbXBvcnQgQXZhdGFyIGZyb20gJy4vQXZhdGFyJ1xyXG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSAnQC9jb250ZXh0L2F1dGhDb250ZXh0J1xyXG5pbXBvcnQgSWNvbiBmcm9tICcuL2ljb24nXHJcbmltcG9ydCB7IEZpUGx1cyB9IGZyb20gJ3JlYWN0LWljb25zL2ZpJ1xyXG5pbXBvcnQgeyBJb0Nsb3NlLCBJb0xvZ091dE91dGxpbmUgfSBmcm9tICdyZWFjdC1pY29ucy9pbzUnXHJcbmltcG9ydCB7TWRQaG90b0NhbWVyYSwgTWRBZGRBUGhvdG99IGZyb20gJ3JlYWN0LWljb25zL21kJ1xyXG5cclxuY29uc3QgTGVmdE5hdiA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCB7IGN1cnJlbnRVc2VyLCBzaWduT3V0IH0gPSB1c2VBdXRoKCk7XHJcbiAgICBjb25zdCBbZWRpdFByb2ZpbGUsIHNldEVkaXRQcm9maWxlXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICAgIGNvbnN0IGVkaXRQcm9maWxlQ29udGFpbmVyID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyZWxhdGl2ZSBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgICA8SWNvbiBcclxuICAgICAgICAgICAgICAgICAgICBzaXplID0gJ3NtYWxsJ1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYWJzb2x1dGUgdG9wLTAgcmlnaHQtNSBob3ZlcjpiZy1jMidcclxuICAgICAgICAgICAgICAgICAgICBpY29uPXs8SW9DbG9zZSBzaXplPXsyMH0vPn1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVFZGl0UHJvZmlsZX0gXHJcbiAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyZWxhdGl2ZSBncm91cCBjdXJzb3ItcG9pbnRlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgPEF2YXRhciBcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT0neHgtbGFyZ2UnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXI9e2N1cnJlbnRVc2VyfSBcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndy1mdWxsIGgtZnVsbCByb3VuZGVkLWZ1bGwgYmctYmxhY2svWzAuNV0gYWJzb2x1dGUgdG9wLTAgbGVmdC0wIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBoaWRkZW4gZ3JvdXAtaG92ZXI6ZmxleCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjdXJyZW50VXNlci5waG90b1VSTCA/ICg8TWRQaG90b0NhbWVyYSBzaXplPXszNH0gLz4pIDogKDxNZEFkZEFQaG90byBzaXplPXszNH0gLz4pfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlRWRpdFByb2ZpbGUoKSB7XHJcbiAgICAgICAgc2V0RWRpdFByb2ZpbGUoIWVkaXRQcm9maWxlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtlZGl0UHJvZmlsZSA/ICd3LVszMDBweF0nIDogJ3ctWzEwMHB4XSBpdGVtcy1jZW50ZXInfSBmbGV4IGZsZXgtY29sIGp1c3RpZnktYmV0d2VlbiBweS01IHNocmluay0wIHRyYW5zaXRpb24tYWxsYH0+XHJcbiAgICAgICAgICAgIHtlZGl0UHJvZmlsZSA/IChcclxuICAgICAgICAgICAgICAgIGVkaXRQcm9maWxlQ29udGFpbmVyKClcclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2sgPSB7IGhhbmRsZUVkaXRQcm9maWxlIH0gY2xhc3NOYW1lID0gJ3JlbGF0aXZlIGdyb3VwIGN1cnNvci1wb2ludGVyJz5cclxuICAgICAgICAgICAgICAgIDxBdmF0YXIgc2l6ZSA9IFwibGFyZ2VcIiB1c2VyID0geyBjdXJyZW50VXNlciB9Lz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctZnVsbCBoLWZ1bGwgcm91bmRlZC1mdWxsIGJnLWJsYWNrL1swLjVdIGFic29sdXRlIHRvcC0wIGxlZnQtMCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgaGlkZGVuIGdyb3VwLWhvdmVyOmZsZXgnPlxyXG4gICAgICAgICAgICAgICAgPEJpRWRpdCBzaXplPXsxNn0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbjxkaXYgY2xhc3NOYW1lPXtgZmxleCBnYXAtNSAke2VkaXRQcm9maWxlID8gJ21sLTUnIDogJ2ZsZXgtY29sIGl0ZW1zLWNlbnRlcn0nfWB9PlxyXG4gICAgPEljb25cclxuICAgICAgICBzaXplPSd4LWxhcmdlJ1xyXG4gICAgICAgIGNsYXNzTmFtZT0nYmctZ3JhZGllbnQtdG8tciBmcm9tLWJsdWUtNzAwIHRvLWN5YW4tNTAwIDAwIGhvdmVyOmZyb20tYmx1ZS02MDAgaG92ZXI6dG8tY3lhbi01MDAnXHJcbiAgICAgICAgaWNvbj17PEZpUGx1cyBzaXplPXsyNH0gLz59XHJcbiAgICAgICAgb25DbGljaz17KCkgPT4geyB9fVxyXG4gICAgLz5cclxuICAgIDxJY29uXHJcbiAgICAgICAgc2l6ZT0neC1sYXJnZSdcclxuICAgICAgICBjbGFzc05hbWU9J2hvdmVyOmJnLWdyYXktNzAwJ1xyXG4gICAgICAgIGljb249ezxJb0xvZ091dE91dGxpbmUgc2l6ZT17MjR9IC8+fVxyXG4gICAgICAgIG9uQ2xpY2s9e3NpZ25PdXR9XHJcbiAgICAvPlxyXG48L2Rpdj5cclxuICAgICAgICA8L2RpdiA+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExlZnROYXYiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkJpRWRpdCIsIkF2YXRhciIsInVzZUF1dGgiLCJJY29uIiwiRmlQbHVzIiwiSW9DbG9zZSIsIklvTG9nT3V0T3V0bGluZSIsIk1kUGhvdG9DYW1lcmEiLCJNZEFkZEFQaG90byIsIkxlZnROYXYiLCJjdXJyZW50VXNlciIsInNpZ25PdXQiLCJlZGl0UHJvZmlsZSIsInNldEVkaXRQcm9maWxlIiwiZWRpdFByb2ZpbGVDb250YWluZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJzaXplIiwiaWNvbiIsIm9uQ2xpY2siLCJoYW5kbGVFZGl0UHJvZmlsZSIsInVzZXIiLCJwaG90b1VSTCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/leftNav.jsx\n"));

/***/ })

});