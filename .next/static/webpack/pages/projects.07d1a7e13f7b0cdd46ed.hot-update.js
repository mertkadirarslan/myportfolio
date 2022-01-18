self["webpackHotUpdate_N_E"]("pages/projects",{

/***/ "./pages/projects.tsx":
/*!****************************!*\
  !*** ./pages/projects.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var _data_projectData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/projectData */ "./data/projectData.tsx");
/* harmony import */ var components_layout_pageLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/layout/pageLayout */ "./components/layout/pageLayout.tsx");
/* harmony import */ var components_ui_page_transitions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/ui/page-transitions */ "./components/ui/page-transitions.tsx");
/* harmony import */ var components_layout_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/layout/header */ "./components/layout/header.tsx");
/* harmony import */ var components_layout_projectLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/layout/projectLayout */ "./components/layout/projectLayout.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\mert\\Desktop\\myportfolio\\pages\\projects.tsx",
    _this = undefined,
    _s = $RefreshSig$();








var title = "Projects 📚";
var subtitle = "A selection of projects I've worked on, during my career as a software developer.";
var TURQUOISE = "#06b6d4";

var Projects = function Projects() {
  _s();

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_layout_pageLayout__WEBPACK_IMPORTED_MODULE_3__.default, {
      title: title,
      description: subtitle,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_ui_page_transitions__WEBPACK_IMPORTED_MODULE_4__.PageSlideFade, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.VStack, {
          align: "start",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_layout_header__WEBPACK_IMPORTED_MODULE_5__.default, {
            underlineColor: TURQUOISE,
            mt: 0,
            mb: 2,
            children: "Projects"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Text, {
            color: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.useColorModeValue)("gray.500", "gray.200"),
            textAlign: "left",
            children: subtitle
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.VStack, {
          spacing: 8,
          mt: ["7", "0", "0"],
          children: _data_projectData__WEBPACK_IMPORTED_MODULE_2__.projectsList.map(function (project, index) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_layout_projectLayout__WEBPACK_IMPORTED_MODULE_6__.ProjectLayoutMed, {
                project: project
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 45,
                columnNumber: 17
              }, _this), index % 2 === 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_layout_projectLayout__WEBPACK_IMPORTED_MODULE_6__.LeftProjectLayoutLarge, {
                project: project
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 47,
                columnNumber: 19
              }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_layout_projectLayout__WEBPACK_IMPORTED_MODULE_6__.RightProjectLayoutLarge, {
                project: project
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 49,
                columnNumber: 19
              }, _this)]
            }, void 0, true);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 5
  }, _this);
};

_s(Projects, "3skuTHwppfEdh6aKNlffDjyTB8U=", false, function () {
  return [_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.useColorModeValue];
});

_c = Projects;
/* harmony default export */ __webpack_exports__["default"] = (Projects);

var _c;

$RefreshReg$(_c, "Projects");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvamVjdHMudHN4Il0sIm5hbWVzIjpbInRpdGxlIiwic3VidGl0bGUiLCJUVVJRVU9JU0UiLCJQcm9qZWN0cyIsInVzZUNvbG9yTW9kZVZhbHVlIiwicHJvamVjdHNMaXN0IiwicHJvamVjdCIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQSxJQUFNQSxLQUFLLEdBQUcsYUFBZDtBQUNBLElBQU1DLFFBQVEsR0FDWixtRkFERjtBQUdBLElBQU1DLFNBQVMsR0FBRyxTQUFsQjs7QUFFQSxJQUFNQyxRQUFrQixHQUFHLFNBQXJCQSxRQUFxQixHQUFNO0FBQUE7O0FBRS9CLHNCQUNFLDhEQUFDLDJDQUFEO0FBQUEsMkJBQ0UsOERBQUMsaUVBQUQ7QUFBWSxXQUFLLEVBQUVILEtBQW5CO0FBQTBCLGlCQUFXLEVBQUVDLFFBQXZDO0FBQUEsNkJBQ0UsOERBQUMseUVBQUQ7QUFBQSxnQ0FDRSw4REFBQyxvREFBRDtBQUFRLGVBQUssRUFBQyxPQUFkO0FBQUEsa0NBQ0UsOERBQUMsNkRBQUQ7QUFBUSwwQkFBYyxFQUFFQyxTQUF4QjtBQUFtQyxjQUFFLEVBQUUsQ0FBdkM7QUFBMEMsY0FBRSxFQUFFLENBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBSUUsOERBQUMsa0RBQUQ7QUFDRSxpQkFBSyxFQUFFRSxtRUFBaUIsQ0FBQyxVQUFELEVBQWEsVUFBYixDQUQxQjtBQUVFLHFCQUFTLEVBQUMsTUFGWjtBQUFBLHNCQUlHSDtBQUpIO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBWUUsOERBQUMsb0RBQUQ7QUFBUSxpQkFBTyxFQUFFLENBQWpCO0FBQW9CLFlBQUUsRUFBRSxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxDQUF4QjtBQUFBLG9CQUNHSSwrREFBQSxDQUFpQixVQUFDQyxPQUFELEVBQVVDLEtBQVY7QUFBQSxnQ0FDaEI7QUFBQSxzQ0FDRSw4REFBQyw2RUFBRDtBQUFrQix1QkFBTyxFQUFFRDtBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLEVBRUdDLEtBQUssR0FBRyxDQUFSLEtBQWMsQ0FBZCxnQkFDQyw4REFBQyxtRkFBRDtBQUF3Qix1QkFBTyxFQUFFRDtBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURELGdCQUdDLDhEQUFDLG9GQUFEO0FBQXlCLHVCQUFPLEVBQUVBO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBTEo7QUFBQSw0QkFEZ0I7QUFBQSxXQUFqQjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQStCRCxDQWpDRDs7R0FBTUgsUTtVQVdlQywrRDs7O0tBWGZELFE7QUFtQ04sK0RBQWVBLFFBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvamVjdHMuMDdkMWE3ZTEzZjdiMGNkZDQ2ZWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IHtcclxuICBWU3RhY2ssXHJcbiAgVGV4dCxcclxuICBIZWFkaW5nLFxyXG4gIEZsZXgsXHJcbiAgU3RhY2ssXHJcbiAgQm94LFxyXG4gIHVzZUNvbG9yTW9kZVZhbHVlLFxyXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCB7IHByb2plY3RzTGlzdCB9IGZyb20gXCIuLi9kYXRhL3Byb2plY3REYXRhXCI7XHJcbmltcG9ydCBQYWdlTGF5b3V0IGZyb20gXCJjb21wb25lbnRzL2xheW91dC9wYWdlTGF5b3V0XCI7XHJcbmltcG9ydCB7IFBhZ2VTbGlkZUZhZGUgfSBmcm9tIFwiY29tcG9uZW50cy91aS9wYWdlLXRyYW5zaXRpb25zXCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcImNvbXBvbmVudHMvbGF5b3V0L2hlYWRlclwiO1xyXG5pbXBvcnQgeyBMZWZ0UHJvamVjdExheW91dExhcmdlLCBQcm9qZWN0TGF5b3V0TWVkLCBSaWdodFByb2plY3RMYXlvdXRMYXJnZSB9IGZyb20gXCJjb21wb25lbnRzL2xheW91dC9wcm9qZWN0TGF5b3V0XCI7XHJcbmltcG9ydCB7IEJzRmlsbEJyaWVmY2FzZUZpbGwgfSBmcm9tIFwicmVhY3QtaWNvbnMvYnNcIjtcclxuXHJcbmNvbnN0IHRpdGxlID0gXCJQcm9qZWN0cyDwn5OaXCI7XHJcbmNvbnN0IHN1YnRpdGxlID1cclxuICBcIkEgc2VsZWN0aW9uIG9mIHByb2plY3RzIEkndmUgd29ya2VkIG9uLCBkdXJpbmcgbXkgY2FyZWVyIGFzIGEgc29mdHdhcmUgZGV2ZWxvcGVyLlwiO1xyXG5cclxuY29uc3QgVFVSUVVPSVNFID0gXCIjMDZiNmQ0XCI7XHJcblxyXG5jb25zdCBQcm9qZWN0czogTmV4dFBhZ2UgPSAoKSA9PiB7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8RnJhZ21lbnQ+XHJcbiAgICAgIDxQYWdlTGF5b3V0IHRpdGxlPXt0aXRsZX0gZGVzY3JpcHRpb249e3N1YnRpdGxlfT5cclxuICAgICAgICA8UGFnZVNsaWRlRmFkZT5cclxuICAgICAgICAgIDxWU3RhY2sgYWxpZ249XCJzdGFydFwiPlxyXG4gICAgICAgICAgICA8SGVhZGVyIHVuZGVybGluZUNvbG9yPXtUVVJRVU9JU0V9IG10PXswfSBtYj17Mn0+XHJcbiAgICAgICAgICAgICAgUHJvamVjdHNcclxuICAgICAgICAgICAgPC9IZWFkZXI+XHJcbiAgICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgICAgY29sb3I9e3VzZUNvbG9yTW9kZVZhbHVlKFwiZ3JheS41MDBcIiwgXCJncmF5LjIwMFwiKX1cclxuICAgICAgICAgICAgICB0ZXh0QWxpZ249XCJsZWZ0XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtzdWJ0aXRsZX1cclxuICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgPC9WU3RhY2s+XHJcbiAgICAgICAgICA8VlN0YWNrIHNwYWNpbmc9ezh9IG10PXtbXCI3XCIsIFwiMFwiLCBcIjBcIl19PlxyXG4gICAgICAgICAgICB7cHJvamVjdHNMaXN0Lm1hcCgocHJvamVjdCwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPFByb2plY3RMYXlvdXRNZWQgcHJvamVjdD17cHJvamVjdH0gLz5cclxuICAgICAgICAgICAgICAgIHtpbmRleCAlIDIgPT09IDAgPyAoXHJcbiAgICAgICAgICAgICAgICAgIDxMZWZ0UHJvamVjdExheW91dExhcmdlIHByb2plY3Q9e3Byb2plY3R9IC8+XHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICA8UmlnaHRQcm9qZWN0TGF5b3V0TGFyZ2UgcHJvamVjdD17cHJvamVjdH0gLz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9WU3RhY2s+XHJcbiAgICAgICAgPC9QYWdlU2xpZGVGYWRlPlxyXG4gICAgICA8L1BhZ2VMYXlvdXQ+XHJcbiAgICA8L0ZyYWdtZW50PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0cztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==