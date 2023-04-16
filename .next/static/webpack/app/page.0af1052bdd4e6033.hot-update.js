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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _grammarly_editor_sdk_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @grammarly/editor-sdk-react */ \"(app-client)/./node_modules/@grammarly/editor-sdk-react/lib/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _component_utils_generateArticles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*!  @component/utils/generateArticles */ \"(app-client)/./utils/generateArticles.tsx\");\n/* harmony import */ var _component_utils_getArticle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*!  @component/utils/getArticle */ \"(app-client)/./utils/getArticle.tsx\");\n/* harmony import */ var react_spinners_ClipLoader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-spinners/ClipLoader */ \"(app-client)/./node_modules/react-spinners/ClipLoader.js\");\n/* harmony import */ var react_spinners_ClipLoader__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_spinners_ClipLoader__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [articles, setArticles] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [url, setUrl] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const articlesList = async (id)=>{\n        console.log(id);\n        const art = await (0,_component_utils_getArticle__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(id);\n        setArticles((prevArticles)=>[\n                ...prevArticles,\n                art\n            ]);\n        console.log(articles);\n    };\n    const handleSubmit = async (evt)=>{\n        evt.preventDefault();\n        setLoading(true);\n        const ids = await (0,_component_utils_generateArticles__WEBPACK_IMPORTED_MODULE_2__.generateArticles)(url);\n        ids.forEach((id)=>{\n            articlesList(id);\n        });\n        setLoading(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"px-6 pt-10 mx-auto\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit,\n                    className: \"mb-6\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: \"block mb-2 text-lg font-medium text-gray-900 dark:text-white\",\n                            children: \"URL\"\n                        }, void 0, false, {\n                            fileName: \"/Users/uliasemenuk/projects/articles/app/page.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: \"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500\",\n                            type: \"text\",\n                            name: \"url\",\n                            placeholder: \"Enter URL to scope titles\",\n                            autoComplete: \"off\",\n                            autoFocus: true,\n                            required: true,\n                            value: url,\n                            onChange: (evt)=>setUrl(evt.target.value)\n                        }, void 0, false, {\n                            fileName: \"/Users/uliasemenuk/projects/articles/app/page.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded hover:bg-blue-700 focus:bg-blue-700\",\n                            type: \"submit\",\n                            children: \"Generate articles\"\n                        }, void 0, false, {\n                            fileName: \"/Users/uliasemenuk/projects/articles/app/page.tsx\",\n                            lineNumber: 59,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/uliasemenuk/projects/articles/app/page.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, this),\n                loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center justify-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"mr-2\",\n                            children: \"Please wait. The magic is happening...\"\n                        }, void 0, false, {\n                            fileName: \"/Users/uliasemenuk/projects/articles/app/page.tsx\",\n                            lineNumber: 68,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_spinners_ClipLoader__WEBPACK_IMPORTED_MODULE_4___default()), {}, void 0, false, {\n                            fileName: \"/Users/uliasemenuk/projects/articles/app/page.tsx\",\n                            lineNumber: 69,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/uliasemenuk/projects/articles/app/page.tsx\",\n                    lineNumber: 67,\n                    columnNumber: 11\n                }, this),\n                articles.length !== 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: articles.map((article)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"mb-8\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"text-2xl font-bold mb-2\",\n                                        children: article.artTitle\n                                    }, void 0, false, {\n                                        fileName: \"/Users/uliasemenuk/projects/articles/app/page.tsx\",\n                                        lineNumber: 78,\n                                        columnNumber: 16\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: article.image,\n                                        alt: article.artTitle\n                                    }, void 0, false, {\n                                        fileName: \"/Users/uliasemenuk/projects/articles/app/page.tsx\",\n                                        lineNumber: 79,\n                                        columnNumber: 16\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_grammarly_editor_sdk_react__WEBPACK_IMPORTED_MODULE_5__.GrammarlyEditorPlugin, {\n                                        clientId: \"client_JqTPMhBNkcRiyaAeyiusv4\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"prose dark:prose-dark mb-4\",\n                                            children: article.body\n                                        }, void 0, false, {\n                                            fileName: \"/Users/uliasemenuk/projects/articles/app/page.tsx\",\n                                            lineNumber: 81,\n                                            columnNumber: 16\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/uliasemenuk/projects/articles/app/page.tsx\",\n                                        lineNumber: 80,\n                                        columnNumber: 16\n                                    }, this)\n                                ]\n                            }, article._id, true, {\n                                fileName: \"/Users/uliasemenuk/projects/articles/app/page.tsx\",\n                                lineNumber: 77,\n                                columnNumber: 14\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/uliasemenuk/projects/articles/app/page.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 10\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/uliasemenuk/projects/articles/app/page.tsx\",\n                    lineNumber: 74,\n                    columnNumber: 10\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/uliasemenuk/projects/articles/app/page.tsx\",\n            lineNumber: 42,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/uliasemenuk/projects/articles/app/page.tsx\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"oh48rYfe99YhCurNbV9n/hwu+sg=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL3BhZ2UudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ29FO0FBQ3pCO0FBQzJCO0FBQ2hCO0FBQ0g7QUFXcEMsU0FBU0ssT0FBTzs7SUFDN0IsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdOLCtDQUFRQSxDQUFZLEVBQUU7SUFDdEQsTUFBTSxDQUFDTyxTQUFTQyxXQUFXLEdBQUdSLCtDQUFRQSxDQUFDLEtBQUs7SUFDNUMsTUFBTSxDQUFDUyxLQUFLQyxPQUFPLEdBQUdWLCtDQUFRQSxDQUFDO0lBRS9CLE1BQU1XLGVBQWUsT0FBT0MsS0FBZTtRQUN6Q0MsUUFBUUMsR0FBRyxDQUFDRjtRQUNaLE1BQU1HLE1BQU0sTUFBTWIsdUVBQVVBLENBQUNVO1FBQzdCTixZQUFZLENBQUNVLGVBQWlCO21CQUFJQTtnQkFBY0Q7YUFBSTtRQUNwREYsUUFBUUMsR0FBRyxDQUFDVDtJQUNkO0lBRUEsTUFBTVksZUFBZSxPQUFPQyxNQUFvQztRQUM5REEsSUFBSUMsY0FBYztRQUNsQlgsV0FBVyxJQUFJO1FBQ2YsTUFBTVksTUFBTSxNQUFNbkIsbUZBQWdCQSxDQUFDUTtRQUVuQ1csSUFBSUMsT0FBTyxDQUFDLENBQUNULEtBQWU7WUFDMUJELGFBQWFDO1FBQ2Y7UUFDQUosV0FBVyxLQUFLO0lBQ2xCO0lBRUEscUJBQ0UsOERBQUNjO1FBQUtDLFdBQVU7a0JBQ2QsNEVBQUNDOzs4QkFDQyw4REFBQ0M7b0JBQUtDLFVBQVVUO29CQUFjTSxXQUFVOztzQ0FDdEMsOERBQUNJOzRCQUFNSixXQUFVO3NDQUErRDs7Ozs7O3NDQUdoRiw4REFBQ0s7NEJBQ0NMLFdBQVU7NEJBQ1ZNLE1BQUs7NEJBQ0xDLE1BQUs7NEJBQ0xDLGFBQVk7NEJBQ1pDLGNBQWE7NEJBQ2JDLFNBQVM7NEJBQ1RDLFFBQVE7NEJBQ1JDLE9BQU8xQjs0QkFDUDJCLFVBQVUsQ0FBQ2xCLE1BQVFSLE9BQU9RLElBQUltQixNQUFNLENBQUNGLEtBQUs7Ozs7OztzQ0FHNUMsOERBQUNHOzRCQUNDZixXQUFVOzRCQUNWTSxNQUFLO3NDQUNOOzs7Ozs7Ozs7Ozs7Z0JBSUZ0Qix5QkFDQyw4REFBQ2dDO29CQUFJaEIsV0FBVTs7c0NBQ2IsOERBQUNpQjs0QkFBRWpCLFdBQVU7c0NBQU87Ozs7OztzQ0FDcEIsOERBQUNwQixrRUFBVUE7Ozs7Ozs7Ozs7O2dCQUlkRSxTQUFTb0MsTUFBTSxLQUFLLG1CQUNwQiw4REFBQ0Y7OEJBQ0QsNEVBQUNHO2tDQUNFckMsU0FBU3NDLEdBQUcsQ0FBQyxDQUFDQyx3QkFDYiw4REFBQ0M7Z0NBQXFCdEIsV0FBVTs7a0RBQzlCLDhEQUFDdUI7d0NBQUd2QixXQUFVO2tEQUEyQnFCLFFBQVFHLFFBQVE7Ozs7OztrREFDekQsOERBQUNDO3dDQUFLQyxLQUFLTCxRQUFRTSxLQUFLO3dDQUFFQyxLQUFLUCxRQUFRRyxRQUFROzs7Ozs7a0RBQy9DLDhEQUFDaEQsOEVBQXFCQTt3Q0FBQ3FELFVBQVM7a0RBQ2hDLDRFQUFDWjs0Q0FBRWpCLFdBQVU7c0RBQThCcUIsUUFBUVMsSUFBSTs7Ozs7Ozs7Ozs7OytCQUpoRFQsUUFBUVUsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFjakMsQ0FBQztHQTFFdUJsRDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcGFnZS50c3g/NzYwMyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCB7IEdyYW1tYXJseUVkaXRvclBsdWdpbiB9IGZyb20gXCJAZ3JhbW1hcmx5L2VkaXRvci1zZGstcmVhY3RcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCBGb3JtRXZlbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZ2VuZXJhdGVBcnRpY2xlcyB9IGZyb20gXCIgQGNvbXBvbmVudC91dGlscy9nZW5lcmF0ZUFydGljbGVzXCI7XG5pbXBvcnQgZ2V0QXJ0aWNsZSBmcm9tIFwiIEBjb21wb25lbnQvdXRpbHMvZ2V0QXJ0aWNsZVwiO1xuaW1wb3J0IENsaXBMb2FkZXIgZnJvbSBcInJlYWN0LXNwaW5uZXJzL0NsaXBMb2FkZXJcIjtcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuXG50eXBlIEFydERhdGEgPSB7XG4gIF9pZDogc3RyaW5nXG4gIGFydFRpdGxlOiBzdHJpbmdcbiAgYm9keTogc3RyaW5nXG4gIG1ldGE/OiBvYmplY3RcbiAgaW1hZ2U/OiBzdHJpbmdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFthcnRpY2xlcywgc2V0QXJ0aWNsZXNdID0gdXNlU3RhdGU8QXJ0RGF0YVtdPihbXSk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3VybCwgc2V0VXJsXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGNvbnN0IGFydGljbGVzTGlzdCA9IGFzeW5jIChpZDogc3RyaW5nKSA9PiB7XG4gICAgY29uc29sZS5sb2coaWQpO1xuICAgIGNvbnN0IGFydCA9IGF3YWl0IGdldEFydGljbGUoaWQpO1xuICAgIHNldEFydGljbGVzKChwcmV2QXJ0aWNsZXMpID0+IFsuLi5wcmV2QXJ0aWNsZXMsIGFydF0pO1xuICAgIGNvbnNvbGUubG9nKGFydGljbGVzKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZXZ0OiBGb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50PikgPT4ge1xuICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgY29uc3QgaWRzID0gYXdhaXQgZ2VuZXJhdGVBcnRpY2xlcyh1cmwpO1xuICAgICBcbiAgICBpZHMuZm9yRWFjaCgoaWQ6IHN0cmluZykgPT4ge1xuICAgICAgYXJ0aWNsZXNMaXN0KGlkKTtcbiAgICB9KTtcbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxtYWluIGNsYXNzTmFtZT1cInB4LTYgcHQtMTAgbXgtYXV0b1wiPlxuICAgICAgPHNlY3Rpb24+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cIm1iLTZcIj5cbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgbWItMiB0ZXh0LWxnIGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDAgZGFyazp0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICBVUkxcbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JheS01MCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHRleHQtZ3JheS05MDAgdGV4dC1zbSByb3VuZGVkLWxnIGZvY3VzOnJpbmctYmx1ZS01MDAgZm9jdXM6Ym9yZGVyLWJsdWUtNTAwIGJsb2NrIHctZnVsbCBwLTIuNSBkYXJrOmJnLWdyYXktNzAwIGRhcms6Ym9yZGVyLWdyYXktNjAwIGRhcms6cGxhY2Vob2xkZXItZ3JheS00MDAgZGFyazp0ZXh0LXdoaXRlIGRhcms6Zm9jdXM6cmluZy1ibHVlLTUwMCBkYXJrOmZvY3VzOmJvcmRlci1ibHVlLTUwMFwiXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBuYW1lPVwidXJsXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgVVJMIHRvIHNjb3BlIHRpdGxlc1wiXG4gICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgICAgYXV0b0ZvY3VzXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgdmFsdWU9e3VybH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZ0KSA9PiBzZXRVcmwoZXZ0LnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgLz5cblxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTUgYmctYmx1ZS01MDAgaG92ZXI6YmctYmx1ZS03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IGJvcmRlciBib3JkZXItYmx1ZS03MDAgcm91bmRlZCBob3ZlcjpiZy1ibHVlLTcwMCBmb2N1czpiZy1ibHVlLTcwMFwiXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBHZW5lcmF0ZSBhcnRpY2xlc1xuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgIHtsb2FkaW5nICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtci0yXCI+UGxlYXNlIHdhaXQuIFRoZSBtYWdpYyBpcyBoYXBwZW5pbmcuLi48L3A+XG4gICAgICAgICAgICA8Q2xpcExvYWRlciAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuXG4gICAgICAgIHthcnRpY2xlcy5sZW5ndGggIT09IDAgJiYgKFxuICAgICAgICAgPGRpdj5cbiAgICAgICAgIDx1bD5cbiAgICAgICAgICAge2FydGljbGVzLm1hcCgoYXJ0aWNsZSkgPT4gKFxuICAgICAgICAgICAgIDxsaSBrZXk9e2FydGljbGUuX2lkfSBjbGFzc05hbWU9XCJtYi04XCI+XG4gICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIG1iLTJcIj57YXJ0aWNsZS5hcnRUaXRsZX08L2gyPlxuICAgICAgICAgICAgICAgPGltZyAgc3JjPXthcnRpY2xlLmltYWdlfSBhbHQ9e2FydGljbGUuYXJ0VGl0bGV9IC8+XG4gICAgICAgICAgICAgICA8R3JhbW1hcmx5RWRpdG9yUGx1Z2luIGNsaWVudElkPVwiY2xpZW50X0pxVFBNaEJOa2NSaXlhQWV5aXVzdjRcIiA+XG4gICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcm9zZSBkYXJrOnByb3NlLWRhcmsgbWItNFwiPnthcnRpY2xlLmJvZHl9PC9wPlxuICAgICAgICAgICAgICAgPC9HcmFtbWFybHlFZGl0b3JQbHVnaW4+XG4gICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgKSl9XG4gICAgICAgICA8L3VsPlxuICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvbWFpbj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJHcmFtbWFybHlFZGl0b3JQbHVnaW4iLCJ1c2VTdGF0ZSIsImdlbmVyYXRlQXJ0aWNsZXMiLCJnZXRBcnRpY2xlIiwiQ2xpcExvYWRlciIsIkhvbWUiLCJhcnRpY2xlcyIsInNldEFydGljbGVzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJ1cmwiLCJzZXRVcmwiLCJhcnRpY2xlc0xpc3QiLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJhcnQiLCJwcmV2QXJ0aWNsZXMiLCJoYW5kbGVTdWJtaXQiLCJldnQiLCJwcmV2ZW50RGVmYXVsdCIsImlkcyIsImZvckVhY2giLCJtYWluIiwiY2xhc3NOYW1lIiwic2VjdGlvbiIsImZvcm0iLCJvblN1Ym1pdCIsImxhYmVsIiwiaW5wdXQiLCJ0eXBlIiwibmFtZSIsInBsYWNlaG9sZGVyIiwiYXV0b0NvbXBsZXRlIiwiYXV0b0ZvY3VzIiwicmVxdWlyZWQiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwiYnV0dG9uIiwiZGl2IiwicCIsImxlbmd0aCIsInVsIiwibWFwIiwiYXJ0aWNsZSIsImxpIiwiaDIiLCJhcnRUaXRsZSIsImltZyIsInNyYyIsImltYWdlIiwiYWx0IiwiY2xpZW50SWQiLCJib2R5IiwiX2lkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/page.tsx\n"));

/***/ })

});