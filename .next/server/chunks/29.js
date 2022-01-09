exports.id = 29;
exports.ids = [29];
exports.modules = {

/***/ 29:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "uH": function() { return /* binding */ MotionBox; },
/* harmony export */   "HZ": function() { return /* binding */ MotionFlex; },
/* harmony export */   "Tf": function() { return /* binding */ MotionText; },
/* harmony export */   "CK": function() { return /* binding */ MotionList; },
/* harmony export */   "Jd": function() { return /* binding */ MotionImage; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3426);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(762);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_2__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const MotionBox = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion)((0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref) => {
  const chakraProps = Object.fromEntries( // do not pass framer props to DOM element
  Object.entries(props).filter(([key]) => !(0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.isValidMotionProp)(key)));
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, _objectSpread({
    ref: ref
  }, chakraProps));
}));
const MotionFlex = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion)((0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref) => {
  const chakraProps = Object.fromEntries( // do not pass framer props to DOM element
  Object.entries(props).filter(([key]) => !(0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.isValidMotionProp)(key)));
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, _objectSpread({
    ref: ref
  }, chakraProps));
}));
const MotionText = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion)((0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref) => {
  const chakraProps = Object.fromEntries( // do not pass framer props to DOM element
  Object.entries(props).filter(([key]) => !(0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.isValidMotionProp)(key)));
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, _objectSpread({
    ref: ref
  }, chakraProps));
}));
const MotionList = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion)((0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref) => {
  const chakraProps = Object.fromEntries( // do not pass framer props to DOM element
  Object.entries(props).filter(([key]) => !(0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.isValidMotionProp)(key)));
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.List, _objectSpread({
    ref: ref
  }, chakraProps));
}));
const MotionImage = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion)((0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref) => {
  const chakraProps = Object.fromEntries(Object.entries(props).filter(([key]) => !(0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.isValidMotionProp)(key)));
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, _objectSpread({
    ref: ref,
    fallbackSrc: '/assets/images/placeholder.png'
  }, chakraProps));
}));

/***/ })

};
;