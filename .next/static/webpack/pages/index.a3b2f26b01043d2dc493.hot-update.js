self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/home-page/home.tsx":
/*!***************************************!*\
  !*** ./components/home-page/home.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var components_ui_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/ui/motion */ "./components/ui/motion.tsx");
/* harmony import */ var components_layout_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/layout/header */ "./components/layout/header.tsx");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_ui_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/ui/theme */ "./components/ui/theme/index.ts");
/* harmony import */ var _PopularArticles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PopularArticles */ "./components/home-page/PopularArticles.tsx");
/* harmony import */ var data_Status__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! data/Status */ "./data/Status.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\mert\\Desktop\\myportfolio\\components\\home-page\\home.tsx",
    _this = undefined,
    _s = $RefreshSig$();








var ANIMATION_DURATION = 0.5;
var ORANGE = "#ff9400";

var Home = function Home(props) {
  _s();

  var posts = props.posts;
  var linkColor = (0,components_ui_theme__WEBPACK_IMPORTED_MODULE_4__.useLinkColor)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Flex, {
    direction: "column",
    align: "center",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Flex, {
      direction: ["column", "column", "row"],
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_ui_motion__WEBPACK_IMPORTED_MODULE_1__.MotionBox, {
        opacity: "0",
        initial: {
          translateX: -150,
          opacity: 0
        },
        animate: {
          translateX: 0,
          opacity: 1,
          transition: {
            duration: ANIMATION_DURATION
          }
        },
        m: "auto",
        mb: [16, 16, "auto"],
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Tooltip, {
          hasArrow: true,
          label: "me",
          placement: "bottom",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Avatar, {
            backgroundColor: 'transparent',
            size: "2xl" // src={UserIcon}
            ,
            src: "https://avatars.githubusercontent.com/u/77637289?v=4"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 11
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 12
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_ui_motion__WEBPACK_IMPORTED_MODULE_1__.MotionFlex, {
        ml: ["auto", "auto", 16],
        m: ["auto", "initial"],
        w: ["90%", "85%", "80%"],
        maxW: "800px",
        opacity: "0",
        justify: "center",
        direction: "column",
        initial: {
          opacity: 0,
          translateX: 150
        },
        animate: {
          opacity: 1,
          translateX: 0,
          transition: {
            duration: ANIMATION_DURATION
          }
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_layout_header__WEBPACK_IMPORTED_MODULE_2__.default, {
          underlineColor: ORANGE,
          emoji: "\uD83D\uDC4B",
          mt: 0,
          children: "Hey!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 20
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Box, {
          as: "h2",
          fontSize: "2xl",
          fontWeight: "400",
          textAlign: "left",
          children: ["My name is", " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Box, {
            as: "strong",
            fontWeight: "600",
            children: "Mert Kadir"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 13
          }, _this), " ", "and I'm a", " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Box, {
            as: "span",
            whiteSpace: "nowrap",
            children: "Mobile Application Developer."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 13
          }, _this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Box, {
            as: "span",
            whiteSpace: "nowrap",
            children: "A software lover\xA0"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 13
          }, _this), "from", " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Box, {
            as: "span",
            whiteSpace: "nowrap",
            children: "Turkey \uD83C\uDDF9\uD83C\uDDF7"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Box, {
          as: "h2",
          fontSize: "2xl",
          fontWeight: "400",
          mt: 5,
          textAlign: "left",
          children: "Hey, Welcome to Mert's Digital Environment I'm A place to share what I've learned and what I've done.\uD83D\uDE0A"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(data_Status__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_ui_motion__WEBPACK_IMPORTED_MODULE_1__.MotionBox, {
      w: "100%",
      opacity: "0",
      initial: {
        translateY: 80
      },
      animate: {
        translateY: 0,
        opacity: 1,
        transition: {
          delay: ANIMATION_DURATION - 0.1,
          duration: ANIMATION_DURATION
        }
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Box, {
        mt: 10,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Stack, {
          mb: 10,
          mx: [0, 0, 10],
          padding: 4,
          align: "start",
          borderLeft: "4px solid",
          borderColor: "#53c8c4",
          color: "whatsapp",
          _hover: {
            shadow: "lg"
          },
          backgroundColor: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.useColorModeValue)("gray.100", "#1e2533"),
          rounded: "sm",
          fontSize: "md",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Text, {
            textAlign: "center",
            color: "#53c8c4",
            fontWeight: "bold",
            children: "Highlists"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.UnorderedList, {
            textAlign: "left",
            paddingLeft: 5,
            m: 0,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.ListItem, {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                href: '/blog',
                passHref: true,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Link, {
                  color: linkColor,
                  children: ["Blog page", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Badge, {
                    ml: "1",
                    colorScheme: "green",
                    children: "New"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 148,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 146,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 145,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 144,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.ListItem, {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                href: '/open-source',
                passHref: true,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Link, {
                  color: linkColor,
                  children: ["Open Source", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Badge, {
                    ml: "1",
                    colorScheme: "blue",
                    children: "New"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 158,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 156,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 155,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 154,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.ListItem, {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                href: '/projects',
                passHref: true,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Link, {
                  color: linkColor,
                  children: ["Projects page", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Badge, {
                    ml: "1",
                    colorScheme: "red",
                    children: "New"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 168,
                    columnNumber: 19
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 166,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 165,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 164,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PopularArticles__WEBPACK_IMPORTED_MODULE_5__.default, {
          posts: posts
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 176,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 5
  }, _this);
};

_s(Home, "FVgbD4wmrBq8J9cS6aj1L5wAfsU=", false, function () {
  return [components_ui_theme__WEBPACK_IMPORTED_MODULE_4__.useLinkColor, _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.useColorModeValue];
});

_c = Home;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ob21lLXBhZ2UvaG9tZS50c3giXSwibmFtZXMiOlsiQU5JTUFUSU9OX0RVUkFUSU9OIiwiT1JBTkdFIiwiSG9tZSIsInByb3BzIiwicG9zdHMiLCJsaW5rQ29sb3IiLCJ1c2VMaW5rQ29sb3IiLCJ0cmFuc2xhdGVYIiwib3BhY2l0eSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsInRyYW5zbGF0ZVkiLCJkZWxheSIsInNoYWRvdyIsInVzZUNvbG9yTW9kZVZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUdBLElBQU1BLGtCQUFrQixHQUFHLEdBQTNCO0FBQ0EsSUFBTUMsTUFBTSxHQUFHLFNBQWY7O0FBRUEsSUFBTUMsSUFBcUIsR0FBRyxTQUF4QkEsSUFBd0IsQ0FBQUMsS0FBSyxFQUFJO0FBQUE7O0FBQUEsTUFDN0JDLEtBRDZCLEdBQ25CRCxLQURtQixDQUM3QkMsS0FENkI7QUFHckMsTUFBTUMsU0FBUyxHQUFHQyxpRUFBWSxFQUE5QjtBQUVBLHNCQUNFLDhEQUFDLGtEQUFEO0FBQU0sYUFBUyxFQUFDLFFBQWhCO0FBQXlCLFNBQUssRUFBQyxRQUEvQjtBQUFBLDRCQUNFLDhEQUFDLGtEQUFEO0FBQU0sZUFBUyxFQUFFLENBQUMsUUFBRCxFQUFXLFFBQVgsRUFBcUIsS0FBckIsQ0FBakI7QUFBQSw4QkFDRSw4REFBQywyREFBRDtBQUNFLGVBQU8sRUFBQyxHQURWO0FBRUUsZUFBTyxFQUFFO0FBQ1BDLG9CQUFVLEVBQUUsQ0FBQyxHQUROO0FBRVBDLGlCQUFPLEVBQUU7QUFGRixTQUZYO0FBTUUsZUFBTyxFQUFFO0FBQ1BELG9CQUFVLEVBQUUsQ0FETDtBQUVQQyxpQkFBTyxFQUFFLENBRkY7QUFHUEMsb0JBQVUsRUFBRTtBQUNWQyxvQkFBUSxFQUFFVjtBQURBO0FBSEwsU0FOWDtBQWFFLFNBQUMs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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFmRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBOUVGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBcUpELENBMUpEOztHQUFNRixJO1VBR2NJLDZELEVBMEdTUSwrRDs7O0tBN0d2QlosSTtBQTRKTiwrREFBZUEsSUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5hM2IyZjI2YjAxMDQzZDJkYzQ5My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBGbGV4LFxyXG4gIEF2YXRhcixcclxuICBCb3gsXHJcbiAgVGV4dCxcclxuICBCYWRnZSxcclxuICBTdGFjayxcclxuICBMaW5rLFxyXG4gIFVub3JkZXJlZExpc3QsXHJcbiAgTGlzdEl0ZW0sXHJcbiAgdXNlQ29sb3JNb2RlVmFsdWUsXHJcbiAgVG9vbHRpcFxyXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCB7IE1vdGlvbkJveCwgTW90aW9uRmxleCB9IGZyb20gXCJjb21wb25lbnRzL3VpL21vdGlvblwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCJjb21wb25lbnRzL2xheW91dC9oZWFkZXJcIjtcclxuaW1wb3J0IE5leHRMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgdXNlTGlua0NvbG9yIH0gZnJvbSAnY29tcG9uZW50cy91aS90aGVtZSdcclxuaW1wb3J0IFBvcHVsYXJBcnRpY2xlcyBmcm9tIFwiLi9Qb3B1bGFyQXJ0aWNsZXNcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCB7IFByb3BzIH0gZnJvbSBcImludGVyZmFjZXMvaW50ZXJmYWNlXCI7XHJcbmltcG9ydCBTdGF0dXMgZnJvbSBcImRhdGEvU3RhdHVzXCI7XHJcblxyXG5cclxuY29uc3QgQU5JTUFUSU9OX0RVUkFUSU9OID0gMC41O1xyXG5jb25zdCBPUkFOR0UgPSBcIiNmZjk0MDBcIjtcclxuXHJcbmNvbnN0IEhvbWU6IFJlYWN0LkZDPFByb3BzPiA9IHByb3BzID0+IHtcclxuICBjb25zdCB7IHBvc3RzIH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgbGlua0NvbG9yID0gdXNlTGlua0NvbG9yKClcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGbGV4IGRpcmVjdGlvbj1cImNvbHVtblwiIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgIDxGbGV4IGRpcmVjdGlvbj17W1wiY29sdW1uXCIsIFwiY29sdW1uXCIsIFwicm93XCJdfT5cclxuICAgICAgICA8TW90aW9uQm94XHJcbiAgICAgICAgICBvcGFjaXR5PVwiMFwiXHJcbiAgICAgICAgICBpbml0aWFsPXt7XHJcbiAgICAgICAgICAgIHRyYW5zbGF0ZVg6IC0xNTAsXHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDBcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBhbmltYXRlPXt7XHJcbiAgICAgICAgICAgIHRyYW5zbGF0ZVg6IDAsXHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgICAgICAgICBkdXJhdGlvbjogQU5JTUFUSU9OX0RVUkFUSU9OXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBtPVwiYXV0b1wiXHJcbiAgICAgICAgICBtYj17WzE2LCAxNiwgXCJhdXRvXCJdfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICA8VG9vbHRpcCBoYXNBcnJvdyBsYWJlbD1cIm1lXCIgcGxhY2VtZW50PVwiYm90dG9tXCI+XHJcbiAgICAgICAgICA8QXZhdGFyXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9eyd0cmFuc3BhcmVudCd9XHJcbiAgICAgICAgICAgIHNpemU9e1wiMnhsXCJ9XHJcbiAgICAgICAgICAgIC8vIHNyYz17VXNlckljb259XHJcbiAgICAgICAgICAgIHNyYz17XCJodHRwczovL2F2YXRhcnMuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3UvNzc2MzcyODk/dj00XCJ9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgPC9Nb3Rpb25Cb3g+XHJcbiAgICAgICAgPE1vdGlvbkZsZXhcclxuICAgICAgICAgIG1sPXtbXCJhdXRvXCIsIFwiYXV0b1wiLCAxNl19XHJcbiAgICAgICAgICBtPXtbXCJhdXRvXCIsIFwiaW5pdGlhbFwiXX1cclxuICAgICAgICAgIHc9e1tcIjkwJVwiLCBcIjg1JVwiLCBcIjgwJVwiXX1cclxuICAgICAgICAgIG1heFc9XCI4MDBweFwiXHJcbiAgICAgICAgICBvcGFjaXR5PVwiMFwiXHJcbiAgICAgICAgICBqdXN0aWZ5PVwiY2VudGVyXCJcclxuICAgICAgICAgIGRpcmVjdGlvbj1cImNvbHVtblwiXHJcbiAgICAgICAgICBpbml0aWFsPXt7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDAsXHJcbiAgICAgICAgICAgIHRyYW5zbGF0ZVg6IDE1MFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIGFuaW1hdGU9e3tcclxuICAgICAgICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgICAgICAgdHJhbnNsYXRlWDogMCxcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICAgICAgICAgIGR1cmF0aW9uOiBBTklNQVRJT05fRFVSQVRJT05cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICA8SGVhZGVyIHVuZGVybGluZUNvbG9yPXtPUkFOR0V9IGVtb2ppPVwi8J+Ri1wiIG10PXswfT5cclxuICAgICAgICAgICAgSGV5IVxyXG4gICAgICAgICAgPC9IZWFkZXI+XHJcbiAgICAgICAgICA8Qm94IGFzPVwiaDJcIiBmb250U2l6ZT1cIjJ4bFwiIGZvbnRXZWlnaHQ9XCI0MDBcIiB0ZXh0QWxpZ249XCJsZWZ0XCI+XHJcbiAgICAgICAgICAgIE15IG5hbWUgaXN7XCIgXCJ9XHJcbiAgICAgICAgICAgIDxCb3ggYXM9XCJzdHJvbmdcIiBmb250V2VpZ2h0PVwiNjAwXCI+XHJcbiAgICAgICAgICAgICAgTWVydCBLYWRpclxyXG4gICAgICAgICAgICA8L0JveD57XCIgXCJ9XHJcbiAgICAgICAgICAgIGFuZCBJJmFwb3M7bSBhe1wiIFwifVxyXG4gICAgICAgICAgICA8Qm94IGFzPVwic3BhblwiIHdoaXRlU3BhY2U9XCJub3dyYXBcIj5cclxuICAgICAgICAgICAgTW9iaWxlIEFwcGxpY2F0aW9uIERldmVsb3Blci5cclxuICAgICAgICAgICAgPC9Cb3g+e1wiIFwifVxyXG4gICAgICAgICAgICA8Qm94IGFzPVwic3BhblwiIHdoaXRlU3BhY2U9XCJub3dyYXBcIj5cclxuICAgICAgICAgICAgIEEgc29mdHdhcmUgbG92ZXImbmJzcDtcclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIGZyb217XCIgXCJ9XHJcbiAgICAgICAgICAgIDxCb3ggYXM9XCJzcGFuXCIgd2hpdGVTcGFjZT1cIm5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgIFR1cmtleSDwn4e58J+Ht1xyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgPEJveCBhcz1cImgyXCIgZm9udFNpemU9XCIyeGxcIiBmb250V2VpZ2h0PVwiNDAwXCIgbXQ9ezV9IHRleHRBbGlnbj1cImxlZnRcIj5cclxuICAgICAgICAgIEhleSwgV2VsY29tZSB0byBNZXJ0J3MgRGlnaXRhbCBFbnZpcm9ubWVudCBJJmFwb3M7bVxyXG4gICAgICAgICAgQSBwbGFjZSB0byBzaGFyZSB3aGF0IEkndmUgbGVhcm5lZCBhbmQgd2hhdCBJJ3ZlIGRvbmUu8J+YilxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9Nb3Rpb25GbGV4PlxyXG4gICAgICA8L0ZsZXg+XHJcbiAgICBcclxuXHJcblxyXG4gICAgICAgICAgICA8U3RhdHVzIC8+XHJcblxyXG4gICAgICA8TW90aW9uQm94XHJcbiAgICAgICAgdz1cIjEwMCVcIlxyXG4gICAgICAgIG9wYWNpdHk9XCIwXCJcclxuICAgICAgICBpbml0aWFsPXt7XHJcbiAgICAgICAgICB0cmFuc2xhdGVZOiA4MFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgYW5pbWF0ZT17e1xyXG4gICAgICAgICAgdHJhbnNsYXRlWTogMCxcclxuICAgICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgICAgICAgIGRlbGF5OiBBTklNQVRJT05fRFVSQVRJT04gLSAwLjEsXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiBBTklNQVRJT05fRFVSQVRJT05cclxuICAgICAgICAgIH1cclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBtdD17MTB9PlxyXG4gICAgICAgICAgPFN0YWNrXHJcbiAgICAgICAgICAgIG1iPXsxMH1cclxuICAgICAgICAgICAgbXg9e1swLCAwLCAxMF19XHJcbiAgICAgICAgICAgIHBhZGRpbmc9ezR9XHJcbiAgICAgICAgICAgIGFsaWduPVwic3RhcnRcIlxyXG4gICAgICAgICAgICBib3JkZXJMZWZ0PVwiNHB4IHNvbGlkXCJcclxuICAgICAgICAgICAgYm9yZGVyQ29sb3I9e1wiIzUzYzhjNFwifVxyXG4gICAgICAgICAgICBjb2xvcj17XCJ3aGF0c2FwcFwifVxyXG4gICAgICAgICAgICBfaG92ZXI9e3sgc2hhZG93OiBcImxnXCIgfX1cclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yPXt1c2VDb2xvck1vZGVWYWx1ZShcImdyYXkuMTAwXCIsIFwiIzFlMjUzM1wiKX1cclxuICAgICAgICAgICAgcm91bmRlZD1cInNtXCJcclxuICAgICAgICAgICAgZm9udFNpemU9XCJtZFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxUZXh0IHRleHRBbGlnbj1cImNlbnRlclwiIGNvbG9yPVwiIzUzYzhjNFwiIGZvbnRXZWlnaHQ9XCJib2xkXCI+XHJcbiAgICAgICAgICAgIEhpZ2hsaXN0c1xyXG4gICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgIDxVbm9yZGVyZWRMaXN0IHRleHRBbGlnbj1cImxlZnRcIiBwYWRkaW5nTGVmdD17NX0gbT17MH0+XHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgPE5leHRMaW5rIGhyZWY9eycvYmxvZyd9IHBhc3NIcmVmPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBjb2xvcj17bGlua0NvbG9yfT5cclxuICAgICAgICAgICAgICAgICAgICBCbG9nIHBhZ2VcclxuICAgICAgICAgICAgICAgICAgICA8QmFkZ2UgbWw9XCIxXCIgY29sb3JTY2hlbWU9XCJncmVlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgTmV3XHJcbiAgICAgICAgICAgICAgICAgICAgPC9CYWRnZT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9OZXh0TGluaz5cclxuICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgIDxOZXh0TGluayBocmVmPXsnL29wZW4tc291cmNlJ30gcGFzc0hyZWY+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGNvbG9yPXtsaW5rQ29sb3J9PlxyXG4gICAgICAgICAgICAgICAgICBPcGVuIFNvdXJjZVxyXG4gICAgICAgICAgICAgICAgICAgIDxCYWRnZSBtbD1cIjFcIiBjb2xvclNjaGVtZT1cImJsdWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIE5ld1xyXG4gICAgICAgICAgICAgICAgICAgIDwvQmFkZ2U+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvTmV4dExpbms+XHJcbiAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICA8TGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TmV4dExpbmsgaHJlZj17Jy9wcm9qZWN0cyd9IHBhc3NIcmVmPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBjb2xvcj17bGlua0NvbG9yfT5cclxuICAgICAgICAgICAgICAgICAgUHJvamVjdHMgcGFnZVxyXG4gICAgICAgICAgICAgICAgICA8QmFkZ2UgbWw9XCIxXCIgY29sb3JTY2hlbWU9XCJyZWRcIj5cclxuICAgICAgICAgICAgICAgICAgTmV3XHJcbiAgICAgICAgICAgICAgICAgICAgPC9CYWRnZT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9OZXh0TGluaz5cclxuICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICA8L1Vub3JkZXJlZExpc3Q+XHJcbiAgICAgICAgICA8L1N0YWNrPlxyXG4gICAgICAgICAgPFBvcHVsYXJBcnRpY2xlcyBwb3N0cz17cG9zdHN9IC8+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvTW90aW9uQm94PlxyXG4gICAgPC9GbGV4PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9