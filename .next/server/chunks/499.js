exports.id = 499;
exports.ids = [499];
exports.modules = {

/***/ 499:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o3": function() { return /* reexport safe */ _foundations_colors__WEBPACK_IMPORTED_MODULE_1__.o3; },
/* harmony export */   "uF": function() { return /* reexport safe */ _foundations_colors__WEBPACK_IMPORTED_MODULE_1__.uF; },
/* harmony export */   "vm": function() { return /* binding */ getTagColor; },
/* harmony export */   "rS": function() { return /* binding */ theme; }
/* harmony export */ });
/* unused harmony exports makeTheme, extendedTheme */
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3426);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _foundations_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(759);
/* harmony import */ var _chakra_ui_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4282);
/* harmony import */ var _chakra_ui_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_utils__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8547);
/* harmony import */ var _chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_3__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




 // Re-exports


function makeTheme(overrides = {}) {
  const theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.extendTheme)(_objectSpread(_objectSpread({}, extendedTheme), {}, {
    colors: _foundations_colors__WEBPACK_IMPORTED_MODULE_1__/* .colors */ .O9
  }));
  return (0,_chakra_ui_utils__WEBPACK_IMPORTED_MODULE_2__.mergeWith)(theme, overrides);
}
const extendedTheme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.extendTheme)({
  fonts: {
    body: `Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`
  },
  styles: {
    global: props => ({
      body: {
        color: (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_3__.mode)("gray.700", "whiteAlpha.900")(props),
        bg: (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_3__.mode)("gray.50", "gray.900")(props),
        fontSize: "1.2em",
        ".deleted": {
          color: "#ff8383 !important",
          fontStyle: "normal !important"
        },
        ".inserted": {
          color: "#b5f4a5 !important",
          fontStyle: "normal !important"
        }
      },
      a: {
        color: (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_3__.mode)("blue.500", "blue.200")(props),
        transition: "color 0.15s",
        transitionTimingFunction: "ease-out",
        fontWeight: "500",
        _hover: {
          color: (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_3__.mode)("blue.600", "blue.300")(props)
        }
      }
    })
  },
  components: {
    Popover: {
      parts: ['popper'],
      baseStyle: props => ({
        popper: {
          zIndex: 10,
          maxW: 'xs',
          // maxW: props.width ? props.width : 'xs',
          w: props.width
        }
      })
    },
    Button: {
      baseStyle: {
        fontWeight: "500",
        rounded: "xl"
      }
    },
    Tag: {
      baseStyle: {
        rounded: "lg"
      }
    },
    textarea: {
      baseStyle: {
        background: "green.300"
      }
    },
    Link: {
      baseStyle: {
        fontWeight: "inherit",
        _hover: {
          textDecoration: "none"
        },
        _focus: {
          boxShadow: 'none'
        }
      },
      variants: {
        text: {
          color: "blue.400",
          transition: "color 0.15s",
          transitionTimingFunction: "ease-out",
          fontWeight: "500",
          _hover: {
            color: "blue.300"
          }
        },
        gradient: {
          bgGradient: "linear(to-br, blue.400,blue.300)",
          bgClip: "text",
          fontWeight: "500",
          _hover: {
            bgGradient: "linear(to-br, blue.500,blue.300)",
            bgClip: "text"
          }
        }
      }
    }
  },
  mdx: {
    h1: {
      mt: "2rem",
      mb: ".25rem",
      lineHeight: 1.2,
      fontWeight: "bold",
      fontSize: "1.875rem",
      letterSpacing: "-.025em"
    },
    h2: {
      mt: "4rem",
      mb: "0.5rem",
      lineHeight: 1.3,
      fontWeight: "semibold",
      fontSize: "1.5rem",
      "& + h3": {
        mt: "1.5rem"
      }
    },
    h3: {
      mt: "3rem",
      // mb: "0.5rem",
      lineHeight: 1.25,
      fontWeight: "semibold",
      fontSize: "1.25rem"
    },
    h4: {
      mt: "3rem",
      lineHeight: 1.375,
      fontWeight: "semibold",
      fontSize: "1.125rem"
    },
    p: {
      mt: "1.25rem",
      lineHeight: 1.7,
      "blockquote &": {
        mt: 0
      }
    },
    hr: {
      my: "4rem"
    },
    blockquote: {
      bg: "orange.100",
      borderWidth: "1px",
      borderColor: "orange.200",
      rounded: "lg",
      px: "1.25rem",
      py: "1rem",
      my: "1.5rem"
    },
    ul: {
      mt: "1.5rem",
      ml: "1.25rem",
      "blockquote &": {
        mt: 0
      },
      "& > * + *": {
        mt: "0.25rem"
      }
    },
    code: {
      rounded: "sm",
      px: "1",
      fontSize: "0.875em",
      py: "2px",
      whiteSpace: "nowrap",
      lineHeight: "normal"
    }
  }
});
const getTagColor = type => {
  type = type.toLowerCase();

  if (type === "rails" || type === "ruby") {
    return "red";
  } else if (type === "react") {
    return "cyan";
  } else if (type === "javascript") {
    return "yellow";
  } else if (type === "typescript" || type === "tailwindcss") {
    return "blue";
  } else if (type === "chakraui" || type === "css") {
    return "teal";
  }
};
const theme = makeTheme();

/***/ })

};
;