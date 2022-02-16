/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/constants/config.js":
/*!******************************************!*\
  !*** ./resources/js/constants/config.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultMenuType": function() { return /* binding */ defaultMenuType; },
/* harmony export */   "adminRoot": function() { return /* binding */ adminRoot; },
/* harmony export */   "searchPath": function() { return /* binding */ searchPath; },
/* harmony export */   "buyUrl": function() { return /* binding */ buyUrl; },
/* harmony export */   "apiUrl": function() { return /* binding */ apiUrl; },
/* harmony export */   "subHiddenBreakpoint": function() { return /* binding */ subHiddenBreakpoint; },
/* harmony export */   "menuHiddenBreakpoint": function() { return /* binding */ menuHiddenBreakpoint; },
/* harmony export */   "defaultLocale": function() { return /* binding */ defaultLocale; },
/* harmony export */   "defaultDirection": function() { return /* binding */ defaultDirection; },
/* harmony export */   "localeOptions": function() { return /* binding */ localeOptions; },
/* harmony export */   "firebaseConfig": function() { return /* binding */ firebaseConfig; },
/* harmony export */   "currentUser": function() { return /* binding */ currentUser; },
/* harmony export */   "isAuthGuardActive": function() { return /* binding */ isAuthGuardActive; },
/* harmony export */   "themeRadiusStorageKey": function() { return /* binding */ themeRadiusStorageKey; },
/* harmony export */   "themeSelectedColorStorageKey": function() { return /* binding */ themeSelectedColorStorageKey; },
/* harmony export */   "defaultColor": function() { return /* binding */ defaultColor; },
/* harmony export */   "colors": function() { return /* binding */ colors; }
/* harmony export */ });
/* harmony import */ var _utils_auth_roles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/auth.roles */ "./resources/js/utils/auth.roles.js");

var defaultMenuType = 'menu-default'; // 'menu-default', 'menu-sub-hidden', 'menu-hidden';

var adminRoot = '/app';
var searchPath = "".concat(adminRoot, "/pages/miscellaneous/search");
var buyUrl = 'https://1.envato.market/nEyZa';
var apiUrl = 'https://api.coloredstrategies.com';
var subHiddenBreakpoint = 1440;
var menuHiddenBreakpoint = 768;
var defaultLocale = 'en';
var defaultDirection = 'ltr';
var localeOptions = [{
  id: 'en',
  name: 'English LTR',
  direction: 'ltr'
}, {
  id: 'es',
  name: 'Español',
  direction: 'ltr'
}, {
  id: 'enrtl',
  name: 'English RTL',
  direction: 'rtl'
}];
var firebaseConfig = {
  apiKey: "AIzaSyDe94G7L-3soXVSpVbsYlB5DfYH2L91aTU",
  authDomain: "piaf-vue-login.firebaseapp.com",
  databaseURL: "https://piaf-vue-login.firebaseio.com",
  projectId: "piaf-vue-login",
  storageBucket: "piaf-vue-login.appspot.com",
  messagingSenderId: "557576321564",
  appId: "1:557576321564:web:bc2ce73477aff5c2197dd9"
};
var currentUser = {
  id: 1,
  title: 'Gomez Tomas Gonzalo',
  img: '/assets/img/profiles/l-9.jpg',
  date: 'Last seen today 15:24',
  role: _utils_auth_roles__WEBPACK_IMPORTED_MODULE_0__.UserRole.Admin
};
var isAuthGuardActive = true;
var themeRadiusStorageKey = 'theme_radius';
var themeSelectedColorStorageKey = 'theme_selected_color';
var defaultColor = 'light.greysteel'; //export const colors = ['bluenavy', 'blueyale', 'blueolympic', 'greenmoss', 'greenlime', 'purplemonster', 'orangecarrot', 'redruby', 'yellowgranola', 'greysteel']

var colors = ['greysteel'];

/***/ }),

/***/ "./resources/js/index.js":
/*!*******************************!*\
  !*** ./resources/js/index.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_vendor_dropzone_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/vendor/dropzone.min.css */ "./resources/css/vendor/dropzone.min.css");
/* harmony import */ var bootstrap_vue_dist_bootstrap_vue_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue/dist/bootstrap-vue.css */ "./node_modules/bootstrap-vue/dist/bootstrap-vue.css");
/* harmony import */ var _css_vendor_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/vendor/bootstrap.min.css */ "./resources/css/vendor/bootstrap.min.css");
/* harmony import */ var _css_vendor_bootstrap_rtl_only_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/vendor/bootstrap.rtl.only.min.css */ "./resources/css/vendor/bootstrap.rtl.only.min.css");
/* harmony import */ var video_js_dist_video_js_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! video.js/dist/video-js.css */ "./node_modules/video.js/dist/video-js.css");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "./resources/js/utils/index.js");






/*  if you want use single color theme

- ColorSwitcher component remove in 'src/App.vue' file.
- Remove multicolor section in current file
- Uncomment the two lines below

import "./assets/css/sass/themes/piaf.light.blueolympic.scss";
import "./main";
*/

/* if you want single color remove this section:multicolor */

/* var color = getThemeColor();
let render = () => {
  import("../assets/css/sass/themes/piaf." + color + ".scss").then(() =>
    require("./main")
  );
};

render(); */

/* if you want single color remove this section:multicolor */

/***/ }),

/***/ "./resources/js/utils/auth.roles.js":
/*!******************************************!*\
  !*** ./resources/js/utils/auth.roles.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserRole": function() { return /* binding */ UserRole; }
/* harmony export */ });
var UserRole = {
  Root: 0,
  Admin: 1,
  Editor: 2
};

/***/ }),

/***/ "./resources/js/utils/index.js":
/*!*************************************!*\
  !*** ./resources/js/utils/index.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mapOrder": function() { return /* binding */ mapOrder; },
/* harmony export */   "getDateWithFormat": function() { return /* binding */ getDateWithFormat; },
/* harmony export */   "getCurrentTime": function() { return /* binding */ getCurrentTime; },
/* harmony export */   "ThemeColors": function() { return /* binding */ ThemeColors; },
/* harmony export */   "getDirection": function() { return /* binding */ getDirection; },
/* harmony export */   "setDirection": function() { return /* binding */ setDirection; },
/* harmony export */   "getThemeColor": function() { return /* binding */ getThemeColor; },
/* harmony export */   "setThemeColor": function() { return /* binding */ setThemeColor; },
/* harmony export */   "getThemeRadius": function() { return /* binding */ getThemeRadius; },
/* harmony export */   "setThemeRadius": function() { return /* binding */ setThemeRadius; },
/* harmony export */   "getCurrentLanguage": function() { return /* binding */ getCurrentLanguage; },
/* harmony export */   "setCurrentLanguage": function() { return /* binding */ setCurrentLanguage; },
/* harmony export */   "getCurrentUser": function() { return /* binding */ getCurrentUser; },
/* harmony export */   "setCurrentUser": function() { return /* binding */ setCurrentUser; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.sort.js */ "./node_modules/core-js/modules/es.array.sort.js");
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _constants_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants/config */ "./resources/js/constants/config.js");






var mapOrder = function mapOrder(array, order, key) {
  array.sort(function (a, b) {
    var A = a[key];
    var B = b[key];

    if (order.indexOf(A + '') > order.indexOf(B + '')) {
      return 1;
    } else {
      return -1;
    }
  });
  return array;
};
var getDateWithFormat = function getDateWithFormat() {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1; // January is 0!

  var yyyy = today.getFullYear();

  if (dd < 10) {
    dd = '0' + dd;
  }

  if (mm < 10) {
    mm = '0' + mm;
  }

  return dd + '.' + mm + '.' + yyyy;
};
var getCurrentTime = function getCurrentTime() {
  var now = new Date();
  return now.getHours() + ':' + now.getMinutes();
};
var ThemeColors = function ThemeColors() {
  var rootStyle = getComputedStyle(document.body);
  return {
    themeColor1: rootStyle.getPropertyValue('--theme-color-1').trim(),
    themeColor2: rootStyle.getPropertyValue('--theme-color-2').trim(),
    themeColor3: rootStyle.getPropertyValue('--theme-color-3').trim(),
    themeColor4: rootStyle.getPropertyValue('--theme-color-4').trim(),
    themeColor5: rootStyle.getPropertyValue('--theme-color-5').trim(),
    themeColor6: rootStyle.getPropertyValue('--theme-color-6').trim(),
    themeColor1_10: rootStyle.getPropertyValue('--theme-color-1-10').trim(),
    themeColor2_10: rootStyle.getPropertyValue('--theme-color-2-10').trim(),
    themeColor3_10: rootStyle.getPropertyValue('--theme-color-3-10').trim(),
    themeColor4_10: rootStyle.getPropertyValue('--theme-color-3-10').trim(),
    themeColor5_10: rootStyle.getPropertyValue('--theme-color-3-10').trim(),
    themeColor6_10: rootStyle.getPropertyValue('--theme-color-3-10').trim(),
    primaryColor: rootStyle.getPropertyValue('--primary-color').trim(),
    foregroundColor: rootStyle.getPropertyValue('--foreground-color').trim(),
    separatorColor: rootStyle.getPropertyValue('--separator-color').trim()
  };
};
var getDirection = function getDirection() {
  var direction = _constants_config__WEBPACK_IMPORTED_MODULE_5__.defaultDirection;

  if (localStorage.getItem('direction')) {
    var localValue = localStorage.getItem('direction');

    if (localValue === 'rtl' || localValue === 'ltr') {
      direction = localValue;
    }
  }

  return {
    direction: direction,
    isRtl: direction === 'rtl'
  };
};
var setDirection = function setDirection(localValue) {
  var direction = 'ltr';

  if (localValue === 'rtl' || localValue === 'ltr') {
    direction = localValue;
  }

  localStorage.setItem('direction', direction);
};
var getThemeColor = function getThemeColor() {
  var color = _constants_config__WEBPACK_IMPORTED_MODULE_5__.defaultColor;

  try {
    if (localStorage.getItem(_constants_config__WEBPACK_IMPORTED_MODULE_5__.themeSelectedColorStorageKey)) {
      color = localStorage.getItem(_constants_config__WEBPACK_IMPORTED_MODULE_5__.themeSelectedColorStorageKey) || _constants_config__WEBPACK_IMPORTED_MODULE_5__.defaultColor;
    }
  } catch (error) {
    console.log(">>>> src/utils/index.js : getThemeColor -> error", error);
    color = _constants_config__WEBPACK_IMPORTED_MODULE_5__.defaultColor;
  }

  return color;
};
var setThemeColor = function setThemeColor(color) {
  try {
    localStorage.setItem(_constants_config__WEBPACK_IMPORTED_MODULE_5__.themeSelectedColorStorageKey, color);
  } catch (error) {
    console.log(">>>> src/utils/index.js : setThemeColor -> error", error);
  }
};
var getThemeRadius = function getThemeRadius() {
  var radius = "rounded";

  try {
    if (localStorage.getItem(_constants_config__WEBPACK_IMPORTED_MODULE_5__.themeRadiusStorageKey)) {
      radius = localStorage.getItem(_constants_config__WEBPACK_IMPORTED_MODULE_5__.themeRadiusStorageKey) || "rounded";
    }
  } catch (error) {
    console.log(">>>> src/utils/index.js : getThemeRadius -> error", error);
    radius = "rounded";
  }

  return radius;
};
var setThemeRadius = function setThemeRadius(radius) {
  try {
    localStorage.setItem(_constants_config__WEBPACK_IMPORTED_MODULE_5__.themeRadiusStorageKey, radius);
  } catch (error) {
    console.log(">>>> src/utils/index.js : setThemeRadius -> error", error);
  }
};
var getCurrentLanguage = function getCurrentLanguage() {
  var locale = _constants_config__WEBPACK_IMPORTED_MODULE_5__.defaultLocale;

  try {
    if (localStorage.getItem('currentLanguage') && _constants_config__WEBPACK_IMPORTED_MODULE_5__.localeOptions.filter(function (x) {
      return x.id === localStorage.getItem('currentLanguage');
    }).length > 0) {
      locale = localStorage.getItem('currentLanguage');
    }
  } catch (error) {
    console.log(">>>> src/utils/index.js : getCurrentLanguage -> error", error);
    locale = _constants_config__WEBPACK_IMPORTED_MODULE_5__.defaultLocale;
  }

  return locale;
};
var setCurrentLanguage = function setCurrentLanguage(lang) {
  try {
    localStorage.setItem('currentLanguage', lang);
  } catch (error) {
    console.log(">>>> src/utils/index.js : setCurrentLanguage -> error", error);
  }
};
var getCurrentUser = function getCurrentUser() {
  var user = null;

  try {
    user = localStorage.getItem('user') != null ? JSON.parse(localStorage.getItem('user')) : null;
  } catch (error) {
    console.log(">>>> src/utils/index.js : getCurrentUser -> error", error);
    user = null;
  }

  return user;
};
var setCurrentUser = function setCurrentUser(user) {
  try {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  } catch (error) {
    console.log(">>>> src/utils/index.js : setCurrentUser -> error", error);
  }
};

/***/ }),

/***/ "./node_modules/core-js/internals/a-callable.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/a-callable.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var tryToString = __webpack_require__(/*! ../internals/try-to-string */ "./node_modules/core-js/internals/try-to-string.js");

var TypeError = global.TypeError;

// `Assert: IsCallable(argument) is true`
module.exports = function (argument) {
  if (isCallable(argument)) return argument;
  throw TypeError(tryToString(argument) + ' is not a function');
};


/***/ }),

/***/ "./node_modules/core-js/internals/an-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/an-object.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var String = global.String;
var TypeError = global.TypeError;

// `Assert: Type(argument) is Object`
module.exports = function (argument) {
  if (isObject(argument)) return argument;
  throw TypeError(String(argument) + ' is not an object');
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-includes.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-includes.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "./node_modules/core-js/internals/length-of-array-like.js");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = lengthOfArrayLike(O);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-iteration.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/array-iteration.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var bind = __webpack_require__(/*! ../internals/function-bind-context */ "./node_modules/core-js/internals/function-bind-context.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "./node_modules/core-js/internals/length-of-array-like.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "./node_modules/core-js/internals/array-species-create.js");

var push = uncurryThis([].push);

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_REJECT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that);
    var length = lengthOfArrayLike(self);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push(target, value);      // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push(target, value);      // filterReject
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterReject` method
  // https://github.com/tc39/proposal-array-filtering
  filterReject: createMethod(7)
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-method-has-species-support.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-has-species-support.js ***!
  \****************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "./node_modules/core-js/internals/engine-v8-version.js");

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-method-is-strict.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-is-strict.js ***!
  \******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal -- required for testing
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-slice-simple.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/array-slice-simple.js ***!
  \**************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "./node_modules/core-js/internals/length-of-array-like.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");

var Array = global.Array;
var max = Math.max;

module.exports = function (O, start, end) {
  var length = lengthOfArrayLike(O);
  var k = toAbsoluteIndex(start, length);
  var fin = toAbsoluteIndex(end === undefined ? length : end, length);
  var result = Array(max(fin - k, 0));
  for (var n = 0; k < fin; k++, n++) createProperty(result, n, O[k]);
  result.length = n;
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-sort.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/array-sort.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arraySlice = __webpack_require__(/*! ../internals/array-slice-simple */ "./node_modules/core-js/internals/array-slice-simple.js");

var floor = Math.floor;

var mergeSort = function (array, comparefn) {
  var length = array.length;
  var middle = floor(length / 2);
  return length < 8 ? insertionSort(array, comparefn) : merge(
    array,
    mergeSort(arraySlice(array, 0, middle), comparefn),
    mergeSort(arraySlice(array, middle), comparefn),
    comparefn
  );
};

var insertionSort = function (array, comparefn) {
  var length = array.length;
  var i = 1;
  var element, j;

  while (i < length) {
    j = i;
    element = array[i];
    while (j && comparefn(array[j - 1], element) > 0) {
      array[j] = array[--j];
    }
    if (j !== i++) array[j] = element;
  } return array;
};

var merge = function (array, left, right, comparefn) {
  var llength = left.length;
  var rlength = right.length;
  var lindex = 0;
  var rindex = 0;

  while (lindex < llength || rindex < rlength) {
    array[lindex + rindex] = (lindex < llength && rindex < rlength)
      ? comparefn(left[lindex], right[rindex]) <= 0 ? left[lindex++] : right[rindex++]
      : lindex < llength ? left[lindex++] : right[rindex++];
  } return array;
};

module.exports = mergeSort;


/***/ }),

/***/ "./node_modules/core-js/internals/array-species-constructor.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/internals/array-species-constructor.js ***!
  \*********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var isConstructor = __webpack_require__(/*! ../internals/is-constructor */ "./node_modules/core-js/internals/is-constructor.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var SPECIES = wellKnownSymbol('species');
var Array = global.Array;

// a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (isConstructor(C) && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-species-create.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/array-species-create.js ***!
  \****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arraySpeciesConstructor = __webpack_require__(/*! ../internals/array-species-constructor */ "./node_modules/core-js/internals/array-species-constructor.js");

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
};


/***/ }),

/***/ "./node_modules/core-js/internals/classof-raw.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/classof-raw.js ***!
  \*******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");

var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis(''.slice);

module.exports = function (it) {
  return stringSlice(toString(it), 8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/internals/classof.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/classof.js ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ "./node_modules/core-js/internals/to-string-tag-support.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var classofRaw = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var Object = global.Object;

// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && isCallable(O.callee) ? 'Arguments' : result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/copy-constructor-properties.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/copy-constructor-properties.js ***!
  \***********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");
var ownKeys = __webpack_require__(/*! ../internals/own-keys */ "./node_modules/core-js/internals/own-keys.js");
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");

module.exports = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-non-enumerable-property.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/internals/create-non-enumerable-property.js ***!
  \**************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-property-descriptor.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-property-descriptor.js ***!
  \**********************************************************************/
/***/ (function(module) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-property.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/create-property.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var toPropertyKey = __webpack_require__(/*! ../internals/to-property-key */ "./node_modules/core-js/internals/to-property-key.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");

module.exports = function (object, key, value) {
  var propertyKey = toPropertyKey(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),

/***/ "./node_modules/core-js/internals/descriptors.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/descriptors.js ***!
  \*******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "./node_modules/core-js/internals/document-create-element.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/document-create-element.js ***!
  \*******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/internals/engine-ff-version.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-ff-version.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "./node_modules/core-js/internals/engine-user-agent.js");

var firefox = userAgent.match(/firefox\/(\d+)/i);

module.exports = !!firefox && +firefox[1];


/***/ }),

/***/ "./node_modules/core-js/internals/engine-is-ie-or-edge.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-is-ie-or-edge.js ***!
  \****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var UA = __webpack_require__(/*! ../internals/engine-user-agent */ "./node_modules/core-js/internals/engine-user-agent.js");

module.exports = /MSIE|Trident/.test(UA);


/***/ }),

/***/ "./node_modules/core-js/internals/engine-user-agent.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-user-agent.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "./node_modules/core-js/internals/engine-v8-version.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-v8-version.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "./node_modules/core-js/internals/engine-user-agent.js");

var process = global.process;
var Deno = global.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

module.exports = version;


/***/ }),

/***/ "./node_modules/core-js/internals/engine-webkit-version.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-webkit-version.js ***!
  \*****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "./node_modules/core-js/internals/engine-user-agent.js");

var webkit = userAgent.match(/AppleWebKit\/(\d+)\./);

module.exports = !!webkit && +webkit[1];


/***/ }),

/***/ "./node_modules/core-js/internals/enum-bug-keys.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/enum-bug-keys.js ***!
  \*********************************************************/
/***/ (function(module) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "./node_modules/core-js/internals/export.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/export.js ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var getOwnPropertyDescriptor = (__webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js").f);
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");
var copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ "./node_modules/core-js/internals/copy-constructor-properties.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "./node_modules/core-js/internals/is-forced.js");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
  options.name        - the .name of the function if it does not match the key
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/fails.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/internals/fails.js ***!
  \*************************************************/
/***/ (function(module) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/function-apply.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/function-apply.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var NATIVE_BIND = __webpack_require__(/*! ../internals/function-bind-native */ "./node_modules/core-js/internals/function-bind-native.js");

var FunctionPrototype = Function.prototype;
var apply = FunctionPrototype.apply;
var call = FunctionPrototype.call;

// eslint-disable-next-line es/no-reflect -- safe
module.exports = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND ? call.bind(apply) : function () {
  return call.apply(apply, arguments);
});


/***/ }),

/***/ "./node_modules/core-js/internals/function-bind-context.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/function-bind-context.js ***!
  \*****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var aCallable = __webpack_require__(/*! ../internals/a-callable */ "./node_modules/core-js/internals/a-callable.js");
var NATIVE_BIND = __webpack_require__(/*! ../internals/function-bind-native */ "./node_modules/core-js/internals/function-bind-native.js");

var bind = uncurryThis(uncurryThis.bind);

// optional / simple context binding
module.exports = function (fn, that) {
  aCallable(fn);
  return that === undefined ? fn : NATIVE_BIND ? bind(fn, that) : function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/internals/function-bind-native.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/function-bind-native.js ***!
  \****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = !fails(function () {
  var test = (function () { /* empty */ }).bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});


/***/ }),

/***/ "./node_modules/core-js/internals/function-call.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/function-call.js ***!
  \*********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var NATIVE_BIND = __webpack_require__(/*! ../internals/function-bind-native */ "./node_modules/core-js/internals/function-bind-native.js");

var call = Function.prototype.call;

module.exports = NATIVE_BIND ? call.bind(call) : function () {
  return call.apply(call, arguments);
};


/***/ }),

/***/ "./node_modules/core-js/internals/function-name.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/function-name.js ***!
  \*********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");

var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable));

module.exports = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};


/***/ }),

/***/ "./node_modules/core-js/internals/function-uncurry-this.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/function-uncurry-this.js ***!
  \*****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var NATIVE_BIND = __webpack_require__(/*! ../internals/function-bind-native */ "./node_modules/core-js/internals/function-bind-native.js");

var FunctionPrototype = Function.prototype;
var bind = FunctionPrototype.bind;
var call = FunctionPrototype.call;
var uncurryThis = NATIVE_BIND && bind.bind(call, call);

module.exports = NATIVE_BIND ? function (fn) {
  return fn && uncurryThis(fn);
} : function (fn) {
  return fn && function () {
    return call.apply(fn, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/internals/get-built-in.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/get-built-in.js ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");

var aFunction = function (argument) {
  return isCallable(argument) ? argument : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "./node_modules/core-js/internals/get-method.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/get-method.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var aCallable = __webpack_require__(/*! ../internals/a-callable */ "./node_modules/core-js/internals/a-callable.js");

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function (V, P) {
  var func = V[P];
  return func == null ? undefined : aCallable(func);
};


/***/ }),

/***/ "./node_modules/core-js/internals/global.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/global.js ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof __webpack_require__.g == 'object' && __webpack_require__.g) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();


/***/ }),

/***/ "./node_modules/core-js/internals/has-own-property.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/has-own-property.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");

var hasOwnProperty = uncurryThis({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject(it), key);
};


/***/ }),

/***/ "./node_modules/core-js/internals/hidden-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/hidden-keys.js ***!
  \*******************************************************/
/***/ (function(module) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/internals/ie8-dom-define.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/ie8-dom-define.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var createElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");

// Thanks to IE8 for its funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/internals/indexed-object.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/indexed-object.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

var Object = global.Object;
var split = uncurryThis(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "./node_modules/core-js/internals/inspect-source.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/inspect-source.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var store = __webpack_require__(/*! ../internals/shared-store */ "./node_modules/core-js/internals/shared-store.js");

var functionToString = uncurryThis(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "./node_modules/core-js/internals/internal-state.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/internal-state.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/native-weak-map */ "./node_modules/core-js/internals/native-weak-map.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");
var shared = __webpack_require__(/*! ../internals/shared-store */ "./node_modules/core-js/internals/shared-store.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError = global.TypeError;
var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = uncurryThis(store.get);
  var wmhas = uncurryThis(store.has);
  var wmset = uncurryThis(store.set);
  set = function (it, metadata) {
    if (wmhas(store, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    wmset(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget(store, it) || {};
  };
  has = function (it) {
    return wmhas(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (hasOwn(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-array.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/is-array.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(argument) {
  return classof(argument) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-callable.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/is-callable.js ***!
  \*******************************************************/
/***/ (function(module) {

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
module.exports = function (argument) {
  return typeof argument == 'function';
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-constructor.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/is-constructor.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var classof = __webpack_require__(/*! ../internals/classof */ "./node_modules/core-js/internals/classof.js");
var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "./node_modules/core-js/internals/inspect-source.js");

var noop = function () { /* empty */ };
var empty = [];
var construct = getBuiltIn('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec = uncurryThis(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);

var isConstructorModern = function isConstructor(argument) {
  if (!isCallable(argument)) return false;
  try {
    construct(noop, empty, argument);
    return true;
  } catch (error) {
    return false;
  }
};

var isConstructorLegacy = function isConstructor(argument) {
  if (!isCallable(argument)) return false;
  switch (classof(argument)) {
    case 'AsyncFunction':
    case 'GeneratorFunction':
    case 'AsyncGeneratorFunction': return false;
  }
  try {
    // we can't check .prototype since constructors produced by .bind haven't it
    // `Function#toString` throws on some built-it function in some legacy engines
    // (for example, `DOMQuad` and similar in FF41-)
    return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument));
  } catch (error) {
    return true;
  }
};

isConstructorLegacy.sham = true;

// `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor
module.exports = !construct || fails(function () {
  var called;
  return isConstructorModern(isConstructorModern.call)
    || !isConstructorModern(Object)
    || !isConstructorModern(function () { called = true; })
    || called;
}) ? isConstructorLegacy : isConstructorModern;


/***/ }),

/***/ "./node_modules/core-js/internals/is-forced.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-forced.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : isCallable(detection) ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "./node_modules/core-js/internals/is-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-object.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");

module.exports = function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it);
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-pure.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/is-pure.js ***!
  \***************************************************/
/***/ (function(module) {

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/internals/is-symbol.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-symbol.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var isPrototypeOf = __webpack_require__(/*! ../internals/object-is-prototype-of */ "./node_modules/core-js/internals/object-is-prototype-of.js");
var USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ "./node_modules/core-js/internals/use-symbol-as-uid.js");

var Object = global.Object;

module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, Object(it));
};


/***/ }),

/***/ "./node_modules/core-js/internals/length-of-array-like.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/length-of-array-like.js ***!
  \****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function (obj) {
  return toLength(obj.length);
};


/***/ }),

/***/ "./node_modules/core-js/internals/native-symbol.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/native-symbol.js ***!
  \*********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "./node_modules/core-js/internals/engine-v8-version.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol();
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),

/***/ "./node_modules/core-js/internals/native-weak-map.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/native-weak-map.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "./node_modules/core-js/internals/inspect-source.js");

var WeakMap = global.WeakMap;

module.exports = isCallable(WeakMap) && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ "./node_modules/core-js/internals/object-define-property.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-property.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js");
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(/*! ../internals/v8-prototype-define-bug */ "./node_modules/core-js/internals/v8-prototype-define-bug.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var toPropertyKey = __webpack_require__(/*! ../internals/to-property-key */ "./node_modules/core-js/internals/to-property-key.js");

var TypeError = global.TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  } return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-descriptor.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "./node_modules/core-js/internals/object-property-is-enumerable.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var toPropertyKey = __webpack_require__(/*! ../internals/to-property-key */ "./node_modules/core-js/internals/to-property-key.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js");

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPropertyKey(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-names.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-names.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-symbols.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-symbols.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/internals/object-is-prototype-of.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-is-prototype-of.js ***!
  \******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");

module.exports = uncurryThis({}.isPrototypeOf);


/***/ }),

/***/ "./node_modules/core-js/internals/object-keys-internal.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys-internal.js ***!
  \****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var indexOf = (__webpack_require__(/*! ../internals/array-includes */ "./node_modules/core-js/internals/array-includes.js").indexOf);
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");

var push = uncurryThis([].push);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn(O, key = names[i++])) {
    ~indexOf(result, key) || push(result, key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-property-is-enumerable.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-property-is-enumerable.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/internals/object-to-string.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/object-to-string.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ "./node_modules/core-js/internals/to-string-tag-support.js");
var classof = __webpack_require__(/*! ../internals/classof */ "./node_modules/core-js/internals/classof.js");

// `Object.prototype.toString` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),

/***/ "./node_modules/core-js/internals/ordinary-to-primitive.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/ordinary-to-primitive.js ***!
  \*****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var TypeError = global.TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/internals/own-keys.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/own-keys.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js");
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "./node_modules/core-js/internals/object-get-own-property-symbols.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

var concat = uncurryThis([].concat);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "./node_modules/core-js/internals/redefine.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/redefine.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "./node_modules/core-js/internals/inspect-source.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");
var CONFIGURABLE_FUNCTION_NAME = (__webpack_require__(/*! ../internals/function-name */ "./node_modules/core-js/internals/function-name.js").CONFIGURABLE);

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var name = options && options.name !== undefined ? options.name : key;
  var state;
  if (isCallable(value)) {
    if (String(name).slice(0, 7) === 'Symbol(') {
      name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']';
    }
    if (!hasOwn(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
      createNonEnumerableProperty(value, 'name', name);
    }
    state = enforceInternalState(value);
    if (!state.source) {
      state.source = TEMPLATE.join(typeof name == 'string' ? name : '');
    }
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return isCallable(this) && getInternalState(this).source || inspectSource(this);
});


/***/ }),

/***/ "./node_modules/core-js/internals/require-object-coercible.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/require-object-coercible.js ***!
  \********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

var TypeError = global.TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/set-global.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/set-global.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;

module.exports = function (key, value) {
  try {
    defineProperty(global, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "./node_modules/core-js/internals/shared-key.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/shared-key.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/internals/shared-store.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/shared-store.js ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "./node_modules/core-js/internals/shared.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/shared.js ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
var store = __webpack_require__(/*! ../internals/shared-store */ "./node_modules/core-js/internals/shared-store.js");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.20.3',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2014-2022 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.20.3/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});


/***/ }),

/***/ "./node_modules/core-js/internals/string-trim-forced.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/string-trim-forced.js ***!
  \**************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var PROPER_FUNCTION_NAME = (__webpack_require__(/*! ../internals/function-name */ "./node_modules/core-js/internals/function-name.js").PROPER);
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/core-js/internals/whitespaces.js");

var non = '\u200B\u0085\u180E';

// check that a method works with the correct list
// of whitespaces and has a correct name
module.exports = function (METHOD_NAME) {
  return fails(function () {
    return !!whitespaces[METHOD_NAME]()
      || non[METHOD_NAME]() !== non
      || (PROPER_FUNCTION_NAME && whitespaces[METHOD_NAME].name !== METHOD_NAME);
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/string-trim.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/string-trim.js ***!
  \*******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/core-js/internals/whitespaces.js");

var replace = uncurryThis(''.replace);
var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = toString(requireObjectCoercible($this));
    if (TYPE & 1) string = replace(string, ltrim, '');
    if (TYPE & 2) string = replace(string, rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-absolute-index.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-absolute-index.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ "./node_modules/core-js/internals/to-integer-or-infinity.js");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toIntegerOrInfinity(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-indexed-object.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-indexed-object.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-integer-or-infinity.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/to-integer-or-infinity.js ***!
  \******************************************************************/
/***/ (function(module) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- safe
  return number !== number || number === 0 ? 0 : (number > 0 ? floor : ceil)(number);
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-length.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-length.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ "./node_modules/core-js/internals/to-integer-or-infinity.js");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-object.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

var Object = global.Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-primitive.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/to-primitive.js ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var isSymbol = __webpack_require__(/*! ../internals/is-symbol */ "./node_modules/core-js/internals/is-symbol.js");
var getMethod = __webpack_require__(/*! ../internals/get-method */ "./node_modules/core-js/internals/get-method.js");
var ordinaryToPrimitive = __webpack_require__(/*! ../internals/ordinary-to-primitive */ "./node_modules/core-js/internals/ordinary-to-primitive.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var TypeError = global.TypeError;
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function (input, pref) {
  if (!isObject(input) || isSymbol(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call(exoticToPrim, input, pref);
    if (!isObject(result) || isSymbol(result)) return result;
    throw TypeError("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-property-key.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/to-property-key.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
var isSymbol = __webpack_require__(/*! ../internals/is-symbol */ "./node_modules/core-js/internals/is-symbol.js");

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-string-tag-support.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/to-string-tag-support.js ***!
  \*****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ "./node_modules/core-js/internals/to-string.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-string.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var classof = __webpack_require__(/*! ../internals/classof */ "./node_modules/core-js/internals/classof.js");

var String = global.String;

module.exports = function (argument) {
  if (classof(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
  return String(argument);
};


/***/ }),

/***/ "./node_modules/core-js/internals/try-to-string.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/try-to-string.js ***!
  \*********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

var String = global.String;

module.exports = function (argument) {
  try {
    return String(argument);
  } catch (error) {
    return 'Object';
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/uid.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/uid.js ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");

var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.0.toString);

module.exports = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};


/***/ }),

/***/ "./node_modules/core-js/internals/use-symbol-as-uid.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/use-symbol-as-uid.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");

module.exports = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ "./node_modules/core-js/internals/v8-prototype-define-bug.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/v8-prototype-define-bug.js ***!
  \*******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
module.exports = DESCRIPTORS && fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype != 42;
});


/***/ }),

/***/ "./node_modules/core-js/internals/well-known-symbol.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/well-known-symbol.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");
var USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ "./node_modules/core-js/internals/use-symbol-as-uid.js");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var symbolFor = Symbol && Symbol['for'];
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!hasOwn(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    var description = 'Symbol.' + name;
    if (NATIVE_SYMBOL && hasOwn(Symbol, name)) {
      WellKnownSymbolsStore[name] = Symbol[name];
    } else if (USE_SYMBOL_AS_UID && symbolFor) {
      WellKnownSymbolsStore[name] = symbolFor(description);
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
    }
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "./node_modules/core-js/internals/whitespaces.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/whitespaces.js ***!
  \*******************************************************/
/***/ (function(module) {

// a string of all valid unicode whitespaces
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
  '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.filter.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.filter.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $filter = (__webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").filter);
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');

// `Array.prototype.filter` method
// https://tc39.es/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.sort.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.sort.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var aCallable = __webpack_require__(/*! ../internals/a-callable */ "./node_modules/core-js/internals/a-callable.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "./node_modules/core-js/internals/length-of-array-like.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var internalSort = __webpack_require__(/*! ../internals/array-sort */ "./node_modules/core-js/internals/array-sort.js");
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "./node_modules/core-js/internals/array-method-is-strict.js");
var FF = __webpack_require__(/*! ../internals/engine-ff-version */ "./node_modules/core-js/internals/engine-ff-version.js");
var IE_OR_EDGE = __webpack_require__(/*! ../internals/engine-is-ie-or-edge */ "./node_modules/core-js/internals/engine-is-ie-or-edge.js");
var V8 = __webpack_require__(/*! ../internals/engine-v8-version */ "./node_modules/core-js/internals/engine-v8-version.js");
var WEBKIT = __webpack_require__(/*! ../internals/engine-webkit-version */ "./node_modules/core-js/internals/engine-webkit-version.js");

var test = [];
var un$Sort = uncurryThis(test.sort);
var push = uncurryThis(test.push);

// IE8-
var FAILS_ON_UNDEFINED = fails(function () {
  test.sort(undefined);
});
// V8 bug
var FAILS_ON_NULL = fails(function () {
  test.sort(null);
});
// Old WebKit
var STRICT_METHOD = arrayMethodIsStrict('sort');

var STABLE_SORT = !fails(function () {
  // feature detection can be too slow, so check engines versions
  if (V8) return V8 < 70;
  if (FF && FF > 3) return;
  if (IE_OR_EDGE) return true;
  if (WEBKIT) return WEBKIT < 603;

  var result = '';
  var code, chr, value, index;

  // generate an array with more 512 elements (Chakra and old V8 fails only in this case)
  for (code = 65; code < 76; code++) {
    chr = String.fromCharCode(code);

    switch (code) {
      case 66: case 69: case 70: case 72: value = 3; break;
      case 68: case 71: value = 4; break;
      default: value = 2;
    }

    for (index = 0; index < 47; index++) {
      test.push({ k: chr + index, v: value });
    }
  }

  test.sort(function (a, b) { return b.v - a.v; });

  for (index = 0; index < test.length; index++) {
    chr = test[index].k.charAt(0);
    if (result.charAt(result.length - 1) !== chr) result += chr;
  }

  return result !== 'DGBEFHACIJK';
});

var FORCED = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD || !STABLE_SORT;

var getSortCompare = function (comparefn) {
  return function (x, y) {
    if (y === undefined) return -1;
    if (x === undefined) return 1;
    if (comparefn !== undefined) return +comparefn(x, y) || 0;
    return toString(x) > toString(y) ? 1 : -1;
  };
};

// `Array.prototype.sort` method
// https://tc39.es/ecma262/#sec-array.prototype.sort
$({ target: 'Array', proto: true, forced: FORCED }, {
  sort: function sort(comparefn) {
    if (comparefn !== undefined) aCallable(comparefn);

    var array = toObject(this);

    if (STABLE_SORT) return comparefn === undefined ? un$Sort(array) : un$Sort(array, comparefn);

    var items = [];
    var arrayLength = lengthOfArrayLike(array);
    var itemsLength, index;

    for (index = 0; index < arrayLength; index++) {
      if (index in array) push(items, array[index]);
    }

    internalSort(items, getSortCompare(comparefn));

    itemsLength = items.length;
    index = 0;

    while (index < itemsLength) array[index] = items[index++];
    while (index < arrayLength) delete array[index++];

    return array;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.json.stringify.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.json.stringify.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var apply = __webpack_require__(/*! ../internals/function-apply */ "./node_modules/core-js/internals/function-apply.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var Array = global.Array;
var $stringify = getBuiltIn('JSON', 'stringify');
var exec = uncurryThis(/./.exec);
var charAt = uncurryThis(''.charAt);
var charCodeAt = uncurryThis(''.charCodeAt);
var replace = uncurryThis(''.replace);
var numberToString = uncurryThis(1.0.toString);

var tester = /[\uD800-\uDFFF]/g;
var low = /^[\uD800-\uDBFF]$/;
var hi = /^[\uDC00-\uDFFF]$/;

var fix = function (match, offset, string) {
  var prev = charAt(string, offset - 1);
  var next = charAt(string, offset + 1);
  if ((exec(low, match) && !exec(hi, next)) || (exec(hi, match) && !exec(low, prev))) {
    return '\\u' + numberToString(charCodeAt(match, 0), 16);
  } return match;
};

var FORCED = fails(function () {
  return $stringify('\uDF06\uD834') !== '"\\udf06\\ud834"'
    || $stringify('\uDEAD') !== '"\\udead"';
});

if ($stringify) {
  // `JSON.stringify` method
  // https://tc39.es/ecma262/#sec-json.stringify
  // https://github.com/tc39/proposal-well-formed-stringify
  $({ target: 'JSON', stat: true, forced: FORCED }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    stringify: function stringify(it, replacer, space) {
      for (var i = 0, l = arguments.length, args = Array(l); i < l; i++) args[i] = arguments[i];
      var result = apply($stringify, null, args);
      return typeof result == 'string' ? replace(result, tester, fix) : result;
    }
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.to-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.to-string.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ "./node_modules/core-js/internals/to-string-tag-support.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var toString = __webpack_require__(/*! ../internals/object-to-string */ "./node_modules/core-js/internals/object-to-string.js");

// `Object.prototype.toString` method
// https://tc39.es/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) {
  redefine(Object.prototype, 'toString', toString, { unsafe: true });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.trim.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.trim.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $trim = (__webpack_require__(/*! ../internals/string-trim */ "./node_modules/core-js/internals/string-trim.js").trim);
var forcedStringTrimMethod = __webpack_require__(/*! ../internals/string-trim-forced */ "./node_modules/core-js/internals/string-trim-forced.js");

// `String.prototype.trim` method
// https://tc39.es/ecma262/#sec-string.prototype.trim
$({ target: 'String', proto: true, forced: forcedStringTrimMethod('trim') }, {
  trim: function trim() {
    return $trim(this);
  }
});


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/bootstrap-vue/dist/bootstrap-vue.css":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/bootstrap-vue/dist/bootstrap-vue.css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n/*!\n * BootstrapVue Custom CSS (https://bootstrap-vue.org)\n */\n.bv-no-focus-ring:focus {\n  outline: none;\n}\n\n@media (max-width: 575.98px) {\n  .bv-d-xs-down-none {\n    display: none !important;\n  }\n}\n@media (max-width: 767.98px) {\n  .bv-d-sm-down-none {\n    display: none !important;\n  }\n}\n@media (max-width: 991.98px) {\n  .bv-d-md-down-none {\n    display: none !important;\n  }\n}\n@media (max-width: 1199.98px) {\n  .bv-d-lg-down-none {\n    display: none !important;\n  }\n}\n.bv-d-xl-down-none {\n  display: none !important;\n}\n\n.form-control.focus {\n  color: #495057;\n  background-color: #fff;\n  border-color: #80bdff;\n  outline: 0;\n  -webkit-box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n          box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n.form-control.focus.is-valid {\n  border-color: #28a745;\n  -webkit-box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);\n          box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);\n}\n.form-control.focus.is-invalid {\n  border-color: #dc3545;\n  -webkit-box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\n          box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\n}\n\n.b-avatar {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  vertical-align: middle;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n  width: 2.5rem;\n  height: 2.5rem;\n  font-size: inherit;\n  font-weight: 400;\n  line-height: 1;\n  max-width: 100%;\n  max-height: auto;\n  text-align: center;\n  overflow: visible;\n  position: relative;\n  -webkit-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n}\n.b-avatar:focus {\n  outline: 0;\n}\n.b-avatar.btn, .b-avatar[href] {\n  padding: 0;\n  border: 0;\n}\n.b-avatar.btn .b-avatar-img img, .b-avatar[href] .b-avatar-img img {\n  transition: -webkit-transform 0.15s ease-in-out;\n  -webkit-transition: -webkit-transform 0.15s ease-in-out;\n  transition: transform 0.15s ease-in-out;\n  transition: transform 0.15s ease-in-out, -webkit-transform 0.15s ease-in-out;\n}\n.b-avatar.btn:not(:disabled):not(.disabled), .b-avatar[href]:not(:disabled):not(.disabled) {\n  cursor: pointer;\n}\n.b-avatar.btn:not(:disabled):not(.disabled):hover .b-avatar-img img, .b-avatar[href]:not(:disabled):not(.disabled):hover .b-avatar-img img {\n  -webkit-transform: scale(1.15);\n  transform: scale(1.15);\n}\n.b-avatar.disabled, .b-avatar:disabled, .b-avatar[disabled] {\n  opacity: 0.65;\n  pointer-events: none;\n}\n.b-avatar .b-avatar-custom,\n.b-avatar .b-avatar-text,\n.b-avatar .b-avatar-img {\n  border-radius: inherit;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-mask-image: radial-gradient(white, black);\n  mask-image: radial-gradient(white, black);\n}\n.b-avatar .b-avatar-text {\n  text-transform: uppercase;\n  white-space: nowrap;\n}\n.b-avatar[href] {\n  text-decoration: none;\n}\n.b-avatar > .b-icon {\n  width: 60%;\n  height: auto;\n  max-width: 100%;\n}\n.b-avatar .b-avatar-img img {\n  width: 100%;\n  height: 100%;\n  max-height: auto;\n  border-radius: inherit;\n  -o-object-fit: cover;\n  object-fit: cover;\n}\n.b-avatar .b-avatar-badge {\n  position: absolute;\n  min-height: 1.5em;\n  min-width: 1.5em;\n  padding: 0.25em;\n  line-height: 1;\n  border-radius: 10em;\n  font-size: 70%;\n  font-weight: 700;\n  z-index: 1;\n}\n\n.b-avatar-sm {\n  width: 1.5rem;\n  height: 1.5rem;\n}\n.b-avatar-sm .b-avatar-text {\n  font-size: calc(0.6rem);\n}\n.b-avatar-sm .b-avatar-badge {\n  font-size: calc(0.42rem);\n}\n\n.b-avatar-lg {\n  width: 3.5rem;\n  height: 3.5rem;\n}\n.b-avatar-lg .b-avatar-text {\n  font-size: calc(1.4rem);\n}\n.b-avatar-lg .b-avatar-badge {\n  font-size: calc(0.98rem);\n}\n\n.b-avatar-group .b-avatar-group-inner {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n.b-avatar-group .b-avatar {\n  border: 1px solid #dee2e6;\n}\n.b-avatar-group a.b-avatar:hover:not(.disabled):not(disabled),\n.b-avatar-group .btn.b-avatar:hover:not(.disabled):not(disabled) {\n  z-index: 1;\n}\n\n.b-calendar {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n}\n.b-calendar .b-calendar-inner {\n  min-width: 250px;\n}\n.b-calendar .b-calendar-header,\n.b-calendar .b-calendar-nav {\n  margin-bottom: 0.25rem;\n}\n.b-calendar .b-calendar-nav .btn {\n  padding: 0.25rem;\n}\n.b-calendar output {\n  padding: 0.25rem;\n  font-size: 80%;\n}\n.b-calendar output.readonly {\n  background-color: #e9ecef;\n  opacity: 1;\n}\n.b-calendar .b-calendar-footer {\n  margin-top: 0.5rem;\n}\n.b-calendar .b-calendar-grid {\n  padding: 0;\n  margin: 0;\n  overflow: hidden;\n}\n.b-calendar .b-calendar-grid .row {\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n}\n.b-calendar .b-calendar-grid-caption {\n  padding: 0.25rem;\n}\n.b-calendar .b-calendar-grid-body .col[data-date] .btn {\n  width: 32px;\n  height: 32px;\n  font-size: 14px;\n  line-height: 1;\n  margin: 3px auto;\n  padding: 9px 0;\n}\n.b-calendar .btn:disabled, .b-calendar .btn.disabled, .b-calendar .btn[aria-disabled=true] {\n  cursor: default;\n  pointer-events: none;\n}\n\n.card-img-left {\n  border-top-left-radius: calc(0.25rem - 1px);\n  border-bottom-left-radius: calc(0.25rem - 1px);\n}\n\n.card-img-right {\n  border-top-right-radius: calc(0.25rem - 1px);\n  border-bottom-right-radius: calc(0.25rem - 1px);\n}\n\n.dropdown:not(.dropleft) .dropdown-toggle.dropdown-toggle-no-caret::after {\n  display: none !important;\n}\n.dropdown.dropleft .dropdown-toggle.dropdown-toggle-no-caret::before {\n  display: none !important;\n}\n.dropdown .dropdown-menu:focus {\n  outline: none;\n}\n\n.b-dropdown-form {\n  display: inline-block;\n  padding: 0.25rem 1.5rem;\n  width: 100%;\n  clear: both;\n  font-weight: 400;\n}\n.b-dropdown-form:focus {\n  outline: 1px dotted !important;\n  outline: 5px auto -webkit-focus-ring-color !important;\n}\n.b-dropdown-form.disabled, .b-dropdown-form:disabled {\n  outline: 0 !important;\n  color: #6c757d;\n  pointer-events: none;\n}\n\n.b-dropdown-text {\n  display: inline-block;\n  padding: 0.25rem 1.5rem;\n  margin-bottom: 0;\n  width: 100%;\n  clear: both;\n  font-weight: lighter;\n}\n\n.custom-checkbox.b-custom-control-lg,\n.input-group-lg .custom-checkbox {\n  font-size: 1.25rem;\n  line-height: 1.5;\n  padding-left: 1.875rem;\n}\n.custom-checkbox.b-custom-control-lg .custom-control-label::before,\n.input-group-lg .custom-checkbox .custom-control-label::before {\n  top: 0.3125rem;\n  left: -1.875rem;\n  width: 1.25rem;\n  height: 1.25rem;\n  border-radius: 0.3rem;\n}\n.custom-checkbox.b-custom-control-lg .custom-control-label::after,\n.input-group-lg .custom-checkbox .custom-control-label::after {\n  top: 0.3125rem;\n  left: -1.875rem;\n  width: 1.25rem;\n  height: 1.25rem;\n  background-size: 50% 50%;\n}\n\n.custom-checkbox.b-custom-control-sm,\n.input-group-sm .custom-checkbox {\n  font-size: 0.875rem;\n  line-height: 1.5;\n  padding-left: 1.3125rem;\n}\n.custom-checkbox.b-custom-control-sm .custom-control-label::before,\n.input-group-sm .custom-checkbox .custom-control-label::before {\n  top: 0.21875rem;\n  left: -1.3125rem;\n  width: 0.875rem;\n  height: 0.875rem;\n  border-radius: 0.2rem;\n}\n.custom-checkbox.b-custom-control-sm .custom-control-label::after,\n.input-group-sm .custom-checkbox .custom-control-label::after {\n  top: 0.21875rem;\n  left: -1.3125rem;\n  width: 0.875rem;\n  height: 0.875rem;\n  background-size: 50% 50%;\n}\n\n.custom-switch.b-custom-control-lg,\n.input-group-lg .custom-switch {\n  padding-left: 2.8125rem;\n}\n.custom-switch.b-custom-control-lg .custom-control-label,\n.input-group-lg .custom-switch .custom-control-label {\n  font-size: 1.25rem;\n  line-height: 1.5;\n}\n.custom-switch.b-custom-control-lg .custom-control-label::before,\n.input-group-lg .custom-switch .custom-control-label::before {\n  top: 0.3125rem;\n  height: 1.25rem;\n  left: -2.8125rem;\n  width: 2.1875rem;\n  border-radius: 0.625rem;\n}\n.custom-switch.b-custom-control-lg .custom-control-label::after,\n.input-group-lg .custom-switch .custom-control-label::after {\n  top: calc( 0.3125rem + 2px );\n  left: calc( -2.8125rem + 2px );\n  width: calc( 1.25rem - 4px );\n  height: calc( 1.25rem - 4px );\n  border-radius: 0.625rem;\n  background-size: 50% 50%;\n}\n.custom-switch.b-custom-control-lg .custom-control-input:checked ~ .custom-control-label::after,\n.input-group-lg .custom-switch .custom-control-input:checked ~ .custom-control-label::after {\n  -webkit-transform: translateX(0.9375rem);\n  transform: translateX(0.9375rem);\n}\n\n.custom-switch.b-custom-control-sm,\n.input-group-sm .custom-switch {\n  padding-left: 1.96875rem;\n}\n.custom-switch.b-custom-control-sm .custom-control-label,\n.input-group-sm .custom-switch .custom-control-label {\n  font-size: 0.875rem;\n  line-height: 1.5;\n}\n.custom-switch.b-custom-control-sm .custom-control-label::before,\n.input-group-sm .custom-switch .custom-control-label::before {\n  top: 0.21875rem;\n  left: -1.96875rem;\n  width: 1.53125rem;\n  height: 0.875rem;\n  border-radius: 0.4375rem;\n}\n.custom-switch.b-custom-control-sm .custom-control-label::after,\n.input-group-sm .custom-switch .custom-control-label::after {\n  top: calc( 0.21875rem + 2px );\n  left: calc( -1.96875rem + 2px );\n  width: calc( 0.875rem - 4px );\n  height: calc( 0.875rem - 4px );\n  border-radius: 0.4375rem;\n  background-size: 50% 50%;\n}\n.custom-switch.b-custom-control-sm .custom-control-input:checked ~ .custom-control-label::after,\n.input-group-sm .custom-switch .custom-control-input:checked ~ .custom-control-label::after {\n  -webkit-transform: translateX(0.65625rem);\n  transform: translateX(0.65625rem);\n}\n\n.input-group > .input-group-prepend > .btn-group > .btn,\n.input-group > .input-group-append:not(:last-child) > .btn-group > .btn,\n.input-group > .input-group-append:last-child > .btn-group:not(:last-child):not(.dropdown-toggle) > .btn {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.input-group > .input-group-append > .btn-group > .btn,\n.input-group > .input-group-prepend:not(:first-child) > .btn-group > .btn,\n.input-group > .input-group-prepend:first-child > .btn-group:not(:first-child) > .btn {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.b-form-btn-label-control.form-control {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  height: auto;\n  padding: 0;\n  background-image: none;\n}\n.input-group .b-form-btn-label-control.form-control {\n  padding: 0;\n}\n\n[dir=rtl] .b-form-btn-label-control.form-control, .b-form-btn-label-control.form-control[dir=rtl] {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n      -ms-flex-direction: row-reverse;\n          flex-direction: row-reverse;\n}\n[dir=rtl] .b-form-btn-label-control.form-control > label, .b-form-btn-label-control.form-control[dir=rtl] > label {\n  text-align: right;\n}\n\n.b-form-btn-label-control.form-control > .btn {\n  line-height: 1;\n  font-size: inherit;\n  -webkit-box-shadow: none !important;\n          box-shadow: none !important;\n  border: 0;\n}\n.b-form-btn-label-control.form-control > .btn:disabled {\n  pointer-events: none;\n}\n.b-form-btn-label-control.form-control.is-valid > .btn {\n  color: #28a745;\n}\n.b-form-btn-label-control.form-control.is-invalid > .btn {\n  color: #dc3545;\n}\n.b-form-btn-label-control.form-control > .dropdown-menu {\n  padding: 0.5rem;\n}\n.b-form-btn-label-control.form-control > .form-control {\n  height: auto;\n  min-height: calc(calc(1.5em + 0.75rem + 2px) - 2px);\n  padding-left: 0.25rem;\n  margin: 0;\n  border: 0;\n  outline: 0;\n  background: transparent;\n  word-break: break-word;\n  font-size: inherit;\n  white-space: normal;\n  cursor: pointer;\n}\n.b-form-btn-label-control.form-control > .form-control.form-control-sm {\n  min-height: calc(calc(1.5em + 0.5rem + 2px) - 2px);\n}\n.b-form-btn-label-control.form-control > .form-control.form-control-lg {\n  min-height: calc(calc(1.5em + 1rem + 2px) - 2px);\n}\n.input-group.input-group-sm .b-form-btn-label-control.form-control > .form-control {\n  min-height: calc(calc(1.5em + 0.5rem + 2px) - 2px);\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n}\n\n.input-group.input-group-lg .b-form-btn-label-control.form-control > .form-control {\n  min-height: calc(calc(1.5em + 1rem + 2px) - 2px);\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n\n.b-form-btn-label-control.form-control[aria-disabled=true], .b-form-btn-label-control.form-control[aria-readonly=true] {\n  background-color: #e9ecef;\n  opacity: 1;\n}\n.b-form-btn-label-control.form-control[aria-disabled=true] {\n  pointer-events: none;\n}\n.b-form-btn-label-control.form-control[aria-disabled=true] > label {\n  cursor: default;\n}\n\n.b-form-btn-label-control.btn-group > .dropdown-menu {\n  padding: 0.5rem;\n}\n\n.custom-file-label {\n  white-space: nowrap;\n  overflow-x: hidden;\n}\n\n.b-custom-control-lg.custom-file,\n.b-custom-control-lg .custom-file-input,\n.b-custom-control-lg .custom-file-label,\n.input-group-lg.custom-file,\n.input-group-lg .custom-file-input,\n.input-group-lg .custom-file-label {\n  font-size: 1.25rem;\n  height: calc(1.5em + 1rem + 2px);\n}\n.b-custom-control-lg .custom-file-label,\n.b-custom-control-lg .custom-file-label:after,\n.input-group-lg .custom-file-label,\n.input-group-lg .custom-file-label:after {\n  padding: 0.5rem 1rem;\n  line-height: 1.5;\n}\n.b-custom-control-lg .custom-file-label,\n.input-group-lg .custom-file-label {\n  border-radius: 0.3rem;\n}\n.b-custom-control-lg .custom-file-label::after,\n.input-group-lg .custom-file-label::after {\n  font-size: inherit;\n  height: calc( 1.5em + 1rem );\n  border-radius: 0 0.3rem 0.3rem 0;\n}\n\n.b-custom-control-sm.custom-file,\n.b-custom-control-sm .custom-file-input,\n.b-custom-control-sm .custom-file-label,\n.input-group-sm.custom-file,\n.input-group-sm .custom-file-input,\n.input-group-sm .custom-file-label {\n  font-size: 0.875rem;\n  height: calc(1.5em + 0.5rem + 2px);\n}\n.b-custom-control-sm .custom-file-label,\n.b-custom-control-sm .custom-file-label:after,\n.input-group-sm .custom-file-label,\n.input-group-sm .custom-file-label:after {\n  padding: 0.25rem 0.5rem;\n  line-height: 1.5;\n}\n.b-custom-control-sm .custom-file-label,\n.input-group-sm .custom-file-label {\n  border-radius: 0.2rem;\n}\n.b-custom-control-sm .custom-file-label::after,\n.input-group-sm .custom-file-label::after {\n  font-size: inherit;\n  height: calc( 1.5em + 0.5rem );\n  border-radius: 0 0.2rem 0.2rem 0;\n}\n\n.was-validated .form-control:invalid, .was-validated .form-control:valid, .form-control.is-invalid, .form-control.is-valid {\n  background-position: right calc(0.375em + 0.1875rem) center;\n}\n\ninput[type=color].form-control {\n  height: calc(1.5em + 0.75rem + 2px);\n  padding: 0.125rem 0.25rem;\n}\n\ninput[type=color].form-control.form-control-sm,\n.input-group-sm input[type=color].form-control {\n  height: calc(1.5em + 0.5rem + 2px);\n  padding: 0.125rem 0.25rem;\n}\n\ninput[type=color].form-control.form-control-lg,\n.input-group-lg input[type=color].form-control {\n  height: calc(1.5em + 1rem + 2px);\n  padding: 0.125rem 0.25rem;\n}\n\ninput[type=color].form-control:disabled {\n  background-color: #adb5bd;\n  opacity: 0.65;\n}\n\n.input-group > .custom-range {\n  position: relative;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  width: 1%;\n  margin-bottom: 0;\n}\n.input-group > .custom-range + .form-control,\n.input-group > .custom-range + .form-control-plaintext,\n.input-group > .custom-range + .custom-select,\n.input-group > .custom-range + .custom-range,\n.input-group > .custom-range + .custom-file {\n  margin-left: -1px;\n}\n.input-group > .form-control + .custom-range,\n.input-group > .form-control-plaintext + .custom-range,\n.input-group > .custom-select + .custom-range,\n.input-group > .custom-range + .custom-range,\n.input-group > .custom-file + .custom-range {\n  margin-left: -1px;\n}\n.input-group > .custom-range:focus {\n  z-index: 3;\n}\n.input-group > .custom-range:not(:last-child) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.input-group > .custom-range:not(:first-child) {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.input-group > .custom-range {\n  height: calc(1.5em + 0.75rem + 2px);\n  padding: 0 0.75rem;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  height: calc(1.5em + 0.75rem + 2px);\n  border-radius: 0.25rem;\n  -webkit-transition: border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n  transition: border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n  .input-group > .custom-range {\n    -webkit-transition: none;\n    transition: none;\n  }\n}\n.input-group > .custom-range:focus {\n  color: #495057;\n  background-color: #fff;\n  border-color: #80bdff;\n  outline: 0;\n  -webkit-box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n          box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n.input-group > .custom-range:disabled, .input-group > .custom-range[readonly] {\n  background-color: #e9ecef;\n}\n\n.input-group-lg > .custom-range {\n  height: calc(1.5em + 1rem + 2px);\n  padding: 0 1rem;\n  border-radius: 0.3rem;\n}\n\n.input-group-sm > .custom-range {\n  height: calc(1.5em + 0.5rem + 2px);\n  padding: 0 0.5rem;\n  border-radius: 0.2rem;\n}\n\n.was-validated .input-group .custom-range:valid, .input-group .custom-range.is-valid {\n  border-color: #28a745;\n}\n.was-validated .input-group .custom-range:valid:focus, .input-group .custom-range.is-valid:focus {\n  border-color: #28a745;\n  -webkit-box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);\n          box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);\n}\n\n.was-validated .custom-range:valid:focus::-webkit-slider-thumb, .custom-range.is-valid:focus::-webkit-slider-thumb {\n  -webkit-box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem #9be7ac;\n          box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem #9be7ac;\n}\n.was-validated .custom-range:valid:focus::-moz-range-thumb, .custom-range.is-valid:focus::-moz-range-thumb {\n  box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem #9be7ac;\n}\n.was-validated .custom-range:valid:focus::-ms-thumb, .custom-range.is-valid:focus::-ms-thumb {\n  box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem #9be7ac;\n}\n.was-validated .custom-range:valid::-webkit-slider-thumb, .custom-range.is-valid::-webkit-slider-thumb {\n  background-color: #28a745;\n  background-image: none;\n}\n.was-validated .custom-range:valid::-webkit-slider-thumb:active, .custom-range.is-valid::-webkit-slider-thumb:active {\n  background-color: #9be7ac;\n  background-image: none;\n}\n.was-validated .custom-range:valid::-webkit-slider-runnable-track, .custom-range.is-valid::-webkit-slider-runnable-track {\n  background-color: rgba(40, 167, 69, 0.35);\n}\n.was-validated .custom-range:valid::-moz-range-thumb, .custom-range.is-valid::-moz-range-thumb {\n  background-color: #28a745;\n  background-image: none;\n}\n.was-validated .custom-range:valid::-moz-range-thumb:active, .custom-range.is-valid::-moz-range-thumb:active {\n  background-color: #9be7ac;\n  background-image: none;\n}\n.was-validated .custom-range:valid::-moz-range-track, .custom-range.is-valid::-moz-range-track {\n  background: rgba(40, 167, 69, 0.35);\n}\n.was-validated .custom-range:valid ~ .valid-feedback,\n.was-validated .custom-range:valid ~ .valid-tooltip, .custom-range.is-valid ~ .valid-feedback,\n.custom-range.is-valid ~ .valid-tooltip {\n  display: block;\n}\n.was-validated .custom-range:valid::-ms-thumb, .custom-range.is-valid::-ms-thumb {\n  background-color: #28a745;\n  background-image: none;\n}\n.was-validated .custom-range:valid::-ms-thumb:active, .custom-range.is-valid::-ms-thumb:active {\n  background-color: #9be7ac;\n  background-image: none;\n}\n.was-validated .custom-range:valid::-ms-track-lower, .custom-range.is-valid::-ms-track-lower {\n  background: rgba(40, 167, 69, 0.35);\n}\n.was-validated .custom-range:valid::-ms-track-upper, .custom-range.is-valid::-ms-track-upper {\n  background: rgba(40, 167, 69, 0.35);\n}\n\n.was-validated .input-group .custom-range:invalid, .input-group .custom-range.is-invalid {\n  border-color: #dc3545;\n}\n.was-validated .input-group .custom-range:invalid:focus, .input-group .custom-range.is-invalid:focus {\n  border-color: #dc3545;\n  -webkit-box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\n          box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\n}\n\n.was-validated .custom-range:invalid:focus::-webkit-slider-thumb, .custom-range.is-invalid:focus::-webkit-slider-thumb {\n  -webkit-box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem #f6cdd1;\n          box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem #f6cdd1;\n}\n.was-validated .custom-range:invalid:focus::-moz-range-thumb, .custom-range.is-invalid:focus::-moz-range-thumb {\n  box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem #f6cdd1;\n}\n.was-validated .custom-range:invalid:focus::-ms-thumb, .custom-range.is-invalid:focus::-ms-thumb {\n  box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem #f6cdd1;\n}\n.was-validated .custom-range:invalid::-webkit-slider-thumb, .custom-range.is-invalid::-webkit-slider-thumb {\n  background-color: #dc3545;\n  background-image: none;\n}\n.was-validated .custom-range:invalid::-webkit-slider-thumb:active, .custom-range.is-invalid::-webkit-slider-thumb:active {\n  background-color: #f6cdd1;\n  background-image: none;\n}\n.was-validated .custom-range:invalid::-webkit-slider-runnable-track, .custom-range.is-invalid::-webkit-slider-runnable-track {\n  background-color: rgba(220, 53, 69, 0.35);\n}\n.was-validated .custom-range:invalid::-moz-range-thumb, .custom-range.is-invalid::-moz-range-thumb {\n  background-color: #dc3545;\n  background-image: none;\n}\n.was-validated .custom-range:invalid::-moz-range-thumb:active, .custom-range.is-invalid::-moz-range-thumb:active {\n  background-color: #f6cdd1;\n  background-image: none;\n}\n.was-validated .custom-range:invalid::-moz-range-track, .custom-range.is-invalid::-moz-range-track {\n  background: rgba(220, 53, 69, 0.35);\n}\n.was-validated .custom-range:invalid ~ .invalid-feedback,\n.was-validated .custom-range:invalid ~ .invalid-tooltip, .custom-range.is-invalid ~ .invalid-feedback,\n.custom-range.is-invalid ~ .invalid-tooltip {\n  display: block;\n}\n.was-validated .custom-range:invalid::-ms-thumb, .custom-range.is-invalid::-ms-thumb {\n  background-color: #dc3545;\n  background-image: none;\n}\n.was-validated .custom-range:invalid::-ms-thumb:active, .custom-range.is-invalid::-ms-thumb:active {\n  background-color: #f6cdd1;\n  background-image: none;\n}\n.was-validated .custom-range:invalid::-ms-track-lower, .custom-range.is-invalid::-ms-track-lower {\n  background: rgba(220, 53, 69, 0.35);\n}\n.was-validated .custom-range:invalid::-ms-track-upper, .custom-range.is-invalid::-ms-track-upper {\n  background: rgba(220, 53, 69, 0.35);\n}\n\n.custom-radio.b-custom-control-lg,\n.input-group-lg .custom-radio {\n  font-size: 1.25rem;\n  line-height: 1.5;\n  padding-left: 1.875rem;\n}\n.custom-radio.b-custom-control-lg .custom-control-label::before,\n.input-group-lg .custom-radio .custom-control-label::before {\n  top: 0.3125rem;\n  left: -1.875rem;\n  width: 1.25rem;\n  height: 1.25rem;\n  border-radius: 50%;\n}\n.custom-radio.b-custom-control-lg .custom-control-label::after,\n.input-group-lg .custom-radio .custom-control-label::after {\n  top: 0.3125rem;\n  left: -1.875rem;\n  width: 1.25rem;\n  height: 1.25rem;\n  background: no-repeat 50%/50% 50%;\n}\n\n.custom-radio.b-custom-control-sm,\n.input-group-sm .custom-radio {\n  font-size: 0.875rem;\n  line-height: 1.5;\n  padding-left: 1.3125rem;\n}\n.custom-radio.b-custom-control-sm .custom-control-label::before,\n.input-group-sm .custom-radio .custom-control-label::before {\n  top: 0.21875rem;\n  left: -1.3125rem;\n  width: 0.875rem;\n  height: 0.875rem;\n  border-radius: 50%;\n}\n.custom-radio.b-custom-control-sm .custom-control-label::after,\n.input-group-sm .custom-radio .custom-control-label::after {\n  top: 0.21875rem;\n  left: -1.3125rem;\n  width: 0.875rem;\n  height: 0.875rem;\n  background: no-repeat 50%/50% 50%;\n}\n\n.b-rating {\n  text-align: center;\n}\n.b-rating.d-inline-flex {\n  width: auto;\n}\n.b-rating .b-rating-star,\n.b-rating .b-rating-value {\n  padding: 0 0.25em;\n}\n.b-rating .b-rating-value {\n  min-width: 2.5em;\n}\n.b-rating .b-rating-star {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  outline: 0;\n}\n.b-rating .b-rating-star .b-rating-icon {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-transition: all 0.15s ease-in-out;\n  transition: all 0.15s ease-in-out;\n}\n.b-rating.disabled, .b-rating:disabled {\n  background-color: #e9ecef;\n  color: #6c757d;\n}\n.b-rating:not(.disabled):not(.readonly) .b-rating-star {\n  cursor: pointer;\n}\n.b-rating:not(.disabled):not(.readonly):focus:not(:hover) .b-rating-star.focused .b-rating-icon,\n.b-rating:not(.disabled):not(.readonly) .b-rating-star:hover .b-rating-icon {\n  -webkit-transform: scale(1.5);\n  transform: scale(1.5);\n}\n.b-rating[dir=rtl] .b-rating-star-half {\n  -webkit-transform: scale(-1, 1);\n  transform: scale(-1, 1);\n}\n\n.b-form-spinbutton {\n  text-align: center;\n  overflow: hidden;\n  background-image: none;\n  padding: 0;\n}\n[dir=rtl] .b-form-spinbutton:not(.flex-column), .b-form-spinbutton[dir=rtl]:not(.flex-column) {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n      -ms-flex-direction: row-reverse;\n          flex-direction: row-reverse;\n}\n\n.b-form-spinbutton output {\n  font-size: inherit;\n  outline: 0;\n  border: 0;\n  background-color: transparent;\n  width: auto;\n  margin: 0;\n  padding: 0 0.25rem;\n}\n.b-form-spinbutton output > div,\n.b-form-spinbutton output > bdi {\n  display: block;\n  min-width: 2.25em;\n  height: 1.5em;\n}\n.b-form-spinbutton.flex-column {\n  height: auto;\n  width: auto;\n}\n.b-form-spinbutton.flex-column output {\n  margin: 0 0.25rem;\n  padding: 0.25rem 0;\n}\n.b-form-spinbutton:not(.d-inline-flex):not(.flex-column) {\n  output-width: 100%;\n}\n.b-form-spinbutton.d-inline-flex:not(.flex-column) {\n  width: auto;\n}\n.b-form-spinbutton .btn {\n  line-height: 1;\n  -webkit-box-shadow: none !important;\n          box-shadow: none !important;\n}\n.b-form-spinbutton .btn:disabled {\n  pointer-events: none;\n}\n.b-form-spinbutton .btn:hover:not(:disabled) > div > .b-icon {\n  -webkit-transform: scale(1.25);\n  transform: scale(1.25);\n}\n.b-form-spinbutton.disabled, .b-form-spinbutton.readonly {\n  background-color: #e9ecef;\n}\n.b-form-spinbutton.disabled {\n  pointer-events: none;\n}\n\n.b-form-tags .b-form-tags-list {\n  margin-top: -0.25rem;\n}\n.b-form-tags .b-form-tags-list .b-from-tags-field,\n.b-form-tags .b-form-tags-list .b-form-tag {\n  margin-top: 0.25rem;\n}\n.b-form-tags.focus {\n  color: #495057;\n  background-color: #fff;\n  border-color: #80bdff;\n  outline: 0;\n  -webkit-box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n          box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n.b-form-tags.focus.is-valid {\n  border-color: #28a745;\n  -webkit-box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);\n          box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);\n}\n.b-form-tags.focus.is-invalid {\n  border-color: #dc3545;\n  -webkit-box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\n          box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\n}\n.b-form-tags.disabled {\n  background-color: #e9ecef;\n}\n\n.b-form-tag {\n  font-size: 75%;\n  font-weight: normal;\n  line-height: 1.5;\n  margin-right: 0.25rem;\n}\n.b-form-tag.disabled {\n  opacity: 0.75;\n}\n.b-form-tag > button.b-form-tag-remove {\n  color: inherit;\n  font-size: 125%;\n  line-height: 1;\n  float: none;\n  margin-left: 0.25rem;\n}\n\n.form-control-sm .b-form-tag {\n  line-height: 1.5;\n}\n\n.form-control-lg .b-form-tag {\n  line-height: 1.5;\n}\n\n.media-aside {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin-right: 1rem;\n}\n\n.media-aside-right {\n  margin-right: 0;\n  margin-left: 1rem;\n}\n\n.modal-backdrop {\n  opacity: 0.5;\n}\n\n.b-pagination-pills .page-item .page-link {\n  border-radius: 50rem !important;\n  margin-left: 0.25rem;\n  line-height: 1;\n}\n.b-pagination-pills .page-item:first-child .page-link {\n  margin-left: 0;\n}\n\n.popover.b-popover {\n  display: block;\n  opacity: 1;\n  outline: 0;\n}\n.popover.b-popover.fade:not(.show) {\n  opacity: 0;\n}\n.popover.b-popover.show {\n  opacity: 1;\n}\n\n.b-popover-primary.popover {\n  background-color: #cce5ff;\n  border-color: #b8daff;\n}\n.b-popover-primary.bs-popover-top > .arrow::before, .b-popover-primary.bs-popover-auto[x-placement^=top] > .arrow::before {\n  border-top-color: #b8daff;\n}\n.b-popover-primary.bs-popover-top > .arrow::after, .b-popover-primary.bs-popover-auto[x-placement^=top] > .arrow::after {\n  border-top-color: #cce5ff;\n}\n.b-popover-primary.bs-popover-right > .arrow::before, .b-popover-primary.bs-popover-auto[x-placement^=right] > .arrow::before {\n  border-right-color: #b8daff;\n}\n.b-popover-primary.bs-popover-right > .arrow::after, .b-popover-primary.bs-popover-auto[x-placement^=right] > .arrow::after {\n  border-right-color: #cce5ff;\n}\n.b-popover-primary.bs-popover-bottom > .arrow::before, .b-popover-primary.bs-popover-auto[x-placement^=bottom] > .arrow::before {\n  border-bottom-color: #b8daff;\n}\n.b-popover-primary.bs-popover-bottom > .arrow::after, .b-popover-primary.bs-popover-auto[x-placement^=bottom] > .arrow::after {\n  border-bottom-color: #bdddff;\n}\n.b-popover-primary.bs-popover-bottom .popover-header::before, .b-popover-primary.bs-popover-auto[x-placement^=bottom] .popover-header::before {\n  border-bottom-color: #bdddff;\n}\n.b-popover-primary.bs-popover-left > .arrow::before, .b-popover-primary.bs-popover-auto[x-placement^=left] > .arrow::before {\n  border-left-color: #b8daff;\n}\n.b-popover-primary.bs-popover-left > .arrow::after, .b-popover-primary.bs-popover-auto[x-placement^=left] > .arrow::after {\n  border-left-color: #cce5ff;\n}\n.b-popover-primary .popover-header {\n  color: #212529;\n  background-color: #bdddff;\n  border-bottom-color: #a3d0ff;\n}\n.b-popover-primary .popover-body {\n  color: #004085;\n}\n\n.b-popover-secondary.popover {\n  background-color: #e2e3e5;\n  border-color: #d6d8db;\n}\n.b-popover-secondary.bs-popover-top > .arrow::before, .b-popover-secondary.bs-popover-auto[x-placement^=top] > .arrow::before {\n  border-top-color: #d6d8db;\n}\n.b-popover-secondary.bs-popover-top > .arrow::after, .b-popover-secondary.bs-popover-auto[x-placement^=top] > .arrow::after {\n  border-top-color: #e2e3e5;\n}\n.b-popover-secondary.bs-popover-right > .arrow::before, .b-popover-secondary.bs-popover-auto[x-placement^=right] > .arrow::before {\n  border-right-color: #d6d8db;\n}\n.b-popover-secondary.bs-popover-right > .arrow::after, .b-popover-secondary.bs-popover-auto[x-placement^=right] > .arrow::after {\n  border-right-color: #e2e3e5;\n}\n.b-popover-secondary.bs-popover-bottom > .arrow::before, .b-popover-secondary.bs-popover-auto[x-placement^=bottom] > .arrow::before {\n  border-bottom-color: #d6d8db;\n}\n.b-popover-secondary.bs-popover-bottom > .arrow::after, .b-popover-secondary.bs-popover-auto[x-placement^=bottom] > .arrow::after {\n  border-bottom-color: #dadbde;\n}\n.b-popover-secondary.bs-popover-bottom .popover-header::before, .b-popover-secondary.bs-popover-auto[x-placement^=bottom] .popover-header::before {\n  border-bottom-color: #dadbde;\n}\n.b-popover-secondary.bs-popover-left > .arrow::before, .b-popover-secondary.bs-popover-auto[x-placement^=left] > .arrow::before {\n  border-left-color: #d6d8db;\n}\n.b-popover-secondary.bs-popover-left > .arrow::after, .b-popover-secondary.bs-popover-auto[x-placement^=left] > .arrow::after {\n  border-left-color: #e2e3e5;\n}\n.b-popover-secondary .popover-header {\n  color: #212529;\n  background-color: #dadbde;\n  border-bottom-color: #ccced2;\n}\n.b-popover-secondary .popover-body {\n  color: #383d41;\n}\n\n.b-popover-success.popover {\n  background-color: #d4edda;\n  border-color: #c3e6cb;\n}\n.b-popover-success.bs-popover-top > .arrow::before, .b-popover-success.bs-popover-auto[x-placement^=top] > .arrow::before {\n  border-top-color: #c3e6cb;\n}\n.b-popover-success.bs-popover-top > .arrow::after, .b-popover-success.bs-popover-auto[x-placement^=top] > .arrow::after {\n  border-top-color: #d4edda;\n}\n.b-popover-success.bs-popover-right > .arrow::before, .b-popover-success.bs-popover-auto[x-placement^=right] > .arrow::before {\n  border-right-color: #c3e6cb;\n}\n.b-popover-success.bs-popover-right > .arrow::after, .b-popover-success.bs-popover-auto[x-placement^=right] > .arrow::after {\n  border-right-color: #d4edda;\n}\n.b-popover-success.bs-popover-bottom > .arrow::before, .b-popover-success.bs-popover-auto[x-placement^=bottom] > .arrow::before {\n  border-bottom-color: #c3e6cb;\n}\n.b-popover-success.bs-popover-bottom > .arrow::after, .b-popover-success.bs-popover-auto[x-placement^=bottom] > .arrow::after {\n  border-bottom-color: #c9e8d1;\n}\n.b-popover-success.bs-popover-bottom .popover-header::before, .b-popover-success.bs-popover-auto[x-placement^=bottom] .popover-header::before {\n  border-bottom-color: #c9e8d1;\n}\n.b-popover-success.bs-popover-left > .arrow::before, .b-popover-success.bs-popover-auto[x-placement^=left] > .arrow::before {\n  border-left-color: #c3e6cb;\n}\n.b-popover-success.bs-popover-left > .arrow::after, .b-popover-success.bs-popover-auto[x-placement^=left] > .arrow::after {\n  border-left-color: #d4edda;\n}\n.b-popover-success .popover-header {\n  color: #212529;\n  background-color: #c9e8d1;\n  border-bottom-color: #b7e1c1;\n}\n.b-popover-success .popover-body {\n  color: #155724;\n}\n\n.b-popover-info.popover {\n  background-color: #d1ecf1;\n  border-color: #bee5eb;\n}\n.b-popover-info.bs-popover-top > .arrow::before, .b-popover-info.bs-popover-auto[x-placement^=top] > .arrow::before {\n  border-top-color: #bee5eb;\n}\n.b-popover-info.bs-popover-top > .arrow::after, .b-popover-info.bs-popover-auto[x-placement^=top] > .arrow::after {\n  border-top-color: #d1ecf1;\n}\n.b-popover-info.bs-popover-right > .arrow::before, .b-popover-info.bs-popover-auto[x-placement^=right] > .arrow::before {\n  border-right-color: #bee5eb;\n}\n.b-popover-info.bs-popover-right > .arrow::after, .b-popover-info.bs-popover-auto[x-placement^=right] > .arrow::after {\n  border-right-color: #d1ecf1;\n}\n.b-popover-info.bs-popover-bottom > .arrow::before, .b-popover-info.bs-popover-auto[x-placement^=bottom] > .arrow::before {\n  border-bottom-color: #bee5eb;\n}\n.b-popover-info.bs-popover-bottom > .arrow::after, .b-popover-info.bs-popover-auto[x-placement^=bottom] > .arrow::after {\n  border-bottom-color: #c5e7ed;\n}\n.b-popover-info.bs-popover-bottom .popover-header::before, .b-popover-info.bs-popover-auto[x-placement^=bottom] .popover-header::before {\n  border-bottom-color: #c5e7ed;\n}\n.b-popover-info.bs-popover-left > .arrow::before, .b-popover-info.bs-popover-auto[x-placement^=left] > .arrow::before {\n  border-left-color: #bee5eb;\n}\n.b-popover-info.bs-popover-left > .arrow::after, .b-popover-info.bs-popover-auto[x-placement^=left] > .arrow::after {\n  border-left-color: #d1ecf1;\n}\n.b-popover-info .popover-header {\n  color: #212529;\n  background-color: #c5e7ed;\n  border-bottom-color: #b2dfe7;\n}\n.b-popover-info .popover-body {\n  color: #0c5460;\n}\n\n.b-popover-warning.popover {\n  background-color: #fff3cd;\n  border-color: #ffeeba;\n}\n.b-popover-warning.bs-popover-top > .arrow::before, .b-popover-warning.bs-popover-auto[x-placement^=top] > .arrow::before {\n  border-top-color: #ffeeba;\n}\n.b-popover-warning.bs-popover-top > .arrow::after, .b-popover-warning.bs-popover-auto[x-placement^=top] > .arrow::after {\n  border-top-color: #fff3cd;\n}\n.b-popover-warning.bs-popover-right > .arrow::before, .b-popover-warning.bs-popover-auto[x-placement^=right] > .arrow::before {\n  border-right-color: #ffeeba;\n}\n.b-popover-warning.bs-popover-right > .arrow::after, .b-popover-warning.bs-popover-auto[x-placement^=right] > .arrow::after {\n  border-right-color: #fff3cd;\n}\n.b-popover-warning.bs-popover-bottom > .arrow::before, .b-popover-warning.bs-popover-auto[x-placement^=bottom] > .arrow::before {\n  border-bottom-color: #ffeeba;\n}\n.b-popover-warning.bs-popover-bottom > .arrow::after, .b-popover-warning.bs-popover-auto[x-placement^=bottom] > .arrow::after {\n  border-bottom-color: #ffefbe;\n}\n.b-popover-warning.bs-popover-bottom .popover-header::before, .b-popover-warning.bs-popover-auto[x-placement^=bottom] .popover-header::before {\n  border-bottom-color: #ffefbe;\n}\n.b-popover-warning.bs-popover-left > .arrow::before, .b-popover-warning.bs-popover-auto[x-placement^=left] > .arrow::before {\n  border-left-color: #ffeeba;\n}\n.b-popover-warning.bs-popover-left > .arrow::after, .b-popover-warning.bs-popover-auto[x-placement^=left] > .arrow::after {\n  border-left-color: #fff3cd;\n}\n.b-popover-warning .popover-header {\n  color: #212529;\n  background-color: #ffefbe;\n  border-bottom-color: #ffe9a4;\n}\n.b-popover-warning .popover-body {\n  color: #856404;\n}\n\n.b-popover-danger.popover {\n  background-color: #f8d7da;\n  border-color: #f5c6cb;\n}\n.b-popover-danger.bs-popover-top > .arrow::before, .b-popover-danger.bs-popover-auto[x-placement^=top] > .arrow::before {\n  border-top-color: #f5c6cb;\n}\n.b-popover-danger.bs-popover-top > .arrow::after, .b-popover-danger.bs-popover-auto[x-placement^=top] > .arrow::after {\n  border-top-color: #f8d7da;\n}\n.b-popover-danger.bs-popover-right > .arrow::before, .b-popover-danger.bs-popover-auto[x-placement^=right] > .arrow::before {\n  border-right-color: #f5c6cb;\n}\n.b-popover-danger.bs-popover-right > .arrow::after, .b-popover-danger.bs-popover-auto[x-placement^=right] > .arrow::after {\n  border-right-color: #f8d7da;\n}\n.b-popover-danger.bs-popover-bottom > .arrow::before, .b-popover-danger.bs-popover-auto[x-placement^=bottom] > .arrow::before {\n  border-bottom-color: #f5c6cb;\n}\n.b-popover-danger.bs-popover-bottom > .arrow::after, .b-popover-danger.bs-popover-auto[x-placement^=bottom] > .arrow::after {\n  border-bottom-color: #f6cace;\n}\n.b-popover-danger.bs-popover-bottom .popover-header::before, .b-popover-danger.bs-popover-auto[x-placement^=bottom] .popover-header::before {\n  border-bottom-color: #f6cace;\n}\n.b-popover-danger.bs-popover-left > .arrow::before, .b-popover-danger.bs-popover-auto[x-placement^=left] > .arrow::before {\n  border-left-color: #f5c6cb;\n}\n.b-popover-danger.bs-popover-left > .arrow::after, .b-popover-danger.bs-popover-auto[x-placement^=left] > .arrow::after {\n  border-left-color: #f8d7da;\n}\n.b-popover-danger .popover-header {\n  color: #212529;\n  background-color: #f6cace;\n  border-bottom-color: #f2b4ba;\n}\n.b-popover-danger .popover-body {\n  color: #721c24;\n}\n\n.b-popover-light.popover {\n  background-color: #fefefe;\n  border-color: #fdfdfe;\n}\n.b-popover-light.bs-popover-top > .arrow::before, .b-popover-light.bs-popover-auto[x-placement^=top] > .arrow::before {\n  border-top-color: #fdfdfe;\n}\n.b-popover-light.bs-popover-top > .arrow::after, .b-popover-light.bs-popover-auto[x-placement^=top] > .arrow::after {\n  border-top-color: #fefefe;\n}\n.b-popover-light.bs-popover-right > .arrow::before, .b-popover-light.bs-popover-auto[x-placement^=right] > .arrow::before {\n  border-right-color: #fdfdfe;\n}\n.b-popover-light.bs-popover-right > .arrow::after, .b-popover-light.bs-popover-auto[x-placement^=right] > .arrow::after {\n  border-right-color: #fefefe;\n}\n.b-popover-light.bs-popover-bottom > .arrow::before, .b-popover-light.bs-popover-auto[x-placement^=bottom] > .arrow::before {\n  border-bottom-color: #fdfdfe;\n}\n.b-popover-light.bs-popover-bottom > .arrow::after, .b-popover-light.bs-popover-auto[x-placement^=bottom] > .arrow::after {\n  border-bottom-color: #f6f6f6;\n}\n.b-popover-light.bs-popover-bottom .popover-header::before, .b-popover-light.bs-popover-auto[x-placement^=bottom] .popover-header::before {\n  border-bottom-color: #f6f6f6;\n}\n.b-popover-light.bs-popover-left > .arrow::before, .b-popover-light.bs-popover-auto[x-placement^=left] > .arrow::before {\n  border-left-color: #fdfdfe;\n}\n.b-popover-light.bs-popover-left > .arrow::after, .b-popover-light.bs-popover-auto[x-placement^=left] > .arrow::after {\n  border-left-color: #fefefe;\n}\n.b-popover-light .popover-header {\n  color: #212529;\n  background-color: #f6f6f6;\n  border-bottom-color: #eaeaea;\n}\n.b-popover-light .popover-body {\n  color: #818182;\n}\n\n.b-popover-dark.popover {\n  background-color: #d6d8d9;\n  border-color: #c6c8ca;\n}\n.b-popover-dark.bs-popover-top > .arrow::before, .b-popover-dark.bs-popover-auto[x-placement^=top] > .arrow::before {\n  border-top-color: #c6c8ca;\n}\n.b-popover-dark.bs-popover-top > .arrow::after, .b-popover-dark.bs-popover-auto[x-placement^=top] > .arrow::after {\n  border-top-color: #d6d8d9;\n}\n.b-popover-dark.bs-popover-right > .arrow::before, .b-popover-dark.bs-popover-auto[x-placement^=right] > .arrow::before {\n  border-right-color: #c6c8ca;\n}\n.b-popover-dark.bs-popover-right > .arrow::after, .b-popover-dark.bs-popover-auto[x-placement^=right] > .arrow::after {\n  border-right-color: #d6d8d9;\n}\n.b-popover-dark.bs-popover-bottom > .arrow::before, .b-popover-dark.bs-popover-auto[x-placement^=bottom] > .arrow::before {\n  border-bottom-color: #c6c8ca;\n}\n.b-popover-dark.bs-popover-bottom > .arrow::after, .b-popover-dark.bs-popover-auto[x-placement^=bottom] > .arrow::after {\n  border-bottom-color: #ced0d2;\n}\n.b-popover-dark.bs-popover-bottom .popover-header::before, .b-popover-dark.bs-popover-auto[x-placement^=bottom] .popover-header::before {\n  border-bottom-color: #ced0d2;\n}\n.b-popover-dark.bs-popover-left > .arrow::before, .b-popover-dark.bs-popover-auto[x-placement^=left] > .arrow::before {\n  border-left-color: #c6c8ca;\n}\n.b-popover-dark.bs-popover-left > .arrow::after, .b-popover-dark.bs-popover-auto[x-placement^=left] > .arrow::after {\n  border-left-color: #d6d8d9;\n}\n.b-popover-dark .popover-header {\n  color: #212529;\n  background-color: #ced0d2;\n  border-bottom-color: #c1c4c5;\n}\n.b-popover-dark .popover-body {\n  color: #1b1e21;\n}\n\n.b-sidebar-outer {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 0;\n  overflow: visible;\n  z-index: calc(1030 + 5);\n}\n\n.b-sidebar-backdrop {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  width: 100vw;\n  height: 100vh;\n  opacity: 0.6;\n}\n\n.b-sidebar {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  position: fixed;\n  top: 0;\n  width: 320px;\n  max-width: 100%;\n  height: 100vh;\n  max-height: 100%;\n  margin: 0;\n  outline: 0;\n  -webkit-transform: translateX(0);\n  transform: translateX(0);\n}\n.b-sidebar.slide {\n  transition: -webkit-transform 0.3s ease-in-out;\n  -webkit-transition: -webkit-transform 0.3s ease-in-out;\n  transition: transform 0.3s ease-in-out;\n  transition: transform 0.3s ease-in-out, -webkit-transform 0.3s ease-in-out;\n}\n@media (prefers-reduced-motion: reduce) {\n  .b-sidebar.slide {\n    -webkit-transition: none;\n    transition: none;\n  }\n}\n.b-sidebar:not(.b-sidebar-right) {\n  left: 0;\n  right: auto;\n}\n.b-sidebar:not(.b-sidebar-right).slide:not(.show) {\n  -webkit-transform: translateX(-100%);\n  transform: translateX(-100%);\n}\n.b-sidebar:not(.b-sidebar-right) > .b-sidebar-header .close {\n  margin-left: auto;\n}\n.b-sidebar.b-sidebar-right {\n  left: auto;\n  right: 0;\n}\n.b-sidebar.b-sidebar-right.slide:not(.show) {\n  -webkit-transform: translateX(100%);\n  transform: translateX(100%);\n}\n.b-sidebar.b-sidebar-right > .b-sidebar-header .close {\n  margin-right: auto;\n}\n.b-sidebar > .b-sidebar-header {\n  font-size: 1.5rem;\n  padding: 0.5rem 1rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-flex: 0;\n      -ms-flex-positive: 0;\n          flex-grow: 0;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n[dir=rtl] .b-sidebar > .b-sidebar-header {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n      -ms-flex-direction: row-reverse;\n          flex-direction: row-reverse;\n}\n\n.b-sidebar > .b-sidebar-header .close {\n  float: none;\n  font-size: 1.5rem;\n}\n.b-sidebar > .b-sidebar-body {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  height: 100%;\n  overflow-y: auto;\n}\n.b-sidebar > .b-sidebar-footer {\n  -webkit-box-flex: 0;\n      -ms-flex-positive: 0;\n          flex-grow: 0;\n}\n\n.b-skeleton-wrapper {\n  cursor: wait;\n}\n\n.b-skeleton {\n  position: relative;\n  overflow: hidden;\n  background-color: rgba(0, 0, 0, 0.12);\n  cursor: wait;\n  -webkit-mask-image: radial-gradient(white, black);\n  mask-image: radial-gradient(white, black);\n}\n.b-skeleton::before {\n  content: \" \";\n}\n\n.b-skeleton-text {\n  height: 1rem;\n  margin-bottom: 0.25rem;\n  border-radius: 0.25rem;\n}\n\n.b-skeleton-button {\n  width: 75px;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  border-radius: 0.25rem;\n}\n\n.b-skeleton-avatar {\n  width: 2.5em;\n  height: 2.5em;\n  border-radius: 50%;\n}\n\n.b-skeleton-input {\n  height: calc(1.5em + 0.75rem + 2px);\n  padding: 0.375rem 0.75rem;\n  line-height: 1.5;\n  border: #ced4da solid 1px;\n  border-radius: 0.25rem;\n}\n\n.b-skeleton-icon-wrapper svg {\n  color: rgba(0, 0, 0, 0.12);\n}\n\n.b-skeleton-img {\n  height: 100%;\n  width: 100%;\n}\n\n.b-skeleton-animate-wave::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 0;\n  background: -webkit-gradient(linear, left top, right top, from(transparent), color-stop(rgba(255, 255, 255, 0.4)), to(transparent));\n  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);\n  -webkit-animation: b-skeleton-animate-wave 1.75s linear infinite;\n  animation: b-skeleton-animate-wave 1.75s linear infinite;\n}\n@media (prefers-reduced-motion: reduce) {\n  .b-skeleton-animate-wave::after {\n    background: none;\n    -webkit-animation: none;\n    animation: none;\n  }\n}\n\n@-webkit-keyframes b-skeleton-animate-wave {\n  from {\n    -webkit-transform: translateX(-100%);\n    transform: translateX(-100%);\n  }\n  to {\n    -webkit-transform: translateX(100%);\n    transform: translateX(100%);\n  }\n}\n\n@keyframes b-skeleton-animate-wave {\n  from {\n    -webkit-transform: translateX(-100%);\n    transform: translateX(-100%);\n  }\n  to {\n    -webkit-transform: translateX(100%);\n    transform: translateX(100%);\n  }\n}\n.b-skeleton-animate-fade {\n  -webkit-animation: b-skeleton-animate-fade 0.875s ease-in-out alternate infinite;\n  animation: b-skeleton-animate-fade 0.875s ease-in-out alternate infinite;\n}\n@media (prefers-reduced-motion: reduce) {\n  .b-skeleton-animate-fade {\n    -webkit-animation: none;\n    animation: none;\n  }\n}\n\n@-webkit-keyframes b-skeleton-animate-fade {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0.4;\n  }\n}\n\n@keyframes b-skeleton-animate-fade {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0.4;\n  }\n}\n.b-skeleton-animate-throb {\n  -webkit-animation: b-skeleton-animate-throb 0.875s ease-in alternate infinite;\n  animation: b-skeleton-animate-throb 0.875s ease-in alternate infinite;\n}\n@media (prefers-reduced-motion: reduce) {\n  .b-skeleton-animate-throb {\n    -webkit-animation: none;\n    animation: none;\n  }\n}\n\n@-webkit-keyframes b-skeleton-animate-throb {\n  0% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n  100% {\n    -webkit-transform: scale(0.975);\n    transform: scale(0.975);\n  }\n}\n\n@keyframes b-skeleton-animate-throb {\n  0% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n  100% {\n    -webkit-transform: scale(0.975);\n    transform: scale(0.975);\n  }\n}\n.table.b-table.b-table-fixed {\n  table-layout: fixed;\n}\n.table.b-table.b-table-no-border-collapse {\n  border-collapse: separate;\n  border-spacing: 0;\n}\n.table.b-table[aria-busy=true] {\n  opacity: 0.55;\n}\n.table.b-table > tbody > tr.b-table-details > td {\n  border-top: none !important;\n}\n.table.b-table > caption {\n  caption-side: bottom;\n}\n.table.b-table.b-table-caption-top > caption {\n  caption-side: top !important;\n}\n.table.b-table > tbody > .table-active,\n.table.b-table > tbody > .table-active > th,\n.table.b-table > tbody > .table-active > td {\n  background-color: rgba(0, 0, 0, 0.075);\n}\n.table.b-table.table-hover > tbody > tr.table-active:hover td,\n.table.b-table.table-hover > tbody > tr.table-active:hover th {\n  color: #212529;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.075)), to(rgba(0, 0, 0, 0.075)));\n  background-image: linear-gradient(rgba(0, 0, 0, 0.075), rgba(0, 0, 0, 0.075));\n  background-repeat: no-repeat;\n}\n.table.b-table > tbody > .bg-active,\n.table.b-table > tbody > .bg-active > th,\n.table.b-table > tbody > .bg-active > td {\n  background-color: rgba(255, 255, 255, 0.075) !important;\n}\n.table.b-table.table-hover.table-dark > tbody > tr.bg-active:hover td,\n.table.b-table.table-hover.table-dark > tbody > tr.bg-active:hover th {\n  color: #fff;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0.075)), to(rgba(255, 255, 255, 0.075)));\n  background-image: linear-gradient(rgba(255, 255, 255, 0.075), rgba(255, 255, 255, 0.075));\n  background-repeat: no-repeat;\n}\n\n.b-table-sticky-header,\n.table-responsive,\n[class*=table-responsive-] {\n  margin-bottom: 1rem;\n}\n.b-table-sticky-header > .table,\n.table-responsive > .table,\n[class*=table-responsive-] > .table {\n  margin-bottom: 0;\n}\n\n.b-table-sticky-header {\n  overflow-y: auto;\n  max-height: 300px;\n}\n\n@media print {\n  .b-table-sticky-header {\n    overflow-y: visible !important;\n    max-height: none !important;\n  }\n}\n@supports (position: sticky) {\n  .b-table-sticky-header > .table.b-table > thead > tr > th {\n    position: sticky;\n    top: 0;\n    z-index: 2;\n  }\n\n  .b-table-sticky-header > .table.b-table > thead > tr > .b-table-sticky-column,\n.b-table-sticky-header > .table.b-table > tbody > tr > .b-table-sticky-column,\n.b-table-sticky-header > .table.b-table > tfoot > tr > .b-table-sticky-column,\n.table-responsive > .table.b-table > thead > tr > .b-table-sticky-column,\n.table-responsive > .table.b-table > tbody > tr > .b-table-sticky-column,\n.table-responsive > .table.b-table > tfoot > tr > .b-table-sticky-column,\n[class*=table-responsive-] > .table.b-table > thead > tr > .b-table-sticky-column,\n[class*=table-responsive-] > .table.b-table > tbody > tr > .b-table-sticky-column,\n[class*=table-responsive-] > .table.b-table > tfoot > tr > .b-table-sticky-column {\n    position: sticky;\n    left: 0;\n  }\n  .b-table-sticky-header > .table.b-table > thead > tr > .b-table-sticky-column,\n.table-responsive > .table.b-table > thead > tr > .b-table-sticky-column,\n[class*=table-responsive-] > .table.b-table > thead > tr > .b-table-sticky-column {\n    z-index: 5;\n  }\n  .b-table-sticky-header > .table.b-table > tbody > tr > .b-table-sticky-column,\n.b-table-sticky-header > .table.b-table > tfoot > tr > .b-table-sticky-column,\n.table-responsive > .table.b-table > tbody > tr > .b-table-sticky-column,\n.table-responsive > .table.b-table > tfoot > tr > .b-table-sticky-column,\n[class*=table-responsive-] > .table.b-table > tbody > tr > .b-table-sticky-column,\n[class*=table-responsive-] > .table.b-table > tfoot > tr > .b-table-sticky-column {\n    z-index: 2;\n  }\n\n  .table.b-table > thead > tr > .table-b-table-default,\n.table.b-table > tbody > tr > .table-b-table-default,\n.table.b-table > tfoot > tr > .table-b-table-default {\n    color: #212529;\n    background-color: #fff;\n  }\n  .table.b-table.table-dark > thead > tr > .bg-b-table-default,\n.table.b-table.table-dark > tbody > tr > .bg-b-table-default,\n.table.b-table.table-dark > tfoot > tr > .bg-b-table-default {\n    color: #fff;\n    background-color: #343a40;\n  }\n  .table.b-table.table-striped > tbody > tr:nth-of-type(odd) > .table-b-table-default {\n    background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.05)), to(rgba(0, 0, 0, 0.05)));\n    background-image: linear-gradient(rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05));\n    background-repeat: no-repeat;\n  }\n  .table.b-table.table-striped.table-dark > tbody > tr:nth-of-type(odd) > .bg-b-table-default {\n    background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0.05)), to(rgba(255, 255, 255, 0.05)));\n    background-image: linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05));\n    background-repeat: no-repeat;\n  }\n  .table.b-table.table-hover > tbody > tr:hover > .table-b-table-default {\n    color: #212529;\n    background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.075)), to(rgba(0, 0, 0, 0.075)));\n    background-image: linear-gradient(rgba(0, 0, 0, 0.075), rgba(0, 0, 0, 0.075));\n    background-repeat: no-repeat;\n  }\n  .table.b-table.table-hover.table-dark > tbody > tr:hover > .bg-b-table-default {\n    color: #fff;\n    background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0.075)), to(rgba(255, 255, 255, 0.075)));\n    background-image: linear-gradient(rgba(255, 255, 255, 0.075), rgba(255, 255, 255, 0.075));\n    background-repeat: no-repeat;\n  }\n}\n.table.b-table > thead > tr > [aria-sort],\n.table.b-table > tfoot > tr > [aria-sort] {\n  cursor: pointer;\n  background-image: none;\n  background-repeat: no-repeat;\n  background-size: 0.65em 1em;\n}\n.table.b-table > thead > tr > [aria-sort]:not(.b-table-sort-icon-left),\n.table.b-table > tfoot > tr > [aria-sort]:not(.b-table-sort-icon-left) {\n  background-position: right calc(0.75rem / 2) center;\n  padding-right: calc(0.75rem + 0.65em);\n}\n.table.b-table > thead > tr > [aria-sort].b-table-sort-icon-left,\n.table.b-table > tfoot > tr > [aria-sort].b-table-sort-icon-left {\n  background-position: left calc(0.75rem / 2) center;\n  padding-left: calc(0.75rem + 0.65em);\n}\n.table.b-table > thead > tr > [aria-sort=none],\n.table.b-table > tfoot > tr > [aria-sort=none] {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='101' height='101' view-box='0 0 101 101' preserveAspectRatio='none'%3e%3cpath fill='black' opacity='.3' d='M51 1l25 23 24 22H1l25-22zM51 101l25-23 24-22H1l25 22z'/%3e%3c/svg%3e\");\n}\n.table.b-table > thead > tr > [aria-sort=ascending],\n.table.b-table > tfoot > tr > [aria-sort=ascending] {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='101' height='101' view-box='0 0 101 101' preserveAspectRatio='none'%3e%3cpath fill='black' d='M51 1l25 23 24 22H1l25-22z'/%3e%3cpath fill='black' opacity='.3' d='M51 101l25-23 24-22H1l25 22z'/%3e%3c/svg%3e\");\n}\n.table.b-table > thead > tr > [aria-sort=descending],\n.table.b-table > tfoot > tr > [aria-sort=descending] {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='101' height='101' view-box='0 0 101 101' preserveAspectRatio='none'%3e%3cpath fill='black' opacity='.3' d='M51 1l25 23 24 22H1l25-22z'/%3e%3cpath fill='black' d='M51 101l25-23 24-22H1l25 22z'/%3e%3c/svg%3e\");\n}\n.table.b-table.table-dark > thead > tr > [aria-sort=none], .table.b-table.table-dark > tfoot > tr > [aria-sort=none],\n.table.b-table > .thead-dark > tr > [aria-sort=none] {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='101' height='101' view-box='0 0 101 101' preserveAspectRatio='none'%3e%3cpath fill='white' opacity='.3' d='M51 1l25 23 24 22H1l25-22zM51 101l25-23 24-22H1l25 22z'/%3e%3c/svg%3e\");\n}\n.table.b-table.table-dark > thead > tr > [aria-sort=ascending], .table.b-table.table-dark > tfoot > tr > [aria-sort=ascending],\n.table.b-table > .thead-dark > tr > [aria-sort=ascending] {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='101' height='101' view-box='0 0 101 101' preserveAspectRatio='none'%3e%3cpath fill='white' d='M51 1l25 23 24 22H1l25-22z'/%3e%3cpath fill='white' opacity='.3' d='M51 101l25-23 24-22H1l25 22z'/%3e%3c/svg%3e\");\n}\n.table.b-table.table-dark > thead > tr > [aria-sort=descending], .table.b-table.table-dark > tfoot > tr > [aria-sort=descending],\n.table.b-table > .thead-dark > tr > [aria-sort=descending] {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='101' height='101' view-box='0 0 101 101' preserveAspectRatio='none'%3e%3cpath fill='white' opacity='.3' d='M51 1l25 23 24 22H1l25-22z'/%3e%3cpath fill='white' d='M51 101l25-23 24-22H1l25 22z'/%3e%3c/svg%3e\");\n}\n.table.b-table > thead > tr > .table-dark[aria-sort=none],\n.table.b-table > tfoot > tr > .table-dark[aria-sort=none] {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='101' height='101' view-box='0 0 101 101' preserveAspectRatio='none'%3e%3cpath fill='white' opacity='.3' d='M51 1l25 23 24 22H1l25-22zM51 101l25-23 24-22H1l25 22z'/%3e%3c/svg%3e\");\n}\n.table.b-table > thead > tr > .table-dark[aria-sort=ascending],\n.table.b-table > tfoot > tr > .table-dark[aria-sort=ascending] {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='101' height='101' view-box='0 0 101 101' preserveAspectRatio='none'%3e%3cpath fill='white' d='M51 1l25 23 24 22H1l25-22z'/%3e%3cpath fill='white' opacity='.3' d='M51 101l25-23 24-22H1l25 22z'/%3e%3c/svg%3e\");\n}\n.table.b-table > thead > tr > .table-dark[aria-sort=descending],\n.table.b-table > tfoot > tr > .table-dark[aria-sort=descending] {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='101' height='101' view-box='0 0 101 101' preserveAspectRatio='none'%3e%3cpath fill='white' opacity='.3' d='M51 1l25 23 24 22H1l25-22z'/%3e%3cpath fill='white' d='M51 101l25-23 24-22H1l25 22z'/%3e%3c/svg%3e\");\n}\n.table.b-table.table-sm > thead > tr > [aria-sort]:not(.b-table-sort-icon-left),\n.table.b-table.table-sm > tfoot > tr > [aria-sort]:not(.b-table-sort-icon-left) {\n  background-position: right calc(0.3rem / 2) center;\n  padding-right: calc(0.3rem + 0.65em);\n}\n.table.b-table.table-sm > thead > tr > [aria-sort].b-table-sort-icon-left,\n.table.b-table.table-sm > tfoot > tr > [aria-sort].b-table-sort-icon-left {\n  background-position: left calc(0.3rem / 2) center;\n  padding-left: calc(0.3rem + 0.65em);\n}\n\n.table.b-table.b-table-selectable:not(.b-table-selectable-no-click) > tbody > tr {\n  cursor: pointer;\n}\n.table.b-table.b-table-selectable:not(.b-table-selectable-no-click).b-table-selecting.b-table-select-range > tbody > tr {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n@media (max-width: 575.98px) {\n  .table.b-table.b-table-stacked-sm {\n    display: block;\n    width: 100%;\n  }\n  .table.b-table.b-table-stacked-sm > caption,\n.table.b-table.b-table-stacked-sm > tbody,\n.table.b-table.b-table-stacked-sm > tbody > tr,\n.table.b-table.b-table-stacked-sm > tbody > tr > td,\n.table.b-table.b-table-stacked-sm > tbody > tr > th {\n    display: block;\n  }\n  .table.b-table.b-table-stacked-sm > thead,\n.table.b-table.b-table-stacked-sm > tfoot {\n    display: none;\n  }\n  .table.b-table.b-table-stacked-sm > thead > tr.b-table-top-row,\n.table.b-table.b-table-stacked-sm > thead > tr.b-table-bottom-row,\n.table.b-table.b-table-stacked-sm > tfoot > tr.b-table-top-row,\n.table.b-table.b-table-stacked-sm > tfoot > tr.b-table-bottom-row {\n    display: none;\n  }\n  .table.b-table.b-table-stacked-sm > caption {\n    caption-side: top !important;\n  }\n  .table.b-table.b-table-stacked-sm > tbody > tr > [data-label]::before {\n    content: attr(data-label);\n    width: 40%;\n    float: left;\n    text-align: right;\n    overflow-wrap: break-word;\n    font-weight: bold;\n    font-style: normal;\n    padding: 0 calc(1rem / 2) 0 0;\n    margin: 0;\n  }\n  .table.b-table.b-table-stacked-sm > tbody > tr > [data-label]::after {\n    display: block;\n    clear: both;\n    content: \"\";\n  }\n  .table.b-table.b-table-stacked-sm > tbody > tr > [data-label] > div {\n    display: inline-block;\n    width: calc(100% - 40%);\n    padding: 0 0 0 calc(1rem / 2);\n    margin: 0;\n  }\n  .table.b-table.b-table-stacked-sm > tbody > tr.top-row, .table.b-table.b-table-stacked-sm > tbody > tr.bottom-row {\n    display: none;\n  }\n  .table.b-table.b-table-stacked-sm > tbody > tr > :first-child {\n    border-top-width: 3px;\n  }\n  .table.b-table.b-table-stacked-sm > tbody > tr > [rowspan] + td,\n.table.b-table.b-table-stacked-sm > tbody > tr > [rowspan] + th {\n    border-top-width: 3px;\n  }\n}\n@media (max-width: 767.98px) {\n  .table.b-table.b-table-stacked-md {\n    display: block;\n    width: 100%;\n  }\n  .table.b-table.b-table-stacked-md > caption,\n.table.b-table.b-table-stacked-md > tbody,\n.table.b-table.b-table-stacked-md > tbody > tr,\n.table.b-table.b-table-stacked-md > tbody > tr > td,\n.table.b-table.b-table-stacked-md > tbody > tr > th {\n    display: block;\n  }\n  .table.b-table.b-table-stacked-md > thead,\n.table.b-table.b-table-stacked-md > tfoot {\n    display: none;\n  }\n  .table.b-table.b-table-stacked-md > thead > tr.b-table-top-row,\n.table.b-table.b-table-stacked-md > thead > tr.b-table-bottom-row,\n.table.b-table.b-table-stacked-md > tfoot > tr.b-table-top-row,\n.table.b-table.b-table-stacked-md > tfoot > tr.b-table-bottom-row {\n    display: none;\n  }\n  .table.b-table.b-table-stacked-md > caption {\n    caption-side: top !important;\n  }\n  .table.b-table.b-table-stacked-md > tbody > tr > [data-label]::before {\n    content: attr(data-label);\n    width: 40%;\n    float: left;\n    text-align: right;\n    overflow-wrap: break-word;\n    font-weight: bold;\n    font-style: normal;\n    padding: 0 calc(1rem / 2) 0 0;\n    margin: 0;\n  }\n  .table.b-table.b-table-stacked-md > tbody > tr > [data-label]::after {\n    display: block;\n    clear: both;\n    content: \"\";\n  }\n  .table.b-table.b-table-stacked-md > tbody > tr > [data-label] > div {\n    display: inline-block;\n    width: calc(100% - 40%);\n    padding: 0 0 0 calc(1rem / 2);\n    margin: 0;\n  }\n  .table.b-table.b-table-stacked-md > tbody > tr.top-row, .table.b-table.b-table-stacked-md > tbody > tr.bottom-row {\n    display: none;\n  }\n  .table.b-table.b-table-stacked-md > tbody > tr > :first-child {\n    border-top-width: 3px;\n  }\n  .table.b-table.b-table-stacked-md > tbody > tr > [rowspan] + td,\n.table.b-table.b-table-stacked-md > tbody > tr > [rowspan] + th {\n    border-top-width: 3px;\n  }\n}\n@media (max-width: 991.98px) {\n  .table.b-table.b-table-stacked-lg {\n    display: block;\n    width: 100%;\n  }\n  .table.b-table.b-table-stacked-lg > caption,\n.table.b-table.b-table-stacked-lg > tbody,\n.table.b-table.b-table-stacked-lg > tbody > tr,\n.table.b-table.b-table-stacked-lg > tbody > tr > td,\n.table.b-table.b-table-stacked-lg > tbody > tr > th {\n    display: block;\n  }\n  .table.b-table.b-table-stacked-lg > thead,\n.table.b-table.b-table-stacked-lg > tfoot {\n    display: none;\n  }\n  .table.b-table.b-table-stacked-lg > thead > tr.b-table-top-row,\n.table.b-table.b-table-stacked-lg > thead > tr.b-table-bottom-row,\n.table.b-table.b-table-stacked-lg > tfoot > tr.b-table-top-row,\n.table.b-table.b-table-stacked-lg > tfoot > tr.b-table-bottom-row {\n    display: none;\n  }\n  .table.b-table.b-table-stacked-lg > caption {\n    caption-side: top !important;\n  }\n  .table.b-table.b-table-stacked-lg > tbody > tr > [data-label]::before {\n    content: attr(data-label);\n    width: 40%;\n    float: left;\n    text-align: right;\n    overflow-wrap: break-word;\n    font-weight: bold;\n    font-style: normal;\n    padding: 0 calc(1rem / 2) 0 0;\n    margin: 0;\n  }\n  .table.b-table.b-table-stacked-lg > tbody > tr > [data-label]::after {\n    display: block;\n    clear: both;\n    content: \"\";\n  }\n  .table.b-table.b-table-stacked-lg > tbody > tr > [data-label] > div {\n    display: inline-block;\n    width: calc(100% - 40%);\n    padding: 0 0 0 calc(1rem / 2);\n    margin: 0;\n  }\n  .table.b-table.b-table-stacked-lg > tbody > tr.top-row, .table.b-table.b-table-stacked-lg > tbody > tr.bottom-row {\n    display: none;\n  }\n  .table.b-table.b-table-stacked-lg > tbody > tr > :first-child {\n    border-top-width: 3px;\n  }\n  .table.b-table.b-table-stacked-lg > tbody > tr > [rowspan] + td,\n.table.b-table.b-table-stacked-lg > tbody > tr > [rowspan] + th {\n    border-top-width: 3px;\n  }\n}\n@media (max-width: 1199.98px) {\n  .table.b-table.b-table-stacked-xl {\n    display: block;\n    width: 100%;\n  }\n  .table.b-table.b-table-stacked-xl > caption,\n.table.b-table.b-table-stacked-xl > tbody,\n.table.b-table.b-table-stacked-xl > tbody > tr,\n.table.b-table.b-table-stacked-xl > tbody > tr > td,\n.table.b-table.b-table-stacked-xl > tbody > tr > th {\n    display: block;\n  }\n  .table.b-table.b-table-stacked-xl > thead,\n.table.b-table.b-table-stacked-xl > tfoot {\n    display: none;\n  }\n  .table.b-table.b-table-stacked-xl > thead > tr.b-table-top-row,\n.table.b-table.b-table-stacked-xl > thead > tr.b-table-bottom-row,\n.table.b-table.b-table-stacked-xl > tfoot > tr.b-table-top-row,\n.table.b-table.b-table-stacked-xl > tfoot > tr.b-table-bottom-row {\n    display: none;\n  }\n  .table.b-table.b-table-stacked-xl > caption {\n    caption-side: top !important;\n  }\n  .table.b-table.b-table-stacked-xl > tbody > tr > [data-label]::before {\n    content: attr(data-label);\n    width: 40%;\n    float: left;\n    text-align: right;\n    overflow-wrap: break-word;\n    font-weight: bold;\n    font-style: normal;\n    padding: 0 calc(1rem / 2) 0 0;\n    margin: 0;\n  }\n  .table.b-table.b-table-stacked-xl > tbody > tr > [data-label]::after {\n    display: block;\n    clear: both;\n    content: \"\";\n  }\n  .table.b-table.b-table-stacked-xl > tbody > tr > [data-label] > div {\n    display: inline-block;\n    width: calc(100% - 40%);\n    padding: 0 0 0 calc(1rem / 2);\n    margin: 0;\n  }\n  .table.b-table.b-table-stacked-xl > tbody > tr.top-row, .table.b-table.b-table-stacked-xl > tbody > tr.bottom-row {\n    display: none;\n  }\n  .table.b-table.b-table-stacked-xl > tbody > tr > :first-child {\n    border-top-width: 3px;\n  }\n  .table.b-table.b-table-stacked-xl > tbody > tr > [rowspan] + td,\n.table.b-table.b-table-stacked-xl > tbody > tr > [rowspan] + th {\n    border-top-width: 3px;\n  }\n}\n.table.b-table.b-table-stacked {\n  display: block;\n  width: 100%;\n}\n.table.b-table.b-table-stacked > caption,\n.table.b-table.b-table-stacked > tbody,\n.table.b-table.b-table-stacked > tbody > tr,\n.table.b-table.b-table-stacked > tbody > tr > td,\n.table.b-table.b-table-stacked > tbody > tr > th {\n  display: block;\n}\n.table.b-table.b-table-stacked > thead,\n.table.b-table.b-table-stacked > tfoot {\n  display: none;\n}\n.table.b-table.b-table-stacked > thead > tr.b-table-top-row,\n.table.b-table.b-table-stacked > thead > tr.b-table-bottom-row,\n.table.b-table.b-table-stacked > tfoot > tr.b-table-top-row,\n.table.b-table.b-table-stacked > tfoot > tr.b-table-bottom-row {\n  display: none;\n}\n.table.b-table.b-table-stacked > caption {\n  caption-side: top !important;\n}\n.table.b-table.b-table-stacked > tbody > tr > [data-label]::before {\n  content: attr(data-label);\n  width: 40%;\n  float: left;\n  text-align: right;\n  overflow-wrap: break-word;\n  font-weight: bold;\n  font-style: normal;\n  padding: 0 calc(1rem / 2) 0 0;\n  margin: 0;\n}\n.table.b-table.b-table-stacked > tbody > tr > [data-label]::after {\n  display: block;\n  clear: both;\n  content: \"\";\n}\n.table.b-table.b-table-stacked > tbody > tr > [data-label] > div {\n  display: inline-block;\n  width: calc(100% - 40%);\n  padding: 0 0 0 calc(1rem / 2);\n  margin: 0;\n}\n.table.b-table.b-table-stacked > tbody > tr.top-row, .table.b-table.b-table-stacked > tbody > tr.bottom-row {\n  display: none;\n}\n.table.b-table.b-table-stacked > tbody > tr > :first-child {\n  border-top-width: 3px;\n}\n.table.b-table.b-table-stacked > tbody > tr > [rowspan] + td,\n.table.b-table.b-table-stacked > tbody > tr > [rowspan] + th {\n  border-top-width: 3px;\n}\n\n.b-time {\n  min-width: 150px;\n}\n.b-time[aria-disabled=true] output, .b-time[aria-readonly=true] output,\n.b-time output.disabled {\n  background-color: #e9ecef;\n  opacity: 1;\n}\n.b-time[aria-disabled=true] output {\n  pointer-events: none;\n}\n[dir=rtl] .b-time > .d-flex:not(.flex-column) {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n      -ms-flex-direction: row-reverse;\n          flex-direction: row-reverse;\n}\n\n.b-time .b-time-header {\n  margin-bottom: 0.5rem;\n}\n.b-time .b-time-header output {\n  padding: 0.25rem;\n  font-size: 80%;\n}\n.b-time .b-time-footer {\n  margin-top: 0.5rem;\n}\n.b-time .b-time-ampm {\n  margin-left: 0.5rem;\n}\n\n.b-toast {\n  display: block;\n  position: relative;\n  max-width: 350px;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  background-clip: padding-box;\n  z-index: 1;\n  border-radius: 0.25rem;\n}\n.b-toast .toast {\n  background-color: rgba(255, 255, 255, 0.85);\n}\n.b-toast:not(:last-child) {\n  margin-bottom: 0.75rem;\n}\n.b-toast.b-toast-solid .toast {\n  background-color: white;\n}\n.b-toast .toast {\n  opacity: 1;\n}\n.b-toast .toast.fade:not(.show) {\n  opacity: 0;\n}\n.b-toast .toast .toast-body {\n  display: block;\n}\n\n.b-toast-primary .toast {\n  background-color: rgba(230, 242, 255, 0.85);\n  border-color: rgba(184, 218, 255, 0.85);\n  color: #004085;\n}\n.b-toast-primary .toast .toast-header {\n  color: #004085;\n  background-color: rgba(204, 229, 255, 0.85);\n  border-bottom-color: rgba(184, 218, 255, 0.85);\n}\n.b-toast-primary.b-toast-solid .toast {\n  background-color: #e6f2ff;\n}\n\n.b-toast-secondary .toast {\n  background-color: rgba(239, 240, 241, 0.85);\n  border-color: rgba(214, 216, 219, 0.85);\n  color: #383d41;\n}\n.b-toast-secondary .toast .toast-header {\n  color: #383d41;\n  background-color: rgba(226, 227, 229, 0.85);\n  border-bottom-color: rgba(214, 216, 219, 0.85);\n}\n.b-toast-secondary.b-toast-solid .toast {\n  background-color: #eff0f1;\n}\n\n.b-toast-success .toast {\n  background-color: rgba(230, 245, 233, 0.85);\n  border-color: rgba(195, 230, 203, 0.85);\n  color: #155724;\n}\n.b-toast-success .toast .toast-header {\n  color: #155724;\n  background-color: rgba(212, 237, 218, 0.85);\n  border-bottom-color: rgba(195, 230, 203, 0.85);\n}\n.b-toast-success.b-toast-solid .toast {\n  background-color: #e6f5e9;\n}\n\n.b-toast-info .toast {\n  background-color: rgba(229, 244, 247, 0.85);\n  border-color: rgba(190, 229, 235, 0.85);\n  color: #0c5460;\n}\n.b-toast-info .toast .toast-header {\n  color: #0c5460;\n  background-color: rgba(209, 236, 241, 0.85);\n  border-bottom-color: rgba(190, 229, 235, 0.85);\n}\n.b-toast-info.b-toast-solid .toast {\n  background-color: #e5f4f7;\n}\n\n.b-toast-warning .toast {\n  background-color: rgba(255, 249, 231, 0.85);\n  border-color: rgba(255, 238, 186, 0.85);\n  color: #856404;\n}\n.b-toast-warning .toast .toast-header {\n  color: #856404;\n  background-color: rgba(255, 243, 205, 0.85);\n  border-bottom-color: rgba(255, 238, 186, 0.85);\n}\n.b-toast-warning.b-toast-solid .toast {\n  background-color: #fff9e7;\n}\n\n.b-toast-danger .toast {\n  background-color: rgba(252, 237, 238, 0.85);\n  border-color: rgba(245, 198, 203, 0.85);\n  color: #721c24;\n}\n.b-toast-danger .toast .toast-header {\n  color: #721c24;\n  background-color: rgba(248, 215, 218, 0.85);\n  border-bottom-color: rgba(245, 198, 203, 0.85);\n}\n.b-toast-danger.b-toast-solid .toast {\n  background-color: #fcedee;\n}\n\n.b-toast-light .toast {\n  background-color: rgba(255, 255, 255, 0.85);\n  border-color: rgba(253, 253, 254, 0.85);\n  color: #818182;\n}\n.b-toast-light .toast .toast-header {\n  color: #818182;\n  background-color: rgba(254, 254, 254, 0.85);\n  border-bottom-color: rgba(253, 253, 254, 0.85);\n}\n.b-toast-light.b-toast-solid .toast {\n  background-color: white;\n}\n\n.b-toast-dark .toast {\n  background-color: rgba(227, 229, 229, 0.85);\n  border-color: rgba(198, 200, 202, 0.85);\n  color: #1b1e21;\n}\n.b-toast-dark .toast .toast-header {\n  color: #1b1e21;\n  background-color: rgba(214, 216, 217, 0.85);\n  border-bottom-color: rgba(198, 200, 202, 0.85);\n}\n.b-toast-dark.b-toast-solid .toast {\n  background-color: #e3e5e5;\n}\n\n.b-toaster {\n  z-index: 1100;\n}\n.b-toaster .b-toaster-slot {\n  position: relative;\n  display: block;\n}\n.b-toaster .b-toaster-slot:empty {\n  display: none !important;\n}\n\n.b-toaster.b-toaster-top-right, .b-toaster.b-toaster-top-left, .b-toaster.b-toaster-top-center, .b-toaster.b-toaster-top-full, .b-toaster.b-toaster-bottom-right, .b-toaster.b-toaster-bottom-left, .b-toaster.b-toaster-bottom-center, .b-toaster.b-toaster-bottom-full {\n  position: fixed;\n  left: 0.5rem;\n  right: 0.5rem;\n  margin: 0;\n  padding: 0;\n  height: 0;\n  overflow: visible;\n}\n.b-toaster.b-toaster-top-right .b-toaster-slot, .b-toaster.b-toaster-top-left .b-toaster-slot, .b-toaster.b-toaster-top-center .b-toaster-slot, .b-toaster.b-toaster-top-full .b-toaster-slot, .b-toaster.b-toaster-bottom-right .b-toaster-slot, .b-toaster.b-toaster-bottom-left .b-toaster-slot, .b-toaster.b-toaster-bottom-center .b-toaster-slot, .b-toaster.b-toaster-bottom-full .b-toaster-slot {\n  position: absolute;\n  max-width: 350px;\n  width: 100%;\n  /* IE 11 fix */\n  left: 0;\n  right: 0;\n  padding: 0;\n  margin: 0;\n}\n.b-toaster.b-toaster-top-full .b-toaster-slot, .b-toaster.b-toaster-bottom-full .b-toaster-slot {\n  width: 100%;\n  max-width: 100%;\n}\n.b-toaster.b-toaster-top-full .b-toaster-slot .b-toast,\n.b-toaster.b-toaster-top-full .b-toaster-slot .toast, .b-toaster.b-toaster-bottom-full .b-toaster-slot .b-toast,\n.b-toaster.b-toaster-bottom-full .b-toaster-slot .toast {\n  width: 100%;\n  max-width: 100%;\n}\n.b-toaster.b-toaster-top-right, .b-toaster.b-toaster-top-left, .b-toaster.b-toaster-top-center, .b-toaster.b-toaster-top-full {\n  top: 0;\n}\n.b-toaster.b-toaster-top-right .b-toaster-slot, .b-toaster.b-toaster-top-left .b-toaster-slot, .b-toaster.b-toaster-top-center .b-toaster-slot, .b-toaster.b-toaster-top-full .b-toaster-slot {\n  top: 0.5rem;\n}\n.b-toaster.b-toaster-bottom-right, .b-toaster.b-toaster-bottom-left, .b-toaster.b-toaster-bottom-center, .b-toaster.b-toaster-bottom-full {\n  bottom: 0;\n}\n.b-toaster.b-toaster-bottom-right .b-toaster-slot, .b-toaster.b-toaster-bottom-left .b-toaster-slot, .b-toaster.b-toaster-bottom-center .b-toaster-slot, .b-toaster.b-toaster-bottom-full .b-toaster-slot {\n  bottom: 0.5rem;\n}\n.b-toaster.b-toaster-top-right .b-toaster-slot, .b-toaster.b-toaster-bottom-right .b-toaster-slot, .b-toaster.b-toaster-top-center .b-toaster-slot, .b-toaster.b-toaster-bottom-center .b-toaster-slot {\n  margin-left: auto;\n}\n.b-toaster.b-toaster-top-left .b-toaster-slot, .b-toaster.b-toaster-bottom-left .b-toaster-slot, .b-toaster.b-toaster-top-center .b-toaster-slot, .b-toaster.b-toaster-bottom-center .b-toaster-slot {\n  margin-right: auto;\n}\n\n.b-toaster.b-toaster-top-right .b-toast.b-toaster-enter-active, .b-toaster.b-toaster-top-right .b-toast.b-toaster-leave-active, .b-toaster.b-toaster-top-right .b-toast.b-toaster-move, .b-toaster.b-toaster-top-left .b-toast.b-toaster-enter-active, .b-toaster.b-toaster-top-left .b-toast.b-toaster-leave-active, .b-toaster.b-toaster-top-left .b-toast.b-toaster-move, .b-toaster.b-toaster-bottom-right .b-toast.b-toaster-enter-active, .b-toaster.b-toaster-bottom-right .b-toast.b-toaster-leave-active, .b-toaster.b-toaster-bottom-right .b-toast.b-toaster-move, .b-toaster.b-toaster-bottom-left .b-toast.b-toaster-enter-active, .b-toaster.b-toaster-bottom-left .b-toast.b-toaster-leave-active, .b-toaster.b-toaster-bottom-left .b-toast.b-toaster-move {\n  transition: -webkit-transform 0.175s;\n  -webkit-transition: -webkit-transform 0.175s;\n  transition: transform 0.175s;\n  transition: transform 0.175s, -webkit-transform 0.175s;\n}\n.b-toaster.b-toaster-top-right .b-toast.b-toaster-enter-to .toast.fade, .b-toaster.b-toaster-top-right .b-toast.b-toaster-enter-active .toast.fade, .b-toaster.b-toaster-top-left .b-toast.b-toaster-enter-to .toast.fade, .b-toaster.b-toaster-top-left .b-toast.b-toaster-enter-active .toast.fade, .b-toaster.b-toaster-bottom-right .b-toast.b-toaster-enter-to .toast.fade, .b-toaster.b-toaster-bottom-right .b-toast.b-toaster-enter-active .toast.fade, .b-toaster.b-toaster-bottom-left .b-toast.b-toaster-enter-to .toast.fade, .b-toaster.b-toaster-bottom-left .b-toast.b-toaster-enter-active .toast.fade {\n  -webkit-transition-delay: 0.175s;\n          transition-delay: 0.175s;\n}\n.b-toaster.b-toaster-top-right .b-toast.b-toaster-leave-active, .b-toaster.b-toaster-top-left .b-toast.b-toaster-leave-active, .b-toaster.b-toaster-bottom-right .b-toast.b-toaster-leave-active, .b-toaster.b-toaster-bottom-left .b-toast.b-toaster-leave-active {\n  position: absolute;\n  -webkit-transition-delay: 0.175s;\n          transition-delay: 0.175s;\n}\n.b-toaster.b-toaster-top-right .b-toast.b-toaster-leave-active .toast.fade, .b-toaster.b-toaster-top-left .b-toast.b-toaster-leave-active .toast.fade, .b-toaster.b-toaster-bottom-right .b-toast.b-toaster-leave-active .toast.fade, .b-toaster.b-toaster-bottom-left .b-toast.b-toaster-leave-active .toast.fade {\n  -webkit-transition-delay: 0s;\n          transition-delay: 0s;\n}\n.tooltip.b-tooltip {\n  display: block;\n  opacity: 0.9;\n  outline: 0;\n}\n.tooltip.b-tooltip.fade:not(.show) {\n  opacity: 0;\n}\n.tooltip.b-tooltip.show {\n  opacity: 0.9;\n}\n.tooltip.b-tooltip.noninteractive {\n  pointer-events: none;\n}\n.tooltip.b-tooltip .arrow {\n  margin: 0 0.25rem;\n}\n.tooltip.b-tooltip.bs-tooltip-right .arrow, .tooltip.b-tooltip.b-tooltip-dark.bs-tooltip-auto[x-placement^=right] .arrow, .tooltip.b-tooltip.b-tooltip-light.bs-tooltip-auto[x-placement^=right] .arrow, .tooltip.b-tooltip.b-tooltip-danger.bs-tooltip-auto[x-placement^=right] .arrow, .tooltip.b-tooltip.b-tooltip-warning.bs-tooltip-auto[x-placement^=right] .arrow, .tooltip.b-tooltip.b-tooltip-info.bs-tooltip-auto[x-placement^=right] .arrow, .tooltip.b-tooltip.b-tooltip-success.bs-tooltip-auto[x-placement^=right] .arrow, .tooltip.b-tooltip.b-tooltip-secondary.bs-tooltip-auto[x-placement^=right] .arrow, .tooltip.b-tooltip.b-tooltip-primary.bs-tooltip-auto[x-placement^=right] .arrow, .tooltip.b-tooltip.bs-tooltip-left .arrow, .tooltip.b-tooltip.b-tooltip-dark.bs-tooltip-auto[x-placement^=left] .arrow, .tooltip.b-tooltip.b-tooltip-light.bs-tooltip-auto[x-placement^=left] .arrow, .tooltip.b-tooltip.b-tooltip-danger.bs-tooltip-auto[x-placement^=left] .arrow, .tooltip.b-tooltip.b-tooltip-warning.bs-tooltip-auto[x-placement^=left] .arrow, .tooltip.b-tooltip.b-tooltip-info.bs-tooltip-auto[x-placement^=left] .arrow, .tooltip.b-tooltip.b-tooltip-success.bs-tooltip-auto[x-placement^=left] .arrow, .tooltip.b-tooltip.b-tooltip-secondary.bs-tooltip-auto[x-placement^=left] .arrow, .tooltip.b-tooltip.b-tooltip-primary.bs-tooltip-auto[x-placement^=left] .arrow {\n  margin: 0.25rem 0;\n}\n\n.tooltip.b-tooltip-primary.bs-tooltip-top .arrow::before, .tooltip.b-tooltip-primary.bs-tooltip-auto[x-placement^=top] .arrow::before {\n  border-top-color: #007bff;\n}\n.tooltip.b-tooltip-primary.bs-tooltip-right .arrow::before, .tooltip.b-tooltip-primary.bs-tooltip-auto[x-placement^=right] .arrow::before {\n  border-right-color: #007bff;\n}\n.tooltip.b-tooltip-primary.bs-tooltip-bottom .arrow::before, .tooltip.b-tooltip-primary.bs-tooltip-auto[x-placement^=bottom] .arrow::before {\n  border-bottom-color: #007bff;\n}\n.tooltip.b-tooltip-primary.bs-tooltip-left .arrow::before, .tooltip.b-tooltip-primary.bs-tooltip-auto[x-placement^=left] .arrow::before {\n  border-left-color: #007bff;\n}\n.tooltip.b-tooltip-primary .tooltip-inner {\n  color: #fff;\n  background-color: #007bff;\n}\n\n.tooltip.b-tooltip-secondary.bs-tooltip-top .arrow::before, .tooltip.b-tooltip-secondary.bs-tooltip-auto[x-placement^=top] .arrow::before {\n  border-top-color: #6c757d;\n}\n.tooltip.b-tooltip-secondary.bs-tooltip-right .arrow::before, .tooltip.b-tooltip-secondary.bs-tooltip-auto[x-placement^=right] .arrow::before {\n  border-right-color: #6c757d;\n}\n.tooltip.b-tooltip-secondary.bs-tooltip-bottom .arrow::before, .tooltip.b-tooltip-secondary.bs-tooltip-auto[x-placement^=bottom] .arrow::before {\n  border-bottom-color: #6c757d;\n}\n.tooltip.b-tooltip-secondary.bs-tooltip-left .arrow::before, .tooltip.b-tooltip-secondary.bs-tooltip-auto[x-placement^=left] .arrow::before {\n  border-left-color: #6c757d;\n}\n.tooltip.b-tooltip-secondary .tooltip-inner {\n  color: #fff;\n  background-color: #6c757d;\n}\n\n.tooltip.b-tooltip-success.bs-tooltip-top .arrow::before, .tooltip.b-tooltip-success.bs-tooltip-auto[x-placement^=top] .arrow::before {\n  border-top-color: #28a745;\n}\n.tooltip.b-tooltip-success.bs-tooltip-right .arrow::before, .tooltip.b-tooltip-success.bs-tooltip-auto[x-placement^=right] .arrow::before {\n  border-right-color: #28a745;\n}\n.tooltip.b-tooltip-success.bs-tooltip-bottom .arrow::before, .tooltip.b-tooltip-success.bs-tooltip-auto[x-placement^=bottom] .arrow::before {\n  border-bottom-color: #28a745;\n}\n.tooltip.b-tooltip-success.bs-tooltip-left .arrow::before, .tooltip.b-tooltip-success.bs-tooltip-auto[x-placement^=left] .arrow::before {\n  border-left-color: #28a745;\n}\n.tooltip.b-tooltip-success .tooltip-inner {\n  color: #fff;\n  background-color: #28a745;\n}\n\n.tooltip.b-tooltip-info.bs-tooltip-top .arrow::before, .tooltip.b-tooltip-info.bs-tooltip-auto[x-placement^=top] .arrow::before {\n  border-top-color: #17a2b8;\n}\n.tooltip.b-tooltip-info.bs-tooltip-right .arrow::before, .tooltip.b-tooltip-info.bs-tooltip-auto[x-placement^=right] .arrow::before {\n  border-right-color: #17a2b8;\n}\n.tooltip.b-tooltip-info.bs-tooltip-bottom .arrow::before, .tooltip.b-tooltip-info.bs-tooltip-auto[x-placement^=bottom] .arrow::before {\n  border-bottom-color: #17a2b8;\n}\n.tooltip.b-tooltip-info.bs-tooltip-left .arrow::before, .tooltip.b-tooltip-info.bs-tooltip-auto[x-placement^=left] .arrow::before {\n  border-left-color: #17a2b8;\n}\n.tooltip.b-tooltip-info .tooltip-inner {\n  color: #fff;\n  background-color: #17a2b8;\n}\n\n.tooltip.b-tooltip-warning.bs-tooltip-top .arrow::before, .tooltip.b-tooltip-warning.bs-tooltip-auto[x-placement^=top] .arrow::before {\n  border-top-color: #ffc107;\n}\n.tooltip.b-tooltip-warning.bs-tooltip-right .arrow::before, .tooltip.b-tooltip-warning.bs-tooltip-auto[x-placement^=right] .arrow::before {\n  border-right-color: #ffc107;\n}\n.tooltip.b-tooltip-warning.bs-tooltip-bottom .arrow::before, .tooltip.b-tooltip-warning.bs-tooltip-auto[x-placement^=bottom] .arrow::before {\n  border-bottom-color: #ffc107;\n}\n.tooltip.b-tooltip-warning.bs-tooltip-left .arrow::before, .tooltip.b-tooltip-warning.bs-tooltip-auto[x-placement^=left] .arrow::before {\n  border-left-color: #ffc107;\n}\n.tooltip.b-tooltip-warning .tooltip-inner {\n  color: #212529;\n  background-color: #ffc107;\n}\n\n.tooltip.b-tooltip-danger.bs-tooltip-top .arrow::before, .tooltip.b-tooltip-danger.bs-tooltip-auto[x-placement^=top] .arrow::before {\n  border-top-color: #dc3545;\n}\n.tooltip.b-tooltip-danger.bs-tooltip-right .arrow::before, .tooltip.b-tooltip-danger.bs-tooltip-auto[x-placement^=right] .arrow::before {\n  border-right-color: #dc3545;\n}\n.tooltip.b-tooltip-danger.bs-tooltip-bottom .arrow::before, .tooltip.b-tooltip-danger.bs-tooltip-auto[x-placement^=bottom] .arrow::before {\n  border-bottom-color: #dc3545;\n}\n.tooltip.b-tooltip-danger.bs-tooltip-left .arrow::before, .tooltip.b-tooltip-danger.bs-tooltip-auto[x-placement^=left] .arrow::before {\n  border-left-color: #dc3545;\n}\n.tooltip.b-tooltip-danger .tooltip-inner {\n  color: #fff;\n  background-color: #dc3545;\n}\n\n.tooltip.b-tooltip-light.bs-tooltip-top .arrow::before, .tooltip.b-tooltip-light.bs-tooltip-auto[x-placement^=top] .arrow::before {\n  border-top-color: #f8f9fa;\n}\n.tooltip.b-tooltip-light.bs-tooltip-right .arrow::before, .tooltip.b-tooltip-light.bs-tooltip-auto[x-placement^=right] .arrow::before {\n  border-right-color: #f8f9fa;\n}\n.tooltip.b-tooltip-light.bs-tooltip-bottom .arrow::before, .tooltip.b-tooltip-light.bs-tooltip-auto[x-placement^=bottom] .arrow::before {\n  border-bottom-color: #f8f9fa;\n}\n.tooltip.b-tooltip-light.bs-tooltip-left .arrow::before, .tooltip.b-tooltip-light.bs-tooltip-auto[x-placement^=left] .arrow::before {\n  border-left-color: #f8f9fa;\n}\n.tooltip.b-tooltip-light .tooltip-inner {\n  color: #212529;\n  background-color: #f8f9fa;\n}\n\n.tooltip.b-tooltip-dark.bs-tooltip-top .arrow::before, .tooltip.b-tooltip-dark.bs-tooltip-auto[x-placement^=top] .arrow::before {\n  border-top-color: #343a40;\n}\n.tooltip.b-tooltip-dark.bs-tooltip-right .arrow::before, .tooltip.b-tooltip-dark.bs-tooltip-auto[x-placement^=right] .arrow::before {\n  border-right-color: #343a40;\n}\n.tooltip.b-tooltip-dark.bs-tooltip-bottom .arrow::before, .tooltip.b-tooltip-dark.bs-tooltip-auto[x-placement^=bottom] .arrow::before {\n  border-bottom-color: #343a40;\n}\n.tooltip.b-tooltip-dark.bs-tooltip-left .arrow::before, .tooltip.b-tooltip-dark.bs-tooltip-auto[x-placement^=left] .arrow::before {\n  border-left-color: #343a40;\n}\n.tooltip.b-tooltip-dark .tooltip-inner {\n  color: #fff;\n  background-color: #343a40;\n}\n\n.b-icon.bi {\n  display: inline-block;\n  overflow: visible;\n  vertical-align: -0.15em;\n}\n.b-icon.b-icon-animation-cylon, .b-icon.b-iconstack .b-icon-animation-cylon > g {\n  -webkit-transform-origin: center;\n  transform-origin: center;\n  -webkit-animation: 0.75s infinite ease-in-out alternate b-icon-animation-cylon;\n  animation: 0.75s infinite ease-in-out alternate b-icon-animation-cylon;\n}\n@media (prefers-reduced-motion: reduce) {\n  .b-icon.b-icon-animation-cylon, .b-icon.b-iconstack .b-icon-animation-cylon > g {\n    -webkit-animation: none;\n    animation: none;\n  }\n}\n.b-icon.b-icon-animation-cylon-vertical, .b-icon.b-iconstack .b-icon-animation-cylon-vertical > g {\n  -webkit-transform-origin: center;\n  transform-origin: center;\n  -webkit-animation: 0.75s infinite ease-in-out alternate b-icon-animation-cylon-vertical;\n  animation: 0.75s infinite ease-in-out alternate b-icon-animation-cylon-vertical;\n}\n@media (prefers-reduced-motion: reduce) {\n  .b-icon.b-icon-animation-cylon-vertical, .b-icon.b-iconstack .b-icon-animation-cylon-vertical > g {\n    -webkit-animation: none;\n    animation: none;\n  }\n}\n.b-icon.b-icon-animation-fade, .b-icon.b-iconstack .b-icon-animation-fade > g {\n  -webkit-transform-origin: center;\n  transform-origin: center;\n  -webkit-animation: 0.75s infinite ease-in-out alternate b-icon-animation-fade;\n  animation: 0.75s infinite ease-in-out alternate b-icon-animation-fade;\n}\n@media (prefers-reduced-motion: reduce) {\n  .b-icon.b-icon-animation-fade, .b-icon.b-iconstack .b-icon-animation-fade > g {\n    -webkit-animation: none;\n    animation: none;\n  }\n}\n.b-icon.b-icon-animation-spin, .b-icon.b-iconstack .b-icon-animation-spin > g {\n  -webkit-transform-origin: center;\n  transform-origin: center;\n  -webkit-animation: 2s infinite linear normal b-icon-animation-spin;\n  animation: 2s infinite linear normal b-icon-animation-spin;\n}\n@media (prefers-reduced-motion: reduce) {\n  .b-icon.b-icon-animation-spin, .b-icon.b-iconstack .b-icon-animation-spin > g {\n    -webkit-animation: none;\n    animation: none;\n  }\n}\n.b-icon.b-icon-animation-spin-reverse, .b-icon.b-iconstack .b-icon-animation-spin-reverse > g {\n  -webkit-transform-origin: center;\n  transform-origin: center;\n  animation: 2s infinite linear reverse b-icon-animation-spin;\n}\n@media (prefers-reduced-motion: reduce) {\n  .b-icon.b-icon-animation-spin-reverse, .b-icon.b-iconstack .b-icon-animation-spin-reverse > g {\n    -webkit-animation: none;\n    animation: none;\n  }\n}\n.b-icon.b-icon-animation-spin-pulse, .b-icon.b-iconstack .b-icon-animation-spin-pulse > g {\n  -webkit-transform-origin: center;\n  transform-origin: center;\n  -webkit-animation: 1s infinite steps(8) normal b-icon-animation-spin;\n  animation: 1s infinite steps(8) normal b-icon-animation-spin;\n}\n@media (prefers-reduced-motion: reduce) {\n  .b-icon.b-icon-animation-spin-pulse, .b-icon.b-iconstack .b-icon-animation-spin-pulse > g {\n    -webkit-animation: none;\n    animation: none;\n  }\n}\n.b-icon.b-icon-animation-spin-reverse-pulse, .b-icon.b-iconstack .b-icon-animation-spin-reverse-pulse > g {\n  -webkit-transform-origin: center;\n  transform-origin: center;\n  animation: 1s infinite steps(8) reverse b-icon-animation-spin;\n}\n@media (prefers-reduced-motion: reduce) {\n  .b-icon.b-icon-animation-spin-reverse-pulse, .b-icon.b-iconstack .b-icon-animation-spin-reverse-pulse > g {\n    -webkit-animation: none;\n    animation: none;\n  }\n}\n.b-icon.b-icon-animation-throb, .b-icon.b-iconstack .b-icon-animation-throb > g {\n  -webkit-transform-origin: center;\n  transform-origin: center;\n  -webkit-animation: 0.75s infinite ease-in-out alternate b-icon-animation-throb;\n  animation: 0.75s infinite ease-in-out alternate b-icon-animation-throb;\n}\n@media (prefers-reduced-motion: reduce) {\n  .b-icon.b-icon-animation-throb, .b-icon.b-iconstack .b-icon-animation-throb > g {\n    -webkit-animation: none;\n    animation: none;\n  }\n}\n\n@-webkit-keyframes b-icon-animation-cylon {\n  0% {\n    -webkit-transform: translateX(-25%);\n    transform: translateX(-25%);\n  }\n  100% {\n    -webkit-transform: translateX(25%);\n    transform: translateX(25%);\n  }\n}\n\n@keyframes b-icon-animation-cylon {\n  0% {\n    -webkit-transform: translateX(-25%);\n    transform: translateX(-25%);\n  }\n  100% {\n    -webkit-transform: translateX(25%);\n    transform: translateX(25%);\n  }\n}\n@-webkit-keyframes b-icon-animation-cylon-vertical {\n  0% {\n    -webkit-transform: translateY(25%);\n    transform: translateY(25%);\n  }\n  100% {\n    -webkit-transform: translateY(-25%);\n    transform: translateY(-25%);\n  }\n}\n@keyframes b-icon-animation-cylon-vertical {\n  0% {\n    -webkit-transform: translateY(25%);\n    transform: translateY(25%);\n  }\n  100% {\n    -webkit-transform: translateY(-25%);\n    transform: translateY(-25%);\n  }\n}\n@-webkit-keyframes b-icon-animation-fade {\n  0% {\n    opacity: 0.1;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes b-icon-animation-fade {\n  0% {\n    opacity: 0.1;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@-webkit-keyframes b-icon-animation-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(359deg);\n    transform: rotate(359deg);\n  }\n}\n@keyframes b-icon-animation-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(359deg);\n    transform: rotate(359deg);\n  }\n}\n@-webkit-keyframes b-icon-animation-throb {\n  0% {\n    opacity: 0.5;\n    -webkit-transform: scale(0.5);\n    transform: scale(0.5);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n}\n@keyframes b-icon-animation-throb {\n  0% {\n    opacity: 0.5;\n    -webkit-transform: scale(0.5);\n    transform: scale(0.5);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n}\n.btn .b-icon.bi,\n.nav-link .b-icon.bi,\n.dropdown-toggle .b-icon.bi,\n.dropdown-item .b-icon.bi,\n.input-group-text .b-icon.bi {\n  font-size: 125%;\n  vertical-align: text-bottom;\n}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/video.js/dist/video-js.css":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/video.js/dist/video-js.css ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n.vjs-modal-dialog .vjs-modal-dialog-content, .video-js .vjs-modal-dialog, .vjs-button > .vjs-icon-placeholder:before, .video-js .vjs-big-play-button .vjs-icon-placeholder:before {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.vjs-button > .vjs-icon-placeholder:before, .video-js .vjs-big-play-button .vjs-icon-placeholder:before {\n  text-align: center;\n}\n\n@font-face {\n  font-family: VideoJS;\n  src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAABDkAAsAAAAAG6gAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADsAAABUIIslek9TLzIAAAFEAAAAPgAAAFZRiV3hY21hcAAAAYQAAADaAAADPv749/pnbHlmAAACYAAAC3AAABHQZg6OcWhlYWQAAA3QAAAAKwAAADYZw251aGhlYQAADfwAAAAdAAAAJA+RCLFobXR4AAAOHAAAABMAAACM744AAGxvY2EAAA4wAAAASAAAAEhF6kqubWF4cAAADngAAAAfAAAAIAE0AIFuYW1lAAAOmAAAASUAAAIK1cf1oHBvc3QAAA/AAAABJAAAAdPExYuNeJxjYGRgYOBiMGCwY2BycfMJYeDLSSzJY5BiYGGAAJA8MpsxJzM9kYEDxgPKsYBpDiBmg4gCACY7BUgAeJxjYGS7wTiBgZWBgaWQ5RkDA8MvCM0cwxDOeI6BgYmBlZkBKwhIc01hcPjI+FGJHcRdyA4RZgQRADK3CxEAAHic7dFZbsMgAEXRS0ycyZnnOeG7y+qC8pU1dHusIOXxuoxaOlwZYWQB0Aea4quIEN4E9LzKbKjzDeM6H/mua6Lmc/p8yhg0lvdYx15ZG8uOLQOGjMp3EzqmzJizYMmKNRu27Nhz4MiJMxeu3Ljz4Ekqm7T8P52G8PP3lnTOVk++Z6iN6QZzNN1F7ptuN7eGOjDUoaGODHVsuvU8MdTO9Hd5aqgzQ50b6sJQl4a6MtS1oW4MdWuoO0PdG+rBUI+GejLUs6FeDPVqqDdDvRvqw1CfhpqM9At0iFLaAAB4nJ1YDXBTVRZ+5/22TUlJ8we0pHlJm7RJf5O8F2j6EymlSPkpxaL8U2xpa3DKj0CBhc2IW4eWKSokIoLsuMqssM64f+jA4HSdWXXXscBq67IOs3FXZ1ZYWVyRFdo899yXtIBQZ90k7717zz3v3HPPOfd854YCCj9cL9dL0RQFOqCbGJnrHb5EayiKIWN8iA/hWBblo6hUWm8TtCDwE80WMJus/irwyxOdxeB0MDb14VNJHnXYoLLSl6FfCUYO9nYPTA8Epg9090LprfbBbZ2hY0UlJUXHQp3/vtWkS6EBv8+rPMq5u9692f/dNxJNiqwC1xPE9TCUgCsSdQWgE3XQD25lkG4CN2xmTcOXWBOyser6RN6KnGbKSbmQ3+d0OI1m2W8QzLLkI2sykrWAgJJEtA8vGGW/2Q+CmT3n8zS9wZwu2DCvtuZKZN3xkrLh36yCZuUomQSqGpY8t/25VfHVhw8z4ebGBtfLb0ya9PCaDc+8dGTvk2dsh6z7WzvowlXKUSWo9MJ15a3KrEP2loOr2Ojhw6iW6hf2BDdEccQvZGpaAy7YovSwq8kr7HGllxpd71rkS6G0Sf11sl9OvMK1+jwPPODxjUwkOim9CU3ix1wNjXDfmJSEn618Bs6lpWwUpU+8PCqLMY650zjq8VhCIP17NEKTx3eaLL+s5Pi6yJWaWjTHLR1jYzPSV9VF/6Ojdb/1kO3Mk3uhHC0x6gc1BjlKQ+nQFxTYdaJkZ7ySVxLBbhR1dsboNXp1tCYKW2LRaEzpYcIx2BKNxaL0ZaUnSqfFoiNhHKR/GkX6PWUSAaJelQaqZL1EpoHNsajSEyPSoJ9IjhIxTdjHLmwZvhRDOiFTY/YeQnvrVZmiTQtGncECXtFTBZLOVwwMRgoXHAkXzMzPn1nAJJ8jYSbMDaqN2waGLzNhih/bZynUBMpIWSg7VYi7DRx2m8ALkIdRCJwI6ArJx2EI8kaDWeTQKeAFk9fjl/1AvwktjQ1P7NjyMGQyfd4vjipX6M/i52D7Cq80kqlcxEcGXRr/FEcgs0u5uGgB4VWuMFfpdn2Re6Hi3PqzmxWKsz6+ae2Pn9hXXw/fqM859UiGC0oKYYILJBqJrsn1Z1E5qOs9rQCiUQRREjm8yJcbHF5cUJufX1vAHlefw0XgUoboS3ETfQlTxBC4SOtuE8VPRJTBSCQSjZCpk7Gqzu+masaZ2y7Zjehho4F3g82BNDkAHpORG4+OCS+f6JTPmtRn/PH1kch6d04sp7AQb25aQ/pqUyXeQ8vrebG8OYQdXOQ+585u0sdW9rqalzRURiJ+9F4MweRFrKUjl1GUYhH1A27WOHw5cTFSFPMo9EeUIGnQTZHIaJ7AHLaOKsOODaNF9jkBjYG2QEsQ2xjMUAx2bBEbeTBWMHwskBjngq56S/yfgkBnWBa4K9sqKtq2t1UI8S9He5XuBRbawAdatrQEAi30Aks2+LM8WeCbalVZkWNylvJ+dqJnzVb+OHlSoKW8nPCP7Rd+CcZ2DdWAGqJ2CBFOphgywFFCFBNtfAbGtNPBCwxvygHeYMZMY9ZboBqwq/pVrsbgN5tkv152ODlbMfiqwGMBgxa4Exz3QhovRIUp6acqZmQzRq0ypDXS2TPLT02YIkQETnOE445oOGxOmXAqUJNNG7XgupMjPq2ua9asrj5yY/yuKteO1Kx0YNJTufrirLe1mZnat7OL6rnUdCWenpW6I8mAnbsY8KWs1PuSovCW9A/Z25PQ24a7cNOqgmTkLmBMgh4THgc4b9k2IVv1/g/F5nGljwPLfOgHAzJzh45V/4+WenTzmMtR5Z7us2Tys909UHqrPY7KbckoxRvRHhmVc3cJGE97uml0R1S0jdULVl7EvZtDFVBF35N9cEdjpgmAiOlFZ+Dtoh93+D3zzHr8RRNZQhnCNMNbcegOvpEwZoL+06cJQ07h+th3fZ/7PVbVC6ngTAV/KoLFuO6+2KFcU651gEb5ugPSIb1D+Xp8V4+k3sEIGnw5mYe4If4k1lFYr6SCzmM2EQ8iWtmwjnBI9kTwe1TlfAmXh7H02by9fW2gsjKwtv0aaURKil4OdV7rDL1MXIFNrhdxohcZXYTnq47WisrKitaObbf5+yvkLi5J6lCNZZ+B6GC38VNBZBDidSS/+mSvh6s+srgC8pyKMvDtt+de3c9fU76ZPfuM8ud4Kv0fyP/LqfepMT/3oZxSqpZaTa1DaQYLY8TFsHYbWYsPoRhRWfL5eSSQbhUGgGC3YLbVMk6PitTFNGpAsNrC6D1VNBKgBHMejaiuRWEWGgsSDBTJjqWIl8kJLlsaLJ2tXDr6xGfT85bM2Q06a46x2HTgvdnV8z5YDy/27J4zt6x2VtkzjoYpkq36kaBr4eQSg7tyiVweWubXZugtadl58ydapfbORfKsDTuZ0OBgx4cfdjCf5tbWNITnL120fdOi1RV1C3uKGzNdwYLcMvZ3BxoPyTOCD1XvXTp7U10gWCVmTV9b3r2z0SkGWovb2hp9I89O8a2smlyaO8muMU+dRmtzp60IzAoFpjLr1n388boLyf0dRvxhsHZ0qbWqDkwqvvpkj4l0fY6EIXRi5sQSrAvsVYwXRy4qJ2EVtD1AN7a0HWth9ymvL1xc3WTUKK/TAHA/bXDVtVWfOMfuGxGZv4Ln/jVr9jc3j1yMv0tndmyt9Vq88Y9gH1wtLX3KWjot5++jWHgAoZZkQ14wGQ20Fli71UmKJAy4xKMSTGbVdybW7FDDAut9XpD5AzWrYO7zQ8qffqF8+Ynd/clrHcdyxGy3a/3+mfNnzC/cBsveTjnTvXf1o6vzOlZw7WtqtdmPK/Errz/6NNtD72zmNOZfbmYdTGHfoofqI79Oc+R2n1lrnL6pOm0Up7kwxhTW12Amm7WYkXR2qYrF2AmgmbAsxZjwy1xpg/m1Je2vrp8v/nz2xpmlBg4E9hrMU341wVpTOh/OfmGvAnra8q6uctr60ZQHV3Q+WMQJykMj8ZsWn2QBOmmHMB+m5pDIpTFonYigiaKAhGEiAHF7EliVnQkjoLVIMPtJpBKHYd3A8GYH9jJzrWwmHx5Qjp7vDAX0suGRym1vtm/9W1/HyR8vczfMs6Sk8DSv855/5dlX9oQq52hT8syyp2rx5Id17IAyAM3wIjQPMOHzytEB64q6D5zT91yNbnx3V/nqnd017S9Y0605k3izoXLpsxde2n38yoOV9s1LcjwzNjbdX6asnBVaBj/6/DwKwPkpcqbDG7BnsXoSqWnUAmottYF6jMSdVyYZh3zVXCjwTiwwHH6sGuRiEHQGzuRX6whZkp123oy1BWE2mEfJ/tvIRtM4ZM5bDXiMsPMaAKOTyc5uL57rqyyc5y5JE5pm1i2S2iUX0CcaQ6lC6Zog7JqSqZmYlosl2K6pwNA84zRnQW6SaALYZQGW5lhCtU/W34N6o+bKfZ8cf3/Cl/+iTX3wBzpOY4mRkeNf3rptycGSshQWgGbYt5jFc2e0+DglIrwl6DVWQ7BuwaJ3Xk1J4VL5urnLl/Wf+gHU/hZoZdKNym6lG+I34FaNeZKcSpJIo2IeCVvpdsDGfKvzJnAwmeD37Ow65ZWwSowpgwX5T69s/rB55dP5BcpgDKFV8p7q2sn/1uc93bVzT/w6UrCqDTWvfCq/oCD/qZXNoUj8BL5Kp6GU017frfNXkAtiiyf/SOCEeLqnd8R/Ql9GlCRfctS6k5chvIBuQ1zCCjoCHL2DHNHIXxMJ3kQeO8lbsUXONeSfA5EjcG6/E+KdhN4bP04vBhdi883+BFBzQbxFbvZzQeY9LNBZc0FNfn5NwfDn6rCTnTw6R8o+gfpf5hCom33cRuiTlss3KHmZjD+BPN+5gXuA2ziS/Q73mLxUkpbKN/eqwz5uK0X9F3h2d1V4nGNgZGBgAOJd776+iue3+crAzc4AAje5Bfcg0xz9YHEOBiYQBQA8FQlFAHicY2BkYGBnAAGOPgaG//85+hkYGVCBMgBGGwNYAAAAeJxjYGBgYB8EmKOPgQEAQ04BfgAAAAAAAA4AaAB+AMwA4AECAUIBbAGYAcICGAJYArQC4AMwA7AD3gQwBJYE3AUkBWYFigYgBmYGtAbqB1gIEghYCG4IhAi2COh4nGNgZGBgUGYoZWBnAAEmIOYCQgaG/2A+AwAYCQG2AHicXZBNaoNAGIZfE5PQCKFQ2lUps2oXBfOzzAESyDKBQJdGR2NQR3QSSE/QE/QEPUUPUHqsvsrXjTMw83zPvPMNCuAWP3DQDAejdm1GjzwS7pMmwi75XngAD4/CQ/oX4TFe4Qt7uMMbOzjuDc0EmXCP/C7cJ38Iu+RP4QEe8CU8pP8WHmOPX2EPz87TPo202ey2OjlnQSXV/6arOjWFmvszMWtd6CqwOlKHq6ovycLaWMWVydXKFFZnmVFlZU46tP7R2nI5ncbi/dDkfDtFBA2DDXbYkhKc+V0Bqs5Zt9JM1HQGBRTm/EezTmZNKtpcAMs9Yu6AK9caF76zoLWIWcfMGOSkVduvSWechqZsz040Ib2PY3urxBJTzriT95lipz+TN1fmAAAAeJxtkMl2wjAMRfOAhABlKm2h80C3+ajgCKKDY6cegP59TYBzukAL+z1Zsq8ctaJTTKPrsUQLbXQQI0EXKXroY4AbDDHCGBNMcYsZ7nCPB8yxwCOe8IwXvOIN7/jAJ76wxHfUqWX+OzgumWAjJMV17i0Ndlr6irLKO+qftdT7i6y4uFSUvCknay+lFYZIZaQcmfH/xIFdYn98bqhra1aKTM/6lWMnyaYirx1rFUQZFBkb2zJUtoXeJCeg0WnLtHeSFc3OtrnozNwqi0TkSpBMDB1nSde5oJXW23hTS2/T0LilglXX7dmFVxLnq5U0vYATHFk3zX3BOisoQHNDFDeZnqKDy9hRNawN7Vh727hFzcJ5c8TILrKZfH7tIPxAFP0BpLeJPA==) format(\"woff\");\n  font-weight: normal;\n  font-style: normal;\n}\n.vjs-icon-play, .video-js .vjs-play-control .vjs-icon-placeholder, .video-js .vjs-big-play-button .vjs-icon-placeholder:before {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal;\n}\n.vjs-icon-play:before, .video-js .vjs-play-control .vjs-icon-placeholder:before, .video-js .vjs-big-play-button .vjs-icon-placeholder:before {\n  content: \"\\f101\";\n}\n\n.vjs-icon-play-circle {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal;\n}\n.vjs-icon-play-circle:before {\n  content: \"\\f102\";\n}\n\n.vjs-icon-pause, .video-js .vjs-play-control.vjs-playing .vjs-icon-placeholder {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal;\n}\n.vjs-icon-pause:before, .video-js .vjs-play-control.vjs-playing .vjs-icon-placeholder:before {\n  content: \"\\f103\";\n}\n\n.vjs-icon-volume-mute, .video-js .vjs-mute-control.vjs-vol-0 .vjs-icon-placeholder {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal;\n}\n.vjs-icon-volume-mute:before, .video-js .vjs-mute-control.vjs-vol-0 .vjs-icon-placeholder:before {\n  content: \"\\f104\";\n}\n\n.vjs-icon-volume-low, .video-js .vjs-mute-control.vjs-vol-1 .vjs-icon-placeholder {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal;\n}\n.vjs-icon-volume-low:before, .video-js .vjs-mute-control.vjs-vol-1 .vjs-icon-placeholder:before {\n  content: \"\\f105\";\n}\n\n.vjs-icon-volume-mid, .video-js .vjs-mute-control.vjs-vol-2 .vjs-icon-placeholder {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal;\n}\n.vjs-icon-volume-mid:before, .video-js .vjs-mute-control.vjs-vol-2 .vjs-icon-placeholder:before {\n  content: \"\\f106\";\n}\n\n.vjs-icon-volume-high, .video-js .vjs-mute-control .vjs-icon-placeholder {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal;\n}\n.vjs-icon-volume-high:before, .video-js .vjs-mute-control .vjs-icon-placeholder:before {\n  content: \"\\f107\";\n}\n\n.vjs-icon-fullscreen-enter, .video-js .vjs-fullscreen-control .vjs-icon-placeholder {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal;\n}\n.vjs-icon-fullscreen-enter:before, .video-js .vjs-fullscreen-control .vjs-icon-placeholder:before {\n  content: \"\\f108\";\n}\n\n.vjs-icon-fullscreen-exit, .video-js.vjs-fullscreen .vjs-fullscreen-control .vjs-icon-placeholder {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal;\n}\n.vjs-icon-fullscreen-exit:before, .video-js.vjs-fullscreen .vjs-fullscreen-control .vjs-icon-placeholder:before {\n  content: \"\\f109\";\n}\n\n.vjs-icon-square {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal;\n}\n.vjs-icon-square:before {\n  content: \"\\f10a\";\n}\n\n.vjs-icon-spinner {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal;\n}\n.vjs-icon-spinner:before {\n  content: \"\\f10b\";\n}\n\n.vjs-icon-subtitles, .video-js .vjs-subs-caps-button .vjs-icon-placeholder,\n.video-js.video-js:lang(en-GB) .vjs-subs-caps-button .vjs-icon-placeholder,\n.video-js.video-js:lang(en-IE) .vjs-subs-caps-button .vjs-icon-placeholder,\n.video-js.video-js:lang(en-AU) .vjs-subs-caps-button .vjs-icon-placeholder,\n.video-js.video-js:lang(en-NZ) .vjs-subs-caps-button .vjs-icon-placeholder, .video-js .vjs-subtitles-button .vjs-icon-placeholder {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal;\n}\n.vjs-icon-subtitles:before, .video-js .vjs-subs-caps-button .vjs-icon-placeholder:before,\n.video-js.video-js:lang(en-GB) .vjs-subs-caps-button .vjs-icon-placeholder:before,\n.video-js.video-js:lang(en-IE) .vjs-subs-caps-button .vjs-icon-placeholder:before,\n.video-js.video-js:lang(en-AU) .vjs-subs-caps-button .vjs-icon-placeholder:before,\n.video-js.video-js:lang(en-NZ) .vjs-subs-caps-button .vjs-icon-placeholder:before, .video-js .vjs-subtitles-button .vjs-icon-placeholder:before {\n  content: \"\\f10c\";\n}\n\n.vjs-icon-captions, .video-js:lang(en) .vjs-subs-caps-button .vjs-icon-placeholder,\n.video-js:lang(fr-CA) .vjs-subs-caps-button .vjs-icon-placeholder, .video-js .vjs-captions-button .vjs-icon-placeholder {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal;\n}\n.vjs-icon-captions:before, .video-js:lang(en) .vjs-subs-caps-button .vjs-icon-placeholder:before,\n.video-js:lang(fr-CA) .vjs-subs-caps-button .vjs-icon-placeholder:before, .video-js .vjs-captions-button .vjs-icon-placeholder:before {\n  content: \"\\f10d\";\n}\n\n.vjs-icon-chapters, .video-js .vjs-chapters-button .vjs-icon-placeholder {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal;\n}\n.vjs-icon-chapters:before, .video-js .vjs-chapters-button .vjs-icon-placeholder:before {\n  content: \"\\f10e\";\n}\n\n.vjs-icon-share {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal;\n}\n.vjs-icon-share:before {\n  content: \"\\f10f\";\n}\n\n.vjs-icon-cog {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal;\n}\n.vjs-icon-cog:before {\n  content: \"\\f110\";\n}\n\n.vjs-icon-circle, .vjs-seek-to-live-control .vjs-icon-placeholder, .video-js .vjs-volume-level, .video-js .vjs-play-progress {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal;\n}\n.vjs-icon-circle:before, .vjs-seek-to-live-control .vjs-icon-placeholder:before, .video-js .vjs-volume-level:before, .video-js .vjs-play-progress:before {\n  content: \"\\f111\";\n}\n\n.vjs-icon-circle-outline {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal;\n}\n.vjs-icon-circle-outline:before {\n  content: \"\\f112\";\n}\n\n.vjs-icon-circle-inner-circle {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal;\n}\n.vjs-icon-circle-inner-circle:before {\n  content: \"\\f113\";\n}\n\n.vjs-icon-hd {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal;\n}\n.vjs-icon-hd:before {\n  content: \"\\f114\";\n}\n\n.vjs-icon-cancel, .video-js .vjs-control.vjs-close-button .vjs-icon-placeholder {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal;\n}\n.vjs-icon-cancel:before, .video-js .vjs-control.vjs-close-button .vjs-icon-placeholder:before {\n  content: \"\\f115\";\n}\n\n.vjs-icon-replay, .video-js .vjs-play-control.vjs-ended .vjs-icon-placeholder {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal;\n}\n.vjs-icon-replay:before, .video-js .vjs-play-control.vjs-ended .vjs-icon-placeholder:before {\n  content: \"\\f116\";\n}\n\n.vjs-icon-facebook {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal;\n}\n.vjs-icon-facebook:before {\n  content: \"\\f117\";\n}\n\n.vjs-icon-gplus {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal;\n}\n.vjs-icon-gplus:before {\n  content: \"\\f118\";\n}\n\n.vjs-icon-linkedin {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal;\n}\n.vjs-icon-linkedin:before {\n  content: \"\\f119\";\n}\n\n.vjs-icon-twitter {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal;\n}\n.vjs-icon-twitter:before {\n  content: \"\\f11a\";\n}\n\n.vjs-icon-tumblr {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal;\n}\n.vjs-icon-tumblr:before {\n  content: \"\\f11b\";\n}\n\n.vjs-icon-pinterest {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal;\n}\n.vjs-icon-pinterest:before {\n  content: \"\\f11c\";\n}\n\n.vjs-icon-audio-description, .video-js .vjs-descriptions-button .vjs-icon-placeholder {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal;\n}\n.vjs-icon-audio-description:before, .video-js .vjs-descriptions-button .vjs-icon-placeholder:before {\n  content: \"\\f11d\";\n}\n\n.vjs-icon-audio, .video-js .vjs-audio-button .vjs-icon-placeholder {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal;\n}\n.vjs-icon-audio:before, .video-js .vjs-audio-button .vjs-icon-placeholder:before {\n  content: \"\\f11e\";\n}\n\n.vjs-icon-next-item {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal;\n}\n.vjs-icon-next-item:before {\n  content: \"\\f11f\";\n}\n\n.vjs-icon-previous-item {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal;\n}\n.vjs-icon-previous-item:before {\n  content: \"\\f120\";\n}\n\n.vjs-icon-picture-in-picture-enter, .video-js .vjs-picture-in-picture-control .vjs-icon-placeholder {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal;\n}\n.vjs-icon-picture-in-picture-enter:before, .video-js .vjs-picture-in-picture-control .vjs-icon-placeholder:before {\n  content: \"\\f121\";\n}\n\n.vjs-icon-picture-in-picture-exit, .video-js.vjs-picture-in-picture .vjs-picture-in-picture-control .vjs-icon-placeholder {\n  font-family: VideoJS;\n  font-weight: normal;\n  font-style: normal;\n}\n.vjs-icon-picture-in-picture-exit:before, .video-js.vjs-picture-in-picture .vjs-picture-in-picture-control .vjs-icon-placeholder:before {\n  content: \"\\f122\";\n}\n\n.video-js {\n  display: block;\n  vertical-align: top;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fff;\n  background-color: #000;\n  position: relative;\n  padding: 0;\n  font-size: 10px;\n  line-height: 1;\n  font-weight: normal;\n  font-style: normal;\n  font-family: Arial, Helvetica, sans-serif;\n  word-break: initial;\n}\n.video-js:-moz-full-screen {\n  position: absolute;\n}\n.video-js:-webkit-full-screen {\n  width: 100% !important;\n  height: 100% !important;\n}\n\n.video-js[tabindex=\"-1\"] {\n  outline: none;\n}\n\n.video-js *,\n.video-js *:before,\n.video-js *:after {\n  -webkit-box-sizing: inherit;\n          box-sizing: inherit;\n}\n\n.video-js ul {\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n  list-style-position: outside;\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\n.video-js.vjs-fluid,\n.video-js.vjs-16-9,\n.video-js.vjs-4-3,\n.video-js.vjs-9-16,\n.video-js.vjs-1-1 {\n  width: 100%;\n  max-width: 100%;\n  height: 0;\n}\n\n.video-js.vjs-16-9 {\n  padding-top: 56.25%;\n}\n\n.video-js.vjs-4-3 {\n  padding-top: 75%;\n}\n\n.video-js.vjs-9-16 {\n  padding-top: 177.7777777778%;\n}\n\n.video-js.vjs-1-1 {\n  padding-top: 100%;\n}\n\n.video-js.vjs-fill {\n  width: 100%;\n  height: 100%;\n}\n\n.video-js .vjs-tech {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\nbody.vjs-full-window {\n  padding: 0;\n  margin: 0;\n  height: 100%;\n}\n\n.vjs-full-window .video-js.vjs-fullscreen {\n  position: fixed;\n  overflow: hidden;\n  z-index: 1000;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n}\n\n.video-js.vjs-fullscreen:not(.vjs-ios-native-fs) {\n  width: 100% !important;\n  height: 100% !important;\n  padding-top: 0 !important;\n}\n\n.video-js.vjs-fullscreen.vjs-user-inactive {\n  cursor: none;\n}\n\n.vjs-hidden {\n  display: none !important;\n}\n\n.vjs-disabled {\n  opacity: 0.5;\n  cursor: default;\n}\n\n.video-js .vjs-offscreen {\n  height: 1px;\n  left: -9999px;\n  position: absolute;\n  top: 0;\n  width: 1px;\n}\n\n.vjs-lock-showing {\n  display: block !important;\n  opacity: 1 !important;\n  visibility: visible !important;\n}\n\n.vjs-no-js {\n  padding: 20px;\n  color: #fff;\n  background-color: #000;\n  font-size: 18px;\n  font-family: Arial, Helvetica, sans-serif;\n  text-align: center;\n  width: 300px;\n  height: 150px;\n  margin: 0px auto;\n}\n\n.vjs-no-js a,\n.vjs-no-js a:visited {\n  color: #66A8CC;\n}\n\n.video-js .vjs-big-play-button {\n  font-size: 3em;\n  line-height: 1.5em;\n  height: 1.63332em;\n  width: 3em;\n  display: block;\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  padding: 0;\n  cursor: pointer;\n  opacity: 1;\n  border: 0.06666em solid #fff;\n  background-color: #2B333F;\n  background-color: rgba(43, 51, 63, 0.7);\n  border-radius: 0.3em;\n  -webkit-transition: all 0.4s;\n  transition: all 0.4s;\n}\n.vjs-big-play-centered .vjs-big-play-button {\n  top: 50%;\n  left: 50%;\n  margin-top: -0.81666em;\n  margin-left: -1.5em;\n}\n\n.video-js:hover .vjs-big-play-button,\n.video-js .vjs-big-play-button:focus {\n  border-color: #fff;\n  background-color: #73859f;\n  background-color: rgba(115, 133, 159, 0.5);\n  -webkit-transition: all 0s;\n  transition: all 0s;\n}\n\n.vjs-controls-disabled .vjs-big-play-button,\n.vjs-has-started .vjs-big-play-button,\n.vjs-using-native-controls .vjs-big-play-button,\n.vjs-error .vjs-big-play-button {\n  display: none;\n}\n\n.vjs-has-started.vjs-paused.vjs-show-big-play-button-on-pause .vjs-big-play-button {\n  display: block;\n}\n\n.video-js button {\n  background: none;\n  border: none;\n  color: inherit;\n  display: inline-block;\n  font-size: inherit;\n  line-height: inherit;\n  text-transform: none;\n  text-decoration: none;\n  -webkit-transition: none;\n  transition: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n\n.vjs-control .vjs-button {\n  width: 100%;\n  height: 100%;\n}\n\n.video-js .vjs-control.vjs-close-button {\n  cursor: pointer;\n  height: 3em;\n  position: absolute;\n  right: 0;\n  top: 0.5em;\n  z-index: 2;\n}\n.video-js .vjs-modal-dialog {\n  background: rgba(0, 0, 0, 0.8);\n  background: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.8)), to(rgba(255, 255, 255, 0)));\n  background: linear-gradient(180deg, rgba(0, 0, 0, 0.8), rgba(255, 255, 255, 0));\n  overflow: auto;\n}\n\n.video-js .vjs-modal-dialog > * {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\n.vjs-modal-dialog .vjs-modal-dialog-content {\n  font-size: 1.2em;\n  line-height: 1.5;\n  padding: 20px 24px;\n  z-index: 1;\n}\n\n.vjs-menu-button {\n  cursor: pointer;\n}\n\n.vjs-menu-button.vjs-disabled {\n  cursor: default;\n}\n\n.vjs-workinghover .vjs-menu-button.vjs-disabled:hover .vjs-menu {\n  display: none;\n}\n\n.vjs-menu .vjs-menu-content {\n  display: block;\n  padding: 0;\n  margin: 0;\n  font-family: Arial, Helvetica, sans-serif;\n  overflow: auto;\n}\n\n.vjs-menu .vjs-menu-content > * {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\n.vjs-scrubbing .vjs-control.vjs-menu-button:hover .vjs-menu {\n  display: none;\n}\n\n.vjs-menu li {\n  list-style: none;\n  margin: 0;\n  padding: 0.2em 0;\n  line-height: 1.4em;\n  font-size: 1.2em;\n  text-align: center;\n  text-transform: lowercase;\n}\n\n.vjs-menu li.vjs-menu-item:focus,\n.vjs-menu li.vjs-menu-item:hover,\n.js-focus-visible .vjs-menu li.vjs-menu-item:hover {\n  background-color: #73859f;\n  background-color: rgba(115, 133, 159, 0.5);\n}\n\n.vjs-menu li.vjs-selected,\n.vjs-menu li.vjs-selected:focus,\n.vjs-menu li.vjs-selected:hover,\n.js-focus-visible .vjs-menu li.vjs-selected:hover {\n  background-color: #fff;\n  color: #2B333F;\n}\n\n.video-js .vjs-menu *:not(.vjs-selected):focus:not(:focus-visible),\n.js-focus-visible .vjs-menu *:not(.vjs-selected):focus:not(.focus-visible) {\n  background: none;\n}\n\n.vjs-menu li.vjs-menu-title {\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 1em;\n  line-height: 2em;\n  padding: 0;\n  margin: 0 0 0.3em 0;\n  font-weight: bold;\n  cursor: default;\n}\n\n.vjs-menu-button-popup .vjs-menu {\n  display: none;\n  position: absolute;\n  bottom: 0;\n  width: 10em;\n  left: -3em;\n  height: 0em;\n  margin-bottom: 1.5em;\n  border-top-color: rgba(43, 51, 63, 0.7);\n}\n\n.vjs-menu-button-popup .vjs-menu .vjs-menu-content {\n  background-color: #2B333F;\n  background-color: rgba(43, 51, 63, 0.7);\n  position: absolute;\n  width: 100%;\n  bottom: 1.5em;\n  max-height: 15em;\n}\n\n.vjs-layout-tiny .vjs-menu-button-popup .vjs-menu .vjs-menu-content,\n.vjs-layout-x-small .vjs-menu-button-popup .vjs-menu .vjs-menu-content {\n  max-height: 5em;\n}\n\n.vjs-layout-small .vjs-menu-button-popup .vjs-menu .vjs-menu-content {\n  max-height: 10em;\n}\n\n.vjs-layout-medium .vjs-menu-button-popup .vjs-menu .vjs-menu-content {\n  max-height: 14em;\n}\n\n.vjs-layout-large .vjs-menu-button-popup .vjs-menu .vjs-menu-content,\n.vjs-layout-x-large .vjs-menu-button-popup .vjs-menu .vjs-menu-content,\n.vjs-layout-huge .vjs-menu-button-popup .vjs-menu .vjs-menu-content {\n  max-height: 25em;\n}\n\n.vjs-workinghover .vjs-menu-button-popup.vjs-hover .vjs-menu,\n.vjs-menu-button-popup .vjs-menu.vjs-lock-showing {\n  display: block;\n}\n\n.video-js .vjs-menu-button-inline {\n  -webkit-transition: all 0.4s;\n  transition: all 0.4s;\n  overflow: hidden;\n}\n\n.video-js .vjs-menu-button-inline:before {\n  width: 2.222222222em;\n}\n\n.video-js .vjs-menu-button-inline:hover,\n.video-js .vjs-menu-button-inline:focus,\n.video-js .vjs-menu-button-inline.vjs-slider-active,\n.video-js.vjs-no-flex .vjs-menu-button-inline {\n  width: 12em;\n}\n\n.vjs-menu-button-inline .vjs-menu {\n  opacity: 0;\n  height: 100%;\n  width: auto;\n  position: absolute;\n  left: 4em;\n  top: 0;\n  padding: 0;\n  margin: 0;\n  -webkit-transition: all 0.4s;\n  transition: all 0.4s;\n}\n\n.vjs-menu-button-inline:hover .vjs-menu,\n.vjs-menu-button-inline:focus .vjs-menu,\n.vjs-menu-button-inline.vjs-slider-active .vjs-menu {\n  display: block;\n  opacity: 1;\n}\n\n.vjs-no-flex .vjs-menu-button-inline .vjs-menu {\n  display: block;\n  opacity: 1;\n  position: relative;\n  width: auto;\n}\n\n.vjs-no-flex .vjs-menu-button-inline:hover .vjs-menu,\n.vjs-no-flex .vjs-menu-button-inline:focus .vjs-menu,\n.vjs-no-flex .vjs-menu-button-inline.vjs-slider-active .vjs-menu {\n  width: auto;\n}\n\n.vjs-menu-button-inline .vjs-menu-content {\n  width: auto;\n  height: 100%;\n  margin: 0;\n  overflow: hidden;\n}\n\n.video-js .vjs-control-bar {\n  display: none;\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 3em;\n  background-color: #2B333F;\n  background-color: rgba(43, 51, 63, 0.7);\n}\n\n.vjs-has-started .vjs-control-bar {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  visibility: visible;\n  opacity: 1;\n  -webkit-transition: visibility 0.1s, opacity 0.1s;\n  transition: visibility 0.1s, opacity 0.1s;\n}\n\n.vjs-has-started.vjs-user-inactive.vjs-playing .vjs-control-bar {\n  visibility: visible;\n  opacity: 0;\n  pointer-events: none;\n  -webkit-transition: visibility 1s, opacity 1s;\n  transition: visibility 1s, opacity 1s;\n}\n\n.vjs-controls-disabled .vjs-control-bar,\n.vjs-using-native-controls .vjs-control-bar,\n.vjs-error .vjs-control-bar {\n  display: none !important;\n}\n\n.vjs-audio.vjs-has-started.vjs-user-inactive.vjs-playing .vjs-control-bar {\n  opacity: 1;\n  visibility: visible;\n}\n\n.vjs-has-started.vjs-no-flex .vjs-control-bar {\n  display: table;\n}\n\n.video-js .vjs-control {\n  position: relative;\n  text-align: center;\n  margin: 0;\n  padding: 0;\n  height: 100%;\n  width: 4em;\n  -webkit-box-flex: 0;\n      -ms-flex: none;\n          flex: none;\n}\n\n.vjs-button > .vjs-icon-placeholder:before {\n  font-size: 1.8em;\n  line-height: 1.67;\n}\n\n.vjs-button > .vjs-icon-placeholder {\n  display: block;\n}\n\n.video-js .vjs-control:focus:before,\n.video-js .vjs-control:hover:before,\n.video-js .vjs-control:focus {\n  text-shadow: 0em 0em 1em white;\n}\n\n.video-js .vjs-control-text {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.vjs-no-flex .vjs-control {\n  display: table-cell;\n  vertical-align: middle;\n}\n\n.video-js .vjs-custom-control-spacer {\n  display: none;\n}\n\n.video-js .vjs-progress-control {\n  cursor: pointer;\n  -webkit-box-flex: 1;\n      -ms-flex: auto;\n          flex: auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  min-width: 4em;\n  -ms-touch-action: none;\n      touch-action: none;\n}\n\n.video-js .vjs-progress-control.disabled {\n  cursor: default;\n}\n\n.vjs-live .vjs-progress-control {\n  display: none;\n}\n\n.vjs-liveui .vjs-progress-control {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.vjs-no-flex .vjs-progress-control {\n  width: auto;\n}\n\n.video-js .vjs-progress-holder {\n  -webkit-box-flex: 1;\n      -ms-flex: auto;\n          flex: auto;\n  -webkit-transition: all 0.2s;\n  transition: all 0.2s;\n  height: 0.3em;\n}\n\n.video-js .vjs-progress-control .vjs-progress-holder {\n  margin: 0 10px;\n}\n\n.video-js .vjs-progress-control:hover .vjs-progress-holder {\n  font-size: 1.6666666667em;\n}\n\n.video-js .vjs-progress-control:hover .vjs-progress-holder.disabled {\n  font-size: 1em;\n}\n\n.video-js .vjs-progress-holder .vjs-play-progress,\n.video-js .vjs-progress-holder .vjs-load-progress,\n.video-js .vjs-progress-holder .vjs-load-progress div {\n  position: absolute;\n  display: block;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  width: 0;\n}\n\n.video-js .vjs-play-progress {\n  background-color: #fff;\n}\n.video-js .vjs-play-progress:before {\n  font-size: 0.9em;\n  position: absolute;\n  right: -0.5em;\n  top: -0.3333333333em;\n  z-index: 1;\n}\n\n.video-js .vjs-load-progress {\n  background: rgba(115, 133, 159, 0.5);\n}\n\n.video-js .vjs-load-progress div {\n  background: rgba(115, 133, 159, 0.75);\n}\n\n.video-js .vjs-time-tooltip {\n  background-color: #fff;\n  background-color: rgba(255, 255, 255, 0.8);\n  border-radius: 0.3em;\n  color: #000;\n  float: right;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 1em;\n  padding: 6px 8px 8px 8px;\n  pointer-events: none;\n  position: absolute;\n  top: -3.4em;\n  visibility: hidden;\n  z-index: 1;\n}\n\n.video-js .vjs-progress-holder:focus .vjs-time-tooltip {\n  display: none;\n}\n\n.video-js .vjs-progress-control:hover .vjs-time-tooltip,\n.video-js .vjs-progress-control:hover .vjs-progress-holder:focus .vjs-time-tooltip {\n  display: block;\n  font-size: 0.6em;\n  visibility: visible;\n}\n\n.video-js .vjs-progress-control.disabled:hover .vjs-time-tooltip {\n  font-size: 1em;\n}\n\n.video-js .vjs-progress-control .vjs-mouse-display {\n  display: none;\n  position: absolute;\n  width: 1px;\n  height: 100%;\n  background-color: #000;\n  z-index: 1;\n}\n\n.vjs-no-flex .vjs-progress-control .vjs-mouse-display {\n  z-index: 0;\n}\n\n.video-js .vjs-progress-control:hover .vjs-mouse-display {\n  display: block;\n}\n\n.video-js.vjs-user-inactive .vjs-progress-control .vjs-mouse-display {\n  visibility: hidden;\n  opacity: 0;\n  -webkit-transition: visibility 1s, opacity 1s;\n  transition: visibility 1s, opacity 1s;\n}\n\n.video-js.vjs-user-inactive.vjs-no-flex .vjs-progress-control .vjs-mouse-display {\n  display: none;\n}\n\n.vjs-mouse-display .vjs-time-tooltip {\n  color: #fff;\n  background-color: #000;\n  background-color: rgba(0, 0, 0, 0.8);\n}\n\n.video-js .vjs-slider {\n  position: relative;\n  cursor: pointer;\n  padding: 0;\n  margin: 0 0.45em 0 0.45em;\n  /* iOS Safari */\n  -webkit-touch-callout: none;\n  /* Safari */\n  -webkit-user-select: none;\n  /* Konqueror HTML */\n  /* Firefox */\n  -moz-user-select: none;\n  /* Internet Explorer/Edge */\n  -ms-user-select: none;\n  /* Non-prefixed version, currently supported by Chrome and Opera */\n  user-select: none;\n  background-color: #73859f;\n  background-color: rgba(115, 133, 159, 0.5);\n}\n\n.video-js .vjs-slider.disabled {\n  cursor: default;\n}\n\n.video-js .vjs-slider:focus {\n  text-shadow: 0em 0em 1em white;\n  -webkit-box-shadow: 0 0 1em #fff;\n          box-shadow: 0 0 1em #fff;\n}\n\n.video-js .vjs-mute-control {\n  cursor: pointer;\n  -webkit-box-flex: 0;\n      -ms-flex: none;\n          flex: none;\n}\n.video-js .vjs-volume-control {\n  cursor: pointer;\n  margin-right: 1em;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.video-js .vjs-volume-control.vjs-volume-horizontal {\n  width: 5em;\n}\n\n.video-js .vjs-volume-panel .vjs-volume-control {\n  visibility: visible;\n  opacity: 0;\n  width: 1px;\n  height: 1px;\n  margin-left: -1px;\n}\n\n.video-js .vjs-volume-panel {\n  -webkit-transition: width 1s;\n  transition: width 1s;\n}\n.video-js .vjs-volume-panel.vjs-hover .vjs-volume-control, .video-js .vjs-volume-panel:active .vjs-volume-control, .video-js .vjs-volume-panel:focus .vjs-volume-control, .video-js .vjs-volume-panel .vjs-volume-control:active, .video-js .vjs-volume-panel.vjs-hover .vjs-mute-control ~ .vjs-volume-control, .video-js .vjs-volume-panel .vjs-volume-control.vjs-slider-active {\n  visibility: visible;\n  opacity: 1;\n  position: relative;\n  -webkit-transition: visibility 0.1s, opacity 0.1s, height 0.1s, width 0.1s, left 0s, top 0s;\n  transition: visibility 0.1s, opacity 0.1s, height 0.1s, width 0.1s, left 0s, top 0s;\n}\n.video-js .vjs-volume-panel.vjs-hover .vjs-volume-control.vjs-volume-horizontal, .video-js .vjs-volume-panel:active .vjs-volume-control.vjs-volume-horizontal, .video-js .vjs-volume-panel:focus .vjs-volume-control.vjs-volume-horizontal, .video-js .vjs-volume-panel .vjs-volume-control:active.vjs-volume-horizontal, .video-js .vjs-volume-panel.vjs-hover .vjs-mute-control ~ .vjs-volume-control.vjs-volume-horizontal, .video-js .vjs-volume-panel .vjs-volume-control.vjs-slider-active.vjs-volume-horizontal {\n  width: 5em;\n  height: 3em;\n  margin-right: 0;\n}\n.video-js .vjs-volume-panel.vjs-hover .vjs-volume-control.vjs-volume-vertical, .video-js .vjs-volume-panel:active .vjs-volume-control.vjs-volume-vertical, .video-js .vjs-volume-panel:focus .vjs-volume-control.vjs-volume-vertical, .video-js .vjs-volume-panel .vjs-volume-control:active.vjs-volume-vertical, .video-js .vjs-volume-panel.vjs-hover .vjs-mute-control ~ .vjs-volume-control.vjs-volume-vertical, .video-js .vjs-volume-panel .vjs-volume-control.vjs-slider-active.vjs-volume-vertical {\n  left: -3.5em;\n  -webkit-transition: left 0s;\n  transition: left 0s;\n}\n.video-js .vjs-volume-panel.vjs-volume-panel-horizontal.vjs-hover, .video-js .vjs-volume-panel.vjs-volume-panel-horizontal:active, .video-js .vjs-volume-panel.vjs-volume-panel-horizontal.vjs-slider-active {\n  width: 10em;\n  -webkit-transition: width 0.1s;\n  transition: width 0.1s;\n}\n.video-js .vjs-volume-panel.vjs-volume-panel-horizontal.vjs-mute-toggle-only {\n  width: 4em;\n}\n\n.video-js .vjs-volume-panel .vjs-volume-control.vjs-volume-vertical {\n  height: 8em;\n  width: 3em;\n  left: -3000em;\n  -webkit-transition: visibility 1s, opacity 1s, height 1s 1s, width 1s 1s, left 1s 1s, top 1s 1s;\n  transition: visibility 1s, opacity 1s, height 1s 1s, width 1s 1s, left 1s 1s, top 1s 1s;\n}\n\n.video-js .vjs-volume-panel .vjs-volume-control.vjs-volume-horizontal {\n  -webkit-transition: visibility 1s, opacity 1s, height 1s 1s, width 1s, left 1s 1s, top 1s 1s;\n  transition: visibility 1s, opacity 1s, height 1s 1s, width 1s, left 1s 1s, top 1s 1s;\n}\n\n.video-js.vjs-no-flex .vjs-volume-panel .vjs-volume-control.vjs-volume-horizontal {\n  width: 5em;\n  height: 3em;\n  visibility: visible;\n  opacity: 1;\n  position: relative;\n  -webkit-transition: none;\n  transition: none;\n}\n\n.video-js.vjs-no-flex .vjs-volume-control.vjs-volume-vertical,\n.video-js.vjs-no-flex .vjs-volume-panel .vjs-volume-control.vjs-volume-vertical {\n  position: absolute;\n  bottom: 3em;\n  left: 0.5em;\n}\n\n.video-js .vjs-volume-panel {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.video-js .vjs-volume-bar {\n  margin: 1.35em 0.45em;\n}\n\n.vjs-volume-bar.vjs-slider-horizontal {\n  width: 5em;\n  height: 0.3em;\n}\n\n.vjs-volume-bar.vjs-slider-vertical {\n  width: 0.3em;\n  height: 5em;\n  margin: 1.35em auto;\n}\n\n.video-js .vjs-volume-level {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  background-color: #fff;\n}\n.video-js .vjs-volume-level:before {\n  position: absolute;\n  font-size: 0.9em;\n  z-index: 1;\n}\n\n.vjs-slider-vertical .vjs-volume-level {\n  width: 0.3em;\n}\n.vjs-slider-vertical .vjs-volume-level:before {\n  top: -0.5em;\n  left: -0.3em;\n  z-index: 1;\n}\n\n.vjs-slider-horizontal .vjs-volume-level {\n  height: 0.3em;\n}\n.vjs-slider-horizontal .vjs-volume-level:before {\n  top: -0.3em;\n  right: -0.5em;\n}\n\n.video-js .vjs-volume-panel.vjs-volume-panel-vertical {\n  width: 4em;\n}\n\n.vjs-volume-bar.vjs-slider-vertical .vjs-volume-level {\n  height: 100%;\n}\n\n.vjs-volume-bar.vjs-slider-horizontal .vjs-volume-level {\n  width: 100%;\n}\n\n.video-js .vjs-volume-vertical {\n  width: 3em;\n  height: 8em;\n  bottom: 8em;\n  background-color: #2B333F;\n  background-color: rgba(43, 51, 63, 0.7);\n}\n\n.video-js .vjs-volume-horizontal .vjs-menu {\n  left: -2em;\n}\n\n.video-js .vjs-volume-tooltip {\n  background-color: #fff;\n  background-color: rgba(255, 255, 255, 0.8);\n  border-radius: 0.3em;\n  color: #000;\n  float: right;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 1em;\n  padding: 6px 8px 8px 8px;\n  pointer-events: none;\n  position: absolute;\n  top: -3.4em;\n  visibility: hidden;\n  z-index: 1;\n}\n\n.video-js .vjs-volume-control:hover .vjs-volume-tooltip,\n.video-js .vjs-volume-control:hover .vjs-progress-holder:focus .vjs-volume-tooltip {\n  display: block;\n  font-size: 1em;\n  visibility: visible;\n}\n\n.video-js .vjs-volume-vertical:hover .vjs-volume-tooltip,\n.video-js .vjs-volume-vertical:hover .vjs-progress-holder:focus .vjs-volume-tooltip {\n  left: 1em;\n  top: -12px;\n}\n\n.video-js .vjs-volume-control.disabled:hover .vjs-volume-tooltip {\n  font-size: 1em;\n}\n\n.video-js .vjs-volume-control .vjs-mouse-display {\n  display: none;\n  position: absolute;\n  width: 100%;\n  height: 1px;\n  background-color: #000;\n  z-index: 1;\n}\n\n.video-js .vjs-volume-horizontal .vjs-mouse-display {\n  width: 1px;\n  height: 100%;\n}\n\n.vjs-no-flex .vjs-volume-control .vjs-mouse-display {\n  z-index: 0;\n}\n\n.video-js .vjs-volume-control:hover .vjs-mouse-display {\n  display: block;\n}\n\n.video-js.vjs-user-inactive .vjs-volume-control .vjs-mouse-display {\n  visibility: hidden;\n  opacity: 0;\n  -webkit-transition: visibility 1s, opacity 1s;\n  transition: visibility 1s, opacity 1s;\n}\n\n.video-js.vjs-user-inactive.vjs-no-flex .vjs-volume-control .vjs-mouse-display {\n  display: none;\n}\n\n.vjs-mouse-display .vjs-volume-tooltip {\n  color: #fff;\n  background-color: #000;\n  background-color: rgba(0, 0, 0, 0.8);\n}\n\n.vjs-poster {\n  display: inline-block;\n  vertical-align: middle;\n  background-repeat: no-repeat;\n  background-position: 50% 50%;\n  background-size: contain;\n  background-color: #000000;\n  cursor: pointer;\n  margin: 0;\n  padding: 0;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  height: 100%;\n}\n\n.vjs-has-started .vjs-poster {\n  display: none;\n}\n\n.vjs-audio.vjs-has-started .vjs-poster {\n  display: block;\n}\n\n.vjs-using-native-controls .vjs-poster {\n  display: none;\n}\n\n.video-js .vjs-live-control {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  -webkit-box-flex: 1;\n      -ms-flex: auto;\n          flex: auto;\n  font-size: 1em;\n  line-height: 3em;\n}\n\n.vjs-no-flex .vjs-live-control {\n  display: table-cell;\n  width: auto;\n  text-align: left;\n}\n\n.video-js:not(.vjs-live) .vjs-live-control,\n.video-js.vjs-liveui .vjs-live-control {\n  display: none;\n}\n\n.video-js .vjs-seek-to-live-control {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  cursor: pointer;\n  -webkit-box-flex: 0;\n      -ms-flex: none;\n          flex: none;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  height: 100%;\n  padding-left: 0.5em;\n  padding-right: 0.5em;\n  font-size: 1em;\n  line-height: 3em;\n  width: auto;\n  min-width: 4em;\n}\n\n.vjs-no-flex .vjs-seek-to-live-control {\n  display: table-cell;\n  width: auto;\n  text-align: left;\n}\n\n.video-js.vjs-live:not(.vjs-liveui) .vjs-seek-to-live-control,\n.video-js:not(.vjs-live) .vjs-seek-to-live-control {\n  display: none;\n}\n\n.vjs-seek-to-live-control.vjs-control.vjs-at-live-edge {\n  cursor: auto;\n}\n\n.vjs-seek-to-live-control .vjs-icon-placeholder {\n  margin-right: 0.5em;\n  color: #888;\n}\n\n.vjs-seek-to-live-control.vjs-control.vjs-at-live-edge .vjs-icon-placeholder {\n  color: red;\n}\n\n.video-js .vjs-time-control {\n  -webkit-box-flex: 0;\n      -ms-flex: none;\n          flex: none;\n  font-size: 1em;\n  line-height: 3em;\n  min-width: 2em;\n  width: auto;\n  padding-left: 1em;\n  padding-right: 1em;\n}\n\n.vjs-live .vjs-time-control {\n  display: none;\n}\n\n.video-js .vjs-current-time,\n.vjs-no-flex .vjs-current-time {\n  display: none;\n}\n\n.video-js .vjs-duration,\n.vjs-no-flex .vjs-duration {\n  display: none;\n}\n\n.vjs-time-divider {\n  display: none;\n  line-height: 3em;\n}\n\n.vjs-live .vjs-time-divider {\n  display: none;\n}\n\n.video-js .vjs-play-control {\n  cursor: pointer;\n}\n\n.video-js .vjs-play-control .vjs-icon-placeholder {\n  -webkit-box-flex: 0;\n      -ms-flex: none;\n          flex: none;\n}\n\n.vjs-text-track-display {\n  position: absolute;\n  bottom: 3em;\n  left: 0;\n  right: 0;\n  top: 0;\n  pointer-events: none;\n}\n\n.video-js.vjs-user-inactive.vjs-playing .vjs-text-track-display {\n  bottom: 1em;\n}\n\n.video-js .vjs-text-track {\n  font-size: 1.4em;\n  text-align: center;\n  margin-bottom: 0.1em;\n}\n\n.vjs-subtitles {\n  color: #fff;\n}\n\n.vjs-captions {\n  color: #fc6;\n}\n\n.vjs-tt-cue {\n  display: block;\n}\n\nvideo::-webkit-media-text-track-display {\n  -webkit-transform: translateY(-3em);\n          transform: translateY(-3em);\n}\n\n.video-js.vjs-user-inactive.vjs-playing video::-webkit-media-text-track-display {\n  -webkit-transform: translateY(-1.5em);\n          transform: translateY(-1.5em);\n}\n\n.video-js .vjs-picture-in-picture-control {\n  cursor: pointer;\n  -webkit-box-flex: 0;\n      -ms-flex: none;\n          flex: none;\n}\n.video-js .vjs-fullscreen-control {\n  cursor: pointer;\n  -webkit-box-flex: 0;\n      -ms-flex: none;\n          flex: none;\n}\n.vjs-playback-rate > .vjs-menu-button,\n.vjs-playback-rate .vjs-playback-rate-value {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.vjs-playback-rate .vjs-playback-rate-value {\n  pointer-events: none;\n  font-size: 1.5em;\n  line-height: 2;\n  text-align: center;\n}\n\n.vjs-playback-rate .vjs-menu {\n  width: 4em;\n  left: 0em;\n}\n\n.vjs-error .vjs-error-display .vjs-modal-dialog-content {\n  font-size: 1.4em;\n  text-align: center;\n}\n\n.vjs-error .vjs-error-display:before {\n  color: #fff;\n  content: \"X\";\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 4em;\n  left: 0;\n  line-height: 1;\n  margin-top: -0.5em;\n  position: absolute;\n  text-shadow: 0.05em 0.05em 0.1em #000;\n  text-align: center;\n  top: 50%;\n  vertical-align: middle;\n  width: 100%;\n}\n\n.vjs-loading-spinner {\n  display: none;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin: -25px 0 0 -25px;\n  opacity: 0.85;\n  text-align: left;\n  border: 6px solid rgba(43, 51, 63, 0.7);\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  background-clip: padding-box;\n  width: 50px;\n  height: 50px;\n  border-radius: 25px;\n  visibility: hidden;\n}\n\n.vjs-seeking .vjs-loading-spinner,\n.vjs-waiting .vjs-loading-spinner {\n  display: block;\n  -webkit-animation: vjs-spinner-show 0s linear 0.3s forwards;\n          animation: vjs-spinner-show 0s linear 0.3s forwards;\n}\n\n.vjs-loading-spinner:before,\n.vjs-loading-spinner:after {\n  content: \"\";\n  position: absolute;\n  margin: -6px;\n  -webkit-box-sizing: inherit;\n          box-sizing: inherit;\n  width: inherit;\n  height: inherit;\n  border-radius: inherit;\n  opacity: 1;\n  border: inherit;\n  border-color: transparent;\n  border-top-color: white;\n}\n\n.vjs-seeking .vjs-loading-spinner:before,\n.vjs-seeking .vjs-loading-spinner:after,\n.vjs-waiting .vjs-loading-spinner:before,\n.vjs-waiting .vjs-loading-spinner:after {\n  -webkit-animation: vjs-spinner-spin 1.1s cubic-bezier(0.6, 0.2, 0, 0.8) infinite, vjs-spinner-fade 1.1s linear infinite;\n  animation: vjs-spinner-spin 1.1s cubic-bezier(0.6, 0.2, 0, 0.8) infinite, vjs-spinner-fade 1.1s linear infinite;\n}\n\n.vjs-seeking .vjs-loading-spinner:before,\n.vjs-waiting .vjs-loading-spinner:before {\n  border-top-color: white;\n}\n\n.vjs-seeking .vjs-loading-spinner:after,\n.vjs-waiting .vjs-loading-spinner:after {\n  border-top-color: white;\n  -webkit-animation-delay: 0.44s;\n  animation-delay: 0.44s;\n}\n\n@keyframes vjs-spinner-show {\n  to {\n    visibility: visible;\n  }\n}\n@-webkit-keyframes vjs-spinner-show {\n  to {\n    visibility: visible;\n  }\n}\n@keyframes vjs-spinner-spin {\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@-webkit-keyframes vjs-spinner-spin {\n  100% {\n    -webkit-transform: rotate(360deg);\n  }\n}\n@keyframes vjs-spinner-fade {\n  0% {\n    border-top-color: #73859f;\n  }\n  20% {\n    border-top-color: #73859f;\n  }\n  35% {\n    border-top-color: white;\n  }\n  60% {\n    border-top-color: #73859f;\n  }\n  100% {\n    border-top-color: #73859f;\n  }\n}\n@-webkit-keyframes vjs-spinner-fade {\n  0% {\n    border-top-color: #73859f;\n  }\n  20% {\n    border-top-color: #73859f;\n  }\n  35% {\n    border-top-color: white;\n  }\n  60% {\n    border-top-color: #73859f;\n  }\n  100% {\n    border-top-color: #73859f;\n  }\n}\n.vjs-chapters-button .vjs-menu ul {\n  width: 24em;\n}\n\n.video-js .vjs-subs-caps-button + .vjs-menu .vjs-captions-menu-item .vjs-menu-item-text .vjs-icon-placeholder {\n  vertical-align: middle;\n  display: inline-block;\n  margin-bottom: -0.1em;\n}\n\n.video-js .vjs-subs-caps-button + .vjs-menu .vjs-captions-menu-item .vjs-menu-item-text .vjs-icon-placeholder:before {\n  font-family: VideoJS;\n  content: \"\";\n  font-size: 1.5em;\n  line-height: inherit;\n}\n\n.video-js .vjs-audio-button + .vjs-menu .vjs-main-desc-menu-item .vjs-menu-item-text .vjs-icon-placeholder {\n  vertical-align: middle;\n  display: inline-block;\n  margin-bottom: -0.1em;\n}\n\n.video-js .vjs-audio-button + .vjs-menu .vjs-main-desc-menu-item .vjs-menu-item-text .vjs-icon-placeholder:before {\n  font-family: VideoJS;\n  content: \" \";\n  font-size: 1.5em;\n  line-height: inherit;\n}\n\n.video-js.vjs-layout-small .vjs-current-time,\n.video-js.vjs-layout-small .vjs-time-divider,\n.video-js.vjs-layout-small .vjs-duration,\n.video-js.vjs-layout-small .vjs-remaining-time,\n.video-js.vjs-layout-small .vjs-playback-rate,\n.video-js.vjs-layout-small .vjs-chapters-button,\n.video-js.vjs-layout-small .vjs-descriptions-button,\n.video-js.vjs-layout-small .vjs-captions-button,\n.video-js.vjs-layout-small .vjs-subtitles-button,\n.video-js.vjs-layout-small .vjs-audio-button,\n.video-js.vjs-layout-small .vjs-volume-control, .video-js.vjs-layout-x-small .vjs-current-time,\n.video-js.vjs-layout-x-small .vjs-time-divider,\n.video-js.vjs-layout-x-small .vjs-duration,\n.video-js.vjs-layout-x-small .vjs-remaining-time,\n.video-js.vjs-layout-x-small .vjs-playback-rate,\n.video-js.vjs-layout-x-small .vjs-chapters-button,\n.video-js.vjs-layout-x-small .vjs-descriptions-button,\n.video-js.vjs-layout-x-small .vjs-captions-button,\n.video-js.vjs-layout-x-small .vjs-subtitles-button,\n.video-js.vjs-layout-x-small .vjs-audio-button,\n.video-js.vjs-layout-x-small .vjs-volume-control, .video-js.vjs-layout-tiny .vjs-current-time,\n.video-js.vjs-layout-tiny .vjs-time-divider,\n.video-js.vjs-layout-tiny .vjs-duration,\n.video-js.vjs-layout-tiny .vjs-remaining-time,\n.video-js.vjs-layout-tiny .vjs-playback-rate,\n.video-js.vjs-layout-tiny .vjs-chapters-button,\n.video-js.vjs-layout-tiny .vjs-descriptions-button,\n.video-js.vjs-layout-tiny .vjs-captions-button,\n.video-js.vjs-layout-tiny .vjs-subtitles-button,\n.video-js.vjs-layout-tiny .vjs-audio-button,\n.video-js.vjs-layout-tiny .vjs-volume-control {\n  display: none;\n}\n.video-js.vjs-layout-small .vjs-volume-panel.vjs-volume-panel-horizontal:hover, .video-js.vjs-layout-small .vjs-volume-panel.vjs-volume-panel-horizontal:active, .video-js.vjs-layout-small .vjs-volume-panel.vjs-volume-panel-horizontal.vjs-slider-active, .video-js.vjs-layout-small .vjs-volume-panel.vjs-volume-panel-horizontal.vjs-hover, .video-js.vjs-layout-x-small .vjs-volume-panel.vjs-volume-panel-horizontal:hover, .video-js.vjs-layout-x-small .vjs-volume-panel.vjs-volume-panel-horizontal:active, .video-js.vjs-layout-x-small .vjs-volume-panel.vjs-volume-panel-horizontal.vjs-slider-active, .video-js.vjs-layout-x-small .vjs-volume-panel.vjs-volume-panel-horizontal.vjs-hover, .video-js.vjs-layout-tiny .vjs-volume-panel.vjs-volume-panel-horizontal:hover, .video-js.vjs-layout-tiny .vjs-volume-panel.vjs-volume-panel-horizontal:active, .video-js.vjs-layout-tiny .vjs-volume-panel.vjs-volume-panel-horizontal.vjs-slider-active, .video-js.vjs-layout-tiny .vjs-volume-panel.vjs-volume-panel-horizontal.vjs-hover {\n  width: auto;\n  width: initial;\n}\n.video-js.vjs-layout-x-small:not(.vjs-liveui) .vjs-subs-caps-button, .video-js.vjs-layout-x-small:not(.vjs-live) .vjs-subs-caps-button, .video-js.vjs-layout-tiny .vjs-subs-caps-button {\n  display: none;\n}\n.video-js.vjs-layout-x-small.vjs-liveui .vjs-custom-control-spacer, .video-js.vjs-layout-tiny .vjs-custom-control-spacer {\n  -webkit-box-flex: 1;\n      -ms-flex: auto;\n          flex: auto;\n  display: block;\n}\n.video-js.vjs-layout-x-small.vjs-liveui.vjs-no-flex .vjs-custom-control-spacer, .video-js.vjs-layout-tiny.vjs-no-flex .vjs-custom-control-spacer {\n  width: auto;\n}\n.video-js.vjs-layout-x-small.vjs-liveui .vjs-progress-control, .video-js.vjs-layout-tiny .vjs-progress-control {\n  display: none;\n}\n\n.vjs-modal-dialog.vjs-text-track-settings {\n  background-color: #2B333F;\n  background-color: rgba(43, 51, 63, 0.75);\n  color: #fff;\n  height: 70%;\n}\n\n.vjs-text-track-settings .vjs-modal-dialog-content {\n  display: table;\n}\n\n.vjs-text-track-settings .vjs-track-settings-colors,\n.vjs-text-track-settings .vjs-track-settings-font,\n.vjs-text-track-settings .vjs-track-settings-controls {\n  display: table-cell;\n}\n\n.vjs-text-track-settings .vjs-track-settings-controls {\n  text-align: right;\n  vertical-align: bottom;\n}\n\n@supports (display: grid) {\n  .vjs-text-track-settings .vjs-modal-dialog-content {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr;\n    padding: 20px 24px 0px 24px;\n  }\n\n  .vjs-track-settings-controls .vjs-default-button {\n    margin-bottom: 20px;\n  }\n\n  .vjs-text-track-settings .vjs-track-settings-controls {\n    grid-column: 1/-1;\n  }\n\n  .vjs-layout-small .vjs-text-track-settings .vjs-modal-dialog-content,\n.vjs-layout-x-small .vjs-text-track-settings .vjs-modal-dialog-content,\n.vjs-layout-tiny .vjs-text-track-settings .vjs-modal-dialog-content {\n    grid-template-columns: 1fr;\n  }\n}\n.vjs-track-setting > select {\n  margin-right: 1em;\n  margin-bottom: 0.5em;\n}\n\n.vjs-text-track-settings fieldset {\n  margin: 5px;\n  padding: 3px;\n  border: none;\n}\n\n.vjs-text-track-settings fieldset span {\n  display: inline-block;\n}\n\n.vjs-text-track-settings fieldset span > select {\n  max-width: 7.3em;\n}\n\n.vjs-text-track-settings legend {\n  color: #fff;\n  margin: 0 0 5px 0;\n}\n\n.vjs-text-track-settings .vjs-label {\n  position: absolute;\n  clip: rect(1px 1px 1px 1px);\n  clip: rect(1px, 1px, 1px, 1px);\n  display: block;\n  margin: 0 0 5px 0;\n  padding: 0;\n  border: 0;\n  height: 1px;\n  width: 1px;\n  overflow: hidden;\n}\n\n.vjs-track-settings-controls button:focus,\n.vjs-track-settings-controls button:active {\n  outline-style: solid;\n  outline-width: medium;\n  background-image: -webkit-gradient(linear, left bottom, left top, color-stop(88%, #fff), to(#73859f));\n  background-image: linear-gradient(0deg, #fff 88%, #73859f 100%);\n}\n\n.vjs-track-settings-controls button:hover {\n  color: rgba(43, 51, 63, 0.75);\n}\n\n.vjs-track-settings-controls button {\n  background-color: #fff;\n  background-image: -webkit-gradient(linear, left top, left bottom, color-stop(88%, #fff), to(#73859f));\n  background-image: linear-gradient(-180deg, #fff 88%, #73859f 100%);\n  color: #2B333F;\n  cursor: pointer;\n  border-radius: 2px;\n}\n\n.vjs-track-settings-controls .vjs-default-button {\n  margin-right: 1em;\n}\n\n@media print {\n  .video-js > *:not(.vjs-tech):not(.vjs-poster) {\n    visibility: hidden;\n  }\n}\n.vjs-resize-manager {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border: none;\n  z-index: -1000;\n}\n\n.js-focus-visible .video-js *:focus:not(.focus-visible) {\n  outline: none;\n}\n\n.video-js *:focus:not(:focus-visible) {\n  outline: none;\n}\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./resources/css/vendor/bootstrap.min.css":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./resources/css/vendor/bootstrap.min.css ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*!\n * Bootstrap v4.3.1 (https://getbootstrap.com/)\n * Copyright 2011-2019 The Bootstrap Authors\n * Copyright 2011-2019 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n */:root{--blue: #007bff;--indigo: #6610f2;--purple: #6f42c1;--pink: #e83e8c;--red: #dc3545;--orange: #fd7e14;--yellow: #ffc107;--green: #28a745;--teal: #20c997;--cyan: #17a2b8;--white: #fff;--gray: #6c757d;--gray-dark: #343a40;--primary: #007bff;--secondary: #6c757d;--success: #28a745;--info: #17a2b8;--warning: #ffc107;--danger: #dc3545;--light: #f8f9fa;--dark: #343a40;--breakpoint-xxs: 0;--breakpoint-xs: 420px;--breakpoint-sm: 576px;--breakpoint-md: 768px;--breakpoint-lg: 992px;--breakpoint-xl: 1200px;--breakpoint-xxl: 1440px;--font-family-sans-serif: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";--font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace}*,*::before,*::after{-webkit-box-sizing:border-box;box-sizing:border-box}html{font-family:sans-serif;line-height:1.15;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:rgba(0,0,0,0)}article,aside,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}body{margin:0;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";font-size:1rem;font-weight:400;line-height:1.5;color:#212529;text-align:left;background-color:#fff}[tabindex=\"-1\"]:focus{outline:0 !important}hr{-webkit-box-sizing:content-box;box-sizing:content-box;height:0;overflow:visible}h1,h2,h3,h4,h5,h6{margin-top:0;margin-bottom:.5rem}p{margin-top:0;margin-bottom:1rem}abbr[title],abbr[data-original-title]{text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;cursor:help;border-bottom:0;-webkit-text-decoration-skip-ink:none;text-decoration-skip-ink:none}address{margin-bottom:1rem;font-style:normal;line-height:inherit}ol,ul,dl{margin-top:0;margin-bottom:1rem}ol ol,ul ul,ol ul,ul ol{margin-bottom:0}dt{font-weight:700}dd{margin-bottom:.5rem;margin-left:0}blockquote{margin:0 0 1rem}b,strong{font-weight:bolder}small{font-size:80%}sub,sup{position:relative;font-size:75%;line-height:0;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}a{color:#007bff;text-decoration:none;background-color:transparent}a:hover{color:#0056b3;text-decoration:underline}a:not([href]):not([tabindex]){color:inherit;text-decoration:none}a:not([href]):not([tabindex]):hover,a:not([href]):not([tabindex]):focus{color:inherit;text-decoration:none}a:not([href]):not([tabindex]):focus{outline:0}pre,code,kbd,samp{font-family:SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace;font-size:1em}pre{margin-top:0;margin-bottom:1rem;overflow:auto}figure{margin:0 0 1rem}img{vertical-align:middle;border-style:none}svg{overflow:hidden;vertical-align:middle}table{border-collapse:collapse}caption{padding-top:.75rem;padding-bottom:.75rem;color:#6c757d;text-align:left;caption-side:bottom}th{text-align:inherit}label{display:inline-block;margin-bottom:.5rem}button{border-radius:0}button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}input,button,select,optgroup,textarea{margin:0;font-family:inherit;font-size:inherit;line-height:inherit}button,input{overflow:visible}button,select{text-transform:none}select{word-wrap:normal}button,[type=\"button\"],[type=\"reset\"],[type=\"submit\"]{-webkit-appearance:button}button:not(:disabled),[type=\"button\"]:not(:disabled),[type=\"reset\"]:not(:disabled),[type=\"submit\"]:not(:disabled){cursor:pointer}button::-moz-focus-inner,[type=\"button\"]::-moz-focus-inner,[type=\"reset\"]::-moz-focus-inner,[type=\"submit\"]::-moz-focus-inner{padding:0;border-style:none}input[type=\"radio\"],input[type=\"checkbox\"]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0}input[type=\"date\"],input[type=\"time\"],input[type=\"datetime-local\"],input[type=\"month\"]{-webkit-appearance:listbox}textarea{overflow:auto;resize:vertical}fieldset{min-width:0;padding:0;margin:0;border:0}legend{display:block;width:100%;max-width:100%;padding:0;margin-bottom:.5rem;font-size:1.5rem;line-height:inherit;color:inherit;white-space:normal}progress{vertical-align:baseline}[type=\"number\"]::-webkit-inner-spin-button,[type=\"number\"]::-webkit-outer-spin-button{height:auto}[type=\"search\"]{outline-offset:-2px;-webkit-appearance:none}[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{font:inherit;-webkit-appearance:button}output{display:inline-block}summary{display:list-item;cursor:pointer}template{display:none}[hidden]{display:none !important}h1,h2,h3,h4,h5,h6,.h1,.h2,.h3,.h4,.h5,.h6{margin-bottom:.5rem;font-weight:500;line-height:1.2}h1,.h1{font-size:2.5rem}h2,.h2{font-size:2rem}h3,.h3{font-size:1.75rem}h4,.h4{font-size:1.5rem}h5,.h5{font-size:1.25rem}h6,.h6{font-size:1rem}.lead{font-size:1.25rem;font-weight:300}.display-1{font-size:6rem;font-weight:300;line-height:1.2}.display-2{font-size:5.5rem;font-weight:300;line-height:1.2}.display-3{font-size:4.5rem;font-weight:300;line-height:1.2}.display-4{font-size:3.5rem;font-weight:300;line-height:1.2}hr{margin-top:1rem;margin-bottom:1rem;border:0;border-top:1px solid rgba(0,0,0,0.1)}small,.small{font-size:80%;font-weight:400}mark,.mark{padding:.2em;background-color:#fcf8e3}.list-unstyled{padding-left:0;list-style:none}.list-inline{padding-left:0;list-style:none}.list-inline-item{display:inline-block}.list-inline-item:not(:last-child){margin-right:.5rem}.initialism{font-size:90%;text-transform:uppercase}.blockquote{margin-bottom:1rem;font-size:1.25rem}.blockquote-footer{display:block;font-size:80%;color:#6c757d}.blockquote-footer::before{content:\"\\2014\\00A0\"}.img-fluid{max-width:100%;height:auto}.img-thumbnail{padding:.25rem;background-color:#fff;border:1px solid #dee2e6;border-radius:.25rem;max-width:100%;height:auto}.figure{display:inline-block}.figure-img{margin-bottom:.5rem;line-height:1}.figure-caption{font-size:90%;color:#6c757d}code{font-size:87.5%;color:#e83e8c;word-break:break-word}a>code{color:inherit}kbd{padding:.2rem .4rem;font-size:87.5%;color:#fff;background-color:#212529;border-radius:.2rem}kbd kbd{padding:0;font-size:100%;font-weight:700}pre{display:block;font-size:87.5%;color:#212529}pre code{font-size:inherit;color:inherit;word-break:normal}.pre-scrollable{max-height:340px;overflow-y:scroll}.container{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}@media (min-width: 420px){.container{max-width:400px}}@media (min-width: 576px){.container{max-width:540px}}@media (min-width: 768px){.container{max-width:720px}}@media (min-width: 992px){.container{max-width:960px}}@media (min-width: 1200px){.container{max-width:1140px}}@media (min-width: 1440px){.container{max-width:1400px}}.container-fluid{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}.row{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-right:-15px;margin-left:-15px}.no-gutters{margin-right:0;margin-left:0}.no-gutters>.col,.no-gutters>[class*=\"col-\"]{padding-right:0;padding-left:0}.col-1,.col-2,.col-3,.col-4,.col-5,.col-6,.col-7,.col-8,.col-9,.col-10,.col-11,.col-12,.col,.col-auto,.col-xs-1,.col-xs-2,.col-xs-3,.col-xs-4,.col-xs-5,.col-xs-6,.col-xs-7,.col-xs-8,.col-xs-9,.col-xs-10,.col-xs-11,.col-xs-12,.col-xs,.col-xs-auto,.col-sm-1,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-sm-10,.col-sm-11,.col-sm-12,.col-sm,.col-sm-auto,.col-md-1,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-md-10,.col-md-11,.col-md-12,.col-md,.col-md-auto,.col-lg-1,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-lg-10,.col-lg-11,.col-lg-12,.col-lg,.col-lg-auto,.col-xl-1,.col-xl-2,.col-xl-3,.col-xl-4,.col-xl-5,.col-xl-6,.col-xl-7,.col-xl-8,.col-xl-9,.col-xl-10,.col-xl-11,.col-xl-12,.col-xl,.col-xl-auto,.col-xxl-1,.col-xxl-2,.col-xxl-3,.col-xxl-4,.col-xxl-5,.col-xxl-6,.col-xxl-7,.col-xxl-8,.col-xxl-9,.col-xxl-10,.col-xxl-11,.col-xxl-12,.col-xxl,.col-xxl-auto{position:relative;width:100%;padding-right:15px;padding-left:15px}.col{-ms-flex-preferred-size:0;flex-basis:0;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;max-width:100%}.col-auto{-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;width:auto;max-width:100%}.col-1{-webkit-box-flex:0;-ms-flex:0 0 8.33333%;flex:0 0 8.33333%;max-width:8.33333%}.col-2{-webkit-box-flex:0;-ms-flex:0 0 16.66667%;flex:0 0 16.66667%;max-width:16.66667%}.col-3{-webkit-box-flex:0;-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.col-4{-webkit-box-flex:0;-ms-flex:0 0 33.33333%;flex:0 0 33.33333%;max-width:33.33333%}.col-5{-webkit-box-flex:0;-ms-flex:0 0 41.66667%;flex:0 0 41.66667%;max-width:41.66667%}.col-6{-webkit-box-flex:0;-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.col-7{-webkit-box-flex:0;-ms-flex:0 0 58.33333%;flex:0 0 58.33333%;max-width:58.33333%}.col-8{-webkit-box-flex:0;-ms-flex:0 0 66.66667%;flex:0 0 66.66667%;max-width:66.66667%}.col-9{-webkit-box-flex:0;-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%}.col-10{-webkit-box-flex:0;-ms-flex:0 0 83.33333%;flex:0 0 83.33333%;max-width:83.33333%}.col-11{-webkit-box-flex:0;-ms-flex:0 0 91.66667%;flex:0 0 91.66667%;max-width:91.66667%}.col-12{-webkit-box-flex:0;-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.order-first{-webkit-box-ordinal-group:0;-ms-flex-order:-1;order:-1}.order-last{-webkit-box-ordinal-group:14;-ms-flex-order:13;order:13}.order-0{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0}.order-1{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}.order-2{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2}.order-3{-webkit-box-ordinal-group:4;-ms-flex-order:3;order:3}.order-4{-webkit-box-ordinal-group:5;-ms-flex-order:4;order:4}.order-5{-webkit-box-ordinal-group:6;-ms-flex-order:5;order:5}.order-6{-webkit-box-ordinal-group:7;-ms-flex-order:6;order:6}.order-7{-webkit-box-ordinal-group:8;-ms-flex-order:7;order:7}.order-8{-webkit-box-ordinal-group:9;-ms-flex-order:8;order:8}.order-9{-webkit-box-ordinal-group:10;-ms-flex-order:9;order:9}.order-10{-webkit-box-ordinal-group:11;-ms-flex-order:10;order:10}.order-11{-webkit-box-ordinal-group:12;-ms-flex-order:11;order:11}.order-12{-webkit-box-ordinal-group:13;-ms-flex-order:12;order:12}.offset-1{margin-left:8.33333%}.offset-2{margin-left:16.66667%}.offset-3{margin-left:25%}.offset-4{margin-left:33.33333%}.offset-5{margin-left:41.66667%}.offset-6{margin-left:50%}.offset-7{margin-left:58.33333%}.offset-8{margin-left:66.66667%}.offset-9{margin-left:75%}.offset-10{margin-left:83.33333%}.offset-11{margin-left:91.66667%}@media (min-width: 420px){.col-xs{-ms-flex-preferred-size:0;flex-basis:0;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;max-width:100%}.col-xs-auto{-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;width:auto;max-width:100%}.col-xs-1{-webkit-box-flex:0;-ms-flex:0 0 8.33333%;flex:0 0 8.33333%;max-width:8.33333%}.col-xs-2{-webkit-box-flex:0;-ms-flex:0 0 16.66667%;flex:0 0 16.66667%;max-width:16.66667%}.col-xs-3{-webkit-box-flex:0;-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.col-xs-4{-webkit-box-flex:0;-ms-flex:0 0 33.33333%;flex:0 0 33.33333%;max-width:33.33333%}.col-xs-5{-webkit-box-flex:0;-ms-flex:0 0 41.66667%;flex:0 0 41.66667%;max-width:41.66667%}.col-xs-6{-webkit-box-flex:0;-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.col-xs-7{-webkit-box-flex:0;-ms-flex:0 0 58.33333%;flex:0 0 58.33333%;max-width:58.33333%}.col-xs-8{-webkit-box-flex:0;-ms-flex:0 0 66.66667%;flex:0 0 66.66667%;max-width:66.66667%}.col-xs-9{-webkit-box-flex:0;-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%}.col-xs-10{-webkit-box-flex:0;-ms-flex:0 0 83.33333%;flex:0 0 83.33333%;max-width:83.33333%}.col-xs-11{-webkit-box-flex:0;-ms-flex:0 0 91.66667%;flex:0 0 91.66667%;max-width:91.66667%}.col-xs-12{-webkit-box-flex:0;-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.order-xs-first{-webkit-box-ordinal-group:0;-ms-flex-order:-1;order:-1}.order-xs-last{-webkit-box-ordinal-group:14;-ms-flex-order:13;order:13}.order-xs-0{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0}.order-xs-1{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}.order-xs-2{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2}.order-xs-3{-webkit-box-ordinal-group:4;-ms-flex-order:3;order:3}.order-xs-4{-webkit-box-ordinal-group:5;-ms-flex-order:4;order:4}.order-xs-5{-webkit-box-ordinal-group:6;-ms-flex-order:5;order:5}.order-xs-6{-webkit-box-ordinal-group:7;-ms-flex-order:6;order:6}.order-xs-7{-webkit-box-ordinal-group:8;-ms-flex-order:7;order:7}.order-xs-8{-webkit-box-ordinal-group:9;-ms-flex-order:8;order:8}.order-xs-9{-webkit-box-ordinal-group:10;-ms-flex-order:9;order:9}.order-xs-10{-webkit-box-ordinal-group:11;-ms-flex-order:10;order:10}.order-xs-11{-webkit-box-ordinal-group:12;-ms-flex-order:11;order:11}.order-xs-12{-webkit-box-ordinal-group:13;-ms-flex-order:12;order:12}.offset-xs-0{margin-left:0}.offset-xs-1{margin-left:8.33333%}.offset-xs-2{margin-left:16.66667%}.offset-xs-3{margin-left:25%}.offset-xs-4{margin-left:33.33333%}.offset-xs-5{margin-left:41.66667%}.offset-xs-6{margin-left:50%}.offset-xs-7{margin-left:58.33333%}.offset-xs-8{margin-left:66.66667%}.offset-xs-9{margin-left:75%}.offset-xs-10{margin-left:83.33333%}.offset-xs-11{margin-left:91.66667%}}@media (min-width: 576px){.col-sm{-ms-flex-preferred-size:0;flex-basis:0;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;max-width:100%}.col-sm-auto{-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;width:auto;max-width:100%}.col-sm-1{-webkit-box-flex:0;-ms-flex:0 0 8.33333%;flex:0 0 8.33333%;max-width:8.33333%}.col-sm-2{-webkit-box-flex:0;-ms-flex:0 0 16.66667%;flex:0 0 16.66667%;max-width:16.66667%}.col-sm-3{-webkit-box-flex:0;-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.col-sm-4{-webkit-box-flex:0;-ms-flex:0 0 33.33333%;flex:0 0 33.33333%;max-width:33.33333%}.col-sm-5{-webkit-box-flex:0;-ms-flex:0 0 41.66667%;flex:0 0 41.66667%;max-width:41.66667%}.col-sm-6{-webkit-box-flex:0;-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.col-sm-7{-webkit-box-flex:0;-ms-flex:0 0 58.33333%;flex:0 0 58.33333%;max-width:58.33333%}.col-sm-8{-webkit-box-flex:0;-ms-flex:0 0 66.66667%;flex:0 0 66.66667%;max-width:66.66667%}.col-sm-9{-webkit-box-flex:0;-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%}.col-sm-10{-webkit-box-flex:0;-ms-flex:0 0 83.33333%;flex:0 0 83.33333%;max-width:83.33333%}.col-sm-11{-webkit-box-flex:0;-ms-flex:0 0 91.66667%;flex:0 0 91.66667%;max-width:91.66667%}.col-sm-12{-webkit-box-flex:0;-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.order-sm-first{-webkit-box-ordinal-group:0;-ms-flex-order:-1;order:-1}.order-sm-last{-webkit-box-ordinal-group:14;-ms-flex-order:13;order:13}.order-sm-0{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0}.order-sm-1{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}.order-sm-2{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2}.order-sm-3{-webkit-box-ordinal-group:4;-ms-flex-order:3;order:3}.order-sm-4{-webkit-box-ordinal-group:5;-ms-flex-order:4;order:4}.order-sm-5{-webkit-box-ordinal-group:6;-ms-flex-order:5;order:5}.order-sm-6{-webkit-box-ordinal-group:7;-ms-flex-order:6;order:6}.order-sm-7{-webkit-box-ordinal-group:8;-ms-flex-order:7;order:7}.order-sm-8{-webkit-box-ordinal-group:9;-ms-flex-order:8;order:8}.order-sm-9{-webkit-box-ordinal-group:10;-ms-flex-order:9;order:9}.order-sm-10{-webkit-box-ordinal-group:11;-ms-flex-order:10;order:10}.order-sm-11{-webkit-box-ordinal-group:12;-ms-flex-order:11;order:11}.order-sm-12{-webkit-box-ordinal-group:13;-ms-flex-order:12;order:12}.offset-sm-0{margin-left:0}.offset-sm-1{margin-left:8.33333%}.offset-sm-2{margin-left:16.66667%}.offset-sm-3{margin-left:25%}.offset-sm-4{margin-left:33.33333%}.offset-sm-5{margin-left:41.66667%}.offset-sm-6{margin-left:50%}.offset-sm-7{margin-left:58.33333%}.offset-sm-8{margin-left:66.66667%}.offset-sm-9{margin-left:75%}.offset-sm-10{margin-left:83.33333%}.offset-sm-11{margin-left:91.66667%}}@media (min-width: 768px){.col-md{-ms-flex-preferred-size:0;flex-basis:0;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;max-width:100%}.col-md-auto{-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;width:auto;max-width:100%}.col-md-1{-webkit-box-flex:0;-ms-flex:0 0 8.33333%;flex:0 0 8.33333%;max-width:8.33333%}.col-md-2{-webkit-box-flex:0;-ms-flex:0 0 16.66667%;flex:0 0 16.66667%;max-width:16.66667%}.col-md-3{-webkit-box-flex:0;-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.col-md-4{-webkit-box-flex:0;-ms-flex:0 0 33.33333%;flex:0 0 33.33333%;max-width:33.33333%}.col-md-5{-webkit-box-flex:0;-ms-flex:0 0 41.66667%;flex:0 0 41.66667%;max-width:41.66667%}.col-md-6{-webkit-box-flex:0;-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.col-md-7{-webkit-box-flex:0;-ms-flex:0 0 58.33333%;flex:0 0 58.33333%;max-width:58.33333%}.col-md-8{-webkit-box-flex:0;-ms-flex:0 0 66.66667%;flex:0 0 66.66667%;max-width:66.66667%}.col-md-9{-webkit-box-flex:0;-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%}.col-md-10{-webkit-box-flex:0;-ms-flex:0 0 83.33333%;flex:0 0 83.33333%;max-width:83.33333%}.col-md-11{-webkit-box-flex:0;-ms-flex:0 0 91.66667%;flex:0 0 91.66667%;max-width:91.66667%}.col-md-12{-webkit-box-flex:0;-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.order-md-first{-webkit-box-ordinal-group:0;-ms-flex-order:-1;order:-1}.order-md-last{-webkit-box-ordinal-group:14;-ms-flex-order:13;order:13}.order-md-0{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0}.order-md-1{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}.order-md-2{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2}.order-md-3{-webkit-box-ordinal-group:4;-ms-flex-order:3;order:3}.order-md-4{-webkit-box-ordinal-group:5;-ms-flex-order:4;order:4}.order-md-5{-webkit-box-ordinal-group:6;-ms-flex-order:5;order:5}.order-md-6{-webkit-box-ordinal-group:7;-ms-flex-order:6;order:6}.order-md-7{-webkit-box-ordinal-group:8;-ms-flex-order:7;order:7}.order-md-8{-webkit-box-ordinal-group:9;-ms-flex-order:8;order:8}.order-md-9{-webkit-box-ordinal-group:10;-ms-flex-order:9;order:9}.order-md-10{-webkit-box-ordinal-group:11;-ms-flex-order:10;order:10}.order-md-11{-webkit-box-ordinal-group:12;-ms-flex-order:11;order:11}.order-md-12{-webkit-box-ordinal-group:13;-ms-flex-order:12;order:12}.offset-md-0{margin-left:0}.offset-md-1{margin-left:8.33333%}.offset-md-2{margin-left:16.66667%}.offset-md-3{margin-left:25%}.offset-md-4{margin-left:33.33333%}.offset-md-5{margin-left:41.66667%}.offset-md-6{margin-left:50%}.offset-md-7{margin-left:58.33333%}.offset-md-8{margin-left:66.66667%}.offset-md-9{margin-left:75%}.offset-md-10{margin-left:83.33333%}.offset-md-11{margin-left:91.66667%}}@media (min-width: 992px){.col-lg{-ms-flex-preferred-size:0;flex-basis:0;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;max-width:100%}.col-lg-auto{-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;width:auto;max-width:100%}.col-lg-1{-webkit-box-flex:0;-ms-flex:0 0 8.33333%;flex:0 0 8.33333%;max-width:8.33333%}.col-lg-2{-webkit-box-flex:0;-ms-flex:0 0 16.66667%;flex:0 0 16.66667%;max-width:16.66667%}.col-lg-3{-webkit-box-flex:0;-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.col-lg-4{-webkit-box-flex:0;-ms-flex:0 0 33.33333%;flex:0 0 33.33333%;max-width:33.33333%}.col-lg-5{-webkit-box-flex:0;-ms-flex:0 0 41.66667%;flex:0 0 41.66667%;max-width:41.66667%}.col-lg-6{-webkit-box-flex:0;-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.col-lg-7{-webkit-box-flex:0;-ms-flex:0 0 58.33333%;flex:0 0 58.33333%;max-width:58.33333%}.col-lg-8{-webkit-box-flex:0;-ms-flex:0 0 66.66667%;flex:0 0 66.66667%;max-width:66.66667%}.col-lg-9{-webkit-box-flex:0;-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%}.col-lg-10{-webkit-box-flex:0;-ms-flex:0 0 83.33333%;flex:0 0 83.33333%;max-width:83.33333%}.col-lg-11{-webkit-box-flex:0;-ms-flex:0 0 91.66667%;flex:0 0 91.66667%;max-width:91.66667%}.col-lg-12{-webkit-box-flex:0;-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.order-lg-first{-webkit-box-ordinal-group:0;-ms-flex-order:-1;order:-1}.order-lg-last{-webkit-box-ordinal-group:14;-ms-flex-order:13;order:13}.order-lg-0{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0}.order-lg-1{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}.order-lg-2{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2}.order-lg-3{-webkit-box-ordinal-group:4;-ms-flex-order:3;order:3}.order-lg-4{-webkit-box-ordinal-group:5;-ms-flex-order:4;order:4}.order-lg-5{-webkit-box-ordinal-group:6;-ms-flex-order:5;order:5}.order-lg-6{-webkit-box-ordinal-group:7;-ms-flex-order:6;order:6}.order-lg-7{-webkit-box-ordinal-group:8;-ms-flex-order:7;order:7}.order-lg-8{-webkit-box-ordinal-group:9;-ms-flex-order:8;order:8}.order-lg-9{-webkit-box-ordinal-group:10;-ms-flex-order:9;order:9}.order-lg-10{-webkit-box-ordinal-group:11;-ms-flex-order:10;order:10}.order-lg-11{-webkit-box-ordinal-group:12;-ms-flex-order:11;order:11}.order-lg-12{-webkit-box-ordinal-group:13;-ms-flex-order:12;order:12}.offset-lg-0{margin-left:0}.offset-lg-1{margin-left:8.33333%}.offset-lg-2{margin-left:16.66667%}.offset-lg-3{margin-left:25%}.offset-lg-4{margin-left:33.33333%}.offset-lg-5{margin-left:41.66667%}.offset-lg-6{margin-left:50%}.offset-lg-7{margin-left:58.33333%}.offset-lg-8{margin-left:66.66667%}.offset-lg-9{margin-left:75%}.offset-lg-10{margin-left:83.33333%}.offset-lg-11{margin-left:91.66667%}}@media (min-width: 1200px){.col-xl{-ms-flex-preferred-size:0;flex-basis:0;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;max-width:100%}.col-xl-auto{-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;width:auto;max-width:100%}.col-xl-1{-webkit-box-flex:0;-ms-flex:0 0 8.33333%;flex:0 0 8.33333%;max-width:8.33333%}.col-xl-2{-webkit-box-flex:0;-ms-flex:0 0 16.66667%;flex:0 0 16.66667%;max-width:16.66667%}.col-xl-3{-webkit-box-flex:0;-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.col-xl-4{-webkit-box-flex:0;-ms-flex:0 0 33.33333%;flex:0 0 33.33333%;max-width:33.33333%}.col-xl-5{-webkit-box-flex:0;-ms-flex:0 0 41.66667%;flex:0 0 41.66667%;max-width:41.66667%}.col-xl-6{-webkit-box-flex:0;-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.col-xl-7{-webkit-box-flex:0;-ms-flex:0 0 58.33333%;flex:0 0 58.33333%;max-width:58.33333%}.col-xl-8{-webkit-box-flex:0;-ms-flex:0 0 66.66667%;flex:0 0 66.66667%;max-width:66.66667%}.col-xl-9{-webkit-box-flex:0;-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%}.col-xl-10{-webkit-box-flex:0;-ms-flex:0 0 83.33333%;flex:0 0 83.33333%;max-width:83.33333%}.col-xl-11{-webkit-box-flex:0;-ms-flex:0 0 91.66667%;flex:0 0 91.66667%;max-width:91.66667%}.col-xl-12{-webkit-box-flex:0;-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.order-xl-first{-webkit-box-ordinal-group:0;-ms-flex-order:-1;order:-1}.order-xl-last{-webkit-box-ordinal-group:14;-ms-flex-order:13;order:13}.order-xl-0{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0}.order-xl-1{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}.order-xl-2{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2}.order-xl-3{-webkit-box-ordinal-group:4;-ms-flex-order:3;order:3}.order-xl-4{-webkit-box-ordinal-group:5;-ms-flex-order:4;order:4}.order-xl-5{-webkit-box-ordinal-group:6;-ms-flex-order:5;order:5}.order-xl-6{-webkit-box-ordinal-group:7;-ms-flex-order:6;order:6}.order-xl-7{-webkit-box-ordinal-group:8;-ms-flex-order:7;order:7}.order-xl-8{-webkit-box-ordinal-group:9;-ms-flex-order:8;order:8}.order-xl-9{-webkit-box-ordinal-group:10;-ms-flex-order:9;order:9}.order-xl-10{-webkit-box-ordinal-group:11;-ms-flex-order:10;order:10}.order-xl-11{-webkit-box-ordinal-group:12;-ms-flex-order:11;order:11}.order-xl-12{-webkit-box-ordinal-group:13;-ms-flex-order:12;order:12}.offset-xl-0{margin-left:0}.offset-xl-1{margin-left:8.33333%}.offset-xl-2{margin-left:16.66667%}.offset-xl-3{margin-left:25%}.offset-xl-4{margin-left:33.33333%}.offset-xl-5{margin-left:41.66667%}.offset-xl-6{margin-left:50%}.offset-xl-7{margin-left:58.33333%}.offset-xl-8{margin-left:66.66667%}.offset-xl-9{margin-left:75%}.offset-xl-10{margin-left:83.33333%}.offset-xl-11{margin-left:91.66667%}}@media (min-width: 1440px){.col-xxl{-ms-flex-preferred-size:0;flex-basis:0;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;max-width:100%}.col-xxl-auto{-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;width:auto;max-width:100%}.col-xxl-1{-webkit-box-flex:0;-ms-flex:0 0 8.33333%;flex:0 0 8.33333%;max-width:8.33333%}.col-xxl-2{-webkit-box-flex:0;-ms-flex:0 0 16.66667%;flex:0 0 16.66667%;max-width:16.66667%}.col-xxl-3{-webkit-box-flex:0;-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.col-xxl-4{-webkit-box-flex:0;-ms-flex:0 0 33.33333%;flex:0 0 33.33333%;max-width:33.33333%}.col-xxl-5{-webkit-box-flex:0;-ms-flex:0 0 41.66667%;flex:0 0 41.66667%;max-width:41.66667%}.col-xxl-6{-webkit-box-flex:0;-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.col-xxl-7{-webkit-box-flex:0;-ms-flex:0 0 58.33333%;flex:0 0 58.33333%;max-width:58.33333%}.col-xxl-8{-webkit-box-flex:0;-ms-flex:0 0 66.66667%;flex:0 0 66.66667%;max-width:66.66667%}.col-xxl-9{-webkit-box-flex:0;-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%}.col-xxl-10{-webkit-box-flex:0;-ms-flex:0 0 83.33333%;flex:0 0 83.33333%;max-width:83.33333%}.col-xxl-11{-webkit-box-flex:0;-ms-flex:0 0 91.66667%;flex:0 0 91.66667%;max-width:91.66667%}.col-xxl-12{-webkit-box-flex:0;-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.order-xxl-first{-webkit-box-ordinal-group:0;-ms-flex-order:-1;order:-1}.order-xxl-last{-webkit-box-ordinal-group:14;-ms-flex-order:13;order:13}.order-xxl-0{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0}.order-xxl-1{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}.order-xxl-2{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2}.order-xxl-3{-webkit-box-ordinal-group:4;-ms-flex-order:3;order:3}.order-xxl-4{-webkit-box-ordinal-group:5;-ms-flex-order:4;order:4}.order-xxl-5{-webkit-box-ordinal-group:6;-ms-flex-order:5;order:5}.order-xxl-6{-webkit-box-ordinal-group:7;-ms-flex-order:6;order:6}.order-xxl-7{-webkit-box-ordinal-group:8;-ms-flex-order:7;order:7}.order-xxl-8{-webkit-box-ordinal-group:9;-ms-flex-order:8;order:8}.order-xxl-9{-webkit-box-ordinal-group:10;-ms-flex-order:9;order:9}.order-xxl-10{-webkit-box-ordinal-group:11;-ms-flex-order:10;order:10}.order-xxl-11{-webkit-box-ordinal-group:12;-ms-flex-order:11;order:11}.order-xxl-12{-webkit-box-ordinal-group:13;-ms-flex-order:12;order:12}.offset-xxl-0{margin-left:0}.offset-xxl-1{margin-left:8.33333%}.offset-xxl-2{margin-left:16.66667%}.offset-xxl-3{margin-left:25%}.offset-xxl-4{margin-left:33.33333%}.offset-xxl-5{margin-left:41.66667%}.offset-xxl-6{margin-left:50%}.offset-xxl-7{margin-left:58.33333%}.offset-xxl-8{margin-left:66.66667%}.offset-xxl-9{margin-left:75%}.offset-xxl-10{margin-left:83.33333%}.offset-xxl-11{margin-left:91.66667%}}.table{width:100%;margin-bottom:1rem;color:#212529}.table th,.table td{padding:.75rem;vertical-align:top;border-top:1px solid #dee2e6}.table thead th{vertical-align:bottom;border-bottom:2px solid #dee2e6}.table tbody+tbody{border-top:2px solid #dee2e6}.table-sm th,.table-sm td{padding:.3rem}.table-bordered{border:1px solid #dee2e6}.table-bordered th,.table-bordered td{border:1px solid #dee2e6}.table-bordered thead th,.table-bordered thead td{border-bottom-width:2px}.table-borderless th,.table-borderless td,.table-borderless thead th,.table-borderless tbody+tbody{border:0}.table-striped tbody tr:nth-of-type(odd){background-color:rgba(0,0,0,0.05)}.table-hover tbody tr:hover{color:#212529;background-color:rgba(0,0,0,0.075)}.table-primary,.table-primary>th,.table-primary>td{background-color:#b8daff}.table-primary th,.table-primary td,.table-primary thead th,.table-primary tbody+tbody{border-color:#7abaff}.table-hover .table-primary:hover{background-color:#9fcdff}.table-hover .table-primary:hover>td,.table-hover .table-primary:hover>th{background-color:#9fcdff}.table-secondary,.table-secondary>th,.table-secondary>td{background-color:#d6d8db}.table-secondary th,.table-secondary td,.table-secondary thead th,.table-secondary tbody+tbody{border-color:#b3b7bb}.table-hover .table-secondary:hover{background-color:#c8cbcf}.table-hover .table-secondary:hover>td,.table-hover .table-secondary:hover>th{background-color:#c8cbcf}.table-success,.table-success>th,.table-success>td{background-color:#c3e6cb}.table-success th,.table-success td,.table-success thead th,.table-success tbody+tbody{border-color:#8fd19e}.table-hover .table-success:hover{background-color:#b1dfbb}.table-hover .table-success:hover>td,.table-hover .table-success:hover>th{background-color:#b1dfbb}.table-info,.table-info>th,.table-info>td{background-color:#bee5eb}.table-info th,.table-info td,.table-info thead th,.table-info tbody+tbody{border-color:#86cfda}.table-hover .table-info:hover{background-color:#abdde5}.table-hover .table-info:hover>td,.table-hover .table-info:hover>th{background-color:#abdde5}.table-warning,.table-warning>th,.table-warning>td{background-color:#ffeeba}.table-warning th,.table-warning td,.table-warning thead th,.table-warning tbody+tbody{border-color:#ffdf7e}.table-hover .table-warning:hover{background-color:#ffe8a1}.table-hover .table-warning:hover>td,.table-hover .table-warning:hover>th{background-color:#ffe8a1}.table-danger,.table-danger>th,.table-danger>td{background-color:#f5c6cb}.table-danger th,.table-danger td,.table-danger thead th,.table-danger tbody+tbody{border-color:#ed969e}.table-hover .table-danger:hover{background-color:#f1b0b7}.table-hover .table-danger:hover>td,.table-hover .table-danger:hover>th{background-color:#f1b0b7}.table-light,.table-light>th,.table-light>td{background-color:#fdfdfe}.table-light th,.table-light td,.table-light thead th,.table-light tbody+tbody{border-color:#fbfcfc}.table-hover .table-light:hover{background-color:#ececf6}.table-hover .table-light:hover>td,.table-hover .table-light:hover>th{background-color:#ececf6}.table-dark,.table-dark>th,.table-dark>td{background-color:#c6c8ca}.table-dark th,.table-dark td,.table-dark thead th,.table-dark tbody+tbody{border-color:#95999c}.table-hover .table-dark:hover{background-color:#b9bbbe}.table-hover .table-dark:hover>td,.table-hover .table-dark:hover>th{background-color:#b9bbbe}.table-active,.table-active>th,.table-active>td{background-color:rgba(0,0,0,0.075)}.table-hover .table-active:hover{background-color:rgba(0,0,0,0.075)}.table-hover .table-active:hover>td,.table-hover .table-active:hover>th{background-color:rgba(0,0,0,0.075)}.table .thead-dark th{color:#fff;background-color:#343a40;border-color:#454d55}.table .thead-light th{color:#495057;background-color:#e9ecef;border-color:#dee2e6}.table-dark{color:#fff;background-color:#343a40}.table-dark th,.table-dark td,.table-dark thead th{border-color:#454d55}.table-dark.table-bordered{border:0}.table-dark.table-striped tbody tr:nth-of-type(odd){background-color:rgba(255,255,255,0.05)}.table-dark.table-hover tbody tr:hover{color:#fff;background-color:rgba(255,255,255,0.075)}@media (max-width: 419.98px){.table-responsive-xs{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive-xs>.table-bordered{border:0}}@media (max-width: 575.98px){.table-responsive-sm{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive-sm>.table-bordered{border:0}}@media (max-width: 767.98px){.table-responsive-md{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive-md>.table-bordered{border:0}}@media (max-width: 991.98px){.table-responsive-lg{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive-lg>.table-bordered{border:0}}@media (max-width: 1199.98px){.table-responsive-xl{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive-xl>.table-bordered{border:0}}@media (max-width: 1439.98px){.table-responsive-xxl{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive-xxl>.table-bordered{border:0}}.table-responsive{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive>.table-bordered{border:0}.form-control{display:block;width:100%;height:calc(1.5em + .75rem + 2px);padding:.375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:#495057;background-color:#fff;background-clip:padding-box;border:1px solid #ced4da;border-radius:.25rem;-webkit-transition:border-color 0.15s ease-in-out,-webkit-box-shadow 0.15s ease-in-out;transition:border-color 0.15s ease-in-out,-webkit-box-shadow 0.15s ease-in-out;transition:border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out;transition:border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out,-webkit-box-shadow 0.15s ease-in-out}@media (prefers-reduced-motion: reduce){.form-control{-webkit-transition:none;transition:none}}.form-control::-ms-expand{background-color:transparent;border:0}.form-control:focus{color:#495057;background-color:#fff;border-color:#80bdff;outline:0;-webkit-box-shadow:0 0 0 .2rem rgba(0,123,255,0.25);box-shadow:0 0 0 .2rem rgba(0,123,255,0.25)}.form-control::-webkit-input-placeholder{color:#6c757d;opacity:1}.form-control:-ms-input-placeholder{color:#6c757d;opacity:1}.form-control::-ms-input-placeholder{color:#6c757d;opacity:1}.form-control::-moz-placeholder{color:#6c757d;opacity:1}.form-control::placeholder{color:#6c757d;opacity:1}.form-control:disabled,.form-control[readonly]{background-color:#e9ecef;opacity:1}select.form-control:focus::-ms-value{color:#495057;background-color:#fff}.form-control-file,.form-control-range{display:block;width:100%}.col-form-label{padding-top:calc(.375rem + 1px);padding-bottom:calc(.375rem + 1px);margin-bottom:0;font-size:inherit;line-height:1.5}.col-form-label-lg{padding-top:calc(.5rem + 1px);padding-bottom:calc(.5rem + 1px);font-size:1.25rem;line-height:1.5}.col-form-label-sm{padding-top:calc(.25rem + 1px);padding-bottom:calc(.25rem + 1px);font-size:.875rem;line-height:1.5}.form-control-plaintext{display:block;width:100%;padding-top:.375rem;padding-bottom:.375rem;margin-bottom:0;line-height:1.5;color:#212529;background-color:transparent;border:solid transparent;border-width:1px 0}.form-control-plaintext.form-control-sm,.form-control-plaintext.form-control-lg{padding-right:0;padding-left:0}.form-control-sm{height:calc(1.5em + .5rem + 2px);padding:.25rem .5rem;font-size:.875rem;line-height:1.5;border-radius:.2rem}.form-control-lg{height:calc(1.5em + 1rem + 2px);padding:.5rem 1rem;font-size:1.25rem;line-height:1.5;border-radius:.3rem}select.form-control[size],select.form-control[multiple]{height:auto}textarea.form-control{height:auto}.form-group{margin-bottom:1rem}.form-text{display:block;margin-top:.25rem}.form-row{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-right:-5px;margin-left:-5px}.form-row>.col,.form-row>[class*=\"col-\"]{padding-right:5px;padding-left:5px}.form-check{position:relative;display:block;padding-left:1.25rem}.form-check-input{position:absolute;margin-top:.3rem;margin-left:-1.25rem}.form-check-input:disabled ~ .form-check-label{color:#6c757d}.form-check-label{margin-bottom:0}.form-check-inline{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-left:0;margin-right:.75rem}.form-check-inline .form-check-input{position:static;margin-top:0;margin-right:.3125rem;margin-left:0}.valid-feedback{display:none;width:100%;margin-top:.25rem;font-size:80%;color:#28a745}.valid-tooltip{position:absolute;top:100%;z-index:5;display:none;max-width:100%;padding:.25rem .5rem;margin-top:.1rem;font-size:.875rem;line-height:1.5;color:#fff;background-color:rgba(40,167,69,0.9);border-radius:.25rem}.was-validated .form-control:valid,.form-control.is-valid{border-color:#28a745;padding-right:calc(1.5em + .75rem);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%2328a745' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e\");background-repeat:no-repeat;background-position:center right calc(.375em + .1875rem);background-size:calc(.75em + .375rem) calc(.75em + .375rem)}.was-validated .form-control:valid:focus,.form-control.is-valid:focus{border-color:#28a745;-webkit-box-shadow:0 0 0 .2rem rgba(40,167,69,0.25);box-shadow:0 0 0 .2rem rgba(40,167,69,0.25)}.was-validated .form-control:valid ~ .valid-feedback,.was-validated .form-control:valid ~ .valid-tooltip,.form-control.is-valid ~ .valid-feedback,.form-control.is-valid ~ .valid-tooltip{display:block}.was-validated textarea.form-control:valid,textarea.form-control.is-valid{padding-right:calc(1.5em + .75rem);background-position:top calc(.375em + .1875rem) right calc(.375em + .1875rem)}.was-validated .custom-select:valid,.custom-select.is-valid{border-color:#28a745;padding-right:calc((1em + .75rem) * 3 / 4 + 1.75rem);background:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e\") no-repeat right .75rem center/8px 10px,url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%2328a745' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e\") #fff no-repeat center right 1.75rem/calc(.75em + .375rem) calc(.75em + .375rem)}.was-validated .custom-select:valid:focus,.custom-select.is-valid:focus{border-color:#28a745;-webkit-box-shadow:0 0 0 .2rem rgba(40,167,69,0.25);box-shadow:0 0 0 .2rem rgba(40,167,69,0.25)}.was-validated .custom-select:valid ~ .valid-feedback,.was-validated .custom-select:valid ~ .valid-tooltip,.custom-select.is-valid ~ .valid-feedback,.custom-select.is-valid ~ .valid-tooltip{display:block}.was-validated .form-control-file:valid ~ .valid-feedback,.was-validated .form-control-file:valid ~ .valid-tooltip,.form-control-file.is-valid ~ .valid-feedback,.form-control-file.is-valid ~ .valid-tooltip{display:block}.was-validated .form-check-input:valid ~ .form-check-label,.form-check-input.is-valid ~ .form-check-label{color:#28a745}.was-validated .form-check-input:valid ~ .valid-feedback,.was-validated .form-check-input:valid ~ .valid-tooltip,.form-check-input.is-valid ~ .valid-feedback,.form-check-input.is-valid ~ .valid-tooltip{display:block}.was-validated .custom-control-input:valid ~ .custom-control-label,.custom-control-input.is-valid ~ .custom-control-label{color:#28a745}.was-validated .custom-control-input:valid ~ .custom-control-label::before,.custom-control-input.is-valid ~ .custom-control-label::before{border-color:#28a745}.was-validated .custom-control-input:valid ~ .valid-feedback,.was-validated .custom-control-input:valid ~ .valid-tooltip,.custom-control-input.is-valid ~ .valid-feedback,.custom-control-input.is-valid ~ .valid-tooltip{display:block}.was-validated .custom-control-input:valid:checked ~ .custom-control-label::before,.custom-control-input.is-valid:checked ~ .custom-control-label::before{border-color:#34ce57;background-color:#34ce57}.was-validated .custom-control-input:valid:focus ~ .custom-control-label::before,.custom-control-input.is-valid:focus ~ .custom-control-label::before{-webkit-box-shadow:0 0 0 .2rem rgba(40,167,69,0.25);box-shadow:0 0 0 .2rem rgba(40,167,69,0.25)}.was-validated .custom-control-input:valid:focus:not(:checked) ~ .custom-control-label::before,.custom-control-input.is-valid:focus:not(:checked) ~ .custom-control-label::before{border-color:#28a745}.was-validated .custom-file-input:valid ~ .custom-file-label,.custom-file-input.is-valid ~ .custom-file-label{border-color:#28a745}.was-validated .custom-file-input:valid ~ .valid-feedback,.was-validated .custom-file-input:valid ~ .valid-tooltip,.custom-file-input.is-valid ~ .valid-feedback,.custom-file-input.is-valid ~ .valid-tooltip{display:block}.was-validated .custom-file-input:valid:focus ~ .custom-file-label,.custom-file-input.is-valid:focus ~ .custom-file-label{border-color:#28a745;-webkit-box-shadow:0 0 0 .2rem rgba(40,167,69,0.25);box-shadow:0 0 0 .2rem rgba(40,167,69,0.25)}.invalid-feedback{display:none;width:100%;margin-top:.25rem;font-size:80%;color:#dc3545}.invalid-tooltip{position:absolute;top:100%;z-index:5;display:none;max-width:100%;padding:.25rem .5rem;margin-top:.1rem;font-size:.875rem;line-height:1.5;color:#fff;background-color:rgba(220,53,69,0.9);border-radius:.25rem}.was-validated .form-control:invalid,.form-control.is-invalid{border-color:#dc3545;padding-right:calc(1.5em + .75rem);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23dc3545' viewBox='-2 -2 7 7'%3e%3cpath stroke='%23dc3545' d='M0 0l3 3m0-3L0 3'/%3e%3ccircle r='.5'/%3e%3ccircle cx='3' r='.5'/%3e%3ccircle cy='3' r='.5'/%3e%3ccircle cx='3' cy='3' r='.5'/%3e%3c/svg%3E\");background-repeat:no-repeat;background-position:center right calc(.375em + .1875rem);background-size:calc(.75em + .375rem) calc(.75em + .375rem)}.was-validated .form-control:invalid:focus,.form-control.is-invalid:focus{border-color:#dc3545;-webkit-box-shadow:0 0 0 .2rem rgba(220,53,69,0.25);box-shadow:0 0 0 .2rem rgba(220,53,69,0.25)}.was-validated .form-control:invalid ~ .invalid-feedback,.was-validated .form-control:invalid ~ .invalid-tooltip,.form-control.is-invalid ~ .invalid-feedback,.form-control.is-invalid ~ .invalid-tooltip{display:block}.was-validated textarea.form-control:invalid,textarea.form-control.is-invalid{padding-right:calc(1.5em + .75rem);background-position:top calc(.375em + .1875rem) right calc(.375em + .1875rem)}.was-validated .custom-select:invalid,.custom-select.is-invalid{border-color:#dc3545;padding-right:calc((1em + .75rem) * 3 / 4 + 1.75rem);background:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e\") no-repeat right .75rem center/8px 10px,url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23dc3545' viewBox='-2 -2 7 7'%3e%3cpath stroke='%23dc3545' d='M0 0l3 3m0-3L0 3'/%3e%3ccircle r='.5'/%3e%3ccircle cx='3' r='.5'/%3e%3ccircle cy='3' r='.5'/%3e%3ccircle cx='3' cy='3' r='.5'/%3e%3c/svg%3E\") #fff no-repeat center right 1.75rem/calc(.75em + .375rem) calc(.75em + .375rem)}.was-validated .custom-select:invalid:focus,.custom-select.is-invalid:focus{border-color:#dc3545;-webkit-box-shadow:0 0 0 .2rem rgba(220,53,69,0.25);box-shadow:0 0 0 .2rem rgba(220,53,69,0.25)}.was-validated .custom-select:invalid ~ .invalid-feedback,.was-validated .custom-select:invalid ~ .invalid-tooltip,.custom-select.is-invalid ~ .invalid-feedback,.custom-select.is-invalid ~ .invalid-tooltip{display:block}.was-validated .form-control-file:invalid ~ .invalid-feedback,.was-validated .form-control-file:invalid ~ .invalid-tooltip,.form-control-file.is-invalid ~ .invalid-feedback,.form-control-file.is-invalid ~ .invalid-tooltip{display:block}.was-validated .form-check-input:invalid ~ .form-check-label,.form-check-input.is-invalid ~ .form-check-label{color:#dc3545}.was-validated .form-check-input:invalid ~ .invalid-feedback,.was-validated .form-check-input:invalid ~ .invalid-tooltip,.form-check-input.is-invalid ~ .invalid-feedback,.form-check-input.is-invalid ~ .invalid-tooltip{display:block}.was-validated .custom-control-input:invalid ~ .custom-control-label,.custom-control-input.is-invalid ~ .custom-control-label{color:#dc3545}.was-validated .custom-control-input:invalid ~ .custom-control-label::before,.custom-control-input.is-invalid ~ .custom-control-label::before{border-color:#dc3545}.was-validated .custom-control-input:invalid ~ .invalid-feedback,.was-validated .custom-control-input:invalid ~ .invalid-tooltip,.custom-control-input.is-invalid ~ .invalid-feedback,.custom-control-input.is-invalid ~ .invalid-tooltip{display:block}.was-validated .custom-control-input:invalid:checked ~ .custom-control-label::before,.custom-control-input.is-invalid:checked ~ .custom-control-label::before{border-color:#e4606d;background-color:#e4606d}.was-validated .custom-control-input:invalid:focus ~ .custom-control-label::before,.custom-control-input.is-invalid:focus ~ .custom-control-label::before{-webkit-box-shadow:0 0 0 .2rem rgba(220,53,69,0.25);box-shadow:0 0 0 .2rem rgba(220,53,69,0.25)}.was-validated .custom-control-input:invalid:focus:not(:checked) ~ .custom-control-label::before,.custom-control-input.is-invalid:focus:not(:checked) ~ .custom-control-label::before{border-color:#dc3545}.was-validated .custom-file-input:invalid ~ .custom-file-label,.custom-file-input.is-invalid ~ .custom-file-label{border-color:#dc3545}.was-validated .custom-file-input:invalid ~ .invalid-feedback,.was-validated .custom-file-input:invalid ~ .invalid-tooltip,.custom-file-input.is-invalid ~ .invalid-feedback,.custom-file-input.is-invalid ~ .invalid-tooltip{display:block}.was-validated .custom-file-input:invalid:focus ~ .custom-file-label,.custom-file-input.is-invalid:focus ~ .custom-file-label{border-color:#dc3545;-webkit-box-shadow:0 0 0 .2rem rgba(220,53,69,0.25);box-shadow:0 0 0 .2rem rgba(220,53,69,0.25)}.form-inline{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row wrap;flex-flow:row wrap;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.form-inline .form-check{width:100%}@media (min-width: 576px){.form-inline label{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-bottom:0}.form-inline .form-group{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row wrap;flex-flow:row wrap;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:0}.form-inline .form-control{display:inline-block;width:auto;vertical-align:middle}.form-inline .form-control-plaintext{display:inline-block}.form-inline .input-group,.form-inline .custom-select{width:auto}.form-inline .form-check{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:auto;padding-left:0}.form-inline .form-check-input{position:relative;-ms-flex-negative:0;flex-shrink:0;margin-top:0;margin-right:.25rem;margin-left:0}.form-inline .custom-control{-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.form-inline .custom-control-label{margin-bottom:0}}.btn{display:inline-block;font-weight:400;color:#212529;text-align:center;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:transparent;border:1px solid transparent;padding:.375rem .75rem;font-size:1rem;line-height:1.5;border-radius:.25rem;-webkit-transition:color 0.15s ease-in-out,background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,-webkit-box-shadow 0.15s ease-in-out;transition:color 0.15s ease-in-out,background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,-webkit-box-shadow 0.15s ease-in-out;transition:color 0.15s ease-in-out,background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out;transition:color 0.15s ease-in-out,background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out,-webkit-box-shadow 0.15s ease-in-out}@media (prefers-reduced-motion: reduce){.btn{-webkit-transition:none;transition:none}}.btn:hover{color:#212529;text-decoration:none}.btn:focus,.btn.focus{outline:0;-webkit-box-shadow:0 0 0 .2rem rgba(0,123,255,0.25);box-shadow:0 0 0 .2rem rgba(0,123,255,0.25)}.btn.disabled,.btn:disabled{opacity:.65}a.btn.disabled,fieldset:disabled a.btn{pointer-events:none}.btn-primary{color:#fff;background-color:#007bff;border-color:#007bff}.btn-primary:hover{color:#fff;background-color:#0069d9;border-color:#0062cc}.btn-primary:focus,.btn-primary.focus{-webkit-box-shadow:0 0 0 .2rem rgba(38,143,255,0.5);box-shadow:0 0 0 .2rem rgba(38,143,255,0.5)}.btn-primary.disabled,.btn-primary:disabled{color:#fff;background-color:#007bff;border-color:#007bff}.btn-primary:not(:disabled):not(.disabled):active,.btn-primary:not(:disabled):not(.disabled).active,.show>.btn-primary.dropdown-toggle{color:#fff;background-color:#0062cc;border-color:#005cbf}.btn-primary:not(:disabled):not(.disabled):active:focus,.btn-primary:not(:disabled):not(.disabled).active:focus,.show>.btn-primary.dropdown-toggle:focus{-webkit-box-shadow:0 0 0 .2rem rgba(38,143,255,0.5);box-shadow:0 0 0 .2rem rgba(38,143,255,0.5)}.btn-secondary{color:#fff;background-color:#6c757d;border-color:#6c757d}.btn-secondary:hover{color:#fff;background-color:#5a6268;border-color:#545b62}.btn-secondary:focus,.btn-secondary.focus{-webkit-box-shadow:0 0 0 .2rem rgba(130,138,145,0.5);box-shadow:0 0 0 .2rem rgba(130,138,145,0.5)}.btn-secondary.disabled,.btn-secondary:disabled{color:#fff;background-color:#6c757d;border-color:#6c757d}.btn-secondary:not(:disabled):not(.disabled):active,.btn-secondary:not(:disabled):not(.disabled).active,.show>.btn-secondary.dropdown-toggle{color:#fff;background-color:#545b62;border-color:#4e555b}.btn-secondary:not(:disabled):not(.disabled):active:focus,.btn-secondary:not(:disabled):not(.disabled).active:focus,.show>.btn-secondary.dropdown-toggle:focus{-webkit-box-shadow:0 0 0 .2rem rgba(130,138,145,0.5);box-shadow:0 0 0 .2rem rgba(130,138,145,0.5)}.btn-success{color:#fff;background-color:#28a745;border-color:#28a745}.btn-success:hover{color:#fff;background-color:#218838;border-color:#1e7e34}.btn-success:focus,.btn-success.focus{-webkit-box-shadow:0 0 0 .2rem rgba(72,180,97,0.5);box-shadow:0 0 0 .2rem rgba(72,180,97,0.5)}.btn-success.disabled,.btn-success:disabled{color:#fff;background-color:#28a745;border-color:#28a745}.btn-success:not(:disabled):not(.disabled):active,.btn-success:not(:disabled):not(.disabled).active,.show>.btn-success.dropdown-toggle{color:#fff;background-color:#1e7e34;border-color:#1c7430}.btn-success:not(:disabled):not(.disabled):active:focus,.btn-success:not(:disabled):not(.disabled).active:focus,.show>.btn-success.dropdown-toggle:focus{-webkit-box-shadow:0 0 0 .2rem rgba(72,180,97,0.5);box-shadow:0 0 0 .2rem rgba(72,180,97,0.5)}.btn-info{color:#fff;background-color:#17a2b8;border-color:#17a2b8}.btn-info:hover{color:#fff;background-color:#138496;border-color:#117a8b}.btn-info:focus,.btn-info.focus{-webkit-box-shadow:0 0 0 .2rem rgba(58,176,195,0.5);box-shadow:0 0 0 .2rem rgba(58,176,195,0.5)}.btn-info.disabled,.btn-info:disabled{color:#fff;background-color:#17a2b8;border-color:#17a2b8}.btn-info:not(:disabled):not(.disabled):active,.btn-info:not(:disabled):not(.disabled).active,.show>.btn-info.dropdown-toggle{color:#fff;background-color:#117a8b;border-color:#10707f}.btn-info:not(:disabled):not(.disabled):active:focus,.btn-info:not(:disabled):not(.disabled).active:focus,.show>.btn-info.dropdown-toggle:focus{-webkit-box-shadow:0 0 0 .2rem rgba(58,176,195,0.5);box-shadow:0 0 0 .2rem rgba(58,176,195,0.5)}.btn-warning{color:#212529;background-color:#ffc107;border-color:#ffc107}.btn-warning:hover{color:#212529;background-color:#e0a800;border-color:#d39e00}.btn-warning:focus,.btn-warning.focus{-webkit-box-shadow:0 0 0 .2rem rgba(222,170,12,0.5);box-shadow:0 0 0 .2rem rgba(222,170,12,0.5)}.btn-warning.disabled,.btn-warning:disabled{color:#212529;background-color:#ffc107;border-color:#ffc107}.btn-warning:not(:disabled):not(.disabled):active,.btn-warning:not(:disabled):not(.disabled).active,.show>.btn-warning.dropdown-toggle{color:#212529;background-color:#d39e00;border-color:#c69500}.btn-warning:not(:disabled):not(.disabled):active:focus,.btn-warning:not(:disabled):not(.disabled).active:focus,.show>.btn-warning.dropdown-toggle:focus{-webkit-box-shadow:0 0 0 .2rem rgba(222,170,12,0.5);box-shadow:0 0 0 .2rem rgba(222,170,12,0.5)}.btn-danger{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-danger:hover{color:#fff;background-color:#c82333;border-color:#bd2130}.btn-danger:focus,.btn-danger.focus{-webkit-box-shadow:0 0 0 .2rem rgba(225,83,97,0.5);box-shadow:0 0 0 .2rem rgba(225,83,97,0.5)}.btn-danger.disabled,.btn-danger:disabled{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-danger:not(:disabled):not(.disabled):active,.btn-danger:not(:disabled):not(.disabled).active,.show>.btn-danger.dropdown-toggle{color:#fff;background-color:#bd2130;border-color:#b21f2d}.btn-danger:not(:disabled):not(.disabled):active:focus,.btn-danger:not(:disabled):not(.disabled).active:focus,.show>.btn-danger.dropdown-toggle:focus{-webkit-box-shadow:0 0 0 .2rem rgba(225,83,97,0.5);box-shadow:0 0 0 .2rem rgba(225,83,97,0.5)}.btn-light{color:#212529;background-color:#f8f9fa;border-color:#f8f9fa}.btn-light:hover{color:#212529;background-color:#e2e6ea;border-color:#dae0e5}.btn-light:focus,.btn-light.focus{-webkit-box-shadow:0 0 0 .2rem rgba(216,217,219,0.5);box-shadow:0 0 0 .2rem rgba(216,217,219,0.5)}.btn-light.disabled,.btn-light:disabled{color:#212529;background-color:#f8f9fa;border-color:#f8f9fa}.btn-light:not(:disabled):not(.disabled):active,.btn-light:not(:disabled):not(.disabled).active,.show>.btn-light.dropdown-toggle{color:#212529;background-color:#dae0e5;border-color:#d3d9df}.btn-light:not(:disabled):not(.disabled):active:focus,.btn-light:not(:disabled):not(.disabled).active:focus,.show>.btn-light.dropdown-toggle:focus{-webkit-box-shadow:0 0 0 .2rem rgba(216,217,219,0.5);box-shadow:0 0 0 .2rem rgba(216,217,219,0.5)}.btn-dark{color:#fff;background-color:#343a40;border-color:#343a40}.btn-dark:hover{color:#fff;background-color:#23272b;border-color:#1d2124}.btn-dark:focus,.btn-dark.focus{-webkit-box-shadow:0 0 0 .2rem rgba(82,88,93,0.5);box-shadow:0 0 0 .2rem rgba(82,88,93,0.5)}.btn-dark.disabled,.btn-dark:disabled{color:#fff;background-color:#343a40;border-color:#343a40}.btn-dark:not(:disabled):not(.disabled):active,.btn-dark:not(:disabled):not(.disabled).active,.show>.btn-dark.dropdown-toggle{color:#fff;background-color:#1d2124;border-color:#171a1d}.btn-dark:not(:disabled):not(.disabled):active:focus,.btn-dark:not(:disabled):not(.disabled).active:focus,.show>.btn-dark.dropdown-toggle:focus{-webkit-box-shadow:0 0 0 .2rem rgba(82,88,93,0.5);box-shadow:0 0 0 .2rem rgba(82,88,93,0.5)}.btn-outline-primary{color:#007bff;border-color:#007bff}.btn-outline-primary:hover{color:#fff;background-color:#007bff;border-color:#007bff}.btn-outline-primary:focus,.btn-outline-primary.focus{-webkit-box-shadow:0 0 0 .2rem rgba(0,123,255,0.5);box-shadow:0 0 0 .2rem rgba(0,123,255,0.5)}.btn-outline-primary.disabled,.btn-outline-primary:disabled{color:#007bff;background-color:transparent}.btn-outline-primary:not(:disabled):not(.disabled):active,.btn-outline-primary:not(:disabled):not(.disabled).active,.show>.btn-outline-primary.dropdown-toggle{color:#fff;background-color:#007bff;border-color:#007bff}.btn-outline-primary:not(:disabled):not(.disabled):active:focus,.btn-outline-primary:not(:disabled):not(.disabled).active:focus,.show>.btn-outline-primary.dropdown-toggle:focus{-webkit-box-shadow:0 0 0 .2rem rgba(0,123,255,0.5);box-shadow:0 0 0 .2rem rgba(0,123,255,0.5)}.btn-outline-secondary{color:#6c757d;border-color:#6c757d}.btn-outline-secondary:hover{color:#fff;background-color:#6c757d;border-color:#6c757d}.btn-outline-secondary:focus,.btn-outline-secondary.focus{-webkit-box-shadow:0 0 0 .2rem rgba(108,117,125,0.5);box-shadow:0 0 0 .2rem rgba(108,117,125,0.5)}.btn-outline-secondary.disabled,.btn-outline-secondary:disabled{color:#6c757d;background-color:transparent}.btn-outline-secondary:not(:disabled):not(.disabled):active,.btn-outline-secondary:not(:disabled):not(.disabled).active,.show>.btn-outline-secondary.dropdown-toggle{color:#fff;background-color:#6c757d;border-color:#6c757d}.btn-outline-secondary:not(:disabled):not(.disabled):active:focus,.btn-outline-secondary:not(:disabled):not(.disabled).active:focus,.show>.btn-outline-secondary.dropdown-toggle:focus{-webkit-box-shadow:0 0 0 .2rem rgba(108,117,125,0.5);box-shadow:0 0 0 .2rem rgba(108,117,125,0.5)}.btn-outline-success{color:#28a745;border-color:#28a745}.btn-outline-success:hover{color:#fff;background-color:#28a745;border-color:#28a745}.btn-outline-success:focus,.btn-outline-success.focus{-webkit-box-shadow:0 0 0 .2rem rgba(40,167,69,0.5);box-shadow:0 0 0 .2rem rgba(40,167,69,0.5)}.btn-outline-success.disabled,.btn-outline-success:disabled{color:#28a745;background-color:transparent}.btn-outline-success:not(:disabled):not(.disabled):active,.btn-outline-success:not(:disabled):not(.disabled).active,.show>.btn-outline-success.dropdown-toggle{color:#fff;background-color:#28a745;border-color:#28a745}.btn-outline-success:not(:disabled):not(.disabled):active:focus,.btn-outline-success:not(:disabled):not(.disabled).active:focus,.show>.btn-outline-success.dropdown-toggle:focus{-webkit-box-shadow:0 0 0 .2rem rgba(40,167,69,0.5);box-shadow:0 0 0 .2rem rgba(40,167,69,0.5)}.btn-outline-info{color:#17a2b8;border-color:#17a2b8}.btn-outline-info:hover{color:#fff;background-color:#17a2b8;border-color:#17a2b8}.btn-outline-info:focus,.btn-outline-info.focus{-webkit-box-shadow:0 0 0 .2rem rgba(23,162,184,0.5);box-shadow:0 0 0 .2rem rgba(23,162,184,0.5)}.btn-outline-info.disabled,.btn-outline-info:disabled{color:#17a2b8;background-color:transparent}.btn-outline-info:not(:disabled):not(.disabled):active,.btn-outline-info:not(:disabled):not(.disabled).active,.show>.btn-outline-info.dropdown-toggle{color:#fff;background-color:#17a2b8;border-color:#17a2b8}.btn-outline-info:not(:disabled):not(.disabled):active:focus,.btn-outline-info:not(:disabled):not(.disabled).active:focus,.show>.btn-outline-info.dropdown-toggle:focus{-webkit-box-shadow:0 0 0 .2rem rgba(23,162,184,0.5);box-shadow:0 0 0 .2rem rgba(23,162,184,0.5)}.btn-outline-warning{color:#ffc107;border-color:#ffc107}.btn-outline-warning:hover{color:#212529;background-color:#ffc107;border-color:#ffc107}.btn-outline-warning:focus,.btn-outline-warning.focus{-webkit-box-shadow:0 0 0 .2rem rgba(255,193,7,0.5);box-shadow:0 0 0 .2rem rgba(255,193,7,0.5)}.btn-outline-warning.disabled,.btn-outline-warning:disabled{color:#ffc107;background-color:transparent}.btn-outline-warning:not(:disabled):not(.disabled):active,.btn-outline-warning:not(:disabled):not(.disabled).active,.show>.btn-outline-warning.dropdown-toggle{color:#212529;background-color:#ffc107;border-color:#ffc107}.btn-outline-warning:not(:disabled):not(.disabled):active:focus,.btn-outline-warning:not(:disabled):not(.disabled).active:focus,.show>.btn-outline-warning.dropdown-toggle:focus{-webkit-box-shadow:0 0 0 .2rem rgba(255,193,7,0.5);box-shadow:0 0 0 .2rem rgba(255,193,7,0.5)}.btn-outline-danger{color:#dc3545;border-color:#dc3545}.btn-outline-danger:hover{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-outline-danger:focus,.btn-outline-danger.focus{-webkit-box-shadow:0 0 0 .2rem rgba(220,53,69,0.5);box-shadow:0 0 0 .2rem rgba(220,53,69,0.5)}.btn-outline-danger.disabled,.btn-outline-danger:disabled{color:#dc3545;background-color:transparent}.btn-outline-danger:not(:disabled):not(.disabled):active,.btn-outline-danger:not(:disabled):not(.disabled).active,.show>.btn-outline-danger.dropdown-toggle{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-outline-danger:not(:disabled):not(.disabled):active:focus,.btn-outline-danger:not(:disabled):not(.disabled).active:focus,.show>.btn-outline-danger.dropdown-toggle:focus{-webkit-box-shadow:0 0 0 .2rem rgba(220,53,69,0.5);box-shadow:0 0 0 .2rem rgba(220,53,69,0.5)}.btn-outline-light{color:#f8f9fa;border-color:#f8f9fa}.btn-outline-light:hover{color:#212529;background-color:#f8f9fa;border-color:#f8f9fa}.btn-outline-light:focus,.btn-outline-light.focus{-webkit-box-shadow:0 0 0 .2rem rgba(248,249,250,0.5);box-shadow:0 0 0 .2rem rgba(248,249,250,0.5)}.btn-outline-light.disabled,.btn-outline-light:disabled{color:#f8f9fa;background-color:transparent}.btn-outline-light:not(:disabled):not(.disabled):active,.btn-outline-light:not(:disabled):not(.disabled).active,.show>.btn-outline-light.dropdown-toggle{color:#212529;background-color:#f8f9fa;border-color:#f8f9fa}.btn-outline-light:not(:disabled):not(.disabled):active:focus,.btn-outline-light:not(:disabled):not(.disabled).active:focus,.show>.btn-outline-light.dropdown-toggle:focus{-webkit-box-shadow:0 0 0 .2rem rgba(248,249,250,0.5);box-shadow:0 0 0 .2rem rgba(248,249,250,0.5)}.btn-outline-dark{color:#343a40;border-color:#343a40}.btn-outline-dark:hover{color:#fff;background-color:#343a40;border-color:#343a40}.btn-outline-dark:focus,.btn-outline-dark.focus{-webkit-box-shadow:0 0 0 .2rem rgba(52,58,64,0.5);box-shadow:0 0 0 .2rem rgba(52,58,64,0.5)}.btn-outline-dark.disabled,.btn-outline-dark:disabled{color:#343a40;background-color:transparent}.btn-outline-dark:not(:disabled):not(.disabled):active,.btn-outline-dark:not(:disabled):not(.disabled).active,.show>.btn-outline-dark.dropdown-toggle{color:#fff;background-color:#343a40;border-color:#343a40}.btn-outline-dark:not(:disabled):not(.disabled):active:focus,.btn-outline-dark:not(:disabled):not(.disabled).active:focus,.show>.btn-outline-dark.dropdown-toggle:focus{-webkit-box-shadow:0 0 0 .2rem rgba(52,58,64,0.5);box-shadow:0 0 0 .2rem rgba(52,58,64,0.5)}.btn-link{font-weight:400;color:#007bff;text-decoration:none}.btn-link:hover{color:#0056b3;text-decoration:underline}.btn-link:focus,.btn-link.focus{text-decoration:underline;-webkit-box-shadow:none;box-shadow:none}.btn-link:disabled,.btn-link.disabled{color:#6c757d;pointer-events:none}.btn-lg,.btn-group-lg>.btn{padding:.5rem 1rem;font-size:1.25rem;line-height:1.5;border-radius:.3rem}.btn-sm,.btn-group-sm>.btn{padding:.25rem .5rem;font-size:.875rem;line-height:1.5;border-radius:.2rem}.btn-block{display:block;width:100%}.btn-block+.btn-block{margin-top:.5rem}input[type=\"submit\"].btn-block,input[type=\"reset\"].btn-block,input[type=\"button\"].btn-block{width:100%}.fade{-webkit-transition:opacity 0.15s linear;transition:opacity 0.15s linear}@media (prefers-reduced-motion: reduce){.fade{-webkit-transition:none;transition:none}}.fade:not(.show){opacity:0}.collapse:not(.show){display:none}.collapsing{position:relative;height:0;overflow:hidden;-webkit-transition:height 0.35s ease;transition:height 0.35s ease}@media (prefers-reduced-motion: reduce){.collapsing{-webkit-transition:none;transition:none}}.dropup,.dropright,.dropdown,.dropleft{position:relative}.dropdown-toggle{white-space:nowrap}.dropdown-toggle::after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid;border-right:.3em solid transparent;border-bottom:0;border-left:.3em solid transparent}.dropdown-toggle:empty::after{margin-left:0}.dropdown-menu{position:absolute;top:100%;left:0;z-index:1000;display:none;float:left;min-width:10rem;padding:.5rem 0;margin:.125rem 0 0;font-size:1rem;color:#212529;text-align:left;list-style:none;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,0.15);border-radius:.25rem}.dropdown-menu-left{right:auto;left:0}.dropdown-menu-right{right:0;left:auto}@media (min-width: 420px){.dropdown-menu-xs-left{right:auto;left:0}.dropdown-menu-xs-right{right:0;left:auto}}@media (min-width: 576px){.dropdown-menu-sm-left{right:auto;left:0}.dropdown-menu-sm-right{right:0;left:auto}}@media (min-width: 768px){.dropdown-menu-md-left{right:auto;left:0}.dropdown-menu-md-right{right:0;left:auto}}@media (min-width: 992px){.dropdown-menu-lg-left{right:auto;left:0}.dropdown-menu-lg-right{right:0;left:auto}}@media (min-width: 1200px){.dropdown-menu-xl-left{right:auto;left:0}.dropdown-menu-xl-right{right:0;left:auto}}@media (min-width: 1440px){.dropdown-menu-xxl-left{right:auto;left:0}.dropdown-menu-xxl-right{right:0;left:auto}}.dropup .dropdown-menu{top:auto;bottom:100%;margin-top:0;margin-bottom:.125rem}.dropup .dropdown-toggle::after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:0;border-right:.3em solid transparent;border-bottom:.3em solid;border-left:.3em solid transparent}.dropup .dropdown-toggle:empty::after{margin-left:0}.dropright .dropdown-menu{top:0;right:auto;left:100%;margin-top:0;margin-left:.125rem}.dropright .dropdown-toggle::after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid transparent;border-right:0;border-bottom:.3em solid transparent;border-left:.3em solid}.dropright .dropdown-toggle:empty::after{margin-left:0}.dropright .dropdown-toggle::after{vertical-align:0}.dropleft .dropdown-menu{top:0;right:100%;left:auto;margin-top:0;margin-right:.125rem}.dropleft .dropdown-toggle::after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\"}.dropleft .dropdown-toggle::after{display:none}.dropleft .dropdown-toggle::before{display:inline-block;margin-right:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid transparent;border-right:.3em solid;border-bottom:.3em solid transparent}.dropleft .dropdown-toggle:empty::after{margin-left:0}.dropleft .dropdown-toggle::before{vertical-align:0}.dropdown-menu[x-placement^=\"top\"],.dropdown-menu[x-placement^=\"right\"],.dropdown-menu[x-placement^=\"bottom\"],.dropdown-menu[x-placement^=\"left\"]{right:auto;bottom:auto}.dropdown-divider{height:0;margin:.5rem 0;overflow:hidden;border-top:1px solid #e9ecef}.dropdown-item{display:block;width:100%;padding:.25rem 1.5rem;clear:both;font-weight:400;color:#212529;text-align:inherit;white-space:nowrap;background-color:transparent;border:0}.dropdown-item:hover,.dropdown-item:focus{color:#16181b;text-decoration:none;background-color:#f8f9fa}.dropdown-item.active,.dropdown-item:active{color:#fff;text-decoration:none;background-color:#007bff}.dropdown-item.disabled,.dropdown-item:disabled{color:#6c757d;pointer-events:none;background-color:transparent}.dropdown-menu.show{display:block}.dropdown-header{display:block;padding:.5rem 1.5rem;margin-bottom:0;font-size:.875rem;color:#6c757d;white-space:nowrap}.dropdown-item-text{display:block;padding:.25rem 1.5rem;color:#212529}.btn-group,.btn-group-vertical{position:relative;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;vertical-align:middle}.btn-group>.btn,.btn-group-vertical>.btn{position:relative;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto}.btn-group>.btn:hover,.btn-group-vertical>.btn:hover{z-index:1}.btn-group>.btn:focus,.btn-group>.btn:active,.btn-group>.btn.active,.btn-group-vertical>.btn:focus,.btn-group-vertical>.btn:active,.btn-group-vertical>.btn.active{z-index:1}.btn-toolbar{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.btn-toolbar .input-group{width:auto}.btn-group>.btn:not(:first-child),.btn-group>.btn-group:not(:first-child){margin-left:-1px}.btn-group>.btn:not(:last-child):not(.dropdown-toggle),.btn-group>.btn-group:not(:last-child)>.btn{border-top-right-radius:0;border-bottom-right-radius:0}.btn-group>.btn:not(:first-child),.btn-group>.btn-group:not(:first-child)>.btn{border-top-left-radius:0;border-bottom-left-radius:0}.dropdown-toggle-split{padding-right:.5625rem;padding-left:.5625rem}.dropdown-toggle-split::after,.dropup .dropdown-toggle-split::after,.dropright .dropdown-toggle-split::after{margin-left:0}.dropleft .dropdown-toggle-split::before{margin-right:0}.btn-sm+.dropdown-toggle-split,.btn-group-sm>.btn+.dropdown-toggle-split{padding-right:.375rem;padding-left:.375rem}.btn-lg+.dropdown-toggle-split,.btn-group-lg>.btn+.dropdown-toggle-split{padding-right:.75rem;padding-left:.75rem}.btn-group-vertical{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.btn-group-vertical>.btn,.btn-group-vertical>.btn-group{width:100%}.btn-group-vertical>.btn:not(:first-child),.btn-group-vertical>.btn-group:not(:first-child){margin-top:-1px}.btn-group-vertical>.btn:not(:last-child):not(.dropdown-toggle),.btn-group-vertical>.btn-group:not(:last-child)>.btn{border-bottom-right-radius:0;border-bottom-left-radius:0}.btn-group-vertical>.btn:not(:first-child),.btn-group-vertical>.btn-group:not(:first-child)>.btn{border-top-left-radius:0;border-top-right-radius:0}.btn-group-toggle>.btn,.btn-group-toggle>.btn-group>.btn{margin-bottom:0}.btn-group-toggle>.btn input[type=\"radio\"],.btn-group-toggle>.btn input[type=\"checkbox\"],.btn-group-toggle>.btn-group>.btn input[type=\"radio\"],.btn-group-toggle>.btn-group>.btn input[type=\"checkbox\"]{position:absolute;clip:rect(0, 0, 0, 0);pointer-events:none}.input-group{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;width:100%}.input-group>.form-control,.input-group>.form-control-plaintext,.input-group>.custom-select,.input-group>.custom-file{position:relative;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;width:1%;margin-bottom:0}.input-group>.form-control+.form-control,.input-group>.form-control+.custom-select,.input-group>.form-control+.custom-file,.input-group>.form-control-plaintext+.form-control,.input-group>.form-control-plaintext+.custom-select,.input-group>.form-control-plaintext+.custom-file,.input-group>.custom-select+.form-control,.input-group>.custom-select+.custom-select,.input-group>.custom-select+.custom-file,.input-group>.custom-file+.form-control,.input-group>.custom-file+.custom-select,.input-group>.custom-file+.custom-file{margin-left:-1px}.input-group>.form-control:focus,.input-group>.custom-select:focus,.input-group>.custom-file .custom-file-input:focus ~ .custom-file-label{z-index:3}.input-group>.custom-file .custom-file-input:focus{z-index:4}.input-group>.form-control:not(:last-child),.input-group>.custom-select:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}.input-group>.form-control:not(:first-child),.input-group>.custom-select:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.input-group>.custom-file{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.input-group>.custom-file:not(:last-child) .custom-file-label,.input-group>.custom-file:not(:last-child) .custom-file-label::after{border-top-right-radius:0;border-bottom-right-radius:0}.input-group>.custom-file:not(:first-child) .custom-file-label{border-top-left-radius:0;border-bottom-left-radius:0}.input-group-prepend,.input-group-append{display:-webkit-box;display:-ms-flexbox;display:flex}.input-group-prepend .btn,.input-group-append .btn{position:relative;z-index:2}.input-group-prepend .btn:focus,.input-group-append .btn:focus{z-index:3}.input-group-prepend .btn+.btn,.input-group-prepend .btn+.input-group-text,.input-group-prepend .input-group-text+.input-group-text,.input-group-prepend .input-group-text+.btn,.input-group-append .btn+.btn,.input-group-append .btn+.input-group-text,.input-group-append .input-group-text+.input-group-text,.input-group-append .input-group-text+.btn{margin-left:-1px}.input-group-prepend{margin-right:-1px}.input-group-append{margin-left:-1px}.input-group-text{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:.375rem .75rem;margin-bottom:0;font-size:1rem;font-weight:400;line-height:1.5;color:#495057;text-align:center;white-space:nowrap;background-color:#e9ecef;border:1px solid #ced4da;border-radius:.25rem}.input-group-text input[type=\"radio\"],.input-group-text input[type=\"checkbox\"]{margin-top:0}.input-group-lg>.form-control:not(textarea),.input-group-lg>.custom-select{height:calc(1.5em + 1rem + 2px)}.input-group-lg>.form-control,.input-group-lg>.custom-select,.input-group-lg>.input-group-prepend>.input-group-text,.input-group-lg>.input-group-append>.input-group-text,.input-group-lg>.input-group-prepend>.btn,.input-group-lg>.input-group-append>.btn{padding:.5rem 1rem;font-size:1.25rem;line-height:1.5;border-radius:.3rem}.input-group-sm>.form-control:not(textarea),.input-group-sm>.custom-select{height:calc(1.5em + .5rem + 2px)}.input-group-sm>.form-control,.input-group-sm>.custom-select,.input-group-sm>.input-group-prepend>.input-group-text,.input-group-sm>.input-group-append>.input-group-text,.input-group-sm>.input-group-prepend>.btn,.input-group-sm>.input-group-append>.btn{padding:.25rem .5rem;font-size:.875rem;line-height:1.5;border-radius:.2rem}.input-group-lg>.custom-select,.input-group-sm>.custom-select{padding-right:1.75rem}.input-group>.input-group-prepend>.btn,.input-group>.input-group-prepend>.input-group-text,.input-group>.input-group-append:not(:last-child)>.btn,.input-group>.input-group-append:not(:last-child)>.input-group-text,.input-group>.input-group-append:last-child>.btn:not(:last-child):not(.dropdown-toggle),.input-group>.input-group-append:last-child>.input-group-text:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}.input-group>.input-group-append>.btn,.input-group>.input-group-append>.input-group-text,.input-group>.input-group-prepend:not(:first-child)>.btn,.input-group>.input-group-prepend:not(:first-child)>.input-group-text,.input-group>.input-group-prepend:first-child>.btn:not(:first-child),.input-group>.input-group-prepend:first-child>.input-group-text:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.custom-control{position:relative;display:block;min-height:1.5rem;padding-left:1.5rem}.custom-control-inline{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;margin-right:1rem}.custom-control-input{position:absolute;z-index:-1;opacity:0}.custom-control-input:checked ~ .custom-control-label::before{color:#fff;border-color:#007bff;background-color:#007bff}.custom-control-input:focus ~ .custom-control-label::before{-webkit-box-shadow:0 0 0 .2rem rgba(0,123,255,0.25);box-shadow:0 0 0 .2rem rgba(0,123,255,0.25)}.custom-control-input:focus:not(:checked) ~ .custom-control-label::before{border-color:#80bdff}.custom-control-input:not(:disabled):active ~ .custom-control-label::before{color:#fff;background-color:#b3d7ff;border-color:#b3d7ff}.custom-control-input:disabled ~ .custom-control-label{color:#6c757d}.custom-control-input:disabled ~ .custom-control-label::before{background-color:#e9ecef}.custom-control-label{position:relative;margin-bottom:0;vertical-align:top}.custom-control-label::before{position:absolute;top:.25rem;left:-1.5rem;display:block;width:1rem;height:1rem;pointer-events:none;content:\"\";background-color:#fff;border:#adb5bd solid 1px}.custom-control-label::after{position:absolute;top:.25rem;left:-1.5rem;display:block;width:1rem;height:1rem;content:\"\";background:no-repeat 50% / 50% 50%}.custom-checkbox .custom-control-label::before{border-radius:.25rem}.custom-checkbox .custom-control-input:checked ~ .custom-control-label::after{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e\")}.custom-checkbox .custom-control-input:indeterminate ~ .custom-control-label::before{border-color:#007bff;background-color:#007bff}.custom-checkbox .custom-control-input:indeterminate ~ .custom-control-label::after{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 4'%3e%3cpath stroke='%23fff' d='M0 2h4'/%3e%3c/svg%3e\")}.custom-checkbox .custom-control-input:disabled:checked ~ .custom-control-label::before{background-color:rgba(0,123,255,0.5)}.custom-checkbox .custom-control-input:disabled:indeterminate ~ .custom-control-label::before{background-color:rgba(0,123,255,0.5)}.custom-radio .custom-control-label::before{border-radius:50%}.custom-radio .custom-control-input:checked ~ .custom-control-label::after{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e\")}.custom-radio .custom-control-input:disabled:checked ~ .custom-control-label::before{background-color:rgba(0,123,255,0.5)}.custom-switch{padding-left:2.25rem}.custom-switch .custom-control-label::before{left:-2.25rem;width:1.75rem;pointer-events:all;border-radius:.5rem}.custom-switch .custom-control-label::after{top:calc(.25rem + 2px);left:calc(-2.25rem + 2px);width:calc(1rem - 4px);height:calc(1rem - 4px);background-color:#adb5bd;border-radius:.5rem;-webkit-transition:background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,-webkit-transform 0.15s ease-in-out,-webkit-box-shadow 0.15s ease-in-out;transition:background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,-webkit-transform 0.15s ease-in-out,-webkit-box-shadow 0.15s ease-in-out;transition:transform 0.15s ease-in-out,background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out;transition:transform 0.15s ease-in-out,background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out,-webkit-transform 0.15s ease-in-out,-webkit-box-shadow 0.15s ease-in-out}@media (prefers-reduced-motion: reduce){.custom-switch .custom-control-label::after{-webkit-transition:none;transition:none}}.custom-switch .custom-control-input:checked ~ .custom-control-label::after{background-color:#fff;-webkit-transform:translateX(.75rem);transform:translateX(.75rem)}.custom-switch .custom-control-input:disabled:checked ~ .custom-control-label::before{background-color:rgba(0,123,255,0.5)}.custom-select{display:inline-block;width:100%;height:calc(1.5em + .75rem + 2px);padding:.375rem 1.75rem .375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:#495057;vertical-align:middle;background:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e\") no-repeat right .75rem center/8px 10px;background-color:#fff;border:1px solid #ced4da;border-radius:.25rem;-webkit-appearance:none;-moz-appearance:none;appearance:none}.custom-select:focus{border-color:#80bdff;outline:0;-webkit-box-shadow:0 0 0 .2rem rgba(0,123,255,0.25);box-shadow:0 0 0 .2rem rgba(0,123,255,0.25)}.custom-select:focus::-ms-value{color:#495057;background-color:#fff}.custom-select[multiple],.custom-select[size]:not([size=\"1\"]){height:auto;padding-right:.75rem;background-image:none}.custom-select:disabled{color:#6c757d;background-color:#e9ecef}.custom-select::-ms-expand{display:none}.custom-select-sm{height:calc(1.5em + .5rem + 2px);padding-top:.25rem;padding-bottom:.25rem;padding-left:.5rem;font-size:.875rem}.custom-select-lg{height:calc(1.5em + 1rem + 2px);padding-top:.5rem;padding-bottom:.5rem;padding-left:1rem;font-size:1.25rem}.custom-file{position:relative;display:inline-block;width:100%;height:calc(1.5em + .75rem + 2px);margin-bottom:0}.custom-file-input{position:relative;z-index:2;width:100%;height:calc(1.5em + .75rem + 2px);margin:0;opacity:0}.custom-file-input:focus ~ .custom-file-label{border-color:#80bdff;-webkit-box-shadow:0 0 0 .2rem rgba(0,123,255,0.25);box-shadow:0 0 0 .2rem rgba(0,123,255,0.25)}.custom-file-input:disabled ~ .custom-file-label{background-color:#e9ecef}.custom-file-input:lang(en) ~ .custom-file-label::after{content:\"Browse\"}.custom-file-input ~ .custom-file-label[data-browse]::after{content:attr(data-browse)}.custom-file-label{position:absolute;top:0;right:0;left:0;z-index:1;height:calc(1.5em + .75rem + 2px);padding:.375rem .75rem;font-weight:400;line-height:1.5;color:#495057;background-color:#fff;border:1px solid #ced4da;border-radius:.25rem}.custom-file-label::after{position:absolute;top:0;right:0;bottom:0;z-index:3;display:block;height:calc(1.5em + .75rem);padding:.375rem .75rem;line-height:1.5;color:#495057;content:\"Browse\";background-color:#e9ecef;border-left:inherit;border-radius:0 .25rem .25rem 0}.custom-range{width:100%;height:calc(1rem + .4rem);padding:0;background-color:transparent;-webkit-appearance:none;-moz-appearance:none;appearance:none}.custom-range:focus{outline:none}.custom-range:focus::-webkit-slider-thumb{-webkit-box-shadow:0 0 0 1px #fff,0 0 0 .2rem rgba(0,123,255,0.25);box-shadow:0 0 0 1px #fff,0 0 0 .2rem rgba(0,123,255,0.25)}.custom-range:focus::-moz-range-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .2rem rgba(0,123,255,0.25)}.custom-range:focus::-ms-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .2rem rgba(0,123,255,0.25)}.custom-range::-moz-focus-outer{border:0}.custom-range::-webkit-slider-thumb{width:1rem;height:1rem;margin-top:-.25rem;background-color:#007bff;border:0;border-radius:1rem;-webkit-transition:background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,-webkit-box-shadow 0.15s ease-in-out;transition:background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,-webkit-box-shadow 0.15s ease-in-out;transition:background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out;transition:background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out,-webkit-box-shadow 0.15s ease-in-out;-webkit-appearance:none;appearance:none}@media (prefers-reduced-motion: reduce){.custom-range::-webkit-slider-thumb{-webkit-transition:none;transition:none}}.custom-range::-webkit-slider-thumb:active{background-color:#b3d7ff}.custom-range::-webkit-slider-runnable-track{width:100%;height:.5rem;color:transparent;cursor:pointer;background-color:#dee2e6;border-color:transparent;border-radius:1rem}.custom-range::-moz-range-thumb{width:1rem;height:1rem;background-color:#007bff;border:0;border-radius:1rem;-webkit-transition:background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,-webkit-box-shadow 0.15s ease-in-out;transition:background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,-webkit-box-shadow 0.15s ease-in-out;-moz-transition:background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out;transition:background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out;transition:background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out,-webkit-box-shadow 0.15s ease-in-out;-moz-appearance:none;appearance:none}@media (prefers-reduced-motion: reduce){.custom-range::-moz-range-thumb{-webkit-transition:none;-moz-transition:none;transition:none}}.custom-range::-moz-range-thumb:active{background-color:#b3d7ff}.custom-range::-moz-range-track{width:100%;height:.5rem;color:transparent;cursor:pointer;background-color:#dee2e6;border-color:transparent;border-radius:1rem}.custom-range::-ms-thumb{width:1rem;height:1rem;margin-top:0;margin-right:.2rem;margin-left:.2rem;background-color:#007bff;border:0;border-radius:1rem;-webkit-transition:background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,-webkit-box-shadow 0.15s ease-in-out;transition:background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,-webkit-box-shadow 0.15s ease-in-out;-ms-transition:background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out;transition:background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out;transition:background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out,-webkit-box-shadow 0.15s ease-in-out;appearance:none}@media (prefers-reduced-motion: reduce){.custom-range::-ms-thumb{-webkit-transition:none;-ms-transition:none;transition:none}}.custom-range::-ms-thumb:active{background-color:#b3d7ff}.custom-range::-ms-track{width:100%;height:.5rem;color:transparent;cursor:pointer;background-color:transparent;border-color:transparent;border-width:.5rem}.custom-range::-ms-fill-lower{background-color:#dee2e6;border-radius:1rem}.custom-range::-ms-fill-upper{margin-right:15px;background-color:#dee2e6;border-radius:1rem}.custom-range:disabled::-webkit-slider-thumb{background-color:#adb5bd}.custom-range:disabled::-webkit-slider-runnable-track{cursor:default}.custom-range:disabled::-moz-range-thumb{background-color:#adb5bd}.custom-range:disabled::-moz-range-track{cursor:default}.custom-range:disabled::-ms-thumb{background-color:#adb5bd}.custom-control-label::before,.custom-file-label,.custom-select{-webkit-transition:background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,-webkit-box-shadow 0.15s ease-in-out;transition:background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,-webkit-box-shadow 0.15s ease-in-out;transition:background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out;transition:background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out,-webkit-box-shadow 0.15s ease-in-out}@media (prefers-reduced-motion: reduce){.custom-control-label::before,.custom-file-label,.custom-select{-webkit-transition:none;transition:none}}.nav{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;padding-left:0;margin-bottom:0;list-style:none}.nav-link{display:block;padding:.5rem 1rem}.nav-link:hover,.nav-link:focus{text-decoration:none}.nav-link.disabled{color:#6c757d;pointer-events:none;cursor:default}.nav-tabs{border-bottom:1px solid #dee2e6}.nav-tabs .nav-item{margin-bottom:-1px}.nav-tabs .nav-link{border:1px solid transparent;border-top-left-radius:.25rem;border-top-right-radius:.25rem}.nav-tabs .nav-link:hover,.nav-tabs .nav-link:focus{border-color:#e9ecef #e9ecef #dee2e6}.nav-tabs .nav-link.disabled{color:#6c757d;background-color:transparent;border-color:transparent}.nav-tabs .nav-link.active,.nav-tabs .nav-item.show .nav-link{color:#495057;background-color:#fff;border-color:#dee2e6 #dee2e6 #fff}.nav-tabs .dropdown-menu{margin-top:-1px;border-top-left-radius:0;border-top-right-radius:0}.nav-pills .nav-link{border-radius:.25rem}.nav-pills .nav-link.active,.nav-pills .show>.nav-link{color:#fff;background-color:#007bff}.nav-fill .nav-item{-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;text-align:center}.nav-justified .nav-item{-ms-flex-preferred-size:0;flex-basis:0;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;text-align:center}.tab-content>.tab-pane{display:none}.tab-content>.active{display:block}.navbar{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding:.5rem 1rem}.navbar>.container,.navbar>.container-fluid{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.navbar-brand{display:inline-block;padding-top:.3125rem;padding-bottom:.3125rem;margin-right:1rem;font-size:1.25rem;line-height:inherit;white-space:nowrap}.navbar-brand:hover,.navbar-brand:focus{text-decoration:none}.navbar-nav{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding-left:0;margin-bottom:0;list-style:none}.navbar-nav .nav-link{padding-right:0;padding-left:0}.navbar-nav .dropdown-menu{position:static;float:none}.navbar-text{display:inline-block;padding-top:.5rem;padding-bottom:.5rem}.navbar-collapse{-ms-flex-preferred-size:100%;flex-basis:100%;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.navbar-toggler{padding:.25rem .75rem;font-size:1.25rem;line-height:1;background-color:transparent;border:1px solid transparent;border-radius:.25rem}.navbar-toggler:hover,.navbar-toggler:focus{text-decoration:none}.navbar-toggler-icon{display:inline-block;width:1.5em;height:1.5em;vertical-align:middle;content:\"\";background:no-repeat center center;background-size:100% 100%}@media (max-width: 419.98px){.navbar-expand-xs>.container,.navbar-expand-xs>.container-fluid{padding-right:0;padding-left:0}}@media (min-width: 420px){.navbar-expand-xs{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.navbar-expand-xs .navbar-nav{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.navbar-expand-xs .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-xs .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-xs>.container,.navbar-expand-xs>.container-fluid{-ms-flex-wrap:nowrap;flex-wrap:nowrap}.navbar-expand-xs .navbar-collapse{display:-webkit-box !important;display:-ms-flexbox !important;display:flex !important;-ms-flex-preferred-size:auto;flex-basis:auto}.navbar-expand-xs .navbar-toggler{display:none}}@media (max-width: 575.98px){.navbar-expand-sm>.container,.navbar-expand-sm>.container-fluid{padding-right:0;padding-left:0}}@media (min-width: 576px){.navbar-expand-sm{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.navbar-expand-sm .navbar-nav{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.navbar-expand-sm .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-sm .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-sm>.container,.navbar-expand-sm>.container-fluid{-ms-flex-wrap:nowrap;flex-wrap:nowrap}.navbar-expand-sm .navbar-collapse{display:-webkit-box !important;display:-ms-flexbox !important;display:flex !important;-ms-flex-preferred-size:auto;flex-basis:auto}.navbar-expand-sm .navbar-toggler{display:none}}@media (max-width: 767.98px){.navbar-expand-md>.container,.navbar-expand-md>.container-fluid{padding-right:0;padding-left:0}}@media (min-width: 768px){.navbar-expand-md{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.navbar-expand-md .navbar-nav{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.navbar-expand-md .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-md .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-md>.container,.navbar-expand-md>.container-fluid{-ms-flex-wrap:nowrap;flex-wrap:nowrap}.navbar-expand-md .navbar-collapse{display:-webkit-box !important;display:-ms-flexbox !important;display:flex !important;-ms-flex-preferred-size:auto;flex-basis:auto}.navbar-expand-md .navbar-toggler{display:none}}@media (max-width: 991.98px){.navbar-expand-lg>.container,.navbar-expand-lg>.container-fluid{padding-right:0;padding-left:0}}@media (min-width: 992px){.navbar-expand-lg{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.navbar-expand-lg .navbar-nav{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.navbar-expand-lg .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-lg .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-lg>.container,.navbar-expand-lg>.container-fluid{-ms-flex-wrap:nowrap;flex-wrap:nowrap}.navbar-expand-lg .navbar-collapse{display:-webkit-box !important;display:-ms-flexbox !important;display:flex !important;-ms-flex-preferred-size:auto;flex-basis:auto}.navbar-expand-lg .navbar-toggler{display:none}}@media (max-width: 1199.98px){.navbar-expand-xl>.container,.navbar-expand-xl>.container-fluid{padding-right:0;padding-left:0}}@media (min-width: 1200px){.navbar-expand-xl{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.navbar-expand-xl .navbar-nav{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.navbar-expand-xl .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-xl .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-xl>.container,.navbar-expand-xl>.container-fluid{-ms-flex-wrap:nowrap;flex-wrap:nowrap}.navbar-expand-xl .navbar-collapse{display:-webkit-box !important;display:-ms-flexbox !important;display:flex !important;-ms-flex-preferred-size:auto;flex-basis:auto}.navbar-expand-xl .navbar-toggler{display:none}}@media (max-width: 1439.98px){.navbar-expand-xxl>.container,.navbar-expand-xxl>.container-fluid{padding-right:0;padding-left:0}}@media (min-width: 1440px){.navbar-expand-xxl{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.navbar-expand-xxl .navbar-nav{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.navbar-expand-xxl .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-xxl .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-xxl>.container,.navbar-expand-xxl>.container-fluid{-ms-flex-wrap:nowrap;flex-wrap:nowrap}.navbar-expand-xxl .navbar-collapse{display:-webkit-box !important;display:-ms-flexbox !important;display:flex !important;-ms-flex-preferred-size:auto;flex-basis:auto}.navbar-expand-xxl .navbar-toggler{display:none}}.navbar-expand{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.navbar-expand>.container,.navbar-expand>.container-fluid{padding-right:0;padding-left:0}.navbar-expand .navbar-nav{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.navbar-expand .navbar-nav .dropdown-menu{position:absolute}.navbar-expand .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand>.container,.navbar-expand>.container-fluid{-ms-flex-wrap:nowrap;flex-wrap:nowrap}.navbar-expand .navbar-collapse{display:-webkit-box !important;display:-ms-flexbox !important;display:flex !important;-ms-flex-preferred-size:auto;flex-basis:auto}.navbar-expand .navbar-toggler{display:none}.navbar-light .navbar-brand{color:rgba(0,0,0,0.9)}.navbar-light .navbar-brand:hover,.navbar-light .navbar-brand:focus{color:rgba(0,0,0,0.9)}.navbar-light .navbar-nav .nav-link{color:rgba(0,0,0,0.5)}.navbar-light .navbar-nav .nav-link:hover,.navbar-light .navbar-nav .nav-link:focus{color:rgba(0,0,0,0.7)}.navbar-light .navbar-nav .nav-link.disabled{color:rgba(0,0,0,0.3)}.navbar-light .navbar-nav .show>.nav-link,.navbar-light .navbar-nav .active>.nav-link,.navbar-light .navbar-nav .nav-link.show,.navbar-light .navbar-nav .nav-link.active{color:rgba(0,0,0,0.9)}.navbar-light .navbar-toggler{color:rgba(0,0,0,0.5);border-color:rgba(0,0,0,0.1)}.navbar-light .navbar-toggler-icon{background-image:url(\"data:image/svg+xml,%3csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3e%3cpath stroke='rgba(0,0,0,0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\")}.navbar-light .navbar-text{color:rgba(0,0,0,0.5)}.navbar-light .navbar-text a{color:rgba(0,0,0,0.9)}.navbar-light .navbar-text a:hover,.navbar-light .navbar-text a:focus{color:rgba(0,0,0,0.9)}.navbar-dark .navbar-brand{color:#fff}.navbar-dark .navbar-brand:hover,.navbar-dark .navbar-brand:focus{color:#fff}.navbar-dark .navbar-nav .nav-link{color:rgba(255,255,255,0.5)}.navbar-dark .navbar-nav .nav-link:hover,.navbar-dark .navbar-nav .nav-link:focus{color:rgba(255,255,255,0.75)}.navbar-dark .navbar-nav .nav-link.disabled{color:rgba(255,255,255,0.25)}.navbar-dark .navbar-nav .show>.nav-link,.navbar-dark .navbar-nav .active>.nav-link,.navbar-dark .navbar-nav .nav-link.show,.navbar-dark .navbar-nav .nav-link.active{color:#fff}.navbar-dark .navbar-toggler{color:rgba(255,255,255,0.5);border-color:rgba(255,255,255,0.1)}.navbar-dark .navbar-toggler-icon{background-image:url(\"data:image/svg+xml,%3csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3e%3cpath stroke='rgba(255,255,255,0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\")}.navbar-dark .navbar-text{color:rgba(255,255,255,0.5)}.navbar-dark .navbar-text a{color:#fff}.navbar-dark .navbar-text a:hover,.navbar-dark .navbar-text a:focus{color:#fff}.card{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;min-width:0;word-wrap:break-word;background-color:#fff;background-clip:border-box;border:1px solid rgba(0,0,0,0.125);border-radius:.25rem}.card>hr{margin-right:0;margin-left:0}.card>.list-group:first-child .list-group-item:first-child{border-top-left-radius:.25rem;border-top-right-radius:.25rem}.card>.list-group:last-child .list-group-item:last-child{border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}.card-body{-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;padding:1.25rem}.card-title{margin-bottom:.75rem}.card-subtitle{margin-top:-.375rem;margin-bottom:0}.card-text:last-child{margin-bottom:0}.card-link:hover{text-decoration:none}.card-link+.card-link{margin-left:1.25rem}.card-header{padding:.75rem 1.25rem;margin-bottom:0;background-color:rgba(0,0,0,0.03);border-bottom:1px solid rgba(0,0,0,0.125)}.card-header:first-child{border-radius:calc(.25rem - 1px) calc(.25rem - 1px) 0 0}.card-header+.list-group .list-group-item:first-child{border-top:0}.card-footer{padding:.75rem 1.25rem;background-color:rgba(0,0,0,0.03);border-top:1px solid rgba(0,0,0,0.125)}.card-footer:last-child{border-radius:0 0 calc(.25rem - 1px) calc(.25rem - 1px)}.card-header-tabs{margin-right:-.625rem;margin-bottom:-.75rem;margin-left:-.625rem;border-bottom:0}.card-header-pills{margin-right:-.625rem;margin-left:-.625rem}.card-img-overlay{position:absolute;top:0;right:0;bottom:0;left:0;padding:1.25rem}.card-img{width:100%;border-radius:calc(.25rem - 1px)}.card-img-top{width:100%;border-top-left-radius:calc(.25rem - 1px);border-top-right-radius:calc(.25rem - 1px)}.card-img-bottom{width:100%;border-bottom-right-radius:calc(.25rem - 1px);border-bottom-left-radius:calc(.25rem - 1px)}.card-deck{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.card-deck .card{margin-bottom:15px}@media (min-width: 576px){.card-deck{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row wrap;flex-flow:row wrap;margin-right:-15px;margin-left:-15px}.card-deck .card{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1 0 0%;flex:1 0 0%;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin-right:15px;margin-bottom:0;margin-left:15px}}.card-group{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.card-group>.card{margin-bottom:15px}@media (min-width: 576px){.card-group{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row wrap;flex-flow:row wrap}.card-group>.card{-webkit-box-flex:1;-ms-flex:1 0 0%;flex:1 0 0%;margin-bottom:0}.card-group>.card+.card{margin-left:0;border-left:0}.card-group>.card:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}.card-group>.card:not(:last-child) .card-img-top,.card-group>.card:not(:last-child) .card-header{border-top-right-radius:0}.card-group>.card:not(:last-child) .card-img-bottom,.card-group>.card:not(:last-child) .card-footer{border-bottom-right-radius:0}.card-group>.card:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.card-group>.card:not(:first-child) .card-img-top,.card-group>.card:not(:first-child) .card-header{border-top-left-radius:0}.card-group>.card:not(:first-child) .card-img-bottom,.card-group>.card:not(:first-child) .card-footer{border-bottom-left-radius:0}}.card-columns .card{margin-bottom:.75rem}@media (min-width: 576px){.card-columns{-webkit-column-count:3;-moz-column-count:3;column-count:3;-webkit-column-gap:1.25rem;-moz-column-gap:1.25rem;column-gap:1.25rem;orphans:1;widows:1}.card-columns .card{display:inline-block;width:100%}}.accordion>.card{overflow:hidden}.accordion>.card:not(:first-of-type) .card-header:first-child{border-radius:0}.accordion>.card:not(:first-of-type):not(:last-of-type){border-bottom:0;border-radius:0}.accordion>.card:first-of-type{border-bottom:0;border-bottom-right-radius:0;border-bottom-left-radius:0}.accordion>.card:last-of-type{border-top-left-radius:0;border-top-right-radius:0}.accordion>.card .card-header{margin-bottom:-1px}.breadcrumb{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;padding:.75rem 1rem;margin-bottom:1rem;list-style:none;background-color:#e9ecef;border-radius:.25rem}.breadcrumb-item+.breadcrumb-item{padding-left:.5rem}.breadcrumb-item+.breadcrumb-item::before{display:inline-block;padding-right:.5rem;color:#6c757d;content:\"/\"}.breadcrumb-item+.breadcrumb-item:hover::before{text-decoration:underline}.breadcrumb-item+.breadcrumb-item:hover::before{text-decoration:none}.breadcrumb-item.active{color:#6c757d}.pagination{display:-webkit-box;display:-ms-flexbox;display:flex;padding-left:0;list-style:none;border-radius:.25rem}.page-link{position:relative;display:block;padding:.5rem .75rem;margin-left:-1px;line-height:1.25;color:#007bff;background-color:#fff;border:1px solid #dee2e6}.page-link:hover{z-index:2;color:#0056b3;text-decoration:none;background-color:#e9ecef;border-color:#dee2e6}.page-link:focus{z-index:2;outline:0;-webkit-box-shadow:0 0 0 .2rem rgba(0,123,255,0.25);box-shadow:0 0 0 .2rem rgba(0,123,255,0.25)}.page-item:first-child .page-link{margin-left:0;border-top-left-radius:.25rem;border-bottom-left-radius:.25rem}.page-item:last-child .page-link{border-top-right-radius:.25rem;border-bottom-right-radius:.25rem}.page-item.active .page-link{z-index:1;color:#fff;background-color:#007bff;border-color:#007bff}.page-item.disabled .page-link{color:#6c757d;pointer-events:none;cursor:auto;background-color:#fff;border-color:#dee2e6}.pagination-lg .page-link{padding:.75rem 1.5rem;font-size:1.25rem;line-height:1.5}.pagination-lg .page-item:first-child .page-link{border-top-left-radius:.3rem;border-bottom-left-radius:.3rem}.pagination-lg .page-item:last-child .page-link{border-top-right-radius:.3rem;border-bottom-right-radius:.3rem}.pagination-sm .page-link{padding:.25rem .5rem;font-size:.875rem;line-height:1.5}.pagination-sm .page-item:first-child .page-link{border-top-left-radius:.2rem;border-bottom-left-radius:.2rem}.pagination-sm .page-item:last-child .page-link{border-top-right-radius:.2rem;border-bottom-right-radius:.2rem}.badge{display:inline-block;padding:.25em .4em;font-size:75%;font-weight:700;line-height:1;text-align:center;white-space:nowrap;vertical-align:baseline;border-radius:.25rem;-webkit-transition:color 0.15s ease-in-out,background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,-webkit-box-shadow 0.15s ease-in-out;transition:color 0.15s ease-in-out,background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,-webkit-box-shadow 0.15s ease-in-out;transition:color 0.15s ease-in-out,background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out;transition:color 0.15s ease-in-out,background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out,-webkit-box-shadow 0.15s ease-in-out}@media (prefers-reduced-motion: reduce){.badge{-webkit-transition:none;transition:none}}a.badge:hover,a.badge:focus{text-decoration:none}.badge:empty{display:none}.btn .badge{position:relative;top:-1px}.badge-pill{padding-right:.6em;padding-left:.6em;border-radius:10rem}.badge-primary{color:#fff;background-color:#007bff}a.badge-primary:hover,a.badge-primary:focus{color:#fff;background-color:#0062cc}a.badge-primary:focus,a.badge-primary.focus{outline:0;-webkit-box-shadow:0 0 0 .2rem rgba(0,123,255,0.5);box-shadow:0 0 0 .2rem rgba(0,123,255,0.5)}.badge-secondary{color:#fff;background-color:#6c757d}a.badge-secondary:hover,a.badge-secondary:focus{color:#fff;background-color:#545b62}a.badge-secondary:focus,a.badge-secondary.focus{outline:0;-webkit-box-shadow:0 0 0 .2rem rgba(108,117,125,0.5);box-shadow:0 0 0 .2rem rgba(108,117,125,0.5)}.badge-success{color:#fff;background-color:#28a745}a.badge-success:hover,a.badge-success:focus{color:#fff;background-color:#1e7e34}a.badge-success:focus,a.badge-success.focus{outline:0;-webkit-box-shadow:0 0 0 .2rem rgba(40,167,69,0.5);box-shadow:0 0 0 .2rem rgba(40,167,69,0.5)}.badge-info{color:#fff;background-color:#17a2b8}a.badge-info:hover,a.badge-info:focus{color:#fff;background-color:#117a8b}a.badge-info:focus,a.badge-info.focus{outline:0;-webkit-box-shadow:0 0 0 .2rem rgba(23,162,184,0.5);box-shadow:0 0 0 .2rem rgba(23,162,184,0.5)}.badge-warning{color:#212529;background-color:#ffc107}a.badge-warning:hover,a.badge-warning:focus{color:#212529;background-color:#d39e00}a.badge-warning:focus,a.badge-warning.focus{outline:0;-webkit-box-shadow:0 0 0 .2rem rgba(255,193,7,0.5);box-shadow:0 0 0 .2rem rgba(255,193,7,0.5)}.badge-danger{color:#fff;background-color:#dc3545}a.badge-danger:hover,a.badge-danger:focus{color:#fff;background-color:#bd2130}a.badge-danger:focus,a.badge-danger.focus{outline:0;-webkit-box-shadow:0 0 0 .2rem rgba(220,53,69,0.5);box-shadow:0 0 0 .2rem rgba(220,53,69,0.5)}.badge-light{color:#212529;background-color:#f8f9fa}a.badge-light:hover,a.badge-light:focus{color:#212529;background-color:#dae0e5}a.badge-light:focus,a.badge-light.focus{outline:0;-webkit-box-shadow:0 0 0 .2rem rgba(248,249,250,0.5);box-shadow:0 0 0 .2rem rgba(248,249,250,0.5)}.badge-dark{color:#fff;background-color:#343a40}a.badge-dark:hover,a.badge-dark:focus{color:#fff;background-color:#1d2124}a.badge-dark:focus,a.badge-dark.focus{outline:0;-webkit-box-shadow:0 0 0 .2rem rgba(52,58,64,0.5);box-shadow:0 0 0 .2rem rgba(52,58,64,0.5)}.jumbotron{padding:2rem 1rem;margin-bottom:2rem;background-color:#e9ecef;border-radius:.3rem}@media (min-width: 576px){.jumbotron{padding:4rem 2rem}}.jumbotron-fluid{padding-right:0;padding-left:0;border-radius:0}.alert{position:relative;padding:.75rem 1.25rem;margin-bottom:1rem;border:1px solid transparent;border-radius:.25rem}.alert-heading{color:inherit}.alert-link{font-weight:700}.alert-dismissible{padding-right:4rem}.alert-dismissible .close{position:absolute;top:0;right:0;padding:.75rem 1.25rem;color:inherit}.alert-primary{color:#004085;background-color:#cce5ff;border-color:#b8daff}.alert-primary hr{border-top-color:#9fcdff}.alert-primary .alert-link{color:#002752}.alert-secondary{color:#383d41;background-color:#e2e3e5;border-color:#d6d8db}.alert-secondary hr{border-top-color:#c8cbcf}.alert-secondary .alert-link{color:#202326}.alert-success{color:#155724;background-color:#d4edda;border-color:#c3e6cb}.alert-success hr{border-top-color:#b1dfbb}.alert-success .alert-link{color:#0b2e13}.alert-info{color:#0c5460;background-color:#d1ecf1;border-color:#bee5eb}.alert-info hr{border-top-color:#abdde5}.alert-info .alert-link{color:#062c33}.alert-warning{color:#856404;background-color:#fff3cd;border-color:#ffeeba}.alert-warning hr{border-top-color:#ffe8a1}.alert-warning .alert-link{color:#533f03}.alert-danger{color:#721c24;background-color:#f8d7da;border-color:#f5c6cb}.alert-danger hr{border-top-color:#f1b0b7}.alert-danger .alert-link{color:#491217}.alert-light{color:#818182;background-color:#fefefe;border-color:#fdfdfe}.alert-light hr{border-top-color:#ececf6}.alert-light .alert-link{color:#686868}.alert-dark{color:#1b1e21;background-color:#d6d8d9;border-color:#c6c8ca}.alert-dark hr{border-top-color:#b9bbbe}.alert-dark .alert-link{color:#040505}@-webkit-keyframes progress-bar-stripes{from{background-position:1rem 0}to{background-position:0 0}}@keyframes progress-bar-stripes{from{background-position:1rem 0}to{background-position:0 0}}.progress{display:-webkit-box;display:-ms-flexbox;display:flex;height:1rem;overflow:hidden;font-size:.75rem;background-color:#e9ecef;border-radius:.25rem}.progress-bar{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;color:#fff;text-align:center;white-space:nowrap;background-color:#007bff;-webkit-transition:width 0.6s ease;transition:width 0.6s ease}@media (prefers-reduced-motion: reduce){.progress-bar{-webkit-transition:none;transition:none}}.progress-bar-striped{background-image:linear-gradient(45deg, rgba(255,255,255,0.15) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.15) 75%, transparent 75%, transparent);background-size:1rem 1rem}.progress-bar-animated{-webkit-animation:progress-bar-stripes 1s linear infinite;animation:progress-bar-stripes 1s linear infinite}@media (prefers-reduced-motion: reduce){.progress-bar-animated{-webkit-animation:none;animation:none}}.media{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start}.media-body{-webkit-box-flex:1;-ms-flex:1;flex:1}.list-group{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding-left:0;margin-bottom:0}.list-group-item-action{width:100%;color:#495057;text-align:inherit}.list-group-item-action:hover,.list-group-item-action:focus{z-index:1;color:#495057;text-decoration:none;background-color:#f8f9fa}.list-group-item-action:active{color:#212529;background-color:#e9ecef}.list-group-item{position:relative;display:block;padding:.75rem 1.25rem;margin-bottom:-1px;background-color:#fff;border:1px solid rgba(0,0,0,0.125)}.list-group-item:first-child{border-top-left-radius:.25rem;border-top-right-radius:.25rem}.list-group-item:last-child{margin-bottom:0;border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}.list-group-item.disabled,.list-group-item:disabled{color:#6c757d;pointer-events:none;background-color:#fff}.list-group-item.active{z-index:2;color:#fff;background-color:#007bff;border-color:#007bff}.list-group-horizontal{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.list-group-horizontal .list-group-item{margin-right:-1px;margin-bottom:0}.list-group-horizontal .list-group-item:first-child{border-top-left-radius:.25rem;border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal .list-group-item:last-child{margin-right:0;border-top-right-radius:.25rem;border-bottom-right-radius:.25rem;border-bottom-left-radius:0}@media (min-width: 420px){.list-group-horizontal-xs{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.list-group-horizontal-xs .list-group-item{margin-right:-1px;margin-bottom:0}.list-group-horizontal-xs .list-group-item:first-child{border-top-left-radius:.25rem;border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal-xs .list-group-item:last-child{margin-right:0;border-top-right-radius:.25rem;border-bottom-right-radius:.25rem;border-bottom-left-radius:0}}@media (min-width: 576px){.list-group-horizontal-sm{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.list-group-horizontal-sm .list-group-item{margin-right:-1px;margin-bottom:0}.list-group-horizontal-sm .list-group-item:first-child{border-top-left-radius:.25rem;border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal-sm .list-group-item:last-child{margin-right:0;border-top-right-radius:.25rem;border-bottom-right-radius:.25rem;border-bottom-left-radius:0}}@media (min-width: 768px){.list-group-horizontal-md{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.list-group-horizontal-md .list-group-item{margin-right:-1px;margin-bottom:0}.list-group-horizontal-md .list-group-item:first-child{border-top-left-radius:.25rem;border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal-md .list-group-item:last-child{margin-right:0;border-top-right-radius:.25rem;border-bottom-right-radius:.25rem;border-bottom-left-radius:0}}@media (min-width: 992px){.list-group-horizontal-lg{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.list-group-horizontal-lg .list-group-item{margin-right:-1px;margin-bottom:0}.list-group-horizontal-lg .list-group-item:first-child{border-top-left-radius:.25rem;border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal-lg .list-group-item:last-child{margin-right:0;border-top-right-radius:.25rem;border-bottom-right-radius:.25rem;border-bottom-left-radius:0}}@media (min-width: 1200px){.list-group-horizontal-xl{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.list-group-horizontal-xl .list-group-item{margin-right:-1px;margin-bottom:0}.list-group-horizontal-xl .list-group-item:first-child{border-top-left-radius:.25rem;border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal-xl .list-group-item:last-child{margin-right:0;border-top-right-radius:.25rem;border-bottom-right-radius:.25rem;border-bottom-left-radius:0}}@media (min-width: 1440px){.list-group-horizontal-xxl{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.list-group-horizontal-xxl .list-group-item{margin-right:-1px;margin-bottom:0}.list-group-horizontal-xxl .list-group-item:first-child{border-top-left-radius:.25rem;border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal-xxl .list-group-item:last-child{margin-right:0;border-top-right-radius:.25rem;border-bottom-right-radius:.25rem;border-bottom-left-radius:0}}.list-group-flush .list-group-item{border-right:0;border-left:0;border-radius:0}.list-group-flush .list-group-item:last-child{margin-bottom:-1px}.list-group-flush:first-child .list-group-item:first-child{border-top:0}.list-group-flush:last-child .list-group-item:last-child{margin-bottom:0;border-bottom:0}.list-group-item-primary{color:#004085;background-color:#b8daff}.list-group-item-primary.list-group-item-action:hover,.list-group-item-primary.list-group-item-action:focus{color:#004085;background-color:#9fcdff}.list-group-item-primary.list-group-item-action.active{color:#fff;background-color:#004085;border-color:#004085}.list-group-item-secondary{color:#383d41;background-color:#d6d8db}.list-group-item-secondary.list-group-item-action:hover,.list-group-item-secondary.list-group-item-action:focus{color:#383d41;background-color:#c8cbcf}.list-group-item-secondary.list-group-item-action.active{color:#fff;background-color:#383d41;border-color:#383d41}.list-group-item-success{color:#155724;background-color:#c3e6cb}.list-group-item-success.list-group-item-action:hover,.list-group-item-success.list-group-item-action:focus{color:#155724;background-color:#b1dfbb}.list-group-item-success.list-group-item-action.active{color:#fff;background-color:#155724;border-color:#155724}.list-group-item-info{color:#0c5460;background-color:#bee5eb}.list-group-item-info.list-group-item-action:hover,.list-group-item-info.list-group-item-action:focus{color:#0c5460;background-color:#abdde5}.list-group-item-info.list-group-item-action.active{color:#fff;background-color:#0c5460;border-color:#0c5460}.list-group-item-warning{color:#856404;background-color:#ffeeba}.list-group-item-warning.list-group-item-action:hover,.list-group-item-warning.list-group-item-action:focus{color:#856404;background-color:#ffe8a1}.list-group-item-warning.list-group-item-action.active{color:#fff;background-color:#856404;border-color:#856404}.list-group-item-danger{color:#721c24;background-color:#f5c6cb}.list-group-item-danger.list-group-item-action:hover,.list-group-item-danger.list-group-item-action:focus{color:#721c24;background-color:#f1b0b7}.list-group-item-danger.list-group-item-action.active{color:#fff;background-color:#721c24;border-color:#721c24}.list-group-item-light{color:#818182;background-color:#fdfdfe}.list-group-item-light.list-group-item-action:hover,.list-group-item-light.list-group-item-action:focus{color:#818182;background-color:#ececf6}.list-group-item-light.list-group-item-action.active{color:#fff;background-color:#818182;border-color:#818182}.list-group-item-dark{color:#1b1e21;background-color:#c6c8ca}.list-group-item-dark.list-group-item-action:hover,.list-group-item-dark.list-group-item-action:focus{color:#1b1e21;background-color:#b9bbbe}.list-group-item-dark.list-group-item-action.active{color:#fff;background-color:#1b1e21;border-color:#1b1e21}.close{float:right;font-size:1.5rem;font-weight:700;line-height:1;color:#000;text-shadow:0 1px 0 #fff;opacity:.5}.close:hover{color:#000;text-decoration:none}.close:not(:disabled):not(.disabled):hover,.close:not(:disabled):not(.disabled):focus{opacity:.75}button.close{padding:0;background-color:transparent;border:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}a.close.disabled{pointer-events:none}.toast{max-width:350px;overflow:hidden;font-size:.875rem;background-color:rgba(255,255,255,0.85);background-clip:padding-box;border:1px solid rgba(0,0,0,0.1);-webkit-box-shadow:0 0.25rem 0.75rem rgba(0,0,0,0.1);box-shadow:0 0.25rem 0.75rem rgba(0,0,0,0.1);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);opacity:0;border-radius:.25rem}.toast:not(:last-child){margin-bottom:.75rem}.toast.showing{opacity:1}.toast.show{display:block;opacity:1}.toast.hide{display:none}.toast-header{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:.25rem .75rem;color:#6c757d;background-color:rgba(255,255,255,0.85);background-clip:padding-box;border-bottom:1px solid rgba(0,0,0,0.05)}.toast-body{padding:.75rem}.modal-open{overflow:hidden}.modal-open .modal{overflow-x:hidden;overflow-y:auto}.modal{position:fixed;top:0;left:0;z-index:1050;display:none;width:100%;height:100%;overflow:hidden;outline:0}.modal-dialog{position:relative;width:auto;margin:.5rem;pointer-events:none}.modal.fade .modal-dialog{-webkit-transition:-webkit-transform 0.3s ease-out;transition:-webkit-transform 0.3s ease-out;transition:transform 0.3s ease-out;transition:transform 0.3s ease-out, -webkit-transform 0.3s ease-out;-webkit-transform:translate(0, -50px);transform:translate(0, -50px)}@media (prefers-reduced-motion: reduce){.modal.fade .modal-dialog{-webkit-transition:none;transition:none}}.modal.show .modal-dialog{-webkit-transform:none;transform:none}.modal-dialog-scrollable{display:-webkit-box;display:-ms-flexbox;display:flex;max-height:calc(100% - 1rem)}.modal-dialog-scrollable .modal-content{max-height:calc(100vh - 1rem);overflow:hidden}.modal-dialog-scrollable .modal-header,.modal-dialog-scrollable .modal-footer{-ms-flex-negative:0;flex-shrink:0}.modal-dialog-scrollable .modal-body{overflow-y:auto}.modal-dialog-centered{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;min-height:calc(100% - 1rem)}.modal-dialog-centered::before{display:block;height:calc(100vh - 1rem);content:\"\"}.modal-dialog-centered.modal-dialog-scrollable{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;height:100%}.modal-dialog-centered.modal-dialog-scrollable .modal-content{max-height:none}.modal-dialog-centered.modal-dialog-scrollable::before{content:none}.modal-content{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%;pointer-events:auto;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,0.2);border-radius:.3rem;outline:0}.modal-backdrop{position:fixed;top:0;left:0;z-index:1040;width:100vw;height:100vh;background-color:#000}.modal-backdrop.fade{opacity:0}.modal-backdrop.show{opacity:.5}.modal-header{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding:1rem 1rem;border-bottom:1px solid #dee2e6;border-top-left-radius:.3rem;border-top-right-radius:.3rem}.modal-header .close{padding:1rem 1rem;margin:-1rem -1rem -1rem auto}.modal-title{margin-bottom:0;line-height:1.5}.modal-body{position:relative;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;padding:1rem}.modal-footer{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;padding:1rem;border-top:1px solid #dee2e6;border-bottom-right-radius:.3rem;border-bottom-left-radius:.3rem}.modal-footer>:not(:first-child){margin-left:.25rem}.modal-footer>:not(:last-child){margin-right:.25rem}.modal-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}@media (min-width: 576px){.modal-dialog{max-width:500px;margin:1.75rem auto}.modal-dialog-scrollable{max-height:calc(100% - 3.5rem)}.modal-dialog-scrollable .modal-content{max-height:calc(100vh - 3.5rem)}.modal-dialog-centered{min-height:calc(100% - 3.5rem)}.modal-dialog-centered::before{height:calc(100vh - 3.5rem)}.modal-sm{max-width:300px}}@media (min-width: 992px){.modal-lg,.modal-xl{max-width:800px}}@media (min-width: 1200px){.modal-xl{max-width:1140px}}.tooltip{position:absolute;z-index:1070;display:block;margin:0;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";font-style:normal;font-weight:400;line-height:1.5;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;word-spacing:normal;white-space:normal;line-break:auto;font-size:.875rem;word-wrap:break-word;opacity:0}.tooltip.show{opacity:.9}.tooltip .arrow{position:absolute;display:block;width:.8rem;height:.4rem}.tooltip .arrow::before{position:absolute;content:\"\";border-color:transparent;border-style:solid}.bs-tooltip-top,.bs-tooltip-auto[x-placement^=\"top\"]{padding:.4rem 0}.bs-tooltip-top .arrow,.bs-tooltip-auto[x-placement^=\"top\"] .arrow{bottom:0}.bs-tooltip-top .arrow::before,.bs-tooltip-auto[x-placement^=\"top\"] .arrow::before{top:0;border-width:.4rem .4rem 0;border-top-color:#000}.bs-tooltip-right,.bs-tooltip-auto[x-placement^=\"right\"]{padding:0 .4rem}.bs-tooltip-right .arrow,.bs-tooltip-auto[x-placement^=\"right\"] .arrow{left:0;width:.4rem;height:.8rem}.bs-tooltip-right .arrow::before,.bs-tooltip-auto[x-placement^=\"right\"] .arrow::before{right:0;border-width:.4rem .4rem .4rem 0;border-right-color:#000}.bs-tooltip-bottom,.bs-tooltip-auto[x-placement^=\"bottom\"]{padding:.4rem 0}.bs-tooltip-bottom .arrow,.bs-tooltip-auto[x-placement^=\"bottom\"] .arrow{top:0}.bs-tooltip-bottom .arrow::before,.bs-tooltip-auto[x-placement^=\"bottom\"] .arrow::before{bottom:0;border-width:0 .4rem .4rem;border-bottom-color:#000}.bs-tooltip-left,.bs-tooltip-auto[x-placement^=\"left\"]{padding:0 .4rem}.bs-tooltip-left .arrow,.bs-tooltip-auto[x-placement^=\"left\"] .arrow{right:0;width:.4rem;height:.8rem}.bs-tooltip-left .arrow::before,.bs-tooltip-auto[x-placement^=\"left\"] .arrow::before{left:0;border-width:.4rem 0 .4rem .4rem;border-left-color:#000}.tooltip-inner{max-width:200px;padding:.25rem .5rem;color:#fff;text-align:center;background-color:#000;border-radius:.25rem}.popover{position:absolute;top:0;left:0;z-index:1060;display:block;max-width:276px;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";font-style:normal;font-weight:400;line-height:1.5;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;word-spacing:normal;white-space:normal;line-break:auto;font-size:.875rem;word-wrap:break-word;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,0.2);border-radius:.3rem}.popover .arrow{position:absolute;display:block;width:1rem;height:.5rem;margin:0 .3rem}.popover .arrow::before,.popover .arrow::after{position:absolute;display:block;content:\"\";border-color:transparent;border-style:solid}.bs-popover-top,.bs-popover-auto[x-placement^=\"top\"]{margin-bottom:.5rem}.bs-popover-top>.arrow,.bs-popover-auto[x-placement^=\"top\"]>.arrow{bottom:calc((.5rem + 1px) * -1)}.bs-popover-top>.arrow::before,.bs-popover-auto[x-placement^=\"top\"]>.arrow::before{bottom:0;border-width:.5rem .5rem 0;border-top-color:rgba(0,0,0,0.25)}.bs-popover-top>.arrow::after,.bs-popover-auto[x-placement^=\"top\"]>.arrow::after{bottom:1px;border-width:.5rem .5rem 0;border-top-color:#fff}.bs-popover-right,.bs-popover-auto[x-placement^=\"right\"]{margin-left:.5rem}.bs-popover-right>.arrow,.bs-popover-auto[x-placement^=\"right\"]>.arrow{left:calc((.5rem + 1px) * -1);width:.5rem;height:1rem;margin:.3rem 0}.bs-popover-right>.arrow::before,.bs-popover-auto[x-placement^=\"right\"]>.arrow::before{left:0;border-width:.5rem .5rem .5rem 0;border-right-color:rgba(0,0,0,0.25)}.bs-popover-right>.arrow::after,.bs-popover-auto[x-placement^=\"right\"]>.arrow::after{left:1px;border-width:.5rem .5rem .5rem 0;border-right-color:#fff}.bs-popover-bottom,.bs-popover-auto[x-placement^=\"bottom\"]{margin-top:.5rem}.bs-popover-bottom>.arrow,.bs-popover-auto[x-placement^=\"bottom\"]>.arrow{top:calc((.5rem + 1px) * -1)}.bs-popover-bottom>.arrow::before,.bs-popover-auto[x-placement^=\"bottom\"]>.arrow::before{top:0;border-width:0 .5rem .5rem .5rem;border-bottom-color:rgba(0,0,0,0.25)}.bs-popover-bottom>.arrow::after,.bs-popover-auto[x-placement^=\"bottom\"]>.arrow::after{top:1px;border-width:0 .5rem .5rem .5rem;border-bottom-color:#fff}.bs-popover-bottom .popover-header::before,.bs-popover-auto[x-placement^=\"bottom\"] .popover-header::before{position:absolute;top:0;left:50%;display:block;width:1rem;margin-left:-.5rem;content:\"\";border-bottom:1px solid #f7f7f7}.bs-popover-left,.bs-popover-auto[x-placement^=\"left\"]{margin-right:.5rem}.bs-popover-left>.arrow,.bs-popover-auto[x-placement^=\"left\"]>.arrow{right:calc((.5rem + 1px) * -1);width:.5rem;height:1rem;margin:.3rem 0}.bs-popover-left>.arrow::before,.bs-popover-auto[x-placement^=\"left\"]>.arrow::before{right:0;border-width:.5rem 0 .5rem .5rem;border-left-color:rgba(0,0,0,0.25)}.bs-popover-left>.arrow::after,.bs-popover-auto[x-placement^=\"left\"]>.arrow::after{right:1px;border-width:.5rem 0 .5rem .5rem;border-left-color:#fff}.popover-header{padding:.5rem .75rem;margin-bottom:0;font-size:1rem;background-color:#f7f7f7;border-bottom:1px solid #ebebeb;border-top-left-radius:calc(.3rem - 1px);border-top-right-radius:calc(.3rem - 1px)}.popover-header:empty{display:none}.popover-body{padding:.5rem .75rem;color:#212529}.carousel{position:relative}.carousel.pointer-event{-ms-touch-action:pan-y;touch-action:pan-y}.carousel-inner{position:relative;width:100%;overflow:hidden}.carousel-inner::after{display:block;clear:both;content:\"\"}.carousel-item{position:relative;display:none;float:left;width:100%;margin-right:-100%;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-transition:-webkit-transform .6s ease-in-out;transition:-webkit-transform .6s ease-in-out;transition:transform .6s ease-in-out;transition:transform .6s ease-in-out, -webkit-transform .6s ease-in-out}@media (prefers-reduced-motion: reduce){.carousel-item{-webkit-transition:none;transition:none}}.carousel-item.active,.carousel-item-next,.carousel-item-prev{display:block}.carousel-item-next:not(.carousel-item-left),.active.carousel-item-right{-webkit-transform:translateX(100%);transform:translateX(100%)}.carousel-item-prev:not(.carousel-item-right),.active.carousel-item-left{-webkit-transform:translateX(-100%);transform:translateX(-100%)}.carousel-fade .carousel-item{opacity:0;-webkit-transition-property:opacity;transition-property:opacity;-webkit-transform:none;transform:none}.carousel-fade .carousel-item.active,.carousel-fade .carousel-item-next.carousel-item-left,.carousel-fade .carousel-item-prev.carousel-item-right{z-index:1;opacity:1}.carousel-fade .active.carousel-item-left,.carousel-fade .active.carousel-item-right{z-index:0;opacity:0;-webkit-transition:0s .6s opacity;transition:0s .6s opacity}@media (prefers-reduced-motion: reduce){.carousel-fade .active.carousel-item-left,.carousel-fade .active.carousel-item-right{-webkit-transition:none;transition:none}}.carousel-control-prev,.carousel-control-next{position:absolute;top:0;bottom:0;z-index:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:15%;color:#fff;text-align:center;opacity:.5;-webkit-transition:opacity 0.15s ease;transition:opacity 0.15s ease}@media (prefers-reduced-motion: reduce){.carousel-control-prev,.carousel-control-next{-webkit-transition:none;transition:none}}.carousel-control-prev:hover,.carousel-control-prev:focus,.carousel-control-next:hover,.carousel-control-next:focus{color:#fff;text-decoration:none;outline:0;opacity:.9}.carousel-control-prev{left:0}.carousel-control-next{right:0}.carousel-control-prev-icon,.carousel-control-next-icon{display:inline-block;width:20px;height:20px;background:no-repeat 50% / 100% 100%}.carousel-control-prev-icon{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3e%3cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3e%3c/svg%3e\")}.carousel-control-next-icon{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3e%3cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3e%3c/svg%3e\")}.carousel-indicators{position:absolute;right:0;bottom:0;left:0;z-index:15;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding-left:0;margin-right:15%;margin-left:15%;list-style:none}.carousel-indicators li{-webkit-box-sizing:content-box;box-sizing:content-box;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;width:30px;height:3px;margin-right:3px;margin-left:3px;text-indent:-999px;cursor:pointer;background-color:#fff;background-clip:padding-box;border-top:10px solid transparent;border-bottom:10px solid transparent;opacity:.5;-webkit-transition:opacity 0.6s ease;transition:opacity 0.6s ease}@media (prefers-reduced-motion: reduce){.carousel-indicators li{-webkit-transition:none;transition:none}}.carousel-indicators .active{opacity:1}.carousel-caption{position:absolute;right:15%;bottom:20px;left:15%;z-index:10;padding-top:20px;padding-bottom:20px;color:#fff;text-align:center}@-webkit-keyframes spinner-border{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner-border{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.spinner-border{display:inline-block;width:2rem;height:2rem;vertical-align:text-bottom;border:.25em solid currentColor;border-right-color:transparent;border-radius:50%;-webkit-animation:spinner-border .75s linear infinite;animation:spinner-border .75s linear infinite}.spinner-border-sm{width:1rem;height:1rem;border-width:.2em}@-webkit-keyframes spinner-grow{0%{-webkit-transform:scale(0);transform:scale(0)}50%{opacity:1}}@keyframes spinner-grow{0%{-webkit-transform:scale(0);transform:scale(0)}50%{opacity:1}}.spinner-grow{display:inline-block;width:2rem;height:2rem;vertical-align:text-bottom;background-color:currentColor;border-radius:50%;opacity:0;-webkit-animation:spinner-grow .75s linear infinite;animation:spinner-grow .75s linear infinite}.spinner-grow-sm{width:1rem;height:1rem}.align-baseline{vertical-align:baseline !important}.align-top{vertical-align:top !important}.align-middle{vertical-align:middle !important}.align-bottom{vertical-align:bottom !important}.align-text-bottom{vertical-align:text-bottom !important}.align-text-top{vertical-align:text-top !important}.bg-primary{background-color:#007bff !important}a.bg-primary:hover,a.bg-primary:focus,button.bg-primary:hover,button.bg-primary:focus{background-color:#0062cc !important}.bg-secondary{background-color:#6c757d !important}a.bg-secondary:hover,a.bg-secondary:focus,button.bg-secondary:hover,button.bg-secondary:focus{background-color:#545b62 !important}.bg-success{background-color:#28a745 !important}a.bg-success:hover,a.bg-success:focus,button.bg-success:hover,button.bg-success:focus{background-color:#1e7e34 !important}.bg-info{background-color:#17a2b8 !important}a.bg-info:hover,a.bg-info:focus,button.bg-info:hover,button.bg-info:focus{background-color:#117a8b !important}.bg-warning{background-color:#ffc107 !important}a.bg-warning:hover,a.bg-warning:focus,button.bg-warning:hover,button.bg-warning:focus{background-color:#d39e00 !important}.bg-danger{background-color:#dc3545 !important}a.bg-danger:hover,a.bg-danger:focus,button.bg-danger:hover,button.bg-danger:focus{background-color:#bd2130 !important}.bg-light{background-color:#f8f9fa !important}a.bg-light:hover,a.bg-light:focus,button.bg-light:hover,button.bg-light:focus{background-color:#dae0e5 !important}.bg-dark{background-color:#343a40 !important}a.bg-dark:hover,a.bg-dark:focus,button.bg-dark:hover,button.bg-dark:focus{background-color:#1d2124 !important}.bg-white{background-color:#fff !important}.bg-transparent{background-color:transparent !important}.border{border:1px solid #dee2e6 !important}.border-top{border-top:1px solid #dee2e6 !important}.border-right{border-right:1px solid #dee2e6 !important}.border-bottom{border-bottom:1px solid #dee2e6 !important}.border-left{border-left:1px solid #dee2e6 !important}.border-0{border:0 !important}.border-top-0{border-top:0 !important}.border-right-0{border-right:0 !important}.border-bottom-0{border-bottom:0 !important}.border-left-0{border-left:0 !important}.border-primary{border-color:#007bff !important}.border-secondary{border-color:#6c757d !important}.border-success{border-color:#28a745 !important}.border-info{border-color:#17a2b8 !important}.border-warning{border-color:#ffc107 !important}.border-danger{border-color:#dc3545 !important}.border-light{border-color:#f8f9fa !important}.border-dark{border-color:#343a40 !important}.border-white{border-color:#fff !important}.rounded-sm{border-radius:.2rem !important}.rounded{border-radius:.25rem !important}.rounded-top{border-top-left-radius:.25rem !important;border-top-right-radius:.25rem !important}.rounded-right{border-top-right-radius:.25rem !important;border-bottom-right-radius:.25rem !important}.rounded-bottom{border-bottom-right-radius:.25rem !important;border-bottom-left-radius:.25rem !important}.rounded-left{border-top-left-radius:.25rem !important;border-bottom-left-radius:.25rem !important}.rounded-lg{border-radius:.3rem !important}.rounded-circle{border-radius:50% !important}.rounded-pill{border-radius:50rem !important}.rounded-0{border-radius:0 !important}.clearfix::after{display:block;clear:both;content:\"\"}.d-none{display:none !important}.d-inline{display:inline !important}.d-inline-block{display:inline-block !important}.d-block{display:block !important}.d-table{display:table !important}.d-table-row{display:table-row !important}.d-table-cell{display:table-cell !important}.d-flex{display:-webkit-box !important;display:-ms-flexbox !important;display:flex !important}.d-inline-flex{display:-webkit-inline-box !important;display:-ms-inline-flexbox !important;display:inline-flex !important}@media (min-width: 420px){.d-xs-none{display:none !important}.d-xs-inline{display:inline !important}.d-xs-inline-block{display:inline-block !important}.d-xs-block{display:block !important}.d-xs-table{display:table !important}.d-xs-table-row{display:table-row !important}.d-xs-table-cell{display:table-cell !important}.d-xs-flex{display:-webkit-box !important;display:-ms-flexbox !important;display:flex !important}.d-xs-inline-flex{display:-webkit-inline-box !important;display:-ms-inline-flexbox !important;display:inline-flex !important}}@media (min-width: 576px){.d-sm-none{display:none !important}.d-sm-inline{display:inline !important}.d-sm-inline-block{display:inline-block !important}.d-sm-block{display:block !important}.d-sm-table{display:table !important}.d-sm-table-row{display:table-row !important}.d-sm-table-cell{display:table-cell !important}.d-sm-flex{display:-webkit-box !important;display:-ms-flexbox !important;display:flex !important}.d-sm-inline-flex{display:-webkit-inline-box !important;display:-ms-inline-flexbox !important;display:inline-flex !important}}@media (min-width: 768px){.d-md-none{display:none !important}.d-md-inline{display:inline !important}.d-md-inline-block{display:inline-block !important}.d-md-block{display:block !important}.d-md-table{display:table !important}.d-md-table-row{display:table-row !important}.d-md-table-cell{display:table-cell !important}.d-md-flex{display:-webkit-box !important;display:-ms-flexbox !important;display:flex !important}.d-md-inline-flex{display:-webkit-inline-box !important;display:-ms-inline-flexbox !important;display:inline-flex !important}}@media (min-width: 992px){.d-lg-none{display:none !important}.d-lg-inline{display:inline !important}.d-lg-inline-block{display:inline-block !important}.d-lg-block{display:block !important}.d-lg-table{display:table !important}.d-lg-table-row{display:table-row !important}.d-lg-table-cell{display:table-cell !important}.d-lg-flex{display:-webkit-box !important;display:-ms-flexbox !important;display:flex !important}.d-lg-inline-flex{display:-webkit-inline-box !important;display:-ms-inline-flexbox !important;display:inline-flex !important}}@media (min-width: 1200px){.d-xl-none{display:none !important}.d-xl-inline{display:inline !important}.d-xl-inline-block{display:inline-block !important}.d-xl-block{display:block !important}.d-xl-table{display:table !important}.d-xl-table-row{display:table-row !important}.d-xl-table-cell{display:table-cell !important}.d-xl-flex{display:-webkit-box !important;display:-ms-flexbox !important;display:flex !important}.d-xl-inline-flex{display:-webkit-inline-box !important;display:-ms-inline-flexbox !important;display:inline-flex !important}}@media (min-width: 1440px){.d-xxl-none{display:none !important}.d-xxl-inline{display:inline !important}.d-xxl-inline-block{display:inline-block !important}.d-xxl-block{display:block !important}.d-xxl-table{display:table !important}.d-xxl-table-row{display:table-row !important}.d-xxl-table-cell{display:table-cell !important}.d-xxl-flex{display:-webkit-box !important;display:-ms-flexbox !important;display:flex !important}.d-xxl-inline-flex{display:-webkit-inline-box !important;display:-ms-inline-flexbox !important;display:inline-flex !important}}@media print{.d-print-none{display:none !important}.d-print-inline{display:inline !important}.d-print-inline-block{display:inline-block !important}.d-print-block{display:block !important}.d-print-table{display:table !important}.d-print-table-row{display:table-row !important}.d-print-table-cell{display:table-cell !important}.d-print-flex{display:-webkit-box !important;display:-ms-flexbox !important;display:flex !important}.d-print-inline-flex{display:-webkit-inline-box !important;display:-ms-inline-flexbox !important;display:inline-flex !important}}.embed-responsive{position:relative;display:block;width:100%;padding:0;overflow:hidden}.embed-responsive::before{display:block;content:\"\"}.embed-responsive .embed-responsive-item,.embed-responsive iframe,.embed-responsive embed,.embed-responsive object,.embed-responsive video{position:absolute;top:0;bottom:0;left:0;width:100%;height:100%;border:0}.embed-responsive-21by9::before{padding-top:42.85714%}.embed-responsive-16by9::before{padding-top:56.25%}.embed-responsive-4by3::before{padding-top:75%}.embed-responsive-1by1::before{padding-top:100%}.flex-row{-webkit-box-orient:horizontal !important;-webkit-box-direction:normal !important;-ms-flex-direction:row !important;flex-direction:row !important}.flex-column{-webkit-box-orient:vertical !important;-webkit-box-direction:normal !important;-ms-flex-direction:column !important;flex-direction:column !important}.flex-row-reverse{-webkit-box-orient:horizontal !important;-webkit-box-direction:reverse !important;-ms-flex-direction:row-reverse !important;flex-direction:row-reverse !important}.flex-column-reverse{-webkit-box-orient:vertical !important;-webkit-box-direction:reverse !important;-ms-flex-direction:column-reverse !important;flex-direction:column-reverse !important}.flex-wrap{-ms-flex-wrap:wrap !important;flex-wrap:wrap !important}.flex-nowrap{-ms-flex-wrap:nowrap !important;flex-wrap:nowrap !important}.flex-wrap-reverse{-ms-flex-wrap:wrap-reverse !important;flex-wrap:wrap-reverse !important}.flex-fill{-webkit-box-flex:1 !important;-ms-flex:1 1 auto !important;flex:1 1 auto !important}.flex-grow-0{-webkit-box-flex:0 !important;-ms-flex-positive:0 !important;flex-grow:0 !important}.flex-grow-1{-webkit-box-flex:1 !important;-ms-flex-positive:1 !important;flex-grow:1 !important}.flex-shrink-0{-ms-flex-negative:0 !important;flex-shrink:0 !important}.flex-shrink-1{-ms-flex-negative:1 !important;flex-shrink:1 !important}.justify-content-start{-webkit-box-pack:start !important;-ms-flex-pack:start !important;justify-content:flex-start !important}.justify-content-end{-webkit-box-pack:end !important;-ms-flex-pack:end !important;justify-content:flex-end !important}.justify-content-center{-webkit-box-pack:center !important;-ms-flex-pack:center !important;justify-content:center !important}.justify-content-between{-webkit-box-pack:justify !important;-ms-flex-pack:justify !important;justify-content:space-between !important}.justify-content-around{-ms-flex-pack:distribute !important;justify-content:space-around !important}.align-items-start{-webkit-box-align:start !important;-ms-flex-align:start !important;align-items:flex-start !important}.align-items-end{-webkit-box-align:end !important;-ms-flex-align:end !important;align-items:flex-end !important}.align-items-center{-webkit-box-align:center !important;-ms-flex-align:center !important;align-items:center !important}.align-items-baseline{-webkit-box-align:baseline !important;-ms-flex-align:baseline !important;align-items:baseline !important}.align-items-stretch{-webkit-box-align:stretch !important;-ms-flex-align:stretch !important;align-items:stretch !important}.align-content-start{-ms-flex-line-pack:start !important;align-content:flex-start !important}.align-content-end{-ms-flex-line-pack:end !important;align-content:flex-end !important}.align-content-center{-ms-flex-line-pack:center !important;align-content:center !important}.align-content-between{-ms-flex-line-pack:justify !important;align-content:space-between !important}.align-content-around{-ms-flex-line-pack:distribute !important;align-content:space-around !important}.align-content-stretch{-ms-flex-line-pack:stretch !important;align-content:stretch !important}.align-self-auto{-ms-flex-item-align:auto !important;-ms-grid-row-align:auto !important;align-self:auto !important}.align-self-start{-ms-flex-item-align:start !important;align-self:flex-start !important}.align-self-end{-ms-flex-item-align:end !important;align-self:flex-end !important}.align-self-center{-ms-flex-item-align:center !important;-ms-grid-row-align:center !important;align-self:center !important}.align-self-baseline{-ms-flex-item-align:baseline !important;align-self:baseline !important}.align-self-stretch{-ms-flex-item-align:stretch !important;-ms-grid-row-align:stretch !important;align-self:stretch !important}@media (min-width: 420px){.flex-xs-row{-webkit-box-orient:horizontal !important;-webkit-box-direction:normal !important;-ms-flex-direction:row !important;flex-direction:row !important}.flex-xs-column{-webkit-box-orient:vertical !important;-webkit-box-direction:normal !important;-ms-flex-direction:column !important;flex-direction:column !important}.flex-xs-row-reverse{-webkit-box-orient:horizontal !important;-webkit-box-direction:reverse !important;-ms-flex-direction:row-reverse !important;flex-direction:row-reverse !important}.flex-xs-column-reverse{-webkit-box-orient:vertical !important;-webkit-box-direction:reverse !important;-ms-flex-direction:column-reverse !important;flex-direction:column-reverse !important}.flex-xs-wrap{-ms-flex-wrap:wrap !important;flex-wrap:wrap !important}.flex-xs-nowrap{-ms-flex-wrap:nowrap !important;flex-wrap:nowrap !important}.flex-xs-wrap-reverse{-ms-flex-wrap:wrap-reverse !important;flex-wrap:wrap-reverse !important}.flex-xs-fill{-webkit-box-flex:1 !important;-ms-flex:1 1 auto !important;flex:1 1 auto !important}.flex-xs-grow-0{-webkit-box-flex:0 !important;-ms-flex-positive:0 !important;flex-grow:0 !important}.flex-xs-grow-1{-webkit-box-flex:1 !important;-ms-flex-positive:1 !important;flex-grow:1 !important}.flex-xs-shrink-0{-ms-flex-negative:0 !important;flex-shrink:0 !important}.flex-xs-shrink-1{-ms-flex-negative:1 !important;flex-shrink:1 !important}.justify-content-xs-start{-webkit-box-pack:start !important;-ms-flex-pack:start !important;justify-content:flex-start !important}.justify-content-xs-end{-webkit-box-pack:end !important;-ms-flex-pack:end !important;justify-content:flex-end !important}.justify-content-xs-center{-webkit-box-pack:center !important;-ms-flex-pack:center !important;justify-content:center !important}.justify-content-xs-between{-webkit-box-pack:justify !important;-ms-flex-pack:justify !important;justify-content:space-between !important}.justify-content-xs-around{-ms-flex-pack:distribute !important;justify-content:space-around !important}.align-items-xs-start{-webkit-box-align:start !important;-ms-flex-align:start !important;align-items:flex-start !important}.align-items-xs-end{-webkit-box-align:end !important;-ms-flex-align:end !important;align-items:flex-end !important}.align-items-xs-center{-webkit-box-align:center !important;-ms-flex-align:center !important;align-items:center !important}.align-items-xs-baseline{-webkit-box-align:baseline !important;-ms-flex-align:baseline !important;align-items:baseline !important}.align-items-xs-stretch{-webkit-box-align:stretch !important;-ms-flex-align:stretch !important;align-items:stretch !important}.align-content-xs-start{-ms-flex-line-pack:start !important;align-content:flex-start !important}.align-content-xs-end{-ms-flex-line-pack:end !important;align-content:flex-end !important}.align-content-xs-center{-ms-flex-line-pack:center !important;align-content:center !important}.align-content-xs-between{-ms-flex-line-pack:justify !important;align-content:space-between !important}.align-content-xs-around{-ms-flex-line-pack:distribute !important;align-content:space-around !important}.align-content-xs-stretch{-ms-flex-line-pack:stretch !important;align-content:stretch !important}.align-self-xs-auto{-ms-flex-item-align:auto !important;-ms-grid-row-align:auto !important;align-self:auto !important}.align-self-xs-start{-ms-flex-item-align:start !important;align-self:flex-start !important}.align-self-xs-end{-ms-flex-item-align:end !important;align-self:flex-end !important}.align-self-xs-center{-ms-flex-item-align:center !important;-ms-grid-row-align:center !important;align-self:center !important}.align-self-xs-baseline{-ms-flex-item-align:baseline !important;align-self:baseline !important}.align-self-xs-stretch{-ms-flex-item-align:stretch !important;-ms-grid-row-align:stretch !important;align-self:stretch !important}}@media (min-width: 576px){.flex-sm-row{-webkit-box-orient:horizontal !important;-webkit-box-direction:normal !important;-ms-flex-direction:row !important;flex-direction:row !important}.flex-sm-column{-webkit-box-orient:vertical !important;-webkit-box-direction:normal !important;-ms-flex-direction:column !important;flex-direction:column !important}.flex-sm-row-reverse{-webkit-box-orient:horizontal !important;-webkit-box-direction:reverse !important;-ms-flex-direction:row-reverse !important;flex-direction:row-reverse !important}.flex-sm-column-reverse{-webkit-box-orient:vertical !important;-webkit-box-direction:reverse !important;-ms-flex-direction:column-reverse !important;flex-direction:column-reverse !important}.flex-sm-wrap{-ms-flex-wrap:wrap !important;flex-wrap:wrap !important}.flex-sm-nowrap{-ms-flex-wrap:nowrap !important;flex-wrap:nowrap !important}.flex-sm-wrap-reverse{-ms-flex-wrap:wrap-reverse !important;flex-wrap:wrap-reverse !important}.flex-sm-fill{-webkit-box-flex:1 !important;-ms-flex:1 1 auto !important;flex:1 1 auto !important}.flex-sm-grow-0{-webkit-box-flex:0 !important;-ms-flex-positive:0 !important;flex-grow:0 !important}.flex-sm-grow-1{-webkit-box-flex:1 !important;-ms-flex-positive:1 !important;flex-grow:1 !important}.flex-sm-shrink-0{-ms-flex-negative:0 !important;flex-shrink:0 !important}.flex-sm-shrink-1{-ms-flex-negative:1 !important;flex-shrink:1 !important}.justify-content-sm-start{-webkit-box-pack:start !important;-ms-flex-pack:start !important;justify-content:flex-start !important}.justify-content-sm-end{-webkit-box-pack:end !important;-ms-flex-pack:end !important;justify-content:flex-end !important}.justify-content-sm-center{-webkit-box-pack:center !important;-ms-flex-pack:center !important;justify-content:center !important}.justify-content-sm-between{-webkit-box-pack:justify !important;-ms-flex-pack:justify !important;justify-content:space-between !important}.justify-content-sm-around{-ms-flex-pack:distribute !important;justify-content:space-around !important}.align-items-sm-start{-webkit-box-align:start !important;-ms-flex-align:start !important;align-items:flex-start !important}.align-items-sm-end{-webkit-box-align:end !important;-ms-flex-align:end !important;align-items:flex-end !important}.align-items-sm-center{-webkit-box-align:center !important;-ms-flex-align:center !important;align-items:center !important}.align-items-sm-baseline{-webkit-box-align:baseline !important;-ms-flex-align:baseline !important;align-items:baseline !important}.align-items-sm-stretch{-webkit-box-align:stretch !important;-ms-flex-align:stretch !important;align-items:stretch !important}.align-content-sm-start{-ms-flex-line-pack:start !important;align-content:flex-start !important}.align-content-sm-end{-ms-flex-line-pack:end !important;align-content:flex-end !important}.align-content-sm-center{-ms-flex-line-pack:center !important;align-content:center !important}.align-content-sm-between{-ms-flex-line-pack:justify !important;align-content:space-between !important}.align-content-sm-around{-ms-flex-line-pack:distribute !important;align-content:space-around !important}.align-content-sm-stretch{-ms-flex-line-pack:stretch !important;align-content:stretch !important}.align-self-sm-auto{-ms-flex-item-align:auto !important;-ms-grid-row-align:auto !important;align-self:auto !important}.align-self-sm-start{-ms-flex-item-align:start !important;align-self:flex-start !important}.align-self-sm-end{-ms-flex-item-align:end !important;align-self:flex-end !important}.align-self-sm-center{-ms-flex-item-align:center !important;-ms-grid-row-align:center !important;align-self:center !important}.align-self-sm-baseline{-ms-flex-item-align:baseline !important;align-self:baseline !important}.align-self-sm-stretch{-ms-flex-item-align:stretch !important;-ms-grid-row-align:stretch !important;align-self:stretch !important}}@media (min-width: 768px){.flex-md-row{-webkit-box-orient:horizontal !important;-webkit-box-direction:normal !important;-ms-flex-direction:row !important;flex-direction:row !important}.flex-md-column{-webkit-box-orient:vertical !important;-webkit-box-direction:normal !important;-ms-flex-direction:column !important;flex-direction:column !important}.flex-md-row-reverse{-webkit-box-orient:horizontal !important;-webkit-box-direction:reverse !important;-ms-flex-direction:row-reverse !important;flex-direction:row-reverse !important}.flex-md-column-reverse{-webkit-box-orient:vertical !important;-webkit-box-direction:reverse !important;-ms-flex-direction:column-reverse !important;flex-direction:column-reverse !important}.flex-md-wrap{-ms-flex-wrap:wrap !important;flex-wrap:wrap !important}.flex-md-nowrap{-ms-flex-wrap:nowrap !important;flex-wrap:nowrap !important}.flex-md-wrap-reverse{-ms-flex-wrap:wrap-reverse !important;flex-wrap:wrap-reverse !important}.flex-md-fill{-webkit-box-flex:1 !important;-ms-flex:1 1 auto !important;flex:1 1 auto !important}.flex-md-grow-0{-webkit-box-flex:0 !important;-ms-flex-positive:0 !important;flex-grow:0 !important}.flex-md-grow-1{-webkit-box-flex:1 !important;-ms-flex-positive:1 !important;flex-grow:1 !important}.flex-md-shrink-0{-ms-flex-negative:0 !important;flex-shrink:0 !important}.flex-md-shrink-1{-ms-flex-negative:1 !important;flex-shrink:1 !important}.justify-content-md-start{-webkit-box-pack:start !important;-ms-flex-pack:start !important;justify-content:flex-start !important}.justify-content-md-end{-webkit-box-pack:end !important;-ms-flex-pack:end !important;justify-content:flex-end !important}.justify-content-md-center{-webkit-box-pack:center !important;-ms-flex-pack:center !important;justify-content:center !important}.justify-content-md-between{-webkit-box-pack:justify !important;-ms-flex-pack:justify !important;justify-content:space-between !important}.justify-content-md-around{-ms-flex-pack:distribute !important;justify-content:space-around !important}.align-items-md-start{-webkit-box-align:start !important;-ms-flex-align:start !important;align-items:flex-start !important}.align-items-md-end{-webkit-box-align:end !important;-ms-flex-align:end !important;align-items:flex-end !important}.align-items-md-center{-webkit-box-align:center !important;-ms-flex-align:center !important;align-items:center !important}.align-items-md-baseline{-webkit-box-align:baseline !important;-ms-flex-align:baseline !important;align-items:baseline !important}.align-items-md-stretch{-webkit-box-align:stretch !important;-ms-flex-align:stretch !important;align-items:stretch !important}.align-content-md-start{-ms-flex-line-pack:start !important;align-content:flex-start !important}.align-content-md-end{-ms-flex-line-pack:end !important;align-content:flex-end !important}.align-content-md-center{-ms-flex-line-pack:center !important;align-content:center !important}.align-content-md-between{-ms-flex-line-pack:justify !important;align-content:space-between !important}.align-content-md-around{-ms-flex-line-pack:distribute !important;align-content:space-around !important}.align-content-md-stretch{-ms-flex-line-pack:stretch !important;align-content:stretch !important}.align-self-md-auto{-ms-flex-item-align:auto !important;-ms-grid-row-align:auto !important;align-self:auto !important}.align-self-md-start{-ms-flex-item-align:start !important;align-self:flex-start !important}.align-self-md-end{-ms-flex-item-align:end !important;align-self:flex-end !important}.align-self-md-center{-ms-flex-item-align:center !important;-ms-grid-row-align:center !important;align-self:center !important}.align-self-md-baseline{-ms-flex-item-align:baseline !important;align-self:baseline !important}.align-self-md-stretch{-ms-flex-item-align:stretch !important;-ms-grid-row-align:stretch !important;align-self:stretch !important}}@media (min-width: 992px){.flex-lg-row{-webkit-box-orient:horizontal !important;-webkit-box-direction:normal !important;-ms-flex-direction:row !important;flex-direction:row !important}.flex-lg-column{-webkit-box-orient:vertical !important;-webkit-box-direction:normal !important;-ms-flex-direction:column !important;flex-direction:column !important}.flex-lg-row-reverse{-webkit-box-orient:horizontal !important;-webkit-box-direction:reverse !important;-ms-flex-direction:row-reverse !important;flex-direction:row-reverse !important}.flex-lg-column-reverse{-webkit-box-orient:vertical !important;-webkit-box-direction:reverse !important;-ms-flex-direction:column-reverse !important;flex-direction:column-reverse !important}.flex-lg-wrap{-ms-flex-wrap:wrap !important;flex-wrap:wrap !important}.flex-lg-nowrap{-ms-flex-wrap:nowrap !important;flex-wrap:nowrap !important}.flex-lg-wrap-reverse{-ms-flex-wrap:wrap-reverse !important;flex-wrap:wrap-reverse !important}.flex-lg-fill{-webkit-box-flex:1 !important;-ms-flex:1 1 auto !important;flex:1 1 auto !important}.flex-lg-grow-0{-webkit-box-flex:0 !important;-ms-flex-positive:0 !important;flex-grow:0 !important}.flex-lg-grow-1{-webkit-box-flex:1 !important;-ms-flex-positive:1 !important;flex-grow:1 !important}.flex-lg-shrink-0{-ms-flex-negative:0 !important;flex-shrink:0 !important}.flex-lg-shrink-1{-ms-flex-negative:1 !important;flex-shrink:1 !important}.justify-content-lg-start{-webkit-box-pack:start !important;-ms-flex-pack:start !important;justify-content:flex-start !important}.justify-content-lg-end{-webkit-box-pack:end !important;-ms-flex-pack:end !important;justify-content:flex-end !important}.justify-content-lg-center{-webkit-box-pack:center !important;-ms-flex-pack:center !important;justify-content:center !important}.justify-content-lg-between{-webkit-box-pack:justify !important;-ms-flex-pack:justify !important;justify-content:space-between !important}.justify-content-lg-around{-ms-flex-pack:distribute !important;justify-content:space-around !important}.align-items-lg-start{-webkit-box-align:start !important;-ms-flex-align:start !important;align-items:flex-start !important}.align-items-lg-end{-webkit-box-align:end !important;-ms-flex-align:end !important;align-items:flex-end !important}.align-items-lg-center{-webkit-box-align:center !important;-ms-flex-align:center !important;align-items:center !important}.align-items-lg-baseline{-webkit-box-align:baseline !important;-ms-flex-align:baseline !important;align-items:baseline !important}.align-items-lg-stretch{-webkit-box-align:stretch !important;-ms-flex-align:stretch !important;align-items:stretch !important}.align-content-lg-start{-ms-flex-line-pack:start !important;align-content:flex-start !important}.align-content-lg-end{-ms-flex-line-pack:end !important;align-content:flex-end !important}.align-content-lg-center{-ms-flex-line-pack:center !important;align-content:center !important}.align-content-lg-between{-ms-flex-line-pack:justify !important;align-content:space-between !important}.align-content-lg-around{-ms-flex-line-pack:distribute !important;align-content:space-around !important}.align-content-lg-stretch{-ms-flex-line-pack:stretch !important;align-content:stretch !important}.align-self-lg-auto{-ms-flex-item-align:auto !important;-ms-grid-row-align:auto !important;align-self:auto !important}.align-self-lg-start{-ms-flex-item-align:start !important;align-self:flex-start !important}.align-self-lg-end{-ms-flex-item-align:end !important;align-self:flex-end !important}.align-self-lg-center{-ms-flex-item-align:center !important;-ms-grid-row-align:center !important;align-self:center !important}.align-self-lg-baseline{-ms-flex-item-align:baseline !important;align-self:baseline !important}.align-self-lg-stretch{-ms-flex-item-align:stretch !important;-ms-grid-row-align:stretch !important;align-self:stretch !important}}@media (min-width: 1200px){.flex-xl-row{-webkit-box-orient:horizontal !important;-webkit-box-direction:normal !important;-ms-flex-direction:row !important;flex-direction:row !important}.flex-xl-column{-webkit-box-orient:vertical !important;-webkit-box-direction:normal !important;-ms-flex-direction:column !important;flex-direction:column !important}.flex-xl-row-reverse{-webkit-box-orient:horizontal !important;-webkit-box-direction:reverse !important;-ms-flex-direction:row-reverse !important;flex-direction:row-reverse !important}.flex-xl-column-reverse{-webkit-box-orient:vertical !important;-webkit-box-direction:reverse !important;-ms-flex-direction:column-reverse !important;flex-direction:column-reverse !important}.flex-xl-wrap{-ms-flex-wrap:wrap !important;flex-wrap:wrap !important}.flex-xl-nowrap{-ms-flex-wrap:nowrap !important;flex-wrap:nowrap !important}.flex-xl-wrap-reverse{-ms-flex-wrap:wrap-reverse !important;flex-wrap:wrap-reverse !important}.flex-xl-fill{-webkit-box-flex:1 !important;-ms-flex:1 1 auto !important;flex:1 1 auto !important}.flex-xl-grow-0{-webkit-box-flex:0 !important;-ms-flex-positive:0 !important;flex-grow:0 !important}.flex-xl-grow-1{-webkit-box-flex:1 !important;-ms-flex-positive:1 !important;flex-grow:1 !important}.flex-xl-shrink-0{-ms-flex-negative:0 !important;flex-shrink:0 !important}.flex-xl-shrink-1{-ms-flex-negative:1 !important;flex-shrink:1 !important}.justify-content-xl-start{-webkit-box-pack:start !important;-ms-flex-pack:start !important;justify-content:flex-start !important}.justify-content-xl-end{-webkit-box-pack:end !important;-ms-flex-pack:end !important;justify-content:flex-end !important}.justify-content-xl-center{-webkit-box-pack:center !important;-ms-flex-pack:center !important;justify-content:center !important}.justify-content-xl-between{-webkit-box-pack:justify !important;-ms-flex-pack:justify !important;justify-content:space-between !important}.justify-content-xl-around{-ms-flex-pack:distribute !important;justify-content:space-around !important}.align-items-xl-start{-webkit-box-align:start !important;-ms-flex-align:start !important;align-items:flex-start !important}.align-items-xl-end{-webkit-box-align:end !important;-ms-flex-align:end !important;align-items:flex-end !important}.align-items-xl-center{-webkit-box-align:center !important;-ms-flex-align:center !important;align-items:center !important}.align-items-xl-baseline{-webkit-box-align:baseline !important;-ms-flex-align:baseline !important;align-items:baseline !important}.align-items-xl-stretch{-webkit-box-align:stretch !important;-ms-flex-align:stretch !important;align-items:stretch !important}.align-content-xl-start{-ms-flex-line-pack:start !important;align-content:flex-start !important}.align-content-xl-end{-ms-flex-line-pack:end !important;align-content:flex-end !important}.align-content-xl-center{-ms-flex-line-pack:center !important;align-content:center !important}.align-content-xl-between{-ms-flex-line-pack:justify !important;align-content:space-between !important}.align-content-xl-around{-ms-flex-line-pack:distribute !important;align-content:space-around !important}.align-content-xl-stretch{-ms-flex-line-pack:stretch !important;align-content:stretch !important}.align-self-xl-auto{-ms-flex-item-align:auto !important;-ms-grid-row-align:auto !important;align-self:auto !important}.align-self-xl-start{-ms-flex-item-align:start !important;align-self:flex-start !important}.align-self-xl-end{-ms-flex-item-align:end !important;align-self:flex-end !important}.align-self-xl-center{-ms-flex-item-align:center !important;-ms-grid-row-align:center !important;align-self:center !important}.align-self-xl-baseline{-ms-flex-item-align:baseline !important;align-self:baseline !important}.align-self-xl-stretch{-ms-flex-item-align:stretch !important;-ms-grid-row-align:stretch !important;align-self:stretch !important}}@media (min-width: 1440px){.flex-xxl-row{-webkit-box-orient:horizontal !important;-webkit-box-direction:normal !important;-ms-flex-direction:row !important;flex-direction:row !important}.flex-xxl-column{-webkit-box-orient:vertical !important;-webkit-box-direction:normal !important;-ms-flex-direction:column !important;flex-direction:column !important}.flex-xxl-row-reverse{-webkit-box-orient:horizontal !important;-webkit-box-direction:reverse !important;-ms-flex-direction:row-reverse !important;flex-direction:row-reverse !important}.flex-xxl-column-reverse{-webkit-box-orient:vertical !important;-webkit-box-direction:reverse !important;-ms-flex-direction:column-reverse !important;flex-direction:column-reverse !important}.flex-xxl-wrap{-ms-flex-wrap:wrap !important;flex-wrap:wrap !important}.flex-xxl-nowrap{-ms-flex-wrap:nowrap !important;flex-wrap:nowrap !important}.flex-xxl-wrap-reverse{-ms-flex-wrap:wrap-reverse !important;flex-wrap:wrap-reverse !important}.flex-xxl-fill{-webkit-box-flex:1 !important;-ms-flex:1 1 auto !important;flex:1 1 auto !important}.flex-xxl-grow-0{-webkit-box-flex:0 !important;-ms-flex-positive:0 !important;flex-grow:0 !important}.flex-xxl-grow-1{-webkit-box-flex:1 !important;-ms-flex-positive:1 !important;flex-grow:1 !important}.flex-xxl-shrink-0{-ms-flex-negative:0 !important;flex-shrink:0 !important}.flex-xxl-shrink-1{-ms-flex-negative:1 !important;flex-shrink:1 !important}.justify-content-xxl-start{-webkit-box-pack:start !important;-ms-flex-pack:start !important;justify-content:flex-start !important}.justify-content-xxl-end{-webkit-box-pack:end !important;-ms-flex-pack:end !important;justify-content:flex-end !important}.justify-content-xxl-center{-webkit-box-pack:center !important;-ms-flex-pack:center !important;justify-content:center !important}.justify-content-xxl-between{-webkit-box-pack:justify !important;-ms-flex-pack:justify !important;justify-content:space-between !important}.justify-content-xxl-around{-ms-flex-pack:distribute !important;justify-content:space-around !important}.align-items-xxl-start{-webkit-box-align:start !important;-ms-flex-align:start !important;align-items:flex-start !important}.align-items-xxl-end{-webkit-box-align:end !important;-ms-flex-align:end !important;align-items:flex-end !important}.align-items-xxl-center{-webkit-box-align:center !important;-ms-flex-align:center !important;align-items:center !important}.align-items-xxl-baseline{-webkit-box-align:baseline !important;-ms-flex-align:baseline !important;align-items:baseline !important}.align-items-xxl-stretch{-webkit-box-align:stretch !important;-ms-flex-align:stretch !important;align-items:stretch !important}.align-content-xxl-start{-ms-flex-line-pack:start !important;align-content:flex-start !important}.align-content-xxl-end{-ms-flex-line-pack:end !important;align-content:flex-end !important}.align-content-xxl-center{-ms-flex-line-pack:center !important;align-content:center !important}.align-content-xxl-between{-ms-flex-line-pack:justify !important;align-content:space-between !important}.align-content-xxl-around{-ms-flex-line-pack:distribute !important;align-content:space-around !important}.align-content-xxl-stretch{-ms-flex-line-pack:stretch !important;align-content:stretch !important}.align-self-xxl-auto{-ms-flex-item-align:auto !important;-ms-grid-row-align:auto !important;align-self:auto !important}.align-self-xxl-start{-ms-flex-item-align:start !important;align-self:flex-start !important}.align-self-xxl-end{-ms-flex-item-align:end !important;align-self:flex-end !important}.align-self-xxl-center{-ms-flex-item-align:center !important;-ms-grid-row-align:center !important;align-self:center !important}.align-self-xxl-baseline{-ms-flex-item-align:baseline !important;align-self:baseline !important}.align-self-xxl-stretch{-ms-flex-item-align:stretch !important;-ms-grid-row-align:stretch !important;align-self:stretch !important}}.float-left{float:left !important}.float-right{float:right !important}.float-none{float:none !important}@media (min-width: 420px){.float-xs-left{float:left !important}.float-xs-right{float:right !important}.float-xs-none{float:none !important}}@media (min-width: 576px){.float-sm-left{float:left !important}.float-sm-right{float:right !important}.float-sm-none{float:none !important}}@media (min-width: 768px){.float-md-left{float:left !important}.float-md-right{float:right !important}.float-md-none{float:none !important}}@media (min-width: 992px){.float-lg-left{float:left !important}.float-lg-right{float:right !important}.float-lg-none{float:none !important}}@media (min-width: 1200px){.float-xl-left{float:left !important}.float-xl-right{float:right !important}.float-xl-none{float:none !important}}@media (min-width: 1440px){.float-xxl-left{float:left !important}.float-xxl-right{float:right !important}.float-xxl-none{float:none !important}}.overflow-auto{overflow:auto !important}.overflow-hidden{overflow:hidden !important}.position-static{position:static !important}.position-relative{position:relative !important}.position-absolute{position:absolute !important}.position-fixed{position:fixed !important}.position-sticky{position:sticky !important}.fixed-top{position:fixed;top:0;right:0;left:0;z-index:1030}.fixed-bottom{position:fixed;right:0;bottom:0;left:0;z-index:1030}@supports (position: sticky){.sticky-top{position:sticky;top:0;z-index:1020}}.sr-only{position:absolute;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border:0}.sr-only-focusable:active,.sr-only-focusable:focus{position:static;width:auto;height:auto;overflow:visible;clip:auto;white-space:normal}.shadow-sm{-webkit-box-shadow:0 0.125rem 0.25rem rgba(0,0,0,0.075) !important;box-shadow:0 0.125rem 0.25rem rgba(0,0,0,0.075) !important}.shadow{-webkit-box-shadow:0 0.5rem 1rem rgba(0,0,0,0.15) !important;box-shadow:0 0.5rem 1rem rgba(0,0,0,0.15) !important}.shadow-lg{-webkit-box-shadow:0 1rem 3rem rgba(0,0,0,0.175) !important;box-shadow:0 1rem 3rem rgba(0,0,0,0.175) !important}.shadow-none{-webkit-box-shadow:none !important;box-shadow:none !important}.w-25{width:25% !important}.w-50{width:50% !important}.w-75{width:75% !important}.w-100{width:100% !important}.w-auto{width:auto !important}.h-25{height:25% !important}.h-50{height:50% !important}.h-75{height:75% !important}.h-100{height:100% !important}.h-auto{height:auto !important}.mw-100{max-width:100% !important}.mh-100{max-height:100% !important}.min-vw-100{min-width:100vw !important}.min-vh-100{min-height:100vh !important}.vw-100{width:100vw !important}.vh-100{height:100vh !important}.stretched-link::after{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;pointer-events:auto;content:\"\";background-color:rgba(0,0,0,0)}.m-0{margin:0 !important}.mt-0,.my-0{margin-top:0 !important}.mr-0,.mx-0{margin-right:0 !important}.mb-0,.my-0{margin-bottom:0 !important}.ml-0,.mx-0{margin-left:0 !important}.m-1{margin:.25rem !important}.mt-1,.my-1{margin-top:.25rem !important}.mr-1,.mx-1{margin-right:.25rem !important}.mb-1,.my-1{margin-bottom:.25rem !important}.ml-1,.mx-1{margin-left:.25rem !important}.m-2{margin:.5rem !important}.mt-2,.my-2{margin-top:.5rem !important}.mr-2,.mx-2{margin-right:.5rem !important}.mb-2,.my-2{margin-bottom:.5rem !important}.ml-2,.mx-2{margin-left:.5rem !important}.m-3{margin:1rem !important}.mt-3,.my-3{margin-top:1rem !important}.mr-3,.mx-3{margin-right:1rem !important}.mb-3,.my-3{margin-bottom:1rem !important}.ml-3,.mx-3{margin-left:1rem !important}.m-4{margin:1.5rem !important}.mt-4,.my-4{margin-top:1.5rem !important}.mr-4,.mx-4{margin-right:1.5rem !important}.mb-4,.my-4{margin-bottom:1.5rem !important}.ml-4,.mx-4{margin-left:1.5rem !important}.m-5{margin:3rem !important}.mt-5,.my-5{margin-top:3rem !important}.mr-5,.mx-5{margin-right:3rem !important}.mb-5,.my-5{margin-bottom:3rem !important}.ml-5,.mx-5{margin-left:3rem !important}.p-0{padding:0 !important}.pt-0,.py-0{padding-top:0 !important}.pr-0,.px-0{padding-right:0 !important}.pb-0,.py-0{padding-bottom:0 !important}.pl-0,.px-0{padding-left:0 !important}.p-1{padding:.25rem !important}.pt-1,.py-1{padding-top:.25rem !important}.pr-1,.px-1{padding-right:.25rem !important}.pb-1,.py-1{padding-bottom:.25rem !important}.pl-1,.px-1{padding-left:.25rem !important}.p-2{padding:.5rem !important}.pt-2,.py-2{padding-top:.5rem !important}.pr-2,.px-2{padding-right:.5rem !important}.pb-2,.py-2{padding-bottom:.5rem !important}.pl-2,.px-2{padding-left:.5rem !important}.p-3{padding:1rem !important}.pt-3,.py-3{padding-top:1rem !important}.pr-3,.px-3{padding-right:1rem !important}.pb-3,.py-3{padding-bottom:1rem !important}.pl-3,.px-3{padding-left:1rem !important}.p-4{padding:1.5rem !important}.pt-4,.py-4{padding-top:1.5rem !important}.pr-4,.px-4{padding-right:1.5rem !important}.pb-4,.py-4{padding-bottom:1.5rem !important}.pl-4,.px-4{padding-left:1.5rem !important}.p-5{padding:3rem !important}.pt-5,.py-5{padding-top:3rem !important}.pr-5,.px-5{padding-right:3rem !important}.pb-5,.py-5{padding-bottom:3rem !important}.pl-5,.px-5{padding-left:3rem !important}.m-n1{margin:-.25rem !important}.mt-n1,.my-n1{margin-top:-.25rem !important}.mr-n1,.mx-n1{margin-right:-.25rem !important}.mb-n1,.my-n1{margin-bottom:-.25rem !important}.ml-n1,.mx-n1{margin-left:-.25rem !important}.m-n2{margin:-.5rem !important}.mt-n2,.my-n2{margin-top:-.5rem !important}.mr-n2,.mx-n2{margin-right:-.5rem !important}.mb-n2,.my-n2{margin-bottom:-.5rem !important}.ml-n2,.mx-n2{margin-left:-.5rem !important}.m-n3{margin:-1rem !important}.mt-n3,.my-n3{margin-top:-1rem !important}.mr-n3,.mx-n3{margin-right:-1rem !important}.mb-n3,.my-n3{margin-bottom:-1rem !important}.ml-n3,.mx-n3{margin-left:-1rem !important}.m-n4{margin:-1.5rem !important}.mt-n4,.my-n4{margin-top:-1.5rem !important}.mr-n4,.mx-n4{margin-right:-1.5rem !important}.mb-n4,.my-n4{margin-bottom:-1.5rem !important}.ml-n4,.mx-n4{margin-left:-1.5rem !important}.m-n5{margin:-3rem !important}.mt-n5,.my-n5{margin-top:-3rem !important}.mr-n5,.mx-n5{margin-right:-3rem !important}.mb-n5,.my-n5{margin-bottom:-3rem !important}.ml-n5,.mx-n5{margin-left:-3rem !important}.m-auto{margin:auto !important}.mt-auto,.my-auto{margin-top:auto !important}.mr-auto,.mx-auto{margin-right:auto !important}.mb-auto,.my-auto{margin-bottom:auto !important}.ml-auto,.mx-auto{margin-left:auto !important}@media (min-width: 420px){.m-xs-0{margin:0 !important}.mt-xs-0,.my-xs-0{margin-top:0 !important}.mr-xs-0,.mx-xs-0{margin-right:0 !important}.mb-xs-0,.my-xs-0{margin-bottom:0 !important}.ml-xs-0,.mx-xs-0{margin-left:0 !important}.m-xs-1{margin:.25rem !important}.mt-xs-1,.my-xs-1{margin-top:.25rem !important}.mr-xs-1,.mx-xs-1{margin-right:.25rem !important}.mb-xs-1,.my-xs-1{margin-bottom:.25rem !important}.ml-xs-1,.mx-xs-1{margin-left:.25rem !important}.m-xs-2{margin:.5rem !important}.mt-xs-2,.my-xs-2{margin-top:.5rem !important}.mr-xs-2,.mx-xs-2{margin-right:.5rem !important}.mb-xs-2,.my-xs-2{margin-bottom:.5rem !important}.ml-xs-2,.mx-xs-2{margin-left:.5rem !important}.m-xs-3{margin:1rem !important}.mt-xs-3,.my-xs-3{margin-top:1rem !important}.mr-xs-3,.mx-xs-3{margin-right:1rem !important}.mb-xs-3,.my-xs-3{margin-bottom:1rem !important}.ml-xs-3,.mx-xs-3{margin-left:1rem !important}.m-xs-4{margin:1.5rem !important}.mt-xs-4,.my-xs-4{margin-top:1.5rem !important}.mr-xs-4,.mx-xs-4{margin-right:1.5rem !important}.mb-xs-4,.my-xs-4{margin-bottom:1.5rem !important}.ml-xs-4,.mx-xs-4{margin-left:1.5rem !important}.m-xs-5{margin:3rem !important}.mt-xs-5,.my-xs-5{margin-top:3rem !important}.mr-xs-5,.mx-xs-5{margin-right:3rem !important}.mb-xs-5,.my-xs-5{margin-bottom:3rem !important}.ml-xs-5,.mx-xs-5{margin-left:3rem !important}.p-xs-0{padding:0 !important}.pt-xs-0,.py-xs-0{padding-top:0 !important}.pr-xs-0,.px-xs-0{padding-right:0 !important}.pb-xs-0,.py-xs-0{padding-bottom:0 !important}.pl-xs-0,.px-xs-0{padding-left:0 !important}.p-xs-1{padding:.25rem !important}.pt-xs-1,.py-xs-1{padding-top:.25rem !important}.pr-xs-1,.px-xs-1{padding-right:.25rem !important}.pb-xs-1,.py-xs-1{padding-bottom:.25rem !important}.pl-xs-1,.px-xs-1{padding-left:.25rem !important}.p-xs-2{padding:.5rem !important}.pt-xs-2,.py-xs-2{padding-top:.5rem !important}.pr-xs-2,.px-xs-2{padding-right:.5rem !important}.pb-xs-2,.py-xs-2{padding-bottom:.5rem !important}.pl-xs-2,.px-xs-2{padding-left:.5rem !important}.p-xs-3{padding:1rem !important}.pt-xs-3,.py-xs-3{padding-top:1rem !important}.pr-xs-3,.px-xs-3{padding-right:1rem !important}.pb-xs-3,.py-xs-3{padding-bottom:1rem !important}.pl-xs-3,.px-xs-3{padding-left:1rem !important}.p-xs-4{padding:1.5rem !important}.pt-xs-4,.py-xs-4{padding-top:1.5rem !important}.pr-xs-4,.px-xs-4{padding-right:1.5rem !important}.pb-xs-4,.py-xs-4{padding-bottom:1.5rem !important}.pl-xs-4,.px-xs-4{padding-left:1.5rem !important}.p-xs-5{padding:3rem !important}.pt-xs-5,.py-xs-5{padding-top:3rem !important}.pr-xs-5,.px-xs-5{padding-right:3rem !important}.pb-xs-5,.py-xs-5{padding-bottom:3rem !important}.pl-xs-5,.px-xs-5{padding-left:3rem !important}.m-xs-n1{margin:-.25rem !important}.mt-xs-n1,.my-xs-n1{margin-top:-.25rem !important}.mr-xs-n1,.mx-xs-n1{margin-right:-.25rem !important}.mb-xs-n1,.my-xs-n1{margin-bottom:-.25rem !important}.ml-xs-n1,.mx-xs-n1{margin-left:-.25rem !important}.m-xs-n2{margin:-.5rem !important}.mt-xs-n2,.my-xs-n2{margin-top:-.5rem !important}.mr-xs-n2,.mx-xs-n2{margin-right:-.5rem !important}.mb-xs-n2,.my-xs-n2{margin-bottom:-.5rem !important}.ml-xs-n2,.mx-xs-n2{margin-left:-.5rem !important}.m-xs-n3{margin:-1rem !important}.mt-xs-n3,.my-xs-n3{margin-top:-1rem !important}.mr-xs-n3,.mx-xs-n3{margin-right:-1rem !important}.mb-xs-n3,.my-xs-n3{margin-bottom:-1rem !important}.ml-xs-n3,.mx-xs-n3{margin-left:-1rem !important}.m-xs-n4{margin:-1.5rem !important}.mt-xs-n4,.my-xs-n4{margin-top:-1.5rem !important}.mr-xs-n4,.mx-xs-n4{margin-right:-1.5rem !important}.mb-xs-n4,.my-xs-n4{margin-bottom:-1.5rem !important}.ml-xs-n4,.mx-xs-n4{margin-left:-1.5rem !important}.m-xs-n5{margin:-3rem !important}.mt-xs-n5,.my-xs-n5{margin-top:-3rem !important}.mr-xs-n5,.mx-xs-n5{margin-right:-3rem !important}.mb-xs-n5,.my-xs-n5{margin-bottom:-3rem !important}.ml-xs-n5,.mx-xs-n5{margin-left:-3rem !important}.m-xs-auto{margin:auto !important}.mt-xs-auto,.my-xs-auto{margin-top:auto !important}.mr-xs-auto,.mx-xs-auto{margin-right:auto !important}.mb-xs-auto,.my-xs-auto{margin-bottom:auto !important}.ml-xs-auto,.mx-xs-auto{margin-left:auto !important}}@media (min-width: 576px){.m-sm-0{margin:0 !important}.mt-sm-0,.my-sm-0{margin-top:0 !important}.mr-sm-0,.mx-sm-0{margin-right:0 !important}.mb-sm-0,.my-sm-0{margin-bottom:0 !important}.ml-sm-0,.mx-sm-0{margin-left:0 !important}.m-sm-1{margin:.25rem !important}.mt-sm-1,.my-sm-1{margin-top:.25rem !important}.mr-sm-1,.mx-sm-1{margin-right:.25rem !important}.mb-sm-1,.my-sm-1{margin-bottom:.25rem !important}.ml-sm-1,.mx-sm-1{margin-left:.25rem !important}.m-sm-2{margin:.5rem !important}.mt-sm-2,.my-sm-2{margin-top:.5rem !important}.mr-sm-2,.mx-sm-2{margin-right:.5rem !important}.mb-sm-2,.my-sm-2{margin-bottom:.5rem !important}.ml-sm-2,.mx-sm-2{margin-left:.5rem !important}.m-sm-3{margin:1rem !important}.mt-sm-3,.my-sm-3{margin-top:1rem !important}.mr-sm-3,.mx-sm-3{margin-right:1rem !important}.mb-sm-3,.my-sm-3{margin-bottom:1rem !important}.ml-sm-3,.mx-sm-3{margin-left:1rem !important}.m-sm-4{margin:1.5rem !important}.mt-sm-4,.my-sm-4{margin-top:1.5rem !important}.mr-sm-4,.mx-sm-4{margin-right:1.5rem !important}.mb-sm-4,.my-sm-4{margin-bottom:1.5rem !important}.ml-sm-4,.mx-sm-4{margin-left:1.5rem !important}.m-sm-5{margin:3rem !important}.mt-sm-5,.my-sm-5{margin-top:3rem !important}.mr-sm-5,.mx-sm-5{margin-right:3rem !important}.mb-sm-5,.my-sm-5{margin-bottom:3rem !important}.ml-sm-5,.mx-sm-5{margin-left:3rem !important}.p-sm-0{padding:0 !important}.pt-sm-0,.py-sm-0{padding-top:0 !important}.pr-sm-0,.px-sm-0{padding-right:0 !important}.pb-sm-0,.py-sm-0{padding-bottom:0 !important}.pl-sm-0,.px-sm-0{padding-left:0 !important}.p-sm-1{padding:.25rem !important}.pt-sm-1,.py-sm-1{padding-top:.25rem !important}.pr-sm-1,.px-sm-1{padding-right:.25rem !important}.pb-sm-1,.py-sm-1{padding-bottom:.25rem !important}.pl-sm-1,.px-sm-1{padding-left:.25rem !important}.p-sm-2{padding:.5rem !important}.pt-sm-2,.py-sm-2{padding-top:.5rem !important}.pr-sm-2,.px-sm-2{padding-right:.5rem !important}.pb-sm-2,.py-sm-2{padding-bottom:.5rem !important}.pl-sm-2,.px-sm-2{padding-left:.5rem !important}.p-sm-3{padding:1rem !important}.pt-sm-3,.py-sm-3{padding-top:1rem !important}.pr-sm-3,.px-sm-3{padding-right:1rem !important}.pb-sm-3,.py-sm-3{padding-bottom:1rem !important}.pl-sm-3,.px-sm-3{padding-left:1rem !important}.p-sm-4{padding:1.5rem !important}.pt-sm-4,.py-sm-4{padding-top:1.5rem !important}.pr-sm-4,.px-sm-4{padding-right:1.5rem !important}.pb-sm-4,.py-sm-4{padding-bottom:1.5rem !important}.pl-sm-4,.px-sm-4{padding-left:1.5rem !important}.p-sm-5{padding:3rem !important}.pt-sm-5,.py-sm-5{padding-top:3rem !important}.pr-sm-5,.px-sm-5{padding-right:3rem !important}.pb-sm-5,.py-sm-5{padding-bottom:3rem !important}.pl-sm-5,.px-sm-5{padding-left:3rem !important}.m-sm-n1{margin:-.25rem !important}.mt-sm-n1,.my-sm-n1{margin-top:-.25rem !important}.mr-sm-n1,.mx-sm-n1{margin-right:-.25rem !important}.mb-sm-n1,.my-sm-n1{margin-bottom:-.25rem !important}.ml-sm-n1,.mx-sm-n1{margin-left:-.25rem !important}.m-sm-n2{margin:-.5rem !important}.mt-sm-n2,.my-sm-n2{margin-top:-.5rem !important}.mr-sm-n2,.mx-sm-n2{margin-right:-.5rem !important}.mb-sm-n2,.my-sm-n2{margin-bottom:-.5rem !important}.ml-sm-n2,.mx-sm-n2{margin-left:-.5rem !important}.m-sm-n3{margin:-1rem !important}.mt-sm-n3,.my-sm-n3{margin-top:-1rem !important}.mr-sm-n3,.mx-sm-n3{margin-right:-1rem !important}.mb-sm-n3,.my-sm-n3{margin-bottom:-1rem !important}.ml-sm-n3,.mx-sm-n3{margin-left:-1rem !important}.m-sm-n4{margin:-1.5rem !important}.mt-sm-n4,.my-sm-n4{margin-top:-1.5rem !important}.mr-sm-n4,.mx-sm-n4{margin-right:-1.5rem !important}.mb-sm-n4,.my-sm-n4{margin-bottom:-1.5rem !important}.ml-sm-n4,.mx-sm-n4{margin-left:-1.5rem !important}.m-sm-n5{margin:-3rem !important}.mt-sm-n5,.my-sm-n5{margin-top:-3rem !important}.mr-sm-n5,.mx-sm-n5{margin-right:-3rem !important}.mb-sm-n5,.my-sm-n5{margin-bottom:-3rem !important}.ml-sm-n5,.mx-sm-n5{margin-left:-3rem !important}.m-sm-auto{margin:auto !important}.mt-sm-auto,.my-sm-auto{margin-top:auto !important}.mr-sm-auto,.mx-sm-auto{margin-right:auto !important}.mb-sm-auto,.my-sm-auto{margin-bottom:auto !important}.ml-sm-auto,.mx-sm-auto{margin-left:auto !important}}@media (min-width: 768px){.m-md-0{margin:0 !important}.mt-md-0,.my-md-0{margin-top:0 !important}.mr-md-0,.mx-md-0{margin-right:0 !important}.mb-md-0,.my-md-0{margin-bottom:0 !important}.ml-md-0,.mx-md-0{margin-left:0 !important}.m-md-1{margin:.25rem !important}.mt-md-1,.my-md-1{margin-top:.25rem !important}.mr-md-1,.mx-md-1{margin-right:.25rem !important}.mb-md-1,.my-md-1{margin-bottom:.25rem !important}.ml-md-1,.mx-md-1{margin-left:.25rem !important}.m-md-2{margin:.5rem !important}.mt-md-2,.my-md-2{margin-top:.5rem !important}.mr-md-2,.mx-md-2{margin-right:.5rem !important}.mb-md-2,.my-md-2{margin-bottom:.5rem !important}.ml-md-2,.mx-md-2{margin-left:.5rem !important}.m-md-3{margin:1rem !important}.mt-md-3,.my-md-3{margin-top:1rem !important}.mr-md-3,.mx-md-3{margin-right:1rem !important}.mb-md-3,.my-md-3{margin-bottom:1rem !important}.ml-md-3,.mx-md-3{margin-left:1rem !important}.m-md-4{margin:1.5rem !important}.mt-md-4,.my-md-4{margin-top:1.5rem !important}.mr-md-4,.mx-md-4{margin-right:1.5rem !important}.mb-md-4,.my-md-4{margin-bottom:1.5rem !important}.ml-md-4,.mx-md-4{margin-left:1.5rem !important}.m-md-5{margin:3rem !important}.mt-md-5,.my-md-5{margin-top:3rem !important}.mr-md-5,.mx-md-5{margin-right:3rem !important}.mb-md-5,.my-md-5{margin-bottom:3rem !important}.ml-md-5,.mx-md-5{margin-left:3rem !important}.p-md-0{padding:0 !important}.pt-md-0,.py-md-0{padding-top:0 !important}.pr-md-0,.px-md-0{padding-right:0 !important}.pb-md-0,.py-md-0{padding-bottom:0 !important}.pl-md-0,.px-md-0{padding-left:0 !important}.p-md-1{padding:.25rem !important}.pt-md-1,.py-md-1{padding-top:.25rem !important}.pr-md-1,.px-md-1{padding-right:.25rem !important}.pb-md-1,.py-md-1{padding-bottom:.25rem !important}.pl-md-1,.px-md-1{padding-left:.25rem !important}.p-md-2{padding:.5rem !important}.pt-md-2,.py-md-2{padding-top:.5rem !important}.pr-md-2,.px-md-2{padding-right:.5rem !important}.pb-md-2,.py-md-2{padding-bottom:.5rem !important}.pl-md-2,.px-md-2{padding-left:.5rem !important}.p-md-3{padding:1rem !important}.pt-md-3,.py-md-3{padding-top:1rem !important}.pr-md-3,.px-md-3{padding-right:1rem !important}.pb-md-3,.py-md-3{padding-bottom:1rem !important}.pl-md-3,.px-md-3{padding-left:1rem !important}.p-md-4{padding:1.5rem !important}.pt-md-4,.py-md-4{padding-top:1.5rem !important}.pr-md-4,.px-md-4{padding-right:1.5rem !important}.pb-md-4,.py-md-4{padding-bottom:1.5rem !important}.pl-md-4,.px-md-4{padding-left:1.5rem !important}.p-md-5{padding:3rem !important}.pt-md-5,.py-md-5{padding-top:3rem !important}.pr-md-5,.px-md-5{padding-right:3rem !important}.pb-md-5,.py-md-5{padding-bottom:3rem !important}.pl-md-5,.px-md-5{padding-left:3rem !important}.m-md-n1{margin:-.25rem !important}.mt-md-n1,.my-md-n1{margin-top:-.25rem !important}.mr-md-n1,.mx-md-n1{margin-right:-.25rem !important}.mb-md-n1,.my-md-n1{margin-bottom:-.25rem !important}.ml-md-n1,.mx-md-n1{margin-left:-.25rem !important}.m-md-n2{margin:-.5rem !important}.mt-md-n2,.my-md-n2{margin-top:-.5rem !important}.mr-md-n2,.mx-md-n2{margin-right:-.5rem !important}.mb-md-n2,.my-md-n2{margin-bottom:-.5rem !important}.ml-md-n2,.mx-md-n2{margin-left:-.5rem !important}.m-md-n3{margin:-1rem !important}.mt-md-n3,.my-md-n3{margin-top:-1rem !important}.mr-md-n3,.mx-md-n3{margin-right:-1rem !important}.mb-md-n3,.my-md-n3{margin-bottom:-1rem !important}.ml-md-n3,.mx-md-n3{margin-left:-1rem !important}.m-md-n4{margin:-1.5rem !important}.mt-md-n4,.my-md-n4{margin-top:-1.5rem !important}.mr-md-n4,.mx-md-n4{margin-right:-1.5rem !important}.mb-md-n4,.my-md-n4{margin-bottom:-1.5rem !important}.ml-md-n4,.mx-md-n4{margin-left:-1.5rem !important}.m-md-n5{margin:-3rem !important}.mt-md-n5,.my-md-n5{margin-top:-3rem !important}.mr-md-n5,.mx-md-n5{margin-right:-3rem !important}.mb-md-n5,.my-md-n5{margin-bottom:-3rem !important}.ml-md-n5,.mx-md-n5{margin-left:-3rem !important}.m-md-auto{margin:auto !important}.mt-md-auto,.my-md-auto{margin-top:auto !important}.mr-md-auto,.mx-md-auto{margin-right:auto !important}.mb-md-auto,.my-md-auto{margin-bottom:auto !important}.ml-md-auto,.mx-md-auto{margin-left:auto !important}}@media (min-width: 992px){.m-lg-0{margin:0 !important}.mt-lg-0,.my-lg-0{margin-top:0 !important}.mr-lg-0,.mx-lg-0{margin-right:0 !important}.mb-lg-0,.my-lg-0{margin-bottom:0 !important}.ml-lg-0,.mx-lg-0{margin-left:0 !important}.m-lg-1{margin:.25rem !important}.mt-lg-1,.my-lg-1{margin-top:.25rem !important}.mr-lg-1,.mx-lg-1{margin-right:.25rem !important}.mb-lg-1,.my-lg-1{margin-bottom:.25rem !important}.ml-lg-1,.mx-lg-1{margin-left:.25rem !important}.m-lg-2{margin:.5rem !important}.mt-lg-2,.my-lg-2{margin-top:.5rem !important}.mr-lg-2,.mx-lg-2{margin-right:.5rem !important}.mb-lg-2,.my-lg-2{margin-bottom:.5rem !important}.ml-lg-2,.mx-lg-2{margin-left:.5rem !important}.m-lg-3{margin:1rem !important}.mt-lg-3,.my-lg-3{margin-top:1rem !important}.mr-lg-3,.mx-lg-3{margin-right:1rem !important}.mb-lg-3,.my-lg-3{margin-bottom:1rem !important}.ml-lg-3,.mx-lg-3{margin-left:1rem !important}.m-lg-4{margin:1.5rem !important}.mt-lg-4,.my-lg-4{margin-top:1.5rem !important}.mr-lg-4,.mx-lg-4{margin-right:1.5rem !important}.mb-lg-4,.my-lg-4{margin-bottom:1.5rem !important}.ml-lg-4,.mx-lg-4{margin-left:1.5rem !important}.m-lg-5{margin:3rem !important}.mt-lg-5,.my-lg-5{margin-top:3rem !important}.mr-lg-5,.mx-lg-5{margin-right:3rem !important}.mb-lg-5,.my-lg-5{margin-bottom:3rem !important}.ml-lg-5,.mx-lg-5{margin-left:3rem !important}.p-lg-0{padding:0 !important}.pt-lg-0,.py-lg-0{padding-top:0 !important}.pr-lg-0,.px-lg-0{padding-right:0 !important}.pb-lg-0,.py-lg-0{padding-bottom:0 !important}.pl-lg-0,.px-lg-0{padding-left:0 !important}.p-lg-1{padding:.25rem !important}.pt-lg-1,.py-lg-1{padding-top:.25rem !important}.pr-lg-1,.px-lg-1{padding-right:.25rem !important}.pb-lg-1,.py-lg-1{padding-bottom:.25rem !important}.pl-lg-1,.px-lg-1{padding-left:.25rem !important}.p-lg-2{padding:.5rem !important}.pt-lg-2,.py-lg-2{padding-top:.5rem !important}.pr-lg-2,.px-lg-2{padding-right:.5rem !important}.pb-lg-2,.py-lg-2{padding-bottom:.5rem !important}.pl-lg-2,.px-lg-2{padding-left:.5rem !important}.p-lg-3{padding:1rem !important}.pt-lg-3,.py-lg-3{padding-top:1rem !important}.pr-lg-3,.px-lg-3{padding-right:1rem !important}.pb-lg-3,.py-lg-3{padding-bottom:1rem !important}.pl-lg-3,.px-lg-3{padding-left:1rem !important}.p-lg-4{padding:1.5rem !important}.pt-lg-4,.py-lg-4{padding-top:1.5rem !important}.pr-lg-4,.px-lg-4{padding-right:1.5rem !important}.pb-lg-4,.py-lg-4{padding-bottom:1.5rem !important}.pl-lg-4,.px-lg-4{padding-left:1.5rem !important}.p-lg-5{padding:3rem !important}.pt-lg-5,.py-lg-5{padding-top:3rem !important}.pr-lg-5,.px-lg-5{padding-right:3rem !important}.pb-lg-5,.py-lg-5{padding-bottom:3rem !important}.pl-lg-5,.px-lg-5{padding-left:3rem !important}.m-lg-n1{margin:-.25rem !important}.mt-lg-n1,.my-lg-n1{margin-top:-.25rem !important}.mr-lg-n1,.mx-lg-n1{margin-right:-.25rem !important}.mb-lg-n1,.my-lg-n1{margin-bottom:-.25rem !important}.ml-lg-n1,.mx-lg-n1{margin-left:-.25rem !important}.m-lg-n2{margin:-.5rem !important}.mt-lg-n2,.my-lg-n2{margin-top:-.5rem !important}.mr-lg-n2,.mx-lg-n2{margin-right:-.5rem !important}.mb-lg-n2,.my-lg-n2{margin-bottom:-.5rem !important}.ml-lg-n2,.mx-lg-n2{margin-left:-.5rem !important}.m-lg-n3{margin:-1rem !important}.mt-lg-n3,.my-lg-n3{margin-top:-1rem !important}.mr-lg-n3,.mx-lg-n3{margin-right:-1rem !important}.mb-lg-n3,.my-lg-n3{margin-bottom:-1rem !important}.ml-lg-n3,.mx-lg-n3{margin-left:-1rem !important}.m-lg-n4{margin:-1.5rem !important}.mt-lg-n4,.my-lg-n4{margin-top:-1.5rem !important}.mr-lg-n4,.mx-lg-n4{margin-right:-1.5rem !important}.mb-lg-n4,.my-lg-n4{margin-bottom:-1.5rem !important}.ml-lg-n4,.mx-lg-n4{margin-left:-1.5rem !important}.m-lg-n5{margin:-3rem !important}.mt-lg-n5,.my-lg-n5{margin-top:-3rem !important}.mr-lg-n5,.mx-lg-n5{margin-right:-3rem !important}.mb-lg-n5,.my-lg-n5{margin-bottom:-3rem !important}.ml-lg-n5,.mx-lg-n5{margin-left:-3rem !important}.m-lg-auto{margin:auto !important}.mt-lg-auto,.my-lg-auto{margin-top:auto !important}.mr-lg-auto,.mx-lg-auto{margin-right:auto !important}.mb-lg-auto,.my-lg-auto{margin-bottom:auto !important}.ml-lg-auto,.mx-lg-auto{margin-left:auto !important}}@media (min-width: 1200px){.m-xl-0{margin:0 !important}.mt-xl-0,.my-xl-0{margin-top:0 !important}.mr-xl-0,.mx-xl-0{margin-right:0 !important}.mb-xl-0,.my-xl-0{margin-bottom:0 !important}.ml-xl-0,.mx-xl-0{margin-left:0 !important}.m-xl-1{margin:.25rem !important}.mt-xl-1,.my-xl-1{margin-top:.25rem !important}.mr-xl-1,.mx-xl-1{margin-right:.25rem !important}.mb-xl-1,.my-xl-1{margin-bottom:.25rem !important}.ml-xl-1,.mx-xl-1{margin-left:.25rem !important}.m-xl-2{margin:.5rem !important}.mt-xl-2,.my-xl-2{margin-top:.5rem !important}.mr-xl-2,.mx-xl-2{margin-right:.5rem !important}.mb-xl-2,.my-xl-2{margin-bottom:.5rem !important}.ml-xl-2,.mx-xl-2{margin-left:.5rem !important}.m-xl-3{margin:1rem !important}.mt-xl-3,.my-xl-3{margin-top:1rem !important}.mr-xl-3,.mx-xl-3{margin-right:1rem !important}.mb-xl-3,.my-xl-3{margin-bottom:1rem !important}.ml-xl-3,.mx-xl-3{margin-left:1rem !important}.m-xl-4{margin:1.5rem !important}.mt-xl-4,.my-xl-4{margin-top:1.5rem !important}.mr-xl-4,.mx-xl-4{margin-right:1.5rem !important}.mb-xl-4,.my-xl-4{margin-bottom:1.5rem !important}.ml-xl-4,.mx-xl-4{margin-left:1.5rem !important}.m-xl-5{margin:3rem !important}.mt-xl-5,.my-xl-5{margin-top:3rem !important}.mr-xl-5,.mx-xl-5{margin-right:3rem !important}.mb-xl-5,.my-xl-5{margin-bottom:3rem !important}.ml-xl-5,.mx-xl-5{margin-left:3rem !important}.p-xl-0{padding:0 !important}.pt-xl-0,.py-xl-0{padding-top:0 !important}.pr-xl-0,.px-xl-0{padding-right:0 !important}.pb-xl-0,.py-xl-0{padding-bottom:0 !important}.pl-xl-0,.px-xl-0{padding-left:0 !important}.p-xl-1{padding:.25rem !important}.pt-xl-1,.py-xl-1{padding-top:.25rem !important}.pr-xl-1,.px-xl-1{padding-right:.25rem !important}.pb-xl-1,.py-xl-1{padding-bottom:.25rem !important}.pl-xl-1,.px-xl-1{padding-left:.25rem !important}.p-xl-2{padding:.5rem !important}.pt-xl-2,.py-xl-2{padding-top:.5rem !important}.pr-xl-2,.px-xl-2{padding-right:.5rem !important}.pb-xl-2,.py-xl-2{padding-bottom:.5rem !important}.pl-xl-2,.px-xl-2{padding-left:.5rem !important}.p-xl-3{padding:1rem !important}.pt-xl-3,.py-xl-3{padding-top:1rem !important}.pr-xl-3,.px-xl-3{padding-right:1rem !important}.pb-xl-3,.py-xl-3{padding-bottom:1rem !important}.pl-xl-3,.px-xl-3{padding-left:1rem !important}.p-xl-4{padding:1.5rem !important}.pt-xl-4,.py-xl-4{padding-top:1.5rem !important}.pr-xl-4,.px-xl-4{padding-right:1.5rem !important}.pb-xl-4,.py-xl-4{padding-bottom:1.5rem !important}.pl-xl-4,.px-xl-4{padding-left:1.5rem !important}.p-xl-5{padding:3rem !important}.pt-xl-5,.py-xl-5{padding-top:3rem !important}.pr-xl-5,.px-xl-5{padding-right:3rem !important}.pb-xl-5,.py-xl-5{padding-bottom:3rem !important}.pl-xl-5,.px-xl-5{padding-left:3rem !important}.m-xl-n1{margin:-.25rem !important}.mt-xl-n1,.my-xl-n1{margin-top:-.25rem !important}.mr-xl-n1,.mx-xl-n1{margin-right:-.25rem !important}.mb-xl-n1,.my-xl-n1{margin-bottom:-.25rem !important}.ml-xl-n1,.mx-xl-n1{margin-left:-.25rem !important}.m-xl-n2{margin:-.5rem !important}.mt-xl-n2,.my-xl-n2{margin-top:-.5rem !important}.mr-xl-n2,.mx-xl-n2{margin-right:-.5rem !important}.mb-xl-n2,.my-xl-n2{margin-bottom:-.5rem !important}.ml-xl-n2,.mx-xl-n2{margin-left:-.5rem !important}.m-xl-n3{margin:-1rem !important}.mt-xl-n3,.my-xl-n3{margin-top:-1rem !important}.mr-xl-n3,.mx-xl-n3{margin-right:-1rem !important}.mb-xl-n3,.my-xl-n3{margin-bottom:-1rem !important}.ml-xl-n3,.mx-xl-n3{margin-left:-1rem !important}.m-xl-n4{margin:-1.5rem !important}.mt-xl-n4,.my-xl-n4{margin-top:-1.5rem !important}.mr-xl-n4,.mx-xl-n4{margin-right:-1.5rem !important}.mb-xl-n4,.my-xl-n4{margin-bottom:-1.5rem !important}.ml-xl-n4,.mx-xl-n4{margin-left:-1.5rem !important}.m-xl-n5{margin:-3rem !important}.mt-xl-n5,.my-xl-n5{margin-top:-3rem !important}.mr-xl-n5,.mx-xl-n5{margin-right:-3rem !important}.mb-xl-n5,.my-xl-n5{margin-bottom:-3rem !important}.ml-xl-n5,.mx-xl-n5{margin-left:-3rem !important}.m-xl-auto{margin:auto !important}.mt-xl-auto,.my-xl-auto{margin-top:auto !important}.mr-xl-auto,.mx-xl-auto{margin-right:auto !important}.mb-xl-auto,.my-xl-auto{margin-bottom:auto !important}.ml-xl-auto,.mx-xl-auto{margin-left:auto !important}}@media (min-width: 1440px){.m-xxl-0{margin:0 !important}.mt-xxl-0,.my-xxl-0{margin-top:0 !important}.mr-xxl-0,.mx-xxl-0{margin-right:0 !important}.mb-xxl-0,.my-xxl-0{margin-bottom:0 !important}.ml-xxl-0,.mx-xxl-0{margin-left:0 !important}.m-xxl-1{margin:.25rem !important}.mt-xxl-1,.my-xxl-1{margin-top:.25rem !important}.mr-xxl-1,.mx-xxl-1{margin-right:.25rem !important}.mb-xxl-1,.my-xxl-1{margin-bottom:.25rem !important}.ml-xxl-1,.mx-xxl-1{margin-left:.25rem !important}.m-xxl-2{margin:.5rem !important}.mt-xxl-2,.my-xxl-2{margin-top:.5rem !important}.mr-xxl-2,.mx-xxl-2{margin-right:.5rem !important}.mb-xxl-2,.my-xxl-2{margin-bottom:.5rem !important}.ml-xxl-2,.mx-xxl-2{margin-left:.5rem !important}.m-xxl-3{margin:1rem !important}.mt-xxl-3,.my-xxl-3{margin-top:1rem !important}.mr-xxl-3,.mx-xxl-3{margin-right:1rem !important}.mb-xxl-3,.my-xxl-3{margin-bottom:1rem !important}.ml-xxl-3,.mx-xxl-3{margin-left:1rem !important}.m-xxl-4{margin:1.5rem !important}.mt-xxl-4,.my-xxl-4{margin-top:1.5rem !important}.mr-xxl-4,.mx-xxl-4{margin-right:1.5rem !important}.mb-xxl-4,.my-xxl-4{margin-bottom:1.5rem !important}.ml-xxl-4,.mx-xxl-4{margin-left:1.5rem !important}.m-xxl-5{margin:3rem !important}.mt-xxl-5,.my-xxl-5{margin-top:3rem !important}.mr-xxl-5,.mx-xxl-5{margin-right:3rem !important}.mb-xxl-5,.my-xxl-5{margin-bottom:3rem !important}.ml-xxl-5,.mx-xxl-5{margin-left:3rem !important}.p-xxl-0{padding:0 !important}.pt-xxl-0,.py-xxl-0{padding-top:0 !important}.pr-xxl-0,.px-xxl-0{padding-right:0 !important}.pb-xxl-0,.py-xxl-0{padding-bottom:0 !important}.pl-xxl-0,.px-xxl-0{padding-left:0 !important}.p-xxl-1{padding:.25rem !important}.pt-xxl-1,.py-xxl-1{padding-top:.25rem !important}.pr-xxl-1,.px-xxl-1{padding-right:.25rem !important}.pb-xxl-1,.py-xxl-1{padding-bottom:.25rem !important}.pl-xxl-1,.px-xxl-1{padding-left:.25rem !important}.p-xxl-2{padding:.5rem !important}.pt-xxl-2,.py-xxl-2{padding-top:.5rem !important}.pr-xxl-2,.px-xxl-2{padding-right:.5rem !important}.pb-xxl-2,.py-xxl-2{padding-bottom:.5rem !important}.pl-xxl-2,.px-xxl-2{padding-left:.5rem !important}.p-xxl-3{padding:1rem !important}.pt-xxl-3,.py-xxl-3{padding-top:1rem !important}.pr-xxl-3,.px-xxl-3{padding-right:1rem !important}.pb-xxl-3,.py-xxl-3{padding-bottom:1rem !important}.pl-xxl-3,.px-xxl-3{padding-left:1rem !important}.p-xxl-4{padding:1.5rem !important}.pt-xxl-4,.py-xxl-4{padding-top:1.5rem !important}.pr-xxl-4,.px-xxl-4{padding-right:1.5rem !important}.pb-xxl-4,.py-xxl-4{padding-bottom:1.5rem !important}.pl-xxl-4,.px-xxl-4{padding-left:1.5rem !important}.p-xxl-5{padding:3rem !important}.pt-xxl-5,.py-xxl-5{padding-top:3rem !important}.pr-xxl-5,.px-xxl-5{padding-right:3rem !important}.pb-xxl-5,.py-xxl-5{padding-bottom:3rem !important}.pl-xxl-5,.px-xxl-5{padding-left:3rem !important}.m-xxl-n1{margin:-.25rem !important}.mt-xxl-n1,.my-xxl-n1{margin-top:-.25rem !important}.mr-xxl-n1,.mx-xxl-n1{margin-right:-.25rem !important}.mb-xxl-n1,.my-xxl-n1{margin-bottom:-.25rem !important}.ml-xxl-n1,.mx-xxl-n1{margin-left:-.25rem !important}.m-xxl-n2{margin:-.5rem !important}.mt-xxl-n2,.my-xxl-n2{margin-top:-.5rem !important}.mr-xxl-n2,.mx-xxl-n2{margin-right:-.5rem !important}.mb-xxl-n2,.my-xxl-n2{margin-bottom:-.5rem !important}.ml-xxl-n2,.mx-xxl-n2{margin-left:-.5rem !important}.m-xxl-n3{margin:-1rem !important}.mt-xxl-n3,.my-xxl-n3{margin-top:-1rem !important}.mr-xxl-n3,.mx-xxl-n3{margin-right:-1rem !important}.mb-xxl-n3,.my-xxl-n3{margin-bottom:-1rem !important}.ml-xxl-n3,.mx-xxl-n3{margin-left:-1rem !important}.m-xxl-n4{margin:-1.5rem !important}.mt-xxl-n4,.my-xxl-n4{margin-top:-1.5rem !important}.mr-xxl-n4,.mx-xxl-n4{margin-right:-1.5rem !important}.mb-xxl-n4,.my-xxl-n4{margin-bottom:-1.5rem !important}.ml-xxl-n4,.mx-xxl-n4{margin-left:-1.5rem !important}.m-xxl-n5{margin:-3rem !important}.mt-xxl-n5,.my-xxl-n5{margin-top:-3rem !important}.mr-xxl-n5,.mx-xxl-n5{margin-right:-3rem !important}.mb-xxl-n5,.my-xxl-n5{margin-bottom:-3rem !important}.ml-xxl-n5,.mx-xxl-n5{margin-left:-3rem !important}.m-xxl-auto{margin:auto !important}.mt-xxl-auto,.my-xxl-auto{margin-top:auto !important}.mr-xxl-auto,.mx-xxl-auto{margin-right:auto !important}.mb-xxl-auto,.my-xxl-auto{margin-bottom:auto !important}.ml-xxl-auto,.mx-xxl-auto{margin-left:auto !important}}.text-monospace{font-family:SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace !important}.text-justify{text-align:justify !important}.text-wrap{white-space:normal !important}.text-nowrap{white-space:nowrap !important}.text-truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.text-left{text-align:left !important}.text-right{text-align:right !important}.text-center{text-align:center !important}@media (min-width: 420px){.text-xs-left{text-align:left !important}.text-xs-right{text-align:right !important}.text-xs-center{text-align:center !important}}@media (min-width: 576px){.text-sm-left{text-align:left !important}.text-sm-right{text-align:right !important}.text-sm-center{text-align:center !important}}@media (min-width: 768px){.text-md-left{text-align:left !important}.text-md-right{text-align:right !important}.text-md-center{text-align:center !important}}@media (min-width: 992px){.text-lg-left{text-align:left !important}.text-lg-right{text-align:right !important}.text-lg-center{text-align:center !important}}@media (min-width: 1200px){.text-xl-left{text-align:left !important}.text-xl-right{text-align:right !important}.text-xl-center{text-align:center !important}}@media (min-width: 1440px){.text-xxl-left{text-align:left !important}.text-xxl-right{text-align:right !important}.text-xxl-center{text-align:center !important}}.text-lowercase{text-transform:lowercase !important}.text-uppercase{text-transform:uppercase !important}.text-capitalize{text-transform:capitalize !important}.font-weight-light{font-weight:300 !important}.font-weight-lighter{font-weight:lighter !important}.font-weight-normal{font-weight:400 !important}.font-weight-bold{font-weight:700 !important}.font-weight-bolder{font-weight:bolder !important}.font-italic{font-style:italic !important}.text-white{color:#fff !important}.text-primary{color:#007bff !important}a.text-primary:hover,a.text-primary:focus{color:#0056b3 !important}.text-secondary{color:#6c757d !important}a.text-secondary:hover,a.text-secondary:focus{color:#494f54 !important}.text-success{color:#28a745 !important}a.text-success:hover,a.text-success:focus{color:#19692c !important}.text-info{color:#17a2b8 !important}a.text-info:hover,a.text-info:focus{color:#0f6674 !important}.text-warning{color:#ffc107 !important}a.text-warning:hover,a.text-warning:focus{color:#ba8b00 !important}.text-danger{color:#dc3545 !important}a.text-danger:hover,a.text-danger:focus{color:#a71d2a !important}.text-light{color:#f8f9fa !important}a.text-light:hover,a.text-light:focus{color:#cbd3da !important}.text-dark{color:#343a40 !important}a.text-dark:hover,a.text-dark:focus{color:#121416 !important}.text-body{color:#212529 !important}.text-muted{color:#6c757d !important}.text-black-50{color:rgba(0,0,0,0.5) !important}.text-white-50{color:rgba(255,255,255,0.5) !important}.text-hide{font:0/0 a;color:transparent;text-shadow:none;background-color:transparent;border:0}.text-decoration-none{text-decoration:none !important}.text-break{word-break:break-word !important;overflow-wrap:break-word !important}.text-reset{color:inherit !important}.visible{visibility:visible !important}.invisible{visibility:hidden !important}@media print{*,*::before,*::after{text-shadow:none !important;-webkit-box-shadow:none !important;box-shadow:none !important}a:not(.btn){text-decoration:underline}abbr[title]::after{content:\" (\" attr(title) \")\"}pre{white-space:pre-wrap !important}pre,blockquote{border:1px solid #adb5bd;page-break-inside:avoid}thead{display:table-header-group}tr,img{page-break-inside:avoid}p,h2,h3{orphans:3;widows:3}h2,h3{page-break-after:avoid}@page{size:a3}body{min-width:992px !important}.container{min-width:992px !important}.navbar{display:none}.badge{border:1px solid #000}.table{border-collapse:collapse !important}.table td,.table th{background-color:#fff !important}.table-bordered th,.table-bordered td{border:1px solid #dee2e6 !important}.table-dark{color:inherit}.table-dark th,.table-dark td,.table-dark thead th,.table-dark tbody+tbody{border-color:#dee2e6}.table .thead-dark th{color:inherit;border-color:#dee2e6}}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./resources/css/vendor/bootstrap.rtl.only.min.css":
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./resources/css/vendor/bootstrap.rtl.only.min.css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.rtl {\n  text-align: right;\n  direction: rtl;\n}\n\n.rtl .nav {\n  padding-right: 0;\n}\n\n.rtl .navbar-nav .nav-item {\n  float: right;\n}\n\n.rtl .navbar-nav .nav-item + .nav-item {\n  margin-right: 1rem;\n  margin-left: inherit;\n}\n\n.rtl th {\n  text-align: right;\n}\n\n.rtl .alert-dismissible {\n  padding-right: 1.25rem;\n  padding-left: 4rem;\n}\n\n.rtl .dropdown-menu {\n  right: 0;\n  text-align: right;\n}\n\n.rtl .checkbox label,\n.rtl .checkbox legend {\n  padding-right: 1.25rem;\n  padding-left: inherit;\n}\n\n\n.rtl .custom-control-label::after,\n.rtl .custom-control-label::before {\n  right: 0;\n  left: inherit;\n}\n\n.rtl .custom-select {\n  padding: 0.375rem 0.75rem 0.375rem 1.75rem;\n  background: #fff url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E\") no-repeat left 0.75rem center;\n  background-size: 8px 10px;\n}\n\n.rtl .custom-control {\n  padding-right: 1.5rem;\n  padding-left: inherit;\n  margin-right: inherit;\n  margin-left: 1rem;\n}\n\n.rtl .custom-control-indicator {\n  right: 0;\n  left: inherit;\n}\n\n.rtl .custom-file-label::after {\n  right: initial;\n  left: -1px;\n  border-radius: .25rem 0 0 .25rem;\n}\n\n.rtl .radio input,\n.rtl .radio-inline,\n.rtl .checkbox input,\n.rtl .checkbox-inline input {\n  margin-right: -1.25rem;\n  margin-left: inherit;\n}\n\n.rtl .list-group {\n  padding-right: 0;\n  padding-left: 40px;\n}\n\n.rtl .close {\n  float: left;\n}\n\n.rtl .modal-header .close {\n  margin: -15px auto -15px -15px;\n}\n\n.rtl .modal-footer > :not(:first-child) {\n  margin-right: .25rem;\n}\n\n.rtl .alert-dismissible .close {\n  right: inherit;\n  left: 0;\n}\n\n.rtl .dropdown-toggle::after {\n  margin-right: .255em;\n  margin-left: 0;\n}\n\n.rtl .form-check-input {\n  margin-right: -1.25rem;\n  margin-left: inherit;\n}\n\n.rtl .form-check-label {\n  padding-right: 1.25rem;\n  padding-left: inherit;\n}\n\n.rtl .offset-1 {\n  margin-right: 8.33333%;\n  margin-left: 0;\n}\n\n.rtl .offset-2 {\n  margin-right: 16.66667%;\n  margin-left: 0;\n}\n\n.rtl .offset-3 {\n  margin-right: 25%;\n  margin-left: 0;\n}\n\n.rtl .offset-4 {\n  margin-right: 33.33333%;\n  margin-left: 0;\n}\n\n.rtl .offset-5 {\n  margin-right: 41.66667%;\n  margin-left: 0;\n}\n\n.rtl .offset-6 {\n  margin-right: 50%;\n  margin-left: 0;\n}\n\n.rtl .offset-7 {\n  margin-right: 58.33333%;\n  margin-left: 0;\n}\n\n.rtl .offset-8 {\n  margin-right: 66.66667%;\n  margin-left: 0;\n}\n\n.rtl .offset-9 {\n  margin-right: 75%;\n  margin-left: 0;\n}\n\n.rtl .offset-10 {\n  margin-right: 83.33333%;\n  margin-left: 0;\n}\n\n.rtl .offset-11 {\n  margin-right: 91.66667%;\n  margin-left: 0;\n}\n\n@media (min-width: 420px) {\n  .rtl .offset-xs-0 {\n    margin-right: 0;\n    margin-left: 0;\n  }\n  .rtl .offset-xs-1 {\n    margin-right: 8.33333%;\n    margin-left: 0;\n  }\n  .rtl .offset-xs-2 {\n    margin-right: 16.66667%;\n    margin-left: 0;\n  }\n  .rtl .offset-xs-3 {\n    margin-right: 25%;\n    margin-left: 0;\n  }\n  .rtl .offset-xs-4 {\n    margin-right: 33.33333%;\n    margin-left: 0;\n  }\n  .rtl .offset-xs-5 {\n    margin-right: 41.66667%;\n    margin-left: 0;\n  }\n  .rtl .offset-xs-6 {\n    margin-right: 50%;\n    margin-left: 0;\n  }\n  .rtl .offset-xs-7 {\n    margin-right: 58.33333%;\n    margin-left: 0;\n  }\n  .rtl .offset-xs-8 {\n    margin-right: 66.66667%;\n    margin-left: 0;\n  }\n  .rtl .offset-xs-9 {\n    margin-right: 75%;\n    margin-left: 0;\n  }\n  .rtl .offset-xs-10 {\n    margin-right: 83.33333%;\n    margin-left: 0;\n  }\n  .rtl .offset-xs-11 {\n    margin-right: 91.66667%;\n    margin-left: 0;\n  }\n}\n\n@media (min-width: 576px) {\n  .rtl .offset-sm-0 {\n    margin-right: 0;\n    margin-left: 0;\n  }\n  .rtl .offset-sm-1 {\n    margin-right: 8.33333%;\n    margin-left: 0;\n  }\n  .rtl .offset-sm-2 {\n    margin-right: 16.66667%;\n    margin-left: 0;\n  }\n  .rtl .offset-sm-3 {\n    margin-right: 25%;\n    margin-left: 0;\n  }\n  .rtl .offset-sm-4 {\n    margin-right: 33.33333%;\n    margin-left: 0;\n  }\n  .rtl .offset-sm-5 {\n    margin-right: 41.66667%;\n    margin-left: 0;\n  }\n  .rtl .offset-sm-6 {\n    margin-right: 50%;\n    margin-left: 0;\n  }\n  .rtl .offset-sm-7 {\n    margin-right: 58.33333%;\n    margin-left: 0;\n  }\n  .rtl .offset-sm-8 {\n    margin-right: 66.66667%;\n    margin-left: 0;\n  }\n  .rtl .offset-sm-9 {\n    margin-right: 75%;\n    margin-left: 0;\n  }\n  .rtl .offset-sm-10 {\n    margin-right: 83.33333%;\n    margin-left: 0;\n  }\n  .rtl .offset-sm-11 {\n    margin-right: 91.66667%;\n    margin-left: 0;\n  }\n}\n\n@media (min-width: 768px) {\n  .rtl .offset-md-0 {\n    margin-right: 0;\n    margin-left: 0;\n  }\n  .rtl .offset-md-1 {\n    margin-right: 8.33333%;\n    margin-left: 0;\n  }\n  .rtl .offset-md-2 {\n    margin-right: 16.66667%;\n    margin-left: 0;\n  }\n  .rtl .offset-md-3 {\n    margin-right: 25%;\n    margin-left: 0;\n  }\n  .rtl .offset-md-4 {\n    margin-right: 33.33333%;\n    margin-left: 0;\n  }\n  .rtl .offset-md-5 {\n    margin-right: 41.66667%;\n    margin-left: 0;\n  }\n  .rtl .offset-md-6 {\n    margin-right: 50%;\n    margin-left: 0;\n  }\n  .rtl .offset-md-7 {\n    margin-right: 58.33333%;\n    margin-left: 0;\n  }\n  .rtl .offset-md-8 {\n    margin-right: 66.66667%;\n    margin-left: 0;\n  }\n  .rtl .offset-md-9 {\n    margin-right: 75%;\n    margin-left: 0;\n  }\n  .rtl .offset-md-10 {\n    margin-right: 83.33333%;\n    margin-left: 0;\n  }\n  .rtl .offset-md-11 {\n    margin-right: 91.66667%;\n    margin-left: 0;\n  }\n}\n\n@media (min-width: 992px) {\n  .rtl .offset-lg-0 {\n    margin-right: 0;\n    margin-left: 0;\n  }\n  .rtl .offset-lg-1 {\n    margin-right: 8.33333%;\n    margin-left: 0;\n  }\n  .rtl .offset-lg-2 {\n    margin-right: 16.66667%;\n    margin-left: 0;\n  }\n  .rtl .offset-lg-3 {\n    margin-right: 25%;\n    margin-left: 0;\n  }\n  .rtl .offset-lg-4 {\n    margin-right: 33.33333%;\n    margin-left: 0;\n  }\n  .rtl .offset-lg-5 {\n    margin-right: 41.66667%;\n    margin-left: 0;\n  }\n  .rtl .offset-lg-6 {\n    margin-right: 50%;\n    margin-left: 0;\n  }\n  .rtl .offset-lg-7 {\n    margin-right: 58.33333%;\n    margin-left: 0;\n  }\n  .rtl .offset-lg-8 {\n    margin-right: 66.66667%;\n    margin-left: 0;\n  }\n  .rtl .offset-lg-9 {\n    margin-right: 75%;\n    margin-left: 0;\n  }\n  .rtl .offset-lg-10 {\n    margin-right: 83.33333%;\n    margin-left: 0;\n  }\n  .rtl .offset-lg-11 {\n    margin-right: 91.66667%;\n    margin-left: 0;\n  }\n}\n\n@media (min-width: 1200px) {\n  .rtl .offset-xl-0 {\n    margin-right: 0;\n    margin-left: 0;\n  }\n  .rtl .offset-xl-1 {\n    margin-right: 8.33333%;\n    margin-left: 0;\n  }\n  .rtl .offset-xl-2 {\n    margin-right: 16.66667%;\n    margin-left: 0;\n  }\n  .rtl .offset-xl-3 {\n    margin-right: 25%;\n    margin-left: 0;\n  }\n  .rtl .offset-xl-4 {\n    margin-right: 33.33333%;\n    margin-left: 0;\n  }\n  .rtl .offset-xl-5 {\n    margin-right: 41.66667%;\n    margin-left: 0;\n  }\n  .rtl .offset-xl-6 {\n    margin-right: 50%;\n    margin-left: 0;\n  }\n  .rtl .offset-xl-7 {\n    margin-right: 58.33333%;\n    margin-left: 0;\n  }\n  .rtl .offset-xl-8 {\n    margin-right: 66.66667%;\n    margin-left: 0;\n  }\n  .rtl .offset-xl-9 {\n    margin-right: 75%;\n    margin-left: 0;\n  }\n  .rtl .offset-xl-10 {\n    margin-right: 83.33333%;\n    margin-left: 0;\n  }\n  .rtl .offset-xl-11 {\n    margin-right: 91.66667%;\n    margin-left: 0;\n  }\n}\n\n@media (min-width: 1440px) {\n  .rtl .offset-xxl-0 {\n    margin-right: 0;\n    margin-left: 0;\n  }\n  .rtl .offset-xxl-1 {\n    margin-right: 8.33333%;\n    margin-left: 0;\n  }\n  .rtl .offset-xxl-2 {\n    margin-right: 16.66667%;\n    margin-left: 0;\n  }\n  .rtl .offset-xxl-3 {\n    margin-right: 25%;\n    margin-left: 0;\n  }\n  .rtl .offset-xxl-4 {\n    margin-right: 33.33333%;\n    margin-left: 0;\n  }\n  .rtl .offset-xxl-5 {\n    margin-right: 41.66667%;\n    margin-left: 0;\n  }\n  .rtl .offset-xxl-6 {\n    margin-right: 50%;\n    margin-left: 0;\n  }\n  .rtl .offset-xxl-7 {\n    margin-right: 58.33333%;\n    margin-left: 0;\n  }\n  .rtl .offset-xxl-8 {\n    margin-right: 66.66667%;\n    margin-left: 0;\n  }\n  .rtl .offset-xxl-9 {\n    margin-right: 75%;\n    margin-left: 0;\n  }\n  .rtl .offset-xxl-10 {\n    margin-right: 83.33333%;\n    margin-left: 0;\n  }\n  .rtl .offset-xxl-11 {\n    margin-right: 91.66667%;\n    margin-left: 0;\n  }\n}\n\n.rtl .mr-0,\n.rtl .mx-0 {\n  margin-right: 0 !important;\n  margin-left: 0 !important;\n}\n\n.rtl .ml-0,\n.rtl .mx-0 {\n  margin-left: 0 !important;\n  margin-right: 0 !important;\n}\n\n.rtl .mr-1,\n.rtl .mx-1 {\n  margin-right: 0 !important;\n  margin-left: 0.25rem !important;\n}\n\n.rtl .ml-1,\n.rtl .mx-1 {\n  margin-left: 0 !important;\n  margin-right: 0.25rem !important;\n}\n\n.rtl .mr-2,\n.rtl .mx-2 {\n  margin-right: 0 !important;\n  margin-left: 0.5rem !important;\n}\n\n.rtl .ml-2,\n.rtl .mx-2 {\n  margin-left: 0 !important;\n  margin-right: 0.5rem !important;\n}\n\n.rtl .mr-3,\n.rtl .mx-3 {\n  margin-right: 0 !important;\n  margin-left: 1rem !important;\n}\n\n.rtl .ml-3,\n.rtl .mx-3 {\n  margin-left: 0 !important;\n  margin-right: 1rem !important;\n}\n\n.rtl .mr-4,\n.rtl .mx-4 {\n  margin-right: 0 !important;\n  margin-left: 1.5rem !important;\n}\n\n.rtl .ml-4,\n.rtl .mx-4 {\n  margin-left: 0 !important;\n  margin-right: 1.5rem !important;\n}\n\n.rtl .mr-5,\n.rtl .mx-5 {\n  margin-right: 0 !important;\n  margin-left: 3rem !important;\n}\n\n.rtl .ml-5,\n.rtl .mx-5 {\n  margin-left: 0 !important;\n  margin-right: 3rem !important;\n}\n\n.rtl .pr-0,\n.rtl .px-0 {\n  padding-right: 0 !important;\n  padding-left: 0 !important;\n}\n\n.rtl .pl-0,\n.rtl .px-0 {\n  padding-left: 0 !important;\n  padding-right: 0 !important;\n}\n\n.rtl .pr-1,\n.rtl .px-1 {\n  padding-right: 0 !important;\n  padding-left: 0.25rem !important;\n}\n\n.rtl .pl-1,\n.rtl .px-1 {\n  padding-left: 0 !important;\n  padding-right: 0.25rem !important;\n}\n\n.rtl .pr-2,\n.rtl .px-2 {\n  padding-right: 0 !important;\n  padding-left: 0.5rem !important;\n}\n\n.rtl .pl-2,\n.rtl .px-2 {\n  padding-left: 0 !important;\n  padding-right: 0.5rem !important;\n}\n\n.rtl .pr-3,\n.rtl .px-3 {\n  padding-right: 0 !important;\n  padding-left: 1rem !important;\n}\n\n.rtl .pl-3,\n.rtl .px-3 {\n  padding-left: 0 !important;\n  padding-right: 1rem !important;\n}\n\n.rtl .pr-4,\n.rtl .px-4 {\n  padding-right: 0 !important;\n  padding-left: 1.5rem !important;\n}\n\n.rtl .pl-4,\n.rtl .px-4 {\n  padding-left: 0 !important;\n  padding-right: 1.5rem !important;\n}\n\n.rtl .pr-5,\n.rtl .px-5 {\n  padding-right: 0 !important;\n  padding-left: 3rem !important;\n}\n\n.rtl .pl-5,\n.rtl .px-5 {\n  padding-left: 0 !important;\n  padding-right: 3rem !important;\n}\n\n.rtl .mr-auto,\n.rtl .mx-auto {\n  margin-right: 0 !important;\n  margin-left: auto !important;\n}\n\n.rtl .ml-auto,\n.rtl .mx-auto {\n  margin-right: auto !important;\n  margin-left: 0 !important;\n}\n\n@media (min-width: 420px) {\n  .rtl .mr-xs-0,\n  .rtl .mx-xs-0 {\n    margin-right: 0 !important;\n    margin-left: 0 !important;\n  }\n  .rtl .ml-xs-0,\n  .rtl .mx-xs-0 {\n    margin-left: 0 !important;\n    margin-right: 0 !important;\n  }\n  .rtl .mr-xs-1,\n  .rtl .mx-xs-1 {\n    margin-right: 0 !important;\n    margin-left: 0.25rem !important;\n  }\n  .rtl .ml-xs-1,\n  .rtl .mx-xs-1 {\n    margin-left: 0 !important;\n    margin-right: 0.25rem !important;\n  }\n  .rtl .mr-xs-2,\n  .rtl .mx-xs-2 {\n    margin-right: 0 !important;\n    margin-left: 0.5rem !important;\n  }\n  .rtl .ml-xs-2,\n  .rtl .mx-xs-2 {\n    margin-left: 0 !important;\n    margin-right: 0.5rem !important;\n  }\n  .rtl .mr-xs-3,\n  .rtl .mx-xs-3 {\n    margin-right: 0 !important;\n    margin-left: 1rem !important;\n  }\n  .rtl .ml-xs-3,\n  .rtl .mx-xs-3 {\n    margin-left: 0 !important;\n    margin-right: 1rem !important;\n  }\n  .rtl .mr-xs-4,\n  .rtl .mx-xs-4 {\n    margin-right: 0 !important;\n    margin-left: 1.5rem !important;\n  }\n  .rtl .ml-xs-4,\n  .rtl .mx-xs-4 {\n    margin-left: 0 !important;\n    margin-right: 1.5rem !important;\n  }\n  .rtl .mr-xs-5,\n  .rtl .mx-xs-5 {\n    margin-right: 0 !important;\n    margin-left: 3rem !important;\n  }\n  .rtl .ml-xs-5,\n  .rtl .mx-xs-5 {\n    margin-left: 0 !important;\n    margin-right: 3rem !important;\n  }\n  .rtl .pr-xs-0,\n  .rtl .px-xs-0 {\n    padding-right: 0 !important;\n    padding-left: 0 !important;\n  }\n  .rtl .pl-xs-0,\n  .rtl .px-xs-0 {\n    padding-left: 0 !important;\n    padding-right: 0 !important;\n  }\n  .rtl .pr-xs-1,\n  .rtl .px-xs-1 {\n    padding-right: 0 !important;\n    padding-left: 0.25rem !important;\n  }\n  .rtl .pl-xs-1,\n  .rtl .px-xs-1 {\n    padding-left: 0 !important;\n    padding-right: 0.25rem !important;\n  }\n  .rtl .pr-xs-2,\n  .rtl .px-xs-2 {\n    padding-right: 0 !important;\n    padding-left: 0.5rem !important;\n  }\n  .rtl .pl-xs-2,\n  .rtl .px-xs-2 {\n    padding-left: 0 !important;\n    padding-right: 0.5rem !important;\n  }\n  .rtl .pr-xs-3,\n  .rtl .px-xs-3 {\n    padding-right: 0 !important;\n    padding-left: 1rem !important;\n  }\n  .rtl .pl-xs-3,\n  .rtl .px-xs-3 {\n    padding-left: 0 !important;\n    padding-right: 1rem !important;\n  }\n  .rtl .pr-xs-4,\n  .rtl .px-xs-4 {\n    padding-right: 0 !important;\n    padding-left: 1.5rem !important;\n  }\n  .rtl .pl-xs-4,\n  .rtl .px-xs-4 {\n    padding-left: 0 !important;\n    padding-right: 1.5rem !important;\n  }\n  .rtl .pr-xs-5,\n  .rtl .px-xs-5 {\n    padding-right: 0 !important;\n    padding-left: 3rem !important;\n  }\n  .rtl .pl-xs-5,\n  .rtl .px-xs-5 {\n    padding-left: 0 !important;\n    padding-right: 3rem !important;\n  }\n  .rtl .mr-xs-auto,\n  .rtl .mx-xs-auto {\n    margin-right: 0 !important;\n    margin-left: auto !important;\n  }\n  .rtl .ml-xs-auto,\n  .rtl .mx-xs-auto {\n    margin-right: auto !important;\n    margin-left: 0 !important;\n  }\n}\n\n@media (min-width: 576px) {\n  .rtl .mr-sm-0,\n  .rtl .mx-sm-0 {\n    margin-right: 0 !important;\n    margin-left: 0 !important;\n  }\n  .rtl .ml-sm-0,\n  .rtl .mx-sm-0 {\n    margin-left: 0 !important;\n    margin-right: 0 !important;\n  }\n  .rtl .mr-sm-1,\n  .rtl .mx-sm-1 {\n    margin-right: 0 !important;\n    margin-left: 0.25rem !important;\n  }\n  .rtl .ml-sm-1,\n  .rtl .mx-sm-1 {\n    margin-left: 0 !important;\n    margin-right: 0.25rem !important;\n  }\n  .rtl .mr-sm-2,\n  .rtl .mx-sm-2 {\n    margin-right: 0 !important;\n    margin-left: 0.5rem !important;\n  }\n  .rtl .ml-sm-2,\n  .rtl .mx-sm-2 {\n    margin-left: 0 !important;\n    margin-right: 0.5rem !important;\n  }\n  .rtl .mr-sm-3,\n  .rtl .mx-sm-3 {\n    margin-right: 0 !important;\n    margin-left: 1rem !important;\n  }\n  .rtl .ml-sm-3,\n  .rtl .mx-sm-3 {\n    margin-left: 0 !important;\n    margin-right: 1rem !important;\n  }\n  .rtl .mr-sm-4,\n  .rtl .mx-sm-4 {\n    margin-right: 0 !important;\n    margin-left: 1.5rem !important;\n  }\n  .rtl .ml-sm-4,\n  .rtl .mx-sm-4 {\n    margin-left: 0 !important;\n    margin-right: 1.5rem !important;\n  }\n  .rtl .mr-sm-5,\n  .rtl .mx-sm-5 {\n    margin-right: 0 !important;\n    margin-left: 3rem !important;\n  }\n  .rtl .ml-sm-5,\n  .rtl .mx-sm-5 {\n    margin-left: 0 !important;\n    margin-right: 3rem !important;\n  }\n  .rtl .pr-sm-0,\n  .rtl .px-sm-0 {\n    padding-right: 0 !important;\n    padding-left: 0 !important;\n  }\n  .rtl .pl-sm-0,\n  .rtl .px-sm-0 {\n    padding-left: 0 !important;\n    padding-right: 0 !important;\n  }\n  .rtl .pr-sm-1,\n  .rtl .px-sm-1 {\n    padding-right: 0 !important;\n    padding-left: 0.25rem !important;\n  }\n  .rtl .pl-sm-1,\n  .rtl .px-sm-1 {\n    padding-left: 0 !important;\n    padding-right: 0.25rem !important;\n  }\n  .rtl .pr-sm-2,\n  .rtl .px-sm-2 {\n    padding-right: 0 !important;\n    padding-left: 0.5rem !important;\n  }\n  .rtl .pl-sm-2,\n  .rtl .px-sm-2 {\n    padding-left: 0 !important;\n    padding-right: 0.5rem !important;\n  }\n  .rtl .pr-sm-3,\n  .rtl .px-sm-3 {\n    padding-right: 0 !important;\n    padding-left: 1rem !important;\n  }\n  .rtl .pl-sm-3,\n  .rtl .px-sm-3 {\n    padding-left: 0 !important;\n    padding-right: 1rem !important;\n  }\n  .rtl .pr-sm-4,\n  .rtl .px-sm-4 {\n    padding-right: 0 !important;\n    padding-left: 1.5rem !important;\n  }\n  .rtl .pl-sm-4,\n  .rtl .px-sm-4 {\n    padding-left: 0 !important;\n    padding-right: 1.5rem !important;\n  }\n  .rtl .pr-sm-5,\n  .rtl .px-sm-5 {\n    padding-right: 0 !important;\n    padding-left: 3rem !important;\n  }\n  .rtl .pl-sm-5,\n  .rtl .px-sm-5 {\n    padding-left: 0 !important;\n    padding-right: 3rem !important;\n  }\n  .rtl .mr-sm-auto,\n  .rtl .mx-sm-auto {\n    margin-right: 0 !important;\n    margin-left: auto !important;\n  }\n  .rtl .ml-sm-auto,\n  .rtl .mx-sm-auto {\n    margin-right: auto !important;\n    margin-left: 0 !important;\n  }\n}\n\n@media (min-width: 768px) {\n  .rtl .mr-md-0,\n  .rtl .mx-md-0 {\n    margin-right: 0 !important;\n    margin-left: 0 !important;\n  }\n  .rtl .ml-md-0,\n  .rtl .mx-md-0 {\n    margin-left: 0 !important;\n    margin-right: 0 !important;\n  }\n  .rtl .mr-md-1,\n  .rtl .mx-md-1 {\n    margin-right: 0 !important;\n    margin-left: 0.25rem !important;\n  }\n  .rtl .ml-md-1,\n  .rtl .mx-md-1 {\n    margin-left: 0 !important;\n    margin-right: 0.25rem !important;\n  }\n  .rtl .mr-md-2,\n  .rtl .mx-md-2 {\n    margin-right: 0 !important;\n    margin-left: 0.5rem !important;\n  }\n  .rtl .ml-md-2,\n  .rtl .mx-md-2 {\n    margin-left: 0 !important;\n    margin-right: 0.5rem !important;\n  }\n  .rtl .mr-md-3,\n  .rtl .mx-md-3 {\n    margin-right: 0 !important;\n    margin-left: 1rem !important;\n  }\n  .rtl .ml-md-3,\n  .rtl .mx-md-3 {\n    margin-left: 0 !important;\n    margin-right: 1rem !important;\n  }\n  .rtl .mr-md-4,\n  .rtl .mx-md-4 {\n    margin-right: 0 !important;\n    margin-left: 1.5rem !important;\n  }\n  .rtl .ml-md-4,\n  .rtl .mx-md-4 {\n    margin-left: 0 !important;\n    margin-right: 1.5rem !important;\n  }\n  .rtl .mr-md-5,\n  .rtl .mx-md-5 {\n    margin-right: 0 !important;\n    margin-left: 3rem !important;\n  }\n  .rtl .ml-md-5,\n  .rtl .mx-md-5 {\n    margin-left: 0 !important;\n    margin-right: 3rem !important;\n  }\n  .rtl .pr-md-0,\n  .rtl .px-md-0 {\n    padding-right: 0 !important;\n    padding-left: 0 !important;\n  }\n  .rtl .pl-md-0,\n  .rtl .px-md-0 {\n    padding-left: 0 !important;\n    padding-right: 0 !important;\n  }\n  .rtl .pr-md-1,\n  .rtl .px-md-1 {\n    padding-right: 0 !important;\n    padding-left: 0.25rem !important;\n  }\n  .rtl .pl-md-1,\n  .rtl .px-md-1 {\n    padding-left: 0 !important;\n    padding-right: 0.25rem !important;\n  }\n  .rtl .pr-md-2,\n  .rtl .px-md-2 {\n    padding-right: 0 !important;\n    padding-left: 0.5rem !important;\n  }\n  .rtl .pl-md-2,\n  .rtl .px-md-2 {\n    padding-left: 0 !important;\n    padding-right: 0.5rem !important;\n  }\n  .rtl .pr-md-3,\n  .rtl .px-md-3 {\n    padding-right: 0 !important;\n    padding-left: 1rem !important;\n  }\n  .rtl .pl-md-3,\n  .rtl .px-md-3 {\n    padding-left: 0 !important;\n    padding-right: 1rem !important;\n  }\n  .rtl .pr-md-4,\n  .rtl .px-md-4 {\n    padding-right: 0 !important;\n    padding-left: 1.5rem !important;\n  }\n  .rtl .pl-md-4,\n  .rtl .px-md-4 {\n    padding-left: 0 !important;\n    padding-right: 1.5rem !important;\n  }\n  .rtl .pr-md-5,\n  .rtl .px-md-5 {\n    padding-right: 0 !important;\n    padding-left: 3rem !important;\n  }\n  .rtl .pl-md-5,\n  .rtl .px-md-5 {\n    padding-left: 0 !important;\n    padding-right: 3rem !important;\n  }\n  .rtl .mr-md-auto,\n  .rtl .mx-md-auto {\n    margin-right: 0 !important;\n    margin-left: auto !important;\n  }\n  .rtl .ml-md-auto,\n  .rtl .mx-md-auto {\n    margin-right: auto !important;\n    margin-left: 0 !important;\n  }\n}\n\n@media (min-width: 992px) {\n  .rtl .mr-lg-0,\n  .rtl .mx-lg-0 {\n    margin-right: 0 !important;\n    margin-left: 0 !important;\n  }\n  .rtl .ml-lg-0,\n  .rtl .mx-lg-0 {\n    margin-left: 0 !important;\n    margin-right: 0 !important;\n  }\n  .rtl .mr-lg-1,\n  .rtl .mx-lg-1 {\n    margin-right: 0 !important;\n    margin-left: 0.25rem !important;\n  }\n  .rtl .ml-lg-1,\n  .rtl .mx-lg-1 {\n    margin-left: 0 !important;\n    margin-right: 0.25rem !important;\n  }\n  .rtl .mr-lg-2,\n  .rtl .mx-lg-2 {\n    margin-right: 0 !important;\n    margin-left: 0.5rem !important;\n  }\n  .rtl .ml-lg-2,\n  .rtl .mx-lg-2 {\n    margin-left: 0 !important;\n    margin-right: 0.5rem !important;\n  }\n  .rtl .mr-lg-3,\n  .rtl .mx-lg-3 {\n    margin-right: 0 !important;\n    margin-left: 1rem !important;\n  }\n  .rtl .ml-lg-3,\n  .rtl .mx-lg-3 {\n    margin-left: 0 !important;\n    margin-right: 1rem !important;\n  }\n  .rtl .mr-lg-4,\n  .rtl .mx-lg-4 {\n    margin-right: 0 !important;\n    margin-left: 1.5rem !important;\n  }\n  .rtl .ml-lg-4,\n  .rtl .mx-lg-4 {\n    margin-left: 0 !important;\n    margin-right: 1.5rem !important;\n  }\n  .rtl .mr-lg-5,\n  .rtl .mx-lg-5 {\n    margin-right: 0 !important;\n    margin-left: 3rem !important;\n  }\n  .rtl .ml-lg-5,\n  .rtl .mx-lg-5 {\n    margin-left: 0 !important;\n    margin-right: 3rem !important;\n  }\n  .rtl .pr-lg-0,\n  .rtl .px-lg-0 {\n    padding-right: 0 !important;\n    padding-left: 0 !important;\n  }\n  .rtl .pl-lg-0,\n  .rtl .px-lg-0 {\n    padding-left: 0 !important;\n    padding-right: 0 !important;\n  }\n  .rtl .pr-lg-1,\n  .rtl .px-lg-1 {\n    padding-right: 0 !important;\n    padding-left: 0.25rem !important;\n  }\n  .rtl .pl-lg-1,\n  .rtl .px-lg-1 {\n    padding-left: 0 !important;\n    padding-right: 0.25rem !important;\n  }\n  .rtl .pr-lg-2,\n  .rtl .px-lg-2 {\n    padding-right: 0 !important;\n    padding-left: 0.5rem !important;\n  }\n  .rtl .pl-lg-2,\n  .rtl .px-lg-2 {\n    padding-left: 0 !important;\n    padding-right: 0.5rem !important;\n  }\n  .rtl .pr-lg-3,\n  .rtl .px-lg-3 {\n    padding-right: 0 !important;\n    padding-left: 1rem !important;\n  }\n  .rtl .pl-lg-3,\n  .rtl .px-lg-3 {\n    padding-left: 0 !important;\n    padding-right: 1rem !important;\n  }\n  .rtl .pr-lg-4,\n  .rtl .px-lg-4 {\n    padding-right: 0 !important;\n    padding-left: 1.5rem !important;\n  }\n  .rtl .pl-lg-4,\n  .rtl .px-lg-4 {\n    padding-left: 0 !important;\n    padding-right: 1.5rem !important;\n  }\n  .rtl .pr-lg-5,\n  .rtl .px-lg-5 {\n    padding-right: 0 !important;\n    padding-left: 3rem !important;\n  }\n  .rtl .pl-lg-5,\n  .rtl .px-lg-5 {\n    padding-left: 0 !important;\n    padding-right: 3rem !important;\n  }\n  .rtl .mr-lg-auto,\n  .rtl .mx-lg-auto {\n    margin-right: 0 !important;\n    margin-left: auto !important;\n  }\n  .rtl .ml-lg-auto,\n  .rtl .mx-lg-auto {\n    margin-right: auto !important;\n    margin-left: 0 !important;\n  }\n}\n\n@media (min-width: 1200px) {\n  .rtl .mr-xl-0,\n  .rtl .mx-xl-0 {\n    margin-right: 0 !important;\n    margin-left: 0 !important;\n  }\n  .rtl .ml-xl-0,\n  .rtl .mx-xl-0 {\n    margin-left: 0 !important;\n    margin-right: 0 !important;\n  }\n  .rtl .mr-xl-1,\n  .rtl .mx-xl-1 {\n    margin-right: 0 !important;\n    margin-left: 0.25rem !important;\n  }\n  .rtl .ml-xl-1,\n  .rtl .mx-xl-1 {\n    margin-left: 0 !important;\n    margin-right: 0.25rem !important;\n  }\n  .rtl .mr-xl-2,\n  .rtl .mx-xl-2 {\n    margin-right: 0 !important;\n    margin-left: 0.5rem !important;\n  }\n  .rtl .ml-xl-2,\n  .rtl .mx-xl-2 {\n    margin-left: 0 !important;\n    margin-right: 0.5rem !important;\n  }\n  .rtl .mr-xl-3,\n  .rtl .mx-xl-3 {\n    margin-right: 0 !important;\n    margin-left: 1rem !important;\n  }\n  .rtl .ml-xl-3,\n  .rtl .mx-xl-3 {\n    margin-left: 0 !important;\n    margin-right: 1rem !important;\n  }\n  .rtl .mr-xl-4,\n  .rtl .mx-xl-4 {\n    margin-right: 0 !important;\n    margin-left: 1.5rem !important;\n  }\n  .rtl .ml-xl-4,\n  .rtl .mx-xl-4 {\n    margin-left: 0 !important;\n    margin-right: 1.5rem !important;\n  }\n  .rtl .mr-xl-5,\n  .rtl .mx-xl-5 {\n    margin-right: 0 !important;\n    margin-left: 3rem !important;\n  }\n  .rtl .ml-xl-5,\n  .rtl .mx-xl-5 {\n    margin-left: 0 !important;\n    margin-right: 3rem !important;\n  }\n  .rtl .pr-xl-0,\n  .rtl .px-xl-0 {\n    padding-right: 0 !important;\n    padding-left: 0 !important;\n  }\n  .rtl .pl-xl-0,\n  .rtl .px-xl-0 {\n    padding-left: 0 !important;\n    padding-right: 0 !important;\n  }\n  .rtl .pr-xl-1,\n  .rtl .px-xl-1 {\n    padding-right: 0 !important;\n    padding-left: 0.25rem !important;\n  }\n  .rtl .pl-xl-1,\n  .rtl .px-xl-1 {\n    padding-left: 0 !important;\n    padding-right: 0.25rem !important;\n  }\n  .rtl .pr-xl-2,\n  .rtl .px-xl-2 {\n    padding-right: 0 !important;\n    padding-left: 0.5rem !important;\n  }\n  .rtl .pl-xl-2,\n  .rtl .px-xl-2 {\n    padding-left: 0 !important;\n    padding-right: 0.5rem !important;\n  }\n  .rtl .pr-xl-3,\n  .rtl .px-xl-3 {\n    padding-right: 0 !important;\n    padding-left: 1rem !important;\n  }\n  .rtl .pl-xl-3,\n  .rtl .px-xl-3 {\n    padding-left: 0 !important;\n    padding-right: 1rem !important;\n  }\n  .rtl .pr-xl-4,\n  .rtl .px-xl-4 {\n    padding-right: 0 !important;\n    padding-left: 1.5rem !important;\n  }\n  .rtl .pl-xl-4,\n  .rtl .px-xl-4 {\n    padding-left: 0 !important;\n    padding-right: 1.5rem !important;\n  }\n  .rtl .pr-xl-5,\n  .rtl .px-xl-5 {\n    padding-right: 0 !important;\n    padding-left: 3rem !important;\n  }\n  .rtl .pl-xl-5,\n  .rtl .px-xl-5 {\n    padding-left: 0 !important;\n    padding-right: 3rem !important;\n  }\n  .rtl .mr-xl-auto,\n  .rtl .mx-xl-auto {\n    margin-right: 0 !important;\n    margin-left: auto !important;\n  }\n  .rtl .ml-xl-auto,\n  .rtl .mx-xl-auto {\n    margin-right: auto !important;\n    margin-left: 0 !important;\n  }\n}\n\n@media (min-width: 1440px) {\n  .rtl .mr-xxl-0,\n  .rtl .mx-xxl-0 {\n    margin-right: 0 !important;\n    margin-left: 0 !important;\n  }\n  .rtl .ml-xxl-0,\n  .rtl .mx-xxl-0 {\n    margin-left: 0 !important;\n    margin-right: 0 !important;\n  }\n  .rtl .mr-xxl-1,\n  .rtl .mx-xxl-1 {\n    margin-right: 0 !important;\n    margin-left: 0.25rem !important;\n  }\n  .rtl .ml-xxl-1,\n  .rtl .mx-xxl-1 {\n    margin-left: 0 !important;\n    margin-right: 0.25rem !important;\n  }\n  .rtl .mr-xxl-2,\n  .rtl .mx-xxl-2 {\n    margin-right: 0 !important;\n    margin-left: 0.5rem !important;\n  }\n  .rtl .ml-xxl-2,\n  .rtl .mx-xxl-2 {\n    margin-left: 0 !important;\n    margin-right: 0.5rem !important;\n  }\n  .rtl .mr-xxl-3,\n  .rtl .mx-xxl-3 {\n    margin-right: 0 !important;\n    margin-left: 1rem !important;\n  }\n  .rtl .ml-xxl-3,\n  .rtl .mx-xxl-3 {\n    margin-left: 0 !important;\n    margin-right: 1rem !important;\n  }\n  .rtl .mr-xxl-4,\n  .rtl .mx-xxl-4 {\n    margin-right: 0 !important;\n    margin-left: 1.5rem !important;\n  }\n  .rtl .ml-xxl-4,\n  .rtl .mx-xxl-4 {\n    margin-left: 0 !important;\n    margin-right: 1.5rem !important;\n  }\n  .rtl .mr-xxl-5,\n  .rtl .mx-xxl-5 {\n    margin-right: 0 !important;\n    margin-left: 3rem !important;\n  }\n  .rtl .ml-xxl-5,\n  .rtl .mx-xxl-5 {\n    margin-left: 0 !important;\n    margin-right: 3rem !important;\n  }\n  .rtl .pr-xxl-0,\n  .rtl .px-xxl-0 {\n    padding-right: 0 !important;\n    padding-left: 0 !important;\n  }\n  .rtl .pl-xxl-0,\n  .rtl .px-xxl-0 {\n    padding-left: 0 !important;\n    padding-right: 0 !important;\n  }\n  .rtl .pr-xxl-1,\n  .rtl .px-xxl-1 {\n    padding-right: 0 !important;\n    padding-left: 0.25rem !important;\n  }\n  .rtl .pl-xxl-1,\n  .rtl .px-xxl-1 {\n    padding-left: 0 !important;\n    padding-right: 0.25rem !important;\n  }\n  .rtl .pr-xxl-2,\n  .rtl .px-xxl-2 {\n    padding-right: 0 !important;\n    padding-left: 0.5rem !important;\n  }\n  .rtl .pl-xxl-2,\n  .rtl .px-xxl-2 {\n    padding-left: 0 !important;\n    padding-right: 0.5rem !important;\n  }\n  .rtl .pr-xxl-3,\n  .rtl .px-xxl-3 {\n    padding-right: 0 !important;\n    padding-left: 1rem !important;\n  }\n  .rtl .pl-xxl-3,\n  .rtl .px-xxl-3 {\n    padding-left: 0 !important;\n    padding-right: 1rem !important;\n  }\n  .rtl .pr-xxl-4,\n  .rtl .px-xxl-4 {\n    padding-right: 0 !important;\n    padding-left: 1.5rem !important;\n  }\n  .rtl .pl-xxl-4,\n  .rtl .px-xxl-4 {\n    padding-left: 0 !important;\n    padding-right: 1.5rem !important;\n  }\n  .rtl .pr-xxl-5,\n  .rtl .px-xxl-5 {\n    padding-right: 0 !important;\n    padding-left: 3rem !important;\n  }\n  .rtl .pl-xxl-5,\n  .rtl .px-xxl-5 {\n    padding-left: 0 !important;\n    padding-right: 3rem !important;\n  }\n  .rtl .mr-xxl-auto,\n  .rtl .mx-xxl-auto {\n    margin-right: 0 !important;\n    margin-left: auto !important;\n  }\n  .rtl .ml-xxl-auto,\n  .rtl .mx-xxl-auto {\n    margin-right: auto !important;\n    margin-left: 0 !important;\n  }\n}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./resources/css/vendor/dropzone.min.css":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./resources/css/vendor/dropzone.min.css ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@-webkit-keyframes passing-through{0%{opacity:0;-webkit-transform:translateY(40px);transform:translateY(40px)}30%, 70%{opacity:1;-webkit-transform:translateY(0px);transform:translateY(0px)}100%{opacity:0;-webkit-transform:translateY(-40px);transform:translateY(-40px)}}@keyframes passing-through{0%{opacity:0;-webkit-transform:translateY(40px);transform:translateY(40px)}30%, 70%{opacity:1;-webkit-transform:translateY(0px);transform:translateY(0px)}100%{opacity:0;-webkit-transform:translateY(-40px);transform:translateY(-40px)}}@-webkit-keyframes slide-in{0%{opacity:0;-webkit-transform:translateY(40px);transform:translateY(40px)}30%{opacity:1;-webkit-transform:translateY(0px);transform:translateY(0px)}}@keyframes slide-in{0%{opacity:0;-webkit-transform:translateY(40px);transform:translateY(40px)}30%{opacity:1;-webkit-transform:translateY(0px);transform:translateY(0px)}}@-webkit-keyframes pulse{0%{-webkit-transform:scale(1);transform:scale(1)}10%{-webkit-transform:scale(1.1);transform:scale(1.1)}20%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes pulse{0%{-webkit-transform:scale(1);transform:scale(1)}10%{-webkit-transform:scale(1.1);transform:scale(1.1)}20%{-webkit-transform:scale(1);transform:scale(1)}}.dropzone,.dropzone *{-webkit-box-sizing:border-box;box-sizing:border-box}.dropzone{min-height:150px;border:2px solid rgba(0,0,0,0.3);background:white;padding:20px 20px}.dropzone.dz-clickable{cursor:pointer}.dropzone.dz-clickable *{cursor:default}.dropzone.dz-clickable .dz-message,.dropzone.dz-clickable .dz-message *{cursor:pointer}.dropzone.dz-started .dz-message{display:none}.dropzone.dz-drag-hover{border-style:solid}.dropzone.dz-drag-hover .dz-message{opacity:0.5}.dropzone .dz-message{text-align:center;margin:2em 0}.dropzone .dz-preview{position:relative;display:inline-block;vertical-align:top;margin:16px;min-height:100px}.dropzone .dz-preview:hover{z-index:1000}.dropzone .dz-preview:hover .dz-details{opacity:1}.dropzone .dz-preview.dz-file-preview .dz-image{border-radius:20px;background:#999;background:-webkit-gradient(linear, left top, left bottom, from(#eee), to(#ddd));background:linear-gradient(to bottom, #eee, #ddd)}.dropzone .dz-preview.dz-file-preview .dz-details{opacity:1}.dropzone .dz-preview.dz-image-preview{background:white}.dropzone .dz-preview.dz-image-preview .dz-details{-webkit-transition:opacity 0.2s linear;transition:opacity 0.2s linear}.dropzone .dz-preview .dz-remove{font-size:14px;text-align:center;display:block;cursor:pointer;border:none}.dropzone .dz-preview .dz-remove:hover{text-decoration:underline}.dropzone .dz-preview:hover .dz-details{opacity:1}.dropzone .dz-preview .dz-details{z-index:20;position:absolute;top:0;left:0;opacity:0;font-size:13px;min-width:100%;max-width:100%;padding:2em 1em;text-align:center;color:rgba(0,0,0,0.9);line-height:150%}.dropzone .dz-preview .dz-details .dz-size{margin-bottom:1em;font-size:16px}.dropzone .dz-preview .dz-details .dz-filename{white-space:nowrap}.dropzone .dz-preview .dz-details .dz-filename:hover span{border:1px solid rgba(200,200,200,0.8);background-color:rgba(255,255,255,0.8)}.dropzone .dz-preview .dz-details .dz-filename:not(:hover){overflow:hidden;text-overflow:ellipsis}.dropzone .dz-preview .dz-details .dz-filename:not(:hover) span{border:1px solid transparent}.dropzone .dz-preview .dz-details .dz-filename span,.dropzone .dz-preview .dz-details .dz-size span{background-color:rgba(255,255,255,0.4);padding:0 0.4em;border-radius:3px}.dropzone .dz-preview:hover .dz-image img{-webkit-transform:scale(1.05, 1.05);transform:scale(1.05, 1.05);-webkit-filter:blur(8px);filter:blur(8px)}.dropzone .dz-preview .dz-image{border-radius:20px;overflow:hidden;width:120px;height:120px;position:relative;display:block;z-index:10}.dropzone .dz-preview .dz-image img{display:block}.dropzone .dz-preview.dz-success .dz-success-mark{-webkit-animation:passing-through 3s cubic-bezier(0.77, 0, 0.175, 1);animation:passing-through 3s cubic-bezier(0.77, 0, 0.175, 1)}.dropzone .dz-preview.dz-error .dz-error-mark{opacity:1;-webkit-animation:slide-in 3s cubic-bezier(0.77, 0, 0.175, 1);animation:slide-in 3s cubic-bezier(0.77, 0, 0.175, 1)}.dropzone .dz-preview .dz-success-mark,.dropzone .dz-preview .dz-error-mark{pointer-events:none;opacity:0;z-index:500;position:absolute;display:block;top:50%;left:50%;margin-left:-27px;margin-top:-27px}.dropzone .dz-preview .dz-success-mark svg,.dropzone .dz-preview .dz-error-mark svg{display:block;width:54px;height:54px}.dropzone .dz-preview.dz-processing .dz-progress{opacity:1;-webkit-transition:all 0.2s linear;transition:all 0.2s linear}.dropzone .dz-preview.dz-complete .dz-progress{opacity:0;-webkit-transition:opacity 0.4s ease-in;transition:opacity 0.4s ease-in}.dropzone .dz-preview:not(.dz-processing) .dz-progress{-webkit-animation:pulse 6s ease infinite;animation:pulse 6s ease infinite}.dropzone .dz-preview .dz-progress{opacity:1;z-index:1000;pointer-events:none;position:absolute;height:16px;left:50%;top:50%;margin-top:-8px;width:80px;margin-left:-40px;background:rgba(255,255,255,0.9);-webkit-transform:scale(1);border-radius:8px;overflow:hidden}.dropzone .dz-preview .dz-progress .dz-upload{background:#333;background:-webkit-gradient(linear, left top, left bottom, from(#666), to(#444));background:linear-gradient(to bottom, #666, #444);position:absolute;top:0;left:0;bottom:0;width:0;-webkit-transition:width 300ms ease-in-out;transition:width 300ms ease-in-out}.dropzone .dz-preview.dz-error .dz-error-message{display:block}.dropzone .dz-preview.dz-error:hover .dz-error-message{opacity:1;pointer-events:auto}.dropzone .dz-preview .dz-error-message{pointer-events:none;z-index:1000;position:absolute;display:block;display:none;opacity:0;-webkit-transition:opacity 0.3s ease;transition:opacity 0.3s ease;border-radius:8px;font-size:13px;top:130px;left:-10px;width:140px;background:#be2626;background:-webkit-gradient(linear, left top, left bottom, from(#be2626), to(#a92222));background:linear-gradient(to bottom, #be2626, #a92222);padding:0.5em 1.2em;color:white}.dropzone .dz-preview .dz-error-message:after{content:'';position:absolute;top:-6px;left:64px;width:0;height:0;border-left:6px solid transparent;border-right:6px solid transparent;border-bottom:6px solid #be2626}\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************************************/
/***/ (function(module) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
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

/***/ }),

/***/ "./node_modules/bootstrap-vue/dist/bootstrap-vue.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap-vue/dist/bootstrap-vue.css ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_bootstrap_vue_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./bootstrap-vue.css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/bootstrap-vue/dist/bootstrap-vue.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_bootstrap_vue_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_bootstrap_vue_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/video.js/dist/video-js.css":
/*!*************************************************!*\
  !*** ./node_modules/video.js/dist/video-js.css ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_video_js_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./video-js.css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/video.js/dist/video-js.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_video_js_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_video_js_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/css/vendor/bootstrap.min.css":
/*!************************************************!*\
  !*** ./resources/css/vendor/bootstrap.min.css ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./bootstrap.min.css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./resources/css/vendor/bootstrap.min.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/css/vendor/bootstrap.rtl.only.min.css":
/*!*********************************************************!*\
  !*** ./resources/css/vendor/bootstrap.rtl.only.min.css ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_bootstrap_rtl_only_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./bootstrap.rtl.only.min.css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./resources/css/vendor/bootstrap.rtl.only.min.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_bootstrap_rtl_only_min_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_bootstrap_rtl_only_min_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/css/vendor/dropzone.min.css":
/*!***********************************************!*\
  !*** ./resources/css/vendor/dropzone.min.css ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_dropzone_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./dropzone.min.css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./resources/css/vendor/dropzone.min.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_dropzone_min_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_dropzone_min_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/index": 0,
/******/ 			"css/app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkEcommerce_vue"] = self["webpackChunkEcommerce_vue"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/app"], function() { return __webpack_require__("./resources/js/index.js"); })
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/app"], function() { return __webpack_require__("./resources/sass/app.scss"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;