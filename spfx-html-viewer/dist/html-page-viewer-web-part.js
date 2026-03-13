define("b7e3f2a1-c4d5-4e6f-8a9b-0c1d2e3f4a5b_1.0.0", ["@microsoft/sp-property-pane","@microsoft/sp-core-library","HtmlPageViewerWebPartStrings","@microsoft/sp-webpart-base","react","react-dom"], function(__WEBPACK_EXTERNAL_MODULE__26ea__, __WEBPACK_EXTERNAL_MODULE_UWqr__, __WEBPACK_EXTERNAL_MODULE_ZfLX__, __WEBPACK_EXTERNAL_MODULE_br4S__, __WEBPACK_EXTERNAL_MODULE_cDcd__, __WEBPACK_EXTERNAL_MODULE_faye__) { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "XjVj");
/******/ })
/************************************************************************/
/******/ ({

/***/ "26ea":
/*!**********************************************!*\
  !*** external "@microsoft/sp-property-pane" ***!
  \**********************************************/
/*! no static exports found */
/*! exports used: PropertyPaneLabel, PropertyPaneTextField */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__26ea__;

/***/ }),

/***/ "6o6t":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ref--6-2!./lib/webparts/htmlPageViewer/components/HtmlPageViewer.module.css ***!
  \********************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "JPst");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".htmlPageViewer_0b997830{font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;padding:12px 16px}.htmlPageViewer_0b997830 .placeholder_0b997830{background-color:\"[theme:neutralLighterAlt, default: #faf9f8]\";border:2px dashed;border-radius:8px;color:\"[theme:neutralSecondary, default: #605e5c]\";padding:32px 24px;text-align:center}.htmlPageViewer_0b997830 .placeholderIcon_0b997830{font-size:2.5rem;margin-bottom:12px}.htmlPageViewer_0b997830 .placeholderText_0b997830{font-size:1rem;font-weight:600;margin:0 0 8px 0}.htmlPageViewer_0b997830 .placeholderHint_0b997830{color:\"[theme:neutralTertiary, default: #8a8886]\";font-size:.85rem;margin:0}.htmlPageViewer_0b997830 .pageLink_0b997830{-ms-flex-align:center;align-items:center;background-color:\"[theme:neutralLighterAlt, default: #faf9f8]\";border:1px solid;border-radius:6px;color:\"[theme:themePrimary, default: #0078d4]\";cursor:pointer;display:-ms-inline-flexbox;display:inline-flex;font-size:.95rem;font-weight:600;gap:8px;padding:10px 20px;text-decoration:none;transition:background-color .15s ease,border-color .15s ease,box-shadow .15s ease}.htmlPageViewer_0b997830 .pageLink_0b997830:hover{background-color:\"[theme:neutralLighter, default: #f3f2f1]\";border-color:\"[theme:themePrimary, default: #0078d4]\";box-shadow:0 2px 8px rgba(0,120,212,.15);color:\"[theme:themeDarkAlt, default: #106ebe]\";text-decoration:none}.htmlPageViewer_0b997830 .pageLink_0b997830:active{background-color:\"[theme:neutralLight, default: #edebe9]\"}.htmlPageViewer_0b997830 .linkIcon_0b997830{font-size:1.2rem}.htmlPageViewer_0b997830 .externalIcon_0b997830{font-size:.8rem;margin-left:2px;opacity:.55}.htmlPageViewer_0b997830 .loadingBar_0b997830{background-color:\"[theme:neutralLight, default: #edebe9]\";border-radius:2px;height:3px;margin-top:8px;overflow:hidden}.htmlPageViewer_0b997830 .loadingProgress_0b997830{animation:loadSlide_0b997830 1.2s ease-in-out infinite;background-color:\"[theme:themePrimary, default: #0078d4]\";border-radius:2px;height:100%;width:30%}.htmlPageViewer_0b997830 .errorMessage_0b997830{background-color:#fde7e9;border-radius:4px;color:#a80000;font-size:.82rem;line-height:1.4;margin-top:8px;padding:8px 12px}@keyframes loadSlide_0b997830{0%{transform:translateX(-100%)}to{transform:translateX(400%)}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "JPst":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "UWqr":
/*!*********************************************!*\
  !*** external "@microsoft/sp-core-library" ***!
  \*********************************************/
/*! no static exports found */
/*! exports used: Version */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_UWqr__;

/***/ }),

/***/ "UxGz":
/*!**************************************************************************!*\
  !*** ./node_modules/@microsoft/load-themed-styles/lib-commonjs/index.js ***!
  \**************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
// Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
// See LICENSE in the project root for license information.
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClearStyleOptions = exports.Mode = void 0;
exports.loadStyles = loadStyles;
exports.configureLoadStyles = configureLoadStyles;
exports.configureRunMode = configureRunMode;
exports.flush = flush;
exports.loadTheme = loadTheme;
exports.replaceTokensWithVariables = replaceTokensWithVariables;
exports.clearStyles = clearStyles;
exports.detokenize = detokenize;
exports.splitStyles = splitStyles;
/// <reference lib="dom" />
/**
 * In sync mode, styles are registered as style elements synchronously with loadStyles() call.
 * In async mode, styles are buffered and registered as batch in async timer for performance purpose.
 */
var Mode;
(function (Mode) {
    Mode[Mode["sync"] = 0] = "sync";
    Mode[Mode["async"] = 1] = "async";
})(Mode || (exports.Mode = Mode = {}));
/**
 * Themable styles and non-themable styles are tracked separately
 * Specify ClearStyleOptions when calling clearStyles API to specify which group of registered styles should be cleared.
 */
var ClearStyleOptions;
(function (ClearStyleOptions) {
    /** only themable styles will be cleared */
    ClearStyleOptions[ClearStyleOptions["onlyThemable"] = 1] = "onlyThemable";
    /** only non-themable styles will be cleared */
    ClearStyleOptions[ClearStyleOptions["onlyNonThemable"] = 2] = "onlyNonThemable";
    /** both themable and non-themable styles will be cleared */
    ClearStyleOptions[ClearStyleOptions["all"] = 3] = "all";
})(ClearStyleOptions || (exports.ClearStyleOptions = ClearStyleOptions = {}));
// Store the theming state in __themeState__ global scope for reuse in the case of duplicate
// load-themed-styles hosted on the page.
var _root = typeof window === 'undefined' ? global : window; // eslint-disable-line @typescript-eslint/no-explicit-any
// Nonce string to inject into script tag if one provided. This is used in CSP (Content Security Policy).
var _styleNonce = _root && _root.CSPSettings && _root.CSPSettings.nonce;
var _themeState = initializeThemeState();
/**
 * Matches theming tokens. For example, "[theme: themeSlotName, default: #FFF]" (including the quotes).
 */
var _themeTokenRegex = /[\'\"]\[theme:\s*(\w+)\s*(?:\,\s*default:\s*([\\"\']?[\.\,\(\)\#\-\s\w]*[\.\,\(\)\#\-\w][\"\']?))?\s*\][\'\"]/g;
var now = function () {
    return typeof performance !== 'undefined' && !!performance.now ? performance.now() : Date.now();
};
function measure(func) {
    var start = now();
    func();
    var end = now();
    _themeState.perf.duration += end - start;
}
/**
 * initialize global state object
 */
function initializeThemeState() {
    var state = _root.__themeState__ || {
        theme: undefined,
        lastStyleElement: undefined,
        registeredStyles: []
    };
    if (!state.runState) {
        state = __assign(__assign({}, state), { perf: {
                count: 0,
                duration: 0
            }, runState: {
                flushTimer: 0,
                mode: Mode.sync,
                buffer: []
            } });
    }
    if (!state.registeredThemableStyles) {
        state = __assign(__assign({}, state), { registeredThemableStyles: [] });
    }
    _root.__themeState__ = state;
    return state;
}
/**
 * Loads a set of style text. If it is registered too early, we will register it when the window.load
 * event is fired.
 * @param {string | ThemableArray} styles Themable style text to register.
 * @param {boolean} loadAsync When true, always load styles in async mode, irrespective of current sync mode.
 */
function loadStyles(styles, loadAsync) {
    if (loadAsync === void 0) { loadAsync = false; }
    measure(function () {
        var styleParts = Array.isArray(styles) ? styles : splitStyles(styles);
        var _a = _themeState.runState, mode = _a.mode, buffer = _a.buffer, flushTimer = _a.flushTimer;
        if (loadAsync || mode === Mode.async) {
            buffer.push(styleParts);
            if (!flushTimer) {
                _themeState.runState.flushTimer = asyncLoadStyles();
            }
        }
        else {
            applyThemableStyles(styleParts);
        }
    });
}
/**
 * Allows for customizable loadStyles logic. e.g. for server side rendering application
 * @param {(processedStyles: string, rawStyles?: string | ThemableArray) => void}
 * a loadStyles callback that gets called when styles are loaded or reloaded
 */
function configureLoadStyles(loadStylesFn) {
    _themeState.loadStyles = loadStylesFn;
}
/**
 * Configure run mode of load-themable-styles
 * @param mode load-themable-styles run mode, async or sync
 */
function configureRunMode(mode) {
    _themeState.runState.mode = mode;
}
/**
 * external code can call flush to synchronously force processing of currently buffered styles
 */
function flush() {
    measure(function () {
        var styleArrays = _themeState.runState.buffer.slice();
        _themeState.runState.buffer = [];
        var mergedStyleArray = [].concat.apply([], styleArrays);
        if (mergedStyleArray.length > 0) {
            applyThemableStyles(mergedStyleArray);
        }
    });
}
/**
 * register async loadStyles
 */
function asyncLoadStyles() {
    // Use "self" to distinguish conflicting global typings for setTimeout() from lib.dom.d.ts vs Jest's @types/node
    // https://github.com/jestjs/jest/issues/14418
    return self.setTimeout(function () {
        _themeState.runState.flushTimer = 0;
        flush();
    }, 0);
}
/**
 * Loads a set of style text. If it is registered too early, we will register it when the window.load event
 * is fired.
 * @param {string} styleText Style to register.
 * @param {IStyleRecord} styleRecord Existing style record to re-apply.
 */
function applyThemableStyles(stylesArray, styleRecord) {
    if (_themeState.loadStyles) {
        _themeState.loadStyles(resolveThemableArray(stylesArray).styleString, stylesArray);
    }
    else {
        registerStyles(stylesArray);
    }
}
/**
 * Registers a set theme tokens to find and replace. If styles were already registered, they will be
 * replaced.
 * @param {theme} theme JSON object of theme tokens to values.
 */
function loadTheme(theme) {
    _themeState.theme = theme;
    var style = document.body.style;
    for (var key in theme) {
        if (theme.hasOwnProperty(key)) {
            style.setProperty("--".concat(key), theme[key]);
        }
    }
    // reload styles.
    reloadStyles();
}
/**
 * Replaces theme tokens with CSS variable references.
 * @param styles - Raw css text with theme tokens
 * @returns A css string with theme tokens replaced with css variable references
 */
function replaceTokensWithVariables(styles) {
    return styles.replace(_themeTokenRegex, function (match, themeSlot, defaultValue) {
        return typeof defaultValue === 'string' ? "var(--".concat(themeSlot, ", ").concat(defaultValue, ")") : "var(--".concat(themeSlot, ")");
    });
}
/**
 * Clear already registered style elements and style records in theme_State object
 * @param option - specify which group of registered styles should be cleared.
 * Default to be both themable and non-themable styles will be cleared
 */
function clearStyles(option) {
    if (option === void 0) { option = ClearStyleOptions.all; }
    if (option === ClearStyleOptions.all || option === ClearStyleOptions.onlyNonThemable) {
        clearStylesInternal(_themeState.registeredStyles);
        _themeState.registeredStyles = [];
    }
    if (option === ClearStyleOptions.all || option === ClearStyleOptions.onlyThemable) {
        clearStylesInternal(_themeState.registeredThemableStyles);
        _themeState.registeredThemableStyles = [];
    }
}
function clearStylesInternal(records) {
    records.forEach(function (styleRecord) {
        var styleElement = styleRecord && styleRecord.styleElement;
        if (styleElement && styleElement.parentElement) {
            styleElement.parentElement.removeChild(styleElement);
        }
    });
}
/**
 * Reloads styles.
 */
function reloadStyles() {
    if (_themeState.theme) {
        var themableStyles = [];
        for (var _i = 0, _a = _themeState.registeredThemableStyles; _i < _a.length; _i++) {
            var styleRecord = _a[_i];
            themableStyles.push(styleRecord.themableStyle);
        }
        if (themableStyles.length > 0) {
            clearStyles(ClearStyleOptions.onlyThemable);
            applyThemableStyles([].concat.apply([], themableStyles));
        }
    }
}
/**
 * Find theme tokens and replaces them with provided theme values.
 * @param {string} styles Tokenized styles to fix.
 */
function detokenize(styles) {
    if (styles) {
        styles = resolveThemableArray(splitStyles(styles)).styleString;
    }
    return styles;
}
/**
 * Resolves ThemingInstruction objects in an array and joins the result into a string.
 * @param {ThemableArray} splitStyleArray ThemableArray to resolve and join.
 */
function resolveThemableArray(splitStyleArray) {
    var theme = _themeState.theme;
    var themable = false;
    // Resolve the array of theming instructions to an array of strings.
    // Then join the array to produce the final CSS string.
    var resolvedArray = (splitStyleArray || []).map(function (currentValue) {
        var themeSlot = currentValue.theme;
        if (themeSlot) {
            themable = true;
            // A theming annotation. Resolve it.
            var themedValue = theme ? theme[themeSlot] : undefined;
            var defaultValue = currentValue.defaultValue || 'inherit';
            // Warn to console if we hit an unthemed value even when themes are provided, but only if "DEBUG" is true.
            // Allow the themedValue to be undefined to explicitly request the default value.
            if (theme &&
                !themedValue &&
                console &&
                !(themeSlot in theme) &&
                "boolean" !== 'undefined' &&
                true) {
                // eslint-disable-next-line no-console
                console.warn("Theming value not provided for \"".concat(themeSlot, "\". Falling back to \"").concat(defaultValue, "\"."));
            }
            return themedValue || defaultValue;
        }
        else {
            // A non-themable string. Preserve it.
            return currentValue.rawString;
        }
    });
    return {
        styleString: resolvedArray.join(''),
        themable: themable
    };
}
/**
 * Split tokenized CSS into an array of strings and theme specification objects
 * @param {string} styles Tokenized styles to split.
 */
function splitStyles(styles) {
    var result = [];
    if (styles) {
        var pos = 0; // Current position in styles.
        var tokenMatch = void 0;
        while ((tokenMatch = _themeTokenRegex.exec(styles))) {
            var matchIndex = tokenMatch.index;
            if (matchIndex > pos) {
                result.push({
                    rawString: styles.substring(pos, matchIndex)
                });
            }
            result.push({
                theme: tokenMatch[1],
                defaultValue: tokenMatch[2] // May be undefined
            });
            // index of the first character after the current match
            pos = _themeTokenRegex.lastIndex;
        }
        // Push the rest of the string after the last match.
        result.push({
            rawString: styles.substring(pos)
        });
    }
    return result;
}
/**
 * Registers a set of style text. If it is registered too early, we will register it when the
 * window.load event is fired.
 * @param {ThemableArray} styleArray Array of IThemingInstruction objects to register.
 * @param {IStyleRecord} styleRecord May specify a style Element to update.
 */
function registerStyles(styleArray) {
    if (typeof document === 'undefined') {
        return;
    }
    var head = document.getElementsByTagName('head')[0];
    var styleElement = document.createElement('style');
    var _a = resolveThemableArray(styleArray), styleString = _a.styleString, themable = _a.themable;
    styleElement.setAttribute('data-load-themed-styles', 'true');
    if (_styleNonce) {
        styleElement.setAttribute('nonce', _styleNonce);
    }
    styleElement.appendChild(document.createTextNode(styleString));
    _themeState.perf.count++;
    head.appendChild(styleElement);
    var ev = document.createEvent('HTMLEvents');
    ev.initEvent('styleinsert', true /* bubbleEvent */, false /* cancelable */);
    ev.args = {
        newStyle: styleElement
    };
    document.dispatchEvent(ev);
    var record = {
        styleElement: styleElement,
        themableStyle: styleArray
    };
    if (themable) {
        _themeState.registeredThemableStyles.push(record);
    }
    else {
        _themeState.registeredStyles.push(record);
    }
}
//# sourceMappingURL=index.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "yLpj")))

/***/ }),

/***/ "XjVj":
/*!**************************************************************!*\
  !*** ./lib/webparts/htmlPageViewer/HtmlPageViewerWebPart.js ***!
  \**************************************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "faye");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/sp-property-pane */ "26ea");
/* harmony import */ var _microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @microsoft/sp-webpart-base */ "br4S");
/* harmony import */ var _microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_HtmlPageViewer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/HtmlPageViewer */ "u/pW");
/* harmony import */ var HtmlPageViewerWebPartStrings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! HtmlPageViewerWebPartStrings */ "ZfLX");
/* harmony import */ var HtmlPageViewerWebPartStrings__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(HtmlPageViewerWebPartStrings__WEBPACK_IMPORTED_MODULE_6__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();







var HtmlPageViewerWebPart = /** @class */ (function (_super) {
    __extends(HtmlPageViewerWebPart, _super);
    function HtmlPageViewerWebPart() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._isDarkTheme = false;
        return _this;
    }
    HtmlPageViewerWebPart.prototype.render = function () {
        var element = react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_HtmlPageViewer__WEBPACK_IMPORTED_MODULE_5__[/* default */ "e"], {
            linkText: this.properties.linkText || 'View Report',
            htmlFileUrl: this.properties.htmlFileUrl || '',
            imagesFolderUrl: this.properties.imagesFolderUrl || '',
            resourcesFolderUrl: this.properties.resourcesFolderUrl || '',
            isDarkTheme: this._isDarkTheme,
            hasTeamsContext: !!this.context.sdks.microsoftTeams
        });
        react_dom__WEBPACK_IMPORTED_MODULE_1__["render"](element, this.domElement);
    };
    HtmlPageViewerWebPart.prototype.onInit = function () {
        return _super.prototype.onInit.call(this);
    };
    HtmlPageViewerWebPart.prototype.onDispose = function () {
        react_dom__WEBPACK_IMPORTED_MODULE_1__["unmountComponentAtNode"](this.domElement);
    };
    Object.defineProperty(HtmlPageViewerWebPart.prototype, "dataVersion", {
        get: function () {
            return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["Version"].parse('1.0');
        },
        enumerable: false,
        configurable: true
    });
    HtmlPageViewerWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: HtmlPageViewerWebPartStrings__WEBPACK_IMPORTED_MODULE_6__["PropertyPaneDescription"]
                    },
                    groups: [
                        {
                            groupName: HtmlPageViewerWebPartStrings__WEBPACK_IMPORTED_MODULE_6__["BasicGroupName"],
                            groupFields: [
                                Object(_microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_3__["PropertyPaneTextField"])('linkText', {
                                    label: 'Link Display Text',
                                    description: 'The text shown as a clickable link on the page.',
                                    placeholder: 'e.g. View Marketplace Report'
                                }),
                                Object(_microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_3__["PropertyPaneTextField"])('htmlFileUrl', {
                                    label: 'HTML File URL',
                                    description: 'Full URL of the HTML file in your SharePoint document library.',
                                    placeholder: 'https://tenant.sharepoint.com/sites/site/Shared Documents/report.html',
                                    multiline: true,
                                    rows: 3
                                }),
                                Object(_microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_3__["PropertyPaneLabel"])('separator1', {
                                    text: '── Optional: Asset Path Overrides ──'
                                }),
                                Object(_microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_3__["PropertyPaneTextField"])('imagesFolderUrl', {
                                    label: 'Images / Assets Base URL (Optional)',
                                    description: 'If images are in a different folder than the HTML file, provide the base URL here. Leave empty if the folder structure matches (recommended).',
                                    placeholder: 'https://tenant.sharepoint.com/sites/site/Shared Documents/Reports/',
                                    multiline: true,
                                    rows: 3
                                }),
                                Object(_microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_3__["PropertyPaneTextField"])('resourcesFolderUrl', {
                                    label: 'Resources Base URL (Optional)',
                                    description: 'Base URL for CSS url() references and other linked resources. Leave empty if not needed.',
                                    placeholder: 'https://tenant.sharepoint.com/sites/site/SiteAssets/resources/',
                                    multiline: true,
                                    rows: 3
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return HtmlPageViewerWebPart;
}(_microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_4__["BaseClientSideWebPart"]));
/* harmony default export */ __webpack_exports__["default"] = (HtmlPageViewerWebPart);


/***/ }),

/***/ "ZfLX":
/*!***********************************************!*\
  !*** external "HtmlPageViewerWebPartStrings" ***!
  \***********************************************/
/*! no static exports found */
/*! exports used: BasicGroupName, PropertyPaneDescription */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_ZfLX__;

/***/ }),

/***/ "ZrbS":
/*!**************************************************************************!*\
  !*** ./lib/webparts/htmlPageViewer/components/HtmlPageViewer.module.css ***!
  \**************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js??ref--6-2!./HtmlPageViewer.module.css */ "6o6t");
var loader = __webpack_require__(/*! ./node_modules/@microsoft/load-themed-styles/lib-commonjs/index.js */ "UxGz");

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ "br4S":
/*!*********************************************!*\
  !*** external "@microsoft/sp-webpart-base" ***!
  \*********************************************/
/*! no static exports found */
/*! exports used: BaseClientSideWebPart */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_br4S__;

/***/ }),

/***/ "cDcd":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/*! exports used: createElement, useState */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_cDcd__;

/***/ }),

/***/ "faye":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/*! exports used: render, unmountComponentAtNode */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_faye__;

/***/ }),

/***/ "n9Mc":
/*!******************************************************************************!*\
  !*** ./lib/webparts/htmlPageViewer/components/HtmlPageViewer.module.scss.js ***!
  \******************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* tslint:disable */
__webpack_require__(/*! ./HtmlPageViewer.module.css */ "ZrbS");
var styles = {
    htmlPageViewer: 'htmlPageViewer_0b997830',
    placeholder: 'placeholder_0b997830',
    placeholderIcon: 'placeholderIcon_0b997830',
    placeholderText: 'placeholderText_0b997830',
    placeholderHint: 'placeholderHint_0b997830',
    pageLink: 'pageLink_0b997830',
    linkIcon: 'linkIcon_0b997830',
    linkText: 'linkText_0b997830',
    externalIcon: 'externalIcon_0b997830',
    loadingBar: 'loadingBar_0b997830',
    loadingProgress: 'loadingProgress_0b997830',
    loadSlide: 'loadSlide_0b997830',
    errorMessage: 'errorMessage_0b997830'
};
/* harmony default export */ __webpack_exports__["e"] = (styles);
/* tslint:enable */ 


/***/ }),

/***/ "u/pW":
/*!******************************************************************!*\
  !*** ./lib/webparts/htmlPageViewer/components/HtmlPageViewer.js ***!
  \******************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _HtmlPageViewer_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HtmlPageViewer.module.scss */ "n9Mc");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


/**
 * HtmlPageViewer – SPFx React component
 *
 * Renders a styled text link. On click the HTML page opens in a new browser tab
 * in full-page view (no SharePoint chrome).
 *
 * Two rendering modes:
 *  1. **Direct link** – if no asset-override URLs are configured, the HTML URL
 *     is opened directly via `window.open`. Relative paths in the HTML resolve
 *     from the file's location in the document library.
 *  2. **Fetch + rewrite** – if Images or Resources base URLs are provided, the
 *     component fetches the HTML content, rewrites relative `src` / `url()` paths
 *     to point at the configured SharePoint folders, then renders the rewritten
 *     markup in a new tab.
 */
var HtmlPageViewer = function (props) {
    var linkText = props.linkText, htmlFileUrl = props.htmlFileUrl, imagesFolderUrl = props.imagesFolderUrl, resourcesFolderUrl = props.resourcesFolderUrl;
    var _a = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false), isLoading = _a[0], setIsLoading = _a[1];
    var _b = react__WEBPACK_IMPORTED_MODULE_0__["useState"](''), error = _b[0], setError = _b[1];
    /* ── Path-rewriting helpers ───────────────────────────────────────── */
    /**
     * Rewrite relative `src="…"` attributes so images, scripts, etc.
     * resolve against the given SharePoint folder URL.
     */
    var resolveAssetPaths = function (html, baseFolderUrl) {
        var base = baseFolderUrl.replace(/\/?$/, '/');
        return html.replace(/(\bsrc\s*=\s*["'])(?!https?:\/\/|data:|\/\/|blob:|mailto:|#)([^"']+)(["'])/gi, function (_match, pre, path, post) {
            return "".concat(pre).concat(base).concat(path).concat(post);
        });
    };
    /**
     * Rewrite CSS `url()` references so that background images, fonts, etc.
     * resolve against the given SharePoint folder URL.
     */
    var resolveResourcePaths = function (html, baseFolderUrl) {
        var base = baseFolderUrl.replace(/\/?$/, '/');
        return html.replace(/url\(\s*["']?(?!https?:\/\/|data:|\/\/|blob:)([^"')]+?)["']?\s*\)/gi, function (_match, path) { return "url(\"".concat(base).concat(path, "\")"); });
    };
    /* ── Click handler ────────────────────────────────────────────────── */
    var handleClick = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var response, html, newTab, err_1, msg;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    setError('');
                    if (!htmlFileUrl) {
                        setError('HTML file URL is not configured. Edit the web part properties to provide a URL.');
                        return [2 /*return*/];
                    }
                    // ── Simple mode ──────────────────────────────────────────────────
                    // No asset-override URLs → open the HTML file directly in a new tab.
                    // Relative paths resolve from the file's location in the doc library.
                    if (!imagesFolderUrl && !resourcesFolderUrl) {
                        window.open(htmlFileUrl, '_blank', 'noopener');
                        return [2 /*return*/];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, 5, 6]);
                    setIsLoading(true);
                    return [4 /*yield*/, fetch(htmlFileUrl, {
                            credentials: 'same-origin',
                            headers: { Accept: 'text/html' }
                        })];
                case 2:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error("Failed to load HTML file (HTTP ".concat(response.status, ")."));
                    }
                    return [4 /*yield*/, response.text()];
                case 3:
                    html = _a.sent();
                    // Rewrite relative src attributes (images, media embeds, etc.)
                    if (imagesFolderUrl) {
                        html = resolveAssetPaths(html, imagesFolderUrl);
                    }
                    // Rewrite CSS url() references (background images, fonts, etc.)
                    if (resourcesFolderUrl) {
                        html = resolveResourcePaths(html, resourcesFolderUrl);
                    }
                    newTab = window.open('about:blank', '_blank');
                    if (newTab) {
                        newTab.document.open();
                        newTab.document.write(html);
                        newTab.document.close();
                    }
                    else {
                        throw new Error('Pop-up was blocked by the browser. Please allow pop-ups for this SharePoint site.');
                    }
                    return [3 /*break*/, 6];
                case 4:
                    err_1 = _a.sent();
                    msg = err_1 instanceof Error ? err_1.message : String(err_1);
                    console.error('[HtmlPageViewer]', msg);
                    setError("".concat(msg, "  \u2014 Falling back to direct link."));
                    // Fallback: open the URL directly
                    window.open(htmlFileUrl, '_blank', 'noopener');
                    return [3 /*break*/, 6];
                case 5:
                    setIsLoading(false);
                    return [7 /*endfinally*/];
                case 6: return [2 /*return*/];
            }
        });
    }); };
    /* ── Render ───────────────────────────────────────────────────────── */
    // Placeholder state: no HTML URL configured yet
    if (!htmlFileUrl) {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _HtmlPageViewer_module_scss__WEBPACK_IMPORTED_MODULE_1__[/* default */ "e"].htmlPageViewer },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _HtmlPageViewer_module_scss__WEBPACK_IMPORTED_MODULE_1__[/* default */ "e"].placeholder },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _HtmlPageViewer_module_scss__WEBPACK_IMPORTED_MODULE_1__[/* default */ "e"].placeholderIcon }, "\uD83D\uDCC4"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { className: _HtmlPageViewer_module_scss__WEBPACK_IMPORTED_MODULE_1__[/* default */ "e"].placeholderText }, "HTML Page Viewer"),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", { className: _HtmlPageViewer_module_scss__WEBPACK_IMPORTED_MODULE_1__[/* default */ "e"].placeholderHint },
                    "Edit the web part properties to set the",
                    ' ',
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("strong", null, "Link Display Text"),
                    " and",
                    ' ',
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("strong", null, "HTML File URL"),
                    "."))));
    }
    // Configured state: render the clickable link
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _HtmlPageViewer_module_scss__WEBPACK_IMPORTED_MODULE_1__[/* default */ "e"].htmlPageViewer },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", { href: htmlFileUrl, className: _HtmlPageViewer_module_scss__WEBPACK_IMPORTED_MODULE_1__[/* default */ "e"].pageLink, onClick: handleClick, title: "Open ".concat(linkText, " in a new tab") },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: _HtmlPageViewer_module_scss__WEBPACK_IMPORTED_MODULE_1__[/* default */ "e"].linkIcon }, "\uD83D\uDCC4"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: _HtmlPageViewer_module_scss__WEBPACK_IMPORTED_MODULE_1__[/* default */ "e"].linkText }, linkText || 'View HTML Page'),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: _HtmlPageViewer_module_scss__WEBPACK_IMPORTED_MODULE_1__[/* default */ "e"].externalIcon }, "\u2197")),
        isLoading && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _HtmlPageViewer_module_scss__WEBPACK_IMPORTED_MODULE_1__[/* default */ "e"].loadingBar },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _HtmlPageViewer_module_scss__WEBPACK_IMPORTED_MODULE_1__[/* default */ "e"].loadingProgress }))),
        error && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _HtmlPageViewer_module_scss__WEBPACK_IMPORTED_MODULE_1__[/* default */ "e"].errorMessage },
            "\u26A0 ",
            error))));
};
/* harmony default export */ __webpack_exports__["e"] = (HtmlPageViewer);


/***/ }),

/***/ "yLpj":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })

/******/ })});;
//# sourceMappingURL=html-page-viewer-web-part.js.map