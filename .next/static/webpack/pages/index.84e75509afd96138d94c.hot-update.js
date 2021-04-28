webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Clock.js":
/*!*****************************!*\
  !*** ./components/Clock.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _jsxFileName = \"/Users/chaewonkang/Work/YinYang/components/Clock.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar Clock = function Clock() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(new Date()),\n      time = _useState[0],\n      setTime = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    window.setInterval(function () {\n      setTime(new Date());\n    }, 1000);\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"jsx-388663726\" + \" \" + \"clock\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        style: {\n          transform: \"rotateZ(\".concat(time.getHours() * 30, \"deg)\")\n        },\n        className: \"jsx-388663726\" + \" \" + \"hour_hand\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        style: {\n          transform: \"rotateZ(\".concat(time.getMinutes() * 6, \"deg)\")\n        },\n        className: \"jsx-388663726\" + \" \" + \"min_hand\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        style: {\n          transform: \"rotateZ(\".concat(time.getSeconds() * 6, \"deg)\")\n        },\n        className: \"jsx-388663726\" + \" \" + \"sec_hand\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        className: \"jsx-388663726\" + \" \" + \"twelve\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        className: \"jsx-388663726\" + \" \" + \"one\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        className: \"jsx-388663726\" + \" \" + \"two\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        className: \"jsx-388663726\" + \" \" + \"three\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        className: \"jsx-388663726\" + \" \" + \"four\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        className: \"jsx-388663726\" + \" \" + \"five\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        className: \"jsx-388663726\" + \" \" + \"six\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        className: \"jsx-388663726\" + \" \" + \"seven\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        className: \"jsx-388663726\" + \" \" + \"eight\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        className: \"jsx-388663726\" + \" \" + \"nine\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        className: \"jsx-388663726\" + \" \" + \"ten\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        className: \"jsx-388663726\" + \" \" + \"eleven\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      id: \"388663726\",\n      children: \".clock.jsx-388663726{width:300px;height:0px;border-radius:50%;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);font-size:24px;color:#444;text-align:center;}.clock.jsx-388663726::after{background:black;content:\\\"\\\";width:4px;height:4px;border-radius:50%;position:absolute;z-index:2;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);border:3px solid black;}.hour_hand.jsx-388663726{position:absolute;width:2px;height:60px;background:#222;top:30%;left:49%;-webkit-transform-origin:bottom;-ms-transform-origin:bottom;transform-origin:bottom;}.min_hand.jsx-388663726{position:absolute;width:2px;height:80px;background:black;top:22.5%;left:49%;-webkit-transform-origin:bottom;-ms-transform-origin:bottom;transform-origin:bottom;}.sec_hand.jsx-388663726{position:absolute;width:2px;height:118px;background:black;top:10.5%;left:50%;-webkit-transform-origin:bottom;-ms-transform-origin:bottom;transform-origin:bottom;}.clock.jsx-388663726 span.jsx-388663726{position:absolute;font-family:\\\"Source Sans Pro\\\",sans-serif;font-weight:700;}.twelve.jsx-388663726{top:10px;left:46%;}.one.jsx-388663726{top:10%;right:26%;}.eleven.jsx-388663726{top:10%;left:26%;}.two.jsx-388663726{top:25%;right:10%;}.three.jsx-388663726{right:10px;top:46%;}.four.jsx-388663726{right:30px;top:67%;}.five.jsx-388663726{right:78px;top:80%;}.six.jsx-388663726{bottom:10px;left:50%;}.seven.jsx-388663726{left:80px;top:82%;}.eight.jsx-388663726{left:30px;top:67%;}.nine.jsx-388663726{left:10px;top:46%;}.ten.jsx-388663726{top:25%;left:10%;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGFld29ua2FuZy9Xb3JrL1lpbllhbmcvY29tcG9uZW50cy9DbG9jay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4Q1MsQUFHeUIsQUFhSyxBQWNDLEFBVUEsQUFVQSxBQVVBLEFBTVQsQUFLRCxBQUtBLEFBS0EsQUFLRyxBQUtBLEFBS0EsQUFLQyxBQUtGLEFBS0EsQUFLQSxBQUtGLFFBakRFLEFBS0QsQUFLQyxBQXdDRCxDQXZEQSxDQXdDRCxBQUtBLEFBS0EsQ0E5QkEsQUFLQSxBQUtBLENBN0ZHLEFBa0dGLEtBckZFLEFBNkRiLEFBNkNBLENBNUZZLEFBVUEsQUFVQSxBQVVnQyxBQU81QyxBQUtBLEFBVUEsQUF5QkEsQUFLQSxBQUtBLENBOUJBLEFBS0EsQUFLQSxFQUtBLEVBbEdvQixLQWFSLEFBY0UsQUFVQSxBQVVDLFVBakNGLEVBY0ssQUFVQyxDQXJDQyxBQStDRCxRQWpDQyxPQWNWLENBVUUsQ0FVQSxDQS9DRixBQXVEUSxLQTNCUCxHQTNCQSxBQWFTLEFBd0JULENBVUEsS0FuQmUsRUEyQjFCLENBdERrQyxBQXFDUixDQVVBLFFBbENkLFVBQ0YsUUFDQyxTQUN1Qiw2Q0FZbEMsR0FVQSxDQVVBLG9CQS9DaUIsZUFDSixXQUNPLFVBY0ssUUFiekIsZUFjQSIsImZpbGUiOiIvVXNlcnMvY2hhZXdvbmthbmcvV29yay9ZaW5ZYW5nL2NvbXBvbmVudHMvQ2xvY2suanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IENsb2NrID0gKCkgPT4ge1xuICBjb25zdCBbdGltZSwgc2V0VGltZV0gPSB1c2VTdGF0ZShuZXcgRGF0ZSgpKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHdpbmRvdy5zZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBzZXRUaW1lKG5ldyBEYXRlKCkpO1xuICAgIH0sIDEwMDApO1xuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsb2NrXCI+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJob3VyX2hhbmRcIlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IGByb3RhdGVaKCR7dGltZS5nZXRIb3VycygpICogMzB9ZGVnKWAsXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cIm1pbl9oYW5kXCJcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBgcm90YXRlWigke3RpbWUuZ2V0TWludXRlcygpICogNn1kZWcpYCxcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwic2VjX2hhbmRcIlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IGByb3RhdGVaKCR7dGltZS5nZXRTZWNvbmRzKCkgKiA2fWRlZylgLFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInR3ZWx2ZVwiPjwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwib25lXCI+PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0d29cIj48L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRocmVlXCI+PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb3VyXCI+PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmaXZlXCI+PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzaXhcIj48L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNldmVuXCI+PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlaWdodFwiPjwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmluZVwiPjwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGVuXCI+PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlbGV2ZW5cIj48L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgLmNsb2NrIHtcbiAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgICAgICAgIGhlaWdodDogMHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgIGNvbG9yOiAjNDQ0O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jbG9jazo6YWZ0ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgd2lkdGg6IDRweDtcbiAgICAgICAgICAgIGhlaWdodDogNHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgICAgICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuaG91cl9oYW5kIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHdpZHRoOiAycHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMjIyO1xuICAgICAgICAgICAgdG9wOiAzMCU7XG4gICAgICAgICAgICBsZWZ0OiA0OSU7XG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b207XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm1pbl9oYW5kIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHdpZHRoOiAycHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgICAgICAgICAgIHRvcDogMjIuNSU7XG4gICAgICAgICAgICBsZWZ0OiA0OSU7XG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b207XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnNlY19oYW5kIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHdpZHRoOiAycHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDExOHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgICAgICAgICB0b3A6IDEwLjUlO1xuICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jbG9jayBzcGFuIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlNvdXJjZSBTYW5zIFByb1wiLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudHdlbHZlIHtcbiAgICAgICAgICAgIHRvcDogMTBweDtcbiAgICAgICAgICAgIGxlZnQ6IDQ2JTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAub25lIHtcbiAgICAgICAgICAgIHRvcDogMTAlO1xuICAgICAgICAgICAgcmlnaHQ6IDI2JTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuZWxldmVuIHtcbiAgICAgICAgICAgIHRvcDogMTAlO1xuICAgICAgICAgICAgbGVmdDogMjYlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC50d28ge1xuICAgICAgICAgICAgdG9wOiAyNSU7XG4gICAgICAgICAgICByaWdodDogMTAlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC50aHJlZSB7XG4gICAgICAgICAgICByaWdodDogMTBweDtcbiAgICAgICAgICAgIHRvcDogNDYlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5mb3VyIHtcbiAgICAgICAgICAgIHJpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgdG9wOiA2NyU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmZpdmUge1xuICAgICAgICAgICAgcmlnaHQ6IDc4cHg7XG4gICAgICAgICAgICB0b3A6IDgwJTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuc2l4IHtcbiAgICAgICAgICAgIGJvdHRvbTogMTBweDtcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuc2V2ZW4ge1xuICAgICAgICAgICAgbGVmdDogODBweDtcbiAgICAgICAgICAgIHRvcDogODIlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5laWdodCB7XG4gICAgICAgICAgICBsZWZ0OiAzMHB4O1xuICAgICAgICAgICAgdG9wOiA2NyU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm5pbmUge1xuICAgICAgICAgICAgbGVmdDogMTBweDtcbiAgICAgICAgICAgIHRvcDogNDYlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC50ZW4ge1xuICAgICAgICAgICAgdG9wOiAyNSU7XG4gICAgICAgICAgICBsZWZ0OiAxMCU7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENsb2NrO1xuIl19 */\\n/*@ sourceURL=/Users/chaewonkang/Work/YinYang/components/Clock.js */\"\n    }, void 0, false, void 0, _this)]\n  }, void 0, true);\n};\n\n_s(Clock, \"I0+7QaEsXHXB0XO5JypI3yBHjPI=\");\n\n_c = Clock;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Clock);\n\nvar _c;\n\n$RefreshReg$(_c, \"Clock\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DbG9jay5qcz9mMTI5Il0sIm5hbWVzIjpbIkNsb2NrIiwidXNlU3RhdGUiLCJEYXRlIiwidGltZSIsInNldFRpbWUiLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJzZXRJbnRlcnZhbCIsInRyYW5zZm9ybSIsImdldEhvdXJzIiwiZ2V0TWludXRlcyIsImdldFNlY29uZHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFBQSxrQkFDTUMsc0RBQVEsQ0FBQyxJQUFJQyxJQUFKLEVBQUQsQ0FEZDtBQUFBLE1BQ1hDLElBRFc7QUFBQSxNQUNMQyxPQURLOztBQUdsQkMseURBQVMsQ0FBQyxZQUFNO0FBQ2RDLFVBQU0sQ0FBQ0MsV0FBUCxDQUFtQixZQUFNO0FBQ3ZCSCxhQUFPLENBQUMsSUFBSUYsSUFBSixFQUFELENBQVA7QUFDRCxLQUZELEVBRUcsSUFGSDtBQUdELEdBSlEsQ0FBVDtBQU1BLHNCQUNFO0FBQUEsNEJBQ0U7QUFBQSx5Q0FBZSxPQUFmO0FBQUEsOEJBQ0U7QUFFRSxhQUFLLEVBQUU7QUFDTE0sbUJBQVMsb0JBQWFMLElBQUksQ0FBQ00sUUFBTCxLQUFrQixFQUEvQjtBQURKLFNBRlQ7QUFBQSwyQ0FDWTtBQURaO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQU9FO0FBRUUsYUFBSyxFQUFFO0FBQ0xELG1CQUFTLG9CQUFhTCxJQUFJLENBQUNPLFVBQUwsS0FBb0IsQ0FBakM7QUFESixTQUZUO0FBQUEsMkNBQ1k7QUFEWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUEYsZUFhRTtBQUVFLGFBQUssRUFBRTtBQUNMRixtQkFBUyxvQkFBYUwsSUFBSSxDQUFDUSxVQUFMLEtBQW9CLENBQWpDO0FBREosU0FGVDtBQUFBLDJDQUNZO0FBRFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWJGLGVBbUJFO0FBQUEsMkNBQWdCO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFuQkYsZUFvQkU7QUFBQSwyQ0FBZ0I7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXBCRixlQXFCRTtBQUFBLDJDQUFnQjtBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBckJGLGVBc0JFO0FBQUEsMkNBQWdCO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF0QkYsZUF1QkU7QUFBQSwyQ0FBZ0I7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXZCRixlQXdCRTtBQUFBLDJDQUFnQjtBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBeEJGLGVBeUJFO0FBQUEsMkNBQWdCO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF6QkYsZUEwQkU7QUFBQSwyQ0FBZ0I7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQTFCRixlQTJCRTtBQUFBLDJDQUFnQjtBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBM0JGLGVBNEJFO0FBQUEsMkNBQWdCO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUE1QkYsZUE2QkU7QUFBQSwyQ0FBZ0I7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQTdCRixlQThCRTtBQUFBLDJDQUFnQjtBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBOUJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREY7QUFrS0QsQ0EzS0Q7O0dBQU1YLEs7O0tBQUFBLEs7QUE2S1NBLG9FQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9DbG9jay5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgQ2xvY2sgPSAoKSA9PiB7XG4gIGNvbnN0IFt0aW1lLCBzZXRUaW1lXSA9IHVzZVN0YXRlKG5ldyBEYXRlKCkpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgd2luZG93LnNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHNldFRpbWUobmV3IERhdGUoKSk7XG4gICAgfSwgMTAwMCk7XG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xvY2tcIj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cImhvdXJfaGFuZFwiXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHRyYW5zZm9ybTogYHJvdGF0ZVooJHt0aW1lLmdldEhvdXJzKCkgKiAzMH1kZWcpYCxcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwibWluX2hhbmRcIlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IGByb3RhdGVaKCR7dGltZS5nZXRNaW51dGVzKCkgKiA2fWRlZylgLFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJzZWNfaGFuZFwiXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHRyYW5zZm9ybTogYHJvdGF0ZVooJHt0aW1lLmdldFNlY29uZHMoKSAqIDZ9ZGVnKWAsXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidHdlbHZlXCI+PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJvbmVcIj48L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInR3b1wiPjwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGhyZWVcIj48L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvdXJcIj48L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZpdmVcIj48L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNpeFwiPjwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2V2ZW5cIj48L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImVpZ2h0XCI+PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuaW5lXCI+PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZW5cIj48L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImVsZXZlblwiPjwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICAuY2xvY2sge1xuICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgY29sb3I6ICM0NDQ7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNsb2NrOjphZnRlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICB3aWR0aDogNHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA0cHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgICAgIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5ob3VyX2hhbmQge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgd2lkdGg6IDJweDtcbiAgICAgICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyMjI7XG4gICAgICAgICAgICB0b3A6IDMwJTtcbiAgICAgICAgICAgIGxlZnQ6IDQ5JTtcbiAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubWluX2hhbmQge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgd2lkdGg6IDJweDtcbiAgICAgICAgICAgIGhlaWdodDogODBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xuICAgICAgICAgICAgdG9wOiAyMi41JTtcbiAgICAgICAgICAgIGxlZnQ6IDQ5JTtcbiAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuc2VjX2hhbmQge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgd2lkdGg6IDJweDtcbiAgICAgICAgICAgIGhlaWdodDogMTE4cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgICAgICAgICAgIHRvcDogMTAuNSU7XG4gICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b207XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNsb2NrIHNwYW4ge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiU291cmNlIFNhbnMgUHJvXCIsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC50d2VsdmUge1xuICAgICAgICAgICAgdG9wOiAxMHB4O1xuICAgICAgICAgICAgbGVmdDogNDYlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5vbmUge1xuICAgICAgICAgICAgdG9wOiAxMCU7XG4gICAgICAgICAgICByaWdodDogMjYlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5lbGV2ZW4ge1xuICAgICAgICAgICAgdG9wOiAxMCU7XG4gICAgICAgICAgICBsZWZ0OiAyNiU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnR3byB7XG4gICAgICAgICAgICB0b3A6IDI1JTtcbiAgICAgICAgICAgIHJpZ2h0OiAxMCU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnRocmVlIHtcbiAgICAgICAgICAgIHJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgdG9wOiA0NiU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmZvdXIge1xuICAgICAgICAgICAgcmlnaHQ6IDMwcHg7XG4gICAgICAgICAgICB0b3A6IDY3JTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuZml2ZSB7XG4gICAgICAgICAgICByaWdodDogNzhweDtcbiAgICAgICAgICAgIHRvcDogODAlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5zaXgge1xuICAgICAgICAgICAgYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5zZXZlbiB7XG4gICAgICAgICAgICBsZWZ0OiA4MHB4O1xuICAgICAgICAgICAgdG9wOiA4MiU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmVpZ2h0IHtcbiAgICAgICAgICAgIGxlZnQ6IDMwcHg7XG4gICAgICAgICAgICB0b3A6IDY3JTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubmluZSB7XG4gICAgICAgICAgICBsZWZ0OiAxMHB4O1xuICAgICAgICAgICAgdG9wOiA0NiU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnRlbiB7XG4gICAgICAgICAgICB0b3A6IDI1JTtcbiAgICAgICAgICAgIGxlZnQ6IDEwJTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2xvY2s7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Clock.js\n");

/***/ })

})