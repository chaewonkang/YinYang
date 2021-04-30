webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Slider.js":
/*!******************************!*\
  !*** ./components/Slider.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Slider; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _img_arrow2x_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/arrow2x.png */ \"./img/arrow2x.png\");\n/* harmony import */ var _img_arrow2x_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_img_arrow2x_png__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _img_arrow2x_left_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/arrow2x_left.png */ \"./img/arrow2x_left.png\");\n/* harmony import */ var _img_arrow2x_left_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_img_arrow2x_left_png__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\nvar _jsxFileName = \"/Users/chaewonkang/Work/YinYang/components/Slider.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\nfunction Slider(_ref) {\n  _s();\n\n  var _this = this;\n\n  var items = _ref.items;\n  var TOTAL_SLIDES = items.length;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(1),\n      currentSlide = _useState[0],\n      setCurrentSlide = _useState[1];\n\n  var slideRef = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"])(null);\n\n  var nextSlide = function nextSlide() {\n    if (currentSlide >= TOTAL_SLIDES) {\n      setCurrentSlide(1);\n    } else {\n      setCurrentSlide(currentSlide + 1);\n    }\n  };\n\n  var prevSlide = function prevSlide() {\n    if (currentSlide === 1) {\n      setCurrentSlide(TOTAL_SLIDES);\n    } else {\n      setCurrentSlide(currentSlide - 1);\n    }\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    slideRef.current.style.transition = \"all 0.5s ease-in-out\";\n    slideRef.current.style.transform = \"translateX(-\".concat(currentSlide - 1, \"00%)\");\n  }, [currentSlide]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"jsx-1905385551\" + \" \" + \"slider_wrapper\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"jsx-1905385551\" + \" \" + \"slider_container\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          ref: slideRef,\n          className: \"jsx-1905385551\" + \" \" + \"slide\",\n          children: items.map(function (item, key) {\n            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n              src: item.photo,\n              className: \"jsx-1905385551\" + \" \" + \"img\"\n            }, key, false, {\n              fileName: _jsxFileName,\n              lineNumber: 35,\n              columnNumber: 15\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"jsx-1905385551\" + \" \" + \"arrows_and_number_container\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          onClick: prevSlide,\n          className: \"jsx-1905385551\" + \" \" + \"navigate_left_button\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            src: _img_arrow2x_left_png__WEBPACK_IMPORTED_MODULE_4___default.a,\n            width: \"50%\",\n            className: \"jsx-1905385551\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 41,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          onClick: nextSlide,\n          className: \"jsx-1905385551\" + \" \" + \"navigate_right_button\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            src: _img_arrow2x_png__WEBPACK_IMPORTED_MODULE_3___default.a,\n            width: \"50%\",\n            className: \"jsx-1905385551\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 44,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"jsx-1905385551\" + \" \" + \"content_info\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"jsx-1905385551\" + \" \" + \"content_info_text\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"jsx-1905385551\" + \" \" + \"title\",\n          children: \"Axe and Dummyheads,\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"jsx-1905385551\" + \" \" + \"where\",\n          children: \"Insa Art Space,\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"jsx-1905385551\" + \" \" + \"when\",\n          children: \"2020\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"jsx-1905385551\" + \" \" + \"category\",\n          children: \"[Exhibition Identity, Printed Matter]\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"jsx-1905385551\" + \" \" + \"date\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          className: \"jsx-1905385551\",\n          children: [currentSlide, \" / \", TOTAL_SLIDES]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      id: \"1905385551\",\n      children: \".slider_wrapper.jsx-1905385551{position:relative;overflow-x:hidden;height:inherit;cursor:pointer;}.slider_container.jsx-1905385551{position:relative;width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;box-sizing:content-box;}.slide.jsx-1905385551{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;position:relative;-webkit-box-pack:center;-webkit-jusitfy-content:center;-ms-flex-pack:center;jusitfy-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.img.jsx-1905385551{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;jusitfy-self:center;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;object-fit:cover;width:100%;}.arrows_and_number_container.jsx-1905385551{display:grid;width:100%;grid-template-columns:1fr 1fr;position:absolute;height:100%;top:0;}.navigate_left_button.jsx-1905385551,.navigate_right_button.jsx-1905385551{height:100%;z-index:10;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.navigate_left_button.jsx-1905385551{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;left:0;padding-left:5%;}.navigate_right_button.jsx-1905385551{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;right:0;padding-right:5%;}.navigate_left_button.jsx-1905385551>img.jsx-1905385551,.navigate_right_button.jsx-1905385551>img.jsx-1905385551{display:none;}.navigate_left_button.jsx-1905385551:hover>img.jsx-1905385551,.navigate_right_button.jsx-1905385551:hover>img.jsx-1905385551{display:block;}button.jsx-1905385551{color:#000;width:100px;height:100%;}button.jsx-1905385551: hover.jsx-1905385551{-webkit-transition:all 0.3s ease-in-out;transition:all 0.3s ease-in-out;color:#000;}.slider_container.jsx-1905385551{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.date.jsx-1905385551{position:relative;right:0;top:0px;text-align:right;z-index:3;}.content_container.jsx-1905385551{height:auto;}.content_info.jsx-1905385551{display:grid;grid-template-columns:repeat(2,auto);margin-top:5px;}.content_info_text.jsx-1905385551{display:inline;}.title.jsx-1905385551,.where.jsx-1905385551,.when.jsx-1905385551{display:inline;padding-right:0.5em;font-size:17px;}.category.jsx-1905385551{display:inline;font-size:11px;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGFld29ua2FuZy9Xb3JrL1lpbllhbmcvY29tcG9uZW50cy9TbGlkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkRrQixBQUc2QixBQU9BLEFBUUwsQUFRQSxBQVFBLEFBVUQsQUFPZSxBQU1GLEFBT1osQUFJQyxBQUtILEFBTXFCLEFBS25CLEFBSUssQUFRTixBQUlDLEFBTUUsQUFNQSxBQU1BLFdBNUNILENBN0JELEFBb0RiLENBOURhLEFBOEJiLEFBb0N3QyxDQWhDeEMsQ0FzQ0EsQUFNc0IsQUFNTCxHQW5IRyxBQU9QLEFBOEVILEtBM0NLLEFBNkJELENBdkNrQixFQXNEdEIsR0E5RUksQ0E0R2QsSUE3Qm1CLENBZm5CLEFBc0NpQixDQTdHQSxLQVFGLFNBeUZFLEFBYWpCLENBN0dpQixBQXNGTCxHQXZEUSxPQXdEcEIsSUFVQSxDQWhHQSxNQStCYyxBQTBDRCxFQTdEQSxBQVFTLEFBMER0QixTQUpBLENBMUNRLENBbkJZLEtBb0JwQixJQVpvQixHQW1CQyxBQVdYLE1BckNlLEVBK0JoQixBQU9VLE9BTkQsR0F2Q08sT0E4Q3pCLE1BTkEsVUF2Q0EsMkJBY21CLGlCQUNOLFFBa0JiLEdBakJBLFNBVHFCLDZGQUNyQiIsImZpbGUiOiIvVXNlcnMvY2hhZXdvbmthbmcvV29yay9ZaW5ZYW5nL2NvbXBvbmVudHMvU2xpZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmlnaHRBcnJvdyBmcm9tIFwiLi4vaW1nL2Fycm93MngucG5nXCI7XG5pbXBvcnQgTGVmdEFycm93IGZyb20gXCIuLi9pbWcvYXJyb3cyeF9sZWZ0LnBuZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTbGlkZXIoeyBpdGVtcyB9KSB7XG4gIGNvbnN0IFRPVEFMX1NMSURFUyA9IGl0ZW1zLmxlbmd0aDtcbiAgY29uc3QgW2N1cnJlbnRTbGlkZSwgc2V0Q3VycmVudFNsaWRlXSA9IHVzZVN0YXRlKDEpO1xuICBjb25zdCBzbGlkZVJlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgbmV4dFNsaWRlID0gKCkgPT4ge1xuICAgIGlmIChjdXJyZW50U2xpZGUgPj0gVE9UQUxfU0xJREVTKSB7XG4gICAgICBzZXRDdXJyZW50U2xpZGUoMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldEN1cnJlbnRTbGlkZShjdXJyZW50U2xpZGUgKyAxKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IHByZXZTbGlkZSA9ICgpID0+IHtcbiAgICBpZiAoY3VycmVudFNsaWRlID09PSAxKSB7XG4gICAgICBzZXRDdXJyZW50U2xpZGUoVE9UQUxfU0xJREVTKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0Q3VycmVudFNsaWRlKGN1cnJlbnRTbGlkZSAtIDEpO1xuICAgIH1cbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNsaWRlUmVmLmN1cnJlbnQuc3R5bGUudHJhbnNpdGlvbiA9IFwiYWxsIDAuNXMgZWFzZS1pbi1vdXRcIjtcbiAgICBzbGlkZVJlZi5jdXJyZW50LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKC0ke2N1cnJlbnRTbGlkZSAtIDF9MDAlKWA7XG4gIH0sIFtjdXJyZW50U2xpZGVdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlcl93cmFwcGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGVyX2NvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGVcIiByZWY9e3NsaWRlUmVmfT5cbiAgICAgICAgICAgIHtpdGVtcy5tYXAoKGl0ZW0sIGtleSkgPT4gKFxuICAgICAgICAgICAgICA8aW1nIGtleT17a2V5fSBjbGFzc05hbWU9XCJpbWdcIiBzcmM9e2l0ZW0ucGhvdG99IC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJyb3dzX2FuZF9udW1iZXJfY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZpZ2F0ZV9sZWZ0X2J1dHRvblwiIG9uQ2xpY2s9e3ByZXZTbGlkZX0+XG4gICAgICAgICAgICA8aW1nIHNyYz17TGVmdEFycm93fSB3aWR0aD1cIjUwJVwiPjwvaW1nPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2aWdhdGVfcmlnaHRfYnV0dG9uXCIgb25DbGljaz17bmV4dFNsaWRlfT5cbiAgICAgICAgICAgIDxpbWcgc3JjPXtSaWdodEFycm93fSB3aWR0aD1cIjUwJVwiPjwvaW1nPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50X2luZm9cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50X2luZm9fdGV4dFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5BeGUgYW5kIER1bW15aGVhZHMsPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aGVyZVwiPkluc2EgQXJ0IFNwYWNlLDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2hlblwiPjIwMjA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhdGVnb3J5XCI+W0V4aGliaXRpb24gSWRlbnRpdHksIFByaW50ZWQgTWF0dGVyXTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRlXCI+XG4gICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICB7Y3VycmVudFNsaWRlfSAvIHtUT1RBTF9TTElERVN9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5zbGlkZXJfd3JhcHBlciB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAgICAgICBoZWlnaHQ6IGluaGVyaXQ7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNsaWRlcl9jb250YWluZXIge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zbGlkZSB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAganVzaXRmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pbWcge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzaXRmeS1zZWxmOiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmFycm93c19hbmRfbnVtYmVyX2NvbnRhaW5lciB7XG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgIH1cblxuICAgICAgICAubmF2aWdhdGVfbGVmdF9idXR0b24sXG4gICAgICAgIC5uYXZpZ2F0ZV9yaWdodF9idXR0b24ge1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICB6LWluZGV4OiAxMDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAubmF2aWdhdGVfbGVmdF9idXR0b24ge1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogNSU7XG4gICAgICAgIH1cblxuICAgICAgICAubmF2aWdhdGVfcmlnaHRfYnV0dG9uIHtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDUlO1xuICAgICAgICB9XG5cbiAgICAgICAgLm5hdmlnYXRlX2xlZnRfYnV0dG9uID4gaW1nLFxuICAgICAgICAubmF2aWdhdGVfcmlnaHRfYnV0dG9uID4gaW1nIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICAgIC5uYXZpZ2F0ZV9sZWZ0X2J1dHRvbiA6aG92ZXIgPiBpbWcsXG4gICAgICAgIC5uYXZpZ2F0ZV9yaWdodF9idXR0b246aG92ZXIgPiBpbWcge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG5cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAvLyAgICBhbGw6IHVuc2V0O1xuICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICBidXR0b246IGhvdmVyIHtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zbGlkZXJfY29udGFpbmVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmRhdGUge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICB6LWluZGV4OiAzO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRlbnRfY29udGFpbmVyIHtcbiAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGVudF9pbmZvIHtcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIGF1dG8pO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250ZW50X2luZm9fdGV4dCB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRpdGxlLFxuICAgICAgICAud2hlcmUsXG4gICAgICAgIC53aGVuIHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMC41ZW07XG4gICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNhdGVnb3J5IHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC8+XG4gICk7XG59XG4iXX0= */\\n/*@ sourceURL=/Users/chaewonkang/Work/YinYang/components/Slider.js */\"\n    }, void 0, false, void 0, this)]\n  }, void 0, true);\n}\n\n_s(Slider, \"vcM1cVHTXQ6WG+YDZOU1MhmoEIM=\");\n\n_c = Slider;\n\nvar _c;\n\n$RefreshReg$(_c, \"Slider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TbGlkZXIuanM/MDQxNCJdLCJuYW1lcyI6WyJTbGlkZXIiLCJpdGVtcyIsIlRPVEFMX1NMSURFUyIsImxlbmd0aCIsInVzZVN0YXRlIiwiY3VycmVudFNsaWRlIiwic2V0Q3VycmVudFNsaWRlIiwic2xpZGVSZWYiLCJ1c2VSZWYiLCJuZXh0U2xpZGUiLCJwcmV2U2xpZGUiLCJ1c2VFZmZlY3QiLCJjdXJyZW50Iiwic3R5bGUiLCJ0cmFuc2l0aW9uIiwidHJhbnNmb3JtIiwibWFwIiwiaXRlbSIsImtleSIsInBob3RvIiwiTGVmdEFycm93IiwiUmlnaHRBcnJvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLE1BQVQsT0FBMkI7QUFBQTs7QUFBQTs7QUFBQSxNQUFUQyxLQUFTLFFBQVRBLEtBQVM7QUFDeEMsTUFBTUMsWUFBWSxHQUFHRCxLQUFLLENBQUNFLE1BQTNCOztBQUR3QyxrQkFFQUMsc0RBQVEsQ0FBQyxDQUFELENBRlI7QUFBQSxNQUVqQ0MsWUFGaUM7QUFBQSxNQUVuQkMsZUFGbUI7O0FBR3hDLE1BQU1DLFFBQVEsR0FBR0Msb0RBQU0sQ0FBQyxJQUFELENBQXZCOztBQUNBLE1BQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFDdEIsUUFBSUosWUFBWSxJQUFJSCxZQUFwQixFQUFrQztBQUNoQ0kscUJBQWUsQ0FBQyxDQUFELENBQWY7QUFDRCxLQUZELE1BRU87QUFDTEEscUJBQWUsQ0FBQ0QsWUFBWSxHQUFHLENBQWhCLENBQWY7QUFDRDtBQUNGLEdBTkQ7O0FBT0EsTUFBTUssU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUN0QixRQUFJTCxZQUFZLEtBQUssQ0FBckIsRUFBd0I7QUFDdEJDLHFCQUFlLENBQUNKLFlBQUQsQ0FBZjtBQUNELEtBRkQsTUFFTztBQUNMSSxxQkFBZSxDQUFDRCxZQUFZLEdBQUcsQ0FBaEIsQ0FBZjtBQUNEO0FBQ0YsR0FORDs7QUFRQU0seURBQVMsQ0FBQyxZQUFNO0FBQ2RKLFlBQVEsQ0FBQ0ssT0FBVCxDQUFpQkMsS0FBakIsQ0FBdUJDLFVBQXZCLEdBQW9DLHNCQUFwQztBQUNBUCxZQUFRLENBQUNLLE9BQVQsQ0FBaUJDLEtBQWpCLENBQXVCRSxTQUF2Qix5QkFBa0RWLFlBQVksR0FBRyxDQUFqRTtBQUNELEdBSFEsRUFHTixDQUFDQSxZQUFELENBSE0sQ0FBVDtBQUtBLHNCQUNFO0FBQUEsNEJBQ0U7QUFBQSwwQ0FBZSxnQkFBZjtBQUFBLDhCQUNFO0FBQUEsNENBQWUsa0JBQWY7QUFBQSwrQkFDRTtBQUF1QixhQUFHLEVBQUVFLFFBQTVCO0FBQUEsOENBQWUsT0FBZjtBQUFBLG9CQUNHTixLQUFLLENBQUNlLEdBQU4sQ0FBVSxVQUFDQyxJQUFELEVBQU9DLEdBQVA7QUFBQSxnQ0FDVDtBQUErQixpQkFBRyxFQUFFRCxJQUFJLENBQUNFLEtBQXpDO0FBQUEsa0RBQXlCO0FBQXpCLGVBQVVELEdBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEUztBQUFBLFdBQVY7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBUUU7QUFBQSw0Q0FBZSw2QkFBZjtBQUFBLGdDQUNFO0FBQXNDLGlCQUFPLEVBQUVSLFNBQS9DO0FBQUEsOENBQWUsc0JBQWY7QUFBQSxpQ0FDRTtBQUFLLGVBQUcsRUFBRVUsNERBQVY7QUFBcUIsaUJBQUssRUFBQyxLQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFJRTtBQUF1QyxpQkFBTyxFQUFFWCxTQUFoRDtBQUFBLDhDQUFlLHVCQUFmO0FBQUEsaUNBQ0U7QUFBSyxlQUFHLEVBQUVZLHVEQUFWO0FBQXNCLGlCQUFLLEVBQUMsS0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBa0JFO0FBQUEsMENBQWUsY0FBZjtBQUFBLDhCQUNFO0FBQUEsNENBQWUsbUJBQWY7QUFBQSxnQ0FDRTtBQUFBLDhDQUFlLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRTtBQUFBLDhDQUFlLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkYsZUFHRTtBQUFBLDhDQUFlLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEYsZUFJRTtBQUFBLDhDQUFlLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFPRTtBQUFBLDRDQUFlLE1BQWY7QUFBQSwrQkFDRTtBQUFBO0FBQUEscUJBQ0doQixZQURILFNBQ29CSCxZQURwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbEJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREY7QUE0SkQ7O0dBcEx1QkYsTTs7S0FBQUEsTSIsImZpbGUiOiIuL2NvbXBvbmVudHMvU2xpZGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmlnaHRBcnJvdyBmcm9tIFwiLi4vaW1nL2Fycm93MngucG5nXCI7XG5pbXBvcnQgTGVmdEFycm93IGZyb20gXCIuLi9pbWcvYXJyb3cyeF9sZWZ0LnBuZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTbGlkZXIoeyBpdGVtcyB9KSB7XG4gIGNvbnN0IFRPVEFMX1NMSURFUyA9IGl0ZW1zLmxlbmd0aDtcbiAgY29uc3QgW2N1cnJlbnRTbGlkZSwgc2V0Q3VycmVudFNsaWRlXSA9IHVzZVN0YXRlKDEpO1xuICBjb25zdCBzbGlkZVJlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgbmV4dFNsaWRlID0gKCkgPT4ge1xuICAgIGlmIChjdXJyZW50U2xpZGUgPj0gVE9UQUxfU0xJREVTKSB7XG4gICAgICBzZXRDdXJyZW50U2xpZGUoMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldEN1cnJlbnRTbGlkZShjdXJyZW50U2xpZGUgKyAxKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IHByZXZTbGlkZSA9ICgpID0+IHtcbiAgICBpZiAoY3VycmVudFNsaWRlID09PSAxKSB7XG4gICAgICBzZXRDdXJyZW50U2xpZGUoVE9UQUxfU0xJREVTKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0Q3VycmVudFNsaWRlKGN1cnJlbnRTbGlkZSAtIDEpO1xuICAgIH1cbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNsaWRlUmVmLmN1cnJlbnQuc3R5bGUudHJhbnNpdGlvbiA9IFwiYWxsIDAuNXMgZWFzZS1pbi1vdXRcIjtcbiAgICBzbGlkZVJlZi5jdXJyZW50LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKC0ke2N1cnJlbnRTbGlkZSAtIDF9MDAlKWA7XG4gIH0sIFtjdXJyZW50U2xpZGVdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlcl93cmFwcGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGVyX2NvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGVcIiByZWY9e3NsaWRlUmVmfT5cbiAgICAgICAgICAgIHtpdGVtcy5tYXAoKGl0ZW0sIGtleSkgPT4gKFxuICAgICAgICAgICAgICA8aW1nIGtleT17a2V5fSBjbGFzc05hbWU9XCJpbWdcIiBzcmM9e2l0ZW0ucGhvdG99IC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJyb3dzX2FuZF9udW1iZXJfY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZpZ2F0ZV9sZWZ0X2J1dHRvblwiIG9uQ2xpY2s9e3ByZXZTbGlkZX0+XG4gICAgICAgICAgICA8aW1nIHNyYz17TGVmdEFycm93fSB3aWR0aD1cIjUwJVwiPjwvaW1nPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2aWdhdGVfcmlnaHRfYnV0dG9uXCIgb25DbGljaz17bmV4dFNsaWRlfT5cbiAgICAgICAgICAgIDxpbWcgc3JjPXtSaWdodEFycm93fSB3aWR0aD1cIjUwJVwiPjwvaW1nPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50X2luZm9cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50X2luZm9fdGV4dFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5BeGUgYW5kIER1bW15aGVhZHMsPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aGVyZVwiPkluc2EgQXJ0IFNwYWNlLDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2hlblwiPjIwMjA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhdGVnb3J5XCI+W0V4aGliaXRpb24gSWRlbnRpdHksIFByaW50ZWQgTWF0dGVyXTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRlXCI+XG4gICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICB7Y3VycmVudFNsaWRlfSAvIHtUT1RBTF9TTElERVN9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5zbGlkZXJfd3JhcHBlciB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAgICAgICBoZWlnaHQ6IGluaGVyaXQ7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNsaWRlcl9jb250YWluZXIge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zbGlkZSB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAganVzaXRmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pbWcge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzaXRmeS1zZWxmOiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmFycm93c19hbmRfbnVtYmVyX2NvbnRhaW5lciB7XG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgIH1cblxuICAgICAgICAubmF2aWdhdGVfbGVmdF9idXR0b24sXG4gICAgICAgIC5uYXZpZ2F0ZV9yaWdodF9idXR0b24ge1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICB6LWluZGV4OiAxMDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAubmF2aWdhdGVfbGVmdF9idXR0b24ge1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogNSU7XG4gICAgICAgIH1cblxuICAgICAgICAubmF2aWdhdGVfcmlnaHRfYnV0dG9uIHtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDUlO1xuICAgICAgICB9XG5cbiAgICAgICAgLm5hdmlnYXRlX2xlZnRfYnV0dG9uID4gaW1nLFxuICAgICAgICAubmF2aWdhdGVfcmlnaHRfYnV0dG9uID4gaW1nIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICAgIC5uYXZpZ2F0ZV9sZWZ0X2J1dHRvbiA6aG92ZXIgPiBpbWcsXG4gICAgICAgIC5uYXZpZ2F0ZV9yaWdodF9idXR0b246aG92ZXIgPiBpbWcge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG5cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAvLyAgICBhbGw6IHVuc2V0O1xuICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICBidXR0b246IGhvdmVyIHtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zbGlkZXJfY29udGFpbmVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmRhdGUge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICB6LWluZGV4OiAzO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRlbnRfY29udGFpbmVyIHtcbiAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGVudF9pbmZvIHtcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIGF1dG8pO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250ZW50X2luZm9fdGV4dCB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRpdGxlLFxuICAgICAgICAud2hlcmUsXG4gICAgICAgIC53aGVuIHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMC41ZW07XG4gICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNhdGVnb3J5IHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC8+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Slider.js\n");

/***/ })

})