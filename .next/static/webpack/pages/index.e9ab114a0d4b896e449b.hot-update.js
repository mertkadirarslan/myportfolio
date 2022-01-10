self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./data/Status.tsx":
/*!*************************!*\
  !*** ./data/Status.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var react_use_lanyard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-use-lanyard */ "./node_modules/react-use-lanyard/dist/index.js");
/* harmony import */ var react_use_lanyard__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_use_lanyard__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/user */ "./data/user.ts");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\mert\\Desktop\\myportfolio\\data\\Status.tsx",
    _this = undefined,
    _s = $RefreshSig$();




/* Import types */

/* Import data */


var Status = function Status() {
  _s();

  var _getActivity, _getActivity2, _getActivity3;

  var _useLanyard = (0,react_use_lanyard__WEBPACK_IMPORTED_MODULE_1__.useLanyard)({
    userId: _data_user__WEBPACK_IMPORTED_MODULE_3__.default,
    socket: true
  }),
      loading = _useLanyard.loading,
      status = _useLanyard.status;

  var getActivity = function getActivity() {
    if ((status === null || status === void 0 ? void 0 : status.listening_to_spotify) === true) {
      var _ref = status.spotify || {},
          song = _ref.song,
          artist = _ref.artist,
          album = _ref.album;

      return {
        name: song,
        details: "by ".concat(artist),
        state: "on ".concat(album)
      };
    }

    return status.activities(-1);
  };

  var getImage = function getImage() {
    if (!loading && (status === null || status === void 0 ? void 0 : status.listening_to_spotify) === true) {
      var activity = status.spotify;
      return {
        largeImage: activity === null || activity === void 0 ? void 0 : activity.album_art_url
      };
    } else {
      var _activity = getActivity();

      var _ref2 = _activity || {},
          application_id = _ref2.application_id;

      var _ref3 = (_activity === null || _activity === void 0 ? void 0 : _activity.assets) || {},
          large_image = _ref3.large_image,
          small_image = _ref3.small_image;

      var largeImage = large_image && "https://cdn.discordapp.com/app-assets/".concat(application_id, "/").concat(large_image, ".png?size=256"),
          smallImage = small_image && "https://cdn.discordapp.com/app-assets/".concat(application_id, "/").concat(small_image, ".png?size=256");
      return {
        largeImage: largeImage,
        smallImage: smallImage
      };
    }
  };

  if (loading === false && (status === null || status === void 0 ? void 0 : status.discord_status) === "online") return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {
    display: "flex",
    flexWrap: "nowrap",
    "float": "left",
    padding: "5",
    marginTop: "5",
    _hover: {
      shadow: "lg"
    },
    backgroundColor: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useColorModeValue)("gray.100", "#1e2533"),
    rounded: "md",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Stack, {
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
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {
      textColor: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useColorModeValue)("black", "white"),
      fontSize: "md",
      textAlign: "center",
      margin: "1",
      children: " Online"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 2
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 75,
    columnNumber: 2
  }, _this);else if (loading === false && (status === null || status === void 0 ? void 0 : status.discord_status) === "idle") return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {
    display: "flex",
    flexWrap: "nowrap",
    "float": "left",
    padding: "5",
    marginTop: "5",
    _hover: {
      shadow: "lg"
    },
    backgroundColor: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useColorModeValue)("gray.100", "#1e2533"),
    rounded: "md",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Stack, {
      backgroundColor: "yellow.400",
      rounded: "full",
      width: "4",
      height: 4,
      margin: "auto",
      alignItems: "center"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 2
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {
      textColor: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useColorModeValue)("black", "white"),
      fontSize: "md",
      textAlign: "center",
      margin: "1",
      children: " Idled"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 2
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Stack, {
      marginRight: "5",
      objectFit: "cover",
      borderRadius: "50%",
      children: getImage().largeImage && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
        src: getImage().largeImage || "",
        width: "80px",
        height: "80px",
        alt: "icon",
        draggable: "true",
        objectFit: "cover",
        className: "rounded-lg"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 20
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 2
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {
      fontSize: "sm",
      margin: "auto",
      textAlign: "center",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: [" ", (_getActivity = getActivity()) === null || _getActivity === void 0 ? void 0 : _getActivity.name]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 15
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: [" ", (_getActivity2 = getActivity()) === null || _getActivity2 === void 0 ? void 0 : _getActivity2.details]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 15
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: [" ", (_getActivity3 = getActivity()) === null || _getActivity3 === void 0 ? void 0 : _getActivity3.state, " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 15
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 15
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 83,
    columnNumber: 2
  }, _this);else if (loading === false && (status === null || status === void 0 ? void 0 : status.discord_status) === "dnd") return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {
    display: "flex",
    flexWrap: "nowrap",
    "float": "left",
    padding: "5",
    _hover: {
      shadow: "lg"
    },
    marginTop: "5",
    backgroundColor: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useColorModeValue)("gray.100", "#1e2533"),
    rounded: "md",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Stack, {
      backgroundColor: "red.500",
      rounded: "full",
      width: "4",
      height: 4,
      margin: "auto",
      alignItems: "center"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 3
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {
      textColor: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useColorModeValue)("black", "white"),
      fontSize: "md",
      textAlign: "center",
      margin: "1",
      children: " Disturbing"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 3
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 111,
    columnNumber: 3
  }, _this);else return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {
    display: "flex",
    flexWrap: "nowrap",
    "float": "left",
    padding: "5",
    marginTop: "5",
    _hover: {
      shadow: "lg"
    },
    backgroundColor: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useColorModeValue)("gray.100", "#1e2533"),
    rounded: "md",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Tooltip, {
      hasArrow: true,
      label: "Offline",
      placement: "top",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Stack, {
        backgroundColor: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useColorModeValue)("gray.400", "gray.600"),
        rounded: "full",
        width: "4",
        height: 4,
        margin: "auto",
        alignItems: "center"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 54
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 4
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {
      textColor: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useColorModeValue)("black", "white"),
      fontSize: "md",
      textAlign: "center",
      margin: "1",
      children: " Offline"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 3
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 119,
    columnNumber: 3
  }, _this);
  /*
   
    if (loading === false && status?.discord_status === "offline" ) 
    return  <Box display={"flex"} flexWrap={"nowrap"} float={"left"} padding={"5"}  marginTop={"5"} _hover={{ shadow: "lg" }}  backgroundColor={useColorModeValue("gray.100", "#1e2533")} rounded={"md"}>
     <Tooltip hasArrow label="Offline" placement="top"><Stack backgroundColor={useColorModeValue("gray.400", "gray.600")} rounded={"full"} width={"4"} height={4} margin={"auto"} alignItems={"center"}></Stack></Tooltip>
    <Text textColor={useColorModeValue("black", "white")} fontSize={"md"}  textAlign={"center"} margin={"1"}> Offline</Text>       
  </Box>
  
      else if (loading === false && status?.discord_status === "online" && status?.listening_to_spotify === false)
      return ( <Box display={"flex"} flexWrap={"nowrap"} float={"left"} padding={"5"}  marginTop={"5"} _hover={{ shadow: "lg" }}  backgroundColor={useColorModeValue("gray.100", "#1e2533")} rounded={"md"}>
        <Stack backgroundColor={"green.500"} rounded={"full"} width={"4"} height={4} margin={"auto"} alignItems={"center"}></Stack>
        <Text textColor={useColorModeValue("black", "white")} fontSize={"md"}  textAlign={"center"} margin={"1"}> Online</Text>
      </Box> 
      );
      else if ( loading === false && status?.discord_status === "online" && status?.listening_to_spotify === true)
      return ( <Box display={"flex"} flexWrap={"nowrap"} float={"left"} padding={"5"} marginTop={"5"}  _hover={{ shadow: "lg" }}  backgroundColor={useColorModeValue("gray.100", "#1e2533")} rounded={"md"}>
     <Tooltip hasArrow label="Online" placement="top"><Stack backgroundColor={"green.500"} rounded={"full"} width={"4"} height={4} margin={"auto"} marginRight={"5"} alignItems={"center"}></Stack></Tooltip> 
    <Text fontSize={"sm"} margin={"auto"} textAlign={"center"} marginRight={"5"} textColor={useColorModeValue("gray.400", "gray.600")}>Listening to</Text>
    <Stack marginRight={"5"} objectFit={"cover"} borderRadius={"50%"}>
                   {getImage().largeImage && (
                     <Image
                       src={getImage().largeImage || ""}
                       width="80px"
                       height="80px"
                       alt="icon"
                       draggable="true"
                       objectFit="cover"
                       className="rounded-lg"
                       
                     />
                   )}
                </Stack>
                
                <Text fontSize={"sm"} margin={"auto"} textAlign={"center"}>    
                <h1> {getActivity()?.name}</h1>
                <h1> {getActivity()?.details}</h1>
                <h1> {getActivity()?.state} </h1>    
                </Text>
                
    </Box> 
                  
            
      );
      else if (loading === false && status?.discord_status === "dnd" && status?.listening_to_spotify === false)
      return ( <Box display={"flex"} flexWrap={"nowrap"} float={"left"} padding={"5"}  _hover={{ shadow: "lg" }} marginTop={"5"}  backgroundColor={useColorModeValue("gray.100", "#1e2533")} rounded={"md"}>
      <Stack backgroundColor={"red.500"} rounded={"full"} width={"4"} height={4} margin={"auto"} alignItems={"center"}></Stack>
      <Text textColor={useColorModeValue("black", "white")} fontSize={"md"}  textAlign={"center"} margin={"1"}> Disturbing</Text>
    </Box> );
     else if ( loading === false && status?.discord_status === "dnd" && status?.listening_to_spotify === true)
     return (
      <Box display={"flex"} flexWrap={"nowrap"} float={"left"} padding={"5"} marginTop={"5"}  _hover={{ shadow: "lg" }}  backgroundColor={useColorModeValue("gray.100", "#1e2533")} rounded={"md"}>
       <Tooltip hasArrow label="Disturbing" placement="top"><Stack backgroundColor={"red.500"} rounded={"full"} width={"4"} height={4} margin={"auto"} marginRight={"5"} alignItems={"center"}></Stack></Tooltip>
    <Text fontSize={"sm"} margin={"auto"} textAlign={"center"} marginRight={"5"} textColor={useColorModeValue("gray.400", "gray.600")}>Listening to</Text>
    <Stack marginRight={"5"} objectFit={"cover"} borderRadius={"50%"}>
                   {getImage().largeImage && (
                     <Image
                       src={getImage().largeImage || ""}
                       width="80px"
                       height="80px"
                       alt="icon"
                       draggable="true"
                       objectFit="cover"
                       className="rounded-lg"
                       
                     />
                   )}
                </Stack>
                
                <Text fontSize={"sm"} margin={"auto"} textAlign={"center"}>    
                <h1> {getActivity()?.name}</h1>
                <h1> {getActivity()?.details}</h1>
                <h1> {getActivity()?.state} </h1>    
                </Text>
                
    </Box> 
           
     )
    else if ( loading === false && status?.discord_status === "idle" && status?.listening_to_spotify === false)
    return ( <Box display={"flex"} flexWrap={"nowrap"} float={"left"} padding={"5"} marginTop={"5"}  _hover={{ shadow: "lg" }}  backgroundColor={useColorModeValue("gray.100", "#1e2533")} rounded={"md"}>
    <Stack backgroundColor={"yellow.400"} rounded={"full"} width={"4"} height={4} margin={"auto"} alignItems={"center"}></Stack>
    <Text textColor={useColorModeValue("black", "white")} fontSize={"md"} textAlign={"center"} margin={"1"}> Idled</Text>
    </Box> 
    );
     else if ( loading === false && status?.discord_status === "idle" && status?.listening_to_spotify === true)
     return (
      <Box display={"flex"} flexWrap={"nowrap"} float={"left"} padding={"5"} marginTop={"5"}  _hover={{ shadow: "lg" }}  backgroundColor={useColorModeValue("gray.100", "#1e2533")} rounded={"md"}>
      <Tooltip hasArrow label="Idled" placement="top"><Stack backgroundColor={"yellow.400"} rounded={"full"} width={"4"} height={4} margin={"auto"} marginRight={"5"} alignItems={"center"}></Stack></Tooltip>
    <Text fontSize={"sm"} margin={"auto"} textAlign={"center"} marginRight={"5"} textColor={useColorModeValue("gray.400", "gray.600")}>Listening to</Text>
    <Stack marginRight={"5"} objectFit={"cover"} borderRadius={"50%"}>
                   {getImage().largeImage && (
                     <Image
                       src={getImage().largeImage || ""}
                       width="80px"
                       height="80px"
                       alt="icon"
                       draggable="true"
                       objectFit="cover"
                       className="rounded-lg"
                       
                     />
                   )}
                </Stack>
                
                <Text fontSize={"sm"} margin={"auto"} textAlign={"center"}>    
                <h1> {getActivity()?.name}</h1>
                <h1> {getActivity()?.details}</h1>
                <h1> {getActivity()?.state} </h1>    
                </Text>
                
    </Box> 
           
     );
    else (status?.discord_status === "invisible")
    return ( <Box display={"flex"} flexWrap={"nowrap"} float={"left"} padding={"5"} marginTop={"5"}  _hover={{ shadow: "lg" }}  backgroundColor={useColorModeValue("gray.100", "#1e2533")} rounded={"md"}>
    <Stack backgroundColor={useColorModeValue("gray.400", "gray.600")} rounded={"full"} width={"4"} height={4} margin={"auto"} alignItems={"center"}></Stack>
    <Text textColor={useColorModeValue("black", "white")} fontSize={"md"} textAlign={"center"} margin={"1"}> Offline</Text>
    </Box>  );
   
    */
};

_s(Status, "2vM+Xo90ciMqp7/AqXyAxvM3BK8=", false, function () {
  return [react_use_lanyard__WEBPACK_IMPORTED_MODULE_1__.useLanyard, _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useColorModeValue, _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useColorModeValue, _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useColorModeValue, _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useColorModeValue, _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useColorModeValue, _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useColorModeValue, _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useColorModeValue, _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useColorModeValue, _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useColorModeValue];
});

_c = Status;
/* harmony default export */ __webpack_exports__["default"] = (Status);

var _c;

$RefreshReg$(_c, "Status");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZGF0YS9TdGF0dXMudHN4Il0sIm5hbWVzIjpbIlN0YXR1cyIsInVzZUxhbnlhcmQiLCJ1c2VySWQiLCJzb2NrZXQiLCJsb2FkaW5nIiwic3RhdHVzIiwiZ2V0QWN0aXZpdHkiLCJsaXN0ZW5pbmdfdG9fc3BvdGlmeSIsInNwb3RpZnkiLCJzb25nIiwiYXJ0aXN0IiwiYWxidW0iLCJuYW1lIiwiZGV0YWlscyIsInN0YXRlIiwiYWN0aXZpdGllcyIsImdldEltYWdlIiwiYWN0aXZpdHkiLCJsYXJnZUltYWdlIiwiYWxidW1fYXJ0X3VybCIsImFwcGxpY2F0aW9uX2lkIiwiYXNzZXRzIiwibGFyZ2VfaW1hZ2UiLCJzbWFsbF9pbWFnZSIsInNtYWxsSW1hZ2UiLCJkaXNjb3JkX3N0YXR1cyIsInNoYWRvdyIsInVzZUNvbG9yTW9kZVZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFhQTtBQUNBO0FBR0E7O0FBR0E7QUFDQTs7QUFJQSxJQUFNQSxNQUFnQixHQUFHLFNBQW5CQSxNQUFtQixHQUFNO0FBQUE7O0FBQUE7O0FBQUEsb0JBRURDLDZEQUFVLENBQUM7QUFDckNDLFVBQU0sRUFBTkEsK0NBRHFDO0FBRXJDQyxVQUFNLEVBQUU7QUFGNkIsR0FBRCxDQUZUO0FBQUEsTUFFckJDLE9BRnFCLGVBRXJCQSxPQUZxQjtBQUFBLE1BRVpDLE1BRlksZUFFWkEsTUFGWTs7QUFPN0IsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN4QixRQUFJLENBQUFELE1BQU0sU0FBTixJQUFBQSxNQUFNLFdBQU4sWUFBQUEsTUFBTSxDQUFFRSxvQkFBUixNQUFpQyxJQUFyQyxFQUEyQztBQUFBLGlCQUNURixNQUFNLENBQUNHLE9BQVAsSUFBa0IsRUFEVDtBQUFBLFVBQ2pDQyxJQURpQyxRQUNqQ0EsSUFEaUM7QUFBQSxVQUMzQkMsTUFEMkIsUUFDM0JBLE1BRDJCO0FBQUEsVUFDbkJDLEtB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UUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNDLENBM05EOztHQUFNM0IsTTtVQUV3QkMseUQsRUErQ3VHMEIsK0QsRUFFbkhBLCtELEVBTW1IQSwrRCxFQUVuSEEsK0QsRUEwQm9IQSwrRCxFQUVuSEEsK0QsRUFNbUhBLCtELEVBQ3pEQSwrRCxFQUMxREEsK0Q7OztLQS9GYjNCLE07QUE2Tk4sK0RBQWVBLE1BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZTlhYjExNGEwZDRiODk2ZTQ0OWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgRmxleCxcclxuICBBdmF0YXIsXHJcbiAgQm94LFxyXG4gIFRleHQsXHJcbiAgQmFkZ2UsXHJcbiAgU3RhY2ssXHJcbiAgTGluayxcclxuICBVbm9yZGVyZWRMaXN0LFxyXG4gIExpc3RJdGVtLFxyXG4gIHVzZUNvbG9yTW9kZVZhbHVlLFxyXG4gIFRvb2x0aXBcclxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VMYW55YXJkIH0gZnJvbSBcInJlYWN0LXVzZS1sYW55YXJkXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5cclxuXHJcbi8qIEltcG9ydCB0eXBlcyAqL1xyXG5pbXBvcnQgdHlwZSB7IEFjdGl2aXR5IH0gZnJvbSBcInJlYWN0LXVzZS1sYW55YXJkXCI7XHJcblxyXG4vKiBJbXBvcnQgZGF0YSAqL1xyXG5pbXBvcnQgdXNlcklkIGZyb20gXCIuLi9kYXRhL3VzZXJcIjtcclxuXHJcblxyXG5cclxuY29uc3QgU3RhdHVzOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuIFxyXG4gIGNvbnN0IHsgbG9hZGluZywgc3RhdHVzIH0gPSB1c2VMYW55YXJkKHtcclxuICAgIHVzZXJJZCxcclxuICAgIHNvY2tldDogdHJ1ZSxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgZ2V0QWN0aXZpdHkgPSAoKSA9PiB7XHJcbiAgICBpZiAoc3RhdHVzPy5saXN0ZW5pbmdfdG9fc3BvdGlmeSA9PT0gdHJ1ZSkge1xyXG4gICAgICBjb25zdCB7IHNvbmcsIGFydGlzdCwgYWxidW0gfSA9IHN0YXR1cy5zcG90aWZ5IHx8IHt9O1xyXG5cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBuYW1lOiBzb25nLFxyXG4gICAgICAgIGRldGFpbHM6IGBieSAke2FydGlzdH1gLFxyXG4gICAgICAgIHN0YXRlOiBgb24gJHthbGJ1bX1gLFxyXG4gICAgICB9O1xyXG4gICAgfSByZXR1cm4gc3RhdHVzLmFjdGl2aXRpZXMoLTEpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldEltYWdlID0gKCkgPT4ge1xyXG4gICAgaWYgKCFsb2FkaW5nICYmIHN0YXR1cz8ubGlzdGVuaW5nX3RvX3Nwb3RpZnkgPT09IHRydWUpIHtcclxuICAgICAgY29uc3QgYWN0aXZpdHkgPSBzdGF0dXMuc3BvdGlmeTtcclxuXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgbGFyZ2VJbWFnZTogYWN0aXZpdHk/LmFsYnVtX2FydF91cmwsXHJcbiAgICAgIH07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBhY3Rpdml0eSA9IGdldEFjdGl2aXR5KCkgYXMgQWN0aXZpdHk7XHJcblxyXG4gICAgICBjb25zdCB7IGFwcGxpY2F0aW9uX2lkIH0gPSBhY3Rpdml0eSB8fCB7fTtcclxuICAgICAgY29uc3QgeyBsYXJnZV9pbWFnZSwgc21hbGxfaW1hZ2UgfSA9IGFjdGl2aXR5Py5hc3NldHMgfHwge307XHJcblxyXG4gICAgICBjb25zdCBbbGFyZ2VJbWFnZSwgc21hbGxJbWFnZV0gPSBbXHJcbiAgICAgICAgbGFyZ2VfaW1hZ2UgJiZcclxuICAgICAgICAgIGBodHRwczovL2Nkbi5kaXNjb3JkYXBwLmNvbS9hcHAtYXNzZXRzLyR7YXBwbGljYXRpb25faWR9LyR7bGFyZ2VfaW1hZ2V9LnBuZz9zaXplPTI1NmAsXHJcbiAgICAgICAgc21hbGxfaW1hZ2UgJiZcclxuICAgICAgICAgIGBodHRwczovL2Nkbi5kaXNjb3JkYXBwLmNvbS9hcHAtYXNzZXRzLyR7YXBwbGljYXRpb25faWR9LyR7c21hbGxfaW1hZ2V9LnBuZz9zaXplPTI1NmAsXHJcbiAgICAgIF07XHJcblxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGxhcmdlSW1hZ2UsXHJcbiAgICAgICAgc21hbGxJbWFnZSxcclxuICAgICAgfTtcclxuICAgIH1cclxuICB9O1xyXG4gIFxyXG4gIFxyXG4gaWYgKGxvYWRpbmcgPT09IGZhbHNlICYmIHN0YXR1cz8uZGlzY29yZF9zdGF0dXMgPT09IFwib25saW5lXCIpXHJcbiByZXR1cm4gKCBcclxuIDxCb3ggZGlzcGxheT17XCJmbGV4XCJ9IGZsZXhXcmFwPXtcIm5vd3JhcFwifSBmbG9hdD17XCJsZWZ0XCJ9IHBhZGRpbmc9e1wiNVwifSAgbWFyZ2luVG9wPXtcIjVcIn0gX2hvdmVyPXt7IHNoYWRvdzogXCJsZ1wiIH19ICBiYWNrZ3JvdW5kQ29sb3I9e3VzZUNvbG9yTW9kZVZhbHVlKFwiZ3JheS4xMDBcIiwgXCIjMWUyNTMzXCIpfSByb3VuZGVkPXtcIm1kXCJ9PlxyXG4gPFN0YWNrIGJhY2tncm91bmRDb2xvcj17XCJncmVlbi41MDBcIn0gcm91bmRlZD17XCJmdWxsXCJ9IHdpZHRoPXtcIjRcIn0gaGVpZ2h0PXs0fSBtYXJnaW49e1wiYXV0b1wifSBhbGlnbkl0ZW1zPXtcImNlbnRlclwifT48L1N0YWNrPlxyXG4gPFRleHQgdGV4dENvbG9yPXt1c2VDb2xvck1vZGVWYWx1ZShcImJsYWNrXCIsIFwid2hpdGVcIil9IGZvbnRTaXplPXtcIm1kXCJ9ICB0ZXh0QWxpZ249e1wiY2VudGVyXCJ9IG1hcmdpbj17XCIxXCJ9PiBPbmxpbmU8L1RleHQ+XHJcbjwvQm94PiBcclxuXHJcbiApO1xyXG4gZWxzZSBpZiAobG9hZGluZyA9PT0gZmFsc2UgJiYgc3RhdHVzPy5kaXNjb3JkX3N0YXR1cyA9PT0gXCJpZGxlXCIpXHJcbiByZXR1cm4gKCBcclxuIDxCb3ggZGlzcGxheT17XCJmbGV4XCJ9IGZsZXhXcmFwPXtcIm5vd3JhcFwifSBmbG9hdD17XCJsZWZ0XCJ9IHBhZGRpbmc9e1wiNVwifSBtYXJnaW5Ub3A9e1wiNVwifSAgX2hvdmVyPXt7IHNoYWRvdzogXCJsZ1wiIH19ICBiYWNrZ3JvdW5kQ29sb3I9e3VzZUNvbG9yTW9kZVZhbHVlKFwiZ3JheS4xMDBcIiwgXCIjMWUyNTMzXCIpfSByb3VuZGVkPXtcIm1kXCJ9PlxyXG4gPFN0YWNrIGJhY2tncm91bmRDb2xvcj17XCJ5ZWxsb3cuNDAwXCJ9IHJvdW5kZWQ9e1wiZnVsbFwifSB3aWR0aD17XCI0XCJ9IGhlaWdodD17NH0gbWFyZ2luPXtcImF1dG9cIn0gYWxpZ25JdGVtcz17XCJjZW50ZXJcIn0+PC9TdGFjaz5cclxuIDxUZXh0IHRleHRDb2xvcj17dXNlQ29sb3JNb2RlVmFsdWUoXCJibGFja1wiLCBcIndoaXRlXCIpfSBmb250U2l6ZT17XCJtZFwifSB0ZXh0QWxpZ249e1wiY2VudGVyXCJ9IG1hcmdpbj17XCIxXCJ9PiBJZGxlZDwvVGV4dD5cclxuIDxTdGFjayBtYXJnaW5SaWdodD17XCI1XCJ9IG9iamVjdEZpdD17XCJjb3ZlclwifSBib3JkZXJSYWRpdXM9e1wiNTAlXCJ9PlxyXG4gICAgICAgICAgICAgICAgIHtnZXRJbWFnZSgpLmxhcmdlSW1hZ2UgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgIHNyYz17Z2V0SW1hZ2UoKS5sYXJnZUltYWdlIHx8IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiODBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjgwcHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICBhbHQ9XCJpY29uXCJcclxuICAgICAgICAgICAgICAgICAgICAgZHJhZ2dhYmxlPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdD1cImNvdmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1sZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvU3RhY2s+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPFRleHQgZm9udFNpemU9e1wic21cIn0gbWFyZ2luPXtcImF1dG9cIn0gdGV4dEFsaWduPXtcImNlbnRlclwifT4gICAgXHJcbiAgICAgICAgICAgICAgPGgxPiB7Z2V0QWN0aXZpdHkoKT8ubmFtZX08L2gxPlxyXG4gICAgICAgICAgICAgIDxoMT4ge2dldEFjdGl2aXR5KCk/LmRldGFpbHN9PC9oMT5cclxuICAgICAgICAgICAgICA8aDE+IHtnZXRBY3Rpdml0eSgpPy5zdGF0ZX0gPC9oMT4gICAgXHJcbiAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gPC9Cb3g+IFxyXG5cclxuICk7XHJcbiBlbHNlIGlmIChsb2FkaW5nID09PSBmYWxzZSAmJiBzdGF0dXM/LmRpc2NvcmRfc3RhdHVzID09PSBcImRuZFwiKVxyXG4gcmV0dXJuIChcclxuICA8Qm94IGRpc3BsYXk9e1wiZmxleFwifSBmbGV4V3JhcD17XCJub3dyYXBcIn0gZmxvYXQ9e1wibGVmdFwifSBwYWRkaW5nPXtcIjVcIn0gIF9ob3Zlcj17eyBzaGFkb3c6IFwibGdcIiB9fSBtYXJnaW5Ub3A9e1wiNVwifSAgYmFja2dyb3VuZENvbG9yPXt1c2VDb2xvck1vZGVWYWx1ZShcImdyYXkuMTAwXCIsIFwiIzFlMjUzM1wiKX0gcm91bmRlZD17XCJtZFwifT5cclxuICA8U3RhY2sgYmFja2dyb3VuZENvbG9yPXtcInJlZC41MDBcIn0gcm91bmRlZD17XCJmdWxsXCJ9IHdpZHRoPXtcIjRcIn0gaGVpZ2h0PXs0fSBtYXJnaW49e1wiYXV0b1wifSBhbGlnbkl0ZW1zPXtcImNlbnRlclwifT48L1N0YWNrPlxyXG4gIDxUZXh0IHRleHRDb2xvcj17dXNlQ29sb3JNb2RlVmFsdWUoXCJibGFja1wiLCBcIndoaXRlXCIpfSBmb250U2l6ZT17XCJtZFwifSAgdGV4dEFsaWduPXtcImNlbnRlclwifSBtYXJnaW49e1wiMVwifT4gRGlzdHVyYmluZzwvVGV4dD5cclxuPC9Cb3g+XHJcblxyXG4gKTtcclxuIGVsc2UgXHJcbiByZXR1cm4gKFxyXG4gIDxCb3ggZGlzcGxheT17XCJmbGV4XCJ9IGZsZXhXcmFwPXtcIm5vd3JhcFwifSBmbG9hdD17XCJsZWZ0XCJ9IHBhZGRpbmc9e1wiNVwifSAgbWFyZ2luVG9wPXtcIjVcIn0gX2hvdmVyPXt7IHNoYWRvdzogXCJsZ1wiIH19ICBiYWNrZ3JvdW5kQ29sb3I9e3VzZUNvbG9yTW9kZVZhbHVlKFwiZ3JheS4xMDBcIiwgXCIjMWUyNTMzXCIpfSByb3VuZGVkPXtcIm1kXCJ9PlxyXG4gICA8VG9vbHRpcCBoYXNBcnJvdyBsYWJlbD1cIk9mZmxpbmVcIiBwbGFjZW1lbnQ9XCJ0b3BcIj48U3RhY2sgYmFja2dyb3VuZENvbG9yPXt1c2VDb2xvck1vZGVWYWx1ZShcImdyYXkuNDAwXCIsIFwiZ3JheS42MDBcIil9IHJvdW5kZWQ9e1wiZnVsbFwifSB3aWR0aD17XCI0XCJ9IGhlaWdodD17NH0gbWFyZ2luPXtcImF1dG9cIn0gYWxpZ25JdGVtcz17XCJjZW50ZXJcIn0+PC9TdGFjaz48L1Rvb2x0aXA+XHJcbiAgPFRleHQgdGV4dENvbG9yPXt1c2VDb2xvck1vZGVWYWx1ZShcImJsYWNrXCIsIFwid2hpdGVcIil9IGZvbnRTaXplPXtcIm1kXCJ9ICB0ZXh0QWxpZ249e1wiY2VudGVyXCJ9IG1hcmdpbj17XCIxXCJ9PiBPZmZsaW5lPC9UZXh0PiAgICAgICBcclxuPC9Cb3g+XHJcbiApXHJcbiBcclxuIFxyXG4vKlxyXG4gXHJcbiAgaWYgKGxvYWRpbmcgPT09IGZhbHNlICYmIHN0YXR1cz8uZGlzY29yZF9zdGF0dXMgPT09IFwib2ZmbGluZVwiICkgXHJcbiAgcmV0dXJuICA8Qm94IGRpc3BsYXk9e1wiZmxleFwifSBmbGV4V3JhcD17XCJub3dyYXBcIn0gZmxvYXQ9e1wibGVmdFwifSBwYWRkaW5nPXtcIjVcIn0gIG1hcmdpblRvcD17XCI1XCJ9IF9ob3Zlcj17eyBzaGFkb3c6IFwibGdcIiB9fSAgYmFja2dyb3VuZENvbG9yPXt1c2VDb2xvck1vZGVWYWx1ZShcImdyYXkuMTAwXCIsIFwiIzFlMjUzM1wiKX0gcm91bmRlZD17XCJtZFwifT5cclxuICAgPFRvb2x0aXAgaGFzQXJyb3cgbGFiZWw9XCJPZmZsaW5lXCIgcGxhY2VtZW50PVwidG9wXCI+PFN0YWNrIGJhY2tncm91bmRDb2xvcj17dXNlQ29sb3JNb2RlVmFsdWUoXCJncmF5LjQwMFwiLCBcImdyYXkuNjAwXCIpfSByb3VuZGVkPXtcImZ1bGxcIn0gd2lkdGg9e1wiNFwifSBoZWlnaHQ9ezR9IG1hcmdpbj17XCJhdXRvXCJ9IGFsaWduSXRlbXM9e1wiY2VudGVyXCJ9PjwvU3RhY2s+PC9Ub29sdGlwPlxyXG4gIDxUZXh0IHRleHRDb2xvcj17dXNlQ29sb3JNb2RlVmFsdWUoXCJibGFja1wiLCBcIndoaXRlXCIpfSBmb250U2l6ZT17XCJtZFwifSAgdGV4dEFsaWduPXtcImNlbnRlclwifSBtYXJnaW49e1wiMVwifT4gT2ZmbGluZTwvVGV4dD4gICAgICAgXHJcbjwvQm94PlxyXG5cclxuICAgIGVsc2UgaWYgKGxvYWRpbmcgPT09IGZhbHNlICYmIHN0YXR1cz8uZGlzY29yZF9zdGF0dXMgPT09IFwib25saW5lXCIgJiYgc3RhdHVzPy5saXN0ZW5pbmdfdG9fc3BvdGlmeSA9PT0gZmFsc2UpXHJcbiAgICByZXR1cm4gKCA8Qm94IGRpc3BsYXk9e1wiZmxleFwifSBmbGV4V3JhcD17XCJub3dyYXBcIn0gZmxvYXQ9e1wibGVmdFwifSBwYWRkaW5nPXtcIjVcIn0gIG1hcmdpblRvcD17XCI1XCJ9IF9ob3Zlcj17eyBzaGFkb3c6IFwibGdcIiB9fSAgYmFja2dyb3VuZENvbG9yPXt1c2VDb2xvck1vZGVWYWx1ZShcImdyYXkuMTAwXCIsIFwiIzFlMjUzM1wiKX0gcm91bmRlZD17XCJtZFwifT5cclxuICAgICAgPFN0YWNrIGJhY2tncm91bmRDb2xvcj17XCJncmVlbi41MDBcIn0gcm91bmRlZD17XCJmdWxsXCJ9IHdpZHRoPXtcIjRcIn0gaGVpZ2h0PXs0fSBtYXJnaW49e1wiYXV0b1wifSBhbGlnbkl0ZW1zPXtcImNlbnRlclwifT48L1N0YWNrPlxyXG4gICAgICA8VGV4dCB0ZXh0Q29sb3I9e3VzZUNvbG9yTW9kZVZhbHVlKFwiYmxhY2tcIiwgXCJ3aGl0ZVwiKX0gZm9udFNpemU9e1wibWRcIn0gIHRleHRBbGlnbj17XCJjZW50ZXJcIn0gbWFyZ2luPXtcIjFcIn0+IE9ubGluZTwvVGV4dD5cclxuICAgIDwvQm94PiBcclxuICAgICk7XHJcbiAgICBlbHNlIGlmICggbG9hZGluZyA9PT0gZmFsc2UgJiYgc3RhdHVzPy5kaXNjb3JkX3N0YXR1cyA9PT0gXCJvbmxpbmVcIiAmJiBzdGF0dXM/Lmxpc3RlbmluZ190b19zcG90aWZ5ID09PSB0cnVlKVxyXG4gICAgcmV0dXJuICggPEJveCBkaXNwbGF5PXtcImZsZXhcIn0gZmxleFdyYXA9e1wibm93cmFwXCJ9IGZsb2F0PXtcImxlZnRcIn0gcGFkZGluZz17XCI1XCJ9IG1hcmdpblRvcD17XCI1XCJ9ICBfaG92ZXI9e3sgc2hhZG93OiBcImxnXCIgfX0gIGJhY2tncm91bmRDb2xvcj17dXNlQ29sb3JNb2RlVmFsdWUoXCJncmF5LjEwMFwiLCBcIiMxZTI1MzNcIil9IHJvdW5kZWQ9e1wibWRcIn0+XHJcbiAgIDxUb29sdGlwIGhhc0Fycm93IGxhYmVsPVwiT25saW5lXCIgcGxhY2VtZW50PVwidG9wXCI+PFN0YWNrIGJhY2tncm91bmRDb2xvcj17XCJncmVlbi41MDBcIn0gcm91bmRlZD17XCJmdWxsXCJ9IHdpZHRoPXtcIjRcIn0gaGVpZ2h0PXs0fSBtYXJnaW49e1wiYXV0b1wifSBtYXJnaW5SaWdodD17XCI1XCJ9IGFsaWduSXRlbXM9e1wiY2VudGVyXCJ9PjwvU3RhY2s+PC9Ub29sdGlwPiBcclxuICA8VGV4dCBmb250U2l6ZT17XCJzbVwifSBtYXJnaW49e1wiYXV0b1wifSB0ZXh0QWxpZ249e1wiY2VudGVyXCJ9IG1hcmdpblJpZ2h0PXtcIjVcIn0gdGV4dENvbG9yPXt1c2VDb2xvck1vZGVWYWx1ZShcImdyYXkuNDAwXCIsIFwiZ3JheS42MDBcIil9Pkxpc3RlbmluZyB0bzwvVGV4dD5cclxuICA8U3RhY2sgbWFyZ2luUmlnaHQ9e1wiNVwifSBvYmplY3RGaXQ9e1wiY292ZXJcIn0gYm9yZGVyUmFkaXVzPXtcIjUwJVwifT5cclxuICAgICAgICAgICAgICAgICB7Z2V0SW1hZ2UoKS5sYXJnZUltYWdlICYmIChcclxuICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICBzcmM9e2dldEltYWdlKCkubGFyZ2VJbWFnZSB8fCBcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjgwcHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCI4MHB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgYWx0PVwiaWNvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgIGRyYWdnYWJsZT1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ9XCJjb3ZlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtbGdcIlxyXG4gICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L1N0YWNrPlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDxUZXh0IGZvbnRTaXplPXtcInNtXCJ9IG1hcmdpbj17XCJhdXRvXCJ9IHRleHRBbGlnbj17XCJjZW50ZXJcIn0+ICAgIFxyXG4gICAgICAgICAgICAgIDxoMT4ge2dldEFjdGl2aXR5KCk/Lm5hbWV9PC9oMT5cclxuICAgICAgICAgICAgICA8aDE+IHtnZXRBY3Rpdml0eSgpPy5kZXRhaWxzfTwvaDE+XHJcbiAgICAgICAgICAgICAgPGgxPiB7Z2V0QWN0aXZpdHkoKT8uc3RhdGV9IDwvaDE+ICAgIFxyXG4gICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICBcclxuICA8L0JveD4gXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgIFxyXG4gICAgKTtcclxuICAgIGVsc2UgaWYgKGxvYWRpbmcgPT09IGZhbHNlICYmIHN0YXR1cz8uZGlzY29yZF9zdGF0dXMgPT09IFwiZG5kXCIgJiYgc3RhdHVzPy5saXN0ZW5pbmdfdG9fc3BvdGlmeSA9PT0gZmFsc2UpXHJcbiAgICByZXR1cm4gKCA8Qm94IGRpc3BsYXk9e1wiZmxleFwifSBmbGV4V3JhcD17XCJub3dyYXBcIn0gZmxvYXQ9e1wibGVmdFwifSBwYWRkaW5nPXtcIjVcIn0gIF9ob3Zlcj17eyBzaGFkb3c6IFwibGdcIiB9fSBtYXJnaW5Ub3A9e1wiNVwifSAgYmFja2dyb3VuZENvbG9yPXt1c2VDb2xvck1vZGVWYWx1ZShcImdyYXkuMTAwXCIsIFwiIzFlMjUzM1wiKX0gcm91bmRlZD17XCJtZFwifT5cclxuICAgIDxTdGFjayBiYWNrZ3JvdW5kQ29sb3I9e1wicmVkLjUwMFwifSByb3VuZGVkPXtcImZ1bGxcIn0gd2lkdGg9e1wiNFwifSBoZWlnaHQ9ezR9IG1hcmdpbj17XCJhdXRvXCJ9IGFsaWduSXRlbXM9e1wiY2VudGVyXCJ9PjwvU3RhY2s+XHJcbiAgICA8VGV4dCB0ZXh0Q29sb3I9e3VzZUNvbG9yTW9kZVZhbHVlKFwiYmxhY2tcIiwgXCJ3aGl0ZVwiKX0gZm9udFNpemU9e1wibWRcIn0gIHRleHRBbGlnbj17XCJjZW50ZXJcIn0gbWFyZ2luPXtcIjFcIn0+IERpc3R1cmJpbmc8L1RleHQ+XHJcbiAgPC9Cb3g+ICk7XHJcbiAgIGVsc2UgaWYgKCBsb2FkaW5nID09PSBmYWxzZSAmJiBzdGF0dXM/LmRpc2NvcmRfc3RhdHVzID09PSBcImRuZFwiICYmIHN0YXR1cz8ubGlzdGVuaW5nX3RvX3Nwb3RpZnkgPT09IHRydWUpXHJcbiAgIHJldHVybiAoXHJcbiAgICA8Qm94IGRpc3BsYXk9e1wiZmxleFwifSBmbGV4V3JhcD17XCJub3dyYXBcIn0gZmxvYXQ9e1wibGVmdFwifSBwYWRkaW5nPXtcIjVcIn0gbWFyZ2luVG9wPXtcIjVcIn0gIF9ob3Zlcj17eyBzaGFkb3c6IFwibGdcIiB9fSAgYmFja2dyb3VuZENvbG9yPXt1c2VDb2xvck1vZGVWYWx1ZShcImdyYXkuMTAwXCIsIFwiIzFlMjUzM1wiKX0gcm91bmRlZD17XCJtZFwifT5cclxuICAgICA8VG9vbHRpcCBoYXNBcnJvdyBsYWJlbD1cIkRpc3R1cmJpbmdcIiBwbGFjZW1lbnQ9XCJ0b3BcIj48U3RhY2sgYmFja2dyb3VuZENvbG9yPXtcInJlZC41MDBcIn0gcm91bmRlZD17XCJmdWxsXCJ9IHdpZHRoPXtcIjRcIn0gaGVpZ2h0PXs0fSBtYXJnaW49e1wiYXV0b1wifSBtYXJnaW5SaWdodD17XCI1XCJ9IGFsaWduSXRlbXM9e1wiY2VudGVyXCJ9PjwvU3RhY2s+PC9Ub29sdGlwPlxyXG4gIDxUZXh0IGZvbnRTaXplPXtcInNtXCJ9IG1hcmdpbj17XCJhdXRvXCJ9IHRleHRBbGlnbj17XCJjZW50ZXJcIn0gbWFyZ2luUmlnaHQ9e1wiNVwifSB0ZXh0Q29sb3I9e3VzZUNvbG9yTW9kZVZhbHVlKFwiZ3JheS40MDBcIiwgXCJncmF5LjYwMFwiKX0+TGlzdGVuaW5nIHRvPC9UZXh0PlxyXG4gIDxTdGFjayBtYXJnaW5SaWdodD17XCI1XCJ9IG9iamVjdEZpdD17XCJjb3ZlclwifSBib3JkZXJSYWRpdXM9e1wiNTAlXCJ9PlxyXG4gICAgICAgICAgICAgICAgIHtnZXRJbWFnZSgpLmxhcmdlSW1hZ2UgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgIHNyYz17Z2V0SW1hZ2UoKS5sYXJnZUltYWdlIHx8IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiODBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjgwcHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICBhbHQ9XCJpY29uXCJcclxuICAgICAgICAgICAgICAgICAgICAgZHJhZ2dhYmxlPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdD1cImNvdmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1sZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvU3RhY2s+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPFRleHQgZm9udFNpemU9e1wic21cIn0gbWFyZ2luPXtcImF1dG9cIn0gdGV4dEFsaWduPXtcImNlbnRlclwifT4gICAgXHJcbiAgICAgICAgICAgICAgPGgxPiB7Z2V0QWN0aXZpdHkoKT8ubmFtZX08L2gxPlxyXG4gICAgICAgICAgICAgIDxoMT4ge2dldEFjdGl2aXR5KCk/LmRldGFpbHN9PC9oMT5cclxuICAgICAgICAgICAgICA8aDE+IHtnZXRBY3Rpdml0eSgpPy5zdGF0ZX0gPC9oMT4gICAgXHJcbiAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgIFxyXG4gIDwvQm94PiBcclxuICAgICAgICAgXHJcbiAgIClcclxuICBlbHNlIGlmICggbG9hZGluZyA9PT0gZmFsc2UgJiYgc3RhdHVzPy5kaXNjb3JkX3N0YXR1cyA9PT0gXCJpZGxlXCIgJiYgc3RhdHVzPy5saXN0ZW5pbmdfdG9fc3BvdGlmeSA9PT0gZmFsc2UpXHJcbiAgcmV0dXJuICggPEJveCBkaXNwbGF5PXtcImZsZXhcIn0gZmxleFdyYXA9e1wibm93cmFwXCJ9IGZsb2F0PXtcImxlZnRcIn0gcGFkZGluZz17XCI1XCJ9IG1hcmdpblRvcD17XCI1XCJ9ICBfaG92ZXI9e3sgc2hhZG93OiBcImxnXCIgfX0gIGJhY2tncm91bmRDb2xvcj17dXNlQ29sb3JNb2RlVmFsdWUoXCJncmF5LjEwMFwiLCBcIiMxZTI1MzNcIil9IHJvdW5kZWQ9e1wibWRcIn0+XHJcbiAgPFN0YWNrIGJhY2tncm91bmRDb2xvcj17XCJ5ZWxsb3cuNDAwXCJ9IHJvdW5kZWQ9e1wiZnVsbFwifSB3aWR0aD17XCI0XCJ9IGhlaWdodD17NH0gbWFyZ2luPXtcImF1dG9cIn0gYWxpZ25JdGVtcz17XCJjZW50ZXJcIn0+PC9TdGFjaz5cclxuICA8VGV4dCB0ZXh0Q29sb3I9e3VzZUNvbG9yTW9kZVZhbHVlKFwiYmxhY2tcIiwgXCJ3aGl0ZVwiKX0gZm9udFNpemU9e1wibWRcIn0gdGV4dEFsaWduPXtcImNlbnRlclwifSBtYXJnaW49e1wiMVwifT4gSWRsZWQ8L1RleHQ+XHJcbiAgPC9Cb3g+IFxyXG4gICk7XHJcbiAgIGVsc2UgaWYgKCBsb2FkaW5nID09PSBmYWxzZSAmJiBzdGF0dXM/LmRpc2NvcmRfc3RhdHVzID09PSBcImlkbGVcIiAmJiBzdGF0dXM/Lmxpc3RlbmluZ190b19zcG90aWZ5ID09PSB0cnVlKVxyXG4gICByZXR1cm4gKFxyXG4gICAgPEJveCBkaXNwbGF5PXtcImZsZXhcIn0gZmxleFdyYXA9e1wibm93cmFwXCJ9IGZsb2F0PXtcImxlZnRcIn0gcGFkZGluZz17XCI1XCJ9IG1hcmdpblRvcD17XCI1XCJ9ICBfaG92ZXI9e3sgc2hhZG93OiBcImxnXCIgfX0gIGJhY2tncm91bmRDb2xvcj17dXNlQ29sb3JNb2RlVmFsdWUoXCJncmF5LjEwMFwiLCBcIiMxZTI1MzNcIil9IHJvdW5kZWQ9e1wibWRcIn0+XHJcbiAgICA8VG9vbHRpcCBoYXNBcnJvdyBsYWJlbD1cIklkbGVkXCIgcGxhY2VtZW50PVwidG9wXCI+PFN0YWNrIGJhY2tncm91bmRDb2xvcj17XCJ5ZWxsb3cuNDAwXCJ9IHJvdW5kZWQ9e1wiZnVsbFwifSB3aWR0aD17XCI0XCJ9IGhlaWdodD17NH0gbWFyZ2luPXtcImF1dG9cIn0gbWFyZ2luUmlnaHQ9e1wiNVwifSBhbGlnbkl0ZW1zPXtcImNlbnRlclwifT48L1N0YWNrPjwvVG9vbHRpcD5cclxuICA8VGV4dCBmb250U2l6ZT17XCJzbVwifSBtYXJnaW49e1wiYXV0b1wifSB0ZXh0QWxpZ249e1wiY2VudGVyXCJ9IG1hcmdpblJpZ2h0PXtcIjVcIn0gdGV4dENvbG9yPXt1c2VDb2xvck1vZGVWYWx1ZShcImdyYXkuNDAwXCIsIFwiZ3JheS42MDBcIil9Pkxpc3RlbmluZyB0bzwvVGV4dD5cclxuICA8U3RhY2sgbWFyZ2luUmlnaHQ9e1wiNVwifSBvYmplY3RGaXQ9e1wiY292ZXJcIn0gYm9yZGVyUmFkaXVzPXtcIjUwJVwifT5cclxuICAgICAgICAgICAgICAgICB7Z2V0SW1hZ2UoKS5sYXJnZUltYWdlICYmIChcclxuICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICBzcmM9e2dldEltYWdlKCkubGFyZ2VJbWFnZSB8fCBcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjgwcHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCI4MHB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgYWx0PVwiaWNvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgIGRyYWdnYWJsZT1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ9XCJjb3ZlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtbGdcIlxyXG4gICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L1N0YWNrPlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDxUZXh0IGZvbnRTaXplPXtcInNtXCJ9IG1hcmdpbj17XCJhdXRvXCJ9IHRleHRBbGlnbj17XCJjZW50ZXJcIn0+ICAgIFxyXG4gICAgICAgICAgICAgIDxoMT4ge2dldEFjdGl2aXR5KCk/Lm5hbWV9PC9oMT5cclxuICAgICAgICAgICAgICA8aDE+IHtnZXRBY3Rpdml0eSgpPy5kZXRhaWxzfTwvaDE+XHJcbiAgICAgICAgICAgICAgPGgxPiB7Z2V0QWN0aXZpdHkoKT8uc3RhdGV9IDwvaDE+ICAgIFxyXG4gICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICBcclxuICA8L0JveD4gXHJcbiAgICAgICAgIFxyXG4gICApO1xyXG4gIGVsc2UgKHN0YXR1cz8uZGlzY29yZF9zdGF0dXMgPT09IFwiaW52aXNpYmxlXCIpXHJcbiAgcmV0dXJuICggPEJveCBkaXNwbGF5PXtcImZsZXhcIn0gZmxleFdyYXA9e1wibm93cmFwXCJ9IGZsb2F0PXtcImxlZnRcIn0gcGFkZGluZz17XCI1XCJ9IG1hcmdpblRvcD17XCI1XCJ9ICBfaG92ZXI9e3sgc2hhZG93OiBcImxnXCIgfX0gIGJhY2tncm91bmRDb2xvcj17dXNlQ29sb3JNb2RlVmFsdWUoXCJncmF5LjEwMFwiLCBcIiMxZTI1MzNcIil9IHJvdW5kZWQ9e1wibWRcIn0+XHJcbiAgPFN0YWNrIGJhY2tncm91bmRDb2xvcj17dXNlQ29sb3JNb2RlVmFsdWUoXCJncmF5LjQwMFwiLCBcImdyYXkuNjAwXCIpfSByb3VuZGVkPXtcImZ1bGxcIn0gd2lkdGg9e1wiNFwifSBoZWlnaHQ9ezR9IG1hcmdpbj17XCJhdXRvXCJ9IGFsaWduSXRlbXM9e1wiY2VudGVyXCJ9PjwvU3RhY2s+XHJcbiAgPFRleHQgdGV4dENvbG9yPXt1c2VDb2xvck1vZGVWYWx1ZShcImJsYWNrXCIsIFwid2hpdGVcIil9IGZvbnRTaXplPXtcIm1kXCJ9IHRleHRBbGlnbj17XCJjZW50ZXJcIn0gbWFyZ2luPXtcIjFcIn0+IE9mZmxpbmU8L1RleHQ+XHJcbiAgPC9Cb3g+ICApO1xyXG4gXHJcbiAgKi9cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0YXR1czsiXSwic291cmNlUm9vdCI6IiJ9