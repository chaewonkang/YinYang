webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Clock.js":
/*!*****************************!*\
  !*** ./components/Clock.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_SVG__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/SVG */ \"./utils/SVG.js\");\n\n\n\nvar _jsxFileName = \"/Users/chaewonkang/Work/YinYang/components/Clock.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar Clock = function Clock() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(new Date()),\n      time = _useState[0],\n      setTime = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    window.setInterval(function () {\n      setTime(new Date());\n    }, 1000);\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_utils_SVG__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      name: \"clock\",\n      height: \"91\",\n      color: \"\",\n      viewBox: \"0 0 152 91\",\n      g: true,\n      transform: \"translate(-1016.7 -141.722)\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"jsx-291807925\" + \" \" + \"clock\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        style: {\n          transform: \"rotateZ(\".concat(time.getHours() * 30, \"deg)\")\n        },\n        className: \"jsx-291807925\" + \" \" + \"hour_hand\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        style: {\n          transform: \"rotateZ(\".concat(time.getMinutes() * 6, \"deg)\")\n        },\n        className: \"jsx-291807925\" + \" \" + \"min_hand\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        style: {\n          transform: \"rotateZ(\".concat(time.getSeconds() * 6, \"deg)\")\n        },\n        className: \"jsx-291807925\" + \" \" + \"sec_hand\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        className: \"jsx-291807925\" + \" \" + \"twelve\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        className: \"jsx-291807925\" + \" \" + \"one\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        className: \"jsx-291807925\" + \" \" + \"two\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        className: \"jsx-291807925\" + \" \" + \"three\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        className: \"jsx-291807925\" + \" \" + \"four\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        className: \"jsx-291807925\" + \" \" + \"five\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        className: \"jsx-291807925\" + \" \" + \"six\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        className: \"jsx-291807925\" + \" \" + \"seven\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        className: \"jsx-291807925\" + \" \" + \"eight\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        className: \"jsx-291807925\" + \" \" + \"nine\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        className: \"jsx-291807925\" + \" \" + \"ten\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        className: \"jsx-291807925\" + \" \" + \"eleven\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      id: \"291807925\",\n      children: \".clock.jsx-291807925{width:300px;height:300px;border-radius:50%;position:relative;top:10%;left:60%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);font-size:24px;color:#444;text-align:center;}.hour_hand.jsx-291807925{position:absolute;width:1px;height:60px;background:#222;top:29.1%;left:49.6%;-webkit-transform-origin:bottom;-ms-transform-origin:bottom;transform-origin:bottom;}.min_hand.jsx-291807925{position:absolute;width:1px;height:80px;background:black;top:22.8%;left:50%;-webkit-transform-origin:bottom;-ms-transform-origin:bottom;transform-origin:bottom;}.sec_hand.jsx-291807925{position:absolute;width:1px;height:118px;background:black;top:10%;left:50%;-webkit-transform-origin:bottom;-ms-transform-origin:bottom;transform-origin:bottom;}.clock.jsx-291807925 span.jsx-291807925{position:absolute;font-family:\\\"Source Sans Pro\\\",sans-serif;font-weight:700;}.twelve.jsx-291807925{top:10px;left:46%;}.one.jsx-291807925{top:10%;right:26%;}.eleven.jsx-291807925{top:10%;left:26%;}.two.jsx-291807925{top:25%;right:10%;}.three.jsx-291807925{right:10px;top:46%;}.four.jsx-291807925{right:30px;top:67%;}.five.jsx-291807925{right:78px;top:80%;}.six.jsx-291807925{bottom:10px;left:50%;}.seven.jsx-291807925{left:80px;top:82%;}.eight.jsx-291807925{left:30px;top:67%;}.nine.jsx-291807925{left:10px;top:46%;}.ten.jsx-291807925{top:25%;left:10%;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGFld29ua2FuZy9Xb3JrL1lpbllhbmcvY29tcG9uZW50cy9DbG9jay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1RFMsQUFHeUIsQUFhTSxBQVVBLEFBVUEsQUFVQSxBQU1ULEFBS0QsQUFLQSxBQUtBLEFBS0csQUFLQSxBQUtBLEFBS0MsQUFLRixBQUtBLEFBS0EsQUFLRixRQWpERSxBQUtELEFBS0MsQUF3Q0QsQ0F2REEsQ0F3Q0QsQUFLQSxBQUtBLENBOUJBLEFBS0EsQUFLQSxDQS9FSyxBQW9GSixLQXhCWCxBQTZDQSxDQTVGWSxBQVVBLEFBVUEsQUFVZ0MsQUFPNUMsQUFLQSxBQVVBLEFBeUJBLEFBS0EsQUFLQSxDQTlCQSxBQUtBLEFBS0EsRUFLQSxJQXBGb0IsR0FhTixBQVVBLEFBVUMsWUFuQkcsQUFVQyxDQVVBLEVBakNDLGFBY1IsQ0FVQSxDQVVGLENBUVEsRUF6Q1IsS0FjRyxBQW9CRixDQVZBLEVBdkJBLE1Ba0NlLEFBTzFCLENBakIwQixDQVZBLENBYlEsaUZBa0NsQyxDQVZBLENBVkEsc0JBYmlCLGVBQ0osV0FDTyxrQkFDcEIiLCJmaWxlIjoiL1VzZXJzL2NoYWV3b25rYW5nL1dvcmsvWWluWWFuZy9jb21wb25lbnRzL0Nsb2NrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFNWRyBmcm9tIFwiLi4vdXRpbHMvU1ZHXCI7XG5cbmNvbnN0IENsb2NrID0gKCkgPT4ge1xuICBjb25zdCBbdGltZSwgc2V0VGltZV0gPSB1c2VTdGF0ZShuZXcgRGF0ZSgpKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHdpbmRvdy5zZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBzZXRUaW1lKG5ldyBEYXRlKCkpO1xuICAgIH0sIDEwMDApO1xuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8U1ZHXG4gICAgICAgIG5hbWU9XCJjbG9ja1wiXG4gICAgICAgIGhlaWdodD1cIjkxXCJcbiAgICAgICAgY29sb3I9XCJcIlxuICAgICAgICB2aWV3Qm94PVwiMCAwIDE1MiA5MVwiXG4gICAgICAgIGc9e3RydWV9XG4gICAgICAgIHRyYW5zZm9ybT17XCJ0cmFuc2xhdGUoLTEwMTYuNyAtMTQxLjcyMilcIn1cbiAgICAgIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsb2NrXCI+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJob3VyX2hhbmRcIlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IGByb3RhdGVaKCR7dGltZS5nZXRIb3VycygpICogMzB9ZGVnKWAsXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cIm1pbl9oYW5kXCJcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBgcm90YXRlWigke3RpbWUuZ2V0TWludXRlcygpICogNn1kZWcpYCxcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwic2VjX2hhbmRcIlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IGByb3RhdGVaKCR7dGltZS5nZXRTZWNvbmRzKCkgKiA2fWRlZylgLFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInR3ZWx2ZVwiPjwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwib25lXCI+PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0d29cIj48L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRocmVlXCI+PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb3VyXCI+PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmaXZlXCI+PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzaXhcIj48L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNldmVuXCI+PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlaWdodFwiPjwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmluZVwiPjwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGVuXCI+PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlbGV2ZW5cIj48L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgLmNsb2NrIHtcbiAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgICAgICAgIGhlaWdodDogMzAwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB0b3A6IDEwJTtcbiAgICAgICAgICAgIGxlZnQ6IDYwJTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgY29sb3I6ICM0NDQ7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmhvdXJfaGFuZCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB3aWR0aDogMXB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzIyMjtcbiAgICAgICAgICAgIHRvcDogMjkuMSU7XG4gICAgICAgICAgICBsZWZ0OiA0OS42JTtcbiAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubWluX2hhbmQge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgd2lkdGg6IDFweDtcbiAgICAgICAgICAgIGhlaWdodDogODBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xuICAgICAgICAgICAgdG9wOiAyMi44JTtcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuc2VjX2hhbmQge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgd2lkdGg6IDFweDtcbiAgICAgICAgICAgIGhlaWdodDogMTE4cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgICAgICAgICAgIHRvcDogMTAlO1xuICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jbG9jayBzcGFuIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlNvdXJjZSBTYW5zIFByb1wiLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudHdlbHZlIHtcbiAgICAgICAgICAgIHRvcDogMTBweDtcbiAgICAgICAgICAgIGxlZnQ6IDQ2JTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAub25lIHtcbiAgICAgICAgICAgIHRvcDogMTAlO1xuICAgICAgICAgICAgcmlnaHQ6IDI2JTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuZWxldmVuIHtcbiAgICAgICAgICAgIHRvcDogMTAlO1xuICAgICAgICAgICAgbGVmdDogMjYlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC50d28ge1xuICAgICAgICAgICAgdG9wOiAyNSU7XG4gICAgICAgICAgICByaWdodDogMTAlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC50aHJlZSB7XG4gICAgICAgICAgICByaWdodDogMTBweDtcbiAgICAgICAgICAgIHRvcDogNDYlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5mb3VyIHtcbiAgICAgICAgICAgIHJpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgdG9wOiA2NyU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmZpdmUge1xuICAgICAgICAgICAgcmlnaHQ6IDc4cHg7XG4gICAgICAgICAgICB0b3A6IDgwJTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuc2l4IHtcbiAgICAgICAgICAgIGJvdHRvbTogMTBweDtcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuc2V2ZW4ge1xuICAgICAgICAgICAgbGVmdDogODBweDtcbiAgICAgICAgICAgIHRvcDogODIlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5laWdodCB7XG4gICAgICAgICAgICBsZWZ0OiAzMHB4O1xuICAgICAgICAgICAgdG9wOiA2NyU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm5pbmUge1xuICAgICAgICAgICAgbGVmdDogMTBweDtcbiAgICAgICAgICAgIHRvcDogNDYlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC50ZW4ge1xuICAgICAgICAgICAgdG9wOiAyNSU7XG4gICAgICAgICAgICBsZWZ0OiAxMCU7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENsb2NrO1xuIl19 */\\n/*@ sourceURL=/Users/chaewonkang/Work/YinYang/components/Clock.js */\"\n    }, void 0, false, void 0, _this)]\n  }, void 0, true);\n};\n\n_s(Clock, \"I0+7QaEsXHXB0XO5JypI3yBHjPI=\");\n\n_c = Clock;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Clock);\n\nvar _c;\n\n$RefreshReg$(_c, \"Clock\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DbG9jay5qcz9mMTI5Il0sIm5hbWVzIjpbIkNsb2NrIiwidXNlU3RhdGUiLCJEYXRlIiwidGltZSIsInNldFRpbWUiLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJzZXRJbnRlcnZhbCIsInRyYW5zZm9ybSIsImdldEhvdXJzIiwiZ2V0TWludXRlcyIsImdldFNlY29uZHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFBQSxrQkFDTUMsc0RBQVEsQ0FBQyxJQUFJQyxJQUFKLEVBQUQsQ0FEZDtBQUFBLE1BQ1hDLElBRFc7QUFBQSxNQUNMQyxPQURLOztBQUdsQkMseURBQVMsQ0FBQyxZQUFNO0FBQ2RDLFVBQU0sQ0FBQ0MsV0FBUCxDQUFtQixZQUFNO0FBQ3ZCSCxhQUFPLENBQUMsSUFBSUYsSUFBSixFQUFELENBQVA7QUFDRCxLQUZELEVBRUcsSUFGSDtBQUdELEdBSlEsQ0FBVDtBQU1BLHNCQUNFO0FBQUEsNEJBQ0UscUVBQUMsa0RBQUQ7QUFDRSxVQUFJLEVBQUMsT0FEUDtBQUVFLFlBQU0sRUFBQyxJQUZUO0FBR0UsV0FBSyxFQUFDLEVBSFI7QUFJRSxhQUFPLEVBQUMsWUFKVjtBQUtFLE9BQUMsRUFBRSxJQUxMO0FBTUUsZUFBUyxFQUFFO0FBTmI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBU0U7QUFBQSx5Q0FBZSxPQUFmO0FBQUEsOEJBQ0U7QUFFRSxhQUFLLEVBQUU7QUFDTE0sbUJBQVMsb0JBQWFMLElBQUksQ0FBQ00sUUFBTCxLQUFrQixFQUEvQjtBQURKLFNBRlQ7QUFBQSwyQ0FDWTtBQURaO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQU9FO0FBRUUsYUFBSyxFQUFFO0FBQ0xELG1CQUFTLG9CQUFhTCxJQUFJLENBQUNPLFVBQUwsS0FBb0IsQ0FBakM7QUFESixTQUZUO0FBQUEsMkNBQ1k7QUFEWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUEYsZUFhRTtBQUVFLGFBQUssRUFBRTtBQUNMRixtQkFBUyxvQkFBYUwsSUFBSSxDQUFDUSxVQUFMLEtBQW9CLENBQWpDO0FBREosU0FGVDtBQUFBLDJDQUNZO0FBRFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWJGLGVBbUJFO0FBQUEsMkNBQWdCO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFuQkYsZUFvQkU7QUFBQSwyQ0FBZ0I7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXBCRixlQXFCRTtBQUFBLDJDQUFnQjtBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBckJGLGVBc0JFO0FBQUEsMkNBQWdCO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF0QkYsZUF1QkU7QUFBQSwyQ0FBZ0I7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXZCRixlQXdCRTtBQUFBLDJDQUFnQjtBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBeEJGLGVBeUJFO0FBQUEsMkNBQWdCO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF6QkYsZUEwQkU7QUFBQSwyQ0FBZ0I7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQTFCRixlQTJCRTtBQUFBLDJDQUFnQjtBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBM0JGLGVBNEJFO0FBQUEsMkNBQWdCO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUE1QkYsZUE2QkU7QUFBQSwyQ0FBZ0I7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQTdCRixlQThCRTtBQUFBLDJDQUFnQjtBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBOUJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREY7QUE0SkQsQ0FyS0Q7O0dBQU1YLEs7O0tBQUFBLEs7QUF1S1NBLG9FQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9DbG9jay5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBTVkcgZnJvbSBcIi4uL3V0aWxzL1NWR1wiO1xuXG5jb25zdCBDbG9jayA9ICgpID0+IHtcbiAgY29uc3QgW3RpbWUsIHNldFRpbWVdID0gdXNlU3RhdGUobmV3IERhdGUoKSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aW5kb3cuc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgc2V0VGltZShuZXcgRGF0ZSgpKTtcbiAgICB9LCAxMDAwKTtcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFNWR1xuICAgICAgICBuYW1lPVwiY2xvY2tcIlxuICAgICAgICBoZWlnaHQ9XCI5MVwiXG4gICAgICAgIGNvbG9yPVwiXCJcbiAgICAgICAgdmlld0JveD1cIjAgMCAxNTIgOTFcIlxuICAgICAgICBnPXt0cnVlfVxuICAgICAgICB0cmFuc2Zvcm09e1widHJhbnNsYXRlKC0xMDE2LjcgLTE0MS43MjIpXCJ9XG4gICAgICAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbG9ja1wiPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwiaG91cl9oYW5kXCJcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBgcm90YXRlWigke3RpbWUuZ2V0SG91cnMoKSAqIDMwfWRlZylgLFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJtaW5faGFuZFwiXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHRyYW5zZm9ybTogYHJvdGF0ZVooJHt0aW1lLmdldE1pbnV0ZXMoKSAqIDZ9ZGVnKWAsXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cInNlY19oYW5kXCJcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBgcm90YXRlWigke3RpbWUuZ2V0U2Vjb25kcygpICogNn1kZWcpYCxcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0d2VsdmVcIj48L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm9uZVwiPjwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidHdvXCI+PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aHJlZVwiPjwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm91clwiPjwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZml2ZVwiPjwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2l4XCI+PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzZXZlblwiPjwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZWlnaHRcIj48L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5pbmVcIj48L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRlblwiPjwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZWxldmVuXCI+PC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIC5jbG9jayB7XG4gICAgICAgICAgICB3aWR0aDogMzAwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDMwMHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgdG9wOiAxMCU7XG4gICAgICAgICAgICBsZWZ0OiA2MCU7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgIGNvbG9yOiAjNDQ0O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5ob3VyX2hhbmQge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgd2lkdGg6IDFweDtcbiAgICAgICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyMjI7XG4gICAgICAgICAgICB0b3A6IDI5LjElO1xuICAgICAgICAgICAgbGVmdDogNDkuNiU7XG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b207XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm1pbl9oYW5kIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHdpZHRoOiAxcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgICAgICAgICAgIHRvcDogMjIuOCU7XG4gICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b207XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnNlY19oYW5kIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHdpZHRoOiAxcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDExOHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgICAgICAgICB0b3A6IDEwJTtcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY2xvY2sgc3BhbiB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJTb3VyY2UgU2FucyBQcm9cIiwgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnR3ZWx2ZSB7XG4gICAgICAgICAgICB0b3A6IDEwcHg7XG4gICAgICAgICAgICBsZWZ0OiA0NiU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm9uZSB7XG4gICAgICAgICAgICB0b3A6IDEwJTtcbiAgICAgICAgICAgIHJpZ2h0OiAyNiU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmVsZXZlbiB7XG4gICAgICAgICAgICB0b3A6IDEwJTtcbiAgICAgICAgICAgIGxlZnQ6IDI2JTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudHdvIHtcbiAgICAgICAgICAgIHRvcDogMjUlO1xuICAgICAgICAgICAgcmlnaHQ6IDEwJTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudGhyZWUge1xuICAgICAgICAgICAgcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICB0b3A6IDQ2JTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuZm91ciB7XG4gICAgICAgICAgICByaWdodDogMzBweDtcbiAgICAgICAgICAgIHRvcDogNjclO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5maXZlIHtcbiAgICAgICAgICAgIHJpZ2h0OiA3OHB4O1xuICAgICAgICAgICAgdG9wOiA4MCU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnNpeCB7XG4gICAgICAgICAgICBib3R0b206IDEwcHg7XG4gICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnNldmVuIHtcbiAgICAgICAgICAgIGxlZnQ6IDgwcHg7XG4gICAgICAgICAgICB0b3A6IDgyJTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuZWlnaHQge1xuICAgICAgICAgICAgbGVmdDogMzBweDtcbiAgICAgICAgICAgIHRvcDogNjclO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5uaW5lIHtcbiAgICAgICAgICAgIGxlZnQ6IDEwcHg7XG4gICAgICAgICAgICB0b3A6IDQ2JTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudGVuIHtcbiAgICAgICAgICAgIHRvcDogMjUlO1xuICAgICAgICAgICAgbGVmdDogMTAlO1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDbG9jaztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Clock.js\n");

/***/ })

})