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
                    children: "New"
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
      borderRadius: "full",
      rounded: "full",
      children: getImage().largeImage && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
        src: getImage().largeImage || "",
        width: "80px",
        height: "80px",
        alt: "icon",
        objectFit: "cover"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 126,
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
        lineNumber: 138,
        columnNumber: 15
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: [" ", (_getActivity5 = getActivity()) === null || _getActivity5 === void 0 ? void 0 : _getActivity5.details]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 15
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: [" ", (_getActivity6 = getActivity()) === null || _getActivity6 === void 0 ? void 0 : _getActivity6.state, " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 15
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 137,
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
      lineNumber: 149,
      columnNumber: 3
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
      textColor: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("black", "white"),
      fontSize: "md",
      textAlign: "center",
      margin: "1",
      children: " Disturbing"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 3
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 148,
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
        lineNumber: 158,
        columnNumber: 56
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 158,
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
      lineNumber: 159,
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
        lineNumber: 162,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 1
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
      fontSize: "sm",
      margin: "auto",
      textAlign: "center",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: [" ", (_getActivity7 = getActivity()) === null || _getActivity7 === void 0 ? void 0 : _getActivity7.name]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 12
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: [" ", (_getActivity8 = getActivity()) === null || _getActivity8 === void 0 ? void 0 : _getActivity8.details]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 12
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: [" ", (_getActivity9 = getActivity()) === null || _getActivity9 === void 0 ? void 0 : _getActivity9.state, " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 12
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 12
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 157,
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
        lineNumber: 186,
        columnNumber: 54
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 4
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
      textColor: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("black", "white"),
      fontSize: "md",
      textAlign: "center",
      margin: "1",
      children: " Offline"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 3
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 185,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9jb21wb25lbnRzL2hvbWUtcGFnZS9Qb3B1bGFyQXJ0aWNsZXMudHN4Iiwid2VicGFjazovL3BvcnRmb2xpby8uL2NvbXBvbmVudHMvaG9tZS1wYWdlL2hvbWUudHN4Iiwid2VicGFjazovL3BvcnRmb2xpby8uL2NvbXBvbmVudHMvbGF5b3V0L2hlYWRlci50c3giLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vY29tcG9uZW50cy9sYXlvdXQvbWV0YS50c3giLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vY29tcG9uZW50cy9sYXlvdXQvcGFnZUxheW91dC50c3giLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vY29tcG9uZW50cy91aS9tb3Rpb24udHN4Iiwid2VicGFjazovL3BvcnRmb2xpby8uL2NvbXBvbmVudHMvdWkvcGFnZS10cmFuc2l0aW9ucy50c3giLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vY29tcG9uZW50cy91aS90aGVtZS9mb3VuZGF0aW9ucy9jb2xvcnMudHMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vY29tcG9uZW50cy91aS90aGVtZS9pbmRleC50cyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9jb21wb25lbnRzL3VpL3VuZGVybGluZWQtdGV4dC50c3giLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vZGF0YS9TdGF0dXMudHN4Iiwid2VicGFjazovL3BvcnRmb2xpby8uL2RhdGEvdXNlci50cyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9pbWFnZS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9saW5rLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcm91dGUtbG9hZGVyLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JvdXRlci5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3dpdGgtcm91dGVyLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL21pdHQuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXguanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vcGFnZXMvaW5kZXgudHN4Iiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvbmV4dC9pbWFnZS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHMuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvcmVhY3QtaXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL2V4dGVybmFsIFwiQGNoYWtyYS11aS9yZWFjdFwiIiwid2VicGFjazovL3BvcnRmb2xpby9leHRlcm5hbCBcIkBjaGFrcmEtdWkvdGhlbWUtdG9vbHNcIiIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vZXh0ZXJuYWwgXCJAY2hha3JhLXVpL3V0aWxzXCIiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL2V4dGVybmFsIFwiZnJhbWVyLW1vdGlvblwiIiwid2VicGFjazovL3BvcnRmb2xpby9leHRlcm5hbCBcIm1vbWVudFwiIiwid2VicGFjazovL3BvcnRmb2xpby9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvaGVhZC5qc1wiIiwid2VicGFjazovL3BvcnRmb2xpby9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0LmpzXCIiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcuanNcIiIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3BvcnRmb2xpby9leHRlcm5hbCBcInJlYWN0LXVzZS1sYW55YXJkXCIiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL2lnbm9yZWR8QzpcXFVzZXJzXFxtZXJ0XFxEZXNrdG9wXFxteXBvcnRmb2xpb1xcbm9kZV9tb2R1bGVzXFxuZXh0XFxkaXN0XFxuZXh0LXNlcnZlclxcbGliXFxyb3V0ZXJ8Li91dGlscy9yZXNvbHZlLXJld3JpdGVzIl0sIm5hbWVzIjpbIk9SQU5HRSIsIlBvcHVsYXJBcnRpY2xlcyIsInByb3BzIiwicG9zdHMiLCJsaW5rQ29sb3IiLCJ1c2VMaW5rQ29sb3IiLCJ0ZXh0Q29sb3IiLCJ1c2VDb2xvck1vZGVWYWx1ZSIsImNvbXBhcmUiLCJhIiwiYiIsImNvdW50QSIsInB1YmxpY19yZWFjdGlvbnNfY291bnQiLCJjb3VudEIiLCJjb21wYXJpc29uIiwibW9zdExpa2VkRGF0YSIsInNvcnQiLCJzbGljZSIsIm1hcCIsImRlc2NyaXB0aW9uIiwidGl0bGUiLCJzbHVnIiwicG9zaXRpdmVfcmVhY3Rpb25zX2NvdW50IiwiY29tbWVudHNfY291bnQiLCJwdWJsaXNoZWRfYXQiLCJpIiwieSIsInNoYWRvdyIsInRleHREZWNvcmF0aW9uIiwiTGluayIsIm1vbWVudCIsImZvcm1hdCIsIkFOSU1BVElPTl9EVVJBVElPTiIsIkhvbWUiLCJ0cmFuc2xhdGVYIiwib3BhY2l0eSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsInRyYW5zbGF0ZVkiLCJkZWxheSIsIkhlYWRlciIsImNoaWxkcmVuIiwidW5kZXJsaW5lQ29sb3IiLCJlbW9qaSIsIk1ldGEiLCJrZXl3b3JkcyIsImltYWdlIiwiaW5jbHVkZXMiLCJjb25jYXQiLCJkZWZhdWx0UHJvcHMiLCJ2YXJpYW50cyIsImhpZGRlbiIsIngiLCJlbnRlciIsImV4aXQiLCJQYWdlTGF5b3V0IiwidHlwZSIsIk1vdGlvbkJveCIsIm1vdGlvbiIsImZvcndhcmRSZWYiLCJyZWYiLCJjaGFrcmFQcm9wcyIsIk9iamVjdCIsImZyb21FbnRyaWVzIiwiZW50cmllcyIsImZpbHRlciIsImtleSIsImlzVmFsaWRNb3Rpb25Qcm9wIiwiTW90aW9uRmxleCIsIk1vdGlvblRleHQiLCJNb3Rpb25MaXN0IiwiTW90aW9uSW1hZ2UiLCJzdGFnZ2VyVmFyaWFudHMiLCJpbml0aWFsIiwic3RhZ2dlckNoaWxkcmVuIiwiZGVsYXlDaGlsZHJlbiIsInN0YWdnZXJEaXJlY3Rpb24iLCJzdGlmZm5lc3MiLCJ2ZWxvY2l0eSIsImVhc2luZyIsInN0YWdnZXIiLCJhbmltYXRlIiwiZmFkZUluVXAiLCJlYXNlIiwiY29udGFpbmVyIiwic2NhbGUiLCJ2aXNpYmxlIiwiaXRlbSIsIlBhZ2VTbGlkZUZhZGUiLCJTdGFnZ2VyQ2hpbGRyZW4iLCJDYXJkVHJhbnNpdGlvbiIsImxpbmtDb2xvcnMiLCJsaWdodCIsImRhcmsiLCJ2aXNpdGVkTGlnaHQiLCJ2aXNpdGVkRGFyayIsInVzZVZpc2l0ZWRMaW5rQ29sb3IiLCJnZXRUYWdCYWNrZ3JvdW5kRGFyayIsImFjY2VudEtleSIsInRoZW1lIiwidHJhbnNwYXJlbnRpemUiLCJjb2xvcnMiLCJkZWZhdWx0VGhlbWUiLCJncmF5IiwiZGVmYXVsdEFjY2VudCIsImFjY2VudCIsImFjY2VudEtleXMiLCJtYWtlVGhlbWUiLCJvdmVycmlkZXMiLCJleHRlbmRUaGVtZSIsImV4dGVuZGVkVGhlbWUiLCJtZXJnZVdpdGgiLCJmb250cyIsImJvZHkiLCJzdHlsZXMiLCJnbG9iYWwiLCJjb2xvciIsIm1vZGUiLCJiZyIsImZvbnRTaXplIiwiZm9udFN0eWxlIiwidHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uIiwiZm9udFdlaWdodCIsIl9ob3ZlciIsImNvbXBvbmVudHMiLCJQb3BvdmVyIiwicGFydHMiLCJiYXNlU3R5bGUiLCJwb3BwZXIiLCJ6SW5kZXgiLCJtYXhXIiwidyIsIndpZHRoIiwiQnV0dG9uIiwicm91bmRlZCIsIlRhZyIsInRleHRhcmVhIiwiYmFja2dyb3VuZCIsIl9mb2N1cyIsImJveFNoYWRvdyIsInRleHQiLCJncmFkaWVudCIsImJnR3JhZGllbnQiLCJiZ0NsaXAiLCJtZHgiLCJoMSIsIm10IiwibWIiLCJsaW5lSGVpZ2h0IiwibGV0dGVyU3BhY2luZyIsImgyIiwiaDMiLCJoNCIsInAiLCJociIsIm15IiwiYmxvY2txdW90ZSIsImJvcmRlcldpZHRoIiwiYm9yZGVyQ29sb3IiLCJweCIsInB5IiwidWwiLCJtbCIsImNvZGUiLCJ3aGl0ZVNwYWNlIiwiZ2V0VGFnQ29sb3IiLCJ0b0xvd2VyQ2FzZSIsIlVuZGVybGluZWRUZXh0IiwiaCIsIlN0YXR1cyIsImxvYWRpbmciLCJzdGF0dXMiLCJ1c2VMYW55YXJkIiwidXNlcklkIiwic29ja2V0IiwiZ2V0QWN0aXZpdHkiLCJsaXN0ZW5pbmdfdG9fc3BvdGlmeSIsInNvbmciLCJhcnRpc3QiLCJhbGJ1bSIsInNwb3RpZnkiLCJuYW1lIiwiZGV0YWlscyIsInN0YXRlIiwiZ2V0SW1hZ2UiLCJhY3Rpdml0eSIsImxhcmdlSW1hZ2UiLCJhbGJ1bV9hcnRfdXJsIiwiYXBwbGljYXRpb25faWQiLCJsYXJnZV9pbWFnZSIsInNtYWxsX2ltYWdlIiwiYXNzZXRzIiwic21hbGxJbWFnZSIsImRpc2NvcmRfc3RhdHVzIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJleHBvcnRzIiwiSW1hZ2UiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTIiLCJfZXh0ZW5kczIiLCJfcmVhY3QiLCJfaGVhZCIsIl90b0Jhc2UiLCJfaW1hZ2VDb25maWciLCJfdXNlSW50ZXJzZWN0aW9uIiwiX19ORVhUX0lNQUdFX0lNUE9SVEVEIiwiVkFMSURfTE9BRElOR19WQUxVRVMiLCJ1bmRlZmluZWQiLCJsb2FkZXJzIiwiTWFwIiwiaW1naXhMb2FkZXIiLCJjbG91ZGluYXJ5TG9hZGVyIiwiYWthbWFpTG9hZGVyIiwiZGVmYXVsdExvYWRlciIsIlZBTElEX0xBWU9VVF9WQUxVRVMiLCJpc1N0YXRpY1JlcXVpcmUiLCJzcmMiLCJkZWZhdWx0IiwiaXNTdGF0aWNJbWFnZURhdGEiLCJpc1N0YXRpY0ltcG9ydCIsImRldmljZVNpemVzIiwiY29uZmlnRGV2aWNlU2l6ZXMiLCJpbWFnZVNpemVzIiwiY29uZmlnSW1hZ2VTaXplcyIsImxvYWRlciIsImNvbmZpZ0xvYWRlciIsInBhdGgiLCJjb25maWdQYXRoIiwiZG9tYWlucyIsImNvbmZpZ0RvbWFpbnMiLCJwcm9jZXNzIiwiaW1hZ2VDb25maWdEZWZhdWx0IiwiYWxsU2l6ZXMiLCJnZXRXaWR0aHMiLCJsYXlvdXQiLCJzaXplcyIsInZpZXdwb3J0V2lkdGhSZSIsInBlcmNlbnRTaXplcyIsIm1hdGNoIiwiZXhlYyIsInB1c2giLCJwYXJzZUludCIsImxlbmd0aCIsInNtYWxsZXN0UmF0aW8iLCJNYXRoIiwibWluIiwid2lkdGhzIiwicyIsImtpbmQiLCJTZXQiLCJmaW5kIiwiZ2VuZXJhdGVJbWdBdHRycyIsInVub3B0aW1pemVkIiwicXVhbGl0eSIsInNyY1NldCIsImxhc3QiLCJqb2luIiwiZ2V0SW50IiwiZGVmYXVsdEltYWdlTG9hZGVyIiwibG9hZGVyUHJvcHMiLCJsb2FkIiwiZ2V0Iiwicm9vdCIsIkVycm9yIiwiVkFMSURfTE9BREVSUyIsInJlbW92ZVBsYWNlaG9sZGVyIiwiaW1nIiwicGxhY2Vob2xkZXIiLCJoYW5kbGVMb2FkIiwic3RhcnRzV2l0aCIsImRlY29kZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiY2F0Y2giLCJ0aGVuIiwic3R5bGUiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRJbWFnZSIsImNvbXBsZXRlIiwib25sb2FkIiwiX3JlZiIsInByaW9yaXR5IiwiY2xhc3NOYW1lIiwiaGVpZ2h0Iiwib2JqZWN0Rml0Iiwib2JqZWN0UG9zaXRpb24iLCJibHVyRGF0YVVSTCIsImFsbCIsInJlc3QiLCJzdGF0aWNTcmMiLCJzdGF0aWNJbWFnZURhdGEiLCJKU09OIiwic3RyaW5naWZ5Iiwid2lkdGhJbnQiLCJoZWlnaHRJbnQiLCJxdWFsaXR5SW50IiwiU3RyaW5nIiwiY29uc29sZSIsIndhcm4iLCJWQUxJRF9CTFVSX0VYVCIsImlzTGF6eSIsInNldFJlZiIsImlzSW50ZXJzZWN0ZWQiLCJ1c2VJbnRlcnNlY3Rpb24iLCJyb290TWFyZ2luIiwiZGlzYWJsZWQiLCJpc1Zpc2libGUiLCJ3cmFwcGVyU3R5bGUiLCJzaXplclN0eWxlIiwic2l6ZXJTdmciLCJpbWdTdHlsZSIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsImJvdHRvbSIsInJpZ2h0IiwiYm94U2l6aW5nIiwicGFkZGluZyIsImJvcmRlciIsIm1hcmdpbiIsImRpc3BsYXkiLCJtaW5XaWR0aCIsIm1heFdpZHRoIiwibWluSGVpZ2h0IiwibWF4SGVpZ2h0IiwicXVvdGllbnQiLCJwYWRkaW5nVG9wIiwiaXNOYU4iLCJvdmVyZmxvdyIsImltZ0F0dHJpYnV0ZXMiLCJjcmVhdGVFbGVtZW50IiwiYWx0Iiwicm9sZSIsInRvQmFzZTY0IiwiYXNzaWduIiwiZGVjb2RpbmciLCJlbGVtZW50IiwicmVsIiwiYXMiLCJocmVmIiwiaW1hZ2VzcmNzZXQiLCJpbWFnZXNpemVzIiwibm9ybWFsaXplU3JjIiwicGFyYW1zIiwicGFyYW1zU3RyaW5nIiwibWlzc2luZ1ZhbHVlcyIsInBhcnNlZFNyYyIsIlVSTCIsImVyciIsImVycm9yIiwiaG9zdG5hbWUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsIl9yb3V0ZXIiLCJfcm91dGVyMiIsInByZWZldGNoZWQiLCJwcmVmZXRjaCIsInJvdXRlciIsIm9wdGlvbnMiLCJpc0xvY2FsVVJMIiwiY3VyTG9jYWxlIiwibG9jYWxlIiwiaXNNb2RpZmllZEV2ZW50IiwiZXZlbnQiLCJ0YXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwibWV0YUtleSIsImN0cmxLZXkiLCJzaGlmdEtleSIsImFsdEtleSIsIm5hdGl2ZUV2ZW50Iiwid2hpY2giLCJsaW5rQ2xpY2tlZCIsImUiLCJyZXBsYWNlIiwic2hhbGxvdyIsInNjcm9sbCIsIm5vZGVOYW1lIiwicHJldmVudERlZmF1bHQiLCJpbmRleE9mIiwiY3JlYXRlUHJvcEVycm9yIiwiYXJncyIsImV4cGVjdGVkIiwiYWN0dWFsIiwicmVxdWlyZWRQcm9wc0d1YXJkIiwicmVxdWlyZWRQcm9wcyIsImtleXMiLCJmb3JFYWNoIiwiXyIsIm9wdGlvbmFsUHJvcHNHdWFyZCIsInBhc3NIcmVmIiwib3B0aW9uYWxQcm9wcyIsInZhbFR5cGUiLCJoYXNXYXJuZWQiLCJ1c2VSZWYiLCJjdXJyZW50IiwidXNlUm91dGVyIiwidXNlTWVtbyIsInJlc29sdmVkSHJlZiIsInJlc29sdmVkQXMiLCJyZXNvbHZlSHJlZiIsImNoaWxkIiwiQ2hpbGRyZW4iLCJvbmx5IiwiY2hpbGRSZWYiLCJzZXRJbnRlcnNlY3Rpb25SZWYiLCJ1c2VDYWxsYmFjayIsImVsIiwidXNlRWZmZWN0Iiwic2hvdWxkUHJlZmV0Y2giLCJpc1ByZWZldGNoZWQiLCJjaGlsZFByb3BzIiwib25DbGljayIsImRlZmF1bHRQcmV2ZW50ZWQiLCJvbk1vdXNlRW50ZXIiLCJsb2NhbGVEb21haW4iLCJpc0xvY2FsZURvbWFpbiIsImdldERvbWFpbkxvY2FsZSIsImxvY2FsZXMiLCJkb21haW5Mb2NhbGVzIiwiYWRkQmFzZVBhdGgiLCJhZGRMb2NhbGUiLCJkZWZhdWx0TG9jYWxlIiwiY2xvbmVFbGVtZW50IiwiX2RlZmF1bHQiLCJyZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCIsImVuZHNXaXRoIiwibm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2giLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwic2VsZiIsImNiIiwic3RhcnQiLCJEYXRlIiwibm93Iiwic2V0VGltZW91dCIsImRpZFRpbWVvdXQiLCJ0aW1lUmVtYWluaW5nIiwibWF4IiwiY2FuY2VsSWRsZUNhbGxiYWNrIiwiaWQiLCJjbGVhclRpbWVvdXQiLCJtYXJrQXNzZXRFcnJvciIsImlzQXNzZXRFcnJvciIsImdldENsaWVudEJ1aWxkTWFuaWZlc3QiLCJfZ2V0QXNzZXRQYXRoRnJvbVJvdXRlIiwiX3JlcXVlc3RJZGxlQ2FsbGJhY2siLCJNU19NQVhfSURMRV9ERUxBWSIsIndpdGhGdXR1cmUiLCJnZW5lcmF0b3IiLCJlbnRyeSIsImZ1dHVyZSIsInJlc29sdmVyIiwicHJvbSIsInNldCIsInZhbHVlIiwiaGFzUHJlZmV0Y2giLCJsaW5rIiwiZG9jdW1lbnQiLCJ3aW5kb3ciLCJNU0lucHV0TWV0aG9kQ29udGV4dCIsImRvY3VtZW50TW9kZSIsInJlbExpc3QiLCJzdXBwb3J0cyIsIl91bnVzZWQiLCJjYW5QcmVmZXRjaCIsInByZWZldGNoVmlhRG9tIiwicmVzIiwicmVqIiwicXVlcnlTZWxlY3RvciIsImNyb3NzT3JpZ2luIiwib25lcnJvciIsImhlYWQiLCJhcHBlbmRDaGlsZCIsIkFTU0VUX0xPQURfRVJST1IiLCJTeW1ib2wiLCJkZWZpbmVQcm9wZXJ0eSIsImFwcGVuZFNjcmlwdCIsInNjcmlwdCIsInJlamVjdCIsInJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQiLCJtcyIsImNhbmNlbGxlZCIsInIiLCJfX0JVSUxEX01BTklGRVNUIiwib25CdWlsZE1hbmlmZXN0IiwiX19CVUlMRF9NQU5JRkVTVF9DQiIsImdldEZpbGVzRm9yUm91dGUiLCJhc3NldFByZWZpeCIsInJvdXRlIiwic2NyaXB0cyIsImVuY29kZVVSSSIsImNzcyIsIm1hbmlmZXN0IiwiYWxsRmlsZXMiLCJ2IiwiY3JlYXRlUm91dGVMb2FkZXIiLCJlbnRyeXBvaW50cyIsImxvYWRlZFNjcmlwdHMiLCJzdHlsZVNoZWV0cyIsInJvdXRlcyIsIm1heWJlRXhlY3V0ZVNjcmlwdCIsImZldGNoU3R5bGVTaGVldCIsImZldGNoIiwib2siLCJjb250ZW50Iiwid2hlbkVudHJ5cG9pbnQiLCJvbkVudHJ5cG9pbnQiLCJleGVjdXRlIiwiZm4iLCJjb21wb25lbnQiLCJpbnB1dCIsIm9sZCIsImxvYWRSb3V0ZSIsImhhcyIsImVudHJ5cG9pbnQiLCJjbiIsIm5hdmlnYXRvciIsImNvbm5lY3Rpb24iLCJzYXZlRGF0YSIsInRlc3QiLCJlZmZlY3RpdmVUeXBlIiwib3V0cHV0IiwibWFrZVB1YmxpY1JvdXRlckluc3RhbmNlIiwiTmV4dFJvdXRlciIsIl9yb3V0ZXJDb250ZXh0IiwiX3dpdGhSb3V0ZXIiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiZXZlbnRzIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJvbiIsImV2ZW50RmllbGQiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInN1YnN0cmluZyIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJ1c2VDb250ZXh0IiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsImluc3RhbmNlIiwicHJvcGVydHkiLCJBcnJheSIsImlzQXJyYXkiLCJoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiaXNEaXNhYmxlZCIsInVub2JzZXJ2ZSIsInNldFZpc2libGUiLCJ1c2VTdGF0ZSIsInRhZ05hbWUiLCJvYnNlcnZlIiwiaWRsZUNhbGxiYWNrIiwiY2FsbGJhY2siLCJvYnNlcnZlciIsImVsZW1lbnRzIiwiY3JlYXRlT2JzZXJ2ZXIiLCJkZWxldGUiLCJzaXplIiwiZGlzY29ubmVjdCIsIm9ic2VydmVycyIsImlzSW50ZXJzZWN0aW5nIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJ3aXRoUm91dGVyIiwiQ29tcG9zZWRDb21wb25lbnQiLCJXaXRoUm91dGVyV3JhcHBlciIsImdldEluaXRpYWxQcm9wcyIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJkaXNwbGF5TmFtZSIsIm5vcm1hbGl6ZUxvY2FsZVBhdGgiLCJwYXRobmFtZSIsImRldGVjdGVkTG9jYWxlIiwicGF0aG5hbWVQYXJ0cyIsInNwbGl0Iiwic29tZSIsInNwbGljZSIsIm1pdHQiLCJjcmVhdGUiLCJoYW5kbGVyIiwib2ZmIiwiZW1pdCIsImV2dHMiLCJkZWxMb2NhbGUiLCJoYXNCYXNlUGF0aCIsImRlbEJhc2VQYXRoIiwiaW50ZXJwb2xhdGVBcyIsIl9ub3JtYWxpemVUcmFpbGluZ1NsYXNoIiwiX3JvdXRlTG9hZGVyIiwiX2Rlbm9ybWFsaXplUGFnZVBhdGgiLCJfbm9ybWFsaXplTG9jYWxlUGF0aCIsIl9taXR0IiwiX3V0aWxzIiwiX2lzRHluYW1pYyIsIl9wYXJzZVJlbGF0aXZlVXJsIiwiX3F1ZXJ5c3RyaW5nIiwiX3Jlc29sdmVSZXdyaXRlcyIsIl9yb3V0ZU1hdGNoZXIiLCJfcm91dGVSZWdleCIsIm9iaiIsIl9fZXNNb2R1bGUiLCJkZXRlY3REb21haW5Mb2NhbGUiLCJiYXNlUGF0aCIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJhZGRQYXRoUHJlZml4IiwicHJlZml4IiwicGF0aE5vUXVlcnlIYXNoIiwicXVlcnlJbmRleCIsImhhc2hJbmRleCIsInVybCIsImxvY2F0aW9uT3JpZ2luIiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsIm9yaWdpbiIsImFzUGF0aG5hbWUiLCJxdWVyeSIsImludGVycG9sYXRlZFJvdXRlIiwiZHluYW1pY1JlZ2V4IiwiZ2V0Um91dGVSZWdleCIsImR5bmFtaWNHcm91cHMiLCJncm91cHMiLCJkeW5hbWljTWF0Y2hlcyIsImdldFJvdXRlTWF0Y2hlciIsImV2ZXJ5IiwicGFyYW0iLCJyZXBlYXQiLCJvcHRpb25hbCIsInJlcGxhY2VkIiwic2VnbWVudCIsInJlc3VsdCIsIm9taXRQYXJtc0Zyb21RdWVyeSIsImZpbHRlcmVkUXVlcnkiLCJyZXNvbHZlQXMiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJmb3JtYXRXaXRoVmFsaWRhdGlvbiIsImFzUGF0aCIsImZpbmFsVXJsIiwiaW50ZXJwb2xhdGVkQXMiLCJpc0R5bmFtaWNSb3V0ZSIsInNlYXJjaFBhcmFtcyIsInNlYXJjaFBhcmFtc1RvVXJsUXVlcnkiLCJoYXNoIiwic3RyaXBPcmlnaW4iLCJwcmVwYXJlVXJsQXMiLCJocmVmSGFkT3JpZ2luIiwiYXNIYWRPcmlnaW4iLCJwcmVwYXJlZFVybCIsInByZXBhcmVkQXMiLCJyZXNvbHZlRHluYW1pY1JvdXRlIiwicGFnZXMiLCJjbGVhblBhdGhuYW1lIiwiZGVub3JtYWxpemVQYWdlUGF0aCIsInBhZ2UiLCJyZSIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiU1NHX0RBVEFfTk9UX0ZPVU5EIiwiZmV0Y2hSZXRyeSIsImF0dGVtcHRzIiwiY3JlZGVudGlhbHMiLCJqc29uIiwiZGF0YSIsIm5vdEZvdW5kIiwiZmV0Y2hOZXh0RGF0YSIsImRhdGFIcmVmIiwiaXNTZXJ2ZXJSZW5kZXIiLCJSb3V0ZXIiLCJjb25zdHJ1Y3RvciIsIl9wYXRobmFtZSIsIl9xdWVyeSIsIl9hcyIsImluaXRpYWxQcm9wcyIsInBhZ2VMb2FkZXIiLCJBcHAiLCJ3cmFwQXBwIiwiQ29tcG9uZW50Iiwic3Vic2NyaXB0aW9uIiwiaXNGYWxsYmFjayIsImlzUHJldmlldyIsInNkYyIsInNkciIsInN1YiIsImNsYyIsIl9icHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiX2luRmxpZ2h0Um91dGUiLCJfc2hhbGxvdyIsImlzUmVhZHkiLCJfaWR4Iiwib25Qb3BTdGF0ZSIsImNoYW5nZVN0YXRlIiwiZ2V0VVJMIiwiX19OIiwiZm9yY2VkU2Nyb2xsIiwiaWR4IiwicGFyc2VSZWxhdGl2ZVVybCIsImNoYW5nZSIsIl9fTl9TU0ciLCJfX05fU1NQIiwiYXV0b0V4cG9ydER5bmFtaWMiLCJfX05FWFRfREFUQV9fIiwiYXV0b0V4cG9ydCIsImdzc3AiLCJnaXAiLCJsb2NhdGlvbiIsInNlYXJjaCIsInJlbG9hZCIsImJhY2siLCJoaXN0b3J5IiwibWV0aG9kIiwic2hvdWxkUmVzb2x2ZUhyZWYiLCJfaCIsIl9zaG91bGRSZXNvbHZlSHJlZiIsImxvY2FsZUNoYW5nZSIsIlNUIiwicGVyZm9ybWFuY2UiLCJtYXJrIiwicm91dGVQcm9wcyIsImFib3J0Q29tcG9uZW50TG9hZCIsImNsZWFuZWRBcyIsIm9ubHlBSGFzaENoYW5nZSIsInNjcm9sbFRvSGFzaCIsIm5vdGlmeSIsInBhcnNlZCIsInJld3JpdGVzIiwiZ2V0UGFnZUxpc3QiLCJfX3Jld3JpdGVzIiwidXJsSXNOZXciLCJwYXJzZWRBcyIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwic2hvdWxkSW50ZXJwb2xhdGUiLCJtaXNzaW5nUGFyYW1zIiwiX3NlbGYkX19ORVhUX0RBVEFfXyRwIiwiX3NlbGYkX19ORVhUX0RBVEFfXyRwMiIsIl9vcHRpb25zJHNjcm9sbCIsInJvdXRlSW5mbyIsImdldFJvdXRlSW5mbyIsInBhZ2VQcm9wcyIsIl9fTl9SRURJUkVDVCIsImRlc3RpbmF0aW9uIiwicGFyc2VkSHJlZiIsIm5ld1VybCIsIm5ld0FzIiwiX19OX1BSRVZJRVciLCJub3RGb3VuZFJvdXRlIiwiZmV0Y2hDb21wb25lbnQiLCJhcHBDb21wIiwibmV4dCIsImlzUHJlcmVuZGVyZWQiLCJzdGF0dXNDb2RlIiwiaXNWYWxpZFNoYWxsb3dSb3V0ZSIsInNob3VsZFNjcm9sbCIsInJlc2V0U2Nyb2xsIiwiaGFuZGxlUm91dGVJbmZvRXJyb3IiLCJsb2FkRXJyb3JGYWlsIiwiZ2lwRXJyIiwicm91dGVJbmZvRXJyIiwiZXhpc3RpbmdSb3V0ZUluZm8iLCJjYWNoZWRSb3V0ZUluZm8iLCJtb2QiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJnZXREYXRhSHJlZiIsIl9nZXREYXRhIiwiX2dldFN0YXRpY0RhdGEiLCJfZ2V0U2VydmVyRGF0YSIsImJlZm9yZVBvcFN0YXRlIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsIm5ld1VybE5vSGFzaCIsIm5ld0hhc2giLCJzY3JvbGxUbyIsImlkRWwiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3IiwibmFtZUVsIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJfaXNTc2ciLCJpc1NzZyIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsImxvYWRQYWdlIiwiY2FjaGVLZXkiLCJyZXNvdXJjZUtleSIsImN0eCIsIkFwcFRyZWUiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiZm9ybWF0VXJsIiwicXVlcnlzdHJpbmciLCJfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUiLCJXZWFrTWFwIiwiY2FjaGUiLCJuZXdPYmoiLCJoYXNQcm9wZXJ0eURlc2NyaXB0b3IiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJkZXNjIiwic2xhc2hlZFByb3RvY29scyIsInVybE9iaiIsImF1dGgiLCJwcm90b2NvbCIsImhvc3QiLCJwb3J0IiwidXJsUXVlcnlUb1NlYXJjaFBhcmFtcyIsInN1YnN0ciIsInNsYXNoZXMiLCJURVNUX1JPVVRFIiwiZ2xvYmFsQmFzZSIsInJlc29sdmVkQmFzZSIsInN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0iLCJ1cmxRdWVyeSIsIlVSTFNlYXJjaFBhcmFtcyIsImFwcGVuZCIsInNlYXJjaFBhcmFtc0xpc3QiLCJmcm9tIiwiZGVjb2RlVVJJQ29tcG9uZW50Iiwic2x1Z05hbWUiLCJnIiwibSIsInBvcyIsImVzY2FwZVJlZ2V4Iiwic3RyIiwicGFyc2VQYXJhbWV0ZXIiLCJub3JtYWxpemVkUm91dGUiLCJzZWdtZW50cyIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJyb3V0ZUtleUNoYXJDb2RlIiwicm91dGVLZXlDaGFyTGVuZ3RoIiwiZ2V0U2FmZVJvdXRlS2V5Iiwicm91dGVLZXkiLCJmcm9tQ2hhckNvZGUiLCJyb3V0ZUtleXMiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsImNsZWFuZWRLZXkiLCJpbnZhbGlkS2V5IiwiUmVnRXhwIiwibmFtZWRSZWdleCIsImV4ZWNPbmNlIiwiZ2V0RGlzcGxheU5hbWUiLCJpc1Jlc1NlbnQiLCJfZm9ybWF0VXJsIiwidXNlZCIsImZpbmlzaGVkIiwiaGVhZGVyc1NlbnQiLCJfQXBwJHByb3RvdHlwZSIsInVybE9iamVjdEtleXMiLCJTUCIsIm1lYXN1cmUiLCJJbmRleCIsImxvZyIsImdldFBvc3RzIiwiZ2V0U3RhdGljUHJvcHMiLCJyZXZhbGlkYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsTUFBTSxHQUFHLFNBQWY7O0FBRUEsTUFBTUMsZUFBZ0MsR0FBR0MsS0FBSyxJQUFJO0FBQ2hELFFBQU07QUFBRUM7QUFBRixNQUFZRCxLQUFsQjtBQUVBLFFBQU1FLFNBQVMsR0FBR0MsaUVBQVksRUFBOUI7QUFDQSxRQUFNQyxTQUFTLEdBQUdDLG1FQUFpQixDQUFDLFVBQUQsRUFBYSxVQUFiLENBQW5DOztBQUVBLFdBQVNDLE9BQVQsQ0FDRUMsQ0FERixFQUVFQyxDQUZGLEVBR0U7QUFDQSxVQUFNQyxNQUFNLEdBQUdGLENBQUMsQ0FBQ0csc0JBQWpCO0FBQ0EsVUFBTUMsTUFBTSxHQUFHSCxDQUFDLENBQUNFLHNCQUFqQjtBQUVBLFFBQUlFLFVBQVUsR0FBRyxDQUFqQjs7QUFDQSxRQUFJSCxNQUFNLEdBQUdFLE1BQWIsRUFBcUI7QUFDbkJDLGdCQUFVLEdBQUcsQ0FBYjtBQUNELEtBRkQsTUFFTyxJQUFJSCxNQUFNLEdBQUdFLE1BQWIsRUFBcUI7QUFDMUJDLGdCQUFVLEdBQUcsQ0FBQyxDQUFkO0FBQ0Q7O0FBQ0QsV0FBT0EsVUFBUDtBQUNEOztBQUVELFFBQU1DLGFBQWEsR0FBR1osS0FBSyxDQUFDYSxJQUFOLENBQVdSLE9BQVgsRUFBb0JTLEtBQXBCLENBQTBCLENBQTFCLEVBQTZCLENBQTdCLENBQXRCO0FBRUEsc0JBQ0UsOERBQUMsb0RBQUQ7QUFBUSxTQUFLLEVBQUMsT0FBZDtB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHVCQUF1QjtBQUN2Qix1QkFBdUI7QUFDdkIsZUFBZTtBQUNmLGtCQUFrQjtBQUNsQixnQkFBZ0I7QUFDaEIsWUFBWTtBQUNaLFlBQVk7QUFDWixjQUFjO0FBQ2QsZ0JBQWdCO0FBQ2hCLGtCQUFrQjtBQUNsQixnQkFBZ0I7QUFDaEIsbUJBQW1CO0FBQ25CLHdCQUF3QjtBQUN4Qix5QkFBeUI7QUFDekIseUJBQXlCO0FBQ3pCLGlCQUFpQjtBQUNqQixvQkFBb0I7QUFDcEIsa0JBQWtCO0FBQ2xCLGNBQWM7QUFDZCxjQUFjO0FBQ2QsZ0JBQWdCO0FBQ2hCLGtCQUFrQjtBQUNsQixvQkFBb0I7QUFDcEIsa0JBQWtCO0FBQ2xCLDBCQUEwQjtBQUMxQixjQUFjO0FBQ2QsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7QUNqT2E7O0FBRWIsSUFBSSxLQUFxQyxFQUFFLEVBRTFDO0FBQ0QsRUFBRSxrSkFBeUQ7QUFDM0Q7Ozs7Ozs7Ozs7OztBQ05BLDhDOzs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLG9DOzs7Ozs7Ozs7OztBQ0FBLCtEOzs7Ozs7Ozs7OztBQ0FBLHlFOzs7Ozs7Ozs7OztBQ0FBLGlHOzs7Ozs7Ozs7OztBQ0FBLHFFOzs7Ozs7Ozs7OztBQ0FBLDBFOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7O0FDQUEsZSIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgUHJvcHMgfSBmcm9tIFwiaW50ZXJmYWNlcy9pbnRlcmZhY2VcIjtcclxuaW1wb3J0IHtcclxuICBWU3RhY2ssXHJcbiAgSFN0YWNrLFxyXG4gIEhlYWRpbmcsXHJcbiAgVGV4dCxcclxuICBMaW5rLFxyXG4gIFRvb2x0aXAsXHJcbiAgdXNlQ29sb3JNb2RlVmFsdWUsXHJcbiAgRmxleCxcclxuICBTaW1wbGVHcmlkLFxyXG4gIEJveCxcclxuICBJbWFnZVxyXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCBOZXh0TGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xyXG5pbXBvcnQgeyB1c2VMaW5rQ29sb3IgfSBmcm9tIFwiY29tcG9uZW50cy91aS90aGVtZVwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9sYXlvdXQvaGVhZGVyXCI7XHJcbmltcG9ydCB7IENhcmRUcmFuc2l0aW9uIH0gZnJvbSBcImNvbXBvbmVudHMvdWkvcGFnZS10cmFuc2l0aW9uc1wiO1xyXG5pbXBvcnQgeyBNb3Rpb25Cb3ggfSBmcm9tIFwiY29tcG9uZW50cy91aS9tb3Rpb25cIjtcclxuXHJcbmNvbnN0IE9SQU5HRSA9IFwiI2ZmOTQwMFwiO1xyXG5cclxuY29uc3QgUG9wdWxhckFydGljbGVzOiBSZWFjdC5GQzxQcm9wcz4gPSBwcm9wcyA9PiB7XHJcbiAgY29uc3QgeyBwb3N0cyB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IGxpbmtDb2xvciA9IHVzZUxpbmtDb2xvcigpO1xyXG4gIGNvbnN0IHRleHRDb2xvciA9IHVzZUNvbG9yTW9kZVZhbHVlKFwiZ3JheS41MDBcIiwgXCJncmF5LjIwMFwiKTtcclxuXHJcbiAgZnVuY3Rpb24gY29tcGFyZShcclxuICAgIGE6IHsgcHVibGljX3JlYWN0aW9uc19jb3VudDogbnVtYmVyIH0sXHJcbiAgICBiOiB7IHB1YmxpY19yZWFjdGlvbnNfY291bnQ6IG51bWJlciB9XHJcbiAgKSB7XHJcbiAgICBjb25zdCBjb3VudEEgPSBhLnB1YmxpY19yZWFjdGlvbnNfY291bnQ7XHJcbiAgICBjb25zdCBjb3VudEIgPSBiLnB1YmxpY19yZWFjdGlvbnNfY291bnQ7XHJcblxyXG4gICAgbGV0IGNvbXBhcmlzb24gPSAwO1xyXG4gICAgaWYgKGNvdW50QSA8IGNvdW50Qikge1xyXG4gICAgICBjb21wYXJpc29uID0gMTtcclxuICAgIH0gZWxzZSBpZiAoY291bnRBID4gY291bnRCKSB7XHJcbiAgICAgIGNvbXBhcmlzb24gPSAtMTtcclxuICAgIH1cclxuICAgIHJldHVybiBjb21wYXJpc29uO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgbW9zdExpa2VkRGF0YSA9IHBvc3RzLnNvcnQoY29tcGFyZSkuc2xpY2UoMCwgMyk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8VlN0YWNrIGFsaWduPVwic3RhcnRcIiBzcGFjaW5nPXs4fSB3aWR0aD1cIjEwMCVcIj5cclxuICAgICAgPEhlYWRlciB1bmRlcmxpbmVDb2xvcj17T1JBTkdFfSBtdD17MH0gbWI9ezB9PlxyXG4gICAgICAgIFBvcHVsYXIgQXJ0aWNsZXNcclxuICAgICAgPC9IZWFkZXI+XHJcbiAgICAgIDxTaW1wbGVHcmlkIGNvbHVtbnM9ezF9IHNwYWNpbmc9ezR9IG10PXs1fSB3PVwiMTAwJVwiPlxyXG4gICAgICAgIHtwb3N0cyAmJlxyXG4gICAgICAgICAgbW9zdExpa2VkRGF0YS5tYXAoXHJcbiAgICAgICAgICAgICh7XHJcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgdGl0bGUsXHJcbiAgICAgICAgICAgICAgc2x1ZyxcclxuICAgICAgICAgICAgICBwb3NpdGl2ZV9yZWFjdGlvbnNfY291bnQsXHJcbiAgICAgICAgICAgICAgY29tbWVudHNfY291bnQsXHJcbiAgICAgICAgICAgICAgcHVibGlzaGVkX2F0XHJcbiAgICAgICAgICAgIH0sIGkpID0+IChcclxuICAgICAgICAgICAgICA8TW90aW9uQm94IHdoaWxlSG92ZXI9e3sgeTogLTUgfX0ga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgIDxDYXJkVHJhbnNpdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPFZTdGFja1xyXG4gICAgICAgICAgICAgICAgICAgIHNwYWNpbmc9ezF9XHJcbiAgICAgICAgICAgICAgICAgICAgcD17NH1cclxuICAgICAgICAgICAgICAgICAgICBfaG92ZXI9e3sgc2hhZG93OiBcIm1kXCIsIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoPVwiMXB4XCJcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbj1cInJlbGF0aXZlXCJcclxuICAgICAgICAgICAgICAgICAgICByb3VuZGVkPVwibWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGJnPXt1c2VDb2xvck1vZGVWYWx1ZShcIndoaXRlXCIsIFwiZ3JheS44MDBcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ249XCJsZWZ0XCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxIU3RhY2sganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCIgaXNJbmxpbmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SGVhZGluZyBmb250U2l6ZT1cImxnXCIgYWxpZ249XCJsZWZ0XCIgbXQ9ezB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TmV4dExpbmsgaHJlZj17YC9ibG9nLyR7c2x1Z31gfSBwYXNzSHJlZj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBhcz17TGlua30gY29sb3I9e2xpbmtDb2xvcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L05leHRMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9IZWFkaW5nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEhTdGFjayBzcGFjaW5nPXsyfSBpc0lubGluZSBkPXtbXCJub25lXCIsIFwiZmxleFwiLCBcImZsZXhcIl19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cG9zaXRpdmVfcmVhY3Rpb25zX2NvdW50ID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4IGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplPVwic21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub09mTGluZXM9ezF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ9XCI0MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbj1cImxlZnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj17dGV4dENvbG9yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cG9zaXRpdmVfcmVhY3Rpb25zX2NvdW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiQ2FwYV8xXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlQmFja2dyb3VuZD1cIm5ldyAwIDAgNTEyIDUxMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjIwcHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjIwcHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJtNDQ1LjkzNiAyMC42NTdoLTM3OS44NzJjLTE5LjczMSAwLTM3LjQ0MyA4LjY0OS00OS41NDggMjIuMzY0bC02LjQwMyA0My43MDF2MjM5LjUzNWMwIDM2LjQ4NiAxOS40NjUgNjYuMDY0IDU1Ljk1MSA2Ni4wNjRoODkuNDI3YzYuNTcgMCAxMi44NzIgMTAuODE3IDE3LjUxOCAxNS40NjNsNzcuNzA0IDc3LjcwNCAxNi43MjEgMi4yNjhjLjk1LS42NjQgMS44NTYtMS40MiAyLjcwNC0yLjI2OGw3Ny43MDQtNzcuNzA0YzQuNjQ2LTQuNjQ2IDEwLjk0OC03LjI1NiAxNy41MTgtNy4yNTZoODAuNTc3YzM2LjQ4NiAwIDY2LjA2NC0yOS41NzggNjYuMDY0LTY2LjA2NHYtMjQ3Ljc0MmMtLjAwMS0zNi40ODctMjkuNTc5LTY2LjA2NS02Ni4wNjUtNjYuMDY1elwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiI2ZmN2U5MlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIm0xNjQuMTU5IDQwNy43ODQgNzcuNzA0IDc3LjcwNGM2Ljk1OSA2Ljk1OSAxNy43NzQgNy43MTQgMjUuNTcgMi4yNjhsLTkxLjU5NS05MS42NWMtNy42ODUtNy42ODUtMTguMzIzLTEyLjA5My0yOS4xOTQtMTIuMDkzaC04MC41NzljLTI3LjMyMyAwLTQ5LjU0OC0yMi4yMjYtNDkuNTQ4LTQ5LjU0OHYtMjkxLjQ0NGMtMTAuMjUgMTEuNjM5LTE2LjUxNyAyNi45NzMtMTYuNTE3IDQzLjcwMXYyNDcuNzQyYzAgMzYuNDg2IDI5LjU3OCA2Ni4wNjUgNjYuMDY1IDY2LjA2NWg4MC41NzdjNi41Ny0uMDAxIDEyLjg3MiAyLjYwOSAxNy41MTcgNy4yNTV6XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjZmY1ZjdhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwibTM4Ny42MjYgMTc3Ljk1MWMtNC4wMDMtMzUuNjc3LTM0LjE2My02My45OS02OS45ODgtNjYuMzE1LTIxLjcwMS0xLjQwOC00MS41MzggNi40MDUtNTYuMTA3IDE5Ljg1My0zLjEzNSAyLjg5NC03LjkyNiAyLjg5NC0xMS4wNjIgMC0xNC41NjktMTMuNDQ4LTM0LjQwNi0yMS4yNjEtNTYuMTA3LTE5Ljg1My04LjY1My41NjItMTYuOTc2IDIuNjM5LTI0LjY3OSA1Ljk3MS0yNC4xOSAxMC40NjEtNDAuNjU1IDYwLjM0NC00MC42NTUgNjAuMzQ0LTguNDg2IDc1LjYzMiA5My43MzUgMTM2LjY4NiAxMjQuMTI2IDE1NC43NTFsMjEuMDA1LS44MDhjMzcuODc4LTIzLjk4OCAxMjEuMTk2LTg1LjA1IDExMy40NjctMTUzLjk0M3pcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiNmZmZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJtMTQyLjIzNSAxNjcuMDljMi4yMjQtMTkuODE4IDEyLjU5NC0zNy40MDIgMjcuNDQ3LTQ5LjQ4My0yNC4xNTMgMTAuNDc1LTQyLjI3NSAzMy4zMTEtNDUuMzA5IDYwLjM0NC04LjQ4NSA3NS42MzIgOTIuNzU3IDE0MS44MjkgMTIzLjE0OCAxNTkuODk0IDUuMjQ1IDMuMTE3IDExLjcxMiAzLjExNyAxNi45NTcgMCAyLjcwMi0xLjYwNiA1Ljk4NS0zLjYxIDkuNjgtNS45NS0xOS4zNzQtMTAuOTE5LTE0MS4xMDUtODIuOTYyLTEzMS45MjMtMTY0LjgwNXpcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiNmZmRiZGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjb21tZW50c19jb3VudCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxleCBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZT1cInNtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9PZkxpbmVzPXsxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0PVwiNDAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ249XCJsZWZ0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9e3RleHRDb2xvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvbW1lbnRzX2NvdW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiQ2FwYV8xXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlQmFja2dyb3VuZD1cIm5ldyAwIDAgNTEyIDUxMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjIwcHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjIwcHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwibTQzOC45ODMgMTEuNTQ5aC0yNzYuNzJjLTM2LjA5NCAwLTY1LjYyNSAyOS41MzEtNjUuNjI1IDY1LjYyNXYyMi4zM2gyNTAuMzE3YzM2LjA5NCAwIDY1LjYyNSAyOS41MzEgNjUuNjI1IDY1LjYyNXYxNjMuNjA5aDI2LjQwNGMzNi4wOTQgMCA2NS42MjUtMjkuNTMxIDY1LjYyNS02NS42MjV2LTE4NS45MzljMC0zNi4wOTQtMjkuNTMyLTY1LjYyNS02NS42MjYtNjUuNjI1elwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiM2YzdlZDZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJtMzkyLjQ1NCA5Ni41MDRoLTI3Ni43MmMtNi42MzYgMC0xMy4wNDcgMS4wMDYtMTkuMDk2IDIuODZ2LjE0aDI1MC4zMTdjMzYuMDk0IDAgNjUuNjI1IDI5LjUzMSA2NS42MjUgNjUuNjI1djE2My42MDloMjYuNDA0YzYuNjM2IDAgMTMuMDQ3LTEuMDA2IDE5LjA5Ni0yLjg2di0xNjMuNzQ4YzAtMzYuMDk0LTI5LjUzMi02NS42MjYtNjUuNjI2LTY1LjYyNnpcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjNGY2N2QyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwibTM0OS45NTQgOTYuNTA0aC0yNzYuNzJjLTM2LjA5NCAwLTY1LjYyNSAyOS41MzEtNjUuNjI1IDY1LjYyNXYxODUuOTM5YzAgMzYuMDk0IDI5LjUzMSA2NS42MjUgNjUuNjI1IDY1LjYyNWgxNjYuMDgzYzcuMTIgMCAxMi40MzUgNi42MjYgMTAuODA3IDEzLjU1Ny00LjQwNCAxOC43NTEtMTEuMTQ0IDM4LjU4MS0yMS4xMDcgNTguOTA4LTQuNDc0IDkuMTI5IDUuNzA0IDE4LjQxIDE0LjM0OSAxMy4wNiAyNC45OTctMTUuNDcgNjAuNTYyLTQxLjM2MiA5MC41MTItNzcuOTY0IDMuOTM3LTQuODExIDkuODU4LTcuNTYxIDE2LjA3NS03LjU2MSAzNi4wOTQgMCA2NS42MjUtMjkuNTMxIDY1LjYyNS02NS42MjV2LTE4NS45MzhjLjAwMi0zNi4wOTQtMjkuNTMtNjUuNjI2LTY1LjYyNC02NS42MjZ6XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiIzYwYjhmZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIm0yOTIuNjI0IDQyNy4yNWMxLjYyOC02LjkzMi0zLjY4Ny0xMy41NTctMTAuODA3LTEzLjU1N2gtNDIuNWM3LjEyIDAgMTIuNDM1IDYuNjI1IDEwLjgwNyAxMy41NTctNC40MDQgMTguNzUxLTExLjE0NCAzOC41ODEtMjEuMTA3IDU4LjkwOC00LjQ3NCA5LjEyOSA1LjcwNCAxOC40MSAxNC4zNDkgMTMuMDYgOS41OTEtNS45MzYgMjAuNzQtMTMuNDExIDMyLjUyNy0yMi40MzEgNy42MDMtMTcuMDQ5IDEzLjAwNy0zMy42NzkgMTYuNzMxLTQ5LjUzN3pcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjMjNhOGZlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwibTUwLjEwOSAzNDguMDY4di0xODUuOTM4YzAtMzYuMDk0IDI5LjUzMS02NS42MjUgNjUuNjI1LTY1LjYyNWgtNDIuNWMtMzYuMDk0IDAtNjUuNjI1IDI5LjUzMS02NS42MjUgNjUuNjI1djE4NS45MzhjMCAzNi4wOTQgMjkuNTMxIDY1LjYyNSA2NS42MjUgNjUuNjI1aDQyLjVjLTM2LjA5NCAwLTY1LjYyNS0yOS41MzEtNjUuNjI1LTY1LjYyNXpcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjMjNhOGZlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgZmlsbD1cIiNkZmViZmFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PVwiOTguNTc3XCIgY3k9XCIyNjAuNDM5XCIgcj1cIjIxLjc3N1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBjeD1cIjE2OC45MTRcIiBjeT1cIjI2MC40MzlcIiByPVwiMjEuNzc3XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PVwiMjM5LjI1MVwiIGN5PVwiMjYwLjQzOVwiIHI9XCIyMS43NzdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgY3g9XCIzMDkuNTg4XCIgY3k9XCIyNjAuNDM5XCIgcj1cIjIxLjc3N1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwibTk4LjU3NyAyNjAuNDM5YzAtOC4wNTkgNC4zODEtMTUuMDkxIDEwLjg4OC0xOC44NTYtMy4yMDQtMS44NTQtNi45Mi0yLjkyMS0xMC44ODgtMi45MjEtMTIuMDI3IDAtMjEuNzc3IDkuNzUtMjEuNzc3IDIxLjc3N3M5Ljc1IDIxLjc3NyAyMS43NzcgMjEuNzc3YzMuOTY4IDAgNy42ODUtMS4wNjYgMTAuODg4LTIuOTItNi41MDctMy43NjctMTAuODg4LTEwLjc5OC0xMC44ODgtMTguODU3elwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiNiMWRiZmNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJtMTY4LjkxNCAyNjAuNDM5YzAtOC4wNTkgNC4zODEtMTUuMDkxIDEwLjg4OC0xOC44NTYtMy4yMDQtMS44NTQtNi45Mi0yLjkyMS0xMC44ODgtMi45MjEtMTIuMDI3IDAtMjEuNzc3IDkuNzUtMjEuNzc3IDIxLjc3N3M5Ljc1IDIxLjc3NyAyMS43NzcgMjEuNzc3YzMuOTY4IDAgNy42ODUtMS4wNjYgMTAuODg4LTIuOTItNi41MDctMy43NjctMTAuODg4LTEwLjc5OC0xMC44ODgtMTguODU3elwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiNiMWRiZmNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJtMjM5LjI1MSAyNjAuNDM5YzAtOC4wNTkgNC4zODEtMTUuMDkxIDEwLjg4OC0xOC44NTYtMy4yMDQtMS44NTQtNi45MjEtMi45MjEtMTAuODg4LTIuOTIxLTEyLjAyNyAwLTIxLjc3NyA5Ljc1LTIxLjc3NyAyMS43NzdzOS43NSAyMS43NzcgMjEuNzc3IDIxLjc3N2MzLjk2OCAwIDcuNjg1LTEuMDY2IDEwLjg4OC0yLjkyLTYuNTA3LTMuNzY3LTEwLjg4OC0xMC43OTgtMTAuODg4LTE4Ljg1N3pcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjYjFkYmZjXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwibTMwOS41ODggMjYwLjQzOWMwLTguMDU5IDQuMzgxLTE1LjA5MSAxMC44ODgtMTguODU2LTMuMjA0LTEuODU0LTYuOTIxLTIuOTIxLTEwLjg4OC0yLjkyMS0xMi4wMjcgMC0yMS43NzcgOS43NS0yMS43NzcgMjEuNzc3czkuNzUgMjEuNzc3IDIxLjc3NyAyMS43NzdjMy45NjggMCA3LjY4NS0xLjA2NiAxMC44ODgtMi45Mi02LjUwNy0zLjc2Ny0xMC44ODgtMTAuNzk4LTEwLjg4OC0xOC44NTd6XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiI2IxZGJmY1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJtNjkuMTkxIDI2MC4yNTNjMCAxNi4xNDQgMTMuMTM0IDI5LjI3NyAyOS4yNzYgMjkuMjc3IDE2LjE0NCAwIDI5LjI3Ny0xMy4xMzMgMjkuMjc3LTI5LjI3NyAwLTE2LjE0My0xMy4xMzQtMjkuMjc2LTI5LjI3Ny0yOS4yNzYtMTYuMTQyIDAtMjkuMjc2IDEzLjEzMy0yOS4yNzYgMjkuMjc2em00My41NTQgMGMwIDcuODcyLTYuNDA1IDE0LjI3Ny0xNC4yNzcgMTQuMjc3cy0xNC4yNzYtNi40MDUtMTQuMjc2LTE0LjI3NyA2LjQwNC0xNC4yNzYgMTQuMjc2LTE0LjI3NiAxNC4yNzcgNi40MDQgMTQuMjc3IDE0LjI3NnpcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwibTE5OC4wODIgMjYwLjI1M2MwLTE2LjE0My0xMy4xMzQtMjkuMjc2LTI5LjI3Ny0yOS4yNzZzLTI5LjI3NiAxMy4xMzMtMjkuMjc2IDI5LjI3NmMwIDE2LjE0NCAxMy4xMzQgMjkuMjc3IDI5LjI3NiAyOS4yNzcgMTYuMTQzIDAgMjkuMjc3LTEzLjEzMyAyOS4yNzctMjkuMjc3em0tNDMuNTU0IDBjMC03Ljg3MiA2LjQwNC0xNC4yNzYgMTQuMjc2LTE0LjI3NnMxNC4yNzcgNi40MDQgMTQuMjc3IDE0LjI3Ni02LjQwNSAxNC4yNzctMTQuMjc3IDE0LjI3Ny0xNC4yNzYtNi40MDUtMTQuMjc2LTE0LjI3N3pcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwibTI2OC40MTkgMjYwLjI1M2MwLTE2LjE0My0xMy4xMzQtMjkuMjc2LTI5LjI3Ny0yOS4yNzZzLTI5LjI3NiAxMy4xMzMtMjkuMjc2IDI5LjI3NmMwIDE2LjE0NCAxMy4xMzQgMjkuMjc3IDI5LjI3NiAyOS4yNzcgMTYuMTQzIDAgMjkuMjc3LTEzLjEzMyAyOS4yNzctMjkuMjc3em0tNDMuNTU0IDBjMC03Ljg3MiA2LjQwNC0xNC4yNzYgMTQuMjc2LTE0LjI3NnMxNC4yNzcgNi40MDQgMTQuMjc3IDE0LjI3Ni02LjQwNSAxNC4yNzctMTQuMjc3IDE0LjI3Ny0xNC4yNzYtNi40MDUtMTQuMjc2LTE0LjI3N3pcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwibTMzOC43NTYgMjYwLjI1M2MwLTE2LjE0My0xMy4xMzQtMjkuMjc2LTI5LjI3Ny0yOS4yNzZzLTI5LjI3NiAxMy4xMzMtMjkuMjc2IDI5LjI3NmMwIDE2LjE0NCAxMy4xMzQgMjkuMjc3IDI5LjI3NiAyOS4yNzcgMTYuMTQzIDAgMjkuMjc3LTEzLjEzMyAyOS4yNzctMjkuMjc3em0tNDMuNTU0IDBjMC03Ljg3MiA2LjQwNC0xNC4yNzYgMTQuMjc2LTE0LjI3NnMxNC4yNzcgNi40MDQgMTQuMjc3IDE0LjI3Ni02LjQwNSAxNC4yNzctMTQuMjc3IDE0LjI3Ny0xNC4yNzYtNi40MDUtMTQuMjc2LTE0LjI3N3pcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwibTQzOC44NzQgMy44NjNoLTI3Ni43MmMtNDAuMzIxIDAtNzMuMTI2IDMyLjgwNC03My4xMjYgNzMuMTI1djExLjgzaC0xNS45MDNjLTQwLjMyMS4wMDEtNzMuMTI1IDMyLjgwNS03My4xMjUgNzMuMTI2djE4NS45MzhjMCA0MC4zMjIgMzIuODA0IDczLjEyNSA3My4xMjUgNzMuMTI1aDc4LjE4YzQuMTQzIDAgNy41LTMuMzU4IDcuNS03LjVzLTMuMzU3LTcuNS03LjUtNy41aC03OC4xOGMtMzIuMDUgMC01OC4xMjUtMjYuMDc1LTU4LjEyNS01OC4xMjV2LTE4NS45MzhjMC0zMi4wNSAyNi4wNzUtNTguMTI1IDU4LjEyNS01OC4xMjVoMjc2LjcyMWMzMi4wNSAwIDU4LjEyNSAyNi4wNzUgNTguMTI1IDU4LjEyNXYxODUuOTM4YzAgMzIuMDUtMjYuMDc1IDU4LjEyNS01OC4xMjUgNTguMTI1LTguNTQzIDAtMTYuNTE4IDMuNzU4LTIxLjg4MSAxMC4zMTItMjkuNDE3IDM1Ljk1LTY0LjQ0NyA2MS4zNTUtODguNjUzIDc2LjMzNi0yLjI1NyAxLjM5My00Ljg1NS0uOTYtMy42NjktMy4zODIgOS41MTItMTkuNDA4IDE2LjgwNS0zOS43NjEgMjEuNjc1LTYwLjQ5NCAyLjcyOC0xMS42MTgtNi4xMjktMjIuNzcyLTE4LjEwOS0yMi43NzJoLTUyLjkwM2MtNC4xNDMgMC03LjUgMy4zNTgtNy41IDcuNXMzLjM1NyA3LjUgNy41IDcuNWg1Mi45MDNjMi4zMDEgMCA0LjAyNyAyLjEyOCAzLjUwNiA0LjM0Mi00LjYxMiAxOS42MzgtMTEuNTIzIDM4LjkyNC0yMC41NDEgNTcuMzIzLTcuNzc2IDE1Ljg3MiAxMC4wMjUgMzIuMDI1IDI1LjAzMiAyMi43MzggMjUuMTc4LTE1LjU4MyA2MS42NDItNDIuMDQgOTIuMzY4LTc5LjU5MSAyLjUwMy0zLjA1OCA2LjI0Ny00LjgxMiAxMC4yNzItNC44MTIgNDAuMzIxIDAgNzMuMTI1LTMyLjgwNCA3My4xMjUtNzMuMTI1di0xMS44M2gxNS45MDNjNDAuMzIyIDAgNzMuMTI2LTMyLjgwNCA3My4xMjYtNzMuMTI1di03NS40NjljMC00LjE0Mi0zLjM1Ny03LjUtNy41LTcuNXMtNy41IDMuMzU4LTcuNSA3LjV2NzUuNDY5YzAgMzIuMDUtMjYuMDc1IDU4LjEyNS01OC4xMjYgNTguMTI1aC0xNS45MDN2LTE1OS4xMDhjMC00MC4zMjEtMzIuODA0LTczLjEyNS03My4xMjUtNzMuMTI1aC0yNDUuODE4di0xMS44M2MwLTMyLjA1IDI2LjA3NS01OC4xMjUgNTguMTI2LTU4LjEyNWgyNzYuNzJjMzIuMDUxIDAgNTguMTI2IDI2LjA3NSA1OC4xMjYgNTguMTI1djc1LjQ2OWMwIDQuMTQyIDMuMzU3IDcuNSA3LjUgNy41czcuNS0zLjM1OCA3LjUtNy41di03NS40NjljMC00MC4zMjItMzIuODA0LTczLjEyNi03My4xMjYtNzMuMTI2elwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9IU3RhY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9IU3RhY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgPEhTdGFjayBzcGFjaW5nPXsyfSBpc0lubGluZT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwIGhhc0Fycm93IGxhYmVsPVwiUHVibGlzaGVkXCIgcGxhY2VtZW50PVwidG9wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGZvbnRTaXplPVwic21cIiBmb250V2VpZ2h0PVwiNjAwXCIgY29sb3I9e3RleHRDb2xvcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge21vbWVudChwdWJsaXNoZWRfYXQpLmZvcm1hdChcIkRvIE1NTU0gWVlZWVwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAge3Bvc2l0aXZlX3JlYWN0aW9uc19jb3VudCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgaGFzQXJyb3cgbGFiZWw9XCJSZWFjdGlvbnNcIiBwbGFjZW1lbnQ9XCJ0b3BcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxleCBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgZD17W1wiZmxleFwiLCBcIm5vbmVcIiwgXCJub25lXCJdfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplPVwic21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub09mTGluZXM9ezF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ9XCI0MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbj1cImxlZnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj17dGV4dENvbG9yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cG9zaXRpdmVfcmVhY3Rpb25zX2NvdW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiQ2FwYV8xXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlQmFja2dyb3VuZD1cIm5ldyAwIDAgNTEyIDUxMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjIwcHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjIwcHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJtNDQ1LjkzNiAyMC42NTdoLTM3OS44NzJjLTE5LjczMSAwLTM3LjQ0MyA4LjY0OS00OS41NDggMjIuMzY0bC02LjQwMyA0My43MDF2MjM5LjUzNWMwIDM2LjQ4NiAxOS40NjUgNjYuMDY0IDU1Ljk1MSA2Ni4wNjRoODkuNDI3YzYuNTcgMCAxMi44NzIgMTAuODE3IDE3LjUxOCAxNS40NjNsNzcuNzA0IDc3LjcwNCAxNi43MjEgMi4yNjhjLjk1LS42NjQgMS44NTYtMS40MiAyLjcwNC0yLjI2OGw3Ny43MDQtNzcuNzA0YzQuNjQ2LTQuNjQ2IDEwLjk0OC03LjI1NiAxNy41MTgtNy4yNTZoODAuNTc3YzM2LjQ4NiAwIDY2LjA2NC0yOS41NzggNjYuMDY0LTY2LjA2NHYtMjQ3Ljc0MmMtLjAwMS0zNi40ODctMjkuNTc5LTY2LjA2NS02Ni4wNjUtNjYuMDY1elwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiI2ZmN2U5MlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIm0xNjQuMTU5IDQwNy43ODQgNzcuNzA0IDc3LjcwNGM2Ljk1OSA2Ljk1OSAxNy43NzQgNy43MTQgMjUuNTcgMi4yNjhsLTkxLjU5NS05MS42NWMtNy42ODUtNy42ODUtMTguMzIzLTEyLjA5My0yOS4xOTQtMTIuMDkzaC04MC41NzljLTI3LjMyMyAwLTQ5LjU0OC0yMi4yMjYtNDkuNTQ4LTQ5LjU0OHYtMjkxLjQ0NGMtMTAuMjUgMTEuNjM5LTE2LjUxNyAyNi45NzMtMTYuNTE3IDQzLjcwMXYyNDcuNzQyYzAgMzYuNDg2IDI5LjU3OCA2Ni4wNjUgNjYuMDY1IDY2LjA2NWg4MC41NzdjNi41Ny0uMDAxIDEyLjg3MiAyLjYwOSAxNy41MTcgNy4yNTV6XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjZmY1ZjdhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwibTM4Ny42MjYgMTc3Ljk1MWMtNC4wMDMtMzUuNjc3LTM0LjE2My02My45OS02OS45ODgtNjYuMzE1LTIxLjcwMS0xLjQwOC00MS41MzggNi40MDUtNTYuMTA3IDE5Ljg1My0zLjEzNSAyLjg5NC03LjkyNiAyLjg5NC0xMS4wNjIgMC0xNC41NjktMTMuNDQ4LTM0LjQwNi0yMS4yNjEtNTYuMTA3LTE5Ljg1My04LjY1My41NjItMTYuOTc2IDIuNjM5LTI0LjY3OSA1Ljk3MS0yNC4xOSAxMC40NjEtNDAuNjU1IDYwLjM0NC00MC42NTUgNjAuMzQ0LTguNDg2IDc1LjYzMiA5My43MzUgMTM2LjY4NiAxMjQuMTI2IDE1NC43NTFsMjEuMDA1LS44MDhjMzcuODc4LTIzLjk4OCAxMjEuMTk2LTg1LjA1IDExMy40NjctMTUzLjk0M3pcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiNmZmZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJtMTQyLjIzNSAxNjcuMDljMi4yMjQtMTkuODE4IDEyLjU5NC0zNy40MDIgMjcuNDQ3LTQ5LjQ4My0yNC4xNTMgMTAuNDc1LTQyLjI3NSAzMy4zMTEtNDUuMzA5IDYwLjM0NC04LjQ4NSA3NS42MzIgOTIuNzU3IDE0MS44MjkgMTIzLjE0OCAxNTkuODk0IDUuMjQ1IDMuMTE3IDExLjcxMiAzLjExNyAxNi45NTcgMCAyLjcwMi0xLjYwNiA1Ljk4NS0zLjYxIDkuNjgtNS45NS0xOS4zNzQtMTAuOTE5LTE0MS4xMDUtODIuOTYyLTEzMS45MjMtMTY0LjgwNXpcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiNmZmRiZGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHtjb21tZW50c19jb3VudCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgaGFzQXJyb3cgbGFiZWw9XCJDb21tZW50c1wiIHBsYWNlbWVudD1cInRvcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4IGFsaWduSXRlbXM9XCJjZW50ZXJcIiBkPXtbXCJmbGV4XCIsIFwibm9uZVwiLCBcIm5vbmVcIl19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU9XCJzbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vT2ZMaW5lcz17MX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodD1cIjQwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduPVwibGVmdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPXt0ZXh0Q29sb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb21tZW50c19jb3VudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIkNhcGFfMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZUJhY2tncm91bmQ9XCJuZXcgMCAwIDUxMiA1MTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyMHB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCA1MTIgNTEyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyMHB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIm00MzguOTgzIDExLjU0OWgtMjc2LjcyYy0zNi4wOTQgMC02NS42MjUgMjkuNTMxLTY1LjYyNSA2NS42MjV2MjIuMzNoMjUwLjMxN2MzNi4wOTQgMCA2NS42MjUgMjkuNTMxIDY1LjYyNSA2NS42MjV2MTYzLjYwOWgyNi40MDRjMzYuMDk0IDAgNjUuNjI1LTI5LjUzMSA2NS42MjUtNjUuNjI1di0xODUuOTM5YzAtMzYuMDk0LTI5LjUzMi02NS42MjUtNjUuNjI2LTY1LjYyNXpcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjNmM3ZWQ2XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwibTM5Mi40NTQgOTYuNTA0aC0yNzYuNzJjLTYuNjM2IDAtMTMuMDQ3IDEuMDA2LTE5LjA5NiAyLjg2di4xNGgyNTAuMzE3YzM2LjA5NCAwIDY1LjYyNSAyOS41MzEgNjUuNjI1IDY1LjYyNXYxNjMuNjA5aDI2LjQwNGM2LjYzNiAwIDEzLjA0Ny0xLjAwNiAxOS4wOTYtMi44NnYtMTYzLjc0OGMwLTM2LjA5NC0yOS41MzItNjUuNjI2LTY1LjYyNi02NS42MjZ6XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiIzRmNjdkMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIm0zNDkuOTU0IDk2LjUwNGgtMjc2LjcyYy0zNi4wOTQgMC02NS42MjUgMjkuNTMxLTY1LjYyNSA2NS42MjV2MTg1LjkzOWMwIDM2LjA5NCAyOS41MzEgNjUuNjI1IDY1LjYyNSA2NS42MjVoMTY2LjA4M2M3LjEyIDAgMTIuNDM1IDYuNjI2IDEwLjgwNyAxMy41NTctNC40MDQgMTguNzUxLTExLjE0NCAzOC41ODEtMjEuMTA3IDU4LjkwOC00LjQ3NCA5LjEyOSA1LjcwNCAxOC40MSAxNC4zNDkgMTMuMDYgMjQuOTk3LTE1LjQ3IDYwLjU2Mi00MS4zNjIgOTAuNTEyLTc3Ljk2NCAzLjkzNy00LjgxMSA5Ljg1OC03LjU2MSAxNi4wNzUtNy41NjEgMzYuMDk0IDAgNjUuNjI1LTI5LjUzMSA2NS42MjUtNjUuNjI1di0xODUuOTM4Yy4wMDItMzYuMDk0LTI5LjUzLTY1LjYyNi02NS42MjQtNjUuNjI2elwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiM2MGI4ZmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJtMjkyLjYyNCA0MjcuMjVjMS42MjgtNi45MzItMy42ODctMTMuNTU3LTEwLjgwNy0xMy41NTdoLTQyLjVjNy4xMiAwIDEyLjQzNSA2LjYyNSAxMC44MDcgMTMuNTU3LTQuNDA0IDE4Ljc1MS0xMS4xNDQgMzguNTgxLTIxLjEwNyA1OC45MDgtNC40NzQgOS4xMjkgNS43MDQgMTguNDEgMTQuMzQ5IDEzLjA2IDkuNTkxLTUuOTM2IDIwLjc0LTEzLjQxMSAzMi41MjctMjIuNDMxIDcuNjAzLTE3LjA0OSAxMy4wMDctMzMuNjc5IDE2LjczMS00OS41Mzd6XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiIzIzYThmZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIm01MC4xMDkgMzQ4LjA2OHYtMTg1LjkzOGMwLTM2LjA5NCAyOS41MzEtNjUuNjI1IDY1LjYyNS02NS42MjVoLTQyLjVjLTM2LjA5NCAwLTY1LjYyNSAyOS41MzEtNjUuNjI1IDY1LjYyNXYxODUuOTM4YzAgMzYuMDk0IDI5LjUzMSA2NS42MjUgNjUuNjI1IDY1LjYyNWg0Mi41Yy0zNi4wOTQgMC02NS42MjUtMjkuNTMxLTY1LjYyNS02NS42MjV6XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiIzIzYThmZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnIGZpbGw9XCIjZGZlYmZhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBjeD1cIjk4LjU3N1wiIGN5PVwiMjYwLjQzOVwiIHI9XCIyMS43NzdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgY3g9XCIxNjguOTE0XCIgY3k9XCIyNjAuNDM5XCIgcj1cIjIxLjc3N1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBjeD1cIjIzOS4yNTFcIiBjeT1cIjI2MC40MzlcIiByPVwiMjEuNzc3XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PVwiMzA5LjU4OFwiIGN5PVwiMjYwLjQzOVwiIHI9XCIyMS43NzdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIm05OC41NzcgMjYwLjQzOWMwLTguMDU5IDQuMzgxLTE1LjA5MSAxMC44ODgtMTguODU2LTMuMjA0LTEuODU0LTYuOTItMi45MjEtMTAuODg4LTIuOTIxLTEyLjAyNyAwLTIxLjc3NyA5Ljc1LTIxLjc3NyAyMS43NzdzOS43NSAyMS43NzcgMjEuNzc3IDIxLjc3N2MzLjk2OCAwIDcuNjg1LTEuMDY2IDEwLjg4OC0yLjkyLTYuNTA3LTMuNzY3LTEwLjg4OC0xMC43OTgtMTAuODg4LTE4Ljg1N3pcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjYjFkYmZjXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwibTE2OC45MTQgMjYwLjQzOWMwLTguMDU5IDQuMzgxLTE1LjA5MSAxMC44ODgtMTguODU2LTMuMjA0LTEuODU0LTYuOTItMi45MjEtMTAuODg4LTIuOTIxLTEyLjAyNyAwLTIxLjc3NyA5Ljc1LTIxLjc3NyAyMS43NzdzOS43NSAyMS43NzcgMjEuNzc3IDIxLjc3N2MzLjk2OCAwIDcuNjg1LTEuMDY2IDEwLjg4OC0yLjkyLTYuNTA3LTMuNzY3LTEwLjg4OC0xMC43OTgtMTAuODg4LTE4Ljg1N3pcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjYjFkYmZjXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwibTIzOS4yNTEgMjYwLjQzOWMwLTguMDU5IDQuMzgxLTE1LjA5MSAxMC44ODgtMTguODU2LTMuMjA0LTEuODU0LTYuOTIxLTIuOTIxLTEwLjg4OC0yLjkyMS0xMi4wMjcgMC0yMS43NzcgOS43NS0yMS43NzcgMjEuNzc3czkuNzUgMjEuNzc3IDIxLjc3NyAyMS43NzdjMy45NjggMCA3LjY4NS0xLjA2NiAxMC44ODgtMi45Mi02LjUwNy0zLjc2Ny0xMC44ODgtMTAuNzk4LTEwLjg4OC0xOC44NTd6XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiI2IxZGJmY1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIm0zMDkuNTg4IDI2MC40MzljMC04LjA1OSA0LjM4MS0xNS4wOTEgMTAuODg4LTE4Ljg1Ni0zLjIwNC0xLjg1NC02LjkyMS0yLjkyMS0xMC44ODgtMi45MjEtMTIuMDI3IDAtMjEuNzc3IDkuNzUtMjEuNzc3IDIxLjc3N3M5Ljc1IDIxLjc3NyAyMS43NzcgMjEuNzc3YzMuOTY4IDAgNy42ODUtMS4wNjYgMTAuODg4LTIuOTItNi41MDctMy43NjctMTAuODg4LTEwLjc5OC0xMC44ODgtMTguODU3elwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiNiMWRiZmNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwibTY5LjE5MSAyNjAuMjUzYzAgMTYuMTQ0IDEzLjEzNCAyOS4yNzcgMjkuMjc2IDI5LjI3NyAxNi4xNDQgMCAyOS4yNzctMTMuMTMzIDI5LjI3Ny0yOS4yNzcgMC0xNi4xNDMtMTMuMTM0LTI5LjI3Ni0yOS4yNzctMjkuMjc2LTE2LjE0MiAwLTI5LjI3NiAxMy4xMzMtMjkuMjc2IDI5LjI3NnptNDMuNTU0IDBjMCA3Ljg3Mi02LjQwNSAxNC4yNzctMTQuMjc3IDE0LjI3N3MtMTQuMjc2LTYuNDA1LTE0LjI3Ni0xNC4yNzcgNi40MDQtMTQuMjc2IDE0LjI3Ni0xNC4yNzYgMTQuMjc3IDYuNDA0IDE0LjI3NyAxNC4yNzZ6XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIm0xOTguMDgyIDI2MC4yNTNjMC0xNi4xNDMtMTMuMTM0LTI5LjI3Ni0yOS4yNzctMjkuMjc2cy0yOS4yNzYgMTMuMTMzLTI5LjI3NiAyOS4yNzZjMCAxNi4xNDQgMTMuMTM0IDI5LjI3NyAyOS4yNzYgMjkuMjc3IDE2LjE0MyAwIDI5LjI3Ny0xMy4xMzMgMjkuMjc3LTI5LjI3N3ptLTQzLjU1NCAwYzAtNy44NzIgNi40MDQtMTQuMjc2IDE0LjI3Ni0xNC4yNzZzMTQuMjc3IDYuNDA0IDE0LjI3NyAxNC4yNzYtNi40MDUgMTQuMjc3LTE0LjI3NyAxNC4yNzctMTQuMjc2LTYuNDA1LTE0LjI3Ni0xNC4yNzd6XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIm0yNjguNDE5IDI2MC4yNTNjMC0xNi4xNDMtMTMuMTM0LTI5LjI3Ni0yOS4yNzctMjkuMjc2cy0yOS4yNzYgMTMuMTMzLTI5LjI3NiAyOS4yNzZjMCAxNi4xNDQgMTMuMTM0IDI5LjI3NyAyOS4yNzYgMjkuMjc3IDE2LjE0MyAwIDI5LjI3Ny0xMy4xMzMgMjkuMjc3LTI5LjI3N3ptLTQzLjU1NCAwYzAtNy44NzIgNi40MDQtMTQuMjc2IDE0LjI3Ni0xNC4yNzZzMTQuMjc3IDYuNDA0IDE0LjI3NyAxNC4yNzYtNi40MDUgMTQuMjc3LTE0LjI3NyAxNC4yNzctMTQuMjc2LTYuNDA1LTE0LjI3Ni0xNC4yNzd6XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIm0zMzguNzU2IDI2MC4yNTNjMC0xNi4xNDMtMTMuMTM0LTI5LjI3Ni0yOS4yNzctMjkuMjc2cy0yOS4yNzYgMTMuMTMzLTI5LjI3NiAyOS4yNzZjMCAxNi4xNDQgMTMuMTM0IDI5LjI3NyAyOS4yNzYgMjkuMjc3IDE2LjE0MyAwIDI5LjI3Ny0xMy4xMzMgMjkuMjc3LTI5LjI3N3ptLTQzLjU1NCAwYzAtNy44NzIgNi40MDQtMTQuMjc2IDE0LjI3Ni0xNC4yNzZzMTQuMjc3IDYuNDA0IDE0LjI3NyAxNC4yNzYtNi40MDUgMTQuMjc3LTE0LjI3NyAxNC4yNzctMTQuMjc2LTYuNDA1LTE0LjI3Ni0xNC4yNzd6XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIm00MzguODc0IDMuODYzaC0yNzYuNzJjLTQwLjMyMSAwLTczLjEyNiAzMi44MDQtNzMuMTI2IDczLjEyNXYxMS44M2gtMTUuOTAzYy00MC4zMjEuMDAxLTczLjEyNSAzMi44MDUtNzMuMTI1IDczLjEyNnYxODUuOTM4YzAgNDAuMzIyIDMyLjgwNCA3My4xMjUgNzMuMTI1IDczLjEyNWg3OC4xOGM0LjE0MyAwIDcuNS0zLjM1OCA3LjUtNy41cy0zLjM1Ny03LjUtNy41LTcuNWgtNzguMThjLTMyLjA1IDAtNTguMTI1LTI2LjA3NS01OC4xMjUtNTguMTI1di0xODUuOTM4YzAtMzIuMDUgMjYuMDc1LTU4LjEyNSA1OC4xMjUtNTguMTI1aDI3Ni43MjFjMzIuMDUgMCA1OC4xMjUgMjYuMDc1IDU4LjEyNSA1OC4xMjV2MTg1LjkzOGMwIDMyLjA1LTI2LjA3NSA1OC4xMjUtNTguMTI1IDU4LjEyNS04LjU0MyAwLTE2LjUxOCAzLjc1OC0yMS44ODEgMTAuMzEyLTI5LjQxNyAzNS45NS02NC40NDcgNjEuMzU1LTg4LjY1MyA3Ni4zMzYtMi4yNTcgMS4zOTMtNC44NTUtLjk2LTMuNjY5LTMuMzgyIDkuNTEyLTE5LjQwOCAxNi44MDUtMzkuNzYxIDIxLjY3NS02MC40OTQgMi43MjgtMTEuNjE4LTYuMTI5LTIyLjc3Mi0xOC4xMDktMjIuNzcyaC01Mi45MDNjLTQuMTQzIDAtNy41IDMuMzU4LTcuNSA3LjVzMy4zNTcgNy41IDcuNSA3LjVoNTIuOTAzYzIuMzAxIDAgNC4wMjcgMi4xMjggMy41MDYgNC4zNDItNC42MTIgMTkuNjM4LTExLjUyMyAzOC45MjQtMjAuNTQxIDU3LjMyMy03Ljc3NiAxNS44NzIgMTAuMDI1IDMyLjAyNSAyNS4wMzIgMjIuNzM4IDI1LjE3OC0xNS41ODMgNjEuNjQyLTQyLjA0IDkyLjM2OC03OS41OTEgMi41MDMtMy4wNTggNi4yNDctNC44MTIgMTAuMjcyLTQuODEyIDQwLjMyMSAwIDczLjEyNS0zMi44MDQgNzMuMTI1LTczLjEyNXYtMTEuODNoMTUuOTAzYzQwLjMyMiAwIDczLjEyNi0zMi44MDQgNzMuMTI2LTczLjEyNXYtNzUuNDY5YzAtNC4xNDItMy4zNTctNy41LTcuNS03LjVzLTcuNSAzLjM1OC03LjUgNy41djc1LjQ2OWMwIDMyLjA1LTI2LjA3NSA1OC4xMjUtNTguMTI2IDU4LjEyNWgtMTUuOTAzdi0xNTkuMTA4YzAtNDAuMzIxLTMyLjgwNC03My4xMjUtNzMuMTI1LTczLjEyNWgtMjQ1LjgxOHYtMTEuODNjMC0zMi4wNSAyNi4wNzUtNTguMTI1IDU4LjEyNi01OC4xMjVoMjc2LjcyYzMyLjA1MSAwIDU4LjEyNiAyNi4wNzUgNTguMTI2IDU4LjEyNXY3NS40NjljMCA0LjE0MiAzLjM1NyA3LjUgNy41IDcuNXM3LjUtMy4zNTggNy41LTcuNXYtNzUuNDY5YzAtNDAuMzIyLTMyLjgwNC03My4xMjYtNzMuMTI2LTczLjEyNnpcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvSFN0YWNrPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0IGFsaWduPVwibGVmdFwiIGZvbnRTaXplPVwibWRcIiBub09mTGluZXM9ezF9IGNvbG9yPXt0ZXh0Q29sb3J9PlxyXG4gICAgICAgICAgICAgICAgICAgICAge2Rlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgPC9WU3RhY2s+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmRUcmFuc2l0aW9uPlxyXG4gICAgICAgICAgICAgIDwvTW90aW9uQm94PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICApfVxyXG4gICAgICA8L1NpbXBsZUdyaWQ+XHJcbiAgICAgIDxIU3RhY2sganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIiB3aWR0aD1cIjEwMCVcIj5cclxuICAgICAgICA8TmV4dExpbmsgaHJlZj0nL2Jsb2cnIHBhc3NIcmVmPlxyXG4gICAgICAgICAgPEhTdGFjayBzcGFjaW5nPXsyfSBhcz17TGlua30gY29sb3I9e2xpbmtDb2xvcn0+XHJcbiAgICAgICAgICAgIDxUZXh0IGZvbnRTaXplPSdzbSc+XHJcbiAgICAgICAgICAgICAgTW9yZSBBcnRpY2xlc1xyXG4gICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgIDxCb3ggaGVpZ2h0PVwiMS4ycmVtXCIgd2lkdGg9XCIxLjJyZW1cIj5cclxuICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjAgMjBcIlxyXG4gICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcclxuICAgICAgICAgICAgICAgICAgZD1cIk02LjY3MiAxLjkxMWExIDEgMCAxMC0xLjkzMi41MThsLjI1OS45NjZhMSAxIDAgMDAxLjkzMi0uNTE4bC0uMjYtLjk2NnpNMi40MjkgNC43NGExIDEgMCAxMC0uNTE3IDEuOTMybC45NjYuMjU5YTEgMSAwIDAwLjUxNy0xLjkzMmwtLjk2Ni0uMjZ6bTguODE0LS41NjlhMSAxIDAgMDAtMS40MTUtMS40MTRsLS43MDcuNzA3YTEgMSAwIDEwMS40MTUgMS40MTVsLjcwNy0uNzA4em0tNy4wNzEgNy4wNzJsLjcwNy0uNzA3QTEgMSAwIDAwMy40NjUgOS4xMmwtLjcwOC43MDdhMSAxIDAgMDAxLjQxNSAxLjQxNXptMy4yLTUuMTcxYTEgMSAwIDAwLTEuMyAxLjNsNCAxMGExIDEgMCAwMDEuODIzLjA3NWwxLjM4LTIuNzU5IDMuMDE4IDMuMDJhMSAxIDAgMDAxLjQxNC0xLjQxNWwtMy4wMTktMy4wMiAyLjc2LTEuMzc5YTEgMSAwIDAwLS4wNzYtMS44MjJsLTEwLTR6XCJcclxuICAgICAgICAgICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcclxuICAgICAgICAgICAgICAgIC8+PC9zdmc+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgPC9IU3RhY2s+XHJcbiAgICAgICAgPC9OZXh0TGluaz5cclxuICAgICAgPC9IU3RhY2s+XHJcbiAgICA8L1ZTdGFjaz5cclxuXHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvcHVsYXJBcnRpY2xlcztcclxuIiwiaW1wb3J0IHtcclxuICBGbGV4LFxyXG4gIEF2YXRhcixcclxuICBCb3gsXHJcbiAgVGV4dCxcclxuICBCYWRnZSxcclxuICBTdGFjayxcclxuICBMaW5rLFxyXG4gIFVub3JkZXJlZExpc3QsXHJcbiAgTGlzdEl0ZW0sXHJcbiAgdXNlQ29sb3JNb2RlVmFsdWUsXHJcbiAgVG9vbHRpcFxyXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCB7IE1vdGlvbkJveCwgTW90aW9uRmxleCB9IGZyb20gXCJjb21wb25lbnRzL3VpL21vdGlvblwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCJjb21wb25lbnRzL2xheW91dC9oZWFkZXJcIjtcclxuaW1wb3J0IE5leHRMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgdXNlTGlua0NvbG9yIH0gZnJvbSAnY29tcG9uZW50cy91aS90aGVtZSdcclxuaW1wb3J0IFBvcHVsYXJBcnRpY2xlcyBmcm9tIFwiLi9Qb3B1bGFyQXJ0aWNsZXNcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCB7IFByb3BzIH0gZnJvbSBcImludGVyZmFjZXMvaW50ZXJmYWNlXCI7XHJcbmltcG9ydCBTdGF0dXMgZnJvbSBcImRhdGEvU3RhdHVzXCI7XHJcblxyXG5cclxuY29uc3QgQU5JTUFUSU9OX0RVUkFUSU9OID0gMC41O1xyXG5jb25zdCBPUkFOR0UgPSBcIiNmZjk0MDBcIjtcclxuXHJcbmNvbnN0IEhvbWU6IFJlYWN0LkZDPFByb3BzPiA9IHByb3BzID0+IHtcclxuICBjb25zdCB7IHBvc3RzIH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgbGlua0NvbG9yID0gdXNlTGlua0NvbG9yKClcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGbGV4IGRpcmVjdGlvbj1cImNvbHVtblwiIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgIDxGbGV4IGRpcmVjdGlvbj17W1wiY29sdW1uXCIsIFwiY29sdW1uXCIsIFwicm93XCJdfT5cclxuICAgICAgICA8TW90aW9uQm94XHJcbiAgICAgICAgICBvcGFjaXR5PVwiMFwiXHJcbiAgICAgICAgICBpbml0aWFsPXt7XHJcbiAgICAgICAgICAgIHRyYW5zbGF0ZVg6IC0xNTAsXHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDBcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBhbmltYXRlPXt7XHJcbiAgICAgICAgICAgIHRyYW5zbGF0ZVg6IDAsXHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgICAgICAgICBkdXJhdGlvbjogQU5JTUFUSU9OX0RVUkFUSU9OXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBtPVwiYXV0b1wiXHJcbiAgICAgICAgICBtYj17WzE2LCAxNiwgXCJhdXRvXCJdfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICA8VG9vbHRpcCBoYXNBcnJvdyBsYWJlbD1cIm1lXCIgcGxhY2VtZW50PVwiYm90dG9tXCI+XHJcbiAgICAgICAgICA8QXZhdGFyXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9eyd0cmFuc3BhcmVudCd9XHJcbiAgICAgICAgICAgIHNpemU9e1wiMnhsXCJ9XHJcbiAgICAgICAgICAgIC8vIHNyYz17VXNlckljb259XHJcbiAgICAgICAgICAgIHNyYz17XCJodHRwczovL2F2YXRhcnMuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3UvNzc2MzcyODk/dj00XCJ9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgPC9Nb3Rpb25Cb3g+XHJcbiAgICAgICAgPE1vdGlvbkZsZXhcclxuICAgICAgICAgIG1sPXtbXCJhdXRvXCIsIFwiYXV0b1wiLCAxNl19XHJcbiAgICAgICAgICBtPXtbXCJhdXRvXCIsIFwiaW5pdGlhbFwiXX1cclxuICAgICAgICAgIHc9e1tcIjkwJVwiLCBcIjg1JVwiLCBcIjgwJVwiXX1cclxuICAgICAgICAgIG1heFc9XCI4MDBweFwiXHJcbiAgICAgICAgICBvcGFjaXR5PVwiMFwiXHJcbiAgICAgICAgICBqdXN0aWZ5PVwiY2VudGVyXCJcclxuICAgICAgICAgIGRpcmVjdGlvbj1cImNvbHVtblwiXHJcbiAgICAgICAgICBpbml0aWFsPXt7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDAsXHJcbiAgICAgICAgICAgIHRyYW5zbGF0ZVg6IDE1MFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIGFuaW1hdGU9e3tcclxuICAgICAgICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgICAgICAgdHJhbnNsYXRlWDogMCxcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICAgICAgICAgIGR1cmF0aW9uOiBBTklNQVRJT05fRFVSQVRJT05cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICA8SGVhZGVyIHVuZGVybGluZUNvbG9yPXtPUkFOR0V9IGVtb2ppPVwi8J+Ri1wiIG10PXswfT5cclxuICAgICAgICAgICAgSGV5IVxyXG4gICAgICAgICAgPC9IZWFkZXI+XHJcbiAgICAgICAgICA8Qm94IGFzPVwiaDJcIiBmb250U2l6ZT1cIjJ4bFwiIGZvbnRXZWlnaHQ9XCI0MDBcIiB0ZXh0QWxpZ249XCJsZWZ0XCI+XHJcbiAgICAgICAgICAgIE15IG5hbWUgaXN7XCIgXCJ9XHJcbiAgICAgICAgICAgIDxCb3ggYXM9XCJzdHJvbmdcIiBmb250V2VpZ2h0PVwiNjAwXCI+XHJcbiAgICAgICAgICAgICAgTWVydCBLYWRpclxyXG4gICAgICAgICAgICA8L0JveD57XCIgXCJ9XHJcbiAgICAgICAgICAgIGFuZCBJJmFwb3M7bSBhe1wiIFwifVxyXG4gICAgICAgICAgICA8Qm94IGFzPVwic3BhblwiIHdoaXRlU3BhY2U9XCJub3dyYXBcIj5cclxuICAgICAgICAgICAgTW9iaWxlIEFwcGxpY2F0aW9uIERldmVsb3Blci5cclxuICAgICAgICAgICAgPC9Cb3g+e1wiIFwifVxyXG4gICAgICAgICAgICA8Qm94IGFzPVwic3BhblwiIHdoaXRlU3BhY2U9XCJub3dyYXBcIj5cclxuICAgICAgICAgICAgIEEgc29mdHdhcmUgbG92ZXImbmJzcDtcclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIGZyb217XCIgXCJ9XHJcbiAgICAgICAgICAgIDxCb3ggYXM9XCJzcGFuXCIgd2hpdGVTcGFjZT1cIm5vd3JhcFwiPlxyXG4gICAgICAgICAgICAgIFR1cmtleSDwn4e58J+Ht1xyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgPEJveCBhcz1cImgyXCIgZm9udFNpemU9XCIyeGxcIiBmb250V2VpZ2h0PVwiNDAwXCIgbXQ9ezV9IHRleHRBbGlnbj1cImxlZnRcIj5cclxuICAgICAgICAgIEhleSwgV2VsY29tZSB0byBNZXJ0J3MgRGlnaXRhbCBFbnZpcm9ubWVudCBJJmFwb3M7bVxyXG4gICAgICAgICAgQSBwbGFjZSB0byBzaGFyZSB3aGF0IEkndmUgbGVhcm5lZCBhbmQgd2hhdCBJJ3ZlIGRvbmUu8J+YilxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9Nb3Rpb25GbGV4PlxyXG4gICAgICA8L0ZsZXg+XHJcbiAgICBcclxuXHJcblxyXG4gICAgICAgICAgICA8U3RhdHVzIC8+XHJcblxyXG4gICAgICA8TW90aW9uQm94XHJcbiAgICAgICAgdz1cIjEwMCVcIlxyXG4gICAgICAgIG9wYWNpdHk9XCIwXCJcclxuICAgICAgICBpbml0aWFsPXt7XHJcbiAgICAgICAgICB0cmFuc2xhdGVZOiA4MFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgYW5pbWF0ZT17e1xyXG4gICAgICAgICAgdHJhbnNsYXRlWTogMCxcclxuICAgICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgICAgICAgIGRlbGF5OiBBTklNQVRJT05fRFVSQVRJT04gLSAwLjEsXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiBBTklNQVRJT05fRFVSQVRJT05cclxuICAgICAgICAgIH1cclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBtdD17MTB9PlxyXG4gICAgICAgICAgPFN0YWNrXHJcbiAgICAgICAgICAgIG1iPXsxMH1cclxuICAgICAgICAgICAgbXg9e1swLCAwLCAxMF19XHJcbiAgICAgICAgICAgIHBhZGRpbmc9ezR9XHJcbiAgICAgICAgICAgIGFsaWduPVwic3RhcnRcIlxyXG4gICAgICAgICAgICBib3JkZXJMZWZ0PVwiNHB4IHNvbGlkXCJcclxuICAgICAgICAgICAgYm9yZGVyQ29sb3I9e1wiIzUzYzhjNFwifVxyXG4gICAgICAgICAgICBjb2xvcj17XCJ3aGF0c2FwcFwifVxyXG4gICAgICAgICAgICBfaG92ZXI9e3sgc2hhZG93OiBcImxnXCIgfX1cclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yPXt1c2VDb2xvck1vZGVWYWx1ZShcImdyYXkuMTAwXCIsIFwiIzFlMjUzM1wiKX1cclxuICAgICAgICAgICAgcm91bmRlZD1cInNtXCJcclxuICAgICAgICAgICAgZm9udFNpemU9XCJtZFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxUZXh0IHRleHRBbGlnbj1cImNlbnRlclwiIGNvbG9yPVwiIzUzYzhjNFwiIGZvbnRXZWlnaHQ9XCJib2xkXCI+XHJcbiAgICAgICAgICAgIEhpZ2hsaXN0c1xyXG4gICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgIDxVbm9yZGVyZWRMaXN0IHRleHRBbGlnbj1cImxlZnRcIiBwYWRkaW5nTGVmdD17NX0gbT17MH0+XHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgPE5leHRMaW5rIGhyZWY9eycvYmxvZyd9IHBhc3NIcmVmPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBjb2xvcj17bGlua0NvbG9yfT5cclxuICAgICAgICAgICAgICAgICAgICBCbG9nIHBhZ2VcclxuICAgICAgICAgICAgICAgICAgICA8QmFkZ2UgbWw9XCIxXCIgY29sb3JTY2hlbWU9XCJncmVlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgTmV3XHJcbiAgICAgICAgICAgICAgICAgICAgPC9CYWRnZT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9OZXh0TGluaz5cclxuICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgIDxOZXh0TGluayBocmVmPXsnL29wZW4tc291cmNlJ30gcGFzc0hyZWY+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGNvbG9yPXtsaW5rQ29sb3J9PlxyXG4gICAgICAgICAgICAgICAgICBPcGVuIFNvdXJjZVxyXG4gICAgICAgICAgICAgICAgICAgIDxCYWRnZSBtbD1cIjFcIiBjb2xvclNjaGVtZT1cImJsdWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIE5ld1xyXG4gICAgICAgICAgICAgICAgICAgIDwvQmFkZ2U+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvTmV4dExpbms+XHJcbiAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICA8TGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TmV4dExpbmsgaHJlZj17Jy9wcm9qZWN0cyd9IHBhc3NIcmVmPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBjb2xvcj17bGlua0NvbG9yfT5cclxuICAgICAgICAgICAgICAgICAgUHJvamVjdHMgcGFnZVxyXG4gICAgICAgICAgICAgICAgICA8QmFkZ2UgbWw9XCIxXCIgY29sb3JTY2hlbWU9XCJyZWRcIj5cclxuICAgICAgICAgICAgICAgICAgTmV3XHJcbiAgICAgICAgICAgICAgICAgICAgPC9CYWRnZT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9OZXh0TGluaz5cclxuICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICA8L1Vub3JkZXJlZExpc3Q+XHJcbiAgICAgICAgICA8L1N0YWNrPlxyXG4gICAgICAgICAgPFBvcHVsYXJBcnRpY2xlcyBwb3N0cz17cG9zdHN9IC8+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvTW90aW9uQm94PlxyXG4gICAgPC9GbGV4PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iLCJpbXBvcnQgeyBCb3gsIEJveFByb3BzIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XHJcbmltcG9ydCB7IFByb3BzV2l0aENoaWxkcmVuIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgVW5kZXJsaW5lZFRleHQgZnJvbSAnY29tcG9uZW50cy91aS91bmRlcmxpbmVkLXRleHQnO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIGV4dGVuZHMgQm94UHJvcHMge1xyXG4gIHVuZGVybGluZUNvbG9yPzogc3RyaW5nO1xyXG4gIGVtb2ppPzogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBIZWFkZXIgPSAoeyBjaGlsZHJlbiwgdW5kZXJsaW5lQ29sb3IsIGVtb2ppLCAuLi5wcm9wcyB9OiBQcm9wc1dpdGhDaGlsZHJlbjxQcm9wcz4pID0+IChcclxuICA8Qm94IGFzPVwiaDFcIiBtdD17MTB9IG1iPXs2fSBmb250U2l6ZT1cIjN4bFwiIGxpbmVIZWlnaHQ9XCJzaG9ydGVyXCIgZm9udFdlaWdodD1cImJvbGRcIiB7Li4ucHJvcHN9IHRleHRBbGlnbj1cImxlZnRcIj5cclxuICAgIDxVbmRlcmxpbmVkVGV4dCBjb2xvcj17dW5kZXJsaW5lQ29sb3J9PntjaGlsZHJlbn08L1VuZGVybGluZWRUZXh0PlxyXG4gICAge2Vtb2ppID8gJyAnICsgZW1vamkgOiAnJ31cclxuICA8L0JveD5cclxuKTtcclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG4iLCJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcblxyXG50eXBlIFByb3BzID0ge1xyXG4gICAgdGl0bGU6IHN0cmluZztcclxuICAgIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xyXG4gICAga2V5d29yZHM/OiBzdHJpbmc7XHJcbiAgICBpbWFnZT86IHN0cmluZztcclxuICB9O1xyXG5cclxuY29uc3QgTWV0YSA9ICh7IHRpdGxlLCBrZXl3b3JkcywgZGVzY3JpcHRpb24sIGltYWdlIH0gOiBQcm9wcyk6IEpTWC5FbGVtZW50ID0+IHtcclxuICB0aXRsZSA9IHRpdGxlLmluY2x1ZGVzKCdNZXJ0JykgPyB0aXRsZSA6IHRpdGxlLmNvbmNhdCgnIHwgTWVydCBLYWRpcicpXHJcbiAgcmV0dXJuIChcclxuICAgIDxIZWFkPlxyXG4gICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxyXG4gICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxyXG4gICAgICA8bWV0YSBuYW1lPVwia2V5d29yZHNcIiBjb250ZW50PXtrZXl3b3Jkc30gLz5cclxuICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17ZGVzY3JpcHRpb259IC8+XHJcbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PXt0aXRsZX0gLz5cclxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9e2ltYWdlID8gaW1hZ2UgOiBcIi9sb2dvNTEyLnBuZ1wifSAvPlxyXG4gICAgICA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XHJcbiAgICA8L0hlYWQ+XHJcbiAgKTtcclxufTtcclxuXHJcbk1ldGEuZGVmYXVsdFByb3BzID0ge1xyXG4gIHRpdGxlOiBcIk1lcnQgS2FkaXIgLSBNb2JpbGUgRGV2ZWxvcGVyXCIsXHJcbiAga2V5d29yZHM6IFwiTW9iaWwgQXBwbGljYXRpb24gRGV2ZWxvcGVyXCIsXHJcbiAgZGVzY3JpcHRpb246IFwiU29mdHdhcmUgc3R1ZGVudCBtb2JpbGUgbG92ZXIuXCJcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1ldGE7XHJcbiIsImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCwgUmVhY3ROb2RlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XHJcbmltcG9ydCBNZXRhIGZyb20gXCIuL21ldGFcIjtcclxuXHJcbnR5cGUgUHJvcHMgPSB7XHJcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xyXG4gIGtleXdvcmRzPzogc3RyaW5nO1xyXG4gIGltYWdlPzogc3RyaW5nO1xyXG59O1xyXG5cclxuY29uc3QgdmFyaWFudHMgPSB7XHJcbiAgaGlkZGVuOiB7IG9wYWNpdHk6IDAsIHg6IC0yMDAsIHk6IDAgfSxcclxuICBlbnRlcjogeyBvcGFjaXR5OiAxLCB4OiAwLCB5OiAwIH0sXHJcbiAgZXhpdDogeyBvcGFjaXR5OiAwLCB4OiAwLCB5OiAtMTAwIH1cclxufTtcclxuXHJcbmNvbnN0IFBhZ2VMYXlvdXQgPSAoe1xyXG4gIGNoaWxkcmVuLFxyXG4gIHRpdGxlLFxyXG4gIGRlc2NyaXB0aW9uLFxyXG4gIGtleXdvcmRzLFxyXG4gIGltYWdlXHJcbn06IFByb3BzKTogSlNYLkVsZW1lbnQgPT4gKFxyXG4gIDxGcmFnbWVudD5cclxuICAgIDxNZXRhXHJcbiAgICAgIHRpdGxlPXt0aXRsZX1cclxuICAgICAgZGVzY3JpcHRpb249e2Rlc2NyaXB0aW9ufVxyXG4gICAgICBrZXl3b3Jkcz17a2V5d29yZHN9XHJcbiAgICAgIGltYWdlPXtpbWFnZX1cclxuICAgIC8+XHJcbiAgICA8bW90aW9uLm1haW5cclxuICAgICAgaW5pdGlhbD1cImhpZGRlblwiXHJcbiAgICAgIGFuaW1hdGU9XCJlbnRlclwiXHJcbiAgICAgIGV4aXQ9XCJleGl0XCJcclxuICAgICAgdmFyaWFudHM9e3ZhcmlhbnRzfVxyXG4gICAgICB0cmFuc2l0aW9uPXt7IHR5cGU6IFwibGluZWFyXCIgfX1cclxuICAgID5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9tb3Rpb24ubWFpbj5cclxuICA8L0ZyYWdtZW50PlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnZUxheW91dDtcclxuIiwiaW1wb3J0IHtcclxuICBCb3gsXHJcbiAgRmxleCxcclxuICBJbWFnZSxcclxuICBmb3J3YXJkUmVmLFxyXG4gIFRleHQsXHJcbiAgTGlzdFxyXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCB7IG1vdGlvbiwgaXNWYWxpZE1vdGlvblByb3AgfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1vdGlvbkJveCA9IG1vdGlvbihcclxuICBmb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7XHJcbiAgICBjb25zdCBjaGFrcmFQcm9wcyA9IE9iamVjdC5mcm9tRW50cmllcyhcclxuICAgICAgLy8gZG8gbm90IHBhc3MgZnJhbWVyIHByb3BzIHRvIERPTSBlbGVtZW50XHJcbiAgICAgIE9iamVjdC5lbnRyaWVzKHByb3BzKS5maWx0ZXIoKFtrZXldKSA9PiAhaXNWYWxpZE1vdGlvblByb3Aoa2V5KSlcclxuICAgICk7XHJcbiAgICByZXR1cm4gPEJveCByZWY9e3JlZn0gey4uLmNoYWtyYVByb3BzfSAvPjtcclxuICB9KVxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1vdGlvbkZsZXggPSBtb3Rpb24oXHJcbiAgZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4ge1xyXG4gICAgY29uc3QgY2hha3JhUHJvcHMgPSBPYmplY3QuZnJvbUVudHJpZXMoXHJcbiAgICAgIC8vIGRvIG5vdCBwYXNzIGZyYW1lciBwcm9wcyB0byBET00gZWxlbWVudFxyXG4gICAgICBPYmplY3QuZW50cmllcyhwcm9wcykuZmlsdGVyKChba2V5XSkgPT4gIWlzVmFsaWRNb3Rpb25Qcm9wKGtleSkpXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIDxGbGV4IHJlZj17cmVmfSB7Li4uY2hha3JhUHJvcHN9IC8+O1xyXG4gIH0pXHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgTW90aW9uVGV4dCA9IG1vdGlvbihcclxuICBmb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7XHJcbiAgICBjb25zdCBjaGFrcmFQcm9wcyA9IE9iamVjdC5mcm9tRW50cmllcyhcclxuICAgICAgLy8gZG8gbm90IHBhc3MgZnJhbWVyIHByb3BzIHRvIERPTSBlbGVtZW50XHJcbiAgICAgIE9iamVjdC5lbnRyaWVzKHByb3BzKS5maWx0ZXIoKFtrZXldKSA9PiAhaXNWYWxpZE1vdGlvblByb3Aoa2V5KSlcclxuICAgICk7XHJcbiAgICByZXR1cm4gPFRleHQgcmVmPXtyZWZ9IHsuLi5jaGFrcmFQcm9wc30gLz47XHJcbiAgfSlcclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBNb3Rpb25MaXN0ID0gbW90aW9uKFxyXG4gIGZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHtcclxuICAgIGNvbnN0IGNoYWtyYVByb3BzID0gT2JqZWN0LmZyb21FbnRyaWVzKFxyXG4gICAgICAvLyBkbyBub3QgcGFzcyBmcmFtZXIgcHJvcHMgdG8gRE9NIGVsZW1lbnRcclxuICAgICAgT2JqZWN0LmVudHJpZXMocHJvcHMpLmZpbHRlcigoW2tleV0pID0+ICFpc1ZhbGlkTW90aW9uUHJvcChrZXkpKVxyXG4gICAgKTtcclxuICAgIHJldHVybiA8TGlzdCByZWY9e3JlZn0gey4uLmNoYWtyYVByb3BzfSAvPjtcclxuICB9KVxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1vdGlvbkltYWdlID0gbW90aW9uKFxyXG4gIGZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHtcclxuICAgIGNvbnN0IGNoYWtyYVByb3BzID0gT2JqZWN0LmZyb21FbnRyaWVzKFxyXG4gICAgICBPYmplY3QuZW50cmllcyhwcm9wcykuZmlsdGVyKChba2V5XSkgPT4gIWlzVmFsaWRNb3Rpb25Qcm9wKGtleSkpXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgIHJlZj17cmVmfVxyXG4gICAgICAgICAgZmFsbGJhY2tTcmM9eycvYXNzZXRzL2ltYWdlcy9wbGFjZWhvbGRlci5wbmcnfVxyXG4gICAgICAgICAgey4uLmNoYWtyYVByb3BzfVxyXG4gICAgICAgIC8+XHJcbiAgICApO1xyXG4gIH0pXHJcbik7XHJcbiIsImltcG9ydCB7IFNsaWRlRmFkZSB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCB7IE1vdGlvbkJveCB9IGZyb20gXCIuL21vdGlvblwiO1xyXG5cclxuY29uc3Qgc3RhZ2dlclZhcmlhbnRzID0ge1xyXG4gIGluaXRpYWw6IHtcclxuICAgIG9wYWNpdHk6IDAsXHJcbiAgICB0cmFuc2xhdGVZOiAtMjBcclxuICB9LFxyXG4gIGVudGVyOiB7XHJcbiAgICB0cmFuc2l0aW9uOiB7IHN0YWdnZXJDaGlsZHJlbjogMC4xNSwgZGVsYXlDaGlsZHJlbjogMC40IH1cclxuICB9LFxyXG4gIGV4aXQ6IHtcclxuICAgIHRyYW5zaXRpb246IHsgc3RhZ2dlckNoaWxkcmVuOiAwLjA1LCBzdGFnZ2VyRGlyZWN0aW9uOiAtMSB9XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgdmFyaWFudHMgPSB7XHJcbiAgaW5pdGlhbDoge1xyXG4gICAgb3BhY2l0eTogMCxcclxuICAgIHRyYW5zbGF0ZVk6IC0yMFxyXG4gIH0sXHJcbiAgZW50ZXI6IHtcclxuICAgIHk6IDAsXHJcbiAgICBvcGFjaXR5OiAxLFxyXG4gICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICB5OiB7IHN0aWZmbmVzczogMTAwMCwgdmVsb2NpdHk6IC0xMDAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgZXhpdDoge1xyXG4gICAgeTogNTAsXHJcbiAgICBvcGFjaXR5OiAwLFxyXG4gICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICB5OiB7IHN0aWZmbmVzczogMTAwMCB9XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGVhc2luZyA9IFswLjYsIC0wLjA1LCAwLjAxLCAwLjk5XVxyXG5cclxuZXhwb3J0IGNvbnN0IHN0YWdnZXIgPSB7XHJcbiAgYW5pbWF0ZToge1xyXG4gICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICBzdGFnZ2VyQ2hpbGRyZW46IDAuMSxcclxuICAgIH0sXHJcbiAgfSxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGZhZGVJblVwID0ge1xyXG4gIGluaXRpYWw6IHtcclxuICAgIHk6IDYwLFxyXG4gICAgb3BhY2l0eTogMCxcclxuICAgIHRyYW5zaXRpb246IHsgZHVyYXRpb246IDAuNiwgZWFzZTogZWFzaW5nIH0sXHJcbiAgfSxcclxuICBhbmltYXRlOiB7XHJcbiAgICB5OiAwLFxyXG4gICAgb3BhY2l0eTogMSxcclxuICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgZHVyYXRpb246IDAuNixcclxuICAgICAgZWFzZTogZWFzaW5nLFxyXG4gICAgfSxcclxuICB9LFxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGNvbnRhaW5lciA9IHtcclxuICBoaWRkZW46IHsgb3BhY2l0eTogMSwgc2NhbGU6IDAgfSxcclxuICB2aXNpYmxlOiB7XHJcbiAgICBvcGFjaXR5OiAxLFxyXG4gICAgc2NhbGU6IDEsXHJcbiAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgIGRlbGF5Q2hpbGRyZW46IDAuMyxcclxuICAgICAgc3RhZ2dlckNoaWxkcmVuOiAwLjJcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgaXRlbSA9IHtcclxuICBoaWRkZW46IHsgeTogMjAsIG9wYWNpdHk6IDAgfSxcclxuICB2aXNpYmxlOiB7XHJcbiAgICB5OiAwLFxyXG4gICAgb3BhY2l0eTogMVxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBQYWdlU2xpZGVGYWRlID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIHJldHVybiA8U2xpZGVGYWRlIGluPntjaGlsZHJlbn08L1NsaWRlRmFkZT47XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgU3RhZ2dlckNoaWxkcmVuID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8TW90aW9uQm94XHJcbiAgICAgIGFuaW1hdGU9e3tcclxuICAgICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICAgIHRyYW5zbGF0ZVk6IDBcclxuICAgICAgfX1cclxuICAgICAgdmFyaWFudHM9e3N0YWdnZXJWYXJpYW50c31cclxuICAgID5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9Nb3Rpb25Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBDYXJkVHJhbnNpdGlvbiA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICByZXR1cm4gPE1vdGlvbkJveCB2YXJpYW50cz17dmFyaWFudHN9PntjaGlsZHJlbn08L01vdGlvbkJveD47XHJcbn07XHJcbiIsImltcG9ydCB7IFRoZW1lT3ZlcnJpZGUsIHVzZUNvbG9yTW9kZVZhbHVlLCB0aGVtZSBhcyBkZWZhdWx0VGhlbWUgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xyXG5pbXBvcnQgeyB0cmFuc3BhcmVudGl6ZSB9IGZyb20gJ0BjaGFrcmEtdWkvdGhlbWUtdG9vbHMnXHJcblxyXG5leHBvcnQgY29uc3QgbGlua0NvbG9ycyA9IHtcclxuICBsaWdodDogJ2FjY2VudC41MDAnLFxyXG4gIGRhcms6ICdhY2NlbnQuNDAwJyxcclxuICB2aXNpdGVkTGlnaHQ6ICdhY2NlbnQuMzAwJyxcclxuICB2aXNpdGVkRGFyazogJ2FjY2VudC42MDAnXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VMaW5rQ29sb3IoKSB7XHJcbiAgcmV0dXJuIHVzZUNvbG9yTW9kZVZhbHVlKGxpbmtDb2xvcnMubGlnaHQsIGxpbmtDb2xvcnMuZGFyaylcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZVZpc2l0ZWRMaW5rQ29sb3IoKSB7XHJcbiAgcmV0dXJuIHVzZUNvbG9yTW9kZVZhbHVlKGxpbmtDb2xvcnMudmlzaXRlZExpZ2h0LCBsaW5rQ29sb3JzLnZpc2l0ZWREYXJrKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGFnQmFja2dyb3VuZERhcmsoXHJcbiAgYWNjZW50S2V5OiBDb2xvcktleXMsXHJcbiAgdGhlbWU6IFRoZW1lT3ZlcnJpZGVcclxuKSB7XHJcbiAgcmV0dXJuIGFjY2VudEtleSAmJiB0cmFuc3BhcmVudGl6ZSgodGhlbWUuY29sb3JzIGFzIGFueSlbYWNjZW50S2V5XVsyMDBdLCAwLjEpKHRoZW1lKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY29sb3JzID0ge1xyXG4gIC4uLmRlZmF1bHRUaGVtZS5jb2xvcnMsXHJcbiAgZ3JheToge1xyXG4gICAgLi4uZGVmYXVsdFRoZW1lLmNvbG9ycy5ncmF5LFxyXG4gICAgMTAwMDogJyMxMjE3MjEnXHJcbiAgfSxcclxuICBkZWZhdWx0QWNjZW50OiB7XHJcbiAgICA1MDogJyNlM2YyZmMnLFxyXG4gICAgMTAwOiAnI2RkZjJmZicsXHJcbiAgICAyMDA6ICcjYWJkMmZjJyxcclxuICAgIDMwMDogJyM1ZGFhZmMnLFxyXG4gICAgNDAwOiAnIzFhODVmZicsXHJcbiAgICA1MDA6ICcjMDA2YmU2JyxcclxuICAgIDYwMDogJyMwMDUzYjQnLFxyXG4gICAgNzAwOiAnIzAwM2I4MicsXHJcbiAgICA4MDA6ICcjMDAyNDUxJyxcclxuICAgIDkwMDogJyMwMDBkMjEnXHJcbiAgfSxcclxuICBhY2NlbnQ6IHtcclxuICAgIC8vIFNlZSBzcmMvY29tcG9uZW50cy9BY2NlbnQudHN4IGZvciBDU1MgdmFyaWFibGUgZGVmaW5pdGlvblxyXG4gICAgNTA6ICd2YXIoLS1jb2xvcnMtYWNjZW50LTUwKScsXHJcbiAgICAxMDA6ICd2YXIoLS1jb2xvcnMtYWNjZW50LTEwMCknLFxyXG4gICAgMjAwOiAndmFyKC0tY29sb3JzLWFjY2VudC0yMDApJyxcclxuICAgIDMwMDogJ3ZhcigtLWNvbG9ycy1hY2NlbnQtMzAwKScsXHJcbiAgICA0MDA6ICd2YXIoLS1jb2xvcnMtYWNjZW50LTQwMCknLFxyXG4gICAgNTAwOiAndmFyKC0tY29sb3JzLWFjY2VudC01MDApJyxcclxuICAgIDYwMDogJ3ZhcigtLWNvbG9ycy1hY2NlbnQtNjAwKScsXHJcbiAgICA3MDA6ICd2YXIoLS1jb2xvcnMtYWNjZW50LTcwMCknLFxyXG4gICAgODAwOiAndmFyKC0tY29sb3JzLWFjY2VudC04MDApJyxcclxuICAgIDkwMDogJ3ZhcigtLWNvbG9ycy1hY2NlbnQtOTAwKSdcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIENvbG9yS2V5cyA9IGtleW9mIHR5cGVvZiBjb2xvcnNcclxuXHJcbmV4cG9ydCBjb25zdCBhY2NlbnRLZXlzOiBDb2xvcktleXNbXSA9IFtcclxuICAnZGVmYXVsdEFjY2VudCcsXHJcbiAgJ2dyZWVuJyxcclxuICAnY3lhbicsXHJcbiAgJ29yYW5nZScsXHJcbiAgJ2JsdWUnLFxyXG4gICdwaW5rJyxcclxuICAndGVhbCcsXHJcbiAgJ3B1cnBsZScsXHJcbiAgJ3JlZCdcclxuXVxyXG4iLCJpbXBvcnQgeyBleHRlbmRUaGVtZSwgVGhlbWVPdmVycmlkZSB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXHJcbmltcG9ydCB7IGNvbG9ycyB9IGZyb20gJy4vZm91bmRhdGlvbnMvY29sb3JzJ1xyXG5pbXBvcnQgeyBtZXJnZVdpdGggfSBmcm9tICdAY2hha3JhLXVpL3V0aWxzJ1xyXG5pbXBvcnQgeyBtb2RlIH0gZnJvbSBcIkBjaGFrcmEtdWkvdGhlbWUtdG9vbHNcIlxyXG4vLyBSZS1leHBvcnRzXHJcbmV4cG9ydCB7IHVzZUxpbmtDb2xvciwgYWNjZW50S2V5cyB9IGZyb20gJy4vZm91bmRhdGlvbnMvY29sb3JzJ1xyXG5leHBvcnQgdHlwZSB7IENvbG9yS2V5cyB9IGZyb20gJy4vZm91bmRhdGlvbnMvY29sb3JzJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VUaGVtZShvdmVycmlkZXM6IFRoZW1lT3ZlcnJpZGUgPSB7fSkge1xyXG4gIGNvbnN0IHRoZW1lID0gZXh0ZW5kVGhlbWUoe1xyXG4gICAgLi4uZXh0ZW5kZWRUaGVtZSxcclxuICAgIGNvbG9yc1xyXG4gIH0pXHJcbiAgcmV0dXJuIG1lcmdlV2l0aCh0aGVtZSwgb3ZlcnJpZGVzKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZXh0ZW5kZWRUaGVtZSA9IGV4dGVuZFRoZW1lKHtcclxuICBmb250czoge1xyXG4gICAgYm9keTogYEludGVyLC1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LFwiU2Vnb2UgVUlcIixIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZixcIkFwcGxlIENvbG9yIEVtb2ppXCIsXCJTZWdvZSBVSSBFbW9qaVwiLFwiU2Vnb2UgVUkgU3ltYm9sXCJgXHJcbiAgfSxcclxuICBzdHlsZXM6IHtcclxuICAgIGdsb2JhbDogKHByb3BzKSA9PiAoe1xyXG4gICAgICBib2R5OiB7XHJcbiAgICAgICAgY29sb3I6IG1vZGUoXCJncmF5LjcwMFwiLCBcIndoaXRlQWxwaGEuOTAwXCIpKHByb3BzKSxcclxuICAgICAgICBiZzogbW9kZShcImdyYXkuNTBcIiwgXCJncmF5LjkwMFwiKShwcm9wcyksXHJcbiAgICAgICAgZm9udFNpemU6IFwiMS4yZW1cIixcclxuICAgICAgICBcIi5kZWxldGVkXCI6IHtcclxuICAgICAgICAgIGNvbG9yOiBcIiNmZjgzODMgIWltcG9ydGFudFwiLFxyXG4gICAgICAgICAgZm9udFN0eWxlOiBcIm5vcm1hbCAhaW1wb3J0YW50XCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIi5pbnNlcnRlZFwiOiB7XHJcbiAgICAgICAgICBjb2xvcjogXCIjYjVmNGE1ICFpbXBvcnRhbnRcIixcclxuICAgICAgICAgIGZvbnRTdHlsZTogXCJub3JtYWwgIWltcG9ydGFudFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIGE6IHtcclxuICAgICAgICBjb2xvcjogbW9kZShcImJsdWUuNTAwXCIsIFwiYmx1ZS4yMDBcIikocHJvcHMpLFxyXG4gICAgICAgIHRyYW5zaXRpb246IFwiY29sb3IgMC4xNXNcIixcclxuICAgICAgICB0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb246IFwiZWFzZS1vdXRcIixcclxuICAgICAgICBmb250V2VpZ2h0OiBcIjUwMFwiLFxyXG4gICAgICAgIF9ob3Zlcjoge1xyXG4gICAgICAgICAgY29sb3I6IG1vZGUoXCJibHVlLjYwMFwiLCBcImJsdWUuMzAwXCIpKHByb3BzKSxcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICB9KSxcclxuICB9LFxyXG4gIGNvbXBvbmVudHM6IHtcclxuICAgIFBvcG92ZXI6IHtcclxuICAgICAgcGFydHM6IFsncG9wcGVyJ10sXHJcbiAgICAgIGJhc2VTdHlsZTogcHJvcHMgPT4gKHtcclxuICAgICAgICBwb3BwZXI6IHtcclxuICAgICAgICAgIHpJbmRleDogMTAsXHJcbiAgICAgICAgICBtYXhXOiAneHMnLFxyXG4gICAgICAgICAgLy8gbWF4VzogcHJvcHMud2lkdGggPyBwcm9wcy53aWR0aCA6ICd4cycsXHJcbiAgICAgICAgICB3OiBwcm9wcy53aWR0aCxcclxuICAgICAgICB9LFxyXG4gICAgICB9KSxcclxuICAgIH0sXHJcbiAgICBCdXR0b246IHtcclxuICAgICAgYmFzZVN0eWxlOiB7XHJcbiAgICAgICAgZm9udFdlaWdodDogXCI1MDBcIixcclxuICAgICAgICByb3VuZGVkOiBcInhsXCJcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBUYWc6IHtcclxuICAgICAgYmFzZVN0eWxlOiB7XHJcbiAgICAgICAgcm91bmRlZDogXCJsZ1wiLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHRleHRhcmVhOiB7XHJcbiAgICAgIGJhc2VTdHlsZToge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IFwiZ3JlZW4uMzAwXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgTGluazoge1xyXG4gICAgICBiYXNlU3R5bGU6IHtcclxuICAgICAgICBmb250V2VpZ2h0OiBcImluaGVyaXRcIixcclxuICAgICAgICBfaG92ZXI6IHtcclxuICAgICAgICAgIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIF9mb2N1czoge1xyXG4gICAgICAgICAgYm94U2hhZG93OiAnbm9uZSdcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHZhcmlhbnRzOiB7XHJcbiAgICAgICAgdGV4dDoge1xyXG4gICAgICAgICAgY29sb3I6IFwiYmx1ZS40MDBcIixcclxuICAgICAgICAgIHRyYW5zaXRpb246IFwiY29sb3IgMC4xNXNcIixcclxuICAgICAgICAgIHRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbjogXCJlYXNlLW91dFwiLFxyXG4gICAgICAgICAgZm9udFdlaWdodDogXCI1MDBcIixcclxuICAgICAgICAgIF9ob3Zlcjoge1xyXG4gICAgICAgICAgICBjb2xvcjogXCJibHVlLjMwMFwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdyYWRpZW50OiB7XHJcbiAgICAgICAgICBiZ0dyYWRpZW50OiBcImxpbmVhcih0by1iciwgYmx1ZS40MDAsYmx1ZS4zMDApXCIsXHJcbiAgICAgICAgICBiZ0NsaXA6IFwidGV4dFwiLFxyXG4gICAgICAgICAgZm9udFdlaWdodDogXCI1MDBcIixcclxuICAgICAgICAgIF9ob3Zlcjoge1xyXG4gICAgICAgICAgICBiZ0dyYWRpZW50OiBcImxpbmVhcih0by1iciwgYmx1ZS41MDAsYmx1ZS4zMDApXCIsXHJcbiAgICAgICAgICAgIGJnQ2xpcDogXCJ0ZXh0XCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgfSxcclxuICBtZHg6IHtcclxuICAgIGgxOiB7XHJcbiAgICAgIG10OiBcIjJyZW1cIixcclxuICAgICAgbWI6IFwiLjI1cmVtXCIsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IDEuMixcclxuICAgICAgZm9udFdlaWdodDogXCJib2xkXCIsXHJcbiAgICAgIGZvbnRTaXplOiBcIjEuODc1cmVtXCIsXHJcbiAgICAgIGxldHRlclNwYWNpbmc6IFwiLS4wMjVlbVwiLFxyXG4gICAgfSxcclxuICAgIGgyOiB7XHJcbiAgICAgIG10OiBcIjRyZW1cIixcclxuICAgICAgbWI6IFwiMC41cmVtXCIsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IDEuMyxcclxuICAgICAgZm9udFdlaWdodDogXCJzZW1pYm9sZFwiLFxyXG4gICAgICBmb250U2l6ZTogXCIxLjVyZW1cIixcclxuICAgICAgXCImICsgaDNcIjoge1xyXG4gICAgICAgIG10OiBcIjEuNXJlbVwiLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIGgzOiB7XHJcbiAgICAgIG10OiBcIjNyZW1cIixcclxuICAgICAgLy8gbWI6IFwiMC41cmVtXCIsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IDEuMjUsXHJcbiAgICAgIGZvbnRXZWlnaHQ6IFwic2VtaWJvbGRcIixcclxuICAgICAgZm9udFNpemU6IFwiMS4yNXJlbVwiLFxyXG4gICAgfSxcclxuICAgIGg0OiB7XHJcbiAgICAgIG10OiBcIjNyZW1cIixcclxuICAgICAgbGluZUhlaWdodDogMS4zNzUsXHJcbiAgICAgIGZvbnRXZWlnaHQ6IFwic2VtaWJvbGRcIixcclxuICAgICAgZm9udFNpemU6IFwiMS4xMjVyZW1cIixcclxuICAgIH0sXHJcbiAgICBwOiB7XHJcbiAgICAgIG10OiBcIjEuMjVyZW1cIixcclxuICAgICAgbGluZUhlaWdodDogMS43LFxyXG4gICAgICBcImJsb2NrcXVvdGUgJlwiOiB7XHJcbiAgICAgICAgbXQ6IDAsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgaHI6IHtcclxuICAgICAgbXk6IFwiNHJlbVwiLFxyXG4gICAgfSxcclxuICAgIGJsb2NrcXVvdGU6IHtcclxuICAgICAgYmc6IFwib3JhbmdlLjEwMFwiLFxyXG4gICAgICBib3JkZXJXaWR0aDogXCIxcHhcIixcclxuICAgICAgYm9yZGVyQ29sb3I6IFwib3JhbmdlLjIwMFwiLFxyXG4gICAgICByb3VuZGVkOiBcImxnXCIsXHJcbiAgICAgIHB4OiBcIjEuMjVyZW1cIixcclxuICAgICAgcHk6IFwiMXJlbVwiLFxyXG4gICAgICBteTogXCIxLjVyZW1cIixcclxuICAgIH0sXHJcbiAgICB1bDoge1xyXG4gICAgICBtdDogXCIxLjVyZW1cIixcclxuICAgICAgbWw6IFwiMS4yNXJlbVwiLFxyXG4gICAgICBcImJsb2NrcXVvdGUgJlwiOiB7IG10OiAwIH0sXHJcbiAgICAgIFwiJiA+ICogKyAqXCI6IHtcclxuICAgICAgICBtdDogXCIwLjI1cmVtXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgY29kZToge1xyXG4gICAgICByb3VuZGVkOiBcInNtXCIsXHJcbiAgICAgIHB4OiBcIjFcIixcclxuICAgICAgZm9udFNpemU6IFwiMC44NzVlbVwiLFxyXG4gICAgICBweTogXCIycHhcIixcclxuICAgICAgd2hpdGVTcGFjZTogXCJub3dyYXBcIixcclxuICAgICAgbGluZUhlaWdodDogXCJub3JtYWxcIixcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0VGFnQ29sb3IgPSB0eXBlID0+IHtcclxuICB0eXBlID0gdHlwZS50b0xvd2VyQ2FzZSgpXHJcbiAgaWYgKHR5cGUgPT09IFwicmFpbHNcIiB8fCB0eXBlID09PSBcInJ1YnlcIikge1xyXG4gICAgcmV0dXJuIFwicmVkXCI7XHJcbiAgfSBlbHNlIGlmICh0eXBlID09PSBcInJlYWN0XCIpIHtcclxuICAgIHJldHVybiBcImN5YW5cIjtcclxuICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiamF2YXNjcmlwdFwiKSB7XHJcbiAgICByZXR1cm4gXCJ5ZWxsb3dcIjtcclxuICB9IGVsc2UgaWYgKHR5cGUgPT09IFwidHlwZXNjcmlwdFwiIHx8IHR5cGUgPT09IFwidGFpbHdpbmRjc3NcIikge1xyXG4gICAgcmV0dXJuIFwiYmx1ZVwiO1xyXG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJjaGFrcmF1aVwiIHx8IHR5cGUgPT09IFwiY3NzXCIpIHtcclxuICAgIHJldHVybiBcInRlYWxcIjtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdGhlbWUgPSBtYWtlVGhlbWUoKVxyXG4iLCJpbXBvcnQgeyBQcm9wc1dpdGhDaGlsZHJlbiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQm94IH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIGNvbG9yOiBzdHJpbmc7XHJcbiAgaD86IHN0cmluZztcclxuICB6SW5kZXg/OiBudW1iZXI7XHJcbn1cclxuY29uc3QgVW5kZXJsaW5lZFRleHQgPSAocHJvcHM6IFByb3BzV2l0aENoaWxkcmVuPFByb3BzPikgPT4gKFxyXG4gIDxCb3ggYXM9XCJzcGFuXCIgZGlzcGxheT1cImlubGluZS1ibG9ja1wiIHBvc2l0aW9uPVwicmVsYXRpdmVcIj5cclxuICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgIDxCb3ggYXM9XCJzcGFuXCIgZGlzcGxheT1cImJsb2NrXCIgcG9zaXRpb249XCJhYnNvbHV0ZVwiIGJnPXsnZ3JheS4yMDAnfSB3PXsnMTAwJSd9IGg9e3Byb3BzLmggfHwgJzFweCd9IGJvdHRvbT17LTJ9IC8+XHJcbiAgPC9Cb3g+XHJcbik7XHJcbmV4cG9ydCBkZWZhdWx0IFVuZGVybGluZWRUZXh0O1xyXG4iLCJpbXBvcnQge1xyXG4gIEZsZXgsXHJcbiAgQXZhdGFyLFxyXG4gIEJveCxcclxuICBUZXh0LFxyXG4gIEJhZGdlLFxyXG4gIFN0YWNrLFxyXG4gIExpbmssXHJcbiAgVW5vcmRlcmVkTGlzdCxcclxuICBMaXN0SXRlbSxcclxuICB1c2VDb2xvck1vZGVWYWx1ZSxcclxuICBUb29sdGlwXHJcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlTGFueWFyZCB9IGZyb20gXCJyZWFjdC11c2UtbGFueWFyZFwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuXHJcblxyXG4vKiBJbXBvcnQgdHlwZXMgKi9cclxuaW1wb3J0IHR5cGUgeyBBY3Rpdml0eSB9IGZyb20gXCJyZWFjdC11c2UtbGFueWFyZFwiO1xyXG5cclxuLyogSW1wb3J0IGRhdGEgKi9cclxuaW1wb3J0IHVzZXJJZCBmcm9tIFwiLi4vZGF0YS91c2VyXCI7XHJcblxyXG5cclxuXHJcbmNvbnN0IFN0YXR1czogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiBcclxuICBjb25zdCB7IGxvYWRpbmcsIHN0YXR1cyB9ID0gdXNlTGFueWFyZCh7XHJcbiAgICB1c2VySWQsXHJcbiAgICBzb2NrZXQ6IHRydWUsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGdldEFjdGl2aXR5ID0gKCkgPT4ge1xyXG4gICAgaWYgKHN0YXR1cz8ubGlzdGVuaW5nX3RvX3Nwb3RpZnkgPT09IHRydWUpIHtcclxuICAgICAgY29uc3QgeyBzb25nLCBhcnRpc3QsIGFsYnVtIH0gPSBzdGF0dXMuc3BvdGlmeSB8fCB7fTtcclxuXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgbmFtZTogc29uZyxcclxuICAgICAgICBkZXRhaWxzOiBgYnkgJHthcnRpc3R9YCxcclxuICAgICAgICBzdGF0ZTogYG9uICR7YWxidW19YCxcclxuICAgICAgfTtcclxuICAgIH0gXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0SW1hZ2UgPSAoKSA9PiB7XHJcbiAgICBpZiAoIWxvYWRpbmcgJiYgc3RhdHVzPy5saXN0ZW5pbmdfdG9fc3BvdGlmeSA9PT0gdHJ1ZSkge1xyXG4gICAgICBjb25zdCBhY3Rpdml0eSA9IHN0YXR1cy5zcG90aWZ5O1xyXG5cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBsYXJnZUltYWdlOiBhY3Rpdml0eT8uYWxidW1fYXJ0X3VybCxcclxuICAgICAgfTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGFjdGl2aXR5ID0gZ2V0QWN0aXZpdHkoKSBhcyBBY3Rpdml0eTtcclxuXHJcbiAgICAgIGNvbnN0IHsgYXBwbGljYXRpb25faWQgfSA9IGFjdGl2aXR5IHx8IHt9O1xyXG4gICAgICBjb25zdCB7IGxhcmdlX2ltYWdlLCBzbWFsbF9pbWFnZSB9ID0gYWN0aXZpdHk/LmFzc2V0cyB8fCB7fTtcclxuXHJcbiAgICAgIGNvbnN0IFtsYXJnZUltYWdlLCBzbWFsbEltYWdlXSA9IFtcclxuICAgICAgICBsYXJnZV9pbWFnZSAmJlxyXG4gICAgICAgICAgYGh0dHBzOi8vY2RuLmRpc2NvcmRhcHAuY29tL2FwcC1hc3NldHMvJHthcHBsaWNhdGlvbl9pZH0vJHtsYXJnZV9pbWFnZX0ucG5nP3NpemU9MjU2YCxcclxuICAgICAgICBzbWFsbF9pbWFnZSAmJlxyXG4gICAgICAgICAgYGh0dHBzOi8vY2RuLmRpc2NvcmRhcHAuY29tL2FwcC1hc3NldHMvJHthcHBsaWNhdGlvbl9pZH0vJHtzbWFsbF9pbWFnZX0ucG5nP3NpemU9MjU2YCxcclxuICAgICAgXTtcclxuXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgbGFyZ2VJbWFnZSxcclxuICAgICAgICBzbWFsbEltYWdlLFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIH07XHJcbiAgXHJcbiAgXHJcbiBpZiAobG9hZGluZyA9PT0gZmFsc2UgJiYgc3RhdHVzPy5kaXNjb3JkX3N0YXR1cyA9PT0gXCJvbmxpbmVcIiAmJiBzdGF0dXM/Lmxpc3RlbmluZ190b19zcG90aWZ5ID09PSBmYWxzZSApXHJcbiByZXR1cm4gKCBcclxuIDxCb3ggZGlzcGxheT17XCJmbGV4XCJ9IGZsZXhXcmFwPXtcIm5vd3JhcFwifSBmbG9hdD17XCJsZWZ0XCJ9IHBhZGRpbmc9e1wiNVwifSAgbWFyZ2luVG9wPXtcIjVcIn0gX2hvdmVyPXt7IHNoYWRvdzogXCJsZ1wiIH19ICBiYWNrZ3JvdW5kQ29sb3I9e3VzZUNvbG9yTW9kZVZhbHVlKFwiZ3JheS4xMDBcIiwgXCIjMWUyNTMzXCIpfSByb3VuZGVkPXtcIm1kXCJ9PlxyXG4gPFN0YWNrIGJhY2tncm91bmRDb2xvcj17XCJncmVlbi41MDBcIn0gcm91bmRlZD17XCJmdWxsXCJ9IHdpZHRoPXtcIjRcIn0gaGVpZ2h0PXs0fSBtYXJnaW49e1wiYXV0b1wifSBhbGlnbkl0ZW1zPXtcImNlbnRlclwifT48L1N0YWNrPlxyXG4gPFRleHQgdGV4dENvbG9yPXt1c2VDb2xvck1vZGVWYWx1ZShcImJsYWNrXCIsIFwid2hpdGVcIil9IGZvbnRTaXplPXtcIm1kXCJ9ICB0ZXh0QWxpZ249e1wiY2VudGVyXCJ9IG1hcmdpbj17XCIxXCJ9PiBPbmxpbmU8L1RleHQ+XHJcbjwvQm94PiBcclxuXHJcbiApO1xyXG5cclxuIGVsc2UgaWYgKGxvYWRpbmcgPT09IGZhbHNlICYmIHN0YXR1cz8uZGlzY29yZF9zdGF0dXMgPT09IFwib25saW5lXCIgJiYgc3RhdHVzPy5saXN0ZW5pbmdfdG9fc3BvdGlmeSA9PT0gdHJ1ZSlcclxuIHJldHVybiAoXHJcbjxCb3ggZGlzcGxheT17XCJmbGV4XCJ9IGZsZXhXcmFwPXtcIm5vd3JhcFwifSBmbG9hdD17XCJsZWZ0XCJ9IHBhZGRpbmc9e1wiNVwifSBtYXJnaW5Ub3A9e1wiNVwifSAgX2hvdmVyPXt7IHNoYWRvdzogXCJsZ1wiIH19ICBiYWNrZ3JvdW5kQ29sb3I9e3VzZUNvbG9yTW9kZVZhbHVlKFwiZ3JheS4xMDBcIiwgXCIjMWUyNTMzXCIpfSByb3VuZGVkPXtcIm1kXCJ9PlxyXG4gICA8VG9vbHRpcCBoYXNBcnJvdyBsYWJlbD1cIk9ubGluZVwiIHBsYWNlbWVudD1cInRvcFwiPjxTdGFjayBiYWNrZ3JvdW5kQ29sb3I9e1wiZ3JlZW4uNTAwXCJ9IHJvdW5kZWQ9e1wiZnVsbFwifSB3aWR0aD17XCI0XCJ9IGhlaWdodD17NH0gbWFyZ2luPXtcImF1dG9cIn0gbWFyZ2luUmlnaHQ9e1wiNVwifSBhbGlnbkl0ZW1zPXtcImNlbnRlclwifT48L1N0YWNrPjwvVG9vbHRpcD4gXHJcbiAgPFRleHQgZm9udFNpemU9e1wic21cIn0gbWFyZ2luPXtcImF1dG9cIn0gdGV4dEFsaWduPXtcImNlbnRlclwifSBtYXJnaW5SaWdodD17XCI1XCJ9IHRleHRDb2xvcj17dXNlQ29sb3JNb2RlVmFsdWUoXCJncmF5LjQwMFwiLCBcImdyYXkuNjAwXCIpfT5MaXN0ZW5pbmcgdG88L1RleHQ+XHJcbiAgPFN0YWNrIG1hcmdpblJpZ2h0PXtcIjVcIn0gb2JqZWN0Rml0PXtcImNvdmVyXCJ9IGJvcmRlclJhZGl1cz17XCI1MCVcIn0+XHJcbiAgICAgICAgICAgICAgICAge2dldEltYWdlKCkubGFyZ2VJbWFnZSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgc3JjPXtnZXRJbWFnZSgpLmxhcmdlSW1hZ2UgfHwgXCJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCI4MHB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiODBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgIGFsdD1cImljb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICBkcmFnZ2FibGU9XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0PVwiY292ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWxnXCJcclxuICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9TdGFjaz5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8VGV4dCBmb250U2l6ZT17XCJzbVwifSBtYXJnaW49e1wiYXV0b1wifSB0ZXh0QWxpZ249e1wiY2VudGVyXCJ9PiAgICBcclxuICAgICAgICAgICAgICA8aDE+IHtnZXRBY3Rpdml0eSgpPy5uYW1lfTwvaDE+XHJcbiAgICAgICAgICAgICAgPGgxPiB7Z2V0QWN0aXZpdHkoKT8uZGV0YWlsc308L2gxPlxyXG4gICAgICAgICAgICAgIDxoMT4ge2dldEFjdGl2aXR5KCk/LnN0YXRlfSA8L2gxPiAgICBcclxuICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgXHJcbiAgPC9Cb3g+IFxyXG4gKTtcclxuIGVsc2UgaWYgKGxvYWRpbmcgPT09IGZhbHNlICYmIHN0YXR1cz8uZGlzY29yZF9zdGF0dXMgPT09IFwiaWRsZVwiICYmIHN0YXR1cz8ubGlzdGVuaW5nX3RvX3Nwb3RpZnkgPT09IGZhbHNlKVxyXG4gcmV0dXJuICggXHJcbiA8Qm94IGRpc3BsYXk9e1wiZmxleFwifSBmbGV4V3JhcD17XCJub3dyYXBcIn0gZmxvYXQ9e1wibGVmdFwifSBwYWRkaW5nPXtcIjVcIn0gbWFyZ2luVG9wPXtcIjVcIn0gIF9ob3Zlcj17eyBzaGFkb3c6IFwibGdcIiB9fSAgYmFja2dyb3VuZENvbG9yPXt1c2VDb2xvck1vZGVWYWx1ZShcImdyYXkuMTAwXCIsIFwiIzFlMjUzM1wiKX0gcm91bmRlZD17XCJtZFwifT5cclxuIDxTdGFjayBiYWNrZ3JvdW5kQ29sb3I9e1wieWVsbG93LjQwMFwifSByb3VuZGVkPXtcImZ1bGxcIn0gd2lkdGg9e1wiNFwifSBoZWlnaHQ9ezR9IG1hcmdpbj17XCJhdXRvXCJ9IGFsaWduSXRlbXM9e1wiY2VudGVyXCJ9PjwvU3RhY2s+XHJcbiA8VGV4dCB0ZXh0Q29sb3I9e3VzZUNvbG9yTW9kZVZhbHVlKFwiYmxhY2tcIiwgXCJ3aGl0ZVwiKX0gZm9udFNpemU9e1wibWRcIn0gdGV4dEFsaWduPXtcImNlbnRlclwifSBtYXJnaW49e1wiMVwifT4gSWRsZWQ8L1RleHQ+XHJcbiA8L0JveD4gXHJcblxyXG4gKTtcclxuIFxyXG4gZWxzZSBpZiAobG9hZGluZyA9PT0gZmFsc2UgJiYgc3RhdHVzPy5kaXNjb3JkX3N0YXR1cyA9PT0gXCJpZGxlXCIgJiYgc3RhdHVzPy5saXN0ZW5pbmdfdG9fc3BvdGlmeSA9PT0gdHJ1ZSlcclxuIHJldHVybiAoXHJcbjxCb3ggZGlzcGxheT17XCJmbGV4XCJ9IGZsZXhXcmFwPXtcIm5vd3JhcFwifSBmbG9hdD17XCJsZWZ0XCJ9IHBhZGRpbmc9e1wiNVwifSBtYXJnaW5Ub3A9e1wiNVwifSAgX2hvdmVyPXt7IHNoYWRvdzogXCJsZ1wiIH19ICBiYWNrZ3JvdW5kQ29sb3I9e3VzZUNvbG9yTW9kZVZhbHVlKFwiZ3JheS4xMDBcIiwgXCIjMWUyNTMzXCIpfSByb3VuZGVkPXtcIm1kXCJ9PlxyXG4gICAgPFRvb2x0aXAgaGFzQXJyb3cgbGFiZWw9XCJJZGxlZFwiIHBsYWNlbWVudD1cInRvcFwiPjxTdGFjayBiYWNrZ3JvdW5kQ29sb3I9e1wieWVsbG93LjQwMFwifSByb3VuZGVkPXtcImZ1bGxcIn0gd2lkdGg9e1wiNFwifSBoZWlnaHQ9ezR9IG1hcmdpbj17XCJhdXRvXCJ9IG1hcmdpblJpZ2h0PXtcIjVcIn0gYWxpZ25JdGVtcz17XCJjZW50ZXJcIn0+PC9TdGFjaz48L1Rvb2x0aXA+XHJcbiAgPFRleHQgZm9udFNpemU9e1wic21cIn0gbWFyZ2luPXtcImF1dG9cIn0gdGV4dEFsaWduPXtcImNlbnRlclwifSBtYXJnaW5SaWdodD17XCI1XCJ9IHRleHRDb2xvcj17dXNlQ29sb3JNb2RlVmFsdWUoXCJncmF5LjQwMFwiLCBcImdyYXkuNjAwXCIpfT5MaXN0ZW5pbmcgdG88L1RleHQ+XHJcbiAgPFN0YWNrIG1hcmdpblJpZ2h0PXtcIjVcIn0gb2JqZWN0Rml0PXtcImNvdmVyXCJ9IGJvcmRlclJhZGl1cz17XCJmdWxsXCJ9IHJvdW5kZWQ9IHtcImZ1bGxcIn0+ICAgIFxyXG4gICAgICAgICAgICAgICAgIHtnZXRJbWFnZSgpLmxhcmdlSW1hZ2UgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgPEltYWdlIFxyXG4gICAgICAgICAgICAgICAgICAgICBzcmM9e2dldEltYWdlKCkubGFyZ2VJbWFnZSB8fCBcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjgwcHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCI4MHB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgYWx0PVwiaWNvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0PVwiY292ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDwvU3RhY2s+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPFRleHQgZm9udFNpemU9e1wic21cIn0gbWFyZ2luPXtcImF1dG9cIn0gdGV4dEFsaWduPXtcImNlbnRlclwifT4gICAgXHJcbiAgICAgICAgICAgICAgPGgxPiB7Z2V0QWN0aXZpdHkoKT8ubmFtZX08L2gxPlxyXG4gICAgICAgICAgICAgIDxoMT4ge2dldEFjdGl2aXR5KCk/LmRldGFpbHN9PC9oMT5cclxuICAgICAgICAgICAgICA8aDE+IHtnZXRBY3Rpdml0eSgpPy5zdGF0ZX0gPC9oMT4gICAgXHJcbiAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgIFxyXG4gIDwvQm94PiBcclxuICk7XHJcblxyXG4gZWxzZSBpZiAobG9hZGluZyA9PT0gZmFsc2UgJiYgc3RhdHVzPy5kaXNjb3JkX3N0YXR1cyA9PT0gXCJkbmRcIiAmJiBzdGF0dXM/Lmxpc3RlbmluZ190b19zcG90aWZ5ID09PSBmYWxzZSlcclxuIHJldHVybiAoXHJcbiAgPEJveCBkaXNwbGF5PXtcImZsZXhcIn0gZmxleFdyYXA9e1wibm93cmFwXCJ9IGZsb2F0PXtcImxlZnRcIn0gcGFkZGluZz17XCI1XCJ9ICBfaG92ZXI9e3sgc2hhZG93OiBcImxnXCIgfX0gbWFyZ2luVG9wPXtcIjVcIn0gIGJhY2tncm91bmRDb2xvcj17dXNlQ29sb3JNb2RlVmFsdWUoXCJncmF5LjEwMFwiLCBcIiMxZTI1MzNcIil9IHJvdW5kZWQ9e1wibWRcIn0+XHJcbiAgPFN0YWNrIGJhY2tncm91bmRDb2xvcj17XCJyZWQuNTAwXCJ9IHJvdW5kZWQ9e1wiZnVsbFwifSB3aWR0aD17XCI0XCJ9IGhlaWdodD17NH0gbWFyZ2luPXtcImF1dG9cIn0gYWxpZ25JdGVtcz17XCJjZW50ZXJcIn0+PC9TdGFjaz5cclxuICA8VGV4dCB0ZXh0Q29sb3I9e3VzZUNvbG9yTW9kZVZhbHVlKFwiYmxhY2tcIiwgXCJ3aGl0ZVwiKX0gZm9udFNpemU9e1wibWRcIn0gIHRleHRBbGlnbj17XCJjZW50ZXJcIn0gbWFyZ2luPXtcIjFcIn0+IERpc3R1cmJpbmc8L1RleHQ+XHJcbjwvQm94PlxyXG5cclxuICk7XHJcblxyXG4gZWxzZSBpZiAobG9hZGluZyA9PT0gZmFsc2UgJiYgc3RhdHVzPy5kaXNjb3JkX3N0YXR1cyA9PT0gXCJkbmRcIiAmJiBzdGF0dXM/Lmxpc3RlbmluZ190b19zcG90aWZ5ID09PSB0cnVlKVxyXG4gcmV0dXJuIChcclxuICA8Qm94IGRpc3BsYXk9e1wiZmxleFwifSBmbGV4V3JhcD17XCJub3dyYXBcIn0gZmxvYXQ9e1wibGVmdFwifSBwYWRkaW5nPXtcIjVcIn0gbWFyZ2luVG9wPXtcIjVcIn0gIF9ob3Zlcj17eyBzaGFkb3c6IFwibGdcIiB9fSAgYmFja2dyb3VuZENvbG9yPXt1c2VDb2xvck1vZGVWYWx1ZShcImdyYXkuMTAwXCIsIFwiIzFlMjUzM1wiKX0gcm91bmRlZD17XCJtZFwifT5cclxuICA8VG9vbHRpcCBoYXNBcnJvdyBsYWJlbD1cIkRpc3R1cmJpbmdcIiBwbGFjZW1lbnQ9XCJ0b3BcIj48U3RhY2sgYmFja2dyb3VuZENvbG9yPXtcInJlZC41MDBcIn0gcm91bmRlZD17XCJmdWxsXCJ9IHdpZHRoPXtcIjRcIn0gaGVpZ2h0PXs0fSBtYXJnaW49e1wiYXV0b1wifSBtYXJnaW5SaWdodD17XCI1XCJ9IGFsaWduSXRlbXM9e1wiY2VudGVyXCJ9PjwvU3RhY2s+PC9Ub29sdGlwPlxyXG48VGV4dCBmb250U2l6ZT17XCJzbVwifSBtYXJnaW49e1wiYXV0b1wifSB0ZXh0QWxpZ249e1wiY2VudGVyXCJ9IG1hcmdpblJpZ2h0PXtcIjVcIn0gdGV4dENvbG9yPXt1c2VDb2xvck1vZGVWYWx1ZShcImdyYXkuNDAwXCIsIFwiZ3JheS42MDBcIil9Pkxpc3RlbmluZyB0bzwvVGV4dD5cclxuPFN0YWNrIG1hcmdpblJpZ2h0PXtcIjVcIn0gb2JqZWN0Rml0PXtcImNvdmVyXCJ9IGJvcmRlclJhZGl1cz17XCI1MCVcIn0+XHJcbiAgICAgICAgICAgICAge2dldEltYWdlKCkubGFyZ2VJbWFnZSAmJiAoXHJcbiAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgc3JjPXtnZXRJbWFnZSgpLmxhcmdlSW1hZ2UgfHwgXCJcIn1cclxuICAgICAgICAgICAgICAgICAgd2lkdGg9XCI4MHB4XCJcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiODBweFwiXHJcbiAgICAgICAgICAgICAgICAgIGFsdD1cImljb25cIlxyXG4gICAgICAgICAgICAgICAgICBkcmFnZ2FibGU9XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0PVwiY292ZXJcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWxnXCJcclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgPC9TdGFjaz5cclxuICAgICAgICAgICBcclxuICAgICAgICAgICA8VGV4dCBmb250U2l6ZT17XCJzbVwifSBtYXJnaW49e1wiYXV0b1wifSB0ZXh0QWxpZ249e1wiY2VudGVyXCJ9PiAgICBcclxuICAgICAgICAgICA8aDE+IHtnZXRBY3Rpdml0eSgpPy5uYW1lfTwvaDE+XHJcbiAgICAgICAgICAgPGgxPiB7Z2V0QWN0aXZpdHkoKT8uZGV0YWlsc308L2gxPlxyXG4gICAgICAgICAgIDxoMT4ge2dldEFjdGl2aXR5KCk/LnN0YXRlfSA8L2gxPiAgICBcclxuICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgXHJcbjwvQm94PiBcclxuICk7XHJcbiBlbHNlIFxyXG4gcmV0dXJuIChcclxuICA8Qm94IGRpc3BsYXk9e1wiZmxleFwifSBmbGV4V3JhcD17XCJub3dyYXBcIn0gZmxvYXQ9e1wibGVmdFwifSBwYWRkaW5nPXtcIjVcIn0gIG1hcmdpblRvcD17XCI1XCJ9IF9ob3Zlcj17eyBzaGFkb3c6IFwibGdcIiB9fSAgYmFja2dyb3VuZENvbG9yPXt1c2VDb2xvck1vZGVWYWx1ZShcImdyYXkuMTAwXCIsIFwiIzFlMjUzM1wiKX0gcm91bmRlZD17XCJtZFwifT5cclxuICAgPFRvb2x0aXAgaGFzQXJyb3cgbGFiZWw9XCJPZmZsaW5lXCIgcGxhY2VtZW50PVwidG9wXCI+PFN0YWNrIGJhY2tncm91bmRDb2xvcj17dXNlQ29sb3JNb2RlVmFsdWUoXCJncmF5LjQwMFwiLCBcImdyYXkuNjAwXCIpfSByb3VuZGVkPXtcImZ1bGxcIn0gd2lkdGg9e1wiNFwifSBoZWlnaHQ9ezR9IG1hcmdpbj17XCJhdXRvXCJ9IGFsaWduSXRlbXM9e1wiY2VudGVyXCJ9PjwvU3RhY2s+PC9Ub29sdGlwPlxyXG4gIDxUZXh0IHRleHRDb2xvcj17dXNlQ29sb3JNb2RlVmFsdWUoXCJibGFja1wiLCBcIndoaXRlXCIpfSBmb250U2l6ZT17XCJtZFwifSAgdGV4dEFsaWduPXtcImNlbnRlclwifSBtYXJnaW49e1wiMVwifT4gT2ZmbGluZTwvVGV4dD4gICAgICAgXHJcbjwvQm94PlxyXG4gKVxyXG4gXHJcbiBcclxuXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdGF0dXM7IiwiY29uc3QgdXNlcklkID0gXCI0NDAyMzkzNzgxNTgwNTk1MzJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZXJJZDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGVmYXVsdD1JbWFnZTt2YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZVwiKSk7dmFyIF9leHRlbmRzMj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIikpO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfaGVhZD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvaGVhZFwiKSk7dmFyIF90b0Jhc2U9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0XCIpO3ZhciBfaW1hZ2VDb25maWc9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWdcIik7dmFyIF91c2VJbnRlcnNlY3Rpb249cmVxdWlyZShcIi4vdXNlLWludGVyc2VjdGlvblwiKTtpZih0eXBlb2Ygd2luZG93PT09J3VuZGVmaW5lZCcpeztnbG9iYWwuX19ORVhUX0lNQUdFX0lNUE9SVEVEPXRydWU7fWNvbnN0IFZBTElEX0xPQURJTkdfVkFMVUVTPVsnbGF6eScsJ2VhZ2VyJyx1bmRlZmluZWRdO2NvbnN0IGxvYWRlcnM9bmV3IE1hcChbWydpbWdpeCcsaW1naXhMb2FkZXJdLFsnY2xvdWRpbmFyeScsY2xvdWRpbmFyeUxvYWRlcl0sWydha2FtYWknLGFrYW1haUxvYWRlcl0sWydkZWZhdWx0JyxkZWZhdWx0TG9hZGVyXV0pO2NvbnN0IFZBTElEX0xBWU9VVF9WQUxVRVM9WydmaWxsJywnZml4ZWQnLCdpbnRyaW5zaWMnLCdyZXNwb25zaXZlJyx1bmRlZmluZWRdO2Z1bmN0aW9uIGlzU3RhdGljUmVxdWlyZShzcmMpe3JldHVybiBzcmMuZGVmYXVsdCE9PXVuZGVmaW5lZDt9ZnVuY3Rpb24gaXNTdGF0aWNJbWFnZURhdGEoc3JjKXtyZXR1cm4gc3JjLnNyYyE9PXVuZGVmaW5lZDt9ZnVuY3Rpb24gaXNTdGF0aWNJbXBvcnQoc3JjKXtyZXR1cm4gdHlwZW9mIHNyYz09PSdvYmplY3QnJiYoaXNTdGF0aWNSZXF1aXJlKHNyYyl8fGlzU3RhdGljSW1hZ2VEYXRhKHNyYykpO31jb25zdHtkZXZpY2VTaXplczpjb25maWdEZXZpY2VTaXplcyxpbWFnZVNpemVzOmNvbmZpZ0ltYWdlU2l6ZXMsbG9hZGVyOmNvbmZpZ0xvYWRlcixwYXRoOmNvbmZpZ1BhdGgsZG9tYWluczpjb25maWdEb21haW5zfT1wcm9jZXNzLmVudi5fX05FWFRfSU1BR0VfT1BUU3x8X2ltYWdlQ29uZmlnLmltYWdlQ29uZmlnRGVmYXVsdDsvLyBzb3J0IHNtYWxsZXN0IHRvIGxhcmdlc3RcbmNvbnN0IGFsbFNpemVzPVsuLi5jb25maWdEZXZpY2VTaXplcywuLi5jb25maWdJbWFnZVNpemVzXTtjb25maWdEZXZpY2VTaXplcy5zb3J0KChhLGIpPT5hLWIpO2FsbFNpemVzLnNvcnQoKGEsYik9PmEtYik7ZnVuY3Rpb24gZ2V0V2lkdGhzKHdpZHRoLGxheW91dCxzaXplcyl7aWYoc2l6ZXMmJihsYXlvdXQ9PT0nZmlsbCd8fGxheW91dD09PSdyZXNwb25zaXZlJykpey8vIEZpbmQgYWxsIHRoZSBcInZ3XCIgcGVyY2VudCBzaXplcyB1c2VkIGluIHRoZSBzaXplcyBwcm9wXG5jb25zdCB2aWV3cG9ydFdpZHRoUmU9LyhefFxccykoMT9cXGQ/XFxkKXZ3L2c7Y29uc3QgcGVyY2VudFNpemVzPVtdO2ZvcihsZXQgbWF0Y2g7bWF0Y2g9dmlld3BvcnRXaWR0aFJlLmV4ZWMoc2l6ZXMpO21hdGNoKXtwZXJjZW50U2l6ZXMucHVzaChwYXJzZUludChtYXRjaFsyXSkpO31pZihwZXJjZW50U2l6ZXMubGVuZ3RoKXtjb25zdCBzbWFsbGVzdFJhdGlvPU1hdGgubWluKC4uLnBlcmNlbnRTaXplcykqMC4wMTtyZXR1cm57d2lkdGhzOmFsbFNpemVzLmZpbHRlcihzPT5zPj1jb25maWdEZXZpY2VTaXplc1swXSpzbWFsbGVzdFJhdGlvKSxraW5kOid3J307fXJldHVybnt3aWR0aHM6YWxsU2l6ZXMsa2luZDondyd9O31pZih0eXBlb2Ygd2lkdGghPT0nbnVtYmVyJ3x8bGF5b3V0PT09J2ZpbGwnfHxsYXlvdXQ9PT0ncmVzcG9uc2l2ZScpe3JldHVybnt3aWR0aHM6Y29uZmlnRGV2aWNlU2l6ZXMsa2luZDondyd9O31jb25zdCB3aWR0aHM9Wy4uLm5ldyBTZXQoLy8gPiBUaGlzIG1lYW5zIHRoYXQgbW9zdCBPTEVEIHNjcmVlbnMgdGhhdCBzYXkgdGhleSBhcmUgM3ggcmVzb2x1dGlvbixcbi8vID4gYXJlIGFjdHVhbGx5IDN4IGluIHRoZSBncmVlbiBjb2xvciwgYnV0IG9ubHkgMS41eCBpbiB0aGUgcmVkIGFuZFxuLy8gPiBibHVlIGNvbG9ycy4gU2hvd2luZyBhIDN4IHJlc29sdXRpb24gaW1hZ2UgaW4gdGhlIGFwcCB2cyBhIDJ4XG4vLyA+IHJlc29sdXRpb24gaW1hZ2Ugd2lsbCBiZSB2aXN1YWxseSB0aGUgc2FtZSwgdGhvdWdoIHRoZSAzeCBpbWFnZVxuLy8gPiB0YWtlcyBzaWduaWZpY2FudGx5IG1vcmUgZGF0YS4gRXZlbiB0cnVlIDN4IHJlc29sdXRpb24gc2NyZWVucyBhcmVcbi8vID4gd2FzdGVmdWwgYXMgdGhlIGh1bWFuIGV5ZSBjYW5ub3Qgc2VlIHRoYXQgbGV2ZWwgb2YgZGV0YWlsIHdpdGhvdXRcbi8vID4gc29tZXRoaW5nIGxpa2UgYSBtYWduaWZ5aW5nIGdsYXNzLlxuLy8gaHR0cHM6Ly9ibG9nLnR3aXR0ZXIuY29tL2VuZ2luZWVyaW5nL2VuX3VzL3RvcGljcy9pbmZyYXN0cnVjdHVyZS8yMDE5L2NhcHBpbmctaW1hZ2UtZmlkZWxpdHktb24tdWx0cmEtaGlnaC1yZXNvbHV0aW9uLWRldmljZXMuaHRtbFxuW3dpZHRoLHdpZHRoKjIvKiwgd2lkdGggKiAzKi9dLm1hcCh3PT5hbGxTaXplcy5maW5kKHA9PnA+PXcpfHxhbGxTaXplc1thbGxTaXplcy5sZW5ndGgtMV0pKV07cmV0dXJue3dpZHRocyxraW5kOid4J307fWZ1bmN0aW9uIGdlbmVyYXRlSW1nQXR0cnMoe3NyYyx1bm9wdGltaXplZCxsYXlvdXQsd2lkdGgscXVhbGl0eSxzaXplcyxsb2FkZXJ9KXtpZih1bm9wdGltaXplZCl7cmV0dXJue3NyYyxzcmNTZXQ6dW5kZWZpbmVkLHNpemVzOnVuZGVmaW5lZH07fWNvbnN0e3dpZHRocyxraW5kfT1nZXRXaWR0aHMod2lkdGgsbGF5b3V0LHNpemVzKTtjb25zdCBsYXN0PXdpZHRocy5sZW5ndGgtMTtyZXR1cm57c2l6ZXM6IXNpemVzJiZraW5kPT09J3cnPycxMDB2dyc6c2l6ZXMsc3JjU2V0OndpZHRocy5tYXAoKHcsaSk9PmAke2xvYWRlcih7c3JjLHF1YWxpdHksd2lkdGg6d30pfSAke2tpbmQ9PT0ndyc/dzppKzF9JHtraW5kfWApLmpvaW4oJywgJyksLy8gSXQncyBpbnRlbmRlZCB0byBrZWVwIGBzcmNgIHRoZSBsYXN0IGF0dHJpYnV0ZSBiZWNhdXNlIFJlYWN0IHVwZGF0ZXNcbi8vIGF0dHJpYnV0ZXMgaW4gb3JkZXIuIElmIHdlIGtlZXAgYHNyY2AgdGhlIGZpcnN0IG9uZSwgU2FmYXJpIHdpbGxcbi8vIGltbWVkaWF0ZWx5IHN0YXJ0IHRvIGZldGNoIGBzcmNgLCBiZWZvcmUgYHNpemVzYCBhbmQgYHNyY1NldGAgYXJlIGV2ZW5cbi8vIHVwZGF0ZWQgYnkgUmVhY3QuIFRoYXQgY2F1c2VzIG11bHRpcGxlIHVubmVjZXNzYXJ5IHJlcXVlc3RzIGlmIGBzcmNTZXRgXG4vLyBhbmQgYHNpemVzYCBhcmUgZGVmaW5lZC5cbi8vIFRoaXMgYnVnIGNhbm5vdCBiZSByZXByb2R1Y2VkIGluIENocm9tZSBvciBGaXJlZm94Llxuc3JjOmxvYWRlcih7c3JjLHF1YWxpdHksd2lkdGg6d2lkdGhzW2xhc3RdfSl9O31mdW5jdGlvbiBnZXRJbnQoeCl7aWYodHlwZW9mIHg9PT0nbnVtYmVyJyl7cmV0dXJuIHg7fWlmKHR5cGVvZiB4PT09J3N0cmluZycpe3JldHVybiBwYXJzZUludCh4LDEwKTt9cmV0dXJuIHVuZGVmaW5lZDt9ZnVuY3Rpb24gZGVmYXVsdEltYWdlTG9hZGVyKGxvYWRlclByb3BzKXtjb25zdCBsb2FkPWxvYWRlcnMuZ2V0KGNvbmZpZ0xvYWRlcik7aWYobG9hZCl7cmV0dXJuIGxvYWQoKDAsX2V4dGVuZHMyLmRlZmF1bHQpKHtyb290OmNvbmZpZ1BhdGh9LGxvYWRlclByb3BzKSk7fXRocm93IG5ldyBFcnJvcihgVW5rbm93biBcImxvYWRlclwiIGZvdW5kIGluIFwibmV4dC5jb25maWcuanNcIi4gRXhwZWN0ZWQ6ICR7X2ltYWdlQ29uZmlnLlZBTElEX0xPQURFUlMuam9pbignLCAnKX0uIFJlY2VpdmVkOiAke2NvbmZpZ0xvYWRlcn1gKTt9Ly8gU2VlIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcS8zOTc3NzgzMy8yNjY1MzUgZm9yIHdoeSB3ZSB1c2UgdGhpcyByZWZcbi8vIGhhbmRsZXIgaW5zdGVhZCBvZiB0aGUgaW1nJ3Mgb25Mb2FkIGF0dHJpYnV0ZS5cbmZ1bmN0aW9uIHJlbW92ZVBsYWNlaG9sZGVyKGltZyxwbGFjZWhvbGRlcil7aWYocGxhY2Vob2xkZXI9PT0nYmx1cicmJmltZyl7Y29uc3QgaGFuZGxlTG9hZD0oKT0+e2lmKCFpbWcuc3JjLnN0YXJ0c1dpdGgoJ2RhdGE6Jykpe2NvbnN0IHA9J2RlY29kZSdpbiBpbWc/aW1nLmRlY29kZSgpOlByb21pc2UucmVzb2x2ZSgpO3AuY2F0Y2goKCk9Pnt9KS50aGVuKCgpPT57aW1nLnN0eWxlLmZpbHRlcj0nbm9uZSc7aW1nLnN0eWxlLmJhY2tncm91bmRTaXplPSdub25lJztpbWcuc3R5bGUuYmFja2dyb3VuZEltYWdlPSdub25lJzt9KTt9fTtpZihpbWcuY29tcGxldGUpey8vIElmIHRoZSByZWFsIGltYWdlIGZhaWxzIHRvIGxvYWQsIHRoaXMgd2lsbCBzdGlsbCByZW1vdmUgdGhlIHBsYWNlaG9sZGVyLlxuLy8gVGhpcyBpcyB0aGUgZGVzaXJlZCBiZWhhdmlvciBmb3Igbm93LCBhbmQgd2lsbCBiZSByZXZpc2l0ZWQgd2hlbiBlcnJvclxuLy8gaGFuZGxpbmcgaXMgd29ya2VkIG9uIGZvciB0aGUgaW1hZ2UgY29tcG9uZW50IGl0c2VsZi5cbmhhbmRsZUxvYWQoKTt9ZWxzZXtpbWcub25sb2FkPWhhbmRsZUxvYWQ7fX19ZnVuY3Rpb24gSW1hZ2UoX3JlZil7bGV0e3NyYyxzaXplcyx1bm9wdGltaXplZD1mYWxzZSxwcmlvcml0eT1mYWxzZSxsb2FkaW5nLGNsYXNzTmFtZSxxdWFsaXR5LHdpZHRoLGhlaWdodCxvYmplY3RGaXQsb2JqZWN0UG9zaXRpb24sbG9hZGVyPWRlZmF1bHRJbWFnZUxvYWRlcixwbGFjZWhvbGRlcj0nZW1wdHknLGJsdXJEYXRhVVJMfT1fcmVmLGFsbD0oMCxfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTIuZGVmYXVsdCkoX3JlZixbXCJzcmNcIixcInNpemVzXCIsXCJ1bm9wdGltaXplZFwiLFwicHJpb3JpdHlcIixcImxvYWRpbmdcIixcImNsYXNzTmFtZVwiLFwicXVhbGl0eVwiLFwid2lkdGhcIixcImhlaWdodFwiLFwib2JqZWN0Rml0XCIsXCJvYmplY3RQb3NpdGlvblwiLFwibG9hZGVyXCIsXCJwbGFjZWhvbGRlclwiLFwiYmx1ckRhdGFVUkxcIl0pO2xldCByZXN0PWFsbDtsZXQgbGF5b3V0PXNpemVzPydyZXNwb25zaXZlJzonaW50cmluc2ljJztpZignbGF5b3V0J2luIHJlc3Qpey8vIE92ZXJyaWRlIGRlZmF1bHQgbGF5b3V0IGlmIHRoZSB1c2VyIHNwZWNpZmllZCBvbmU6XG5pZihyZXN0LmxheW91dClsYXlvdXQ9cmVzdC5sYXlvdXQ7Ly8gUmVtb3ZlIHByb3BlcnR5IHNvIGl0J3Mgbm90IHNwcmVhZCBpbnRvIGltYWdlOlxuZGVsZXRlIHJlc3RbJ2xheW91dCddO31sZXQgc3RhdGljU3JjPScnO2lmKGlzU3RhdGljSW1wb3J0KHNyYykpe2NvbnN0IHN0YXRpY0ltYWdlRGF0YT1pc1N0YXRpY1JlcXVpcmUoc3JjKT9zcmMuZGVmYXVsdDpzcmM7aWYoIXN0YXRpY0ltYWdlRGF0YS5zcmMpe3Rocm93IG5ldyBFcnJvcihgQW4gb2JqZWN0IHNob3VsZCBvbmx5IGJlIHBhc3NlZCB0byB0aGUgaW1hZ2UgY29tcG9uZW50IHNyYyBwYXJhbWV0ZXIgaWYgaXQgY29tZXMgZnJvbSBhIHN0YXRpYyBpbWFnZSBpbXBvcnQuIEl0IG11c3QgaW5jbHVkZSBzcmMuIFJlY2VpdmVkICR7SlNPTi5zdHJpbmdpZnkoc3RhdGljSW1hZ2VEYXRhKX1gKTt9Ymx1ckRhdGFVUkw9Ymx1ckRhdGFVUkx8fHN0YXRpY0ltYWdlRGF0YS5ibHVyRGF0YVVSTDtzdGF0aWNTcmM9c3RhdGljSW1hZ2VEYXRhLnNyYztpZighbGF5b3V0fHxsYXlvdXQhPT0nZmlsbCcpe2hlaWdodD1oZWlnaHR8fHN0YXRpY0ltYWdlRGF0YS5oZWlnaHQ7d2lkdGg9d2lkdGh8fHN0YXRpY0ltYWdlRGF0YS53aWR0aDtpZighc3RhdGljSW1hZ2VEYXRhLmhlaWdodHx8IXN0YXRpY0ltYWdlRGF0YS53aWR0aCl7dGhyb3cgbmV3IEVycm9yKGBBbiBvYmplY3Qgc2hvdWxkIG9ubHkgYmUgcGFzc2VkIHRvIHRoZSBpbWFnZSBjb21wb25lbnQgc3JjIHBhcmFtZXRlciBpZiBpdCBjb21lcyBmcm9tIGEgc3RhdGljIGltYWdlIGltcG9ydC4gSXQgbXVzdCBpbmNsdWRlIGhlaWdodCBhbmQgd2lkdGguIFJlY2VpdmVkICR7SlNPTi5zdHJpbmdpZnkoc3RhdGljSW1hZ2VEYXRhKX1gKTt9fX1zcmM9dHlwZW9mIHNyYz09PSdzdHJpbmcnP3NyYzpzdGF0aWNTcmM7Y29uc3Qgd2lkdGhJbnQ9Z2V0SW50KHdpZHRoKTtjb25zdCBoZWlnaHRJbnQ9Z2V0SW50KGhlaWdodCk7Y29uc3QgcXVhbGl0eUludD1nZXRJbnQocXVhbGl0eSk7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2lmKCFzcmMpe3Rocm93IG5ldyBFcnJvcihgSW1hZ2UgaXMgbWlzc2luZyByZXF1aXJlZCBcInNyY1wiIHByb3BlcnR5LiBNYWtlIHN1cmUgeW91IHBhc3MgXCJzcmNcIiBpbiBwcm9wcyB0byB0aGUgXFxgbmV4dC9pbWFnZVxcYCBjb21wb25lbnQuIFJlY2VpdmVkOiAke0pTT04uc3RyaW5naWZ5KHt3aWR0aCxoZWlnaHQscXVhbGl0eX0pfWApO31pZighVkFMSURfTEFZT1VUX1ZBTFVFUy5pbmNsdWRlcyhsYXlvdXQpKXt0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJsYXlvdXRcIiBwcm9wZXJ0eS4gUHJvdmlkZWQgXCIke2xheW91dH1cIiBzaG91bGQgYmUgb25lIG9mICR7VkFMSURfTEFZT1VUX1ZBTFVFUy5tYXAoU3RyaW5nKS5qb2luKCcsJyl9LmApO31pZighVkFMSURfTE9BRElOR19WQUxVRVMuaW5jbHVkZXMobG9hZGluZykpe3Rocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcImxvYWRpbmdcIiBwcm9wZXJ0eS4gUHJvdmlkZWQgXCIke2xvYWRpbmd9XCIgc2hvdWxkIGJlIG9uZSBvZiAke1ZBTElEX0xPQURJTkdfVkFMVUVTLm1hcChTdHJpbmcpLmpvaW4oJywnKX0uYCk7fWlmKHByaW9yaXR5JiZsb2FkaW5nPT09J2xhenknKXt0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGJvdGggXCJwcmlvcml0eVwiIGFuZCBcImxvYWRpbmc9J2xhenknXCIgcHJvcGVydGllcy4gT25seSBvbmUgc2hvdWxkIGJlIHVzZWQuYCk7fWlmKHBsYWNlaG9sZGVyPT09J2JsdXInKXtpZigod2lkdGhJbnR8fDApKihoZWlnaHRJbnR8fDApPDE2MDApe2NvbnNvbGUud2FybihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBpcyBzbWFsbGVyIHRoYW4gNDB4NDAuIENvbnNpZGVyIHJlbW92aW5nIHRoZSBcInBsYWNlaG9sZGVyPSdibHVyJ1wiIHByb3BlcnR5IHRvIGltcHJvdmUgcGVyZm9ybWFuY2UuYCk7fWlmKCFibHVyRGF0YVVSTCl7Y29uc3QgVkFMSURfQkxVUl9FWFQ9WydqcGVnJywncG5nJywnd2VicCddOy8vIHNob3VsZCBtYXRjaCBuZXh0LWltYWdlLWxvYWRlclxudGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBcInBsYWNlaG9sZGVyPSdibHVyJ1wiIHByb3BlcnR5IGJ1dCBpcyBtaXNzaW5nIHRoZSBcImJsdXJEYXRhVVJMXCIgcHJvcGVydHkuXG4gICAgICAgICAgUG9zc2libGUgc29sdXRpb25zOlxuICAgICAgICAgICAgLSBBZGQgYSBcImJsdXJEYXRhVVJMXCIgcHJvcGVydHksIHRoZSBjb250ZW50cyBzaG91bGQgYmUgYSBzbWFsbCBEYXRhIFVSTCB0byByZXByZXNlbnQgdGhlIGltYWdlXG4gICAgICAgICAgICAtIENoYW5nZSB0aGUgXCJzcmNcIiBwcm9wZXJ0eSB0byBhIHN0YXRpYyBpbXBvcnQgd2l0aCBvbmUgb2YgdGhlIHN1cHBvcnRlZCBmaWxlIHR5cGVzOiAke1ZBTElEX0JMVVJfRVhULmpvaW4oJywnKX1cbiAgICAgICAgICAgIC0gUmVtb3ZlIHRoZSBcInBsYWNlaG9sZGVyXCIgcHJvcGVydHksIGVmZmVjdGl2ZWx5IG5vIGJsdXIgZWZmZWN0XG4gICAgICAgICAgUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9wbGFjZWhvbGRlci1ibHVyLWRhdGEtdXJsYCk7fX19bGV0IGlzTGF6eT0hcHJpb3JpdHkmJihsb2FkaW5nPT09J2xhenknfHx0eXBlb2YgbG9hZGluZz09PSd1bmRlZmluZWQnKTtpZihzcmMmJnNyYy5zdGFydHNXaXRoKCdkYXRhOicpKXsvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9IVFRQL0Jhc2ljc19vZl9IVFRQL0RhdGFfVVJJc1xudW5vcHRpbWl6ZWQ9dHJ1ZTtpc0xhenk9ZmFsc2U7fWNvbnN0W3NldFJlZixpc0ludGVyc2VjdGVkXT0oMCxfdXNlSW50ZXJzZWN0aW9uLnVzZUludGVyc2VjdGlvbikoe3Jvb3RNYXJnaW46JzIwMHB4JyxkaXNhYmxlZDohaXNMYXp5fSk7Y29uc3QgaXNWaXNpYmxlPSFpc0xhenl8fGlzSW50ZXJzZWN0ZWQ7bGV0IHdyYXBwZXJTdHlsZTtsZXQgc2l6ZXJTdHlsZTtsZXQgc2l6ZXJTdmc7bGV0IGltZ1N0eWxlPSgwLF9leHRlbmRzMi5kZWZhdWx0KSh7cG9zaXRpb246J2Fic29sdXRlJyx0b3A6MCxsZWZ0OjAsYm90dG9tOjAscmlnaHQ6MCxib3hTaXppbmc6J2JvcmRlci1ib3gnLHBhZGRpbmc6MCxib3JkZXI6J25vbmUnLG1hcmdpbjonYXV0bycsZGlzcGxheTonYmxvY2snLHdpZHRoOjAsaGVpZ2h0OjAsbWluV2lkdGg6JzEwMCUnLG1heFdpZHRoOicxMDAlJyxtaW5IZWlnaHQ6JzEwMCUnLG1heEhlaWdodDonMTAwJScsb2JqZWN0Rml0LG9iamVjdFBvc2l0aW9ufSxwbGFjZWhvbGRlcj09PSdibHVyJz97ZmlsdGVyOidibHVyKDIwcHgpJyxiYWNrZ3JvdW5kU2l6ZTonY292ZXInLGJhY2tncm91bmRJbWFnZTpgdXJsKFwiJHtibHVyRGF0YVVSTH1cIilgfTp1bmRlZmluZWQpO2lmKHR5cGVvZiB3aWR0aEludCE9PSd1bmRlZmluZWQnJiZ0eXBlb2YgaGVpZ2h0SW50IT09J3VuZGVmaW5lZCcmJmxheW91dCE9PSdmaWxsJyl7Ly8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiAvPlxuY29uc3QgcXVvdGllbnQ9aGVpZ2h0SW50L3dpZHRoSW50O2NvbnN0IHBhZGRpbmdUb3A9aXNOYU4ocXVvdGllbnQpPycxMDAlJzpgJHtxdW90aWVudCoxMDB9JWA7aWYobGF5b3V0PT09J3Jlc3BvbnNpdmUnKXsvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cInJlc3BvbnNpdmVcIiAvPlxud3JhcHBlclN0eWxlPXtkaXNwbGF5OidibG9jaycsb3ZlcmZsb3c6J2hpZGRlbicscG9zaXRpb246J3JlbGF0aXZlJyxib3hTaXppbmc6J2JvcmRlci1ib3gnLG1hcmdpbjowfTtzaXplclN0eWxlPXtkaXNwbGF5OidibG9jaycsYm94U2l6aW5nOidib3JkZXItYm94JyxwYWRkaW5nVG9wfTt9ZWxzZSBpZihsYXlvdXQ9PT0naW50cmluc2ljJyl7Ly8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJpbnRyaW5zaWNcIiAvPlxud3JhcHBlclN0eWxlPXtkaXNwbGF5OidpbmxpbmUtYmxvY2snLG1heFdpZHRoOicxMDAlJyxvdmVyZmxvdzonaGlkZGVuJyxwb3NpdGlvbjoncmVsYXRpdmUnLGJveFNpemluZzonYm9yZGVyLWJveCcsbWFyZ2luOjB9O3NpemVyU3R5bGU9e2JveFNpemluZzonYm9yZGVyLWJveCcsZGlzcGxheTonYmxvY2snLG1heFdpZHRoOicxMDAlJ307c2l6ZXJTdmc9YDxzdmcgd2lkdGg9XCIke3dpZHRoSW50fVwiIGhlaWdodD1cIiR7aGVpZ2h0SW50fVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2ZXJzaW9uPVwiMS4xXCIvPmA7fWVsc2UgaWYobGF5b3V0PT09J2ZpeGVkJyl7Ly8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJmaXhlZFwiIC8+XG53cmFwcGVyU3R5bGU9e292ZXJmbG93OidoaWRkZW4nLGJveFNpemluZzonYm9yZGVyLWJveCcsZGlzcGxheTonaW5saW5lLWJsb2NrJyxwb3NpdGlvbjoncmVsYXRpdmUnLHdpZHRoOndpZHRoSW50LGhlaWdodDpoZWlnaHRJbnR9O319ZWxzZSBpZih0eXBlb2Ygd2lkdGhJbnQ9PT0ndW5kZWZpbmVkJyYmdHlwZW9mIGhlaWdodEludD09PSd1bmRlZmluZWQnJiZsYXlvdXQ9PT0nZmlsbCcpey8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIGxheW91dD1cImZpbGxcIiAvPlxud3JhcHBlclN0eWxlPXtkaXNwbGF5OidibG9jaycsb3ZlcmZsb3c6J2hpZGRlbicscG9zaXRpb246J2Fic29sdXRlJyx0b3A6MCxsZWZ0OjAsYm90dG9tOjAscmlnaHQ6MCxib3hTaXppbmc6J2JvcmRlci1ib3gnLG1hcmdpbjowfTt9ZWxzZXsvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiAvPlxuaWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe3Rocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBtdXN0IHVzZSBcIndpZHRoXCIgYW5kIFwiaGVpZ2h0XCIgcHJvcGVydGllcyBvciBcImxheW91dD0nZmlsbCdcIiBwcm9wZXJ0eS5gKTt9fWxldCBpbWdBdHRyaWJ1dGVzPXtzcmM6J2RhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaEFRQUJBSUFBQUFBQUFQLy8veUg1QkFFQUFBQUFMQUFBQUFBQkFBRUFBQUlCUkFBNycsc3JjU2V0OnVuZGVmaW5lZCxzaXplczp1bmRlZmluZWR9O2lmKGlzVmlzaWJsZSl7aW1nQXR0cmlidXRlcz1nZW5lcmF0ZUltZ0F0dHJzKHtzcmMsdW5vcHRpbWl6ZWQsbGF5b3V0LHdpZHRoOndpZHRoSW50LHF1YWxpdHk6cXVhbGl0eUludCxzaXplcyxsb2FkZXJ9KTt9cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7c3R5bGU6d3JhcHBlclN0eWxlfSxzaXplclN0eWxlPy8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIse3N0eWxlOnNpemVyU3R5bGV9LHNpemVyU3ZnPy8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIse3N0eWxlOnttYXhXaWR0aDonMTAwJScsZGlzcGxheTonYmxvY2snLG1hcmdpbjowLGJvcmRlcjonbm9uZScscGFkZGluZzowfSxhbHQ6XCJcIixcImFyaWEtaGlkZGVuXCI6dHJ1ZSxyb2xlOlwicHJlc2VudGF0aW9uXCIsc3JjOmBkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LCR7KDAsX3RvQmFzZS50b0Jhc2U2NCkoc2l6ZXJTdmcpfWB9KTpudWxsKTpudWxsLCFpc1Zpc2libGUmJi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibm9zY3JpcHRcIixudWxsLC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsT2JqZWN0LmFzc2lnbih7fSxyZXN0LGdlbmVyYXRlSW1nQXR0cnMoe3NyYyx1bm9wdGltaXplZCxsYXlvdXQsd2lkdGg6d2lkdGhJbnQscXVhbGl0eTpxdWFsaXR5SW50LHNpemVzLGxvYWRlcn0pLHtzcmM6c3JjLGRlY29kaW5nOlwiYXN5bmNcIixzaXplczpzaXplcyxzdHlsZTppbWdTdHlsZSxjbGFzc05hbWU6Y2xhc3NOYW1lfSkpKSwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImltZ1wiLE9iamVjdC5hc3NpZ24oe30scmVzdCxpbWdBdHRyaWJ1dGVzLHtkZWNvZGluZzpcImFzeW5jXCIsY2xhc3NOYW1lOmNsYXNzTmFtZSxyZWY6ZWxlbWVudD0+e3NldFJlZihlbGVtZW50KTtyZW1vdmVQbGFjZWhvbGRlcihlbGVtZW50LHBsYWNlaG9sZGVyKTt9LHN0eWxlOmltZ1N0eWxlfSkpLHByaW9yaXR5Py8qI19fUFVSRV9fKi8gLy8gTm90ZSBob3cgd2Ugb21pdCB0aGUgYGhyZWZgIGF0dHJpYnV0ZSwgYXMgaXQgd291bGQgb25seSBiZSByZWxldmFudFxuLy8gZm9yIGJyb3dzZXJzIHRoYXQgZG8gbm90IHN1cHBvcnQgYGltYWdlc3Jjc2V0YCwgYW5kIGluIHRob3NlIGNhc2VzXG4vLyBpdCB3b3VsZCBsaWtlbHkgY2F1c2UgdGhlIGluY29ycmVjdCBpbWFnZSB0byBiZSBwcmVsb2FkZWQuXG4vL1xuLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2Uvc2VtYW50aWNzLmh0bWwjYXR0ci1saW5rLWltYWdlc3Jjc2V0XG5fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9oZWFkLmRlZmF1bHQsbnVsbCwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpbmtcIix7a2V5OidfX25pbWctJytpbWdBdHRyaWJ1dGVzLnNyYytpbWdBdHRyaWJ1dGVzLnNyY1NldCtpbWdBdHRyaWJ1dGVzLnNpemVzLHJlbDpcInByZWxvYWRcIixhczpcImltYWdlXCIsaHJlZjppbWdBdHRyaWJ1dGVzLnNyY1NldD91bmRlZmluZWQ6aW1nQXR0cmlidXRlcy5zcmMvLyBAdHMtaWdub3JlOiBpbWFnZXNyY3NldCBpcyBub3QgeWV0IGluIHRoZSBsaW5rIGVsZW1lbnQgdHlwZVxuLGltYWdlc3Jjc2V0OmltZ0F0dHJpYnV0ZXMuc3JjU2V0Ly8gQHRzLWlnbm9yZTogaW1hZ2VzaXplcyBpcyBub3QgeWV0IGluIHRoZSBsaW5rIGVsZW1lbnQgdHlwZVxuLGltYWdlc2l6ZXM6aW1nQXR0cmlidXRlcy5zaXplc30pKTpudWxsKTt9Ly9CVUlMVCBJTiBMT0FERVJTXG5mdW5jdGlvbiBub3JtYWxpemVTcmMoc3JjKXtyZXR1cm4gc3JjWzBdPT09Jy8nP3NyYy5zbGljZSgxKTpzcmM7fWZ1bmN0aW9uIGltZ2l4TG9hZGVyKHtyb290LHNyYyx3aWR0aCxxdWFsaXR5fSl7Ly8gRGVtbzogaHR0cHM6Ly9zdGF0aWMuaW1naXgubmV0L2RhaXN5LnBuZz9mb3JtYXQ9YXV0byZmaXQ9bWF4Jnc9MzAwXG5jb25zdCBwYXJhbXM9WydhdXRvPWZvcm1hdCcsJ2ZpdD1tYXgnLCd3PScrd2lkdGhdO2xldCBwYXJhbXNTdHJpbmc9Jyc7aWYocXVhbGl0eSl7cGFyYW1zLnB1c2goJ3E9JytxdWFsaXR5KTt9aWYocGFyYW1zLmxlbmd0aCl7cGFyYW1zU3RyaW5nPSc/JytwYXJhbXMuam9pbignJicpO31yZXR1cm5gJHtyb290fSR7bm9ybWFsaXplU3JjKHNyYyl9JHtwYXJhbXNTdHJpbmd9YDt9ZnVuY3Rpb24gYWthbWFpTG9hZGVyKHtyb290LHNyYyx3aWR0aH0pe3JldHVybmAke3Jvb3R9JHtub3JtYWxpemVTcmMoc3JjKX0/aW13aWR0aD0ke3dpZHRofWA7fWZ1bmN0aW9uIGNsb3VkaW5hcnlMb2FkZXIoe3Jvb3Qsc3JjLHdpZHRoLHF1YWxpdHl9KXsvLyBEZW1vOiBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9kZW1vL2ltYWdlL3VwbG9hZC93XzMwMCxjX2xpbWl0LHFfYXV0by90dXJ0bGVzLmpwZ1xuY29uc3QgcGFyYW1zPVsnZl9hdXRvJywnY19saW1pdCcsJ3dfJyt3aWR0aCwncV8nKyhxdWFsaXR5fHwnYXV0bycpXTtsZXQgcGFyYW1zU3RyaW5nPXBhcmFtcy5qb2luKCcsJykrJy8nO3JldHVybmAke3Jvb3R9JHtwYXJhbXNTdHJpbmd9JHtub3JtYWxpemVTcmMoc3JjKX1gO31mdW5jdGlvbiBkZWZhdWx0TG9hZGVyKHtyb290LHNyYyx3aWR0aCxxdWFsaXR5fSl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2NvbnN0IG1pc3NpbmdWYWx1ZXM9W107Ly8gdGhlc2Ugc2hvdWxkIGFsd2F5cyBiZSBwcm92aWRlZCBidXQgbWFrZSBzdXJlIHRoZXkgYXJlXG5pZighc3JjKW1pc3NpbmdWYWx1ZXMucHVzaCgnc3JjJyk7aWYoIXdpZHRoKW1pc3NpbmdWYWx1ZXMucHVzaCgnd2lkdGgnKTtpZihtaXNzaW5nVmFsdWVzLmxlbmd0aD4wKXt0aHJvdyBuZXcgRXJyb3IoYE5leHQgSW1hZ2UgT3B0aW1pemF0aW9uIHJlcXVpcmVzICR7bWlzc2luZ1ZhbHVlcy5qb2luKCcsICcpfSB0byBiZSBwcm92aWRlZC4gTWFrZSBzdXJlIHlvdSBwYXNzIHRoZW0gYXMgcHJvcHMgdG8gdGhlIFxcYG5leHQvaW1hZ2VcXGAgY29tcG9uZW50LiBSZWNlaXZlZDogJHtKU09OLnN0cmluZ2lmeSh7c3JjLHdpZHRoLHF1YWxpdHl9KX1gKTt9aWYoc3JjLnN0YXJ0c1dpdGgoJy8vJykpe3Rocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIHBhcnNlIHNyYyBcIiR7c3JjfVwiIG9uIFxcYG5leHQvaW1hZ2VcXGAsIHByb3RvY29sLXJlbGF0aXZlIFVSTCAoLy8pIG11c3QgYmUgY2hhbmdlZCB0byBhbiBhYnNvbHV0ZSBVUkwgKGh0dHA6Ly8gb3IgaHR0cHM6Ly8pYCk7fWlmKCFzcmMuc3RhcnRzV2l0aCgnLycpJiZjb25maWdEb21haW5zKXtsZXQgcGFyc2VkU3JjO3RyeXtwYXJzZWRTcmM9bmV3IFVSTChzcmMpO31jYXRjaChlcnIpe2NvbnNvbGUuZXJyb3IoZXJyKTt0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBwYXJzZSBzcmMgXCIke3NyY31cIiBvbiBcXGBuZXh0L2ltYWdlXFxgLCBpZiB1c2luZyByZWxhdGl2ZSBpbWFnZSBpdCBtdXN0IHN0YXJ0IHdpdGggYSBsZWFkaW5nIHNsYXNoIFwiL1wiIG9yIGJlIGFuIGFic29sdXRlIFVSTCAoaHR0cDovLyBvciBodHRwczovLylgKTt9aWYoIWNvbmZpZ0RvbWFpbnMuaW5jbHVkZXMocGFyc2VkU3JjLmhvc3RuYW1lKSl7dGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIHNyYyBwcm9wICgke3NyY30pIG9uIFxcYG5leHQvaW1hZ2VcXGAsIGhvc3RuYW1lIFwiJHtwYXJzZWRTcmMuaG9zdG5hbWV9XCIgaXMgbm90IGNvbmZpZ3VyZWQgdW5kZXIgaW1hZ2VzIGluIHlvdXIgXFxgbmV4dC5jb25maWcuanNcXGBcXG5gK2BTZWUgbW9yZSBpbmZvOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9uZXh0LWltYWdlLXVuY29uZmlndXJlZC1ob3N0YCk7fX19cmV0dXJuYCR7cm9vdH0/dXJsPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHNyYyl9Jnc9JHt3aWR0aH0mcT0ke3F1YWxpdHl8fDc1fWA7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW1hZ2UuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkPXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9yb3V0ZXI9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyXCIpO3ZhciBfcm91dGVyMj1yZXF1aXJlKFwiLi9yb3V0ZXJcIik7dmFyIF91c2VJbnRlcnNlY3Rpb249cmVxdWlyZShcIi4vdXNlLWludGVyc2VjdGlvblwiKTtjb25zdCBwcmVmZXRjaGVkPXt9O2Z1bmN0aW9uIHByZWZldGNoKHJvdXRlcixocmVmLGFzLG9wdGlvbnMpe2lmKHR5cGVvZiB3aW5kb3c9PT0ndW5kZWZpbmVkJ3x8IXJvdXRlcilyZXR1cm47aWYoISgwLF9yb3V0ZXIuaXNMb2NhbFVSTCkoaHJlZikpcmV0dXJuOy8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbi8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbi8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG5yb3V0ZXIucHJlZmV0Y2goaHJlZixhcyxvcHRpb25zKS5jYXRjaChlcnI9PntpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Ly8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xudGhyb3cgZXJyO319KTtjb25zdCBjdXJMb2NhbGU9b3B0aW9ucyYmdHlwZW9mIG9wdGlvbnMubG9jYWxlIT09J3VuZGVmaW5lZCc/b3B0aW9ucy5sb2NhbGU6cm91dGVyJiZyb3V0ZXIubG9jYWxlOy8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG5wcmVmZXRjaGVkW2hyZWYrJyUnK2FzKyhjdXJMb2NhbGU/JyUnK2N1ckxvY2FsZTonJyldPXRydWU7fWZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudCl7Y29uc3R7dGFyZ2V0fT1ldmVudC5jdXJyZW50VGFyZ2V0O3JldHVybiB0YXJnZXQmJnRhcmdldCE9PSdfc2VsZid8fGV2ZW50Lm1ldGFLZXl8fGV2ZW50LmN0cmxLZXl8fGV2ZW50LnNoaWZ0S2V5fHxldmVudC5hbHRLZXl8fC8vIHRyaWdnZXJzIHJlc291cmNlIGRvd25sb2FkXG5ldmVudC5uYXRpdmVFdmVudCYmZXZlbnQubmF0aXZlRXZlbnQud2hpY2g9PT0yO31mdW5jdGlvbiBsaW5rQ2xpY2tlZChlLHJvdXRlcixocmVmLGFzLHJlcGxhY2Usc2hhbGxvdyxzY3JvbGwsbG9jYWxlKXtjb25zdHtub2RlTmFtZX09ZS5jdXJyZW50VGFyZ2V0O2lmKG5vZGVOYW1lPT09J0EnJiYoaXNNb2RpZmllZEV2ZW50KGUpfHwhKDAsX3JvdXRlci5pc0xvY2FsVVJMKShocmVmKSkpey8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxucmV0dXJuO31lLnByZXZlbnREZWZhdWx0KCk7Ly8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG5pZihzY3JvbGw9PW51bGwmJmFzLmluZGV4T2YoJyMnKT49MCl7c2Nyb2xsPWZhbHNlO30vLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbnJvdXRlcltyZXBsYWNlPydyZXBsYWNlJzoncHVzaCddKGhyZWYsYXMse3NoYWxsb3csbG9jYWxlLHNjcm9sbH0pO31mdW5jdGlvbiBMaW5rKHByb3BzKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7ZnVuY3Rpb24gY3JlYXRlUHJvcEVycm9yKGFyZ3Mpe3JldHVybiBuZXcgRXJyb3IoYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmArKHR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJz9cIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCI6JycpKTt9Ly8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbmNvbnN0IHJlcXVpcmVkUHJvcHNHdWFyZD17aHJlZjp0cnVlfTtjb25zdCByZXF1aXJlZFByb3BzPU9iamVjdC5rZXlzKHJlcXVpcmVkUHJvcHNHdWFyZCk7cmVxdWlyZWRQcm9wcy5mb3JFYWNoKGtleT0+e2lmKGtleT09PSdocmVmJyl7aWYocHJvcHNba2V5XT09bnVsbHx8dHlwZW9mIHByb3BzW2tleV0hPT0nc3RyaW5nJyYmdHlwZW9mIHByb3BzW2tleV0hPT0nb2JqZWN0Jyl7dGhyb3cgY3JlYXRlUHJvcEVycm9yKHtrZXksZXhwZWN0ZWQ6J2BzdHJpbmdgIG9yIGBvYmplY3RgJyxhY3R1YWw6cHJvcHNba2V5XT09PW51bGw/J251bGwnOnR5cGVvZiBwcm9wc1trZXldfSk7fX1lbHNley8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG5jb25zdCBfPWtleTt9fSk7Ly8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbmNvbnN0IG9wdGlvbmFsUHJvcHNHdWFyZD17YXM6dHJ1ZSxyZXBsYWNlOnRydWUsc2Nyb2xsOnRydWUsc2hhbGxvdzp0cnVlLHBhc3NIcmVmOnRydWUscHJlZmV0Y2g6dHJ1ZSxsb2NhbGU6dHJ1ZX07Y29uc3Qgb3B0aW9uYWxQcm9wcz1PYmplY3Qua2V5cyhvcHRpb25hbFByb3BzR3VhcmQpO29wdGlvbmFsUHJvcHMuZm9yRWFjaChrZXk9Pntjb25zdCB2YWxUeXBlPXR5cGVvZiBwcm9wc1trZXldO2lmKGtleT09PSdhcycpe2lmKHByb3BzW2tleV0mJnZhbFR5cGUhPT0nc3RyaW5nJyYmdmFsVHlwZSE9PSdvYmplY3QnKXt0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe2tleSxleHBlY3RlZDonYHN0cmluZ2Agb3IgYG9iamVjdGAnLGFjdHVhbDp2YWxUeXBlfSk7fX1lbHNlIGlmKGtleT09PSdsb2NhbGUnKXtpZihwcm9wc1trZXldJiZ2YWxUeXBlIT09J3N0cmluZycpe3Rocm93IGNyZWF0ZVByb3BFcnJvcih7a2V5LGV4cGVjdGVkOidgc3RyaW5nYCcsYWN0dWFsOnZhbFR5cGV9KTt9fWVsc2UgaWYoa2V5PT09J3JlcGxhY2UnfHxrZXk9PT0nc2Nyb2xsJ3x8a2V5PT09J3NoYWxsb3cnfHxrZXk9PT0ncGFzc0hyZWYnfHxrZXk9PT0ncHJlZmV0Y2gnKXtpZihwcm9wc1trZXldIT1udWxsJiZ2YWxUeXBlIT09J2Jvb2xlYW4nKXt0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe2tleSxleHBlY3RlZDonYGJvb2xlYW5gJyxhY3R1YWw6dmFsVHlwZX0pO319ZWxzZXsvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuY29uc3QgXz1rZXk7fX0pOy8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbmNvbnN0IGhhc1dhcm5lZD1fcmVhY3QuZGVmYXVsdC51c2VSZWYoZmFsc2UpO2lmKHByb3BzLnByZWZldGNoJiYhaGFzV2FybmVkLmN1cnJlbnQpe2hhc1dhcm5lZC5jdXJyZW50PXRydWU7Y29uc29sZS53YXJuKCdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCcpO319Y29uc3QgcD1wcm9wcy5wcmVmZXRjaCE9PWZhbHNlO2NvbnN0IHJvdXRlcj0oMCxfcm91dGVyMi51c2VSb3V0ZXIpKCk7Y29uc3R7aHJlZixhc309X3JlYWN0LmRlZmF1bHQudXNlTWVtbygoKT0+e2NvbnN0W3Jlc29sdmVkSHJlZixyZXNvbHZlZEFzXT0oMCxfcm91dGVyLnJlc29sdmVIcmVmKShyb3V0ZXIscHJvcHMuaHJlZix0cnVlKTtyZXR1cm57aHJlZjpyZXNvbHZlZEhyZWYsYXM6cHJvcHMuYXM/KDAsX3JvdXRlci5yZXNvbHZlSHJlZikocm91dGVyLHByb3BzLmFzKTpyZXNvbHZlZEFzfHxyZXNvbHZlZEhyZWZ9O30sW3JvdXRlcixwcm9wcy5ocmVmLHByb3BzLmFzXSk7bGV0e2NoaWxkcmVuLHJlcGxhY2Usc2hhbGxvdyxzY3JvbGwsbG9jYWxlfT1wcm9wczsvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbmlmKHR5cGVvZiBjaGlsZHJlbj09PSdzdHJpbmcnKXtjaGlsZHJlbj0vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFcIixudWxsLGNoaWxkcmVuKTt9Ly8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG5sZXQgY2hpbGQ7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlY9PT0nZGV2ZWxvcG1lbnQnKXt0cnl7Y2hpbGQ9X3JlYWN0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO31jYXRjaChlcnIpe3Rocm93IG5ldyBFcnJvcihgTXVsdGlwbGUgY2hpbGRyZW4gd2VyZSBwYXNzZWQgdG8gPExpbms+IHdpdGggXFxgaHJlZlxcYCBvZiBcXGAke3Byb3BzLmhyZWZ9XFxgIGJ1dCBvbmx5IG9uZSBjaGlsZCBpcyBzdXBwb3J0ZWQgaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbGluay1tdWx0aXBsZS1jaGlsZHJlbmArKHR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJz9cIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCI6JycpKTt9fWVsc2V7Y2hpbGQ9X3JlYWN0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO31jb25zdCBjaGlsZFJlZj1jaGlsZCYmdHlwZW9mIGNoaWxkPT09J29iamVjdCcmJmNoaWxkLnJlZjtjb25zdFtzZXRJbnRlcnNlY3Rpb25SZWYsaXNWaXNpYmxlXT0oMCxfdXNlSW50ZXJzZWN0aW9uLnVzZUludGVyc2VjdGlvbikoe3Jvb3RNYXJnaW46JzIwMHB4J30pO2NvbnN0IHNldFJlZj1fcmVhY3QuZGVmYXVsdC51c2VDYWxsYmFjayhlbD0+e3NldEludGVyc2VjdGlvblJlZihlbCk7aWYoY2hpbGRSZWYpe2lmKHR5cGVvZiBjaGlsZFJlZj09PSdmdW5jdGlvbicpY2hpbGRSZWYoZWwpO2Vsc2UgaWYodHlwZW9mIGNoaWxkUmVmPT09J29iamVjdCcpe2NoaWxkUmVmLmN1cnJlbnQ9ZWw7fX19LFtjaGlsZFJlZixzZXRJbnRlcnNlY3Rpb25SZWZdKTsoMCxfcmVhY3QudXNlRWZmZWN0KSgoKT0+e2NvbnN0IHNob3VsZFByZWZldGNoPWlzVmlzaWJsZSYmcCYmKDAsX3JvdXRlci5pc0xvY2FsVVJMKShocmVmKTtjb25zdCBjdXJMb2NhbGU9dHlwZW9mIGxvY2FsZSE9PSd1bmRlZmluZWQnP2xvY2FsZTpyb3V0ZXImJnJvdXRlci5sb2NhbGU7Y29uc3QgaXNQcmVmZXRjaGVkPXByZWZldGNoZWRbaHJlZisnJScrYXMrKGN1ckxvY2FsZT8nJScrY3VyTG9jYWxlOicnKV07aWYoc2hvdWxkUHJlZmV0Y2gmJiFpc1ByZWZldGNoZWQpe3ByZWZldGNoKHJvdXRlcixocmVmLGFzLHtsb2NhbGU6Y3VyTG9jYWxlfSk7fX0sW2FzLGhyZWYsaXNWaXNpYmxlLGxvY2FsZSxwLHJvdXRlcl0pO2NvbnN0IGNoaWxkUHJvcHM9e3JlZjpzZXRSZWYsb25DbGljazplPT57aWYoY2hpbGQucHJvcHMmJnR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrPT09J2Z1bmN0aW9uJyl7Y2hpbGQucHJvcHMub25DbGljayhlKTt9aWYoIWUuZGVmYXVsdFByZXZlbnRlZCl7bGlua0NsaWNrZWQoZSxyb3V0ZXIsaHJlZixhcyxyZXBsYWNlLHNoYWxsb3csc2Nyb2xsLGxvY2FsZSk7fX19O2NoaWxkUHJvcHMub25Nb3VzZUVudGVyPWU9PntpZighKDAsX3JvdXRlci5pc0xvY2FsVVJMKShocmVmKSlyZXR1cm47aWYoY2hpbGQucHJvcHMmJnR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXI9PT0nZnVuY3Rpb24nKXtjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSk7fXByZWZldGNoKHJvdXRlcixocmVmLGFzLHtwcmlvcml0eTp0cnVlfSk7fTsvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbi8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuaWYocHJvcHMucGFzc0hyZWZ8fGNoaWxkLnR5cGU9PT0nYScmJiEoJ2hyZWYnaW4gY2hpbGQucHJvcHMpKXtjb25zdCBjdXJMb2NhbGU9dHlwZW9mIGxvY2FsZSE9PSd1bmRlZmluZWQnP2xvY2FsZTpyb3V0ZXImJnJvdXRlci5sb2NhbGU7Ly8gd2Ugb25seSByZW5kZXIgZG9tYWluIGxvY2FsZXMgaWYgd2UgYXJlIGN1cnJlbnRseSBvbiBhIGRvbWFpbiBsb2NhbGVcbi8vIHNvIHRoYXQgbG9jYWxlIGxpbmtzIGFyZSBzdGlsbCB2aXNpdGFibGUgaW4gZGV2ZWxvcG1lbnQvcHJldmlldyBlbnZzXG5jb25zdCBsb2NhbGVEb21haW49cm91dGVyJiZyb3V0ZXIuaXNMb2NhbGVEb21haW4mJigwLF9yb3V0ZXIuZ2V0RG9tYWluTG9jYWxlKShhcyxjdXJMb2NhbGUscm91dGVyJiZyb3V0ZXIubG9jYWxlcyxyb3V0ZXImJnJvdXRlci5kb21haW5Mb2NhbGVzKTtjaGlsZFByb3BzLmhyZWY9bG9jYWxlRG9tYWlufHwoMCxfcm91dGVyLmFkZEJhc2VQYXRoKSgoMCxfcm91dGVyLmFkZExvY2FsZSkoYXMsY3VyTG9jYWxlLHJvdXRlciYmcm91dGVyLmRlZmF1bHRMb2NhbGUpKTt9cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNsb25lRWxlbWVudChjaGlsZCxjaGlsZFByb3BzKTt9dmFyIF9kZWZhdWx0PUxpbms7ZXhwb3J0cy5kZWZhdWx0PV9kZWZhdWx0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bGluay5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoPXJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoO2V4cG9ydHMubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2g9dm9pZCAwOy8qKlxuICogUmVtb3ZlcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGlmIHRoZXJlIGlzIG9uZS4gUHJlc2VydmVzIHRoZSByb290IHBhdGggYC9gLlxuICovZnVuY3Rpb24gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aCl7cmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSYmcGF0aCE9PScvJz9wYXRoLnNsaWNlKDAsLTEpOnBhdGg7fS8qKlxuICogTm9ybWFsaXplcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGFjY29yZGluZyB0byB0aGUgYHRyYWlsaW5nU2xhc2hgIG9wdGlvblxuICogaW4gYG5leHQuY29uZmlnLmpzYC5cbiAqL2NvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoPXByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSD9wYXRoPT57aWYoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpe3JldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKTt9ZWxzZSBpZihwYXRoLmVuZHNXaXRoKCcvJykpe3JldHVybiBwYXRoO31lbHNle3JldHVybiBwYXRoKycvJzt9fTpyZW1vdmVQYXRoVHJhaWxpbmdTbGFzaDtleHBvcnRzLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoPW5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrPWV4cG9ydHMucmVxdWVzdElkbGVDYWxsYmFjaz12b2lkIDA7Y29uc3QgcmVxdWVzdElkbGVDYWxsYmFjaz10eXBlb2Ygc2VsZiE9PSd1bmRlZmluZWQnJiZzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2t8fGZ1bmN0aW9uKGNiKXtsZXQgc3RhcnQ9RGF0ZS5ub3coKTtyZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbigpe2NiKHtkaWRUaW1lb3V0OmZhbHNlLHRpbWVSZW1haW5pbmc6ZnVuY3Rpb24oKXtyZXR1cm4gTWF0aC5tYXgoMCw1MC0oRGF0ZS5ub3coKS1zdGFydCkpO319KTt9LDEpO307ZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrPXJlcXVlc3RJZGxlQ2FsbGJhY2s7Y29uc3QgY2FuY2VsSWRsZUNhbGxiYWNrPXR5cGVvZiBzZWxmIT09J3VuZGVmaW5lZCcmJnNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrfHxmdW5jdGlvbihpZCl7cmV0dXJuIGNsZWFyVGltZW91dChpZCk7fTtleHBvcnRzLmNhbmNlbElkbGVDYWxsYmFjaz1jYW5jZWxJZGxlQ2FsbGJhY2s7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubWFya0Fzc2V0RXJyb3I9bWFya0Fzc2V0RXJyb3I7ZXhwb3J0cy5pc0Fzc2V0RXJyb3I9aXNBc3NldEVycm9yO2V4cG9ydHMuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdD1nZXRDbGllbnRCdWlsZE1hbmlmZXN0O2V4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9nZXRBc3NldFBhdGhGcm9tUm91dGU9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlXCIpKTt2YXIgX3JlcXVlc3RJZGxlQ2FsbGJhY2s9cmVxdWlyZShcIi4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrXCIpOy8vIDMuOHMgd2FzIGFyYml0cmFyaWx5IGNob3NlbiBhcyBpdCdzIHdoYXQgaHR0cHM6Ly93ZWIuZGV2L2ludGVyYWN0aXZlXG4vLyBjb25zaWRlcnMgYXMgXCJHb29kXCIgdGltZS10by1pbnRlcmFjdGl2ZS4gV2UgbXVzdCBhc3N1bWUgc29tZXRoaW5nIHdlbnRcbi8vIHdyb25nIGJleW9uZCB0aGlzIHBvaW50LCBhbmQgdGhlbiBmYWxsLWJhY2sgdG8gYSBmdWxsIHBhZ2UgdHJhbnNpdGlvbiB0b1xuLy8gc2hvdyB0aGUgdXNlciBzb21ldGhpbmcgb2YgdmFsdWUuXG5jb25zdCBNU19NQVhfSURMRV9ERUxBWT0zODAwO2Z1bmN0aW9uIHdpdGhGdXR1cmUoa2V5LG1hcCxnZW5lcmF0b3Ipe2xldCBlbnRyeT1tYXAuZ2V0KGtleSk7aWYoZW50cnkpe2lmKCdmdXR1cmUnaW4gZW50cnkpe3JldHVybiBlbnRyeS5mdXR1cmU7fXJldHVybiBQcm9taXNlLnJlc29sdmUoZW50cnkpO31sZXQgcmVzb2x2ZXI7Y29uc3QgcHJvbT1uZXcgUHJvbWlzZShyZXNvbHZlPT57cmVzb2x2ZXI9cmVzb2x2ZTt9KTttYXAuc2V0KGtleSxlbnRyeT17cmVzb2x2ZTpyZXNvbHZlcixmdXR1cmU6cHJvbX0pO3JldHVybiBnZW5lcmF0b3I/Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuZ2VuZXJhdG9yKCkudGhlbih2YWx1ZT0+KHJlc29sdmVyKHZhbHVlKSx2YWx1ZSkpOnByb207fWZ1bmN0aW9uIGhhc1ByZWZldGNoKGxpbmspe3RyeXtsaW5rPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtyZXR1cm4oLy8gZGV0ZWN0IElFMTEgc2luY2UgaXQgc3VwcG9ydHMgcHJlZmV0Y2ggYnV0IGlzbid0IGRldGVjdGVkXG4vLyB3aXRoIHJlbExpc3Quc3VwcG9ydFxuISF3aW5kb3cuTVNJbnB1dE1ldGhvZENvbnRleHQmJiEhZG9jdW1lbnQuZG9jdW1lbnRNb2RlfHxsaW5rLnJlbExpc3Quc3VwcG9ydHMoJ3ByZWZldGNoJykpO31jYXRjaChfdW51c2VkKXtyZXR1cm4gZmFsc2U7fX1jb25zdCBjYW5QcmVmZXRjaD1oYXNQcmVmZXRjaCgpO2Z1bmN0aW9uIHByZWZldGNoVmlhRG9tKGhyZWYsYXMsbGluayl7cmV0dXJuIG5ldyBQcm9taXNlKChyZXMscmVqKT0+e2lmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxpbmtbcmVsPVwicHJlZmV0Y2hcIl1baHJlZl49XCIke2hyZWZ9XCJdYCkpe3JldHVybiByZXMoKTt9bGluaz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7Ly8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbDpcbmlmKGFzKWxpbmsuYXM9YXM7bGluay5yZWw9YHByZWZldGNoYDtsaW5rLmNyb3NzT3JpZ2luPXByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU47bGluay5vbmxvYWQ9cmVzO2xpbmsub25lcnJvcj1yZWo7Ly8gYGhyZWZgIHNob3VsZCBhbHdheXMgYmUgbGFzdDpcbmxpbmsuaHJlZj1ocmVmO2RvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluayk7fSk7fWNvbnN0IEFTU0VUX0xPQURfRVJST1I9U3ltYm9sKCdBU1NFVF9MT0FEX0VSUk9SJyk7Ly8gVE9ETzogdW5leHBvcnRcbmZ1bmN0aW9uIG1hcmtBc3NldEVycm9yKGVycil7cmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsQVNTRVRfTE9BRF9FUlJPUix7fSk7fWZ1bmN0aW9uIGlzQXNzZXRFcnJvcihlcnIpe3JldHVybiBlcnImJkFTU0VUX0xPQURfRVJST1IgaW4gZXJyO31mdW5jdGlvbiBhcHBlbmRTY3JpcHQoc3JjLHNjcmlwdCl7cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9PntzY3JpcHQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7Ly8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbC5cbi8vIDEuIFNldHVwIHN1Y2Nlc3MvZmFpbHVyZSBob29rcyBpbiBjYXNlIHRoZSBicm93c2VyIHN5bmNocm9ub3VzbHlcbi8vICAgIGV4ZWN1dGVzIHdoZW4gYHNyY2AgaXMgc2V0Llxuc2NyaXB0Lm9ubG9hZD1yZXNvbHZlO3NjcmlwdC5vbmVycm9yPSgpPT5yZWplY3QobWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzY3JpcHQ6ICR7c3JjfWApKSk7Ly8gMi4gQ29uZmlndXJlIHRoZSBjcm9zcy1vcmlnaW4gYXR0cmlidXRlIGJlZm9yZSBzZXR0aW5nIGBzcmNgIGluIGNhc2UgdGhlXG4vLyAgICBicm93c2VyIGJlZ2lucyB0byBmZXRjaC5cbnNjcmlwdC5jcm9zc09yaWdpbj1wcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOOy8vIDMuIEZpbmFsbHksIHNldCB0aGUgc291cmNlIGFuZCBpbmplY3QgaW50byB0aGUgRE9NIGluIGNhc2UgdGhlIGNoaWxkXG4vLyAgICBtdXN0IGJlIGFwcGVuZGVkIGZvciBmZXRjaGluZyB0byBzdGFydC5cbnNjcmlwdC5zcmM9c3JjO2RvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTt9KTt9Ly8gUmVzb2x2ZSBhIHByb21pc2UgdGhhdCB0aW1lcyBvdXQgYWZ0ZXIgZ2l2ZW4gYW1vdW50IG9mIG1pbGxpc2Vjb25kcy5cbmZ1bmN0aW9uIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQocCxtcyxlcnIpe3JldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSxyZWplY3QpPT57bGV0IGNhbmNlbGxlZD1mYWxzZTtwLnRoZW4ocj0+ey8vIFJlc29sdmVkLCBjYW5jZWwgdGhlIHRpbWVvdXRcbmNhbmNlbGxlZD10cnVlO3Jlc29sdmUocik7fSkuY2F0Y2gocmVqZWN0KTsoMCxfcmVxdWVzdElkbGVDYWxsYmFjay5yZXF1ZXN0SWRsZUNhbGxiYWNrKSgoKT0+c2V0VGltZW91dCgoKT0+e2lmKCFjYW5jZWxsZWQpe3JlamVjdChlcnIpO319LG1zKSk7fSk7fS8vIFRPRE86IHN0b3AgZXhwb3J0aW5nIG9yIGNhY2hlIHRoZSBmYWlsdXJlXG4vLyBJdCdkIGJlIGJlc3QgdG8gc3RvcCBleHBvcnRpbmcgdGhpcy4gSXQncyBhbiBpbXBsZW1lbnRhdGlvbiBkZXRhaWwuIFdlJ3JlXG4vLyBvbmx5IGV4cG9ydGluZyBpdCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWx0eSB3aXRoIHRoZSBgcGFnZS1sb2FkZXJgLlxuLy8gT25seSBjYWNoZSB0aGlzIHJlc3BvbnNlIGFzIGEgbGFzdCByZXNvcnQgaWYgd2UgY2Fubm90IGVsaW1pbmF0ZSBhbGwgb3RoZXJcbi8vIGNvZGUgYnJhbmNoZXMgdGhhdCB1c2UgdGhlIEJ1aWxkIE1hbmlmZXN0IENhbGxiYWNrIGFuZCBwdXNoIHRoZW0gdGhyb3VnaFxuLy8gdGhlIFJvdXRlIExvYWRlciBpbnRlcmZhY2UuXG5mdW5jdGlvbiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCl7aWYoc2VsZi5fX0JVSUxEX01BTklGRVNUKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVCk7fWNvbnN0IG9uQnVpbGRNYW5pZmVzdD1uZXcgUHJvbWlzZShyZXNvbHZlPT57Ly8gTWFuZGF0b3J5IGJlY2F1c2UgdGhpcyBpcyBub3QgY29uY3VycmVudCBzYWZlOlxuY29uc3QgY2I9c2VsZi5fX0JVSUxEX01BTklGRVNUX0NCO3NlbGYuX19CVUlMRF9NQU5JRkVTVF9DQj0oKT0+e3Jlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKTtjYiYmY2IoKTt9O30pO3JldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KG9uQnVpbGRNYW5pZmVzdCxNU19NQVhfSURMRV9ERUxBWSxtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoJ0ZhaWxlZCB0byBsb2FkIGNsaWVudCBidWlsZCBtYW5pZmVzdCcpKSk7fWZ1bmN0aW9uIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgscm91dGUpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WPT09J2RldmVsb3BtZW50Jyl7cmV0dXJuIFByb21pc2UucmVzb2x2ZSh7c2NyaXB0czpbYXNzZXRQcmVmaXgrJy9fbmV4dC9zdGF0aWMvY2h1bmtzL3BhZ2VzJytlbmNvZGVVUkkoKDAsX2dldEFzc2V0UGF0aEZyb21Sb3V0ZS5kZWZhdWx0KShyb3V0ZSwnLmpzJykpXSwvLyBTdHlsZXMgYXJlIGhhbmRsZWQgYnkgYHN0eWxlLWxvYWRlcmAgaW4gZGV2ZWxvcG1lbnQ6XG5jc3M6W119KTt9cmV0dXJuIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKS50aGVuKG1hbmlmZXN0PT57aWYoIShyb3V0ZSBpbiBtYW5pZmVzdCkpe3Rocm93IG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvb2t1cCByb3V0ZTogJHtyb3V0ZX1gKSk7fWNvbnN0IGFsbEZpbGVzPW1hbmlmZXN0W3JvdXRlXS5tYXAoZW50cnk9PmFzc2V0UHJlZml4KycvX25leHQvJytlbmNvZGVVUkkoZW50cnkpKTtyZXR1cm57c2NyaXB0czphbGxGaWxlcy5maWx0ZXIodj0+di5lbmRzV2l0aCgnLmpzJykpLGNzczphbGxGaWxlcy5maWx0ZXIodj0+di5lbmRzV2l0aCgnLmNzcycpKX07fSk7fWZ1bmN0aW9uIGNyZWF0ZVJvdXRlTG9hZGVyKGFzc2V0UHJlZml4KXtjb25zdCBlbnRyeXBvaW50cz1uZXcgTWFwKCk7Y29uc3QgbG9hZGVkU2NyaXB0cz1uZXcgTWFwKCk7Y29uc3Qgc3R5bGVTaGVldHM9bmV3IE1hcCgpO2NvbnN0IHJvdXRlcz1uZXcgTWFwKCk7ZnVuY3Rpb24gbWF5YmVFeGVjdXRlU2NyaXB0KHNyYyl7bGV0IHByb209bG9hZGVkU2NyaXB0cy5nZXQoc3JjKTtpZihwcm9tKXtyZXR1cm4gcHJvbTt9Ly8gU2tpcCBleGVjdXRpbmcgc2NyaXB0IGlmIGl0J3MgYWxyZWFkeSBpbiB0aGUgRE9NOlxuaWYoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihgc2NyaXB0W3NyY149XCIke3NyY31cIl1gKSl7cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO31sb2FkZWRTY3JpcHRzLnNldChzcmMscHJvbT1hcHBlbmRTY3JpcHQoc3JjKSk7cmV0dXJuIHByb207fWZ1bmN0aW9uIGZldGNoU3R5bGVTaGVldChocmVmKXtsZXQgcHJvbT1zdHlsZVNoZWV0cy5nZXQoaHJlZik7aWYocHJvbSl7cmV0dXJuIHByb207fXN0eWxlU2hlZXRzLnNldChocmVmLHByb209ZmV0Y2goaHJlZikudGhlbihyZXM9PntpZighcmVzLm9rKXt0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0eWxlc2hlZXQ6ICR7aHJlZn1gKTt9cmV0dXJuIHJlcy50ZXh0KCkudGhlbih0ZXh0PT4oe2hyZWY6aHJlZixjb250ZW50OnRleHR9KSk7fSkuY2F0Y2goZXJyPT57dGhyb3cgbWFya0Fzc2V0RXJyb3IoZXJyKTt9KSk7cmV0dXJuIHByb207fXJldHVybnt3aGVuRW50cnlwb2ludChyb3V0ZSl7cmV0dXJuIHdpdGhGdXR1cmUocm91dGUsZW50cnlwb2ludHMpO30sb25FbnRyeXBvaW50KHJvdXRlLGV4ZWN1dGUpe1Byb21pc2UucmVzb2x2ZShleGVjdXRlKS50aGVuKGZuPT5mbigpKS50aGVuKGV4cG9ydHM9Pih7Y29tcG9uZW50OmV4cG9ydHMmJmV4cG9ydHMuZGVmYXVsdHx8ZXhwb3J0cyxleHBvcnRzOmV4cG9ydHN9KSxlcnI9Pih7ZXJyb3I6ZXJyfSkpLnRoZW4oaW5wdXQ9Pntjb25zdCBvbGQ9ZW50cnlwb2ludHMuZ2V0KHJvdXRlKTtlbnRyeXBvaW50cy5zZXQocm91dGUsaW5wdXQpO2lmKG9sZCYmJ3Jlc29sdmUnaW4gb2xkKW9sZC5yZXNvbHZlKGlucHV0KTt9KTt9LGxvYWRSb3V0ZShyb3V0ZSxwcmVmZXRjaCl7cmV0dXJuIHdpdGhGdXR1cmUocm91dGUscm91dGVzLCgpPT57cmV0dXJuIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQoZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCxyb3V0ZSkudGhlbigoe3NjcmlwdHMsY3NzfSk9PntyZXR1cm4gUHJvbWlzZS5hbGwoW2VudHJ5cG9pbnRzLmhhcyhyb3V0ZSk/W106UHJvbWlzZS5hbGwoc2NyaXB0cy5tYXAobWF5YmVFeGVjdXRlU2NyaXB0KSksUHJvbWlzZS5hbGwoY3NzLm1hcChmZXRjaFN0eWxlU2hlZXQpKV0pO30pLnRoZW4ocmVzPT57cmV0dXJuIHRoaXMud2hlbkVudHJ5cG9pbnQocm91dGUpLnRoZW4oZW50cnlwb2ludD0+KHtlbnRyeXBvaW50LHN0eWxlczpyZXNbMV19KSk7fSksTVNfTUFYX0lETEVfREVMQVksbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBSb3V0ZSBkaWQgbm90IGNvbXBsZXRlIGxvYWRpbmc6ICR7cm91dGV9YCkpKS50aGVuKCh7ZW50cnlwb2ludCxzdHlsZXN9KT0+e2NvbnN0IHJlcz1PYmplY3QuYXNzaWduKHtzdHlsZXM6c3R5bGVzfSxlbnRyeXBvaW50KTtyZXR1cm4nZXJyb3InaW4gZW50cnlwb2ludD9lbnRyeXBvaW50OnJlczt9KS5jYXRjaChlcnI9PntpZihwcmVmZXRjaCl7Ly8gd2UgZG9uJ3Qgd2FudCB0byBjYWNoZSBlcnJvcnMgZHVyaW5nIHByZWZldGNoXG50aHJvdyBlcnI7fXJldHVybntlcnJvcjplcnJ9O30pO30pO30scHJlZmV0Y2gocm91dGUpey8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWVMYWJzL3F1aWNrbGluay9ibG9iLzQ1M2E2NjFmYTFmYTk0MGUyZDJlMDQ0NDUyMzk4ZTM4YzY3YTk4ZmIvc3JjL2luZGV4Lm1qcyNMMTE1LUwxMThcbi8vIExpY2Vuc2U6IEFwYWNoZSAyLjBcbmxldCBjbjtpZihjbj1uYXZpZ2F0b3IuY29ubmVjdGlvbil7Ly8gRG9uJ3QgcHJlZmV0Y2ggaWYgdXNpbmcgMkcgb3IgaWYgU2F2ZS1EYXRhIGlzIGVuYWJsZWQuXG5pZihjbi5zYXZlRGF0YXx8LzJnLy50ZXN0KGNuLmVmZmVjdGl2ZVR5cGUpKXJldHVybiBQcm9taXNlLnJlc29sdmUoKTt9cmV0dXJuIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgscm91dGUpLnRoZW4ob3V0cHV0PT5Qcm9taXNlLmFsbChjYW5QcmVmZXRjaD9vdXRwdXQuc2NyaXB0cy5tYXAoc2NyaXB0PT5wcmVmZXRjaFZpYURvbShzY3JpcHQsJ3NjcmlwdCcpKTpbXSkpLnRoZW4oKCk9PnsoMCxfcmVxdWVzdElkbGVDYWxsYmFjay5yZXF1ZXN0SWRsZUNhbGxiYWNrKSgoKT0+dGhpcy5sb2FkUm91dGUocm91dGUsdHJ1ZSkuY2F0Y2goKCk9Pnt9KSk7fSkuY2F0Y2goLy8gc3dhbGxvdyBwcmVmZXRjaCBlcnJvcnNcbigpPT57fSk7fX07fXZhciBfZGVmYXVsdD1jcmVhdGVSb3V0ZUxvYWRlcjtleHBvcnRzLmRlZmF1bHQ9X2RlZmF1bHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZS1sb2FkZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkPXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMudXNlUm91dGVyPXVzZVJvdXRlcjtleHBvcnRzLm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZT1tYWtlUHVibGljUm91dGVySW5zdGFuY2U7ZXhwb3J0cy5jcmVhdGVSb3V0ZXI9ZXhwb3J0cy53aXRoUm91dGVyPWV4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9yb3V0ZXIyPV9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlclwiKSk7ZXhwb3J0cy5Sb3V0ZXI9X3JvdXRlcjIuZGVmYXVsdDtleHBvcnRzLk5leHRSb3V0ZXI9X3JvdXRlcjIuTmV4dFJvdXRlcjt2YXIgX3JvdXRlckNvbnRleHQ9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dFwiKTt2YXIgX3dpdGhSb3V0ZXI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi93aXRoLXJvdXRlclwiKSk7ZXhwb3J0cy53aXRoUm91dGVyPV93aXRoUm91dGVyLmRlZmF1bHQ7LyogZ2xvYmFsIHdpbmRvdyAqL2NvbnN0IHNpbmdsZXRvblJvdXRlcj17cm91dGVyOm51bGwsLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbnJlYWR5Q2FsbGJhY2tzOltdLHJlYWR5KGNiKXtpZih0aGlzLnJvdXRlcilyZXR1cm4gY2IoKTtpZih0eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCcpe3RoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYik7fX19Oy8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzPVsncGF0aG5hbWUnLCdyb3V0ZScsJ3F1ZXJ5JywnYXNQYXRoJywnY29tcG9uZW50cycsJ2lzRmFsbGJhY2snLCdiYXNlUGF0aCcsJ2xvY2FsZScsJ2xvY2FsZXMnLCdkZWZhdWx0TG9jYWxlJywnaXNSZWFkeScsJ2lzUHJldmlldycsJ2lzTG9jYWxlRG9tYWluJ107Y29uc3Qgcm91dGVyRXZlbnRzPVsncm91dGVDaGFuZ2VTdGFydCcsJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywncm91dGVDaGFuZ2VFcnJvcicsJ2hhc2hDaGFuZ2VTdGFydCcsJ2hhc2hDaGFuZ2VDb21wbGV0ZSddO2NvbnN0IGNvcmVNZXRob2RGaWVsZHM9WydwdXNoJywncmVwbGFjZScsJ3JlbG9hZCcsJ2JhY2snLCdwcmVmZXRjaCcsJ2JlZm9yZVBvcFN0YXRlJ107Ly8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwnZXZlbnRzJyx7Z2V0KCl7cmV0dXJuIF9yb3V0ZXIyLmRlZmF1bHQuZXZlbnRzO319KTt1cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKGZpZWxkPT57Ly8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSB3ZSBuZWVkIHRvIHJldHVyblxuLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4vLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbi8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLGZpZWxkLHtnZXQoKXtjb25zdCByb3V0ZXI9Z2V0Um91dGVyKCk7cmV0dXJuIHJvdXRlcltmaWVsZF07fX0pO30pO2NvcmVNZXRob2RGaWVsZHMuZm9yRWFjaChmaWVsZD0+ey8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG47c2luZ2xldG9uUm91dGVyW2ZpZWxkXT0oLi4uYXJncyk9Pntjb25zdCByb3V0ZXI9Z2V0Um91dGVyKCk7cmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncyk7fTt9KTtyb3V0ZXJFdmVudHMuZm9yRWFjaChldmVudD0+e3NpbmdsZXRvblJvdXRlci5yZWFkeSgoKT0+e19yb3V0ZXIyLmRlZmF1bHQuZXZlbnRzLm9uKGV2ZW50LCguLi5hcmdzKT0+e2NvbnN0IGV2ZW50RmllbGQ9YG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZygxKX1gO2NvbnN0IF9zaW5nbGV0b25Sb3V0ZXI9c2luZ2xldG9uUm91dGVyO2lmKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pe3RyeXtfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpO31jYXRjaChlcnIpe2NvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YCk7Y29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKTt9fX0pO30pO30pO2Z1bmN0aW9uIGdldFJvdXRlcigpe2lmKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKXtjb25zdCBtZXNzYWdlPSdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJysnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgb24gdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbic7dGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO31yZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjt9Ly8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG52YXIgX2RlZmF1bHQ9c2luZ2xldG9uUm91dGVyOy8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnRzLmRlZmF1bHQ9X2RlZmF1bHQ7ZnVuY3Rpb24gdXNlUm91dGVyKCl7cmV0dXJuIF9yZWFjdC5kZWZhdWx0LnVzZUNvbnRleHQoX3JvdXRlckNvbnRleHQuUm91dGVyQ29udGV4dCk7fS8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiBiZSB1c2VkIGluc2lkZSB0aGUgc2VydmVyLlxuY29uc3QgY3JlYXRlUm91dGVyPSguLi5hcmdzKT0+e3NpbmdsZXRvblJvdXRlci5yb3V0ZXI9bmV3IF9yb3V0ZXIyLmRlZmF1bHQoLi4uYXJncyk7c2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goY2I9PmNiKCkpO3NpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcz1bXTtyZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjt9Oy8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydHMuY3JlYXRlUm91dGVyPWNyZWF0ZVJvdXRlcjtmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyKXtjb25zdCBfcm91dGVyPXJvdXRlcjtjb25zdCBpbnN0YW5jZT17fTtmb3IoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpe2lmKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XT09PSdvYmplY3QnKXtpbnN0YW5jZVtwcm9wZXJ0eV09T2JqZWN0LmFzc2lnbihBcnJheS5pc0FycmF5KF9yb3V0ZXJbcHJvcGVydHldKT9bXTp7fSxfcm91dGVyW3Byb3BlcnR5XSk7Ly8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbmNvbnRpbnVlO31pbnN0YW5jZVtwcm9wZXJ0eV09X3JvdXRlcltwcm9wZXJ0eV07fS8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbmluc3RhbmNlLmV2ZW50cz1fcm91dGVyMi5kZWZhdWx0LmV2ZW50cztjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goZmllbGQ9PntpbnN0YW5jZVtmaWVsZF09KC4uLmFyZ3MpPT57cmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpO307fSk7cmV0dXJuIGluc3RhbmNlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnVzZUludGVyc2VjdGlvbj11c2VJbnRlcnNlY3Rpb247dmFyIF9yZWFjdD1yZXF1aXJlKFwicmVhY3RcIik7dmFyIF9yZXF1ZXN0SWRsZUNhbGxiYWNrPXJlcXVpcmUoXCIuL3JlcXVlc3QtaWRsZS1jYWxsYmFja1wiKTtjb25zdCBoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcj10eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIhPT0ndW5kZWZpbmVkJztmdW5jdGlvbiB1c2VJbnRlcnNlY3Rpb24oe3Jvb3RNYXJnaW4sZGlzYWJsZWR9KXtjb25zdCBpc0Rpc2FibGVkPWRpc2FibGVkfHwhaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXI7Y29uc3QgdW5vYnNlcnZlPSgwLF9yZWFjdC51c2VSZWYpKCk7Y29uc3RbdmlzaWJsZSxzZXRWaXNpYmxlXT0oMCxfcmVhY3QudXNlU3RhdGUpKGZhbHNlKTtjb25zdCBzZXRSZWY9KDAsX3JlYWN0LnVzZUNhbGxiYWNrKShlbD0+e2lmKHVub2JzZXJ2ZS5jdXJyZW50KXt1bm9ic2VydmUuY3VycmVudCgpO3Vub2JzZXJ2ZS5jdXJyZW50PXVuZGVmaW5lZDt9aWYoaXNEaXNhYmxlZHx8dmlzaWJsZSlyZXR1cm47aWYoZWwmJmVsLnRhZ05hbWUpe3Vub2JzZXJ2ZS5jdXJyZW50PW9ic2VydmUoZWwsaXNWaXNpYmxlPT5pc1Zpc2libGUmJnNldFZpc2libGUoaXNWaXNpYmxlKSx7cm9vdE1hcmdpbn0pO319LFtpc0Rpc2FibGVkLHJvb3RNYXJnaW4sdmlzaWJsZV0pOygwLF9yZWFjdC51c2VFZmZlY3QpKCgpPT57aWYoIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyKXtpZighdmlzaWJsZSl7Y29uc3QgaWRsZUNhbGxiYWNrPSgwLF9yZXF1ZXN0SWRsZUNhbGxiYWNrLnJlcXVlc3RJZGxlQ2FsbGJhY2spKCgpPT5zZXRWaXNpYmxlKHRydWUpKTtyZXR1cm4oKT0+KDAsX3JlcXVlc3RJZGxlQ2FsbGJhY2suY2FuY2VsSWRsZUNhbGxiYWNrKShpZGxlQ2FsbGJhY2spO319fSxbdmlzaWJsZV0pO3JldHVybltzZXRSZWYsdmlzaWJsZV07fWZ1bmN0aW9uIG9ic2VydmUoZWxlbWVudCxjYWxsYmFjayxvcHRpb25zKXtjb25zdHtpZCxvYnNlcnZlcixlbGVtZW50c309Y3JlYXRlT2JzZXJ2ZXIob3B0aW9ucyk7ZWxlbWVudHMuc2V0KGVsZW1lbnQsY2FsbGJhY2spO29ic2VydmVyLm9ic2VydmUoZWxlbWVudCk7cmV0dXJuIGZ1bmN0aW9uIHVub2JzZXJ2ZSgpe2VsZW1lbnRzLmRlbGV0ZShlbGVtZW50KTtvYnNlcnZlci51bm9ic2VydmUoZWxlbWVudCk7Ly8gRGVzdHJveSBvYnNlcnZlciB3aGVuIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIHdhdGNoOlxuaWYoZWxlbWVudHMuc2l6ZT09PTApe29ic2VydmVyLmRpc2Nvbm5lY3QoKTtvYnNlcnZlcnMuZGVsZXRlKGlkKTt9fTt9Y29uc3Qgb2JzZXJ2ZXJzPW5ldyBNYXAoKTtmdW5jdGlvbiBjcmVhdGVPYnNlcnZlcihvcHRpb25zKXtjb25zdCBpZD1vcHRpb25zLnJvb3RNYXJnaW58fCcnO2xldCBpbnN0YW5jZT1vYnNlcnZlcnMuZ2V0KGlkKTtpZihpbnN0YW5jZSl7cmV0dXJuIGluc3RhbmNlO31jb25zdCBlbGVtZW50cz1uZXcgTWFwKCk7Y29uc3Qgb2JzZXJ2ZXI9bmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGVudHJpZXM9PntlbnRyaWVzLmZvckVhY2goZW50cnk9Pntjb25zdCBjYWxsYmFjaz1lbGVtZW50cy5nZXQoZW50cnkudGFyZ2V0KTtjb25zdCBpc1Zpc2libGU9ZW50cnkuaXNJbnRlcnNlY3Rpbmd8fGVudHJ5LmludGVyc2VjdGlvblJhdGlvPjA7aWYoY2FsbGJhY2smJmlzVmlzaWJsZSl7Y2FsbGJhY2soaXNWaXNpYmxlKTt9fSk7fSxvcHRpb25zKTtvYnNlcnZlcnMuc2V0KGlkLGluc3RhbmNlPXtpZCxvYnNlcnZlcixlbGVtZW50c30pO3JldHVybiBpbnN0YW5jZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtaW50ZXJzZWN0aW9uLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9d2l0aFJvdXRlcjt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3JvdXRlcj1yZXF1aXJlKFwiLi9yb3V0ZXJcIik7ZnVuY3Rpb24gd2l0aFJvdXRlcihDb21wb3NlZENvbXBvbmVudCl7ZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHMpe3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbXBvc2VkQ29tcG9uZW50LE9iamVjdC5hc3NpZ24oe3JvdXRlcjooMCxfcm91dGVyLnVzZVJvdXRlcikoKX0scHJvcHMpKTt9V2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzPUNvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcy8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbjtXaXRoUm91dGVyV3JhcHBlci5vcmlnR2V0SW5pdGlhbFByb3BzPUNvbXBvc2VkQ29tcG9uZW50Lm9yaWdHZXRJbml0aWFsUHJvcHM7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2NvbnN0IG5hbWU9Q29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWV8fENvbXBvc2VkQ29tcG9uZW50Lm5hbWV8fCdVbmtub3duJztXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZT1gd2l0aFJvdXRlcigke25hbWV9KWA7fXJldHVybiBXaXRoUm91dGVyV3JhcHBlcjt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD13aXRoLXJvdXRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm5vcm1hbGl6ZUxvY2FsZVBhdGg9bm9ybWFsaXplTG9jYWxlUGF0aDtmdW5jdGlvbiBub3JtYWxpemVMb2NhbGVQYXRoKHBhdGhuYW1lLGxvY2FsZXMpe2xldCBkZXRlY3RlZExvY2FsZTsvLyBmaXJzdCBpdGVtIHdpbGwgYmUgZW1wdHkgc3RyaW5nIGZyb20gc3BsaXR0aW5nIGF0IGZpcnN0IGNoYXJcbmNvbnN0IHBhdGhuYW1lUGFydHM9cGF0aG5hbWUuc3BsaXQoJy8nKTsobG9jYWxlc3x8W10pLnNvbWUobG9jYWxlPT57aWYocGF0aG5hbWVQYXJ0c1sxXS50b0xvd2VyQ2FzZSgpPT09bG9jYWxlLnRvTG93ZXJDYXNlKCkpe2RldGVjdGVkTG9jYWxlPWxvY2FsZTtwYXRobmFtZVBhcnRzLnNwbGljZSgxLDEpO3BhdGhuYW1lPXBhdGhuYW1lUGFydHMuam9pbignLycpfHwnLyc7cmV0dXJuIHRydWU7fXJldHVybiBmYWxzZTt9KTtyZXR1cm57cGF0aG5hbWUsZGV0ZWN0ZWRMb2NhbGV9O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5vcm1hbGl6ZS1sb2NhbGUtcGF0aC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9bWl0dDsvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi8gLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcbmZ1bmN0aW9uIG1pdHQoKXtjb25zdCBhbGw9T2JqZWN0LmNyZWF0ZShudWxsKTtyZXR1cm57b24odHlwZSxoYW5kbGVyKXs7KGFsbFt0eXBlXXx8KGFsbFt0eXBlXT1bXSkpLnB1c2goaGFuZGxlcik7fSxvZmYodHlwZSxoYW5kbGVyKXtpZihhbGxbdHlwZV0pe2FsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcik+Pj4wLDEpO319LGVtaXQodHlwZSwuLi5ldnRzKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG47KGFsbFt0eXBlXXx8W10pLnNsaWNlKCkubWFwKGhhbmRsZXI9PntoYW5kbGVyKC4uLmV2dHMpO30pO319O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1pdHQuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5nZXREb21haW5Mb2NhbGU9Z2V0RG9tYWluTG9jYWxlO2V4cG9ydHMuYWRkTG9jYWxlPWFkZExvY2FsZTtleHBvcnRzLmRlbExvY2FsZT1kZWxMb2NhbGU7ZXhwb3J0cy5oYXNCYXNlUGF0aD1oYXNCYXNlUGF0aDtleHBvcnRzLmFkZEJhc2VQYXRoPWFkZEJhc2VQYXRoO2V4cG9ydHMuZGVsQmFzZVBhdGg9ZGVsQmFzZVBhdGg7ZXhwb3J0cy5pc0xvY2FsVVJMPWlzTG9jYWxVUkw7ZXhwb3J0cy5pbnRlcnBvbGF0ZUFzPWludGVycG9sYXRlQXM7ZXhwb3J0cy5yZXNvbHZlSHJlZj1yZXNvbHZlSHJlZjtleHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaD1yZXF1aXJlKFwiLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaFwiKTt2YXIgX3JvdXRlTG9hZGVyPXJlcXVpcmUoXCIuLi8uLi8uLi9jbGllbnQvcm91dGUtbG9hZGVyXCIpO3ZhciBfZGVub3JtYWxpemVQYWdlUGF0aD1yZXF1aXJlKFwiLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aFwiKTt2YXIgX25vcm1hbGl6ZUxvY2FsZVBhdGg9cmVxdWlyZShcIi4uL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoXCIpO3ZhciBfbWl0dD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9taXR0XCIpKTt2YXIgX3V0aWxzPXJlcXVpcmUoXCIuLi91dGlsc1wiKTt2YXIgX2lzRHluYW1pYz1yZXF1aXJlKFwiLi91dGlscy9pcy1keW5hbWljXCIpO3ZhciBfcGFyc2VSZWxhdGl2ZVVybD1yZXF1aXJlKFwiLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmxcIik7dmFyIF9xdWVyeXN0cmluZz1yZXF1aXJlKFwiLi91dGlscy9xdWVyeXN0cmluZ1wiKTt2YXIgX3Jlc29sdmVSZXdyaXRlcz1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXNcIikpO3ZhciBfcm91dGVNYXRjaGVyPXJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLW1hdGNoZXJcIik7dmFyIF9yb3V0ZVJlZ2V4PXJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLXJlZ2V4XCIpO2Z1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKXtyZXR1cm4gb2JqJiZvYmouX19lc01vZHVsZT9vYmo6e2RlZmF1bHQ6b2JqfTt9Ly8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxubGV0IGRldGVjdERvbWFpbkxvY2FsZTtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtkZXRlY3REb21haW5Mb2NhbGU9cmVxdWlyZSgnLi4vaTE4bi9kZXRlY3QtZG9tYWluLWxvY2FsZScpLmRldGVjdERvbWFpbkxvY2FsZTt9Y29uc3QgYmFzZVBhdGg9cHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSHx8Jyc7ZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpe3JldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJykse2NhbmNlbGxlZDp0cnVlfSk7fWZ1bmN0aW9uIGFkZFBhdGhQcmVmaXgocGF0aCxwcmVmaXgpe3JldHVybiBwcmVmaXgmJnBhdGguc3RhcnRzV2l0aCgnLycpP3BhdGg9PT0nLyc/KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gpKHByZWZpeCk6YCR7cHJlZml4fSR7cGF0aE5vUXVlcnlIYXNoKHBhdGgpPT09Jy8nP3BhdGguc3Vic3RyaW5nKDEpOnBhdGh9YDpwYXRoO31mdW5jdGlvbiBnZXREb21haW5Mb2NhbGUocGF0aCxsb2NhbGUsbG9jYWxlcyxkb21haW5Mb2NhbGVzKXtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtsb2NhbGU9bG9jYWxlfHwoMCxfbm9ybWFsaXplTG9jYWxlUGF0aC5ub3JtYWxpemVMb2NhbGVQYXRoKShwYXRoLGxvY2FsZXMpLmRldGVjdGVkTG9jYWxlO2NvbnN0IGRldGVjdGVkRG9tYWluPWRldGVjdERvbWFpbkxvY2FsZShkb21haW5Mb2NhbGVzLHVuZGVmaW5lZCxsb2NhbGUpO2lmKGRldGVjdGVkRG9tYWluKXtyZXR1cm5gaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cD8nJzoncyd9Oi8vJHtkZXRlY3RlZERvbWFpbi5kb21haW59JHtiYXNlUGF0aHx8Jyd9JHtsb2NhbGU9PT1kZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlPycnOmAvJHtsb2NhbGV9YH0ke3BhdGh9YDt9cmV0dXJuIGZhbHNlO31yZXR1cm4gZmFsc2U7fWZ1bmN0aW9uIGFkZExvY2FsZShwYXRoLGxvY2FsZSxkZWZhdWx0TG9jYWxlKXtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtjb25zdCBwYXRobmFtZT1wYXRoTm9RdWVyeUhhc2gocGF0aCk7Y29uc3QgcGF0aExvd2VyPXBhdGhuYW1lLnRvTG93ZXJDYXNlKCk7Y29uc3QgbG9jYWxlTG93ZXI9bG9jYWxlJiZsb2NhbGUudG9Mb3dlckNhc2UoKTtyZXR1cm4gbG9jYWxlJiZsb2NhbGUhPT1kZWZhdWx0TG9jYWxlJiYhcGF0aExvd2VyLnN0YXJ0c1dpdGgoJy8nK2xvY2FsZUxvd2VyKycvJykmJnBhdGhMb3dlciE9PScvJytsb2NhbGVMb3dlcj9hZGRQYXRoUHJlZml4KHBhdGgsJy8nK2xvY2FsZSk6cGF0aDt9cmV0dXJuIHBhdGg7fWZ1bmN0aW9uIGRlbExvY2FsZShwYXRoLGxvY2FsZSl7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7Y29uc3QgcGF0aG5hbWU9cGF0aE5vUXVlcnlIYXNoKHBhdGgpO2NvbnN0IHBhdGhMb3dlcj1wYXRobmFtZS50b0xvd2VyQ2FzZSgpO2NvbnN0IGxvY2FsZUxvd2VyPWxvY2FsZSYmbG9jYWxlLnRvTG93ZXJDYXNlKCk7cmV0dXJuIGxvY2FsZSYmKHBhdGhMb3dlci5zdGFydHNXaXRoKCcvJytsb2NhbGVMb3dlcisnLycpfHxwYXRoTG93ZXI9PT0nLycrbG9jYWxlTG93ZXIpPyhwYXRobmFtZS5sZW5ndGg9PT1sb2NhbGUubGVuZ3RoKzE/Jy8nOicnKStwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoKzEpOnBhdGg7fXJldHVybiBwYXRoO31mdW5jdGlvbiBwYXRoTm9RdWVyeUhhc2gocGF0aCl7Y29uc3QgcXVlcnlJbmRleD1wYXRoLmluZGV4T2YoJz8nKTtjb25zdCBoYXNoSW5kZXg9cGF0aC5pbmRleE9mKCcjJyk7aWYocXVlcnlJbmRleD4tMXx8aGFzaEluZGV4Pi0xKXtwYXRoPXBhdGguc3Vic3RyaW5nKDAscXVlcnlJbmRleD4tMT9xdWVyeUluZGV4Omhhc2hJbmRleCk7fXJldHVybiBwYXRoO31mdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoKXtwYXRoPXBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtyZXR1cm4gcGF0aD09PWJhc2VQYXRofHxwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGgrJy8nKTt9ZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aCl7Ly8gd2Ugb25seSBhZGQgdGhlIGJhc2VwYXRoIG9uIHJlbGF0aXZlIHVybHNcbnJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsYmFzZVBhdGgpO31mdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoKXtwYXRoPXBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKTtpZighcGF0aC5zdGFydHNXaXRoKCcvJykpcGF0aD1gLyR7cGF0aH1gO3JldHVybiBwYXRoO30vKipcbiAqIERldGVjdHMgd2hldGhlciBhIGdpdmVuIHVybCBpcyByb3V0YWJsZSBieSB0aGUgTmV4dC5qcyByb3V0ZXIgKGJyb3dzZXIgb25seSkuXG4gKi9mdW5jdGlvbiBpc0xvY2FsVVJMKHVybCl7Ly8gcHJldmVudCBhIGh5ZHJhdGlvbiBtaXNtYXRjaCBvbiBocmVmIGZvciB1cmwgd2l0aCBhbmNob3IgcmVmc1xuaWYodXJsLnN0YXJ0c1dpdGgoJy8nKXx8dXJsLnN0YXJ0c1dpdGgoJyMnKXx8dXJsLnN0YXJ0c1dpdGgoJz8nKSlyZXR1cm4gdHJ1ZTt0cnl7Ly8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG5jb25zdCBsb2NhdGlvbk9yaWdpbj0oMCxfdXRpbHMuZ2V0TG9jYXRpb25PcmlnaW4pKCk7Y29uc3QgcmVzb2x2ZWQ9bmV3IFVSTCh1cmwsbG9jYXRpb25PcmlnaW4pO3JldHVybiByZXNvbHZlZC5vcmlnaW49PT1sb2NhdGlvbk9yaWdpbiYmaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpO31jYXRjaChfKXtyZXR1cm4gZmFsc2U7fX1mdW5jdGlvbiBpbnRlcnBvbGF0ZUFzKHJvdXRlLGFzUGF0aG5hbWUscXVlcnkpe2xldCBpbnRlcnBvbGF0ZWRSb3V0ZT0nJztjb25zdCBkeW5hbWljUmVnZXg9KDAsX3JvdXRlUmVnZXguZ2V0Um91dGVSZWdleCkocm91dGUpO2NvbnN0IGR5bmFtaWNHcm91cHM9ZHluYW1pY1JlZ2V4Lmdyb3Vwcztjb25zdCBkeW5hbWljTWF0Y2hlcz0vLyBUcnkgdG8gbWF0Y2ggdGhlIGR5bmFtaWMgcm91dGUgYWdhaW5zdCB0aGUgYXNQYXRoXG4oYXNQYXRobmFtZSE9PXJvdXRlPygwLF9yb3V0ZU1hdGNoZXIuZ2V0Um91dGVNYXRjaGVyKShkeW5hbWljUmVnZXgpKGFzUGF0aG5hbWUpOicnKXx8Ly8gRmFsbCBiYWNrIHRvIHJlYWRpbmcgdGhlIHZhbHVlcyBmcm9tIHRoZSBocmVmXG4vLyBUT0RPOiBzaG91bGQgdGhpcyB0YWtlIHByaW9yaXR5OyBhbHNvIG5lZWQgdG8gY2hhbmdlIGluIHRoZSByb3V0ZXIuXG5xdWVyeTtpbnRlcnBvbGF0ZWRSb3V0ZT1yb3V0ZTtjb25zdCBwYXJhbXM9T2JqZWN0LmtleXMoZHluYW1pY0dyb3Vwcyk7aWYoIXBhcmFtcy5ldmVyeShwYXJhbT0+e2xldCB2YWx1ZT1keW5hbWljTWF0Y2hlc1twYXJhbV18fCcnO2NvbnN0e3JlcGVhdCxvcHRpb25hbH09ZHluYW1pY0dyb3Vwc1twYXJhbV07Ly8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXG4vLyBUT0RPOiBtb3JlIHJvYnVzdCBoYW5kbGluZyBmb3IgdXNlci1lcnJvciAocGFzc2luZyBgL2ApXG5sZXQgcmVwbGFjZWQ9YFske3JlcGVhdD8nLi4uJzonJ30ke3BhcmFtfV1gO2lmKG9wdGlvbmFsKXtyZXBsYWNlZD1gJHshdmFsdWU/Jy8nOicnfVske3JlcGxhY2VkfV1gO31pZihyZXBlYXQmJiFBcnJheS5pc0FycmF5KHZhbHVlKSl2YWx1ZT1bdmFsdWVdO3JldHVybihvcHRpb25hbHx8cGFyYW0gaW4gZHluYW1pY01hdGNoZXMpJiYoLy8gSW50ZXJwb2xhdGUgZ3JvdXAgaW50byBkYXRhIFVSTCBpZiBwcmVzZW50XG5pbnRlcnBvbGF0ZWRSb3V0ZT1pbnRlcnBvbGF0ZWRSb3V0ZS5yZXBsYWNlKHJlcGxhY2VkLHJlcGVhdD92YWx1ZS5tYXAoLy8gdGhlc2UgdmFsdWVzIHNob3VsZCBiZSBmdWxseSBlbmNvZGVkIGluc3RlYWQgb2YganVzdFxuLy8gcGF0aCBkZWxpbWl0ZXIgZXNjYXBlZCBzaW5jZSB0aGV5IGFyZSBiZWluZyBpbnNlcnRlZFxuLy8gaW50byB0aGUgVVJMIGFuZCB3ZSBleHBlY3QgVVJMIGVuY29kZWQgc2VnbWVudHNcbi8vIHdoZW4gcGFyc2luZyBkeW5hbWljIHJvdXRlIHBhcmFtc1xuc2VnbWVudD0+ZW5jb2RlVVJJQ29tcG9uZW50KHNlZ21lbnQpKS5qb2luKCcvJyk6ZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSl8fCcvJyk7fSkpe2ludGVycG9sYXRlZFJvdXRlPScnOy8vIGRpZCBub3Qgc2F0aXNmeSBhbGwgcmVxdWlyZW1lbnRzXG4vLyBuLmIuIFdlIGlnbm9yZSB0aGlzIGVycm9yIGJlY2F1c2Ugd2UgaGFuZGxlIHdhcm5pbmcgZm9yIHRoaXMgY2FzZSBpblxuLy8gZGV2ZWxvcG1lbnQgaW4gdGhlIGA8TGluaz5gIGNvbXBvbmVudCBkaXJlY3RseS5cbn1yZXR1cm57cGFyYW1zLHJlc3VsdDppbnRlcnBvbGF0ZWRSb3V0ZX07fWZ1bmN0aW9uIG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSxwYXJhbXMpe2NvbnN0IGZpbHRlcmVkUXVlcnk9e307T2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goa2V5PT57aWYoIXBhcmFtcy5pbmNsdWRlcyhrZXkpKXtmaWx0ZXJlZFF1ZXJ5W2tleV09cXVlcnlba2V5XTt9fSk7cmV0dXJuIGZpbHRlcmVkUXVlcnk7fS8qKlxuICogUmVzb2x2ZXMgYSBnaXZlbiBoeXBlcmxpbmsgd2l0aCBhIGNlcnRhaW4gcm91dGVyIHN0YXRlIChiYXNlUGF0aCBub3QgaW5jbHVkZWQpLlxuICogUHJlc2VydmVzIGFic29sdXRlIHVybHMuXG4gKi9mdW5jdGlvbiByZXNvbHZlSHJlZihyb3V0ZXIsaHJlZixyZXNvbHZlQXMpey8vIHdlIHVzZSBhIGR1bW15IGJhc2UgdXJsIGZvciByZWxhdGl2ZSB1cmxzXG5sZXQgYmFzZTtjb25zdCB1cmxBc1N0cmluZz10eXBlb2YgaHJlZj09PSdzdHJpbmcnP2hyZWY6KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShocmVmKTt0cnl7YmFzZT1uZXcgVVJMKHVybEFzU3RyaW5nLnN0YXJ0c1dpdGgoJyMnKT9yb3V0ZXIuYXNQYXRoOnJvdXRlci5wYXRobmFtZSwnaHR0cDovL24nKTt9Y2F0Y2goXyl7Ly8gZmFsbGJhY2sgdG8gLyBmb3IgaW52YWxpZCBhc1BhdGggdmFsdWVzIGUuZy4gLy9cbmJhc2U9bmV3IFVSTCgnLycsJ2h0dHA6Ly9uJyk7fS8vIFJldHVybiBiZWNhdXNlIGl0IGNhbm5vdCBiZSByb3V0ZWQgYnkgdGhlIE5leHQuanMgcm91dGVyXG5pZighaXNMb2NhbFVSTCh1cmxBc1N0cmluZykpe3JldHVybiByZXNvbHZlQXM/W3VybEFzU3RyaW5nXTp1cmxBc1N0cmluZzt9dHJ5e2NvbnN0IGZpbmFsVXJsPW5ldyBVUkwodXJsQXNTdHJpbmcsYmFzZSk7ZmluYWxVcmwucGF0aG5hbWU9KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gpKGZpbmFsVXJsLnBhdGhuYW1lKTtsZXQgaW50ZXJwb2xhdGVkQXM9Jyc7aWYoKDAsX2lzRHluYW1pYy5pc0R5bmFtaWNSb3V0ZSkoZmluYWxVcmwucGF0aG5hbWUpJiZmaW5hbFVybC5zZWFyY2hQYXJhbXMmJnJlc29sdmVBcyl7Y29uc3QgcXVlcnk9KDAsX3F1ZXJ5c3RyaW5nLnNlYXJjaFBhcmFtc1RvVXJsUXVlcnkpKGZpbmFsVXJsLnNlYXJjaFBhcmFtcyk7Y29uc3R7cmVzdWx0LHBhcmFtc309aW50ZXJwb2xhdGVBcyhmaW5hbFVybC5wYXRobmFtZSxmaW5hbFVybC5wYXRobmFtZSxxdWVyeSk7aWYocmVzdWx0KXtpbnRlcnBvbGF0ZWRBcz0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHtwYXRobmFtZTpyZXN1bHQsaGFzaDpmaW5hbFVybC5oYXNoLHF1ZXJ5Om9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSxwYXJhbXMpfSk7fX0vLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuY29uc3QgcmVzb2x2ZWRIcmVmPWZpbmFsVXJsLm9yaWdpbj09PWJhc2Uub3JpZ2luP2ZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aCk6ZmluYWxVcmwuaHJlZjtyZXR1cm4gcmVzb2x2ZUFzP1tyZXNvbHZlZEhyZWYsaW50ZXJwb2xhdGVkQXN8fHJlc29sdmVkSHJlZl06cmVzb2x2ZWRIcmVmO31jYXRjaChfKXtyZXR1cm4gcmVzb2x2ZUFzP1t1cmxBc1N0cmluZ106dXJsQXNTdHJpbmc7fX1mdW5jdGlvbiBzdHJpcE9yaWdpbih1cmwpe2NvbnN0IG9yaWdpbj0oMCxfdXRpbHMuZ2V0TG9jYXRpb25PcmlnaW4pKCk7cmV0dXJuIHVybC5zdGFydHNXaXRoKG9yaWdpbik/dXJsLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKTp1cmw7fWZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXIsdXJsLGFzKXsvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbi8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG5sZXRbcmVzb2x2ZWRIcmVmLHJlc29sdmVkQXNdPXJlc29sdmVIcmVmKHJvdXRlcix1cmwsdHJ1ZSk7Y29uc3Qgb3JpZ2luPSgwLF91dGlscy5nZXRMb2NhdGlvbk9yaWdpbikoKTtjb25zdCBocmVmSGFkT3JpZ2luPXJlc29sdmVkSHJlZi5zdGFydHNXaXRoKG9yaWdpbik7Y29uc3QgYXNIYWRPcmlnaW49cmVzb2x2ZWRBcyYmcmVzb2x2ZWRBcy5zdGFydHNXaXRoKG9yaWdpbik7cmVzb2x2ZWRIcmVmPXN0cmlwT3JpZ2luKHJlc29sdmVkSHJlZik7cmVzb2x2ZWRBcz1yZXNvbHZlZEFzP3N0cmlwT3JpZ2luKHJlc29sdmVkQXMpOnJlc29sdmVkQXM7Y29uc3QgcHJlcGFyZWRVcmw9aHJlZkhhZE9yaWdpbj9yZXNvbHZlZEhyZWY6YWRkQmFzZVBhdGgocmVzb2x2ZWRIcmVmKTtjb25zdCBwcmVwYXJlZEFzPWFzP3N0cmlwT3JpZ2luKHJlc29sdmVIcmVmKHJvdXRlcixhcykpOnJlc29sdmVkQXN8fHJlc29sdmVkSHJlZjtyZXR1cm57dXJsOnByZXBhcmVkVXJsLGFzOmFzSGFkT3JpZ2luP3ByZXBhcmVkQXM6YWRkQmFzZVBhdGgocHJlcGFyZWRBcyl9O31mdW5jdGlvbiByZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lLHBhZ2VzKXtjb25zdCBjbGVhblBhdGhuYW1lPSgwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKSgoMCxfZGVub3JtYWxpemVQYWdlUGF0aC5kZW5vcm1hbGl6ZVBhZ2VQYXRoKShwYXRobmFtZSkpO2lmKGNsZWFuUGF0aG5hbWU9PT0nLzQwNCd8fGNsZWFuUGF0aG5hbWU9PT0nL19lcnJvcicpe3JldHVybiBwYXRobmFtZTt9Ly8gaGFuZGxlIHJlc29sdmluZyBocmVmIGZvciBkeW5hbWljIHJvdXRlc1xuaWYoIXBhZ2VzLmluY2x1ZGVzKGNsZWFuUGF0aG5hbWUpKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG5wYWdlcy5zb21lKHBhZ2U9PntpZigoMCxfaXNEeW5hbWljLmlzRHluYW1pY1JvdXRlKShwYWdlKSYmKDAsX3JvdXRlUmVnZXguZ2V0Um91dGVSZWdleCkocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lKSl7cGF0aG5hbWU9cGFnZTtyZXR1cm4gdHJ1ZTt9fSk7fXJldHVybigwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKShwYXRobmFtZSk7fWNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uPXByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04mJnR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJyYmJ3Njcm9sbFJlc3RvcmF0aW9uJ2luIHdpbmRvdy5oaXN0b3J5JiYhIWZ1bmN0aW9uKCl7dHJ5e2xldCB2PSdfX25leHQnOy8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbnJldHVybiBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHYsdiksc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSh2KSx0cnVlO31jYXRjaChuKXt9fSgpO2NvbnN0IFNTR19EQVRBX05PVF9GT1VORD1TeW1ib2woJ1NTR19EQVRBX05PVF9GT1VORCcpO2Z1bmN0aW9uIGZldGNoUmV0cnkodXJsLGF0dGVtcHRzKXtyZXR1cm4gZmV0Y2godXJsLHsvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbi8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuLy9cbi8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbi8vID4gb3B0aW9uLlxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuLy9cbi8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4vLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4vLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbmNyZWRlbnRpYWxzOidzYW1lLW9yaWdpbid9KS50aGVuKHJlcz0+e2lmKCFyZXMub2spe2lmKGF0dGVtcHRzPjEmJnJlcy5zdGF0dXM+PTUwMCl7cmV0dXJuIGZldGNoUmV0cnkodXJsLGF0dGVtcHRzLTEpO31pZihyZXMuc3RhdHVzPT09NDA0KXtyZXR1cm4gcmVzLmpzb24oKS50aGVuKGRhdGE9PntpZihkYXRhLm5vdEZvdW5kKXtyZXR1cm57bm90Rm91bmQ6U1NHX0RBVEFfTk9UX0ZPVU5EfTt9dGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKTt9KTt9dGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKTt9cmV0dXJuIHJlcy5qc29uKCk7fSk7fWZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsaXNTZXJ2ZXJSZW5kZXIpe3JldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLGlzU2VydmVyUmVuZGVyPzM6MSkuY2F0Y2goZXJyPT57Ly8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4vLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuLy8gbG9vcC5cbmlmKCFpc1NlcnZlclJlbmRlcil7KDAsX3JvdXRlTG9hZGVyLm1hcmtBc3NldEVycm9yKShlcnIpO310aHJvdyBlcnI7fSk7fWNsYXNzIFJvdXRlcnsvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi8gLy8gU3RhdGljIERhdGEgQ2FjaGVcbi8vIEluLWZsaWdodCBTZXJ2ZXIgRGF0YSBSZXF1ZXN0cywgZm9yIGRlZHVwaW5nXG5jb25zdHJ1Y3RvcihfcGF0aG5hbWUsX3F1ZXJ5LF9hcyx7aW5pdGlhbFByb3BzLHBhZ2VMb2FkZXIsQXBwLHdyYXBBcHAsQ29tcG9uZW50LGVycixzdWJzY3JpcHRpb24saXNGYWxsYmFjayxsb2NhbGUsbG9jYWxlcyxkZWZhdWx0TG9jYWxlLGRvbWFpbkxvY2FsZXMsaXNQcmV2aWV3fSl7dGhpcy5yb3V0ZT12b2lkIDA7dGhpcy5wYXRobmFtZT12b2lkIDA7dGhpcy5xdWVyeT12b2lkIDA7dGhpcy5hc1BhdGg9dm9pZCAwO3RoaXMuYmFzZVBhdGg9dm9pZCAwO3RoaXMuY29tcG9uZW50cz12b2lkIDA7dGhpcy5zZGM9e307dGhpcy5zZHI9e307dGhpcy5zdWI9dm9pZCAwO3RoaXMuY2xjPXZvaWQgMDt0aGlzLnBhZ2VMb2FkZXI9dm9pZCAwO3RoaXMuX2Jwcz12b2lkIDA7dGhpcy5ldmVudHM9dm9pZCAwO3RoaXMuX3dyYXBBcHA9dm9pZCAwO3RoaXMuaXNTc3I9dm9pZCAwO3RoaXMuaXNGYWxsYmFjaz12b2lkIDA7dGhpcy5faW5GbGlnaHRSb3V0ZT12b2lkIDA7dGhpcy5fc2hhbGxvdz12b2lkIDA7dGhpcy5sb2NhbGU9dm9pZCAwO3RoaXMubG9jYWxlcz12b2lkIDA7dGhpcy5kZWZhdWx0TG9jYWxlPXZvaWQgMDt0aGlzLmRvbWFpbkxvY2FsZXM9dm9pZCAwO3RoaXMuaXNSZWFkeT12b2lkIDA7dGhpcy5pc1ByZXZpZXc9dm9pZCAwO3RoaXMuaXNMb2NhbGVEb21haW49dm9pZCAwO3RoaXMuX2lkeD0wO3RoaXMub25Qb3BTdGF0ZT1lPT57Y29uc3Qgc3RhdGU9ZS5zdGF0ZTtpZighc3RhdGUpey8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4vLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4vL1xuLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbi8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbi8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG5jb25zdHtwYXRobmFtZSxxdWVyeX09dGhpczt0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoe3BhdGhuYW1lOmFkZEJhc2VQYXRoKHBhdGhuYW1lKSxxdWVyeX0pLCgwLF91dGlscy5nZXRVUkwpKCkpO3JldHVybjt9aWYoIXN0YXRlLl9fTil7cmV0dXJuO31sZXQgZm9yY2VkU2Nyb2xsO2NvbnN0e3VybCxhcyxvcHRpb25zLGlkeH09c3RhdGU7aWYocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTil7aWYobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pe2lmKHRoaXMuX2lkeCE9PWlkeCl7Ly8gU25hcHNob3QgY3VycmVudCBzY3JvbGwgcG9zaXRpb246XG50cnl7c2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nK3RoaXMuX2lkeCxKU09OLnN0cmluZ2lmeSh7eDpzZWxmLnBhZ2VYT2Zmc2V0LHk6c2VsZi5wYWdlWU9mZnNldH0pKTt9Y2F0Y2goX3VudXNlZCl7fS8vIFJlc3RvcmUgb2xkIHNjcm9sbCBwb3NpdGlvbjpcbnRyeXtjb25zdCB2PXNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJytpZHgpO2ZvcmNlZFNjcm9sbD1KU09OLnBhcnNlKHYpO31jYXRjaChfdW51c2VkMil7Zm9yY2VkU2Nyb2xsPXt4OjAseTowfTt9fX19dGhpcy5faWR4PWlkeDtjb25zdHtwYXRobmFtZX09KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkodXJsKTsvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbi8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuaWYodGhpcy5pc1NzciYmYXM9PT10aGlzLmFzUGF0aCYmcGF0aG5hbWU9PT10aGlzLnBhdGhuYW1lKXtyZXR1cm47fS8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbi8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG5pZih0aGlzLl9icHMmJiF0aGlzLl9icHMoc3RhdGUpKXtyZXR1cm47fXRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLHVybCxhcyxPYmplY3QuYXNzaWduKHt9LG9wdGlvbnMse3NoYWxsb3c6b3B0aW9ucy5zaGFsbG93JiZ0aGlzLl9zaGFsbG93LGxvY2FsZTpvcHRpb25zLmxvY2FsZXx8dGhpcy5kZWZhdWx0TG9jYWxlfSksZm9yY2VkU2Nyb2xsKTt9Oy8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxudGhpcy5yb3V0ZT0oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCkoX3BhdGhuYW1lKTsvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbnRoaXMuY29tcG9uZW50cz17fTsvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4vLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuaWYoX3BhdGhuYW1lIT09Jy9fZXJyb3InKXt0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV09e0NvbXBvbmVudCxpbml0aWFsOnRydWUscHJvcHM6aW5pdGlhbFByb3BzLGVycixfX05fU1NHOmluaXRpYWxQcm9wcyYmaW5pdGlhbFByb3BzLl9fTl9TU0csX19OX1NTUDppbml0aWFsUHJvcHMmJmluaXRpYWxQcm9wcy5fX05fU1NQfTt9dGhpcy5jb21wb25lbnRzWycvX2FwcCddPXtDb21wb25lbnQ6QXBwLHN0eWxlU2hlZXRzOlsvKiAvX2FwcCBkb2VzIG5vdCBuZWVkIGl0cyBzdHlsZXNoZWV0cyBtYW5hZ2VkICovXX07Ly8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbi8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG50aGlzLmV2ZW50cz1Sb3V0ZXIuZXZlbnRzO3RoaXMucGFnZUxvYWRlcj1wYWdlTG9hZGVyO3RoaXMucGF0aG5hbWU9X3BhdGhuYW1lO3RoaXMucXVlcnk9X3F1ZXJ5Oy8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4vLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuY29uc3QgYXV0b0V4cG9ydER5bmFtaWM9KDAsX2lzRHluYW1pYy5pc0R5bmFtaWNSb3V0ZSkoX3BhdGhuYW1lKSYmc2VsZi5fX05FWFRfREFUQV9fLmF1dG9FeHBvcnQ7dGhpcy5hc1BhdGg9YXV0b0V4cG9ydER5bmFtaWM/X3BhdGhuYW1lOl9hczt0aGlzLmJhc2VQYXRoPWJhc2VQYXRoO3RoaXMuc3ViPXN1YnNjcmlwdGlvbjt0aGlzLmNsYz1udWxsO3RoaXMuX3dyYXBBcHA9d3JhcEFwcDsvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4vLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxudGhpcy5pc1Nzcj10cnVlO3RoaXMuaXNGYWxsYmFjaz1pc0ZhbGxiYWNrO3RoaXMuaXNSZWFkeT0hIShzZWxmLl9fTkVYVF9EQVRBX18uZ3NzcHx8c2VsZi5fX05FWFRfREFUQV9fLmdpcHx8IWF1dG9FeHBvcnREeW5hbWljJiYhc2VsZi5sb2NhdGlvbi5zZWFyY2gmJiFwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTKTt0aGlzLmlzUHJldmlldz0hIWlzUHJldmlldzt0aGlzLmlzTG9jYWxlRG9tYWluPWZhbHNlO2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe3RoaXMubG9jYWxlPWxvY2FsZTt0aGlzLmxvY2FsZXM9bG9jYWxlczt0aGlzLmRlZmF1bHRMb2NhbGU9ZGVmYXVsdExvY2FsZTt0aGlzLmRvbWFpbkxvY2FsZXM9ZG9tYWluTG9jYWxlczt0aGlzLmlzTG9jYWxlRG9tYWluPSEhZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkxvY2FsZXMsc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSk7fWlmKHR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJyl7Ly8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbi8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG5pZihfYXMuc3Vic3RyKDAsMikhPT0nLy8nKXsvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG5jb25zdCBvcHRpb25zPXtsb2NhbGV9O29wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmPV9hcyE9PV9wYXRobmFtZTt0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoe3BhdGhuYW1lOmFkZEJhc2VQYXRoKF9wYXRobmFtZSkscXVlcnk6X3F1ZXJ5fSksKDAsX3V0aWxzLmdldFVSTCkoKSxvcHRpb25zKTt9d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJyx0aGlzLm9uUG9wU3RhdGUpOy8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4vLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbmlmKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pe2lmKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKXt3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbj0nbWFudWFsJzt9fX19cmVsb2FkKCl7d2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO30vKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL2JhY2soKXt3aW5kb3cuaGlzdG9yeS5iYWNrKCk7fS8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9wdXNoKHVybCxhcyxvcHRpb25zPXt9KXtpZihwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKXsvLyBUT0RPOiByZW1vdmUgaW4gdGhlIGZ1dHVyZSB3aGVuIHdlIHVwZGF0ZSBoaXN0b3J5IGJlZm9yZSByb3V0ZSBjaGFuZ2Vcbi8vIGlzIGNvbXBsZXRlLCBhcyB0aGUgcG9wc3RhdGUgZXZlbnQgc2hvdWxkIGhhbmRsZSB0aGlzIGNhcHR1cmUuXG5pZihtYW51YWxTY3JvbGxSZXN0b3JhdGlvbil7dHJ5ey8vIFNuYXBzaG90IHNjcm9sbCBwb3NpdGlvbiByaWdodCBiZWZvcmUgbmF2aWdhdGluZyB0byBhIG5ldyBwYWdlOlxuc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nK3RoaXMuX2lkeCxKU09OLnN0cmluZ2lmeSh7eDpzZWxmLnBhZ2VYT2Zmc2V0LHk6c2VsZi5wYWdlWU9mZnNldH0pKTt9Y2F0Y2goX3VudXNlZDMpe319fTsoe3VybCxhc309cHJlcGFyZVVybEFzKHRoaXMsdXJsLGFzKSk7cmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLHVybCxhcyxvcHRpb25zKTt9LyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL3JlcGxhY2UodXJsLGFzLG9wdGlvbnM9e30pezsoe3VybCxhc309cHJlcGFyZVVybEFzKHRoaXMsdXJsLGFzKSk7cmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLHVybCxhcyxvcHRpb25zKTt9YXN5bmMgY2hhbmdlKG1ldGhvZCx1cmwsYXMsb3B0aW9ucyxmb3JjZWRTY3JvbGwpe2lmKCFpc0xvY2FsVVJMKHVybCkpe3dpbmRvdy5sb2NhdGlvbi5ocmVmPXVybDtyZXR1cm4gZmFsc2U7fWNvbnN0IHNob3VsZFJlc29sdmVIcmVmPXVybD09PWFzfHxvcHRpb25zLl9ofHxvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZjsvLyBmb3Igc3RhdGljIHBhZ2VzIHdpdGggcXVlcnkgcGFyYW1zIGluIHRoZSBVUkwgd2UgZGVsYXlcbi8vIG1hcmtpbmcgdGhlIHJvdXRlciByZWFkeSB1bnRpbCBhZnRlciB0aGUgcXVlcnkgaXMgdXBkYXRlZFxuaWYob3B0aW9ucy5faCl7dGhpcy5pc1JlYWR5PXRydWU7fWxldCBsb2NhbGVDaGFuZ2U9b3B0aW9ucy5sb2NhbGUhPT10aGlzLmxvY2FsZTtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXt0aGlzLmxvY2FsZT1vcHRpb25zLmxvY2FsZT09PWZhbHNlP3RoaXMuZGVmYXVsdExvY2FsZTpvcHRpb25zLmxvY2FsZXx8dGhpcy5sb2NhbGU7aWYodHlwZW9mIG9wdGlvbnMubG9jYWxlPT09J3VuZGVmaW5lZCcpe29wdGlvbnMubG9jYWxlPXRoaXMubG9jYWxlO31jb25zdCBwYXJzZWRBcz0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKShoYXNCYXNlUGF0aChhcyk/ZGVsQmFzZVBhdGgoYXMpOmFzKTtjb25zdCBsb2NhbGVQYXRoUmVzdWx0PSgwLF9ub3JtYWxpemVMb2NhbGVQYXRoLm5vcm1hbGl6ZUxvY2FsZVBhdGgpKHBhcnNlZEFzLnBhdGhuYW1lLHRoaXMubG9jYWxlcyk7aWYobG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSl7dGhpcy5sb2NhbGU9bG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZTtwYXJzZWRBcy5wYXRobmFtZT1hZGRCYXNlUGF0aChwYXJzZWRBcy5wYXRobmFtZSk7YXM9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWRBcyk7dXJsPWFkZEJhc2VQYXRoKCgwLF9ub3JtYWxpemVMb2NhbGVQYXRoLm5vcm1hbGl6ZUxvY2FsZVBhdGgpKGhhc0Jhc2VQYXRoKHVybCk/ZGVsQmFzZVBhdGgodXJsKTp1cmwsdGhpcy5sb2NhbGVzKS5wYXRobmFtZSk7fWxldCBkaWROYXZpZ2F0ZT1mYWxzZTsvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbi8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuaWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7dmFyIF90aGlzJGxvY2FsZXM7Ly8gaWYgdGhlIGxvY2FsZSBpc24ndCBjb25maWd1cmVkIGhhcmQgbmF2aWdhdGUgdG8gc2hvdyA0MDQgcGFnZVxuaWYoISgoX3RoaXMkbG9jYWxlcz10aGlzLmxvY2FsZXMpIT1udWxsJiZfdGhpcyRsb2NhbGVzLmluY2x1ZGVzKHRoaXMubG9jYWxlKSkpe3BhcnNlZEFzLnBhdGhuYW1lPWFkZExvY2FsZShwYXJzZWRBcy5wYXRobmFtZSx0aGlzLmxvY2FsZSk7d2luZG93LmxvY2F0aW9uLmhyZWY9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWRBcyk7Ly8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3Jcbi8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG5kaWROYXZpZ2F0ZT10cnVlO319Y29uc3QgZGV0ZWN0ZWREb21haW49ZGV0ZWN0RG9tYWluTG9jYWxlKHRoaXMuZG9tYWluTG9jYWxlcyx1bmRlZmluZWQsdGhpcy5sb2NhbGUpOy8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG5pZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXsvLyBpZiB3ZSBhcmUgbmF2aWdhdGluZyB0byBhIGRvbWFpbiBsb2NhbGUgZW5zdXJlIHdlIHJlZGlyZWN0IHRvIHRoZVxuLy8gY29ycmVjdCBkb21haW5cbmlmKCFkaWROYXZpZ2F0ZSYmZGV0ZWN0ZWREb21haW4mJnRoaXMuaXNMb2NhbGVEb21haW4mJnNlbGYubG9jYXRpb24uaG9zdG5hbWUhPT1kZXRlY3RlZERvbWFpbi5kb21haW4pe2NvbnN0IGFzTm9CYXNlUGF0aD1kZWxCYXNlUGF0aChhcyk7d2luZG93LmxvY2F0aW9uLmhyZWY9YGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHA/Jyc6J3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7YWRkQmFzZVBhdGgoYCR7dGhpcy5sb2NhbGU9PT1kZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlPycnOmAvJHt0aGlzLmxvY2FsZX1gfSR7YXNOb0Jhc2VQYXRoPT09Jy8nPycnOmFzTm9CYXNlUGF0aH1gfHwnLycpfWA7Ly8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3Jcbi8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG5kaWROYXZpZ2F0ZT10cnVlO319aWYoZGlkTmF2aWdhdGUpe3JldHVybiBuZXcgUHJvbWlzZSgoKT0+e30pO319aWYoIW9wdGlvbnMuX2gpe3RoaXMuaXNTc3I9ZmFsc2U7fS8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbmlmKF91dGlscy5TVCl7cGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKTt9Y29uc3R7c2hhbGxvdz1mYWxzZX09b3B0aW9ucztjb25zdCByb3V0ZVByb3BzPXtzaGFsbG93fTtpZih0aGlzLl9pbkZsaWdodFJvdXRlKXt0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlLHJvdXRlUHJvcHMpO31hcz1hZGRCYXNlUGF0aChhZGRMb2NhbGUoaGFzQmFzZVBhdGgoYXMpP2RlbEJhc2VQYXRoKGFzKTphcyxvcHRpb25zLmxvY2FsZSx0aGlzLmRlZmF1bHRMb2NhbGUpKTtjb25zdCBjbGVhbmVkQXM9ZGVsTG9jYWxlKGhhc0Jhc2VQYXRoKGFzKT9kZWxCYXNlUGF0aChhcyk6YXMsdGhpcy5sb2NhbGUpO3RoaXMuX2luRmxpZ2h0Um91dGU9YXM7Ly8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2Vcbi8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cbi8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbi8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbi8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuaWYoIW9wdGlvbnMuX2gmJnRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykpe3RoaXMuYXNQYXRoPWNsZWFuZWRBcztSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsYXMscm91dGVQcm9wcyk7Ly8gVE9ETzogZG8gd2UgbmVlZCB0aGUgcmVzb2x2ZWQgaHJlZiB3aGVuIG9ubHkgYSBoYXNoIGNoYW5nZT9cbnRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLHVybCxhcyxvcHRpb25zKTt0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpO3RoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSxudWxsKTtSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsYXMscm91dGVQcm9wcyk7cmV0dXJuIHRydWU7fWxldCBwYXJzZWQ9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkodXJsKTtsZXR7cGF0aG5hbWUscXVlcnl9PXBhcnNlZDsvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXG4vLyBnZXQgdGhlaXIgcXVlcnkgcGFyYW1ldGVycyB0byBhbGxvdyBlbnN1cmluZyB0aGV5IGNhbiBiZSBwYXJzZWQgcHJvcGVybHlcbi8vIHdoZW4gcmV3cml0dGVuIHRvXG5sZXQgcGFnZXMscmV3cml0ZXM7dHJ5e3BhZ2VzPWF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpOyh7X19yZXdyaXRlczpyZXdyaXRlc309YXdhaXQoMCxfcm91dGVMb2FkZXIuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCkoKSk7fWNhdGNoKGVycil7Ly8gSWYgd2UgZmFpbCB0byByZXNvbHZlIHRoZSBwYWdlIGxpc3Qgb3IgY2xpZW50LWJ1aWxkIG1hbmlmZXN0LCB3ZSBtdXN0XG4vLyBkbyBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb246XG53aW5kb3cubG9jYXRpb24uaHJlZj1hcztyZXR1cm4gZmFsc2U7fS8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4vLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbi8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbi8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4vLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG5pZighdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpJiYhbG9jYWxlQ2hhbmdlKXttZXRob2Q9J3JlcGxhY2VTdGF0ZSc7fS8vIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgYXMgdmFsdWUgdXNpbmcgcmV3cml0ZXMgZm9yIGR5bmFtaWMgU1NHXG4vLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG5sZXQgcmVzb2x2ZWRBcz1hczsvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4vLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4vLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxucGF0aG5hbWU9cGF0aG5hbWU/KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gpKGRlbEJhc2VQYXRoKHBhdGhuYW1lKSk6cGF0aG5hbWU7aWYoc2hvdWxkUmVzb2x2ZUhyZWYmJnBhdGhuYW1lIT09Jy9fZXJyb3InKXs7b3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWY9dHJ1ZTtpZihwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTJiZhcy5zdGFydHNXaXRoKCcvJykpe2NvbnN0IHJld3JpdGVzUmVzdWx0PSgwLF9yZXNvbHZlUmV3cml0ZXMuZGVmYXVsdCkoYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGNsZWFuZWRBcyx0aGlzLmxvY2FsZSkpLHBhZ2VzLHJld3JpdGVzLHF1ZXJ5LHA9PnJlc29sdmVEeW5hbWljUm91dGUocCxwYWdlcyksdGhpcy5sb2NhbGVzKTtyZXNvbHZlZEFzPXJld3JpdGVzUmVzdWx0LmFzUGF0aDtpZihyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSYmcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKXsvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4vLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxucGF0aG5hbWU9cmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmO3BhcnNlZC5wYXRobmFtZT1hZGRCYXNlUGF0aChwYXRobmFtZSk7dXJsPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkKTt9fWVsc2V7cGFyc2VkLnBhdGhuYW1lPXJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWUscGFnZXMpO2lmKHBhcnNlZC5wYXRobmFtZSE9PXBhdGhuYW1lKXtwYXRobmFtZT1wYXJzZWQucGF0aG5hbWU7cGFyc2VkLnBhdGhuYW1lPWFkZEJhc2VQYXRoKHBhdGhuYW1lKTt1cmw9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWQpO319fWNvbnN0IHJvdXRlPSgwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKShwYXRobmFtZSk7aWYoIWlzTG9jYWxVUkwoYXMpKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7dGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGhyZWY6IFwiJHt1cmx9XCIgYW5kIGFzOiBcIiR7YXN9XCIsIHJlY2VpdmVkIHJlbGF0aXZlIGhyZWYgYW5kIGV4dGVybmFsIGFzYCtgXFxuU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvaW52YWxpZC1yZWxhdGl2ZS11cmwtZXh0ZXJuYWwtYXNgKTt9d2luZG93LmxvY2F0aW9uLmhyZWY9YXM7cmV0dXJuIGZhbHNlO31yZXNvbHZlZEFzPWRlbExvY2FsZShkZWxCYXNlUGF0aChyZXNvbHZlZEFzKSx0aGlzLmxvY2FsZSk7aWYoKDAsX2lzRHluYW1pYy5pc0R5bmFtaWNSb3V0ZSkocm91dGUpKXtjb25zdCBwYXJzZWRBcz0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKShyZXNvbHZlZEFzKTtjb25zdCBhc1BhdGhuYW1lPXBhcnNlZEFzLnBhdGhuYW1lO2NvbnN0IHJvdXRlUmVnZXg9KDAsX3JvdXRlUmVnZXguZ2V0Um91dGVSZWdleCkocm91dGUpO2NvbnN0IHJvdXRlTWF0Y2g9KDAsX3JvdXRlTWF0Y2hlci5nZXRSb3V0ZU1hdGNoZXIpKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpO2NvbnN0IHNob3VsZEludGVycG9sYXRlPXJvdXRlPT09YXNQYXRobmFtZTtjb25zdCBpbnRlcnBvbGF0ZWRBcz1zaG91bGRJbnRlcnBvbGF0ZT9pbnRlcnBvbGF0ZUFzKHJvdXRlLGFzUGF0aG5hbWUscXVlcnkpOnt9O2lmKCFyb3V0ZU1hdGNofHxzaG91bGRJbnRlcnBvbGF0ZSYmIWludGVycG9sYXRlZEFzLnJlc3VsdCl7Y29uc3QgbWlzc2luZ1BhcmFtcz1PYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKHBhcmFtPT4hcXVlcnlbcGFyYW1dKTtpZihtaXNzaW5nUGFyYW1zLmxlbmd0aD4wKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Y29uc29sZS53YXJuKGAke3Nob3VsZEludGVycG9sYXRlP2BJbnRlcnBvbGF0aW5nIGhyZWZgOmBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYGB9IGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGArYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKCcsICcpfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYCk7fXRocm93IG5ldyBFcnJvcigoc2hvdWxkSW50ZXJwb2xhdGU/YFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbignLCAnKX0pIHRvIGJlIGludGVycG9sYXRlZCBwcm9wZXJseS4gYDpgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgKStgUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy8ke3Nob3VsZEludGVycG9sYXRlPydocmVmLWludGVycG9sYXRpb24tZmFpbGVkJzonaW5jb21wYXRpYmxlLWhyZWYtYXMnfWApO319ZWxzZSBpZihzaG91bGRJbnRlcnBvbGF0ZSl7YXM9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShPYmplY3QuYXNzaWduKHt9LHBhcnNlZEFzLHtwYXRobmFtZTppbnRlcnBvbGF0ZWRBcy5yZXN1bHQscXVlcnk6b21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LGludGVycG9sYXRlZEFzLnBhcmFtcyl9KSk7fWVsc2V7Ly8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbk9iamVjdC5hc3NpZ24ocXVlcnkscm91dGVNYXRjaCk7fX1Sb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLGFzLHJvdXRlUHJvcHMpO3RyeXt2YXIgX3NlbGYkX19ORVhUX0RBVEFfXyRwLF9zZWxmJF9fTkVYVF9EQVRBX18kcDIsX29wdGlvbnMkc2Nyb2xsO2xldCByb3V0ZUluZm89YXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8ocm91dGUscGF0aG5hbWUscXVlcnksYXMscmVzb2x2ZWRBcyxyb3V0ZVByb3BzKTtsZXR7ZXJyb3IscHJvcHMsX19OX1NTRyxfX05fU1NQfT1yb3V0ZUluZm87Ly8gaGFuZGxlIHJlZGlyZWN0IG9uIGNsaWVudC10cmFuc2l0aW9uXG5pZigoX19OX1NTR3x8X19OX1NTUCkmJnByb3BzKXtpZihwcm9wcy5wYWdlUHJvcHMmJnByb3BzLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1Qpe2NvbnN0IGRlc3RpbmF0aW9uPXByb3BzLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1Q7Ly8gY2hlY2sgaWYgZGVzdGluYXRpb24gaXMgaW50ZXJuYWwgKHJlc29sdmVzIHRvIGEgcGFnZSkgYW5kIGF0dGVtcHRcbi8vIGNsaWVudC1uYXZpZ2F0aW9uIGlmIGl0IGlzIGZhbGxpbmcgYmFjayB0byBoYXJkIG5hdmlnYXRpb24gaWZcbi8vIGl0J3Mgbm90XG5pZihkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpe2NvbnN0IHBhcnNlZEhyZWY9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkoZGVzdGluYXRpb24pO3BhcnNlZEhyZWYucGF0aG5hbWU9cmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWRIcmVmLnBhdGhuYW1lLHBhZ2VzKTtpZihwYWdlcy5pbmNsdWRlcyhwYXJzZWRIcmVmLnBhdGhuYW1lKSl7Y29uc3R7dXJsOm5ld1VybCxhczpuZXdBc309cHJlcGFyZVVybEFzKHRoaXMsZGVzdGluYXRpb24sZGVzdGluYXRpb24pO3JldHVybiB0aGlzLmNoYW5nZShtZXRob2QsbmV3VXJsLG5ld0FzLG9wdGlvbnMpO319d2luZG93LmxvY2F0aW9uLmhyZWY9ZGVzdGluYXRpb247cmV0dXJuIG5ldyBQcm9taXNlKCgpPT57fSk7fXRoaXMuaXNQcmV2aWV3PSEhcHJvcHMuX19OX1BSRVZJRVc7Ly8gaGFuZGxlIFNTRyBkYXRhIDQwNFxuaWYocHJvcHMubm90Rm91bmQ9PT1TU0dfREFUQV9OT1RfRk9VTkQpe2xldCBub3RGb3VuZFJvdXRlO3RyeXthd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KCcvNDA0Jyk7bm90Rm91bmRSb3V0ZT0nLzQwNCc7fWNhdGNoKF8pe25vdEZvdW5kUm91dGU9Jy9fZXJyb3InO31yb3V0ZUluZm89YXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8obm90Rm91bmRSb3V0ZSxub3RGb3VuZFJvdXRlLHF1ZXJ5LGFzLHJlc29sdmVkQXMse3NoYWxsb3c6ZmFsc2V9KTt9fVJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsYXMscm91dGVQcm9wcyk7dGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsdXJsLGFzLG9wdGlvbnMpO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtjb25zdCBhcHBDb21wPXRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQ7d2luZG93Lm5leHQuaXNQcmVyZW5kZXJlZD1hcHBDb21wLmdldEluaXRpYWxQcm9wcz09PWFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyYmIXJvdXRlSW5mby5Db21wb25lbnQuZ2V0SW5pdGlhbFByb3BzO31pZihvcHRpb25zLl9oJiZwYXRobmFtZT09PScvX2Vycm9yJyYmKChfc2VsZiRfX05FWFRfREFUQV9fJHA9c2VsZi5fX05FWFRfREFUQV9fLnByb3BzKT09bnVsbD92b2lkIDA6KF9zZWxmJF9fTkVYVF9EQVRBX18kcDI9X3NlbGYkX19ORVhUX0RBVEFfXyRwLnBhZ2VQcm9wcyk9PW51bGw/dm9pZCAwOl9zZWxmJF9fTkVYVF9EQVRBX18kcDIuc3RhdHVzQ29kZSk9PT01MDAmJnByb3BzIT1udWxsJiZwcm9wcy5wYWdlUHJvcHMpey8vIGVuc3VyZSBzdGF0dXNDb2RlIGlzIHN0aWxsIGNvcnJlY3QgZm9yIHN0YXRpYyA1MDAgcGFnZVxuLy8gd2hlbiB1cGRhdGluZyBxdWVyeSBpbmZvcm1hdGlvblxucHJvcHMucGFnZVByb3BzLnN0YXR1c0NvZGU9NTAwO30vLyBzaGFsbG93IHJvdXRpbmcgaXMgb25seSBhbGxvd2VkIGZvciBzYW1lIHBhZ2UgVVJMIGNoYW5nZXMuXG5jb25zdCBpc1ZhbGlkU2hhbGxvd1JvdXRlPW9wdGlvbnMuc2hhbGxvdyYmdGhpcy5yb3V0ZT09PXJvdXRlO2NvbnN0IHNob3VsZFNjcm9sbD0oX29wdGlvbnMkc2Nyb2xsPW9wdGlvbnMuc2Nyb2xsKSE9bnVsbD9fb3B0aW9ucyRzY3JvbGw6IWlzVmFsaWRTaGFsbG93Um91dGU7Y29uc3QgcmVzZXRTY3JvbGw9c2hvdWxkU2Nyb2xsP3t4OjAseTowfTpudWxsO2F3YWl0IHRoaXMuc2V0KHJvdXRlLHBhdGhuYW1lLHF1ZXJ5LGNsZWFuZWRBcyxyb3V0ZUluZm8sZm9yY2VkU2Nyb2xsIT1udWxsP2ZvcmNlZFNjcm9sbDpyZXNldFNjcm9sbCkuY2F0Y2goZT0+e2lmKGUuY2FuY2VsbGVkKWVycm9yPWVycm9yfHxlO2Vsc2UgdGhyb3cgZTt9KTtpZihlcnJvcil7Um91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJyxlcnJvcixjbGVhbmVkQXMscm91dGVQcm9wcyk7dGhyb3cgZXJyb3I7fWlmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe2lmKHRoaXMubG9jYWxlKXtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubGFuZz10aGlzLmxvY2FsZTt9fVJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsYXMscm91dGVQcm9wcyk7cmV0dXJuIHRydWU7fWNhdGNoKGVycil7aWYoZXJyLmNhbmNlbGxlZCl7cmV0dXJuIGZhbHNlO310aHJvdyBlcnI7fX1jaGFuZ2VTdGF0ZShtZXRob2QsdXJsLGFzLG9wdGlvbnM9e30pe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtpZih0eXBlb2Ygd2luZG93Lmhpc3Rvcnk9PT0ndW5kZWZpbmVkJyl7Y29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKTtyZXR1cm47fWlmKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdPT09J3VuZGVmaW5lZCcpe2NvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYCk7cmV0dXJuO319aWYobWV0aG9kIT09J3B1c2hTdGF0ZSd8fCgwLF91dGlscy5nZXRVUkwpKCkhPT1hcyl7dGhpcy5fc2hhbGxvdz1vcHRpb25zLnNoYWxsb3c7d2luZG93Lmhpc3RvcnlbbWV0aG9kXSh7dXJsLGFzLG9wdGlvbnMsX19OOnRydWUsaWR4OnRoaXMuX2lkeD1tZXRob2QhPT0ncHVzaFN0YXRlJz90aGlzLl9pZHg6dGhpcy5faWR4KzF9LC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4nJyxhcyk7fX1hc3luYyBoYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIscGF0aG5hbWUscXVlcnksYXMscm91dGVQcm9wcyxsb2FkRXJyb3JGYWlsKXtpZihlcnIuY2FuY2VsbGVkKXsvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xudGhyb3cgZXJyO31pZigoMCxfcm91dGVMb2FkZXIuaXNBc3NldEVycm9yKShlcnIpfHxsb2FkRXJyb3JGYWlsKXtSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLGVycixhcyxyb3V0ZVByb3BzKTsvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbi8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2Vcbi8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxud2luZG93LmxvY2F0aW9uLmhyZWY9YXM7Ly8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4vLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxudGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpO310cnl7bGV0IENvbXBvbmVudDtsZXQgc3R5bGVTaGVldHM7bGV0IHByb3BzO2lmKHR5cGVvZiBDb21wb25lbnQ9PT0ndW5kZWZpbmVkJ3x8dHlwZW9mIHN0eWxlU2hlZXRzPT09J3VuZGVmaW5lZCcpezsoe3BhZ2U6Q29tcG9uZW50LHN0eWxlU2hlZXRzfT1hd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KCcvX2Vycm9yJykpO31jb25zdCByb3V0ZUluZm89e3Byb3BzLENvbXBvbmVudCxzdHlsZVNoZWV0cyxlcnIsZXJyb3I6ZXJyfTtpZighcm91dGVJbmZvLnByb3BzKXt0cnl7cm91dGVJbmZvLnByb3BzPWF3YWl0IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCx7ZXJyLHBhdGhuYW1lLHF1ZXJ5fSk7fWNhdGNoKGdpcEVycil7Y29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJyxnaXBFcnIpO3JvdXRlSW5mby5wcm9wcz17fTt9fXJldHVybiByb3V0ZUluZm87fWNhdGNoKHJvdXRlSW5mb0Vycil7cmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3Iocm91dGVJbmZvRXJyLHBhdGhuYW1lLHF1ZXJ5LGFzLHJvdXRlUHJvcHMsdHJ1ZSk7fX1hc3luYyBnZXRSb3V0ZUluZm8ocm91dGUscGF0aG5hbWUscXVlcnksYXMscmVzb2x2ZWRBcyxyb3V0ZVByb3BzKXt0cnl7Y29uc3QgZXhpc3RpbmdSb3V0ZUluZm89dGhpcy5jb21wb25lbnRzW3JvdXRlXTtpZihyb3V0ZVByb3BzLnNoYWxsb3cmJmV4aXN0aW5nUm91dGVJbmZvJiZ0aGlzLnJvdXRlPT09cm91dGUpe3JldHVybiBleGlzdGluZ1JvdXRlSW5mbzt9Y29uc3QgY2FjaGVkUm91dGVJbmZvPWV4aXN0aW5nUm91dGVJbmZvJiYnaW5pdGlhbCdpbiBleGlzdGluZ1JvdXRlSW5mbz91bmRlZmluZWQ6ZXhpc3RpbmdSb3V0ZUluZm87Y29uc3Qgcm91dGVJbmZvPWNhY2hlZFJvdXRlSW5mbz9jYWNoZWRSb3V0ZUluZm86YXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbihyZXM9Pih7Q29tcG9uZW50OnJlcy5wYWdlLHN0eWxlU2hlZXRzOnJlcy5zdHlsZVNoZWV0cyxfX05fU1NHOnJlcy5tb2QuX19OX1NTRyxfX05fU1NQOnJlcy5tb2QuX19OX1NTUH0pKTtjb25zdHtDb21wb25lbnQsX19OX1NTRyxfX05fU1NQfT1yb3V0ZUluZm87aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2NvbnN0e2lzVmFsaWRFbGVtZW50VHlwZX09cmVxdWlyZSgncmVhY3QtaXMnKTtpZighaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpe3Rocm93IG5ldyBFcnJvcihgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgKTt9fWxldCBkYXRhSHJlZjtpZihfX05fU1NHfHxfX05fU1NQKXtkYXRhSHJlZj10aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoKDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKSh7cGF0aG5hbWUscXVlcnl9KSxyZXNvbHZlZEFzLF9fTl9TU0csdGhpcy5sb2NhbGUpO31jb25zdCBwcm9wcz1hd2FpdCB0aGlzLl9nZXREYXRhKCgpPT5fX05fU1NHP3RoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYpOl9fTl9TU1A/dGhpcy5fZ2V0U2VydmVyRGF0YShkYXRhSHJlZik6dGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG57cGF0aG5hbWUscXVlcnksYXNQYXRoOmFzLGxvY2FsZTp0aGlzLmxvY2FsZSxsb2NhbGVzOnRoaXMubG9jYWxlcyxkZWZhdWx0TG9jYWxlOnRoaXMuZGVmYXVsdExvY2FsZX0pKTtyb3V0ZUluZm8ucHJvcHM9cHJvcHM7dGhpcy5jb21wb25lbnRzW3JvdXRlXT1yb3V0ZUluZm87cmV0dXJuIHJvdXRlSW5mbzt9Y2F0Y2goZXJyKXtyZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIscGF0aG5hbWUscXVlcnksYXMscm91dGVQcm9wcyk7fX1zZXQocm91dGUscGF0aG5hbWUscXVlcnksYXMsZGF0YSxyZXNldFNjcm9sbCl7dGhpcy5pc0ZhbGxiYWNrPWZhbHNlO3RoaXMucm91dGU9cm91dGU7dGhpcy5wYXRobmFtZT1wYXRobmFtZTt0aGlzLnF1ZXJ5PXF1ZXJ5O3RoaXMuYXNQYXRoPWFzO3JldHVybiB0aGlzLm5vdGlmeShkYXRhLHJlc2V0U2Nyb2xsKTt9LyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL2JlZm9yZVBvcFN0YXRlKGNiKXt0aGlzLl9icHM9Y2I7fW9ubHlBSGFzaENoYW5nZShhcyl7aWYoIXRoaXMuYXNQYXRoKXJldHVybiBmYWxzZTtjb25zdFtvbGRVcmxOb0hhc2gsb2xkSGFzaF09dGhpcy5hc1BhdGguc3BsaXQoJyMnKTtjb25zdFtuZXdVcmxOb0hhc2gsbmV3SGFzaF09YXMuc3BsaXQoJyMnKTsvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG5pZihuZXdIYXNoJiZvbGRVcmxOb0hhc2g9PT1uZXdVcmxOb0hhc2gmJm9sZEhhc2g9PT1uZXdIYXNoKXtyZXR1cm4gdHJ1ZTt9Ly8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuaWYob2xkVXJsTm9IYXNoIT09bmV3VXJsTm9IYXNoKXtyZXR1cm4gZmFsc2U7fS8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbi8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG5yZXR1cm4gb2xkSGFzaCE9PW5ld0hhc2g7fXNjcm9sbFRvSGFzaChhcyl7Y29uc3RbLGhhc2hdPWFzLnNwbGl0KCcjJyk7Ly8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlIG9yIGAjdG9wYFxuLy8gVG8gbWlycm9yIGJyb3dzZXJzXG5pZihoYXNoPT09Jyd8fGhhc2g9PT0ndG9wJyl7d2luZG93LnNjcm9sbFRvKDAsMCk7cmV0dXJuO30vLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuY29uc3QgaWRFbD1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKTtpZihpZEVsKXtpZEVsLnNjcm9sbEludG9WaWV3KCk7cmV0dXJuO30vLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbi8vIFRvIG1pcnJvciBicm93c2Vyc1xuY29uc3QgbmFtZUVsPWRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdO2lmKG5hbWVFbCl7bmFtZUVsLnNjcm9sbEludG9WaWV3KCk7fX11cmxJc05ldyhhc1BhdGgpe3JldHVybiB0aGlzLmFzUGF0aCE9PWFzUGF0aDt9LyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi9hc3luYyBwcmVmZXRjaCh1cmwsYXNQYXRoPXVybCxvcHRpb25zPXt9KXtsZXQgcGFyc2VkPSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKHVybCk7bGV0e3BhdGhuYW1lfT1wYXJzZWQ7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7aWYob3B0aW9ucy5sb2NhbGU9PT1mYWxzZSl7cGF0aG5hbWU9KDAsX25vcm1hbGl6ZUxvY2FsZVBhdGgubm9ybWFsaXplTG9jYWxlUGF0aCkocGF0aG5hbWUsdGhpcy5sb2NhbGVzKS5wYXRobmFtZTtwYXJzZWQucGF0aG5hbWU9cGF0aG5hbWU7dXJsPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkKTtsZXQgcGFyc2VkQXM9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkoYXNQYXRoKTtjb25zdCBsb2NhbGVQYXRoUmVzdWx0PSgwLF9ub3JtYWxpemVMb2NhbGVQYXRoLm5vcm1hbGl6ZUxvY2FsZVBhdGgpKHBhcnNlZEFzLnBhdGhuYW1lLHRoaXMubG9jYWxlcyk7cGFyc2VkQXMucGF0aG5hbWU9bG9jYWxlUGF0aFJlc3VsdC5wYXRobmFtZTtvcHRpb25zLmxvY2FsZT1sb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlfHx0aGlzLmRlZmF1bHRMb2NhbGU7YXNQYXRoPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkQXMpO319Y29uc3QgcGFnZXM9YXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KCk7bGV0IHJlc29sdmVkQXM9YXNQYXRoO2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMmJmFzUGF0aC5zdGFydHNXaXRoKCcvJykpe2xldCByZXdyaXRlczsoe19fcmV3cml0ZXM6cmV3cml0ZXN9PWF3YWl0KDAsX3JvdXRlTG9hZGVyLmdldENsaWVudEJ1aWxkTWFuaWZlc3QpKCkpO2NvbnN0IHJld3JpdGVzUmVzdWx0PSgwLF9yZXNvbHZlUmV3cml0ZXMuZGVmYXVsdCkoYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGFzUGF0aCx0aGlzLmxvY2FsZSkpLHBhZ2VzLHJld3JpdGVzLHBhcnNlZC5xdWVyeSxwPT5yZXNvbHZlRHluYW1pY1JvdXRlKHAscGFnZXMpLHRoaXMubG9jYWxlcyk7cmVzb2x2ZWRBcz1kZWxMb2NhbGUoZGVsQmFzZVBhdGgocmV3cml0ZXNSZXN1bHQuYXNQYXRoKSx0aGlzLmxvY2FsZSk7aWYocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UmJnJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZil7Ly8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbnBhdGhuYW1lPXJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZjtwYXJzZWQucGF0aG5hbWU9cGF0aG5hbWU7dXJsPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkKTt9fWVsc2V7cGFyc2VkLnBhdGhuYW1lPXJlc29sdmVEeW5hbWljUm91dGUocGFyc2VkLnBhdGhuYW1lLHBhZ2VzKTtpZihwYXJzZWQucGF0aG5hbWUhPT1wYXRobmFtZSl7cGF0aG5hbWU9cGFyc2VkLnBhdGhuYW1lO3BhcnNlZC5wYXRobmFtZT1wYXRobmFtZTt1cmw9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWQpO319Y29uc3Qgcm91dGU9KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gpKHBhdGhuYW1lKTsvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG5pZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7cmV0dXJuO31hd2FpdCBQcm9taXNlLmFsbChbdGhpcy5wYWdlTG9hZGVyLl9pc1NzZyhyb3V0ZSkudGhlbihpc1NzZz0+e3JldHVybiBpc1NzZz90aGlzLl9nZXRTdGF0aWNEYXRhKHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZih1cmwscmVzb2x2ZWRBcyx0cnVlLHR5cGVvZiBvcHRpb25zLmxvY2FsZSE9PSd1bmRlZmluZWQnP29wdGlvbnMubG9jYWxlOnRoaXMubG9jYWxlKSk6ZmFsc2U7fSksdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHk/J2xvYWRQYWdlJzoncHJlZmV0Y2gnXShyb3V0ZSldKTt9YXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGUpe2xldCBjYW5jZWxsZWQ9ZmFsc2U7Y29uc3QgY2FuY2VsPXRoaXMuY2xjPSgpPT57Y2FuY2VsbGVkPXRydWU7fTtjb25zdCBjb21wb25lbnRSZXN1bHQ9YXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKTtpZihjYW5jZWxsZWQpe2NvbnN0IGVycm9yPW5ldyBFcnJvcihgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYCk7ZXJyb3IuY2FuY2VsbGVkPXRydWU7dGhyb3cgZXJyb3I7fWlmKGNhbmNlbD09PXRoaXMuY2xjKXt0aGlzLmNsYz1udWxsO31yZXR1cm4gY29tcG9uZW50UmVzdWx0O31fZ2V0RGF0YShmbil7bGV0IGNhbmNlbGxlZD1mYWxzZTtjb25zdCBjYW5jZWw9KCk9PntjYW5jZWxsZWQ9dHJ1ZTt9O3RoaXMuY2xjPWNhbmNlbDtyZXR1cm4gZm4oKS50aGVuKGRhdGE9PntpZihjYW5jZWw9PT10aGlzLmNsYyl7dGhpcy5jbGM9bnVsbDt9aWYoY2FuY2VsbGVkKXtjb25zdCBlcnI9bmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJyk7ZXJyLmNhbmNlbGxlZD10cnVlO3Rocm93IGVycjt9cmV0dXJuIGRhdGE7fSk7fV9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmKXtjb25zdHtocmVmOmNhY2hlS2V5fT1uZXcgVVJMKGRhdGFIcmVmLHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtpZihwcm9jZXNzLmVudi5OT0RFX0VOVj09PSdwcm9kdWN0aW9uJyYmIXRoaXMuaXNQcmV2aWV3JiZ0aGlzLnNkY1tjYWNoZUtleV0pe3JldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKTt9cmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsdGhpcy5pc1NzcikudGhlbihkYXRhPT57dGhpcy5zZGNbY2FjaGVLZXldPWRhdGE7cmV0dXJuIGRhdGE7fSk7fV9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmKXtjb25zdHtocmVmOnJlc291cmNlS2V5fT1uZXcgVVJMKGRhdGFIcmVmLHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtpZih0aGlzLnNkcltyZXNvdXJjZUtleV0pe3JldHVybiB0aGlzLnNkcltyZXNvdXJjZUtleV07fXJldHVybiB0aGlzLnNkcltyZXNvdXJjZUtleV09ZmV0Y2hOZXh0RGF0YShkYXRhSHJlZix0aGlzLmlzU3NyKS50aGVuKGRhdGE9PntkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldO3JldHVybiBkYXRhO30pLmNhdGNoKGVycj0+e2RlbGV0ZSB0aGlzLnNkcltyZXNvdXJjZUtleV07dGhyb3cgZXJyO30pO31nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LGN0eCl7Y29uc3R7Q29tcG9uZW50OkFwcH09dGhpcy5jb21wb25lbnRzWycvX2FwcCddO2NvbnN0IEFwcFRyZWU9dGhpcy5fd3JhcEFwcChBcHApO2N0eC5BcHBUcmVlPUFwcFRyZWU7cmV0dXJuKDAsX3V0aWxzLmxvYWRHZXRJbml0aWFsUHJvcHMpKEFwcCx7QXBwVHJlZSxDb21wb25lbnQscm91dGVyOnRoaXMsY3R4fSk7fWFib3J0Q29tcG9uZW50TG9hZChhcyxyb3V0ZVByb3BzKXtpZih0aGlzLmNsYyl7Um91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJyxidWlsZENhbmNlbGxhdGlvbkVycm9yKCksYXMscm91dGVQcm9wcyk7dGhpcy5jbGMoKTt0aGlzLmNsYz1udWxsO319bm90aWZ5KGRhdGEscmVzZXRTY3JvbGwpe3JldHVybiB0aGlzLnN1YihkYXRhLHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQscmVzZXRTY3JvbGwpO319ZXhwb3J0cy5kZWZhdWx0PVJvdXRlcjtSb3V0ZXIuZXZlbnRzPSgwLF9taXR0LmRlZmF1bHQpKCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5mb3JtYXRVcmw9Zm9ybWF0VXJsO3ZhciBxdWVyeXN0cmluZz1faW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi9xdWVyeXN0cmluZ1wiKSk7ZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCl7aWYodHlwZW9mIFdlYWtNYXAhPT1cImZ1bmN0aW9uXCIpcmV0dXJuIG51bGw7dmFyIGNhY2hlPW5ldyBXZWFrTWFwKCk7X2dldFJlcXVpcmVXaWxkY2FyZENhY2hlPWZ1bmN0aW9uKCl7cmV0dXJuIGNhY2hlO307cmV0dXJuIGNhY2hlO31mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmope2lmKG9iaiYmb2JqLl9fZXNNb2R1bGUpe3JldHVybiBvYmo7fWlmKG9iaj09PW51bGx8fHR5cGVvZiBvYmohPT1cIm9iamVjdFwiJiZ0eXBlb2Ygb2JqIT09XCJmdW5jdGlvblwiKXtyZXR1cm57ZGVmYXVsdDpvYmp9O312YXIgY2FjaGU9X2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7aWYoY2FjaGUmJmNhY2hlLmhhcyhvYmopKXtyZXR1cm4gY2FjaGUuZ2V0KG9iaik7fXZhciBuZXdPYmo9e307dmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvcj1PYmplY3QuZGVmaW5lUHJvcGVydHkmJk9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7Zm9yKHZhciBrZXkgaW4gb2JqKXtpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLGtleSkpe3ZhciBkZXNjPWhhc1Byb3BlcnR5RGVzY3JpcHRvcj9PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaixrZXkpOm51bGw7aWYoZGVzYyYmKGRlc2MuZ2V0fHxkZXNjLnNldCkpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosa2V5LGRlc2MpO31lbHNle25ld09ialtrZXldPW9ialtrZXldO319fW5ld09iai5kZWZhdWx0PW9iajtpZihjYWNoZSl7Y2FjaGUuc2V0KG9iaixuZXdPYmopO31yZXR1cm4gbmV3T2JqO30vLyBGb3JtYXQgZnVuY3Rpb24gbW9kaWZpZWQgZnJvbSBub2RlanNcbi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuY29uc3Qgc2xhc2hlZFByb3RvY29scz0vaHR0cHM/fGZ0cHxnb3BoZXJ8ZmlsZS87ZnVuY3Rpb24gZm9ybWF0VXJsKHVybE9iail7bGV0e2F1dGgsaG9zdG5hbWV9PXVybE9iajtsZXQgcHJvdG9jb2w9dXJsT2JqLnByb3RvY29sfHwnJztsZXQgcGF0aG5hbWU9dXJsT2JqLnBhdGhuYW1lfHwnJztsZXQgaGFzaD11cmxPYmouaGFzaHx8Jyc7bGV0IHF1ZXJ5PXVybE9iai5xdWVyeXx8Jyc7bGV0IGhvc3Q9ZmFsc2U7YXV0aD1hdXRoP2VuY29kZVVSSUNvbXBvbmVudChhdXRoKS5yZXBsYWNlKC8lM0EvaSwnOicpKydAJzonJztpZih1cmxPYmouaG9zdCl7aG9zdD1hdXRoK3VybE9iai5ob3N0O31lbHNlIGlmKGhvc3RuYW1lKXtob3N0PWF1dGgrKH5ob3N0bmFtZS5pbmRleE9mKCc6Jyk/YFske2hvc3RuYW1lfV1gOmhvc3RuYW1lKTtpZih1cmxPYmoucG9ydCl7aG9zdCs9JzonK3VybE9iai5wb3J0O319aWYocXVlcnkmJnR5cGVvZiBxdWVyeT09PSdvYmplY3QnKXtxdWVyeT1TdHJpbmcocXVlcnlzdHJpbmcudXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhxdWVyeSkpO31sZXQgc2VhcmNoPXVybE9iai5zZWFyY2h8fHF1ZXJ5JiZgPyR7cXVlcnl9YHx8Jyc7aWYocHJvdG9jb2wmJnByb3RvY29sLnN1YnN0cigtMSkhPT0nOicpcHJvdG9jb2wrPSc6JztpZih1cmxPYmouc2xhc2hlc3x8KCFwcm90b2NvbHx8c2xhc2hlZFByb3RvY29scy50ZXN0KHByb3RvY29sKSkmJmhvc3QhPT1mYWxzZSl7aG9zdD0nLy8nKyhob3N0fHwnJyk7aWYocGF0aG5hbWUmJnBhdGhuYW1lWzBdIT09Jy8nKXBhdGhuYW1lPScvJytwYXRobmFtZTt9ZWxzZSBpZighaG9zdCl7aG9zdD0nJzt9aWYoaGFzaCYmaGFzaFswXSE9PScjJyloYXNoPScjJytoYXNoO2lmKHNlYXJjaCYmc2VhcmNoWzBdIT09Jz8nKXNlYXJjaD0nPycrc2VhcmNoO3BhdGhuYW1lPXBhdGhuYW1lLnJlcGxhY2UoL1s/I10vZyxlbmNvZGVVUklDb21wb25lbnQpO3NlYXJjaD1zZWFyY2gucmVwbGFjZSgnIycsJyUyMycpO3JldHVybmAke3Byb3RvY29sfSR7aG9zdH0ke3BhdGhuYW1lfSR7c2VhcmNofSR7aGFzaH1gO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZvcm1hdC11cmwuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5pc0R5bmFtaWNSb3V0ZT1pc0R5bmFtaWNSb3V0ZTsvLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFPS9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvO2Z1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlKXtyZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pcy1keW5hbWljLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMucGFyc2VSZWxhdGl2ZVVybD1wYXJzZVJlbGF0aXZlVXJsO3ZhciBfdXRpbHM9cmVxdWlyZShcIi4uLy4uL3V0aWxzXCIpO3ZhciBfcXVlcnlzdHJpbmc9cmVxdWlyZShcIi4vcXVlcnlzdHJpbmdcIik7LyoqXG4gKiBQYXJzZXMgcGF0aC1yZWxhdGl2ZSB1cmxzIChlLmcuIGAvaGVsbG8vd29ybGQ/Zm9vPWJhcmApLiBJZiB1cmwgaXNuJ3QgcGF0aC1yZWxhdGl2ZVxuICogKGUuZy4gYC4vaGVsbG9gKSB0aGVuIGF0IGxlYXN0IGJhc2UgbXVzdCBiZS5cbiAqIEFic29sdXRlIHVybHMgYXJlIHJlamVjdGVkIHdpdGggb25lIGV4Y2VwdGlvbiwgaW4gdGhlIGJyb3dzZXIsIGFic29sdXRlIHVybHMgdGhhdCBhcmUgb25cbiAqIHRoZSBjdXJyZW50IG9yaWdpbiB3aWxsIGJlIHBhcnNlZCBhcyByZWxhdGl2ZVxuICovZnVuY3Rpb24gcGFyc2VSZWxhdGl2ZVVybCh1cmwsYmFzZSl7Y29uc3QgZ2xvYmFsQmFzZT1uZXcgVVJMKHR5cGVvZiB3aW5kb3c9PT0ndW5kZWZpbmVkJz8naHR0cDovL24nOigwLF91dGlscy5nZXRMb2NhdGlvbk9yaWdpbikoKSk7Y29uc3QgcmVzb2x2ZWRCYXNlPWJhc2U/bmV3IFVSTChiYXNlLGdsb2JhbEJhc2UpOmdsb2JhbEJhc2U7Y29uc3R7cGF0aG5hbWUsc2VhcmNoUGFyYW1zLHNlYXJjaCxoYXNoLGhyZWYsb3JpZ2lufT1uZXcgVVJMKHVybCxyZXNvbHZlZEJhc2UpO2lmKG9yaWdpbiE9PWdsb2JhbEJhc2Uub3JpZ2luKXt0aHJvdyBuZXcgRXJyb3IoYGludmFyaWFudDogaW52YWxpZCByZWxhdGl2ZSBVUkwsIHJvdXRlciByZWNlaXZlZCAke3VybH1gKTt9cmV0dXJue3BhdGhuYW1lLHF1ZXJ5OigwLF9xdWVyeXN0cmluZy5zZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KShzZWFyY2hQYXJhbXMpLHNlYXJjaCxoYXNoLGhyZWY6aHJlZi5zbGljZShnbG9iYWxCYXNlLm9yaWdpbi5sZW5ndGgpfTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYXJzZS1yZWxhdGl2ZS11cmwuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5zZWFyY2hQYXJhbXNUb1VybFF1ZXJ5PXNlYXJjaFBhcmFtc1RvVXJsUXVlcnk7ZXhwb3J0cy51cmxRdWVyeVRvU2VhcmNoUGFyYW1zPXVybFF1ZXJ5VG9TZWFyY2hQYXJhbXM7ZXhwb3J0cy5hc3NpZ249YXNzaWduO2Z1bmN0aW9uIHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKXtjb25zdCBxdWVyeT17fTtzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsa2V5KT0+e2lmKHR5cGVvZiBxdWVyeVtrZXldPT09J3VuZGVmaW5lZCcpe3F1ZXJ5W2tleV09dmFsdWU7fWVsc2UgaWYoQXJyYXkuaXNBcnJheShxdWVyeVtrZXldKSl7O3F1ZXJ5W2tleV0ucHVzaCh2YWx1ZSk7fWVsc2V7cXVlcnlba2V5XT1bcXVlcnlba2V5XSx2YWx1ZV07fX0pO3JldHVybiBxdWVyeTt9ZnVuY3Rpb24gc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShwYXJhbSl7aWYodHlwZW9mIHBhcmFtPT09J3N0cmluZyd8fHR5cGVvZiBwYXJhbT09PSdudW1iZXInJiYhaXNOYU4ocGFyYW0pfHx0eXBlb2YgcGFyYW09PT0nYm9vbGVhbicpe3JldHVybiBTdHJpbmcocGFyYW0pO31lbHNle3JldHVybicnO319ZnVuY3Rpb24gdXJsUXVlcnlUb1NlYXJjaFBhcmFtcyh1cmxRdWVyeSl7Y29uc3QgcmVzdWx0PW5ldyBVUkxTZWFyY2hQYXJhbXMoKTtPYmplY3QuZW50cmllcyh1cmxRdWVyeSkuZm9yRWFjaCgoW2tleSx2YWx1ZV0pPT57aWYoQXJyYXkuaXNBcnJheSh2YWx1ZSkpe3ZhbHVlLmZvckVhY2goaXRlbT0+cmVzdWx0LmFwcGVuZChrZXksc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShpdGVtKSkpO31lbHNle3Jlc3VsdC5zZXQoa2V5LHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0odmFsdWUpKTt9fSk7cmV0dXJuIHJlc3VsdDt9ZnVuY3Rpb24gYXNzaWduKHRhcmdldCwuLi5zZWFyY2hQYXJhbXNMaXN0KXtzZWFyY2hQYXJhbXNMaXN0LmZvckVhY2goc2VhcmNoUGFyYW1zPT57QXJyYXkuZnJvbShzZWFyY2hQYXJhbXMua2V5cygpKS5mb3JFYWNoKGtleT0+dGFyZ2V0LmRlbGV0ZShrZXkpKTtzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsa2V5KT0+dGFyZ2V0LmFwcGVuZChrZXksdmFsdWUpKTt9KTtyZXR1cm4gdGFyZ2V0O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXF1ZXJ5c3RyaW5nLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZ2V0Um91dGVNYXRjaGVyPWdldFJvdXRlTWF0Y2hlcjtmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCl7Y29uc3R7cmUsZ3JvdXBzfT1yb3V0ZVJlZ2V4O3JldHVybiBwYXRobmFtZT0+e2NvbnN0IHJvdXRlTWF0Y2g9cmUuZXhlYyhwYXRobmFtZSk7aWYoIXJvdXRlTWF0Y2gpe3JldHVybiBmYWxzZTt9Y29uc3QgZGVjb2RlPXBhcmFtPT57dHJ5e3JldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pO31jYXRjaChfKXtjb25zdCBlcnI9bmV3IEVycm9yKCdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJyk7ZXJyLmNvZGU9J0RFQ09ERV9GQUlMRUQnO3Rocm93IGVycjt9fTtjb25zdCBwYXJhbXM9e307T2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKHNsdWdOYW1lPT57Y29uc3QgZz1ncm91cHNbc2x1Z05hbWVdO2NvbnN0IG09cm91dGVNYXRjaFtnLnBvc107aWYobSE9PXVuZGVmaW5lZCl7cGFyYW1zW3NsdWdOYW1lXT1+bS5pbmRleE9mKCcvJyk/bS5zcGxpdCgnLycpLm1hcChlbnRyeT0+ZGVjb2RlKGVudHJ5KSk6Zy5yZXBlYXQ/W2RlY29kZShtKV06ZGVjb2RlKG0pO319KTtyZXR1cm4gcGFyYW1zO307fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGUtbWF0Y2hlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmdldFJvdXRlUmVnZXg9Z2V0Um91dGVSZWdleDsvLyB0aGlzIGlzbid0IGltcG9ydGluZyB0aGUgZXNjYXBlLXN0cmluZy1yZWdleCBtb2R1bGVcbi8vIHRvIHJlZHVjZSBieXRlc1xuZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyKXtyZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywnXFxcXCQmJyk7fWZ1bmN0aW9uIHBhcnNlUGFyYW1ldGVyKHBhcmFtKXtjb25zdCBvcHRpb25hbD1wYXJhbS5zdGFydHNXaXRoKCdbJykmJnBhcmFtLmVuZHNXaXRoKCddJyk7aWYob3B0aW9uYWwpe3BhcmFtPXBhcmFtLnNsaWNlKDEsLTEpO31jb25zdCByZXBlYXQ9cGFyYW0uc3RhcnRzV2l0aCgnLi4uJyk7aWYocmVwZWF0KXtwYXJhbT1wYXJhbS5zbGljZSgzKTt9cmV0dXJue2tleTpwYXJhbSxyZXBlYXQsb3B0aW9uYWx9O31mdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KG5vcm1hbGl6ZWRSb3V0ZSl7Y29uc3Qgc2VnbWVudHM9KG5vcm1hbGl6ZWRSb3V0ZS5yZXBsYWNlKC9cXC8kLywnJyl8fCcvJykuc2xpY2UoMSkuc3BsaXQoJy8nKTtjb25zdCBncm91cHM9e307bGV0IGdyb3VwSW5kZXg9MTtjb25zdCBwYXJhbWV0ZXJpemVkUm91dGU9c2VnbWVudHMubWFwKHNlZ21lbnQ9PntpZihzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSYmc2VnbWVudC5lbmRzV2l0aCgnXScpKXtjb25zdHtrZXksb3B0aW9uYWwscmVwZWF0fT1wYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsLTEpKTtncm91cHNba2V5XT17cG9zOmdyb3VwSW5kZXgrKyxyZXBlYXQsb3B0aW9uYWx9O3JldHVybiByZXBlYXQ/b3B0aW9uYWw/Jyg/Oi8oLis/KSk/JzonLyguKz8pJzonLyhbXi9dKz8pJzt9ZWxzZXtyZXR1cm5gLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YDt9fSkuam9pbignJyk7Ly8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4vLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuaWYodHlwZW9mIHdpbmRvdz09PSd1bmRlZmluZWQnKXtsZXQgcm91dGVLZXlDaGFyQ29kZT05NztsZXQgcm91dGVLZXlDaGFyTGVuZ3RoPTE7Ly8gYnVpbGRzIGEgbWluaW1hbCByb3V0ZUtleSB1c2luZyBvbmx5IGEteiBhbmQgbWluaW1hbCBudW1iZXIgb2YgY2hhcmFjdGVyc1xuY29uc3QgZ2V0U2FmZVJvdXRlS2V5PSgpPT57bGV0IHJvdXRlS2V5PScnO2ZvcihsZXQgaT0wO2k8cm91dGVLZXlDaGFyTGVuZ3RoO2krKyl7cm91dGVLZXkrPVN0cmluZy5mcm9tQ2hhckNvZGUocm91dGVLZXlDaGFyQ29kZSk7cm91dGVLZXlDaGFyQ29kZSsrO2lmKHJvdXRlS2V5Q2hhckNvZGU+MTIyKXtyb3V0ZUtleUNoYXJMZW5ndGgrKztyb3V0ZUtleUNoYXJDb2RlPTk3O319cmV0dXJuIHJvdXRlS2V5O307Y29uc3Qgcm91dGVLZXlzPXt9O2xldCBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZT1zZWdtZW50cy5tYXAoc2VnbWVudD0+e2lmKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpJiZzZWdtZW50LmVuZHNXaXRoKCddJykpe2NvbnN0e2tleSxvcHRpb25hbCxyZXBlYXR9PXBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwtMSkpOy8vIHJlcGxhY2UgYW55IG5vbi13b3JkIGNoYXJhY3RlcnMgc2luY2UgdGhleSBjYW4gYnJlYWtcbi8vIHRoZSBuYW1lZCByZWdleFxubGV0IGNsZWFuZWRLZXk9a2V5LnJlcGxhY2UoL1xcVy9nLCcnKTtsZXQgaW52YWxpZEtleT1mYWxzZTsvLyBjaGVjayBpZiB0aGUga2V5IGlzIHN0aWxsIGludmFsaWQgYW5kIGZhbGxiYWNrIHRvIHVzaW5nIGEga25vd25cbi8vIHNhZmUga2V5XG5pZihjbGVhbmVkS2V5Lmxlbmd0aD09PTB8fGNsZWFuZWRLZXkubGVuZ3RoPjMwKXtpbnZhbGlkS2V5PXRydWU7fWlmKCFpc05hTihwYXJzZUludChjbGVhbmVkS2V5LnN1YnN0cigwLDEpKSkpe2ludmFsaWRLZXk9dHJ1ZTt9aWYoaW52YWxpZEtleSl7Y2xlYW5lZEtleT1nZXRTYWZlUm91dGVLZXkoKTt9cm91dGVLZXlzW2NsZWFuZWRLZXldPWtleTtyZXR1cm4gcmVwZWF0P29wdGlvbmFsP2AoPzovKD88JHtjbGVhbmVkS2V5fT4uKz8pKT9gOmAvKD88JHtjbGVhbmVkS2V5fT4uKz8pYDpgLyg/PCR7Y2xlYW5lZEtleX0+W14vXSs/KWA7fWVsc2V7cmV0dXJuYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWA7fX0pLmpvaW4oJycpO3JldHVybntyZTpuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLGdyb3Vwcyxyb3V0ZUtleXMsbmFtZWRSZWdleDpgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGB9O31yZXR1cm57cmU6bmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxncm91cHN9O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlLXJlZ2V4LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZXhlY09uY2U9ZXhlY09uY2U7ZXhwb3J0cy5nZXRMb2NhdGlvbk9yaWdpbj1nZXRMb2NhdGlvbk9yaWdpbjtleHBvcnRzLmdldFVSTD1nZXRVUkw7ZXhwb3J0cy5nZXREaXNwbGF5TmFtZT1nZXREaXNwbGF5TmFtZTtleHBvcnRzLmlzUmVzU2VudD1pc1Jlc1NlbnQ7ZXhwb3J0cy5sb2FkR2V0SW5pdGlhbFByb3BzPWxvYWRHZXRJbml0aWFsUHJvcHM7ZXhwb3J0cy5mb3JtYXRXaXRoVmFsaWRhdGlvbj1mb3JtYXRXaXRoVmFsaWRhdGlvbjtleHBvcnRzLlNUPWV4cG9ydHMuU1A9ZXhwb3J0cy51cmxPYmplY3RLZXlzPXZvaWQgMDt2YXIgX2Zvcm1hdFVybD1yZXF1aXJlKFwiLi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybFwiKTsvKipcbiAqIFV0aWxzXG4gKi9mdW5jdGlvbiBleGVjT25jZShmbil7bGV0IHVzZWQ9ZmFsc2U7bGV0IHJlc3VsdDtyZXR1cm4oLi4uYXJncyk9PntpZighdXNlZCl7dXNlZD10cnVlO3Jlc3VsdD1mbiguLi5hcmdzKTt9cmV0dXJuIHJlc3VsdDt9O31mdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpe2NvbnN0e3Byb3RvY29sLGhvc3RuYW1lLHBvcnR9PXdpbmRvdy5sb2NhdGlvbjtyZXR1cm5gJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0Pyc6Jytwb3J0OicnfWA7fWZ1bmN0aW9uIGdldFVSTCgpe2NvbnN0e2hyZWZ9PXdpbmRvdy5sb2NhdGlvbjtjb25zdCBvcmlnaW49Z2V0TG9jYXRpb25PcmlnaW4oKTtyZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aCk7fWZ1bmN0aW9uIGdldERpc3BsYXlOYW1lKENvbXBvbmVudCl7cmV0dXJuIHR5cGVvZiBDb21wb25lbnQ9PT0nc3RyaW5nJz9Db21wb25lbnQ6Q29tcG9uZW50LmRpc3BsYXlOYW1lfHxDb21wb25lbnQubmFtZXx8J1Vua25vd24nO31mdW5jdGlvbiBpc1Jlc1NlbnQocmVzKXtyZXR1cm4gcmVzLmZpbmlzaGVkfHxyZXMuaGVhZGVyc1NlbnQ7fWFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHMoQXBwLGN0eCl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe3ZhciBfQXBwJHByb3RvdHlwZTtpZigoX0FwcCRwcm90b3R5cGU9QXBwLnByb3RvdHlwZSkhPW51bGwmJl9BcHAkcHJvdG90eXBlLmdldEluaXRpYWxQcm9wcyl7Y29uc3QgbWVzc2FnZT1gXCIke2dldERpc3BsYXlOYW1lKEFwcCl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYDt0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7fX0vLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG5jb25zdCByZXM9Y3R4LnJlc3x8Y3R4LmN0eCYmY3R4LmN0eC5yZXM7aWYoIUFwcC5nZXRJbml0aWFsUHJvcHMpe2lmKGN0eC5jdHgmJmN0eC5Db21wb25lbnQpey8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbnJldHVybntwYWdlUHJvcHM6YXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LGN0eC5jdHgpfTt9cmV0dXJue307fWNvbnN0IHByb3BzPWF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KTtpZihyZXMmJmlzUmVzU2VudChyZXMpKXtyZXR1cm4gcHJvcHM7fWlmKCFwcm9wcyl7Y29uc3QgbWVzc2FnZT1gXCIke2dldERpc3BsYXlOYW1lKEFwcCl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYDt0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7fWlmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtpZihPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoPT09MCYmIWN0eC5jdHgpe2NvbnNvbGUud2FybihgJHtnZXREaXNwbGF5TmFtZShBcHApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2ApO319cmV0dXJuIHByb3BzO31jb25zdCB1cmxPYmplY3RLZXlzPVsnYXV0aCcsJ2hhc2gnLCdob3N0JywnaG9zdG5hbWUnLCdocmVmJywncGF0aCcsJ3BhdGhuYW1lJywncG9ydCcsJ3Byb3RvY29sJywncXVlcnknLCdzZWFyY2gnLCdzbGFzaGVzJ107ZXhwb3J0cy51cmxPYmplY3RLZXlzPXVybE9iamVjdEtleXM7ZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOVj09PSdkZXZlbG9wbWVudCcpe2lmKHVybCE9PW51bGwmJnR5cGVvZiB1cmw9PT0nb2JqZWN0Jyl7T2JqZWN0LmtleXModXJsKS5mb3JFYWNoKGtleT0+e2lmKHVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpPT09LTEpe2NvbnNvbGUud2FybihgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gKTt9fSk7fX1yZXR1cm4oMCxfZm9ybWF0VXJsLmZvcm1hdFVybCkodXJsKTt9Y29uc3QgU1A9dHlwZW9mIHBlcmZvcm1hbmNlIT09J3VuZGVmaW5lZCc7ZXhwb3J0cy5TUD1TUDtjb25zdCBTVD1TUCYmdHlwZW9mIHBlcmZvcm1hbmNlLm1hcms9PT0nZnVuY3Rpb24nJiZ0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZT09PSdmdW5jdGlvbic7ZXhwb3J0cy5TVD1TVDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXV0aWxzLmpzLm1hcCIsImltcG9ydCBIb21lIGZyb20gXCJjb21wb25lbnRzL2hvbWUtcGFnZS9ob21lXCI7XHJcbmltcG9ydCB7IEdldFN0YXRpY1Byb3BzLCBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCB7IFByb3BzIH0gZnJvbSBcImludGVyZmFjZXMvaW50ZXJmYWNlXCI7XHJcbmltcG9ydCBQYWdlTGF5b3V0IGZyb20gXCJjb21wb25lbnRzL2xheW91dC9wYWdlTGF5b3V0XCI7XHJcblxyXG5jb25zdCBJbmRleDogTmV4dFBhZ2U8UHJvcHM+ID0gcHJvcHMgPT4ge1xyXG4gICAgY29uc3QgeyBwb3N0cyB9ID0gcHJvcHM7XHJcbiAgICBjb25zb2xlLmxvZyhwb3N0cyk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxQYWdlTGF5b3V0IHRpdGxlPVwiTWVydCBLYWRpciAtIE1vYmlsIEFwcGxpY2F0aW9uIERldmVsb3BlclwiPlxyXG4gICAgICA8SG9tZSBwb3N0cz17cG9zdHN9IC8+XHJcbiAgICA8L1BhZ2VMYXlvdXQ+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgZ2V0UG9zdHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2Rldi50by9hcGkvYXJ0aWNsZXM/dXNlcm5hbWU9bWVydF9rYWRpclwiKTtcclxuICBjb25zdCBwb3N0cyA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gIHJldHVybiBwb3N0cztcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogR2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgcG9zdHMgPSBhd2FpdCBnZXRQb3N0cygpO1xyXG5cclxuICBpZiAoIXBvc3RzKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBub3RGb3VuZDogdHJ1ZVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczogeyBwb3N0cyB9LFxyXG4gICAgcmV2YWxpZGF0ZTogMVxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5ub3JtYWxpemVQYXRoU2VwPW5vcm1hbGl6ZVBhdGhTZXA7ZXhwb3J0cy5kZW5vcm1hbGl6ZVBhZ2VQYXRoPWRlbm9ybWFsaXplUGFnZVBhdGg7ZnVuY3Rpb24gbm9ybWFsaXplUGF0aFNlcChwYXRoKXtyZXR1cm4gcGF0aC5yZXBsYWNlKC9cXFxcL2csJy8nKTt9ZnVuY3Rpb24gZGVub3JtYWxpemVQYWdlUGF0aChwYWdlKXtwYWdlPW5vcm1hbGl6ZVBhdGhTZXAocGFnZSk7aWYocGFnZS5zdGFydHNXaXRoKCcvaW5kZXgvJykpe3BhZ2U9cGFnZS5zbGljZSg2KTt9ZWxzZSBpZihwYWdlPT09Jy9pbmRleCcpe3BhZ2U9Jy8nO31yZXR1cm4gcGFnZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMubWFwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2ltYWdlJylcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsImZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZXh0ZW5kczsiLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSB7fTtcbiAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICB2YXIga2V5LCBpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE3LjAuMlxuICogcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG4vLyBBVFRFTlRJT05cbi8vIFdoZW4gYWRkaW5nIG5ldyBzeW1ib2xzIHRvIHRoaXMgZmlsZSxcbi8vIFBsZWFzZSBjb25zaWRlciBhbHNvIGFkZGluZyB0byAncmVhY3QtZGV2dG9vbHMtc2hhcmVkL3NyYy9iYWNrZW5kL1JlYWN0U3ltYm9scydcbi8vIFRoZSBTeW1ib2wgdXNlZCB0byB0YWcgdGhlIFJlYWN0RWxlbWVudC1saWtlIHR5cGVzLiBJZiB0aGVyZSBpcyBubyBuYXRpdmUgU3ltYm9sXG4vLyBub3IgcG9seWZpbGwsIHRoZW4gYSBwbGFpbiBudW1iZXIgaXMgdXNlZCBmb3IgcGVyZm9ybWFuY2UuXG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gMHhlYWM3O1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gMHhlYWNhO1xudmFyIFJFQUNUX0ZSQUdNRU5UX1RZUEUgPSAweGVhY2I7XG52YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IDB4ZWFjYztcbnZhciBSRUFDVF9QUk9GSUxFUl9UWVBFID0gMHhlYWQyO1xudmFyIFJFQUNUX1BST1ZJREVSX1RZUEUgPSAweGVhY2Q7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gMHhlYWNlO1xudmFyIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSAweGVhZDA7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IDB4ZWFkMTtcbnZhciBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSAweGVhZDg7XG52YXIgUkVBQ1RfTUVNT19UWVBFID0gMHhlYWQzO1xudmFyIFJFQUNUX0xBWllfVFlQRSA9IDB4ZWFkNDtcbnZhciBSRUFDVF9CTE9DS19UWVBFID0gMHhlYWQ5O1xudmFyIFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFID0gMHhlYWRhO1xudmFyIFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgPSAweGVhZDU7XG52YXIgUkVBQ1RfU0NPUEVfVFlQRSA9IDB4ZWFkNztcbnZhciBSRUFDVF9PUEFRVUVfSURfVFlQRSA9IDB4ZWFlMDtcbnZhciBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSA9IDB4ZWFlMTtcbnZhciBSRUFDVF9PRkZTQ1JFRU5fVFlQRSA9IDB4ZWFlMjtcbnZhciBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgPSAweGVhZTM7XG5cbmlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3IpIHtcbiAgdmFyIHN5bWJvbEZvciA9IFN5bWJvbC5mb3I7XG4gIFJFQUNUX0VMRU1FTlRfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZWxlbWVudCcpO1xuICBSRUFDVF9QT1JUQUxfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucG9ydGFsJyk7XG4gIFJFQUNUX0ZSQUdNRU5UX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmZyYWdtZW50Jyk7XG4gIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnN0cmljdF9tb2RlJyk7XG4gIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnByb2ZpbGVyJyk7XG4gIFJFQUNUX1BST1ZJREVSX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnByb3ZpZGVyJyk7XG4gIFJFQUNUX0NPTlRFWFRfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuY29udGV4dCcpO1xuICBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5mb3J3YXJkX3JlZicpO1xuICBSRUFDVF9TVVNQRU5TRV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdXNwZW5zZScpO1xuICBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnN1c3BlbnNlX2xpc3QnKTtcbiAgUkVBQ1RfTUVNT19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5tZW1vJyk7XG4gIFJFQUNUX0xBWllfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubGF6eScpO1xuICBSRUFDVF9CTE9DS19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5ibG9jaycpO1xuICBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc2VydmVyLmJsb2NrJyk7XG4gIFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmZ1bmRhbWVudGFsJyk7XG4gIFJFQUNUX1NDT1BFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnNjb3BlJyk7XG4gIFJFQUNUX09QQVFVRV9JRF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5vcGFxdWUuaWQnKTtcbiAgUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmRlYnVnX3RyYWNlX21vZGUnKTtcbiAgUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm9mZnNjcmVlbicpO1xuICBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmxlZ2FjeV9oaWRkZW4nKTtcbn1cblxuLy8gRmlsdGVyIGNlcnRhaW4gRE9NIGF0dHJpYnV0ZXMgKGUuZy4gc3JjLCBocmVmKSBpZiB0aGVpciB2YWx1ZXMgYXJlIGVtcHR5IHN0cmluZ3MuXG5cbnZhciBlbmFibGVTY29wZUFQSSA9IGZhbHNlOyAvLyBFeHBlcmltZW50YWwgQ3JlYXRlIEV2ZW50IEhhbmRsZSBBUEkuXG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSB7XG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSAvLyBOb3RlOiB0eXBlb2YgbWlnaHQgYmUgb3RoZXIgdGhhbiAnc3ltYm9sJyBvciAnbnVtYmVyJyAoZS5nLiBpZiBpdCdzIGEgcG9seWZpbGwpLlxuXG5cbiAgaWYgKHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSB8fCBlbmFibGVTY29wZUFQSSApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCkge1xuICAgIGlmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9CTE9DS19UWVBFIHx8IHR5cGVbMF0gPT09IFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIHR5cGVPZihvYmplY3QpIHtcbiAgaWYgKHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCkge1xuICAgIHZhciAkJHR5cGVvZiA9IG9iamVjdC4kJHR5cGVvZjtcblxuICAgIHN3aXRjaCAoJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfRUxFTUVOVF9UWVBFOlxuICAgICAgICB2YXIgdHlwZSA9IG9iamVjdC50eXBlO1xuXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgIGNhc2UgUkVBQ1RfRlJBR01FTlRfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTpcbiAgICAgICAgICAgIHJldHVybiB0eXBlO1xuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHZhciAkJHR5cGVvZlR5cGUgPSB0eXBlICYmIHR5cGUuJCR0eXBlb2Y7XG5cbiAgICAgICAgICAgIHN3aXRjaCAoJCR0eXBlb2ZUeXBlKSB7XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfQ09OVEVYVF9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZlR5cGU7XG5cbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cbnZhciBDb250ZXh0Q29uc3VtZXIgPSBSRUFDVF9DT05URVhUX1RZUEU7XG52YXIgQ29udGV4dFByb3ZpZGVyID0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbnZhciBFbGVtZW50ID0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xudmFyIEZvcndhcmRSZWYgPSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xudmFyIEZyYWdtZW50ID0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbnZhciBMYXp5ID0gUkVBQ1RfTEFaWV9UWVBFO1xudmFyIE1lbW8gPSBSRUFDVF9NRU1PX1RZUEU7XG52YXIgUG9ydGFsID0gUkVBQ1RfUE9SVEFMX1RZUEU7XG52YXIgUHJvZmlsZXIgPSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xudmFyIFN0cmljdE1vZGUgPSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xudmFyIFN1c3BlbnNlID0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcbnZhciBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSA9IGZhbHNlO1xudmFyIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQ29uY3VycmVudE1vZGUgPSBmYWxzZTsgLy8gQXN5bmNNb2RlIHNob3VsZCBiZSBkZXByZWNhdGVkXG5cbmZ1bmN0aW9uIGlzQXN5bmNNb2RlKG9iamVjdCkge1xuICB7XG4gICAgaWYgKCFoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSkge1xuICAgICAgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSB0cnVlOyAvLyBVc2luZyBjb25zb2xlWyd3YXJuJ10gdG8gZXZhZGUgQmFiZWwgYW5kIEVTTGludFxuXG4gICAgICBjb25zb2xlWyd3YXJuJ10oJ1RoZSBSZWFjdElzLmlzQXN5bmNNb2RlKCkgYWxpYXMgaGFzIGJlZW4gZGVwcmVjYXRlZCwgJyArICdhbmQgd2lsbCBiZSByZW1vdmVkIGluIFJlYWN0IDE4Ky4nKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5mdW5jdGlvbiBpc0NvbmN1cnJlbnRNb2RlKG9iamVjdCkge1xuICB7XG4gICAgaWYgKCFoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0NvbmN1cnJlbnRNb2RlKSB7XG4gICAgICBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0NvbmN1cnJlbnRNb2RlID0gdHJ1ZTsgLy8gVXNpbmcgY29uc29sZVsnd2FybiddIHRvIGV2YWRlIEJhYmVsIGFuZCBFU0xpbnRcblxuICAgICAgY29uc29sZVsnd2FybiddKCdUaGUgUmVhY3RJcy5pc0NvbmN1cnJlbnRNb2RlKCkgYWxpYXMgaGFzIGJlZW4gZGVwcmVjYXRlZCwgJyArICdhbmQgd2lsbCBiZSByZW1vdmVkIGluIFJlYWN0IDE4Ky4nKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRDb25zdW1lcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9DT05URVhUX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRQcm92aWRlcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QUk9WSURFUl9UWVBFO1xufVxuZnVuY3Rpb24gaXNFbGVtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsICYmIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNGb3J3YXJkUmVmKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG59XG5mdW5jdGlvbiBpc0ZyYWdtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG59XG5mdW5jdGlvbiBpc0xhenkob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTEFaWV9UWVBFO1xufVxuZnVuY3Rpb24gaXNNZW1vKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX01FTU9fVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUG9ydGFsKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BPUlRBTF9UWVBFO1xufVxuZnVuY3Rpb24gaXNQcm9maWxlcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdHJpY3RNb2RlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc1N1c3BlbnNlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG59XG5cbmV4cG9ydHMuQ29udGV4dENvbnN1bWVyID0gQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5Db250ZXh0UHJvdmlkZXIgPSBDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLkVsZW1lbnQgPSBFbGVtZW50O1xuZXhwb3J0cy5Gb3J3YXJkUmVmID0gRm9yd2FyZFJlZjtcbmV4cG9ydHMuRnJhZ21lbnQgPSBGcmFnbWVudDtcbmV4cG9ydHMuTGF6eSA9IExhenk7XG5leHBvcnRzLk1lbW8gPSBNZW1vO1xuZXhwb3J0cy5Qb3J0YWwgPSBQb3J0YWw7XG5leHBvcnRzLlByb2ZpbGVyID0gUHJvZmlsZXI7XG5leHBvcnRzLlN0cmljdE1vZGUgPSBTdHJpY3RNb2RlO1xuZXhwb3J0cy5TdXNwZW5zZSA9IFN1c3BlbnNlO1xuZXhwb3J0cy5pc0FzeW5jTW9kZSA9IGlzQXN5bmNNb2RlO1xuZXhwb3J0cy5pc0NvbmN1cnJlbnRNb2RlID0gaXNDb25jdXJyZW50TW9kZTtcbmV4cG9ydHMuaXNDb250ZXh0Q29uc3VtZXIgPSBpc0NvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuaXNDb250ZXh0UHJvdmlkZXIgPSBpc0NvbnRleHRQcm92aWRlcjtcbmV4cG9ydHMuaXNFbGVtZW50ID0gaXNFbGVtZW50O1xuZXhwb3J0cy5pc0ZvcndhcmRSZWYgPSBpc0ZvcndhcmRSZWY7XG5leHBvcnRzLmlzRnJhZ21lbnQgPSBpc0ZyYWdtZW50O1xuZXhwb3J0cy5pc0xhenkgPSBpc0xhenk7XG5leHBvcnRzLmlzTWVtbyA9IGlzTWVtbztcbmV4cG9ydHMuaXNQb3J0YWwgPSBpc1BvcnRhbDtcbmV4cG9ydHMuaXNQcm9maWxlciA9IGlzUHJvZmlsZXI7XG5leHBvcnRzLmlzU3RyaWN0TW9kZSA9IGlzU3RyaWN0TW9kZTtcbmV4cG9ydHMuaXNTdXNwZW5zZSA9IGlzU3VzcGVuc2U7XG5leHBvcnRzLmlzVmFsaWRFbGVtZW50VHlwZSA9IGlzVmFsaWRFbGVtZW50VHlwZTtcbmV4cG9ydHMudHlwZU9mID0gdHlwZU9mO1xuICB9KSgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAY2hha3JhLXVpL3JlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAY2hha3JhLXVpL3RoZW1lLXRvb2xzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAY2hha3JhLXVpL3V0aWxzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmcmFtZXItbW90aW9uXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb21lbnRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvaGVhZC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2ltYWdlLWNvbmZpZy5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtdXNlLWxhbnlhcmRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==