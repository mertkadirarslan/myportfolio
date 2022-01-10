(function() {
var exports = {};
exports.id = "pages/_document";
exports.ids = ["pages/_document"];
exports.modules = {

/***/ "./lib/gtag.js":
/*!*********************!*\
  !*** ./lib/gtag.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GA_TRACKING_ID": function() { return /* binding */ GA_TRACKING_ID; },
/* harmony export */   "pageview": function() { return /* binding */ pageview; },
/* harmony export */   "event": function() { return /* binding */ event; }
/* harmony export */ });
const GA_TRACKING_ID = process.env.GA_TRACKING_ID; // https://developers.google.com/analytics/devguides/collection/gtagjs/pages

const pageview = url => {
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url
  });
}; // https://developers.google.com/analytics/devguides/collection/gtagjs/events

const event = ({
  action,
  category,
  label,
  value
}) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value
  });
};

/***/ }),

/***/ "./node_modules/next/dist/client/head-manager.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/head-manager.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.default = initHeadManager;
exports.DOMAttributeNames = void 0;
const DOMAttributeNames = {
  acceptCharset: 'accept-charset',
  className: 'class',
  htmlFor: 'for',
  httpEquiv: 'http-equiv',
  noModule: 'noModule'
};
exports.DOMAttributeNames = DOMAttributeNames;

function reactElementToDOM({
  type,
  props
}) {
  const el = document.createElement(type);

  for (const p in props) {
    if (!props.hasOwnProperty(p)) continue;
    if (p === 'children' || p === 'dangerouslySetInnerHTML') continue; // we don't render undefined props to the DOM

    if (props[p] === undefined) continue;
    const attr = DOMAttributeNames[p] || p.toLowerCase();

    if (type === 'script' && (attr === 'async' || attr === 'defer' || attr === 'noModule')) {
      ;
      el[attr] = !!props[p];
    } else {
      el.setAttribute(attr, props[p]);
    }
  }

  const {
    children,
    dangerouslySetInnerHTML
  } = props;

  if (dangerouslySetInnerHTML) {
    el.innerHTML = dangerouslySetInnerHTML.__html || '';
  } else if (children) {
    el.textContent = typeof children === 'string' ? children : Array.isArray(children) ? children.join('') : '';
  }

  return el;
}

function updateElements(type, components) {
  const headEl = document.getElementsByTagName('head')[0];
  const headCountEl = headEl.querySelector('meta[name=next-head-count]');

  if (true) {
    if (!headCountEl) {
      console.error('Warning: next-head-count is missing. https://nextjs.org/docs/messages/next-head-count-missing');
      return;
    }
  }

  const headCount = Number(headCountEl.content);
  const oldTags = [];

  for (let i = 0, j = headCountEl.previousElementSibling; i < headCount; i++, j = j.previousElementSibling) {
    if (j.tagName.toLowerCase() === type) {
      oldTags.push(j);
    }
  }

  const newTags = components.map(reactElementToDOM).filter(newTag => {
    for (let k = 0, len = oldTags.length; k < len; k++) {
      const oldTag = oldTags[k];

      if (oldTag.isEqualNode(newTag)) {
        oldTags.splice(k, 1);
        return false;
      }
    }

    return true;
  });
  oldTags.forEach(t => t.parentNode.removeChild(t));
  newTags.forEach(t => headEl.insertBefore(t, headCountEl));
  headCountEl.content = (headCount - oldTags.length + newTags.length).toString();
}

function initHeadManager() {
  let updatePromise = null;
  return {
    mountedInstances: new Set(),
    updateHead: head => {
      const promise = updatePromise = Promise.resolve().then(() => {
        if (promise !== updatePromise) return;
        updatePromise = null;
        const tags = {};
        head.forEach(h => {
          if ( // If the font tag is loaded only on client navigation
          // it won't be inlined. In this case revert to the original behavior
          h.type === 'link' && h.props['data-optimized-fonts'] && !document.querySelector(`style[data-href="${h.props['data-href']}"]`)) {
            h.props.href = h.props['data-href'];
            h.props['data-href'] = undefined;
          }

          const components = tags[h.type] || [];
          components.push(h);
          tags[h.type] = components;
        });
        const titleComponent = tags.title ? tags.title[0] : null;
        let title = '';

        if (titleComponent) {
          const {
            children
          } = titleComponent.props;
          title = typeof children === 'string' ? children : Array.isArray(children) ? children.join('') : '';
        }

        if (title !== document.title) document.title = title;
        ['meta', 'base', 'link', 'style', 'script'].forEach(type => {
          updateElements(type, tags[type] || []);
        });
      });
    }
  };
}

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

/***/ "./node_modules/next/dist/client/script.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/script.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.initScriptLoader = initScriptLoader;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/next/node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/next/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _react = __webpack_require__(/*! react */ "react");

var _headManagerContext = __webpack_require__(/*! ../next-server/lib/head-manager-context */ "../next-server/lib/head-manager-context");

var _headManager = __webpack_require__(/*! ./head-manager */ "./node_modules/next/dist/client/head-manager.js");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const ScriptCache = new Map();
const LoadCache = new Set();
const ignoreProps = ['onLoad', 'dangerouslySetInnerHTML', 'children', 'onError', 'strategy'];

const loadScript = props => {
  const {
    src,
    id,
    onLoad = () => {},
    dangerouslySetInnerHTML,
    children = '',
    onError
  } = props;
  const cacheKey = id || src;

  if (ScriptCache.has(src)) {
    if (!LoadCache.has(cacheKey)) {
      LoadCache.add(cacheKey); // Execute onLoad since the script loading has begun

      ScriptCache.get(src).then(onLoad, onError);
    }

    return;
  }

  const el = document.createElement('script');
  const loadPromise = new Promise((resolve, reject) => {
    el.addEventListener('load', function () {
      resolve();

      if (onLoad) {
        onLoad.call(this);
      }
    });
    el.addEventListener('error', function () {
      reject();

      if (onError) {
        onError();
      }
    });
  });

  if (src) {
    ScriptCache.set(src, loadPromise);
    LoadCache.add(cacheKey);
  }

  if (dangerouslySetInnerHTML) {
    el.innerHTML = dangerouslySetInnerHTML.__html || '';
  } else if (children) {
    el.textContent = typeof children === 'string' ? children : Array.isArray(children) ? children.join('') : '';
  } else if (src) {
    el.src = src;
  }

  for (const [k, value] of Object.entries(props)) {
    if (value === undefined || ignoreProps.includes(k)) {
      continue;
    }

    const attr = _headManager.DOMAttributeNames[k] || k.toLowerCase();
    el.setAttribute(attr, value);
  }

  document.body.appendChild(el);
};

function handleClientScriptLoad(props) {
  const {
    strategy = 'afterInteractive'
  } = props;

  if (strategy === 'afterInteractive') {
    loadScript(props);
  } else if (strategy === 'lazyOnload') {
    window.addEventListener('load', () => {
      (0, _requestIdleCallback.requestIdleCallback)(() => loadScript(props));
    });
  }
}

function loadLazyScript(props) {
  if (document.readyState === 'complete') {
    (0, _requestIdleCallback.requestIdleCallback)(() => loadScript(props));
  } else {
    window.addEventListener('load', () => {
      (0, _requestIdleCallback.requestIdleCallback)(() => loadScript(props));
    });
  }
}

function initScriptLoader(scriptLoaderItems) {
  scriptLoaderItems.forEach(handleClientScriptLoad);
}

function Script(props) {
  const {
    src = '',
    onLoad = () => {},
    strategy = 'afterInteractive',
    onError
  } = props,
        restProps = (0, _objectWithoutPropertiesLoose2.default)(props, ["src", "onLoad", "dangerouslySetInnerHTML", "strategy", "onError"]); // Context is available only during SSR

  const {
    updateScripts,
    scripts
  } = (0, _react.useContext)(_headManagerContext.HeadManagerContext);
  (0, _react.useEffect)(() => {
    if (strategy === 'afterInteractive') {
      loadScript(props);
    } else if (strategy === 'lazyOnload') {
      loadLazyScript(props);
    }
  }, [props, strategy]);

  if (strategy === 'beforeInteractive') {
    if (updateScripts) {
      scripts.beforeInteractive = (scripts.beforeInteractive || []).concat([(0, _extends2.default)({
        src,
        onLoad,
        onError
      }, restProps)]);
      updateScripts(scripts);
    }
  }

  return null;
}

var _default = Script;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/pages/_document.js":
/*!***************************************************!*\
  !*** ./node_modules/next/dist/pages/_document.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

exports.__esModule = true;
exports.Html = Html;
exports.Main = Main;
exports.NextScript = exports.Head = exports.default = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _server = _interopRequireDefault(__webpack_require__(/*! styled-jsx/server */ "styled-jsx/server"));

var _constants = __webpack_require__(/*! ../next-server/lib/constants */ "../next-server/lib/constants");

var _documentContext = __webpack_require__(/*! ../next-server/lib/document-context */ "../next-server/lib/document-context");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

exports.DocumentContext = _utils.DocumentContext;
exports.DocumentInitialProps = _utils.DocumentInitialProps;
exports.DocumentProps = _utils.DocumentProps;

var _getPageFiles = __webpack_require__(/*! ../next-server/server/get-page-files */ "../next-server/server/get-page-files");

var _utils2 = __webpack_require__(/*! ../next-server/server/utils */ "../next-server/server/utils");

var _htmlescape = __webpack_require__(/*! ../server/htmlescape */ "./node_modules/next/dist/server/htmlescape.js");

var _script = _interopRequireDefault(__webpack_require__(/*! ../client/script */ "./node_modules/next/dist/client/script.js"));

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
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function getDocumentFiles(buildManifest, pathname, inAmpMode) {
  const sharedFiles = (0, _getPageFiles.getPageFiles)(buildManifest, '/_app');
  const pageFiles = inAmpMode ? [] : (0, _getPageFiles.getPageFiles)(buildManifest, pathname);
  return {
    sharedFiles,
    pageFiles,
    allFiles: [...new Set([...sharedFiles, ...pageFiles])]
  };
}

function getPolyfillScripts(context, props) {
  // polyfills.js has to be rendered as nomodule without async
  // It also has to be the first script to load
  const {
    assetPrefix,
    buildManifest,
    devOnlyCacheBusterQueryString,
    disableOptimizedLoading
  } = context;
  return buildManifest.polyfillFiles.filter(polyfill => polyfill.endsWith('.js') && !polyfill.endsWith('.module.js')).map(polyfill => /*#__PURE__*/_react.default.createElement("script", {
    key: polyfill,
    defer: !disableOptimizedLoading,
    nonce: props.nonce,
    crossOrigin: props.crossOrigin || undefined,
    noModule: true,
    src: `${assetPrefix}/_next/${polyfill}${devOnlyCacheBusterQueryString}`
  }));
}

function getPreNextScripts(context, props) {
  const {
    scriptLoader,
    disableOptimizedLoading
  } = context;
  return (scriptLoader.beforeInteractive || []).map(file => {
    const {
      strategy
    } = file,
          scriptProps = _objectWithoutProperties(file, ["strategy"]);

    return /*#__PURE__*/_react.default.createElement("script", Object.assign({}, scriptProps, {
      defer: !disableOptimizedLoading,
      nonce: props.nonce,
      crossOrigin: props.crossOrigin || undefined
    }));
  });
}

function getDynamicChunks(context, props, files) {
  const {
    dynamicImports,
    assetPrefix,
    isDevelopment,
    devOnlyCacheBusterQueryString,
    disableOptimizedLoading
  } = context;
  return dynamicImports.map(file => {
    if (!file.endsWith('.js') || files.allFiles.includes(file)) return null;
    return /*#__PURE__*/_react.default.createElement("script", {
      async: !isDevelopment && disableOptimizedLoading,
      defer: !disableOptimizedLoading,
      key: file,
      src: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
      nonce: props.nonce,
      crossOrigin: props.crossOrigin || undefined
    });
  });
}

function getScripts(context, props, files) {
  var _buildManifest$lowPri;

  const {
    assetPrefix,
    buildManifest,
    isDevelopment,
    devOnlyCacheBusterQueryString,
    disableOptimizedLoading
  } = context;
  const normalScripts = files.allFiles.filter(file => file.endsWith('.js'));
  const lowPriorityScripts = (_buildManifest$lowPri = buildManifest.lowPriorityFiles) == null ? void 0 : _buildManifest$lowPri.filter(file => file.endsWith('.js'));
  return [...normalScripts, ...lowPriorityScripts].map(file => {
    return /*#__PURE__*/_react.default.createElement("script", {
      key: file,
      src: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
      nonce: props.nonce,
      async: !isDevelopment && disableOptimizedLoading,
      defer: !disableOptimizedLoading,
      crossOrigin: props.crossOrigin || undefined
    });
  });
}
/**
* `Document` component handles the initial `document` markup and renders only on the server side.
* Commonly used for implementing server side rendering for `css-in-js` libraries.
*/


class Document extends _react.Component {
  /**
  * `getInitialProps` hook returns the context object with the addition of `renderPage`.
  * `renderPage` callback executes `React` rendering logic synchronously to support server-rendering wrappers
  */
  static async getInitialProps(ctx) {
    const enhanceApp = App => {
      return props => /*#__PURE__*/_react.default.createElement(App, props);
    };

    const {
      html,
      head
    } = await ctx.renderPage({
      enhanceApp
    });
    const styles = [...(0, _server.default)()];
    return {
      html,
      head,
      styles
    };
  }

  static renderDocument(DocumentComponent, props) {
    return /*#__PURE__*/_react.default.createElement(_documentContext.DocumentContext.Provider, {
      value: props
    }, /*#__PURE__*/_react.default.createElement(DocumentComponent, props));
  }

  render() {
    return /*#__PURE__*/_react.default.createElement(Html, null, /*#__PURE__*/_react.default.createElement(Head, null), /*#__PURE__*/_react.default.createElement("body", null, /*#__PURE__*/_react.default.createElement(Main, null), /*#__PURE__*/_react.default.createElement(NextScript, null)));
  }

}

exports.default = Document;

function Html(props) {
  const {
    inAmpMode,
    docComponentsRendered,
    locale
  } = (0, _react.useContext)(_documentContext.DocumentContext);
  docComponentsRendered.Html = true;
  return /*#__PURE__*/_react.default.createElement("html", Object.assign({}, props, {
    lang: props.lang || locale || undefined,
    amp: inAmpMode ? '' : undefined,
    "data-ampdevmode": inAmpMode && true ? '' : undefined
  }));
}

class Head extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  getCssLinks(files) {
    const {
      assetPrefix,
      devOnlyCacheBusterQueryString,
      dynamicImports
    } = this.context;
    const cssFiles = files.allFiles.filter(f => f.endsWith('.css'));
    const sharedFiles = new Set(files.sharedFiles); // Unmanaged files are CSS files that will be handled directly by the
    // webpack runtime (`mini-css-extract-plugin`).

    let unmangedFiles = new Set([]);
    let dynamicCssFiles = Array.from(new Set(dynamicImports.filter(file => file.endsWith('.css'))));

    if (dynamicCssFiles.length) {
      const existing = new Set(cssFiles);
      dynamicCssFiles = dynamicCssFiles.filter(f => !(existing.has(f) || sharedFiles.has(f)));
      unmangedFiles = new Set(dynamicCssFiles);
      cssFiles.push(...dynamicCssFiles);
    }

    let cssLinkElements = [];
    cssFiles.forEach(file => {
      const isSharedFile = sharedFiles.has(file);

      if (true) {
        cssLinkElements.push( /*#__PURE__*/_react.default.createElement("link", {
          key: `${file}-preload`,
          nonce: this.props.nonce,
          rel: "preload",
          href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
          as: "style",
          crossOrigin: this.props.crossOrigin || undefined
        }));
      }

      const isUnmanagedFile = unmangedFiles.has(file);
      cssLinkElements.push( /*#__PURE__*/_react.default.createElement("link", {
        key: file,
        nonce: this.props.nonce,
        rel: "stylesheet",
        href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
        crossOrigin: this.props.crossOrigin || undefined,
        "data-n-g": isUnmanagedFile ? undefined : isSharedFile ? '' : undefined,
        "data-n-p": isUnmanagedFile ? undefined : isSharedFile ? undefined : ''
      }));
    });

    if (false) {}

    return cssLinkElements.length === 0 ? null : cssLinkElements;
  }

  getPreloadDynamicChunks() {
    const {
      dynamicImports,
      assetPrefix,
      devOnlyCacheBusterQueryString
    } = this.context;
    return dynamicImports.map(file => {
      if (!file.endsWith('.js')) {
        return null;
      }

      return /*#__PURE__*/_react.default.createElement("link", {
        rel: "preload",
        key: file,
        href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
        as: "script",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined
      });
    }) // Filter out nulled scripts
    .filter(Boolean);
  }

  getPreloadMainLinks(files) {
    const {
      assetPrefix,
      devOnlyCacheBusterQueryString,
      scriptLoader
    } = this.context;
    const preloadFiles = files.allFiles.filter(file => {
      return file.endsWith('.js');
    });
    return [...(scriptLoader.beforeInteractive || []).map(file => /*#__PURE__*/_react.default.createElement("link", {
      key: file.src,
      nonce: this.props.nonce,
      rel: "preload",
      href: file.src,
      as: "script",
      crossOrigin: this.props.crossOrigin || undefined
    })), ...preloadFiles.map(file => /*#__PURE__*/_react.default.createElement("link", {
      key: file,
      nonce: this.props.nonce,
      rel: "preload",
      href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
      as: "script",
      crossOrigin: this.props.crossOrigin || undefined
    }))];
  }

  getDynamicChunks(files) {
    return getDynamicChunks(this.context, this.props, files);
  }

  getPreNextScripts() {
    return getPreNextScripts(this.context, this.props);
  }

  getScripts(files) {
    return getScripts(this.context, this.props, files);
  }

  getPolyfillScripts() {
    return getPolyfillScripts(this.context, this.props);
  }

  handleDocumentScriptLoaderItems(children) {
    const {
      scriptLoader
    } = this.context;
    const scriptLoaderItems = [];
    const filteredChildren = [];

    _react.default.Children.forEach(children, child => {
      if (child.type === _script.default) {
        if (child.props.strategy === 'beforeInteractive') {
          scriptLoader.beforeInteractive = (scriptLoader.beforeInteractive || []).concat([_objectSpread({}, child.props)]);
          return;
        } else if (['lazyOnload', 'afterInteractive'].includes(child.props.strategy)) {
          scriptLoaderItems.push(child.props);
          return;
        }
      }

      filteredChildren.push(child);
    });

    this.context.__NEXT_DATA__.scriptLoader = scriptLoaderItems;
    return filteredChildren;
  }

  makeStylesheetInert(node) {
    return _react.default.Children.map(node, c => {
      if (c.type === 'link' && c.props['href'] && _constants.OPTIMIZED_FONT_PROVIDERS.some(({
        url
      }) => c.props['href'].startsWith(url))) {
        const newProps = _objectSpread({}, c.props || {});

        newProps['data-href'] = newProps['href'];
        newProps['href'] = undefined;
        return /*#__PURE__*/_react.default.cloneElement(c, newProps);
      } else if (c.props && c.props['children']) {
        c.props['children'] = this.makeStylesheetInert(c.props['children']);
      }

      return c;
    });
  }

  render() {
    var _this$props$nonce, _this$props$nonce2;

    const {
      styles,
      ampPath,
      inAmpMode,
      hybridAmp,
      canonicalBase,
      __NEXT_DATA__,
      dangerousAsPath,
      headTags,
      unstable_runtimeJS,
      unstable_JsPreload,
      disableOptimizedLoading
    } = this.context;
    const disableRuntimeJS = unstable_runtimeJS === false;
    const disableJsPreload = unstable_JsPreload === false || !disableOptimizedLoading;
    this.context.docComponentsRendered.Head = true;
    let {
      head
    } = this.context;
    let cssPreloads = [];
    let otherHeadElements = [];

    if (head) {
      head.forEach(c => {
        if (c && c.type === 'link' && c.props['rel'] === 'preload' && c.props['as'] === 'style') {
          cssPreloads.push(c);
        } else {
          c && otherHeadElements.push(c);
        }
      });
      head = cssPreloads.concat(otherHeadElements);
    }

    let children = _react.default.Children.toArray(this.props.children).filter(Boolean); // show a warning if Head contains <title> (only in development)


    if (true) {
      children = _react.default.Children.map(children, child => {
        var _child$props;

        const isReactHelmet = child == null ? void 0 : (_child$props = child.props) == null ? void 0 : _child$props['data-react-helmet'];

        if (!isReactHelmet) {
          var _child$props2;

          if ((child == null ? void 0 : child.type) === 'title') {
            console.warn("Warning: <title> should not be used in _document.js's <Head>. https://nextjs.org/docs/messages/no-document-title");
          } else if ((child == null ? void 0 : child.type) === 'meta' && (child == null ? void 0 : (_child$props2 = child.props) == null ? void 0 : _child$props2.name) === 'viewport') {
            console.warn("Warning: viewport meta tags should not be used in _document.js's <Head>. https://nextjs.org/docs/messages/no-document-viewport-meta");
          }
        }

        return child;
      });
      if (this.props.crossOrigin) console.warn('Warning: `Head` attribute `crossOrigin` is deprecated. https://nextjs.org/docs/messages/doc-crossorigin-deprecated');
    }

    if (false) {}

    children = this.handleDocumentScriptLoaderItems(children);
    let hasAmphtmlRel = false;
    let hasCanonicalRel = false; // show warning and remove conflicting amp head tags

    head = _react.default.Children.map(head || [], child => {
      if (!child) return child;
      const {
        type,
        props
      } = child;

      if (inAmpMode) {
        let badProp = '';

        if (type === 'meta' && props.name === 'viewport') {
          badProp = 'name="viewport"';
        } else if (type === 'link' && props.rel === 'canonical') {
          hasCanonicalRel = true;
        } else if (type === 'script') {
          // only block if
          // 1. it has a src and isn't pointing to ampproject's CDN
          // 2. it is using dangerouslySetInnerHTML without a type or
          // a type of text/javascript
          if (props.src && props.src.indexOf('ampproject') < -1 || props.dangerouslySetInnerHTML && (!props.type || props.type === 'text/javascript')) {
            badProp = '<script';
            Object.keys(props).forEach(prop => {
              badProp += ` ${prop}="${props[prop]}"`;
            });
            badProp += '/>';
          }
        }

        if (badProp) {
          console.warn(`Found conflicting amp tag "${child.type}" with conflicting prop ${badProp} in ${__NEXT_DATA__.page}. https://nextjs.org/docs/messages/conflicting-amp-tag`);
          return null;
        }
      } else {
        // non-amp mode
        if (type === 'link' && props.rel === 'amphtml') {
          hasAmphtmlRel = true;
        }
      }

      return child;
    }); // try to parse styles from fragment for backwards compat

    const curStyles = Array.isArray(styles) ? styles : [];

    if (inAmpMode && styles && // @ts-ignore Property 'props' does not exist on type ReactElement
    styles.props && // @ts-ignore Property 'props' does not exist on type ReactElement
    Array.isArray(styles.props.children)) {
      const hasStyles = el => {
        var _el$props, _el$props$dangerously;

        return el == null ? void 0 : (_el$props = el.props) == null ? void 0 : (_el$props$dangerously = _el$props.dangerouslySetInnerHTML) == null ? void 0 : _el$props$dangerously.__html;
      }; // @ts-ignore Property 'props' does not exist on type ReactElement


      styles.props.children.forEach(child => {
        if (Array.isArray(child)) {
          child.forEach(el => hasStyles(el) && curStyles.push(el));
        } else if (hasStyles(child)) {
          curStyles.push(child);
        }
      });
    }

    const files = getDocumentFiles(this.context.buildManifest, this.context.__NEXT_DATA__.page, inAmpMode);
    return /*#__PURE__*/_react.default.createElement("head", this.props, this.context.isDevelopment && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("style", {
      "data-next-hide-fouc": true,
      "data-ampdevmode": inAmpMode ? 'true' : undefined,
      dangerouslySetInnerHTML: {
        __html: `body{display:none}`
      }
    }), /*#__PURE__*/_react.default.createElement("noscript", {
      "data-next-hide-fouc": true,
      "data-ampdevmode": inAmpMode ? 'true' : undefined
    }, /*#__PURE__*/_react.default.createElement("style", {
      dangerouslySetInnerHTML: {
        __html: `body{display:block}`
      }
    }))), children,  false && /*#__PURE__*/0, head, /*#__PURE__*/_react.default.createElement("meta", {
      name: "next-head-count",
      content: _react.default.Children.count(head || []).toString()
    }), inAmpMode && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("meta", {
      name: "viewport",
      content: "width=device-width,minimum-scale=1,initial-scale=1"
    }), !hasCanonicalRel && /*#__PURE__*/_react.default.createElement("link", {
      rel: "canonical",
      href: canonicalBase + (0, _utils2.cleanAmpPath)(dangerousAsPath)
    }), /*#__PURE__*/_react.default.createElement("link", {
      rel: "preload",
      as: "script",
      href: "https://cdn.ampproject.org/v0.js"
    }), styles && /*#__PURE__*/_react.default.createElement("style", {
      "amp-custom": "",
      dangerouslySetInnerHTML: {
        __html: curStyles.map(style => style.props.dangerouslySetInnerHTML.__html).join('').replace(/\/\*# sourceMappingURL=.*\*\//g, '').replace(/\/\*@ sourceURL=.*?\*\//g, '')
      }
    }), /*#__PURE__*/_react.default.createElement("style", {
      "amp-boilerplate": "",
      dangerouslySetInnerHTML: {
        __html: `body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}`
      }
    }), /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("style", {
      "amp-boilerplate": "",
      dangerouslySetInnerHTML: {
        __html: `body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}`
      }
    })), /*#__PURE__*/_react.default.createElement("script", {
      async: true,
      src: "https://cdn.ampproject.org/v0.js"
    })), !inAmpMode && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !hasAmphtmlRel && hybridAmp && /*#__PURE__*/_react.default.createElement("link", {
      rel: "amphtml",
      href: canonicalBase + getAmpPath(ampPath, dangerousAsPath)
    }),  true && this.getCssLinks(files),  true && /*#__PURE__*/_react.default.createElement("noscript", {
      "data-n-css": (_this$props$nonce = this.props.nonce) != null ? _this$props$nonce : ''
    }),  false && /*#__PURE__*/0, !disableRuntimeJS && !disableJsPreload && this.getPreloadDynamicChunks(), !disableRuntimeJS && !disableJsPreload && this.getPreloadMainLinks(files), !disableOptimizedLoading && !disableRuntimeJS && this.getPolyfillScripts(), !disableOptimizedLoading && !disableRuntimeJS && this.getPreNextScripts(), !disableOptimizedLoading && !disableRuntimeJS && this.getDynamicChunks(files), !disableOptimizedLoading && !disableRuntimeJS && this.getScripts(files),  false && 0,  false && /*#__PURE__*/0, this.context.isDevelopment &&
    /*#__PURE__*/
    // this element is used to mount development styles so the
    // ordering matches production
    // (by default, style-loader injects at the bottom of <head />)
    _react.default.createElement("noscript", {
      id: "__next_css__DO_NOT_USE__"
    }), styles || null), /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {}, ...(headTags || [])));
  }

}

exports.Head = Head;
Head.contextType = _documentContext.DocumentContext;
Head.propTypes = {
  nonce: _propTypes.default.string,
  crossOrigin: _propTypes.default.string
};

function Main() {
  const {
    inAmpMode,
    html,
    docComponentsRendered
  } = (0, _react.useContext)(_documentContext.DocumentContext);
  docComponentsRendered.Main = true;
  if (inAmpMode) return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, _constants.AMP_RENDER_TARGET);
  return /*#__PURE__*/_react.default.createElement("div", {
    id: "__next",
    dangerouslySetInnerHTML: {
      __html: html
    }
  });
}

class NextScript extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  getDynamicChunks(files) {
    return getDynamicChunks(this.context, this.props, files);
  }

  getPreNextScripts() {
    return getPreNextScripts(this.context, this.props);
  }

  getScripts(files) {
    return getScripts(this.context, this.props, files);
  }

  getPolyfillScripts() {
    return getPolyfillScripts(this.context, this.props);
  }

  static getInlineScriptSource(documentProps) {
    const {
      __NEXT_DATA__
    } = documentProps;

    try {
      const data = JSON.stringify(__NEXT_DATA__);
      return (0, _htmlescape.htmlEscapeJsonString)(data);
    } catch (err) {
      if (err.message.indexOf('circular structure')) {
        throw new Error(`Circular structure in "getInitialProps" result of page "${__NEXT_DATA__.page}". https://nextjs.org/docs/messages/circular-structure`);
      }

      throw err;
    }
  }

  render() {
    const {
      assetPrefix,
      inAmpMode,
      buildManifest,
      unstable_runtimeJS,
      docComponentsRendered,
      devOnlyCacheBusterQueryString,
      disableOptimizedLoading
    } = this.context;
    const disableRuntimeJS = unstable_runtimeJS === false;
    docComponentsRendered.NextScript = true;

    if (inAmpMode) {
      if (false) {}

      const ampDevFiles = [...buildManifest.devFiles, ...buildManifest.polyfillFiles, ...buildManifest.ampDevFiles];
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, disableRuntimeJS ? null : /*#__PURE__*/_react.default.createElement("script", {
        id: "__NEXT_DATA__",
        type: "application/json",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined,
        dangerouslySetInnerHTML: {
          __html: NextScript.getInlineScriptSource(this.context)
        },
        "data-ampdevmode": true
      }), ampDevFiles.map(file => /*#__PURE__*/_react.default.createElement("script", {
        key: file,
        src: `${assetPrefix}/_next/${file}${devOnlyCacheBusterQueryString}`,
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined,
        "data-ampdevmode": true
      })));
    }

    if (true) {
      if (this.props.crossOrigin) console.warn('Warning: `NextScript` attribute `crossOrigin` is deprecated. https://nextjs.org/docs/messages/doc-crossorigin-deprecated');
    }

    const files = getDocumentFiles(this.context.buildManifest, this.context.__NEXT_DATA__.page, inAmpMode);
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !disableRuntimeJS && buildManifest.devFiles ? buildManifest.devFiles.map(file => /*#__PURE__*/_react.default.createElement("script", {
      key: file,
      src: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    })) : null, disableRuntimeJS ? null : /*#__PURE__*/_react.default.createElement("script", {
      id: "__NEXT_DATA__",
      type: "application/json",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined,
      dangerouslySetInnerHTML: {
        __html: NextScript.getInlineScriptSource(this.context)
      }
    }), disableOptimizedLoading && !disableRuntimeJS && this.getPolyfillScripts(), disableOptimizedLoading && !disableRuntimeJS && this.getPreNextScripts(), disableOptimizedLoading && !disableRuntimeJS && this.getDynamicChunks(files), disableOptimizedLoading && !disableRuntimeJS && this.getScripts(files));
  }

}

exports.NextScript = NextScript;
NextScript.contextType = _documentContext.DocumentContext;
NextScript.propTypes = {
  nonce: _propTypes.default.string,
  crossOrigin: _propTypes.default.string
};
NextScript.safariNomoduleFix = '!function(){var e=document,t=e.createElement("script");if(!("noModule"in t)&&"onbeforeload"in t){var n=!1;e.addEventListener("beforeload",function(e){if(e.target===t)n=!0;else if(!e.target.hasAttribute("nomodule")||!n)return;e.preventDefault()},!0),t.type="module",t.src=".",e.head.appendChild(t),t.remove()}}();';

function getAmpPath(ampPath, asPath) {
  return ampPath || `${asPath}${asPath.includes('?') ? '&' : '?'}amp=1`;
}

/***/ }),

/***/ "./pages/_document.tsx":
/*!*****************************!*\
  !*** ./pages/_document.tsx ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/document */ "./node_modules/next/document.js");
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lib_gtag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lib/gtag */ "./lib/gtag.js");

var _jsxFileName = "C:\\Users\\mert\\Desktop\\myportfolio\\pages\\_document.tsx";



class MyDocument extends (next_document__WEBPACK_IMPORTED_MODULE_1___default()) {
  render() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {
      lang: "en",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
          rel: "icon",
          href: "/favicon.ico"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
          rel: "icon",
          type: "image/png",
          sizes: "192x192",
          href: "/favicon-192x192.png"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap",
          rel: "stylesheet"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("script", {
          async: true,
          src: `https://www.googletagmanager.com/gtag/js?id=${lib_gtag__WEBPACK_IMPORTED_MODULE_2__.GA_TRACKING_ID}`
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("script", {
          dangerouslySetInnerHTML: {
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${lib_gtag__WEBPACK_IMPORTED_MODULE_2__.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("body", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (MyDocument);

/***/ }),

/***/ "./node_modules/next/dist/server/htmlescape.js":
/*!*****************************************************!*\
  !*** ./node_modules/next/dist/server/htmlescape.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
exports.__esModule=true;exports.htmlEscapeJsonString=htmlEscapeJsonString;// This utility is based on https://github.com/zertosh/htmlescape
// License: https://github.com/zertosh/htmlescape/blob/0527ca7156a524d256101bb310a9f970f63078ad/LICENSE
const ESCAPE_LOOKUP={'&':'\\u0026','>':'\\u003e','<':'\\u003c','\u2028':'\\u2028','\u2029':'\\u2029'};const ESCAPE_REGEX=/[&><\u2028\u2029]/g;function htmlEscapeJsonString(str){return str.replace(ESCAPE_REGEX,match=>ESCAPE_LOOKUP[match]);}
//# sourceMappingURL=htmlescape.js.map

/***/ }),

/***/ "./node_modules/next/document.js":
/*!***************************************!*\
  !*** ./node_modules/next/document.js ***!
  \***************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_document */ "./node_modules/next/dist/pages/_document.js")


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

/***/ "../next-server/lib/constants":
/*!*********************************************************!*\
  !*** external "next/dist/next-server/lib/constants.js" ***!
  \*********************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/constants.js");;

/***/ }),

/***/ "../next-server/lib/document-context":
/*!****************************************************************!*\
  !*** external "next/dist/next-server/lib/document-context.js" ***!
  \****************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/document-context.js");;

/***/ }),

/***/ "../next-server/lib/head-manager-context":
/*!********************************************************************!*\
  !*** external "next/dist/next-server/lib/head-manager-context.js" ***!
  \********************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head-manager-context.js");;

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/utils.js");;

/***/ }),

/***/ "../next-server/server/get-page-files":
/*!*****************************************************************!*\
  !*** external "next/dist/next-server/server/get-page-files.js" ***!
  \*****************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/get-page-files.js");;

/***/ }),

/***/ "../next-server/server/utils":
/*!********************************************************!*\
  !*** external "next/dist/next-server/server/utils.js" ***!
  \********************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/utils.js");;

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("prop-types");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "styled-jsx/server":
/*!************************************!*\
  !*** external "styled-jsx/server" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-jsx/server");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/_document.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9saWIvZ3RhZy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9oZWFkLW1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcmVxdWVzdC1pZGxlLWNhbGxiYWNrLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3NjcmlwdC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3BhZ2VzL19kb2N1bWVudC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9wYWdlcy9fZG9jdW1lbnQudHN4Iiwid2VicGFjazovL3BvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3Qvc2VydmVyL2h0bWxlc2NhcGUuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL25leHQvZG9jdW1lbnQuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2NvbnN0YW50cy5qc1wiIiwid2VicGFjazovL3BvcnRmb2xpby9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvZG9jdW1lbnQtY29udGV4dC5qc1wiIiwid2VicGFjazovL3BvcnRmb2xpby9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvaGVhZC1tYW5hZ2VyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9nZXQtcGFnZS1maWxlcy5qc1wiIiwid2VicGFjazovL3BvcnRmb2xpby9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3NlcnZlclwiIl0sIm5hbWVzIjpbIkdBX1RSQUNLSU5HX0lEIiwicHJvY2VzcyIsImVudiIsInBhZ2V2aWV3IiwidXJsIiwid2luZG93IiwiZ3RhZyIsInBhZ2VfcGF0aCIsImV2ZW50IiwiYWN0aW9uIiwiY2F0ZWdvcnkiLCJsYWJlbCIsInZhbHVlIiwiZXZlbnRfY2F0ZWdvcnkiLCJldmVudF9sYWJlbCIsImV4cG9ydHMiLCJpbml0SGVhZE1hbmFnZXIiLCJET01BdHRyaWJ1dGVOYW1lcyIsImFjY2VwdENoYXJzZXQiLCJjbGFzc05hbWUiLCJodG1sRm9yIiwiaHR0cEVxdWl2Iiwibm9Nb2R1bGUiLCJyZWFjdEVsZW1lbnRUb0RPTSIsInR5cGUiLCJwcm9wcyIsImVsIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwicCIsImhhc093blByb3BlcnR5IiwidW5kZWZpbmVkIiwiYXR0ciIsInRvTG93ZXJDYXNlIiwic2V0QXR0cmlidXRlIiwiY2hpbGRyZW4iLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsImlubmVySFRNTCIsIl9faHRtbCIsInRleHRDb250ZW50IiwiQXJyYXkiLCJpc0FycmF5Iiwiam9pbiIsInVwZGF0ZUVsZW1lbnRzIiwiY29tcG9uZW50cyIsImhlYWRFbCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiaGVhZENvdW50RWwiLCJxdWVyeVNlbGVjdG9yIiwiY29uc29sZSIsImVycm9yIiwiaGVhZENvdW50IiwiTnVtYmVyIiwiY29udGVudCIsIm9sZFRhZ3MiLCJpIiwiaiIsInByZXZpb3VzRWxlbWVudFNpYmxpbmciLCJ0YWdOYW1lIiwicHVzaCIsIm5ld1RhZ3MiLCJtYXAiLCJmaWx0ZXIiLCJuZXdUYWciLCJrIiwibGVuIiwibGVuZ3RoIiwib2xkVGFnIiwiaXNFcXVhbE5vZGUiLCJzcGxpY2UiLCJmb3JFYWNoIiwidCIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsImluc2VydEJlZm9yZSIsInRvU3RyaW5nIiwidXBkYXRlUHJvbWlzZSIsIm1vdW50ZWRJbnN0YW5jZXMiLCJTZXQiLCJ1cGRhdGVIZWFkIiwiaGVhZCIsInByb21pc2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsInRoZW4iLCJ0YWdzIiwiaCIsImhyZWYiLCJ0aXRsZUNvbXBvbmVudCIsInRpdGxlIiwicmVxdWVzdElkbGVDYWxsYmFjayIsInNlbGYiLCJjYiIsInN0YXJ0IiwiRGF0ZSIsIm5vdyIsInNldFRpbWVvdXQiLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsIk1hdGgiLCJtYXgiLCJjYW5jZWxJZGxlQ2FsbGJhY2siLCJpZCIsImNsZWFyVGltZW91dCIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiaW5pdFNjcmlwdExvYWRlciIsIl9leHRlbmRzMiIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlMiIsIl9yZWFjdCIsIl9oZWFkTWFuYWdlckNvbnRleHQiLCJfaGVhZE1hbmFnZXIiLCJfcmVxdWVzdElkbGVDYWxsYmFjayIsIlNjcmlwdENhY2hlIiwiTWFwIiwiTG9hZENhY2hlIiwiaWdub3JlUHJvcHMiLCJsb2FkU2NyaXB0Iiwic3JjIiwib25Mb2FkIiwib25FcnJvciIsImNhY2hlS2V5IiwiaGFzIiwiYWRkIiwiZ2V0IiwibG9hZFByb21pc2UiLCJyZWplY3QiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FsbCIsInNldCIsIk9iamVjdCIsImVudHJpZXMiLCJpbmNsdWRlcyIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImhhbmRsZUNsaWVudFNjcmlwdExvYWQiLCJzdHJhdGVneSIsImxvYWRMYXp5U2NyaXB0IiwicmVhZHlTdGF0ZSIsInNjcmlwdExvYWRlckl0ZW1zIiwiU2NyaXB0IiwicmVzdFByb3BzIiwiZGVmYXVsdCIsInVwZGF0ZVNjcmlwdHMiLCJzY3JpcHRzIiwidXNlQ29udGV4dCIsIkhlYWRNYW5hZ2VyQ29udGV4dCIsInVzZUVmZmVjdCIsImJlZm9yZUludGVyYWN0aXZlIiwiY29uY2F0IiwiX2RlZmF1bHQiLCJIdG1sIiwiTWFpbiIsIl9wcm9wVHlwZXMiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsIl9zZXJ2ZXIiLCJfY29uc3RhbnRzIiwiX2RvY3VtZW50Q29udGV4dCIsIl91dGlscyIsIkRvY3VtZW50Q29udGV4dCIsIkRvY3VtZW50SW5pdGlhbFByb3BzIiwiRG9jdW1lbnRQcm9wcyIsIl9nZXRQYWdlRmlsZXMiLCJfdXRpbHMyIiwiX2h0bWxlc2NhcGUiLCJfc2NyaXB0IiwiX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlIiwiV2Vha01hcCIsImNhY2hlIiwib2JqIiwiX19lc01vZHVsZSIsIm5ld09iaiIsImhhc1Byb3BlcnR5RGVzY3JpcHRvciIsImRlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwia2V5IiwicHJvdG90eXBlIiwiZGVzYyIsImdldERvY3VtZW50RmlsZXMiLCJidWlsZE1hbmlmZXN0IiwicGF0aG5hbWUiLCJpbkFtcE1vZGUiLCJzaGFyZWRGaWxlcyIsImdldFBhZ2VGaWxlcyIsInBhZ2VGaWxlcyIsImFsbEZpbGVzIiwiZ2V0UG9seWZpbGxTY3JpcHRzIiwiY29udGV4dCIsImFzc2V0UHJlZml4IiwiZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmciLCJkaXNhYmxlT3B0aW1pemVkTG9hZGluZyIsInBvbHlmaWxsRmlsZXMiLCJwb2x5ZmlsbCIsImVuZHNXaXRoIiwiZGVmZXIiLCJub25jZSIsImNyb3NzT3JpZ2luIiwiZ2V0UHJlTmV4dFNjcmlwdHMiLCJzY3JpcHRMb2FkZXIiLCJmaWxlIiwic2NyaXB0UHJvcHMiLCJhc3NpZ24iLCJfX05FWFRfQ1JPU1NfT1JJR0lOIiwiZ2V0RHluYW1pY0NodW5rcyIsImZpbGVzIiwiZHluYW1pY0ltcG9ydHMiLCJpc0RldmVsb3BtZW50IiwiYXN5bmMiLCJlbmNvZGVVUkkiLCJnZXRTY3JpcHRzIiwiX2J1aWxkTWFuaWZlc3QkbG93UHJpIiwibm9ybWFsU2NyaXB0cyIsImxvd1ByaW9yaXR5U2NyaXB0cyIsImxvd1ByaW9yaXR5RmlsZXMiLCJEb2N1bWVudCIsIkNvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsImVuaGFuY2VBcHAiLCJBcHAiLCJodG1sIiwicmVuZGVyUGFnZSIsInN0eWxlcyIsInJlbmRlckRvY3VtZW50IiwiRG9jdW1lbnRDb21wb25lbnQiLCJQcm92aWRlciIsInJlbmRlciIsIkhlYWQiLCJOZXh0U2NyaXB0IiwiZG9jQ29tcG9uZW50c1JlbmRlcmVkIiwibG9jYWxlIiwibGFuZyIsImFtcCIsImNvbnN0cnVjdG9yIiwiYXJncyIsImdldENzc0xpbmtzIiwiY3NzRmlsZXMiLCJmIiwidW5tYW5nZWRGaWxlcyIsImR5bmFtaWNDc3NGaWxlcyIsImZyb20iLCJleGlzdGluZyIsImNzc0xpbmtFbGVtZW50cyIsImlzU2hhcmVkRmlsZSIsInJlbCIsImFzIiwiaXNVbm1hbmFnZWRGaWxlIiwiZ2V0UHJlbG9hZER5bmFtaWNDaHVua3MiLCJCb29sZWFuIiwiZ2V0UHJlbG9hZE1haW5MaW5rcyIsInByZWxvYWRGaWxlcyIsImhhbmRsZURvY3VtZW50U2NyaXB0TG9hZGVySXRlbXMiLCJmaWx0ZXJlZENoaWxkcmVuIiwiQ2hpbGRyZW4iLCJjaGlsZCIsIl9fTkVYVF9EQVRBX18iLCJtYWtlU3R5bGVzaGVldEluZXJ0Iiwibm9kZSIsImMiLCJPUFRJTUlaRURfRk9OVF9QUk9WSURFUlMiLCJzb21lIiwic3RhcnRzV2l0aCIsIm5ld1Byb3BzIiwiY2xvbmVFbGVtZW50IiwiX3RoaXMkcHJvcHMkbm9uY2UiLCJfdGhpcyRwcm9wcyRub25jZTIiLCJhbXBQYXRoIiwiaHlicmlkQW1wIiwiY2Fub25pY2FsQmFzZSIsImRhbmdlcm91c0FzUGF0aCIsImhlYWRUYWdzIiwidW5zdGFibGVfcnVudGltZUpTIiwidW5zdGFibGVfSnNQcmVsb2FkIiwiZGlzYWJsZVJ1bnRpbWVKUyIsImRpc2FibGVKc1ByZWxvYWQiLCJjc3NQcmVsb2FkcyIsIm90aGVySGVhZEVsZW1lbnRzIiwidG9BcnJheSIsIl9jaGlsZCRwcm9wcyIsImlzUmVhY3RIZWxtZXQiLCJfY2hpbGQkcHJvcHMyIiwid2FybiIsIm5hbWUiLCJoYXNBbXBodG1sUmVsIiwiaGFzQ2Fub25pY2FsUmVsIiwiYmFkUHJvcCIsImluZGV4T2YiLCJrZXlzIiwicHJvcCIsInBhZ2UiLCJjdXJTdHlsZXMiLCJoYXNTdHlsZXMiLCJfZWwkcHJvcHMiLCJfZWwkcHJvcHMkZGFuZ2Vyb3VzbHkiLCJGcmFnbWVudCIsImNvdW50IiwiY2xlYW5BbXBQYXRoIiwic3R5bGUiLCJyZXBsYWNlIiwiZ2V0QW1wUGF0aCIsImNvbnRleHRUeXBlIiwicHJvcFR5cGVzIiwic3RyaW5nIiwiQU1QX1JFTkRFUl9UQVJHRVQiLCJnZXRJbmxpbmVTY3JpcHRTb3VyY2UiLCJkb2N1bWVudFByb3BzIiwiZGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJodG1sRXNjYXBlSnNvblN0cmluZyIsImVyciIsIm1lc3NhZ2UiLCJFcnJvciIsImFtcERldkZpbGVzIiwiZGV2RmlsZXMiLCJzYWZhcmlOb21vZHVsZUZpeCIsImFzUGF0aCIsIk15RG9jdW1lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTyxNQUFNQSxjQUFjLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixjQUFuQyxDLENBRVA7O0FBQ08sTUFBTUcsUUFBUSxHQUFHQyxHQUFHLElBQUk7QUFDN0JDLFFBQU0sQ0FBQ0MsSUFBUCxDQUFZLFFBQVosRUFBc0JOLGNBQXRCLEVBQXNDO0FBQ3BDTyxhQUFTLEVBQUVIO0FBRHlCLEdBQXRDO0FBR0QsQ0FKTSxDLENBTVA7O0FBQ08sTUFBTUksS0FBSyxHQUFHLENBQUM7QUFBRUMsUUFBRjtBQUFVQyxVQUFWO0FBQW9CQyxPQUFwQjtBQUEyQkM7QUFBM0IsQ0FBRCxLQUF3QztBQUMzRFAsUUFBTSxDQUFDQyxJQUFQLENBQVksT0FBWixFQUFxQkcsTUFBckIsRUFBNkI7QUFDM0JJLGtCQUFjLEVBQUVILFFBRFc7QUFFM0JJLGVBQVcsRUFBRUgsS0FGYztBQUczQkM7QUFIMkIsR0FBN0I7QUFLRCxDQU5NLEM7Ozs7Ozs7Ozs7O0FDVk07O0FBQUFHLGtCQUFBLEdBQW1CLElBQW5CO0FBQXdCQSxlQUFBLEdBQWdCQyxlQUFoQjtBQUFnQ0QseUJBQUEsR0FBMEIsS0FBSyxDQUEvQjtBQUFpQyxNQUFNRSxpQkFBaUIsR0FBQztBQUFDQyxlQUFhLEVBQUMsZ0JBQWY7QUFBZ0NDLFdBQVMsRUFBQyxPQUExQztBQUFrREMsU0FBTyxFQUFDLEtBQTFEO0FBQWdFQyxXQUFTLEVBQUMsWUFBMUU7QUFBdUZDLFVBQVEsRUFBQztBQUFoRyxDQUF4QjtBQUFvSVAseUJBQUEsR0FBMEJFLGlCQUExQjs7QUFBNEMsU0FBU00saUJBQVQsQ0FBMkI7QUFBQ0MsTUFBRDtBQUFNQztBQUFOLENBQTNCLEVBQXdDO0FBQUMsUUFB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Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSwrQyIsImZpbGUiOiJwYWdlcy9fZG9jdW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgR0FfVFJBQ0tJTkdfSUQgPSBwcm9jZXNzLmVudi5HQV9UUkFDS0lOR19JRDtcclxuXHJcbi8vIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL2FuYWx5dGljcy9kZXZndWlkZXMvY29sbGVjdGlvbi9ndGFnanMvcGFnZXNcclxuZXhwb3J0IGNvbnN0IHBhZ2V2aWV3ID0gdXJsID0+IHtcclxuICB3aW5kb3cuZ3RhZyhcImNvbmZpZ1wiLCBHQV9UUkFDS0lOR19JRCwge1xyXG4gICAgcGFnZV9wYXRoOiB1cmxcclxuICB9KTtcclxufTtcclxuXHJcbi8vIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL2FuYWx5dGljcy9kZXZndWlkZXMvY29sbGVjdGlvbi9ndGFnanMvZXZlbnRzXHJcbmV4cG9ydCBjb25zdCBldmVudCA9ICh7IGFjdGlvbiwgY2F0ZWdvcnksIGxhYmVsLCB2YWx1ZSB9KSA9PiB7XHJcbiAgd2luZG93Lmd0YWcoXCJldmVudFwiLCBhY3Rpb24sIHtcclxuICAgIGV2ZW50X2NhdGVnb3J5OiBjYXRlZ29yeSxcclxuICAgIGV2ZW50X2xhYmVsOiBsYWJlbCxcclxuICAgIHZhbHVlXHJcbiAgfSk7XHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGVmYXVsdD1pbml0SGVhZE1hbmFnZXI7ZXhwb3J0cy5ET01BdHRyaWJ1dGVOYW1lcz12b2lkIDA7Y29uc3QgRE9NQXR0cmlidXRlTmFtZXM9e2FjY2VwdENoYXJzZXQ6J2FjY2VwdC1jaGFyc2V0JyxjbGFzc05hbWU6J2NsYXNzJyxodG1sRm9yOidmb3InLGh0dHBFcXVpdjonaHR0cC1lcXVpdicsbm9Nb2R1bGU6J25vTW9kdWxlJ307ZXhwb3J0cy5ET01BdHRyaWJ1dGVOYW1lcz1ET01BdHRyaWJ1dGVOYW1lcztmdW5jdGlvbiByZWFjdEVsZW1lbnRUb0RPTSh7dHlwZSxwcm9wc30pe2NvbnN0IGVsPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7Zm9yKGNvbnN0IHAgaW4gcHJvcHMpe2lmKCFwcm9wcy5oYXNPd25Qcm9wZXJ0eShwKSljb250aW51ZTtpZihwPT09J2NoaWxkcmVuJ3x8cD09PSdkYW5nZXJvdXNseVNldElubmVySFRNTCcpY29udGludWU7Ly8gd2UgZG9uJ3QgcmVuZGVyIHVuZGVmaW5lZCBwcm9wcyB0byB0aGUgRE9NXG5pZihwcm9wc1twXT09PXVuZGVmaW5lZCljb250aW51ZTtjb25zdCBhdHRyPURPTUF0dHJpYnV0ZU5hbWVzW3BdfHxwLnRvTG93ZXJDYXNlKCk7aWYodHlwZT09PSdzY3JpcHQnJiYoYXR0cj09PSdhc3luYyd8fGF0dHI9PT0nZGVmZXInfHxhdHRyPT09J25vTW9kdWxlJykpeztlbFthdHRyXT0hIXByb3BzW3BdO31lbHNle2VsLnNldEF0dHJpYnV0ZShhdHRyLHByb3BzW3BdKTt9fWNvbnN0e2NoaWxkcmVuLGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MfT1wcm9wcztpZihkYW5nZXJvdXNseVNldElubmVySFRNTCl7ZWwuaW5uZXJIVE1MPWRhbmdlcm91c2x5U2V0SW5uZXJIVE1MLl9faHRtbHx8Jyc7fWVsc2UgaWYoY2hpbGRyZW4pe2VsLnRleHRDb250ZW50PXR5cGVvZiBjaGlsZHJlbj09PSdzdHJpbmcnP2NoaWxkcmVuOkFycmF5LmlzQXJyYXkoY2hpbGRyZW4pP2NoaWxkcmVuLmpvaW4oJycpOicnO31yZXR1cm4gZWw7fWZ1bmN0aW9uIHVwZGF0ZUVsZW1lbnRzKHR5cGUsY29tcG9uZW50cyl7Y29uc3QgaGVhZEVsPWRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07Y29uc3QgaGVhZENvdW50RWw9aGVhZEVsLnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT1uZXh0LWhlYWQtY291bnRdJyk7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2lmKCFoZWFkQ291bnRFbCl7Y29uc29sZS5lcnJvcignV2FybmluZzogbmV4dC1oZWFkLWNvdW50IGlzIG1pc3NpbmcuIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL25leHQtaGVhZC1jb3VudC1taXNzaW5nJyk7cmV0dXJuO319Y29uc3QgaGVhZENvdW50PU51bWJlcihoZWFkQ291bnRFbC5jb250ZW50KTtjb25zdCBvbGRUYWdzPVtdO2ZvcihsZXQgaT0wLGo9aGVhZENvdW50RWwucHJldmlvdXNFbGVtZW50U2libGluZztpPGhlYWRDb3VudDtpKyssaj1qLnByZXZpb3VzRWxlbWVudFNpYmxpbmcpe2lmKGoudGFnTmFtZS50b0xvd2VyQ2FzZSgpPT09dHlwZSl7b2xkVGFncy5wdXNoKGopO319Y29uc3QgbmV3VGFncz1jb21wb25lbnRzLm1hcChyZWFjdEVsZW1lbnRUb0RPTSkuZmlsdGVyKG5ld1RhZz0+e2ZvcihsZXQgaz0wLGxlbj1vbGRUYWdzLmxlbmd0aDtrPGxlbjtrKyspe2NvbnN0IG9sZFRhZz1vbGRUYWdzW2tdO2lmKG9sZFRhZy5pc0VxdWFsTm9kZShuZXdUYWcpKXtvbGRUYWdzLnNwbGljZShrLDEpO3JldHVybiBmYWxzZTt9fXJldHVybiB0cnVlO30pO29sZFRhZ3MuZm9yRWFjaCh0PT50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodCkpO25ld1RhZ3MuZm9yRWFjaCh0PT5oZWFkRWwuaW5zZXJ0QmVmb3JlKHQsaGVhZENvdW50RWwpKTtoZWFkQ291bnRFbC5jb250ZW50PShoZWFkQ291bnQtb2xkVGFncy5sZW5ndGgrbmV3VGFncy5sZW5ndGgpLnRvU3RyaW5nKCk7fWZ1bmN0aW9uIGluaXRIZWFkTWFuYWdlcigpe2xldCB1cGRhdGVQcm9taXNlPW51bGw7cmV0dXJue21vdW50ZWRJbnN0YW5jZXM6bmV3IFNldCgpLHVwZGF0ZUhlYWQ6aGVhZD0+e2NvbnN0IHByb21pc2U9dXBkYXRlUHJvbWlzZT1Qcm9taXNlLnJlc29sdmUoKS50aGVuKCgpPT57aWYocHJvbWlzZSE9PXVwZGF0ZVByb21pc2UpcmV0dXJuO3VwZGF0ZVByb21pc2U9bnVsbDtjb25zdCB0YWdzPXt9O2hlYWQuZm9yRWFjaChoPT57aWYoLy8gSWYgdGhlIGZvbnQgdGFnIGlzIGxvYWRlZCBvbmx5IG9uIGNsaWVudCBuYXZpZ2F0aW9uXG4vLyBpdCB3b24ndCBiZSBpbmxpbmVkLiBJbiB0aGlzIGNhc2UgcmV2ZXJ0IHRvIHRoZSBvcmlnaW5hbCBiZWhhdmlvclxuaC50eXBlPT09J2xpbmsnJiZoLnByb3BzWydkYXRhLW9wdGltaXplZC1mb250cyddJiYhZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihgc3R5bGVbZGF0YS1ocmVmPVwiJHtoLnByb3BzWydkYXRhLWhyZWYnXX1cIl1gKSl7aC5wcm9wcy5ocmVmPWgucHJvcHNbJ2RhdGEtaHJlZiddO2gucHJvcHNbJ2RhdGEtaHJlZiddPXVuZGVmaW5lZDt9Y29uc3QgY29tcG9uZW50cz10YWdzW2gudHlwZV18fFtdO2NvbXBvbmVudHMucHVzaChoKTt0YWdzW2gudHlwZV09Y29tcG9uZW50czt9KTtjb25zdCB0aXRsZUNvbXBvbmVudD10YWdzLnRpdGxlP3RhZ3MudGl0bGVbMF06bnVsbDtsZXQgdGl0bGU9Jyc7aWYodGl0bGVDb21wb25lbnQpe2NvbnN0e2NoaWxkcmVufT10aXRsZUNvbXBvbmVudC5wcm9wczt0aXRsZT10eXBlb2YgY2hpbGRyZW49PT0nc3RyaW5nJz9jaGlsZHJlbjpBcnJheS5pc0FycmF5KGNoaWxkcmVuKT9jaGlsZHJlbi5qb2luKCcnKTonJzt9aWYodGl0bGUhPT1kb2N1bWVudC50aXRsZSlkb2N1bWVudC50aXRsZT10aXRsZTtbJ21ldGEnLCdiYXNlJywnbGluaycsJ3N0eWxlJywnc2NyaXB0J10uZm9yRWFjaCh0eXBlPT57dXBkYXRlRWxlbWVudHModHlwZSx0YWdzW3R5cGVdfHxbXSk7fSk7fSk7fX07fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aGVhZC1tYW5hZ2VyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrPWV4cG9ydHMucmVxdWVzdElkbGVDYWxsYmFjaz12b2lkIDA7Y29uc3QgcmVxdWVzdElkbGVDYWxsYmFjaz10eXBlb2Ygc2VsZiE9PSd1bmRlZmluZWQnJiZzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2t8fGZ1bmN0aW9uKGNiKXtsZXQgc3RhcnQ9RGF0ZS5ub3coKTtyZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbigpe2NiKHtkaWRUaW1lb3V0OmZhbHNlLHRpbWVSZW1haW5pbmc6ZnVuY3Rpb24oKXtyZXR1cm4gTWF0aC5tYXgoMCw1MC0oRGF0ZS5ub3coKS1zdGFydCkpO319KTt9LDEpO307ZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrPXJlcXVlc3RJZGxlQ2FsbGJhY2s7Y29uc3QgY2FuY2VsSWRsZUNhbGxiYWNrPXR5cGVvZiBzZWxmIT09J3VuZGVmaW5lZCcmJnNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrfHxmdW5jdGlvbihpZCl7cmV0dXJuIGNsZWFyVGltZW91dChpZCk7fTtleHBvcnRzLmNhbmNlbElkbGVDYWxsYmFjaz1jYW5jZWxJZGxlQ2FsbGJhY2s7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuaW5pdFNjcmlwdExvYWRlcj1pbml0U2NyaXB0TG9hZGVyO2V4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9leHRlbmRzMj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIikpO3ZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlXCIpKTt2YXIgX3JlYWN0PXJlcXVpcmUoXCJyZWFjdFwiKTt2YXIgX2hlYWRNYW5hZ2VyQ29udGV4dD1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL2hlYWQtbWFuYWdlci1jb250ZXh0XCIpO3ZhciBfaGVhZE1hbmFnZXI9cmVxdWlyZShcIi4vaGVhZC1tYW5hZ2VyXCIpO3ZhciBfcmVxdWVzdElkbGVDYWxsYmFjaz1yZXF1aXJlKFwiLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2tcIik7Y29uc3QgU2NyaXB0Q2FjaGU9bmV3IE1hcCgpO2NvbnN0IExvYWRDYWNoZT1uZXcgU2V0KCk7Y29uc3QgaWdub3JlUHJvcHM9WydvbkxvYWQnLCdkYW5nZXJvdXNseVNldElubmVySFRNTCcsJ2NoaWxkcmVuJywnb25FcnJvcicsJ3N0cmF0ZWd5J107Y29uc3QgbG9hZFNjcmlwdD1wcm9wcz0+e2NvbnN0e3NyYyxpZCxvbkxvYWQ9KCk9Pnt9LGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MLGNoaWxkcmVuPScnLG9uRXJyb3J9PXByb3BzO2NvbnN0IGNhY2hlS2V5PWlkfHxzcmM7aWYoU2NyaXB0Q2FjaGUuaGFzKHNyYykpe2lmKCFMb2FkQ2FjaGUuaGFzKGNhY2hlS2V5KSl7TG9hZENhY2hlLmFkZChjYWNoZUtleSk7Ly8gRXhlY3V0ZSBvbkxvYWQgc2luY2UgdGhlIHNjcmlwdCBsb2FkaW5nIGhhcyBiZWd1blxuU2NyaXB0Q2FjaGUuZ2V0KHNyYykudGhlbihvbkxvYWQsb25FcnJvcik7fXJldHVybjt9Y29uc3QgZWw9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7Y29uc3QgbG9hZFByb21pc2U9bmV3IFByb21pc2UoKHJlc29sdmUscmVqZWN0KT0+e2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLGZ1bmN0aW9uKCl7cmVzb2x2ZSgpO2lmKG9uTG9hZCl7b25Mb2FkLmNhbGwodGhpcyk7fX0pO2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJyxmdW5jdGlvbigpe3JlamVjdCgpO2lmKG9uRXJyb3Ipe29uRXJyb3IoKTt9fSk7fSk7aWYoc3JjKXtTY3JpcHRDYWNoZS5zZXQoc3JjLGxvYWRQcm9taXNlKTtMb2FkQ2FjaGUuYWRkKGNhY2hlS2V5KTt9aWYoZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwpe2VsLmlubmVySFRNTD1kYW5nZXJvdXNseVNldElubmVySFRNTC5fX2h0bWx8fCcnO31lbHNlIGlmKGNoaWxkcmVuKXtlbC50ZXh0Q29udGVudD10eXBlb2YgY2hpbGRyZW49PT0nc3RyaW5nJz9jaGlsZHJlbjpBcnJheS5pc0FycmF5KGNoaWxkcmVuKT9jaGlsZHJlbi5qb2luKCcnKTonJzt9ZWxzZSBpZihzcmMpe2VsLnNyYz1zcmM7fWZvcihjb25zdFtrLHZhbHVlXW9mIE9iamVjdC5lbnRyaWVzKHByb3BzKSl7aWYodmFsdWU9PT11bmRlZmluZWR8fGlnbm9yZVByb3BzLmluY2x1ZGVzKGspKXtjb250aW51ZTt9Y29uc3QgYXR0cj1faGVhZE1hbmFnZXIuRE9NQXR0cmlidXRlTmFtZXNba118fGsudG9Mb3dlckNhc2UoKTtlbC5zZXRBdHRyaWJ1dGUoYXR0cix2YWx1ZSk7fWRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWwpO307ZnVuY3Rpb24gaGFuZGxlQ2xpZW50U2NyaXB0TG9hZChwcm9wcyl7Y29uc3R7c3RyYXRlZ3k9J2FmdGVySW50ZXJhY3RpdmUnfT1wcm9wcztpZihzdHJhdGVneT09PSdhZnRlckludGVyYWN0aXZlJyl7bG9hZFNjcmlwdChwcm9wcyk7fWVsc2UgaWYoc3RyYXRlZ3k9PT0nbGF6eU9ubG9hZCcpe3dpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywoKT0+eygwLF9yZXF1ZXN0SWRsZUNhbGxiYWNrLnJlcXVlc3RJZGxlQ2FsbGJhY2spKCgpPT5sb2FkU2NyaXB0KHByb3BzKSk7fSk7fX1mdW5jdGlvbiBsb2FkTGF6eVNjcmlwdChwcm9wcyl7aWYoZG9jdW1lbnQucmVhZHlTdGF0ZT09PSdjb21wbGV0ZScpeygwLF9yZXF1ZXN0SWRsZUNhbGxiYWNrLnJlcXVlc3RJZGxlQ2FsbGJhY2spKCgpPT5sb2FkU2NyaXB0KHByb3BzKSk7fWVsc2V7d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCgpPT57KDAsX3JlcXVlc3RJZGxlQ2FsbGJhY2sucmVxdWVzdElkbGVDYWxsYmFjaykoKCk9PmxvYWRTY3JpcHQocHJvcHMpKTt9KTt9fWZ1bmN0aW9uIGluaXRTY3JpcHRMb2FkZXIoc2NyaXB0TG9hZGVySXRlbXMpe3NjcmlwdExvYWRlckl0ZW1zLmZvckVhY2goaGFuZGxlQ2xpZW50U2NyaXB0TG9hZCk7fWZ1bmN0aW9uIFNjcmlwdChwcm9wcyl7Y29uc3R7c3JjPScnLG9uTG9hZD0oKT0+e30sc3RyYXRlZ3k9J2FmdGVySW50ZXJhY3RpdmUnLG9uRXJyb3J9PXByb3BzLHJlc3RQcm9wcz0oMCxfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTIuZGVmYXVsdCkocHJvcHMsW1wic3JjXCIsXCJvbkxvYWRcIixcImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MXCIsXCJzdHJhdGVneVwiLFwib25FcnJvclwiXSk7Ly8gQ29udGV4dCBpcyBhdmFpbGFibGUgb25seSBkdXJpbmcgU1NSXG5jb25zdHt1cGRhdGVTY3JpcHRzLHNjcmlwdHN9PSgwLF9yZWFjdC51c2VDb250ZXh0KShfaGVhZE1hbmFnZXJDb250ZXh0LkhlYWRNYW5hZ2VyQ29udGV4dCk7KDAsX3JlYWN0LnVzZUVmZmVjdCkoKCk9PntpZihzdHJhdGVneT09PSdhZnRlckludGVyYWN0aXZlJyl7bG9hZFNjcmlwdChwcm9wcyk7fWVsc2UgaWYoc3RyYXRlZ3k9PT0nbGF6eU9ubG9hZCcpe2xvYWRMYXp5U2NyaXB0KHByb3BzKTt9fSxbcHJvcHMsc3RyYXRlZ3ldKTtpZihzdHJhdGVneT09PSdiZWZvcmVJbnRlcmFjdGl2ZScpe2lmKHVwZGF0ZVNjcmlwdHMpe3NjcmlwdHMuYmVmb3JlSW50ZXJhY3RpdmU9KHNjcmlwdHMuYmVmb3JlSW50ZXJhY3RpdmV8fFtdKS5jb25jYXQoWygwLF9leHRlbmRzMi5kZWZhdWx0KSh7c3JjLG9uTG9hZCxvbkVycm9yfSxyZXN0UHJvcHMpXSk7dXBkYXRlU2NyaXB0cyhzY3JpcHRzKTt9fXJldHVybiBudWxsO312YXIgX2RlZmF1bHQ9U2NyaXB0O2V4cG9ydHMuZGVmYXVsdD1fZGVmYXVsdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNjcmlwdC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLkh0bWw9SHRtbDtleHBvcnRzLk1haW49TWFpbjtleHBvcnRzLk5leHRTY3JpcHQ9ZXhwb3J0cy5IZWFkPWV4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9wcm9wVHlwZXM9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicHJvcC10eXBlc1wiKSk7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfc2VydmVyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInN0eWxlZC1qc3gvc2VydmVyXCIpKTt2YXIgX2NvbnN0YW50cz1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL2NvbnN0YW50c1wiKTt2YXIgX2RvY3VtZW50Q29udGV4dD1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL2RvY3VtZW50LWNvbnRleHRcIik7dmFyIF91dGlscz1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzXCIpO2V4cG9ydHMuRG9jdW1lbnRDb250ZXh0PV91dGlscy5Eb2N1bWVudENvbnRleHQ7ZXhwb3J0cy5Eb2N1bWVudEluaXRpYWxQcm9wcz1fdXRpbHMuRG9jdW1lbnRJbml0aWFsUHJvcHM7ZXhwb3J0cy5Eb2N1bWVudFByb3BzPV91dGlscy5Eb2N1bWVudFByb3BzO3ZhciBfZ2V0UGFnZUZpbGVzPXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXNcIik7dmFyIF91dGlsczI9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL3NlcnZlci91dGlsc1wiKTt2YXIgX2h0bWxlc2NhcGU9cmVxdWlyZShcIi4uL3NlcnZlci9odG1sZXNjYXBlXCIpO3ZhciBfc2NyaXB0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL2NsaWVudC9zY3JpcHRcIikpO2Z1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpe2lmKHR5cGVvZiBXZWFrTWFwIT09XCJmdW5jdGlvblwiKXJldHVybiBudWxsO3ZhciBjYWNoZT1uZXcgV2Vha01hcCgpO19nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZT1mdW5jdGlvbigpe3JldHVybiBjYWNoZTt9O3JldHVybiBjYWNoZTt9ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKXtpZihvYmomJm9iai5fX2VzTW9kdWxlKXtyZXR1cm4gb2JqO31pZihvYmo9PT1udWxsfHx0eXBlb2Ygb2JqIT09XCJvYmplY3RcIiYmdHlwZW9mIG9iaiE9PVwiZnVuY3Rpb25cIil7cmV0dXJue2RlZmF1bHQ6b2JqfTt9dmFyIGNhY2hlPV9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO2lmKGNhY2hlJiZjYWNoZS5oYXMob2JqKSl7cmV0dXJuIGNhY2hlLmdldChvYmopO312YXIgbmV3T2JqPXt9O3ZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3I9T2JqZWN0LmRlZmluZVByb3BlcnR5JiZPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO2Zvcih2YXIga2V5IGluIG9iail7aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaixrZXkpKXt2YXIgZGVzYz1oYXNQcm9wZXJ0eURlc2NyaXB0b3I/T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosa2V5KTpudWxsO2lmKGRlc2MmJihkZXNjLmdldHx8ZGVzYy5zZXQpKXtPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLGtleSxkZXNjKTt9ZWxzZXtuZXdPYmpba2V5XT1vYmpba2V5XTt9fX1uZXdPYmouZGVmYXVsdD1vYmo7aWYoY2FjaGUpe2NhY2hlLnNldChvYmosbmV3T2JqKTt9cmV0dXJuIG5ld09iajt9ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmope3JldHVybiBvYmomJm9iai5fX2VzTW9kdWxlP29iajp7ZGVmYXVsdDpvYmp9O31mdW5jdGlvbiBnZXREb2N1bWVudEZpbGVzKGJ1aWxkTWFuaWZlc3QscGF0aG5hbWUsaW5BbXBNb2RlKXtjb25zdCBzaGFyZWRGaWxlcz0oMCxfZ2V0UGFnZUZpbGVzLmdldFBhZ2VGaWxlcykoYnVpbGRNYW5pZmVzdCwnL19hcHAnKTtjb25zdCBwYWdlRmlsZXM9aW5BbXBNb2RlP1tdOigwLF9nZXRQYWdlRmlsZXMuZ2V0UGFnZUZpbGVzKShidWlsZE1hbmlmZXN0LHBhdGhuYW1lKTtyZXR1cm57c2hhcmVkRmlsZXMscGFnZUZpbGVzLGFsbEZpbGVzOlsuLi5uZXcgU2V0KFsuLi5zaGFyZWRGaWxlcywuLi5wYWdlRmlsZXNdKV19O31mdW5jdGlvbiBnZXRQb2x5ZmlsbFNjcmlwdHMoY29udGV4dCxwcm9wcyl7Ly8gcG9seWZpbGxzLmpzIGhhcyB0byBiZSByZW5kZXJlZCBhcyBub21vZHVsZSB3aXRob3V0IGFzeW5jXG4vLyBJdCBhbHNvIGhhcyB0byBiZSB0aGUgZmlyc3Qgc2NyaXB0IHRvIGxvYWRcbmNvbnN0e2Fzc2V0UHJlZml4LGJ1aWxkTWFuaWZlc3QsZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmcsZGlzYWJsZU9wdGltaXplZExvYWRpbmd9PWNvbnRleHQ7cmV0dXJuIGJ1aWxkTWFuaWZlc3QucG9seWZpbGxGaWxlcy5maWx0ZXIocG9seWZpbGw9PnBvbHlmaWxsLmVuZHNXaXRoKCcuanMnKSYmIXBvbHlmaWxsLmVuZHNXaXRoKCcubW9kdWxlLmpzJykpLm1hcChwb2x5ZmlsbD0+LyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIix7a2V5OnBvbHlmaWxsLGRlZmVyOiFkaXNhYmxlT3B0aW1pemVkTG9hZGluZyxub25jZTpwcm9wcy5ub25jZSxjcm9zc09yaWdpbjpwcm9wcy5jcm9zc09yaWdpbnx8cHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTixub01vZHVsZTp0cnVlLHNyYzpgJHthc3NldFByZWZpeH0vX25leHQvJHtwb2x5ZmlsbH0ke2Rldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nfWB9KSk7fWZ1bmN0aW9uIGdldFByZU5leHRTY3JpcHRzKGNvbnRleHQscHJvcHMpe2NvbnN0e3NjcmlwdExvYWRlcixkaXNhYmxlT3B0aW1pemVkTG9hZGluZ309Y29udGV4dDtyZXR1cm4oc2NyaXB0TG9hZGVyLmJlZm9yZUludGVyYWN0aXZlfHxbXSkubWFwKGZpbGU9Pntjb25zdHtzdHJhdGVneSwuLi5zY3JpcHRQcm9wc309ZmlsZTtyZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiLE9iamVjdC5hc3NpZ24oe30sc2NyaXB0UHJvcHMse2RlZmVyOiFkaXNhYmxlT3B0aW1pemVkTG9hZGluZyxub25jZTpwcm9wcy5ub25jZSxjcm9zc09yaWdpbjpwcm9wcy5jcm9zc09yaWdpbnx8cHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTn0pKTt9KTt9ZnVuY3Rpb24gZ2V0RHluYW1pY0NodW5rcyhjb250ZXh0LHByb3BzLGZpbGVzKXtjb25zdHtkeW5hbWljSW1wb3J0cyxhc3NldFByZWZpeCxpc0RldmVsb3BtZW50LGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nLGRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nfT1jb250ZXh0O3JldHVybiBkeW5hbWljSW1wb3J0cy5tYXAoZmlsZT0+e2lmKCFmaWxlLmVuZHNXaXRoKCcuanMnKXx8ZmlsZXMuYWxsRmlsZXMuaW5jbHVkZXMoZmlsZSkpcmV0dXJuIG51bGw7cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIix7YXN5bmM6IWlzRGV2ZWxvcG1lbnQmJmRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nLGRlZmVyOiFkaXNhYmxlT3B0aW1pemVkTG9hZGluZyxrZXk6ZmlsZSxzcmM6YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKGZpbGUpfSR7ZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmd9YCxub25jZTpwcm9wcy5ub25jZSxjcm9zc09yaWdpbjpwcm9wcy5jcm9zc09yaWdpbnx8cHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTn0pO30pO31mdW5jdGlvbiBnZXRTY3JpcHRzKGNvbnRleHQscHJvcHMsZmlsZXMpe3ZhciBfYnVpbGRNYW5pZmVzdCRsb3dQcmk7Y29uc3R7YXNzZXRQcmVmaXgsYnVpbGRNYW5pZmVzdCxpc0RldmVsb3BtZW50LGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nLGRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nfT1jb250ZXh0O2NvbnN0IG5vcm1hbFNjcmlwdHM9ZmlsZXMuYWxsRmlsZXMuZmlsdGVyKGZpbGU9PmZpbGUuZW5kc1dpdGgoJy5qcycpKTtjb25zdCBsb3dQcmlvcml0eVNjcmlwdHM9KF9idWlsZE1hbmlmZXN0JGxvd1ByaT1idWlsZE1hbmlmZXN0Lmxvd1ByaW9yaXR5RmlsZXMpPT1udWxsP3ZvaWQgMDpfYnVpbGRNYW5pZmVzdCRsb3dQcmkuZmlsdGVyKGZpbGU9PmZpbGUuZW5kc1dpdGgoJy5qcycpKTtyZXR1cm5bLi4ubm9ybWFsU2NyaXB0cywuLi5sb3dQcmlvcml0eVNjcmlwdHNdLm1hcChmaWxlPT57cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIix7a2V5OmZpbGUsc3JjOmAke2Fzc2V0UHJlZml4fS9fbmV4dC8ke2VuY29kZVVSSShmaWxlKX0ke2Rldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nfWAsbm9uY2U6cHJvcHMubm9uY2UsYXN5bmM6IWlzRGV2ZWxvcG1lbnQmJmRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nLGRlZmVyOiFkaXNhYmxlT3B0aW1pemVkTG9hZGluZyxjcm9zc09yaWdpbjpwcm9wcy5jcm9zc09yaWdpbnx8cHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTn0pO30pO30vKipcbiAqIGBEb2N1bWVudGAgY29tcG9uZW50IGhhbmRsZXMgdGhlIGluaXRpYWwgYGRvY3VtZW50YCBtYXJrdXAgYW5kIHJlbmRlcnMgb25seSBvbiB0aGUgc2VydmVyIHNpZGUuXG4gKiBDb21tb25seSB1c2VkIGZvciBpbXBsZW1lbnRpbmcgc2VydmVyIHNpZGUgcmVuZGVyaW5nIGZvciBgY3NzLWluLWpzYCBsaWJyYXJpZXMuXG4gKi9jbGFzcyBEb2N1bWVudCBleHRlbmRzIF9yZWFjdC5Db21wb25lbnR7LyoqXG4gICAqIGBnZXRJbml0aWFsUHJvcHNgIGhvb2sgcmV0dXJucyB0aGUgY29udGV4dCBvYmplY3Qgd2l0aCB0aGUgYWRkaXRpb24gb2YgYHJlbmRlclBhZ2VgLlxuICAgKiBgcmVuZGVyUGFnZWAgY2FsbGJhY2sgZXhlY3V0ZXMgYFJlYWN0YCByZW5kZXJpbmcgbG9naWMgc3luY2hyb25vdXNseSB0byBzdXBwb3J0IHNlcnZlci1yZW5kZXJpbmcgd3JhcHBlcnNcbiAgICovc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhjdHgpe2NvbnN0IGVuaGFuY2VBcHA9QXBwPT57cmV0dXJuIHByb3BzPT4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChBcHAscHJvcHMpO307Y29uc3R7aHRtbCxoZWFkfT1hd2FpdCBjdHgucmVuZGVyUGFnZSh7ZW5oYW5jZUFwcH0pO2NvbnN0IHN0eWxlcz1bLi4uKDAsX3NlcnZlci5kZWZhdWx0KSgpXTtyZXR1cm57aHRtbCxoZWFkLHN0eWxlc307fXN0YXRpYyByZW5kZXJEb2N1bWVudChEb2N1bWVudENvbXBvbmVudCxwcm9wcyl7cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX2RvY3VtZW50Q29udGV4dC5Eb2N1bWVudENvbnRleHQuUHJvdmlkZXIse3ZhbHVlOnByb3BzfSwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChEb2N1bWVudENvbXBvbmVudCxwcm9wcykpO31yZW5kZXIoKXtyZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChIdG1sLG51bGwsLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoSGVhZCxudWxsKSwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImJvZHlcIixudWxsLC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KE1haW4sbnVsbCksLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoTmV4dFNjcmlwdCxudWxsKSkpO319ZXhwb3J0cy5kZWZhdWx0PURvY3VtZW50O2Z1bmN0aW9uIEh0bWwocHJvcHMpe2NvbnN0e2luQW1wTW9kZSxkb2NDb21wb25lbnRzUmVuZGVyZWQsbG9jYWxlfT0oMCxfcmVhY3QudXNlQ29udGV4dCkoX2RvY3VtZW50Q29udGV4dC5Eb2N1bWVudENvbnRleHQpO2RvY0NvbXBvbmVudHNSZW5kZXJlZC5IdG1sPXRydWU7cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJodG1sXCIsT2JqZWN0LmFzc2lnbih7fSxwcm9wcyx7bGFuZzpwcm9wcy5sYW5nfHxsb2NhbGV8fHVuZGVmaW5lZCxhbXA6aW5BbXBNb2RlPycnOnVuZGVmaW5lZCxcImRhdGEtYW1wZGV2bW9kZVwiOmluQW1wTW9kZSYmcHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbic/Jyc6dW5kZWZpbmVkfSkpO31jbGFzcyBIZWFkIGV4dGVuZHMgX3JlYWN0LkNvbXBvbmVudHtjb25zdHJ1Y3RvciguLi5hcmdzKXtzdXBlciguLi5hcmdzKTt0aGlzLmNvbnRleHQ9dm9pZCAwO31nZXRDc3NMaW5rcyhmaWxlcyl7Y29uc3R7YXNzZXRQcmVmaXgsZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmcsZHluYW1pY0ltcG9ydHN9PXRoaXMuY29udGV4dDtjb25zdCBjc3NGaWxlcz1maWxlcy5hbGxGaWxlcy5maWx0ZXIoZj0+Zi5lbmRzV2l0aCgnLmNzcycpKTtjb25zdCBzaGFyZWRGaWxlcz1uZXcgU2V0KGZpbGVzLnNoYXJlZEZpbGVzKTsvLyBVbm1hbmFnZWQgZmlsZXMgYXJlIENTUyBmaWxlcyB0aGF0IHdpbGwgYmUgaGFuZGxlZCBkaXJlY3RseSBieSB0aGVcbi8vIHdlYnBhY2sgcnVudGltZSAoYG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luYCkuXG5sZXQgdW5tYW5nZWRGaWxlcz1uZXcgU2V0KFtdKTtsZXQgZHluYW1pY0Nzc0ZpbGVzPUFycmF5LmZyb20obmV3IFNldChkeW5hbWljSW1wb3J0cy5maWx0ZXIoZmlsZT0+ZmlsZS5lbmRzV2l0aCgnLmNzcycpKSkpO2lmKGR5bmFtaWNDc3NGaWxlcy5sZW5ndGgpe2NvbnN0IGV4aXN0aW5nPW5ldyBTZXQoY3NzRmlsZXMpO2R5bmFtaWNDc3NGaWxlcz1keW5hbWljQ3NzRmlsZXMuZmlsdGVyKGY9PiEoZXhpc3RpbmcuaGFzKGYpfHxzaGFyZWRGaWxlcy5oYXMoZikpKTt1bm1hbmdlZEZpbGVzPW5ldyBTZXQoZHluYW1pY0Nzc0ZpbGVzKTtjc3NGaWxlcy5wdXNoKC4uLmR5bmFtaWNDc3NGaWxlcyk7fWxldCBjc3NMaW5rRWxlbWVudHM9W107Y3NzRmlsZXMuZm9yRWFjaChmaWxlPT57Y29uc3QgaXNTaGFyZWRGaWxlPXNoYXJlZEZpbGVzLmhhcyhmaWxlKTtpZighcHJvY2Vzcy5lbnYuX19ORVhUX09QVElNSVpFX0NTUyl7Y3NzTGlua0VsZW1lbnRzLnB1c2goLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIse2tleTpgJHtmaWxlfS1wcmVsb2FkYCxub25jZTp0aGlzLnByb3BzLm5vbmNlLHJlbDpcInByZWxvYWRcIixocmVmOmAke2Fzc2V0UHJlZml4fS9fbmV4dC8ke2VuY29kZVVSSShmaWxlKX0ke2Rldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nfWAsYXM6XCJzdHlsZVwiLGNyb3NzT3JpZ2luOnRoaXMucHJvcHMuY3Jvc3NPcmlnaW58fHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU59KSk7fWNvbnN0IGlzVW5tYW5hZ2VkRmlsZT11bm1hbmdlZEZpbGVzLmhhcyhmaWxlKTtjc3NMaW5rRWxlbWVudHMucHVzaCgvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpbmtcIix7a2V5OmZpbGUsbm9uY2U6dGhpcy5wcm9wcy5ub25jZSxyZWw6XCJzdHlsZXNoZWV0XCIsaHJlZjpgJHthc3NldFByZWZpeH0vX25leHQvJHtlbmNvZGVVUkkoZmlsZSl9JHtkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZ31gLGNyb3NzT3JpZ2luOnRoaXMucHJvcHMuY3Jvc3NPcmlnaW58fHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU4sXCJkYXRhLW4tZ1wiOmlzVW5tYW5hZ2VkRmlsZT91bmRlZmluZWQ6aXNTaGFyZWRGaWxlPycnOnVuZGVmaW5lZCxcImRhdGEtbi1wXCI6aXNVbm1hbmFnZWRGaWxlP3VuZGVmaW5lZDppc1NoYXJlZEZpbGU/dW5kZWZpbmVkOicnfSkpO30pO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J2RldmVsb3BtZW50JyYmcHJvY2Vzcy5lbnYuX19ORVhUX09QVElNSVpFX0ZPTlRTKXtjc3NMaW5rRWxlbWVudHM9dGhpcy5tYWtlU3R5bGVzaGVldEluZXJ0KGNzc0xpbmtFbGVtZW50cyk7fXJldHVybiBjc3NMaW5rRWxlbWVudHMubGVuZ3RoPT09MD9udWxsOmNzc0xpbmtFbGVtZW50czt9Z2V0UHJlbG9hZER5bmFtaWNDaHVua3MoKXtjb25zdHtkeW5hbWljSW1wb3J0cyxhc3NldFByZWZpeCxkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZ309dGhpcy5jb250ZXh0O3JldHVybiBkeW5hbWljSW1wb3J0cy5tYXAoZmlsZT0+e2lmKCFmaWxlLmVuZHNXaXRoKCcuanMnKSl7cmV0dXJuIG51bGw7fXJldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlua1wiLHtyZWw6XCJwcmVsb2FkXCIsa2V5OmZpbGUsaHJlZjpgJHthc3NldFByZWZpeH0vX25leHQvJHtlbmNvZGVVUkkoZmlsZSl9JHtkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZ31gLGFzOlwic2NyaXB0XCIsbm9uY2U6dGhpcy5wcm9wcy5ub25jZSxjcm9zc09yaWdpbjp0aGlzLnByb3BzLmNyb3NzT3JpZ2lufHxwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOfSk7fSkvLyBGaWx0ZXIgb3V0IG51bGxlZCBzY3JpcHRzXG4uZmlsdGVyKEJvb2xlYW4pO31nZXRQcmVsb2FkTWFpbkxpbmtzKGZpbGVzKXtjb25zdHthc3NldFByZWZpeCxkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZyxzY3JpcHRMb2FkZXJ9PXRoaXMuY29udGV4dDtjb25zdCBwcmVsb2FkRmlsZXM9ZmlsZXMuYWxsRmlsZXMuZmlsdGVyKGZpbGU9PntyZXR1cm4gZmlsZS5lbmRzV2l0aCgnLmpzJyk7fSk7cmV0dXJuWy4uLihzY3JpcHRMb2FkZXIuYmVmb3JlSW50ZXJhY3RpdmV8fFtdKS5tYXAoZmlsZT0+LyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIse2tleTpmaWxlLnNyYyxub25jZTp0aGlzLnByb3BzLm5vbmNlLHJlbDpcInByZWxvYWRcIixocmVmOmZpbGUuc3JjLGFzOlwic2NyaXB0XCIsY3Jvc3NPcmlnaW46dGhpcy5wcm9wcy5jcm9zc09yaWdpbnx8cHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTn0pKSwuLi5wcmVsb2FkRmlsZXMubWFwKGZpbGU9Pi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlua1wiLHtrZXk6ZmlsZSxub25jZTp0aGlzLnByb3BzLm5vbmNlLHJlbDpcInByZWxvYWRcIixocmVmOmAke2Fzc2V0UHJlZml4fS9fbmV4dC8ke2VuY29kZVVSSShmaWxlKX0ke2Rldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nfWAsYXM6XCJzY3JpcHRcIixjcm9zc09yaWdpbjp0aGlzLnByb3BzLmNyb3NzT3JpZ2lufHxwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOfSkpXTt9Z2V0RHluYW1pY0NodW5rcyhmaWxlcyl7cmV0dXJuIGdldER5bmFtaWNDaHVua3ModGhpcy5jb250ZXh0LHRoaXMucHJvcHMsZmlsZXMpO31nZXRQcmVOZXh0U2NyaXB0cygpe3JldHVybiBnZXRQcmVOZXh0U2NyaXB0cyh0aGlzLmNvbnRleHQsdGhpcy5wcm9wcyk7fWdldFNjcmlwdHMoZmlsZXMpe3JldHVybiBnZXRTY3JpcHRzKHRoaXMuY29udGV4dCx0aGlzLnByb3BzLGZpbGVzKTt9Z2V0UG9seWZpbGxTY3JpcHRzKCl7cmV0dXJuIGdldFBvbHlmaWxsU2NyaXB0cyh0aGlzLmNvbnRleHQsdGhpcy5wcm9wcyk7fWhhbmRsZURvY3VtZW50U2NyaXB0TG9hZGVySXRlbXMoY2hpbGRyZW4pe2NvbnN0e3NjcmlwdExvYWRlcn09dGhpcy5jb250ZXh0O2NvbnN0IHNjcmlwdExvYWRlckl0ZW1zPVtdO2NvbnN0IGZpbHRlcmVkQ2hpbGRyZW49W107X3JlYWN0LmRlZmF1bHQuQ2hpbGRyZW4uZm9yRWFjaChjaGlsZHJlbixjaGlsZD0+e2lmKGNoaWxkLnR5cGU9PT1fc2NyaXB0LmRlZmF1bHQpe2lmKGNoaWxkLnByb3BzLnN0cmF0ZWd5PT09J2JlZm9yZUludGVyYWN0aXZlJyl7c2NyaXB0TG9hZGVyLmJlZm9yZUludGVyYWN0aXZlPShzY3JpcHRMb2FkZXIuYmVmb3JlSW50ZXJhY3RpdmV8fFtdKS5jb25jYXQoW3suLi5jaGlsZC5wcm9wc31dKTtyZXR1cm47fWVsc2UgaWYoWydsYXp5T25sb2FkJywnYWZ0ZXJJbnRlcmFjdGl2ZSddLmluY2x1ZGVzKGNoaWxkLnByb3BzLnN0cmF0ZWd5KSl7c2NyaXB0TG9hZGVySXRlbXMucHVzaChjaGlsZC5wcm9wcyk7cmV0dXJuO319ZmlsdGVyZWRDaGlsZHJlbi5wdXNoKGNoaWxkKTt9KTt0aGlzLmNvbnRleHQuX19ORVhUX0RBVEFfXy5zY3JpcHRMb2FkZXI9c2NyaXB0TG9hZGVySXRlbXM7cmV0dXJuIGZpbHRlcmVkQ2hpbGRyZW47fW1ha2VTdHlsZXNoZWV0SW5lcnQobm9kZSl7cmV0dXJuIF9yZWFjdC5kZWZhdWx0LkNoaWxkcmVuLm1hcChub2RlLGM9PntpZihjLnR5cGU9PT0nbGluaycmJmMucHJvcHNbJ2hyZWYnXSYmX2NvbnN0YW50cy5PUFRJTUlaRURfRk9OVF9QUk9WSURFUlMuc29tZSgoe3VybH0pPT5jLnByb3BzWydocmVmJ10uc3RhcnRzV2l0aCh1cmwpKSl7Y29uc3QgbmV3UHJvcHM9ey4uLihjLnByb3BzfHx7fSl9O25ld1Byb3BzWydkYXRhLWhyZWYnXT1uZXdQcm9wc1snaHJlZiddO25ld1Byb3BzWydocmVmJ109dW5kZWZpbmVkO3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jbG9uZUVsZW1lbnQoYyxuZXdQcm9wcyk7fWVsc2UgaWYoYy5wcm9wcyYmYy5wcm9wc1snY2hpbGRyZW4nXSl7Yy5wcm9wc1snY2hpbGRyZW4nXT10aGlzLm1ha2VTdHlsZXNoZWV0SW5lcnQoYy5wcm9wc1snY2hpbGRyZW4nXSk7fXJldHVybiBjO30pO31yZW5kZXIoKXt2YXIgX3RoaXMkcHJvcHMkbm9uY2UsX3RoaXMkcHJvcHMkbm9uY2UyO2NvbnN0e3N0eWxlcyxhbXBQYXRoLGluQW1wTW9kZSxoeWJyaWRBbXAsY2Fub25pY2FsQmFzZSxfX05FWFRfREFUQV9fLGRhbmdlcm91c0FzUGF0aCxoZWFkVGFncyx1bnN0YWJsZV9ydW50aW1lSlMsdW5zdGFibGVfSnNQcmVsb2FkLGRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nfT10aGlzLmNvbnRleHQ7Y29uc3QgZGlzYWJsZVJ1bnRpbWVKUz11bnN0YWJsZV9ydW50aW1lSlM9PT1mYWxzZTtjb25zdCBkaXNhYmxlSnNQcmVsb2FkPXVuc3RhYmxlX0pzUHJlbG9hZD09PWZhbHNlfHwhZGlzYWJsZU9wdGltaXplZExvYWRpbmc7dGhpcy5jb250ZXh0LmRvY0NvbXBvbmVudHNSZW5kZXJlZC5IZWFkPXRydWU7bGV0e2hlYWR9PXRoaXMuY29udGV4dDtsZXQgY3NzUHJlbG9hZHM9W107bGV0IG90aGVySGVhZEVsZW1lbnRzPVtdO2lmKGhlYWQpe2hlYWQuZm9yRWFjaChjPT57aWYoYyYmYy50eXBlPT09J2xpbmsnJiZjLnByb3BzWydyZWwnXT09PSdwcmVsb2FkJyYmYy5wcm9wc1snYXMnXT09PSdzdHlsZScpe2Nzc1ByZWxvYWRzLnB1c2goYyk7fWVsc2V7YyYmb3RoZXJIZWFkRWxlbWVudHMucHVzaChjKTt9fSk7aGVhZD1jc3NQcmVsb2Fkcy5jb25jYXQob3RoZXJIZWFkRWxlbWVudHMpO31sZXQgY2hpbGRyZW49X3JlYWN0LmRlZmF1bHQuQ2hpbGRyZW4udG9BcnJheSh0aGlzLnByb3BzLmNoaWxkcmVuKS5maWx0ZXIoQm9vbGVhbik7Ly8gc2hvdyBhIHdhcm5pbmcgaWYgSGVhZCBjb250YWlucyA8dGl0bGU+IChvbmx5IGluIGRldmVsb3BtZW50KVxuaWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2NoaWxkcmVuPV9yZWFjdC5kZWZhdWx0LkNoaWxkcmVuLm1hcChjaGlsZHJlbixjaGlsZD0+e3ZhciBfY2hpbGQkcHJvcHM7Y29uc3QgaXNSZWFjdEhlbG1ldD1jaGlsZD09bnVsbD92b2lkIDA6KF9jaGlsZCRwcm9wcz1jaGlsZC5wcm9wcyk9PW51bGw/dm9pZCAwOl9jaGlsZCRwcm9wc1snZGF0YS1yZWFjdC1oZWxtZXQnXTtpZighaXNSZWFjdEhlbG1ldCl7dmFyIF9jaGlsZCRwcm9wczI7aWYoKGNoaWxkPT1udWxsP3ZvaWQgMDpjaGlsZC50eXBlKT09PSd0aXRsZScpe2NvbnNvbGUud2FybihcIldhcm5pbmc6IDx0aXRsZT4gc2hvdWxkIG5vdCBiZSB1c2VkIGluIF9kb2N1bWVudC5qcydzIDxIZWFkPi4gaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbm8tZG9jdW1lbnQtdGl0bGVcIik7fWVsc2UgaWYoKGNoaWxkPT1udWxsP3ZvaWQgMDpjaGlsZC50eXBlKT09PSdtZXRhJyYmKGNoaWxkPT1udWxsP3ZvaWQgMDooX2NoaWxkJHByb3BzMj1jaGlsZC5wcm9wcyk9PW51bGw/dm9pZCAwOl9jaGlsZCRwcm9wczIubmFtZSk9PT0ndmlld3BvcnQnKXtjb25zb2xlLndhcm4oXCJXYXJuaW5nOiB2aWV3cG9ydCBtZXRhIHRhZ3Mgc2hvdWxkIG5vdCBiZSB1c2VkIGluIF9kb2N1bWVudC5qcydzIDxIZWFkPi4gaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbm8tZG9jdW1lbnQtdmlld3BvcnQtbWV0YVwiKTt9fXJldHVybiBjaGlsZDt9KTtpZih0aGlzLnByb3BzLmNyb3NzT3JpZ2luKWNvbnNvbGUud2FybignV2FybmluZzogYEhlYWRgIGF0dHJpYnV0ZSBgY3Jvc3NPcmlnaW5gIGlzIGRlcHJlY2F0ZWQuIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2RvYy1jcm9zc29yaWdpbi1kZXByZWNhdGVkJyk7fWlmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J2RldmVsb3BtZW50JyYmcHJvY2Vzcy5lbnYuX19ORVhUX09QVElNSVpFX0ZPTlRTJiYhaW5BbXBNb2RlKXtjaGlsZHJlbj10aGlzLm1ha2VTdHlsZXNoZWV0SW5lcnQoY2hpbGRyZW4pO31jaGlsZHJlbj10aGlzLmhhbmRsZURvY3VtZW50U2NyaXB0TG9hZGVySXRlbXMoY2hpbGRyZW4pO2xldCBoYXNBbXBodG1sUmVsPWZhbHNlO2xldCBoYXNDYW5vbmljYWxSZWw9ZmFsc2U7Ly8gc2hvdyB3YXJuaW5nIGFuZCByZW1vdmUgY29uZmxpY3RpbmcgYW1wIGhlYWQgdGFnc1xuaGVhZD1fcmVhY3QuZGVmYXVsdC5DaGlsZHJlbi5tYXAoaGVhZHx8W10sY2hpbGQ9PntpZighY2hpbGQpcmV0dXJuIGNoaWxkO2NvbnN0e3R5cGUscHJvcHN9PWNoaWxkO2lmKGluQW1wTW9kZSl7bGV0IGJhZFByb3A9Jyc7aWYodHlwZT09PSdtZXRhJyYmcHJvcHMubmFtZT09PSd2aWV3cG9ydCcpe2JhZFByb3A9J25hbWU9XCJ2aWV3cG9ydFwiJzt9ZWxzZSBpZih0eXBlPT09J2xpbmsnJiZwcm9wcy5yZWw9PT0nY2Fub25pY2FsJyl7aGFzQ2Fub25pY2FsUmVsPXRydWU7fWVsc2UgaWYodHlwZT09PSdzY3JpcHQnKXsvLyBvbmx5IGJsb2NrIGlmXG4vLyAxLiBpdCBoYXMgYSBzcmMgYW5kIGlzbid0IHBvaW50aW5nIHRvIGFtcHByb2plY3QncyBDRE5cbi8vIDIuIGl0IGlzIHVzaW5nIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIHdpdGhvdXQgYSB0eXBlIG9yXG4vLyBhIHR5cGUgb2YgdGV4dC9qYXZhc2NyaXB0XG5pZihwcm9wcy5zcmMmJnByb3BzLnNyYy5pbmRleE9mKCdhbXBwcm9qZWN0Jyk8LTF8fHByb3BzLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MJiYoIXByb3BzLnR5cGV8fHByb3BzLnR5cGU9PT0ndGV4dC9qYXZhc2NyaXB0Jykpe2JhZFByb3A9JzxzY3JpcHQnO09iamVjdC5rZXlzKHByb3BzKS5mb3JFYWNoKHByb3A9PntiYWRQcm9wKz1gICR7cHJvcH09XCIke3Byb3BzW3Byb3BdfVwiYDt9KTtiYWRQcm9wKz0nLz4nO319aWYoYmFkUHJvcCl7Y29uc29sZS53YXJuKGBGb3VuZCBjb25mbGljdGluZyBhbXAgdGFnIFwiJHtjaGlsZC50eXBlfVwiIHdpdGggY29uZmxpY3RpbmcgcHJvcCAke2JhZFByb3B9IGluICR7X19ORVhUX0RBVEFfXy5wYWdlfS4gaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvY29uZmxpY3RpbmctYW1wLXRhZ2ApO3JldHVybiBudWxsO319ZWxzZXsvLyBub24tYW1wIG1vZGVcbmlmKHR5cGU9PT0nbGluaycmJnByb3BzLnJlbD09PSdhbXBodG1sJyl7aGFzQW1waHRtbFJlbD10cnVlO319cmV0dXJuIGNoaWxkO30pOy8vIHRyeSB0byBwYXJzZSBzdHlsZXMgZnJvbSBmcmFnbWVudCBmb3IgYmFja3dhcmRzIGNvbXBhdFxuY29uc3QgY3VyU3R5bGVzPUFycmF5LmlzQXJyYXkoc3R5bGVzKT9zdHlsZXM6W107aWYoaW5BbXBNb2RlJiZzdHlsZXMmJi8vIEB0cy1pZ25vcmUgUHJvcGVydHkgJ3Byb3BzJyBkb2VzIG5vdCBleGlzdCBvbiB0eXBlIFJlYWN0RWxlbWVudFxuc3R5bGVzLnByb3BzJiYvLyBAdHMtaWdub3JlIFByb3BlcnR5ICdwcm9wcycgZG9lcyBub3QgZXhpc3Qgb24gdHlwZSBSZWFjdEVsZW1lbnRcbkFycmF5LmlzQXJyYXkoc3R5bGVzLnByb3BzLmNoaWxkcmVuKSl7Y29uc3QgaGFzU3R5bGVzPWVsPT57dmFyIF9lbCRwcm9wcyxfZWwkcHJvcHMkZGFuZ2Vyb3VzbHk7cmV0dXJuIGVsPT1udWxsP3ZvaWQgMDooX2VsJHByb3BzPWVsLnByb3BzKT09bnVsbD92b2lkIDA6KF9lbCRwcm9wcyRkYW5nZXJvdXNseT1fZWwkcHJvcHMuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwpPT1udWxsP3ZvaWQgMDpfZWwkcHJvcHMkZGFuZ2Vyb3VzbHkuX19odG1sO307Ly8gQHRzLWlnbm9yZSBQcm9wZXJ0eSAncHJvcHMnIGRvZXMgbm90IGV4aXN0IG9uIHR5cGUgUmVhY3RFbGVtZW50XG5zdHlsZXMucHJvcHMuY2hpbGRyZW4uZm9yRWFjaChjaGlsZD0+e2lmKEFycmF5LmlzQXJyYXkoY2hpbGQpKXtjaGlsZC5mb3JFYWNoKGVsPT5oYXNTdHlsZXMoZWwpJiZjdXJTdHlsZXMucHVzaChlbCkpO31lbHNlIGlmKGhhc1N0eWxlcyhjaGlsZCkpe2N1clN0eWxlcy5wdXNoKGNoaWxkKTt9fSk7fWNvbnN0IGZpbGVzPWdldERvY3VtZW50RmlsZXModGhpcy5jb250ZXh0LmJ1aWxkTWFuaWZlc3QsdGhpcy5jb250ZXh0Ll9fTkVYVF9EQVRBX18ucGFnZSxpbkFtcE1vZGUpO3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaGVhZFwiLHRoaXMucHJvcHMsdGhpcy5jb250ZXh0LmlzRGV2ZWxvcG1lbnQmJi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9yZWFjdC5kZWZhdWx0LkZyYWdtZW50LG51bGwsLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiLHtcImRhdGEtbmV4dC1oaWRlLWZvdWNcIjp0cnVlLFwiZGF0YS1hbXBkZXZtb2RlXCI6aW5BbXBNb2RlPyd0cnVlJzp1bmRlZmluZWQsZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6e19faHRtbDpgYm9keXtkaXNwbGF5Om5vbmV9YH19KSwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcIm5vc2NyaXB0XCIse1wiZGF0YS1uZXh0LWhpZGUtZm91Y1wiOnRydWUsXCJkYXRhLWFtcGRldm1vZGVcIjppbkFtcE1vZGU/J3RydWUnOnVuZGVmaW5lZH0sLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiLHtkYW5nZXJvdXNseVNldElubmVySFRNTDp7X19odG1sOmBib2R5e2Rpc3BsYXk6YmxvY2t9YH19KSkpLGNoaWxkcmVuLHByb2Nlc3MuZW52Ll9fTkVYVF9PUFRJTUlaRV9GT05UUyYmLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIse25hbWU6XCJuZXh0LWZvbnQtcHJlY29ubmVjdFwifSksaGVhZCwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcIm1ldGFcIix7bmFtZTpcIm5leHQtaGVhZC1jb3VudFwiLGNvbnRlbnQ6X3JlYWN0LmRlZmF1bHQuQ2hpbGRyZW4uY291bnQoaGVhZHx8W10pLnRvU3RyaW5nKCl9KSxpbkFtcE1vZGUmJi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9yZWFjdC5kZWZhdWx0LkZyYWdtZW50LG51bGwsLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIse25hbWU6XCJ2aWV3cG9ydFwiLGNvbnRlbnQ6XCJ3aWR0aD1kZXZpY2Utd2lkdGgsbWluaW11bS1zY2FsZT0xLGluaXRpYWwtc2NhbGU9MVwifSksIWhhc0Nhbm9uaWNhbFJlbCYmLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIse3JlbDpcImNhbm9uaWNhbFwiLGhyZWY6Y2Fub25pY2FsQmFzZSsoMCxfdXRpbHMyLmNsZWFuQW1wUGF0aCkoZGFuZ2Vyb3VzQXNQYXRoKX0pLC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlua1wiLHtyZWw6XCJwcmVsb2FkXCIsYXM6XCJzY3JpcHRcIixocmVmOlwiaHR0cHM6Ly9jZG4uYW1wcHJvamVjdC5vcmcvdjAuanNcIn0pLHN0eWxlcyYmLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiLHtcImFtcC1jdXN0b21cIjpcIlwiLGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOntfX2h0bWw6Y3VyU3R5bGVzLm1hcChzdHlsZT0+c3R5bGUucHJvcHMuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwuX19odG1sKS5qb2luKCcnKS5yZXBsYWNlKC9cXC9cXCojIHNvdXJjZU1hcHBpbmdVUkw9LipcXCpcXC8vZywnJykucmVwbGFjZSgvXFwvXFwqQCBzb3VyY2VVUkw9Lio/XFwqXFwvL2csJycpfX0pLC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIix7XCJhbXAtYm9pbGVycGxhdGVcIjpcIlwiLGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOntfX2h0bWw6YGJvZHl7LXdlYmtpdC1hbmltYXRpb246LWFtcC1zdGFydCA4cyBzdGVwcygxLGVuZCkgMHMgMSBub3JtYWwgYm90aDstbW96LWFuaW1hdGlvbjotYW1wLXN0YXJ0IDhzIHN0ZXBzKDEsZW5kKSAwcyAxIG5vcm1hbCBib3RoOy1tcy1hbmltYXRpb246LWFtcC1zdGFydCA4cyBzdGVwcygxLGVuZCkgMHMgMSBub3JtYWwgYm90aDthbmltYXRpb246LWFtcC1zdGFydCA4cyBzdGVwcygxLGVuZCkgMHMgMSBub3JtYWwgYm90aH1ALXdlYmtpdC1rZXlmcmFtZXMgLWFtcC1zdGFydHtmcm9te3Zpc2liaWxpdHk6aGlkZGVufXRve3Zpc2liaWxpdHk6dmlzaWJsZX19QC1tb3ota2V5ZnJhbWVzIC1hbXAtc3RhcnR7ZnJvbXt2aXNpYmlsaXR5OmhpZGRlbn10b3t2aXNpYmlsaXR5OnZpc2libGV9fUAtbXMta2V5ZnJhbWVzIC1hbXAtc3RhcnR7ZnJvbXt2aXNpYmlsaXR5OmhpZGRlbn10b3t2aXNpYmlsaXR5OnZpc2libGV9fUAtby1rZXlmcmFtZXMgLWFtcC1zdGFydHtmcm9te3Zpc2liaWxpdHk6aGlkZGVufXRve3Zpc2liaWxpdHk6dmlzaWJsZX19QGtleWZyYW1lcyAtYW1wLXN0YXJ0e2Zyb217dmlzaWJpbGl0eTpoaWRkZW59dG97dmlzaWJpbGl0eTp2aXNpYmxlfX1gfX0pLC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibm9zY3JpcHRcIixudWxsLC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIix7XCJhbXAtYm9pbGVycGxhdGVcIjpcIlwiLGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOntfX2h0bWw6YGJvZHl7LXdlYmtpdC1hbmltYXRpb246bm9uZTstbW96LWFuaW1hdGlvbjpub25lOy1tcy1hbmltYXRpb246bm9uZTthbmltYXRpb246bm9uZX1gfX0pKSwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiLHthc3luYzp0cnVlLHNyYzpcImh0dHBzOi8vY2RuLmFtcHByb2plY3Qub3JnL3YwLmpzXCJ9KSksIWluQW1wTW9kZSYmLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX3JlYWN0LmRlZmF1bHQuRnJhZ21lbnQsbnVsbCwhaGFzQW1waHRtbFJlbCYmaHlicmlkQW1wJiYvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpbmtcIix7cmVsOlwiYW1waHRtbFwiLGhyZWY6Y2Fub25pY2FsQmFzZStnZXRBbXBQYXRoKGFtcFBhdGgsZGFuZ2Vyb3VzQXNQYXRoKX0pLCFwcm9jZXNzLmVudi5fX05FWFRfT1BUSU1JWkVfQ1NTJiZ0aGlzLmdldENzc0xpbmtzKGZpbGVzKSwhcHJvY2Vzcy5lbnYuX19ORVhUX09QVElNSVpFX0NTUyYmLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJub3NjcmlwdFwiLHtcImRhdGEtbi1jc3NcIjooX3RoaXMkcHJvcHMkbm9uY2U9dGhpcy5wcm9wcy5ub25jZSkhPW51bGw/X3RoaXMkcHJvcHMkbm9uY2U6Jyd9KSxwcm9jZXNzLmVudi5fX05FWFRfT1BUSU1JWkVfSU1BR0VTJiYvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcIm1ldGFcIix7bmFtZTpcIm5leHQtaW1hZ2UtcHJlbG9hZFwifSksIWRpc2FibGVSdW50aW1lSlMmJiFkaXNhYmxlSnNQcmVsb2FkJiZ0aGlzLmdldFByZWxvYWREeW5hbWljQ2h1bmtzKCksIWRpc2FibGVSdW50aW1lSlMmJiFkaXNhYmxlSnNQcmVsb2FkJiZ0aGlzLmdldFByZWxvYWRNYWluTGlua3MoZmlsZXMpLCFkaXNhYmxlT3B0aW1pemVkTG9hZGluZyYmIWRpc2FibGVSdW50aW1lSlMmJnRoaXMuZ2V0UG9seWZpbGxTY3JpcHRzKCksIWRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nJiYhZGlzYWJsZVJ1bnRpbWVKUyYmdGhpcy5nZXRQcmVOZXh0U2NyaXB0cygpLCFkaXNhYmxlT3B0aW1pemVkTG9hZGluZyYmIWRpc2FibGVSdW50aW1lSlMmJnRoaXMuZ2V0RHluYW1pY0NodW5rcyhmaWxlcyksIWRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nJiYhZGlzYWJsZVJ1bnRpbWVKUyYmdGhpcy5nZXRTY3JpcHRzKGZpbGVzKSxwcm9jZXNzLmVudi5fX05FWFRfT1BUSU1JWkVfQ1NTJiZ0aGlzLmdldENzc0xpbmtzKGZpbGVzKSxwcm9jZXNzLmVudi5fX05FWFRfT1BUSU1JWkVfQ1NTJiYvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcIm5vc2NyaXB0XCIse1wiZGF0YS1uLWNzc1wiOihfdGhpcyRwcm9wcyRub25jZTI9dGhpcy5wcm9wcy5ub25jZSkhPW51bGw/X3RoaXMkcHJvcHMkbm9uY2UyOicnfSksdGhpcy5jb250ZXh0LmlzRGV2ZWxvcG1lbnQmJi8qI19fUFVSRV9fKi8gLy8gdGhpcyBlbGVtZW50IGlzIHVzZWQgdG8gbW91bnQgZGV2ZWxvcG1lbnQgc3R5bGVzIHNvIHRoZVxuLy8gb3JkZXJpbmcgbWF0Y2hlcyBwcm9kdWN0aW9uXG4vLyAoYnkgZGVmYXVsdCwgc3R5bGUtbG9hZGVyIGluamVjdHMgYXQgdGhlIGJvdHRvbSBvZiA8aGVhZCAvPilcbl9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJub3NjcmlwdFwiLHtpZDpcIl9fbmV4dF9jc3NfX0RPX05PVF9VU0VfX1wifSksc3R5bGVzfHxudWxsKSwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfcmVhY3QuZGVmYXVsdC5GcmFnbWVudCx7fSwuLi4oaGVhZFRhZ3N8fFtdKSkpO319ZXhwb3J0cy5IZWFkPUhlYWQ7SGVhZC5jb250ZXh0VHlwZT1fZG9jdW1lbnRDb250ZXh0LkRvY3VtZW50Q29udGV4dDtIZWFkLnByb3BUeXBlcz17bm9uY2U6X3Byb3BUeXBlcy5kZWZhdWx0LnN0cmluZyxjcm9zc09yaWdpbjpfcHJvcFR5cGVzLmRlZmF1bHQuc3RyaW5nfTtmdW5jdGlvbiBNYWluKCl7Y29uc3R7aW5BbXBNb2RlLGh0bWwsZG9jQ29tcG9uZW50c1JlbmRlcmVkfT0oMCxfcmVhY3QudXNlQ29udGV4dCkoX2RvY3VtZW50Q29udGV4dC5Eb2N1bWVudENvbnRleHQpO2RvY0NvbXBvbmVudHNSZW5kZXJlZC5NYWluPXRydWU7aWYoaW5BbXBNb2RlKXJldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9yZWFjdC5kZWZhdWx0LkZyYWdtZW50LG51bGwsX2NvbnN0YW50cy5BTVBfUkVOREVSX1RBUkdFVCk7cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7aWQ6XCJfX25leHRcIixkYW5nZXJvdXNseVNldElubmVySFRNTDp7X19odG1sOmh0bWx9fSk7fWNsYXNzIE5leHRTY3JpcHQgZXh0ZW5kcyBfcmVhY3QuQ29tcG9uZW50e2NvbnN0cnVjdG9yKC4uLmFyZ3Mpe3N1cGVyKC4uLmFyZ3MpO3RoaXMuY29udGV4dD12b2lkIDA7fWdldER5bmFtaWNDaHVua3MoZmlsZXMpe3JldHVybiBnZXREeW5hbWljQ2h1bmtzKHRoaXMuY29udGV4dCx0aGlzLnByb3BzLGZpbGVzKTt9Z2V0UHJlTmV4dFNjcmlwdHMoKXtyZXR1cm4gZ2V0UHJlTmV4dFNjcmlwdHModGhpcy5jb250ZXh0LHRoaXMucHJvcHMpO31nZXRTY3JpcHRzKGZpbGVzKXtyZXR1cm4gZ2V0U2NyaXB0cyh0aGlzLmNvbnRleHQsdGhpcy5wcm9wcyxmaWxlcyk7fWdldFBvbHlmaWxsU2NyaXB0cygpe3JldHVybiBnZXRQb2x5ZmlsbFNjcmlwdHModGhpcy5jb250ZXh0LHRoaXMucHJvcHMpO31zdGF0aWMgZ2V0SW5saW5lU2NyaXB0U291cmNlKGRvY3VtZW50UHJvcHMpe2NvbnN0e19fTkVYVF9EQVRBX199PWRvY3VtZW50UHJvcHM7dHJ5e2NvbnN0IGRhdGE9SlNPTi5zdHJpbmdpZnkoX19ORVhUX0RBVEFfXyk7cmV0dXJuKDAsX2h0bWxlc2NhcGUuaHRtbEVzY2FwZUpzb25TdHJpbmcpKGRhdGEpO31jYXRjaChlcnIpe2lmKGVyci5tZXNzYWdlLmluZGV4T2YoJ2NpcmN1bGFyIHN0cnVjdHVyZScpKXt0aHJvdyBuZXcgRXJyb3IoYENpcmN1bGFyIHN0cnVjdHVyZSBpbiBcImdldEluaXRpYWxQcm9wc1wiIHJlc3VsdCBvZiBwYWdlIFwiJHtfX05FWFRfREFUQV9fLnBhZ2V9XCIuIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2NpcmN1bGFyLXN0cnVjdHVyZWApO310aHJvdyBlcnI7fX1yZW5kZXIoKXtjb25zdHthc3NldFByZWZpeCxpbkFtcE1vZGUsYnVpbGRNYW5pZmVzdCx1bnN0YWJsZV9ydW50aW1lSlMsZG9jQ29tcG9uZW50c1JlbmRlcmVkLGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nLGRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nfT10aGlzLmNvbnRleHQ7Y29uc3QgZGlzYWJsZVJ1bnRpbWVKUz11bnN0YWJsZV9ydW50aW1lSlM9PT1mYWxzZTtkb2NDb21wb25lbnRzUmVuZGVyZWQuTmV4dFNjcmlwdD10cnVlO2lmKGluQW1wTW9kZSl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlY9PT0ncHJvZHVjdGlvbicpe3JldHVybiBudWxsO31jb25zdCBhbXBEZXZGaWxlcz1bLi4uYnVpbGRNYW5pZmVzdC5kZXZGaWxlcywuLi5idWlsZE1hbmlmZXN0LnBvbHlmaWxsRmlsZXMsLi4uYnVpbGRNYW5pZmVzdC5hbXBEZXZGaWxlc107cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX3JlYWN0LmRlZmF1bHQuRnJhZ21lbnQsbnVsbCxkaXNhYmxlUnVudGltZUpTP251bGw6LyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIix7aWQ6XCJfX05FWFRfREFUQV9fXCIsdHlwZTpcImFwcGxpY2F0aW9uL2pzb25cIixub25jZTp0aGlzLnByb3BzLm5vbmNlLGNyb3NzT3JpZ2luOnRoaXMucHJvcHMuY3Jvc3NPcmlnaW58fHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU4sZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6e19faHRtbDpOZXh0U2NyaXB0LmdldElubGluZVNjcmlwdFNvdXJjZSh0aGlzLmNvbnRleHQpfSxcImRhdGEtYW1wZGV2bW9kZVwiOnRydWV9KSxhbXBEZXZGaWxlcy5tYXAoZmlsZT0+LyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIix7a2V5OmZpbGUsc3JjOmAke2Fzc2V0UHJlZml4fS9fbmV4dC8ke2ZpbGV9JHtkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZ31gLG5vbmNlOnRoaXMucHJvcHMubm9uY2UsY3Jvc3NPcmlnaW46dGhpcy5wcm9wcy5jcm9zc09yaWdpbnx8cHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTixcImRhdGEtYW1wZGV2bW9kZVwiOnRydWV9KSkpO31pZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7aWYodGhpcy5wcm9wcy5jcm9zc09yaWdpbiljb25zb2xlLndhcm4oJ1dhcm5pbmc6IGBOZXh0U2NyaXB0YCBhdHRyaWJ1dGUgYGNyb3NzT3JpZ2luYCBpcyBkZXByZWNhdGVkLiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9kb2MtY3Jvc3NvcmlnaW4tZGVwcmVjYXRlZCcpO31jb25zdCBmaWxlcz1nZXREb2N1bWVudEZpbGVzKHRoaXMuY29udGV4dC5idWlsZE1hbmlmZXN0LHRoaXMuY29udGV4dC5fX05FWFRfREFUQV9fLnBhZ2UsaW5BbXBNb2RlKTtyZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfcmVhY3QuZGVmYXVsdC5GcmFnbWVudCxudWxsLCFkaXNhYmxlUnVudGltZUpTJiZidWlsZE1hbmlmZXN0LmRldkZpbGVzP2J1aWxkTWFuaWZlc3QuZGV2RmlsZXMubWFwKGZpbGU9Pi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIse2tleTpmaWxlLHNyYzpgJHthc3NldFByZWZpeH0vX25leHQvJHtlbmNvZGVVUkkoZmlsZSl9JHtkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZ31gLG5vbmNlOnRoaXMucHJvcHMubm9uY2UsY3Jvc3NPcmlnaW46dGhpcy5wcm9wcy5jcm9zc09yaWdpbnx8cHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTn0pKTpudWxsLGRpc2FibGVSdW50aW1lSlM/bnVsbDovKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiLHtpZDpcIl9fTkVYVF9EQVRBX19cIix0eXBlOlwiYXBwbGljYXRpb24vanNvblwiLG5vbmNlOnRoaXMucHJvcHMubm9uY2UsY3Jvc3NPcmlnaW46dGhpcy5wcm9wcy5jcm9zc09yaWdpbnx8cHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTixkYW5nZXJvdXNseVNldElubmVySFRNTDp7X19odG1sOk5leHRTY3JpcHQuZ2V0SW5saW5lU2NyaXB0U291cmNlKHRoaXMuY29udGV4dCl9fSksZGlzYWJsZU9wdGltaXplZExvYWRpbmcmJiFkaXNhYmxlUnVudGltZUpTJiZ0aGlzLmdldFBvbHlmaWxsU2NyaXB0cygpLGRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nJiYhZGlzYWJsZVJ1bnRpbWVKUyYmdGhpcy5nZXRQcmVOZXh0U2NyaXB0cygpLGRpc2FibGVPcHRpbWl6ZWRMb2FkaW5nJiYhZGlzYWJsZVJ1bnRpbWVKUyYmdGhpcy5nZXREeW5hbWljQ2h1bmtzKGZpbGVzKSxkaXNhYmxlT3B0aW1pemVkTG9hZGluZyYmIWRpc2FibGVSdW50aW1lSlMmJnRoaXMuZ2V0U2NyaXB0cyhmaWxlcykpO319ZXhwb3J0cy5OZXh0U2NyaXB0PU5leHRTY3JpcHQ7TmV4dFNjcmlwdC5jb250ZXh0VHlwZT1fZG9jdW1lbnRDb250ZXh0LkRvY3VtZW50Q29udGV4dDtOZXh0U2NyaXB0LnByb3BUeXBlcz17bm9uY2U6X3Byb3BUeXBlcy5kZWZhdWx0LnN0cmluZyxjcm9zc09yaWdpbjpfcHJvcFR5cGVzLmRlZmF1bHQuc3RyaW5nfTtOZXh0U2NyaXB0LnNhZmFyaU5vbW9kdWxlRml4PSchZnVuY3Rpb24oKXt2YXIgZT1kb2N1bWVudCx0PWUuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtpZighKFwibm9Nb2R1bGVcImluIHQpJiZcIm9uYmVmb3JlbG9hZFwiaW4gdCl7dmFyIG49ITE7ZS5hZGRFdmVudExpc3RlbmVyKFwiYmVmb3JlbG9hZFwiLGZ1bmN0aW9uKGUpe2lmKGUudGFyZ2V0PT09dCluPSEwO2Vsc2UgaWYoIWUudGFyZ2V0Lmhhc0F0dHJpYnV0ZShcIm5vbW9kdWxlXCIpfHwhbilyZXR1cm47ZS5wcmV2ZW50RGVmYXVsdCgpfSwhMCksdC50eXBlPVwibW9kdWxlXCIsdC5zcmM9XCIuXCIsZS5oZWFkLmFwcGVuZENoaWxkKHQpLHQucmVtb3ZlKCl9fSgpOyc7ZnVuY3Rpb24gZ2V0QW1wUGF0aChhbXBQYXRoLGFzUGF0aCl7cmV0dXJuIGFtcFBhdGh8fGAke2FzUGF0aH0ke2FzUGF0aC5pbmNsdWRlcygnPycpPycmJzonPyd9YW1wPTFgO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPV9kb2N1bWVudC5qcy5tYXAiLCJpbXBvcnQgRG9jdW1lbnQsIHsgSHRtbCwgSGVhZCwgTWFpbiwgTmV4dFNjcmlwdCB9IGZyb20gXCJuZXh0L2RvY3VtZW50XCI7XHJcbmltcG9ydCB7IEdBX1RSQUNLSU5HX0lEIH0gZnJvbSBcImxpYi9ndGFnXCI7XHJcblxyXG5jbGFzcyBNeURvY3VtZW50IGV4dGVuZHMgRG9jdW1lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxIdG1sIGxhbmc9XCJlblwiPlxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIHR5cGU9XCJpbWFnZS9wbmdcIiBzaXplcz1cIjMyeDMyXCIgaHJlZj1cIi9mYXZpY29uLTMyeDMyLnBuZ1wiIC8+XHJcbiAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3BuZ1wiIHNpemVzPVwiMTZ4MTZcIiBocmVmPVwiL2Zhdmljb24tMTZ4MTYucG5nXCIgLz5cclxuICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiB0eXBlPVwiaW1hZ2UvcG5nXCIgc2l6ZXM9XCIxOTJ4MTkyXCIgaHJlZj1cIi9mYXZpY29uLTE5MngxOTIucG5nXCIgLz5cclxuICAgICAgICAgIDxsaW5rXHJcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUludGVyOndnaHRANDAwOzYwMDs3MDAmZGlzcGxheT1zd2FwXCJcclxuICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgey8qIEdsb2JhbCBTaXRlIFRhZyAoZ3RhZy5qcykgLSBHb29nbGUgQW5hbHl0aWNzICovfVxyXG4gICAgICAgICAgPHNjcmlwdFxyXG4gICAgICAgICAgICBhc3luY1xyXG4gICAgICAgICAgICBzcmM9e2BodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbS9ndGFnL2pzP2lkPSR7R0FfVFJBQ0tJTkdfSUR9YH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8c2NyaXB0XHJcbiAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XHJcbiAgICAgICAgICAgICAgX19odG1sOiBgXHJcbiAgICAgICAgICAgIHdpbmRvdy5kYXRhTGF5ZXIgPSB3aW5kb3cuZGF0YUxheWVyIHx8IFtdO1xyXG4gICAgICAgICAgICBmdW5jdGlvbiBndGFnKCl7ZGF0YUxheWVyLnB1c2goYXJndW1lbnRzKTt9XHJcbiAgICAgICAgICAgIGd0YWcoJ2pzJywgbmV3IERhdGUoKSk7XHJcbiAgICAgICAgICAgIGd0YWcoJ2NvbmZpZycsICcke0dBX1RSQUNLSU5HX0lEfScsIHtcclxuICAgICAgICAgICAgICBwYWdlX3BhdGg6IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICBgXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgICAgICA8Ym9keT5cclxuICAgICAgICAgIDxNYWluIC8+XHJcbiAgICAgICAgICA8TmV4dFNjcmlwdCAvPlxyXG4gICAgICAgIDwvYm9keT5cclxuICAgICAgPC9IdG1sPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15RG9jdW1lbnQ7XHJcbiIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuaHRtbEVzY2FwZUpzb25TdHJpbmc9aHRtbEVzY2FwZUpzb25TdHJpbmc7Ly8gVGhpcyB1dGlsaXR5IGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS96ZXJ0b3NoL2h0bWxlc2NhcGVcbi8vIExpY2Vuc2U6IGh0dHBzOi8vZ2l0aHViLmNvbS96ZXJ0b3NoL2h0bWxlc2NhcGUvYmxvYi8wNTI3Y2E3MTU2YTUyNGQyNTYxMDFiYjMxMGE5Zjk3MGY2MzA3OGFkL0xJQ0VOU0VcbmNvbnN0IEVTQ0FQRV9MT09LVVA9eycmJzonXFxcXHUwMDI2JywnPic6J1xcXFx1MDAzZScsJzwnOidcXFxcdTAwM2MnLCdcXHUyMDI4JzonXFxcXHUyMDI4JywnXFx1MjAyOSc6J1xcXFx1MjAyOSd9O2NvbnN0IEVTQ0FQRV9SRUdFWD0vWyY+PFxcdTIwMjhcXHUyMDI5XS9nO2Z1bmN0aW9uIGh0bWxFc2NhcGVKc29uU3RyaW5nKHN0cil7cmV0dXJuIHN0ci5yZXBsYWNlKEVTQ0FQRV9SRUdFWCxtYXRjaD0+RVNDQVBFX0xPT0tVUFttYXRjaF0pO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWh0bWxlc2NhcGUuanMubWFwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvcGFnZXMvX2RvY3VtZW50JylcbiIsImZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZXh0ZW5kczsiLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsImZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSB7fTtcbiAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICB2YXIga2V5LCBpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvY29uc3RhbnRzLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2RvY3VtZW50LWNvbnRleHQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvaGVhZC1tYW5hZ2VyLWNvbnRleHQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXMuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvdXRpbHMuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1qc3gvc2VydmVyXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9