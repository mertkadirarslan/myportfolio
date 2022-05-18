exports.id = 205;
exports.ids = [205];
exports.modules = {

/***/ 9848:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(701);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);




const Meta = ({
  title,
  keywords,
  description,
  image
}) => {
  title = title.includes('Mert') ? title : title.concat(' | Mert Kadir');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
      name: "viewport",
      content: "width=device-width, initial-scale=1"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
      charSet: "utf-8"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
      name: "keywords",
      content: keywords
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
      name: "description",
      content: description
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
      property: "og:title",
      content: title
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
      property: "og:image",
      content: image ? image : "/logo512.png"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
      children: title
    })]
  });
};

Meta.defaultProps = {
  title: "Mert Kadir - Mobile Developer",
  keywords: "Mobil Application Developer",
  description: "Software student mobile lover."
};
/* harmony default export */ __webpack_exports__["Z"] = (Meta);

/***/ }),

/***/ 9206:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EY": function() { return /* binding */ stagger; },
/* harmony export */   "eu": function() { return /* binding */ fadeInUp; },
/* harmony export */   "nC": function() { return /* binding */ container; },
/* harmony export */   "wc": function() { return /* binding */ item; },
/* harmony export */   "f6": function() { return /* binding */ PageSlideFade; },
/* harmony export */   "eF": function() { return /* binding */ StaggerChildren; },
/* harmony export */   "xp": function() { return /* binding */ CardTransition; }
/* harmony export */ });
/* unused harmony export easing */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3426);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29);



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
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.SlideFade, {
    in: true,
    children: children
  });
};
const StaggerChildren = ({
  children
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_motion__WEBPACK_IMPORTED_MODULE_2__/* .MotionBox */ .uH, {
    animate: {
      opacity: 1,
      translateY: 0
    },
    variants: staggerVariants,
    children: children
  });
};
const CardTransition = ({
  children
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_motion__WEBPACK_IMPORTED_MODULE_2__/* .MotionBox */ .uH, {
    variants: variants,
    children: children
  });
};

/***/ })

};
;