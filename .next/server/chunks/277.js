exports.id = 277;
exports.ids = [277];
exports.modules = {

/***/ 6277:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ header; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(3426);
;// CONCATENATED MODULE: ./components/ui/underlined-text.tsx




const UnderlinedText = props => /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Box, {
  as: "span",
  display: "inline-block",
  position: "relative",
  children: [props.children, /*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
    as: "span",
    display: "block",
    position: "absolute",
    bg: 'gray.200',
    w: '100%',
    h: props.h || '1px',
    bottom: -2
  })]
});

/* harmony default export */ var underlined_text = (UnderlinedText);
;// CONCATENATED MODULE: ./components/layout/header.tsx



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

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Box, _objectSpread(_objectSpread({
    as: "h1",
    mt: 10,
    mb: 6,
    fontSize: "3xl",
    lineHeight: "shorter",
    fontWeight: "bold"
  }, props), {}, {
    textAlign: "left",
    children: [/*#__PURE__*/jsx_runtime_.jsx(underlined_text, {
      color: underlineColor,
      children: children
    }), emoji ? ' ' + emoji : '']
  }));
};

/* harmony default export */ var header = (Header);

/***/ })

};
;