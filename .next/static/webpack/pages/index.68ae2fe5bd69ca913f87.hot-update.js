webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Slider.js":
/*!******************************!*\
  !*** ./components/Slider.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Slider; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _jsxFileName = \"/Users/chaewonkang/Work/YinYang/components/Slider.js\",\n    _s = $RefreshSig$();\n\n\n\nfunction Slider(_ref) {\n  _s();\n\n  var _this = this;\n\n  var items = _ref.items;\n  var TOTAL_SLIDES = items.length;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(1),\n      currentSlide = _useState[0],\n      setCurrentSlide = _useState[1];\n\n  var slideRef = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"])(null);\n\n  var nextSlide = function nextSlide() {\n    if (currentSlide >= TOTAL_SLIDES) {\n      setCurrentSlide(1);\n    } else {\n      setCurrentSlide(currentSlide + 1);\n    }\n  };\n\n  var prevSlide = function prevSlide() {\n    if (currentSlide === 1) {\n      setCurrentSlide(TOTAL_SLIDES);\n    } else {\n      setCurrentSlide(currentSlide - 1);\n    }\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    slideRef.current.style.transition = \"all 0.5s ease-in-out\";\n    slideRef.current.style.transform = \"translateX(-\".concat(currentSlide - 1, \"00%)\");\n  }, [currentSlide]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"jsx-80669343\" + \" \" + \"slider_wrapper\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"jsx-80669343\" + \" \" + \"slider_container\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          ref: slideRef,\n          className: \"jsx-80669343\" + \" \" + \"slide\",\n          children: items.map(function (item, key) {\n            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n              src: item.photo,\n              className: \"jsx-80669343\" + \" \" + \"img\"\n            }, key, false, {\n              fileName: _jsxFileName,\n              lineNumber: 33,\n              columnNumber: 15\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"jsx-80669343\" + \" \" + \"arrows_and_number_container\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          onClick: prevSlide,\n          className: \"jsx-80669343\" + \" \" + \"navigate_left_button\",\n          children: [\"LEFT\", \" \"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          onClick: nextSlide,\n          className: \"jsx-80669343\" + \" \" + \"navigate_right_button\",\n          children: [\"RIGHT\", \" \"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"jsx-80669343\" + \" \" + \"content_info\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"jsx-80669343\" + \" \" + \"content_info_text\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"jsx-80669343\" + \" \" + \"title\",\n          children: \"Axe and Dummyheads,\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"jsx-80669343\" + \" \" + \"where\",\n          children: \"Insa Art Space,\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"jsx-80669343\" + \" \" + \"when\",\n          children: \"2020\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"jsx-80669343\" + \" \" + \"category\",\n          children: \"[Exhibition Identity, Printed Matter]\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"jsx-80669343\" + \" \" + \"date\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          className: \"jsx-80669343\",\n          children: [currentSlide, \" / \", TOTAL_SLIDES]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      id: \"80669343\",\n      children: \".slider_container.jsx-80669343{height:auto;max-height:auto;overflow:hidden;position:relative;}.slide.jsx-80669343{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;position:relative;}.img.jsx-80669343{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;jusitfy-self:center;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;}.slider_wrapper.jsx-80669343{position:relative;overflow:hidden;height:inherit;}.arrows_and_number_container.jsx-80669343{display:grid;width:100%;grid-template-columns:1fr 1fr;position:absolute;height:100%;top:0;}.navigate_left_button.jsx-80669343{left:0;height:100%;}.navigate_right_button.jsx-80669343{right:0;text-align:right;height:100%;}button.jsx-80669343{color:#000;width:100px;height:100%;}button.jsx-80669343: hover.jsx-80669343{-webkit-transition:all 0.3s ease-in-out;transition:all 0.3s ease-in-out;color:#000;}.slider_container.jsx-80669343{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.date.jsx-80669343{position:relative;right:0;top:0px;text-align:right;z-index:3;}.content_container.jsx-80669343{height:auto;}.content_info.jsx-80669343{display:grid;grid-template-columns:repeat(2,auto);margin-top:5px;}.content_info_text.jsx-80669343{display:inline;}.title.jsx-80669343,.where.jsx-80669343,.when.jsx-80669343{display:inline;padding-right:0.5em;font-size:17px;}.category.jsx-80669343{display:inline;font-size:11px;}.pages.jsx-80669343{text-align:right;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGFld29ua2FuZy9Xb3JrL1lpbllhbmcvY29tcG9uZW50cy9TbGlkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNERrQixBQUd1QixBQU9DLEFBTUYsQUFPTyxBQU1MLEFBU04sQUFLQyxBQU9HLEFBTXFCLEFBS25CLEFBSUssQUFRTixBQUlDLEFBTUUsQUFNQSxBQU1BLEFBS0UsT0E3REwsQ0FLSyxHQTNCSixBQWtDRCxDQS9DSSxBQXNFbEIsQ0E1Q2EsQUFnRDJCLEVBTXhDLEFBTXNCLEFBTUwsRUFLakIsQ0E3RWtCLEFBMENSLENBMUJWLElBWWMsQ0FyQmtCLENBY2xCLENBc0JKLEVBOURRLEVBNEZsQixJQXhFaUIsQUEyQ0UsQ0FmbkIsQUFzQ2lCLEVBN0NqQixPQXhDb0IsS0FvQnBCLENBcURpQixBQWFqQixDQXZCWSxHQXJDUSxPQXNDcEIsQ0EvREEsR0F5RUEsT0EvQ2MsQUF3QkQsRUE5Q0EsQUFtRGIsU0FKQSxDQXhCUSxDQXRCWSxBQU1FLEtBaUJ0QixhQXRCQSxFQU1vQix1RUFDcEIiLCJmaWxlIjoiL1VzZXJzL2NoYWV3b25rYW5nL1dvcmsvWWluWWFuZy9jb21wb25lbnRzL1NsaWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTbGlkZXIoeyBpdGVtcyB9KSB7XG4gIGNvbnN0IFRPVEFMX1NMSURFUyA9IGl0ZW1zLmxlbmd0aDtcbiAgY29uc3QgW2N1cnJlbnRTbGlkZSwgc2V0Q3VycmVudFNsaWRlXSA9IHVzZVN0YXRlKDEpO1xuICBjb25zdCBzbGlkZVJlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgbmV4dFNsaWRlID0gKCkgPT4ge1xuICAgIGlmIChjdXJyZW50U2xpZGUgPj0gVE9UQUxfU0xJREVTKSB7XG4gICAgICBzZXRDdXJyZW50U2xpZGUoMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldEN1cnJlbnRTbGlkZShjdXJyZW50U2xpZGUgKyAxKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IHByZXZTbGlkZSA9ICgpID0+IHtcbiAgICBpZiAoY3VycmVudFNsaWRlID09PSAxKSB7XG4gICAgICBzZXRDdXJyZW50U2xpZGUoVE9UQUxfU0xJREVTKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0Q3VycmVudFNsaWRlKGN1cnJlbnRTbGlkZSAtIDEpO1xuICAgIH1cbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNsaWRlUmVmLmN1cnJlbnQuc3R5bGUudHJhbnNpdGlvbiA9IFwiYWxsIDAuNXMgZWFzZS1pbi1vdXRcIjtcbiAgICBzbGlkZVJlZi5jdXJyZW50LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKC0ke2N1cnJlbnRTbGlkZSAtIDF9MDAlKWA7XG4gIH0sIFtjdXJyZW50U2xpZGVdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlcl93cmFwcGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGVyX2NvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGVcIiByZWY9e3NsaWRlUmVmfT5cbiAgICAgICAgICAgIHtpdGVtcy5tYXAoKGl0ZW0sIGtleSkgPT4gKFxuICAgICAgICAgICAgICA8aW1nIGtleT17a2V5fSBjbGFzc05hbWU9XCJpbWdcIiBzcmM9e2l0ZW0ucGhvdG99IC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnJvd3NfYW5kX251bWJlcl9jb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmlnYXRlX2xlZnRfYnV0dG9uXCIgb25DbGljaz17cHJldlNsaWRlfT5cbiAgICAgICAgICAgIExFRlR7XCIgXCJ9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZpZ2F0ZV9yaWdodF9idXR0b25cIiBvbkNsaWNrPXtuZXh0U2xpZGV9PlxuICAgICAgICAgICAgUklHSFR7XCIgXCJ9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfaW5mb1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfaW5mb190ZXh0XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPkF4ZSBhbmQgRHVtbXloZWFkcyw8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndoZXJlXCI+SW5zYSBBcnQgU3BhY2UsPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aGVuXCI+MjAyMDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2F0ZWdvcnlcIj5bRXhoaWJpdGlvbiBJZGVudGl0eSwgUHJpbnRlZCBNYXR0ZXJdPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGVcIj5cbiAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgIHtjdXJyZW50U2xpZGV9IC8ge1RPVEFMX1NMSURFU31cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnNsaWRlcl9jb250YWluZXIge1xuICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICBtYXgtaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNsaWRlIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pbWcge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzaXRmeS1zZWxmOiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNsaWRlcl93cmFwcGVyIHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICBoZWlnaHQ6IGluaGVyaXQ7XG4gICAgICAgIH1cblxuICAgICAgICAuYXJyb3dzX2FuZF9udW1iZXJfY29udGFpbmVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5uYXZpZ2F0ZV9sZWZ0X2J1dHRvbiB7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICAubmF2aWdhdGVfcmlnaHRfYnV0dG9uIHtcbiAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgIC8vICAgIGFsbDogdW5zZXQ7XG4gICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJ1dHRvbjogaG92ZXIge1xuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNsaWRlcl9jb250YWluZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIH1cblxuICAgICAgICAuZGF0ZSB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgIHRvcDogMHB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgIHotaW5kZXg6IDM7XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGVudF9jb250YWluZXIge1xuICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250ZW50X2luZm8ge1xuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgYXV0byk7XG4gICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRlbnRfaW5mb190ZXh0IHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgICAgIH1cblxuICAgICAgICAudGl0bGUsXG4gICAgICAgIC53aGVyZSxcbiAgICAgICAgLndoZW4ge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwLjVlbTtcbiAgICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuY2F0ZWdvcnkge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgIH1cblxuICAgICAgICAucGFnZXMge1xuICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC8+XG4gICk7XG59XG4iXX0= */\\n/*@ sourceURL=/Users/chaewonkang/Work/YinYang/components/Slider.js */\"\n    }, void 0, false, void 0, this)]\n  }, void 0, true);\n}\n\n_s(Slider, \"vcM1cVHTXQ6WG+YDZOU1MhmoEIM=\");\n\n_c = Slider;\n\nvar _c;\n\n$RefreshReg$(_c, \"Slider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TbGlkZXIuanM/MDQxNCJdLCJuYW1lcyI6WyJTbGlkZXIiLCJpdGVtcyIsIlRPVEFMX1NMSURFUyIsImxlbmd0aCIsInVzZVN0YXRlIiwiY3VycmVudFNsaWRlIiwic2V0Q3VycmVudFNsaWRlIiwic2xpZGVSZWYiLCJ1c2VSZWYiLCJuZXh0U2xpZGUiLCJwcmV2U2xpZGUiLCJ1c2VFZmZlY3QiLCJjdXJyZW50Iiwic3R5bGUiLCJ0cmFuc2l0aW9uIiwidHJhbnNmb3JtIiwibWFwIiwiaXRlbSIsImtleSIsInBob3RvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVlLFNBQVNBLE1BQVQsT0FBMkI7QUFBQTs7QUFBQTs7QUFBQSxNQUFUQyxLQUFTLFFBQVRBLEtBQVM7QUFDeEMsTUFBTUMsWUFBWSxHQUFHRCxLQUFLLENBQUNFLE1BQTNCOztBQUR3QyxrQkFFQUMsc0RBQVEsQ0FBQyxDQUFELENBRlI7QUFBQSxNQUVqQ0MsWUFGaUM7QUFBQSxNQUVuQkMsZUFGbUI7O0FBR3hDLE1BQU1DLFFBQVEsR0FBR0Msb0RBQU0sQ0FBQyxJQUFELENBQXZCOztBQUNBLE1BQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFDdEIsUUFBSUosWUFBWSxJQUFJSCxZQUFwQixFQUFrQztBQUNoQ0kscUJBQWUsQ0FBQyxDQUFELENBQWY7QUFDRCxLQUZELE1BRU87QUFDTEEscUJBQWUsQ0FBQ0QsWUFBWSxHQUFHLENBQWhCLENBQWY7QUFDRDtBQUNGLEdBTkQ7O0FBT0EsTUFBTUssU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUN0QixRQUFJTCxZQUFZLEtBQUssQ0FBckIsRUFBd0I7QUFDdEJDLHFCQUFlLENBQUNKLFlBQUQsQ0FBZjtBQUNELEtBRkQsTUFFTztBQUNMSSxxQkFBZSxDQUFDRCxZQUFZLEdBQUcsQ0FBaEIsQ0FBZjtBQUNEO0FBQ0YsR0FORDs7QUFRQU0seURBQVMsQ0FBQyxZQUFNO0FBQ2RKLFlBQVEsQ0FBQ0ssT0FBVCxDQUFpQkMsS0FBakIsQ0FBdUJDLFVBQXZCLEdBQW9DLHNCQUFwQztBQUNBUCxZQUFRLENBQUNLLE9BQVQsQ0FBaUJDLEtBQWpCLENBQXVCRSxTQUF2Qix5QkFBa0RWLFlBQVksR0FBRyxDQUFqRTtBQUNELEdBSFEsRUFHTixDQUFDQSxZQUFELENBSE0sQ0FBVDtBQUtBLHNCQUNFO0FBQUEsNEJBQ0U7QUFBQSx3Q0FBZSxnQkFBZjtBQUFBLDhCQUNFO0FBQUEsMENBQWUsa0JBQWY7QUFBQSwrQkFDRTtBQUF1QixhQUFHLEVBQUVFLFFBQTVCO0FBQUEsNENBQWUsT0FBZjtBQUFBLG9CQUNHTixLQUFLLENBQUNlLEdBQU4sQ0FBVSxVQUFDQyxJQUFELEVBQU9DLEdBQVA7QUFBQSxnQ0FDVDtBQUErQixpQkFBRyxFQUFFRCxJQUFJLENBQUNFLEtBQXpDO0FBQUEsZ0RBQXlCO0FBQXpCLGVBQVVELEdBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEUztBQUFBLFdBQVY7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBU0U7QUFBQSwwQ0FBZSw2QkFBZjtBQUFBLGdDQUNFO0FBQXNDLGlCQUFPLEVBQUVSLFNBQS9DO0FBQUEsNENBQWUsc0JBQWY7QUFBQSw2QkFDTyxHQURQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUlFO0FBQXVDLGlCQUFPLEVBQUVELFNBQWhEO0FBQUEsNENBQWUsdUJBQWY7QUFBQSw4QkFDUSxHQURSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQW1CRTtBQUFBLHdDQUFlLGNBQWY7QUFBQSw4QkFDRTtBQUFBLDBDQUFlLG1CQUFmO0FBQUEsZ0NBQ0U7QUFBQSw0Q0FBZSxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUU7QUFBQSw0Q0FBZSxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGLGVBR0U7QUFBQSw0Q0FBZSxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhGLGVBSUU7QUFBQSw0Q0FBZSxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBT0U7QUFBQSwwQ0FBZSxNQUFmO0FBQUEsK0JBQ0U7QUFBQTtBQUFBLHFCQUNHSixZQURILFNBQ29CSCxZQURwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbkJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREY7QUEwSUQ7O0dBbEt1QkYsTTs7S0FBQUEsTSIsImZpbGUiOiIuL2NvbXBvbmVudHMvU2xpZGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNsaWRlcih7IGl0ZW1zIH0pIHtcbiAgY29uc3QgVE9UQUxfU0xJREVTID0gaXRlbXMubGVuZ3RoO1xuICBjb25zdCBbY3VycmVudFNsaWRlLCBzZXRDdXJyZW50U2xpZGVdID0gdXNlU3RhdGUoMSk7XG4gIGNvbnN0IHNsaWRlUmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBuZXh0U2xpZGUgPSAoKSA9PiB7XG4gICAgaWYgKGN1cnJlbnRTbGlkZSA+PSBUT1RBTF9TTElERVMpIHtcbiAgICAgIHNldEN1cnJlbnRTbGlkZSgxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0Q3VycmVudFNsaWRlKGN1cnJlbnRTbGlkZSArIDEpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgcHJldlNsaWRlID0gKCkgPT4ge1xuICAgIGlmIChjdXJyZW50U2xpZGUgPT09IDEpIHtcbiAgICAgIHNldEN1cnJlbnRTbGlkZShUT1RBTF9TTElERVMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRDdXJyZW50U2xpZGUoY3VycmVudFNsaWRlIC0gMSk7XG4gICAgfVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2xpZGVSZWYuY3VycmVudC5zdHlsZS50cmFuc2l0aW9uID0gXCJhbGwgMC41cyBlYXNlLWluLW91dFwiO1xuICAgIHNsaWRlUmVmLmN1cnJlbnQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoLSR7Y3VycmVudFNsaWRlIC0gMX0wMCUpYDtcbiAgfSwgW2N1cnJlbnRTbGlkZV0pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGVyX3dyYXBwZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZXJfY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZVwiIHJlZj17c2xpZGVSZWZ9PlxuICAgICAgICAgICAge2l0ZW1zLm1hcCgoaXRlbSwga2V5KSA9PiAoXG4gICAgICAgICAgICAgIDxpbWcga2V5PXtrZXl9IGNsYXNzTmFtZT1cImltZ1wiIHNyYz17aXRlbS5waG90b30gLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFycm93c19hbmRfbnVtYmVyX2NvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2aWdhdGVfbGVmdF9idXR0b25cIiBvbkNsaWNrPXtwcmV2U2xpZGV9PlxuICAgICAgICAgICAgTEVGVHtcIiBcIn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmlnYXRlX3JpZ2h0X2J1dHRvblwiIG9uQ2xpY2s9e25leHRTbGlkZX0+XG4gICAgICAgICAgICBSSUdIVHtcIiBcIn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudF9pbmZvXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudF9pbmZvX3RleHRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+QXhlIGFuZCBEdW1teWhlYWRzLDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2hlcmVcIj5JbnNhIEFydCBTcGFjZSw8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndoZW5cIj4yMDIwPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXRlZ29yeVwiPltFeGhpYml0aW9uIElkZW50aXR5LCBQcmludGVkIE1hdHRlcl08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0ZVwiPlxuICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAge2N1cnJlbnRTbGlkZX0gLyB7VE9UQUxfU0xJREVTfVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuc2xpZGVyX2NvbnRhaW5lciB7XG4gICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgIG1heC1oZWlnaHQ6IGF1dG87XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cblxuICAgICAgICAuc2xpZGUge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmltZyB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXNpdGZ5LXNlbGY6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAuc2xpZGVyX3dyYXBwZXIge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIGhlaWdodDogaW5oZXJpdDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hcnJvd3NfYW5kX251bWJlcl9jb250YWluZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLm5hdmlnYXRlX2xlZnRfYnV0dG9uIHtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5uYXZpZ2F0ZV9yaWdodF9idXR0b24ge1xuICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgLy8gICAgYWxsOiB1bnNldDtcbiAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgYnV0dG9uOiBob3ZlciB7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgIH1cblxuICAgICAgICAuc2xpZGVyX2NvbnRhaW5lciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kYXRlIHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgei1pbmRleDogMztcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250ZW50X2NvbnRhaW5lciB7XG4gICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRlbnRfaW5mbyB7XG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBhdXRvKTtcbiAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGVudF9pbmZvX3RleHQge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC50aXRsZSxcbiAgICAgICAgLndoZXJlLFxuICAgICAgICAud2hlbiB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDAuNWVtO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jYXRlZ29yeSB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wYWdlcyB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Slider.js\n");

/***/ })

})