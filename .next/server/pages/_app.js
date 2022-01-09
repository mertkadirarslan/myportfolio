(function() {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 4898:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "vt": function() { return /* binding */ GA_TRACKING_ID; },
/* harmony export */   "LV": function() { return /* binding */ pageview; }
/* harmony export */ });
/* unused harmony export event */
const GA_TRACKING_ID = process.env.GA_TRACKING_ID; // https://developers.google.com/analytics/devguides/collection/gtagjs/pages

const pageview = url => {
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url
  });
}; // https://developers.google.com/analytics/devguides/collection/gtagjs/events

const event = ({
  action,
  category,
  label,
  value
}) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value
  });
};

/***/ }),

/***/ 6253:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _app; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./node_modules/next/app.js
var app = __webpack_require__(7544);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(3426);
// EXTERNAL MODULE: ./node_modules/react-icons/gi/index.esm.js
var index_esm = __webpack_require__(2585);
// EXTERNAL MODULE: ./node_modules/react-icons/ai/index.esm.js
var ai_index_esm = __webpack_require__(8193);
// EXTERNAL MODULE: external "use-sound"
var external_use_sound_ = __webpack_require__(8234);
var external_use_sound_default = /*#__PURE__*/__webpack_require__.n(external_use_sound_);
// EXTERNAL MODULE: external "framer-motion"
var external_framer_motion_ = __webpack_require__(762);
// EXTERNAL MODULE: ./components/ui/motion.tsx
var motion = __webpack_require__(29);
;// CONCATENATED MODULE: ./components/ui/ColorModeSwitcher.tsx





const ColorModeSwitcher = props => {
  const {
    toggleColorMode
  } = (0,react_.useColorMode)();
  const mode = (0,react_.useColorModeValue)("dark", "light");
  const [play] = external_use_sound_default()("/assets/audios/lightswitch.mp3", {
    volume: 0.05,
    sprite: {
      on: [0, 300],
      off: [500, 300]
    }
  });

  const handleClick = () => {
    mode === "dark" ? play({
      id: "on"
    }) : play({
      id: "off"
    });
    toggleColorMode();
  };

  return /*#__PURE__*/jsx_runtime_.jsx(external_framer_motion_.AnimatePresence, {
    exitBeforeEnter: true,
    initial: false,
    children: /*#__PURE__*/jsx_runtime_.jsx(motion/* MotionBox */.uH, {
      onClick: handleClick,
      initial: {
        y: -20,
        opacity: 0
      },
      animate: {
        y: 0,
        opacity: 1
      },
      exit: {
        y: 20,
        opacity: 0
      },
      transition: {
        duration: 0.2
      },
      cursor: "pointer",
      fontSize: ["2xl", "3xl", "3xl"],
      children: mode === "dark" ? "🌤" : "🌙"
    }, mode === "dark" ? "dark-icon" : "light-icon")
  });
};
// EXTERNAL MODULE: ./node_modules/react-icons/bi/index.esm.js
var bi_index_esm = __webpack_require__(7516);
// EXTERNAL MODULE: ./node_modules/react-icons/bs/index.esm.js
var bs_index_esm = __webpack_require__(3750);
// EXTERNAL MODULE: ./node_modules/react-icons/md/index.esm.js
var md_index_esm = __webpack_require__(5434);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: external "next/router"
var router_namespaceObject = require("next/router");;
// EXTERNAL MODULE: ./components/ui/theme/index.ts
var theme = __webpack_require__(499);
;// CONCATENATED MODULE: external "mitt"
var external_mitt_namespaceObject = require("mitt");;
var external_mitt_default = /*#__PURE__*/__webpack_require__.n(external_mitt_namespaceObject);
;// CONCATENATED MODULE: ./components/hooks/useLocalSetting.ts


const localCache = new Map();
const emitter = external_mitt_default()();
function useLocalSetting(name, defaultValue, defer = true) {
  const storageKey = name;
  const [value, _setValue] = external_react_default().useState(() => {
    if (true) {
      return defaultValue; // SSR/SSG
    }

    const json = window.localStorage.getItem(storageKey);

    if (!json) {
      return defaultValue;
    }

    try {
      return JSON.parse(json);
    } catch {
      return defaultValue;
    }
  });
  external_react_default().useEffect(() => {
    if (defer === false) {
      return;
    }

    function loadFromStorage() {
      const json = localCache.get(storageKey) || window.localStorage.getItem(storageKey);

      if (!json) {
        return;
      }

      try {
        _setValue(JSON.parse(json));
      } catch {
        console.log('catch block');
      }
    }

    loadFromStorage();
    window.addEventListener('storage', loadFromStorage);
    emitter.on(storageKey, loadFromStorage);
    return () => {
      window.removeEventListener('storage', loadFromStorage);
      emitter.off(storageKey, loadFromStorage);
    };
  }, []);
  const setValue = external_react_default().useCallback(newValue => {
    const json = JSON.stringify(newValue);
    window.localStorage.setItem(storageKey, json);
    localCache.set(storageKey, json);
    emitter.emit(storageKey);

    _setValue(newValue);
  }, [_setValue, storageKey]);
  return [value, setValue];
}
function readLocalSetting(storageKey) {
  const json = localCache.get(storageKey) || window.localStorage.getItem(storageKey);

  if (!json) {
    return;
  }

  try {
    return JSON.parse(json);
  } catch {
    return undefined;
  }
}
;// CONCATENATED MODULE: external "@emotion/react"
var external_emotion_react_namespaceObject = require("@emotion/react");;
// EXTERNAL MODULE: ./components/ui/theme/foundations/colors.ts
var colors = __webpack_require__(759);
;// CONCATENATED MODULE: ./components/Accent.tsx


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const AccentPickerIcon = (_ref) => {
  let props = Object.assign({}, _ref);
  const color = (0,theme/* useLinkColor */.o3)();
  return /*#__PURE__*/jsx_runtime_.jsx(react_.Icon, _objectSpread(_objectSpread({
    viewBox: "0 0 200 200",
    boxSize: "1.3em",
    color: color
  }, props), {}, {
    children: /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "currentColor",
      d: "M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
    })
  }));
};
const AccentPicker = (_ref2) => {
  let props = Object.assign({}, _ref2);
  const [key, setAccentKey] = useLocalSetting("accent", "defaultAccent");
  const update = external_react_default().useCallback(() => {
    let index = theme/* accentKeys.indexOf */.uF.indexOf(key);
    index = (index + 1) % theme/* accentKeys.length */.uF.length;
    setAccentKey(theme/* accentKeys */.uF[index]);
  }, [key]);
  return /*#__PURE__*/jsx_runtime_.jsx(react_.IconButton, _objectSpread({
    icon: /*#__PURE__*/jsx_runtime_.jsx(AccentPickerIcon, {}),
    isRound: true,
    onMouseDown: update
  }, props));
};
const AccentGlobal = () => {
  const [accentKey] = useLocalSetting("accent", "defaultAccent");
  const accent = theme/* theme.colors */.rS.colors[accentKey];
  const styles = external_react_default().useMemo(() => external_emotion_react_namespaceObject.css`
      :root {
        --colors-accent-50: ${accent[50]};
        --colors-accent-100: ${accent[100]};
        --colors-accent-200: ${accent[200]};
        --colors-accent-300: ${accent[300]};
        --colors-accent-400: ${accent[400]};
        --colors-accent-500: ${accent[500]};
        --colors-accent-600: ${accent[600]};
        --colors-accent-700: ${accent[700]};
        --colors-accent-800: ${accent[800]};
        --colors-accent-900: ${accent[900]};
        --colors-accent-tag-bg-dark: ${(0,colors/* getTagBackgroundDark */.hK)(accentKey, theme/* theme */.rS)};
      }
    `, [accentKey]);
  return /*#__PURE__*/jsx_runtime_.jsx(external_emotion_react_namespaceObject.Global, {
    styles: styles
  });
};
;// CONCATENATED MODULE: ./components/layout/top-nav.tsx






 // import UserIcon from "assets/images/user_icon.png";










const webLinks = [{
  name: "About",
  path: "/about"
}, {
  name: "Blog",
  path: "/blog"
}];
const mobileLinks = [{
  name: "About",
  path: "/about"
}, {
  name: "Projects",
  path: "/projects"
}, {
  name: "Open Source",
  path: "/open-source"
}, {
  name: "Blog",
  path: "/blog"
}, {
  name: "Tech Stack",
  path: "/tech-stack"
}, {
  name: "Achievements",
  path: "/achievements"
}];
const dropdownLinks = [{
  name: "Projects",
  path: "/projects"
}, {
  name: "Tech Stack",
  path: "/tech-stack"
}, {
  name: "Open Source",
  path: "/open-source"
}, {
  name: "Achievements",
  path: "/achievements"
} // { name: "Developer Story", path: "/developer-story" }
];

const NavLink = props => {
  const router = (0,router_namespaceObject.useRouter)();
  const link = {
    bg: (0,react_.useColorModeValue)("gray.200", "gray.900"),
    color: (0,react_.useColorModeValue)("blue.500", "blue.200")
  };
  return /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
    href: props.path,
    passHref: true,
    children: /*#__PURE__*/jsx_runtime_.jsx(react_.Link, {
      px: 2,
      py: 1,
      rounded: "md",
      _hover: {
        textDecoration: "none",
        bg: link.bg
      },
      bg: router.pathname === props.path ? link.bg : "transparent",
      color: router.pathname === props.path ? link.color : "inherit",
      onClick: () => props.onClose(),
      children: props.name
    })
  });
};

const MenuLink = props => {
  const iconsObj = {
    "/tech-stack": /*#__PURE__*/jsx_runtime_.jsx(react_.Icon, {
      as: ai_index_esm/* AiTwotoneThunderbolt */.QJi,
      size: 18,
      color: props.color
    }),
    "/open-source": /*#__PURE__*/jsx_runtime_.jsx(react_.Icon, {
      as: bs_index_esm/* BsBook */.R_f,
      size: 18,
      color: props.color
    }),
    "/achievements": /*#__PURE__*/jsx_runtime_.jsx(react_.Icon, {
      as: bs_index_esm/* BsCheckCircle */.nRB,
      size: 18,
      color: props.color
    }),
    "/projects": /*#__PURE__*/jsx_runtime_.jsx(react_.Icon, {
      as: md_index_esm/* MdTimeline */.g6S,
      size: 18,
      color: props.color
    })
  };
  return /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
    href: props.path,
    passHref: true,
    children: /*#__PURE__*/jsx_runtime_.jsx(react_.Link, {
      onClick: () => props.onClose(),
      children: /*#__PURE__*/jsx_runtime_.jsx(react_.MenuItem, {
        color: props.rPath === props.path && props.color,
        bg: props.rPath === props.path && props.bg,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.HStack, {
          children: [iconsObj[props.path], /*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
            children: props.name
          })]
        })
      })
    })
  });
};

function TopNav() {
  const linkColor = (0,theme/* useLinkColor */.o3)();
  const router = (0,router_namespaceObject.useRouter)();
  const {
    isOpen,
    onOpen,
    onClose
  } = (0,react_.useDisclosure)();
  const menuProps = {
    bg: (0,react_.useColorModeValue)("gray.200", "gray.900"),
    color: (0,react_.useColorModeValue)("blue.500", "blue.200")
  };
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Box, {
      bg: (0,react_.useColorModeValue)("white", "gray.700"),
      px: 4,
      boxShadow: "lg",
      position: "fixed",
      width: "100%",
      zIndex: "55",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Flex, {
        h: 16,
        alignItems: "center",
        justifyContent: "space-between",
        w: ["90%", "85%", "80%"],
        maxW: 800,
        mx: "auto",
        children: [/*#__PURE__*/jsx_runtime_.jsx(react_.IconButton, {
          size: "md",
          icon: isOpen ? /*#__PURE__*/jsx_runtime_.jsx(ai_index_esm/* AiOutlineClose */.oHP, {}) : /*#__PURE__*/jsx_runtime_.jsx(index_esm/* GiHamburgerMenu */.vHB, {}),
          "aria-label": "Open Menu",
          display: ["inherit", "inherit", "none"],
          onClick: isOpen ? onClose : onOpen
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.HStack, {
          spacing: 8,
          alignItems: "center",
          children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/",
              passHref: true,
              children: /*#__PURE__*/jsx_runtime_.jsx(react_.Avatar, {
                as: react_.Link,
                size: "sm",
                backgroundColor: 'transparent' // src={UserIcon}
                ,
                src: "/assets/images/iconss.png"
              })
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.HStack, {
            as: "nav",
            spacing: 4,
            display: {
              base: "none",
              md: "flex"
            },
            children: [webLinks.map((link, index) => /*#__PURE__*/jsx_runtime_.jsx(NavLink, {
              name: link.name,
              path: link.path,
              onClose: onClose
            }, index)), /*#__PURE__*/jsx_runtime_.jsx(react_.Menu, {
              autoSelect: false,
              isLazy: true,
              children: ({
                isOpen,
                onClose
              }) => /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [/*#__PURE__*/jsx_runtime_.jsx(react_.MenuButton, {
                  as: react_.Button,
                  variant: "ghost",
                  size: "sm",
                  px: 2,
                  py: 1.5,
                  fontSize: "1em",
                  rounded: "md",
                  height: "auto ",
                  _hover: menuProps,
                  _expanded: menuProps,
                  _focus: {
                    boxShadow: "none"
                  },
                  rightIcon: /*#__PURE__*/jsx_runtime_.jsx(bi_index_esm/* BiChevronDown */.OrA, {
                    size: 18
                  }),
                  children: "Links"
                }), /*#__PURE__*/jsx_runtime_.jsx(react_.MenuList, {
                  zIndex: 5,
                  children: dropdownLinks.map((link, index) => /*#__PURE__*/jsx_runtime_.jsx(MenuLink, {
                    path: link.path,
                    name: link.name,
                    onClose: onClose,
                    color: menuProps.color,
                    bg: menuProps.bg,
                    rPath: router.pathname
                  }, index))
                })]
              })
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Flex, {
          alignItems: "center",
          children: [/*#__PURE__*/jsx_runtime_.jsx(AccentPicker, {
            "aria-label": "Accent Color Picker",
            variant: "ghost",
            zIndex: 1,
            color: linkColor,
            mr: 2
          }), /*#__PURE__*/jsx_runtime_.jsx(ColorModeSwitcher, {
            justifySelf: "flex-end"
          })]
        })]
      }), isOpen ? /*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
        pb: 4,
        w: ["100%", "100%", "80%"],
        maxW: 800,
        display: ["inherit", "inherit", "none"],
        children: /*#__PURE__*/jsx_runtime_.jsx(react_.Stack, {
          as: "nav",
          spacing: 4,
          children: mobileLinks.map((link, index) => /*#__PURE__*/jsx_runtime_.jsx(NavLink, {
            index: index,
            name: link.name,
            path: link.path,
            onClose: onClose
          }, index))
        })
      }) : null]
    })
  });
}
// EXTERNAL MODULE: ./node_modules/react-icons/fa/index.esm.js
var fa_index_esm = __webpack_require__(9583);
// EXTERNAL MODULE: ./node_modules/react-icons/fi/index.esm.js
var fi_index_esm = __webpack_require__(6893);
;// CONCATENATED MODULE: ./configs/site-config.js



const siteConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} Mert Kadir. All Rights Reserved.`,
  author: {
    name: "Mert Kadir",
    accounts: [{
      url: "https://github.com/mertkadirarslan",
      label: "Github Account",
      type: "gray",
      icon: /*#__PURE__*/jsx_runtime_.jsx(fa_index_esm/* FaGithub */.hJX, {})
    }, {
      url: "https://twitter.com/mertisfly",
      label: "Twitter Account",
      type: "twitter",
      icon: /*#__PURE__*/jsx_runtime_.jsx(fa_index_esm/* FaTwitter */.fWC, {})
    }, {
      url: "https://dev.to/mert_kadir",
      label: "Dev Account",
      type: "gray",
      icon: /*#__PURE__*/jsx_runtime_.jsx(fa_index_esm/* FaDev */.CUm, {})
    }, {
      url: "https://linkedin.com/in/",
      label: "LinkedIn Account",
      type: "linkedin",
      icon: /*#__PURE__*/jsx_runtime_.jsx(fa_index_esm/* FaLinkedin */.ltd, {})
    }, {
      url: "mailto:mert.kadir9395@gmail.com",
      label: "Mail Mert",
      type: "gray",
      icon: /*#__PURE__*/jsx_runtime_.jsx(fi_index_esm/* FiMail */.Imn, {})
    }]
  }
};
/* harmony default export */ var site_config = (siteConfig);
;// CONCATENATED MODULE: ./components/layout/footer.tsx



function footer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function footer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { footer_ownKeys(Object(source), true).forEach(function (key) { footer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { footer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function footer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const iconProps = {
  variant: "ghost",
  size: "lg",
  isRound: true
};

const Footer = () => {
  return /*#__PURE__*/jsx_runtime_.jsx(react_.Stack, {
    as: "footer",
    isInline: true,
    spacing: [1, 2],
    p: 4,
    justifyContent: "space-between",
    alignItems: "center",
    w: ["100%", "85%", "80%"],
    maxW: 800,
    mx: "auto",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Flex, {
      flexDirection: ["column", "column", "row"],
      flexFlow: ["column-reverse", "column-reverse"],
      justifyContent: ["center", "space-between"],
      alignItems: "center",
      w: "100%",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Text, {
        textAlign: "center",
        fontSize: "sm",
        color: (0,react_.useColorModeValue)("gray.500", "gray.200"),
        children: ["\xA9 ", new Date().getFullYear(), " Mert Kadir", " "]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Box, {
        textColor: (0,react_.useColorModeValue)("gray.600", "gray.300"),
        fontSize: "sm",
        textAlign: "left",
        children: ["v2.0.0", /*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
          as: "span",
          mx: "2",
          _before: {
            cursor: "default",
            content: '"💻"'
          },
          _hover: {
            _before: {
              content: '"👨‍💻"'
            }
          }
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
        textAlign: "center",
        children: site_config.author.accounts.map((sc, index) => /*#__PURE__*/jsx_runtime_.jsx(react_.IconButton, footer_objectSpread({
          as: react_.Link,
          isExternal: true,
          href: sc.url,
          "aria-label": sc.label,
          size: "lg",
          colorScheme: sc.type,
          icon: sc.icon
        }, iconProps), index))
      })]
    })
  });
};

/* harmony default export */ var footer = (Footer);
;// CONCATENATED MODULE: ./components/layout/appLayout.tsx







function AppLayout(props) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(TopNav, {}), /*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
      textAlign: "center",
      fontSize: "xl",
      w: ["90%", "85%", "80%"],
      maxW: 800,
      mx: "auto",
      children: /*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
        pt: '7rem',
        pb: 10,
        children: props.children
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(footer, {})]
  });
}

/* harmony default export */ var appLayout = (AppLayout);
;// CONCATENATED MODULE: ./components/ui/prism.tsx



 // import { theme } from "./theme";

const prismBaseTheme = external_emotion_react_namespaceObject.css`
  .article {
    text-align: left;
  }
  
  .article h1 {
    font-family: "Noto Serif", serif;
    padding: ${react_.theme.space[4]} 0 ${react_.theme.space[2]};
    font-size: ${react_.theme.fontSizes["4xl"]};
    font-weight: ${react_.theme.fontWeights.bold};
  }

  .article h2 {
    font-family: "Noto Serif", serif;
    padding: ${react_.theme.space[4]} 0 ${react_.theme.space[2]};
    font-size: ${react_.theme.fontSizes["3xl"]};
    font-weight: ${react_.theme.fontWeights.bold};
  }

  .article h3 {
    font-family: "Noto Serif", serif;
    padding: ${react_.theme.space[4]} 0 ${react_.theme.space[2]};
    font-size: ${react_.theme.fontSizes["2xl"]};
    font-weight: ${react_.theme.fontWeights.bold};
  }

  .article ul {
    padding-left: 20px;
  }

  .article p,
  .article ul,
  .article ol {
    font-family: "Inter", sans-serif;
    margin: ${react_.theme.space[4]} 0 ${react_.theme.space[4]};
    line-height: ${react_.theme.lineHeights.tall};
    font-size: 1rem;
  }

  .article p {
    display: inline;
  }

  .article a:hover {
    text-decoration: underline;
  }

  .article a.chakra-link {
    text-decoration: none;
  }

  .article img {
    border-radius: ${react_.theme.radii.md};
    margin-top: 15px;
  }

  .article #table-of-contents + ul,
  .article ol {
    list-style-type: decimal;
    list-style-position: inside;
  }

  .article #table-of-contents + ul > li,
  .article ol > li {
    margin-bottom: ${react_.theme.space[2]};
  }

  .article .icon.icon-link::before {
    content: "#";
    margin-right: ${react_.theme.space[2]};
    display: inline-flex;
  }

  .article blockquote > p {
    padding: ${react_.theme.space[2]};
    margin: 0;
    border-left: 3px solid;
  }

  code[class*="language-"],
  pre[class*="language-"] {
    color: ${react_.theme.colors.gray[800]};
    background: none;
    font-family: "Menlo", Monaco, Consolas, Courier New, monospace;
    font-size: ${react_.theme.fontSizes.sm};
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: ${react_.theme.lineHeights.tall};
    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;
    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
    width: 100%;
  }

  pre[class*="language-"] {
    padding-top: ${react_.theme.space[4]};
    padding-bottom: ${react_.theme.space[4]};
    padding-left: ${react_.theme.space[4]};
    padding-right: ${react_.theme.space[4]};
    margin: ${react_.theme.space[6]} 0;
    overflow: auto;
    min-width: 100%;
  }

  :not(pre) > code[class*="language-"],
  pre[class*="language-"] {
    background: ${react_.theme.colors.gray[50]};
    border: 1px solid ${react_.theme.colors.gray[200]};
    border-radius: ${react_.theme.radii.md};
  }

  :not(pre) > code[class*="language-"] {
    padding: 0.1em;
    border-radius: 0.3em;
    white-space: normal;
  }

  :not(pre) > code {
    font-size: ${react_.theme.fontSizes.sm};
  }

  :not(pre) > code:before,
  :not(pre) > code:after {
    content: "\`";
  }

  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: slategray;
  }

  .token.punctuation {
    color: #999;
  }

  .token.namespace {
    opacity: 0.7;
  }

  .token.property,
  .token.tag,
  .token.boolean,
  .token.number,
  .token.constant,
  .token.symbol,
  .token.deleted {
    color: #905;
  }

  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.builtin,
  .token.inserted {
    color: #690;
  }

  .token.operator,
  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string {
    color: #9a6e3a;
  }

  .token.atrule,
  .token.attr-value,
  .token.keyword {
    color: #07a;
  }

  .token.function,
  .token.class-name {
    color: #dd4a68;
  }

  .token.regex,
  .token.important,
  .token.variable {
    color: #e90;
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }

  .token.italic {
    font-style: italic;
  }

  .token.entity {
    cursor: help;
  }

  .mdx-marker {
    display: block;
    margin-left: -${react_.theme.space[4]};
    margin-right: -${react_.theme.space[4]};
    padding-left: ${react_.theme.space[4]};
    padding-right: ${react_.theme.space[4]};
    background-color: ${react_.theme.colors.gray[200]};
    box-shadow: inset 3px 0px 0 0px ${react_.theme.colors.blue[600]};
    min-width: fit-content;
  }

  .remark-code-title {
    padding: ${react_.theme.space[2]} ${react_.theme.space[4]};
    font-family: ${react_.theme.fonts.mono};
    background: ${react_.theme.colors.gray[200]};
    color: ${react_.theme.colors.gray[800]};
    border: 1px solid ${react_.theme.colors.gray[200]};
    border-top-left-radius: ${react_.theme.radii.md};
    border-top-right-radius: ${react_.theme.radii.md};
    font-size: 0.8rem;
    font-weight: 600;
    margin-bottom: 0;
    width: 100%;
    + pre {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      margin-top: 0;
    }
  }
`;
const prismLightTheme = external_emotion_react_namespaceObject.css`
  ${prismBaseTheme};

  :not(pre) > code[class*="language-"] {
    background: #011627;
  }

  .token.attr-name {
    color: rgb(173, 219, 103);
    font-style: italic;
  }

  .token.comment {
    color: rgb(128, 147, 147);
  }

  .token.string,
  .token.url {
    color: rgb(173, 219, 103);
  }

  .token.variable {
    color: rgb(214, 222, 235);
  }

  .token.number {
    color: rgb(247, 140, 108);
  }

  .token.builtin,
  .token.char,
  .token.constant,
  .token.function {
    color: rgb(130, 170, 255);
  }

  .token.punctuation {
    color: rgb(199, 146, 234);
  }

  .token.selector,
  .token.doctype {
    color: rgb(199, 146, 234);
    font-style: "italic";
  }

  .token.class-name {
    color: rgb(255, 203, 139);
  }

  .token.tag,
  .token.operator,
  .token.keyword {
    color: #ffa7c4;
  }

  .token.boolean {
    color: rgb(255, 88, 116);
  }

  .token.property {
    color: rgb(128, 203, 196);
  }

  .token.namespace {
    color: rgb(178, 204, 214);
  }

  code[class*="language-"],
  pre[class*="language-"] {
    color: ${react_.theme.colors.gray[50]};
  }

  :not(pre) > code[class*="language-"],
  pre[class*="language-"] {
    background: ${react_.theme.colors.gray[800]};
    border: 1px solid ${react_.theme.colors.gray[700]};
  }

  .mdx-marker {
    background-color: ${react_.theme.colors.gray[700]};
  }

  .remark-code-title {
    background: ${react_.theme.colors.gray[700]};
    color: ${react_.theme.colors.gray[100]};
    border: 1px solid ${react_.theme.colors.gray[700]};
  }

  .article a:not(.chakra-link) {
    color: ${react_.theme.colors.blue[300]};
  }

  :not(pre) > code {
    color: ${react_.theme.colors.purple[300]};
  }

  .article blockquote > p {
    line-height: 2;
    border-color: ${react_.theme.colors.gray[500]};
  }
`;
const prismDarkTheme = external_emotion_react_namespaceObject.css`
  ${prismBaseTheme};

  :not(pre) > code[class*="language-"] {
    background: #011627;
  }

  .token.attr-name {
    color: rgb(173, 219, 103);
    font-style: italic;
  }

  .token.comment {
    color: rgb(128, 147, 147);
  }

  .token.string,
  .token.url {
    color: rgb(173, 219, 103);
  }

  .token.variable {
    color: rgb(214, 222, 235);
  }

  .token.number {
    color: rgb(247, 140, 108);
  }

  .token.builtin,
  .token.char,
  .token.constant,
  .token.function {
    color: rgb(130, 170, 255);
  }

  .token.punctuation {
    color: rgb(199, 146, 234);
  }

  .token.selector,
  .token.doctype {
    color: rgb(199, 146, 234);
    font-style: "italic";
  }

  .token.class-name {
    color: rgb(255, 203, 139);
  }

  .token.tag,
  .token.operator,
  .token.keyword {
    color: #ffa7c4;
  }

  .token.boolean {
    color: rgb(255, 88, 116);
  }

  .token.property {
    color: rgb(128, 203, 196);
  }

  .token.namespace {
    color: rgb(178, 204, 214);
  }

  code[class*="language-"],
  pre[class*="language-"] {
    color: ${react_.theme.colors.gray[50]};
  }

  :not(pre) > code[class*="language-"],
  pre[class*="language-"] {
    background: ${react_.theme.colors.gray[800]};
    border: 1px solid ${react_.theme.colors.gray[700]};
  }

  .mdx-marker {
    background-color: ${react_.theme.colors.gray[700]};
  }

  .remark-code-title {
    background: ${react_.theme.colors.gray[700]};
    color: ${react_.theme.colors.gray[100]};
    border: 1px solid ${react_.theme.colors.gray[700]};
  }

  .article a:not(.chakra-link) {
    color: ${react_.theme.colors.blue[300]};
  }

  :not(pre) > code {
    color: ${react_.theme.colors.purple[300]};
  }

  .article blockquote > p {
    line-height: 2;
    border-color: ${react_.theme.colors.gray[500]};
  }
`;
const PrismGlobal = () => {
  const {
    colorMode
  } = (0,react_.useColorMode)();
  return /*#__PURE__*/jsx_runtime_.jsx(external_emotion_react_namespaceObject.Global, {
    styles: colorMode === "light" ? prismLightTheme : prismDarkTheme
  });
};
// EXTERNAL MODULE: ./lib/gtag.js
var gtag = __webpack_require__(4898);
;// CONCATENATED MODULE: ./components/ui/theme/fonts.tsx


const FontsGlobal = () => /*#__PURE__*/jsx_runtime_.jsx(external_emotion_react_namespaceObject.Global, {
  styles: `
      @font-face {
        font-family: 'Virgil';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('/assets/fonts/FG_Virgil.woff2') format('woff2'),
            url('/assets/fonts/FG_Virgil.woff') format('woff');
      }
      @font-face {
        font-family: 'Cascadia';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('/assets/fonts/Cascadia.woff2') format('woff2'),
            url('/assets/fonts/Cascadia.woff') format('woff');
      }
    `
});
;// CONCATENATED MODULE: ./pages/_app.tsx



function _app_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _app_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _app_ownKeys(Object(source), true).forEach(function (key) { _app_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _app_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













function MyApp({
  Component,
  pageProps
}) {
  const router = (0,router_namespaceObject.useRouter)();
  (0,external_react_.useEffect)(() => {
    const handleRouteChange = url => {
      gtag/* pageview */.LV(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.ChakraProvider, {
    theme: theme/* theme */.rS,
    resetCSS: true,
    children: [/*#__PURE__*/jsx_runtime_.jsx(FontsGlobal, {}), /*#__PURE__*/jsx_runtime_.jsx(AccentGlobal, {}), /*#__PURE__*/jsx_runtime_.jsx(PrismGlobal, {}), /*#__PURE__*/jsx_runtime_.jsx(appLayout, {
      children: /*#__PURE__*/jsx_runtime_.jsx(external_framer_motion_.AnimatePresence, {
        exitBeforeEnter: true,
        initial: false,
        onExitComplete: () => window.scrollTo(0, 0),
        children: /*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
          children: /*#__PURE__*/jsx_runtime_.jsx(Component, _app_objectSpread({}, pageProps))
        }, router.route)
      })
    })]
  });
}

MyApp.getInitialProps = async appContext => {
  const appProps = await app.default.getInitialProps(appContext);
  return _app_objectSpread({}, appProps);
};

/* harmony default export */ var _app = (MyApp);

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

/***/ 7579:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/utils.js");;

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
var __webpack_exports__ = __webpack_require__.X(0, [127,583,664,516,893,193,750,585,452,29,759,499], function() { return __webpack_exec__(6253); });
module.exports = __webpack_exports__;

})();