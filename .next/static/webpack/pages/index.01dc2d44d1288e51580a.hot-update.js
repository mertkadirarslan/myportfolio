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
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var react_use_lanyard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-use-lanyard */ "./node_modules/react-use-lanyard/dist/index.js");
/* harmony import */ var react_use_lanyard__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_use_lanyard__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/user */ "./data/user.ts");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\mert\\Desktop\\myportfolio\\data\\Status.tsx",
    _this = undefined,
    _s = $RefreshSig$();




/* Import data */


var Status = function Status() {
  _s();

  var _useLanyard = (0,react_use_lanyard__WEBPACK_IMPORTED_MODULE_1__.useLanyard)({
    userId: _data_user__WEBPACK_IMPORTED_MODULE_2__.default,
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

  if (loading === false && (status === null || status === void 0 ? void 0 : status.discord_status) === "online") return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
    display: "flex",
    flexWrap: "nowrap",
    "float": "left",
    padding: "5",
    marginTop: "5",
    _hover: {
      shadow: "lg"
    },
    backgroundColor: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useColorModeValue)("gray.100", "#1e2533"),
    rounded: "md",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Stack, {
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
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {
      textColor: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useColorModeValue)("black", "white"),
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
  }, _this);else if (loading === false && (status === null || status === void 0 ? void 0 : status.discord_status) === "idle") return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
    display: "flex",
    flexWrap: "nowrap",
    "float": "left",
    padding: "5",
    marginTop: "5",
    _hover: {
      shadow: "lg"
    },
    backgroundColor: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useColorModeValue)("gray.100", "#1e2533"),
    rounded: "md",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Stack, {
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
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {
      textColor: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useColorModeValue)("black", "white"),
      fontSize: "md",
      textAlign: "center",
      margin: "1",
      children: " Idled"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 2
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 83,
    columnNumber: 2
  }, _this);else if (loading === false && (status === null || status === void 0 ? void 0 : status.discord_status) === "dnd") return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
    display: "flex",
    flexWrap: "nowrap",
    "float": "left",
    padding: "5",
    _hover: {
      shadow: "lg"
    },
    marginTop: "5",
    backgroundColor: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useColorModeValue)("gray.100", "#1e2533"),
    rounded: "md",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Stack, {
      backgroundColor: "red.500",
      rounded: "full",
      width: "4",
      height: 4,
      margin: "auto",
      alignItems: "center"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 3
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {
      textColor: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useColorModeValue)("black", "white"),
      fontSize: "md",
      textAlign: "center",
      margin: "1",
      children: " Disturbing"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 3
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 92,
    columnNumber: 3
  }, _this);else return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
    display: "flex",
    flexWrap: "nowrap",
    "float": "left",
    padding: "5",
    marginTop: "5",
    _hover: {
      shadow: "lg"
    },
    backgroundColor: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useColorModeValue)("gray.100", "#1e2533"),
    rounded: "md",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
      hasArrow: true,
      label: "Offline",
      placement: "top",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Stack, {
        backgroundColor: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useColorModeValue)("gray.400", "gray.600"),
        rounded: "full",
        width: "4",
        height: 4,
        margin: "auto",
        alignItems: "center"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 54
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 4
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {
      textColor: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useColorModeValue)("black", "white"),
      fontSize: "md",
      textAlign: "center",
      margin: "1",
      children: " Offline"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 3
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 100,
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
  return [react_use_lanyard__WEBPACK_IMPORTED_MODULE_1__.useLanyard, _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useColorModeValue, _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useColorModeValue, _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useColorModeValue, _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useColorModeValue, _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useColorModeValue, _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useColorModeValue, _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useColorModeValue, _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useColorModeValue, _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useColorModeValue];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZGF0YS9TdGF0dXMudHN4Il0sIm5hbWVzIjpbIlN0YXR1cyIsInVzZUxhbnlhcmQiLCJ1c2VySWQiLCJzb2NrZXQiLCJsb2FkaW5nIiwic3RhdHVzIiwiZ2V0QWN0aXZpdHkiLCJsaXN0ZW5pbmdfdG9fc3BvdGlmeSIsInNwb3RpZnkiLCJzb25nIiwiYXJ0aXN0IiwiYWxidW0iLCJuYW1lIiwiZGV0YWlscyIsInN0YXRlIiwiZ2V0SW1hZ2UiLCJhY3Rpdml0eSIsImxhcmdlSW1hZ2UiLCJhbGJ1bV9hcnRfdXJsIiwiYXBwbGljYXRpb25faWQiLCJhc3NldHMiLCJsYXJnZV9pbWFnZSIsInNtYWxsX2ltYWdlIiwic21hbGxJbWFnZSIsImRpc2NvcmRfc3RhdHVzIiwic2hhZG93IiwidXNlQ29sb3JNb2RlVmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFhQTs7QUFPQTtBQUNBOztBQUlBLElBQU1BLE1BQWdCLEdBQUcsU0FBbkJBLE1BQW1CLEdBQU07QUFBQTs7QUFBQSxvQkFFREMsNkRBQVUsQ0FBQztBQUNyQ0MsVUFBTSxFQUFOQSwrQ0FEcUM7QUFFckNDLFVBQU0sRUFBRTtBQUY2QixHQUFELENBRlQ7QUFBQSxNQUVyQkMsT0FGcUIsZUFFckJBLE9BRnFCO0FBQUEsTUFFWkMsTUFGWSxlQUVaQSxNQUZZOztBQU83QixNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3hCLFFBQUksQ0FBQUQsTUFBTSxTQUFOLElBQUFBLE1BQU0sV0FBTixZQUFBQSxNQUFNLENBQUVFLG9CQUFSLE1BQWlDLElBQXJDLEVBQTJDO0FBQUEsaUJBQ1RGLE1BQU0sQ0FBQ0csT0FBUCxJQUFrQixFQURUO0FBQUEsVUFDakNDLElBRGlDLFFBQ2pDQSxJQURpQztBQUFBLFVBQzNCQyxNQUQyQixRQUMzQkEsTUFEMkI7QUFBQSxVQUNuQkMsS0FEbUIsUUFDbkJBLEtBRG1COztBQUd6QyxhQUFPO0FB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ZGV4LjAxZGMyZDQ0ZDEyODhlNTE1ODBhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEZsZXgsXHJcbiAgQXZhdGFyLFxyXG4gIEJveCxcclxuICBUZXh0LFxyXG4gIEJhZGdlLFxyXG4gIFN0YWNrLFxyXG4gIExpbmssXHJcbiAgVW5vcmRlcmVkTGlzdCxcclxuICBMaXN0SXRlbSxcclxuICB1c2VDb2xvck1vZGVWYWx1ZSxcclxuICBUb29sdGlwXHJcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlTGFueWFyZCB9IGZyb20gXCJyZWFjdC11c2UtbGFueWFyZFwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuXHJcblxyXG4vKiBJbXBvcnQgdHlwZXMgKi9cclxuaW1wb3J0IHR5cGUgeyBBY3Rpdml0eSB9IGZyb20gXCJyZWFjdC11c2UtbGFueWFyZFwiO1xyXG5cclxuLyogSW1wb3J0IGRhdGEgKi9cclxuaW1wb3J0IHVzZXJJZCBmcm9tIFwiLi4vZGF0YS91c2VyXCI7XHJcblxyXG5cclxuXHJcbmNvbnN0IFN0YXR1czogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiBcclxuICBjb25zdCB7IGxvYWRpbmcsIHN0YXR1cyB9ID0gdXNlTGFueWFyZCh7XHJcbiAgICB1c2VySWQsXHJcbiAgICBzb2NrZXQ6IHRydWUsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGdldEFjdGl2aXR5ID0gKCkgPT4ge1xyXG4gICAgaWYgKHN0YXR1cz8ubGlzdGVuaW5nX3RvX3Nwb3RpZnkgPT09IHRydWUpIHtcclxuICAgICAgY29uc3QgeyBzb25nLCBhcnRpc3QsIGFsYnVtIH0gPSBzdGF0dXMuc3BvdGlmeSB8fCB7fTtcclxuXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgbmFtZTogc29uZyxcclxuICAgICAgICBkZXRhaWxzOiBgYnkgJHthcnRpc3R9YCxcclxuICAgICAgICBzdGF0ZTogYG9uICR7YWxidW19YCxcclxuICAgICAgfTtcclxuICAgIH0gXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0SW1hZ2UgPSAoKSA9PiB7XHJcbiAgICBpZiAoIWxvYWRpbmcgJiYgc3RhdHVzPy5saXN0ZW5pbmdfdG9fc3BvdGlmeSA9PT0gdHJ1ZSkge1xyXG4gICAgICBjb25zdCBhY3Rpdml0eSA9IHN0YXR1cy5zcG90aWZ5O1xyXG5cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBsYXJnZUltYWdlOiBhY3Rpdml0eT8uYWxidW1fYXJ0X3VybCxcclxuICAgICAgfTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGFjdGl2aXR5ID0gZ2V0QWN0aXZpdHkoKSBhcyBBY3Rpdml0eTtcclxuXHJcbiAgICAgIGNvbnN0IHsgYXBwbGljYXRpb25faWQgfSA9IGFjdGl2aXR5IHx8IHt9O1xyXG4gICAgICBjb25zdCB7IGxhcmdlX2ltYWdlLCBzbWFsbF9pbWFnZSB9ID0gYWN0aXZpdHk/LmFzc2V0cyB8fCB7fTtcclxuXHJcbiAgICAgIGNvbnN0IFtsYXJnZUltYWdlLCBzbWFsbEltYWdlXSA9IFtcclxuICAgICAgICBsYXJnZV9pbWFnZSAmJlxyXG4gICAgICAgICAgYGh0dHBzOi8vY2RuLmRpc2NvcmRhcHAuY29tL2FwcC1hc3NldHMvJHthcHBsaWNhdGlvbl9pZH0vJHtsYXJnZV9pbWFnZX0ucG5nP3NpemU9MjU2YCxcclxuICAgICAgICBzbWFsbF9pbWFnZSAmJlxyXG4gICAgICAgICAgYGh0dHBzOi8vY2RuLmRpc2NvcmRhcHAuY29tL2FwcC1hc3NldHMvJHthcHBsaWNhdGlvbl9pZH0vJHtzbWFsbF9pbWFnZX0ucG5nP3NpemU9MjU2YCxcclxuICAgICAgXTtcclxuXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgbGFyZ2VJbWFnZSxcclxuICAgICAgICBzbWFsbEltYWdlLFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIH07XHJcbiAgXHJcbiAgXHJcbiBpZiAobG9hZGluZyA9PT0gZmFsc2UgJiYgc3RhdHVzPy5kaXNjb3JkX3N0YXR1cyA9PT0gXCJvbmxpbmVcIilcclxuIHJldHVybiAoIFxyXG4gPEJveCBkaXNwbGF5PXtcImZsZXhcIn0gZmxleFdyYXA9e1wibm93cmFwXCJ9IGZsb2F0PXtcImxlZnRcIn0gcGFkZGluZz17XCI1XCJ9ICBtYXJnaW5Ub3A9e1wiNVwifSBfaG92ZXI9e3sgc2hhZG93OiBcImxnXCIgfX0gIGJhY2tncm91bmRDb2xvcj17dXNlQ29sb3JNb2RlVmFsdWUoXCJncmF5LjEwMFwiLCBcIiMxZTI1MzNcIil9IHJvdW5kZWQ9e1wibWRcIn0+XHJcbiA8U3RhY2sgYmFja2dyb3VuZENvbG9yPXtcImdyZWVuLjUwMFwifSByb3VuZGVkPXtcImZ1bGxcIn0gd2lkdGg9e1wiNFwifSBoZWlnaHQ9ezR9IG1hcmdpbj17XCJhdXRvXCJ9IGFsaWduSXRlbXM9e1wiY2VudGVyXCJ9PjwvU3RhY2s+XHJcbiA8VGV4dCB0ZXh0Q29sb3I9e3VzZUNvbG9yTW9kZVZhbHVlKFwiYmxhY2tcIiwgXCJ3aGl0ZVwiKX0gZm9udFNpemU9e1wibWRcIn0gIHRleHRBbGlnbj17XCJjZW50ZXJcIn0gbWFyZ2luPXtcIjFcIn0+IE9ubGluZTwvVGV4dD5cclxuPC9Cb3g+IFxyXG5cclxuICk7XHJcbiBlbHNlIGlmIChsb2FkaW5nID09PSBmYWxzZSAmJiBzdGF0dXM/LmRpc2NvcmRfc3RhdHVzID09PSBcImlkbGVcIilcclxuIHJldHVybiAoIFxyXG4gPEJveCBkaXNwbGF5PXtcImZsZXhcIn0gZmxleFdyYXA9e1wibm93cmFwXCJ9IGZsb2F0PXtcImxlZnRcIn0gcGFkZGluZz17XCI1XCJ9IG1hcmdpblRvcD17XCI1XCJ9ICBfaG92ZXI9e3sgc2hhZG93OiBcImxnXCIgfX0gIGJhY2tncm91bmRDb2xvcj17dXNlQ29sb3JNb2RlVmFsdWUoXCJncmF5LjEwMFwiLCBcIiMxZTI1MzNcIil9IHJvdW5kZWQ9e1wibWRcIn0+XHJcbiA8U3RhY2sgYmFja2dyb3VuZENvbG9yPXtcInllbGxvdy40MDBcIn0gcm91bmRlZD17XCJmdWxsXCJ9IHdpZHRoPXtcIjRcIn0gaGVpZ2h0PXs0fSBtYXJnaW49e1wiYXV0b1wifSBhbGlnbkl0ZW1zPXtcImNlbnRlclwifT48L1N0YWNrPlxyXG4gPFRleHQgdGV4dENvbG9yPXt1c2VDb2xvck1vZGVWYWx1ZShcImJsYWNrXCIsIFwid2hpdGVcIil9IGZvbnRTaXplPXtcIm1kXCJ9IHRleHRBbGlnbj17XCJjZW50ZXJcIn0gbWFyZ2luPXtcIjFcIn0+IElkbGVkPC9UZXh0PlxyXG5cclxuIDwvQm94PiBcclxuXHJcbiApO1xyXG4gZWxzZSBpZiAobG9hZGluZyA9PT0gZmFsc2UgJiYgc3RhdHVzPy5kaXNjb3JkX3N0YXR1cyA9PT0gXCJkbmRcIilcclxuIHJldHVybiAoXHJcbiAgPEJveCBkaXNwbGF5PXtcImZsZXhcIn0gZmxleFdyYXA9e1wibm93cmFwXCJ9IGZsb2F0PXtcImxlZnRcIn0gcGFkZGluZz17XCI1XCJ9ICBfaG92ZXI9e3sgc2hhZG93OiBcImxnXCIgfX0gbWFyZ2luVG9wPXtcIjVcIn0gIGJhY2tncm91bmRDb2xvcj17dXNlQ29sb3JNb2RlVmFsdWUoXCJncmF5LjEwMFwiLCBcIiMxZTI1MzNcIil9IHJvdW5kZWQ9e1wibWRcIn0+XHJcbiAgPFN0YWNrIGJhY2tncm91bmRDb2xvcj17XCJyZWQuNTAwXCJ9IHJvdW5kZWQ9e1wiZnVsbFwifSB3aWR0aD17XCI0XCJ9IGhlaWdodD17NH0gbWFyZ2luPXtcImF1dG9cIn0gYWxpZ25JdGVtcz17XCJjZW50ZXJcIn0+PC9TdGFjaz5cclxuICA8VGV4dCB0ZXh0Q29sb3I9e3VzZUNvbG9yTW9kZVZhbHVlKFwiYmxhY2tcIiwgXCJ3aGl0ZVwiKX0gZm9udFNpemU9e1wibWRcIn0gIHRleHRBbGlnbj17XCJjZW50ZXJcIn0gbWFyZ2luPXtcIjFcIn0+IERpc3R1cmJpbmc8L1RleHQ+XHJcbjwvQm94PlxyXG5cclxuICk7XHJcbiBlbHNlIFxyXG4gcmV0dXJuIChcclxuICA8Qm94IGRpc3BsYXk9e1wiZmxleFwifSBmbGV4V3JhcD17XCJub3dyYXBcIn0gZmxvYXQ9e1wibGVmdFwifSBwYWRkaW5nPXtcIjVcIn0gIG1hcmdpblRvcD17XCI1XCJ9IF9ob3Zlcj17eyBzaGFkb3c6IFwibGdcIiB9fSAgYmFja2dyb3VuZENvbG9yPXt1c2VDb2xvck1vZGVWYWx1ZShcImdyYXkuMTAwXCIsIFwiIzFlMjUzM1wiKX0gcm91bmRlZD17XCJtZFwifT5cclxuICAgPFRvb2x0aXAgaGFzQXJyb3cgbGFiZWw9XCJPZmZsaW5lXCIgcGxhY2VtZW50PVwidG9wXCI+PFN0YWNrIGJhY2tncm91bmRDb2xvcj17dXNlQ29sb3JNb2RlVmFsdWUoXCJncmF5LjQwMFwiLCBcImdyYXkuNjAwXCIpfSByb3VuZGVkPXtcImZ1bGxcIn0gd2lkdGg9e1wiNFwifSBoZWlnaHQ9ezR9IG1hcmdpbj17XCJhdXRvXCJ9IGFsaWduSXRlbXM9e1wiY2VudGVyXCJ9PjwvU3RhY2s+PC9Ub29sdGlwPlxyXG4gIDxUZXh0IHRleHRDb2xvcj17dXNlQ29sb3JNb2RlVmFsdWUoXCJibGFja1wiLCBcIndoaXRlXCIpfSBmb250U2l6ZT17XCJtZFwifSAgdGV4dEFsaWduPXtcImNlbnRlclwifSBtYXJnaW49e1wiMVwifT4gT2ZmbGluZTwvVGV4dD4gICAgICAgXHJcbjwvQm94PlxyXG4gKVxyXG4gXHJcbiBcclxuLypcclxuIFxyXG4gIGlmIChsb2FkaW5nID09PSBmYWxzZSAmJiBzdGF0dXM/LmRpc2NvcmRfc3RhdHVzID09PSBcIm9mZmxpbmVcIiApIFxyXG4gIHJldHVybiAgPEJveCBkaXNwbGF5PXtcImZsZXhcIn0gZmxleFdyYXA9e1wibm93cmFwXCJ9IGZsb2F0PXtcImxlZnRcIn0gcGFkZGluZz17XCI1XCJ9ICBtYXJnaW5Ub3A9e1wiNVwifSBfaG92ZXI9e3sgc2hhZG93OiBcImxnXCIgfX0gIGJhY2tncm91bmRDb2xvcj17dXNlQ29sb3JNb2RlVmFsdWUoXCJncmF5LjEwMFwiLCBcIiMxZTI1MzNcIil9IHJvdW5kZWQ9e1wibWRcIn0+XHJcbiAgIDxUb29sdGlwIGhhc0Fycm93IGxhYmVsPVwiT2ZmbGluZVwiIHBsYWNlbWVudD1cInRvcFwiPjxTdGFjayBiYWNrZ3JvdW5kQ29sb3I9e3VzZUNvbG9yTW9kZVZhbHVlKFwiZ3JheS40MDBcIiwgXCJncmF5LjYwMFwiKX0gcm91bmRlZD17XCJmdWxsXCJ9IHdpZHRoPXtcIjRcIn0gaGVpZ2h0PXs0fSBtYXJnaW49e1wiYXV0b1wifSBhbGlnbkl0ZW1zPXtcImNlbnRlclwifT48L1N0YWNrPjwvVG9vbHRpcD5cclxuICA8VGV4dCB0ZXh0Q29sb3I9e3VzZUNvbG9yTW9kZVZhbHVlKFwiYmxhY2tcIiwgXCJ3aGl0ZVwiKX0gZm9udFNpemU9e1wibWRcIn0gIHRleHRBbGlnbj17XCJjZW50ZXJcIn0gbWFyZ2luPXtcIjFcIn0+IE9mZmxpbmU8L1RleHQ+ICAgICAgIFxyXG48L0JveD5cclxuXHJcbiAgICBlbHNlIGlmIChsb2FkaW5nID09PSBmYWxzZSAmJiBzdGF0dXM/LmRpc2NvcmRfc3RhdHVzID09PSBcIm9ubGluZVwiICYmIHN0YXR1cz8ubGlzdGVuaW5nX3RvX3Nwb3RpZnkgPT09IGZhbHNlKVxyXG4gICAgcmV0dXJuICggPEJveCBkaXNwbGF5PXtcImZsZXhcIn0gZmxleFdyYXA9e1wibm93cmFwXCJ9IGZsb2F0PXtcImxlZnRcIn0gcGFkZGluZz17XCI1XCJ9ICBtYXJnaW5Ub3A9e1wiNVwifSBfaG92ZXI9e3sgc2hhZG93OiBcImxnXCIgfX0gIGJhY2tncm91bmRDb2xvcj17dXNlQ29sb3JNb2RlVmFsdWUoXCJncmF5LjEwMFwiLCBcIiMxZTI1MzNcIil9IHJvdW5kZWQ9e1wibWRcIn0+XHJcbiAgICAgIDxTdGFjayBiYWNrZ3JvdW5kQ29sb3I9e1wiZ3JlZW4uNTAwXCJ9IHJvdW5kZWQ9e1wiZnVsbFwifSB3aWR0aD17XCI0XCJ9IGhlaWdodD17NH0gbWFyZ2luPXtcImF1dG9cIn0gYWxpZ25JdGVtcz17XCJjZW50ZXJcIn0+PC9TdGFjaz5cclxuICAgICAgPFRleHQgdGV4dENvbG9yPXt1c2VDb2xvck1vZGVWYWx1ZShcImJsYWNrXCIsIFwid2hpdGVcIil9IGZvbnRTaXplPXtcIm1kXCJ9ICB0ZXh0QWxpZ249e1wiY2VudGVyXCJ9IG1hcmdpbj17XCIxXCJ9PiBPbmxpbmU8L1RleHQ+XHJcbiAgICA8L0JveD4gXHJcbiAgICApO1xyXG4gICAgZWxzZSBpZiAoIGxvYWRpbmcgPT09IGZhbHNlICYmIHN0YXR1cz8uZGlzY29yZF9zdGF0dXMgPT09IFwib25saW5lXCIgJiYgc3RhdHVzPy5saXN0ZW5pbmdfdG9fc3BvdGlmeSA9PT0gdHJ1ZSlcclxuICAgIHJldHVybiAoIDxCb3ggZGlzcGxheT17XCJmbGV4XCJ9IGZsZXhXcmFwPXtcIm5vd3JhcFwifSBmbG9hdD17XCJsZWZ0XCJ9IHBhZGRpbmc9e1wiNVwifSBtYXJnaW5Ub3A9e1wiNVwifSAgX2hvdmVyPXt7IHNoYWRvdzogXCJsZ1wiIH19ICBiYWNrZ3JvdW5kQ29sb3I9e3VzZUNvbG9yTW9kZVZhbHVlKFwiZ3JheS4xMDBcIiwgXCIjMWUyNTMzXCIpfSByb3VuZGVkPXtcIm1kXCJ9PlxyXG4gICA8VG9vbHRpcCBoYXNBcnJvdyBsYWJlbD1cIk9ubGluZVwiIHBsYWNlbWVudD1cInRvcFwiPjxTdGFjayBiYWNrZ3JvdW5kQ29sb3I9e1wiZ3JlZW4uNTAwXCJ9IHJvdW5kZWQ9e1wiZnVsbFwifSB3aWR0aD17XCI0XCJ9IGhlaWdodD17NH0gbWFyZ2luPXtcImF1dG9cIn0gbWFyZ2luUmlnaHQ9e1wiNVwifSBhbGlnbkl0ZW1zPXtcImNlbnRlclwifT48L1N0YWNrPjwvVG9vbHRpcD4gXHJcbiAgPFRleHQgZm9udFNpemU9e1wic21cIn0gbWFyZ2luPXtcImF1dG9cIn0gdGV4dEFsaWduPXtcImNlbnRlclwifSBtYXJnaW5SaWdodD17XCI1XCJ9IHRleHRDb2xvcj17dXNlQ29sb3JNb2RlVmFsdWUoXCJncmF5LjQwMFwiLCBcImdyYXkuNjAwXCIpfT5MaXN0ZW5pbmcgdG88L1RleHQ+XHJcbiAgPFN0YWNrIG1hcmdpblJpZ2h0PXtcIjVcIn0gb2JqZWN0Rml0PXtcImNvdmVyXCJ9IGJvcmRlclJhZGl1cz17XCI1MCVcIn0+XHJcbiAgICAgICAgICAgICAgICAge2dldEltYWdlKCkubGFyZ2VJbWFnZSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgc3JjPXtnZXRJbWFnZSgpLmxhcmdlSW1hZ2UgfHwgXCJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCI4MHB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiODBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgIGFsdD1cImljb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICBkcmFnZ2FibGU9XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0PVwiY292ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWxnXCJcclxuICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9TdGFjaz5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8VGV4dCBmb250U2l6ZT17XCJzbVwifSBtYXJnaW49e1wiYXV0b1wifSB0ZXh0QWxpZ249e1wiY2VudGVyXCJ9PiAgICBcclxuICAgICAgICAgICAgICA8aDE+IHtnZXRBY3Rpdml0eSgpPy5uYW1lfTwvaDE+XHJcbiAgICAgICAgICAgICAgPGgxPiB7Z2V0QWN0aXZpdHkoKT8uZGV0YWlsc308L2gxPlxyXG4gICAgICAgICAgICAgIDxoMT4ge2dldEFjdGl2aXR5KCk/LnN0YXRlfSA8L2gxPiAgICBcclxuICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgXHJcbiAgPC9Cb3g+IFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICBcclxuICAgICk7XHJcbiAgICBlbHNlIGlmIChsb2FkaW5nID09PSBmYWxzZSAmJiBzdGF0dXM/LmRpc2NvcmRfc3RhdHVzID09PSBcImRuZFwiICYmIHN0YXR1cz8ubGlzdGVuaW5nX3RvX3Nwb3RpZnkgPT09IGZhbHNlKVxyXG4gICAgcmV0dXJuICggPEJveCBkaXNwbGF5PXtcImZsZXhcIn0gZmxleFdyYXA9e1wibm93cmFwXCJ9IGZsb2F0PXtcImxlZnRcIn0gcGFkZGluZz17XCI1XCJ9ICBfaG92ZXI9e3sgc2hhZG93OiBcImxnXCIgfX0gbWFyZ2luVG9wPXtcIjVcIn0gIGJhY2tncm91bmRDb2xvcj17dXNlQ29sb3JNb2RlVmFsdWUoXCJncmF5LjEwMFwiLCBcIiMxZTI1MzNcIil9IHJvdW5kZWQ9e1wibWRcIn0+XHJcbiAgICA8U3RhY2sgYmFja2dyb3VuZENvbG9yPXtcInJlZC41MDBcIn0gcm91bmRlZD17XCJmdWxsXCJ9IHdpZHRoPXtcIjRcIn0gaGVpZ2h0PXs0fSBtYXJnaW49e1wiYXV0b1wifSBhbGlnbkl0ZW1zPXtcImNlbnRlclwifT48L1N0YWNrPlxyXG4gICAgPFRleHQgdGV4dENvbG9yPXt1c2VDb2xvck1vZGVWYWx1ZShcImJsYWNrXCIsIFwid2hpdGVcIil9IGZvbnRTaXplPXtcIm1kXCJ9ICB0ZXh0QWxpZ249e1wiY2VudGVyXCJ9IG1hcmdpbj17XCIxXCJ9PiBEaXN0dXJiaW5nPC9UZXh0PlxyXG4gIDwvQm94PiApO1xyXG4gICBlbHNlIGlmICggbG9hZGluZyA9PT0gZmFsc2UgJiYgc3RhdHVzPy5kaXNjb3JkX3N0YXR1cyA9PT0gXCJkbmRcIiAmJiBzdGF0dXM/Lmxpc3RlbmluZ190b19zcG90aWZ5ID09PSB0cnVlKVxyXG4gICByZXR1cm4gKFxyXG4gICAgPEJveCBkaXNwbGF5PXtcImZsZXhcIn0gZmxleFdyYXA9e1wibm93cmFwXCJ9IGZsb2F0PXtcImxlZnRcIn0gcGFkZGluZz17XCI1XCJ9IG1hcmdpblRvcD17XCI1XCJ9ICBfaG92ZXI9e3sgc2hhZG93OiBcImxnXCIgfX0gIGJhY2tncm91bmRDb2xvcj17dXNlQ29sb3JNb2RlVmFsdWUoXCJncmF5LjEwMFwiLCBcIiMxZTI1MzNcIil9IHJvdW5kZWQ9e1wibWRcIn0+XHJcbiAgICAgPFRvb2x0aXAgaGFzQXJyb3cgbGFiZWw9XCJEaXN0dXJiaW5nXCIgcGxhY2VtZW50PVwidG9wXCI+PFN0YWNrIGJhY2tncm91bmRDb2xvcj17XCJyZWQuNTAwXCJ9IHJvdW5kZWQ9e1wiZnVsbFwifSB3aWR0aD17XCI0XCJ9IGhlaWdodD17NH0gbWFyZ2luPXtcImF1dG9cIn0gbWFyZ2luUmlnaHQ9e1wiNVwifSBhbGlnbkl0ZW1zPXtcImNlbnRlclwifT48L1N0YWNrPjwvVG9vbHRpcD5cclxuICA8VGV4dCBmb250U2l6ZT17XCJzbVwifSBtYXJnaW49e1wiYXV0b1wifSB0ZXh0QWxpZ249e1wiY2VudGVyXCJ9IG1hcmdpblJpZ2h0PXtcIjVcIn0gdGV4dENvbG9yPXt1c2VDb2xvck1vZGVWYWx1ZShcImdyYXkuNDAwXCIsIFwiZ3JheS42MDBcIil9Pkxpc3RlbmluZyB0bzwvVGV4dD5cclxuICA8U3RhY2sgbWFyZ2luUmlnaHQ9e1wiNVwifSBvYmplY3RGaXQ9e1wiY292ZXJcIn0gYm9yZGVyUmFkaXVzPXtcIjUwJVwifT5cclxuICAgICAgICAgICAgICAgICB7Z2V0SW1hZ2UoKS5sYXJnZUltYWdlICYmIChcclxuICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICBzcmM9e2dldEltYWdlKCkubGFyZ2VJbWFnZSB8fCBcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjgwcHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCI4MHB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgYWx0PVwiaWNvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgIGRyYWdnYWJsZT1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ9XCJjb3ZlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtbGdcIlxyXG4gICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L1N0YWNrPlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDxUZXh0IGZvbnRTaXplPXtcInNtXCJ9IG1hcmdpbj17XCJhdXRvXCJ9IHRleHRBbGlnbj17XCJjZW50ZXJcIn0+ICAgIFxyXG4gICAgICAgICAgICAgIDxoMT4ge2dldEFjdGl2aXR5KCk/Lm5hbWV9PC9oMT5cclxuICAgICAgICAgICAgICA8aDE+IHtnZXRBY3Rpdml0eSgpPy5kZXRhaWxzfTwvaDE+XHJcbiAgICAgICAgICAgICAgPGgxPiB7Z2V0QWN0aXZpdHkoKT8uc3RhdGV9IDwvaDE+ICAgIFxyXG4gICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICBcclxuICA8L0JveD4gXHJcbiAgICAgICAgIFxyXG4gICApXHJcbiAgZWxzZSBpZiAoIGxvYWRpbmcgPT09IGZhbHNlICYmIHN0YXR1cz8uZGlzY29yZF9zdGF0dXMgPT09IFwiaWRsZVwiICYmIHN0YXR1cz8ubGlzdGVuaW5nX3RvX3Nwb3RpZnkgPT09IGZhbHNlKVxyXG4gIHJldHVybiAoIDxCb3ggZGlzcGxheT17XCJmbGV4XCJ9IGZsZXhXcmFwPXtcIm5vd3JhcFwifSBmbG9hdD17XCJsZWZ0XCJ9IHBhZGRpbmc9e1wiNVwifSBtYXJnaW5Ub3A9e1wiNVwifSAgX2hvdmVyPXt7IHNoYWRvdzogXCJsZ1wiIH19ICBiYWNrZ3JvdW5kQ29sb3I9e3VzZUNvbG9yTW9kZVZhbHVlKFwiZ3JheS4xMDBcIiwgXCIjMWUyNTMzXCIpfSByb3VuZGVkPXtcIm1kXCJ9PlxyXG4gIDxTdGFjayBiYWNrZ3JvdW5kQ29sb3I9e1wieWVsbG93LjQwMFwifSByb3VuZGVkPXtcImZ1bGxcIn0gd2lkdGg9e1wiNFwifSBoZWlnaHQ9ezR9IG1hcmdpbj17XCJhdXRvXCJ9IGFsaWduSXRlbXM9e1wiY2VudGVyXCJ9PjwvU3RhY2s+XHJcbiAgPFRleHQgdGV4dENvbG9yPXt1c2VDb2xvck1vZGVWYWx1ZShcImJsYWNrXCIsIFwid2hpdGVcIil9IGZvbnRTaXplPXtcIm1kXCJ9IHRleHRBbGlnbj17XCJjZW50ZXJcIn0gbWFyZ2luPXtcIjFcIn0+IElkbGVkPC9UZXh0PlxyXG4gIDwvQm94PiBcclxuICApO1xyXG4gICBlbHNlIGlmICggbG9hZGluZyA9PT0gZmFsc2UgJiYgc3RhdHVzPy5kaXNjb3JkX3N0YXR1cyA9PT0gXCJpZGxlXCIgJiYgc3RhdHVzPy5saXN0ZW5pbmdfdG9fc3BvdGlmeSA9PT0gdHJ1ZSlcclxuICAgcmV0dXJuIChcclxuICAgIDxCb3ggZGlzcGxheT17XCJmbGV4XCJ9IGZsZXhXcmFwPXtcIm5vd3JhcFwifSBmbG9hdD17XCJsZWZ0XCJ9IHBhZGRpbmc9e1wiNVwifSBtYXJnaW5Ub3A9e1wiNVwifSAgX2hvdmVyPXt7IHNoYWRvdzogXCJsZ1wiIH19ICBiYWNrZ3JvdW5kQ29sb3I9e3VzZUNvbG9yTW9kZVZhbHVlKFwiZ3JheS4xMDBcIiwgXCIjMWUyNTMzXCIpfSByb3VuZGVkPXtcIm1kXCJ9PlxyXG4gICAgPFRvb2x0aXAgaGFzQXJyb3cgbGFiZWw9XCJJZGxlZFwiIHBsYWNlbWVudD1cInRvcFwiPjxTdGFjayBiYWNrZ3JvdW5kQ29sb3I9e1wieWVsbG93LjQwMFwifSByb3VuZGVkPXtcImZ1bGxcIn0gd2lkdGg9e1wiNFwifSBoZWlnaHQ9ezR9IG1hcmdpbj17XCJhdXRvXCJ9IG1hcmdpblJpZ2h0PXtcIjVcIn0gYWxpZ25JdGVtcz17XCJjZW50ZXJcIn0+PC9TdGFjaz48L1Rvb2x0aXA+XHJcbiAgPFRleHQgZm9udFNpemU9e1wic21cIn0gbWFyZ2luPXtcImF1dG9cIn0gdGV4dEFsaWduPXtcImNlbnRlclwifSBtYXJnaW5SaWdodD17XCI1XCJ9IHRleHRDb2xvcj17dXNlQ29sb3JNb2RlVmFsdWUoXCJncmF5LjQwMFwiLCBcImdyYXkuNjAwXCIpfT5MaXN0ZW5pbmcgdG88L1RleHQ+XHJcbiAgPFN0YWNrIG1hcmdpblJpZ2h0PXtcIjVcIn0gb2JqZWN0Rml0PXtcImNvdmVyXCJ9IGJvcmRlclJhZGl1cz17XCI1MCVcIn0+XHJcbiAgICAgICAgICAgICAgICAge2dldEltYWdlKCkubGFyZ2VJbWFnZSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgc3JjPXtnZXRJbWFnZSgpLmxhcmdlSW1hZ2UgfHwgXCJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCI4MHB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiODBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgIGFsdD1cImljb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICBkcmFnZ2FibGU9XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0PVwiY292ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWxnXCJcclxuICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9TdGFjaz5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8VGV4dCBmb250U2l6ZT17XCJzbVwifSBtYXJnaW49e1wiYXV0b1wifSB0ZXh0QWxpZ249e1wiY2VudGVyXCJ9PiAgICBcclxuICAgICAgICAgICAgICA8aDE+IHtnZXRBY3Rpdml0eSgpPy5uYW1lfTwvaDE+XHJcbiAgICAgICAgICAgICAgPGgxPiB7Z2V0QWN0aXZpdHkoKT8uZGV0YWlsc308L2gxPlxyXG4gICAgICAgICAgICAgIDxoMT4ge2dldEFjdGl2aXR5KCk/LnN0YXRlfSA8L2gxPiAgICBcclxuICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgXHJcbiAgPC9Cb3g+IFxyXG4gICAgICAgICBcclxuICAgKTtcclxuICBlbHNlIChzdGF0dXM/LmRpc2NvcmRfc3RhdHVzID09PSBcImludmlzaWJsZVwiKVxyXG4gIHJldHVybiAoIDxCb3ggZGlzcGxheT17XCJmbGV4XCJ9IGZsZXhXcmFwPXtcIm5vd3JhcFwifSBmbG9hdD17XCJsZWZ0XCJ9IHBhZGRpbmc9e1wiNVwifSBtYXJnaW5Ub3A9e1wiNVwifSAgX2hvdmVyPXt7IHNoYWRvdzogXCJsZ1wiIH19ICBiYWNrZ3JvdW5kQ29sb3I9e3VzZUNvbG9yTW9kZVZhbHVlKFwiZ3JheS4xMDBcIiwgXCIjMWUyNTMzXCIpfSByb3VuZGVkPXtcIm1kXCJ9PlxyXG4gIDxTdGFjayBiYWNrZ3JvdW5kQ29sb3I9e3VzZUNvbG9yTW9kZVZhbHVlKFwiZ3JheS40MDBcIiwgXCJncmF5LjYwMFwiKX0gcm91bmRlZD17XCJmdWxsXCJ9IHdpZHRoPXtcIjRcIn0gaGVpZ2h0PXs0fSBtYXJnaW49e1wiYXV0b1wifSBhbGlnbkl0ZW1zPXtcImNlbnRlclwifT48L1N0YWNrPlxyXG4gIDxUZXh0IHRleHRDb2xvcj17dXNlQ29sb3JNb2RlVmFsdWUoXCJibGFja1wiLCBcIndoaXRlXCIpfSBmb250U2l6ZT17XCJtZFwifSB0ZXh0QWxpZ249e1wiY2VudGVyXCJ9IG1hcmdpbj17XCIxXCJ9PiBPZmZsaW5lPC9UZXh0PlxyXG4gIDwvQm94PiAgKTtcclxuIFxyXG4gICovXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdGF0dXM7Il0sInNvdXJjZVJvb3QiOiIifQ==