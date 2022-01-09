(function() {
var exports = {};
exports.id = 468;
exports.ids = [468];
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

/***/ 7177:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ open_source; },
  "getStaticProps": function() { return /* binding */ getStaticProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(3426);
// EXTERNAL MODULE: ./components/ui/page-transitions.tsx
var page_transitions = __webpack_require__(9206);
// EXTERNAL MODULE: ./components/layout/header.tsx + 1 modules
var header = __webpack_require__(6277);
// EXTERNAL MODULE: ./node_modules/react-icons/ri/index.esm.js
var index_esm = __webpack_require__(9352);
// EXTERNAL MODULE: ./components/ui/motion.tsx
var motion = __webpack_require__(29);
// EXTERNAL MODULE: ./components/ui/theme/index.ts
var theme = __webpack_require__(499);
// EXTERNAL MODULE: ./node_modules/react-icons/ai/index.esm.js
var ai_index_esm = __webpack_require__(8193);
// EXTERNAL MODULE: ./node_modules/react-icons/fi/index.esm.js
var fi_index_esm = __webpack_require__(6893);
;// CONCATENATED MODULE: external "react-progressive-image"
var external_react_progressive_image_namespaceObject = require("react-progressive-image");;
var external_react_progressive_image_default = /*#__PURE__*/__webpack_require__.n(external_react_progressive_image_namespaceObject);
;// CONCATENATED MODULE: external "react-blurhash"
var external_react_blurhash_namespaceObject = require("react-blurhash");;
;// CONCATENATED MODULE: ./components/ui/lazy-image.tsx






const LazyImage = props => {
  const {
    src,
    blurHash,
    width,
    height,
    size,
    layout,
    rounded
  } = props;
  const placeholder = '/assets/images/placeholder.png';
  return /*#__PURE__*/jsx_runtime_.jsx((external_react_progressive_image_default()), {
    delay: 500,
    src: src,
    placeholder: placeholder,
    children: (src, loading) => {
      return loading ? /*#__PURE__*/jsx_runtime_.jsx(external_react_blurhash_namespaceObject.BlurhashCanvas, {
        hash: blurHash,
        width: width,
        height: height,
        punch: 1,
        style: {
          borderRadius: rounded ? "5px" : ""
        }
      }) : /*#__PURE__*/jsx_runtime_.jsx(react_.Image, {
        src: src,
        objectFit: "cover",
        alt: "cover image",
        width: width,
        height: height,
        size: size,
        layout: layout,
        rounded: rounded,
        fallbackSrc: placeholder
      });
    }
  });
};

/* harmony default export */ var lazy_image = (LazyImage);
;// CONCATENATED MODULE: ./components/open-source/offline-data-card.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const RepositoryCard = props => {
  const {
    key,
    title,
    description,
    cover,
    blurHash,
    technologies,
    url,
    live,
    stars,
    fork
  } = props;
  const {
    isOpen,
    onOpen,
    onClose
  } = (0,react_.useDisclosure)();
  const linkColor = (0,theme/* useLinkColor */.o3)();

  const handleClick = () => {
    onOpen(); // window.open(link);
    // if (type == "link" || type == "article") {
    //   window.open(link);
    // } else {
    //   onOpen();
    // }
  };

  const handleLinkClick = (e, link) => {
    window.open(link);
    e.stopPropagation();
  };

  const transition = {
    duration: 0.5,
    ease: [0.43, 0.13, 0.23, 0.96]
  };
  const thumbnailVariants = {
    initial: {
      scale: 0.9,
      opacity: 0
    },
    enter: {
      scale: 1,
      opacity: 1,
      transition
    },
    exit: {
      scale: 0.5,
      opacity: 0,
      transition: _objectSpread({
        duration: 1.5
      }, transition)
    }
  };
  const imageVariants = {
    hover: {
      scale: 1.1
    }
  };
  return /*#__PURE__*/jsx_runtime_.jsx(page_transitions/* CardTransition */.xp, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Box, {
      onClick: handleClick,
      cursor: "pointer",
      size: "xl",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.VStack //   w="100%"
      , {
        rounded: "xl",
        borderWidth: "1px",
        bg: (0,react_.useColorModeValue)("white", "gray.800"),
        borderColor: (0,react_.useColorModeValue)("gray.100", "gray.700"),
        _hover: {
          shadow: "lg",
          textDecoration: "none"
        },
        overflow: "hidden",
        align: "start",
        spacing: 0,
        children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
          position: "relative",
          w: "100%",
          children: /*#__PURE__*/jsx_runtime_.jsx(motion/* MotionBox */.uH, {
            variants: thumbnailVariants,
            children: /*#__PURE__*/jsx_runtime_.jsx(motion/* MotionBox */.uH, {
              whileHover: "hover",
              variants: imageVariants,
              transition: transition,
              children: /*#__PURE__*/jsx_runtime_.jsx(react_.AspectRatio, {
                ratio: 1.85 / 1,
                maxW: "400px",
                w: "100%",
                borderBottomWidth: "1px",
                borderColor: (0,react_.useColorModeValue)("gray.100", "gray.700"),
                children: /*#__PURE__*/jsx_runtime_.jsx(lazy_image, {
                  src: cover,
                  blurHash: blurHash
                })
              })
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.VStack, {
          py: 2,
          px: [2, 4],
          spacing: 1,
          align: "start",
          w: "100%",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Flex, {
            justifyContent: "space-between",
            width: "100%",
            children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Tooltip, {
              hasArrow: true,
              label: "Github link",
              placement: "top",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.HStack, {
                children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Icon, {
                  as: fi_index_esm/* FiGithub */.uOf,
                  boxSize: "0.9em",
                  mt: "1px"
                }), /*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
                  fontSize: "sm",
                  noOfLines: 1,
                  fontWeight: "600",
                  align: "left",
                  onClick: e => handleLinkClick(e, url),
                  color: linkColor,
                  children: title
                })]
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Flex, {
              children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Icon, {
                as: ai_index_esm/* AiOutlineStar */.y5j,
                boxSize: "0.9em",
                mt: "1px"
              }), /*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
                as: "span",
                ml: "1",
                fontSize: "sm",
                children: stars
              })]
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx(react_.Flex, {
            justifyContent: "space-between",
            width: "100%",
            children: /*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
              children: /*#__PURE__*/jsx_runtime_.jsx(react_.HStack, {
                spacing: "1",
                children: technologies.map((tech, index) => /*#__PURE__*/jsx_runtime_.jsx(react_.Tag, {
                  size: "sm",
                  colorScheme: (0,theme/* getTagColor */.vm)(tech),
                  children: /*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
                    fontSize: ["0.55rem", "inherit", "inherit"],
                    children: tech
                  })
                }, index))
              })
            })
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Modal, {
        isOpen: isOpen,
        onClose: onClose,
        isCentered: true,
        allowPinchZoom: true,
        children: [/*#__PURE__*/jsx_runtime_.jsx(react_.ModalOverlay, {}), /*#__PURE__*/jsx_runtime_.jsx(react_.ModalContent, {
          bg: "none",
          maxW: "28rem",
          w: "auto",
          children: /*#__PURE__*/jsx_runtime_.jsx(react_.ModalBody, {
            p: 0,
            rounded: "lg",
            overflow: "hidden",
            bg: "none",
            children: /*#__PURE__*/jsx_runtime_.jsx(react_.Center, {
              children: /*#__PURE__*/jsx_runtime_.jsx(react_.Image, {
                src: cover,
                rounded: "lg"
              })
            })
          })
        })]
      })]
    })
  });
};

/* harmony default export */ var offline_data_card = (RepositoryCard);
;// CONCATENATED MODULE: ./components/open-source/offline-data.tsx



 // import { repositories } from "../../data/repositories";




const OfflineData = ({
  repositories
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(page_transitions/* PageSlideFade */.f6, {
    children: /*#__PURE__*/jsx_runtime_.jsx(page_transitions/* StaggerChildren */.eF, {
      children: /*#__PURE__*/jsx_runtime_.jsx(react_.SimpleGrid, {
        columns: [2, 2, 3],
        spacing: 4,
        mt: 12,
        children: repositories.map((repo, index) => /*#__PURE__*/jsx_runtime_.jsx(motion/* MotionBox */.uH, {
          whileHover: {
            y: -5
          },
          children: /*#__PURE__*/jsx_runtime_.jsx(offline_data_card, {
            title: repo.title,
            description: repo.description,
            cover: repo.cover,
            blurHash: repo.blurHash,
            technologies: repo.technologies,
            url: repo.url,
            live: repo.live,
            stars: repo.stars,
            fork: repo.fork
          }, index)
        }, index))
      })
    })
  });
};

/* harmony default export */ var offline_data = (OfflineData);
;// CONCATENATED MODULE: external "use-http"
var external_use_http_namespaceObject = require("use-http");;
var external_use_http_default = /*#__PURE__*/__webpack_require__.n(external_use_http_namespaceObject);
// EXTERNAL MODULE: ./node_modules/react-icons/bi/index.esm.js
var bi_index_esm = __webpack_require__(7516);
;// CONCATENATED MODULE: ./components/open-source/live-data-card.tsx









const live_data_card_RepositoryCard = props => {
  const {
    title,
    description,
    language,
    url,
    stargazers_count,
    forks_count
  } = props;
  const linkColor = (0,theme/* useLinkColor */.o3)();

  const handleLinkClick = (e, link) => {
    window.open(link);
    e.stopPropagation();
  };

  return /*#__PURE__*/jsx_runtime_.jsx(motion/* MotionBox */.uH, {
    whileHover: {
      y: -5
    },
    children: /*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
      size: "xl",
      py: 2,
      px: [2, 4],
      mt: 2,
      rounded: "xl",
      borderWidth: "1px",
      bg: (0,react_.useColorModeValue)("white", "gray.800"),
      borderColor: (0,react_.useColorModeValue)("gray.100", "gray.700"),
      _hover: {
        shadow: "lg",
        textDecoration: "none"
      },
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.VStack, {
        overflow: "hidden",
        align: "start",
        spacing: 1,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.VStack, {
          spacing: 1,
          align: "start",
          w: "100%",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Flex, {
            justifyContent: "space-between",
            width: "100%",
            onClick: e => handleLinkClick(e, url),
            children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Tooltip, {
              hasArrow: true,
              label: "Github link",
              placement: "top",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.HStack, {
                cursor: "pointer",
                children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Icon, {
                  as: fi_index_esm/* FiGithub */.uOf,
                  boxSize: "0.9em",
                  mt: "1px"
                }), /*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
                  fontSize: "sm",
                  noOfLines: 1,
                  fontWeight: "600",
                  align: "left" // color={"blue.500"}
                  ,
                  color: linkColor,
                  children: title
                })]
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.HStack, {
              cursor: "pointer",
              onClick: e => handleLinkClick(e, url),
              children: [forks_count && /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Box, {
                _hover: {
                  color: "blue.500"
                },
                children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Icon, {
                  as: bi_index_esm/* BiGitRepoForked */.Ev8,
                  boxSize: "0.9em",
                  mt: "1px"
                }), /*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
                  as: "span",
                  ml: "1",
                  fontSize: "sm",
                  children: forks_count
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Box, {
                _hover: {
                  color: "blue.500"
                },
                children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Icon, {
                  as: bi_index_esm/* BiStar */.slP,
                  boxSize: "0.9em",
                  mt: "1px"
                }), /*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
                  as: "span",
                  ml: "1",
                  fontSize: "sm",
                  children: stargazers_count
                })]
              })]
            })]
          }), language && /*#__PURE__*/jsx_runtime_.jsx(react_.Flex, {
            justifyContent: "space-between",
            width: "100%",
            children: /*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
              children: /*#__PURE__*/jsx_runtime_.jsx(react_.HStack, {
                spacing: "1",
                children: /*#__PURE__*/jsx_runtime_.jsx(react_.Tag, {
                  size: "sm",
                  colorScheme: (0,theme/* getTagColor */.vm)(language),
                  children: /*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
                    fontSize: ["0.55rem", "inherit", "inherit"],
                    children: language
                  })
                })
              })
            })
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
          children: /*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
            color: "gray.500",
            fontSize: "sm",
            noOfLines: 2,
            textAlign: "left",
            children: description
          })
        }), " "]
      })
    })
  });
};

/* harmony default export */ var live_data_card = (live_data_card_RepositoryCard);
;// CONCATENATED MODULE: external "react-stack-grid"
var external_react_stack_grid_namespaceObject = require("react-stack-grid");;
var external_react_stack_grid_default = /*#__PURE__*/__webpack_require__.n(external_react_stack_grid_namespaceObject);
;// CONCATENATED MODULE: ./components/open-source/card-skeleton.tsx






const CardSkeleton = () => {
  const bgColor = (0,react_.useColorModeValue)("white", "gray.900");
  const cards = [1, 2, 3, 4, 5, 6, 7, 8];
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: cards.map(id => {
      return /*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
        size: "xl",
        py: 2,
        rounded: "xl",
        borderWidth: "1px",
        bg: bgColor,
        children: /*#__PURE__*/jsx_runtime_.jsx(react_.Stack, {
          isInline: true,
          justifyContent: "space-between",
          py: 2,
          px: [2, 3],
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Box, {
            width: "100%",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.HStack, {
              isInline: true,
              justifyContent: "space-between",
              children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Skeleton, {
                height: "14px",
                width: "40%"
              }), /*#__PURE__*/jsx_runtime_.jsx(react_.Skeleton, {
                height: "14px",
                width: "20%"
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx(react_.VStack, {
              align: "start",
              marginTop: 2,
              children: /*#__PURE__*/jsx_runtime_.jsx(react_.Skeleton, {
                height: "8px",
                width: "30%"
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Box, {
              marginTop: 2,
              children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Skeleton, {
                height: "8px",
                width: "100%"
              }), /*#__PURE__*/jsx_runtime_.jsx(react_.Stack, {
                spacing: 2,
                mt: 1,
                isInline: true,
                alignItems: "center",
                children: /*#__PURE__*/jsx_runtime_.jsx(react_.Skeleton, {
                  height: "8px",
                  width: "80%"
                })
              })]
            })]
          })
        })
      }, id);
    })
  });
};

/* harmony default export */ var card_skeleton = (CardSkeleton);
;// CONCATENATED MODULE: ./components/open-source/live-data.tsx










const LiveData = () => {
  const {
    get,
    loading,
    error,
    data
  } = external_use_http_default()("https://api.github.com");
  const {
    0: repos,
    1: setRepos
  } = (0,external_react_.useState)([]);
  const [isLargerThan720] = (0,react_.useMediaQuery)("(min-width: 720px)");
  const [isLargerThan982] = (0,react_.useMediaQuery)("(min-width: 982px)");
  let columnWidth = 390;

  if (isLargerThan982) {
    columnWidth = 390;
  } else {
    if (isLargerThan720) {
      columnWidth = 300;
    } else {// columnWidth = "100%";
    }
  }

  (0,external_react_.useEffect)(() => {
    get("/users/mertkadirarslan/repos").then(res => {
      setRepos(res === null || res === void 0 ? void 0 : res.sort((a, b) => b.stargazers_count - a.stargazers_count).slice(0, 8));
    });
  }, []);
  return /*#__PURE__*/jsx_runtime_.jsx(page_transitions/* PageSlideFade */.f6, {
    children: loading ? /*#__PURE__*/jsx_runtime_.jsx(react_.SimpleGrid, {
      columns: [1, 1, 2],
      spacing: 4,
      mt: 4,
      children: /*#__PURE__*/jsx_runtime_.jsx(card_skeleton, {})
    }) : /*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
      mt: 4,
      children: /*#__PURE__*/jsx_runtime_.jsx((external_react_stack_grid_default()), {
        columnWidth: !isLargerThan982 && !isLargerThan720 ? '100%' : columnWidth,
        children: repos === null || repos === void 0 ? void 0 : repos.map((repo, index) => /*#__PURE__*/jsx_runtime_.jsx(live_data_card, {
          title: repo.name,
          description: repo.description,
          language: repo.language,
          url: repo.svn_url // created_at={repo.created_at}
          ,
          stargazers_count: repo.stargazers_count,
          forks_count: repo.forks_count
        }, index))
      })
    })
  });
};

/* harmony default export */ var live_data = (LiveData);
;// CONCATENATED MODULE: ./data/repositories.ts
const repositories = [];
// EXTERNAL MODULE: external "use-sound"
var external_use_sound_ = __webpack_require__(8234);
var external_use_sound_default = /*#__PURE__*/__webpack_require__.n(external_use_sound_);
// EXTERNAL MODULE: ./components/layout/pageLayout.tsx
var pageLayout = __webpack_require__(1388);
;// CONCATENATED MODULE: ./pages/open-source.tsx



function open_source_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function open_source_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { open_source_ownKeys(Object(source), true).forEach(function (key) { open_source_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { open_source_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function open_source_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const TURQUOISE = "#06b6d4";
const iconProps = {
  variant: "ghost",
  size: "md",
  isRound: true
};

const RepositoriesList = ({
  repositories
}) => {
  const [activeTab, setActiveTab] = external_react_.useState("live");
  const [play] = external_use_sound_default()("/assets/audios/lightswitch.mp3", {
    volume: 0.05,
    sprite: {
      on: [0, 300],
      off: [500, 300]
    }
  });

  const handleClick = type => {
    activeTab === "live" ? play({
      id: "on"
    }) : play({
      id: "off"
    });
    setActiveTab(type);
  };

  return /*#__PURE__*/jsx_runtime_.jsx(pageLayout/* default */.Z, {
    title: "Open-source",
    keywords: "A list of open source projects",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(page_transitions/* PageSlideFade */.f6, {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.VStack, {
        align: "start",
        spacing: 3,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.HStack, {
          justifyContent: "space-between",
          width: "100%",
          children: [/*#__PURE__*/jsx_runtime_.jsx(header/* default */.Z, {
            underlineColor: TURQUOISE,
            mt: 0,
            mb: 0,
            children: "Open Source"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.HStack, {
            children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Tooltip, {
              hasArrow: true,
              label: "Live github repos",
              placement: "top",
              children: /*#__PURE__*/jsx_runtime_.jsx(react_.IconButton, open_source_objectSpread({
                "aria-label": "live",
                size: "md",
                colorScheme: "linkedin",
                icon: /*#__PURE__*/jsx_runtime_.jsx(index_esm/* RiSignalTowerLine */.dcm, {}),
                isActive: activeTab === "live",
                onClick: () => handleClick("live")
              }, iconProps))
            }), /*#__PURE__*/jsx_runtime_.jsx(react_.Tooltip, {
              hasArrow: true,
              label: "Local github repos",
              placement: "top",
              children: /*#__PURE__*/jsx_runtime_.jsx(react_.IconButton, open_source_objectSpread({
                "aria-label": "live",
                size: "md",
                colorScheme: "linkedin",
                icon: /*#__PURE__*/jsx_runtime_.jsx(index_esm/* RiWifiOffLine */.Yh4, {}),
                isActive: activeTab === "offline",
                onClick: () => handleClick("offline")
              }, iconProps))
            })]
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
          color: (0,react_.useColorModeValue)("gray.500", "gray.200"),
          textAlign: "left",
          children: "This page lists some of the open source repositories I have published or contributed to."
        })]
      }), activeTab === "live" ? /*#__PURE__*/jsx_runtime_.jsx(live_data, {}) : /*#__PURE__*/jsx_runtime_.jsx(offline_data, {
        repositories: repositories
      })]
    })
  });
};

function getStaticProps() {
  return {
    props: {
      repositories: repositories
    }
  };
}
/* harmony default export */ var open_source = (RepositoriesList);

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

/***/ 8234:
/***/ (function(module) {

"use strict";
module.exports = require("use-sound");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [127,516,893,193,352,29,205,277,759,499], function() { return __webpack_exec__(7177); });
module.exports = __webpack_exports__;

})();