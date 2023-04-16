"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./app/page.tsx":
/*!**********************!*\
  !*** ./app/page.tsx ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _component_utils_generateArticles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*!  @component/utils/generateArticles */ \"(app-client)/./utils/generateArticles.tsx\");\n/* harmony import */ var _component_utils_getArticle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*!  @component/utils/getArticle */ \"(app-client)/./utils/getArticle.tsx\");\n/* harmony import */ var react_spinners_ClipLoader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-spinners/ClipLoader */ \"(app-client)/./node_modules/react-spinners/ClipLoader.js\");\n/* harmony import */ var react_spinners_ClipLoader__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_spinners_ClipLoader__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n// const [articles, setArticles] = useState([])\nconst articles = [];\nlet ids = [];\nconst articlesList = async (id)=>{\n    console.log(id);\n    const art = await (0,_component_utils_getArticle__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(id);\n    articles.push(art);\n    console.log(articles);\n};\nfunction Home() {\n    _s();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // const [ids, setIds] = useState([]);\n    const [url, setUrl] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleSubmit = async (evt)=>{\n        evt.preventDefault();\n        setLoading(true);\n        ids = await (0,_component_utils_generateArticles__WEBPACK_IMPORTED_MODULE_2__.generateArticles)(url);\n        ids.map((id)=>{\n            articlesList(id);\n        });\n        setLoading(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"px-6 pt-10 mx-auto\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit,\n                    className: \"mb-6\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: \"block mb-2 text-lg font-medium text-gray-900 dark:text-white\",\n                            children: \"URL\"\n                        }, void 0, false, {\n                            fileName: \"/Users/uliasemenuk/projects/articles/app/page.tsx\",\n                            lineNumber: 52,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: \"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500\",\n                            type: \"text\",\n                            name: \"url\",\n                            placeholder: \"Enter URL to scope titles\",\n                            autoComplete: \"off\",\n                            autoFocus: true,\n                            required: true,\n                            value: url,\n                            onChange: (evt)=>setUrl(evt.target.value)\n                        }, void 0, false, {\n                            fileName: \"/Users/uliasemenuk/projects/articles/app/page.tsx\",\n                            lineNumber: 55,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded hover:bg-blue-700 focus:bg-blue-700\",\n                            type: \"submit\",\n                            children: \"Generate articles\"\n                        }, void 0, false, {\n                            fileName: \"/Users/uliasemenuk/projects/articles/app/page.tsx\",\n                            lineNumber: 67,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/uliasemenuk/projects/articles/app/page.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 7\n                }, this),\n                loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Plese wait. The magic is happening...\"\n                        }, void 0, false, {\n                            fileName: \"/Users/uliasemenuk/projects/articles/app/page.tsx\",\n                            lineNumber: 75,\n                            columnNumber: 24\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_spinners_ClipLoader__WEBPACK_IMPORTED_MODULE_4___default()), {}, void 0, false, {\n                            fileName: \"/Users/uliasemenuk/projects/articles/app/page.tsx\",\n                            lineNumber: 75,\n                            columnNumber: 68\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/uliasemenuk/projects/articles/app/page.tsx\",\n                    lineNumber: 75,\n                    columnNumber: 19\n                }, this),\n                articles.length !== 0 && articles.map((article)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        children: article.artTitle\n                                    }, void 0, false, {\n                                        fileName: \"/Users/uliasemenuk/projects/articles/app/page.tsx\",\n                                        lineNumber: 81,\n                                        columnNumber: 12\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: article.body\n                                    }, void 0, false, {\n                                        fileName: \"/Users/uliasemenuk/projects/articles/app/page.tsx\",\n                                        lineNumber: 82,\n                                        columnNumber: 18\n                                    }, this)\n                                ]\n                            }, article._id, true, {\n                                fileName: \"/Users/uliasemenuk/projects/articles/app/page.tsx\",\n                                lineNumber: 80,\n                                columnNumber: 11\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/uliasemenuk/projects/articles/app/page.tsx\",\n                            lineNumber: 79,\n                            columnNumber: 12\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/uliasemenuk/projects/articles/app/page.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 13\n                    }, this))\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/uliasemenuk/projects/articles/app/page.tsx\",\n            lineNumber: 50,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/uliasemenuk/projects/articles/app/page.tsx\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"PPJNFw+q7aweL53CtH9iMzbXXZE=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL3BhZ2UudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFHdUQ7QUFDZTtBQUNoQjtBQUNIO0FBV25ELCtDQUErQztBQUMvQyxNQUFNSSxXQUFzQixFQUFFO0FBQzlCLElBQUlDLE1BQWdCLEVBQUU7QUFFdEIsTUFBTUMsZUFBZSxPQUFPQyxLQUFlO0lBQ3JDQyxRQUFRQyxHQUFHLENBQUNGO0lBQ1osTUFBTUcsTUFBTSxNQUFNUix1RUFBVUEsQ0FBQ0s7SUFDN0JILFNBQVNPLElBQUksQ0FBQ0Q7SUFDZEYsUUFBUUMsR0FBRyxDQUFDTDtBQUVoQjtBQUVhLFNBQVNRLE9BQU87O0lBQzdCLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHZCwrQ0FBUUEsQ0FBQyxLQUFLO0lBQzVDLHNDQUFzQztJQUN0QyxNQUFNLENBQUNlLEtBQUtDLE9BQU8sR0FBR2hCLCtDQUFRQSxDQUFDO0lBRS9CLE1BQU1pQixlQUFlLE9BQU9DLE1BQW9DO1FBQzlEQSxJQUFJQyxjQUFjO1FBQ2xCTCxXQUFXLElBQUk7UUFDZlQsTUFBTSxNQUFNSixtRkFBZ0JBLENBQUNjO1FBRTdCVixJQUFJZSxHQUFHLENBQUNiLENBQUFBLEtBQU07WUFDWkQsYUFBYUM7UUFDZjtRQUNBTyxXQUFXLEtBQUs7SUFFbEI7SUFHQSxxQkFDRSw4REFBQ087UUFBS0MsV0FBVTtrQkFDZCw0RUFBQ0M7OzhCQUNELDhEQUFDQztvQkFBS0MsVUFBVVI7b0JBQWNLLFdBQVU7O3NDQUN0Qyw4REFBQ0k7NEJBQU1KLFdBQVU7c0NBQStEOzs7Ozs7c0NBR2hGLDhEQUFDSzs0QkFDQ0wsV0FBVTs0QkFDVk0sTUFBSzs0QkFDTEMsTUFBSzs0QkFDTEMsYUFBWTs0QkFDWkMsY0FBYTs0QkFDYkMsU0FBUzs0QkFDVEMsUUFBUTs0QkFDUkMsT0FBT25COzRCQUNQb0IsVUFBVSxDQUFDakIsTUFBUUYsT0FBT0UsSUFBSWtCLE1BQU0sQ0FBQ0YsS0FBSzs7Ozs7O3NDQUc1Qyw4REFBQ0c7NEJBQ0NmLFdBQVU7NEJBQ1ZNLE1BQUs7c0NBRU47Ozs7Ozs7Ozs7OztnQkFJRmYseUJBQVcsOERBQUN5Qjs7c0NBQUksOERBQUNDO3NDQUFFOzs7Ozs7c0NBQXlDLDhEQUFDcEMsa0VBQVVBOzs7Ozs7Ozs7OztnQkFFbkVDLFNBQVNvQyxNQUFNLEtBQUssS0FBTXBDLFNBQVNnQixHQUFHLENBQUMsQ0FBQ3FCLHdCQUN2Qyw4REFBQ0g7a0NBQ0YsNEVBQUNJO3NDQUNGLDRFQUFDQzs7a0RBQ0EsOERBQUNDO2tEQUFJSCxRQUFRSSxRQUFROzs7Ozs7a0RBQ2YsOERBQUNOO2tEQUFHRSxRQUFRSyxJQUFJOzs7Ozs7OytCQUZkTCxRQUFRTSxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWU5QixDQUFDO0dBakV1Qm5DO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wYWdlLnRzeD83NjAzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyBHcmFtbWFybHksIEdyYW1tYXJseUVkaXRvclBsdWdpbiB9IGZyb20gXCJAZ3JhbW1hcmx5L2VkaXRvci1zZGstcmVhY3RcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCBGb3JtRXZlbnQsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZ2VuZXJhdGVBcnRpY2xlcyB9IGZyb20gXCIgQGNvbXBvbmVudC91dGlscy9nZW5lcmF0ZUFydGljbGVzXCI7XG5pbXBvcnQgZ2V0QXJ0aWNsZSBmcm9tIFwiIEBjb21wb25lbnQvdXRpbHMvZ2V0QXJ0aWNsZVwiO1xuaW1wb3J0IENsaXBMb2FkZXIgZnJvbSBcInJlYWN0LXNwaW5uZXJzL0NsaXBMb2FkZXJcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxudHlwZSBBcnREYXRhID0ge1xuICBfaWQ6IHN0cmluZ1xuICBhcnRUaXRsZTogc3RyaW5nXG4gIGJvZHk6IHN0cmluZ1xuICBtZXRhPzogb2JqZWN0XG59O1xuXG5cbi8vIGNvbnN0IFthcnRpY2xlcywgc2V0QXJ0aWNsZXNdID0gdXNlU3RhdGUoW10pXG5jb25zdCBhcnRpY2xlczogQXJ0RGF0YVtdID0gW10gXG5sZXQgaWRzOiBzdHJpbmdbXSA9IFtdXG5cbmNvbnN0IGFydGljbGVzTGlzdCA9IGFzeW5jIChpZDogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhpZCk7XG4gICAgICBjb25zdCBhcnQgPSBhd2FpdCBnZXRBcnRpY2xlKGlkKVxuICAgICAgYXJ0aWNsZXMucHVzaChhcnQpXG4gICAgICBjb25zb2xlLmxvZyhhcnRpY2xlcyk7XG4gICAgICBcbiAgfVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIC8vIGNvbnN0IFtpZHMsIHNldElkc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFt1cmwsIHNldFVybF0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZXZ0OiBGb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50PikgPT4ge1xuICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNldExvYWRpbmcodHJ1ZSlcbiAgICBpZHMgPSBhd2FpdCBnZW5lcmF0ZUFydGljbGVzKHVybCk7XG4gICAgIFxuICAgIGlkcy5tYXAoaWQgPT4ge1xuICAgICAgYXJ0aWNsZXNMaXN0KGlkKVxuICAgIH0pXG4gICAgc2V0TG9hZGluZyhmYWxzZSlcbiBcbiAgfTtcblxuXG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPVwicHgtNiBwdC0xMCBteC1hdXRvXCI+XG4gICAgICA8c2VjdGlvbj5cbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cIm1iLTZcIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIG1iLTIgdGV4dC1sZyBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwIGRhcms6dGV4dC13aGl0ZVwiPlxuICAgICAgICAgIFVSTFxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ncmF5LTUwIGJvcmRlciBib3JkZXItZ3JheS0zMDAgdGV4dC1ncmF5LTkwMCB0ZXh0LXNtIHJvdW5kZWQtbGcgZm9jdXM6cmluZy1ibHVlLTUwMCBmb2N1czpib3JkZXItYmx1ZS01MDAgYmxvY2sgdy1mdWxsIHAtMi41IGRhcms6YmctZ3JheS03MDAgZGFyazpib3JkZXItZ3JheS02MDAgZGFyazpwbGFjZWhvbGRlci1ncmF5LTQwMCBkYXJrOnRleHQtd2hpdGUgZGFyazpmb2N1czpyaW5nLWJsdWUtNTAwIGRhcms6Zm9jdXM6Ym9yZGVyLWJsdWUtNTAwXCJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgbmFtZT1cInVybFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBVUkwgdG8gc2NvcGUgdGl0bGVzXCJcbiAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgIGF1dG9Gb2N1c1xuICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgdmFsdWU9e3VybH1cbiAgICAgICAgICBvbkNoYW5nZT17KGV2dCkgPT4gc2V0VXJsKGV2dC50YXJnZXQudmFsdWUpfVxuICAgICAgICAvPlxuXG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9XCJtdC01IGJnLWJsdWUtNTAwIGhvdmVyOmJnLWJsdWUtNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCBib3JkZXIgYm9yZGVyLWJsdWUtNzAwIHJvdW5kZWQgaG92ZXI6YmctYmx1ZS03MDAgZm9jdXM6YmctYmx1ZS03MDBcIlxuICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgIC8vIGRpc2FibGVkPXtpc0xvYWRpbmd9XG4gICAgICAgID5cbiAgICAgICAgICBHZW5lcmF0ZSBhcnRpY2xlc1xuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICAgIHtsb2FkaW5nICYmIDxkaXY+PHA+UGxlc2Ugd2FpdC4gVGhlIG1hZ2ljIGlzIGhhcHBlbmluZy4uLjwvcD48Q2xpcExvYWRlciAvPjwvZGl2Pn1cbiAgICAgXG4gICAgICAgICAge2FydGljbGVzLmxlbmd0aCAhPT0gMCAmJiAoYXJ0aWNsZXMubWFwKChhcnRpY2xlOiBBcnREYXRhKSA9PiBcbiAgICAgICAgICAgKDxkaXY+XG4gICAgICAgICAgIDx1bD5cbiAgICAgICAgICA8bGkga2V5PXthcnRpY2xlLl9pZH0+XG4gICAgICAgICAgIDxoMj57YXJ0aWNsZS5hcnRUaXRsZX08L2gyPlxuICAgICAgICAgICAgICAgICA8cD57YXJ0aWNsZS5ib2R5fTwvcD5cbiAgICAgICAgICAgIDwvbGk+IFxuICAgICAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PilcbiAgICAgICAgICAgKSl9IFxuICAgICAgICAgXG4gICAgICBcbiAgICAgIFxuICAgICAgey8qIHtpZHMubGVuZ3RoICE9PSAwICYmIDxMaW5rIGhyZWY9J2FydGljbGVzJz5Eb25lISBDbGljayB0byBnZXQgeW91ciBhcnRpY2xlczwvTGluaz59ICovfVxuICAgICBcbiAgICAgIDwvc2VjdGlvbj5cbiAgICA8L21haW4+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJnZW5lcmF0ZUFydGljbGVzIiwiZ2V0QXJ0aWNsZSIsIkNsaXBMb2FkZXIiLCJhcnRpY2xlcyIsImlkcyIsImFydGljbGVzTGlzdCIsImlkIiwiY29uc29sZSIsImxvZyIsImFydCIsInB1c2giLCJIb21lIiwibG9hZGluZyIsInNldExvYWRpbmciLCJ1cmwiLCJzZXRVcmwiLCJoYW5kbGVTdWJtaXQiLCJldnQiLCJwcmV2ZW50RGVmYXVsdCIsIm1hcCIsIm1haW4iLCJjbGFzc05hbWUiLCJzZWN0aW9uIiwiZm9ybSIsIm9uU3VibWl0IiwibGFiZWwiLCJpbnB1dCIsInR5cGUiLCJuYW1lIiwicGxhY2Vob2xkZXIiLCJhdXRvQ29tcGxldGUiLCJhdXRvRm9jdXMiLCJyZXF1aXJlZCIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJidXR0b24iLCJkaXYiLCJwIiwibGVuZ3RoIiwiYXJ0aWNsZSIsInVsIiwibGkiLCJoMiIsImFydFRpdGxlIiwiYm9keSIsIl9pZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./app/page.tsx\n"));

/***/ })

});