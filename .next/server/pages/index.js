(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/home-page/PopularArticles.tsx":
/*!**************************************************!*\
  !*** ./components/home-page/PopularArticles.tsx ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_ui_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/ui/theme */ "./components/ui/theme/index.ts");
/* harmony import */ var _layout_header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../layout/header */ "./components/layout/header.tsx");
/* harmony import */ var components_ui_page_transitions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/ui/page-transitions */ "./components/ui/page-transitions.tsx");
/* harmony import */ var components_ui_motion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/ui/motion */ "./components/ui/motion.tsx");

var _jsxFileName = "C:\\Users\\mert\\Desktop\\myportfolio\\components\\home-page\\PopularArticles.tsx";








const ORANGE = "#ff9400";

const PopularArticles = props => {
  const {
    posts
  } = props;
  const linkColor = (0,components_ui_theme__WEBPACK_IMPORTED_MODULE_5__.useLinkColor)();
  const textColor = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue)("gray.500", "gray.200");

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
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.VStack, {
    align: "start",
    spacing: 8,
    width: "100%",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_layout_header__WEBPACK_IMPORTED_MODULE_6__.default, {
      underlineColor: ORANGE,
      mt: 0,
      mb: 0,
      children: "Popular Articles"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.SimpleGrid, {
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
      }, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_ui_motion__WEBPACK_IMPORTED_MODULE_8__.MotionBox, {
        whileHover: {
          y: -5
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_ui_page_transitions__WEBPACK_IMPORTED_MODULE_7__.CardTransition, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.VStack, {
            spacing: 1,
            p: 4,
            _hover: {
              shadow: "md",
              textDecoration: "none"
            },
            borderWidth: "1px",
            position: "relative",
            rounded: "md",
            bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue)("white", "gray.800"),
            align: "left",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.HStack, {
              justifyContent: "space-between",
              isInline: true,
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Heading, {
                fontSize: "lg",
                align: "left",
                mt: 0,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                  href: `/blog/${slug}`,
                  passHref: true,
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                    as: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Link,
                    color: linkColor,
                    children: title
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 80,
                    columnNumber: 27
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 79,
                  columnNumber: 25
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 78,
                columnNumber: 23
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.HStack, {
                spacing: 2,
                isInline: true,
                d: ["none", "flex", "flex"],
                children: [positive_reactions_count ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
                  alignItems: "center",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                    fontSize: "sm",
                    noOfLines: 1,
                    fontWeight: "400",
                    align: "left",
                    color: textColor,
                    children: positive_reactions_count
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 88,
                    columnNumber: 29
                  }, undefined), "\xA0", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
                    id: "Capa_1",
                    enableBackground: "new 0 0 512 512",
                    height: "20px",
                    viewBox: "0 0 512 512",
                    width: "20px",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("g", {
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                        d: "m445.936 20.657h-379.872c-19.731 0-37.443 8.649-49.548 22.364l-6.403 43.701v239.535c0 36.486 19.465 66.064 55.951 66.064h89.427c6.57 0 12.872 10.817 17.518 15.463l77.704 77.704 16.721 2.268c.95-.664 1.856-1.42 2.704-2.268l77.704-77.704c4.646-4.646 10.948-7.256 17.518-7.256h80.577c36.486 0 66.064-29.578 66.064-66.064v-247.742c-.001-36.487-29.579-66.065-66.065-66.065z",
                        fill: "#ff7e92"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 107,
                        columnNumber: 33
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                        d: "m164.159 407.784 77.704 77.704c6.959 6.959 17.774 7.714 25.57 2.268l-91.595-91.65c-7.685-7.685-18.323-12.093-29.194-12.093h-80.579c-27.323 0-49.548-22.226-49.548-49.548v-291.444c-10.25 11.639-16.517 26.973-16.517 43.701v247.742c0 36.486 29.578 66.065 66.065 66.065h80.577c6.57-.001 12.872 2.609 17.517 7.255z",
                        fill: "#ff5f7a"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 111,
                        columnNumber: 33
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                        d: "m387.626 177.951c-4.003-35.677-34.163-63.99-69.988-66.315-21.701-1.408-41.538 6.405-56.107 19.853-3.135 2.894-7.926 2.894-11.062 0-14.569-13.448-34.406-21.261-56.107-19.853-8.653.562-16.976 2.639-24.679 5.971-24.19 10.461-40.655 60.344-40.655 60.344-8.486 75.632 93.735 136.686 124.126 154.751l21.005-.808c37.878-23.988 121.196-85.05 113.467-153.943z",
                        fill: "#fff"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 115,
                        columnNumber: 33
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                        d: "m142.235 167.09c2.224-19.818 12.594-37.402 27.447-49.483-24.153 10.475-42.275 33.311-45.309 60.344-8.485 75.632 92.757 141.829 123.148 159.894 5.245 3.117 11.712 3.117 16.957 0 2.702-1.606 5.985-3.61 9.68-5.95-19.374-10.919-141.105-82.962-131.923-164.805z",
                        fill: "#ffdbde"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 119,
                        columnNumber: 33
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 106,
                      columnNumber: 31
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 98,
                    columnNumber: 29
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 87,
                  columnNumber: 27
                }, undefined) : "", comments_count ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
                  alignItems: "center",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                    fontSize: "sm",
                    noOfLines: 1,
                    fontWeight: "400",
                    align: "left",
                    color: textColor,
                    children: comments_count
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 131,
                    columnNumber: 29
                  }, undefined), "\xA0", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
                    id: "Capa_1",
                    enableBackground: "new 0 0 512 512",
                    height: "20px",
                    viewBox: "0 0 512 512",
                    width: "20px",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                      d: "m438.983 11.549h-276.72c-36.094 0-65.625 29.531-65.625 65.625v22.33h250.317c36.094 0 65.625 29.531 65.625 65.625v163.609h26.404c36.094 0 65.625-29.531 65.625-65.625v-185.939c0-36.094-29.532-65.625-65.626-65.625z",
                      fill: "#6c7ed6"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 149,
                      columnNumber: 31
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                      d: "m392.454 96.504h-276.72c-6.636 0-13.047 1.006-19.096 2.86v.14h250.317c36.094 0 65.625 29.531 65.625 65.625v163.609h26.404c6.636 0 13.047-1.006 19.096-2.86v-163.748c0-36.094-29.532-65.626-65.626-65.626z",
                      fill: "#4f67d2"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 153,
                      columnNumber: 31
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                      d: "m349.954 96.504h-276.72c-36.094 0-65.625 29.531-65.625 65.625v185.939c0 36.094 29.531 65.625 65.625 65.625h166.083c7.12 0 12.435 6.626 10.807 13.557-4.404 18.751-11.144 38.581-21.107 58.908-4.474 9.129 5.704 18.41 14.349 13.06 24.997-15.47 60.562-41.362 90.512-77.964 3.937-4.811 9.858-7.561 16.075-7.561 36.094 0 65.625-29.531 65.625-65.625v-185.938c.002-36.094-29.53-65.626-65.624-65.626z",
                      fill: "#60b8fe"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 157,
                      columnNumber: 31
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                      d: "m292.624 427.25c1.628-6.932-3.687-13.557-10.807-13.557h-42.5c7.12 0 12.435 6.625 10.807 13.557-4.404 18.751-11.144 38.581-21.107 58.908-4.474 9.129 5.704 18.41 14.349 13.06 9.591-5.936 20.74-13.411 32.527-22.431 7.603-17.049 13.007-33.679 16.731-49.537z",
                      fill: "#23a8fe"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 161,
                      columnNumber: 31
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                      d: "m50.109 348.068v-185.938c0-36.094 29.531-65.625 65.625-65.625h-42.5c-36.094 0-65.625 29.531-65.625 65.625v185.938c0 36.094 29.531 65.625 65.625 65.625h42.5c-36.094 0-65.625-29.531-65.625-65.625z",
                      fill: "#23a8fe"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 165,
                      columnNumber: 31
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("g", {
                      fill: "#dfebfa",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("circle", {
                        cx: "98.577",
                        cy: "260.439",
                        r: "21.777"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 170,
                        columnNumber: 33
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("circle", {
                        cx: "168.914",
                        cy: "260.439",
                        r: "21.777"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 171,
                        columnNumber: 33
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("circle", {
                        cx: "239.251",
                        cy: "260.439",
                        r: "21.777"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 172,
                        columnNumber: 33
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("circle", {
                        cx: "309.588",
                        cy: "260.439",
                        r: "21.777"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 173,
                        columnNumber: 33
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 169,
                      columnNumber: 31
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                      d: "m98.577 260.439c0-8.059 4.381-15.091 10.888-18.856-3.204-1.854-6.92-2.921-10.888-2.921-12.027 0-21.777 9.75-21.777 21.777s9.75 21.777 21.777 21.777c3.968 0 7.685-1.066 10.888-2.92-6.507-3.767-10.888-10.798-10.888-18.857z",
                      fill: "#b1dbfc"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 175,
                      columnNumber: 31
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                      d: "m168.914 260.439c0-8.059 4.381-15.091 10.888-18.856-3.204-1.854-6.92-2.921-10.888-2.921-12.027 0-21.777 9.75-21.777 21.777s9.75 21.777 21.777 21.777c3.968 0 7.685-1.066 10.888-2.92-6.507-3.767-10.888-10.798-10.888-18.857z",
                      fill: "#b1dbfc"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 179,
                      columnNumber: 31
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                      d: "m239.251 260.439c0-8.059 4.381-15.091 10.888-18.856-3.204-1.854-6.921-2.921-10.888-2.921-12.027 0-21.777 9.75-21.777 21.777s9.75 21.777 21.777 21.777c3.968 0 7.685-1.066 10.888-2.92-6.507-3.767-10.888-10.798-10.888-18.857z",
                      fill: "#b1dbfc"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 183,
                      columnNumber: 31
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                      d: "m309.588 260.439c0-8.059 4.381-15.091 10.888-18.856-3.204-1.854-6.921-2.921-10.888-2.921-12.027 0-21.777 9.75-21.777 21.777s9.75 21.777 21.777 21.777c3.968 0 7.685-1.066 10.888-2.92-6.507-3.767-10.888-10.798-10.888-18.857z",
                      fill: "#b1dbfc"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 187,
                      columnNumber: 31
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                      d: "m69.191 260.253c0 16.144 13.134 29.277 29.276 29.277 16.144 0 29.277-13.133 29.277-29.277 0-16.143-13.134-29.276-29.277-29.276-16.142 0-29.276 13.133-29.276 29.276zm43.554 0c0 7.872-6.405 14.277-14.277 14.277s-14.276-6.405-14.276-14.277 6.404-14.276 14.276-14.276 14.277 6.404 14.277 14.276z"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 191,
                      columnNumber: 31
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                      d: "m198.082 260.253c0-16.143-13.134-29.276-29.277-29.276s-29.276 13.133-29.276 29.276c0 16.144 13.134 29.277 29.276 29.277 16.143 0 29.277-13.133 29.277-29.277zm-43.554 0c0-7.872 6.404-14.276 14.276-14.276s14.277 6.404 14.277 14.276-6.405 14.277-14.277 14.277-14.276-6.405-14.276-14.277z"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 192,
                      columnNumber: 31
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                      d: "m268.419 260.253c0-16.143-13.134-29.276-29.277-29.276s-29.276 13.133-29.276 29.276c0 16.144 13.134 29.277 29.276 29.277 16.143 0 29.277-13.133 29.277-29.277zm-43.554 0c0-7.872 6.404-14.276 14.276-14.276s14.277 6.404 14.277 14.276-6.405 14.277-14.277 14.277-14.276-6.405-14.276-14.277z"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 193,
                      columnNumber: 31
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                      d: "m338.756 260.253c0-16.143-13.134-29.276-29.277-29.276s-29.276 13.133-29.276 29.276c0 16.144 13.134 29.277 29.276 29.277 16.143 0 29.277-13.133 29.277-29.277zm-43.554 0c0-7.872 6.404-14.276 14.276-14.276s14.277 6.404 14.277 14.276-6.405 14.277-14.277 14.277-14.276-6.405-14.276-14.277z"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 194,
                      columnNumber: 31
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                      d: "m438.874 3.863h-276.72c-40.321 0-73.126 32.804-73.126 73.125v11.83h-15.903c-40.321.001-73.125 32.805-73.125 73.126v185.938c0 40.322 32.804 73.125 73.125 73.125h78.18c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-78.18c-32.05 0-58.125-26.075-58.125-58.125v-185.938c0-32.05 26.075-58.125 58.125-58.125h276.721c32.05 0 58.125 26.075 58.125 58.125v185.938c0 32.05-26.075 58.125-58.125 58.125-8.543 0-16.518 3.758-21.881 10.312-29.417 35.95-64.447 61.355-88.653 76.336-2.257 1.393-4.855-.96-3.669-3.382 9.512-19.408 16.805-39.761 21.675-60.494 2.728-11.618-6.129-22.772-18.109-22.772h-52.903c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h52.903c2.301 0 4.027 2.128 3.506 4.342-4.612 19.638-11.523 38.924-20.541 57.323-7.776 15.872 10.025 32.025 25.032 22.738 25.178-15.583 61.642-42.04 92.368-79.591 2.503-3.058 6.247-4.812 10.272-4.812 40.321 0 73.125-32.804 73.125-73.125v-11.83h15.903c40.322 0 73.126-32.804 73.126-73.125v-75.469c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v75.469c0 32.05-26.075 58.125-58.126 58.125h-15.903v-159.108c0-40.321-32.804-73.125-73.125-73.125h-245.818v-11.83c0-32.05 26.075-58.125 58.126-58.125h276.72c32.051 0 58.126 26.075 58.126 58.125v75.469c0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-75.469c0-40.322-32.804-73.126-73.126-73.126z"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 195,
                      columnNumber: 31
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 141,
                    columnNumber: 29
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 130,
                  columnNumber: 27
                }, undefined) : ""]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 85,
                columnNumber: 23
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 21
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.HStack, {
              spacing: 2,
              isInline: true,
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {
                hasArrow: true,
                label: "Published",
                placement: "top",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                  fontSize: "sm",
                  fontWeight: "600",
                  color: textColor,
                  children: moment__WEBPACK_IMPORTED_MODULE_4___default()(published_at).format("Do MMMM YYYY")
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 205,
                  columnNumber: 25
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 204,
                columnNumber: 23
              }, undefined), positive_reactions_count ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {
                hasArrow: true,
                label: "Reactions",
                placement: "top",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
                  alignItems: "center",
                  d: ["flex", "none", "none"],
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                    fontSize: "sm",
                    noOfLines: 1,
                    fontWeight: "400",
                    align: "left",
                    color: textColor,
                    children: positive_reactions_count
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 212,
                    columnNumber: 29
                  }, undefined), "\xA0", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
                    id: "Capa_1",
                    enableBackground: "new 0 0 512 512",
                    height: "20px",
                    viewBox: "0 0 512 512",
                    width: "20px",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("g", {
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                        d: "m445.936 20.657h-379.872c-19.731 0-37.443 8.649-49.548 22.364l-6.403 43.701v239.535c0 36.486 19.465 66.064 55.951 66.064h89.427c6.57 0 12.872 10.817 17.518 15.463l77.704 77.704 16.721 2.268c.95-.664 1.856-1.42 2.704-2.268l77.704-77.704c4.646-4.646 10.948-7.256 17.518-7.256h80.577c36.486 0 66.064-29.578 66.064-66.064v-247.742c-.001-36.487-29.579-66.065-66.065-66.065z",
                        fill: "#ff7e92"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 231,
                        columnNumber: 33
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                        d: "m164.159 407.784 77.704 77.704c6.959 6.959 17.774 7.714 25.57 2.268l-91.595-91.65c-7.685-7.685-18.323-12.093-29.194-12.093h-80.579c-27.323 0-49.548-22.226-49.548-49.548v-291.444c-10.25 11.639-16.517 26.973-16.517 43.701v247.742c0 36.486 29.578 66.065 66.065 66.065h80.577c6.57-.001 12.872 2.609 17.517 7.255z",
                        fill: "#ff5f7a"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 235,
                        columnNumber: 33
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                        d: "m387.626 177.951c-4.003-35.677-34.163-63.99-69.988-66.315-21.701-1.408-41.538 6.405-56.107 19.853-3.135 2.894-7.926 2.894-11.062 0-14.569-13.448-34.406-21.261-56.107-19.853-8.653.562-16.976 2.639-24.679 5.971-24.19 10.461-40.655 60.344-40.655 60.344-8.486 75.632 93.735 136.686 124.126 154.751l21.005-.808c37.878-23.988 121.196-85.05 113.467-153.943z",
                        fill: "#fff"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 239,
                        columnNumber: 33
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                        d: "m142.235 167.09c2.224-19.818 12.594-37.402 27.447-49.483-24.153 10.475-42.275 33.311-45.309 60.344-8.485 75.632 92.757 141.829 123.148 159.894 5.245 3.117 11.712 3.117 16.957 0 2.702-1.606 5.985-3.61 9.68-5.95-19.374-10.919-141.105-82.962-131.923-164.805z",
                        fill: "#ffdbde"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 243,
                        columnNumber: 33
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 230,
                      columnNumber: 31
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 222,
                    columnNumber: 29
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 211,
                  columnNumber: 27
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 210,
                columnNumber: 25
              }, undefined) : "", comments_count ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {
                hasArrow: true,
                label: "Comments",
                placement: "top",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
                  alignItems: "center",
                  d: ["flex", "none", "none"],
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                    fontSize: "sm",
                    noOfLines: 1,
                    fontWeight: "400",
                    align: "left",
                    color: textColor,
                    children: comments_count
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 257,
                    columnNumber: 29
                  }, undefined), "\xA0", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
                    id: "Capa_1",
                    enableBackground: "new 0 0 512 512",
                    height: "20px",
                    viewBox: "0 0 512 512",
                    width: "20px",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                      d: "m438.983 11.549h-276.72c-36.094 0-65.625 29.531-65.625 65.625v22.33h250.317c36.094 0 65.625 29.531 65.625 65.625v163.609h26.404c36.094 0 65.625-29.531 65.625-65.625v-185.939c0-36.094-29.532-65.625-65.626-65.625z",
                      fill: "#6c7ed6"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 275,
                      columnNumber: 31
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                      d: "m392.454 96.504h-276.72c-6.636 0-13.047 1.006-19.096 2.86v.14h250.317c36.094 0 65.625 29.531 65.625 65.625v163.609h26.404c6.636 0 13.047-1.006 19.096-2.86v-163.748c0-36.094-29.532-65.626-65.626-65.626z",
                      fill: "#4f67d2"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 279,
                      columnNumber: 31
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                      d: "m349.954 96.504h-276.72c-36.094 0-65.625 29.531-65.625 65.625v185.939c0 36.094 29.531 65.625 65.625 65.625h166.083c7.12 0 12.435 6.626 10.807 13.557-4.404 18.751-11.144 38.581-21.107 58.908-4.474 9.129 5.704 18.41 14.349 13.06 24.997-15.47 60.562-41.362 90.512-77.964 3.937-4.811 9.858-7.561 16.075-7.561 36.094 0 65.625-29.531 65.625-65.625v-185.938c.002-36.094-29.53-65.626-65.624-65.626z",
                      fill: "#60b8fe"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 283,
                      columnNumber: 31
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                      d: "m292.624 427.25c1.628-6.932-3.687-13.557-10.807-13.557h-42.5c7.12 0 12.435 6.625 10.807 13.557-4.404 18.751-11.144 38.581-21.107 58.908-4.474 9.129 5.704 18.41 14.349 13.06 9.591-5.936 20.74-13.411 32.527-22.431 7.603-17.049 13.007-33.679 16.731-49.537z",
                      fill: "#23a8fe"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 287,
                      columnNumber: 31
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                      d: "m50.109 348.068v-185.938c0-36.094 29.531-65.625 65.625-65.625h-42.5c-36.094 0-65.625 29.531-65.625 65.625v185.938c0 36.094 29.531 65.625 65.625 65.625h42.5c-36.094 0-65.625-29.531-65.625-65.625z",
                      fill: "#23a8fe"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 291,
                      columnNumber: 31
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("g", {
                      fill: "#dfebfa",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("circle", {
                        cx: "98.577",
                        cy: "260.439",
                        r: "21.777"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 296,
                        columnNumber: 33
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("circle", {
                        cx: "168.914",
                        cy: "260.439",
                        r: "21.777"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 297,
                        columnNumber: 33
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("circle", {
                        cx: "239.251",
                        cy: "260.439",
                        r: "21.777"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 298,
                        columnNumber: 33
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("circle", {
                        cx: "309.588",
                        cy: "260.439",
                        r: "21.777"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 299,
                        columnNumber: 33
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 295,
                      columnNumber: 31
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                      d: "m98.577 260.439c0-8.059 4.381-15.091 10.888-18.856-3.204-1.854-6.92-2.921-10.888-2.921-12.027 0-21.777 9.75-21.777 21.777s9.75 21.777 21.777 21.777c3.968 0 7.685-1.066 10.888-2.92-6.507-3.767-10.888-10.798-10.888-18.857z",
                      fill: "#b1dbfc"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 301,
                      columnNumber: 31
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                      d: "m168.914 260.439c0-8.059 4.381-15.091 10.888-18.856-3.204-1.854-6.92-2.921-10.888-2.921-12.027 0-21.777 9.75-21.777 21.777s9.75 21.777 21.777 21.777c3.968 0 7.685-1.066 10.888-2.92-6.507-3.767-10.888-10.798-10.888-18.857z",
                      fill: "#b1dbfc"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 305,
                      columnNumber: 31
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                      d: "m239.251 260.439c0-8.059 4.381-15.091 10.888-18.856-3.204-1.854-6.921-2.921-10.888-2.921-12.027 0-21.777 9.75-21.777 21.777s9.75 21.777 21.777 21.777c3.968 0 7.685-1.066 10.888-2.92-6.507-3.767-10.888-10.798-10.888-18.857z",
                      fill: "#b1dbfc"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 309,
                      columnNumber: 31
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                      d: "m309.588 260.439c0-8.059 4.381-15.091 10.888-18.856-3.204-1.854-6.921-2.921-10.888-2.921-12.027 0-21.777 9.75-21.777 21.777s9.75 21.777 21.777 21.777c3.968 0 7.685-1.066 10.888-2.92-6.507-3.767-10.888-10.798-10.888-18.857z",
                      fill: "#b1dbfc"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 313,
                      columnNumber: 31
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                      d: "m69.191 260.253c0 16.144 13.134 29.277 29.276 29.277 16.144 0 29.277-13.133 29.277-29.277 0-16.143-13.134-29.276-29.277-29.276-16.142 0-29.276 13.133-29.276 29.276zm43.554 0c0 7.872-6.405 14.277-14.277 14.277s-14.276-6.405-14.276-14.277 6.404-14.276 14.276-14.276 14.277 6.404 14.277 14.276z"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 317,
                      columnNumber: 31
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                      d: "m198.082 260.253c0-16.143-13.134-29.276-29.277-29.276s-29.276 13.133-29.276 29.276c0 16.144 13.134 29.277 29.276 29.277 16.143 0 29.277-13.133 29.277-29.277zm-43.554 0c0-7.872 6.404-14.276 14.276-14.276s14.277 6.404 14.277 14.276-6.405 14.277-14.277 14.277-14.276-6.405-14.276-14.277z"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 318,
                      columnNumber: 31
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                      d: "m268.419 260.253c0-16.143-13.134-29.276-29.277-29.276s-29.276 13.133-29.276 29.276c0 16.144 13.134 29.277 29.276 29.277 16.143 0 29.277-13.133 29.277-29.277zm-43.554 0c0-7.872 6.404-14.276 14.276-14.276s14.277 6.404 14.277 14.276-6.405 14.277-14.277 14.277-14.276-6.405-14.276-14.277z"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 319,
                      columnNumber: 31
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                      d: "m338.756 260.253c0-16.143-13.134-29.276-29.277-29.276s-29.276 13.133-29.276 29.276c0 16.144 13.134 29.277 29.276 29.277 16.143 0 29.277-13.133 29.277-29.277zm-43.554 0c0-7.872 6.404-14.276 14.276-14.276s14.277 6.404 14.277 14.276-6.405 14.277-14.277 14.277-14.276-6.405-14.276-14.277z"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 320,
                      columnNumber: 31
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                      d: "m438.874 3.863h-276.72c-40.321 0-73.126 32.804-73.126 73.125v11.83h-15.903c-40.321.001-73.125 32.805-73.125 73.126v185.938c0 40.322 32.804 73.125 73.125 73.125h78.18c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-78.18c-32.05 0-58.125-26.075-58.125-58.125v-185.938c0-32.05 26.075-58.125 58.125-58.125h276.721c32.05 0 58.125 26.075 58.125 58.125v185.938c0 32.05-26.075 58.125-58.125 58.125-8.543 0-16.518 3.758-21.881 10.312-29.417 35.95-64.447 61.355-88.653 76.336-2.257 1.393-4.855-.96-3.669-3.382 9.512-19.408 16.805-39.761 21.675-60.494 2.728-11.618-6.129-22.772-18.109-22.772h-52.903c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h52.903c2.301 0 4.027 2.128 3.506 4.342-4.612 19.638-11.523 38.924-20.541 57.323-7.776 15.872 10.025 32.025 25.032 22.738 25.178-15.583 61.642-42.04 92.368-79.591 2.503-3.058 6.247-4.812 10.272-4.812 40.321 0 73.125-32.804 73.125-73.125v-11.83h15.903c40.322 0 73.126-32.804 73.126-73.125v-75.469c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v75.469c0 32.05-26.075 58.125-58.126 58.125h-15.903v-159.108c0-40.321-32.804-73.125-73.125-73.125h-245.818v-11.83c0-32.05 26.075-58.125 58.126-58.125h276.72c32.051 0 58.126 26.075 58.126 58.125v75.469c0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-75.469c0-40.322-32.804-73.126-73.126-73.126z"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 321,
                      columnNumber: 31
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 267,
                    columnNumber: 29
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 256,
                  columnNumber: 27
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 255,
                columnNumber: 25
              }, undefined) : ""]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 203,
              columnNumber: 21
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
              align: "left",
              fontSize: "md",
              noOfLines: 1,
              color: textColor,
              children: description
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 329,
              columnNumber: 21
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 19
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 17
        }, undefined)
      }, i, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 15
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.HStack, {
      justifyContent: "center",
      width: "100%",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
        href: "/blog",
        passHref: true,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.HStack, {
          spacing: 2,
          as: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Link,
          color: linkColor,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
            fontSize: "sm",
            children: "More Articles"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 341,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
            height: "1.2rem",
            width: "1.2rem",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 20 20",
              fill: "currentColor",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                fillRule: "evenodd",
                d: "M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z",
                clipRule: "evenodd"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 350,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 345,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 344,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 340,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 339,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 338,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (PopularArticles);

/***/ }),

/***/ "./components/home-page/home.tsx":
/*!***************************************!*\
  !*** ./components/home-page/home.tsx ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_ui_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/ui/motion */ "./components/ui/motion.tsx");
/* harmony import */ var components_layout_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/layout/header */ "./components/layout/header.tsx");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_ui_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/ui/theme */ "./components/ui/theme/index.ts");
/* harmony import */ var _PopularArticles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PopularArticles */ "./components/home-page/PopularArticles.tsx");
/* harmony import */ var data_Status__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! data/Status */ "./data/Status.tsx");

var _jsxFileName = "C:\\Users\\mert\\Desktop\\myportfolio\\components\\home-page\\home.tsx";







const ANIMATION_DURATION = 0.5;
const ORANGE = "#ff9400";

const Home = props => {
  const {
    posts
  } = props;
  const linkColor = (0,components_ui_theme__WEBPACK_IMPORTED_MODULE_5__.useLinkColor)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
    direction: "column",
    align: "center",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
      direction: ["column", "column", "row"],
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_ui_motion__WEBPACK_IMPORTED_MODULE_2__.MotionBox, {
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
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Tooltip, {
          hasArrow: true,
          label: "me",
          placement: "bottom",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Avatar, {
            backgroundColor: 'transparent',
            size: "2xl" // src={UserIcon}
            ,
            src: "https://avatars.githubusercontent.com/u/77637289?v=4"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 11
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 12
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_ui_motion__WEBPACK_IMPORTED_MODULE_2__.MotionFlex, {
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
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_layout_header__WEBPACK_IMPORTED_MODULE_3__.default, {
          underlineColor: ORANGE,
          emoji: "\uD83D\uDC4B",
          mt: 0,
          children: "Hey!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 20
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
          as: "h2",
          fontSize: "2xl",
          fontWeight: "400",
          textAlign: "left",
          children: ["My name is", " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
            as: "strong",
            fontWeight: "600",
            children: "Mert Kadir"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 13
          }, undefined), " ", "and I'm a", " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
            as: "span",
            whiteSpace: "nowrap",
            children: "Mobile Application Developer."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 13
          }, undefined), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
            as: "span",
            whiteSpace: "nowrap",
            children: "A software lover\xA0"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 13
          }, undefined), "from", " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
            as: "span",
            whiteSpace: "nowrap",
            children: "Turkey \uD83C\uDDF9\uD83C\uDDF7"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
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
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(data_Status__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_ui_motion__WEBPACK_IMPORTED_MODULE_2__.MotionBox, {
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
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
        mt: 10,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
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
          backgroundColor: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("gray.100", "#1e2533"),
          rounded: "sm",
          fontSize: "md",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
            textAlign: "center",
            color: "#53c8c4",
            fontWeight: "bold",
            children: "Highlists"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.UnorderedList, {
            textAlign: "left",
            paddingLeft: 5,
            m: 0,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ListItem, {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                href: '/blog',
                passHref: true,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
                  color: linkColor,
                  children: ["Blog page", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Badge, {
                    ml: "1",
                    colorScheme: "green",
                    children: "New"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 148,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 146,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 145,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 144,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ListItem, {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                href: '/open-source',
                passHref: true,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
                  color: linkColor,
                  children: ["Open Source", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Badge, {
                    ml: "1",
                    colorScheme: "blue",
                    children: "New"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 158,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 156,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 155,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 154,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ListItem, {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                href: '/projects',
                passHref: true,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
                  color: linkColor,
                  children: ["Projects page", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Badge, {
                    ml: "1",
                    colorScheme: "red",
                    children: "being designed"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 168,
                    columnNumber: 19
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 166,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 165,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 164,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PopularArticles__WEBPACK_IMPORTED_MODULE_6__.default, {
          posts: posts
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 176,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

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

/***/ "./components/ui/theme/foundations/colors.ts":
/*!***************************************************!*\
  !*** ./components/ui/theme/foundations/colors.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "linkColors": function() { return /* binding */ linkColors; },
/* harmony export */   "useLinkColor": function() { return /* binding */ useLinkColor; },
/* harmony export */   "useVisitedLinkColor": function() { return /* binding */ useVisitedLinkColor; },
/* harmony export */   "getTagBackgroundDark": function() { return /* binding */ getTagBackgroundDark; },
/* harmony export */   "colors": function() { return /* binding */ colors; },
/* harmony export */   "accentKeys": function() { return /* binding */ accentKeys; }
/* harmony export */ });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/theme-tools */ "@chakra-ui/theme-tools");
/* harmony import */ var _chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const linkColors = {
  light: 'accent.500',
  dark: 'accent.400',
  visitedLight: 'accent.300',
  visitedDark: 'accent.600'
};
function useLinkColor() {
  return (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.useColorModeValue)(linkColors.light, linkColors.dark);
}
function useVisitedLinkColor() {
  return (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.useColorModeValue)(linkColors.visitedLight, linkColors.visitedDark);
}
function getTagBackgroundDark(accentKey, theme) {
  return accentKey && (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1__.transparentize)(theme.colors[accentKey][200], 0.1)(theme);
}
const colors = _objectSpread(_objectSpread({}, _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.theme.colors), {}, {
  gray: _objectSpread(_objectSpread({}, _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.theme.colors.gray), {}, {
    1000: '#121721'
  }),
  defaultAccent: {
    50: '#e3f2fc',
    100: '#ddf2ff',
    200: '#abd2fc',
    300: '#5daafc',
    400: '#1a85ff',
    500: '#006be6',
    600: '#0053b4',
    700: '#003b82',
    800: '#002451',
    900: '#000d21'
  },
  accent: {
    // See src/components/Accent.tsx for CSS variable definition
    50: 'var(--colors-accent-50)',
    100: 'var(--colors-accent-100)',
    200: 'var(--colors-accent-200)',
    300: 'var(--colors-accent-300)',
    400: 'var(--colors-accent-400)',
    500: 'var(--colors-accent-500)',
    600: 'var(--colors-accent-600)',
    700: 'var(--colors-accent-700)',
    800: 'var(--colors-accent-800)',
    900: 'var(--colors-accent-900)'
  }
});
const accentKeys = ['defaultAccent', 'green', 'cyan', 'orange', 'blue', 'pink', 'teal', 'purple', 'red'];

/***/ }),

/***/ "./components/ui/theme/index.ts":
/*!**************************************!*\
  !*** ./components/ui/theme/index.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useLinkColor": function() { return /* reexport safe */ _foundations_colors__WEBPACK_IMPORTED_MODULE_1__.useLinkColor; },
/* harmony export */   "accentKeys": function() { return /* reexport safe */ _foundations_colors__WEBPACK_IMPORTED_MODULE_1__.accentKeys; },
/* harmony export */   "makeTheme": function() { return /* binding */ makeTheme; },
/* harmony export */   "extendedTheme": function() { return /* binding */ extendedTheme; },
/* harmony export */   "getTagColor": function() { return /* binding */ getTagColor; },
/* harmony export */   "theme": function() { return /* binding */ theme; }
/* harmony export */ });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _foundations_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundations/colors */ "./components/ui/theme/foundations/colors.ts");
/* harmony import */ var _chakra_ui_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/utils */ "@chakra-ui/utils");
/* harmony import */ var _chakra_ui_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_utils__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/theme-tools */ "@chakra-ui/theme-tools");
/* harmony import */ var _chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_3__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




 // Re-exports


function makeTheme(overrides = {}) {
  const theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.extendTheme)(_objectSpread(_objectSpread({}, extendedTheme), {}, {
    colors: _foundations_colors__WEBPACK_IMPORTED_MODULE_1__.colors
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

/***/ "./data/Status.tsx":
/*!*************************!*\
  !*** ./data/Status.tsx ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_use_lanyard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-use-lanyard */ "react-use-lanyard");
/* harmony import */ var react_use_lanyard__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_use_lanyard__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/user */ "./data/user.ts");

var _jsxFileName = "C:\\Users\\mert\\Desktop\\myportfolio\\data\\Status.tsx";



/* Import types */

/* Import data */


const Status = () => {
  var _getActivity, _getActivity2, _getActivity3, _getActivity4, _getActivity5, _getActivity6, _getActivity7, _getActivity8, _getActivity9;

  const {
    loading,
    status
  } = (0,react_use_lanyard__WEBPACK_IMPORTED_MODULE_2__.useLanyard)({
    userId: _data_user__WEBPACK_IMPORTED_MODULE_4__.default,
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

  if (loading === false && (status === null || status === void 0 ? void 0 : status.discord_status) === "online" && (status === null || status === void 0 ? void 0 : status.listening_to_spotify) === false) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
    display: "flex",
    flexWrap: "nowrap",
    float: "left",
    padding: "5",
    marginTop: "5",
    _hover: {
      shadow: "lg"
    },
    backgroundColor: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("gray.100", "#1e2533"),
    rounded: "md",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
      backgroundColor: "green.500",
      rounded: "full",
      width: "4",
      height: 4,
      margin: "auto",
      alignItems: "center"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 2
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
      textColor: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("black", "white"),
      fontSize: "md",
      textAlign: "center",
      margin: "1",
      children: " Online"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 2
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 75,
    columnNumber: 2
  }, undefined);else if (loading === false && (status === null || status === void 0 ? void 0 : status.discord_status) === "online" && (status === null || status === void 0 ? void 0 : status.listening_to_spotify) === true) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
    display: "flex",
    flexWrap: "nowrap",
    float: "left",
    padding: "5",
    marginTop: "5",
    _hover: {
      shadow: "lg"
    },
    backgroundColor: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("gray.100", "#1e2533"),
    rounded: "md",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Tooltip, {
      hasArrow: true,
      label: "Online",
      placement: "top",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
        backgroundColor: "green.500",
        rounded: "full",
        width: "4",
        height: 4,
        margin: "auto",
        marginRight: "5",
        alignItems: "center"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 53
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 4
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
      fontSize: "sm",
      margin: "auto",
      textAlign: "center",
      marginRight: "5",
      textColor: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("gray.400", "gray.600"),
      children: "Listening to"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 3
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
      marginRight: "5",
      objectFit: "cover",
      borderRadius: "50%",
      children: getImage().largeImage && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
        src: getImage().largeImage || "",
        width: "80px",
        height: "80px",
        alt: "icon",
        draggable: "true",
        objectFit: "cover",
        className: "rounded-lg"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 20
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 3
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
      fontSize: "sm",
      margin: "auto",
      textAlign: "center",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: [" ", (_getActivity = getActivity()) === null || _getActivity === void 0 ? void 0 : _getActivity.name]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 15
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: [" ", (_getActivity2 = getActivity()) === null || _getActivity2 === void 0 ? void 0 : _getActivity2.details]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 15
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: [" ", (_getActivity3 = getActivity()) === null || _getActivity3 === void 0 ? void 0 : _getActivity3.state, " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 15
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 15
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 84,
    columnNumber: 1
  }, undefined);else if (loading === false && (status === null || status === void 0 ? void 0 : status.discord_status) === "idle" && (status === null || status === void 0 ? void 0 : status.listening_to_spotify) === false) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
    display: "flex",
    flexWrap: "nowrap",
    float: "left",
    padding: "5",
    marginTop: "5",
    _hover: {
      shadow: "lg"
    },
    backgroundColor: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("gray.100", "#1e2533"),
    rounded: "md",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
      backgroundColor: "yellow.400",
      rounded: "full",
      width: "4",
      height: 4,
      margin: "auto",
      alignItems: "center"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 2
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
      textColor: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("black", "white"),
      fontSize: "md",
      textAlign: "center",
      margin: "1",
      children: " Idled"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 2
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 112,
    columnNumber: 2
  }, undefined);else if (loading === false && (status === null || status === void 0 ? void 0 : status.discord_status) === "idle" && (status === null || status === void 0 ? void 0 : status.listening_to_spotify) === true) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
    display: "flex",
    flexWrap: "nowrap",
    float: "left",
    padding: "5",
    marginTop: "5",
    _hover: {
      shadow: "lg"
    },
    backgroundColor: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("gray.100", "#1e2533"),
    rounded: "md",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Tooltip, {
      hasArrow: true,
      label: "Idled",
      placement: "top",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
        backgroundColor: "yellow.400",
        rounded: "full",
        width: "4",
        height: 4,
        margin: "auto",
        marginRight: "5",
        alignItems: "center"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 53
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 5
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
      fontSize: "sm",
      margin: "auto",
      textAlign: "center",
      marginRight: "5",
      textColor: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("gray.400", "gray.600"),
      children: "Listening to"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 3
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
      marginRight: "5",
      objectFit: "cover",
      borderRadius: "50%",
      children: getImage().largeImage && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
        src: getImage().largeImage || "",
        width: "80px",
        height: "80px",
        alt: "icon",
        draggable: "true",
        objectFit: "cover",
        className: "rounded-lg"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 20
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 3
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
      fontSize: "sm",
      margin: "auto",
      textAlign: "center",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: [" ", (_getActivity4 = getActivity()) === null || _getActivity4 === void 0 ? void 0 : _getActivity4.name]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 15
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: [" ", (_getActivity5 = getActivity()) === null || _getActivity5 === void 0 ? void 0 : _getActivity5.details]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 15
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: [" ", (_getActivity6 = getActivity()) === null || _getActivity6 === void 0 ? void 0 : _getActivity6.state, " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 15
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 15
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 121,
    columnNumber: 1
  }, undefined);else if (loading === false && (status === null || status === void 0 ? void 0 : status.discord_status) === "dnd" && (status === null || status === void 0 ? void 0 : status.listening_to_spotify) === false) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
    display: "flex",
    flexWrap: "nowrap",
    float: "left",
    padding: "5",
    _hover: {
      shadow: "lg"
    },
    marginTop: "5",
    backgroundColor: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("gray.100", "#1e2533"),
    rounded: "md",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
      backgroundColor: "red.500",
      rounded: "full",
      width: "4",
      height: 4,
      margin: "auto",
      alignItems: "center"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 3
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
      textColor: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("black", "white"),
      fontSize: "md",
      textAlign: "center",
      margin: "1",
      children: " Disturbing"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 3
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 152,
    columnNumber: 3
  }, undefined);else if (loading === false && (status === null || status === void 0 ? void 0 : status.discord_status) === "dnd" && (status === null || status === void 0 ? void 0 : status.listening_to_spotify) === true) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
    display: "flex",
    flexWrap: "nowrap",
    float: "left",
    padding: "5",
    marginTop: "5",
    _hover: {
      shadow: "lg"
    },
    backgroundColor: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("gray.100", "#1e2533"),
    rounded: "md",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Tooltip, {
      hasArrow: true,
      label: "Disturbing",
      placement: "top",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
        backgroundColor: "red.500",
        rounded: "full",
        width: "4",
        height: 4,
        margin: "auto",
        marginRight: "5",
        alignItems: "center"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 56
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 3
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
      fontSize: "sm",
      margin: "auto",
      textAlign: "center",
      marginRight: "5",
      textColor: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("gray.400", "gray.600"),
      children: "Listening to"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 1
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
      marginRight: "5",
      objectFit: "cover",
      borderRadius: "50%",
      children: getImage().largeImage && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
        src: getImage().largeImage || "",
        width: "80px",
        height: "80px",
        alt: "icon",
        draggable: "true",
        objectFit: "cover",
        className: "rounded-lg"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 1
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
      fontSize: "sm",
      margin: "auto",
      textAlign: "center",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: [" ", (_getActivity7 = getActivity()) === null || _getActivity7 === void 0 ? void 0 : _getActivity7.name]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 12
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: [" ", (_getActivity8 = getActivity()) === null || _getActivity8 === void 0 ? void 0 : _getActivity8.details]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 12
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: [" ", (_getActivity9 = getActivity()) === null || _getActivity9 === void 0 ? void 0 : _getActivity9.state, " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 12
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 12
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 161,
    columnNumber: 3
  }, undefined);else return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
    display: "flex",
    flexWrap: "nowrap",
    float: "left",
    padding: "5",
    marginTop: "5",
    _hover: {
      shadow: "lg"
    },
    backgroundColor: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("gray.100", "#1e2533"),
    rounded: "md",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Tooltip, {
      hasArrow: true,
      label: "Offline",
      placement: "top",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
        backgroundColor: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("gray.400", "gray.600"),
        rounded: "full",
        width: "4",
        height: 4,
        margin: "auto",
        alignItems: "center"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 54
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 4
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
      textColor: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("black", "white"),
      fontSize: "md",
      textAlign: "center",
      margin: "1",
      children: " Offline"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 3
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 189,
    columnNumber: 3
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Status);

/***/ }),

/***/ "./data/user.ts":
/*!**********************!*\
  !*** ./data/user.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const userId = "440239378158059532";
/* harmony default export */ __webpack_exports__["default"] = (userId);

/***/ }),

/***/ "./node_modules/next/dist/client/image.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/client/image.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = Image;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/next/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/next/node_modules/@babel/runtime/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _head = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/head */ "../next-server/lib/head"));

var _toBase = __webpack_require__(/*! ../next-server/lib/to-base-64 */ "../next-server/lib/to-base-64");

var _imageConfig = __webpack_require__(/*! ../next-server/server/image-config */ "../next-server/server/image-config");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

if (true) {
  ;
  global.__NEXT_IMAGE_IMPORTED = true;
}

const VALID_LOADING_VALUES = ['lazy', 'eager', undefined];
const loaders = new Map([['imgix', imgixLoader], ['cloudinary', cloudinaryLoader], ['akamai', akamaiLoader], ['default', defaultLoader]]);
const VALID_LAYOUT_VALUES = ['fill', 'fixed', 'intrinsic', 'responsive', undefined];

function isStaticRequire(src) {
  return src.default !== undefined;
}

function isStaticImageData(src) {
  return src.src !== undefined;
}

function isStaticImport(src) {
  return typeof src === 'object' && (isStaticRequire(src) || isStaticImageData(src));
}

const {
  deviceSizes: configDeviceSizes,
  imageSizes: configImageSizes,
  loader: configLoader,
  path: configPath,
  domains: configDomains
} = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","domains":["cdn.discordapp.com","i.scdn.co"]} || _imageConfig.imageConfigDefault; // sort smallest to largest

const allSizes = [...configDeviceSizes, ...configImageSizes];
configDeviceSizes.sort((a, b) => a - b);
allSizes.sort((a, b) => a - b);

function getWidths(width, layout, sizes) {
  if (sizes && (layout === 'fill' || layout === 'responsive')) {
    // Find all the "vw" percent sizes used in the sizes prop
    const viewportWidthRe = /(^|\s)(1?\d?\d)vw/g;
    const percentSizes = [];

    for (let match; match = viewportWidthRe.exec(sizes); match) {
      percentSizes.push(parseInt(match[2]));
    }

    if (percentSizes.length) {
      const smallestRatio = Math.min(...percentSizes) * 0.01;
      return {
        widths: allSizes.filter(s => s >= configDeviceSizes[0] * smallestRatio),
        kind: 'w'
      };
    }

    return {
      widths: allSizes,
      kind: 'w'
    };
  }

  if (typeof width !== 'number' || layout === 'fill' || layout === 'responsive') {
    return {
      widths: configDeviceSizes,
      kind: 'w'
    };
  }

  const widths = [...new Set( // > This means that most OLED screens that say they are 3x resolution,
  // > are actually 3x in the green color, but only 1.5x in the red and
  // > blue colors. Showing a 3x resolution image in the app vs a 2x
  // > resolution image will be visually the same, though the 3x image
  // > takes significantly more data. Even true 3x resolution screens are
  // > wasteful as the human eye cannot see that level of detail without
  // > something like a magnifying glass.
  // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
  [width, width * 2
  /*, width * 3*/
  ].map(w => allSizes.find(p => p >= w) || allSizes[allSizes.length - 1]))];
  return {
    widths,
    kind: 'x'
  };
}

function generateImgAttrs({
  src,
  unoptimized,
  layout,
  width,
  quality,
  sizes,
  loader
}) {
  if (unoptimized) {
    return {
      src,
      srcSet: undefined,
      sizes: undefined
    };
  }

  const {
    widths,
    kind
  } = getWidths(width, layout, sizes);
  const last = widths.length - 1;
  return {
    sizes: !sizes && kind === 'w' ? '100vw' : sizes,
    srcSet: widths.map((w, i) => `${loader({
      src,
      quality,
      width: w
    })} ${kind === 'w' ? w : i + 1}${kind}`).join(', '),
    // It's intended to keep `src` the last attribute because React updates
    // attributes in order. If we keep `src` the first one, Safari will
    // immediately start to fetch `src`, before `sizes` and `srcSet` are even
    // updated by React. That causes multiple unnecessary requests if `srcSet`
    // and `sizes` are defined.
    // This bug cannot be reproduced in Chrome or Firefox.
    src: loader({
      src,
      quality,
      width: widths[last]
    })
  };
}

function getInt(x) {
  if (typeof x === 'number') {
    return x;
  }

  if (typeof x === 'string') {
    return parseInt(x, 10);
  }

  return undefined;
}

function defaultImageLoader(loaderProps) {
  const load = loaders.get(configLoader);

  if (load) {
    return load((0, _extends2.default)({
      root: configPath
    }, loaderProps));
  }

  throw new Error(`Unknown "loader" found in "next.config.js". Expected: ${_imageConfig.VALID_LOADERS.join(', ')}. Received: ${configLoader}`);
} // See https://stackoverflow.com/q/39777833/266535 for why we use this ref
// handler instead of the img's onLoad attribute.


function removePlaceholder(img, placeholder) {
  if (placeholder === 'blur' && img) {
    const handleLoad = () => {
      if (!img.src.startsWith('data:')) {
        const p = 'decode' in img ? img.decode() : Promise.resolve();
        p.catch(() => {}).then(() => {
          img.style.filter = 'none';
          img.style.backgroundSize = 'none';
          img.style.backgroundImage = 'none';
        });
      }
    };

    if (img.complete) {
      // If the real image fails to load, this will still remove the placeholder.
      // This is the desired behavior for now, and will be revisited when error
      // handling is worked on for the image component itself.
      handleLoad();
    } else {
      img.onload = handleLoad;
    }
  }
}

function Image(_ref) {
  let {
    src,
    sizes,
    unoptimized = false,
    priority = false,
    loading,
    className,
    quality,
    width,
    height,
    objectFit,
    objectPosition,
    loader = defaultImageLoader,
    placeholder = 'empty',
    blurDataURL
  } = _ref,
      all = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["src", "sizes", "unoptimized", "priority", "loading", "className", "quality", "width", "height", "objectFit", "objectPosition", "loader", "placeholder", "blurDataURL"]);
  let rest = all;
  let layout = sizes ? 'responsive' : 'intrinsic';

  if ('layout' in rest) {
    // Override default layout if the user specified one:
    if (rest.layout) layout = rest.layout; // Remove property so it's not spread into image:

    delete rest['layout'];
  }

  let staticSrc = '';

  if (isStaticImport(src)) {
    const staticImageData = isStaticRequire(src) ? src.default : src;

    if (!staticImageData.src) {
      throw new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(staticImageData)}`);
    }

    blurDataURL = blurDataURL || staticImageData.blurDataURL;
    staticSrc = staticImageData.src;

    if (!layout || layout !== 'fill') {
      height = height || staticImageData.height;
      width = width || staticImageData.width;

      if (!staticImageData.height || !staticImageData.width) {
        throw new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(staticImageData)}`);
      }
    }
  }

  src = typeof src === 'string' ? src : staticSrc;
  const widthInt = getInt(width);
  const heightInt = getInt(height);
  const qualityInt = getInt(quality);

  if (true) {
    if (!src) {
      throw new Error(`Image is missing required "src" property. Make sure you pass "src" in props to the \`next/image\` component. Received: ${JSON.stringify({
        width,
        height,
        quality
      })}`);
    }

    if (!VALID_LAYOUT_VALUES.includes(layout)) {
      throw new Error(`Image with src "${src}" has invalid "layout" property. Provided "${layout}" should be one of ${VALID_LAYOUT_VALUES.map(String).join(',')}.`);
    }

    if (!VALID_LOADING_VALUES.includes(loading)) {
      throw new Error(`Image with src "${src}" has invalid "loading" property. Provided "${loading}" should be one of ${VALID_LOADING_VALUES.map(String).join(',')}.`);
    }

    if (priority && loading === 'lazy') {
      throw new Error(`Image with src "${src}" has both "priority" and "loading='lazy'" properties. Only one should be used.`);
    }

    if (placeholder === 'blur') {
      if ((widthInt || 0) * (heightInt || 0) < 1600) {
        console.warn(`Image with src "${src}" is smaller than 40x40. Consider removing the "placeholder='blur'" property to improve performance.`);
      }

      if (!blurDataURL) {
        const VALID_BLUR_EXT = ['jpeg', 'png', 'webp']; // should match next-image-loader

        throw new Error(`Image with src "${src}" has "placeholder='blur'" property but is missing the "blurDataURL" property.
          Possible solutions:
            - Add a "blurDataURL" property, the contents should be a small Data URL to represent the image
            - Change the "src" property to a static import with one of the supported file types: ${VALID_BLUR_EXT.join(',')}
            - Remove the "placeholder" property, effectively no blur effect
          Read more: https://nextjs.org/docs/messages/placeholder-blur-data-url`);
      }
    }
  }

  let isLazy = !priority && (loading === 'lazy' || typeof loading === 'undefined');

  if (src && src.startsWith('data:')) {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
    unoptimized = true;
    isLazy = false;
  }

  const [setRef, isIntersected] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px',
    disabled: !isLazy
  });
  const isVisible = !isLazy || isIntersected;
  let wrapperStyle;
  let sizerStyle;
  let sizerSvg;
  let imgStyle = (0, _extends2.default)({
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    boxSizing: 'border-box',
    padding: 0,
    border: 'none',
    margin: 'auto',
    display: 'block',
    width: 0,
    height: 0,
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    objectFit,
    objectPosition
  }, placeholder === 'blur' ? {
    filter: 'blur(20px)',
    backgroundSize: 'cover',
    backgroundImage: `url("${blurDataURL}")`
  } : undefined);

  if (typeof widthInt !== 'undefined' && typeof heightInt !== 'undefined' && layout !== 'fill') {
    // <Image src="i.png" width="100" height="100" />
    const quotient = heightInt / widthInt;
    const paddingTop = isNaN(quotient) ? '100%' : `${quotient * 100}%`;

    if (layout === 'responsive') {
      // <Image src="i.png" width="100" height="100" layout="responsive" />
      wrapperStyle = {
        display: 'block',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        display: 'block',
        boxSizing: 'border-box',
        paddingTop
      };
    } else if (layout === 'intrinsic') {
      // <Image src="i.png" width="100" height="100" layout="intrinsic" />
      wrapperStyle = {
        display: 'inline-block',
        maxWidth: '100%',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        boxSizing: 'border-box',
        display: 'block',
        maxWidth: '100%'
      };
      sizerSvg = `<svg width="${widthInt}" height="${heightInt}" xmlns="http://www.w3.org/2000/svg" version="1.1"/>`;
    } else if (layout === 'fixed') {
      // <Image src="i.png" width="100" height="100" layout="fixed" />
      wrapperStyle = {
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'inline-block',
        position: 'relative',
        width: widthInt,
        height: heightInt
      };
    }
  } else if (typeof widthInt === 'undefined' && typeof heightInt === 'undefined' && layout === 'fill') {
    // <Image src="i.png" layout="fill" />
    wrapperStyle = {
      display: 'block',
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      boxSizing: 'border-box',
      margin: 0
    };
  } else {
    // <Image src="i.png" />
    if (true) {
      throw new Error(`Image with src "${src}" must use "width" and "height" properties or "layout='fill'" property.`);
    }
  }

  let imgAttributes = {
    src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    srcSet: undefined,
    sizes: undefined
  };

  if (isVisible) {
    imgAttributes = generateImgAttrs({
      src,
      unoptimized,
      layout,
      width: widthInt,
      quality: qualityInt,
      sizes,
      loader
    });
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    style: wrapperStyle
  }, sizerStyle ? /*#__PURE__*/_react.default.createElement("div", {
    style: sizerStyle
  }, sizerSvg ? /*#__PURE__*/_react.default.createElement("img", {
    style: {
      maxWidth: '100%',
      display: 'block',
      margin: 0,
      border: 'none',
      padding: 0
    },
    alt: "",
    "aria-hidden": true,
    role: "presentation",
    src: `data:image/svg+xml;base64,${(0, _toBase.toBase64)(sizerSvg)}`
  }) : null) : null, !isVisible && /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, generateImgAttrs({
    src,
    unoptimized,
    layout,
    width: widthInt,
    quality: qualityInt,
    sizes,
    loader
  }), {
    src: src,
    decoding: "async",
    sizes: sizes,
    style: imgStyle,
    className: className
  }))), /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, imgAttributes, {
    decoding: "async",
    className: className,
    ref: element => {
      setRef(element);
      removePlaceholder(element, placeholder);
    },
    style: imgStyle
  })), priority ?
  /*#__PURE__*/
  // Note how we omit the `href` attribute, as it would only be relevant
  // for browsers that do not support `imagesrcset`, and in those cases
  // it would likely cause the incorrect image to be preloaded.
  //
  // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
  _react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement("link", {
    key: '__nimg-' + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
    rel: "preload",
    as: "image",
    href: imgAttributes.srcSet ? undefined : imgAttributes.src // @ts-ignore: imagesrcset is not yet in the link element type
    ,
    imagesrcset: imgAttributes.srcSet // @ts-ignore: imagesizes is not yet in the link element type
    ,
    imagesizes: imgAttributes.sizes
  })) : null);
} //BUILT IN LOADERS


function normalizeSrc(src) {
  return src[0] === '/' ? src.slice(1) : src;
}

function imgixLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://static.imgix.net/daisy.png?format=auto&fit=max&w=300
  const params = ['auto=format', 'fit=max', 'w=' + width];
  let paramsString = '';

  if (quality) {
    params.push('q=' + quality);
  }

  if (params.length) {
    paramsString = '?' + params.join('&');
  }

  return `${root}${normalizeSrc(src)}${paramsString}`;
}

function akamaiLoader({
  root,
  src,
  width
}) {
  return `${root}${normalizeSrc(src)}?imwidth=${width}`;
}

function cloudinaryLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit,q_auto/turtles.jpg
  const params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')];
  let paramsString = params.join(',') + '/';
  return `${root}${paramsString}${normalizeSrc(src)}`;
}

function defaultLoader({
  root,
  src,
  width,
  quality
}) {
  if (true) {
    const missingValues = []; // these should always be provided but make sure they are

    if (!src) missingValues.push('src');
    if (!width) missingValues.push('width');

    if (missingValues.length > 0) {
      throw new Error(`Next Image Optimization requires ${missingValues.join(', ')} to be provided. Make sure you pass them as props to the \`next/image\` component. Received: ${JSON.stringify({
        src,
        width,
        quality
      })}`);
    }

    if (src.startsWith('//')) {
      throw new Error(`Failed to parse src "${src}" on \`next/image\`, protocol-relative URL (//) must be changed to an absolute URL (http:// or https://)`);
    }

    if (!src.startsWith('/') && configDomains) {
      let parsedSrc;

      try {
        parsedSrc = new URL(src);
      } catch (err) {
        console.error(err);
        throw new Error(`Failed to parse src "${src}" on \`next/image\`, if using relative image it must start with a leading slash "/" or be an absolute URL (http:// or https://)`);
      }

      if (!configDomains.includes(parsedSrc.hostname)) {
        throw new Error(`Invalid src prop (${src}) on \`next/image\`, hostname "${parsedSrc.hostname}" is not configured under images in your \`next.config.js\`\n` + `See more info: https://nextjs.org/docs/messages/next-image-unconfigured-host`);
      }
    }
  }

  return `${root}?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
}

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null && as.indexOf('#') >= 0) {
    scroll = false;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + ( false ? 0 : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://nextjs.org/docs/messages/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(router, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(router, props.as) : resolvedAs || resolvedHref
    };
  }, [router, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  let child;

  if (true) {
    try {
      child = _react.Children.only(children);
    } catch (err) {
      throw new Error(`Multiple children were passed to <Link> with \`href\` of \`${props.href}\` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children` + ( false ? 0 : ''));
    }
  } else {}

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? 0 : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/router/utils/get-asset-path-from-route */ "../next-server/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js"); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // Resolve a promise that times out after given amount of milliseconds.


function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject);
    (0, _requestIdleCallback.requestIdleCallback)(() => setTimeout(() => {
      if (!cancelled) {
        reject(err);
      }
    }, ms));
  });
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute.default)(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route, prefetch) {
      return withFuture(route, routes, () => {
        return resolvePromiseWithTimeout(getFilesForRoute(assetPrefix, route).then(({
          scripts,
          css
        }) => {
          return Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
        }).then(res => {
          return this.whenEntrypoint(route).then(entrypoint => ({
            entrypoint,
            styles: res[1]
          }));
        }), MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`))).then(({
          entrypoint,
          styles
        }) => {
          const res = Object.assign({
            styles: styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        }).catch(err => {
          if (prefetch) {
            // we don't want to cache errors during prefetch
            throw err;
          }

          return {
            error: err
          };
        });
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.requestIdleCallback)(() => this.loadRoute(route, true).catch(() => {}));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" on the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** be used inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "?ca47"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // tslint:disable:no-console


let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {}

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#') || url.startsWith('?')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(router, href, resolveAs) {
  // we use a dummy base url for relative urls
  let base;
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    base = new URL(urlAsString.startsWith('#') ? router.asPath : router.pathname, 'http://n');
  } catch (_) {
    // fallback to / for invalid asPath values e.g. //
    base = new URL('/', 'http://n');
  } // Return because it cannot be routed by the Next.js router


  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
}

const manualScrollRestoration =  false && 0;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  // In-flight Server Data Requests, for deduping
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sdr = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this.isPreview = void 0;
    this.isLocaleDomain = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search && !false);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    const shouldResolveHref = url === as || options._h || options._shouldResolveHref; // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated

    if (options._h) {
      this.isReady = true;
    }

    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    } // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url


    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    } // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly


    let resolvedAs = as; // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname;

    if (shouldResolveHref && pathname !== '/_error') {
      ;
      options._shouldResolveHref = true;

      if (false) {} else {
        parsed.pathname = resolveDynamicRoute(pathname, pages);

        if (parsed.pathname !== pathname) {
          pathname = parsed.pathname;
          parsed.pathname = addBasePath(pathname);
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);

    if (!isLocalURL(as)) {
      if (true) {
        throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as` + `\nSee more info: https://nextjs.org/docs/messages/invalid-relative-url-external-as`);
      }

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var _self$__NEXT_DATA__$p, _self$__NEXT_DATA__$p2, _options$scroll;

      let routeInfo = await this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);

            if (pages.includes(parsedHref.pathname)) {
              const {
                url: newUrl,
                as: newAs
              } = prepareUrlAs(this, destination, destination);
              return this.change(method, newUrl, newAs, options);
            }
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      if (options._h && pathname === '/_error' && ((_self$__NEXT_DATA__$p = self.__NEXT_DATA__.props) == null ? void 0 : (_self$__NEXT_DATA__$p2 = _self$__NEXT_DATA__$p.pageProps) == null ? void 0 : _self$__NEXT_DATA__$p2.statusCode) === 500 && props != null && props.pageProps) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      } // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;
      const shouldScroll = (_options$scroll = options.scroll) != null ? _options$scroll : !isValidShallowRoute;
      const resetScroll = shouldScroll ? {
        x: 0,
        y: 0
      } : null;
      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll != null ? forcedScroll : resetScroll).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as,
        locale: this.locale,
        locales: this.locales,
        defaultLocale: this.defaultLocale
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    let resolvedAs = asPath;

    if (false) {} else {
      parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

      if (parsed.pathname !== pathname) {
        pathname = parsed.pathname;
        parsed.pathname = pathname;
        url = (0, _utils.formatWithValidation)(parsed);
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (true) {
      return;
    }

    await Promise.all([this.pageLoader._isSsg(route).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err => {
      delete this.sdr[resourceKey];
      throw err;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL( true ? 'http://n' : 0);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) != null && _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_home_page_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/home-page/home */ "./components/home-page/home.tsx");
/* harmony import */ var components_layout_pageLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/layout/pageLayout */ "./components/layout/pageLayout.tsx");

var _jsxFileName = "C:\\Users\\mert\\Desktop\\myportfolio\\pages\\index.tsx";



const Index = props => {
  const {
    posts
  } = props;
  console.log(posts);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_layout_pageLayout__WEBPACK_IMPORTED_MODULE_2__.default, {
    title: "Mert Kadir - Mobil Application Developer",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_home_page_home__WEBPACK_IMPORTED_MODULE_1__.default, {
      posts: posts
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, undefined);
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
/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/image.js":
/*!************************************!*\
  !*** ./node_modules/next/image.js ***!
  \************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/image */ "./node_modules/next/dist/client/image.js")


/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/extends.js":
/*!**************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/extends.js ***!
  \**************************************************************************/
/***/ (function(module) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/***/ (function(module) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \***********************************************************************************************/
/***/ (function(module) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/***/ (function(module) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
/** @license React v17.0.2
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
var REACT_FRAGMENT_TYPE = 0xeacb;
var REACT_STRICT_MODE_TYPE = 0xeacc;
var REACT_PROFILER_TYPE = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
var REACT_SUSPENSE_TYPE = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_SCOPE_TYPE = 0xead7;
var REACT_OPAQUE_ID_TYPE = 0xeae0;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_OFFSCREEN_TYPE = 0xeae2;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  REACT_FRAGMENT_TYPE = symbolFor('react.fragment');
  REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
  REACT_PROFILER_TYPE = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
          case REACT_SUSPENSE_LIST_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false;
var hasWarnedAboutDeprecatedIsConcurrentMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
    }
  }

  return false;
}
function isConcurrentMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsConcurrentMode) {
      hasWarnedAboutDeprecatedIsConcurrentMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isConcurrentMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
    }
  }

  return false;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/index.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@chakra-ui/react");;

/***/ }),

/***/ "@chakra-ui/theme-tools":
/*!*****************************************!*\
  !*** external "@chakra-ui/theme-tools" ***!
  \*****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@chakra-ui/theme-tools");;

/***/ }),

/***/ "@chakra-ui/utils":
/*!***********************************!*\
  !*** external "@chakra-ui/utils" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@chakra-ui/utils");;

/***/ }),

/***/ "framer-motion":
/*!********************************!*\
  !*** external "framer-motion" ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = require("framer-motion");;

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = require("moment");;

/***/ }),

/***/ "../next-server/lib/head":
/*!****************************************************!*\
  !*** external "next/dist/next-server/lib/head.js" ***!
  \****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "../next-server/lib/to-base-64":
/*!**********************************************************!*\
  !*** external "next/dist/next-server/lib/to-base-64.js" ***!
  \**********************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/to-base-64.js");;

/***/ }),

/***/ "../next-server/server/image-config":
/*!***************************************************************!*\
  !*** external "next/dist/next-server/server/image-config.js" ***!
  \***************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

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

/***/ "react-use-lanyard":
/*!************************************!*\
  !*** external "react-use-lanyard" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-use-lanyard");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9jb21wb25lbnRzL2hvbWUtcGFnZS9Qb3B1bGFyQXJ0aWNsZXMudHN4Iiwid2VicGFjazovL3BvcnRmb2xpby8uL2NvbXBvbmVudHMvaG9tZS1wYWdlL2hvbWUudHN4Iiwid2VicGFjazovL3BvcnRmb2xpby8uL2NvbXBvbmVudHMvbGF5b3V0L2hlYWRlci50c3giLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vY29tcG9uZW50cy9sYXlvdXQvbWV0YS50c3giLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vY29tcG9uZW50cy9sYXlvdXQvcGFnZUxheW91dC50c3giLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vY29tcG9uZW50cy91aS9tb3Rpb24udHN4Iiwid2VicGFjazovL3BvcnRmb2xpby8uL2NvbXBvbmVudHMvdWkvcGFnZS10cmFuc2l0aW9ucy50c3giLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vY29tcG9uZW50cy91aS90aGVtZS9mb3VuZGF0aW9ucy9jb2xvcnMudHMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vY29tcG9uZW50cy91aS90aGVtZS9pbmRleC50cyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9jb21wb25lbnRzL3VpL3VuZGVybGluZWQtdGV4dC50c3giLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vZGF0YS9TdGF0dXMudHN4Iiwid2VicGFjazovL3BvcnRmb2xpby8uL2RhdGEvdXNlci50cyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9pbWFnZS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9saW5rLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcm91dGUtbG9hZGVyLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JvdXRlci5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3dpdGgtcm91dGVyLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL21pdHQuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXguanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vcGFnZXMvaW5kZXgudHN4Iiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvbmV4dC9pbWFnZS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHMuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvcmVhY3QtaXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL2V4dGVybmFsIFwiQGNoYWtyYS11aS9yZWFjdFwiIiwid2VicGFjazovL3BvcnRmb2xpby9leHRlcm5hbCBcIkBjaGFrcmEtdWkvdGhlbWUtdG9vbHNcIiIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vZXh0ZXJuYWwgXCJAY2hha3JhLXVpL3V0aWxzXCIiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL2V4dGVybmFsIFwiZnJhbWVyLW1vdGlvblwiIiwid2VicGFjazovL3BvcnRmb2xpby9leHRlcm5hbCBcIm1vbWVudFwiIiwid2VicGFjazovL3BvcnRmb2xpby9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvaGVhZC5qc1wiIiwid2VicGFjazovL3BvcnRmb2xpby9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0LmpzXCIiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcuanNcIiIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3BvcnRmb2xpby9leHRlcm5hbCBcInJlYWN0LXVzZS1sYW55YXJkXCIiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL2lnbm9yZWR8QzpcXFVzZXJzXFxtZXJ0XFxEZXNrdG9wXFxteXBvcnRmb2xpb1xcbm9kZV9tb2R1bGVzXFxuZXh0XFxkaXN0XFxuZXh0LXNlcnZlclxcbGliXFxyb3V0ZXJ8Li91dGlscy9yZXNvbHZlLXJld3JpdGVzIl0sIm5hbWVzIjpbIk9SQU5HRSIsIlBvcHVsYXJBcnRpY2xlcyIsInByb3BzIiwicG9zdHMiLCJsaW5rQ29sb3IiLCJ1c2VMaW5rQ29sb3IiLCJ0ZXh0Q29sb3IiLCJ1c2VDb2xvck1vZGVWYWx1ZSIsImNvbXBhcmUiLCJhIiwiYiIsImNvdW50QSIsInB1YmxpY19yZWFjdGlvbnNfY291bnQiLCJjb3VudEIiLCJjb21wYXJpc29uIiwibW9zdExpa2VkRGF0YSIsInNvcnQiLCJzbGljZSIsIm1hcCIsImRlc2NyaXB0aW9uIiwidGl0bGUiLCJzbHVnIiwicG9zaXRpdmVfcmVhY3Rpb25zX2NvdW50IiwiY29tbWVudHNfY291bnQiLCJwdWJsaXNoZWRfYXQiLCJpIiwieSIsInNoYWRvdyIsInRleHREZWNvcmF0aW9uIiwiTGluayIsIm1vbWVudCIsImZvcm1hdCIsIkFOSU1BVElPTl9EVVJBVElPTiIsIkhvbWUiLCJ0cmFuc2xhdGVYIiwib3BhY2l0eSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsInRyYW5zbGF0ZVkiLCJkZWxheSIsIkhlYWRlciIsImNoaWxkcmVuIiwidW5kZXJsaW5lQ29sb3IiLCJlbW9qaSIsIk1ldGEiLCJrZXl3b3JkcyIsImltYWdlIiwiaW5jbHVkZXMiLCJjb25jYXQiLCJkZWZhdWx0UHJvcHMiLCJ2YXJpYW50cyIsImhpZGRlbiIsIngiLCJlbnRlciIsImV4aXQiLCJQYWdlTGF5b3V0IiwidHlwZSIsIk1vdGlvbkJveCIsIm1vdGlvbiIsImZvcndhcmRSZWYiLCJyZWYiLCJjaGFrcmFQcm9wcyIsIk9iamVjdCIsImZyb21FbnRyaWVzIiwiZW50cmllcyIsImZpbHRlciIsImtleSIsImlzVmFsaWRNb3Rpb25Qcm9wIiwiTW90aW9uRmxleCIsIk1vdGlvblRleHQiLCJNb3Rpb25MaXN0IiwiTW90aW9uSW1hZ2UiLCJzdGFnZ2VyVmFyaWFudHMiLCJpbml0aWFsIiwic3RhZ2dlckNoaWxkcmVuIiwiZGVsYXlDaGlsZHJlbiIsInN0YWdnZXJEaXJlY3Rpb24iLCJzdGlmZm5lc3MiLCJ2ZWxvY2l0eSIsImVhc2luZyIsInN0YWdnZXIiLCJhbmltYXRlIiwiZmFkZUluVXAiLCJlYXNlIiwiY29udGFpbmVyIiwic2NhbGUiLCJ2aXNpYmxlIiwiaXRlbSIsIlBhZ2VTbGlkZUZhZGUiLCJTdGFnZ2VyQ2hpbGRyZW4iLCJDYXJkVHJhbnNpdGlvbiIsImxpbmtDb2xvcnMiLCJsaWdodCIsImRhcmsiLCJ2aXNpdGVkTGlnaHQiLCJ2aXNpdGVkRGFyayIsInVzZVZpc2l0ZWRMaW5rQ29sb3IiLCJnZXRUYWdCYWNrZ3JvdW5kRGFyayIsImFjY2VudEtleSIsInRoZW1lIiwidHJhbnNwYXJlbnRpemUiLCJjb2xvcnMiLCJkZWZhdWx0VGhlbWUiLCJncmF5IiwiZGVmYXVsdEFjY2VudCIsImFjY2VudCIsImFjY2VudEtleXMiLCJtYWtlVGhlbWUiLCJvdmVycmlkZXMiLCJleHRlbmRUaGVtZSIsImV4dGVuZGVkVGhlbWUiLCJtZXJnZVdpdGgiLCJmb250cyIsImJvZHkiLCJzdHlsZXMiLCJnbG9iYWwiLCJjb2xvciIsIm1vZGUiLCJiZyIsImZvbnRTaXplIiwiZm9udFN0eWxlIiwidHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uIiwiZm9udFdlaWdodCIsIl9ob3ZlciIsImNvbXBvbmVudHMiLCJQb3BvdmVyIiwicGFydHMiLCJiYXNlU3R5bGUiLCJwb3BwZXIiLCJ6SW5kZXgiLCJtYXhXIiwidyIsIndpZHRoIiwiQnV0dG9uIiwicm91bmRlZCIsIlRhZyIsInRleHRhcmVhIiwiYmFja2dyb3VuZCIsIl9mb2N1cyIsImJveFNoYWRvdyIsInRleHQiLCJncmFkaWVudCIsImJnR3JhZGllbnQiLCJiZ0NsaXAiLCJtZHgiLCJoMSIsIm10IiwibWIiLCJsaW5lSGVpZ2h0IiwibGV0dGVyU3BhY2luZyIsImgyIiwiaDMiLCJoNCIsInAiLCJociIsIm15IiwiYmxvY2txdW90ZSIsImJvcmRlcldpZHRoIiwiYm9yZGVyQ29sb3IiLCJweCIsInB5IiwidWwiLCJtbCIsImNvZGUiLCJ3aGl0ZVNwYWNlIiwiZ2V0VGFnQ29sb3IiLCJ0b0xvd2VyQ2FzZSIsIlVuZGVybGluZWRUZXh0IiwiaCIsIlN0YXR1cyIsImxvYWRpbmciLCJzdGF0dXMiLCJ1c2VMYW55YXJkIiwidXNlcklkIiwic29ja2V0IiwiZ2V0QWN0aXZpdHkiLCJsaXN0ZW5pbmdfdG9fc3BvdGlmeSIsInNvbmciLCJhcnRpc3QiLCJhbGJ1bSIsInNwb3RpZnkiLCJuYW1lIiwiZGV0YWlscyIsInN0YXRlIiwiZ2V0SW1hZ2UiLCJhY3Rpdml0eSIsImxhcmdlSW1hZ2UiLCJhbGJ1bV9hcnRfdXJsIiwiYXBwbGljYXRpb25faWQiLCJsYXJnZV9pbWFnZSIsInNtYWxsX2ltYWdlIiwiYXNzZXRzIiwic21hbGxJbWFnZSIsImRpc2NvcmRfc3RhdHVzIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJleHBvcnRzIiwiSW1hZ2UiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTIiLCJfZXh0ZW5kczIiLCJfcmVhY3QiLCJfaGVhZCIsIl90b0Jhc2UiLCJfaW1hZ2VDb25maWciLCJfdXNlSW50ZXJzZWN0aW9uIiwiX19ORVhUX0lNQUdFX0lNUE9SVEVEIiwiVkFMSURfTE9BRElOR19WQUxVRVMiLCJ1bmRlZmluZWQiLCJsb2FkZXJzIiwiTWFwIiwiaW1naXhMb2FkZXIiLCJjbG91ZGluYXJ5TG9hZGVyIiwiYWthbWFpTG9hZGVyIiwiZGVmYXVsdExvYWRlciIsIlZBTElEX0xBWU9VVF9WQUxVRVMiLCJpc1N0YXRpY1JlcXVpcmUiLCJzcmMiLCJkZWZhdWx0IiwiaXNTdGF0aWNJbWFnZURhdGEiLCJpc1N0YXRpY0ltcG9ydCIsImRldmljZVNpemVzIiwiY29uZmlnRGV2aWNlU2l6ZXMiLCJpbWFnZVNpemVzIiwiY29uZmlnSW1hZ2VTaXplcyIsImxvYWRlciIsImNvbmZpZ0xvYWRlciIsInBhdGgiLCJjb25maWdQYXRoIiwiZG9tYWlucyIsImNvbmZpZ0RvbWFpbnMiLCJwcm9jZXNzIiwiaW1hZ2VDb25maWdEZWZhdWx0IiwiYWxsU2l6ZXMiLCJnZXRXaWR0aHMiLCJsYXlvdXQiLCJzaXplcyIsInZpZXdwb3J0V2lkdGhSZSIsInBlcmNlbnRTaXplcyIsIm1hdGNoIiwiZXhlYyIsInB1c2giLCJwYXJzZUludCIsImxlbmd0aCIsInNtYWxsZXN0UmF0aW8iLCJNYXRoIiwibWluIiwid2lkdGhzIiwicyIsImtpbmQiLCJTZXQiLCJmaW5kIiwiZ2VuZXJhdGVJbWdBdHRycyIsInVub3B0aW1pemVkIiwicXVhbGl0eSIsInNyY1NldCIsImxhc3QiLCJqb2luIiwiZ2V0SW50IiwiZGVmYXVsdEltYWdlTG9hZGVyIiwibG9hZGVyUHJvcHMiLCJsb2FkIiwiZ2V0Iiwicm9vdCIsIkVycm9yIiwiVkFMSURfTE9BREVSUyIsInJlbW92ZVBsYWNlaG9sZGVyIiwiaW1nIiwicGxhY2Vob2xkZXIiLCJoYW5kbGVMb2FkIiwic3RhcnRzV2l0aCIsImRlY29kZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiY2F0Y2giLCJ0aGVuIiwic3R5bGUiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRJbWFnZSIsImNvbXBsZXRlIiwib25sb2FkIiwiX3JlZiIsInByaW9yaXR5IiwiY2xhc3NOYW1lIiwiaGVpZ2h0Iiwib2JqZWN0Rml0Iiwib2JqZWN0UG9zaXRpb24iLCJibHVyRGF0YVVSTCIsImFsbCIsInJlc3QiLCJzdGF0aWNTcmMiLCJzdGF0aWNJbWFnZURhdGEiLCJKU09OIiwic3RyaW5naWZ5Iiwid2lkdGhJbnQiLCJoZWlnaHRJbnQiLCJxdWFsaXR5SW50IiwiU3RyaW5nIiwiY29uc29sZSIsIndhcm4iLCJWQUxJRF9CTFVSX0VYVCIsImlzTGF6eSIsInNldFJlZiIsImlzSW50ZXJzZWN0ZWQiLCJ1c2VJbnRlcnNlY3Rpb24iLCJyb290TWFyZ2luIiwiZGlzYWJsZWQiLCJpc1Zpc2libGUiLCJ3cmFwcGVyU3R5bGUiLCJzaXplclN0eWxlIiwic2l6ZXJTdmciLCJpbWdTdHlsZSIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsImJvdHRvbSIsInJpZ2h0IiwiYm94U2l6aW5nIiwicGFkZGluZyIsImJvcmRlciIsIm1hcmdpbiIsImRpc3BsYXkiLCJtaW5XaWR0aCIsIm1heFdpZHRoIiwibWluSGVpZ2h0IiwibWF4SGVpZ2h0IiwicXVvdGllbnQiLCJwYWRkaW5nVG9wIiwiaXNOYU4iLCJvdmVyZmxvdyIsImltZ0F0dHJpYnV0ZXMiLCJjcmVhdGVFbGVtZW50IiwiYWx0Iiwicm9sZSIsInRvQmFzZTY0IiwiYXNzaWduIiwiZGVjb2RpbmciLCJlbGVtZW50IiwicmVsIiwiYXMiLCJocmVmIiwiaW1hZ2VzcmNzZXQiLCJpbWFnZXNpemVzIiwibm9ybWFsaXplU3JjIiwicGFyYW1zIiwicGFyYW1zU3RyaW5nIiwibWlzc2luZ1ZhbHVlcyIsInBhcnNlZFNyYyIsIlVSTCIsImVyciIsImVycm9yIiwiaG9zdG5hbWUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsIl9yb3V0ZXIiLCJfcm91dGVyMiIsInByZWZldGNoZWQiLCJwcmVmZXRjaCIsInJvdXRlciIsIm9wdGlvbnMiLCJpc0xvY2FsVVJMIiwiY3VyTG9jYWxlIiwibG9jYWxlIiwiaXNNb2RpZmllZEV2ZW50IiwiZXZlbnQiLCJ0YXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwibWV0YUtleSIsImN0cmxLZXkiLCJzaGlmdEtleSIsImFsdEtleSIsIm5hdGl2ZUV2ZW50Iiwid2hpY2giLCJsaW5rQ2xpY2tlZCIsImUiLCJyZXBsYWNlIiwic2hhbGxvdyIsInNjcm9sbCIsIm5vZGVOYW1lIiwicHJldmVudERlZmF1bHQiLCJpbmRleE9mIiwiY3JlYXRlUHJvcEVycm9yIiwiYXJncyIsImV4cGVjdGVkIiwiYWN0dWFsIiwicmVxdWlyZWRQcm9wc0d1YXJkIiwicmVxdWlyZWRQcm9wcyIsImtleXMiLCJmb3JFYWNoIiwiXyIsIm9wdGlvbmFsUHJvcHNHdWFyZCIsInBhc3NIcmVmIiwib3B0aW9uYWxQcm9wcyIsInZhbFR5cGUiLCJoYXNXYXJuZWQiLCJ1c2VSZWYiLCJjdXJyZW50IiwidXNlUm91dGVyIiwidXNlTWVtbyIsInJlc29sdmVkSHJlZiIsInJlc29sdmVkQXMiLCJyZXNvbHZlSHJlZiIsImNoaWxkIiwiQ2hpbGRyZW4iLCJvbmx5IiwiY2hpbGRSZWYiLCJzZXRJbnRlcnNlY3Rpb25SZWYiLCJ1c2VDYWxsYmFjayIsImVsIiwidXNlRWZmZWN0Iiwic2hvdWxkUHJlZmV0Y2giLCJpc1ByZWZldGNoZWQiLCJjaGlsZFByb3BzIiwib25DbGljayIsImRlZmF1bHRQcmV2ZW50ZWQiLCJvbk1vdXNlRW50ZXIiLCJsb2NhbGVEb21haW4iLCJpc0xvY2FsZURvbWFpbiIsImdldERvbWFpbkxvY2FsZSIsImxvY2FsZXMiLCJkb21haW5Mb2NhbGVzIiwiYWRkQmFzZVBhdGgiLCJhZGRMb2NhbGUiLCJkZWZhdWx0TG9jYWxlIiwiY2xvbmVFbGVtZW50IiwiX2RlZmF1bHQiLCJyZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCIsImVuZHNXaXRoIiwibm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2giLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwic2VsZiIsImNiIiwic3RhcnQiLCJEYXRlIiwibm93Iiwic2V0VGltZW91dCIsImRpZFRpbWVvdXQiLCJ0aW1lUmVtYWluaW5nIiwibWF4IiwiY2FuY2VsSWRsZUNhbGxiYWNrIiwiaWQiLCJjbGVhclRpbWVvdXQiLCJtYXJrQXNzZXRFcnJvciIsImlzQXNzZXRFcnJvciIsImdldENsaWVudEJ1aWxkTWFuaWZlc3QiLCJfZ2V0QXNzZXRQYXRoRnJvbVJvdXRlIiwiX3JlcXVlc3RJZGxlQ2FsbGJhY2siLCJNU19NQVhfSURMRV9ERUxBWSIsIndpdGhGdXR1cmUiLCJnZW5lcmF0b3IiLCJlbnRyeSIsImZ1dHVyZSIsInJlc29sdmVyIiwicHJvbSIsInNldCIsInZhbHVlIiwiaGFzUHJlZmV0Y2giLCJsaW5rIiwiZG9jdW1lbnQiLCJ3aW5kb3ciLCJNU0lucHV0TWV0aG9kQ29udGV4dCIsImRvY3VtZW50TW9kZSIsInJlbExpc3QiLCJzdXBwb3J0cyIsIl91bnVzZWQiLCJjYW5QcmVmZXRjaCIsInByZWZldGNoVmlhRG9tIiwicmVzIiwicmVqIiwicXVlcnlTZWxlY3RvciIsImNyb3NzT3JpZ2luIiwib25lcnJvciIsImhlYWQiLCJhcHBlbmRDaGlsZCIsIkFTU0VUX0xPQURfRVJST1IiLCJTeW1ib2wiLCJkZWZpbmVQcm9wZXJ0eSIsImFwcGVuZFNjcmlwdCIsInNjcmlwdCIsInJlamVjdCIsInJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQiLCJtcyIsImNhbmNlbGxlZCIsInIiLCJfX0JVSUxEX01BTklGRVNUIiwib25CdWlsZE1hbmlmZXN0IiwiX19CVUlMRF9NQU5JRkVTVF9DQiIsImdldEZpbGVzRm9yUm91dGUiLCJhc3NldFByZWZpeCIsInJvdXRlIiwic2NyaXB0cyIsImVuY29kZVVSSSIsImNzcyIsIm1hbmlmZXN0IiwiYWxsRmlsZXMiLCJ2IiwiY3JlYXRlUm91dGVMb2FkZXIiLCJlbnRyeXBvaW50cyIsImxvYWRlZFNjcmlwdHMiLCJzdHlsZVNoZWV0cyIsInJvdXRlcyIsIm1heWJlRXhlY3V0ZVNjcmlwdCIsImZldGNoU3R5bGVTaGVldCIsImZldGNoIiwib2siLCJjb250ZW50Iiwid2hlbkVudHJ5cG9pbnQiLCJvbkVudHJ5cG9pbnQiLCJleGVjdXRlIiwiZm4iLCJjb21wb25lbnQiLCJpbnB1dCIsIm9sZCIsImxvYWRSb3V0ZSIsImhhcyIsImVudHJ5cG9pbnQiLCJjbiIsIm5hdmlnYXRvciIsImNvbm5lY3Rpb24iLCJzYXZlRGF0YSIsInRlc3QiLCJlZmZlY3RpdmVUeXBlIiwib3V0cHV0IiwibWFrZVB1YmxpY1JvdXRlckluc3RhbmNlIiwiTmV4dFJvdXRlciIsIl9yb3V0ZXJDb250ZXh0IiwiX3dpdGhSb3V0ZXIiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiZXZlbnRzIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJvbiIsImV2ZW50RmllbGQiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInN1YnN0cmluZyIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJ1c2VDb250ZXh0IiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsImluc3RhbmNlIiwicHJvcGVydHkiLCJBcnJheSIsImlzQXJyYXkiLCJoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiaXNEaXNhYmxlZCIsInVub2JzZXJ2ZSIsInNldFZpc2libGUiLCJ1c2VTdGF0ZSIsInRhZ05hbWUiLCJvYnNlcnZlIiwiaWRsZUNhbGxiYWNrIiwiY2FsbGJhY2siLCJvYnNlcnZlciIsImVsZW1lbnRzIiwiY3JlYXRlT2JzZXJ2ZXIiLCJkZWxldGUiLCJzaXplIiwiZGlzY29ubmVjdCIsIm9ic2VydmVycyIsImlzSW50ZXJzZWN0aW5nIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJ3aXRoUm91dGVyIiwiQ29tcG9zZWRDb21wb25lbnQiLCJXaXRoUm91dGVyV3JhcHBlciIsImdldEluaXRpYWxQcm9wcyIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJkaXNwbGF5TmFtZSIsIm5vcm1hbGl6ZUxvY2FsZVBhdGgiLCJwYXRobmFtZSIsImRldGVjdGVkTG9jYWxlIiwicGF0aG5hbWVQYXJ0cyIsInNwbGl0Iiwic29tZSIsInNwbGljZSIsIm1pdHQiLCJjcmVhdGUiLCJoYW5kbGVyIiwib2ZmIiwiZW1pdCIsImV2dHMiLCJkZWxMb2NhbGUiLCJoYXNCYXNlUGF0aCIsImRlbEJhc2VQYXRoIiwiaW50ZXJwb2xhdGVBcyIsIl9ub3JtYWxpemVUcmFpbGluZ1NsYXNoIiwiX3JvdXRlTG9hZGVyIiwiX2Rlbm9ybWFsaXplUGFnZVBhdGgiLCJfbm9ybWFsaXplTG9jYWxlUGF0aCIsIl9taXR0IiwiX3V0aWxzIiwiX2lzRHluYW1pYyIsIl9wYXJzZVJlbGF0aXZlVXJsIiwiX3F1ZXJ5c3RyaW5nIiwiX3Jlc29sdmVSZXdyaXRlcyIsIl9yb3V0ZU1hdGNoZXIiLCJfcm91dGVSZWdleCIsIm9iaiIsIl9fZXNNb2R1bGUiLCJkZXRlY3REb21haW5Mb2NhbGUiLCJiYXNlUGF0aCIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJhZGRQYXRoUHJlZml4IiwicHJlZml4IiwicGF0aE5vUXVlcnlIYXNoIiwicXVlcnlJbmRleCIsImhhc2hJbmRleCIsInVybCIsImxvY2F0aW9uT3JpZ2luIiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsIm9yaWdpbiIsImFzUGF0aG5hbWUiLCJxdWVyeSIsImludGVycG9sYXRlZFJvdXRlIiwiZHluYW1pY1JlZ2V4IiwiZ2V0Um91dGVSZWdleCIsImR5bmFtaWNHcm91cHMiLCJncm91cHMiLCJkeW5hbWljTWF0Y2hlcyIsImdldFJvdXRlTWF0Y2hlciIsImV2ZXJ5IiwicGFyYW0iLCJyZXBlYXQiLCJvcHRpb25hbCIsInJlcGxhY2VkIiwic2VnbWVudCIsInJlc3VsdCIsIm9taXRQYXJtc0Zyb21RdWVyeSIsImZpbHRlcmVkUXVlcnkiLCJyZXNvbHZlQXMiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJmb3JtYXRXaXRoVmFsaWRhdGlvbiIsImFzUGF0aCIsImZpbmFsVXJsIiwiaW50ZXJwb2xhdGVkQXMiLCJpc0R5bmFtaWNSb3V0ZSIsInNlYXJjaFBhcmFtcyIsInNlYXJjaFBhcmFtc1RvVXJsUXVlcnkiLCJoYXNoIiwic3RyaXBPcmlnaW4iLCJwcmVwYXJlVXJsQXMiLCJocmVmSGFkT3JpZ2luIiwiYXNIYWRPcmlnaW4iLCJwcmVwYXJlZFVybCIsInByZXBhcmVkQXMiLCJyZXNvbHZlRHluYW1pY1JvdXRlIiwicGFnZXMiLCJjbGVhblBhdGhuYW1lIiwiZGVub3JtYWxpemVQYWdlUGF0aCIsInBhZ2UiLCJyZSIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiU1NHX0RBVEFfTk9UX0ZPVU5EIiwiZmV0Y2hSZXRyeSIsImF0dGVtcHRzIiwiY3JlZGVudGlhbHMiLCJqc29uIiwiZGF0YSIsIm5vdEZvdW5kIiwiZmV0Y2hOZXh0RGF0YSIsImRhdGFIcmVmIiwiaXNTZXJ2ZXJSZW5kZXIiLCJSb3V0ZXIiLCJjb25zdHJ1Y3RvciIsIl9wYXRobmFtZSIsIl9xdWVyeSIsIl9hcyIsImluaXRpYWxQcm9wcyIsInBhZ2VMb2FkZXIiLCJBcHAiLCJ3cmFwQXBwIiwiQ29tcG9uZW50Iiwic3Vic2NyaXB0aW9uIiwiaXNGYWxsYmFjayIsImlzUHJldmlldyIsInNkYyIsInNkciIsInN1YiIsImNsYyIsIl9icHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiX2luRmxpZ2h0Um91dGUiLCJfc2hhbGxvdyIsImlzUmVhZHkiLCJfaWR4Iiwib25Qb3BTdGF0ZSIsImNoYW5nZVN0YXRlIiwiZ2V0VVJMIiwiX19OIiwiZm9yY2VkU2Nyb2xsIiwiaWR4IiwicGFyc2VSZWxhdGl2ZVVybCIsImNoYW5nZSIsIl9fTl9TU0ciLCJfX05fU1NQIiwiYXV0b0V4cG9ydER5bmFtaWMiLCJfX05FWFRfREFUQV9fIiwiYXV0b0V4cG9ydCIsImdzc3AiLCJnaXAiLCJsb2NhdGlvbiIsInNlYXJjaCIsInJlbG9hZCIsImJhY2siLCJoaXN0b3J5IiwibWV0aG9kIiwic2hvdWxkUmVzb2x2ZUhyZWYiLCJfaCIsIl9zaG91bGRSZXNvbHZlSHJlZiIsImxvY2FsZUNoYW5nZSIsIlNUIiwicGVyZm9ybWFuY2UiLCJtYXJrIiwicm91dGVQcm9wcyIsImFib3J0Q29tcG9uZW50TG9hZCIsImNsZWFuZWRBcyIsIm9ubHlBSGFzaENoYW5nZSIsInNjcm9sbFRvSGFzaCIsIm5vdGlmeSIsInBhcnNlZCIsInJld3JpdGVzIiwiZ2V0UGFnZUxpc3QiLCJfX3Jld3JpdGVzIiwidXJsSXNOZXciLCJwYXJzZWRBcyIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwic2hvdWxkSW50ZXJwb2xhdGUiLCJtaXNzaW5nUGFyYW1zIiwiX3NlbGYkX19ORVhUX0RBVEFfXyRwIiwiX3NlbGYkX19ORVhUX0RBVEFfXyRwMiIsIl9vcHRpb25zJHNjcm9sbCIsInJvdXRlSW5mbyIsImdldFJvdXRlSW5mbyIsInBhZ2VQcm9wcyIsIl9fTl9SRURJUkVDVCIsImRlc3RpbmF0aW9uIiwicGFyc2VkSHJlZiIsIm5ld1VybCIsIm5ld0FzIiwiX19OX1BSRVZJRVciLCJub3RGb3VuZFJvdXRlIiwiZmV0Y2hDb21wb25lbnQiLCJhcHBDb21wIiwibmV4dCIsImlzUHJlcmVuZGVyZWQiLCJzdGF0dXNDb2RlIiwiaXNWYWxpZFNoYWxsb3dSb3V0ZSIsInNob3VsZFNjcm9sbCIsInJlc2V0U2Nyb2xsIiwiaGFuZGxlUm91dGVJbmZvRXJyb3IiLCJsb2FkRXJyb3JGYWlsIiwiZ2lwRXJyIiwicm91dGVJbmZvRXJyIiwiZXhpc3RpbmdSb3V0ZUluZm8iLCJjYWNoZWRSb3V0ZUluZm8iLCJtb2QiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJnZXREYXRhSHJlZiIsIl9nZXREYXRhIiwiX2dldFN0YXRpY0RhdGEiLCJfZ2V0U2VydmVyRGF0YSIsImJlZm9yZVBvcFN0YXRlIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsIm5ld1VybE5vSGFzaCIsIm5ld0hhc2giLCJzY3JvbGxUbyIsImlkRWwiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3IiwibmFtZUVsIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJfaXNTc2ciLCJpc1NzZyIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsImxvYWRQYWdlIiwiY2FjaGVLZXkiLCJyZXNvdXJjZUtleSIsImN0eCIsIkFwcFRyZWUiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiZm9ybWF0VXJsIiwicXVlcnlzdHJpbmciLCJfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUiLCJXZWFrTWFwIiwiY2FjaGUiLCJuZXdPYmoiLCJoYXNQcm9wZXJ0eURlc2NyaXB0b3IiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJkZXNjIiwic2xhc2hlZFByb3RvY29scyIsInVybE9iaiIsImF1dGgiLCJwcm90b2NvbCIsImhvc3QiLCJwb3J0IiwidXJsUXVlcnlUb1NlYXJjaFBhcmFtcyIsInN1YnN0ciIsInNsYXNoZXMiLCJURVNUX1JPVVRFIiwiZ2xvYmFsQmFzZSIsInJlc29sdmVkQmFzZSIsInN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0iLCJ1cmxRdWVyeSIsIlVSTFNlYXJjaFBhcmFtcyIsImFwcGVuZCIsInNlYXJjaFBhcmFtc0xpc3QiLCJmcm9tIiwiZGVjb2RlVVJJQ29tcG9uZW50Iiwic2x1Z05hbWUiLCJnIiwibSIsInBvcyIsImVzY2FwZVJlZ2V4Iiwic3RyIiwicGFyc2VQYXJhbWV0ZXIiLCJub3JtYWxpemVkUm91dGUiLCJzZWdtZW50cyIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJyb3V0ZUtleUNoYXJDb2RlIiwicm91dGVLZXlDaGFyTGVuZ3RoIiwiZ2V0U2FmZVJvdXRlS2V5Iiwicm91dGVLZXkiLCJmcm9tQ2hhckNvZGUiLCJyb3V0ZUtleXMiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsImNsZWFuZWRLZXkiLCJpbnZhbGlkS2V5IiwiUmVnRXhwIiwibmFtZWRSZWdleCIsImV4ZWNPbmNlIiwiZ2V0RGlzcGxheU5hbWUiLCJpc1Jlc1NlbnQiLCJfZm9ybWF0VXJsIiwidXNlZCIsImZpbmlzaGVkIiwiaGVhZGVyc1NlbnQiLCJfQXBwJHByb3RvdHlwZSIsInVybE9iamVjdEtleXMiLCJTUCIsIm1lYXN1cmUiLCJJbmRleCIsImxvZyIsImdldFBvc3RzIiwiZ2V0U3RhdGljUHJvcHMiLCJyZXZhbGlkYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsTUFBTSxHQUFHLFNBQWY7O0FBRUEsTUFBTUMsZUFBZ0MsR0FBR0MsS0FBSyxJQUFJO0FBQ2hELFFBQU07QUFBRUM7QUFBRixNQUFZRCxLQUFsQjtBQUVBLFFBQU1FLFNBQVMsR0FBR0MsaUVBQVksRUFBOUI7QUFDQSxRQUFNQyxTQUFTLEdBQUdDLG1FQUFpQixDQUFDLFVBQUQsRUFBYSxVQUFiLENBQW5DOztBQUVBLFdBQVNDLE9BQVQsQ0FDRUMsQ0FERixFQUVFQyxDQUZGLEVBR0U7QUFDQSxVQUFNQyxNQUFNLEdBQUdGLENBQUMsQ0FBQ0csc0JBQWpCO0FBQ0EsVUFBTUMsTUFBTSxHQUFHSCxDQUFDLENBQUNFLHNCQUFqQjtBQUVBLFFBQUlFLFVBQVUsR0FBRyxDQUFqQjs7QUFDQSxRQUFJSCxNQUFNLEdBQUdFLE1BQWIsRUFBcUI7QUFDbkJDLGdCQUFVLEdBQUcsQ0FBYjtBQUNELEtBRkQsTUFFTyxJQUFJSCxNQUFNLEdBQUdFLE1BQWIsRUFBcUI7QUFDMUJDLGdCQUFVLEdBQUcsQ0FBQyxDQUFkO0FBQ0Q7O0FBQ0QsV0FBT0EsVUFBUDtBQUNEOztBQUVELFFBQU1DLGFBQWEsR0FBR1osS0FBSyxDQUFDYSxJQUFOLENBQVdSLE9BQVgsRUFBb0JTLEtBQXBCLENBQTBCLENBQTFCLEVBQTZCLENBQTdCLENBQXRCO0FBRUEsc0JBQ0UsOERBQUMsb0RBQUQ7QUFBUSxTQUFLLEVBQUMsT0FBZDtBQUFzQixXQUFPLEVBQUUsQ0FBL0I7QUFBa0MsU0FBSyxFQUFDLE1BQXhDO0FBQUEsNEJBQ0UsOERBQUMsbURBQUQ7QUFBUSxvQkFBYyxFQUFFakIsTUFBeEI7QUFBZ0MsUUFBRSxFQUFFLENBQXBDO0FBQXVDLFFBQUUsRUFBRSxDQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUlFLDhEQUFDLHdEQUFEO0FBQVksYUFBTyxFQUFFLENBQXJCO0FBQXdCLGFBQU8sRUFBRSxDQUFqQztBQUFvQyxRQUFFLEVBQUUsQ0FBeEM7QUFBMkMsT0FBQyxFQUFDLE1BQTdDO0FBQUEsZ0JBQ0dHLEtBQUssSUFDSlksYUFBYSxDQUFDRyxHQUFkLENBQ0UsQ0FBQztBQUNDQyxtQkFERDtBQUVDQyxhQUZEO0FBR0NDLFlBSEQ7QUFJQ0MsZ0NBSkQ7QUFLQ0Msc0JBTEQ7QUFNQ0M7QUFORCxPQUFELEVBT0dDLENBUEgsa0JBUUUsOERBQUMsMkRBQUQ7QUFBVyxrQkFBVSxFQUFFO0FBQUVDLFdBQUMsRUFBRSxDQUFDO0FBQU4sU0FBdkI7QUFBQSwrQkFDRSw4REFBQywwRUFBRDtBQUFBLGlDQUNFLDhEQUFDLG9EQUFEO0FBQ0UsbUJBQU8sRUFBRSxDQURYO0FBRUUsYUFBQyxFQUFFLENBRkw7QUFHRSxrQkFBTSxFQUFFO0FBQUVDLG9CQUFNLEVBQUUsSUFBVjtBQUFnQkMsNEJBQWMsRUFBRTtBQUFoQyxhQUhWO0FBSUUsdUJBQVcsRUFBQyxLQUpkO0FBS0Usb0JBQVEsRUFBQyxVQUxYO0FBTUUsbUJBQU8sRUFBQyxJQU5WO0FBT0UsY0FBRSxFQUFFckIsbUVBQWlCLENBQUMsT0FBRCxFQUFVLFVBQVYsQ0FQdkI7QUFRRSxpQkFBSyxFQUFDLE1BUlI7QUFBQSxvQ0FVRSw4REFBQyxvREFBRDtBQUFRLDRCQUFjLEVBQUMsZUFBdkI7QUFBdUMsc0JBQVEsTUFBL0M7QUFBQSxzQ0FDRSw4REFBQyxxREFBRDtBQUFTLHdCQUFRLEVBQUMsSUFBbEI7QUFBdUIscUJBQUssRUFBQyxNQUE3QjtBQUFvQyxrQkFBRSxFQUFFLENBQXhDO0FBQUEsdUNBQ0UsOERBQUMsa0RBQUQ7QUFBVSxzQkFBSSxFQUFHLFNBQVFjLElBQUssRUFBOUI7QUFBaUMsMEJBQVEsTUFBekM7QUFBQSx5Q0FDRSw4REFBQyxrREFBRDtBQUFNLHNCQUFFLEVBQUVRLGtEQUFWO0FBQWdCLHlCQUFLLEVBQUV6QixTQUF2QjtBQUFBLDhCQUNHZ0I7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBREYsZUFRRSw4REFBQyxvREFBRDtBQUFRLHVCQUFPLEVBQUUsQ0FBakI7QUFBb0Isd0JBQVEsTUFBNUI7QUFBNkIsaUJBQUMsRUFBRSxDQUFDLE1BQUQsRUFBUyxNQUFULEVBQWlCLE1BQWpCLENBQWhDO0FBQUEsMkJBQ0dFLHdCQUF3QixnQkFDdkIsOERBQUMsa0RBQUQ7QUFBTSw0QkFBVSxFQUFDLFFBQWpCO0FBQUEsMENBQ0UsOERBQUMsa0RBQUQ7QUFDRSw0QkFBUSxFQUFDLElBRFg7QUFFRSw2QkFBUyxFQUFFLENBRmI7QUFHRSw4QkFBVSxFQUFDLEtBSGI7QUFJRSx5QkFBSyxFQUFDLE1BSlI7QUFLRSx5QkFBSyxFQUFFaEIsU0FMVDtBQUFBLDhCQU9HZ0I7QUFQSDtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQURGLHVCQVdFO0FBQ0Usc0JBQUUsRUFBQyxRQURMO0FBRUUsb0NBQWdCLEVBQUMsaUJBRm5CO0FBR0UsMEJBQU0sRUFBQyxNQUhUO0FBSUUsMkJBQU8sRUFBQyxhQUpWO0FBS0UseUJBQUssRUFBQyxNQUxSO0FBTUUseUJBQUssRUFBQyw0QkFOUjtBQUFBLDJDQVFFO0FBQUEsOENBQ0U7QUFDRSx5QkFBQyxFQUFDLGtYQURKO0FBRUUsNEJBQUksRUFBQztBQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBREYsZUFLRTtBQUNFLHlCQUFDLEVBQUMsc1RBREo7QUFFRSw0QkFBSSxFQUFDO0FBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0FMRixlQVNFO0FBQ0UseUJBQUMsRUFBQyxnV0FESjtBQUVFLDRCQUFJLEVBQUM7QUFGUDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQVRGLGVBYUU7QUFDRSx5QkFBQyxFQUFDLGlRQURKO0FBRUUsNEJBQUksRUFBQztBQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBRHVCLEdBeUN2QixFQTFDSixFQTRDR0MsY0FBYyxnQkFDYiw4REFBQyxrREFBRDtBQUFNLDRCQUFVLEVBQUMsUUFBakI7QUFBQSwwQ0FDRSw4REFBQyxrREFBRDtBQUNFLDRCQUFRLEVBQUMsSUFEWDtBQUVFLDZCQUFTLEVBQUUsQ0FGYjtBQUdFLDhCQUFVLEVBQUMsS0FIYjtBQUlFLHlCQUFLLEVBQUMsTUFKUjtBQUtFLHlCQUFLLEVBQUVqQixTQUxUO0FBQUEsOEJBT0dpQjtBQVBIO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBREYsdUJBV0U7QUFDRSxzQkFBRSxFQUFDLFFBREw7QUFFRSxvQ0FBZ0IsRUFBQyxpQkFGbkI7QUFHRSwwQkFBTSxFQUFDLE1BSFQ7QUFJRSwyQkFBTyxFQUFDLGFBSlY7QUFLRSx5QkFBSyxFQUFDLE1BTFI7QUFNRSx5QkFBSyxFQUFDLDRCQU5SO0FBQUEsNENBUUU7QUFDRSx1QkFBQyxFQUFDLHFOQURKO0FBRUUsMEJBQUksRUFBQztBQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBUkYsZUFZRTtBQUNFLHVCQUFDLEVBQUMsMk1BREo7QUFFRSwwQkFBSSxFQUFDO0FBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FaRixlQWdCRTtBQUNFLHVCQUFDLEVBQUMsd1lBREo7QUFFRSwwQkFBSSxFQUFDO0FBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FoQkYsZUFvQkU7QUFDRSx1QkFBQyxFQUFDLCtQQURKO0FBRUUsMEJBQUksRUFBQztBQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBcEJGLGVBd0JFO0FBQ0UsdUJBQUMsRUFBQyxvTUFESjtBQUVFLDBCQUFJLEVBQUM7QUFGUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQXhCRixlQTRCRTtBQUFHLDBCQUFJLEVBQUMsU0FBUjtBQUFBLDhDQUNFO0FBQVEsMEJBQUUsRUFBQyxRQUFYO0FBQW9CLDBCQUFFLEVBQUMsU0FBdkI7QUFBaUMseUJBQUMsRUFBQztBQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQURGLGVBRUU7QUFBUSwwQkFBRSxFQUFDLFNBQVg7QUFBcUIsMEJBQUUsRUFBQyxTQUF4QjtBQUFrQyx5QkFBQyxFQUFDO0FBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBRkYsZUFHRTtBQUFRLDBCQUFFLEVBQUMsU0FBWDtBQUFxQiwwQkFBRSxFQUFDLFNBQXhCO0FBQWtDLHlCQUFDLEVBQUM7QUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0FIRixlQUlFO0FBQVEsMEJBQUUsRUFBQyxTQUFYO0FBQXFCLDBCQUFFLEVBQUMsU0FBeEI7QUFBa0MseUJBQUMsRUFBQztBQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0E1QkYsZUFrQ0U7QUFDRSx1QkFBQyxFQUFDLDhOQURKO0FBRUUsMEJBQUksRUFBQztBQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBbENGLGVBc0NFO0FBQ0UsdUJBQUMsRUFBQywrTkFESjtBQUVFLDBCQUFJLEVBQUM7QUFGUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQXRDRixlQTBDRTtBQUNFLHVCQUFDLEVBQUMsZ09BREo7QUFFRSwwQkFBSSxFQUFDO0FBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0ExQ0YsZUE4Q0U7QUFDRSx1QkFBQyxFQUFDLGdPQURKO0FBRUUsMEJBQUksRUFBQztBQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBOUNGLGVBa0RFO0FBQU0sdUJBQUMsRUFBQztBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBbERGLGVBbURFO0FBQU0sdUJBQUMsRUFBQztBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBbkRGLGVBb0RFO0FBQU0sdUJBQUMsRUFBQztBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBcERGLGVBcURFO0FBQU0sdUJBQUMsRUFBQztBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBckRGLGVBc0RFO0FBQU0sdUJBQUMsRUFBQztBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBdERGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBRGEsR0FzRWIsRUFsSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFWRixlQXdJRSw4REFBQyxvREFBRDtBQUFRLHFCQUFPLEVBQUUsQ0FBakI7QUFBb0Isc0JBQVEsTUFBNUI7QUFBQSxzQ0FDRSw4REFBQyxxREFBRDtBQUFTLHdCQUFRLE1BQWpCO0FBQWtCLHFCQUFLLEVBQUMsV0FBeEI7QUFBb0MseUJBQVMsRUFBQyxLQUE5QztBQUFBLHVDQUNFLDhEQUFDLGtEQUFEO0FBQU0sMEJBQVEsRUFBQyxJQUFmO0FBQW9CLDRCQUFVLEVBQUMsS0FBL0I7QUFBcUMsdUJBQUssRUFBRWpCLFNBQTVDO0FBQUEsNEJBQ0d3Qiw2Q0FBTSxDQUFDTixZQUFELENBQU4sQ0FBcUJPLE1BQXJCLENBQTRCLGNBQTVCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBREYsRUFNR1Qsd0JBQXdCLGdCQUN2Qiw4REFBQyxxREFBRDtBQUFTLHdCQUFRLE1BQWpCO0FBQWtCLHFCQUFLLEVBQUMsV0FBeEI7QUFBb0MseUJBQVMsRUFBQyxLQUE5QztBQUFBLHVDQUNFLDhEQUFDLGtEQUFEO0FBQU0sNEJBQVUsRUFBQyxRQUFqQjtBQUEwQixtQkFBQyxFQUFFLENBQUMsTUFBRCxFQUFTLE1BQVQsRUFBaUIsTUFBakIsQ0FBN0I7QUFBQSwwQ0FDRSw4REFBQyxrREFBRDtBQUNFLDRCQUFRLEVBQUMsSUFEWDtBQUVFLDZCQUFTLEVBQUUsQ0FGYjtBQUdFLDhCQUFVLEVBQUMsS0FIYjtBQUlFLHlCQUFLLEVBQUMsTUFKUjtBQUtFLHlCQUFLLEVBQUVoQixTQUxUO0FBQUEsOEJBT0dnQjtBQVBIO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBREYsdUJBV0U7QUFDRSxzQkFBRSxFQUFDLFFBREw7QUFFRSxvQ0FBZ0IsRUFBQyxpQkFGbkI7QUFHRSwwQkFBTSxFQUFDLE1BSFQ7QUFJRSwyQkFBTyxFQUFDLGFBSlY7QUFLRSx5QkFBSyxFQUFDLE1BTFI7QUFNRSx5QkFBSyxFQUFDLDRCQU5SO0FBQUEsMkNBUUU7QUFBQSw4Q0FDRTtBQUNFLHlCQUFDLEVBQUMsa1hBREo7QUFFRSw0QkFBSSxFQUFDO0FBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0FERixlQUtFO0FBQ0UseUJBQUMsRUFBQyxzVEFESjtBQUVFLDRCQUFJLEVBQUM7QUFGUDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQUxGLGVBU0U7QUFDRSx5QkFBQyxFQUFDLGdXQURKO0FBRUUsNEJBQUksRUFBQztBQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBVEYsZUFhRTtBQUNFLHlCQUFDLEVBQUMsaVFBREo7QUFFRSw0QkFBSSxFQUFDO0FBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0FiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBRHVCLEdBMkN2QixFQWpESixFQW1ER0MsY0FBYyxnQkFDYiw4REFBQyxxREFBRDtBQUFTLHdCQUFRLE1BQWpCO0FBQWtCLHFCQUFLLEVBQUMsVUFBeEI7QUFBbUMseUJBQVMsRUFBQyxLQUE3QztBQUFBLHVDQUNFLDhEQUFDLGtEQUFEO0FBQU0sNEJBQVUsRUFBQyxRQUFqQjtBQUEwQixtQkFBQyxFQUFFLENBQUMsTUFBRCxFQUFTLE1BQVQsRUFBaUIsTUFBakIsQ0FBN0I7QUFBQSwwQ0FDRSw4REFBQyxrREFBRDtBQUNFLDRCQUFRLEVBQUMsSUFEWDtBQUVFLDZCQUFTLEVBQUUsQ0FGYjtBQUdFLDhCQUFVLEVBQUMsS0FIYjtBQUlFLHlCQUFLLEVBQUMsTUFKUjtBQUtFLHlCQUFLLEVBQUVqQixTQUxUO0FBQUEsOEJBT0dpQjtBQVBIO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBREYsdUJBV0U7QUFDRSxzQkFBRSxFQUFDLFFBREw7QUFFRSxvQ0FBZ0IsRUFBQyxpQkFGbkI7QUFHRSwwQkFBTSxFQUFDLE1BSFQ7QUFJRSwyQkFBTyxFQUFDLGFBSlY7QUFLRSx5QkFBSyxFQUFDLE1BTFI7QUFNRSx5QkFBSyxFQUFDLDRCQU5SO0FBQUEsNENBUUU7QUFDRSx1QkFBQyxFQUFDLHFOQURKO0FBRUUsMEJBQUksRUFBQztBQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBUkYsZUFZRTtBQUNFLHVCQUFDLEVBQUMsMk1BREo7QUFFRSwwQkFBSSxFQUFDO0FBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FaRixlQWdCRTtBQUNFLHVCQUFDLEVBQUMsd1lBREo7QUFFRSwwQkFBSSxFQUFDO0FBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FoQkYsZUFvQkU7QUFDRSx1QkFBQyxFQUFDLCtQQURKO0FBRUUsMEJBQUksRUFBQztBQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBcEJGLGVBd0JFO0FBQ0UsdUJBQUMsRUFBQyxvTUFESjtBQUVFLDBCQUFJLEVBQUM7QUFGUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQXhCRixlQTRCRTtBQUFHLDBCQUFJLEVBQUMsU0FBUjtBQUFBLDhDQUNFO0FBQVEsMEJBQUUsRUFBQyxRQUFYO0FBQW9CLDBCQUFFLEVBQUMsU0FBdkI7QUFBaUMseUJBQUMsRUFBQztBQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQURGLGVBRUU7QUFBUSwwQkFBRSxFQUFDLFNBQVg7QUFBcUIsMEJBQUUsRUFBQyxTQUF4QjtBQUFrQyx5QkFBQyxFQUFDO0FBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBRkYsZUFHRTtBQUFRLDBCQUFFLEVBQUMsU0FBWDtBQUFxQiwwQkFBRSxFQUFDLFNBQXhCO0FBQWtDLHlCQUFDLEVBQUM7QUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0FIRixlQUlFO0FBQVEsMEJBQUUsRUFBQyxTQUFYO0FBQXFCLDBCQUFFLEVBQUMsU0FBeEI7QUFBa0MseUJBQUMsRUFBQztBQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0E1QkYsZUFrQ0U7QUFDRSx1QkFBQyxFQUFDLDhOQURKO0FBRUUsMEJBQUksRUFBQztBQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBbENGLGVBc0NFO0FBQ0UsdUJBQUMsRUFBQywrTkFESjtBQUVFLDBCQUFJLEVBQUM7QUFGUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQXRDRixlQTBDRTtBQUNFLHVCQUFDLEVBQUMsZ09BREo7QUFFRSwwQkFBSSxFQUFDO0FBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0ExQ0YsZUE4Q0U7QUFDRSx1QkFBQyxFQUFDLGdPQURKO0FBRUUsMEJBQUksRUFBQztBQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBOUNGLGVBa0RFO0FBQU0sdUJBQUMsRUFBQztBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBbERGLGVBbURFO0FBQU0sdUJBQUMsRUFBQztBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBbkRGLGVBb0RFO0FBQU0sdUJBQUMsRUFBQztBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBcERGLGVBcURFO0FBQU0sdUJBQUMsRUFBQztBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBckRGLGVBc0RFO0FBQU0sdUJBQUMsRUFBQztBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBdERGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURhLEdBd0ViLEVBM0hKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkF4SUYsZUFzUUUsOERBQUMsa0RBQUQ7QUFBTSxtQkFBSyxFQUFDLE1BQVo7QUFBbUIsc0JBQVEsRUFBQyxJQUE1QjtBQUFpQyx1QkFBUyxFQUFFLENBQTVDO0FBQStDLG1CQUFLLEVBQUVqQixTQUF0RDtBQUFBLHdCQUNHYTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBdFFGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixTQUF1Q00sQ0FBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFUSjtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkYsZUFnU0UsOERBQUMsb0RBQUQ7QUFBUSxvQkFBYyxFQUFDLFFBQXZCO0FBQWdDLFdBQUssRUFBQyxNQUF0QztBQUFBLDZCQUNFLDhEQUFDLGtEQUFEO0FBQVUsWUFBSSxFQUFDLE9BQWY7QUFBdUIsZ0JBQVEsTUFBL0I7QUFBQSwrQkFDRSw4REFBQyxvREFBRDtBQUFRLGlCQUFPLEVBQUUsQ0FBakI7QUFBb0IsWUFBRSxFQUFFSSxrREFBeEI7QUFBOEIsZUFBSyxFQUFFekIsU0FBckM7QUFBQSxrQ0FDRSw4REFBQyxrREFBRDtBQUFNLG9CQUFRLEVBQUMsSUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixlQUlFLDhEQUFDLGlEQUFEO0FBQUssa0JBQU0sRUFBQyxRQUFaO0FBQXFCLGlCQUFLLEVBQUMsUUFBM0I7QUFBQSxtQ0FDRTtBQUNFLG1CQUFLLEVBQUMsNEJBRFI7QUFFRSxxQkFBTyxFQUFDLFdBRlY7QUFHRSxrQkFBSSxFQUFDLGNBSFA7QUFBQSxxQ0FLRTtBQUNFLHdCQUFRLEVBQUMsU0FEWDtBQUVFLGlCQUFDLEVBQUMsOGFBRko7QUFHRSx3QkFBUSxFQUFDO0FBSFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWhTRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQXlURCxDQWpWRDs7QUFtVkEsK0RBQWVILGVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNXQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUdBLE1BQU0rQixrQkFBa0IsR0FBRyxHQUEzQjtBQUNBLE1BQU1oQyxNQUFNLEdBQUcsU0FBZjs7QUFFQSxNQUFNaUMsSUFBcUIsR0FBRy9CLEtBQUssSUFBSTtBQUNyQyxRQUFNO0FBQUVDO0FBQUYsTUFBWUQsS0FBbEI7QUFFQSxRQUFNRSxTQUFTLEdBQUdDLGlFQUFZLEVBQTlCO0FBRUEsc0JBQ0UsOERBQUMsa0RBQUQ7QUFBTSxhQUFTLEVBQUMsUUFBaEI7QUFBeUIsU0FBSyxFQUFDLFFBQS9CO0FBQUEsNEJBQ0UsOERBQUMsa0RBQUQ7QUFBTSxlQUFTLEVBQUUsQ0FBQyxRQUFELEVBQVcsUUFBWCxFQUFxQixLQUFyQixDQUFqQjtBQUFBLDhCQUNFLDhEQUFDLDJEQUFEO0FBQ0UsZUFBTyxFQUFDLEdBRFY7QUFFRSxlQUFPLEVBQUU7QUFDUDZCLG9CQUFVLEVBQUUsQ0FBQyxHQUROO0FBRVBDLGlCQUFPLEVBQUU7QUFGRixTQUZYO0FBTUUsZUFBTyxFQUFFO0FBQ1BELG9CQUFVLEVBQUUsQ0FETDtBQUVQQyxpQkFBTyxFQUFFLENBRkY7QUFHUEMsb0JBQVUsRUFBRTtBQUNWQyxvQkFBUSxFQUFFTDtBQURBO0FBSEwsU0FOWDtBQWFFLFNBQUMsRUFBQyxNQWJKO0FBY0UsVUFBRSxFQUFFLENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxNQUFULENBZE47QUFBQSwrQkFnQkcsOERBQUMscURBQUQ7QUFBUyxrQkFBUSxNQUFqQjtBQUFrQixlQUFLLEVBQUMsSUFBeEI7QUFBNkIsbUJBQVMsRUFBQyxRQUF2QztBQUFBLGlDQUNELDhEQUFDLG9EQUFEO0FBQ0EsMkJBQWUsRUFBRSxhQURqQjtBQUVFLGdCQUFJLEVBQUUsS0FGUixDQUdFO0FBSEY7QUFJRSxlQUFHLEVBQUU7QUFKUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWhCSDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBMEJFLDhEQUFDLDREQUFEO0FBQ0UsVUFBRSxFQUFFLENBQUMsTUFBRCxFQUFTLE1BQVQsRUFBaUIsRUFBakIsQ0FETjtBQUVFLFNBQUMsRUFBRSxDQUFDLE1BQUQsRUFBUyxTQUFULENBRkw7QUFHRSxTQUFDLEVBQUUsQ0FBQyxLQUFELEVBQVEsS0FBUixFQUFlLEtBQWYsQ0FITDtBQUlFLFlBQUksRUFBQyxPQUpQO0FBS0UsZUFBTyxFQUFDLEdBTFY7QUFNRSxlQUFPLEVBQUMsUUFOVjtBQU9FLGlCQUFTLEVBQUMsUUFQWjtBQVFFLGVBQU8sRUFBRTtBQUNQRyxpQkFBTyxFQUFFLENBREY7QUFFUEQsb0JBQVUsRUFBRTtBQUZMLFNBUlg7QUFZRSxlQUFPLEVBQUU7QUFDUEMsaUJBQU8sRUFBRSxDQURGO0FBRVBELG9CQUFVLEVBQUUsQ0FGTDtBQUdQRSxvQkFBVSxFQUFFO0FBQ1ZDLG9CQUFRLEVBQUVMO0FBREE7QUFITCxTQVpYO0FBQUEsZ0NBb0JXLDhEQUFDLDZEQUFEO0FBQVEsd0JBQWMsRUFBRWhDLE1BQXhCO0FBQWdDLGVBQUssRUFBQyxjQUF0QztBQUEyQyxZQUFFLEVBQUUsQ0FBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBcEJYLGVBdUJFLDhEQUFDLGlEQUFEO0FBQUssWUFBRSxFQUFDLElBQVI7QUFBYSxrQkFBUSxFQUFDLEtBQXRCO0FBQTRCLG9CQUFVLEVBQUMsS0FBdkM7QUFBNkMsbUJBQVMsRUFBQyxNQUF2RDtBQUFBLG1DQUNhLEdBRGIsZUFFRSw4REFBQyxpREFBRDtBQUFLLGNBQUUsRUFBQyxRQUFSO0FBQWlCLHNCQUFVLEVBQUMsS0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRkYsRUFJUyxHQUpULGVBS2lCLEdBTGpCLGVBTUUsOERBQUMsaURBQUQ7QUFBSyxjQUFFLEVBQUMsTUFBUjtBQUFlLHNCQUFVLEVBQUMsUUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBTkYsRUFRUyxHQVJULGVBU0UsOERBQUMsaURBQUQ7QUFBSyxjQUFFLEVBQUMsTUFBUjtBQUFlLHNCQUFVLEVBQUMsUUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBVEYsVUFZTyxHQVpQLGVBYUUsOERBQUMsaURBQUQ7QUFBSyxjQUFFLEVBQUMsTUFBUjtBQUFlLHNCQUFVLEVBQUMsUUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQXZCRixlQXdDRSw4REFBQyxpREFBRDtBQUFLLFlBQUUsRUFBQyxJQUFSO0FBQWEsa0JBQVEsRUFBQyxLQUF0QjtBQUE0QixvQkFBVSxFQUFDLEtBQXZDO0FBQTZDLFlBQUUsRUFBRSxDQUFqRDtBQUFvRCxtQkFBUyxFQUFDLE1BQTlEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQXhDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBMUJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQTRFUSw4REFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTVFUixlQThFRSw4REFBQywyREFBRDtBQUNFLE9BQUMsRUFBQyxNQURKO0FBRUUsYUFBTyxFQUFDLEdBRlY7QUFHRSxhQUFPLEVBQUU7QUFDUHNDLGtCQUFVLEVBQUU7QUFETCxPQUhYO0FBTUUsYUFBTyxFQUFFO0FBQ1BBLGtCQUFVLEVBQUUsQ0FETDtBQUVQSCxlQUFPLEVBQUUsQ0FGRjtBQUdQQyxrQkFBVSxFQUFFO0FBQ1ZHLGVBQUssRUFBRVAsa0JBQWtCLEdBQUcsR0FEbEI7QUFFVkssa0JBQVEsRUFBRUw7QUFGQTtBQUhMLE9BTlg7QUFBQSw2QkFlRSw4REFBQyxpREFBRDtBQUFLLFVBQUUsRUFBRSxFQUFUO0FBQUEsZ0NBQ0UsOERBQUMsbURBQUQ7QUFDRSxZQUFFLEVBQUUsRUFETjtBQUVFLFlBQUUsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sRUFBUCxDQUZOO0FBR0UsaUJBQU8sRUFBRSxDQUhYO0FBSUUsZUFBSyxFQUFDLE9BSlI7QUFLRSxvQkFBVSxFQUFDLFdBTGI7QUFNRSxxQkFBVyxFQUFFLFNBTmY7QUFPRSxlQUFLLEVBQUUsVUFQVDtBQVFFLGdCQUFNLEVBQUU7QUFBRUwsa0JBQU0sRUFBRTtBQUFWLFdBUlY7QUFTRSx5QkFBZSxFQUFFcEIsbUVBQWlCLENBQUMsVUFBRCxFQUFhLFNBQWIsQ0FUcEM7QUFVRSxpQkFBTyxFQUFDLElBVlY7QUFXRSxrQkFBUSxFQUFDLElBWFg7QUFBQSxrQ0FhRSw4REFBQyxrREFBRDtBQUFNLHFCQUFTLEVBQUMsUUFBaEI7QUFBeUIsaUJBQUssRUFBQyxTQUEvQjtBQUF5QyxzQkFBVSxFQUFDLE1BQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQWJGLGVBZ0JFLDhEQUFDLDJEQUFEO0FBQWUscUJBQVMsRUFBQyxNQUF6QjtBQUFnQyx1QkFBVyxFQUFFLENBQTdDO0FBQWdELGFBQUMsRUFBRSxDQUFuRDtBQUFBLG9DQUNFLDhEQUFDLHNEQUFEO0FBQUEscUNBQ0UsOERBQUMsa0RBQUQ7QUFBVSxvQkFBSSxFQUFFLE9BQWhCO0FBQXlCLHdCQUFRLE1BQWpDO0FBQUEsdUNBQ0UsOERBQUMsa0RBQUQ7QUFBTSx1QkFBSyxFQUFFSCxTQUFiO0FBQUEsdURBRUUsOERBQUMsbURBQUQ7QUFBTyxzQkFBRSxFQUFDLEdBQVY7QUFBYywrQkFBVyxFQUFDLE9BQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLGVBV0UsOERBQUMsc0RBQUQ7QUFBQSxxQ0FDRSw4REFBQyxrREFBRDtBQUFVLG9CQUFJLEVBQUUsY0FBaEI7QUFBZ0Msd0JBQVEsTUFBeEM7QUFBQSx1Q0FDRSw4REFBQyxrREFBRDtBQUFNLHVCQUFLLEVBQUVBLFNBQWI7QUFBQSx5REFFRSw4REFBQyxtREFBRDtBQUFPLHNCQUFFLEVBQUMsR0FBVjtBQUFjLCtCQUFXLEVBQUMsTUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBWEYsZUFxQkUsOERBQUMsc0RBQUQ7QUFBQSxxQ0FDRSw4REFBQyxrREFBRDtBQUFVLG9CQUFJLEVBQUUsV0FBaEI7QUFBNkIsd0JBQVEsTUFBckM7QUFBQSx1Q0FDRSw4REFBQyxrREFBRDtBQUFNLHVCQUFLLEVBQUVBLFNBQWI7QUFBQSwyREFFQSw4REFBQyxtREFBRDtBQUFPLHNCQUFFLEVBQUMsR0FBVjtBQUFjLCtCQUFXLEVBQUMsS0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBckJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFoQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBa0RFLDhEQUFDLHFEQUFEO0FBQWlCLGVBQUssRUFBRUQ7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFsREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBZkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkE5RUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFxSkQsQ0ExSkQ7O0FBNEpBLCtEQUFlOEIsSUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0TEE7QUFFQTs7QUFPQSxNQUFNTyxNQUFNLEdBQUc7QUFBQSxNQUFDO0FBQUVDLFlBQUY7QUFBWUMsa0JBQVo7QUFBNEJDO0FBQTVCLEdBQUQ7QUFBQSxNQUF1Q3pDLEtBQXZDOztBQUFBLHNCQUNiLDhEQUFDLGlEQUFEO0FBQUssTUFBRSxFQUFDLElBQVI7QUFBYSxNQUFFLEVBQUUsRUFBakI7QUFBcUIsTUFBRSxFQUFFLENBQXpCO0FBQTRCLFlBQVEsRUFBQyxLQUFyQztBQUEyQyxjQUFVLEVBQUMsU0FBdEQ7QUFBZ0UsY0FBVSxFQUFDO0FBQTNFLEtBQXNGQSxLQUF0RjtBQUE2RixhQUFTLEVBQUMsTUFBdkc7QUFBQSw0QkFDRSw4REFBQyxrRUFBRDtBQUFnQixXQUFLLEVBQUV3QyxjQUF2QjtBQUFBLGdCQUF3Q0Q7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixFQUVHRSxLQUFLLEdBQUcsTUFBTUEsS0FBVCxHQUFpQixFQUZ6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEYTtBQUFBLENBQWY7O0FBTUEsK0RBQWVILE1BQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7O0FBU0EsTUFBTUksSUFBSSxHQUFHLENBQUM7QUFBRXhCLE9BQUY7QUFBU3lCLFVBQVQ7QUFBbUIxQixhQUFuQjtBQUFnQzJCO0FBQWhDLENBQUQsS0FBa0U7QUFDN0UxQixPQUFLLEdBQUdBLEtBQUssQ0FBQzJCLFFBQU4sQ0FBZSxNQUFmLElBQXlCM0IsS0FBekIsR0FBaUNBLEtBQUssQ0FBQzRCLE1BQU4sQ0FBYSxlQUFiLENBQXpDO0FBQ0Esc0JBQ0UsOERBQUMsa0RBQUQ7QUFBQSw0QkFDRTtBQUFNLFVBQUksRUFBQyxVQUFYO0FBQXNCLGFBQU8sRUFBQztBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUU7QUFBTSxhQUFPLEVBQUM7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGLGVBR0U7QUFBTSxVQUFJLEVBQUMsVUFBWDtBQUFzQixhQUFPLEVBQUVIO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEYsZUFJRTtBQUFNLFVBQUksRUFBQyxhQUFYO0FBQXlCLGFBQU8sRUFBRTFCO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkYsZUFLRTtBQUFNLGNBQVEsRUFBQyxVQUFmO0FBQTBCLGFBQU8sRUFBRUM7QUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMRixlQU1FO0FBQU0sY0FBUSxFQUFDLFVBQWY7QUFBMEIsYUFBTyxFQUFFMEIsS0FBSyxHQUFHQSxLQUFILEdBQVc7QUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFORixlQU9FO0FBQUEsZ0JBQVExQjtBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFXRCxDQWJEOztBQWVBd0IsSUFBSSxDQUFDSyxZQUFMLEdBQW9CO0FBQ2xCN0IsT0FBSyxFQUFFLCtCQURXO0FBRWxCeUIsVUFBUSxFQUFFLDZCQUZRO0FBR2xCMUIsYUFBVyxFQUFFO0FBSEssQ0FBcEI7QUFNQSwrREFBZXlCLElBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUJBO0FBQ0E7QUFDQTtBQVVBLE1BQU1NLFFBQVEsR0FBRztBQUNmQyxRQUFNLEVBQUU7QUFBRWhCLFdBQU8sRUFBRSxDQUFYO0FBQWNpQixLQUFDLEVBQUUsQ0FBQyxHQUFsQjtBQUF1QjFCLEtBQUMsRUFBRTtBQUExQixHQURPO0FBRWYyQixPQUFLLEVBQUU7QUFBRWxCLFdBQU8sRUFBRSxDQUFYO0FBQWNpQixLQUFDLEVBQUUsQ0FBakI7QUFBb0IxQixLQUFDLEVBQUU7QUFBdkIsR0FGUTtBQUdmNEIsTUFBSSxFQUFFO0FBQUVuQixXQUFPLEVBQUUsQ0FBWDtBQUFjaUIsS0FBQyxFQUFFLENBQWpCO0FBQW9CMUIsS0FBQyxFQUFFLENBQUM7QUFBeEI7QUFIUyxDQUFqQjs7QUFNQSxNQUFNNkIsVUFBVSxHQUFHLENBQUM7QUFDbEJkLFVBRGtCO0FBRWxCckIsT0FGa0I7QUFHbEJELGFBSGtCO0FBSWxCMEIsVUFKa0I7QUFLbEJDO0FBTGtCLENBQUQsa0JBT2pCLDhEQUFDLDJDQUFEO0FBQUEsMEJBQ0UsOERBQUMsMENBQUQ7QUFDRSxTQUFLLEVBQUUxQixLQURUO0FBRUUsZUFBVyxFQUFFRCxXQUZmO0FBR0UsWUFBUSxFQUFFMEIsUUFIWjtBQUlFLFNBQUssRUFBRUM7QUFKVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFPRSw4REFBQyxzREFBRDtBQUNFLFdBQU8sRUFBQyxRQURWO0FBRUUsV0FBTyxFQUFDLE9BRlY7QUFHRSxRQUFJLEVBQUMsTUFIUDtBQUlFLFlBQVEsRUFBRUksUUFKWjtBQUtFLGNBQVUsRUFBRTtBQUFFTSxVQUFJLEVBQUU7QUFBUixLQUxkO0FBQUEsY0FPR2Y7QUFQSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUEY7O0FBMEJBLCtEQUFlYyxVQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1Q0E7QUFRQTtBQUVPLE1BQU1FLFNBQVMsR0FBR0MscURBQU0sQ0FDN0JDLDREQUFVLENBQUMsQ0FBQ3pELEtBQUQsRUFBUTBELEdBQVIsS0FBZ0I7QUFDekIsUUFBTUMsV0FBVyxHQUFHQyxNQUFNLENBQUNDLFdBQVAsRUFDbEI7QUFDQUQsUUFBTSxDQUFDRSxPQUFQLENBQWU5RCxLQUFmLEVBQXNCK0QsTUFBdEIsQ0FBNkIsQ0FBQyxDQUFDQyxHQUFELENBQUQsS0FBVyxDQUFDQyxnRUFBaUIsQ0FBQ0QsR0FBRCxDQUExRCxDQUZrQixDQUFwQjtBQUlBLHNCQUFPLDhEQUFDLGlEQUFEO0FBQUssT0FBRyxFQUFFTjtBQUFWLEtBQW1CQyxXQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFDRCxDQU5TLENBRG1CLENBQXhCO0FBVUEsTUFBTU8sVUFBVSxHQUFHVixxREFBTSxDQUM5QkMsNERBQVUsQ0FBQyxDQUFDekQsS0FBRCxFQUFRMEQsR0FBUixLQUFnQjtBQUN6QixRQUFNQyxXQUFXLEdBQUdDLE1BQU0sQ0FBQ0MsV0FBUCxFQUNsQjtBQUNBRCxRQUFNLENBQUNFLE9BQVAsQ0FBZTlELEtBQWYsRUFBc0IrRCxNQUF0QixDQUE2QixDQUFDLENBQUNDLEdBQUQsQ0FBRCxLQUFXLENBQUNDLGdFQUFpQixDQUFDRCxHQUFELENBQTFELENBRmtCLENBQXBCO0FBSUEsc0JBQU8sOERBQUMsa0RBQUQ7QUFBTSxPQUFHLEVBQUVOO0FBQVgsS0FBb0JDLFdBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQUNELENBTlMsQ0FEb0IsQ0FBekI7QUFVQSxNQUFNUSxVQUFVLEdBQUdYLHFEQUFNLENBQzlCQyw0REFBVSxDQUFDLENBQUN6RCxLQUFELEVBQVEwRCxHQUFSLEtBQWdCO0FBQ3pCLFFBQU1DLFdBQVcsR0FBR0MsTUFBTSxDQUFDQyxXQUFQLEVBQ2xCO0FBQ0FELFFBQU0sQ0FBQ0UsT0FBUCxDQUFlOUQsS0FBZixFQUFzQitELE1BQXRCLENBQTZCLENBQUMsQ0FBQ0MsR0FBRCxDQUFELEtBQVcsQ0FBQ0MsZ0VBQWlCLENBQUNELEdBQUQsQ0FBMUQsQ0FGa0IsQ0FBcEI7QUFJQSxzQkFBTyw4REFBQyxrREFBRDtBQUFNLE9BQUcsRUFBRU47QUFBWCxLQUFvQkMsV0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBQ0QsQ0FOUyxDQURvQixDQUF6QjtBQVVBLE1BQU1TLFVBQVUsR0FBR1oscURBQU0sQ0FDOUJDLDREQUFVLENBQUMsQ0FBQ3pELEtBQUQsRUFBUTBELEdBQVIsS0FBZ0I7QUFDekIsUUFBTUMsV0FBVyxHQUFHQyxNQUFNLENBQUNDLFdBQVAsRUFDbEI7QUFDQUQsUUFBTSxDQUFDRSxPQUFQLENBQWU5RCxLQUFmLEVBQXNCK0QsTUFBdEIsQ0FBNkIsQ0FBQyxDQUFDQyxHQUFELENBQUQsS0FBVyxDQUFDQyxnRUFBaUIsQ0FBQ0QsR0FBRCxDQUExRCxDQUZrQixDQUFwQjtBQUlBLHNCQUFPLDhEQUFDLGtEQUFEO0FBQU0sT0FBRyxFQUFFTjtBQUFYLEtBQW9CQyxXQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFDRCxDQU5TLENBRG9CLENBQXpCO0FBVUEsTUFBTVUsV0FBVyxHQUFHYixxREFBTSxDQUMvQkMsNERBQVUsQ0FBQyxDQUFDekQsS0FBRCxFQUFRMEQsR0FBUixLQUFnQjtBQUN6QixRQUFNQyxXQUFXLEdBQUdDLE1BQU0sQ0FBQ0MsV0FBUCxDQUNsQkQsTUFBTSxDQUFDRSxPQUFQLENBQWU5RCxLQUFmLEVBQXNCK0QsTUFBdEIsQ0FBNkIsQ0FBQyxDQUFDQyxHQUFELENBQUQsS0FBVyxDQUFDQyxnRUFBaUIsQ0FBQ0QsR0FBRCxDQUExRCxDQURrQixDQUFwQjtBQUdBLHNCQUNJLDhEQUFDLG1EQUFEO0FBQ0UsT0FBRyxFQUFFTixHQURQO0FBRUUsZUFBVyxFQUFFO0FBRmYsS0FHTUMsV0FITjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFPRCxDQVhTLENBRHFCLENBQTFCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbERQO0FBQ0E7QUFFQSxNQUFNVyxlQUFlLEdBQUc7QUFDdEJDLFNBQU8sRUFBRTtBQUNQdEMsV0FBTyxFQUFFLENBREY7QUFFUEcsY0FBVSxFQUFFLENBQUM7QUFGTixHQURhO0FBS3RCZSxPQUFLLEVBQUU7QUFDTGpCLGNBQVUsRUFBRTtBQUFFc0MscUJBQWUsRUFBRSxJQUFuQjtBQUF5QkMsbUJBQWEsRUFBRTtBQUF4QztBQURQLEdBTGU7QUFRdEJyQixNQUFJLEVBQUU7QUFDSmxCLGNBQVUsRUFBRTtBQUFFc0MscUJBQWUsRUFBRSxJQUFuQjtBQUF5QkUsc0JBQWdCLEVBQUUsQ0FBQztBQUE1QztBQURSO0FBUmdCLENBQXhCO0FBYUEsTUFBTTFCLFFBQVEsR0FBRztBQUNmdUIsU0FBTyxFQUFFO0FBQ1B0QyxXQUFPLEVBQUUsQ0FERjtBQUVQRyxjQUFVLEVBQUUsQ0FBQztBQUZOLEdBRE07QUFLZmUsT0FBSyxFQUFFO0FBQ0wzQixLQUFDLEVBQUUsQ0FERTtBQUVMUyxXQUFPLEVBQUUsQ0FGSjtBQUdMQyxjQUFVLEVBQUU7QUFDVlYsT0FBQyxFQUFFO0FBQUVtRCxpQkFBUyxFQUFFLElBQWI7QUFBbUJDLGdCQUFRLEVBQUUsQ0FBQztBQUE5QjtBQURPO0FBSFAsR0FMUTtBQVlmeEIsTUFBSSxFQUFFO0FBQ0o1QixLQUFDLEVBQUUsRUFEQztBQUVKUyxXQUFPLEVBQUUsQ0FGTDtBQUdKQyxjQUFVLEVBQUU7QUFDVlYsT0FBQyxFQUFFO0FBQUVtRCxpQkFBUyxFQUFFO0FBQWI7QUFETztBQUhSO0FBWlMsQ0FBakI7QUFxQk8sTUFBTUUsTUFBTSxHQUFHLENBQUMsR0FBRCxFQUFNLENBQUMsSUFBUCxFQUFhLElBQWIsRUFBbUIsSUFBbkIsQ0FBZjtBQUVBLE1BQU1DLE9BQU8sR0FBRztBQUNyQkMsU0FBTyxFQUFFO0FBQ1A3QyxjQUFVLEVBQUU7QUFDVnNDLHFCQUFlLEVBQUU7QUFEUDtBQURMO0FBRFksQ0FBaEI7QUFRQSxNQUFNUSxRQUFRLEdBQUc7QUFDdEJULFNBQU8sRUFBRTtBQUNQL0MsS0FBQyxFQUFFLEVBREk7QUFFUFMsV0FBTyxFQUFFLENBRkY7QUFHUEMsY0FBVSxFQUFFO0FBQUVDLGNBQVEsRUFBRSxHQUFaO0FBQWlCOEMsVUFBSSxFQUFFSjtBQUF2QjtBQUhMLEdBRGE7QUFNdEJFLFNBQU8sRUFBRTtBQUNQdkQsS0FBQyxFQUFFLENBREk7QUFFUFMsV0FBTyxFQUFFLENBRkY7QUFHUEMsY0FBVSxFQUFFO0FBQ1ZDLGNBQVEsRUFBRSxHQURBO0FBRVY4QyxVQUFJLEVBQUVKO0FBRkk7QUFITDtBQU5hLENBQWpCO0FBaUJBLE1BQU1LLFNBQVMsR0FBRztBQUN2QmpDLFFBQU0sRUFBRTtBQUFFaEIsV0FBTyxFQUFFLENBQVg7QUFBY2tELFNBQUssRUFBRTtBQUFyQixHQURlO0FBRXZCQyxTQUFPLEVBQUU7QUFDUG5ELFdBQU8sRUFBRSxDQURGO0FBRVBrRCxTQUFLLEVBQUUsQ0FGQTtBQUdQakQsY0FBVSxFQUFFO0FBQ1Z1QyxtQkFBYSxFQUFFLEdBREw7QUFFVkQscUJBQWUsRUFBRTtBQUZQO0FBSEw7QUFGYyxDQUFsQjtBQVlBLE1BQU1hLElBQUksR0FBRztBQUNsQnBDLFFBQU0sRUFBRTtBQUFFekIsS0FBQyxFQUFFLEVBQUw7QUFBU1MsV0FBTyxFQUFFO0FBQWxCLEdBRFU7QUFFbEJtRCxTQUFPLEVBQUU7QUFDUDVELEtBQUMsRUFBRSxDQURJO0FBRVBTLFdBQU8sRUFBRTtBQUZGO0FBRlMsQ0FBYjtBQVFBLE1BQU1xRCxhQUFhLEdBQUcsQ0FBQztBQUFFL0M7QUFBRixDQUFELEtBQWtCO0FBQzdDLHNCQUFPLDhEQUFDLHVEQUFEO0FBQVcsTUFBRSxNQUFiO0FBQUEsY0FBZUE7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFDRCxDQUZNO0FBSUEsTUFBTWdELGVBQWUsR0FBRyxDQUFDO0FBQUVoRDtBQUFGLENBQUQsS0FBa0I7QUFDL0Msc0JBQ0UsOERBQUMsOENBQUQ7QUFDRSxXQUFPLEVBQUU7QUFDUE4sYUFBTyxFQUFFLENBREY7QUFFUEcsZ0JBQVUsRUFBRTtBQUZMLEtBRFg7QUFLRSxZQUFRLEVBQUVrQyxlQUxaO0FBQUEsY0FPRy9CO0FBUEg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBV0QsQ0FaTTtBQWNBLE1BQU1pRCxjQUFjLEdBQUcsQ0FBQztBQUFFakQ7QUFBRixDQUFELEtBQWtCO0FBQzlDLHNCQUFPLDhEQUFDLDhDQUFEO0FBQVcsWUFBUSxFQUFFUyxRQUFyQjtBQUFBLGNBQWdDVDtBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFDRCxDQUZNLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RHUDtBQUNBO0FBRU8sTUFBTWtELFVBQVUsR0FBRztBQUN4QkMsT0FBSyxFQUFFLFlBRGlCO0FBRXhCQyxNQUFJLEVBQUUsWUFGa0I7QUFHeEJDLGNBQVksRUFBRSxZQUhVO0FBSXhCQyxhQUFXLEVBQUU7QUFKVyxDQUFuQjtBQU9BLFNBQVMxRixZQUFULEdBQXdCO0FBQzdCLFNBQU9FLG1FQUFpQixDQUFDb0YsVUFBVSxDQUFDQyxLQUFaLEVBQW1CRCxVQUFVLENBQUNFLElBQTlCLENBQXhCO0FBQ0Q7QUFFTSxTQUFTRyxtQkFBVCxHQUErQjtBQUNwQyxTQUFPekYsbUVBQWlCLENBQUNvRixVQUFVLENBQUNHLFlBQVosRUFBMEJILFVBQVUsQ0FBQ0ksV0FBckMsQ0FBeEI7QUFDRDtBQUVNLFNBQVNFLG9CQUFULENBQ0xDLFNBREssRUFFTEMsS0FGSyxFQUdMO0FBQ0EsU0FBT0QsU0FBUyxJQUFJRSxzRUFBYyxDQUFFRCxLQUFLLENBQUNFLE1BQVAsQ0FBc0JILFNBQXRCLEVBQWlDLEdBQWpDLENBQUQsRUFBd0MsR0FBeEMsQ0FBZCxDQUEyREMsS0FBM0QsQ0FBcEI7QUFDRDtBQUVNLE1BQU1FLE1BQU0sbUNBQ2RDLDBEQURjO0FBRWpCQyxNQUFJLGtDQUNDRCwrREFERDtBQUVGLFVBQU07QUFGSixJQUZhO0FBTWpCRSxlQUFhLEVBQUU7QUFDYixRQUFJLFNBRFM7QUFFYixTQUFLLFNBRlE7QUFHYixTQUFLLFNBSFE7QUFJYixTQUFLLFNBSlE7QUFLYixTQUFLLFNBTFE7QUFNYixTQUFLLFNBTlE7QUFPYixTQUFLLFNBUFE7QUFRYixTQUFLLFNBUlE7QUFTYixTQUFLLFNBVFE7QUFVYixTQUFLO0FBVlEsR0FORTtBQWtCakJDLFFBQU0sRUFBRTtBQUNOO0FBQ0EsUUFBSSx5QkFGRTtBQUdOLFNBQUssMEJBSEM7QUFJTixTQUFLLDBCQUpDO0FBS04sU0FBSywwQkFMQztBQU1OLFNBQUssMEJBTkM7QUFPTixTQUFLLDBCQVBDO0FBUU4sU0FBSywwQkFSQztBQVNOLFNBQUssMEJBVEM7QUFVTixTQUFLLDBCQVZDO0FBV04sU0FBSztBQVhDO0FBbEJTLEVBQVo7QUFtQ0EsTUFBTUMsVUFBdUIsR0FBRyxDQUNyQyxlQURxQyxFQUVyQyxPQUZxQyxFQUdyQyxNQUhxQyxFQUlyQyxRQUpxQyxFQUtyQyxNQUxxQyxFQU1yQyxNQU5xQyxFQU9yQyxNQVBxQyxFQVFyQyxRQVJxQyxFQVNyQyxLQVRxQyxDQUFoQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1RFA7QUFDQTtBQUNBO0NBRUE7O0FBQ0E7QUFHTyxTQUFTQyxTQUFULENBQW1CQyxTQUF3QixHQUFHLEVBQTlDLEVBQWtEO0FBQ3ZELFFBQU1ULEtBQUssR0FBR1UsNkRBQVcsaUNBQ3BCQyxhQURvQjtBQUV2QlQsVUFBTUE7QUFGaUIsS0FBekI7QUFJQSxTQUFPVSwyREFBUyxDQUFDWixLQUFELEVBQVFTLFNBQVIsQ0FBaEI7QUFDRDtBQUVNLE1BQU1FLGFBQWEsR0FBR0QsNkRBQVcsQ0FBQztBQUN2Q0csT0FBSyxFQUFFO0FBQ0xDLFFBQUksRUFBRztBQURGLEdBRGdDO0FBSXZDQyxRQUFNLEVBQUU7QUFDTkMsVUFBTSxFQUFHakgsS0FBRCxLQUFZO0FBQ2xCK0csVUFBSSxFQUFFO0FBQ0pHLGFBQUssRUFBRUMsNERBQUksQ0FBQyxVQUFELEVBQWEsZ0JBQWIsQ0FBSixDQUFtQ25ILEtBQW5DLENBREg7QUFFSm9ILFVBQUUsRUFBRUQsNERBQUksQ0FBQyxTQUFELEVBQVksVUFBWixDQUFKLENBQTRCbkgsS0FBNUIsQ0FGQTtBQUdKcUgsZ0JBQVEsRUFBRSxPQUhOO0FBSUosb0JBQVk7QUFDVkgsZUFBSyxFQUFFLG9CQURHO0FBRVZJLG1CQUFTLEVBQUU7QUFGRCxTQUpSO0FBUUoscUJBQWE7QUFDWEosZUFBSyxFQUFFLG9CQURJO0FBRVhJLG1CQUFTLEVBQUU7QUFGQTtBQVJULE9BRFk7QUFjbEIvRyxPQUFDLEVBQUU7QUFDRDJHLGFBQUssRUFBRUMsNERBQUksQ0FBQyxVQUFELEVBQWEsVUFBYixDQUFKLENBQTZCbkgsS0FBN0IsQ0FETjtBQUVEa0Msa0JBQVUsRUFBRSxhQUZYO0FBR0RxRixnQ0FBd0IsRUFBRSxVQUh6QjtBQUlEQyxrQkFBVSxFQUFFLEtBSlg7QUFLREMsY0FBTSxFQUFFO0FBQ05QLGVBQUssRUFBRUMsNERBQUksQ0FBQyxVQUFELEVBQWEsVUFBYixDQUFKLENBQTZCbkgsS0FBN0I7QUFERDtBQUxQO0FBZGUsS0FBWjtBQURGLEdBSitCO0FBOEJ2QzBILFlBQVUsRUFBRTtBQUNWQyxXQUFPLEVBQUU7QUFDUEMsV0FBSyxFQUFFLENBQUMsUUFBRCxDQURBO0FBRVBDLGVBQVMsRUFBRTdILEtBQUssS0FBSztBQUNuQjhILGNBQU0sRUFBRTtBQUNOQyxnQkFBTSxFQUFFLEVBREY7QUFFTkMsY0FBSSxFQUFFLElBRkE7QUFHTjtBQUNBQyxXQUFDLEVBQUVqSSxLQUFLLENBQUNrSTtBQUpIO0FBRFcsT0FBTDtBQUZULEtBREM7QUFZVkMsVUFBTSxFQUFFO0FBQ05OLGVBQVMsRUFBRTtBQUNUTCxrQkFBVSxFQUFFLEtBREg7QUFFVFksZUFBTyxFQUFFO0FBRkE7QUFETCxLQVpFO0FBa0JWQyxPQUFHLEVBQUU7QUFDSFIsZUFBUyxFQUFFO0FBQ1RPLGVBQU8sRUFBRTtBQURBO0FBRFIsS0FsQks7QUF1QlZFLFlBQVEsRUFBRTtBQUNSVCxlQUFTLEVBQUU7QUFDVFUsa0JBQVUsRUFBRTtBQURIO0FBREgsS0F2QkE7QUE0QlY1RyxRQUFJLEVBQUU7QUFDSmtHLGVBQVMsRUFBRTtBQUNUTCxrQkFBVSxFQUFFLFNBREg7QUFFVEMsY0FBTSxFQUFFO0FBQ04vRix3QkFBYyxFQUFFO0FBRFYsU0FGQztBQUtUOEcsY0FBTSxFQUFFO0FBQ05DLG1CQUFTLEVBQUU7QUFETDtBQUxDLE9BRFA7QUFVSnpGLGNBQVEsRUFBRTtBQUNSMEYsWUFBSSxFQUFFO0FBQ0p4QixlQUFLLEVBQUUsVUFESDtBQUVKaEYsb0JBQVUsRUFBRSxhQUZSO0FBR0pxRixrQ0FBd0IsRUFBRSxVQUh0QjtBQUlKQyxvQkFBVSxFQUFFLEtBSlI7QUFLSkMsZ0JBQU0sRUFBRTtBQUNOUCxpQkFBSyxFQUFFO0FBREQ7QUFMSixTQURFO0FBVVJ5QixnQkFBUSxFQUFFO0FBQ1JDLG9CQUFVLEVBQUUsa0NBREo7QUFFUkMsZ0JBQU0sRUFBRSxNQUZBO0FBR1JyQixvQkFBVSxFQUFFLEtBSEo7QUFJUkMsZ0JBQU0sRUFBRTtBQUNObUIsc0JBQVUsRUFBRSxrQ0FETjtBQUVOQyxrQkFBTSxFQUFFO0FBRkY7QUFKQTtBQVZGO0FBVk47QUE1QkksR0E5QjJCO0FBMEZ2Q0MsS0FBRyxFQUFFO0FBQ0hDLE1BQUUsRUFBRTtBQUNGQyxRQUFFLEVBQUUsTUFERjtBQUVGQyxRQUFFLEVBQUUsUUFGRjtBQUdGQyxnQkFBVSxFQUFFLEdBSFY7QUFJRjFCLGdCQUFVLEVBQUUsTUFKVjtBQUtGSCxjQUFRLEVBQUUsVUFMUjtBQU1GOEIsbUJBQWEsRUFBRTtBQU5iLEtBREQ7QUFTSEMsTUFBRSxFQUFFO0FBQ0ZKLFFBQUUsRUFBRSxNQURGO0FBRUZDLFFBQUUsRUFBRSxRQUZGO0FBR0ZDLGdCQUFVLEVBQUUsR0FIVjtBQUlGMUIsZ0JBQVUsRUFBRSxVQUpWO0FBS0ZILGNBQVEsRUFBRSxRQUxSO0FBTUYsZ0JBQVU7QUFDUjJCLFVBQUUsRUFBRTtBQURJO0FBTlIsS0FURDtBQW1CSEssTUFBRSxFQUFFO0FBQ0ZMLFFBQUUsRUFBRSxNQURGO0FBRUY7QUFDQUUsZ0JBQVUsRUFBRSxJQUhWO0FBSUYxQixnQkFBVSxFQUFFLFVBSlY7QUFLRkgsY0FBUSxFQUFFO0FBTFIsS0FuQkQ7QUEwQkhpQyxNQUFFLEVBQUU7QUFDRk4sUUFBRSxFQUFFLE1BREY7QUFFRkUsZ0JBQVUsRUFBRSxLQUZWO0FBR0YxQixnQkFBVSxFQUFFLFVBSFY7QUFJRkgsY0FBUSxFQUFFO0FBSlIsS0ExQkQ7QUFnQ0hrQyxLQUFDLEVBQUU7QUFDRFAsUUFBRSxFQUFFLFNBREg7QUFFREUsZ0JBQVUsRUFBRSxHQUZYO0FBR0Qsc0JBQWdCO0FBQ2RGLFVBQUUsRUFBRTtBQURVO0FBSGYsS0FoQ0E7QUF1Q0hRLE1BQUUsRUFBRTtBQUNGQyxRQUFFLEVBQUU7QUFERixLQXZDRDtBQTBDSEMsY0FBVSxFQUFFO0FBQ1Z0QyxRQUFFLEVBQUUsWUFETTtBQUVWdUMsaUJBQVcsRUFBRSxLQUZIO0FBR1ZDLGlCQUFXLEVBQUUsWUFISDtBQUlWeEIsYUFBTyxFQUFFLElBSkM7QUFLVnlCLFFBQUUsRUFBRSxTQUxNO0FBTVZDLFFBQUUsRUFBRSxNQU5NO0FBT1ZMLFFBQUUsRUFBRTtBQVBNLEtBMUNUO0FBbURITSxNQUFFLEVBQUU7QUFDRmYsUUFBRSxFQUFFLFFBREY7QUFFRmdCLFFBQUUsRUFBRSxTQUZGO0FBR0Ysc0JBQWdCO0FBQUVoQixVQUFFLEVBQUU7QUFBTixPQUhkO0FBSUYsbUJBQWE7QUFDWEEsVUFBRSxFQUFFO0FBRE87QUFKWCxLQW5ERDtBQTJESGlCLFFBQUksRUFBRTtBQUNKN0IsYUFBTyxFQUFFLElBREw7QUFFSnlCLFFBQUUsRUFBRSxHQUZBO0FBR0p4QyxjQUFRLEVBQUUsU0FITjtBQUlKeUMsUUFBRSxFQUFFLEtBSkE7QUFLSkksZ0JBQVUsRUFBRSxRQUxSO0FBTUpoQixnQkFBVSxFQUFFO0FBTlI7QUEzREg7QUExRmtDLENBQUQsQ0FBakM7QUFnS0EsTUFBTWlCLFdBQVcsR0FBRzdHLElBQUksSUFBSTtBQUNqQ0EsTUFBSSxHQUFHQSxJQUFJLENBQUM4RyxXQUFMLEVBQVA7O0FBQ0EsTUFBSTlHLElBQUksS0FBSyxPQUFULElBQW9CQSxJQUFJLEtBQUssTUFBakMsRUFBeUM7QUFDdkMsV0FBTyxLQUFQO0FBQ0QsR0FGRCxNQUVPLElBQUlBLElBQUksS0FBSyxPQUFiLEVBQXNCO0FBQzNCLFdBQU8sTUFBUDtBQUNELEdBRk0sTUFFQSxJQUFJQSxJQUFJLEtBQUssWUFBYixFQUEyQjtBQUNoQyxXQUFPLFFBQVA7QUFDRCxHQUZNLE1BRUEsSUFBSUEsSUFBSSxLQUFLLFlBQVQsSUFBeUJBLElBQUksS0FBSyxhQUF0QyxFQUFxRDtBQUMxRCxXQUFPLE1BQVA7QUFDRCxHQUZNLE1BRUEsSUFBSUEsSUFBSSxLQUFLLFVBQVQsSUFBdUJBLElBQUksS0FBSyxLQUFwQyxFQUEyQztBQUNoRCxXQUFPLE1BQVA7QUFDRDtBQUNGLENBYk07QUFlQSxNQUFNMkMsS0FBSyxHQUFHUSxTQUFTLEVBQXZCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlMUDs7QUFPQSxNQUFNNEQsY0FBYyxHQUFJckssS0FBRCxpQkFDckIsOERBQUMsaURBQUQ7QUFBSyxJQUFFLEVBQUMsTUFBUjtBQUFlLFNBQU8sRUFBQyxjQUF2QjtBQUFzQyxVQUFRLEVBQUMsVUFBL0M7QUFBQSxhQUNHQSxLQUFLLENBQUN1QyxRQURULGVBRUUsOERBQUMsaURBQUQ7QUFBSyxNQUFFLEVBQUMsTUFBUjtBQUFlLFdBQU8sRUFBQyxPQUF2QjtBQUErQixZQUFRLEVBQUMsVUFBeEM7QUFBbUQsTUFBRSxFQUFFLFVBQXZEO0FBQW1FLEtBQUMsRUFBRSxNQUF0RTtBQUE4RSxLQUFDLEVBQUV2QyxLQUFLLENBQUNzSyxDQUFOLElBQVcsS0FBNUY7QUFBbUcsVUFBTSxFQUFFLENBQUM7QUFBNUc7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGOztBQU1BLCtEQUFlRCxjQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7QUFhQTtBQUNBO0FBR0E7O0FBR0E7QUFDQTs7QUFJQSxNQUFNRSxNQUFnQixHQUFHLE1BQU07QUFBQTs7QUFFN0IsUUFBTTtBQUFFQyxXQUFGO0FBQVdDO0FBQVgsTUFBc0JDLDZEQUFVLENBQUM7QUFDckNDLFVBRHFDO0FBRXJDQyxVQUFNLEVBQUU7QUFGNkIsR0FBRCxDQUF0Qzs7QUFLQSxRQUFNQyxXQUFXLEdBQUcsTUFBTTtBQUN4QixRQUFJLENBQUFKLE1BQU0sU0FBTixJQUFBQSxNQUFNLFdBQU4sWUFBQUEsTUFBTSxDQUFFSyxvQkFBUixNQUFpQyxJQUFyQyxFQUEyQztBQUN6QyxZQUFNO0FBQUVDLFlBQUY7QUFBUUMsY0FBUjtBQUFnQkM7QUFBaEIsVUFBMEJSLE1BQU0sQ0FBQ1MsT0FBUCxJQUFrQixFQUFsRDtBQUVBLGFBQU87QUFDTEMsWUFBSSxFQUFFSixJQUREO0FBRUxLLGVBQU8sRUFBRyxNQUFLSixNQUFPLEVBRmpCO0FBR0xLLGFBQUssRUFBRyxNQUFLSixLQUFNO0FBSGQsT0FBUDtBQUtEO0FBQ0YsR0FWRDs7QUFZQSxRQUFNSyxRQUFRLEdBQUcsTUFBTTtBQUNyQixRQUFJLENBQUNkLE9BQUQsSUFBWSxDQUFBQyxNQUFNLFNBQU4sSUFBQUEsTUFBTSxXQUFOLFlBQUFBLE1BQU0sQ0FBRUssb0JBQVIsTUFBaUMsSUFBakQsRUFBdUQ7QUFDckQsWUFBTVMsUUFBUSxHQUFHZCxNQUFNLENBQUNTLE9BQXhCO0FBRUEsYUFBTztBQUNMTSxrQkFBVSxFQUFFRCxRQUFGLGFBQUVBLFFBQUYsdUJBQUVBLFFBQVEsQ0FBRUU7QUFEakIsT0FBUDtBQUdELEtBTkQsTUFNTztBQUNMLFlBQU1GLFFBQVEsR0FBR1YsV0FBVyxFQUE1QjtBQUVBLFlBQU07QUFBRWE7QUFBRixVQUFxQkgsUUFBUSxJQUFJLEVBQXZDO0FBQ0EsWUFBTTtBQUFFSSxtQkFBRjtBQUFlQztBQUFmLFVBQStCLENBQUFMLFFBQVEsU0FBUixJQUFBQSxRQUFRLFdBQVIsWUFBQUEsUUFBUSxDQUFFTSxNQUFWLEtBQW9CLEVBQXpEO0FBRUEsWUFBTSxDQUFDTCxVQUFELEVBQWFNLFVBQWIsSUFBMkIsQ0FDL0JILFdBQVcsSUFDUix5Q0FBd0NELGNBQWUsSUFBR0MsV0FBWSxlQUYxQyxFQUcvQkMsV0FBVyxJQUNSLHlDQUF3Q0YsY0FBZSxJQUFHRSxXQUFZLGVBSjFDLENBQWpDO0FBT0EsYUFBTztBQUNMSixrQkFESztBQUVMTTtBQUZLLE9BQVA7QUFJRDtBQUNGLEdBekJEOztBQTRCRCxNQUFJdEIsT0FBTyxLQUFLLEtBQVosSUFBcUIsQ0FBQUMsTUFBTSxTQUFOLElBQUFBLE1BQU0sV0FBTixZQUFBQSxNQUFNLENBQUVzQixjQUFSLE1BQTJCLFFBQWhELElBQTRELENBQUF0QixNQUFNLFNBQU4sSUFBQUEsTUFBTSxXQUFOLFlBQUFBLE1BQU0sQ0FBRUssb0JBQVIsTUFBaUMsS0FBakcsRUFDQSxvQkFDQSw4REFBQyxpREFBRDtBQUFLLFdBQU8sRUFBRSxNQUFkO0FBQXNCLFlBQVEsRUFBRSxRQUFoQztBQUEwQyxTQUFLLEVBQUUsTUFBakQ7QUFBeUQsV0FBTyxFQUFFLEdBQWxFO0FBQXdFLGFBQVMsRUFBRSxHQUFuRjtBQUF3RixVQUFNLEVBQUU7QUFBRXJKLFlBQU0sRUFBRTtBQUFWLEtBQWhHO0FBQW1ILG1CQUFlLEVBQUVwQixtRUFBaUIsQ0FBQyxVQUFELEVBQWEsU0FBYixDQUFySjtBQUE4SyxXQUFPLEVBQUUsSUFBdkw7QUFBQSw0QkFDQSw4REFBQyxtREFBRDtBQUFPLHFCQUFlLEVBQUUsV0FBeEI7QUFBcUMsYUFBTyxFQUFFLE1BQTlDO0FBQXNELFdBQUssRUFBRSxHQUE3RDtBQUFrRSxZQUFNLEVBQUUsQ0FBMUU7QUFBNkUsWUFBTSxFQUFFLE1BQXJGO0FBQTZGLGdCQUFVLEVBQUU7QUFBekc7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEQSxlQUVBLDhEQUFDLGtEQUFEO0FBQU0sZUFBUyxFQUFFQSxtRUFBaUIsQ0FBQyxPQUFELEVBQVUsT0FBVixDQUFsQztBQUFzRCxjQUFRLEVBQUUsSUFBaEU7QUFBdUUsZUFBUyxFQUFFLFFBQWxGO0FBQTRGLFlBQU0sRUFBRSxHQUFwRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEQSxDQURBLEtBU0ssSUFBSW1LLE9BQU8sS0FBSyxLQUFaLElBQXFCLENBQUFDLE1BQU0sU0FBTixJQUFBQSxNQUFNLFdBQU4sWUFBQUEsTUFBTSxDQUFFc0IsY0FBUixNQUEyQixRQUFoRCxJQUE0RCxDQUFBdEIsTUFBTSxTQUFOLElBQUFBLE1BQU0sV0FBTixZQUFBQSxNQUFNLENBQUVLLG9CQUFSLE1BQWlDLElBQWpHLEVBQ0wsb0JBQ0QsOERBQUMsaURBQUQ7QUFBSyxXQUFPLEVBQUUsTUFBZDtBQUFzQixZQUFRLEVBQUUsUUFBaEM7QUFBMEMsU0FBSyxFQUFFLE1BQWpEO0FBQXlELFdBQU8sRUFBRSxHQUFsRTtBQUF1RSxhQUFTLEVBQUUsR0FBbEY7QUFBd0YsVUFBTSxFQUFFO0FBQUVySixZQUFNLEVBQUU7QUFBVixLQUFoRztBQUFtSCxtQkFBZSxFQUFFcEIsbUVBQWlCLENBQUMsVUFBRCxFQUFhLFNBQWIsQ0FBcko7QUFBOEssV0FBTyxFQUFFLElBQXZMO0FBQUEsNEJBQ0csOERBQUMscURBQUQ7QUFBUyxjQUFRLE1BQWpCO0FBQWtCLFdBQUssRUFBQyxRQUF4QjtBQUFpQyxlQUFTLEVBQUMsS0FBM0M7QUFBQSw2QkFBaUQsOERBQUMsbURBQUQ7QUFBTyx1QkFBZSxFQUFFLFdBQXhCO0FBQXFDLGVBQU8sRUFBRSxNQUE5QztBQUFzRCxhQUFLLEVBQUUsR0FBN0Q7QUFBa0UsY0FBTSxFQUFFLENBQTFFO0FBQTZFLGNBQU0sRUFBRSxNQUFyRjtBQUE2RixtQkFBVyxFQUFFLEdBQTFHO0FBQStHLGtCQUFVLEVBQUU7QUFBM0g7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURILGVBRUUsOERBQUMsa0RBQUQ7QUFBTSxjQUFRLEVBQUUsSUFBaEI7QUFBc0IsWUFBTSxFQUFFLE1BQTlCO0FBQXNDLGVBQVMsRUFBRSxRQUFqRDtBQUEyRCxpQkFBVyxFQUFFLEdBQXhFO0FBQTZFLGVBQVMsRUFBRUEsbUVBQWlCLENBQUMsVUFBRCxFQUFhLFVBQWIsQ0FBekc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkYsZUFHRSw4REFBQyxtREFBRDtBQUFPLGlCQUFXLEVBQUUsR0FBcEI7QUFBeUIsZUFBUyxFQUFFLE9BQXBDO0FBQTZDLGtCQUFZLEVBQUUsS0FBM0Q7QUFBQSxnQkFDZ0JpTCxRQUFRLEdBQUdFLFVBQVgsaUJBQ0MsOERBQUMsbURBQUQ7QUFDRSxXQUFHLEVBQUVGLFFBQVEsR0FBR0UsVUFBWCxJQUF5QixFQURoQztBQUVFLGFBQUssRUFBQyxNQUZSO0FBR0UsY0FBTSxFQUFDLE1BSFQ7QUFJRSxXQUFHLEVBQUMsTUFKTjtBQUtFLGlCQUFTLEVBQUMsTUFMWjtBQU1FLGlCQUFTLEVBQUMsT0FOWjtBQU9FLGlCQUFTLEVBQUM7QUFQWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRmpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEYsZUFrQmMsOERBQUMsa0RBQUQ7QUFBTSxjQUFRLEVBQUUsSUFBaEI7QUFBc0IsWUFBTSxFQUFFLE1BQTlCO0FBQXNDLGVBQVMsRUFBRSxRQUFqRDtBQUFBLDhCQUNBO0FBQUEsd0NBQU1YLFdBQVcsRUFBakIsaURBQU0sYUFBZU0sSUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURBLGVBRUE7QUFBQSx5Q0FBTU4sV0FBVyxFQUFqQixrREFBTSxjQUFlTyxPQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkEsZUFHQTtBQUFBLHlDQUFNUCxXQUFXLEVBQWpCLGtEQUFNLGNBQWVRLEtBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBbEJkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURDLENBREssS0E0QkEsSUFBSWIsT0FBTyxLQUFLLEtBQVosSUFBcUIsQ0FBQUMsTUFBTSxTQUFOLElBQUFBLE1BQU0sV0FBTixZQUFBQSxNQUFNLENBQUVzQixjQUFSLE1BQTJCLE1BQWhELElBQTBELENBQUF0QixNQUFNLFNBQU4sSUFBQUEsTUFBTSxXQUFOLFlBQUFBLE1BQU0sQ0FBRUssb0JBQVIsTUFBaUMsS0FBL0YsRUFDTCxvQkFDQSw4REFBQyxpREFBRDtBQUFLLFdBQU8sRUFBRSxNQUFkO0FBQXNCLFlBQVEsRUFBRSxRQUFoQztBQUEwQyxTQUFLLEVBQUUsTUFBakQ7QUFBeUQsV0FBTyxFQUFFLEdBQWxFO0FBQXVFLGFBQVMsRUFBRSxHQUFsRjtBQUF3RixVQUFNLEVBQUU7QUFBRXJKLFlBQU0sRUFBRTtBQUFWLEtBQWhHO0FBQW1ILG1CQUFlLEVBQUVwQixtRUFBaUIsQ0FBQyxVQUFELEVBQWEsU0FBYixDQUFySjtBQUE4SyxXQUFPLEVBQUUsSUFBdkw7QUFBQSw0QkFDQSw4REFBQyxtREFBRDtBQUFPLHFCQUFlLEVBQUUsWUFBeEI7QUFBc0MsYUFBTyxFQUFFLE1BQS9DO0FBQXVELFdBQUssRUFBRSxHQUE5RDtBQUFtRSxZQUFNLEVBQUUsQ0FBM0U7QUFBOEUsWUFBTSxFQUFFLE1BQXRGO0FBQThGLGdCQUFVLEVBQUU7QUFBMUc7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEQSxlQUVBLDhEQUFDLGtEQUFEO0FBQU0sZUFBUyxFQUFFQSxtRUFBaUIsQ0FBQyxPQUFELEVBQVUsT0FBVixDQUFsQztBQUFzRCxjQUFRLEVBQUUsSUFBaEU7QUFBc0UsZUFBUyxFQUFFLFFBQWpGO0FBQTJGLFlBQU0sRUFBRSxHQUFuRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEQSxDQURLLEtBU0EsSUFBSW1LLE9BQU8sS0FBSyxLQUFaLElBQXFCLENBQUFDLE1BQU0sU0FBTixJQUFBQSxNQUFNLFdBQU4sWUFBQUEsTUFBTSxDQUFFc0IsY0FBUixNQUEyQixNQUFoRCxJQUEwRCxDQUFBdEIsTUFBTSxTQUFOLElBQUFBLE1BQU0sV0FBTixZQUFBQSxNQUFNLENBQUVLLG9CQUFSLE1BQWlDLElBQS9GLEVBQ0wsb0JBQ0QsOERBQUMsaURBQUQ7QUFBSyxXQUFPLEVBQUUsTUFBZDtBQUFzQixZQUFRLEVBQUUsUUFBaEM7QUFBMEMsU0FBSyxFQUFFLE1BQWpEO0FBQXlELFdBQU8sRUFBRSxHQUFsRTtBQUF1RSxhQUFTLEVBQUUsR0FBbEY7QUFBd0YsVUFBTSxFQUFFO0FBQUVySixZQUFNLEVBQUU7QUFBVixLQUFoRztBQUFtSCxtQkFBZSxFQUFFcEIsbUVBQWlCLENBQUMsVUFBRCxFQUFhLFNBQWIsQ0FBcko7QUFBOEssV0FBTyxFQUFFLElBQXZMO0FBQUEsNEJBQ0ksOERBQUMscURBQUQ7QUFBUyxjQUFRLE1BQWpCO0FBQWtCLFdBQUssRUFBQyxPQUF4QjtBQUFnQyxlQUFTLEVBQUMsS0FBMUM7QUFBQSw2QkFBZ0QsOERBQUMsbURBQUQ7QUFBTyx1QkFBZSxFQUFFLFlBQXhCO0FBQXNDLGVBQU8sRUFBRSxNQUEvQztBQUF1RCxhQUFLLEVBQUUsR0FBOUQ7QUFBbUUsY0FBTSxFQUFFLENBQTNFO0FBQThFLGNBQU0sRUFBRSxNQUF0RjtBQUE4RixtQkFBVyxFQUFFLEdBQTNHO0FBQWdILGtCQUFVLEVBQUU7QUFBNUg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBRUUsOERBQUMsa0RBQUQ7QUFBTSxjQUFRLEVBQUUsSUFBaEI7QUFBc0IsWUFBTSxFQUFFLE1BQTlCO0FBQXNDLGVBQVMsRUFBRSxRQUFqRDtBQUEyRCxpQkFBVyxFQUFFLEdBQXhFO0FBQTZFLGVBQVMsRUFBRUEsbUVBQWlCLENBQUMsVUFBRCxFQUFhLFVBQWIsQ0FBekc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkYsZUFHRSw4REFBQyxtREFBRDtBQUFPLGlCQUFXLEVBQUUsR0FBcEI7QUFBeUIsZUFBUyxFQUFFLE9BQXBDO0FBQTZDLGtCQUFZLEVBQUUsS0FBM0Q7QUFBQSxnQkFFZ0JpTCxRQUFRLEdBQUdFLFVBQVgsaUJBQ0MsOERBQUMsbURBQUQ7QUFDRSxXQUFHLEVBQUVGLFFBQVEsR0FBR0UsVUFBWCxJQUF5QixFQURoQztBQUVFLGFBQUssRUFBQyxNQUZSO0FBR0UsY0FBTSxFQUFDLE1BSFQ7QUFJRSxXQUFHLEVBQUMsTUFKTjtBQUtFLGlCQUFTLEVBQUMsTUFMWjtBQU1FLGlCQUFTLEVBQUMsT0FOWjtBQU9FLGlCQUFTLEVBQUM7QUFQWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSGpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEYsZUFvQmMsOERBQUMsa0RBQUQ7QUFBTSxjQUFRLEVBQUUsSUFBaEI7QUFBc0IsWUFBTSxFQUFFLE1BQTlCO0FBQXNDLGVBQVMsRUFBRSxRQUFqRDtBQUFBLDhCQUNBO0FBQUEseUNBQU1YLFdBQVcsRUFBakIsa0RBQU0sY0FBZU0sSUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURBLGVBRUE7QUFBQSx5Q0FBTU4sV0FBVyxFQUFqQixrREFBTSxjQUFlTyxPQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkEsZUFHQTtBQUFBLHlDQUFNUCxXQUFXLEVBQWpCLGtEQUFNLGNBQWVRLEtBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBcEJkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURDLENBREssS0ErQkEsSUFBSWIsT0FBTyxLQUFLLEtBQVosSUFBcUIsQ0FBQUMsTUFBTSxTQUFOLElBQUFBLE1BQU0sV0FBTixZQUFBQSxNQUFNLENBQUVzQixjQUFSLE1BQTJCLEtBQWhELElBQXlELENBQUF0QixNQUFNLFNBQU4sSUFBQUEsTUFBTSxXQUFOLFlBQUFBLE1BQU0sQ0FBRUssb0JBQVIsTUFBaUMsS0FBOUYsRUFDTCxvQkFDQyw4REFBQyxpREFBRDtBQUFLLFdBQU8sRUFBRSxNQUFkO0FBQXNCLFlBQVEsRUFBRSxRQUFoQztBQUEwQyxTQUFLLEVBQUUsTUFBakQ7QUFBeUQsV0FBTyxFQUFFLEdBQWxFO0FBQXdFLFVBQU0sRUFBRTtBQUFFckosWUFBTSxFQUFFO0FBQVYsS0FBaEY7QUFBa0csYUFBUyxFQUFFLEdBQTdHO0FBQW1ILG1CQUFlLEVBQUVwQixtRUFBaUIsQ0FBQyxVQUFELEVBQWEsU0FBYixDQUFySjtBQUE4SyxXQUFPLEVBQUUsSUFBdkw7QUFBQSw0QkFDQSw4REFBQyxtREFBRDtBQUFPLHFCQUFlLEVBQUUsU0FBeEI7QUFBbUMsYUFBTyxFQUFFLE1BQTVDO0FBQW9ELFdBQUssRUFBRSxHQUEzRDtBQUFnRSxZQUFNLEVBQUUsQ0FBeEU7QUFBMkUsWUFBTSxFQUFFLE1BQW5GO0FBQTJGLGdCQUFVLEVBQUU7QUFBdkc7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEQSxlQUVBLDhEQUFDLGtEQUFEO0FBQU0sZUFBUyxFQUFFQSxtRUFBaUIsQ0FBQyxPQUFELEVBQVUsT0FBVixDQUFsQztBQUFzRCxjQUFRLEVBQUUsSUFBaEU7QUFBdUUsZUFBUyxFQUFFLFFBQWxGO0FBQTRGLFlBQU0sRUFBRSxHQUFwRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERCxDQURLLEtBU0EsSUFBSW1LLE9BQU8sS0FBSyxLQUFaLElBQXFCLENBQUFDLE1BQU0sU0FBTixJQUFBQSxNQUFNLFdBQU4sWUFBQUEsTUFBTSxDQUFFc0IsY0FBUixNQUEyQixLQUFoRCxJQUF5RCxDQUFBdEIsTUFBTSxTQUFOLElBQUFBLE1BQU0sV0FBTixZQUFBQSxNQUFNLENBQUVLLG9CQUFSLE1BQWlDLElBQTlGLEVBQ0wsb0JBQ0MsOERBQUMsaURBQUQ7QUFBSyxXQUFPLEVBQUUsTUFBZDtBQUFzQixZQUFRLEVBQUUsUUFBaEM7QUFBMEMsU0FBSyxFQUFFLE1BQWpEO0FBQXlELFdBQU8sRUFBRSxHQUFsRTtBQUF1RSxhQUFTLEVBQUUsR0FBbEY7QUFBd0YsVUFBTSxFQUFFO0FBQUVySixZQUFNLEVBQUU7QUFBVixLQUFoRztBQUFtSCxtQkFBZSxFQUFFcEIsbUVBQWlCLENBQUMsVUFBRCxFQUFhLFNBQWIsQ0FBcko7QUFBOEssV0FBTyxFQUFFLElBQXZMO0FBQUEsNEJBQ0EsOERBQUMscURBQUQ7QUFBUyxjQUFRLE1BQWpCO0FBQWtCLFdBQUssRUFBQyxZQUF4QjtBQUFxQyxlQUFTLEVBQUMsS0FBL0M7QUFBQSw2QkFBcUQsOERBQUMsbURBQUQ7QUFBTyx1QkFBZSxFQUFFLFNBQXhCO0FBQW1DLGVBQU8sRUFBRSxNQUE1QztBQUFvRCxhQUFLLEVBQUUsR0FBM0Q7QUFBZ0UsY0FBTSxFQUFFLENBQXhFO0FBQTJFLGNBQU0sRUFBRSxNQUFuRjtBQUEyRixtQkFBVyxFQUFFLEdBQXhHO0FBQTZHLGtCQUFVLEVBQUU7QUFBekg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURBLGVBRUYsOERBQUMsa0RBQUQ7QUFBTSxjQUFRLEVBQUUsSUFBaEI7QUFBc0IsWUFBTSxFQUFFLE1BQTlCO0FBQXNDLGVBQVMsRUFBRSxRQUFqRDtBQUEyRCxpQkFBVyxFQUFFLEdBQXhFO0FBQTZFLGVBQVMsRUFBRUEsbUVBQWlCLENBQUMsVUFBRCxFQUFhLFVBQWIsQ0FBekc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkUsZUFHRiw4REFBQyxtREFBRDtBQUFPLGlCQUFXLEVBQUUsR0FBcEI7QUFBeUIsZUFBUyxFQUFFLE9BQXBDO0FBQTZDLGtCQUFZLEVBQUUsS0FBM0Q7QUFBQSxnQkFDZWlMLFFBQVEsR0FBR0UsVUFBWCxpQkFDQyw4REFBQyxtREFBRDtBQUNFLFdBQUcsRUFBRUYsUUFBUSxHQUFHRSxVQUFYLElBQXlCLEVBRGhDO0FBRUUsYUFBSyxFQUFDLE1BRlI7QUFHRSxjQUFNLEVBQUMsTUFIVDtBQUlFLFdBQUcsRUFBQyxNQUpOO0FBS0UsaUJBQVMsRUFBQyxNQUxaO0FBTUUsaUJBQVMsRUFBQyxPQU5aO0FBT0UsaUJBQVMsRUFBQztBQVBaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFIRSxlQWtCUyw4REFBQyxrREFBRDtBQUFNLGNBQVEsRUFBRSxJQUFoQjtBQUFzQixZQUFNLEVBQUUsTUFBOUI7QUFBc0MsZUFBUyxFQUFFLFFBQWpEO0FBQUEsOEJBQ0E7QUFBQSx5Q0FBTVgsV0FBVyxFQUFqQixrREFBTSxjQUFlTSxJQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREEsZUFFQTtBQUFBLHlDQUFNTixXQUFXLEVBQWpCLGtEQUFNLGNBQWVPLE9BQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGQSxlQUdBO0FBQUEseUNBQU1QLFdBQVcsRUFBakIsa0RBQU0sY0FBZVEsS0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFsQlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREQsQ0FESyxLQTZCTCxvQkFDQyw4REFBQyxpREFBRDtBQUFLLFdBQU8sRUFBRSxNQUFkO0FBQXNCLFlBQVEsRUFBRSxRQUFoQztBQUEwQyxTQUFLLEVBQUUsTUFBakQ7QUFBeUQsV0FBTyxFQUFFLEdBQWxFO0FBQXdFLGFBQVMsRUFBRSxHQUFuRjtBQUF3RixVQUFNLEVBQUU7QUFBRTVKLFlBQU0sRUFBRTtBQUFWLEtBQWhHO0FBQW1ILG1CQUFlLEVBQUVwQixtRUFBaUIsQ0FBQyxVQUFELEVBQWEsU0FBYixDQUFySjtBQUE4SyxXQUFPLEVBQUUsSUFBdkw7QUFBQSw0QkFDQyw4REFBQyxxREFBRDtBQUFTLGNBQVEsTUFBakI7QUFBa0IsV0FBSyxFQUFDLFNBQXhCO0FBQWtDLGVBQVMsRUFBQyxLQUE1QztBQUFBLDZCQUFrRCw4REFBQyxtREFBRDtBQUFPLHVCQUFlLEVBQUVBLG1FQUFpQixDQUFDLFVBQUQsRUFBYSxVQUFiLENBQXpDO0FBQW1FLGVBQU8sRUFBRSxNQUE1RTtBQUFvRixhQUFLLEVBQUUsR0FBM0Y7QUFBZ0csY0FBTSxFQUFFLENBQXhHO0FBQTJHLGNBQU0sRUFBRSxNQUFuSDtBQUEySCxrQkFBVSxFQUFFO0FBQXZJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERCxlQUVBLDhEQUFDLGtEQUFEO0FBQU0sZUFBUyxFQUFFQSxtRUFBaUIsQ0FBQyxPQUFELEVBQVUsT0FBVixDQUFsQztBQUFzRCxjQUFRLEVBQUUsSUFBaEU7QUFBdUUsZUFBUyxFQUFFLFFBQWxGO0FBQTRGLFlBQU0sRUFBRSxHQUFwRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERDtBQVNBLENBM0tEOztBQTZLQSwrREFBZWtLLE1BQWYsRTs7Ozs7Ozs7Ozs7O0FDdE1BLE1BQU1JLE1BQU0sR0FBRyxvQkFBZjtBQUVBLCtEQUFlQSxNQUFmLEU7Ozs7Ozs7Ozs7O0FDRmE7O0FBQUEsSUFBSXFCLHNCQUFzQixHQUFDQyxtQkFBTyxDQUFDLHNJQUFELENBQWxDOztBQUFtRkMsa0JBQUEsR0FBbUIsSUFBbkI7QUFBd0JBLGVBQUEsR0FBZ0JDLEtBQWhCOztBQUFzQixJQUFJQyw4QkFBOEIsR0FBQ0osc0JBQXNCLENBQUNDLG1CQUFPLENBQUMsb0pBQUQsQ0FBUixDQUF6RDs7QUFBMEgsSUFBSUksU0FBUyxHQUFDTCxzQkFBc0IsQ0FBQ0MsbUJBQU8sQ0FBQywwR0FBRCxDQUFSLENBQXBDOztBQUFnRixJQUFJSyxNQUFNLEdBQUNOLHNCQUFzQixDQUFDQyxtQkFBTyxDQUFDLG9CQUFELENBQVIsQ0FBakM7O0FBQW9ELElBQUlNLEtBQUssR0FBQ1Asc0JBQXNCLENBQUNDLG1CQUFPLENBQUMsd0RBQUQsQ0FBUixDQUFoQzs7QUFBcUUsSUFBSU8sT0FBTyxHQUFDUCxtQkFBTyxDQUFDLG9FQUFELENBQW5COztBQUFxRCxJQUFJUSxZQUFZLEdBQUNSLG1CQUFPLENBQUMsOEVBQUQsQ0FBeEI7O0FBQStELElBQUlTLGdCQUFnQixHQUFDVCxtQkFBTyxDQUFDLCtFQUFELENBQTVCOztBQUFtRCxVQUErQjtBQUFDO0FBQUNoRixRQUFNLENBQUMwRixxQkFBUCxHQUE2QixJQUE3QjtBQUFtQzs7QUFBQSxNQUFNQyxvQkFBb0IsR0FBQyxDQUFDLE1BQUQsRUFBUSxPQUFSLEVBQWdCQyxTQUFoQixDQUEzQjtBQUFzRCxNQUFNQyxPQUFPLEdBQUMsSUFBSUMsR0FBSixDQUFRLENBQUMsQ0FBQyxPQUFELEVBQVNDLFdBQVQsQ0FBRCxFQUF1QixDQUFDLFlBQUQsRUFBY0MsZ0JBQWQsQ0FBdkIsRUFBdUQsQ0FBQyxRQUFELEVBQVVDLFlBQVYsQ0FBdkQsRUFBK0UsQ0FBQyxTQUFELEVBQVdDLGFBQVgsQ0FBL0UsQ0FBUixDQUFkO0FBQWlJLE1BQU1DLG1CQUFtQixHQUFDLENBQUMsTUFBRCxFQUFRLE9BQVIsRUFBZ0IsV0FBaEIsRUFBNEIsWUFBNUIsRUFBeUNQLFNBQXpDLENBQTFCOztBQUE4RSxTQUFTUSxlQUFULENBQXlCQyxHQUF6QixFQUE2QjtBQUFDLFNBQU9BLEdBQUcsQ0FBQ0MsT0FBSixLQUFjVixTQUFyQjtBQUFnQzs7QUFBQSxTQUFTVyxpQkFBVCxDQUEyQkYsR0FBM0IsRUFBK0I7QUFBQyxTQUFPQSxHQUFHLENBQUNBLEdBQUosS0FBVVQsU0FBakI7QUFBNEI7O0FBQUEsU0FBU1ksY0FBVCxDQUF3QkgsR0FBeEIsRUFBNEI7QUFBQyxTQUFPLE9BQU9BLEdBQVAsS0FBYSxRQUFiLEtBQXdCRCxlQUFlLENBQUNDLEdBQUQsQ0FBZixJQUFzQkUsaUJBQWlCLENBQUNGLEdBQUQsQ0FBL0QsQ0FBUDtBQUE4RTs7QUFBQSxNQUFLO0FBQUNJLGFBQVcsRUFBQ0MsaUJBQWI7QUFBK0JDLFlBQVUsRUFBQ0MsZ0JBQTFDO0FBQTJEQyxRQUFNLEVBQUNDLFlBQWxFO0FBQStFQyxNQUFJLEVBQUNDLFVBQXBGO0FBQStGQyxTQUFPLEVBQUNDO0FBQXZHLElBQXNIQyxzTEFBQSxJQUErQjNCLFlBQVksQ0FBQzRCLGtCQUF2SyxDLENBQTBMOztBQUNoMkMsTUFBTUMsUUFBUSxHQUFDLENBQUMsR0FBR1gsaUJBQUosRUFBc0IsR0FBR0UsZ0JBQXpCLENBQWY7QUFBMERGLGlCQUFpQixDQUFDN00sSUFBbEIsQ0FBdUIsQ0FBQ1AsQ0FBRCxFQUFHQyxDQUFILEtBQU9ELENBQUMsR0FBQ0MsQ0FBaEM7QUFBbUM4TixRQUFRLENBQUN4TixJQUFULENBQWMsQ0FBQ1AsQ0FBRCxFQUFHQyxDQUFILEtBQU9ELENBQUMsR0FBQ0MsQ0FBdkI7O0FBQTBCLFNBQVMrTixTQUFULENBQW1CckcsS0FBbkIsRUFBeUJzRyxNQUF6QixFQUFnQ0MsS0FBaEMsRUFBc0M7QUFBQyxNQUFHQSxLQUFLLEtBQUdELE1BQU0sS0FBRyxNQUFULElBQWlCQSxNQUFNLEtBQUcsWUFBN0IsQ0FBUixFQUFtRDtBQUFDO0FBQ2xOLFVBQU1FLGVBQWUsR0FBQyxvQkFBdEI7QUFBMkMsVUFBTUMsWUFBWSxHQUFDLEVBQW5COztBQUFzQixTQUFJLElBQUlDLEtBQVIsRUFBY0EsS0FBSyxHQUFDRixlQUFlLENBQUNHLElBQWhCLENBQXFCSixLQUFyQixDQUFwQixFQUFnREcsS0FBaEQsRUFBc0Q7QUFBQ0Qsa0JBQVksQ0FBQ0csSUFBYixDQUFrQkMsUUFBUSxDQUFDSCxLQUFLLENBQUMsQ0FBRCxDQUFOLENBQTFCO0FBQXVDOztBQUFBLFFBQUdELFlBQVksQ0FBQ0ssTUFBaEIsRUFBdUI7QUFBQyxZQUFNQyxhQUFhLEdBQUNDLElBQUksQ0FBQ0MsR0FBTCxDQUFTLEdBQUdSLFlBQVosSUFBMEIsSUFBOUM7QUFBbUQsYUFBTTtBQUFDUyxjQUFNLEVBQUNkLFFBQVEsQ0FBQ3ZLLE1BQVQsQ0FBZ0JzTCxDQUFDLElBQUVBLENBQUMsSUFBRTFCLGlCQUFpQixDQUFDLENBQUQsQ0FBakIsR0FBcUJzQixhQUEzQyxDQUFSO0FBQWtFSyxZQUFJLEVBQUM7QUFBdkUsT0FBTjtBQUFtRjs7QUFBQSxXQUFNO0FBQUNGLFlBQU0sRUFBQ2QsUUFBUjtBQUFpQmdCLFVBQUksRUFBQztBQUF0QixLQUFOO0FBQWtDOztBQUFBLE1BQUcsT0FBT3BILEtBQVAsS0FBZSxRQUFmLElBQXlCc0csTUFBTSxLQUFHLE1BQWxDLElBQTBDQSxNQUFNLEtBQUcsWUFBdEQsRUFBbUU7QUFBQyxXQUFNO0FBQUNZLFlBQU0sRUFBQ3pCLGlCQUFSO0FBQTBCMkIsVUFBSSxFQUFDO0FBQS9CLEtBQU47QUFBMkM7O0FBQUEsUUFBTUYsTUFBTSxHQUFDLENBQUMsR0FBRyxJQUFJRyxHQUFKLEVBQVE7QUFDdmU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFDckgsS0FBRCxFQUFPQSxLQUFLLEdBQUM7QUFBQztBQUFkLElBQStCbEgsR0FBL0IsQ0FBbUNpSCxDQUFDLElBQUVxRyxRQUFRLENBQUNrQixJQUFULENBQWNqRyxDQUFDLElBQUVBLENBQUMsSUFBRXRCLENBQXBCLEtBQXdCcUcsUUFBUSxDQUFDQSxRQUFRLENBQUNVLE1BQVQsR0FBZ0IsQ0FBakIsQ0FBdEUsQ0FSK2QsQ0FBSixDQUFiO0FBUWpYLFNBQU07QUFBQ0ksVUFBRDtBQUFRRSxRQUFJLEVBQUM7QUFBYixHQUFOO0FBQXlCOztBQUFBLFNBQVNHLGdCQUFULENBQTBCO0FBQUNuQyxLQUFEO0FBQUtvQyxhQUFMO0FBQWlCbEIsUUFBakI7QUFBd0J0RyxPQUF4QjtBQUE4QnlILFNBQTlCO0FBQXNDbEIsT0FBdEM7QUFBNENYO0FBQTVDLENBQTFCLEVBQThFO0FBQUMsTUFBRzRCLFdBQUgsRUFBZTtBQUFDLFdBQU07QUFBQ3BDLFNBQUQ7QUFBS3NDLFlBQU0sRUFBQy9DLFNBQVo7QUFBc0I0QixXQUFLLEVBQUM1QjtBQUE1QixLQUFOO0FBQThDOztBQUFBLFFBQUs7QUFBQ3VDLFVBQUQ7QUFBUUU7QUFBUixNQUFjZixTQUFTLENBQUNyRyxLQUFELEVBQU9zRyxNQUFQLEVBQWNDLEtBQWQsQ0FBNUI7QUFBaUQsUUFBTW9CLElBQUksR0FBQ1QsTUFBTSxDQUFDSixNQUFQLEdBQWMsQ0FBekI7QUFBMkIsU0FBTTtBQUFDUCxTQUFLLEVBQUMsQ0FBQ0EsS0FBRCxJQUFRYSxJQUFJLEtBQUcsR0FBZixHQUFtQixPQUFuQixHQUEyQmIsS0FBbEM7QUFBd0NtQixVQUFNLEVBQUNSLE1BQU0sQ0FBQ3BPLEdBQVAsQ0FBVyxDQUFDaUgsQ0FBRCxFQUFHMUcsQ0FBSCxLQUFRLEdBQUV1TSxNQUFNLENBQUM7QUFBQ1IsU0FBRDtBQUFLcUMsYUFBTDtBQUFhekgsV0FBSyxFQUFDRDtBQUFuQixLQUFELENBQXdCLElBQUdxSCxJQUFJLEtBQUcsR0FBUCxHQUFXckgsQ0FBWCxHQUFhMUcsQ0FBQyxHQUFDLENBQUUsR0FBRStOLElBQUssRUFBOUUsRUFBaUZRLElBQWpGLENBQXNGLElBQXRGLENBQS9DO0FBQTJJO0FBQ2hlO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQXhDLE9BQUcsRUFBQ1EsTUFBTSxDQUFDO0FBQUNSLFNBQUQ7QUFBS3FDLGFBQUw7QUFBYXpILFdBQUssRUFBQ2tILE1BQU0sQ0FBQ1MsSUFBRDtBQUF6QixLQUFEO0FBTjJVLEdBQU47QUFNaFM7O0FBQUEsU0FBU0UsTUFBVCxDQUFnQjdNLENBQWhCLEVBQWtCO0FBQUMsTUFBRyxPQUFPQSxDQUFQLEtBQVcsUUFBZCxFQUF1QjtBQUFDLFdBQU9BLENBQVA7QUFBVTs7QUFBQSxNQUFHLE9BQU9BLENBQVAsS0FBVyxRQUFkLEVBQXVCO0FBQUMsV0FBTzZMLFFBQVEsQ0FBQzdMLENBQUQsRUFBRyxFQUFILENBQWY7QUFBdUI7O0FBQUEsU0FBTzJKLFNBQVA7QUFBa0I7O0FBQUEsU0FBU21ELGtCQUFULENBQTRCQyxXQUE1QixFQUF3QztBQUFDLFFBQU1DLElBQUksR0FBQ3BELE9BQU8sQ0FBQ3FELEdBQVIsQ0FBWXBDLFlBQVosQ0FBWDs7QUFBcUMsTUFBR21DLElBQUgsRUFBUTtBQUFDLFdBQU9BLElBQUksQ0FBQyxDQUFDLEdBQUU3RCxTQUFTLENBQUNrQixPQUFiLEVBQXNCO0FBQUM2QyxVQUFJLEVBQUNuQztBQUFOLEtBQXRCLEVBQXdDZ0MsV0FBeEMsQ0FBRCxDQUFYO0FBQW1FOztBQUFBLFFBQU0sSUFBSUksS0FBSixDQUFXLHlEQUF3RDVELFlBQVksQ0FBQzZELGFBQWIsQ0FBMkJSLElBQTNCLENBQWdDLElBQWhDLENBQXNDLGVBQWMvQixZQUFhLEVBQXBJLENBQU47QUFBOEksQyxDQUFBO0FBQzdjOzs7QUFDQSxTQUFTd0MsaUJBQVQsQ0FBMkJDLEdBQTNCLEVBQStCQyxXQUEvQixFQUEyQztBQUFDLE1BQUdBLFdBQVcsS0FBRyxNQUFkLElBQXNCRCxHQUF6QixFQUE2QjtBQUFDLFVBQU1FLFVBQVUsR0FBQyxNQUFJO0FBQUMsVUFBRyxDQUFDRixHQUFHLENBQUNsRCxHQUFKLENBQVFxRCxVQUFSLENBQW1CLE9BQW5CLENBQUosRUFBZ0M7QUFBQyxjQUFNcEgsQ0FBQyxHQUFDLFlBQVdpSCxHQUFYLEdBQWVBLEdBQUcsQ0FBQ0ksTUFBSixFQUFmLEdBQTRCQyxPQUFPLENBQUNDLE9BQVIsRUFBcEM7QUFBc0R2SCxTQUFDLENBQUN3SCxLQUFGLENBQVEsTUFBSSxDQUFFLENBQWQsRUFBZ0JDLElBQWhCLENBQXFCLE1BQUk7QUFBQ1IsYUFBRyxDQUFDUyxLQUFKLENBQVVsTixNQUFWLEdBQWlCLE1BQWpCO0FBQXdCeU0sYUFBRyxDQUFDUyxLQUFKLENBQVVDLGNBQVYsR0FBeUIsTUFBekI7QUFBZ0NWLGFBQUcsQ0FBQ1MsS0FBSixDQUFVRSxlQUFWLEdBQTBCLE1BQTFCO0FBQWtDLFNBQXBIO0FBQXVIO0FBQUMsS0FBck87O0FBQXNPLFFBQUdYLEdBQUcsQ0FBQ1ksUUFBUCxFQUFnQjtBQUFDO0FBQ2pVO0FBQ0E7QUFDQVYsZ0JBQVU7QUFBSSxLQUhrUyxNQUc5UjtBQUFDRixTQUFHLENBQUNhLE1BQUosR0FBV1gsVUFBWDtBQUF1QjtBQUFDO0FBQUM7O0FBQUEsU0FBU3ZFLEtBQVQsQ0FBZW1GLElBQWYsRUFBb0I7QUFBQyxNQUFHO0FBQUNoRSxPQUFEO0FBQUttQixTQUFMO0FBQVdpQixlQUFXLEdBQUMsS0FBdkI7QUFBNkI2QixZQUFRLEdBQUMsS0FBdEM7QUFBNEMvRyxXQUE1QztBQUFvRGdILGFBQXBEO0FBQThEN0IsV0FBOUQ7QUFBc0V6SCxTQUF0RTtBQUE0RXVKLFVBQTVFO0FBQW1GQyxhQUFuRjtBQUE2RkMsa0JBQTdGO0FBQTRHN0QsVUFBTSxHQUFDa0Msa0JBQW5IO0FBQXNJUyxlQUFXLEdBQUMsT0FBbEo7QUFBMEptQjtBQUExSixNQUF1S04sSUFBMUs7QUFBQSxNQUErS08sR0FBRyxHQUFDLENBQUMsR0FBRXpGLDhCQUE4QixDQUFDbUIsT0FBbEMsRUFBMkMrRCxJQUEzQyxFQUFnRCxDQUFDLEtBQUQsRUFBTyxPQUFQLEVBQWUsYUFBZixFQUE2QixVQUE3QixFQUF3QyxTQUF4QyxFQUFrRCxXQUFsRCxFQUE4RCxTQUE5RCxFQUF3RSxPQUF4RSxFQUFnRixRQUFoRixFQUF5RixXQUF6RixFQUFxRyxnQkFBckcsRUFBc0gsUUFBdEgsRUFBK0gsYUFBL0gsRUFBNkksYUFBN0ksQ0FBaEQsQ0FBbkw7QUFBZ1ksTUFBSVEsSUFBSSxHQUFDRCxHQUFUO0FBQWEsTUFBSXJELE1BQU0sR0FBQ0MsS0FBSyxHQUFDLFlBQUQsR0FBYyxXQUE5Qjs7QUFBMEMsTUFBRyxZQUFXcUQsSUFBZCxFQUFtQjtBQUFDO0FBQzVnQixRQUFHQSxJQUFJLENBQUN0RCxNQUFSLEVBQWVBLE1BQU0sR0FBQ3NELElBQUksQ0FBQ3RELE1BQVosQ0FENGYsQ0FDemU7O0FBQ2xDLFdBQU9zRCxJQUFJLENBQUMsUUFBRCxDQUFYO0FBQXVCOztBQUFBLE1BQUlDLFNBQVMsR0FBQyxFQUFkOztBQUFpQixNQUFHdEUsY0FBYyxDQUFDSCxHQUFELENBQWpCLEVBQXVCO0FBQUMsVUFBTTBFLGVBQWUsR0FBQzNFLGVBQWUsQ0FBQ0MsR0FBRCxDQUFmLEdBQXFCQSxHQUFHLENBQUNDLE9BQXpCLEdBQWlDRCxHQUF2RDs7QUFBMkQsUUFBRyxDQUFDMEUsZUFBZSxDQUFDMUUsR0FBcEIsRUFBd0I7QUFBQyxZQUFNLElBQUkrQyxLQUFKLENBQVcsOElBQTZJNEIsSUFBSSxDQUFDQyxTQUFMLENBQWVGLGVBQWYsQ0FBZ0MsRUFBeEwsQ0FBTjtBQUFrTTs7QUFBQUosZUFBVyxHQUFDQSxXQUFXLElBQUVJLGVBQWUsQ0FBQ0osV0FBekM7QUFBcURHLGFBQVMsR0FBQ0MsZUFBZSxDQUFDMUUsR0FBMUI7O0FBQThCLFFBQUcsQ0FBQ2tCLE1BQUQsSUFBU0EsTUFBTSxLQUFHLE1BQXJCLEVBQTRCO0FBQUNpRCxZQUFNLEdBQUNBLE1BQU0sSUFBRU8sZUFBZSxDQUFDUCxNQUEvQjtBQUFzQ3ZKLFdBQUssR0FBQ0EsS0FBSyxJQUFFOEosZUFBZSxDQUFDOUosS0FBN0I7O0FBQW1DLFVBQUcsQ0FBQzhKLGVBQWUsQ0FBQ1AsTUFBakIsSUFBeUIsQ0FBQ08sZUFBZSxDQUFDOUosS0FBN0MsRUFBbUQ7QUFBQyxjQUFNLElBQUltSSxLQUFKLENBQVcsMkpBQTBKNEIsSUFBSSxDQUFDQyxTQUFMLENBQWVGLGVBQWYsQ0FBZ0MsRUFBck0sQ0FBTjtBQUErTTtBQUFDO0FBQUM7O0FBQUExRSxLQUFHLEdBQUMsT0FBT0EsR0FBUCxLQUFhLFFBQWIsR0FBc0JBLEdBQXRCLEdBQTBCeUUsU0FBOUI7QUFBd0MsUUFBTUksUUFBUSxHQUFDcEMsTUFBTSxDQUFDN0gsS0FBRCxDQUFyQjtBQUE2QixRQUFNa0ssU0FBUyxHQUFDckMsTUFBTSxDQUFDMEIsTUFBRCxDQUF0QjtBQUErQixRQUFNWSxVQUFVLEdBQUN0QyxNQUFNLENBQUNKLE9BQUQsQ0FBdkI7O0FBQWlDLFlBQXVDO0FBQUMsUUFBRyxDQUFDckMsR0FBSixFQUFRO0FBQUMsWUFBTSxJQUFJK0MsS0FBSixDQUFXLDBIQUF5SDRCLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQUNoSyxhQUFEO0FBQU91SixjQUFQO0FBQWM5QjtBQUFkLE9BQWYsQ0FBdUMsRUFBM0ssQ0FBTjtBQUFxTDs7QUFBQSxRQUFHLENBQUN2QyxtQkFBbUIsQ0FBQ3ZLLFFBQXBCLENBQTZCMkwsTUFBN0IsQ0FBSixFQUF5QztBQUFDLFlBQU0sSUFBSTZCLEtBQUosQ0FBVyxtQkFBa0IvQyxHQUFJLDhDQUE2Q2tCLE1BQU8sc0JBQXFCcEIsbUJBQW1CLENBQUNwTSxHQUFwQixDQUF3QnNSLE1BQXhCLEVBQWdDeEMsSUFBaEMsQ0FBcUMsR0FBckMsQ0FBMEMsR0FBcEosQ0FBTjtBQUErSjs7QUFBQSxRQUFHLENBQUNsRCxvQkFBb0IsQ0FBQy9KLFFBQXJCLENBQThCMkgsT0FBOUIsQ0FBSixFQUEyQztBQUFDLFlBQU0sSUFBSTZGLEtBQUosQ0FBVyxtQkFBa0IvQyxHQUFJLCtDQUE4QzlDLE9BQVEsc0JBQXFCb0Msb0JBQW9CLENBQUM1TCxHQUFyQixDQUF5QnNSLE1BQXpCLEVBQWlDeEMsSUFBakMsQ0FBc0MsR0FBdEMsQ0FBMkMsR0FBdkosQ0FBTjtBQUFrSzs7QUFBQSxRQUFHeUIsUUFBUSxJQUFFL0csT0FBTyxLQUFHLE1BQXZCLEVBQThCO0FBQUMsWUFBTSxJQUFJNkYsS0FBSixDQUFXLG1CQUFrQi9DLEdBQUksaUZBQWpDLENBQU47QUFBMEg7O0FBQUEsUUFBR21ELFdBQVcsS0FBRyxNQUFqQixFQUF3QjtBQUFDLFVBQUcsQ0FBQzBCLFFBQVEsSUFBRSxDQUFYLEtBQWVDLFNBQVMsSUFBRSxDQUExQixJQUE2QixJQUFoQyxFQUFxQztBQUFDRyxlQUFPLENBQUNDLElBQVIsQ0FBYyxtQkFBa0JsRixHQUFJLHNHQUFwQztBQUE0STs7QUFBQSxVQUFHLENBQUNzRSxXQUFKLEVBQWdCO0FBQUMsY0FBTWEsY0FBYyxHQUFDLENBQUMsTUFBRCxFQUFRLEtBQVIsRUFBYyxNQUFkLENBQXJCLENBQUQsQ0FBNEM7O0FBQ3Q3RCxjQUFNLElBQUlwQyxLQUFKLENBQVcsbUJBQWtCL0MsR0FBSTtBQUN2QztBQUNBO0FBQ0EsbUdBQW1HbUYsY0FBYyxDQUFDM0MsSUFBZixDQUFvQixHQUFwQixDQUF5QjtBQUM1SDtBQUNBLGdGQUxNLENBQU47QUFLbUY7QUFBQztBQUFDOztBQUFBLE1BQUk0QyxNQUFNLEdBQUMsQ0FBQ25CLFFBQUQsS0FBWS9HLE9BQU8sS0FBRyxNQUFWLElBQWtCLE9BQU9BLE9BQVAsS0FBaUIsV0FBL0MsQ0FBWDs7QUFBdUUsTUFBRzhDLEdBQUcsSUFBRUEsR0FBRyxDQUFDcUQsVUFBSixDQUFlLE9BQWYsQ0FBUixFQUFnQztBQUFDO0FBQzdMakIsZUFBVyxHQUFDLElBQVo7QUFBaUJnRCxVQUFNLEdBQUMsS0FBUDtBQUFjOztBQUFBLFFBQUssQ0FBQ0MsTUFBRCxFQUFRQyxhQUFSLElBQXVCLENBQUMsR0FBRWxHLGdCQUFnQixDQUFDbUcsZUFBcEIsRUFBcUM7QUFBQ0MsY0FBVSxFQUFDLE9BQVo7QUFBb0JDLFlBQVEsRUFBQyxDQUFDTDtBQUE5QixHQUFyQyxDQUE1QjtBQUF3RyxRQUFNTSxTQUFTLEdBQUMsQ0FBQ04sTUFBRCxJQUFTRSxhQUF6QjtBQUF1QyxNQUFJSyxZQUFKO0FBQWlCLE1BQUlDLFVBQUo7QUFBZSxNQUFJQyxRQUFKO0FBQWEsTUFBSUMsUUFBUSxHQUFDLENBQUMsR0FBRS9HLFNBQVMsQ0FBQ2tCLE9BQWIsRUFBc0I7QUFBQzhGLFlBQVEsRUFBQyxVQUFWO0FBQXFCQyxPQUFHLEVBQUMsQ0FBekI7QUFBMkJDLFFBQUksRUFBQyxDQUFoQztBQUFrQ0MsVUFBTSxFQUFDLENBQXpDO0FBQTJDQyxTQUFLLEVBQUMsQ0FBakQ7QUFBbURDLGFBQVMsRUFBQyxZQUE3RDtBQUEwRUMsV0FBTyxFQUFDLENBQWxGO0FBQW9GQyxVQUFNLEVBQUMsTUFBM0Y7QUFBa0dDLFVBQU0sRUFBQyxNQUF6RztBQUFnSEMsV0FBTyxFQUFDLE9BQXhIO0FBQWdJNUwsU0FBSyxFQUFDLENBQXRJO0FBQXdJdUosVUFBTSxFQUFDLENBQS9JO0FBQWlKc0MsWUFBUSxFQUFDLE1BQTFKO0FBQWlLQyxZQUFRLEVBQUMsTUFBMUs7QUFBaUxDLGFBQVMsRUFBQyxNQUEzTDtBQUFrTUMsYUFBUyxFQUFDLE1BQTVNO0FBQW1OeEMsYUFBbk47QUFBNk5DO0FBQTdOLEdBQXRCLEVBQW1RbEIsV0FBVyxLQUFHLE1BQWQsR0FBcUI7QUFBQzFNLFVBQU0sRUFBQyxZQUFSO0FBQXFCbU4sa0JBQWMsRUFBQyxPQUFwQztBQUE0Q0MsbUJBQWUsRUFBRSxRQUFPUyxXQUFZO0FBQWhGLEdBQXJCLEdBQTBHL0UsU0FBN1csQ0FBYjs7QUFBcVksTUFBRyxPQUFPc0YsUUFBUCxLQUFrQixXQUFsQixJQUErQixPQUFPQyxTQUFQLEtBQW1CLFdBQWxELElBQStENUQsTUFBTSxLQUFHLE1BQTNFLEVBQWtGO0FBQUM7QUFDbnJCLFVBQU0yRixRQUFRLEdBQUMvQixTQUFTLEdBQUNELFFBQXpCO0FBQWtDLFVBQU1pQyxVQUFVLEdBQUNDLEtBQUssQ0FBQ0YsUUFBRCxDQUFMLEdBQWdCLE1BQWhCLEdBQXdCLEdBQUVBLFFBQVEsR0FBQyxHQUFJLEdBQXhEOztBQUEyRCxRQUFHM0YsTUFBTSxLQUFHLFlBQVosRUFBeUI7QUFBQztBQUN2SHlFLGtCQUFZLEdBQUM7QUFBQ2EsZUFBTyxFQUFDLE9BQVQ7QUFBaUJRLGdCQUFRLEVBQUMsUUFBMUI7QUFBbUNqQixnQkFBUSxFQUFDLFVBQTVDO0FBQXVESyxpQkFBUyxFQUFDLFlBQWpFO0FBQThFRyxjQUFNLEVBQUM7QUFBckYsT0FBYjtBQUFxR1gsZ0JBQVUsR0FBQztBQUFDWSxlQUFPLEVBQUMsT0FBVDtBQUFpQkosaUJBQVMsRUFBQyxZQUEzQjtBQUF3Q1U7QUFBeEMsT0FBWDtBQUFnRSxLQUR4RSxNQUM2RSxJQUFHNUYsTUFBTSxLQUFHLFdBQVosRUFBd0I7QUFBQztBQUNuTXlFLGtCQUFZLEdBQUM7QUFBQ2EsZUFBTyxFQUFDLGNBQVQ7QUFBd0JFLGdCQUFRLEVBQUMsTUFBakM7QUFBd0NNLGdCQUFRLEVBQUMsUUFBakQ7QUFBMERqQixnQkFBUSxFQUFDLFVBQW5FO0FBQThFSyxpQkFBUyxFQUFDLFlBQXhGO0FBQXFHRyxjQUFNLEVBQUM7QUFBNUcsT0FBYjtBQUE0SFgsZ0JBQVUsR0FBQztBQUFDUSxpQkFBUyxFQUFDLFlBQVg7QUFBd0JJLGVBQU8sRUFBQyxPQUFoQztBQUF3Q0UsZ0JBQVEsRUFBQztBQUFqRCxPQUFYO0FBQW9FYixjQUFRLEdBQUUsZUFBY2hCLFFBQVMsYUFBWUMsU0FBVSxzREFBdkQ7QUFBOEcsS0FEcEksTUFDeUksSUFBRzVELE1BQU0sS0FBRyxPQUFaLEVBQW9CO0FBQUM7QUFDeFV5RSxrQkFBWSxHQUFDO0FBQUNxQixnQkFBUSxFQUFDLFFBQVY7QUFBbUJaLGlCQUFTLEVBQUMsWUFBN0I7QUFBMENJLGVBQU8sRUFBQyxjQUFsRDtBQUFpRVQsZ0JBQVEsRUFBQyxVQUExRTtBQUFxRm5MLGFBQUssRUFBQ2lLLFFBQTNGO0FBQW9HVixjQUFNLEVBQUNXO0FBQTNHLE9BQWI7QUFBb0k7QUFBQyxHQUoyZCxNQUl0ZCxJQUFHLE9BQU9ELFFBQVAsS0FBa0IsV0FBbEIsSUFBK0IsT0FBT0MsU0FBUCxLQUFtQixXQUFsRCxJQUErRDVELE1BQU0sS0FBRyxNQUEzRSxFQUFrRjtBQUFDO0FBQzdOeUUsZ0JBQVksR0FBQztBQUFDYSxhQUFPLEVBQUMsT0FBVDtBQUFpQlEsY0FBUSxFQUFDLFFBQTFCO0FBQW1DakIsY0FBUSxFQUFDLFVBQTVDO0FBQXVEQyxTQUFHLEVBQUMsQ0FBM0Q7QUFBNkRDLFVBQUksRUFBQyxDQUFsRTtBQUFvRUMsWUFBTSxFQUFDLENBQTNFO0FBQTZFQyxXQUFLLEVBQUMsQ0FBbkY7QUFBcUZDLGVBQVMsRUFBQyxZQUEvRjtBQUE0R0csWUFBTSxFQUFDO0FBQW5ILEtBQWI7QUFBb0ksR0FETSxNQUNGO0FBQUM7QUFDekksY0FBdUM7QUFBQyxZQUFNLElBQUl4RCxLQUFKLENBQVcsbUJBQWtCL0MsR0FBSSx5RUFBakMsQ0FBTjtBQUFrSDtBQUFDOztBQUFBLE1BQUlpSCxhQUFhLEdBQUM7QUFBQ2pILE9BQUcsRUFBQyxnRkFBTDtBQUFzRnNDLFVBQU0sRUFBQy9DLFNBQTdGO0FBQXVHNEIsU0FBSyxFQUFDNUI7QUFBN0csR0FBbEI7O0FBQTBJLE1BQUdtRyxTQUFILEVBQWE7QUFBQ3VCLGlCQUFhLEdBQUM5RSxnQkFBZ0IsQ0FBQztBQUFDbkMsU0FBRDtBQUFLb0MsaUJBQUw7QUFBaUJsQixZQUFqQjtBQUF3QnRHLFdBQUssRUFBQ2lLLFFBQTlCO0FBQXVDeEMsYUFBTyxFQUFDMEMsVUFBL0M7QUFBMEQ1RCxXQUExRDtBQUFnRVg7QUFBaEUsS0FBRCxDQUE5QjtBQUF5Rzs7QUFBQSxTQUFNLGFBQWF4QixNQUFNLENBQUNpQixPQUFQLENBQWVpSCxhQUFmLENBQTZCLEtBQTdCLEVBQW1DO0FBQUN2RCxTQUFLLEVBQUNnQztBQUFQLEdBQW5DLEVBQXdEQyxVQUFVLEdBQUMsYUFBYTVHLE1BQU0sQ0FBQ2lCLE9BQVAsQ0FBZWlILGFBQWYsQ0FBNkIsS0FBN0IsRUFBbUM7QUFBQ3ZELFNBQUssRUFBQ2lDO0FBQVAsR0FBbkMsRUFBc0RDLFFBQVEsR0FBQyxhQUFhN0csTUFBTSxDQUFDaUIsT0FBUCxDQUFlaUgsYUFBZixDQUE2QixLQUE3QixFQUFtQztBQUFDdkQsU0FBSyxFQUFDO0FBQUMrQyxjQUFRLEVBQUMsTUFBVjtBQUFpQkYsYUFBTyxFQUFDLE9BQXpCO0FBQWlDRCxZQUFNLEVBQUMsQ0FBeEM7QUFBMENELFlBQU0sRUFBQyxNQUFqRDtBQUF3REQsYUFBTyxFQUFDO0FBQWhFLEtBQVA7QUFBMEVjLE9BQUcsRUFBQyxFQUE5RTtBQUFpRixtQkFBYyxJQUEvRjtBQUFvR0MsUUFBSSxFQUFDLGNBQXpHO0FBQXdIcEgsT0FBRyxFQUFFLDZCQUE0QixDQUFDLEdBQUVkLE9BQU8sQ0FBQ21JLFFBQVgsRUFBcUJ4QixRQUFyQixDQUErQjtBQUF4TCxHQUFuQyxDQUFkLEdBQTZPLElBQTNTLENBQWQsR0FBK1QsSUFBalksRUFBc1ksQ0FBQ0gsU0FBRCxJQUFZLGFBQWExRyxNQUFNLENBQUNpQixPQUFQLENBQWVpSCxhQUFmLENBQTZCLFVBQTdCLEVBQXdDLElBQXhDLEVBQTZDLGFBQWFsSSxNQUFNLENBQUNpQixPQUFQLENBQWVpSCxhQUFmLENBQTZCLEtBQTdCLEVBQW1DNVEsTUFBTSxDQUFDZ1IsTUFBUCxDQUFjLEVBQWQsRUFBaUI5QyxJQUFqQixFQUFzQnJDLGdCQUFnQixDQUFDO0FBQUNuQyxPQUFEO0FBQUtvQyxlQUFMO0FBQWlCbEIsVUFBakI7QUFBd0J0RyxTQUFLLEVBQUNpSyxRQUE5QjtBQUF1Q3hDLFdBQU8sRUFBQzBDLFVBQS9DO0FBQTBENUQsU0FBMUQ7QUFBZ0VYO0FBQWhFLEdBQUQsQ0FBdEMsRUFBZ0g7QUFBQ1IsT0FBRyxFQUFDQSxHQUFMO0FBQVN1SCxZQUFRLEVBQUMsT0FBbEI7QUFBMEJwRyxTQUFLLEVBQUNBLEtBQWhDO0FBQXNDd0MsU0FBSyxFQUFDbUMsUUFBNUM7QUFBcUQ1QixhQUFTLEVBQUNBO0FBQS9ELEdBQWhILENBQW5DLENBQTFELENBQS9aLEVBQXlyQixhQUFhbEYsTUFBTSxDQUFDaUIsT0FBUCxDQUFlaUgsYUFBZixDQUE2QixLQUE3QixFQUFtQzVRLE1BQU0sQ0FBQ2dSLE1BQVAsQ0FBYyxFQUFkLEVBQWlCOUMsSUFBakIsRUFBc0J5QyxhQUF0QixFQUFvQztBQUFDTSxZQUFRLEVBQUMsT0FBVjtBQUFrQnJELGFBQVMsRUFBQ0EsU0FBNUI7QUFBc0M5TixPQUFHLEVBQUNvUixPQUFPLElBQUU7QUFBQ25DLFlBQU0sQ0FBQ21DLE9BQUQsQ0FBTjtBQUFnQnZFLHVCQUFpQixDQUFDdUUsT0FBRCxFQUFTckUsV0FBVCxDQUFqQjtBQUF3QyxLQUE1RztBQUE2R1EsU0FBSyxFQUFDbUM7QUFBbkgsR0FBcEMsQ0FBbkMsQ0FBdHNCLEVBQTQ0QjdCLFFBQVE7QUFBQztBQUFjO0FBQ2wxQztBQUNBO0FBQ0E7QUFDQTtBQUNBakYsUUFBTSxDQUFDaUIsT0FBUCxDQUFlaUgsYUFBZixDQUE2QmpJLEtBQUssQ0FBQ2dCLE9BQW5DLEVBQTJDLElBQTNDLEVBQWdELGFBQWFqQixNQUFNLENBQUNpQixPQUFQLENBQWVpSCxhQUFmLENBQTZCLE1BQTdCLEVBQW9DO0FBQUN4USxPQUFHLEVBQUMsWUFBVXVRLGFBQWEsQ0FBQ2pILEdBQXhCLEdBQTRCaUgsYUFBYSxDQUFDM0UsTUFBMUMsR0FBaUQyRSxhQUFhLENBQUM5RixLQUFwRTtBQUEwRXNHLE9BQUcsRUFBQyxTQUE5RTtBQUF3RkMsTUFBRSxFQUFDLE9BQTNGO0FBQW1HQyxRQUFJLEVBQUNWLGFBQWEsQ0FBQzNFLE1BQWQsR0FBcUIvQyxTQUFyQixHQUErQjBILGFBQWEsQ0FBQ2pILEdBQXJKLENBQXdKO0FBQXhKO0FBQ2hHNEgsZUFBVyxFQUFDWCxhQUFhLENBQUMzRSxNQURzRSxDQUNoRTtBQURnRTtBQUVoR3VGLGNBQVUsRUFBQ1osYUFBYSxDQUFDOUY7QUFGdUUsR0FBcEMsQ0FBN0QsQ0FMbTBDLEdBT2h5QyxJQVA0WSxDQUFuQjtBQU9sWCxDLENBQUE7OztBQUMxQyxTQUFTMkcsWUFBVCxDQUFzQjlILEdBQXRCLEVBQTBCO0FBQUMsU0FBT0EsR0FBRyxDQUFDLENBQUQsQ0FBSCxLQUFTLEdBQVQsR0FBYUEsR0FBRyxDQUFDdk0sS0FBSixDQUFVLENBQVYsQ0FBYixHQUEwQnVNLEdBQWpDO0FBQXNDOztBQUFBLFNBQVNOLFdBQVQsQ0FBcUI7QUFBQ29ELE1BQUQ7QUFBTTlDLEtBQU47QUFBVXBGLE9BQVY7QUFBZ0J5SDtBQUFoQixDQUFyQixFQUE4QztBQUFDO0FBQ2hILFFBQU0wRixNQUFNLEdBQUMsQ0FBQyxhQUFELEVBQWUsU0FBZixFQUF5QixPQUFLbk4sS0FBOUIsQ0FBYjtBQUFrRCxNQUFJb04sWUFBWSxHQUFDLEVBQWpCOztBQUFvQixNQUFHM0YsT0FBSCxFQUFXO0FBQUMwRixVQUFNLENBQUN2RyxJQUFQLENBQVksT0FBS2EsT0FBakI7QUFBMkI7O0FBQUEsTUFBRzBGLE1BQU0sQ0FBQ3JHLE1BQVYsRUFBaUI7QUFBQ3NHLGdCQUFZLEdBQUMsTUFBSUQsTUFBTSxDQUFDdkYsSUFBUCxDQUFZLEdBQVosQ0FBakI7QUFBbUM7O0FBQUEsU0FBTyxHQUFFTSxJQUFLLEdBQUVnRixZQUFZLENBQUM5SCxHQUFELENBQU0sR0FBRWdJLFlBQWEsRUFBakQ7QUFBb0Q7O0FBQUEsU0FBU3BJLFlBQVQsQ0FBc0I7QUFBQ2tELE1BQUQ7QUFBTTlDLEtBQU47QUFBVXBGO0FBQVYsQ0FBdEIsRUFBdUM7QUFBQyxTQUFPLEdBQUVrSSxJQUFLLEdBQUVnRixZQUFZLENBQUM5SCxHQUFELENBQU0sWUFBV3BGLEtBQU0sRUFBbkQ7QUFBc0Q7O0FBQUEsU0FBUytFLGdCQUFULENBQTBCO0FBQUNtRCxNQUFEO0FBQU05QyxLQUFOO0FBQVVwRixPQUFWO0FBQWdCeUg7QUFBaEIsQ0FBMUIsRUFBbUQ7QUFBQztBQUN4VyxRQUFNMEYsTUFBTSxHQUFDLENBQUMsUUFBRCxFQUFVLFNBQVYsRUFBb0IsT0FBS25OLEtBQXpCLEVBQStCLFFBQU15SCxPQUFPLElBQUUsTUFBZixDQUEvQixDQUFiO0FBQW9FLE1BQUkyRixZQUFZLEdBQUNELE1BQU0sQ0FBQ3ZGLElBQVAsQ0FBWSxHQUFaLElBQWlCLEdBQWxDO0FBQXNDLFNBQU8sR0FBRU0sSUFBSyxHQUFFa0YsWUFBYSxHQUFFRixZQUFZLENBQUM5SCxHQUFELENBQU0sRUFBakQ7QUFBb0Q7O0FBQUEsU0FBU0gsYUFBVCxDQUF1QjtBQUFDaUQsTUFBRDtBQUFNOUMsS0FBTjtBQUFVcEYsT0FBVjtBQUFnQnlIO0FBQWhCLENBQXZCLEVBQWdEO0FBQUMsWUFBdUM7QUFBQyxVQUFNNEYsYUFBYSxHQUFDLEVBQXBCLENBQUQsQ0FBd0I7O0FBQzlRLFFBQUcsQ0FBQ2pJLEdBQUosRUFBUWlJLGFBQWEsQ0FBQ3pHLElBQWQsQ0FBbUIsS0FBbkI7QUFBMEIsUUFBRyxDQUFDNUcsS0FBSixFQUFVcU4sYUFBYSxDQUFDekcsSUFBZCxDQUFtQixPQUFuQjs7QUFBNEIsUUFBR3lHLGFBQWEsQ0FBQ3ZHLE1BQWQsR0FBcUIsQ0FBeEIsRUFBMEI7QUFBQyxZQUFNLElBQUlxQixLQUFKLENBQVcsb0NBQW1Da0YsYUFBYSxDQUFDekYsSUFBZCxDQUFtQixJQUFuQixDQUF5QixnR0FBK0ZtQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUFDNUUsV0FBRDtBQUFLcEYsYUFBTDtBQUFXeUg7QUFBWCxPQUFmLENBQW9DLEVBQTFNLENBQU47QUFBb047O0FBQUEsUUFBR3JDLEdBQUcsQ0FBQ3FELFVBQUosQ0FBZSxJQUFmLENBQUgsRUFBd0I7QUFBQyxZQUFNLElBQUlOLEtBQUosQ0FBVyx3QkFBdUIvQyxHQUFJLDBHQUF0QyxDQUFOO0FBQXdKOztBQUFBLFFBQUcsQ0FBQ0EsR0FBRyxDQUFDcUQsVUFBSixDQUFlLEdBQWYsQ0FBRCxJQUFzQnhDLGFBQXpCLEVBQXVDO0FBQUMsVUFBSXFILFNBQUo7O0FBQWMsVUFBRztBQUFDQSxpQkFBUyxHQUFDLElBQUlDLEdBQUosQ0FBUW5JLEdBQVIsQ0FBVjtBQUF3QixPQUE1QixDQUE0QixPQUFNb0ksR0FBTixFQUFVO0FBQUNuRCxlQUFPLENBQUNvRCxLQUFSLENBQWNELEdBQWQ7QUFBbUIsY0FBTSxJQUFJckYsS0FBSixDQUFXLHdCQUF1Qi9DLEdBQUksaUlBQXRDLENBQU47QUFBK0s7O0FBQUEsVUFBRyxDQUFDYSxhQUFhLENBQUN0TCxRQUFkLENBQXVCMlMsU0FBUyxDQUFDSSxRQUFqQyxDQUFKLEVBQStDO0FBQUMsY0FBTSxJQUFJdkYsS0FBSixDQUFXLHFCQUFvQi9DLEdBQUksa0NBQWlDa0ksU0FBUyxDQUFDSSxRQUFTLCtEQUE3RSxHQUE2SSw4RUFBdkosQ0FBTjtBQUE2TztBQUFDO0FBQUM7O0FBQUEsU0FBTyxHQUFFeEYsSUFBSyxRQUFPeUYsa0JBQWtCLENBQUN2SSxHQUFELENBQU0sTUFBS3BGLEtBQU0sTUFBS3lILE9BQU8sSUFBRSxFQUFHLEVBQXpFO0FBQTRFLEM7Ozs7Ozs7Ozs7O0FDL0NybUM7O0FBQUEsSUFBSW1HLHVCQUF1QixHQUFDN0osbUJBQU8sQ0FBQyx3SUFBRCxDQUFuQzs7QUFBcUZDLGtCQUFBLEdBQW1CLElBQW5CO0FBQXdCQSxlQUFBLEdBQWdCLEtBQUssQ0FBckI7O0FBQXVCLElBQUlJLE1BQU0sR0FBQ3dKLHVCQUF1QixDQUFDN0osbUJBQU8sQ0FBQyxvQkFBRCxDQUFSLENBQWxDOztBQUFxRCxJQUFJOEosT0FBTyxHQUFDOUosbUJBQU8sQ0FBQyxtR0FBRCxDQUFuQjs7QUFBd0QsSUFBSStKLFFBQVEsR0FBQy9KLG1CQUFPLENBQUMsMkRBQUQsQ0FBcEI7O0FBQWlDLElBQUlTLGdCQUFnQixHQUFDVCxtQkFBTyxDQUFDLCtFQUFELENBQTVCOztBQUFtRCxNQUFNZ0ssVUFBVSxHQUFDLEVBQWpCOztBQUFvQixTQUFTQyxRQUFULENBQWtCQyxNQUFsQixFQUF5QmxCLElBQXpCLEVBQThCRCxFQUE5QixFQUFpQ29CLE9BQWpDLEVBQXlDO0FBQUMsTUFBRyxJQUFILEVBQXdDO0FBQU8sTUFBRyxDQUFDLENBQUMsR0FBRUwsT0FBTyxDQUFDTSxVQUFYLEVBQXVCcEIsSUFBdkIsQ0FBSixFQUFpQyxPQUFqRixDQUF3RjtBQUN2ZTtBQUNBO0FBQ0E7O0FBQ0FrQixRQUFNLENBQUNELFFBQVAsQ0FBZ0JqQixJQUFoQixFQUFxQkQsRUFBckIsRUFBd0JvQixPQUF4QixFQUFpQ3JGLEtBQWpDLENBQXVDMkUsR0FBRyxJQUFFO0FBQUMsY0FBdUM7QUFBQztBQUNyRixZQUFNQSxHQUFOO0FBQVc7QUFBQyxHQURaO0FBQ2MsUUFBTVksU0FBUyxHQUFDRixPQUFPLElBQUUsT0FBT0EsT0FBTyxDQUFDRyxNQUFmLEtBQXdCLFdBQWpDLEdBQTZDSCxPQUFPLENBQUNHLE1BQXJELEdBQTRESixNQUFNLElBQUVBLE1BQU0sQ0FBQ0ksTUFBM0YsQ0FMaVksQ0FLL1I7O0FBQ2hITixZQUFVLENBQUNoQixJQUFJLEdBQUMsR0FBTCxHQUFTRCxFQUFULElBQWFzQixTQUFTLEdBQUMsTUFBSUEsU0FBTCxHQUFlLEVBQXJDLENBQUQsQ0FBVixHQUFxRCxJQUFyRDtBQUEyRDs7QUFBQSxTQUFTRSxlQUFULENBQXlCQyxLQUF6QixFQUErQjtBQUFDLFFBQUs7QUFBQ0M7QUFBRCxNQUFTRCxLQUFLLENBQUNFLGFBQXBCO0FBQWtDLFNBQU9ELE1BQU0sSUFBRUEsTUFBTSxLQUFHLE9BQWpCLElBQTBCRCxLQUFLLENBQUNHLE9BQWhDLElBQXlDSCxLQUFLLENBQUNJLE9BQS9DLElBQXdESixLQUFLLENBQUNLLFFBQTlELElBQXdFTCxLQUFLLENBQUNNLE1BQTlFLElBQXNGO0FBQzFOTixPQUFLLENBQUNPLFdBQU4sSUFBbUJQLEtBQUssQ0FBQ08sV0FBTixDQUFrQkMsS0FBbEIsS0FBMEIsQ0FEZ0Y7QUFDN0U7O0FBQUEsU0FBU0MsV0FBVCxDQUFxQkMsQ0FBckIsRUFBdUJoQixNQUF2QixFQUE4QmxCLElBQTlCLEVBQW1DRCxFQUFuQyxFQUFzQ29DLE9BQXRDLEVBQThDQyxPQUE5QyxFQUFzREMsTUFBdEQsRUFBNkRmLE1BQTdELEVBQW9FO0FBQUMsUUFBSztBQUFDZ0I7QUFBRCxNQUFXSixDQUFDLENBQUNSLGFBQWxCOztBQUFnQyxNQUFHWSxRQUFRLEtBQUcsR0FBWCxLQUFpQmYsZUFBZSxDQUFDVyxDQUFELENBQWYsSUFBb0IsQ0FBQyxDQUFDLEdBQUVwQixPQUFPLENBQUNNLFVBQVgsRUFBdUJwQixJQUF2QixDQUF0QyxDQUFILEVBQXVFO0FBQUM7QUFDN047QUFBUTs7QUFBQWtDLEdBQUMsQ0FBQ0ssY0FBRixHQUQ0RyxDQUN6Rjs7QUFDM0IsTUFBR0YsTUFBTSxJQUFFLElBQVIsSUFBY3RDLEVBQUUsQ0FBQ3lDLE9BQUgsQ0FBVyxHQUFYLEtBQWlCLENBQWxDLEVBQW9DO0FBQUNILFVBQU0sR0FBQyxLQUFQO0FBQWMsR0FGaUUsQ0FFakU7OztBQUNuRG5CLFFBQU0sQ0FBQ2lCLE9BQU8sR0FBQyxTQUFELEdBQVcsTUFBbkIsQ0FBTixDQUFpQ25DLElBQWpDLEVBQXNDRCxFQUF0QyxFQUF5QztBQUFDcUMsV0FBRDtBQUFTZCxVQUFUO0FBQWdCZTtBQUFoQixHQUF6QztBQUFtRTs7QUFBQSxTQUFTM1YsSUFBVCxDQUFjM0IsS0FBZCxFQUFvQjtBQUFDLFlBQXVDO0FBQUMsYUFBUzBYLGVBQVQsQ0FBeUJDLElBQXpCLEVBQThCO0FBQUMsYUFBTyxJQUFJdEgsS0FBSixDQUFXLGdDQUErQnNILElBQUksQ0FBQzNULEdBQUksZ0JBQWUyVCxJQUFJLENBQUNDLFFBQVMsNkJBQTRCRCxJQUFJLENBQUNFLE1BQU8sYUFBOUcsSUFBNEgsU0FBNEIsQ0FBNUIsR0FBK0YsRUFBM04sQ0FBVixDQUFQO0FBQWtQLEtBQWxSLENBQWtSOzs7QUFDalosVUFBTUMsa0JBQWtCLEdBQUM7QUFBQzdDLFVBQUksRUFBQztBQUFOLEtBQXpCO0FBQXFDLFVBQU04QyxhQUFhLEdBQUNuVSxNQUFNLENBQUNvVSxJQUFQLENBQVlGLGtCQUFaLENBQXBCO0FBQW9EQyxpQkFBYSxDQUFDRSxPQUFkLENBQXNCalUsR0FBRyxJQUFFO0FBQUMsVUFBR0EsR0FBRyxLQUFHLE1BQVQsRUFBZ0I7QUFBQyxZQUFHaEUsS0FBSyxDQUFDZ0UsR0FBRCxDQUFMLElBQVksSUFBWixJQUFrQixPQUFPaEUsS0FBSyxDQUFDZ0UsR0FBRCxDQUFaLEtBQW9CLFFBQXBCLElBQThCLE9BQU9oRSxLQUFLLENBQUNnRSxHQUFELENBQVosS0FBb0IsUUFBdkUsRUFBZ0Y7QUFBQyxnQkFBTTBULGVBQWUsQ0FBQztBQUFDMVQsZUFBRDtBQUFLNFQsb0JBQVEsRUFBQyxzQkFBZDtBQUFxQ0Msa0JBQU0sRUFBQzdYLEtBQUssQ0FBQ2dFLEdBQUQsQ0FBTCxLQUFhLElBQWIsR0FBa0IsTUFBbEIsR0FBeUIsT0FBT2hFLEtBQUssQ0FBQ2dFLEdBQUQ7QUFBakYsV0FBRCxDQUFyQjtBQUFnSDtBQUFDLE9BQW5OLE1BQXVOO0FBQUM7QUFDN1U7QUFDQSxjQUFNa1UsQ0FBQyxHQUFDbFUsR0FBUjtBQUFhO0FBQUMsS0FGMkUsRUFEc0MsQ0FHL0c7O0FBQ2hCLFVBQU1tVSxrQkFBa0IsR0FBQztBQUFDbkQsUUFBRSxFQUFDLElBQUo7QUFBU29DLGFBQU8sRUFBQyxJQUFqQjtBQUFzQkUsWUFBTSxFQUFDLElBQTdCO0FBQWtDRCxhQUFPLEVBQUMsSUFBMUM7QUFBK0NlLGNBQVEsRUFBQyxJQUF4RDtBQUE2RGxDLGNBQVEsRUFBQyxJQUF0RTtBQUEyRUssWUFBTSxFQUFDO0FBQWxGLEtBQXpCO0FBQWlILFVBQU04QixhQUFhLEdBQUN6VSxNQUFNLENBQUNvVSxJQUFQLENBQVlHLGtCQUFaLENBQXBCO0FBQW9ERSxpQkFBYSxDQUFDSixPQUFkLENBQXNCalUsR0FBRyxJQUFFO0FBQUMsWUFBTXNVLE9BQU8sR0FBQyxPQUFPdFksS0FBSyxDQUFDZ0UsR0FBRCxDQUExQjs7QUFBZ0MsVUFBR0EsR0FBRyxLQUFHLElBQVQsRUFBYztBQUFDLFlBQUdoRSxLQUFLLENBQUNnRSxHQUFELENBQUwsSUFBWXNVLE9BQU8sS0FBRyxRQUF0QixJQUFnQ0EsT0FBTyxLQUFHLFFBQTdDLEVBQXNEO0FBQUMsZ0JBQU1aLGVBQWUsQ0FBQztBQUFDMVQsZUFBRDtBQUFLNFQsb0JBQVEsRUFBQyxzQkFBZDtBQUFxQ0Msa0JBQU0sRUFBQ1M7QUFBNUMsV0FBRCxDQUFyQjtBQUE2RTtBQUFDLE9BQXBKLE1BQXlKLElBQUd0VSxHQUFHLEtBQUcsUUFBVCxFQUFrQjtBQUFDLFlBQUdoRSxLQUFLLENBQUNnRSxHQUFELENBQUwsSUFBWXNVLE9BQU8sS0FBRyxRQUF6QixFQUFrQztBQUFDLGdCQUFNWixlQUFlLENBQUM7QUFBQzFULGVBQUQ7QUFBSzRULG9CQUFRLEVBQUMsVUFBZDtBQUF5QkMsa0JBQU0sRUFBQ1M7QUFBaEMsV0FBRCxDQUFyQjtBQUFpRTtBQUFDLE9BQXhILE1BQTZILElBQUd0VSxHQUFHLEtBQUcsU0FBTixJQUFpQkEsR0FBRyxLQUFHLFFBQXZCLElBQWlDQSxHQUFHLEtBQUcsU0FBdkMsSUFBa0RBLEdBQUcsS0FBRyxVQUF4RCxJQUFvRUEsR0FBRyxLQUFHLFVBQTdFLEVBQXdGO0FBQUMsWUFBR2hFLEtBQUssQ0FBQ2dFLEdBQUQsQ0FBTCxJQUFZLElBQVosSUFBa0JzVSxPQUFPLEtBQUcsU0FBL0IsRUFBeUM7QUFBQyxnQkFBTVosZUFBZSxDQUFDO0FBQUMxVCxlQUFEO0FBQUs0VCxvQkFBUSxFQUFDLFdBQWQ7QUFBMEJDLGtCQUFNLEVBQUNTO0FBQWpDLFdBQUQsQ0FBckI7QUFBa0U7QUFBQyxPQUF0TSxNQUEwTTtBQUFDO0FBQ2xzQjtBQUNBLGNBQU1KLENBQUMsR0FBQ2xVLEdBQVI7QUFBYTtBQUFDLEtBRnVKLEVBSnRDLENBTS9HO0FBQ2hCOztBQUNBLFVBQU11VSxTQUFTLEdBQUNqTSxNQUFNLENBQUNpQixPQUFQLENBQWVpTCxNQUFmLENBQXNCLEtBQXRCLENBQWhCOztBQUE2QyxRQUFHeFksS0FBSyxDQUFDa1csUUFBTixJQUFnQixDQUFDcUMsU0FBUyxDQUFDRSxPQUE5QixFQUFzQztBQUFDRixlQUFTLENBQUNFLE9BQVYsR0FBa0IsSUFBbEI7QUFBdUJsRyxhQUFPLENBQUNDLElBQVIsQ0FBYSxzS0FBYjtBQUFzTDtBQUFDOztBQUFBLFFBQU1qSixDQUFDLEdBQUN2SixLQUFLLENBQUNrVyxRQUFOLEtBQWlCLEtBQXpCO0FBQStCLFFBQU1DLE1BQU0sR0FBQyxDQUFDLEdBQUVILFFBQVEsQ0FBQzBDLFNBQVosR0FBYjs7QUFBc0MsUUFBSztBQUFDekQsUUFBRDtBQUFNRDtBQUFOLE1BQVUxSSxNQUFNLENBQUNpQixPQUFQLENBQWVvTCxPQUFmLENBQXVCLE1BQUk7QUFBQyxVQUFLLENBQUNDLFlBQUQsRUFBY0MsVUFBZCxJQUEwQixDQUFDLEdBQUU5QyxPQUFPLENBQUMrQyxXQUFYLEVBQXdCM0MsTUFBeEIsRUFBK0JuVyxLQUFLLENBQUNpVixJQUFyQyxFQUEwQyxJQUExQyxDQUEvQjtBQUErRSxXQUFNO0FBQUNBLFVBQUksRUFBQzJELFlBQU47QUFBbUI1RCxRQUFFLEVBQUNoVixLQUFLLENBQUNnVixFQUFOLEdBQVMsQ0FBQyxHQUFFZSxPQUFPLENBQUMrQyxXQUFYLEVBQXdCM0MsTUFBeEIsRUFBK0JuVyxLQUFLLENBQUNnVixFQUFyQyxDQUFULEdBQWtENkQsVUFBVSxJQUFFRDtBQUFwRixLQUFOO0FBQXlHLEdBQXBOLEVBQXFOLENBQUN6QyxNQUFELEVBQVFuVyxLQUFLLENBQUNpVixJQUFkLEVBQW1CalYsS0FBSyxDQUFDZ1YsRUFBekIsQ0FBck4sQ0FBZjs7QUFBa1EsTUFBRztBQUFDelMsWUFBRDtBQUFVNlUsV0FBVjtBQUFrQkMsV0FBbEI7QUFBMEJDLFVBQTFCO0FBQWlDZjtBQUFqQyxNQUF5Q3ZXLEtBQTVDLENBUmxoQixDQVFva0I7O0FBQzNwQixNQUFHLE9BQU91QyxRQUFQLEtBQWtCLFFBQXJCLEVBQThCO0FBQUNBLFlBQVEsR0FBQyxhQUFhK0osTUFBTSxDQUFDaUIsT0FBUCxDQUFlaUgsYUFBZixDQUE2QixHQUE3QixFQUFpQyxJQUFqQyxFQUFzQ2pTLFFBQXRDLENBQXRCO0FBQXVFLEdBVGYsQ0FTZTs7O0FBQ3RHLE1BQUl3VyxLQUFKOztBQUFVLFlBQXdDO0FBQUMsUUFBRztBQUFDQSxXQUFLLEdBQUN6TSxNQUFNLENBQUMwTSxRQUFQLENBQWdCQyxJQUFoQixDQUFxQjFXLFFBQXJCLENBQU47QUFBc0MsS0FBMUMsQ0FBMEMsT0FBTW1ULEdBQU4sRUFBVTtBQUFDLFlBQU0sSUFBSXJGLEtBQUosQ0FBVyw4REFBNkRyUSxLQUFLLENBQUNpVixJQUFLLDRGQUF6RSxJQUFzSyxTQUE0QixDQUE1QixHQUErRixFQUFyUSxDQUFWLENBQU47QUFBMlI7QUFBQyxHQUExWCxNQUE4WCxFQUF1Qzs7QUFBQSxRQUFNaUUsUUFBUSxHQUFDSCxLQUFLLElBQUUsT0FBT0EsS0FBUCxLQUFlLFFBQXRCLElBQWdDQSxLQUFLLENBQUNyVixHQUFyRDtBQUF5RCxRQUFLLENBQUN5VixrQkFBRCxFQUFvQm5HLFNBQXBCLElBQStCLENBQUMsR0FBRXRHLGdCQUFnQixDQUFDbUcsZUFBcEIsRUFBcUM7QUFBQ0MsY0FBVSxFQUFDO0FBQVosR0FBckMsQ0FBcEM7O0FBQStGLFFBQU1ILE1BQU0sR0FBQ3JHLE1BQU0sQ0FBQ2lCLE9BQVAsQ0FBZTZMLFdBQWYsQ0FBMkJDLEVBQUUsSUFBRTtBQUFDRixzQkFBa0IsQ0FBQ0UsRUFBRCxDQUFsQjs7QUFBdUIsUUFBR0gsUUFBSCxFQUFZO0FBQUMsVUFBRyxPQUFPQSxRQUFQLEtBQWtCLFVBQXJCLEVBQWdDQSxRQUFRLENBQUNHLEVBQUQsQ0FBUixDQUFoQyxLQUFrRCxJQUFHLE9BQU9ILFFBQVAsS0FBa0IsUUFBckIsRUFBOEI7QUFBQ0EsZ0JBQVEsQ0FBQ1QsT0FBVCxHQUFpQlksRUFBakI7QUFBcUI7QUFBQztBQUFDLEdBQTVLLEVBQTZLLENBQUNILFFBQUQsRUFBVUMsa0JBQVYsQ0FBN0ssQ0FBYjs7QUFBeU4sR0FBQyxHQUFFN00sTUFBTSxDQUFDZ04sU0FBVixFQUFxQixNQUFJO0FBQUMsVUFBTUMsY0FBYyxHQUFDdkcsU0FBUyxJQUFFekosQ0FBWCxJQUFjLENBQUMsR0FBRXdNLE9BQU8sQ0FBQ00sVUFBWCxFQUF1QnBCLElBQXZCLENBQW5DO0FBQWdFLFVBQU1xQixTQUFTLEdBQUMsT0FBT0MsTUFBUCxLQUFnQixXQUFoQixHQUE0QkEsTUFBNUIsR0FBbUNKLE1BQU0sSUFBRUEsTUFBTSxDQUFDSSxNQUFsRTtBQUF5RSxVQUFNaUQsWUFBWSxHQUFDdkQsVUFBVSxDQUFDaEIsSUFBSSxHQUFDLEdBQUwsR0FBU0QsRUFBVCxJQUFhc0IsU0FBUyxHQUFDLE1BQUlBLFNBQUwsR0FBZSxFQUFyQyxDQUFELENBQTdCOztBQUF3RSxRQUFHaUQsY0FBYyxJQUFFLENBQUNDLFlBQXBCLEVBQWlDO0FBQUN0RCxjQUFRLENBQUNDLE1BQUQsRUFBUWxCLElBQVIsRUFBYUQsRUFBYixFQUFnQjtBQUFDdUIsY0FBTSxFQUFDRDtBQUFSLE9BQWhCLENBQVI7QUFBNkM7QUFBQyxHQUEzVCxFQUE0VCxDQUFDdEIsRUFBRCxFQUFJQyxJQUFKLEVBQVNqQyxTQUFULEVBQW1CdUQsTUFBbkIsRUFBMEJoTixDQUExQixFQUE0QjRNLE1BQTVCLENBQTVUO0FBQWlXLFFBQU1zRCxVQUFVLEdBQUM7QUFBQy9WLE9BQUcsRUFBQ2lQLE1BQUw7QUFBWStHLFdBQU8sRUFBQ3ZDLENBQUMsSUFBRTtBQUFDLFVBQUc0QixLQUFLLENBQUMvWSxLQUFOLElBQWEsT0FBTytZLEtBQUssQ0FBQy9ZLEtBQU4sQ0FBWTBaLE9BQW5CLEtBQTZCLFVBQTdDLEVBQXdEO0FBQUNYLGFBQUssQ0FBQy9ZLEtBQU4sQ0FBWTBaLE9BQVosQ0FBb0J2QyxDQUFwQjtBQUF3Qjs7QUFBQSxVQUFHLENBQUNBLENBQUMsQ0FBQ3dDLGdCQUFOLEVBQXVCO0FBQUN6QyxtQkFBVyxDQUFDQyxDQUFELEVBQUdoQixNQUFILEVBQVVsQixJQUFWLEVBQWVELEVBQWYsRUFBa0JvQyxPQUFsQixFQUEwQkMsT0FBMUIsRUFBa0NDLE1BQWxDLEVBQXlDZixNQUF6QyxDQUFYO0FBQTZEO0FBQUM7QUFBL0wsR0FBakI7O0FBQWtOa0QsWUFBVSxDQUFDRyxZQUFYLEdBQXdCekMsQ0FBQyxJQUFFO0FBQUMsUUFBRyxDQUFDLENBQUMsR0FBRXBCLE9BQU8sQ0FBQ00sVUFBWCxFQUF1QnBCLElBQXZCLENBQUosRUFBaUM7O0FBQU8sUUFBRzhELEtBQUssQ0FBQy9ZLEtBQU4sSUFBYSxPQUFPK1ksS0FBSyxDQUFDL1ksS0FBTixDQUFZNFosWUFBbkIsS0FBa0MsVUFBbEQsRUFBNkQ7QUFBQ2IsV0FBSyxDQUFDL1ksS0FBTixDQUFZNFosWUFBWixDQUF5QnpDLENBQXpCO0FBQTZCOztBQUFBakIsWUFBUSxDQUFDQyxNQUFELEVBQVFsQixJQUFSLEVBQWFELEVBQWIsRUFBZ0I7QUFBQ3pELGNBQVEsRUFBQztBQUFWLEtBQWhCLENBQVI7QUFBMEMsR0FBek0sQ0FWNXZDLENBVXM4QztBQUM3aEQ7OztBQUNBLE1BQUd2UixLQUFLLENBQUNvWSxRQUFOLElBQWdCVyxLQUFLLENBQUN6VixJQUFOLEtBQWEsR0FBYixJQUFrQixFQUFFLFVBQVN5VixLQUFLLENBQUMvWSxLQUFqQixDQUFyQyxFQUE2RDtBQUFDLFVBQU1zVyxTQUFTLEdBQUMsT0FBT0MsTUFBUCxLQUFnQixXQUFoQixHQUE0QkEsTUFBNUIsR0FBbUNKLE1BQU0sSUFBRUEsTUFBTSxDQUFDSSxNQUFsRSxDQUFELENBQTBFO0FBQ3ZJOztBQUNBLFVBQU1zRCxZQUFZLEdBQUMxRCxNQUFNLElBQUVBLE1BQU0sQ0FBQzJELGNBQWYsSUFBK0IsQ0FBQyxHQUFFL0QsT0FBTyxDQUFDZ0UsZUFBWCxFQUE0Qi9FLEVBQTVCLEVBQStCc0IsU0FBL0IsRUFBeUNILE1BQU0sSUFBRUEsTUFBTSxDQUFDNkQsT0FBeEQsRUFBZ0U3RCxNQUFNLElBQUVBLE1BQU0sQ0FBQzhELGFBQS9FLENBQWxEO0FBQWdKUixjQUFVLENBQUN4RSxJQUFYLEdBQWdCNEUsWUFBWSxJQUFFLENBQUMsR0FBRTlELE9BQU8sQ0FBQ21FLFdBQVgsRUFBd0IsQ0FBQyxHQUFFbkUsT0FBTyxDQUFDb0UsU0FBWCxFQUFzQm5GLEVBQXRCLEVBQXlCc0IsU0FBekIsRUFBbUNILE1BQU0sSUFBRUEsTUFBTSxDQUFDaUUsYUFBbEQsQ0FBeEIsQ0FBOUI7QUFBeUg7O0FBQUEsU0FBTSxhQUFhOU4sTUFBTSxDQUFDaUIsT0FBUCxDQUFlOE0sWUFBZixDQUE0QnRCLEtBQTVCLEVBQWtDVSxVQUFsQyxDQUFuQjtBQUFrRTs7QUFBQSxJQUFJYSxRQUFRLEdBQUMzWSxJQUFiO0FBQWtCdUssZUFBQSxHQUFnQm9PLFFBQWhCLEM7Ozs7Ozs7Ozs7O0FDeEJoVjs7QUFBQXBPLGtCQUFBLEdBQW1CLElBQW5CO0FBQXdCQSwrQkFBQSxHQUFnQ3FPLHVCQUFoQztBQUF3RHJPLGtDQUFBLEdBQW1DLEtBQUssQ0FBeEM7QUFBMEM7QUFDdkk7QUFDQTs7QUFBRyxTQUFTcU8sdUJBQVQsQ0FBaUN2TSxJQUFqQyxFQUFzQztBQUFDLFNBQU9BLElBQUksQ0FBQ3dNLFFBQUwsQ0FBYyxHQUFkLEtBQW9CeE0sSUFBSSxLQUFHLEdBQTNCLEdBQStCQSxJQUFJLENBQUNqTixLQUFMLENBQVcsQ0FBWCxFQUFhLENBQUMsQ0FBZCxDQUEvQixHQUFnRGlOLElBQXZEO0FBQTZEO0FBQUE7QUFDdkc7QUFDQTtBQUNBOzs7QUFBRyxNQUFNeU0sMEJBQTBCLEdBQUNyTSxNQUFBLEdBQWtDSixDQUFsQyxHQUE2S3VNLHVCQUE5TTtBQUFzT3JPLGtDQUFBLEdBQW1DdU8sMEJBQW5DLEM7Ozs7Ozs7Ozs7O0FDTDVOOztBQUFBdk8sa0JBQUEsR0FBbUIsSUFBbkI7QUFBd0JBLDBCQUFBLEdBQTJCQSwyQkFBQSxHQUE0QixLQUFLLENBQTVEOztBQUE4RCxNQUFNd08sbUJBQW1CLEdBQUMsT0FBT0MsSUFBUCxLQUFjLFdBQWQsSUFBMkJBLElBQUksQ0FBQ0QsbUJBQWhDLElBQXFELFVBQVNFLEVBQVQsRUFBWTtBQUFDLE1BQUlDLEtBQUssR0FBQ0MsSUFBSSxDQUFDQyxHQUFMLEVBQVY7QUFBcUIsU0FBT0MsVUFBVSxDQUFDLFlBQVU7QUFBQ0osTUFBRSxDQUFDO0FBQUNLLGdCQUFVLEVBQUMsS0FBWjtBQUFrQkMsbUJBQWEsRUFBQyxZQUFVO0FBQUMsZUFBT2hNLElBQUksQ0FBQ2lNLEdBQUwsQ0FBUyxDQUFULEVBQVcsTUFBSUwsSUFBSSxDQUFDQyxHQUFMLEtBQVdGLEtBQWYsQ0FBWCxDQUFQO0FBQTBDO0FBQXJGLEtBQUQsQ0FBRjtBQUE0RixHQUF4RyxFQUF5RyxDQUF6RyxDQUFqQjtBQUE4SCxDQUEvTzs7QUFBZ1AzTywyQkFBQSxHQUE0QndPLG1CQUE1Qjs7QUFBZ0QsTUFBTVUsa0JBQWtCLEdBQUMsT0FBT1QsSUFBUCxLQUFjLFdBQWQsSUFBMkJBLElBQUksQ0FBQ1Msa0JBQWhDLElBQW9ELFVBQVNDLEVBQVQsRUFBWTtBQUFDLFNBQU9DLFlBQVksQ0FBQ0QsRUFBRCxDQUFuQjtBQUF5QixDQUFuSDs7QUFBb0huUCwwQkFBQSxHQUEyQmtQLGtCQUEzQixDOzs7Ozs7Ozs7OztBQ0ExZTs7QUFBQSxJQUFJcFAsc0JBQXNCLEdBQUNDLG1CQUFPLENBQUMsc0lBQUQsQ0FBbEM7O0FBQW1GQyxrQkFBQSxHQUFtQixJQUFuQjtBQUF3QkEsc0JBQUEsR0FBdUJxUCxjQUF2QjtBQUFzQ3JQLG9CQUFBLEdBQXFCc1AsWUFBckI7QUFBa0N0UCw4QkFBQSxHQUErQnVQLHNCQUEvQjtBQUFzRHZQLGVBQUEsR0FBZ0IsS0FBSyxDQUFyQjs7QUFBdUIsSUFBSXdQLHNCQUFzQixHQUFDMVAsc0JBQXNCLENBQUNDLG1CQUFPLENBQUMsNEhBQUQsQ0FBUixDQUFqRDs7QUFBd0gsSUFBSTBQLG9CQUFvQixHQUFDMVAsbUJBQU8sQ0FBQyx5RkFBRCxDQUFoQyxDLENBQTREO0FBQ2pjO0FBQ0E7QUFDQTs7O0FBQ0EsTUFBTTJQLGlCQUFpQixHQUFDLElBQXhCOztBQUE2QixTQUFTQyxVQUFULENBQW9CN1gsR0FBcEIsRUFBd0JoRCxHQUF4QixFQUE0QjhhLFNBQTVCLEVBQXNDO0FBQUMsTUFBSUMsS0FBSyxHQUFDL2EsR0FBRyxDQUFDbVAsR0FBSixDQUFRbk0sR0FBUixDQUFWOztBQUF1QixNQUFHK1gsS0FBSCxFQUFTO0FBQUMsUUFBRyxZQUFXQSxLQUFkLEVBQW9CO0FBQUMsYUFBT0EsS0FBSyxDQUFDQyxNQUFiO0FBQXFCOztBQUFBLFdBQU9uTCxPQUFPLENBQUNDLE9BQVIsQ0FBZ0JpTCxLQUFoQixDQUFQO0FBQStCOztBQUFBLE1BQUlFLFFBQUo7QUFBYSxRQUFNQyxJQUFJLEdBQUMsSUFBSXJMLE9BQUosQ0FBWUMsT0FBTyxJQUFFO0FBQUNtTCxZQUFRLEdBQUNuTCxPQUFUO0FBQWtCLEdBQXhDLENBQVg7QUFBcUQ5UCxLQUFHLENBQUNtYixHQUFKLENBQVFuWSxHQUFSLEVBQVkrWCxLQUFLLEdBQUM7QUFBQ2pMLFdBQU8sRUFBQ21MLFFBQVQ7QUFBa0JELFVBQU0sRUFBQ0U7QUFBekIsR0FBbEI7QUFBa0QsU0FBT0osU0FBUyxHQUFDO0FBQ25UQSxXQUFTLEdBQUc5SyxJQUFaLENBQWlCb0wsS0FBSyxLQUFHSCxRQUFRLENBQUNHLEtBQUQsQ0FBUixFQUFnQkEsS0FBbkIsQ0FBdEIsQ0FEa1QsR0FDalFGLElBRGlQO0FBQzNPOztBQUFBLFNBQVNHLFdBQVQsQ0FBcUJDLElBQXJCLEVBQTBCO0FBQUMsTUFBRztBQUFDQSxRQUFJLEdBQUNDLFFBQVEsQ0FBQy9ILGFBQVQsQ0FBdUIsTUFBdkIsQ0FBTDtBQUFvQyxXQUFPO0FBQ2pJO0FBQ0EsT0FBQyxDQUFDZ0ksTUFBTSxDQUFDQyxvQkFBVCxJQUErQixDQUFDLENBQUNGLFFBQVEsQ0FBQ0csWUFBMUMsSUFBd0RKLElBQUksQ0FBQ0ssT0FBTCxDQUFhQyxRQUFiLENBQXNCLFVBQXRCO0FBRmtFO0FBRTlCLEdBRlYsQ0FFVSxPQUFNQyxPQUFOLEVBQWM7QUFBQyxXQUFPLEtBQVA7QUFBYztBQUFDOztBQUFBLE1BQU1DLFdBQVcsR0FBQ1QsV0FBVyxFQUE3Qjs7QUFBZ0MsU0FBU1UsY0FBVCxDQUF3QjlILElBQXhCLEVBQTZCRCxFQUE3QixFQUFnQ3NILElBQWhDLEVBQXFDO0FBQUMsU0FBTyxJQUFJekwsT0FBSixDQUFZLENBQUNtTSxHQUFELEVBQUtDLEdBQUwsS0FBVztBQUFDLFFBQUdWLFFBQVEsQ0FBQ1csYUFBVCxDQUF3QiwrQkFBOEJqSSxJQUFLLElBQTNELENBQUgsRUFBbUU7QUFBQyxhQUFPK0gsR0FBRyxFQUFWO0FBQWM7O0FBQUFWLFFBQUksR0FBQ0MsUUFBUSxDQUFDL0gsYUFBVCxDQUF1QixNQUF2QixDQUFMLENBQW5GLENBQXVIOztBQUNyVixRQUFHUSxFQUFILEVBQU1zSCxJQUFJLENBQUN0SCxFQUFMLEdBQVFBLEVBQVI7QUFBV3NILFFBQUksQ0FBQ3ZILEdBQUwsR0FBVSxVQUFWO0FBQW9CdUgsUUFBSSxDQUFDYSxXQUFMLEdBQWlCL08sU0FBakI7QUFBaURrTyxRQUFJLENBQUNqTCxNQUFMLEdBQVkyTCxHQUFaO0FBQWdCVixRQUFJLENBQUNjLE9BQUwsR0FBYUgsR0FBYixDQUR3SCxDQUN2Rzs7QUFDdkhYLFFBQUksQ0FBQ3JILElBQUwsR0FBVUEsSUFBVjtBQUFlc0gsWUFBUSxDQUFDYyxJQUFULENBQWNDLFdBQWQsQ0FBMEJoQixJQUExQjtBQUFpQyxHQUZ1SixDQUFQO0FBRTdJOztBQUFBLE1BQU1pQixnQkFBZ0IsR0FBQ0MsTUFBTSxDQUFDLGtCQUFELENBQTdCLEMsQ0FBa0Q7O0FBQ3JHLFNBQVNqQyxjQUFULENBQXdCN0YsR0FBeEIsRUFBNEI7QUFBQyxTQUFPOVIsTUFBTSxDQUFDNlosY0FBUCxDQUFzQi9ILEdBQXRCLEVBQTBCNkgsZ0JBQTFCLEVBQTJDLEVBQTNDLENBQVA7QUFBdUQ7O0FBQUEsU0FBUy9CLFlBQVQsQ0FBc0I5RixHQUF0QixFQUEwQjtBQUFDLFNBQU9BLEdBQUcsSUFBRTZILGdCQUFnQixJQUFJN0gsR0FBaEM7QUFBcUM7O0FBQUEsU0FBU2dJLFlBQVQsQ0FBc0JwUSxHQUF0QixFQUEwQnFRLE1BQTFCLEVBQWlDO0FBQUMsU0FBTyxJQUFJOU0sT0FBSixDQUFZLENBQUNDLE9BQUQsRUFBUzhNLE1BQVQsS0FBa0I7QUFBQ0QsVUFBTSxHQUFDcEIsUUFBUSxDQUFDL0gsYUFBVCxDQUF1QixRQUF2QixDQUFQLENBQUQsQ0FBeUM7QUFDcFE7QUFDQTs7QUFDQW1KLFVBQU0sQ0FBQ3RNLE1BQVAsR0FBY1AsT0FBZDs7QUFBc0I2TSxVQUFNLENBQUNQLE9BQVAsR0FBZSxNQUFJUSxNQUFNLENBQUNyQyxjQUFjLENBQUMsSUFBSWxMLEtBQUosQ0FBVywwQkFBeUIvQyxHQUFJLEVBQXhDLENBQUQsQ0FBZixDQUF6QixDQUhxTSxDQUcvRztBQUM1Rzs7O0FBQ0FxUSxVQUFNLENBQUNSLFdBQVAsR0FBbUIvTyxTQUFuQixDQUwyTixDQUt4SztBQUNuRDs7QUFDQXVQLFVBQU0sQ0FBQ3JRLEdBQVAsR0FBV0EsR0FBWDtBQUFlaVAsWUFBUSxDQUFDeFYsSUFBVCxDQUFjdVcsV0FBZCxDQUEwQkssTUFBMUI7QUFBbUMsR0FQMkksQ0FBUDtBQU9qSSxDLENBQUE7OztBQUNyRCxTQUFTRSx5QkFBVCxDQUFtQ3RVLENBQW5DLEVBQXFDdVUsRUFBckMsRUFBd0NwSSxHQUF4QyxFQUE0QztBQUFDLFNBQU8sSUFBSTdFLE9BQUosQ0FBWSxDQUFDQyxPQUFELEVBQVM4TSxNQUFULEtBQWtCO0FBQUMsUUFBSUcsU0FBUyxHQUFDLEtBQWQ7QUFBb0J4VSxLQUFDLENBQUN5SCxJQUFGLENBQU9nTixDQUFDLElBQUU7QUFBQztBQUNsSEQsZUFBUyxHQUFDLElBQVY7QUFBZWpOLGFBQU8sQ0FBQ2tOLENBQUQsQ0FBUDtBQUFZLEtBRDRFLEVBQzFFak4sS0FEMEUsQ0FDcEU2TSxNQURvRTtBQUM1RCxLQUFDLEdBQUVqQyxvQkFBb0IsQ0FBQ2pCLG1CQUF4QixFQUE2QyxNQUFJTSxVQUFVLENBQUMsTUFBSTtBQUFDLFVBQUcsQ0FBQytDLFNBQUosRUFBYztBQUFDSCxjQUFNLENBQUNsSSxHQUFELENBQU47QUFBYTtBQUFDLEtBQW5DLEVBQW9Db0ksRUFBcEMsQ0FBM0Q7QUFBcUcsR0FENUYsQ0FBUDtBQUNzRyxDLENBQUE7QUFDbko7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsU0FBU3JDLHNCQUFULEdBQWlDO0FBQUMsTUFBR2QsSUFBSSxDQUFDc0QsZ0JBQVIsRUFBeUI7QUFBQyxXQUFPcE4sT0FBTyxDQUFDQyxPQUFSLENBQWdCNkosSUFBSSxDQUFDc0QsZ0JBQXJCLENBQVA7QUFBK0M7O0FBQUEsUUFBTUMsZUFBZSxHQUFDLElBQUlyTixPQUFKLENBQVlDLE9BQU8sSUFBRTtBQUFDO0FBQ3ZKLFVBQU04SixFQUFFLEdBQUNELElBQUksQ0FBQ3dELG1CQUFkOztBQUFrQ3hELFFBQUksQ0FBQ3dELG1CQUFMLEdBQXlCLE1BQUk7QUFBQ3JOLGFBQU8sQ0FBQzZKLElBQUksQ0FBQ3NELGdCQUFOLENBQVA7QUFBK0JyRCxRQUFFLElBQUVBLEVBQUUsRUFBTjtBQUFVLEtBQXZFO0FBQXlFLEdBRHNCLENBQXRCO0FBQ0UsU0FBT2lELHlCQUF5QixDQUFDSyxlQUFELEVBQWlCdEMsaUJBQWpCLEVBQW1DTCxjQUFjLENBQUMsSUFBSWxMLEtBQUosQ0FBVSxzQ0FBVixDQUFELENBQWpELENBQWhDO0FBQXVJOztBQUFBLFNBQVMrTixnQkFBVCxDQUEwQkMsV0FBMUIsRUFBc0NDLEtBQXRDLEVBQTRDO0FBQUMsWUFBd0M7QUFBQyxXQUFPek4sT0FBTyxDQUFDQyxPQUFSLENBQWdCO0FBQUN5TixhQUFPLEVBQUMsQ0FBQ0YsV0FBVyxHQUFDLDRCQUFaLEdBQXlDRyxTQUFTLENBQUMsQ0FBQyxHQUFFOUMsc0JBQXNCLENBQUNuTyxPQUExQixFQUFtQytRLEtBQW5DLEVBQXlDLEtBQXpDLENBQUQsQ0FBbkQsQ0FBVDtBQUErRztBQUNoZEcsU0FBRyxFQUFDO0FBRDZWLEtBQWhCLENBQVA7QUFDaFU7O0FBQUEsU0FBT2hELHNCQUFzQixHQUFHekssSUFBekIsQ0FBOEIwTixRQUFRLElBQUU7QUFBQyxRQUFHLEVBQUVKLEtBQUssSUFBSUksUUFBWCxDQUFILEVBQXdCO0FBQUMsWUFBTW5ELGNBQWMsQ0FBQyxJQUFJbEwsS0FBSixDQUFXLDJCQUEwQmlPLEtBQU0sRUFBM0MsQ0FBRCxDQUFwQjtBQUFxRTs7QUFBQSxVQUFNSyxRQUFRLEdBQUNELFFBQVEsQ0FBQ0osS0FBRCxDQUFSLENBQWdCdGQsR0FBaEIsQ0FBb0IrYSxLQUFLLElBQUVzQyxXQUFXLEdBQUMsU0FBWixHQUFzQkcsU0FBUyxDQUFDekMsS0FBRCxDQUExRCxDQUFmO0FBQWtGLFdBQU07QUFBQ3dDLGFBQU8sRUFBQ0ksUUFBUSxDQUFDNWEsTUFBVCxDQUFnQjZhLENBQUMsSUFBRUEsQ0FBQyxDQUFDcEUsUUFBRixDQUFXLEtBQVgsQ0FBbkIsQ0FBVDtBQUErQ2lFLFNBQUcsRUFBQ0UsUUFBUSxDQUFDNWEsTUFBVCxDQUFnQjZhLENBQUMsSUFBRUEsQ0FBQyxDQUFDcEUsUUFBRixDQUFXLE1BQVgsQ0FBbkI7QUFBbkQsS0FBTjtBQUFrRyxHQUEzVCxDQUFQO0FBQXFVOztBQUFBLFNBQVNxRSxpQkFBVCxDQUEyQlIsV0FBM0IsRUFBdUM7QUFBQyxRQUFNUyxXQUFXLEdBQUMsSUFBSS9SLEdBQUosRUFBbEI7QUFBNEIsUUFBTWdTLGFBQWEsR0FBQyxJQUFJaFMsR0FBSixFQUFwQjtBQUE4QixRQUFNaVMsV0FBVyxHQUFDLElBQUlqUyxHQUFKLEVBQWxCO0FBQTRCLFFBQU1rUyxNQUFNLEdBQUMsSUFBSWxTLEdBQUosRUFBYjs7QUFBdUIsV0FBU21TLGtCQUFULENBQTRCNVIsR0FBNUIsRUFBZ0M7QUFBQyxRQUFJNE8sSUFBSSxHQUFDNkMsYUFBYSxDQUFDNU8sR0FBZCxDQUFrQjdDLEdBQWxCLENBQVQ7O0FBQWdDLFFBQUc0TyxJQUFILEVBQVE7QUFBQyxhQUFPQSxJQUFQO0FBQWEsS0FBdkQsQ0FBdUQ7OztBQUMzakIsUUFBR0ssUUFBUSxDQUFDVyxhQUFULENBQXdCLGdCQUFlNVAsR0FBSSxJQUEzQyxDQUFILEVBQW1EO0FBQUMsYUFBT3VELE9BQU8sQ0FBQ0MsT0FBUixFQUFQO0FBQTBCOztBQUFBaU8saUJBQWEsQ0FBQzVDLEdBQWQsQ0FBa0I3TyxHQUFsQixFQUFzQjRPLElBQUksR0FBQ3dCLFlBQVksQ0FBQ3BRLEdBQUQsQ0FBdkM7QUFBOEMsV0FBTzRPLElBQVA7QUFBYTs7QUFBQSxXQUFTaUQsZUFBVCxDQUF5QmxLLElBQXpCLEVBQThCO0FBQUMsUUFBSWlILElBQUksR0FBQzhDLFdBQVcsQ0FBQzdPLEdBQVosQ0FBZ0I4RSxJQUFoQixDQUFUOztBQUErQixRQUFHaUgsSUFBSCxFQUFRO0FBQUMsYUFBT0EsSUFBUDtBQUFhOztBQUFBOEMsZUFBVyxDQUFDN0MsR0FBWixDQUFnQmxILElBQWhCLEVBQXFCaUgsSUFBSSxHQUFDa0QsS0FBSyxDQUFDbkssSUFBRCxDQUFMLENBQVlqRSxJQUFaLENBQWlCZ00sR0FBRyxJQUFFO0FBQUMsVUFBRyxDQUFDQSxHQUFHLENBQUNxQyxFQUFSLEVBQVc7QUFBQyxjQUFNLElBQUloUCxLQUFKLENBQVcsOEJBQTZCNEUsSUFBSyxFQUE3QyxDQUFOO0FBQXVEOztBQUFBLGFBQU8rSCxHQUFHLENBQUN0VSxJQUFKLEdBQVdzSSxJQUFYLENBQWdCdEksSUFBSSxLQUFHO0FBQUN1TSxZQUFJLEVBQUNBLElBQU47QUFBV3FLLGVBQU8sRUFBQzVXO0FBQW5CLE9BQUgsQ0FBcEIsQ0FBUDtBQUEwRCxLQUFwSixFQUFzSnFJLEtBQXRKLENBQTRKMkUsR0FBRyxJQUFFO0FBQUMsWUFBTTZGLGNBQWMsQ0FBQzdGLEdBQUQsQ0FBcEI7QUFBMkIsS0FBN0wsQ0FBMUI7QUFBME4sV0FBT3dHLElBQVA7QUFBYTs7QUFBQSxTQUFNO0FBQUNxRCxrQkFBYyxDQUFDakIsS0FBRCxFQUFPO0FBQUMsYUFBT3pDLFVBQVUsQ0FBQ3lDLEtBQUQsRUFBT1EsV0FBUCxDQUFqQjtBQUFzQyxLQUE3RDs7QUFBOERVLGdCQUFZLENBQUNsQixLQUFELEVBQU9tQixPQUFQLEVBQWU7QUFBQzVPLGFBQU8sQ0FBQ0MsT0FBUixDQUFnQjJPLE9BQWhCLEVBQXlCek8sSUFBekIsQ0FBOEIwTyxFQUFFLElBQUVBLEVBQUUsRUFBcEMsRUFBd0MxTyxJQUF4QyxDQUE2QzlFLE9BQU8sS0FBRztBQUFDeVQsaUJBQVMsRUFBQ3pULE9BQU8sSUFBRUEsT0FBTyxDQUFDcUIsT0FBakIsSUFBMEJyQixPQUFyQztBQUE2Q0EsZUFBTyxFQUFDQTtBQUFyRCxPQUFILENBQXBELEVBQXNId0osR0FBRyxLQUFHO0FBQUNDLGFBQUssRUFBQ0Q7QUFBUCxPQUFILENBQXpILEVBQTBJMUUsSUFBMUksQ0FBK0k0TyxLQUFLLElBQUU7QUFBQyxjQUFNQyxHQUFHLEdBQUNmLFdBQVcsQ0FBQzNPLEdBQVosQ0FBZ0JtTyxLQUFoQixDQUFWO0FBQWlDUSxtQkFBVyxDQUFDM0MsR0FBWixDQUFnQm1DLEtBQWhCLEVBQXNCc0IsS0FBdEI7QUFBNkIsWUFBR0MsR0FBRyxJQUFFLGFBQVlBLEdBQXBCLEVBQXdCQSxHQUFHLENBQUMvTyxPQUFKLENBQVk4TyxLQUFaO0FBQW9CLE9BQWpRO0FBQW9RLEtBQTlWOztBQUErVkUsYUFBUyxDQUFDeEIsS0FBRCxFQUFPcEksUUFBUCxFQUFnQjtBQUFDLGFBQU8yRixVQUFVLENBQUN5QyxLQUFELEVBQU9XLE1BQVAsRUFBYyxNQUFJO0FBQUMsZUFBT3BCLHlCQUF5QixDQUFDTyxnQkFBZ0IsQ0FBQ0MsV0FBRCxFQUFhQyxLQUFiLENBQWhCLENBQW9DdE4sSUFBcEMsQ0FBeUMsQ0FBQztBQUFDdU4saUJBQUQ7QUFBU0U7QUFBVCxTQUFELEtBQWlCO0FBQUMsaUJBQU81TixPQUFPLENBQUNnQixHQUFSLENBQVksQ0FBQ2lOLFdBQVcsQ0FBQ2lCLEdBQVosQ0FBZ0J6QixLQUFoQixJQUF1QixFQUF2QixHQUEwQnpOLE9BQU8sQ0FBQ2dCLEdBQVIsQ0FBWTBNLE9BQU8sQ0FBQ3ZkLEdBQVIsQ0FBWWtlLGtCQUFaLENBQVosQ0FBM0IsRUFBd0VyTyxPQUFPLENBQUNnQixHQUFSLENBQVk0TSxHQUFHLENBQUN6ZCxHQUFKLENBQVFtZSxlQUFSLENBQVosQ0FBeEUsQ0FBWixDQUFQO0FBQW9JLFNBQS9MLEVBQWlNbk8sSUFBak0sQ0FBc01nTSxHQUFHLElBQUU7QUFBQyxpQkFBTyxLQUFLdUMsY0FBTCxDQUFvQmpCLEtBQXBCLEVBQTJCdE4sSUFBM0IsQ0FBZ0NnUCxVQUFVLEtBQUc7QUFBQ0Esc0JBQUQ7QUFBWWhaLGtCQUFNLEVBQUNnVyxHQUFHLENBQUMsQ0FBRDtBQUF0QixXQUFILENBQTFDLENBQVA7QUFBa0YsU0FBOVIsQ0FBRCxFQUFpU3BCLGlCQUFqUyxFQUFtVEwsY0FBYyxDQUFDLElBQUlsTCxLQUFKLENBQVcsbUNBQWtDaU8sS0FBTSxFQUFuRCxDQUFELENBQWpVLENBQXpCLENBQW1adE4sSUFBblosQ0FBd1osQ0FBQztBQUFDZ1Asb0JBQUQ7QUFBWWhaO0FBQVosU0FBRCxLQUF1QjtBQUFDLGdCQUFNZ1csR0FBRyxHQUFDcFosTUFBTSxDQUFDZ1IsTUFBUCxDQUFjO0FBQUM1TixrQkFBTSxFQUFDQTtBQUFSLFdBQWQsRUFBOEJnWixVQUE5QixDQUFWO0FBQW9ELGlCQUFNLFdBQVVBLFVBQVYsR0FBcUJBLFVBQXJCLEdBQWdDaEQsR0FBdEM7QUFBMkMsU0FBL2dCLEVBQWloQmpNLEtBQWpoQixDQUF1aEIyRSxHQUFHLElBQUU7QUFBQyxjQUFHUSxRQUFILEVBQVk7QUFBQztBQUN4NUMsa0JBQU1SLEdBQU47QUFBVzs7QUFBQSxpQkFBTTtBQUFDQyxpQkFBSyxFQUFDRDtBQUFQLFdBQU47QUFBbUIsU0FEZzFCLENBQVA7QUFDdDBCLE9BRG16QixDQUFqQjtBQUMveEIsS0FEc2E7O0FBQ3JhUSxZQUFRLENBQUNvSSxLQUFELEVBQU87QUFBQztBQUNyRDtBQUNBLFVBQUkyQixFQUFKOztBQUFPLFVBQUdBLEVBQUUsR0FBQ0MsU0FBUyxDQUFDQyxVQUFoQixFQUEyQjtBQUFDO0FBQ25DLFlBQUdGLEVBQUUsQ0FBQ0csUUFBSCxJQUFhLEtBQUtDLElBQUwsQ0FBVUosRUFBRSxDQUFDSyxhQUFiLENBQWhCLEVBQTRDLE9BQU96UCxPQUFPLENBQUNDLE9BQVIsRUFBUDtBQUEwQjs7QUFBQSxhQUFPc04sZ0JBQWdCLENBQUNDLFdBQUQsRUFBYUMsS0FBYixDQUFoQixDQUFvQ3ROLElBQXBDLENBQXlDdVAsTUFBTSxJQUFFMVAsT0FBTyxDQUFDZ0IsR0FBUixDQUFZaUwsV0FBVyxHQUFDeUQsTUFBTSxDQUFDaEMsT0FBUCxDQUFldmQsR0FBZixDQUFtQjJjLE1BQU0sSUFBRVosY0FBYyxDQUFDWSxNQUFELEVBQVEsUUFBUixDQUF6QyxDQUFELEdBQTZELEVBQXBGLENBQWpELEVBQTBJM00sSUFBMUksQ0FBK0ksTUFBSTtBQUFDLFNBQUMsR0FBRTJLLG9CQUFvQixDQUFDakIsbUJBQXhCLEVBQTZDLE1BQUksS0FBS29GLFNBQUwsQ0FBZXhCLEtBQWYsRUFBcUIsSUFBckIsRUFBMkJ2TixLQUEzQixDQUFpQyxNQUFJLENBQUUsQ0FBdkMsQ0FBakQ7QUFBNEYsT0FBaFAsRUFBa1BBLEtBQWxQLEVBQXdQO0FBQ3JVLFlBQUksQ0FBRSxDQUR1RSxDQUFQO0FBQzdEOztBQUxpYyxHQUFOO0FBS3hiOztBQUFBLElBQUl1SixRQUFRLEdBQUN1RSxpQkFBYjtBQUErQjNTLGVBQUEsR0FBZ0JvTyxRQUFoQixDOzs7Ozs7Ozs7OztBQ2pDOUI7O0FBQUEsSUFBSXhFLHVCQUF1QixHQUFDN0osbUJBQU8sQ0FBQyx3SUFBRCxDQUFuQzs7QUFBcUYsSUFBSUQsc0JBQXNCLEdBQUNDLG1CQUFPLENBQUMsc0lBQUQsQ0FBbEM7O0FBQW1GQyxrQkFBQSxHQUFtQixJQUFuQjtBQUF3QkEsaUJBQUEsR0FBa0J3TSxTQUFsQjtBQUE0QnhNLGdDQUFBLEdBQWlDc1Usd0JBQWpDO0FBQTBEdFUsb0JBQUEsR0FBcUJBLGtCQUFBLEdBQW1CQSxlQUFBLEdBQWdCLEtBQUssQ0FBN0Q7O0FBQStELElBQUlJLE1BQU0sR0FBQ04sc0JBQXNCLENBQUNDLG1CQUFPLENBQUMsb0JBQUQsQ0FBUixDQUFqQzs7QUFBb0QsSUFBSStKLFFBQVEsR0FBQ0YsdUJBQXVCLENBQUM3SixtQkFBTyxDQUFDLG1HQUFELENBQVIsQ0FBcEM7O0FBQWtGQyxjQUFBLEdBQWU4SixRQUFRLENBQUN6SSxPQUF4QjtBQUFnQ3JCLGtCQUFBLEdBQW1COEosUUFBUSxDQUFDeUssVUFBNUI7O0FBQXVDLElBQUlDLGNBQWMsR0FBQ3pVLG1CQUFPLENBQUMsNEVBQUQsQ0FBMUI7O0FBQWdFLElBQUkwVSxXQUFXLEdBQUMzVSxzQkFBc0IsQ0FBQ0MsbUJBQU8sQ0FBQyxxRUFBRCxDQUFSLENBQXRDOztBQUFpRUMsa0JBQUEsR0FBbUJ5VSxXQUFXLENBQUNwVCxPQUEvQjtBQUF1Qzs7QUFBbUIsTUFBTXFULGVBQWUsR0FBQztBQUFDekssUUFBTSxFQUFDLElBQVI7QUFBYTtBQUM3d0IwSyxnQkFBYyxFQUFDLEVBRGl2Qjs7QUFDOXVCQyxPQUFLLENBQUNsRyxFQUFELEVBQUk7QUFBQyxRQUFHLEtBQUt6RSxNQUFSLEVBQWUsT0FBT3lFLEVBQUUsRUFBVDs7QUFBWSxlQUErQixFQUErQjtBQUFDOztBQUQwb0IsQ0FBdEIsQyxDQUNsbkI7O0FBQ3hILE1BQU1tRyxpQkFBaUIsR0FBQyxDQUFDLFVBQUQsRUFBWSxPQUFaLEVBQW9CLE9BQXBCLEVBQTRCLFFBQTVCLEVBQXFDLFlBQXJDLEVBQWtELFlBQWxELEVBQStELFVBQS9ELEVBQTBFLFFBQTFFLEVBQW1GLFNBQW5GLEVBQTZGLGVBQTdGLEVBQTZHLFNBQTdHLEVBQXVILFdBQXZILEVBQW1JLGdCQUFuSSxDQUF4QjtBQUE2SyxNQUFNQyxZQUFZLEdBQUMsQ0FBQyxrQkFBRCxFQUFvQixxQkFBcEIsRUFBMEMscUJBQTFDLEVBQWdFLGtCQUFoRSxFQUFtRixpQkFBbkYsRUFBcUcsb0JBQXJHLENBQW5CO0FBQThJLE1BQU1DLGdCQUFnQixHQUFDLENBQUMsTUFBRCxFQUFRLFNBQVIsRUFBa0IsUUFBbEIsRUFBMkIsTUFBM0IsRUFBa0MsVUFBbEMsRUFBNkMsZ0JBQTdDLENBQXZCLEMsQ0FBc0Y7O0FBQ2pacmQsTUFBTSxDQUFDNlosY0FBUCxDQUFzQm1ELGVBQXRCLEVBQXNDLFFBQXRDLEVBQStDO0FBQUN6USxLQUFHLEdBQUU7QUFBQyxXQUFPNkYsUUFBUSxDQUFDekksT0FBVCxDQUFpQjJULE1BQXhCO0FBQWdDOztBQUF2QyxDQUEvQztBQUF5RkgsaUJBQWlCLENBQUM5SSxPQUFsQixDQUEwQmtKLEtBQUssSUFBRTtBQUFDO0FBQzNIO0FBQ0E7QUFDQTtBQUNBdmQsUUFBTSxDQUFDNlosY0FBUCxDQUFzQm1ELGVBQXRCLEVBQXNDTyxLQUF0QyxFQUE0QztBQUFDaFIsT0FBRyxHQUFFO0FBQUMsWUFBTWdHLE1BQU0sR0FBQ2lMLFNBQVMsRUFBdEI7QUFBeUIsYUFBT2pMLE1BQU0sQ0FBQ2dMLEtBQUQsQ0FBYjtBQUFzQjs7QUFBdEQsR0FBNUM7QUFBc0csQ0FKYjtBQUllRixnQkFBZ0IsQ0FBQ2hKLE9BQWpCLENBQXlCa0osS0FBSyxJQUFFO0FBQUM7QUFDekk7O0FBQUNQLGlCQUFlLENBQUNPLEtBQUQsQ0FBZixHQUF1QixDQUFDLEdBQUd4SixJQUFKLEtBQVc7QUFBQyxVQUFNeEIsTUFBTSxHQUFDaUwsU0FBUyxFQUF0QjtBQUF5QixXQUFPakwsTUFBTSxDQUFDZ0wsS0FBRCxDQUFOLENBQWMsR0FBR3hKLElBQWpCLENBQVA7QUFBK0IsR0FBM0Y7QUFBNkYsQ0FEVTtBQUNScUosWUFBWSxDQUFDL0ksT0FBYixDQUFxQnhCLEtBQUssSUFBRTtBQUFDbUssaUJBQWUsQ0FBQ0UsS0FBaEIsQ0FBc0IsTUFBSTtBQUFDOUssWUFBUSxDQUFDekksT0FBVCxDQUFpQjJULE1BQWpCLENBQXdCRyxFQUF4QixDQUEyQjVLLEtBQTNCLEVBQWlDLENBQUMsR0FBR2tCLElBQUosS0FBVztBQUFDLFlBQU0ySixVQUFVLEdBQUUsS0FBSTdLLEtBQUssQ0FBQzhLLE1BQU4sQ0FBYSxDQUFiLEVBQWdCQyxXQUFoQixFQUE4QixHQUFFL0ssS0FBSyxDQUFDZ0wsU0FBTixDQUFnQixDQUFoQixDQUFtQixFQUF6RTtBQUEyRSxZQUFNQyxnQkFBZ0IsR0FBQ2QsZUFBdkI7O0FBQXVDLFVBQUdjLGdCQUFnQixDQUFDSixVQUFELENBQW5CLEVBQWdDO0FBQUMsWUFBRztBQUFDSSwwQkFBZ0IsQ0FBQ0osVUFBRCxDQUFoQixDQUE2QixHQUFHM0osSUFBaEM7QUFBdUMsU0FBM0MsQ0FBMkMsT0FBTWpDLEdBQU4sRUFBVTtBQUFDbkQsaUJBQU8sQ0FBQ29ELEtBQVIsQ0FBZSx3Q0FBdUMyTCxVQUFXLEVBQWpFO0FBQW9FL08saUJBQU8sQ0FBQ29ELEtBQVIsQ0FBZSxHQUFFRCxHQUFHLENBQUNpTSxPQUFRLEtBQUlqTSxHQUFHLENBQUNrTSxLQUFNLEVBQTNDO0FBQStDO0FBQUM7QUFBQyxLQUEzVztBQUE4VyxHQUF6WTtBQUE0WSxDQUF6YTs7QUFBMmEsU0FBU1IsU0FBVCxHQUFvQjtBQUFDLE1BQUcsQ0FBQ1IsZUFBZSxDQUFDekssTUFBcEIsRUFBMkI7QUFBQyxVQUFNd0wsT0FBTyxHQUFDLGdDQUE4QixxRUFBNUM7QUFBa0gsVUFBTSxJQUFJdFIsS0FBSixDQUFVc1IsT0FBVixDQUFOO0FBQTBCOztBQUFBLFNBQU9mLGVBQWUsQ0FBQ3pLLE1BQXZCO0FBQStCLEMsQ0FBQTs7O0FBQ3Z1QixJQUFJbUUsUUFBUSxHQUFDc0csZUFBYixDLENBQTZCOztBQUM3QjFVLGVBQUEsR0FBZ0JvTyxRQUFoQjs7QUFBeUIsU0FBUzVCLFNBQVQsR0FBb0I7QUFBQyxTQUFPcE0sTUFBTSxDQUFDaUIsT0FBUCxDQUFlc1UsVUFBZixDQUEwQm5CLGNBQWMsQ0FBQ29CLGFBQXpDLENBQVA7QUFBZ0UsQyxDQUFBO0FBQzlHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLE1BQU1DLFlBQVksR0FBQyxDQUFDLEdBQUdwSyxJQUFKLEtBQVc7QUFBQ2lKLGlCQUFlLENBQUN6SyxNQUFoQixHQUF1QixJQUFJSCxRQUFRLENBQUN6SSxPQUFiLENBQXFCLEdBQUdvSyxJQUF4QixDQUF2QjtBQUFxRGlKLGlCQUFlLENBQUNDLGNBQWhCLENBQStCNUksT0FBL0IsQ0FBdUMyQyxFQUFFLElBQUVBLEVBQUUsRUFBN0M7QUFBaURnRyxpQkFBZSxDQUFDQyxjQUFoQixHQUErQixFQUEvQjtBQUFrQyxTQUFPRCxlQUFlLENBQUN6SyxNQUF2QjtBQUErQixDQUF0TSxDLENBQXVNOzs7QUFDdk1qSyxvQkFBQSxHQUFxQjZWLFlBQXJCOztBQUFrQyxTQUFTdkIsd0JBQVQsQ0FBa0NySyxNQUFsQyxFQUF5QztBQUFDLFFBQU1KLE9BQU8sR0FBQ0ksTUFBZDtBQUFxQixRQUFNNkwsUUFBUSxHQUFDLEVBQWY7O0FBQWtCLE9BQUksTUFBTUMsUUFBVixJQUFzQmxCLGlCQUF0QixFQUF3QztBQUFDLFFBQUcsT0FBT2hMLE9BQU8sQ0FBQ2tNLFFBQUQsQ0FBZCxLQUEyQixRQUE5QixFQUF1QztBQUFDRCxjQUFRLENBQUNDLFFBQUQsQ0FBUixHQUFtQnJlLE1BQU0sQ0FBQ2dSLE1BQVAsQ0FBY3NOLEtBQUssQ0FBQ0MsT0FBTixDQUFjcE0sT0FBTyxDQUFDa00sUUFBRCxDQUFyQixJQUFpQyxFQUFqQyxHQUFvQyxFQUFsRCxFQUFxRGxNLE9BQU8sQ0FBQ2tNLFFBQUQsQ0FBNUQsQ0FBbkIsQ0FBRCxDQUE0Rjs7QUFDL1I7QUFBVTs7QUFBQUQsWUFBUSxDQUFDQyxRQUFELENBQVIsR0FBbUJsTSxPQUFPLENBQUNrTSxRQUFELENBQTFCO0FBQXNDLEdBRDJCLENBQzNCOzs7QUFDaERELFVBQVEsQ0FBQ2QsTUFBVCxHQUFnQmxMLFFBQVEsQ0FBQ3pJLE9BQVQsQ0FBaUIyVCxNQUFqQztBQUF3Q0Qsa0JBQWdCLENBQUNoSixPQUFqQixDQUF5QmtKLEtBQUssSUFBRTtBQUFDYSxZQUFRLENBQUNiLEtBQUQsQ0FBUixHQUFnQixDQUFDLEdBQUd4SixJQUFKLEtBQVc7QUFBQyxhQUFPNUIsT0FBTyxDQUFDb0wsS0FBRCxDQUFQLENBQWUsR0FBR3hKLElBQWxCLENBQVA7QUFBZ0MsS0FBNUQ7QUFBOEQsR0FBL0Y7QUFBaUcsU0FBT3FLLFFBQVA7QUFBaUIsQzs7Ozs7Ozs7Ozs7QUNuQjdJOztBQUFBOVYsa0JBQUEsR0FBbUIsSUFBbkI7QUFBd0JBLHVCQUFBLEdBQXdCMkcsZUFBeEI7O0FBQXdDLElBQUl2RyxNQUFNLEdBQUNMLG1CQUFPLENBQUMsb0JBQUQsQ0FBbEI7O0FBQTRCLElBQUkwUCxvQkFBb0IsR0FBQzFQLG1CQUFPLENBQUMseUZBQUQsQ0FBaEM7O0FBQTRELE1BQU1tVyx1QkFBdUIsR0FBQyxPQUFPQyxvQkFBUCxLQUE4QixXQUE1RDs7QUFBd0UsU0FBU3hQLGVBQVQsQ0FBeUI7QUFBQ0MsWUFBRDtBQUFZQztBQUFaLENBQXpCLEVBQStDO0FBQUMsUUFBTXVQLFVBQVUsR0FBQ3ZQLFFBQVEsSUFBRSxDQUFDcVAsdUJBQTVCO0FBQW9ELFFBQU1HLFNBQVMsR0FBQyxDQUFDLEdBQUVqVyxNQUFNLENBQUNrTSxNQUFWLEdBQWhCO0FBQW9DLFFBQUssQ0FBQ3BULE9BQUQsRUFBU29kLFVBQVQsSUFBcUIsQ0FBQyxHQUFFbFcsTUFBTSxDQUFDbVcsUUFBVixFQUFvQixLQUFwQixDQUExQjtBQUFxRCxRQUFNOVAsTUFBTSxHQUFDLENBQUMsR0FBRXJHLE1BQU0sQ0FBQzhNLFdBQVYsRUFBdUJDLEVBQUUsSUFBRTtBQUFDLFFBQUdrSixTQUFTLENBQUM5SixPQUFiLEVBQXFCO0FBQUM4SixlQUFTLENBQUM5SixPQUFWO0FBQW9COEosZUFBUyxDQUFDOUosT0FBVixHQUFrQjVMLFNBQWxCO0FBQTZCOztBQUFBLFFBQUd5VixVQUFVLElBQUVsZCxPQUFmLEVBQXVCOztBQUFPLFFBQUdpVSxFQUFFLElBQUVBLEVBQUUsQ0FBQ3FKLE9BQVYsRUFBa0I7QUFBQ0gsZUFBUyxDQUFDOUosT0FBVixHQUFrQmtLLE9BQU8sQ0FBQ3RKLEVBQUQsRUFBSXJHLFNBQVMsSUFBRUEsU0FBUyxJQUFFd1AsVUFBVSxDQUFDeFAsU0FBRCxDQUFwQyxFQUFnRDtBQUFDRjtBQUFELE9BQWhELENBQXpCO0FBQXdGO0FBQUMsR0FBN08sRUFBOE8sQ0FBQ3dQLFVBQUQsRUFBWXhQLFVBQVosRUFBdUIxTixPQUF2QixDQUE5TyxDQUFiO0FBQTRSLEdBQUMsR0FBRWtILE1BQU0sQ0FBQ2dOLFNBQVYsRUFBcUIsTUFBSTtBQUFDLFFBQUcsQ0FBQzhJLHVCQUFKLEVBQTRCO0FBQUMsVUFBRyxDQUFDaGQsT0FBSixFQUFZO0FBQUMsY0FBTXdkLFlBQVksR0FBQyxDQUFDLEdBQUVqSCxvQkFBb0IsQ0FBQ2pCLG1CQUF4QixFQUE2QyxNQUFJOEgsVUFBVSxDQUFDLElBQUQsQ0FBM0QsQ0FBbkI7QUFBc0YsZUFBTSxNQUFJLENBQUMsR0FBRTdHLG9CQUFvQixDQUFDUCxrQkFBeEIsRUFBNEN3SCxZQUE1QyxDQUFWO0FBQXFFO0FBQUM7QUFBQyxHQUFqTyxFQUFrTyxDQUFDeGQsT0FBRCxDQUFsTztBQUE2TyxTQUFNLENBQUN1TixNQUFELEVBQVF2TixPQUFSLENBQU47QUFBd0I7O0FBQUEsU0FBU3VkLE9BQVQsQ0FBaUI3TixPQUFqQixFQUF5QitOLFFBQXpCLEVBQWtDek0sT0FBbEMsRUFBMEM7QUFBQyxRQUFLO0FBQUNpRixNQUFEO0FBQUl5SCxZQUFKO0FBQWFDO0FBQWIsTUFBdUJDLGNBQWMsQ0FBQzVNLE9BQUQsQ0FBMUM7QUFBb0QyTSxVQUFRLENBQUM1RyxHQUFULENBQWFySCxPQUFiLEVBQXFCK04sUUFBckI7QUFBK0JDLFVBQVEsQ0FBQ0gsT0FBVCxDQUFpQjdOLE9BQWpCO0FBQTBCLFNBQU8sU0FBU3lOLFNBQVQsR0FBb0I7QUFBQ1EsWUFBUSxDQUFDRSxNQUFULENBQWdCbk8sT0FBaEI7QUFBeUJnTyxZQUFRLENBQUNQLFNBQVQsQ0FBbUJ6TixPQUFuQixFQUExQixDQUFzRDs7QUFDcHJDLFFBQUdpTyxRQUFRLENBQUNHLElBQVQsS0FBZ0IsQ0FBbkIsRUFBcUI7QUFBQ0osY0FBUSxDQUFDSyxVQUFUO0FBQXNCQyxlQUFTLENBQUNILE1BQVYsQ0FBaUI1SCxFQUFqQjtBQUFzQjtBQUFDLEdBRGdpQztBQUM5aEM7O0FBQUEsTUFBTStILFNBQVMsR0FBQyxJQUFJclcsR0FBSixFQUFoQjs7QUFBMEIsU0FBU2lXLGNBQVQsQ0FBd0I1TSxPQUF4QixFQUFnQztBQUFDLFFBQU1pRixFQUFFLEdBQUNqRixPQUFPLENBQUN0RCxVQUFSLElBQW9CLEVBQTdCO0FBQWdDLE1BQUlrUCxRQUFRLEdBQUNvQixTQUFTLENBQUNqVCxHQUFWLENBQWNrTCxFQUFkLENBQWI7O0FBQStCLE1BQUcyRyxRQUFILEVBQVk7QUFBQyxXQUFPQSxRQUFQO0FBQWlCOztBQUFBLFFBQU1lLFFBQVEsR0FBQyxJQUFJaFcsR0FBSixFQUFmO0FBQXlCLFFBQU0rVixRQUFRLEdBQUMsSUFBSVQsb0JBQUosQ0FBeUJ2ZSxPQUFPLElBQUU7QUFBQ0EsV0FBTyxDQUFDbVUsT0FBUixDQUFnQjhELEtBQUssSUFBRTtBQUFDLFlBQU04RyxRQUFRLEdBQUNFLFFBQVEsQ0FBQzVTLEdBQVQsQ0FBYTRMLEtBQUssQ0FBQ3JGLE1BQW5CLENBQWY7QUFBMEMsWUFBTTFELFNBQVMsR0FBQytJLEtBQUssQ0FBQ3NILGNBQU4sSUFBc0J0SCxLQUFLLENBQUN1SCxpQkFBTixHQUF3QixDQUE5RDs7QUFBZ0UsVUFBR1QsUUFBUSxJQUFFN1AsU0FBYixFQUF1QjtBQUFDNlAsZ0JBQVEsQ0FBQzdQLFNBQUQsQ0FBUjtBQUFxQjtBQUFDLEtBQWhMO0FBQW1MLEdBQXROLEVBQXVOb0QsT0FBdk4sQ0FBZjtBQUErT2dOLFdBQVMsQ0FBQ2pILEdBQVYsQ0FBY2QsRUFBZCxFQUFpQjJHLFFBQVEsR0FBQztBQUFDM0csTUFBRDtBQUFJeUgsWUFBSjtBQUFhQztBQUFiLEdBQTFCO0FBQWtELFNBQU9mLFFBQVA7QUFBaUIsQzs7Ozs7Ozs7Ozs7QUNEM2hCOztBQUFBLElBQUloVyxzQkFBc0IsR0FBQ0MsbUJBQU8sQ0FBQyxzSUFBRCxDQUFsQzs7QUFBbUZDLGtCQUFBLEdBQW1CLElBQW5CO0FBQXdCQSxlQUFBLEdBQWdCcVgsVUFBaEI7O0FBQTJCLElBQUlqWCxNQUFNLEdBQUNOLHNCQUFzQixDQUFDQyxtQkFBTyxDQUFDLG9CQUFELENBQVIsQ0FBakM7O0FBQW9ELElBQUk4SixPQUFPLEdBQUM5SixtQkFBTyxDQUFDLDJEQUFELENBQW5COztBQUFnQyxTQUFTc1gsVUFBVCxDQUFvQkMsaUJBQXBCLEVBQXNDO0FBQUMsV0FBU0MsaUJBQVQsQ0FBMkJ6akIsS0FBM0IsRUFBaUM7QUFBQyxXQUFNLGFBQWFzTSxNQUFNLENBQUNpQixPQUFQLENBQWVpSCxhQUFmLENBQTZCZ1AsaUJBQTdCLEVBQStDNWYsTUFBTSxDQUFDZ1IsTUFBUCxDQUFjO0FBQUN1QixZQUFNLEVBQUMsQ0FBQyxHQUFFSixPQUFPLENBQUMyQyxTQUFYO0FBQVIsS0FBZCxFQUErQzFZLEtBQS9DLENBQS9DLENBQW5CO0FBQTBIOztBQUFBeWpCLG1CQUFpQixDQUFDQyxlQUFsQixHQUFrQ0YsaUJBQWlCLENBQUNFLGVBQXBELENBQW1FO0FBQW5FO0FBQ3phRCxtQkFBaUIsQ0FBQ0UsbUJBQWxCLEdBQXNDSCxpQkFBaUIsQ0FBQ0csbUJBQXhEOztBQUE0RSxZQUF1QztBQUFDLFVBQU14WSxJQUFJLEdBQUNxWSxpQkFBaUIsQ0FBQ0ksV0FBbEIsSUFBK0JKLGlCQUFpQixDQUFDclksSUFBakQsSUFBdUQsU0FBbEU7QUFBNEVzWSxxQkFBaUIsQ0FBQ0csV0FBbEIsR0FBK0IsY0FBYXpZLElBQUssR0FBakQ7QUFBcUQ7O0FBQUEsU0FBT3NZLGlCQUFQO0FBQTBCLEM7Ozs7Ozs7Ozs7O0FDRG5ROztBQUFBdlgsa0JBQUEsR0FBbUIsSUFBbkI7QUFBd0JBLDJCQUFBLEdBQTRCMlgsbUJBQTVCOztBQUFnRCxTQUFTQSxtQkFBVCxDQUE2QkMsUUFBN0IsRUFBc0M5SixPQUF0QyxFQUE4QztBQUFDLE1BQUkrSixjQUFKLENBQUQsQ0FBb0I7O0FBQ3ZKLFFBQU1DLGFBQWEsR0FBQ0YsUUFBUSxDQUFDRyxLQUFULENBQWUsR0FBZixDQUFwQjtBQUF3QyxHQUFDakssT0FBTyxJQUFFLEVBQVYsRUFBY2tLLElBQWQsQ0FBbUIzTixNQUFNLElBQUU7QUFBQyxRQUFHeU4sYUFBYSxDQUFDLENBQUQsQ0FBYixDQUFpQjVaLFdBQWpCLE9BQWlDbU0sTUFBTSxDQUFDbk0sV0FBUCxFQUFwQyxFQUF5RDtBQUFDMlosb0JBQWMsR0FBQ3hOLE1BQWY7QUFBc0J5TixtQkFBYSxDQUFDRyxNQUFkLENBQXFCLENBQXJCLEVBQXVCLENBQXZCO0FBQTBCTCxjQUFRLEdBQUNFLGFBQWEsQ0FBQ2xVLElBQWQsQ0FBbUIsR0FBbkIsS0FBeUIsR0FBbEM7QUFBc0MsYUFBTyxJQUFQO0FBQWE7O0FBQUEsV0FBTyxLQUFQO0FBQWMsR0FBdk07QUFBeU0sU0FBTTtBQUFDZ1UsWUFBRDtBQUFVQztBQUFWLEdBQU47QUFBaUMsQzs7Ozs7Ozs7Ozs7QUNEclE7O0FBQUE3WCxrQkFBQSxHQUFtQixJQUFuQjtBQUF3QkEsZUFBQSxHQUFnQmtZLElBQWhCO0FBQXFCO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlHO0FBQ0g7QUFDQTs7QUFDQSxTQUFTQSxJQUFULEdBQWU7QUFBQyxRQUFNdlMsR0FBRyxHQUFDak8sTUFBTSxDQUFDeWdCLE1BQVAsQ0FBYyxJQUFkLENBQVY7QUFBOEIsU0FBTTtBQUFDaEQsTUFBRSxDQUFDL2QsSUFBRCxFQUFNZ2hCLE9BQU4sRUFBYztBQUFDO0FBQUMsT0FBQ3pTLEdBQUcsQ0FBQ3ZPLElBQUQsQ0FBSCxLQUFZdU8sR0FBRyxDQUFDdk8sSUFBRCxDQUFILEdBQVUsRUFBdEIsQ0FBRCxFQUE0QndMLElBQTVCLENBQWlDd1YsT0FBakM7QUFBMkMsS0FBOUQ7O0FBQStEQyxPQUFHLENBQUNqaEIsSUFBRCxFQUFNZ2hCLE9BQU4sRUFBYztBQUFDLFVBQUd6UyxHQUFHLENBQUN2TyxJQUFELENBQU4sRUFBYTtBQUFDdU8sV0FBRyxDQUFDdk8sSUFBRCxDQUFILENBQVU2Z0IsTUFBVixDQUFpQnRTLEdBQUcsQ0FBQ3ZPLElBQUQsQ0FBSCxDQUFVbVUsT0FBVixDQUFrQjZNLE9BQWxCLE1BQTZCLENBQTlDLEVBQWdELENBQWhEO0FBQW9EO0FBQUMsS0FBcEo7O0FBQXFKRSxRQUFJLENBQUNsaEIsSUFBRCxFQUFNLEdBQUdtaEIsSUFBVCxFQUFjO0FBQUM7QUFDNU47QUFBQyxPQUFDNVMsR0FBRyxDQUFDdk8sSUFBRCxDQUFILElBQVcsRUFBWixFQUFnQnZDLEtBQWhCLEdBQXdCQyxHQUF4QixDQUE0QnNqQixPQUFPLElBQUU7QUFBQ0EsZUFBTyxDQUFDLEdBQUdHLElBQUosQ0FBUDtBQUFrQixPQUF4RDtBQUEyRDs7QUFEUixHQUFOO0FBQ2lCLEM7Ozs7Ozs7Ozs7O0FDZGxEOztBQUFBdlksa0JBQUEsR0FBbUIsSUFBbkI7QUFBd0JBLHVCQUFBLEdBQXdCNk4sZUFBeEI7QUFBd0M3TixpQkFBQSxHQUFrQmlPLFNBQWxCO0FBQTRCak8saUJBQUEsR0FBa0J3WSxTQUFsQjtBQUE0QnhZLG1CQUFBLEdBQW9CeVksV0FBcEI7QUFBZ0N6WSxtQkFBQSxHQUFvQmdPLFdBQXBCO0FBQWdDaE8sbUJBQUEsR0FBb0IwWSxXQUFwQjtBQUFnQzFZLGtCQUFBLEdBQW1CbUssVUFBbkI7QUFBOEJuSyxxQkFBQSxHQUFzQjJZLGFBQXRCO0FBQW9DM1ksbUJBQUEsR0FBb0I0TSxXQUFwQjtBQUFnQzVNLGVBQUEsR0FBZ0IsS0FBSyxDQUFyQjs7QUFBdUIsSUFBSTRZLHVCQUF1QixHQUFDN1ksbUJBQU8sQ0FBQyw2R0FBRCxDQUFuQzs7QUFBZ0YsSUFBSThZLFlBQVksR0FBQzlZLG1CQUFPLENBQUMscUZBQUQsQ0FBeEI7O0FBQXlELElBQUkrWSxvQkFBb0IsR0FBQy9ZLG1CQUFPLENBQUMsZ0hBQUQsQ0FBaEM7O0FBQXVFLElBQUlnWixvQkFBb0IsR0FBQ2haLG1CQUFPLENBQUMsNkdBQUQsQ0FBaEM7O0FBQWtFLElBQUlpWixLQUFLLEdBQUNsWixzQkFBc0IsQ0FBQ0MsbUJBQU8sQ0FBQyxpRUFBRCxDQUFSLENBQWhDOztBQUFxRCxJQUFJa1osTUFBTSxHQUFDbFosbUJBQU8sQ0FBQyxtRUFBRCxDQUFsQjs7QUFBK0IsSUFBSW1aLFVBQVUsR0FBQ25aLG1CQUFPLENBQUMsK0ZBQUQsQ0FBdEI7O0FBQTZDLElBQUlvWixpQkFBaUIsR0FBQ3BaLG1CQUFPLENBQUMsK0dBQUQsQ0FBN0I7O0FBQTRELElBQUlxWixZQUFZLEdBQUNyWixtQkFBTyxDQUFDLGlHQUFELENBQXhCOztBQUFnRCxJQUFJc1osZ0JBQWdCLEdBQUN2WixzQkFBc0IsQ0FBQ0MsbUJBQU8sQ0FBQyx1Q0FBRCxDQUFSLENBQTNDOztBQUFpRixJQUFJdVosYUFBYSxHQUFDdlosbUJBQU8sQ0FBQyxxR0FBRCxDQUF6Qjs7QUFBbUQsSUFBSXdaLFdBQVcsR0FBQ3haLG1CQUFPLENBQUMsaUdBQUQsQ0FBdkI7O0FBQStDLFNBQVNELHNCQUFULENBQWdDMFosR0FBaEMsRUFBb0M7QUFBQyxTQUFPQSxHQUFHLElBQUVBLEdBQUcsQ0FBQ0MsVUFBVCxHQUFvQkQsR0FBcEIsR0FBd0I7QUFBQ25ZLFdBQU8sRUFBQ21ZO0FBQVQsR0FBL0I7QUFBOEMsQyxDQUFBOzs7QUFDbm1DLElBQUlFLGtCQUFKOztBQUF1QixJQUFHeFgsS0FBSCxFQUFtQyxFQUFnRjs7QUFBQSxNQUFNeVgsUUFBUSxHQUFDelgsTUFBQSxJQUFvQyxFQUFuRDs7QUFBc0QsU0FBUzBYLHNCQUFULEdBQWlDO0FBQUMsU0FBT2xpQixNQUFNLENBQUNnUixNQUFQLENBQWMsSUFBSXZFLEtBQUosQ0FBVSxpQkFBVixDQUFkLEVBQTJDO0FBQUMwTixhQUFTLEVBQUM7QUFBWCxHQUEzQyxDQUFQO0FBQXFFOztBQUFBLFNBQVNnSSxhQUFULENBQXVCL1gsSUFBdkIsRUFBNEJnWSxNQUE1QixFQUFtQztBQUFDLFNBQU9BLE1BQU0sSUFBRWhZLElBQUksQ0FBQzJDLFVBQUwsQ0FBZ0IsR0FBaEIsQ0FBUixHQUE2QjNDLElBQUksS0FBRyxHQUFQLEdBQVcsQ0FBQyxHQUFFOFcsdUJBQXVCLENBQUNySywwQkFBM0IsRUFBdUR1TCxNQUF2RCxDQUFYLEdBQTJFLEdBQUVBLE1BQU8sR0FBRUMsZUFBZSxDQUFDalksSUFBRCxDQUFmLEtBQXdCLEdBQXhCLEdBQTRCQSxJQUFJLENBQUN5VCxTQUFMLENBQWUsQ0FBZixDQUE1QixHQUE4Q3pULElBQUssRUFBdEssR0FBd0tBLElBQS9LO0FBQXFMOztBQUFBLFNBQVMrTCxlQUFULENBQXlCL0wsSUFBekIsRUFBOEJ1SSxNQUE5QixFQUFxQ3lELE9BQXJDLEVBQTZDQyxhQUE3QyxFQUEyRDtBQUFDLE1BQUc3TCxLQUFILEVBQW1DLEVBQXVWOztBQUFBLFNBQU8sS0FBUDtBQUFjOztBQUFBLFNBQVMrTCxTQUFULENBQW1Cbk0sSUFBbkIsRUFBd0J1SSxNQUF4QixFQUErQjZELGFBQS9CLEVBQTZDO0FBQUMsTUFBR2hNLEtBQUgsRUFBbUMsRUFBZ1I7O0FBQUEsU0FBT0osSUFBUDtBQUFhOztBQUFBLFNBQVMwVyxTQUFULENBQW1CMVcsSUFBbkIsRUFBd0J1SSxNQUF4QixFQUErQjtBQUFDLE1BQUduSSxLQUFILEVBQW1DLEVBQWtTOztBQUFBLFNBQU9KLElBQVA7QUFBYTs7QUFBQSxTQUFTaVksZUFBVCxDQUF5QmpZLElBQXpCLEVBQThCO0FBQUMsUUFBTWtZLFVBQVUsR0FBQ2xZLElBQUksQ0FBQ3lKLE9BQUwsQ0FBYSxHQUFiLENBQWpCO0FBQW1DLFFBQU0wTyxTQUFTLEdBQUNuWSxJQUFJLENBQUN5SixPQUFMLENBQWEsR0FBYixDQUFoQjs7QUFBa0MsTUFBR3lPLFVBQVUsR0FBQyxDQUFDLENBQVosSUFBZUMsU0FBUyxHQUFDLENBQUMsQ0FBN0IsRUFBK0I7QUFBQ25ZLFFBQUksR0FBQ0EsSUFBSSxDQUFDeVQsU0FBTCxDQUFlLENBQWYsRUFBaUJ5RSxVQUFVLEdBQUMsQ0FBQyxDQUFaLEdBQWNBLFVBQWQsR0FBeUJDLFNBQTFDLENBQUw7QUFBMkQ7O0FBQUEsU0FBT25ZLElBQVA7QUFBYTs7QUFBQSxTQUFTMlcsV0FBVCxDQUFxQjNXLElBQXJCLEVBQTBCO0FBQUNBLE1BQUksR0FBQ2lZLGVBQWUsQ0FBQ2pZLElBQUQsQ0FBcEI7QUFBMkIsU0FBT0EsSUFBSSxLQUFHNlgsUUFBUCxJQUFpQjdYLElBQUksQ0FBQzJDLFVBQUwsQ0FBZ0JrVixRQUFRLEdBQUMsR0FBekIsQ0FBeEI7QUFBdUQ7O0FBQUEsU0FBUzNMLFdBQVQsQ0FBcUJsTSxJQUFyQixFQUEwQjtBQUFDO0FBQ3gvRCxTQUFPK1gsYUFBYSxDQUFDL1gsSUFBRCxFQUFNNlgsUUFBTixDQUFwQjtBQUFxQzs7QUFBQSxTQUFTakIsV0FBVCxDQUFxQjVXLElBQXJCLEVBQTBCO0FBQUNBLE1BQUksR0FBQ0EsSUFBSSxDQUFDak4sS0FBTCxDQUFXOGtCLFFBQVEsQ0FBQzdXLE1BQXBCLENBQUw7QUFBaUMsTUFBRyxDQUFDaEIsSUFBSSxDQUFDMkMsVUFBTCxDQUFnQixHQUFoQixDQUFKLEVBQXlCM0MsSUFBSSxHQUFFLElBQUdBLElBQUssRUFBZDtBQUFnQixTQUFPQSxJQUFQO0FBQWE7QUFBQTtBQUN2SjtBQUNBOzs7QUFBRyxTQUFTcUksVUFBVCxDQUFvQitQLEdBQXBCLEVBQXdCO0FBQUM7QUFDNUIsTUFBR0EsR0FBRyxDQUFDelYsVUFBSixDQUFlLEdBQWYsS0FBcUJ5VixHQUFHLENBQUN6VixVQUFKLENBQWUsR0FBZixDQUFyQixJQUEwQ3lWLEdBQUcsQ0FBQ3pWLFVBQUosQ0FBZSxHQUFmLENBQTdDLEVBQWlFLE9BQU8sSUFBUDs7QUFBWSxNQUFHO0FBQUM7QUFDakYsVUFBTTBWLGNBQWMsR0FBQyxDQUFDLEdBQUVsQixNQUFNLENBQUNtQixpQkFBVixHQUFyQjtBQUFvRCxVQUFNQyxRQUFRLEdBQUMsSUFBSTlRLEdBQUosQ0FBUTJRLEdBQVIsRUFBWUMsY0FBWixDQUFmO0FBQTJDLFdBQU9FLFFBQVEsQ0FBQ0MsTUFBVCxLQUFrQkgsY0FBbEIsSUFBa0MxQixXQUFXLENBQUM0QixRQUFRLENBQUN6QyxRQUFWLENBQXBEO0FBQXlFLEdBRDNGLENBQzJGLE9BQU01TCxDQUFOLEVBQVE7QUFBQyxXQUFPLEtBQVA7QUFBYztBQUFDOztBQUFBLFNBQVMyTSxhQUFULENBQXVCdkcsS0FBdkIsRUFBNkJtSSxVQUE3QixFQUF3Q0MsS0FBeEMsRUFBOEM7QUFBQyxNQUFJQyxpQkFBaUIsR0FBQyxFQUF0QjtBQUF5QixRQUFNQyxZQUFZLEdBQUMsQ0FBQyxHQUFFbkIsV0FBVyxDQUFDb0IsYUFBZixFQUE4QnZJLEtBQTlCLENBQW5CO0FBQXdELFFBQU13SSxhQUFhLEdBQUNGLFlBQVksQ0FBQ0csTUFBakM7QUFBd0MsUUFBTUMsY0FBYyxHQUFDO0FBQzdYLEdBQUNQLFVBQVUsS0FBR25JLEtBQWIsR0FBbUIsQ0FBQyxHQUFFa0gsYUFBYSxDQUFDeUIsZUFBakIsRUFBa0NMLFlBQWxDLEVBQWdESCxVQUFoRCxDQUFuQixHQUErRSxFQUFoRixLQUFxRjtBQUNyRjtBQUNBQyxPQUh3VztBQUdsV0MsbUJBQWlCLEdBQUNySSxLQUFsQjtBQUF3QixRQUFNakosTUFBTSxHQUFDelIsTUFBTSxDQUFDb1UsSUFBUCxDQUFZOE8sYUFBWixDQUFiOztBQUF3QyxNQUFHLENBQUN6UixNQUFNLENBQUM2UixLQUFQLENBQWFDLEtBQUssSUFBRTtBQUFDLFFBQUkvSyxLQUFLLEdBQUM0SyxjQUFjLENBQUNHLEtBQUQsQ0FBZCxJQUF1QixFQUFqQztBQUFvQyxVQUFLO0FBQUNDLFlBQUQ7QUFBUUM7QUFBUixRQUFrQlAsYUFBYSxDQUFDSyxLQUFELENBQXBDLENBQXJDLENBQWlGO0FBQy9LOztBQUNBLFFBQUlHLFFBQVEsR0FBRSxJQUFHRixNQUFNLEdBQUMsS0FBRCxHQUFPLEVBQUcsR0FBRUQsS0FBTSxHQUF6Qzs7QUFBNEMsUUFBR0UsUUFBSCxFQUFZO0FBQUNDLGNBQVEsR0FBRSxHQUFFLENBQUNsTCxLQUFELEdBQU8sR0FBUCxHQUFXLEVBQUcsSUFBR2tMLFFBQVMsR0FBdEM7QUFBMEM7O0FBQUEsUUFBR0YsTUFBTSxJQUFFLENBQUNsRixLQUFLLENBQUNDLE9BQU4sQ0FBYy9GLEtBQWQsQ0FBWixFQUFpQ0EsS0FBSyxHQUFDLENBQUNBLEtBQUQsQ0FBTjtBQUFjLFdBQU0sQ0FBQ2lMLFFBQVEsSUFBRUYsS0FBSyxJQUFJSCxjQUFwQixPQUFzQztBQUM5TEwscUJBQWlCLEdBQUNBLGlCQUFpQixDQUFDdlAsT0FBbEIsQ0FBMEJrUSxRQUExQixFQUFtQ0YsTUFBTSxHQUFDaEwsS0FBSyxDQUFDcGIsR0FBTixFQUFVO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBdW1CLFdBQU8sSUFBRTFSLGtCQUFrQixDQUFDMFIsT0FBRCxDQUppQyxFQUl0QnpYLElBSnNCLENBSWpCLEdBSmlCLENBQUQsR0FJWCtGLGtCQUFrQixDQUFDdUcsS0FBRCxDQUpoRCxLQUkwRCxHQUw0RSxDQUFOO0FBS2hFLEdBUFIsQ0FBSixFQU9jO0FBQUN1SyxxQkFBaUIsR0FBQyxFQUFsQixDQUFELENBQXNCO0FBQzFHO0FBQ0E7QUFDQzs7QUFBQSxTQUFNO0FBQUN0UixVQUFEO0FBQVFtUyxVQUFNLEVBQUNiO0FBQWYsR0FBTjtBQUF5Qzs7QUFBQSxTQUFTYyxrQkFBVCxDQUE0QmYsS0FBNUIsRUFBa0NyUixNQUFsQyxFQUF5QztBQUFDLFFBQU1xUyxhQUFhLEdBQUMsRUFBcEI7QUFBdUI5akIsUUFBTSxDQUFDb1UsSUFBUCxDQUFZME8sS0FBWixFQUFtQnpPLE9BQW5CLENBQTJCalUsR0FBRyxJQUFFO0FBQUMsUUFBRyxDQUFDcVIsTUFBTSxDQUFDeFMsUUFBUCxDQUFnQm1CLEdBQWhCLENBQUosRUFBeUI7QUFBQzBqQixtQkFBYSxDQUFDMWpCLEdBQUQsQ0FBYixHQUFtQjBpQixLQUFLLENBQUMxaUIsR0FBRCxDQUF4QjtBQUErQjtBQUFDLEdBQTNGO0FBQTZGLFNBQU8wakIsYUFBUDtBQUFzQjtBQUFBO0FBQzlOO0FBQ0E7QUFDQTs7O0FBQUcsU0FBUzVPLFdBQVQsQ0FBcUIzQyxNQUFyQixFQUE0QmxCLElBQTVCLEVBQWlDMFMsU0FBakMsRUFBMkM7QUFBQztBQUMvQyxNQUFJQyxJQUFKO0FBQVMsUUFBTUMsV0FBVyxHQUFDLE9BQU81UyxJQUFQLEtBQWMsUUFBZCxHQUF1QkEsSUFBdkIsR0FBNEIsQ0FBQyxHQUFFa1EsTUFBTSxDQUFDMkMsb0JBQVYsRUFBZ0M3UyxJQUFoQyxDQUE5Qzs7QUFBb0YsTUFBRztBQUFDMlMsUUFBSSxHQUFDLElBQUluUyxHQUFKLENBQVFvUyxXQUFXLENBQUNsWCxVQUFaLENBQXVCLEdBQXZCLElBQTRCd0YsTUFBTSxDQUFDNFIsTUFBbkMsR0FBMEM1UixNQUFNLENBQUMyTixRQUF6RCxFQUFrRSxVQUFsRSxDQUFMO0FBQW9GLEdBQXhGLENBQXdGLE9BQU01TCxDQUFOLEVBQVE7QUFBQztBQUM5TDBQLFFBQUksR0FBQyxJQUFJblMsR0FBSixDQUFRLEdBQVIsRUFBWSxVQUFaLENBQUw7QUFBOEIsR0FGZ0IsQ0FFaEI7OztBQUM5QixNQUFHLENBQUNZLFVBQVUsQ0FBQ3dSLFdBQUQsQ0FBZCxFQUE0QjtBQUFDLFdBQU9GLFNBQVMsR0FBQyxDQUFDRSxXQUFELENBQUQsR0FBZUEsV0FBL0I7QUFBNEM7O0FBQUEsTUFBRztBQUFDLFVBQU1HLFFBQVEsR0FBQyxJQUFJdlMsR0FBSixDQUFRb1MsV0FBUixFQUFvQkQsSUFBcEIsQ0FBZjtBQUF5Q0ksWUFBUSxDQUFDbEUsUUFBVCxHQUFrQixDQUFDLEdBQUVnQix1QkFBdUIsQ0FBQ3JLLDBCQUEzQixFQUF1RHVOLFFBQVEsQ0FBQ2xFLFFBQWhFLENBQWxCO0FBQTRGLFFBQUltRSxjQUFjLEdBQUMsRUFBbkI7O0FBQXNCLFFBQUcsQ0FBQyxHQUFFN0MsVUFBVSxDQUFDOEMsY0FBZCxFQUE4QkYsUUFBUSxDQUFDbEUsUUFBdkMsS0FBa0RrRSxRQUFRLENBQUNHLFlBQTNELElBQXlFUixTQUE1RSxFQUFzRjtBQUFDLFlBQU1qQixLQUFLLEdBQUMsQ0FBQyxHQUFFcEIsWUFBWSxDQUFDOEMsc0JBQWhCLEVBQXdDSixRQUFRLENBQUNHLFlBQWpELENBQVo7QUFBMkUsWUFBSztBQUFDWCxjQUFEO0FBQVFuUztBQUFSLFVBQWdCd1AsYUFBYSxDQUFDbUQsUUFBUSxDQUFDbEUsUUFBVixFQUFtQmtFLFFBQVEsQ0FBQ2xFLFFBQTVCLEVBQXFDNEMsS0FBckMsQ0FBbEM7O0FBQThFLFVBQUdjLE1BQUgsRUFBVTtBQUFDUyxzQkFBYyxHQUFDLENBQUMsR0FBRTlDLE1BQU0sQ0FBQzJDLG9CQUFWLEVBQWdDO0FBQUNoRSxrQkFBUSxFQUFDMEQsTUFBVjtBQUFpQmEsY0FBSSxFQUFDTCxRQUFRLENBQUNLLElBQS9CO0FBQW9DM0IsZUFBSyxFQUFDZSxrQkFBa0IsQ0FBQ2YsS0FBRCxFQUFPclIsTUFBUDtBQUE1RCxTQUFoQyxDQUFmO0FBQTZIO0FBQUMsS0FBcmhCLENBQXFoQjs7O0FBQ2ptQixVQUFNdUQsWUFBWSxHQUFDb1AsUUFBUSxDQUFDeEIsTUFBVCxLQUFrQm9CLElBQUksQ0FBQ3BCLE1BQXZCLEdBQThCd0IsUUFBUSxDQUFDL1MsSUFBVCxDQUFjbFUsS0FBZCxDQUFvQmluQixRQUFRLENBQUN4QixNQUFULENBQWdCeFgsTUFBcEMsQ0FBOUIsR0FBMEVnWixRQUFRLENBQUMvUyxJQUF0RztBQUEyRyxXQUFPMFMsU0FBUyxHQUFDLENBQUMvTyxZQUFELEVBQWNxUCxjQUFjLElBQUVyUCxZQUE5QixDQUFELEdBQTZDQSxZQUE3RDtBQUEyRSxHQUQ3RyxDQUM2RyxPQUFNVixDQUFOLEVBQVE7QUFBQyxXQUFPeVAsU0FBUyxHQUFDLENBQUNFLFdBQUQsQ0FBRCxHQUFlQSxXQUEvQjtBQUE0QztBQUFDOztBQUFBLFNBQVNTLFdBQVQsQ0FBcUJsQyxHQUFyQixFQUF5QjtBQUFDLFFBQU1JLE1BQU0sR0FBQyxDQUFDLEdBQUVyQixNQUFNLENBQUNtQixpQkFBVixHQUFiO0FBQTRDLFNBQU9GLEdBQUcsQ0FBQ3pWLFVBQUosQ0FBZTZWLE1BQWYsSUFBdUJKLEdBQUcsQ0FBQzNFLFNBQUosQ0FBYytFLE1BQU0sQ0FBQ3hYLE1BQXJCLENBQXZCLEdBQW9Eb1gsR0FBM0Q7QUFBZ0U7O0FBQUEsU0FBU21DLFlBQVQsQ0FBc0JwUyxNQUF0QixFQUE2QmlRLEdBQTdCLEVBQWlDcFIsRUFBakMsRUFBb0M7QUFBQztBQUN2WjtBQUNBLE1BQUcsQ0FBQzRELFlBQUQsRUFBY0MsVUFBZCxJQUEwQkMsV0FBVyxDQUFDM0MsTUFBRCxFQUFRaVEsR0FBUixFQUFZLElBQVosQ0FBeEM7QUFBMEQsUUFBTUksTUFBTSxHQUFDLENBQUMsR0FBRXJCLE1BQU0sQ0FBQ21CLGlCQUFWLEdBQWI7QUFBNEMsUUFBTWtDLGFBQWEsR0FBQzVQLFlBQVksQ0FBQ2pJLFVBQWIsQ0FBd0I2VixNQUF4QixDQUFwQjtBQUFvRCxRQUFNaUMsV0FBVyxHQUFDNVAsVUFBVSxJQUFFQSxVQUFVLENBQUNsSSxVQUFYLENBQXNCNlYsTUFBdEIsQ0FBOUI7QUFBNEQ1TixjQUFZLEdBQUMwUCxXQUFXLENBQUMxUCxZQUFELENBQXhCO0FBQXVDQyxZQUFVLEdBQUNBLFVBQVUsR0FBQ3lQLFdBQVcsQ0FBQ3pQLFVBQUQsQ0FBWixHQUF5QkEsVUFBOUM7QUFBeUQsUUFBTTZQLFdBQVcsR0FBQ0YsYUFBYSxHQUFDNVAsWUFBRCxHQUFjc0IsV0FBVyxDQUFDdEIsWUFBRCxDQUF4RDtBQUF1RSxRQUFNK1AsVUFBVSxHQUFDM1QsRUFBRSxHQUFDc1QsV0FBVyxDQUFDeFAsV0FBVyxDQUFDM0MsTUFBRCxFQUFRbkIsRUFBUixDQUFaLENBQVosR0FBcUM2RCxVQUFVLElBQUVELFlBQXBFO0FBQWlGLFNBQU07QUFBQ3dOLE9BQUcsRUFBQ3NDLFdBQUw7QUFBaUIxVCxNQUFFLEVBQUN5VCxXQUFXLEdBQUNFLFVBQUQsR0FBWXpPLFdBQVcsQ0FBQ3lPLFVBQUQ7QUFBdEQsR0FBTjtBQUEyRTs7QUFBQSxTQUFTQyxtQkFBVCxDQUE2QjlFLFFBQTdCLEVBQXNDK0UsS0FBdEMsRUFBNEM7QUFBQyxRQUFNQyxhQUFhLEdBQUMsQ0FBQyxHQUFFaEUsdUJBQXVCLENBQUN2Syx1QkFBM0IsRUFBb0QsQ0FBQyxHQUFFeUssb0JBQW9CLENBQUMrRCxtQkFBeEIsRUFBNkNqRixRQUE3QyxDQUFwRCxDQUFwQjs7QUFBZ0ksTUFBR2dGLGFBQWEsS0FBRyxNQUFoQixJQUF3QkEsYUFBYSxLQUFHLFNBQTNDLEVBQXFEO0FBQUMsV0FBT2hGLFFBQVA7QUFBaUIsR0FBeE0sQ0FBd007OztBQUM3d0IsTUFBRyxDQUFDK0UsS0FBSyxDQUFDaG1CLFFBQU4sQ0FBZWltQixhQUFmLENBQUosRUFBa0M7QUFBQztBQUNuQ0QsU0FBSyxDQUFDM0UsSUFBTixDQUFXOEUsSUFBSSxJQUFFO0FBQUMsVUFBRyxDQUFDLEdBQUU1RCxVQUFVLENBQUM4QyxjQUFkLEVBQThCYyxJQUE5QixLQUFxQyxDQUFDLEdBQUV2RCxXQUFXLENBQUNvQixhQUFmLEVBQThCbUMsSUFBOUIsRUFBb0NDLEVBQXBDLENBQXVDNUksSUFBdkMsQ0FBNEN5SSxhQUE1QyxDQUF4QyxFQUFtRztBQUFDaEYsZ0JBQVEsR0FBQ2tGLElBQVQ7QUFBYyxlQUFPLElBQVA7QUFBYTtBQUFDLEtBQWxKO0FBQXFKOztBQUFBLFNBQU0sQ0FBQyxHQUFFbEUsdUJBQXVCLENBQUN2Syx1QkFBM0IsRUFBb0R1SixRQUFwRCxDQUFOO0FBQXFFOztBQUFBLE1BQU1vRix1QkFBdUIsR0FBQzlhLE1BQUEsSUFBMEcsQ0FBeEk7QUFDdEksTUFBTSthLGtCQUFrQixHQUFDM0wsTUFBTSxDQUFDLG9CQUFELENBQS9COztBQUFzRCxTQUFTNEwsVUFBVCxDQUFvQmhELEdBQXBCLEVBQXdCaUQsUUFBeEIsRUFBaUM7QUFBQyxTQUFPakssS0FBSyxDQUFDZ0gsR0FBRCxFQUFLO0FBQUM7QUFDOUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQWtELGVBQVcsRUFBQztBQVhpTCxHQUFMLENBQUwsQ0FXdkp0WSxJQVh1SixDQVdsSmdNLEdBQUcsSUFBRTtBQUFDLFFBQUcsQ0FBQ0EsR0FBRyxDQUFDcUMsRUFBUixFQUFXO0FBQUMsVUFBR2dLLFFBQVEsR0FBQyxDQUFULElBQVlyTSxHQUFHLENBQUN2UyxNQUFKLElBQVksR0FBM0IsRUFBK0I7QUFBQyxlQUFPMmUsVUFBVSxDQUFDaEQsR0FBRCxFQUFLaUQsUUFBUSxHQUFDLENBQWQsQ0FBakI7QUFBbUM7O0FBQUEsVUFBR3JNLEdBQUcsQ0FBQ3ZTLE1BQUosS0FBYSxHQUFoQixFQUFvQjtBQUFDLGVBQU91UyxHQUFHLENBQUN1TSxJQUFKLEdBQVd2WSxJQUFYLENBQWdCd1ksSUFBSSxJQUFFO0FBQUMsY0FBR0EsSUFBSSxDQUFDQyxRQUFSLEVBQWlCO0FBQUMsbUJBQU07QUFBQ0Esc0JBQVEsRUFBQ047QUFBVixhQUFOO0FBQXFDOztBQUFBLGdCQUFNLElBQUk5WSxLQUFKLENBQVcsNkJBQVgsQ0FBTjtBQUFnRCxTQUE5SCxDQUFQO0FBQXdJOztBQUFBLFlBQU0sSUFBSUEsS0FBSixDQUFXLDZCQUFYLENBQU47QUFBZ0Q7O0FBQUEsV0FBTzJNLEdBQUcsQ0FBQ3VNLElBQUosRUFBUDtBQUFtQixHQVhuSyxDQUFQO0FBVzZLOztBQUFBLFNBQVNHLGFBQVQsQ0FBdUJDLFFBQXZCLEVBQWdDQyxjQUFoQyxFQUErQztBQUFDLFNBQU9SLFVBQVUsQ0FBQ08sUUFBRCxFQUFVQyxjQUFjLEdBQUMsQ0FBRCxHQUFHLENBQTNCLENBQVYsQ0FBd0M3WSxLQUF4QyxDQUE4QzJFLEdBQUcsSUFBRTtBQUFDO0FBQ3BjO0FBQ0E7QUFDQSxRQUFHLENBQUNrVSxjQUFKLEVBQW1CO0FBQUMsT0FBQyxHQUFFN0UsWUFBWSxDQUFDeEosY0FBaEIsRUFBZ0M3RixHQUFoQztBQUFzQzs7QUFBQSxVQUFNQSxHQUFOO0FBQVcsR0FIMlUsQ0FBUDtBQUdqVTs7QUFBQSxNQUFNbVUsTUFBTixDQUFZO0FBQUM7QUFDckY7QUFDQTtBQUFNO0FBQ047QUFDQUMsYUFBVyxDQUFDQyxTQUFELEVBQVdDLE1BQVgsRUFBa0JDLEdBQWxCLEVBQXNCO0FBQUNDLGdCQUFEO0FBQWNDLGNBQWQ7QUFBeUJDLE9BQXpCO0FBQTZCQyxXQUE3QjtBQUFxQ0MsYUFBckM7QUFBK0M1VSxPQUEvQztBQUFtRDZVLGdCQUFuRDtBQUFnRUMsY0FBaEU7QUFBMkVqVSxVQUEzRTtBQUFrRnlELFdBQWxGO0FBQTBGSSxpQkFBMUY7QUFBd0dILGlCQUF4RztBQUFzSHdRO0FBQXRILEdBQXRCLEVBQXVKO0FBQUMsU0FBS25NLEtBQUwsR0FBVyxLQUFLLENBQWhCO0FBQWtCLFNBQUt3RixRQUFMLEdBQWMsS0FBSyxDQUFuQjtBQUFxQixTQUFLNEMsS0FBTCxHQUFXLEtBQUssQ0FBaEI7QUFBa0IsU0FBS3FCLE1BQUwsR0FBWSxLQUFLLENBQWpCO0FBQW1CLFNBQUtsQyxRQUFMLEdBQWMsS0FBSyxDQUFuQjtBQUFxQixTQUFLbmUsVUFBTCxHQUFnQixLQUFLLENBQXJCO0FBQXVCLFNBQUtnakIsR0FBTCxHQUFTLEVBQVQ7QUFBWSxTQUFLQyxHQUFMLEdBQVMsRUFBVDtBQUFZLFNBQUtDLEdBQUwsR0FBUyxLQUFLLENBQWQ7QUFBZ0IsU0FBS0MsR0FBTCxHQUFTLEtBQUssQ0FBZDtBQUFnQixTQUFLVixVQUFMLEdBQWdCLEtBQUssQ0FBckI7QUFBdUIsU0FBS1csSUFBTCxHQUFVLEtBQUssQ0FBZjtBQUFpQixTQUFLNUosTUFBTCxHQUFZLEtBQUssQ0FBakI7QUFBbUIsU0FBSzZKLFFBQUwsR0FBYyxLQUFLLENBQW5CO0FBQXFCLFNBQUtDLEtBQUwsR0FBVyxLQUFLLENBQWhCO0FBQWtCLFNBQUtSLFVBQUwsR0FBZ0IsS0FBSyxDQUFyQjtBQUF1QixTQUFLUyxjQUFMLEdBQW9CLEtBQUssQ0FBekI7QUFBMkIsU0FBS0MsUUFBTCxHQUFjLEtBQUssQ0FBbkI7QUFBcUIsU0FBSzNVLE1BQUwsR0FBWSxLQUFLLENBQWpCO0FBQW1CLFNBQUt5RCxPQUFMLEdBQWEsS0FBSyxDQUFsQjtBQUFvQixTQUFLSSxhQUFMLEdBQW1CLEtBQUssQ0FBeEI7QUFBMEIsU0FBS0gsYUFBTCxHQUFtQixLQUFLLENBQXhCO0FBQTBCLFNBQUtrUixPQUFMLEdBQWEsS0FBSyxDQUFsQjtBQUFvQixTQUFLVixTQUFMLEdBQWUsS0FBSyxDQUFwQjtBQUFzQixTQUFLM1EsY0FBTCxHQUFvQixLQUFLLENBQXpCO0FBQTJCLFNBQUtzUixJQUFMLEdBQVUsQ0FBVjs7QUFBWSxTQUFLQyxVQUFMLEdBQWdCbFUsQ0FBQyxJQUFFO0FBQUMsWUFBTTlMLEtBQUssR0FBQzhMLENBQUMsQ0FBQzlMLEtBQWQ7O0FBQW9CLFVBQUcsQ0FBQ0EsS0FBSixFQUFVO0FBQUM7QUFDM3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFLO0FBQUN5WSxrQkFBRDtBQUFVNEM7QUFBVixZQUFpQixJQUF0QjtBQUEyQixhQUFLNEUsV0FBTCxDQUFpQixjQUFqQixFQUFnQyxDQUFDLEdBQUVuRyxNQUFNLENBQUMyQyxvQkFBVixFQUFnQztBQUFDaEUsa0JBQVEsRUFBQzVKLFdBQVcsQ0FBQzRKLFFBQUQsQ0FBckI7QUFBZ0M0QztBQUFoQyxTQUFoQyxDQUFoQyxFQUF3RyxDQUFDLEdBQUV2QixNQUFNLENBQUNvRyxNQUFWLEdBQXhHO0FBQTZIO0FBQVE7O0FBQUEsVUFBRyxDQUFDbGdCLEtBQUssQ0FBQ21nQixHQUFWLEVBQWM7QUFBQztBQUFROztBQUFBLFVBQUlDLFlBQUo7QUFBaUIsWUFBSztBQUFDckYsV0FBRDtBQUFLcFIsVUFBTDtBQUFRb0IsZUFBUjtBQUFnQnNWO0FBQWhCLFVBQXFCcmdCLEtBQTFCOztBQUFnQyxVQUFHK0MsS0FBSCxFQUF5QyxFQUVqSjs7QUFBQSxXQUFLZ2QsSUFBTCxHQUFVTSxHQUFWO0FBQWMsWUFBSztBQUFDNUg7QUFBRCxVQUFXLENBQUMsR0FBRXVCLGlCQUFpQixDQUFDc0csZ0JBQXJCLEVBQXVDdkYsR0FBdkMsQ0FBaEIsQ0FYNmlCLENBV2pmO0FBQzFNOztBQUNBLFVBQUcsS0FBSzRFLEtBQUwsSUFBWWhXLEVBQUUsS0FBRyxLQUFLK1MsTUFBdEIsSUFBOEJqRSxRQUFRLEtBQUcsS0FBS0EsUUFBakQsRUFBMEQ7QUFBQztBQUFRLE9BYnduQixDQWF4bkI7QUFDbkU7OztBQUNBLFVBQUcsS0FBS2dILElBQUwsSUFBVyxDQUFDLEtBQUtBLElBQUwsQ0FBVXpmLEtBQVYsQ0FBZixFQUFnQztBQUFDO0FBQVE7O0FBQUEsV0FBS3VnQixNQUFMLENBQVksY0FBWixFQUEyQnhGLEdBQTNCLEVBQStCcFIsRUFBL0IsRUFBa0NwUixNQUFNLENBQUNnUixNQUFQLENBQWMsRUFBZCxFQUFpQndCLE9BQWpCLEVBQXlCO0FBQUNpQixlQUFPLEVBQUNqQixPQUFPLENBQUNpQixPQUFSLElBQWlCLEtBQUs2VCxRQUEvQjtBQUF3QzNVLGNBQU0sRUFBQ0gsT0FBTyxDQUFDRyxNQUFSLElBQWdCLEtBQUs2RDtBQUFwRSxPQUF6QixDQUFsQyxFQUErSXFSLFlBQS9JO0FBQThKLEtBZmllLENBQXRnQixDQWVzQzs7O0FBQ3hNLFNBQUtuTixLQUFMLEdBQVcsQ0FBQyxHQUFFd0csdUJBQXVCLENBQUN2Syx1QkFBM0IsRUFBb0R3UCxTQUFwRCxDQUFYLENBaEJrSyxDQWdCeEY7O0FBQzFFLFNBQUtyaUIsVUFBTCxHQUFnQixFQUFoQixDQWpCa0ssQ0FpQi9JO0FBQ25CO0FBQ0E7O0FBQ0EsUUFBR3FpQixTQUFTLEtBQUcsU0FBZixFQUF5QjtBQUFDLFdBQUtyaUIsVUFBTCxDQUFnQixLQUFLNFcsS0FBckIsSUFBNEI7QUFBQ2dNLGlCQUFEO0FBQVcvbEIsZUFBTyxFQUFDLElBQW5CO0FBQXdCdkUsYUFBSyxFQUFDa3FCLFlBQTlCO0FBQTJDeFUsV0FBM0M7QUFBK0NtVyxlQUFPLEVBQUMzQixZQUFZLElBQUVBLFlBQVksQ0FBQzJCLE9BQWxGO0FBQTBGQyxlQUFPLEVBQUM1QixZQUFZLElBQUVBLFlBQVksQ0FBQzRCO0FBQTdILE9BQTVCO0FBQW1LOztBQUFBLFNBQUtwa0IsVUFBTCxDQUFnQixPQUFoQixJQUF5QjtBQUFDNGlCLGVBQVMsRUFBQ0YsR0FBWDtBQUFlcEwsaUJBQVcsRUFBQztBQUFDO0FBQUQ7QUFBM0IsS0FBekIsQ0FwQjNCLENBb0JvSTtBQUN0Uzs7QUFDQSxTQUFLa0MsTUFBTCxHQUFZMkksTUFBTSxDQUFDM0ksTUFBbkI7QUFBMEIsU0FBS2lKLFVBQUwsR0FBZ0JBLFVBQWhCO0FBQTJCLFNBQUtyRyxRQUFMLEdBQWNpRyxTQUFkO0FBQXdCLFNBQUtyRCxLQUFMLEdBQVdzRCxNQUFYLENBdEJxRixDQXNCbkU7QUFDL0Y7O0FBQ0EsVUFBTStCLGlCQUFpQixHQUFDLENBQUMsR0FBRTNHLFVBQVUsQ0FBQzhDLGNBQWQsRUFBOEI2QixTQUE5QixLQUEwQ3BQLElBQUksQ0FBQ3FSLGFBQUwsQ0FBbUJDLFVBQXJGOztBQUFnRyxTQUFLbEUsTUFBTCxHQUFZZ0UsaUJBQWlCLEdBQUNoQyxTQUFELEdBQVdFLEdBQXhDO0FBQTRDLFNBQUtwRSxRQUFMLEdBQWNBLFFBQWQ7QUFBdUIsU0FBSytFLEdBQUwsR0FBU0wsWUFBVDtBQUFzQixTQUFLTSxHQUFMLEdBQVMsSUFBVDtBQUFjLFNBQUtFLFFBQUwsR0FBY1YsT0FBZCxDQXhCckMsQ0F3QjJEO0FBQzdOOztBQUNBLFNBQUtXLEtBQUwsR0FBVyxJQUFYO0FBQWdCLFNBQUtSLFVBQUwsR0FBZ0JBLFVBQWhCO0FBQTJCLFNBQUtXLE9BQUwsR0FBYSxDQUFDLEVBQUV4USxJQUFJLENBQUNxUixhQUFMLENBQW1CRSxJQUFuQixJQUF5QnZSLElBQUksQ0FBQ3FSLGFBQUwsQ0FBbUJHLEdBQTVDLElBQWlELENBQUNKLGlCQUFELElBQW9CLENBQUNwUixJQUFJLENBQUN5UixRQUFMLENBQWNDLE1BQW5DLElBQTJDLENBQUNqZSxLQUEvRixDQUFkO0FBQThJLFNBQUtxYyxTQUFMLEdBQWUsQ0FBQyxDQUFDQSxTQUFqQjtBQUEyQixTQUFLM1EsY0FBTCxHQUFvQixLQUFwQjs7QUFBMEIsUUFBRzFMLEtBQUgsRUFBbUMsRUFBMkw7O0FBQUEsZUFBK0IsRUFNeFg7QUFBQzs7QUFBQWtlLFFBQU0sR0FBRTtBQUFDOVAsVUFBTSxDQUFDNFAsUUFBUCxDQUFnQkUsTUFBaEI7QUFBMEI7QUFBQTtBQUN2SjtBQUNBOzs7QUFBS0MsTUFBSSxHQUFFO0FBQUMvUCxVQUFNLENBQUNnUSxPQUFQLENBQWVELElBQWY7QUFBdUI7QUFBQTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBS3pkLE1BQUksQ0FBQ3NYLEdBQUQsRUFBS3BSLEVBQUwsRUFBUW9CLE9BQU8sR0FBQyxFQUFoQixFQUFtQjtBQUFDLFFBQUdoSSxLQUFILEVBQXlDLEVBR3lEOztBQUFBO0FBQUMsS0FBQztBQUFDZ1ksU0FBRDtBQUFLcFI7QUFBTCxRQUFTdVQsWUFBWSxDQUFDLElBQUQsRUFBTW5DLEdBQU4sRUFBVXBSLEVBQVYsQ0FBdEI7QUFBcUMsV0FBTyxLQUFLNFcsTUFBTCxDQUFZLFdBQVosRUFBd0J4RixHQUF4QixFQUE0QnBSLEVBQTVCLEVBQStCb0IsT0FBL0IsQ0FBUDtBQUFnRDtBQUFBO0FBQ3JOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUFLZ0IsU0FBTyxDQUFDZ1AsR0FBRCxFQUFLcFIsRUFBTCxFQUFRb0IsT0FBTyxHQUFDLEVBQWhCLEVBQW1CO0FBQUM7QUFBQyxLQUFDO0FBQUNnUSxTQUFEO0FBQUtwUjtBQUFMLFFBQVN1VCxZQUFZLENBQUMsSUFBRCxFQUFNbkMsR0FBTixFQUFVcFIsRUFBVixDQUF0QjtBQUFxQyxXQUFPLEtBQUs0VyxNQUFMLENBQVksY0FBWixFQUEyQnhGLEdBQTNCLEVBQStCcFIsRUFBL0IsRUFBa0NvQixPQUFsQyxDQUFQO0FBQW1EOztBQUFBLFFBQU13VixNQUFOLENBQWFhLE1BQWIsRUFBb0JyRyxHQUFwQixFQUF3QnBSLEVBQXhCLEVBQTJCb0IsT0FBM0IsRUFBbUNxVixZQUFuQyxFQUFnRDtBQUFDLFFBQUcsQ0FBQ3BWLFVBQVUsQ0FBQytQLEdBQUQsQ0FBZCxFQUFvQjtBQUFDNUosWUFBTSxDQUFDNFAsUUFBUCxDQUFnQm5YLElBQWhCLEdBQXFCbVIsR0FBckI7QUFBeUIsYUFBTyxLQUFQO0FBQWM7O0FBQUEsVUFBTXNHLGlCQUFpQixHQUFDdEcsR0FBRyxLQUFHcFIsRUFBTixJQUFVb0IsT0FBTyxDQUFDdVcsRUFBbEIsSUFBc0J2VyxPQUFPLENBQUN3VyxrQkFBdEQsQ0FBN0QsQ0FBc0k7QUFDL1M7O0FBQ0EsUUFBR3hXLE9BQU8sQ0FBQ3VXLEVBQVgsRUFBYztBQUFDLFdBQUt4QixPQUFMLEdBQWEsSUFBYjtBQUFtQjs7QUFBQSxRQUFJMEIsWUFBWSxHQUFDelcsT0FBTyxDQUFDRyxNQUFSLEtBQWlCLEtBQUtBLE1BQXZDOztBQUE4QyxRQUFHbkksS0FBSCxFQUFtQyxzQkFXbkQ7O0FBQUEsUUFBRyxDQUFDZ0ksT0FBTyxDQUFDdVcsRUFBWixFQUFlO0FBQUMsV0FBSzNCLEtBQUwsR0FBVyxLQUFYO0FBQWtCLEtBYnVFLENBYXZFOzs7QUFDbEcsUUFBRzdGLE1BQU0sQ0FBQzJILEVBQVYsRUFBYTtBQUFDQyxpQkFBVyxDQUFDQyxJQUFaLENBQWlCLGFBQWpCO0FBQWlDOztBQUFBLFVBQUs7QUFBQzNWLGFBQU8sR0FBQztBQUFULFFBQWdCakIsT0FBckI7QUFBNkIsVUFBTTZXLFVBQVUsR0FBQztBQUFDNVY7QUFBRCxLQUFqQjs7QUFBMkIsUUFBRyxLQUFLNFQsY0FBUixFQUF1QjtBQUFDLFdBQUtpQyxrQkFBTCxDQUF3QixLQUFLakMsY0FBN0IsRUFBNENnQyxVQUE1QztBQUF5RDs7QUFBQWpZLE1BQUUsR0FBQ2tGLFdBQVcsQ0FBQ0MsU0FBUyxDQUFDd0ssV0FBVyxDQUFDM1AsRUFBRCxDQUFYLEdBQWdCNFAsV0FBVyxDQUFDNVAsRUFBRCxDQUEzQixHQUFnQ0EsRUFBakMsRUFBb0NvQixPQUFPLENBQUNHLE1BQTVDLEVBQW1ELEtBQUs2RCxhQUF4RCxDQUFWLENBQWQ7QUFBZ0csVUFBTStTLFNBQVMsR0FBQ3pJLFNBQVMsQ0FBQ0MsV0FBVyxDQUFDM1AsRUFBRCxDQUFYLEdBQWdCNFAsV0FBVyxDQUFDNVAsRUFBRCxDQUEzQixHQUFnQ0EsRUFBakMsRUFBb0MsS0FBS3VCLE1BQXpDLENBQXpCO0FBQTBFLFNBQUswVSxjQUFMLEdBQW9CalcsRUFBcEIsQ0FkekwsQ0FjZ047QUFDelg7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsUUFBRyxDQUFDb0IsT0FBTyxDQUFDdVcsRUFBVCxJQUFhLEtBQUtTLGVBQUwsQ0FBcUJELFNBQXJCLENBQWhCLEVBQWdEO0FBQUMsV0FBS3BGLE1BQUwsR0FBWW9GLFNBQVo7QUFBc0J0RCxZQUFNLENBQUMzSSxNQUFQLENBQWNzRCxJQUFkLENBQW1CLGlCQUFuQixFQUFxQ3hQLEVBQXJDLEVBQXdDaVksVUFBeEMsRUFBdkIsQ0FBMkU7O0FBQzNILFdBQUszQixXQUFMLENBQWlCbUIsTUFBakIsRUFBd0JyRyxHQUF4QixFQUE0QnBSLEVBQTVCLEVBQStCb0IsT0FBL0I7QUFBd0MsV0FBS2lYLFlBQUwsQ0FBa0JGLFNBQWxCO0FBQTZCLFdBQUtHLE1BQUwsQ0FBWSxLQUFLNWxCLFVBQUwsQ0FBZ0IsS0FBSzRXLEtBQXJCLENBQVosRUFBd0MsSUFBeEM7QUFBOEN1TCxZQUFNLENBQUMzSSxNQUFQLENBQWNzRCxJQUFkLENBQW1CLG9CQUFuQixFQUF3Q3hQLEVBQXhDLEVBQTJDaVksVUFBM0M7QUFBdUQsYUFBTyxJQUFQO0FBQWE7O0FBQUEsUUFBSU0sTUFBTSxHQUFDLENBQUMsR0FBRWxJLGlCQUFpQixDQUFDc0csZ0JBQXJCLEVBQXVDdkYsR0FBdkMsQ0FBWDtBQUF1RCxRQUFHO0FBQUN0QyxjQUFEO0FBQVU0QztBQUFWLFFBQWlCNkcsTUFBcEIsQ0FwQnJFLENBb0JnRztBQUN6UTtBQUNBOztBQUNBLFFBQUkxRSxLQUFKLEVBQVUyRSxRQUFWOztBQUFtQixRQUFHO0FBQUMzRSxXQUFLLEdBQUMsTUFBTSxLQUFLc0IsVUFBTCxDQUFnQnNELFdBQWhCLEVBQVo7QUFBMEMsT0FBQztBQUFDQyxrQkFBVSxFQUFDRjtBQUFaLFVBQXNCLE1BQUssQ0FBQyxHQUFFekksWUFBWSxDQUFDdEosc0JBQWhCLEdBQTVCO0FBQXdFLEtBQXRILENBQXNILE9BQU0vRixHQUFOLEVBQVU7QUFBQztBQUNwSjtBQUNBOEcsWUFBTSxDQUFDNFAsUUFBUCxDQUFnQm5YLElBQWhCLEdBQXFCRCxFQUFyQjtBQUF3QixhQUFPLEtBQVA7QUFBYyxLQXpCbUksQ0F5Qm5JO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxRQUFHLENBQUMsS0FBSzJZLFFBQUwsQ0FBY1IsU0FBZCxDQUFELElBQTJCLENBQUNOLFlBQS9CLEVBQTRDO0FBQUNKLFlBQU0sR0FBQyxjQUFQO0FBQXVCLEtBOUJxRyxDQThCckc7QUFDcEU7OztBQUNBLFFBQUk1VCxVQUFVLEdBQUM3RCxFQUFmLENBaEN5SyxDQWdDdko7QUFDbEI7QUFDQTs7QUFDQThPLFlBQVEsR0FBQ0EsUUFBUSxHQUFDLENBQUMsR0FBRWdCLHVCQUF1QixDQUFDdkssdUJBQTNCLEVBQW9EcUssV0FBVyxDQUFDZCxRQUFELENBQS9ELENBQUQsR0FBNEVBLFFBQTdGOztBQUFzRyxRQUFHNEksaUJBQWlCLElBQUU1SSxRQUFRLEtBQUcsU0FBakMsRUFBMkM7QUFBQztBQUFDMU4sYUFBTyxDQUFDd1csa0JBQVIsR0FBMkIsSUFBM0I7O0FBQWdDLFVBQUd4ZSxLQUFILEVBQXVELEVBQXZELE1BRXREO0FBQUNtZixjQUFNLENBQUN6SixRQUFQLEdBQWdCOEUsbUJBQW1CLENBQUM5RSxRQUFELEVBQVUrRSxLQUFWLENBQW5DOztBQUFvRCxZQUFHMEUsTUFBTSxDQUFDekosUUFBUCxLQUFrQkEsUUFBckIsRUFBOEI7QUFBQ0Esa0JBQVEsR0FBQ3lKLE1BQU0sQ0FBQ3pKLFFBQWhCO0FBQXlCeUosZ0JBQU0sQ0FBQ3pKLFFBQVAsR0FBZ0I1SixXQUFXLENBQUM0SixRQUFELENBQTNCO0FBQXNDc0MsYUFBRyxHQUFDLENBQUMsR0FBRWpCLE1BQU0sQ0FBQzJDLG9CQUFWLEVBQWdDeUYsTUFBaEMsQ0FBSjtBQUE2QztBQUFDO0FBQUM7O0FBQUEsVUFBTWpQLEtBQUssR0FBQyxDQUFDLEdBQUV3Ryx1QkFBdUIsQ0FBQ3ZLLHVCQUEzQixFQUFvRHVKLFFBQXBELENBQVo7O0FBQTBFLFFBQUcsQ0FBQ3pOLFVBQVUsQ0FBQ3JCLEVBQUQsQ0FBZCxFQUFtQjtBQUFDLGdCQUF1QztBQUFDLGNBQU0sSUFBSTNFLEtBQUosQ0FBVyxrQkFBaUIrVixHQUFJLGNBQWFwUixFQUFHLDJDQUF0QyxHQUFrRixvRkFBNUYsQ0FBTjtBQUF3TDs7QUFBQXdILFlBQU0sQ0FBQzRQLFFBQVAsQ0FBZ0JuWCxJQUFoQixHQUFxQkQsRUFBckI7QUFBd0IsYUFBTyxLQUFQO0FBQWM7O0FBQUE2RCxjQUFVLEdBQUM2TCxTQUFTLENBQUNFLFdBQVcsQ0FBQy9MLFVBQUQsQ0FBWixFQUF5QixLQUFLdEMsTUFBOUIsQ0FBcEI7O0FBQTBELFFBQUcsQ0FBQyxHQUFFNk8sVUFBVSxDQUFDOEMsY0FBZCxFQUE4QjVKLEtBQTlCLENBQUgsRUFBd0M7QUFBQyxZQUFNc1AsUUFBUSxHQUFDLENBQUMsR0FBRXZJLGlCQUFpQixDQUFDc0csZ0JBQXJCLEVBQXVDOVMsVUFBdkMsQ0FBZjtBQUFrRSxZQUFNNE4sVUFBVSxHQUFDbUgsUUFBUSxDQUFDOUosUUFBMUI7QUFBbUMsWUFBTStKLFVBQVUsR0FBQyxDQUFDLEdBQUVwSSxXQUFXLENBQUNvQixhQUFmLEVBQThCdkksS0FBOUIsQ0FBakI7QUFBc0QsWUFBTXdQLFVBQVUsR0FBQyxDQUFDLEdBQUV0SSxhQUFhLENBQUN5QixlQUFqQixFQUFrQzRHLFVBQWxDLEVBQThDcEgsVUFBOUMsQ0FBakI7QUFBMkUsWUFBTXNILGlCQUFpQixHQUFDelAsS0FBSyxLQUFHbUksVUFBaEM7QUFBMkMsWUFBTXdCLGNBQWMsR0FBQzhGLGlCQUFpQixHQUFDbEosYUFBYSxDQUFDdkcsS0FBRCxFQUFPbUksVUFBUCxFQUFrQkMsS0FBbEIsQ0FBZCxHQUF1QyxFQUE3RTs7QUFBZ0YsVUFBRyxDQUFDb0gsVUFBRCxJQUFhQyxpQkFBaUIsSUFBRSxDQUFDOUYsY0FBYyxDQUFDVCxNQUFuRCxFQUEwRDtBQUFDLGNBQU13RyxhQUFhLEdBQUNwcUIsTUFBTSxDQUFDb1UsSUFBUCxDQUFZNlYsVUFBVSxDQUFDOUcsTUFBdkIsRUFBK0JoakIsTUFBL0IsQ0FBc0NvakIsS0FBSyxJQUFFLENBQUNULEtBQUssQ0FBQ1MsS0FBRCxDQUFuRCxDQUFwQjs7QUFBZ0YsWUFBRzZHLGFBQWEsQ0FBQ2hmLE1BQWQsR0FBcUIsQ0FBeEIsRUFBMEI7QUFBQyxvQkFBdUM7QUFBQ3VELG1CQUFPLENBQUNDLElBQVIsQ0FBYyxHQUFFdWIsaUJBQWlCLEdBQUUsb0JBQUYsR0FBdUIsaUNBQWlDLDhCQUE1RSxHQUEyRyxlQUFjQyxhQUFhLENBQUNsZSxJQUFkLENBQW1CLElBQW5CLENBQXlCLDhCQUEvSjtBQUErTDs7QUFBQSxnQkFBTSxJQUFJTyxLQUFKLENBQVUsQ0FBQzBkLGlCQUFpQixHQUFFLDBCQUF5QjNILEdBQUksb0NBQW1DNEgsYUFBYSxDQUFDbGUsSUFBZCxDQUFtQixJQUFuQixDQUF5QixpQ0FBM0YsR0FBNkgsOEJBQTZCMlcsVUFBVyw4Q0FBNkNuSSxLQUFNLEtBQTFPLElBQWlQLCtDQUE4Q3lQLGlCQUFpQixHQUFDLDJCQUFELEdBQTZCLHNCQUF1QixFQUE5VyxDQUFOO0FBQXdYO0FBQUMsT0FBdHdCLE1BQTJ3QixJQUFHQSxpQkFBSCxFQUFxQjtBQUFDL1ksVUFBRSxHQUFDLENBQUMsR0FBRW1RLE1BQU0sQ0FBQzJDLG9CQUFWLEVBQWdDbGtCLE1BQU0sQ0FBQ2dSLE1BQVAsQ0FBYyxFQUFkLEVBQWlCZ1osUUFBakIsRUFBMEI7QUFBQzlKLGtCQUFRLEVBQUNtRSxjQUFjLENBQUNULE1BQXpCO0FBQWdDZCxlQUFLLEVBQUNlLGtCQUFrQixDQUFDZixLQUFELEVBQU91QixjQUFjLENBQUM1UyxNQUF0QjtBQUF4RCxTQUExQixDQUFoQyxDQUFIO0FBQXVKLE9BQTdLLE1BQWlMO0FBQUM7QUFDcGlFelIsY0FBTSxDQUFDZ1IsTUFBUCxDQUFjOFIsS0FBZCxFQUFvQm9ILFVBQXBCO0FBQWlDO0FBQUM7O0FBQUFqRSxVQUFNLENBQUMzSSxNQUFQLENBQWNzRCxJQUFkLENBQW1CLGtCQUFuQixFQUFzQ3hQLEVBQXRDLEVBQXlDaVksVUFBekM7O0FBQXFELFFBQUc7QUFBQyxVQUFJZ0IscUJBQUosRUFBMEJDLHNCQUExQixFQUFpREMsZUFBakQ7O0FBQWlFLFVBQUlDLFNBQVMsR0FBQyxNQUFNLEtBQUtDLFlBQUwsQ0FBa0IvUCxLQUFsQixFQUF3QndGLFFBQXhCLEVBQWlDNEMsS0FBakMsRUFBdUMxUixFQUF2QyxFQUEwQzZELFVBQTFDLEVBQXFEb1UsVUFBckQsQ0FBcEI7QUFBcUYsVUFBRztBQUFDdFgsYUFBRDtBQUFPM1YsYUFBUDtBQUFhNnJCLGVBQWI7QUFBcUJDO0FBQXJCLFVBQThCc0MsU0FBakMsQ0FBdkosQ0FBa007O0FBQzVSLFVBQUcsQ0FBQ3ZDLE9BQU8sSUFBRUMsT0FBVixLQUFvQjlyQixLQUF2QixFQUE2QjtBQUFDLFlBQUdBLEtBQUssQ0FBQ3N1QixTQUFOLElBQWlCdHVCLEtBQUssQ0FBQ3N1QixTQUFOLENBQWdCQyxZQUFwQyxFQUFpRDtBQUFDLGdCQUFNQyxXQUFXLEdBQUN4dUIsS0FBSyxDQUFDc3VCLFNBQU4sQ0FBZ0JDLFlBQWxDLENBQUQsQ0FBZ0Q7QUFDL0g7QUFDQTs7QUFDQSxjQUFHQyxXQUFXLENBQUM3ZCxVQUFaLENBQXVCLEdBQXZCLENBQUgsRUFBK0I7QUFBQyxrQkFBTThkLFVBQVUsR0FBQyxDQUFDLEdBQUVwSixpQkFBaUIsQ0FBQ3NHLGdCQUFyQixFQUF1QzZDLFdBQXZDLENBQWpCO0FBQXFFQyxzQkFBVSxDQUFDM0ssUUFBWCxHQUFvQjhFLG1CQUFtQixDQUFDNkYsVUFBVSxDQUFDM0ssUUFBWixFQUFxQitFLEtBQXJCLENBQXZDOztBQUFtRSxnQkFBR0EsS0FBSyxDQUFDaG1CLFFBQU4sQ0FBZTRyQixVQUFVLENBQUMzSyxRQUExQixDQUFILEVBQXVDO0FBQUMsb0JBQUs7QUFBQ3NDLG1CQUFHLEVBQUNzSSxNQUFMO0FBQVkxWixrQkFBRSxFQUFDMlo7QUFBZixrQkFBc0JwRyxZQUFZLENBQUMsSUFBRCxFQUFNaUcsV0FBTixFQUFrQkEsV0FBbEIsQ0FBdkM7QUFBc0UscUJBQU8sS0FBSzVDLE1BQUwsQ0FBWWEsTUFBWixFQUFtQmlDLE1BQW5CLEVBQTBCQyxLQUExQixFQUFnQ3ZZLE9BQWhDLENBQVA7QUFBaUQ7QUFBQzs7QUFBQW9HLGdCQUFNLENBQUM0UCxRQUFQLENBQWdCblgsSUFBaEIsR0FBcUJ1WixXQUFyQjtBQUFpQyxpQkFBTyxJQUFJM2QsT0FBSixDQUFZLE1BQUksQ0FBRSxDQUFsQixDQUFQO0FBQTRCOztBQUFBLGFBQUs0WixTQUFMLEdBQWUsQ0FBQyxDQUFDenFCLEtBQUssQ0FBQzR1QixXQUF2QixDQUh4VyxDQUcyWTs7QUFDeGEsWUFBRzV1QixLQUFLLENBQUN5cEIsUUFBTixLQUFpQk4sa0JBQXBCLEVBQXVDO0FBQUMsY0FBSTBGLGFBQUo7O0FBQWtCLGNBQUc7QUFBQyxrQkFBTSxLQUFLQyxjQUFMLENBQW9CLE1BQXBCLENBQU47QUFBa0NELHlCQUFhLEdBQUMsTUFBZDtBQUFzQixXQUE1RCxDQUE0RCxPQUFNM1csQ0FBTixFQUFRO0FBQUMyVyx5QkFBYSxHQUFDLFNBQWQ7QUFBeUI7O0FBQUFULG1CQUFTLEdBQUMsTUFBTSxLQUFLQyxZQUFMLENBQWtCUSxhQUFsQixFQUFnQ0EsYUFBaEMsRUFBOENuSSxLQUE5QyxFQUFvRDFSLEVBQXBELEVBQXVENkQsVUFBdkQsRUFBa0U7QUFBQ3hCLG1CQUFPLEVBQUM7QUFBVCxXQUFsRSxDQUFoQjtBQUFvRztBQUFDOztBQUFBd1MsWUFBTSxDQUFDM0ksTUFBUCxDQUFjc0QsSUFBZCxDQUFtQixxQkFBbkIsRUFBeUN4UCxFQUF6QyxFQUE0Q2lZLFVBQTVDO0FBQXdELFdBQUszQixXQUFMLENBQWlCbUIsTUFBakIsRUFBd0JyRyxHQUF4QixFQUE0QnBSLEVBQTVCLEVBQStCb0IsT0FBL0I7O0FBQXdDLGdCQUF1QztBQUFDLGNBQU0yWSxPQUFPLEdBQUMsS0FBS3JuQixVQUFMLENBQWdCLE9BQWhCLEVBQXlCNGlCLFNBQXZDO0FBQWlEOU4sY0FBTSxDQUFDd1MsSUFBUCxDQUFZQyxhQUFaLEdBQTBCRixPQUFPLENBQUNyTCxlQUFSLEtBQTBCcUwsT0FBTyxDQUFDcEwsbUJBQWxDLElBQXVELENBQUN5SyxTQUFTLENBQUM5RCxTQUFWLENBQW9CNUcsZUFBdEc7QUFBdUg7O0FBQUEsVUFBR3ROLE9BQU8sQ0FBQ3VXLEVBQVIsSUFBWTdJLFFBQVEsS0FBRyxTQUF2QixJQUFrQyxDQUFDLENBQUNtSyxxQkFBcUIsR0FBQ3RULElBQUksQ0FBQ3FSLGFBQUwsQ0FBbUJoc0IsS0FBMUMsS0FBa0QsSUFBbEQsR0FBdUQsS0FBSyxDQUE1RCxHQUE4RCxDQUFDa3VCLHNCQUFzQixHQUFDRCxxQkFBcUIsQ0FBQ0ssU0FBOUMsS0FBMEQsSUFBMUQsR0FBK0QsS0FBSyxDQUFwRSxHQUFzRUosc0JBQXNCLENBQUNnQixVQUE1SixNQUEwSyxHQUE1TSxJQUFpTmx2QixLQUFLLElBQUUsSUFBeE4sSUFBOE5BLEtBQUssQ0FBQ3N1QixTQUF2TyxFQUFpUDtBQUFDO0FBQy94QjtBQUNBdHVCLGFBQUssQ0FBQ3N1QixTQUFOLENBQWdCWSxVQUFoQixHQUEyQixHQUEzQjtBQUFnQyxPQVAwRCxDQU8xRDs7O0FBQ2hDLFlBQU1DLG1CQUFtQixHQUFDL1ksT0FBTyxDQUFDaUIsT0FBUixJQUFpQixLQUFLaUgsS0FBTCxLQUFhQSxLQUF4RDtBQUE4RCxZQUFNOFEsWUFBWSxHQUFDLENBQUNqQixlQUFlLEdBQUMvWCxPQUFPLENBQUNrQixNQUF6QixLQUFrQyxJQUFsQyxHQUF1QzZXLGVBQXZDLEdBQXVELENBQUNnQixtQkFBM0U7QUFBK0YsWUFBTUUsV0FBVyxHQUFDRCxZQUFZLEdBQUM7QUFBQ2xzQixTQUFDLEVBQUMsQ0FBSDtBQUFLMUIsU0FBQyxFQUFDO0FBQVAsT0FBRCxHQUFXLElBQXpDO0FBQThDLFlBQU0sS0FBSzJhLEdBQUwsQ0FBU21DLEtBQVQsRUFBZXdGLFFBQWYsRUFBd0I0QyxLQUF4QixFQUE4QnlHLFNBQTlCLEVBQXdDaUIsU0FBeEMsRUFBa0QzQyxZQUFZLElBQUUsSUFBZCxHQUFtQkEsWUFBbkIsR0FBZ0M0RCxXQUFsRixFQUErRnRlLEtBQS9GLENBQXFHb0csQ0FBQyxJQUFFO0FBQUMsWUFBR0EsQ0FBQyxDQUFDNEcsU0FBTCxFQUFlcEksS0FBSyxHQUFDQSxLQUFLLElBQUV3QixDQUFiLENBQWYsS0FBbUMsTUFBTUEsQ0FBTjtBQUFTLE9BQXJKLENBQU47O0FBQTZKLFVBQUd4QixLQUFILEVBQVM7QUFBQ2tVLGNBQU0sQ0FBQzNJLE1BQVAsQ0FBY3NELElBQWQsQ0FBbUIsa0JBQW5CLEVBQXNDN08sS0FBdEMsRUFBNEN3WCxTQUE1QyxFQUFzREYsVUFBdEQ7QUFBa0UsY0FBTXRYLEtBQU47QUFBYTs7QUFBQSxVQUFHdkgsS0FBSCxFQUFtQyxFQUE2RDs7QUFBQXliLFlBQU0sQ0FBQzNJLE1BQVAsQ0FBY3NELElBQWQsQ0FBbUIscUJBQW5CLEVBQXlDeFAsRUFBekMsRUFBNENpWSxVQUE1QztBQUF3RCxhQUFPLElBQVA7QUFBYSxLQVIvZ0IsQ0FRK2dCLE9BQU12WCxHQUFOLEVBQVU7QUFBQyxVQUFHQSxHQUFHLENBQUNxSSxTQUFQLEVBQWlCO0FBQUMsZUFBTyxLQUFQO0FBQWM7O0FBQUEsWUFBTXJJLEdBQU47QUFBVztBQUFDOztBQUFBNFYsYUFBVyxDQUFDbUIsTUFBRCxFQUFRckcsR0FBUixFQUFZcFIsRUFBWixFQUFlb0IsT0FBTyxHQUFDLEVBQXZCLEVBQTBCO0FBQUMsY0FBdUM7QUFBQyxVQUFHLE9BQU9vRyxNQUFNLENBQUNnUSxPQUFkLEtBQXdCLFdBQTNCLEVBQXVDO0FBQUNqYSxlQUFPLENBQUNvRCxLQUFSLENBQWUsMkNBQWY7QUFBMkQ7QUFBUTs7QUFBQSxVQUFHLE9BQU82RyxNQUFNLENBQUNnUSxPQUFQLENBQWVDLE1BQWYsQ0FBUCxLQUFnQyxXQUFuQyxFQUErQztBQUFDbGEsZUFBTyxDQUFDb0QsS0FBUixDQUFlLDJCQUEwQjhXLE1BQU8sbUJBQWhEO0FBQW9FO0FBQVE7QUFBQzs7QUFBQSxRQUFHQSxNQUFNLEtBQUcsV0FBVCxJQUFzQixDQUFDLEdBQUV0SCxNQUFNLENBQUNvRyxNQUFWLFFBQXNCdlcsRUFBL0MsRUFBa0Q7QUFBQyxXQUFLa1csUUFBTCxHQUFjOVUsT0FBTyxDQUFDaUIsT0FBdEI7QUFBOEJtRixZQUFNLENBQUNnUSxPQUFQLENBQWVDLE1BQWYsRUFBdUI7QUFBQ3JHLFdBQUQ7QUFBS3BSLFVBQUw7QUFBUW9CLGVBQVI7QUFBZ0JvVixXQUFHLEVBQUMsSUFBcEI7QUFBeUJFLFdBQUcsRUFBQyxLQUFLTixJQUFMLEdBQVVxQixNQUFNLEtBQUcsV0FBVCxHQUFxQixLQUFLckIsSUFBMUIsR0FBK0IsS0FBS0EsSUFBTCxHQUFVO0FBQWhGLE9BQXZCLEVBQTBHO0FBQzlvQztBQUNBO0FBQ0EsUUFIb2lDLEVBR2ppQ3BXLEVBSGlpQztBQUc1aEM7QUFBQzs7QUFBQSxRQUFNc2Esb0JBQU4sQ0FBMkI1WixHQUEzQixFQUErQm9PLFFBQS9CLEVBQXdDNEMsS0FBeEMsRUFBOEMxUixFQUE5QyxFQUFpRGlZLFVBQWpELEVBQTREc0MsYUFBNUQsRUFBMEU7QUFBQyxRQUFHN1osR0FBRyxDQUFDcUksU0FBUCxFQUFpQjtBQUFDO0FBQ3RHLFlBQU1ySSxHQUFOO0FBQVc7O0FBQUEsUUFBRyxDQUFDLEdBQUVxUCxZQUFZLENBQUN2SixZQUFoQixFQUE4QjlGLEdBQTlCLEtBQW9DNlosYUFBdkMsRUFBcUQ7QUFBQzFGLFlBQU0sQ0FBQzNJLE1BQVAsQ0FBY3NELElBQWQsQ0FBbUIsa0JBQW5CLEVBQXNDOU8sR0FBdEMsRUFBMENWLEVBQTFDLEVBQTZDaVksVUFBN0MsRUFBRCxDQUEwRDtBQUMxSDtBQUNBO0FBQ0E7QUFDQTs7QUFDQXpRLFlBQU0sQ0FBQzRQLFFBQVAsQ0FBZ0JuWCxJQUFoQixHQUFxQkQsRUFBckIsQ0FMZ0UsQ0FLeEM7QUFDeEI7O0FBQ0EsWUFBTThRLHNCQUFzQixFQUE1QjtBQUFnQzs7QUFBQSxRQUFHO0FBQUMsVUFBSXdFLFNBQUo7QUFBYyxVQUFJdEwsV0FBSjtBQUFnQixVQUFJaGYsS0FBSjs7QUFBVSxVQUFHLE9BQU9zcUIsU0FBUCxLQUFtQixXQUFuQixJQUFnQyxPQUFPdEwsV0FBUCxLQUFxQixXQUF4RCxFQUFvRTtBQUFDO0FBQUMsU0FBQztBQUFDZ0ssY0FBSSxFQUFDc0IsU0FBTjtBQUFnQnRMO0FBQWhCLFlBQTZCLE1BQU0sS0FBSzhQLGNBQUwsQ0FBb0IsU0FBcEIsQ0FBcEM7QUFBcUU7O0FBQUEsWUFBTVYsU0FBUyxHQUFDO0FBQUNwdUIsYUFBRDtBQUFPc3FCLGlCQUFQO0FBQWlCdEwsbUJBQWpCO0FBQTZCdEosV0FBN0I7QUFBaUNDLGFBQUssRUFBQ0Q7QUFBdkMsT0FBaEI7O0FBQTRELFVBQUcsQ0FBQzBZLFNBQVMsQ0FBQ3B1QixLQUFkLEVBQW9CO0FBQUMsWUFBRztBQUFDb3VCLG1CQUFTLENBQUNwdUIsS0FBVixHQUFnQixNQUFNLEtBQUswakIsZUFBTCxDQUFxQjRHLFNBQXJCLEVBQStCO0FBQUM1VSxlQUFEO0FBQUtvTyxvQkFBTDtBQUFjNEM7QUFBZCxXQUEvQixDQUF0QjtBQUE0RSxTQUFoRixDQUFnRixPQUFNOEksTUFBTixFQUFhO0FBQUNqZCxpQkFBTyxDQUFDb0QsS0FBUixDQUFjLHlDQUFkLEVBQXdENlosTUFBeEQ7QUFBZ0VwQixtQkFBUyxDQUFDcHVCLEtBQVYsR0FBZ0IsRUFBaEI7QUFBb0I7QUFBQzs7QUFBQSxhQUFPb3VCLFNBQVA7QUFBa0IsS0FBN2MsQ0FBNmMsT0FBTXFCLFlBQU4sRUFBbUI7QUFBQyxhQUFPLEtBQUtILG9CQUFMLENBQTBCRyxZQUExQixFQUF1QzNMLFFBQXZDLEVBQWdENEMsS0FBaEQsRUFBc0QxUixFQUF0RCxFQUF5RGlZLFVBQXpELEVBQW9FLElBQXBFLENBQVA7QUFBa0Y7QUFBQzs7QUFBQSxRQUFNb0IsWUFBTixDQUFtQi9QLEtBQW5CLEVBQXlCd0YsUUFBekIsRUFBa0M0QyxLQUFsQyxFQUF3QzFSLEVBQXhDLEVBQTJDNkQsVUFBM0MsRUFBc0RvVSxVQUF0RCxFQUFpRTtBQUFDLFFBQUc7QUFBQyxZQUFNeUMsaUJBQWlCLEdBQUMsS0FBS2hvQixVQUFMLENBQWdCNFcsS0FBaEIsQ0FBeEI7O0FBQStDLFVBQUcyTyxVQUFVLENBQUM1VixPQUFYLElBQW9CcVksaUJBQXBCLElBQXVDLEtBQUtwUixLQUFMLEtBQWFBLEtBQXZELEVBQTZEO0FBQUMsZUFBT29SLGlCQUFQO0FBQTBCOztBQUFBLFlBQU1DLGVBQWUsR0FBQ0QsaUJBQWlCLElBQUUsYUFBWUEsaUJBQS9CLEdBQWlEN2lCLFNBQWpELEdBQTJENmlCLGlCQUFqRjtBQUFtRyxZQUFNdEIsU0FBUyxHQUFDdUIsZUFBZSxHQUFDQSxlQUFELEdBQWlCLE1BQU0sS0FBS2IsY0FBTCxDQUFvQnhRLEtBQXBCLEVBQTJCdE4sSUFBM0IsQ0FBZ0NnTSxHQUFHLEtBQUc7QUFBQ3NOLGlCQUFTLEVBQUN0TixHQUFHLENBQUNnTSxJQUFmO0FBQW9CaEssbUJBQVcsRUFBQ2hDLEdBQUcsQ0FBQ2dDLFdBQXBDO0FBQWdENk0sZUFBTyxFQUFDN08sR0FBRyxDQUFDNFMsR0FBSixDQUFRL0QsT0FBaEU7QUFBd0VDLGVBQU8sRUFBQzlPLEdBQUcsQ0FBQzRTLEdBQUosQ0FBUTlEO0FBQXhGLE9BQUgsQ0FBbkMsQ0FBdEQ7QUFBK0wsWUFBSztBQUFDeEIsaUJBQUQ7QUFBV3VCLGVBQVg7QUFBbUJDO0FBQW5CLFVBQTRCc0MsU0FBakM7O0FBQTJDLGdCQUF1QztBQUFDLGNBQUs7QUFBQ3lCO0FBQUQsWUFBcUI1akIsbUJBQU8sQ0FBQyxvRUFBRCxDQUFqQzs7QUFBOEMsWUFBRyxDQUFDNGpCLGtCQUFrQixDQUFDdkYsU0FBRCxDQUF0QixFQUFrQztBQUFDLGdCQUFNLElBQUlqYSxLQUFKLENBQVcseURBQXdEeVQsUUFBUyxHQUE1RSxDQUFOO0FBQXVGO0FBQUM7O0FBQUEsVUFBSTZGLFFBQUo7O0FBQWEsVUFBR2tDLE9BQU8sSUFBRUMsT0FBWixFQUFvQjtBQUFDbkMsZ0JBQVEsR0FBQyxLQUFLUSxVQUFMLENBQWdCMkYsV0FBaEIsQ0FBNEIsQ0FBQyxHQUFFM0ssTUFBTSxDQUFDMkMsb0JBQVYsRUFBZ0M7QUFBQ2hFLGtCQUFEO0FBQVU0QztBQUFWLFNBQWhDLENBQTVCLEVBQThFN04sVUFBOUUsRUFBeUZnVCxPQUF6RixFQUFpRyxLQUFLdFYsTUFBdEcsQ0FBVDtBQUF3SDs7QUFBQSxZQUFNdlcsS0FBSyxHQUFDLE1BQU0sS0FBSyt2QixRQUFMLENBQWMsTUFBSWxFLE9BQU8sR0FBQyxLQUFLbUUsY0FBTCxDQUFvQnJHLFFBQXBCLENBQUQsR0FBK0JtQyxPQUFPLEdBQUMsS0FBS21FLGNBQUwsQ0FBb0J0RyxRQUFwQixDQUFELEdBQStCLEtBQUtqRyxlQUFMLENBQXFCNEcsU0FBckIsRUFBK0I7QUFDeG1EO0FBQUN4RyxnQkFBRDtBQUFVNEMsYUFBVjtBQUFnQnFCLGNBQU0sRUFBQy9TLEVBQXZCO0FBQTBCdUIsY0FBTSxFQUFDLEtBQUtBLE1BQXRDO0FBQTZDeUQsZUFBTyxFQUFDLEtBQUtBLE9BQTFEO0FBQWtFSSxxQkFBYSxFQUFDLEtBQUtBO0FBQXJGLE9BRHlrRCxDQUE5RixDQUFsQjtBQUNuM0NnVSxlQUFTLENBQUNwdUIsS0FBVixHQUFnQkEsS0FBaEI7QUFBc0IsV0FBSzBILFVBQUwsQ0FBZ0I0VyxLQUFoQixJQUF1QjhQLFNBQXZCO0FBQWlDLGFBQU9BLFNBQVA7QUFBa0IsS0FEdWUsQ0FDdmUsT0FBTTFZLEdBQU4sRUFBVTtBQUFDLGFBQU8sS0FBSzRaLG9CQUFMLENBQTBCNVosR0FBMUIsRUFBOEJvTyxRQUE5QixFQUF1QzRDLEtBQXZDLEVBQTZDMVIsRUFBN0MsRUFBZ0RpWSxVQUFoRCxDQUFQO0FBQW9FO0FBQUM7O0FBQUE5USxLQUFHLENBQUNtQyxLQUFELEVBQU93RixRQUFQLEVBQWdCNEMsS0FBaEIsRUFBc0IxUixFQUF0QixFQUF5QndVLElBQXpCLEVBQThCNkYsV0FBOUIsRUFBMEM7QUFBQyxTQUFLN0UsVUFBTCxHQUFnQixLQUFoQjtBQUFzQixTQUFLbE0sS0FBTCxHQUFXQSxLQUFYO0FBQWlCLFNBQUt3RixRQUFMLEdBQWNBLFFBQWQ7QUFBdUIsU0FBSzRDLEtBQUwsR0FBV0EsS0FBWDtBQUFpQixTQUFLcUIsTUFBTCxHQUFZL1MsRUFBWjtBQUFlLFdBQU8sS0FBS3NZLE1BQUwsQ0FBWTlELElBQVosRUFBaUI2RixXQUFqQixDQUFQO0FBQXNDO0FBQUE7QUFDamI7QUFDQTtBQUNBOzs7QUFBS2EsZ0JBQWMsQ0FBQ3RWLEVBQUQsRUFBSTtBQUFDLFNBQUtrUSxJQUFMLEdBQVVsUSxFQUFWO0FBQWM7O0FBQUF3UyxpQkFBZSxDQUFDcFksRUFBRCxFQUFJO0FBQUMsUUFBRyxDQUFDLEtBQUsrUyxNQUFULEVBQWdCLE9BQU8sS0FBUDtBQUFhLFVBQUssQ0FBQ29JLFlBQUQsRUFBY0MsT0FBZCxJQUF1QixLQUFLckksTUFBTCxDQUFZOUQsS0FBWixDQUFrQixHQUFsQixDQUE1QjtBQUFtRCxVQUFLLENBQUNvTSxZQUFELEVBQWNDLE9BQWQsSUFBdUJ0YixFQUFFLENBQUNpUCxLQUFILENBQVMsR0FBVCxDQUE1QixDQUFqRixDQUEySDs7QUFDcEwsUUFBR3FNLE9BQU8sSUFBRUgsWUFBWSxLQUFHRSxZQUF4QixJQUFzQ0QsT0FBTyxLQUFHRSxPQUFuRCxFQUEyRDtBQUFDLGFBQU8sSUFBUDtBQUFhLEtBRGhCLENBQ2dCOzs7QUFDekUsUUFBR0gsWUFBWSxLQUFHRSxZQUFsQixFQUErQjtBQUFDLGFBQU8sS0FBUDtBQUFjLEtBRlcsQ0FFWDtBQUM5QztBQUNBO0FBQ0E7OztBQUNBLFdBQU9ELE9BQU8sS0FBR0UsT0FBakI7QUFBMEI7O0FBQUFqRCxjQUFZLENBQUNyWSxFQUFELEVBQUk7QUFBQyxVQUFLLEdBQUVxVCxJQUFGLElBQVFyVCxFQUFFLENBQUNpUCxLQUFILENBQVMsR0FBVCxDQUFiLENBQUQsQ0FBNEI7QUFDdEU7O0FBQ0EsUUFBR29FLElBQUksS0FBRyxFQUFQLElBQVdBLElBQUksS0FBRyxLQUFyQixFQUEyQjtBQUFDN0wsWUFBTSxDQUFDK1QsUUFBUCxDQUFnQixDQUFoQixFQUFrQixDQUFsQjtBQUFxQjtBQUFRLEtBRmYsQ0FFZTs7O0FBQ3pELFVBQU1DLElBQUksR0FBQ2pVLFFBQVEsQ0FBQ2tVLGNBQVQsQ0FBd0JwSSxJQUF4QixDQUFYOztBQUF5QyxRQUFHbUksSUFBSCxFQUFRO0FBQUNBLFVBQUksQ0FBQ0UsY0FBTDtBQUFzQjtBQUFRLEtBSHRDLENBR3NDO0FBQ2hGOzs7QUFDQSxVQUFNQyxNQUFNLEdBQUNwVSxRQUFRLENBQUNxVSxpQkFBVCxDQUEyQnZJLElBQTNCLEVBQWlDLENBQWpDLENBQWI7O0FBQWlELFFBQUdzSSxNQUFILEVBQVU7QUFBQ0EsWUFBTSxDQUFDRCxjQUFQO0FBQXlCO0FBQUM7O0FBQUEvQyxVQUFRLENBQUM1RixNQUFELEVBQVE7QUFBQyxXQUFPLEtBQUtBLE1BQUwsS0FBY0EsTUFBckI7QUFBNkI7QUFBQTtBQUNwSTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBSyxRQUFNN1IsUUFBTixDQUFla1EsR0FBZixFQUFtQjJCLE1BQU0sR0FBQzNCLEdBQTFCLEVBQThCaFEsT0FBTyxHQUFDLEVBQXRDLEVBQXlDO0FBQUMsUUFBSW1YLE1BQU0sR0FBQyxDQUFDLEdBQUVsSSxpQkFBaUIsQ0FBQ3NHLGdCQUFyQixFQUF1Q3ZGLEdBQXZDLENBQVg7QUFBdUQsUUFBRztBQUFDdEM7QUFBRCxRQUFXeUosTUFBZDs7QUFBcUIsUUFBR25mLEtBQUgsRUFBbUMsRUFBeWY7O0FBQUEsVUFBTXlhLEtBQUssR0FBQyxNQUFNLEtBQUtzQixVQUFMLENBQWdCc0QsV0FBaEIsRUFBbEI7QUFBZ0QsUUFBSTVVLFVBQVUsR0FBQ2tQLE1BQWY7O0FBQXNCLFFBQUczWixLQUFILEVBQTJELEVBQTNELE1BRTdtQjtBQUFDbWYsWUFBTSxDQUFDekosUUFBUCxHQUFnQjhFLG1CQUFtQixDQUFDMkUsTUFBTSxDQUFDekosUUFBUixFQUFpQitFLEtBQWpCLENBQW5DOztBQUEyRCxVQUFHMEUsTUFBTSxDQUFDekosUUFBUCxLQUFrQkEsUUFBckIsRUFBOEI7QUFBQ0EsZ0JBQVEsR0FBQ3lKLE1BQU0sQ0FBQ3pKLFFBQWhCO0FBQXlCeUosY0FBTSxDQUFDekosUUFBUCxHQUFnQkEsUUFBaEI7QUFBeUJzQyxXQUFHLEdBQUMsQ0FBQyxHQUFFakIsTUFBTSxDQUFDMkMsb0JBQVYsRUFBZ0N5RixNQUFoQyxDQUFKO0FBQTZDO0FBQUM7O0FBQUEsVUFBTWpQLEtBQUssR0FBQyxDQUFDLEdBQUV3Ryx1QkFBdUIsQ0FBQ3ZLLHVCQUEzQixFQUFvRHVKLFFBQXBELENBQVosQ0FGN1AsQ0FFdVU7O0FBQ3JYLGNBQXVDO0FBQUM7QUFBUTs7QUFBQSxVQUFNalQsT0FBTyxDQUFDZ0IsR0FBUixDQUFZLENBQUMsS0FBS3NZLFVBQUwsQ0FBZ0IwRyxNQUFoQixDQUF1QnZTLEtBQXZCLEVBQThCdE4sSUFBOUIsQ0FBbUM4ZixLQUFLLElBQUU7QUFBQyxhQUFPQSxLQUFLLEdBQUMsS0FBS2QsY0FBTCxDQUFvQixLQUFLN0YsVUFBTCxDQUFnQjJGLFdBQWhCLENBQTRCMUosR0FBNUIsRUFBZ0N2TixVQUFoQyxFQUEyQyxJQUEzQyxFQUFnRCxPQUFPekMsT0FBTyxDQUFDRyxNQUFmLEtBQXdCLFdBQXhCLEdBQW9DSCxPQUFPLENBQUNHLE1BQTVDLEdBQW1ELEtBQUtBLE1BQXhHLENBQXBCLENBQUQsR0FBc0ksS0FBbEo7QUFBeUosS0FBcE0sQ0FBRCxFQUF1TSxLQUFLNFQsVUFBTCxDQUFnQi9ULE9BQU8sQ0FBQzdFLFFBQVIsR0FBaUIsVUFBakIsR0FBNEIsVUFBNUMsRUFBd0QrTSxLQUF4RCxDQUF2TSxDQUFaLENBQU47QUFBMlI7O0FBQUEsUUFBTXdRLGNBQU4sQ0FBcUJ4USxLQUFyQixFQUEyQjtBQUFDLFFBQUlQLFNBQVMsR0FBQyxLQUFkOztBQUFvQixVQUFNZ1QsTUFBTSxHQUFDLEtBQUtsRyxHQUFMLEdBQVMsTUFBSTtBQUFDOU0sZUFBUyxHQUFDLElBQVY7QUFBZ0IsS0FBM0M7O0FBQTRDLFVBQU1pVCxlQUFlLEdBQUMsTUFBTSxLQUFLN0csVUFBTCxDQUFnQjhHLFFBQWhCLENBQXlCM1MsS0FBekIsQ0FBNUI7O0FBQTRELFFBQUdQLFNBQUgsRUFBYTtBQUFDLFlBQU1wSSxLQUFLLEdBQUMsSUFBSXRGLEtBQUosQ0FBVyx3Q0FBdUNpTyxLQUFNLEdBQXhELENBQVo7QUFBd0UzSSxXQUFLLENBQUNvSSxTQUFOLEdBQWdCLElBQWhCO0FBQXFCLFlBQU1wSSxLQUFOO0FBQWE7O0FBQUEsUUFBR29iLE1BQU0sS0FBRyxLQUFLbEcsR0FBakIsRUFBcUI7QUFBQyxXQUFLQSxHQUFMLEdBQVMsSUFBVDtBQUFlOztBQUFBLFdBQU9tRyxlQUFQO0FBQXdCOztBQUFBakIsVUFBUSxDQUFDclEsRUFBRCxFQUFJO0FBQUMsUUFBSTNCLFNBQVMsR0FBQyxLQUFkOztBQUFvQixVQUFNZ1QsTUFBTSxHQUFDLE1BQUk7QUFBQ2hULGVBQVMsR0FBQyxJQUFWO0FBQWdCLEtBQWxDOztBQUFtQyxTQUFLOE0sR0FBTCxHQUFTa0csTUFBVDtBQUFnQixXQUFPclIsRUFBRSxHQUFHMU8sSUFBTCxDQUFVd1ksSUFBSSxJQUFFO0FBQUMsVUFBR3VILE1BQU0sS0FBRyxLQUFLbEcsR0FBakIsRUFBcUI7QUFBQyxhQUFLQSxHQUFMLEdBQVMsSUFBVDtBQUFlOztBQUFBLFVBQUc5TSxTQUFILEVBQWE7QUFBQyxjQUFNckksR0FBRyxHQUFDLElBQUlyRixLQUFKLENBQVUsaUNBQVYsQ0FBVjtBQUF1RHFGLFdBQUcsQ0FBQ3FJLFNBQUosR0FBYyxJQUFkO0FBQW1CLGNBQU1ySSxHQUFOO0FBQVc7O0FBQUEsYUFBTzhULElBQVA7QUFBYSxLQUF0SyxDQUFQO0FBQWdMOztBQUFBd0csZ0JBQWMsQ0FBQ3JHLFFBQUQsRUFBVTtBQUFDLFVBQUs7QUFBQzFVLFVBQUksRUFBQ2ljO0FBQU4sUUFBZ0IsSUFBSXpiLEdBQUosQ0FBUWtVLFFBQVIsRUFBaUJuTixNQUFNLENBQUM0UCxRQUFQLENBQWdCblgsSUFBakMsQ0FBckI7O0FBQTRELFFBQUcsS0FBSCxFQUE0RSxFQUE2Qzs7QUFBQSxXQUFPeVUsYUFBYSxDQUFDQyxRQUFELEVBQVUsS0FBS3FCLEtBQWYsQ0FBYixDQUFtQ2hhLElBQW5DLENBQXdDd1ksSUFBSSxJQUFFO0FBQUMsV0FBS2tCLEdBQUwsQ0FBU3dHLFFBQVQsSUFBbUIxSCxJQUFuQjtBQUF3QixhQUFPQSxJQUFQO0FBQWEsS0FBcEYsQ0FBUDtBQUE4Rjs7QUFBQXlHLGdCQUFjLENBQUN0RyxRQUFELEVBQVU7QUFBQyxVQUFLO0FBQUMxVSxVQUFJLEVBQUNrYztBQUFOLFFBQW1CLElBQUkxYixHQUFKLENBQVFrVSxRQUFSLEVBQWlCbk4sTUFBTSxDQUFDNFAsUUFBUCxDQUFnQm5YLElBQWpDLENBQXhCOztBQUErRCxRQUFHLEtBQUswVixHQUFMLENBQVN3RyxXQUFULENBQUgsRUFBeUI7QUFBQyxhQUFPLEtBQUt4RyxHQUFMLENBQVN3RyxXQUFULENBQVA7QUFBOEI7O0FBQUEsV0FBTyxLQUFLeEcsR0FBTCxDQUFTd0csV0FBVCxJQUFzQnpILGFBQWEsQ0FBQ0MsUUFBRCxFQUFVLEtBQUtxQixLQUFmLENBQWIsQ0FBbUNoYSxJQUFuQyxDQUF3Q3dZLElBQUksSUFBRTtBQUFDLGFBQU8sS0FBS21CLEdBQUwsQ0FBU3dHLFdBQVQsQ0FBUDtBQUE2QixhQUFPM0gsSUFBUDtBQUFhLEtBQXpGLEVBQTJGelksS0FBM0YsQ0FBaUcyRSxHQUFHLElBQUU7QUFBQyxhQUFPLEtBQUtpVixHQUFMLENBQVN3RyxXQUFULENBQVA7QUFBNkIsWUFBTXpiLEdBQU47QUFBVyxLQUEvSSxDQUE3QjtBQUErSzs7QUFBQWdPLGlCQUFlLENBQUM0RyxTQUFELEVBQVc4RyxHQUFYLEVBQWU7QUFBQyxVQUFLO0FBQUM5RyxlQUFTLEVBQUNGO0FBQVgsUUFBZ0IsS0FBSzFpQixVQUFMLENBQWdCLE9BQWhCLENBQXJCOztBQUE4QyxVQUFNMnBCLE9BQU8sR0FBQyxLQUFLdEcsUUFBTCxDQUFjWCxHQUFkLENBQWQ7O0FBQWlDZ0gsT0FBRyxDQUFDQyxPQUFKLEdBQVlBLE9BQVo7QUFBb0IsV0FBTSxDQUFDLEdBQUVsTSxNQUFNLENBQUNtTSxtQkFBVixFQUErQmxILEdBQS9CLEVBQW1DO0FBQUNpSCxhQUFEO0FBQVMvRyxlQUFUO0FBQW1CblUsWUFBTSxFQUFDLElBQTFCO0FBQStCaWI7QUFBL0IsS0FBbkMsQ0FBTjtBQUErRTs7QUFBQWxFLG9CQUFrQixDQUFDbFksRUFBRCxFQUFJaVksVUFBSixFQUFlO0FBQUMsUUFBRyxLQUFLcEMsR0FBUixFQUFZO0FBQUNoQixZQUFNLENBQUMzSSxNQUFQLENBQWNzRCxJQUFkLENBQW1CLGtCQUFuQixFQUFzQ3NCLHNCQUFzQixFQUE1RCxFQUErRDlRLEVBQS9ELEVBQWtFaVksVUFBbEU7QUFBOEUsV0FBS3BDLEdBQUw7QUFBVyxXQUFLQSxHQUFMLEdBQVMsSUFBVDtBQUFlO0FBQUM7O0FBQUF5QyxRQUFNLENBQUM5RCxJQUFELEVBQU02RixXQUFOLEVBQWtCO0FBQUMsV0FBTyxLQUFLekUsR0FBTCxDQUFTcEIsSUFBVCxFQUFjLEtBQUs5aEIsVUFBTCxDQUFnQixPQUFoQixFQUF5QjRpQixTQUF2QyxFQUFpRCtFLFdBQWpELENBQVA7QUFBc0U7O0FBbkkzM0Q7O0FBbUk0M0RuakIsZUFBQSxHQUFnQjJkLE1BQWhCO0FBQXVCQSxNQUFNLENBQUMzSSxNQUFQLEdBQWMsQ0FBQyxHQUFFZ0UsS0FBSyxDQUFDM1gsT0FBVCxHQUFkLEM7Ozs7Ozs7Ozs7O0FDaEwxOUQ7O0FBQUFyQixrQkFBQSxHQUFtQixJQUFuQjtBQUF3QkEsaUJBQUEsR0FBa0JxbEIsU0FBbEI7O0FBQTRCLElBQUlDLFdBQVcsR0FBQzFiLHVCQUF1QixDQUFDN0osbUJBQU8sQ0FBQywyRkFBRCxDQUFSLENBQXZDOztBQUFrRSxTQUFTd2xCLHdCQUFULEdBQW1DO0FBQUMsTUFBRyxPQUFPQyxPQUFQLEtBQWlCLFVBQXBCLEVBQStCLE9BQU8sSUFBUDtBQUFZLE1BQUlDLEtBQUssR0FBQyxJQUFJRCxPQUFKLEVBQVY7O0FBQXdCRCwwQkFBd0IsR0FBQyxZQUFVO0FBQUMsV0FBT0UsS0FBUDtBQUFjLEdBQWxEOztBQUFtRCxTQUFPQSxLQUFQO0FBQWM7O0FBQUEsU0FBUzdiLHVCQUFULENBQWlDNFAsR0FBakMsRUFBcUM7QUFBQyxNQUFHQSxHQUFHLElBQUVBLEdBQUcsQ0FBQ0MsVUFBWixFQUF1QjtBQUFDLFdBQU9ELEdBQVA7QUFBWTs7QUFBQSxNQUFHQSxHQUFHLEtBQUcsSUFBTixJQUFZLE9BQU9BLEdBQVAsS0FBYSxRQUFiLElBQXVCLE9BQU9BLEdBQVAsS0FBYSxVQUFuRCxFQUE4RDtBQUFDLFdBQU07QUFBQ25ZLGFBQU8sRUFBQ21ZO0FBQVQsS0FBTjtBQUFxQjs7QUFBQSxNQUFJaU0sS0FBSyxHQUFDRix3QkFBd0IsRUFBbEM7O0FBQXFDLE1BQUdFLEtBQUssSUFBRUEsS0FBSyxDQUFDNVIsR0FBTixDQUFVMkYsR0FBVixDQUFWLEVBQXlCO0FBQUMsV0FBT2lNLEtBQUssQ0FBQ3hoQixHQUFOLENBQVV1VixHQUFWLENBQVA7QUFBdUI7O0FBQUEsTUFBSWtNLE1BQU0sR0FBQyxFQUFYO0FBQWMsTUFBSUMscUJBQXFCLEdBQUNqdUIsTUFBTSxDQUFDNlosY0FBUCxJQUF1QjdaLE1BQU0sQ0FBQ2t1Qix3QkFBeEQ7O0FBQWlGLE9BQUksSUFBSTl0QixHQUFSLElBQWUwaEIsR0FBZixFQUFtQjtBQUFDLFFBQUc5aEIsTUFBTSxDQUFDbXVCLFNBQVAsQ0FBaUJDLGNBQWpCLENBQWdDQyxJQUFoQyxDQUFxQ3ZNLEdBQXJDLEVBQXlDMWhCLEdBQXpDLENBQUgsRUFBaUQ7QUFBQyxVQUFJa3VCLElBQUksR0FBQ0wscUJBQXFCLEdBQUNqdUIsTUFBTSxDQUFDa3VCLHdCQUFQLENBQWdDcE0sR0FBaEMsRUFBb0MxaEIsR0FBcEMsQ0FBRCxHQUEwQyxJQUF4RTs7QUFBNkUsVUFBR2t1QixJQUFJLEtBQUdBLElBQUksQ0FBQy9oQixHQUFMLElBQVUraEIsSUFBSSxDQUFDL1YsR0FBbEIsQ0FBUCxFQUE4QjtBQUFDdlksY0FBTSxDQUFDNlosY0FBUCxDQUFzQm1VLE1BQXRCLEVBQTZCNXRCLEdBQTdCLEVBQWlDa3VCLElBQWpDO0FBQXdDLE9BQXZFLE1BQTJFO0FBQUNOLGNBQU0sQ0FBQzV0QixHQUFELENBQU4sR0FBWTBoQixHQUFHLENBQUMxaEIsR0FBRCxDQUFmO0FBQXNCO0FBQUM7QUFBQzs7QUFBQTR0QixRQUFNLENBQUNya0IsT0FBUCxHQUFlbVksR0FBZjs7QUFBbUIsTUFBR2lNLEtBQUgsRUFBUztBQUFDQSxTQUFLLENBQUN4VixHQUFOLENBQVV1SixHQUFWLEVBQWNrTSxNQUFkO0FBQXVCOztBQUFBLFNBQU9BLE1BQVA7QUFBZSxDLENBQUE7QUFDeDdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLE1BQU1PLGdCQUFnQixHQUFDLHdCQUF2Qjs7QUFBZ0QsU0FBU1osU0FBVCxDQUFtQmEsTUFBbkIsRUFBMEI7QUFBQyxNQUFHO0FBQUNDLFFBQUQ7QUFBTXpjO0FBQU4sTUFBZ0J3YyxNQUFuQjtBQUEwQixNQUFJRSxRQUFRLEdBQUNGLE1BQU0sQ0FBQ0UsUUFBUCxJQUFpQixFQUE5QjtBQUFpQyxNQUFJeE8sUUFBUSxHQUFDc08sTUFBTSxDQUFDdE8sUUFBUCxJQUFpQixFQUE5QjtBQUFpQyxNQUFJdUUsSUFBSSxHQUFDK0osTUFBTSxDQUFDL0osSUFBUCxJQUFhLEVBQXRCO0FBQXlCLE1BQUkzQixLQUFLLEdBQUMwTCxNQUFNLENBQUMxTCxLQUFQLElBQWMsRUFBeEI7QUFBMkIsTUFBSTZMLElBQUksR0FBQyxLQUFUO0FBQWVGLE1BQUksR0FBQ0EsSUFBSSxHQUFDeGMsa0JBQWtCLENBQUN3YyxJQUFELENBQWxCLENBQXlCamIsT0FBekIsQ0FBaUMsTUFBakMsRUFBd0MsR0FBeEMsSUFBNkMsR0FBOUMsR0FBa0QsRUFBM0Q7O0FBQThELE1BQUdnYixNQUFNLENBQUNHLElBQVYsRUFBZTtBQUFDQSxRQUFJLEdBQUNGLElBQUksR0FBQ0QsTUFBTSxDQUFDRyxJQUFqQjtBQUF1QixHQUF2QyxNQUE0QyxJQUFHM2MsUUFBSCxFQUFZO0FBQUMyYyxRQUFJLEdBQUNGLElBQUksSUFBRSxDQUFDemMsUUFBUSxDQUFDNkIsT0FBVCxDQUFpQixHQUFqQixDQUFELEdBQXdCLElBQUc3QixRQUFTLEdBQXBDLEdBQXVDQSxRQUF6QyxDQUFUOztBQUE0RCxRQUFHd2MsTUFBTSxDQUFDSSxJQUFWLEVBQWU7QUFBQ0QsVUFBSSxJQUFFLE1BQUlILE1BQU0sQ0FBQ0ksSUFBakI7QUFBdUI7QUFBQzs7QUFBQSxNQUFHOUwsS0FBSyxJQUFFLE9BQU9BLEtBQVAsS0FBZSxRQUF6QixFQUFrQztBQUFDQSxTQUFLLEdBQUNwVSxNQUFNLENBQUNrZixXQUFXLENBQUNpQixzQkFBWixDQUFtQy9MLEtBQW5DLENBQUQsQ0FBWjtBQUF5RDs7QUFBQSxNQUFJMkYsTUFBTSxHQUFDK0YsTUFBTSxDQUFDL0YsTUFBUCxJQUFlM0YsS0FBSyxJQUFHLElBQUdBLEtBQU0sRUFBaEMsSUFBbUMsRUFBOUM7QUFBaUQsTUFBRzRMLFFBQVEsSUFBRUEsUUFBUSxDQUFDSSxNQUFULENBQWdCLENBQUMsQ0FBakIsTUFBc0IsR0FBbkMsRUFBdUNKLFFBQVEsSUFBRSxHQUFWOztBQUFjLE1BQUdGLE1BQU0sQ0FBQ08sT0FBUCxJQUFnQixDQUFDLENBQUNMLFFBQUQsSUFBV0gsZ0JBQWdCLENBQUM5UixJQUFqQixDQUFzQmlTLFFBQXRCLENBQVosS0FBOENDLElBQUksS0FBRyxLQUF4RSxFQUE4RTtBQUFDQSxRQUFJLEdBQUMsUUFBTUEsSUFBSSxJQUFFLEVBQVosQ0FBTDtBQUFxQixRQUFHek8sUUFBUSxJQUFFQSxRQUFRLENBQUMsQ0FBRCxDQUFSLEtBQWMsR0FBM0IsRUFBK0JBLFFBQVEsR0FBQyxNQUFJQSxRQUFiO0FBQXVCLEdBQTFKLE1BQStKLElBQUcsQ0FBQ3lPLElBQUosRUFBUztBQUFDQSxRQUFJLEdBQUMsRUFBTDtBQUFTOztBQUFBLE1BQUdsSyxJQUFJLElBQUVBLElBQUksQ0FBQyxDQUFELENBQUosS0FBVSxHQUFuQixFQUF1QkEsSUFBSSxHQUFDLE1BQUlBLElBQVQ7QUFBYyxNQUFHZ0UsTUFBTSxJQUFFQSxNQUFNLENBQUMsQ0FBRCxDQUFOLEtBQVksR0FBdkIsRUFBMkJBLE1BQU0sR0FBQyxNQUFJQSxNQUFYO0FBQWtCdkksVUFBUSxHQUFDQSxRQUFRLENBQUMxTSxPQUFULENBQWlCLE9BQWpCLEVBQXlCdkIsa0JBQXpCLENBQVQ7QUFBc0R3VyxRQUFNLEdBQUNBLE1BQU0sQ0FBQ2pWLE9BQVAsQ0FBZSxHQUFmLEVBQW1CLEtBQW5CLENBQVA7QUFBaUMsU0FBTyxHQUFFa2IsUUFBUyxHQUFFQyxJQUFLLEdBQUV6TyxRQUFTLEdBQUV1SSxNQUFPLEdBQUVoRSxJQUFLLEVBQXBEO0FBQXVELEM7Ozs7Ozs7Ozs7O0FDckI1Z0M7O0FBQUFuYyxrQkFBQSxHQUFtQixJQUFuQjtBQUF3QkEsc0JBQUEsR0FBdUJnYyxjQUF2QixDLENBQXNDOztBQUMzRSxNQUFNMEssVUFBVSxHQUFDLHNCQUFqQjs7QUFBd0MsU0FBUzFLLGNBQVQsQ0FBd0I1SixLQUF4QixFQUE4QjtBQUFDLFNBQU9zVSxVQUFVLENBQUN2UyxJQUFYLENBQWdCL0IsS0FBaEIsQ0FBUDtBQUErQixDOzs7Ozs7Ozs7OztBQ0R6Rjs7QUFBQXBTLGtCQUFBLEdBQW1CLElBQW5CO0FBQXdCQSx3QkFBQSxHQUF5QnlmLGdCQUF6Qjs7QUFBMEMsSUFBSXhHLE1BQU0sR0FBQ2xaLG1CQUFPLENBQUMsc0VBQUQsQ0FBbEI7O0FBQWtDLElBQUlxWixZQUFZLEdBQUNyWixtQkFBTyxDQUFDLDJGQUFELENBQXhCO0FBQTBDO0FBQzNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUFHLFNBQVMwZixnQkFBVCxDQUEwQnZGLEdBQTFCLEVBQThCd0IsSUFBOUIsRUFBbUM7QUFBQyxRQUFNaUwsVUFBVSxHQUFDLElBQUlwZCxHQUFKLENBQVEsUUFBNEIsVUFBNUIsR0FBdUMsQ0FBL0MsQ0FBakI7QUFBZ0csUUFBTXFkLFlBQVksR0FBQ2xMLElBQUksR0FBQyxJQUFJblMsR0FBSixDQUFRbVMsSUFBUixFQUFhaUwsVUFBYixDQUFELEdBQTBCQSxVQUFqRDtBQUE0RCxRQUFLO0FBQUMvTyxZQUFEO0FBQVVxRSxnQkFBVjtBQUF1QmtFLFVBQXZCO0FBQThCaEUsUUFBOUI7QUFBbUNwVCxRQUFuQztBQUF3Q3VSO0FBQXhDLE1BQWdELElBQUkvUSxHQUFKLENBQVEyUSxHQUFSLEVBQVkwTSxZQUFaLENBQXJEOztBQUErRSxNQUFHdE0sTUFBTSxLQUFHcU0sVUFBVSxDQUFDck0sTUFBdkIsRUFBOEI7QUFBQyxVQUFNLElBQUluVyxLQUFKLENBQVcsb0RBQW1EK1YsR0FBSSxFQUFsRSxDQUFOO0FBQTRFOztBQUFBLFNBQU07QUFBQ3RDLFlBQUQ7QUFBVTRDLFNBQUssRUFBQyxDQUFDLEdBQUVwQixZQUFZLENBQUM4QyxzQkFBaEIsRUFBd0NELFlBQXhDLENBQWhCO0FBQXNFa0UsVUFBdEU7QUFBNkVoRSxRQUE3RTtBQUFrRnBULFFBQUksRUFBQ0EsSUFBSSxDQUFDbFUsS0FBTCxDQUFXOHhCLFVBQVUsQ0FBQ3JNLE1BQVgsQ0FBa0J4WCxNQUE3QjtBQUF2RixHQUFOO0FBQW9JLEM7Ozs7Ozs7Ozs7O0FDTHBmOztBQUFBOUMsa0JBQUEsR0FBbUIsSUFBbkI7QUFBd0JBLDhCQUFBLEdBQStCa2Msc0JBQS9CO0FBQXNEbGMsOEJBQUEsR0FBK0J1bUIsc0JBQS9CO0FBQXNEdm1CLGNBQUEsR0FBZTBJLE1BQWY7O0FBQXNCLFNBQVN3VCxzQkFBVCxDQUFnQ0QsWUFBaEMsRUFBNkM7QUFBQyxRQUFNekIsS0FBSyxHQUFDLEVBQVo7QUFBZXlCLGNBQVksQ0FBQ2xRLE9BQWIsQ0FBcUIsQ0FBQ21FLEtBQUQsRUFBT3BZLEdBQVAsS0FBYTtBQUFDLFFBQUcsT0FBTzBpQixLQUFLLENBQUMxaUIsR0FBRCxDQUFaLEtBQW9CLFdBQXZCLEVBQW1DO0FBQUMwaUIsV0FBSyxDQUFDMWlCLEdBQUQsQ0FBTCxHQUFXb1ksS0FBWDtBQUFrQixLQUF0RCxNQUEyRCxJQUFHOEYsS0FBSyxDQUFDQyxPQUFOLENBQWN1RSxLQUFLLENBQUMxaUIsR0FBRCxDQUFuQixDQUFILEVBQTZCO0FBQUM7QUFBQzBpQixXQUFLLENBQUMxaUIsR0FBRCxDQUFMLENBQVc4SyxJQUFYLENBQWdCc04sS0FBaEI7QUFBd0IsS0FBdkQsTUFBMkQ7QUFBQ3NLLFdBQUssQ0FBQzFpQixHQUFELENBQUwsR0FBVyxDQUFDMGlCLEtBQUssQ0FBQzFpQixHQUFELENBQU4sRUFBWW9ZLEtBQVosQ0FBWDtBQUErQjtBQUFDLEdBQTFMO0FBQTRMLFNBQU9zSyxLQUFQO0FBQWM7O0FBQUEsU0FBU3FNLHNCQUFULENBQWdDNUwsS0FBaEMsRUFBc0M7QUFBQyxNQUFHLE9BQU9BLEtBQVAsS0FBZSxRQUFmLElBQXlCLE9BQU9BLEtBQVAsS0FBZSxRQUFmLElBQXlCLENBQUM5UyxLQUFLLENBQUM4UyxLQUFELENBQXhELElBQWlFLE9BQU9BLEtBQVAsS0FBZSxTQUFuRixFQUE2RjtBQUFDLFdBQU83VSxNQUFNLENBQUM2VSxLQUFELENBQWI7QUFBc0IsR0FBcEgsTUFBd0g7QUFBQyxXQUFNLEVBQU47QUFBVTtBQUFDOztBQUFBLFNBQVNzTCxzQkFBVCxDQUFnQ08sUUFBaEMsRUFBeUM7QUFBQyxRQUFNeEwsTUFBTSxHQUFDLElBQUl5TCxlQUFKLEVBQWI7QUFBbUNydkIsUUFBTSxDQUFDRSxPQUFQLENBQWVrdkIsUUFBZixFQUF5Qi9hLE9BQXpCLENBQWlDLENBQUMsQ0FBQ2pVLEdBQUQsRUFBS29ZLEtBQUwsQ0FBRCxLQUFlO0FBQUMsUUFBRzhGLEtBQUssQ0FBQ0MsT0FBTixDQUFjL0YsS0FBZCxDQUFILEVBQXdCO0FBQUNBLFdBQUssQ0FBQ25FLE9BQU4sQ0FBYzVTLElBQUksSUFBRW1pQixNQUFNLENBQUMwTCxNQUFQLENBQWNsdkIsR0FBZCxFQUFrQit1QixzQkFBc0IsQ0FBQzF0QixJQUFELENBQXhDLENBQXBCO0FBQXNFLEtBQS9GLE1BQW1HO0FBQUNtaUIsWUFBTSxDQUFDckwsR0FBUCxDQUFXblksR0FBWCxFQUFlK3VCLHNCQUFzQixDQUFDM1csS0FBRCxDQUFyQztBQUErQztBQUFDLEdBQXJNO0FBQXVNLFNBQU9vTCxNQUFQO0FBQWU7O0FBQUEsU0FBUzVTLE1BQVQsQ0FBZ0I4QixNQUFoQixFQUF1QixHQUFHeWMsZ0JBQTFCLEVBQTJDO0FBQUNBLGtCQUFnQixDQUFDbGIsT0FBakIsQ0FBeUJrUSxZQUFZLElBQUU7QUFBQ2pHLFNBQUssQ0FBQ2tSLElBQU4sQ0FBV2pMLFlBQVksQ0FBQ25RLElBQWIsRUFBWCxFQUFnQ0MsT0FBaEMsQ0FBd0NqVSxHQUFHLElBQUUwUyxNQUFNLENBQUN1TSxNQUFQLENBQWNqZixHQUFkLENBQTdDO0FBQWlFbWtCLGdCQUFZLENBQUNsUSxPQUFiLENBQXFCLENBQUNtRSxLQUFELEVBQU9wWSxHQUFQLEtBQWEwUyxNQUFNLENBQUN3YyxNQUFQLENBQWNsdkIsR0FBZCxFQUFrQm9ZLEtBQWxCLENBQWxDO0FBQTZELEdBQXRLO0FBQXdLLFNBQU8xRixNQUFQO0FBQWUsQzs7Ozs7Ozs7Ozs7QUNBbGxDOztBQUFBeEssa0JBQUEsR0FBbUIsSUFBbkI7QUFBd0JBLHVCQUFBLEdBQXdCK2EsZUFBeEI7O0FBQXdDLFNBQVNBLGVBQVQsQ0FBeUI0RyxVQUF6QixFQUFvQztBQUFDLFFBQUs7QUFBQzVFLE1BQUQ7QUFBSWxDO0FBQUosTUFBWThHLFVBQWpCO0FBQTRCLFNBQU8vSixRQUFRLElBQUU7QUFBQyxVQUFNZ0ssVUFBVSxHQUFDN0UsRUFBRSxDQUFDcGEsSUFBSCxDQUFRaVYsUUFBUixDQUFqQjs7QUFBbUMsUUFBRyxDQUFDZ0ssVUFBSixFQUFlO0FBQUMsYUFBTyxLQUFQO0FBQWM7O0FBQUEsVUFBTWxkLE1BQU0sR0FBQ3VXLEtBQUssSUFBRTtBQUFDLFVBQUc7QUFBQyxlQUFPa00sa0JBQWtCLENBQUNsTSxLQUFELENBQXpCO0FBQWtDLE9BQXRDLENBQXNDLE9BQU1qUCxDQUFOLEVBQVE7QUFBQyxjQUFNeEMsR0FBRyxHQUFDLElBQUlyRixLQUFKLENBQVUsd0JBQVYsQ0FBVjtBQUE4Q3FGLFdBQUcsQ0FBQ3pMLElBQUosR0FBUyxlQUFUO0FBQXlCLGNBQU15TCxHQUFOO0FBQVc7QUFBQyxLQUF2Sjs7QUFBd0osVUFBTUwsTUFBTSxHQUFDLEVBQWI7QUFBZ0J6UixVQUFNLENBQUNvVSxJQUFQLENBQVkrTyxNQUFaLEVBQW9COU8sT0FBcEIsQ0FBNEJxYixRQUFRLElBQUU7QUFBQyxZQUFNQyxDQUFDLEdBQUN4TSxNQUFNLENBQUN1TSxRQUFELENBQWQ7QUFBeUIsWUFBTUUsQ0FBQyxHQUFDMUYsVUFBVSxDQUFDeUYsQ0FBQyxDQUFDRSxHQUFILENBQWxCOztBQUEwQixVQUFHRCxDQUFDLEtBQUczbUIsU0FBUCxFQUFpQjtBQUFDd0ksY0FBTSxDQUFDaWUsUUFBRCxDQUFOLEdBQWlCLENBQUNFLENBQUMsQ0FBQy9iLE9BQUYsQ0FBVSxHQUFWLENBQUQsR0FBZ0IrYixDQUFDLENBQUN2UCxLQUFGLENBQVEsR0FBUixFQUFhampCLEdBQWIsQ0FBaUIrYSxLQUFLLElBQUVuTCxNQUFNLENBQUNtTCxLQUFELENBQTlCLENBQWhCLEdBQXVEd1gsQ0FBQyxDQUFDbk0sTUFBRixHQUFTLENBQUN4VyxNQUFNLENBQUM0aUIsQ0FBRCxDQUFQLENBQVQsR0FBcUI1aUIsTUFBTSxDQUFDNGlCLENBQUQsQ0FBbkc7QUFBd0c7QUFBQyxLQUFyTjtBQUF1TixXQUFPbmUsTUFBUDtBQUFlLEdBQWplO0FBQW1lLEM7Ozs7Ozs7Ozs7O0FDQXBtQjs7QUFBQW5KLGtCQUFBLEdBQW1CLElBQW5CO0FBQXdCQSxxQkFBQSxHQUFzQjJhLGFBQXRCLEMsQ0FBb0M7QUFDekU7O0FBQ0EsU0FBUzZNLFdBQVQsQ0FBcUJDLEdBQXJCLEVBQXlCO0FBQUMsU0FBT0EsR0FBRyxDQUFDdmMsT0FBSixDQUFZLHNCQUFaLEVBQW1DLE1BQW5DLENBQVA7QUFBbUQ7O0FBQUEsU0FBU3djLGNBQVQsQ0FBd0J6TSxLQUF4QixFQUE4QjtBQUFDLFFBQU1FLFFBQVEsR0FBQ0YsS0FBSyxDQUFDeFcsVUFBTixDQUFpQixHQUFqQixLQUF1QndXLEtBQUssQ0FBQzNNLFFBQU4sQ0FBZSxHQUFmLENBQXRDOztBQUEwRCxNQUFHNk0sUUFBSCxFQUFZO0FBQUNGLFNBQUssR0FBQ0EsS0FBSyxDQUFDcG1CLEtBQU4sQ0FBWSxDQUFaLEVBQWMsQ0FBQyxDQUFmLENBQU47QUFBeUI7O0FBQUEsUUFBTXFtQixNQUFNLEdBQUNELEtBQUssQ0FBQ3hXLFVBQU4sQ0FBaUIsS0FBakIsQ0FBYjs7QUFBcUMsTUFBR3lXLE1BQUgsRUFBVTtBQUFDRCxTQUFLLEdBQUNBLEtBQUssQ0FBQ3BtQixLQUFOLENBQVksQ0FBWixDQUFOO0FBQXNCOztBQUFBLFNBQU07QUFBQ2lELE9BQUcsRUFBQ21qQixLQUFMO0FBQVdDLFVBQVg7QUFBa0JDO0FBQWxCLEdBQU47QUFBbUM7O0FBQUEsU0FBU1IsYUFBVCxDQUF1QmdOLGVBQXZCLEVBQXVDO0FBQUMsUUFBTUMsUUFBUSxHQUFDLENBQUNELGVBQWUsQ0FBQ3pjLE9BQWhCLENBQXdCLEtBQXhCLEVBQThCLEVBQTlCLEtBQW1DLEdBQXBDLEVBQXlDclcsS0FBekMsQ0FBK0MsQ0FBL0MsRUFBa0RrakIsS0FBbEQsQ0FBd0QsR0FBeEQsQ0FBZjtBQUE0RSxRQUFNOEMsTUFBTSxHQUFDLEVBQWI7QUFBZ0IsTUFBSWdOLFVBQVUsR0FBQyxDQUFmO0FBQWlCLFFBQU1DLGtCQUFrQixHQUFDRixRQUFRLENBQUM5eUIsR0FBVCxDQUFhdW1CLE9BQU8sSUFBRTtBQUFDLFFBQUdBLE9BQU8sQ0FBQzVXLFVBQVIsQ0FBbUIsR0FBbkIsS0FBeUI0VyxPQUFPLENBQUMvTSxRQUFSLENBQWlCLEdBQWpCLENBQTVCLEVBQWtEO0FBQUMsWUFBSztBQUFDeFcsV0FBRDtBQUFLcWpCLGdCQUFMO0FBQWNEO0FBQWQsVUFBc0J3TSxjQUFjLENBQUNyTSxPQUFPLENBQUN4bUIsS0FBUixDQUFjLENBQWQsRUFBZ0IsQ0FBQyxDQUFqQixDQUFELENBQXpDO0FBQStEZ21CLFlBQU0sQ0FBQy9pQixHQUFELENBQU4sR0FBWTtBQUFDeXZCLFdBQUcsRUFBQ00sVUFBVSxFQUFmO0FBQWtCM00sY0FBbEI7QUFBeUJDO0FBQXpCLE9BQVo7QUFBK0MsYUFBT0QsTUFBTSxHQUFDQyxRQUFRLEdBQUMsYUFBRCxHQUFlLFFBQXhCLEdBQWlDLFdBQTlDO0FBQTJELEtBQTVOLE1BQWdPO0FBQUMsYUFBTyxJQUFHcU0sV0FBVyxDQUFDbk0sT0FBRCxDQUFVLEVBQS9CO0FBQWtDO0FBQUMsR0FBM1IsRUFBNlJ6WCxJQUE3UixDQUFrUyxFQUFsUyxDQUF6QixDQUE5RyxDQUE2YTtBQUN6d0I7O0FBQ0EsWUFBK0I7QUFBQyxRQUFJbWtCLGdCQUFnQixHQUFDLEVBQXJCO0FBQXdCLFFBQUlDLGtCQUFrQixHQUFDLENBQXZCLENBQXpCLENBQWtEOztBQUNqRixVQUFNQyxlQUFlLEdBQUMsTUFBSTtBQUFDLFVBQUlDLFFBQVEsR0FBQyxFQUFiOztBQUFnQixXQUFJLElBQUk3eUIsQ0FBQyxHQUFDLENBQVYsRUFBWUEsQ0FBQyxHQUFDMnlCLGtCQUFkLEVBQWlDM3lCLENBQUMsRUFBbEMsRUFBcUM7QUFBQzZ5QixnQkFBUSxJQUFFOWhCLE1BQU0sQ0FBQytoQixZQUFQLENBQW9CSixnQkFBcEIsQ0FBVjtBQUFnREEsd0JBQWdCOztBQUFHLFlBQUdBLGdCQUFnQixHQUFDLEdBQXBCLEVBQXdCO0FBQUNDLDRCQUFrQjtBQUFHRCwwQkFBZ0IsR0FBQyxFQUFqQjtBQUFxQjtBQUFDOztBQUFBLGFBQU9HLFFBQVA7QUFBaUIsS0FBek87O0FBQTBPLFVBQU1FLFNBQVMsR0FBQyxFQUFoQjtBQUFtQixRQUFJQyx1QkFBdUIsR0FBQ1QsUUFBUSxDQUFDOXlCLEdBQVQsQ0FBYXVtQixPQUFPLElBQUU7QUFBQyxVQUFHQSxPQUFPLENBQUM1VyxVQUFSLENBQW1CLEdBQW5CLEtBQXlCNFcsT0FBTyxDQUFDL00sUUFBUixDQUFpQixHQUFqQixDQUE1QixFQUFrRDtBQUFDLGNBQUs7QUFBQ3hXLGFBQUQ7QUFBS3FqQixrQkFBTDtBQUFjRDtBQUFkLFlBQXNCd00sY0FBYyxDQUFDck0sT0FBTyxDQUFDeG1CLEtBQVIsQ0FBYyxDQUFkLEVBQWdCLENBQUMsQ0FBakIsQ0FBRCxDQUF6QyxDQUFELENBQWdFO0FBQ2xhOztBQUNBLFlBQUl5ekIsVUFBVSxHQUFDeHdCLEdBQUcsQ0FBQ29ULE9BQUosQ0FBWSxLQUFaLEVBQWtCLEVBQWxCLENBQWY7QUFBcUMsWUFBSXFkLFVBQVUsR0FBQyxLQUFmLENBRjZULENBRXhTO0FBQzFEOztBQUNBLFlBQUdELFVBQVUsQ0FBQ3hsQixNQUFYLEtBQW9CLENBQXBCLElBQXVCd2xCLFVBQVUsQ0FBQ3hsQixNQUFYLEdBQWtCLEVBQTVDLEVBQStDO0FBQUN5bEIsb0JBQVUsR0FBQyxJQUFYO0FBQWlCOztBQUFBLFlBQUcsQ0FBQ3BnQixLQUFLLENBQUN0RixRQUFRLENBQUN5bEIsVUFBVSxDQUFDOUIsTUFBWCxDQUFrQixDQUFsQixFQUFvQixDQUFwQixDQUFELENBQVQsQ0FBVCxFQUE0QztBQUFDK0Isb0JBQVUsR0FBQyxJQUFYO0FBQWlCOztBQUFBLFlBQUdBLFVBQUgsRUFBYztBQUFDRCxvQkFBVSxHQUFDTCxlQUFlLEVBQTFCO0FBQThCOztBQUFBRyxpQkFBUyxDQUFDRSxVQUFELENBQVQsR0FBc0J4d0IsR0FBdEI7QUFBMEIsZUFBT29qQixNQUFNLEdBQUNDLFFBQVEsR0FBRSxVQUFTbU4sVUFBVyxTQUF0QixHQUFnQyxPQUFNQSxVQUFXLE9BQTFELEdBQWtFLE9BQU1BLFVBQVcsVUFBaEc7QUFBMkcsT0FKRCxNQUlLO0FBQUMsZUFBTyxJQUFHZCxXQUFXLENBQUNuTSxPQUFELENBQVUsRUFBL0I7QUFBa0M7QUFBQyxLQUpoRSxFQUlrRXpYLElBSmxFLENBSXVFLEVBSnZFLENBQTVCO0FBSXVHLFdBQU07QUFBQ21aLFFBQUUsRUFBQyxJQUFJeUwsTUFBSixDQUFZLElBQUdWLGtCQUFtQixTQUFsQyxDQUFKO0FBQWdEak4sWUFBaEQ7QUFBdUR1TixlQUF2RDtBQUFpRUssZ0JBQVUsRUFBRSxJQUFHSix1QkFBd0I7QUFBeEcsS0FBTjtBQUF5SDs7QUFBQSxTQUFNO0FBQUN0TCxNQUFFLEVBQUMsSUFBSXlMLE1BQUosQ0FBWSxJQUFHVixrQkFBbUIsU0FBbEMsQ0FBSjtBQUFnRGpOO0FBQWhELEdBQU47QUFBK0QsQzs7Ozs7Ozs7Ozs7QUNUL2dCOztBQUFBN2Esa0JBQUEsR0FBbUIsSUFBbkI7QUFBd0JBLGdCQUFBLEdBQWlCMG9CLFFBQWpCO0FBQTBCMW9CLHlCQUFBLEdBQTBCb2EsaUJBQTFCO0FBQTRDcGEsY0FBQSxHQUFlcWYsTUFBZjtBQUFzQnJmLHNCQUFBLEdBQXVCMm9CLGNBQXZCO0FBQXNDM29CLGlCQUFBLEdBQWtCNG9CLFNBQWxCO0FBQTRCNW9CLDJCQUFBLEdBQTRCb2xCLG1CQUE1QjtBQUFnRHBsQiw0QkFBQSxHQUE2QjRiLG9CQUE3QjtBQUFrRDViLFVBQUEsR0FBV0EsVUFBQSxHQUFXQSxxQkFBQSxHQUFzQixLQUFLLENBQWpEOztBQUFtRCxJQUFJNm9CLFVBQVUsR0FBQzlvQixtQkFBTyxDQUFDLHNHQUFELENBQXRCO0FBQW9EO0FBQzVZO0FBQ0E7OztBQUFHLFNBQVMyb0IsUUFBVCxDQUFrQmxWLEVBQWxCLEVBQXFCO0FBQUMsTUFBSXNWLElBQUksR0FBQyxLQUFUO0FBQWUsTUFBSXhOLE1BQUo7QUFBVyxTQUFNLENBQUMsR0FBRzdQLElBQUosS0FBVztBQUFDLFFBQUcsQ0FBQ3FkLElBQUosRUFBUztBQUFDQSxVQUFJLEdBQUMsSUFBTDtBQUFVeE4sWUFBTSxHQUFDOUgsRUFBRSxDQUFDLEdBQUcvSCxJQUFKLENBQVQ7QUFBb0I7O0FBQUEsV0FBTzZQLE1BQVA7QUFBZSxHQUF6RTtBQUEyRTs7QUFBQSxTQUFTbEIsaUJBQVQsR0FBNEI7QUFBQyxRQUFLO0FBQUNnTSxZQUFEO0FBQVUxYyxZQUFWO0FBQW1CNGM7QUFBbkIsTUFBeUJoVyxNQUFNLENBQUM0UCxRQUFyQztBQUE4QyxTQUFPLEdBQUVrRyxRQUFTLEtBQUkxYyxRQUFTLEdBQUU0YyxJQUFJLEdBQUMsTUFBSUEsSUFBTCxHQUFVLEVBQUcsRUFBbEQ7QUFBcUQ7O0FBQUEsU0FBU2pILE1BQVQsR0FBaUI7QUFBQyxRQUFLO0FBQUN0VztBQUFELE1BQU91SCxNQUFNLENBQUM0UCxRQUFuQjtBQUE0QixRQUFNNUYsTUFBTSxHQUFDRixpQkFBaUIsRUFBOUI7QUFBaUMsU0FBT3JSLElBQUksQ0FBQ3dNLFNBQUwsQ0FBZStFLE1BQU0sQ0FBQ3hYLE1BQXRCLENBQVA7QUFBc0M7O0FBQUEsU0FBUzZsQixjQUFULENBQXdCdkssU0FBeEIsRUFBa0M7QUFBQyxTQUFPLE9BQU9BLFNBQVAsS0FBbUIsUUFBbkIsR0FBNEJBLFNBQTVCLEdBQXNDQSxTQUFTLENBQUMxRyxXQUFWLElBQXVCMEcsU0FBUyxDQUFDbmYsSUFBakMsSUFBdUMsU0FBcEY7QUFBK0Y7O0FBQUEsU0FBUzJwQixTQUFULENBQW1COVgsR0FBbkIsRUFBdUI7QUFBQyxTQUFPQSxHQUFHLENBQUNpWSxRQUFKLElBQWNqWSxHQUFHLENBQUNrWSxXQUF6QjtBQUFzQzs7QUFBQSxlQUFlNUQsbUJBQWYsQ0FBbUNsSCxHQUFuQyxFQUF1Q2dILEdBQXZDLEVBQTJDO0FBQUMsWUFBdUM7QUFBQyxRQUFJK0QsY0FBSjs7QUFBbUIsUUFBRyxDQUFDQSxjQUFjLEdBQUMvSyxHQUFHLENBQUMySCxTQUFwQixLQUFnQyxJQUFoQyxJQUFzQ29ELGNBQWMsQ0FBQ3pSLGVBQXhELEVBQXdFO0FBQUMsWUFBTS9CLE9BQU8sR0FBRSxJQUFHa1QsY0FBYyxDQUFDekssR0FBRCxDQUFNLDZKQUF0QztBQUFtTSxZQUFNLElBQUkvWixLQUFKLENBQVVzUixPQUFWLENBQU47QUFBMEI7QUFBQyxHQUFuVyxDQUFtVzs7O0FBQ2o4QixRQUFNM0UsR0FBRyxHQUFDb1UsR0FBRyxDQUFDcFUsR0FBSixJQUFTb1UsR0FBRyxDQUFDQSxHQUFKLElBQVNBLEdBQUcsQ0FBQ0EsR0FBSixDQUFRcFUsR0FBcEM7O0FBQXdDLE1BQUcsQ0FBQ29OLEdBQUcsQ0FBQzFHLGVBQVIsRUFBd0I7QUFBQyxRQUFHME4sR0FBRyxDQUFDQSxHQUFKLElBQVNBLEdBQUcsQ0FBQzlHLFNBQWhCLEVBQTBCO0FBQUM7QUFDNUYsYUFBTTtBQUFDZ0UsaUJBQVMsRUFBQyxNQUFNZ0QsbUJBQW1CLENBQUNGLEdBQUcsQ0FBQzlHLFNBQUwsRUFBZThHLEdBQUcsQ0FBQ0EsR0FBbkI7QUFBcEMsT0FBTjtBQUFvRTs7QUFBQSxXQUFNLEVBQU47QUFBVTs7QUFBQSxRQUFNcHhCLEtBQUssR0FBQyxNQUFNb3FCLEdBQUcsQ0FBQzFHLGVBQUosQ0FBb0IwTixHQUFwQixDQUFsQjs7QUFBMkMsTUFBR3BVLEdBQUcsSUFBRThYLFNBQVMsQ0FBQzlYLEdBQUQsQ0FBakIsRUFBdUI7QUFBQyxXQUFPaGQsS0FBUDtBQUFjOztBQUFBLE1BQUcsQ0FBQ0EsS0FBSixFQUFVO0FBQUMsVUFBTTJoQixPQUFPLEdBQUUsSUFBR2tULGNBQWMsQ0FBQ3pLLEdBQUQsQ0FBTSwrREFBOERwcUIsS0FBTSxZQUExRztBQUFzSCxVQUFNLElBQUlxUSxLQUFKLENBQVVzUixPQUFWLENBQU47QUFBMEI7O0FBQUEsWUFBdUM7QUFBQyxRQUFHL2QsTUFBTSxDQUFDb1UsSUFBUCxDQUFZaFksS0FBWixFQUFtQmdQLE1BQW5CLEtBQTRCLENBQTVCLElBQStCLENBQUNvaUIsR0FBRyxDQUFDQSxHQUF2QyxFQUEyQztBQUFDN2UsYUFBTyxDQUFDQyxJQUFSLENBQWMsR0FBRXFpQixjQUFjLENBQUN6SyxHQUFELENBQU0saUxBQXBDO0FBQXVOO0FBQUM7O0FBQUEsU0FBT3BxQixLQUFQO0FBQWM7O0FBQUEsTUFBTW8xQixhQUFhLEdBQUMsQ0FBQyxNQUFELEVBQVEsTUFBUixFQUFlLE1BQWYsRUFBc0IsVUFBdEIsRUFBaUMsTUFBakMsRUFBd0MsTUFBeEMsRUFBK0MsVUFBL0MsRUFBMEQsTUFBMUQsRUFBaUUsVUFBakUsRUFBNEUsT0FBNUUsRUFBb0YsUUFBcEYsRUFBNkYsU0FBN0YsQ0FBcEI7QUFBNEhscEIscUJBQUEsR0FBc0JrcEIsYUFBdEI7O0FBQW9DLFNBQVN0TixvQkFBVCxDQUE4QjFCLEdBQTlCLEVBQWtDO0FBQUMsWUFBd0M7QUFBQyxRQUFHQSxHQUFHLEtBQUcsSUFBTixJQUFZLE9BQU9BLEdBQVAsS0FBYSxRQUE1QixFQUFxQztBQUFDeGlCLFlBQU0sQ0FBQ29VLElBQVAsQ0FBWW9PLEdBQVosRUFBaUJuTyxPQUFqQixDQUF5QmpVLEdBQUcsSUFBRTtBQUFDLFlBQUdveEIsYUFBYSxDQUFDM2QsT0FBZCxDQUFzQnpULEdBQXRCLE1BQTZCLENBQUMsQ0FBakMsRUFBbUM7QUFBQ3VPLGlCQUFPLENBQUNDLElBQVIsQ0FBYyxxREFBb0R4TyxHQUFJLEVBQXRFO0FBQTBFO0FBQUMsT0FBOUk7QUFBaUo7QUFBQzs7QUFBQSxTQUFNLENBQUMsR0FBRSt3QixVQUFVLENBQUN4RCxTQUFkLEVBQXlCbkwsR0FBekIsQ0FBTjtBQUFxQzs7QUFBQSxNQUFNaVAsRUFBRSxHQUFDLE9BQU90SSxXQUFQLEtBQXFCLFdBQTlCO0FBQTBDN2dCLFVBQUEsR0FBV21wQixFQUFYO0FBQWMsTUFBTXZJLEVBQUUsR0FBQ3VJLEVBQUUsSUFBRSxPQUFPdEksV0FBVyxDQUFDQyxJQUFuQixLQUEwQixVQUE5QixJQUEwQyxPQUFPRCxXQUFXLENBQUN1SSxPQUFuQixLQUE2QixVQUFoRjtBQUEyRnBwQixVQUFBLEdBQVc0Z0IsRUFBWCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKaHRDO0FBR0E7O0FBRUEsTUFBTXlJLEtBQXNCLEdBQUd2MUIsS0FBSyxJQUFJO0FBQ3BDLFFBQU07QUFBRUM7QUFBRixNQUFZRCxLQUFsQjtBQUNBdVMsU0FBTyxDQUFDaWpCLEdBQVIsQ0FBWXYxQixLQUFaO0FBQ0Ysc0JBQ0UsOERBQUMsaUVBQUQ7QUFBWSxTQUFLLEVBQUMsMENBQWxCO0FBQUEsMkJBQ0UsOERBQUMsOERBQUQ7QUFBTSxXQUFLLEVBQUVBO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQUtELENBUkQ7O0FBVUEsTUFBTXcxQixRQUFRLEdBQUcsWUFBWTtBQUMzQixRQUFNelksR0FBRyxHQUFHLE1BQU1vQyxLQUFLLENBQUMsaURBQUQsQ0FBdkI7QUFDQSxRQUFNbmYsS0FBSyxHQUFHLE1BQU0rYyxHQUFHLENBQUN1TSxJQUFKLEVBQXBCO0FBRUEsU0FBT3RwQixLQUFQO0FBQ0QsQ0FMRDs7QUFPTyxNQUFNeTFCLGNBQThCLEdBQUcsWUFBWTtBQUN4RCxRQUFNejFCLEtBQUssR0FBRyxNQUFNdzFCLFFBQVEsRUFBNUI7O0FBRUEsTUFBSSxDQUFDeDFCLEtBQUwsRUFBWTtBQUNWLFdBQU87QUFDTHdwQixjQUFRLEVBQUU7QUFETCxLQUFQO0FBR0Q7O0FBRUQsU0FBTztBQUNMenBCLFNBQUssRUFBRTtBQUFFQztBQUFGLEtBREY7QUFFTDAxQixjQUFVLEVBQUU7QUFGUCxHQUFQO0FBSUQsQ0FiTTtBQWVQLCtEQUFlSixLQUFmLEU7Ozs7Ozs7Ozs7O0FDckNhLGtCQUFrQixNQUFNLHdCQUF3QixrQkFBa0IsMkJBQTJCLHFCQUFxQixnQ0FBZ0MsZ0NBQWdDLG1DQUFtQyw0QkFBNEIsK0JBQStCLG9CQUFvQix5QkFBeUIsVUFBVTtBQUNwVixpRDs7Ozs7Ozs7OztBQ0RBLDJHQUErQzs7Ozs7Ozs7Ozs7QUNBL0MseUdBQThDOzs7Ozs7Ozs7OztBQ0E5QztBQUNBO0FBQ0EsbUJBQW1CLHNCQUFzQjtBQUN6Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDBCOzs7Ozs7Ozs7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0M7Ozs7Ozs7Ozs7QUNOQSxjQUFjLG1CQUFPLENBQUMsd0dBQStCOztBQUVyRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx5Qzs7Ozs7Ozs7OztBQ3REQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWEsdUJBQXVCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsK0M7Ozs7Ozs7Ozs7QUNmQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEseUI7Ozs7Ozs7Ozs7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWE7O0FBRWIsSUFBSSxJQUFxQztBQUN6QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsMkJBQTJCOztBQUUzQjtBQUNBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDs7QUFFckQ7QUFDQTtBQUNBO0FBQ0EsaURBQWlEOztBQUVqRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdUJBQXVCO0FBQ3ZCLHVCQUF1QjtBQUN2QixlQUFlO0FBQ2Ysa0JBQWtCO0FBQ2xCLGdCQUFnQjtBQUNoQixZQUFZO0FBQ1osWUFBWTtBQUNaLGNBQWM7QUFDZCxnQkFBZ0I7QUFDaEIsa0JBQWtCO0FBQ2xCLGdCQUFnQjtBQUNoQixtQkFBbUI7QUFDbkIsd0JBQXdCO0FBQ3hCLHlCQUF5QjtBQUN6Qix5QkFBeUI7QUFDekIsaUJBQWlCO0FBQ2pCLG9CQUFvQjtBQUNwQixrQkFBa0I7QUFDbEIsY0FBYztBQUNkLGNBQWM7QUFDZCxnQkFBZ0I7QUFDaEIsa0JBQWtCO0FBQ2xCLG9CQUFvQjtBQUNwQixrQkFBa0I7QUFDbEIsMEJBQTBCO0FBQzFCLGNBQWM7QUFDZCxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7OztBQ2pPYTs7QUFFYixJQUFJLEtBQXFDLEVBQUUsRUFFMUM7QUFDRCxFQUFFLGtKQUF5RDtBQUMzRDs7Ozs7Ozs7Ozs7O0FDTkEsOEM7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEsK0Q7Ozs7Ozs7Ozs7O0FDQUEseUU7Ozs7Ozs7Ozs7O0FDQUEsaUc7Ozs7Ozs7Ozs7O0FDQUEscUU7Ozs7Ozs7Ozs7O0FDQUEsMEU7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7QUNBQSxlIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBQcm9wcyB9IGZyb20gXCJpbnRlcmZhY2VzL2ludGVyZmFjZVwiO1xyXG5pbXBvcnQge1xyXG4gIFZTdGFjayxcclxuICBIU3RhY2ssXHJcbiAgSGVhZGluZyxcclxuICBUZXh0LFxyXG4gIExpbmssXHJcbiAgVG9vbHRpcCxcclxuICB1c2VDb2xvck1vZGVWYWx1ZSxcclxuICBGbGV4LFxyXG4gIFNpbXBsZUdyaWQsXHJcbiAgQm94LFxyXG4gIEltYWdlXHJcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IE5leHRMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XHJcbmltcG9ydCB7IHVzZUxpbmtDb2xvciB9IGZyb20gXCJjb21wb25lbnRzL3VpL3RoZW1lXCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2xheW91dC9oZWFkZXJcIjtcclxuaW1wb3J0IHsgQ2FyZFRyYW5zaXRpb24gfSBmcm9tIFwiY29tcG9uZW50cy91aS9wYWdlLXRyYW5zaXRpb25zXCI7XHJcbmltcG9ydCB7IE1vdGlvbkJveCB9IGZyb20gXCJjb21wb25lbnRzL3VpL21vdGlvblwiO1xyXG5cclxuY29uc3QgT1JBTkdFID0gXCIjZmY5NDAwXCI7XHJcblxyXG5jb25zdCBQb3B1bGFyQXJ0aWNsZXM6IFJlYWN0LkZDPFByb3BzPiA9IHByb3BzID0+IHtcclxuICBjb25zdCB7IHBvc3RzIH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgbGlua0NvbG9yID0gdXNlTGlua0NvbG9yKCk7XHJcbiAgY29uc3QgdGV4dENvbG9yID0gdXNlQ29sb3JNb2RlVmFsdWUoXCJncmF5LjUwMFwiLCBcImdyYXkuMjAwXCIpO1xyXG5cclxuICBmdW5jdGlvbiBjb21wYXJlKFxyXG4gICAgYTogeyBwdWJsaWNfcmVhY3Rpb25zX2NvdW50OiBudW1iZXIgfSxcclxuICAgIGI6IHsgcHVibGljX3JlYWN0aW9uc19jb3VudDogbnVtYmVyIH1cclxuICApIHtcclxuICAgIGNvbnN0IGNvdW50QSA9IGEucHVibGljX3JlYWN0aW9uc19jb3VudDtcclxuICAgIGNvbnN0IGNvdW50QiA9IGIucHVibGljX3JlYWN0aW9uc19jb3VudDtcclxuXHJcbiAgICBsZXQgY29tcGFyaXNvbiA9IDA7XHJcbiAgICBpZiAoY291bnRBIDwgY291bnRCKSB7XHJcbiAgICAgIGNvbXBhcmlzb24gPSAxO1xyXG4gICAgfSBlbHNlIGlmIChjb3VudEEgPiBjb3VudEIpIHtcclxuICAgICAgY29tcGFyaXNvbiA9IC0xO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNvbXBhcmlzb247XHJcbiAgfVxyXG5cclxuICBjb25zdCBtb3N0TGlrZWREYXRhID0gcG9zdHMuc29ydChjb21wYXJlKS5zbGljZSgwLCAzKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxWU3RhY2sgYWxpZ249XCJzdGFydFwiIHNwYWNpbmc9ezh9IHdpZHRoPVwiMTAwJVwiPlxyXG4gICAgICA8SGVhZGVyIHVuZGVybGluZUNvbG9yPXtPUkFOR0V9IG10PXswfSBtYj17MH0+XHJcbiAgICAgICAgUG9wdWxhciBBcnRpY2xlc1xyXG4gICAgICA8L0hlYWRlcj5cclxuICAgICAgPFNpbXBsZUdyaWQgY29sdW1ucz17MX0gc3BhY2luZz17NH0gbXQ9ezV9IHc9XCIxMDAlXCI+XHJcbiAgICAgICAge3Bvc3RzICYmXHJcbiAgICAgICAgICBtb3N0TGlrZWREYXRhLm1hcChcclxuICAgICAgICAgICAgKHtcclxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICB0aXRsZSxcclxuICAgICAgICAgICAgICBzbHVnLFxyXG4gICAgICAgICAgICAgIHBvc2l0aXZlX3JlYWN0aW9uc19jb3VudCxcclxuICAgICAgICAgICAgICBjb21tZW50c19jb3VudCxcclxuICAgICAgICAgICAgICBwdWJsaXNoZWRfYXRcclxuICAgICAgICAgICAgfSwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgIDxNb3Rpb25Cb3ggd2hpbGVIb3Zlcj17eyB5OiAtNSB9fSBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgPENhcmRUcmFuc2l0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8VlN0YWNrXHJcbiAgICAgICAgICAgICAgICAgICAgc3BhY2luZz17MX1cclxuICAgICAgICAgICAgICAgICAgICBwPXs0fVxyXG4gICAgICAgICAgICAgICAgICAgIF9ob3Zlcj17eyBzaGFkb3c6IFwibWRcIiwgdGV4dERlY29yYXRpb246IFwibm9uZVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg9XCIxcHhcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uPVwicmVsYXRpdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHJvdW5kZWQ9XCJtZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgYmc9e3VzZUNvbG9yTW9kZVZhbHVlKFwid2hpdGVcIiwgXCJncmF5LjgwMFwiKX1cclxuICAgICAgICAgICAgICAgICAgICBhbGlnbj1cImxlZnRcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEhTdGFjayBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIiBpc0lubGluZT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxIZWFkaW5nIGZvbnRTaXplPVwibGdcIiBhbGlnbj1cImxlZnRcIiBtdD17MH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxOZXh0TGluayBocmVmPXtgL2Jsb2cvJHtzbHVnfWB9IHBhc3NIcmVmPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGFzPXtMaW5rfSBjb2xvcj17bGlua0NvbG9yfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTmV4dExpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0hlYWRpbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SFN0YWNrIHNwYWNpbmc9ezJ9IGlzSW5saW5lIGQ9e1tcIm5vbmVcIiwgXCJmbGV4XCIsIFwiZmxleFwiXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwb3NpdGl2ZV9yZWFjdGlvbnNfY291bnQgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXggYWxpZ25JdGVtcz1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU9XCJzbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vT2ZMaW5lcz17MX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodD1cIjQwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduPVwibGVmdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPXt0ZXh0Q29sb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwb3NpdGl2ZV9yZWFjdGlvbnNfY291bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJDYXBhXzFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVCYWNrZ3JvdW5kPVwibmV3IDAgMCA1MTIgNTEyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIm00NDUuOTM2IDIwLjY1N2gtMzc5Ljg3MmMtMTkuNzMxIDAtMzcuNDQzIDguNjQ5LTQ5LjU0OCAyMi4zNjRsLTYuNDAzIDQzLjcwMXYyMzkuNTM1YzAgMzYuNDg2IDE5LjQ2NSA2Ni4wNjQgNTUuOTUxIDY2LjA2NGg4OS40MjdjNi41NyAwIDEyLjg3MiAxMC44MTcgMTcuNTE4IDE1LjQ2M2w3Ny43MDQgNzcuNzA0IDE2LjcyMSAyLjI2OGMuOTUtLjY2NCAxLjg1Ni0xLjQyIDIuNzA0LTIuMjY4bDc3LjcwNC03Ny43MDRjNC42NDYtNC42NDYgMTAuOTQ4LTcuMjU2IDE3LjUxOC03LjI1Nmg4MC41NzdjMzYuNDg2IDAgNjYuMDY0LTI5LjU3OCA2Ni4wNjQtNjYuMDY0di0yNDcuNzQyYy0uMDAxLTM2LjQ4Ny0yOS41NzktNjYuMDY1LTY2LjA2NS02Ni4wNjV6XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjZmY3ZTkyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwibTE2NC4xNTkgNDA3Ljc4NCA3Ny43MDQgNzcuNzA0YzYuOTU5IDYuOTU5IDE3Ljc3NCA3LjcxNCAyNS41NyAyLjI2OGwtOTEuNTk1LTkxLjY1Yy03LjY4NS03LjY4NS0xOC4zMjMtMTIuMDkzLTI5LjE5NC0xMi4wOTNoLTgwLjU3OWMtMjcuMzIzIDAtNDkuNTQ4LTIyLjIyNi00OS41NDgtNDkuNTQ4di0yOTEuNDQ0Yy0xMC4yNSAxMS42MzktMTYuNTE3IDI2Ljk3My0xNi41MTcgNDMuNzAxdjI0Ny43NDJjMCAzNi40ODYgMjkuNTc4IDY2LjA2NSA2Ni4wNjUgNjYuMDY1aDgwLjU3N2M2LjU3LS4wMDEgMTIuODcyIDIuNjA5IDE3LjUxNyA3LjI1NXpcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiNmZjVmN2FcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJtMzg3LjYyNiAxNzcuOTUxYy00LjAwMy0zNS42NzctMzQuMTYzLTYzLjk5LTY5Ljk4OC02Ni4zMTUtMjEuNzAxLTEuNDA4LTQxLjUzOCA2LjQwNS01Ni4xMDcgMTkuODUzLTMuMTM1IDIuODk0LTcuOTI2IDIuODk0LTExLjA2MiAwLTE0LjU2OS0xMy40NDgtMzQuNDA2LTIxLjI2MS01Ni4xMDctMTkuODUzLTguNjUzLjU2Mi0xNi45NzYgMi42MzktMjQuNjc5IDUuOTcxLTI0LjE5IDEwLjQ2MS00MC42NTUgNjAuMzQ0LTQwLjY1NSA2MC4zNDQtOC40ODYgNzUuNjMyIDkzLjczNSAxMzYuNjg2IDEyNC4xMjYgMTU0Ljc1MWwyMS4wMDUtLjgwOGMzNy44NzgtMjMuOTg4IDEyMS4xOTYtODUuMDUgMTEzLjQ2Ny0xNTMuOTQzelwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiI2ZmZlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIm0xNDIuMjM1IDE2Ny4wOWMyLjIyNC0xOS44MTggMTIuNTk0LTM3LjQwMiAyNy40NDctNDkuNDgzLTI0LjE1MyAxMC40NzUtNDIuMjc1IDMzLjMxMS00NS4zMDkgNjAuMzQ0LTguNDg1IDc1LjYzMiA5Mi43NTcgMTQxLjgyOSAxMjMuMTQ4IDE1OS44OTQgNS4yNDUgMy4xMTcgMTEuNzEyIDMuMTE3IDE2Ljk1NyAwIDIuNzAyLTEuNjA2IDUuOTg1LTMuNjEgOS42OC01Ljk1LTE5LjM3NC0xMC45MTktMTQxLjEwNS04Mi45NjItMTMxLjkyMy0xNjQuODA1elwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiI2ZmZGJkZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAge2NvbW1lbnRzX2NvdW50ID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4IGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplPVwic21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub09mTGluZXM9ezF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ9XCI0MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbj1cImxlZnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj17dGV4dENvbG9yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y29tbWVudHNfY291bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJDYXBhXzFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVCYWNrZ3JvdW5kPVwibmV3IDAgMCA1MTIgNTEyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJtNDM4Ljk4MyAxMS41NDloLTI3Ni43MmMtMzYuMDk0IDAtNjUuNjI1IDI5LjUzMS02NS42MjUgNjUuNjI1djIyLjMzaDI1MC4zMTdjMzYuMDk0IDAgNjUuNjI1IDI5LjUzMSA2NS42MjUgNjUuNjI1djE2My42MDloMjYuNDA0YzM2LjA5NCAwIDY1LjYyNS0yOS41MzEgNjUuNjI1LTY1LjYyNXYtMTg1LjkzOWMwLTM2LjA5NC0yOS41MzItNjUuNjI1LTY1LjYyNi02NS42MjV6XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiIzZjN2VkNlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIm0zOTIuNDU0IDk2LjUwNGgtMjc2LjcyYy02LjYzNiAwLTEzLjA0NyAxLjAwNi0xOS4wOTYgMi44NnYuMTRoMjUwLjMxN2MzNi4wOTQgMCA2NS42MjUgMjkuNTMxIDY1LjYyNSA2NS42MjV2MTYzLjYwOWgyNi40MDRjNi42MzYgMCAxMy4wNDctMS4wMDYgMTkuMDk2LTIuODZ2LTE2My43NDhjMC0zNi4wOTQtMjkuNTMyLTY1LjYyNi02NS42MjYtNjUuNjI2elwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiM0ZjY3ZDJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJtMzQ5Ljk1NCA5Ni41MDRoLTI3Ni43MmMtMzYuMDk0IDAtNjUuNjI1IDI5LjUzMS02NS42MjUgNjUuNjI1djE4NS45MzljMCAzNi4wOTQgMjkuNTMxIDY1LjYyNSA2NS42MjUgNjUuNjI1aDE2Ni4wODNjNy4xMiAwIDEyLjQzNSA2LjYyNiAxMC44MDcgMTMuNTU3LTQuNDA0IDE4Ljc1MS0xMS4xNDQgMzguNTgxLTIxLjEwNyA1OC45MDgtNC40NzQgOS4xMjkgNS43MDQgMTguNDEgMTQuMzQ5IDEzLjA2IDI0Ljk5Ny0xNS40NyA2MC41NjItNDEuMzYyIDkwLjUxMi03Ny45NjQgMy45MzctNC44MTEgOS44NTgtNy41NjEgMTYuMDc1LTcuNTYxIDM2LjA5NCAwIDY1LjYyNS0yOS41MzEgNjUuNjI1LTY1LjYyNXYtMTg1LjkzOGMuMDAyLTM2LjA5NC0yOS41My02NS42MjYtNjUuNjI0LTY1LjYyNnpcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjNjBiOGZlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwibTI5Mi42MjQgNDI3LjI1YzEuNjI4LTYuOTMyLTMuNjg3LTEzLjU1Ny0xMC44MDctMTMuNTU3aC00Mi41YzcuMTIgMCAxMi40MzUgNi42MjUgMTAuODA3IDEzLjU1Ny00LjQwNCAxOC43NTEtMTEuMTQ0IDM4LjU4MS0yMS4xMDcgNTguOTA4LTQuNDc0IDkuMTI5IDUuNzA0IDE4LjQxIDE0LjM0OSAxMy4wNiA5LjU5MS01LjkzNiAyMC43NC0xMy40MTEgMzIuNTI3LTIyLjQzMSA3LjYwMy0xNy4wNDkgMTMuMDA3LTMzLjY3OSAxNi43MzEtNDkuNTM3elwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiMyM2E4ZmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJtNTAuMTA5IDM0OC4wNjh2LTE4NS45MzhjMC0zNi4wOTQgMjkuNTMxLTY1LjYyNSA2NS42MjUtNjUuNjI1aC00Mi41Yy0zNi4wOTQgMC02NS42MjUgMjkuNTMxLTY1LjYyNSA2NS42MjV2MTg1LjkzOGMwIDM2LjA5NCAyOS41MzEgNjUuNjI1IDY1LjYyNSA2NS42MjVoNDIuNWMtMzYuMDk0IDAtNjUuNjI1LTI5LjUzMS02NS42MjUtNjUuNjI1elwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiMyM2E4ZmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZyBmaWxsPVwiI2RmZWJmYVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgY3g9XCI5OC41NzdcIiBjeT1cIjI2MC40MzlcIiByPVwiMjEuNzc3XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PVwiMTY4LjkxNFwiIGN5PVwiMjYwLjQzOVwiIHI9XCIyMS43NzdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgY3g9XCIyMzkuMjUxXCIgY3k9XCIyNjAuNDM5XCIgcj1cIjIxLjc3N1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBjeD1cIjMwOS41ODhcIiBjeT1cIjI2MC40MzlcIiByPVwiMjEuNzc3XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJtOTguNTc3IDI2MC40MzljMC04LjA1OSA0LjM4MS0xNS4wOTEgMTAuODg4LTE4Ljg1Ni0zLjIwNC0xLjg1NC02LjkyLTIuOTIxLTEwLjg4OC0yLjkyMS0xMi4wMjcgMC0yMS43NzcgOS43NS0yMS43NzcgMjEuNzc3czkuNzUgMjEuNzc3IDIxLjc3NyAyMS43NzdjMy45NjggMCA3LjY4NS0xLjA2NiAxMC44ODgtMi45Mi02LjUwNy0zLjc2Ny0xMC44ODgtMTAuNzk4LTEwLjg4OC0xOC44NTd6XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiI2IxZGJmY1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIm0xNjguOTE0IDI2MC40MzljMC04LjA1OSA0LjM4MS0xNS4wOTEgMTAuODg4LTE4Ljg1Ni0zLjIwNC0xLjg1NC02LjkyLTIuOTIxLTEwLjg4OC0yLjkyMS0xMi4wMjcgMC0yMS43NzcgOS43NS0yMS43NzcgMjEuNzc3czkuNzUgMjEuNzc3IDIxLjc3NyAyMS43NzdjMy45NjggMCA3LjY4NS0xLjA2NiAxMC44ODgtMi45Mi02LjUwNy0zLjc2Ny0xMC44ODgtMTAuNzk4LTEwLjg4OC0xOC44NTd6XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiI2IxZGJmY1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIm0yMzkuMjUxIDI2MC40MzljMC04LjA1OSA0LjM4MS0xNS4wOTEgMTAuODg4LTE4Ljg1Ni0zLjIwNC0xLjg1NC02LjkyMS0yLjkyMS0xMC44ODgtMi45MjEtMTIuMDI3IDAtMjEuNzc3IDkuNzUtMjEuNzc3IDIxLjc3N3M5Ljc1IDIxLjc3NyAyMS43NzcgMjEuNzc3YzMuOTY4IDAgNy42ODUtMS4wNjYgMTAuODg4LTIuOTItNi41MDctMy43NjctMTAuODg4LTEwLjc5OC0xMC44ODgtMTguODU3elwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiNiMWRiZmNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJtMzA5LjU4OCAyNjAuNDM5YzAtOC4wNTkgNC4zODEtMTUuMDkxIDEwLjg4OC0xOC44NTYtMy4yMDQtMS44NTQtNi45MjEtMi45MjEtMTAuODg4LTIuOTIxLTEyLjAyNyAwLTIxLjc3NyA5Ljc1LTIxLjc3NyAyMS43NzdzOS43NSAyMS43NzcgMjEuNzc3IDIxLjc3N2MzLjk2OCAwIDcuNjg1LTEuMDY2IDEwLjg4OC0yLjkyLTYuNTA3LTMuNzY3LTEwLjg4OC0xMC43OTgtMTAuODg4LTE4Ljg1N3pcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjYjFkYmZjXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIm02OS4xOTEgMjYwLjI1M2MwIDE2LjE0NCAxMy4xMzQgMjkuMjc3IDI5LjI3NiAyOS4yNzcgMTYuMTQ0IDAgMjkuMjc3LTEzLjEzMyAyOS4yNzctMjkuMjc3IDAtMTYuMTQzLTEzLjEzNC0yOS4yNzYtMjkuMjc3LTI5LjI3Ni0xNi4xNDIgMC0yOS4yNzYgMTMuMTMzLTI5LjI3NiAyOS4yNzZ6bTQzLjU1NCAwYzAgNy44NzItNi40MDUgMTQuMjc3LTE0LjI3NyAxNC4yNzdzLTE0LjI3Ni02LjQwNS0xNC4yNzYtMTQuMjc3IDYuNDA0LTE0LjI3NiAxNC4yNzYtMTQuMjc2IDE0LjI3NyA2LjQwNCAxNC4yNzcgMTQuMjc2elwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJtMTk4LjA4MiAyNjAuMjUzYzAtMTYuMTQzLTEzLjEzNC0yOS4yNzYtMjkuMjc3LTI5LjI3NnMtMjkuMjc2IDEzLjEzMy0yOS4yNzYgMjkuMjc2YzAgMTYuMTQ0IDEzLjEzNCAyOS4yNzcgMjkuMjc2IDI5LjI3NyAxNi4xNDMgMCAyOS4yNzctMTMuMTMzIDI5LjI3Ny0yOS4yNzd6bS00My41NTQgMGMwLTcuODcyIDYuNDA0LTE0LjI3NiAxNC4yNzYtMTQuMjc2czE0LjI3NyA2LjQwNCAxNC4yNzcgMTQuMjc2LTYuNDA1IDE0LjI3Ny0xNC4yNzcgMTQuMjc3LTE0LjI3Ni02LjQwNS0xNC4yNzYtMTQuMjc3elwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJtMjY4LjQxOSAyNjAuMjUzYzAtMTYuMTQzLTEzLjEzNC0yOS4yNzYtMjkuMjc3LTI5LjI3NnMtMjkuMjc2IDEzLjEzMy0yOS4yNzYgMjkuMjc2YzAgMTYuMTQ0IDEzLjEzNCAyOS4yNzcgMjkuMjc2IDI5LjI3NyAxNi4xNDMgMCAyOS4yNzctMTMuMTMzIDI5LjI3Ny0yOS4yNzd6bS00My41NTQgMGMwLTcuODcyIDYuNDA0LTE0LjI3NiAxNC4yNzYtMTQuMjc2czE0LjI3NyA2LjQwNCAxNC4yNzcgMTQuMjc2LTYuNDA1IDE0LjI3Ny0xNC4yNzcgMTQuMjc3LTE0LjI3Ni02LjQwNS0xNC4yNzYtMTQuMjc3elwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJtMzM4Ljc1NiAyNjAuMjUzYzAtMTYuMTQzLTEzLjEzNC0yOS4yNzYtMjkuMjc3LTI5LjI3NnMtMjkuMjc2IDEzLjEzMy0yOS4yNzYgMjkuMjc2YzAgMTYuMTQ0IDEzLjEzNCAyOS4yNzcgMjkuMjc2IDI5LjI3NyAxNi4xNDMgMCAyOS4yNzctMTMuMTMzIDI5LjI3Ny0yOS4yNzd6bS00My41NTQgMGMwLTcuODcyIDYuNDA0LTE0LjI3NiAxNC4yNzYtMTQuMjc2czE0LjI3NyA2LjQwNCAxNC4yNzcgMTQuMjc2LTYuNDA1IDE0LjI3Ny0xNC4yNzcgMTQuMjc3LTE0LjI3Ni02LjQwNS0xNC4yNzYtMTQuMjc3elwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJtNDM4Ljg3NCAzLjg2M2gtMjc2LjcyYy00MC4zMjEgMC03My4xMjYgMzIuODA0LTczLjEyNiA3My4xMjV2MTEuODNoLTE1LjkwM2MtNDAuMzIxLjAwMS03My4xMjUgMzIuODA1LTczLjEyNSA3My4xMjZ2MTg1LjkzOGMwIDQwLjMyMiAzMi44MDQgNzMuMTI1IDczLjEyNSA3My4xMjVoNzguMThjNC4xNDMgMCA3LjUtMy4zNTggNy41LTcuNXMtMy4zNTctNy41LTcuNS03LjVoLTc4LjE4Yy0zMi4wNSAwLTU4LjEyNS0yNi4wNzUtNTguMTI1LTU4LjEyNXYtMTg1LjkzOGMwLTMyLjA1IDI2LjA3NS01OC4xMjUgNTguMTI1LTU4LjEyNWgyNzYuNzIxYzMyLjA1IDAgNTguMTI1IDI2LjA3NSA1OC4xMjUgNTguMTI1djE4NS45MzhjMCAzMi4wNS0yNi4wNzUgNTguMTI1LTU4LjEyNSA1OC4xMjUtOC41NDMgMC0xNi41MTggMy43NTgtMjEuODgxIDEwLjMxMi0yOS40MTcgMzUuOTUtNjQuNDQ3IDYxLjM1NS04OC42NTMgNzYuMzM2LTIuMjU3IDEuMzkzLTQuODU1LS45Ni0zLjY2OS0zLjM4MiA5LjUxMi0xOS40MDggMTYuODA1LTM5Ljc2MSAyMS42NzUtNjAuNDk0IDIuNzI4LTExLjYxOC02LjEyOS0yMi43NzItMTguMTA5LTIyLjc3MmgtNTIuOTAzYy00LjE0MyAwLTcuNSAzLjM1OC03LjUgNy41czMuMzU3IDcuNSA3LjUgNy41aDUyLjkwM2MyLjMwMSAwIDQuMDI3IDIuMTI4IDMuNTA2IDQuMzQyLTQuNjEyIDE5LjYzOC0xMS41MjMgMzguOTI0LTIwLjU0MSA1Ny4zMjMtNy43NzYgMTUuODcyIDEwLjAyNSAzMi4wMjUgMjUuMDMyIDIyLjczOCAyNS4xNzgtMTUuNTgzIDYxLjY0Mi00Mi4wNCA5Mi4zNjgtNzkuNTkxIDIuNTAzLTMuMDU4IDYuMjQ3LTQuODEyIDEwLjI3Mi00LjgxMiA0MC4zMjEgMCA3My4xMjUtMzIuODA0IDczLjEyNS03My4xMjV2LTExLjgzaDE1LjkwM2M0MC4zMjIgMCA3My4xMjYtMzIuODA0IDczLjEyNi03My4xMjV2LTc1LjQ2OWMwLTQuMTQyLTMuMzU3LTcuNS03LjUtNy41cy03LjUgMy4zNTgtNy41IDcuNXY3NS40NjljMCAzMi4wNS0yNi4wNzUgNTguMTI1LTU4LjEyNiA1OC4xMjVoLTE1LjkwM3YtMTU5LjEwOGMwLTQwLjMyMS0zMi44MDQtNzMuMTI1LTczLjEyNS03My4xMjVoLTI0NS44MTh2LTExLjgzYzAtMzIuMDUgMjYuMDc1LTU4LjEyNSA1OC4xMjYtNTguMTI1aDI3Ni43MmMzMi4wNTEgMCA1OC4xMjYgMjYuMDc1IDU4LjEyNiA1OC4xMjV2NzUuNDY5YzAgNC4xNDIgMy4zNTcgNy41IDcuNSA3LjVzNy41LTMuMzU4IDcuNS03LjV2LTc1LjQ2OWMwLTQwLjMyMi0zMi44MDQtNzMuMTI2LTczLjEyNi03My4xMjZ6XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0hTdGFjaz5cclxuICAgICAgICAgICAgICAgICAgICA8L0hTdGFjaz5cclxuICAgICAgICAgICAgICAgICAgICA8SFN0YWNrIHNwYWNpbmc9ezJ9IGlzSW5saW5lPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgaGFzQXJyb3cgbGFiZWw9XCJQdWJsaXNoZWRcIiBwbGFjZW1lbnQ9XCJ0b3BcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgZm9udFNpemU9XCJzbVwiIGZvbnRXZWlnaHQ9XCI2MDBcIiBjb2xvcj17dGV4dENvbG9yfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7bW9tZW50KHB1Ymxpc2hlZF9hdCkuZm9ybWF0KFwiRG8gTU1NTSBZWVlZXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7cG9zaXRpdmVfcmVhY3Rpb25zX2NvdW50ID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcCBoYXNBcnJvdyBsYWJlbD1cIlJlYWN0aW9uc1wiIHBsYWNlbWVudD1cInRvcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4IGFsaWduSXRlbXM9XCJjZW50ZXJcIiBkPXtbXCJmbGV4XCIsIFwibm9uZVwiLCBcIm5vbmVcIl19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU9XCJzbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vT2ZMaW5lcz17MX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodD1cIjQwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduPVwibGVmdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPXt0ZXh0Q29sb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwb3NpdGl2ZV9yZWFjdGlvbnNfY291bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJDYXBhXzFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVCYWNrZ3JvdW5kPVwibmV3IDAgMCA1MTIgNTEyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIm00NDUuOTM2IDIwLjY1N2gtMzc5Ljg3MmMtMTkuNzMxIDAtMzcuNDQzIDguNjQ5LTQ5LjU0OCAyMi4zNjRsLTYuNDAzIDQzLjcwMXYyMzkuNTM1YzAgMzYuNDg2IDE5LjQ2NSA2Ni4wNjQgNTUuOTUxIDY2LjA2NGg4OS40MjdjNi41NyAwIDEyLjg3MiAxMC44MTcgMTcuNTE4IDE1LjQ2M2w3Ny43MDQgNzcuNzA0IDE2LjcyMSAyLjI2OGMuOTUtLjY2NCAxLjg1Ni0xLjQyIDIuNzA0LTIuMjY4bDc3LjcwNC03Ny43MDRjNC42NDYtNC42NDYgMTAuOTQ4LTcuMjU2IDE3LjUxOC03LjI1Nmg4MC41NzdjMzYuNDg2IDAgNjYuMDY0LTI5LjU3OCA2Ni4wNjQtNjYuMDY0di0yNDcuNzQyYy0uMDAxLTM2LjQ4Ny0yOS41NzktNjYuMDY1LTY2LjA2NS02Ni4wNjV6XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjZmY3ZTkyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwibTE2NC4xNTkgNDA3Ljc4NCA3Ny43MDQgNzcuNzA0YzYuOTU5IDYuOTU5IDE3Ljc3NCA3LjcxNCAyNS41NyAyLjI2OGwtOTEuNTk1LTkxLjY1Yy03LjY4NS03LjY4NS0xOC4zMjMtMTIuMDkzLTI5LjE5NC0xMi4wOTNoLTgwLjU3OWMtMjcuMzIzIDAtNDkuNTQ4LTIyLjIyNi00OS41NDgtNDkuNTQ4di0yOTEuNDQ0Yy0xMC4yNSAxMS42MzktMTYuNTE3IDI2Ljk3My0xNi41MTcgNDMuNzAxdjI0Ny43NDJjMCAzNi40ODYgMjkuNTc4IDY2LjA2NSA2Ni4wNjUgNjYuMDY1aDgwLjU3N2M2LjU3LS4wMDEgMTIuODcyIDIuNjA5IDE3LjUxNyA3LjI1NXpcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiNmZjVmN2FcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJtMzg3LjYyNiAxNzcuOTUxYy00LjAwMy0zNS42NzctMzQuMTYzLTYzLjk5LTY5Ljk4OC02Ni4zMTUtMjEuNzAxLTEuNDA4LTQxLjUzOCA2LjQwNS01Ni4xMDcgMTkuODUzLTMuMTM1IDIuODk0LTcuOTI2IDIuODk0LTExLjA2MiAwLTE0LjU2OS0xMy40NDgtMzQuNDA2LTIxLjI2MS01Ni4xMDctMTkuODUzLTguNjUzLjU2Mi0xNi45NzYgMi42MzktMjQuNjc5IDUuOTcxLTI0LjE5IDEwLjQ2MS00MC42NTUgNjAuMzQ0LTQwLjY1NSA2MC4zNDQtOC40ODYgNzUuNjMyIDkzLjczNSAxMzYuNjg2IDEyNC4xMjYgMTU0Ljc1MWwyMS4wMDUtLjgwOGMzNy44NzgtMjMuOTg4IDEyMS4xOTYtODUuMDUgMTEzLjQ2Ny0xNTMuOTQzelwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiI2ZmZlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIm0xNDIuMjM1IDE2Ny4wOWMyLjIyNC0xOS44MTggMTIuNTk0LTM3LjQwMiAyNy40NDctNDkuNDgzLTI0LjE1MyAxMC40NzUtNDIuMjc1IDMzLjMxMS00NS4zMDkgNjAuMzQ0LTguNDg1IDc1LjYzMiA5Mi43NTcgMTQxLjgyOSAxMjMuMTQ4IDE1OS44OTQgNS4yNDUgMy4xMTcgMTEuNzEyIDMuMTE3IDE2Ljk1NyAwIDIuNzAyLTEuNjA2IDUuOTg1LTMuNjEgOS42OC01Ljk1LTE5LjM3NC0xMC45MTktMTQxLjEwNS04Mi45NjItMTMxLjkyMy0xNjQuODA1elwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiI2ZmZGJkZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAge2NvbW1lbnRzX2NvdW50ID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcCBoYXNBcnJvdyBsYWJlbD1cIkNvbW1lbnRzXCIgcGxhY2VtZW50PVwidG9wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXggYWxpZ25JdGVtcz1cImNlbnRlclwiIGQ9e1tcImZsZXhcIiwgXCJub25lXCIsIFwibm9uZVwiXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZT1cInNtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9PZkxpbmVzPXsxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0PVwiNDAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ249XCJsZWZ0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9e3RleHRDb2xvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvbW1lbnRzX2NvdW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiQ2FwYV8xXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlQmFja2dyb3VuZD1cIm5ldyAwIDAgNTEyIDUxMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjIwcHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjIwcHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwibTQzOC45ODMgMTEuNTQ5aC0yNzYuNzJjLTM2LjA5NCAwLTY1LjYyNSAyOS41MzEtNjUuNjI1IDY1LjYyNXYyMi4zM2gyNTAuMzE3YzM2LjA5NCAwIDY1LjYyNSAyOS41MzEgNjUuNjI1IDY1LjYyNXYxNjMuNjA5aDI2LjQwNGMzNi4wOTQgMCA2NS42MjUtMjkuNTMxIDY1LjYyNS02NS42MjV2LTE4NS45MzljMC0zNi4wOTQtMjkuNTMyLTY1LjYyNS02NS42MjYtNjUuNjI1elwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiM2YzdlZDZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJtMzkyLjQ1NCA5Ni41MDRoLTI3Ni43MmMtNi42MzYgMC0xMy4wNDcgMS4wMDYtMTkuMDk2IDIuODZ2LjE0aDI1MC4zMTdjMzYuMDk0IDAgNjUuNjI1IDI5LjUzMSA2NS42MjUgNjUuNjI1djE2My42MDloMjYuNDA0YzYuNjM2IDAgMTMuMDQ3LTEuMDA2IDE5LjA5Ni0yLjg2di0xNjMuNzQ4YzAtMzYuMDk0LTI5LjUzMi02NS42MjYtNjUuNjI2LTY1LjYyNnpcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjNGY2N2QyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwibTM0OS45NTQgOTYuNTA0aC0yNzYuNzJjLTM2LjA5NCAwLTY1LjYyNSAyOS41MzEtNjUuNjI1IDY1LjYyNXYxODUuOTM5YzAgMzYuMDk0IDI5LjUzMSA2NS42MjUgNjUuNjI1IDY1LjYyNWgxNjYuMDgzYzcuMTIgMCAxMi40MzUgNi42MjYgMTAuODA3IDEzLjU1Ny00LjQwNCAxOC43NTEtMTEuMTQ0IDM4LjU4MS0yMS4xMDcgNTguOTA4LTQuNDc0IDkuMTI5IDUuNzA0IDE4LjQxIDE0LjM0OSAxMy4wNiAyNC45OTctMTUuNDcgNjAuNTYyLTQxLjM2MiA5MC41MTItNzcuOTY0IDMuOTM3LTQuODExIDkuODU4LTcuNTYxIDE2LjA3NS03LjU2MSAzNi4wOTQgMCA2NS42MjUtMjkuNTMxIDY1LjYyNS02NS42MjV2LTE4NS45MzhjLjAwMi0zNi4wOTQtMjkuNTMtNjUuNjI2LTY1LjYyNC02NS42MjZ6XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiIzYwYjhmZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIm0yOTIuNjI0IDQyNy4yNWMxLjYyOC02LjkzMi0zLjY4Ny0xMy41NTctMTAuODA3LTEzLjU1N2gtNDIuNWM3LjEyIDAgMTIuNDM1IDYuNjI1IDEwLjgwNyAxMy41NTctNC40MDQgMTguNzUxLTExLjE0NCAzOC41ODEtMjEuMTA3IDU4LjkwOC00LjQ3NCA5LjEyOSA1LjcwNCAxOC40MSAxNC4zNDkgMTMuMDYgOS41OTEtNS45MzYgMjAuNzQtMTMuNDExIDMyLjUyNy0yMi40MzEgNy42MDMtMTcuMDQ5IDEzLjAwNy0zMy42NzkgMTYuNzMxLTQ5LjUzN3pcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjMjNhOGZlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwibTUwLjEwOSAzNDguMDY4di0xODUuOTM4YzAtMzYuMDk0IDI5LjUzMS02NS42MjUgNjUuNjI1LTY1LjYyNWgtNDIuNWMtMzYuMDk0IDAtNjUuNjI1IDI5LjUzMS02NS42MjUgNjUuNjI1djE4NS45MzhjMCAzNi4wOTQgMjkuNTMxIDY1LjYyNSA2NS42MjUgNjUuNjI1aDQyLjVjLTM2LjA5NCAwLTY1LjYyNS0yOS41MzEtNjUuNjI1LTY1LjYyNXpcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjMjNhOGZlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgZmlsbD1cIiNkZmViZmFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PVwiOTguNTc3XCIgY3k9XCIyNjAuNDM5XCIgcj1cIjIxLjc3N1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBjeD1cIjE2OC45MTRcIiBjeT1cIjI2MC40MzlcIiByPVwiMjEuNzc3XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PVwiMjM5LjI1MVwiIGN5PVwiMjYwLjQzOVwiIHI9XCIyMS43NzdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgY3g9XCIzMDkuNTg4XCIgY3k9XCIyNjAuNDM5XCIgcj1cIjIxLjc3N1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwibTk4LjU3NyAyNjAuNDM5YzAtOC4wNTkgNC4zODEtMTUuMDkxIDEwLjg4OC0xOC44NTYtMy4yMDQtMS44NTQtNi45Mi0yLjkyMS0xMC44ODgtMi45MjEtMTIuMDI3IDAtMjEuNzc3IDkuNzUtMjEuNzc3IDIxLjc3N3M5Ljc1IDIxLjc3NyAyMS43NzcgMjEuNzc3YzMuOTY4IDAgNy42ODUtMS4wNjYgMTAuODg4LTIuOTItNi41MDctMy43NjctMTAuODg4LTEwLjc5OC0xMC44ODgtMTguODU3elwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiNiMWRiZmNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJtMTY4LjkxNCAyNjAuNDM5YzAtOC4wNTkgNC4zODEtMTUuMDkxIDEwLjg4OC0xOC44NTYtMy4yMDQtMS44NTQtNi45Mi0yLjkyMS0xMC44ODgtMi45MjEtMTIuMDI3IDAtMjEuNzc3IDkuNzUtMjEuNzc3IDIxLjc3N3M5Ljc1IDIxLjc3NyAyMS43NzcgMjEuNzc3YzMuOTY4IDAgNy42ODUtMS4wNjYgMTAuODg4LTIuOTItNi41MDctMy43NjctMTAuODg4LTEwLjc5OC0xMC44ODgtMTguODU3elwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiNiMWRiZmNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJtMjM5LjI1MSAyNjAuNDM5YzAtOC4wNTkgNC4zODEtMTUuMDkxIDEwLjg4OC0xOC44NTYtMy4yMDQtMS44NTQtNi45MjEtMi45MjEtMTAuODg4LTIuOTIxLTEyLjAyNyAwLTIxLjc3NyA5Ljc1LTIxLjc3NyAyMS43NzdzOS43NSAyMS43NzcgMjEuNzc3IDIxLjc3N2MzLjk2OCAwIDcuNjg1LTEuMDY2IDEwLjg4OC0yLjkyLTYuNTA3LTMuNzY3LTEwLjg4OC0xMC43OTgtMTAuODg4LTE4Ljg1N3pcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjYjFkYmZjXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwibTMwOS41ODggMjYwLjQzOWMwLTguMDU5IDQuMzgxLTE1LjA5MSAxMC44ODgtMTguODU2LTMuMjA0LTEuODU0LTYuOTIxLTIuOTIxLTEwLjg4OC0yLjkyMS0xMi4wMjcgMC0yMS43NzcgOS43NS0yMS43NzcgMjEuNzc3czkuNzUgMjEuNzc3IDIxLjc3NyAyMS43NzdjMy45NjggMCA3LjY4NS0xLjA2NiAxMC44ODgtMi45Mi02LjUwNy0zLjc2Ny0xMC44ODgtMTAuNzk4LTEwLjg4OC0xOC44NTd6XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiI2IxZGJmY1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJtNjkuMTkxIDI2MC4yNTNjMCAxNi4xNDQgMTMuMTM0IDI5LjI3NyAyOS4yNzYgMjkuMjc3IDE2LjE0NCAwIDI5LjI3Ny0xMy4xMzMgMjkuMjc3LTI5LjI3NyAwLTE2LjE0My0xMy4xMzQtMjkuMjc2LTI5LjI3Ny0yOS4yNzYtMTYuMTQyIDAtMjkuMjc2IDEzLjEzMy0yOS4yNzYgMjkuMjc2em00My41NTQgMGMwIDcuODcyLTYuNDA1IDE0LjI3Ny0xNC4yNzcgMTQuMjc3cy0xNC4yNzYtNi40MDUtMTQuMjc2LTE0LjI3NyA2LjQwNC0xNC4yNzYgMTQuMjc2LTE0LjI3NiAxNC4yNzcgNi40MDQgMTQuMjc3IDE0LjI3NnpcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwibTE5OC4wODIgMjYwLjI1M2MwLTE2LjE0My0xMy4xMzQtMjkuMjc2LTI5LjI3Ny0yOS4yNzZzLTI5LjI3NiAxMy4xMzMtMjkuMjc2IDI5LjI3NmMwIDE2LjE0NCAxMy4xMzQgMjkuMjc3IDI5LjI3NiAyOS4yNzcgMTYuMTQzIDAgMjkuMjc3LTEzLjEzMyAyOS4yNzctMjkuMjc3em0tNDMuNTU0IDBjMC03Ljg3MiA2LjQwNC0xNC4yNzYgMTQuMjc2LTE0LjI3NnMxNC4yNzcgNi40MDQgMTQuMjc3IDE0LjI3Ni02LjQwNSAxNC4yNzctMTQuMjc3IDE0LjI3Ny0xNC4yNzYtNi40MDUtMTQuMjc2LTE0LjI3N3pcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwibTI2OC40MTkgMjYwLjI1M2MwLTE2LjE0My0xMy4xMzQtMjkuMjc2LTI5LjI3Ny0yOS4yNzZzLTI5LjI3NiAxMy4xMzMtMjkuMjc2IDI5LjI3NmMwIDE2LjE0NCAxMy4xMzQgMjkuMjc3IDI5LjI3NiAyOS4yNzcgMTYuMTQzIDAgMjkuMjc3LTEzLjEzMyAyOS4yNzctMjkuMjc3em0tNDMuNTU0IDBjMC03Ljg3MiA2LjQwNC0xNC4yNzYgMTQuMjc2LTE0LjI3NnMxNC4yNzcgNi40MDQgMTQuMjc3IDE0LjI3Ni02LjQwNSAxNC4yNzctMTQuMjc3IDE0LjI3Ny0xNC4yNzYtNi40MDUtMTQuMjc2LTE0LjI3N3pcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwibTMzOC43NTYgMjYwLjI1M2MwLTE2LjE0My0xMy4xMzQtMjkuMjc2LTI5LjI3Ny0yOS4yNzZzLTI5LjI3NiAxMy4xMzMtMjkuMjc2IDI5LjI3NmMwIDE2LjE0NCAxMy4xMzQgMjkuMjc3IDI5LjI3NiAyOS4yNzcgMTYuMTQzIDAgMjkuMjc3LTEzLjEzMyAyOS4yNzctMjkuMjc3em0tNDMuNTU0IDBjMC03Ljg3MiA2LjQwNC0xNC4yNzYgMTQuMjc2LTE0LjI3NnMxNC4yNzcgNi40MDQgMTQuMjc3IDE0LjI3Ni02LjQwNSAxNC4yNzctMTQuMjc3IDE0LjI3Ny0xNC4yNzYtNi40MDUtMTQuMjc2LTE0LjI3N3pcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwibTQzOC44NzQgMy44NjNoLTI3Ni43MmMtNDAuMzIxIDAtNzMuMTI2IDMyLjgwNC03My4xMjYgNzMuMTI1djExLjgzaC0xNS45MDNjLTQwLjMyMS4wMDEtNzMuMTI1IDMyLjgwNS03My4xMjUgNzMuMTI2djE4NS45MzhjMCA0MC4zMjIgMzIuODA0IDczLjEyNSA3My4xMjUgNzMuMTI1aDc4LjE4YzQuMTQzIDAgNy41LTMuMzU4IDcuNS03LjVzLTMuMzU3LTcuNS03LjUtNy41aC03OC4xOGMtMzIuMDUgMC01OC4xMjUtMjYuMDc1LTU4LjEyNS01OC4xMjV2LTE4NS45MzhjMC0zMi4wNSAyNi4wNzUtNTguMTI1IDU4LjEyNS01OC4xMjVoMjc2LjcyMWMzMi4wNSAwIDU4LjEyNSAyNi4wNzUgNTguMTI1IDU4LjEyNXYxODUuOTM4YzAgMzIuMDUtMjYuMDc1IDU4LjEyNS01OC4xMjUgNTguMTI1LTguNTQzIDAtMTYuNTE4IDMuNzU4LTIxLjg4MSAxMC4zMTItMjkuNDE3IDM1Ljk1LTY0LjQ0NyA2MS4zNTUtODguNjUzIDc2LjMzNi0yLjI1NyAxLjM5My00Ljg1NS0uOTYtMy42NjktMy4zODIgOS41MTItMTkuNDA4IDE2LjgwNS0zOS43NjEgMjEuNjc1LTYwLjQ5NCAyLjcyOC0xMS42MTgtNi4xMjktMjIuNzcyLTE4LjEwOS0yMi43NzJoLTUyLjkwM2MtNC4xNDMgMC03LjUgMy4zNTgtNy41IDcuNXMzLjM1NyA3LjUgNy41IDcuNWg1Mi45MDNjMi4zMDEgMCA0LjAyNyAyLjEyOCAzLjUwNiA0LjM0Mi00LjYxMiAxOS42MzgtMTEuNTIzIDM4LjkyNC0yMC41NDEgNTcuMzIzLTcuNzc2IDE1Ljg3MiAxMC4wMjUgMzIuMDI1IDI1LjAzMiAyMi43MzggMjUuMTc4LTE1LjU4MyA2MS42NDItNDIuMDQgOTIuMzY4LTc5LjU5MSAyLjUwMy0zLjA1OCA2LjI0Ny00LjgxMiAxMC4yNzItNC44MTIgNDAuMzIxIDAgNzMuMTI1LTMyLjgwNCA3My4xMjUtNzMuMTI1di0xMS44M2gxNS45MDNjNDAuMzIyIDAgNzMuMTI2LTMyLjgwNCA3My4xMjYtNzMuMTI1di03NS40NjljMC00LjE0Mi0zLjM1Ny03LjUtNy41LTcuNXMtNy41IDMuMzU4LTcuNSA3LjV2NzUuNDY5YzAgMzIuMDUtMjYuMDc1IDU4LjEyNS01OC4xMjYgNTguMTI1aC0xNS45MDN2LTE1OS4xMDhjMC00MC4zMjEtMzIuODA0LTczLjEyNS03My4xMjUtNzMuMTI1aC0yNDUuODE4di0xMS44M2MwLTMyLjA1IDI2LjA3NS01OC4xMjUgNTguMTI2LTU4LjEyNWgyNzYuNzJjMzIuMDUxIDAgNTguMTI2IDI2LjA3NSA1OC4xMjYgNTguMTI1djc1LjQ2OWMwIDQuMTQyIDMuMzU3IDcuNSA3LjUgNy41czcuNS0zLjM1OCA3LjUtNy41di03NS40NjljMC00MC4zMjItMzIuODA0LTczLjEyNi03My4xMjYtNzMuMTI2elwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9IU3RhY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHQgYWxpZ249XCJsZWZ0XCIgZm9udFNpemU9XCJtZFwiIG5vT2ZMaW5lcz17MX0gY29sb3I9e3RleHRDb2xvcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7ZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICA8L1ZTdGFjaz5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZFRyYW5zaXRpb24+XHJcbiAgICAgICAgICAgICAgPC9Nb3Rpb25Cb3g+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICl9XHJcbiAgICAgIDwvU2ltcGxlR3JpZD5cclxuICAgICAgPEhTdGFjayBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiIHdpZHRoPVwiMTAwJVwiPlxyXG4gICAgICAgIDxOZXh0TGluayBocmVmPScvYmxvZycgcGFzc0hyZWY+XHJcbiAgICAgICAgICA8SFN0YWNrIHNwYWNpbmc9ezJ9IGFzPXtMaW5rfSBjb2xvcj17bGlua0NvbG9yfT5cclxuICAgICAgICAgICAgPFRleHQgZm9udFNpemU9J3NtJz5cclxuICAgICAgICAgICAgICBNb3JlIEFydGljbGVzXHJcbiAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgPEJveCBoZWlnaHQ9XCIxLjJyZW1cIiB3aWR0aD1cIjEuMnJlbVwiPlxyXG4gICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyMCAyMFwiXHJcbiAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxyXG4gICAgICAgICAgICAgICAgICBkPVwiTTYuNjcyIDEuOTExYTEgMSAwIDEwLTEuOTMyLjUxOGwuMjU5Ljk2NmExIDEgMCAwMDEuOTMyLS41MThsLS4yNi0uOTY2ek0yLjQyOSA0Ljc0YTEgMSAwIDEwLS41MTcgMS45MzJsLjk2Ni4yNTlhMSAxIDAgMDAuNTE3LTEuOTMybC0uOTY2LS4yNnptOC44MTQtLjU2OWExIDEgMCAwMC0xLjQxNS0xLjQxNGwtLjcwNy43MDdhMSAxIDAgMTAxLjQxNSAxLjQxNWwuNzA3LS43MDh6bS03LjA3MSA3LjA3MmwuNzA3LS43MDdBMSAxIDAgMDAzLjQ2NSA5LjEybC0uNzA4LjcwN2ExIDEgMCAwMDEuNDE1IDEuNDE1em0zLjItNS4xNzFhMSAxIDAgMDAtMS4zIDEuM2w0IDEwYTEgMSAwIDAwMS44MjMuMDc1bDEuMzgtMi43NTkgMy4wMTggMy4wMmExIDEgMCAwMDEuNDE0LTEuNDE1bC0zLjAxOS0zLjAyIDIuNzYtMS4zNzlhMSAxIDAgMDAtLjA3Ni0xLjgyMmwtMTAtNHpcIlxyXG4gICAgICAgICAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxyXG4gICAgICAgICAgICAgICAgLz48L3N2Zz5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICA8L0hTdGFjaz5cclxuICAgICAgICA8L05leHRMaW5rPlxyXG4gICAgICA8L0hTdGFjaz5cclxuICAgIDwvVlN0YWNrPlxyXG5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9wdWxhckFydGljbGVzO1xyXG4iLCJpbXBvcnQge1xyXG4gIEZsZXgsXHJcbiAgQXZhdGFyLFxyXG4gIEJveCxcclxuICBUZXh0LFxyXG4gIEJhZGdlLFxyXG4gIFN0YWNrLFxyXG4gIExpbmssXHJcbiAgVW5vcmRlcmVkTGlzdCxcclxuICBMaXN0SXRlbSxcclxuICB1c2VDb2xvck1vZGVWYWx1ZSxcclxuICBUb29sdGlwXHJcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IHsgTW90aW9uQm94LCBNb3Rpb25GbGV4IH0gZnJvbSBcImNvbXBvbmVudHMvdWkvbW90aW9uXCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcImNvbXBvbmVudHMvbGF5b3V0L2hlYWRlclwiO1xyXG5pbXBvcnQgTmV4dExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgeyB1c2VMaW5rQ29sb3IgfSBmcm9tICdjb21wb25lbnRzL3VpL3RoZW1lJ1xyXG5pbXBvcnQgUG9wdWxhckFydGljbGVzIGZyb20gXCIuL1BvcHVsYXJBcnRpY2xlc1wiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHsgUHJvcHMgfSBmcm9tIFwiaW50ZXJmYWNlcy9pbnRlcmZhY2VcIjtcclxuaW1wb3J0IFN0YXR1cyBmcm9tIFwiZGF0YS9TdGF0dXNcIjtcclxuXHJcblxyXG5jb25zdCBBTklNQVRJT05fRFVSQVRJT04gPSAwLjU7XHJcbmNvbnN0IE9SQU5HRSA9IFwiI2ZmOTQwMFwiO1xyXG5cclxuY29uc3QgSG9tZTogUmVhY3QuRkM8UHJvcHM+ID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IHsgcG9zdHMgfSA9IHByb3BzO1xyXG5cclxuICBjb25zdCBsaW5rQ29sb3IgPSB1c2VMaW5rQ29sb3IoKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZsZXggZGlyZWN0aW9uPVwiY29sdW1uXCIgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgPEZsZXggZGlyZWN0aW9uPXtbXCJjb2x1bW5cIiwgXCJjb2x1bW5cIiwgXCJyb3dcIl19PlxyXG4gICAgICAgIDxNb3Rpb25Cb3hcclxuICAgICAgICAgIG9wYWNpdHk9XCIwXCJcclxuICAgICAgICAgIGluaXRpYWw9e3tcclxuICAgICAgICAgICAgdHJhbnNsYXRlWDogLTE1MCxcclxuICAgICAgICAgICAgb3BhY2l0eTogMFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIGFuaW1hdGU9e3tcclxuICAgICAgICAgICAgdHJhbnNsYXRlWDogMCxcclxuICAgICAgICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICAgICAgICAgIGR1cmF0aW9uOiBBTklNQVRJT05fRFVSQVRJT05cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIG09XCJhdXRvXCJcclxuICAgICAgICAgIG1iPXtbMTYsIDE2LCBcImF1dG9cIl19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgIDxUb29sdGlwIGhhc0Fycm93IGxhYmVsPVwibWVcIiBwbGFjZW1lbnQ9XCJib3R0b21cIj5cclxuICAgICAgICAgIDxBdmF0YXJcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcj17J3RyYW5zcGFyZW50J31cclxuICAgICAgICAgICAgc2l6ZT17XCIyeGxcIn1cclxuICAgICAgICAgICAgLy8gc3JjPXtVc2VySWNvbn1cclxuICAgICAgICAgICAgc3JjPXtcImh0dHBzOi8vYXZhdGFycy5naXRodWJ1c2VyY29udGVudC5jb20vdS83NzYzNzI4OT92PTRcIn1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICA8L01vdGlvbkJveD5cclxuICAgICAgICA8TW90aW9uRmxleFxyXG4gICAgICAgICAgbWw9e1tcImF1dG9cIiwgXCJhdXRvXCIsIDE2XX1cclxuICAgICAgICAgIG09e1tcImF1dG9cIiwgXCJpbml0aWFsXCJdfVxyXG4gICAgICAgICAgdz17W1wiOTAlXCIsIFwiODUlXCIsIFwiODAlXCJdfVxyXG4gICAgICAgICAgbWF4Vz1cIjgwMHB4XCJcclxuICAgICAgICAgIG9wYWNpdHk9XCIwXCJcclxuICAgICAgICAgIGp1c3RpZnk9XCJjZW50ZXJcIlxyXG4gICAgICAgICAgZGlyZWN0aW9uPVwiY29sdW1uXCJcclxuICAgICAgICAgIGluaXRpYWw9e3tcclxuICAgICAgICAgICAgb3BhY2l0eTogMCxcclxuICAgICAgICAgICAgdHJhbnNsYXRlWDogMTUwXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgYW5pbWF0ZT17e1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICAgICAgICB0cmFuc2xhdGVYOiAwLFxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgICAgICAgICAgZHVyYXRpb246IEFOSU1BVElPTl9EVVJBVElPTlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgIDxIZWFkZXIgdW5kZXJsaW5lQ29sb3I9e09SQU5HRX0gZW1vamk9XCLwn5GLXCIgbXQ9ezB9PlxyXG4gICAgICAgICAgICBIZXkhXHJcbiAgICAgICAgICA8L0hlYWRlcj5cclxuICAgICAgICAgIDxCb3ggYXM9XCJoMlwiIGZvbnRTaXplPVwiMnhsXCIgZm9udFdlaWdodD1cIjQwMFwiIHRleHRBbGlnbj1cImxlZnRcIj5cclxuICAgICAgICAgICAgTXkgbmFtZSBpc3tcIiBcIn1cclxuICAgICAgICAgICAgPEJveCBhcz1cInN0cm9uZ1wiIGZvbnRXZWlnaHQ9XCI2MDBcIj5cclxuICAgICAgICAgICAgICBNZXJ0IEthZGlyXHJcbiAgICAgICAgICAgIDwvQm94PntcIiBcIn1cclxuICAgICAgICAgICAgYW5kIEkmYXBvczttIGF7XCIgXCJ9XHJcbiAgICAgICAgICAgIDxCb3ggYXM9XCJzcGFuXCIgd2hpdGVTcGFjZT1cIm5vd3JhcFwiPlxyXG4gICAgICAgICAgICBNb2JpbGUgQXBwbGljYXRpb24gRGV2ZWxvcGVyLlxyXG4gICAgICAgICAgICA8L0JveD57XCIgXCJ9XHJcbiAgICAgICAgICAgIDxCb3ggYXM9XCJzcGFuXCIgd2hpdGVTcGFjZT1cIm5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgQSBzb2Z0d2FyZSBsb3ZlciZuYnNwO1xyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgZnJvbXtcIiBcIn1cclxuICAgICAgICAgICAgPEJveCBhcz1cInNwYW5cIiB3aGl0ZVNwYWNlPVwibm93cmFwXCI+XHJcbiAgICAgICAgICAgICAgVHVya2V5IPCfh7nwn4e3XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICA8Qm94IGFzPVwiaDJcIiBmb250U2l6ZT1cIjJ4bFwiIGZvbnRXZWlnaHQ9XCI0MDBcIiBtdD17NX0gdGV4dEFsaWduPVwibGVmdFwiPlxyXG4gICAgICAgICAgSGV5LCBXZWxjb21lIHRvIE1lcnQncyBEaWdpdGFsIEVudmlyb25tZW50IEkmYXBvczttXHJcbiAgICAgICAgICBBIHBsYWNlIHRvIHNoYXJlIHdoYXQgSSd2ZSBsZWFybmVkIGFuZCB3aGF0IEkndmUgZG9uZS7wn5iKXHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8L01vdGlvbkZsZXg+XHJcbiAgICAgIDwvRmxleD5cclxuICAgIFxyXG5cclxuXHJcbiAgICAgICAgICAgIDxTdGF0dXMgLz5cclxuXHJcbiAgICAgIDxNb3Rpb25Cb3hcclxuICAgICAgICB3PVwiMTAwJVwiXHJcbiAgICAgICAgb3BhY2l0eT1cIjBcIlxyXG4gICAgICAgIGluaXRpYWw9e3tcclxuICAgICAgICAgIHRyYW5zbGF0ZVk6IDgwXHJcbiAgICAgICAgfX1cclxuICAgICAgICBhbmltYXRlPXt7XHJcbiAgICAgICAgICB0cmFuc2xhdGVZOiAwLFxyXG4gICAgICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgICAgICAgZGVsYXk6IEFOSU1BVElPTl9EVVJBVElPTiAtIDAuMSxcclxuICAgICAgICAgICAgZHVyYXRpb246IEFOSU1BVElPTl9EVVJBVElPTlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IG10PXsxMH0+XHJcbiAgICAgICAgICA8U3RhY2tcclxuICAgICAgICAgICAgbWI9ezEwfVxyXG4gICAgICAgICAgICBteD17WzAsIDAsIDEwXX1cclxuICAgICAgICAgICAgcGFkZGluZz17NH1cclxuICAgICAgICAgICAgYWxpZ249XCJzdGFydFwiXHJcbiAgICAgICAgICAgIGJvcmRlckxlZnQ9XCI0cHggc29saWRcIlxyXG4gICAgICAgICAgICBib3JkZXJDb2xvcj17XCIjNTNjOGM0XCJ9XHJcbiAgICAgICAgICAgIGNvbG9yPXtcIndoYXRzYXBwXCJ9XHJcbiAgICAgICAgICAgIF9ob3Zlcj17eyBzaGFkb3c6IFwibGdcIiB9fVxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9e3VzZUNvbG9yTW9kZVZhbHVlKFwiZ3JheS4xMDBcIiwgXCIjMWUyNTMzXCIpfVxyXG4gICAgICAgICAgICByb3VuZGVkPVwic21cIlxyXG4gICAgICAgICAgICBmb250U2l6ZT1cIm1kXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPFRleHQgdGV4dEFsaWduPVwiY2VudGVyXCIgY29sb3I9XCIjNTNjOGM0XCIgZm9udFdlaWdodD1cImJvbGRcIj5cclxuICAgICAgICAgICAgSGlnaGxpc3RzXHJcbiAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgPFVub3JkZXJlZExpc3QgdGV4dEFsaWduPVwibGVmdFwiIHBhZGRpbmdMZWZ0PXs1fSBtPXswfT5cclxuICAgICAgICAgICAgICA8TGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TmV4dExpbmsgaHJlZj17Jy9ibG9nJ30gcGFzc0hyZWY+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGNvbG9yPXtsaW5rQ29sb3J9PlxyXG4gICAgICAgICAgICAgICAgICAgIEJsb2cgcGFnZVxyXG4gICAgICAgICAgICAgICAgICAgIDxCYWRnZSBtbD1cIjFcIiBjb2xvclNjaGVtZT1cImdyZWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBOZXdcclxuICAgICAgICAgICAgICAgICAgICA8L0JhZGdlPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L05leHRMaW5rPlxyXG4gICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgPE5leHRMaW5rIGhyZWY9eycvb3Blbi1zb3VyY2UnfSBwYXNzSHJlZj5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgY29sb3I9e2xpbmtDb2xvcn0+XHJcbiAgICAgICAgICAgICAgICAgIE9wZW4gU291cmNlXHJcbiAgICAgICAgICAgICAgICAgICAgPEJhZGdlIG1sPVwiMVwiIGNvbG9yU2NoZW1lPVwiYmx1ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgTmV3XHJcbiAgICAgICAgICAgICAgICAgICAgPC9CYWRnZT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9OZXh0TGluaz5cclxuICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgIDxOZXh0TGluayBocmVmPXsnL3Byb2plY3RzJ30gcGFzc0hyZWY+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGNvbG9yPXtsaW5rQ29sb3J9PlxyXG4gICAgICAgICAgICAgICAgICBQcm9qZWN0cyBwYWdlXHJcbiAgICAgICAgICAgICAgICAgIDxCYWRnZSBtbD1cIjFcIiBjb2xvclNjaGVtZT1cInJlZFwiPlxyXG4gICAgICAgICAgICAgICAgICBiZWluZyBkZXNpZ25lZFxyXG4gICAgICAgICAgICAgICAgICAgIDwvQmFkZ2U+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvTmV4dExpbms+XHJcbiAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgPC9Vbm9yZGVyZWRMaXN0PlxyXG4gICAgICAgICAgPC9TdGFjaz5cclxuICAgICAgICAgIDxQb3B1bGFyQXJ0aWNsZXMgcG9zdHM9e3Bvc3RzfSAvPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vdGlvbkJveD5cclxuICAgIDwvRmxleD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIiwiaW1wb3J0IHsgQm94LCBCb3hQcm9wcyB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xyXG5pbXBvcnQgeyBQcm9wc1dpdGhDaGlsZHJlbiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFVuZGVybGluZWRUZXh0IGZyb20gJ2NvbXBvbmVudHMvdWkvdW5kZXJsaW5lZC10ZXh0JztcclxuXHJcbmludGVyZmFjZSBQcm9wcyBleHRlbmRzIEJveFByb3BzIHtcclxuICB1bmRlcmxpbmVDb2xvcj86IHN0cmluZztcclxuICBlbW9qaT86IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgSGVhZGVyID0gKHsgY2hpbGRyZW4sIHVuZGVybGluZUNvbG9yLCBlbW9qaSwgLi4ucHJvcHMgfTogUHJvcHNXaXRoQ2hpbGRyZW48UHJvcHM+KSA9PiAoXHJcbiAgPEJveCBhcz1cImgxXCIgbXQ9ezEwfSBtYj17Nn0gZm9udFNpemU9XCIzeGxcIiBsaW5lSGVpZ2h0PVwic2hvcnRlclwiIGZvbnRXZWlnaHQ9XCJib2xkXCIgey4uLnByb3BzfSB0ZXh0QWxpZ249XCJsZWZ0XCI+XHJcbiAgICA8VW5kZXJsaW5lZFRleHQgY29sb3I9e3VuZGVybGluZUNvbG9yfT57Y2hpbGRyZW59PC9VbmRlcmxpbmVkVGV4dD5cclxuICAgIHtlbW9qaSA/ICcgJyArIGVtb2ppIDogJyd9XHJcbiAgPC9Cb3g+XHJcbik7XHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuIiwiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5cclxudHlwZSBQcm9wcyA9IHtcclxuICAgIHRpdGxlOiBzdHJpbmc7XHJcbiAgICBkZXNjcmlwdGlvbj86IHN0cmluZztcclxuICAgIGtleXdvcmRzPzogc3RyaW5nO1xyXG4gICAgaW1hZ2U/OiBzdHJpbmc7XHJcbiAgfTtcclxuXHJcbmNvbnN0IE1ldGEgPSAoeyB0aXRsZSwga2V5d29yZHMsIGRlc2NyaXB0aW9uLCBpbWFnZSB9IDogUHJvcHMpOiBKU1guRWxlbWVudCA9PiB7XHJcbiAgdGl0bGUgPSB0aXRsZS5pbmNsdWRlcygnTWVydCcpID8gdGl0bGUgOiB0aXRsZS5jb25jYXQoJyB8IE1lcnQgS2FkaXInKVxyXG4gIHJldHVybiAoXHJcbiAgICA8SGVhZD5cclxuICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cclxuICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cclxuICAgICAgPG1ldGEgbmFtZT1cImtleXdvcmRzXCIgY29udGVudD17a2V5d29yZHN9IC8+XHJcbiAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2Rlc2NyaXB0aW9ufSAvPlxyXG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD17dGl0bGV9IC8+XHJcbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PXtpbWFnZSA/IGltYWdlIDogXCIvbG9nbzUxMi5wbmdcIn0gLz5cclxuICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxyXG4gICAgPC9IZWFkPlxyXG4gICk7XHJcbn07XHJcblxyXG5NZXRhLmRlZmF1bHRQcm9wcyA9IHtcclxuICB0aXRsZTogXCJNZXJ0IEthZGlyIC0gTW9iaWxlIERldmVsb3BlclwiLFxyXG4gIGtleXdvcmRzOiBcIk1vYmlsIEFwcGxpY2F0aW9uIERldmVsb3BlclwiLFxyXG4gIGRlc2NyaXB0aW9uOiBcIlNvZnR3YXJlIHN0dWRlbnQgbW9iaWxlIGxvdmVyLlwiXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZXRhO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQsIFJlYWN0Tm9kZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xyXG5pbXBvcnQgTWV0YSBmcm9tIFwiLi9tZXRhXCI7XHJcblxyXG50eXBlIFByb3BzID0ge1xyXG4gIGNoaWxkcmVuOiBSZWFjdE5vZGU7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICBkZXNjcmlwdGlvbj86IHN0cmluZztcclxuICBrZXl3b3Jkcz86IHN0cmluZztcclxuICBpbWFnZT86IHN0cmluZztcclxufTtcclxuXHJcbmNvbnN0IHZhcmlhbnRzID0ge1xyXG4gIGhpZGRlbjogeyBvcGFjaXR5OiAwLCB4OiAtMjAwLCB5OiAwIH0sXHJcbiAgZW50ZXI6IHsgb3BhY2l0eTogMSwgeDogMCwgeTogMCB9LFxyXG4gIGV4aXQ6IHsgb3BhY2l0eTogMCwgeDogMCwgeTogLTEwMCB9XHJcbn07XHJcblxyXG5jb25zdCBQYWdlTGF5b3V0ID0gKHtcclxuICBjaGlsZHJlbixcclxuICB0aXRsZSxcclxuICBkZXNjcmlwdGlvbixcclxuICBrZXl3b3JkcyxcclxuICBpbWFnZVxyXG59OiBQcm9wcyk6IEpTWC5FbGVtZW50ID0+IChcclxuICA8RnJhZ21lbnQ+XHJcbiAgICA8TWV0YVxyXG4gICAgICB0aXRsZT17dGl0bGV9XHJcbiAgICAgIGRlc2NyaXB0aW9uPXtkZXNjcmlwdGlvbn1cclxuICAgICAga2V5d29yZHM9e2tleXdvcmRzfVxyXG4gICAgICBpbWFnZT17aW1hZ2V9XHJcbiAgICAvPlxyXG4gICAgPG1vdGlvbi5tYWluXHJcbiAgICAgIGluaXRpYWw9XCJoaWRkZW5cIlxyXG4gICAgICBhbmltYXRlPVwiZW50ZXJcIlxyXG4gICAgICBleGl0PVwiZXhpdFwiXHJcbiAgICAgIHZhcmlhbnRzPXt2YXJpYW50c31cclxuICAgICAgdHJhbnNpdGlvbj17eyB0eXBlOiBcImxpbmVhclwiIH19XHJcbiAgICA+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvbW90aW9uLm1haW4+XHJcbiAgPC9GcmFnbWVudD5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhZ2VMYXlvdXQ7XHJcbiIsImltcG9ydCB7XHJcbiAgQm94LFxyXG4gIEZsZXgsXHJcbiAgSW1hZ2UsXHJcbiAgZm9yd2FyZFJlZixcclxuICBUZXh0LFxyXG4gIExpc3RcclxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgeyBtb3Rpb24sIGlzVmFsaWRNb3Rpb25Qcm9wIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcclxuXHJcbmV4cG9ydCBjb25zdCBNb3Rpb25Cb3ggPSBtb3Rpb24oXHJcbiAgZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4ge1xyXG4gICAgY29uc3QgY2hha3JhUHJvcHMgPSBPYmplY3QuZnJvbUVudHJpZXMoXHJcbiAgICAgIC8vIGRvIG5vdCBwYXNzIGZyYW1lciBwcm9wcyB0byBET00gZWxlbWVudFxyXG4gICAgICBPYmplY3QuZW50cmllcyhwcm9wcykuZmlsdGVyKChba2V5XSkgPT4gIWlzVmFsaWRNb3Rpb25Qcm9wKGtleSkpXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIDxCb3ggcmVmPXtyZWZ9IHsuLi5jaGFrcmFQcm9wc30gLz47XHJcbiAgfSlcclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBNb3Rpb25GbGV4ID0gbW90aW9uKFxyXG4gIGZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHtcclxuICAgIGNvbnN0IGNoYWtyYVByb3BzID0gT2JqZWN0LmZyb21FbnRyaWVzKFxyXG4gICAgICAvLyBkbyBub3QgcGFzcyBmcmFtZXIgcHJvcHMgdG8gRE9NIGVsZW1lbnRcclxuICAgICAgT2JqZWN0LmVudHJpZXMocHJvcHMpLmZpbHRlcigoW2tleV0pID0+ICFpc1ZhbGlkTW90aW9uUHJvcChrZXkpKVxyXG4gICAgKTtcclxuICAgIHJldHVybiA8RmxleCByZWY9e3JlZn0gey4uLmNoYWtyYVByb3BzfSAvPjtcclxuICB9KVxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1vdGlvblRleHQgPSBtb3Rpb24oXHJcbiAgZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4ge1xyXG4gICAgY29uc3QgY2hha3JhUHJvcHMgPSBPYmplY3QuZnJvbUVudHJpZXMoXHJcbiAgICAgIC8vIGRvIG5vdCBwYXNzIGZyYW1lciBwcm9wcyB0byBET00gZWxlbWVudFxyXG4gICAgICBPYmplY3QuZW50cmllcyhwcm9wcykuZmlsdGVyKChba2V5XSkgPT4gIWlzVmFsaWRNb3Rpb25Qcm9wKGtleSkpXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIDxUZXh0IHJlZj17cmVmfSB7Li4uY2hha3JhUHJvcHN9IC8+O1xyXG4gIH0pXHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgTW90aW9uTGlzdCA9IG1vdGlvbihcclxuICBmb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7XHJcbiAgICBjb25zdCBjaGFrcmFQcm9wcyA9IE9iamVjdC5mcm9tRW50cmllcyhcclxuICAgICAgLy8gZG8gbm90IHBhc3MgZnJhbWVyIHByb3BzIHRvIERPTSBlbGVtZW50XHJcbiAgICAgIE9iamVjdC5lbnRyaWVzKHByb3BzKS5maWx0ZXIoKFtrZXldKSA9PiAhaXNWYWxpZE1vdGlvblByb3Aoa2V5KSlcclxuICAgICk7XHJcbiAgICByZXR1cm4gPExpc3QgcmVmPXtyZWZ9IHsuLi5jaGFrcmFQcm9wc30gLz47XHJcbiAgfSlcclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBNb3Rpb25JbWFnZSA9IG1vdGlvbihcclxuICBmb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7XHJcbiAgICBjb25zdCBjaGFrcmFQcm9wcyA9IE9iamVjdC5mcm9tRW50cmllcyhcclxuICAgICAgT2JqZWN0LmVudHJpZXMocHJvcHMpLmZpbHRlcigoW2tleV0pID0+ICFpc1ZhbGlkTW90aW9uUHJvcChrZXkpKVxyXG4gICAgKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICByZWY9e3JlZn1cclxuICAgICAgICAgIGZhbGxiYWNrU3JjPXsnL2Fzc2V0cy9pbWFnZXMvcGxhY2Vob2xkZXIucG5nJ31cclxuICAgICAgICAgIHsuLi5jaGFrcmFQcm9wc31cclxuICAgICAgICAvPlxyXG4gICAgKTtcclxuICB9KVxyXG4pO1xyXG4iLCJpbXBvcnQgeyBTbGlkZUZhZGUgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgeyBNb3Rpb25Cb3ggfSBmcm9tIFwiLi9tb3Rpb25cIjtcclxuXHJcbmNvbnN0IHN0YWdnZXJWYXJpYW50cyA9IHtcclxuICBpbml0aWFsOiB7XHJcbiAgICBvcGFjaXR5OiAwLFxyXG4gICAgdHJhbnNsYXRlWTogLTIwXHJcbiAgfSxcclxuICBlbnRlcjoge1xyXG4gICAgdHJhbnNpdGlvbjogeyBzdGFnZ2VyQ2hpbGRyZW46IDAuMTUsIGRlbGF5Q2hpbGRyZW46IDAuNCB9XHJcbiAgfSxcclxuICBleGl0OiB7XHJcbiAgICB0cmFuc2l0aW9uOiB7IHN0YWdnZXJDaGlsZHJlbjogMC4wNSwgc3RhZ2dlckRpcmVjdGlvbjogLTEgfVxyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IHZhcmlhbnRzID0ge1xyXG4gIGluaXRpYWw6IHtcclxuICAgIG9wYWNpdHk6IDAsXHJcbiAgICB0cmFuc2xhdGVZOiAtMjBcclxuICB9LFxyXG4gIGVudGVyOiB7XHJcbiAgICB5OiAwLFxyXG4gICAgb3BhY2l0eTogMSxcclxuICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgeTogeyBzdGlmZm5lc3M6IDEwMDAsIHZlbG9jaXR5OiAtMTAwIH1cclxuICAgIH1cclxuICB9LFxyXG4gIGV4aXQ6IHtcclxuICAgIHk6IDUwLFxyXG4gICAgb3BhY2l0eTogMCxcclxuICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgeTogeyBzdGlmZm5lc3M6IDEwMDAgfVxyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBlYXNpbmcgPSBbMC42LCAtMC4wNSwgMC4wMSwgMC45OV1cclxuXHJcbmV4cG9ydCBjb25zdCBzdGFnZ2VyID0ge1xyXG4gIGFuaW1hdGU6IHtcclxuICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgc3RhZ2dlckNoaWxkcmVuOiAwLjEsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBmYWRlSW5VcCA9IHtcclxuICBpbml0aWFsOiB7XHJcbiAgICB5OiA2MCxcclxuICAgIG9wYWNpdHk6IDAsXHJcbiAgICB0cmFuc2l0aW9uOiB7IGR1cmF0aW9uOiAwLjYsIGVhc2U6IGVhc2luZyB9LFxyXG4gIH0sXHJcbiAgYW5pbWF0ZToge1xyXG4gICAgeTogMCxcclxuICAgIG9wYWNpdHk6IDEsXHJcbiAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgIGR1cmF0aW9uOiAwLjYsXHJcbiAgICAgIGVhc2U6IGVhc2luZyxcclxuICAgIH0sXHJcbiAgfSxcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBjb250YWluZXIgPSB7XHJcbiAgaGlkZGVuOiB7IG9wYWNpdHk6IDEsIHNjYWxlOiAwIH0sXHJcbiAgdmlzaWJsZToge1xyXG4gICAgb3BhY2l0eTogMSxcclxuICAgIHNjYWxlOiAxLFxyXG4gICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICBkZWxheUNoaWxkcmVuOiAwLjMsXHJcbiAgICAgIHN0YWdnZXJDaGlsZHJlbjogMC4yXHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGl0ZW0gPSB7XHJcbiAgaGlkZGVuOiB7IHk6IDIwLCBvcGFjaXR5OiAwIH0sXHJcbiAgdmlzaWJsZToge1xyXG4gICAgeTogMCxcclxuICAgIG9wYWNpdHk6IDFcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgUGFnZVNsaWRlRmFkZSA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICByZXR1cm4gPFNsaWRlRmFkZSBpbj57Y2hpbGRyZW59PC9TbGlkZUZhZGU+O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFN0YWdnZXJDaGlsZHJlbiA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPE1vdGlvbkJveFxyXG4gICAgICBhbmltYXRlPXt7XHJcbiAgICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgICB0cmFuc2xhdGVZOiAwXHJcbiAgICAgIH19XHJcbiAgICAgIHZhcmlhbnRzPXtzdGFnZ2VyVmFyaWFudHN9XHJcbiAgICA+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvTW90aW9uQm94PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgQ2FyZFRyYW5zaXRpb24gPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgcmV0dXJuIDxNb3Rpb25Cb3ggdmFyaWFudHM9e3ZhcmlhbnRzfT57Y2hpbGRyZW59PC9Nb3Rpb25Cb3g+O1xyXG59O1xyXG4iLCJpbXBvcnQgeyBUaGVtZU92ZXJyaWRlLCB1c2VDb2xvck1vZGVWYWx1ZSwgdGhlbWUgYXMgZGVmYXVsdFRoZW1lIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcclxuaW1wb3J0IHsgdHJhbnNwYXJlbnRpemUgfSBmcm9tICdAY2hha3JhLXVpL3RoZW1lLXRvb2xzJ1xyXG5cclxuZXhwb3J0IGNvbnN0IGxpbmtDb2xvcnMgPSB7XHJcbiAgbGlnaHQ6ICdhY2NlbnQuNTAwJyxcclxuICBkYXJrOiAnYWNjZW50LjQwMCcsXHJcbiAgdmlzaXRlZExpZ2h0OiAnYWNjZW50LjMwMCcsXHJcbiAgdmlzaXRlZERhcms6ICdhY2NlbnQuNjAwJ1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlTGlua0NvbG9yKCkge1xyXG4gIHJldHVybiB1c2VDb2xvck1vZGVWYWx1ZShsaW5rQ29sb3JzLmxpZ2h0LCBsaW5rQ29sb3JzLmRhcmspXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VWaXNpdGVkTGlua0NvbG9yKCkge1xyXG4gIHJldHVybiB1c2VDb2xvck1vZGVWYWx1ZShsaW5rQ29sb3JzLnZpc2l0ZWRMaWdodCwgbGlua0NvbG9ycy52aXNpdGVkRGFyaylcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFRhZ0JhY2tncm91bmREYXJrKFxyXG4gIGFjY2VudEtleTogQ29sb3JLZXlzLFxyXG4gIHRoZW1lOiBUaGVtZU92ZXJyaWRlXHJcbikge1xyXG4gIHJldHVybiBhY2NlbnRLZXkgJiYgdHJhbnNwYXJlbnRpemUoKHRoZW1lLmNvbG9ycyBhcyBhbnkpW2FjY2VudEtleV1bMjAwXSwgMC4xKSh0aGVtZSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGNvbG9ycyA9IHtcclxuICAuLi5kZWZhdWx0VGhlbWUuY29sb3JzLFxyXG4gIGdyYXk6IHtcclxuICAgIC4uLmRlZmF1bHRUaGVtZS5jb2xvcnMuZ3JheSxcclxuICAgIDEwMDA6ICcjMTIxNzIxJ1xyXG4gIH0sXHJcbiAgZGVmYXVsdEFjY2VudDoge1xyXG4gICAgNTA6ICcjZTNmMmZjJyxcclxuICAgIDEwMDogJyNkZGYyZmYnLFxyXG4gICAgMjAwOiAnI2FiZDJmYycsXHJcbiAgICAzMDA6ICcjNWRhYWZjJyxcclxuICAgIDQwMDogJyMxYTg1ZmYnLFxyXG4gICAgNTAwOiAnIzAwNmJlNicsXHJcbiAgICA2MDA6ICcjMDA1M2I0JyxcclxuICAgIDcwMDogJyMwMDNiODInLFxyXG4gICAgODAwOiAnIzAwMjQ1MScsXHJcbiAgICA5MDA6ICcjMDAwZDIxJ1xyXG4gIH0sXHJcbiAgYWNjZW50OiB7XHJcbiAgICAvLyBTZWUgc3JjL2NvbXBvbmVudHMvQWNjZW50LnRzeCBmb3IgQ1NTIHZhcmlhYmxlIGRlZmluaXRpb25cclxuICAgIDUwOiAndmFyKC0tY29sb3JzLWFjY2VudC01MCknLFxyXG4gICAgMTAwOiAndmFyKC0tY29sb3JzLWFjY2VudC0xMDApJyxcclxuICAgIDIwMDogJ3ZhcigtLWNvbG9ycy1hY2NlbnQtMjAwKScsXHJcbiAgICAzMDA6ICd2YXIoLS1jb2xvcnMtYWNjZW50LTMwMCknLFxyXG4gICAgNDAwOiAndmFyKC0tY29sb3JzLWFjY2VudC00MDApJyxcclxuICAgIDUwMDogJ3ZhcigtLWNvbG9ycy1hY2NlbnQtNTAwKScsXHJcbiAgICA2MDA6ICd2YXIoLS1jb2xvcnMtYWNjZW50LTYwMCknLFxyXG4gICAgNzAwOiAndmFyKC0tY29sb3JzLWFjY2VudC03MDApJyxcclxuICAgIDgwMDogJ3ZhcigtLWNvbG9ycy1hY2NlbnQtODAwKScsXHJcbiAgICA5MDA6ICd2YXIoLS1jb2xvcnMtYWNjZW50LTkwMCknXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBDb2xvcktleXMgPSBrZXlvZiB0eXBlb2YgY29sb3JzXHJcblxyXG5leHBvcnQgY29uc3QgYWNjZW50S2V5czogQ29sb3JLZXlzW10gPSBbXHJcbiAgJ2RlZmF1bHRBY2NlbnQnLFxyXG4gICdncmVlbicsXHJcbiAgJ2N5YW4nLFxyXG4gICdvcmFuZ2UnLFxyXG4gICdibHVlJyxcclxuICAncGluaycsXHJcbiAgJ3RlYWwnLFxyXG4gICdwdXJwbGUnLFxyXG4gICdyZWQnXHJcbl1cclxuIiwiaW1wb3J0IHsgZXh0ZW5kVGhlbWUsIFRoZW1lT3ZlcnJpZGUgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xyXG5pbXBvcnQgeyBjb2xvcnMgfSBmcm9tICcuL2ZvdW5kYXRpb25zL2NvbG9ycydcclxuaW1wb3J0IHsgbWVyZ2VXaXRoIH0gZnJvbSAnQGNoYWtyYS11aS91dGlscydcclxuaW1wb3J0IHsgbW9kZSB9IGZyb20gXCJAY2hha3JhLXVpL3RoZW1lLXRvb2xzXCJcclxuLy8gUmUtZXhwb3J0c1xyXG5leHBvcnQgeyB1c2VMaW5rQ29sb3IsIGFjY2VudEtleXMgfSBmcm9tICcuL2ZvdW5kYXRpb25zL2NvbG9ycydcclxuZXhwb3J0IHR5cGUgeyBDb2xvcktleXMgfSBmcm9tICcuL2ZvdW5kYXRpb25zL2NvbG9ycydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtYWtlVGhlbWUob3ZlcnJpZGVzOiBUaGVtZU92ZXJyaWRlID0ge30pIHtcclxuICBjb25zdCB0aGVtZSA9IGV4dGVuZFRoZW1lKHtcclxuICAgIC4uLmV4dGVuZGVkVGhlbWUsXHJcbiAgICBjb2xvcnNcclxuICB9KVxyXG4gIHJldHVybiBtZXJnZVdpdGgodGhlbWUsIG92ZXJyaWRlcylcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGV4dGVuZGVkVGhlbWUgPSBleHRlbmRUaGVtZSh7XHJcbiAgZm9udHM6IHtcclxuICAgIGJvZHk6IGBJbnRlciwtYXBwbGUtc3lzdGVtLEJsaW5rTWFjU3lzdGVtRm9udCxcIlNlZ29lIFVJXCIsSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWYsXCJBcHBsZSBDb2xvciBFbW9qaVwiLFwiU2Vnb2UgVUkgRW1vamlcIixcIlNlZ29lIFVJIFN5bWJvbFwiYFxyXG4gIH0sXHJcbiAgc3R5bGVzOiB7XHJcbiAgICBnbG9iYWw6IChwcm9wcykgPT4gKHtcclxuICAgICAgYm9keToge1xyXG4gICAgICAgIGNvbG9yOiBtb2RlKFwiZ3JheS43MDBcIiwgXCJ3aGl0ZUFscGhhLjkwMFwiKShwcm9wcyksXHJcbiAgICAgICAgYmc6IG1vZGUoXCJncmF5LjUwXCIsIFwiZ3JheS45MDBcIikocHJvcHMpLFxyXG4gICAgICAgIGZvbnRTaXplOiBcIjEuMmVtXCIsXHJcbiAgICAgICAgXCIuZGVsZXRlZFwiOiB7XHJcbiAgICAgICAgICBjb2xvcjogXCIjZmY4MzgzICFpbXBvcnRhbnRcIixcclxuICAgICAgICAgIGZvbnRTdHlsZTogXCJub3JtYWwgIWltcG9ydGFudFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCIuaW5zZXJ0ZWRcIjoge1xyXG4gICAgICAgICAgY29sb3I6IFwiI2I1ZjRhNSAhaW1wb3J0YW50XCIsXHJcbiAgICAgICAgICBmb250U3R5bGU6IFwibm9ybWFsICFpbXBvcnRhbnRcIixcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICBhOiB7XHJcbiAgICAgICAgY29sb3I6IG1vZGUoXCJibHVlLjUwMFwiLCBcImJsdWUuMjAwXCIpKHByb3BzKSxcclxuICAgICAgICB0cmFuc2l0aW9uOiBcImNvbG9yIDAuMTVzXCIsXHJcbiAgICAgICAgdHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uOiBcImVhc2Utb3V0XCIsXHJcbiAgICAgICAgZm9udFdlaWdodDogXCI1MDBcIixcclxuICAgICAgICBfaG92ZXI6IHtcclxuICAgICAgICAgIGNvbG9yOiBtb2RlKFwiYmx1ZS42MDBcIiwgXCJibHVlLjMwMFwiKShwcm9wcyksXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgfSksXHJcbiAgfSxcclxuICBjb21wb25lbnRzOiB7XHJcbiAgICBQb3BvdmVyOiB7XHJcbiAgICAgIHBhcnRzOiBbJ3BvcHBlciddLFxyXG4gICAgICBiYXNlU3R5bGU6IHByb3BzID0+ICh7XHJcbiAgICAgICAgcG9wcGVyOiB7XHJcbiAgICAgICAgICB6SW5kZXg6IDEwLFxyXG4gICAgICAgICAgbWF4VzogJ3hzJyxcclxuICAgICAgICAgIC8vIG1heFc6IHByb3BzLndpZHRoID8gcHJvcHMud2lkdGggOiAneHMnLFxyXG4gICAgICAgICAgdzogcHJvcHMud2lkdGgsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSksXHJcbiAgICB9LFxyXG4gICAgQnV0dG9uOiB7XHJcbiAgICAgIGJhc2VTdHlsZToge1xyXG4gICAgICAgIGZvbnRXZWlnaHQ6IFwiNTAwXCIsXHJcbiAgICAgICAgcm91bmRlZDogXCJ4bFwiXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgVGFnOiB7XHJcbiAgICAgIGJhc2VTdHlsZToge1xyXG4gICAgICAgIHJvdW5kZWQ6IFwibGdcIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICB0ZXh0YXJlYToge1xyXG4gICAgICBiYXNlU3R5bGU6IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBcImdyZWVuLjMwMFwiLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIExpbms6IHtcclxuICAgICAgYmFzZVN0eWxlOiB7XHJcbiAgICAgICAgZm9udFdlaWdodDogXCJpbmhlcml0XCIsXHJcbiAgICAgICAgX2hvdmVyOiB7XHJcbiAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBfZm9jdXM6IHtcclxuICAgICAgICAgIGJveFNoYWRvdzogJ25vbmUnXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICB2YXJpYW50czoge1xyXG4gICAgICAgIHRleHQ6IHtcclxuICAgICAgICAgIGNvbG9yOiBcImJsdWUuNDAwXCIsXHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBcImNvbG9yIDAuMTVzXCIsXHJcbiAgICAgICAgICB0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb246IFwiZWFzZS1vdXRcIixcclxuICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiNTAwXCIsXHJcbiAgICAgICAgICBfaG92ZXI6IHtcclxuICAgICAgICAgICAgY29sb3I6IFwiYmx1ZS4zMDBcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICBncmFkaWVudDoge1xyXG4gICAgICAgICAgYmdHcmFkaWVudDogXCJsaW5lYXIodG8tYnIsIGJsdWUuNDAwLGJsdWUuMzAwKVwiLFxyXG4gICAgICAgICAgYmdDbGlwOiBcInRleHRcIixcclxuICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiNTAwXCIsXHJcbiAgICAgICAgICBfaG92ZXI6IHtcclxuICAgICAgICAgICAgYmdHcmFkaWVudDogXCJsaW5lYXIodG8tYnIsIGJsdWUuNTAwLGJsdWUuMzAwKVwiLFxyXG4gICAgICAgICAgICBiZ0NsaXA6IFwidGV4dFwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgbWR4OiB7XHJcbiAgICBoMToge1xyXG4gICAgICBtdDogXCIycmVtXCIsXHJcbiAgICAgIG1iOiBcIi4yNXJlbVwiLFxyXG4gICAgICBsaW5lSGVpZ2h0OiAxLjIsXHJcbiAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxyXG4gICAgICBmb250U2l6ZTogXCIxLjg3NXJlbVwiLFxyXG4gICAgICBsZXR0ZXJTcGFjaW5nOiBcIi0uMDI1ZW1cIixcclxuICAgIH0sXHJcbiAgICBoMjoge1xyXG4gICAgICBtdDogXCI0cmVtXCIsXHJcbiAgICAgIG1iOiBcIjAuNXJlbVwiLFxyXG4gICAgICBsaW5lSGVpZ2h0OiAxLjMsXHJcbiAgICAgIGZvbnRXZWlnaHQ6IFwic2VtaWJvbGRcIixcclxuICAgICAgZm9udFNpemU6IFwiMS41cmVtXCIsXHJcbiAgICAgIFwiJiArIGgzXCI6IHtcclxuICAgICAgICBtdDogXCIxLjVyZW1cIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBoMzoge1xyXG4gICAgICBtdDogXCIzcmVtXCIsXHJcbiAgICAgIC8vIG1iOiBcIjAuNXJlbVwiLFxyXG4gICAgICBsaW5lSGVpZ2h0OiAxLjI1LFxyXG4gICAgICBmb250V2VpZ2h0OiBcInNlbWlib2xkXCIsXHJcbiAgICAgIGZvbnRTaXplOiBcIjEuMjVyZW1cIixcclxuICAgIH0sXHJcbiAgICBoNDoge1xyXG4gICAgICBtdDogXCIzcmVtXCIsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IDEuMzc1LFxyXG4gICAgICBmb250V2VpZ2h0OiBcInNlbWlib2xkXCIsXHJcbiAgICAgIGZvbnRTaXplOiBcIjEuMTI1cmVtXCIsXHJcbiAgICB9LFxyXG4gICAgcDoge1xyXG4gICAgICBtdDogXCIxLjI1cmVtXCIsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IDEuNyxcclxuICAgICAgXCJibG9ja3F1b3RlICZcIjoge1xyXG4gICAgICAgIG10OiAwLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIGhyOiB7XHJcbiAgICAgIG15OiBcIjRyZW1cIixcclxuICAgIH0sXHJcbiAgICBibG9ja3F1b3RlOiB7XHJcbiAgICAgIGJnOiBcIm9yYW5nZS4xMDBcIixcclxuICAgICAgYm9yZGVyV2lkdGg6IFwiMXB4XCIsXHJcbiAgICAgIGJvcmRlckNvbG9yOiBcIm9yYW5nZS4yMDBcIixcclxuICAgICAgcm91bmRlZDogXCJsZ1wiLFxyXG4gICAgICBweDogXCIxLjI1cmVtXCIsXHJcbiAgICAgIHB5OiBcIjFyZW1cIixcclxuICAgICAgbXk6IFwiMS41cmVtXCIsXHJcbiAgICB9LFxyXG4gICAgdWw6IHtcclxuICAgICAgbXQ6IFwiMS41cmVtXCIsXHJcbiAgICAgIG1sOiBcIjEuMjVyZW1cIixcclxuICAgICAgXCJibG9ja3F1b3RlICZcIjogeyBtdDogMCB9LFxyXG4gICAgICBcIiYgPiAqICsgKlwiOiB7XHJcbiAgICAgICAgbXQ6IFwiMC4yNXJlbVwiLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIGNvZGU6IHtcclxuICAgICAgcm91bmRlZDogXCJzbVwiLFxyXG4gICAgICBweDogXCIxXCIsXHJcbiAgICAgIGZvbnRTaXplOiBcIjAuODc1ZW1cIixcclxuICAgICAgcHk6IFwiMnB4XCIsXHJcbiAgICAgIHdoaXRlU3BhY2U6IFwibm93cmFwXCIsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IFwibm9ybWFsXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFRhZ0NvbG9yID0gdHlwZSA9PiB7XHJcbiAgdHlwZSA9IHR5cGUudG9Mb3dlckNhc2UoKVxyXG4gIGlmICh0eXBlID09PSBcInJhaWxzXCIgfHwgdHlwZSA9PT0gXCJydWJ5XCIpIHtcclxuICAgIHJldHVybiBcInJlZFwiO1xyXG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJyZWFjdFwiKSB7XHJcbiAgICByZXR1cm4gXCJjeWFuXCI7XHJcbiAgfSBlbHNlIGlmICh0eXBlID09PSBcImphdmFzY3JpcHRcIikge1xyXG4gICAgcmV0dXJuIFwieWVsbG93XCI7XHJcbiAgfSBlbHNlIGlmICh0eXBlID09PSBcInR5cGVzY3JpcHRcIiB8fCB0eXBlID09PSBcInRhaWx3aW5kY3NzXCIpIHtcclxuICAgIHJldHVybiBcImJsdWVcIjtcclxuICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiY2hha3JhdWlcIiB8fCB0eXBlID09PSBcImNzc1wiKSB7XHJcbiAgICByZXR1cm4gXCJ0ZWFsXCI7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHRoZW1lID0gbWFrZVRoZW1lKClcclxuIiwiaW1wb3J0IHsgUHJvcHNXaXRoQ2hpbGRyZW4gfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJveCB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBjb2xvcjogc3RyaW5nO1xyXG4gIGg/OiBzdHJpbmc7XHJcbiAgekluZGV4PzogbnVtYmVyO1xyXG59XHJcbmNvbnN0IFVuZGVybGluZWRUZXh0ID0gKHByb3BzOiBQcm9wc1dpdGhDaGlsZHJlbjxQcm9wcz4pID0+IChcclxuICA8Qm94IGFzPVwic3BhblwiIGRpc3BsYXk9XCJpbmxpbmUtYmxvY2tcIiBwb3NpdGlvbj1cInJlbGF0aXZlXCI+XHJcbiAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICA8Qm94IGFzPVwic3BhblwiIGRpc3BsYXk9XCJibG9ja1wiIHBvc2l0aW9uPVwiYWJzb2x1dGVcIiBiZz17J2dyYXkuMjAwJ30gdz17JzEwMCUnfSBoPXtwcm9wcy5oIHx8ICcxcHgnfSBib3R0b209ey0yfSAvPlxyXG4gIDwvQm94PlxyXG4pO1xyXG5leHBvcnQgZGVmYXVsdCBVbmRlcmxpbmVkVGV4dDtcclxuIiwiaW1wb3J0IHtcclxuICBGbGV4LFxyXG4gIEF2YXRhcixcclxuICBCb3gsXHJcbiAgVGV4dCxcclxuICBCYWRnZSxcclxuICBTdGFjayxcclxuICBMaW5rLFxyXG4gIFVub3JkZXJlZExpc3QsXHJcbiAgTGlzdEl0ZW0sXHJcbiAgdXNlQ29sb3JNb2RlVmFsdWUsXHJcbiAgVG9vbHRpcFxyXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCB7IHVzZUxhbnlhcmQgfSBmcm9tIFwicmVhY3QtdXNlLWxhbnlhcmRcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcblxyXG5cclxuLyogSW1wb3J0IHR5cGVzICovXHJcbmltcG9ydCB0eXBlIHsgQWN0aXZpdHkgfSBmcm9tIFwicmVhY3QtdXNlLWxhbnlhcmRcIjtcclxuXHJcbi8qIEltcG9ydCBkYXRhICovXHJcbmltcG9ydCB1c2VySWQgZnJvbSBcIi4uL2RhdGEvdXNlclwiO1xyXG5cclxuXHJcblxyXG5jb25zdCBTdGF0dXM6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG4gXHJcbiAgY29uc3QgeyBsb2FkaW5nLCBzdGF0dXMgfSA9IHVzZUxhbnlhcmQoe1xyXG4gICAgdXNlcklkLFxyXG4gICAgc29ja2V0OiB0cnVlLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBnZXRBY3Rpdml0eSA9ICgpID0+IHtcclxuICAgIGlmIChzdGF0dXM/Lmxpc3RlbmluZ190b19zcG90aWZ5ID09PSB0cnVlKSB7XHJcbiAgICAgIGNvbnN0IHsgc29uZywgYXJ0aXN0LCBhbGJ1bSB9ID0gc3RhdHVzLnNwb3RpZnkgfHwge307XHJcblxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIG5hbWU6IHNvbmcsXHJcbiAgICAgICAgZGV0YWlsczogYGJ5ICR7YXJ0aXN0fWAsXHJcbiAgICAgICAgc3RhdGU6IGBvbiAke2FsYnVtfWAsXHJcbiAgICAgIH07XHJcbiAgICB9IFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldEltYWdlID0gKCkgPT4ge1xyXG4gICAgaWYgKCFsb2FkaW5nICYmIHN0YXR1cz8ubGlzdGVuaW5nX3RvX3Nwb3RpZnkgPT09IHRydWUpIHtcclxuICAgICAgY29uc3QgYWN0aXZpdHkgPSBzdGF0dXMuc3BvdGlmeTtcclxuXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgbGFyZ2VJbWFnZTogYWN0aXZpdHk/LmFsYnVtX2FydF91cmwsXHJcbiAgICAgIH07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBhY3Rpdml0eSA9IGdldEFjdGl2aXR5KCkgYXMgQWN0aXZpdHk7XHJcblxyXG4gICAgICBjb25zdCB7IGFwcGxpY2F0aW9uX2lkIH0gPSBhY3Rpdml0eSB8fCB7fTtcclxuICAgICAgY29uc3QgeyBsYXJnZV9pbWFnZSwgc21hbGxfaW1hZ2UgfSA9IGFjdGl2aXR5Py5hc3NldHMgfHwge307XHJcblxyXG4gICAgICBjb25zdCBbbGFyZ2VJbWFnZSwgc21hbGxJbWFnZV0gPSBbXHJcbiAgICAgICAgbGFyZ2VfaW1hZ2UgJiZcclxuICAgICAgICAgIGBodHRwczovL2Nkbi5kaXNjb3JkYXBwLmNvbS9hcHAtYXNzZXRzLyR7YXBwbGljYXRpb25faWR9LyR7bGFyZ2VfaW1hZ2V9LnBuZz9zaXplPTI1NmAsXHJcbiAgICAgICAgc21hbGxfaW1hZ2UgJiZcclxuICAgICAgICAgIGBodHRwczovL2Nkbi5kaXNjb3JkYXBwLmNvbS9hcHAtYXNzZXRzLyR7YXBwbGljYXRpb25faWR9LyR7c21hbGxfaW1hZ2V9LnBuZz9zaXplPTI1NmAsXHJcbiAgICAgIF07XHJcblxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGxhcmdlSW1hZ2UsXHJcbiAgICAgICAgc21hbGxJbWFnZSxcclxuICAgICAgfTtcclxuICAgIH1cclxuICB9O1xyXG4gIFxyXG4gIFxyXG4gaWYgKGxvYWRpbmcgPT09IGZhbHNlICYmIHN0YXR1cz8uZGlzY29yZF9zdGF0dXMgPT09IFwib25saW5lXCIgJiYgc3RhdHVzPy5saXN0ZW5pbmdfdG9fc3BvdGlmeSA9PT0gZmFsc2UgKVxyXG4gcmV0dXJuICggXHJcbiA8Qm94IGRpc3BsYXk9e1wiZmxleFwifSBmbGV4V3JhcD17XCJub3dyYXBcIn0gZmxvYXQ9e1wibGVmdFwifSBwYWRkaW5nPXtcIjVcIn0gIG1hcmdpblRvcD17XCI1XCJ9IF9ob3Zlcj17eyBzaGFkb3c6IFwibGdcIiB9fSAgYmFja2dyb3VuZENvbG9yPXt1c2VDb2xvck1vZGVWYWx1ZShcImdyYXkuMTAwXCIsIFwiIzFlMjUzM1wiKX0gcm91bmRlZD17XCJtZFwifT5cclxuIDxTdGFjayBiYWNrZ3JvdW5kQ29sb3I9e1wiZ3JlZW4uNTAwXCJ9IHJvdW5kZWQ9e1wiZnVsbFwifSB3aWR0aD17XCI0XCJ9IGhlaWdodD17NH0gbWFyZ2luPXtcImF1dG9cIn0gYWxpZ25JdGVtcz17XCJjZW50ZXJcIn0+PC9TdGFjaz5cclxuIDxUZXh0IHRleHRDb2xvcj17dXNlQ29sb3JNb2RlVmFsdWUoXCJibGFja1wiLCBcIndoaXRlXCIpfSBmb250U2l6ZT17XCJtZFwifSAgdGV4dEFsaWduPXtcImNlbnRlclwifSBtYXJnaW49e1wiMVwifT4gT25saW5lPC9UZXh0PlxyXG48L0JveD4gXHJcblxyXG4gKTtcclxuXHJcbiBlbHNlIGlmIChsb2FkaW5nID09PSBmYWxzZSAmJiBzdGF0dXM/LmRpc2NvcmRfc3RhdHVzID09PSBcIm9ubGluZVwiICYmIHN0YXR1cz8ubGlzdGVuaW5nX3RvX3Nwb3RpZnkgPT09IHRydWUpXHJcbiByZXR1cm4gKFxyXG48Qm94IGRpc3BsYXk9e1wiZmxleFwifSBmbGV4V3JhcD17XCJub3dyYXBcIn0gZmxvYXQ9e1wibGVmdFwifSBwYWRkaW5nPXtcIjVcIn0gbWFyZ2luVG9wPXtcIjVcIn0gIF9ob3Zlcj17eyBzaGFkb3c6IFwibGdcIiB9fSAgYmFja2dyb3VuZENvbG9yPXt1c2VDb2xvck1vZGVWYWx1ZShcImdyYXkuMTAwXCIsIFwiIzFlMjUzM1wiKX0gcm91bmRlZD17XCJtZFwifT5cclxuICAgPFRvb2x0aXAgaGFzQXJyb3cgbGFiZWw9XCJPbmxpbmVcIiBwbGFjZW1lbnQ9XCJ0b3BcIj48U3RhY2sgYmFja2dyb3VuZENvbG9yPXtcImdyZWVuLjUwMFwifSByb3VuZGVkPXtcImZ1bGxcIn0gd2lkdGg9e1wiNFwifSBoZWlnaHQ9ezR9IG1hcmdpbj17XCJhdXRvXCJ9IG1hcmdpblJpZ2h0PXtcIjVcIn0gYWxpZ25JdGVtcz17XCJjZW50ZXJcIn0+PC9TdGFjaz48L1Rvb2x0aXA+IFxyXG4gIDxUZXh0IGZvbnRTaXplPXtcInNtXCJ9IG1hcmdpbj17XCJhdXRvXCJ9IHRleHRBbGlnbj17XCJjZW50ZXJcIn0gbWFyZ2luUmlnaHQ9e1wiNVwifSB0ZXh0Q29sb3I9e3VzZUNvbG9yTW9kZVZhbHVlKFwiZ3JheS40MDBcIiwgXCJncmF5LjYwMFwiKX0+TGlzdGVuaW5nIHRvPC9UZXh0PlxyXG4gIDxTdGFjayBtYXJnaW5SaWdodD17XCI1XCJ9IG9iamVjdEZpdD17XCJjb3ZlclwifSBib3JkZXJSYWRpdXM9e1wiNTAlXCJ9PlxyXG4gICAgICAgICAgICAgICAgIHtnZXRJbWFnZSgpLmxhcmdlSW1hZ2UgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgIHNyYz17Z2V0SW1hZ2UoKS5sYXJnZUltYWdlIHx8IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiODBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjgwcHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICBhbHQ9XCJpY29uXCJcclxuICAgICAgICAgICAgICAgICAgICAgZHJhZ2dhYmxlPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdD1cImNvdmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1sZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvU3RhY2s+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPFRleHQgZm9udFNpemU9e1wic21cIn0gbWFyZ2luPXtcImF1dG9cIn0gdGV4dEFsaWduPXtcImNlbnRlclwifT4gICAgXHJcbiAgICAgICAgICAgICAgPGgxPiB7Z2V0QWN0aXZpdHkoKT8ubmFtZX08L2gxPlxyXG4gICAgICAgICAgICAgIDxoMT4ge2dldEFjdGl2aXR5KCk/LmRldGFpbHN9PC9oMT5cclxuICAgICAgICAgICAgICA8aDE+IHtnZXRBY3Rpdml0eSgpPy5zdGF0ZX0gPC9oMT4gICAgXHJcbiAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgIFxyXG4gIDwvQm94PiBcclxuICk7XHJcbiBlbHNlIGlmIChsb2FkaW5nID09PSBmYWxzZSAmJiBzdGF0dXM/LmRpc2NvcmRfc3RhdHVzID09PSBcImlkbGVcIiAmJiBzdGF0dXM/Lmxpc3RlbmluZ190b19zcG90aWZ5ID09PSBmYWxzZSlcclxuIHJldHVybiAoIFxyXG4gPEJveCBkaXNwbGF5PXtcImZsZXhcIn0gZmxleFdyYXA9e1wibm93cmFwXCJ9IGZsb2F0PXtcImxlZnRcIn0gcGFkZGluZz17XCI1XCJ9IG1hcmdpblRvcD17XCI1XCJ9ICBfaG92ZXI9e3sgc2hhZG93OiBcImxnXCIgfX0gIGJhY2tncm91bmRDb2xvcj17dXNlQ29sb3JNb2RlVmFsdWUoXCJncmF5LjEwMFwiLCBcIiMxZTI1MzNcIil9IHJvdW5kZWQ9e1wibWRcIn0+XHJcbiA8U3RhY2sgYmFja2dyb3VuZENvbG9yPXtcInllbGxvdy40MDBcIn0gcm91bmRlZD17XCJmdWxsXCJ9IHdpZHRoPXtcIjRcIn0gaGVpZ2h0PXs0fSBtYXJnaW49e1wiYXV0b1wifSBhbGlnbkl0ZW1zPXtcImNlbnRlclwifT48L1N0YWNrPlxyXG4gPFRleHQgdGV4dENvbG9yPXt1c2VDb2xvck1vZGVWYWx1ZShcImJsYWNrXCIsIFwid2hpdGVcIil9IGZvbnRTaXplPXtcIm1kXCJ9IHRleHRBbGlnbj17XCJjZW50ZXJcIn0gbWFyZ2luPXtcIjFcIn0+IElkbGVkPC9UZXh0PlxyXG4gPC9Cb3g+IFxyXG5cclxuICk7XHJcbiBcclxuIGVsc2UgaWYgKGxvYWRpbmcgPT09IGZhbHNlICYmIHN0YXR1cz8uZGlzY29yZF9zdGF0dXMgPT09IFwiaWRsZVwiICYmIHN0YXR1cz8ubGlzdGVuaW5nX3RvX3Nwb3RpZnkgPT09IHRydWUpXHJcbiByZXR1cm4gKFxyXG48Qm94IGRpc3BsYXk9e1wiZmxleFwifSBmbGV4V3JhcD17XCJub3dyYXBcIn0gZmxvYXQ9e1wibGVmdFwifSBwYWRkaW5nPXtcIjVcIn0gbWFyZ2luVG9wPXtcIjVcIn0gIF9ob3Zlcj17eyBzaGFkb3c6IFwibGdcIiB9fSAgYmFja2dyb3VuZENvbG9yPXt1c2VDb2xvck1vZGVWYWx1ZShcImdyYXkuMTAwXCIsIFwiIzFlMjUzM1wiKX0gcm91bmRlZD17XCJtZFwifT5cclxuICAgIDxUb29sdGlwIGhhc0Fycm93IGxhYmVsPVwiSWRsZWRcIiBwbGFjZW1lbnQ9XCJ0b3BcIj48U3RhY2sgYmFja2dyb3VuZENvbG9yPXtcInllbGxvdy40MDBcIn0gcm91bmRlZD17XCJmdWxsXCJ9IHdpZHRoPXtcIjRcIn0gaGVpZ2h0PXs0fSBtYXJnaW49e1wiYXV0b1wifSBtYXJnaW5SaWdodD17XCI1XCJ9IGFsaWduSXRlbXM9e1wiY2VudGVyXCJ9PjwvU3RhY2s+PC9Ub29sdGlwPlxyXG4gIDxUZXh0IGZvbnRTaXplPXtcInNtXCJ9IG1hcmdpbj17XCJhdXRvXCJ9IHRleHRBbGlnbj17XCJjZW50ZXJcIn0gbWFyZ2luUmlnaHQ9e1wiNVwifSB0ZXh0Q29sb3I9e3VzZUNvbG9yTW9kZVZhbHVlKFwiZ3JheS40MDBcIiwgXCJncmF5LjYwMFwiKX0+TGlzdGVuaW5nIHRvPC9UZXh0PlxyXG4gIDxTdGFjayBtYXJnaW5SaWdodD17XCI1XCJ9IG9iamVjdEZpdD17XCJjb3ZlclwifSBib3JkZXJSYWRpdXM9e1wiNTAlXCJ9PlxyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAge2dldEltYWdlKCkubGFyZ2VJbWFnZSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgc3JjPXtnZXRJbWFnZSgpLmxhcmdlSW1hZ2UgfHwgXCJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCI4MHB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiODBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgIGFsdD1cImljb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICBkcmFnZ2FibGU9XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0PVwiY292ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWxnXCJcclxuICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPC9TdGFjaz5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8VGV4dCBmb250U2l6ZT17XCJzbVwifSBtYXJnaW49e1wiYXV0b1wifSB0ZXh0QWxpZ249e1wiY2VudGVyXCJ9PiAgICBcclxuICAgICAgICAgICAgICA8aDE+IHtnZXRBY3Rpdml0eSgpPy5uYW1lfTwvaDE+XHJcbiAgICAgICAgICAgICAgPGgxPiB7Z2V0QWN0aXZpdHkoKT8uZGV0YWlsc308L2gxPlxyXG4gICAgICAgICAgICAgIDxoMT4ge2dldEFjdGl2aXR5KCk/LnN0YXRlfSA8L2gxPiAgICBcclxuICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgXHJcbiAgPC9Cb3g+IFxyXG4gKTtcclxuXHJcbiBlbHNlIGlmIChsb2FkaW5nID09PSBmYWxzZSAmJiBzdGF0dXM/LmRpc2NvcmRfc3RhdHVzID09PSBcImRuZFwiICYmIHN0YXR1cz8ubGlzdGVuaW5nX3RvX3Nwb3RpZnkgPT09IGZhbHNlKVxyXG4gcmV0dXJuIChcclxuICA8Qm94IGRpc3BsYXk9e1wiZmxleFwifSBmbGV4V3JhcD17XCJub3dyYXBcIn0gZmxvYXQ9e1wibGVmdFwifSBwYWRkaW5nPXtcIjVcIn0gIF9ob3Zlcj17eyBzaGFkb3c6IFwibGdcIiB9fSBtYXJnaW5Ub3A9e1wiNVwifSAgYmFja2dyb3VuZENvbG9yPXt1c2VDb2xvck1vZGVWYWx1ZShcImdyYXkuMTAwXCIsIFwiIzFlMjUzM1wiKX0gcm91bmRlZD17XCJtZFwifT5cclxuICA8U3RhY2sgYmFja2dyb3VuZENvbG9yPXtcInJlZC41MDBcIn0gcm91bmRlZD17XCJmdWxsXCJ9IHdpZHRoPXtcIjRcIn0gaGVpZ2h0PXs0fSBtYXJnaW49e1wiYXV0b1wifSBhbGlnbkl0ZW1zPXtcImNlbnRlclwifT48L1N0YWNrPlxyXG4gIDxUZXh0IHRleHRDb2xvcj17dXNlQ29sb3JNb2RlVmFsdWUoXCJibGFja1wiLCBcIndoaXRlXCIpfSBmb250U2l6ZT17XCJtZFwifSAgdGV4dEFsaWduPXtcImNlbnRlclwifSBtYXJnaW49e1wiMVwifT4gRGlzdHVyYmluZzwvVGV4dD5cclxuPC9Cb3g+XHJcblxyXG4gKTtcclxuXHJcbiBlbHNlIGlmIChsb2FkaW5nID09PSBmYWxzZSAmJiBzdGF0dXM/LmRpc2NvcmRfc3RhdHVzID09PSBcImRuZFwiICYmIHN0YXR1cz8ubGlzdGVuaW5nX3RvX3Nwb3RpZnkgPT09IHRydWUpXHJcbiByZXR1cm4gKFxyXG4gIDxCb3ggZGlzcGxheT17XCJmbGV4XCJ9IGZsZXhXcmFwPXtcIm5vd3JhcFwifSBmbG9hdD17XCJsZWZ0XCJ9IHBhZGRpbmc9e1wiNVwifSBtYXJnaW5Ub3A9e1wiNVwifSAgX2hvdmVyPXt7IHNoYWRvdzogXCJsZ1wiIH19ICBiYWNrZ3JvdW5kQ29sb3I9e3VzZUNvbG9yTW9kZVZhbHVlKFwiZ3JheS4xMDBcIiwgXCIjMWUyNTMzXCIpfSByb3VuZGVkPXtcIm1kXCJ9PlxyXG4gIDxUb29sdGlwIGhhc0Fycm93IGxhYmVsPVwiRGlzdHVyYmluZ1wiIHBsYWNlbWVudD1cInRvcFwiPjxTdGFjayBiYWNrZ3JvdW5kQ29sb3I9e1wicmVkLjUwMFwifSByb3VuZGVkPXtcImZ1bGxcIn0gd2lkdGg9e1wiNFwifSBoZWlnaHQ9ezR9IG1hcmdpbj17XCJhdXRvXCJ9IG1hcmdpblJpZ2h0PXtcIjVcIn0gYWxpZ25JdGVtcz17XCJjZW50ZXJcIn0+PC9TdGFjaz48L1Rvb2x0aXA+XHJcbjxUZXh0IGZvbnRTaXplPXtcInNtXCJ9IG1hcmdpbj17XCJhdXRvXCJ9IHRleHRBbGlnbj17XCJjZW50ZXJcIn0gbWFyZ2luUmlnaHQ9e1wiNVwifSB0ZXh0Q29sb3I9e3VzZUNvbG9yTW9kZVZhbHVlKFwiZ3JheS40MDBcIiwgXCJncmF5LjYwMFwiKX0+TGlzdGVuaW5nIHRvPC9UZXh0PlxyXG48U3RhY2sgbWFyZ2luUmlnaHQ9e1wiNVwifSBvYmplY3RGaXQ9e1wiY292ZXJcIn0gYm9yZGVyUmFkaXVzPXtcIjUwJVwifT5cclxuICAgICAgICAgICAgICB7Z2V0SW1hZ2UoKS5sYXJnZUltYWdlICYmIChcclxuICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICBzcmM9e2dldEltYWdlKCkubGFyZ2VJbWFnZSB8fCBcIlwifVxyXG4gICAgICAgICAgICAgICAgICB3aWR0aD1cIjgwcHhcIlxyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9XCI4MHB4XCJcclxuICAgICAgICAgICAgICAgICAgYWx0PVwiaWNvblwiXHJcbiAgICAgICAgICAgICAgICAgIGRyYWdnYWJsZT1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICBvYmplY3RGaXQ9XCJjb3ZlclwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtbGdcIlxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICA8L1N0YWNrPlxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgIDxUZXh0IGZvbnRTaXplPXtcInNtXCJ9IG1hcmdpbj17XCJhdXRvXCJ9IHRleHRBbGlnbj17XCJjZW50ZXJcIn0+ICAgIFxyXG4gICAgICAgICAgIDxoMT4ge2dldEFjdGl2aXR5KCk/Lm5hbWV9PC9oMT5cclxuICAgICAgICAgICA8aDE+IHtnZXRBY3Rpdml0eSgpPy5kZXRhaWxzfTwvaDE+XHJcbiAgICAgICAgICAgPGgxPiB7Z2V0QWN0aXZpdHkoKT8uc3RhdGV9IDwvaDE+ICAgIFxyXG4gICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICBcclxuPC9Cb3g+IFxyXG4gKTtcclxuIGVsc2UgXHJcbiByZXR1cm4gKFxyXG4gIDxCb3ggZGlzcGxheT17XCJmbGV4XCJ9IGZsZXhXcmFwPXtcIm5vd3JhcFwifSBmbG9hdD17XCJsZWZ0XCJ9IHBhZGRpbmc9e1wiNVwifSAgbWFyZ2luVG9wPXtcIjVcIn0gX2hvdmVyPXt7IHNoYWRvdzogXCJsZ1wiIH19ICBiYWNrZ3JvdW5kQ29sb3I9e3VzZUNvbG9yTW9kZVZhbHVlKFwiZ3JheS4xMDBcIiwgXCIjMWUyNTMzXCIpfSByb3VuZGVkPXtcIm1kXCJ9PlxyXG4gICA8VG9vbHRpcCBoYXNBcnJvdyBsYWJlbD1cIk9mZmxpbmVcIiBwbGFjZW1lbnQ9XCJ0b3BcIj48U3RhY2sgYmFja2dyb3VuZENvbG9yPXt1c2VDb2xvck1vZGVWYWx1ZShcImdyYXkuNDAwXCIsIFwiZ3JheS42MDBcIil9IHJvdW5kZWQ9e1wiZnVsbFwifSB3aWR0aD17XCI0XCJ9IGhlaWdodD17NH0gbWFyZ2luPXtcImF1dG9cIn0gYWxpZ25JdGVtcz17XCJjZW50ZXJcIn0+PC9TdGFjaz48L1Rvb2x0aXA+XHJcbiAgPFRleHQgdGV4dENvbG9yPXt1c2VDb2xvck1vZGVWYWx1ZShcImJsYWNrXCIsIFwid2hpdGVcIil9IGZvbnRTaXplPXtcIm1kXCJ9ICB0ZXh0QWxpZ249e1wiY2VudGVyXCJ9IG1hcmdpbj17XCIxXCJ9PiBPZmZsaW5lPC9UZXh0PiAgICAgICBcclxuPC9Cb3g+XHJcbiApXHJcbiBcclxuIFxyXG5cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0YXR1czsiLCJjb25zdCB1c2VySWQgPSBcIjQ0MDIzOTM3ODE1ODA1OTUzMlwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlcklkO1xyXG4iLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PUltYWdlO3ZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlXCIpKTt2YXIgX2V4dGVuZHMyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiKSk7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9oZWFkPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9oZWFkXCIpKTt2YXIgX3RvQmFzZT1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3RvLWJhc2UtNjRcIik7dmFyIF9pbWFnZUNvbmZpZz1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvc2VydmVyL2ltYWdlLWNvbmZpZ1wiKTt2YXIgX3VzZUludGVyc2VjdGlvbj1yZXF1aXJlKFwiLi91c2UtaW50ZXJzZWN0aW9uXCIpO2lmKHR5cGVvZiB3aW5kb3c9PT0ndW5kZWZpbmVkJyl7O2dsb2JhbC5fX05FWFRfSU1BR0VfSU1QT1JURUQ9dHJ1ZTt9Y29uc3QgVkFMSURfTE9BRElOR19WQUxVRVM9WydsYXp5JywnZWFnZXInLHVuZGVmaW5lZF07Y29uc3QgbG9hZGVycz1uZXcgTWFwKFtbJ2ltZ2l4JyxpbWdpeExvYWRlcl0sWydjbG91ZGluYXJ5JyxjbG91ZGluYXJ5TG9hZGVyXSxbJ2FrYW1haScsYWthbWFpTG9hZGVyXSxbJ2RlZmF1bHQnLGRlZmF1bHRMb2FkZXJdXSk7Y29uc3QgVkFMSURfTEFZT1VUX1ZBTFVFUz1bJ2ZpbGwnLCdmaXhlZCcsJ2ludHJpbnNpYycsJ3Jlc3BvbnNpdmUnLHVuZGVmaW5lZF07ZnVuY3Rpb24gaXNTdGF0aWNSZXF1aXJlKHNyYyl7cmV0dXJuIHNyYy5kZWZhdWx0IT09dW5kZWZpbmVkO31mdW5jdGlvbiBpc1N0YXRpY0ltYWdlRGF0YShzcmMpe3JldHVybiBzcmMuc3JjIT09dW5kZWZpbmVkO31mdW5jdGlvbiBpc1N0YXRpY0ltcG9ydChzcmMpe3JldHVybiB0eXBlb2Ygc3JjPT09J29iamVjdCcmJihpc1N0YXRpY1JlcXVpcmUoc3JjKXx8aXNTdGF0aWNJbWFnZURhdGEoc3JjKSk7fWNvbnN0e2RldmljZVNpemVzOmNvbmZpZ0RldmljZVNpemVzLGltYWdlU2l6ZXM6Y29uZmlnSW1hZ2VTaXplcyxsb2FkZXI6Y29uZmlnTG9hZGVyLHBhdGg6Y29uZmlnUGF0aCxkb21haW5zOmNvbmZpZ0RvbWFpbnN9PXByb2Nlc3MuZW52Ll9fTkVYVF9JTUFHRV9PUFRTfHxfaW1hZ2VDb25maWcuaW1hZ2VDb25maWdEZWZhdWx0Oy8vIHNvcnQgc21hbGxlc3QgdG8gbGFyZ2VzdFxuY29uc3QgYWxsU2l6ZXM9Wy4uLmNvbmZpZ0RldmljZVNpemVzLC4uLmNvbmZpZ0ltYWdlU2l6ZXNdO2NvbmZpZ0RldmljZVNpemVzLnNvcnQoKGEsYik9PmEtYik7YWxsU2l6ZXMuc29ydCgoYSxiKT0+YS1iKTtmdW5jdGlvbiBnZXRXaWR0aHMod2lkdGgsbGF5b3V0LHNpemVzKXtpZihzaXplcyYmKGxheW91dD09PSdmaWxsJ3x8bGF5b3V0PT09J3Jlc3BvbnNpdmUnKSl7Ly8gRmluZCBhbGwgdGhlIFwidndcIiBwZXJjZW50IHNpemVzIHVzZWQgaW4gdGhlIHNpemVzIHByb3BcbmNvbnN0IHZpZXdwb3J0V2lkdGhSZT0vKF58XFxzKSgxP1xcZD9cXGQpdncvZztjb25zdCBwZXJjZW50U2l6ZXM9W107Zm9yKGxldCBtYXRjaDttYXRjaD12aWV3cG9ydFdpZHRoUmUuZXhlYyhzaXplcyk7bWF0Y2gpe3BlcmNlbnRTaXplcy5wdXNoKHBhcnNlSW50KG1hdGNoWzJdKSk7fWlmKHBlcmNlbnRTaXplcy5sZW5ndGgpe2NvbnN0IHNtYWxsZXN0UmF0aW89TWF0aC5taW4oLi4ucGVyY2VudFNpemVzKSowLjAxO3JldHVybnt3aWR0aHM6YWxsU2l6ZXMuZmlsdGVyKHM9PnM+PWNvbmZpZ0RldmljZVNpemVzWzBdKnNtYWxsZXN0UmF0aW8pLGtpbmQ6J3cnfTt9cmV0dXJue3dpZHRoczphbGxTaXplcyxraW5kOid3J307fWlmKHR5cGVvZiB3aWR0aCE9PSdudW1iZXInfHxsYXlvdXQ9PT0nZmlsbCd8fGxheW91dD09PSdyZXNwb25zaXZlJyl7cmV0dXJue3dpZHRoczpjb25maWdEZXZpY2VTaXplcyxraW5kOid3J307fWNvbnN0IHdpZHRocz1bLi4ubmV3IFNldCgvLyA+IFRoaXMgbWVhbnMgdGhhdCBtb3N0IE9MRUQgc2NyZWVucyB0aGF0IHNheSB0aGV5IGFyZSAzeCByZXNvbHV0aW9uLFxuLy8gPiBhcmUgYWN0dWFsbHkgM3ggaW4gdGhlIGdyZWVuIGNvbG9yLCBidXQgb25seSAxLjV4IGluIHRoZSByZWQgYW5kXG4vLyA+IGJsdWUgY29sb3JzLiBTaG93aW5nIGEgM3ggcmVzb2x1dGlvbiBpbWFnZSBpbiB0aGUgYXBwIHZzIGEgMnhcbi8vID4gcmVzb2x1dGlvbiBpbWFnZSB3aWxsIGJlIHZpc3VhbGx5IHRoZSBzYW1lLCB0aG91Z2ggdGhlIDN4IGltYWdlXG4vLyA+IHRha2VzIHNpZ25pZmljYW50bHkgbW9yZSBkYXRhLiBFdmVuIHRydWUgM3ggcmVzb2x1dGlvbiBzY3JlZW5zIGFyZVxuLy8gPiB3YXN0ZWZ1bCBhcyB0aGUgaHVtYW4gZXllIGNhbm5vdCBzZWUgdGhhdCBsZXZlbCBvZiBkZXRhaWwgd2l0aG91dFxuLy8gPiBzb21ldGhpbmcgbGlrZSBhIG1hZ25pZnlpbmcgZ2xhc3MuXG4vLyBodHRwczovL2Jsb2cudHdpdHRlci5jb20vZW5naW5lZXJpbmcvZW5fdXMvdG9waWNzL2luZnJhc3RydWN0dXJlLzIwMTkvY2FwcGluZy1pbWFnZS1maWRlbGl0eS1vbi11bHRyYS1oaWdoLXJlc29sdXRpb24tZGV2aWNlcy5odG1sXG5bd2lkdGgsd2lkdGgqMi8qLCB3aWR0aCAqIDMqL10ubWFwKHc9PmFsbFNpemVzLmZpbmQocD0+cD49dyl8fGFsbFNpemVzW2FsbFNpemVzLmxlbmd0aC0xXSkpXTtyZXR1cm57d2lkdGhzLGtpbmQ6J3gnfTt9ZnVuY3Rpb24gZ2VuZXJhdGVJbWdBdHRycyh7c3JjLHVub3B0aW1pemVkLGxheW91dCx3aWR0aCxxdWFsaXR5LHNpemVzLGxvYWRlcn0pe2lmKHVub3B0aW1pemVkKXtyZXR1cm57c3JjLHNyY1NldDp1bmRlZmluZWQsc2l6ZXM6dW5kZWZpbmVkfTt9Y29uc3R7d2lkdGhzLGtpbmR9PWdldFdpZHRocyh3aWR0aCxsYXlvdXQsc2l6ZXMpO2NvbnN0IGxhc3Q9d2lkdGhzLmxlbmd0aC0xO3JldHVybntzaXplczohc2l6ZXMmJmtpbmQ9PT0ndyc/JzEwMHZ3JzpzaXplcyxzcmNTZXQ6d2lkdGhzLm1hcCgodyxpKT0+YCR7bG9hZGVyKHtzcmMscXVhbGl0eSx3aWR0aDp3fSl9ICR7a2luZD09PSd3Jz93OmkrMX0ke2tpbmR9YCkuam9pbignLCAnKSwvLyBJdCdzIGludGVuZGVkIHRvIGtlZXAgYHNyY2AgdGhlIGxhc3QgYXR0cmlidXRlIGJlY2F1c2UgUmVhY3QgdXBkYXRlc1xuLy8gYXR0cmlidXRlcyBpbiBvcmRlci4gSWYgd2Uga2VlcCBgc3JjYCB0aGUgZmlyc3Qgb25lLCBTYWZhcmkgd2lsbFxuLy8gaW1tZWRpYXRlbHkgc3RhcnQgdG8gZmV0Y2ggYHNyY2AsIGJlZm9yZSBgc2l6ZXNgIGFuZCBgc3JjU2V0YCBhcmUgZXZlblxuLy8gdXBkYXRlZCBieSBSZWFjdC4gVGhhdCBjYXVzZXMgbXVsdGlwbGUgdW5uZWNlc3NhcnkgcmVxdWVzdHMgaWYgYHNyY1NldGBcbi8vIGFuZCBgc2l6ZXNgIGFyZSBkZWZpbmVkLlxuLy8gVGhpcyBidWcgY2Fubm90IGJlIHJlcHJvZHVjZWQgaW4gQ2hyb21lIG9yIEZpcmVmb3guXG5zcmM6bG9hZGVyKHtzcmMscXVhbGl0eSx3aWR0aDp3aWR0aHNbbGFzdF19KX07fWZ1bmN0aW9uIGdldEludCh4KXtpZih0eXBlb2YgeD09PSdudW1iZXInKXtyZXR1cm4geDt9aWYodHlwZW9mIHg9PT0nc3RyaW5nJyl7cmV0dXJuIHBhcnNlSW50KHgsMTApO31yZXR1cm4gdW5kZWZpbmVkO31mdW5jdGlvbiBkZWZhdWx0SW1hZ2VMb2FkZXIobG9hZGVyUHJvcHMpe2NvbnN0IGxvYWQ9bG9hZGVycy5nZXQoY29uZmlnTG9hZGVyKTtpZihsb2FkKXtyZXR1cm4gbG9hZCgoMCxfZXh0ZW5kczIuZGVmYXVsdCkoe3Jvb3Q6Y29uZmlnUGF0aH0sbG9hZGVyUHJvcHMpKTt9dGhyb3cgbmV3IEVycm9yKGBVbmtub3duIFwibG9hZGVyXCIgZm91bmQgaW4gXCJuZXh0LmNvbmZpZy5qc1wiLiBFeHBlY3RlZDogJHtfaW1hZ2VDb25maWcuVkFMSURfTE9BREVSUy5qb2luKCcsICcpfS4gUmVjZWl2ZWQ6ICR7Y29uZmlnTG9hZGVyfWApO30vLyBTZWUgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xLzM5Nzc3ODMzLzI2NjUzNSBmb3Igd2h5IHdlIHVzZSB0aGlzIHJlZlxuLy8gaGFuZGxlciBpbnN0ZWFkIG9mIHRoZSBpbWcncyBvbkxvYWQgYXR0cmlidXRlLlxuZnVuY3Rpb24gcmVtb3ZlUGxhY2Vob2xkZXIoaW1nLHBsYWNlaG9sZGVyKXtpZihwbGFjZWhvbGRlcj09PSdibHVyJyYmaW1nKXtjb25zdCBoYW5kbGVMb2FkPSgpPT57aWYoIWltZy5zcmMuc3RhcnRzV2l0aCgnZGF0YTonKSl7Y29uc3QgcD0nZGVjb2RlJ2luIGltZz9pbWcuZGVjb2RlKCk6UHJvbWlzZS5yZXNvbHZlKCk7cC5jYXRjaCgoKT0+e30pLnRoZW4oKCk9PntpbWcuc3R5bGUuZmlsdGVyPSdub25lJztpbWcuc3R5bGUuYmFja2dyb3VuZFNpemU9J25vbmUnO2ltZy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2U9J25vbmUnO30pO319O2lmKGltZy5jb21wbGV0ZSl7Ly8gSWYgdGhlIHJlYWwgaW1hZ2UgZmFpbHMgdG8gbG9hZCwgdGhpcyB3aWxsIHN0aWxsIHJlbW92ZSB0aGUgcGxhY2Vob2xkZXIuXG4vLyBUaGlzIGlzIHRoZSBkZXNpcmVkIGJlaGF2aW9yIGZvciBub3csIGFuZCB3aWxsIGJlIHJldmlzaXRlZCB3aGVuIGVycm9yXG4vLyBoYW5kbGluZyBpcyB3b3JrZWQgb24gZm9yIHRoZSBpbWFnZSBjb21wb25lbnQgaXRzZWxmLlxuaGFuZGxlTG9hZCgpO31lbHNle2ltZy5vbmxvYWQ9aGFuZGxlTG9hZDt9fX1mdW5jdGlvbiBJbWFnZShfcmVmKXtsZXR7c3JjLHNpemVzLHVub3B0aW1pemVkPWZhbHNlLHByaW9yaXR5PWZhbHNlLGxvYWRpbmcsY2xhc3NOYW1lLHF1YWxpdHksd2lkdGgsaGVpZ2h0LG9iamVjdEZpdCxvYmplY3RQb3NpdGlvbixsb2FkZXI9ZGVmYXVsdEltYWdlTG9hZGVyLHBsYWNlaG9sZGVyPSdlbXB0eScsYmx1ckRhdGFVUkx9PV9yZWYsYWxsPSgwLF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlMi5kZWZhdWx0KShfcmVmLFtcInNyY1wiLFwic2l6ZXNcIixcInVub3B0aW1pemVkXCIsXCJwcmlvcml0eVwiLFwibG9hZGluZ1wiLFwiY2xhc3NOYW1lXCIsXCJxdWFsaXR5XCIsXCJ3aWR0aFwiLFwiaGVpZ2h0XCIsXCJvYmplY3RGaXRcIixcIm9iamVjdFBvc2l0aW9uXCIsXCJsb2FkZXJcIixcInBsYWNlaG9sZGVyXCIsXCJibHVyRGF0YVVSTFwiXSk7bGV0IHJlc3Q9YWxsO2xldCBsYXlvdXQ9c2l6ZXM/J3Jlc3BvbnNpdmUnOidpbnRyaW5zaWMnO2lmKCdsYXlvdXQnaW4gcmVzdCl7Ly8gT3ZlcnJpZGUgZGVmYXVsdCBsYXlvdXQgaWYgdGhlIHVzZXIgc3BlY2lmaWVkIG9uZTpcbmlmKHJlc3QubGF5b3V0KWxheW91dD1yZXN0LmxheW91dDsvLyBSZW1vdmUgcHJvcGVydHkgc28gaXQncyBub3Qgc3ByZWFkIGludG8gaW1hZ2U6XG5kZWxldGUgcmVzdFsnbGF5b3V0J107fWxldCBzdGF0aWNTcmM9Jyc7aWYoaXNTdGF0aWNJbXBvcnQoc3JjKSl7Y29uc3Qgc3RhdGljSW1hZ2VEYXRhPWlzU3RhdGljUmVxdWlyZShzcmMpP3NyYy5kZWZhdWx0OnNyYztpZighc3RhdGljSW1hZ2VEYXRhLnNyYyl7dGhyb3cgbmV3IEVycm9yKGBBbiBvYmplY3Qgc2hvdWxkIG9ubHkgYmUgcGFzc2VkIHRvIHRoZSBpbWFnZSBjb21wb25lbnQgc3JjIHBhcmFtZXRlciBpZiBpdCBjb21lcyBmcm9tIGEgc3RhdGljIGltYWdlIGltcG9ydC4gSXQgbXVzdCBpbmNsdWRlIHNyYy4gUmVjZWl2ZWQgJHtKU09OLnN0cmluZ2lmeShzdGF0aWNJbWFnZURhdGEpfWApO31ibHVyRGF0YVVSTD1ibHVyRGF0YVVSTHx8c3RhdGljSW1hZ2VEYXRhLmJsdXJEYXRhVVJMO3N0YXRpY1NyYz1zdGF0aWNJbWFnZURhdGEuc3JjO2lmKCFsYXlvdXR8fGxheW91dCE9PSdmaWxsJyl7aGVpZ2h0PWhlaWdodHx8c3RhdGljSW1hZ2VEYXRhLmhlaWdodDt3aWR0aD13aWR0aHx8c3RhdGljSW1hZ2VEYXRhLndpZHRoO2lmKCFzdGF0aWNJbWFnZURhdGEuaGVpZ2h0fHwhc3RhdGljSW1hZ2VEYXRhLndpZHRoKXt0aHJvdyBuZXcgRXJyb3IoYEFuIG9iamVjdCBzaG91bGQgb25seSBiZSBwYXNzZWQgdG8gdGhlIGltYWdlIGNvbXBvbmVudCBzcmMgcGFyYW1ldGVyIGlmIGl0IGNvbWVzIGZyb20gYSBzdGF0aWMgaW1hZ2UgaW1wb3J0LiBJdCBtdXN0IGluY2x1ZGUgaGVpZ2h0IGFuZCB3aWR0aC4gUmVjZWl2ZWQgJHtKU09OLnN0cmluZ2lmeShzdGF0aWNJbWFnZURhdGEpfWApO319fXNyYz10eXBlb2Ygc3JjPT09J3N0cmluZyc/c3JjOnN0YXRpY1NyYztjb25zdCB3aWR0aEludD1nZXRJbnQod2lkdGgpO2NvbnN0IGhlaWdodEludD1nZXRJbnQoaGVpZ2h0KTtjb25zdCBxdWFsaXR5SW50PWdldEludChxdWFsaXR5KTtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7aWYoIXNyYyl7dGhyb3cgbmV3IEVycm9yKGBJbWFnZSBpcyBtaXNzaW5nIHJlcXVpcmVkIFwic3JjXCIgcHJvcGVydHkuIE1ha2Ugc3VyZSB5b3UgcGFzcyBcInNyY1wiIGluIHByb3BzIHRvIHRoZSBcXGBuZXh0L2ltYWdlXFxgIGNvbXBvbmVudC4gUmVjZWl2ZWQ6ICR7SlNPTi5zdHJpbmdpZnkoe3dpZHRoLGhlaWdodCxxdWFsaXR5fSl9YCk7fWlmKCFWQUxJRF9MQVlPVVRfVkFMVUVTLmluY2x1ZGVzKGxheW91dCkpe3Rocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcImxheW91dFwiIHByb3BlcnR5LiBQcm92aWRlZCBcIiR7bGF5b3V0fVwiIHNob3VsZCBiZSBvbmUgb2YgJHtWQUxJRF9MQVlPVVRfVkFMVUVTLm1hcChTdHJpbmcpLmpvaW4oJywnKX0uYCk7fWlmKCFWQUxJRF9MT0FESU5HX1ZBTFVFUy5pbmNsdWRlcyhsb2FkaW5nKSl7dGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBpbnZhbGlkIFwibG9hZGluZ1wiIHByb3BlcnR5LiBQcm92aWRlZCBcIiR7bG9hZGluZ31cIiBzaG91bGQgYmUgb25lIG9mICR7VkFMSURfTE9BRElOR19WQUxVRVMubWFwKFN0cmluZykuam9pbignLCcpfS5gKTt9aWYocHJpb3JpdHkmJmxvYWRpbmc9PT0nbGF6eScpe3Rocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgYm90aCBcInByaW9yaXR5XCIgYW5kIFwibG9hZGluZz0nbGF6eSdcIiBwcm9wZXJ0aWVzLiBPbmx5IG9uZSBzaG91bGQgYmUgdXNlZC5gKTt9aWYocGxhY2Vob2xkZXI9PT0nYmx1cicpe2lmKCh3aWR0aEludHx8MCkqKGhlaWdodEludHx8MCk8MTYwMCl7Y29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGlzIHNtYWxsZXIgdGhhbiA0MHg0MC4gQ29uc2lkZXIgcmVtb3ZpbmcgdGhlIFwicGxhY2Vob2xkZXI9J2JsdXInXCIgcHJvcGVydHkgdG8gaW1wcm92ZSBwZXJmb3JtYW5jZS5gKTt9aWYoIWJsdXJEYXRhVVJMKXtjb25zdCBWQUxJRF9CTFVSX0VYVD1bJ2pwZWcnLCdwbmcnLCd3ZWJwJ107Ly8gc2hvdWxkIG1hdGNoIG5leHQtaW1hZ2UtbG9hZGVyXG50aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIFwicGxhY2Vob2xkZXI9J2JsdXInXCIgcHJvcGVydHkgYnV0IGlzIG1pc3NpbmcgdGhlIFwiYmx1ckRhdGFVUkxcIiBwcm9wZXJ0eS5cbiAgICAgICAgICBQb3NzaWJsZSBzb2x1dGlvbnM6XG4gICAgICAgICAgICAtIEFkZCBhIFwiYmx1ckRhdGFVUkxcIiBwcm9wZXJ0eSwgdGhlIGNvbnRlbnRzIHNob3VsZCBiZSBhIHNtYWxsIERhdGEgVVJMIHRvIHJlcHJlc2VudCB0aGUgaW1hZ2VcbiAgICAgICAgICAgIC0gQ2hhbmdlIHRoZSBcInNyY1wiIHByb3BlcnR5IHRvIGEgc3RhdGljIGltcG9ydCB3aXRoIG9uZSBvZiB0aGUgc3VwcG9ydGVkIGZpbGUgdHlwZXM6ICR7VkFMSURfQkxVUl9FWFQuam9pbignLCcpfVxuICAgICAgICAgICAgLSBSZW1vdmUgdGhlIFwicGxhY2Vob2xkZXJcIiBwcm9wZXJ0eSwgZWZmZWN0aXZlbHkgbm8gYmx1ciBlZmZlY3RcbiAgICAgICAgICBSZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL3BsYWNlaG9sZGVyLWJsdXItZGF0YS11cmxgKTt9fX1sZXQgaXNMYXp5PSFwcmlvcml0eSYmKGxvYWRpbmc9PT0nbGF6eSd8fHR5cGVvZiBsb2FkaW5nPT09J3VuZGVmaW5lZCcpO2lmKHNyYyYmc3JjLnN0YXJ0c1dpdGgoJ2RhdGE6Jykpey8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUVFAvQmFzaWNzX29mX0hUVFAvRGF0YV9VUklzXG51bm9wdGltaXplZD10cnVlO2lzTGF6eT1mYWxzZTt9Y29uc3Rbc2V0UmVmLGlzSW50ZXJzZWN0ZWRdPSgwLF91c2VJbnRlcnNlY3Rpb24udXNlSW50ZXJzZWN0aW9uKSh7cm9vdE1hcmdpbjonMjAwcHgnLGRpc2FibGVkOiFpc0xhenl9KTtjb25zdCBpc1Zpc2libGU9IWlzTGF6eXx8aXNJbnRlcnNlY3RlZDtsZXQgd3JhcHBlclN0eWxlO2xldCBzaXplclN0eWxlO2xldCBzaXplclN2ZztsZXQgaW1nU3R5bGU9KDAsX2V4dGVuZHMyLmRlZmF1bHQpKHtwb3NpdGlvbjonYWJzb2x1dGUnLHRvcDowLGxlZnQ6MCxib3R0b206MCxyaWdodDowLGJveFNpemluZzonYm9yZGVyLWJveCcscGFkZGluZzowLGJvcmRlcjonbm9uZScsbWFyZ2luOidhdXRvJyxkaXNwbGF5OidibG9jaycsd2lkdGg6MCxoZWlnaHQ6MCxtaW5XaWR0aDonMTAwJScsbWF4V2lkdGg6JzEwMCUnLG1pbkhlaWdodDonMTAwJScsbWF4SGVpZ2h0OicxMDAlJyxvYmplY3RGaXQsb2JqZWN0UG9zaXRpb259LHBsYWNlaG9sZGVyPT09J2JsdXInP3tmaWx0ZXI6J2JsdXIoMjBweCknLGJhY2tncm91bmRTaXplOidjb3ZlcicsYmFja2dyb3VuZEltYWdlOmB1cmwoXCIke2JsdXJEYXRhVVJMfVwiKWB9OnVuZGVmaW5lZCk7aWYodHlwZW9mIHdpZHRoSW50IT09J3VuZGVmaW5lZCcmJnR5cGVvZiBoZWlnaHRJbnQhPT0ndW5kZWZpbmVkJyYmbGF5b3V0IT09J2ZpbGwnKXsvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIC8+XG5jb25zdCBxdW90aWVudD1oZWlnaHRJbnQvd2lkdGhJbnQ7Y29uc3QgcGFkZGluZ1RvcD1pc05hTihxdW90aWVudCk/JzEwMCUnOmAke3F1b3RpZW50KjEwMH0lYDtpZihsYXlvdXQ9PT0ncmVzcG9uc2l2ZScpey8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwicmVzcG9uc2l2ZVwiIC8+XG53cmFwcGVyU3R5bGU9e2Rpc3BsYXk6J2Jsb2NrJyxvdmVyZmxvdzonaGlkZGVuJyxwb3NpdGlvbjoncmVsYXRpdmUnLGJveFNpemluZzonYm9yZGVyLWJveCcsbWFyZ2luOjB9O3NpemVyU3R5bGU9e2Rpc3BsYXk6J2Jsb2NrJyxib3hTaXppbmc6J2JvcmRlci1ib3gnLHBhZGRpbmdUb3B9O31lbHNlIGlmKGxheW91dD09PSdpbnRyaW5zaWMnKXsvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cImludHJpbnNpY1wiIC8+XG53cmFwcGVyU3R5bGU9e2Rpc3BsYXk6J2lubGluZS1ibG9jaycsbWF4V2lkdGg6JzEwMCUnLG92ZXJmbG93OidoaWRkZW4nLHBvc2l0aW9uOidyZWxhdGl2ZScsYm94U2l6aW5nOidib3JkZXItYm94JyxtYXJnaW46MH07c2l6ZXJTdHlsZT17Ym94U2l6aW5nOidib3JkZXItYm94JyxkaXNwbGF5OidibG9jaycsbWF4V2lkdGg6JzEwMCUnfTtzaXplclN2Zz1gPHN2ZyB3aWR0aD1cIiR7d2lkdGhJbnR9XCIgaGVpZ2h0PVwiJHtoZWlnaHRJbnR9XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZlcnNpb249XCIxLjFcIi8+YDt9ZWxzZSBpZihsYXlvdXQ9PT0nZml4ZWQnKXsvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cImZpeGVkXCIgLz5cbndyYXBwZXJTdHlsZT17b3ZlcmZsb3c6J2hpZGRlbicsYm94U2l6aW5nOidib3JkZXItYm94JyxkaXNwbGF5OidpbmxpbmUtYmxvY2snLHBvc2l0aW9uOidyZWxhdGl2ZScsd2lkdGg6d2lkdGhJbnQsaGVpZ2h0OmhlaWdodEludH07fX1lbHNlIGlmKHR5cGVvZiB3aWR0aEludD09PSd1bmRlZmluZWQnJiZ0eXBlb2YgaGVpZ2h0SW50PT09J3VuZGVmaW5lZCcmJmxheW91dD09PSdmaWxsJyl7Ly8gPEltYWdlIHNyYz1cImkucG5nXCIgbGF5b3V0PVwiZmlsbFwiIC8+XG53cmFwcGVyU3R5bGU9e2Rpc3BsYXk6J2Jsb2NrJyxvdmVyZmxvdzonaGlkZGVuJyxwb3NpdGlvbjonYWJzb2x1dGUnLHRvcDowLGxlZnQ6MCxib3R0b206MCxyaWdodDowLGJveFNpemluZzonYm9yZGVyLWJveCcsbWFyZ2luOjB9O31lbHNley8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIC8+XG5pZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7dGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIG11c3QgdXNlIFwid2lkdGhcIiBhbmQgXCJoZWlnaHRcIiBwcm9wZXJ0aWVzIG9yIFwibGF5b3V0PSdmaWxsJ1wiIHByb3BlcnR5LmApO319bGV0IGltZ0F0dHJpYnV0ZXM9e3NyYzonZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQVFBQkFJQUFBQUFBQVAvLy95SDVCQUVBQUFBQUxBQUFBQUFCQUFFQUFBSUJSQUE3JyxzcmNTZXQ6dW5kZWZpbmVkLHNpemVzOnVuZGVmaW5lZH07aWYoaXNWaXNpYmxlKXtpbWdBdHRyaWJ1dGVzPWdlbmVyYXRlSW1nQXR0cnMoe3NyYyx1bm9wdGltaXplZCxsYXlvdXQsd2lkdGg6d2lkdGhJbnQscXVhbGl0eTpxdWFsaXR5SW50LHNpemVzLGxvYWRlcn0pO31yZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtzdHlsZTp3cmFwcGVyU3R5bGV9LHNpemVyU3R5bGU/LyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7c3R5bGU6c2l6ZXJTdHlsZX0sc2l6ZXJTdmc/LyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIix7c3R5bGU6e21heFdpZHRoOicxMDAlJyxkaXNwbGF5OidibG9jaycsbWFyZ2luOjAsYm9yZGVyOidub25lJyxwYWRkaW5nOjB9LGFsdDpcIlwiLFwiYXJpYS1oaWRkZW5cIjp0cnVlLHJvbGU6XCJwcmVzZW50YXRpb25cIixzcmM6YGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsJHsoMCxfdG9CYXNlLnRvQmFzZTY0KShzaXplclN2Zyl9YH0pOm51bGwpOm51bGwsIWlzVmlzaWJsZSYmLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJub3NjcmlwdFwiLG51bGwsLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIixPYmplY3QuYXNzaWduKHt9LHJlc3QsZ2VuZXJhdGVJbWdBdHRycyh7c3JjLHVub3B0aW1pemVkLGxheW91dCx3aWR0aDp3aWR0aEludCxxdWFsaXR5OnF1YWxpdHlJbnQsc2l6ZXMsbG9hZGVyfSkse3NyYzpzcmMsZGVjb2Rpbmc6XCJhc3luY1wiLHNpemVzOnNpemVzLHN0eWxlOmltZ1N0eWxlLGNsYXNzTmFtZTpjbGFzc05hbWV9KSkpLC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsT2JqZWN0LmFzc2lnbih7fSxyZXN0LGltZ0F0dHJpYnV0ZXMse2RlY29kaW5nOlwiYXN5bmNcIixjbGFzc05hbWU6Y2xhc3NOYW1lLHJlZjplbGVtZW50PT57c2V0UmVmKGVsZW1lbnQpO3JlbW92ZVBsYWNlaG9sZGVyKGVsZW1lbnQscGxhY2Vob2xkZXIpO30sc3R5bGU6aW1nU3R5bGV9KSkscHJpb3JpdHk/LyojX19QVVJFX18qLyAvLyBOb3RlIGhvdyB3ZSBvbWl0IHRoZSBgaHJlZmAgYXR0cmlidXRlLCBhcyBpdCB3b3VsZCBvbmx5IGJlIHJlbGV2YW50XG4vLyBmb3IgYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBgaW1hZ2VzcmNzZXRgLCBhbmQgaW4gdGhvc2UgY2FzZXNcbi8vIGl0IHdvdWxkIGxpa2VseSBjYXVzZSB0aGUgaW5jb3JyZWN0IGltYWdlIHRvIGJlIHByZWxvYWRlZC5cbi8vXG4vLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9zZW1hbnRpY3MuaHRtbCNhdHRyLWxpbmstaW1hZ2VzcmNzZXRcbl9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX2hlYWQuZGVmYXVsdCxudWxsLC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlua1wiLHtrZXk6J19fbmltZy0nK2ltZ0F0dHJpYnV0ZXMuc3JjK2ltZ0F0dHJpYnV0ZXMuc3JjU2V0K2ltZ0F0dHJpYnV0ZXMuc2l6ZXMscmVsOlwicHJlbG9hZFwiLGFzOlwiaW1hZ2VcIixocmVmOmltZ0F0dHJpYnV0ZXMuc3JjU2V0P3VuZGVmaW5lZDppbWdBdHRyaWJ1dGVzLnNyYy8vIEB0cy1pZ25vcmU6IGltYWdlc3Jjc2V0IGlzIG5vdCB5ZXQgaW4gdGhlIGxpbmsgZWxlbWVudCB0eXBlXG4saW1hZ2VzcmNzZXQ6aW1nQXR0cmlidXRlcy5zcmNTZXQvLyBAdHMtaWdub3JlOiBpbWFnZXNpemVzIGlzIG5vdCB5ZXQgaW4gdGhlIGxpbmsgZWxlbWVudCB0eXBlXG4saW1hZ2VzaXplczppbWdBdHRyaWJ1dGVzLnNpemVzfSkpOm51bGwpO30vL0JVSUxUIElOIExPQURFUlNcbmZ1bmN0aW9uIG5vcm1hbGl6ZVNyYyhzcmMpe3JldHVybiBzcmNbMF09PT0nLyc/c3JjLnNsaWNlKDEpOnNyYzt9ZnVuY3Rpb24gaW1naXhMb2FkZXIoe3Jvb3Qsc3JjLHdpZHRoLHF1YWxpdHl9KXsvLyBEZW1vOiBodHRwczovL3N0YXRpYy5pbWdpeC5uZXQvZGFpc3kucG5nP2Zvcm1hdD1hdXRvJmZpdD1tYXgmdz0zMDBcbmNvbnN0IHBhcmFtcz1bJ2F1dG89Zm9ybWF0JywnZml0PW1heCcsJ3c9Jyt3aWR0aF07bGV0IHBhcmFtc1N0cmluZz0nJztpZihxdWFsaXR5KXtwYXJhbXMucHVzaCgncT0nK3F1YWxpdHkpO31pZihwYXJhbXMubGVuZ3RoKXtwYXJhbXNTdHJpbmc9Jz8nK3BhcmFtcy5qb2luKCcmJyk7fXJldHVybmAke3Jvb3R9JHtub3JtYWxpemVTcmMoc3JjKX0ke3BhcmFtc1N0cmluZ31gO31mdW5jdGlvbiBha2FtYWlMb2FkZXIoe3Jvb3Qsc3JjLHdpZHRofSl7cmV0dXJuYCR7cm9vdH0ke25vcm1hbGl6ZVNyYyhzcmMpfT9pbXdpZHRoPSR7d2lkdGh9YDt9ZnVuY3Rpb24gY2xvdWRpbmFyeUxvYWRlcih7cm9vdCxzcmMsd2lkdGgscXVhbGl0eX0pey8vIERlbW86IGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2RlbW8vaW1hZ2UvdXBsb2FkL3dfMzAwLGNfbGltaXQscV9hdXRvL3R1cnRsZXMuanBnXG5jb25zdCBwYXJhbXM9WydmX2F1dG8nLCdjX2xpbWl0Jywnd18nK3dpZHRoLCdxXycrKHF1YWxpdHl8fCdhdXRvJyldO2xldCBwYXJhbXNTdHJpbmc9cGFyYW1zLmpvaW4oJywnKSsnLyc7cmV0dXJuYCR7cm9vdH0ke3BhcmFtc1N0cmluZ30ke25vcm1hbGl6ZVNyYyhzcmMpfWA7fWZ1bmN0aW9uIGRlZmF1bHRMb2FkZXIoe3Jvb3Qsc3JjLHdpZHRoLHF1YWxpdHl9KXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Y29uc3QgbWlzc2luZ1ZhbHVlcz1bXTsvLyB0aGVzZSBzaG91bGQgYWx3YXlzIGJlIHByb3ZpZGVkIGJ1dCBtYWtlIHN1cmUgdGhleSBhcmVcbmlmKCFzcmMpbWlzc2luZ1ZhbHVlcy5wdXNoKCdzcmMnKTtpZighd2lkdGgpbWlzc2luZ1ZhbHVlcy5wdXNoKCd3aWR0aCcpO2lmKG1pc3NpbmdWYWx1ZXMubGVuZ3RoPjApe3Rocm93IG5ldyBFcnJvcihgTmV4dCBJbWFnZSBPcHRpbWl6YXRpb24gcmVxdWlyZXMgJHttaXNzaW5nVmFsdWVzLmpvaW4oJywgJyl9IHRvIGJlIHByb3ZpZGVkLiBNYWtlIHN1cmUgeW91IHBhc3MgdGhlbSBhcyBwcm9wcyB0byB0aGUgXFxgbmV4dC9pbWFnZVxcYCBjb21wb25lbnQuIFJlY2VpdmVkOiAke0pTT04uc3RyaW5naWZ5KHtzcmMsd2lkdGgscXVhbGl0eX0pfWApO31pZihzcmMuc3RhcnRzV2l0aCgnLy8nKSl7dGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gcGFyc2Ugc3JjIFwiJHtzcmN9XCIgb24gXFxgbmV4dC9pbWFnZVxcYCwgcHJvdG9jb2wtcmVsYXRpdmUgVVJMICgvLykgbXVzdCBiZSBjaGFuZ2VkIHRvIGFuIGFic29sdXRlIFVSTCAoaHR0cDovLyBvciBodHRwczovLylgKTt9aWYoIXNyYy5zdGFydHNXaXRoKCcvJykmJmNvbmZpZ0RvbWFpbnMpe2xldCBwYXJzZWRTcmM7dHJ5e3BhcnNlZFNyYz1uZXcgVVJMKHNyYyk7fWNhdGNoKGVycil7Y29uc29sZS5lcnJvcihlcnIpO3Rocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIHBhcnNlIHNyYyBcIiR7c3JjfVwiIG9uIFxcYG5leHQvaW1hZ2VcXGAsIGlmIHVzaW5nIHJlbGF0aXZlIGltYWdlIGl0IG11c3Qgc3RhcnQgd2l0aCBhIGxlYWRpbmcgc2xhc2ggXCIvXCIgb3IgYmUgYW4gYWJzb2x1dGUgVVJMIChodHRwOi8vIG9yIGh0dHBzOi8vKWApO31pZighY29uZmlnRG9tYWlucy5pbmNsdWRlcyhwYXJzZWRTcmMuaG9zdG5hbWUpKXt0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgc3JjIHByb3AgKCR7c3JjfSkgb24gXFxgbmV4dC9pbWFnZVxcYCwgaG9zdG5hbWUgXCIke3BhcnNlZFNyYy5ob3N0bmFtZX1cIiBpcyBub3QgY29uZmlndXJlZCB1bmRlciBpbWFnZXMgaW4geW91ciBcXGBuZXh0LmNvbmZpZy5qc1xcYFxcbmArYFNlZSBtb3JlIGluZm86IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL25leHQtaW1hZ2UtdW5jb25maWd1cmVkLWhvc3RgKTt9fX1yZXR1cm5gJHtyb290fT91cmw9JHtlbmNvZGVVUklDb21wb25lbnQoc3JjKX0mdz0ke3dpZHRofSZxPSR7cXVhbGl0eXx8NzV9YDt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbWFnZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3JvdXRlcj1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXJcIik7dmFyIF9yb3V0ZXIyPXJlcXVpcmUoXCIuL3JvdXRlclwiKTt2YXIgX3VzZUludGVyc2VjdGlvbj1yZXF1aXJlKFwiLi91c2UtaW50ZXJzZWN0aW9uXCIpO2NvbnN0IHByZWZldGNoZWQ9e307ZnVuY3Rpb24gcHJlZmV0Y2gocm91dGVyLGhyZWYsYXMsb3B0aW9ucyl7aWYodHlwZW9mIHdpbmRvdz09PSd1bmRlZmluZWQnfHwhcm91dGVyKXJldHVybjtpZighKDAsX3JvdXRlci5pc0xvY2FsVVJMKShocmVmKSlyZXR1cm47Ly8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4vLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbnJvdXRlci5wcmVmZXRjaChocmVmLGFzLG9wdGlvbnMpLmNhdGNoKGVycj0+e2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXsvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG50aHJvdyBlcnI7fX0pO2NvbnN0IGN1ckxvY2FsZT1vcHRpb25zJiZ0eXBlb2Ygb3B0aW9ucy5sb2NhbGUhPT0ndW5kZWZpbmVkJz9vcHRpb25zLmxvY2FsZTpyb3V0ZXImJnJvdXRlci5sb2NhbGU7Ly8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbnByZWZldGNoZWRbaHJlZisnJScrYXMrKGN1ckxvY2FsZT8nJScrY3VyTG9jYWxlOicnKV09dHJ1ZTt9ZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50KXtjb25zdHt0YXJnZXR9PWV2ZW50LmN1cnJlbnRUYXJnZXQ7cmV0dXJuIHRhcmdldCYmdGFyZ2V0IT09J19zZWxmJ3x8ZXZlbnQubWV0YUtleXx8ZXZlbnQuY3RybEtleXx8ZXZlbnQuc2hpZnRLZXl8fGV2ZW50LmFsdEtleXx8Ly8gdHJpZ2dlcnMgcmVzb3VyY2UgZG93bmxvYWRcbmV2ZW50Lm5hdGl2ZUV2ZW50JiZldmVudC5uYXRpdmVFdmVudC53aGljaD09PTI7fWZ1bmN0aW9uIGxpbmtDbGlja2VkKGUscm91dGVyLGhyZWYsYXMscmVwbGFjZSxzaGFsbG93LHNjcm9sbCxsb2NhbGUpe2NvbnN0e25vZGVOYW1lfT1lLmN1cnJlbnRUYXJnZXQ7aWYobm9kZU5hbWU9PT0nQScmJihpc01vZGlmaWVkRXZlbnQoZSl8fCEoMCxfcm91dGVyLmlzTG9jYWxVUkwpKGhyZWYpKSl7Ly8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG5yZXR1cm47fWUucHJldmVudERlZmF1bHQoKTsvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbmlmKHNjcm9sbD09bnVsbCYmYXMuaW5kZXhPZignIycpPj0wKXtzY3JvbGw9ZmFsc2U7fS8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxucm91dGVyW3JlcGxhY2U/J3JlcGxhY2UnOidwdXNoJ10oaHJlZixhcyx7c2hhbGxvdyxsb2NhbGUsc2Nyb2xsfSk7fWZ1bmN0aW9uIExpbmsocHJvcHMpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJncyl7cmV0dXJuIG5ldyBFcnJvcihgRmFpbGVkIHByb3AgdHlwZTogVGhlIHByb3AgXFxgJHthcmdzLmtleX1cXGAgZXhwZWN0cyBhICR7YXJncy5leHBlY3RlZH0gaW4gXFxgPExpbms+XFxgLCBidXQgZ290IFxcYCR7YXJncy5hY3R1YWx9XFxgIGluc3RlYWQuYCsodHlwZW9mIHdpbmRvdyE9PSd1bmRlZmluZWQnP1wiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIjonJykpO30vLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuY29uc3QgcmVxdWlyZWRQcm9wc0d1YXJkPXtocmVmOnRydWV9O2NvbnN0IHJlcXVpcmVkUHJvcHM9T2JqZWN0LmtleXMocmVxdWlyZWRQcm9wc0d1YXJkKTtyZXF1aXJlZFByb3BzLmZvckVhY2goa2V5PT57aWYoa2V5PT09J2hyZWYnKXtpZihwcm9wc1trZXldPT1udWxsfHx0eXBlb2YgcHJvcHNba2V5XSE9PSdzdHJpbmcnJiZ0eXBlb2YgcHJvcHNba2V5XSE9PSdvYmplY3QnKXt0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe2tleSxleHBlY3RlZDonYHN0cmluZ2Agb3IgYG9iamVjdGAnLGFjdHVhbDpwcm9wc1trZXldPT09bnVsbD8nbnVsbCc6dHlwZW9mIHByb3BzW2tleV19KTt9fWVsc2V7Ly8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbmNvbnN0IF89a2V5O319KTsvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuY29uc3Qgb3B0aW9uYWxQcm9wc0d1YXJkPXthczp0cnVlLHJlcGxhY2U6dHJ1ZSxzY3JvbGw6dHJ1ZSxzaGFsbG93OnRydWUscGFzc0hyZWY6dHJ1ZSxwcmVmZXRjaDp0cnVlLGxvY2FsZTp0cnVlfTtjb25zdCBvcHRpb25hbFByb3BzPU9iamVjdC5rZXlzKG9wdGlvbmFsUHJvcHNHdWFyZCk7b3B0aW9uYWxQcm9wcy5mb3JFYWNoKGtleT0+e2NvbnN0IHZhbFR5cGU9dHlwZW9mIHByb3BzW2tleV07aWYoa2V5PT09J2FzJyl7aWYocHJvcHNba2V5XSYmdmFsVHlwZSE9PSdzdHJpbmcnJiZ2YWxUeXBlIT09J29iamVjdCcpe3Rocm93IGNyZWF0ZVByb3BFcnJvcih7a2V5LGV4cGVjdGVkOidgc3RyaW5nYCBvciBgb2JqZWN0YCcsYWN0dWFsOnZhbFR5cGV9KTt9fWVsc2UgaWYoa2V5PT09J2xvY2FsZScpe2lmKHByb3BzW2tleV0mJnZhbFR5cGUhPT0nc3RyaW5nJyl7dGhyb3cgY3JlYXRlUHJvcEVycm9yKHtrZXksZXhwZWN0ZWQ6J2BzdHJpbmdgJyxhY3R1YWw6dmFsVHlwZX0pO319ZWxzZSBpZihrZXk9PT0ncmVwbGFjZSd8fGtleT09PSdzY3JvbGwnfHxrZXk9PT0nc2hhbGxvdyd8fGtleT09PSdwYXNzSHJlZid8fGtleT09PSdwcmVmZXRjaCcpe2lmKHByb3BzW2tleV0hPW51bGwmJnZhbFR5cGUhPT0nYm9vbGVhbicpe3Rocm93IGNyZWF0ZVByb3BFcnJvcih7a2V5LGV4cGVjdGVkOidgYm9vbGVhbmAnLGFjdHVhbDp2YWxUeXBlfSk7fX1lbHNley8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG5jb25zdCBfPWtleTt9fSk7Ly8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuY29uc3QgaGFzV2FybmVkPV9yZWFjdC5kZWZhdWx0LnVzZVJlZihmYWxzZSk7aWYocHJvcHMucHJlZmV0Y2gmJiFoYXNXYXJuZWQuY3VycmVudCl7aGFzV2FybmVkLmN1cnJlbnQ9dHJ1ZTtjb25zb2xlLndhcm4oJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJyk7fX1jb25zdCBwPXByb3BzLnByZWZldGNoIT09ZmFsc2U7Y29uc3Qgcm91dGVyPSgwLF9yb3V0ZXIyLnVzZVJvdXRlcikoKTtjb25zdHtocmVmLGFzfT1fcmVhY3QuZGVmYXVsdC51c2VNZW1vKCgpPT57Y29uc3RbcmVzb2x2ZWRIcmVmLHJlc29sdmVkQXNdPSgwLF9yb3V0ZXIucmVzb2x2ZUhyZWYpKHJvdXRlcixwcm9wcy5ocmVmLHRydWUpO3JldHVybntocmVmOnJlc29sdmVkSHJlZixhczpwcm9wcy5hcz8oMCxfcm91dGVyLnJlc29sdmVIcmVmKShyb3V0ZXIscHJvcHMuYXMpOnJlc29sdmVkQXN8fHJlc29sdmVkSHJlZn07fSxbcm91dGVyLHByb3BzLmhyZWYscHJvcHMuYXNdKTtsZXR7Y2hpbGRyZW4scmVwbGFjZSxzaGFsbG93LHNjcm9sbCxsb2NhbGV9PXByb3BzOy8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuaWYodHlwZW9mIGNoaWxkcmVuPT09J3N0cmluZycpe2NoaWxkcmVuPS8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYVwiLG51bGwsY2hpbGRyZW4pO30vLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbmxldCBjaGlsZDtpZihwcm9jZXNzLmVudi5OT0RFX0VOVj09PSdkZXZlbG9wbWVudCcpe3RyeXtjaGlsZD1fcmVhY3QuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7fWNhdGNoKGVycil7dGhyb3cgbmV3IEVycm9yKGBNdWx0aXBsZSBjaGlsZHJlbiB3ZXJlIHBhc3NlZCB0byA8TGluaz4gd2l0aCBcXGBocmVmXFxgIG9mIFxcYCR7cHJvcHMuaHJlZn1cXGAgYnV0IG9ubHkgb25lIGNoaWxkIGlzIHN1cHBvcnRlZCBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9saW5rLW11bHRpcGxlLWNoaWxkcmVuYCsodHlwZW9mIHdpbmRvdyE9PSd1bmRlZmluZWQnP1wiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIjonJykpO319ZWxzZXtjaGlsZD1fcmVhY3QuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7fWNvbnN0IGNoaWxkUmVmPWNoaWxkJiZ0eXBlb2YgY2hpbGQ9PT0nb2JqZWN0JyYmY2hpbGQucmVmO2NvbnN0W3NldEludGVyc2VjdGlvblJlZixpc1Zpc2libGVdPSgwLF91c2VJbnRlcnNlY3Rpb24udXNlSW50ZXJzZWN0aW9uKSh7cm9vdE1hcmdpbjonMjAwcHgnfSk7Y29uc3Qgc2V0UmVmPV9yZWFjdC5kZWZhdWx0LnVzZUNhbGxiYWNrKGVsPT57c2V0SW50ZXJzZWN0aW9uUmVmKGVsKTtpZihjaGlsZFJlZil7aWYodHlwZW9mIGNoaWxkUmVmPT09J2Z1bmN0aW9uJyljaGlsZFJlZihlbCk7ZWxzZSBpZih0eXBlb2YgY2hpbGRSZWY9PT0nb2JqZWN0Jyl7Y2hpbGRSZWYuY3VycmVudD1lbDt9fX0sW2NoaWxkUmVmLHNldEludGVyc2VjdGlvblJlZl0pOygwLF9yZWFjdC51c2VFZmZlY3QpKCgpPT57Y29uc3Qgc2hvdWxkUHJlZmV0Y2g9aXNWaXNpYmxlJiZwJiYoMCxfcm91dGVyLmlzTG9jYWxVUkwpKGhyZWYpO2NvbnN0IGN1ckxvY2FsZT10eXBlb2YgbG9jYWxlIT09J3VuZGVmaW5lZCc/bG9jYWxlOnJvdXRlciYmcm91dGVyLmxvY2FsZTtjb25zdCBpc1ByZWZldGNoZWQ9cHJlZmV0Y2hlZFtocmVmKyclJythcysoY3VyTG9jYWxlPyclJytjdXJMb2NhbGU6JycpXTtpZihzaG91bGRQcmVmZXRjaCYmIWlzUHJlZmV0Y2hlZCl7cHJlZmV0Y2gocm91dGVyLGhyZWYsYXMse2xvY2FsZTpjdXJMb2NhbGV9KTt9fSxbYXMsaHJlZixpc1Zpc2libGUsbG9jYWxlLHAscm91dGVyXSk7Y29uc3QgY2hpbGRQcm9wcz17cmVmOnNldFJlZixvbkNsaWNrOmU9PntpZihjaGlsZC5wcm9wcyYmdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2s9PT0nZnVuY3Rpb24nKXtjaGlsZC5wcm9wcy5vbkNsaWNrKGUpO31pZighZS5kZWZhdWx0UHJldmVudGVkKXtsaW5rQ2xpY2tlZChlLHJvdXRlcixocmVmLGFzLHJlcGxhY2Usc2hhbGxvdyxzY3JvbGwsbG9jYWxlKTt9fX07Y2hpbGRQcm9wcy5vbk1vdXNlRW50ZXI9ZT0+e2lmKCEoMCxfcm91dGVyLmlzTG9jYWxVUkwpKGhyZWYpKXJldHVybjtpZihjaGlsZC5wcm9wcyYmdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcj09PSdmdW5jdGlvbicpe2NoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKTt9cHJlZmV0Y2gocm91dGVyLGhyZWYsYXMse3ByaW9yaXR5OnRydWV9KTt9Oy8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG5pZihwcm9wcy5wYXNzSHJlZnx8Y2hpbGQudHlwZT09PSdhJyYmISgnaHJlZidpbiBjaGlsZC5wcm9wcykpe2NvbnN0IGN1ckxvY2FsZT10eXBlb2YgbG9jYWxlIT09J3VuZGVmaW5lZCc/bG9jYWxlOnJvdXRlciYmcm91dGVyLmxvY2FsZTsvLyB3ZSBvbmx5IHJlbmRlciBkb21haW4gbG9jYWxlcyBpZiB3ZSBhcmUgY3VycmVudGx5IG9uIGEgZG9tYWluIGxvY2FsZVxuLy8gc28gdGhhdCBsb2NhbGUgbGlua3MgYXJlIHN0aWxsIHZpc2l0YWJsZSBpbiBkZXZlbG9wbWVudC9wcmV2aWV3IGVudnNcbmNvbnN0IGxvY2FsZURvbWFpbj1yb3V0ZXImJnJvdXRlci5pc0xvY2FsZURvbWFpbiYmKDAsX3JvdXRlci5nZXREb21haW5Mb2NhbGUpKGFzLGN1ckxvY2FsZSxyb3V0ZXImJnJvdXRlci5sb2NhbGVzLHJvdXRlciYmcm91dGVyLmRvbWFpbkxvY2FsZXMpO2NoaWxkUHJvcHMuaHJlZj1sb2NhbGVEb21haW58fCgwLF9yb3V0ZXIuYWRkQmFzZVBhdGgpKCgwLF9yb3V0ZXIuYWRkTG9jYWxlKShhcyxjdXJMb2NhbGUscm91dGVyJiZyb3V0ZXIuZGVmYXVsdExvY2FsZSkpO31yZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY2xvbmVFbGVtZW50KGNoaWxkLGNoaWxkUHJvcHMpO312YXIgX2RlZmF1bHQ9TGluaztleHBvcnRzLmRlZmF1bHQ9X2RlZmF1bHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1saW5rLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2g9cmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2g7ZXhwb3J0cy5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaD12b2lkIDA7LyoqXG4gKiBSZW1vdmVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggaWYgdGhlcmUgaXMgb25lLiBQcmVzZXJ2ZXMgdGhlIHJvb3QgcGF0aCBgL2AuXG4gKi9mdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKXtyZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpJiZwYXRoIT09Jy8nP3BhdGguc2xpY2UoMCwtMSk6cGF0aDt9LyoqXG4gKiBOb3JtYWxpemVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggYWNjb3JkaW5nIHRvIHRoZSBgdHJhaWxpbmdTbGFzaGAgb3B0aW9uXG4gKiBpbiBgbmV4dC5jb25maWcuanNgLlxuICovY29uc3Qgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2g9cHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIP3BhdGg9PntpZigvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSl7cmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpO31lbHNlIGlmKHBhdGguZW5kc1dpdGgoJy8nKSl7cmV0dXJuIHBhdGg7fWVsc2V7cmV0dXJuIHBhdGgrJy8nO319OnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoO2V4cG9ydHMubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2g9bm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2g7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ub3JtYWxpemUtdHJhaWxpbmctc2xhc2guanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5jYW5jZWxJZGxlQ2FsbGJhY2s9ZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrPXZvaWQgMDtjb25zdCByZXF1ZXN0SWRsZUNhbGxiYWNrPXR5cGVvZiBzZWxmIT09J3VuZGVmaW5lZCcmJnNlbGYucmVxdWVzdElkbGVDYWxsYmFja3x8ZnVuY3Rpb24oY2Ipe2xldCBzdGFydD1EYXRlLm5vdygpO3JldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7Y2Ioe2RpZFRpbWVvdXQ6ZmFsc2UsdGltZVJlbWFpbmluZzpmdW5jdGlvbigpe3JldHVybiBNYXRoLm1heCgwLDUwLShEYXRlLm5vdygpLXN0YXJ0KSk7fX0pO30sMSk7fTtleHBvcnRzLnJlcXVlc3RJZGxlQ2FsbGJhY2s9cmVxdWVzdElkbGVDYWxsYmFjaztjb25zdCBjYW5jZWxJZGxlQ2FsbGJhY2s9dHlwZW9mIHNlbGYhPT0ndW5kZWZpbmVkJyYmc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2t8fGZ1bmN0aW9uKGlkKXtyZXR1cm4gY2xlYXJUaW1lb3V0KGlkKTt9O2V4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrPWNhbmNlbElkbGVDYWxsYmFjaztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlcXVlc3QtaWRsZS1jYWxsYmFjay5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5tYXJrQXNzZXRFcnJvcj1tYXJrQXNzZXRFcnJvcjtleHBvcnRzLmlzQXNzZXRFcnJvcj1pc0Fzc2V0RXJyb3I7ZXhwb3J0cy5nZXRDbGllbnRCdWlsZE1hbmlmZXN0PWdldENsaWVudEJ1aWxkTWFuaWZlc3Q7ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX2dldEFzc2V0UGF0aEZyb21Sb3V0ZT1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGVcIikpO3ZhciBfcmVxdWVzdElkbGVDYWxsYmFjaz1yZXF1aXJlKFwiLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2tcIik7Ly8gMy44cyB3YXMgYXJiaXRyYXJpbHkgY2hvc2VuIGFzIGl0J3Mgd2hhdCBodHRwczovL3dlYi5kZXYvaW50ZXJhY3RpdmVcbi8vIGNvbnNpZGVycyBhcyBcIkdvb2RcIiB0aW1lLXRvLWludGVyYWN0aXZlLiBXZSBtdXN0IGFzc3VtZSBzb21ldGhpbmcgd2VudFxuLy8gd3JvbmcgYmV5b25kIHRoaXMgcG9pbnQsIGFuZCB0aGVuIGZhbGwtYmFjayB0byBhIGZ1bGwgcGFnZSB0cmFuc2l0aW9uIHRvXG4vLyBzaG93IHRoZSB1c2VyIHNvbWV0aGluZyBvZiB2YWx1ZS5cbmNvbnN0IE1TX01BWF9JRExFX0RFTEFZPTM4MDA7ZnVuY3Rpb24gd2l0aEZ1dHVyZShrZXksbWFwLGdlbmVyYXRvcil7bGV0IGVudHJ5PW1hcC5nZXQoa2V5KTtpZihlbnRyeSl7aWYoJ2Z1dHVyZSdpbiBlbnRyeSl7cmV0dXJuIGVudHJ5LmZ1dHVyZTt9cmV0dXJuIFByb21pc2UucmVzb2x2ZShlbnRyeSk7fWxldCByZXNvbHZlcjtjb25zdCBwcm9tPW5ldyBQcm9taXNlKHJlc29sdmU9PntyZXNvbHZlcj1yZXNvbHZlO30pO21hcC5zZXQoa2V5LGVudHJ5PXtyZXNvbHZlOnJlc29sdmVyLGZ1dHVyZTpwcm9tfSk7cmV0dXJuIGdlbmVyYXRvcj8vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG5nZW5lcmF0b3IoKS50aGVuKHZhbHVlPT4ocmVzb2x2ZXIodmFsdWUpLHZhbHVlKSk6cHJvbTt9ZnVuY3Rpb24gaGFzUHJlZmV0Y2gobGluayl7dHJ5e2xpbms9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO3JldHVybigvLyBkZXRlY3QgSUUxMSBzaW5jZSBpdCBzdXBwb3J0cyBwcmVmZXRjaCBidXQgaXNuJ3QgZGV0ZWN0ZWRcbi8vIHdpdGggcmVsTGlzdC5zdXBwb3J0XG4hIXdpbmRvdy5NU0lucHV0TWV0aG9kQ29udGV4dCYmISFkb2N1bWVudC5kb2N1bWVudE1vZGV8fGxpbmsucmVsTGlzdC5zdXBwb3J0cygncHJlZmV0Y2gnKSk7fWNhdGNoKF91bnVzZWQpe3JldHVybiBmYWxzZTt9fWNvbnN0IGNhblByZWZldGNoPWhhc1ByZWZldGNoKCk7ZnVuY3Rpb24gcHJlZmV0Y2hWaWFEb20oaHJlZixhcyxsaW5rKXtyZXR1cm4gbmV3IFByb21pc2UoKHJlcyxyZWopPT57aWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGlua1tyZWw9XCJwcmVmZXRjaFwiXVtocmVmXj1cIiR7aHJlZn1cIl1gKSl7cmV0dXJuIHJlcygpO31saW5rPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTsvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsOlxuaWYoYXMpbGluay5hcz1hcztsaW5rLnJlbD1gcHJlZmV0Y2hgO2xpbmsuY3Jvc3NPcmlnaW49cHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTjtsaW5rLm9ubG9hZD1yZXM7bGluay5vbmVycm9yPXJlajsvLyBgaHJlZmAgc2hvdWxkIGFsd2F5cyBiZSBsYXN0OlxubGluay5ocmVmPWhyZWY7ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rKTt9KTt9Y29uc3QgQVNTRVRfTE9BRF9FUlJPUj1TeW1ib2woJ0FTU0VUX0xPQURfRVJST1InKTsvLyBUT0RPOiB1bmV4cG9ydFxuZnVuY3Rpb24gbWFya0Fzc2V0RXJyb3IoZXJyKXtyZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVycixBU1NFVF9MT0FEX0VSUk9SLHt9KTt9ZnVuY3Rpb24gaXNBc3NldEVycm9yKGVycil7cmV0dXJuIGVyciYmQVNTRVRfTE9BRF9FUlJPUiBpbiBlcnI7fWZ1bmN0aW9uIGFwcGVuZFNjcmlwdChzcmMsc2NyaXB0KXtyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUscmVqZWN0KT0+e3NjcmlwdD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTsvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsLlxuLy8gMS4gU2V0dXAgc3VjY2Vzcy9mYWlsdXJlIGhvb2tzIGluIGNhc2UgdGhlIGJyb3dzZXIgc3luY2hyb25vdXNseVxuLy8gICAgZXhlY3V0ZXMgd2hlbiBgc3JjYCBpcyBzZXQuXG5zY3JpcHQub25sb2FkPXJlc29sdmU7c2NyaXB0Lm9uZXJyb3I9KCk9PnJlamVjdChtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHNjcmlwdDogJHtzcmN9YCkpKTsvLyAyLiBDb25maWd1cmUgdGhlIGNyb3NzLW9yaWdpbiBhdHRyaWJ1dGUgYmVmb3JlIHNldHRpbmcgYHNyY2AgaW4gY2FzZSB0aGVcbi8vICAgIGJyb3dzZXIgYmVnaW5zIHRvIGZldGNoLlxuc2NyaXB0LmNyb3NzT3JpZ2luPXByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU47Ly8gMy4gRmluYWxseSwgc2V0IHRoZSBzb3VyY2UgYW5kIGluamVjdCBpbnRvIHRoZSBET00gaW4gY2FzZSB0aGUgY2hpbGRcbi8vICAgIG11c3QgYmUgYXBwZW5kZWQgZm9yIGZldGNoaW5nIHRvIHN0YXJ0Llxuc2NyaXB0LnNyYz1zcmM7ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO30pO30vLyBSZXNvbHZlIGEgcHJvbWlzZSB0aGF0IHRpbWVzIG91dCBhZnRlciBnaXZlbiBhbW91bnQgb2YgbWlsbGlzZWNvbmRzLlxuZnVuY3Rpb24gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChwLG1zLGVycil7cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9PntsZXQgY2FuY2VsbGVkPWZhbHNlO3AudGhlbihyPT57Ly8gUmVzb2x2ZWQsIGNhbmNlbCB0aGUgdGltZW91dFxuY2FuY2VsbGVkPXRydWU7cmVzb2x2ZShyKTt9KS5jYXRjaChyZWplY3QpOygwLF9yZXF1ZXN0SWRsZUNhbGxiYWNrLnJlcXVlc3RJZGxlQ2FsbGJhY2spKCgpPT5zZXRUaW1lb3V0KCgpPT57aWYoIWNhbmNlbGxlZCl7cmVqZWN0KGVycik7fX0sbXMpKTt9KTt9Ly8gVE9ETzogc3RvcCBleHBvcnRpbmcgb3IgY2FjaGUgdGhlIGZhaWx1cmVcbi8vIEl0J2QgYmUgYmVzdCB0byBzdG9wIGV4cG9ydGluZyB0aGlzLiBJdCdzIGFuIGltcGxlbWVudGF0aW9uIGRldGFpbC4gV2UncmVcbi8vIG9ubHkgZXhwb3J0aW5nIGl0IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbHR5IHdpdGggdGhlIGBwYWdlLWxvYWRlcmAuXG4vLyBPbmx5IGNhY2hlIHRoaXMgcmVzcG9uc2UgYXMgYSBsYXN0IHJlc29ydCBpZiB3ZSBjYW5ub3QgZWxpbWluYXRlIGFsbCBvdGhlclxuLy8gY29kZSBicmFuY2hlcyB0aGF0IHVzZSB0aGUgQnVpbGQgTWFuaWZlc3QgQ2FsbGJhY2sgYW5kIHB1c2ggdGhlbSB0aHJvdWdoXG4vLyB0aGUgUm91dGUgTG9hZGVyIGludGVyZmFjZS5cbmZ1bmN0aW9uIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKXtpZihzZWxmLl9fQlVJTERfTUFOSUZFU1Qpe3JldHVybiBQcm9taXNlLnJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKTt9Y29uc3Qgb25CdWlsZE1hbmlmZXN0PW5ldyBQcm9taXNlKHJlc29sdmU9PnsvLyBNYW5kYXRvcnkgYmVjYXVzZSB0aGlzIGlzIG5vdCBjb25jdXJyZW50IHNhZmU6XG5jb25zdCBjYj1zZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0I7c2VsZi5fX0JVSUxEX01BTklGRVNUX0NCPSgpPT57cmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpO2NiJiZjYigpO307fSk7cmV0dXJuIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQob25CdWlsZE1hbmlmZXN0LE1TX01BWF9JRExFX0RFTEFZLG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcignRmFpbGVkIHRvIGxvYWQgY2xpZW50IGJ1aWxkIG1hbmlmZXN0JykpKTt9ZnVuY3Rpb24gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCxyb3V0ZSl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlY9PT0nZGV2ZWxvcG1lbnQnKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHtzY3JpcHRzOlthc3NldFByZWZpeCsnL19uZXh0L3N0YXRpYy9jaHVua3MvcGFnZXMnK2VuY29kZVVSSSgoMCxfZ2V0QXNzZXRQYXRoRnJvbVJvdXRlLmRlZmF1bHQpKHJvdXRlLCcuanMnKSldLC8vIFN0eWxlcyBhcmUgaGFuZGxlZCBieSBgc3R5bGUtbG9hZGVyYCBpbiBkZXZlbG9wbWVudDpcbmNzczpbXX0pO31yZXR1cm4gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpLnRoZW4obWFuaWZlc3Q9PntpZighKHJvdXRlIGluIG1hbmlmZXN0KSl7dGhyb3cgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9va3VwIHJvdXRlOiAke3JvdXRlfWApKTt9Y29uc3QgYWxsRmlsZXM9bWFuaWZlc3Rbcm91dGVdLm1hcChlbnRyeT0+YXNzZXRQcmVmaXgrJy9fbmV4dC8nK2VuY29kZVVSSShlbnRyeSkpO3JldHVybntzY3JpcHRzOmFsbEZpbGVzLmZpbHRlcih2PT52LmVuZHNXaXRoKCcuanMnKSksY3NzOmFsbEZpbGVzLmZpbHRlcih2PT52LmVuZHNXaXRoKCcuY3NzJykpfTt9KTt9ZnVuY3Rpb24gY3JlYXRlUm91dGVMb2FkZXIoYXNzZXRQcmVmaXgpe2NvbnN0IGVudHJ5cG9pbnRzPW5ldyBNYXAoKTtjb25zdCBsb2FkZWRTY3JpcHRzPW5ldyBNYXAoKTtjb25zdCBzdHlsZVNoZWV0cz1uZXcgTWFwKCk7Y29uc3Qgcm91dGVzPW5ldyBNYXAoKTtmdW5jdGlvbiBtYXliZUV4ZWN1dGVTY3JpcHQoc3JjKXtsZXQgcHJvbT1sb2FkZWRTY3JpcHRzLmdldChzcmMpO2lmKHByb20pe3JldHVybiBwcm9tO30vLyBTa2lwIGV4ZWN1dGluZyBzY3JpcHQgaWYgaXQncyBhbHJlYWR5IGluIHRoZSBET006XG5pZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBzY3JpcHRbc3JjXj1cIiR7c3JjfVwiXWApKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7fWxvYWRlZFNjcmlwdHMuc2V0KHNyYyxwcm9tPWFwcGVuZFNjcmlwdChzcmMpKTtyZXR1cm4gcHJvbTt9ZnVuY3Rpb24gZmV0Y2hTdHlsZVNoZWV0KGhyZWYpe2xldCBwcm9tPXN0eWxlU2hlZXRzLmdldChocmVmKTtpZihwcm9tKXtyZXR1cm4gcHJvbTt9c3R5bGVTaGVldHMuc2V0KGhyZWYscHJvbT1mZXRjaChocmVmKS50aGVuKHJlcz0+e2lmKCFyZXMub2spe3Rocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3R5bGVzaGVldDogJHtocmVmfWApO31yZXR1cm4gcmVzLnRleHQoKS50aGVuKHRleHQ9Pih7aHJlZjpocmVmLGNvbnRlbnQ6dGV4dH0pKTt9KS5jYXRjaChlcnI9Pnt0aHJvdyBtYXJrQXNzZXRFcnJvcihlcnIpO30pKTtyZXR1cm4gcHJvbTt9cmV0dXJue3doZW5FbnRyeXBvaW50KHJvdXRlKXtyZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSxlbnRyeXBvaW50cyk7fSxvbkVudHJ5cG9pbnQocm91dGUsZXhlY3V0ZSl7UHJvbWlzZS5yZXNvbHZlKGV4ZWN1dGUpLnRoZW4oZm49PmZuKCkpLnRoZW4oZXhwb3J0cz0+KHtjb21wb25lbnQ6ZXhwb3J0cyYmZXhwb3J0cy5kZWZhdWx0fHxleHBvcnRzLGV4cG9ydHM6ZXhwb3J0c30pLGVycj0+KHtlcnJvcjplcnJ9KSkudGhlbihpbnB1dD0+e2NvbnN0IG9sZD1lbnRyeXBvaW50cy5nZXQocm91dGUpO2VudHJ5cG9pbnRzLnNldChyb3V0ZSxpbnB1dCk7aWYob2xkJiYncmVzb2x2ZSdpbiBvbGQpb2xkLnJlc29sdmUoaW5wdXQpO30pO30sbG9hZFJvdXRlKHJvdXRlLHByZWZldGNoKXtyZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSxyb3V0ZXMsKCk9PntyZXR1cm4gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LHJvdXRlKS50aGVuKCh7c2NyaXB0cyxjc3N9KT0+e3JldHVybiBQcm9taXNlLmFsbChbZW50cnlwb2ludHMuaGFzKHJvdXRlKT9bXTpQcm9taXNlLmFsbChzY3JpcHRzLm1hcChtYXliZUV4ZWN1dGVTY3JpcHQpKSxQcm9taXNlLmFsbChjc3MubWFwKGZldGNoU3R5bGVTaGVldCkpXSk7fSkudGhlbihyZXM9PntyZXR1cm4gdGhpcy53aGVuRW50cnlwb2ludChyb3V0ZSkudGhlbihlbnRyeXBvaW50PT4oe2VudHJ5cG9pbnQsc3R5bGVzOnJlc1sxXX0pKTt9KSxNU19NQVhfSURMRV9ERUxBWSxtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYFJvdXRlIGRpZCBub3QgY29tcGxldGUgbG9hZGluZzogJHtyb3V0ZX1gKSkpLnRoZW4oKHtlbnRyeXBvaW50LHN0eWxlc30pPT57Y29uc3QgcmVzPU9iamVjdC5hc3NpZ24oe3N0eWxlczpzdHlsZXN9LGVudHJ5cG9pbnQpO3JldHVybidlcnJvcidpbiBlbnRyeXBvaW50P2VudHJ5cG9pbnQ6cmVzO30pLmNhdGNoKGVycj0+e2lmKHByZWZldGNoKXsvLyB3ZSBkb24ndCB3YW50IHRvIGNhY2hlIGVycm9ycyBkdXJpbmcgcHJlZmV0Y2hcbnRocm93IGVycjt9cmV0dXJue2Vycm9yOmVycn07fSk7fSk7fSxwcmVmZXRjaChyb3V0ZSl7Ly8gaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZUxhYnMvcXVpY2tsaW5rL2Jsb2IvNDUzYTY2MWZhMWZhOTQwZTJkMmUwNDQ0NTIzOThlMzhjNjdhOThmYi9zcmMvaW5kZXgubWpzI0wxMTUtTDExOFxuLy8gTGljZW5zZTogQXBhY2hlIDIuMFxubGV0IGNuO2lmKGNuPW5hdmlnYXRvci5jb25uZWN0aW9uKXsvLyBEb24ndCBwcmVmZXRjaCBpZiB1c2luZyAyRyBvciBpZiBTYXZlLURhdGEgaXMgZW5hYmxlZC5cbmlmKGNuLnNhdmVEYXRhfHwvMmcvLnRlc3QoY24uZWZmZWN0aXZlVHlwZSkpcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO31yZXR1cm4gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCxyb3V0ZSkudGhlbihvdXRwdXQ9PlByb21pc2UuYWxsKGNhblByZWZldGNoP291dHB1dC5zY3JpcHRzLm1hcChzY3JpcHQ9PnByZWZldGNoVmlhRG9tKHNjcmlwdCwnc2NyaXB0JykpOltdKSkudGhlbigoKT0+eygwLF9yZXF1ZXN0SWRsZUNhbGxiYWNrLnJlcXVlc3RJZGxlQ2FsbGJhY2spKCgpPT50aGlzLmxvYWRSb3V0ZShyb3V0ZSx0cnVlKS5jYXRjaCgoKT0+e30pKTt9KS5jYXRjaCgvLyBzd2FsbG93IHByZWZldGNoIGVycm9yc1xuKCk9Pnt9KTt9fTt9dmFyIF9kZWZhdWx0PWNyZWF0ZVJvdXRlTG9hZGVyO2V4cG9ydHMuZGVmYXVsdD1fZGVmYXVsdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlLWxvYWRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy51c2VSb3V0ZXI9dXNlUm91dGVyO2V4cG9ydHMubWFrZVB1YmxpY1JvdXRlckluc3RhbmNlPW1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZTtleHBvcnRzLmNyZWF0ZVJvdXRlcj1leHBvcnRzLndpdGhSb3V0ZXI9ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3JvdXRlcjI9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyXCIpKTtleHBvcnRzLlJvdXRlcj1fcm91dGVyMi5kZWZhdWx0O2V4cG9ydHMuTmV4dFJvdXRlcj1fcm91dGVyMi5OZXh0Um91dGVyO3ZhciBfcm91dGVyQ29udGV4dD1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0XCIpO3ZhciBfd2l0aFJvdXRlcj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3dpdGgtcm91dGVyXCIpKTtleHBvcnRzLndpdGhSb3V0ZXI9X3dpdGhSb3V0ZXIuZGVmYXVsdDsvKiBnbG9iYWwgd2luZG93ICovY29uc3Qgc2luZ2xldG9uUm91dGVyPXtyb3V0ZXI6bnVsbCwvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxucmVhZHlDYWxsYmFja3M6W10scmVhZHkoY2Ipe2lmKHRoaXMucm91dGVyKXJldHVybiBjYigpO2lmKHR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJyl7dGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKTt9fX07Ly8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHM9WydwYXRobmFtZScsJ3JvdXRlJywncXVlcnknLCdhc1BhdGgnLCdjb21wb25lbnRzJywnaXNGYWxsYmFjaycsJ2Jhc2VQYXRoJywnbG9jYWxlJywnbG9jYWxlcycsJ2RlZmF1bHRMb2NhbGUnLCdpc1JlYWR5JywnaXNQcmV2aWV3JywnaXNMb2NhbGVEb21haW4nXTtjb25zdCByb3V0ZXJFdmVudHM9Wydyb3V0ZUNoYW5nZVN0YXJ0JywnYmVmb3JlSGlzdG9yeUNoYW5nZScsJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCdyb3V0ZUNoYW5nZUVycm9yJywnaGFzaENoYW5nZVN0YXJ0JywnaGFzaENoYW5nZUNvbXBsZXRlJ107Y29uc3QgY29yZU1ldGhvZEZpZWxkcz1bJ3B1c2gnLCdyZXBsYWNlJywncmVsb2FkJywnYmFjaycsJ3ByZWZldGNoJywnYmVmb3JlUG9wU3RhdGUnXTsvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCdldmVudHMnLHtnZXQoKXtyZXR1cm4gX3JvdXRlcjIuZGVmYXVsdC5ldmVudHM7fX0pO3VybFByb3BlcnR5RmllbGRzLmZvckVhY2goZmllbGQ9PnsvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlIHdlIG5lZWQgdG8gcmV0dXJuXG4vLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbi8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsZmllbGQse2dldCgpe2NvbnN0IHJvdXRlcj1nZXRSb3V0ZXIoKTtyZXR1cm4gcm91dGVyW2ZpZWxkXTt9fSk7fSk7Y29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKGZpZWxkPT57Ly8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbjtzaW5nbGV0b25Sb3V0ZXJbZmllbGRdPSguLi5hcmdzKT0+e2NvbnN0IHJvdXRlcj1nZXRSb3V0ZXIoKTtyZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKTt9O30pO3JvdXRlckV2ZW50cy5mb3JFYWNoKGV2ZW50PT57c2luZ2xldG9uUm91dGVyLnJlYWR5KCgpPT57X3JvdXRlcjIuZGVmYXVsdC5ldmVudHMub24oZXZlbnQsKC4uLmFyZ3MpPT57Y29uc3QgZXZlbnRGaWVsZD1gb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKDEpfWA7Y29uc3QgX3NpbmdsZXRvblJvdXRlcj1zaW5nbGV0b25Sb3V0ZXI7aWYoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSl7dHJ5e19zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncyk7fWNhdGNoKGVycil7Y29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKTtjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApO319fSk7fSk7fSk7ZnVuY3Rpb24gZ2V0Um91dGVyKCl7aWYoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpe2NvbnN0IG1lc3NhZ2U9J05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nKydZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBvbiB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJzt0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7fXJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyO30vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbnZhciBfZGVmYXVsdD1zaW5nbGV0b25Sb3V0ZXI7Ly8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydHMuZGVmYXVsdD1fZGVmYXVsdDtmdW5jdGlvbiB1c2VSb3V0ZXIoKXtyZXR1cm4gX3JlYWN0LmRlZmF1bHQudXNlQ29udGV4dChfcm91dGVyQ29udGV4dC5Sb3V0ZXJDb250ZXh0KTt9Ly8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIGJlIHVzZWQgaW5zaWRlIHRoZSBzZXJ2ZXIuXG5jb25zdCBjcmVhdGVSb3V0ZXI9KC4uLmFyZ3MpPT57c2luZ2xldG9uUm91dGVyLnJvdXRlcj1uZXcgX3JvdXRlcjIuZGVmYXVsdCguLi5hcmdzKTtzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaChjYj0+Y2IoKSk7c2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzPVtdO3JldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyO307Ly8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYHdpdGhSb3V0ZXJgIHJvdXRlciBpbnN0YW5jZVxuZXhwb3J0cy5jcmVhdGVSb3V0ZXI9Y3JlYXRlUm91dGVyO2Z1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXIpe2NvbnN0IF9yb3V0ZXI9cm91dGVyO2NvbnN0IGluc3RhbmNlPXt9O2Zvcihjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcyl7aWYodHlwZW9mIF9yb3V0ZXJbcHJvcGVydHldPT09J29iamVjdCcpe2luc3RhbmNlW3Byb3BlcnR5XT1PYmplY3QuYXNzaWduKEFycmF5LmlzQXJyYXkoX3JvdXRlcltwcm9wZXJ0eV0pP1tdOnt9LF9yb3V0ZXJbcHJvcGVydHldKTsvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuY29udGludWU7fWluc3RhbmNlW3Byb3BlcnR5XT1fcm91dGVyW3Byb3BlcnR5XTt9Ly8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuaW5zdGFuY2UuZXZlbnRzPV9yb3V0ZXIyLmRlZmF1bHQuZXZlbnRzO2NvcmVNZXRob2RGaWVsZHMuZm9yRWFjaChmaWVsZD0+e2luc3RhbmNlW2ZpZWxkXT0oLi4uYXJncyk9PntyZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJncyk7fTt9KTtyZXR1cm4gaW5zdGFuY2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMudXNlSW50ZXJzZWN0aW9uPXVzZUludGVyc2VjdGlvbjt2YXIgX3JlYWN0PXJlcXVpcmUoXCJyZWFjdFwiKTt2YXIgX3JlcXVlc3RJZGxlQ2FsbGJhY2s9cmVxdWlyZShcIi4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrXCIpO2NvbnN0IGhhc0ludGVyc2VjdGlvbk9ic2VydmVyPXR5cGVvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciE9PSd1bmRlZmluZWQnO2Z1bmN0aW9uIHVzZUludGVyc2VjdGlvbih7cm9vdE1hcmdpbixkaXNhYmxlZH0pe2NvbnN0IGlzRGlzYWJsZWQ9ZGlzYWJsZWR8fCFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcjtjb25zdCB1bm9ic2VydmU9KDAsX3JlYWN0LnVzZVJlZikoKTtjb25zdFt2aXNpYmxlLHNldFZpc2libGVdPSgwLF9yZWFjdC51c2VTdGF0ZSkoZmFsc2UpO2NvbnN0IHNldFJlZj0oMCxfcmVhY3QudXNlQ2FsbGJhY2spKGVsPT57aWYodW5vYnNlcnZlLmN1cnJlbnQpe3Vub2JzZXJ2ZS5jdXJyZW50KCk7dW5vYnNlcnZlLmN1cnJlbnQ9dW5kZWZpbmVkO31pZihpc0Rpc2FibGVkfHx2aXNpYmxlKXJldHVybjtpZihlbCYmZWwudGFnTmFtZSl7dW5vYnNlcnZlLmN1cnJlbnQ9b2JzZXJ2ZShlbCxpc1Zpc2libGU9PmlzVmlzaWJsZSYmc2V0VmlzaWJsZShpc1Zpc2libGUpLHtyb290TWFyZ2lufSk7fX0sW2lzRGlzYWJsZWQscm9vdE1hcmdpbix2aXNpYmxlXSk7KDAsX3JlYWN0LnVzZUVmZmVjdCkoKCk9PntpZighaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpe2lmKCF2aXNpYmxlKXtjb25zdCBpZGxlQ2FsbGJhY2s9KDAsX3JlcXVlc3RJZGxlQ2FsbGJhY2sucmVxdWVzdElkbGVDYWxsYmFjaykoKCk9PnNldFZpc2libGUodHJ1ZSkpO3JldHVybigpPT4oMCxfcmVxdWVzdElkbGVDYWxsYmFjay5jYW5jZWxJZGxlQ2FsbGJhY2spKGlkbGVDYWxsYmFjayk7fX19LFt2aXNpYmxlXSk7cmV0dXJuW3NldFJlZix2aXNpYmxlXTt9ZnVuY3Rpb24gb2JzZXJ2ZShlbGVtZW50LGNhbGxiYWNrLG9wdGlvbnMpe2NvbnN0e2lkLG9ic2VydmVyLGVsZW1lbnRzfT1jcmVhdGVPYnNlcnZlcihvcHRpb25zKTtlbGVtZW50cy5zZXQoZWxlbWVudCxjYWxsYmFjayk7b2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KTtyZXR1cm4gZnVuY3Rpb24gdW5vYnNlcnZlKCl7ZWxlbWVudHMuZGVsZXRlKGVsZW1lbnQpO29ic2VydmVyLnVub2JzZXJ2ZShlbGVtZW50KTsvLyBEZXN0cm95IG9ic2VydmVyIHdoZW4gdGhlcmUncyBub3RoaW5nIGxlZnQgdG8gd2F0Y2g6XG5pZihlbGVtZW50cy5zaXplPT09MCl7b2JzZXJ2ZXIuZGlzY29ubmVjdCgpO29ic2VydmVycy5kZWxldGUoaWQpO319O31jb25zdCBvYnNlcnZlcnM9bmV3IE1hcCgpO2Z1bmN0aW9uIGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpe2NvbnN0IGlkPW9wdGlvbnMucm9vdE1hcmdpbnx8Jyc7bGV0IGluc3RhbmNlPW9ic2VydmVycy5nZXQoaWQpO2lmKGluc3RhbmNlKXtyZXR1cm4gaW5zdGFuY2U7fWNvbnN0IGVsZW1lbnRzPW5ldyBNYXAoKTtjb25zdCBvYnNlcnZlcj1uZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZW50cmllcz0+e2VudHJpZXMuZm9yRWFjaChlbnRyeT0+e2NvbnN0IGNhbGxiYWNrPWVsZW1lbnRzLmdldChlbnRyeS50YXJnZXQpO2NvbnN0IGlzVmlzaWJsZT1lbnRyeS5pc0ludGVyc2VjdGluZ3x8ZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8+MDtpZihjYWxsYmFjayYmaXNWaXNpYmxlKXtjYWxsYmFjayhpc1Zpc2libGUpO319KTt9LG9wdGlvbnMpO29ic2VydmVycy5zZXQoaWQsaW5zdGFuY2U9e2lkLG9ic2VydmVyLGVsZW1lbnRzfSk7cmV0dXJuIGluc3RhbmNlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1pbnRlcnNlY3Rpb24uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGVmYXVsdD13aXRoUm91dGVyO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfcm91dGVyPXJlcXVpcmUoXCIuL3JvdXRlclwiKTtmdW5jdGlvbiB3aXRoUm91dGVyKENvbXBvc2VkQ29tcG9uZW50KXtmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wcyl7cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29tcG9zZWRDb21wb25lbnQsT2JqZWN0LmFzc2lnbih7cm91dGVyOigwLF9yb3V0ZXIudXNlUm91dGVyKSgpfSxwcm9wcykpO31XaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHM9Q29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuO1dpdGhSb3V0ZXJXcmFwcGVyLm9yaWdHZXRJbml0aWFsUHJvcHM9Q29tcG9zZWRDb21wb25lbnQub3JpZ0dldEluaXRpYWxQcm9wcztpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Y29uc3QgbmFtZT1Db21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZXx8Q29tcG9zZWRDb21wb25lbnQubmFtZXx8J1Vua25vd24nO1dpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lPWB3aXRoUm91dGVyKCR7bmFtZX0pYDt9cmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdpdGgtcm91dGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubm9ybWFsaXplTG9jYWxlUGF0aD1ub3JtYWxpemVMb2NhbGVQYXRoO2Z1bmN0aW9uIG5vcm1hbGl6ZUxvY2FsZVBhdGgocGF0aG5hbWUsbG9jYWxlcyl7bGV0IGRldGVjdGVkTG9jYWxlOy8vIGZpcnN0IGl0ZW0gd2lsbCBiZSBlbXB0eSBzdHJpbmcgZnJvbSBzcGxpdHRpbmcgYXQgZmlyc3QgY2hhclxuY29uc3QgcGF0aG5hbWVQYXJ0cz1wYXRobmFtZS5zcGxpdCgnLycpOyhsb2NhbGVzfHxbXSkuc29tZShsb2NhbGU9PntpZihwYXRobmFtZVBhcnRzWzFdLnRvTG93ZXJDYXNlKCk9PT1sb2NhbGUudG9Mb3dlckNhc2UoKSl7ZGV0ZWN0ZWRMb2NhbGU9bG9jYWxlO3BhdGhuYW1lUGFydHMuc3BsaWNlKDEsMSk7cGF0aG5hbWU9cGF0aG5hbWVQYXJ0cy5qb2luKCcvJyl8fCcvJztyZXR1cm4gdHJ1ZTt9cmV0dXJuIGZhbHNlO30pO3JldHVybntwYXRobmFtZSxkZXRlY3RlZExvY2FsZX07fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bm9ybWFsaXplLWxvY2FsZS1wYXRoLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGVmYXVsdD1taXR0Oy8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qLyAvLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuZnVuY3Rpb24gbWl0dCgpe2NvbnN0IGFsbD1PYmplY3QuY3JlYXRlKG51bGwpO3JldHVybntvbih0eXBlLGhhbmRsZXIpezsoYWxsW3R5cGVdfHwoYWxsW3R5cGVdPVtdKSkucHVzaChoYW5kbGVyKTt9LG9mZih0eXBlLGhhbmRsZXIpe2lmKGFsbFt0eXBlXSl7YWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKT4+PjAsMSk7fX0sZW1pdCh0eXBlLC4uLmV2dHMpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbjsoYWxsW3R5cGVdfHxbXSkuc2xpY2UoKS5tYXAoaGFuZGxlcj0+e2hhbmRsZXIoLi4uZXZ0cyk7fSk7fX07fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWl0dC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmdldERvbWFpbkxvY2FsZT1nZXREb21haW5Mb2NhbGU7ZXhwb3J0cy5hZGRMb2NhbGU9YWRkTG9jYWxlO2V4cG9ydHMuZGVsTG9jYWxlPWRlbExvY2FsZTtleHBvcnRzLmhhc0Jhc2VQYXRoPWhhc0Jhc2VQYXRoO2V4cG9ydHMuYWRkQmFzZVBhdGg9YWRkQmFzZVBhdGg7ZXhwb3J0cy5kZWxCYXNlUGF0aD1kZWxCYXNlUGF0aDtleHBvcnRzLmlzTG9jYWxVUkw9aXNMb2NhbFVSTDtleHBvcnRzLmludGVycG9sYXRlQXM9aW50ZXJwb2xhdGVBcztleHBvcnRzLnJlc29sdmVIcmVmPXJlc29sdmVIcmVmO2V4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoPXJlcXVpcmUoXCIuLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoXCIpO3ZhciBfcm91dGVMb2FkZXI9cmVxdWlyZShcIi4uLy4uLy4uL2NsaWVudC9yb3V0ZS1sb2FkZXJcIik7dmFyIF9kZW5vcm1hbGl6ZVBhZ2VQYXRoPXJlcXVpcmUoXCIuLi8uLi9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoXCIpO3ZhciBfbm9ybWFsaXplTG9jYWxlUGF0aD1yZXF1aXJlKFwiLi4vaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGhcIik7dmFyIF9taXR0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL21pdHRcIikpO3ZhciBfdXRpbHM9cmVxdWlyZShcIi4uL3V0aWxzXCIpO3ZhciBfaXNEeW5hbWljPXJlcXVpcmUoXCIuL3V0aWxzL2lzLWR5bmFtaWNcIik7dmFyIF9wYXJzZVJlbGF0aXZlVXJsPXJlcXVpcmUoXCIuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybFwiKTt2YXIgX3F1ZXJ5c3RyaW5nPXJlcXVpcmUoXCIuL3V0aWxzL3F1ZXJ5c3RyaW5nXCIpO3ZhciBfcmVzb2x2ZVJld3JpdGVzPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlc1wiKSk7dmFyIF9yb3V0ZU1hdGNoZXI9cmVxdWlyZShcIi4vdXRpbHMvcm91dGUtbWF0Y2hlclwiKTt2YXIgX3JvdXRlUmVnZXg9cmVxdWlyZShcIi4vdXRpbHMvcm91dGUtcmVnZXhcIik7ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmope3JldHVybiBvYmomJm9iai5fX2VzTW9kdWxlP29iajp7ZGVmYXVsdDpvYmp9O30vLyB0c2xpbnQ6ZGlzYWJsZTpuby1jb25zb2xlXG5sZXQgZGV0ZWN0RG9tYWluTG9jYWxlO2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe2RldGVjdERvbWFpbkxvY2FsZT1yZXF1aXJlKCcuLi9pMThuL2RldGVjdC1kb21haW4tbG9jYWxlJykuZGV0ZWN0RG9tYWluTG9jYWxlO31jb25zdCBiYXNlUGF0aD1wcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIfHwnJztmdW5jdGlvbiBidWlsZENhbmNlbGxhdGlvbkVycm9yKCl7cmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKSx7Y2FuY2VsbGVkOnRydWV9KTt9ZnVuY3Rpb24gYWRkUGF0aFByZWZpeChwYXRoLHByZWZpeCl7cmV0dXJuIHByZWZpeCYmcGF0aC5zdGFydHNXaXRoKCcvJyk/cGF0aD09PScvJz8oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCkocHJlZml4KTpgJHtwcmVmaXh9JHtwYXRoTm9RdWVyeUhhc2gocGF0aCk9PT0nLyc/cGF0aC5zdWJzdHJpbmcoMSk6cGF0aH1gOnBhdGg7fWZ1bmN0aW9uIGdldERvbWFpbkxvY2FsZShwYXRoLGxvY2FsZSxsb2NhbGVzLGRvbWFpbkxvY2FsZXMpe2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe2xvY2FsZT1sb2NhbGV8fCgwLF9ub3JtYWxpemVMb2NhbGVQYXRoLm5vcm1hbGl6ZUxvY2FsZVBhdGgpKHBhdGgsbG9jYWxlcykuZGV0ZWN0ZWRMb2NhbGU7Y29uc3QgZGV0ZWN0ZWREb21haW49ZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkxvY2FsZXMsdW5kZWZpbmVkLGxvY2FsZSk7aWYoZGV0ZWN0ZWREb21haW4pe3JldHVybmBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwPycnOidzJ306Ly8ke2RldGVjdGVkRG9tYWluLmRvbWFpbn0ke2Jhc2VQYXRofHwnJ30ke2xvY2FsZT09PWRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGU/Jyc6YC8ke2xvY2FsZX1gfSR7cGF0aH1gO31yZXR1cm4gZmFsc2U7fXJldHVybiBmYWxzZTt9ZnVuY3Rpb24gYWRkTG9jYWxlKHBhdGgsbG9jYWxlLGRlZmF1bHRMb2NhbGUpe2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe2NvbnN0IHBhdGhuYW1lPXBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtjb25zdCBwYXRoTG93ZXI9cGF0aG5hbWUudG9Mb3dlckNhc2UoKTtjb25zdCBsb2NhbGVMb3dlcj1sb2NhbGUmJmxvY2FsZS50b0xvd2VyQ2FzZSgpO3JldHVybiBsb2NhbGUmJmxvY2FsZSE9PWRlZmF1bHRMb2NhbGUmJiFwYXRoTG93ZXIuc3RhcnRzV2l0aCgnLycrbG9jYWxlTG93ZXIrJy8nKSYmcGF0aExvd2VyIT09Jy8nK2xvY2FsZUxvd2VyP2FkZFBhdGhQcmVmaXgocGF0aCwnLycrbG9jYWxlKTpwYXRoO31yZXR1cm4gcGF0aDt9ZnVuY3Rpb24gZGVsTG9jYWxlKHBhdGgsbG9jYWxlKXtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtjb25zdCBwYXRobmFtZT1wYXRoTm9RdWVyeUhhc2gocGF0aCk7Y29uc3QgcGF0aExvd2VyPXBhdGhuYW1lLnRvTG93ZXJDYXNlKCk7Y29uc3QgbG9jYWxlTG93ZXI9bG9jYWxlJiZsb2NhbGUudG9Mb3dlckNhc2UoKTtyZXR1cm4gbG9jYWxlJiYocGF0aExvd2VyLnN0YXJ0c1dpdGgoJy8nK2xvY2FsZUxvd2VyKycvJyl8fHBhdGhMb3dlcj09PScvJytsb2NhbGVMb3dlcik/KHBhdGhuYW1lLmxlbmd0aD09PWxvY2FsZS5sZW5ndGgrMT8nLyc6JycpK3BhdGguc3Vic3RyKGxvY2FsZS5sZW5ndGgrMSk6cGF0aDt9cmV0dXJuIHBhdGg7fWZ1bmN0aW9uIHBhdGhOb1F1ZXJ5SGFzaChwYXRoKXtjb25zdCBxdWVyeUluZGV4PXBhdGguaW5kZXhPZignPycpO2NvbnN0IGhhc2hJbmRleD1wYXRoLmluZGV4T2YoJyMnKTtpZihxdWVyeUluZGV4Pi0xfHxoYXNoSW5kZXg+LTEpe3BhdGg9cGF0aC5zdWJzdHJpbmcoMCxxdWVyeUluZGV4Pi0xP3F1ZXJ5SW5kZXg6aGFzaEluZGV4KTt9cmV0dXJuIHBhdGg7fWZ1bmN0aW9uIGhhc0Jhc2VQYXRoKHBhdGgpe3BhdGg9cGF0aE5vUXVlcnlIYXNoKHBhdGgpO3JldHVybiBwYXRoPT09YmFzZVBhdGh8fHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCsnLycpO31mdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoKXsvLyB3ZSBvbmx5IGFkZCB0aGUgYmFzZXBhdGggb24gcmVsYXRpdmUgdXJsc1xucmV0dXJuIGFkZFBhdGhQcmVmaXgocGF0aCxiYXNlUGF0aCk7fWZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGgpe3BhdGg9cGF0aC5zbGljZShiYXNlUGF0aC5sZW5ndGgpO2lmKCFwYXRoLnN0YXJ0c1dpdGgoJy8nKSlwYXRoPWAvJHtwYXRofWA7cmV0dXJuIHBhdGg7fS8qKlxuICogRGV0ZWN0cyB3aGV0aGVyIGEgZ2l2ZW4gdXJsIGlzIHJvdXRhYmxlIGJ5IHRoZSBOZXh0LmpzIHJvdXRlciAoYnJvd3NlciBvbmx5KS5cbiAqL2Z1bmN0aW9uIGlzTG9jYWxVUkwodXJsKXsvLyBwcmV2ZW50IGEgaHlkcmF0aW9uIG1pc21hdGNoIG9uIGhyZWYgZm9yIHVybCB3aXRoIGFuY2hvciByZWZzXG5pZih1cmwuc3RhcnRzV2l0aCgnLycpfHx1cmwuc3RhcnRzV2l0aCgnIycpfHx1cmwuc3RhcnRzV2l0aCgnPycpKXJldHVybiB0cnVlO3RyeXsvLyBhYnNvbHV0ZSB1cmxzIGNhbiBiZSBsb2NhbCBpZiB0aGV5IGFyZSBvbiB0aGUgc2FtZSBvcmlnaW5cbmNvbnN0IGxvY2F0aW9uT3JpZ2luPSgwLF91dGlscy5nZXRMb2NhdGlvbk9yaWdpbikoKTtjb25zdCByZXNvbHZlZD1uZXcgVVJMKHVybCxsb2NhdGlvbk9yaWdpbik7cmV0dXJuIHJlc29sdmVkLm9yaWdpbj09PWxvY2F0aW9uT3JpZ2luJiZoYXNCYXNlUGF0aChyZXNvbHZlZC5wYXRobmFtZSk7fWNhdGNoKF8pe3JldHVybiBmYWxzZTt9fWZ1bmN0aW9uIGludGVycG9sYXRlQXMocm91dGUsYXNQYXRobmFtZSxxdWVyeSl7bGV0IGludGVycG9sYXRlZFJvdXRlPScnO2NvbnN0IGR5bmFtaWNSZWdleD0oMCxfcm91dGVSZWdleC5nZXRSb3V0ZVJlZ2V4KShyb3V0ZSk7Y29uc3QgZHluYW1pY0dyb3Vwcz1keW5hbWljUmVnZXguZ3JvdXBzO2NvbnN0IGR5bmFtaWNNYXRjaGVzPS8vIFRyeSB0byBtYXRjaCB0aGUgZHluYW1pYyByb3V0ZSBhZ2FpbnN0IHRoZSBhc1BhdGhcbihhc1BhdGhuYW1lIT09cm91dGU/KDAsX3JvdXRlTWF0Y2hlci5nZXRSb3V0ZU1hdGNoZXIpKGR5bmFtaWNSZWdleCkoYXNQYXRobmFtZSk6JycpfHwvLyBGYWxsIGJhY2sgdG8gcmVhZGluZyB0aGUgdmFsdWVzIGZyb20gdGhlIGhyZWZcbi8vIFRPRE86IHNob3VsZCB0aGlzIHRha2UgcHJpb3JpdHk7IGFsc28gbmVlZCB0byBjaGFuZ2UgaW4gdGhlIHJvdXRlci5cbnF1ZXJ5O2ludGVycG9sYXRlZFJvdXRlPXJvdXRlO2NvbnN0IHBhcmFtcz1PYmplY3Qua2V5cyhkeW5hbWljR3JvdXBzKTtpZighcGFyYW1zLmV2ZXJ5KHBhcmFtPT57bGV0IHZhbHVlPWR5bmFtaWNNYXRjaGVzW3BhcmFtXXx8Jyc7Y29uc3R7cmVwZWF0LG9wdGlvbmFsfT1keW5hbWljR3JvdXBzW3BhcmFtXTsvLyBzdXBwb3J0IHNpbmdsZS1sZXZlbCBjYXRjaC1hbGxcbi8vIFRPRE86IG1vcmUgcm9idXN0IGhhbmRsaW5nIGZvciB1c2VyLWVycm9yIChwYXNzaW5nIGAvYClcbmxldCByZXBsYWNlZD1gWyR7cmVwZWF0PycuLi4nOicnfSR7cGFyYW19XWA7aWYob3B0aW9uYWwpe3JlcGxhY2VkPWAkeyF2YWx1ZT8nLyc6Jyd9WyR7cmVwbGFjZWR9XWA7fWlmKHJlcGVhdCYmIUFycmF5LmlzQXJyYXkodmFsdWUpKXZhbHVlPVt2YWx1ZV07cmV0dXJuKG9wdGlvbmFsfHxwYXJhbSBpbiBkeW5hbWljTWF0Y2hlcykmJigvLyBJbnRlcnBvbGF0ZSBncm91cCBpbnRvIGRhdGEgVVJMIGlmIHByZXNlbnRcbmludGVycG9sYXRlZFJvdXRlPWludGVycG9sYXRlZFJvdXRlLnJlcGxhY2UocmVwbGFjZWQscmVwZWF0P3ZhbHVlLm1hcCgvLyB0aGVzZSB2YWx1ZXMgc2hvdWxkIGJlIGZ1bGx5IGVuY29kZWQgaW5zdGVhZCBvZiBqdXN0XG4vLyBwYXRoIGRlbGltaXRlciBlc2NhcGVkIHNpbmNlIHRoZXkgYXJlIGJlaW5nIGluc2VydGVkXG4vLyBpbnRvIHRoZSBVUkwgYW5kIHdlIGV4cGVjdCBVUkwgZW5jb2RlZCBzZWdtZW50c1xuLy8gd2hlbiBwYXJzaW5nIGR5bmFtaWMgcm91dGUgcGFyYW1zXG5zZWdtZW50PT5lbmNvZGVVUklDb21wb25lbnQoc2VnbWVudCkpLmpvaW4oJy8nKTplbmNvZGVVUklDb21wb25lbnQodmFsdWUpKXx8Jy8nKTt9KSl7aW50ZXJwb2xhdGVkUm91dGU9Jyc7Ly8gZGlkIG5vdCBzYXRpc2Z5IGFsbCByZXF1aXJlbWVudHNcbi8vIG4uYi4gV2UgaWdub3JlIHRoaXMgZXJyb3IgYmVjYXVzZSB3ZSBoYW5kbGUgd2FybmluZyBmb3IgdGhpcyBjYXNlIGluXG4vLyBkZXZlbG9wbWVudCBpbiB0aGUgYDxMaW5rPmAgY29tcG9uZW50IGRpcmVjdGx5LlxufXJldHVybntwYXJhbXMscmVzdWx0OmludGVycG9sYXRlZFJvdXRlfTt9ZnVuY3Rpb24gb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LHBhcmFtcyl7Y29uc3QgZmlsdGVyZWRRdWVyeT17fTtPYmplY3Qua2V5cyhxdWVyeSkuZm9yRWFjaChrZXk9PntpZighcGFyYW1zLmluY2x1ZGVzKGtleSkpe2ZpbHRlcmVkUXVlcnlba2V5XT1xdWVyeVtrZXldO319KTtyZXR1cm4gZmlsdGVyZWRRdWVyeTt9LyoqXG4gKiBSZXNvbHZlcyBhIGdpdmVuIGh5cGVybGluayB3aXRoIGEgY2VydGFpbiByb3V0ZXIgc3RhdGUgKGJhc2VQYXRoIG5vdCBpbmNsdWRlZCkuXG4gKiBQcmVzZXJ2ZXMgYWJzb2x1dGUgdXJscy5cbiAqL2Z1bmN0aW9uIHJlc29sdmVIcmVmKHJvdXRlcixocmVmLHJlc29sdmVBcyl7Ly8gd2UgdXNlIGEgZHVtbXkgYmFzZSB1cmwgZm9yIHJlbGF0aXZlIHVybHNcbmxldCBiYXNlO2NvbnN0IHVybEFzU3RyaW5nPXR5cGVvZiBocmVmPT09J3N0cmluZyc/aHJlZjooMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKGhyZWYpO3RyeXtiYXNlPW5ldyBVUkwodXJsQXNTdHJpbmcuc3RhcnRzV2l0aCgnIycpP3JvdXRlci5hc1BhdGg6cm91dGVyLnBhdGhuYW1lLCdodHRwOi8vbicpO31jYXRjaChfKXsvLyBmYWxsYmFjayB0byAvIGZvciBpbnZhbGlkIGFzUGF0aCB2YWx1ZXMgZS5nLiAvL1xuYmFzZT1uZXcgVVJMKCcvJywnaHR0cDovL24nKTt9Ly8gUmV0dXJuIGJlY2F1c2UgaXQgY2Fubm90IGJlIHJvdXRlZCBieSB0aGUgTmV4dC5qcyByb3V0ZXJcbmlmKCFpc0xvY2FsVVJMKHVybEFzU3RyaW5nKSl7cmV0dXJuIHJlc29sdmVBcz9bdXJsQXNTdHJpbmddOnVybEFzU3RyaW5nO310cnl7Y29uc3QgZmluYWxVcmw9bmV3IFVSTCh1cmxBc1N0cmluZyxiYXNlKTtmaW5hbFVybC5wYXRobmFtZT0oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCkoZmluYWxVcmwucGF0aG5hbWUpO2xldCBpbnRlcnBvbGF0ZWRBcz0nJztpZigoMCxfaXNEeW5hbWljLmlzRHluYW1pY1JvdXRlKShmaW5hbFVybC5wYXRobmFtZSkmJmZpbmFsVXJsLnNlYXJjaFBhcmFtcyYmcmVzb2x2ZUFzKXtjb25zdCBxdWVyeT0oMCxfcXVlcnlzdHJpbmcuc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSkoZmluYWxVcmwuc2VhcmNoUGFyYW1zKTtjb25zdHtyZXN1bHQscGFyYW1zfT1pbnRlcnBvbGF0ZUFzKGZpbmFsVXJsLnBhdGhuYW1lLGZpbmFsVXJsLnBhdGhuYW1lLHF1ZXJ5KTtpZihyZXN1bHQpe2ludGVycG9sYXRlZEFzPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoe3BhdGhuYW1lOnJlc3VsdCxoYXNoOmZpbmFsVXJsLmhhc2gscXVlcnk6b21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LHBhcmFtcyl9KTt9fS8vIGlmIHRoZSBvcmlnaW4gZGlkbid0IGNoYW5nZSwgaXQgbWVhbnMgd2UgcmVjZWl2ZWQgYSByZWxhdGl2ZSBocmVmXG5jb25zdCByZXNvbHZlZEhyZWY9ZmluYWxVcmwub3JpZ2luPT09YmFzZS5vcmlnaW4/ZmluYWxVcmwuaHJlZi5zbGljZShmaW5hbFVybC5vcmlnaW4ubGVuZ3RoKTpmaW5hbFVybC5ocmVmO3JldHVybiByZXNvbHZlQXM/W3Jlc29sdmVkSHJlZixpbnRlcnBvbGF0ZWRBc3x8cmVzb2x2ZWRIcmVmXTpyZXNvbHZlZEhyZWY7fWNhdGNoKF8pe3JldHVybiByZXNvbHZlQXM/W3VybEFzU3RyaW5nXTp1cmxBc1N0cmluZzt9fWZ1bmN0aW9uIHN0cmlwT3JpZ2luKHVybCl7Y29uc3Qgb3JpZ2luPSgwLF91dGlscy5nZXRMb2NhdGlvbk9yaWdpbikoKTtyZXR1cm4gdXJsLnN0YXJ0c1dpdGgob3JpZ2luKT91cmwuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpOnVybDt9ZnVuY3Rpb24gcHJlcGFyZVVybEFzKHJvdXRlcix1cmwsYXMpey8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbmxldFtyZXNvbHZlZEhyZWYscmVzb2x2ZWRBc109cmVzb2x2ZUhyZWYocm91dGVyLHVybCx0cnVlKTtjb25zdCBvcmlnaW49KDAsX3V0aWxzLmdldExvY2F0aW9uT3JpZ2luKSgpO2NvbnN0IGhyZWZIYWRPcmlnaW49cmVzb2x2ZWRIcmVmLnN0YXJ0c1dpdGgob3JpZ2luKTtjb25zdCBhc0hhZE9yaWdpbj1yZXNvbHZlZEFzJiZyZXNvbHZlZEFzLnN0YXJ0c1dpdGgob3JpZ2luKTtyZXNvbHZlZEhyZWY9c3RyaXBPcmlnaW4ocmVzb2x2ZWRIcmVmKTtyZXNvbHZlZEFzPXJlc29sdmVkQXM/c3RyaXBPcmlnaW4ocmVzb2x2ZWRBcyk6cmVzb2x2ZWRBcztjb25zdCBwcmVwYXJlZFVybD1ocmVmSGFkT3JpZ2luP3Jlc29sdmVkSHJlZjphZGRCYXNlUGF0aChyZXNvbHZlZEhyZWYpO2NvbnN0IHByZXBhcmVkQXM9YXM/c3RyaXBPcmlnaW4ocmVzb2x2ZUhyZWYocm91dGVyLGFzKSk6cmVzb2x2ZWRBc3x8cmVzb2x2ZWRIcmVmO3JldHVybnt1cmw6cHJlcGFyZWRVcmwsYXM6YXNIYWRPcmlnaW4/cHJlcGFyZWRBczphZGRCYXNlUGF0aChwcmVwYXJlZEFzKX07fWZ1bmN0aW9uIHJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWUscGFnZXMpe2NvbnN0IGNsZWFuUGF0aG5hbWU9KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gpKCgwLF9kZW5vcm1hbGl6ZVBhZ2VQYXRoLmRlbm9ybWFsaXplUGFnZVBhdGgpKHBhdGhuYW1lKSk7aWYoY2xlYW5QYXRobmFtZT09PScvNDA0J3x8Y2xlYW5QYXRobmFtZT09PScvX2Vycm9yJyl7cmV0dXJuIHBhdGhuYW1lO30vLyBoYW5kbGUgcmVzb2x2aW5nIGhyZWYgZm9yIGR5bmFtaWMgcm91dGVzXG5pZighcGFnZXMuaW5jbHVkZXMoY2xlYW5QYXRobmFtZSkpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbnBhZ2VzLnNvbWUocGFnZT0+e2lmKCgwLF9pc0R5bmFtaWMuaXNEeW5hbWljUm91dGUpKHBhZ2UpJiYoMCxfcm91dGVSZWdleC5nZXRSb3V0ZVJlZ2V4KShwYWdlKS5yZS50ZXN0KGNsZWFuUGF0aG5hbWUpKXtwYXRobmFtZT1wYWdlO3JldHVybiB0cnVlO319KTt9cmV0dXJuKDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gpKHBhdGhuYW1lKTt9Y29uc3QgbWFudWFsU2Nyb2xsUmVzdG9yYXRpb249cHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiYmdHlwZW9mIHdpbmRvdyE9PSd1bmRlZmluZWQnJiYnc2Nyb2xsUmVzdG9yYXRpb24naW4gd2luZG93Lmhpc3RvcnkmJiEhZnVuY3Rpb24oKXt0cnl7bGV0IHY9J19fbmV4dCc7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xucmV0dXJuIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0odix2KSxzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKHYpLHRydWU7fWNhdGNoKG4pe319KCk7Y29uc3QgU1NHX0RBVEFfTk9UX0ZPVU5EPVN5bWJvbCgnU1NHX0RBVEFfTk9UX0ZPVU5EJyk7ZnVuY3Rpb24gZmV0Y2hSZXRyeSh1cmwsYXR0ZW1wdHMpe3JldHVybiBmZXRjaCh1cmwsey8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4vL1xuLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuLy8gPiBvcHRpb24uXG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4vL1xuLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbi8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2Bcbi8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuY3JlZGVudGlhbHM6J3NhbWUtb3JpZ2luJ30pLnRoZW4ocmVzPT57aWYoIXJlcy5vayl7aWYoYXR0ZW1wdHM+MSYmcmVzLnN0YXR1cz49NTAwKXtyZXR1cm4gZmV0Y2hSZXRyeSh1cmwsYXR0ZW1wdHMtMSk7fWlmKHJlcy5zdGF0dXM9PT00MDQpe3JldHVybiByZXMuanNvbigpLnRoZW4oZGF0YT0+e2lmKGRhdGEubm90Rm91bmQpe3JldHVybntub3RGb3VuZDpTU0dfREFUQV9OT1RfRk9VTkR9O310aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApO30pO310aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApO31yZXR1cm4gcmVzLmpzb24oKTt9KTt9ZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZixpc1NlcnZlclJlbmRlcil7cmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsaXNTZXJ2ZXJSZW5kZXI/MzoxKS5jYXRjaChlcnI9PnsvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbi8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4vLyBsb29wLlxuaWYoIWlzU2VydmVyUmVuZGVyKXsoMCxfcm91dGVMb2FkZXIubWFya0Fzc2V0RXJyb3IpKGVycik7fXRocm93IGVycjt9KTt9Y2xhc3MgUm91dGVyey8qKlxuICAgKiBNYXAgb2YgYWxsIGNvbXBvbmVudHMgbG9hZGVkIGluIGBSb3V0ZXJgXG4gICAqLyAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuLy8gSW4tZmxpZ2h0IFNlcnZlciBEYXRhIFJlcXVlc3RzLCBmb3IgZGVkdXBpbmdcbmNvbnN0cnVjdG9yKF9wYXRobmFtZSxfcXVlcnksX2FzLHtpbml0aWFsUHJvcHMscGFnZUxvYWRlcixBcHAsd3JhcEFwcCxDb21wb25lbnQsZXJyLHN1YnNjcmlwdGlvbixpc0ZhbGxiYWNrLGxvY2FsZSxsb2NhbGVzLGRlZmF1bHRMb2NhbGUsZG9tYWluTG9jYWxlcyxpc1ByZXZpZXd9KXt0aGlzLnJvdXRlPXZvaWQgMDt0aGlzLnBhdGhuYW1lPXZvaWQgMDt0aGlzLnF1ZXJ5PXZvaWQgMDt0aGlzLmFzUGF0aD12b2lkIDA7dGhpcy5iYXNlUGF0aD12b2lkIDA7dGhpcy5jb21wb25lbnRzPXZvaWQgMDt0aGlzLnNkYz17fTt0aGlzLnNkcj17fTt0aGlzLnN1Yj12b2lkIDA7dGhpcy5jbGM9dm9pZCAwO3RoaXMucGFnZUxvYWRlcj12b2lkIDA7dGhpcy5fYnBzPXZvaWQgMDt0aGlzLmV2ZW50cz12b2lkIDA7dGhpcy5fd3JhcEFwcD12b2lkIDA7dGhpcy5pc1Nzcj12b2lkIDA7dGhpcy5pc0ZhbGxiYWNrPXZvaWQgMDt0aGlzLl9pbkZsaWdodFJvdXRlPXZvaWQgMDt0aGlzLl9zaGFsbG93PXZvaWQgMDt0aGlzLmxvY2FsZT12b2lkIDA7dGhpcy5sb2NhbGVzPXZvaWQgMDt0aGlzLmRlZmF1bHRMb2NhbGU9dm9pZCAwO3RoaXMuZG9tYWluTG9jYWxlcz12b2lkIDA7dGhpcy5pc1JlYWR5PXZvaWQgMDt0aGlzLmlzUHJldmlldz12b2lkIDA7dGhpcy5pc0xvY2FsZURvbWFpbj12b2lkIDA7dGhpcy5faWR4PTA7dGhpcy5vblBvcFN0YXRlPWU9Pntjb25zdCBzdGF0ZT1lLnN0YXRlO2lmKCFzdGF0ZSl7Ly8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4vLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbi8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbi8vXG4vLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4vLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4vLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbmNvbnN0e3BhdGhuYW1lLHF1ZXJ5fT10aGlzO3RoaXMuY2hhbmdlU3RhdGUoJ3JlcGxhY2VTdGF0ZScsKDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKSh7cGF0aG5hbWU6YWRkQmFzZVBhdGgocGF0aG5hbWUpLHF1ZXJ5fSksKDAsX3V0aWxzLmdldFVSTCkoKSk7cmV0dXJuO31pZighc3RhdGUuX19OKXtyZXR1cm47fWxldCBmb3JjZWRTY3JvbGw7Y29uc3R7dXJsLGFzLG9wdGlvbnMsaWR4fT1zdGF0ZTtpZihwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKXtpZihtYW51YWxTY3JvbGxSZXN0b3JhdGlvbil7aWYodGhpcy5faWR4IT09aWR4KXsvLyBTbmFwc2hvdCBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbjpcbnRyeXtzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdfX25leHRfc2Nyb2xsXycrdGhpcy5faWR4LEpTT04uc3RyaW5naWZ5KHt4OnNlbGYucGFnZVhPZmZzZXQseTpzZWxmLnBhZ2VZT2Zmc2V0fSkpO31jYXRjaChfdW51c2VkKXt9Ly8gUmVzdG9yZSBvbGQgc2Nyb2xsIHBvc2l0aW9uOlxudHJ5e2NvbnN0IHY9c2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nK2lkeCk7Zm9yY2VkU2Nyb2xsPUpTT04ucGFyc2Uodik7fWNhdGNoKF91bnVzZWQyKXtmb3JjZWRTY3JvbGw9e3g6MCx5OjB9O319fX10aGlzLl9pZHg9aWR4O2NvbnN0e3BhdGhuYW1lfT0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKSh1cmwpOy8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG5pZih0aGlzLmlzU3NyJiZhcz09PXRoaXMuYXNQYXRoJiZwYXRobmFtZT09PXRoaXMucGF0aG5hbWUpe3JldHVybjt9Ly8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbmlmKHRoaXMuX2JwcyYmIXRoaXMuX2JwcyhzdGF0ZSkpe3JldHVybjt9dGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsdXJsLGFzLE9iamVjdC5hc3NpZ24oe30sb3B0aW9ucyx7c2hhbGxvdzpvcHRpb25zLnNoYWxsb3cmJnRoaXMuX3NoYWxsb3csbG9jYWxlOm9wdGlvbnMubG9jYWxlfHx0aGlzLmRlZmF1bHRMb2NhbGV9KSxmb3JjZWRTY3JvbGwpO307Ly8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG50aGlzLnJvdXRlPSgwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKShfcGF0aG5hbWUpOy8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxudGhpcy5jb21wb25lbnRzPXt9Oy8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3Jcbi8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4vLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG5pZihfcGF0aG5hbWUhPT0nL19lcnJvcicpe3RoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXT17Q29tcG9uZW50LGluaXRpYWw6dHJ1ZSxwcm9wczppbml0aWFsUHJvcHMsZXJyLF9fTl9TU0c6aW5pdGlhbFByb3BzJiZpbml0aWFsUHJvcHMuX19OX1NTRyxfX05fU1NQOmluaXRpYWxQcm9wcyYmaW5pdGlhbFByb3BzLl9fTl9TU1B9O310aGlzLmNvbXBvbmVudHNbJy9fYXBwJ109e0NvbXBvbmVudDpBcHAsc3R5bGVTaGVldHM6Wy8qIC9fYXBwIGRvZXMgbm90IG5lZWQgaXRzIHN0eWxlc2hlZXRzIG1hbmFnZWQgKi9dfTsvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbnRoaXMuZXZlbnRzPVJvdXRlci5ldmVudHM7dGhpcy5wYWdlTG9hZGVyPXBhZ2VMb2FkZXI7dGhpcy5wYXRobmFtZT1fcGF0aG5hbWU7dGhpcy5xdWVyeT1fcXVlcnk7Ly8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbi8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG5jb25zdCBhdXRvRXhwb3J0RHluYW1pYz0oMCxfaXNEeW5hbWljLmlzRHluYW1pY1JvdXRlKShfcGF0aG5hbWUpJiZzZWxmLl9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydDt0aGlzLmFzUGF0aD1hdXRvRXhwb3J0RHluYW1pYz9fcGF0aG5hbWU6X2FzO3RoaXMuYmFzZVBhdGg9YmFzZVBhdGg7dGhpcy5zdWI9c3Vic2NyaXB0aW9uO3RoaXMuY2xjPW51bGw7dGhpcy5fd3JhcEFwcD13cmFwQXBwOy8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbi8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG50aGlzLmlzU3NyPXRydWU7dGhpcy5pc0ZhbGxiYWNrPWlzRmFsbGJhY2s7dGhpcy5pc1JlYWR5PSEhKHNlbGYuX19ORVhUX0RBVEFfXy5nc3NwfHxzZWxmLl9fTkVYVF9EQVRBX18uZ2lwfHwhYXV0b0V4cG9ydER5bmFtaWMmJiFzZWxmLmxvY2F0aW9uLnNlYXJjaCYmIXByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMpO3RoaXMuaXNQcmV2aWV3PSEhaXNQcmV2aWV3O3RoaXMuaXNMb2NhbGVEb21haW49ZmFsc2U7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7dGhpcy5sb2NhbGU9bG9jYWxlO3RoaXMubG9jYWxlcz1sb2NhbGVzO3RoaXMuZGVmYXVsdExvY2FsZT1kZWZhdWx0TG9jYWxlO3RoaXMuZG9tYWluTG9jYWxlcz1kb21haW5Mb2NhbGVzO3RoaXMuaXNMb2NhbGVEb21haW49ISFkZXRlY3REb21haW5Mb2NhbGUoZG9tYWluTG9jYWxlcyxzZWxmLmxvY2F0aW9uLmhvc3RuYW1lKTt9aWYodHlwZW9mIHdpbmRvdyE9PSd1bmRlZmluZWQnKXsvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbmlmKF9hcy5zdWJzdHIoMCwyKSE9PScvLycpey8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4vLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbmNvbnN0IG9wdGlvbnM9e2xvY2FsZX07b3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWY9X2FzIT09X3BhdGhuYW1lO3RoaXMuY2hhbmdlU3RhdGUoJ3JlcGxhY2VTdGF0ZScsKDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKSh7cGF0aG5hbWU6YWRkQmFzZVBhdGgoX3BhdGhuYW1lKSxxdWVyeTpfcXVlcnl9KSwoMCxfdXRpbHMuZ2V0VVJMKSgpLG9wdGlvbnMpO313aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLHRoaXMub25Qb3BTdGF0ZSk7Ly8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbi8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuaWYocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTil7aWYobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pe3dpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uPSdtYW51YWwnO319fX1yZWxvYWQoKXt3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7fS8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovYmFjaygpe3dpbmRvdy5oaXN0b3J5LmJhY2soKTt9LyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL3B1c2godXJsLGFzLG9wdGlvbnM9e30pe2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pey8vIFRPRE86IHJlbW92ZSBpbiB0aGUgZnV0dXJlIHdoZW4gd2UgdXBkYXRlIGhpc3RvcnkgYmVmb3JlIHJvdXRlIGNoYW5nZVxuLy8gaXMgY29tcGxldGUsIGFzIHRoZSBwb3BzdGF0ZSBldmVudCBzaG91bGQgaGFuZGxlIHRoaXMgY2FwdHVyZS5cbmlmKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKXt0cnl7Ly8gU25hcHNob3Qgc2Nyb2xsIHBvc2l0aW9uIHJpZ2h0IGJlZm9yZSBuYXZpZ2F0aW5nIHRvIGEgbmV3IHBhZ2U6XG5zZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdfX25leHRfc2Nyb2xsXycrdGhpcy5faWR4LEpTT04uc3RyaW5naWZ5KHt4OnNlbGYucGFnZVhPZmZzZXQseTpzZWxmLnBhZ2VZT2Zmc2V0fSkpO31jYXRjaChfdW51c2VkMyl7fX19Oyh7dXJsLGFzfT1wcmVwYXJlVXJsQXModGhpcyx1cmwsYXMpKTtyZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsdXJsLGFzLG9wdGlvbnMpO30vKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovcmVwbGFjZSh1cmwsYXMsb3B0aW9ucz17fSl7Oyh7dXJsLGFzfT1wcmVwYXJlVXJsQXModGhpcyx1cmwsYXMpKTtyZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsdXJsLGFzLG9wdGlvbnMpO31hc3luYyBjaGFuZ2UobWV0aG9kLHVybCxhcyxvcHRpb25zLGZvcmNlZFNjcm9sbCl7aWYoIWlzTG9jYWxVUkwodXJsKSl7d2luZG93LmxvY2F0aW9uLmhyZWY9dXJsO3JldHVybiBmYWxzZTt9Y29uc3Qgc2hvdWxkUmVzb2x2ZUhyZWY9dXJsPT09YXN8fG9wdGlvbnMuX2h8fG9wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmOy8vIGZvciBzdGF0aWMgcGFnZXMgd2l0aCBxdWVyeSBwYXJhbXMgaW4gdGhlIFVSTCB3ZSBkZWxheVxuLy8gbWFya2luZyB0aGUgcm91dGVyIHJlYWR5IHVudGlsIGFmdGVyIHRoZSBxdWVyeSBpcyB1cGRhdGVkXG5pZihvcHRpb25zLl9oKXt0aGlzLmlzUmVhZHk9dHJ1ZTt9bGV0IGxvY2FsZUNoYW5nZT1vcHRpb25zLmxvY2FsZSE9PXRoaXMubG9jYWxlO2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe3RoaXMubG9jYWxlPW9wdGlvbnMubG9jYWxlPT09ZmFsc2U/dGhpcy5kZWZhdWx0TG9jYWxlOm9wdGlvbnMubG9jYWxlfHx0aGlzLmxvY2FsZTtpZih0eXBlb2Ygb3B0aW9ucy5sb2NhbGU9PT0ndW5kZWZpbmVkJyl7b3B0aW9ucy5sb2NhbGU9dGhpcy5sb2NhbGU7fWNvbnN0IHBhcnNlZEFzPSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKGhhc0Jhc2VQYXRoKGFzKT9kZWxCYXNlUGF0aChhcyk6YXMpO2NvbnN0IGxvY2FsZVBhdGhSZXN1bHQ9KDAsX25vcm1hbGl6ZUxvY2FsZVBhdGgubm9ybWFsaXplTG9jYWxlUGF0aCkocGFyc2VkQXMucGF0aG5hbWUsdGhpcy5sb2NhbGVzKTtpZihsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlKXt0aGlzLmxvY2FsZT1sb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlO3BhcnNlZEFzLnBhdGhuYW1lPWFkZEJhc2VQYXRoKHBhcnNlZEFzLnBhdGhuYW1lKTthcz0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZEFzKTt1cmw9YWRkQmFzZVBhdGgoKDAsX25vcm1hbGl6ZUxvY2FsZVBhdGgubm9ybWFsaXplTG9jYWxlUGF0aCkoaGFzQmFzZVBhdGgodXJsKT9kZWxCYXNlUGF0aCh1cmwpOnVybCx0aGlzLmxvY2FsZXMpLnBhdGhuYW1lKTt9bGV0IGRpZE5hdmlnYXRlPWZhbHNlOy8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG5pZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXt2YXIgX3RoaXMkbG9jYWxlczsvLyBpZiB0aGUgbG9jYWxlIGlzbid0IGNvbmZpZ3VyZWQgaGFyZCBuYXZpZ2F0ZSB0byBzaG93IDQwNCBwYWdlXG5pZighKChfdGhpcyRsb2NhbGVzPXRoaXMubG9jYWxlcykhPW51bGwmJl90aGlzJGxvY2FsZXMuaW5jbHVkZXModGhpcy5sb2NhbGUpKSl7cGFyc2VkQXMucGF0aG5hbWU9YWRkTG9jYWxlKHBhcnNlZEFzLnBhdGhuYW1lLHRoaXMubG9jYWxlKTt3aW5kb3cubG9jYXRpb24uaHJlZj0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZEFzKTsvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxuLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbmRpZE5hdmlnYXRlPXRydWU7fX1jb25zdCBkZXRlY3RlZERvbWFpbj1kZXRlY3REb21haW5Mb2NhbGUodGhpcy5kb21haW5Mb2NhbGVzLHVuZGVmaW5lZCx0aGlzLmxvY2FsZSk7Ly8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4vLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbmlmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpey8vIGlmIHdlIGFyZSBuYXZpZ2F0aW5nIHRvIGEgZG9tYWluIGxvY2FsZSBlbnN1cmUgd2UgcmVkaXJlY3QgdG8gdGhlXG4vLyBjb3JyZWN0IGRvbWFpblxuaWYoIWRpZE5hdmlnYXRlJiZkZXRlY3RlZERvbWFpbiYmdGhpcy5pc0xvY2FsZURvbWFpbiYmc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSE9PWRldGVjdGVkRG9tYWluLmRvbWFpbil7Y29uc3QgYXNOb0Jhc2VQYXRoPWRlbEJhc2VQYXRoKGFzKTt3aW5kb3cubG9jYXRpb24uaHJlZj1gaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cD8nJzoncyd9Oi8vJHtkZXRlY3RlZERvbWFpbi5kb21haW59JHthZGRCYXNlUGF0aChgJHt0aGlzLmxvY2FsZT09PWRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGU/Jyc6YC8ke3RoaXMubG9jYWxlfWB9JHthc05vQmFzZVBhdGg9PT0nLyc/Jyc6YXNOb0Jhc2VQYXRofWB8fCcvJyl9YDsvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxuLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbmRpZE5hdmlnYXRlPXRydWU7fX1pZihkaWROYXZpZ2F0ZSl7cmV0dXJuIG5ldyBQcm9taXNlKCgpPT57fSk7fX1pZighb3B0aW9ucy5faCl7dGhpcy5pc1Nzcj1mYWxzZTt9Ly8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuaWYoX3V0aWxzLlNUKXtwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpO31jb25zdHtzaGFsbG93PWZhbHNlfT1vcHRpb25zO2NvbnN0IHJvdXRlUHJvcHM9e3NoYWxsb3d9O2lmKHRoaXMuX2luRmxpZ2h0Um91dGUpe3RoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUscm91dGVQcm9wcyk7fWFzPWFkZEJhc2VQYXRoKGFkZExvY2FsZShoYXNCYXNlUGF0aChhcyk/ZGVsQmFzZVBhdGgoYXMpOmFzLG9wdGlvbnMubG9jYWxlLHRoaXMuZGVmYXVsdExvY2FsZSkpO2NvbnN0IGNsZWFuZWRBcz1kZWxMb2NhbGUoaGFzQmFzZVBhdGgoYXMpP2RlbEJhc2VQYXRoKGFzKTphcyx0aGlzLmxvY2FsZSk7dGhpcy5faW5GbGlnaHRSb3V0ZT1hczsvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG5pZighb3B0aW9ucy5faCYmdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSl7dGhpcy5hc1BhdGg9Y2xlYW5lZEFzO1JvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0Jyxhcyxyb3V0ZVByb3BzKTsvLyBUT0RPOiBkbyB3ZSBuZWVkIHRoZSByZXNvbHZlZCBocmVmIHdoZW4gb25seSBhIGhhc2ggY2hhbmdlP1xudGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsdXJsLGFzLG9wdGlvbnMpO3RoaXMuc2Nyb2xsVG9IYXNoKGNsZWFuZWRBcyk7dGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdLG51bGwpO1JvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJyxhcyxyb3V0ZVByb3BzKTtyZXR1cm4gdHJ1ZTt9bGV0IHBhcnNlZD0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKSh1cmwpO2xldHtwYXRobmFtZSxxdWVyeX09cGFyc2VkOy8vIFRoZSBidWlsZCBtYW5pZmVzdCBuZWVkcyB0byBiZSBsb2FkZWQgYmVmb3JlIGF1dG8tc3RhdGljIGR5bmFtaWMgcGFnZXNcbi8vIGdldCB0aGVpciBxdWVyeSBwYXJhbWV0ZXJzIHRvIGFsbG93IGVuc3VyaW5nIHRoZXkgY2FuIGJlIHBhcnNlZCBwcm9wZXJseVxuLy8gd2hlbiByZXdyaXR0ZW4gdG9cbmxldCBwYWdlcyxyZXdyaXRlczt0cnl7cGFnZXM9YXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KCk7KHtfX3Jld3JpdGVzOnJld3JpdGVzfT1hd2FpdCgwLF9yb3V0ZUxvYWRlci5nZXRDbGllbnRCdWlsZE1hbmlmZXN0KSgpKTt9Y2F0Y2goZXJyKXsvLyBJZiB3ZSBmYWlsIHRvIHJlc29sdmUgdGhlIHBhZ2UgbGlzdCBvciBjbGllbnQtYnVpbGQgbWFuaWZlc3QsIHdlIG11c3Rcbi8vIGRvIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbjpcbndpbmRvdy5sb2NhdGlvbi5ocmVmPWFzO3JldHVybiBmYWxzZTt9Ly8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2Vcbi8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbi8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbmlmKCF0aGlzLnVybElzTmV3KGNsZWFuZWRBcykmJiFsb2NhbGVDaGFuZ2Upe21ldGhvZD0ncmVwbGFjZVN0YXRlJzt9Ly8gd2UgbmVlZCB0byByZXNvbHZlIHRoZSBhcyB2YWx1ZSB1c2luZyByZXdyaXRlcyBmb3IgZHluYW1pYyBTU0dcbi8vIHBhZ2VzIHRvIGFsbG93IGJ1aWxkaW5nIHRoZSBkYXRhIFVSTCBjb3JyZWN0bHlcbmxldCByZXNvbHZlZEFzPWFzOy8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbi8vIHBvaW50IGJ5IGVpdGhlciBuZXh0L2xpbmsgb3Igcm91dGVyLnB1c2gvcmVwbGFjZSBzbyBzdHJpcCB0aGVcbi8vIGJhc2VQYXRoIGZyb20gdGhlIHBhdGhuYW1lIHRvIG1hdGNoIHRoZSBwYWdlcyBkaXIgMS10by0xXG5wYXRobmFtZT1wYXRobmFtZT8oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCkoZGVsQmFzZVBhdGgocGF0aG5hbWUpKTpwYXRobmFtZTtpZihzaG91bGRSZXNvbHZlSHJlZiYmcGF0aG5hbWUhPT0nL19lcnJvcicpeztvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZj10cnVlO2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMmJmFzLnN0YXJ0c1dpdGgoJy8nKSl7Y29uc3QgcmV3cml0ZXNSZXN1bHQ9KDAsX3Jlc29sdmVSZXdyaXRlcy5kZWZhdWx0KShhZGRCYXNlUGF0aChhZGRMb2NhbGUoY2xlYW5lZEFzLHRoaXMubG9jYWxlKSkscGFnZXMscmV3cml0ZXMscXVlcnkscD0+cmVzb2x2ZUR5bmFtaWNSb3V0ZShwLHBhZ2VzKSx0aGlzLmxvY2FsZXMpO3Jlc29sdmVkQXM9cmV3cml0ZXNSZXN1bHQuYXNQYXRoO2lmKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlJiZyZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpey8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbi8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG5wYXRobmFtZT1yZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWY7cGFyc2VkLnBhdGhuYW1lPWFkZEJhc2VQYXRoKHBhdGhuYW1lKTt1cmw9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWQpO319ZWxzZXtwYXJzZWQucGF0aG5hbWU9cmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXRobmFtZSxwYWdlcyk7aWYocGFyc2VkLnBhdGhuYW1lIT09cGF0aG5hbWUpe3BhdGhuYW1lPXBhcnNlZC5wYXRobmFtZTtwYXJzZWQucGF0aG5hbWU9YWRkQmFzZVBhdGgocGF0aG5hbWUpO3VybD0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZCk7fX19Y29uc3Qgcm91dGU9KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gpKHBhdGhuYW1lKTtpZighaXNMb2NhbFVSTChhcykpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXt0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgaHJlZjogXCIke3VybH1cIiBhbmQgYXM6IFwiJHthc31cIiwgcmVjZWl2ZWQgcmVsYXRpdmUgaHJlZiBhbmQgZXh0ZXJuYWwgYXNgK2BcXG5TZWUgbW9yZSBpbmZvOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9pbnZhbGlkLXJlbGF0aXZlLXVybC1leHRlcm5hbC1hc2ApO313aW5kb3cubG9jYXRpb24uaHJlZj1hcztyZXR1cm4gZmFsc2U7fXJlc29sdmVkQXM9ZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJlc29sdmVkQXMpLHRoaXMubG9jYWxlKTtpZigoMCxfaXNEeW5hbWljLmlzRHluYW1pY1JvdXRlKShyb3V0ZSkpe2NvbnN0IHBhcnNlZEFzPSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKHJlc29sdmVkQXMpO2NvbnN0IGFzUGF0aG5hbWU9cGFyc2VkQXMucGF0aG5hbWU7Y29uc3Qgcm91dGVSZWdleD0oMCxfcm91dGVSZWdleC5nZXRSb3V0ZVJlZ2V4KShyb3V0ZSk7Y29uc3Qgcm91dGVNYXRjaD0oMCxfcm91dGVNYXRjaGVyLmdldFJvdXRlTWF0Y2hlcikocm91dGVSZWdleCkoYXNQYXRobmFtZSk7Y29uc3Qgc2hvdWxkSW50ZXJwb2xhdGU9cm91dGU9PT1hc1BhdGhuYW1lO2NvbnN0IGludGVycG9sYXRlZEFzPXNob3VsZEludGVycG9sYXRlP2ludGVycG9sYXRlQXMocm91dGUsYXNQYXRobmFtZSxxdWVyeSk6e307aWYoIXJvdXRlTWF0Y2h8fHNob3VsZEludGVycG9sYXRlJiYhaW50ZXJwb2xhdGVkQXMucmVzdWx0KXtjb25zdCBtaXNzaW5nUGFyYW1zPU9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIocGFyYW09PiFxdWVyeVtwYXJhbV0pO2lmKG1pc3NpbmdQYXJhbXMubGVuZ3RoPjApe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtjb25zb2xlLndhcm4oYCR7c2hvdWxkSW50ZXJwb2xhdGU/YEludGVycG9sYXRpbmcgaHJlZmA6YE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgYH0gZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCtgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oJywgJyl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgKTt9dGhyb3cgbmV3IEVycm9yKChzaG91bGRJbnRlcnBvbGF0ZT9gVGhlIHByb3ZpZGVkIFxcYGhyZWZcXGAgKCR7dXJsfSkgdmFsdWUgaXMgbWlzc2luZyBxdWVyeSB2YWx1ZXMgKCR7bWlzc2luZ1BhcmFtcy5qb2luKCcsICcpfSkgdG8gYmUgaW50ZXJwb2xhdGVkIHByb3Blcmx5LiBgOmBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGApK2BSZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzLyR7c2hvdWxkSW50ZXJwb2xhdGU/J2hyZWYtaW50ZXJwb2xhdGlvbi1mYWlsZWQnOidpbmNvbXBhdGlibGUtaHJlZi1hcyd9YCk7fX1lbHNlIGlmKHNob3VsZEludGVycG9sYXRlKXthcz0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKE9iamVjdC5hc3NpZ24oe30scGFyc2VkQXMse3BhdGhuYW1lOmludGVycG9sYXRlZEFzLnJlc3VsdCxxdWVyeTpvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksaW50ZXJwb2xhdGVkQXMucGFyYW1zKX0pKTt9ZWxzZXsvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuT2JqZWN0LmFzc2lnbihxdWVyeSxyb3V0ZU1hdGNoKTt9fVJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsYXMscm91dGVQcm9wcyk7dHJ5e3ZhciBfc2VsZiRfX05FWFRfREFUQV9fJHAsX3NlbGYkX19ORVhUX0RBVEFfXyRwMixfb3B0aW9ucyRzY3JvbGw7bGV0IHJvdXRlSW5mbz1hd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhyb3V0ZSxwYXRobmFtZSxxdWVyeSxhcyxyZXNvbHZlZEFzLHJvdXRlUHJvcHMpO2xldHtlcnJvcixwcm9wcyxfX05fU1NHLF9fTl9TU1B9PXJvdXRlSW5mbzsvLyBoYW5kbGUgcmVkaXJlY3Qgb24gY2xpZW50LXRyYW5zaXRpb25cbmlmKChfX05fU1NHfHxfX05fU1NQKSYmcHJvcHMpe2lmKHByb3BzLnBhZ2VQcm9wcyYmcHJvcHMucGFnZVByb3BzLl9fTl9SRURJUkVDVCl7Y29uc3QgZGVzdGluYXRpb249cHJvcHMucGFnZVByb3BzLl9fTl9SRURJUkVDVDsvLyBjaGVjayBpZiBkZXN0aW5hdGlvbiBpcyBpbnRlcm5hbCAocmVzb2x2ZXMgdG8gYSBwYWdlKSBhbmQgYXR0ZW1wdFxuLy8gY2xpZW50LW5hdmlnYXRpb24gaWYgaXQgaXMgZmFsbGluZyBiYWNrIHRvIGhhcmQgbmF2aWdhdGlvbiBpZlxuLy8gaXQncyBub3RcbmlmKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSl7Y29uc3QgcGFyc2VkSHJlZj0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKShkZXN0aW5hdGlvbik7cGFyc2VkSHJlZi5wYXRobmFtZT1yZXNvbHZlRHluYW1pY1JvdXRlKHBhcnNlZEhyZWYucGF0aG5hbWUscGFnZXMpO2lmKHBhZ2VzLmluY2x1ZGVzKHBhcnNlZEhyZWYucGF0aG5hbWUpKXtjb25zdHt1cmw6bmV3VXJsLGFzOm5ld0FzfT1wcmVwYXJlVXJsQXModGhpcyxkZXN0aW5hdGlvbixkZXN0aW5hdGlvbik7cmV0dXJuIHRoaXMuY2hhbmdlKG1ldGhvZCxuZXdVcmwsbmV3QXMsb3B0aW9ucyk7fX13aW5kb3cubG9jYXRpb24uaHJlZj1kZXN0aW5hdGlvbjtyZXR1cm4gbmV3IFByb21pc2UoKCk9Pnt9KTt9dGhpcy5pc1ByZXZpZXc9ISFwcm9wcy5fX05fUFJFVklFVzsvLyBoYW5kbGUgU1NHIGRhdGEgNDA0XG5pZihwcm9wcy5ub3RGb3VuZD09PVNTR19EQVRBX05PVF9GT1VORCl7bGV0IG5vdEZvdW5kUm91dGU7dHJ5e2F3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy80MDQnKTtub3RGb3VuZFJvdXRlPScvNDA0Jzt9Y2F0Y2goXyl7bm90Rm91bmRSb3V0ZT0nL19lcnJvcic7fXJvdXRlSW5mbz1hd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhub3RGb3VuZFJvdXRlLG5vdEZvdW5kUm91dGUscXVlcnksYXMscmVzb2x2ZWRBcyx7c2hhbGxvdzpmYWxzZX0pO319Um91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxhcyxyb3V0ZVByb3BzKTt0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCx1cmwsYXMsb3B0aW9ucyk7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2NvbnN0IGFwcENvbXA9dGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudDt3aW5kb3cubmV4dC5pc1ByZXJlbmRlcmVkPWFwcENvbXAuZ2V0SW5pdGlhbFByb3BzPT09YXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzJiYhcm91dGVJbmZvLkNvbXBvbmVudC5nZXRJbml0aWFsUHJvcHM7fWlmKG9wdGlvbnMuX2gmJnBhdGhuYW1lPT09Jy9fZXJyb3InJiYoKF9zZWxmJF9fTkVYVF9EQVRBX18kcD1zZWxmLl9fTkVYVF9EQVRBX18ucHJvcHMpPT1udWxsP3ZvaWQgMDooX3NlbGYkX19ORVhUX0RBVEFfXyRwMj1fc2VsZiRfX05FWFRfREFUQV9fJHAucGFnZVByb3BzKT09bnVsbD92b2lkIDA6X3NlbGYkX19ORVhUX0RBVEFfXyRwMi5zdGF0dXNDb2RlKT09PTUwMCYmcHJvcHMhPW51bGwmJnByb3BzLnBhZ2VQcm9wcyl7Ly8gZW5zdXJlIHN0YXR1c0NvZGUgaXMgc3RpbGwgY29ycmVjdCBmb3Igc3RhdGljIDUwMCBwYWdlXG4vLyB3aGVuIHVwZGF0aW5nIHF1ZXJ5IGluZm9ybWF0aW9uXG5wcm9wcy5wYWdlUHJvcHMuc3RhdHVzQ29kZT01MDA7fS8vIHNoYWxsb3cgcm91dGluZyBpcyBvbmx5IGFsbG93ZWQgZm9yIHNhbWUgcGFnZSBVUkwgY2hhbmdlcy5cbmNvbnN0IGlzVmFsaWRTaGFsbG93Um91dGU9b3B0aW9ucy5zaGFsbG93JiZ0aGlzLnJvdXRlPT09cm91dGU7Y29uc3Qgc2hvdWxkU2Nyb2xsPShfb3B0aW9ucyRzY3JvbGw9b3B0aW9ucy5zY3JvbGwpIT1udWxsP19vcHRpb25zJHNjcm9sbDohaXNWYWxpZFNoYWxsb3dSb3V0ZTtjb25zdCByZXNldFNjcm9sbD1zaG91bGRTY3JvbGw/e3g6MCx5OjB9Om51bGw7YXdhaXQgdGhpcy5zZXQocm91dGUscGF0aG5hbWUscXVlcnksY2xlYW5lZEFzLHJvdXRlSW5mbyxmb3JjZWRTY3JvbGwhPW51bGw/Zm9yY2VkU2Nyb2xsOnJlc2V0U2Nyb2xsKS5jYXRjaChlPT57aWYoZS5jYW5jZWxsZWQpZXJyb3I9ZXJyb3J8fGU7ZWxzZSB0aHJvdyBlO30pO2lmKGVycm9yKXtSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLGVycm9yLGNsZWFuZWRBcyxyb3V0ZVByb3BzKTt0aHJvdyBlcnJvcjt9aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7aWYodGhpcy5sb2NhbGUpe2RvY3VtZW50LmRvY3VtZW50RWxlbWVudC5sYW5nPXRoaXMubG9jYWxlO319Um91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxhcyxyb3V0ZVByb3BzKTtyZXR1cm4gdHJ1ZTt9Y2F0Y2goZXJyKXtpZihlcnIuY2FuY2VsbGVkKXtyZXR1cm4gZmFsc2U7fXRocm93IGVycjt9fWNoYW5nZVN0YXRlKG1ldGhvZCx1cmwsYXMsb3B0aW9ucz17fSl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2lmKHR5cGVvZiB3aW5kb3cuaGlzdG9yeT09PSd1bmRlZmluZWQnKXtjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApO3JldHVybjt9aWYodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF09PT0ndW5kZWZpbmVkJyl7Y29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKTtyZXR1cm47fX1pZihtZXRob2QhPT0ncHVzaFN0YXRlJ3x8KDAsX3V0aWxzLmdldFVSTCkoKSE9PWFzKXt0aGlzLl9zaGFsbG93PW9wdGlvbnMuc2hhbGxvdzt3aW5kb3cuaGlzdG9yeVttZXRob2RdKHt1cmwsYXMsb3B0aW9ucyxfX046dHJ1ZSxpZHg6dGhpcy5faWR4PW1ldGhvZCE9PSdwdXNoU3RhdGUnP3RoaXMuX2lkeDp0aGlzLl9pZHgrMX0sLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4vLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbicnLGFzKTt9fWFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKGVycixwYXRobmFtZSxxdWVyeSxhcyxyb3V0ZVByb3BzLGxvYWRFcnJvckZhaWwpe2lmKGVyci5jYW5jZWxsZWQpey8vIGJ1YmJsZSB1cCBjYW5jZWxsYXRpb24gZXJyb3JzXG50aHJvdyBlcnI7fWlmKCgwLF9yb3V0ZUxvYWRlci5pc0Fzc2V0RXJyb3IpKGVycil8fGxvYWRFcnJvckZhaWwpe1JvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsZXJyLGFzLHJvdXRlUHJvcHMpOy8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4vLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4vLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG53aW5kb3cubG9jYXRpb24uaHJlZj1hczsvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbi8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG50aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKCk7fXRyeXtsZXQgQ29tcG9uZW50O2xldCBzdHlsZVNoZWV0cztsZXQgcHJvcHM7aWYodHlwZW9mIENvbXBvbmVudD09PSd1bmRlZmluZWQnfHx0eXBlb2Ygc3R5bGVTaGVldHM9PT0ndW5kZWZpbmVkJyl7Oyh7cGFnZTpDb21wb25lbnQsc3R5bGVTaGVldHN9PWF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy9fZXJyb3InKSk7fWNvbnN0IHJvdXRlSW5mbz17cHJvcHMsQ29tcG9uZW50LHN0eWxlU2hlZXRzLGVycixlcnJvcjplcnJ9O2lmKCFyb3V0ZUluZm8ucHJvcHMpe3RyeXtyb3V0ZUluZm8ucHJvcHM9YXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LHtlcnIscGF0aG5hbWUscXVlcnl9KTt9Y2F0Y2goZ2lwRXJyKXtjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLGdpcEVycik7cm91dGVJbmZvLnByb3BzPXt9O319cmV0dXJuIHJvdXRlSW5mbzt9Y2F0Y2gocm91dGVJbmZvRXJyKXtyZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihyb3V0ZUluZm9FcnIscGF0aG5hbWUscXVlcnksYXMscm91dGVQcm9wcyx0cnVlKTt9fWFzeW5jIGdldFJvdXRlSW5mbyhyb3V0ZSxwYXRobmFtZSxxdWVyeSxhcyxyZXNvbHZlZEFzLHJvdXRlUHJvcHMpe3RyeXtjb25zdCBleGlzdGluZ1JvdXRlSW5mbz10aGlzLmNvbXBvbmVudHNbcm91dGVdO2lmKHJvdXRlUHJvcHMuc2hhbGxvdyYmZXhpc3RpbmdSb3V0ZUluZm8mJnRoaXMucm91dGU9PT1yb3V0ZSl7cmV0dXJuIGV4aXN0aW5nUm91dGVJbmZvO31jb25zdCBjYWNoZWRSb3V0ZUluZm89ZXhpc3RpbmdSb3V0ZUluZm8mJidpbml0aWFsJ2luIGV4aXN0aW5nUm91dGVJbmZvP3VuZGVmaW5lZDpleGlzdGluZ1JvdXRlSW5mbztjb25zdCByb3V0ZUluZm89Y2FjaGVkUm91dGVJbmZvP2NhY2hlZFJvdXRlSW5mbzphd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKHJlcz0+KHtDb21wb25lbnQ6cmVzLnBhZ2Usc3R5bGVTaGVldHM6cmVzLnN0eWxlU2hlZXRzLF9fTl9TU0c6cmVzLm1vZC5fX05fU1NHLF9fTl9TU1A6cmVzLm1vZC5fX05fU1NQfSkpO2NvbnN0e0NvbXBvbmVudCxfX05fU1NHLF9fTl9TU1B9PXJvdXRlSW5mbztpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Y29uc3R7aXNWYWxpZEVsZW1lbnRUeXBlfT1yZXF1aXJlKCdyZWFjdC1pcycpO2lmKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSl7dGhyb3cgbmV3IEVycm9yKGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImApO319bGV0IGRhdGFIcmVmO2lmKF9fTl9TU0d8fF9fTl9TU1Ape2RhdGFIcmVmPXRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZigoMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHtwYXRobmFtZSxxdWVyeX0pLHJlc29sdmVkQXMsX19OX1NTRyx0aGlzLmxvY2FsZSk7fWNvbnN0IHByb3BzPWF3YWl0IHRoaXMuX2dldERhdGEoKCk9Pl9fTl9TU0c/dGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZik6X19OX1NTUD90aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmKTp0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbntwYXRobmFtZSxxdWVyeSxhc1BhdGg6YXMsbG9jYWxlOnRoaXMubG9jYWxlLGxvY2FsZXM6dGhpcy5sb2NhbGVzLGRlZmF1bHRMb2NhbGU6dGhpcy5kZWZhdWx0TG9jYWxlfSkpO3JvdXRlSW5mby5wcm9wcz1wcm9wczt0aGlzLmNvbXBvbmVudHNbcm91dGVdPXJvdXRlSW5mbztyZXR1cm4gcm91dGVJbmZvO31jYXRjaChlcnIpe3JldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVycixwYXRobmFtZSxxdWVyeSxhcyxyb3V0ZVByb3BzKTt9fXNldChyb3V0ZSxwYXRobmFtZSxxdWVyeSxhcyxkYXRhLHJlc2V0U2Nyb2xsKXt0aGlzLmlzRmFsbGJhY2s9ZmFsc2U7dGhpcy5yb3V0ZT1yb3V0ZTt0aGlzLnBhdGhuYW1lPXBhdGhuYW1lO3RoaXMucXVlcnk9cXVlcnk7dGhpcy5hc1BhdGg9YXM7cmV0dXJuIHRoaXMubm90aWZ5KGRhdGEscmVzZXRTY3JvbGwpO30vKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovYmVmb3JlUG9wU3RhdGUoY2Ipe3RoaXMuX2Jwcz1jYjt9b25seUFIYXNoQ2hhbmdlKGFzKXtpZighdGhpcy5hc1BhdGgpcmV0dXJuIGZhbHNlO2NvbnN0W29sZFVybE5vSGFzaCxvbGRIYXNoXT10aGlzLmFzUGF0aC5zcGxpdCgnIycpO2NvbnN0W25ld1VybE5vSGFzaCxuZXdIYXNoXT1hcy5zcGxpdCgnIycpOy8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbmlmKG5ld0hhc2gmJm9sZFVybE5vSGFzaD09PW5ld1VybE5vSGFzaCYmb2xkSGFzaD09PW5ld0hhc2gpe3JldHVybiB0cnVlO30vLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG5pZihvbGRVcmxOb0hhc2ghPT1uZXdVcmxOb0hhc2gpe3JldHVybiBmYWxzZTt9Ly8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4vLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4vLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbnJldHVybiBvbGRIYXNoIT09bmV3SGFzaDt9c2Nyb2xsVG9IYXNoKGFzKXtjb25zdFssaGFzaF09YXMuc3BsaXQoJyMnKTsvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWUgb3IgYCN0b3BgXG4vLyBUbyBtaXJyb3IgYnJvd3NlcnNcbmlmKGhhc2g9PT0nJ3x8aGFzaD09PSd0b3AnKXt3aW5kb3cuc2Nyb2xsVG8oMCwwKTtyZXR1cm47fS8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG5jb25zdCBpZEVsPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpO2lmKGlkRWwpe2lkRWwuc2Nyb2xsSW50b1ZpZXcoKTtyZXR1cm47fS8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuLy8gVG8gbWlycm9yIGJyb3dzZXJzXG5jb25zdCBuYW1lRWw9ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF07aWYobmFtZUVsKXtuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKTt9fXVybElzTmV3KGFzUGF0aCl7cmV0dXJuIHRoaXMuYXNQYXRoIT09YXNQYXRoO30vKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL2FzeW5jIHByZWZldGNoKHVybCxhc1BhdGg9dXJsLG9wdGlvbnM9e30pe2xldCBwYXJzZWQ9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkodXJsKTtsZXR7cGF0aG5hbWV9PXBhcnNlZDtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtpZihvcHRpb25zLmxvY2FsZT09PWZhbHNlKXtwYXRobmFtZT0oMCxfbm9ybWFsaXplTG9jYWxlUGF0aC5ub3JtYWxpemVMb2NhbGVQYXRoKShwYXRobmFtZSx0aGlzLmxvY2FsZXMpLnBhdGhuYW1lO3BhcnNlZC5wYXRobmFtZT1wYXRobmFtZTt1cmw9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWQpO2xldCBwYXJzZWRBcz0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKShhc1BhdGgpO2NvbnN0IGxvY2FsZVBhdGhSZXN1bHQ9KDAsX25vcm1hbGl6ZUxvY2FsZVBhdGgubm9ybWFsaXplTG9jYWxlUGF0aCkocGFyc2VkQXMucGF0aG5hbWUsdGhpcy5sb2NhbGVzKTtwYXJzZWRBcy5wYXRobmFtZT1sb2NhbGVQYXRoUmVzdWx0LnBhdGhuYW1lO29wdGlvbnMubG9jYWxlPWxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGV8fHRoaXMuZGVmYXVsdExvY2FsZTthc1BhdGg9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWRBcyk7fX1jb25zdCBwYWdlcz1hd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKTtsZXQgcmVzb2x2ZWRBcz1hc1BhdGg7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyYmYXNQYXRoLnN0YXJ0c1dpdGgoJy8nKSl7bGV0IHJld3JpdGVzOyh7X19yZXdyaXRlczpyZXdyaXRlc309YXdhaXQoMCxfcm91dGVMb2FkZXIuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCkoKSk7Y29uc3QgcmV3cml0ZXNSZXN1bHQ9KDAsX3Jlc29sdmVSZXdyaXRlcy5kZWZhdWx0KShhZGRCYXNlUGF0aChhZGRMb2NhbGUoYXNQYXRoLHRoaXMubG9jYWxlKSkscGFnZXMscmV3cml0ZXMscGFyc2VkLnF1ZXJ5LHA9PnJlc29sdmVEeW5hbWljUm91dGUocCxwYWdlcyksdGhpcy5sb2NhbGVzKTtyZXNvbHZlZEFzPWRlbExvY2FsZShkZWxCYXNlUGF0aChyZXdyaXRlc1Jlc3VsdC5hc1BhdGgpLHRoaXMubG9jYWxlKTtpZihyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSYmcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKXsvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4vLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxucGF0aG5hbWU9cmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmO3BhcnNlZC5wYXRobmFtZT1wYXRobmFtZTt1cmw9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWQpO319ZWxzZXtwYXJzZWQucGF0aG5hbWU9cmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWQucGF0aG5hbWUscGFnZXMpO2lmKHBhcnNlZC5wYXRobmFtZSE9PXBhdGhuYW1lKXtwYXRobmFtZT1wYXJzZWQucGF0aG5hbWU7cGFyc2VkLnBhdGhuYW1lPXBhdGhuYW1lO3VybD0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZCk7fX1jb25zdCByb3V0ZT0oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCkocGF0aG5hbWUpOy8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbmlmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtyZXR1cm47fWF3YWl0IFByb21pc2UuYWxsKFt0aGlzLnBhZ2VMb2FkZXIuX2lzU3NnKHJvdXRlKS50aGVuKGlzU3NnPT57cmV0dXJuIGlzU3NnP3RoaXMuX2dldFN0YXRpY0RhdGEodGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKHVybCxyZXNvbHZlZEFzLHRydWUsdHlwZW9mIG9wdGlvbnMubG9jYWxlIT09J3VuZGVmaW5lZCc/b3B0aW9ucy5sb2NhbGU6dGhpcy5sb2NhbGUpKTpmYWxzZTt9KSx0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eT8nbG9hZFBhZ2UnOidwcmVmZXRjaCddKHJvdXRlKV0pO31hc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZSl7bGV0IGNhbmNlbGxlZD1mYWxzZTtjb25zdCBjYW5jZWw9dGhpcy5jbGM9KCk9PntjYW5jZWxsZWQ9dHJ1ZTt9O2NvbnN0IGNvbXBvbmVudFJlc3VsdD1hd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpO2lmKGNhbmNlbGxlZCl7Y29uc3QgZXJyb3I9bmV3IEVycm9yKGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgKTtlcnJvci5jYW5jZWxsZWQ9dHJ1ZTt0aHJvdyBlcnJvcjt9aWYoY2FuY2VsPT09dGhpcy5jbGMpe3RoaXMuY2xjPW51bGw7fXJldHVybiBjb21wb25lbnRSZXN1bHQ7fV9nZXREYXRhKGZuKXtsZXQgY2FuY2VsbGVkPWZhbHNlO2NvbnN0IGNhbmNlbD0oKT0+e2NhbmNlbGxlZD10cnVlO307dGhpcy5jbGM9Y2FuY2VsO3JldHVybiBmbigpLnRoZW4oZGF0YT0+e2lmKGNhbmNlbD09PXRoaXMuY2xjKXt0aGlzLmNsYz1udWxsO31pZihjYW5jZWxsZWQpe2NvbnN0IGVycj1uZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKTtlcnIuY2FuY2VsbGVkPXRydWU7dGhyb3cgZXJyO31yZXR1cm4gZGF0YTt9KTt9X2dldFN0YXRpY0RhdGEoZGF0YUhyZWYpe2NvbnN0e2hyZWY6Y2FjaGVLZXl9PW5ldyBVUkwoZGF0YUhyZWYsd2luZG93LmxvY2F0aW9uLmhyZWYpO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WPT09J3Byb2R1Y3Rpb24nJiYhdGhpcy5pc1ByZXZpZXcmJnRoaXMuc2RjW2NhY2hlS2V5XSl7cmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pO31yZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZix0aGlzLmlzU3NyKS50aGVuKGRhdGE9Pnt0aGlzLnNkY1tjYWNoZUtleV09ZGF0YTtyZXR1cm4gZGF0YTt9KTt9X2dldFNlcnZlckRhdGEoZGF0YUhyZWYpe2NvbnN0e2hyZWY6cmVzb3VyY2VLZXl9PW5ldyBVUkwoZGF0YUhyZWYsd2luZG93LmxvY2F0aW9uLmhyZWYpO2lmKHRoaXMuc2RyW3Jlc291cmNlS2V5XSl7cmV0dXJuIHRoaXMuc2RyW3Jlc291cmNlS2V5XTt9cmV0dXJuIHRoaXMuc2RyW3Jlc291cmNlS2V5XT1mZXRjaE5leHREYXRhKGRhdGFIcmVmLHRoaXMuaXNTc3IpLnRoZW4oZGF0YT0+e2RlbGV0ZSB0aGlzLnNkcltyZXNvdXJjZUtleV07cmV0dXJuIGRhdGE7fSkuY2F0Y2goZXJyPT57ZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XTt0aHJvdyBlcnI7fSk7fWdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsY3R4KXtjb25zdHtDb21wb25lbnQ6QXBwfT10aGlzLmNvbXBvbmVudHNbJy9fYXBwJ107Y29uc3QgQXBwVHJlZT10aGlzLl93cmFwQXBwKEFwcCk7Y3R4LkFwcFRyZWU9QXBwVHJlZTtyZXR1cm4oMCxfdXRpbHMubG9hZEdldEluaXRpYWxQcm9wcykoQXBwLHtBcHBUcmVlLENvbXBvbmVudCxyb3V0ZXI6dGhpcyxjdHh9KTt9YWJvcnRDb21wb25lbnRMb2FkKGFzLHJvdXRlUHJvcHMpe2lmKHRoaXMuY2xjKXtSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSxhcyxyb3V0ZVByb3BzKTt0aGlzLmNsYygpO3RoaXMuY2xjPW51bGw7fX1ub3RpZnkoZGF0YSxyZXNldFNjcm9sbCl7cmV0dXJuIHRoaXMuc3ViKGRhdGEsdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCxyZXNldFNjcm9sbCk7fX1leHBvcnRzLmRlZmF1bHQ9Um91dGVyO1JvdXRlci5ldmVudHM9KDAsX21pdHQuZGVmYXVsdCkoKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmZvcm1hdFVybD1mb3JtYXRVcmw7dmFyIHF1ZXJ5c3RyaW5nPV9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCIuL3F1ZXJ5c3RyaW5nXCIpKTtmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKXtpZih0eXBlb2YgV2Vha01hcCE9PVwiZnVuY3Rpb25cIilyZXR1cm4gbnVsbDt2YXIgY2FjaGU9bmV3IFdlYWtNYXAoKTtfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGU9ZnVuY3Rpb24oKXtyZXR1cm4gY2FjaGU7fTtyZXR1cm4gY2FjaGU7fWZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iail7aWYob2JqJiZvYmouX19lc01vZHVsZSl7cmV0dXJuIG9iajt9aWYob2JqPT09bnVsbHx8dHlwZW9mIG9iaiE9PVwib2JqZWN0XCImJnR5cGVvZiBvYmohPT1cImZ1bmN0aW9uXCIpe3JldHVybntkZWZhdWx0Om9ian07fXZhciBjYWNoZT1fZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtpZihjYWNoZSYmY2FjaGUuaGFzKG9iaikpe3JldHVybiBjYWNoZS5nZXQob2JqKTt9dmFyIG5ld09iaj17fTt2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yPU9iamVjdC5kZWZpbmVQcm9wZXJ0eSYmT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtmb3IodmFyIGtleSBpbiBvYmope2lmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosa2V5KSl7dmFyIGRlc2M9aGFzUHJvcGVydHlEZXNjcmlwdG9yP09iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLGtleSk6bnVsbDtpZihkZXNjJiYoZGVzYy5nZXR8fGRlc2Muc2V0KSl7T2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaixrZXksZGVzYyk7fWVsc2V7bmV3T2JqW2tleV09b2JqW2tleV07fX19bmV3T2JqLmRlZmF1bHQ9b2JqO2lmKGNhY2hlKXtjYWNoZS5zZXQob2JqLG5ld09iaik7fXJldHVybiBuZXdPYmo7fS8vIEZvcm1hdCBmdW5jdGlvbiBtb2RpZmllZCBmcm9tIG5vZGVqc1xuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5jb25zdCBzbGFzaGVkUHJvdG9jb2xzPS9odHRwcz98ZnRwfGdvcGhlcnxmaWxlLztmdW5jdGlvbiBmb3JtYXRVcmwodXJsT2JqKXtsZXR7YXV0aCxob3N0bmFtZX09dXJsT2JqO2xldCBwcm90b2NvbD11cmxPYmoucHJvdG9jb2x8fCcnO2xldCBwYXRobmFtZT11cmxPYmoucGF0aG5hbWV8fCcnO2xldCBoYXNoPXVybE9iai5oYXNofHwnJztsZXQgcXVlcnk9dXJsT2JqLnF1ZXJ5fHwnJztsZXQgaG9zdD1mYWxzZTthdXRoPWF1dGg/ZW5jb2RlVVJJQ29tcG9uZW50KGF1dGgpLnJlcGxhY2UoLyUzQS9pLCc6JykrJ0AnOicnO2lmKHVybE9iai5ob3N0KXtob3N0PWF1dGgrdXJsT2JqLmhvc3Q7fWVsc2UgaWYoaG9zdG5hbWUpe2hvc3Q9YXV0aCsofmhvc3RuYW1lLmluZGV4T2YoJzonKT9gWyR7aG9zdG5hbWV9XWA6aG9zdG5hbWUpO2lmKHVybE9iai5wb3J0KXtob3N0Kz0nOicrdXJsT2JqLnBvcnQ7fX1pZihxdWVyeSYmdHlwZW9mIHF1ZXJ5PT09J29iamVjdCcpe3F1ZXJ5PVN0cmluZyhxdWVyeXN0cmluZy51cmxRdWVyeVRvU2VhcmNoUGFyYW1zKHF1ZXJ5KSk7fWxldCBzZWFyY2g9dXJsT2JqLnNlYXJjaHx8cXVlcnkmJmA/JHtxdWVyeX1gfHwnJztpZihwcm90b2NvbCYmcHJvdG9jb2wuc3Vic3RyKC0xKSE9PSc6Jylwcm90b2NvbCs9JzonO2lmKHVybE9iai5zbGFzaGVzfHwoIXByb3RvY29sfHxzbGFzaGVkUHJvdG9jb2xzLnRlc3QocHJvdG9jb2wpKSYmaG9zdCE9PWZhbHNlKXtob3N0PScvLycrKGhvc3R8fCcnKTtpZihwYXRobmFtZSYmcGF0aG5hbWVbMF0hPT0nLycpcGF0aG5hbWU9Jy8nK3BhdGhuYW1lO31lbHNlIGlmKCFob3N0KXtob3N0PScnO31pZihoYXNoJiZoYXNoWzBdIT09JyMnKWhhc2g9JyMnK2hhc2g7aWYoc2VhcmNoJiZzZWFyY2hbMF0hPT0nPycpc2VhcmNoPSc/JytzZWFyY2g7cGF0aG5hbWU9cGF0aG5hbWUucmVwbGFjZSgvWz8jXS9nLGVuY29kZVVSSUNvbXBvbmVudCk7c2VhcmNoPXNlYXJjaC5yZXBsYWNlKCcjJywnJTIzJyk7cmV0dXJuYCR7cHJvdG9jb2x9JHtob3N0fSR7cGF0aG5hbWV9JHtzZWFyY2h9JHtoYXNofWA7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Zm9ybWF0LXVybC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmlzRHluYW1pY1JvdXRlPWlzRHluYW1pY1JvdXRlOy8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEU9L1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS87ZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGUpe3JldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzLWR5bmFtaWMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5wYXJzZVJlbGF0aXZlVXJsPXBhcnNlUmVsYXRpdmVVcmw7dmFyIF91dGlscz1yZXF1aXJlKFwiLi4vLi4vdXRpbHNcIik7dmFyIF9xdWVyeXN0cmluZz1yZXF1aXJlKFwiLi9xdWVyeXN0cmluZ1wiKTsvKipcbiAqIFBhcnNlcyBwYXRoLXJlbGF0aXZlIHVybHMgKGUuZy4gYC9oZWxsby93b3JsZD9mb289YmFyYCkuIElmIHVybCBpc24ndCBwYXRoLXJlbGF0aXZlXG4gKiAoZS5nLiBgLi9oZWxsb2ApIHRoZW4gYXQgbGVhc3QgYmFzZSBtdXN0IGJlLlxuICogQWJzb2x1dGUgdXJscyBhcmUgcmVqZWN0ZWQgd2l0aCBvbmUgZXhjZXB0aW9uLCBpbiB0aGUgYnJvd3NlciwgYWJzb2x1dGUgdXJscyB0aGF0IGFyZSBvblxuICogdGhlIGN1cnJlbnQgb3JpZ2luIHdpbGwgYmUgcGFyc2VkIGFzIHJlbGF0aXZlXG4gKi9mdW5jdGlvbiBwYXJzZVJlbGF0aXZlVXJsKHVybCxiYXNlKXtjb25zdCBnbG9iYWxCYXNlPW5ldyBVUkwodHlwZW9mIHdpbmRvdz09PSd1bmRlZmluZWQnPydodHRwOi8vbic6KDAsX3V0aWxzLmdldExvY2F0aW9uT3JpZ2luKSgpKTtjb25zdCByZXNvbHZlZEJhc2U9YmFzZT9uZXcgVVJMKGJhc2UsZ2xvYmFsQmFzZSk6Z2xvYmFsQmFzZTtjb25zdHtwYXRobmFtZSxzZWFyY2hQYXJhbXMsc2VhcmNoLGhhc2gsaHJlZixvcmlnaW59PW5ldyBVUkwodXJsLHJlc29sdmVkQmFzZSk7aWYob3JpZ2luIT09Z2xvYmFsQmFzZS5vcmlnaW4pe3Rocm93IG5ldyBFcnJvcihgaW52YXJpYW50OiBpbnZhbGlkIHJlbGF0aXZlIFVSTCwgcm91dGVyIHJlY2VpdmVkICR7dXJsfWApO31yZXR1cm57cGF0aG5hbWUscXVlcnk6KDAsX3F1ZXJ5c3RyaW5nLnNlYXJjaFBhcmFtc1RvVXJsUXVlcnkpKHNlYXJjaFBhcmFtcyksc2VhcmNoLGhhc2gsaHJlZjpocmVmLnNsaWNlKGdsb2JhbEJhc2Uub3JpZ2luLmxlbmd0aCl9O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhcnNlLXJlbGF0aXZlLXVybC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnNlYXJjaFBhcmFtc1RvVXJsUXVlcnk9c2VhcmNoUGFyYW1zVG9VcmxRdWVyeTtleHBvcnRzLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXM9dXJsUXVlcnlUb1NlYXJjaFBhcmFtcztleHBvcnRzLmFzc2lnbj1hc3NpZ247ZnVuY3Rpb24gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpe2NvbnN0IHF1ZXJ5PXt9O3NlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSxrZXkpPT57aWYodHlwZW9mIHF1ZXJ5W2tleV09PT0ndW5kZWZpbmVkJyl7cXVlcnlba2V5XT12YWx1ZTt9ZWxzZSBpZihBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKXs7cXVlcnlba2V5XS5wdXNoKHZhbHVlKTt9ZWxzZXtxdWVyeVtrZXldPVtxdWVyeVtrZXldLHZhbHVlXTt9fSk7cmV0dXJuIHF1ZXJ5O31mdW5jdGlvbiBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHBhcmFtKXtpZih0eXBlb2YgcGFyYW09PT0nc3RyaW5nJ3x8dHlwZW9mIHBhcmFtPT09J251bWJlcicmJiFpc05hTihwYXJhbSl8fHR5cGVvZiBwYXJhbT09PSdib29sZWFuJyl7cmV0dXJuIFN0cmluZyhwYXJhbSk7fWVsc2V7cmV0dXJuJyc7fX1mdW5jdGlvbiB1cmxRdWVyeVRvU2VhcmNoUGFyYW1zKHVybFF1ZXJ5KXtjb25zdCByZXN1bHQ9bmV3IFVSTFNlYXJjaFBhcmFtcygpO09iamVjdC5lbnRyaWVzKHVybFF1ZXJ5KS5mb3JFYWNoKChba2V5LHZhbHVlXSk9PntpZihBcnJheS5pc0FycmF5KHZhbHVlKSl7dmFsdWUuZm9yRWFjaChpdGVtPT5yZXN1bHQuYXBwZW5kKGtleSxzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKGl0ZW0pKSk7fWVsc2V7cmVzdWx0LnNldChrZXksc3RyaW5naWZ5VXJsUXVlcnlQYXJhbSh2YWx1ZSkpO319KTtyZXR1cm4gcmVzdWx0O31mdW5jdGlvbiBhc3NpZ24odGFyZ2V0LC4uLnNlYXJjaFBhcmFtc0xpc3Qpe3NlYXJjaFBhcmFtc0xpc3QuZm9yRWFjaChzZWFyY2hQYXJhbXM9PntBcnJheS5mcm9tKHNlYXJjaFBhcmFtcy5rZXlzKCkpLmZvckVhY2goa2V5PT50YXJnZXQuZGVsZXRlKGtleSkpO3NlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSxrZXkpPT50YXJnZXQuYXBwZW5kKGtleSx2YWx1ZSkpO30pO3JldHVybiB0YXJnZXQ7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cXVlcnlzdHJpbmcuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5nZXRSb3V0ZU1hdGNoZXI9Z2V0Um91dGVNYXRjaGVyO2Z1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KXtjb25zdHtyZSxncm91cHN9PXJvdXRlUmVnZXg7cmV0dXJuIHBhdGhuYW1lPT57Y29uc3Qgcm91dGVNYXRjaD1yZS5leGVjKHBhdGhuYW1lKTtpZighcm91dGVNYXRjaCl7cmV0dXJuIGZhbHNlO31jb25zdCBkZWNvZGU9cGFyYW09Pnt0cnl7cmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSk7fWNhdGNoKF8pe2NvbnN0IGVycj1uZXcgRXJyb3IoJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nKTtlcnIuY29kZT0nREVDT0RFX0ZBSUxFRCc7dGhyb3cgZXJyO319O2NvbnN0IHBhcmFtcz17fTtPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goc2x1Z05hbWU9Pntjb25zdCBnPWdyb3Vwc1tzbHVnTmFtZV07Y29uc3QgbT1yb3V0ZU1hdGNoW2cucG9zXTtpZihtIT09dW5kZWZpbmVkKXtwYXJhbXNbc2x1Z05hbWVdPX5tLmluZGV4T2YoJy8nKT9tLnNwbGl0KCcvJykubWFwKGVudHJ5PT5kZWNvZGUoZW50cnkpKTpnLnJlcGVhdD9bZGVjb2RlKG0pXTpkZWNvZGUobSk7fX0pO3JldHVybiBwYXJhbXM7fTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZS1tYXRjaGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZ2V0Um91dGVSZWdleD1nZXRSb3V0ZVJlZ2V4Oy8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHIpe3JldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCdcXFxcJCYnKTt9ZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXIocGFyYW0pe2NvbnN0IG9wdGlvbmFsPXBhcmFtLnN0YXJ0c1dpdGgoJ1snKSYmcGFyYW0uZW5kc1dpdGgoJ10nKTtpZihvcHRpb25hbCl7cGFyYW09cGFyYW0uc2xpY2UoMSwtMSk7fWNvbnN0IHJlcGVhdD1wYXJhbS5zdGFydHNXaXRoKCcuLi4nKTtpZihyZXBlYXQpe3BhcmFtPXBhcmFtLnNsaWNlKDMpO31yZXR1cm57a2V5OnBhcmFtLHJlcGVhdCxvcHRpb25hbH07fWZ1bmN0aW9uIGdldFJvdXRlUmVnZXgobm9ybWFsaXplZFJvdXRlKXtjb25zdCBzZWdtZW50cz0obm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCcnKXx8Jy8nKS5zbGljZSgxKS5zcGxpdCgnLycpO2NvbnN0IGdyb3Vwcz17fTtsZXQgZ3JvdXBJbmRleD0xO2NvbnN0IHBhcmFtZXRlcml6ZWRSb3V0ZT1zZWdtZW50cy5tYXAoc2VnbWVudD0+e2lmKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpJiZzZWdtZW50LmVuZHNXaXRoKCddJykpe2NvbnN0e2tleSxvcHRpb25hbCxyZXBlYXR9PXBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwtMSkpO2dyb3Vwc1trZXldPXtwb3M6Z3JvdXBJbmRleCsrLHJlcGVhdCxvcHRpb25hbH07cmV0dXJuIHJlcGVhdD9vcHRpb25hbD8nKD86LyguKz8pKT8nOicvKC4rPyknOicvKFteL10rPyknO31lbHNle3JldHVybmAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gO319KS5qb2luKCcnKTsvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbi8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG5pZih0eXBlb2Ygd2luZG93PT09J3VuZGVmaW5lZCcpe2xldCByb3V0ZUtleUNoYXJDb2RlPTk3O2xldCByb3V0ZUtleUNoYXJMZW5ndGg9MTsvLyBidWlsZHMgYSBtaW5pbWFsIHJvdXRlS2V5IHVzaW5nIG9ubHkgYS16IGFuZCBtaW5pbWFsIG51bWJlciBvZiBjaGFyYWN0ZXJzXG5jb25zdCBnZXRTYWZlUm91dGVLZXk9KCk9PntsZXQgcm91dGVLZXk9Jyc7Zm9yKGxldCBpPTA7aTxyb3V0ZUtleUNoYXJMZW5ndGg7aSsrKXtyb3V0ZUtleSs9U3RyaW5nLmZyb21DaGFyQ29kZShyb3V0ZUtleUNoYXJDb2RlKTtyb3V0ZUtleUNoYXJDb2RlKys7aWYocm91dGVLZXlDaGFyQ29kZT4xMjIpe3JvdXRlS2V5Q2hhckxlbmd0aCsrO3JvdXRlS2V5Q2hhckNvZGU9OTc7fX1yZXR1cm4gcm91dGVLZXk7fTtjb25zdCByb3V0ZUtleXM9e307bGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlPXNlZ21lbnRzLm1hcChzZWdtZW50PT57aWYoc2VnbWVudC5zdGFydHNXaXRoKCdbJykmJnNlZ21lbnQuZW5kc1dpdGgoJ10nKSl7Y29uc3R7a2V5LG9wdGlvbmFsLHJlcGVhdH09cGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLC0xKSk7Ly8gcmVwbGFjZSBhbnkgbm9uLXdvcmQgY2hhcmFjdGVycyBzaW5jZSB0aGV5IGNhbiBicmVha1xuLy8gdGhlIG5hbWVkIHJlZ2V4XG5sZXQgY2xlYW5lZEtleT1rZXkucmVwbGFjZSgvXFxXL2csJycpO2xldCBpbnZhbGlkS2V5PWZhbHNlOy8vIGNoZWNrIGlmIHRoZSBrZXkgaXMgc3RpbGwgaW52YWxpZCBhbmQgZmFsbGJhY2sgdG8gdXNpbmcgYSBrbm93blxuLy8gc2FmZSBrZXlcbmlmKGNsZWFuZWRLZXkubGVuZ3RoPT09MHx8Y2xlYW5lZEtleS5sZW5ndGg+MzApe2ludmFsaWRLZXk9dHJ1ZTt9aWYoIWlzTmFOKHBhcnNlSW50KGNsZWFuZWRLZXkuc3Vic3RyKDAsMSkpKSl7aW52YWxpZEtleT10cnVlO31pZihpbnZhbGlkS2V5KXtjbGVhbmVkS2V5PWdldFNhZmVSb3V0ZUtleSgpO31yb3V0ZUtleXNbY2xlYW5lZEtleV09a2V5O3JldHVybiByZXBlYXQ/b3B0aW9uYWw/YCg/Oi8oPzwke2NsZWFuZWRLZXl9Pi4rPykpP2A6YC8oPzwke2NsZWFuZWRLZXl9Pi4rPylgOmAvKD88JHtjbGVhbmVkS2V5fT5bXi9dKz8pYDt9ZWxzZXtyZXR1cm5gLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YDt9fSkuam9pbignJyk7cmV0dXJue3JlOm5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksZ3JvdXBzLHJvdXRlS2V5cyxuYW1lZFJlZ2V4OmBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYH07fXJldHVybntyZTpuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLGdyb3Vwc307fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGUtcmVnZXguanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5leGVjT25jZT1leGVjT25jZTtleHBvcnRzLmdldExvY2F0aW9uT3JpZ2luPWdldExvY2F0aW9uT3JpZ2luO2V4cG9ydHMuZ2V0VVJMPWdldFVSTDtleHBvcnRzLmdldERpc3BsYXlOYW1lPWdldERpc3BsYXlOYW1lO2V4cG9ydHMuaXNSZXNTZW50PWlzUmVzU2VudDtleHBvcnRzLmxvYWRHZXRJbml0aWFsUHJvcHM9bG9hZEdldEluaXRpYWxQcm9wcztleHBvcnRzLmZvcm1hdFdpdGhWYWxpZGF0aW9uPWZvcm1hdFdpdGhWYWxpZGF0aW9uO2V4cG9ydHMuU1Q9ZXhwb3J0cy5TUD1leHBvcnRzLnVybE9iamVjdEtleXM9dm9pZCAwO3ZhciBfZm9ybWF0VXJsPXJlcXVpcmUoXCIuL3JvdXRlci91dGlscy9mb3JtYXQtdXJsXCIpOy8qKlxuICogVXRpbHNcbiAqL2Z1bmN0aW9uIGV4ZWNPbmNlKGZuKXtsZXQgdXNlZD1mYWxzZTtsZXQgcmVzdWx0O3JldHVybiguLi5hcmdzKT0+e2lmKCF1c2VkKXt1c2VkPXRydWU7cmVzdWx0PWZuKC4uLmFyZ3MpO31yZXR1cm4gcmVzdWx0O307fWZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCl7Y29uc3R7cHJvdG9jb2wsaG9zdG5hbWUscG9ydH09d2luZG93LmxvY2F0aW9uO3JldHVybmAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQ/JzonK3BvcnQ6Jyd9YDt9ZnVuY3Rpb24gZ2V0VVJMKCl7Y29uc3R7aHJlZn09d2luZG93LmxvY2F0aW9uO2NvbnN0IG9yaWdpbj1nZXRMb2NhdGlvbk9yaWdpbigpO3JldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKTt9ZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWUoQ29tcG9uZW50KXtyZXR1cm4gdHlwZW9mIENvbXBvbmVudD09PSdzdHJpbmcnP0NvbXBvbmVudDpDb21wb25lbnQuZGlzcGxheU5hbWV8fENvbXBvbmVudC5uYW1lfHwnVW5rbm93bic7fWZ1bmN0aW9uIGlzUmVzU2VudChyZXMpe3JldHVybiByZXMuZmluaXNoZWR8fHJlcy5oZWFkZXJzU2VudDt9YXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wcyhBcHAsY3R4KXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7dmFyIF9BcHAkcHJvdG90eXBlO2lmKChfQXBwJHByb3RvdHlwZT1BcHAucHJvdG90eXBlKSE9bnVsbCYmX0FwcCRwcm90b3R5cGUuZ2V0SW5pdGlhbFByb3BzKXtjb25zdCBtZXNzYWdlPWBcIiR7Z2V0RGlzcGxheU5hbWUoQXBwKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gO3Rocm93IG5ldyBFcnJvcihtZXNzYWdlKTt9fS8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbmNvbnN0IHJlcz1jdHgucmVzfHxjdHguY3R4JiZjdHguY3R4LnJlcztpZighQXBwLmdldEluaXRpYWxQcm9wcyl7aWYoY3R4LmN0eCYmY3R4LkNvbXBvbmVudCl7Ly8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxucmV0dXJue3BhZ2VQcm9wczphd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsY3R4LmN0eCl9O31yZXR1cm57fTt9Y29uc3QgcHJvcHM9YXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpO2lmKHJlcyYmaXNSZXNTZW50KHJlcykpe3JldHVybiBwcm9wczt9aWYoIXByb3BzKXtjb25zdCBtZXNzYWdlPWBcIiR7Z2V0RGlzcGxheU5hbWUoQXBwKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gO3Rocm93IG5ldyBFcnJvcihtZXNzYWdlKTt9aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2lmKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGg9PT0wJiYhY3R4LmN0eCl7Y29uc29sZS53YXJuKGAke2dldERpc3BsYXlOYW1lKEFwcCl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYCk7fX1yZXR1cm4gcHJvcHM7fWNvbnN0IHVybE9iamVjdEtleXM9WydhdXRoJywnaGFzaCcsJ2hvc3QnLCdob3N0bmFtZScsJ2hyZWYnLCdwYXRoJywncGF0aG5hbWUnLCdwb3J0JywncHJvdG9jb2wnLCdxdWVyeScsJ3NlYXJjaCcsJ3NsYXNoZXMnXTtleHBvcnRzLnVybE9iamVjdEtleXM9dXJsT2JqZWN0S2V5cztmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmwpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WPT09J2RldmVsb3BtZW50Jyl7aWYodXJsIT09bnVsbCYmdHlwZW9mIHVybD09PSdvYmplY3QnKXtPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goa2V5PT57aWYodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSk9PT0tMSl7Y29uc29sZS53YXJuKGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWApO319KTt9fXJldHVybigwLF9mb3JtYXRVcmwuZm9ybWF0VXJsKSh1cmwpO31jb25zdCBTUD10eXBlb2YgcGVyZm9ybWFuY2UhPT0ndW5kZWZpbmVkJztleHBvcnRzLlNQPVNQO2NvbnN0IFNUPVNQJiZ0eXBlb2YgcGVyZm9ybWFuY2UubWFyaz09PSdmdW5jdGlvbicmJnR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlPT09J2Z1bmN0aW9uJztleHBvcnRzLlNUPVNUO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXRpbHMuanMubWFwIiwiaW1wb3J0IEhvbWUgZnJvbSBcImNvbXBvbmVudHMvaG9tZS1wYWdlL2hvbWVcIjtcclxuaW1wb3J0IHsgR2V0U3RhdGljUHJvcHMsIE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IHsgUHJvcHMgfSBmcm9tIFwiaW50ZXJmYWNlcy9pbnRlcmZhY2VcIjtcclxuaW1wb3J0IFBhZ2VMYXlvdXQgZnJvbSBcImNvbXBvbmVudHMvbGF5b3V0L3BhZ2VMYXlvdXRcIjtcclxuXHJcbmNvbnN0IEluZGV4OiBOZXh0UGFnZTxQcm9wcz4gPSBwcm9wcyA9PiB7XHJcbiAgICBjb25zdCB7IHBvc3RzIH0gPSBwcm9wcztcclxuICAgIGNvbnNvbGUubG9nKHBvc3RzKTtcclxuICByZXR1cm4gKFxyXG4gICAgPFBhZ2VMYXlvdXQgdGl0bGU9XCJNZXJ0IEthZGlyIC0gTW9iaWwgQXBwbGljYXRpb24gRGV2ZWxvcGVyXCI+XHJcbiAgICAgIDxIb21lIHBvc3RzPXtwb3N0c30gLz5cclxuICAgIDwvUGFnZUxheW91dD5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBnZXRQb3N0cyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vZGV2LnRvL2FwaS9hcnRpY2xlcz91c2VybmFtZT1tZXJ0X2thZGlyXCIpO1xyXG4gIGNvbnN0IHBvc3RzID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgcmV0dXJuIHBvc3RzO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzOiBHZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCBwb3N0cyA9IGF3YWl0IGdldFBvc3RzKCk7XHJcblxyXG4gIGlmICghcG9zdHMpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5vdEZvdW5kOiB0cnVlXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7IHBvc3RzIH0sXHJcbiAgICByZXZhbGlkYXRlOiAxXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm5vcm1hbGl6ZVBhdGhTZXA9bm9ybWFsaXplUGF0aFNlcDtleHBvcnRzLmRlbm9ybWFsaXplUGFnZVBhdGg9ZGVub3JtYWxpemVQYWdlUGF0aDtmdW5jdGlvbiBub3JtYWxpemVQYXRoU2VwKHBhdGgpe3JldHVybiBwYXRoLnJlcGxhY2UoL1xcXFwvZywnLycpO31mdW5jdGlvbiBkZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhZ2Upe3BhZ2U9bm9ybWFsaXplUGF0aFNlcChwYWdlKTtpZihwYWdlLnN0YXJ0c1dpdGgoJy9pbmRleC8nKSl7cGFnZT1wYWdlLnNsaWNlKDYpO31lbHNlIGlmKHBhZ2U9PT0nL2luZGV4Jyl7cGFnZT0nLyc7fXJldHVybiBwYWdlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvaW1hZ2UnKVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9leHRlbmRzOyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IHt9O1xuICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gIHZhciBrZXksIGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2U7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTcuMC4yXG4gKiByZWFjdC1pcy5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbi8vIEFUVEVOVElPTlxuLy8gV2hlbiBhZGRpbmcgbmV3IHN5bWJvbHMgdG8gdGhpcyBmaWxlLFxuLy8gUGxlYXNlIGNvbnNpZGVyIGFsc28gYWRkaW5nIHRvICdyZWFjdC1kZXZ0b29scy1zaGFyZWQvc3JjL2JhY2tlbmQvUmVhY3RTeW1ib2xzJ1xuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuIElmIHRoZXJlIGlzIG5vIG5hdGl2ZSBTeW1ib2xcbi8vIG5vciBwb2x5ZmlsbCwgdGhlbiBhIHBsYWluIG51bWJlciBpcyB1c2VkIGZvciBwZXJmb3JtYW5jZS5cbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSAweGVhYzc7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSAweGVhY2E7XG52YXIgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IDB4ZWFjYjtcbnZhciBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gMHhlYWNjO1xudmFyIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSAweGVhZDI7XG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IDB4ZWFjZDtcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSAweGVhY2U7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IDB4ZWFkMDtcbnZhciBSRUFDVF9TVVNQRU5TRV9UWVBFID0gMHhlYWQxO1xudmFyIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IDB4ZWFkODtcbnZhciBSRUFDVF9NRU1PX1RZUEUgPSAweGVhZDM7XG52YXIgUkVBQ1RfTEFaWV9UWVBFID0gMHhlYWQ0O1xudmFyIFJFQUNUX0JMT0NLX1RZUEUgPSAweGVhZDk7XG52YXIgUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUgPSAweGVhZGE7XG52YXIgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IDB4ZWFkNTtcbnZhciBSRUFDVF9TQ09QRV9UWVBFID0gMHhlYWQ3O1xudmFyIFJFQUNUX09QQVFVRV9JRF9UWVBFID0gMHhlYWUwO1xudmFyIFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFID0gMHhlYWUxO1xudmFyIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gMHhlYWUyO1xudmFyIFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSA9IDB4ZWFlMztcblxuaWYgKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLmZvcikge1xuICB2YXIgc3ltYm9sRm9yID0gU3ltYm9sLmZvcjtcbiAgUkVBQ1RfRUxFTUVOVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5lbGVtZW50Jyk7XG4gIFJFQUNUX1BPUlRBTF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wb3J0YWwnKTtcbiAgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZnJhZ21lbnQnKTtcbiAgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc3RyaWN0X21vZGUnKTtcbiAgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucHJvZmlsZXInKTtcbiAgUkVBQ1RfUFJPVklERVJfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucHJvdmlkZXInKTtcbiAgUkVBQ1RfQ09OVEVYVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5jb250ZXh0Jyk7XG4gIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmZvcndhcmRfcmVmJyk7XG4gIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnN1c3BlbnNlJyk7XG4gIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc3VzcGVuc2VfbGlzdCcpO1xuICBSRUFDVF9NRU1PX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm1lbW8nKTtcbiAgUkVBQ1RfTEFaWV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5sYXp5Jyk7XG4gIFJFQUNUX0JMT0NLX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmJsb2NrJyk7XG4gIFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zZXJ2ZXIuYmxvY2snKTtcbiAgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZnVuZGFtZW50YWwnKTtcbiAgUkVBQ1RfU0NPUEVfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc2NvcGUnKTtcbiAgUkVBQ1RfT1BBUVVFX0lEX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm9wYXF1ZS5pZCcpO1xuICBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZGVidWdfdHJhY2VfbW9kZScpO1xuICBSRUFDVF9PRkZTQ1JFRU5fVFlQRSA9IHN5bWJvbEZvcigncmVhY3Qub2Zmc2NyZWVuJyk7XG4gIFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubGVnYWN5X2hpZGRlbicpO1xufVxuXG4vLyBGaWx0ZXIgY2VydGFpbiBET00gYXR0cmlidXRlcyAoZS5nLiBzcmMsIGhyZWYpIGlmIHRoZWlyIHZhbHVlcyBhcmUgZW1wdHkgc3RyaW5ncy5cblxudmFyIGVuYWJsZVNjb3BlQVBJID0gZmFsc2U7IC8vIEV4cGVyaW1lbnRhbCBDcmVhdGUgRXZlbnQgSGFuZGxlIEFQSS5cblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9IC8vIE5vdGU6IHR5cGVvZiBtaWdodCBiZSBvdGhlciB0aGFuICdzeW1ib2wnIG9yICdudW1iZXInIChlLmcuIGlmIGl0J3MgYSBwb2x5ZmlsbCkuXG5cblxuICBpZiAodHlwZSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFIHx8IGVuYWJsZVNjb3BlQVBJICkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsKSB7XG4gICAgaWYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0xBWllfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9DT05URVhUX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0JMT0NLX1RZUEUgfHwgdHlwZVswXSA9PT0gUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gdHlwZU9mKG9iamVjdCkge1xuICBpZiAodHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsKSB7XG4gICAgdmFyICQkdHlwZW9mID0gb2JqZWN0LiQkdHlwZW9mO1xuXG4gICAgc3dpdGNoICgkJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9FTEVNRU5UX1RZUEU6XG4gICAgICAgIHZhciB0eXBlID0gb2JqZWN0LnR5cGU7XG5cbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgY2FzZSBSRUFDVF9GUkFHTUVOVF9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPRklMRVJfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NUUklDVF9NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFOlxuICAgICAgICAgICAgcmV0dXJuIHR5cGU7XG5cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdmFyICQkdHlwZW9mVHlwZSA9IHR5cGUgJiYgdHlwZS4kJHR5cGVvZjtcblxuICAgICAgICAgICAgc3dpdGNoICgkJHR5cGVvZlR5cGUpIHtcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9DT05URVhUX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX1BST1ZJREVSX1RZUEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mVHlwZTtcblxuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICAgIHJldHVybiAkJHR5cGVvZjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxudmFyIENvbnRleHRDb25zdW1lciA9IFJFQUNUX0NPTlRFWFRfVFlQRTtcbnZhciBDb250ZXh0UHJvdmlkZXIgPSBSRUFDVF9QUk9WSURFUl9UWVBFO1xudmFyIEVsZW1lbnQgPSBSRUFDVF9FTEVNRU5UX1RZUEU7XG52YXIgRm9yd2FyZFJlZiA9IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG52YXIgRnJhZ21lbnQgPSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xudmFyIExhenkgPSBSRUFDVF9MQVpZX1RZUEU7XG52YXIgTWVtbyA9IFJFQUNUX01FTU9fVFlQRTtcbnZhciBQb3J0YWwgPSBSRUFDVF9QT1JUQUxfVFlQRTtcbnZhciBQcm9maWxlciA9IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG52YXIgU3RyaWN0TW9kZSA9IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG52YXIgU3VzcGVuc2UgPSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xudmFyIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gZmFsc2U7XG52YXIgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNDb25jdXJyZW50TW9kZSA9IGZhbHNlOyAvLyBBc3luY01vZGUgc2hvdWxkIGJlIGRlcHJlY2F0ZWRcblxuZnVuY3Rpb24gaXNBc3luY01vZGUob2JqZWN0KSB7XG4gIHtcbiAgICBpZiAoIWhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlKSB7XG4gICAgICBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSA9IHRydWU7IC8vIFVzaW5nIGNvbnNvbGVbJ3dhcm4nXSB0byBldmFkZSBCYWJlbCBhbmQgRVNMaW50XG5cbiAgICAgIGNvbnNvbGVbJ3dhcm4nXSgnVGhlIFJlYWN0SXMuaXNBc3luY01vZGUoKSBhbGlhcyBoYXMgYmVlbiBkZXByZWNhdGVkLCAnICsgJ2FuZCB3aWxsIGJlIHJlbW92ZWQgaW4gUmVhY3QgMTgrLicpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIGlzQ29uY3VycmVudE1vZGUob2JqZWN0KSB7XG4gIHtcbiAgICBpZiAoIWhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQ29uY3VycmVudE1vZGUpIHtcbiAgICAgIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQ29uY3VycmVudE1vZGUgPSB0cnVlOyAvLyBVc2luZyBjb25zb2xlWyd3YXJuJ10gdG8gZXZhZGUgQmFiZWwgYW5kIEVTTGludFxuXG4gICAgICBjb25zb2xlWyd3YXJuJ10oJ1RoZSBSZWFjdElzLmlzQ29uY3VycmVudE1vZGUoKSBhbGlhcyBoYXMgYmVlbiBkZXByZWNhdGVkLCAnICsgJ2FuZCB3aWxsIGJlIHJlbW92ZWQgaW4gUmVhY3QgMTgrLicpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIGlzQ29udGV4dENvbnN1bWVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0NPTlRFWFRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29udGV4dFByb3ZpZGVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BST1ZJREVSX1RZUEU7XG59XG5mdW5jdGlvbiBpc0VsZW1lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwgJiYgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG59XG5mdW5jdGlvbiBpc0ZvcndhcmRSZWYob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRnJhZ21lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTGF6eShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9MQVpZX1RZUEU7XG59XG5mdW5jdGlvbiBpc01lbW8ob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTUVNT19UWVBFO1xufVxuZnVuY3Rpb24gaXNQb3J0YWwob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUE9SVEFMX1RZUEU7XG59XG5mdW5jdGlvbiBpc1Byb2ZpbGVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG59XG5mdW5jdGlvbiBpc1N0cmljdE1vZGUob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3VzcGVuc2Uob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcbn1cblxuZXhwb3J0cy5Db250ZXh0Q29uc3VtZXIgPSBDb250ZXh0Q29uc3VtZXI7XG5leHBvcnRzLkNvbnRleHRQcm92aWRlciA9IENvbnRleHRQcm92aWRlcjtcbmV4cG9ydHMuRWxlbWVudCA9IEVsZW1lbnQ7XG5leHBvcnRzLkZvcndhcmRSZWYgPSBGb3J3YXJkUmVmO1xuZXhwb3J0cy5GcmFnbWVudCA9IEZyYWdtZW50O1xuZXhwb3J0cy5MYXp5ID0gTGF6eTtcbmV4cG9ydHMuTWVtbyA9IE1lbW87XG5leHBvcnRzLlBvcnRhbCA9IFBvcnRhbDtcbmV4cG9ydHMuUHJvZmlsZXIgPSBQcm9maWxlcjtcbmV4cG9ydHMuU3RyaWN0TW9kZSA9IFN0cmljdE1vZGU7XG5leHBvcnRzLlN1c3BlbnNlID0gU3VzcGVuc2U7XG5leHBvcnRzLmlzQXN5bmNNb2RlID0gaXNBc3luY01vZGU7XG5leHBvcnRzLmlzQ29uY3VycmVudE1vZGUgPSBpc0NvbmN1cnJlbnRNb2RlO1xuZXhwb3J0cy5pc0NvbnRleHRDb25zdW1lciA9IGlzQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5pc0NvbnRleHRQcm92aWRlciA9IGlzQ29udGV4dFByb3ZpZGVyO1xuZXhwb3J0cy5pc0VsZW1lbnQgPSBpc0VsZW1lbnQ7XG5leHBvcnRzLmlzRm9yd2FyZFJlZiA9IGlzRm9yd2FyZFJlZjtcbmV4cG9ydHMuaXNGcmFnbWVudCA9IGlzRnJhZ21lbnQ7XG5leHBvcnRzLmlzTGF6eSA9IGlzTGF6eTtcbmV4cG9ydHMuaXNNZW1vID0gaXNNZW1vO1xuZXhwb3J0cy5pc1BvcnRhbCA9IGlzUG9ydGFsO1xuZXhwb3J0cy5pc1Byb2ZpbGVyID0gaXNQcm9maWxlcjtcbmV4cG9ydHMuaXNTdHJpY3RNb2RlID0gaXNTdHJpY3RNb2RlO1xuZXhwb3J0cy5pc1N1c3BlbnNlID0gaXNTdXNwZW5zZTtcbmV4cG9ydHMuaXNWYWxpZEVsZW1lbnRUeXBlID0gaXNWYWxpZEVsZW1lbnRUeXBlO1xuZXhwb3J0cy50eXBlT2YgPSB0eXBlT2Y7XG4gIH0pKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBjaGFrcmEtdWkvcmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBjaGFrcmEtdWkvdGhlbWUtdG9vbHNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBjaGFrcmEtdWkvdXRpbHNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZyYW1lci1tb3Rpb25cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbWVudFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3RvLWJhc2UtNjQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvaW1hZ2UtY29uZmlnLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC11c2UtbGFueWFyZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9