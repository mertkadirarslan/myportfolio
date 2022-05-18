(function() {
var exports = {};
exports.id = 492;
exports.ids = [492];
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

/***/ 1897:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _slug_; },
  "getStaticPaths": function() { return /* binding */ getStaticPaths; },
  "getStaticProps": function() { return /* binding */ getStaticProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__(5747);
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_);
// EXTERNAL MODULE: external "path"
var external_path_ = __webpack_require__(5622);
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_);
// EXTERNAL MODULE: external "gray-matter"
var external_gray_matter_ = __webpack_require__(9064);
var external_gray_matter_default = /*#__PURE__*/__webpack_require__.n(external_gray_matter_);
;// CONCATENATED MODULE: external "remark-html"
var external_remark_html_namespaceObject = require("remark-html");;
var external_remark_html_default = /*#__PURE__*/__webpack_require__.n(external_remark_html_namespaceObject);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(3426);
;// CONCATENATED MODULE: external "remark"
var external_remark_namespaceObject = require("remark");;
var external_remark_default = /*#__PURE__*/__webpack_require__.n(external_remark_namespaceObject);
;// CONCATENATED MODULE: external "remark-prism"
var external_remark_prism_namespaceObject = require("remark-prism");;
var external_remark_prism_default = /*#__PURE__*/__webpack_require__.n(external_remark_prism_namespaceObject);
// EXTERNAL MODULE: ./components/ui/theme/index.ts
var theme = __webpack_require__(499);
;// CONCATENATED MODULE: external "dayjs"
var external_dayjs_namespaceObject = require("dayjs");;
var external_dayjs_default = /*#__PURE__*/__webpack_require__.n(external_dayjs_namespaceObject);
;// CONCATENATED MODULE: external "dayjs/plugin/localizedFormat"
var localizedFormat_namespaceObject = require("dayjs/plugin/localizedFormat");;
var localizedFormat_default = /*#__PURE__*/__webpack_require__.n(localizedFormat_namespaceObject);
// EXTERNAL MODULE: ./components/layout/pageLayout.tsx
var pageLayout = __webpack_require__(1388);
// EXTERNAL MODULE: ./components/ui/motion.tsx
var motion = __webpack_require__(29);
// EXTERNAL MODULE: ./node_modules/react-icons/fa/index.esm.js
var index_esm = __webpack_require__(9583);
;// CONCATENATED MODULE: ./components/layout/DevToCallToAction.tsx





const DevToCallToAction = ({
  href
}) => /*#__PURE__*/jsx_runtime_.jsx(react_.Flex, {
  justifyContent: "center",
  marginTop: "7",
  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Box, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
      marginBottom: "2",
      fontSize: "2xl",
      fontWeight: "400",
      children: "React, comment and follow on"
    }), /*#__PURE__*/jsx_runtime_.jsx(react_.Link, {
      href: href,
      isExternal: true,
      children: /*#__PURE__*/jsx_runtime_.jsx(react_.Icon, {
        as: index_esm/* FaDev */.CUm,
        w: 12,
        h: 12
      })
    })]
  })
});

/* harmony default export */ var layout_DevToCallToAction = (DevToCallToAction);
// EXTERNAL MODULE: ./components/ui/page-transitions.tsx
var page_transitions = __webpack_require__(9206);
// EXTERNAL MODULE: external "framer-motion"
var external_framer_motion_ = __webpack_require__(762);
;// CONCATENATED MODULE: ./pages/blog/[slug].tsx

















external_dayjs_default().extend((localizedFormat_default()));

const ArticlePage = ({
  articleContent,
  blogDetails
}) => {
  const textColor = (0,react_.useColorModeValue)("gray.500", "gray.200");
  return /*#__PURE__*/jsx_runtime_.jsx(pageLayout/* default */.Z, {
    title: blogDetails === null || blogDetails === void 0 ? void 0 : blogDetails.title,
    description: blogDetails === null || blogDetails === void 0 ? void 0 : blogDetails.description,
    image: blogDetails === null || blogDetails === void 0 ? void 0 : blogDetails.cover_image,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_framer_motion_.motion.div, {
      initial: "initial",
      animate: "animate",
      variants: page_transitions/* stagger */.EY,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.VStack, {
        marginBottom: "5",
        alignItems: "left",
        textAlign: "left",
        children: [blogDetails !== null && blogDetails !== void 0 && blogDetails.cover_image ? /*#__PURE__*/jsx_runtime_.jsx(motion/* MotionImage */.Jd, {
          src: blogDetails.cover_image,
          variants: page_transitions/* fadeInUp */.eu,
          layout: "fixed",
          rounded: "md"
        }) : "", /*#__PURE__*/jsx_runtime_.jsx(external_framer_motion_.motion.div, {
          variants: page_transitions/* fadeInUp */.eu,
          children: /*#__PURE__*/jsx_runtime_.jsx(react_.Heading, {
            as: "h1",
            size: "xl",
            mt: "2",
            mb: "2",
            children: blogDetails === null || blogDetails === void 0 ? void 0 : blogDetails.title
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(external_framer_motion_.motion.div, {
          variants: page_transitions/* fadeInUp */.eu,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.HStack, {
            justifyContent: "space-between",
            isInline: true,
            flexDirection: ["column", "row", "row"],
            children: [/*#__PURE__*/jsx_runtime_.jsx(react_.HStack, {
              spacing: 1,
              alignItems: "center",
              children: blogDetails === null || blogDetails === void 0 ? void 0 : blogDetails.tags.map(tag => /*#__PURE__*/jsx_runtime_.jsx(react_.Tag, {
                size: "md",
                padding: "0 3px",
                colorScheme: (0,theme/* getTagColor */.vm)(tag),
                children: tag
              }, tag))
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.HStack, {
              spacing: 2,
              isInline: true,
              pt: ["0.5rem", "0", "0"],
              children: [blogDetails !== null && blogDetails !== void 0 && blogDetails.public_reactions_count ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Flex, {
                alignItems: "center",
                children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
                  fontSize: "sm",
                  noOfLines: 1,
                  fontWeight: "400",
                  align: "left",
                  color: textColor,
                  children: blogDetails.public_reactions_count
                }), "\xA0", /*#__PURE__*/jsx_runtime_.jsx("svg", {
                  id: "Capa_1",
                  enableBackground: "new 0 0 512 512",
                  height: "20px",
                  viewBox: "0 0 512 512",
                  width: "20px",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("g", {
                    children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
                      d: "m445.936 20.657h-379.872c-19.731 0-37.443 8.649-49.548 22.364l-6.403 43.701v239.535c0 36.486 19.465 66.064 55.951 66.064h89.427c6.57 0 12.872 10.817 17.518 15.463l77.704 77.704 16.721 2.268c.95-.664 1.856-1.42 2.704-2.268l77.704-77.704c4.646-4.646 10.948-7.256 17.518-7.256h80.577c36.486 0 66.064-29.578 66.064-66.064v-247.742c-.001-36.487-29.579-66.065-66.065-66.065z",
                      fill: "#ff7e92"
                    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
                      d: "m164.159 407.784 77.704 77.704c6.959 6.959 17.774 7.714 25.57 2.268l-91.595-91.65c-7.685-7.685-18.323-12.093-29.194-12.093h-80.579c-27.323 0-49.548-22.226-49.548-49.548v-291.444c-10.25 11.639-16.517 26.973-16.517 43.701v247.742c0 36.486 29.578 66.065 66.065 66.065h80.577c6.57-.001 12.872 2.609 17.517 7.255z",
                      fill: "#ff5f7a"
                    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
                      d: "m387.626 177.951c-4.003-35.677-34.163-63.99-69.988-66.315-21.701-1.408-41.538 6.405-56.107 19.853-3.135 2.894-7.926 2.894-11.062 0-14.569-13.448-34.406-21.261-56.107-19.853-8.653.562-16.976 2.639-24.679 5.971-24.19 10.461-40.655 60.344-40.655 60.344-8.486 75.632 93.735 136.686 124.126 154.751l21.005-.808c37.878-23.988 121.196-85.05 113.467-153.943z",
                      fill: "#fff"
                    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
                      d: "m142.235 167.09c2.224-19.818 12.594-37.402 27.447-49.483-24.153 10.475-42.275 33.311-45.309 60.344-8.485 75.632 92.757 141.829 123.148 159.894 5.245 3.117 11.712 3.117 16.957 0 2.702-1.606 5.985-3.61 9.68-5.95-19.374-10.919-141.105-82.962-131.923-164.805z",
                      fill: "#ffdbde"
                    })]
                  })
                })]
              }) : "", blogDetails !== null && blogDetails !== void 0 && blogDetails.comments_count ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Flex, {
                alignItems: "center",
                children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
                  fontSize: "sm",
                  noOfLines: 1,
                  fontWeight: "400",
                  align: "left",
                  color: textColor,
                  children: blogDetails.comments_count
                }), "\xA0", /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
                  id: "Capa_1",
                  enableBackground: "new 0 0 512 512",
                  height: "20px",
                  viewBox: "0 0 512 512",
                  width: "20px",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
                    d: "m438.983 11.549h-276.72c-36.094 0-65.625 29.531-65.625 65.625v22.33h250.317c36.094 0 65.625 29.531 65.625 65.625v163.609h26.404c36.094 0 65.625-29.531 65.625-65.625v-185.939c0-36.094-29.532-65.625-65.626-65.625z",
                    fill: "#6c7ed6"
                  }), /*#__PURE__*/jsx_runtime_.jsx("path", {
                    d: "m392.454 96.504h-276.72c-6.636 0-13.047 1.006-19.096 2.86v.14h250.317c36.094 0 65.625 29.531 65.625 65.625v163.609h26.404c6.636 0 13.047-1.006 19.096-2.86v-163.748c0-36.094-29.532-65.626-65.626-65.626z",
                    fill: "#4f67d2"
                  }), /*#__PURE__*/jsx_runtime_.jsx("path", {
                    d: "m349.954 96.504h-276.72c-36.094 0-65.625 29.531-65.625 65.625v185.939c0 36.094 29.531 65.625 65.625 65.625h166.083c7.12 0 12.435 6.626 10.807 13.557-4.404 18.751-11.144 38.581-21.107 58.908-4.474 9.129 5.704 18.41 14.349 13.06 24.997-15.47 60.562-41.362 90.512-77.964 3.937-4.811 9.858-7.561 16.075-7.561 36.094 0 65.625-29.531 65.625-65.625v-185.938c.002-36.094-29.53-65.626-65.624-65.626z",
                    fill: "#60b8fe"
                  }), /*#__PURE__*/jsx_runtime_.jsx("path", {
                    d: "m292.624 427.25c1.628-6.932-3.687-13.557-10.807-13.557h-42.5c7.12 0 12.435 6.625 10.807 13.557-4.404 18.751-11.144 38.581-21.107 58.908-4.474 9.129 5.704 18.41 14.349 13.06 9.591-5.936 20.74-13.411 32.527-22.431 7.603-17.049 13.007-33.679 16.731-49.537z",
                    fill: "#23a8fe"
                  }), /*#__PURE__*/jsx_runtime_.jsx("path", {
                    d: "m50.109 348.068v-185.938c0-36.094 29.531-65.625 65.625-65.625h-42.5c-36.094 0-65.625 29.531-65.625 65.625v185.938c0 36.094 29.531 65.625 65.625 65.625h42.5c-36.094 0-65.625-29.531-65.625-65.625z",
                    fill: "#23a8fe"
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("g", {
                    fill: "#dfebfa",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("circle", {
                      cx: "98.577",
                      cy: "260.439",
                      r: "21.777"
                    }), /*#__PURE__*/jsx_runtime_.jsx("circle", {
                      cx: "168.914",
                      cy: "260.439",
                      r: "21.777"
                    }), /*#__PURE__*/jsx_runtime_.jsx("circle", {
                      cx: "239.251",
                      cy: "260.439",
                      r: "21.777"
                    }), /*#__PURE__*/jsx_runtime_.jsx("circle", {
                      cx: "309.588",
                      cy: "260.439",
                      r: "21.777"
                    })]
                  }), /*#__PURE__*/jsx_runtime_.jsx("path", {
                    d: "m98.577 260.439c0-8.059 4.381-15.091 10.888-18.856-3.204-1.854-6.92-2.921-10.888-2.921-12.027 0-21.777 9.75-21.777 21.777s9.75 21.777 21.777 21.777c3.968 0 7.685-1.066 10.888-2.92-6.507-3.767-10.888-10.798-10.888-18.857z",
                    fill: "#b1dbfc"
                  }), /*#__PURE__*/jsx_runtime_.jsx("path", {
                    d: "m168.914 260.439c0-8.059 4.381-15.091 10.888-18.856-3.204-1.854-6.92-2.921-10.888-2.921-12.027 0-21.777 9.75-21.777 21.777s9.75 21.777 21.777 21.777c3.968 0 7.685-1.066 10.888-2.92-6.507-3.767-10.888-10.798-10.888-18.857z",
                    fill: "#b1dbfc"
                  }), /*#__PURE__*/jsx_runtime_.jsx("path", {
                    d: "m239.251 260.439c0-8.059 4.381-15.091 10.888-18.856-3.204-1.854-6.921-2.921-10.888-2.921-12.027 0-21.777 9.75-21.777 21.777s9.75 21.777 21.777 21.777c3.968 0 7.685-1.066 10.888-2.92-6.507-3.767-10.888-10.798-10.888-18.857z",
                    fill: "#b1dbfc"
                  }), /*#__PURE__*/jsx_runtime_.jsx("path", {
                    d: "m309.588 260.439c0-8.059 4.381-15.091 10.888-18.856-3.204-1.854-6.921-2.921-10.888-2.921-12.027 0-21.777 9.75-21.777 21.777s9.75 21.777 21.777 21.777c3.968 0 7.685-1.066 10.888-2.92-6.507-3.767-10.888-10.798-10.888-18.857z",
                    fill: "#b1dbfc"
                  }), /*#__PURE__*/jsx_runtime_.jsx("path", {
                    d: "m69.191 260.253c0 16.144 13.134 29.277 29.276 29.277 16.144 0 29.277-13.133 29.277-29.277 0-16.143-13.134-29.276-29.277-29.276-16.142 0-29.276 13.133-29.276 29.276zm43.554 0c0 7.872-6.405 14.277-14.277 14.277s-14.276-6.405-14.276-14.277 6.404-14.276 14.276-14.276 14.277 6.404 14.277 14.276z"
                  }), /*#__PURE__*/jsx_runtime_.jsx("path", {
                    d: "m198.082 260.253c0-16.143-13.134-29.276-29.277-29.276s-29.276 13.133-29.276 29.276c0 16.144 13.134 29.277 29.276 29.277 16.143 0 29.277-13.133 29.277-29.277zm-43.554 0c0-7.872 6.404-14.276 14.276-14.276s14.277 6.404 14.277 14.276-6.405 14.277-14.277 14.277-14.276-6.405-14.276-14.277z"
                  }), /*#__PURE__*/jsx_runtime_.jsx("path", {
                    d: "m268.419 260.253c0-16.143-13.134-29.276-29.277-29.276s-29.276 13.133-29.276 29.276c0 16.144 13.134 29.277 29.276 29.277 16.143 0 29.277-13.133 29.277-29.277zm-43.554 0c0-7.872 6.404-14.276 14.276-14.276s14.277 6.404 14.277 14.276-6.405 14.277-14.277 14.277-14.276-6.405-14.276-14.277z"
                  }), /*#__PURE__*/jsx_runtime_.jsx("path", {
                    d: "m338.756 260.253c0-16.143-13.134-29.276-29.277-29.276s-29.276 13.133-29.276 29.276c0 16.144 13.134 29.277 29.276 29.277 16.143 0 29.277-13.133 29.277-29.277zm-43.554 0c0-7.872 6.404-14.276 14.276-14.276s14.277 6.404 14.277 14.276-6.405 14.277-14.277 14.277-14.276-6.405-14.276-14.277z"
                  }), /*#__PURE__*/jsx_runtime_.jsx("path", {
                    d: "m438.874 3.863h-276.72c-40.321 0-73.126 32.804-73.126 73.125v11.83h-15.903c-40.321.001-73.125 32.805-73.125 73.126v185.938c0 40.322 32.804 73.125 73.125 73.125h78.18c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-78.18c-32.05 0-58.125-26.075-58.125-58.125v-185.938c0-32.05 26.075-58.125 58.125-58.125h276.721c32.05 0 58.125 26.075 58.125 58.125v185.938c0 32.05-26.075 58.125-58.125 58.125-8.543 0-16.518 3.758-21.881 10.312-29.417 35.95-64.447 61.355-88.653 76.336-2.257 1.393-4.855-.96-3.669-3.382 9.512-19.408 16.805-39.761 21.675-60.494 2.728-11.618-6.129-22.772-18.109-22.772h-52.903c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h52.903c2.301 0 4.027 2.128 3.506 4.342-4.612 19.638-11.523 38.924-20.541 57.323-7.776 15.872 10.025 32.025 25.032 22.738 25.178-15.583 61.642-42.04 92.368-79.591 2.503-3.058 6.247-4.812 10.272-4.812 40.321 0 73.125-32.804 73.125-73.125v-11.83h15.903c40.322 0 73.126-32.804 73.126-73.125v-75.469c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v75.469c0 32.05-26.075 58.125-58.126 58.125h-15.903v-159.108c0-40.321-32.804-73.125-73.125-73.125h-245.818v-11.83c0-32.05 26.075-58.125 58.126-58.125h276.72c32.051 0 58.126 26.075 58.126 58.125v75.469c0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-75.469c0-40.322-32.804-73.126-73.126-73.126z"
                  })]
                })]
              }) : ""]
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(external_framer_motion_.motion.div, {
          variants: page_transitions/* fadeInUp */.eu,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.HStack, {
            spacing: 2,
            alignItems: "left",
            justifyContent: ["center", "left", "left"],
            children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
              fontSize: "xs",
              children: "Published on"
            }), /*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
              fontSize: "xs",
              fontWeight: "bold",
              children: external_dayjs_default()(blogDetails === null || blogDetails === void 0 ? void 0 : blogDetails.published_at).format("LL")
            })]
          })
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(external_framer_motion_.motion.div, {
        variants: page_transitions/* fadeInUp */.eu,
        children: /*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
          className: "article",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            dangerouslySetInnerHTML: {
              __html: articleContent
            }
          })
        })
      }), blogDetails !== null && blogDetails !== void 0 && blogDetails.url ? /*#__PURE__*/jsx_runtime_.jsx(layout_DevToCallToAction, {
        href: blogDetails.url
      }) : ""]
    })
  });
};

const getAllBlogs = async () => {
  const res = await fetch("https://dev.to/api/articles?username=mert_kadir");

  if (res.status < 200 || res.status >= 300) {
    throw new Error(`Error fetching... Status code: ${res.status}, ${res.statusText}`);
  }

  const data = await res.json();
  return data;
};

const root = process.cwd();
const getStaticPaths = async () => {
  let devData = await getAllBlogs();
  devData = devData.filter(data => data.canonical_url.includes("dev.to"));
  const devtoPaths = devData.map(data => ({
    params: {
      slug: data === null || data === void 0 ? void 0 : data.slug
    }
  }));
  const localPaths = external_fs_default().readdirSync(external_path_default().join(root, "data", "posts")).map(p => ({
    params: {
      slug: p.replace(/\.mdx/, "")
    }
  }));
  return {
    paths: [...devtoPaths, ...localPaths],
    fallback: true
  };
};

const markdownToHtml = async markdown => {
  const result = await external_remark_default()().use((external_remark_html_default())).use((external_remark_prism_default())).process(markdown);
  return result.toString();
};

const getStaticProps = async ({
  params
}) => {
  const devData = await getAllBlogs();
  const selectedBlog = devData.filter(data => (data === null || data === void 0 ? void 0 : data.slug) === (params === null || params === void 0 ? void 0 : params.slug) && data.canonical_url.includes("dev.to"));
  let blogObj = null,
      remarkContent = null;

  if (selectedBlog.length) {
    var _selectedBlog$;

    const res = await fetch(`https://dev.to/api/articles/${(_selectedBlog$ = selectedBlog[0]) === null || _selectedBlog$ === void 0 ? void 0 : _selectedBlog$.id}`);
    blogObj = await res.json();
    remarkContent = await markdownToHtml(blogObj.body_markdown);
  } else {
    const markdownWithMeta = external_fs_default().readFileSync(external_path_default().join(root, "data", "posts", `${params === null || params === void 0 ? void 0 : params.slug}.mdx`), "utf-8");
    const {
      data: frontmatter,
      content
    } = external_gray_matter_default()(markdownWithMeta);
    const devtoPost = devData.filter(data => !data.canonical_url.includes("dev.to") && data.canonical_url.split("/blog/")[1] === (params === null || params === void 0 ? void 0 : params.slug))[0];

    if (devtoPost) {
      frontmatter["comments_count"] = devtoPost === null || devtoPost === void 0 ? void 0 : devtoPost.comments_count;
      frontmatter["public_reactions_count"] = devtoPost === null || devtoPost === void 0 ? void 0 : devtoPost.public_reactions_count;
      frontmatter["url"] = devtoPost === null || devtoPost === void 0 ? void 0 : devtoPost.url;
    }

    blogObj = frontmatter;
    remarkContent = await markdownToHtml(content);
  }

  if (!devData) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      articleContent: remarkContent,
      blogDetails: blogObj
    },
    revalidate: 1
  };
};
/* harmony default export */ var _slug_ = (ArticlePage);

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

/***/ 5747:
/***/ (function(module) {

"use strict";
module.exports = require("fs");;

/***/ }),

/***/ 9064:
/***/ (function(module) {

"use strict";
module.exports = require("gray-matter");;

/***/ }),

/***/ 701:
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ 5622:
/***/ (function(module) {

"use strict";
module.exports = require("path");;

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [127,583,29,205,759,499], function() { return __webpack_exec__(1897); });
module.exports = __webpack_exports__;

})();