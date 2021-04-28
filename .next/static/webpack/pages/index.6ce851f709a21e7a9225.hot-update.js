webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Clock.js":
/*!*****************************!*\
  !*** ./components/Clock.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _jsxFileName = \"/Users/chaewonkang/Work/YinYang/components/Clock.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar Clock = function Clock() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(new Date()),\n      time = _useState[0],\n      setTime = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    window.setInterval(function () {\n      setTime(new Date());\n    }, 1000);\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"jsx-1899456475\" + \" \" + \"clock\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        style: {\n          transform: \"rotateZ(\".concat(time.getHours() * 30, \"deg)\")\n        },\n        className: \"jsx-1899456475\" + \" \" + \"hour_hand\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        style: {\n          transform: \"rotateZ(\".concat(time.getMinutes() * 6, \"deg)\")\n        },\n        className: \"jsx-1899456475\" + \" \" + \"min_hand\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        style: {\n          transform: \"rotateZ(\".concat(time.getSeconds() * 6, \"deg)\")\n        },\n        className: \"jsx-1899456475\" + \" \" + \"sec_hand\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        className: \"jsx-1899456475\" + \" \" + \"twelve\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        className: \"jsx-1899456475\" + \" \" + \"one\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        className: \"jsx-1899456475\" + \" \" + \"two\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        className: \"jsx-1899456475\" + \" \" + \"three\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        className: \"jsx-1899456475\" + \" \" + \"four\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        className: \"jsx-1899456475\" + \" \" + \"five\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        className: \"jsx-1899456475\" + \" \" + \"six\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        className: \"jsx-1899456475\" + \" \" + \"seven\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        className: \"jsx-1899456475\" + \" \" + \"eight\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        className: \"jsx-1899456475\" + \" \" + \"nine\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        className: \"jsx-1899456475\" + \" \" + \"ten\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        className: \"jsx-1899456475\" + \" \" + \"eleven\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      id: \"1899456475\",\n      children: \".clock.jsx-1899456475{width:300px;height:300px;border-radius:50%;position:relative;top:10%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);font-size:24px;color:#444;text-align:center;}.clock.jsx-1899456475::after{background:black;content:\\\"\\\";width:4px;height:4px;border-radius:50%;position:absolute;z-index:2;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);border:3px solid black;}.hour_hand.jsx-1899456475{position:absolute;width:2px;height:60px;background:#222;top:33%;left:49%;-webkit-transform-origin:bottom;-ms-transform-origin:bottom;transform-origin:bottom;}.min_hand.jsx-1899456475{position:absolute;width:2px;height:80px;background:black;top:22.5%;left:49%;-webkit-transform-origin:bottom;-ms-transform-origin:bottom;transform-origin:bottom;}.sec_hand.jsx-1899456475{position:absolute;width:2px;height:118px;background:black;top:10.5%;left:50%;-webkit-transform-origin:bottom;-ms-transform-origin:bottom;transform-origin:bottom;}.clock.jsx-1899456475 span.jsx-1899456475{position:absolute;font-family:\\\"Source Sans Pro\\\",sans-serif;font-weight:700;}.twelve.jsx-1899456475{top:10px;left:46%;}.one.jsx-1899456475{top:10%;right:26%;}.eleven.jsx-1899456475{top:10%;left:26%;}.two.jsx-1899456475{top:25%;right:10%;}.three.jsx-1899456475{right:10px;top:46%;}.four.jsx-1899456475{right:30px;top:67%;}.five.jsx-1899456475{right:78px;top:80%;}.six.jsx-1899456475{bottom:10px;left:50%;}.seven.jsx-1899456475{left:80px;top:82%;}.eight.jsx-1899456475{left:30px;top:67%;}.nine.jsx-1899456475{left:10px;top:46%;}.ten.jsx-1899456475{top:25%;left:10%;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGFld29ua2FuZy9Xb3JrL1lpbllhbmcvY29tcG9uZW50cy9DbG9jay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4Q1MsQUFHeUIsQUFhSyxBQWNDLEFBVUEsQUFVQSxBQVVBLEFBTVQsQUFLRCxBQUtBLEFBS0EsQUFLRyxBQUtBLEFBS0EsQUFLQyxBQUtGLEFBS0EsQUFLQSxBQUtGLFFBakRFLEFBS0QsQUFLQyxBQXdDRCxDQXZEQSxDQXdDRCxBQUtBLEFBS0EsQ0E5QkEsQUFLQSxBQUtBLENBN0ZLLEFBa0dKLEtBckZFLEFBNkRiLEFBNkNBLENBNUZZLEFBVUEsQUFVQSxBQVVnQyxBQU81QyxBQUtBLEFBVUEsQUF5QkEsQUFLQSxBQUtBLENBOUJBLEFBS0EsQUFLQSxFQUtBLElBbEdvQixHQWFSLEFBY0UsQUFVQSxBQVVDLFVBakNGLEVBY0ssQUFVQyxDQVVBLEVBL0NDLE1BY0EsT0FjVixDQVVFLENBVUEsQ0FRTSxFQXZEUixHQTRCQyxHQWRTLEFBd0JULENBVUEsQ0EvQ0EsSUE0QmUsRUEyQjFCLENBakIwQixDQVVBLENBL0NRLE9BYXRCLFVBQ0YsUUFDQyxTQUN1Qiw2Q0FZbEMsR0FVQSxDQVVBLHNCQS9DaUIsZUFDSixXQUNPLFFBY0ssVUFiekIsYUFjQSIsImZpbGUiOiIvVXNlcnMvY2hhZXdvbmthbmcvV29yay9ZaW5ZYW5nL2NvbXBvbmVudHMvQ2xvY2suanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IENsb2NrID0gKCkgPT4ge1xuICBjb25zdCBbdGltZSwgc2V0VGltZV0gPSB1c2VTdGF0ZShuZXcgRGF0ZSgpKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHdpbmRvdy5zZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBzZXRUaW1lKG5ldyBEYXRlKCkpO1xuICAgIH0sIDEwMDApO1xuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsb2NrXCI+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJob3VyX2hhbmRcIlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IGByb3RhdGVaKCR7dGltZS5nZXRIb3VycygpICogMzB9ZGVnKWAsXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cIm1pbl9oYW5kXCJcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBgcm90YXRlWigke3RpbWUuZ2V0TWludXRlcygpICogNn1kZWcpYCxcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwic2VjX2hhbmRcIlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IGByb3RhdGVaKCR7dGltZS5nZXRTZWNvbmRzKCkgKiA2fWRlZylgLFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInR3ZWx2ZVwiPjwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwib25lXCI+PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0d29cIj48L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRocmVlXCI+PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb3VyXCI+PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmaXZlXCI+PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzaXhcIj48L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNldmVuXCI+PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlaWdodFwiPjwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmluZVwiPjwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGVuXCI+PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlbGV2ZW5cIj48L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgLmNsb2NrIHtcbiAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgICAgICAgIGhlaWdodDogMzAwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB0b3A6IDEwJTtcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgY29sb3I6ICM0NDQ7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNsb2NrOjphZnRlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICB3aWR0aDogNHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA0cHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgICAgIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5ob3VyX2hhbmQge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgd2lkdGg6IDJweDtcbiAgICAgICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyMjI7XG4gICAgICAgICAgICB0b3A6IDMzJTtcbiAgICAgICAgICAgIGxlZnQ6IDQ5JTtcbiAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubWluX2hhbmQge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgd2lkdGg6IDJweDtcbiAgICAgICAgICAgIGhlaWdodDogODBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xuICAgICAgICAgICAgdG9wOiAyMi41JTtcbiAgICAgICAgICAgIGxlZnQ6IDQ5JTtcbiAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuc2VjX2hhbmQge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgd2lkdGg6IDJweDtcbiAgICAgICAgICAgIGhlaWdodDogMTE4cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgICAgICAgICAgIHRvcDogMTAuNSU7XG4gICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b207XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNsb2NrIHNwYW4ge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiU291cmNlIFNhbnMgUHJvXCIsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC50d2VsdmUge1xuICAgICAgICAgICAgdG9wOiAxMHB4O1xuICAgICAgICAgICAgbGVmdDogNDYlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5vbmUge1xuICAgICAgICAgICAgdG9wOiAxMCU7XG4gICAgICAgICAgICByaWdodDogMjYlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5lbGV2ZW4ge1xuICAgICAgICAgICAgdG9wOiAxMCU7XG4gICAgICAgICAgICBsZWZ0OiAyNiU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnR3byB7XG4gICAgICAgICAgICB0b3A6IDI1JTtcbiAgICAgICAgICAgIHJpZ2h0OiAxMCU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnRocmVlIHtcbiAgICAgICAgICAgIHJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgdG9wOiA0NiU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmZvdXIge1xuICAgICAgICAgICAgcmlnaHQ6IDMwcHg7XG4gICAgICAgICAgICB0b3A6IDY3JTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuZml2ZSB7XG4gICAgICAgICAgICByaWdodDogNzhweDtcbiAgICAgICAgICAgIHRvcDogODAlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5zaXgge1xuICAgICAgICAgICAgYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5zZXZlbiB7XG4gICAgICAgICAgICBsZWZ0OiA4MHB4O1xuICAgICAgICAgICAgdG9wOiA4MiU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmVpZ2h0IHtcbiAgICAgICAgICAgIGxlZnQ6IDMwcHg7XG4gICAgICAgICAgICB0b3A6IDY3JTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubmluZSB7XG4gICAgICAgICAgICBsZWZ0OiAxMHB4O1xuICAgICAgICAgICAgdG9wOiA0NiU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnRlbiB7XG4gICAgICAgICAgICB0b3A6IDI1JTtcbiAgICAgICAgICAgIGxlZnQ6IDEwJTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2xvY2s7XG4iXX0= */\\n/*@ sourceURL=/Users/chaewonkang/Work/YinYang/components/Clock.js */\"\n    }, void 0, false, void 0, _this)]\n  }, void 0, true);\n};\n\n_s(Clock, \"I0+7QaEsXHXB0XO5JypI3yBHjPI=\");\n\n_c = Clock;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Clock);\n\nvar _c;\n\n$RefreshReg$(_c, \"Clock\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DbG9jay5qcz9mMTI5Il0sIm5hbWVzIjpbIkNsb2NrIiwidXNlU3RhdGUiLCJEYXRlIiwidGltZSIsInNldFRpbWUiLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJzZXRJbnRlcnZhbCIsInRyYW5zZm9ybSIsImdldEhvdXJzIiwiZ2V0TWludXRlcyIsImdldFNlY29uZHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFBQSxrQkFDTUMsc0RBQVEsQ0FBQyxJQUFJQyxJQUFKLEVBQUQsQ0FEZDtBQUFBLE1BQ1hDLElBRFc7QUFBQSxNQUNMQyxPQURLOztBQUdsQkMseURBQVMsQ0FBQyxZQUFNO0FBQ2RDLFVBQU0sQ0FBQ0MsV0FBUCxDQUFtQixZQUFNO0FBQ3ZCSCxhQUFPLENBQUMsSUFBSUYsSUFBSixFQUFELENBQVA7QUFDRCxLQUZELEVBRUcsSUFGSDtBQUdELEdBSlEsQ0FBVDtBQU1BLHNCQUNFO0FBQUEsNEJBQ0U7QUFBQSwwQ0FBZSxPQUFmO0FBQUEsOEJBQ0U7QUFFRSxhQUFLLEVBQUU7QUFDTE0sbUJBQVMsb0JBQWFMLElBQUksQ0FBQ00sUUFBTCxLQUFrQixFQUEvQjtBQURKLFNBRlQ7QUFBQSw0Q0FDWTtBQURaO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQU9FO0FBRUUsYUFBSyxFQUFFO0FBQ0xELG1CQUFTLG9CQUFhTCxJQUFJLENBQUNPLFVBQUwsS0FBb0IsQ0FBakM7QUFESixTQUZUO0FBQUEsNENBQ1k7QUFEWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUEYsZUFhRTtBQUVFLGFBQUssRUFBRTtBQUNMRixtQkFBUyxvQkFBYUwsSUFBSSxDQUFDUSxVQUFMLEtBQW9CLENBQWpDO0FBREosU0FGVDtBQUFBLDRDQUNZO0FBRFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWJGLGVBbUJFO0FBQUEsNENBQWdCO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFuQkYsZUFvQkU7QUFBQSw0Q0FBZ0I7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXBCRixlQXFCRTtBQUFBLDRDQUFnQjtBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBckJGLGVBc0JFO0FBQUEsNENBQWdCO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF0QkYsZUF1QkU7QUFBQSw0Q0FBZ0I7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXZCRixlQXdCRTtBQUFBLDRDQUFnQjtBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBeEJGLGVBeUJFO0FBQUEsNENBQWdCO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF6QkYsZUEwQkU7QUFBQSw0Q0FBZ0I7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQTFCRixlQTJCRTtBQUFBLDRDQUFnQjtBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBM0JGLGVBNEJFO0FBQUEsNENBQWdCO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUE1QkYsZUE2QkU7QUFBQSw0Q0FBZ0I7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQTdCRixlQThCRTtBQUFBLDRDQUFnQjtBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBOUJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREY7QUFrS0QsQ0EzS0Q7O0dBQU1YLEs7O0tBQUFBLEs7QUE2S1NBLG9FQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9DbG9jay5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgQ2xvY2sgPSAoKSA9PiB7XG4gIGNvbnN0IFt0aW1lLCBzZXRUaW1lXSA9IHVzZVN0YXRlKG5ldyBEYXRlKCkpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgd2luZG93LnNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHNldFRpbWUobmV3IERhdGUoKSk7XG4gICAgfSwgMTAwMCk7XG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xvY2tcIj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cImhvdXJfaGFuZFwiXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHRyYW5zZm9ybTogYHJvdGF0ZVooJHt0aW1lLmdldEhvdXJzKCkgKiAzMH1kZWcpYCxcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwibWluX2hhbmRcIlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IGByb3RhdGVaKCR7dGltZS5nZXRNaW51dGVzKCkgKiA2fWRlZylgLFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJzZWNfaGFuZFwiXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHRyYW5zZm9ybTogYHJvdGF0ZVooJHt0aW1lLmdldFNlY29uZHMoKSAqIDZ9ZGVnKWAsXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidHdlbHZlXCI+PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJvbmVcIj48L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInR3b1wiPjwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGhyZWVcIj48L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvdXJcIj48L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZpdmVcIj48L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNpeFwiPjwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2V2ZW5cIj48L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImVpZ2h0XCI+PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuaW5lXCI+PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZW5cIj48L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImVsZXZlblwiPjwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICAuY2xvY2sge1xuICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAzMDBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHRvcDogMTAlO1xuICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICBjb2xvcjogIzQ0NDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY2xvY2s6OmFmdGVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xuICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICAgIHdpZHRoOiA0cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDRweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICAgICAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmhvdXJfaGFuZCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB3aWR0aDogMnB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzIyMjtcbiAgICAgICAgICAgIHRvcDogMzMlO1xuICAgICAgICAgICAgbGVmdDogNDklO1xuICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5taW5faGFuZCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB3aWR0aDogMnB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgICAgICAgICB0b3A6IDIyLjUlO1xuICAgICAgICAgICAgbGVmdDogNDklO1xuICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5zZWNfaGFuZCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB3aWR0aDogMnB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxMThweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xuICAgICAgICAgICAgdG9wOiAxMC41JTtcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY2xvY2sgc3BhbiB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJTb3VyY2UgU2FucyBQcm9cIiwgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnR3ZWx2ZSB7XG4gICAgICAgICAgICB0b3A6IDEwcHg7XG4gICAgICAgICAgICBsZWZ0OiA0NiU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm9uZSB7XG4gICAgICAgICAgICB0b3A6IDEwJTtcbiAgICAgICAgICAgIHJpZ2h0OiAyNiU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmVsZXZlbiB7XG4gICAgICAgICAgICB0b3A6IDEwJTtcbiAgICAgICAgICAgIGxlZnQ6IDI2JTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudHdvIHtcbiAgICAgICAgICAgIHRvcDogMjUlO1xuICAgICAgICAgICAgcmlnaHQ6IDEwJTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudGhyZWUge1xuICAgICAgICAgICAgcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICB0b3A6IDQ2JTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuZm91ciB7XG4gICAgICAgICAgICByaWdodDogMzBweDtcbiAgICAgICAgICAgIHRvcDogNjclO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5maXZlIHtcbiAgICAgICAgICAgIHJpZ2h0OiA3OHB4O1xuICAgICAgICAgICAgdG9wOiA4MCU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnNpeCB7XG4gICAgICAgICAgICBib3R0b206IDEwcHg7XG4gICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnNldmVuIHtcbiAgICAgICAgICAgIGxlZnQ6IDgwcHg7XG4gICAgICAgICAgICB0b3A6IDgyJTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuZWlnaHQge1xuICAgICAgICAgICAgbGVmdDogMzBweDtcbiAgICAgICAgICAgIHRvcDogNjclO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5uaW5lIHtcbiAgICAgICAgICAgIGxlZnQ6IDEwcHg7XG4gICAgICAgICAgICB0b3A6IDQ2JTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudGVuIHtcbiAgICAgICAgICAgIHRvcDogMjUlO1xuICAgICAgICAgICAgbGVmdDogMTAlO1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDbG9jaztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Clock.js\n");

/***/ })

})