(function() {
var exports = {};
exports.id = 566;
exports.ids = [566];
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

/***/ 9663:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ tech_stack; },
  "getStaticProps": function() { return /* binding */ getStaticProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(3426);
// EXTERNAL MODULE: ./components/skills/section.tsx + 1 modules
var section = __webpack_require__(9176);
// EXTERNAL MODULE: ./node_modules/react-icons/ai/index.esm.js
var index_esm = __webpack_require__(8193);
// EXTERNAL MODULE: ./node_modules/react-icons/bi/index.esm.js
var bi_index_esm = __webpack_require__(7516);
// EXTERNAL MODULE: ./node_modules/react-icons/gi/index.esm.js
var gi_index_esm = __webpack_require__(2585);
;// CONCATENATED MODULE: external "react-palette"
var external_react_palette_namespaceObject = require("react-palette");;
// EXTERNAL MODULE: ./components/ui/motion.tsx
var motion = __webpack_require__(29);
// EXTERNAL MODULE: ./components/ui/page-transitions.tsx
var page_transitions = __webpack_require__(9206);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./components/ui/theme/index.ts
var theme = __webpack_require__(499);
;// CONCATENATED MODULE: ./components/skills/skill-card.tsx










const SkillCard = ({
  name,
  image,
  link,
  description
}) => {
  const linkColor = (0,theme/* useLinkColor */.o3)();
  const {
    data,
    loading
  } = (0,external_react_palette_namespaceObject.usePalette)(image);
  return /*#__PURE__*/jsx_runtime_.jsx(motion/* MotionBox */.uH, {
    variants: page_transitions/* item */.wc,
    children: /*#__PURE__*/jsx_runtime_.jsx(motion/* MotionBox */.uH, {
      whileHover: {
        y: -5
      },
      children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: link,
        passHref: true,
        children: /*#__PURE__*/jsx_runtime_.jsx(react_.Link, {
          isExternal: true,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.HStack, {
            p: 4,
            bg: (0,react_.useColorModeValue)("white", "gray.800"),
            rounded: "xl",
            borderWidth: "1px",
            borderColor: (0,react_.useColorModeValue)("gray.100", "gray.700"),
            w: "100%",
            textAlign: "left",
            align: "start",
            spacing: 4,
            _hover: {
              shadow: "md"
            },
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Box, {
              rounded: "lg",
              p: 2,
              position: "relative",
              overflow: "hidden",
              lineHeight: 0,
              boxShadow: "inset 0 0 1px 1px rgba(0, 0, 0, 0.015)",
              children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
                bg: data.lightVibrant,
                position: "absolute",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                opacity: 0.25
              }), loading ? /*#__PURE__*/jsx_runtime_.jsx(react_.Skeleton, {
                height: 26,
                width: 26,
                rounded: "md"
              }) : /*#__PURE__*/jsx_runtime_.jsx(react_.Image, {
                src: image,
                height: 26,
                width: 26,
                layout: "fixed",
                rounded: "md"
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx(react_.VStack, {
              align: "start",
              justify: "flex-start",
              spacing: 1,
              maxW: "lg",
              h: "100%",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.VStack, {
                spacing: 0,
                align: "start",
                flexGrow: 1,
                children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
                  fontWeight: "bold",
                  fontSize: "md",
                  noOfLines: 2,
                  color: linkColor,
                  children: name
                }), /*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
                  fontSize: "sm",
                  color: (0,react_.useColorModeValue)("gray.500", "gray.200"),
                  children: description
                })]
              })
            })]
          })
        })
      })
    })
  });
};

/* harmony default export */ var skill_card = (SkillCard);
// EXTERNAL MODULE: ./data/data.ts
var data = __webpack_require__(9304);
// EXTERNAL MODULE: ./components/layout/header.tsx + 1 modules
var header = __webpack_require__(6277);
// EXTERNAL MODULE: ./components/layout/pageLayout.tsx
var pageLayout = __webpack_require__(1388);
;// CONCATENATED MODULE: ./pages/tech-stack.tsx
















const TechStack = ({
  skills
}) => {
  const {
    0: skillsList,
    1: setSkillsList
  } = (0,external_react_.useState)([]);
  external_react_.useEffect(() => {
    setSkillsList(skills);
  }, []);

  const filterSkills = tab => {
    if (tab.length) setSkillsList(skills.filter(skill => skill.type === tab));else setSkillsList(skills);
  };

  return /*#__PURE__*/jsx_runtime_.jsx(pageLayout/* default */.Z, {
    title: "Skills",
    keywords: "rails, ruby, react, javascript, typescript",
    children: /*#__PURE__*/jsx_runtime_.jsx(page_transitions/* PageSlideFade */.f6, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.VStack, {
        spacing: 8,
        children: [/*#__PURE__*/jsx_runtime_.jsx(section/* default */.Z, {
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.VStack, {
            children: [/*#__PURE__*/jsx_runtime_.jsx(header/* default */.Z, {
              mt: 0,
              mb: 1,
              children: "Tech Stack"
            }), /*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
              fontSize: "xl",
              color: (0,react_.useColorModeValue)("gray.500", "gray.200"),
              maxW: "lg",
              textAlign: "center",
              children: "A list of my favorite tools and technologies that I use on a regular basis."
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(section/* default */.Z, {
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Tabs, {
            variant: "soft-rounded",
            colorScheme: "blue",
            align: "center",
            w: "100%",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.TabList, {
              display: "flex",
              flexWrap: "wrap",
              children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Tab, {
                bg: (0,react_.useColorModeValue)("gray.100", "gray.800"),
                color: (0,react_.useColorModeValue)("gray.600", "gray.500"),
                _selected: {
                  color: "green.800",
                  bg: "green.100"
                },
                mr: 2,
                mt: 2,
                onClick: () => filterSkills(""),
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.HStack, {
                  spacing: 1,
                  children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Icon, {
                    as: index_esm/* AiTwotoneThunderbolt */.QJi
                  }), /*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
                    children: "All"
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx(react_.Tab, {
                bg: (0,react_.useColorModeValue)("gray.100", "gray.800"),
                color: (0,react_.useColorModeValue)("gray.500", "gray.500"),
                _selected: {
                  color: (0,react_.useColorModeValue)("gray.100", "gray.800"),
                  bg: (0,react_.useColorModeValue)("gray.900", "gray.100")
                },
                mr: 2,
                mt: 2,
                onClick: () => filterSkills("development"),
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.HStack, {
                  spacing: 1,
                  children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Icon, {
                    as: bi_index_esm/* BiDesktop */.lpX
                  }), /*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
                    children: "Mobil Development"
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx(react_.Tab, {
                bg: (0,react_.useColorModeValue)("gray.100", "gray.800"),
                color: (0,react_.useColorModeValue)("gray.600", "gray.500"),
                _selected: {
                  color: "green.800",
                  bg: "green.100"
                },
                mr: 2,
                mt: 2,
                onClick: () => filterSkills("design"),
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.HStack, {
                  spacing: 1,
                  children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Icon, {
                    as: gi_index_esm/* GiSpiderWeb */.vc2
                  }), /*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
                    children: "Design"
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx(react_.Tab, {
                bg: (0,react_.useColorModeValue)("gray.100", "gray.800"),
                color: (0,react_.useColorModeValue)("gray.600", "gray.500"),
                _selected: {
                  color: "red.800",
                  bg: "red.100"
                },
                mr: 2,
                mt: 2,
                onClick: () => filterSkills("devops"),
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.HStack, {
                  spacing: 1,
                  children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Icon, {
                    as: index_esm/* AiOutlineCloudServer */.qer
                  }), /*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
                    children: "Devops"
                  })]
                })
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.TabPanels, {
              minHeight: "45vh",
              children: [/*#__PURE__*/jsx_runtime_.jsx(react_.TabPanel, {
                px: 0,
                children: /*#__PURE__*/jsx_runtime_.jsx(motion/* MotionBox */.uH, {
                  variants: page_transitions/* container */.nC,
                  initial: "hidden",
                  animate: "visible",
                  children: /*#__PURE__*/jsx_runtime_.jsx(react_.SimpleGrid, {
                    columns: [1, 1, 2],
                    spacing: 4,
                    mt: 8,
                    children: skillsList.map((tool, index) => /*#__PURE__*/jsx_runtime_.jsx(skill_card, {
                      name: tool.name,
                      description: tool.description,
                      image: tool.image // platform={"web"}
                      ,
                      link: tool.link
                    }, index))
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx(react_.TabPanel, {
                px: 0,
                children: /*#__PURE__*/jsx_runtime_.jsx(motion/* MotionBox */.uH, {
                  variants: page_transitions/* container */.nC,
                  initial: "hidden",
                  animate: "visible",
                  children: /*#__PURE__*/jsx_runtime_.jsx(react_.SimpleGrid, {
                    columns: [1, 2],
                    spacing: 4,
                    mt: 8,
                    children: skillsList.map((tool, index) => /*#__PURE__*/jsx_runtime_.jsx(skill_card, {
                      name: tool.name,
                      description: tool.description,
                      image: tool.image // platform={"web"}
                      ,
                      link: tool.link
                    }, index))
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx(react_.TabPanel, {
                px: 0,
                children: /*#__PURE__*/jsx_runtime_.jsx(motion/* MotionBox */.uH, {
                  variants: page_transitions/* container */.nC,
                  initial: "hidden",
                  animate: "visible",
                  children: /*#__PURE__*/jsx_runtime_.jsx(react_.SimpleGrid, {
                    columns: [1, 2],
                    spacing: 4,
                    mt: 8,
                    children: skillsList.map((tool, index) => /*#__PURE__*/jsx_runtime_.jsx(skill_card, {
                      name: tool.name,
                      description: tool.description,
                      image: tool.image // platform={"web"}
                      ,
                      link: tool.link
                    }, index))
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx(react_.TabPanel, {
                px: 0,
                children: /*#__PURE__*/jsx_runtime_.jsx(motion/* MotionBox */.uH, {
                  variants: page_transitions/* container */.nC,
                  initial: "hidden",
                  animate: "visible",
                  children: /*#__PURE__*/jsx_runtime_.jsx(react_.SimpleGrid, {
                    columns: [1, 2],
                    spacing: 4,
                    mt: 8,
                    children: skillsList.map((tool, index) => /*#__PURE__*/jsx_runtime_.jsx(skill_card, {
                      name: tool.name,
                      description: tool.description,
                      image: tool.image // platform={"web"}
                      ,
                      link: tool.link
                    }, index))
                  })
                })
              })]
            })]
          })
        })]
      })
    })
  });
};

function getStaticProps() {
  return {
    props: {
      skills: data/* skillsArray */.BO
    }
  };
}
/* harmony default export */ var tech_stack = (TechStack);

/***/ }),

/***/ 3426:
/***/ (function(module) {

"use strict";
module.exports = require("@chakra-ui/react");;

/***/ }),

/***/ 8547:
/***/ (function(module) {

"use strict";
module.exports = require("@chakra-ui/theme-tools");;

/***/ }),

/***/ 4282:
/***/ (function(module) {

"use strict";
module.exports = require("@chakra-ui/utils");;

/***/ }),

/***/ 762:
/***/ (function(module) {

"use strict";
module.exports = require("framer-motion");;

/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

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

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [127,664,516,193,585,29,205,277,759,499,304,176], function() { return __webpack_exec__(9663); });
module.exports = __webpack_exports__;

})();