(function() {
var exports = {};
exports.id = 327;
exports.ids = [327];
exports.modules = {

/***/ 1388:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(762);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _meta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9848);





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
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_meta__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    title: title,
    description: description,
    keywords: keywords,
    image: image
  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.main, {
    initial: "hidden",
    animate: "enter",
    exit: "exit",
    variants: variants,
    transition: {
      type: "linear"
    },
    children: children
  })]
});

/* harmony default export */ __webpack_exports__["Z"] = (PageLayout);

/***/ }),

/***/ 7713:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ projects; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(3426);
;// CONCATENATED MODULE: ./data/projectData.tsx
const projectsList = [{
  title: "Basic Instagram",
  imageLight: '/assets/images/projects/cover/basicig.png',
  blurHash: "L4ADc400P*Zi4Tu1y;Qo00pH#YXl",
  site: "https://github.com/mertkadirarslan/BasicInstagramClone",
  description: `In its simplest form, Instagram has infrastructure. It has no design and details, has the features to create users, create posts, select photos, annotate and log out.`,
  techStack: ["FireBase", "XML", "Java", "Basic"]
}, {
  title: "Basic Fruit Ninja ",
  imageLight: 'https://res.cloudinary.com/practicaldev/image/fetch/s--iSRx_d8G--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/h2x0szexz7l1qdeoy1nz.png',
  blurHash: "L4ADc400P*Zi4Tu1y;Qo00pH#YXl",
  site: "https://dev.to/mert_kadir/basic-fruit-ninja-1154",
  description: `Basic-Fruit-Ninja this game is made using the libGDX library.`,
  techStack: ["libGDX", "XML", "Java", "Game", "Basic"]
}];
// EXTERNAL MODULE: ./components/layout/pageLayout.tsx
var pageLayout = __webpack_require__(1388);
// EXTERNAL MODULE: ./components/ui/page-transitions.tsx
var page_transitions = __webpack_require__(9206);
// EXTERNAL MODULE: ./components/layout/header.tsx + 1 modules
var header = __webpack_require__(6277);
// EXTERNAL MODULE: external "framer-motion"
var external_framer_motion_ = __webpack_require__(762);
;// CONCATENATED MODULE: ./components/ui/framerAnimations.tsx
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
// EXTERNAL MODULE: ./node_modules/react-icons/hi/index.esm.js
var index_esm = __webpack_require__(3854);
// EXTERNAL MODULE: ./components/ui/motion.tsx
var motion = __webpack_require__(29);
;// CONCATENATED MODULE: ./components/layout/projectLayout.tsx









const ProjectLayoutMed = ({
  project
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Flex, {
    display: ["flex", "flex", "none"],
    rounded: "xl",
    borderWidth: "1px",
    borderColor: (0,react_.useColorModeValue)("gray.600", "gray.700"),
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
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
      href: project.site,
      target: "_blank",
      rel: "noopener noreferrer",
      children: [/*#__PURE__*/jsx_runtime_.jsx(react_.AspectRatio, {
        ratio: 1.85 / 1,
        w: "100%",
        h: "100%",
        rounded: "xl",
        children: /*#__PURE__*/jsx_runtime_.jsx(react_.Image, {
          src: project.imageLight,
          fallback: /*#__PURE__*/jsx_runtime_.jsx(react_.Skeleton, {}),
          size: "lg",
          width: 'full',
          height: 'full',
          position: "absolute",
          rounded: "xl",
          objectFit: "cover",
          opacity: 0.5
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
        width: 'full',
        height: 'full',
        position: "absolute",
        bg: (0,react_.useColorModeValue)("gray.100", "gray.900"),
        opacity: (0,react_.useColorModeValue)("0.5", "1")
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(motion/* MotionBox */.uH, {
      initial: "initial",
      animate: "animate",
      width: ["full", "70%"],
      rounded: "lg",
      my: "auto",
      px: "6",
      py: "3",
      position: "relative",
      zIndex: "10",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(motion/* MotionBox */.uH, {
        variants: stagger,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
          href: project.site,
          target: "_blank",
          rel: "noopener noreferrer",
          children: [/*#__PURE__*/jsx_runtime_.jsx(motion/* MotionText */.Tf, {
            variants: fadeInUp,
            fontSize: "2xl",
            fontWeight: "bold",
            color: (0,react_.useColorModeValue)("gray.900", "gray.100"),
            children: project.title
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Box, {
            width: "full",
            children: [/*#__PURE__*/jsx_runtime_.jsx(motion/* MotionText */.Tf, {
              variants: fadeInUp,
              bg: (0,react_.useColorModeValue)("gray.100", "gray.700"),
              rounded: "lg",
              align: "left",
              p: "4",
              fontSize: "sm",
              children: project.description
            }), project.techStack && /*#__PURE__*/jsx_runtime_.jsx(motion/* MotionList */.CK, {
              variants: fadeInUp,
              display: "flex",
              fontSize: "xs",
              justifyContent: "start",
              mt: "3",
              color: (0,react_.useColorModeValue)("gray.900", "gray.100"),
              fontWeight: "bold",
              children: project.techStack.map((s, index) => /*#__PURE__*/jsx_runtime_.jsx(react_.ListItem, {
                mr: "2",
                children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                  children: s
                })
              }, index))
            })]
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx(motion/* MotionFlex */.HZ, {
          variants: fadeInUp,
          pt: 2,
          mt: 1,
          justifyContent: "start",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            href: project.site,
            target: "_blank",
            rel: "noopener noreferrer",
            children: /*#__PURE__*/jsx_runtime_.jsx(react_.IconButton, {
              colorScheme: "gray",
              rounded: "full",
              size: "md",
              "aria-label": "medal",
              icon: /*#__PURE__*/jsx_runtime_.jsx(index_esm/* HiOutlineExternalLink */.Hi9, {})
            })
          })
        })]
      })
    })]
  });
};

const LeftProjectLayoutLarge = ({
  project
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Flex, {
    width: "full",
    display: ["none", "none", "flex"],
    children: [/*#__PURE__*/jsx_runtime_.jsx(motion/* MotionBox */.uH, {
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
      borderColor: (0,react_.useColorModeValue)("gray.600", "gray.700"),
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
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        href: project.site,
        target: "_blank",
        rel: "noopener noreferrer",
        children: /*#__PURE__*/jsx_runtime_.jsx(react_.AspectRatio, {
          ratio: 1.85 / 1,
          w: "100%",
          h: "100%",
          rounded: "xl",
          children: /*#__PURE__*/jsx_runtime_.jsx(react_.Image, {
            src: project.imageLight,
            fallback: /*#__PURE__*/jsx_runtime_.jsx(react_.Skeleton, {}),
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
          })
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(motion/* MotionBox */.uH, {
      initial: "initial",
      animate: "animate",
      width: "40%",
      rounded: "lg",
      my: "auto",
      zIndex: "10",
      ml: "-6rem",
      align: "right",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_framer_motion_.motion.div, {
        variants: stagger,
        children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
          href: project.site,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "text-right",
          children: /*#__PURE__*/jsx_runtime_.jsx(motion/* MotionText */.Tf, {
            variants: fadeInUp,
            fontSize: "3xl",
            fontWeight: "bold",
            color: (0,react_.useColorModeValue)("gray.900", "gray.100"),
            children: project.title
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Box, {
          width: "full",
          children: [/*#__PURE__*/jsx_runtime_.jsx(motion/* MotionText */.Tf, {
            variants: fadeInUp,
            bg: (0,react_.useColorModeValue)("gray.100", "gray.700"),
            rounded: "lg",
            align: "right",
            p: "4",
            fontSize: "md",
            children: project.description
          }), project.techStack && /*#__PURE__*/jsx_runtime_.jsx(motion/* MotionList */.CK, {
            variants: fadeInUp,
            display: "flex",
            fontSize: "sm",
            justifyContent: "end",
            mt: "3",
            color: (0,react_.useColorModeValue)("gray.900", "gray.100"),
            fontWeight: "bold",
            children: project.techStack.map((s, index) => /*#__PURE__*/jsx_runtime_.jsx(react_.ListItem, {
              mr: "3",
              children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                children: s
              })
            }, index))
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx(motion/* MotionFlex */.HZ, {
          variants: fadeInUp,
          pt: 2,
          mt: 1,
          justifyContent: "end",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            href: project.site,
            target: "_blank",
            rel: "noopener noreferrer",
            children: /*#__PURE__*/jsx_runtime_.jsx(react_.IconButton, {
              colorScheme: "gray",
              rounded: "full",
              size: "md",
              "aria-label": "medal",
              icon: /*#__PURE__*/jsx_runtime_.jsx(index_esm/* HiOutlineExternalLink */.Hi9, {})
            })
          })
        })]
      })
    })]
  });
};

const RightProjectLayoutLarge = ({
  project
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Flex, {
    width: "full",
    display: ["none", "none", "flex"],
    children: [/*#__PURE__*/jsx_runtime_.jsx(motion/* MotionBox */.uH, {
      initial: "initial",
      animate: "animate",
      width: "40%",
      rounded: "lg",
      my: "auto",
      zIndex: "10",
      mr: "-6rem",
      align: "left",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_framer_motion_.motion.div, {
        variants: stagger,
        children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
          href: project.site,
          target: "_blank",
          rel: "noopener noreferrer",
          children: /*#__PURE__*/jsx_runtime_.jsx(motion/* MotionText */.Tf, {
            variants: fadeInUp,
            fontSize: "3xl",
            fontWeight: "bold",
            color: (0,react_.useColorModeValue)("gray.900", "gray.100"),
            children: project.title
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Box, {
          width: "full",
          children: [/*#__PURE__*/jsx_runtime_.jsx(motion/* MotionText */.Tf, {
            variants: fadeInUp,
            bg: (0,react_.useColorModeValue)("gray.100", "gray.700"),
            rounded: "lg",
            align: "left",
            p: "4",
            fontSize: "md",
            children: project.description
          }), project.techStack && /*#__PURE__*/jsx_runtime_.jsx(motion/* MotionList */.CK, {
            variants: fadeInUp,
            display: "flex",
            fontSize: "sm",
            justifyContent: "start",
            mt: "3",
            color: (0,react_.useColorModeValue)("gray.900", "gray.100"),
            fontWeight: "bold",
            children: project.techStack.map((s, index) => /*#__PURE__*/jsx_runtime_.jsx(react_.ListItem, {
              mr: "3",
              children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                children: s
              })
            }, index))
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx(motion/* MotionFlex */.HZ, {
          variants: fadeInUp,
          pt: 2,
          mt: 1,
          justifyContent: "start",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            href: project.site,
            target: "_blank",
            rel: "noopener noreferrer",
            children: /*#__PURE__*/jsx_runtime_.jsx(react_.IconButton, {
              colorScheme: "gray",
              rounded: "full",
              size: "md",
              "aria-label": "medal",
              icon: /*#__PURE__*/jsx_runtime_.jsx(index_esm/* HiOutlineExternalLink */.Hi9, {})
            })
          })
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(motion/* MotionBox */.uH, {
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
      borderColor: (0,react_.useColorModeValue)("gray.600", "gray.700"),
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
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        href: project.site,
        target: "_blank",
        rel: "noopener noreferrer",
        children: /*#__PURE__*/jsx_runtime_.jsx(react_.AspectRatio, {
          ratio: 1.85 / 1,
          w: "100%",
          h: "100%",
          rounded: "xl",
          children: /*#__PURE__*/jsx_runtime_.jsx(react_.Image, {
            src: project.imageLight,
            fallback: /*#__PURE__*/jsx_runtime_.jsx(react_.Skeleton, {}),
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
          })
        })
      })
    })]
  });
};


;// CONCATENATED MODULE: ./pages/projects.tsx










const title = "Projects 📚";
const subtitle = "A selection of projects I've worked on, during my career as a software developer.";
const TURQUOISE = "#06b6d4";

const Projects = () => {
  return /*#__PURE__*/jsx_runtime_.jsx(external_react_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx(pageLayout/* default */.Z, {
      title: title,
      description: subtitle,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(page_transitions/* PageSlideFade */.f6, {
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.VStack, {
          align: "start",
          children: [/*#__PURE__*/jsx_runtime_.jsx(header/* default */.Z, {
            underlineColor: TURQUOISE,
            mt: 0,
            mb: 2,
            children: "Projects"
          }), /*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
            color: (0,react_.useColorModeValue)("gray.500", "gray.200"),
            textAlign: "left",
            children: subtitle
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx(react_.VStack, {
          spacing: 8,
          mt: ["7", "0", "0"],
          children: projectsList.map((project, index) => /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [/*#__PURE__*/jsx_runtime_.jsx(ProjectLayoutMed, {
              project: project
            }), index % 2 === 0 ? /*#__PURE__*/jsx_runtime_.jsx(LeftProjectLayoutLarge, {
              project: project
            }) : /*#__PURE__*/jsx_runtime_.jsx(RightProjectLayoutLarge, {
              project: project
            })]
          }))
        })]
      })
    })
  });
};

/* harmony default export */ var projects = (Projects);

/***/ }),

/***/ 3426:
/***/ (function(module) {

"use strict";
module.exports = require("@chakra-ui/react");;

/***/ }),

/***/ 762:
/***/ (function(module) {

"use strict";
module.exports = require("framer-motion");;

/***/ }),

/***/ 701:
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [127,854,29,205,277], function() { return __webpack_exec__(7713); });
module.exports = __webpack_exports__;

})();