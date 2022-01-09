(function() {
var exports = {};
exports.id = 405;
exports.ids = [405];
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

/***/ 8984:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ pages; },
  "getStaticProps": function() { return /* binding */ getStaticProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(3426);
// EXTERNAL MODULE: ./components/ui/motion.tsx
var motion = __webpack_require__(29);
// EXTERNAL MODULE: ./components/layout/header.tsx + 1 modules
var header = __webpack_require__(6277);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./components/ui/theme/index.ts
var theme = __webpack_require__(499);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(2470);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);
// EXTERNAL MODULE: ./components/ui/page-transitions.tsx
var page_transitions = __webpack_require__(9206);
;// CONCATENATED MODULE: ./components/home-page/PopularArticles.tsx










const ORANGE = "#ff9400";

const PopularArticles = props => {
  const {
    posts
  } = props;
  const linkColor = (0,theme/* useLinkColor */.o3)();
  const textColor = (0,react_.useColorModeValue)("gray.500", "gray.200");

  function compare(a, b) {
    const countA = a.public_reactions_count;
    const countB = b.public_reactions_count;
    let comparison = 0;

    if (countA < countB) {
      comparison = 1;
    } else if (countA > countB) {
      comparison = -1;
    }

    return comparison;
  }

  const mostLikedData = posts.sort(compare).slice(0, 3);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.VStack, {
    align: "start",
    spacing: 8,
    width: "100%",
    children: [/*#__PURE__*/jsx_runtime_.jsx(header/* default */.Z, {
      underlineColor: ORANGE,
      mt: 0,
      mb: 0,
      children: "Popular Articles"
    }), /*#__PURE__*/jsx_runtime_.jsx(react_.SimpleGrid, {
      columns: 1,
      spacing: 4,
      mt: 5,
      w: "100%",
      children: posts && mostLikedData.map(({
        description,
        title,
        slug,
        positive_reactions_count,
        comments_count,
        published_at
      }, i) => /*#__PURE__*/jsx_runtime_.jsx(motion/* MotionBox */.uH, {
        whileHover: {
          y: -5
        },
        children: /*#__PURE__*/jsx_runtime_.jsx(page_transitions/* CardTransition */.xp, {
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.VStack, {
            spacing: 1,
            p: 4,
            _hover: {
              shadow: "md",
              textDecoration: "none"
            },
            borderWidth: "1px",
            position: "relative",
            rounded: "md",
            bg: (0,react_.useColorModeValue)("white", "gray.800"),
            align: "left",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.HStack, {
              justifyContent: "space-between",
              isInline: true,
              children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Heading, {
                fontSize: "lg",
                align: "left",
                mt: 0,
                children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                  href: `/blog/${slug}`,
                  passHref: true,
                  children: /*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
                    as: react_.Link,
                    color: linkColor,
                    children: title
                  })
                })
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.HStack, {
                spacing: 2,
                isInline: true,
                d: ["none", "flex", "flex"],
                children: [positive_reactions_count ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Flex, {
                  alignItems: "center",
                  children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
                    fontSize: "sm",
                    noOfLines: 1,
                    fontWeight: "400",
                    align: "left",
                    color: textColor,
                    children: positive_reactions_count
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
                }) : "", comments_count ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Flex, {
                  alignItems: "center",
                  children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
                    fontSize: "sm",
                    noOfLines: 1,
                    fontWeight: "400",
                    align: "left",
                    color: textColor,
                    children: comments_count
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
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.HStack, {
              spacing: 2,
              isInline: true,
              children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Tooltip, {
                hasArrow: true,
                label: "Published",
                placement: "top",
                children: /*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
                  fontSize: "sm",
                  fontWeight: "600",
                  color: textColor,
                  children: external_moment_default()(published_at).format("Do MMMM YYYY")
                })
              }), positive_reactions_count ? /*#__PURE__*/jsx_runtime_.jsx(react_.Tooltip, {
                hasArrow: true,
                label: "Reactions",
                placement: "top",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Flex, {
                  alignItems: "center",
                  d: ["flex", "none", "none"],
                  children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
                    fontSize: "sm",
                    noOfLines: 1,
                    fontWeight: "400",
                    align: "left",
                    color: textColor,
                    children: positive_reactions_count
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
                })
              }) : "", comments_count ? /*#__PURE__*/jsx_runtime_.jsx(react_.Tooltip, {
                hasArrow: true,
                label: "Comments",
                placement: "top",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Flex, {
                  alignItems: "center",
                  d: ["flex", "none", "none"],
                  children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
                    fontSize: "sm",
                    noOfLines: 1,
                    fontWeight: "400",
                    align: "left",
                    color: textColor,
                    children: comments_count
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
                })
              }) : ""]
            }), /*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
              align: "left",
              fontSize: "md",
              noOfLines: 1,
              color: textColor,
              children: description
            })]
          })
        })
      }, i))
    }), /*#__PURE__*/jsx_runtime_.jsx(react_.HStack, {
      justifyContent: "center",
      width: "100%",
      children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "/blog",
        passHref: true,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.HStack, {
          spacing: 2,
          as: react_.Link,
          color: linkColor,
          children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
            fontSize: "sm",
            children: "More Articles"
          }), /*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
            height: "1.2rem",
            width: "1.2rem",
            children: /*#__PURE__*/jsx_runtime_.jsx("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 20 20",
              fill: "currentColor",
              children: /*#__PURE__*/jsx_runtime_.jsx("path", {
                fillRule: "evenodd",
                d: "M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z",
                clipRule: "evenodd"
              })
            })
          })]
        })
      })
    })]
  });
};

/* harmony default export */ var home_page_PopularArticles = (PopularArticles);
;// CONCATENATED MODULE: external "react-use-lanyard"
var external_react_use_lanyard_namespaceObject = require("react-use-lanyard");;
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./data/user.ts
const userId = "440239378158059532";
/* harmony default export */ var user = (userId);
;// CONCATENATED MODULE: ./data/Status.tsx





/* Import types */

/* Import data */


const Status = () => {
  var _getActivity, _getActivity2, _getActivity3, _getActivity4, _getActivity5, _getActivity6, _getActivity7, _getActivity8, _getActivity9;

  const {
    loading,
    status
  } = (0,external_react_use_lanyard_namespaceObject.useLanyard)({
    userId: user,
    socket: true
  });

  const getActivity = () => {
    if ((status === null || status === void 0 ? void 0 : status.listening_to_spotify) === true) {
      const {
        song,
        artist,
        album
      } = status.spotify || {};
      return {
        name: song,
        details: `by ${artist}`,
        state: `on ${album}`
      };
    }
  };

  const getImage = () => {
    if (!loading && (status === null || status === void 0 ? void 0 : status.listening_to_spotify) === true) {
      const activity = status.spotify;
      return {
        largeImage: activity === null || activity === void 0 ? void 0 : activity.album_art_url
      };
    } else {
      const activity = getActivity();
      const {
        application_id
      } = activity || {};
      const {
        large_image,
        small_image
      } = (activity === null || activity === void 0 ? void 0 : activity.assets) || {};
      const [largeImage, smallImage] = [large_image && `https://cdn.discordapp.com/app-assets/${application_id}/${large_image}.png?size=256`, small_image && `https://cdn.discordapp.com/app-assets/${application_id}/${small_image}.png?size=256`];
      return {
        largeImage,
        smallImage
      };
    }
  };

  if (loading === false && (status === null || status === void 0 ? void 0 : status.discord_status) === "offline") return /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Box, {
    display: "flex",
    flexWrap: "nowrap",
    float: "left",
    padding: "5",
    marginTop: "5",
    _hover: {
      shadow: "lg"
    },
    backgroundColor: (0,react_.useColorModeValue)("gray.100", "#1e2533"),
    rounded: "md",
    children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Stack, {
      backgroundColor: (0,react_.useColorModeValue)("gray.400", "gray.600"),
      rounded: "full",
      width: "4",
      height: 4,
      margin: "auto",
      alignItems: "center"
    }), /*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
      textColor: (0,react_.useColorModeValue)("black", "white"),
      fontSize: "md",
      textAlign: "center",
      margin: "1",
      children: " Offline"
    })]
  });else if (loading === false && (status === null || status === void 0 ? void 0 : status.discord_status) === "online" && (status === null || status === void 0 ? void 0 : status.listening_to_spotify) === false) return /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Box, {
    display: "flex",
    flexWrap: "nowrap",
    float: "left",
    padding: "5",
    marginTop: "5",
    _hover: {
      shadow: "lg"
    },
    backgroundColor: (0,react_.useColorModeValue)("gray.100", "#1e2533"),
    rounded: "md",
    children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Stack, {
      backgroundColor: "green.500",
      rounded: "full",
      width: "4",
      height: 4,
      margin: "auto",
      alignItems: "center"
    }), /*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
      textColor: (0,react_.useColorModeValue)("black", "white"),
      fontSize: "md",
      textAlign: "center",
      margin: "1",
      children: " Online"
    })]
  });else if (loading === false && (status === null || status === void 0 ? void 0 : status.discord_status) === "online" && (status === null || status === void 0 ? void 0 : status.listening_to_spotify) === true) return /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Box, {
    display: "flex",
    flexWrap: "nowrap",
    float: "left",
    padding: "5",
    marginTop: "5",
    _hover: {
      shadow: "lg"
    },
    backgroundColor: (0,react_.useColorModeValue)("gray.100", "#1e2533"),
    rounded: "md",
    children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Stack, {
      backgroundColor: "green.500",
      rounded: "full",
      width: "4",
      height: 4,
      margin: "auto",
      marginRight: "5",
      alignItems: "center"
    }), /*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
      fontSize: "sm",
      margin: "auto",
      textAlign: "center",
      marginRight: "5",
      textColor: (0,react_.useColorModeValue)("gray.400", "gray.600"),
      children: "Listening to"
    }), /*#__PURE__*/jsx_runtime_.jsx(react_.Stack, {
      marginRight: "5",
      objectFit: "cover",
      borderRadius: "50%",
      children: getImage().largeImage && /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
        src: getImage().largeImage || "",
        width: "80px",
        height: "80px",
        alt: "icon",
        draggable: "true",
        objectFit: "cover",
        className: "rounded-lg"
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Text, {
      fontSize: "sm",
      margin: "auto",
      textAlign: "center",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h1", {
        children: [" ", (_getActivity = getActivity()) === null || _getActivity === void 0 ? void 0 : _getActivity.name]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("h1", {
        children: [" ", (_getActivity2 = getActivity()) === null || _getActivity2 === void 0 ? void 0 : _getActivity2.details]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("h1", {
        children: [" ", (_getActivity3 = getActivity()) === null || _getActivity3 === void 0 ? void 0 : _getActivity3.state, " "]
      })]
    })]
  });else if (loading === false && (status === null || status === void 0 ? void 0 : status.discord_status) === "dnd" && (status === null || status === void 0 ? void 0 : status.listening_to_spotify) === false) return /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Box, {
    display: "flex",
    flexWrap: "nowrap",
    float: "left",
    padding: "5",
    _hover: {
      shadow: "lg"
    },
    marginTop: "5",
    backgroundColor: (0,react_.useColorModeValue)("gray.100", "#1e2533"),
    rounded: "md",
    children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Stack, {
      backgroundColor: "red.500",
      rounded: "full",
      width: "4",
      height: 4,
      margin: "auto",
      alignItems: "center"
    }), /*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
      textColor: (0,react_.useColorModeValue)("black", "white"),
      fontSize: "md",
      textAlign: "center",
      margin: "1",
      children: " Disturbing"
    })]
  });else if (loading === false && (status === null || status === void 0 ? void 0 : status.discord_status) === "dnd" && (status === null || status === void 0 ? void 0 : status.listening_to_spotify) === true) return /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Box, {
    display: "flex",
    flexWrap: "nowrap",
    float: "left",
    padding: "5",
    marginTop: "5",
    _hover: {
      shadow: "lg"
    },
    backgroundColor: (0,react_.useColorModeValue)("gray.100", "#1e2533"),
    rounded: "md",
    children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Stack, {
      backgroundColor: "red.500",
      rounded: "full",
      width: "4",
      height: 4,
      margin: "auto",
      marginRight: "5",
      alignItems: "center"
    }), /*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
      fontSize: "sm",
      margin: "auto",
      textAlign: "center",
      marginRight: "5",
      textColor: (0,react_.useColorModeValue)("gray.400", "gray.600"),
      children: "Listening to"
    }), /*#__PURE__*/jsx_runtime_.jsx(react_.Stack, {
      marginRight: "5",
      objectFit: "cover",
      borderRadius: "50%",
      children: getImage().largeImage && /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
        src: getImage().largeImage || "",
        width: "80px",
        height: "80px",
        alt: "icon",
        draggable: "true",
        objectFit: "cover",
        className: "rounded-lg"
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Text, {
      fontSize: "sm",
      margin: "auto",
      textAlign: "center",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h1", {
        children: [" ", (_getActivity4 = getActivity()) === null || _getActivity4 === void 0 ? void 0 : _getActivity4.name]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("h1", {
        children: [" ", (_getActivity5 = getActivity()) === null || _getActivity5 === void 0 ? void 0 : _getActivity5.details]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("h1", {
        children: [" ", (_getActivity6 = getActivity()) === null || _getActivity6 === void 0 ? void 0 : _getActivity6.state, " "]
      })]
    })]
  });else if (loading === false && (status === null || status === void 0 ? void 0 : status.discord_status) === "idle" && (status === null || status === void 0 ? void 0 : status.listening_to_spotify) === false) return /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Box, {
    display: "flex",
    flexWrap: "nowrap",
    float: "left",
    padding: "5",
    marginTop: "5",
    _hover: {
      shadow: "lg"
    },
    backgroundColor: (0,react_.useColorModeValue)("gray.100", "#1e2533"),
    rounded: "md",
    children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Stack, {
      backgroundColor: "yellow.400",
      rounded: "full",
      width: "4",
      height: 4,
      margin: "auto",
      alignItems: "center"
    }), /*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
      textColor: (0,react_.useColorModeValue)("black", "white"),
      fontSize: "md",
      textAlign: "center",
      margin: "1",
      children: " Idled"
    })]
  });else if (loading === false && (status === null || status === void 0 ? void 0 : status.discord_status) === "idle" && (status === null || status === void 0 ? void 0 : status.listening_to_spotify) === true) return /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Box, {
    display: "flex",
    flexWrap: "nowrap",
    float: "left",
    padding: "5",
    marginTop: "5",
    _hover: {
      shadow: "lg"
    },
    backgroundColor: (0,react_.useColorModeValue)("gray.100", "#1e2533"),
    rounded: "md",
    children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Stack, {
      backgroundColor: "yellow.400",
      rounded: "full",
      width: "4",
      height: 4,
      margin: "auto",
      marginRight: "5",
      alignItems: "center"
    }), /*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
      fontSize: "sm",
      margin: "auto",
      textAlign: "center",
      marginRight: "5",
      textColor: (0,react_.useColorModeValue)("gray.400", "gray.600"),
      children: "Listening to"
    }), /*#__PURE__*/jsx_runtime_.jsx(react_.Stack, {
      marginRight: "5",
      objectFit: "cover",
      borderRadius: "50%",
      children: getImage().largeImage && /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
        src: getImage().largeImage || "",
        width: "80px",
        height: "80px",
        alt: "icon",
        draggable: "true",
        objectFit: "cover",
        className: "rounded-lg"
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Text, {
      fontSize: "sm",
      margin: "auto",
      textAlign: "center",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h1", {
        children: [" ", (_getActivity7 = getActivity()) === null || _getActivity7 === void 0 ? void 0 : _getActivity7.name]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("h1", {
        children: [" ", (_getActivity8 = getActivity()) === null || _getActivity8 === void 0 ? void 0 : _getActivity8.details]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("h1", {
        children: [" ", (_getActivity9 = getActivity()) === null || _getActivity9 === void 0 ? void 0 : _getActivity9.state, " "]
      })]
    })]
  });else (status === null || status === void 0 ? void 0 : status.discord_status) === "invisible";
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Box, {
    display: "flex",
    flexWrap: "nowrap",
    float: "left",
    padding: "5",
    marginTop: "5",
    _hover: {
      shadow: "lg"
    },
    backgroundColor: (0,react_.useColorModeValue)("gray.100", "#1e2533"),
    rounded: "md",
    children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Stack, {
      backgroundColor: (0,react_.useColorModeValue)("gray.400", "gray.600"),
      rounded: "full",
      width: "4",
      height: 4,
      margin: "auto",
      alignItems: "center"
    }), /*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
      textColor: (0,react_.useColorModeValue)("black", "white"),
      fontSize: "md",
      textAlign: "center",
      margin: "1",
      children: " Offline"
    })]
  });
};

/* harmony default export */ var data_Status = (Status);
;// CONCATENATED MODULE: ./components/home-page/home.tsx









const ANIMATION_DURATION = 0.5;
const home_ORANGE = "#ff9400";

const Home = props => {
  const {
    posts
  } = props;
  const linkColor = (0,theme/* useLinkColor */.o3)();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Flex, {
    direction: "column",
    align: "center",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Flex, {
      direction: ["column", "column", "row"],
      children: [/*#__PURE__*/jsx_runtime_.jsx(motion/* MotionBox */.uH, {
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
        children: /*#__PURE__*/jsx_runtime_.jsx(react_.Avatar, {
          backgroundColor: 'transparent',
          size: "2xl" // src={UserIcon}
          ,
          src: "/assets/images/user_icon.png"
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(motion/* MotionFlex */.HZ, {
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
        children: [/*#__PURE__*/jsx_runtime_.jsx(header/* default */.Z, {
          underlineColor: home_ORANGE,
          emoji: "\uD83D\uDC4B",
          mt: 0,
          children: "Hey!"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Box, {
          as: "h2",
          fontSize: "2xl",
          fontWeight: "400",
          textAlign: "left",
          children: ["My name is", " ", /*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
            as: "strong",
            fontWeight: "600",
            children: "Mert Kadir"
          }), " ", "and I'm a", " ", /*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
            as: "span",
            whiteSpace: "nowrap",
            children: "Mobile Application Developer."
          }), " ", /*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
            as: "span",
            whiteSpace: "nowrap",
            children: "A software lover\xA0"
          }), "from", " ", /*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
            as: "span",
            whiteSpace: "nowrap",
            children: "Turkey \uD83C\uDDF9\uD83C\uDDF7"
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
          as: "h2",
          fontSize: "2xl",
          fontWeight: "400",
          mt: 5,
          textAlign: "left",
          children: "Hey, Welcome to Mert's Digital Environment I'm A place to share what I've learned and what I've done.\uD83D\uDE0A"
        })]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(data_Status, {}), /*#__PURE__*/jsx_runtime_.jsx(motion/* MotionBox */.uH, {
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
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Box, {
        mt: 10,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Stack, {
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
          backgroundColor: (0,react_.useColorModeValue)("gray.100", "#1e2533"),
          rounded: "sm",
          fontSize: "md",
          children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
            textAlign: "center",
            color: "#53c8c4",
            fontWeight: "bold",
            children: "Highlists"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.UnorderedList, {
            textAlign: "left",
            paddingLeft: 5,
            m: 0,
            children: [/*#__PURE__*/jsx_runtime_.jsx(react_.ListItem, {
              children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: '/blog',
                passHref: true,
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Link, {
                  color: linkColor,
                  children: ["Blog page", /*#__PURE__*/jsx_runtime_.jsx(react_.Badge, {
                    ml: "1",
                    colorScheme: "green",
                    children: "New"
                  })]
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(react_.ListItem, {
              children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: '/open-source',
                passHref: true,
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Link, {
                  color: linkColor,
                  children: ["Open Source", /*#__PURE__*/jsx_runtime_.jsx(react_.Badge, {
                    ml: "1",
                    colorScheme: "blue",
                    children: "New"
                  })]
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(react_.ListItem, {
              children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: '/projects',
                passHref: true,
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Link, {
                  color: linkColor,
                  children: ["Projects page", /*#__PURE__*/jsx_runtime_.jsx(react_.Badge, {
                    ml: "1",
                    colorScheme: "red",
                    children: "being designed"
                  })]
                })
              })
            })]
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx(home_page_PopularArticles, {
          posts: posts
        })]
      })
    })]
  });
};

/* harmony default export */ var home = (Home);
// EXTERNAL MODULE: ./components/layout/pageLayout.tsx
var pageLayout = __webpack_require__(1388);
;// CONCATENATED MODULE: ./pages/index.tsx




const Index = props => {
  const {
    posts
  } = props;
  console.log(posts);
  return /*#__PURE__*/jsx_runtime_.jsx(pageLayout/* default */.Z, {
    title: "Mert Kadir - Mobil Application Developer",
    children: /*#__PURE__*/jsx_runtime_.jsx(home, {
      posts: posts
    })
  });
};

const getPosts = async () => {
  const res = await fetch("https://dev.to/api/articles?username=mert_kadir");
  const posts = await res.json();
  return posts;
};

const getStaticProps = async () => {
  const posts = await getPosts();

  if (!posts) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      posts
    },
    revalidate: 1
  };
};
/* harmony default export */ var pages = (Index);

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

/***/ 2470:
/***/ (function(module) {

"use strict";
module.exports = require("moment");;

/***/ }),

/***/ 5273:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

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

/***/ 5519:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/to-base-64.js");;

/***/ }),

/***/ 444:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

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
var __webpack_exports__ = __webpack_require__.X(0, [664,675,29,205,277,759,499], function() { return __webpack_exec__(8984); });
module.exports = __webpack_exports__;

})();