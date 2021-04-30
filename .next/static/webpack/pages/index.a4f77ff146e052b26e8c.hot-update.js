webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Slider.js":
/*!******************************!*\
  !*** ./components/Slider.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Slider; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _jsxFileName = \"/Users/chaewonkang/Work/YinYang/components/Slider.js\",\n    _s = $RefreshSig$();\n\n\n\nfunction Slider(_ref) {\n  _s();\n\n  var _this = this;\n\n  var items = _ref.items;\n  var TOTAL_SLIDES = items.length;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(1),\n      currentSlide = _useState[0],\n      setCurrentSlide = _useState[1];\n\n  var slideRef = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"])(null);\n\n  var nextSlide = function nextSlide() {\n    if (currentSlide >= TOTAL_SLIDES) {\n      setCurrentSlide(1);\n    } else {\n      setCurrentSlide(currentSlide + 1);\n    }\n  };\n\n  var prevSlide = function prevSlide() {\n    if (currentSlide === 1) {\n      setCurrentSlide(TOTAL_SLIDES);\n    } else {\n      setCurrentSlide(currentSlide - 1);\n    }\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    slideRef.current.style.transition = \"all 0.5s ease-in-out\";\n    slideRef.current.style.transform = \"translateX(-\".concat(currentSlide - 1, \"00%)\");\n  }, [currentSlide]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"jsx-964827202\" + \" \" + \"slider_wrapper\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"jsx-964827202\" + \" \" + \"slider_container\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          ref: slideRef,\n          className: \"jsx-964827202\" + \" \" + \"slide\",\n          children: items.map(function (item, key) {\n            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n              src: item.photo,\n              className: \"jsx-964827202\" + \" \" + \"img\"\n            }, key, false, {\n              fileName: _jsxFileName,\n              lineNumber: 33,\n              columnNumber: 15\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"jsx-964827202\" + \" \" + \"arrows_and_number_container\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"jsx-964827202\" + \" \" + \"navigate_left_button\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n            onClick: prevSlide,\n            text: \"BUTTON_RIGHT\",\n            name: \"buttonright\",\n            type: \"buttonright\",\n            placeholder: \"hdaofioasd\",\n            className: \"jsx-964827202\",\n            children: \"LEFT\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 40,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"jsx-964827202\" + \" \" + \"navigate_right_button\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n            onClick: nextSlide,\n            text: \"BUTTON_RIGHT\",\n            name: \"buttonright\",\n            type: \"buttonright\",\n            placeholder: \"hdaofioasd\",\n            className: \"jsx-964827202\",\n            children: \"RIGHT\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 51,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"jsx-964827202\" + \" \" + \"content_info\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"jsx-964827202\" + \" \" + \"content_info_text\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"jsx-964827202\" + \" \" + \"title\",\n          children: \"Axe and Dummyheads,\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 65,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"jsx-964827202\" + \" \" + \"where\",\n          children: \"Insa Art Space,\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 66,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"jsx-964827202\" + \" \" + \"when\",\n          children: \"2020\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 67,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"jsx-964827202\" + \" \" + \"category\",\n          children: \"[Exhibition Identity, Printed Matter]\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 68,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"jsx-964827202\" + \" \" + \"date\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          className: \"jsx-964827202\",\n          children: [currentSlide, \" / \", TOTAL_SLIDES]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 71,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      id: \"964827202\",\n      children: \".slider_container.jsx-964827202{height:auto;max-height:auto;overflow:hidden;position:relative;}.slide.jsx-964827202{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;position:relative;}.img.jsx-964827202{width:100%;max-height:calc(100vh - 120px);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;jusitfy-self:center;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;}.slider_wrapper.jsx-964827202{position:relative;overflow:hidden;}.arrows_and_number_container.jsx-964827202{display:grid;width:100%;grid-template-columns:1fr 1fr;position:absolute;height:inherit;top:50%;}.navigate_left_button.jsx-964827202{left:0;}.navigate_right_button.jsx-964827202{right:0;text-align:right;}button.jsx-964827202{color:#000;width:100px;}button.jsx-964827202: hover.jsx-964827202{-webkit-transition:all 0.3s ease-in-out;transition:all 0.3s ease-in-out;color:#000;}.slider_container.jsx-964827202{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.date.jsx-964827202{position:relative;right:0;top:0px;text-align:right;z-index:3;}.content_container.jsx-964827202{height:auto;}.content_info.jsx-964827202{display:grid;grid-template-columns:repeat(2,auto);margin-top:5px;}.content_info_text.jsx-964827202{display:inline;}.title.jsx-964827202,.where.jsx-964827202,.when.jsx-964827202{display:inline;padding-right:0.5em;font-size:17px;}.category.jsx-964827202{display:inline;font-size:11px;}.pages.jsx-964827202{text-align:right;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGFld29ua2FuZy9Xb3JrL1lpbllhbmcvY29tcG9uZW50cy9TbGlkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEVrQixBQUd1QixBQU9DLEFBTUYsQUFRTyxBQUtMLEFBU04sQUFJQyxBQU1HLEFBS3FCLEFBS25CLEFBSUssQUFRTixBQUlDLEFBTUUsQUFNQSxBQU1BLEFBS0UsT0ExRG5CLENBSW1CLEdBMUJjLEFBZ0NuQixDQTdDSSxBQW1FbEIsQ0F6Q2EsQUE2QzJCLEVBTXhDLEFBTXNCLEFBTUwsRUFLakIsQ0F6RWtCLEFBc0NSLEtBYlYsQ0FuQmdDLENBYWhDLENBb0JVLEVBM0RRLEVBeUZsQixJQXBFQSxBQXVDbUIsQ0F1QkYsT0F0RUYsRUFaSyxNQXNFSCxBQWFqQixDQXZCWSxHQWxDUSxPQW1DcEIsQ0E1REEsR0FzRUEsT0E1Q2lCLEFBcUJKLEVBM0NBLEFBZ0RiLFNBSkEsRUEzQ29CLEVBc0JWLFFBQ1YsUUF0QkEsYUFNc0Isb0JBQ0YsdUVBQ3BCIiwiZmlsZSI6Ii9Vc2Vycy9jaGFld29ua2FuZy9Xb3JrL1lpbllhbmcvY29tcG9uZW50cy9TbGlkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2xpZGVyKHsgaXRlbXMgfSkge1xuICBjb25zdCBUT1RBTF9TTElERVMgPSBpdGVtcy5sZW5ndGg7XG4gIGNvbnN0IFtjdXJyZW50U2xpZGUsIHNldEN1cnJlbnRTbGlkZV0gPSB1c2VTdGF0ZSgxKTtcbiAgY29uc3Qgc2xpZGVSZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IG5leHRTbGlkZSA9ICgpID0+IHtcbiAgICBpZiAoY3VycmVudFNsaWRlID49IFRPVEFMX1NMSURFUykge1xuICAgICAgc2V0Q3VycmVudFNsaWRlKDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRDdXJyZW50U2xpZGUoY3VycmVudFNsaWRlICsgMSk7XG4gICAgfVxuICB9O1xuICBjb25zdCBwcmV2U2xpZGUgPSAoKSA9PiB7XG4gICAgaWYgKGN1cnJlbnRTbGlkZSA9PT0gMSkge1xuICAgICAgc2V0Q3VycmVudFNsaWRlKFRPVEFMX1NMSURFUyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldEN1cnJlbnRTbGlkZShjdXJyZW50U2xpZGUgLSAxKTtcbiAgICB9XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzbGlkZVJlZi5jdXJyZW50LnN0eWxlLnRyYW5zaXRpb24gPSBcImFsbCAwLjVzIGVhc2UtaW4tb3V0XCI7XG4gICAgc2xpZGVSZWYuY3VycmVudC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgtJHtjdXJyZW50U2xpZGUgLSAxfTAwJSlgO1xuICB9LCBbY3VycmVudFNsaWRlXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZXJfd3JhcHBlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlcl9jb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlXCIgcmVmPXtzbGlkZVJlZn0+XG4gICAgICAgICAgICB7aXRlbXMubWFwKChpdGVtLCBrZXkpID0+IChcbiAgICAgICAgICAgICAgPGltZyBrZXk9e2tleX0gY2xhc3NOYW1lPVwiaW1nXCIgc3JjPXtpdGVtLnBob3RvfSAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJyb3dzX2FuZF9udW1iZXJfY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZpZ2F0ZV9sZWZ0X2J1dHRvblwiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXtwcmV2U2xpZGV9XG4gICAgICAgICAgICAgIHRleHQ9XCJCVVRUT05fUklHSFRcIlxuICAgICAgICAgICAgICBuYW1lPVwiYnV0dG9ucmlnaHRcIlxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9ucmlnaHRcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImhkYW9maW9hc2RcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBMRUZUXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmlnYXRlX3JpZ2h0X2J1dHRvblwiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXtuZXh0U2xpZGV9XG4gICAgICAgICAgICAgIHRleHQ9XCJCVVRUT05fUklHSFRcIlxuICAgICAgICAgICAgICBuYW1lPVwiYnV0dG9ucmlnaHRcIlxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9ucmlnaHRcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImhkYW9maW9hc2RcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBSSUdIVFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfaW5mb1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfaW5mb190ZXh0XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPkF4ZSBhbmQgRHVtbXloZWFkcyw8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndoZXJlXCI+SW5zYSBBcnQgU3BhY2UsPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aGVuXCI+MjAyMDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2F0ZWdvcnlcIj5bRXhoaWJpdGlvbiBJZGVudGl0eSwgUHJpbnRlZCBNYXR0ZXJdPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGVcIj5cbiAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgIHtjdXJyZW50U2xpZGV9IC8ge1RPVEFMX1NMSURFU31cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnNsaWRlcl9jb250YWluZXIge1xuICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICBtYXgtaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNsaWRlIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pbWcge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxMjBweCk7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXNpdGZ5LXNlbGY6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAuc2xpZGVyX3dyYXBwZXIge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB9XG5cbiAgICAgICAgLmFycm93c19hbmRfbnVtYmVyX2NvbnRhaW5lciB7XG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGhlaWdodDogaW5oZXJpdDtcbiAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5uYXZpZ2F0ZV9sZWZ0X2J1dHRvbiB7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5uYXZpZ2F0ZV9yaWdodF9idXR0b24ge1xuICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICB9XG5cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAvLyAgICBhbGw6IHVuc2V0O1xuICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGJ1dHRvbjogaG92ZXIge1xuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNsaWRlcl9jb250YWluZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIH1cblxuICAgICAgICAuZGF0ZSB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgIHRvcDogMHB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgIHotaW5kZXg6IDM7XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGVudF9jb250YWluZXIge1xuICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250ZW50X2luZm8ge1xuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgYXV0byk7XG4gICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRlbnRfaW5mb190ZXh0IHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgICAgIH1cblxuICAgICAgICAudGl0bGUsXG4gICAgICAgIC53aGVyZSxcbiAgICAgICAgLndoZW4ge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwLjVlbTtcbiAgICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuY2F0ZWdvcnkge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgIH1cblxuICAgICAgICAucGFnZXMge1xuICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC8+XG4gICk7XG59XG4iXX0= */\\n/*@ sourceURL=/Users/chaewonkang/Work/YinYang/components/Slider.js */\"\n    }, void 0, false, void 0, this)]\n  }, void 0, true);\n}\n\n_s(Slider, \"vcM1cVHTXQ6WG+YDZOU1MhmoEIM=\");\n\n_c = Slider;\n\nvar _c;\n\n$RefreshReg$(_c, \"Slider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TbGlkZXIuanM/MDQxNCJdLCJuYW1lcyI6WyJTbGlkZXIiLCJpdGVtcyIsIlRPVEFMX1NMSURFUyIsImxlbmd0aCIsInVzZVN0YXRlIiwiY3VycmVudFNsaWRlIiwic2V0Q3VycmVudFNsaWRlIiwic2xpZGVSZWYiLCJ1c2VSZWYiLCJuZXh0U2xpZGUiLCJwcmV2U2xpZGUiLCJ1c2VFZmZlY3QiLCJjdXJyZW50Iiwic3R5bGUiLCJ0cmFuc2l0aW9uIiwidHJhbnNmb3JtIiwibWFwIiwiaXRlbSIsImtleSIsInBob3RvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVlLFNBQVNBLE1BQVQsT0FBMkI7QUFBQTs7QUFBQTs7QUFBQSxNQUFUQyxLQUFTLFFBQVRBLEtBQVM7QUFDeEMsTUFBTUMsWUFBWSxHQUFHRCxLQUFLLENBQUNFLE1BQTNCOztBQUR3QyxrQkFFQUMsc0RBQVEsQ0FBQyxDQUFELENBRlI7QUFBQSxNQUVqQ0MsWUFGaUM7QUFBQSxNQUVuQkMsZUFGbUI7O0FBR3hDLE1BQU1DLFFBQVEsR0FBR0Msb0RBQU0sQ0FBQyxJQUFELENBQXZCOztBQUNBLE1BQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFDdEIsUUFBSUosWUFBWSxJQUFJSCxZQUFwQixFQUFrQztBQUNoQ0kscUJBQWUsQ0FBQyxDQUFELENBQWY7QUFDRCxLQUZELE1BRU87QUFDTEEscUJBQWUsQ0FBQ0QsWUFBWSxHQUFHLENBQWhCLENBQWY7QUFDRDtBQUNGLEdBTkQ7O0FBT0EsTUFBTUssU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUN0QixRQUFJTCxZQUFZLEtBQUssQ0FBckIsRUFBd0I7QUFDdEJDLHFCQUFlLENBQUNKLFlBQUQsQ0FBZjtBQUNELEtBRkQsTUFFTztBQUNMSSxxQkFBZSxDQUFDRCxZQUFZLEdBQUcsQ0FBaEIsQ0FBZjtBQUNEO0FBQ0YsR0FORDs7QUFRQU0seURBQVMsQ0FBQyxZQUFNO0FBQ2RKLFlBQVEsQ0FBQ0ssT0FBVCxDQUFpQkMsS0FBakIsQ0FBdUJDLFVBQXZCLEdBQW9DLHNCQUFwQztBQUNBUCxZQUFRLENBQUNLLE9BQVQsQ0FBaUJDLEtBQWpCLENBQXVCRSxTQUF2Qix5QkFBa0RWLFlBQVksR0FBRyxDQUFqRTtBQUNELEdBSFEsRUFHTixDQUFDQSxZQUFELENBSE0sQ0FBVDtBQUtBLHNCQUNFO0FBQUEsNEJBQ0U7QUFBQSx5Q0FBZSxnQkFBZjtBQUFBLDhCQUNFO0FBQUEsMkNBQWUsa0JBQWY7QUFBQSwrQkFDRTtBQUF1QixhQUFHLEVBQUVFLFFBQTVCO0FBQUEsNkNBQWUsT0FBZjtBQUFBLG9CQUNHTixLQUFLLENBQUNlLEdBQU4sQ0FBVSxVQUFDQyxJQUFELEVBQU9DLEdBQVA7QUFBQSxnQ0FDVDtBQUErQixpQkFBRyxFQUFFRCxJQUFJLENBQUNFLEtBQXpDO0FBQUEsaURBQXlCO0FBQXpCLGVBQVVELEdBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEUztBQUFBLFdBQVY7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBU0U7QUFBQSwyQ0FBZSw2QkFBZjtBQUFBLGdDQUNFO0FBQUEsNkNBQWUsc0JBQWY7QUFBQSxpQ0FDRTtBQUNFLG1CQUFPLEVBQUVSLFNBRFg7QUFFRSxnQkFBSSxFQUFDLGNBRlA7QUFHRSxnQkFBSSxFQUFDLGFBSFA7QUFJRSxnQkFBSSxFQUFDLGFBSlA7QUFLRSx1QkFBVyxFQUFDLFlBTGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFZRTtBQUFBLDZDQUFlLHVCQUFmO0FBQUEsaUNBQ0U7QUFDRSxtQkFBTyxFQUFFRCxTQURYO0FBRUUsZ0JBQUksRUFBQyxjQUZQO0FBR0UsZ0JBQUksRUFBQyxhQUhQO0FBSUUsZ0JBQUksRUFBQyxhQUpQO0FBS0UsdUJBQVcsRUFBQyxZQUxkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBbUNFO0FBQUEseUNBQWUsY0FBZjtBQUFBLDhCQUNFO0FBQUEsMkNBQWUsbUJBQWY7QUFBQSxnQ0FDRTtBQUFBLDZDQUFlLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRTtBQUFBLDZDQUFlLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkYsZUFHRTtBQUFBLDZDQUFlLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEYsZUFJRTtBQUFBLDZDQUFlLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFPRTtBQUFBLDJDQUFlLE1BQWY7QUFBQSwrQkFDRTtBQUFBO0FBQUEscUJBQ0dKLFlBREgsU0FDb0JILFlBRHBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFuQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERjtBQXVKRDs7R0EvS3VCRixNOztLQUFBQSxNIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9TbGlkZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2xpZGVyKHsgaXRlbXMgfSkge1xuICBjb25zdCBUT1RBTF9TTElERVMgPSBpdGVtcy5sZW5ndGg7XG4gIGNvbnN0IFtjdXJyZW50U2xpZGUsIHNldEN1cnJlbnRTbGlkZV0gPSB1c2VTdGF0ZSgxKTtcbiAgY29uc3Qgc2xpZGVSZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IG5leHRTbGlkZSA9ICgpID0+IHtcbiAgICBpZiAoY3VycmVudFNsaWRlID49IFRPVEFMX1NMSURFUykge1xuICAgICAgc2V0Q3VycmVudFNsaWRlKDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRDdXJyZW50U2xpZGUoY3VycmVudFNsaWRlICsgMSk7XG4gICAgfVxuICB9O1xuICBjb25zdCBwcmV2U2xpZGUgPSAoKSA9PiB7XG4gICAgaWYgKGN1cnJlbnRTbGlkZSA9PT0gMSkge1xuICAgICAgc2V0Q3VycmVudFNsaWRlKFRPVEFMX1NMSURFUyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldEN1cnJlbnRTbGlkZShjdXJyZW50U2xpZGUgLSAxKTtcbiAgICB9XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzbGlkZVJlZi5jdXJyZW50LnN0eWxlLnRyYW5zaXRpb24gPSBcImFsbCAwLjVzIGVhc2UtaW4tb3V0XCI7XG4gICAgc2xpZGVSZWYuY3VycmVudC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgtJHtjdXJyZW50U2xpZGUgLSAxfTAwJSlgO1xuICB9LCBbY3VycmVudFNsaWRlXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZXJfd3JhcHBlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlcl9jb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlXCIgcmVmPXtzbGlkZVJlZn0+XG4gICAgICAgICAgICB7aXRlbXMubWFwKChpdGVtLCBrZXkpID0+IChcbiAgICAgICAgICAgICAgPGltZyBrZXk9e2tleX0gY2xhc3NOYW1lPVwiaW1nXCIgc3JjPXtpdGVtLnBob3RvfSAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJyb3dzX2FuZF9udW1iZXJfY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZpZ2F0ZV9sZWZ0X2J1dHRvblwiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXtwcmV2U2xpZGV9XG4gICAgICAgICAgICAgIHRleHQ9XCJCVVRUT05fUklHSFRcIlxuICAgICAgICAgICAgICBuYW1lPVwiYnV0dG9ucmlnaHRcIlxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9ucmlnaHRcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImhkYW9maW9hc2RcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBMRUZUXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmlnYXRlX3JpZ2h0X2J1dHRvblwiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXtuZXh0U2xpZGV9XG4gICAgICAgICAgICAgIHRleHQ9XCJCVVRUT05fUklHSFRcIlxuICAgICAgICAgICAgICBuYW1lPVwiYnV0dG9ucmlnaHRcIlxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9ucmlnaHRcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImhkYW9maW9hc2RcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBSSUdIVFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfaW5mb1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfaW5mb190ZXh0XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPkF4ZSBhbmQgRHVtbXloZWFkcyw8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndoZXJlXCI+SW5zYSBBcnQgU3BhY2UsPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aGVuXCI+MjAyMDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2F0ZWdvcnlcIj5bRXhoaWJpdGlvbiBJZGVudGl0eSwgUHJpbnRlZCBNYXR0ZXJdPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGVcIj5cbiAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgIHtjdXJyZW50U2xpZGV9IC8ge1RPVEFMX1NMSURFU31cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnNsaWRlcl9jb250YWluZXIge1xuICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICBtYXgtaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNsaWRlIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pbWcge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxMjBweCk7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXNpdGZ5LXNlbGY6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAuc2xpZGVyX3dyYXBwZXIge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB9XG5cbiAgICAgICAgLmFycm93c19hbmRfbnVtYmVyX2NvbnRhaW5lciB7XG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGhlaWdodDogaW5oZXJpdDtcbiAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5uYXZpZ2F0ZV9sZWZ0X2J1dHRvbiB7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5uYXZpZ2F0ZV9yaWdodF9idXR0b24ge1xuICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICB9XG5cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAvLyAgICBhbGw6IHVuc2V0O1xuICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGJ1dHRvbjogaG92ZXIge1xuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNsaWRlcl9jb250YWluZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIH1cblxuICAgICAgICAuZGF0ZSB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgIHRvcDogMHB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgIHotaW5kZXg6IDM7XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGVudF9jb250YWluZXIge1xuICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250ZW50X2luZm8ge1xuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgYXV0byk7XG4gICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRlbnRfaW5mb190ZXh0IHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgICAgIH1cblxuICAgICAgICAudGl0bGUsXG4gICAgICAgIC53aGVyZSxcbiAgICAgICAgLndoZW4ge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwLjVlbTtcbiAgICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuY2F0ZWdvcnkge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgIH1cblxuICAgICAgICAucGFnZXMge1xuICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC8+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Slider.js\n");

/***/ })

})