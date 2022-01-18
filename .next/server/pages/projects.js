(function() {
var exports = {};
exports.id = "pages/projects";
exports.ids = ["pages/projects"];
exports.modules = {

/***/ "./components/layout/header.tsx":
/*!**************************************!*\
  !*** ./components/layout/header.tsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_ui_underlined_text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/ui/underlined-text */ "./components/ui/underlined-text.tsx");

var _jsxFileName = "C:\\Users\\mert\\Desktop\\myportfolio\\components\\layout\\header.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const Header = (_ref) => {
  let {
    children,
    underlineColor,
    emoji
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children", "underlineColor", "emoji"]);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, _objectSpread(_objectSpread({
    as: "h1",
    mt: 10,
    mb: 6,
    fontSize: "3xl",
    lineHeight: "shorter",
    fontWeight: "bold"
  }, props), {}, {
    textAlign: "left",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_ui_underlined_text__WEBPACK_IMPORTED_MODULE_2__.default, {
      color: underlineColor,
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }, undefined), emoji ? ' ' + emoji : '']
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 3
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/layout/meta.tsx":
/*!************************************!*\
  !*** ./components/layout/meta.tsx ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\mert\\Desktop\\myportfolio\\components\\layout\\meta.tsx";


const Meta = ({
  title,
  keywords,
  description,
  image
}) => {
  title = title.includes('Mert') ? title : title.concat(' | Mert Kadir');
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
      name: "viewport",
      content: "width=device-width, initial-scale=1"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
      charSet: "utf-8"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
      name: "keywords",
      content: keywords
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
      name: "description",
      content: description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
      property: "og:title",
      content: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
      property: "og:image",
      content: image ? image : "/logo512.png"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, undefined);
};

Meta.defaultProps = {
  title: "Mert Kadir - Mobile Developer",
  keywords: "Mobil Application Developer",
  description: "Software student mobile lover."
};
/* harmony default export */ __webpack_exports__["default"] = (Meta);

/***/ }),

/***/ "./components/layout/pageLayout.tsx":
/*!******************************************!*\
  !*** ./components/layout/pageLayout.tsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _meta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./meta */ "./components/layout/meta.tsx");

var _jsxFileName = "C:\\Users\\mert\\Desktop\\myportfolio\\components\\layout\\pageLayout.tsx";



const variants = {
  hidden: {
    opacity: 0,
    x: -200,
    y: 0
  },
  enter: {
    opacity: 1,
    x: 0,
    y: 0
  },
  exit: {
    opacity: 0,
    x: 0,
    y: -100
  }
};

const PageLayout = ({
  children,
  title,
  description,
  keywords,
  image
}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_meta__WEBPACK_IMPORTED_MODULE_3__.default, {
    title: title,
    description: description,
    keywords: keywords,
    image: image
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.main, {
    initial: "hidden",
    animate: "enter",
    exit: "exit",
    variants: variants,
    transition: {
      type: "linear"
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 26,
  columnNumber: 3
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (PageLayout);

/***/ }),

/***/ "./components/layout/projectLayout.tsx":
/*!*********************************************!*\
  !*** ./components/layout/projectLayout.tsx ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeftProjectLayoutLarge": function() { return /* binding */ LeftProjectLayoutLarge; },
/* harmony export */   "RightProjectLayoutLarge": function() { return /* binding */ RightProjectLayoutLarge; },
/* harmony export */   "ProjectLayoutMed": function() { return /* binding */ ProjectLayoutMed; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ui_framerAnimations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/framerAnimations */ "./components/ui/framerAnimations.tsx");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/hi */ "./node_modules/react-icons/hi/index.esm.js");
/* harmony import */ var components_ui_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/ui/motion */ "./components/ui/motion.tsx");

var _jsxFileName = "C:\\Users\\mert\\Desktop\\myportfolio\\components\\layout\\projectLayout.tsx";







const ProjectLayoutMed = ({
  project
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {
    display: ["flex", "flex", "none"],
    rounded: "xl",
    borderWidth: "1px",
    borderColor: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useColorModeValue)("gray.600", "gray.700"),
    w: "full",
    h: "20rem",
    textAlign: "left",
    align: "start",
    shadow: "md",
    _hover: {
      border: "md",
      shadow: "lg"
    },
    overflow: "hidden",
    position: "relative",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
      href: project.site,
      target: "_blank",
      rel: "noopener noreferrer",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.AspectRatio, {
        ratio: 1.85 / 1,
        w: "100%",
        h: "100%",
        rounded: "xl",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Image, {
          src: project.imageLight,
          fallback: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Skeleton, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 23
          }, undefined),
          size: "lg",
          width: 'full',
          height: 'full',
          position: "absolute",
          rounded: "xl",
          objectFit: "cover",
          opacity: 0.5
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {
        width: 'full',
        height: 'full',
        position: "absolute",
        bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useColorModeValue)("gray.100", "gray.900"),
        opacity: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useColorModeValue)("0.5", "1")
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_ui_motion__WEBPACK_IMPORTED_MODULE_5__.MotionBox, {
      initial: "initial",
      animate: "animate",
      width: ["full", "70%"],
      rounded: "lg",
      my: "auto",
      px: "6",
      py: "3",
      position: "relative",
      zIndex: "10",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_ui_motion__WEBPACK_IMPORTED_MODULE_5__.MotionBox, {
        variants: _ui_framerAnimations__WEBPACK_IMPORTED_MODULE_3__.stagger,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: project.site,
          target: "_blank",
          rel: "noopener noreferrer",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_ui_motion__WEBPACK_IMPORTED_MODULE_5__.MotionText, {
            variants: _ui_framerAnimations__WEBPACK_IMPORTED_MODULE_3__.fadeInUp,
            fontSize: "2xl",
            fontWeight: "bold",
            color: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useColorModeValue)("gray.900", "gray.100"),
            children: project.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {
            width: "full",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_ui_motion__WEBPACK_IMPORTED_MODULE_5__.MotionText, {
              variants: _ui_framerAnimations__WEBPACK_IMPORTED_MODULE_3__.fadeInUp,
              bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useColorModeValue)("gray.100", "gray.700"),
              rounded: "lg",
              align: "left",
              p: "4",
              fontSize: "sm",
              children: project.description
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 15
            }, undefined), project.techStack && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_ui_motion__WEBPACK_IMPORTED_MODULE_5__.MotionList, {
              variants: _ui_framerAnimations__WEBPACK_IMPORTED_MODULE_3__.fadeInUp,
              display: "flex",
              fontSize: "xs",
              justifyContent: "start",
              mt: "3",
              color: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useColorModeValue)("gray.900", "gray.100"),
              fontWeight: "bold",
              children: project.techStack.map((s, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.ListItem, {
                mr: "2",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                  children: s
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 67,
                  columnNumber: 23
                }, undefined)
              }, index, false, {
                fileName: _jsxFileName,
                lineNumber: 66,
                columnNumber: 21
              }, undefined))
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_ui_motion__WEBPACK_IMPORTED_MODULE_5__.MotionFlex, {
          variants: _ui_framerAnimations__WEBPACK_IMPORTED_MODULE_3__.fadeInUp,
          pt: 2,
          mt: 1,
          justifyContent: "start",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: project.site,
            target: "_blank",
            rel: "noopener noreferrer",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.IconButton, {
              colorScheme: "gray",
              rounded: "full",
              size: "md",
              "aria-label": "medal",
              icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_hi__WEBPACK_IMPORTED_MODULE_6__.HiOutlineExternalLink, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 91,
                columnNumber: 23
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, undefined);
};

const LeftProjectLayoutLarge = ({
  project
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {
    width: "full",
    display: ["none", "none", "flex"],
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_ui_motion__WEBPACK_IMPORTED_MODULE_5__.MotionBox, {
      whileHover: {
        scale: 1.02
      },
      whileTap: {
        scale: 0.98
      },
      initial: {
        x: 500,
        opacity: 0
      },
      animate: {
        x: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          ease: "easeInOut"
        }
      },
      rounded: "xl",
      borderWidth: "1px",
      borderColor: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useColorModeValue)("gray.600", "gray.700"),
      w: "80%",
      h: "24rem",
      textAlign: "left",
      align: "start",
      spacing: 4,
      shadow: "md",
      _hover: {
        border: "md",
        shadow: "lg"
      },
      overflow: "hidden",
      position: "relative",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: project.site,
        target: "_blank",
        rel: "noopener noreferrer",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.AspectRatio, {
          ratio: 1.85 / 1,
          w: "100%",
          h: "100%",
          rounded: "xl",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Image, {
            src: project.imageLight,
            fallback: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Skeleton, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 142,
              columnNumber: 25
            }, undefined),
            size: "lg",
            width: 'full',
            height: 'full',
            position: "absolute",
            rounded: "xl",
            objectFit: "cover",
            opacity: 0.5,
            _hover: {
              opacity: 1
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_ui_motion__WEBPACK_IMPORTED_MODULE_5__.MotionBox, {
      initial: "initial",
      animate: "animate",
      width: "40%",
      rounded: "lg",
      my: "auto",
      zIndex: "10",
      ml: "-6rem",
      align: "right",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
        variants: _ui_framerAnimations__WEBPACK_IMPORTED_MODULE_3__.stagger,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: project.site,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "text-right",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_ui_motion__WEBPACK_IMPORTED_MODULE_5__.MotionText, {
            variants: _ui_framerAnimations__WEBPACK_IMPORTED_MODULE_3__.fadeInUp,
            fontSize: "3xl",
            fontWeight: "bold",
            color: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useColorModeValue)("gray.900", "gray.100"),
            children: project.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 160,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {
          width: "full",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_ui_motion__WEBPACK_IMPORTED_MODULE_5__.MotionText, {
            variants: _ui_framerAnimations__WEBPACK_IMPORTED_MODULE_3__.fadeInUp,
            bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useColorModeValue)("gray.100", "gray.700"),
            rounded: "lg",
            align: "right",
            p: "4",
            fontSize: "md",
            children: project.description
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 165,
            columnNumber: 13
          }, undefined), project.techStack && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_ui_motion__WEBPACK_IMPORTED_MODULE_5__.MotionList, {
            variants: _ui_framerAnimations__WEBPACK_IMPORTED_MODULE_3__.fadeInUp,
            display: "flex",
            fontSize: "sm",
            justifyContent: "end",
            mt: "3",
            color: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useColorModeValue)("gray.900", "gray.100"),
            fontWeight: "bold",
            children: project.techStack.map((s, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.ListItem, {
              mr: "3",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                children: s
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 179,
                columnNumber: 21
              }, undefined)
            }, index, false, {
              fileName: _jsxFileName,
              lineNumber: 178,
              columnNumber: 19
            }, undefined))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 176,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_ui_motion__WEBPACK_IMPORTED_MODULE_5__.MotionFlex, {
          variants: _ui_framerAnimations__WEBPACK_IMPORTED_MODULE_3__.fadeInUp,
          pt: 2,
          mt: 1,
          justifyContent: "end",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: project.site,
            target: "_blank",
            rel: "noopener noreferrer",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.IconButton, {
              colorScheme: "gray",
              rounded: "full",
              size: "md",
              "aria-label": "medal",
              icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_hi__WEBPACK_IMPORTED_MODULE_6__.HiOutlineExternalLink, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 203,
                columnNumber: 23
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 198,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 197,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 186,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 104,
    columnNumber: 5
  }, undefined);
};

const RightProjectLayoutLarge = ({
  project
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {
    width: "full",
    display: ["none", "none", "flex"],
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_ui_motion__WEBPACK_IMPORTED_MODULE_5__.MotionBox, {
      initial: "initial",
      animate: "animate",
      width: "40%",
      rounded: "lg",
      my: "auto",
      zIndex: "10",
      mr: "-6rem",
      align: "left",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
        variants: _ui_framerAnimations__WEBPACK_IMPORTED_MODULE_3__.stagger,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: project.site,
          target: "_blank",
          rel: "noopener noreferrer",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_ui_motion__WEBPACK_IMPORTED_MODULE_5__.MotionText, {
            variants: _ui_framerAnimations__WEBPACK_IMPORTED_MODULE_3__.fadeInUp,
            fontSize: "3xl",
            fontWeight: "bold",
            color: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useColorModeValue)("gray.900", "gray.100"),
            children: project.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 225,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 220,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {
          width: "full",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_ui_motion__WEBPACK_IMPORTED_MODULE_5__.MotionText, {
            variants: _ui_framerAnimations__WEBPACK_IMPORTED_MODULE_3__.fadeInUp,
            bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useColorModeValue)("gray.100", "gray.700"),
            rounded: "lg",
            align: "left",
            p: "4",
            fontSize: "md",
            children: project.description
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 230,
            columnNumber: 13
          }, undefined), project.techStack && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_ui_motion__WEBPACK_IMPORTED_MODULE_5__.MotionList, {
            variants: _ui_framerAnimations__WEBPACK_IMPORTED_MODULE_3__.fadeInUp,
            display: "flex",
            fontSize: "sm",
            justifyContent: "start",
            mt: "3",
            color: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useColorModeValue)("gray.900", "gray.100"),
            fontWeight: "bold",
            children: project.techStack.map((s, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.ListItem, {
              mr: "3",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                children: s
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 244,
                columnNumber: 21
              }, undefined)
            }, index, false, {
              fileName: _jsxFileName,
              lineNumber: 243,
              columnNumber: 19
            }, undefined))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 241,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 229,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_ui_motion__WEBPACK_IMPORTED_MODULE_5__.MotionFlex, {
          variants: _ui_framerAnimations__WEBPACK_IMPORTED_MODULE_3__.fadeInUp,
          pt: 2,
          mt: 1,
          justifyContent: "start",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: project.site,
            target: "_blank",
            rel: "noopener noreferrer",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.IconButton, {
              colorScheme: "gray",
              rounded: "full",
              size: "md",
              "aria-label": "medal",
              icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_hi__WEBPACK_IMPORTED_MODULE_6__.HiOutlineExternalLink, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 268,
                columnNumber: 23
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 263,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 262,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 251,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 219,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_ui_motion__WEBPACK_IMPORTED_MODULE_5__.MotionBox, {
      whileHover: {
        scale: 1.02
      },
      whileTap: {
        scale: 0.98
      },
      initial: {
        x: 500,
        opacity: 0
      },
      animate: {
        x: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          ease: "easeInOut"
        }
      },
      rounded: "xl",
      borderWidth: "1px",
      borderColor: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useColorModeValue)("gray.600", "gray.700"),
      w: "80%",
      h: "24rem",
      textAlign: "left",
      align: "start",
      spacing: 4,
      shadow: "md",
      _hover: {
        border: "md",
        shadow: "lg"
      },
      overflow: "hidden",
      position: "relative",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: project.site,
        target: "_blank",
        rel: "noopener noreferrer",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.AspectRatio, {
          ratio: 1.85 / 1,
          w: "100%",
          h: "100%",
          rounded: "xl",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Image, {
            src: project.imageLight,
            fallback: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Skeleton, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 301,
              columnNumber: 25
            }, undefined),
            size: "lg",
            width: 'full',
            height: 'full',
            position: "absolute",
            rounded: "xl",
            objectFit: "cover",
            opacity: 0.5,
            _hover: {
              opacity: 1
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 300,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 299,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 298,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 216,
    columnNumber: 5
  }, undefined);
};



/***/ }),

/***/ "./components/ui/framerAnimations.tsx":
/*!********************************************!*\
  !*** ./components/ui/framerAnimations.tsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "easing": function() { return /* binding */ easing; },
/* harmony export */   "stagger": function() { return /* binding */ stagger; },
/* harmony export */   "fadeInUp": function() { return /* binding */ fadeInUp; }
/* harmony export */ });
const easing = [0.6, -0.05, 0.01, 0.99];
const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};
const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: {
      duration: 0.6,
      ease: easing
    }
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing
    }
  }
};

/***/ }),

/***/ "./components/ui/motion.tsx":
/*!**********************************!*\
  !*** ./components/ui/motion.tsx ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MotionBox": function() { return /* binding */ MotionBox; },
/* harmony export */   "MotionFlex": function() { return /* binding */ MotionFlex; },
/* harmony export */   "MotionText": function() { return /* binding */ MotionText; },
/* harmony export */   "MotionList": function() { return /* binding */ MotionList; },
/* harmony export */   "MotionImage": function() { return /* binding */ MotionImage; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\mert\\Desktop\\myportfolio\\components\\ui\\motion.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const MotionBox = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion)((0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref) => {
  const chakraProps = Object.fromEntries( // do not pass framer props to DOM element
  Object.entries(props).filter(([key]) => !(0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.isValidMotionProp)(key)));
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, _objectSpread({
    ref: ref
  }, chakraProps), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 12
  }, undefined);
}));
const MotionFlex = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion)((0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref) => {
  const chakraProps = Object.fromEntries( // do not pass framer props to DOM element
  Object.entries(props).filter(([key]) => !(0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.isValidMotionProp)(key)));
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, _objectSpread({
    ref: ref
  }, chakraProps), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 12
  }, undefined);
}));
const MotionText = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion)((0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref) => {
  const chakraProps = Object.fromEntries( // do not pass framer props to DOM element
  Object.entries(props).filter(([key]) => !(0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.isValidMotionProp)(key)));
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, _objectSpread({
    ref: ref
  }, chakraProps), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 12
  }, undefined);
}));
const MotionList = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion)((0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref) => {
  const chakraProps = Object.fromEntries( // do not pass framer props to DOM element
  Object.entries(props).filter(([key]) => !(0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.isValidMotionProp)(key)));
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.List, _objectSpread({
    ref: ref
  }, chakraProps), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 12
  }, undefined);
}));
const MotionImage = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion)((0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref) => {
  const chakraProps = Object.fromEntries(Object.entries(props).filter(([key]) => !(0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.isValidMotionProp)(key)));
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, _objectSpread({
    ref: ref,
    fallbackSrc: '/assets/images/placeholder.png'
  }, chakraProps), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 57,
    columnNumber: 9
  }, undefined);
}));

/***/ }),

/***/ "./components/ui/page-transitions.tsx":
/*!********************************************!*\
  !*** ./components/ui/page-transitions.tsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "easing": function() { return /* binding */ easing; },
/* harmony export */   "stagger": function() { return /* binding */ stagger; },
/* harmony export */   "fadeInUp": function() { return /* binding */ fadeInUp; },
/* harmony export */   "container": function() { return /* binding */ container; },
/* harmony export */   "item": function() { return /* binding */ item; },
/* harmony export */   "PageSlideFade": function() { return /* binding */ PageSlideFade; },
/* harmony export */   "StaggerChildren": function() { return /* binding */ StaggerChildren; },
/* harmony export */   "CardTransition": function() { return /* binding */ CardTransition; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./motion */ "./components/ui/motion.tsx");

var _jsxFileName = "C:\\Users\\mert\\Desktop\\myportfolio\\components\\ui\\page-transitions.tsx";


const staggerVariants = {
  initial: {
    opacity: 0,
    translateY: -20
  },
  enter: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.4
    }
  },
  exit: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1
    }
  }
};
const variants = {
  initial: {
    opacity: 0,
    translateY: -20
  },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      y: {
        stiffness: 1000,
        velocity: -100
      }
    }
  },
  exit: {
    y: 50,
    opacity: 0,
    transition: {
      y: {
        stiffness: 1000
      }
    }
  }
};
const easing = [0.6, -0.05, 0.01, 0.99];
const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};
const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: {
      duration: 0.6,
      ease: easing
    }
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing
    }
  }
};
const container = {
  hidden: {
    opacity: 1,
    scale: 0
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};
const item = {
  hidden: {
    y: 20,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1
  }
};
const PageSlideFade = ({
  children
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.SlideFade, {
    in: true,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 86,
    columnNumber: 10
  }, undefined);
};
const StaggerChildren = ({
  children
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_motion__WEBPACK_IMPORTED_MODULE_2__.MotionBox, {
    animate: {
      opacity: 1,
      translateY: 0
    },
    variants: staggerVariants,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 91,
    columnNumber: 5
  }, undefined);
};
const CardTransition = ({
  children
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_motion__WEBPACK_IMPORTED_MODULE_2__.MotionBox, {
    variants: variants,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 104,
    columnNumber: 10
  }, undefined);
};

/***/ }),

/***/ "./components/ui/underlined-text.tsx":
/*!*******************************************!*\
  !*** ./components/ui/underlined-text.tsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\mert\\Desktop\\myportfolio\\components\\ui\\underlined-text.tsx";


const UnderlinedText = props => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
  as: "span",
  display: "inline-block",
  position: "relative",
  children: [props.children, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
    as: "span",
    display: "block",
    position: "absolute",
    bg: 'gray.200',
    w: '100%',
    h: props.h || '1px',
    bottom: -2
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 10,
  columnNumber: 3
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (UnderlinedText);

/***/ }),

/***/ "./data/projectData.tsx":
/*!******************************!*\
  !*** ./data/projectData.tsx ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectsList": function() { return /* binding */ projectsList; }
/* harmony export */ });
const projectsList = [{
  title: "Basic Instagram",
  imageLight: '/assets/images/projects/cover/basicig.png',
  blurHash: "L4ADc400P*Zi4Tu1y;Qo00pH#YXl",
  site: "https://github.com/mertkadirarslan/BasicInstagramClone",
  description: `In its simplest form, Instagram has infrastructure. It has no design and details, has the features to create users, create posts, select photos, annotate and log out.`,
  techStack: ["FireBase", "XML", "Java"]
}];

/***/ }),

/***/ "./pages/projects.tsx":
/*!****************************!*\
  !*** ./pages/projects.tsx ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_projectData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/projectData */ "./data/projectData.tsx");
/* harmony import */ var components_layout_pageLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/layout/pageLayout */ "./components/layout/pageLayout.tsx");
/* harmony import */ var components_ui_page_transitions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/ui/page-transitions */ "./components/ui/page-transitions.tsx");
/* harmony import */ var components_layout_header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/layout/header */ "./components/layout/header.tsx");
/* harmony import */ var components_layout_projectLayout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/layout/projectLayout */ "./components/layout/projectLayout.tsx");


var _jsxFileName = "C:\\Users\\mert\\Desktop\\myportfolio\\pages\\projects.tsx";







const title = "Projects 📚";
const subtitle = "A selection of projects I've worked on, during my career as a software developer.";
const TURQUOISE = "#06b6d4";

const Projects = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_layout_pageLayout__WEBPACK_IMPORTED_MODULE_4__.default, {
      title: title,
      description: subtitle,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_ui_page_transitions__WEBPACK_IMPORTED_MODULE_5__.PageSlideFade, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.VStack, {
          align: "start",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_layout_header__WEBPACK_IMPORTED_MODULE_6__.default, {
            underlineColor: TURQUOISE,
            mt: 0,
            mb: 2,
            children: "Projects"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
            color: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue)("gray.500", "gray.200"),
            textAlign: "left",
            children: subtitle
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.VStack, {
          spacing: 8,
          mt: ["7", "0", "0"],
          children: _data_projectData__WEBPACK_IMPORTED_MODULE_3__.projectsList.map((project, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_layout_projectLayout__WEBPACK_IMPORTED_MODULE_7__.ProjectLayoutMed, {
              project: project
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 17
            }, undefined), index % 2 === 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_layout_projectLayout__WEBPACK_IMPORTED_MODULE_7__.LeftProjectLayoutLarge, {
              project: project
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 19
            }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_layout_projectLayout__WEBPACK_IMPORTED_MODULE_7__.RightProjectLayoutLarge, {
              project: project
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 19
            }, undefined)]
          }, void 0, true))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Projects);

/***/ }),

/***/ "./node_modules/react-icons/hi/index.esm.js":
/*!**************************************************!*\
  !*** ./node_modules/react-icons/hi/index.esm.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HiAcademicCap": function() { return /* binding */ HiAcademicCap; },
/* harmony export */   "HiAdjustments": function() { return /* binding */ HiAdjustments; },
/* harmony export */   "HiAnnotation": function() { return /* binding */ HiAnnotation; },
/* harmony export */   "HiArchive": function() { return /* binding */ HiArchive; },
/* harmony export */   "HiArrowCircleDown": function() { return /* binding */ HiArrowCircleDown; },
/* harmony export */   "HiArrowCircleLeft": function() { return /* binding */ HiArrowCircleLeft; },
/* harmony export */   "HiArrowCircleRight": function() { return /* binding */ HiArrowCircleRight; },
/* harmony export */   "HiArrowCircleUp": function() { return /* binding */ HiArrowCircleUp; },
/* harmony export */   "HiArrowDown": function() { return /* binding */ HiArrowDown; },
/* harmony export */   "HiArrowLeft": function() { return /* binding */ HiArrowLeft; },
/* harmony export */   "HiArrowNarrowDown": function() { return /* binding */ HiArrowNarrowDown; },
/* harmony export */   "HiArrowNarrowLeft": function() { return /* binding */ HiArrowNarrowLeft; },
/* harmony export */   "HiArrowNarrowRight": function() { return /* binding */ HiArrowNarrowRight; },
/* harmony export */   "HiArrowNarrowUp": function() { return /* binding */ HiArrowNarrowUp; },
/* harmony export */   "HiArrowRight": function() { return /* binding */ HiArrowRight; },
/* harmony export */   "HiArrowUp": function() { return /* binding */ HiArrowUp; },
/* harmony export */   "HiArrowsExpand": function() { return /* binding */ HiArrowsExpand; },
/* harmony export */   "HiAtSymbol": function() { return /* binding */ HiAtSymbol; },
/* harmony export */   "HiBackspace": function() { return /* binding */ HiBackspace; },
/* harmony export */   "HiBadgeCheck": function() { return /* binding */ HiBadgeCheck; },
/* harmony export */   "HiBan": function() { return /* binding */ HiBan; },
/* harmony export */   "HiBeaker": function() { return /* binding */ HiBeaker; },
/* harmony export */   "HiBell": function() { return /* binding */ HiBell; },
/* harmony export */   "HiBookOpen": function() { return /* binding */ HiBookOpen; },
/* harmony export */   "HiBookmarkAlt": function() { return /* binding */ HiBookmarkAlt; },
/* harmony export */   "HiBookmark": function() { return /* binding */ HiBookmark; },
/* harmony export */   "HiBriefcase": function() { return /* binding */ HiBriefcase; },
/* harmony export */   "HiCake": function() { return /* binding */ HiCake; },
/* harmony export */   "HiCalculator": function() { return /* binding */ HiCalculator; },
/* harmony export */   "HiCalendar": function() { return /* binding */ HiCalendar; },
/* harmony export */   "HiCamera": function() { return /* binding */ HiCamera; },
/* harmony export */   "HiCash": function() { return /* binding */ HiCash; },
/* harmony export */   "HiChartBar": function() { return /* binding */ HiChartBar; },
/* harmony export */   "HiChartPie": function() { return /* binding */ HiChartPie; },
/* harmony export */   "HiChartSquareBar": function() { return /* binding */ HiChartSquareBar; },
/* harmony export */   "HiChatAlt2": function() { return /* binding */ HiChatAlt2; },
/* harmony export */   "HiChatAlt": function() { return /* binding */ HiChatAlt; },
/* harmony export */   "HiChat": function() { return /* binding */ HiChat; },
/* harmony export */   "HiCheckCircle": function() { return /* binding */ HiCheckCircle; },
/* harmony export */   "HiCheck": function() { return /* binding */ HiCheck; },
/* harmony export */   "HiChevronDoubleDown": function() { return /* binding */ HiChevronDoubleDown; },
/* harmony export */   "HiChevronDoubleLeft": function() { return /* binding */ HiChevronDoubleLeft; },
/* harmony export */   "HiChevronDoubleRight": function() { return /* binding */ HiChevronDoubleRight; },
/* harmony export */   "HiChevronDoubleUp": function() { return /* binding */ HiChevronDoubleUp; },
/* harmony export */   "HiChevronDown": function() { return /* binding */ HiChevronDown; },
/* harmony export */   "HiChevronLeft": function() { return /* binding */ HiChevronLeft; },
/* harmony export */   "HiChevronRight": function() { return /* binding */ HiChevronRight; },
/* harmony export */   "HiChevronUp": function() { return /* binding */ HiChevronUp; },
/* harmony export */   "HiChip": function() { return /* binding */ HiChip; },
/* harmony export */   "HiClipboardCheck": function() { return /* binding */ HiClipboardCheck; },
/* harmony export */   "HiClipboardCopy": function() { return /* binding */ HiClipboardCopy; },
/* harmony export */   "HiClipboardList": function() { return /* binding */ HiClipboardList; },
/* harmony export */   "HiClipboard": function() { return /* binding */ HiClipboard; },
/* harmony export */   "HiClock": function() { return /* binding */ HiClock; },
/* harmony export */   "HiCloudDownload": function() { return /* binding */ HiCloudDownload; },
/* harmony export */   "HiCloudUpload": function() { return /* binding */ HiCloudUpload; },
/* harmony export */   "HiCloud": function() { return /* binding */ HiCloud; },
/* harmony export */   "HiCode": function() { return /* binding */ HiCode; },
/* harmony export */   "HiCog": function() { return /* binding */ HiCog; },
/* harmony export */   "HiCollection": function() { return /* binding */ HiCollection; },
/* harmony export */   "HiColorSwatch": function() { return /* binding */ HiColorSwatch; },
/* harmony export */   "HiCreditCard": function() { return /* binding */ HiCreditCard; },
/* harmony export */   "HiCubeTransparent": function() { return /* binding */ HiCubeTransparent; },
/* harmony export */   "HiCube": function() { return /* binding */ HiCube; },
/* harmony export */   "HiCurrencyBangladeshi": function() { return /* binding */ HiCurrencyBangladeshi; },
/* harmony export */   "HiCurrencyDollar": function() { return /* binding */ HiCurrencyDollar; },
/* harmony export */   "HiCurrencyEuro": function() { return /* binding */ HiCurrencyEuro; },
/* harmony export */   "HiCurrencyPound": function() { return /* binding */ HiCurrencyPound; },
/* harmony export */   "HiCurrencyRupee": function() { return /* binding */ HiCurrencyRupee; },
/* harmony export */   "HiCurrencyYen": function() { return /* binding */ HiCurrencyYen; },
/* harmony export */   "HiCursorClick": function() { return /* binding */ HiCursorClick; },
/* harmony export */   "HiDatabase": function() { return /* binding */ HiDatabase; },
/* harmony export */   "HiDesktopComputer": function() { return /* binding */ HiDesktopComputer; },
/* harmony export */   "HiDeviceMobile": function() { return /* binding */ HiDeviceMobile; },
/* harmony export */   "HiDeviceTablet": function() { return /* binding */ HiDeviceTablet; },
/* harmony export */   "HiDocumentAdd": function() { return /* binding */ HiDocumentAdd; },
/* harmony export */   "HiDocumentDownload": function() { return /* binding */ HiDocumentDownload; },
/* harmony export */   "HiDocumentDuplicate": function() { return /* binding */ HiDocumentDuplicate; },
/* harmony export */   "HiDocumentRemove": function() { return /* binding */ HiDocumentRemove; },
/* harmony export */   "HiDocumentReport": function() { return /* binding */ HiDocumentReport; },
/* harmony export */   "HiDocumentSearch": function() { return /* binding */ HiDocumentSearch; },
/* harmony export */   "HiDocumentText": function() { return /* binding */ HiDocumentText; },
/* harmony export */   "HiDocument": function() { return /* binding */ HiDocument; },
/* harmony export */   "HiDotsCircleHorizontal": function() { return /* binding */ HiDotsCircleHorizontal; },
/* harmony export */   "HiDotsHorizontal": function() { return /* binding */ HiDotsHorizontal; },
/* harmony export */   "HiDotsVertical": function() { return /* binding */ HiDotsVertical; },
/* harmony export */   "HiDownload": function() { return /* binding */ HiDownload; },
/* harmony export */   "HiDuplicate": function() { return /* binding */ HiDuplicate; },
/* harmony export */   "HiEmojiHappy": function() { return /* binding */ HiEmojiHappy; },
/* harmony export */   "HiEmojiSad": function() { return /* binding */ HiEmojiSad; },
/* harmony export */   "HiExclamationCircle": function() { return /* binding */ HiExclamationCircle; },
/* harmony export */   "HiExclamation": function() { return /* binding */ HiExclamation; },
/* harmony export */   "HiExternalLink": function() { return /* binding */ HiExternalLink; },
/* harmony export */   "HiEyeOff": function() { return /* binding */ HiEyeOff; },
/* harmony export */   "HiEye": function() { return /* binding */ HiEye; },
/* harmony export */   "HiFastForward": function() { return /* binding */ HiFastForward; },
/* harmony export */   "HiFilm": function() { return /* binding */ HiFilm; },
/* harmony export */   "HiFilter": function() { return /* binding */ HiFilter; },
/* harmony export */   "HiFingerPrint": function() { return /* binding */ HiFingerPrint; },
/* harmony export */   "HiFire": function() { return /* binding */ HiFire; },
/* harmony export */   "HiFlag": function() { return /* binding */ HiFlag; },
/* harmony export */   "HiFolderAdd": function() { return /* binding */ HiFolderAdd; },
/* harmony export */   "HiFolderDownload": function() { return /* binding */ HiFolderDownload; },
/* harmony export */   "HiFolderOpen": function() { return /* binding */ HiFolderOpen; },
/* harmony export */   "HiFolderRemove": function() { return /* binding */ HiFolderRemove; },
/* harmony export */   "HiFolder": function() { return /* binding */ HiFolder; },
/* harmony export */   "HiGift": function() { return /* binding */ HiGift; },
/* harmony export */   "HiGlobeAlt": function() { return /* binding */ HiGlobeAlt; },
/* harmony export */   "HiGlobe": function() { return /* binding */ HiGlobe; },
/* harmony export */   "HiHand": function() { return /* binding */ HiHand; },
/* harmony export */   "HiHashtag": function() { return /* binding */ HiHashtag; },
/* harmony export */   "HiHeart": function() { return /* binding */ HiHeart; },
/* harmony export */   "HiHome": function() { return /* binding */ HiHome; },
/* harmony export */   "HiIdentification": function() { return /* binding */ HiIdentification; },
/* harmony export */   "HiInboxIn": function() { return /* binding */ HiInboxIn; },
/* harmony export */   "HiInbox": function() { return /* binding */ HiInbox; },
/* harmony export */   "HiInformationCircle": function() { return /* binding */ HiInformationCircle; },
/* harmony export */   "HiKey": function() { return /* binding */ HiKey; },
/* harmony export */   "HiLibrary": function() { return /* binding */ HiLibrary; },
/* harmony export */   "HiLightBulb": function() { return /* binding */ HiLightBulb; },
/* harmony export */   "HiLightningBolt": function() { return /* binding */ HiLightningBolt; },
/* harmony export */   "HiLink": function() { return /* binding */ HiLink; },
/* harmony export */   "HiLocationMarker": function() { return /* binding */ HiLocationMarker; },
/* harmony export */   "HiLockClosed": function() { return /* binding */ HiLockClosed; },
/* harmony export */   "HiLockOpen": function() { return /* binding */ HiLockOpen; },
/* harmony export */   "HiLogin": function() { return /* binding */ HiLogin; },
/* harmony export */   "HiLogout": function() { return /* binding */ HiLogout; },
/* harmony export */   "HiMailOpen": function() { return /* binding */ HiMailOpen; },
/* harmony export */   "HiMail": function() { return /* binding */ HiMail; },
/* harmony export */   "HiMap": function() { return /* binding */ HiMap; },
/* harmony export */   "HiMenuAlt1": function() { return /* binding */ HiMenuAlt1; },
/* harmony export */   "HiMenuAlt2": function() { return /* binding */ HiMenuAlt2; },
/* harmony export */   "HiMenuAlt3": function() { return /* binding */ HiMenuAlt3; },
/* harmony export */   "HiMenuAlt4": function() { return /* binding */ HiMenuAlt4; },
/* harmony export */   "HiMenu": function() { return /* binding */ HiMenu; },
/* harmony export */   "HiMicrophone": function() { return /* binding */ HiMicrophone; },
/* harmony export */   "HiMinusCircle": function() { return /* binding */ HiMinusCircle; },
/* harmony export */   "HiMinusSm": function() { return /* binding */ HiMinusSm; },
/* harmony export */   "HiMinus": function() { return /* binding */ HiMinus; },
/* harmony export */   "HiMoon": function() { return /* binding */ HiMoon; },
/* harmony export */   "HiMusicNote": function() { return /* binding */ HiMusicNote; },
/* harmony export */   "HiNewspaper": function() { return /* binding */ HiNewspaper; },
/* harmony export */   "HiOfficeBuilding": function() { return /* binding */ HiOfficeBuilding; },
/* harmony export */   "HiPaperAirplane": function() { return /* binding */ HiPaperAirplane; },
/* harmony export */   "HiPaperClip": function() { return /* binding */ HiPaperClip; },
/* harmony export */   "HiPause": function() { return /* binding */ HiPause; },
/* harmony export */   "HiPencilAlt": function() { return /* binding */ HiPencilAlt; },
/* harmony export */   "HiPencil": function() { return /* binding */ HiPencil; },
/* harmony export */   "HiPhoneIncoming": function() { return /* binding */ HiPhoneIncoming; },
/* harmony export */   "HiPhoneMissedCall": function() { return /* binding */ HiPhoneMissedCall; },
/* harmony export */   "HiPhoneOutgoing": function() { return /* binding */ HiPhoneOutgoing; },
/* harmony export */   "HiPhone": function() { return /* binding */ HiPhone; },
/* harmony export */   "HiPhotograph": function() { return /* binding */ HiPhotograph; },
/* harmony export */   "HiPlay": function() { return /* binding */ HiPlay; },
/* harmony export */   "HiPlusCircle": function() { return /* binding */ HiPlusCircle; },
/* harmony export */   "HiPlusSm": function() { return /* binding */ HiPlusSm; },
/* harmony export */   "HiPlus": function() { return /* binding */ HiPlus; },
/* harmony export */   "HiPresentationChartBar": function() { return /* binding */ HiPresentationChartBar; },
/* harmony export */   "HiPresentationChartLine": function() { return /* binding */ HiPresentationChartLine; },
/* harmony export */   "HiPrinter": function() { return /* binding */ HiPrinter; },
/* harmony export */   "HiPuzzle": function() { return /* binding */ HiPuzzle; },
/* harmony export */   "HiQrcode": function() { return /* binding */ HiQrcode; },
/* harmony export */   "HiQuestionMarkCircle": function() { return /* binding */ HiQuestionMarkCircle; },
/* harmony export */   "HiReceiptRefund": function() { return /* binding */ HiReceiptRefund; },
/* harmony export */   "HiReceiptTax": function() { return /* binding */ HiReceiptTax; },
/* harmony export */   "HiRefresh": function() { return /* binding */ HiRefresh; },
/* harmony export */   "HiReply": function() { return /* binding */ HiReply; },
/* harmony export */   "HiRewind": function() { return /* binding */ HiRewind; },
/* harmony export */   "HiRss": function() { return /* binding */ HiRss; },
/* harmony export */   "HiSaveAs": function() { return /* binding */ HiSaveAs; },
/* harmony export */   "HiSave": function() { return /* binding */ HiSave; },
/* harmony export */   "HiScale": function() { return /* binding */ HiScale; },
/* harmony export */   "HiScissors": function() { return /* binding */ HiScissors; },
/* harmony export */   "HiSearchCircle": function() { return /* binding */ HiSearchCircle; },
/* harmony export */   "HiSearch": function() { return /* binding */ HiSearch; },
/* harmony export */   "HiSelector": function() { return /* binding */ HiSelector; },
/* harmony export */   "HiServer": function() { return /* binding */ HiServer; },
/* harmony export */   "HiShare": function() { return /* binding */ HiShare; },
/* harmony export */   "HiShieldCheck": function() { return /* binding */ HiShieldCheck; },
/* harmony export */   "HiShieldExclamation": function() { return /* binding */ HiShieldExclamation; },
/* harmony export */   "HiShoppingBag": function() { return /* binding */ HiShoppingBag; },
/* harmony export */   "HiShoppingCart": function() { return /* binding */ HiShoppingCart; },
/* harmony export */   "HiSortAscending": function() { return /* binding */ HiSortAscending; },
/* harmony export */   "HiSortDescending": function() { return /* binding */ HiSortDescending; },
/* harmony export */   "HiSparkles": function() { return /* binding */ HiSparkles; },
/* harmony export */   "HiSpeakerphone": function() { return /* binding */ HiSpeakerphone; },
/* harmony export */   "HiStar": function() { return /* binding */ HiStar; },
/* harmony export */   "HiStatusOffline": function() { return /* binding */ HiStatusOffline; },
/* harmony export */   "HiStatusOnline": function() { return /* binding */ HiStatusOnline; },
/* harmony export */   "HiStop": function() { return /* binding */ HiStop; },
/* harmony export */   "HiSun": function() { return /* binding */ HiSun; },
/* harmony export */   "HiSupport": function() { return /* binding */ HiSupport; },
/* harmony export */   "HiSwitchHorizontal": function() { return /* binding */ HiSwitchHorizontal; },
/* harmony export */   "HiSwitchVertical": function() { return /* binding */ HiSwitchVertical; },
/* harmony export */   "HiTable": function() { return /* binding */ HiTable; },
/* harmony export */   "HiTag": function() { return /* binding */ HiTag; },
/* harmony export */   "HiTemplate": function() { return /* binding */ HiTemplate; },
/* harmony export */   "HiTerminal": function() { return /* binding */ HiTerminal; },
/* harmony export */   "HiThumbDown": function() { return /* binding */ HiThumbDown; },
/* harmony export */   "HiThumbUp": function() { return /* binding */ HiThumbUp; },
/* harmony export */   "HiTicket": function() { return /* binding */ HiTicket; },
/* harmony export */   "HiTranslate": function() { return /* binding */ HiTranslate; },
/* harmony export */   "HiTrash": function() { return /* binding */ HiTrash; },
/* harmony export */   "HiTrendingDown": function() { return /* binding */ HiTrendingDown; },
/* harmony export */   "HiTrendingUp": function() { return /* binding */ HiTrendingUp; },
/* harmony export */   "HiTruck": function() { return /* binding */ HiTruck; },
/* harmony export */   "HiUpload": function() { return /* binding */ HiUpload; },
/* harmony export */   "HiUserAdd": function() { return /* binding */ HiUserAdd; },
/* harmony export */   "HiUserCircle": function() { return /* binding */ HiUserCircle; },
/* harmony export */   "HiUserGroup": function() { return /* binding */ HiUserGroup; },
/* harmony export */   "HiUserRemove": function() { return /* binding */ HiUserRemove; },
/* harmony export */   "HiUser": function() { return /* binding */ HiUser; },
/* harmony export */   "HiUsers": function() { return /* binding */ HiUsers; },
/* harmony export */   "HiVariable": function() { return /* binding */ HiVariable; },
/* harmony export */   "HiVideoCamera": function() { return /* binding */ HiVideoCamera; },
/* harmony export */   "HiViewBoards": function() { return /* binding */ HiViewBoards; },
/* harmony export */   "HiViewGridAdd": function() { return /* binding */ HiViewGridAdd; },
/* harmony export */   "HiViewGrid": function() { return /* binding */ HiViewGrid; },
/* harmony export */   "HiViewList": function() { return /* binding */ HiViewList; },
/* harmony export */   "HiVolumeOff": function() { return /* binding */ HiVolumeOff; },
/* harmony export */   "HiVolumeUp": function() { return /* binding */ HiVolumeUp; },
/* harmony export */   "HiWifi": function() { return /* binding */ HiWifi; },
/* harmony export */   "HiXCircle": function() { return /* binding */ HiXCircle; },
/* harmony export */   "HiX": function() { return /* binding */ HiX; },
/* harmony export */   "HiZoomIn": function() { return /* binding */ HiZoomIn; },
/* harmony export */   "HiZoomOut": function() { return /* binding */ HiZoomOut; },
/* harmony export */   "HiOutlineAcademicCap": function() { return /* binding */ HiOutlineAcademicCap; },
/* harmony export */   "HiOutlineAdjustments": function() { return /* binding */ HiOutlineAdjustments; },
/* harmony export */   "HiOutlineAnnotation": function() { return /* binding */ HiOutlineAnnotation; },
/* harmony export */   "HiOutlineArchive": function() { return /* binding */ HiOutlineArchive; },
/* harmony export */   "HiOutlineArrowCircleDown": function() { return /* binding */ HiOutlineArrowCircleDown; },
/* harmony export */   "HiOutlineArrowCircleLeft": function() { return /* binding */ HiOutlineArrowCircleLeft; },
/* harmony export */   "HiOutlineArrowCircleRight": function() { return /* binding */ HiOutlineArrowCircleRight; },
/* harmony export */   "HiOutlineArrowCircleUp": function() { return /* binding */ HiOutlineArrowCircleUp; },
/* harmony export */   "HiOutlineArrowDown": function() { return /* binding */ HiOutlineArrowDown; },
/* harmony export */   "HiOutlineArrowLeft": function() { return /* binding */ HiOutlineArrowLeft; },
/* harmony export */   "HiOutlineArrowNarrowDown": function() { return /* binding */ HiOutlineArrowNarrowDown; },
/* harmony export */   "HiOutlineArrowNarrowLeft": function() { return /* binding */ HiOutlineArrowNarrowLeft; },
/* harmony export */   "HiOutlineArrowNarrowRight": function() { return /* binding */ HiOutlineArrowNarrowRight; },
/* harmony export */   "HiOutlineArrowNarrowUp": function() { return /* binding */ HiOutlineArrowNarrowUp; },
/* harmony export */   "HiOutlineArrowRight": function() { return /* binding */ HiOutlineArrowRight; },
/* harmony export */   "HiOutlineArrowUp": function() { return /* binding */ HiOutlineArrowUp; },
/* harmony export */   "HiOutlineArrowsExpand": function() { return /* binding */ HiOutlineArrowsExpand; },
/* harmony export */   "HiOutlineAtSymbol": function() { return /* binding */ HiOutlineAtSymbol; },
/* harmony export */   "HiOutlineBackspace": function() { return /* binding */ HiOutlineBackspace; },
/* harmony export */   "HiOutlineBadgeCheck": function() { return /* binding */ HiOutlineBadgeCheck; },
/* harmony export */   "HiOutlineBan": function() { return /* binding */ HiOutlineBan; },
/* harmony export */   "HiOutlineBeaker": function() { return /* binding */ HiOutlineBeaker; },
/* harmony export */   "HiOutlineBell": function() { return /* binding */ HiOutlineBell; },
/* harmony export */   "HiOutlineBookOpen": function() { return /* binding */ HiOutlineBookOpen; },
/* harmony export */   "HiOutlineBookmarkAlt": function() { return /* binding */ HiOutlineBookmarkAlt; },
/* harmony export */   "HiOutlineBookmark": function() { return /* binding */ HiOutlineBookmark; },
/* harmony export */   "HiOutlineBriefcase": function() { return /* binding */ HiOutlineBriefcase; },
/* harmony export */   "HiOutlineCake": function() { return /* binding */ HiOutlineCake; },
/* harmony export */   "HiOutlineCalculator": function() { return /* binding */ HiOutlineCalculator; },
/* harmony export */   "HiOutlineCalendar": function() { return /* binding */ HiOutlineCalendar; },
/* harmony export */   "HiOutlineCamera": function() { return /* binding */ HiOutlineCamera; },
/* harmony export */   "HiOutlineCash": function() { return /* binding */ HiOutlineCash; },
/* harmony export */   "HiOutlineChartBar": function() { return /* binding */ HiOutlineChartBar; },
/* harmony export */   "HiOutlineChartPie": function() { return /* binding */ HiOutlineChartPie; },
/* harmony export */   "HiOutlineChartSquareBar": function() { return /* binding */ HiOutlineChartSquareBar; },
/* harmony export */   "HiOutlineChatAlt2": function() { return /* binding */ HiOutlineChatAlt2; },
/* harmony export */   "HiOutlineChatAlt": function() { return /* binding */ HiOutlineChatAlt; },
/* harmony export */   "HiOutlineChat": function() { return /* binding */ HiOutlineChat; },
/* harmony export */   "HiOutlineCheckCircle": function() { return /* binding */ HiOutlineCheckCircle; },
/* harmony export */   "HiOutlineCheck": function() { return /* binding */ HiOutlineCheck; },
/* harmony export */   "HiOutlineChevronDoubleDown": function() { return /* binding */ HiOutlineChevronDoubleDown; },
/* harmony export */   "HiOutlineChevronDoubleLeft": function() { return /* binding */ HiOutlineChevronDoubleLeft; },
/* harmony export */   "HiOutlineChevronDoubleRight": function() { return /* binding */ HiOutlineChevronDoubleRight; },
/* harmony export */   "HiOutlineChevronDoubleUp": function() { return /* binding */ HiOutlineChevronDoubleUp; },
/* harmony export */   "HiOutlineChevronDown": function() { return /* binding */ HiOutlineChevronDown; },
/* harmony export */   "HiOutlineChevronLeft": function() { return /* binding */ HiOutlineChevronLeft; },
/* harmony export */   "HiOutlineChevronRight": function() { return /* binding */ HiOutlineChevronRight; },
/* harmony export */   "HiOutlineChevronUp": function() { return /* binding */ HiOutlineChevronUp; },
/* harmony export */   "HiOutlineChip": function() { return /* binding */ HiOutlineChip; },
/* harmony export */   "HiOutlineClipboardCheck": function() { return /* binding */ HiOutlineClipboardCheck; },
/* harmony export */   "HiOutlineClipboardCopy": function() { return /* binding */ HiOutlineClipboardCopy; },
/* harmony export */   "HiOutlineClipboardList": function() { return /* binding */ HiOutlineClipboardList; },
/* harmony export */   "HiOutlineClipboard": function() { return /* binding */ HiOutlineClipboard; },
/* harmony export */   "HiOutlineClock": function() { return /* binding */ HiOutlineClock; },
/* harmony export */   "HiOutlineCloudDownload": function() { return /* binding */ HiOutlineCloudDownload; },
/* harmony export */   "HiOutlineCloudUpload": function() { return /* binding */ HiOutlineCloudUpload; },
/* harmony export */   "HiOutlineCloud": function() { return /* binding */ HiOutlineCloud; },
/* harmony export */   "HiOutlineCode": function() { return /* binding */ HiOutlineCode; },
/* harmony export */   "HiOutlineCog": function() { return /* binding */ HiOutlineCog; },
/* harmony export */   "HiOutlineCollection": function() { return /* binding */ HiOutlineCollection; },
/* harmony export */   "HiOutlineColorSwatch": function() { return /* binding */ HiOutlineColorSwatch; },
/* harmony export */   "HiOutlineCreditCard": function() { return /* binding */ HiOutlineCreditCard; },
/* harmony export */   "HiOutlineCubeTransparent": function() { return /* binding */ HiOutlineCubeTransparent; },
/* harmony export */   "HiOutlineCube": function() { return /* binding */ HiOutlineCube; },
/* harmony export */   "HiOutlineCurrencyBangladeshi": function() { return /* binding */ HiOutlineCurrencyBangladeshi; },
/* harmony export */   "HiOutlineCurrencyDollar": function() { return /* binding */ HiOutlineCurrencyDollar; },
/* harmony export */   "HiOutlineCurrencyEuro": function() { return /* binding */ HiOutlineCurrencyEuro; },
/* harmony export */   "HiOutlineCurrencyPound": function() { return /* binding */ HiOutlineCurrencyPound; },
/* harmony export */   "HiOutlineCurrencyRupee": function() { return /* binding */ HiOutlineCurrencyRupee; },
/* harmony export */   "HiOutlineCurrencyYen": function() { return /* binding */ HiOutlineCurrencyYen; },
/* harmony export */   "HiOutlineCursorClick": function() { return /* binding */ HiOutlineCursorClick; },
/* harmony export */   "HiOutlineDatabase": function() { return /* binding */ HiOutlineDatabase; },
/* harmony export */   "HiOutlineDesktopComputer": function() { return /* binding */ HiOutlineDesktopComputer; },
/* harmony export */   "HiOutlineDeviceMobile": function() { return /* binding */ HiOutlineDeviceMobile; },
/* harmony export */   "HiOutlineDeviceTablet": function() { return /* binding */ HiOutlineDeviceTablet; },
/* harmony export */   "HiOutlineDocumentAdd": function() { return /* binding */ HiOutlineDocumentAdd; },
/* harmony export */   "HiOutlineDocumentDownload": function() { return /* binding */ HiOutlineDocumentDownload; },
/* harmony export */   "HiOutlineDocumentDuplicate": function() { return /* binding */ HiOutlineDocumentDuplicate; },
/* harmony export */   "HiOutlineDocumentRemove": function() { return /* binding */ HiOutlineDocumentRemove; },
/* harmony export */   "HiOutlineDocumentReport": function() { return /* binding */ HiOutlineDocumentReport; },
/* harmony export */   "HiOutlineDocumentSearch": function() { return /* binding */ HiOutlineDocumentSearch; },
/* harmony export */   "HiOutlineDocumentText": function() { return /* binding */ HiOutlineDocumentText; },
/* harmony export */   "HiOutlineDocument": function() { return /* binding */ HiOutlineDocument; },
/* harmony export */   "HiOutlineDotsCircleHorizontal": function() { return /* binding */ HiOutlineDotsCircleHorizontal; },
/* harmony export */   "HiOutlineDotsHorizontal": function() { return /* binding */ HiOutlineDotsHorizontal; },
/* harmony export */   "HiOutlineDotsVertical": function() { return /* binding */ HiOutlineDotsVertical; },
/* harmony export */   "HiOutlineDownload": function() { return /* binding */ HiOutlineDownload; },
/* harmony export */   "HiOutlineDuplicate": function() { return /* binding */ HiOutlineDuplicate; },
/* harmony export */   "HiOutlineEmojiHappy": function() { return /* binding */ HiOutlineEmojiHappy; },
/* harmony export */   "HiOutlineEmojiSad": function() { return /* binding */ HiOutlineEmojiSad; },
/* harmony export */   "HiOutlineExclamationCircle": function() { return /* binding */ HiOutlineExclamationCircle; },
/* harmony export */   "HiOutlineExclamation": function() { return /* binding */ HiOutlineExclamation; },
/* harmony export */   "HiOutlineExternalLink": function() { return /* binding */ HiOutlineExternalLink; },
/* harmony export */   "HiOutlineEyeOff": function() { return /* binding */ HiOutlineEyeOff; },
/* harmony export */   "HiOutlineEye": function() { return /* binding */ HiOutlineEye; },
/* harmony export */   "HiOutlineFastForward": function() { return /* binding */ HiOutlineFastForward; },
/* harmony export */   "HiOutlineFilm": function() { return /* binding */ HiOutlineFilm; },
/* harmony export */   "HiOutlineFilter": function() { return /* binding */ HiOutlineFilter; },
/* harmony export */   "HiOutlineFingerPrint": function() { return /* binding */ HiOutlineFingerPrint; },
/* harmony export */   "HiOutlineFire": function() { return /* binding */ HiOutlineFire; },
/* harmony export */   "HiOutlineFlag": function() { return /* binding */ HiOutlineFlag; },
/* harmony export */   "HiOutlineFolderAdd": function() { return /* binding */ HiOutlineFolderAdd; },
/* harmony export */   "HiOutlineFolderDownload": function() { return /* binding */ HiOutlineFolderDownload; },
/* harmony export */   "HiOutlineFolderOpen": function() { return /* binding */ HiOutlineFolderOpen; },
/* harmony export */   "HiOutlineFolderRemove": function() { return /* binding */ HiOutlineFolderRemove; },
/* harmony export */   "HiOutlineFolder": function() { return /* binding */ HiOutlineFolder; },
/* harmony export */   "HiOutlineGift": function() { return /* binding */ HiOutlineGift; },
/* harmony export */   "HiOutlineGlobeAlt": function() { return /* binding */ HiOutlineGlobeAlt; },
/* harmony export */   "HiOutlineGlobe": function() { return /* binding */ HiOutlineGlobe; },
/* harmony export */   "HiOutlineHand": function() { return /* binding */ HiOutlineHand; },
/* harmony export */   "HiOutlineHashtag": function() { return /* binding */ HiOutlineHashtag; },
/* harmony export */   "HiOutlineHeart": function() { return /* binding */ HiOutlineHeart; },
/* harmony export */   "HiOutlineHome": function() { return /* binding */ HiOutlineHome; },
/* harmony export */   "HiOutlineIdentification": function() { return /* binding */ HiOutlineIdentification; },
/* harmony export */   "HiOutlineInboxIn": function() { return /* binding */ HiOutlineInboxIn; },
/* harmony export */   "HiOutlineInbox": function() { return /* binding */ HiOutlineInbox; },
/* harmony export */   "HiOutlineInformationCircle": function() { return /* binding */ HiOutlineInformationCircle; },
/* harmony export */   "HiOutlineKey": function() { return /* binding */ HiOutlineKey; },
/* harmony export */   "HiOutlineLibrary": function() { return /* binding */ HiOutlineLibrary; },
/* harmony export */   "HiOutlineLightBulb": function() { return /* binding */ HiOutlineLightBulb; },
/* harmony export */   "HiOutlineLightningBolt": function() { return /* binding */ HiOutlineLightningBolt; },
/* harmony export */   "HiOutlineLink": function() { return /* binding */ HiOutlineLink; },
/* harmony export */   "HiOutlineLocationMarker": function() { return /* binding */ HiOutlineLocationMarker; },
/* harmony export */   "HiOutlineLockClosed": function() { return /* binding */ HiOutlineLockClosed; },
/* harmony export */   "HiOutlineLockOpen": function() { return /* binding */ HiOutlineLockOpen; },
/* harmony export */   "HiOutlineLogin": function() { return /* binding */ HiOutlineLogin; },
/* harmony export */   "HiOutlineLogout": function() { return /* binding */ HiOutlineLogout; },
/* harmony export */   "HiOutlineMailOpen": function() { return /* binding */ HiOutlineMailOpen; },
/* harmony export */   "HiOutlineMail": function() { return /* binding */ HiOutlineMail; },
/* harmony export */   "HiOutlineMap": function() { return /* binding */ HiOutlineMap; },
/* harmony export */   "HiOutlineMenuAlt1": function() { return /* binding */ HiOutlineMenuAlt1; },
/* harmony export */   "HiOutlineMenuAlt2": function() { return /* binding */ HiOutlineMenuAlt2; },
/* harmony export */   "HiOutlineMenuAlt3": function() { return /* binding */ HiOutlineMenuAlt3; },
/* harmony export */   "HiOutlineMenuAlt4": function() { return /* binding */ HiOutlineMenuAlt4; },
/* harmony export */   "HiOutlineMenu": function() { return /* binding */ HiOutlineMenu; },
/* harmony export */   "HiOutlineMicrophone": function() { return /* binding */ HiOutlineMicrophone; },
/* harmony export */   "HiOutlineMinusCircle": function() { return /* binding */ HiOutlineMinusCircle; },
/* harmony export */   "HiOutlineMinusSm": function() { return /* binding */ HiOutlineMinusSm; },
/* harmony export */   "HiOutlineMinus": function() { return /* binding */ HiOutlineMinus; },
/* harmony export */   "HiOutlineMoon": function() { return /* binding */ HiOutlineMoon; },
/* harmony export */   "HiOutlineMusicNote": function() { return /* binding */ HiOutlineMusicNote; },
/* harmony export */   "HiOutlineNewspaper": function() { return /* binding */ HiOutlineNewspaper; },
/* harmony export */   "HiOutlineOfficeBuilding": function() { return /* binding */ HiOutlineOfficeBuilding; },
/* harmony export */   "HiOutlinePaperAirplane": function() { return /* binding */ HiOutlinePaperAirplane; },
/* harmony export */   "HiOutlinePaperClip": function() { return /* binding */ HiOutlinePaperClip; },
/* harmony export */   "HiOutlinePause": function() { return /* binding */ HiOutlinePause; },
/* harmony export */   "HiOutlinePencilAlt": function() { return /* binding */ HiOutlinePencilAlt; },
/* harmony export */   "HiOutlinePencil": function() { return /* binding */ HiOutlinePencil; },
/* harmony export */   "HiOutlinePhoneIncoming": function() { return /* binding */ HiOutlinePhoneIncoming; },
/* harmony export */   "HiOutlinePhoneMissedCall": function() { return /* binding */ HiOutlinePhoneMissedCall; },
/* harmony export */   "HiOutlinePhoneOutgoing": function() { return /* binding */ HiOutlinePhoneOutgoing; },
/* harmony export */   "HiOutlinePhone": function() { return /* binding */ HiOutlinePhone; },
/* harmony export */   "HiOutlinePhotograph": function() { return /* binding */ HiOutlinePhotograph; },
/* harmony export */   "HiOutlinePlay": function() { return /* binding */ HiOutlinePlay; },
/* harmony export */   "HiOutlinePlusCircle": function() { return /* binding */ HiOutlinePlusCircle; },
/* harmony export */   "HiOutlinePlusSm": function() { return /* binding */ HiOutlinePlusSm; },
/* harmony export */   "HiOutlinePlus": function() { return /* binding */ HiOutlinePlus; },
/* harmony export */   "HiOutlinePresentationChartBar": function() { return /* binding */ HiOutlinePresentationChartBar; },
/* harmony export */   "HiOutlinePresentationChartLine": function() { return /* binding */ HiOutlinePresentationChartLine; },
/* harmony export */   "HiOutlinePrinter": function() { return /* binding */ HiOutlinePrinter; },
/* harmony export */   "HiOutlinePuzzle": function() { return /* binding */ HiOutlinePuzzle; },
/* harmony export */   "HiOutlineQrcode": function() { return /* binding */ HiOutlineQrcode; },
/* harmony export */   "HiOutlineQuestionMarkCircle": function() { return /* binding */ HiOutlineQuestionMarkCircle; },
/* harmony export */   "HiOutlineReceiptRefund": function() { return /* binding */ HiOutlineReceiptRefund; },
/* harmony export */   "HiOutlineReceiptTax": function() { return /* binding */ HiOutlineReceiptTax; },
/* harmony export */   "HiOutlineRefresh": function() { return /* binding */ HiOutlineRefresh; },
/* harmony export */   "HiOutlineReply": function() { return /* binding */ HiOutlineReply; },
/* harmony export */   "HiOutlineRewind": function() { return /* binding */ HiOutlineRewind; },
/* harmony export */   "HiOutlineRss": function() { return /* binding */ HiOutlineRss; },
/* harmony export */   "HiOutlineSaveAs": function() { return /* binding */ HiOutlineSaveAs; },
/* harmony export */   "HiOutlineSave": function() { return /* binding */ HiOutlineSave; },
/* harmony export */   "HiOutlineScale": function() { return /* binding */ HiOutlineScale; },
/* harmony export */   "HiOutlineScissors": function() { return /* binding */ HiOutlineScissors; },
/* harmony export */   "HiOutlineSearchCircle": function() { return /* binding */ HiOutlineSearchCircle; },
/* harmony export */   "HiOutlineSearch": function() { return /* binding */ HiOutlineSearch; },
/* harmony export */   "HiOutlineSelector": function() { return /* binding */ HiOutlineSelector; },
/* harmony export */   "HiOutlineServer": function() { return /* binding */ HiOutlineServer; },
/* harmony export */   "HiOutlineShare": function() { return /* binding */ HiOutlineShare; },
/* harmony export */   "HiOutlineShieldCheck": function() { return /* binding */ HiOutlineShieldCheck; },
/* harmony export */   "HiOutlineShieldExclamation": function() { return /* binding */ HiOutlineShieldExclamation; },
/* harmony export */   "HiOutlineShoppingBag": function() { return /* binding */ HiOutlineShoppingBag; },
/* harmony export */   "HiOutlineShoppingCart": function() { return /* binding */ HiOutlineShoppingCart; },
/* harmony export */   "HiOutlineSortAscending": function() { return /* binding */ HiOutlineSortAscending; },
/* harmony export */   "HiOutlineSortDescending": function() { return /* binding */ HiOutlineSortDescending; },
/* harmony export */   "HiOutlineSparkles": function() { return /* binding */ HiOutlineSparkles; },
/* harmony export */   "HiOutlineSpeakerphone": function() { return /* binding */ HiOutlineSpeakerphone; },
/* harmony export */   "HiOutlineStar": function() { return /* binding */ HiOutlineStar; },
/* harmony export */   "HiOutlineStatusOffline": function() { return /* binding */ HiOutlineStatusOffline; },
/* harmony export */   "HiOutlineStatusOnline": function() { return /* binding */ HiOutlineStatusOnline; },
/* harmony export */   "HiOutlineStop": function() { return /* binding */ HiOutlineStop; },
/* harmony export */   "HiOutlineSun": function() { return /* binding */ HiOutlineSun; },
/* harmony export */   "HiOutlineSupport": function() { return /* binding */ HiOutlineSupport; },
/* harmony export */   "HiOutlineSwitchHorizontal": function() { return /* binding */ HiOutlineSwitchHorizontal; },
/* harmony export */   "HiOutlineSwitchVertical": function() { return /* binding */ HiOutlineSwitchVertical; },
/* harmony export */   "HiOutlineTable": function() { return /* binding */ HiOutlineTable; },
/* harmony export */   "HiOutlineTag": function() { return /* binding */ HiOutlineTag; },
/* harmony export */   "HiOutlineTemplate": function() { return /* binding */ HiOutlineTemplate; },
/* harmony export */   "HiOutlineTerminal": function() { return /* binding */ HiOutlineTerminal; },
/* harmony export */   "HiOutlineThumbDown": function() { return /* binding */ HiOutlineThumbDown; },
/* harmony export */   "HiOutlineThumbUp": function() { return /* binding */ HiOutlineThumbUp; },
/* harmony export */   "HiOutlineTicket": function() { return /* binding */ HiOutlineTicket; },
/* harmony export */   "HiOutlineTranslate": function() { return /* binding */ HiOutlineTranslate; },
/* harmony export */   "HiOutlineTrash": function() { return /* binding */ HiOutlineTrash; },
/* harmony export */   "HiOutlineTrendingDown": function() { return /* binding */ HiOutlineTrendingDown; },
/* harmony export */   "HiOutlineTrendingUp": function() { return /* binding */ HiOutlineTrendingUp; },
/* harmony export */   "HiOutlineTruck": function() { return /* binding */ HiOutlineTruck; },
/* harmony export */   "HiOutlineUpload": function() { return /* binding */ HiOutlineUpload; },
/* harmony export */   "HiOutlineUserAdd": function() { return /* binding */ HiOutlineUserAdd; },
/* harmony export */   "HiOutlineUserCircle": function() { return /* binding */ HiOutlineUserCircle; },
/* harmony export */   "HiOutlineUserGroup": function() { return /* binding */ HiOutlineUserGroup; },
/* harmony export */   "HiOutlineUserRemove": function() { return /* binding */ HiOutlineUserRemove; },
/* harmony export */   "HiOutlineUser": function() { return /* binding */ HiOutlineUser; },
/* harmony export */   "HiOutlineUsers": function() { return /* binding */ HiOutlineUsers; },
/* harmony export */   "HiOutlineVariable": function() { return /* binding */ HiOutlineVariable; },
/* harmony export */   "HiOutlineVideoCamera": function() { return /* binding */ HiOutlineVideoCamera; },
/* harmony export */   "HiOutlineViewBoards": function() { return /* binding */ HiOutlineViewBoards; },
/* harmony export */   "HiOutlineViewGridAdd": function() { return /* binding */ HiOutlineViewGridAdd; },
/* harmony export */   "HiOutlineViewGrid": function() { return /* binding */ HiOutlineViewGrid; },
/* harmony export */   "HiOutlineViewList": function() { return /* binding */ HiOutlineViewList; },
/* harmony export */   "HiOutlineVolumeOff": function() { return /* binding */ HiOutlineVolumeOff; },
/* harmony export */   "HiOutlineVolumeUp": function() { return /* binding */ HiOutlineVolumeUp; },
/* harmony export */   "HiOutlineWifi": function() { return /* binding */ HiOutlineWifi; },
/* harmony export */   "HiOutlineXCircle": function() { return /* binding */ HiOutlineXCircle; },
/* harmony export */   "HiOutlineX": function() { return /* binding */ HiOutlineX; },
/* harmony export */   "HiOutlineZoomIn": function() { return /* binding */ HiOutlineZoomIn; },
/* harmony export */   "HiOutlineZoomOut": function() { return /* binding */ HiOutlineZoomOut; }
/* harmony export */ });
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib */ "./node_modules/react-icons/lib/cjs/index.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lib__WEBPACK_IMPORTED_MODULE_0__);
// THIS FILE IS AUTO GENERATED

function HiAcademicCap (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"}}]})(props);
};
function HiAdjustments (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"}}]})(props);
};
function HiAnnotation (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z","clipRule":"evenodd"}}]})(props);
};
function HiArchive (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M4 3a2 2 0 100 4h12a2 2 0 100-4H4z"}},{"tag":"path","attr":{"fillRule":"evenodd","d":"M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z","clipRule":"evenodd"}}]})(props);
};
function HiArrowCircleDown (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z","clipRule":"evenodd"}}]})(props);
};
function HiArrowCircleLeft (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z","clipRule":"evenodd"}}]})(props);
};
function HiArrowCircleRight (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z","clipRule":"evenodd"}}]})(props);
};
function HiArrowCircleUp (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z","clipRule":"evenodd"}}]})(props);
};
function HiArrowDown (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z","clipRule":"evenodd"}}]})(props);
};
function HiArrowLeft (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z","clipRule":"evenodd"}}]})(props);
};
function HiArrowNarrowDown (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z","clipRule":"evenodd"}}]})(props);
};
function HiArrowNarrowLeft (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z","clipRule":"evenodd"}}]})(props);
};
function HiArrowNarrowRight (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z","clipRule":"evenodd"}}]})(props);
};
function HiArrowNarrowUp (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z","clipRule":"evenodd"}}]})(props);
};
function HiArrowRight (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z","clipRule":"evenodd"}}]})(props);
};
function HiArrowUp (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z","clipRule":"evenodd"}}]})(props);
};
function HiArrowsExpand (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 19 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"stroke":"#374151","strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M3 8V4m0 0h4M3 4l4 4m8 0V4m0 0h-4m4 0l-4 4m-8 4v4m0 0h4m-4 0l4-4m8 4l-4-4m4 4v-4m0 4h-4"}}]})(props);
};
function HiAtSymbol (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z","clipRule":"evenodd"}}]})(props);
};
function HiBackspace (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M6.707 4.879A3 3 0 018.828 4H15a3 3 0 013 3v6a3 3 0 01-3 3H8.828a3 3 0 01-2.12-.879l-4.415-4.414a1 1 0 010-1.414l4.414-4.414zm4 2.414a1 1 0 00-1.414 1.414L10.586 10l-1.293 1.293a1 1 0 101.414 1.414L12 11.414l1.293 1.293a1 1 0 001.414-1.414L13.414 10l1.293-1.293a1 1 0 00-1.414-1.414L12 8.586l-1.293-1.293z","clipRule":"evenodd"}}]})(props);
};
function HiBadgeCheck (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z","clipRule":"evenodd"}}]})(props);
};
function HiBan (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z","clipRule":"evenodd"}}]})(props);
};
function HiBeaker (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z","clipRule":"evenodd"}}]})(props);
};
function HiBell (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"}}]})(props);
};
function HiBookOpen (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"}}]})(props);
};
function HiBookmarkAlt (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M3 5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm11 1H6v8l4-2 4 2V6z","clipRule":"evenodd"}}]})(props);
};
function HiBookmark (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"}}]})(props);
};
function HiBriefcase (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z","clipRule":"evenodd"}},{"tag":"path","attr":{"d":"M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"}}]})(props);
};
function HiCake (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M6 3a1 1 0 011-1h.01a1 1 0 010 2H7a1 1 0 01-1-1zm2 3a1 1 0 00-2 0v1a2 2 0 00-2 2v1a2 2 0 00-2 2v.683a3.7 3.7 0 011.055.485 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0A3.7 3.7 0 0118 12.683V12a2 2 0 00-2-2V9a2 2 0 00-2-2V6a1 1 0 10-2 0v1h-1V6a1 1 0 10-2 0v1H8V6zm10 8.868a3.704 3.704 0 01-4.055-.036 1.704 1.704 0 00-1.89 0 3.704 3.704 0 01-4.11 0 1.704 1.704 0 00-1.89 0A3.704 3.704 0 012 14.868V17a1 1 0 001 1h14a1 1 0 001-1v-2.132zM9 3a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm3 0a1 1 0 011-1h.01a1 1 0 110 2H13a1 1 0 01-1-1z","clipRule":"evenodd"}}]})(props);
};
function HiCalculator (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 1a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm4-4a1 1 0 100 2h.01a1 1 0 100-2H13zM9 9a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zM7 8a1 1 0 000 2h.01a1 1 0 000-2H7z","clipRule":"evenodd"}}]})(props);
};
function HiCalendar (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z","clipRule":"evenodd"}}]})(props);
};
function HiCamera (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z","clipRule":"evenodd"}}]})(props);
};
function HiCash (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z","clipRule":"evenodd"}}]})(props);
};
function HiChartBar (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"}}]})(props);
};
function HiChartPie (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"}},{"tag":"path","attr":{"d":"M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"}}]})(props);
};
function HiChartSquareBar (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm9 4a1 1 0 10-2 0v6a1 1 0 102 0V7zm-3 2a1 1 0 10-2 0v4a1 1 0 102 0V9zm-3 3a1 1 0 10-2 0v1a1 1 0 102 0v-1z","clipRule":"evenodd"}}]})(props);
};
function HiChatAlt2 (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"}},{"tag":"path","attr":{"d":"M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"}}]})(props);
};
function HiChatAlt (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z","clipRule":"evenodd"}}]})(props);
};
function HiChat (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z","clipRule":"evenodd"}}]})(props);
};
function HiCheckCircle (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z","clipRule":"evenodd"}}]})(props);
};
function HiCheck (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z","clipRule":"evenodd"}}]})(props);
};
function HiChevronDoubleDown (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z","clipRule":"evenodd"}}]})(props);
};
function HiChevronDoubleLeft (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z","clipRule":"evenodd"}}]})(props);
};
function HiChevronDoubleRight (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z","clipRule":"evenodd"}},{"tag":"path","attr":{"fillRule":"evenodd","d":"M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z","clipRule":"evenodd"}}]})(props);
};
function HiChevronDoubleUp (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M4.293 15.707a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414 0zm0-6a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 5.414 5.707 9.707a1 1 0 01-1.414 0z","clipRule":"evenodd"}}]})(props);
};
function HiChevronDown (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clipRule":"evenodd"}}]})(props);
};
function HiChevronLeft (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z","clipRule":"evenodd"}}]})(props);
};
function HiChevronRight (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clipRule":"evenodd"}}]})(props);
};
function HiChevronUp (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z","clipRule":"evenodd"}}]})(props);
};
function HiChip (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M13 7H7v6h6V7z"}},{"tag":"path","attr":{"fillRule":"evenodd","d":"M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z","clipRule":"evenodd"}}]})(props);
};
function HiClipboardCheck (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"}},{"tag":"path","attr":{"fillRule":"evenodd","d":"M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z","clipRule":"evenodd"}}]})(props);
};
function HiClipboardCopy (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M8 2a1 1 0 000 2h2a1 1 0 100-2H8z"}},{"tag":"path","attr":{"d":"M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 11h2a1 1 0 110 2h-2v-2z"}}]})(props);
};
function HiClipboardList (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"}},{"tag":"path","attr":{"fillRule":"evenodd","d":"M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z","clipRule":"evenodd"}}]})(props);
};
function HiClipboard (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"}},{"tag":"path","attr":{"d":"M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z"}}]})(props);
};
function HiClock (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z","clipRule":"evenodd"}}]})(props);
};
function HiCloudDownload (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M2 9.5A3.5 3.5 0 005.5 13H9v2.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 15.586V13h2.5a4.5 4.5 0 10-.616-8.958 4.002 4.002 0 10-7.753 1.977A3.5 3.5 0 002 9.5zm9 3.5H9V8a1 1 0 012 0v5z","clipRule":"evenodd"}}]})(props);
};
function HiCloudUpload (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z"}},{"tag":"path","attr":{"d":"M9 13h2v5a1 1 0 11-2 0v-5z"}}]})(props);
};
function HiCloud (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z"}}]})(props);
};
function HiCode (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z","clipRule":"evenodd"}}]})(props);
};
function HiCog (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z","clipRule":"evenodd"}}]})(props);
};
function HiCollection (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"}}]})(props);
};
function HiColorSwatch (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z","clipRule":"evenodd"}}]})(props);
};
function HiCreditCard (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"}},{"tag":"path","attr":{"fillRule":"evenodd","d":"M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z","clipRule":"evenodd"}}]})(props);
};
function HiCubeTransparent (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z","clipRule":"evenodd"}}]})(props);
};
function HiCube (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z"}}]})(props);
};
function HiCurrencyBangladeshi (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 18a8 8 0 100-16 8 8 0 000 16zM7 4a1 1 0 000 2 1 1 0 011 1v1H7a1 1 0 000 2h1v3a3 3 0 106 0v-1a1 1 0 10-2 0v1a1 1 0 11-2 0v-3h3a1 1 0 100-2h-3V7a3 3 0 00-3-3z","clipRule":"evenodd"}}]})(props);
};
function HiCurrencyDollar (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"}},{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z","clipRule":"evenodd"}}]})(props);
};
function HiCurrencyEuro (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 18a8 8 0 100-16 8 8 0 000 16zM8.736 6.979C9.208 6.193 9.696 6 10 6c.304 0 .792.193 1.264.979a1 1 0 001.715-1.029C12.279 4.784 11.232 4 10 4s-2.279.784-2.979 1.95c-.285.475-.507 1-.67 1.55H6a1 1 0 000 2h.013a9.358 9.358 0 000 1H6a1 1 0 100 2h.351c.163.55.385 1.075.67 1.55C7.721 15.216 8.768 16 10 16s2.279-.784 2.979-1.95a1 1 0 10-1.715-1.029c-.472.786-.96.979-1.264.979-.304 0-.792-.193-1.264-.979a4.265 4.265 0 01-.264-.521H10a1 1 0 100-2H8.017a7.36 7.36 0 010-1H10a1 1 0 100-2H8.472c.08-.185.167-.36.264-.521z","clipRule":"evenodd"}}]})(props);
};
function HiCurrencyPound (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 18a8 8 0 100-16 8 8 0 000 16zm1-14a3 3 0 00-3 3v2H7a1 1 0 000 2h1v1a1 1 0 01-1 1 1 1 0 100 2h6a1 1 0 100-2H9.83c.11-.313.17-.65.17-1v-1h1a1 1 0 100-2h-1V7a1 1 0 112 0 1 1 0 102 0 3 3 0 00-3-3z","clipRule":"evenodd"}}]})(props);
};
function HiCurrencyRupee (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 18a8 8 0 100-16 8 8 0 000 16zM7 5a1 1 0 100 2h1a2 2 0 011.732 1H7a1 1 0 100 2h2.732A2 2 0 018 11H7a1 1 0 00-.707 1.707l3 3a1 1 0 001.414-1.414l-1.483-1.484A4.008 4.008 0 0011.874 10H13a1 1 0 100-2h-1.126a3.976 3.976 0 00-.41-1H13a1 1 0 100-2H7z","clipRule":"evenodd"}}]})(props);
};
function HiCurrencyYen (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 18a8 8 0 100-16 8 8 0 000 16zM7.858 5.485a1 1 0 00-1.715 1.03L7.633 9H7a1 1 0 100 2h1.834l.166.277V12H7a1 1 0 100 2h2v1a1 1 0 102 0v-1h2a1 1 0 100-2h-2v-.723l.166-.277H13a1 1 0 100-2h-.634l1.492-2.486a1 1 0 10-1.716-1.029L10.034 9h-.068L7.858 5.485z","clipRule":"evenodd"}}]})(props);
};
function HiCursorClick (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z","clipRule":"evenodd"}}]})(props);
};
function HiDatabase (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z"}},{"tag":"path","attr":{"d":"M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z"}},{"tag":"path","attr":{"d":"M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z"}}]})(props);
};
function HiDesktopComputer (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z","clipRule":"evenodd"}}]})(props);
};
function HiDeviceMobile (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z","clipRule":"evenodd"}}]})(props);
};
function HiDeviceTablet (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm4 14a1 1 0 100-2 1 1 0 000 2z","clipRule":"evenodd"}}]})(props);
};
function HiDocumentAdd (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V8z","clipRule":"evenodd"}}]})(props);
};
function HiDocumentDownload (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z","clipRule":"evenodd"}}]})(props);
};
function HiDocumentDuplicate (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z"}},{"tag":"path","attr":{"d":"M3 8a2 2 0 012-2v10h8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"}}]})(props);
};
function HiDocumentRemove (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm1 8a1 1 0 100 2h6a1 1 0 100-2H7z","clipRule":"evenodd"}}]})(props);
};
function HiDocumentReport (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 10a1 1 0 10-2 0v3a1 1 0 102 0v-3zm2-3a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm4-1a1 1 0 10-2 0v7a1 1 0 102 0V8z","clipRule":"evenodd"}}]})(props);
};
function HiDocumentSearch (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2h-1.528A6 6 0 004 9.528V4z"}},{"tag":"path","attr":{"fillRule":"evenodd","d":"M8 10a4 4 0 00-3.446 6.032l-1.261 1.26a1 1 0 101.414 1.415l1.261-1.261A4 4 0 108 10zm-2 4a2 2 0 114 0 2 2 0 01-4 0z","clipRule":"evenodd"}}]})(props);
};
function HiDocumentText (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z","clipRule":"evenodd"}}]})(props);
};
function HiDocument (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z","clipRule":"evenodd"}}]})(props);
};
function HiDotsCircleHorizontal (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 18a8 8 0 100-16 8 8 0 000 16zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z","clipRule":"evenodd"}}]})(props);
};
function HiDotsHorizontal (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"}}]})(props);
};
function HiDotsVertical (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"}}]})(props);
};
function HiDownload (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z","clipRule":"evenodd"}}]})(props);
};
function HiDuplicate (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z"}},{"tag":"path","attr":{"d":"M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z"}}]})(props);
};
function HiEmojiHappy (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z","clipRule":"evenodd"}}]})(props);
};
function HiEmojiSad (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-7.536 5.879a1 1 0 001.415 0 3 3 0 014.242 0 1 1 0 001.415-1.415 5 5 0 00-7.072 0 1 1 0 000 1.415z","clipRule":"evenodd"}}]})(props);
};
function HiExclamationCircle (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z","clipRule":"evenodd"}}]})(props);
};
function HiExclamation (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z","clipRule":"evenodd"}}]})(props);
};
function HiExternalLink (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"}},{"tag":"path","attr":{"d":"M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"}}]})(props);
};
function HiEyeOff (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z","clipRule":"evenodd"}},{"tag":"path","attr":{"d":"M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z"}}]})(props);
};
function HiEye (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M10 12a2 2 0 100-4 2 2 0 000 4z"}},{"tag":"path","attr":{"fillRule":"evenodd","d":"M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z","clipRule":"evenodd"}}]})(props);
};
function HiFastForward (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M4.555 5.168A1 1 0 003 6v8a1 1 0 001.555.832L10 11.202V14a1 1 0 001.555.832l6-4a1 1 0 000-1.664l-6-4A1 1 0 0010 6v2.798l-5.445-3.63z"}}]})(props);
};
function HiFilm (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm3 2h6v4H7V5zm8 8v2h1v-2h-1zm-2-2H7v4h6v-4zm2 0h1V9h-1v2zm1-4V5h-1v2h1zM5 5v2H4V5h1zm0 4H4v2h1V9zm-1 4h1v2H4v-2z","clipRule":"evenodd"}}]})(props);
};
function HiFilter (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z","clipRule":"evenodd"}}]})(props);
};
function HiFingerPrint (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M6.625 2.655A9 9 0 0119 11a1 1 0 11-2 0 7 7 0 00-9.625-6.492 1 1 0 11-.75-1.853zM4.662 4.959A1 1 0 014.75 6.37 6.97 6.97 0 003 11a1 1 0 11-2 0 8.97 8.97 0 012.25-5.953 1 1 0 011.412-.088z","clipRule":"evenodd"}},{"tag":"path","attr":{"fillRule":"evenodd","d":"M5 11a5 5 0 1110 0 1 1 0 11-2 0 3 3 0 10-6 0c0 1.677-.345 3.276-.968 4.729a1 1 0 11-1.838-.789A9.964 9.964 0 005 11zm8.921 2.012a1 1 0 01.831 1.145 19.86 19.86 0 01-.545 2.436 1 1 0 11-1.92-.558c.207-.713.371-1.445.49-2.192a1 1 0 011.144-.83z","clipRule":"evenodd"}},{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 10a1 1 0 011 1c0 2.236-.46 4.368-1.29 6.304a1 1 0 01-1.838-.789A13.952 13.952 0 009 11a1 1 0 011-1z","clipRule":"evenodd"}}]})(props);
};
function HiFire (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z","clipRule":"evenodd"}}]})(props);
};
function HiFlag (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z","clipRule":"evenodd"}}]})(props);
};
function HiFolderAdd (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"}},{"tag":"path","attr":{"stroke":"#fff","strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M8 11h4m-2-2v4"}}]})(props);
};
function HiFolderDownload (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"}},{"tag":"path","attr":{"stroke":"#fff","strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M10 9v4m0 0l-2-2m2 2l2-2"}}]})(props);
};
function HiFolderOpen (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z","clipRule":"evenodd"}},{"tag":"path","attr":{"d":"M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z"}}]})(props);
};
function HiFolderRemove (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"}},{"tag":"path","attr":{"stroke":"#fff","strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M8 11h4"}}]})(props);
};
function HiFolder (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"}}]})(props);
};
function HiGift (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z","clipRule":"evenodd"}},{"tag":"path","attr":{"d":"M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"}}]})(props);
};
function HiGlobeAlt (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z","clipRule":"evenodd"}}]})(props);
};
function HiGlobe (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z","clipRule":"evenodd"}}]})(props);
};
function HiHand (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M9 3a1 1 0 012 0v5.5a.5.5 0 001 0V4a1 1 0 112 0v4.5a.5.5 0 001 0V6a1 1 0 112 0v5a7 7 0 11-14 0V9a1 1 0 012 0v2.5a.5.5 0 001 0V4a1 1 0 012 0v4.5a.5.5 0 001 0V3z","clipRule":"evenodd"}}]})(props);
};
function HiHashtag (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M9.243 3.03a1 1 0 01.727 1.213L9.53 6h2.94l.56-2.243a1 1 0 111.94.486L14.53 6H17a1 1 0 110 2h-2.97l-1 4H15a1 1 0 110 2h-2.47l-.56 2.242a1 1 0 11-1.94-.485L10.47 14H7.53l-.56 2.242a1 1 0 11-1.94-.485L5.47 14H3a1 1 0 110-2h2.97l1-4H5a1 1 0 110-2h2.47l.56-2.243a1 1 0 011.213-.727zM9.03 8l-1 4h2.938l1-4H9.031z","clipRule":"evenodd"}}]})(props);
};
function HiHeart (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z","clipRule":"evenodd"}}]})(props);
};
function HiHome (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"}}]})(props);
};
function HiIdentification (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z","clipRule":"evenodd"}}]})(props);
};
function HiInboxIn (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"}},{"tag":"path","attr":{"d":"M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"}}]})(props);
};
function HiInbox (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z","clipRule":"evenodd"}}]})(props);
};
function HiInformationCircle (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z","clipRule":"evenodd"}}]})(props);
};
function HiKey (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z","clipRule":"evenodd"}}]})(props);
};
function HiLibrary (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10.496 2.132a1 1 0 00-.992 0l-7 4A1 1 0 003 8v7a1 1 0 100 2h14a1 1 0 100-2V8a1 1 0 00.496-1.868l-7-4zM6 9a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1zm3 1a1 1 0 012 0v3a1 1 0 11-2 0v-3zm5-1a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1z","clipRule":"evenodd"}}]})(props);
};
function HiLightBulb (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z"}}]})(props);
};
function HiLightningBolt (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z","clipRule":"evenodd"}}]})(props);
};
function HiLink (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z","clipRule":"evenodd"}}]})(props);
};
function HiLocationMarker (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z","clipRule":"evenodd"}}]})(props);
};
function HiLockClosed (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z","clipRule":"evenodd"}}]})(props);
};
function HiLockOpen (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z"}}]})(props);
};
function HiLogin (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z","clipRule":"evenodd"}}]})(props);
};
function HiLogout (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z","clipRule":"evenodd"}}]})(props);
};
function HiMailOpen (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M2.94 6.412A2 2 0 002 8.108V16a2 2 0 002 2h12a2 2 0 002-2V8.108a2 2 0 00-.94-1.696l-6-3.75a2 2 0 00-2.12 0l-6 3.75zm2.615 2.423a1 1 0 10-1.11 1.664l5 3.333a1 1 0 001.11 0l5-3.333a1 1 0 00-1.11-1.664L10 11.798 5.555 8.835z","clipRule":"evenodd"}}]})(props);
};
function HiMail (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"}},{"tag":"path","attr":{"d":"M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"}}]})(props);
};
function HiMap (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z","clipRule":"evenodd"}}]})(props);
};
function HiMenuAlt1 (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z","clipRule":"evenodd"}}]})(props);
};
function HiMenuAlt2 (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z","clipRule":"evenodd"}}]})(props);
};
function HiMenuAlt3 (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z","clipRule":"evenodd"}}]})(props);
};
function HiMenuAlt4 (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z","clipRule":"evenodd"}}]})(props);
};
function HiMenu (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z","clipRule":"evenodd"}}]})(props);
};
function HiMicrophone (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z","clipRule":"evenodd"}}]})(props);
};
function HiMinusCircle (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z","clipRule":"evenodd"}}]})(props);
};
function HiMinusSm (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z","clipRule":"evenodd"}}]})(props);
};
function HiMinus (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z","clipRule":"evenodd"}}]})(props);
};
function HiMoon (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"}}]})(props);
};
function HiMusicNote (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z"}}]})(props);
};
function HiNewspaper (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z","clipRule":"evenodd"}},{"tag":"path","attr":{"d":"M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"}}]})(props);
};
function HiOfficeBuilding (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z","clipRule":"evenodd"}}]})(props);
};
function HiPaperAirplane (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"}}]})(props);
};
function HiPaperClip (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z","clipRule":"evenodd"}}]})(props);
};
function HiPause (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z","clipRule":"evenodd"}}]})(props);
};
function HiPencilAlt (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"}},{"tag":"path","attr":{"fillRule":"evenodd","d":"M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z","clipRule":"evenodd"}}]})(props);
};
function HiPencil (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"}}]})(props);
};
function HiPhoneIncoming (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M14.414 7l3.293-3.293a1 1 0 00-1.414-1.414L13 5.586V4a1 1 0 10-2 0v4.003a.996.996 0 00.617.921A.997.997 0 0012 9h4a1 1 0 100-2h-1.586z"}},{"tag":"path","attr":{"d":"M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"}}]})(props);
};
function HiPhoneMissedCall (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"}},{"tag":"path","attr":{"d":"M16.707 3.293a1 1 0 010 1.414L15.414 6l1.293 1.293a1 1 0 01-1.414 1.414L14 7.414l-1.293 1.293a1 1 0 11-1.414-1.414L12.586 6l-1.293-1.293a1 1 0 011.414-1.414L14 4.586l1.293-1.293a1 1 0 011.414 0z"}}]})(props);
};
function HiPhoneOutgoing (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M17.924 2.617a.997.997 0 00-.215-.322l-.004-.004A.997.997 0 0017 2h-4a1 1 0 100 2h1.586l-3.293 3.293a1 1 0 001.414 1.414L16 5.414V7a1 1 0 102 0V3a.997.997 0 00-.076-.383z"}},{"tag":"path","attr":{"d":"M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"}}]})(props);
};
function HiPhone (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"}}]})(props);
};
function HiPhotograph (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z","clipRule":"evenodd"}}]})(props);
};
function HiPlay (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z","clipRule":"evenodd"}}]})(props);
};
function HiPlusCircle (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z","clipRule":"evenodd"}}]})(props);
};
function HiPlusSm (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z","clipRule":"evenodd"}}]})(props);
};
function HiPlus (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z","clipRule":"evenodd"}}]})(props);
};
function HiPresentationChartBar (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11 4a1 1 0 10-2 0v4a1 1 0 102 0V7zm-3 1a1 1 0 10-2 0v3a1 1 0 102 0V8zM8 9a1 1 0 00-2 0v2a1 1 0 102 0V9z","clipRule":"evenodd"}}]})(props);
};
function HiPresentationChartLine (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z","clipRule":"evenodd"}}]})(props);
};
function HiPrinter (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0H7v3h6V4zm0 8H7v4h6v-4z","clipRule":"evenodd"}}]})(props);
};
function HiPuzzle (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z"}}]})(props);
};
function HiQrcode (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M3 4a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm2 2V5h1v1H5zM3 13a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1v-3zm2 2v-1h1v1H5zM13 3a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1V4a1 1 0 00-1-1h-3zm1 2v1h1V5h-1z","clipRule":"evenodd"}},{"tag":"path","attr":{"d":"M11 4a1 1 0 10-2 0v1a1 1 0 002 0V4zM10 7a1 1 0 011 1v1h2a1 1 0 110 2h-3a1 1 0 01-1-1V8a1 1 0 011-1zM16 9a1 1 0 100 2 1 1 0 000-2zM9 13a1 1 0 011-1h1a1 1 0 110 2v2a1 1 0 11-2 0v-3zM7 11a1 1 0 100-2H4a1 1 0 100 2h3zM17 13a1 1 0 01-1 1h-2a1 1 0 110-2h2a1 1 0 011 1zM16 17a1 1 0 100-2h-3a1 1 0 100 2h3z"}}]})(props);
};
function HiQuestionMarkCircle (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z","clipRule":"evenodd"}}]})(props);
};
function HiReceiptRefund (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm4.707 3.707a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L8.414 9H10a3 3 0 013 3v1a1 1 0 102 0v-1a5 5 0 00-5-5H8.414l1.293-1.293z","clipRule":"evenodd"}}]})(props);
};
function HiReceiptTax (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm2.5 3a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm6.207.293a1 1 0 00-1.414 0l-6 6a1 1 0 101.414 1.414l6-6a1 1 0 000-1.414zM12.5 10a1.5 1.5 0 100 3 1.5 1.5 0 000-3z","clipRule":"evenodd"}}]})(props);
};
function HiRefresh (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z","clipRule":"evenodd"}}]})(props);
};
function HiReply (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z","clipRule":"evenodd"}}]})(props);
};
function HiRewind (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M8.445 14.832A1 1 0 0010 14v-2.798l5.445 3.63A1 1 0 0017 14V6a1 1 0 00-1.555-.832L10 8.798V6a1 1 0 00-1.555-.832l-6 4a1 1 0 000 1.664l6 4z"}}]})(props);
};
function HiRss (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M5 3a1 1 0 000 2c5.523 0 10 4.477 10 10a1 1 0 102 0C17 8.373 11.627 3 5 3z"}},{"tag":"path","attr":{"d":"M4 9a1 1 0 011-1 7 7 0 017 7 1 1 0 11-2 0 5 5 0 00-5-5 1 1 0 01-1-1zM3 15a2 2 0 114 0 2 2 0 01-4 0z"}}]})(props);
};
function HiSaveAs (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M9.707 7.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L13 8.586V5h3a2 2 0 012 2v5a2 2 0 01-2 2H8a2 2 0 01-2-2V7a2 2 0 012-2h3v3.586L9.707 7.293zM11 3a1 1 0 112 0v2h-2V3z"}},{"tag":"path","attr":{"d":"M4 9a2 2 0 00-2 2v5a2 2 0 002 2h8a2 2 0 002-2H4V9z"}}]})(props);
};
function HiSave (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M7.707 10.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V6h5a2 2 0 012 2v7a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h5v5.586l-1.293-1.293zM9 4a1 1 0 012 0v2H9V4z"}}]})(props);
};
function HiScale (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1zm-5 8.274l-.818 2.552c.25.112.526.174.818.174.292 0 .569-.062.818-.174L5 10.274zm10 0l-.818 2.552c.25.112.526.174.818.174.292 0 .569-.062.818-.174L15 10.274z","clipRule":"evenodd"}}]})(props);
};
function HiScissors (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M5.5 2a3.5 3.5 0 101.665 6.58L8.585 10l-1.42 1.42a3.5 3.5 0 101.414 1.414l8.128-8.127a1 1 0 00-1.414-1.414L10 8.586l-1.42-1.42A3.5 3.5 0 005.5 2zM4 5.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 9a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z","clipRule":"evenodd"}},{"tag":"path","attr":{"d":"M12.828 11.414a1 1 0 00-1.414 1.414l3.879 3.88a1 1 0 001.414-1.415l-3.879-3.879z"}}]})(props);
};
function HiSearchCircle (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M9 9a2 2 0 114 0 2 2 0 01-4 0z"}},{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a4 4 0 00-3.446 6.032l-2.261 2.26a1 1 0 101.414 1.415l2.261-2.261A4 4 0 1011 5z","clipRule":"evenodd"}}]})(props);
};
function HiSearch (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z","clipRule":"evenodd"}}]})(props);
};
function HiSelector (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z","clipRule":"evenodd"}}]})(props);
};
function HiServer (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M2 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 1a1 1 0 11-2 0 1 1 0 012 0zM2 13a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zm14 1a1 1 0 11-2 0 1 1 0 012 0z","clipRule":"evenodd"}}]})(props);
};
function HiShare (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"}}]})(props);
};
function HiShieldCheck (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z","clipRule":"evenodd"}}]})(props);
};
function HiShieldExclamation (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z","clipRule":"evenodd"}}]})(props);
};
function HiShoppingBag (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z","clipRule":"evenodd"}}]})(props);
};
function HiShoppingCart (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"}}]})(props);
};
function HiSortAscending (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h5a1 1 0 000-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM13 16a1 1 0 102 0v-5.586l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 101.414 1.414L13 10.414V16z"}}]})(props);
};
function HiSortDescending (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h7a1 1 0 100-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z"}}]})(props);
};
function HiSparkles (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z","clipRule":"evenodd"}}]})(props);
};
function HiSpeakerphone (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z","clipRule":"evenodd"}}]})(props);
};
function HiStar (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"}}]})(props);
};
function HiStatusOffline (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M3.707 2.293a1 1 0 00-1.414 1.414l6.921 6.922c.05.062.105.118.168.167l6.91 6.911a1 1 0 001.415-1.414l-.675-.675a9.001 9.001 0 00-.668-11.982A1 1 0 1014.95 5.05a7.002 7.002 0 01.657 9.143l-1.435-1.435a5.002 5.002 0 00-.636-6.294A1 1 0 0012.12 7.88c.924.923 1.12 2.3.587 3.415l-1.992-1.992a.922.922 0 00-.018-.018l-6.99-6.991zM3.238 8.187a1 1 0 00-1.933-.516c-.8 3-.025 6.336 2.331 8.693a1 1 0 001.414-1.415 6.997 6.997 0 01-1.812-6.762zM7.4 11.5a1 1 0 10-1.73 1c.214.371.48.72.795 1.035a1 1 0 001.414-1.414c-.191-.191-.35-.4-.478-.622z"}}]})(props);
};
function HiStatusOnline (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M5.05 3.636a1 1 0 010 1.414 7 7 0 000 9.9 1 1 0 11-1.414 1.414 9 9 0 010-12.728 1 1 0 011.414 0zm9.9 0a1 1 0 011.414 0 9 9 0 010 12.728 1 1 0 11-1.414-1.414 7 7 0 000-9.9 1 1 0 010-1.414zM7.879 6.464a1 1 0 010 1.414 3 3 0 000 4.243 1 1 0 11-1.415 1.414 5 5 0 010-7.07 1 1 0 011.415 0zm4.242 0a1 1 0 011.415 0 5 5 0 010 7.072 1 1 0 01-1.415-1.415 3 3 0 000-4.242 1 1 0 010-1.415zM10 9a1 1 0 011 1v.01a1 1 0 11-2 0V10a1 1 0 011-1z","clipRule":"evenodd"}}]})(props);
};
function HiStop (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z","clipRule":"evenodd"}}]})(props);
};
function HiSun (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z","clipRule":"evenodd"}}]})(props);
};
function HiSupport (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z","clipRule":"evenodd"}}]})(props);
};
function HiSwitchHorizontal (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M8 5a1 1 0 100 2h5.586l-1.293 1.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L13.586 5H8zM12 15a1 1 0 100-2H6.414l1.293-1.293a1 1 0 10-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L6.414 15H12z"}}]})(props);
};
function HiSwitchVertical (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M5 12a1 1 0 102 0V6.414l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L5 6.414V12zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z"}}]})(props);
};
function HiTable (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z","clipRule":"evenodd"}}]})(props);
};
function HiTag (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z","clipRule":"evenodd"}}]})(props);
};
function HiTemplate (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"}}]})(props);
};
function HiTerminal (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z","clipRule":"evenodd"}}]})(props);
};
function HiThumbDown (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z"}}]})(props);
};
function HiThumbUp (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"}}]})(props);
};
function HiTicket (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M2 6a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 100 4v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2a2 2 0 100-4V6z"}}]})(props);
};
function HiTranslate (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M7 2a1 1 0 011 1v1h3a1 1 0 110 2H9.578a18.87 18.87 0 01-1.724 4.78c.29.354.596.696.914 1.026a1 1 0 11-1.44 1.389c-.188-.196-.373-.396-.554-.6a19.098 19.098 0 01-3.107 3.567 1 1 0 01-1.334-1.49 17.087 17.087 0 003.13-3.733 18.992 18.992 0 01-1.487-2.494 1 1 0 111.79-.89c.234.47.489.928.764 1.372.417-.934.752-1.913.997-2.927H3a1 1 0 110-2h3V3a1 1 0 011-1zm6 6a1 1 0 01.894.553l2.991 5.982a.869.869 0 01.02.037l.99 1.98a1 1 0 11-1.79.895L15.383 16h-4.764l-.724 1.447a1 1 0 11-1.788-.894l.99-1.98.019-.038 2.99-5.982A1 1 0 0113 8zm-1.382 6h2.764L13 11.236 11.618 14z","clipRule":"evenodd"}}]})(props);
};
function HiTrash (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z","clipRule":"evenodd"}}]})(props);
};
function HiTrendingDown (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z","clipRule":"evenodd"}}]})(props);
};
function HiTrendingUp (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z","clipRule":"evenodd"}}]})(props);
};
function HiTruck (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"}},{"tag":"path","attr":{"d":"M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z"}}]})(props);
};
function HiUpload (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z","clipRule":"evenodd"}}]})(props);
};
function HiUserAdd (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"}}]})(props);
};
function HiUserCircle (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z","clipRule":"evenodd"}}]})(props);
};
function HiUserGroup (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"}}]})(props);
};
function HiUserRemove (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M11 6a3 3 0 11-6 0 3 3 0 016 0zM14 17a6 6 0 00-12 0h12zM13 8a1 1 0 100 2h4a1 1 0 100-2h-4z"}}]})(props);
};
function HiUser (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z","clipRule":"evenodd"}}]})(props);
};
function HiUsers (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"}}]})(props);
};
function HiVariable (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M4.649 3.084A1 1 0 015.163 4.4 13.95 13.95 0 004 10c0 1.993.416 3.886 1.164 5.6a1 1 0 01-1.832.8A15.95 15.95 0 012 10c0-2.274.475-4.44 1.332-6.4a1 1 0 011.317-.516zM12.96 7a3 3 0 00-2.342 1.126l-.328.41-.111-.279A2 2 0 008.323 7H8a1 1 0 000 2h.323l.532 1.33-1.035 1.295a1 1 0 01-.781.375H7a1 1 0 100 2h.039a3 3 0 002.342-1.126l.328-.41.111.279A2 2 0 0011.677 14H12a1 1 0 100-2h-.323l-.532-1.33 1.035-1.295A1 1 0 0112.961 9H13a1 1 0 100-2h-.039zm1.874-2.6a1 1 0 011.833-.8A15.95 15.95 0 0118 10c0 2.274-.475 4.44-1.332 6.4a1 1 0 11-1.832-.8A13.949 13.949 0 0016 10c0-1.993-.416-3.886-1.165-5.6z","clipRule":"evenodd"}}]})(props);
};
function HiVideoCamera (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"}}]})(props);
};
function HiViewBoards (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M2 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1V4zM8 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1H9a1 1 0 01-1-1V4zM15 3a1 1 0 00-1 1v12a1 1 0 001 1h2a1 1 0 001-1V4a1 1 0 00-1-1h-2z"}}]})(props);
};
function HiViewGridAdd (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z"}}]})(props);
};
function HiViewGrid (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"}}]})(props);
};
function HiViewList (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z","clipRule":"evenodd"}}]})(props);
};
function HiVolumeOff (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z","clipRule":"evenodd"}}]})(props);
};
function HiVolumeUp (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z","clipRule":"evenodd"}}]})(props);
};
function HiWifi (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M17.778 8.222c-4.296-4.296-11.26-4.296-15.556 0A1 1 0 01.808 6.808c5.076-5.077 13.308-5.077 18.384 0a1 1 0 01-1.414 1.414zM14.95 11.05a7 7 0 00-9.9 0 1 1 0 01-1.414-1.414 9 9 0 0112.728 0 1 1 0 01-1.414 1.414zM12.12 13.88a3 3 0 00-4.242 0 1 1 0 01-1.415-1.415 5 5 0 017.072 0 1 1 0 01-1.415 1.415zM9 16a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z","clipRule":"evenodd"}}]})(props);
};
function HiXCircle (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z","clipRule":"evenodd"}}]})(props);
};
function HiX (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clipRule":"evenodd"}}]})(props);
};
function HiZoomIn (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"d":"M5 8a1 1 0 011-1h1V6a1 1 0 012 0v1h1a1 1 0 110 2H9v1a1 1 0 11-2 0V9H6a1 1 0 01-1-1z"}},{"tag":"path","attr":{"fillRule":"evenodd","d":"M2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8zm6-4a4 4 0 100 8 4 4 0 000-8z","clipRule":"evenodd"}}]})(props);
};
function HiZoomOut (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z","clipRule":"evenodd"}},{"tag":"path","attr":{"fillRule":"evenodd","d":"M5 8a1 1 0 011-1h4a1 1 0 110 2H6a1 1 0 01-1-1z","clipRule":"evenodd"}}]})(props);
};
function HiOutlineAcademicCap (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"d":"M12 14l9-5-9-5-9 5 9 5z"}},{"tag":"path","attr":{"d":"M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"}},{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"}}]})(props);
};
function HiOutlineAdjustments (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"}}]})(props);
};
function HiOutlineAnnotation (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"}}]})(props);
};
function HiOutlineArchive (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"}}]})(props);
};
function HiOutlineArrowCircleDown (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"}}]})(props);
};
function HiOutlineArrowCircleLeft (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"}}]})(props);
};
function HiOutlineArrowCircleRight (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"}}]})(props);
};
function HiOutlineArrowCircleUp (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"}}]})(props);
};
function HiOutlineArrowDown (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M19 14l-7 7m0 0l-7-7m7 7V3"}}]})(props);
};
function HiOutlineArrowLeft (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M10 19l-7-7m0 0l7-7m-7 7h18"}}]})(props);
};
function HiOutlineArrowNarrowDown (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M16 17l-4 4m0 0l-4-4m4 4V3"}}]})(props);
};
function HiOutlineArrowNarrowLeft (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M7 16l-4-4m0 0l4-4m-4 4h18"}}]})(props);
};
function HiOutlineArrowNarrowRight (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M17 8l4 4m0 0l-4 4m4-4H3"}}]})(props);
};
function HiOutlineArrowNarrowUp (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M8 7l4-4m0 0l4 4m-4-4v18"}}]})(props);
};
function HiOutlineArrowRight (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M14 5l7 7m0 0l-7 7m7-7H3"}}]})(props);
};
function HiOutlineArrowUp (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M5 10l7-7m0 0l7 7m-7-7v18"}}]})(props);
};
function HiOutlineArrowsExpand (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"}}]})(props);
};
function HiOutlineAtSymbol (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"}}]})(props);
};
function HiOutlineBackspace (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z"}}]})(props);
};
function HiOutlineBadgeCheck (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"}}]})(props);
};
function HiOutlineBan (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"}}]})(props);
};
function HiOutlineBeaker (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"}}]})(props);
};
function HiOutlineBell (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"}}]})(props);
};
function HiOutlineBookOpen (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"}}]})(props);
};
function HiOutlineBookmarkAlt (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"}}]})(props);
};
function HiOutlineBookmark (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"}}]})(props);
};
function HiOutlineBriefcase (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"}}]})(props);
};
function HiOutlineCake (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"}}]})(props);
};
function HiOutlineCalculator (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"}}]})(props);
};
function HiOutlineCalendar (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"}}]})(props);
};
function HiOutlineCamera (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"}},{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M15 13a3 3 0 11-6 0 3 3 0 016 0z"}}]})(props);
};
function HiOutlineCash (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"}}]})(props);
};
function HiOutlineChartBar (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"}}]})(props);
};
function HiOutlineChartPie (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"}},{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"}}]})(props);
};
function HiOutlineChartSquareBar (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"}}]})(props);
};
function HiOutlineChatAlt2 (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"}}]})(props);
};
function HiOutlineChatAlt (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"}}]})(props);
};
function HiOutlineChat (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"}}]})(props);
};
function HiOutlineCheckCircle (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"}}]})(props);
};
function HiOutlineCheck (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M5 13l4 4L19 7"}}]})(props);
};
function HiOutlineChevronDoubleDown (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M19 13l-7 7-7-7m14-8l-7 7-7-7"}}]})(props);
};
function HiOutlineChevronDoubleLeft (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M11 19l-7-7 7-7m8 14l-7-7 7-7"}}]})(props);
};
function HiOutlineChevronDoubleRight (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M13 5l7 7-7 7M5 5l7 7-7 7"}}]})(props);
};
function HiOutlineChevronDoubleUp (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M5 11l7-7 7 7M5 19l7-7 7 7"}}]})(props);
};
function HiOutlineChevronDown (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M19 9l-7 7-7-7"}}]})(props);
};
function HiOutlineChevronLeft (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M15 19l-7-7 7-7"}}]})(props);
};
function HiOutlineChevronRight (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M9 5l7 7-7 7"}}]})(props);
};
function HiOutlineChevronUp (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M5 15l7-7 7 7"}}]})(props);
};
function HiOutlineChip (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"}}]})(props);
};
function HiOutlineClipboardCheck (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"}}]})(props);
};
function HiOutlineClipboardCopy (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"}}]})(props);
};
function HiOutlineClipboardList (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"}}]})(props);
};
function HiOutlineClipboard (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"}}]})(props);
};
function HiOutlineClock (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"}}]})(props);
};
function HiOutlineCloudDownload (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"}}]})(props);
};
function HiOutlineCloudUpload (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"}}]})(props);
};
function HiOutlineCloud (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"}}]})(props);
};
function HiOutlineCode (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"}}]})(props);
};
function HiOutlineCog (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"}},{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}}]})(props);
};
function HiOutlineCollection (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"}}]})(props);
};
function HiOutlineColorSwatch (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"}}]})(props);
};
function HiOutlineCreditCard (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"}}]})(props);
};
function HiOutlineCubeTransparent (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"}}]})(props);
};
function HiOutlineCube (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"}}]})(props);
};
function HiOutlineCurrencyBangladeshi (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M11 11V9a2 2 0 00-2-2m2 4v4a2 2 0 104 0v-1m-4-3H9m2 0h4m6 1a9 9 0 11-18 0 9 9 0 0118 0z"}}]})(props);
};
function HiOutlineCurrencyDollar (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}}]})(props);
};
function HiOutlineCurrencyEuro (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M14.121 15.536c-1.171 1.952-3.07 1.952-4.242 0-1.172-1.953-1.172-5.119 0-7.072 1.171-1.952 3.07-1.952 4.242 0M8 10.5h4m-4 3h4m9-1.5a9 9 0 11-18 0 9 9 0 0118 0z"}}]})(props);
};
function HiOutlineCurrencyPound (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M15 9a2 2 0 10-4 0v5a2 2 0 01-2 2h6m-6-4h4m8 0a9 9 0 11-18 0 9 9 0 0118 0z"}}]})(props);
};
function HiOutlineCurrencyRupee (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z"}}]})(props);
};
function HiOutlineCurrencyYen (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M9 8l3 5m0 0l3-5m-3 5v4m-3-5h6m-6 3h6m6-3a9 9 0 11-18 0 9 9 0 0118 0z"}}]})(props);
};
function HiOutlineCursorClick (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"}}]})(props);
};
function HiOutlineDatabase (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"}}]})(props);
};
function HiOutlineDesktopComputer (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"}}]})(props);
};
function HiOutlineDeviceMobile (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"}}]})(props);
};
function HiOutlineDeviceTablet (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"}}]})(props);
};
function HiOutlineDocumentAdd (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"}}]})(props);
};
function HiOutlineDocumentDownload (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"}}]})(props);
};
function HiOutlineDocumentDuplicate (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"}}]})(props);
};
function HiOutlineDocumentRemove (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M9 13h6m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"}}]})(props);
};
function HiOutlineDocumentReport (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"}}]})(props);
};
function HiOutlineDocumentSearch (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z"}}]})(props);
};
function HiOutlineDocumentText (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"}}]})(props);
};
function HiOutlineDocument (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"}}]})(props);
};
function HiOutlineDotsCircleHorizontal (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}}]})(props);
};
function HiOutlineDotsHorizontal (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"}}]})(props);
};
function HiOutlineDotsVertical (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"}}]})(props);
};
function HiOutlineDownload (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"}}]})(props);
};
function HiOutlineDuplicate (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"}}]})(props);
};
function HiOutlineEmojiHappy (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}}]})(props);
};
function HiOutlineEmojiSad (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}}]})(props);
};
function HiOutlineExclamationCircle (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}}]})(props);
};
function HiOutlineExclamation (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"}}]})(props);
};
function HiOutlineExternalLink (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"}}]})(props);
};
function HiOutlineEyeOff (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"}}]})(props);
};
function HiOutlineEye (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}},{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"}}]})(props);
};
function HiOutlineFastForward (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M11.933 12.8a1 1 0 000-1.6L6.6 7.2A1 1 0 005 8v8a1 1 0 001.6.8l5.333-4zM19.933 12.8a1 1 0 000-1.6l-5.333-4A1 1 0 0013 8v8a1 1 0 001.6.8l5.333-4z"}}]})(props);
};
function HiOutlineFilm (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"}}]})(props);
};
function HiOutlineFilter (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"}}]})(props);
};
function HiOutlineFingerPrint (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"}}]})(props);
};
function HiOutlineFire (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"}},{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"}}]})(props);
};
function HiOutlineFlag (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"}}]})(props);
};
function HiOutlineFolderAdd (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"}}]})(props);
};
function HiOutlineFolderDownload (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"}}]})(props);
};
function HiOutlineFolderOpen (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z"}}]})(props);
};
function HiOutlineFolderRemove (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M9 13h6M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"}}]})(props);
};
function HiOutlineFolder (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"}}]})(props);
};
function HiOutlineGift (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"}}]})(props);
};
function HiOutlineGlobeAlt (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"}}]})(props);
};
function HiOutlineGlobe (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}}]})(props);
};
function HiOutlineHand (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"}}]})(props);
};
function HiOutlineHashtag (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M7 20l4-16m2 16l4-16M6 9h14M4 15h14"}}]})(props);
};
function HiOutlineHeart (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"}}]})(props);
};
function HiOutlineHome (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"}}]})(props);
};
function HiOutlineIdentification (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"}}]})(props);
};
function HiOutlineInboxIn (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"}}]})(props);
};
function HiOutlineInbox (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"}}]})(props);
};
function HiOutlineInformationCircle (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}}]})(props);
};
function HiOutlineKey (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"}}]})(props);
};
function HiOutlineLibrary (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"}}]})(props);
};
function HiOutlineLightBulb (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"}}]})(props);
};
function HiOutlineLightningBolt (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M13 10V3L4 14h7v7l9-11h-7z"}}]})(props);
};
function HiOutlineLink (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"}}]})(props);
};
function HiOutlineLocationMarker (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"}},{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M15 11a3 3 0 11-6 0 3 3 0 016 0z"}}]})(props);
};
function HiOutlineLockClosed (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"}}]})(props);
};
function HiOutlineLockOpen (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"}}]})(props);
};
function HiOutlineLogin (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"}}]})(props);
};
function HiOutlineLogout (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"}}]})(props);
};
function HiOutlineMailOpen (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"}}]})(props);
};
function HiOutlineMail (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"}}]})(props);
};
function HiOutlineMap (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"}}]})(props);
};
function HiOutlineMenuAlt1 (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M4 6h16M4 12h8m-8 6h16"}}]})(props);
};
function HiOutlineMenuAlt2 (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M4 6h16M4 12h16M4 18h7"}}]})(props);
};
function HiOutlineMenuAlt3 (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M4 6h16M4 12h16m-7 6h7"}}]})(props);
};
function HiOutlineMenuAlt4 (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M4 8h16M4 16h16"}}]})(props);
};
function HiOutlineMenu (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M4 6h16M4 12h16M4 18h16"}}]})(props);
};
function HiOutlineMicrophone (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"}}]})(props);
};
function HiOutlineMinusCircle (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"}}]})(props);
};
function HiOutlineMinusSm (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M18 12H6"}}]})(props);
};
function HiOutlineMinus (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M20 12H4"}}]})(props);
};
function HiOutlineMoon (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"}}]})(props);
};
function HiOutlineMusicNote (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"}}]})(props);
};
function HiOutlineNewspaper (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"}}]})(props);
};
function HiOutlineOfficeBuilding (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"}}]})(props);
};
function HiOutlinePaperAirplane (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M12 19l9 2-9-18-9 18 9-2zm0 0v-8"}}]})(props);
};
function HiOutlinePaperClip (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"}}]})(props);
};
function HiOutlinePause (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"}}]})(props);
};
function HiOutlinePencilAlt (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"}}]})(props);
};
function HiOutlinePencil (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"}}]})(props);
};
function HiOutlinePhoneIncoming (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M21 3l-6 6m0 0V4m0 5h5M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"}}]})(props);
};
function HiOutlinePhoneMissedCall (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M16 8l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"}}]})(props);
};
function HiOutlinePhoneOutgoing (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M16 3h5m0 0v5m0-5l-6 6M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"}}]})(props);
};
function HiOutlinePhone (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"}}]})(props);
};
function HiOutlinePhotograph (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"}}]})(props);
};
function HiOutlinePlay (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"}},{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}}]})(props);
};
function HiOutlinePlusCircle (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"}}]})(props);
};
function HiOutlinePlusSm (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M12 6v6m0 0v6m0-6h6m-6 0H6"}}]})(props);
};
function HiOutlinePlus (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M12 6v6m0 0v6m0-6h6m-6 0H6"}}]})(props);
};
function HiOutlinePresentationChartBar (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"}}]})(props);
};
function HiOutlinePresentationChartLine (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"}}]})(props);
};
function HiOutlinePrinter (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"}}]})(props);
};
function HiOutlinePuzzle (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"}}]})(props);
};
function HiOutlineQrcode (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"}}]})(props);
};
function HiOutlineQuestionMarkCircle (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}}]})(props);
};
function HiOutlineReceiptRefund (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m9 14V5a2 2 0 00-2-2H6a2 2 0 00-2 2v16l4-2 4 2 4-2 4 2z"}}]})(props);
};
function HiOutlineReceiptTax (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2zM10 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm5 5a.5.5 0 11-1 0 .5.5 0 011 0z"}}]})(props);
};
function HiOutlineRefresh (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"}}]})(props);
};
function HiOutlineReply (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"}}]})(props);
};
function HiOutlineRewind (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.333 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z"}}]})(props);
};
function HiOutlineRss (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M6 5c7.18 0 13 5.82 13 13M6 11a7 7 0 017 7m-6 0a1 1 0 11-2 0 1 1 0 012 0z"}}]})(props);
};
function HiOutlineSaveAs (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M17 16v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-7a2 2 0 012-2h2m3-4H9a2 2 0 00-2 2v7a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-1m-1 4l-3 3m0 0l-3-3m3 3V3"}}]})(props);
};
function HiOutlineSave (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"}}]})(props);
};
function HiOutlineScale (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"}}]})(props);
};
function HiOutlineScissors (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z"}}]})(props);
};
function HiOutlineSearchCircle (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"}}]})(props);
};
function HiOutlineSearch (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"}}]})(props);
};
function HiOutlineSelector (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M8 9l4-4 4 4m0 6l-4 4-4-4"}}]})(props);
};
function HiOutlineServer (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"}}]})(props);
};
function HiOutlineShare (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"}}]})(props);
};
function HiOutlineShieldCheck (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"}}]})(props);
};
function HiOutlineShieldExclamation (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01"}}]})(props);
};
function HiOutlineShoppingBag (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"}}]})(props);
};
function HiOutlineShoppingCart (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"}}]})(props);
};
function HiOutlineSortAscending (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"}}]})(props);
};
function HiOutlineSortDescending (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4"}}]})(props);
};
function HiOutlineSparkles (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"}}]})(props);
};
function HiOutlineSpeakerphone (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"}}]})(props);
};
function HiOutlineStar (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"}}]})(props);
};
function HiOutlineStatusOffline (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-2.83m-1.414 5.658a9 9 0 01-2.167-9.238m7.824 2.167a1 1 0 111.414 1.414m-1.414-1.414L3 3m8.293 8.293l1.414 1.414"}}]})(props);
};
function HiOutlineStatusOnline (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z"}}]})(props);
};
function HiOutlineStop (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}},{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z"}}]})(props);
};
function HiOutlineSun (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"}}]})(props);
};
function HiOutlineSupport (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"}}]})(props);
};
function HiOutlineSwitchHorizontal (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"}}]})(props);
};
function HiOutlineSwitchVertical (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"}}]})(props);
};
function HiOutlineTable (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"}}]})(props);
};
function HiOutlineTag (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"}}]})(props);
};
function HiOutlineTemplate (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"}}]})(props);
};
function HiOutlineTerminal (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"}}]})(props);
};
function HiOutlineThumbDown (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5"}}]})(props);
};
function HiOutlineThumbUp (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"}}]})(props);
};
function HiOutlineTicket (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"}}]})(props);
};
function HiOutlineTranslate (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"}}]})(props);
};
function HiOutlineTrash (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"}}]})(props);
};
function HiOutlineTrendingDown (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"}}]})(props);
};
function HiOutlineTrendingUp (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"}}]})(props);
};
function HiOutlineTruck (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"d":"M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"}},{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"}}]})(props);
};
function HiOutlineUpload (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"}}]})(props);
};
function HiOutlineUserAdd (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"}}]})(props);
};
function HiOutlineUserCircle (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"}}]})(props);
};
function HiOutlineUserGroup (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"}}]})(props);
};
function HiOutlineUserRemove (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M13 7a4 4 0 11-8 0 4 4 0 018 0zM9 14a6 6 0 00-6 6v1h12v-1a6 6 0 00-6-6zM21 12h-6"}}]})(props);
};
function HiOutlineUser (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"}}]})(props);
};
function HiOutlineUsers (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"}}]})(props);
};
function HiOutlineVariable (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M4.871 4A17.926 17.926 0 003 12c0 2.874.673 5.59 1.871 8m14.13 0a17.926 17.926 0 001.87-8c0-2.874-.673-5.59-1.87-8M9 9h1.246a1 1 0 01.961.725l1.586 5.55a1 1 0 00.961.725H15m1-7h-.08a2 2 0 00-1.519.698L9.6 15.302A2 2 0 018.08 16H8"}}]})(props);
};
function HiOutlineVideoCamera (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"}}]})(props);
};
function HiOutlineViewBoards (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"}}]})(props);
};
function HiOutlineViewGridAdd (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"}}]})(props);
};
function HiOutlineViewGrid (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"}}]})(props);
};
function HiOutlineViewList (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M4 6h16M4 10h16M4 14h16M4 18h16"}}]})(props);
};
function HiOutlineVolumeOff (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z","clipRule":"evenodd"}},{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"}}]})(props);
};
function HiOutlineVolumeUp (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"}}]})(props);
};
function HiOutlineWifi (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"}}]})(props);
};
function HiOutlineXCircle (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"}}]})(props);
};
function HiOutlineX (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M6 18L18 6M6 6l12 12"}}]})(props);
};
function HiOutlineZoomIn (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"}}]})(props);
};
function HiOutlineZoomOut (props) {
  return (0,_lib__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"2","d":"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7"}}]})(props);
};


/***/ }),

/***/ "./node_modules/react-icons/lib/cjs/iconBase.js":
/*!******************************************************!*\
  !*** ./node_modules/react-icons/lib/cjs/iconBase.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IconBase = exports.GenIcon = void 0;
var React = __webpack_require__(/*! react */ "react");
var iconContext_1 = __webpack_require__(/*! ./iconContext */ "./node_modules/react-icons/lib/cjs/iconContext.js");
function Tree2Element(tree) {
    return tree && tree.map(function (node, i) { return React.createElement(node.tag, __assign({ key: i }, node.attr), Tree2Element(node.child)); });
}
function GenIcon(data) {
    return function (props) { return (React.createElement(IconBase, __assign({ attr: __assign({}, data.attr) }, props), Tree2Element(data.child))); };
}
exports.GenIcon = GenIcon;
function IconBase(props) {
    var elem = function (conf) {
        var attr = props.attr, size = props.size, title = props.title, svgProps = __rest(props, ["attr", "size", "title"]);
        var computedSize = size || conf.size || "1em";
        var className;
        if (conf.className)
            className = conf.className;
        if (props.className)
            className = (className ? className + ' ' : '') + props.className;
        return (React.createElement("svg", __assign({ stroke: "currentColor", fill: "currentColor", strokeWidth: "0" }, conf.attr, attr, svgProps, { className: className, style: __assign(__assign({ color: props.color || conf.color }, conf.style), props.style), height: computedSize, width: computedSize, xmlns: "http://www.w3.org/2000/svg" }),
            title && React.createElement("title", null, title),
            props.children));
    };
    return iconContext_1.IconContext !== undefined
        ? React.createElement(iconContext_1.IconContext.Consumer, null, function (conf) { return elem(conf); })
        : elem(iconContext_1.DefaultContext);
}
exports.IconBase = IconBase;


/***/ }),

/***/ "./node_modules/react-icons/lib/cjs/iconContext.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-icons/lib/cjs/iconContext.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IconContext = exports.DefaultContext = void 0;
var React = __webpack_require__(/*! react */ "react");
exports.DefaultContext = {
    color: undefined,
    size: undefined,
    className: undefined,
    style: undefined,
    attr: undefined,
};
exports.IconContext = React.createContext && React.createContext(exports.DefaultContext);


/***/ }),

/***/ "./node_modules/react-icons/lib/cjs/iconsManifest.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-icons/lib/cjs/iconsManifest.js ***!
  \***********************************************************/
/***/ (function(module) {

module.exports.IconsManifest = [
  {
    "id": "fa",
    "name": "Font Awesome",
    "projectUrl": "https://fontawesome.com/",
    "license": "CC BY 4.0 License",
    "licenseUrl": "https://creativecommons.org/licenses/by/4.0/"
  },
  {
    "id": "io",
    "name": "Ionicons 4",
    "projectUrl": "https://ionicons.com/",
    "license": "MIT",
    "licenseUrl": "https://github.com/ionic-team/ionicons/blob/master/LICENSE"
  },
  {
    "id": "io5",
    "name": "Ionicons 5",
    "projectUrl": "https://ionicons.com/",
    "license": "MIT",
    "licenseUrl": "https://github.com/ionic-team/ionicons/blob/master/LICENSE"
  },
  {
    "id": "md",
    "name": "Material Design icons",
    "projectUrl": "http://google.github.io/material-design-icons/",
    "license": "Apache License Version 2.0",
    "licenseUrl": "https://github.com/google/material-design-icons/blob/master/LICENSE"
  },
  {
    "id": "ti",
    "name": "Typicons",
    "projectUrl": "http://s-ings.com/typicons/",
    "license": "CC BY-SA 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/"
  },
  {
    "id": "go",
    "name": "Github Octicons icons",
    "projectUrl": "https://octicons.github.com/",
    "license": "MIT",
    "licenseUrl": "https://github.com/primer/octicons/blob/master/LICENSE"
  },
  {
    "id": "fi",
    "name": "Feather",
    "projectUrl": "https://feathericons.com/",
    "license": "MIT",
    "licenseUrl": "https://github.com/feathericons/feather/blob/master/LICENSE"
  },
  {
    "id": "gi",
    "name": "Game Icons",
    "projectUrl": "https://game-icons.net/",
    "license": "CC BY 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/3.0/"
  },
  {
    "id": "wi",
    "name": "Weather Icons",
    "projectUrl": "https://erikflowers.github.io/weather-icons/",
    "license": "SIL OFL 1.1",
    "licenseUrl": "http://scripts.sil.org/OFL"
  },
  {
    "id": "di",
    "name": "Devicons",
    "projectUrl": "https://vorillaz.github.io/devicons/",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "ai",
    "name": "Ant Design Icons",
    "projectUrl": "https://github.com/ant-design/ant-design-icons",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "bs",
    "name": "Bootstrap Icons",
    "projectUrl": "https://github.com/twbs/icons",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "ri",
    "name": "Remix Icon",
    "projectUrl": "https://github.com/Remix-Design/RemixIcon",
    "license": "Apache License Version 2.0",
    "licenseUrl": "http://www.apache.org/licenses/"
  },
  {
    "id": "fc",
    "name": "Flat Color Icons",
    "projectUrl": "https://github.com/icons8/flat-color-icons",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "gr",
    "name": "Grommet-Icons",
    "projectUrl": "https://github.com/grommet/grommet-icons",
    "license": "Apache License Version 2.0",
    "licenseUrl": "http://www.apache.org/licenses/"
  },
  {
    "id": "hi",
    "name": "Heroicons",
    "projectUrl": "https://github.com/tailwindlabs/heroicons",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "si",
    "name": "Simple Icons",
    "projectUrl": "https://simpleicons.org/",
    "license": "CC0 1.0 Universal",
    "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/"
  },
  {
    "id": "im",
    "name": "IcoMoon Free",
    "projectUrl": "https://github.com/Keyamoon/IcoMoon-Free",
    "license": "CC BY 4.0 License"
  },
  {
    "id": "bi",
    "name": "BoxIcons",
    "projectUrl": "https://github.com/atisawd/boxicons",
    "license": "CC BY 4.0 License"
  },
  {
    "id": "cg",
    "name": "css.gg",
    "projectUrl": "https://github.com/astrit/css.gg",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "vsc",
    "name": "VS Code Icons",
    "projectUrl": "https://github.com/microsoft/vscode-codicons",
    "license": "CC BY 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/4.0/"
  }
]

/***/ }),

/***/ "./node_modules/react-icons/lib/cjs/index.js":
/*!***************************************************!*\
  !*** ./node_modules/react-icons/lib/cjs/index.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./iconsManifest */ "./node_modules/react-icons/lib/cjs/iconsManifest.js"), exports);
__exportStar(__webpack_require__(/*! ./iconBase */ "./node_modules/react-icons/lib/cjs/iconBase.js"), exports);
__exportStar(__webpack_require__(/*! ./iconContext */ "./node_modules/react-icons/lib/cjs/iconContext.js"), exports);


/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@chakra-ui/react");;

/***/ }),

/***/ "framer-motion":
/*!********************************!*\
  !*** external "framer-motion" ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = require("framer-motion");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/projects.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9jb21wb25lbnRzL2xheW91dC9oZWFkZXIudHN4Iiwid2VicGFjazovL3BvcnRmb2xpby8uL2NvbXBvbmVudHMvbGF5b3V0L21ldGEudHN4Iiwid2VicGFjazovL3BvcnRmb2xpby8uL2NvbXBvbmVudHMvbGF5b3V0L3BhZ2VMYXlvdXQudHN4Iiwid2VicGFjazovL3BvcnRmb2xpby8uL2NvbXBvbmVudHMvbGF5b3V0L3Byb2plY3RMYXlvdXQudHN4Iiwid2VicGFjazovL3BvcnRmb2xpby8uL2NvbXBvbmVudHMvdWkvZnJhbWVyQW5pbWF0aW9ucy50c3giLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vY29tcG9uZW50cy91aS9tb3Rpb24udHN4Iiwid2VicGFjazovL3BvcnRmb2xpby8uL2NvbXBvbmVudHMvdWkvcGFnZS10cmFuc2l0aW9ucy50c3giLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vY29tcG9uZW50cy91aS91bmRlcmxpbmVkLXRleHQudHN4Iiwid2VicGFjazovL3BvcnRmb2xpby8uL2RhdGEvcHJvamVjdERhdGEudHN4Iiwid2VicGFjazovL3BvcnRmb2xpby8uL3BhZ2VzL3Byb2plY3RzLnRzeCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvcmVhY3QtaWNvbnMvaGkvaW5kZXguZXNtLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9yZWFjdC1pY29ucy9saWIvY2pzL2ljb25CYXNlLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9yZWFjdC1pY29ucy9saWIvY2pzL2ljb25Db250ZXh0LmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9yZWFjdC1pY29ucy9saWIvY2pzL2ljb25zTWFuaWZlc3QuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWljb25zL2xpYi9janMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL2V4dGVybmFsIFwiQGNoYWtyYS11aS9yZWFjdFwiIiwid2VicGFjazovL3BvcnRmb2xpby9leHRlcm5hbCBcImZyYW1lci1tb3Rpb25cIiIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3BvcnRmb2xpby9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIkhlYWRlciIsImNoaWxkcmVuIiwidW5kZXJsaW5lQ29sb3IiLCJlbW9qaSIsInByb3BzIiwiTWV0YSIsInRpdGxlIiwia2V5d29yZHMiLCJkZXNjcmlwdGlvbiIsImltYWdlIiwiaW5jbHVkZXMiLCJjb25jYXQiLCJkZWZhdWx0UHJvcHMiLCJ2YXJpYW50cyIsImhpZGRlbiIsIm9wYWNpdHkiLCJ4IiwieSIsImVudGVyIiwiZXhpdCIsIlBhZ2VMYXlvdXQiLCJ0eXBlIiwiUHJvamVjdExheW91dE1lZCIsInByb2plY3QiLCJ1c2VDb2xvck1vZGVWYWx1ZSIsImJvcmRlciIsInNoYWRvdyIsInNpdGUiLCJpbWFnZUxpZ2h0Iiwic3RhZ2dlciIsImZhZGVJblVwIiwidGVjaFN0YWNrIiwibWFwIiwicyIsImluZGV4IiwiTGVmdFByb2plY3RMYXlvdXRMYXJnZSIsInNjYWxlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZWFzZSIsIlJpZ2h0UHJvamVjdExheW91dExhcmdlIiwiZWFzaW5nIiwiYW5pbWF0ZSIsInN0YWdnZXJDaGlsZHJlbiIsImluaXRpYWwiLCJNb3Rpb25Cb3giLCJtb3Rpb24iLCJmb3J3YXJkUmVmIiwicmVmIiwiY2hha3JhUHJvcHMiLCJPYmplY3QiLCJmcm9tRW50cmllcyIsImVudHJpZXMiLCJmaWx0ZXIiLCJrZXkiLCJpc1ZhbGlkTW90aW9uUHJvcCIsIk1vdGlvbkZsZXgiLCJNb3Rpb25UZXh0IiwiTW90aW9uTGlzdCIsIk1vdGlvbkltYWdlIiwic3RhZ2dlclZhcmlhbnRzIiwidHJhbnNsYXRlWSIsImRlbGF5Q2hpbGRyZW4iLCJzdGFnZ2VyRGlyZWN0aW9uIiwic3RpZmZuZXNzIiwidmVsb2NpdHkiLCJjb250YWluZXIiLCJ2aXNpYmxlIiwiaXRlbSIsIlBhZ2VTbGlkZUZhZGUiLCJTdGFnZ2VyQ2hpbGRyZW4iLCJDYXJkVHJhbnNpdGlvbiIsIlVuZGVybGluZWRUZXh0IiwiaCIsInByb2plY3RzTGlzdCIsImJsdXJIYXNoIiwic3VidGl0bGUiLCJUVVJRVU9JU0UiLCJQcm9qZWN0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBOztBQU9BLE1BQU1BLE1BQU0sR0FBRztBQUFBLE1BQUM7QUFBRUMsWUFBRjtBQUFZQyxrQkFBWjtBQUE0QkM7QUFBNUIsR0FBRDtBQUFBLE1BQXVDQyxLQUF2Qzs7QUFBQSxzQkFDYiw4REFBQyxpREFBRDtBQUFLLE1BQUUsRUFBQyxJQUFSO0FBQWEsTUFBRSxFQUFFLEVBQWpCO0FBQXFCLE1BQUUsRUFBRSxDQUF6QjtBQUE0QixZQUFRLEVBQUMsS0FBckM7QUFBMkMsY0FBVSxFQUFDLFNBQXREO0FBQWdFLGNBQVUsRUFBQztBQUEzRSxLQUFzRkEsS0FBdEY7QUFBNkYsYUFBUyxFQUFDLE1BQXZHO0FBQUEsNEJBQ0UsOERBQUMsa0VBQUQ7QUFBZ0IsV0FBSyxFQUFFRixjQUF2QjtBQUFBLGdCQUF3Q0Q7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixFQUVHRSxLQUFLLEdBQUcsTUFBTUEsS0FBVCxHQUFpQixFQUZ6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEYTtBQUFBLENBQWY7O0FBTUEsK0RBQWVILE1BQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7O0FBU0EsTUFBTUssSUFBSSxHQUFHLENBQUM7QUFBRUMsT0FBRjtBQUFTQyxVQUFUO0FBQW1CQyxhQUFuQjtBQUFnQ0M7QUFBaEMsQ0FBRCxLQUFrRTtB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7OztBQ2xKYTtBQUNiO0FBQ0E7QUFDQSxrQ0FBa0Msb0NBQW9DLGFBQWEsRUFBRSxFQUFFO0FBQ3ZGLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLDhDQUE2QyxDQUFDLGNBQWMsRUFBQztBQUM3RCxhQUFhLG1CQUFPLENBQUMsNEVBQWlCO0FBQ3RDLGFBQWEsbUJBQU8sQ0FBQyxrRUFBWTtBQUNqQyxhQUFhLG1CQUFPLENBQUMsd0VBQWU7Ozs7Ozs7Ozs7OztBQ2RwQyw4Qzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtRCIsImZpbGUiOiJwYWdlcy9wcm9qZWN0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCwgQm94UHJvcHMgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcclxuaW1wb3J0IHsgUHJvcHNXaXRoQ2hpbGRyZW4gfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBVbmRlcmxpbmVkVGV4dCBmcm9tICdjb21wb25lbnRzL3VpL3VuZGVybGluZWQtdGV4dCc7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMgZXh0ZW5kcyBCb3hQcm9wcyB7XHJcbiAgdW5kZXJsaW5lQ29sb3I/OiBzdHJpbmc7XHJcbiAgZW1vamk/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IEhlYWRlciA9ICh7IGNoaWxkcmVuLCB1bmRlcmxpbmVDb2xvciwgZW1vamksIC4uLnByb3BzIH06IFByb3BzV2l0aENoaWxkcmVuPFByb3BzPikgPT4gKFxyXG4gIDxCb3ggYXM9XCJoMVwiIG10PXsxMH0gbWI9ezZ9IGZvbnRTaXplPVwiM3hsXCIgbGluZUhlaWdodD1cInNob3J0ZXJcIiBmb250V2VpZ2h0PVwiYm9sZFwiIHsuLi5wcm9wc30gdGV4dEFsaWduPVwibGVmdFwiPlxyXG4gICAgPFVuZGVybGluZWRUZXh0IGNvbG9yPXt1bmRlcmxpbmVDb2xvcn0+e2NoaWxkcmVufTwvVW5kZXJsaW5lZFRleHQ+XHJcbiAgICB7ZW1vamkgPyAnICcgKyBlbW9qaSA6ICcnfVxyXG4gIDwvQm94PlxyXG4pO1xyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XHJcbiIsImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuXHJcbnR5cGUgUHJvcHMgPSB7XHJcbiAgICB0aXRsZTogc3RyaW5nO1xyXG4gICAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XHJcbiAgICBrZXl3b3Jkcz86IHN0cmluZztcclxuICAgIGltYWdlPzogc3RyaW5nO1xyXG4gIH07XHJcblxyXG5jb25zdCBNZXRhID0gKHsgdGl0bGUsIGtleXdvcmRzLCBkZXNjcmlwdGlvbiwgaW1hZ2UgfSA6IFByb3BzKTogSlNYLkVsZW1lbnQgPT4ge1xyXG4gIHRpdGxlID0gdGl0bGUuaW5jbHVkZXMoJ01lcnQnKSA/IHRpdGxlIDogdGl0bGUuY29uY2F0KCcgfCBNZXJ0IEthZGlyJylcclxuICByZXR1cm4gKFxyXG4gICAgPEhlYWQ+XHJcbiAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XHJcbiAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XHJcbiAgICAgIDxtZXRhIG5hbWU9XCJrZXl3b3Jkc1wiIGNvbnRlbnQ9e2tleXdvcmRzfSAvPlxyXG4gICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXtkZXNjcmlwdGlvbn0gLz5cclxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9e3RpdGxlfSAvPlxyXG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgY29udGVudD17aW1hZ2UgPyBpbWFnZSA6IFwiL2xvZ281MTIucG5nXCJ9IC8+XHJcbiAgICAgIDx0aXRsZT57dGl0bGV9PC90aXRsZT5cclxuICAgIDwvSGVhZD5cclxuICApO1xyXG59O1xyXG5cclxuTWV0YS5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgdGl0bGU6IFwiTWVydCBLYWRpciAtIE1vYmlsZSBEZXZlbG9wZXJcIixcclxuICBrZXl3b3JkczogXCJNb2JpbCBBcHBsaWNhdGlvbiBEZXZlbG9wZXJcIixcclxuICBkZXNjcmlwdGlvbjogXCJTb2Z0d2FyZSBzdHVkZW50IG1vYmlsZSBsb3Zlci5cIlxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWV0YTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50LCBSZWFjdE5vZGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcclxuaW1wb3J0IE1ldGEgZnJvbSBcIi4vbWV0YVwiO1xyXG5cclxudHlwZSBQcm9wcyA9IHtcclxuICBjaGlsZHJlbjogUmVhY3ROb2RlO1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XHJcbiAga2V5d29yZHM/OiBzdHJpbmc7XHJcbiAgaW1hZ2U/OiBzdHJpbmc7XHJcbn07XHJcblxyXG5jb25zdCB2YXJpYW50cyA9IHtcclxuICBoaWRkZW46IHsgb3BhY2l0eTogMCwgeDogLTIwMCwgeTogMCB9LFxyXG4gIGVudGVyOiB7IG9wYWNpdHk6IDEsIHg6IDAsIHk6IDAgfSxcclxuICBleGl0OiB7IG9wYWNpdHk6IDAsIHg6IDAsIHk6IC0xMDAgfVxyXG59O1xyXG5cclxuY29uc3QgUGFnZUxheW91dCA9ICh7XHJcbiAgY2hpbGRyZW4sXHJcbiAgdGl0bGUsXHJcbiAgZGVzY3JpcHRpb24sXHJcbiAga2V5d29yZHMsXHJcbiAgaW1hZ2VcclxufTogUHJvcHMpOiBKU1guRWxlbWVudCA9PiAoXHJcbiAgPEZyYWdtZW50PlxyXG4gICAgPE1ldGFcclxuICAgICAgdGl0bGU9e3RpdGxlfVxyXG4gICAgICBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259XHJcbiAgICAgIGtleXdvcmRzPXtrZXl3b3Jkc31cclxuICAgICAgaW1hZ2U9e2ltYWdlfVxyXG4gICAgLz5cclxuICAgIDxtb3Rpb24ubWFpblxyXG4gICAgICBpbml0aWFsPVwiaGlkZGVuXCJcclxuICAgICAgYW5pbWF0ZT1cImVudGVyXCJcclxuICAgICAgZXhpdD1cImV4aXRcIlxyXG4gICAgICB2YXJpYW50cz17dmFyaWFudHN9XHJcbiAgICAgIHRyYW5zaXRpb249e3sgdHlwZTogXCJsaW5lYXJcIiB9fVxyXG4gICAgPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L21vdGlvbi5tYWluPlxyXG4gIDwvRnJhZ21lbnQ+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdlTGF5b3V0O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XHJcbmltcG9ydCB7IHN0YWdnZXIsIGZhZGVJblVwIH0gZnJvbSBcIi4uL3VpL2ZyYW1lckFuaW1hdGlvbnNcIjtcclxuaW1wb3J0IHtcclxuICB1c2VDb2xvck1vZGVWYWx1ZSxcclxuICBJY29uQnV0dG9uLFxyXG4gIEZsZXgsXHJcbiAgSW1hZ2UsXHJcbiAgQm94LFxyXG4gIExpc3RJdGVtLFxyXG4gIFNrZWxldG9uLFxyXG4gIEFzcGVjdFJhdGlvXHJcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IHsgSGlPdXRsaW5lRXh0ZXJuYWxMaW5rIH0gZnJvbSBcInJlYWN0LWljb25zL2hpXCI7XHJcbmltcG9ydCB7IE1vdGlvbkJveCwgTW90aW9uRmxleCwgTW90aW9uTGlzdCwgTW90aW9uVGV4dCB9IGZyb20gXCJjb21wb25lbnRzL3VpL21vdGlvblwiO1xyXG5cclxuY29uc3QgUHJvamVjdExheW91dE1lZCA9ICh7IHByb2plY3QgfSkgPT4ge1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZsZXggZGlzcGxheT17W1wiZmxleFwiLCBcImZsZXhcIiwgXCJub25lXCJdfSByb3VuZGVkPVwieGxcIlxyXG4gICAgICBib3JkZXJXaWR0aD1cIjFweFwiXHJcbiAgICAgIGJvcmRlckNvbG9yPXt1c2VDb2xvck1vZGVWYWx1ZShcImdyYXkuNjAwXCIsIFwiZ3JheS43MDBcIil9XHJcbiAgICAgIHc9XCJmdWxsXCJcclxuICAgICAgaD1cIjIwcmVtXCJcclxuICAgICAgdGV4dEFsaWduPVwibGVmdFwiXHJcbiAgICAgIGFsaWduPVwic3RhcnRcIlxyXG4gICAgICBzaGFkb3c9XCJtZFwiXHJcbiAgICAgIF9ob3Zlcj17eyBib3JkZXI6IFwibWRcIiwgc2hhZG93OiBcImxnXCIgfX1cclxuICAgICAgb3ZlcmZsb3c9XCJoaWRkZW5cIlxyXG4gICAgICBwb3NpdGlvbj1cInJlbGF0aXZlXCI+XHJcbiAgICAgIDxhIGhyZWY9e3Byb2plY3Quc2l0ZX0gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxyXG4gICAgICAgIDxBc3BlY3RSYXRpbyByYXRpbz17MS44NSAvIDF9IHc9XCIxMDAlXCIgaD1cIjEwMCVcIiByb3VuZGVkPVwieGxcIj5cclxuICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICBzcmM9e3Byb2plY3QuaW1hZ2VMaWdodH1cclxuICAgICAgICAgICAgZmFsbGJhY2s9ezxTa2VsZXRvbiAvPn1cclxuICAgICAgICAgICAgc2l6ZT1cImxnXCJcclxuICAgICAgICAgICAgd2lkdGg9eydmdWxsJ31cclxuICAgICAgICAgICAgaGVpZ2h0PXsnZnVsbCd9XHJcbiAgICAgICAgICAgIHBvc2l0aW9uPVwiYWJzb2x1dGVcIlxyXG4gICAgICAgICAgICByb3VuZGVkPVwieGxcIiBvYmplY3RGaXQ9XCJjb3ZlclwiIG9wYWNpdHk9ezAuNX0gLz5cclxuICAgICAgICA8L0FzcGVjdFJhdGlvPlxyXG4gICAgICAgIDxCb3ggd2lkdGg9eydmdWxsJ31cclxuICAgICAgICAgIGhlaWdodD17J2Z1bGwnfSBwb3NpdGlvbj1cImFic29sdXRlXCIgYmc9e3VzZUNvbG9yTW9kZVZhbHVlKFwiZ3JheS4xMDBcIiwgXCJncmF5LjkwMFwiKX0gb3BhY2l0eT17dXNlQ29sb3JNb2RlVmFsdWUoXCIwLjVcIiwgXCIxXCIpfT48L0JveD5cclxuICAgICAgPC9hPlxyXG4gICAgICA8TW90aW9uQm94IGluaXRpYWw9XCJpbml0aWFsXCJcclxuICAgICAgICBhbmltYXRlPVwiYW5pbWF0ZVwiIHdpZHRoPXtbXCJmdWxsXCIsIFwiNzAlXCJdfSByb3VuZGVkPVwibGdcIiBteT1cImF1dG9cIiBweD1cIjZcIiBweT1cIjNcIiBwb3NpdGlvbj1cInJlbGF0aXZlXCIgekluZGV4PVwiMTBcIj5cclxuICAgICAgICA8TW90aW9uQm94IHZhcmlhbnRzPXtzdGFnZ2VyfT5cclxuICAgICAgICAgIDxhIGhyZWY9e3Byb2plY3Quc2l0ZX0gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxyXG4gICAgICAgICAgICA8TW90aW9uVGV4dCB2YXJpYW50cz17ZmFkZUluVXB9IGZvbnRTaXplPScyeGwnIGZvbnRXZWlnaHQ9XCJib2xkXCIgY29sb3I9e3VzZUNvbG9yTW9kZVZhbHVlKFwiZ3JheS45MDBcIiwgXCJncmF5LjEwMFwiKX0+XHJcbiAgICAgICAgICAgICAge3Byb2plY3QudGl0bGV9XHJcbiAgICAgICAgICAgIDwvTW90aW9uVGV4dD5cclxuICAgICAgICAgICAgPEJveCB3aWR0aD1cImZ1bGxcIj5cclxuICAgICAgICAgICAgICA8TW90aW9uVGV4dFxyXG4gICAgICAgICAgICAgICAgdmFyaWFudHM9e2ZhZGVJblVwfVxyXG4gICAgICAgICAgICAgICAgYmc9e3VzZUNvbG9yTW9kZVZhbHVlKFwiZ3JheS4xMDBcIiwgXCJncmF5LjcwMFwiKX1cclxuICAgICAgICAgICAgICAgIHJvdW5kZWQ9XCJsZ1wiXHJcbiAgICAgICAgICAgICAgICBhbGlnbj1cImxlZnRcIlxyXG4gICAgICAgICAgICAgICAgcD1cIjRcIlxyXG4gICAgICAgICAgICAgICAgZm9udFNpemU9XCJzbVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge3Byb2plY3QuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgPC9Nb3Rpb25UZXh0PlxyXG4gICAgICAgICAgICAgIHtwcm9qZWN0LnRlY2hTdGFjayAmJiAoXHJcbiAgICAgICAgICAgICAgICA8TW90aW9uTGlzdCB2YXJpYW50cz17ZmFkZUluVXB9IGRpc3BsYXk9XCJmbGV4XCIgZm9udFNpemU9XCJ4c1wiIGp1c3RpZnlDb250ZW50PVwic3RhcnRcIiBtdD1cIjNcIiBjb2xvcj17dXNlQ29sb3JNb2RlVmFsdWUoXCJncmF5LjkwMFwiLCBcImdyYXkuMTAwXCIpfSBmb250V2VpZ2h0PVwiYm9sZFwiPlxyXG4gICAgICAgICAgICAgICAgICB7cHJvamVjdC50ZWNoU3RhY2subWFwKChzLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBrZXk9e2luZGV4fSBtcj1cIjJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpPntzfTwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvTW90aW9uTGlzdD5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDxNb3Rpb25GbGV4IHZhcmlhbnRzPXtmYWRlSW5VcH0gcHQ9ezJ9IG10PXsxfSBqdXN0aWZ5Q29udGVudD1cInN0YXJ0XCI+XHJcbiAgICAgICAgICAgIHsvKiB7cHJvamVjdC5naXRIdWIgJiYgKFxyXG4gICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtci01XCJcclxuICAgICAgICAgICAgICAgIGhyZWY9e3Byb2plY3QuZ2l0SHVifVxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxHaXRodWIgLz5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICl9ICovfVxyXG4gICAgICAgICAgICA8YSBocmVmPXtwcm9qZWN0LnNpdGV9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cclxuICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY29sb3JTY2hlbWU9XCJncmF5XCJcclxuICAgICAgICAgICAgICAgIHJvdW5kZWQ9XCJmdWxsXCJcclxuICAgICAgICAgICAgICAgIHNpemU9XCJtZFwiXHJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwibWVkYWxcIlxyXG4gICAgICAgICAgICAgICAgaWNvbj17PEhpT3V0bGluZUV4dGVybmFsTGluayAvPn1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L01vdGlvbkZsZXg+XHJcbiAgICAgICAgPC9Nb3Rpb25Cb3g+XHJcbiAgICAgIDwvTW90aW9uQm94PlxyXG4gICAgPC9GbGV4PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBMZWZ0UHJvamVjdExheW91dExhcmdlID0gKHsgcHJvamVjdCB9KSA9PiB7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8RmxleCB3aWR0aD1cImZ1bGxcIiBkaXNwbGF5PXtbXCJub25lXCIsIFwibm9uZVwiLCBcImZsZXhcIl19PlxyXG4gICAgICA8TW90aW9uQm94IHdoaWxlSG92ZXI9e3sgc2NhbGU6IDEuMDIgfX1cclxuICAgICAgICB3aGlsZVRhcD17eyBzY2FsZTogMC45OCB9fVxyXG4gICAgICAgIGluaXRpYWw9e3sgeDogNTAwLCBvcGFjaXR5OiAwIH19XHJcbiAgICAgICAgYW5pbWF0ZT17e1xyXG4gICAgICAgICAgeDogMCxcclxuICAgICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiAwLjUsXHJcbiAgICAgICAgICAgIGVhc2U6IFwiZWFzZUluT3V0XCJcclxuICAgICAgICAgIH1cclxuICAgICAgICB9fVxyXG4gICAgICAgIHJvdW5kZWQ9XCJ4bFwiXHJcbiAgICAgICAgYm9yZGVyV2lkdGg9XCIxcHhcIlxyXG4gICAgICAgIGJvcmRlckNvbG9yPXt1c2VDb2xvck1vZGVWYWx1ZShcImdyYXkuNjAwXCIsIFwiZ3JheS43MDBcIil9XHJcbiAgICAgICAgdz1cIjgwJVwiXHJcbiAgICAgICAgaD1cIjI0cmVtXCJcclxuICAgICAgICB0ZXh0QWxpZ249XCJsZWZ0XCJcclxuICAgICAgICBhbGlnbj1cInN0YXJ0XCJcclxuICAgICAgICBzcGFjaW5nPXs0fVxyXG4gICAgICAgIHNoYWRvdz1cIm1kXCJcclxuICAgICAgICBfaG92ZXI9e3sgYm9yZGVyOiBcIm1kXCIsIHNoYWRvdzogXCJsZ1wiIH19XHJcbiAgICAgICAgb3ZlcmZsb3c9XCJoaWRkZW5cIlxyXG4gICAgICAgIHBvc2l0aW9uPVwicmVsYXRpdmVcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGEgaHJlZj17cHJvamVjdC5zaXRlfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XHJcbiAgICAgICAgICB7LyogPExhenlJbWFnZVxyXG4gICAgICAgICAgc3JjPXtwcm9qZWN0LmltYWdlTGlnaHR9XHJcbiAgICAgICAgICBibHVySGFzaD17cHJvamVjdC5ibHVySGFzaH1cclxuICAgICAgICAgIHNpemU9XCJzbVwiXHJcbiAgICAgICAgICB3aWR0aD17MTAwfVxyXG4gICAgICAgICAgaGVpZ2h0PXsxMDB9XHJcbiAgICAgICAgICBsYXlvdXQ9XCJmaXhlZFwiXHJcbiAgICAgICAgICByb3VuZGVkPVwibWRcIlxyXG4gICAgICAgIC8+ICovfVxyXG4gICAgICAgICAgPEFzcGVjdFJhdGlvIHJhdGlvPXsxLjg1IC8gMX0gdz1cIjEwMCVcIiBoPVwiMTAwJVwiIHJvdW5kZWQ9XCJ4bFwiPlxyXG4gICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICBzcmM9e3Byb2plY3QuaW1hZ2VMaWdodH1cclxuICAgICAgICAgICAgICBmYWxsYmFjaz17PFNrZWxldG9uIC8+fVxyXG4gICAgICAgICAgICAgIHNpemU9XCJsZ1wiXHJcbiAgICAgICAgICAgICAgd2lkdGg9eydmdWxsJ31cclxuICAgICAgICAgICAgICBoZWlnaHQ9eydmdWxsJ31cclxuICAgICAgICAgICAgICBwb3NpdGlvbj1cImFic29sdXRlXCJcclxuICAgICAgICAgICAgICByb3VuZGVkPVwieGxcIiBvYmplY3RGaXQ9XCJjb3ZlclwiIG9wYWNpdHk9ezAuNX0gX2hvdmVyPXt7IG9wYWNpdHk6IDEgfX0gLz5cclxuICAgICAgICAgIDwvQXNwZWN0UmF0aW8+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L01vdGlvbkJveD5cclxuICAgICAgPE1vdGlvbkJveCBpbml0aWFsPVwiaW5pdGlhbFwiXHJcbiAgICAgICAgYW5pbWF0ZT1cImFuaW1hdGVcIiB3aWR0aD1cIjQwJVwiIHJvdW5kZWQ9XCJsZ1wiIG15PVwiYXV0b1wiIHpJbmRleD1cIjEwXCIgbWw9XCItNnJlbVwiIGFsaWduPVwicmlnaHRcIj5cclxuICAgICAgICA8bW90aW9uLmRpdiB2YXJpYW50cz17c3RhZ2dlcn0+XHJcbiAgICAgICAgICA8YVxyXG4gICAgICAgICAgICBocmVmPXtwcm9qZWN0LnNpdGV9XHJcbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPE1vdGlvblRleHQgdmFyaWFudHM9e2ZhZGVJblVwfSBmb250U2l6ZT0nM3hsJyBmb250V2VpZ2h0PVwiYm9sZFwiIGNvbG9yPXt1c2VDb2xvck1vZGVWYWx1ZShcImdyYXkuOTAwXCIsIFwiZ3JheS4xMDBcIil9PlxyXG4gICAgICAgICAgICAgIHtwcm9qZWN0LnRpdGxlfVxyXG4gICAgICAgICAgICA8L01vdGlvblRleHQ+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8Qm94IHdpZHRoPVwiZnVsbFwiPlxyXG4gICAgICAgICAgICA8TW90aW9uVGV4dFxyXG4gICAgICAgICAgICAgIHZhcmlhbnRzPXtmYWRlSW5VcH1cclxuICAgICAgICAgICAgICBiZz17dXNlQ29sb3JNb2RlVmFsdWUoXCJncmF5LjEwMFwiLCBcImdyYXkuNzAwXCIpfVxyXG4gICAgICAgICAgICAgIHJvdW5kZWQ9XCJsZ1wiXHJcbiAgICAgICAgICAgICAgYWxpZ249XCJyaWdodFwiXHJcbiAgICAgICAgICAgICAgcD1cIjRcIlxyXG4gICAgICAgICAgICAgIGZvbnRTaXplPVwibWRcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge3Byb2plY3QuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgIDwvTW90aW9uVGV4dD5cclxuICAgICAgICAgICAge3Byb2plY3QudGVjaFN0YWNrICYmIChcclxuICAgICAgICAgICAgICA8TW90aW9uTGlzdCB2YXJpYW50cz17ZmFkZUluVXB9IGRpc3BsYXk9XCJmbGV4XCIgZm9udFNpemU9XCJzbVwiIGp1c3RpZnlDb250ZW50PVwiZW5kXCIgbXQ9XCIzXCIgY29sb3I9e3VzZUNvbG9yTW9kZVZhbHVlKFwiZ3JheS45MDBcIiwgXCJncmF5LjEwMFwiKX0gZm9udFdlaWdodD1cImJvbGRcIj5cclxuICAgICAgICAgICAgICAgIHtwcm9qZWN0LnRlY2hTdGFjay5tYXAoKHMsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBrZXk9e2luZGV4fSBtcj1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aT57c308L2k+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8L01vdGlvbkxpc3Q+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L0JveD5cclxuXHJcbiAgICAgICAgICA8TW90aW9uRmxleCB2YXJpYW50cz17ZmFkZUluVXB9IHB0PXsyfSBtdD17MX0ganVzdGlmeUNvbnRlbnQ9XCJlbmRcIj5cclxuICAgICAgICAgICAgey8qIHtwcm9qZWN0LmdpdEh1YiAmJiAoXHJcbiAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1yLTVcIlxyXG4gICAgICAgICAgICAgICAgaHJlZj17cHJvamVjdC5naXRIdWJ9XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEdpdGh1YiAvPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgKX0gKi99XHJcbiAgICAgICAgICAgIDxhIGhyZWY9e3Byb2plY3Quc2l0ZX0gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxyXG4gICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjb2xvclNjaGVtZT1cImdyYXlcIlxyXG4gICAgICAgICAgICAgICAgcm91bmRlZD1cImZ1bGxcIlxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cIm1kXCJcclxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJtZWRhbFwiXHJcbiAgICAgICAgICAgICAgICBpY29uPXs8SGlPdXRsaW5lRXh0ZXJuYWxMaW5rIC8+fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvTW90aW9uRmxleD5cclxuICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgIDwvTW90aW9uQm94PlxyXG4gICAgPC9GbGV4PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBSaWdodFByb2plY3RMYXlvdXRMYXJnZSA9ICh7IHByb2plY3QgfSkgPT4ge1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZsZXggd2lkdGg9XCJmdWxsXCIgZGlzcGxheT17W1wibm9uZVwiLCBcIm5vbmVcIiwgXCJmbGV4XCJdfT5cclxuICAgICAgPE1vdGlvbkJveCBpbml0aWFsPVwiaW5pdGlhbFwiXHJcbiAgICAgICAgYW5pbWF0ZT1cImFuaW1hdGVcIiB3aWR0aD1cIjQwJVwiIHJvdW5kZWQ9XCJsZ1wiIG15PVwiYXV0b1wiIHpJbmRleD1cIjEwXCIgbXI9XCItNnJlbVwiIGFsaWduPVwibGVmdFwiPlxyXG4gICAgICAgIDxtb3Rpb24uZGl2IHZhcmlhbnRzPXtzdGFnZ2VyfT5cclxuICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgIGhyZWY9e3Byb2plY3Quc2l0ZX1cclxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxNb3Rpb25UZXh0IHZhcmlhbnRzPXtmYWRlSW5VcH0gZm9udFNpemU9JzN4bCcgZm9udFdlaWdodD1cImJvbGRcIiBjb2xvcj17dXNlQ29sb3JNb2RlVmFsdWUoXCJncmF5LjkwMFwiLCBcImdyYXkuMTAwXCIpfT5cclxuICAgICAgICAgICAgICB7cHJvamVjdC50aXRsZX1cclxuICAgICAgICAgICAgPC9Nb3Rpb25UZXh0PlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPEJveCB3aWR0aD1cImZ1bGxcIj5cclxuICAgICAgICAgICAgPE1vdGlvblRleHRcclxuICAgICAgICAgICAgICB2YXJpYW50cz17ZmFkZUluVXB9XHJcbiAgICAgICAgICAgICAgYmc9e3VzZUNvbG9yTW9kZVZhbHVlKFwiZ3JheS4xMDBcIiwgXCJncmF5LjcwMFwiKX1cclxuICAgICAgICAgICAgICByb3VuZGVkPVwibGdcIlxyXG4gICAgICAgICAgICAgIGFsaWduPVwibGVmdFwiXHJcbiAgICAgICAgICAgICAgcD1cIjRcIlxyXG4gICAgICAgICAgICAgIGZvbnRTaXplPVwibWRcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge3Byb2plY3QuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgIDwvTW90aW9uVGV4dD5cclxuICAgICAgICAgICAge3Byb2plY3QudGVjaFN0YWNrICYmIChcclxuICAgICAgICAgICAgICA8TW90aW9uTGlzdCB2YXJpYW50cz17ZmFkZUluVXB9IGRpc3BsYXk9XCJmbGV4XCIgZm9udFNpemU9XCJzbVwiIGp1c3RpZnlDb250ZW50PVwic3RhcnRcIiBtdD1cIjNcIiBjb2xvcj17dXNlQ29sb3JNb2RlVmFsdWUoXCJncmF5LjkwMFwiLCBcImdyYXkuMTAwXCIpfSBmb250V2VpZ2h0PVwiYm9sZFwiPlxyXG4gICAgICAgICAgICAgICAge3Byb2plY3QudGVjaFN0YWNrLm1hcCgocywgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIGtleT17aW5kZXh9IG1yPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpPntzfTwvaT5cclxuICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvTW90aW9uTGlzdD5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvQm94PlxyXG5cclxuICAgICAgICAgIDxNb3Rpb25GbGV4IHZhcmlhbnRzPXtmYWRlSW5VcH0gcHQ9ezJ9IG10PXsxfSBqdXN0aWZ5Q29udGVudD1cInN0YXJ0XCI+XHJcbiAgICAgICAgICAgIHsvKiB7cHJvamVjdC5naXRIdWIgJiYgKFxyXG4gICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtci01XCJcclxuICAgICAgICAgICAgICAgIGhyZWY9e3Byb2plY3QuZ2l0SHVifVxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxHaXRodWIgLz5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICl9ICovfVxyXG4gICAgICAgICAgICA8YSBocmVmPXtwcm9qZWN0LnNpdGV9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cclxuICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY29sb3JTY2hlbWU9XCJncmF5XCJcclxuICAgICAgICAgICAgICAgIHJvdW5kZWQ9XCJmdWxsXCJcclxuICAgICAgICAgICAgICAgIHNpemU9XCJtZFwiXHJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwibWVkYWxcIlxyXG4gICAgICAgICAgICAgICAgaWNvbj17PEhpT3V0bGluZUV4dGVybmFsTGluayAvPn1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L01vdGlvbkZsZXg+XHJcbiAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgICA8L01vdGlvbkJveD5cclxuICAgICAgPE1vdGlvbkJveCB3aGlsZUhvdmVyPXt7IHNjYWxlOiAxLjAyIH19XHJcbiAgICAgICAgd2hpbGVUYXA9e3sgc2NhbGU6IDAuOTggfX1cclxuICAgICAgICBpbml0aWFsPXt7IHg6IDUwMCwgb3BhY2l0eTogMCB9fVxyXG4gICAgICAgIGFuaW1hdGU9e3tcclxuICAgICAgICAgIHg6IDAsXHJcbiAgICAgICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICAgICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICAgICAgICBkdXJhdGlvbjogMC41LFxyXG4gICAgICAgICAgICBlYXNlOiBcImVhc2VJbk91dFwiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfX1cclxuICAgICAgICByb3VuZGVkPVwieGxcIlxyXG4gICAgICAgIGJvcmRlcldpZHRoPVwiMXB4XCJcclxuICAgICAgICBib3JkZXJDb2xvcj17dXNlQ29sb3JNb2RlVmFsdWUoXCJncmF5LjYwMFwiLCBcImdyYXkuNzAwXCIpfVxyXG4gICAgICAgIHc9XCI4MCVcIlxyXG4gICAgICAgIGg9XCIyNHJlbVwiXHJcbiAgICAgICAgdGV4dEFsaWduPVwibGVmdFwiXHJcbiAgICAgICAgYWxpZ249XCJzdGFydFwiXHJcbiAgICAgICAgc3BhY2luZz17NH1cclxuICAgICAgICBzaGFkb3c9XCJtZFwiXHJcbiAgICAgICAgX2hvdmVyPXt7IGJvcmRlcjogXCJtZFwiLCBzaGFkb3c6IFwibGdcIiB9fVxyXG4gICAgICAgIG92ZXJmbG93PVwiaGlkZGVuXCJcclxuICAgICAgICBwb3NpdGlvbj1cInJlbGF0aXZlXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxhIGhyZWY9e3Byb2plY3Quc2l0ZX0gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxyXG4gICAgICAgICAgPEFzcGVjdFJhdGlvIHJhdGlvPXsxLjg1IC8gMX0gdz1cIjEwMCVcIiBoPVwiMTAwJVwiIHJvdW5kZWQ9XCJ4bFwiPlxyXG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPXtwcm9qZWN0LmltYWdlTGlnaHR9XHJcbiAgICAgICAgICAgICAgZmFsbGJhY2s9ezxTa2VsZXRvbiAvPn1cclxuICAgICAgICAgICAgICBzaXplPVwibGdcIlxyXG4gICAgICAgICAgICAgIHdpZHRoPXsnZnVsbCd9XHJcbiAgICAgICAgICAgICAgaGVpZ2h0PXsnZnVsbCd9XHJcbiAgICAgICAgICAgICAgcG9zaXRpb249XCJhYnNvbHV0ZVwiXHJcbiAgICAgICAgICAgICAgcm91bmRlZD1cInhsXCIgb2JqZWN0Rml0PVwiY292ZXJcIiBvcGFjaXR5PXswLjV9IF9ob3Zlcj17eyBvcGFjaXR5OiAxIH19IC8+XHJcbiAgICAgICAgICA8L0FzcGVjdFJhdGlvPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9Nb3Rpb25Cb3g+XHJcbiAgICA8L0ZsZXg+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCB7IExlZnRQcm9qZWN0TGF5b3V0TGFyZ2UsIFJpZ2h0UHJvamVjdExheW91dExhcmdlLCBQcm9qZWN0TGF5b3V0TWVkIH07XHJcbiIsImV4cG9ydCBjb25zdCBlYXNpbmcgPSBbMC42LCAtMC4wNSwgMC4wMSwgMC45OV1cclxuXHJcbmV4cG9ydCBjb25zdCBzdGFnZ2VyID0ge1xyXG4gIGFuaW1hdGU6IHtcclxuICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgc3RhZ2dlckNoaWxkcmVuOiAwLjEsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBmYWRlSW5VcCA9IHtcclxuICBpbml0aWFsOiB7XHJcbiAgICB5OiA2MCxcclxuICAgIG9wYWNpdHk6IDAsXHJcbiAgICB0cmFuc2l0aW9uOiB7IGR1cmF0aW9uOiAwLjYsIGVhc2U6IGVhc2luZyB9LFxyXG4gIH0sXHJcbiAgYW5pbWF0ZToge1xyXG4gICAgeTogMCxcclxuICAgIG9wYWNpdHk6IDEsXHJcbiAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgIGR1cmF0aW9uOiAwLjYsXHJcbiAgICAgIGVhc2U6IGVhc2luZyxcclxuICAgIH0sXHJcbiAgfSxcclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIEJveCxcclxuICBGbGV4LFxyXG4gIEltYWdlLFxyXG4gIGZvcndhcmRSZWYsXHJcbiAgVGV4dCxcclxuICBMaXN0XHJcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IHsgbW90aW9uLCBpc1ZhbGlkTW90aW9uUHJvcCB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XHJcblxyXG5leHBvcnQgY29uc3QgTW90aW9uQm94ID0gbW90aW9uKFxyXG4gIGZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHtcclxuICAgIGNvbnN0IGNoYWtyYVByb3BzID0gT2JqZWN0LmZyb21FbnRyaWVzKFxyXG4gICAgICAvLyBkbyBub3QgcGFzcyBmcmFtZXIgcHJvcHMgdG8gRE9NIGVsZW1lbnRcclxuICAgICAgT2JqZWN0LmVudHJpZXMocHJvcHMpLmZpbHRlcigoW2tleV0pID0+ICFpc1ZhbGlkTW90aW9uUHJvcChrZXkpKVxyXG4gICAgKTtcclxuICAgIHJldHVybiA8Qm94IHJlZj17cmVmfSB7Li4uY2hha3JhUHJvcHN9IC8+O1xyXG4gIH0pXHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgTW90aW9uRmxleCA9IG1vdGlvbihcclxuICBmb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7XHJcbiAgICBjb25zdCBjaGFrcmFQcm9wcyA9IE9iamVjdC5mcm9tRW50cmllcyhcclxuICAgICAgLy8gZG8gbm90IHBhc3MgZnJhbWVyIHByb3BzIHRvIERPTSBlbGVtZW50XHJcbiAgICAgIE9iamVjdC5lbnRyaWVzKHByb3BzKS5maWx0ZXIoKFtrZXldKSA9PiAhaXNWYWxpZE1vdGlvblByb3Aoa2V5KSlcclxuICAgICk7XHJcbiAgICByZXR1cm4gPEZsZXggcmVmPXtyZWZ9IHsuLi5jaGFrcmFQcm9wc30gLz47XHJcbiAgfSlcclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBNb3Rpb25UZXh0ID0gbW90aW9uKFxyXG4gIGZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHtcclxuICAgIGNvbnN0IGNoYWtyYVByb3BzID0gT2JqZWN0LmZyb21FbnRyaWVzKFxyXG4gICAgICAvLyBkbyBub3QgcGFzcyBmcmFtZXIgcHJvcHMgdG8gRE9NIGVsZW1lbnRcclxuICAgICAgT2JqZWN0LmVudHJpZXMocHJvcHMpLmZpbHRlcigoW2tleV0pID0+ICFpc1ZhbGlkTW90aW9uUHJvcChrZXkpKVxyXG4gICAgKTtcclxuICAgIHJldHVybiA8VGV4dCByZWY9e3JlZn0gey4uLmNoYWtyYVByb3BzfSAvPjtcclxuICB9KVxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1vdGlvbkxpc3QgPSBtb3Rpb24oXHJcbiAgZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4ge1xyXG4gICAgY29uc3QgY2hha3JhUHJvcHMgPSBPYmplY3QuZnJvbUVudHJpZXMoXHJcbiAgICAgIC8vIGRvIG5vdCBwYXNzIGZyYW1lciBwcm9wcyB0byBET00gZWxlbWVudFxyXG4gICAgICBPYmplY3QuZW50cmllcyhwcm9wcykuZmlsdGVyKChba2V5XSkgPT4gIWlzVmFsaWRNb3Rpb25Qcm9wKGtleSkpXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIDxMaXN0IHJlZj17cmVmfSB7Li4uY2hha3JhUHJvcHN9IC8+O1xyXG4gIH0pXHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgTW90aW9uSW1hZ2UgPSBtb3Rpb24oXHJcbiAgZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4ge1xyXG4gICAgY29uc3QgY2hha3JhUHJvcHMgPSBPYmplY3QuZnJvbUVudHJpZXMoXHJcbiAgICAgIE9iamVjdC5lbnRyaWVzKHByb3BzKS5maWx0ZXIoKFtrZXldKSA9PiAhaXNWYWxpZE1vdGlvblByb3Aoa2V5KSlcclxuICAgICk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgcmVmPXtyZWZ9XHJcbiAgICAgICAgICBmYWxsYmFja1NyYz17Jy9hc3NldHMvaW1hZ2VzL3BsYWNlaG9sZGVyLnBuZyd9XHJcbiAgICAgICAgICB7Li4uY2hha3JhUHJvcHN9XHJcbiAgICAgICAgLz5cclxuICAgICk7XHJcbiAgfSlcclxuKTtcclxuIiwiaW1wb3J0IHsgU2xpZGVGYWRlIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IHsgTW90aW9uQm94IH0gZnJvbSBcIi4vbW90aW9uXCI7XHJcblxyXG5jb25zdCBzdGFnZ2VyVmFyaWFudHMgPSB7XHJcbiAgaW5pdGlhbDoge1xyXG4gICAgb3BhY2l0eTogMCxcclxuICAgIHRyYW5zbGF0ZVk6IC0yMFxyXG4gIH0sXHJcbiAgZW50ZXI6IHtcclxuICAgIHRyYW5zaXRpb246IHsgc3RhZ2dlckNoaWxkcmVuOiAwLjE1LCBkZWxheUNoaWxkcmVuOiAwLjQgfVxyXG4gIH0sXHJcbiAgZXhpdDoge1xyXG4gICAgdHJhbnNpdGlvbjogeyBzdGFnZ2VyQ2hpbGRyZW46IDAuMDUsIHN0YWdnZXJEaXJlY3Rpb246IC0xIH1cclxuICB9XHJcbn07XHJcblxyXG5jb25zdCB2YXJpYW50cyA9IHtcclxuICBpbml0aWFsOiB7XHJcbiAgICBvcGFjaXR5OiAwLFxyXG4gICAgdHJhbnNsYXRlWTogLTIwXHJcbiAgfSxcclxuICBlbnRlcjoge1xyXG4gICAgeTogMCxcclxuICAgIG9wYWNpdHk6IDEsXHJcbiAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgIHk6IHsgc3RpZmZuZXNzOiAxMDAwLCB2ZWxvY2l0eTogLTEwMCB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBleGl0OiB7XHJcbiAgICB5OiA1MCxcclxuICAgIG9wYWNpdHk6IDAsXHJcbiAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgIHk6IHsgc3RpZmZuZXNzOiAxMDAwIH1cclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZWFzaW5nID0gWzAuNiwgLTAuMDUsIDAuMDEsIDAuOTldXHJcblxyXG5leHBvcnQgY29uc3Qgc3RhZ2dlciA9IHtcclxuICBhbmltYXRlOiB7XHJcbiAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgIHN0YWdnZXJDaGlsZHJlbjogMC4xLFxyXG4gICAgfSxcclxuICB9LFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZmFkZUluVXAgPSB7XHJcbiAgaW5pdGlhbDoge1xyXG4gICAgeTogNjAsXHJcbiAgICBvcGFjaXR5OiAwLFxyXG4gICAgdHJhbnNpdGlvbjogeyBkdXJhdGlvbjogMC42LCBlYXNlOiBlYXNpbmcgfSxcclxuICB9LFxyXG4gIGFuaW1hdGU6IHtcclxuICAgIHk6IDAsXHJcbiAgICBvcGFjaXR5OiAxLFxyXG4gICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICBkdXJhdGlvbjogMC42LFxyXG4gICAgICBlYXNlOiBlYXNpbmcsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgY29udGFpbmVyID0ge1xyXG4gIGhpZGRlbjogeyBvcGFjaXR5OiAxLCBzY2FsZTogMCB9LFxyXG4gIHZpc2libGU6IHtcclxuICAgIG9wYWNpdHk6IDEsXHJcbiAgICBzY2FsZTogMSxcclxuICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgZGVsYXlDaGlsZHJlbjogMC4zLFxyXG4gICAgICBzdGFnZ2VyQ2hpbGRyZW46IDAuMlxyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBpdGVtID0ge1xyXG4gIGhpZGRlbjogeyB5OiAyMCwgb3BhY2l0eTogMCB9LFxyXG4gIHZpc2libGU6IHtcclxuICAgIHk6IDAsXHJcbiAgICBvcGFjaXR5OiAxXHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFBhZ2VTbGlkZUZhZGUgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgcmV0dXJuIDxTbGlkZUZhZGUgaW4+e2NoaWxkcmVufTwvU2xpZGVGYWRlPjtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBTdGFnZ2VyQ2hpbGRyZW4gPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxNb3Rpb25Cb3hcclxuICAgICAgYW5pbWF0ZT17e1xyXG4gICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgICAgdHJhbnNsYXRlWTogMFxyXG4gICAgICB9fVxyXG4gICAgICB2YXJpYW50cz17c3RhZ2dlclZhcmlhbnRzfVxyXG4gICAgPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L01vdGlvbkJveD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IENhcmRUcmFuc2l0aW9uID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIHJldHVybiA8TW90aW9uQm94IHZhcmlhbnRzPXt2YXJpYW50c30+e2NoaWxkcmVufTwvTW90aW9uQm94PjtcclxufTtcclxuIiwiaW1wb3J0IHsgUHJvcHNXaXRoQ2hpbGRyZW4gfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJveCB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBjb2xvcjogc3RyaW5nO1xyXG4gIGg/OiBzdHJpbmc7XHJcbiAgekluZGV4PzogbnVtYmVyO1xyXG59XHJcbmNvbnN0IFVuZGVybGluZWRUZXh0ID0gKHByb3BzOiBQcm9wc1dpdGhDaGlsZHJlbjxQcm9wcz4pID0+IChcclxuICA8Qm94IGFzPVwic3BhblwiIGRpc3BsYXk9XCJpbmxpbmUtYmxvY2tcIiBwb3NpdGlvbj1cInJlbGF0aXZlXCI+XHJcbiAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICA8Qm94IGFzPVwic3BhblwiIGRpc3BsYXk9XCJibG9ja1wiIHBvc2l0aW9uPVwiYWJzb2x1dGVcIiBiZz17J2dyYXkuMjAwJ30gdz17JzEwMCUnfSBoPXtwcm9wcy5oIHx8ICcxcHgnfSBib3R0b209ey0yfSAvPlxyXG4gIDwvQm94PlxyXG4pO1xyXG5leHBvcnQgZGVmYXVsdCBVbmRlcmxpbmVkVGV4dDtcclxuIiwiZXhwb3J0IGNvbnN0IHByb2plY3RzTGlzdCA9IFtcclxuIFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIkJhc2ljIEluc3RhZ3JhbVwiLFxyXG4gICAgaW1hZ2VMaWdodDogJy9hc3NldHMvaW1hZ2VzL3Byb2plY3RzL2NvdmVyL2Jhc2ljaWcucG5nJyxcclxuICAgIGJsdXJIYXNoOiBcIkw0QURjNDAwUCpaaTRUdTF5O1FvMDBwSCNZWGxcIixcclxuICAgIHNpdGU6IFwiaHR0cHM6Ly9naXRodWIuY29tL21lcnRrYWRpcmFyc2xhbi9CYXNpY0luc3RhZ3JhbUNsb25lXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogYEluIGl0cyBzaW1wbGVzdCBmb3JtLCBJbnN0YWdyYW0gaGFzIGluZnJhc3RydWN0dXJlLiBJdCBoYXMgbm8gZGVzaWduIGFuZCBkZXRhaWxzLCBoYXMgdGhlIGZlYXR1cmVzIHRvIGNyZWF0ZSB1c2VycywgY3JlYXRlIHBvc3RzLCBzZWxlY3QgcGhvdG9zLCBhbm5vdGF0ZSBhbmQgbG9nIG91dC5gLFxyXG4gICAgdGVjaFN0YWNrOiBbXCJGaXJlQmFzZVwiLCBcIlhNTFwiLCBcIkphdmFcIl1cclxuICB9LFxyXG4gIFxyXG5cclxuXTtcclxuIiwiaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiO1xyXG5pbXBvcnQge1xyXG4gIFZTdGFjayxcclxuICBUZXh0LFxyXG4gIEhlYWRpbmcsXHJcbiAgRmxleCxcclxuICBTdGFjayxcclxuICBCb3gsXHJcbiAgdXNlQ29sb3JNb2RlVmFsdWUsXHJcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IHsgcHJvamVjdHNMaXN0IH0gZnJvbSBcIi4uL2RhdGEvcHJvamVjdERhdGFcIjtcclxuaW1wb3J0IFBhZ2VMYXlvdXQgZnJvbSBcImNvbXBvbmVudHMvbGF5b3V0L3BhZ2VMYXlvdXRcIjtcclxuaW1wb3J0IHsgUGFnZVNsaWRlRmFkZSB9IGZyb20gXCJjb21wb25lbnRzL3VpL3BhZ2UtdHJhbnNpdGlvbnNcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiY29tcG9uZW50cy9sYXlvdXQvaGVhZGVyXCI7XHJcbmltcG9ydCB7IExlZnRQcm9qZWN0TGF5b3V0TGFyZ2UsIFByb2plY3RMYXlvdXRNZWQsIFJpZ2h0UHJvamVjdExheW91dExhcmdlIH0gZnJvbSBcImNvbXBvbmVudHMvbGF5b3V0L3Byb2plY3RMYXlvdXRcIjtcclxuaW1wb3J0IHsgQnNGaWxsQnJpZWZjYXNlRmlsbCB9IGZyb20gXCJyZWFjdC1pY29ucy9ic1wiO1xyXG5cclxuY29uc3QgdGl0bGUgPSBcIlByb2plY3RzIPCfk5pcIjtcclxuY29uc3Qgc3VidGl0bGUgPVxyXG4gIFwiQSBzZWxlY3Rpb24gb2YgcHJvamVjdHMgSSd2ZSB3b3JrZWQgb24sIGR1cmluZyBteSBjYXJlZXIgYXMgYSBzb2Z0d2FyZSBkZXZlbG9wZXIuXCI7XHJcblxyXG5jb25zdCBUVVJRVU9JU0UgPSBcIiMwNmI2ZDRcIjtcclxuXHJcbmNvbnN0IFByb2plY3RzOiBOZXh0UGFnZSA9ICgpID0+IHtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGcmFnbWVudD5cclxuICAgICAgPFBhZ2VMYXlvdXQgdGl0bGU9e3RpdGxlfSBkZXNjcmlwdGlvbj17c3VidGl0bGV9PlxyXG4gICAgICAgIDxQYWdlU2xpZGVGYWRlPlxyXG4gICAgICAgICAgPFZTdGFjayBhbGlnbj1cInN0YXJ0XCI+XHJcbiAgICAgICAgICAgIDxIZWFkZXIgdW5kZXJsaW5lQ29sb3I9e1RVUlFVT0lTRX0gbXQ9ezB9IG1iPXsyfT5cclxuICAgICAgICAgICAgICBQcm9qZWN0c1xyXG4gICAgICAgICAgICA8L0hlYWRlcj5cclxuICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICBjb2xvcj17dXNlQ29sb3JNb2RlVmFsdWUoXCJncmF5LjUwMFwiLCBcImdyYXkuMjAwXCIpfVxyXG4gICAgICAgICAgICAgIHRleHRBbGlnbj1cImxlZnRcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge3N1YnRpdGxlfVxyXG4gICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICA8L1ZTdGFjaz5cclxuICAgICAgICAgIDxWU3RhY2sgc3BhY2luZz17OH0gbXQ9e1tcIjdcIiwgXCIwXCIsIFwiMFwiXX0+XHJcbiAgICAgICAgICAgIHtwcm9qZWN0c0xpc3QubWFwKChwcm9qZWN0LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8UHJvamVjdExheW91dE1lZCBwcm9qZWN0PXtwcm9qZWN0fSAvPlxyXG4gICAgICAgICAgICAgICAge2luZGV4ICUgMiA9PT0gMCA/IChcclxuICAgICAgICAgICAgICAgICAgPExlZnRQcm9qZWN0TGF5b3V0TGFyZ2UgcHJvamVjdD17cHJvamVjdH0gLz5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgIDxSaWdodFByb2plY3RMYXlvdXRMYXJnZSBwcm9qZWN0PXtwcm9qZWN0fSAvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L1ZTdGFjaz5cclxuICAgICAgICA8L1BhZ2VTbGlkZUZhZGU+XHJcbiAgICAgIDwvUGFnZUxheW91dD5cclxuICAgIDwvRnJhZ21lbnQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2plY3RzO1xyXG4iLCIvLyBUSElTIEZJTEUgSVMgQVVUTyBHRU5FUkFURURcbmltcG9ydCB7IEdlbkljb24gfSBmcm9tICcuLi9saWInO1xuZXhwb3J0IGZ1bmN0aW9uIEhpQWNhZGVtaWNDYXAgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJkXCI6XCJNMTAuMzk0IDIuMDhhMSAxIDAgMDAtLjc4OCAwbC03IDNhMSAxIDAgMDAwIDEuODRMNS4yNSA4LjA1MWEuOTk5Ljk5OSAwIDAxLjM1Ni0uMjU3bDQtMS43MTRhMSAxIDAgMTEuNzg4IDEuODM4TDcuNjY3IDkuMDg4bDEuOTQuODMxYTEgMSAwIDAwLjc4NyAwbDctM2ExIDEgMCAwMDAtMS44MzhsLTctM3pNMy4zMSA5LjM5N0w1IDEwLjEydjQuMTAyYTguOTY5IDguOTY5IDAgMDAtMS4wNS0uMTc0IDEgMSAwIDAxLS44OS0uODkgMTEuMTE1IDExLjExNSAwIDAxLjI1LTMuNzYyek05LjMgMTYuNTczQTkuMDI2IDkuMDI2IDAgMDA3IDE0LjkzNXYtMy45NTdsMS44MTguNzhhMyAzIDAgMDAyLjM2NCAwbDUuNTA4LTIuMzYxYTExLjAyNiAxMS4wMjYgMCAwMS4yNSAzLjc2MiAxIDEgMCAwMS0uODkuODkgOC45NjggOC45NjggMCAwMC01LjM1IDIuNTI0IDEgMSAwIDAxLTEuNCAwek02IDE4YTEgMSAwIDAwMS0xdi0yLjA2NWE4LjkzNSA4LjkzNSAwIDAwLTItLjcxMlYxN2ExIDEgMCAwMDEgMXpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlBZGp1c3RtZW50cyAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImRcIjpcIk01IDRhMSAxIDAgMDAtMiAwdjcuMjY4YTIgMiAwIDAwMCAzLjQ2NFYxNmExIDEgMCAxMDIgMHYtMS4yNjhhMiAyIDAgMDAwLTMuNDY0VjR6TTExIDRhMSAxIDAgMTAtMiAwdjEuMjY4YTIgMiAwIDAwMCAzLjQ2NFYxNmExIDEgMCAxMDIgMFY4LjczMmEyIDIgMCAwMDAtMy40NjRWNHpNMTYgM2ExIDEgMCAwMTEgMXY3LjI2OGEyIDIgMCAwMTAgMy40NjRWMTZhMSAxIDAgMTEtMiAwdi0xLjI2OGEyIDIgMCAwMTAtMy40NjRWNGExIDEgMCAwMTEtMXpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlBbm5vdGF0aW9uIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0xOCAxM1Y1YTIgMiAwIDAwLTItMkg0YTIgMiAwIDAwLTIgMnY4YTIgMiAwIDAwMiAyaDNsMyAzIDMtM2gzYTIgMiAwIDAwMi0yek01IDdhMSAxIDAgMDExLTFoOGExIDEgMCAxMTAgMkg2YTEgMSAwIDAxLTEtMXptMSAzYTEgMSAwIDEwMCAyaDNhMSAxIDAgMTAwLTJINnpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpQXJjaGl2ZSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImRcIjpcIk00IDNhMiAyIDAgMTAwIDRoMTJhMiAyIDAgMTAwLTRINHpcIn19LHtcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMyA4aDE0djdhMiAyIDAgMDEtMiAySDVhMiAyIDAgMDEtMi0yVjh6bTUgM2ExIDEgMCAwMTEtMWgyYTEgMSAwIDExMCAySDlhMSAxIDAgMDEtMS0xelwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlBcnJvd0NpcmNsZURvd24gKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTEwIDE4YTggOCAwIDEwMC0xNiA4IDggMCAwMDAgMTZ6bTEtMTFhMSAxIDAgMTAtMiAwdjMuNTg2TDcuNzA3IDkuMjkzYTEgMSAwIDAwLTEuNDE0IDEuNDE0bDMgM2ExIDEgMCAwMDEuNDE0IDBsMy0zYTEgMSAwIDAwLTEuNDE0LTEuNDE0TDExIDEwLjU4NlY3elwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlBcnJvd0NpcmNsZUxlZnQgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTEwIDE4YTggOCAwIDEwMC0xNiA4IDggMCAwMDAgMTZ6bS43MDctMTAuMjkzYTEgMSAwIDAwLTEuNDE0LTEuNDE0bC0zIDNhMSAxIDAgMDAwIDEuNDE0bDMgM2ExIDEgMCAwMDEuNDE0LTEuNDE0TDkuNDE0IDExSDEzYTEgMSAwIDEwMC0ySDkuNDE0bDEuMjkzLTEuMjkzelwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlBcnJvd0NpcmNsZVJpZ2h0IChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0xMCAxOGE4IDggMCAxMDAtMTYgOCA4IDAgMDAwIDE2em0zLjcwNy04LjcwN2wtMy0zYTEgMSAwIDAwLTEuNDE0IDEuNDE0TDEwLjU4NiA5SDdhMSAxIDAgMTAwIDJoMy41ODZsLTEuMjkzIDEuMjkzYTEgMSAwIDEwMS40MTQgMS40MTRsMy0zYTEgMSAwIDAwMC0xLjQxNHpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpQXJyb3dDaXJjbGVVcCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMTAgMThhOCA4IDAgMTAwLTE2IDggOCAwIDAwMCAxNnptMy43MDctOC43MDdsLTMtM2ExIDEgMCAwMC0xLjQxNCAwbC0zIDNhMSAxIDAgMDAxLjQxNCAxLjQxNEw5IDkuNDE0VjEzYTEgMSAwIDEwMiAwVjkuNDE0bDEuMjkzIDEuMjkzYTEgMSAwIDAwMS40MTQtMS40MTR6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaUFycm93RG93biAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMTYuNzA3IDEwLjI5M2ExIDEgMCAwMTAgMS40MTRsLTYgNmExIDEgMCAwMS0xLjQxNCAwbC02LTZhMSAxIDAgMTExLjQxNC0xLjQxNEw5IDE0LjU4NlYzYTEgMSAwIDAxMiAwdjExLjU4Nmw0LjI5My00LjI5M2ExIDEgMCAwMTEuNDE0IDB6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaUFycm93TGVmdCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNOS43MDcgMTYuNzA3YTEgMSAwIDAxLTEuNDE0IDBsLTYtNmExIDEgMCAwMTAtMS40MTRsNi02YTEgMSAwIDAxMS40MTQgMS40MTRMNS40MTQgOUgxN2ExIDEgMCAxMTAgMkg1LjQxNGw0LjI5MyA0LjI5M2ExIDEgMCAwMTAgMS40MTR6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaUFycm93TmFycm93RG93biAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMTQuNzA3IDEyLjI5M2ExIDEgMCAwMTAgMS40MTRsLTQgNGExIDEgMCAwMS0xLjQxNCAwbC00LTRhMSAxIDAgMTExLjQxNC0xLjQxNEw5IDE0LjU4NlYzYTEgMSAwIDAxMiAwdjExLjU4NmwyLjI5My0yLjI5M2ExIDEgMCAwMTEuNDE0IDB6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaUFycm93TmFycm93TGVmdCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNNy43MDcgMTQuNzA3YTEgMSAwIDAxLTEuNDE0IDBsLTQtNGExIDEgMCAwMTAtMS40MTRsNC00YTEgMSAwIDAxMS40MTQgMS40MTRMNS40MTQgOUgxN2ExIDEgMCAxMTAgMkg1LjQxNGwyLjI5MyAyLjI5M2ExIDEgMCAwMTAgMS40MTR6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaUFycm93TmFycm93UmlnaHQgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTEyLjI5MyA1LjI5M2ExIDEgMCAwMTEuNDE0IDBsNCA0YTEgMSAwIDAxMCAxLjQxNGwtNCA0YTEgMSAwIDAxLTEuNDE0LTEuNDE0TDE0LjU4NiAxMUgzYTEgMSAwIDExMC0yaDExLjU4NmwtMi4yOTMtMi4yOTNhMSAxIDAgMDEwLTEuNDE0elwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlBcnJvd05hcnJvd1VwIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk01LjI5MyA3LjcwN2ExIDEgMCAwMTAtMS40MTRsNC00YTEgMSAwIDAxMS40MTQgMGw0IDRhMSAxIDAgMDEtMS40MTQgMS40MTRMMTEgNS40MTRWMTdhMSAxIDAgMTEtMiAwVjUuNDE0TDYuNzA3IDcuNzA3YTEgMSAwIDAxLTEuNDE0IDB6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaUFycm93UmlnaHQgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTEwLjI5MyAzLjI5M2ExIDEgMCAwMTEuNDE0IDBsNiA2YTEgMSAwIDAxMCAxLjQxNGwtNiA2YTEgMSAwIDAxLTEuNDE0LTEuNDE0TDE0LjU4NiAxMUgzYTEgMSAwIDExMC0yaDExLjU4NmwtNC4yOTMtNC4yOTNhMSAxIDAgMDEwLTEuNDE0elwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlBcnJvd1VwIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0zLjI5MyA5LjcwN2ExIDEgMCAwMTAtMS40MTRsNi02YTEgMSAwIDAxMS40MTQgMGw2IDZhMSAxIDAgMDEtMS40MTQgMS40MTRMMTEgNS40MTRWMTdhMSAxIDAgMTEtMiAwVjUuNDE0TDQuNzA3IDkuNzA3YTEgMSAwIDAxLTEuNDE0IDB6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaUFycm93c0V4cGFuZCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMTkgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZVwiOlwiIzM3NDE1MVwiLFwic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0zIDhWNG0wIDBoNE0zIDRsNCA0bTggMFY0bTAgMGgtNG00IDBsLTQgNG0tOCA0djRtMCAwaDRtLTQgMGw0LTRtOCA0bC00LTRtNCA0di00bTAgNGgtNFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaUF0U3ltYm9sIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0xNC4yNDMgNS43NTdhNiA2IDAgMTAtLjk4NiA5LjI4NCAxIDEgMCAxMTEuMDg3IDEuNjc4QTggOCAwIDExMTggMTBhMyAzIDAgMDEtNC44IDIuNDAxQTQgNCAwIDExMTQgMTBhMSAxIDAgMTAyIDBjMC0xLjUzNy0uNTg2LTMuMDctMS43NTctNC4yNDN6TTEyIDEwYTIgMiAwIDEwLTQgMCAyIDIgMCAwMDQgMHpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpQmFja3NwYWNlIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk02LjcwNyA0Ljg3OUEzIDMgMCAwMTguODI4IDRIMTVhMyAzIDAgMDEzIDN2NmEzIDMgMCAwMS0zIDNIOC44MjhhMyAzIDAgMDEtMi4xMi0uODc5bC00LjQxNS00LjQxNGExIDEgMCAwMTAtMS40MTRsNC40MTQtNC40MTR6bTQgMi40MTRhMSAxIDAgMDAtMS40MTQgMS40MTRMMTAuNTg2IDEwbC0xLjI5MyAxLjI5M2ExIDEgMCAxMDEuNDE0IDEuNDE0TDEyIDExLjQxNGwxLjI5MyAxLjI5M2ExIDEgMCAwMDEuNDE0LTEuNDE0TDEzLjQxNCAxMGwxLjI5My0xLjI5M2ExIDEgMCAwMC0xLjQxNC0xLjQxNEwxMiA4LjU4NmwtMS4yOTMtMS4yOTN6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaUJhZGdlQ2hlY2sgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTYuMjY3IDMuNDU1YTMuMDY2IDMuMDY2IDAgMDAxLjc0NS0uNzIzIDMuMDY2IDMuMDY2IDAgMDEzLjk3NiAwIDMuMDY2IDMuMDY2IDAgMDAxLjc0NS43MjMgMy4wNjYgMy4wNjYgMCAwMTIuODEyIDIuODEyYy4wNTEuNjQzLjMwNCAxLjI1NC43MjMgMS43NDVhMy4wNjYgMy4wNjYgMCAwMTAgMy45NzYgMy4wNjYgMy4wNjYgMCAwMC0uNzIzIDEuNzQ1IDMuMDY2IDMuMDY2IDAgMDEtMi44MTIgMi44MTIgMy4wNjYgMy4wNjYgMCAwMC0xLjc0NS43MjMgMy4wNjYgMy4wNjYgMCAwMS0zLjk3NiAwIDMuMDY2IDMuMDY2IDAgMDAtMS43NDUtLjcyMyAzLjA2NiAzLjA2NiAwIDAxLTIuODEyLTIuODEyIDMuMDY2IDMuMDY2IDAgMDAtLjcyMy0xLjc0NSAzLjA2NiAzLjA2NiAwIDAxMC0zLjk3NiAzLjA2NiAzLjA2NiAwIDAwLjcyMy0xLjc0NSAzLjA2NiAzLjA2NiAwIDAxMi44MTItMi44MTJ6bTcuNDQgNS4yNTJhMSAxIDAgMDAtMS40MTQtMS40MTRMOSAxMC41ODYgNy43MDcgOS4yOTNhMSAxIDAgMDAtMS40MTQgMS40MTRsMiAyYTEgMSAwIDAwMS40MTQgMGw0LTR6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaUJhbiAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMTMuNDc3IDE0Ljg5QTYgNiAwIDAxNS4xMSA2LjUyNGw4LjM2NyA4LjM2OHptMS40MTQtMS40MTRMNi41MjQgNS4xMWE2IDYgMCAwMTguMzY3IDguMzY3ek0xOCAxMGE4IDggMCAxMS0xNiAwIDggOCAwIDAxMTYgMHpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpQmVha2VyIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk03IDJhMSAxIDAgMDAtLjcwNyAxLjcwN0w3IDQuNDE0djMuNzU4YTEgMSAwIDAxLS4yOTMuNzA3bC00IDRDLjgxNyAxNC43NjkgMi4xNTYgMTggNC44MjggMThoMTAuMzQzYzIuNjczIDAgNC4wMTItMy4yMzEgMi4xMjItNS4xMjFsLTQtNEExIDEgMCAwMTEzIDguMTcyVjQuNDE0bC43MDctLjcwN0ExIDEgMCAwMDEzIDJIN3ptMiA2LjE3MlY0aDJ2NC4xNzJhMyAzIDAgMDAuODc5IDIuMTJsMS4wMjcgMS4wMjhhNCA0IDAgMDAtMi4xNzEuMTAybC0uNDcuMTU2YTQgNCAwIDAxLTIuNTMgMGwtLjU2My0uMTg3YTEuOTkzIDEuOTkzIDAgMDAtLjExNC0uMDM1bDEuMDYzLTEuMDYzQTMgMyAwIDAwOSA4LjE3MnpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpQmVsbCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImRcIjpcIk0xMCAyYTYgNiAwIDAwLTYgNnYzLjU4NmwtLjcwNy43MDdBMSAxIDAgMDA0IDE0aDEyYTEgMSAwIDAwLjcwNy0xLjcwN0wxNiAxMS41ODZWOGE2IDYgMCAwMC02LTZ6TTEwIDE4YTMgMyAwIDAxLTMtM2g2YTMgMyAwIDAxLTMgM3pcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlCb29rT3BlbiAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImRcIjpcIk05IDQuODA0QTcuOTY4IDcuOTY4IDAgMDA1LjUgNGMtMS4yNTUgMC0yLjQ0My4yOS0zLjUuODA0djEwQTcuOTY5IDcuOTY5IDAgMDE1LjUgMTRjMS42NjkgMCAzLjIxOC41MSA0LjUgMS4zODVBNy45NjIgNy45NjIgMCAwMTE0LjUgMTRjMS4yNTUgMCAyLjQ0My4yOSAzLjUuODA0di0xMEE3Ljk2OCA3Ljk2OCAwIDAwMTQuNSA0Yy0xLjI1NSAwLTIuNDQzLjI5LTMuNS44MDRWMTJhMSAxIDAgMTEtMiAwVjQuODA0elwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaUJvb2ttYXJrQWx0IChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0zIDVhMiAyIDAgMDEyLTJoMTBhMiAyIDAgMDEyIDJ2MTBhMiAyIDAgMDEtMiAySDVhMiAyIDAgMDEtMi0yVjV6bTExIDFINnY4bDQtMiA0IDJWNnpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpQm9va21hcmsgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJkXCI6XCJNNSA0YTIgMiAwIDAxMi0yaDZhMiAyIDAgMDEyIDJ2MTRsLTUtMi41TDUgMThWNHpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlCcmllZmNhc2UgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTYgNlY1YTMgMyAwIDAxMy0zaDJhMyAzIDAgMDEzIDN2MWgyYTIgMiAwIDAxMiAydjMuNTdBMjIuOTUyIDIyLjk1MiAwIDAxMTAgMTNhMjIuOTUgMjIuOTUgMCAwMS04LTEuNDNWOGEyIDIgMCAwMTItMmgyem0yLTFhMSAxIDAgMDExLTFoMmExIDEgMCAwMTEgMXYxSDhWNXptMSA1YTEgMSAwIDAxMS0xaC4wMWExIDEgMCAxMTAgMkgxMGExIDEgMCAwMS0xLTF6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX0se1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZFwiOlwiTTIgMTMuNjkyVjE2YTIgMiAwIDAwMiAyaDEyYTIgMiAwIDAwMi0ydi0yLjMwOEEyNC45NzQgMjQuOTc0IDAgMDExMCAxNWMtMi43OTYgMC01LjQ4Ny0uNDYtOC0xLjMwOHpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlDYWtlIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk02IDNhMSAxIDAgMDExLTFoLjAxYTEgMSAwIDAxMCAySDdhMSAxIDAgMDEtMS0xem0yIDNhMSAxIDAgMDAtMiAwdjFhMiAyIDAgMDAtMiAydjFhMiAyIDAgMDAtMiAydi42ODNhMy43IDMuNyAwIDAxMS4wNTUuNDg1IDEuNzA0IDEuNzA0IDAgMDAxLjg5IDAgMy43MDQgMy43MDQgMCAwMTQuMTEgMCAxLjcwNCAxLjcwNCAwIDAwMS44OSAwIDMuNzA0IDMuNzA0IDAgMDE0LjExIDAgMS43MDQgMS43MDQgMCAwMDEuODkgMEEzLjcgMy43IDAgMDExOCAxMi42ODNWMTJhMiAyIDAgMDAtMi0yVjlhMiAyIDAgMDAtMi0yVjZhMSAxIDAgMTAtMiAwdjFoLTFWNmExIDEgMCAxMC0yIDB2MUg4VjZ6bTEwIDguODY4YTMuNzA0IDMuNzA0IDAgMDEtNC4wNTUtLjAzNiAxLjcwNCAxLjcwNCAwIDAwLTEuODkgMCAzLjcwNCAzLjcwNCAwIDAxLTQuMTEgMCAxLjcwNCAxLjcwNCAwIDAwLTEuODkgMEEzLjcwNCAzLjcwNCAwIDAxMiAxNC44NjhWMTdhMSAxIDAgMDAxIDFoMTRhMSAxIDAgMDAxLTF2LTIuMTMyek05IDNhMSAxIDAgMDExLTFoLjAxYTEgMSAwIDExMCAySDEwYTEgMSAwIDAxLTEtMXptMyAwYTEgMSAwIDAxMS0xaC4wMWExIDEgMCAxMTAgMkgxM2ExIDEgMCAwMS0xLTF6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaUNhbGN1bGF0b3IgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTYgMmEyIDIgMCAwMC0yIDJ2MTJhMiAyIDAgMDAyIDJoOGEyIDIgMCAwMDItMlY0YTIgMiAwIDAwLTItMkg2em0xIDJhMSAxIDAgMDAwIDJoNmExIDEgMCAxMDAtMkg3em02IDdhMSAxIDAgMDExIDF2M2ExIDEgMCAxMS0yIDB2LTNhMSAxIDAgMDExLTF6bS0zIDNhMSAxIDAgMTAwIDJoLjAxYTEgMSAwIDEwMC0ySDEwem0tNCAxYTEgMSAwIDAxMS0xaC4wMWExIDEgMCAxMTAgMkg3YTEgMSAwIDAxLTEtMXptMS00YTEgMSAwIDEwMCAyaC4wMWExIDEgMCAxMDAtMkg3em0yIDFhMSAxIDAgMDExLTFoLjAxYTEgMSAwIDExMCAySDEwYTEgMSAwIDAxLTEtMXptNC00YTEgMSAwIDEwMCAyaC4wMWExIDEgMCAxMDAtMkgxM3pNOSA5YTEgMSAwIDAxMS0xaC4wMWExIDEgMCAxMTAgMkgxMGExIDEgMCAwMS0xLTF6TTcgOGExIDEgMCAwMDAgMmguMDFhMSAxIDAgMDAwLTJIN3pcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpQ2FsZW5kYXIgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTYgMmExIDEgMCAwMC0xIDF2MUg0YTIgMiAwIDAwLTIgMnYxMGEyIDIgMCAwMDIgMmgxMmEyIDIgMCAwMDItMlY2YTIgMiAwIDAwLTItMmgtMVYzYTEgMSAwIDEwLTIgMHYxSDdWM2ExIDEgMCAwMC0xLTF6bTAgNWExIDEgMCAwMDAgMmg4YTEgMSAwIDEwMC0ySDZ6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaUNhbWVyYSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNNCA1YTIgMiAwIDAwLTIgMnY4YTIgMiAwIDAwMiAyaDEyYTIgMiAwIDAwMi0yVjdhMiAyIDAgMDAtMi0yaC0xLjU4NmExIDEgMCAwMS0uNzA3LS4yOTNsLTEuMTIxLTEuMTIxQTIgMiAwIDAwMTEuMTcyIDNIOC44MjhhMiAyIDAgMDAtMS40MTQuNTg2TDYuMjkzIDQuNzA3QTEgMSAwIDAxNS41ODYgNUg0em02IDlhMyAzIDAgMTAwLTYgMyAzIDAgMDAwIDZ6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaUNhc2ggKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTQgNGEyIDIgMCAwMC0yIDJ2NGEyIDIgMCAwMDIgMlY2aDEwYTIgMiAwIDAwLTItMkg0em0yIDZhMiAyIDAgMDEyLTJoOGEyIDIgMCAwMTIgMnY0YTIgMiAwIDAxLTIgMkg4YTIgMiAwIDAxLTItMnYtNHptNiA0YTIgMiAwIDEwMC00IDIgMiAwIDAwMCA0elwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlDaGFydEJhciAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImRcIjpcIk0yIDExYTEgMSAwIDAxMS0xaDJhMSAxIDAgMDExIDF2NWExIDEgMCAwMS0xIDFIM2ExIDEgMCAwMS0xLTF2LTV6TTggN2ExIDEgMCAwMTEtMWgyYTEgMSAwIDAxMSAxdjlhMSAxIDAgMDEtMSAxSDlhMSAxIDAgMDEtMS0xVjd6TTE0IDRhMSAxIDAgMDExLTFoMmExIDEgMCAwMTEgMXYxMmExIDEgMCAwMS0xIDFoLTJhMSAxIDAgMDEtMS0xVjR6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpQ2hhcnRQaWUgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJkXCI6XCJNMiAxMGE4IDggMCAwMTgtOHY4aDhhOCA4IDAgMTEtMTYgMHpcIn19LHtcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImRcIjpcIk0xMiAyLjI1MkE4LjAxNCA4LjAxNCAwIDAxMTcuNzQ4IDhIMTJWMi4yNTJ6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpQ2hhcnRTcXVhcmVCYXIgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTUgM2EyIDIgMCAwMC0yIDJ2MTBhMiAyIDAgMDAyIDJoMTBhMiAyIDAgMDAyLTJWNWEyIDIgMCAwMC0yLTJINXptOSA0YTEgMSAwIDEwLTIgMHY2YTEgMSAwIDEwMiAwVjd6bS0zIDJhMSAxIDAgMTAtMiAwdjRhMSAxIDAgMTAyIDBWOXptLTMgM2ExIDEgMCAxMC0yIDB2MWExIDEgMCAxMDIgMHYtMXpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpQ2hhdEFsdDIgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJkXCI6XCJNMiA1YTIgMiAwIDAxMi0yaDdhMiAyIDAgMDEyIDJ2NGEyIDIgMCAwMS0yIDJIOWwtMyAzdi0zSDRhMiAyIDAgMDEtMi0yVjV6XCJ9fSx7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJkXCI6XCJNMTUgN3YyYTQgNCAwIDAxLTQgNEg5LjgyOGwtMS43NjYgMS43NjdjLjI4LjE0OS41OTkuMjMzLjkzOC4yMzNoMmwzIDN2LTNoMmEyIDIgMCAwMDItMlY5YTIgMiAwIDAwLTItMmgtMXpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlDaGF0QWx0IChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0xOCA1djhhMiAyIDAgMDEtMiAyaC01bC01IDR2LTRINGEyIDIgMCAwMS0yLTJWNWEyIDIgMCAwMTItMmgxMmEyIDIgMCAwMTIgMnpNNyA4SDV2MmgyVjh6bTIgMGgydjJIOVY4em02IDBoLTJ2MmgyVjh6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaUNoYXQgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTE4IDEwYzAgMy44NjYtMy41ODIgNy04IDdhOC44NDEgOC44NDEgMCAwMS00LjA4My0uOThMMiAxN2wxLjMzOC0zLjEyM0MyLjQ5MyAxMi43NjcgMiAxMS40MzQgMiAxMGMwLTMuODY2IDMuNTgyLTcgOC03czggMy4xMzQgOCA3ek03IDlINXYyaDJWOXptOCAwaC0ydjJoMlY5ek05IDloMnYySDlWOXpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpQ2hlY2tDaXJjbGUgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTEwIDE4YTggOCAwIDEwMC0xNiA4IDggMCAwMDAgMTZ6bTMuNzA3LTkuMjkzYTEgMSAwIDAwLTEuNDE0LTEuNDE0TDkgMTAuNTg2IDcuNzA3IDkuMjkzYTEgMSAwIDAwLTEuNDE0IDEuNDE0bDIgMmExIDEgMCAwMDEuNDE0IDBsNC00elwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlDaGVjayAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMTYuNzA3IDUuMjkzYTEgMSAwIDAxMCAxLjQxNGwtOCA4YTEgMSAwIDAxLTEuNDE0IDBsLTQtNGExIDEgMCAwMTEuNDE0LTEuNDE0TDggMTIuNTg2bDcuMjkzLTcuMjkzYTEgMSAwIDAxMS40MTQgMHpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpQ2hldnJvbkRvdWJsZURvd24gKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTE1LjcwNyA0LjI5M2ExIDEgMCAwMTAgMS40MTRsLTUgNWExIDEgMCAwMS0xLjQxNCAwbC01LTVhMSAxIDAgMDExLjQxNC0xLjQxNEwxMCA4LjU4Nmw0LjI5My00LjI5M2ExIDEgMCAwMTEuNDE0IDB6bTAgNmExIDEgMCAwMTAgMS40MTRsLTUgNWExIDEgMCAwMS0xLjQxNCAwbC01LTVhMSAxIDAgMTExLjQxNC0xLjQxNEwxMCAxNC41ODZsNC4yOTMtNC4yOTNhMSAxIDAgMDExLjQxNCAwelwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlDaGV2cm9uRG91YmxlTGVmdCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMTUuNzA3IDE1LjcwN2ExIDEgMCAwMS0xLjQxNCAwbC01LTVhMSAxIDAgMDEwLTEuNDE0bDUtNWExIDEgMCAxMTEuNDE0IDEuNDE0TDExLjQxNCAxMGw0LjI5MyA0LjI5M2ExIDEgMCAwMTAgMS40MTR6bS02IDBhMSAxIDAgMDEtMS40MTQgMGwtNS01YTEgMSAwIDAxMC0xLjQxNGw1LTVhMSAxIDAgMDExLjQxNCAxLjQxNEw1LjQxNCAxMGw0LjI5MyA0LjI5M2ExIDEgMCAwMTAgMS40MTR6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaUNoZXZyb25Eb3VibGVSaWdodCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMTAuMjkzIDE1LjcwN2ExIDEgMCAwMTAtMS40MTRMMTQuNTg2IDEwbC00LjI5My00LjI5M2ExIDEgMCAxMTEuNDE0LTEuNDE0bDUgNWExIDEgMCAwMTAgMS40MTRsLTUgNWExIDEgMCAwMS0xLjQxNCAwelwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19LHtcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNNC4yOTMgMTUuNzA3YTEgMSAwIDAxMC0xLjQxNEw4LjU4NiAxMCA0LjI5MyA1LjcwN2ExIDEgMCAwMTEuNDE0LTEuNDE0bDUgNWExIDEgMCAwMTAgMS40MTRsLTUgNWExIDEgMCAwMS0xLjQxNCAwelwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlDaGV2cm9uRG91YmxlVXAgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTQuMjkzIDE1LjcwN2ExIDEgMCAwMTAtMS40MTRsNS01YTEgMSAwIDAxMS40MTQgMGw1IDVhMSAxIDAgMDEtMS40MTQgMS40MTRMMTAgMTEuNDE0bC00LjI5MyA0LjI5M2ExIDEgMCAwMS0xLjQxNCAwem0wLTZhMSAxIDAgMDEwLTEuNDE0bDUtNWExIDEgMCAwMTEuNDE0IDBsNSA1YTEgMSAwIDAxLTEuNDE0IDEuNDE0TDEwIDUuNDE0IDUuNzA3IDkuNzA3YTEgMSAwIDAxLTEuNDE0IDB6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaUNoZXZyb25Eb3duIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk01LjI5MyA3LjI5M2ExIDEgMCAwMTEuNDE0IDBMMTAgMTAuNTg2bDMuMjkzLTMuMjkzYTEgMSAwIDExMS40MTQgMS40MTRsLTQgNGExIDEgMCAwMS0xLjQxNCAwbC00LTRhMSAxIDAgMDEwLTEuNDE0elwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlDaGV2cm9uTGVmdCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMTIuNzA3IDUuMjkzYTEgMSAwIDAxMCAxLjQxNEw5LjQxNCAxMGwzLjI5MyAzLjI5M2ExIDEgMCAwMS0xLjQxNCAxLjQxNGwtNC00YTEgMSAwIDAxMC0xLjQxNGw0LTRhMSAxIDAgMDExLjQxNCAwelwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlDaGV2cm9uUmlnaHQgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTcuMjkzIDE0LjcwN2ExIDEgMCAwMTAtMS40MTRMMTAuNTg2IDEwIDcuMjkzIDYuNzA3YTEgMSAwIDAxMS40MTQtMS40MTRsNCA0YTEgMSAwIDAxMCAxLjQxNGwtNCA0YTEgMSAwIDAxLTEuNDE0IDB6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaUNoZXZyb25VcCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMTQuNzA3IDEyLjcwN2ExIDEgMCAwMS0xLjQxNCAwTDEwIDkuNDE0bC0zLjI5MyAzLjI5M2ExIDEgMCAwMS0xLjQxNC0xLjQxNGw0LTRhMSAxIDAgMDExLjQxNCAwbDQgNGExIDEgMCAwMTAgMS40MTR6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaUNoaXAgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJkXCI6XCJNMTMgN0g3djZoNlY3elwifX0se1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk03IDJhMSAxIDAgMDEyIDB2MWgyVjJhMSAxIDAgMTEyIDB2MWgyYTIgMiAwIDAxMiAydjJoMWExIDEgMCAxMTAgMmgtMXYyaDFhMSAxIDAgMTEwIDJoLTF2MmEyIDIgMCAwMS0yIDJoLTJ2MWExIDEgMCAxMS0yIDB2LTFIOXYxYTEgMSAwIDExLTIgMHYtMUg1YTIgMiAwIDAxLTItMnYtMkgyYTEgMSAwIDExMC0yaDFWOUgyYTEgMSAwIDAxMC0yaDFWNWEyIDIgMCAwMTItMmgyVjJ6TTUgNWgxMHYxMEg1VjV6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaUNsaXBib2FyZENoZWNrIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZFwiOlwiTTkgMmExIDEgMCAwMDAgMmgyYTEgMSAwIDEwMC0ySDl6XCJ9fSx7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTQgNWEyIDIgMCAwMTItMiAzIDMgMCAwMDMgM2gyYTMgMyAwIDAwMy0zIDIgMiAwIDAxMiAydjExYTIgMiAwIDAxLTIgMkg2YTIgMiAwIDAxLTItMlY1em05LjcwNyA1LjcwN2ExIDEgMCAwMC0xLjQxNC0xLjQxNEw5IDEyLjU4NmwtMS4yOTMtMS4yOTNhMSAxIDAgMDAtMS40MTQgMS40MTRsMiAyYTEgMSAwIDAwMS40MTQgMGw0LTR6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaUNsaXBib2FyZENvcHkgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJkXCI6XCJNOCAyYTEgMSAwIDAwMCAyaDJhMSAxIDAgMTAwLTJIOHpcIn19LHtcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImRcIjpcIk0zIDVhMiAyIDAgMDEyLTIgMyAzIDAgMDAzIDNoMmEzIDMgMCAwMDMtMyAyIDIgMCAwMTIgMnY2aC00LjU4NmwxLjI5My0xLjI5M2ExIDEgMCAwMC0xLjQxNC0xLjQxNGwtMyAzYTEgMSAwIDAwMCAxLjQxNGwzIDNhMSAxIDAgMDAxLjQxNC0xLjQxNEwxMC40MTQgMTNIMTV2M2EyIDIgMCAwMS0yIDJINWEyIDIgMCAwMS0yLTJWNXpNMTUgMTFoMmExIDEgMCAxMTAgMmgtMnYtMnpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlDbGlwYm9hcmRMaXN0IChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZFwiOlwiTTkgMmExIDEgMCAwMDAgMmgyYTEgMSAwIDEwMC0ySDl6XCJ9fSx7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTQgNWEyIDIgMCAwMTItMiAzIDMgMCAwMDMgM2gyYTMgMyAwIDAwMy0zIDIgMiAwIDAxMiAydjExYTIgMiAwIDAxLTIgMkg2YTIgMiAwIDAxLTItMlY1em0zIDRhMSAxIDAgMDAwIDJoLjAxYTEgMSAwIDEwMC0ySDd6bTMgMGExIDEgMCAwMDAgMmgzYTEgMSAwIDEwMC0yaC0zem0tMyA0YTEgMSAwIDEwMCAyaC4wMWExIDEgMCAxMDAtMkg3em0zIDBhMSAxIDAgMTAwIDJoM2ExIDEgMCAxMDAtMmgtM3pcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpQ2xpcGJvYXJkIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZFwiOlwiTTggM2ExIDEgMCAwMTEtMWgyYTEgMSAwIDExMCAySDlhMSAxIDAgMDEtMS0xelwifX0se1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZFwiOlwiTTYgM2EyIDIgMCAwMC0yIDJ2MTFhMiAyIDAgMDAyIDJoOGEyIDIgMCAwMDItMlY1YTIgMiAwIDAwLTItMiAzIDMgMCAwMS0zIDNIOWEzIDMgMCAwMS0zLTN6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpQ2xvY2sgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTEwIDE4YTggOCAwIDEwMC0xNiA4IDggMCAwMDAgMTZ6bTEtMTJhMSAxIDAgMTAtMiAwdjRhMSAxIDAgMDAuMjkzLjcwN2wyLjgyOCAyLjgyOWExIDEgMCAxMDEuNDE1LTEuNDE1TDExIDkuNTg2VjZ6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaUNsb3VkRG93bmxvYWQgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTIgOS41QTMuNSAzLjUgMCAwMDUuNSAxM0g5djIuNTg2bC0xLjI5My0xLjI5M2ExIDEgMCAwMC0xLjQxNCAxLjQxNGwzIDNhMSAxIDAgMDAxLjQxNCAwbDMtM2ExIDEgMCAwMC0xLjQxNC0xLjQxNEwxMSAxNS41ODZWMTNoMi41YTQuNSA0LjUgMCAxMC0uNjE2LTguOTU4IDQuMDAyIDQuMDAyIDAgMTAtNy43NTMgMS45NzdBMy41IDMuNSAwIDAwMiA5LjV6bTkgMy41SDlWOGExIDEgMCAwMTIgMHY1elwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlDbG91ZFVwbG9hZCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImRcIjpcIk01LjUgMTNhMy41IDMuNSAwIDAxLS4zNjktNi45OCA0IDQgMCAxMTcuNzUzLTEuOTc3QTQuNSA0LjUgMCAxMTEzLjUgMTNIMTFWOS40MTNsMS4yOTMgMS4yOTNhMSAxIDAgMDAxLjQxNC0xLjQxNGwtMy0zYTEgMSAwIDAwLTEuNDE0IDBsLTMgM2ExIDEgMCAwMDEuNDE0IDEuNDE0TDkgOS40MTRWMTNINS41elwifX0se1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZFwiOlwiTTkgMTNoMnY1YTEgMSAwIDExLTIgMHYtNXpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlDbG91ZCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImRcIjpcIk01LjUgMTZhMy41IDMuNSAwIDAxLS4zNjktNi45OCA0IDQgMCAxMTcuNzUzLTEuOTc3QTQuNSA0LjUgMCAxMTEzLjUgMTZoLTh6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpQ29kZSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMTIuMzE2IDMuMDUxYTEgMSAwIDAxLjYzMyAxLjI2NWwtNCAxMmExIDEgMCAxMS0xLjg5OC0uNjMybDQtMTJhMSAxIDAgMDExLjI2NS0uNjMzek01LjcwNyA2LjI5M2ExIDEgMCAwMTAgMS40MTRMMy40MTQgMTBsMi4yOTMgMi4yOTNhMSAxIDAgMTEtMS40MTQgMS40MTRsLTMtM2ExIDEgMCAwMTAtMS40MTRsMy0zYTEgMSAwIDAxMS40MTQgMHptOC41ODYgMGExIDEgMCAwMTEuNDE0IDBsMyAzYTEgMSAwIDAxMCAxLjQxNGwtMyAzYTEgMSAwIDExLTEuNDE0LTEuNDE0TDE2LjU4NiAxMGwtMi4yOTMtMi4yOTNhMSAxIDAgMDEwLTEuNDE0elwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlDb2cgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTExLjQ5IDMuMTdjLS4zOC0xLjU2LTIuNi0xLjU2LTIuOTggMGExLjUzMiAxLjUzMiAwIDAxLTIuMjg2Ljk0OGMtMS4zNzItLjgzNi0yLjk0Mi43MzQtMi4xMDYgMi4xMDYuNTQuODg2LjA2MSAyLjA0Mi0uOTQ3IDIuMjg3LTEuNTYxLjM3OS0xLjU2MSAyLjYgMCAyLjk3OGExLjUzMiAxLjUzMiAwIDAxLjk0NyAyLjI4N2MtLjgzNiAxLjM3Mi43MzQgMi45NDIgMi4xMDYgMi4xMDZhMS41MzIgMS41MzIgMCAwMTIuMjg3Ljk0N2MuMzc5IDEuNTYxIDIuNiAxLjU2MSAyLjk3OCAwYTEuNTMzIDEuNTMzIDAgMDEyLjI4Ny0uOTQ3YzEuMzcyLjgzNiAyLjk0Mi0uNzM0IDIuMTA2LTIuMTA2YTEuNTMzIDEuNTMzIDAgMDEuOTQ3LTIuMjg3YzEuNTYxLS4zNzkgMS41NjEtMi42IDAtMi45NzhhMS41MzIgMS41MzIgMCAwMS0uOTQ3LTIuMjg3Yy44MzYtMS4zNzItLjczNC0yLjk0Mi0yLjEwNi0yLjEwNmExLjUzMiAxLjUzMiAwIDAxLTIuMjg3LS45NDd6TTEwIDEzYTMgMyAwIDEwMC02IDMgMyAwIDAwMCA2elwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlDb2xsZWN0aW9uIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZFwiOlwiTTcgM2ExIDEgMCAwMDAgMmg2YTEgMSAwIDEwMC0ySDd6TTQgN2ExIDEgMCAwMTEtMWgxMGExIDEgMCAxMTAgMkg1YTEgMSAwIDAxLTEtMXpNMiAxMWEyIDIgMCAwMTItMmgxMmEyIDIgMCAwMTIgMnY0YTIgMiAwIDAxLTIgMkg0YTIgMiAwIDAxLTItMnYtNHpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlDb2xvclN3YXRjaCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNNCAyYTIgMiAwIDAwLTIgMnYxMWEzIDMgMCAxMDYgMFY0YTIgMiAwIDAwLTItMkg0em0xIDE0YTEgMSAwIDEwMC0yIDEgMSAwIDAwMCAyem01LTEuNzU3bDQuOS00LjlhMiAyIDAgMDAwLTIuODI4TDEzLjQ4NSA1LjFhMiAyIDAgMDAtMi44MjggMEwxMCA1Ljc1N3Y4LjQ4NnpNMTYgMThIOS4wNzFsNi02SDE2YTIgMiAwIDAxMiAydjJhMiAyIDAgMDEtMiAyelwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlDcmVkaXRDYXJkIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZFwiOlwiTTQgNGEyIDIgMCAwMC0yIDJ2MWgxNlY2YTIgMiAwIDAwLTItMkg0elwifX0se1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0xOCA5SDJ2NWEyIDIgMCAwMDIgMmgxMmEyIDIgMCAwMDItMlY5ek00IDEzYTEgMSAwIDAxMS0xaDFhMSAxIDAgMTEwIDJINWExIDEgMCAwMS0xLTF6bTUtMWExIDEgMCAxMDAgMmgxYTEgMSAwIDEwMC0ySDl6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaUN1YmVUcmFuc3BhcmVudCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNOS41MDQgMS4xMzJhMSAxIDAgMDEuOTkyIDBsMS43NSAxYTEgMSAwIDExLS45OTIgMS43MzZMMTAgMy4xNTJsLTEuMjU0LjcxNmExIDEgMCAxMS0uOTkyLTEuNzM2bDEuNzUtMXpNNS42MTggNC41MDRhMSAxIDAgMDEtLjM3MiAxLjM2NEw1LjAxNiA2bC4yMy4xMzJhMSAxIDAgMTEtLjk5MiAxLjczNkw0IDcuNzIzVjhhMSAxIDAgMDEtMiAwVjZhLjk5Ni45OTYgMCAwMS41Mi0uODc4bDEuNzM0LS45OWExIDEgMCAwMTEuMzY0LjM3MnptOC43NjQgMGExIDEgMCAwMTEuMzY0LS4zNzJsMS43MzMuOTlBMS4wMDIgMS4wMDIgMCAwMTE4IDZ2MmExIDEgMCAxMS0yIDB2LS4yNzdsLS4yNTQuMTQ1YTEgMSAwIDExLS45OTItMS43MzZsLjIzLS4xMzItLjIzLS4xMzJhMSAxIDAgMDEtLjM3Mi0xLjM2NHptLTcgNGExIDEgMCAwMTEuMzY0LS4zNzJMMTAgOC44NDhsMS4yNTQtLjcxNmExIDEgMCAxMS45OTIgMS43MzZMMTEgMTAuNThWMTJhMSAxIDAgMTEtMiAwdi0xLjQybC0xLjI0Ni0uNzEyYTEgMSAwIDAxLS4zNzItMS4zNjR6TTMgMTFhMSAxIDAgMDExIDF2MS40MmwxLjI0Ni43MTJhMSAxIDAgMTEtLjk5MiAxLjczNmwtMS43NS0xQTEgMSAwIDAxMiAxNHYtMmExIDEgMCAwMTEtMXptMTQgMGExIDEgMCAwMTEgMXYyYTEgMSAwIDAxLS41MDQuODY4bC0xLjc1IDFhMSAxIDAgMTEtLjk5Mi0xLjczNkwxNiAxMy40MlYxMmExIDEgMCAwMTEtMXptLTkuNjE4IDUuNTA0YTEgMSAwIDAxMS4zNjQtLjM3MmwuMjU0LjE0NVYxNmExIDEgMCAxMTIgMHYuMjc3bC4yNTQtLjE0NWExIDEgMCAxMS45OTIgMS43MzZsLTEuNzM1Ljk5MmEuOTk1Ljk5NSAwIDAxLTEuMDIyIDBsLTEuNzM1LS45OTJhMSAxIDAgMDEtLjM3Mi0xLjM2NHpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpQ3ViZSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImRcIjpcIk0xMSAxN2ExIDEgMCAwMDEuNDQ3Ljg5NGw0LTJBMSAxIDAgMDAxNyAxNVY5LjIzNmExIDEgMCAwMC0xLjQ0Ny0uODk0bC00IDJhMSAxIDAgMDAtLjU1My44OTRWMTd6TTE1LjIxMSA2LjI3NmExIDEgMCAwMDAtMS43ODhsLTQuNzY0LTIuMzgyYTEgMSAwIDAwLS44OTQgMEw0Ljc4OSA0LjQ4OGExIDEgMCAwMDAgMS43ODhsNC43NjQgMi4zODJhMSAxIDAgMDAuODk0IDBsNC43NjQtMi4zODJ6TTQuNDQ3IDguMzQyQTEgMSAwIDAwMyA5LjIzNlYxNWExIDEgMCAwMC41NTMuODk0bDQgMkExIDEgMCAwMDkgMTd2LTUuNzY0YTEgMSAwIDAwLS41NTMtLjg5NGwtNC0yelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaUN1cnJlbmN5QmFuZ2xhZGVzaGkgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTEwIDE4YTggOCAwIDEwMC0xNiA4IDggMCAwMDAgMTZ6TTcgNGExIDEgMCAwMDAgMiAxIDEgMCAwMTEgMXYxSDdhMSAxIDAgMDAwIDJoMXYzYTMgMyAwIDEwNiAwdi0xYTEgMSAwIDEwLTIgMHYxYTEgMSAwIDExLTIgMHYtM2gzYTEgMSAwIDEwMC0yaC0zVjdhMyAzIDAgMDAtMy0zelwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlDdXJyZW5jeURvbGxhciAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImRcIjpcIk04LjQzMyA3LjQxOGMuMTU1LS4xMDMuMzQ2LS4xOTYuNTY3LS4yNjd2MS42OThhMi4zMDUgMi4zMDUgMCAwMS0uNTY3LS4yNjdDOC4wNyA4LjM0IDggOC4xMTQgOCA4YzAtLjExNC4wNy0uMzQuNDMzLS41ODJ6TTExIDEyLjg0OXYtMS42OThjLjIyLjA3MS40MTIuMTY0LjU2Ny4yNjcuMzY0LjI0My40MzMuNDY4LjQzMy41ODIgMCAuMTE0LS4wNy4zNC0uNDMzLjU4MmEyLjMwNSAyLjMwNSAwIDAxLS41NjcuMjY3elwifX0se1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0xMCAxOGE4IDggMCAxMDAtMTYgOCA4IDAgMDAwIDE2em0xLTEzYTEgMSAwIDEwLTIgMHYuMDkyYTQuNTM1IDQuNTM1IDAgMDAtMS42NzYuNjYyQzYuNjAyIDYuMjM0IDYgNy4wMDkgNiA4YzAgLjk5LjYwMiAxLjc2NSAxLjMyNCAyLjI0Ni40OC4zMiAxLjA1NC41NDUgMS42NzYuNjYydjEuOTQxYy0uMzkxLS4xMjctLjY4LS4zMTctLjg0My0uNTA0YTEgMSAwIDEwLTEuNTEgMS4zMWMuNTYyLjY0OSAxLjQxMyAxLjA3NiAyLjM1MyAxLjI1M1YxNWExIDEgMCAxMDIgMHYtLjA5MmE0LjUzNSA0LjUzNSAwIDAwMS42NzYtLjY2MkMxMy4zOTggMTMuNzY2IDE0IDEyLjk5MSAxNCAxMmMwLS45OS0uNjAyLTEuNzY1LTEuMzI0LTIuMjQ2QTQuNTM1IDQuNTM1IDAgMDAxMSA5LjA5MlY3LjE1MWMuMzkxLjEyNy42OC4zMTcuODQzLjUwNGExIDEgMCAxMDEuNTExLTEuMzFjLS41NjMtLjY0OS0xLjQxMy0xLjA3Ni0yLjM1NC0xLjI1M1Y1elwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlDdXJyZW5jeUV1cm8gKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTEwIDE4YTggOCAwIDEwMC0xNiA4IDggMCAwMDAgMTZ6TTguNzM2IDYuOTc5QzkuMjA4IDYuMTkzIDkuNjk2IDYgMTAgNmMuMzA0IDAgLjc5Mi4xOTMgMS4yNjQuOTc5YTEgMSAwIDAwMS43MTUtMS4wMjlDMTIuMjc5IDQuNzg0IDExLjIzMiA0IDEwIDRzLTIuMjc5Ljc4NC0yLjk3OSAxLjk1Yy0uMjg1LjQ3NS0uNTA3IDEtLjY3IDEuNTVINmExIDEgMCAwMDAgMmguMDEzYTkuMzU4IDkuMzU4IDAgMDAwIDFINmExIDEgMCAxMDAgMmguMzUxYy4xNjMuNTUuMzg1IDEuMDc1LjY3IDEuNTVDNy43MjEgMTUuMjE2IDguNzY4IDE2IDEwIDE2czIuMjc5LS43ODQgMi45NzktMS45NWExIDEgMCAxMC0xLjcxNS0xLjAyOWMtLjQ3Mi43ODYtLjk2Ljk3OS0xLjI2NC45NzktLjMwNCAwLS43OTItLjE5My0xLjI2NC0uOTc5YTQuMjY1IDQuMjY1IDAgMDEtLjI2NC0uNTIxSDEwYTEgMSAwIDEwMC0ySDguMDE3YTcuMzYgNy4zNiAwIDAxMC0xSDEwYTEgMSAwIDEwMC0ySDguNDcyYy4wOC0uMTg1LjE2Ny0uMzYuMjY0LS41MjF6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaUN1cnJlbmN5UG91bmQgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTEwIDE4YTggOCAwIDEwMC0xNiA4IDggMCAwMDAgMTZ6bTEtMTRhMyAzIDAgMDAtMyAzdjJIN2ExIDEgMCAwMDAgMmgxdjFhMSAxIDAgMDEtMSAxIDEgMSAwIDEwMCAyaDZhMSAxIDAgMTAwLTJIOS44M2MuMTEtLjMxMy4xNy0uNjUuMTctMXYtMWgxYTEgMSAwIDEwMC0yaC0xVjdhMSAxIDAgMTEyIDAgMSAxIDAgMTAyIDAgMyAzIDAgMDAtMy0zelwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlDdXJyZW5jeVJ1cGVlIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0xMCAxOGE4IDggMCAxMDAtMTYgOCA4IDAgMDAwIDE2ek03IDVhMSAxIDAgMTAwIDJoMWEyIDIgMCAwMTEuNzMyIDFIN2ExIDEgMCAxMDAgMmgyLjczMkEyIDIgMCAwMTggMTFIN2ExIDEgMCAwMC0uNzA3IDEuNzA3bDMgM2ExIDEgMCAwMDEuNDE0LTEuNDE0bC0xLjQ4My0xLjQ4NEE0LjAwOCA0LjAwOCAwIDAwMTEuODc0IDEwSDEzYTEgMSAwIDEwMC0yaC0xLjEyNmEzLjk3NiAzLjk3NiAwIDAwLS40MS0xSDEzYTEgMSAwIDEwMC0ySDd6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaUN1cnJlbmN5WWVuIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0xMCAxOGE4IDggMCAxMDAtMTYgOCA4IDAgMDAwIDE2ek03Ljg1OCA1LjQ4NWExIDEgMCAwMC0xLjcxNSAxLjAzTDcuNjMzIDlIN2ExIDEgMCAxMDAgMmgxLjgzNGwuMTY2LjI3N1YxMkg3YTEgMSAwIDEwMCAyaDJ2MWExIDEgMCAxMDIgMHYtMWgyYTEgMSAwIDEwMC0yaC0ydi0uNzIzbC4xNjYtLjI3N0gxM2ExIDEgMCAxMDAtMmgtLjYzNGwxLjQ5Mi0yLjQ4NmExIDEgMCAxMC0xLjcxNi0xLjAyOUwxMC4wMzQgOWgtLjA2OEw3Ljg1OCA1LjQ4NXpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpQ3Vyc29yQ2xpY2sgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTYuNjcyIDEuOTExYTEgMSAwIDEwLTEuOTMyLjUxOGwuMjU5Ljk2NmExIDEgMCAwMDEuOTMyLS41MThsLS4yNi0uOTY2ek0yLjQyOSA0Ljc0YTEgMSAwIDEwLS41MTcgMS45MzJsLjk2Ni4yNTlhMSAxIDAgMDAuNTE3LTEuOTMybC0uOTY2LS4yNnptOC44MTQtLjU2OWExIDEgMCAwMC0xLjQxNS0xLjQxNGwtLjcwNy43MDdhMSAxIDAgMTAxLjQxNSAxLjQxNWwuNzA3LS43MDh6bS03LjA3MSA3LjA3MmwuNzA3LS43MDdBMSAxIDAgMDAzLjQ2NSA5LjEybC0uNzA4LjcwN2ExIDEgMCAwMDEuNDE1IDEuNDE1em0zLjItNS4xNzFhMSAxIDAgMDAtMS4zIDEuM2w0IDEwYTEgMSAwIDAwMS44MjMuMDc1bDEuMzgtMi43NTkgMy4wMTggMy4wMmExIDEgMCAwMDEuNDE0LTEuNDE1bC0zLjAxOS0zLjAyIDIuNzYtMS4zNzlhMSAxIDAgMDAtLjA3Ni0xLjgyMmwtMTAtNHpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpRGF0YWJhc2UgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJkXCI6XCJNMyAxMnYzYzAgMS42NTcgMy4xMzQgMyA3IDNzNy0xLjM0MyA3LTN2LTNjMCAxLjY1Ny0zLjEzNCAzLTcgM3MtNy0xLjM0My03LTN6XCJ9fSx7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJkXCI6XCJNMyA3djNjMCAxLjY1NyAzLjEzNCAzIDcgM3M3LTEuMzQzIDctM1Y3YzAgMS42NTctMy4xMzQgMy03IDNTMyA4LjY1NyAzIDd6XCJ9fSx7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJkXCI6XCJNMTcgNWMwIDEuNjU3LTMuMTM0IDMtNyAzUzMgNi42NTcgMyA1czMuMTM0LTMgNy0zIDcgMS4zNDMgNyAzelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaURlc2t0b3BDb21wdXRlciAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMyA1YTIgMiAwIDAxMi0yaDEwYTIgMiAwIDAxMiAydjhhMiAyIDAgMDEtMiAyaC0yLjIybC4xMjMuNDg5LjgwNC44MDRBMSAxIDAgMDExMyAxOEg3YTEgMSAwIDAxLS43MDctMS43MDdsLjgwNC0uODA0TDcuMjIgMTVINWEyIDIgMCAwMS0yLTJWNXptNS43NzEgN0g1VjVoMTB2N0g4Ljc3MXpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpRGV2aWNlTW9iaWxlIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk03IDJhMiAyIDAgMDAtMiAydjEyYTIgMiAwIDAwMiAyaDZhMiAyIDAgMDAyLTJWNGEyIDIgMCAwMC0yLTJIN3ptMyAxNGExIDEgMCAxMDAtMiAxIDEgMCAwMDAgMnpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpRGV2aWNlVGFibGV0IChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk02IDJhMiAyIDAgMDAtMiAydjEyYTIgMiAwIDAwMiAyaDhhMiAyIDAgMDAyLTJWNGEyIDIgMCAwMC0yLTJINnptNCAxNGExIDEgMCAxMDAtMiAxIDEgMCAwMDAgMnpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpRG9jdW1lbnRBZGQgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTYgMmEyIDIgMCAwMC0yIDJ2MTJhMiAyIDAgMDAyIDJoOGEyIDIgMCAwMDItMlY3LjQxNEEyIDIgMCAwMDE1LjQxNCA2TDEyIDIuNTg2QTIgMiAwIDAwMTAuNTg2IDJINnptNSA2YTEgMSAwIDEwLTIgMHYySDdhMSAxIDAgMTAwIDJoMnYyYTEgMSAwIDEwMiAwdi0yaDJhMSAxIDAgMTAwLTJoLTJWOHpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpRG9jdW1lbnREb3dubG9hZCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNNiAyYTIgMiAwIDAwLTIgMnYxMmEyIDIgMCAwMDIgMmg4YTIgMiAwIDAwMi0yVjcuNDE0QTIgMiAwIDAwMTUuNDE0IDZMMTIgMi41ODZBMiAyIDAgMDAxMC41ODYgMkg2em01IDZhMSAxIDAgMTAtMiAwdjMuNTg2bC0xLjI5My0xLjI5M2ExIDEgMCAxMC0xLjQxNCAxLjQxNGwzIDNhMSAxIDAgMDAxLjQxNCAwbDMtM2ExIDEgMCAwMC0xLjQxNC0xLjQxNEwxMSAxMS41ODZWOHpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpRG9jdW1lbnREdXBsaWNhdGUgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJkXCI6XCJNOSAyYTIgMiAwIDAwLTIgMnY4YTIgMiAwIDAwMiAyaDZhMiAyIDAgMDAyLTJWNi40MTRBMiAyIDAgMDAxNi40MTQgNUwxNCAyLjU4NkEyIDIgMCAwMDEyLjU4NiAySDl6XCJ9fSx7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJkXCI6XCJNMyA4YTIgMiAwIDAxMi0ydjEwaDhhMiAyIDAgMDEtMiAySDVhMiAyIDAgMDEtMi0yVjh6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpRG9jdW1lbnRSZW1vdmUgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTYgMmEyIDIgMCAwMC0yIDJ2MTJhMiAyIDAgMDAyIDJoOGEyIDIgMCAwMDItMlY3LjQxNEEyIDIgMCAwMDE1LjQxNCA2TDEyIDIuNTg2QTIgMiAwIDAwMTAuNTg2IDJINnptMSA4YTEgMSAwIDEwMCAyaDZhMSAxIDAgMTAwLTJIN3pcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpRG9jdW1lbnRSZXBvcnQgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTYgMmEyIDIgMCAwMC0yIDJ2MTJhMiAyIDAgMDAyIDJoOGEyIDIgMCAwMDItMlY3LjQxNEEyIDIgMCAwMDE1LjQxNCA2TDEyIDIuNTg2QTIgMiAwIDAwMTAuNTg2IDJINnptMiAxMGExIDEgMCAxMC0yIDB2M2ExIDEgMCAxMDIgMHYtM3ptMi0zYTEgMSAwIDAxMSAxdjVhMSAxIDAgMTEtMiAwdi01YTEgMSAwIDAxMS0xem00LTFhMSAxIDAgMTAtMiAwdjdhMSAxIDAgMTAyIDBWOHpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpRG9jdW1lbnRTZWFyY2ggKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJkXCI6XCJNNCA0YTIgMiAwIDAxMi0yaDQuNTg2QTIgMiAwIDAxMTIgMi41ODZMMTUuNDE0IDZBMiAyIDAgMDExNiA3LjQxNFYxNmEyIDIgMCAwMS0yIDJoLTEuNTI4QTYgNiAwIDAwNCA5LjUyOFY0elwifX0se1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk04IDEwYTQgNCAwIDAwLTMuNDQ2IDYuMDMybC0xLjI2MSAxLjI2YTEgMSAwIDEwMS40MTQgMS40MTVsMS4yNjEtMS4yNjFBNCA0IDAgMTA4IDEwem0tMiA0YTIgMiAwIDExNCAwIDIgMiAwIDAxLTQgMHpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpRG9jdW1lbnRUZXh0IChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk00IDRhMiAyIDAgMDEyLTJoNC41ODZBMiAyIDAgMDExMiAyLjU4NkwxNS40MTQgNkEyIDIgMCAwMTE2IDcuNDE0VjE2YTIgMiAwIDAxLTIgMkg2YTIgMiAwIDAxLTItMlY0em0yIDZhMSAxIDAgMDExLTFoNmExIDEgMCAxMTAgMkg3YTEgMSAwIDAxLTEtMXptMSAzYTEgMSAwIDEwMCAyaDZhMSAxIDAgMTAwLTJIN3pcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpRG9jdW1lbnQgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTQgNGEyIDIgMCAwMTItMmg0LjU4NkEyIDIgMCAwMTEyIDIuNTg2TDE1LjQxNCA2QTIgMiAwIDAxMTYgNy40MTRWMTZhMiAyIDAgMDEtMiAySDZhMiAyIDAgMDEtMi0yVjR6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaURvdHNDaXJjbGVIb3Jpem9udGFsIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0xMCAxOGE4IDggMCAxMDAtMTYgOCA4IDAgMDAwIDE2ek03IDlINXYyaDJWOXptOCAwaC0ydjJoMlY5ek05IDloMnYySDlWOXpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpRG90c0hvcml6b250YWwgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJkXCI6XCJNNiAxMGEyIDIgMCAxMS00IDAgMiAyIDAgMDE0IDB6TTEyIDEwYTIgMiAwIDExLTQgMCAyIDIgMCAwMTQgMHpNMTYgMTJhMiAyIDAgMTAwLTQgMiAyIDAgMDAwIDR6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpRG90c1ZlcnRpY2FsIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZFwiOlwiTTEwIDZhMiAyIDAgMTEwLTQgMiAyIDAgMDEwIDR6TTEwIDEyYTIgMiAwIDExMC00IDIgMiAwIDAxMCA0ek0xMCAxOGEyIDIgMCAxMTAtNCAyIDIgMCAwMTAgNHpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlEb3dubG9hZCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMyAxN2ExIDEgMCAwMTEtMWgxMmExIDEgMCAxMTAgMkg0YTEgMSAwIDAxLTEtMXptMy4yOTMtNy43MDdhMSAxIDAgMDExLjQxNCAwTDkgMTAuNTg2VjNhMSAxIDAgMTEyIDB2Ny41ODZsMS4yOTMtMS4yOTNhMSAxIDAgMTExLjQxNCAxLjQxNGwtMyAzYTEgMSAwIDAxLTEuNDE0IDBsLTMtM2ExIDEgMCAwMTAtMS40MTR6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaUR1cGxpY2F0ZSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImRcIjpcIk03IDlhMiAyIDAgMDEyLTJoNmEyIDIgMCAwMTIgMnY2YTIgMiAwIDAxLTIgMkg5YTIgMiAwIDAxLTItMlY5elwifX0se1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZFwiOlwiTTUgM2EyIDIgMCAwMC0yIDJ2NmEyIDIgMCAwMDIgMlY1aDhhMiAyIDAgMDAtMi0ySDV6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpRW1vamlIYXBweSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMTAgMThhOCA4IDAgMTAwLTE2IDggOCAwIDAwMCAxNnpNNyA5YTEgMSAwIDEwMC0yIDEgMSAwIDAwMCAyem03LTFhMSAxIDAgMTEtMiAwIDEgMSAwIDAxMiAwem0tLjQ2NCA1LjUzNWExIDEgMCAxMC0xLjQxNS0xLjQxNCAzIDMgMCAwMS00LjI0MiAwIDEgMSAwIDAwLTEuNDE1IDEuNDE0IDUgNSAwIDAwNy4wNzIgMHpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpRW1vamlTYWQgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTEwIDE4YTggOCAwIDEwMC0xNiA4IDggMCAwMDAgMTZ6TTcgOWExIDEgMCAxMDAtMiAxIDEgMCAwMDAgMnptNy0xYTEgMSAwIDExLTIgMCAxIDEgMCAwMTIgMHptLTcuNTM2IDUuODc5YTEgMSAwIDAwMS40MTUgMCAzIDMgMCAwMTQuMjQyIDAgMSAxIDAgMDAxLjQxNS0xLjQxNSA1IDUgMCAwMC03LjA3MiAwIDEgMSAwIDAwMCAxLjQxNXpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpRXhjbGFtYXRpb25DaXJjbGUgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTE4IDEwYTggOCAwIDExLTE2IDAgOCA4IDAgMDExNiAwem0tNyA0YTEgMSAwIDExLTIgMCAxIDEgMCAwMTIgMHptLTEtOWExIDEgMCAwMC0xIDF2NGExIDEgMCAxMDIgMFY2YTEgMSAwIDAwLTEtMXpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpRXhjbGFtYXRpb24gKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTguMjU3IDMuMDk5Yy43NjUtMS4zNiAyLjcyMi0xLjM2IDMuNDg2IDBsNS41OCA5LjkyYy43NSAxLjMzNC0uMjEzIDIuOTgtMS43NDIgMi45OEg0LjQyYy0xLjUzIDAtMi40OTMtMS42NDYtMS43NDMtMi45OGw1LjU4LTkuOTJ6TTExIDEzYTEgMSAwIDExLTIgMCAxIDEgMCAwMTIgMHptLTEtOGExIDEgMCAwMC0xIDF2M2ExIDEgMCAwMDIgMFY2YTEgMSAwIDAwLTEtMXpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpRXh0ZXJuYWxMaW5rIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZFwiOlwiTTExIDNhMSAxIDAgMTAwIDJoMi41ODZsLTYuMjkzIDYuMjkzYTEgMSAwIDEwMS40MTQgMS40MTRMMTUgNi40MTRWOWExIDEgMCAxMDIgMFY0YTEgMSAwIDAwLTEtMWgtNXpcIn19LHtcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImRcIjpcIk01IDVhMiAyIDAgMDAtMiAydjhhMiAyIDAgMDAyIDJoOGEyIDIgMCAwMDItMnYtM2ExIDEgMCAxMC0yIDB2M0g1VjdoM2ExIDEgMCAwMDAtMkg1elwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaUV5ZU9mZiAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMy43MDcgMi4yOTNhMSAxIDAgMDAtMS40MTQgMS40MTRsMTQgMTRhMSAxIDAgMDAxLjQxNC0xLjQxNGwtMS40NzMtMS40NzNBMTAuMDE0IDEwLjAxNCAwIDAwMTkuNTQyIDEwQzE4LjI2OCA1Ljk0MyAxNC40NzggMyAxMCAzYTkuOTU4IDkuOTU4IDAgMDAtNC41MTIgMS4wNzRsLTEuNzgtMS43ODF6bTQuMjYxIDQuMjZsMS41MTQgMS41MTVhMi4wMDMgMi4wMDMgMCAwMTIuNDUgMi40NWwxLjUxNCAxLjUxNGE0IDQgMCAwMC01LjQ3OC01LjQ3OHpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fSx7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJkXCI6XCJNMTIuNDU0IDE2LjY5N0w5Ljc1IDEzLjk5MmE0IDQgMCAwMS0zLjc0Mi0zLjc0MUwyLjMzNSA2LjU3OEE5Ljk4IDkuOTggMCAwMC40NTggMTBjMS4yNzQgNC4wNTcgNS4wNjUgNyA5LjU0MiA3IC44NDcgMCAxLjY2OS0uMTA1IDIuNDU0LS4zMDN6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpRXllIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZFwiOlwiTTEwIDEyYTIgMiAwIDEwMC00IDIgMiAwIDAwMCA0elwifX0se1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0uNDU4IDEwQzEuNzMyIDUuOTQzIDUuNTIyIDMgMTAgM3M4LjI2OCAyLjk0MyA5LjU0MiA3Yy0xLjI3NCA0LjA1Ny01LjA2NCA3LTkuNTQyIDdTMS43MzIgMTQuMDU3LjQ1OCAxMHpNMTQgMTBhNCA0IDAgMTEtOCAwIDQgNCAwIDAxOCAwelwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlGYXN0Rm9yd2FyZCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImRcIjpcIk00LjU1NSA1LjE2OEExIDEgMCAwMDMgNnY4YTEgMSAwIDAwMS41NTUuODMyTDEwIDExLjIwMlYxNGExIDEgMCAwMDEuNTU1LjgzMmw2LTRhMSAxIDAgMDAwLTEuNjY0bC02LTRBMSAxIDAgMDAxMCA2djIuNzk4bC01LjQ0NS0zLjYzelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaUZpbG0gKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTQgM2EyIDIgMCAwMC0yIDJ2MTBhMiAyIDAgMDAyIDJoMTJhMiAyIDAgMDAyLTJWNWEyIDIgMCAwMC0yLTJINHptMyAyaDZ2NEg3VjV6bTggOHYyaDF2LTJoLTF6bS0yLTJIN3Y0aDZ2LTR6bTIgMGgxVjloLTF2MnptMS00VjVoLTF2Mmgxek01IDV2Mkg0VjVoMXptMCA0SDR2MmgxVjl6bS0xIDRoMXYySDR2LTJ6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaUZpbHRlciAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMyAzYTEgMSAwIDAxMS0xaDEyYTEgMSAwIDAxMSAxdjNhMSAxIDAgMDEtLjI5My43MDdMMTIgMTEuNDE0VjE1YTEgMSAwIDAxLS4yOTMuNzA3bC0yIDJBMSAxIDAgMDE4IDE3di01LjU4NkwzLjI5MyA2LjcwN0ExIDEgMCAwMTMgNlYzelwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlGaW5nZXJQcmludCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNNi42MjUgMi42NTVBOSA5IDAgMDExOSAxMWExIDEgMCAxMS0yIDAgNyA3IDAgMDAtOS42MjUtNi40OTIgMSAxIDAgMTEtLjc1LTEuODUzek00LjY2MiA0Ljk1OUExIDEgMCAwMTQuNzUgNi4zNyA2Ljk3IDYuOTcgMCAwMDMgMTFhMSAxIDAgMTEtMiAwIDguOTcgOC45NyAwIDAxMi4yNS01Ljk1MyAxIDEgMCAwMTEuNDEyLS4wODh6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX0se1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk01IDExYTUgNSAwIDExMTAgMCAxIDEgMCAxMS0yIDAgMyAzIDAgMTAtNiAwYzAgMS42NzctLjM0NSAzLjI3Ni0uOTY4IDQuNzI5YTEgMSAwIDExLTEuODM4LS43ODlBOS45NjQgOS45NjQgMCAwMDUgMTF6bTguOTIxIDIuMDEyYTEgMSAwIDAxLjgzMSAxLjE0NSAxOS44NiAxOS44NiAwIDAxLS41NDUgMi40MzYgMSAxIDAgMTEtMS45Mi0uNTU4Yy4yMDctLjcxMy4zNzEtMS40NDUuNDktMi4xOTJhMSAxIDAgMDExLjE0NC0uODN6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX0se1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0xMCAxMGExIDEgMCAwMTEgMWMwIDIuMjM2LS40NiA0LjM2OC0xLjI5IDYuMzA0YTEgMSAwIDAxLTEuODM4LS43ODlBMTMuOTUyIDEzLjk1MiAwIDAwOSAxMWExIDEgMCAwMTEtMXpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpRmlyZSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMTIuMzk1IDIuNTUzYTEgMSAwIDAwLTEuNDUtLjM4NWMtLjM0NS4yMy0uNjE0LjU1OC0uODIyLjg4LS4yMTQuMzMtLjQwMy43MTMtLjU3IDEuMTE2LS4zMzQuODA0LS42MTQgMS43NjgtLjg0IDIuNzM0YTMxLjM2NSAzMS4zNjUgMCAwMC0uNjEzIDMuNTggMi42NCAyLjY0IDAgMDEtLjk0NS0xLjA2N2MtLjMyOC0uNjgtLjM5OC0xLjUzNC0uMzk4LTIuNjU0QTEgMSAwIDAwNS4wNSA2LjA1IDYuOTgxIDYuOTgxIDAgMDAzIDExYTcgNyAwIDEwMTEuOTUtNC45NWMtLjU5Mi0uNTkxLS45OC0uOTg1LTEuMzQ4LTEuNDY3LS4zNjMtLjQ3Ni0uNzI0LTEuMDYzLTEuMjA3LTIuMDN6TTEyLjEyIDE1LjEyQTMgMyAwIDAxNyAxM3MuODc5LjUgMi41LjVjMC0xIC41LTQgMS4yNS00LjUuNSAxIC43ODYgMS4yOTMgMS4zNzEgMS44NzlBMi45OSAyLjk5IDAgMDExMyAxM2EyLjk5IDIuOTkgMCAwMS0uODc5IDIuMTIxelwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlGbGFnIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0zIDZhMyAzIDAgMDEzLTNoMTBhMSAxIDAgMDEuOCAxLjZMMTQuMjUgOGwyLjU1IDMuNEExIDEgMCAwMTE2IDEzSDZhMSAxIDAgMDAtMSAxdjNhMSAxIDAgMTEtMiAwVjZ6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaUZvbGRlckFkZCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImRcIjpcIk0yIDZhMiAyIDAgMDEyLTJoNWwyIDJoNWEyIDIgMCAwMTIgMnY2YTIgMiAwIDAxLTIgMkg0YTIgMiAwIDAxLTItMlY2elwifX0se1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlXCI6XCIjZmZmXCIsXCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTggMTFoNG0tMi0ydjRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlGb2xkZXJEb3dubG9hZCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImRcIjpcIk0yIDZhMiAyIDAgMDEyLTJoNWwyIDJoNWEyIDIgMCAwMTIgMnY2YTIgMiAwIDAxLTIgMkg0YTIgMiAwIDAxLTItMlY2elwifX0se1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlXCI6XCIjZmZmXCIsXCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTEwIDl2NG0wIDBsLTItMm0yIDJsMi0yXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpRm9sZGVyT3BlbiAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMiA2YTIgMiAwIDAxMi0yaDRsMiAyaDRhMiAyIDAgMDEyIDJ2MUg4YTMgMyAwIDAwLTMgM3YxLjVhMS41IDEuNSAwIDAxLTMgMFY2elwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19LHtcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImRcIjpcIk02IDEyYTIgMiAwIDAxMi0yaDhhMiAyIDAgMDEyIDJ2MmEyIDIgMCAwMS0yIDJIMmgyYTIgMiAwIDAwMi0ydi0yelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaUZvbGRlclJlbW92ZSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImRcIjpcIk0yIDZhMiAyIDAgMDEyLTJoNWwyIDJoNWEyIDIgMCAwMTIgMnY2YTIgMiAwIDAxLTIgMkg0YTIgMiAwIDAxLTItMlY2elwifX0se1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlXCI6XCIjZmZmXCIsXCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTggMTFoNFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaUZvbGRlciAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImRcIjpcIk0yIDZhMiAyIDAgMDEyLTJoNWwyIDJoNWEyIDIgMCAwMTIgMnY2YTIgMiAwIDAxLTIgMkg0YTIgMiAwIDAxLTItMlY2elwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaUdpZnQgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTUgNWEzIDMgMCAwMTUtMi4yMzZBMyAzIDAgMDExNC44MyA2SDE2YTIgMiAwIDExMCA0aC01VjlhMSAxIDAgMTAtMiAwdjFINGEyIDIgMCAxMTAtNGgxLjE3QzUuMDYgNS42ODcgNSA1LjM1IDUgNXptNCAxVjVhMSAxIDAgMTAtMSAxaDF6bTMgMGExIDEgMCAxMC0xLTF2MWgxelwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19LHtcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImRcIjpcIk05IDExSDN2NWEyIDIgMCAwMDIgMmg0di03ek0xMSAxOGg0YTIgMiAwIDAwMi0ydi01aC02djd6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpR2xvYmVBbHQgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTQuMDgzIDloMS45NDZjLjA4OS0xLjU0Ni4zODMtMi45Ny44MzctNC4xMThBNi4wMDQgNi4wMDQgMCAwMDQuMDgzIDl6TTEwIDJhOCA4IDAgMTAwIDE2IDggOCAwIDAwMC0xNnptMCAyYy0uMDc2IDAtLjIzMi4wMzItLjQ2NS4yNjItLjIzOC4yMzQtLjQ5Ny42MjMtLjczNyAxLjE4Mi0uMzg5LjkwNy0uNjczIDIuMTQyLS43NjYgMy41NTZoMy45MzZjLS4wOTMtMS40MTQtLjM3Ny0yLjY0OS0uNzY2LTMuNTU2LS4yNC0uNTYtLjUtLjk0OC0uNzM3LTEuMTgyQzEwLjIzMiA0LjAzMiAxMC4wNzYgNCAxMCA0em0zLjk3MSA1Yy0uMDg5LTEuNTQ2LS4zODMtMi45Ny0uODM3LTQuMTE4QTYuMDA0IDYuMDA0IDAgMDExNS45MTcgOWgtMS45NDZ6bS0yLjAwMyAySDguMDMyYy4wOTMgMS40MTQuMzc3IDIuNjQ5Ljc2NiAzLjU1Ni4yNC41Ni41Ljk0OC43MzcgMS4xODIuMjMzLjIzLjM4OS4yNjIuNDY1LjI2Mi4wNzYgMCAuMjMyLS4wMzIuNDY1LS4yNjIuMjM4LS4yMzQuNDk4LS42MjMuNzM3LTEuMTgyLjM4OS0uOTA3LjY3My0yLjE0Mi43NjYtMy41NTZ6bTEuMTY2IDQuMTE4Yy40NTQtMS4xNDcuNzQ4LTIuNTcyLjgzNy00LjExOGgxLjk0NmE2LjAwNCA2LjAwNCAwIDAxLTIuNzgzIDQuMTE4em0tNi4yNjggMEM2LjQxMiAxMy45NyA2LjExOCAxMi41NDYgNi4wMyAxMUg0LjA4M2E2LjAwNCA2LjAwNCAwIDAwMi43ODMgNC4xMTh6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaUdsb2JlIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0xMCAxOGE4IDggMCAxMDAtMTYgOCA4IDAgMDAwIDE2ek00LjMzMiA4LjAyN2E2LjAxMiA2LjAxMiAwIDAxMS45MTItMi43MDZDNi41MTIgNS43MyA2Ljk3NCA2IDcuNSA2QTEuNSAxLjUgMCAwMTkgNy41VjhhMiAyIDAgMDA0IDAgMiAyIDAgMDExLjUyMy0xLjk0M0E1Ljk3NyA1Ljk3NyAwIDAxMTYgMTBjMCAuMzQtLjAyOC42NzUtLjA4MyAxSDE1YTIgMiAwIDAwLTIgMnYyLjE5N0E1Ljk3MyA1Ljk3MyAwIDAxMTAgMTZ2LTJhMiAyIDAgMDAtMi0yIDIgMiAwIDAxLTItMiAyIDIgMCAwMC0xLjY2OC0xLjk3M3pcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpSGFuZCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNOSAzYTEgMSAwIDAxMiAwdjUuNWEuNS41IDAgMDAxIDBWNGExIDEgMCAxMTIgMHY0LjVhLjUuNSAwIDAwMSAwVjZhMSAxIDAgMTEyIDB2NWE3IDcgMCAxMS0xNCAwVjlhMSAxIDAgMDEyIDB2Mi41YS41LjUgMCAwMDEgMFY0YTEgMSAwIDAxMiAwdjQuNWEuNS41IDAgMDAxIDBWM3pcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpSGFzaHRhZyAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNOS4yNDMgMy4wM2ExIDEgMCAwMS43MjcgMS4yMTNMOS41MyA2aDIuOTRsLjU2LTIuMjQzYTEgMSAwIDExMS45NC40ODZMMTQuNTMgNkgxN2ExIDEgMCAxMTAgMmgtMi45N2wtMSA0SDE1YTEgMSAwIDExMCAyaC0yLjQ3bC0uNTYgMi4yNDJhMSAxIDAgMTEtMS45NC0uNDg1TDEwLjQ3IDE0SDcuNTNsLS41NiAyLjI0MmExIDEgMCAxMS0xLjk0LS40ODVMNS40NyAxNEgzYTEgMSAwIDExMC0yaDIuOTdsMS00SDVhMSAxIDAgMTEwLTJoMi40N2wuNTYtMi4yNDNhMSAxIDAgMDExLjIxMy0uNzI3ek05LjAzIDhsLTEgNGgyLjkzOGwxLTRIOS4wMzF6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaUhlYXJ0IChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0zLjE3MiA1LjE3MmE0IDQgMCAwMTUuNjU2IDBMMTAgNi4zNDNsMS4xNzItMS4xNzFhNCA0IDAgMTE1LjY1NiA1LjY1NkwxMCAxNy42NTdsLTYuODI4LTYuODI5YTQgNCAwIDAxMC01LjY1NnpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpSG9tZSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImRcIjpcIk0xMC43MDcgMi4yOTNhMSAxIDAgMDAtMS40MTQgMGwtNyA3YTEgMSAwIDAwMS40MTQgMS40MTRMNCAxMC40MTRWMTdhMSAxIDAgMDAxIDFoMmExIDEgMCAwMDEtMXYtMmExIDEgMCAwMTEtMWgyYTEgMSAwIDAxMSAxdjJhMSAxIDAgMDAxIDFoMmExIDEgMCAwMDEtMXYtNi41ODZsLjI5My4yOTNhMSAxIDAgMDAxLjQxNC0xLjQxNGwtNy03elwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaUlkZW50aWZpY2F0aW9uIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0xMCAyYTEgMSAwIDAwLTEgMXYxYTEgMSAwIDAwMiAwVjNhMSAxIDAgMDAtMS0xek00IDRoM2EzIDMgMCAwMDYgMGgzYTIgMiAwIDAxMiAydjlhMiAyIDAgMDEtMiAySDRhMiAyIDAgMDEtMi0yVjZhMiAyIDAgMDEyLTJ6bTIuNSA3YTEuNSAxLjUgMCAxMDAtMyAxLjUgMS41IDAgMDAwIDN6bTIuNDUgNGEyLjUgMi41IDAgMTAtNC45IDBoNC45ek0xMiA5YTEgMSAwIDEwMCAyaDNhMSAxIDAgMTAwLTJoLTN6bS0xIDRhMSAxIDAgMDExLTFoMmExIDEgMCAxMTAgMmgtMmExIDEgMCAwMS0xLTF6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaUluYm94SW4gKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJkXCI6XCJNOC43MDcgNy4yOTNhMSAxIDAgMDAtMS40MTQgMS40MTRsMiAyYTEgMSAwIDAwMS40MTQgMGwyLTJhMSAxIDAgMDAtMS40MTQtMS40MTRMMTEgNy41ODZWM2ExIDEgMCAxMC0yIDB2NC41ODZsLS4yOTMtLjI5M3pcIn19LHtcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImRcIjpcIk0zIDVhMiAyIDAgMDEyLTJoMWExIDEgMCAwMTAgMkg1djdoMmwxIDJoNGwxLTJoMlY1aC0xYTEgMSAwIDExMC0yaDFhMiAyIDAgMDEyIDJ2MTBhMiAyIDAgMDEtMiAySDVhMiAyIDAgMDEtMi0yVjV6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpSW5ib3ggKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTUgM2EyIDIgMCAwMC0yIDJ2MTBhMiAyIDAgMDAyIDJoMTBhMiAyIDAgMDAyLTJWNWEyIDIgMCAwMC0yLTJINXptMCAyaDEwdjdoLTJsLTEgMkg4bC0xLTJINVY1elwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlJbmZvcm1hdGlvbkNpcmNsZSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMTggMTBhOCA4IDAgMTEtMTYgMCA4IDggMCAwMTE2IDB6bS03LTRhMSAxIDAgMTEtMiAwIDEgMSAwIDAxMiAwek05IDlhMSAxIDAgMDAwIDJ2M2ExIDEgMCAwMDEgMWgxYTEgMSAwIDEwMC0ydi0zYTEgMSAwIDAwLTEtMUg5elwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlLZXkgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTE4IDhhNiA2IDAgMDEtNy43NDMgNS43NDNMMTAgMTRsLTEgMS0xIDFINnYySDJ2LTRsNC4yNTctNC4yNTdBNiA2IDAgMTExOCA4em0tNi00YTEgMSAwIDEwMCAyIDIgMiAwIDAxMiAyIDEgMSAwIDEwMiAwIDQgNCAwIDAwLTQtNHpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpTGlicmFyeSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMTAuNDk2IDIuMTMyYTEgMSAwIDAwLS45OTIgMGwtNyA0QTEgMSAwIDAwMyA4djdhMSAxIDAgMTAwIDJoMTRhMSAxIDAgMTAwLTJWOGExIDEgMCAwMC40OTYtMS44NjhsLTctNHpNNiA5YTEgMSAwIDAwLTEgMXYzYTEgMSAwIDEwMiAwdi0zYTEgMSAwIDAwLTEtMXptMyAxYTEgMSAwIDAxMiAwdjNhMSAxIDAgMTEtMiAwdi0zem01LTFhMSAxIDAgMDAtMSAxdjNhMSAxIDAgMTAyIDB2LTNhMSAxIDAgMDAtMS0xelwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlMaWdodEJ1bGIgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJkXCI6XCJNMTEgM2ExIDEgMCAxMC0yIDB2MWExIDEgMCAxMDIgMFYzek0xNS42NTcgNS43NTdhMSAxIDAgMDAtMS40MTQtMS40MTRsLS43MDcuNzA3YTEgMSAwIDAwMS40MTQgMS40MTRsLjcwNy0uNzA3ek0xOCAxMGExIDEgMCAwMS0xIDFoLTFhMSAxIDAgMTEwLTJoMWExIDEgMCAwMTEgMXpNNS4wNSA2LjQ2NEExIDEgMCAxMDYuNDY0IDUuMDVsLS43MDctLjcwN2ExIDEgMCAwMC0xLjQxNCAxLjQxNGwuNzA3LjcwN3pNNSAxMGExIDEgMCAwMS0xIDFIM2ExIDEgMCAxMTAtMmgxYTEgMSAwIDAxMSAxek04IDE2di0xaDR2MWEyIDIgMCAxMS00IDB6TTEyIDE0Yy4wMTUtLjM0LjIwOC0uNjQ2LjQ3Ny0uODU5YTQgNCAwIDEwLTQuOTU0IDBjLjI3LjIxMy40NjIuNTE5LjQ3Ni44NTloNC4wMDJ6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpTGlnaHRuaW5nQm9sdCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMTEuMyAxLjA0NkExIDEgMCAwMTEyIDJ2NWg0YTEgMSAwIDAxLjgyIDEuNTczbC03IDEwQTEgMSAwIDAxOCAxOHYtNUg0YTEgMSAwIDAxLS44Mi0xLjU3M2w3LTEwYTEgMSAwIDAxMS4xMi0uMzh6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaUxpbmsgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTEyLjU4NiA0LjU4NmEyIDIgMCAxMTIuODI4IDIuODI4bC0zIDNhMiAyIDAgMDEtMi44MjggMCAxIDEgMCAwMC0xLjQxNCAxLjQxNCA0IDQgMCAwMDUuNjU2IDBsMy0zYTQgNCAwIDAwLTUuNjU2LTUuNjU2bC0xLjUgMS41YTEgMSAwIDEwMS40MTQgMS40MTRsMS41LTEuNXptLTUgNWEyIDIgMCAwMTIuODI4IDAgMSAxIDAgMTAxLjQxNC0xLjQxNCA0IDQgMCAwMC01LjY1NiAwbC0zIDNhNCA0IDAgMTA1LjY1NiA1LjY1NmwxLjUtMS41YTEgMSAwIDEwLTEuNDE0LTEuNDE0bC0xLjUgMS41YTIgMiAwIDExLTIuODI4LTIuODI4bDMtM3pcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpTG9jYXRpb25NYXJrZXIgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTUuMDUgNC4wNWE3IDcgMCAxMTkuOSA5LjlMMTAgMTguOWwtNC45NS00Ljk1YTcgNyAwIDAxMC05Ljl6TTEwIDExYTIgMiAwIDEwMC00IDIgMiAwIDAwMCA0elwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlMb2NrQ2xvc2VkIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk01IDlWN2E1IDUgMCAwMTEwIDB2MmEyIDIgMCAwMTIgMnY1YTIgMiAwIDAxLTIgMkg1YTIgMiAwIDAxLTItMnYtNWEyIDIgMCAwMTItMnptOC0ydjJIN1Y3YTMgMyAwIDAxNiAwelwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlMb2NrT3BlbiAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImRcIjpcIk0xMCAyYTUgNSAwIDAwLTUgNXYyYTIgMiAwIDAwLTIgMnY1YTIgMiAwIDAwMiAyaDEwYTIgMiAwIDAwMi0ydi01YTIgMiAwIDAwLTItMkg3VjdhMyAzIDAgMDE1LjkwNS0uNzUgMSAxIDAgMDAxLjkzNy0uNUE1LjAwMiA1LjAwMiAwIDAwMTAgMnpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlMb2dpbiAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMyAzYTEgMSAwIDAxMSAxdjEyYTEgMSAwIDExLTIgMFY0YTEgMSAwIDAxMS0xem03LjcwNyAzLjI5M2ExIDEgMCAwMTAgMS40MTRMOS40MTQgOUgxN2ExIDEgMCAxMTAgMkg5LjQxNGwxLjI5MyAxLjI5M2ExIDEgMCAwMS0xLjQxNCAxLjQxNGwtMy0zYTEgMSAwIDAxMC0xLjQxNGwzLTNhMSAxIDAgMDExLjQxNCAwelwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlMb2dvdXQgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTMgM2ExIDEgMCAwMC0xIDF2MTJhMSAxIDAgMTAyIDBWNGExIDEgMCAwMC0xLTF6bTEwLjI5MyA5LjI5M2ExIDEgMCAwMDEuNDE0IDEuNDE0bDMtM2ExIDEgMCAwMDAtMS40MTRsLTMtM2ExIDEgMCAxMC0xLjQxNCAxLjQxNEwxNC41ODYgOUg3YTEgMSAwIDEwMCAyaDcuNTg2bC0xLjI5MyAxLjI5M3pcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpTWFpbE9wZW4gKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTIuOTQgNi40MTJBMiAyIDAgMDAyIDguMTA4VjE2YTIgMiAwIDAwMiAyaDEyYTIgMiAwIDAwMi0yVjguMTA4YTIgMiAwIDAwLS45NC0xLjY5NmwtNi0zLjc1YTIgMiAwIDAwLTIuMTIgMGwtNiAzLjc1em0yLjYxNSAyLjQyM2ExIDEgMCAxMC0xLjExIDEuNjY0bDUgMy4zMzNhMSAxIDAgMDAxLjExIDBsNS0zLjMzM2ExIDEgMCAwMC0xLjExLTEuNjY0TDEwIDExLjc5OCA1LjU1NSA4LjgzNXpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpTWFpbCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImRcIjpcIk0yLjAwMyA1Ljg4NEwxMCA5Ljg4Mmw3Ljk5Ny0zLjk5OEEyIDIgMCAwMDE2IDRINGEyIDIgMCAwMC0xLjk5NyAxLjg4NHpcIn19LHtcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImRcIjpcIk0xOCA4LjExOGwtOCA0LTgtNFYxNGEyIDIgMCAwMDIgMmgxMmEyIDIgMCAwMDItMlY4LjExOHpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlNYXAgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTEyIDEuNTg2bC00IDR2MTIuODI4bDQtNFYxLjU4NnpNMy43MDcgMy4yOTNBMSAxIDAgMDAyIDR2MTBhMSAxIDAgMDAuMjkzLjcwN0w2IDE4LjQxNFY1LjU4NkwzLjcwNyAzLjI5M3pNMTcuNzA3IDUuMjkzTDE0IDEuNTg2djEyLjgyOGwyLjI5MyAyLjI5M0ExIDEgMCAwMDE4IDE2VjZhMSAxIDAgMDAtLjI5My0uNzA3elwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlNZW51QWx0MSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMyA1YTEgMSAwIDAxMS0xaDEyYTEgMSAwIDExMCAySDRhMSAxIDAgMDEtMS0xek0zIDEwYTEgMSAwIDAxMS0xaDZhMSAxIDAgMTEwIDJINGExIDEgMCAwMS0xLTF6TTMgMTVhMSAxIDAgMDExLTFoMTJhMSAxIDAgMTEwIDJINGExIDEgMCAwMS0xLTF6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU1lbnVBbHQyIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0zIDVhMSAxIDAgMDExLTFoMTJhMSAxIDAgMTEwIDJINGExIDEgMCAwMS0xLTF6TTMgMTBhMSAxIDAgMDExLTFoMTJhMSAxIDAgMTEwIDJINGExIDEgMCAwMS0xLTF6TTMgMTVhMSAxIDAgMDExLTFoNmExIDEgMCAxMTAgMkg0YTEgMSAwIDAxLTEtMXpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpTWVudUFsdDMgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTMgNWExIDEgMCAwMTEtMWgxMmExIDEgMCAxMTAgMkg0YTEgMSAwIDAxLTEtMXpNMyAxMGExIDEgMCAwMTEtMWgxMmExIDEgMCAxMTAgMkg0YTEgMSAwIDAxLTEtMXpNOSAxNWExIDEgMCAwMTEtMWg2YTEgMSAwIDExMCAyaC02YTEgMSAwIDAxLTEtMXpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpTWVudUFsdDQgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTMgN2ExIDEgMCAwMTEtMWgxMmExIDEgMCAxMTAgMkg0YTEgMSAwIDAxLTEtMXpNMyAxM2ExIDEgMCAwMTEtMWgxMmExIDEgMCAxMTAgMkg0YTEgMSAwIDAxLTEtMXpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpTWVudSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMyA1YTEgMSAwIDAxMS0xaDEyYTEgMSAwIDExMCAySDRhMSAxIDAgMDEtMS0xek0zIDEwYTEgMSAwIDAxMS0xaDEyYTEgMSAwIDExMCAySDRhMSAxIDAgMDEtMS0xek0zIDE1YTEgMSAwIDAxMS0xaDEyYTEgMSAwIDExMCAySDRhMSAxIDAgMDEtMS0xelwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlNaWNyb3Bob25lIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk03IDRhMyAzIDAgMDE2IDB2NGEzIDMgMCAxMS02IDBWNHptNCAxMC45M0E3LjAwMSA3LjAwMSAwIDAwMTcgOGExIDEgMCAxMC0yIDBBNSA1IDAgMDE1IDhhMSAxIDAgMDAtMiAwIDcuMDAxIDcuMDAxIDAgMDA2IDYuOTNWMTdINmExIDEgMCAxMDAgMmg4YTEgMSAwIDEwMC0yaC0zdi0yLjA3elwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlNaW51c0NpcmNsZSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMTAgMThhOCA4IDAgMTAwLTE2IDggOCAwIDAwMCAxNnpNNyA5YTEgMSAwIDAwMCAyaDZhMSAxIDAgMTAwLTJIN3pcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpTWludXNTbSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNNSAxMGExIDEgMCAwMTEtMWg4YTEgMSAwIDExMCAySDZhMSAxIDAgMDEtMS0xelwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlNaW51cyAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMyAxMGExIDEgMCAwMTEtMWgxMmExIDEgMCAxMTAgMkg0YTEgMSAwIDAxLTEtMXpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpTW9vbiAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImRcIjpcIk0xNy4yOTMgMTMuMjkzQTggOCAwIDAxNi43MDcgMi43MDdhOC4wMDEgOC4wMDEgMCAxMDEwLjU4NiAxMC41ODZ6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpTXVzaWNOb3RlIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZFwiOlwiTTE4IDNhMSAxIDAgMDAtMS4xOTYtLjk4bC0xMCAyQTEgMSAwIDAwNiA1djkuMTE0QTQuMzY5IDQuMzY5IDAgMDA1IDE0Yy0xLjY1NyAwLTMgLjg5NS0zIDJzMS4zNDMgMiAzIDIgMy0uODk1IDMtMlY3LjgybDgtMS42djUuODk0QTQuMzcgNC4zNyAwIDAwMTUgMTJjLTEuNjU3IDAtMyAuODk1LTMgMnMxLjM0MyAyIDMgMiAzLS44OTUgMy0yVjN6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpTmV3c3BhcGVyIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0yIDVhMiAyIDAgMDEyLTJoOGEyIDIgMCAwMTIgMnYxMGEyIDIgMCAwMDIgMkg0YTIgMiAwIDAxLTItMlY1em0zIDFoNnY0SDVWNnptNiA2SDV2Mmg2di0yelwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19LHtcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImRcIjpcIk0xNSA3aDFhMiAyIDAgMDEyIDJ2NS41YTEuNSAxLjUgMCAwMS0zIDBWN3pcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPZmZpY2VCdWlsZGluZyAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNNCA0YTIgMiAwIDAxMi0yaDhhMiAyIDAgMDEyIDJ2MTJhMSAxIDAgMTEwIDJoLTNhMSAxIDAgMDEtMS0xdi0yYTEgMSAwIDAwLTEtMUg5YTEgMSAwIDAwLTEgMXYyYTEgMSAwIDAxLTEgMUg0YTEgMSAwIDExMC0yVjR6bTMgMWgydjJIN1Y1em0yIDRIN3YyaDJWOXptMi00aDJ2MmgtMlY1em0yIDRoLTJ2MmgyVjl6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaVBhcGVyQWlycGxhbmUgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJkXCI6XCJNMTAuODk0IDIuNTUzYTEgMSAwIDAwLTEuNzg4IDBsLTcgMTRhMSAxIDAgMDAxLjE2OSAxLjQwOWw1LTEuNDI5QTEgMSAwIDAwOSAxNS41NzFWMTFhMSAxIDAgMTEyIDB2NC41NzFhMSAxIDAgMDAuNzI1Ljk2Mmw1IDEuNDI4YTEgMSAwIDAwMS4xNy0xLjQwOGwtNy0xNHpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlQYXBlckNsaXAgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTggNGEzIDMgMCAwMC0zIDN2NGE1IDUgMCAwMDEwIDBWN2ExIDEgMCAxMTIgMHY0YTcgNyAwIDExLTE0IDBWN2E1IDUgMCAwMTEwIDB2NGEzIDMgMCAxMS02IDBWN2ExIDEgMCAwMTIgMHY0YTEgMSAwIDEwMiAwVjdhMyAzIDAgMDAtMy0zelwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlQYXVzZSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMTggMTBhOCA4IDAgMTEtMTYgMCA4IDggMCAwMTE2IDB6TTcgOGExIDEgMCAwMTIgMHY0YTEgMSAwIDExLTIgMFY4em01LTFhMSAxIDAgMDAtMSAxdjRhMSAxIDAgMTAyIDBWOGExIDEgMCAwMC0xLTF6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaVBlbmNpbEFsdCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImRcIjpcIk0xNy40MTQgMi41ODZhMiAyIDAgMDAtMi44MjggMEw3IDEwLjE3MlYxM2gyLjgyOGw3LjU4Ni03LjU4NmEyIDIgMCAwMDAtMi44Mjh6XCJ9fSx7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTIgNmEyIDIgMCAwMTItMmg0YTEgMSAwIDAxMCAySDR2MTBoMTB2LTRhMSAxIDAgMTEyIDB2NGEyIDIgMCAwMS0yIDJINGEyIDIgMCAwMS0yLTJWNnpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpUGVuY2lsIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZFwiOlwiTTEzLjU4NiAzLjU4NmEyIDIgMCAxMTIuODI4IDIuODI4bC0uNzkzLjc5My0yLjgyOC0yLjgyOC43OTMtLjc5M3pNMTEuMzc5IDUuNzkzTDMgMTQuMTcyVjE3aDIuODI4bDguMzgtOC4zNzktMi44My0yLjgyOHpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlQaG9uZUluY29taW5nIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZFwiOlwiTTE0LjQxNCA3bDMuMjkzLTMuMjkzYTEgMSAwIDAwLTEuNDE0LTEuNDE0TDEzIDUuNTg2VjRhMSAxIDAgMTAtMiAwdjQuMDAzYS45OTYuOTk2IDAgMDAuNjE3LjkyMUEuOTk3Ljk5NyAwIDAwMTIgOWg0YTEgMSAwIDEwMC0yaC0xLjU4NnpcIn19LHtcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImRcIjpcIk0yIDNhMSAxIDAgMDExLTFoMi4xNTNhMSAxIDAgMDEuOTg2LjgzNmwuNzQgNC40MzVhMSAxIDAgMDEtLjU0IDEuMDZsLTEuNTQ4Ljc3M2ExMS4wMzcgMTEuMDM3IDAgMDA2LjEwNSA2LjEwNWwuNzc0LTEuNTQ4YTEgMSAwIDAxMS4wNTktLjU0bDQuNDM1Ljc0YTEgMSAwIDAxLjgzNi45ODZWMTdhMSAxIDAgMDEtMSAxaC0yQzcuODIgMTggMiAxMi4xOCAyIDVWM3pcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlQaG9uZU1pc3NlZENhbGwgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJkXCI6XCJNMiAzYTEgMSAwIDAxMS0xaDIuMTUzYTEgMSAwIDAxLjk4Ni44MzZsLjc0IDQuNDM1YTEgMSAwIDAxLS41NCAxLjA2bC0xLjU0OC43NzNhMTEuMDM3IDExLjAzNyAwIDAwNi4xMDUgNi4xMDVsLjc3NC0xLjU0OGExIDEgMCAwMTEuMDU5LS41NGw0LjQzNS43NGExIDEgMCAwMS44MzYuOTg2VjE3YTEgMSAwIDAxLTEgMWgtMkM3LjgyIDE4IDIgMTIuMTggMiA1VjN6XCJ9fSx7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJkXCI6XCJNMTYuNzA3IDMuMjkzYTEgMSAwIDAxMCAxLjQxNEwxNS40MTQgNmwxLjI5MyAxLjI5M2ExIDEgMCAwMS0xLjQxNCAxLjQxNEwxNCA3LjQxNGwtMS4yOTMgMS4yOTNhMSAxIDAgMTEtMS40MTQtMS40MTRMMTIuNTg2IDZsLTEuMjkzLTEuMjkzYTEgMSAwIDAxMS40MTQtMS40MTRMMTQgNC41ODZsMS4yOTMtMS4yOTNhMSAxIDAgMDExLjQxNCAwelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaVBob25lT3V0Z29pbmcgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJkXCI6XCJNMTcuOTI0IDIuNjE3YS45OTcuOTk3IDAgMDAtLjIxNS0uMzIybC0uMDA0LS4wMDRBLjk5Ny45OTcgMCAwMDE3IDJoLTRhMSAxIDAgMTAwIDJoMS41ODZsLTMuMjkzIDMuMjkzYTEgMSAwIDAwMS40MTQgMS40MTRMMTYgNS40MTRWN2ExIDEgMCAxMDIgMFYzYS45OTcuOTk3IDAgMDAtLjA3Ni0uMzgzelwifX0se1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZFwiOlwiTTIgM2ExIDEgMCAwMTEtMWgyLjE1M2ExIDEgMCAwMS45ODYuODM2bC43NCA0LjQzNWExIDEgMCAwMS0uNTQgMS4wNmwtMS41NDguNzczYTExLjAzNyAxMS4wMzcgMCAwMDYuMTA1IDYuMTA1bC43NzQtMS41NDhhMSAxIDAgMDExLjA1OS0uNTRsNC40MzUuNzRhMSAxIDAgMDEuODM2Ljk4NlYxN2ExIDEgMCAwMS0xIDFoLTJDNy44MiAxOCAyIDEyLjE4IDIgNVYzelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaVBob25lIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZFwiOlwiTTIgM2ExIDEgMCAwMTEtMWgyLjE1M2ExIDEgMCAwMS45ODYuODM2bC43NCA0LjQzNWExIDEgMCAwMS0uNTQgMS4wNmwtMS41NDguNzczYTExLjAzNyAxMS4wMzcgMCAwMDYuMTA1IDYuMTA1bC43NzQtMS41NDhhMSAxIDAgMDExLjA1OS0uNTRsNC40MzUuNzRhMSAxIDAgMDEuODM2Ljk4NlYxN2ExIDEgMCAwMS0xIDFoLTJDNy44MiAxOCAyIDEyLjE4IDIgNVYzelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaVBob3RvZ3JhcGggKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTQgM2EyIDIgMCAwMC0yIDJ2MTBhMiAyIDAgMDAyIDJoMTJhMiAyIDAgMDAyLTJWNWEyIDIgMCAwMC0yLTJINHptMTIgMTJINGw0LTggMyA2IDItNCAzIDZ6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaVBsYXkgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTEwIDE4YTggOCAwIDEwMC0xNiA4IDggMCAwMDAgMTZ6TTkuNTU1IDcuMTY4QTEgMSAwIDAwOCA4djRhMSAxIDAgMDAxLjU1NS44MzJsMy0yYTEgMSAwIDAwMC0xLjY2NGwtMy0yelwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlQbHVzQ2lyY2xlIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0xMCAxOGE4IDggMCAxMDAtMTYgOCA4IDAgMDAwIDE2em0xLTExYTEgMSAwIDEwLTIgMHYySDdhMSAxIDAgMTAwIDJoMnYyYTEgMSAwIDEwMiAwdi0yaDJhMSAxIDAgMTAwLTJoLTJWN3pcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpUGx1c1NtIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0xMCA1YTEgMSAwIDAxMSAxdjNoM2ExIDEgMCAxMTAgMmgtM3YzYTEgMSAwIDExLTIgMHYtM0g2YTEgMSAwIDExMC0yaDNWNmExIDEgMCAwMTEtMXpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpUGx1cyAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMTAgNWExIDEgMCAwMTEgMXYzaDNhMSAxIDAgMTEwIDJoLTN2M2ExIDEgMCAxMS0yIDB2LTNINmExIDEgMCAxMTAtMmgzVjZhMSAxIDAgMDExLTF6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaVByZXNlbnRhdGlvbkNoYXJ0QmFyIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0zIDNhMSAxIDAgMDAwIDJ2OGEyIDIgMCAwMDIgMmgyLjU4NmwtMS4yOTMgMS4yOTNhMSAxIDAgMTAxLjQxNCAxLjQxNEwxMCAxNS40MTRsMi4yOTMgMi4yOTNhMSAxIDAgMDAxLjQxNC0xLjQxNEwxMi40MTQgMTVIMTVhMiAyIDAgMDAyLTJWNWExIDEgMCAxMDAtMkgzem0xMSA0YTEgMSAwIDEwLTIgMHY0YTEgMSAwIDEwMiAwVjd6bS0zIDFhMSAxIDAgMTAtMiAwdjNhMSAxIDAgMTAyIDBWOHpNOCA5YTEgMSAwIDAwLTIgMHYyYTEgMSAwIDEwMiAwVjl6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaVByZXNlbnRhdGlvbkNoYXJ0TGluZSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMyAzYTEgMSAwIDAwMCAydjhhMiAyIDAgMDAyIDJoMi41ODZsLTEuMjkzIDEuMjkzYTEgMSAwIDEwMS40MTQgMS40MTRMMTAgMTUuNDE0bDIuMjkzIDIuMjkzYTEgMSAwIDAwMS40MTQtMS40MTRMMTIuNDE0IDE1SDE1YTIgMiAwIDAwMi0yVjVhMSAxIDAgMTAwLTJIM3ptMTEuNzA3IDQuNzA3YTEgMSAwIDAwLTEuNDE0LTEuNDE0TDEwIDkuNTg2IDguNzA3IDguMjkzYTEgMSAwIDAwLTEuNDE0IDBsLTIgMmExIDEgMCAxMDEuNDE0IDEuNDE0TDggMTAuNDE0bDEuMjkzIDEuMjkzYTEgMSAwIDAwMS40MTQgMGw0LTR6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaVByaW50ZXIgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTUgNHYzSDRhMiAyIDAgMDAtMiAydjNhMiAyIDAgMDAyIDJoMXYyYTIgMiAwIDAwMiAyaDZhMiAyIDAgMDAyLTJ2LTJoMWEyIDIgMCAwMDItMlY5YTIgMiAwIDAwLTItMmgtMVY0YTIgMiAwIDAwLTItMkg3YTIgMiAwIDAwLTIgMnptOCAwSDd2M2g2VjR6bTAgOEg3djRoNnYtNHpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpUHV6emxlIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZFwiOlwiTTEwIDMuNWExLjUgMS41IDAgMDEzIDBWNGExIDEgMCAwMDEgMWgzYTEgMSAwIDAxMSAxdjNhMSAxIDAgMDEtMSAxaC0uNWExLjUgMS41IDAgMDAwIDNoLjVhMSAxIDAgMDExIDF2M2ExIDEgMCAwMS0xIDFoLTNhMSAxIDAgMDEtMS0xdi0uNWExLjUgMS41IDAgMDAtMyAwdi41YTEgMSAwIDAxLTEgMUg2YTEgMSAwIDAxLTEtMXYtM2ExIDEgMCAwMC0xLTFoLS41YTEuNSAxLjUgMCAwMTAtM0g0YTEgMSAwIDAwMS0xVjZhMSAxIDAgMDExLTFoM2ExIDEgMCAwMDEtMXYtLjV6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpUXJjb2RlIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0zIDRhMSAxIDAgMDExLTFoM2ExIDEgMCAwMTEgMXYzYTEgMSAwIDAxLTEgMUg0YTEgMSAwIDAxLTEtMVY0em0yIDJWNWgxdjFINXpNMyAxM2ExIDEgMCAwMTEtMWgzYTEgMSAwIDAxMSAxdjNhMSAxIDAgMDEtMSAxSDRhMSAxIDAgMDEtMS0xdi0zem0yIDJ2LTFoMXYxSDV6TTEzIDNhMSAxIDAgMDAtMSAxdjNhMSAxIDAgMDAxIDFoM2ExIDEgMCAwMDEtMVY0YTEgMSAwIDAwLTEtMWgtM3ptMSAydjFoMVY1aC0xelwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19LHtcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImRcIjpcIk0xMSA0YTEgMSAwIDEwLTIgMHYxYTEgMSAwIDAwMiAwVjR6TTEwIDdhMSAxIDAgMDExIDF2MWgyYTEgMSAwIDExMCAyaC0zYTEgMSAwIDAxLTEtMVY4YTEgMSAwIDAxMS0xek0xNiA5YTEgMSAwIDEwMCAyIDEgMSAwIDAwMC0yek05IDEzYTEgMSAwIDAxMS0xaDFhMSAxIDAgMTEwIDJ2MmExIDEgMCAxMS0yIDB2LTN6TTcgMTFhMSAxIDAgMTAwLTJINGExIDEgMCAxMDAgMmgzek0xNyAxM2ExIDEgMCAwMS0xIDFoLTJhMSAxIDAgMTEwLTJoMmExIDEgMCAwMTEgMXpNMTYgMTdhMSAxIDAgMTAwLTJoLTNhMSAxIDAgMTAwIDJoM3pcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlRdWVzdGlvbk1hcmtDaXJjbGUgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTE4IDEwYTggOCAwIDExLTE2IDAgOCA4IDAgMDExNiAwem0tOC0zYTEgMSAwIDAwLS44NjcuNSAxIDEgMCAxMS0xLjczMS0xQTMgMyAwIDAxMTMgOGEzLjAwMSAzLjAwMSAwIDAxLTIgMi44M1YxMWExIDEgMCAxMS0yIDB2LTFhMSAxIDAgMDExLTEgMSAxIDAgMTAwLTJ6bTAgOGExIDEgMCAxMDAtMiAxIDEgMCAwMDAgMnpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpUmVjZWlwdFJlZnVuZCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNNSAyYTIgMiAwIDAwLTIgMnYxNGwzLjUtMiAzLjUgMiAzLjUtMiAzLjUgMlY0YTIgMiAwIDAwLTItMkg1em00LjcwNyAzLjcwN2ExIDEgMCAwMC0xLjQxNC0xLjQxNGwtMyAzYTEgMSAwIDAwMCAxLjQxNGwzIDNhMSAxIDAgMDAxLjQxNC0xLjQxNEw4LjQxNCA5SDEwYTMgMyAwIDAxMyAzdjFhMSAxIDAgMTAyIDB2LTFhNSA1IDAgMDAtNS01SDguNDE0bDEuMjkzLTEuMjkzelwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlSZWNlaXB0VGF4IChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk01IDJhMiAyIDAgMDAtMiAydjE0bDMuNS0yIDMuNSAyIDMuNS0yIDMuNSAyVjRhMiAyIDAgMDAtMi0ySDV6bTIuNSAzYTEuNSAxLjUgMCAxMDAgMyAxLjUgMS41IDAgMDAwLTN6bTYuMjA3LjI5M2ExIDEgMCAwMC0xLjQxNCAwbC02IDZhMSAxIDAgMTAxLjQxNCAxLjQxNGw2LTZhMSAxIDAgMDAwLTEuNDE0ek0xMi41IDEwYTEuNSAxLjUgMCAxMDAgMyAxLjUgMS41IDAgMDAwLTN6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaVJlZnJlc2ggKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTQgMmExIDEgMCAwMTEgMXYyLjEwMWE3LjAwMiA3LjAwMiAwIDAxMTEuNjAxIDIuNTY2IDEgMSAwIDExLTEuODg1LjY2NkE1LjAwMiA1LjAwMiAwIDAwNS45OTkgN0g5YTEgMSAwIDAxMCAySDRhMSAxIDAgMDEtMS0xVjNhMSAxIDAgMDExLTF6bS4wMDggOS4wNTdhMSAxIDAgMDExLjI3Ni42MUE1LjAwMiA1LjAwMiAwIDAwMTQuMDAxIDEzSDExYTEgMSAwIDExMC0yaDVhMSAxIDAgMDExIDF2NWExIDEgMCAxMS0yIDB2LTIuMTAxYTcuMDAyIDcuMDAyIDAgMDEtMTEuNjAxLTIuNTY2IDEgMSAwIDAxLjYxLTEuMjc2elwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlSZXBseSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNNy43MDcgMy4yOTNhMSAxIDAgMDEwIDEuNDE0TDUuNDE0IDdIMTFhNyA3IDAgMDE3IDd2MmExIDEgMCAxMS0yIDB2LTJhNSA1IDAgMDAtNS01SDUuNDE0bDIuMjkzIDIuMjkzYTEgMSAwIDExLTEuNDE0IDEuNDE0bC00LTRhMSAxIDAgMDEwLTEuNDE0bDQtNGExIDEgMCAwMTEuNDE0IDB6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaVJld2luZCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImRcIjpcIk04LjQ0NSAxNC44MzJBMSAxIDAgMDAxMCAxNHYtMi43OThsNS40NDUgMy42M0ExIDEgMCAwMDE3IDE0VjZhMSAxIDAgMDAtMS41NTUtLjgzMkwxMCA4Ljc5OFY2YTEgMSAwIDAwLTEuNTU1LS44MzJsLTYgNGExIDEgMCAwMDAgMS42NjRsNiA0elwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaVJzcyAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImRcIjpcIk01IDNhMSAxIDAgMDAwIDJjNS41MjMgMCAxMCA0LjQ3NyAxMCAxMGExIDEgMCAxMDIgMEMxNyA4LjM3MyAxMS42MjcgMyA1IDN6XCJ9fSx7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJkXCI6XCJNNCA5YTEgMSAwIDAxMS0xIDcgNyAwIDAxNyA3IDEgMSAwIDExLTIgMCA1IDUgMCAwMC01LTUgMSAxIDAgMDEtMS0xek0zIDE1YTIgMiAwIDExNCAwIDIgMiAwIDAxLTQgMHpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlTYXZlQXMgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJkXCI6XCJNOS43MDcgNy4yOTNhMSAxIDAgMDAtMS40MTQgMS40MTRsMyAzYTEgMSAwIDAwMS40MTQgMGwzLTNhMSAxIDAgMDAtMS40MTQtMS40MTRMMTMgOC41ODZWNWgzYTIgMiAwIDAxMiAydjVhMiAyIDAgMDEtMiAySDhhMiAyIDAgMDEtMi0yVjdhMiAyIDAgMDEyLTJoM3YzLjU4Nkw5LjcwNyA3LjI5M3pNMTEgM2ExIDEgMCAxMTIgMHYyaC0yVjN6XCJ9fSx7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJkXCI6XCJNNCA5YTIgMiAwIDAwLTIgMnY1YTIgMiAwIDAwMiAyaDhhMiAyIDAgMDAyLTJINFY5elwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaVNhdmUgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJkXCI6XCJNNy43MDcgMTAuMjkzYTEgMSAwIDEwLTEuNDE0IDEuNDE0bDMgM2ExIDEgMCAwMDEuNDE0IDBsMy0zYTEgMSAwIDAwLTEuNDE0LTEuNDE0TDExIDExLjU4NlY2aDVhMiAyIDAgMDEyIDJ2N2EyIDIgMCAwMS0yIDJINGEyIDIgMCAwMS0yLTJWOGEyIDIgMCAwMTItMmg1djUuNTg2bC0xLjI5My0xLjI5M3pNOSA0YTEgMSAwIDAxMiAwdjJIOVY0elwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaVNjYWxlIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0xMCAyYTEgMSAwIDAxMSAxdjEuMzIzbDMuOTU0IDEuNTgyIDEuNTk5LS44YTEgMSAwIDAxLjg5NCAxLjc5bC0xLjIzMy42MTYgMS43MzggNS40MmExIDEgMCAwMS0uMjg1IDEuMDVBMy45ODkgMy45ODkgMCAwMTE1IDE1YTMuOTg5IDMuOTg5IDAgMDEtMi42NjctMS4wMTkgMSAxIDAgMDEtLjI4NS0xLjA1bDEuNzE1LTUuMzQ5TDExIDYuNDc3VjE2aDJhMSAxIDAgMTEwIDJIN2ExIDEgMCAxMTAtMmgyVjYuNDc3TDYuMjM3IDcuNTgybDEuNzE1IDUuMzQ5YTEgMSAwIDAxLS4yODUgMS4wNUEzLjk4OSAzLjk4OSAwIDAxNSAxNWEzLjk4OSAzLjk4OSAwIDAxLTIuNjY3LTEuMDE5IDEgMSAwIDAxLS4yODUtMS4wNWwxLjczOC01LjQyLTEuMjMzLS42MTdhMSAxIDAgMDEuODk0LTEuNzg4bDEuNTk5Ljc5OUw5IDQuMzIzVjNhMSAxIDAgMDExLTF6bS01IDguMjc0bC0uODE4IDIuNTUyYy4yNS4xMTIuNTI2LjE3NC44MTguMTc0LjI5MiAwIC41NjktLjA2Mi44MTgtLjE3NEw1IDEwLjI3NHptMTAgMGwtLjgxOCAyLjU1MmMuMjUuMTEyLjUyNi4xNzQuODE4LjE3NC4yOTIgMCAuNTY5LS4wNjIuODE4LS4xNzRMMTUgMTAuMjc0elwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlTY2lzc29ycyAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNNS41IDJhMy41IDMuNSAwIDEwMS42NjUgNi41OEw4LjU4NSAxMGwtMS40MiAxLjQyYTMuNSAzLjUgMCAxMDEuNDE0IDEuNDE0bDguMTI4LTguMTI3YTEgMSAwIDAwLTEuNDE0LTEuNDE0TDEwIDguNTg2bC0xLjQyLTEuNDJBMy41IDMuNSAwIDAwNS41IDJ6TTQgNS41YTEuNSAxLjUgMCAxMTMgMCAxLjUgMS41IDAgMDEtMyAwem0wIDlhMS41IDEuNSAwIDExMyAwIDEuNSAxLjUgMCAwMS0zIDB6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX0se1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZFwiOlwiTTEyLjgyOCAxMS40MTRhMSAxIDAgMDAtMS40MTQgMS40MTRsMy44NzkgMy44OGExIDEgMCAwMDEuNDE0LTEuNDE1bC0zLjg3OS0zLjg3OXpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlTZWFyY2hDaXJjbGUgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJkXCI6XCJNOSA5YTIgMiAwIDExNCAwIDIgMiAwIDAxLTQgMHpcIn19LHtcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMTAgMThhOCA4IDAgMTAwLTE2IDggOCAwIDAwMCAxNnptMS0xM2E0IDQgMCAwMC0zLjQ0NiA2LjAzMmwtMi4yNjEgMi4yNmExIDEgMCAxMDEuNDE0IDEuNDE1bDIuMjYxLTIuMjYxQTQgNCAwIDEwMTEgNXpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpU2VhcmNoIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk04IDRhNCA0IDAgMTAwIDggNCA0IDAgMDAwLTh6TTIgOGE2IDYgMCAxMTEwLjg5IDMuNDc2bDQuODE3IDQuODE3YTEgMSAwIDAxLTEuNDE0IDEuNDE0bC00LjgxNi00LjgxNkE2IDYgMCAwMTIgOHpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpU2VsZWN0b3IgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTEwIDNhMSAxIDAgMDEuNzA3LjI5M2wzIDNhMSAxIDAgMDEtMS40MTQgMS40MTRMMTAgNS40MTQgNy43MDcgNy43MDdhMSAxIDAgMDEtMS40MTQtMS40MTRsMy0zQTEgMSAwIDAxMTAgM3ptLTMuNzA3IDkuMjkzYTEgMSAwIDAxMS40MTQgMEwxMCAxNC41ODZsMi4yOTMtMi4yOTNhMSAxIDAgMDExLjQxNCAxLjQxNGwtMyAzYTEgMSAwIDAxLTEuNDE0IDBsLTMtM2ExIDEgMCAwMTAtMS40MTR6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaVNlcnZlciAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMiA1YTIgMiAwIDAxMi0yaDEyYTIgMiAwIDAxMiAydjJhMiAyIDAgMDEtMiAySDRhMiAyIDAgMDEtMi0yVjV6bTE0IDFhMSAxIDAgMTEtMiAwIDEgMSAwIDAxMiAwek0yIDEzYTIgMiAwIDAxMi0yaDEyYTIgMiAwIDAxMiAydjJhMiAyIDAgMDEtMiAySDRhMiAyIDAgMDEtMi0ydi0yem0xNCAxYTEgMSAwIDExLTIgMCAxIDEgMCAwMTIgMHpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpU2hhcmUgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJkXCI6XCJNMTUgOGEzIDMgMCAxMC0yLjk3Ny0yLjYzbC00Ljk0IDIuNDdhMyAzIDAgMTAwIDQuMzE5bDQuOTQgMi40N2EzIDMgMCAxMC44OTUtMS43ODlsLTQuOTQtMi40N2EzLjAyNyAzLjAyNyAwIDAwMC0uNzRsNC45NC0yLjQ3QzEzLjQ1NiA3LjY4IDE0LjE5IDggMTUgOHpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlTaGllbGRDaGVjayAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMi4xNjYgNC45OTlBMTEuOTU0IDExLjk1NCAwIDAwMTAgMS45NDQgMTEuOTU0IDExLjk1NCAwIDAwMTcuODM0IDVjLjExLjY1LjE2NiAxLjMyLjE2NiAyLjAwMSAwIDUuMjI1LTMuMzQgOS42Ny04IDExLjMxN0M1LjM0IDE2LjY3IDIgMTIuMjI1IDIgN2MwLS42ODIuMDU3LTEuMzUuMTY2LTIuMDAxem0xMS41NDEgMy43MDhhMSAxIDAgMDAtMS40MTQtMS40MTRMOSAxMC41ODYgNy43MDcgOS4yOTNhMSAxIDAgMDAtMS40MTQgMS40MTRsMiAyYTEgMSAwIDAwMS40MTQgMGw0LTR6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaVNoaWVsZEV4Y2xhbWF0aW9uIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0xMCAxLjk0NEExMS45NTQgMTEuOTU0IDAgMDEyLjE2NiA1QzIuMDU2IDUuNjQ5IDIgNi4zMTkgMiA3YzAgNS4yMjUgMy4zNCA5LjY3IDggMTEuMzE3QzE0LjY2IDE2LjY3IDE4IDEyLjIyNSAxOCA3YzAtLjY4Mi0uMDU3LTEuMzUtLjE2Ni0yLjAwMUExMS45NTQgMTEuOTU0IDAgMDExMCAxLjk0NHpNMTEgMTRhMSAxIDAgMTEtMiAwIDEgMSAwIDAxMiAwem0wLTdhMSAxIDAgMTAtMiAwdjNhMSAxIDAgMTAyIDBWN3pcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpU2hvcHBpbmdCYWcgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTEwIDJhNCA0IDAgMDAtNCA0djFINWExIDEgMCAwMC0uOTk0Ljg5bC0xIDlBMSAxIDAgMDA0IDE4aDEyYTEgMSAwIDAwLjk5NC0xLjExbC0xLTlBMSAxIDAgMDAxNSA3aC0xVjZhNCA0IDAgMDAtNC00em0yIDVWNmEyIDIgMCAxMC00IDB2MWg0em0tNiAzYTEgMSAwIDExMiAwIDEgMSAwIDAxLTIgMHptNy0xYTEgMSAwIDEwMCAyIDEgMSAwIDAwMC0yelwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlTaG9wcGluZ0NhcnQgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJkXCI6XCJNMyAxYTEgMSAwIDAwMCAyaDEuMjJsLjMwNSAxLjIyMmEuOTk3Ljk5NyAwIDAwLjAxLjA0MmwxLjM1OCA1LjQzLS44OTMuODkyQzMuNzQgMTEuODQ2IDQuNjMyIDE0IDYuNDE0IDE0SDE1YTEgMSAwIDAwMC0ySDYuNDE0bDEtMUgxNGExIDEgMCAwMC44OTQtLjU1M2wzLTZBMSAxIDAgMDAxNyAzSDYuMjhsLS4zMS0xLjI0M0ExIDEgMCAwMDUgMUgzek0xNiAxNi41YTEuNSAxLjUgMCAxMS0zIDAgMS41IDEuNSAwIDAxMyAwek02LjUgMThhMS41IDEuNSAwIDEwMC0zIDEuNSAxLjUgMCAwMDAgM3pcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlTb3J0QXNjZW5kaW5nIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZFwiOlwiTTMgM2ExIDEgMCAwMDAgMmgxMWExIDEgMCAxMDAtMkgzek0zIDdhMSAxIDAgMDAwIDJoNWExIDEgMCAwMDAtMkgzek0zIDExYTEgMSAwIDEwMCAyaDRhMSAxIDAgMTAwLTJIM3pNMTMgMTZhMSAxIDAgMTAyIDB2LTUuNTg2bDEuMjkzIDEuMjkzYTEgMSAwIDAwMS40MTQtMS40MTRsLTMtM2ExIDEgMCAwMC0xLjQxNCAwbC0zIDNhMSAxIDAgMTAxLjQxNCAxLjQxNEwxMyAxMC40MTRWMTZ6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpU29ydERlc2NlbmRpbmcgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJkXCI6XCJNMyAzYTEgMSAwIDAwMCAyaDExYTEgMSAwIDEwMC0ySDN6TTMgN2ExIDEgMCAwMDAgMmg3YTEgMSAwIDEwMC0ySDN6TTMgMTFhMSAxIDAgMTAwIDJoNGExIDEgMCAxMDAtMkgzek0xNSA4YTEgMSAwIDEwLTIgMHY1LjU4NmwtMS4yOTMtMS4yOTNhMSAxIDAgMDAtMS40MTQgMS40MTRsMyAzYTEgMSAwIDAwMS40MTQgMGwzLTNhMSAxIDAgMDAtMS40MTQtMS40MTRMMTUgMTMuNTg2Vjh6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpU3BhcmtsZXMgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTUgMmExIDEgMCAwMTEgMXYxaDFhMSAxIDAgMDEwIDJINnYxYTEgMSAwIDAxLTIgMFY2SDNhMSAxIDAgMDEwLTJoMVYzYTEgMSAwIDAxMS0xem0wIDEwYTEgMSAwIDAxMSAxdjFoMWExIDEgMCAxMTAgMkg2djFhMSAxIDAgMTEtMiAwdi0xSDNhMSAxIDAgMTEwLTJoMXYtMWExIDEgMCAwMTEtMXpNMTIgMmExIDEgMCAwMS45NjcuNzQ0TDE0LjE0NiA3LjIgMTcuNSA5LjEzNGExIDEgMCAwMTAgMS43MzJsLTMuMzU0IDEuOTM1LTEuMTggNC40NTVhMSAxIDAgMDEtMS45MzMgMEw5Ljg1NCAxMi44IDYuNSAxMC44NjZhMSAxIDAgMDEwLTEuNzMybDMuMzU0LTEuOTM1IDEuMTgtNC40NTVBMSAxIDAgMDExMiAyelwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlTcGVha2VycGhvbmUgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTE4IDNhMSAxIDAgMDAtMS40NDctLjg5NEw4Ljc2MyA2SDVhMyAzIDAgMDAwIDZoLjI4bDEuNzcxIDUuMzE2QTEgMSAwIDAwOCAxOGgxYTEgMSAwIDAwMS0xdi00LjM4Mmw2LjU1MyAzLjI3NkExIDEgMCAwMDE4IDE1VjN6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaVN0YXIgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJkXCI6XCJNOS4wNDkgMi45MjdjLjMtLjkyMSAxLjYwMy0uOTIxIDEuOTAyIDBsMS4wNyAzLjI5MmExIDEgMCAwMC45NS42OWgzLjQ2MmMuOTY5IDAgMS4zNzEgMS4yNC41ODggMS44MWwtMi44IDIuMDM0YTEgMSAwIDAwLS4zNjQgMS4xMThsMS4wNyAzLjI5MmMuMy45MjEtLjc1NSAxLjY4OC0xLjU0IDEuMTE4bC0yLjgtMi4wMzRhMSAxIDAgMDAtMS4xNzUgMGwtMi44IDIuMDM0Yy0uNzg0LjU3LTEuODM4LS4xOTctMS41MzktMS4xMThsMS4wNy0zLjI5MmExIDEgMCAwMC0uMzY0LTEuMTE4TDIuOTggOC43MmMtLjc4My0uNTctLjM4LTEuODEuNTg4LTEuODFoMy40NjFhMSAxIDAgMDAuOTUxLS42OWwxLjA3LTMuMjkyelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaVN0YXR1c09mZmxpbmUgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJkXCI6XCJNMy43MDcgMi4yOTNhMSAxIDAgMDAtMS40MTQgMS40MTRsNi45MjEgNi45MjJjLjA1LjA2Mi4xMDUuMTE4LjE2OC4xNjdsNi45MSA2LjkxMWExIDEgMCAwMDEuNDE1LTEuNDE0bC0uNjc1LS42NzVhOS4wMDEgOS4wMDEgMCAwMC0uNjY4LTExLjk4MkExIDEgMCAxMDE0Ljk1IDUuMDVhNy4wMDIgNy4wMDIgMCAwMS42NTcgOS4xNDNsLTEuNDM1LTEuNDM1YTUuMDAyIDUuMDAyIDAgMDAtLjYzNi02LjI5NEExIDEgMCAwMDEyLjEyIDcuODhjLjkyNC45MjMgMS4xMiAyLjMuNTg3IDMuNDE1bC0xLjk5Mi0xLjk5MmEuOTIyLjkyMiAwIDAwLS4wMTgtLjAxOGwtNi45OS02Ljk5MXpNMy4yMzggOC4xODdhMSAxIDAgMDAtMS45MzMtLjUxNmMtLjggMy0uMDI1IDYuMzM2IDIuMzMxIDguNjkzYTEgMSAwIDAwMS40MTQtMS40MTUgNi45OTcgNi45OTcgMCAwMS0xLjgxMi02Ljc2MnpNNy40IDExLjVhMSAxIDAgMTAtMS43MyAxYy4yMTQuMzcxLjQ4LjcyLjc5NSAxLjAzNWExIDEgMCAwMDEuNDE0LTEuNDE0Yy0uMTkxLS4xOTEtLjM1LS40LS40NzgtLjYyMnpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlTdGF0dXNPbmxpbmUgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTUuMDUgMy42MzZhMSAxIDAgMDEwIDEuNDE0IDcgNyAwIDAwMCA5LjkgMSAxIDAgMTEtMS40MTQgMS40MTQgOSA5IDAgMDEwLTEyLjcyOCAxIDEgMCAwMTEuNDE0IDB6bTkuOSAwYTEgMSAwIDAxMS40MTQgMCA5IDkgMCAwMTAgMTIuNzI4IDEgMSAwIDExLTEuNDE0LTEuNDE0IDcgNyAwIDAwMC05LjkgMSAxIDAgMDEwLTEuNDE0ek03Ljg3OSA2LjQ2NGExIDEgMCAwMTAgMS40MTQgMyAzIDAgMDAwIDQuMjQzIDEgMSAwIDExLTEuNDE1IDEuNDE0IDUgNSAwIDAxMC03LjA3IDEgMSAwIDAxMS40MTUgMHptNC4yNDIgMGExIDEgMCAwMTEuNDE1IDAgNSA1IDAgMDEwIDcuMDcyIDEgMSAwIDAxLTEuNDE1LTEuNDE1IDMgMyAwIDAwMC00LjI0MiAxIDEgMCAwMTAtMS40MTV6TTEwIDlhMSAxIDAgMDExIDF2LjAxYTEgMSAwIDExLTIgMFYxMGExIDEgMCAwMTEtMXpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpU3RvcCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMTAgMThhOCA4IDAgMTAwLTE2IDggOCAwIDAwMCAxNnpNOCA3YTEgMSAwIDAwLTEgMXY0YTEgMSAwIDAwMSAxaDRhMSAxIDAgMDAxLTFWOGExIDEgMCAwMC0xLTFIOHpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpU3VuIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0xMCAyYTEgMSAwIDAxMSAxdjFhMSAxIDAgMTEtMiAwVjNhMSAxIDAgMDExLTF6bTQgOGE0IDQgMCAxMS04IDAgNCA0IDAgMDE4IDB6bS0uNDY0IDQuOTVsLjcwNy43MDdhMSAxIDAgMDAxLjQxNC0xLjQxNGwtLjcwNy0uNzA3YTEgMSAwIDAwLTEuNDE0IDEuNDE0em0yLjEyLTEwLjYwN2ExIDEgMCAwMTAgMS40MTRsLS43MDYuNzA3YTEgMSAwIDExLTEuNDE0LTEuNDE0bC43MDctLjcwN2ExIDEgMCAwMTEuNDE0IDB6TTE3IDExYTEgMSAwIDEwMC0yaC0xYTEgMSAwIDEwMCAyaDF6bS03IDRhMSAxIDAgMDExIDF2MWExIDEgMCAxMS0yIDB2LTFhMSAxIDAgMDExLTF6TTUuMDUgNi40NjRBMSAxIDAgMTA2LjQ2NSA1LjA1bC0uNzA4LS43MDdhMSAxIDAgMDAtMS40MTQgMS40MTRsLjcwNy43MDd6bTEuNDE0IDguNDg2bC0uNzA3LjcwN2ExIDEgMCAwMS0xLjQxNC0xLjQxNGwuNzA3LS43MDdhMSAxIDAgMDExLjQxNCAxLjQxNHpNNCAxMWExIDEgMCAxMDAtMkgzYTEgMSAwIDAwMCAyaDF6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaVN1cHBvcnQgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTE4IDEwYTggOCAwIDExLTE2IDAgOCA4IDAgMDExNiAwem0tMiAwYzAgLjk5My0uMjQxIDEuOTI5LS42NjggMi43NTRsLTEuNTI0LTEuNTI1YTMuOTk3IDMuOTk3IDAgMDAuMDc4LTIuMTgzbDEuNTYyLTEuNTYyQzE1LjgwMiA4LjI0OSAxNiA5LjEgMTYgMTB6bS01LjE2NSAzLjkxM2wxLjU4IDEuNThBNS45OCA1Ljk4IDAgMDExMCAxNmE1Ljk3NiA1Ljk3NiAwIDAxLTIuNTE2LS41NTJsMS41NjItMS41NjJhNC4wMDYgNC4wMDYgMCAwMDEuNzg5LjAyN3ptLTQuNjc3LTIuNzk2YTQuMDAyIDQuMDAyIDAgMDEtLjA0MS0yLjA4bC0uMDguMDgtMS41My0xLjUzM0E1Ljk4IDUuOTggMCAwMDQgMTBjMCAuOTU0LjIyMyAxLjg1Ni42MTkgMi42NTdsMS41NC0xLjU0em0xLjA4OC02LjQ1QTUuOTc0IDUuOTc0IDAgMDExMCA0Yy45NTQgMCAxLjg1Ni4yMjMgMi42NTcuNjE5bC0xLjU0IDEuNTRhNC4wMDIgNC4wMDIgMCAwMC0yLjM0Ni4wMzNMNy4yNDYgNC42Njh6TTEyIDEwYTIgMiAwIDExLTQgMCAyIDIgMCAwMTQgMHpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpU3dpdGNoSG9yaXpvbnRhbCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImRcIjpcIk04IDVhMSAxIDAgMTAwIDJoNS41ODZsLTEuMjkzIDEuMjkzYTEgMSAwIDAwMS40MTQgMS40MTRsMy0zYTEgMSAwIDAwMC0xLjQxNGwtMy0zYTEgMSAwIDEwLTEuNDE0IDEuNDE0TDEzLjU4NiA1SDh6TTEyIDE1YTEgMSAwIDEwMC0ySDYuNDE0bDEuMjkzLTEuMjkzYTEgMSAwIDEwLTEuNDE0LTEuNDE0bC0zIDNhMSAxIDAgMDAwIDEuNDE0bDMgM2ExIDEgMCAwMDEuNDE0LTEuNDE0TDYuNDE0IDE1SDEyelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaVN3aXRjaFZlcnRpY2FsIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZFwiOlwiTTUgMTJhMSAxIDAgMTAyIDBWNi40MTRsMS4yOTMgMS4yOTNhMSAxIDAgMDAxLjQxNC0xLjQxNGwtMy0zYTEgMSAwIDAwLTEuNDE0IDBsLTMgM2ExIDEgMCAwMDEuNDE0IDEuNDE0TDUgNi40MTRWMTJ6TTE1IDhhMSAxIDAgMTAtMiAwdjUuNTg2bC0xLjI5My0xLjI5M2ExIDEgMCAwMC0xLjQxNCAxLjQxNGwzIDNhMSAxIDAgMDAxLjQxNCAwbDMtM2ExIDEgMCAwMC0xLjQxNC0xLjQxNEwxNSAxMy41ODZWOHpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlUYWJsZSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNNSA0YTMgMyAwIDAwLTMgM3Y2YTMgMyAwIDAwMyAzaDEwYTMgMyAwIDAwMy0zVjdhMyAzIDAgMDAtMy0zSDV6bS0xIDl2LTFoNXYySDVhMSAxIDAgMDEtMS0xem03IDFoNGExIDEgMCAwMDEtMXYtMWgtNXYyem0wLTRoNVY4aC01djJ6TTkgOEg0djJoNVY4elwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlUYWcgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTE3LjcwNyA5LjI5M2ExIDEgMCAwMTAgMS40MTRsLTcgN2ExIDEgMCAwMS0xLjQxNCAwbC03LTdBLjk5Ny45OTcgMCAwMTIgMTBWNWEzIDMgMCAwMTMtM2g1Yy4yNTYgMCAuNTEyLjA5OC43MDcuMjkzbDcgN3pNNSA2YTEgMSAwIDEwMC0yIDEgMSAwIDAwMCAyelwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlUZW1wbGF0ZSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImRcIjpcIk0zIDRhMSAxIDAgMDExLTFoMTJhMSAxIDAgMDExIDF2MmExIDEgMCAwMS0xIDFINGExIDEgMCAwMS0xLTFWNHpNMyAxMGExIDEgMCAwMTEtMWg2YTEgMSAwIDAxMSAxdjZhMSAxIDAgMDEtMSAxSDRhMSAxIDAgMDEtMS0xdi02ek0xNCA5YTEgMSAwIDAwLTEgMXY2YTEgMSAwIDAwMSAxaDJhMSAxIDAgMDAxLTF2LTZhMSAxIDAgMDAtMS0xaC0yelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaVRlcm1pbmFsIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0yIDVhMiAyIDAgMDEyLTJoMTJhMiAyIDAgMDEyIDJ2MTBhMiAyIDAgMDEtMiAySDRhMiAyIDAgMDEtMi0yVjV6bTMuMjkzIDEuMjkzYTEgMSAwIDAxMS40MTQgMGwzIDNhMSAxIDAgMDEwIDEuNDE0bC0zIDNhMSAxIDAgMDEtMS40MTQtMS40MTRMNy41ODYgMTAgNS4yOTMgNy43MDdhMSAxIDAgMDEwLTEuNDE0ek0xMSAxMmExIDEgMCAxMDAgMmgzYTEgMSAwIDEwMC0yaC0zelwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlUaHVtYkRvd24gKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJkXCI6XCJNMTggOS41YTEuNSAxLjUgMCAxMS0zIDB2LTZhMS41IDEuNSAwIDAxMyAwdjZ6TTE0IDkuNjY3di01LjQzYTIgMiAwIDAwLTEuMTA1LTEuNzlsLS4wNS0uMDI1QTQgNCAwIDAwMTEuMDU1IDJINS42NGEyIDIgMCAwMC0xLjk2MiAxLjYwOGwtMS4yIDZBMiAyIDAgMDA0LjQ0IDEySDh2NGEyIDIgMCAwMDIgMiAxIDEgMCAwMDEtMXYtLjY2N2E0IDQgMCAwMS44LTIuNGwxLjQtMS44NjZhNCA0IDAgMDAuOC0yLjR6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpVGh1bWJVcCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImRcIjpcIk0yIDEwLjVhMS41IDEuNSAwIDExMyAwdjZhMS41IDEuNSAwIDAxLTMgMHYtNnpNNiAxMC4zMzN2NS40M2EyIDIgMCAwMDEuMTA2IDEuNzlsLjA1LjAyNUE0IDQgMCAwMDguOTQzIDE4aDUuNDE2YTIgMiAwIDAwMS45NjItMS42MDhsMS4yLTZBMiAyIDAgMDAxNS41NiA4SDEyVjRhMiAyIDAgMDAtMi0yIDEgMSAwIDAwLTEgMXYuNjY3YTQgNCAwIDAxLS44IDIuNEw2LjggNy45MzNhNCA0IDAgMDAtLjggMi40elwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaVRpY2tldCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImRcIjpcIk0yIDZhMiAyIDAgMDEyLTJoMTJhMiAyIDAgMDEyIDJ2MmEyIDIgMCAxMDAgNHYyYTIgMiAwIDAxLTIgMkg0YTIgMiAwIDAxLTItMnYtMmEyIDIgMCAxMDAtNFY2elwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaVRyYW5zbGF0ZSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNNyAyYTEgMSAwIDAxMSAxdjFoM2ExIDEgMCAxMTAgMkg5LjU3OGExOC44NyAxOC44NyAwIDAxLTEuNzI0IDQuNzhjLjI5LjM1NC41OTYuNjk2LjkxNCAxLjAyNmExIDEgMCAxMS0xLjQ0IDEuMzg5Yy0uMTg4LS4xOTYtLjM3My0uMzk2LS41NTQtLjZhMTkuMDk4IDE5LjA5OCAwIDAxLTMuMTA3IDMuNTY3IDEgMSAwIDAxLTEuMzM0LTEuNDkgMTcuMDg3IDE3LjA4NyAwIDAwMy4xMy0zLjczMyAxOC45OTIgMTguOTkyIDAgMDEtMS40ODctMi40OTQgMSAxIDAgMTExLjc5LS44OWMuMjM0LjQ3LjQ4OS45MjguNzY0IDEuMzcyLjQxNy0uOTM0Ljc1Mi0xLjkxMy45OTctMi45MjdIM2ExIDEgMCAxMTAtMmgzVjNhMSAxIDAgMDExLTF6bTYgNmExIDEgMCAwMS44OTQuNTUzbDIuOTkxIDUuOTgyYS44NjkuODY5IDAgMDEuMDIuMDM3bC45OSAxLjk4YTEgMSAwIDExLTEuNzkuODk1TDE1LjM4MyAxNmgtNC43NjRsLS43MjQgMS40NDdhMSAxIDAgMTEtMS43ODgtLjg5NGwuOTktMS45OC4wMTktLjAzOCAyLjk5LTUuOTgyQTEgMSAwIDAxMTMgOHptLTEuMzgyIDZoMi43NjRMMTMgMTEuMjM2IDExLjYxOCAxNHpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpVHJhc2ggKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTkgMmExIDEgMCAwMC0uODk0LjU1M0w3LjM4MiA0SDRhMSAxIDAgMDAwIDJ2MTBhMiAyIDAgMDAyIDJoOGEyIDIgMCAwMDItMlY2YTEgMSAwIDEwMC0yaC0zLjM4MmwtLjcyNC0xLjQ0N0ExIDEgMCAwMDExIDJIOXpNNyA4YTEgMSAwIDAxMiAwdjZhMSAxIDAgMTEtMiAwVjh6bTUtMWExIDEgMCAwMC0xIDF2NmExIDEgMCAxMDIgMFY4YTEgMSAwIDAwLTEtMXpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpVHJlbmRpbmdEb3duIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0xMiAxM2ExIDEgMCAxMDAgMmg1YTEgMSAwIDAwMS0xVjlhMSAxIDAgMTAtMiAwdjIuNTg2bC00LjI5My00LjI5M2ExIDEgMCAwMC0xLjQxNCAwTDggOS41ODYgMy43MDcgNS4yOTNhMSAxIDAgMDAtMS40MTQgMS40MTRsNSA1YTEgMSAwIDAwMS40MTQgMEwxMSA5LjQxNCAxNC41ODYgMTNIMTJ6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaVRyZW5kaW5nVXAgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTEyIDdhMSAxIDAgMTEwLTJoNWExIDEgMCAwMTEgMXY1YTEgMSAwIDExLTIgMFY4LjQxNGwtNC4yOTMgNC4yOTNhMSAxIDAgMDEtMS40MTQgMEw4IDEwLjQxNGwtNC4yOTMgNC4yOTNhMSAxIDAgMDEtMS40MTQtMS40MTRsNS01YTEgMSAwIDAxMS40MTQgMEwxMSAxMC41ODYgMTQuNTg2IDdIMTJ6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaVRydWNrIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZFwiOlwiTTggMTYuNWExLjUgMS41IDAgMTEtMyAwIDEuNSAxLjUgMCAwMTMgMHpNMTUgMTYuNWExLjUgMS41IDAgMTEtMyAwIDEuNSAxLjUgMCAwMTMgMHpcIn19LHtcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImRcIjpcIk0zIDRhMSAxIDAgMDAtMSAxdjEwYTEgMSAwIDAwMSAxaDEuMDVhMi41IDIuNSAwIDAxNC45IDBIMTBhMSAxIDAgMDAxLTFWNWExIDEgMCAwMC0xLTFIM3pNMTQgN2ExIDEgMCAwMC0xIDF2Ni4wNUEyLjUgMi41IDAgMDExNS45NSAxNkgxN2ExIDEgMCAwMDEtMXYtNWExIDEgMCAwMC0uMjkzLS43MDdsLTItMkExIDEgMCAwMDE1IDdoLTF6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpVXBsb2FkIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0zIDE3YTEgMSAwIDAxMS0xaDEyYTEgMSAwIDExMCAySDRhMSAxIDAgMDEtMS0xek02LjI5MyA2LjcwN2ExIDEgMCAwMTAtMS40MTRsMy0zYTEgMSAwIDAxMS40MTQgMGwzIDNhMSAxIDAgMDEtMS40MTQgMS40MTRMMTEgNS40MTRWMTNhMSAxIDAgMTEtMiAwVjUuNDE0TDcuNzA3IDYuNzA3YTEgMSAwIDAxLTEuNDE0IDB6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaVVzZXJBZGQgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJkXCI6XCJNOCA5YTMgMyAwIDEwMC02IDMgMyAwIDAwMCA2ek04IDExYTYgNiAwIDAxNiA2SDJhNiA2IDAgMDE2LTZ6TTE2IDdhMSAxIDAgMTAtMiAwdjFoLTFhMSAxIDAgMTAwIDJoMXYxYTEgMSAwIDEwMiAwdi0xaDFhMSAxIDAgMTAwLTJoLTFWN3pcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlVc2VyQ2lyY2xlIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0xOCAxMGE4IDggMCAxMS0xNiAwIDggOCAwIDAxMTYgMHptLTYtM2EyIDIgMCAxMS00IDAgMiAyIDAgMDE0IDB6bS0yIDRhNSA1IDAgMDAtNC41NDYgMi45MTZBNS45ODYgNS45ODYgMCAwMDEwIDE2YTUuOTg2IDUuOTg2IDAgMDA0LjU0Ni0yLjA4NEE1IDUgMCAwMDEwIDExelwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlVc2VyR3JvdXAgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJkXCI6XCJNMTMgNmEzIDMgMCAxMS02IDAgMyAzIDAgMDE2IDB6TTE4IDhhMiAyIDAgMTEtNCAwIDIgMiAwIDAxNCAwek0xNCAxNWE0IDQgMCAwMC04IDB2M2g4di0zek02IDhhMiAyIDAgMTEtNCAwIDIgMiAwIDAxNCAwek0xNiAxOHYtM2E1Ljk3MiA1Ljk3MiAwIDAwLS43NS0yLjkwNkEzLjAwNSAzLjAwNSAwIDAxMTkgMTV2M2gtM3pNNC43NSAxMi4wOTRBNS45NzMgNS45NzMgMCAwMDQgMTV2M0gxdi0zYTMgMyAwIDAxMy43NS0yLjkwNnpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlVc2VyUmVtb3ZlIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZFwiOlwiTTExIDZhMyAzIDAgMTEtNiAwIDMgMyAwIDAxNiAwek0xNCAxN2E2IDYgMCAwMC0xMiAwaDEyek0xMyA4YTEgMSAwIDEwMCAyaDRhMSAxIDAgMTAwLTJoLTR6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpVXNlciAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMTAgOWEzIDMgMCAxMDAtNiAzIDMgMCAwMDAgNnptLTcgOWE3IDcgMCAxMTE0IDBIM3pcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpVXNlcnMgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJkXCI6XCJNOSA2YTMgMyAwIDExLTYgMCAzIDMgMCAwMTYgMHpNMTcgNmEzIDMgMCAxMS02IDAgMyAzIDAgMDE2IDB6TTEyLjkzIDE3Yy4wNDYtLjMyNy4wNy0uNjYuMDctMWE2Ljk3IDYuOTcgMCAwMC0xLjUtNC4zM0E1IDUgMCAwMTE5IDE2djFoLTYuMDd6TTYgMTFhNSA1IDAgMDE1IDV2MUgxdi0xYTUgNSAwIDAxNS01elwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaVZhcmlhYmxlIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk00LjY0OSAzLjA4NEExIDEgMCAwMTUuMTYzIDQuNCAxMy45NSAxMy45NSAwIDAwNCAxMGMwIDEuOTkzLjQxNiAzLjg4NiAxLjE2NCA1LjZhMSAxIDAgMDEtMS44MzIuOEExNS45NSAxNS45NSAwIDAxMiAxMGMwLTIuMjc0LjQ3NS00LjQ0IDEuMzMyLTYuNGExIDEgMCAwMTEuMzE3LS41MTZ6TTEyLjk2IDdhMyAzIDAgMDAtMi4zNDIgMS4xMjZsLS4zMjguNDEtLjExMS0uMjc5QTIgMiAwIDAwOC4zMjMgN0g4YTEgMSAwIDAwMCAyaC4zMjNsLjUzMiAxLjMzLTEuMDM1IDEuMjk1YTEgMSAwIDAxLS43ODEuMzc1SDdhMSAxIDAgMTAwIDJoLjAzOWEzIDMgMCAwMDIuMzQyLTEuMTI2bC4zMjgtLjQxLjExMS4yNzlBMiAyIDAgMDAxMS42NzcgMTRIMTJhMSAxIDAgMTAwLTJoLS4zMjNsLS41MzItMS4zMyAxLjAzNS0xLjI5NUExIDEgMCAwMTEyLjk2MSA5SDEzYTEgMSAwIDEwMC0yaC0uMDM5em0xLjg3NC0yLjZhMSAxIDAgMDExLjgzMy0uOEExNS45NSAxNS45NSAwIDAxMTggMTBjMCAyLjI3NC0uNDc1IDQuNDQtMS4zMzIgNi40YTEgMSAwIDExLTEuODMyLS44QTEzLjk0OSAxMy45NDkgMCAwMDE2IDEwYzAtMS45OTMtLjQxNi0zLjg4Ni0xLjE2NS01LjZ6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaVZpZGVvQ2FtZXJhIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZFwiOlwiTTIgNmEyIDIgMCAwMTItMmg2YTIgMiAwIDAxMiAydjhhMiAyIDAgMDEtMiAySDRhMiAyIDAgMDEtMi0yVjZ6TTE0LjU1MyA3LjEwNkExIDEgMCAwMDE0IDh2NGExIDEgMCAwMC41NTMuODk0bDIgMUExIDEgMCAwMDE4IDEzVjdhMSAxIDAgMDAtMS40NDctLjg5NGwtMiAxelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaVZpZXdCb2FyZHMgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJkXCI6XCJNMiA0YTEgMSAwIDAxMS0xaDJhMSAxIDAgMDExIDF2MTJhMSAxIDAgMDEtMSAxSDNhMSAxIDAgMDEtMS0xVjR6TTggNGExIDEgMCAwMTEtMWgyYTEgMSAwIDAxMSAxdjEyYTEgMSAwIDAxLTEgMUg5YTEgMSAwIDAxLTEtMVY0ek0xNSAzYTEgMSAwIDAwLTEgMXYxMmExIDEgMCAwMDEgMWgyYTEgMSAwIDAwMS0xVjRhMSAxIDAgMDAtMS0xaC0yelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaVZpZXdHcmlkQWRkIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZFwiOlwiTTUgM2EyIDIgMCAwMC0yIDJ2MmEyIDIgMCAwMDIgMmgyYTIgMiAwIDAwMi0yVjVhMiAyIDAgMDAtMi0ySDV6TTUgMTFhMiAyIDAgMDAtMiAydjJhMiAyIDAgMDAyIDJoMmEyIDIgMCAwMDItMnYtMmEyIDIgMCAwMC0yLTJINXpNMTEgNWEyIDIgMCAwMTItMmgyYTIgMiAwIDAxMiAydjJhMiAyIDAgMDEtMiAyaC0yYTIgMiAwIDAxLTItMlY1ek0xNCAxMWExIDEgMCAwMTEgMXYxaDFhMSAxIDAgMTEwIDJoLTF2MWExIDEgMCAxMS0yIDB2LTFoLTFhMSAxIDAgMTEwLTJoMXYtMWExIDEgMCAwMTEtMXpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlWaWV3R3JpZCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImRcIjpcIk01IDNhMiAyIDAgMDAtMiAydjJhMiAyIDAgMDAyIDJoMmEyIDIgMCAwMDItMlY1YTIgMiAwIDAwLTItMkg1ek01IDExYTIgMiAwIDAwLTIgMnYyYTIgMiAwIDAwMiAyaDJhMiAyIDAgMDAyLTJ2LTJhMiAyIDAgMDAtMi0ySDV6TTExIDVhMiAyIDAgMDEyLTJoMmEyIDIgMCAwMTIgMnYyYTIgMiAwIDAxLTIgMmgtMmEyIDIgMCAwMS0yLTJWNXpNMTEgMTNhMiAyIDAgMDEyLTJoMmEyIDIgMCAwMTIgMnYyYTIgMiAwIDAxLTIgMmgtMmEyIDIgMCAwMS0yLTJ2LTJ6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpVmlld0xpc3QgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTMgNGExIDEgMCAwMTEtMWgxMmExIDEgMCAxMTAgMkg0YTEgMSAwIDAxLTEtMXptMCA0YTEgMSAwIDAxMS0xaDEyYTEgMSAwIDExMCAySDRhMSAxIDAgMDEtMS0xem0wIDRhMSAxIDAgMDExLTFoMTJhMSAxIDAgMTEwIDJINGExIDEgMCAwMS0xLTF6bTAgNGExIDEgMCAwMTEtMWgxMmExIDEgMCAxMTAgMkg0YTEgMSAwIDAxLTEtMXpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpVm9sdW1lT2ZmIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk05LjM4MyAzLjA3NkExIDEgMCAwMTEwIDR2MTJhMSAxIDAgMDEtMS43MDcuNzA3TDQuNTg2IDEzSDJhMSAxIDAgMDEtMS0xVjhhMSAxIDAgMDExLTFoMi41ODZsMy43MDctMy43MDdhMSAxIDAgMDExLjA5LS4yMTd6TTEyLjI5MyA3LjI5M2ExIDEgMCAwMTEuNDE0IDBMMTUgOC41ODZsMS4yOTMtMS4yOTNhMSAxIDAgMTExLjQxNCAxLjQxNEwxNi40MTQgMTBsMS4yOTMgMS4yOTNhMSAxIDAgMDEtMS40MTQgMS40MTRMMTUgMTEuNDE0bC0xLjI5MyAxLjI5M2ExIDEgMCAwMS0xLjQxNC0xLjQxNEwxMy41ODYgMTBsLTEuMjkzLTEuMjkzYTEgMSAwIDAxMC0xLjQxNHpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpVm9sdW1lVXAgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTkuMzgzIDMuMDc2QTEgMSAwIDAxMTAgNHYxMmExIDEgMCAwMS0xLjcwNy43MDdMNC41ODYgMTNIMmExIDEgMCAwMS0xLTFWOGExIDEgMCAwMTEtMWgyLjU4NmwzLjcwNy0zLjcwN2ExIDEgMCAwMTEuMDktLjIxN3pNMTQuNjU3IDIuOTI5YTEgMSAwIDAxMS40MTQgMEE5Ljk3MiA5Ljk3MiAwIDAxMTkgMTBhOS45NzIgOS45NzIgMCAwMS0yLjkyOSA3LjA3MSAxIDEgMCAwMS0xLjQxNC0xLjQxNEE3Ljk3MSA3Ljk3MSAwIDAwMTcgMTBjMC0yLjIxLS44OTQtNC4yMDgtMi4zNDMtNS42NTdhMSAxIDAgMDEwLTEuNDE0em0tMi44MjkgMi44MjhhMSAxIDAgMDExLjQxNSAwQTUuOTgzIDUuOTgzIDAgMDExNSAxMGE1Ljk4NCA1Ljk4NCAwIDAxLTEuNzU3IDQuMjQzIDEgMSAwIDAxLTEuNDE1LTEuNDE1QTMuOTg0IDMuOTg0IDAgMDAxMyAxMGEzLjk4MyAzLjk4MyAwIDAwLTEuMTcyLTIuODI4IDEgMSAwIDAxMC0xLjQxNXpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpV2lmaSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJ2aWV3Qm94XCI6XCIwIDAgMjAgMjBcIixcImZpbGxcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMTcuNzc4IDguMjIyYy00LjI5Ni00LjI5Ni0xMS4yNi00LjI5Ni0xNS41NTYgMEExIDEgMCAwMS44MDggNi44MDhjNS4wNzYtNS4wNzcgMTMuMzA4LTUuMDc3IDE4LjM4NCAwYTEgMSAwIDAxLTEuNDE0IDEuNDE0ek0xNC45NSAxMS4wNWE3IDcgMCAwMC05LjkgMCAxIDEgMCAwMS0xLjQxNC0xLjQxNCA5IDkgMCAwMTEyLjcyOCAwIDEgMSAwIDAxLTEuNDE0IDEuNDE0ek0xMi4xMiAxMy44OGEzIDMgMCAwMC00LjI0MiAwIDEgMSAwIDAxLTEuNDE1LTEuNDE1IDUgNSAwIDAxNy4wNzIgMCAxIDEgMCAwMS0xLjQxNSAxLjQxNXpNOSAxNmExIDEgMCAwMTEtMWguMDFhMSAxIDAgMTEwIDJIMTBhMSAxIDAgMDEtMS0xelwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlYQ2lyY2xlIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZmlsbFJ1bGVcIjpcImV2ZW5vZGRcIixcImRcIjpcIk0xMCAxOGE4IDggMCAxMDAtMTYgOCA4IDAgMDAwIDE2ek04LjcwNyA3LjI5M2ExIDEgMCAwMC0xLjQxNCAxLjQxNEw4LjU4NiAxMGwtMS4yOTMgMS4yOTNhMSAxIDAgMTAxLjQxNCAxLjQxNEwxMCAxMS40MTRsMS4yOTMgMS4yOTNhMSAxIDAgMDAxLjQxNC0xLjQxNEwxMS40MTQgMTBsMS4yOTMtMS4yOTNhMSAxIDAgMDAtMS40MTQtMS40MTRMMTAgOC41ODYgOC43MDcgNy4yOTN6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaVggKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTQuMjkzIDQuMjkzYTEgMSAwIDAxMS40MTQgMEwxMCA4LjU4Nmw0LjI5My00LjI5M2ExIDEgMCAxMTEuNDE0IDEuNDE0TDExLjQxNCAxMGw0LjI5MyA0LjI5M2ExIDEgMCAwMS0xLjQxNCAxLjQxNEwxMCAxMS40MTRsLTQuMjkzIDQuMjkzYTEgMSAwIDAxLTEuNDE0LTEuNDE0TDguNTg2IDEwIDQuMjkzIDUuNzA3YTEgMSAwIDAxMC0xLjQxNHpcIixcImNsaXBSdWxlXCI6XCJldmVub2RkXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpWm9vbUluIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcInZpZXdCb3hcIjpcIjAgMCAyMCAyMFwiLFwiZmlsbFwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZFwiOlwiTTUgOGExIDEgMCAwMTEtMWgxVjZhMSAxIDAgMDEyIDB2MWgxYTEgMSAwIDExMCAySDl2MWExIDEgMCAxMS0yIDBWOUg2YTEgMSAwIDAxLTEtMXpcIn19LHtcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNMiA4YTYgNiAwIDExMTAuODkgMy40NzZsNC44MTcgNC44MTdhMSAxIDAgMDEtMS40MTQgMS40MTRsLTQuODE2LTQuODE2QTYgNiAwIDAxMiA4em02LTRhNCA0IDAgMTAwIDggNCA0IDAgMDAwLTh6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaVpvb21PdXQgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1widmlld0JveFwiOlwiMCAwIDIwIDIwXCIsXCJmaWxsXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJmaWxsUnVsZVwiOlwiZXZlbm9kZFwiLFwiZFwiOlwiTTggNGE0IDQgMCAxMDAgOCA0IDQgMCAwMDAtOHpNMiA4YTYgNiAwIDExMTAuODkgMy40NzZsNC44MTcgNC44MTdhMSAxIDAgMDEtMS40MTQgMS40MTRsLTQuODE2LTQuODE2QTYgNiAwIDAxMiA4elwiLFwiY2xpcFJ1bGVcIjpcImV2ZW5vZGRcIn19LHtcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImZpbGxSdWxlXCI6XCJldmVub2RkXCIsXCJkXCI6XCJNNSA4YTEgMSAwIDAxMS0xaDRhMSAxIDAgMTEwIDJINmExIDEgMCAwMS0xLTF6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVBY2FkZW1pY0NhcCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wiZFwiOlwiTTEyIDE0bDktNS05LTUtOSA1IDkgNXpcIn19LHtcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcImRcIjpcIk0xMiAxNGw2LjE2LTMuNDIyYTEyLjA4MyAxMi4wODMgMCAwMS42NjUgNi40NzlBMTEuOTUyIDExLjk1MiAwIDAwMTIgMjAuMDU1YTExLjk1MiAxMS45NTIgMCAwMC02LjgyNC0yLjk5OCAxMi4wNzggMTIuMDc4IDAgMDEuNjY1LTYuNDc5TDEyIDE0elwifX0se1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0xMiAxNGw5LTUtOS01LTkgNSA5IDV6bTAgMGw2LjE2LTMuNDIyYTEyLjA4MyAxMi4wODMgMCAwMS42NjUgNi40NzlBMTEuOTUyIDExLjk1MiAwIDAwMTIgMjAuMDU1YTExLjk1MiAxMS45NTIgMCAwMC02LjgyNC0yLjk5OCAxMi4wNzggMTIuMDc4IDAgMDEuNjY1LTYuNDc5TDEyIDE0em0tNCA2di03LjVsNC0yLjIyMlwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVBZGp1c3RtZW50cyAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0xMiA2VjRtMCAyYTIgMiAwIDEwMCA0bTAtNGEyIDIgMCAxMTAgNG0tNiA4YTIgMiAwIDEwMC00bTAgNGEyIDIgMCAxMTAtNG0wIDR2Mm0wLTZWNG02IDZ2MTBtNi0yYTIgMiAwIDEwMC00bTAgNGEyIDIgMCAxMTAtNG0wIDR2Mm0wLTZWNFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVBbm5vdGF0aW9uIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTcgOGgxME03IDEyaDRtMSA4bC00LTRINWEyIDIgMCAwMS0yLTJWNmEyIDIgMCAwMTItMmgxNGEyIDIgMCAwMTIgMnY4YTIgMiAwIDAxLTIgMmgtM2wtNCA0elwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVBcmNoaXZlIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTUgOGgxNE01IDhhMiAyIDAgMTEwLTRoMTRhMiAyIDAgMTEwIDRNNSA4djEwYTIgMiAwIDAwMiAyaDEwYTIgMiAwIDAwMi0yVjhtLTkgNGg0XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZUFycm93Q2lyY2xlRG93biAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0xNSAxM2wtMyAzbTAgMGwtMy0zbTMgM1Y4bTAgMTNhOSA5IDAgMTEwLTE4IDkgOSAwIDAxMCAxOHpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lQXJyb3dDaXJjbGVMZWZ0IChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTExIDE1bC0zLTNtMCAwbDMtM20tMyAzaDhNMyAxMmE5IDkgMCAxMTE4IDAgOSA5IDAgMDEtMTggMHpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lQXJyb3dDaXJjbGVSaWdodCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0xMyA5bDMgM20wIDBsLTMgM20zLTNIOG0xMyAwYTkgOSAwIDExLTE4IDAgOSA5IDAgMDExOCAwelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVBcnJvd0NpcmNsZVVwIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTkgMTFsMy0zbTAgMGwzIDNtLTMtM3Y4bTAtMTNhOSA5IDAgMTEwIDE4IDkgOSAwIDAxMC0xOHpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lQXJyb3dEb3duIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTE5IDE0bC03IDdtMCAwbC03LTdtNyA3VjNcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lQXJyb3dMZWZ0IChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTEwIDE5bC03LTdtMCAwbDctN20tNyA3aDE4XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZUFycm93TmFycm93RG93biAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0xNiAxN2wtNCA0bTAgMGwtNC00bTQgNFYzXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZUFycm93TmFycm93TGVmdCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk03IDE2bC00LTRtMCAwbDQtNG0tNCA0aDE4XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZUFycm93TmFycm93UmlnaHQgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMTcgOGw0IDRtMCAwbC00IDRtNC00SDNcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lQXJyb3dOYXJyb3dVcCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk04IDdsNC00bTAgMGw0IDRtLTQtNHYxOFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVBcnJvd1JpZ2h0IChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTE0IDVsNyA3bTAgMGwtNyA3bTctN0gzXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZUFycm93VXAgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNNSAxMGw3LTdtMCAwbDcgN20tNy03djE4XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZUFycm93c0V4cGFuZCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk00IDhWNG0wIDBoNE00IDRsNSA1bTExLTFWNG0wIDBoLTRtNCAwbC01IDVNNCAxNnY0bTAgMGg0bS00IDBsNS01bTExIDVsLTUtNW01IDV2LTRtMCA0aC00XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZUF0U3ltYm9sIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTE2IDEyYTQgNCAwIDEwLTggMCA0IDQgMCAwMDggMHptMCAwdjEuNWEyLjUgMi41IDAgMDA1IDBWMTJhOSA5IDAgMTAtOSA5bTQuNS0xLjIwNmE4Ljk1OSA4Ljk1OSAwIDAxLTQuNSAxLjIwN1wifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVCYWNrc3BhY2UgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMTIgMTRsMi0ybTAgMGwyLTJtLTIgMmwtMi0ybTIgMmwyIDJNMyAxMmw2LjQxNCA2LjQxNGEyIDIgMCAwMDEuNDE0LjU4NkgxOWEyIDIgMCAwMDItMlY3YTIgMiAwIDAwLTItMmgtOC4xNzJhMiAyIDAgMDAtMS40MTQuNTg2TDMgMTJ6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZUJhZGdlQ2hlY2sgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNOSAxMmwyIDIgNC00TTcuODM1IDQuNjk3YTMuNDIgMy40MiAwIDAwMS45NDYtLjgwNiAzLjQyIDMuNDIgMCAwMTQuNDM4IDAgMy40MiAzLjQyIDAgMDAxLjk0Ni44MDYgMy40MiAzLjQyIDAgMDEzLjEzOCAzLjEzOCAzLjQyIDMuNDIgMCAwMC44MDYgMS45NDYgMy40MiAzLjQyIDAgMDEwIDQuNDM4IDMuNDIgMy40MiAwIDAwLS44MDYgMS45NDYgMy40MiAzLjQyIDAgMDEtMy4xMzggMy4xMzggMy40MiAzLjQyIDAgMDAtMS45NDYuODA2IDMuNDIgMy40MiAwIDAxLTQuNDM4IDAgMy40MiAzLjQyIDAgMDAtMS45NDYtLjgwNiAzLjQyIDMuNDIgMCAwMS0zLjEzOC0zLjEzOCAzLjQyIDMuNDIgMCAwMC0uODA2LTEuOTQ2IDMuNDIgMy40MiAwIDAxMC00LjQzOCAzLjQyIDMuNDIgMCAwMC44MDYtMS45NDYgMy40MiAzLjQyIDAgMDEzLjEzOC0zLjEzOHpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lQmFuIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTE4LjM2NCAxOC4zNjRBOSA5IDAgMDA1LjYzNiA1LjYzNm0xMi43MjggMTIuNzI4QTkgOSAwIDAxNS42MzYgNS42MzZtMTIuNzI4IDEyLjcyOEw1LjYzNiA1LjYzNlwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVCZWFrZXIgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMTkuNDI4IDE1LjQyOGEyIDIgMCAwMC0xLjAyMi0uNTQ3bC0yLjM4Ny0uNDc3YTYgNiAwIDAwLTMuODYuNTE3bC0uMzE4LjE1OGE2IDYgMCAwMS0zLjg2LjUxN0w2LjA1IDE1LjIxYTIgMiAwIDAwLTEuODA2LjU0N004IDRoOGwtMSAxdjUuMTcyYTIgMiAwIDAwLjU4NiAxLjQxNGw1IDVjMS4yNiAxLjI2LjM2NyAzLjQxNC0xLjQxNSAzLjQxNEg0LjgyOGMtMS43ODIgMC0yLjY3NC0yLjE1NC0xLjQxNC0zLjQxNGw1LTVBMiAyIDAgMDA5IDEwLjE3MlY1TDggNHpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lQmVsbCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0xNSAxN2g1bC0xLjQwNS0xLjQwNUEyLjAzMiAyLjAzMiAwIDAxMTggMTQuMTU4VjExYTYuMDAyIDYuMDAyIDAgMDAtNC01LjY1OVY1YTIgMiAwIDEwLTQgMHYuMzQxQzcuNjcgNi4xNjUgNiA4LjM4OCA2IDExdjMuMTU5YzAgLjUzOC0uMjE0IDEuMDU1LS41OTUgMS40MzZMNCAxN2g1bTYgMHYxYTMgMyAwIDExLTYgMHYtMW02IDBIOVwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVCb29rT3BlbiAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0xMiA2LjI1M3YxM20wLTEzQzEwLjgzMiA1LjQ3NyA5LjI0NiA1IDcuNSA1UzQuMTY4IDUuNDc3IDMgNi4yNTN2MTNDNC4xNjggMTguNDc3IDUuNzU0IDE4IDcuNSAxOHMzLjMzMi40NzcgNC41IDEuMjUzbTAtMTNDMTMuMTY4IDUuNDc3IDE0Ljc1NCA1IDE2LjUgNWMxLjc0NyAwIDMuMzMyLjQ3NyA0LjUgMS4yNTN2MTNDMTkuODMyIDE4LjQ3NyAxOC4yNDcgMTggMTYuNSAxOGMtMS43NDYgMC0zLjMzMi40NzctNC41IDEuMjUzXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZUJvb2ttYXJrQWx0IChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTE2IDR2MTJsLTQtMi00IDJWNE02IDIwaDEyYTIgMiAwIDAwMi0yVjZhMiAyIDAgMDAtMi0ySDZhMiAyIDAgMDAtMiAydjEyYTIgMiAwIDAwMiAyelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVCb29rbWFyayAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk01IDVhMiAyIDAgMDEyLTJoMTBhMiAyIDAgMDEyIDJ2MTZsLTctMy41TDUgMjFWNXpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lQnJpZWZjYXNlIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTIxIDEzLjI1NUEyMy45MzEgMjMuOTMxIDAgMDExMiAxNWMtMy4xODMgMC02LjIyLS42Mi05LTEuNzQ1TTE2IDZWNGEyIDIgMCAwMC0yLTJoLTRhMiAyIDAgMDAtMiAydjJtNCA2aC4wMU01IDIwaDE0YTIgMiAwIDAwMi0yVjhhMiAyIDAgMDAtMi0ySDVhMiAyIDAgMDAtMiAydjEwYTIgMiAwIDAwMiAyelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVDYWtlIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTIxIDE1LjU0NmMtLjUyMyAwLTEuMDQ2LjE1MS0xLjUuNDU0YTIuNzA0IDIuNzA0IDAgMDEtMyAwIDIuNzA0IDIuNzA0IDAgMDAtMyAwIDIuNzA0IDIuNzA0IDAgMDEtMyAwIDIuNzA0IDIuNzA0IDAgMDAtMyAwIDIuNzA0IDIuNzA0IDAgMDEtMyAwIDIuNzAxIDIuNzAxIDAgMDAtMS41LS40NTRNOSA2djJtMy0ydjJtMy0ydjJNOSAzaC4wMU0xMiAzaC4wMU0xNSAzaC4wMU0yMSAyMXYtN2EyIDIgMCAwMC0yLTJINWEyIDIgMCAwMC0yIDJ2N2gxOHptLTMtOXYtMmEyIDIgMCAwMC0yLTJIOGEyIDIgMCAwMC0yIDJ2MmgxMnpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lQ2FsY3VsYXRvciAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk05IDdoNm0wIDEwdi0zbS0zIDNoLjAxTTkgMTdoLjAxTTkgMTRoLjAxTTEyIDE0aC4wMU0xNSAxMWguMDFNMTIgMTFoLjAxTTkgMTFoLjAxTTcgMjFoMTBhMiAyIDAgMDAyLTJWNWEyIDIgMCAwMC0yLTJIN2EyIDIgMCAwMC0yIDJ2MTRhMiAyIDAgMDAyIDJ6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZUNhbGVuZGFyIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTggN1YzbTggNFYzbS05IDhoMTBNNSAyMWgxNGEyIDIgMCAwMDItMlY3YTIgMiAwIDAwLTItMkg1YTIgMiAwIDAwLTIgMnYxMmEyIDIgMCAwMDIgMnpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lQ2FtZXJhIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTMgOWEyIDIgMCAwMTItMmguOTNhMiAyIDAgMDAxLjY2NC0uODlsLjgxMi0xLjIyQTIgMiAwIDAxMTAuMDcgNGgzLjg2YTIgMiAwIDAxMS42NjQuODlsLjgxMiAxLjIyQTIgMiAwIDAwMTguMDcgN0gxOWEyIDIgMCAwMTIgMnY5YTIgMiAwIDAxLTIgMkg1YTIgMiAwIDAxLTItMlY5elwifX0se1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0xNSAxM2EzIDMgMCAxMS02IDAgMyAzIDAgMDE2IDB6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZUNhc2ggKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMTcgOVY3YTIgMiAwIDAwLTItMkg1YTIgMiAwIDAwLTIgMnY2YTIgMiAwIDAwMiAyaDJtMiA0aDEwYTIgMiAwIDAwMi0ydi02YTIgMiAwIDAwLTItMkg5YTIgMiAwIDAwLTIgMnY2YTIgMiAwIDAwMiAyem03LTVhMiAyIDAgMTEtNCAwIDIgMiAwIDAxNCAwelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVDaGFydEJhciAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk05IDE5di02YTIgMiAwIDAwLTItMkg1YTIgMiAwIDAwLTIgMnY2YTIgMiAwIDAwMiAyaDJhMiAyIDAgMDAyLTJ6bTAgMFY5YTIgMiAwIDAxMi0yaDJhMiAyIDAgMDEyIDJ2MTBtLTYgMGEyIDIgMCAwMDIgMmgyYTIgMiAwIDAwMi0ybTAgMFY1YTIgMiAwIDAxMi0yaDJhMiAyIDAgMDEyIDJ2MTRhMiAyIDAgMDEtMiAyaC0yYTIgMiAwIDAxLTItMnpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lQ2hhcnRQaWUgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMTEgMy4wNTVBOS4wMDEgOS4wMDEgMCAxMDIwLjk0NSAxM0gxMVYzLjA1NXpcIn19LHtcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMjAuNDg4IDlIMTVWMy41MTJBOS4wMjUgOS4wMjUgMCAwMTIwLjQ4OCA5elwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVDaGFydFNxdWFyZUJhciAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0xNiA4djhtLTQtNXY1bS00LTJ2Mm0tMiA0aDEyYTIgMiAwIDAwMi0yVjZhMiAyIDAgMDAtMi0ySDZhMiAyIDAgMDAtMiAydjEyYTIgMiAwIDAwMiAyelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVDaGF0QWx0MiAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0xNyA4aDJhMiAyIDAgMDEyIDJ2NmEyIDIgMCAwMS0yIDJoLTJ2NGwtNC00SDlhMS45OTQgMS45OTQgMCAwMS0xLjQxNC0uNTg2bTAgMEwxMSAxNGg0YTIgMiAwIDAwMi0yVjZhMiAyIDAgMDAtMi0ySDVhMiAyIDAgMDAtMiAydjZhMiAyIDAgMDAyIDJoMnY0bC41ODYtLjU4NnpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lQ2hhdEFsdCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk04IDEwaC4wMU0xMiAxMGguMDFNMTYgMTBoLjAxTTkgMTZINWEyIDIgMCAwMS0yLTJWNmEyIDIgMCAwMTItMmgxNGEyIDIgMCAwMTIgMnY4YTIgMiAwIDAxLTIgMmgtNWwtNSA1di01elwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVDaGF0IChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTggMTJoLjAxTTEyIDEyaC4wMU0xNiAxMmguMDFNMjEgMTJjMCA0LjQxOC00LjAzIDgtOSA4YTkuODYzIDkuODYzIDAgMDEtNC4yNTUtLjk0OUwzIDIwbDEuMzk1LTMuNzJDMy41MTIgMTUuMDQyIDMgMTMuNTc0IDMgMTJjMC00LjQxOCA0LjAzLTggOS04czkgMy41ODIgOSA4elwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVDaGVja0NpcmNsZSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk05IDEybDIgMiA0LTRtNiAyYTkgOSAwIDExLTE4IDAgOSA5IDAgMDExOCAwelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVDaGVjayAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk01IDEzbDQgNEwxOSA3XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZUNoZXZyb25Eb3VibGVEb3duIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTE5IDEzbC03IDctNy03bTE0LThsLTcgNy03LTdcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lQ2hldnJvbkRvdWJsZUxlZnQgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMTEgMTlsLTctNyA3LTdtOCAxNGwtNy03IDctN1wifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVDaGV2cm9uRG91YmxlUmlnaHQgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMTMgNWw3IDctNyA3TTUgNWw3IDctNyA3XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZUNoZXZyb25Eb3VibGVVcCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk01IDExbDctNyA3IDdNNSAxOWw3LTcgNyA3XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZUNoZXZyb25Eb3duIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTE5IDlsLTcgNy03LTdcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lQ2hldnJvbkxlZnQgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMTUgMTlsLTctNyA3LTdcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lQ2hldnJvblJpZ2h0IChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTkgNWw3IDctNyA3XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZUNoZXZyb25VcCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk01IDE1bDctNyA3IDdcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lQ2hpcCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk05IDN2Mm02LTJ2Mk05IDE5djJtNi0ydjJNNSA5SDNtMiA2SDNtMTgtNmgtMm0yIDZoLTJNNyAxOWgxMGEyIDIgMCAwMDItMlY3YTIgMiAwIDAwLTItMkg3YTIgMiAwIDAwLTIgMnYxMGEyIDIgMCAwMDIgMnpNOSA5aDZ2Nkg5Vjl6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZUNsaXBib2FyZENoZWNrIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTkgNUg3YTIgMiAwIDAwLTIgMnYxMmEyIDIgMCAwMDIgMmgxMGEyIDIgMCAwMDItMlY3YTIgMiAwIDAwLTItMmgtMk05IDVhMiAyIDAgMDAyIDJoMmEyIDIgMCAwMDItMk05IDVhMiAyIDAgMDEyLTJoMmEyIDIgMCAwMTIgMm0tNiA5bDIgMiA0LTRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lQ2xpcGJvYXJkQ29weSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk04IDVINmEyIDIgMCAwMC0yIDJ2MTJhMiAyIDAgMDAyIDJoMTBhMiAyIDAgMDAyLTJ2LTFNOCA1YTIgMiAwIDAwMiAyaDJhMiAyIDAgMDAyLTJNOCA1YTIgMiAwIDAxMi0yaDJhMiAyIDAgMDEyIDJtMCAwaDJhMiAyIDAgMDEyIDJ2M20yIDRIMTBtMCAwbDMtM20tMyAzbDMgM1wifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVDbGlwYm9hcmRMaXN0IChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTkgNUg3YTIgMiAwIDAwLTIgMnYxMmEyIDIgMCAwMDIgMmgxMGEyIDIgMCAwMDItMlY3YTIgMiAwIDAwLTItMmgtMk05IDVhMiAyIDAgMDAyIDJoMmEyIDIgMCAwMDItMk05IDVhMiAyIDAgMDEyLTJoMmEyIDIgMCAwMTIgMm0tMyA3aDNtLTMgNGgzbS02LTRoLjAxTTkgMTZoLjAxXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZUNsaXBib2FyZCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk05IDVIN2EyIDIgMCAwMC0yIDJ2MTJhMiAyIDAgMDAyIDJoMTBhMiAyIDAgMDAyLTJWN2EyIDIgMCAwMC0yLTJoLTJNOSA1YTIgMiAwIDAwMiAyaDJhMiAyIDAgMDAyLTJNOSA1YTIgMiAwIDAxMi0yaDJhMiAyIDAgMDEyIDJcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lQ2xvY2sgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMTIgOHY0bDMgM202LTNhOSA5IDAgMTEtMTggMCA5IDkgMCAwMTE4IDB6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZUNsb3VkRG93bmxvYWQgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNNyAxNmE0IDQgMCAwMS0uODgtNy45MDNBNSA1IDAgMTExNS45IDZMMTYgNmE1IDUgMCAwMTEgOS45TTkgMTlsMyAzbTAgMGwzLTNtLTMgM1YxMFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVDbG91ZFVwbG9hZCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk03IDE2YTQgNCAwIDAxLS44OC03LjkwM0E1IDUgMCAxMTE1LjkgNkwxNiA2YTUgNSAwIDAxMSA5LjlNMTUgMTNsLTMtM20wIDBsLTMgM20zLTN2MTJcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lQ2xvdWQgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMyAxNWE0IDQgMCAwMDQgNGg5YTUgNSAwIDEwLS4xLTkuOTk5IDUuMDAyIDUuMDAyIDAgMTAtOS43OCAyLjA5NkE0LjAwMSA0LjAwMSAwIDAwMyAxNXpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lQ29kZSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0xMCAyMGw0LTE2bTQgNGw0IDQtNCA0TTYgMTZsLTQtNCA0LTRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lQ29nIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTEwLjMyNSA0LjMxN2MuNDI2LTEuNzU2IDIuOTI0LTEuNzU2IDMuMzUgMGExLjcyNCAxLjcyNCAwIDAwMi41NzMgMS4wNjZjMS41NDMtLjk0IDMuMzEuODI2IDIuMzcgMi4zN2ExLjcyNCAxLjcyNCAwIDAwMS4wNjUgMi41NzJjMS43NTYuNDI2IDEuNzU2IDIuOTI0IDAgMy4zNWExLjcyNCAxLjcyNCAwIDAwLTEuMDY2IDIuNTczYy45NCAxLjU0My0uODI2IDMuMzEtMi4zNyAyLjM3YTEuNzI0IDEuNzI0IDAgMDAtMi41NzIgMS4wNjVjLS40MjYgMS43NTYtMi45MjQgMS43NTYtMy4zNSAwYTEuNzI0IDEuNzI0IDAgMDAtMi41NzMtMS4wNjZjLTEuNTQzLjk0LTMuMzEtLjgyNi0yLjM3LTIuMzdhMS43MjQgMS43MjQgMCAwMC0xLjA2NS0yLjU3MmMtMS43NTYtLjQyNi0xLjc1Ni0yLjkyNCAwLTMuMzVhMS43MjQgMS43MjQgMCAwMDEuMDY2LTIuNTczYy0uOTQtMS41NDMuODI2LTMuMzEgMi4zNy0yLjM3Ljk5Ni42MDggMi4yOTYuMDcgMi41NzItMS4wNjV6XCJ9fSx7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTE1IDEyYTMgMyAwIDExLTYgMCAzIDMgMCAwMTYgMHpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lQ29sbGVjdGlvbiAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0xOSAxMUg1bTE0IDBhMiAyIDAgMDEyIDJ2NmEyIDIgMCAwMS0yIDJINWEyIDIgMCAwMS0yLTJ2LTZhMiAyIDAgMDEyLTJtMTQgMFY5YTIgMiAwIDAwLTItMk01IDExVjlhMiAyIDAgMDEyLTJtMCAwVjVhMiAyIDAgMDEyLTJoNmEyIDIgMCAwMTIgMnYyTTcgN2gxMFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVDb2xvclN3YXRjaCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk03IDIxYTQgNCAwIDAxLTQtNFY1YTIgMiAwIDAxMi0yaDRhMiAyIDAgMDEyIDJ2MTJhNCA0IDAgMDEtNCA0em0wIDBoMTJhMiAyIDAgMDAyLTJ2LTRhMiAyIDAgMDAtMi0yaC0yLjM0M00xMSA3LjM0M2wxLjY1Ny0xLjY1N2EyIDIgMCAwMTIuODI4IDBsMi44MjkgMi44MjlhMiAyIDAgMDEwIDIuODI4bC04LjQ4NiA4LjQ4NU03IDE3aC4wMVwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVDcmVkaXRDYXJkIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTMgMTBoMThNNyAxNWgxbTQgMGgxbS03IDRoMTJhMyAzIDAgMDAzLTNWOGEzIDMgMCAwMC0zLTNINmEzIDMgMCAwMC0zIDN2OGEzIDMgMCAwMDMgM3pcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lQ3ViZVRyYW5zcGFyZW50IChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTE0IDEwbC0yIDFtMCAwbC0yLTFtMiAxdjIuNU0yMCA3bC0yIDFtMi0xbC0yLTFtMiAxdjIuNU0xNCA0bC0yLTEtMiAxTTQgN2wyLTFNNCA3bDIgMU00IDd2Mi41TTEyIDIxbC0yLTFtMiAxbDItMW0tMiAxdi0yLjVNNiAxOGwtMi0xdi0yLjVNMTggMThsMi0xdi0yLjVcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lQ3ViZSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0yMCA3bC04LTQtOCA0bTE2IDBsLTggNG04LTR2MTBsLTggNG0wLTEwTDQgN204IDR2MTBNNCA3djEwbDggNFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVDdXJyZW5jeUJhbmdsYWRlc2hpIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTExIDExVjlhMiAyIDAgMDAtMi0ybTIgNHY0YTIgMiAwIDEwNCAwdi0xbS00LTNIOW0yIDBoNG02IDFhOSA5IDAgMTEtMTggMCA5IDkgMCAwMTE4IDB6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZUN1cnJlbmN5RG9sbGFyIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTEyIDhjLTEuNjU3IDAtMyAuODk1LTMgMnMxLjM0MyAyIDMgMiAzIC44OTUgMyAyLTEuMzQzIDItMyAybTAtOGMxLjExIDAgMi4wOC40MDIgMi41OTkgMU0xMiA4VjdtMCAxdjhtMCAwdjFtMC0xYy0xLjExIDAtMi4wOC0uNDAyLTIuNTk5LTFNMjEgMTJhOSA5IDAgMTEtMTggMCA5IDkgMCAwMTE4IDB6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZUN1cnJlbmN5RXVybyAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0xNC4xMjEgMTUuNTM2Yy0xLjE3MSAxLjk1Mi0zLjA3IDEuOTUyLTQuMjQyIDAtMS4xNzItMS45NTMtMS4xNzItNS4xMTkgMC03LjA3MiAxLjE3MS0xLjk1MiAzLjA3LTEuOTUyIDQuMjQyIDBNOCAxMC41aDRtLTQgM2g0bTktMS41YTkgOSAwIDExLTE4IDAgOSA5IDAgMDExOCAwelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVDdXJyZW5jeVBvdW5kIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTE1IDlhMiAyIDAgMTAtNCAwdjVhMiAyIDAgMDEtMiAyaDZtLTYtNGg0bTggMGE5IDkgMCAxMS0xOCAwIDkgOSAwIDAxMTggMHpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lQ3VycmVuY3lSdXBlZSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk05IDhoNm0tNSAwYTMgMyAwIDExMCA2SDlsMyAzbS0zLTZoNm02IDFhOSA5IDAgMTEtMTggMCA5IDkgMCAwMTE4IDB6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZUN1cnJlbmN5WWVuIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTkgOGwzIDVtMCAwbDMtNW0tMyA1djRtLTMtNWg2bS02IDNoNm02LTNhOSA5IDAgMTEtMTggMCA5IDkgMCAwMTE4IDB6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZUN1cnNvckNsaWNrIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTE1IDE1bC0yIDVMOSA5bDExIDQtNSAyem0wIDBsNSA1TTcuMTg4IDIuMjM5bC43NzcgMi44OTdNNS4xMzYgNy45NjVsLTIuODk4LS43NzdNMTMuOTUgNC4wNWwtMi4xMjIgMi4xMjJtLTUuNjU3IDUuNjU2bC0yLjEyIDIuMTIyXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZURhdGFiYXNlIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTQgN3YxMGMwIDIuMjEgMy41ODIgNCA4IDRzOC0xLjc5IDgtNFY3TTQgN2MwIDIuMjEgMy41ODIgNCA4IDRzOC0xLjc5IDgtNE00IDdjMC0yLjIxIDMuNTgyLTQgOC00czggMS43OSA4IDRtMCA1YzAgMi4yMS0zLjU4MiA0LTggNHMtOC0xLjc5LTgtNFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVEZXNrdG9wQ29tcHV0ZXIgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNOS43NSAxN0w5IDIwbC0xIDFoOGwtMS0xLS43NS0zTTMgMTNoMThNNSAxN2gxNGEyIDIgMCAwMDItMlY1YTIgMiAwIDAwLTItMkg1YTIgMiAwIDAwLTIgMnYxMGEyIDIgMCAwMDIgMnpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lRGV2aWNlTW9iaWxlIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTEyIDE4aC4wMU04IDIxaDhhMiAyIDAgMDAyLTJWNWEyIDIgMCAwMC0yLTJIOGEyIDIgMCAwMC0yIDJ2MTRhMiAyIDAgMDAyIDJ6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZURldmljZVRhYmxldCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0xMiAxOGguMDFNNyAyMWgxMGEyIDIgMCAwMDItMlY1YTIgMiAwIDAwLTItMkg3YTIgMiAwIDAwLTIgMnYxNGEyIDIgMCAwMDIgMnpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lRG9jdW1lbnRBZGQgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNOSAxM2g2bS0zLTN2Nm01IDVIN2EyIDIgMCAwMS0yLTJWNWEyIDIgMCAwMTItMmg1LjU4NmExIDEgMCAwMS43MDcuMjkzbDUuNDE0IDUuNDE0YTEgMSAwIDAxLjI5My43MDdWMTlhMiAyIDAgMDEtMiAyelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVEb2N1bWVudERvd25sb2FkIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTEyIDEwdjZtMCAwbC0zLTNtMyAzbDMtM20yIDhIN2EyIDIgMCAwMS0yLTJWNWEyIDIgMCAwMTItMmg1LjU4NmExIDEgMCAwMS43MDcuMjkzbDUuNDE0IDUuNDE0YTEgMSAwIDAxLjI5My43MDdWMTlhMiAyIDAgMDEtMiAyelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVEb2N1bWVudER1cGxpY2F0ZSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk04IDd2OGEyIDIgMCAwMDIgMmg2TTggN1Y1YTIgMiAwIDAxMi0yaDQuNTg2YTEgMSAwIDAxLjcwNy4yOTNsNC40MTQgNC40MTRhMSAxIDAgMDEuMjkzLjcwN1YxNWEyIDIgMCAwMS0yIDJoLTJNOCA3SDZhMiAyIDAgMDAtMiAydjEwYTIgMiAwIDAwMiAyaDhhMiAyIDAgMDAyLTJ2LTJcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lRG9jdW1lbnRSZW1vdmUgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNOSAxM2g2bTIgOEg3YTIgMiAwIDAxLTItMlY1YTIgMiAwIDAxMi0yaDUuNTg2YTEgMSAwIDAxLjcwNy4yOTNsNS40MTQgNS40MTRhMSAxIDAgMDEuMjkzLjcwN1YxOWEyIDIgMCAwMS0yIDJ6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZURvY3VtZW50UmVwb3J0IChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTkgMTd2LTJtMyAydi00bTMgNHYtNm0yIDEwSDdhMiAyIDAgMDEtMi0yVjVhMiAyIDAgMDEyLTJoNS41ODZhMSAxIDAgMDEuNzA3LjI5M2w1LjQxNCA1LjQxNGExIDEgMCAwMS4yOTMuNzA3VjE5YTIgMiAwIDAxLTIgMnpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lRG9jdW1lbnRTZWFyY2ggKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMTAgMjFoN2EyIDIgMCAwMDItMlY5LjQxNGExIDEgMCAwMC0uMjkzLS43MDdsLTUuNDE0LTUuNDE0QTEgMSAwIDAwMTIuNTg2IDNIN2EyIDIgMCAwMC0yIDJ2MTFtMCA1bDQuODc5LTQuODc5bTAgMGEzIDMgMCAxMDQuMjQzLTQuMjQyIDMgMyAwIDAwLTQuMjQzIDQuMjQyelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVEb2N1bWVudFRleHQgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNOSAxMmg2bS02IDRoNm0yIDVIN2EyIDIgMCAwMS0yLTJWNWEyIDIgMCAwMTItMmg1LjU4NmExIDEgMCAwMS43MDcuMjkzbDUuNDE0IDUuNDE0YTEgMSAwIDAxLjI5My43MDdWMTlhMiAyIDAgMDEtMiAyelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVEb2N1bWVudCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk03IDIxaDEwYTIgMiAwIDAwMi0yVjkuNDE0YTEgMSAwIDAwLS4yOTMtLjcwN2wtNS40MTQtNS40MTRBMSAxIDAgMDAxMi41ODYgM0g3YTIgMiAwIDAwLTIgMnYxNGEyIDIgMCAwMDIgMnpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lRG90c0NpcmNsZUhvcml6b250YWwgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNOCAxMmguMDFNMTIgMTJoLjAxTTE2IDEyaC4wMU0yMSAxMmE5IDkgMCAxMS0xOCAwIDkgOSAwIDAxMTggMHpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lRG90c0hvcml6b250YWwgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNNSAxMmguMDFNMTIgMTJoLjAxTTE5IDEyaC4wMU02IDEyYTEgMSAwIDExLTIgMCAxIDEgMCAwMTIgMHptNyAwYTEgMSAwIDExLTIgMCAxIDEgMCAwMTIgMHptNyAwYTEgMSAwIDExLTIgMCAxIDEgMCAwMTIgMHpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lRG90c1ZlcnRpY2FsIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTEyIDV2LjAxTTEyIDEydi4wMU0xMiAxOXYuMDFNMTIgNmExIDEgMCAxMTAtMiAxIDEgMCAwMTAgMnptMCA3YTEgMSAwIDExMC0yIDEgMSAwIDAxMCAyem0wIDdhMSAxIDAgMTEwLTIgMSAxIDAgMDEwIDJ6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZURvd25sb2FkIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTQgMTZ2MWEzIDMgMCAwMDMgM2gxMGEzIDMgMCAwMDMtM3YtMW0tNC00bC00IDRtMCAwbC00LTRtNCA0VjRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lRHVwbGljYXRlIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTggMTZINmEyIDIgMCAwMS0yLTJWNmEyIDIgMCAwMTItMmg4YTIgMiAwIDAxMiAydjJtLTYgMTJoOGEyIDIgMCAwMDItMnYtOGEyIDIgMCAwMC0yLTJoLThhMiAyIDAgMDAtMiAydjhhMiAyIDAgMDAyIDJ6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZUVtb2ppSGFwcHkgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMTQuODI4IDE0LjgyOGE0IDQgMCAwMS01LjY1NiAwTTkgMTBoLjAxTTE1IDEwaC4wMU0yMSAxMmE5IDkgMCAxMS0xOCAwIDkgOSAwIDAxMTggMHpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lRW1vamlTYWQgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNOS4xNzIgMTYuMTcyYTQgNCAwIDAxNS42NTYgME05IDEwaC4wMU0xNSAxMGguMDFNMjEgMTJhOSA5IDAgMTEtMTggMCA5IDkgMCAwMTE4IDB6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZUV4Y2xhbWF0aW9uQ2lyY2xlIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTEyIDh2NG0wIDRoLjAxTTIxIDEyYTkgOSAwIDExLTE4IDAgOSA5IDAgMDExOCAwelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVFeGNsYW1hdGlvbiAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0xMiA5djJtMCA0aC4wMW0tNi45MzggNGgxMy44NTZjMS41NCAwIDIuNTAyLTEuNjY3IDEuNzMyLTNMMTMuNzMyIDRjLS43Ny0xLjMzMy0yLjY5NC0xLjMzMy0zLjQ2NCAwTDMuMzQgMTZjLS43NyAxLjMzMy4xOTIgMyAxLjczMiAzelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVFeHRlcm5hbExpbmsgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMTAgNkg2YTIgMiAwIDAwLTIgMnYxMGEyIDIgMCAwMDIgMmgxMGEyIDIgMCAwMDItMnYtNE0xNCA0aDZtMCAwdjZtMC02TDEwIDE0XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZUV5ZU9mZiAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0xMy44NzUgMTguODI1QTEwLjA1IDEwLjA1IDAgMDExMiAxOWMtNC40NzggMC04LjI2OC0yLjk0My05LjU0My03YTkuOTcgOS45NyAwIDAxMS41NjMtMy4wMjltNS44NTguOTA4YTMgMyAwIDExNC4yNDMgNC4yNDNNOS44NzggOS44NzhsNC4yNDIgNC4yNDJNOS44OCA5Ljg4bC0zLjI5LTMuMjltNy41MzIgNy41MzJsMy4yOSAzLjI5TTMgM2wzLjU5IDMuNTltMCAwQTkuOTUzIDkuOTUzIDAgMDExMiA1YzQuNDc4IDAgOC4yNjggMi45NDMgOS41NDMgN2ExMC4wMjUgMTAuMDI1IDAgMDEtNC4xMzIgNS40MTFtMCAwTDIxIDIxXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZUV5ZSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0xNSAxMmEzIDMgMCAxMS02IDAgMyAzIDAgMDE2IDB6XCJ9fSx7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTIuNDU4IDEyQzMuNzMyIDcuOTQzIDcuNTIzIDUgMTIgNWM0LjQ3OCAwIDguMjY4IDIuOTQzIDkuNTQyIDctMS4yNzQgNC4wNTctNS4wNjQgNy05LjU0MiA3LTQuNDc3IDAtOC4yNjgtMi45NDMtOS41NDItN3pcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lRmFzdEZvcndhcmQgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMTEuOTMzIDEyLjhhMSAxIDAgMDAwLTEuNkw2LjYgNy4yQTEgMSAwIDAwNSA4djhhMSAxIDAgMDAxLjYuOGw1LjMzMy00ek0xOS45MzMgMTIuOGExIDEgMCAwMDAtMS42bC01LjMzMy00QTEgMSAwIDAwMTMgOHY4YTEgMSAwIDAwMS42LjhsNS4zMzMtNHpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lRmlsbSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk03IDR2MTZNMTcgNHYxNk0zIDhoNG0xMCAwaDRNMyAxMmgxOE0zIDE2aDRtMTAgMGg0TTQgMjBoMTZhMSAxIDAgMDAxLTFWNWExIDEgMCAwMC0xLTFINGExIDEgMCAwMC0xIDF2MTRhMSAxIDAgMDAxIDF6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZUZpbHRlciAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0zIDRhMSAxIDAgMDExLTFoMTZhMSAxIDAgMDExIDF2Mi41ODZhMSAxIDAgMDEtLjI5My43MDdsLTYuNDE0IDYuNDE0YTEgMSAwIDAwLS4yOTMuNzA3VjE3bC00IDR2LTYuNTg2YTEgMSAwIDAwLS4yOTMtLjcwN0wzLjI5MyA3LjI5M0ExIDEgMCAwMTMgNi41ODZWNHpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lRmluZ2VyUHJpbnQgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMTIgMTFjMCAzLjUxNy0xLjAwOSA2Ljc5OS0yLjc1MyA5LjU3MW0tMy40NC0yLjA0bC4wNTQtLjA5QTEzLjkxNiAxMy45MTYgMCAwMDggMTFhNCA0IDAgMTE4IDBjMCAxLjAxNy0uMDcgMi4wMTktLjIwMyAzbS0yLjExOCA2Ljg0NEEyMS44OCAyMS44OCAwIDAwMTUuMTcxIDE3bTMuODM5IDEuMTMyYy42NDUtMi4yNjYuOTktNC42NTkuOTktNy4xMzJBOCA4IDAgMDA4IDQuMDdNMyAxNS4zNjRjLjY0LTEuMzE5IDEtMi44IDEtNC4zNjQgMC0xLjQ1Ny4zOS0yLjgyMyAxLjA3LTRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lRmlyZSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0xNy42NTcgMTguNjU3QTggOCAwIDAxNi4zNDMgNy4zNDNTNyA5IDkgMTBjMC0yIC41LTUgMi45ODYtN0MxNCA1IDE2LjA5IDUuNzc3IDE3LjY1NiA3LjM0M0E3Ljk3NSA3Ljk3NSAwIDAxMjAgMTNhNy45NzUgNy45NzUgMCAwMS0yLjM0MyA1LjY1N3pcIn19LHtcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNOS44NzkgMTYuMTIxQTMgMyAwIDEwMTIuMDE1IDExTDExIDE0SDljMCAuNzY4LjI5MyAxLjUzNi44NzkgMi4xMjF6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZUZsYWcgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMyAyMXYtNG0wIDBWNWEyIDIgMCAwMTItMmg2LjVsMSAxSDIxbC0zIDYgMyA2aC04LjVsLTEtMUg1YTIgMiAwIDAwLTIgMnptOS0xMy41VjlcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lRm9sZGVyQWRkIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTkgMTNoNm0tMy0zdjZtLTkgMVY3YTIgMiAwIDAxMi0yaDZsMiAyaDZhMiAyIDAgMDEyIDJ2OGEyIDIgMCAwMS0yIDJINWEyIDIgMCAwMS0yLTJ6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZUZvbGRlckRvd25sb2FkIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTEyIDEwdjZtMCAwbC0zLTNtMyAzbDMtM00zIDE3VjdhMiAyIDAgMDEyLTJoNmwyIDJoNmEyIDIgMCAwMTIgMnY4YTIgMiAwIDAxLTIgMkg1YTIgMiAwIDAxLTItMnpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lRm9sZGVyT3BlbiAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk01IDE5YTIgMiAwIDAxLTItMlY3YTIgMiAwIDAxMi0yaDRsMiAyaDRhMiAyIDAgMDEyIDJ2MU01IDE5aDE0YTIgMiAwIDAwMi0ydi01YTIgMiAwIDAwLTItMkg5YTIgMiAwIDAwLTIgMnY1YTIgMiAwIDAxLTIgMnpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lRm9sZGVyUmVtb3ZlIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTkgMTNoNk0zIDE3VjdhMiAyIDAgMDEyLTJoNmwyIDJoNmEyIDIgMCAwMTIgMnY4YTIgMiAwIDAxLTIgMkg1YTIgMiAwIDAxLTItMnpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lRm9sZGVyIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTMgN3YxMGEyIDIgMCAwMDIgMmgxNGEyIDIgMCAwMDItMlY5YTIgMiAwIDAwLTItMmgtNmwtMi0ySDVhMiAyIDAgMDAtMiAyelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVHaWZ0IChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTEyIDh2MTNtMC0xM1Y2YTIgMiAwIDExMiAyaC0yem0wIDBWNS41QTIuNSAyLjUgMCAxMDkuNSA4SDEyem0tNyA0aDE0TTUgMTJhMiAyIDAgMTEwLTRoMTRhMiAyIDAgMTEwIDRNNSAxMnY3YTIgMiAwIDAwMiAyaDEwYTIgMiAwIDAwMi0ydi03XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZUdsb2JlQWx0IChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTIxIDEyYTkgOSAwIDAxLTkgOW05LTlhOSA5IDAgMDAtOS05bTkgOUgzbTkgOWE5IDkgMCAwMS05LTltOSA5YzEuNjU3IDAgMy00LjAzIDMtOXMtMS4zNDMtOS0zLTltMCAxOGMtMS42NTcgMC0zLTQuMDMtMy05czEuMzQzLTkgMy05bS05IDlhOSA5IDAgMDE5LTlcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lR2xvYmUgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMy4wNTUgMTFINWEyIDIgMCAwMTIgMnYxYTIgMiAwIDAwMiAyIDIgMiAwIDAxMiAydjIuOTQ1TTggMy45MzVWNS41QTIuNSAyLjUgMCAwMDEwLjUgOGguNWEyIDIgMCAwMTIgMiAyIDIgMCAxMDQgMCAyIDIgMCAwMTItMmgxLjA2NE0xNSAyMC40ODhWMThhMiAyIDAgMDEyLTJoMy4wNjRNMjEgMTJhOSA5IDAgMTEtMTggMCA5IDkgMCAwMTE4IDB6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZUhhbmQgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNNyAxMS41VjE0bTAtMi41di02YTEuNSAxLjUgMCAxMTMgMG0tMyA2YTEuNSAxLjUgMCAwMC0zIDB2MmE3LjUgNy41IDAgMDAxNSAwdi01YTEuNSAxLjUgMCAwMC0zIDBtLTYtM1YxMW0wLTUuNXYtMWExLjUgMS41IDAgMDEzIDB2MW0wIDBWMTFtMC01LjVhMS41IDEuNSAwIDAxMyAwdjNtMCAwVjExXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZUhhc2h0YWcgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNNyAyMGw0LTE2bTIgMTZsNC0xNk02IDloMTRNNCAxNWgxNFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVIZWFydCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk00LjMxOCA2LjMxOGE0LjUgNC41IDAgMDAwIDYuMzY0TDEyIDIwLjM2NGw3LjY4Mi03LjY4MmE0LjUgNC41IDAgMDAtNi4zNjQtNi4zNjRMMTIgNy42MzZsLTEuMzE4LTEuMzE4YTQuNSA0LjUgMCAwMC02LjM2NCAwelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVIb21lIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTMgMTJsMi0ybTAgMGw3LTcgNyA3TTUgMTB2MTBhMSAxIDAgMDAxIDFoM20xMC0xMWwyIDJtLTItMnYxMGExIDEgMCAwMS0xIDFoLTNtLTYgMGExIDEgMCAwMDEtMXYtNGExIDEgMCAwMTEtMWgyYTEgMSAwIDAxMSAxdjRhMSAxIDAgMDAxIDFtLTYgMGg2XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZUlkZW50aWZpY2F0aW9uIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTEwIDZINWEyIDIgMCAwMC0yIDJ2OWEyIDIgMCAwMDIgMmgxNGEyIDIgMCAwMDItMlY4YTIgMiAwIDAwLTItMmgtNW0tNCAwVjVhMiAyIDAgMTE0IDB2MW0tNCAwYTIgMiAwIDEwNCAwbS01IDhhMiAyIDAgMTAwLTQgMiAyIDAgMDAwIDR6bTAgMGMxLjMwNiAwIDIuNDE3LjgzNSAyLjgzIDJNOSAxNGEzLjAwMSAzLjAwMSAwIDAwLTIuODMgMk0xNSAxMWgzbS0zIDRoMlwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVJbmJveEluIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTggNEg2YTIgMiAwIDAwLTIgMnYxMmEyIDIgMCAwMDIgMmgxMmEyIDIgMCAwMDItMlY2YTIgMiAwIDAwLTItMmgtMm0tNC0xdjhtMCAwbDMtM20tMyAzTDkgOG0tNSA1aDIuNTg2YTEgMSAwIDAxLjcwNy4yOTNsMi40MTQgMi40MTRhMSAxIDAgMDAuNzA3LjI5M2gzLjE3MmExIDEgMCAwMC43MDctLjI5M2wyLjQxNC0yLjQxNGExIDEgMCAwMS43MDctLjI5M0gyMFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVJbmJveCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0yMCAxM1Y2YTIgMiAwIDAwLTItMkg2YTIgMiAwIDAwLTIgMnY3bTE2IDB2NWEyIDIgMCAwMS0yIDJINmEyIDIgMCAwMS0yLTJ2LTVtMTYgMGgtMi41ODZhMSAxIDAgMDAtLjcwNy4yOTNsLTIuNDE0IDIuNDE0YTEgMSAwIDAxLS43MDcuMjkzaC0zLjE3MmExIDEgMCAwMS0uNzA3LS4yOTNsLTIuNDE0LTIuNDE0QTEgMSAwIDAwNi41ODYgMTNINFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVJbmZvcm1hdGlvbkNpcmNsZSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0xMyAxNmgtMXYtNGgtMW0xLTRoLjAxTTIxIDEyYTkgOSAwIDExLTE4IDAgOSA5IDAgMDExOCAwelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVLZXkgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMTUgN2EyIDIgMCAwMTIgMm00IDBhNiA2IDAgMDEtNy43NDMgNS43NDNMMTEgMTdIOXYySDd2Mkg0YTEgMSAwIDAxLTEtMXYtMi41ODZhMSAxIDAgMDEuMjkzLS43MDdsNS45NjQtNS45NjRBNiA2IDAgMTEyMSA5elwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVMaWJyYXJ5IChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTggMTR2M200LTN2M200LTN2M00zIDIxaDE4TTMgMTBoMThNMyA3bDktNCA5IDRNNCAxMGgxNnYxMUg0VjEwelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVMaWdodEJ1bGIgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNOS42NjMgMTdoNC42NzNNMTIgM3YxbTYuMzY0IDEuNjM2bC0uNzA3LjcwN00yMSAxMmgtMU00IDEySDNtMy4zNDMtNS42NTdsLS43MDctLjcwN20yLjgyOCA5LjlhNSA1IDAgMTE3LjA3MiAwbC0uNTQ4LjU0N0EzLjM3NCAzLjM3NCAwIDAwMTQgMTguNDY5VjE5YTIgMiAwIDExLTQgMHYtLjUzMWMwLS44OTUtLjM1Ni0xLjc1NC0uOTg4LTIuMzg2bC0uNTQ4LS41NDd6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZUxpZ2h0bmluZ0JvbHQgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMTMgMTBWM0w0IDE0aDd2N2w5LTExaC03elwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVMaW5rIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTEzLjgyOCAxMC4xNzJhNCA0IDAgMDAtNS42NTYgMGwtNCA0YTQgNCAwIDEwNS42NTYgNS42NTZsMS4xMDItMS4xMDFtLS43NTgtNC44OTlhNCA0IDAgMDA1LjY1NiAwbDQtNGE0IDQgMCAwMC01LjY1Ni01LjY1NmwtMS4xIDEuMVwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVMb2NhdGlvbk1hcmtlciAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0xNy42NTcgMTYuNjU3TDEzLjQxNCAyMC45YTEuOTk4IDEuOTk4IDAgMDEtMi44MjcgMGwtNC4yNDQtNC4yNDNhOCA4IDAgMTExMS4zMTQgMHpcIn19LHtcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMTUgMTFhMyAzIDAgMTEtNiAwIDMgMyAwIDAxNiAwelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVMb2NrQ2xvc2VkIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTEyIDE1djJtLTYgNGgxMmEyIDIgMCAwMDItMnYtNmEyIDIgMCAwMC0yLTJINmEyIDIgMCAwMC0yIDJ2NmEyIDIgMCAwMDIgMnptMTAtMTBWN2E0IDQgMCAwMC04IDB2NGg4elwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVMb2NrT3BlbiAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk04IDExVjdhNCA0IDAgMTE4IDBtLTQgOHYybS02IDRoMTJhMiAyIDAgMDAyLTJ2LTZhMiAyIDAgMDAtMi0ySDZhMiAyIDAgMDAtMiAydjZhMiAyIDAgMDAyIDJ6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZUxvZ2luIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTExIDE2bC00LTRtMCAwbDQtNG0tNCA0aDE0bS01IDR2MWEzIDMgMCAwMS0zIDNINmEzIDMgMCAwMS0zLTNWN2EzIDMgMCAwMTMtM2g3YTMgMyAwIDAxMyAzdjFcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lTG9nb3V0IChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTE3IDE2bDQtNG0wIDBsLTQtNG00IDRIN202IDR2MWEzIDMgMCAwMS0zIDNINmEzIDMgMCAwMS0zLTNWN2EzIDMgMCAwMTMtM2g0YTMgMyAwIDAxMyAzdjFcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lTWFpbE9wZW4gKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMyAxOXYtOC45M2EyIDIgMCAwMS44OS0xLjY2NGw3LTQuNjY2YTIgMiAwIDAxMi4yMiAwbDcgNC42NjZBMiAyIDAgMDEyMSAxMC4wN1YxOU0zIDE5YTIgMiAwIDAwMiAyaDE0YTIgMiAwIDAwMi0yTTMgMTlsNi43NS00LjVNMjEgMTlsLTYuNzUtNC41TTMgMTBsNi43NSA0LjVNMjEgMTBsLTYuNzUgNC41bTAgMGwtMS4xNC43NmEyIDIgMCAwMS0yLjIyIDBsLTEuMTQtLjc2XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZU1haWwgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMyA4bDcuODkgNS4yNmEyIDIgMCAwMDIuMjIgMEwyMSA4TTUgMTloMTRhMiAyIDAgMDAyLTJWN2EyIDIgMCAwMC0yLTJINWEyIDIgMCAwMC0yIDJ2MTBhMiAyIDAgMDAyIDJ6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZU1hcCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk05IDIwbC01LjQ0Ny0yLjcyNEExIDEgMCAwMTMgMTYuMzgyVjUuNjE4YTEgMSAwIDAxMS40NDctLjg5NEw5IDdtMCAxM2w2LTNtLTYgM1Y3bTYgMTBsNC41NTMgMi4yNzZBMSAxIDAgMDAyMSAxOC4zODJWNy42MThhMSAxIDAgMDAtLjU1My0uODk0TDE1IDRtMCAxM1Y0bTAgMEw5IDdcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lTWVudUFsdDEgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNNCA2aDE2TTQgMTJoOG0tOCA2aDE2XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZU1lbnVBbHQyIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTQgNmgxNk00IDEyaDE2TTQgMThoN1wifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVNZW51QWx0MyAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk00IDZoMTZNNCAxMmgxNm0tNyA2aDdcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lTWVudUFsdDQgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNNCA4aDE2TTQgMTZoMTZcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lTWVudSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk00IDZoMTZNNCAxMmgxNk00IDE4aDE2XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZU1pY3JvcGhvbmUgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMTkgMTFhNyA3IDAgMDEtNyA3bTAgMGE3IDcgMCAwMS03LTdtNyA3djRtMCAwSDhtNCAwaDRtLTQtOGEzIDMgMCAwMS0zLTNWNWEzIDMgMCAxMTYgMHY2YTMgMyAwIDAxLTMgM3pcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lTWludXNDaXJjbGUgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMTUgMTJIOW0xMiAwYTkgOSAwIDExLTE4IDAgOSA5IDAgMDExOCAwelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVNaW51c1NtIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTE4IDEySDZcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lTWludXMgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMjAgMTJINFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVNb29uIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTIwLjM1NCAxNS4zNTRBOSA5IDAgMDE4LjY0NiAzLjY0NiA5LjAwMyA5LjAwMyAwIDAwMTIgMjFhOS4wMDMgOS4wMDMgMCAwMDguMzU0LTUuNjQ2elwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVNdXNpY05vdGUgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNOSAxOVY2bDEyLTN2MTNNOSAxOWMwIDEuMTA1LTEuMzQzIDItMyAycy0zLS44OTUtMy0yIDEuMzQzLTIgMy0yIDMgLjg5NSAzIDJ6bTEyLTNjMCAxLjEwNS0xLjM0MyAyLTMgMnMtMy0uODk1LTMtMiAxLjM0My0yIDMtMiAzIC44OTUgMyAyek05IDEwbDEyLTNcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lTmV3c3BhcGVyIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTE5IDIwSDVhMiAyIDAgMDEtMi0yVjZhMiAyIDAgMDEyLTJoMTBhMiAyIDAgMDEyIDJ2MW0yIDEzYTIgMiAwIDAxLTItMlY3bTIgMTNhMiAyIDAgMDAyLTJWOWEyIDIgMCAwMC0yLTJoLTJtLTQtM0g5TTcgMTZoNk03IDhoNnY0SDdWOHpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lT2ZmaWNlQnVpbGRpbmcgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMTkgMjFWNWEyIDIgMCAwMC0yLTJIN2EyIDIgMCAwMC0yIDJ2MTZtMTQgMGgybS0yIDBoLTVtLTkgMEgzbTIgMGg1TTkgN2gxbS0xIDRoMW00LTRoMW0tMSA0aDFtLTUgMTB2LTVhMSAxIDAgMDExLTFoMmExIDEgMCAwMTEgMXY1bS00IDBoNFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVQYXBlckFpcnBsYW5lIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTEyIDE5bDkgMi05LTE4LTkgMTggOS0yem0wIDB2LThcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lUGFwZXJDbGlwIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTE1LjE3MiA3bC02LjU4NiA2LjU4NmEyIDIgMCAxMDIuODI4IDIuODI4bDYuNDE0LTYuNTg2YTQgNCAwIDAwLTUuNjU2LTUuNjU2bC02LjQxNSA2LjU4NWE2IDYgMCAxMDguNDg2IDguNDg2TDIwLjUgMTNcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lUGF1c2UgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMTAgOXY2bTQtNnY2bTctM2E5IDkgMCAxMS0xOCAwIDkgOSAwIDAxMTggMHpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lUGVuY2lsQWx0IChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTExIDVINmEyIDIgMCAwMC0yIDJ2MTFhMiAyIDAgMDAyIDJoMTFhMiAyIDAgMDAyLTJ2LTVtLTEuNDE0LTkuNDE0YTIgMiAwIDExMi44MjggMi44MjhMMTEuODI4IDE1SDl2LTIuODI4bDguNTg2LTguNTg2elwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVQZW5jaWwgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMTUuMjMyIDUuMjMybDMuNTM2IDMuNTM2bS0yLjAzNi01LjAzNmEyLjUgMi41IDAgMTEzLjUzNiAzLjUzNkw2LjUgMjEuMDM2SDN2LTMuNTcyTDE2LjczMiAzLjczMnpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lUGhvbmVJbmNvbWluZyAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0yMSAzbC02IDZtMCAwVjRtMCA1aDVNNSAzYTIgMiAwIDAwLTIgMnYxYzAgOC4yODQgNi43MTYgMTUgMTUgMTVoMWEyIDIgMCAwMDItMnYtMy4yOGExIDEgMCAwMC0uNjg0LS45NDhsLTQuNDkzLTEuNDk4YTEgMSAwIDAwLTEuMjEuNTAybC0xLjEzIDIuMjU3YTExLjA0MiAxMS4wNDIgMCAwMS01LjUxNi01LjUxN2wyLjI1Ny0xLjEyOGExIDEgMCAwMC41MDItMS4yMUw5LjIyOCAzLjY4M0ExIDEgMCAwMDguMjc5IDNINXpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lUGhvbmVNaXNzZWRDYWxsIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTE2IDhsMi0ybTAgMGwyLTJtLTIgMmwtMi0ybTIgMmwyIDJNNSAzYTIgMiAwIDAwLTIgMnYxYzAgOC4yODQgNi43MTYgMTUgMTUgMTVoMWEyIDIgMCAwMDItMnYtMy4yOGExIDEgMCAwMC0uNjg0LS45NDhsLTQuNDkzLTEuNDk4YTEgMSAwIDAwLTEuMjEuNTAybC0xLjEzIDIuMjU3YTExLjA0MiAxMS4wNDIgMCAwMS01LjUxNi01LjUxN2wyLjI1Ny0xLjEyOGExIDEgMCAwMC41MDItMS4yMUw5LjIyOCAzLjY4M0ExIDEgMCAwMDguMjc5IDNINXpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lUGhvbmVPdXRnb2luZyAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0xNiAzaDVtMCAwdjVtMC01bC02IDZNNSAzYTIgMiAwIDAwLTIgMnYxYzAgOC4yODQgNi43MTYgMTUgMTUgMTVoMWEyIDIgMCAwMDItMnYtMy4yOGExIDEgMCAwMC0uNjg0LS45NDhsLTQuNDkzLTEuNDk4YTEgMSAwIDAwLTEuMjEuNTAybC0xLjEzIDIuMjU3YTExLjA0MiAxMS4wNDIgMCAwMS01LjUxNi01LjUxN2wyLjI1Ny0xLjEyOGExIDEgMCAwMC41MDItMS4yMUw5LjIyOCAzLjY4M0ExIDEgMCAwMDguMjc5IDNINXpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lUGhvbmUgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMyA1YTIgMiAwIDAxMi0yaDMuMjhhMSAxIDAgMDEuOTQ4LjY4NGwxLjQ5OCA0LjQ5M2ExIDEgMCAwMS0uNTAyIDEuMjFsLTIuMjU3IDEuMTNhMTEuMDQyIDExLjA0MiAwIDAwNS41MTYgNS41MTZsMS4xMy0yLjI1N2ExIDEgMCAwMTEuMjEtLjUwMmw0LjQ5MyAxLjQ5OGExIDEgMCAwMS42ODQuOTQ5VjE5YTIgMiAwIDAxLTIgMmgtMUM5LjcxNiAyMSAzIDE0LjI4NCAzIDZWNXpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lUGhvdG9ncmFwaCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk00IDE2bDQuNTg2LTQuNTg2YTIgMiAwIDAxMi44MjggMEwxNiAxNm0tMi0ybDEuNTg2LTEuNTg2YTIgMiAwIDAxMi44MjggMEwyMCAxNG0tNi02aC4wMU02IDIwaDEyYTIgMiAwIDAwMi0yVjZhMiAyIDAgMDAtMi0ySDZhMiAyIDAgMDAtMiAydjEyYTIgMiAwIDAwMiAyelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVQbGF5IChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTE0Ljc1MiAxMS4xNjhsLTMuMTk3LTIuMTMyQTEgMSAwIDAwMTAgOS44N3Y0LjI2M2ExIDEgMCAwMDEuNTU1LjgzMmwzLjE5Ny0yLjEzMmExIDEgMCAwMDAtMS42NjR6XCJ9fSx7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTIxIDEyYTkgOSAwIDExLTE4IDAgOSA5IDAgMDExOCAwelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVQbHVzQ2lyY2xlIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTEyIDl2M20wIDB2M20wLTNoM20tMyAwSDltMTIgMGE5IDkgMCAxMS0xOCAwIDkgOSAwIDAxMTggMHpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lUGx1c1NtIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTEyIDZ2Nm0wIDB2Nm0wLTZoNm0tNiAwSDZcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lUGx1cyAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0xMiA2djZtMCAwdjZtMC02aDZtLTYgMEg2XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZVByZXNlbnRhdGlvbkNoYXJ0QmFyIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTggMTN2LTFtNCAxdi0zbTQgM1Y4TTggMjFsNC00IDQgNE0zIDRoMThNNCA0aDE2djEyYTEgMSAwIDAxLTEgMUg1YTEgMSAwIDAxLTEtMVY0elwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVQcmVzZW50YXRpb25DaGFydExpbmUgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNNyAxMmwzLTMgMyAzIDQtNE04IDIxbDQtNCA0IDRNMyA0aDE4TTQgNGgxNnYxMmExIDEgMCAwMS0xIDFINWExIDEgMCAwMS0xLTFWNHpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lUHJpbnRlciAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0xNyAxN2gyYTIgMiAwIDAwMi0ydi00YTIgMiAwIDAwLTItMkg1YTIgMiAwIDAwLTIgMnY0YTIgMiAwIDAwMiAyaDJtMiA0aDZhMiAyIDAgMDAyLTJ2LTRhMiAyIDAgMDAtMi0ySDlhMiAyIDAgMDAtMiAydjRhMiAyIDAgMDAyIDJ6bTgtMTJWNWEyIDIgMCAwMC0yLTJIOWEyIDIgMCAwMC0yIDJ2NGgxMHpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lUHV6emxlIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTExIDRhMiAyIDAgMTE0IDB2MWExIDEgMCAwMDEgMWgzYTEgMSAwIDAxMSAxdjNhMSAxIDAgMDEtMSAxaC0xYTIgMiAwIDEwMCA0aDFhMSAxIDAgMDExIDF2M2ExIDEgMCAwMS0xIDFoLTNhMSAxIDAgMDEtMS0xdi0xYTIgMiAwIDEwLTQgMHYxYTEgMSAwIDAxLTEgMUg3YTEgMSAwIDAxLTEtMXYtM2ExIDEgMCAwMC0xLTFINGEyIDIgMCAxMTAtNGgxYTEgMSAwIDAwMS0xVjdhMSAxIDAgMDExLTFoM2ExIDEgMCAwMDEtMVY0elwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVRcmNvZGUgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMTIgNHYxbTYgMTFoMm0tNiAwaC0ydjRtMC0xMXYzbTAgMGguMDFNMTIgMTJoNC4wMU0xNiAyMGg0TTQgMTJoNG0xMiAwaC4wMU01IDhoMmExIDEgMCAwMDEtMVY1YTEgMSAwIDAwLTEtMUg1YTEgMSAwIDAwLTEgMXYyYTEgMSAwIDAwMSAxem0xMiAwaDJhMSAxIDAgMDAxLTFWNWExIDEgMCAwMC0xLTFoLTJhMSAxIDAgMDAtMSAxdjJhMSAxIDAgMDAxIDF6TTUgMjBoMmExIDEgMCAwMDEtMXYtMmExIDEgMCAwMC0xLTFINWExIDEgMCAwMC0xIDF2MmExIDEgMCAwMDEgMXpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lUXVlc3Rpb25NYXJrQ2lyY2xlIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTguMjI4IDljLjU0OS0xLjE2NSAyLjAzLTIgMy43NzItMiAyLjIxIDAgNCAxLjM0MyA0IDMgMCAxLjQtMS4yNzggMi41NzUtMy4wMDYgMi45MDctLjU0Mi4xMDQtLjk5NC41NC0uOTk0IDEuMDkzbTAgM2guMDFNMjEgMTJhOSA5IDAgMTEtMTggMCA5IDkgMCAwMTE4IDB6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZVJlY2VpcHRSZWZ1bmQgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMTYgMTV2LTFhNCA0IDAgMDAtNC00SDhtMCAwbDMgM20tMy0zbDMtM205IDE0VjVhMiAyIDAgMDAtMi0ySDZhMiAyIDAgMDAtMiAydjE2bDQtMiA0IDIgNC0yIDQgMnpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lUmVjZWlwdFRheCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk05IDE0bDYtNm0tNS41LjVoLjAxbTQuOTkgNWguMDFNMTkgMjFWNWEyIDIgMCAwMC0yLTJIN2EyIDIgMCAwMC0yIDJ2MTZsMy41LTIgMy41IDIgMy41LTIgMy41IDJ6TTEwIDguNWEuNS41IDAgMTEtMSAwIC41LjUgMCAwMTEgMHptNSA1YS41LjUgMCAxMS0xIDAgLjUuNSAwIDAxMSAwelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVSZWZyZXNoIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTQgNHY1aC41ODJtMTUuMzU2IDJBOC4wMDEgOC4wMDEgMCAwMDQuNTgyIDltMCAwSDltMTEgMTF2LTVoLS41ODFtMCAwYTguMDAzIDguMDAzIDAgMDEtMTUuMzU3LTJtMTUuMzU3IDJIMTVcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lUmVwbHkgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMyAxMGgxMGE4IDggMCAwMTggOHYyTTMgMTBsNiA2bS02LTZsNi02XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZVJld2luZCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0xMi4wNjYgMTEuMmExIDEgMCAwMDAgMS42bDUuMzM0IDRBMSAxIDAgMDAxOSAxNlY4YTEgMSAwIDAwLTEuNi0uOGwtNS4zMzMgNHpNNC4wNjYgMTEuMmExIDEgMCAwMDAgMS42bDUuMzM0IDRBMSAxIDAgMDAxMSAxNlY4YTEgMSAwIDAwLTEuNi0uOGwtNS4zMzQgNHpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lUnNzIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTYgNWM3LjE4IDAgMTMgNS44MiAxMyAxM002IDExYTcgNyAwIDAxNyA3bS02IDBhMSAxIDAgMTEtMiAwIDEgMSAwIDAxMiAwelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVTYXZlQXMgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMTcgMTZ2MmEyIDIgMCAwMS0yIDJINWEyIDIgMCAwMS0yLTJ2LTdhMiAyIDAgMDEyLTJoMm0zLTRIOWEyIDIgMCAwMC0yIDJ2N2EyIDIgMCAwMDIgMmgxMGEyIDIgMCAwMDItMlY3YTIgMiAwIDAwLTItMmgtMW0tMSA0bC0zIDNtMCAwbC0zLTNtMyAzVjNcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lU2F2ZSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk04IDdINWEyIDIgMCAwMC0yIDJ2OWEyIDIgMCAwMDIgMmgxNGEyIDIgMCAwMDItMlY5YTIgMiAwIDAwLTItMmgtM20tMSA0bC0zIDNtMCAwbC0zLTNtMyAzVjRcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lU2NhbGUgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMyA2bDMgMW0wIDBsLTMgOWE1LjAwMiA1LjAwMiAwIDAwNi4wMDEgME02IDdsMyA5TTYgN2w2LTJtNiAybDMtMW0tMyAxbC0zIDlhNS4wMDIgNS4wMDIgMCAwMDYuMDAxIDBNMTggN2wzIDltLTMtOWwtNi0ybTAtMnYybTAgMTZWNW0wIDE2SDltMyAwaDNcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lU2Npc3NvcnMgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMTQuMTIxIDE0LjEyMUwxOSAxOW0tNy03bDctN20tNyA3bC0yLjg3OSAyLjg3OU0xMiAxMkw5LjEyMSA5LjEyMW0wIDUuNzU4YTMgMyAwIDEwLTQuMjQzIDQuMjQzIDMgMyAwIDAwNC4yNDMtNC4yNDN6bTAtNS43NThhMyAzIDAgMTAtNC4yNDMtNC4yNDMgMyAzIDAgMDA0LjI0MyA0LjI0M3pcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lU2VhcmNoQ2lyY2xlIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTggMTZsMi44NzktMi44NzltMCAwYTMgMyAwIDEwNC4yNDMtNC4yNDIgMyAzIDAgMDAtNC4yNDMgNC4yNDJ6TTIxIDEyYTkgOSAwIDExLTE4IDAgOSA5IDAgMDExOCAwelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVTZWFyY2ggKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMjEgMjFsLTYtNm0yLTVhNyA3IDAgMTEtMTQgMCA3IDcgMCAwMTE0IDB6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZVNlbGVjdG9yIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTggOWw0LTQgNCA0bTAgNmwtNCA0LTQtNFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVTZXJ2ZXIgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNNSAxMmgxNE01IDEyYTIgMiAwIDAxLTItMlY2YTIgMiAwIDAxMi0yaDE0YTIgMiAwIDAxMiAydjRhMiAyIDAgMDEtMiAyTTUgMTJhMiAyIDAgMDAtMiAydjRhMiAyIDAgMDAyIDJoMTRhMiAyIDAgMDAyLTJ2LTRhMiAyIDAgMDAtMi0ybS0yLTRoLjAxTTE3IDE2aC4wMVwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVTaGFyZSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk04LjY4NCAxMy4zNDJDOC44ODYgMTIuOTM4IDkgMTIuNDgyIDkgMTJjMC0uNDgyLS4xMTQtLjkzOC0uMzE2LTEuMzQybTAgMi42ODRhMyAzIDAgMTEwLTIuNjg0bTAgMi42ODRsNi42MzIgMy4zMTZtLTYuNjMyLTZsNi42MzItMy4zMTZtMCAwYTMgMyAwIDEwNS4zNjctMi42ODQgMyAzIDAgMDAtNS4zNjcgMi42ODR6bTAgOS4zMTZhMyAzIDAgMTA1LjM2OCAyLjY4NCAzIDMgMCAwMC01LjM2OC0yLjY4NHpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lU2hpZWxkQ2hlY2sgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNOSAxMmwyIDIgNC00bTUuNjE4LTQuMDE2QTExLjk1NSAxMS45NTUgMCAwMTEyIDIuOTQ0YTExLjk1NSAxMS45NTUgMCAwMS04LjYxOCAzLjA0QTEyLjAyIDEyLjAyIDAgMDAzIDljMCA1LjU5MSAzLjgyNCAxMC4yOSA5IDExLjYyMiA1LjE3Ni0xLjMzMiA5LTYuMDMgOS0xMS42MjIgMC0xLjA0Mi0uMTMzLTIuMDUyLS4zODItMy4wMTZ6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZVNoaWVsZEV4Y2xhbWF0aW9uIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTIwLjYxOCA1Ljk4NEExMS45NTUgMTEuOTU1IDAgMDExMiAyLjk0NGExMS45NTUgMTEuOTU1IDAgMDEtOC42MTggMy4wNEExMi4wMiAxMi4wMiAwIDAwMyA5YzAgNS41OTEgMy44MjQgMTAuMjkgOSAxMS42MjIgNS4xNzYtMS4zMzIgOS02LjAzIDktMTEuNjIyIDAtMS4wNDItLjEzMy0yLjA1Mi0uMzgyLTMuMDE2ek0xMiA5djJtMCA0aC4wMVwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVTaG9wcGluZ0JhZyAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0xNiAxMVY3YTQgNCAwIDAwLTggMHY0TTUgOWgxNGwxIDEySDRMNSA5elwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVTaG9wcGluZ0NhcnQgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMyAzaDJsLjQgMk03IDEzaDEwbDQtOEg1LjRNNyAxM0w1LjQgNU03IDEzbC0yLjI5MyAyLjI5M2MtLjYzLjYzLS4xODQgMS43MDcuNzA3IDEuNzA3SDE3bTAgMGEyIDIgMCAxMDAgNCAyIDIgMCAwMDAtNHptLTggMmEyIDIgMCAxMS00IDAgMiAyIDAgMDE0IDB6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZVNvcnRBc2NlbmRpbmcgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMyA0aDEzTTMgOGg5bS05IDRoNm00IDBsNC00bTAgMGw0IDRtLTQtNHYxMlwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVTb3J0RGVzY2VuZGluZyAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0zIDRoMTNNMyA4aDltLTkgNGg5bTUtNHYxMm0wIDBsLTQtNG00IDRsNC00XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZVNwYXJrbGVzIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTUgM3Y0TTMgNWg0TTYgMTd2NG0tMi0yaDRtNS0xNmwyLjI4NiA2Ljg1N0wyMSAxMmwtNS43MTQgMi4xNDNMMTMgMjFsLTIuMjg2LTYuODU3TDUgMTJsNS43MTQtMi4xNDNMMTMgM3pcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lU3BlYWtlcnBob25lIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTExIDUuODgyVjE5LjI0YTEuNzYgMS43NiAwIDAxLTMuNDE3LjU5MmwtMi4xNDctNi4xNU0xOCAxM2EzIDMgMCAxMDAtNk01LjQzNiAxMy42ODNBNC4wMDEgNC4wMDEgMCAwMTcgNmgxLjgzMmM0LjEgMCA3LjYyNS0xLjIzNCA5LjE2OC0zdjE0Yy0xLjU0My0xLjc2Ni01LjA2Ny0zLTkuMTY4LTNIN2EzLjk4OCAzLjk4OCAwIDAxLTEuNTY0LS4zMTd6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZVN0YXIgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMTEuMDQ5IDIuOTI3Yy4zLS45MjEgMS42MDMtLjkyMSAxLjkwMiAwbDEuNTE5IDQuNjc0YTEgMSAwIDAwLjk1LjY5aDQuOTE1Yy45NjkgMCAxLjM3MSAxLjI0LjU4OCAxLjgxbC0zLjk3NiAyLjg4OGExIDEgMCAwMC0uMzYzIDEuMTE4bDEuNTE4IDQuNjc0Yy4zLjkyMi0uNzU1IDEuNjg4LTEuNTM4IDEuMTE4bC0zLjk3Ni0yLjg4OGExIDEgMCAwMC0xLjE3NiAwbC0zLjk3NiAyLjg4OGMtLjc4My41Ny0xLjgzOC0uMTk3LTEuNTM4LTEuMTE4bDEuNTE4LTQuNjc0YTEgMSAwIDAwLS4zNjMtMS4xMThsLTMuOTc2LTIuODg4Yy0uNzg0LS41Ny0uMzgtMS44MS41ODgtMS44MWg0LjkxNGExIDEgMCAwMC45NTEtLjY5bDEuNTE5LTQuNjc0elwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVTdGF0dXNPZmZsaW5lIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTE4LjM2NCA1LjYzNmE5IDkgMCAwMTAgMTIuNzI4bTAgMGwtMi44MjktMi44MjltMi44MjkgMi44MjlMMjEgMjFNMTUuNTM2IDguNDY0YTUgNSAwIDAxMCA3LjA3Mm0wIDBsLTIuODI5LTIuODI5bS00LjI0MyAyLjgyOWE0Ljk3OCA0Ljk3OCAwIDAxLTEuNDE0LTIuODNtLTEuNDE0IDUuNjU4YTkgOSAwIDAxLTIuMTY3LTkuMjM4bTcuODI0IDIuMTY3YTEgMSAwIDExMS40MTQgMS40MTRtLTEuNDE0LTEuNDE0TDMgM204LjI5MyA4LjI5M2wxLjQxNCAxLjQxNFwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVTdGF0dXNPbmxpbmUgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNNS42MzYgMTguMzY0YTkgOSAwIDAxMC0xMi43MjhtMTIuNzI4IDBhOSA5IDAgMDEwIDEyLjcyOG0tOS45LTIuODI5YTUgNSAwIDAxMC03LjA3bTcuMDcyIDBhNSA1IDAgMDEwIDcuMDdNMTMgMTJhMSAxIDAgMTEtMiAwIDEgMSAwIDAxMiAwelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVTdG9wIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTIxIDEyYTkgOSAwIDExLTE4IDAgOSA5IDAgMDExOCAwelwifX0se1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk05IDEwYTEgMSAwIDAxMS0xaDRhMSAxIDAgMDExIDF2NGExIDEgMCAwMS0xIDFoLTRhMSAxIDAgMDEtMS0xdi00elwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVTdW4gKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMTIgM3YxbTAgMTZ2MW05LTloLTFNNCAxMkgzbTE1LjM2NCA2LjM2NGwtLjcwNy0uNzA3TTYuMzQzIDYuMzQzbC0uNzA3LS43MDdtMTIuNzI4IDBsLS43MDcuNzA3TTYuMzQzIDE3LjY1N2wtLjcwNy43MDdNMTYgMTJhNCA0IDAgMTEtOCAwIDQgNCAwIDAxOCAwelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVTdXBwb3J0IChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTE4LjM2NCA1LjYzNmwtMy41MzYgMy41MzZtMCA1LjY1NmwzLjUzNiAzLjUzNk05LjE3MiA5LjE3Mkw1LjYzNiA1LjYzNm0zLjUzNiA5LjE5MmwtMy41MzYgMy41MzZNMjEgMTJhOSA5IDAgMTEtMTggMCA5IDkgMCAwMTE4IDB6bS01IDBhNCA0IDAgMTEtOCAwIDQgNCAwIDAxOCAwelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVTd2l0Y2hIb3Jpem9udGFsIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTggN2gxMm0wIDBsLTQtNG00IDRsLTQgNG0wIDZING0wIDBsNCA0bS00LTRsNC00XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZVN3aXRjaFZlcnRpY2FsIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTcgMTZWNG0wIDBMMyA4bTQtNGw0IDRtNiAwdjEybTAgMGw0LTRtLTQgNGwtNC00XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZVRhYmxlIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTMgMTBoMThNMyAxNGgxOG0tOS00djhtLTcgMGgxNGEyIDIgMCAwMDItMlY4YTIgMiAwIDAwLTItMkg1YTIgMiAwIDAwLTIgMnY4YTIgMiAwIDAwMiAyelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVUYWcgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNNyA3aC4wMU03IDNoNWMuNTEyIDAgMS4wMjQuMTk1IDEuNDE0LjU4Nmw3IDdhMiAyIDAgMDEwIDIuODI4bC03IDdhMiAyIDAgMDEtMi44MjggMGwtNy03QTEuOTk0IDEuOTk0IDAgMDEzIDEyVjdhNCA0IDAgMDE0LTR6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZVRlbXBsYXRlIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTQgNWExIDEgMCAwMTEtMWgxNGExIDEgMCAwMTEgMXYyYTEgMSAwIDAxLTEgMUg1YTEgMSAwIDAxLTEtMVY1ek00IDEzYTEgMSAwIDAxMS0xaDZhMSAxIDAgMDExIDF2NmExIDEgMCAwMS0xIDFINWExIDEgMCAwMS0xLTF2LTZ6TTE2IDEzYTEgMSAwIDAxMS0xaDJhMSAxIDAgMDExIDF2NmExIDEgMCAwMS0xIDFoLTJhMSAxIDAgMDEtMS0xdi02elwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVUZXJtaW5hbCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk04IDlsMyAzLTMgM201IDBoM001IDIwaDE0YTIgMiAwIDAwMi0yVjZhMiAyIDAgMDAtMi0ySDVhMiAyIDAgMDAtMiAydjEyYTIgMiAwIDAwMiAyelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVUaHVtYkRvd24gKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMTAgMTRINS4yMzZhMiAyIDAgMDEtMS43ODktMi44OTRsMy41LTdBMiAyIDAgMDE4LjczNiAzaDQuMDE4YTIgMiAwIDAxLjQ4NS4wNmwzLjc2Ljk0bS03IDEwdjVhMiAyIDAgMDAyIDJoLjA5NmMuNSAwIC45MDUtLjQwNS45MDUtLjkwNCAwLS43MTUuMjExLTEuNDEzLjYwOC0yLjAwOEwxNyAxM1Y0bS03IDEwaDJtNS0xMGgyYTIgMiAwIDAxMiAydjZhMiAyIDAgMDEtMiAyaC0yLjVcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lVGh1bWJVcCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0xNCAxMGg0Ljc2NGEyIDIgMCAwMTEuNzg5IDIuODk0bC0zLjUgN0EyIDIgMCAwMTE1LjI2MyAyMWgtNC4wMTdjLS4xNjMgMC0uMzI2LS4wMi0uNDg1LS4wNkw3IDIwbTctMTBWNWEyIDIgMCAwMC0yLTJoLS4wOTVjLS41IDAtLjkwNS40MDUtLjkwNS45MDUgMCAuNzE0LS4yMTEgMS40MTItLjYwOCAyLjAwNkw3IDExdjltNy0xMGgtMk03IDIwSDVhMiAyIDAgMDEtMi0ydi02YTIgMiAwIDAxMi0yaDIuNVwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVUaWNrZXQgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMTUgNXYybTAgNHYybTAgNHYyTTUgNWEyIDIgMCAwMC0yIDJ2M2EyIDIgMCAxMTAgNHYzYTIgMiAwIDAwMiAyaDE0YTIgMiAwIDAwMi0ydi0zYTIgMiAwIDExMC00VjdhMiAyIDAgMDAtMi0ySDV6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZVRyYW5zbGF0ZSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0zIDVoMTJNOSAzdjJtMS4wNDggOS41QTE4LjAyMiAxOC4wMjIgMCAwMTYuNDEyIDltNi4wODggOWg3TTExIDIxbDUtMTAgNSAxME0xMi43NTEgNUMxMS43ODMgMTAuNzcgOC4wNyAxNS42MSAzIDE4LjEyOVwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVUcmFzaCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0xOSA3bC0uODY3IDEyLjE0MkEyIDIgMCAwMTE2LjEzOCAyMUg3Ljg2MmEyIDIgMCAwMS0xLjk5NS0xLjg1OEw1IDdtNSA0djZtNC02djZtMS0xMFY0YTEgMSAwIDAwLTEtMWgtNGExIDEgMCAwMC0xIDF2M000IDdoMTZcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lVHJlbmRpbmdEb3duIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTEzIDE3aDhtMCAwVjltMCA4bC04LTgtNCA0LTYtNlwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVUcmVuZGluZ1VwIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTEzIDdoOG0wIDB2OG0wLThsLTggOC00LTQtNiA2XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZVRydWNrIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJkXCI6XCJNOSAxN2EyIDIgMCAxMS00IDAgMiAyIDAgMDE0IDB6TTE5IDE3YTIgMiAwIDExLTQgMCAyIDIgMCAwMTQgMHpcIn19LHtcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMTMgMTZWNmExIDEgMCAwMC0xLTFINGExIDEgMCAwMC0xIDF2MTBhMSAxIDAgMDAxIDFoMW04LTFhMSAxIDAgMDEtMSAxSDltNC0xVjhhMSAxIDAgMDExLTFoMi41ODZhMSAxIDAgMDEuNzA3LjI5M2wzLjQxNCAzLjQxNGExIDEgMCAwMS4yOTMuNzA3VjE2YTEgMSAwIDAxLTEgMWgtMW0tNi0xYTEgMSAwIDAwMSAxaDFNNSAxN2EyIDIgMCAxMDQgMG0tNCAwYTIgMiAwIDExNCAwbTYgMGEyIDIgMCAxMDQgMG0tNCAwYTIgMiAwIDExNCAwXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZVVwbG9hZCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk00IDE2djFhMyAzIDAgMDAzIDNoMTBhMyAzIDAgMDAzLTN2LTFtLTQtOGwtNC00bTAgMEw4IDhtNC00djEyXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZVVzZXJBZGQgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMTggOXYzbTAgMHYzbTAtM2gzbS0zIDBoLTNtLTItNWE0IDQgMCAxMS04IDAgNCA0IDAgMDE4IDB6TTMgMjBhNiA2IDAgMDExMiAwdjFIM3YtMXpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lVXNlckNpcmNsZSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk01LjEyMSAxNy44MDRBMTMuOTM3IDEzLjkzNyAwIDAxMTIgMTZjMi41IDAgNC44NDcuNjU1IDYuODc5IDEuODA0TTE1IDEwYTMgMyAwIDExLTYgMCAzIDMgMCAwMTYgMHptNiAyYTkgOSAwIDExLTE4IDAgOSA5IDAgMDExOCAwelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVVc2VyR3JvdXAgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMTcgMjBoNXYtMmEzIDMgMCAwMC01LjM1Ni0xLjg1N00xNyAyMEg3bTEwIDB2LTJjMC0uNjU2LS4xMjYtMS4yODMtLjM1Ni0xLjg1N003IDIwSDJ2LTJhMyAzIDAgMDE1LjM1Ni0xLjg1N003IDIwdi0yYzAtLjY1Ni4xMjYtMS4yODMuMzU2LTEuODU3bTAgMGE1LjAwMiA1LjAwMiAwIDAxOS4yODggME0xNSA3YTMgMyAwIDExLTYgMCAzIDMgMCAwMTYgMHptNiAzYTIgMiAwIDExLTQgMCAyIDIgMCAwMTQgMHpNNyAxMGEyIDIgMCAxMS00IDAgMiAyIDAgMDE0IDB6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZVVzZXJSZW1vdmUgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMTMgN2E0IDQgMCAxMS04IDAgNCA0IDAgMDE4IDB6TTkgMTRhNiA2IDAgMDAtNiA2djFoMTJ2LTFhNiA2IDAgMDAtNi02ek0yMSAxMmgtNlwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVVc2VyIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTE2IDdhNCA0IDAgMTEtOCAwIDQgNCAwIDAxOCAwek0xMiAxNGE3IDcgMCAwMC03IDdoMTRhNyA3IDAgMDAtNy03elwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVVc2VycyAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0xMiA0LjM1NGE0IDQgMCAxMTAgNS4yOTJNMTUgMjFIM3YtMWE2IDYgMCAwMTEyIDB2MXptMCAwaDZ2LTFhNiA2IDAgMDAtOS01LjE5N00xMyA3YTQgNCAwIDExLTggMCA0IDQgMCAwMTggMHpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lVmFyaWFibGUgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNNC44NzEgNEExNy45MjYgMTcuOTI2IDAgMDAzIDEyYzAgMi44NzQuNjczIDUuNTkgMS44NzEgOG0xNC4xMyAwYTE3LjkyNiAxNy45MjYgMCAwMDEuODctOGMwLTIuODc0LS42NzMtNS41OS0xLjg3LThNOSA5aDEuMjQ2YTEgMSAwIDAxLjk2MS43MjVsMS41ODYgNS41NWExIDEgMCAwMC45NjEuNzI1SDE1bTEtN2gtLjA4YTIgMiAwIDAwLTEuNTE5LjY5OEw5LjYgMTUuMzAyQTIgMiAwIDAxOC4wOCAxNkg4XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZVZpZGVvQ2FtZXJhIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTE1IDEwbDQuNTUzLTIuMjc2QTEgMSAwIDAxMjEgOC42MTh2Ni43NjRhMSAxIDAgMDEtMS40NDcuODk0TDE1IDE0TTUgMThoOGEyIDIgMCAwMDItMlY4YTIgMiAwIDAwLTItMkg1YTIgMiAwIDAwLTIgMnY4YTIgMiAwIDAwMiAyelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVWaWV3Qm9hcmRzIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTkgMTdWN20wIDEwYTIgMiAwIDAxLTIgMkg1YTIgMiAwIDAxLTItMlY3YTIgMiAwIDAxMi0yaDJhMiAyIDAgMDEyIDJtMCAxMGEyIDIgMCAwMDIgMmgyYTIgMiAwIDAwMi0yTTkgN2EyIDIgMCAwMTItMmgyYTIgMiAwIDAxMiAybTAgMTBWN20wIDEwYTIgMiAwIDAwMiAyaDJhMiAyIDAgMDAyLTJWN2EyIDIgMCAwMC0yLTJoLTJhMiAyIDAgMDAtMiAyXCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZVZpZXdHcmlkQWRkIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTE3IDE0djZtLTMtM2g2TTYgMTBoMmEyIDIgMCAwMDItMlY2YTIgMiAwIDAwLTItMkg2YTIgMiAwIDAwLTIgMnYyYTIgMiAwIDAwMiAyem0xMCAwaDJhMiAyIDAgMDAyLTJWNmEyIDIgMCAwMC0yLTJoLTJhMiAyIDAgMDAtMiAydjJhMiAyIDAgMDAyIDJ6TTYgMjBoMmEyIDIgMCAwMDItMnYtMmEyIDIgMCAwMC0yLTJINmEyIDIgMCAwMC0yIDJ2MmEyIDIgMCAwMDIgMnpcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lVmlld0dyaWQgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNNCA2YTIgMiAwIDAxMi0yaDJhMiAyIDAgMDEyIDJ2MmEyIDIgMCAwMS0yIDJINmEyIDIgMCAwMS0yLTJWNnpNMTQgNmEyIDIgMCAwMTItMmgyYTIgMiAwIDAxMiAydjJhMiAyIDAgMDEtMiAyaC0yYTIgMiAwIDAxLTItMlY2ek00IDE2YTIgMiAwIDAxMi0yaDJhMiAyIDAgMDEyIDJ2MmEyIDIgMCAwMS0yIDJINmEyIDIgMCAwMS0yLTJ2LTJ6TTE0IDE2YTIgMiAwIDAxMi0yaDJhMiAyIDAgMDEyIDJ2MmEyIDIgMCAwMS0yIDJoLTJhMiAyIDAgMDEtMi0ydi0yelwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVWaWV3TGlzdCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk00IDZoMTZNNCAxMGgxNk00IDE0aDE2TTQgMThoMTZcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lVm9sdW1lT2ZmIChwcm9wcykge1xuICByZXR1cm4gR2VuSWNvbih7XCJ0YWdcIjpcInN2Z1wiLFwiYXR0clwiOntcImZpbGxcIjpcIm5vbmVcIixcInZpZXdCb3hcIjpcIjAgMCAyNCAyNFwiLFwic3Ryb2tlXCI6XCJjdXJyZW50Q29sb3JcIn0sXCJjaGlsZFwiOlt7XCJ0YWdcIjpcInBhdGhcIixcImF0dHJcIjp7XCJzdHJva2VMaW5lY2FwXCI6XCJyb3VuZFwiLFwic3Ryb2tlTGluZWpvaW5cIjpcInJvdW5kXCIsXCJzdHJva2VXaWR0aFwiOlwiMlwiLFwiZFwiOlwiTTUuNTg2IDE1SDRhMSAxIDAgMDEtMS0xdi00YTEgMSAwIDAxMS0xaDEuNTg2bDQuNzA3LTQuNzA3QzEwLjkyMyAzLjY2MyAxMiA0LjEwOSAxMiA1djE0YzAgLjg5MS0xLjA3NyAxLjMzNy0xLjcwNy43MDdMNS41ODYgMTV6XCIsXCJjbGlwUnVsZVwiOlwiZXZlbm9kZFwifX0se1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0xNyAxNGwyLTJtMCAwbDItMm0tMiAybC0yLTJtMiAybDIgMlwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVWb2x1bWVVcCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0xNS41MzYgOC40NjRhNSA1IDAgMDEwIDcuMDcybTIuODI4LTkuOWE5IDkgMCAwMTAgMTIuNzI4TTUuNTg2IDE1SDRhMSAxIDAgMDEtMS0xdi00YTEgMSAwIDAxMS0xaDEuNTg2bDQuNzA3LTQuNzA3QzEwLjkyMyAzLjY2MyAxMiA0LjEwOSAxMiA1djE0YzAgLjg5MS0xLjA3NyAxLjMzNy0xLjcwNy43MDdMNS41ODYgMTV6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZVdpZmkgKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNOC4xMTEgMTYuNDA0YTUuNSA1LjUgMCAwMTcuNzc4IDBNMTIgMjBoLjAxbS03LjA4LTcuMDcxYzMuOTA0LTMuOTA1IDEwLjIzNi0zLjkwNSAxNC4xNDEgME0xLjM5NCA5LjM5M2M1Ljg1Ny01Ljg1NyAxNS4zNTUtNS44NTcgMjEuMjEzIDBcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lWENpcmNsZSAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0xMCAxNGwyLTJtMCAwbDItMm0tMiAybC0yLTJtMiAybDIgMm03LTJhOSA5IDAgMTEtMTggMCA5IDkgMCAwMTE4IDB6XCJ9fV19KShwcm9wcyk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIEhpT3V0bGluZVggKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNNiAxOEwxOCA2TTYgNmwxMiAxMlwifX1dfSkocHJvcHMpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBIaU91dGxpbmVab29tSW4gKHByb3BzKSB7XG4gIHJldHVybiBHZW5JY29uKHtcInRhZ1wiOlwic3ZnXCIsXCJhdHRyXCI6e1wiZmlsbFwiOlwibm9uZVwiLFwidmlld0JveFwiOlwiMCAwIDI0IDI0XCIsXCJzdHJva2VcIjpcImN1cnJlbnRDb2xvclwifSxcImNoaWxkXCI6W3tcInRhZ1wiOlwicGF0aFwiLFwiYXR0clwiOntcInN0cm9rZUxpbmVjYXBcIjpcInJvdW5kXCIsXCJzdHJva2VMaW5lam9pblwiOlwicm91bmRcIixcInN0cm9rZVdpZHRoXCI6XCIyXCIsXCJkXCI6XCJNMjEgMjFsLTYtNm0yLTVhNyA3IDAgMTEtMTQgMCA3IDcgMCAwMTE0IDB6TTEwIDd2M20wIDB2M20wLTNoM20tMyAwSDdcIn19XX0pKHByb3BzKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gSGlPdXRsaW5lWm9vbU91dCAocHJvcHMpIHtcbiAgcmV0dXJuIEdlbkljb24oe1widGFnXCI6XCJzdmdcIixcImF0dHJcIjp7XCJmaWxsXCI6XCJub25lXCIsXCJ2aWV3Qm94XCI6XCIwIDAgMjQgMjRcIixcInN0cm9rZVwiOlwiY3VycmVudENvbG9yXCJ9LFwiY2hpbGRcIjpbe1widGFnXCI6XCJwYXRoXCIsXCJhdHRyXCI6e1wic3Ryb2tlTGluZWNhcFwiOlwicm91bmRcIixcInN0cm9rZUxpbmVqb2luXCI6XCJyb3VuZFwiLFwic3Ryb2tlV2lkdGhcIjpcIjJcIixcImRcIjpcIk0yMSAyMWwtNi02bTItNWE3IDcgMCAxMS0xNCAwIDcgNyAwIDAxMTQgMHpNMTMgMTBIN1wifX1dfSkocHJvcHMpO1xufTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbnZhciBfX3Jlc3QgPSAodGhpcyAmJiB0aGlzLl9fcmVzdCkgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgICB2YXIgdCA9IHt9O1xuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxuICAgICAgICB0W3BdID0gc1twXTtcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcbiAgICAgICAgfVxuICAgIHJldHVybiB0O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuSWNvbkJhc2UgPSBleHBvcnRzLkdlbkljb24gPSB2b2lkIDA7XG52YXIgUmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG52YXIgaWNvbkNvbnRleHRfMSA9IHJlcXVpcmUoXCIuL2ljb25Db250ZXh0XCIpO1xuZnVuY3Rpb24gVHJlZTJFbGVtZW50KHRyZWUpIHtcbiAgICByZXR1cm4gdHJlZSAmJiB0cmVlLm1hcChmdW5jdGlvbiAobm9kZSwgaSkgeyByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChub2RlLnRhZywgX19hc3NpZ24oeyBrZXk6IGkgfSwgbm9kZS5hdHRyKSwgVHJlZTJFbGVtZW50KG5vZGUuY2hpbGQpKTsgfSk7XG59XG5mdW5jdGlvbiBHZW5JY29uKGRhdGEpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHByb3BzKSB7IHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChJY29uQmFzZSwgX19hc3NpZ24oeyBhdHRyOiBfX2Fzc2lnbih7fSwgZGF0YS5hdHRyKSB9LCBwcm9wcyksIFRyZWUyRWxlbWVudChkYXRhLmNoaWxkKSkpOyB9O1xufVxuZXhwb3J0cy5HZW5JY29uID0gR2VuSWNvbjtcbmZ1bmN0aW9uIEljb25CYXNlKHByb3BzKSB7XG4gICAgdmFyIGVsZW0gPSBmdW5jdGlvbiAoY29uZikge1xuICAgICAgICB2YXIgYXR0ciA9IHByb3BzLmF0dHIsIHNpemUgPSBwcm9wcy5zaXplLCB0aXRsZSA9IHByb3BzLnRpdGxlLCBzdmdQcm9wcyA9IF9fcmVzdChwcm9wcywgW1wiYXR0clwiLCBcInNpemVcIiwgXCJ0aXRsZVwiXSk7XG4gICAgICAgIHZhciBjb21wdXRlZFNpemUgPSBzaXplIHx8IGNvbmYuc2l6ZSB8fCBcIjFlbVwiO1xuICAgICAgICB2YXIgY2xhc3NOYW1lO1xuICAgICAgICBpZiAoY29uZi5jbGFzc05hbWUpXG4gICAgICAgICAgICBjbGFzc05hbWUgPSBjb25mLmNsYXNzTmFtZTtcbiAgICAgICAgaWYgKHByb3BzLmNsYXNzTmFtZSlcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IChjbGFzc05hbWUgPyBjbGFzc05hbWUgKyAnICcgOiAnJykgKyBwcm9wcy5jbGFzc05hbWU7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcInN2Z1wiLCBfX2Fzc2lnbih7IHN0cm9rZTogXCJjdXJyZW50Q29sb3JcIiwgZmlsbDogXCJjdXJyZW50Q29sb3JcIiwgc3Ryb2tlV2lkdGg6IFwiMFwiIH0sIGNvbmYuYXR0ciwgYXR0ciwgc3ZnUHJvcHMsIHsgY2xhc3NOYW1lOiBjbGFzc05hbWUsIHN0eWxlOiBfX2Fzc2lnbihfX2Fzc2lnbih7IGNvbG9yOiBwcm9wcy5jb2xvciB8fCBjb25mLmNvbG9yIH0sIGNvbmYuc3R5bGUpLCBwcm9wcy5zdHlsZSksIGhlaWdodDogY29tcHV0ZWRTaXplLCB3aWR0aDogY29tcHV0ZWRTaXplLCB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIH0pLFxuICAgICAgICAgICAgdGl0bGUgJiYgUmVhY3QuY3JlYXRlRWxlbWVudChcInRpdGxlXCIsIG51bGwsIHRpdGxlKSxcbiAgICAgICAgICAgIHByb3BzLmNoaWxkcmVuKSk7XG4gICAgfTtcbiAgICByZXR1cm4gaWNvbkNvbnRleHRfMS5JY29uQ29udGV4dCAhPT0gdW5kZWZpbmVkXG4gICAgICAgID8gUmVhY3QuY3JlYXRlRWxlbWVudChpY29uQ29udGV4dF8xLkljb25Db250ZXh0LkNvbnN1bWVyLCBudWxsLCBmdW5jdGlvbiAoY29uZikgeyByZXR1cm4gZWxlbShjb25mKTsgfSlcbiAgICAgICAgOiBlbGVtKGljb25Db250ZXh0XzEuRGVmYXVsdENvbnRleHQpO1xufVxuZXhwb3J0cy5JY29uQmFzZSA9IEljb25CYXNlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkljb25Db250ZXh0ID0gZXhwb3J0cy5EZWZhdWx0Q29udGV4dCA9IHZvaWQgMDtcbnZhciBSZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcbmV4cG9ydHMuRGVmYXVsdENvbnRleHQgPSB7XG4gICAgY29sb3I6IHVuZGVmaW5lZCxcbiAgICBzaXplOiB1bmRlZmluZWQsXG4gICAgY2xhc3NOYW1lOiB1bmRlZmluZWQsXG4gICAgc3R5bGU6IHVuZGVmaW5lZCxcbiAgICBhdHRyOiB1bmRlZmluZWQsXG59O1xuZXhwb3J0cy5JY29uQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQgJiYgUmVhY3QuY3JlYXRlQ29udGV4dChleHBvcnRzLkRlZmF1bHRDb250ZXh0KTtcbiIsIm1vZHVsZS5leHBvcnRzLkljb25zTWFuaWZlc3QgPSBbXG4gIHtcbiAgICBcImlkXCI6IFwiZmFcIixcbiAgICBcIm5hbWVcIjogXCJGb250IEF3ZXNvbWVcIixcbiAgICBcInByb2plY3RVcmxcIjogXCJodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9cIixcbiAgICBcImxpY2Vuc2VcIjogXCJDQyBCWSA0LjAgTGljZW5zZVwiLFxuICAgIFwibGljZW5zZVVybFwiOiBcImh0dHBzOi8vY3JlYXRpdmVjb21tb25zLm9yZy9saWNlbnNlcy9ieS80LjAvXCJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogXCJpb1wiLFxuICAgIFwibmFtZVwiOiBcIklvbmljb25zIDRcIixcbiAgICBcInByb2plY3RVcmxcIjogXCJodHRwczovL2lvbmljb25zLmNvbS9cIixcbiAgICBcImxpY2Vuc2VcIjogXCJNSVRcIixcbiAgICBcImxpY2Vuc2VVcmxcIjogXCJodHRwczovL2dpdGh1Yi5jb20vaW9uaWMtdGVhbS9pb25pY29ucy9ibG9iL21hc3Rlci9MSUNFTlNFXCJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogXCJpbzVcIixcbiAgICBcIm5hbWVcIjogXCJJb25pY29ucyA1XCIsXG4gICAgXCJwcm9qZWN0VXJsXCI6IFwiaHR0cHM6Ly9pb25pY29ucy5jb20vXCIsXG4gICAgXCJsaWNlbnNlXCI6IFwiTUlUXCIsXG4gICAgXCJsaWNlbnNlVXJsXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2lvbmljLXRlYW0vaW9uaWNvbnMvYmxvYi9tYXN0ZXIvTElDRU5TRVwiXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IFwibWRcIixcbiAgICBcIm5hbWVcIjogXCJNYXRlcmlhbCBEZXNpZ24gaWNvbnNcIixcbiAgICBcInByb2plY3RVcmxcIjogXCJodHRwOi8vZ29vZ2xlLmdpdGh1Yi5pby9tYXRlcmlhbC1kZXNpZ24taWNvbnMvXCIsXG4gICAgXCJsaWNlbnNlXCI6IFwiQXBhY2hlIExpY2Vuc2UgVmVyc2lvbiAyLjBcIixcbiAgICBcImxpY2Vuc2VVcmxcIjogXCJodHRwczovL2dpdGh1Yi5jb20vZ29vZ2xlL21hdGVyaWFsLWRlc2lnbi1pY29ucy9ibG9iL21hc3Rlci9MSUNFTlNFXCJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogXCJ0aVwiLFxuICAgIFwibmFtZVwiOiBcIlR5cGljb25zXCIsXG4gICAgXCJwcm9qZWN0VXJsXCI6IFwiaHR0cDovL3MtaW5ncy5jb20vdHlwaWNvbnMvXCIsXG4gICAgXCJsaWNlbnNlXCI6IFwiQ0MgQlktU0EgMy4wXCIsXG4gICAgXCJsaWNlbnNlVXJsXCI6IFwiaHR0cHM6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL2xpY2Vuc2VzL2J5LXNhLzMuMC9cIlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiBcImdvXCIsXG4gICAgXCJuYW1lXCI6IFwiR2l0aHViIE9jdGljb25zIGljb25zXCIsXG4gICAgXCJwcm9qZWN0VXJsXCI6IFwiaHR0cHM6Ly9vY3RpY29ucy5naXRodWIuY29tL1wiLFxuICAgIFwibGljZW5zZVwiOiBcIk1JVFwiLFxuICAgIFwibGljZW5zZVVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9wcmltZXIvb2N0aWNvbnMvYmxvYi9tYXN0ZXIvTElDRU5TRVwiXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IFwiZmlcIixcbiAgICBcIm5hbWVcIjogXCJGZWF0aGVyXCIsXG4gICAgXCJwcm9qZWN0VXJsXCI6IFwiaHR0cHM6Ly9mZWF0aGVyaWNvbnMuY29tL1wiLFxuICAgIFwibGljZW5zZVwiOiBcIk1JVFwiLFxuICAgIFwibGljZW5zZVVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9mZWF0aGVyaWNvbnMvZmVhdGhlci9ibG9iL21hc3Rlci9MSUNFTlNFXCJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogXCJnaVwiLFxuICAgIFwibmFtZVwiOiBcIkdhbWUgSWNvbnNcIixcbiAgICBcInByb2plY3RVcmxcIjogXCJodHRwczovL2dhbWUtaWNvbnMubmV0L1wiLFxuICAgIFwibGljZW5zZVwiOiBcIkNDIEJZIDMuMFwiLFxuICAgIFwibGljZW5zZVVybFwiOiBcImh0dHBzOi8vY3JlYXRpdmVjb21tb25zLm9yZy9saWNlbnNlcy9ieS8zLjAvXCJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogXCJ3aVwiLFxuICAgIFwibmFtZVwiOiBcIldlYXRoZXIgSWNvbnNcIixcbiAgICBcInByb2plY3RVcmxcIjogXCJodHRwczovL2VyaWtmbG93ZXJzLmdpdGh1Yi5pby93ZWF0aGVyLWljb25zL1wiLFxuICAgIFwibGljZW5zZVwiOiBcIlNJTCBPRkwgMS4xXCIsXG4gICAgXCJsaWNlbnNlVXJsXCI6IFwiaHR0cDovL3NjcmlwdHMuc2lsLm9yZy9PRkxcIlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiBcImRpXCIsXG4gICAgXCJuYW1lXCI6IFwiRGV2aWNvbnNcIixcbiAgICBcInByb2plY3RVcmxcIjogXCJodHRwczovL3ZvcmlsbGF6LmdpdGh1Yi5pby9kZXZpY29ucy9cIixcbiAgICBcImxpY2Vuc2VcIjogXCJNSVRcIixcbiAgICBcImxpY2Vuc2VVcmxcIjogXCJodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFwiXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IFwiYWlcIixcbiAgICBcIm5hbWVcIjogXCJBbnQgRGVzaWduIEljb25zXCIsXG4gICAgXCJwcm9qZWN0VXJsXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2FudC1kZXNpZ24vYW50LWRlc2lnbi1pY29uc1wiLFxuICAgIFwibGljZW5zZVwiOiBcIk1JVFwiLFxuICAgIFwibGljZW5zZVVybFwiOiBcImh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXCJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogXCJic1wiLFxuICAgIFwibmFtZVwiOiBcIkJvb3RzdHJhcCBJY29uc1wiLFxuICAgIFwicHJvamVjdFVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2ljb25zXCIsXG4gICAgXCJsaWNlbnNlXCI6IFwiTUlUXCIsXG4gICAgXCJsaWNlbnNlVXJsXCI6IFwiaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcIlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiBcInJpXCIsXG4gICAgXCJuYW1lXCI6IFwiUmVtaXggSWNvblwiLFxuICAgIFwicHJvamVjdFVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9SZW1peC1EZXNpZ24vUmVtaXhJY29uXCIsXG4gICAgXCJsaWNlbnNlXCI6IFwiQXBhY2hlIExpY2Vuc2UgVmVyc2lvbiAyLjBcIixcbiAgICBcImxpY2Vuc2VVcmxcIjogXCJodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvXCJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogXCJmY1wiLFxuICAgIFwibmFtZVwiOiBcIkZsYXQgQ29sb3IgSWNvbnNcIixcbiAgICBcInByb2plY3RVcmxcIjogXCJodHRwczovL2dpdGh1Yi5jb20vaWNvbnM4L2ZsYXQtY29sb3ItaWNvbnNcIixcbiAgICBcImxpY2Vuc2VcIjogXCJNSVRcIixcbiAgICBcImxpY2Vuc2VVcmxcIjogXCJodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFwiXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IFwiZ3JcIixcbiAgICBcIm5hbWVcIjogXCJHcm9tbWV0LUljb25zXCIsXG4gICAgXCJwcm9qZWN0VXJsXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2dyb21tZXQvZ3JvbW1ldC1pY29uc1wiLFxuICAgIFwibGljZW5zZVwiOiBcIkFwYWNoZSBMaWNlbnNlIFZlcnNpb24gMi4wXCIsXG4gICAgXCJsaWNlbnNlVXJsXCI6IFwiaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL1wiXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IFwiaGlcIixcbiAgICBcIm5hbWVcIjogXCJIZXJvaWNvbnNcIixcbiAgICBcInByb2plY3RVcmxcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdGFpbHdpbmRsYWJzL2hlcm9pY29uc1wiLFxuICAgIFwibGljZW5zZVwiOiBcIk1JVFwiLFxuICAgIFwibGljZW5zZVVybFwiOiBcImh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXCJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogXCJzaVwiLFxuICAgIFwibmFtZVwiOiBcIlNpbXBsZSBJY29uc1wiLFxuICAgIFwicHJvamVjdFVybFwiOiBcImh0dHBzOi8vc2ltcGxlaWNvbnMub3JnL1wiLFxuICAgIFwibGljZW5zZVwiOiBcIkNDMCAxLjAgVW5pdmVyc2FsXCIsXG4gICAgXCJsaWNlbnNlVXJsXCI6IFwiaHR0cHM6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL3B1YmxpY2RvbWFpbi96ZXJvLzEuMC9cIlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiBcImltXCIsXG4gICAgXCJuYW1lXCI6IFwiSWNvTW9vbiBGcmVlXCIsXG4gICAgXCJwcm9qZWN0VXJsXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL0tleWFtb29uL0ljb01vb24tRnJlZVwiLFxuICAgIFwibGljZW5zZVwiOiBcIkNDIEJZIDQuMCBMaWNlbnNlXCJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogXCJiaVwiLFxuICAgIFwibmFtZVwiOiBcIkJveEljb25zXCIsXG4gICAgXCJwcm9qZWN0VXJsXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2F0aXNhd2QvYm94aWNvbnNcIixcbiAgICBcImxpY2Vuc2VcIjogXCJDQyBCWSA0LjAgTGljZW5zZVwiXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IFwiY2dcIixcbiAgICBcIm5hbWVcIjogXCJjc3MuZ2dcIixcbiAgICBcInByb2plY3RVcmxcIjogXCJodHRwczovL2dpdGh1Yi5jb20vYXN0cml0L2Nzcy5nZ1wiLFxuICAgIFwibGljZW5zZVwiOiBcIk1JVFwiLFxuICAgIFwibGljZW5zZVVybFwiOiBcImh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXCJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogXCJ2c2NcIixcbiAgICBcIm5hbWVcIjogXCJWUyBDb2RlIEljb25zXCIsXG4gICAgXCJwcm9qZWN0VXJsXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL21pY3Jvc29mdC92c2NvZGUtY29kaWNvbnNcIixcbiAgICBcImxpY2Vuc2VcIjogXCJDQyBCWSA0LjBcIixcbiAgICBcImxpY2Vuc2VVcmxcIjogXCJodHRwczovL2NyZWF0aXZlY29tbW9ucy5vcmcvbGljZW5zZXMvYnkvNC4wL1wiXG4gIH1cbl0iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19leHBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2V4cG9ydFN0YXIpIHx8IGZ1bmN0aW9uKG0sIGV4cG9ydHMpIHtcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgX19jcmVhdGVCaW5kaW5nKGV4cG9ydHMsIG0sIHApO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9pY29uc01hbmlmZXN0XCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9pY29uQmFzZVwiKSwgZXhwb3J0cyk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vaWNvbkNvbnRleHRcIiksIGV4cG9ydHMpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGNoYWtyYS11aS9yZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnJhbWVyLW1vdGlvblwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9