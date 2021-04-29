webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Clock.js":
/*!*****************************!*\
  !*** ./components/Clock.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_SVG__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/SVG */ \"./utils/SVG.js\");\n\n\nvar _jsxFileName = \"/Users/chaewonkang/Work/YinYang/components/Clock.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar Clock = function Clock() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(new Date()),\n      time = _useState[0],\n      setTime = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    window.setInterval(function () {\n      setTime(new Date());\n    }, 1000);\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"jsx-743279843\" + \" \" + \"clock_area\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_utils_SVG__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      className: \"clock_bg\",\n      name: \"clock\",\n      height: \"91\",\n      color: \"\",\n      viewBox: \"0 0 152 91\",\n      g: true,\n      transform: \"translate(-1016.7 -141.722)\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"jsx-743279843\" + \" \" + \"clock\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        style: {\n          transform: \"rotateZ(\".concat(time.getHours() * 30, \"deg)\")\n        },\n        className: \"jsx-743279843\" + \" \" + \"hour_hand\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        style: {\n          transform: \"rotateZ(\".concat(time.getMinutes() * 6, \"deg)\")\n        },\n        className: \"jsx-743279843\" + \" \" + \"min_hand\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        style: {\n          transform: \"rotateZ(\".concat(time.getSeconds() * 6, \"deg)\")\n        },\n        className: \"jsx-743279843\" + \" \" + \"sec_hand\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        className: \"jsx-743279843\" + \" \" + \"twelve\",\n        children: \"12\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        className: \"jsx-743279843\" + \" \" + \"one\",\n        children: \"1\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        className: \"jsx-743279843\" + \" \" + \"two\",\n        children: \"2\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        className: \"jsx-743279843\" + \" \" + \"three\",\n        children: \"3\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        className: \"jsx-743279843\" + \" \" + \"four\",\n        children: \"4\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        className: \"jsx-743279843\" + \" \" + \"five\",\n        children: \"5\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        className: \"jsx-743279843\" + \" \" + \"six\",\n        children: \"6\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        className: \"jsx-743279843\" + \" \" + \"seven\",\n        children: \"7\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        className: \"jsx-743279843\" + \" \" + \"eight\",\n        children: \"8\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        className: \"jsx-743279843\" + \" \" + \"nine\",\n        children: \"9\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        className: \"jsx-743279843\" + \" \" + \"ten\",\n        children: \"10\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        className: \"jsx-743279843\" + \" \" + \"eleven\",\n        children: \"11\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      id: \"743279843\",\n      children: \".clock_area.jsx-743279843{position:relative;}.clock.jsx-743279843{width:152px;height:152px;border-radius:50%;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);font-size:24px;color:#444;text-align:center;}.clock_bg.jsx-743279843{position:absolute;}.hour_hand.jsx-743279843{position:absolute;width:1px;height:60px;background:#222;top:29.1%;left:49.6%;-webkit-transform-origin:bottom;-ms-transform-origin:bottom;transform-origin:bottom;}.min_hand.jsx-743279843{position:absolute;width:1px;height:80px;background:black;top:22.8%;left:50%;-webkit-transform-origin:bottom;-ms-transform-origin:bottom;transform-origin:bottom;}.sec_hand.jsx-743279843{position:absolute;width:1px;height:118px;background:black;top:10%;left:50%;-webkit-transform-origin:bottom;-ms-transform-origin:bottom;transform-origin:bottom;}.clock.jsx-743279843 span.jsx-743279843{position:absolute;font-family:\\\"Source Sans Pro\\\",sans-serif;font-size:10px;}.twelve.jsx-743279843{top:0px;left:50%;}.one.jsx-743279843{top:15%;right:30%;}.two.jsx-743279843{top:30%;right:15%;}.three.jsx-743279843{top:50%;right:0;}.four.jsx-743279843{top:55%;right:55%;}.five.jsx-743279843{right:78px;top:80%;}.six.jsx-743279843{bottom:10px;left:50%;}.seven.jsx-743279843{left:80px;top:82%;}.eight.jsx-743279843{left:30px;top:67%;}.nine.jsx-743279843{left:10px;top:46%;}.ten.jsx-743279843{top:25%;left:10%;}.eleven.jsx-743279843{top:10%;left:30%;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGFld29ua2FuZy9Xb3JrL1lpbllhbmcvY29tcG9uZW50cy9DbG9jay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3RFMsQUFHK0IsQUFHTixBQWFNLEFBSUEsQUFVQSxBQVVBLEFBVUEsQUFNVixBQUtBLEFBS0EsQUFLQSxBQUtBLEFBS0csQUFLQyxBQUtGLEFBS0EsQUFLQSxBQUtGLEFBS0EsUUF0REMsQUFLQyxBQUtBLEFBS0YsQUFLRSxBQThCRCxBQUtBLEVBcEJELEFBS0EsQUFLQSxDQXBCQSxDQTlFSyxBQW1GSixJQWRYLENBZkEsQUFrREEsQUFLQSxDQWhIQSxBQWdCQSxBQUlZLEFBVUEsQUFVQSxBQVVnQyxBQVk1QyxBQUtBLEFBVUEsQUFlQSxBQUtBLEFBS0EsQ0FwQkEsRUFLQSxJQW5Gb0IsR0FpQk4sQUFVQSxBQVVDLFlBbkJHLEFBVUMsQ0FVQSxFQXJDQyxhQWtCUixDQVVBLENBVUYsQ0FRTyxFQTdDUCxLQWtCRyxBQW9CRixDQVZBLEVBM0JBLEtBNkNYLENBUDBCLENBVkEsQ0FWQSxDQWpCUSxpRkFzQ2xDLENBVkEsQ0FWQSxzQkFqQmlCLGVBQ0osV0FDTyxrQkFDcEIiLCJmaWxlIjoiL1VzZXJzL2NoYWV3b25rYW5nL1dvcmsvWWluWWFuZy9jb21wb25lbnRzL0Nsb2NrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFNWRyBmcm9tIFwiLi4vdXRpbHMvU1ZHXCI7XG5cbmNvbnN0IENsb2NrID0gKCkgPT4ge1xuICBjb25zdCBbdGltZSwgc2V0VGltZV0gPSB1c2VTdGF0ZShuZXcgRGF0ZSgpKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHdpbmRvdy5zZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBzZXRUaW1lKG5ldyBEYXRlKCkpO1xuICAgIH0sIDEwMDApO1xuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xvY2tfYXJlYVwiPlxuICAgICAgPFNWR1xuICAgICAgICBjbGFzc05hbWU9XCJjbG9ja19iZ1wiXG4gICAgICAgIG5hbWU9XCJjbG9ja1wiXG4gICAgICAgIGhlaWdodD1cIjkxXCJcbiAgICAgICAgY29sb3I9XCJcIlxuICAgICAgICB2aWV3Qm94PVwiMCAwIDE1MiA5MVwiXG4gICAgICAgIGc9e3RydWV9XG4gICAgICAgIHRyYW5zZm9ybT17XCJ0cmFuc2xhdGUoLTEwMTYuNyAtMTQxLjcyMilcIn1cbiAgICAgIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsb2NrXCI+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJob3VyX2hhbmRcIlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IGByb3RhdGVaKCR7dGltZS5nZXRIb3VycygpICogMzB9ZGVnKWAsXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cIm1pbl9oYW5kXCJcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBgcm90YXRlWigke3RpbWUuZ2V0TWludXRlcygpICogNn1kZWcpYCxcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwic2VjX2hhbmRcIlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IGByb3RhdGVaKCR7dGltZS5nZXRTZWNvbmRzKCkgKiA2fWRlZylgLFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInR3ZWx2ZVwiPjEyPC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJvbmVcIj4xPC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0d29cIj4yPC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aHJlZVwiPjM8L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvdXJcIj40PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmaXZlXCI+NTwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2l4XCI+Njwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2V2ZW5cIj43PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlaWdodFwiPjg8L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5pbmVcIj45PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZW5cIj4xMDwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZWxldmVuXCI+MTE8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgLmNsb2NrX2FyZWEge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY2xvY2sge1xuICAgICAgICAgICAgd2lkdGg6IDE1MnB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxNTJweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICBjb2xvcjogIzQ0NDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY2xvY2tfYmcge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5ob3VyX2hhbmQge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgd2lkdGg6IDFweDtcbiAgICAgICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyMjI7XG4gICAgICAgICAgICB0b3A6IDI5LjElO1xuICAgICAgICAgICAgbGVmdDogNDkuNiU7XG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b207XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm1pbl9oYW5kIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHdpZHRoOiAxcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgICAgICAgICAgIHRvcDogMjIuOCU7XG4gICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b207XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnNlY19oYW5kIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHdpZHRoOiAxcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDExOHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgICAgICAgICB0b3A6IDEwJTtcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY2xvY2sgc3BhbiB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJTb3VyY2UgU2FucyBQcm9cIiwgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudHdlbHZlIHtcbiAgICAgICAgICAgIHRvcDogMHB4O1xuICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5vbmUge1xuICAgICAgICAgICAgdG9wOiAxNSU7XG4gICAgICAgICAgICByaWdodDogMzAlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC50d28ge1xuICAgICAgICAgICAgdG9wOiAzMCU7XG4gICAgICAgICAgICByaWdodDogMTUlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC50aHJlZSB7XG4gICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5mb3VyIHtcbiAgICAgICAgICAgIHRvcDogNTUlO1xuICAgICAgICAgICAgcmlnaHQ6IDU1JTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuZml2ZSB7XG4gICAgICAgICAgICByaWdodDogNzhweDtcbiAgICAgICAgICAgIHRvcDogODAlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5zaXgge1xuICAgICAgICAgICAgYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5zZXZlbiB7XG4gICAgICAgICAgICBsZWZ0OiA4MHB4O1xuICAgICAgICAgICAgdG9wOiA4MiU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmVpZ2h0IHtcbiAgICAgICAgICAgIGxlZnQ6IDMwcHg7XG4gICAgICAgICAgICB0b3A6IDY3JTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubmluZSB7XG4gICAgICAgICAgICBsZWZ0OiAxMHB4O1xuICAgICAgICAgICAgdG9wOiA0NiU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnRlbiB7XG4gICAgICAgICAgICB0b3A6IDI1JTtcbiAgICAgICAgICAgIGxlZnQ6IDEwJTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuZWxldmVuIHtcbiAgICAgICAgICAgIHRvcDogMTAlO1xuICAgICAgICAgICAgbGVmdDogMzAlO1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDbG9jaztcbiJdfQ== */\\n/*@ sourceURL=/Users/chaewonkang/Work/YinYang/components/Clock.js */\"\n    }, void 0, false, void 0, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 14,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Clock, \"I0+7QaEsXHXB0XO5JypI3yBHjPI=\");\n\n_c = Clock;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Clock);\n\nvar _c;\n\n$RefreshReg$(_c, \"Clock\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DbG9jay5qcz9mMTI5Il0sIm5hbWVzIjpbIkNsb2NrIiwidXNlU3RhdGUiLCJEYXRlIiwidGltZSIsInNldFRpbWUiLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJzZXRJbnRlcnZhbCIsInRyYW5zZm9ybSIsImdldEhvdXJzIiwiZ2V0TWludXRlcyIsImdldFNlY29uZHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUFBLGtCQUNNQyxzREFBUSxDQUFDLElBQUlDLElBQUosRUFBRCxDQURkO0FBQUEsTUFDWEMsSUFEVztBQUFBLE1BQ0xDLE9BREs7O0FBR2xCQyx5REFBUyxDQUFDLFlBQU07QUFDZEMsVUFBTSxDQUFDQyxXQUFQLENBQW1CLFlBQU07QUFDdkJILGFBQU8sQ0FBQyxJQUFJRixJQUFKLEVBQUQsQ0FBUDtBQUNELEtBRkQsRUFFRyxJQUZIO0FBR0QsR0FKUSxDQUFUO0FBTUEsc0JBQ0U7QUFBQSx1Q0FBZSxZQUFmO0FBQUEsNEJBQ0UscUVBQUMsa0RBQUQ7QUFDRSxlQUFTLEVBQUMsVUFEWjtBQUVFLFVBQUksRUFBQyxPQUZQO0FBR0UsWUFBTSxFQUFDLElBSFQ7QUFJRSxXQUFLLEVBQUMsRUFKUjtBQUtFLGFBQU8sRUFBQyxZQUxWO0FBTUUsT0FBQyxFQUFFLElBTkw7QUFPRSxlQUFTLEVBQUU7QUFQYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFVRTtBQUFBLHlDQUFlLE9BQWY7QUFBQSw4QkFDRTtBQUVFLGFBQUssRUFBRTtBQUNMTSxtQkFBUyxvQkFBYUwsSUFBSSxDQUFDTSxRQUFMLEtBQWtCLEVBQS9CO0FBREosU0FGVDtBQUFBLDJDQUNZO0FBRFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBT0U7QUFFRSxhQUFLLEVBQUU7QUFDTEQsbUJBQVMsb0JBQWFMLElBQUksQ0FBQ08sVUFBTCxLQUFvQixDQUFqQztBQURKLFNBRlQ7QUFBQSwyQ0FDWTtBQURaO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFQRixlQWFFO0FBRUUsYUFBSyxFQUFFO0FBQ0xGLG1CQUFTLG9CQUFhTCxJQUFJLENBQUNRLFVBQUwsS0FBb0IsQ0FBakM7QUFESixTQUZUO0FBQUEsMkNBQ1k7QUFEWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBYkYsZUFtQkU7QUFBQSwyQ0FBZ0IsUUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFuQkYsZUFvQkU7QUFBQSwyQ0FBZ0IsS0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFwQkYsZUFxQkU7QUFBQSwyQ0FBZ0IsS0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFyQkYsZUFzQkU7QUFBQSwyQ0FBZ0IsT0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF0QkYsZUF1QkU7QUFBQSwyQ0FBZ0IsTUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF2QkYsZUF3QkU7QUFBQSwyQ0FBZ0IsTUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF4QkYsZUF5QkU7QUFBQSwyQ0FBZ0IsS0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF6QkYsZUEwQkU7QUFBQSwyQ0FBZ0IsT0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUExQkYsZUEyQkU7QUFBQSwyQ0FBZ0IsT0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUEzQkYsZUE0QkU7QUFBQSwyQ0FBZ0IsTUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUE1QkYsZUE2QkU7QUFBQSwyQ0FBZ0IsS0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUE3QkYsZUE4QkU7QUFBQSwyQ0FBZ0IsUUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUE5QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFvS0QsQ0E3S0Q7O0dBQU1YLEs7O0tBQUFBLEs7QUErS1NBLG9FQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9DbG9jay5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBTVkcgZnJvbSBcIi4uL3V0aWxzL1NWR1wiO1xuXG5jb25zdCBDbG9jayA9ICgpID0+IHtcbiAgY29uc3QgW3RpbWUsIHNldFRpbWVdID0gdXNlU3RhdGUobmV3IERhdGUoKSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aW5kb3cuc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgc2V0VGltZShuZXcgRGF0ZSgpKTtcbiAgICB9LCAxMDAwKTtcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNsb2NrX2FyZWFcIj5cbiAgICAgIDxTVkdcbiAgICAgICAgY2xhc3NOYW1lPVwiY2xvY2tfYmdcIlxuICAgICAgICBuYW1lPVwiY2xvY2tcIlxuICAgICAgICBoZWlnaHQ9XCI5MVwiXG4gICAgICAgIGNvbG9yPVwiXCJcbiAgICAgICAgdmlld0JveD1cIjAgMCAxNTIgOTFcIlxuICAgICAgICBnPXt0cnVlfVxuICAgICAgICB0cmFuc2Zvcm09e1widHJhbnNsYXRlKC0xMDE2LjcgLTE0MS43MjIpXCJ9XG4gICAgICAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbG9ja1wiPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwiaG91cl9oYW5kXCJcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBgcm90YXRlWigke3RpbWUuZ2V0SG91cnMoKSAqIDMwfWRlZylgLFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJtaW5faGFuZFwiXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHRyYW5zZm9ybTogYHJvdGF0ZVooJHt0aW1lLmdldE1pbnV0ZXMoKSAqIDZ9ZGVnKWAsXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cInNlY19oYW5kXCJcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBgcm90YXRlWigke3RpbWUuZ2V0U2Vjb25kcygpICogNn1kZWcpYCxcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0d2VsdmVcIj4xMjwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwib25lXCI+MTwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidHdvXCI+Mjwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGhyZWVcIj4zPC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb3VyXCI+NDwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZml2ZVwiPjU8L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNpeFwiPjY8L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNldmVuXCI+Nzwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZWlnaHRcIj44PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuaW5lXCI+OTwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGVuXCI+MTA8L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImVsZXZlblwiPjExPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIC5jbG9ja19hcmVhIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNsb2NrIHtcbiAgICAgICAgICAgIHdpZHRoOiAxNTJweDtcbiAgICAgICAgICAgIGhlaWdodDogMTUycHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgY29sb3I6ICM0NDQ7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNsb2NrX2JnIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuaG91cl9oYW5kIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHdpZHRoOiAxcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMjIyO1xuICAgICAgICAgICAgdG9wOiAyOS4xJTtcbiAgICAgICAgICAgIGxlZnQ6IDQ5LjYlO1xuICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5taW5faGFuZCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB3aWR0aDogMXB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgICAgICAgICB0b3A6IDIyLjglO1xuICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5zZWNfaGFuZCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB3aWR0aDogMXB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxMThweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xuICAgICAgICAgICAgdG9wOiAxMCU7XG4gICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b207XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNsb2NrIHNwYW4ge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiU291cmNlIFNhbnMgUHJvXCIsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnR3ZWx2ZSB7XG4gICAgICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAub25lIHtcbiAgICAgICAgICAgIHRvcDogMTUlO1xuICAgICAgICAgICAgcmlnaHQ6IDMwJTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudHdvIHtcbiAgICAgICAgICAgIHRvcDogMzAlO1xuICAgICAgICAgICAgcmlnaHQ6IDE1JTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudGhyZWUge1xuICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuZm91ciB7XG4gICAgICAgICAgICB0b3A6IDU1JTtcbiAgICAgICAgICAgIHJpZ2h0OiA1NSU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmZpdmUge1xuICAgICAgICAgICAgcmlnaHQ6IDc4cHg7XG4gICAgICAgICAgICB0b3A6IDgwJTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuc2l4IHtcbiAgICAgICAgICAgIGJvdHRvbTogMTBweDtcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuc2V2ZW4ge1xuICAgICAgICAgICAgbGVmdDogODBweDtcbiAgICAgICAgICAgIHRvcDogODIlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5laWdodCB7XG4gICAgICAgICAgICBsZWZ0OiAzMHB4O1xuICAgICAgICAgICAgdG9wOiA2NyU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm5pbmUge1xuICAgICAgICAgICAgbGVmdDogMTBweDtcbiAgICAgICAgICAgIHRvcDogNDYlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC50ZW4ge1xuICAgICAgICAgICAgdG9wOiAyNSU7XG4gICAgICAgICAgICBsZWZ0OiAxMCU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmVsZXZlbiB7XG4gICAgICAgICAgICB0b3A6IDEwJTtcbiAgICAgICAgICAgIGxlZnQ6IDMwJTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2xvY2s7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Clock.js\n");

/***/ })

})