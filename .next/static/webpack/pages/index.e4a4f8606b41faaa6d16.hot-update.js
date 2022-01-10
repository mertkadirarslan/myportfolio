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

  var _getActivity, _getActivity2, _getActivity3, _getActivity4, _getActivity5, _getActivity6, _getActivity7, _getActivity8, _getActivity9, _getActivity10, _getActivity11, _getActivity12;

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
    } else return status === null || status === void 0 ? void 0 : status.activities.at(-1);
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

  if (loading === false && (status === null || status === void 0 ? void 0 : status.discord_status) === "online" && (status === null || status === void 0 ? void 0 : status.listening_to_spotify) === false) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {
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
  }, _this);else if (loading === true && (status === null || status === void 0 ? void 0 : status.discord_status) === "online" && (status === null || status === void 0 ? void 0 : status.listening_to_spotify) === false) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {
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
      lineNumber: 85,
      columnNumber: 2
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {
      textColor: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useColorModeValue)("black", "white"),
      fontSize: "md",
      textAlign: "center",
      margin: "1",
      children: " Online"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 86,
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
        lineNumber: 89,
        columnNumber: 20
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 2
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {
      fontSize: "sm",
      margin: "auto",
      textAlign: "center",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: [" ", (_getActivity = getActivity()) === null || _getActivity === void 0 ? void 0 : _getActivity.name]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 15
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: [" ", (_getActivity2 = getActivity()) === null || _getActivity2 === void 0 ? void 0 : _getActivity2.details]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 15
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: [" ", (_getActivity3 = getActivity()) === null || _getActivity3 === void 0 ? void 0 : _getActivity3.state, " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 15
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 15
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 84,
    columnNumber: 1
  }, _this);else if (loading === false && (status === null || status === void 0 ? void 0 : status.discord_status) === "online" && (status === null || status === void 0 ? void 0 : status.listening_to_spotify) === true) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {
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
      label: "Online",
      placement: "top",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Stack, {
        backgroundColor: "green.500",
        rounded: "full",
        width: "4",
        height: 4,
        margin: "auto",
        marginRight: "5",
        alignItems: "center"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 53
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 4
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {
      fontSize: "sm",
      margin: "auto",
      textAlign: "center",
      marginRight: "5",
      textColor: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useColorModeValue)("gray.400", "gray.600"),
      children: "Listening to"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 3
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
        lineNumber: 117,
        columnNumber: 20
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 3
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {
      fontSize: "sm",
      margin: "auto",
      textAlign: "center",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: [" ", (_getActivity4 = getActivity()) === null || _getActivity4 === void 0 ? void 0 : _getActivity4.name]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 15
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: [" ", (_getActivity5 = getActivity()) === null || _getActivity5 === void 0 ? void 0 : _getActivity5.details]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 15
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: [" ", (_getActivity6 = getActivity()) === null || _getActivity6 === void 0 ? void 0 : _getActivity6.state, " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 15
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 15
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 112,
    columnNumber: 1
  }, _this);else if (loading === false && (status === null || status === void 0 ? void 0 : status.discord_status) === "idle" && (status === null || status === void 0 ? void 0 : status.listening_to_spotify) === false) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {
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
      lineNumber: 141,
      columnNumber: 2
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {
      textColor: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useColorModeValue)("black", "white"),
      fontSize: "md",
      textAlign: "center",
      margin: "1",
      children: " Idled"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 2
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 140,
    columnNumber: 2
  }, _this);else if (loading === false && (status === null || status === void 0 ? void 0 : status.discord_status) === "idle" && (status === null || status === void 0 ? void 0 : status.listening_to_spotify) === true) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {
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
      label: "Idled",
      placement: "top",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Stack, {
        backgroundColor: "yellow.400",
        rounded: "full",
        width: "4",
        height: 4,
        margin: "auto",
        marginRight: "5",
        alignItems: "center"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 53
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 5
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {
      fontSize: "sm",
      margin: "auto",
      textAlign: "center",
      marginRight: "5",
      textColor: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useColorModeValue)("gray.400", "gray.600"),
      children: "Listening to"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 3
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
        lineNumber: 155,
        columnNumber: 20
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 3
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {
      fontSize: "sm",
      margin: "auto",
      textAlign: "center",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: [" ", (_getActivity7 = getActivity()) === null || _getActivity7 === void 0 ? void 0 : _getActivity7.name]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 15
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: [" ", (_getActivity8 = getActivity()) === null || _getActivity8 === void 0 ? void 0 : _getActivity8.details]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 15
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: [" ", (_getActivity9 = getActivity()) === null || _getActivity9 === void 0 ? void 0 : _getActivity9.state, " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 15
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 15
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 149,
    columnNumber: 1
  }, _this);else if (loading === false && (status === null || status === void 0 ? void 0 : status.discord_status) === "dnd" && (status === null || status === void 0 ? void 0 : status.listening_to_spotify) === false) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {
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
      lineNumber: 181,
      columnNumber: 3
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {
      textColor: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useColorModeValue)("black", "white"),
      fontSize: "md",
      textAlign: "center",
      margin: "1",
      children: " Disturbing"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 3
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 180,
    columnNumber: 3
  }, _this);else if (loading === false && (status === null || status === void 0 ? void 0 : status.discord_status) === "dnd" && (status === null || status === void 0 ? void 0 : status.listening_to_spotify) === true) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {
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
      label: "Disturbing",
      placement: "top",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Stack, {
        backgroundColor: "red.500",
        rounded: "full",
        width: "4",
        height: 4,
        margin: "auto",
        marginRight: "5",
        alignItems: "center"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 56
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 3
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {
      fontSize: "sm",
      margin: "auto",
      textAlign: "center",
      marginRight: "5",
      textColor: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useColorModeValue)("gray.400", "gray.600"),
      children: "Listening to"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 1
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
        lineNumber: 194,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 1
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {
      fontSize: "sm",
      margin: "auto",
      textAlign: "center",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: [" ", (_getActivity10 = getActivity()) === null || _getActivity10 === void 0 ? void 0 : _getActivity10.name]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 12
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: [" ", (_getActivity11 = getActivity()) === null || _getActivity11 === void 0 ? void 0 : _getActivity11.details]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 209,
        columnNumber: 12
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: [" ", (_getActivity12 = getActivity()) === null || _getActivity12 === void 0 ? void 0 : _getActivity12.state, " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 210,
        columnNumber: 12
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 12
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 189,
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
        lineNumber: 218,
        columnNumber: 54
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 4
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {
      textColor: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useColorModeValue)("black", "white"),
      fontSize: "md",
      textAlign: "center",
      margin: "1",
      children: " Offline"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 3
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 217,
    columnNumber: 3
  }, _this);
};

_s(Status, "DxMd6E4d3z4nbvibThhOMvaper4=", false, function () {
  return [react_use_lanyard__WEBPACK_IMPORTED_MODULE_1__.useLanyard, _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useColorModeValue, _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useColorModeValue, _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useColorModeValue, _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useColorModeValue, _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useColorModeValue, _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useColorModeValue, _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useColorModeValue, _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useColorModeValue, _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useColorModeValue, _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useColorModeValue, _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useColorModeValue, _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useColorModeValue, _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useColorModeValue, _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useColorModeValue, _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useColorModeValue, _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useColorModeValue, _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useColorModeValue];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZGF0YS9TdGF0dXMudHN4Il0sIm5hbWVzIjpbIlN0YXR1cyIsInVzZUxhbnlhcmQiLCJ1c2VySWQiLCJzb2NrZXQiLCJsb2FkaW5nIiwic3RhdHVzIiwiZ2V0QWN0aXZpdHkiLCJsaXN0ZW5pbmdfdG9fc3BvdGlmeSIsInNwb3RpZnkiLCJzb25nIiwiYXJ0aXN0IiwiYWxidW0iLCJuYW1lIiwiZGV0YWlscyIsInN0YXRlIiwiYWN0aXZpdGllcyIsImF0IiwiZ2V0SW1hZ2UiLCJhY3Rpdml0eSIsImxhcmdlSW1hZ2UiLCJhbGJ1bV9hcnRfdXJsIiwiYXBwbGljYXRpb25faWQiLCJhc3NldHMiLCJsYXJnZV9pbWFnZSIsInNtYWxsX2ltYWdlIiwic21hbGxJbWFnZSIsImRpc2NvcmRfc3RhdHVzIiwic2hhZG93IiwidXNlQ29sb3JNb2RlVmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQWFBO0FBQ0E7QUFHQTs7QUFHQTtBQUNBOztBQUlBLElBQU1BLE1BQWdCLEdBQUcsU0FBbkJBLE1BQW1CLEdBQU07QUFBQTs7QUFBQTs7QUFBQSxvQkFFREMsNkRBQVUsQ0FBQztBQUNyQ0MsVUFBTSxFQUFOQSwrQ0FEcUM7QUFFckNDLFVBQU0sRUFBRTtBQUY2QixHQUFELENBRlQ7QUFBQSxNQUVyQkMsT0FGcUIsZUFFckJBLE9BRnFCO0FBQUEsTUFFWkMsTUFGWSxlQUVaQSxNQUZZOztBQU83QixNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3hCLFFBQUksQ0FBQUQsTUFBTSxTQUFOLElBQUFBLE1BQU0sV0FBTixZQUFBQSxNQUFNLENBQUVFLG9CQUFSLE1BQWlDLElBQXJDLEVBQTJDO0FBQUEsaUJBQ1RGLE1BQU0sQ0FBQ0csT0FBUCxJQUFrQixFQURUO0FBQUEsVUFDakNDLElBRGlDLFFBQ2pDQSxJQURpQztBQUFBLFVBQzNCQyxNQUQyQixRQUMzQkEsTUFEMkI7QUFBQSxVQUNuQkMsS0FEbUIsUUFDbkJBLEtBRG1COztBQUd6QyxhQUFPO0FBQ0xDLFlBQUksRUFBRUgsSUFERDtBQUVMSSxlQUFPLGVBQVFILE1BQVIsQ0FGRjtBQUdMSSxhQUFLLGVBQVFILEtBQVI7QUFIQSxPQUFQO0FBS0QsS0FSRCxNQVFPLE9BQU9OLE1BQVAsYUFBT0EsTUFBUCx1QkFBT0EsTUFBTSxDQUFFVSxVQUFSLENBQW1CQyxFQUFuQixDQUFzQixDQUFDLENBQXZCLENBQVA7QUFDUixHQVZEOztBQVlBLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFDckIsUUFBSSxDQUFDYixPQUFELElBQVksQ0FBQUMsTUFBTSxTQUFOLElBQUFBLE1BQU0sV0FBTixZQUFBQSxNQUFNLENBQUVFLG9CQUFSLE1BQWlDLElBQWpELEVBQXVEO0FBQ3JELFVBQU1XLFFBQVEsR0FBR2IsTUFBTSxDQUFDRyxPQUF4QjtBQUVBLGFBQU87QUFDTFcsa0JBQVUsRUFBRUQsUUFBRixhQUFFQSxRQUFGLHVCQUFFQSxRQUFRLENBQUVFO0FBRGpCLE9BQVA7QUFHRCxLQU5ELE1BTU87QUFDTCxVQUFNRixTQUFRLEdBQUdaLFdBQVcsRUFBNUI7O0FBREssa0JBR3NCWSxTQUFRLElBQUksRUFIbEM7QUFBQSxVQUdHRyxjQUhILFNBR0dBLGNBSEg7O0FBQUEsa0JBSWdDLENBQUFILFNBQVEsU0FBUixJQUFBQSxTQUFRLFdBQVIsWUFBQUEsU0FBUSxDQUFFSSxNQUFWLEtBQW9CLEVBSnBEO0FBQUEsVUFJR0MsV0FKSCxTQUlHQSxXQUpIO0FBQUEsVUFJZ0JDLFdBSmhCLFNBSWdCQSxXQUpoQjs7QUFBQSxVQU1FTCxVQU5GLEdBT0hJLFdBQVcsb0RBQ2dDRixjQURoQyxjQUNrREUsV0FEbEQsa0JBUFI7QUFBQSxVQU1jRSxVQU5kLEdBU0hELFdBQVcsb0RBQ2dDSCxjQURoQyxjQUNrREcsV0FEbEQsa0JBVFI7QUFhTCxhQUFPO0FBQ0xMLGtCQUFVLEVBQVZBLFVBREs7QUFFTE0sa0JBQVUsRUFBVkE7QUFGSyxPQUFQO0FBSUQ7QUFDRixHQXpCRDs7QUE0QkQsTUFBSXJCLE9BQU8sS0FBSyxLQUFaLElBQXFCLENBQUFDLE1BQU0sU0FBTixJQUFBQSxNQUFNLFdBQU4sWUFBQUEsTUFBTSxDQUFFcUIsY0FBUixNQUEyQixRQUFoRCxJQUE0RCxDQUFBckIsTUFBTSxTQUFOLElBQUFBLE1BQU0sV0FBTixZQUFBQSxNQUFNLENBQUVFLG9CQUFSLE1BQWlDLEtBQWpHLEVBQ0Esb0JBQ0EsOERBQUMsaURBQUQ7QUFBSyxXQUFPLEVBQUUsTUFBZDtBQUFzQixZQUFRLEVBQUUsUUFBaEM7QUFBMEMsYUFBTyxNQUFqRDtBQUF5RCxXQUFPLEVBQUUsR0FBbEU7QUFBd0UsYUFBUyxFQUFFLEdBQW5GO0FBQXdGLFVBQU0sRUFBRTtBQUFFb0IsWUFBTSxFQUFFO0FBQVYsS0FBaEc7QUFBbUgsbUJBQWUsRUFBRUMsbUVBQWlCLENBQUMsVUFBRCxFQUFhLFNBQWIsQ0FBcko7QUFBOEssV0FBTyxFQUFFLElBQXZMO0FBQUEsNEJBQ0EsOERBQUMsbURBQUQ7QUFBTyxxQkFBZSxFQUFFLFdBQXhCO0FBQXFDLGFBQU8sRUFBRSxNQUE5QztBQUFzRCxXQUFLLEVBQUUsR0FBN0Q7QUFBa0UsWUFBTSxFQUFFLENBQTFFO0FBQTZFLFlBQU0sRUFBRSxNQUFyRjtBQUE2RixnQkFBVSxFQUFFO0FBQXpHO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEQSxlQUVBLDhEQUFDLGtEQUFEO0FBQU0sZUFBUyxFQUFFQSxtRUFBaUIsQ0FBQyxPQUFELEVBQVUsT0FBVixDQUFsQztBQUFzRCxjQUFRLEVBQUUsSUFBaEU7QUFBdUUsZUFBUyxFQUFFLFFBQWxGO0FBQTRGLFlBQU0sRUFBRSxHQUFwRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURBLENBREEsS0FTSyxJQUFJeEIsT0FBTyxLQUFLLElBQVosSUFBb0IsQ0FBQUMsTUFBTSxTQUFOLElBQUFBLE1BQU0sV0FBTixZQUFBQSxNQUFNLENBQUVxQixjQUFSLE1BQTJCLFFBQS9DLElBQTJELENBQUFyQixNQUFNLFNBQU4sSUFBQUEsTUFBTSxXQUFOLFlBQUFBLE1BQU0sQ0FBRUUsb0JBQVIsTUFBaUMsS0FBaEcsRUFDTixvQkFDQSw4REFBQyxpREFBRDtBQUFLLFdBQU8sRUFBRSxNQUFkO0FBQXNCLFlBQVEsRUFBRSxRQUFoQztBQUEwQyxhQUFPLE1BQWpEO0FBQXlELFdBQU8sRUFBRSxHQUFsRTtBQUF3RSxhQUFTLEVBQUUsR0FBbkY7QUFBd0YsVUFBTSxFQUFFO0FBQUVvQixZQUFNLEVBQUU7QUFBVixLQUFoRztBQUFtSCxtQkFBZSxFQUFFQyxtRUFBaUIsQ0FBQyxVQUFELEVBQWEsU0FBYixDQUFySjtBQUE4SyxXQUFPLEVBQUUsSUFBdkw7QUFBQSw0QkFDQyw4REFBQyxtREFBRDtBQUFPLHFCQUFlLEVBQUUsV0FBeEI7QUFBcUMsYUFBTyxFQUFFLE1BQTlDO0FBQXNELFdBQUssRUFBRSxHQUE3RDtBQUFrRSxZQUFNLEVBQUUsQ0FBMUU7QUFBNkUsWUFBTSxFQUFFLE1BQXJGO0FBQTZGLGdCQUFVLEVBQUU7QUFBekc7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURELGVBRUMsOERBQUMsa0RBQUQ7QUFBTSxlQUFTLEVBQUVBLG1FQUFpQixDQUFDLE9BQUQsRUFBVSxPQUFWLENBQWxDO0FBQXNELGNBQVEsRUFBRSxJQUFoRTtBQUF1RSxlQUFTLEVBQUUsUUFBbEY7QUFBNEYsWUFBTSxFQUFFLEdBQXBHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkQsZUFHQyw4REFBQyxtREFBRDtBQUFPLGlCQUFXLEVBQUUsR0FBcEI7QUFBeUIsZUFBUyxFQUFFLE9BQXBDO0FBQTZDLGtCQUFZLEVBQUUsS0FBM0Q7QUFBQSxnQkFDaUJYLFFBQVEsR0FBR0UsVUFBWCxpQkFDQyw4REFBQyxtREFBRDtBQUNFLFdBQUcsRUFBRUYsUUFBUSxHQUFHRSxVQUFYLElBQXlCLEVBRGhDO0FBRUUsYUFBSyxFQUFDLE1BRlI7QUFHRSxjQUFNLEVBQUMsTUFIVDtBQUlFLFdBQUcsRUFBQyxNQUpOO0FBS0UsaUJBQVMsRUFBQyxNQUxaO0FBTUUsaUJBQVMsRUFBQyxPQU5aO0FBT0UsaUJBQVMsRUFBQztBQVBaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhELGVBa0JjLDhEQUFDLGtEQUFEO0FBQU0sY0FBUSxFQUFFLElBQWhCO0FBQXNCLFlBQU0sRUFBRSxNQUE5QjtBQUFzQyxlQUFTLEVBQUUsUUFBakQ7QUFBQSw4QkFDQTtBQUFBLHdDQUFNYixXQUFXLEVBQWpCLGlEQUFNLGFBQWVNLElBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURBLGVBRUE7QUFBQSx5Q0FBTU4sV0FBVyxFQUFqQixrREFBTSxjQUFlTyxPQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGQSxlQUdBO0FBQUEseUNBQU1QLFdBQVcsRUFBakIsa0RBQU0sY0FBZVEsS0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBbEJkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURBLENBRE0sS0E0QkEsSUFBSVYsT0FBTyxLQUFLLEtBQVosSUFBcUIsQ0FBQUMsTUFBTSxTQUFOLElBQUFBLE1BQU0sV0FBTixZQUFBQSxNQUFNLENBQUVxQixjQUFSLE1BQTJCLFFBQWhELElBQTRELENBQUFyQixNQUFNLFNBQU4sSUFBQUEsTUFBTSxXQUFOLFlBQUFBLE1BQU0sQ0FBRUUsb0JBQVIsTUFBaUMsSUFBakcsRUFDTCxvQkFDRCw4REFBQyxpREFBRDtBQUFLLFdBQU8sRUFBRSxNQUFkO0FBQXNCLFlBQVEsRUFBRSxRQUFoQztBQUEwQyxhQUFPLE1BQWpEO0FBQXlELFdBQU8sRUFBRSxHQUFsRTtBQUF1RSxhQUFTLEVBQUUsR0FBbEY7QUFBd0YsVUFBTSxFQUFFO0FBQUVvQixZQUFNLEVBQUU7QUFBVixLQUFoRztBQUFtSCxtQkFBZSxFQUFFQyxtRUFBaUIsQ0FBQyxVQUFELEVBQWEsU0FBYixDQUFySjtBQUE4SyxXQUFPLEVBQUUsSUFBdkw7QUFBQSw0QkFDRyw4REFBQyxxREFBRDtBQUFTLGNBQVEsTUFBakI7QUFBa0IsV0FBSyxFQUFDLFFBQXhCO0FBQWlDLGVBQVMsRUFBQyxLQUEzQztBQUFBLDZCQUFpRCw4REFBQyxtREFBRDtBQUFPLHVCQUFlLEVBQUUsV0FBeEI7QUFBcUMsZUFBTyxFQUFFLE1BQTlDO0FBQXNELGFBQUssRUFBRSxHQUE3RDtBQUFrRSxjQUFNLEVBQUUsQ0FBMUU7QUFBNkUsY0FBTSxFQUFFLE1BQXJGO0FBQTZGLG1CQUFXLEVBQUUsR0FBMUc7QUFBK0csa0JBQVUsRUFBRTtBQUEzSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESCxlQUVFLDhEQUFDLGtEQUFEO0FBQU0sY0FBUSxFQUFFLElBQWhCO0FBQXNCLFlBQU0sRUFBRSxNQUE5QjtBQUFzQyxlQUFTLEVBQUUsUUFBakQ7QUFBMkQsaUJBQVcsRUFBRSxHQUF4RTtBQUE2RSxlQUFTLEVBQUVBLG1FQUFpQixDQUFDLFVBQUQsRUFBYSxVQUFiLENBQXpHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkYsZUFHRSw4REFBQyxtREFBRDtBQUFPLGlCQUFXLEVBQUUsR0FBcEI7QUFBeUIsZUFBUyxFQUFFLE9BQXBDO0FBQTZDLGtCQUFZLEVBQUUsS0FBM0Q7QUFBQSxnQkFDZ0JYLFFBQVEsR0FBR0UsVUFBWCxpQkFDQyw4REFBQyxtREFBRDtBQUNFLFdBQUcsRUFBRUYsUUFBUSxHQUFHRSxVQUFYLElBQXlCLEVBRGhDO0FBRUUsYUFBSyxFQUFDLE1BRlI7QUFHRSxjQUFNLEVBQUMsTUFIVDtBQUlFLFdBQUcsRUFBQyxNQUpOO0FBS0UsaUJBQVMsRUFBQyxNQUxaO0FBTUUsaUJBQVMsRUFBQyxPQU5aO0FBT0UsaUJBQVMsRUFBQztBQVBaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhGLGVBa0JjLDhEQUFDLGtEQUFEO0FBQU0sY0FBUSxFQUFFLElBQWhCO0FBQXNCLFlBQU0sRUFBRSxNQUE5QjtBQUFzQyxlQUFTLEVBQUUsUUFBakQ7QUFBQSw4QkFDQTtBQUFBLHlDQUFNYixXQUFXLEVBQWpCLGtEQUFNLGNBQWVNLElBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURBLGVBRUE7QUFBQSx5Q0FBTU4sV0FBVyxFQUFqQixrREFBTSxjQUFlTyxPQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGQSxlQUdBO0FBQUEseUNBQU1QLFdBQVcsRUFBakIsa0RBQU0sY0FBZVEsS0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBbEJkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURDLENBREssS0E0QkEsSUFBSVYsT0FBTyxLQUFLLEtBQVosSUFBcUIsQ0FBQUMsTUFBTSxTQUFOLElBQUFBLE1BQU0sV0FBTixZQUFBQSxNQUFNLENBQUVxQixjQUFSLE1BQTJCLE1BQWhELElBQTBELENBQUFyQixNQUFNLFNBQU4sSUFBQUEsTUFBTSxXQUFOLFlBQUFBLE1BQU0sQ0FBRUUsb0JBQVIsTUFBaUMsS0FBL0YsRUFDTCxvQkFDQSw4REFBQyxpREFBRDtBQUFLLFdBQU8sRUFBRSxNQUFkO0FBQXNCLFlBQVEsRUFBRSxRQUFoQztBQUEwQyxhQUFPLE1BQWpEO0FBQXlELFdBQU8sRUFBRSxHQUFsRTtBQUF1RSxhQUFTLEVBQUUsR0FBbEY7QUFBd0YsVUFBTSxFQUFFO0FBQUVvQixZQUFNLEVBQUU7QUFBVixLQUFoRztBQUFtSCxtQkFBZSxFQUFFQyxtRUFBaUIsQ0FBQyxVQUFELEVBQWEsU0FBYixDQUFySjtBQUE4SyxXQUFPLEVBQUUsSUFBdkw7QUFBQSw0QkFDQSw4REFBQyxtREFBRDtBQUFPLHFCQUFlLEVBQUUsWUFBeEI7QUFBc0MsYUFBTyxFQUFFLE1BQS9DO0FBQXVELFdBQUssRUFBRSxHQUE5RDtBQUFtRSxZQUFNLEVBQUUsQ0FBM0U7QUFBOEUsWUFBTSxFQUFFLE1BQXRGO0FBQThGLGdCQUFVLEVBQUU7QUFBMUc7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURBLGVBRUEsOERBQUMsa0RBQUQ7QUFBTSxlQUFTLEVBQUVBLG1FQUFpQixDQUFDLE9BQUQsRUFBVSxPQUFWLENBQWxDO0FBQXNELGNBQVEsRUFBRSxJQUFoRTtBQUFzRSxlQUFTLEVBQUUsUUFBakY7QUFBMkYsWUFBTSxFQUFFLEdBQW5HO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREEsQ0FESyxLQVNBLElBQUl4QixPQUFPLEtBQUssS0FBWixJQUFxQixDQUFBQyxNQUFNLFNBQU4sSUFBQUEsTUFBTSxXQUFOLFlBQUFBLE1BQU0sQ0FBRXFCLGNBQVIsTUFBMkIsTUFBaEQsSUFBMEQsQ0FBQXJCLE1BQU0sU0FBTixJQUFBQSxNQUFNLFdBQU4sWUFBQUEsTUFBTSxDQUFFRSxvQkFBUixNQUFpQyxJQUEvRixFQUNMLG9CQUNELDhEQUFDLGlEQUFEO0FBQUssV0FBTyxFQUFFLE1BQWQ7QUFBc0IsWUFBUSxFQUFFLFFBQWhDO0FBQTBDLGFBQU8sTUFBakQ7QUFBeUQsV0FBTyxFQUFFLEdBQWxFO0FBQXVFLGFBQVMsRUFBRSxHQUFsRjtBQUF3RixVQUFNLEVBQUU7QUFBRW9CLFlBQU0sRUFBRTtBQUFWLEtBQWhHO0FBQW1ILG1CQUFlLEVBQUVDLG1FQUFpQixDQUFDLFVBQUQsRUFBYSxTQUFiLENBQXJKO0FBQThLLFdBQU8sRUFBRSxJQUF2TDtBQUFBLDRCQUNJLDhEQUFDLHFEQUFEO0FBQVMsY0FBUSxNQUFqQjtBQUFrQixXQUFLLEVBQUMsT0FBeEI7QUFBZ0MsZUFBUyxFQUFDLEtBQTFDO0FBQUEsNkJBQWdELDhEQUFDLG1EQUFEO0FBQU8sdUJBQWUsRUFBRSxZQUF4QjtBQUFzQyxlQUFPLEVBQUUsTUFBL0M7QUFBdUQsYUFBSyxFQUFFLEdBQTlEO0FBQW1FLGNBQU0sRUFBRSxDQUEzRTtBQUE4RSxjQUFNLEVBQUUsTUFBdEY7QUFBOEYsbUJBQVcsRUFBRSxHQUEzRztBQUFnSCxrQkFBVSxFQUFFO0FBQTVIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBRUUsOERBQUMsa0RBQUQ7QUFBTSxjQUFRLEVBQUUsSUFBaEI7QUFBc0IsWUFBTSxFQUFFLE1BQTlCO0FBQXNDLGVBQVMsRUFBRSxRQUFqRDtBQUEyRCxpQkFBVyxFQUFFLEdBQXhFO0FBQTZFLGVBQVMsRUFBRUEsbUVBQWlCLENBQUMsVUFBRCxFQUFhLFVBQWIsQ0FBekc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixlQUdFLDhEQUFDLG1EQUFEO0FBQU8saUJBQVcsRUFBRSxHQUFwQjtBQUF5QixlQUFTLEVBQUUsT0FBcEM7QUFBNkMsa0JBQVksRUFBRSxLQUEzRDtBQUFBLGdCQUVnQlgsUUFBUSxHQUFHRSxVQUFYLGlCQUNDLDhEQUFDLG1EQUFEO0FBQ0UsV0FBRyxFQUFFRixRQUFRLEdBQUdFLFVBQVgsSUFBeUIsRUFEaEM7QUFFRSxhQUFLLEVBQUMsTUFGUjtBQUdFLGNBQU0sRUFBQyxNQUhUO0FBSUUsV0FBRyxFQUFDLE1BSk47QUFLRSxpQkFBUyxFQUFDLE1BTFo7QUFNRSxpQkFBUyxFQUFDLE9BTlo7QUFPRSxpQkFBUyxFQUFDO0FBUFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEYsZUFvQmMsOERBQUMsa0RBQUQ7QUFBTSxjQUFRLEVBQUUsSUFBaEI7QUFBc0IsWUFBTSxFQUFFLE1BQTlCO0FBQXNDLGVBQVMsRUFBRSxRQUFqRDtBQUFBLDhCQUNBO0FBQUEseUNBQU1iLFdBQVcsRUFBakIsa0RBQU0sY0FBZU0sSUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREEsZUFFQTtBQUFBLHlDQUFNTixXQUFXLEVBQWpCLGtEQUFNLGNBQWVPLE9BQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZBLGVBR0E7QUFBQSx5Q0FBTVAsV0FBVyxFQUFqQixrREFBTSxjQUFlUSxLQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFwQmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREMsQ0FESyxLQStCQSxJQUFJVixPQUFPLEtBQUssS0FBWixJQUFxQixDQUFBQyxNQUFNLFNBQU4sSUFBQUEsTUFBTSxXQUFOLFlBQUFBLE1BQU0sQ0FBRXFCLGNBQVIsTUFBMkIsS0FBaEQsSUFBeUQsQ0FBQXJCLE1BQU0sU0FBTixJQUFBQSxNQUFNLFdBQU4sWUFBQUEsTUFBTSxDQUFFRSxvQkFBUixNQUFpQyxLQUE5RixFQUNMLG9CQUNDLDhEQUFDLGlEQUFEO0FBQUssV0FBTyxFQUFFLE1BQWQ7QUFBc0IsWUFBUSxFQUFFLFFBQWhDO0FBQTBDLGFBQU8sTUFBakQ7QUFBeUQsV0FBTyxFQUFFLEdBQWxFO0FBQXdFLFVBQU0sRUFBRTtBQUFFb0IsWUFBTSxFQUFFO0FBQVYsS0FBaEY7QUFBa0csYUFBUyxFQUFFLEdBQTdHO0FBQW1ILG1CQUFlLEVBQUVDLG1FQUFpQixDQUFDLFVBQUQsRUFBYSxTQUFiLENBQXJKO0FBQThLLFdBQU8sRUFBRSxJQUF2TDtBQUFBLDRCQUNBLDhEQUFDLG1EQUFEO0FBQU8scUJBQWUsRUFBRSxTQUF4QjtBQUFtQyxhQUFPLEVBQUUsTUFBNUM7QUFBb0QsV0FBSyxFQUFFLEdBQTNEO0FBQWdFLFlBQU0sRUFBRSxDQUF4RTtBQUEyRSxZQUFNLEVBQUUsTUFBbkY7QUFBMkYsZ0JBQVUsRUFBRTtBQUF2RztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREEsZUFFQSw4REFBQyxrREFBRDtBQUFNLGVBQVMsRUFBRUEsbUVBQWlCLENBQUMsT0FBRCxFQUFVLE9BQVYsQ0FBbEM7QUFBc0QsY0FBUSxFQUFFLElBQWhFO0FBQXVFLGVBQVMsRUFBRSxRQUFsRjtBQUE0RixZQUFNLEVBQUUsR0FBcEc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERCxDQURLLEtBU0EsSUFBSXhCLE9BQU8sS0FBSyxLQUFaLElBQXFCLENBQUFDLE1BQU0sU0FBTixJQUFBQSxNQUFNLFdBQU4sWUFBQUEsTUFBTSxDQUFFcUIsY0FBUixNQUEyQixLQUFoRCxJQUF5RCxDQUFBckIsTUFBTSxTQUFOLElBQUFBLE1BQU0sV0FBTixZQUFBQSxNQUFNLENBQUVFLG9CQUFSLE1BQWlDLElBQTlGLEVBQ0wsb0JBQ0MsOERBQUMsaURBQUQ7QUFBSyxXQUFPLEVBQUUsTUFBZDtBQUFzQixZQUFRLEVBQUUsUUFBaEM7QUFBMEMsYUFBTyxNQUFqRDtBQUF5RCxXQUFPLEVBQUUsR0FBbEU7QUFBdUUsYUFBUyxFQUFFLEdBQWxGO0FBQXdGLFVBQU0sRUFBRTtBQUFFb0IsWUFBTSxFQUFFO0FBQVYsS0FBaEc7QUFBbUgsbUJBQWUsRUFBRUMsbUVBQWlCLENBQUMsVUFBRCxFQUFhLFNBQWIsQ0FBcko7QUFBOEssV0FBTyxFQUFFLElBQXZMO0FBQUEsNEJBQ0EsOERBQUMscURBQUQ7QUFBUyxjQUFRLE1BQWpCO0FBQWtCLFdBQUssRUFBQyxZQUF4QjtBQUFxQyxlQUFTLEVBQUMsS0FBL0M7QUFBQSw2QkFBcUQsOERBQUMsbURBQUQ7QUFBTyx1QkFBZSxFQUFFLFNBQXhCO0FBQW1DLGVBQU8sRUFBRSxNQUE1QztBQUFvRCxhQUFLLEVBQUUsR0FBM0Q7QUFBZ0UsY0FBTSxFQUFFLENBQXhFO0FBQTJFLGNBQU0sRUFBRSxNQUFuRjtBQUEyRixtQkFBVyxFQUFFLEdBQXhHO0FBQTZHLGtCQUFVLEVBQUU7QUFBekg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREEsZUFFRiw4REFBQyxrREFBRDtBQUFNLGNBQVEsRUFBRSxJQUFoQjtBQUFzQixZQUFNLEVBQUUsTUFBOUI7QUFBc0MsZUFBUyxFQUFFLFFBQWpEO0FBQTJELGlCQUFXLEVBQUUsR0FBeEU7QUFBNkUsZUFBUyxFQUFFQSxtRUFBaUIsQ0FBQyxVQUFELEVBQWEsVUFBYixDQUF6RztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZFLGVBR0YsOERBQUMsbURBQUQ7QUFBTyxpQkFBVyxFQUFFLEdBQXBCO0FBQXlCLGVBQVMsRUFBRSxPQUFwQztBQUE2QyxrQkFBWSxFQUFFLEtBQTNEO0FBQUEsZ0JBQ2VYLFFBQVEsR0FBR0UsVUFBWCxpQkFDQyw4REFBQyxtREFBRDtBQUNFLFdBQUcsRUFBRUYsUUFBUSxHQUFHRSxVQUFYLElBQXlCLEVBRGhDO0FBRUUsYUFBSyxFQUFDLE1BRlI7QUFHRSxjQUFNLEVBQUMsTUFIVDtBQUlFLFdBQUcsRUFBQyxNQUpOO0FBS0UsaUJBQVMsRUFBQyxNQUxaO0FBTUUsaUJBQVMsRUFBQyxPQU5aO0FBT0UsaUJBQVMsRUFBQztBQVBaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhFLGVBa0JTLDhEQUFDLGtEQUFEO0FBQU0sY0FBUSxFQUFFLElBQWhCO0FBQXNCLFlBQU0sRUFBRSxNQUE5QjtBQUFzQyxlQUFTLEVBQUUsUUFBakQ7QUFBQSw4QkFDQTtBQUFBLDBDQUFNYixXQUFXLEVBQWpCLG1EQUFNLGVBQWVNLElBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURBLGVBRUE7QUFBQSwwQ0FBTU4sV0FBVyxFQUFqQixtREFBTSxlQUFlTyxPQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGQSxlQUdBO0FBQUEsMENBQU1QLFdBQVcsRUFBakIsbURBQU0sZUFBZVEsS0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBbEJUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURELENBREssS0E2Qkwsb0JBQ0MsOERBQUMsaURBQUQ7QUFBSyxXQUFPLEVBQUUsTUFBZDtBQUFzQixZQUFRLEVBQUUsUUFBaEM7QUFBMEMsYUFBTyxNQUFqRDtBQUF5RCxXQUFPLEVBQUUsR0FBbEU7QUFBd0UsYUFBUyxFQUFFLEdBQW5GO0FBQXdGLFVBQU0sRUFBRTtBQUFFYSxZQUFNLEVBQUU7QUFBVixLQUFoRztBQUFtSCxtQkFBZSxFQUFFQyxtRUFBaUIsQ0FBQyxVQUFELEVBQWEsU0FBYixDQUFySjtBQUE4SyxXQUFPLEVBQUUsSUFBdkw7QUFBQSw0QkFDQyw4REFBQyxxREFBRDtBQUFTLGNBQVEsTUFBakI7QUFBa0IsV0FBSyxFQUFDLFNBQXhCO0FBQWtDLGVBQVMsRUFBQyxLQUE1QztBQUFBLDZCQUFrRCw4REFBQyxtREFBRDtBQUFPLHVCQUFlLEVBQUVBLG1FQUFpQixDQUFDLFVBQUQsRUFBYSxVQUFiLENBQXpDO0FBQW1FLGVBQU8sRUFBRSxNQUE1RTtBQUFvRixhQUFLLEVBQUUsR0FBM0Y7QUFBZ0csY0FBTSxFQUFFLENBQXhHO0FBQTJHLGNBQU0sRUFBRSxNQUFuSDtBQUEySCxrQkFBVSxFQUFFO0FBQXZJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURELGVBRUEsOERBQUMsa0RBQUQ7QUFBTSxlQUFTLEVBQUVBLG1FQUFpQixDQUFDLE9BQUQsRUFBVSxPQUFWLENBQWxDO0FBQXNELGNBQVEsRUFBRSxJQUFoRTtBQUF1RSxlQUFTLEVBQUUsUUFBbEY7QUFBNEYsWUFBTSxFQUFFLEdBQXBHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUFTQSxDQXZNRDs7R0FBTTVCLE07VUFFd0JDLHlELEVBK0N1RzJCLCtELEVBRW5IQSwrRCxFQU9rSEEsK0QsRUFFbEhBLCtELEVBMEJrSEEsK0QsRUFFMUNBLCtELEVBMEIyQ0EsK0QsRUFFbkhBLCtELEVBT2tIQSwrRCxFQUUxQ0EsK0QsRUE2QjRDQSwrRCxFQUVuSEEsK0QsRUFPbUhBLCtELEVBRTlDQSwrRCxFQTBCOENBLCtELEVBQ3pEQSwrRCxFQUMxREEsK0Q7OztLQWpNYjVCLE07QUF5TU4sK0RBQWVBLE1BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZTRhNGY4NjA2YjQxZmFhYTZkMTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgRmxleCxcclxuICBBdmF0YXIsXHJcbiAgQm94LFxyXG4gIFRleHQsXHJcbiAgQmFkZ2UsXHJcbiAgU3RhY2ssXHJcbiAgTGluayxcclxuICBVbm9yZGVyZWRMaXN0LFxyXG4gIExpc3RJdGVtLFxyXG4gIHVzZUNvbG9yTW9kZVZhbHVlLFxyXG4gIFRvb2x0aXBcclxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VMYW55YXJkIH0gZnJvbSBcInJlYWN0LXVzZS1sYW55YXJkXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5cclxuXHJcbi8qIEltcG9ydCB0eXBlcyAqL1xyXG5pbXBvcnQgdHlwZSB7IEFjdGl2aXR5IH0gZnJvbSBcInJlYWN0LXVzZS1sYW55YXJkXCI7XHJcblxyXG4vKiBJbXBvcnQgZGF0YSAqL1xyXG5pbXBvcnQgdXNlcklkIGZyb20gXCIuLi9kYXRhL3VzZXJcIjtcclxuXHJcblxyXG5cclxuY29uc3QgU3RhdHVzOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuIFxyXG4gIGNvbnN0IHsgbG9hZGluZywgc3RhdHVzIH0gPSB1c2VMYW55YXJkKHtcclxuICAgIHVzZXJJZCxcclxuICAgIHNvY2tldDogdHJ1ZSxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgZ2V0QWN0aXZpdHkgPSAoKSA9PiB7XHJcbiAgICBpZiAoc3RhdHVzPy5saXN0ZW5pbmdfdG9fc3BvdGlmeSA9PT0gdHJ1ZSkge1xyXG4gICAgICBjb25zdCB7IHNvbmcsIGFydGlzdCwgYWxidW0gfSA9IHN0YXR1cy5zcG90aWZ5IHx8IHt9O1xyXG5cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBuYW1lOiBzb25nLFxyXG4gICAgICAgIGRldGFpbHM6IGBieSAke2FydGlzdH1gLFxyXG4gICAgICAgIHN0YXRlOiBgb24gJHthbGJ1bX1gLFxyXG4gICAgICB9O1xyXG4gICAgfSBlbHNlIHJldHVybiBzdGF0dXM/LmFjdGl2aXRpZXMuYXQoLTEpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldEltYWdlID0gKCkgPT4ge1xyXG4gICAgaWYgKCFsb2FkaW5nICYmIHN0YXR1cz8ubGlzdGVuaW5nX3RvX3Nwb3RpZnkgPT09IHRydWUpIHtcclxuICAgICAgY29uc3QgYWN0aXZpdHkgPSBzdGF0dXMuc3BvdGlmeTtcclxuXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgbGFyZ2VJbWFnZTogYWN0aXZpdHk/LmFsYnVtX2FydF91cmwsXHJcbiAgICAgIH07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBhY3Rpdml0eSA9IGdldEFjdGl2aXR5KCkgYXMgQWN0aXZpdHk7XHJcblxyXG4gICAgICBjb25zdCB7IGFwcGxpY2F0aW9uX2lkIH0gPSBhY3Rpdml0eSB8fCB7fTtcclxuICAgICAgY29uc3QgeyBsYXJnZV9pbWFnZSwgc21hbGxfaW1hZ2UgfSA9IGFjdGl2aXR5Py5hc3NldHMgfHwge307XHJcblxyXG4gICAgICBjb25zdCBbbGFyZ2VJbWFnZSwgc21hbGxJbWFnZV0gPSBbXHJcbiAgICAgICAgbGFyZ2VfaW1hZ2UgJiZcclxuICAgICAgICAgIGBodHRwczovL2Nkbi5kaXNjb3JkYXBwLmNvbS9hcHAtYXNzZXRzLyR7YXBwbGljYXRpb25faWR9LyR7bGFyZ2VfaW1hZ2V9LnBuZz9zaXplPTI1NmAsXHJcbiAgICAgICAgc21hbGxfaW1hZ2UgJiZcclxuICAgICAgICAgIGBodHRwczovL2Nkbi5kaXNjb3JkYXBwLmNvbS9hcHAtYXNzZXRzLyR7YXBwbGljYXRpb25faWR9LyR7c21hbGxfaW1hZ2V9LnBuZz9zaXplPTI1NmAsXHJcbiAgICAgIF07XHJcblxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGxhcmdlSW1hZ2UsXHJcbiAgICAgICAgc21hbGxJbWFnZSxcclxuICAgICAgfTtcclxuICAgIH1cclxuICB9O1xyXG4gIFxyXG4gIFxyXG4gaWYgKGxvYWRpbmcgPT09IGZhbHNlICYmIHN0YXR1cz8uZGlzY29yZF9zdGF0dXMgPT09IFwib25saW5lXCIgJiYgc3RhdHVzPy5saXN0ZW5pbmdfdG9fc3BvdGlmeSA9PT0gZmFsc2UgKVxyXG4gcmV0dXJuICggXHJcbiA8Qm94IGRpc3BsYXk9e1wiZmxleFwifSBmbGV4V3JhcD17XCJub3dyYXBcIn0gZmxvYXQ9e1wibGVmdFwifSBwYWRkaW5nPXtcIjVcIn0gIG1hcmdpblRvcD17XCI1XCJ9IF9ob3Zlcj17eyBzaGFkb3c6IFwibGdcIiB9fSAgYmFja2dyb3VuZENvbG9yPXt1c2VDb2xvck1vZGVWYWx1ZShcImdyYXkuMTAwXCIsIFwiIzFlMjUzM1wiKX0gcm91bmRlZD17XCJtZFwifT5cclxuIDxTdGFjayBiYWNrZ3JvdW5kQ29sb3I9e1wiZ3JlZW4uNTAwXCJ9IHJvdW5kZWQ9e1wiZnVsbFwifSB3aWR0aD17XCI0XCJ9IGhlaWdodD17NH0gbWFyZ2luPXtcImF1dG9cIn0gYWxpZ25JdGVtcz17XCJjZW50ZXJcIn0+PC9TdGFjaz5cclxuIDxUZXh0IHRleHRDb2xvcj17dXNlQ29sb3JNb2RlVmFsdWUoXCJibGFja1wiLCBcIndoaXRlXCIpfSBmb250U2l6ZT17XCJtZFwifSAgdGV4dEFsaWduPXtcImNlbnRlclwifSBtYXJnaW49e1wiMVwifT4gT25saW5lPC9UZXh0PlxyXG48L0JveD4gXHJcblxyXG4gKTtcclxuXHJcbiBlbHNlIGlmIChsb2FkaW5nID09PSB0cnVlICYmIHN0YXR1cz8uZGlzY29yZF9zdGF0dXMgPT09IFwib25saW5lXCIgJiYgc3RhdHVzPy5saXN0ZW5pbmdfdG9fc3BvdGlmeSA9PT0gZmFsc2UpXHJcbnJldHVybiAoXHJcbjxCb3ggZGlzcGxheT17XCJmbGV4XCJ9IGZsZXhXcmFwPXtcIm5vd3JhcFwifSBmbG9hdD17XCJsZWZ0XCJ9IHBhZGRpbmc9e1wiNVwifSAgbWFyZ2luVG9wPXtcIjVcIn0gX2hvdmVyPXt7IHNoYWRvdzogXCJsZ1wiIH19ICBiYWNrZ3JvdW5kQ29sb3I9e3VzZUNvbG9yTW9kZVZhbHVlKFwiZ3JheS4xMDBcIiwgXCIjMWUyNTMzXCIpfSByb3VuZGVkPXtcIm1kXCJ9PlxyXG4gPFN0YWNrIGJhY2tncm91bmRDb2xvcj17XCJncmVlbi41MDBcIn0gcm91bmRlZD17XCJmdWxsXCJ9IHdpZHRoPXtcIjRcIn0gaGVpZ2h0PXs0fSBtYXJnaW49e1wiYXV0b1wifSBhbGlnbkl0ZW1zPXtcImNlbnRlclwifT48L1N0YWNrPlxyXG4gPFRleHQgdGV4dENvbG9yPXt1c2VDb2xvck1vZGVWYWx1ZShcImJsYWNrXCIsIFwid2hpdGVcIil9IGZvbnRTaXplPXtcIm1kXCJ9ICB0ZXh0QWxpZ249e1wiY2VudGVyXCJ9IG1hcmdpbj17XCIxXCJ9PiBPbmxpbmU8L1RleHQ+XHJcbiA8U3RhY2sgbWFyZ2luUmlnaHQ9e1wiNVwifSBvYmplY3RGaXQ9e1wiY292ZXJcIn0gYm9yZGVyUmFkaXVzPXtcIjUwJVwifT5cclxuICAgICAgICAgICAgICAgICB7Z2V0SW1hZ2UoKS5sYXJnZUltYWdlICYmIChcclxuICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICBzcmM9e2dldEltYWdlKCkubGFyZ2VJbWFnZSB8fCBcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjgwcHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCI4MHB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgYWx0PVwiaWNvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgIGRyYWdnYWJsZT1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ9XCJjb3ZlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtbGdcIlxyXG4gICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L1N0YWNrPlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDxUZXh0IGZvbnRTaXplPXtcInNtXCJ9IG1hcmdpbj17XCJhdXRvXCJ9IHRleHRBbGlnbj17XCJjZW50ZXJcIn0+ICAgIFxyXG4gICAgICAgICAgICAgIDxoMT4ge2dldEFjdGl2aXR5KCk/Lm5hbWV9PC9oMT5cclxuICAgICAgICAgICAgICA8aDE+IHtnZXRBY3Rpdml0eSgpPy5kZXRhaWxzfTwvaDE+XHJcbiAgICAgICAgICAgICAgPGgxPiB7Z2V0QWN0aXZpdHkoKT8uc3RhdGV9IDwvaDE+ICAgIFxyXG4gICAgICAgICAgICAgIDwvVGV4dD5cclxuPC9Cb3g+IFxyXG4pO1xyXG5cclxuIGVsc2UgaWYgKGxvYWRpbmcgPT09IGZhbHNlICYmIHN0YXR1cz8uZGlzY29yZF9zdGF0dXMgPT09IFwib25saW5lXCIgJiYgc3RhdHVzPy5saXN0ZW5pbmdfdG9fc3BvdGlmeSA9PT0gdHJ1ZSlcclxuIHJldHVybiAoXHJcbjxCb3ggZGlzcGxheT17XCJmbGV4XCJ9IGZsZXhXcmFwPXtcIm5vd3JhcFwifSBmbG9hdD17XCJsZWZ0XCJ9IHBhZGRpbmc9e1wiNVwifSBtYXJnaW5Ub3A9e1wiNVwifSAgX2hvdmVyPXt7IHNoYWRvdzogXCJsZ1wiIH19ICBiYWNrZ3JvdW5kQ29sb3I9e3VzZUNvbG9yTW9kZVZhbHVlKFwiZ3JheS4xMDBcIiwgXCIjMWUyNTMzXCIpfSByb3VuZGVkPXtcIm1kXCJ9PlxyXG4gICA8VG9vbHRpcCBoYXNBcnJvdyBsYWJlbD1cIk9ubGluZVwiIHBsYWNlbWVudD1cInRvcFwiPjxTdGFjayBiYWNrZ3JvdW5kQ29sb3I9e1wiZ3JlZW4uNTAwXCJ9IHJvdW5kZWQ9e1wiZnVsbFwifSB3aWR0aD17XCI0XCJ9IGhlaWdodD17NH0gbWFyZ2luPXtcImF1dG9cIn0gbWFyZ2luUmlnaHQ9e1wiNVwifSBhbGlnbkl0ZW1zPXtcImNlbnRlclwifT48L1N0YWNrPjwvVG9vbHRpcD4gXHJcbiAgPFRleHQgZm9udFNpemU9e1wic21cIn0gbWFyZ2luPXtcImF1dG9cIn0gdGV4dEFsaWduPXtcImNlbnRlclwifSBtYXJnaW5SaWdodD17XCI1XCJ9IHRleHRDb2xvcj17dXNlQ29sb3JNb2RlVmFsdWUoXCJncmF5LjQwMFwiLCBcImdyYXkuNjAwXCIpfT5MaXN0ZW5pbmcgdG88L1RleHQ+XHJcbiAgPFN0YWNrIG1hcmdpblJpZ2h0PXtcIjVcIn0gb2JqZWN0Rml0PXtcImNvdmVyXCJ9IGJvcmRlclJhZGl1cz17XCI1MCVcIn0+XHJcbiAgICAgICAgICAgICAgICAge2dldEltYWdlKCkubGFyZ2VJbWFnZSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgc3JjPXtnZXRJbWFnZSgpLmxhcmdlSW1hZ2UgfHwgXCJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCI4MHB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiODBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgIGFsdD1cImljb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICBkcmFnZ2FibGU9XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0PVwiY292ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWxnXCJcclxuICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9TdGFjaz5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8VGV4dCBmb250U2l6ZT17XCJzbVwifSBtYXJnaW49e1wiYXV0b1wifSB0ZXh0QWxpZ249e1wiY2VudGVyXCJ9PiAgICBcclxuICAgICAgICAgICAgICA8aDE+IHtnZXRBY3Rpdml0eSgpPy5uYW1lfTwvaDE+XHJcbiAgICAgICAgICAgICAgPGgxPiB7Z2V0QWN0aXZpdHkoKT8uZGV0YWlsc308L2gxPlxyXG4gICAgICAgICAgICAgIDxoMT4ge2dldEFjdGl2aXR5KCk/LnN0YXRlfSA8L2gxPiAgICBcclxuICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgXHJcbiAgPC9Cb3g+IFxyXG4gKTtcclxuIGVsc2UgaWYgKGxvYWRpbmcgPT09IGZhbHNlICYmIHN0YXR1cz8uZGlzY29yZF9zdGF0dXMgPT09IFwiaWRsZVwiICYmIHN0YXR1cz8ubGlzdGVuaW5nX3RvX3Nwb3RpZnkgPT09IGZhbHNlKVxyXG4gcmV0dXJuICggXHJcbiA8Qm94IGRpc3BsYXk9e1wiZmxleFwifSBmbGV4V3JhcD17XCJub3dyYXBcIn0gZmxvYXQ9e1wibGVmdFwifSBwYWRkaW5nPXtcIjVcIn0gbWFyZ2luVG9wPXtcIjVcIn0gIF9ob3Zlcj17eyBzaGFkb3c6IFwibGdcIiB9fSAgYmFja2dyb3VuZENvbG9yPXt1c2VDb2xvck1vZGVWYWx1ZShcImdyYXkuMTAwXCIsIFwiIzFlMjUzM1wiKX0gcm91bmRlZD17XCJtZFwifT5cclxuIDxTdGFjayBiYWNrZ3JvdW5kQ29sb3I9e1wieWVsbG93LjQwMFwifSByb3VuZGVkPXtcImZ1bGxcIn0gd2lkdGg9e1wiNFwifSBoZWlnaHQ9ezR9IG1hcmdpbj17XCJhdXRvXCJ9IGFsaWduSXRlbXM9e1wiY2VudGVyXCJ9PjwvU3RhY2s+XHJcbiA8VGV4dCB0ZXh0Q29sb3I9e3VzZUNvbG9yTW9kZVZhbHVlKFwiYmxhY2tcIiwgXCJ3aGl0ZVwiKX0gZm9udFNpemU9e1wibWRcIn0gdGV4dEFsaWduPXtcImNlbnRlclwifSBtYXJnaW49e1wiMVwifT4gSWRsZWQ8L1RleHQ+XHJcbiA8L0JveD4gXHJcblxyXG4gKTtcclxuIFxyXG4gZWxzZSBpZiAobG9hZGluZyA9PT0gZmFsc2UgJiYgc3RhdHVzPy5kaXNjb3JkX3N0YXR1cyA9PT0gXCJpZGxlXCIgJiYgc3RhdHVzPy5saXN0ZW5pbmdfdG9fc3BvdGlmeSA9PT0gdHJ1ZSlcclxuIHJldHVybiAoXHJcbjxCb3ggZGlzcGxheT17XCJmbGV4XCJ9IGZsZXhXcmFwPXtcIm5vd3JhcFwifSBmbG9hdD17XCJsZWZ0XCJ9IHBhZGRpbmc9e1wiNVwifSBtYXJnaW5Ub3A9e1wiNVwifSAgX2hvdmVyPXt7IHNoYWRvdzogXCJsZ1wiIH19ICBiYWNrZ3JvdW5kQ29sb3I9e3VzZUNvbG9yTW9kZVZhbHVlKFwiZ3JheS4xMDBcIiwgXCIjMWUyNTMzXCIpfSByb3VuZGVkPXtcIm1kXCJ9PlxyXG4gICAgPFRvb2x0aXAgaGFzQXJyb3cgbGFiZWw9XCJJZGxlZFwiIHBsYWNlbWVudD1cInRvcFwiPjxTdGFjayBiYWNrZ3JvdW5kQ29sb3I9e1wieWVsbG93LjQwMFwifSByb3VuZGVkPXtcImZ1bGxcIn0gd2lkdGg9e1wiNFwifSBoZWlnaHQ9ezR9IG1hcmdpbj17XCJhdXRvXCJ9IG1hcmdpblJpZ2h0PXtcIjVcIn0gYWxpZ25JdGVtcz17XCJjZW50ZXJcIn0+PC9TdGFjaz48L1Rvb2x0aXA+XHJcbiAgPFRleHQgZm9udFNpemU9e1wic21cIn0gbWFyZ2luPXtcImF1dG9cIn0gdGV4dEFsaWduPXtcImNlbnRlclwifSBtYXJnaW5SaWdodD17XCI1XCJ9IHRleHRDb2xvcj17dXNlQ29sb3JNb2RlVmFsdWUoXCJncmF5LjQwMFwiLCBcImdyYXkuNjAwXCIpfT5MaXN0ZW5pbmcgdG88L1RleHQ+XHJcbiAgPFN0YWNrIG1hcmdpblJpZ2h0PXtcIjVcIn0gb2JqZWN0Rml0PXtcImNvdmVyXCJ9IGJvcmRlclJhZGl1cz17XCI1MCVcIn0+XHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICB7Z2V0SW1hZ2UoKS5sYXJnZUltYWdlICYmIChcclxuICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICBzcmM9e2dldEltYWdlKCkubGFyZ2VJbWFnZSB8fCBcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjgwcHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCI4MHB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgYWx0PVwiaWNvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgIGRyYWdnYWJsZT1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ9XCJjb3ZlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtbGdcIlxyXG4gICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8L1N0YWNrPlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDxUZXh0IGZvbnRTaXplPXtcInNtXCJ9IG1hcmdpbj17XCJhdXRvXCJ9IHRleHRBbGlnbj17XCJjZW50ZXJcIn0+ICAgIFxyXG4gICAgICAgICAgICAgIDxoMT4ge2dldEFjdGl2aXR5KCk/Lm5hbWV9PC9oMT5cclxuICAgICAgICAgICAgICA8aDE+IHtnZXRBY3Rpdml0eSgpPy5kZXRhaWxzfTwvaDE+XHJcbiAgICAgICAgICAgICAgPGgxPiB7Z2V0QWN0aXZpdHkoKT8uc3RhdGV9IDwvaDE+ICAgIFxyXG4gICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICBcclxuICA8L0JveD4gXHJcbiApO1xyXG5cclxuIGVsc2UgaWYgKGxvYWRpbmcgPT09IGZhbHNlICYmIHN0YXR1cz8uZGlzY29yZF9zdGF0dXMgPT09IFwiZG5kXCIgJiYgc3RhdHVzPy5saXN0ZW5pbmdfdG9fc3BvdGlmeSA9PT0gZmFsc2UpXHJcbiByZXR1cm4gKFxyXG4gIDxCb3ggZGlzcGxheT17XCJmbGV4XCJ9IGZsZXhXcmFwPXtcIm5vd3JhcFwifSBmbG9hdD17XCJsZWZ0XCJ9IHBhZGRpbmc9e1wiNVwifSAgX2hvdmVyPXt7IHNoYWRvdzogXCJsZ1wiIH19IG1hcmdpblRvcD17XCI1XCJ9ICBiYWNrZ3JvdW5kQ29sb3I9e3VzZUNvbG9yTW9kZVZhbHVlKFwiZ3JheS4xMDBcIiwgXCIjMWUyNTMzXCIpfSByb3VuZGVkPXtcIm1kXCJ9PlxyXG4gIDxTdGFjayBiYWNrZ3JvdW5kQ29sb3I9e1wicmVkLjUwMFwifSByb3VuZGVkPXtcImZ1bGxcIn0gd2lkdGg9e1wiNFwifSBoZWlnaHQ9ezR9IG1hcmdpbj17XCJhdXRvXCJ9IGFsaWduSXRlbXM9e1wiY2VudGVyXCJ9PjwvU3RhY2s+XHJcbiAgPFRleHQgdGV4dENvbG9yPXt1c2VDb2xvck1vZGVWYWx1ZShcImJsYWNrXCIsIFwid2hpdGVcIil9IGZvbnRTaXplPXtcIm1kXCJ9ICB0ZXh0QWxpZ249e1wiY2VudGVyXCJ9IG1hcmdpbj17XCIxXCJ9PiBEaXN0dXJiaW5nPC9UZXh0PlxyXG48L0JveD5cclxuXHJcbiApO1xyXG5cclxuIGVsc2UgaWYgKGxvYWRpbmcgPT09IGZhbHNlICYmIHN0YXR1cz8uZGlzY29yZF9zdGF0dXMgPT09IFwiZG5kXCIgJiYgc3RhdHVzPy5saXN0ZW5pbmdfdG9fc3BvdGlmeSA9PT0gdHJ1ZSlcclxuIHJldHVybiAoXHJcbiAgPEJveCBkaXNwbGF5PXtcImZsZXhcIn0gZmxleFdyYXA9e1wibm93cmFwXCJ9IGZsb2F0PXtcImxlZnRcIn0gcGFkZGluZz17XCI1XCJ9IG1hcmdpblRvcD17XCI1XCJ9ICBfaG92ZXI9e3sgc2hhZG93OiBcImxnXCIgfX0gIGJhY2tncm91bmRDb2xvcj17dXNlQ29sb3JNb2RlVmFsdWUoXCJncmF5LjEwMFwiLCBcIiMxZTI1MzNcIil9IHJvdW5kZWQ9e1wibWRcIn0+XHJcbiAgPFRvb2x0aXAgaGFzQXJyb3cgbGFiZWw9XCJEaXN0dXJiaW5nXCIgcGxhY2VtZW50PVwidG9wXCI+PFN0YWNrIGJhY2tncm91bmRDb2xvcj17XCJyZWQuNTAwXCJ9IHJvdW5kZWQ9e1wiZnVsbFwifSB3aWR0aD17XCI0XCJ9IGhlaWdodD17NH0gbWFyZ2luPXtcImF1dG9cIn0gbWFyZ2luUmlnaHQ9e1wiNVwifSBhbGlnbkl0ZW1zPXtcImNlbnRlclwifT48L1N0YWNrPjwvVG9vbHRpcD5cclxuPFRleHQgZm9udFNpemU9e1wic21cIn0gbWFyZ2luPXtcImF1dG9cIn0gdGV4dEFsaWduPXtcImNlbnRlclwifSBtYXJnaW5SaWdodD17XCI1XCJ9IHRleHRDb2xvcj17dXNlQ29sb3JNb2RlVmFsdWUoXCJncmF5LjQwMFwiLCBcImdyYXkuNjAwXCIpfT5MaXN0ZW5pbmcgdG88L1RleHQ+XHJcbjxTdGFjayBtYXJnaW5SaWdodD17XCI1XCJ9IG9iamVjdEZpdD17XCJjb3ZlclwifSBib3JkZXJSYWRpdXM9e1wiNTAlXCJ9PlxyXG4gICAgICAgICAgICAgIHtnZXRJbWFnZSgpLmxhcmdlSW1hZ2UgJiYgKFxyXG4gICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgIHNyYz17Z2V0SW1hZ2UoKS5sYXJnZUltYWdlIHx8IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPVwiODBweFwiXHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjgwcHhcIlxyXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJpY29uXCJcclxuICAgICAgICAgICAgICAgICAgZHJhZ2dhYmxlPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgIG9iamVjdEZpdD1cImNvdmVyXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1sZ1wiXHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgIDwvU3RhY2s+XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgPFRleHQgZm9udFNpemU9e1wic21cIn0gbWFyZ2luPXtcImF1dG9cIn0gdGV4dEFsaWduPXtcImNlbnRlclwifT4gICAgXHJcbiAgICAgICAgICAgPGgxPiB7Z2V0QWN0aXZpdHkoKT8ubmFtZX08L2gxPlxyXG4gICAgICAgICAgIDxoMT4ge2dldEFjdGl2aXR5KCk/LmRldGFpbHN9PC9oMT5cclxuICAgICAgICAgICA8aDE+IHtnZXRBY3Rpdml0eSgpPy5zdGF0ZX0gPC9oMT4gICAgXHJcbiAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgIFxyXG48L0JveD4gXHJcbiApO1xyXG4gZWxzZSBcclxuIHJldHVybiAoXHJcbiAgPEJveCBkaXNwbGF5PXtcImZsZXhcIn0gZmxleFdyYXA9e1wibm93cmFwXCJ9IGZsb2F0PXtcImxlZnRcIn0gcGFkZGluZz17XCI1XCJ9ICBtYXJnaW5Ub3A9e1wiNVwifSBfaG92ZXI9e3sgc2hhZG93OiBcImxnXCIgfX0gIGJhY2tncm91bmRDb2xvcj17dXNlQ29sb3JNb2RlVmFsdWUoXCJncmF5LjEwMFwiLCBcIiMxZTI1MzNcIil9IHJvdW5kZWQ9e1wibWRcIn0+XHJcbiAgIDxUb29sdGlwIGhhc0Fycm93IGxhYmVsPVwiT2ZmbGluZVwiIHBsYWNlbWVudD1cInRvcFwiPjxTdGFjayBiYWNrZ3JvdW5kQ29sb3I9e3VzZUNvbG9yTW9kZVZhbHVlKFwiZ3JheS40MDBcIiwgXCJncmF5LjYwMFwiKX0gcm91bmRlZD17XCJmdWxsXCJ9IHdpZHRoPXtcIjRcIn0gaGVpZ2h0PXs0fSBtYXJnaW49e1wiYXV0b1wifSBhbGlnbkl0ZW1zPXtcImNlbnRlclwifT48L1N0YWNrPjwvVG9vbHRpcD5cclxuICA8VGV4dCB0ZXh0Q29sb3I9e3VzZUNvbG9yTW9kZVZhbHVlKFwiYmxhY2tcIiwgXCJ3aGl0ZVwiKX0gZm9udFNpemU9e1wibWRcIn0gIHRleHRBbGlnbj17XCJjZW50ZXJcIn0gbWFyZ2luPXtcIjFcIn0+IE9mZmxpbmU8L1RleHQ+ICAgICAgIFxyXG48L0JveD5cclxuIClcclxuIFxyXG4gXHJcblxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RhdHVzOyJdLCJzb3VyY2VSb290IjoiIn0=