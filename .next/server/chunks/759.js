exports.id = 759;
exports.ids = [759];
exports.modules = {

/***/ 759:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o3": function() { return /* binding */ useLinkColor; },
/* harmony export */   "hK": function() { return /* binding */ getTagBackgroundDark; },
/* harmony export */   "O9": function() { return /* binding */ colors; },
/* harmony export */   "uF": function() { return /* binding */ accentKeys; }
/* harmony export */ });
/* unused harmony exports linkColors, useVisitedLinkColor */
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3426);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8547);
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
  return useColorModeValue(linkColors.visitedLight, linkColors.visitedDark);
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

/***/ })

};
;