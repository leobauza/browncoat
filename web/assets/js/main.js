/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _getPrototypeOf = __webpack_require__(1);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(27);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(28);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(32);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(79);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _defineProperty2 = __webpack_require__(87);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _assign = __webpack_require__(88);

	var _assign2 = _interopRequireDefault(_assign);

	var _microcosm = __webpack_require__(92);

	var _microcosm2 = _interopRequireDefault(_microcosm);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var start = function start() {
	  return;
	};
	// Action
	/**
	 * Microcosm example w/o React.
	 *
	 * This includes:
	 * x Microcosm (repo) - like redux stores
	 * x Domains - like redux reducers (but different)
	 * x Actions - which are not just static object but functions.
	 */

	var increase = function increase() {
	  return function (action) {
	    action.open('open payload');
	    setTimeout(function () {
	      return action.send('loading payload');
	    }, 500); // triggers action.loading and .onUpdate()
	    setTimeout(function () {
	      return action.resolve('done payload');
	    }, 1000);
	  };
	};
	var decrease = function decrease() {
	  return;
	};

	// Domain is like a Reducer.
	var Count = {
	  getInitialState: function getInitialState() {
	    return {
	      type: 'Hello World',
	      count: 0,
	      addActionHistory: false,
	      renderCount: 0
	    };
	  },
	  start: function start(state) {
	    return (0, _assign2.default)({}, state, {
	      addActionHistory: true
	    });
	  },
	  open: function open(state, payload) {
	    console.log("=============");
	    console.log("open");
	    console.log("state:", state);
	    console.log("payload:", payload);
	    return (0, _assign2.default)({}, state, {
	      type: "OPEN...",
	      addActionHistory: false
	    });
	  },
	  loading: function loading(state, payload) {
	    console.log("=============");
	    console.log("loading");
	    console.log("state:", state);
	    console.log("payload:", payload);
	    return (0, _assign2.default)({}, state, {
	      type: "LOADING...",
	      addActionHistory: false
	    });
	  },
	  increase: function increase(state, payload) {
	    console.log("=============");
	    console.log("done/default/resolve");
	    console.log("state:", state);
	    console.log("payload:", payload);
	    return (0, _assign2.default)({}, state, {
	      type: "DONE",
	      count: state.count + 1,
	      addActionHistory: true,
	      renderCount: state.renderCount + 1
	    });
	  },
	  decrease: function decrease(state, payload) {
	    return (0, _assign2.default)({}, state, {
	      type: "DONE",
	      count: state.count - 1,
	      addActionHistory: true,
	      renderCount: state.renderCount + 1
	    });
	  },

	  // Like the switch statements in a reducer.
	  register: function register() {
	    var _ref;

	    // Why does this get called so many times?
	    console.log("=============");
	    console.log("Function to string:", [increase].toString());
	    console.log("Function to string:", [increase.open].toString());
	    console.log("Function to string:", [increase.loading].toString());
	    console.log("Function to string:", [increase.done].toString());
	    return _ref = {}, (0, _defineProperty3.default)(_ref, start, this.start), (0, _defineProperty3.default)(_ref, increase.open, this.open), (0, _defineProperty3.default)(_ref, increase.loading, this.loading), (0, _defineProperty3.default)(_ref, increase, this.increase), (0, _defineProperty3.default)(_ref, decrease, this.decrease), _ref;
	  }
	};

	// Repo (microcosm) is like a Store

	var Repo = function (_Microcosm) {
	  (0, _inherits3.default)(Repo, _Microcosm);

	  function Repo() {
	    (0, _classCallCheck3.default)(this, Repo);
	    return (0, _possibleConstructorReturn3.default)(this, (Repo.__proto__ || (0, _getPrototypeOf2.default)(Repo)).apply(this, arguments));
	  }

	  (0, _createClass3.default)(Repo, [{
	    key: 'setup',
	    value: function setup() {
	      // Like createStore (?)
	      this.addDomain('counter', Count);
	    }
	  }]);
	  return Repo;
	}(_microcosm2.default);

	// Initialize empty list of actions for undo/redo.


	var actionList = [];

	// Like createStore.
	var repo = new Repo({
	  maxHistory: Infinity // needed for checkout to work.
	});
	// Naive Renderer.
	var render = function render() {
	  var counter = repo.state.counter;
	  document.getElementById('app').getElementsByTagName('h1')[0].innerHTML = counter.type;

	  if (counter.addActionHistory) {
	    document.getElementById('count').innerHTML = counter.count;
	    actionList.forEach(function (v, k) {
	      console.log(counter.renderCount);
	      console.log(v, k);
	      // let el = document.createElement("a");
	      // el.setAttribute('href', `#${counter.renderCount}`);
	      // el.innerHTML = counter.count;
	      // el.classList.add('btn');
	      // document.getElementById('action-nav').appendChild(el);
	    });
	  }
	};

	document.getElementById('increase').addEventListener('click', function () {
	  actionList.push(repo.push(increase));
	});
	document.getElementById('decrease').addEventListener('click', function () {
	  actionList.push(repo.push(decrease));
	});
	document.getElementById('action-nav').addEventListener('click', function (e) {
	  e.preventDefault();
	  repo.checkout(actionList[e.target.getAttribute('href').substr(1)]);
	});

	/**
	 * repon.on('change', fn) is like store.subscribe(fn)
	 */
	repo.on('change', function () {
	  render();
	});

	// render(); // this wouldn't record an action as my first action.
	actionList.push(repo.push(start));

	// let actionList = [];
	// let interval = setInterval(function () {
	//   // repo.push is like store.dispatch
	//   // BUT you push a function not a string.
	//   // BUT you can just push a string as well.
	//   actionList.push(repo.push(increase));
	//   // actionList.push(repo.push('INCREASE_COUNTER'));
	//   // console.log(repo.state.count);
	//   console.log(actionList);
	// }, 1000);
	//
	// setTimeout(function () {
	//   clearInterval(interval);
	//   repo.checkout(actionList[0])
	//   console.log(repo.state.count);
	// }, 10000);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(2), __esModule: true };

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(3);
	module.exports = __webpack_require__(14).Object.getPrototypeOf;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject        = __webpack_require__(4)
	  , $getPrototypeOf = __webpack_require__(6);

	__webpack_require__(12)('getPrototypeOf', function(){
	  return function getPrototypeOf(it){
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(5);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 5 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(7)
	  , toObject    = __webpack_require__(4)
	  , IE_PROTO    = __webpack_require__(8)('IE_PROTO')
	  , ObjectProto = Object.prototype;

	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(9)('keys')
	  , uid    = __webpack_require__(11);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(10)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 10 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 11 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(13)
	  , core    = __webpack_require__(14)
	  , fails   = __webpack_require__(23);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(10)
	  , core      = __webpack_require__(14)
	  , ctx       = __webpack_require__(15)
	  , hide      = __webpack_require__(17)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 14 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(16);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(18)
	  , createDesc = __webpack_require__(26);
	module.exports = __webpack_require__(22) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(19)
	  , IE8_DOM_DEFINE = __webpack_require__(21)
	  , toPrimitive    = __webpack_require__(25)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(22) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(20);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(22) && !__webpack_require__(23)(function(){
	  return Object.defineProperty(__webpack_require__(24)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(23)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(20)
	  , document = __webpack_require__(10).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(20);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 27 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _defineProperty = __webpack_require__(29);

	var _defineProperty2 = _interopRequireDefault(_defineProperty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(30), __esModule: true };

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(31);
	var $Object = __webpack_require__(14).Object;
	module.exports = function defineProperty(it, key, desc){
	  return $Object.defineProperty(it, key, desc);
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(13);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(22), 'Object', {defineProperty: __webpack_require__(18).f});

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _typeof2 = __webpack_require__(33);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _iterator = __webpack_require__(34);

	var _iterator2 = _interopRequireDefault(_iterator);

	var _symbol = __webpack_require__(63);

	var _symbol2 = _interopRequireDefault(_symbol);

	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(35), __esModule: true };

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(36);
	__webpack_require__(58);
	module.exports = __webpack_require__(62).f('iterator');

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(37)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(39)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(38)
	  , defined   = __webpack_require__(5);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 38 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(40)
	  , $export        = __webpack_require__(13)
	  , redefine       = __webpack_require__(41)
	  , hide           = __webpack_require__(17)
	  , has            = __webpack_require__(7)
	  , Iterators      = __webpack_require__(42)
	  , $iterCreate    = __webpack_require__(43)
	  , setToStringTag = __webpack_require__(56)
	  , getPrototypeOf = __webpack_require__(6)
	  , ITERATOR       = __webpack_require__(57)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';

	var returnThis = function(){ return this; };

	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 40 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(17);

/***/ },
/* 42 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(44)
	  , descriptor     = __webpack_require__(26)
	  , setToStringTag = __webpack_require__(56)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(17)(IteratorPrototype, __webpack_require__(57)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(19)
	  , dPs         = __webpack_require__(45)
	  , enumBugKeys = __webpack_require__(54)
	  , IE_PROTO    = __webpack_require__(8)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(24)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(55).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};

	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(18)
	  , anObject = __webpack_require__(19)
	  , getKeys  = __webpack_require__(46);

	module.exports = __webpack_require__(22) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(47)
	  , enumBugKeys = __webpack_require__(54);

	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(7)
	  , toIObject    = __webpack_require__(48)
	  , arrayIndexOf = __webpack_require__(51)(false)
	  , IE_PROTO     = __webpack_require__(8)('IE_PROTO');

	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(49)
	  , defined = __webpack_require__(5);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(50);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 50 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(48)
	  , toLength  = __webpack_require__(52)
	  , toIndex   = __webpack_require__(53);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(38)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(38)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 54 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(10).document && document.documentElement;

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(18).f
	  , has = __webpack_require__(7)
	  , TAG = __webpack_require__(57)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(9)('wks')
	  , uid        = __webpack_require__(11)
	  , Symbol     = __webpack_require__(10).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};

	$exports.store = store;

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(59);
	var global        = __webpack_require__(10)
	  , hide          = __webpack_require__(17)
	  , Iterators     = __webpack_require__(42)
	  , TO_STRING_TAG = __webpack_require__(57)('toStringTag');

	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(60)
	  , step             = __webpack_require__(61)
	  , Iterators        = __webpack_require__(42)
	  , toIObject        = __webpack_require__(48);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(39)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 60 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 61 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(57);

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(64), __esModule: true };

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(65);
	__webpack_require__(76);
	__webpack_require__(77);
	__webpack_require__(78);
	module.exports = __webpack_require__(14).Symbol;

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(10)
	  , has            = __webpack_require__(7)
	  , DESCRIPTORS    = __webpack_require__(22)
	  , $export        = __webpack_require__(13)
	  , redefine       = __webpack_require__(41)
	  , META           = __webpack_require__(66).KEY
	  , $fails         = __webpack_require__(23)
	  , shared         = __webpack_require__(9)
	  , setToStringTag = __webpack_require__(56)
	  , uid            = __webpack_require__(11)
	  , wks            = __webpack_require__(57)
	  , wksExt         = __webpack_require__(62)
	  , wksDefine      = __webpack_require__(67)
	  , keyOf          = __webpack_require__(68)
	  , enumKeys       = __webpack_require__(69)
	  , isArray        = __webpack_require__(72)
	  , anObject       = __webpack_require__(19)
	  , toIObject      = __webpack_require__(48)
	  , toPrimitive    = __webpack_require__(25)
	  , createDesc     = __webpack_require__(26)
	  , _create        = __webpack_require__(44)
	  , gOPNExt        = __webpack_require__(73)
	  , $GOPD          = __webpack_require__(75)
	  , $DP            = __webpack_require__(18)
	  , $keys          = __webpack_require__(46)
	  , gOPD           = $GOPD.f
	  , dP             = $DP.f
	  , gOPN           = gOPNExt.f
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , PROTOTYPE      = 'prototype'
	  , HIDDEN         = wks('_hidden')
	  , TO_PRIMITIVE   = wks('toPrimitive')
	  , isEnum         = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , OPSymbols      = shared('op-symbols')
	  , ObjectProto    = Object[PROTOTYPE]
	  , USE_NATIVE     = typeof $Symbol == 'function'
	  , QObject        = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(dP({}, 'a', {
	    get: function(){ return dP(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = gOPD(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  dP(it, key, D);
	  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
	} : dP;

	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};

	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
	  return typeof it == 'symbol';
	} : function(it){
	  return it instanceof $Symbol;
	};

	var $defineProperty = function defineProperty(it, key, D){
	  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if(has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  it  = toIObject(it);
	  key = toPrimitive(key, true);
	  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
	  var D = gOPD(it, key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var IS_OP  = it === ObjectProto
	    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
	  } return result;
	};

	// 19.4.1.1 Symbol([description])
	if(!USE_NATIVE){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function(value){
	      if(this === ObjectProto)$set.call(OPSymbols, value);
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
	    return this._k;
	  });

	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f   = $defineProperty;
	  __webpack_require__(74).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(71).f  = $propertyIsEnumerable;
	  __webpack_require__(70).f = $getOwnPropertySymbols;

	  if(DESCRIPTORS && !__webpack_require__(40)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }

	  wksExt.f = function(name){
	    return wrap(wks(name));
	  }
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

	for(var symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

	for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    if(isSymbol(key))return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	});

	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it){
	    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	    var args = [it]
	      , i    = 1
	      , replacer, $replacer;
	    while(arguments.length > i)args.push(arguments[i++]);
	    replacer = args[1];
	    if(typeof replacer == 'function')$replacer = replacer;
	    if($replacer || !isArray(replacer))replacer = function(key, value){
	      if($replacer)value = $replacer.call(this, key, value);
	      if(!isSymbol(value))return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});

	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(17)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(11)('meta')
	  , isObject = __webpack_require__(20)
	  , has      = __webpack_require__(7)
	  , setDesc  = __webpack_require__(18).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(23)(function(){
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function(it){
	  setDesc(it, META, {value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  }});
	};
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add metadata
	    if(!create)return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function(it, create){
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return true;
	    // not necessary to add metadata
	    if(!create)return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function(it){
	  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY:      META,
	  NEED:     false,
	  fastKey:  fastKey,
	  getWeak:  getWeak,
	  onFreeze: onFreeze
	};

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(10)
	  , core           = __webpack_require__(14)
	  , LIBRARY        = __webpack_require__(40)
	  , wksExt         = __webpack_require__(62)
	  , defineProperty = __webpack_require__(18).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(46)
	  , toIObject = __webpack_require__(48);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(46)
	  , gOPS    = __webpack_require__(70)
	  , pIE     = __webpack_require__(71);
	module.exports = function(it){
	  var result     = getKeys(it)
	    , getSymbols = gOPS.f;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = pIE.f
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
	  } return result;
	};

/***/ },
/* 70 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 71 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(50);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(48)
	  , gOPN      = __webpack_require__(74).f
	  , toString  = {}.toString;

	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function(it){
	  try {
	    return gOPN(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};

	module.exports.f = function getOwnPropertyNames(it){
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(47)
	  , hiddenKeys = __webpack_require__(54).concat('length', 'prototype');

	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(71)
	  , createDesc     = __webpack_require__(26)
	  , toIObject      = __webpack_require__(48)
	  , toPrimitive    = __webpack_require__(25)
	  , has            = __webpack_require__(7)
	  , IE8_DOM_DEFINE = __webpack_require__(21)
	  , gOPD           = Object.getOwnPropertyDescriptor;

	exports.f = __webpack_require__(22) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 76 */
/***/ function(module, exports) {

	

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(67)('asyncIterator');

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(67)('observable');

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _setPrototypeOf = __webpack_require__(80);

	var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

	var _create = __webpack_require__(84);

	var _create2 = _interopRequireDefault(_create);

	var _typeof2 = __webpack_require__(33);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
	  }

	  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
	};

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(81), __esModule: true };

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(82);
	module.exports = __webpack_require__(14).Object.setPrototypeOf;

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(13);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(83).set});

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(20)
	  , anObject = __webpack_require__(19);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(15)(Function.call, __webpack_require__(75).f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(85), __esModule: true };

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(86);
	var $Object = __webpack_require__(14).Object;
	module.exports = function create(P, D){
	  return $Object.create(P, D);
	};

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(13)
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', {create: __webpack_require__(44)});

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _defineProperty = __webpack_require__(29);

	var _defineProperty2 = _interopRequireDefault(_defineProperty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (obj, key, value) {
	  if (key in obj) {
	    (0, _defineProperty2.default)(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	};

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(89), __esModule: true };

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(90);
	module.exports = __webpack_require__(14).Object.assign;

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(13);

	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(91)});

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(46)
	  , gOPS     = __webpack_require__(70)
	  , pIE      = __webpack_require__(71)
	  , toObject = __webpack_require__(4)
	  , IObject  = __webpack_require__(49)
	  , $assign  = Object.assign;

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(23)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ },
/* 92 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	Object.defineProperty(exports, '__esModule', { value: true });

	/**
	 * An abstract event emitter class. Several modules extend from this class
	 * to utilize events.
	 * @constructor
	 */

	function Emitter () {
	  this._events = null;
	}

	Emitter.prototype = {
	  /**
	   * Add an event listener.
	   */
	  on: function on (event, fn, scope, once) {
	    if (this._events == null) {
	      this._events = [];
	    }

	    this._events.push({ event: event, fn: fn, scope: scope, once: once });

	    return this
	  },

	  /**
	   * Adds an `event` listener that will be invoked a single time then
	   * automatically removed.
	   */
	  once: function once (event, fn, scope) {
	    return this.on(event, fn, scope, true)
	  },

	  /**
	   * Unsubscribe a callback. If no event is provided, removes all callbacks. If
	   * no callback is provided, removes all callbacks for the given type.
	   */
	  off: function off (event, fn, scope) {
	    var this$1 = this;

	    if (this._events == null) {
	      return this
	    }

	    var removeAll = fn == null;

	    var i = 0;
	    while (i < this._events.length) {
	      var cb = this$1._events[i];

	      if (cb.event === event) {
	        if (removeAll || (cb.fn === fn && cb.scope === scope)) {
	          this$1._events.splice(i, 1);
	          continue
	        }
	      }

	      i += 1;
	    }

	    return this
	  },

	  removeAllListeners: function removeAllListeners () {
	    this._events = null;
	  },

	  /**
	   * Emit `event` with the given args.
	   */
	  _emit: function _emit (event, payload) {
	    var this$1 = this;

	    if (this._events == null) {
	      return this
	    }

	    var i = 0;
	    while (i < this._events.length) {
	      var cb = this$1._events[i];

	      if (cb.event === event) {
	        cb.fn.call(cb.scope || this$1, payload);

	        if (cb.once) {
	          this$1._events.splice(i, 1);
	          continue
	        }
	      }

	      i += 1;
	    }

	    return this
	  }
	};

	var uid = 0;
	var FALLBACK = '_action';

	var toString = function () {
	  return this.done
	};

	/**
	 * Uniquely tag a function. This is used to identify actions.
	 * @param {Function} fn The target function to add action identifiers to.
	 * @param {String} [name] An override to use instead of `fn.name`.
	 * @return {Function} The tagged function (same as `fn`).
	 */
	function tag (fn, name) {
	  if (fn == null) {
	    throw new Error(("Unable to identify " + fn + " action"))
	  }

	  if (fn.done) {
	    return fn
	  }

	  if (typeof fn === 'string') {
	    name = fn;
	    fn = function (n) { return n; };
	  }

	  /**
	   * Auto-increment a stepper suffix to prevent two actions with the
	   * same name from colliding.
	   */
	  uid += 1;

	  /**
	   * Function.name lacks legacy support. For these browsers, fallback
	   * to a consistent name:
	   */
	  var symbol = name || (fn.name || FALLBACK) + '.' + uid;

	  fn.open      = symbol + '.open';
	  fn.loading   = symbol + '.loading';
	  fn.done      = symbol; // intentional
	  fn.error     = symbol + '.error';
	  fn.cancelled = symbol + '.cancelled';

	  // The default state is done
	  fn.toString = toString;

	  return fn
	}

	/**
	 * The central tree data structure that is used to calculate state for
	 * a Microcosm. Each node in the tree represents an action. Branches
	 * are changes over time.
	 * @constructor
	 * @param {number|null} limit - Depth of history before compression
	 */
	function History (limit) {
	  if ( limit === void 0 ) limit=0;

	  this.repos = [];
	  this.limit = limit;
	}

	History.prototype = {
	  root  : null,
	  focus : null,
	  head  : null,
	  size  : 0,
	  limit : 0,

	  /**
	   * Start tracking a repo
	   * @param {Microcosm} repo
	   */
	  addRepo: function addRepo (repo) {
	    this.repos.push(repo);
	  },

	  /**
	   * Stop tracking a repo
	   * @param {Microcosm} repo
	   */
	  removeRepo: function removeRepo (repo) {
	    this.repos = this.repos.filter(function (r) { return r != repo; });
	  },

	  /**
	   * Run a method on every repo, if it implements it.
	   * @param {string} method
	   * @param {any} payload
	   */
	  invoke: function invoke (method, payload) {
	    var repos = this.repos;

	    for (var i = 0, len = repos.length; i < len; i++) {
	      repos[i][method](payload);
	    }
	  },

	  /**
	   * Adjust the focus point to target a different node. This has the effect of
	   * creating undo/redo. This should not be called outside of Microcosm!
	   * Instead, use `Microcosm.prototype.checkout`.
	   * @param {Action} action
	   */
	  checkout: function checkout (action) {
	    this.head = action;

	    if (!action) {
	      this.root = this.head = null;
	    } else if (action.parent) {
	      action.parent.next = action;
	    }

	    this.adjustSize();
	    this.invalidate();

	    return this
	  },

	  /**
	   * Create a new action and append it to the current focus,
	   * then adjust the focus to that of the newly created action.
	   * @param {Function|String} behavior
	   */
	  append: function append (behavior) {
	    var action = new Action(behavior, this);

	    if (this.head) {
	      action.parent = this.head;

	      // To keep track of children, maintain a pointer
	      // to the first child ever produced. We might checkout
	      // another child later, so we can't use next
	      if (this.head.first) {
	        this.head.next.sibling = action;
	      } else {
	        this.head.first = action;
	      }

	      this.head.next = action;
	    } else {
	      this.root = action;
	    }

	    this.head = action;
	    this.size += 1;

	    return this.head
	  },

	  /**
	  * Handle a change to a node that happened prior to
	  * the cache point.
	   */
	  invalidate: function invalidate () {
	    this.focus = null;

	    this.invoke('unarchive', null);

	    this.reconcile();
	  },

	  /**
	   * @param {Action} action
	   */
	  reconcile: function reconcile (action) {
	    // No need to run this function if there are no active repos
	    if (this.repos.length <= 0) {
	      return false
	    }

	    this.invoke('rollback', null);

	    this.rollforward();

	    this.invoke('release', action);
	  },

	  rollforward: function rollforward () {
	    var this$1 = this;

	    var action = this.focus ? this.focus.next : this.root;
	    var cacheable = true;

	    while (action && action.parent !== this.head) {
	      if (!action.disabled) {
	        this$1.invoke('reconcile', action);
	      }

	      // Adjust the focus to the youngest disposable action. No need to
	      // rollforward through every single action all the time.
	      if (cacheable && action.disposable) {
	        this$1.focus = action;
	        this$1.invoke('cache', this$1.archive());
	      } else {
	        cacheable = false;
	      }

	      action = action.next;
	    }
	  },

	  archive: function archive () {
	    var shouldArchive = this.size > this.limit;

	    // Is the cache pointed at the base? If so, that means we need
	    // to purge the base.
	    if (shouldArchive) {
	      this.size -= 1;

	      if (this.size <= 0) {
	        this.root = this.head = this.focus = null;
	      } else {
	        this.root = this.root.next;
	        this.root.parent = null;
	      }
	    }

	    return shouldArchive
	  },

	  /**
	   * Update the current size and active branch path
	   */
	  adjustSize: function adjustSize () {
	    var action = this.head;
	    var size = this.root ? 1 : 0;

	    while (action && action.parent) {
	      action = action.parent;
	      size += 1;
	    }

	    this.size = size;
	  }

	};

	/**
	 * Shallow copy an object
	 */
	function clone (a) {
	  var copy = {};

	  for (var key in a) {
	    copy[key] = a[key];
	  }

	  return copy
	}

	/**
	 * Merge any number of objects into a provided object.
	 */
	function merge (subject) {
	  var arguments$1 = arguments;

	  var copy = subject;

	  for (var i = 1, len = arguments.length; i < len; i++) {
	    var next = arguments$1[i];

	    for (var key in next) {
	      if (copy[key] !== next[key]) {
	        if (copy === subject) {
	          copy = clone(subject);
	        }

	        copy[key] = next[key];
	      }
	    }
	  }

	  return copy
	}

	/**
	 * Basic prototypal inheritence
	 */
	function inherit (Child, Ancestor, proto) {
	  Child.__proto__ = Ancestor;

	  Child.prototype = merge(Object.create(Ancestor.prototype), {
	    constructor: Child
	  }, proto);

	  return Child
	}

	/**
	 * Retrieve a value from an object. If no key is provided, just
	 * return the object.
	 */
	function get (object, key) {
	  return key == null ? object : object[key]
	}

	/**
	 * Immutabily assign a value to a provided object at a given key. If
	 * the value is the same, don't do anything. Otherwise return a new
	 * object.
	 */
	function set (object, key, value) {
	  // If the key path is null, there's no need to traverse the
	  // object. Just return the value.
	  if (key == null) {
	    return value
	  }

	  if (value === undefined || get(object, key) === value) {
	    return object
	  }

	  var copy = clone(object);

	  copy[key] = value;

	  return copy
	}

	/**
	 * Actions encapsulate the process of resolving an action creator. Create an
	 * action using `Microcosm::push`:
	 * @constructor
	 * @extends {Emitter}
	 */
	function Action (behavior, history) {
	  Emitter.call(this);

	  this.behavior = tag(behavior);
	  this.history = history || new History();
	}

	inherit(Action, Emitter, {
	  type       : null,
	  payload    : undefined,
	  disabled   : false,
	  disposable : false,
	  parent     : null,
	  first      : null,
	  next       : null,
	  sibling    : null,

	  /**
	   * Given a string or State constant, determine if the `state` bitmask for
	   * the action includes the provided type.
	   * @private
	   */
	  is: function is (type) {
	    return this.type === this.behavior[type]
	  },

	  /**
	   * Set the action state to "open", then set a payload if provided. Triggers
	   * the "open" event.
	   */
	  open: function open (payload) {
	    if (!this.disposable) {
	      this.type = this.behavior.open;

	      if (arguments.length > 0) {
	        this.payload = payload;
	      }

	      this.history.reconcile(this);

	      this._emit('open', this.payload);
	    }

	    return this
	  },

	  /**
	   * Set the action state to "loading", then set a payload if provided.
	   * Triggers the "update" event.
	   */
	  send: function send (payload) {
	    if (!this.disposable) {
	      this.type = this.behavior.loading;

	      if (arguments.length > 0) {
	        this.payload = payload;
	      }

	      this.history.reconcile(this);

	      this._emit('update', this.payload);
	    }

	    return this
	  },

	  /**
	   * Set the action state to "error" and marks the action for clean up, then
	   * set a payload if provided. Triggers the "error" event.
	   */
	  reject: function reject (payload) {
	    if (!this.disposable) {
	      this.type = this.behavior.error;
	      this.disposable = true;

	      if (arguments.length > 0) {
	        this.payload = payload;
	      }

	      this.history.reconcile(this);

	      this._emit('error', this.payload);
	    }

	    return this
	  },

	  /**
	   * Set the action state to "done" and marks the action for clean up, then set
	   * a payload if provided. Triggers the "done" event.
	   */
	  resolve: function resolve (payload) {
	    if (!this.disposable) {
	      this.type = this.behavior.done;
	      this.disposable = true;

	      if (arguments.length > 0) {
	        this.payload = payload;
	      }

	      this.history.reconcile(this);

	      this._emit('done', this.payload);
	    }

	    return this
	  },

	  /**
	   * Set the action state to "cancelled" and marks the action for clean up,
	   * then set a payload if provided. Triggers the "cancel" event.
	   */
	  cancel: function cancel (payload) {
	    if (!this.disposable) {
	      this.type = this.behavior.cancelled;
	      this.disposable = true;

	      if (arguments.length > 0) {
	        this.payload = payload;
	      }

	      this.history.reconcile(this);

	      this._emit('cancel', this.payload);
	    }

	    return this
	  },

	  /**
	   * Toggles the disabled state, where the action will not dispatch. This is
	   * useful in the Microcosm debugger to quickly enable/disable actions.
	   * Triggers the "change" event.
	   */
	  toggle: function toggle () {
	    this.disabled = !this.disabled;

	    this.history.invalidate();

	    return this
	  },

	  /**
	   * Listen to failure. If the action has already failed, it will execute the
	   * provided callback, otherwise it will wait and trigger upon the "error"
	   * event.
	   */
	  onError: function onError (callback, scope) {
	    if (!callback) {
	      return this
	    }

	    if (this.is('error')) {
	      callback.call(scope, this.payload);
	    } else {
	      this.once('error', callback, scope);
	    }

	    return this
	  },

	  /**
	   * Listen to progress. Wait and trigger a provided callback on the "update" event.
	   */
	  onUpdate: function onUpdate (callback, scope) {
	    if (!callback) {
	      return this
	    }

	    this.on('update', callback, scope);

	    return this
	  },

	  /**
	   * Listen for completion. If the action has already completed, it will
	   * execute the provided callback, otherwise it will wait and trigger upon the
	   * "done" event.
	   */
	  onDone: function onDone (callback, scope) {
	    if (!callback) {
	      return this
	    }

	    if (this.is('done')) {
	      callback.call(scope, this.payload);
	    } else {
	      this.once('done', callback, scope);
	    }

	    return this
	  },

	  /**
	   * Listen for cancel. If the action has already cancelled, it will execute
	   * the provided callback, otherwise it will wait and trigger upon the
	   * "cancel" event.
	   */
	  onCancel: function onCancel (callback, scope) {
	    if (!callback) {
	      return this
	    }

	    if (this.is('cancelled')) {
	      callback.call(scope, this.payload);
	    } else {
	      this.once('cancel', callback, scope);
	    }

	    return this
	  },

	  /**
	   * For interop with promises. Returns a promise that resolves or rejects
	   * based on the action's resolution.
	   */
	  then: function then (pass, fail) {
	    var this$1 = this;

	    return new Promise(function (resolve, reject) {
	      this$1.onDone(resolve);
	      this$1.onError(reject);
	    }).then(pass, fail)
	  }

	});

	/**
	 * Get all child actions. Used by the Microcosm debugger to visualize history.
	 */
	Object.defineProperty(Action.prototype, 'children', {
	  get: function get$$1 () {
	    var children = [];
	    var node = this.first;

	    while (node) {
	      children.unshift(node);
	      node = node.sibling;
	    }

	    return children
	  }
	});

	/**
	 * Lifecycle methods are implementated as actions. This module
	 * enumerates through a preset list of types and creates associated
	 * actions.
	 */

	var lifecycle = {
	  getInitialState : 'getInitialState',
	  serialize       : 'serialize',
	  deserialize     : 'deserialize',
	  _willRebase     : '_willRebase',
	  _willReset      : '_willReset',
	  _willPatch      : '_willPatch'
	};

	/**
	 * Meta Domain
	 * A domain for managing lifecycle methods and other default behavior
	 * for other domains.
	 */

	function MetaDomain () {}

	MetaDomain.prototype.setup = function (repo) {
	  this.repo = repo;
	};

	MetaDomain.prototype[lifecycle._willReset] = function (state, ref) {
	  var owner = ref.owner;
	  var data = ref.data;

	  return owner === this.repo ? data : state
	};

	MetaDomain.prototype[lifecycle._willPatch] = function (state, ref) {
	  var owner = ref.owner;
	  var data = ref.data;

	  if (owner !== this.repo) {
	    return state
	  }

	  return merge(state, data)
	};

	MetaDomain.prototype[lifecycle._willRebase] = function (state, ref) {
	  var owner = ref.owner;
	  var data = ref.data;

	  if (owner !== this.repo) {
	    return state
	  }

	  return merge(data, state)
	};

	function getDomainHandlers (domains, type) {
	  var handlers = [];
	  var isLifecycle = lifecycle[type] != null;

	  for (var i = 0, len = domains.length; i < len; i++) {
	    var ref = domains[i];
	    var key = ref[0];
	    var domain = ref[1];

	    var handler = null;

	    if (isLifecycle && domain[type] != null) {
	      handler = domain[type];
	    } else if (domain.register != null) {
	      handler = domain.register()[type];
	    }

	    if (handler) {
	      handlers.push({ key: key, domain: domain, handler: handler, length: handler.length });
	    }
	  }

	  return handlers
	}

	/**
	 * A cluster of domains. Mostly for ergonomics
	 */
	function Realm (repo) {
	  this.repo = repo;
	  this.domains = [];
	  this.registry = {};

	  // All realms contain a meta domain for basic Microcosm operations
	  this.add(null, MetaDomain);
	}

	Realm.prototype = {

	  register: function register (type) {
	    if (this.registry[type] == null) {
	      this.registry[type] = getDomainHandlers(this.domains, type);
	    }

	    return this.registry[type]
	  },

	  add: function add (key, config, options) {
	    var domain = null;

	    if (typeof config === 'function') {
	      domain = new config(options);
	    } else {
	      domain = Object.create(config);
	    }

	    this.domains.push([key, domain]);

	    // Reset the registry
	    this.registry = {};

	    if (domain.setup) {
	      domain.setup(this.repo, options);
	    }

	    if (domain.teardown) {
	      this.repo.on('teardown', domain.teardown, domain);
	    }

	    return domain
	  }

	};

	function createHook (repo, effect) {

	  return function (action) {
	    var handler = effect.register()[action.type];

	    if (handler) {
	      handler.call(effect, repo, action.payload);
	    }
	  }
	}

	function createEffect (repo, config, options) {
	  var effect = null;

	  if (typeof config === 'function') {
	    effect = new config(repo, options);
	  } else {
	    effect = Object.create(config);
	  }

	  if (effect.setup) {
	    effect.setup(repo, options);
	  }

	  if (effect.register) {
	    repo.on('effect', createHook(repo, effect));
	  }

	  if (effect.teardown) {
	    repo.on('teardown', effect.teardown, effect);
	  }
	}

	function isPromise(obj, type) {
	  return !!obj && (type === 'object' || type === 'function') && typeof obj.then === 'function'
	}

	/**
	 * Coroutine is used by an action to determine how it should resolve the
	 * body of their associated behavior.
	 * @private
	 */
	function coroutine (action, body, repo) {
	  var type = typeof body;

	  /**
	   * Provide support for Promises:
	   *
	   * 1. Open the action
	   * 2. Unwrap the promise using `setTimeout`, which prevents errors
	   *    elsewhere in the dispatch execution process from being trapped.
	   * 3. If the promise is rejected, reject the action
	   * 4. Otherwise resolve the action with the returned body
	   */
	  if (isPromise(body, type)) {
	    action.open();

	    body.then(
	      function (result) { return global.setTimeout(function () { return action.resolve(result); }, 0); },
	      function (error)  { return global.setTimeout(function () { return action.reject(error); }, 0); }
	    );

	    return action
	  }

	  /**
	   * Check for thunks. An escape hatch to direction work with an
	   * action. It is triggered by returning a function from a
	   * behavior. This middleware will execute that function with the
	   * action as the first argument.
	   */
	  if (type === 'function') {
	    body(action, repo);

	    return action
	  }

	  // Otherwise just return a resolved action
	  return action.resolve(body)
	}

	var DEFAULT_OPTIONS = { maxHistory: 0, history: null, parent: null };

	/**
	 * A tree-like data structure that keeps track of the execution order of
	 * actions that are pushed into it, sequentially folding them together to
	 * produce an object that can be rendered by a presentation library (such as
	 * React).
	 * @constructor
	 * @extends {Emitter}
	 */
	function Microcosm (ref, state)  {
	  if ( ref === void 0 ) ref = DEFAULT_OPTIONS;
	  var maxHistory = ref.maxHistory;
	  var history = ref.history;
	  var parent = ref.parent;

	  Emitter.call(this);

	  this.history = history || new History(maxHistory);
	  this.history.addRepo(this);

	  this.realm = new Realm(this);

	  this.parent = parent || null;

	  // Keeps track of the root of the history tree
	  this.archived = parent ? parent.archived : {};

	  // Keeps track of the focal point of the
	  this.cached = parent ? parent.cached : this.archived;

	  // Staging. Internal domain state
	  this.staged = parent ? parent.state : this.cached;

	  // Publically available data.
	  this.state = parent ? parent.state : this.staged;

	  // Mark children as "followers". Followers do not move through the entire
	  // lifecycle. They don't have to. This greatly improves fork performance.
	  this.follower = !!parent;

	  // Track changes with a mutable flag
	  this.dirty = false;

	  // Microcosm is now ready. Call the setup lifecycle method
	  this.setup();

	  // If given state, reset to that snapshot
	  if (state) {
	    this.reset(state, true);
	  }
	}

	inherit(Microcosm, Emitter, {

	  /**
	   * Called whenever a Microcosm is instantiated. This allows for prep without
	   * using a constructor.
	   */
	  setup: function setup () {
	    // NOOP
	  },

	  /**
	   * Remove all subscriptions
	   */
	  teardown: function teardown () {
	    // Trigger a teardown event before completely shutting down
	    this._emit('teardown', this);

	    // Remove this repo from history
	    this.history.removeRepo(this);

	    // Remove all listeners
	    this.removeAllListeners();
	  },

	  /**
	   * Generates the starting state for a Microcosm instance by asking every
	   * domain that subscribes to `getInitialState`.
	   * @return {Object} State object representing the initial state.
	   */
	  getInitialState: function getInitialState () {
	    return this.dispatch({}, lifecycle.getInitialState, null)
	  },

	  /**
	   * Dispatch an action to a list of domains. This is used by state management
	   * methods, like `rollforward` and `getInitialState` to compute state.
	   * Assuming there are no side-effects in domain handlers, this is pure.
	   * Calling this method will not update repo state.
	   */
	  dispatch: function dispatch (state, type, payload) {
	    var handlers = this.realm.register(type);
	    var current = state;

	    for (var i = 0, len = handlers.length; i < len; i++) {
	      var ref = handlers[i];
	      var key = ref.key;
	      var domain = ref.domain;
	      var handler = ref.handler;
	      var length = ref.length;

	      var next = null;

	      switch (length) {
	        case 0:
	          next = handler.call(domain);
	          break;
	        case 1:
	          next = handler.call(domain, get(state, key));
	          break;
	        case 2:
	        default:
	          next = handler.call(domain, get(state, key), payload);
	      }

	      current = set(current, key, next);
	    }

	    return current
	  },

	  /**
	   * Roll back to the last archive
	   */
	  unarchive: function unarchive () {
	    this.cached = this.archived;
	  },

	  /**
	   * Roll back to the last cache
	   */
	  rollback: function rollback () {
	    this.staged = this.cached;
	  },

	  /**
	   * Update the cache point, this is called when the history tree
	   * moves forward the current cache point.
	   */
	  cache: function cache (archive) {
	    this.cached = this.staged;

	    if (archive) {
	      this.archived = this.cached;
	    }
	  },

	  /**
	   * Identify the last and next staged state, then ask the associated domain
	   * if it should commit it. If so, roll state forward.
	   */
	  commit: function commit (staged) {
	    var this$1 = this;

	    var domains = this.realm.domains;
	    var next = staged;

	    for (var i = 0, len = domains.length; i < len; i++) {
	      var ref = domains[i];
	      var key = ref[0];
	      var domain = ref[1];

	      next = this$1.write(next, key, domain);
	    }

	    return next
	  },

	  /**
	   * Write state
	   */
	  write: function write (state, key, domain) {
	    if (domain.commit != null) {
	      var next = get(state, key);

	      // This gives libraries such as ImmutableJS a chance to serialize
	      // into a primitive JavaScript form before being publically exposed.
	      if (domain.shouldCommit != null) {
	        var last = get(this.cached, key);

	        // Revert to the current public state if not committing
	        if (!domain.shouldCommit(last, next)) {
	          return set(state, key, get(this.state, key))
	        }
	      }

	      return set(state, key, domain.commit(next, state))
	    }

	    return state
	  },

	  /**
	   * Run through the action history, dispatching their associated
	   * types and payloads to domains for processing. Emits "change".
	   */
	  reconcile: function reconcile (action) {
	    if (this.follower) {
	      this.state = this.parent.state;
	      this.dirty = this.parent.dirty;

	      return this
	    }

	    var original = this.state;

	    // Update children with their parent's state
	    if (this.parent) {
	      this.staged = merge(this.staged, this.parent.state);
	      this.state  = merge(this.state, this.parent.state);
	    }

	    var next = this.dispatch(this.staged, action.type, action.payload);

	    if (this.staged !== next) {
	      this.staged = next;
	      this.state = this.commit(next);
	    }

	    if (this.state != original) {
	      this.dirty = true;
	    }

	    return this
	  },

	  /**
	   * Publish a release if anything changed
	   * @param {Action} action
	   */
	  release: function release (action) {
	    if (action) {
	      this._emit('effect', action);
	    }

	    if (this.dirty) {
	      this.dirty = false;
	      this._emit('change', this.state);
	    }
	  },

	  /**
	   * Append an action to history and return it. This is used by push,
	   * but also useful for testing action states.
	   * @param {Function} behavior - An action function
	   * @return {Action} action representation of the invoked function
	   */
	  append: function append (behavior) {
	    return this.history.append(behavior)
	  },

	  /**
	   * Push an action into Microcosm. This will trigger the lifecycle for updating
	   * state.
	   * @param {Function} behavior - An action function
	   * @param {...Any} params - Parameters to invoke the type with
	   * @return {Action} action representaftion of the invoked function
	   */
	  push: function push (behavior) {
	    var params = [], len = arguments.length - 1;
	    while ( len-- > 0 ) params[ len ] = arguments[ len + 1 ];

	    var action = this.append(behavior);

	    coroutine(action, action.behavior.apply(null, params), this);

	    return action
	  },

	  /**
	   * Partially apply push
	   * @param {...Any} params - Parameters to invoke the type with
	   * @return {Function} A partially applied push function
	   */
	  prepare: function prepare () {
	    var params = [], len = arguments.length;
	    while ( len-- ) params[ len ] = arguments[ len ];

	    return (ref = this.push).bind.apply(ref, [ this ].concat( params ))
	    var ref;
	  },

	  /**
	   * Adds a domain to the Microcosm instance. A domain informs the
	   * microcosm how to process various action types. If no key
	   * is given, the domain will operate on all application state.
	   * @param {String|null} key - The namespace within application state for the domain.
	   * @param {Object|Function} domain  Configuration options to create a domain
	   * @return {Microcosm} self
	   */
	  addDomain: function addDomain (key, domain, options) {
	    this.realm.add(key, domain, options);

	    this.follower = false;
	    this.rebase();

	    return this
	  },

	  /**
	   * An effect is a one-time handler that fires whenever an action changes. Callbacks
	   * will only ever fire once, and can not modify state.
	   * @param {Object|Function} effect - Configuration options to create an effect
	   * @param {Object} options - Options to pass to the effect
	   * @return {Microcosm} self
	   */
	  addEffect: function addEffect (effect, options) {
	    createEffect(this, effect, options);

	    return this
	  },

	  /**
	   * Push an action to reset the state of the instance. This state is folded
	   * on to the result of `getInitialState()`.
	   * @param {Object} data - A new state object to apply to the instance
	   * @param {Boolean} deserialize - Should the data be deserialized?
	   * @return {Action} action - An action representing the reset operation.
	   */
	  reset: function reset (data, deserialize) {
	    if (deserialize === true) {
	      data = this.deserialize(data);
	    }

	    this.follower = false;

	    return this.push(lifecycle._willReset, {
	      owner : this,
	      data  : merge(this.getInitialState(), data)
	    })
	  },

	  /**
	   * Deserialize a given state and reset the instance with that
	   * processed state object.
	   * @param {Object} data - A raw state object to deserialize and apply to the instance
	   * @param {Object} deserialize - Should the data be deserialized?
	   * @return {Action} action - An action representing the patch operation.
	   */
	  patch: function patch (data, deserialize) {
	    if (deserialize === true) {
	      data = this.deserialize(data);
	    }

	    this.follower = false;

	    return this.push(lifecycle._willPatch, { data: data, owner: this })
	  },

	  /**
	   * Deserialize a given payload by asking every domain how to it
	   * should process it (via the deserialize domain function).
	   * @param {Object} payload - A raw object to deserialize.
	   * @return {Object} The deserialized version of the provided payload.
	   */
	  deserialize: function deserialize (payload) {
	    if (payload == null) {
	      return {}
	    }

	    return this.dispatch(payload, lifecycle.deserialize, payload)
	  },

	  /**
	   * Serialize application state by asking every domain how to
	   * serialize the state they manage (via the serialize domain
	   * function).
	   * @return {Object} The serialized version of repo state.
	   */
	  serialize: function serialize () {
	    return this.dispatch(this.staged, lifecycle.serialize, null)
	  },

	  /**
	   * Alias serialize for JS interoperability.
	   * @return {Object} result of `serialize`.
	   */
	  toJSON: function toJSON () {
	    return this.serialize()
	  },

	  /**
	   * Recalculate initial state by back-filling the cache object with
	   * the result of getInitialState(). This is used when a domain is
	   * added to Microcosm to ensure the initial state of the domain is
	   * respected. Emits a "change" event.
	   */
	  rebase: function rebase () {
	    var data = this.getInitialState();

	    this.cached = merge(this.cached, data);

	    this.push(lifecycle._willRebase, { data: data, owner: this });
	  },

	  /**
	   * Change the focus of the history tree. This allows for features
	   * like undo and redo.
	   * @param {Action} action to checkout
	   * @return {Microcosm} self
	   */
	  checkout: function checkout (action) {
	    this.cached = this.archived;

	    this.history.checkout(action);

	    return this
	  },

	  /**
	   * Create a copy of this Microcosm, passing in the same history and
	   * a reference to itself. As actions are pushed into the shared history,
	   * each Microcosm will resolve differently.
	   */
	  fork: function fork () {
	    return new Microcosm({
	      parent  : this,
	      history : this.history
	    })
	  }

	});

	exports['default'] = Microcosm;
	exports.Microcosm = Microcosm;
	exports.Action = Action;
	exports.History = History;
	exports.tag = tag;
	exports.merge = merge;
	exports.inherit = inherit;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }
/******/ ]);