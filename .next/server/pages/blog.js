(function() {
var exports = {};
exports.id = 195;
exports.ids = [195];
exports.modules = {

/***/ 9802:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ blog; },
  "getStaticProps": function() { return /* binding */ getStaticProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(3426);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./components/ui/page-transitions.tsx
var page_transitions = __webpack_require__(9206);
// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(2470);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);
// EXTERNAL MODULE: ./components/ui/theme/index.ts
var theme = __webpack_require__(499);
// EXTERNAL MODULE: ./components/ui/Tags.tsx
var Tags = __webpack_require__(2798);
;// CONCATENATED MODULE: ./components/blog/card.tsx









const PostCard = ({
  post
}) => {
  const linkColor = (0,theme/* useLinkColor */.o3)();
  const textColor = (0,react_.useColorModeValue)("gray.500", "gray.200");
  const devIcon = (0,react_.useColorModeValue)("/assets/images/logos/dev.png", "/assets/images/logos/dev_white.png");
  return /*#__PURE__*/jsx_runtime_.jsx(page_transitions/* CardTransition */.xp, {
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
      children: [post.url ? /*#__PURE__*/jsx_runtime_.jsx(react_.Tooltip, {
        hasArrow: true,
        label: "Dev.to",
        placement: "top",
        children: /*#__PURE__*/jsx_runtime_.jsx(react_.Image, {
          src: devIcon,
          width: "2rem",
          height: "2rem",
          position: "absolute",
          color: "#cbd5e0",
          right: "0.5rem",
          top: "-14px"
        })
      }) : "", /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.HStack, {
        justifyContent: "space-between",
        isInline: true,
        children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Heading, {
          fontSize: "lg",
          align: "left",
          mt: 0,
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: `/blog/${post.slug}`,
            passHref: true,
            children: /*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
              as: react_.Link,
              color: linkColor,
              children: post.title
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.HStack, {
          spacing: 2,
          isInline: true,
          d: ["none", "flex", "flex"],
          children: [post.public_reactions_count ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Flex, {
            alignItems: "center",
            children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
              fontSize: "sm",
              noOfLines: 1,
              fontWeight: "400",
              align: "left",
              color: textColor,
              children: post.public_reactions_count
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
          }) : "", post.comments_count ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Flex, {
            alignItems: "center",
            children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
              fontSize: "sm",
              noOfLines: 1,
              fontWeight: "400",
              align: "left",
              color: textColor,
              children: post.comments_count
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
            children: external_moment_default()(post.published_at).format("Do MMMM YYYY")
          })
        }), post.public_reactions_count ? /*#__PURE__*/jsx_runtime_.jsx(react_.Tooltip, {
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
              children: post.public_reactions_count
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
        }) : "", post.comments_count ? /*#__PURE__*/jsx_runtime_.jsx(react_.Tooltip, {
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
              children: post.comments_count
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
        }) : "", /*#__PURE__*/jsx_runtime_.jsx(react_.HStack, {
          spacing: 1,
          alignItems: "center",
          d: ["none", "none", "flex"],
          children: /*#__PURE__*/jsx_runtime_.jsx(Tags/* Tags */.$G, {
            tags: post.tag_list,
            interactive: false,
            tagProps: {
              padding: "0 3px",
              size: "sm"
            }
          })
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(react_.HStack, {
        spacing: 1,
        alignItems: "center",
        d: ["flex", "flex", "none"],
        children: /*#__PURE__*/jsx_runtime_.jsx(Tags/* Tags */.$G, {
          tags: post.tag_list,
          interactive: false,
          tagProps: {
            padding: "0 3px",
            size: "sm"
          }
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
        align: "left",
        fontSize: "md",
        noOfLines: 1,
        color: textColor,
        children: post.description
      })]
    })
  });
};

/* harmony default export */ var card = (PostCard);
// EXTERNAL MODULE: ./components/layout/header.tsx + 1 modules
var header = __webpack_require__(6277);
// EXTERNAL MODULE: ./components/ui/motion.tsx
var motion = __webpack_require__(29);
// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__(5747);
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_);
// EXTERNAL MODULE: external "path"
var external_path_ = __webpack_require__(5622);
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_);
// EXTERNAL MODULE: external "gray-matter"
var external_gray_matter_ = __webpack_require__(9064);
var external_gray_matter_default = /*#__PURE__*/__webpack_require__.n(external_gray_matter_);
// EXTERNAL MODULE: external "framer-motion"
var external_framer_motion_ = __webpack_require__(762);
// EXTERNAL MODULE: ./components/layout/pageLayout.tsx
var pageLayout = __webpack_require__(1388);
// EXTERNAL MODULE: ./node_modules/react-icons/bi/index.esm.js
var index_esm = __webpack_require__(7516);
;// CONCATENATED MODULE: ./pages/blog.tsx














const TURQUOISE = "#06b6d4";

const Posts = ({
  posts
}) => {
  const {
    0: searchValue,
    1: setSearchValue
  } = (0,external_react_.useState)("");
  const filteredBlogPosts = posts.filter(data => {
    const searchContent = data.title + data.description;
    return searchContent.toLowerCase().includes(searchValue.toLowerCase());
  });
  return /*#__PURE__*/jsx_runtime_.jsx(external_react_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx(pageLayout/* default */.Z, {
      title: "Blog",
      description: "A list of all articles and posts!",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(page_transitions/* PageSlideFade */.f6, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(header/* default */.Z, {
          underlineColor: TURQUOISE,
          mt: 0,
          mb: 6,
          children: "Featured Articles"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.InputGroup, {
          maxW: "30rem",
          children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Input, {
            placeholder: "Search articles",
            onChange: e => setSearchValue(e.target.value),
            background: (0,react_.useColorModeValue)("gray.100", "#1e2533")
          }), /*#__PURE__*/jsx_runtime_.jsx(react_.InputRightElement, {
            children: /*#__PURE__*/jsx_runtime_.jsx(react_.Icon, {
              as: index_esm/* BiSearch */.Goc,
              w: 6,
              h: 6
            })
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx(page_transitions/* StaggerChildren */.eF, {
          children: /*#__PURE__*/jsx_runtime_.jsx(react_.Stack, {
            spacing: 4,
            mt: 6,
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_framer_motion_.AnimatePresence, {
              children: [!filteredBlogPosts.length && /*#__PURE__*/jsx_runtime_.jsx(react_.Heading, {
                as: "h1",
                pt: 10,
                pb: 10,
                children: "No articles found"
              }), filteredBlogPosts.map((post, i) => /*#__PURE__*/jsx_runtime_.jsx(external_framer_motion_.motion.div, {
                initial: "hidden",
                animate: "visible",
                variants: {
                  hidden: i => ({
                    opacity: 0,
                    y: -30 * i
                  }),
                  visible: i => ({
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: i * 0.1
                    }
                  })
                },
                custom: i,
                children: /*#__PURE__*/jsx_runtime_.jsx(motion/* MotionBox */.uH, {
                  whileHover: {
                    y: -5
                  },
                  children: /*#__PURE__*/jsx_runtime_.jsx(card, {
                    post: post
                  })
                }, i)
              }, post.slug))]
            })
          })
        })]
      })
    })
  });
};

const getPosts = async () => {
  const res = await fetch("https://dev.to/api/articles?username=mert_kadir");
  const posts = await res.json();
  return posts;
};

const root = process.cwd();
const getStaticProps = async () => {
  let devtoPosts = await getPosts();
  const paths = external_fs_default().readdirSync(external_path_default().join(root, "data", "posts")).map(p => p.replace(/\.mdx/, ""));
  const localPosts = [];
  paths.map(p => {
    const markdownWithMeta = external_fs_default().readFileSync(external_path_default().join(root, "data", "posts", `${p}.mdx`), "utf-8");
    const {
      data: frontmatter
    } = external_gray_matter_default()(markdownWithMeta);
    const devPost = devtoPosts.filter(data => !data.canonical_url.includes("dev.to") && data.canonical_url.split("/blog/")[1] === p)[0];
    localPosts.push({
      slug: p,
      title: frontmatter.title,
      description: frontmatter.description,
      published_at: frontmatter.published_at,
      comments_count: frontmatter.comments_count ? frontmatter.comments_count : devPost !== null && devPost !== void 0 && devPost.comments_count ? devPost === null || devPost === void 0 ? void 0 : devPost.comments_count : 0,
      public_reactions_count: frontmatter.public_reactions_count ? frontmatter.public_reactions_count : devPost !== null && devPost !== void 0 && devPost.public_reactions_count ? devPost === null || devPost === void 0 ? void 0 : devPost.public_reactions_count : 0,
      tag_list: frontmatter.tags
    });
  });
  devtoPosts = devtoPosts.filter(data => data.canonical_url.includes("dev.to"));
  const posts = [...localPosts, ...devtoPosts];

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
/* harmony default export */ var blog = (Posts);

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

/***/ 2470:
/***/ (function(module) {

"use strict";
module.exports = require("moment");;

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
var __webpack_exports__ = __webpack_require__.X(0, [127,664,516,29,205,277,759,499,191], function() { return __webpack_exec__(9802); });
module.exports = __webpack_exports__;

})();