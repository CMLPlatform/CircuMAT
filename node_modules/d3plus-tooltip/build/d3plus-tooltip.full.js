function _classCallCheck2(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass2(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof2(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty2(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof2(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

/*
  d3plus-tooltip v1.0.1
  A javascript-only tooltip.
  Copyright (c) 2021 D3plus - https://d3plus.org
  @license MIT
*/
(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) : factory();
})(function () {
  'use strict';

  function createCommonjsModule(fn) {
    var module = {
      exports: {}
    };
    return fn(module, module.exports), module.exports;
  }

  var _global = createCommonjsModule(function (module) {
    // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
    var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self // eslint-disable-next-line no-new-func
    : Function('return this')();
    if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
  });

  var hasOwnProperty = {}.hasOwnProperty;

  var _has = function _has(it, key) {
    return hasOwnProperty.call(it, key);
  };

  var _fails = function _fails(exec) {
    try {
      return !!exec();
    } catch (e) {
      return true;
    }
  }; // Thank's IE8 for his funny defineProperty


  var _descriptors = !_fails(function () {
    return Object.defineProperty({}, 'a', {
      get: function get() {
        return 7;
      }
    }).a != 7;
  });

  var _core = createCommonjsModule(function (module) {
    var core = module.exports = {
      version: '2.6.12'
    };
    if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
  });

  var _isObject = function _isObject(it) {
    return _typeof2(it) === 'object' ? it !== null : typeof it === 'function';
  };

  var _anObject = function _anObject(it) {
    if (!_isObject(it)) throw TypeError(it + ' is not an object!');
    return it;
  };

  var document$1 = _global.document; // typeof document.createElement is 'object' in old IE

  var is = _isObject(document$1) && _isObject(document$1.createElement);

  var _domCreate = function _domCreate(it) {
    return is ? document$1.createElement(it) : {};
  };

  var _ie8DomDefine = !_descriptors && !_fails(function () {
    return Object.defineProperty(_domCreate('div'), 'a', {
      get: function get() {
        return 7;
      }
    }).a != 7;
  }); // 7.1.1 ToPrimitive(input [, PreferredType])
  // instead of the ES6 spec version, we didn't implement @@toPrimitive case
  // and the second argument - flag - preferred type is a string


  var _toPrimitive = function _toPrimitive(it, S) {
    if (!_isObject(it)) return it;
    var fn, val;
    if (S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
    if (typeof (fn = it.valueOf) == 'function' && !_isObject(val = fn.call(it))) return val;
    if (!S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
    throw TypeError("Can't convert object to primitive value");
  };

  var dP = Object.defineProperty;
  var f = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes) {
    _anObject(O);

    P = _toPrimitive(P, true);

    _anObject(Attributes);

    if (_ie8DomDefine) try {
      return dP(O, P, Attributes);
    } catch (e) {
      /* empty */
    }
    if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
    if ('value' in Attributes) O[P] = Attributes.value;
    return O;
  };
  var _objectDp = {
    f: f
  };

  var _propertyDesc = function _propertyDesc(bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };

  var _hide = _descriptors ? function (object, key, value) {
    return _objectDp.f(object, key, _propertyDesc(1, value));
  } : function (object, key, value) {
    object[key] = value;
    return object;
  };

  var id = 0;
  var px = Math.random();

  var _uid = function _uid(key) {
    return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
  };

  var _library = false;

  var _shared = createCommonjsModule(function (module) {
    var SHARED = '__core-js_shared__';
    var store = _global[SHARED] || (_global[SHARED] = {});
    (module.exports = function (key, value) {
      return store[key] || (store[key] = value !== undefined ? value : {});
    })('versions', []).push({
      version: _core.version,
      mode: 'global',
      copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
    });
  });

  var _functionToString = _shared('native-function-to-string', Function.toString);

  var _redefine = createCommonjsModule(function (module) {
    var SRC = _uid('src');

    var TO_STRING = 'toString';

    var TPL = ('' + _functionToString).split(TO_STRING);

    _core.inspectSource = function (it) {
      return _functionToString.call(it);
    };

    (module.exports = function (O, key, val, safe) {
      var isFunction = typeof val == 'function';
      if (isFunction) _has(val, 'name') || _hide(val, 'name', key);
      if (O[key] === val) return;
      if (isFunction) _has(val, SRC) || _hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));

      if (O === _global) {
        O[key] = val;
      } else if (!safe) {
        delete O[key];

        _hide(O, key, val);
      } else if (O[key]) {
        O[key] = val;
      } else {
        _hide(O, key, val);
      } // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative

    })(Function.prototype, TO_STRING, function toString() {
      return typeof this == 'function' && this[SRC] || _functionToString.call(this);
    });
  });

  var _aFunction = function _aFunction(it) {
    if (typeof it != 'function') throw TypeError(it + ' is not a function!');
    return it;
  }; // optional / simple context binding


  var _ctx = function _ctx(fn, that, length) {
    _aFunction(fn);

    if (that === undefined) return fn;

    switch (length) {
      case 1:
        return function (a) {
          return fn.call(that, a);
        };

      case 2:
        return function (a, b) {
          return fn.call(that, a, b);
        };

      case 3:
        return function (a, b, c) {
          return fn.call(that, a, b, c);
        };
    }

    return function ()
    /* ...args */
    {
      return fn.apply(that, arguments);
    };
  };

  var PROTOTYPE = 'prototype';

  var $export = function $export(type, name, source) {
    var IS_FORCED = type & $export.F;
    var IS_GLOBAL = type & $export.G;
    var IS_STATIC = type & $export.S;
    var IS_PROTO = type & $export.P;
    var IS_BIND = type & $export.B;
    var target = IS_GLOBAL ? _global : IS_STATIC ? _global[name] || (_global[name] = {}) : (_global[name] || {})[PROTOTYPE];
    var exports = IS_GLOBAL ? _core : _core[name] || (_core[name] = {});
    var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
    var key, own, out, exp;
    if (IS_GLOBAL) source = name;

    for (key in source) {
      // contains in native
      own = !IS_FORCED && target && target[key] !== undefined; // export native or passed

      out = (own ? target : source)[key]; // bind timers to global for call from export context

      exp = IS_BIND && own ? _ctx(out, _global) : IS_PROTO && typeof out == 'function' ? _ctx(Function.call, out) : out; // extend global

      if (target) _redefine(target, key, out, type & $export.U); // export

      if (exports[key] != out) _hide(exports, key, exp);
      if (IS_PROTO && expProto[key] != out) expProto[key] = out;
    }
  };

  _global.core = _core; // type bitmap

  $export.F = 1; // forced

  $export.G = 2; // global

  $export.S = 4; // static

  $export.P = 8; // proto

  $export.B = 16; // bind

  $export.W = 32; // wrap

  $export.U = 64; // safe

  $export.R = 128; // real proto method for `library`

  var _export = $export;

  var _meta = createCommonjsModule(function (module) {
    var META = _uid('meta');

    var setDesc = _objectDp.f;
    var id = 0;

    var isExtensible = Object.isExtensible || function () {
      return true;
    };

    var FREEZE = !_fails(function () {
      return isExtensible(Object.preventExtensions({}));
    });

    var setMeta = function setMeta(it) {
      setDesc(it, META, {
        value: {
          i: 'O' + ++id,
          // object ID
          w: {} // weak collections IDs

        }
      });
    };

    var fastKey = function fastKey(it, create) {
      // return primitive with prefix
      if (!_isObject(it)) return _typeof2(it) == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;

      if (!_has(it, META)) {
        // can't set metadata to uncaught frozen object
        if (!isExtensible(it)) return 'F'; // not necessary to add metadata

        if (!create) return 'E'; // add missing metadata

        setMeta(it); // return object ID
      }

      return it[META].i;
    };

    var getWeak = function getWeak(it, create) {
      if (!_has(it, META)) {
        // can't set metadata to uncaught frozen object
        if (!isExtensible(it)) return true; // not necessary to add metadata

        if (!create) return false; // add missing metadata

        setMeta(it); // return hash weak collections IDs
      }

      return it[META].w;
    }; // add metadata on freeze-family methods calling


    var onFreeze = function onFreeze(it) {
      if (FREEZE && meta.NEED && isExtensible(it) && !_has(it, META)) setMeta(it);
      return it;
    };

    var meta = module.exports = {
      KEY: META,
      NEED: false,
      fastKey: fastKey,
      getWeak: getWeak,
      onFreeze: onFreeze
    };
  });

  var _wks = createCommonjsModule(function (module) {
    var store = _shared('wks');

    var _Symbol = _global.Symbol;
    var USE_SYMBOL = typeof _Symbol == 'function';

    var $exports = module.exports = function (name) {
      return store[name] || (store[name] = USE_SYMBOL && _Symbol[name] || (USE_SYMBOL ? _Symbol : _uid)('Symbol.' + name));
    };

    $exports.store = store;
  });

  var def = _objectDp.f;

  var TAG = _wks('toStringTag');

  var _setToStringTag = function _setToStringTag(it, tag, stat) {
    if (it && !_has(it = stat ? it : it.prototype, TAG)) def(it, TAG, {
      configurable: true,
      value: tag
    });
  };

  var f$1 = _wks;
  var _wksExt = {
    f: f$1
  };
  var defineProperty = _objectDp.f;

  var _wksDefine = function _wksDefine(name) {
    var $Symbol = _core.Symbol || (_core.Symbol = _global.Symbol || {});
    if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, {
      value: _wksExt.f(name)
    });
  };

  var toString = {}.toString;

  var _cof = function _cof(it) {
    return toString.call(it).slice(8, -1);
  }; // fallback for non-array-like ES3 and non-enumerable old V8 strings
  // eslint-disable-next-line no-prototype-builtins


  var _iobject = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
    return _cof(it) == 'String' ? it.split('') : Object(it);
  }; // 7.2.1 RequireObjectCoercible(argument)


  var _defined = function _defined(it) {
    if (it == undefined) throw TypeError("Can't call method on  " + it);
    return it;
  }; // to indexed object, toObject with fallback for non-array-like ES3 strings


  var _toIobject = function _toIobject(it) {
    return _iobject(_defined(it));
  }; // 7.1.4 ToInteger


  var ceil = Math.ceil;
  var floor = Math.floor;

  var _toInteger = function _toInteger(it) {
    return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
  }; // 7.1.15 ToLength


  var min = Math.min;

  var _toLength = function _toLength(it) {
    return it > 0 ? min(_toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
  };

  var max = Math.max;
  var min$1 = Math.min;

  var _toAbsoluteIndex = function _toAbsoluteIndex(index, length) {
    index = _toInteger(index);
    return index < 0 ? max(index + length, 0) : min$1(index, length);
  }; // false -> Array#indexOf
  // true  -> Array#includes


  var _arrayIncludes = function _arrayIncludes(IS_INCLUDES) {
    return function ($this, el, fromIndex) {
      var O = _toIobject($this);

      var length = _toLength(O.length);

      var index = _toAbsoluteIndex(fromIndex, length);

      var value; // Array#includes uses SameValueZero equality algorithm
      // eslint-disable-next-line no-self-compare

      if (IS_INCLUDES && el != el) while (length > index) {
        value = O[index++]; // eslint-disable-next-line no-self-compare

        if (value != value) return true; // Array#indexOf ignores holes, Array#includes - not
      } else for (; length > index; index++) {
        if (IS_INCLUDES || index in O) {
          if (O[index] === el) return IS_INCLUDES || index || 0;
        }
      }
      return !IS_INCLUDES && -1;
    };
  };

  var shared = _shared('keys');

  var _sharedKey = function _sharedKey(key) {
    return shared[key] || (shared[key] = _uid(key));
  };

  var arrayIndexOf = _arrayIncludes(false);

  var IE_PROTO = _sharedKey('IE_PROTO');

  var _objectKeysInternal = function _objectKeysInternal(object, names) {
    var O = _toIobject(object);

    var i = 0;
    var result = [];
    var key;

    for (key in O) {
      if (key != IE_PROTO) _has(O, key) && result.push(key);
    } // Don't enum bug & hidden keys


    while (names.length > i) {
      if (_has(O, key = names[i++])) {
        ~arrayIndexOf(result, key) || result.push(key);
      }
    }

    return result;
  }; // IE 8- don't enum bug keys


  var _enumBugKeys = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(','); // 19.1.2.14 / 15.2.3.14 Object.keys(O)


  var _objectKeys = Object.keys || function keys(O) {
    return _objectKeysInternal(O, _enumBugKeys);
  };

  var f$2 = Object.getOwnPropertySymbols;
  var _objectGops = {
    f: f$2
  };
  var f$3 = {}.propertyIsEnumerable;
  var _objectPie = {
    f: f$3
  }; // all enumerable object keys, includes symbols

  var _enumKeys = function _enumKeys(it) {
    var result = _objectKeys(it);

    var getSymbols = _objectGops.f;

    if (getSymbols) {
      var symbols = getSymbols(it);
      var isEnum = _objectPie.f;
      var i = 0;
      var key;

      while (symbols.length > i) {
        if (isEnum.call(it, key = symbols[i++])) result.push(key);
      }
    }

    return result;
  }; // 7.2.2 IsArray(argument)


  var _isArray = Array.isArray || function isArray(arg) {
    return _cof(arg) == 'Array';
  }; // 7.1.13 ToObject(argument)


  var _toObject = function _toObject(it) {
    return Object(_defined(it));
  };

  var _objectDps = _descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
    _anObject(O);

    var keys = _objectKeys(Properties);

    var length = keys.length;
    var i = 0;
    var P;

    while (length > i) {
      _objectDp.f(O, P = keys[i++], Properties[P]);
    }

    return O;
  };

  var document$2 = _global.document;

  var _html = document$2 && document$2.documentElement; // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])


  var IE_PROTO$1 = _sharedKey('IE_PROTO');

  var Empty = function Empty() {
    /* empty */
  };

  var PROTOTYPE$1 = 'prototype'; // Create object with fake `null` prototype: use iframe Object with cleared prototype

  var _createDict = function createDict() {
    // Thrash, waste and sodomy: IE GC bug
    var iframe = _domCreate('iframe');

    var i = _enumBugKeys.length;
    var lt = '<';
    var gt = '>';
    var iframeDocument;
    iframe.style.display = 'none';

    _html.appendChild(iframe);

    iframe.src = 'javascript:'; // eslint-disable-line no-script-url
    // createDict = iframe.contentWindow.Object;
    // html.removeChild(iframe);

    iframeDocument = iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
    iframeDocument.close();
    _createDict = iframeDocument.F;

    while (i--) {
      delete _createDict[PROTOTYPE$1][_enumBugKeys[i]];
    }

    return _createDict();
  };

  var _objectCreate = Object.create || function create(O, Properties) {
    var result;

    if (O !== null) {
      Empty[PROTOTYPE$1] = _anObject(O);
      result = new Empty();
      Empty[PROTOTYPE$1] = null; // add "__proto__" for Object.getPrototypeOf polyfill

      result[IE_PROTO$1] = O;
    } else result = _createDict();

    return Properties === undefined ? result : _objectDps(result, Properties);
  }; // 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)


  var hiddenKeys = _enumBugKeys.concat('length', 'prototype');

  var f$4 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return _objectKeysInternal(O, hiddenKeys);
  };

  var _objectGopn = {
    f: f$4
  }; // fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window

  var gOPN = _objectGopn.f;
  var toString$1 = {}.toString;
  var windowNames = (typeof window === "undefined" ? "undefined" : _typeof2(window)) == 'object' && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];

  var getWindowNames = function getWindowNames(it) {
    try {
      return gOPN(it);
    } catch (e) {
      return windowNames.slice();
    }
  };

  var f$5 = function getOwnPropertyNames(it) {
    return windowNames && toString$1.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(_toIobject(it));
  };

  var _objectGopnExt = {
    f: f$5
  };
  var gOPD = Object.getOwnPropertyDescriptor;
  var f$6 = _descriptors ? gOPD : function getOwnPropertyDescriptor(O, P) {
    O = _toIobject(O);
    P = _toPrimitive(P, true);
    if (_ie8DomDefine) try {
      return gOPD(O, P);
    } catch (e) {
      /* empty */
    }
    if (_has(O, P)) return _propertyDesc(!_objectPie.f.call(O, P), O[P]);
  };
  var _objectGopd = {
    f: f$6
  }; // ECMAScript 6 symbols shim

  var META = _meta.KEY;
  var gOPD$1 = _objectGopd.f;
  var dP$1 = _objectDp.f;
  var gOPN$1 = _objectGopnExt.f;
  var $Symbol = _global.Symbol;
  var $JSON = _global.JSON;

  var _stringify = $JSON && $JSON.stringify;

  var PROTOTYPE$2 = 'prototype';

  var HIDDEN = _wks('_hidden');

  var TO_PRIMITIVE = _wks('toPrimitive');

  var isEnum = {}.propertyIsEnumerable;

  var SymbolRegistry = _shared('symbol-registry');

  var AllSymbols = _shared('symbols');

  var OPSymbols = _shared('op-symbols');

  var ObjectProto = Object[PROTOTYPE$2];
  var USE_NATIVE = typeof $Symbol == 'function' && !!_objectGops.f;
  var QObject = _global.QObject; // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173

  var setter = !QObject || !QObject[PROTOTYPE$2] || !QObject[PROTOTYPE$2].findChild; // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687

  var setSymbolDesc = _descriptors && _fails(function () {
    return _objectCreate(dP$1({}, 'a', {
      get: function get() {
        return dP$1(this, 'a', {
          value: 7
        }).a;
      }
    })).a != 7;
  }) ? function (it, key, D) {
    var protoDesc = gOPD$1(ObjectProto, key);
    if (protoDesc) delete ObjectProto[key];
    dP$1(it, key, D);
    if (protoDesc && it !== ObjectProto) dP$1(ObjectProto, key, protoDesc);
  } : dP$1;

  var wrap = function wrap(tag) {
    var sym = AllSymbols[tag] = _objectCreate($Symbol[PROTOTYPE$2]);

    sym._k = tag;
    return sym;
  };

  var isSymbol = USE_NATIVE && _typeof2($Symbol.iterator) == 'symbol' ? function (it) {
    return _typeof2(it) == 'symbol';
  } : function (it) {
    return it instanceof $Symbol;
  };

  var $defineProperty = function defineProperty(it, key, D) {
    if (it === ObjectProto) $defineProperty(OPSymbols, key, D);

    _anObject(it);

    key = _toPrimitive(key, true);

    _anObject(D);

    if (_has(AllSymbols, key)) {
      if (!D.enumerable) {
        if (!_has(it, HIDDEN)) dP$1(it, HIDDEN, _propertyDesc(1, {}));
        it[HIDDEN][key] = true;
      } else {
        if (_has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
        D = _objectCreate(D, {
          enumerable: _propertyDesc(0, false)
        });
      }

      return setSymbolDesc(it, key, D);
    }

    return dP$1(it, key, D);
  };

  var $defineProperties = function defineProperties(it, P) {
    _anObject(it);

    var keys = _enumKeys(P = _toIobject(P));

    var i = 0;
    var l = keys.length;
    var key;

    while (l > i) {
      $defineProperty(it, key = keys[i++], P[key]);
    }

    return it;
  };

  var $create = function create(it, P) {
    return P === undefined ? _objectCreate(it) : $defineProperties(_objectCreate(it), P);
  };

  var $propertyIsEnumerable = function propertyIsEnumerable(key) {
    var E = isEnum.call(this, key = _toPrimitive(key, true));
    if (this === ObjectProto && _has(AllSymbols, key) && !_has(OPSymbols, key)) return false;
    return E || !_has(this, key) || !_has(AllSymbols, key) || _has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
  };

  var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
    it = _toIobject(it);
    key = _toPrimitive(key, true);
    if (it === ObjectProto && _has(AllSymbols, key) && !_has(OPSymbols, key)) return;
    var D = gOPD$1(it, key);
    if (D && _has(AllSymbols, key) && !(_has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
    return D;
  };

  var $getOwnPropertyNames = function getOwnPropertyNames(it) {
    var names = gOPN$1(_toIobject(it));
    var result = [];
    var i = 0;
    var key;

    while (names.length > i) {
      if (!_has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
    }

    return result;
  };

  var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
    var IS_OP = it === ObjectProto;
    var names = gOPN$1(IS_OP ? OPSymbols : _toIobject(it));
    var result = [];
    var i = 0;
    var key;

    while (names.length > i) {
      if (_has(AllSymbols, key = names[i++]) && (IS_OP ? _has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
    }

    return result;
  }; // 19.4.1.1 Symbol([description])


  if (!USE_NATIVE) {
    $Symbol = function _Symbol2() {
      if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');

      var tag = _uid(arguments.length > 0 ? arguments[0] : undefined);

      var $set = function $set(value) {
        if (this === ObjectProto) $set.call(OPSymbols, value);
        if (_has(this, HIDDEN) && _has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
        setSymbolDesc(this, tag, _propertyDesc(1, value));
      };

      if (_descriptors && setter) setSymbolDesc(ObjectProto, tag, {
        configurable: true,
        set: $set
      });
      return wrap(tag);
    };

    _redefine($Symbol[PROTOTYPE$2], 'toString', function toString() {
      return this._k;
    });

    _objectGopd.f = $getOwnPropertyDescriptor;
    _objectDp.f = $defineProperty;
    _objectGopn.f = _objectGopnExt.f = $getOwnPropertyNames;
    _objectPie.f = $propertyIsEnumerable;
    _objectGops.f = $getOwnPropertySymbols;

    if (_descriptors && !_library) {
      _redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
    }

    _wksExt.f = function (name) {
      return wrap(_wks(name));
    };
  }

  _export(_export.G + _export.W + _export.F * !USE_NATIVE, {
    Symbol: $Symbol
  });

  for (var es6Symbols = // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(','), j = 0; es6Symbols.length > j;) {
    _wks(es6Symbols[j++]);
  }

  for (var wellKnownSymbols = _objectKeys(_wks.store), k = 0; wellKnownSymbols.length > k;) {
    _wksDefine(wellKnownSymbols[k++]);
  }

  _export(_export.S + _export.F * !USE_NATIVE, 'Symbol', {
    // 19.4.2.1 Symbol.for(key)
    'for': function _for(key) {
      return _has(SymbolRegistry, key += '') ? SymbolRegistry[key] : SymbolRegistry[key] = $Symbol(key);
    },
    // 19.4.2.5 Symbol.keyFor(sym)
    keyFor: function keyFor(sym) {
      if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');

      for (var key in SymbolRegistry) {
        if (SymbolRegistry[key] === sym) return key;
      }
    },
    useSetter: function useSetter() {
      setter = true;
    },
    useSimple: function useSimple() {
      setter = false;
    }
  });

  _export(_export.S + _export.F * !USE_NATIVE, 'Object', {
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
  }); // Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
  // https://bugs.chromium.org/p/v8/issues/detail?id=3443


  var FAILS_ON_PRIMITIVES = _fails(function () {
    _objectGops.f(1);
  });

  _export(_export.S + _export.F * FAILS_ON_PRIMITIVES, 'Object', {
    getOwnPropertySymbols: function getOwnPropertySymbols(it) {
      return _objectGops.f(_toObject(it));
    }
  }); // 24.3.2 JSON.stringify(value [, replacer [, space]])


  $JSON && _export(_export.S + _export.F * (!USE_NATIVE || _fails(function () {
    var S = $Symbol(); // MS Edge converts symbol values to JSON as {}
    // WebKit converts symbol values to JSON as null
    // V8 throws on boxed symbols

    return _stringify([S]) != '[null]' || _stringify({
      a: S
    }) != '{}' || _stringify(Object(S)) != '{}';
  })), 'JSON', {
    stringify: function stringify(it) {
      var args = [it];
      var i = 1;
      var replacer, $replacer;

      while (arguments.length > i) {
        args.push(arguments[i++]);
      }

      $replacer = replacer = args[1];
      if (!_isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined

      if (!_isArray(replacer)) replacer = function replacer(key, value) {
        if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
        if (!isSymbol(value)) return value;
      };
      args[1] = replacer;
      return _stringify.apply($JSON, args);
    }
  }); // 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)

  $Symbol[PROTOTYPE$2][TO_PRIMITIVE] || _hide($Symbol[PROTOTYPE$2], TO_PRIMITIVE, $Symbol[PROTOTYPE$2].valueOf); // 19.4.3.5 Symbol.prototype[@@toStringTag]

  _setToStringTag($Symbol, 'Symbol'); // 20.2.1.9 Math[@@toStringTag]


  _setToStringTag(Math, 'Math', true); // 24.3.3 JSON[@@toStringTag]


  _setToStringTag(_global.JSON, 'JSON', true); // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])


  _export(_export.S, 'Object', {
    create: _objectCreate
  }); // 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)


  _export(_export.S + _export.F * !_descriptors, 'Object', {
    defineProperty: _objectDp.f
  }); // 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)


  _export(_export.S + _export.F * !_descriptors, 'Object', {
    defineProperties: _objectDps
  }); // most Object methods by ES6 should accept primitives


  var _objectSap = function _objectSap(KEY, exec) {
    var fn = (_core.Object || {})[KEY] || Object[KEY];
    var exp = {};
    exp[KEY] = exec(fn);

    _export(_export.S + _export.F * _fails(function () {
      fn(1);
    }), 'Object', exp);
  }; // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)


  var $getOwnPropertyDescriptor$1 = _objectGopd.f;

  _objectSap('getOwnPropertyDescriptor', function () {
    return function getOwnPropertyDescriptor(it, key) {
      return $getOwnPropertyDescriptor$1(_toIobject(it), key);
    };
  }); // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)


  var IE_PROTO$2 = _sharedKey('IE_PROTO');

  var ObjectProto$1 = Object.prototype;

  var _objectGpo = Object.getPrototypeOf || function (O) {
    O = _toObject(O);
    if (_has(O, IE_PROTO$2)) return O[IE_PROTO$2];

    if (typeof O.constructor == 'function' && O instanceof O.constructor) {
      return O.constructor.prototype;
    }

    return O instanceof Object ? ObjectProto$1 : null;
  }; // 19.1.2.9 Object.getPrototypeOf(O)


  _objectSap('getPrototypeOf', function () {
    return function getPrototypeOf(it) {
      return _objectGpo(_toObject(it));
    };
  }); // 19.1.2.14 Object.keys(O)


  _objectSap('keys', function () {
    return function keys(it) {
      return _objectKeys(_toObject(it));
    };
  }); // 19.1.2.7 Object.getOwnPropertyNames(O)


  _objectSap('getOwnPropertyNames', function () {
    return _objectGopnExt.f;
  }); // 19.1.2.5 Object.freeze(O)


  var meta = _meta.onFreeze;

  _objectSap('freeze', function ($freeze) {
    return function freeze(it) {
      return $freeze && _isObject(it) ? $freeze(meta(it)) : it;
    };
  }); // 19.1.2.17 Object.seal(O)


  var meta$1 = _meta.onFreeze;

  _objectSap('seal', function ($seal) {
    return function seal(it) {
      return $seal && _isObject(it) ? $seal(meta$1(it)) : it;
    };
  }); // 19.1.2.15 Object.preventExtensions(O)


  var meta$2 = _meta.onFreeze;

  _objectSap('preventExtensions', function ($preventExtensions) {
    return function preventExtensions(it) {
      return $preventExtensions && _isObject(it) ? $preventExtensions(meta$2(it)) : it;
    };
  }); // 19.1.2.12 Object.isFrozen(O)


  _objectSap('isFrozen', function ($isFrozen) {
    return function isFrozen(it) {
      return _isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
    };
  }); // 19.1.2.13 Object.isSealed(O)


  _objectSap('isSealed', function ($isSealed) {
    return function isSealed(it) {
      return _isObject(it) ? $isSealed ? $isSealed(it) : false : true;
    };
  }); // 19.1.2.11 Object.isExtensible(O)


  _objectSap('isExtensible', function ($isExtensible) {
    return function isExtensible(it) {
      return _isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
    };
  }); // 19.1.2.1 Object.assign(target, source, ...)


  var $assign = Object.assign; // should work with symbols and should have deterministic property order (V8 bug)

  var _objectAssign = !$assign || _fails(function () {
    var A = {};
    var B = {}; // eslint-disable-next-line no-undef

    var S = Symbol();
    var K = 'abcdefghijklmnopqrst';
    A[S] = 7;
    K.split('').forEach(function (k) {
      B[k] = k;
    });
    return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
  }) ? function assign(target, source) {
    // eslint-disable-line no-unused-vars
    var T = _toObject(target);

    var aLen = arguments.length;
    var index = 1;
    var getSymbols = _objectGops.f;
    var isEnum = _objectPie.f;

    while (aLen > index) {
      var S = _iobject(arguments[index++]);

      var keys = getSymbols ? _objectKeys(S).concat(getSymbols(S)) : _objectKeys(S);
      var length = keys.length;
      var j = 0;
      var key;

      while (length > j) {
        key = keys[j++];
        if (!_descriptors || isEnum.call(S, key)) T[key] = S[key];
      }
    }

    return T;
  } : $assign; // 19.1.3.1 Object.assign(target, source)


  _export(_export.S + _export.F, 'Object', {
    assign: _objectAssign
  }); // 7.2.9 SameValue(x, y)


  var _sameValue = Object.is || function is(x, y) {
    // eslint-disable-next-line no-self-compare
    return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
  }; // 19.1.3.10 Object.is(value1, value2)


  _export(_export.S, 'Object', {
    is: _sameValue
  }); // Works with __proto__ only. Old v8 can't work with null proto objects.

  /* eslint-disable no-proto */


  var check = function check(O, proto) {
    _anObject(O);

    if (!_isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
  };

  var _setProto = {
    set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = _ctx(Function.call, _objectGopd.f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) {
        buggy = true;
      }

      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
    check: check
  }; // 19.1.3.19 Object.setPrototypeOf(O, proto)

  _export(_export.S, 'Object', {
    setPrototypeOf: _setProto.set
  }); // getting tag from 19.1.3.6 Object.prototype.toString()


  var TAG$1 = _wks('toStringTag'); // ES3 wrong here


  var ARG = _cof(function () {
    return arguments;
  }()) == 'Arguments'; // fallback for IE11 Script Access Denied error

  var tryGet = function tryGet(it, key) {
    try {
      return it[key];
    } catch (e) {
      /* empty */
    }
  };

  var _classof = function _classof(it) {
    var O, T, B;
    return it === undefined ? 'Undefined' : it === null ? 'Null' // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG$1)) == 'string' ? T // builtinTag case
    : ARG ? _cof(O) // ES3 arguments fallback
    : (B = _cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
  }; // 19.1.3.6 Object.prototype.toString()


  var test = {};
  test[_wks('toStringTag')] = 'z';

  if (test + '' != '[object z]') {
    _redefine(Object.prototype, 'toString', function toString() {
      return '[object ' + _classof(this) + ']';
    }, true);
  } // fast apply, http://jsperf.lnkit.com/fast-apply/5


  var _invoke = function _invoke(fn, args, that) {
    var un = that === undefined;

    switch (args.length) {
      case 0:
        return un ? fn() : fn.call(that);

      case 1:
        return un ? fn(args[0]) : fn.call(that, args[0]);

      case 2:
        return un ? fn(args[0], args[1]) : fn.call(that, args[0], args[1]);

      case 3:
        return un ? fn(args[0], args[1], args[2]) : fn.call(that, args[0], args[1], args[2]);

      case 4:
        return un ? fn(args[0], args[1], args[2], args[3]) : fn.call(that, args[0], args[1], args[2], args[3]);
    }

    return fn.apply(that, args);
  };

  var arraySlice = [].slice;
  var factories = {};

  var construct = function construct(F, len, args) {
    if (!(len in factories)) {
      for (var n = [], i = 0; i < len; i++) {
        n[i] = 'a[' + i + ']';
      } // eslint-disable-next-line no-new-func


      factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
    }

    return factories[len](F, args);
  };

  var _bind = Function.bind || function bind(that
  /* , ...args */
  ) {
    var fn = _aFunction(this);

    var partArgs = arraySlice.call(arguments, 1);

    var bound = function bound()
    /* args... */
    {
      var args = partArgs.concat(arraySlice.call(arguments));
      return this instanceof bound ? construct(fn, args.length, args) : _invoke(fn, args, that);
    };

    if (_isObject(fn.prototype)) bound.prototype = fn.prototype;
    return bound;
  }; // 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)


  _export(_export.P, 'Function', {
    bind: _bind
  });

  var dP$2 = _objectDp.f;
  var FProto = Function.prototype;
  var nameRE = /^\s*function ([^ (]*)/;
  var NAME = 'name'; // 19.2.4.2 name

  NAME in FProto || _descriptors && dP$2(FProto, NAME, {
    configurable: true,
    get: function get() {
      try {
        return ('' + this).match(nameRE)[1];
      } catch (e) {
        return '';
      }
    }
  });

  var HAS_INSTANCE = _wks('hasInstance');

  var FunctionProto = Function.prototype; // 19.2.3.6 Function.prototype[@@hasInstance](V)

  if (!(HAS_INSTANCE in FunctionProto)) _objectDp.f(FunctionProto, HAS_INSTANCE, {
    value: function value(O) {
      if (typeof this != 'function' || !_isObject(O)) return false;
      if (!_isObject(this.prototype)) return O instanceof this; // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:

      while (O = _objectGpo(O)) {
        if (this.prototype === O) return true;
      }

      return false;
    }
  });

  var _stringWs = "\t\n\x0B\f\r \xA0\u1680\u180E\u2000\u2001\u2002\u2003" + "\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF";

  var space = '[' + _stringWs + ']';
  var non = "\u200B\x85";
  var ltrim = RegExp('^' + space + space + '*');
  var rtrim = RegExp(space + space + '*$');

  var exporter = function exporter(KEY, exec, ALIAS) {
    var exp = {};

    var FORCE = _fails(function () {
      return !!_stringWs[KEY]() || non[KEY]() != non;
    });

    var fn = exp[KEY] = FORCE ? exec(trim) : _stringWs[KEY];
    if (ALIAS) exp[ALIAS] = fn;

    _export(_export.P + _export.F * FORCE, 'String', exp);
  }; // 1 -> String#trimLeft
  // 2 -> String#trimRight
  // 3 -> String#trim


  var trim = exporter.trim = function (string, TYPE) {
    string = String(_defined(string));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };

  var _stringTrim = exporter;
  var $parseInt = _global.parseInt;
  var $trim = _stringTrim.trim;
  var hex = /^[-+]?0[xX]/;

  var _parseInt = $parseInt(_stringWs + '08') !== 8 || $parseInt(_stringWs + '0x16') !== 22 ? function parseInt(str, radix) {
    var string = $trim(String(str), 3);
    return $parseInt(string, radix >>> 0 || (hex.test(string) ? 16 : 10));
  } : $parseInt; // 18.2.5 parseInt(string, radix)


  _export(_export.G + _export.F * (parseInt != _parseInt), {
    parseInt: _parseInt
  });

  var $parseFloat = _global.parseFloat;
  var $trim$1 = _stringTrim.trim;

  var _parseFloat = 1 / $parseFloat(_stringWs + '-0') !== -Infinity ? function parseFloat(str) {
    var string = $trim$1(String(str), 3);
    var result = $parseFloat(string);
    return result === 0 && string.charAt(0) == '-' ? -0 : result;
  } : $parseFloat; // 18.2.4 parseFloat(string)


  _export(_export.G + _export.F * (parseFloat != _parseFloat), {
    parseFloat: _parseFloat
  });

  var setPrototypeOf = _setProto.set;

  var _inheritIfRequired = function _inheritIfRequired(that, target, C) {
    var S = target.constructor;
    var P;

    if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && _isObject(P) && setPrototypeOf) {
      setPrototypeOf(that, P);
    }

    return that;
  };

  var gOPN$2 = _objectGopn.f;
  var gOPD$2 = _objectGopd.f;
  var dP$3 = _objectDp.f;
  var $trim$2 = _stringTrim.trim;
  var NUMBER = 'Number';
  var $Number = _global[NUMBER];
  var Base = $Number;
  var proto = $Number.prototype; // Opera ~12 has broken Object#toString

  var BROKEN_COF = _cof(_objectCreate(proto)) == NUMBER;
  var TRIM = ('trim' in String.prototype); // 7.1.3 ToNumber(argument)

  var toNumber = function toNumber(argument) {
    var it = _toPrimitive(argument, false);

    if (typeof it == 'string' && it.length > 2) {
      it = TRIM ? it.trim() : $trim$2(it, 3);
      var first = it.charCodeAt(0);
      var third, radix, maxCode;

      if (first === 43 || first === 45) {
        third = it.charCodeAt(2);
        if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
      } else if (first === 48) {
        switch (it.charCodeAt(1)) {
          case 66:
          case 98:
            radix = 2;
            maxCode = 49;
            break;
          // fast equal /^0b[01]+$/i

          case 79:
          case 111:
            radix = 8;
            maxCode = 55;
            break;
          // fast equal /^0o[0-7]+$/i

          default:
            return +it;
        }

        for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
          code = digits.charCodeAt(i); // parseInt parses a string to a first unavailable symbol
          // but ToNumber should return NaN if a string contains unavailable symbols

          if (code < 48 || code > maxCode) return NaN;
        }

        return parseInt(digits, radix);
      }
    }

    return +it;
  };

  if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
    $Number = function Number(value) {
      var it = arguments.length < 1 ? 0 : value;
      var that = this;
      return that instanceof $Number // check on 1..constructor(foo) case
      && (BROKEN_COF ? _fails(function () {
        proto.valueOf.call(that);
      }) : _cof(that) != NUMBER) ? _inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
    };

    for (var keys = _descriptors ? gOPN$2(Base) : ( // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' + // ES6 (in case, if modules with ES6 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' + 'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger').split(','), j$1 = 0, key; keys.length > j$1; j$1++) {
      if (_has(Base, key = keys[j$1]) && !_has($Number, key)) {
        dP$3($Number, key, gOPD$2(Base, key));
      }
    }

    $Number.prototype = proto;
    proto.constructor = $Number;

    _redefine(_global, NUMBER, $Number);
  }

  var _aNumberValue = function _aNumberValue(it, msg) {
    if (typeof it != 'number' && _cof(it) != 'Number') throw TypeError(msg);
    return +it;
  };

  var _stringRepeat = function repeat(count) {
    var str = String(_defined(this));
    var res = '';

    var n = _toInteger(count);

    if (n < 0 || n == Infinity) throw RangeError("Count can't be negative");

    for (; n > 0; (n >>>= 1) && (str += str)) {
      if (n & 1) res += str;
    }

    return res;
  };

  var $toFixed = 1.0.toFixed;
  var floor$1 = Math.floor;
  var data = [0, 0, 0, 0, 0, 0];
  var ERROR = 'Number.toFixed: incorrect invocation!';
  var ZERO = '0';

  var multiply = function multiply(n, c) {
    var i = -1;
    var c2 = c;

    while (++i < 6) {
      c2 += n * data[i];
      data[i] = c2 % 1e7;
      c2 = floor$1(c2 / 1e7);
    }
  };

  var divide = function divide(n) {
    var i = 6;
    var c = 0;

    while (--i >= 0) {
      c += data[i];
      data[i] = floor$1(c / n);
      c = c % n * 1e7;
    }
  };

  var numToString = function numToString() {
    var i = 6;
    var s = '';

    while (--i >= 0) {
      if (s !== '' || i === 0 || data[i] !== 0) {
        var t = String(data[i]);
        s = s === '' ? t : s + _stringRepeat.call(ZERO, 7 - t.length) + t;
      }
    }

    return s;
  };

  var pow = function pow(x, n, acc) {
    return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
  };

  var log = function log(x) {
    var n = 0;
    var x2 = x;

    while (x2 >= 4096) {
      n += 12;
      x2 /= 4096;
    }

    while (x2 >= 2) {
      n += 1;
      x2 /= 2;
    }

    return n;
  };

  _export(_export.P + _export.F * (!!$toFixed && (0.00008.toFixed(3) !== '0.000' || 0.9.toFixed(0) !== '1' || 1.255.toFixed(2) !== '1.25' || 1000000000000000128.0.toFixed(0) !== '1000000000000000128') || !_fails(function () {
    // V8 ~ Android 4.3-
    $toFixed.call({});
  })), 'Number', {
    toFixed: function toFixed(fractionDigits) {
      var x = _aNumberValue(this, ERROR);

      var f = _toInteger(fractionDigits);

      var s = '';
      var m = ZERO;
      var e, z, j, k;
      if (f < 0 || f > 20) throw RangeError(ERROR); // eslint-disable-next-line no-self-compare

      if (x != x) return 'NaN';
      if (x <= -1e21 || x >= 1e21) return String(x);

      if (x < 0) {
        s = '-';
        x = -x;
      }

      if (x > 1e-21) {
        e = log(x * pow(2, 69, 1)) - 69;
        z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
        z *= 0x10000000000000;
        e = 52 - e;

        if (e > 0) {
          multiply(0, z);
          j = f;

          while (j >= 7) {
            multiply(1e7, 0);
            j -= 7;
          }

          multiply(pow(10, j, 1), 0);
          j = e - 1;

          while (j >= 23) {
            divide(1 << 23);
            j -= 23;
          }

          divide(1 << j);
          multiply(1, 1);
          divide(2);
          m = numToString();
        } else {
          multiply(0, z);
          multiply(1 << -e, 0);
          m = numToString() + _stringRepeat.call(ZERO, f);
        }
      }

      if (f > 0) {
        k = m.length;
        m = s + (k <= f ? '0.' + _stringRepeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
      } else {
        m = s + m;
      }

      return m;
    }
  });

  var $toPrecision = 1.0.toPrecision;

  _export(_export.P + _export.F * (_fails(function () {
    // IE7-
    return $toPrecision.call(1, undefined) !== '1';
  }) || !_fails(function () {
    // V8 ~ Android 4.3-
    $toPrecision.call({});
  })), 'Number', {
    toPrecision: function toPrecision(precision) {
      var that = _aNumberValue(this, 'Number#toPrecision: incorrect invocation!');

      return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision);
    }
  }); // 20.1.2.1 Number.EPSILON


  _export(_export.S, 'Number', {
    EPSILON: Math.pow(2, -52)
  }); // 20.1.2.2 Number.isFinite(number)


  var _isFinite = _global.isFinite;

  _export(_export.S, 'Number', {
    isFinite: function isFinite(it) {
      return typeof it == 'number' && _isFinite(it);
    }
  }); // 20.1.2.3 Number.isInteger(number)


  var floor$2 = Math.floor;

  var _isInteger = function isInteger(it) {
    return !_isObject(it) && isFinite(it) && floor$2(it) === it;
  }; // 20.1.2.3 Number.isInteger(number)


  _export(_export.S, 'Number', {
    isInteger: _isInteger
  }); // 20.1.2.4 Number.isNaN(number)


  _export(_export.S, 'Number', {
    isNaN: function isNaN(number) {
      // eslint-disable-next-line no-self-compare
      return number != number;
    }
  }); // 20.1.2.5 Number.isSafeInteger(number)


  var abs = Math.abs;

  _export(_export.S, 'Number', {
    isSafeInteger: function isSafeInteger(number) {
      return _isInteger(number) && abs(number) <= 0x1fffffffffffff;
    }
  }); // 20.1.2.6 Number.MAX_SAFE_INTEGER


  _export(_export.S, 'Number', {
    MAX_SAFE_INTEGER: 0x1fffffffffffff
  }); // 20.1.2.10 Number.MIN_SAFE_INTEGER


  _export(_export.S, 'Number', {
    MIN_SAFE_INTEGER: -0x1fffffffffffff
  }); // 20.1.2.12 Number.parseFloat(string)


  _export(_export.S + _export.F * (Number.parseFloat != _parseFloat), 'Number', {
    parseFloat: _parseFloat
  }); // 20.1.2.13 Number.parseInt(string, radix)


  _export(_export.S + _export.F * (Number.parseInt != _parseInt), 'Number', {
    parseInt: _parseInt
  }); // 20.2.2.20 Math.log1p(x)


  var _mathLog1p = Math.log1p || function log1p(x) {
    return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
  }; // 20.2.2.3 Math.acosh(x)


  var sqrt = Math.sqrt;
  var $acosh = Math.acosh;

  _export(_export.S + _export.F * !($acosh // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
  && Math.floor($acosh(Number.MAX_VALUE)) == 710 // Tor Browser bug: Math.acosh(Infinity) -> NaN
  && $acosh(Infinity) == Infinity), 'Math', {
    acosh: function acosh(x) {
      return (x = +x) < 1 ? NaN : x > 94906265.62425156 ? Math.log(x) + Math.LN2 : _mathLog1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
    }
  }); // 20.2.2.5 Math.asinh(x)


  var $asinh = Math.asinh;

  function asinh(x) {
    return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
  } // Tor Browser bug: Math.asinh(0) -> -0


  _export(_export.S + _export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', {
    asinh: asinh
  }); // 20.2.2.7 Math.atanh(x)


  var $atanh = Math.atanh; // Tor Browser bug: Math.atanh(-0) -> 0

  _export(_export.S + _export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
    atanh: function atanh(x) {
      return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
    }
  }); // 20.2.2.28 Math.sign(x)


  var _mathSign = Math.sign || function sign(x) {
    // eslint-disable-next-line no-self-compare
    return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
  }; // 20.2.2.9 Math.cbrt(x)


  _export(_export.S, 'Math', {
    cbrt: function cbrt(x) {
      return _mathSign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
    }
  }); // 20.2.2.11 Math.clz32(x)


  _export(_export.S, 'Math', {
    clz32: function clz32(x) {
      return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
    }
  }); // 20.2.2.12 Math.cosh(x)


  var exp = Math.exp;

  _export(_export.S, 'Math', {
    cosh: function cosh(x) {
      return (exp(x = +x) + exp(-x)) / 2;
    }
  }); // 20.2.2.14 Math.expm1(x)


  var $expm1 = Math.expm1;

  var _mathExpm1 = !$expm1 // Old FF bug
  || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168 // Tor Browser bug
  || $expm1(-2e-17) != -2e-17 ? function expm1(x) {
    return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
  } : $expm1; // 20.2.2.14 Math.expm1(x)


  _export(_export.S + _export.F * (_mathExpm1 != Math.expm1), 'Math', {
    expm1: _mathExpm1
  }); // 20.2.2.16 Math.fround(x)


  var pow$1 = Math.pow;
  var EPSILON = pow$1(2, -52);
  var EPSILON32 = pow$1(2, -23);
  var MAX32 = pow$1(2, 127) * (2 - EPSILON32);
  var MIN32 = pow$1(2, -126);

  var roundTiesToEven = function roundTiesToEven(n) {
    return n + 1 / EPSILON - 1 / EPSILON;
  };

  var _mathFround = Math.fround || function fround(x) {
    var $abs = Math.abs(x);

    var $sign = _mathSign(x);

    var a, result;
    if ($abs < MIN32) return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
    a = (1 + EPSILON32 / EPSILON) * $abs;
    result = a - (a - $abs); // eslint-disable-next-line no-self-compare

    if (result > MAX32 || result != result) return $sign * Infinity;
    return $sign * result;
  }; // 20.2.2.16 Math.fround(x)


  _export(_export.S, 'Math', {
    fround: _mathFround
  }); // 20.2.2.17 Math.hypot([value1[, value2[, … ]]])


  var abs$1 = Math.abs;

  _export(_export.S, 'Math', {
    hypot: function hypot(value1, value2) {
      // eslint-disable-line no-unused-vars
      var sum = 0;
      var i = 0;
      var aLen = arguments.length;
      var larg = 0;
      var arg, div;

      while (i < aLen) {
        arg = abs$1(arguments[i++]);

        if (larg < arg) {
          div = larg / arg;
          sum = sum * div * div + 1;
          larg = arg;
        } else if (arg > 0) {
          div = arg / larg;
          sum += div * div;
        } else sum += arg;
      }

      return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
    }
  }); // 20.2.2.18 Math.imul(x, y)


  var $imul = Math.imul; // some WebKit versions fails with big numbers, some has wrong arity

  _export(_export.S + _export.F * _fails(function () {
    return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
  }), 'Math', {
    imul: function imul(x, y) {
      var UINT16 = 0xffff;
      var xn = +x;
      var yn = +y;
      var xl = UINT16 & xn;
      var yl = UINT16 & yn;
      return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
    }
  }); // 20.2.2.21 Math.log10(x)


  _export(_export.S, 'Math', {
    log10: function log10(x) {
      return Math.log(x) * Math.LOG10E;
    }
  }); // 20.2.2.20 Math.log1p(x)


  _export(_export.S, 'Math', {
    log1p: _mathLog1p
  }); // 20.2.2.22 Math.log2(x)


  _export(_export.S, 'Math', {
    log2: function log2(x) {
      return Math.log(x) / Math.LN2;
    }
  }); // 20.2.2.28 Math.sign(x)


  _export(_export.S, 'Math', {
    sign: _mathSign
  }); // 20.2.2.30 Math.sinh(x)


  var exp$1 = Math.exp; // V8 near Chromium 38 has a problem with very small numbers

  _export(_export.S + _export.F * _fails(function () {
    return !Math.sinh(-2e-17) != -2e-17;
  }), 'Math', {
    sinh: function sinh(x) {
      return Math.abs(x = +x) < 1 ? (_mathExpm1(x) - _mathExpm1(-x)) / 2 : (exp$1(x - 1) - exp$1(-x - 1)) * (Math.E / 2);
    }
  }); // 20.2.2.33 Math.tanh(x)


  var exp$2 = Math.exp;

  _export(_export.S, 'Math', {
    tanh: function tanh(x) {
      var a = _mathExpm1(x = +x);

      var b = _mathExpm1(-x);

      return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp$2(x) + exp$2(-x));
    }
  }); // 20.2.2.34 Math.trunc(x)


  _export(_export.S, 'Math', {
    trunc: function trunc(it) {
      return (it > 0 ? Math.floor : Math.ceil)(it);
    }
  });

  var fromCharCode = String.fromCharCode;
  var $fromCodePoint = String.fromCodePoint; // length should be 1, old FF problem

  _export(_export.S + _export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
    // 21.1.2.2 String.fromCodePoint(...codePoints)
    fromCodePoint: function fromCodePoint(x) {
      // eslint-disable-line no-unused-vars
      var res = [];
      var aLen = arguments.length;
      var i = 0;
      var code;

      while (aLen > i) {
        code = +arguments[i++];
        if (_toAbsoluteIndex(code, 0x10ffff) !== code) throw RangeError(code + ' is not a valid code point');
        res.push(code < 0x10000 ? fromCharCode(code) : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00));
      }

      return res.join('');
    }
  });

  _export(_export.S, 'String', {
    // 21.1.2.4 String.raw(callSite, ...substitutions)
    raw: function raw(callSite) {
      var tpl = _toIobject(callSite.raw);

      var len = _toLength(tpl.length);

      var aLen = arguments.length;
      var res = [];
      var i = 0;

      while (len > i) {
        res.push(String(tpl[i++]));
        if (i < aLen) res.push(String(arguments[i]));
      }

      return res.join('');
    }
  }); // 21.1.3.25 String.prototype.trim()


  _stringTrim('trim', function ($trim) {
    return function trim() {
      return $trim(this, 3);
    };
  }); // true  -> String#at
  // false -> String#codePointAt


  var _stringAt = function _stringAt(TO_STRING) {
    return function (that, pos) {
      var s = String(_defined(that));

      var i = _toInteger(pos);

      var l = s.length;
      var a, b;
      if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
      a = s.charCodeAt(i);
      return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
    };
  };

  var _iterators = {};
  var IteratorPrototype = {}; // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()

  _hide(IteratorPrototype, _wks('iterator'), function () {
    return this;
  });

  var _iterCreate = function _iterCreate(Constructor, NAME, next) {
    Constructor.prototype = _objectCreate(IteratorPrototype, {
      next: _propertyDesc(1, next)
    });

    _setToStringTag(Constructor, NAME + ' Iterator');
  };

  var ITERATOR = _wks('iterator');

  var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`

  var FF_ITERATOR = '@@iterator';
  var KEYS = 'keys';
  var VALUES = 'values';

  var returnThis = function returnThis() {
    return this;
  };

  var _iterDefine = function _iterDefine(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
    _iterCreate(Constructor, NAME, next);

    var getMethod = function getMethod(kind) {
      if (!BUGGY && kind in proto) return proto[kind];

      switch (kind) {
        case KEYS:
          return function keys() {
            return new Constructor(this, kind);
          };

        case VALUES:
          return function values() {
            return new Constructor(this, kind);
          };
      }

      return function entries() {
        return new Constructor(this, kind);
      };
    };

    var TAG = NAME + ' Iterator';
    var DEF_VALUES = DEFAULT == VALUES;
    var VALUES_BUG = false;
    var proto = Base.prototype;
    var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
    var $default = $native || getMethod(DEFAULT);
    var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
    var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
    var methods, key, IteratorPrototype; // Fix native

    if ($anyNative) {
      IteratorPrototype = _objectGpo($anyNative.call(new Base()));

      if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
        // Set @@toStringTag to native iterators
        _setToStringTag(IteratorPrototype, TAG, true); // fix for some old engines


        if (typeof IteratorPrototype[ITERATOR] != 'function') _hide(IteratorPrototype, ITERATOR, returnThis);
      }
    } // fix Array#{values, @@iterator}.name in V8 / FF


    if (DEF_VALUES && $native && $native.name !== VALUES) {
      VALUES_BUG = true;

      $default = function values() {
        return $native.call(this);
      };
    } // Define iterator


    if (BUGGY || VALUES_BUG || !proto[ITERATOR]) {
      _hide(proto, ITERATOR, $default);
    } // Plug for library


    _iterators[NAME] = $default;
    _iterators[TAG] = returnThis;

    if (DEFAULT) {
      methods = {
        values: DEF_VALUES ? $default : getMethod(VALUES),
        keys: IS_SET ? $default : getMethod(KEYS),
        entries: $entries
      };
      if (FORCED) for (key in methods) {
        if (!(key in proto)) _redefine(proto, key, methods[key]);
      } else _export(_export.P + _export.F * (BUGGY || VALUES_BUG), NAME, methods);
    }

    return methods;
  };

  var $at = _stringAt(true); // 21.1.3.27 String.prototype[@@iterator]()


  _iterDefine(String, 'String', function (iterated) {
    this._t = String(iterated); // target

    this._i = 0; // next index
    // 21.1.5.2.1 %StringIteratorPrototype%.next()
  }, function () {
    var O = this._t;
    var index = this._i;
    var point;
    if (index >= O.length) return {
      value: undefined,
      done: true
    };
    point = $at(O, index);
    this._i += point.length;
    return {
      value: point,
      done: false
    };
  });

  var $at$1 = _stringAt(false);

  _export(_export.P, 'String', {
    // 21.1.3.3 String.prototype.codePointAt(pos)
    codePointAt: function codePointAt(pos) {
      return $at$1(this, pos);
    }
  }); // 7.2.8 IsRegExp(argument)


  var MATCH = _wks('match');

  var _isRegexp = function _isRegexp(it) {
    var isRegExp;
    return _isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : _cof(it) == 'RegExp');
  }; // helper for String#{startsWith, endsWith, includes}


  var _stringContext = function _stringContext(that, searchString, NAME) {
    if (_isRegexp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
    return String(_defined(that));
  };

  var MATCH$1 = _wks('match');

  var _failsIsRegexp = function _failsIsRegexp(KEY) {
    var re = /./;

    try {
      '/./'[KEY](re);
    } catch (e) {
      try {
        re[MATCH$1] = false;
        return !'/./'[KEY](re);
      } catch (f) {
        /* empty */
      }
    }

    return true;
  };

  var ENDS_WITH = 'endsWith';
  var $endsWith = ''[ENDS_WITH];

  _export(_export.P + _export.F * _failsIsRegexp(ENDS_WITH), 'String', {
    endsWith: function endsWith(searchString
    /* , endPosition = @length */
    ) {
      var that = _stringContext(this, searchString, ENDS_WITH);

      var endPosition = arguments.length > 1 ? arguments[1] : undefined;

      var len = _toLength(that.length);

      var end = endPosition === undefined ? len : Math.min(_toLength(endPosition), len);
      var search = String(searchString);
      return $endsWith ? $endsWith.call(that, search, end) : that.slice(end - search.length, end) === search;
    }
  });

  var INCLUDES = 'includes';

  _export(_export.P + _export.F * _failsIsRegexp(INCLUDES), 'String', {
    includes: function includes(searchString
    /* , position = 0 */
    ) {
      return !!~_stringContext(this, searchString, INCLUDES).indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  _export(_export.P, 'String', {
    // 21.1.3.13 String.prototype.repeat(count)
    repeat: _stringRepeat
  });

  var STARTS_WITH = 'startsWith';
  var $startsWith = ''[STARTS_WITH];

  _export(_export.P + _export.F * _failsIsRegexp(STARTS_WITH), 'String', {
    startsWith: function startsWith(searchString
    /* , position = 0 */
    ) {
      var that = _stringContext(this, searchString, STARTS_WITH);

      var index = _toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));

      var search = String(searchString);
      return $startsWith ? $startsWith.call(that, search, index) : that.slice(index, index + search.length) === search;
    }
  });

  var quot = /"/g; // B.2.3.2.1 CreateHTML(string, tag, attribute, value)

  var createHTML = function createHTML(string, tag, attribute, value) {
    var S = String(_defined(string));
    var p1 = '<' + tag;
    if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
    return p1 + '>' + S + '</' + tag + '>';
  };

  var _stringHtml = function _stringHtml(NAME, exec) {
    var O = {};
    O[NAME] = exec(createHTML);

    _export(_export.P + _export.F * _fails(function () {
      var test = ''[NAME]('"');
      return test !== test.toLowerCase() || test.split('"').length > 3;
    }), 'String', O);
  }; // B.2.3.2 String.prototype.anchor(name)


  _stringHtml('anchor', function (createHTML) {
    return function anchor(name) {
      return createHTML(this, 'a', 'name', name);
    };
  }); // B.2.3.3 String.prototype.big()


  _stringHtml('big', function (createHTML) {
    return function big() {
      return createHTML(this, 'big', '', '');
    };
  }); // B.2.3.4 String.prototype.blink()


  _stringHtml('blink', function (createHTML) {
    return function blink() {
      return createHTML(this, 'blink', '', '');
    };
  }); // B.2.3.5 String.prototype.bold()


  _stringHtml('bold', function (createHTML) {
    return function bold() {
      return createHTML(this, 'b', '', '');
    };
  }); // B.2.3.6 String.prototype.fixed()


  _stringHtml('fixed', function (createHTML) {
    return function fixed() {
      return createHTML(this, 'tt', '', '');
    };
  }); // B.2.3.7 String.prototype.fontcolor(color)


  _stringHtml('fontcolor', function (createHTML) {
    return function fontcolor(color) {
      return createHTML(this, 'font', 'color', color);
    };
  }); // B.2.3.8 String.prototype.fontsize(size)


  _stringHtml('fontsize', function (createHTML) {
    return function fontsize(size) {
      return createHTML(this, 'font', 'size', size);
    };
  }); // B.2.3.9 String.prototype.italics()


  _stringHtml('italics', function (createHTML) {
    return function italics() {
      return createHTML(this, 'i', '', '');
    };
  }); // B.2.3.10 String.prototype.link(url)


  _stringHtml('link', function (createHTML) {
    return function link(url) {
      return createHTML(this, 'a', 'href', url);
    };
  }); // B.2.3.11 String.prototype.small()


  _stringHtml('small', function (createHTML) {
    return function small() {
      return createHTML(this, 'small', '', '');
    };
  }); // B.2.3.12 String.prototype.strike()


  _stringHtml('strike', function (createHTML) {
    return function strike() {
      return createHTML(this, 'strike', '', '');
    };
  }); // B.2.3.13 String.prototype.sub()


  _stringHtml('sub', function (createHTML) {
    return function sub() {
      return createHTML(this, 'sub', '', '');
    };
  }); // B.2.3.14 String.prototype.sup()


  _stringHtml('sup', function (createHTML) {
    return function sup() {
      return createHTML(this, 'sup', '', '');
    };
  }); // 20.3.3.1 / 15.9.4.4 Date.now()


  _export(_export.S, 'Date', {
    now: function now() {
      return new Date().getTime();
    }
  });

  _export(_export.P + _export.F * _fails(function () {
    return new Date(NaN).toJSON() !== null || Date.prototype.toJSON.call({
      toISOString: function toISOString() {
        return 1;
      }
    }) !== 1;
  }), 'Date', {
    // eslint-disable-next-line no-unused-vars
    toJSON: function toJSON(key) {
      var O = _toObject(this);

      var pv = _toPrimitive(O);

      return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
    }
  }); // 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()


  var getTime = Date.prototype.getTime;
  var $toISOString = Date.prototype.toISOString;

  var lz = function lz(num) {
    return num > 9 ? num : '0' + num;
  }; // PhantomJS / old WebKit has a broken implementations


  var _dateToIsoString = _fails(function () {
    return $toISOString.call(new Date(-5e13 - 1)) != '0385-07-25T07:06:39.999Z';
  }) || !_fails(function () {
    $toISOString.call(new Date(NaN));
  }) ? function toISOString() {
    if (!isFinite(getTime.call(this))) throw RangeError('Invalid time value');
    var d = this;
    var y = d.getUTCFullYear();
    var m = d.getUTCMilliseconds();
    var s = y < 0 ? '-' : y > 9999 ? '+' : '';
    return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) + '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) + 'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) + ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
  } : $toISOString; // 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
  // PhantomJS / old WebKit has a broken implementations


  _export(_export.P + _export.F * (Date.prototype.toISOString !== _dateToIsoString), 'Date', {
    toISOString: _dateToIsoString
  });

  var DateProto = Date.prototype;
  var INVALID_DATE = 'Invalid Date';
  var TO_STRING = 'toString';
  var $toString = DateProto[TO_STRING];
  var getTime$1 = DateProto.getTime;

  if (new Date(NaN) + '' != INVALID_DATE) {
    _redefine(DateProto, TO_STRING, function toString() {
      var value = getTime$1.call(this); // eslint-disable-next-line no-self-compare

      return value === value ? $toString.call(this) : INVALID_DATE;
    });
  }

  var NUMBER$1 = 'number';

  var _dateToPrimitive = function _dateToPrimitive(hint) {
    if (hint !== 'string' && hint !== NUMBER$1 && hint !== 'default') throw TypeError('Incorrect hint');
    return _toPrimitive(_anObject(this), hint != NUMBER$1);
  };

  var TO_PRIMITIVE$1 = _wks('toPrimitive');

  var proto$1 = Date.prototype;
  if (!(TO_PRIMITIVE$1 in proto$1)) _hide(proto$1, TO_PRIMITIVE$1, _dateToPrimitive); // 22.1.2.2 / 15.4.3.2 Array.isArray(arg)

  _export(_export.S, 'Array', {
    isArray: _isArray
  }); // call something on iterator step with safe closing on error


  var _iterCall = function _iterCall(iterator, fn, value, entries) {
    try {
      return entries ? fn(_anObject(value)[0], value[1]) : fn(value); // 7.4.6 IteratorClose(iterator, completion)
    } catch (e) {
      var ret = iterator['return'];
      if (ret !== undefined) _anObject(ret.call(iterator));
      throw e;
    }
  }; // check on default Array iterator


  var ITERATOR$1 = _wks('iterator');

  var ArrayProto = Array.prototype;

  var _isArrayIter = function _isArrayIter(it) {
    return it !== undefined && (_iterators.Array === it || ArrayProto[ITERATOR$1] === it);
  };

  var _createProperty = function _createProperty(object, index, value) {
    if (index in object) _objectDp.f(object, index, _propertyDesc(0, value));else object[index] = value;
  };

  var ITERATOR$2 = _wks('iterator');

  var core_getIteratorMethod = _core.getIteratorMethod = function (it) {
    if (it != undefined) return it[ITERATOR$2] || it['@@iterator'] || _iterators[_classof(it)];
  };

  var ITERATOR$3 = _wks('iterator');

  var SAFE_CLOSING = false;

  try {
    var riter = [7][ITERATOR$3]();

    riter['return'] = function () {
      SAFE_CLOSING = true;
    }; // eslint-disable-next-line no-throw-literal


    Array.from(riter, function () {
      throw 2;
    });
  } catch (e) {
    /* empty */
  }

  var _iterDetect = function _iterDetect(exec, skipClosing) {
    if (!skipClosing && !SAFE_CLOSING) return false;
    var safe = false;

    try {
      var arr = [7];
      var iter = arr[ITERATOR$3]();

      iter.next = function () {
        return {
          done: safe = true
        };
      };

      arr[ITERATOR$3] = function () {
        return iter;
      };

      exec(arr);
    } catch (e) {
      /* empty */
    }

    return safe;
  };

  _export(_export.S + _export.F * !_iterDetect(function (iter) {
    Array.from(iter);
  }), 'Array', {
    // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
    from: function from(arrayLike
    /* , mapfn = undefined, thisArg = undefined */
    ) {
      var O = _toObject(arrayLike);

      var C = typeof this == 'function' ? this : Array;
      var aLen = arguments.length;
      var mapfn = aLen > 1 ? arguments[1] : undefined;
      var mapping = mapfn !== undefined;
      var index = 0;
      var iterFn = core_getIteratorMethod(O);
      var length, result, step, iterator;
      if (mapping) mapfn = _ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2); // if object isn't iterable or it's array with default iterator - use simple case

      if (iterFn != undefined && !(C == Array && _isArrayIter(iterFn))) {
        for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
          _createProperty(result, index, mapping ? _iterCall(iterator, mapfn, [step.value, index], true) : step.value);
        }
      } else {
        length = _toLength(O.length);

        for (result = new C(length); length > index; index++) {
          _createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
        }
      }

      result.length = index;
      return result;
    }
  }); // WebKit Array.of isn't generic


  _export(_export.S + _export.F * _fails(function () {
    function F() {
      /* empty */
    }

    return !(Array.of.call(F) instanceof F);
  }), 'Array', {
    // 22.1.2.3 Array.of( ...items)
    of: function of()
    /* ...args */
    {
      var index = 0;
      var aLen = arguments.length;
      var result = new (typeof this == 'function' ? this : Array)(aLen);

      while (aLen > index) {
        _createProperty(result, index, arguments[index++]);
      }

      result.length = aLen;
      return result;
    }
  });

  var _strictMethod = function _strictMethod(method, arg) {
    return !!method && _fails(function () {
      // eslint-disable-next-line no-useless-call
      arg ? method.call(null, function () {
        /* empty */
      }, 1) : method.call(null);
    });
  }; // 22.1.3.13 Array.prototype.join(separator)


  var arrayJoin = [].join; // fallback for not array-like strings

  _export(_export.P + _export.F * (_iobject != Object || !_strictMethod(arrayJoin)), 'Array', {
    join: function join(separator) {
      return arrayJoin.call(_toIobject(this), separator === undefined ? ',' : separator);
    }
  });

  var arraySlice$1 = [].slice; // fallback for not array-like ES3 strings and DOM objects

  _export(_export.P + _export.F * _fails(function () {
    if (_html) arraySlice$1.call(_html);
  }), 'Array', {
    slice: function slice(begin, end) {
      var len = _toLength(this.length);

      var klass = _cof(this);

      end = end === undefined ? len : end;
      if (klass == 'Array') return arraySlice$1.call(this, begin, end);

      var start = _toAbsoluteIndex(begin, len);

      var upTo = _toAbsoluteIndex(end, len);

      var size = _toLength(upTo - start);

      var cloned = new Array(size);
      var i = 0;

      for (; i < size; i++) {
        cloned[i] = klass == 'String' ? this.charAt(start + i) : this[start + i];
      }

      return cloned;
    }
  });

  var $sort = [].sort;
  var test$1 = [1, 2, 3];

  _export(_export.P + _export.F * (_fails(function () {
    // IE8-
    test$1.sort(undefined);
  }) || !_fails(function () {
    // V8 bug
    test$1.sort(null); // Old WebKit
  }) || !_strictMethod($sort)), 'Array', {
    // 22.1.3.25 Array.prototype.sort(comparefn)
    sort: function sort(comparefn) {
      return comparefn === undefined ? $sort.call(_toObject(this)) : $sort.call(_toObject(this), _aFunction(comparefn));
    }
  });

  var SPECIES = _wks('species');

  var _arraySpeciesConstructor = function _arraySpeciesConstructor(original) {
    var C;

    if (_isArray(original)) {
      C = original.constructor; // cross-realm fallback

      if (typeof C == 'function' && (C === Array || _isArray(C.prototype))) C = undefined;

      if (_isObject(C)) {
        C = C[SPECIES];
        if (C === null) C = undefined;
      }
    }

    return C === undefined ? Array : C;
  }; // 9.4.2.3 ArraySpeciesCreate(originalArray, length)


  var _arraySpeciesCreate = function _arraySpeciesCreate(original, length) {
    return new (_arraySpeciesConstructor(original))(length);
  }; // 0 -> Array#forEach
  // 1 -> Array#map
  // 2 -> Array#filter
  // 3 -> Array#some
  // 4 -> Array#every
  // 5 -> Array#find
  // 6 -> Array#findIndex


  var _arrayMethods = function _arrayMethods(TYPE, $create) {
    var IS_MAP = TYPE == 1;
    var IS_FILTER = TYPE == 2;
    var IS_SOME = TYPE == 3;
    var IS_EVERY = TYPE == 4;
    var IS_FIND_INDEX = TYPE == 6;
    var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
    var create = $create || _arraySpeciesCreate;
    return function ($this, callbackfn, that) {
      var O = _toObject($this);

      var self = _iobject(O);

      var f = _ctx(callbackfn, that, 3);

      var length = _toLength(self.length);

      var index = 0;
      var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
      var val, res;

      for (; length > index; index++) {
        if (NO_HOLES || index in self) {
          val = self[index];
          res = f(val, index, O);

          if (TYPE) {
            if (IS_MAP) result[index] = res; // map
            else if (res) switch (TYPE) {
                case 3:
                  return true;
                // some

                case 5:
                  return val;
                // find

                case 6:
                  return index;
                // findIndex

                case 2:
                  result.push(val);
                // filter
              } else if (IS_EVERY) return false; // every
          }
        }
      }

      return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
    };
  };

  var $forEach = _arrayMethods(0);

  var STRICT = _strictMethod([].forEach, true);

  _export(_export.P + _export.F * !STRICT, 'Array', {
    // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
    forEach: function forEach(callbackfn
    /* , thisArg */
    ) {
      return $forEach(this, callbackfn, arguments[1]);
    }
  });

  var $map = _arrayMethods(1);

  _export(_export.P + _export.F * !_strictMethod([].map, true), 'Array', {
    // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
    map: function map(callbackfn
    /* , thisArg */
    ) {
      return $map(this, callbackfn, arguments[1]);
    }
  });

  var $filter = _arrayMethods(2);

  _export(_export.P + _export.F * !_strictMethod([].filter, true), 'Array', {
    // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
    filter: function filter(callbackfn
    /* , thisArg */
    ) {
      return $filter(this, callbackfn, arguments[1]);
    }
  });

  var $some = _arrayMethods(3);

  _export(_export.P + _export.F * !_strictMethod([].some, true), 'Array', {
    // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
    some: function some(callbackfn
    /* , thisArg */
    ) {
      return $some(this, callbackfn, arguments[1]);
    }
  });

  var $every = _arrayMethods(4);

  _export(_export.P + _export.F * !_strictMethod([].every, true), 'Array', {
    // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
    every: function every(callbackfn
    /* , thisArg */
    ) {
      return $every(this, callbackfn, arguments[1]);
    }
  });

  var _arrayReduce = function _arrayReduce(that, callbackfn, aLen, memo, isRight) {
    _aFunction(callbackfn);

    var O = _toObject(that);

    var self = _iobject(O);

    var length = _toLength(O.length);

    var index = isRight ? length - 1 : 0;
    var i = isRight ? -1 : 1;
    if (aLen < 2) for (;;) {
      if (index in self) {
        memo = self[index];
        index += i;
        break;
      }

      index += i;

      if (isRight ? index < 0 : length <= index) {
        throw TypeError('Reduce of empty array with no initial value');
      }
    }

    for (; isRight ? index >= 0 : length > index; index += i) {
      if (index in self) {
        memo = callbackfn(memo, self[index], index, O);
      }
    }

    return memo;
  };

  _export(_export.P + _export.F * !_strictMethod([].reduce, true), 'Array', {
    // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
    reduce: function reduce(callbackfn
    /* , initialValue */
    ) {
      return _arrayReduce(this, callbackfn, arguments.length, arguments[1], false);
    }
  });

  _export(_export.P + _export.F * !_strictMethod([].reduceRight, true), 'Array', {
    // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
    reduceRight: function reduceRight(callbackfn
    /* , initialValue */
    ) {
      return _arrayReduce(this, callbackfn, arguments.length, arguments[1], true);
    }
  });

  var $indexOf = _arrayIncludes(false);

  var $native = [].indexOf;
  var NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;

  _export(_export.P + _export.F * (NEGATIVE_ZERO || !_strictMethod($native)), 'Array', {
    // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
    indexOf: function indexOf(searchElement
    /* , fromIndex = 0 */
    ) {
      return NEGATIVE_ZERO // convert -0 to +0
      ? $native.apply(this, arguments) || 0 : $indexOf(this, searchElement, arguments[1]);
    }
  });

  var $native$1 = [].lastIndexOf;
  var NEGATIVE_ZERO$1 = !!$native$1 && 1 / [1].lastIndexOf(1, -0) < 0;

  _export(_export.P + _export.F * (NEGATIVE_ZERO$1 || !_strictMethod($native$1)), 'Array', {
    // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
    lastIndexOf: function lastIndexOf(searchElement
    /* , fromIndex = @[*-1] */
    ) {
      // convert -0 to +0
      if (NEGATIVE_ZERO$1) return $native$1.apply(this, arguments) || 0;

      var O = _toIobject(this);

      var length = _toLength(O.length);

      var index = length - 1;
      if (arguments.length > 1) index = Math.min(index, _toInteger(arguments[1]));
      if (index < 0) index = length + index;

      for (; index >= 0; index--) {
        if (index in O) if (O[index] === searchElement) return index || 0;
      }

      return -1;
    }
  });

  var _arrayCopyWithin = [].copyWithin || function copyWithin(target
  /* = 0 */
  , start
  /* = 0, end = @length */
  ) {
    var O = _toObject(this);

    var len = _toLength(O.length);

    var to = _toAbsoluteIndex(target, len);

    var from = _toAbsoluteIndex(start, len);

    var end = arguments.length > 2 ? arguments[2] : undefined;
    var count = Math.min((end === undefined ? len : _toAbsoluteIndex(end, len)) - from, len - to);
    var inc = 1;

    if (from < to && to < from + count) {
      inc = -1;
      from += count - 1;
      to += count - 1;
    }

    while (count-- > 0) {
      if (from in O) O[to] = O[from];else delete O[to];
      to += inc;
      from += inc;
    }

    return O;
  }; // 22.1.3.31 Array.prototype[@@unscopables]


  var UNSCOPABLES = _wks('unscopables');

  var ArrayProto$1 = Array.prototype;
  if (ArrayProto$1[UNSCOPABLES] == undefined) _hide(ArrayProto$1, UNSCOPABLES, {});

  var _addToUnscopables = function _addToUnscopables(key) {
    ArrayProto$1[UNSCOPABLES][key] = true;
  }; // 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)


  _export(_export.P, 'Array', {
    copyWithin: _arrayCopyWithin
  });

  _addToUnscopables('copyWithin');

  var _arrayFill = function fill(value
  /* , start = 0, end = @length */
  ) {
    var O = _toObject(this);

    var length = _toLength(O.length);

    var aLen = arguments.length;

    var index = _toAbsoluteIndex(aLen > 1 ? arguments[1] : undefined, length);

    var end = aLen > 2 ? arguments[2] : undefined;
    var endPos = end === undefined ? length : _toAbsoluteIndex(end, length);

    while (endPos > index) {
      O[index++] = value;
    }

    return O;
  }; // 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)


  _export(_export.P, 'Array', {
    fill: _arrayFill
  });

  _addToUnscopables('fill'); // 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)


  var $find = _arrayMethods(5);

  var KEY = 'find';
  var forced = true; // Shouldn't skip holes

  if (KEY in []) Array(1)[KEY](function () {
    forced = false;
  });

  _export(_export.P + _export.F * forced, 'Array', {
    find: function find(callbackfn
    /* , that = undefined */
    ) {
      return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  _addToUnscopables(KEY); // 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)


  var $find$1 = _arrayMethods(6);

  var KEY$1 = 'findIndex';
  var forced$1 = true; // Shouldn't skip holes

  if (KEY$1 in []) Array(1)[KEY$1](function () {
    forced$1 = false;
  });

  _export(_export.P + _export.F * forced$1, 'Array', {
    findIndex: function findIndex(callbackfn
    /* , that = undefined */
    ) {
      return $find$1(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  _addToUnscopables(KEY$1);

  var SPECIES$1 = _wks('species');

  var _setSpecies = function _setSpecies(KEY) {
    var C = _global[KEY];
    if (_descriptors && C && !C[SPECIES$1]) _objectDp.f(C, SPECIES$1, {
      configurable: true,
      get: function get() {
        return this;
      }
    });
  };

  _setSpecies('Array');

  var _iterStep = function _iterStep(done, value) {
    return {
      value: value,
      done: !!done
    };
  }; // 22.1.3.4 Array.prototype.entries()
  // 22.1.3.13 Array.prototype.keys()
  // 22.1.3.29 Array.prototype.values()
  // 22.1.3.30 Array.prototype[@@iterator]()


  var es6_array_iterator = _iterDefine(Array, 'Array', function (iterated, kind) {
    this._t = _toIobject(iterated); // target

    this._i = 0; // next index

    this._k = kind; // kind
    // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
  }, function () {
    var O = this._t;
    var kind = this._k;
    var index = this._i++;

    if (!O || index >= O.length) {
      this._t = undefined;
      return _iterStep(1);
    }

    if (kind == 'keys') return _iterStep(0, index);
    if (kind == 'values') return _iterStep(0, O[index]);
    return _iterStep(0, [index, O[index]]);
  }, 'values'); // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)


  _iterators.Arguments = _iterators.Array;

  _addToUnscopables('keys');

  _addToUnscopables('values');

  _addToUnscopables('entries'); // 21.2.5.3 get RegExp.prototype.flags


  var _flags = function _flags() {
    var that = _anObject(this);

    var result = '';
    if (that.global) result += 'g';
    if (that.ignoreCase) result += 'i';
    if (that.multiline) result += 'm';
    if (that.unicode) result += 'u';
    if (that.sticky) result += 'y';
    return result;
  };

  var dP$4 = _objectDp.f;
  var gOPN$3 = _objectGopn.f;
  var $RegExp = _global.RegExp;
  var Base$1 = $RegExp;
  var proto$2 = $RegExp.prototype;
  var re1 = /a/g;
  var re2 = /a/g; // "new" creates a new object, old webkit buggy here

  var CORRECT_NEW = new $RegExp(re1) !== re1;

  if (_descriptors && (!CORRECT_NEW || _fails(function () {
    re2[_wks('match')] = false; // RegExp constructor can alter flags and IsRegExp works correct with @@match

    return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
  }))) {
    $RegExp = function RegExp(p, f) {
      var tiRE = this instanceof $RegExp;

      var piRE = _isRegexp(p);

      var fiU = f === undefined;
      return !tiRE && piRE && p.constructor === $RegExp && fiU ? p : _inheritIfRequired(CORRECT_NEW ? new Base$1(piRE && !fiU ? p.source : p, f) : Base$1((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? _flags.call(p) : f), tiRE ? this : proto$2, $RegExp);
    };

    var proxy = function proxy(key) {
      key in $RegExp || dP$4($RegExp, key, {
        configurable: true,
        get: function get() {
          return Base$1[key];
        },
        set: function set(it) {
          Base$1[key] = it;
        }
      });
    };

    for (var keys$1 = gOPN$3(Base$1), i = 0; keys$1.length > i;) {
      proxy(keys$1[i++]);
    }

    proto$2.constructor = $RegExp;
    $RegExp.prototype = proto$2;

    _redefine(_global, 'RegExp', $RegExp);
  }

  _setSpecies('RegExp');

  var nativeExec = RegExp.prototype.exec; // This always refers to the native implementation, because the
  // String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
  // which loads this file before patching the method.

  var nativeReplace = String.prototype.replace;
  var patchedExec = nativeExec;
  var LAST_INDEX = 'lastIndex';

  var UPDATES_LAST_INDEX_WRONG = function () {
    var re1 = /a/,
        re2 = /b*/g;
    nativeExec.call(re1, 'a');
    nativeExec.call(re2, 'a');
    return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
  }(); // nonparticipating capturing group, copied from es5-shim's String#split patch.


  var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;
  var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

  if (PATCH) {
    patchedExec = function exec(str) {
      var re = this;
      var lastIndex, reCopy, match, i;

      if (NPCG_INCLUDED) {
        reCopy = new RegExp('^' + re.source + '$(?!\\s)', _flags.call(re));
      }

      if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];
      match = nativeExec.call(re, str);

      if (UPDATES_LAST_INDEX_WRONG && match) {
        re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
      }

      if (NPCG_INCLUDED && match && match.length > 1) {
        // Fix browsers whose `exec` methods don't consistently return `undefined`
        // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
        // eslint-disable-next-line no-loop-func
        nativeReplace.call(match[0], reCopy, function () {
          for (i = 1; i < arguments.length - 2; i++) {
            if (arguments[i] === undefined) match[i] = undefined;
          }
        });
      }

      return match;
    };
  }

  var _regexpExec = patchedExec;

  _export({
    target: 'RegExp',
    proto: true,
    forced: _regexpExec !== /./.exec
  }, {
    exec: _regexpExec
  }); // 21.2.5.3 get RegExp.prototype.flags()


  if (_descriptors && /./g.flags != 'g') _objectDp.f(RegExp.prototype, 'flags', {
    configurable: true,
    get: _flags
  });
  var TO_STRING$1 = 'toString';
  var $toString$1 = /./[TO_STRING$1];

  var define = function define(fn) {
    _redefine(RegExp.prototype, TO_STRING$1, fn, true);
  }; // 21.2.5.14 RegExp.prototype.toString()


  if (_fails(function () {
    return $toString$1.call({
      source: 'a',
      flags: 'b'
    }) != '/a/b';
  })) {
    define(function toString() {
      var R = _anObject(this);

      return '/'.concat(R.source, '/', 'flags' in R ? R.flags : !_descriptors && R instanceof RegExp ? _flags.call(R) : undefined);
    }); // FF44- RegExp#toString has a wrong name
  } else if ($toString$1.name != TO_STRING$1) {
    define(function toString() {
      return $toString$1.call(this);
    });
  }

  var at = _stringAt(true); // `AdvanceStringIndex` abstract operation
  // https://tc39.github.io/ecma262/#sec-advancestringindex


  var _advanceStringIndex = function _advanceStringIndex(S, index, unicode) {
    return index + (unicode ? at(S, index).length : 1);
  };

  var builtinExec = RegExp.prototype.exec; // `RegExpExec` abstract operation
  // https://tc39.github.io/ecma262/#sec-regexpexec

  var _regexpExecAbstract = function _regexpExecAbstract(R, S) {
    var exec = R.exec;

    if (typeof exec === 'function') {
      var result = exec.call(R, S);

      if (_typeof2(result) !== 'object') {
        throw new TypeError('RegExp exec method returned something other than an Object or null');
      }

      return result;
    }

    if (_classof(R) !== 'RegExp') {
      throw new TypeError('RegExp#exec called on incompatible receiver');
    }

    return builtinExec.call(R, S);
  };

  var SPECIES$2 = _wks('species');

  var REPLACE_SUPPORTS_NAMED_GROUPS = !_fails(function () {
    // #replace needs built-in support for named groups.
    // #match works fine because it just return the exec results, even if it has
    // a "grops" property.
    var re = /./;

    re.exec = function () {
      var result = [];
      result.groups = {
        a: '7'
      };
      return result;
    };

    return ''.replace(re, '$<a>') !== '7';
  });

  var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = function () {
    // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
    var re = /(?:)/;
    var originalExec = re.exec;

    re.exec = function () {
      return originalExec.apply(this, arguments);
    };

    var result = 'ab'.split(re);
    return result.length === 2 && result[0] === 'a' && result[1] === 'b';
  }();

  var _fixReWks = function _fixReWks(KEY, length, exec) {
    var SYMBOL = _wks(KEY);

    var DELEGATES_TO_SYMBOL = !_fails(function () {
      // String methods call symbol-named RegEp methods
      var O = {};

      O[SYMBOL] = function () {
        return 7;
      };

      return ''[KEY](O) != 7;
    });
    var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !_fails(function () {
      // Symbol-named RegExp methods call .exec
      var execCalled = false;
      var re = /a/;

      re.exec = function () {
        execCalled = true;
        return null;
      };

      if (KEY === 'split') {
        // RegExp[@@split] doesn't call the regex's exec method, but first creates
        // a new one. We need to return the patched regex when creating the new one.
        re.constructor = {};

        re.constructor[SPECIES$2] = function () {
          return re;
        };
      }

      re[SYMBOL]('');
      return !execCalled;
    }) : undefined;

    if (!DELEGATES_TO_SYMBOL || !DELEGATES_TO_EXEC || KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS || KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC) {
      var nativeRegExpMethod = /./[SYMBOL];
      var fns = exec(_defined, SYMBOL, ''[KEY], function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
        if (regexp.exec === _regexpExec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return {
              done: true,
              value: nativeRegExpMethod.call(regexp, str, arg2)
            };
          }

          return {
            done: true,
            value: nativeMethod.call(str, regexp, arg2)
          };
        }

        return {
          done: false
        };
      });
      var strfn = fns[0];
      var rxfn = fns[1];

      _redefine(String.prototype, KEY, strfn);

      _hide(RegExp.prototype, SYMBOL, length == 2 // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) {
        return rxfn.call(string, this, arg);
      } // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) {
        return rxfn.call(string, this);
      });
    }
  }; // @@match logic


  _fixReWks('match', 1, function (defined, MATCH, $match, maybeCallNative) {
    return [// `String.prototype.match` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = defined(this);
      var fn = regexp == undefined ? undefined : regexp[MATCH];
      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
    }, // `RegExp.prototype[@@match]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
    function (regexp) {
      var res = maybeCallNative($match, regexp, this);
      if (res.done) return res.value;

      var rx = _anObject(regexp);

      var S = String(this);
      if (!rx.global) return _regexpExecAbstract(rx, S);
      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;

      while ((result = _regexpExecAbstract(rx, S)) !== null) {
        var matchStr = String(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = _advanceStringIndex(S, _toLength(rx.lastIndex), fullUnicode);
        n++;
      }

      return n === 0 ? null : A;
    }];
  });

  var max$1 = Math.max;
  var min$2 = Math.min;
  var floor$3 = Math.floor;
  var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
  var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

  var maybeToString = function maybeToString(it) {
    return it === undefined ? it : String(it);
  }; // @@replace logic


  _fixReWks('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
    return [// `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = defined(this);
      var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
      return fn !== undefined ? fn.call(searchValue, O, replaceValue) : $replace.call(String(O), searchValue, replaceValue);
    }, // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      var res = maybeCallNative($replace, regexp, this, replaceValue);
      if (res.done) return res.value;

      var rx = _anObject(regexp);

      var S = String(this);
      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);
      var global = rx.global;

      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }

      var results = [];

      while (true) {
        var result = _regexpExecAbstract(rx, S);

        if (result === null) break;
        results.push(result);
        if (!global) break;
        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = _advanceStringIndex(S, _toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;

      for (var i = 0; i < results.length; i++) {
        result = results[i];
        var matched = String(result[0]);
        var position = max$1(min$2(_toInteger(result.index), S.length), 0);
        var captures = []; // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.

        for (var j = 1; j < result.length; j++) {
          captures.push(maybeToString(result[j]));
        }

        var namedCaptures = result.groups;

        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }

        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }

      return accumulatedResult + S.slice(nextSourcePosition);
    }]; // https://tc39.github.io/ecma262/#sec-getsubstitution

    function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
      var tailPos = position + matched.length;
      var m = captures.length;
      var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;

      if (namedCaptures !== undefined) {
        namedCaptures = _toObject(namedCaptures);
        symbols = SUBSTITUTION_SYMBOLS;
      }

      return $replace.call(replacement, symbols, function (match, ch) {
        var capture;

        switch (ch.charAt(0)) {
          case '$':
            return '$';

          case '&':
            return matched;

          case '`':
            return str.slice(0, position);

          case "'":
            return str.slice(tailPos);

          case '<':
            capture = namedCaptures[ch.slice(1, -1)];
            break;

          default:
            // \d\d?
            var n = +ch;
            if (n === 0) return match;

            if (n > m) {
              var f = floor$3(n / 10);
              if (f === 0) return match;
              if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
              return match;
            }

            capture = captures[n - 1];
        }

        return capture === undefined ? '' : capture;
      });
    }
  }); // @@search logic


  _fixReWks('search', 1, function (defined, SEARCH, $search, maybeCallNative) {
    return [// `String.prototype.search` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.search
    function search(regexp) {
      var O = defined(this);
      var fn = regexp == undefined ? undefined : regexp[SEARCH];
      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
    }, // `RegExp.prototype[@@search]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@search
    function (regexp) {
      var res = maybeCallNative($search, regexp, this);
      if (res.done) return res.value;

      var rx = _anObject(regexp);

      var S = String(this);
      var previousLastIndex = rx.lastIndex;
      if (!_sameValue(previousLastIndex, 0)) rx.lastIndex = 0;

      var result = _regexpExecAbstract(rx, S);

      if (!_sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
      return result === null ? -1 : result.index;
    }];
  }); // 7.3.20 SpeciesConstructor(O, defaultConstructor)


  var SPECIES$3 = _wks('species');

  var _speciesConstructor = function _speciesConstructor(O, D) {
    var C = _anObject(O).constructor;

    var S;
    return C === undefined || (S = _anObject(C)[SPECIES$3]) == undefined ? D : _aFunction(S);
  };

  var $min = Math.min;
  var $push = [].push;
  var $SPLIT = 'split';
  var LENGTH = 'length';
  var LAST_INDEX$1 = 'lastIndex';
  var MAX_UINT32 = 0xffffffff; // babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError

  var SUPPORTS_Y = !_fails(function () {
    RegExp(MAX_UINT32, 'y');
  }); // @@split logic

  _fixReWks('split', 2, function (defined, SPLIT, $split, maybeCallNative) {
    var internalSplit;

    if ('abbc'[$SPLIT](/(b)*/)[1] == 'c' || 'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 || 'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 || '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 || '.'[$SPLIT](/()()/)[LENGTH] > 1 || ''[$SPLIT](/.?/)[LENGTH]) {
      // based on es5-shim implementation, need to rework it
      internalSplit = function internalSplit(separator, limit) {
        var string = String(this);
        if (separator === undefined && limit === 0) return []; // If `separator` is not a regex, use native split

        if (!_isRegexp(separator)) return $split.call(string, separator, limit);
        var output = [];
        var flags = (separator.ignoreCase ? 'i' : '') + (separator.multiline ? 'm' : '') + (separator.unicode ? 'u' : '') + (separator.sticky ? 'y' : '');
        var lastLastIndex = 0;
        var splitLimit = limit === undefined ? MAX_UINT32 : limit >>> 0; // Make `global` and avoid `lastIndex` issues by working with a copy

        var separatorCopy = new RegExp(separator.source, flags + 'g');
        var match, lastIndex, lastLength;

        while (match = _regexpExec.call(separatorCopy, string)) {
          lastIndex = separatorCopy[LAST_INDEX$1];

          if (lastIndex > lastLastIndex) {
            output.push(string.slice(lastLastIndex, match.index));
            if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
            lastLength = match[0][LENGTH];
            lastLastIndex = lastIndex;
            if (output[LENGTH] >= splitLimit) break;
          }

          if (separatorCopy[LAST_INDEX$1] === match.index) separatorCopy[LAST_INDEX$1]++; // Avoid an infinite loop
        }

        if (lastLastIndex === string[LENGTH]) {
          if (lastLength || !separatorCopy.test('')) output.push('');
        } else output.push(string.slice(lastLastIndex));

        return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
      }; // Chakra, V8

    } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
      internalSplit = function internalSplit(separator, limit) {
        return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);
      };
    } else {
      internalSplit = $split;
    }

    return [// `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = defined(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined ? splitter.call(separator, O, limit) : internalSplit.call(String(O), separator, limit);
    }, // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);
      if (res.done) return res.value;

      var rx = _anObject(regexp);

      var S = String(this);

      var C = _speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') + (rx.multiline ? 'm' : '') + (rx.unicode ? 'u' : '') + (SUPPORTS_Y ? 'y' : 'g'); // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.

      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return _regexpExecAbstract(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];

      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;

        var z = _regexpExecAbstract(splitter, SUPPORTS_Y ? S : S.slice(q));

        var e;

        if (z === null || (e = $min(_toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p) {
          q = _advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;

          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }

          q = p = e;
        }
      }

      A.push(S.slice(p));
      return A;
    }];
  });

  var _anInstance = function _anInstance(it, Constructor, name, forbiddenField) {
    if (!(it instanceof Constructor) || forbiddenField !== undefined && forbiddenField in it) {
      throw TypeError(name + ': incorrect invocation!');
    }

    return it;
  };

  var _forOf = createCommonjsModule(function (module) {
    var BREAK = {};
    var RETURN = {};

    var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
      var iterFn = ITERATOR ? function () {
        return iterable;
      } : core_getIteratorMethod(iterable);

      var f = _ctx(fn, that, entries ? 2 : 1);

      var index = 0;
      var length, step, iterator, result;
      if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!'); // fast case for arrays with default iterator

      if (_isArrayIter(iterFn)) for (length = _toLength(iterable.length); length > index; index++) {
        result = entries ? f(_anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
        if (result === BREAK || result === RETURN) return result;
      } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
        result = _iterCall(iterator, f, step.value, entries);
        if (result === BREAK || result === RETURN) return result;
      }
    };

    exports.BREAK = BREAK;
    exports.RETURN = RETURN;
  });

  var process = _global.process;
  var setTask = _global.setImmediate;
  var clearTask = _global.clearImmediate;
  var MessageChannel = _global.MessageChannel;
  var Dispatch = _global.Dispatch;
  var counter = 0;
  var queue = {};
  var ONREADYSTATECHANGE = 'onreadystatechange';
  var defer, channel, port;

  var run = function run() {
    var id = +this; // eslint-disable-next-line no-prototype-builtins

    if (queue.hasOwnProperty(id)) {
      var fn = queue[id];
      delete queue[id];
      fn();
    }
  };

  var listener = function listener(event) {
    run.call(event.data);
  }; // Node.js 0.9+ & IE10+ has setImmediate, otherwise:


  if (!setTask || !clearTask) {
    setTask = function setImmediate(fn) {
      var args = [];
      var i = 1;

      while (arguments.length > i) {
        args.push(arguments[i++]);
      }

      queue[++counter] = function () {
        // eslint-disable-next-line no-new-func
        _invoke(typeof fn == 'function' ? fn : Function(fn), args);
      };

      defer(counter);
      return counter;
    };

    clearTask = function clearImmediate(id) {
      delete queue[id];
    }; // Node.js 0.8-


    if (_cof(process) == 'process') {
      defer = function defer(id) {
        process.nextTick(_ctx(run, id, 1));
      }; // Sphere (JS game engine) Dispatch API

    } else if (Dispatch && Dispatch.now) {
      defer = function defer(id) {
        Dispatch.now(_ctx(run, id, 1));
      }; // Browsers with MessageChannel, includes WebWorkers

    } else if (MessageChannel) {
      channel = new MessageChannel();
      port = channel.port2;
      channel.port1.onmessage = listener;
      defer = _ctx(port.postMessage, port, 1); // Browsers with postMessage, skip WebWorkers
      // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
    } else if (_global.addEventListener && typeof postMessage == 'function' && !_global.importScripts) {
      defer = function defer(id) {
        _global.postMessage(id + '', '*');
      };

      _global.addEventListener('message', listener, false); // IE8-

    } else if (ONREADYSTATECHANGE in _domCreate('script')) {
      defer = function defer(id) {
        _html.appendChild(_domCreate('script'))[ONREADYSTATECHANGE] = function () {
          _html.removeChild(this);

          run.call(id);
        };
      }; // Rest old browsers

    } else {
      defer = function defer(id) {
        setTimeout(_ctx(run, id, 1), 0);
      };
    }
  }

  var _task = {
    set: setTask,
    clear: clearTask
  };
  var macrotask = _task.set;
  var Observer = _global.MutationObserver || _global.WebKitMutationObserver;
  var process$1 = _global.process;
  var Promise$1 = _global.Promise;
  var isNode = _cof(process$1) == 'process';

  var _microtask = function _microtask() {
    var head, last, notify;

    var flush = function flush() {
      var parent, fn;
      if (isNode && (parent = process$1.domain)) parent.exit();

      while (head) {
        fn = head.fn;
        head = head.next;

        try {
          fn();
        } catch (e) {
          if (head) notify();else last = undefined;
          throw e;
        }
      }

      last = undefined;
      if (parent) parent.enter();
    }; // Node.js


    if (isNode) {
      notify = function notify() {
        process$1.nextTick(flush);
      }; // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339

    } else if (Observer && !(_global.navigator && _global.navigator.standalone)) {
      var toggle = true;
      var node = document.createTextNode('');
      new Observer(flush).observe(node, {
        characterData: true
      }); // eslint-disable-line no-new

      notify = function notify() {
        node.data = toggle = !toggle;
      }; // environments with maybe non-completely correct, but existent Promise

    } else if (Promise$1 && Promise$1.resolve) {
      // Promise.resolve without an argument throws an error in LG WebOS 2
      var promise = Promise$1.resolve(undefined);

      notify = function notify() {
        promise.then(flush);
      }; // for other environments - macrotask based on:
      // - setImmediate
      // - MessageChannel
      // - window.postMessag
      // - onreadystatechange
      // - setTimeout

    } else {
      notify = function notify() {
        // strange IE + webpack dev server bug - use .call(global)
        macrotask.call(_global, flush);
      };
    }

    return function (fn) {
      var task = {
        fn: fn,
        next: undefined
      };
      if (last) last.next = task;

      if (!head) {
        head = task;
        notify();
      }

      last = task;
    };
  }; // 25.4.1.5 NewPromiseCapability(C)


  function PromiseCapability(C) {
    var resolve, reject;
    this.promise = new C(function ($$resolve, $$reject) {
      if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
      resolve = $$resolve;
      reject = $$reject;
    });
    this.resolve = _aFunction(resolve);
    this.reject = _aFunction(reject);
  }

  var f$7 = function f$7(C) {
    return new PromiseCapability(C);
  };

  var _newPromiseCapability = {
    f: f$7
  };

  var _perform = function _perform(exec) {
    try {
      return {
        e: false,
        v: exec()
      };
    } catch (e) {
      return {
        e: true,
        v: e
      };
    }
  };

  var navigator = _global.navigator;

  var _userAgent = navigator && navigator.userAgent || '';

  var _promiseResolve = function _promiseResolve(C, x) {
    _anObject(C);

    if (_isObject(x) && x.constructor === C) return x;

    var promiseCapability = _newPromiseCapability.f(C);

    var resolve = promiseCapability.resolve;
    resolve(x);
    return promiseCapability.promise;
  };

  var _redefineAll = function _redefineAll(target, src, safe) {
    for (var key in src) {
      _redefine(target, key, src[key], safe);
    }

    return target;
  };

  var task = _task.set;

  var microtask = _microtask();

  var PROMISE = 'Promise';
  var TypeError$1 = _global.TypeError;
  var process$2 = _global.process;
  var versions = process$2 && process$2.versions;
  var v8 = versions && versions.v8 || '';
  var $Promise = _global[PROMISE];
  var isNode$1 = _classof(process$2) == 'process';

  var empty = function empty() {
    /* empty */
  };

  var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
  var newPromiseCapability = newGenericPromiseCapability = _newPromiseCapability.f;
  var USE_NATIVE$1 = !!function () {
    try {
      // correct subclassing with @@species support
      var promise = $Promise.resolve(1);

      var FakePromise = (promise.constructor = {})[_wks('species')] = function (exec) {
        exec(empty, empty);
      }; // unhandled rejections tracking support, NodeJS Promise without it fails @@species test


      return (isNode$1 || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0 && _userAgent.indexOf('Chrome/66') === -1;
    } catch (e) {
      /* empty */
    }
  }(); // helpers

  var isThenable = function isThenable(it) {
    var then;
    return _isObject(it) && typeof (then = it.then) == 'function' ? then : false;
  };

  var notify = function notify(promise, isReject) {
    if (promise._n) return;
    promise._n = true;
    var chain = promise._c;
    microtask(function () {
      var value = promise._v;
      var ok = promise._s == 1;
      var i = 0;

      var run = function run(reaction) {
        var handler = ok ? reaction.ok : reaction.fail;
        var resolve = reaction.resolve;
        var reject = reaction.reject;
        var domain = reaction.domain;
        var result, then, exited;

        try {
          if (handler) {
            if (!ok) {
              if (promise._h == 2) onHandleUnhandled(promise);
              promise._h = 1;
            }

            if (handler === true) result = value;else {
              if (domain) domain.enter();
              result = handler(value); // may throw

              if (domain) {
                domain.exit();
                exited = true;
              }
            }

            if (result === reaction.promise) {
              reject(TypeError$1('Promise-chain cycle'));
            } else if (then = isThenable(result)) {
              then.call(result, resolve, reject);
            } else resolve(result);
          } else reject(value);
        } catch (e) {
          if (domain && !exited) domain.exit();
          reject(e);
        }
      };

      while (chain.length > i) {
        run(chain[i++]);
      } // variable length - can't use forEach


      promise._c = [];
      promise._n = false;
      if (isReject && !promise._h) onUnhandled(promise);
    });
  };

  var onUnhandled = function onUnhandled(promise) {
    task.call(_global, function () {
      var value = promise._v;
      var unhandled = isUnhandled(promise);
      var result, handler, console;

      if (unhandled) {
        result = _perform(function () {
          if (isNode$1) {
            process$2.emit('unhandledRejection', value, promise);
          } else if (handler = _global.onunhandledrejection) {
            handler({
              promise: promise,
              reason: value
            });
          } else if ((console = _global.console) && console.error) {
            console.error('Unhandled promise rejection', value);
          }
        }); // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should

        promise._h = isNode$1 || isUnhandled(promise) ? 2 : 1;
      }

      promise._a = undefined;
      if (unhandled && result.e) throw result.v;
    });
  };

  var isUnhandled = function isUnhandled(promise) {
    return promise._h !== 1 && (promise._a || promise._c).length === 0;
  };

  var onHandleUnhandled = function onHandleUnhandled(promise) {
    task.call(_global, function () {
      var handler;

      if (isNode$1) {
        process$2.emit('rejectionHandled', promise);
      } else if (handler = _global.onrejectionhandled) {
        handler({
          promise: promise,
          reason: promise._v
        });
      }
    });
  };

  var $reject = function $reject(value) {
    var promise = this;
    if (promise._d) return;
    promise._d = true;
    promise = promise._w || promise; // unwrap

    promise._v = value;
    promise._s = 2;
    if (!promise._a) promise._a = promise._c.slice();
    notify(promise, true);
  };

  var $resolve = function $resolve(value) {
    var promise = this;
    var then;
    if (promise._d) return;
    promise._d = true;
    promise = promise._w || promise; // unwrap

    try {
      if (promise === value) throw TypeError$1("Promise can't be resolved itself");

      if (then = isThenable(value)) {
        microtask(function () {
          var wrapper = {
            _w: promise,
            _d: false
          }; // wrap

          try {
            then.call(value, _ctx($resolve, wrapper, 1), _ctx($reject, wrapper, 1));
          } catch (e) {
            $reject.call(wrapper, e);
          }
        });
      } else {
        promise._v = value;
        promise._s = 1;
        notify(promise, false);
      }
    } catch (e) {
      $reject.call({
        _w: promise,
        _d: false
      }, e); // wrap
    }
  }; // constructor polyfill


  if (!USE_NATIVE$1) {
    // 25.4.3.1 Promise(executor)
    $Promise = function Promise(executor) {
      _anInstance(this, $Promise, PROMISE, '_h');

      _aFunction(executor);

      Internal.call(this);

      try {
        executor(_ctx($resolve, this, 1), _ctx($reject, this, 1));
      } catch (err) {
        $reject.call(this, err);
      }
    }; // eslint-disable-next-line no-unused-vars


    Internal = function Promise(executor) {
      this._c = []; // <- awaiting reactions

      this._a = undefined; // <- checked in isUnhandled reactions

      this._s = 0; // <- state

      this._d = false; // <- done

      this._v = undefined; // <- value

      this._h = 0; // <- rejection state, 0 - default, 1 - handled, 2 - unhandled

      this._n = false; // <- notify
    };

    Internal.prototype = _redefineAll($Promise.prototype, {
      // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
      then: function then(onFulfilled, onRejected) {
        var reaction = newPromiseCapability(_speciesConstructor(this, $Promise));
        reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
        reaction.fail = typeof onRejected == 'function' && onRejected;
        reaction.domain = isNode$1 ? process$2.domain : undefined;

        this._c.push(reaction);

        if (this._a) this._a.push(reaction);
        if (this._s) notify(this, false);
        return reaction.promise;
      },
      // 25.4.5.1 Promise.prototype.catch(onRejected)
      'catch': function _catch(onRejected) {
        return this.then(undefined, onRejected);
      }
    });

    OwnPromiseCapability = function OwnPromiseCapability() {
      var promise = new Internal();
      this.promise = promise;
      this.resolve = _ctx($resolve, promise, 1);
      this.reject = _ctx($reject, promise, 1);
    };

    _newPromiseCapability.f = newPromiseCapability = function newPromiseCapability(C) {
      return C === $Promise || C === Wrapper ? new OwnPromiseCapability(C) : newGenericPromiseCapability(C);
    };
  }

  _export(_export.G + _export.W + _export.F * !USE_NATIVE$1, {
    Promise: $Promise
  });

  _setToStringTag($Promise, PROMISE);

  _setSpecies(PROMISE);

  Wrapper = _core[PROMISE]; // statics

  _export(_export.S + _export.F * !USE_NATIVE$1, PROMISE, {
    // 25.4.4.5 Promise.reject(r)
    reject: function reject(r) {
      var capability = newPromiseCapability(this);
      var $$reject = capability.reject;
      $$reject(r);
      return capability.promise;
    }
  });

  _export(_export.S + _export.F * !USE_NATIVE$1, PROMISE, {
    // 25.4.4.6 Promise.resolve(x)
    resolve: function resolve(x) {
      return _promiseResolve(this, x);
    }
  });

  _export(_export.S + _export.F * !(USE_NATIVE$1 && _iterDetect(function (iter) {
    $Promise.all(iter)['catch'](empty);
  })), PROMISE, {
    // 25.4.4.1 Promise.all(iterable)
    all: function all(iterable) {
      var C = this;
      var capability = newPromiseCapability(C);
      var resolve = capability.resolve;
      var reject = capability.reject;

      var result = _perform(function () {
        var values = [];
        var index = 0;
        var remaining = 1;

        _forOf(iterable, false, function (promise) {
          var $index = index++;
          var alreadyCalled = false;
          values.push(undefined);
          remaining++;
          C.resolve(promise).then(function (value) {
            if (alreadyCalled) return;
            alreadyCalled = true;
            values[$index] = value;
            --remaining || resolve(values);
          }, reject);
        });

        --remaining || resolve(values);
      });

      if (result.e) reject(result.v);
      return capability.promise;
    },
    // 25.4.4.4 Promise.race(iterable)
    race: function race(iterable) {
      var C = this;
      var capability = newPromiseCapability(C);
      var reject = capability.reject;

      var result = _perform(function () {
        _forOf(iterable, false, function (promise) {
          C.resolve(promise).then(capability.resolve, reject);
        });
      });

      if (result.e) reject(result.v);
      return capability.promise;
    }
  });

  var _validateCollection = function _validateCollection(it, TYPE) {
    if (!_isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
    return it;
  };

  var dP$5 = _objectDp.f;
  var fastKey = _meta.fastKey;
  var SIZE = _descriptors ? '_s' : 'size';

  var getEntry = function getEntry(that, key) {
    // fast case
    var index = fastKey(key);
    var entry;
    if (index !== 'F') return that._i[index]; // frozen object case

    for (entry = that._f; entry; entry = entry.n) {
      if (entry.k == key) return entry;
    }
  };

  var _collectionStrong = {
    getConstructor: function getConstructor(wrapper, NAME, IS_MAP, ADDER) {
      var C = wrapper(function (that, iterable) {
        _anInstance(that, C, NAME, '_i');

        that._t = NAME; // collection type

        that._i = _objectCreate(null); // index

        that._f = undefined; // first entry

        that._l = undefined; // last entry

        that[SIZE] = 0; // size

        if (iterable != undefined) _forOf(iterable, IS_MAP, that[ADDER], that);
      });

      _redefineAll(C.prototype, {
        // 23.1.3.1 Map.prototype.clear()
        // 23.2.3.2 Set.prototype.clear()
        clear: function clear() {
          for (var that = _validateCollection(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
            entry.r = true;
            if (entry.p) entry.p = entry.p.n = undefined;
            delete data[entry.i];
          }

          that._f = that._l = undefined;
          that[SIZE] = 0;
        },
        // 23.1.3.3 Map.prototype.delete(key)
        // 23.2.3.4 Set.prototype.delete(value)
        'delete': function _delete(key) {
          var that = _validateCollection(this, NAME);

          var entry = getEntry(that, key);

          if (entry) {
            var next = entry.n;
            var prev = entry.p;
            delete that._i[entry.i];
            entry.r = true;
            if (prev) prev.n = next;
            if (next) next.p = prev;
            if (that._f == entry) that._f = next;
            if (that._l == entry) that._l = prev;
            that[SIZE]--;
          }

          return !!entry;
        },
        // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
        // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
        forEach: function forEach(callbackfn
        /* , that = undefined */
        ) {
          _validateCollection(this, NAME);

          var f = _ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);

          var entry;

          while (entry = entry ? entry.n : this._f) {
            f(entry.v, entry.k, this); // revert to the last existing entry

            while (entry && entry.r) {
              entry = entry.p;
            }
          }
        },
        // 23.1.3.7 Map.prototype.has(key)
        // 23.2.3.7 Set.prototype.has(value)
        has: function has(key) {
          return !!getEntry(_validateCollection(this, NAME), key);
        }
      });

      if (_descriptors) dP$5(C.prototype, 'size', {
        get: function get() {
          return _validateCollection(this, NAME)[SIZE];
        }
      });
      return C;
    },
    def: function def(that, key, value) {
      var entry = getEntry(that, key);
      var prev, index; // change existing entry

      if (entry) {
        entry.v = value; // create new entry
      } else {
        that._l = entry = {
          i: index = fastKey(key, true),
          // <- index
          k: key,
          // <- key
          v: value,
          // <- value
          p: prev = that._l,
          // <- previous entry
          n: undefined,
          // <- next entry
          r: false // <- removed

        };
        if (!that._f) that._f = entry;
        if (prev) prev.n = entry;
        that[SIZE]++; // add to index

        if (index !== 'F') that._i[index] = entry;
      }

      return that;
    },
    getEntry: getEntry,
    setStrong: function setStrong(C, NAME, IS_MAP) {
      // add .keys, .values, .entries, [@@iterator]
      // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
      _iterDefine(C, NAME, function (iterated, kind) {
        this._t = _validateCollection(iterated, NAME); // target

        this._k = kind; // kind

        this._l = undefined; // previous
      }, function () {
        var that = this;
        var kind = that._k;
        var entry = that._l; // revert to the last existing entry

        while (entry && entry.r) {
          entry = entry.p;
        } // get next entry


        if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
          // or finish the iteration
          that._t = undefined;
          return _iterStep(1);
        } // return step by kind


        if (kind == 'keys') return _iterStep(0, entry.k);
        if (kind == 'values') return _iterStep(0, entry.v);
        return _iterStep(0, [entry.k, entry.v]);
      }, IS_MAP ? 'entries' : 'values', !IS_MAP, true); // add [@@species], 23.1.2.2, 23.2.2.2


      _setSpecies(NAME);
    }
  };

  var _collection = function _collection(NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
    var Base = _global[NAME];
    var C = Base;
    var ADDER = IS_MAP ? 'set' : 'add';
    var proto = C && C.prototype;
    var O = {};

    var fixMethod = function fixMethod(KEY) {
      var fn = proto[KEY];

      _redefine(proto, KEY, KEY == 'delete' ? function (a) {
        return IS_WEAK && !_isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'has' ? function has(a) {
        return IS_WEAK && !_isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'get' ? function get(a) {
        return IS_WEAK && !_isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'add' ? function add(a) {
        fn.call(this, a === 0 ? 0 : a);
        return this;
      } : function set(a, b) {
        fn.call(this, a === 0 ? 0 : a, b);
        return this;
      });
    };

    if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !_fails(function () {
      new C().entries().next();
    }))) {
      // create collection constructor
      C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);

      _redefineAll(C.prototype, methods);

      _meta.NEED = true;
    } else {
      var instance = new C(); // early implementations not supports chaining

      var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance; // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false

      var THROWS_ON_PRIMITIVES = _fails(function () {
        instance.has(1);
      }); // most early implementations doesn't supports iterables, most modern - not close it correctly


      var ACCEPT_ITERABLES = _iterDetect(function (iter) {
        new C(iter);
      }); // eslint-disable-line no-new
      // for early implementations -0 and +0 not the same


      var BUGGY_ZERO = !IS_WEAK && _fails(function () {
        // V8 ~ Chromium 42- fails only with 5+ elements
        var $instance = new C();
        var index = 5;

        while (index--) {
          $instance[ADDER](index, index);
        }

        return !$instance.has(-0);
      });

      if (!ACCEPT_ITERABLES) {
        C = wrapper(function (target, iterable) {
          _anInstance(target, C, NAME);

          var that = _inheritIfRequired(new Base(), target, C);

          if (iterable != undefined) _forOf(iterable, IS_MAP, that[ADDER], that);
          return that;
        });
        C.prototype = proto;
        proto.constructor = C;
      }

      if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
        fixMethod('delete');
        fixMethod('has');
        IS_MAP && fixMethod('get');
      }

      if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER); // weak collections should not contains .clear method

      if (IS_WEAK && proto.clear) delete proto.clear;
    }

    _setToStringTag(C, NAME);

    O[NAME] = C;

    _export(_export.G + _export.W + _export.F * (C != Base), O);

    if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);
    return C;
  };

  var MAP = 'Map'; // 23.1 Map Objects

  var es6_map = _collection(MAP, function (get) {
    return function Map() {
      return get(this, arguments.length > 0 ? arguments[0] : undefined);
    };
  }, {
    // 23.1.3.6 Map.prototype.get(key)
    get: function get(key) {
      var entry = _collectionStrong.getEntry(_validateCollection(this, MAP), key);

      return entry && entry.v;
    },
    // 23.1.3.9 Map.prototype.set(key, value)
    set: function set(key, value) {
      return _collectionStrong.def(_validateCollection(this, MAP), key === 0 ? 0 : key, value);
    }
  }, _collectionStrong, true);

  var SET = 'Set'; // 23.2 Set Objects

  var es6_set = _collection(SET, function (get) {
    return function Set() {
      return get(this, arguments.length > 0 ? arguments[0] : undefined);
    };
  }, {
    // 23.2.3.1 Set.prototype.add(value)
    add: function add(value) {
      return _collectionStrong.def(_validateCollection(this, SET), value = value === 0 ? 0 : value, value);
    }
  }, _collectionStrong);

  var getWeak = _meta.getWeak;

  var arrayFind = _arrayMethods(5);

  var arrayFindIndex = _arrayMethods(6);

  var id$1 = 0; // fallback for uncaught frozen keys

  var uncaughtFrozenStore = function uncaughtFrozenStore(that) {
    return that._l || (that._l = new UncaughtFrozenStore());
  };

  var UncaughtFrozenStore = function UncaughtFrozenStore() {
    this.a = [];
  };

  var findUncaughtFrozen = function findUncaughtFrozen(store, key) {
    return arrayFind(store.a, function (it) {
      return it[0] === key;
    });
  };

  UncaughtFrozenStore.prototype = {
    get: function get(key) {
      var entry = findUncaughtFrozen(this, key);
      if (entry) return entry[1];
    },
    has: function has(key) {
      return !!findUncaughtFrozen(this, key);
    },
    set: function set(key, value) {
      var entry = findUncaughtFrozen(this, key);
      if (entry) entry[1] = value;else this.a.push([key, value]);
    },
    'delete': function _delete(key) {
      var index = arrayFindIndex(this.a, function (it) {
        return it[0] === key;
      });
      if (~index) this.a.splice(index, 1);
      return !!~index;
    }
  };
  var _collectionWeak = {
    getConstructor: function getConstructor(wrapper, NAME, IS_MAP, ADDER) {
      var C = wrapper(function (that, iterable) {
        _anInstance(that, C, NAME, '_i');

        that._t = NAME; // collection type

        that._i = id$1++; // collection id

        that._l = undefined; // leak store for uncaught frozen objects

        if (iterable != undefined) _forOf(iterable, IS_MAP, that[ADDER], that);
      });

      _redefineAll(C.prototype, {
        // 23.3.3.2 WeakMap.prototype.delete(key)
        // 23.4.3.3 WeakSet.prototype.delete(value)
        'delete': function _delete(key) {
          if (!_isObject(key)) return false;
          var data = getWeak(key);
          if (data === true) return uncaughtFrozenStore(_validateCollection(this, NAME))['delete'](key);
          return data && _has(data, this._i) && delete data[this._i];
        },
        // 23.3.3.4 WeakMap.prototype.has(key)
        // 23.4.3.4 WeakSet.prototype.has(value)
        has: function has(key) {
          if (!_isObject(key)) return false;
          var data = getWeak(key);
          if (data === true) return uncaughtFrozenStore(_validateCollection(this, NAME)).has(key);
          return data && _has(data, this._i);
        }
      });

      return C;
    },
    def: function def(that, key, value) {
      var data = getWeak(_anObject(key), true);
      if (data === true) uncaughtFrozenStore(that).set(key, value);else data[that._i] = value;
      return that;
    },
    ufstore: uncaughtFrozenStore
  };
  var es6_weakMap = createCommonjsModule(function (module) {
    var each = _arrayMethods(0);

    var NATIVE_WEAK_MAP = _validateCollection;
    var IS_IE11 = !_global.ActiveXObject && 'ActiveXObject' in _global;
    var WEAK_MAP = 'WeakMap';
    var getWeak = _meta.getWeak;
    var isExtensible = Object.isExtensible;
    var uncaughtFrozenStore = _collectionWeak.ufstore;
    var InternalMap;

    var wrapper = function wrapper(get) {
      return function WeakMap() {
        return get(this, arguments.length > 0 ? arguments[0] : undefined);
      };
    };

    var methods = {
      // 23.3.3.3 WeakMap.prototype.get(key)
      get: function get(key) {
        if (_isObject(key)) {
          var data = getWeak(key);
          if (data === true) return uncaughtFrozenStore(_validateCollection(this, WEAK_MAP)).get(key);
          return data ? data[this._i] : undefined;
        }
      },
      // 23.3.3.5 WeakMap.prototype.set(key, value)
      set: function set(key, value) {
        return _collectionWeak.def(_validateCollection(this, WEAK_MAP), key, value);
      }
    }; // 23.3 WeakMap Objects

    var $WeakMap = module.exports = _collection(WEAK_MAP, wrapper, methods, _collectionWeak, true, true); // IE11 WeakMap frozen keys fix


    if (NATIVE_WEAK_MAP && IS_IE11) {
      InternalMap = _collectionWeak.getConstructor(wrapper, WEAK_MAP);

      _objectAssign(InternalMap.prototype, methods);

      _meta.NEED = true;
      each(['delete', 'has', 'get', 'set'], function (key) {
        var proto = $WeakMap.prototype;
        var method = proto[key];

        _redefine(proto, key, function (a, b) {
          // store frozen objects on internal weakmap shim
          if (_isObject(a) && !isExtensible(a)) {
            if (!this._f) this._f = new InternalMap();

            var result = this._f[key](a, b);

            return key == 'set' ? this : result; // store all the rest on native weakmap
          }

          return method.call(this, a, b);
        });
      });
    }
  });
  var WEAK_SET = 'WeakSet'; // 23.4 WeakSet Objects

  _collection(WEAK_SET, function (get) {
    return function WeakSet() {
      return get(this, arguments.length > 0 ? arguments[0] : undefined);
    };
  }, {
    // 23.4.3.1 WeakSet.prototype.add(value)
    add: function add(value) {
      return _collectionWeak.def(_validateCollection(this, WEAK_SET), value, true);
    }
  }, _collectionWeak, false, true);

  var TYPED = _uid('typed_array');

  var VIEW = _uid('view');

  var ABV = !!(_global.ArrayBuffer && _global.DataView);
  var CONSTR = ABV;
  var i$1 = 0;
  var l = 9;
  var Typed;
  var TypedArrayConstructors = 'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'.split(',');

  while (i$1 < l) {
    if (Typed = _global[TypedArrayConstructors[i$1++]]) {
      _hide(Typed.prototype, TYPED, true);

      _hide(Typed.prototype, VIEW, true);
    } else CONSTR = false;
  }

  var _typed = {
    ABV: ABV,
    CONSTR: CONSTR,
    TYPED: TYPED,
    VIEW: VIEW
  }; // https://tc39.github.io/ecma262/#sec-toindex

  var _toIndex = function _toIndex(it) {
    if (it === undefined) return 0;

    var number = _toInteger(it);

    var length = _toLength(number);

    if (number !== length) throw RangeError('Wrong length!');
    return length;
  };

  var _typedBuffer = createCommonjsModule(function (module, exports) {
    var gOPN = _objectGopn.f;
    var dP = _objectDp.f;
    var ARRAY_BUFFER = 'ArrayBuffer';
    var DATA_VIEW = 'DataView';
    var PROTOTYPE = 'prototype';
    var WRONG_LENGTH = 'Wrong length!';
    var WRONG_INDEX = 'Wrong index!';
    var $ArrayBuffer = _global[ARRAY_BUFFER];
    var $DataView = _global[DATA_VIEW];
    var Math = _global.Math;
    var RangeError = _global.RangeError; // eslint-disable-next-line no-shadow-restricted-names

    var Infinity = _global.Infinity;
    var BaseBuffer = $ArrayBuffer;
    var abs = Math.abs;
    var pow = Math.pow;
    var floor = Math.floor;
    var log = Math.log;
    var LN2 = Math.LN2;
    var BUFFER = 'buffer';
    var BYTE_LENGTH = 'byteLength';
    var BYTE_OFFSET = 'byteOffset';
    var $BUFFER = _descriptors ? '_b' : BUFFER;
    var $LENGTH = _descriptors ? '_l' : BYTE_LENGTH;
    var $OFFSET = _descriptors ? '_o' : BYTE_OFFSET; // IEEE754 conversions based on https://github.com/feross/ieee754

    function packIEEE754(value, mLen, nBytes) {
      var buffer = new Array(nBytes);
      var eLen = nBytes * 8 - mLen - 1;
      var eMax = (1 << eLen) - 1;
      var eBias = eMax >> 1;
      var rt = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0;
      var i = 0;
      var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
      var e, m, c;
      value = abs(value); // eslint-disable-next-line no-self-compare

      if (value != value || value === Infinity) {
        // eslint-disable-next-line no-self-compare
        m = value != value ? 1 : 0;
        e = eMax;
      } else {
        e = floor(log(value) / LN2);

        if (value * (c = pow(2, -e)) < 1) {
          e--;
          c *= 2;
        }

        if (e + eBias >= 1) {
          value += rt / c;
        } else {
          value += rt * pow(2, 1 - eBias);
        }

        if (value * c >= 2) {
          e++;
          c /= 2;
        }

        if (e + eBias >= eMax) {
          m = 0;
          e = eMax;
        } else if (e + eBias >= 1) {
          m = (value * c - 1) * pow(2, mLen);
          e = e + eBias;
        } else {
          m = value * pow(2, eBias - 1) * pow(2, mLen);
          e = 0;
        }
      }

      for (; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8) {
        ;
      }

      e = e << mLen | m;
      eLen += mLen;

      for (; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8) {
        ;
      }

      buffer[--i] |= s * 128;
      return buffer;
    }

    function unpackIEEE754(buffer, mLen, nBytes) {
      var eLen = nBytes * 8 - mLen - 1;
      var eMax = (1 << eLen) - 1;
      var eBias = eMax >> 1;
      var nBits = eLen - 7;
      var i = nBytes - 1;
      var s = buffer[i--];
      var e = s & 127;
      var m;
      s >>= 7;

      for (; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8) {
        ;
      }

      m = e & (1 << -nBits) - 1;
      e >>= -nBits;
      nBits += mLen;

      for (; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8) {
        ;
      }

      if (e === 0) {
        e = 1 - eBias;
      } else if (e === eMax) {
        return m ? NaN : s ? -Infinity : Infinity;
      } else {
        m = m + pow(2, mLen);
        e = e - eBias;
      }

      return (s ? -1 : 1) * m * pow(2, e - mLen);
    }

    function unpackI32(bytes) {
      return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
    }

    function packI8(it) {
      return [it & 0xff];
    }

    function packI16(it) {
      return [it & 0xff, it >> 8 & 0xff];
    }

    function packI32(it) {
      return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
    }

    function packF64(it) {
      return packIEEE754(it, 52, 8);
    }

    function packF32(it) {
      return packIEEE754(it, 23, 4);
    }

    function addGetter(C, key, internal) {
      dP(C[PROTOTYPE], key, {
        get: function get() {
          return this[internal];
        }
      });
    }

    function get(view, bytes, index, isLittleEndian) {
      var numIndex = +index;

      var intIndex = _toIndex(numIndex);

      if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
      var store = view[$BUFFER]._b;
      var start = intIndex + view[$OFFSET];
      var pack = store.slice(start, start + bytes);
      return isLittleEndian ? pack : pack.reverse();
    }

    function set(view, bytes, index, conversion, value, isLittleEndian) {
      var numIndex = +index;

      var intIndex = _toIndex(numIndex);

      if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
      var store = view[$BUFFER]._b;
      var start = intIndex + view[$OFFSET];
      var pack = conversion(+value);

      for (var i = 0; i < bytes; i++) {
        store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
      }
    }

    if (!_typed.ABV) {
      $ArrayBuffer = function ArrayBuffer(length) {
        _anInstance(this, $ArrayBuffer, ARRAY_BUFFER);

        var byteLength = _toIndex(length);

        this._b = _arrayFill.call(new Array(byteLength), 0);
        this[$LENGTH] = byteLength;
      };

      $DataView = function DataView(buffer, byteOffset, byteLength) {
        _anInstance(this, $DataView, DATA_VIEW);

        _anInstance(buffer, $ArrayBuffer, DATA_VIEW);

        var bufferLength = buffer[$LENGTH];

        var offset = _toInteger(byteOffset);

        if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset!');
        byteLength = byteLength === undefined ? bufferLength - offset : _toLength(byteLength);
        if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);
        this[$BUFFER] = buffer;
        this[$OFFSET] = offset;
        this[$LENGTH] = byteLength;
      };

      if (_descriptors) {
        addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
        addGetter($DataView, BUFFER, '_b');
        addGetter($DataView, BYTE_LENGTH, '_l');
        addGetter($DataView, BYTE_OFFSET, '_o');
      }

      _redefineAll($DataView[PROTOTYPE], {
        getInt8: function getInt8(byteOffset) {
          return get(this, 1, byteOffset)[0] << 24 >> 24;
        },
        getUint8: function getUint8(byteOffset) {
          return get(this, 1, byteOffset)[0];
        },
        getInt16: function getInt16(byteOffset
        /* , littleEndian */
        ) {
          var bytes = get(this, 2, byteOffset, arguments[1]);
          return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
        },
        getUint16: function getUint16(byteOffset
        /* , littleEndian */
        ) {
          var bytes = get(this, 2, byteOffset, arguments[1]);
          return bytes[1] << 8 | bytes[0];
        },
        getInt32: function getInt32(byteOffset
        /* , littleEndian */
        ) {
          return unpackI32(get(this, 4, byteOffset, arguments[1]));
        },
        getUint32: function getUint32(byteOffset
        /* , littleEndian */
        ) {
          return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
        },
        getFloat32: function getFloat32(byteOffset
        /* , littleEndian */
        ) {
          return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
        },
        getFloat64: function getFloat64(byteOffset
        /* , littleEndian */
        ) {
          return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
        },
        setInt8: function setInt8(byteOffset, value) {
          set(this, 1, byteOffset, packI8, value);
        },
        setUint8: function setUint8(byteOffset, value) {
          set(this, 1, byteOffset, packI8, value);
        },
        setInt16: function setInt16(byteOffset, value
        /* , littleEndian */
        ) {
          set(this, 2, byteOffset, packI16, value, arguments[2]);
        },
        setUint16: function setUint16(byteOffset, value
        /* , littleEndian */
        ) {
          set(this, 2, byteOffset, packI16, value, arguments[2]);
        },
        setInt32: function setInt32(byteOffset, value
        /* , littleEndian */
        ) {
          set(this, 4, byteOffset, packI32, value, arguments[2]);
        },
        setUint32: function setUint32(byteOffset, value
        /* , littleEndian */
        ) {
          set(this, 4, byteOffset, packI32, value, arguments[2]);
        },
        setFloat32: function setFloat32(byteOffset, value
        /* , littleEndian */
        ) {
          set(this, 4, byteOffset, packF32, value, arguments[2]);
        },
        setFloat64: function setFloat64(byteOffset, value
        /* , littleEndian */
        ) {
          set(this, 8, byteOffset, packF64, value, arguments[2]);
        }
      });
    } else {
      if (!_fails(function () {
        $ArrayBuffer(1);
      }) || !_fails(function () {
        new $ArrayBuffer(-1); // eslint-disable-line no-new
      }) || _fails(function () {
        new $ArrayBuffer(); // eslint-disable-line no-new

        new $ArrayBuffer(1.5); // eslint-disable-line no-new

        new $ArrayBuffer(NaN); // eslint-disable-line no-new

        return $ArrayBuffer.name != ARRAY_BUFFER;
      })) {
        $ArrayBuffer = function ArrayBuffer(length) {
          _anInstance(this, $ArrayBuffer);

          return new BaseBuffer(_toIndex(length));
        };

        var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];

        for (var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j;) {
          if (!((key = keys[j++]) in $ArrayBuffer)) _hide($ArrayBuffer, key, BaseBuffer[key]);
        }

        ArrayBufferProto.constructor = $ArrayBuffer;
      } // iOS Safari 7.x bug


      var view = new $DataView(new $ArrayBuffer(2));
      var $setInt8 = $DataView[PROTOTYPE].setInt8;
      view.setInt8(0, 2147483648);
      view.setInt8(1, 2147483649);
      if (view.getInt8(0) || !view.getInt8(1)) _redefineAll($DataView[PROTOTYPE], {
        setInt8: function setInt8(byteOffset, value) {
          $setInt8.call(this, byteOffset, value << 24 >> 24);
        },
        setUint8: function setUint8(byteOffset, value) {
          $setInt8.call(this, byteOffset, value << 24 >> 24);
        }
      }, true);
    }

    _setToStringTag($ArrayBuffer, ARRAY_BUFFER);

    _setToStringTag($DataView, DATA_VIEW);

    _hide($DataView[PROTOTYPE], _typed.VIEW, true);

    exports[ARRAY_BUFFER] = $ArrayBuffer;
    exports[DATA_VIEW] = $DataView;
  });

  var ArrayBuffer = _global.ArrayBuffer;
  var $ArrayBuffer = _typedBuffer.ArrayBuffer;
  var $DataView = _typedBuffer.DataView;
  var $isView = _typed.ABV && ArrayBuffer.isView;
  var $slice = $ArrayBuffer.prototype.slice;
  var VIEW$1 = _typed.VIEW;
  var ARRAY_BUFFER = 'ArrayBuffer';

  _export(_export.G + _export.W + _export.F * (ArrayBuffer !== $ArrayBuffer), {
    ArrayBuffer: $ArrayBuffer
  });

  _export(_export.S + _export.F * !_typed.CONSTR, ARRAY_BUFFER, {
    // 24.1.3.1 ArrayBuffer.isView(arg)
    isView: function isView(it) {
      return $isView && $isView(it) || _isObject(it) && VIEW$1 in it;
    }
  });

  _export(_export.P + _export.U + _export.F * _fails(function () {
    return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
  }), ARRAY_BUFFER, {
    // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
    slice: function slice(start, end) {
      if ($slice !== undefined && end === undefined) return $slice.call(_anObject(this), start); // FF fix

      var len = _anObject(this).byteLength;

      var first = _toAbsoluteIndex(start, len);

      var fin = _toAbsoluteIndex(end === undefined ? len : end, len);

      var result = new (_speciesConstructor(this, $ArrayBuffer))(_toLength(fin - first));
      var viewS = new $DataView(this);
      var viewT = new $DataView(result);
      var index = 0;

      while (first < fin) {
        viewT.setUint8(index++, viewS.getUint8(first++));
      }

      return result;
    }
  });

  _setSpecies(ARRAY_BUFFER);

  _export(_export.G + _export.W + _export.F * !_typed.ABV, {
    DataView: _typedBuffer.DataView
  });

  var _typedArray = createCommonjsModule(function (module) {
    if (_descriptors) {
      var LIBRARY = _library;
      var global = _global;
      var fails = _fails;
      var $export = _export;
      var $typed = _typed;
      var $buffer = _typedBuffer;
      var ctx = _ctx;
      var anInstance = _anInstance;
      var propertyDesc = _propertyDesc;
      var hide = _hide;
      var redefineAll = _redefineAll;
      var toInteger = _toInteger;
      var toLength = _toLength;
      var toIndex = _toIndex;
      var toAbsoluteIndex = _toAbsoluteIndex;
      var toPrimitive = _toPrimitive;
      var has = _has;
      var classof = _classof;
      var isObject = _isObject;
      var toObject = _toObject;
      var isArrayIter = _isArrayIter;
      var create = _objectCreate;
      var getPrototypeOf = _objectGpo;
      var gOPN = _objectGopn.f;
      var getIterFn = core_getIteratorMethod;
      var uid = _uid;
      var wks = _wks;
      var createArrayMethod = _arrayMethods;
      var createArrayIncludes = _arrayIncludes;
      var speciesConstructor = _speciesConstructor;
      var ArrayIterators = es6_array_iterator;
      var Iterators = _iterators;
      var $iterDetect = _iterDetect;
      var setSpecies = _setSpecies;
      var arrayFill = _arrayFill;
      var arrayCopyWithin = _arrayCopyWithin;
      var $DP = _objectDp;
      var $GOPD = _objectGopd;
      var dP = $DP.f;
      var gOPD = $GOPD.f;
      var RangeError = global.RangeError;
      var TypeError = global.TypeError;
      var Uint8Array = global.Uint8Array;
      var ARRAY_BUFFER = 'ArrayBuffer';
      var SHARED_BUFFER = 'Shared' + ARRAY_BUFFER;
      var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
      var PROTOTYPE = 'prototype';
      var ArrayProto = Array[PROTOTYPE];
      var $ArrayBuffer = $buffer.ArrayBuffer;
      var $DataView = $buffer.DataView;
      var arrayForEach = createArrayMethod(0);
      var arrayFilter = createArrayMethod(2);
      var arraySome = createArrayMethod(3);
      var arrayEvery = createArrayMethod(4);
      var arrayFind = createArrayMethod(5);
      var arrayFindIndex = createArrayMethod(6);
      var arrayIncludes = createArrayIncludes(true);
      var arrayIndexOf = createArrayIncludes(false);
      var arrayValues = ArrayIterators.values;
      var arrayKeys = ArrayIterators.keys;
      var arrayEntries = ArrayIterators.entries;
      var arrayLastIndexOf = ArrayProto.lastIndexOf;
      var arrayReduce = ArrayProto.reduce;
      var arrayReduceRight = ArrayProto.reduceRight;
      var arrayJoin = ArrayProto.join;
      var arraySort = ArrayProto.sort;
      var arraySlice = ArrayProto.slice;
      var arrayToString = ArrayProto.toString;
      var arrayToLocaleString = ArrayProto.toLocaleString;
      var ITERATOR = wks('iterator');
      var TAG = wks('toStringTag');
      var TYPED_CONSTRUCTOR = uid('typed_constructor');
      var DEF_CONSTRUCTOR = uid('def_constructor');
      var ALL_CONSTRUCTORS = $typed.CONSTR;
      var TYPED_ARRAY = $typed.TYPED;
      var VIEW = $typed.VIEW;
      var WRONG_LENGTH = 'Wrong length!';
      var $map = createArrayMethod(1, function (O, length) {
        return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
      });
      var LITTLE_ENDIAN = fails(function () {
        // eslint-disable-next-line no-undef
        return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
      });
      var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function () {
        new Uint8Array(1).set({});
      });

      var toOffset = function toOffset(it, BYTES) {
        var offset = toInteger(it);
        if (offset < 0 || offset % BYTES) throw RangeError('Wrong offset!');
        return offset;
      };

      var validate = function validate(it) {
        if (isObject(it) && TYPED_ARRAY in it) return it;
        throw TypeError(it + ' is not a typed array!');
      };

      var allocate = function allocate(C, length) {
        if (!(isObject(C) && TYPED_CONSTRUCTOR in C)) {
          throw TypeError('It is not a typed array constructor!');
        }

        return new C(length);
      };

      var speciesFromList = function speciesFromList(O, list) {
        return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
      };

      var fromList = function fromList(C, list) {
        var index = 0;
        var length = list.length;
        var result = allocate(C, length);

        while (length > index) {
          result[index] = list[index++];
        }

        return result;
      };

      var addGetter = function addGetter(it, key, internal) {
        dP(it, key, {
          get: function get() {
            return this._d[internal];
          }
        });
      };

      var $from = function from(source
      /* , mapfn, thisArg */
      ) {
        var O = toObject(source);
        var aLen = arguments.length;
        var mapfn = aLen > 1 ? arguments[1] : undefined;
        var mapping = mapfn !== undefined;
        var iterFn = getIterFn(O);
        var i, length, values, result, step, iterator;

        if (iterFn != undefined && !isArrayIter(iterFn)) {
          for (iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++) {
            values.push(step.value);
          }

          O = values;
        }

        if (mapping && aLen > 2) mapfn = ctx(mapfn, arguments[2], 2);

        for (i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++) {
          result[i] = mapping ? mapfn(O[i], i) : O[i];
        }

        return result;
      };

      var $of = function of()
      /* ...items */
      {
        var index = 0;
        var length = arguments.length;
        var result = allocate(this, length);

        while (length > index) {
          result[index] = arguments[index++];
        }

        return result;
      }; // iOS Safari 6.x fails here


      var TO_LOCALE_BUG = !!Uint8Array && fails(function () {
        arrayToLocaleString.call(new Uint8Array(1));
      });

      var $toLocaleString = function toLocaleString() {
        return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
      };

      var proto = {
        copyWithin: function copyWithin(target, start
        /* , end */
        ) {
          return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
        },
        every: function every(callbackfn
        /* , thisArg */
        ) {
          return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
        },
        fill: function fill(value
        /* , start, end */
        ) {
          // eslint-disable-line no-unused-vars
          return arrayFill.apply(validate(this), arguments);
        },
        filter: function filter(callbackfn
        /* , thisArg */
        ) {
          return speciesFromList(this, arrayFilter(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined));
        },
        find: function find(predicate
        /* , thisArg */
        ) {
          return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
        },
        findIndex: function findIndex(predicate
        /* , thisArg */
        ) {
          return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
        },
        forEach: function forEach(callbackfn
        /* , thisArg */
        ) {
          arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
        },
        indexOf: function indexOf(searchElement
        /* , fromIndex */
        ) {
          return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
        },
        includes: function includes(searchElement
        /* , fromIndex */
        ) {
          return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
        },
        join: function join(separator) {
          // eslint-disable-line no-unused-vars
          return arrayJoin.apply(validate(this), arguments);
        },
        lastIndexOf: function lastIndexOf(searchElement
        /* , fromIndex */
        ) {
          // eslint-disable-line no-unused-vars
          return arrayLastIndexOf.apply(validate(this), arguments);
        },
        map: function map(mapfn
        /* , thisArg */
        ) {
          return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
        },
        reduce: function reduce(callbackfn
        /* , initialValue */
        ) {
          // eslint-disable-line no-unused-vars
          return arrayReduce.apply(validate(this), arguments);
        },
        reduceRight: function reduceRight(callbackfn
        /* , initialValue */
        ) {
          // eslint-disable-line no-unused-vars
          return arrayReduceRight.apply(validate(this), arguments);
        },
        reverse: function reverse() {
          var that = this;
          var length = validate(that).length;
          var middle = Math.floor(length / 2);
          var index = 0;
          var value;

          while (index < middle) {
            value = that[index];
            that[index++] = that[--length];
            that[length] = value;
          }

          return that;
        },
        some: function some(callbackfn
        /* , thisArg */
        ) {
          return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
        },
        sort: function sort(comparefn) {
          return arraySort.call(validate(this), comparefn);
        },
        subarray: function subarray(begin, end) {
          var O = validate(this);
          var length = O.length;
          var $begin = toAbsoluteIndex(begin, length);
          return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(O.buffer, O.byteOffset + $begin * O.BYTES_PER_ELEMENT, toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - $begin));
        }
      };

      var $slice = function slice(start, end) {
        return speciesFromList(this, arraySlice.call(validate(this), start, end));
      };

      var $set = function set(arrayLike
      /* , offset */
      ) {
        validate(this);
        var offset = toOffset(arguments[1], 1);
        var length = this.length;
        var src = toObject(arrayLike);
        var len = toLength(src.length);
        var index = 0;
        if (len + offset > length) throw RangeError(WRONG_LENGTH);

        while (index < len) {
          this[offset + index] = src[index++];
        }
      };

      var $iterators = {
        entries: function entries() {
          return arrayEntries.call(validate(this));
        },
        keys: function keys() {
          return arrayKeys.call(validate(this));
        },
        values: function values() {
          return arrayValues.call(validate(this));
        }
      };

      var isTAIndex = function isTAIndex(target, key) {
        return isObject(target) && target[TYPED_ARRAY] && _typeof2(key) != 'symbol' && key in target && String(+key) == String(key);
      };

      var $getDesc = function getOwnPropertyDescriptor(target, key) {
        return isTAIndex(target, key = toPrimitive(key, true)) ? propertyDesc(2, target[key]) : gOPD(target, key);
      };

      var $setDesc = function defineProperty(target, key, desc) {
        if (isTAIndex(target, key = toPrimitive(key, true)) && isObject(desc) && has(desc, 'value') && !has(desc, 'get') && !has(desc, 'set') // TODO: add validation descriptor w/o calling accessors
        && !desc.configurable && (!has(desc, 'writable') || desc.writable) && (!has(desc, 'enumerable') || desc.enumerable)) {
          target[key] = desc.value;
          return target;
        }

        return dP(target, key, desc);
      };

      if (!ALL_CONSTRUCTORS) {
        $GOPD.f = $getDesc;
        $DP.f = $setDesc;
      }

      $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
        getOwnPropertyDescriptor: $getDesc,
        defineProperty: $setDesc
      });

      if (fails(function () {
        arrayToString.call({});
      })) {
        arrayToString = arrayToLocaleString = function toString() {
          return arrayJoin.call(this);
        };
      }

      var $TypedArrayPrototype$ = redefineAll({}, proto);
      redefineAll($TypedArrayPrototype$, $iterators);
      hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
      redefineAll($TypedArrayPrototype$, {
        slice: $slice,
        set: $set,
        constructor: function constructor() {
          /* noop */
        },
        toString: arrayToString,
        toLocaleString: $toLocaleString
      });
      addGetter($TypedArrayPrototype$, 'buffer', 'b');
      addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
      addGetter($TypedArrayPrototype$, 'byteLength', 'l');
      addGetter($TypedArrayPrototype$, 'length', 'e');
      dP($TypedArrayPrototype$, TAG, {
        get: function get() {
          return this[TYPED_ARRAY];
        }
      }); // eslint-disable-next-line max-statements

      module.exports = function (KEY, BYTES, wrapper, CLAMPED) {
        CLAMPED = !!CLAMPED;
        var NAME = KEY + (CLAMPED ? 'Clamped' : '') + 'Array';
        var GETTER = 'get' + KEY;
        var SETTER = 'set' + KEY;
        var TypedArray = global[NAME];
        var Base = TypedArray || {};
        var TAC = TypedArray && getPrototypeOf(TypedArray);
        var FORCED = !TypedArray || !$typed.ABV;
        var O = {};
        var TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];

        var getter = function getter(that, index) {
          var data = that._d;
          return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
        };

        var setter = function setter(that, index, value) {
          var data = that._d;
          if (CLAMPED) value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
          data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
        };

        var addElement = function addElement(that, index) {
          dP(that, index, {
            get: function get() {
              return getter(this, index);
            },
            set: function set(value) {
              return setter(this, index, value);
            },
            enumerable: true
          });
        };

        if (FORCED) {
          TypedArray = wrapper(function (that, data, $offset, $length) {
            anInstance(that, TypedArray, NAME, '_d');
            var index = 0;
            var offset = 0;
            var buffer, byteLength, length, klass;

            if (!isObject(data)) {
              length = toIndex(data);
              byteLength = length * BYTES;
              buffer = new $ArrayBuffer(byteLength);
            } else if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
              buffer = data;
              offset = toOffset($offset, BYTES);
              var $len = data.byteLength;

              if ($length === undefined) {
                if ($len % BYTES) throw RangeError(WRONG_LENGTH);
                byteLength = $len - offset;
                if (byteLength < 0) throw RangeError(WRONG_LENGTH);
              } else {
                byteLength = toLength($length) * BYTES;
                if (byteLength + offset > $len) throw RangeError(WRONG_LENGTH);
              }

              length = byteLength / BYTES;
            } else if (TYPED_ARRAY in data) {
              return fromList(TypedArray, data);
            } else {
              return $from.call(TypedArray, data);
            }

            hide(that, '_d', {
              b: buffer,
              o: offset,
              l: byteLength,
              e: length,
              v: new $DataView(buffer)
            });

            while (index < length) {
              addElement(that, index++);
            }
          });
          TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
          hide(TypedArrayPrototype, 'constructor', TypedArray);
        } else if (!fails(function () {
          TypedArray(1);
        }) || !fails(function () {
          new TypedArray(-1); // eslint-disable-line no-new
        }) || !$iterDetect(function (iter) {
          new TypedArray(); // eslint-disable-line no-new

          new TypedArray(null); // eslint-disable-line no-new

          new TypedArray(1.5); // eslint-disable-line no-new

          new TypedArray(iter); // eslint-disable-line no-new
        }, true)) {
          TypedArray = wrapper(function (that, data, $offset, $length) {
            anInstance(that, TypedArray, NAME);
            var klass; // `ws` module bug, temporarily remove validation length for Uint8Array
            // https://github.com/websockets/ws/pull/645

            if (!isObject(data)) return new Base(toIndex(data));

            if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
              return $length !== undefined ? new Base(data, toOffset($offset, BYTES), $length) : $offset !== undefined ? new Base(data, toOffset($offset, BYTES)) : new Base(data);
            }

            if (TYPED_ARRAY in data) return fromList(TypedArray, data);
            return $from.call(TypedArray, data);
          });
          arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function (key) {
            if (!(key in TypedArray)) hide(TypedArray, key, Base[key]);
          });
          TypedArray[PROTOTYPE] = TypedArrayPrototype;
          if (!LIBRARY) TypedArrayPrototype.constructor = TypedArray;
        }

        var $nativeIterator = TypedArrayPrototype[ITERATOR];
        var CORRECT_ITER_NAME = !!$nativeIterator && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined);
        var $iterator = $iterators.values;
        hide(TypedArray, TYPED_CONSTRUCTOR, true);
        hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
        hide(TypedArrayPrototype, VIEW, true);
        hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);

        if (CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)) {
          dP(TypedArrayPrototype, TAG, {
            get: function get() {
              return NAME;
            }
          });
        }

        O[NAME] = TypedArray;
        $export($export.G + $export.W + $export.F * (TypedArray != Base), O);
        $export($export.S, NAME, {
          BYTES_PER_ELEMENT: BYTES
        });
        $export($export.S + $export.F * fails(function () {
          Base.of.call(TypedArray, 1);
        }), NAME, {
          from: $from,
          of: $of
        });
        if (!(BYTES_PER_ELEMENT in TypedArrayPrototype)) hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);
        $export($export.P, NAME, proto);
        setSpecies(NAME);
        $export($export.P + $export.F * FORCED_SET, NAME, {
          set: $set
        });
        $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);
        if (!LIBRARY && TypedArrayPrototype.toString != arrayToString) TypedArrayPrototype.toString = arrayToString;
        $export($export.P + $export.F * fails(function () {
          new TypedArray(1).slice();
        }), NAME, {
          slice: $slice
        });
        $export($export.P + $export.F * (fails(function () {
          return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString();
        }) || !fails(function () {
          TypedArrayPrototype.toLocaleString.call([1, 2]);
        })), NAME, {
          toLocaleString: $toLocaleString
        });
        Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
        if (!LIBRARY && !CORRECT_ITER_NAME) hide(TypedArrayPrototype, ITERATOR, $iterator);
      };
    } else module.exports = function () {
      /* empty */
    };
  });

  _typedArray('Int8', 1, function (init) {
    return function Int8Array(data, byteOffset, length) {
      return init(this, data, byteOffset, length);
    };
  });

  _typedArray('Uint8', 1, function (init) {
    return function Uint8Array(data, byteOffset, length) {
      return init(this, data, byteOffset, length);
    };
  });

  _typedArray('Uint8', 1, function (init) {
    return function Uint8ClampedArray(data, byteOffset, length) {
      return init(this, data, byteOffset, length);
    };
  }, true);

  _typedArray('Int16', 2, function (init) {
    return function Int16Array(data, byteOffset, length) {
      return init(this, data, byteOffset, length);
    };
  });

  _typedArray('Uint16', 2, function (init) {
    return function Uint16Array(data, byteOffset, length) {
      return init(this, data, byteOffset, length);
    };
  });

  _typedArray('Int32', 4, function (init) {
    return function Int32Array(data, byteOffset, length) {
      return init(this, data, byteOffset, length);
    };
  });

  _typedArray('Uint32', 4, function (init) {
    return function Uint32Array(data, byteOffset, length) {
      return init(this, data, byteOffset, length);
    };
  });

  _typedArray('Float32', 4, function (init) {
    return function Float32Array(data, byteOffset, length) {
      return init(this, data, byteOffset, length);
    };
  });

  _typedArray('Float64', 8, function (init) {
    return function Float64Array(data, byteOffset, length) {
      return init(this, data, byteOffset, length);
    };
  }); // 26.1.1 Reflect.apply(target, thisArgument, argumentsList)


  var rApply = (_global.Reflect || {}).apply;
  var fApply = Function.apply; // MS Edge argumentsList argument is optional

  _export(_export.S + _export.F * !_fails(function () {
    rApply(function () {
      /* empty */
    });
  }), 'Reflect', {
    apply: function apply(target, thisArgument, argumentsList) {
      var T = _aFunction(target);

      var L = _anObject(argumentsList);

      return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
    }
  }); // 26.1.2 Reflect.construct(target, argumentsList [, newTarget])


  var rConstruct = (_global.Reflect || {}).construct; // MS Edge supports only 2 arguments and argumentsList argument is optional
  // FF Nightly sets third argument as `new.target`, but does not create `this` from it

  var NEW_TARGET_BUG = _fails(function () {
    function F() {
      /* empty */
    }

    return !(rConstruct(function () {
      /* empty */
    }, [], F) instanceof F);
  });

  var ARGS_BUG = !_fails(function () {
    rConstruct(function () {
      /* empty */
    });
  });

  _export(_export.S + _export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
    construct: function construct(Target, args
    /* , newTarget */
    ) {
      _aFunction(Target);

      _anObject(args);

      var newTarget = arguments.length < 3 ? Target : _aFunction(arguments[2]);
      if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);

      if (Target == newTarget) {
        // w/o altered newTarget, optimization for 0-4 arguments
        switch (args.length) {
          case 0:
            return new Target();

          case 1:
            return new Target(args[0]);

          case 2:
            return new Target(args[0], args[1]);

          case 3:
            return new Target(args[0], args[1], args[2]);

          case 4:
            return new Target(args[0], args[1], args[2], args[3]);
        } // w/o altered newTarget, lot of arguments case


        var $args = [null];
        $args.push.apply($args, args);
        return new (_bind.apply(Target, $args))();
      } // with altered newTarget, not support built-in constructors


      var proto = newTarget.prototype;

      var instance = _objectCreate(_isObject(proto) ? proto : Object.prototype);

      var result = Function.apply.call(Target, instance, args);
      return _isObject(result) ? result : instance;
    }
  }); // 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
  // MS Edge has broken Reflect.defineProperty - throwing instead of returning false


  _export(_export.S + _export.F * _fails(function () {
    // eslint-disable-next-line no-undef
    Reflect.defineProperty(_objectDp.f({}, 1, {
      value: 1
    }), 1, {
      value: 2
    });
  }), 'Reflect', {
    defineProperty: function defineProperty(target, propertyKey, attributes) {
      _anObject(target);

      propertyKey = _toPrimitive(propertyKey, true);

      _anObject(attributes);

      try {
        _objectDp.f(target, propertyKey, attributes);

        return true;
      } catch (e) {
        return false;
      }
    }
  }); // 26.1.4 Reflect.deleteProperty(target, propertyKey)


  var gOPD$3 = _objectGopd.f;

  _export(_export.S, 'Reflect', {
    deleteProperty: function deleteProperty(target, propertyKey) {
      var desc = gOPD$3(_anObject(target), propertyKey);
      return desc && !desc.configurable ? false : delete target[propertyKey];
    }
  }); // 26.1.5 Reflect.enumerate(target)


  var Enumerate = function Enumerate(iterated) {
    this._t = _anObject(iterated); // target

    this._i = 0; // next index

    var keys = this._k = []; // keys

    var key;

    for (key in iterated) {
      keys.push(key);
    }
  };

  _iterCreate(Enumerate, 'Object', function () {
    var that = this;
    var keys = that._k;
    var key;

    do {
      if (that._i >= keys.length) return {
        value: undefined,
        done: true
      };
    } while (!((key = keys[that._i++]) in that._t));

    return {
      value: key,
      done: false
    };
  });

  _export(_export.S, 'Reflect', {
    enumerate: function enumerate(target) {
      return new Enumerate(target);
    }
  }); // 26.1.6 Reflect.get(target, propertyKey [, receiver])


  function get(target, propertyKey
  /* , receiver */
  ) {
    var receiver = arguments.length < 3 ? target : arguments[2];
    var desc, proto;
    if (_anObject(target) === receiver) return target[propertyKey];
    if (desc = _objectGopd.f(target, propertyKey)) return _has(desc, 'value') ? desc.value : desc.get !== undefined ? desc.get.call(receiver) : undefined;
    if (_isObject(proto = _objectGpo(target))) return get(proto, propertyKey, receiver);
  }

  _export(_export.S, 'Reflect', {
    get: get
  }); // 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)


  _export(_export.S, 'Reflect', {
    getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
      return _objectGopd.f(_anObject(target), propertyKey);
    }
  }); // 26.1.8 Reflect.getPrototypeOf(target)


  _export(_export.S, 'Reflect', {
    getPrototypeOf: function getPrototypeOf(target) {
      return _objectGpo(_anObject(target));
    }
  }); // 26.1.9 Reflect.has(target, propertyKey)


  _export(_export.S, 'Reflect', {
    has: function has(target, propertyKey) {
      return propertyKey in target;
    }
  }); // 26.1.10 Reflect.isExtensible(target)


  var $isExtensible = Object.isExtensible;

  _export(_export.S, 'Reflect', {
    isExtensible: function isExtensible(target) {
      _anObject(target);

      return $isExtensible ? $isExtensible(target) : true;
    }
  }); // all object keys, includes non-enumerable and symbols


  var Reflect$1 = _global.Reflect;

  var _ownKeys = Reflect$1 && Reflect$1.ownKeys || function ownKeys(it) {
    var keys = _objectGopn.f(_anObject(it));

    var getSymbols = _objectGops.f;
    return getSymbols ? keys.concat(getSymbols(it)) : keys;
  }; // 26.1.11 Reflect.ownKeys(target)


  _export(_export.S, 'Reflect', {
    ownKeys: _ownKeys
  }); // 26.1.12 Reflect.preventExtensions(target)


  var $preventExtensions = Object.preventExtensions;

  _export(_export.S, 'Reflect', {
    preventExtensions: function preventExtensions(target) {
      _anObject(target);

      try {
        if ($preventExtensions) $preventExtensions(target);
        return true;
      } catch (e) {
        return false;
      }
    }
  }); // 26.1.13 Reflect.set(target, propertyKey, V [, receiver])


  function set(target, propertyKey, V
  /* , receiver */
  ) {
    var receiver = arguments.length < 4 ? target : arguments[3];

    var ownDesc = _objectGopd.f(_anObject(target), propertyKey);

    var existingDescriptor, proto;

    if (!ownDesc) {
      if (_isObject(proto = _objectGpo(target))) {
        return set(proto, propertyKey, V, receiver);
      }

      ownDesc = _propertyDesc(0);
    }

    if (_has(ownDesc, 'value')) {
      if (ownDesc.writable === false || !_isObject(receiver)) return false;

      if (existingDescriptor = _objectGopd.f(receiver, propertyKey)) {
        if (existingDescriptor.get || existingDescriptor.set || existingDescriptor.writable === false) return false;
        existingDescriptor.value = V;

        _objectDp.f(receiver, propertyKey, existingDescriptor);
      } else _objectDp.f(receiver, propertyKey, _propertyDesc(0, V));

      return true;
    }

    return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
  }

  _export(_export.S, 'Reflect', {
    set: set
  }); // 26.1.14 Reflect.setPrototypeOf(target, proto)


  if (_setProto) _export(_export.S, 'Reflect', {
    setPrototypeOf: function setPrototypeOf(target, proto) {
      _setProto.check(target, proto);

      try {
        _setProto.set(target, proto);

        return true;
      } catch (e) {
        return false;
      }
    }
  }); // https://github.com/tc39/Array.prototype.includes

  var $includes = _arrayIncludes(true);

  _export(_export.P, 'Array', {
    includes: function includes(el
    /* , fromIndex = 0 */
    ) {
      return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  _addToUnscopables('includes'); // https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray


  var IS_CONCAT_SPREADABLE = _wks('isConcatSpreadable');

  function flattenIntoArray(target, original, source, sourceLen, start, depth, mapper, thisArg) {
    var targetIndex = start;
    var sourceIndex = 0;
    var mapFn = mapper ? _ctx(mapper, thisArg, 3) : false;
    var element, spreadable;

    while (sourceIndex < sourceLen) {
      if (sourceIndex in source) {
        element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];
        spreadable = false;

        if (_isObject(element)) {
          spreadable = element[IS_CONCAT_SPREADABLE];
          spreadable = spreadable !== undefined ? !!spreadable : _isArray(element);
        }

        if (spreadable && depth > 0) {
          targetIndex = flattenIntoArray(target, original, element, _toLength(element.length), targetIndex, depth - 1) - 1;
        } else {
          if (targetIndex >= 0x1fffffffffffff) throw TypeError();
          target[targetIndex] = element;
        }

        targetIndex++;
      }

      sourceIndex++;
    }

    return targetIndex;
  }

  var _flattenIntoArray = flattenIntoArray; // https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatMap

  _export(_export.P, 'Array', {
    flatMap: function flatMap(callbackfn
    /* , thisArg */
    ) {
      var O = _toObject(this);

      var sourceLen, A;

      _aFunction(callbackfn);

      sourceLen = _toLength(O.length);
      A = _arraySpeciesCreate(O, 0);

      _flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments[1]);

      return A;
    }
  });

  _addToUnscopables('flatMap'); // https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatten


  _export(_export.P, 'Array', {
    flatten: function flatten()
    /* depthArg = 1 */
    {
      var depthArg = arguments[0];

      var O = _toObject(this);

      var sourceLen = _toLength(O.length);

      var A = _arraySpeciesCreate(O, 0);

      _flattenIntoArray(A, O, O, sourceLen, 0, depthArg === undefined ? 1 : _toInteger(depthArg));

      return A;
    }
  });

  _addToUnscopables('flatten'); // https://github.com/mathiasbynens/String.prototype.at


  var $at$2 = _stringAt(true);

  var FORCED = _fails(function () {
    return '𠮷'.at(0) !== '𠮷';
  });

  _export(_export.P + _export.F * FORCED, 'String', {
    at: function at(pos) {
      return $at$2(this, pos);
    }
  }); // https://github.com/tc39/proposal-string-pad-start-end


  var _stringPad = function _stringPad(that, maxLength, fillString, left) {
    var S = String(_defined(that));
    var stringLength = S.length;
    var fillStr = fillString === undefined ? ' ' : String(fillString);

    var intMaxLength = _toLength(maxLength);

    if (intMaxLength <= stringLength || fillStr == '') return S;
    var fillLen = intMaxLength - stringLength;

    var stringFiller = _stringRepeat.call(fillStr, Math.ceil(fillLen / fillStr.length));

    if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);
    return left ? stringFiller + S : S + stringFiller;
  }; // https://github.com/tc39/proposal-string-pad-start-end
  // https://github.com/zloirock/core-js/issues/280


  var WEBKIT_BUG = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(_userAgent);

  _export(_export.P + _export.F * WEBKIT_BUG, 'String', {
    padStart: function padStart(maxLength
    /* , fillString = ' ' */
    ) {
      return _stringPad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
    }
  }); // https://github.com/tc39/proposal-string-pad-start-end
  // https://github.com/zloirock/core-js/issues/280


  var WEBKIT_BUG$1 = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(_userAgent);

  _export(_export.P + _export.F * WEBKIT_BUG$1, 'String', {
    padEnd: function padEnd(maxLength
    /* , fillString = ' ' */
    ) {
      return _stringPad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
    }
  }); // https://github.com/sebmarkbage/ecmascript-string-left-right-trim


  _stringTrim('trimLeft', function ($trim) {
    return function trimLeft() {
      return $trim(this, 1);
    };
  }, 'trimStart'); // https://github.com/sebmarkbage/ecmascript-string-left-right-trim


  _stringTrim('trimRight', function ($trim) {
    return function trimRight() {
      return $trim(this, 2);
    };
  }, 'trimEnd'); // https://tc39.github.io/String.prototype.matchAll/


  var RegExpProto = RegExp.prototype;

  var $RegExpStringIterator = function $RegExpStringIterator(regexp, string) {
    this._r = regexp;
    this._s = string;
  };

  _iterCreate($RegExpStringIterator, 'RegExp String', function next() {
    var match = this._r.exec(this._s);

    return {
      value: match,
      done: match === null
    };
  });

  _export(_export.P, 'String', {
    matchAll: function matchAll(regexp) {
      _defined(this);

      if (!_isRegexp(regexp)) throw TypeError(regexp + ' is not a regexp!');
      var S = String(this);
      var flags = 'flags' in RegExpProto ? String(regexp.flags) : _flags.call(regexp);
      var rx = new RegExp(regexp.source, ~flags.indexOf('g') ? flags : 'g' + flags);
      rx.lastIndex = _toLength(regexp.lastIndex);
      return new $RegExpStringIterator(rx, S);
    }
  });

  _wksDefine('asyncIterator');

  _wksDefine('observable'); // https://github.com/tc39/proposal-object-getownpropertydescriptors


  _export(_export.S, 'Object', {
    getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
      var O = _toIobject(object);

      var getDesc = _objectGopd.f;

      var keys = _ownKeys(O);

      var result = {};
      var i = 0;
      var key, desc;

      while (keys.length > i) {
        desc = getDesc(O, key = keys[i++]);
        if (desc !== undefined) _createProperty(result, key, desc);
      }

      return result;
    }
  });

  var isEnum$1 = _objectPie.f;

  var _objectToArray = function _objectToArray(isEntries) {
    return function (it) {
      var O = _toIobject(it);

      var keys = _objectKeys(O);

      var length = keys.length;
      var i = 0;
      var result = [];
      var key;

      while (length > i) {
        key = keys[i++];

        if (!_descriptors || isEnum$1.call(O, key)) {
          result.push(isEntries ? [key, O[key]] : O[key]);
        }
      }

      return result;
    };
  }; // https://github.com/tc39/proposal-object-values-entries


  var $values = _objectToArray(false);

  _export(_export.S, 'Object', {
    values: function values(it) {
      return $values(it);
    }
  }); // https://github.com/tc39/proposal-object-values-entries


  var $entries = _objectToArray(true);

  _export(_export.S, 'Object', {
    entries: function entries(it) {
      return $entries(it);
    }
  }); // Forced replacement prototype accessors methods


  var _objectForcedPam = !_fails(function () {
    var K = Math.random(); // In FF throws only define methods
    // eslint-disable-next-line no-undef, no-useless-call

    __defineSetter__.call(null, K, function () {
      /* empty */
    });

    delete _global[K];
  }); // B.2.2.2 Object.prototype.__defineGetter__(P, getter)


  _descriptors && _export(_export.P + _objectForcedPam, 'Object', {
    __defineGetter__: function __defineGetter__(P, getter) {
      _objectDp.f(_toObject(this), P, {
        get: _aFunction(getter),
        enumerable: true,
        configurable: true
      });
    }
  }); // B.2.2.3 Object.prototype.__defineSetter__(P, setter)

  _descriptors && _export(_export.P + _objectForcedPam, 'Object', {
    __defineSetter__: function __defineSetter__(P, setter) {
      _objectDp.f(_toObject(this), P, {
        set: _aFunction(setter),
        enumerable: true,
        configurable: true
      });
    }
  });
  var getOwnPropertyDescriptor = _objectGopd.f; // B.2.2.4 Object.prototype.__lookupGetter__(P)

  _descriptors && _export(_export.P + _objectForcedPam, 'Object', {
    __lookupGetter__: function __lookupGetter__(P) {
      var O = _toObject(this);

      var K = _toPrimitive(P, true);

      var D;

      do {
        if (D = getOwnPropertyDescriptor(O, K)) return D.get;
      } while (O = _objectGpo(O));
    }
  });
  var getOwnPropertyDescriptor$1 = _objectGopd.f; // B.2.2.5 Object.prototype.__lookupSetter__(P)

  _descriptors && _export(_export.P + _objectForcedPam, 'Object', {
    __lookupSetter__: function __lookupSetter__(P) {
      var O = _toObject(this);

      var K = _toPrimitive(P, true);

      var D;

      do {
        if (D = getOwnPropertyDescriptor$1(O, K)) return D.set;
      } while (O = _objectGpo(O));
    }
  });

  var _arrayFromIterable = function _arrayFromIterable(iter, ITERATOR) {
    var result = [];

    _forOf(iter, false, result.push, result, ITERATOR);

    return result;
  }; // https://github.com/DavidBruant/Map-Set.prototype.toJSON


  var _collectionToJson = function _collectionToJson(NAME) {
    return function toJSON() {
      if (_classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
      return _arrayFromIterable(this);
    };
  }; // https://github.com/DavidBruant/Map-Set.prototype.toJSON


  _export(_export.P + _export.R, 'Map', {
    toJSON: _collectionToJson('Map')
  }); // https://github.com/DavidBruant/Map-Set.prototype.toJSON


  _export(_export.P + _export.R, 'Set', {
    toJSON: _collectionToJson('Set')
  }); // https://tc39.github.io/proposal-setmap-offrom/


  var _setCollectionOf = function _setCollectionOf(COLLECTION) {
    _export(_export.S, COLLECTION, {
      of: function of() {
        var length = arguments.length;
        var A = new Array(length);

        while (length--) {
          A[length] = arguments[length];
        }

        return new this(A);
      }
    });
  }; // https://tc39.github.io/proposal-setmap-offrom/#sec-map.of


  _setCollectionOf('Map'); // https://tc39.github.io/proposal-setmap-offrom/#sec-set.of


  _setCollectionOf('Set'); // https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.of


  _setCollectionOf('WeakMap'); // https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.of


  _setCollectionOf('WeakSet'); // https://tc39.github.io/proposal-setmap-offrom/


  var _setCollectionFrom = function _setCollectionFrom(COLLECTION) {
    _export(_export.S, COLLECTION, {
      from: function from(source
      /* , mapFn, thisArg */
      ) {
        var mapFn = arguments[1];
        var mapping, A, n, cb;

        _aFunction(this);

        mapping = mapFn !== undefined;
        if (mapping) _aFunction(mapFn);
        if (source == undefined) return new this();
        A = [];

        if (mapping) {
          n = 0;
          cb = _ctx(mapFn, arguments[2], 2);

          _forOf(source, false, function (nextItem) {
            A.push(cb(nextItem, n++));
          });
        } else {
          _forOf(source, false, A.push, A);
        }

        return new this(A);
      }
    });
  }; // https://tc39.github.io/proposal-setmap-offrom/#sec-map.from


  _setCollectionFrom('Map'); // https://tc39.github.io/proposal-setmap-offrom/#sec-set.from


  _setCollectionFrom('Set'); // https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.from


  _setCollectionFrom('WeakMap'); // https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.from


  _setCollectionFrom('WeakSet'); // https://github.com/tc39/proposal-global


  _export(_export.G, {
    global: _global
  }); // https://github.com/tc39/proposal-global


  _export(_export.S, 'System', {
    global: _global
  }); // https://github.com/ljharb/proposal-is-error


  _export(_export.S, 'Error', {
    isError: function isError(it) {
      return _cof(it) === 'Error';
    }
  }); // https://rwaldron.github.io/proposal-math-extensions/


  _export(_export.S, 'Math', {
    clamp: function clamp(x, lower, upper) {
      return Math.min(upper, Math.max(lower, x));
    }
  }); // https://rwaldron.github.io/proposal-math-extensions/


  _export(_export.S, 'Math', {
    DEG_PER_RAD: Math.PI / 180
  }); // https://rwaldron.github.io/proposal-math-extensions/


  var RAD_PER_DEG = 180 / Math.PI;

  _export(_export.S, 'Math', {
    degrees: function degrees(radians) {
      return radians * RAD_PER_DEG;
    }
  }); // https://rwaldron.github.io/proposal-math-extensions/


  var _mathScale = Math.scale || function scale(x, inLow, inHigh, outLow, outHigh) {
    if (arguments.length === 0 // eslint-disable-next-line no-self-compare
    || x != x // eslint-disable-next-line no-self-compare
    || inLow != inLow // eslint-disable-next-line no-self-compare
    || inHigh != inHigh // eslint-disable-next-line no-self-compare
    || outLow != outLow // eslint-disable-next-line no-self-compare
    || outHigh != outHigh) return NaN;
    if (x === Infinity || x === -Infinity) return x;
    return (x - inLow) * (outHigh - outLow) / (inHigh - inLow) + outLow;
  }; // https://rwaldron.github.io/proposal-math-extensions/


  _export(_export.S, 'Math', {
    fscale: function fscale(x, inLow, inHigh, outLow, outHigh) {
      return _mathFround(_mathScale(x, inLow, inHigh, outLow, outHigh));
    }
  }); // https://gist.github.com/BrendanEich/4294d5c212a6d2254703


  _export(_export.S, 'Math', {
    iaddh: function iaddh(x0, x1, y0, y1) {
      var $x0 = x0 >>> 0;
      var $x1 = x1 >>> 0;
      var $y0 = y0 >>> 0;
      return $x1 + (y1 >>> 0) + (($x0 & $y0 | ($x0 | $y0) & ~($x0 + $y0 >>> 0)) >>> 31) | 0;
    }
  }); // https://gist.github.com/BrendanEich/4294d5c212a6d2254703


  _export(_export.S, 'Math', {
    isubh: function isubh(x0, x1, y0, y1) {
      var $x0 = x0 >>> 0;
      var $x1 = x1 >>> 0;
      var $y0 = y0 >>> 0;
      return $x1 - (y1 >>> 0) - ((~$x0 & $y0 | ~($x0 ^ $y0) & $x0 - $y0 >>> 0) >>> 31) | 0;
    }
  }); // https://gist.github.com/BrendanEich/4294d5c212a6d2254703


  _export(_export.S, 'Math', {
    imulh: function imulh(u, v) {
      var UINT16 = 0xffff;
      var $u = +u;
      var $v = +v;
      var u0 = $u & UINT16;
      var v0 = $v & UINT16;
      var u1 = $u >> 16;
      var v1 = $v >> 16;
      var t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
      return u1 * v1 + (t >> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >> 16);
    }
  }); // https://rwaldron.github.io/proposal-math-extensions/


  _export(_export.S, 'Math', {
    RAD_PER_DEG: 180 / Math.PI
  }); // https://rwaldron.github.io/proposal-math-extensions/


  var DEG_PER_RAD = Math.PI / 180;

  _export(_export.S, 'Math', {
    radians: function radians(degrees) {
      return degrees * DEG_PER_RAD;
    }
  }); // https://rwaldron.github.io/proposal-math-extensions/


  _export(_export.S, 'Math', {
    scale: _mathScale
  }); // https://gist.github.com/BrendanEich/4294d5c212a6d2254703


  _export(_export.S, 'Math', {
    umulh: function umulh(u, v) {
      var UINT16 = 0xffff;
      var $u = +u;
      var $v = +v;
      var u0 = $u & UINT16;
      var v0 = $v & UINT16;
      var u1 = $u >>> 16;
      var v1 = $v >>> 16;
      var t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
      return u1 * v1 + (t >>> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >>> 16);
    }
  }); // http://jfbastien.github.io/papers/Math.signbit.html


  _export(_export.S, 'Math', {
    signbit: function signbit(x) {
      // eslint-disable-next-line no-self-compare
      return (x = +x) != x ? x : x == 0 ? 1 / x == Infinity : x > 0;
    }
  });

  _export(_export.P + _export.R, 'Promise', {
    'finally': function _finally(onFinally) {
      var C = _speciesConstructor(this, _core.Promise || _global.Promise);

      var isFunction = typeof onFinally == 'function';
      return this.then(isFunction ? function (x) {
        return _promiseResolve(C, onFinally()).then(function () {
          return x;
        });
      } : onFinally, isFunction ? function (e) {
        return _promiseResolve(C, onFinally()).then(function () {
          throw e;
        });
      } : onFinally);
    }
  }); // https://github.com/tc39/proposal-promise-try


  _export(_export.S, 'Promise', {
    'try': function _try(callbackfn) {
      var promiseCapability = _newPromiseCapability.f(this);

      var result = _perform(callbackfn);

      (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
      return promiseCapability.promise;
    }
  });

  var shared$1 = _shared('metadata');

  var store = shared$1.store || (shared$1.store = new es6_weakMap());

  var getOrCreateMetadataMap = function getOrCreateMetadataMap(target, targetKey, create) {
    var targetMetadata = store.get(target);

    if (!targetMetadata) {
      if (!create) return undefined;
      store.set(target, targetMetadata = new es6_map());
    }

    var keyMetadata = targetMetadata.get(targetKey);

    if (!keyMetadata) {
      if (!create) return undefined;
      targetMetadata.set(targetKey, keyMetadata = new es6_map());
    }

    return keyMetadata;
  };

  var ordinaryHasOwnMetadata = function ordinaryHasOwnMetadata(MetadataKey, O, P) {
    var metadataMap = getOrCreateMetadataMap(O, P, false);
    return metadataMap === undefined ? false : metadataMap.has(MetadataKey);
  };

  var ordinaryGetOwnMetadata = function ordinaryGetOwnMetadata(MetadataKey, O, P) {
    var metadataMap = getOrCreateMetadataMap(O, P, false);
    return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
  };

  var ordinaryDefineOwnMetadata = function ordinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
    getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
  };

  var ordinaryOwnMetadataKeys = function ordinaryOwnMetadataKeys(target, targetKey) {
    var metadataMap = getOrCreateMetadataMap(target, targetKey, false);
    var keys = [];
    if (metadataMap) metadataMap.forEach(function (_, key) {
      keys.push(key);
    });
    return keys;
  };

  var toMetaKey = function toMetaKey(it) {
    return it === undefined || _typeof2(it) == 'symbol' ? it : String(it);
  };

  var exp$3 = function exp$3(O) {
    _export(_export.S, 'Reflect', O);
  };

  var _metadata = {
    store: store,
    map: getOrCreateMetadataMap,
    has: ordinaryHasOwnMetadata,
    get: ordinaryGetOwnMetadata,
    set: ordinaryDefineOwnMetadata,
    keys: ordinaryOwnMetadataKeys,
    key: toMetaKey,
    exp: exp$3
  };
  var toMetaKey$1 = _metadata.key;
  var ordinaryDefineOwnMetadata$1 = _metadata.set;

  _metadata.exp({
    defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey) {
      ordinaryDefineOwnMetadata$1(metadataKey, metadataValue, _anObject(target), toMetaKey$1(targetKey));
    }
  });

  var toMetaKey$2 = _metadata.key;
  var getOrCreateMetadataMap$1 = _metadata.map;
  var store$1 = _metadata.store;

  _metadata.exp({
    deleteMetadata: function deleteMetadata(metadataKey, target
    /* , targetKey */
    ) {
      var targetKey = arguments.length < 3 ? undefined : toMetaKey$2(arguments[2]);
      var metadataMap = getOrCreateMetadataMap$1(_anObject(target), targetKey, false);
      if (metadataMap === undefined || !metadataMap['delete'](metadataKey)) return false;
      if (metadataMap.size) return true;
      var targetMetadata = store$1.get(target);
      targetMetadata['delete'](targetKey);
      return !!targetMetadata.size || store$1['delete'](target);
    }
  });

  var ordinaryHasOwnMetadata$1 = _metadata.has;
  var ordinaryGetOwnMetadata$1 = _metadata.get;
  var toMetaKey$3 = _metadata.key;

  var ordinaryGetMetadata = function ordinaryGetMetadata(MetadataKey, O, P) {
    var hasOwn = ordinaryHasOwnMetadata$1(MetadataKey, O, P);
    if (hasOwn) return ordinaryGetOwnMetadata$1(MetadataKey, O, P);

    var parent = _objectGpo(O);

    return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;
  };

  _metadata.exp({
    getMetadata: function getMetadata(metadataKey, target
    /* , targetKey */
    ) {
      return ordinaryGetMetadata(metadataKey, _anObject(target), arguments.length < 3 ? undefined : toMetaKey$3(arguments[2]));
    }
  });

  var ordinaryOwnMetadataKeys$1 = _metadata.keys;
  var toMetaKey$4 = _metadata.key;

  var ordinaryMetadataKeys = function ordinaryMetadataKeys(O, P) {
    var oKeys = ordinaryOwnMetadataKeys$1(O, P);

    var parent = _objectGpo(O);

    if (parent === null) return oKeys;
    var pKeys = ordinaryMetadataKeys(parent, P);
    return pKeys.length ? oKeys.length ? _arrayFromIterable(new es6_set(oKeys.concat(pKeys))) : pKeys : oKeys;
  };

  _metadata.exp({
    getMetadataKeys: function getMetadataKeys(target
    /* , targetKey */
    ) {
      return ordinaryMetadataKeys(_anObject(target), arguments.length < 2 ? undefined : toMetaKey$4(arguments[1]));
    }
  });

  var ordinaryGetOwnMetadata$2 = _metadata.get;
  var toMetaKey$5 = _metadata.key;

  _metadata.exp({
    getOwnMetadata: function getOwnMetadata(metadataKey, target
    /* , targetKey */
    ) {
      return ordinaryGetOwnMetadata$2(metadataKey, _anObject(target), arguments.length < 3 ? undefined : toMetaKey$5(arguments[2]));
    }
  });

  var ordinaryOwnMetadataKeys$2 = _metadata.keys;
  var toMetaKey$6 = _metadata.key;

  _metadata.exp({
    getOwnMetadataKeys: function getOwnMetadataKeys(target
    /* , targetKey */
    ) {
      return ordinaryOwnMetadataKeys$2(_anObject(target), arguments.length < 2 ? undefined : toMetaKey$6(arguments[1]));
    }
  });

  var ordinaryHasOwnMetadata$2 = _metadata.has;
  var toMetaKey$7 = _metadata.key;

  var ordinaryHasMetadata = function ordinaryHasMetadata(MetadataKey, O, P) {
    var hasOwn = ordinaryHasOwnMetadata$2(MetadataKey, O, P);
    if (hasOwn) return true;

    var parent = _objectGpo(O);

    return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;
  };

  _metadata.exp({
    hasMetadata: function hasMetadata(metadataKey, target
    /* , targetKey */
    ) {
      return ordinaryHasMetadata(metadataKey, _anObject(target), arguments.length < 3 ? undefined : toMetaKey$7(arguments[2]));
    }
  });

  var ordinaryHasOwnMetadata$3 = _metadata.has;
  var toMetaKey$8 = _metadata.key;

  _metadata.exp({
    hasOwnMetadata: function hasOwnMetadata(metadataKey, target
    /* , targetKey */
    ) {
      return ordinaryHasOwnMetadata$3(metadataKey, _anObject(target), arguments.length < 3 ? undefined : toMetaKey$8(arguments[2]));
    }
  });

  var toMetaKey$9 = _metadata.key;
  var ordinaryDefineOwnMetadata$2 = _metadata.set;

  _metadata.exp({
    metadata: function metadata(metadataKey, metadataValue) {
      return function decorator(target, targetKey) {
        ordinaryDefineOwnMetadata$2(metadataKey, metadataValue, (targetKey !== undefined ? _anObject : _aFunction)(target), toMetaKey$9(targetKey));
      };
    }
  }); // https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-09/sept-25.md#510-globalasap-for-enqueuing-a-microtask


  var microtask$1 = _microtask();

  var process$3 = _global.process;
  var isNode$2 = _cof(process$3) == 'process';

  _export(_export.G, {
    asap: function asap(fn) {
      var domain = isNode$2 && process$3.domain;
      microtask$1(domain ? domain.bind(fn) : fn);
    }
  }); // https://github.com/zenparsing/es-observable


  var microtask$2 = _microtask();

  var OBSERVABLE = _wks('observable');

  var RETURN = _forOf.RETURN;

  var getMethod = function getMethod(fn) {
    return fn == null ? undefined : _aFunction(fn);
  };

  var cleanupSubscription = function cleanupSubscription(subscription) {
    var cleanup = subscription._c;

    if (cleanup) {
      subscription._c = undefined;
      cleanup();
    }
  };

  var subscriptionClosed = function subscriptionClosed(subscription) {
    return subscription._o === undefined;
  };

  var closeSubscription = function closeSubscription(subscription) {
    if (!subscriptionClosed(subscription)) {
      subscription._o = undefined;
      cleanupSubscription(subscription);
    }
  };

  var Subscription = function Subscription(observer, subscriber) {
    _anObject(observer);

    this._c = undefined;
    this._o = observer;
    observer = new SubscriptionObserver(this);

    try {
      var cleanup = subscriber(observer);
      var subscription = cleanup;

      if (cleanup != null) {
        if (typeof cleanup.unsubscribe === 'function') cleanup = function cleanup() {
          subscription.unsubscribe();
        };else _aFunction(cleanup);
        this._c = cleanup;
      }
    } catch (e) {
      observer.error(e);
      return;
    }

    if (subscriptionClosed(this)) cleanupSubscription(this);
  };

  Subscription.prototype = _redefineAll({}, {
    unsubscribe: function unsubscribe() {
      closeSubscription(this);
    }
  });

  var SubscriptionObserver = function SubscriptionObserver(subscription) {
    this._s = subscription;
  };

  SubscriptionObserver.prototype = _redefineAll({}, {
    next: function next(value) {
      var subscription = this._s;

      if (!subscriptionClosed(subscription)) {
        var observer = subscription._o;

        try {
          var m = getMethod(observer.next);
          if (m) return m.call(observer, value);
        } catch (e) {
          try {
            closeSubscription(subscription);
          } finally {
            throw e;
          }
        }
      }
    },
    error: function error(value) {
      var subscription = this._s;
      if (subscriptionClosed(subscription)) throw value;
      var observer = subscription._o;
      subscription._o = undefined;

      try {
        var m = getMethod(observer.error);
        if (!m) throw value;
        value = m.call(observer, value);
      } catch (e) {
        try {
          cleanupSubscription(subscription);
        } finally {
          throw e;
        }
      }

      cleanupSubscription(subscription);
      return value;
    },
    complete: function complete(value) {
      var subscription = this._s;

      if (!subscriptionClosed(subscription)) {
        var observer = subscription._o;
        subscription._o = undefined;

        try {
          var m = getMethod(observer.complete);
          value = m ? m.call(observer, value) : undefined;
        } catch (e) {
          try {
            cleanupSubscription(subscription);
          } finally {
            throw e;
          }
        }

        cleanupSubscription(subscription);
        return value;
      }
    }
  });

  var $Observable = function Observable(subscriber) {
    _anInstance(this, $Observable, 'Observable', '_f')._f = _aFunction(subscriber);
  };

  _redefineAll($Observable.prototype, {
    subscribe: function subscribe(observer) {
      return new Subscription(observer, this._f);
    },
    forEach: function forEach(fn) {
      var that = this;
      return new (_core.Promise || _global.Promise)(function (resolve, reject) {
        _aFunction(fn);

        var subscription = that.subscribe({
          next: function next(value) {
            try {
              return fn(value);
            } catch (e) {
              reject(e);
              subscription.unsubscribe();
            }
          },
          error: reject,
          complete: resolve
        });
      });
    }
  });

  _redefineAll($Observable, {
    from: function from(x) {
      var C = typeof this === 'function' ? this : $Observable;
      var method = getMethod(_anObject(x)[OBSERVABLE]);

      if (method) {
        var observable = _anObject(method.call(x));

        return observable.constructor === C ? observable : new C(function (observer) {
          return observable.subscribe(observer);
        });
      }

      return new C(function (observer) {
        var done = false;
        microtask$2(function () {
          if (!done) {
            try {
              if (_forOf(x, false, function (it) {
                observer.next(it);
                if (done) return RETURN;
              }) === RETURN) return;
            } catch (e) {
              if (done) throw e;
              observer.error(e);
              return;
            }

            observer.complete();
          }
        });
        return function () {
          done = true;
        };
      });
    },
    of: function of() {
      for (var i = 0, l = arguments.length, items = new Array(l); i < l;) {
        items[i] = arguments[i++];
      }

      return new (typeof this === 'function' ? this : $Observable)(function (observer) {
        var done = false;
        microtask$2(function () {
          if (!done) {
            for (var j = 0; j < items.length; ++j) {
              observer.next(items[j]);
              if (done) return;
            }

            observer.complete();
          }
        });
        return function () {
          done = true;
        };
      });
    }
  });

  _hide($Observable.prototype, OBSERVABLE, function () {
    return this;
  });

  _export(_export.G, {
    Observable: $Observable
  });

  _setSpecies('Observable'); // ie9- setTimeout & setInterval additional parameters fix


  var slice = [].slice;
  var MSIE = /MSIE .\./.test(_userAgent); // <- dirty ie9- check

  var wrap$1 = function wrap$1(set) {
    return function (fn, time
    /* , ...args */
    ) {
      var boundArgs = arguments.length > 2;
      var args = boundArgs ? slice.call(arguments, 2) : false;
      return set(boundArgs ? function () {
        // eslint-disable-next-line no-new-func
        (typeof fn == 'function' ? fn : Function(fn)).apply(this, args);
      } : fn, time);
    };
  };

  _export(_export.G + _export.B + _export.F * MSIE, {
    setTimeout: wrap$1(_global.setTimeout),
    setInterval: wrap$1(_global.setInterval)
  });

  _export(_export.G + _export.B, {
    setImmediate: _task.set,
    clearImmediate: _task.clear
  });

  var ITERATOR$4 = _wks('iterator');

  var TO_STRING_TAG = _wks('toStringTag');

  var ArrayValues = _iterators.Array;
  var DOMIterables = {
    CSSRuleList: true,
    // TODO: Not spec compliant, should be false.
    CSSStyleDeclaration: false,
    CSSValueList: false,
    ClientRectList: false,
    DOMRectList: false,
    DOMStringList: false,
    DOMTokenList: true,
    DataTransferItemList: false,
    FileList: false,
    HTMLAllCollection: false,
    HTMLCollection: false,
    HTMLFormElement: false,
    HTMLSelectElement: false,
    MediaList: true,
    // TODO: Not spec compliant, should be false.
    MimeTypeArray: false,
    NamedNodeMap: false,
    NodeList: true,
    PaintRequestList: false,
    Plugin: false,
    PluginArray: false,
    SVGLengthList: false,
    SVGNumberList: false,
    SVGPathSegList: false,
    SVGPointList: false,
    SVGStringList: false,
    SVGTransformList: false,
    SourceBufferList: false,
    StyleSheetList: true,
    // TODO: Not spec compliant, should be false.
    TextTrackCueList: false,
    TextTrackList: false,
    TouchList: false
  };

  for (var collections = _objectKeys(DOMIterables), i$2 = 0; i$2 < collections.length; i$2++) {
    var NAME$1 = collections[i$2];
    var explicit = DOMIterables[NAME$1];
    var Collection = _global[NAME$1];
    var proto$3 = Collection && Collection.prototype;
    var key$1;

    if (proto$3) {
      if (!proto$3[ITERATOR$4]) _hide(proto$3, ITERATOR$4, ArrayValues);
      if (!proto$3[TO_STRING_TAG]) _hide(proto$3, TO_STRING_TAG, NAME$1);
      _iterators[NAME$1] = ArrayValues;
      if (explicit) for (key$1 in es6_array_iterator) {
        if (!proto$3[key$1]) _redefine(proto$3, key$1, es6_array_iterator[key$1], true);
      }
    }
  }
  /**
   * Copyright (c) 2014-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */


  createCommonjsModule(function (module) {
    var runtime = function (exports) {
      var Op = Object.prototype;
      var hasOwn = Op.hasOwnProperty;
      var undefined$1; // More compressible than void 0.

      var $Symbol = typeof Symbol === "function" ? Symbol : {};
      var iteratorSymbol = $Symbol.iterator || "@@iterator";
      var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
      var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

      function define(obj, key, value) {
        Object.defineProperty(obj, key, {
          value: value,
          enumerable: true,
          configurable: true,
          writable: true
        });
        return obj[key];
      }

      try {
        // IE 8 has a broken Object.defineProperty that only works on DOM objects.
        define({}, "");
      } catch (err) {
        define = function define(obj, key, value) {
          return obj[key] = value;
        };
      }

      function wrap(innerFn, outerFn, self, tryLocsList) {
        // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
        var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
        var generator = Object.create(protoGenerator.prototype);
        var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
        // .throw, and .return methods.

        generator._invoke = makeInvokeMethod(innerFn, self, context);
        return generator;
      }

      exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
      // record like context.tryEntries[i].completion. This interface could
      // have been (and was previously) designed to take a closure to be
      // invoked without arguments, but in all the cases we care about we
      // already have an existing method we want to call, so there's no need
      // to create a new function object. We can even get away with assuming
      // the method takes exactly one argument, since that happens to be true
      // in every case, so we don't have to touch the arguments object. The
      // only additional allocation required is the completion record, which
      // has a stable shape and so hopefully should be cheap to allocate.

      function tryCatch(fn, obj, arg) {
        try {
          return {
            type: "normal",
            arg: fn.call(obj, arg)
          };
        } catch (err) {
          return {
            type: "throw",
            arg: err
          };
        }
      }

      var GenStateSuspendedStart = "suspendedStart";
      var GenStateSuspendedYield = "suspendedYield";
      var GenStateExecuting = "executing";
      var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
      // breaking out of the dispatch switch statement.

      var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
      // .constructor.prototype properties for functions that return Generator
      // objects. For full spec compliance, you may wish to configure your
      // minifier not to mangle the names of these two functions.

      function Generator() {}

      function GeneratorFunction() {}

      function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
      // don't natively support it.


      var IteratorPrototype = {};

      IteratorPrototype[iteratorSymbol] = function () {
        return this;
      };

      var getProto = Object.getPrototypeOf;
      var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

      if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
        // This environment has a native %IteratorPrototype%; use it instead
        // of the polyfill.
        IteratorPrototype = NativeIteratorPrototype;
      }

      var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
      GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
      GeneratorFunctionPrototype.constructor = GeneratorFunction;
      GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"); // Helper for defining the .next, .throw, and .return methods of the
      // Iterator interface in terms of a single ._invoke method.

      function defineIteratorMethods(prototype) {
        ["next", "throw", "return"].forEach(function (method) {
          define(prototype, method, function (arg) {
            return this._invoke(method, arg);
          });
        });
      }

      exports.isGeneratorFunction = function (genFun) {
        var ctor = typeof genFun === "function" && genFun.constructor;
        return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
      };

      exports.mark = function (genFun) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
        } else {
          genFun.__proto__ = GeneratorFunctionPrototype;
          define(genFun, toStringTagSymbol, "GeneratorFunction");
        }

        genFun.prototype = Object.create(Gp);
        return genFun;
      }; // Within the body of any async function, `await x` is transformed to
      // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
      // `hasOwn.call(value, "__await")` to determine if the yielded value is
      // meant to be awaited.


      exports.awrap = function (arg) {
        return {
          __await: arg
        };
      };

      function AsyncIterator(generator, PromiseImpl) {
        function invoke(method, arg, resolve, reject) {
          var record = tryCatch(generator[method], generator, arg);

          if (record.type === "throw") {
            reject(record.arg);
          } else {
            var result = record.arg;
            var value = result.value;

            if (value && _typeof2(value) === "object" && hasOwn.call(value, "__await")) {
              return PromiseImpl.resolve(value.__await).then(function (value) {
                invoke("next", value, resolve, reject);
              }, function (err) {
                invoke("throw", err, resolve, reject);
              });
            }

            return PromiseImpl.resolve(value).then(function (unwrapped) {
              // When a yielded Promise is resolved, its final value becomes
              // the .value of the Promise<{value,done}> result for the
              // current iteration.
              result.value = unwrapped;
              resolve(result);
            }, function (error) {
              // If a rejected Promise was yielded, throw the rejection back
              // into the async generator function so it can be handled there.
              return invoke("throw", error, resolve, reject);
            });
          }
        }

        var previousPromise;

        function enqueue(method, arg) {
          function callInvokeWithMethodAndArg() {
            return new PromiseImpl(function (resolve, reject) {
              invoke(method, arg, resolve, reject);
            });
          }

          return previousPromise = // If enqueue has been called before, then we want to wait until
          // all previous Promises have been resolved before calling invoke,
          // so that results are always delivered in the correct order. If
          // enqueue has not been called before, then it is important to
          // call invoke immediately, without waiting on a callback to fire,
          // so that the async generator function has the opportunity to do
          // any necessary setup in a predictable way. This predictability
          // is why the Promise constructor synchronously invokes its
          // executor callback, and why async functions synchronously
          // execute code before the first await. Since we implement simple
          // async functions in terms of async generators, it is especially
          // important to get this right, even though it requires care.
          previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        } // Define the unified helper method that is used to implement .next,
        // .throw, and .return (see defineIteratorMethods).


        this._invoke = enqueue;
      }

      defineIteratorMethods(AsyncIterator.prototype);

      AsyncIterator.prototype[asyncIteratorSymbol] = function () {
        return this;
      };

      exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
      // AsyncIterator objects; they just return a Promise for the value of
      // the final result produced by the iterator.

      exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
        if (PromiseImpl === void 0) PromiseImpl = Promise;
        var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
        return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
        : iter.next().then(function (result) {
          return result.done ? result.value : iter.next();
        });
      };

      function makeInvokeMethod(innerFn, self, context) {
        var state = GenStateSuspendedStart;
        return function invoke(method, arg) {
          if (state === GenStateExecuting) {
            throw new Error("Generator is already running");
          }

          if (state === GenStateCompleted) {
            if (method === "throw") {
              throw arg;
            } // Be forgiving, per 25.3.3.3.3 of the spec:
            // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


            return doneResult();
          }

          context.method = method;
          context.arg = arg;

          while (true) {
            var delegate = context.delegate;

            if (delegate) {
              var delegateResult = maybeInvokeDelegate(delegate, context);

              if (delegateResult) {
                if (delegateResult === ContinueSentinel) continue;
                return delegateResult;
              }
            }

            if (context.method === "next") {
              // Setting context._sent for legacy support of Babel's
              // function.sent implementation.
              context.sent = context._sent = context.arg;
            } else if (context.method === "throw") {
              if (state === GenStateSuspendedStart) {
                state = GenStateCompleted;
                throw context.arg;
              }

              context.dispatchException(context.arg);
            } else if (context.method === "return") {
              context.abrupt("return", context.arg);
            }

            state = GenStateExecuting;
            var record = tryCatch(innerFn, self, context);

            if (record.type === "normal") {
              // If an exception is thrown from innerFn, we leave state ===
              // GenStateExecuting and loop back for another invocation.
              state = context.done ? GenStateCompleted : GenStateSuspendedYield;

              if (record.arg === ContinueSentinel) {
                continue;
              }

              return {
                value: record.arg,
                done: context.done
              };
            } else if (record.type === "throw") {
              state = GenStateCompleted; // Dispatch the exception by looping back around to the
              // context.dispatchException(context.arg) call above.

              context.method = "throw";
              context.arg = record.arg;
            }
          }
        };
      } // Call delegate.iterator[context.method](context.arg) and handle the
      // result, either by returning a { value, done } result from the
      // delegate iterator, or by modifying context.method and context.arg,
      // setting context.delegate to null, and returning the ContinueSentinel.


      function maybeInvokeDelegate(delegate, context) {
        var method = delegate.iterator[context.method];

        if (method === undefined$1) {
          // A .throw or .return when the delegate iterator has no .throw
          // method always terminates the yield* loop.
          context.delegate = null;

          if (context.method === "throw") {
            // Note: ["return"] must be used for ES3 parsing compatibility.
            if (delegate.iterator["return"]) {
              // If the delegate iterator has a return method, give it a
              // chance to clean up.
              context.method = "return";
              context.arg = undefined$1;
              maybeInvokeDelegate(delegate, context);

              if (context.method === "throw") {
                // If maybeInvokeDelegate(context) changed context.method from
                // "return" to "throw", let that override the TypeError below.
                return ContinueSentinel;
              }
            }

            context.method = "throw";
            context.arg = new TypeError("The iterator does not provide a 'throw' method");
          }

          return ContinueSentinel;
        }

        var record = tryCatch(method, delegate.iterator, context.arg);

        if (record.type === "throw") {
          context.method = "throw";
          context.arg = record.arg;
          context.delegate = null;
          return ContinueSentinel;
        }

        var info = record.arg;

        if (!info) {
          context.method = "throw";
          context.arg = new TypeError("iterator result is not an object");
          context.delegate = null;
          return ContinueSentinel;
        }

        if (info.done) {
          // Assign the result of the finished delegate to the temporary
          // variable specified by delegate.resultName (see delegateYield).
          context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

          context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
          // exception, let the outer generator proceed normally. If
          // context.method was "next", forget context.arg since it has been
          // "consumed" by the delegate iterator. If context.method was
          // "return", allow the original .return call to continue in the
          // outer generator.

          if (context.method !== "return") {
            context.method = "next";
            context.arg = undefined$1;
          }
        } else {
          // Re-yield the result returned by the delegate method.
          return info;
        } // The delegate iterator is finished, so forget it and continue with
        // the outer generator.


        context.delegate = null;
        return ContinueSentinel;
      } // Define Generator.prototype.{next,throw,return} in terms of the
      // unified ._invoke helper method.


      defineIteratorMethods(Gp);
      define(Gp, toStringTagSymbol, "Generator"); // A Generator should always return itself as the iterator object when the
      // @@iterator function is called on it. Some browsers' implementations of the
      // iterator prototype chain incorrectly implement this, causing the Generator
      // object to not be returned from this call. This ensures that doesn't happen.
      // See https://github.com/facebook/regenerator/issues/274 for more details.

      Gp[iteratorSymbol] = function () {
        return this;
      };

      Gp.toString = function () {
        return "[object Generator]";
      };

      function pushTryEntry(locs) {
        var entry = {
          tryLoc: locs[0]
        };

        if (1 in locs) {
          entry.catchLoc = locs[1];
        }

        if (2 in locs) {
          entry.finallyLoc = locs[2];
          entry.afterLoc = locs[3];
        }

        this.tryEntries.push(entry);
      }

      function resetTryEntry(entry) {
        var record = entry.completion || {};
        record.type = "normal";
        delete record.arg;
        entry.completion = record;
      }

      function Context(tryLocsList) {
        // The root entry object (effectively a try statement without a catch
        // or a finally block) gives us a place to store values thrown from
        // locations where there is no enclosing try statement.
        this.tryEntries = [{
          tryLoc: "root"
        }];
        tryLocsList.forEach(pushTryEntry, this);
        this.reset(true);
      }

      exports.keys = function (object) {
        var keys = [];

        for (var key in object) {
          keys.push(key);
        }

        keys.reverse(); // Rather than returning an object with a next method, we keep
        // things simple and return the next function itself.

        return function next() {
          while (keys.length) {
            var key = keys.pop();

            if (key in object) {
              next.value = key;
              next.done = false;
              return next;
            }
          } // To avoid creating an additional object, we just hang the .value
          // and .done properties off the next function object itself. This
          // also ensures that the minifier will not anonymize the function.


          next.done = true;
          return next;
        };
      };

      function values(iterable) {
        if (iterable) {
          var iteratorMethod = iterable[iteratorSymbol];

          if (iteratorMethod) {
            return iteratorMethod.call(iterable);
          }

          if (typeof iterable.next === "function") {
            return iterable;
          }

          if (!isNaN(iterable.length)) {
            var i = -1,
                next = function next() {
              while (++i < iterable.length) {
                if (hasOwn.call(iterable, i)) {
                  next.value = iterable[i];
                  next.done = false;
                  return next;
                }
              }

              next.value = undefined$1;
              next.done = true;
              return next;
            };

            return next.next = next;
          }
        } // Return an iterator with no values.


        return {
          next: doneResult
        };
      }

      exports.values = values;

      function doneResult() {
        return {
          value: undefined$1,
          done: true
        };
      }

      Context.prototype = {
        constructor: Context,
        reset: function reset(skipTempReset) {
          this.prev = 0;
          this.next = 0; // Resetting context._sent for legacy support of Babel's
          // function.sent implementation.

          this.sent = this._sent = undefined$1;
          this.done = false;
          this.delegate = null;
          this.method = "next";
          this.arg = undefined$1;
          this.tryEntries.forEach(resetTryEntry);

          if (!skipTempReset) {
            for (var name in this) {
              // Not sure about the optimal order of these conditions:
              if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
                this[name] = undefined$1;
              }
            }
          }
        },
        stop: function stop() {
          this.done = true;
          var rootEntry = this.tryEntries[0];
          var rootRecord = rootEntry.completion;

          if (rootRecord.type === "throw") {
            throw rootRecord.arg;
          }

          return this.rval;
        },
        dispatchException: function dispatchException(exception) {
          if (this.done) {
            throw exception;
          }

          var context = this;

          function handle(loc, caught) {
            record.type = "throw";
            record.arg = exception;
            context.next = loc;

            if (caught) {
              // If the dispatched exception was caught by a catch block,
              // then let that catch block handle the exception normally.
              context.method = "next";
              context.arg = undefined$1;
            }

            return !!caught;
          }

          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];
            var record = entry.completion;

            if (entry.tryLoc === "root") {
              // Exception thrown outside of any try block that could handle
              // it, so set the completion value of the entire function to
              // throw the exception.
              return handle("end");
            }

            if (entry.tryLoc <= this.prev) {
              var hasCatch = hasOwn.call(entry, "catchLoc");
              var hasFinally = hasOwn.call(entry, "finallyLoc");

              if (hasCatch && hasFinally) {
                if (this.prev < entry.catchLoc) {
                  return handle(entry.catchLoc, true);
                } else if (this.prev < entry.finallyLoc) {
                  return handle(entry.finallyLoc);
                }
              } else if (hasCatch) {
                if (this.prev < entry.catchLoc) {
                  return handle(entry.catchLoc, true);
                }
              } else if (hasFinally) {
                if (this.prev < entry.finallyLoc) {
                  return handle(entry.finallyLoc);
                }
              } else {
                throw new Error("try statement without catch or finally");
              }
            }
          }
        },
        abrupt: function abrupt(type, arg) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];

            if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
              var finallyEntry = entry;
              break;
            }
          }

          if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
            // Ignore the finally entry if control is not jumping to a
            // location outside the try/catch block.
            finallyEntry = null;
          }

          var record = finallyEntry ? finallyEntry.completion : {};
          record.type = type;
          record.arg = arg;

          if (finallyEntry) {
            this.method = "next";
            this.next = finallyEntry.finallyLoc;
            return ContinueSentinel;
          }

          return this.complete(record);
        },
        complete: function complete(record, afterLoc) {
          if (record.type === "throw") {
            throw record.arg;
          }

          if (record.type === "break" || record.type === "continue") {
            this.next = record.arg;
          } else if (record.type === "return") {
            this.rval = this.arg = record.arg;
            this.method = "return";
            this.next = "end";
          } else if (record.type === "normal" && afterLoc) {
            this.next = afterLoc;
          }

          return ContinueSentinel;
        },
        finish: function finish(finallyLoc) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];

            if (entry.finallyLoc === finallyLoc) {
              this.complete(entry.completion, entry.afterLoc);
              resetTryEntry(entry);
              return ContinueSentinel;
            }
          }
        },
        "catch": function _catch(tryLoc) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];

            if (entry.tryLoc === tryLoc) {
              var record = entry.completion;

              if (record.type === "throw") {
                var thrown = record.arg;
                resetTryEntry(entry);
              }

              return thrown;
            }
          } // The context.catch method must only be called with a location
          // argument that corresponds to a known catch block.


          throw new Error("illegal catch attempt");
        },
        delegateYield: function delegateYield(iterable, resultName, nextLoc) {
          this.delegate = {
            iterator: values(iterable),
            resultName: resultName,
            nextLoc: nextLoc
          };

          if (this.method === "next") {
            // Deliberately forget the last sent value so that we don't
            // accidentally pass it on to the delegate.
            this.arg = undefined$1;
          }

          return ContinueSentinel;
        }
      }; // Regardless of whether this script is executing as a CommonJS module
      // or not, return the runtime object so that we can declare the variable
      // regeneratorRuntime in the outer scope, which allows this module to be
      // injected easily by `bin/regenerator --include-runtime script.js`.

      return exports;
    }( // If this script is executing as a CommonJS module, use module.exports
    // as the regeneratorRuntime namespace. Otherwise create a new empty
    // object. Either way, the resulting object will be used to initialize
    // the regeneratorRuntime variable at the top of this file.
    module.exports);

    try {
      regeneratorRuntime = runtime;
    } catch (accidentalStrictMode) {
      // This module should not be running in strict mode, so the above
      // assignment should always work unless something is misconfigured. Just
      // in case runtime.js accidentally runs in strict mode, we can escape
      // strict mode using a global Function call. This could conceivably fail
      // if a Content Security Policy forbids using Function, but in that case
      // the proper solution is to fix the accidental strict mode problem. If
      // you've misconfigured your bundler to force strict mode and applied a
      // CSP to forbid Function, and you're not willing to fix either of those
      // problems, please detail your unique predicament in a GitHub issue.
      Function("r", "regeneratorRuntime = r")(runtime);
    }
  });

  if (typeof window !== "undefined") {
    (function () {
      try {
        if (typeof SVGElement === 'undefined' || Boolean(SVGElement.prototype.innerHTML)) {
          return;
        }
      } catch (e) {
        return;
      }

      function serializeNode(node) {
        switch (node.nodeType) {
          case 1:
            return serializeElementNode(node);

          case 3:
            return serializeTextNode(node);

          case 8:
            return serializeCommentNode(node);
        }
      }

      function serializeTextNode(node) {
        return node.textContent.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
      }

      function serializeCommentNode(node) {
        return '<!--' + node.nodeValue + '-->';
      }

      function serializeElementNode(node) {
        var output = '';
        output += '<' + node.tagName;

        if (node.hasAttributes()) {
          [].forEach.call(node.attributes, function (attrNode) {
            output += ' ' + attrNode.name + '="' + attrNode.value + '"';
          });
        }

        output += '>';

        if (node.hasChildNodes()) {
          [].forEach.call(node.childNodes, function (childNode) {
            output += serializeNode(childNode);
          });
        }

        output += '</' + node.tagName + '>';
        return output;
      }

      Object.defineProperty(SVGElement.prototype, 'innerHTML', {
        get: function get() {
          var output = '';
          [].forEach.call(this.childNodes, function (childNode) {
            output += serializeNode(childNode);
          });
          return output;
        },
        set: function set(markup) {
          while (this.firstChild) {
            this.removeChild(this.firstChild);
          }

          try {
            var dXML = new DOMParser();
            dXML.async = false;
            var sXML = '<svg xmlns=\'http://www.w3.org/2000/svg\' xmlns:xlink=\'http://www.w3.org/1999/xlink\'>' + markup + '</svg>';
            var svgDocElement = dXML.parseFromString(sXML, 'text/xml').documentElement;
            [].forEach.call(svgDocElement.childNodes, function (childNode) {
              this.appendChild(this.ownerDocument.importNode(childNode, true));
            }.bind(this));
          } catch (e) {
            throw new Error('Error parsing markup string');
          }
        }
      });
      Object.defineProperty(SVGElement.prototype, 'innerSVG', {
        get: function get() {
          return this.innerHTML;
        },
        set: function set(markup) {
          this.innerHTML = markup;
        }
      });
    })();
  }
});

(function (global, factory) {
  (typeof exports === "undefined" ? "undefined" : _typeof2(exports)) === 'object' && typeof module !== 'undefined' ? factory(exports) : typeof define === 'function' && define.amd ? define('d3plus-tooltip', ['exports'], factory) : (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.d3plus = {}));
})(this, function (exports) {
  var _marked = /*#__PURE__*/regeneratorRuntime.mark(selection_iterator);

  var xhtml = "http://www.w3.org/1999/xhtml";
  var namespaces = {
    svg: "http://www.w3.org/2000/svg",
    xhtml: xhtml,
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/"
  };

  function namespace(name) {
    var prefix = name += "",
        i = prefix.indexOf(":");
    if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
    return namespaces.hasOwnProperty(prefix) ? {
      space: namespaces[prefix],
      local: name
    } : name; // eslint-disable-line no-prototype-builtins
  }

  function creatorInherit(name) {
    return function () {
      var document = this.ownerDocument,
          uri = this.namespaceURI;
      return uri === xhtml && document.documentElement.namespaceURI === xhtml ? document.createElement(name) : document.createElementNS(uri, name);
    };
  }

  function creatorFixed(fullname) {
    return function () {
      return this.ownerDocument.createElementNS(fullname.space, fullname.local);
    };
  }

  function creator(name) {
    var fullname = namespace(name);
    return (fullname.local ? creatorFixed : creatorInherit)(fullname);
  }

  function none() {}

  function selector(selector) {
    return selector == null ? none : function () {
      return this.querySelector(selector);
    };
  }

  function selection_select(select) {
    if (typeof select !== "function") select = selector(select);

    for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
        if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
          if ("__data__" in node) subnode.__data__ = node.__data__;
          subgroup[i] = subnode;
        }
      }
    }

    return new Selection(subgroups, this._parents);
  }

  function array(x) {
    return _typeof2(x) === "object" && "length" in x ? x // Array, TypedArray, NodeList, array-like
    : Array.from(x); // Map, Set, iterable, string, or anything else
  }

  function empty() {
    return [];
  }

  function selectorAll(selector) {
    return selector == null ? empty : function () {
      return this.querySelectorAll(selector);
    };
  }

  function arrayAll(select) {
    return function () {
      var group = select.apply(this, arguments);
      return group == null ? [] : array(group);
    };
  }

  function selection_selectAll(select) {
    if (typeof select === "function") select = arrayAll(select);else select = selectorAll(select);

    for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
        if (node = group[i]) {
          subgroups.push(select.call(node, node.__data__, i, group));
          parents.push(node);
        }
      }
    }

    return new Selection(subgroups, parents);
  }

  function matcher(selector) {
    return function () {
      return this.matches(selector);
    };
  }

  function childMatcher(selector) {
    return function (node) {
      return node.matches(selector);
    };
  }

  var find = Array.prototype.find;

  function childFind(match) {
    return function () {
      return find.call(this.children, match);
    };
  }

  function childFirst() {
    return this.firstElementChild;
  }

  function selection_selectChild(match) {
    return this.select(match == null ? childFirst : childFind(typeof match === "function" ? match : childMatcher(match)));
  }

  var filter = Array.prototype.filter;

  function children() {
    return this.children;
  }

  function childrenFilter(match) {
    return function () {
      return filter.call(this.children, match);
    };
  }

  function selection_selectChildren(match) {
    return this.selectAll(match == null ? children : childrenFilter(typeof match === "function" ? match : childMatcher(match)));
  }

  function selection_filter(match) {
    if (typeof match !== "function") match = matcher(match);

    for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
        if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
          subgroup.push(node);
        }
      }
    }

    return new Selection(subgroups, this._parents);
  }

  function sparse(update) {
    return new Array(update.length);
  }

  function selection_enter() {
    return new Selection(this._enter || this._groups.map(sparse), this._parents);
  }

  function EnterNode(parent, datum) {
    this.ownerDocument = parent.ownerDocument;
    this.namespaceURI = parent.namespaceURI;
    this._next = null;
    this._parent = parent;
    this.__data__ = datum;
  }

  EnterNode.prototype = {
    constructor: EnterNode,
    appendChild: function appendChild(child) {
      return this._parent.insertBefore(child, this._next);
    },
    insertBefore: function insertBefore(child, next) {
      return this._parent.insertBefore(child, next);
    },
    querySelector: function querySelector(selector) {
      return this._parent.querySelector(selector);
    },
    querySelectorAll: function querySelectorAll(selector) {
      return this._parent.querySelectorAll(selector);
    }
  };

  function constant(x) {
    return function () {
      return x;
    };
  }

  function bindIndex(parent, group, enter, update, exit, data) {
    var i = 0,
        node,
        groupLength = group.length,
        dataLength = data.length; // Put any non-null nodes that fit into update.
    // Put any null nodes into enter.
    // Put any remaining data into enter.

    for (; i < dataLength; ++i) {
      if (node = group[i]) {
        node.__data__ = data[i];
        update[i] = node;
      } else {
        enter[i] = new EnterNode(parent, data[i]);
      }
    } // Put any non-null nodes that don’t fit into exit.


    for (; i < groupLength; ++i) {
      if (node = group[i]) {
        exit[i] = node;
      }
    }
  }

  function bindKey(parent, group, enter, update, exit, data, key) {
    var i,
        node,
        nodeByKeyValue = new Map(),
        groupLength = group.length,
        dataLength = data.length,
        keyValues = new Array(groupLength),
        keyValue; // Compute the key for each node.
    // If multiple nodes have the same key, the duplicates are added to exit.

    for (i = 0; i < groupLength; ++i) {
      if (node = group[i]) {
        keyValues[i] = keyValue = key.call(node, node.__data__, i, group) + "";

        if (nodeByKeyValue.has(keyValue)) {
          exit[i] = node;
        } else {
          nodeByKeyValue.set(keyValue, node);
        }
      }
    } // Compute the key for each datum.
    // If there a node associated with this key, join and add it to update.
    // If there is not (or the key is a duplicate), add it to enter.


    for (i = 0; i < dataLength; ++i) {
      keyValue = key.call(parent, data[i], i, data) + "";

      if (node = nodeByKeyValue.get(keyValue)) {
        update[i] = node;
        node.__data__ = data[i];
        nodeByKeyValue["delete"](keyValue);
      } else {
        enter[i] = new EnterNode(parent, data[i]);
      }
    } // Add any remaining nodes that were not bound to data to exit.


    for (i = 0; i < groupLength; ++i) {
      if ((node = group[i]) && nodeByKeyValue.get(keyValues[i]) === node) {
        exit[i] = node;
      }
    }
  }

  function datum(node) {
    return node.__data__;
  }

  function selection_data(value, key) {
    if (!arguments.length) return Array.from(this, datum);
    var bind = key ? bindKey : bindIndex,
        parents = this._parents,
        groups = this._groups;
    if (typeof value !== "function") value = constant(value);

    for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
      var parent = parents[j],
          group = groups[j],
          groupLength = group.length,
          data = array(value.call(parent, parent && parent.__data__, j, parents)),
          dataLength = data.length,
          enterGroup = enter[j] = new Array(dataLength),
          updateGroup = update[j] = new Array(dataLength),
          exitGroup = exit[j] = new Array(groupLength);
      bind(parent, group, enterGroup, updateGroup, exitGroup, data, key); // Now connect the enter nodes to their following update node, such that
      // appendChild can insert the materialized enter node before this node,
      // rather than at the end of the parent node.

      for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
        if (previous = enterGroup[i0]) {
          if (i0 >= i1) i1 = i0 + 1;

          while (!(next = updateGroup[i1]) && ++i1 < dataLength) {
            ;
          }

          previous._next = next || null;
        }
      }
    }

    update = new Selection(update, parents);
    update._enter = enter;
    update._exit = exit;
    return update;
  }

  function selection_exit() {
    return new Selection(this._exit || this._groups.map(sparse), this._parents);
  }

  function selection_join(onenter, onupdate, onexit) {
    var enter = this.enter(),
        update = this,
        exit = this.exit();
    enter = typeof onenter === "function" ? onenter(enter) : enter.append(onenter + "");
    if (onupdate != null) update = onupdate(update);
    if (onexit == null) exit.remove();else onexit(exit);
    return enter && update ? enter.merge(update).order() : update;
  }

  function selection_merge(selection) {
    if (!(selection instanceof Selection)) throw new Error("invalid merge");

    for (var groups0 = this._groups, groups1 = selection._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
      for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
        if (node = group0[i] || group1[i]) {
          merge[i] = node;
        }
      }
    }

    for (; j < m0; ++j) {
      merges[j] = groups0[j];
    }

    return new Selection(merges, this._parents);
  }

  function selection_order() {
    for (var groups = this._groups, j = -1, m = groups.length; ++j < m;) {
      for (var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0;) {
        if (node = group[i]) {
          if (next && node.compareDocumentPosition(next) ^ 4) next.parentNode.insertBefore(node, next);
          next = node;
        }
      }
    }

    return this;
  }

  function selection_sort(compare) {
    if (!compare) compare = ascending;

    function compareNode(a, b) {
      return a && b ? compare(a.__data__, b.__data__) : !a - !b;
    }

    for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i) {
        if (node = group[i]) {
          sortgroup[i] = node;
        }
      }

      sortgroup.sort(compareNode);
    }

    return new Selection(sortgroups, this._parents).order();
  }

  function ascending(a, b) {
    return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
  }

  function selection_call() {
    var callback = arguments[0];
    arguments[0] = this;
    callback.apply(null, arguments);
    return this;
  }

  function selection_nodes() {
    return Array.from(this);
  }

  function selection_node() {
    for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
      for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
        var node = group[i];
        if (node) return node;
      }
    }

    return null;
  }

  function selection_size() {
    var size = 0;

    var _iterator = _createForOfIteratorHelper(this),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var node = _step.value;
        ++size;
      } // eslint-disable-line no-unused-vars

    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return size;
  }

  function selection_empty() {
    return !this.node();
  }

  function selection_each(callback) {
    for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
      for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
        if (node = group[i]) callback.call(node, node.__data__, i, group);
      }
    }

    return this;
  }

  function attrRemove(name) {
    return function () {
      this.removeAttribute(name);
    };
  }

  function attrRemoveNS(fullname) {
    return function () {
      this.removeAttributeNS(fullname.space, fullname.local);
    };
  }

  function attrConstant(name, value) {
    return function () {
      this.setAttribute(name, value);
    };
  }

  function attrConstantNS(fullname, value) {
    return function () {
      this.setAttributeNS(fullname.space, fullname.local, value);
    };
  }

  function attrFunction(name, value) {
    return function () {
      var v = value.apply(this, arguments);
      if (v == null) this.removeAttribute(name);else this.setAttribute(name, v);
    };
  }

  function attrFunctionNS(fullname, value) {
    return function () {
      var v = value.apply(this, arguments);
      if (v == null) this.removeAttributeNS(fullname.space, fullname.local);else this.setAttributeNS(fullname.space, fullname.local, v);
    };
  }

  function selection_attr(name, value) {
    var fullname = namespace(name);

    if (arguments.length < 2) {
      var node = this.node();
      return fullname.local ? node.getAttributeNS(fullname.space, fullname.local) : node.getAttribute(fullname);
    }

    return this.each((value == null ? fullname.local ? attrRemoveNS : attrRemove : typeof value === "function" ? fullname.local ? attrFunctionNS : attrFunction : fullname.local ? attrConstantNS : attrConstant)(fullname, value));
  }

  function defaultView(node) {
    return node.ownerDocument && node.ownerDocument.defaultView || // node is a Node
    node.document && node // node is a Window
    || node.defaultView; // node is a Document
  }

  function styleRemove(name) {
    return function () {
      this.style.removeProperty(name);
    };
  }

  function styleConstant(name, value, priority) {
    return function () {
      this.style.setProperty(name, value, priority);
    };
  }

  function styleFunction(name, value, priority) {
    return function () {
      var v = value.apply(this, arguments);
      if (v == null) this.style.removeProperty(name);else this.style.setProperty(name, v, priority);
    };
  }

  function selection_style(name, value, priority) {
    return arguments.length > 1 ? this.each((value == null ? styleRemove : typeof value === "function" ? styleFunction : styleConstant)(name, value, priority == null ? "" : priority)) : styleValue(this.node(), name);
  }

  function styleValue(node, name) {
    return node.style.getPropertyValue(name) || defaultView(node).getComputedStyle(node, null).getPropertyValue(name);
  }

  function propertyRemove(name) {
    return function () {
      delete this[name];
    };
  }

  function propertyConstant(name, value) {
    return function () {
      this[name] = value;
    };
  }

  function propertyFunction(name, value) {
    return function () {
      var v = value.apply(this, arguments);
      if (v == null) delete this[name];else this[name] = v;
    };
  }

  function selection_property(name, value) {
    return arguments.length > 1 ? this.each((value == null ? propertyRemove : typeof value === "function" ? propertyFunction : propertyConstant)(name, value)) : this.node()[name];
  }

  function classArray(string) {
    return string.trim().split(/^|\s+/);
  }

  function classList(node) {
    return node.classList || new ClassList(node);
  }

  function ClassList(node) {
    this._node = node;
    this._names = classArray(node.getAttribute("class") || "");
  }

  ClassList.prototype = {
    add: function add(name) {
      var i = this._names.indexOf(name);

      if (i < 0) {
        this._names.push(name);

        this._node.setAttribute("class", this._names.join(" "));
      }
    },
    remove: function remove(name) {
      var i = this._names.indexOf(name);

      if (i >= 0) {
        this._names.splice(i, 1);

        this._node.setAttribute("class", this._names.join(" "));
      }
    },
    contains: function contains(name) {
      return this._names.indexOf(name) >= 0;
    }
  };

  function classedAdd(node, names) {
    var list = classList(node),
        i = -1,
        n = names.length;

    while (++i < n) {
      list.add(names[i]);
    }
  }

  function classedRemove(node, names) {
    var list = classList(node),
        i = -1,
        n = names.length;

    while (++i < n) {
      list.remove(names[i]);
    }
  }

  function classedTrue(names) {
    return function () {
      classedAdd(this, names);
    };
  }

  function classedFalse(names) {
    return function () {
      classedRemove(this, names);
    };
  }

  function classedFunction(names, value) {
    return function () {
      (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
    };
  }

  function selection_classed(name, value) {
    var names = classArray(name + "");

    if (arguments.length < 2) {
      var list = classList(this.node()),
          i = -1,
          n = names.length;

      while (++i < n) {
        if (!list.contains(names[i])) return false;
      }

      return true;
    }

    return this.each((typeof value === "function" ? classedFunction : value ? classedTrue : classedFalse)(names, value));
  }

  function textRemove() {
    this.textContent = "";
  }

  function textConstant(value) {
    return function () {
      this.textContent = value;
    };
  }

  function textFunction(value) {
    return function () {
      var v = value.apply(this, arguments);
      this.textContent = v == null ? "" : v;
    };
  }

  function selection_text(value) {
    return arguments.length ? this.each(value == null ? textRemove : (typeof value === "function" ? textFunction : textConstant)(value)) : this.node().textContent;
  }

  function htmlRemove() {
    this.innerHTML = "";
  }

  function htmlConstant(value) {
    return function () {
      this.innerHTML = value;
    };
  }

  function htmlFunction(value) {
    return function () {
      var v = value.apply(this, arguments);
      this.innerHTML = v == null ? "" : v;
    };
  }

  function selection_html(value) {
    return arguments.length ? this.each(value == null ? htmlRemove : (typeof value === "function" ? htmlFunction : htmlConstant)(value)) : this.node().innerHTML;
  }

  function raise() {
    if (this.nextSibling) this.parentNode.appendChild(this);
  }

  function selection_raise() {
    return this.each(raise);
  }

  function lower() {
    if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
  }

  function selection_lower() {
    return this.each(lower);
  }

  function selection_append(name) {
    var create = typeof name === "function" ? name : creator(name);
    return this.select(function () {
      return this.appendChild(create.apply(this, arguments));
    });
  }

  function constantNull() {
    return null;
  }

  function selection_insert(name, before) {
    var create = typeof name === "function" ? name : creator(name),
        select = before == null ? constantNull : typeof before === "function" ? before : selector(before);
    return this.select(function () {
      return this.insertBefore(create.apply(this, arguments), select.apply(this, arguments) || null);
    });
  }

  function remove() {
    var parent = this.parentNode;
    if (parent) parent.removeChild(this);
  }

  function selection_remove() {
    return this.each(remove);
  }

  function selection_cloneShallow() {
    var clone = this.cloneNode(false),
        parent = this.parentNode;
    return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
  }

  function selection_cloneDeep() {
    var clone = this.cloneNode(true),
        parent = this.parentNode;
    return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
  }

  function selection_clone(deep) {
    return this.select(deep ? selection_cloneDeep : selection_cloneShallow);
  }

  function selection_datum(value) {
    return arguments.length ? this.property("__data__", value) : this.node().__data__;
  }

  function contextListener(listener) {
    return function (event) {
      listener.call(this, event, this.__data__);
    };
  }

  function parseTypenames(typenames) {
    return typenames.trim().split(/^|\s+/).map(function (t) {
      var name = "",
          i = t.indexOf(".");
      if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
      return {
        type: t,
        name: name
      };
    });
  }

  function onRemove(typename) {
    return function () {
      var on = this.__on;
      if (!on) return;

      for (var j = 0, i = -1, m = on.length, o; j < m; ++j) {
        if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {
          this.removeEventListener(o.type, o.listener, o.options);
        } else {
          on[++i] = o;
        }
      }

      if (++i) on.length = i;else delete this.__on;
    };
  }

  function onAdd(typename, value, options) {
    return function () {
      var on = this.__on,
          o,
          listener = contextListener(value);
      if (on) for (var j = 0, m = on.length; j < m; ++j) {
        if ((o = on[j]).type === typename.type && o.name === typename.name) {
          this.removeEventListener(o.type, o.listener, o.options);
          this.addEventListener(o.type, o.listener = listener, o.options = options);
          o.value = value;
          return;
        }
      }
      this.addEventListener(typename.type, listener, options);
      o = {
        type: typename.type,
        name: typename.name,
        value: value,
        listener: listener,
        options: options
      };
      if (!on) this.__on = [o];else on.push(o);
    };
  }

  function selection_on(typename, value, options) {
    var typenames = parseTypenames(typename + ""),
        i,
        n = typenames.length,
        t;

    if (arguments.length < 2) {
      var on = this.node().__on;

      if (on) for (var j = 0, m = on.length, o; j < m; ++j) {
        for (i = 0, o = on[j]; i < n; ++i) {
          if ((t = typenames[i]).type === o.type && t.name === o.name) {
            return o.value;
          }
        }
      }
      return;
    }

    on = value ? onAdd : onRemove;

    for (i = 0; i < n; ++i) {
      this.each(on(typenames[i], value, options));
    }

    return this;
  }

  function dispatchEvent(node, type, params) {
    var window = defaultView(node),
        event = window.CustomEvent;

    if (typeof event === "function") {
      event = new event(type, params);
    } else {
      event = window.document.createEvent("Event");
      if (params) event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;else event.initEvent(type, false, false);
    }

    node.dispatchEvent(event);
  }

  function dispatchConstant(type, params) {
    return function () {
      return dispatchEvent(this, type, params);
    };
  }

  function dispatchFunction(type, params) {
    return function () {
      return dispatchEvent(this, type, params.apply(this, arguments));
    };
  }

  function selection_dispatch(type, params) {
    return this.each((typeof params === "function" ? dispatchFunction : dispatchConstant)(type, params));
  }

  function selection_iterator() {
    var groups, j, m, group, i, n, node;
    return regeneratorRuntime.wrap(function selection_iterator$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            groups = this._groups, j = 0, m = groups.length;

          case 1:
            if (!(j < m)) {
              _context.next = 13;
              break;
            }

            group = groups[j], i = 0, n = group.length;

          case 3:
            if (!(i < n)) {
              _context.next = 10;
              break;
            }

            if (!(node = group[i])) {
              _context.next = 7;
              break;
            }

            _context.next = 7;
            return node;

          case 7:
            ++i;
            _context.next = 3;
            break;

          case 10:
            ++j;
            _context.next = 1;
            break;

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _marked, this);
  }

  var root = [null];

  function Selection(groups, parents) {
    this._groups = groups;
    this._parents = parents;
  }

  function selection_selection() {
    return this;
  }

  Selection.prototype = _defineProperty2({
    constructor: Selection,
    select: selection_select,
    selectAll: selection_selectAll,
    selectChild: selection_selectChild,
    selectChildren: selection_selectChildren,
    filter: selection_filter,
    data: selection_data,
    enter: selection_enter,
    exit: selection_exit,
    join: selection_join,
    merge: selection_merge,
    selection: selection_selection,
    order: selection_order,
    sort: selection_sort,
    call: selection_call,
    nodes: selection_nodes,
    node: selection_node,
    size: selection_size,
    empty: selection_empty,
    each: selection_each,
    attr: selection_attr,
    style: selection_style,
    property: selection_property,
    classed: selection_classed,
    text: selection_text,
    html: selection_html,
    raise: selection_raise,
    lower: selection_lower,
    append: selection_append,
    insert: selection_insert,
    remove: selection_remove,
    clone: selection_clone,
    datum: selection_datum,
    on: selection_on,
    dispatch: selection_dispatch
  }, Symbol.iterator, selection_iterator);

  function select(selector) {
    return typeof selector === "string" ? new Selection([[document.querySelector(selector)]], [document.documentElement]) : new Selection([[selector]], root);
  }

  function initRange(domain, range) {
    switch (arguments.length) {
      case 0:
        break;

      case 1:
        this.range(domain);
        break;

      default:
        this.range(range).domain(domain);
        break;
    }

    return this;
  }

  var implicit = Symbol("implicit");

  function ordinal() {
    var index = new Map(),
        domain = [],
        range = [],
        unknown = implicit;

    function scale(d) {
      var key = d + "",
          i = index.get(key);

      if (!i) {
        if (unknown !== implicit) return unknown;
        index.set(key, i = domain.push(d));
      }

      return range[(i - 1) % range.length];
    }

    scale.domain = function (_) {
      if (!arguments.length) return domain.slice();
      domain = [], index = new Map();

      var _iterator2 = _createForOfIteratorHelper(_),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var value = _step2.value;
          var key = value + "";
          if (index.has(key)) continue;
          index.set(key, domain.push(value));
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      return scale;
    };

    scale.range = function (_) {
      return arguments.length ? (range = Array.from(_), scale) : range.slice();
    };

    scale.unknown = function (_) {
      return arguments.length ? (unknown = _, scale) : unknown;
    };

    scale.copy = function () {
      return ordinal(domain, range).unknown(unknown);
    };

    initRange.apply(scale, arguments);
    return scale;
  }
  /**
      @namespace {Object} colorDefaults
      @desc A set of default color values used when assigning colors based on data.
        *
        * | Name | Default | Description |
        * |---|---|---|
        * | dark | "#555555" | Used in the [contrast](#contrast) function when the color given is very light. |
        * | light | "#f7f7f7" | Used in the [contrast](#contrast) function when the color given is very dark. |
        * | missing | "#cccccc" | Used in the [assign](#assign) function when the value passed is `null` or `undefined`. |
        * | off | "#C44536" | Used in the [assign](#assign) function when the value passed is `false`. |
        * | on | "#6A994E" | Used in the [assign](#assign) function when the value passed is `true`. |
        * | scale | "#4281A4", "#F6AE2D", "#C44536", "#2A9D8F", "#6A994E", "#CEB54A", "#5E548E", "#C08497", "#99582A", "#8C8C99", "#1D3557", "#D08C60", "#6D2E46", "#8BB19C", "#52796F", "#5E60CE", "#985277", "#5C374C" | An ordinal scale used in the [assign](#assign) function for non-valid color strings and numbers. |
  */


  var defaults = {
    dark: "#555555",
    light: "#f7f7f7",
    missing: "#cccccc",
    off: "#C44536",
    on: "#6A994E",
    scale: ordinal().range(["#4281A4", "#F6AE2D", "#C44536", "#2A9D8F", "#6A994E", "#CEB54A", "#5E548E", "#C08497", "#99582A", "#8C8C99", "#1D3557", "#D08C60", "#6D2E46", "#8BB19C", "#52796F", "#5E60CE", "#985277", "#5C374C"])
  };
  /**
      @function accessor
      @desc Wraps an object key in a simple accessor function.
      @param {String} key The key to be returned from each Object passed to the function.
      @param {*} [def] A default value to be returned if the key is not present.
      @example <caption>this</caption>
  accessor("id");
      @example <caption>returns this</caption>
  function(d) {
    return d["id"];
  }
  */

  function accessor(key, def) {
    if (def === void 0) return function (d) {
      return d[key];
    };
    return function (d) {
      return d[key] === void 0 ? def : d[key];
    };
  }

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }
  /**
      @function isObject
      @desc Detects if a variable is a javascript Object.
      @param {*} item
  */


  function isObject(item) {
    return item && _typeof(item) === "object" && (typeof window === "undefined" || item !== window && item !== window.document && !(item instanceof Element)) && !Array.isArray(item) ? true : false;
  }
  /**
      @function validObject
      @desc Determines if the object passed is the document or window.
      @param {Object} obj
      @private
  */


  function validObject(obj) {
    if (typeof window === "undefined") return true;else return obj !== window && obj !== document;
  }
  /**
      @function assign
      @desc A deeply recursive version of `Object.assign`.
      @param {...Object} objects
      @example <caption>this</caption>
  assign({id: "foo", deep: {group: "A"}}, {id: "bar", deep: {value: 20}}));
      @example <caption>returns this</caption>
  {id: "bar", deep: {group: "A", value: 20}}
  */


  function assign() {
    var _arguments = arguments;
    var target = arguments.length <= 0 ? undefined : arguments[0];

    var _loop = function _loop(i) {
      var source = i < 0 || _arguments.length <= i ? undefined : _arguments[i];
      Object.keys(source).forEach(function (prop) {
        var value = source[prop];

        if (isObject(value) && validObject(value)) {
          if (target.hasOwnProperty(prop) && isObject(target[prop])) target[prop] = assign({}, target[prop], value);else target[prop] = assign({}, value);
        } else if (Array.isArray(value)) target[prop] = value.slice();else target[prop] = value;
      });
    };

    for (var i = 1; i < arguments.length; i++) {
      _loop(i);
    }

    return target;
  }

  var aa = {
    language: "Afar",
    location: null,
    id: 4096,
    tag: "aa",
    version: "Release 10"
  };
  var af = {
    language: "Afrikaans",
    location: null,
    id: 54,
    tag: "af",
    version: "Release 7"
  };
  var agq = {
    language: "Aghem",
    location: null,
    id: 4096,
    tag: "agq",
    version: "Release 10"
  };
  var ak = {
    language: "Akan",
    location: null,
    id: 4096,
    tag: "ak",
    version: "Release 10"
  };
  var sq = {
    language: "Albanian",
    location: null,
    id: 28,
    tag: "sq",
    version: "Release 7"
  };
  var gsw = {
    language: "Alsatian",
    location: null,
    id: 132,
    tag: "gsw",
    version: "Release 7"
  };
  var am = {
    language: "Amharic",
    location: null,
    id: 94,
    tag: "am",
    version: "Release 7"
  };
  var ar = {
    language: "Arabic",
    location: null,
    id: 1,
    tag: "ar",
    version: "Release 7"
  };
  var hy = {
    language: "Armenian",
    location: null,
    id: 43,
    tag: "hy",
    version: "Release 7"
  };
  var as = {
    language: "Assamese",
    location: null,
    id: 77,
    tag: "as",
    version: "Release 7"
  };
  var ast = {
    language: "Asturian",
    location: null,
    id: 4096,
    tag: "ast",
    version: "Release 10"
  };
  var asa = {
    language: "Asu",
    location: null,
    id: 4096,
    tag: "asa",
    version: "Release 10"
  };
  var az = {
    language: "Azerbaijani (Latin)",
    location: null,
    id: 44,
    tag: "az",
    version: "Release 7"
  };
  var ksf = {
    language: "Bafia",
    location: null,
    id: 4096,
    tag: "ksf",
    version: "Release 10"
  };
  var bm = {
    language: "Bamanankan",
    location: null,
    id: 4096,
    tag: "bm",
    version: "Release 10"
  };
  var bn = {
    language: "Bangla",
    location: null,
    id: 69,
    tag: "bn",
    version: "Release 7"
  };
  var bas = {
    language: "Basaa",
    location: null,
    id: 4096,
    tag: "bas",
    version: "Release 10"
  };
  var ba = {
    language: "Bashkir",
    location: null,
    id: 109,
    tag: "ba",
    version: "Release 7"
  };
  var eu = {
    language: "Basque",
    location: null,
    id: 45,
    tag: "eu",
    version: "Release 7"
  };
  var be = {
    language: "Belarusian",
    location: null,
    id: 35,
    tag: "be",
    version: "Release 7"
  };
  var bem = {
    language: "Bemba",
    location: null,
    id: 4096,
    tag: "bem",
    version: "Release 10"
  };
  var bez = {
    language: "Bena",
    location: null,
    id: 4096,
    tag: "bez",
    version: "Release 10"
  };
  var byn = {
    language: "Blin",
    location: null,
    id: 4096,
    tag: "byn",
    version: "Release 10"
  };
  var brx = {
    language: "Bodo",
    location: null,
    id: 4096,
    tag: "brx",
    version: "Release 10"
  };
  var bs = {
    language: "Bosnian (Latin)",
    location: null,
    id: 30746,
    tag: "bs",
    version: "Release 7"
  };
  var br = {
    language: "Breton",
    location: null,
    id: 126,
    tag: "br",
    version: "Release 7"
  };
  var bg = {
    language: "Bulgarian",
    location: null,
    id: 2,
    tag: "bg",
    version: "Release 7"
  };
  var my = {
    language: "Burmese",
    location: null,
    id: 85,
    tag: "my",
    version: "Release 8.1"
  };
  var ca = {
    language: "Catalan",
    location: null,
    id: 3,
    tag: "ca",
    version: "Release 7"
  };
  var ceb = {
    language: "Cebuano",
    location: null,
    id: 4096,
    tag: "ceb",
    version: "Release 10.5"
  };
  var ku = {
    language: "Central Kurdish",
    location: null,
    id: 146,
    tag: "ku",
    version: "Release 8"
  };
  var ccp = {
    language: "Chakma",
    location: null,
    id: 4096,
    tag: "ccp",
    version: "Release 10.5"
  };
  var chr = {
    language: "Cherokee",
    location: null,
    id: 92,
    tag: "chr",
    version: "Release 8"
  };
  var cgg = {
    language: "Chiga",
    location: null,
    id: 4096,
    tag: "cgg",
    version: "Release 10"
  };
  var zh = {
    language: "Chinese (Simplified)",
    location: null,
    id: 30724,
    tag: "zh",
    version: "Windows 7"
  };
  var swc = {
    language: "Congo Swahili",
    location: null,
    id: 4096,
    tag: "swc",
    version: "Release 10"
  };
  var kw = {
    language: "Cornish",
    location: null,
    id: 4096,
    tag: "kw",
    version: "Release 10"
  };
  var co = {
    language: "Corsican",
    location: null,
    id: 131,
    tag: "co",
    version: "Release 7"
  };
  var cs = {
    language: "Czech",
    location: null,
    id: 5,
    tag: "cs",
    version: "Release 7"
  };
  var da = {
    language: "Danish",
    location: null,
    id: 6,
    tag: "da",
    version: "Release 7"
  };
  var prs = {
    language: "Dari",
    location: null,
    id: 140,
    tag: "prs",
    version: "Release 7"
  };
  var dv = {
    language: "Divehi",
    location: null,
    id: 101,
    tag: "dv",
    version: "Release 7"
  };
  var dua = {
    language: "Duala",
    location: null,
    id: 4096,
    tag: "dua",
    version: "Release 10"
  };
  var nl = {
    language: "Dutch",
    location: null,
    id: 19,
    tag: "nl",
    version: "Release 7"
  };
  var dz = {
    language: "Dzongkha",
    location: null,
    id: 4096,
    tag: "dz",
    version: "Release 10"
  };
  var ebu = {
    language: "Embu",
    location: null,
    id: 4096,
    tag: "ebu",
    version: "Release 10"
  };
  var en = {
    language: "English",
    location: null,
    id: 9,
    tag: "en",
    version: "Release 7"
  };
  var eo = {
    language: "Esperanto",
    location: null,
    id: 4096,
    tag: "eo",
    version: "Release 10"
  };
  var et = {
    language: "Estonian",
    location: null,
    id: 37,
    tag: "et",
    version: "Release 7"
  };
  var ee = {
    language: "Ewe",
    location: null,
    id: 4096,
    tag: "ee",
    version: "Release 10"
  };
  var ewo = {
    language: "Ewondo",
    location: null,
    id: 4096,
    tag: "ewo",
    version: "Release 10"
  };
  var fo = {
    language: "Faroese",
    location: null,
    id: 56,
    tag: "fo",
    version: "Release 7"
  };
  var fil = {
    language: "Filipino",
    location: null,
    id: 100,
    tag: "fil",
    version: "Release 7"
  };
  var fi = {
    language: "Finnish",
    location: null,
    id: 11,
    tag: "fi",
    version: "Release 7"
  };
  var fr = {
    language: "French",
    location: null,
    id: 12,
    tag: "fr",
    version: "Release 7"
  };
  var fy = {
    language: "Frisian",
    location: null,
    id: 98,
    tag: "fy",
    version: "Release 7"
  };
  var fur = {
    language: "Friulian",
    location: null,
    id: 4096,
    tag: "fur",
    version: "Release 10"
  };
  var ff = {
    language: "Fulah",
    location: null,
    id: 103,
    tag: "ff",
    version: "Release 8"
  };
  var gl = {
    language: "Galician",
    location: null,
    id: 86,
    tag: "gl",
    version: "Release 7"
  };
  var lg = {
    language: "Ganda",
    location: null,
    id: 4096,
    tag: "lg",
    version: "Release 10"
  };
  var ka = {
    language: "Georgian",
    location: null,
    id: 55,
    tag: "ka",
    version: "Release 7"
  };
  var de = {
    language: "German",
    location: null,
    id: 7,
    tag: "de",
    version: "Release 7"
  };
  var el = {
    language: "Greek",
    location: null,
    id: 8,
    tag: "el",
    version: "Release 7"
  };
  var kl = {
    language: "Greenlandic",
    location: null,
    id: 111,
    tag: "kl",
    version: "Release 7"
  };
  var gn = {
    language: "Guarani",
    location: null,
    id: 116,
    tag: "gn",
    version: "Release 8.1"
  };
  var gu = {
    language: "Gujarati",
    location: null,
    id: 71,
    tag: "gu",
    version: "Release 7"
  };
  var guz = {
    language: "Gusii",
    location: null,
    id: 4096,
    tag: "guz",
    version: "Release 10"
  };
  var ha = {
    language: "Hausa (Latin)",
    location: null,
    id: 104,
    tag: "ha",
    version: "Release 7"
  };
  var haw = {
    language: "Hawaiian",
    location: null,
    id: 117,
    tag: "haw",
    version: "Release 8"
  };
  var he = {
    language: "Hebrew",
    location: null,
    id: 13,
    tag: "he",
    version: "Release 7"
  };
  var hi = {
    language: "Hindi",
    location: null,
    id: 57,
    tag: "hi",
    version: "Release 7"
  };
  var hu = {
    language: "Hungarian",
    location: null,
    id: 14,
    tag: "hu",
    version: "Release 7"
  };
  var is = {
    language: "Icelandic",
    location: null,
    id: 15,
    tag: "is",
    version: "Release 7"
  };
  var ig = {
    language: "Igbo",
    location: null,
    id: 112,
    tag: "ig",
    version: "Release 7"
  };
  var id = {
    language: "Indonesian",
    location: null,
    id: 33,
    tag: "id",
    version: "Release 7"
  };
  var ia = {
    language: "Interlingua",
    location: null,
    id: 4096,
    tag: "ia",
    version: "Release 10"
  };
  var iu = {
    language: "Inuktitut (Latin)",
    location: null,
    id: 93,
    tag: "iu",
    version: "Release 7"
  };
  var ga = {
    language: "Irish",
    location: null,
    id: 60,
    tag: "ga",
    version: "Windows 7"
  };
  var it = {
    language: "Italian",
    location: null,
    id: 16,
    tag: "it",
    version: "Release 7"
  };
  var ja = {
    language: "Japanese",
    location: null,
    id: 17,
    tag: "ja",
    version: "Release 7"
  };
  var jv = {
    language: "Javanese",
    location: null,
    id: 4096,
    tag: "jv",
    version: "Release 8.1"
  };
  var dyo = {
    language: "Jola-Fonyi",
    location: null,
    id: 4096,
    tag: "dyo",
    version: "Release 10"
  };
  var kea = {
    language: "Kabuverdianu",
    location: null,
    id: 4096,
    tag: "kea",
    version: "Release 10"
  };
  var kab = {
    language: "Kabyle",
    location: null,
    id: 4096,
    tag: "kab",
    version: "Release 10"
  };
  var kkj = {
    language: "Kako",
    location: null,
    id: 4096,
    tag: "kkj",
    version: "Release 10"
  };
  var kln = {
    language: "Kalenjin",
    location: null,
    id: 4096,
    tag: "kln",
    version: "Release 10"
  };
  var kam = {
    language: "Kamba",
    location: null,
    id: 4096,
    tag: "kam",
    version: "Release 10"
  };
  var kn = {
    language: "Kannada",
    location: null,
    id: 75,
    tag: "kn",
    version: "Release 7"
  };
  var ks = {
    language: "Kashmiri",
    location: null,
    id: 96,
    tag: "ks",
    version: "Release 10"
  };
  var kk = {
    language: "Kazakh",
    location: null,
    id: 63,
    tag: "kk",
    version: "Release 7"
  };
  var km = {
    language: "Khmer",
    location: null,
    id: 83,
    tag: "km",
    version: "Release 7"
  };
  var quc = {
    language: "K'iche",
    location: null,
    id: 134,
    tag: "quc",
    version: "Release 10"
  };
  var ki = {
    language: "Kikuyu",
    location: null,
    id: 4096,
    tag: "ki",
    version: "Release 10"
  };
  var rw = {
    language: "Kinyarwanda",
    location: null,
    id: 135,
    tag: "rw",
    version: "Release 7"
  };
  var sw = {
    language: "Kiswahili",
    location: null,
    id: 65,
    tag: "sw",
    version: "Release 7"
  };
  var kok = {
    language: "Konkani",
    location: null,
    id: 87,
    tag: "kok",
    version: "Release 7"
  };
  var ko = {
    language: "Korean",
    location: null,
    id: 18,
    tag: "ko",
    version: "Release 7"
  };
  var khq = {
    language: "Koyra Chiini",
    location: null,
    id: 4096,
    tag: "khq",
    version: "Release 10"
  };
  var ses = {
    language: "Koyraboro Senni",
    location: null,
    id: 4096,
    tag: "ses",
    version: "Release 10"
  };
  var nmg = {
    language: "Kwasio",
    location: null,
    id: 4096,
    tag: "nmg",
    version: "Release 10"
  };
  var ky = {
    language: "Kyrgyz",
    location: null,
    id: 64,
    tag: "ky",
    version: "Release 7"
  };
  var lkt = {
    language: "Lakota",
    location: null,
    id: 4096,
    tag: "lkt",
    version: "Release 10"
  };
  var lag = {
    language: "Langi",
    location: null,
    id: 4096,
    tag: "lag",
    version: "Release 10"
  };
  var lo = {
    language: "Lao",
    location: null,
    id: 84,
    tag: "lo",
    version: "Release 7"
  };
  var lv = {
    language: "Latvian",
    location: null,
    id: 38,
    tag: "lv",
    version: "Release 7"
  };
  var ln = {
    language: "Lingala",
    location: null,
    id: 4096,
    tag: "ln",
    version: "Release 10"
  };
  var lt = {
    language: "Lithuanian",
    location: null,
    id: 39,
    tag: "lt",
    version: "Release 7"
  };
  var nds = {
    language: "Low German",
    location: null,
    id: 4096,
    tag: "nds",
    version: "Release 10.2"
  };
  var dsb = {
    language: "Lower Sorbian",
    location: null,
    id: 31790,
    tag: "dsb",
    version: "Windows 7"
  };
  var lu = {
    language: "Luba-Katanga",
    location: null,
    id: 4096,
    tag: "lu",
    version: "Release 10"
  };
  var luo = {
    language: "Luo",
    location: null,
    id: 4096,
    tag: "luo",
    version: "Release 10"
  };
  var lb = {
    language: "Luxembourgish",
    location: null,
    id: 110,
    tag: "lb",
    version: "Release 7"
  };
  var luy = {
    language: "Luyia",
    location: null,
    id: 4096,
    tag: "luy",
    version: "Release 10"
  };
  var mk = {
    language: "Macedonian",
    location: null,
    id: 47,
    tag: "mk",
    version: "Release 7"
  };
  var jmc = {
    language: "Machame",
    location: null,
    id: 4096,
    tag: "jmc",
    version: "Release 10"
  };
  var mgh = {
    language: "Makhuwa-Meetto",
    location: null,
    id: 4096,
    tag: "mgh",
    version: "Release 10"
  };
  var kde = {
    language: "Makonde",
    location: null,
    id: 4096,
    tag: "kde",
    version: "Release 10"
  };
  var mg = {
    language: "Malagasy",
    location: null,
    id: 4096,
    tag: "mg",
    version: "Release 8.1"
  };
  var ms = {
    language: "Malay",
    location: null,
    id: 62,
    tag: "ms",
    version: "Release 7"
  };
  var ml = {
    language: "Malayalam",
    location: null,
    id: 76,
    tag: "ml",
    version: "Release 7"
  };
  var mt = {
    language: "Maltese",
    location: null,
    id: 58,
    tag: "mt",
    version: "Release 7"
  };
  var gv = {
    language: "Manx",
    location: null,
    id: 4096,
    tag: "gv",
    version: "Release 10"
  };
  var mi = {
    language: "Maori",
    location: null,
    id: 129,
    tag: "mi",
    version: "Release 7"
  };
  var arn = {
    language: "Mapudungun",
    location: null,
    id: 122,
    tag: "arn",
    version: "Release 7"
  };
  var mr = {
    language: "Marathi",
    location: null,
    id: 78,
    tag: "mr",
    version: "Release 7"
  };
  var mas = {
    language: "Masai",
    location: null,
    id: 4096,
    tag: "mas",
    version: "Release 10"
  };
  var mer = {
    language: "Meru",
    location: null,
    id: 4096,
    tag: "mer",
    version: "Release 10"
  };
  var mgo = {
    language: "Meta'",
    location: null,
    id: 4096,
    tag: "mgo",
    version: "Release 10"
  };
  var moh = {
    language: "Mohawk",
    location: null,
    id: 124,
    tag: "moh",
    version: "Release 7"
  };
  var mn = {
    language: "Mongolian (Cyrillic)",
    location: null,
    id: 80,
    tag: "mn",
    version: "Release 7"
  };
  var mfe = {
    language: "Morisyen",
    location: null,
    id: 4096,
    tag: "mfe",
    version: "Release 10"
  };
  var mua = {
    language: "Mundang",
    location: null,
    id: 4096,
    tag: "mua",
    version: "Release 10"
  };
  var nqo = {
    language: "N'ko",
    location: null,
    id: 4096,
    tag: "nqo",
    version: "Release 8.1"
  };
  var naq = {
    language: "Nama",
    location: null,
    id: 4096,
    tag: "naq",
    version: "Release 10"
  };
  var ne = {
    language: "Nepali",
    location: null,
    id: 97,
    tag: "ne",
    version: "Release 7"
  };
  var nnh = {
    language: "Ngiemboon",
    location: null,
    id: 4096,
    tag: "nnh",
    version: "Release 10"
  };
  var jgo = {
    language: "Ngomba",
    location: null,
    id: 4096,
    tag: "jgo",
    version: "Release 10"
  };
  var nd = {
    language: "North Ndebele",
    location: null,
    id: 4096,
    tag: "nd",
    version: "Release 10"
  };
  var no = {
    language: "Norwegian (Bokmal)",
    location: null,
    id: 20,
    tag: "no",
    version: "Release 7"
  };
  var nb = {
    language: "Norwegian (Bokmal)",
    location: null,
    id: 31764,
    tag: "nb",
    version: "Release 7"
  };
  var nn = {
    language: "Norwegian (Nynorsk)",
    location: null,
    id: 30740,
    tag: "nn",
    version: "Release 7"
  };
  var nus = {
    language: "Nuer",
    location: null,
    id: 4096,
    tag: "nus",
    version: "Release 10"
  };
  var nyn = {
    language: "Nyankole",
    location: null,
    id: 4096,
    tag: "nyn",
    version: "Release 10"
  };
  var oc = {
    language: "Occitan",
    location: null,
    id: 130,
    tag: "oc",
    version: "Release 7"
  };
  var or = {
    language: "Odia",
    location: null,
    id: 72,
    tag: "or",
    version: "Release 7"
  };
  var om = {
    language: "Oromo",
    location: null,
    id: 114,
    tag: "om",
    version: "Release 8.1"
  };
  var os = {
    language: "Ossetian",
    location: null,
    id: 4096,
    tag: "os",
    version: "Release 10"
  };
  var ps = {
    language: "Pashto",
    location: null,
    id: 99,
    tag: "ps",
    version: "Release 7"
  };
  var fa = {
    language: "Persian",
    location: null,
    id: 41,
    tag: "fa",
    version: "Release 7"
  };
  var pl = {
    language: "Polish",
    location: null,
    id: 21,
    tag: "pl",
    version: "Release 7"
  };
  var pt = {
    language: "Portuguese",
    location: null,
    id: 22,
    tag: "pt",
    version: "Release 7"
  };
  var pa = {
    language: "Punjabi",
    location: null,
    id: 70,
    tag: "pa",
    version: "Release 7"
  };
  var quz = {
    language: "Quechua",
    location: null,
    id: 107,
    tag: "quz",
    version: "Release 7"
  };
  var ksh = {
    language: "Ripuarian",
    location: null,
    id: 4096,
    tag: "ksh",
    version: "Release 10"
  };
  var ro = {
    language: "Romanian",
    location: null,
    id: 24,
    tag: "ro",
    version: "Release 7"
  };
  var rm = {
    language: "Romansh",
    location: null,
    id: 23,
    tag: "rm",
    version: "Release 7"
  };
  var rof = {
    language: "Rombo",
    location: null,
    id: 4096,
    tag: "rof",
    version: "Release 10"
  };
  var rn = {
    language: "Rundi",
    location: null,
    id: 4096,
    tag: "rn",
    version: "Release 10"
  };
  var ru = {
    language: "Russian",
    location: null,
    id: 25,
    tag: "ru",
    version: "Release 7"
  };
  var rwk = {
    language: "Rwa",
    location: null,
    id: 4096,
    tag: "rwk",
    version: "Release 10"
  };
  var ssy = {
    language: "Saho",
    location: null,
    id: 4096,
    tag: "ssy",
    version: "Release 10"
  };
  var sah = {
    language: "Sakha",
    location: null,
    id: 133,
    tag: "sah",
    version: "Release 7"
  };
  var saq = {
    language: "Samburu",
    location: null,
    id: 4096,
    tag: "saq",
    version: "Release 10"
  };
  var smn = {
    language: "Sami (Inari)",
    location: null,
    id: 28731,
    tag: "smn",
    version: "Windows 7"
  };
  var smj = {
    language: "Sami (Lule)",
    location: null,
    id: 31803,
    tag: "smj",
    version: "Windows 7"
  };
  var se = {
    language: "Sami (Northern)",
    location: null,
    id: 59,
    tag: "se",
    version: "Release 7"
  };
  var sms = {
    language: "Sami (Skolt)",
    location: null,
    id: 29755,
    tag: "sms",
    version: "Windows 7"
  };
  var sma = {
    language: "Sami (Southern)",
    location: null,
    id: 30779,
    tag: "sma",
    version: "Windows 7"
  };
  var sg = {
    language: "Sango",
    location: null,
    id: 4096,
    tag: "sg",
    version: "Release 10"
  };
  var sbp = {
    language: "Sangu",
    location: null,
    id: 4096,
    tag: "sbp",
    version: "Release 10"
  };
  var sa = {
    language: "Sanskrit",
    location: null,
    id: 79,
    tag: "sa",
    version: "Release 7"
  };
  var gd = {
    language: "Scottish Gaelic",
    location: null,
    id: 145,
    tag: "gd",
    version: "Windows 7"
  };
  var seh = {
    language: "Sena",
    location: null,
    id: 4096,
    tag: "seh",
    version: "Release 10"
  };
  var sr = {
    language: "Serbian (Latin)",
    location: null,
    id: 31770,
    tag: "sr",
    version: "Release 7"
  };
  var nso = {
    language: "Sesotho sa Leboa",
    location: null,
    id: 108,
    tag: "nso",
    version: "Release 7"
  };
  var tn = {
    language: "Setswana",
    location: null,
    id: 50,
    tag: "tn",
    version: "Release 7"
  };
  var ksb = {
    language: "Shambala",
    location: null,
    id: 4096,
    tag: "ksb",
    version: "Release 10"
  };
  var sn = {
    language: "Shona",
    location: null,
    id: 4096,
    tag: "sn",
    version: "Release 8.1"
  };
  var sd = {
    language: "Sindhi",
    location: null,
    id: 89,
    tag: "sd",
    version: "Release 8"
  };
  var si = {
    language: "Sinhala",
    location: null,
    id: 91,
    tag: "si",
    version: "Release 7"
  };
  var sk = {
    language: "Slovak",
    location: null,
    id: 27,
    tag: "sk",
    version: "Release 7"
  };
  var sl = {
    language: "Slovenian",
    location: null,
    id: 36,
    tag: "sl",
    version: "Release 7"
  };
  var xog = {
    language: "Soga",
    location: null,
    id: 4096,
    tag: "xog",
    version: "Release 10"
  };
  var so = {
    language: "Somali",
    location: null,
    id: 119,
    tag: "so",
    version: "Release 8.1"
  };
  var st = {
    language: "Sotho",
    location: null,
    id: 48,
    tag: "st",
    version: "Release 8.1"
  };
  var nr = {
    language: "South Ndebele",
    location: null,
    id: 4096,
    tag: "nr",
    version: "Release 10"
  };
  var es = {
    language: "Spanish",
    location: null,
    id: 10,
    tag: "es",
    version: "Release 7"
  };
  var zgh = {
    language: "Standard Moroccan Tamazight",
    location: null,
    id: 4096,
    tag: "zgh",
    version: "Release 8.1"
  };
  var ss = {
    language: "Swati",
    location: null,
    id: 4096,
    tag: "ss",
    version: "Release 10"
  };
  var sv = {
    language: "Swedish",
    location: null,
    id: 29,
    tag: "sv",
    version: "Release 7"
  };
  var syr = {
    language: "Syriac",
    location: null,
    id: 90,
    tag: "syr",
    version: "Release 7"
  };
  var shi = {
    language: "Tachelhit",
    location: null,
    id: 4096,
    tag: "shi",
    version: "Release 10"
  };
  var dav = {
    language: "Taita",
    location: null,
    id: 4096,
    tag: "dav",
    version: "Release 10"
  };
  var tg = {
    language: "Tajik (Cyrillic)",
    location: null,
    id: 40,
    tag: "tg",
    version: "Release 7"
  };
  var tzm = {
    language: "Tamazight (Latin)",
    location: null,
    id: 95,
    tag: "tzm",
    version: "Release 7"
  };
  var ta = {
    language: "Tamil",
    location: null,
    id: 73,
    tag: "ta",
    version: "Release 7"
  };
  var twq = {
    language: "Tasawaq",
    location: null,
    id: 4096,
    tag: "twq",
    version: "Release 10"
  };
  var tt = {
    language: "Tatar",
    location: null,
    id: 68,
    tag: "tt",
    version: "Release 7"
  };
  var te = {
    language: "Telugu",
    location: null,
    id: 74,
    tag: "te",
    version: "Release 7"
  };
  var teo = {
    language: "Teso",
    location: null,
    id: 4096,
    tag: "teo",
    version: "Release 10"
  };
  var th = {
    language: "Thai",
    location: null,
    id: 30,
    tag: "th",
    version: "Release 7"
  };
  var bo = {
    language: "Tibetan",
    location: null,
    id: 81,
    tag: "bo",
    version: "Release 7"
  };
  var tig = {
    language: "Tigre",
    location: null,
    id: 4096,
    tag: "tig",
    version: "Release 10"
  };
  var ti = {
    language: "Tigrinya",
    location: null,
    id: 115,
    tag: "ti",
    version: "Release 8"
  };
  var to = {
    language: "Tongan",
    location: null,
    id: 4096,
    tag: "to",
    version: "Release 10"
  };
  var ts = {
    language: "Tsonga",
    location: null,
    id: 49,
    tag: "ts",
    version: "Release 8.1"
  };
  var tr = {
    language: "Turkish",
    location: null,
    id: 31,
    tag: "tr",
    version: "Release 7"
  };
  var tk = {
    language: "Turkmen",
    location: null,
    id: 66,
    tag: "tk",
    version: "Release 7"
  };
  var uk = {
    language: "Ukrainian",
    location: null,
    id: 34,
    tag: "uk",
    version: "Release 7"
  };
  var hsb = {
    language: "Upper Sorbian",
    location: null,
    id: 46,
    tag: "hsb",
    version: "Release 7"
  };
  var ur = {
    language: "Urdu",
    location: null,
    id: 32,
    tag: "ur",
    version: "Release 7"
  };
  var ug = {
    language: "Uyghur",
    location: null,
    id: 128,
    tag: "ug",
    version: "Release 7"
  };
  var uz = {
    language: "Uzbek (Latin)",
    location: null,
    id: 67,
    tag: "uz",
    version: "Release 7"
  };
  var vai = {
    language: "Vai",
    location: null,
    id: 4096,
    tag: "vai",
    version: "Release 10"
  };
  var ve = {
    language: "Venda",
    location: null,
    id: 51,
    tag: "ve",
    version: "Release 10"
  };
  var vi = {
    language: "Vietnamese",
    location: null,
    id: 42,
    tag: "vi",
    version: "Release 7"
  };
  var vo = {
    language: "Volapük",
    location: null,
    id: 4096,
    tag: "vo",
    version: "Release 10"
  };
  var vun = {
    language: "Vunjo",
    location: null,
    id: 4096,
    tag: "vun",
    version: "Release 10"
  };
  var wae = {
    language: "Walser",
    location: null,
    id: 4096,
    tag: "wae",
    version: "Release 10"
  };
  var cy = {
    language: "Welsh",
    location: null,
    id: 82,
    tag: "cy",
    version: "Release 7"
  };
  var wal = {
    language: "Wolaytta",
    location: null,
    id: 4096,
    tag: "wal",
    version: "Release 10"
  };
  var wo = {
    language: "Wolof",
    location: null,
    id: 136,
    tag: "wo",
    version: "Release 7"
  };
  var xh = {
    language: "Xhosa",
    location: null,
    id: 52,
    tag: "xh",
    version: "Release 7"
  };
  var yav = {
    language: "Yangben",
    location: null,
    id: 4096,
    tag: "yav",
    version: "Release 10"
  };
  var ii = {
    language: "Yi",
    location: null,
    id: 120,
    tag: "ii",
    version: "Release 7"
  };
  var yo = {
    language: "Yoruba",
    location: null,
    id: 106,
    tag: "yo",
    version: "Release 7"
  };
  var dje = {
    language: "Zarma",
    location: null,
    id: 4096,
    tag: "dje",
    version: "Release 10"
  };
  var zu = {
    language: "Zulu",
    location: null,
    id: 53,
    tag: "zu",
    version: "Release 7"
  };
  var lcid = {
    aa: aa,
    "aa-dj": {
      language: "Afar",
      location: "Djibouti",
      id: 4096,
      tag: "aa-DJ",
      version: "Release 10"
    },
    "aa-er": {
      language: "Afar",
      location: "Eritrea",
      id: 4096,
      tag: "aa-ER",
      version: "Release 10"
    },
    "aa-et": {
      language: "Afar",
      location: "Ethiopia",
      id: 4096,
      tag: "aa-ET",
      version: "Release 10"
    },
    af: af,
    "af-na": {
      language: "Afrikaans",
      location: "Namibia",
      id: 4096,
      tag: "af-NA",
      version: "Release 10"
    },
    "af-za": {
      language: "Afrikaans",
      location: "South Africa",
      id: 1078,
      tag: "af-ZA",
      version: "Release B"
    },
    agq: agq,
    "agq-cm": {
      language: "Aghem",
      location: "Cameroon",
      id: 4096,
      tag: "agq-CM",
      version: "Release 10"
    },
    ak: ak,
    "ak-gh": {
      language: "Akan",
      location: "Ghana",
      id: 4096,
      tag: "ak-GH",
      version: "Release 10"
    },
    sq: sq,
    "sq-al": {
      language: "Albanian",
      location: "Albania",
      id: 1052,
      tag: "sq-AL",
      version: "Release B"
    },
    "sq-mk": {
      language: "Albanian",
      location: "North Macedonia",
      id: 4096,
      tag: "sq-MK",
      version: "Release 10"
    },
    gsw: gsw,
    "gsw-fr": {
      language: "Alsatian",
      location: "France",
      id: 1156,
      tag: "gsw-FR",
      version: "Release V"
    },
    "gsw-li": {
      language: "Alsatian",
      location: "Liechtenstein",
      id: 4096,
      tag: "gsw-LI",
      version: "Release 10"
    },
    "gsw-ch": {
      language: "Alsatian",
      location: "Switzerland",
      id: 4096,
      tag: "gsw-CH",
      version: "Release 10"
    },
    am: am,
    "am-et": {
      language: "Amharic",
      location: "Ethiopia",
      id: 1118,
      tag: "am-ET",
      version: "Release V"
    },
    ar: ar,
    "ar-dz": {
      language: "Arabic",
      location: "Algeria",
      id: 5121,
      tag: "ar-DZ",
      version: "Release B"
    },
    "ar-bh": {
      language: "Arabic",
      location: "Bahrain",
      id: 15361,
      tag: "ar-BH",
      version: "Release B"
    },
    "ar-td": {
      language: "Arabic",
      location: "Chad",
      id: 4096,
      tag: "ar-TD",
      version: "Release 10"
    },
    "ar-km": {
      language: "Arabic",
      location: "Comoros",
      id: 4096,
      tag: "ar-KM",
      version: "Release 10"
    },
    "ar-dj": {
      language: "Arabic",
      location: "Djibouti",
      id: 4096,
      tag: "ar-DJ",
      version: "Release 10"
    },
    "ar-eg": {
      language: "Arabic",
      location: "Egypt",
      id: 3073,
      tag: "ar-EG",
      version: "Release B"
    },
    "ar-er": {
      language: "Arabic",
      location: "Eritrea",
      id: 4096,
      tag: "ar-ER",
      version: "Release 10"
    },
    "ar-iq": {
      language: "Arabic",
      location: "Iraq",
      id: 2049,
      tag: "ar-IQ",
      version: "Release B"
    },
    "ar-il": {
      language: "Arabic",
      location: "Israel",
      id: 4096,
      tag: "ar-IL",
      version: "Release 10"
    },
    "ar-jo": {
      language: "Arabic",
      location: "Jordan",
      id: 11265,
      tag: "ar-JO",
      version: "Release B"
    },
    "ar-kw": {
      language: "Arabic",
      location: "Kuwait",
      id: 13313,
      tag: "ar-KW",
      version: "Release B"
    },
    "ar-lb": {
      language: "Arabic",
      location: "Lebanon",
      id: 12289,
      tag: "ar-LB",
      version: "Release B"
    },
    "ar-ly": {
      language: "Arabic",
      location: "Libya",
      id: 4097,
      tag: "ar-LY",
      version: "Release B"
    },
    "ar-mr": {
      language: "Arabic",
      location: "Mauritania",
      id: 4096,
      tag: "ar-MR",
      version: "Release 10"
    },
    "ar-ma": {
      language: "Arabic",
      location: "Morocco",
      id: 6145,
      tag: "ar-MA",
      version: "Release B"
    },
    "ar-om": {
      language: "Arabic",
      location: "Oman",
      id: 8193,
      tag: "ar-OM",
      version: "Release B"
    },
    "ar-ps": {
      language: "Arabic",
      location: "Palestinian Authority",
      id: 4096,
      tag: "ar-PS",
      version: "Release 10"
    },
    "ar-qa": {
      language: "Arabic",
      location: "Qatar",
      id: 16385,
      tag: "ar-QA",
      version: "Release B"
    },
    "ar-sa": {
      language: "Arabic",
      location: "Saudi Arabia",
      id: 1025,
      tag: "ar-SA",
      version: "Release B"
    },
    "ar-so": {
      language: "Arabic",
      location: "Somalia",
      id: 4096,
      tag: "ar-SO",
      version: "Release 10"
    },
    "ar-ss": {
      language: "Arabic",
      location: "South Sudan",
      id: 4096,
      tag: "ar-SS",
      version: "Release 10"
    },
    "ar-sd": {
      language: "Arabic",
      location: "Sudan",
      id: 4096,
      tag: "ar-SD",
      version: "Release 10"
    },
    "ar-sy": {
      language: "Arabic",
      location: "Syria",
      id: 10241,
      tag: "ar-SY",
      version: "Release B"
    },
    "ar-tn": {
      language: "Arabic",
      location: "Tunisia",
      id: 7169,
      tag: "ar-TN",
      version: "Release B"
    },
    "ar-ae": {
      language: "Arabic",
      location: "U.A.E.",
      id: 14337,
      tag: "ar-AE",
      version: "Release B"
    },
    "ar-001": {
      language: "Arabic",
      location: "World",
      id: 4096,
      tag: "ar-001",
      version: "Release 10"
    },
    "ar-ye": {
      language: "Arabic",
      location: "Yemen",
      id: 9217,
      tag: "ar-YE",
      version: "Release B"
    },
    hy: hy,
    "hy-am": {
      language: "Armenian",
      location: "Armenia",
      id: 1067,
      tag: "hy-AM",
      version: "Release C"
    },
    as: as,
    "as-in": {
      language: "Assamese",
      location: "India",
      id: 1101,
      tag: "as-IN",
      version: "Release V"
    },
    ast: ast,
    "ast-es": {
      language: "Asturian",
      location: "Spain",
      id: 4096,
      tag: "ast-ES",
      version: "Release 10"
    },
    asa: asa,
    "asa-tz": {
      language: "Asu",
      location: "Tanzania",
      id: 4096,
      tag: "asa-TZ",
      version: "Release 10"
    },
    "az-cyrl": {
      language: "Azerbaijani (Cyrillic)",
      location: null,
      id: 29740,
      tag: "az-Cyrl",
      version: "Windows 7"
    },
    "az-cyrl-az": {
      language: "Azerbaijani (Cyrillic)",
      location: "Azerbaijan",
      id: 2092,
      tag: "az-Cyrl-AZ",
      version: "Release C"
    },
    az: az,
    "az-latn": {
      language: "Azerbaijani (Latin)",
      location: null,
      id: 30764,
      tag: "az-Latn",
      version: "Windows 7"
    },
    "az-latn-az": {
      language: "Azerbaijani (Latin)",
      location: "Azerbaijan",
      id: 1068,
      tag: "az-Latn-AZ",
      version: "Release C"
    },
    ksf: ksf,
    "ksf-cm": {
      language: "Bafia",
      location: "Cameroon",
      id: 4096,
      tag: "ksf-CM",
      version: "Release 10"
    },
    bm: bm,
    "bm-latn-ml": {
      language: "Bamanankan (Latin)",
      location: "Mali",
      id: 4096,
      tag: "bm-Latn-ML",
      version: "Release 10"
    },
    bn: bn,
    "bn-bd": {
      language: "Bangla",
      location: "Bangladesh",
      id: 2117,
      tag: "bn-BD",
      version: "Release V"
    },
    "bn-in": {
      language: "Bangla",
      location: "India",
      id: 1093,
      tag: "bn-IN",
      version: "Release E1"
    },
    bas: bas,
    "bas-cm": {
      language: "Basaa",
      location: "Cameroon",
      id: 4096,
      tag: "bas-CM",
      version: "Release 10"
    },
    ba: ba,
    "ba-ru": {
      language: "Bashkir",
      location: "Russia",
      id: 1133,
      tag: "ba-RU",
      version: "Release V"
    },
    eu: eu,
    "eu-es": {
      language: "Basque",
      location: "Spain",
      id: 1069,
      tag: "eu-ES",
      version: "Release B"
    },
    be: be,
    "be-by": {
      language: "Belarusian",
      location: "Belarus",
      id: 1059,
      tag: "be-BY",
      version: "Release B"
    },
    bem: bem,
    "bem-zm": {
      language: "Bemba",
      location: "Zambia",
      id: 4096,
      tag: "bem-ZM",
      version: "Release 10"
    },
    bez: bez,
    "bez-tz": {
      language: "Bena",
      location: "Tanzania",
      id: 4096,
      tag: "bez-TZ",
      version: "Release 10"
    },
    byn: byn,
    "byn-er": {
      language: "Blin",
      location: "Eritrea",
      id: 4096,
      tag: "byn-ER",
      version: "Release 10"
    },
    brx: brx,
    "brx-in": {
      language: "Bodo",
      location: "India",
      id: 4096,
      tag: "brx-IN",
      version: "Release 10"
    },
    "bs-cyrl": {
      language: "Bosnian (Cyrillic)",
      location: null,
      id: 25626,
      tag: "bs-Cyrl",
      version: "Windows 7"
    },
    "bs-cyrl-ba": {
      language: "Bosnian (Cyrillic)",
      location: "Bosnia and Herzegovina",
      id: 8218,
      tag: "bs-Cyrl-BA",
      version: "Release E1"
    },
    "bs-latn": {
      language: "Bosnian (Latin)",
      location: null,
      id: 26650,
      tag: "bs-Latn",
      version: "Windows 7"
    },
    bs: bs,
    "bs-latn-ba": {
      language: "Bosnian (Latin)",
      location: "Bosnia and Herzegovina",
      id: 5146,
      tag: "bs-Latn-BA",
      version: "Release E1"
    },
    br: br,
    "br-fr": {
      language: "Breton",
      location: "France",
      id: 1150,
      tag: "br-FR",
      version: "Release V"
    },
    bg: bg,
    "bg-bg": {
      language: "Bulgarian",
      location: "Bulgaria",
      id: 1026,
      tag: "bg-BG",
      version: "Release B"
    },
    my: my,
    "my-mm": {
      language: "Burmese",
      location: "Myanmar",
      id: 1109,
      tag: "my-MM",
      version: "Release 8.1"
    },
    ca: ca,
    "ca-ad": {
      language: "Catalan",
      location: "Andorra",
      id: 4096,
      tag: "ca-AD",
      version: "Release 10"
    },
    "ca-fr": {
      language: "Catalan",
      location: "France",
      id: 4096,
      tag: "ca-FR",
      version: "Release 10"
    },
    "ca-it": {
      language: "Catalan",
      location: "Italy",
      id: 4096,
      tag: "ca-IT",
      version: "Release 10"
    },
    "ca-es": {
      language: "Catalan",
      location: "Spain",
      id: 1027,
      tag: "ca-ES",
      version: "Release B"
    },
    ceb: ceb,
    "ceb-latn": {
      language: "Cebuan (Latin)",
      location: null,
      id: 4096,
      tag: "ceb-Latn",
      version: "Release 10.5"
    },
    "ceb-latn-ph": {
      language: "Cebuan (Latin)",
      location: "Philippines",
      id: 4096,
      tag: "ceb-Latn-PH",
      version: "Release 10.5"
    },
    "tzm-latn-": {
      language: "Central Atlas Tamazight (Latin)",
      location: "Morocco",
      id: 4096,
      tag: "tzm-Latn-",
      version: "Release 10"
    },
    ku: ku,
    "ku-arab": {
      language: "Central Kurdish",
      location: null,
      id: 31890,
      tag: "ku-Arab",
      version: "Release 8"
    },
    "ku-arab-iq": {
      language: "Central Kurdish",
      location: "Iraq",
      id: 1170,
      tag: "ku-Arab-IQ",
      version: "Release 8"
    },
    ccp: ccp,
    "ccp-cakm": {
      language: "Chakma",
      location: "Chakma",
      id: 4096,
      tag: "ccp-Cakm",
      version: "Release 10.5"
    },
    "ccp-cakm-": {
      language: "Chakma",
      location: "India",
      id: 4096,
      tag: "ccp-Cakm-",
      version: "Release 10.5"
    },
    "cd-ru": {
      language: "Chechen",
      location: "Russia",
      id: 4096,
      tag: "cd-RU",
      version: "Release 10.1"
    },
    chr: chr,
    "chr-cher": {
      language: "Cherokee",
      location: null,
      id: 31836,
      tag: "chr-Cher",
      version: "Release 8"
    },
    "chr-cher-us": {
      language: "Cherokee",
      location: "United States",
      id: 1116,
      tag: "chr-Cher-US",
      version: "Release 8"
    },
    cgg: cgg,
    "cgg-ug": {
      language: "Chiga",
      location: "Uganda",
      id: 4096,
      tag: "cgg-UG",
      version: "Release 10"
    },
    "zh-hans": {
      language: "Chinese (Simplified)",
      location: null,
      id: 4,
      tag: "zh-Hans",
      version: "Release A"
    },
    zh: zh,
    "zh-cn": {
      language: "Chinese (Simplified)",
      location: "People's Republic of China",
      id: 2052,
      tag: "zh-CN",
      version: "Release A"
    },
    "zh-sg": {
      language: "Chinese (Simplified)",
      location: "Singapore",
      id: 4100,
      tag: "zh-SG",
      version: "Release A"
    },
    "zh-hant": {
      language: "Chinese (Traditional)",
      location: null,
      id: 31748,
      tag: "zh-Hant",
      version: "Release A"
    },
    "zh-hk": {
      language: "Chinese (Traditional)",
      location: "Hong Kong S.A.R.",
      id: 3076,
      tag: "zh-HK",
      version: "Release A"
    },
    "zh-mo": {
      language: "Chinese (Traditional)",
      location: "Macao S.A.R.",
      id: 5124,
      tag: "zh-MO",
      version: "Release D"
    },
    "zh-tw": {
      language: "Chinese (Traditional)",
      location: "Taiwan",
      id: 1028,
      tag: "zh-TW",
      version: "Release A"
    },
    "cu-ru": {
      language: "Church Slavic",
      location: "Russia",
      id: 4096,
      tag: "cu-RU",
      version: "Release 10.1"
    },
    swc: swc,
    "swc-cd": {
      language: "Congo Swahili",
      location: "Congo DRC",
      id: 4096,
      tag: "swc-CD",
      version: "Release 10"
    },
    kw: kw,
    "kw-gb": {
      language: "Cornish",
      location: "United Kingdom",
      id: 4096,
      tag: "kw-GB",
      version: "Release 10"
    },
    co: co,
    "co-fr": {
      language: "Corsican",
      location: "France",
      id: 1155,
      tag: "co-FR",
      version: "Release V"
    },
    "hr,": {
      language: "Croatian",
      location: null,
      id: 26,
      tag: "hr,",
      version: "Release 7"
    },
    "hr-hr": {
      language: "Croatian",
      location: "Croatia",
      id: 1050,
      tag: "hr-HR",
      version: "Release A"
    },
    "hr-ba": {
      language: "Croatian (Latin)",
      location: "Bosnia and Herzegovina",
      id: 4122,
      tag: "hr-BA",
      version: "Release E1"
    },
    cs: cs,
    "cs-cz": {
      language: "Czech",
      location: "Czech Republic",
      id: 1029,
      tag: "cs-CZ",
      version: "Release A"
    },
    da: da,
    "da-dk": {
      language: "Danish",
      location: "Denmark",
      id: 1030,
      tag: "da-DK",
      version: "Release A"
    },
    "da-gl": {
      language: "Danish",
      location: "Greenland",
      id: 4096,
      tag: "da-GL",
      version: "Release 10"
    },
    prs: prs,
    "prs-af": {
      language: "Dari",
      location: "Afghanistan",
      id: 1164,
      tag: "prs-AF",
      version: "Release V"
    },
    dv: dv,
    "dv-mv": {
      language: "Divehi",
      location: "Maldives",
      id: 1125,
      tag: "dv-MV",
      version: "Release D"
    },
    dua: dua,
    "dua-cm": {
      language: "Duala",
      location: "Cameroon",
      id: 4096,
      tag: "dua-CM",
      version: "Release 10"
    },
    nl: nl,
    "nl-aw": {
      language: "Dutch",
      location: "Aruba",
      id: 4096,
      tag: "nl-AW",
      version: "Release 10"
    },
    "nl-be": {
      language: "Dutch",
      location: "Belgium",
      id: 2067,
      tag: "nl-BE",
      version: "Release A"
    },
    "nl-bq": {
      language: "Dutch",
      location: "Bonaire, Sint Eustatius and Saba",
      id: 4096,
      tag: "nl-BQ",
      version: "Release 10"
    },
    "nl-cw": {
      language: "Dutch",
      location: "Curaçao",
      id: 4096,
      tag: "nl-CW",
      version: "Release 10"
    },
    "nl-nl": {
      language: "Dutch",
      location: "Netherlands",
      id: 1043,
      tag: "nl-NL",
      version: "Release A"
    },
    "nl-sx": {
      language: "Dutch",
      location: "Sint Maarten",
      id: 4096,
      tag: "nl-SX",
      version: "Release 10"
    },
    "nl-sr": {
      language: "Dutch",
      location: "Suriname",
      id: 4096,
      tag: "nl-SR",
      version: "Release 10"
    },
    dz: dz,
    "dz-bt": {
      language: "Dzongkha",
      location: "Bhutan",
      id: 3153,
      tag: "dz-BT",
      version: "Release 10"
    },
    ebu: ebu,
    "ebu-ke": {
      language: "Embu",
      location: "Kenya",
      id: 4096,
      tag: "ebu-KE",
      version: "Release 10"
    },
    en: en,
    "en-as": {
      language: "English",
      location: "American Samoa",
      id: 4096,
      tag: "en-AS",
      version: "Release 10"
    },
    "en-ai": {
      language: "English",
      location: "Anguilla",
      id: 4096,
      tag: "en-AI",
      version: "Release 10"
    },
    "en-ag": {
      language: "English",
      location: "Antigua and Barbuda",
      id: 4096,
      tag: "en-AG",
      version: "Release 10"
    },
    "en-au": {
      language: "English",
      location: "Australia",
      id: 3081,
      tag: "en-AU",
      version: "Release A"
    },
    "en-at": {
      language: "English",
      location: "Austria",
      id: 4096,
      tag: "en-AT",
      version: "Release 10.1"
    },
    "en-bs": {
      language: "English",
      location: "Bahamas",
      id: 4096,
      tag: "en-BS",
      version: "Release 10"
    },
    "en-bb": {
      language: "English",
      location: "Barbados",
      id: 4096,
      tag: "en-BB",
      version: "Release 10"
    },
    "en-be": {
      language: "English",
      location: "Belgium",
      id: 4096,
      tag: "en-BE",
      version: "Release 10"
    },
    "en-bz": {
      language: "English",
      location: "Belize",
      id: 10249,
      tag: "en-BZ",
      version: "Release B"
    },
    "en-bm": {
      language: "English",
      location: "Bermuda",
      id: 4096,
      tag: "en-BM",
      version: "Release 10"
    },
    "en-bw": {
      language: "English",
      location: "Botswana",
      id: 4096,
      tag: "en-BW",
      version: "Release 10"
    },
    "en-io": {
      language: "English",
      location: "British Indian Ocean Territory",
      id: 4096,
      tag: "en-IO",
      version: "Release 10"
    },
    "en-vg": {
      language: "English",
      location: "British Virgin Islands",
      id: 4096,
      tag: "en-VG",
      version: "Release 10"
    },
    "en-bi": {
      language: "English",
      location: "Burundi",
      id: 4096,
      tag: "en-BI",
      version: "Release 10.1"
    },
    "en-cm": {
      language: "English",
      location: "Cameroon",
      id: 4096,
      tag: "en-CM",
      version: "Release 10"
    },
    "en-ca": {
      language: "English",
      location: "Canada",
      id: 4105,
      tag: "en-CA",
      version: "Release A"
    },
    "en-029": {
      language: "English",
      location: "Caribbean",
      id: 9225,
      tag: "en-029",
      version: "Release B"
    },
    "en-ky": {
      language: "English",
      location: "Cayman Islands",
      id: 4096,
      tag: "en-KY",
      version: "Release 10"
    },
    "en-cx": {
      language: "English",
      location: "Christmas Island",
      id: 4096,
      tag: "en-CX",
      version: "Release 10"
    },
    "en-cc": {
      language: "English",
      location: "Cocos [Keeling] Islands",
      id: 4096,
      tag: "en-CC",
      version: "Release 10"
    },
    "en-ck": {
      language: "English",
      location: "Cook Islands",
      id: 4096,
      tag: "en-CK",
      version: "Release 10"
    },
    "en-cy": {
      language: "English",
      location: "Cyprus",
      id: 4096,
      tag: "en-CY",
      version: "Release 10.1"
    },
    "en-dk": {
      language: "English",
      location: "Denmark",
      id: 4096,
      tag: "en-DK",
      version: "Release 10.1"
    },
    "en-dm": {
      language: "English",
      location: "Dominica",
      id: 4096,
      tag: "en-DM",
      version: "Release 10"
    },
    "en-er": {
      language: "English",
      location: "Eritrea",
      id: 4096,
      tag: "en-ER",
      version: "Release 10"
    },
    "en-150": {
      language: "English",
      location: "Europe",
      id: 4096,
      tag: "en-150",
      version: "Release 10"
    },
    "en-fk": {
      language: "English",
      location: "Falkland Islands",
      id: 4096,
      tag: "en-FK",
      version: "Release 10"
    },
    "en-fi": {
      language: "English",
      location: "Finland",
      id: 4096,
      tag: "en-FI",
      version: "Release 10.1"
    },
    "en-fj": {
      language: "English",
      location: "Fiji",
      id: 4096,
      tag: "en-FJ",
      version: "Release 10"
    },
    "en-gm": {
      language: "English",
      location: "Gambia",
      id: 4096,
      tag: "en-GM",
      version: "Release 10"
    },
    "en-de": {
      language: "English",
      location: "Germany",
      id: 4096,
      tag: "en-DE",
      version: "Release 10.1"
    },
    "en-gh": {
      language: "English",
      location: "Ghana",
      id: 4096,
      tag: "en-GH",
      version: "Release 10"
    },
    "en-gi": {
      language: "English",
      location: "Gibraltar",
      id: 4096,
      tag: "en-GI",
      version: "Release 10"
    },
    "en-gd": {
      language: "English",
      location: "Grenada",
      id: 4096,
      tag: "en-GD",
      version: "Release 10"
    },
    "en-gu": {
      language: "English",
      location: "Guam",
      id: 4096,
      tag: "en-GU",
      version: "Release 10"
    },
    "en-gg": {
      language: "English",
      location: "Guernsey",
      id: 4096,
      tag: "en-GG",
      version: "Release 10"
    },
    "en-gy": {
      language: "English",
      location: "Guyana",
      id: 4096,
      tag: "en-GY",
      version: "Release 10"
    },
    "en-hk": {
      language: "English",
      location: "Hong Kong",
      id: 15369,
      tag: "en-HK",
      version: "Release 8.1"
    },
    "en-in": {
      language: "English",
      location: "India",
      id: 16393,
      tag: "en-IN",
      version: "Release V"
    },
    "en-ie": {
      language: "English",
      location: "Ireland",
      id: 6153,
      tag: "en-IE",
      version: "Release A"
    },
    "en-im": {
      language: "English",
      location: "Isle of Man",
      id: 4096,
      tag: "en-IM",
      version: "Release 10"
    },
    "en-il": {
      language: "English",
      location: "Israel",
      id: 4096,
      tag: "en-IL",
      version: "Release 10.1"
    },
    "en-jm": {
      language: "English",
      location: "Jamaica",
      id: 8201,
      tag: "en-JM",
      version: "Release B"
    },
    "en-je": {
      language: "English",
      location: "Jersey",
      id: 4096,
      tag: "en-JE",
      version: "Release 10"
    },
    "en-ke": {
      language: "English",
      location: "Kenya",
      id: 4096,
      tag: "en-KE",
      version: "Release 10"
    },
    "en-ki": {
      language: "English",
      location: "Kiribati",
      id: 4096,
      tag: "en-KI",
      version: "Release 10"
    },
    "en-ls": {
      language: "English",
      location: "Lesotho",
      id: 4096,
      tag: "en-LS",
      version: "Release 10"
    },
    "en-lr": {
      language: "English",
      location: "Liberia",
      id: 4096,
      tag: "en-LR",
      version: "Release 10"
    },
    "en-mo": {
      language: "English",
      location: "Macao SAR",
      id: 4096,
      tag: "en-MO",
      version: "Release 10"
    },
    "en-mg": {
      language: "English",
      location: "Madagascar",
      id: 4096,
      tag: "en-MG",
      version: "Release 10"
    },
    "en-mw": {
      language: "English",
      location: "Malawi",
      id: 4096,
      tag: "en-MW",
      version: "Release 10"
    },
    "en-my": {
      language: "English",
      location: "Malaysia",
      id: 17417,
      tag: "en-MY",
      version: "Release V"
    },
    "en-mt": {
      language: "English",
      location: "Malta",
      id: 4096,
      tag: "en-MT",
      version: "Release 10"
    },
    "en-mh": {
      language: "English",
      location: "Marshall Islands",
      id: 4096,
      tag: "en-MH",
      version: "Release 10"
    },
    "en-mu": {
      language: "English",
      location: "Mauritius",
      id: 4096,
      tag: "en-MU",
      version: "Release 10"
    },
    "en-fm": {
      language: "English",
      location: "Micronesia",
      id: 4096,
      tag: "en-FM",
      version: "Release 10"
    },
    "en-ms": {
      language: "English",
      location: "Montserrat",
      id: 4096,
      tag: "en-MS",
      version: "Release 10"
    },
    "en-na": {
      language: "English",
      location: "Namibia",
      id: 4096,
      tag: "en-NA",
      version: "Release 10"
    },
    "en-nr": {
      language: "English",
      location: "Nauru",
      id: 4096,
      tag: "en-NR",
      version: "Release 10"
    },
    "en-nl": {
      language: "English",
      location: "Netherlands",
      id: 4096,
      tag: "en-NL",
      version: "Release 10.1"
    },
    "en-nz": {
      language: "English",
      location: "New Zealand",
      id: 5129,
      tag: "en-NZ",
      version: "Release A"
    },
    "en-ng": {
      language: "English",
      location: "Nigeria",
      id: 4096,
      tag: "en-NG",
      version: "Release 10"
    },
    "en-nu": {
      language: "English",
      location: "Niue",
      id: 4096,
      tag: "en-NU",
      version: "Release 10"
    },
    "en-nf": {
      language: "English",
      location: "Norfolk Island",
      id: 4096,
      tag: "en-NF",
      version: "Release 10"
    },
    "en-mp": {
      language: "English",
      location: "Northern Mariana Islands",
      id: 4096,
      tag: "en-MP",
      version: "Release 10"
    },
    "en-pk": {
      language: "English",
      location: "Pakistan",
      id: 4096,
      tag: "en-PK",
      version: "Release 10"
    },
    "en-pw": {
      language: "English",
      location: "Palau",
      id: 4096,
      tag: "en-PW",
      version: "Release 10"
    },
    "en-pg": {
      language: "English",
      location: "Papua New Guinea",
      id: 4096,
      tag: "en-PG",
      version: "Release 10"
    },
    "en-pn": {
      language: "English",
      location: "Pitcairn Islands",
      id: 4096,
      tag: "en-PN",
      version: "Release 10"
    },
    "en-pr": {
      language: "English",
      location: "Puerto Rico",
      id: 4096,
      tag: "en-PR",
      version: "Release 10"
    },
    "en-ph": {
      language: "English",
      location: "Republic of the Philippines",
      id: 13321,
      tag: "en-PH",
      version: "Release C"
    },
    "en-rw": {
      language: "English",
      location: "Rwanda",
      id: 4096,
      tag: "en-RW",
      version: "Release 10"
    },
    "en-kn": {
      language: "English",
      location: "Saint Kitts and Nevis",
      id: 4096,
      tag: "en-KN",
      version: "Release 10"
    },
    "en-lc": {
      language: "English",
      location: "Saint Lucia",
      id: 4096,
      tag: "en-LC",
      version: "Release 10"
    },
    "en-vc": {
      language: "English",
      location: "Saint Vincent and the Grenadines",
      id: 4096,
      tag: "en-VC",
      version: "Release 10"
    },
    "en-ws": {
      language: "English",
      location: "Samoa",
      id: 4096,
      tag: "en-WS",
      version: "Release 10"
    },
    "en-sc": {
      language: "English",
      location: "Seychelles",
      id: 4096,
      tag: "en-SC",
      version: "Release 10"
    },
    "en-sl": {
      language: "English",
      location: "Sierra Leone",
      id: 4096,
      tag: "en-SL",
      version: "Release 10"
    },
    "en-sg": {
      language: "English",
      location: "Singapore",
      id: 18441,
      tag: "en-SG",
      version: "Release V"
    },
    "en-sx": {
      language: "English",
      location: "Sint Maarten",
      id: 4096,
      tag: "en-SX",
      version: "Release 10"
    },
    "en-si": {
      language: "English",
      location: "Slovenia",
      id: 4096,
      tag: "en-SI",
      version: "Release 10.1"
    },
    "en-sb": {
      language: "English",
      location: "Solomon Islands",
      id: 4096,
      tag: "en-SB",
      version: "Release 10"
    },
    "en-za": {
      language: "English",
      location: "South Africa",
      id: 7177,
      tag: "en-ZA",
      version: "Release B"
    },
    "en-ss": {
      language: "English",
      location: "South Sudan",
      id: 4096,
      tag: "en-SS",
      version: "Release 10"
    },
    "en-sh": {
      language: "English",
      location: "St Helena, Ascension,  Tristan da Cunha",
      id: 4096,
      tag: "en-SH",
      version: "Release 10"
    },
    "en-sd": {
      language: "English",
      location: "Sudan",
      id: 4096,
      tag: "en-SD",
      version: "Release 10"
    },
    "en-sz": {
      language: "English",
      location: "Swaziland",
      id: 4096,
      tag: "en-SZ",
      version: "Release 10"
    },
    "en-se": {
      language: "English",
      location: "Sweden",
      id: 4096,
      tag: "en-SE",
      version: "Release 10.1"
    },
    "en-ch": {
      language: "English",
      location: "Switzerland",
      id: 4096,
      tag: "en-CH",
      version: "Release 10.1"
    },
    "en-tz": {
      language: "English",
      location: "Tanzania",
      id: 4096,
      tag: "en-TZ",
      version: "Release 10"
    },
    "en-tk": {
      language: "English",
      location: "Tokelau",
      id: 4096,
      tag: "en-TK",
      version: "Release 10"
    },
    "en-to": {
      language: "English",
      location: "Tonga",
      id: 4096,
      tag: "en-TO",
      version: "Release 10"
    },
    "en-tt": {
      language: "English",
      location: "Trinidad and Tobago",
      id: 11273,
      tag: "en-TT",
      version: "Release B"
    },
    "en-tc": {
      language: "English",
      location: "Turks and Caicos Islands",
      id: 4096,
      tag: "en-TC",
      version: "Release 10"
    },
    "en-tv": {
      language: "English",
      location: "Tuvalu",
      id: 4096,
      tag: "en-TV",
      version: "Release 10"
    },
    "en-ug": {
      language: "English",
      location: "Uganda",
      id: 4096,
      tag: "en-UG",
      version: "Release 10"
    },
    "en-ae": {
      language: "English",
      location: "United Arab Emirates",
      id: 19465,
      tag: "en-AE",
      version: "Release 10.5"
    },
    "en-gb": {
      language: "English",
      location: "United Kingdom",
      id: 2057,
      tag: "en-GB",
      version: "Release A"
    },
    "en-us": {
      language: "English",
      location: "United States",
      id: 1033,
      tag: "en-US",
      version: "Release A"
    },
    "en-um": {
      language: "English",
      location: "US Minor Outlying Islands",
      id: 4096,
      tag: "en-UM",
      version: "Release 10"
    },
    "en-vi": {
      language: "English",
      location: "US Virgin Islands",
      id: 4096,
      tag: "en-VI",
      version: "Release 10"
    },
    "en-vu": {
      language: "English",
      location: "Vanuatu",
      id: 4096,
      tag: "en-VU",
      version: "Release 10"
    },
    "en-001": {
      language: "English",
      location: "World",
      id: 4096,
      tag: "en-001",
      version: "Release 10"
    },
    "en-zm": {
      language: "English",
      location: "Zambia",
      id: 4096,
      tag: "en-ZM",
      version: "Release 10"
    },
    "en-zw": {
      language: "English",
      location: "Zimbabwe",
      id: 12297,
      tag: "en-ZW",
      version: "Release C"
    },
    eo: eo,
    "eo-001": {
      language: "Esperanto",
      location: "World",
      id: 4096,
      tag: "eo-001",
      version: "Release 10"
    },
    et: et,
    "et-ee": {
      language: "Estonian",
      location: "Estonia",
      id: 1061,
      tag: "et-EE",
      version: "Release B"
    },
    ee: ee,
    "ee-gh": {
      language: "Ewe",
      location: "Ghana",
      id: 4096,
      tag: "ee-GH",
      version: "Release 10"
    },
    "ee-tg": {
      language: "Ewe",
      location: "Togo",
      id: 4096,
      tag: "ee-TG",
      version: "Release 10"
    },
    ewo: ewo,
    "ewo-cm": {
      language: "Ewondo",
      location: "Cameroon",
      id: 4096,
      tag: "ewo-CM",
      version: "Release 10"
    },
    fo: fo,
    "fo-dk": {
      language: "Faroese",
      location: "Denmark",
      id: 4096,
      tag: "fo-DK",
      version: "Release 10.1"
    },
    "fo-fo": {
      language: "Faroese",
      location: "Faroe Islands",
      id: 1080,
      tag: "fo-FO",
      version: "Release B"
    },
    fil: fil,
    "fil-ph": {
      language: "Filipino",
      location: "Philippines",
      id: 1124,
      tag: "fil-PH",
      version: "Release E2"
    },
    fi: fi,
    "fi-fi": {
      language: "Finnish",
      location: "Finland",
      id: 1035,
      tag: "fi-FI",
      version: "Release A"
    },
    fr: fr,
    "fr-dz": {
      language: "French",
      location: "Algeria",
      id: 4096,
      tag: "fr-DZ",
      version: "Release 10"
    },
    "fr-be": {
      language: "French",
      location: "Belgium",
      id: 2060,
      tag: "fr-BE",
      version: "Release A"
    },
    "fr-bj": {
      language: "French",
      location: "Benin",
      id: 4096,
      tag: "fr-BJ",
      version: "Release 10"
    },
    "fr-bf": {
      language: "French",
      location: "Burkina Faso",
      id: 4096,
      tag: "fr-BF",
      version: "Release 10"
    },
    "fr-bi": {
      language: "French",
      location: "Burundi",
      id: 4096,
      tag: "fr-BI",
      version: "Release 10"
    },
    "fr-cm": {
      language: "French",
      location: "Cameroon",
      id: 11276,
      tag: "fr-CM",
      version: "Release 8.1"
    },
    "fr-ca": {
      language: "French",
      location: "Canada",
      id: 3084,
      tag: "fr-CA",
      version: "Release A"
    },
    "fr-cf": {
      language: "French",
      location: "Central African Republic",
      id: 4096,
      tag: "fr-CF",
      version: "Release10"
    },
    "fr-td": {
      language: "French",
      location: "Chad",
      id: 4096,
      tag: "fr-TD",
      version: "Release 10"
    },
    "fr-km": {
      language: "French",
      location: "Comoros",
      id: 4096,
      tag: "fr-KM",
      version: "Release 10"
    },
    "fr-cg": {
      language: "French",
      location: "Congo",
      id: 4096,
      tag: "fr-CG",
      version: "Release 10"
    },
    "fr-cd": {
      language: "French",
      location: "Congo, DRC",
      id: 9228,
      tag: "fr-CD",
      version: "Release 8.1"
    },
    "fr-ci": {
      language: "French",
      location: "Côte d'Ivoire",
      id: 12300,
      tag: "fr-CI",
      version: "Release 8.1"
    },
    "fr-dj": {
      language: "French",
      location: "Djibouti",
      id: 4096,
      tag: "fr-DJ",
      version: "Release 10"
    },
    "fr-gq": {
      language: "French",
      location: "Equatorial Guinea",
      id: 4096,
      tag: "fr-GQ",
      version: "Release 10"
    },
    "fr-fr": {
      language: "French",
      location: "France",
      id: 1036,
      tag: "fr-FR",
      version: "Release A"
    },
    "fr-gf": {
      language: "French",
      location: "French Guiana",
      id: 4096,
      tag: "fr-GF",
      version: "Release 10"
    },
    "fr-pf": {
      language: "French",
      location: "French Polynesia",
      id: 4096,
      tag: "fr-PF",
      version: "Release 10"
    },
    "fr-ga": {
      language: "French",
      location: "Gabon",
      id: 4096,
      tag: "fr-GA",
      version: "Release 10"
    },
    "fr-gp": {
      language: "French",
      location: "Guadeloupe",
      id: 4096,
      tag: "fr-GP",
      version: "Release 10"
    },
    "fr-gn": {
      language: "French",
      location: "Guinea",
      id: 4096,
      tag: "fr-GN",
      version: "Release 10"
    },
    "fr-ht": {
      language: "French",
      location: "Haiti",
      id: 15372,
      tag: "fr-HT",
      version: "Release 8.1"
    },
    "fr-lu": {
      language: "French",
      location: "Luxembourg",
      id: 5132,
      tag: "fr-LU",
      version: "Release A"
    },
    "fr-mg": {
      language: "French",
      location: "Madagascar",
      id: 4096,
      tag: "fr-MG",
      version: "Release 10"
    },
    "fr-ml": {
      language: "French",
      location: "Mali",
      id: 13324,
      tag: "fr-ML",
      version: "Release 8.1"
    },
    "fr-mq": {
      language: "French",
      location: "Martinique",
      id: 4096,
      tag: "fr-MQ",
      version: "Release 10"
    },
    "fr-mr": {
      language: "French",
      location: "Mauritania",
      id: 4096,
      tag: "fr-MR",
      version: "Release 10"
    },
    "fr-mu": {
      language: "French",
      location: "Mauritius",
      id: 4096,
      tag: "fr-MU",
      version: "Release 10"
    },
    "fr-yt": {
      language: "French",
      location: "Mayotte",
      id: 4096,
      tag: "fr-YT",
      version: "Release 10"
    },
    "fr-ma": {
      language: "French",
      location: "Morocco",
      id: 14348,
      tag: "fr-MA",
      version: "Release 8.1"
    },
    "fr-nc": {
      language: "French",
      location: "New Caledonia",
      id: 4096,
      tag: "fr-NC",
      version: "Release 10"
    },
    "fr-ne": {
      language: "French",
      location: "Niger",
      id: 4096,
      tag: "fr-NE",
      version: "Release 10"
    },
    "fr-mc": {
      language: "French",
      location: "Principality of Monaco",
      id: 6156,
      tag: "fr-MC",
      version: "Release A"
    },
    "fr-re": {
      language: "French",
      location: "Reunion",
      id: 8204,
      tag: "fr-RE",
      version: "Release 8.1"
    },
    "fr-rw": {
      language: "French",
      location: "Rwanda",
      id: 4096,
      tag: "fr-RW",
      version: "Release 10"
    },
    "fr-bl": {
      language: "French",
      location: "Saint Barthélemy",
      id: 4096,
      tag: "fr-BL",
      version: "Release 10"
    },
    "fr-mf": {
      language: "French",
      location: "Saint Martin",
      id: 4096,
      tag: "fr-MF",
      version: "Release 10"
    },
    "fr-pm": {
      language: "French",
      location: "Saint Pierre and Miquelon",
      id: 4096,
      tag: "fr-PM",
      version: "Release 10"
    },
    "fr-sn": {
      language: "French",
      location: "Senegal",
      id: 10252,
      tag: "fr-SN",
      version: "Release 8.1"
    },
    "fr-sc": {
      language: "French",
      location: "Seychelles",
      id: 4096,
      tag: "fr-SC",
      version: "Release 10"
    },
    "fr-ch": {
      language: "French",
      location: "Switzerland",
      id: 4108,
      tag: "fr-CH",
      version: "Release A"
    },
    "fr-sy": {
      language: "French",
      location: "Syria",
      id: 4096,
      tag: "fr-SY",
      version: "Release 10"
    },
    "fr-tg": {
      language: "French",
      location: "Togo",
      id: 4096,
      tag: "fr-TG",
      version: "Release 10"
    },
    "fr-tn": {
      language: "French",
      location: "Tunisia",
      id: 4096,
      tag: "fr-TN",
      version: "Release 10"
    },
    "fr-vu": {
      language: "French",
      location: "Vanuatu",
      id: 4096,
      tag: "fr-VU",
      version: "Release 10"
    },
    "fr-wf": {
      language: "French",
      location: "Wallis and Futuna",
      id: 4096,
      tag: "fr-WF",
      version: "Release 10"
    },
    fy: fy,
    "fy-nl": {
      language: "Frisian",
      location: "Netherlands",
      id: 1122,
      tag: "fy-NL",
      version: "Release E2"
    },
    fur: fur,
    "fur-it": {
      language: "Friulian",
      location: "Italy",
      id: 4096,
      tag: "fur-IT",
      version: "Release 10"
    },
    ff: ff,
    "ff-latn": {
      language: "Fulah (Latin)",
      location: null,
      id: 31847,
      tag: "ff-Latn",
      version: "Release 8"
    },
    "ff-latn-bf": {
      language: "Fulah (Latin)",
      location: "Burkina Faso",
      id: 4096,
      tag: "ff-Latn-BF",
      version: "Release 10.4"
    },
    "ff-cm": {
      language: "Fulah",
      location: "Cameroon",
      id: 4096,
      tag: "ff-CM",
      version: "Release 10"
    },
    "ff-latn-cm": {
      language: "Fulah (Latin)",
      location: "Cameroon",
      id: 4096,
      tag: "ff-Latn-CM",
      version: "Release 10.4"
    },
    "ff-latn-gm": {
      language: "Fulah (Latin)",
      location: "Gambia",
      id: 4096,
      tag: "ff-Latn-GM",
      version: "Release 10.4"
    },
    "ff-latn-gh": {
      language: "Fulah (Latin)",
      location: "Ghana",
      id: 4096,
      tag: "ff-Latn-GH",
      version: "Release 10.4"
    },
    "ff-gn": {
      language: "Fulah",
      location: "Guinea",
      id: 4096,
      tag: "ff-GN",
      version: "Release 10"
    },
    "ff-latn-gn": {
      language: "Fulah (Latin)",
      location: "Guinea",
      id: 4096,
      tag: "ff-Latn-GN",
      version: "Release 10.4"
    },
    "ff-latn-gw": {
      language: "Fulah (Latin)",
      location: "Guinea-Bissau",
      id: 4096,
      tag: "ff-Latn-GW",
      version: "Release 10.4"
    },
    "ff-latn-lr": {
      language: "Fulah (Latin)",
      location: "Liberia",
      id: 4096,
      tag: "ff-Latn-LR",
      version: "Release 10.4"
    },
    "ff-mr": {
      language: "Fulah",
      location: "Mauritania",
      id: 4096,
      tag: "ff-MR",
      version: "Release 10"
    },
    "ff-latn-mr": {
      language: "Fulah (Latin)",
      location: "Mauritania",
      id: 4096,
      tag: "ff-Latn-MR",
      version: "Release 10.4"
    },
    "ff-latn-ne": {
      language: "Fulah (Latin)",
      location: "Niger",
      id: 4096,
      tag: "ff-Latn-NE",
      version: "Release 10.4"
    },
    "ff-ng": {
      language: "Fulah",
      location: "Nigeria",
      id: 4096,
      tag: "ff-NG",
      version: "Release 10"
    },
    "ff-latn-ng": {
      language: "Fulah (Latin)",
      location: "Nigeria",
      id: 4096,
      tag: "ff-Latn-NG",
      version: "Release 10.4"
    },
    "ff-latn-sn": {
      language: "Fulah",
      location: "Senegal",
      id: 2151,
      tag: "ff-Latn-SN",
      version: "Release 8"
    },
    "ff-latn-sl": {
      language: "Fulah (Latin)",
      location: "Sierra Leone",
      id: 4096,
      tag: "ff-Latn-SL",
      version: "Release 10.4"
    },
    gl: gl,
    "gl-es": {
      language: "Galician",
      location: "Spain",
      id: 1110,
      tag: "gl-ES",
      version: "Release D"
    },
    lg: lg,
    "lg-ug": {
      language: "Ganda",
      location: "Uganda",
      id: 4096,
      tag: "lg-UG",
      version: "Release 10"
    },
    ka: ka,
    "ka-ge": {
      language: "Georgian",
      location: "Georgia",
      id: 1079,
      tag: "ka-GE",
      version: "Release C"
    },
    de: de,
    "de-at": {
      language: "German",
      location: "Austria",
      id: 3079,
      tag: "de-AT",
      version: "Release A"
    },
    "de-be": {
      language: "German",
      location: "Belgium",
      id: 4096,
      tag: "de-BE",
      version: "Release 10"
    },
    "de-de": {
      language: "German",
      location: "Germany",
      id: 1031,
      tag: "de-DE",
      version: "Release A"
    },
    "de-it": {
      language: "German",
      location: "Italy",
      id: 4096,
      tag: "de-IT",
      version: "Release 10.2"
    },
    "de-li": {
      language: "German",
      location: "Liechtenstein",
      id: 5127,
      tag: "de-LI",
      version: "Release B"
    },
    "de-lu": {
      language: "German",
      location: "Luxembourg",
      id: 4103,
      tag: "de-LU",
      version: "Release B"
    },
    "de-ch": {
      language: "German",
      location: "Switzerland",
      id: 2055,
      tag: "de-CH",
      version: "Release A"
    },
    el: el,
    "el-cy": {
      language: "Greek",
      location: "Cyprus",
      id: 4096,
      tag: "el-CY",
      version: "Release 10"
    },
    "el-gr": {
      language: "Greek",
      location: "Greece",
      id: 1032,
      tag: "el-GR",
      version: "Release A"
    },
    kl: kl,
    "kl-gl": {
      language: "Greenlandic",
      location: "Greenland",
      id: 1135,
      tag: "kl-GL",
      version: "Release V"
    },
    gn: gn,
    "gn-py": {
      language: "Guarani",
      location: "Paraguay",
      id: 1140,
      tag: "gn-PY",
      version: "Release 8.1"
    },
    gu: gu,
    "gu-in": {
      language: "Gujarati",
      location: "India",
      id: 1095,
      tag: "gu-IN",
      version: "Release D"
    },
    guz: guz,
    "guz-ke": {
      language: "Gusii",
      location: "Kenya",
      id: 4096,
      tag: "guz-KE",
      version: "Release 10"
    },
    ha: ha,
    "ha-latn": {
      language: "Hausa (Latin)",
      location: null,
      id: 31848,
      tag: "ha-Latn",
      version: "Windows 7"
    },
    "ha-latn-gh": {
      language: "Hausa (Latin)",
      location: "Ghana",
      id: 4096,
      tag: "ha-Latn-GH",
      version: "Release 10"
    },
    "ha-latn-ne": {
      language: "Hausa (Latin)",
      location: "Niger",
      id: 4096,
      tag: "ha-Latn-NE",
      version: "Release 10"
    },
    "ha-latn-ng": {
      language: "Hausa (Latin)",
      location: "Nigeria",
      id: 1128,
      tag: "ha-Latn-NG",
      version: "Release V"
    },
    haw: haw,
    "haw-us": {
      language: "Hawaiian",
      location: "United States",
      id: 1141,
      tag: "haw-US",
      version: "Release 8"
    },
    he: he,
    "he-il": {
      language: "Hebrew",
      location: "Israel",
      id: 1037,
      tag: "he-IL",
      version: "Release B"
    },
    hi: hi,
    "hi-in": {
      language: "Hindi",
      location: "India",
      id: 1081,
      tag: "hi-IN",
      version: "Release C"
    },
    hu: hu,
    "hu-hu": {
      language: "Hungarian",
      location: "Hungary",
      id: 1038,
      tag: "hu-HU",
      version: "Release A"
    },
    is: is,
    "is-is": {
      language: "Icelandic",
      location: "Iceland",
      id: 1039,
      tag: "is-IS",
      version: "Release A"
    },
    ig: ig,
    "ig-ng": {
      language: "Igbo",
      location: "Nigeria",
      id: 1136,
      tag: "ig-NG",
      version: "Release V"
    },
    id: id,
    "id-id": {
      language: "Indonesian",
      location: "Indonesia",
      id: 1057,
      tag: "id-ID",
      version: "Release B"
    },
    ia: ia,
    "ia-fr": {
      language: "Interlingua",
      location: "France",
      id: 4096,
      tag: "ia-FR",
      version: "Release 10"
    },
    "ia-001": {
      language: "Interlingua",
      location: "World",
      id: 4096,
      tag: "ia-001",
      version: "Release 10"
    },
    iu: iu,
    "iu-latn": {
      language: "Inuktitut (Latin)",
      location: null,
      id: 31837,
      tag: "iu-Latn",
      version: "Windows 7"
    },
    "iu-latn-ca": {
      language: "Inuktitut (Latin)",
      location: "Canada",
      id: 2141,
      tag: "iu-Latn-CA",
      version: "Release E2"
    },
    "iu-cans": {
      language: "Inuktitut (Syllabics)",
      location: null,
      id: 30813,
      tag: "iu-Cans",
      version: "Windows 7"
    },
    "iu-cans-ca": {
      language: "Inuktitut (Syllabics)",
      location: "Canada",
      id: 1117,
      tag: "iu-Cans-CA",
      version: "Release V"
    },
    ga: ga,
    "ga-ie": {
      language: "Irish",
      location: "Ireland",
      id: 2108,
      tag: "ga-IE",
      version: "Release E2"
    },
    it: it,
    "it-it": {
      language: "Italian",
      location: "Italy",
      id: 1040,
      tag: "it-IT",
      version: "Release A"
    },
    "it-sm": {
      language: "Italian",
      location: "San Marino",
      id: 4096,
      tag: "it-SM",
      version: "Release 10"
    },
    "it-ch": {
      language: "Italian",
      location: "Switzerland",
      id: 2064,
      tag: "it-CH",
      version: "Release A"
    },
    "it-va": {
      language: "Italian",
      location: "Vatican City",
      id: 4096,
      tag: "it-VA",
      version: "Release 10.3"
    },
    ja: ja,
    "ja-jp": {
      language: "Japanese",
      location: "Japan",
      id: 1041,
      tag: "ja-JP",
      version: "Release A"
    },
    jv: jv,
    "jv-latn": {
      language: "Javanese",
      location: "Latin",
      id: 4096,
      tag: "jv-Latn",
      version: "Release 8.1"
    },
    "jv-latn-id": {
      language: "Javanese",
      location: "Latin, Indonesia",
      id: 4096,
      tag: "jv-Latn-ID",
      version: "Release 8.1"
    },
    dyo: dyo,
    "dyo-sn": {
      language: "Jola-Fonyi",
      location: "Senegal",
      id: 4096,
      tag: "dyo-SN",
      version: "Release 10"
    },
    kea: kea,
    "kea-cv": {
      language: "Kabuverdianu",
      location: "Cabo Verde",
      id: 4096,
      tag: "kea-CV",
      version: "Release 10"
    },
    kab: kab,
    "kab-dz": {
      language: "Kabyle",
      location: "Algeria",
      id: 4096,
      tag: "kab-DZ",
      version: "Release 10"
    },
    kkj: kkj,
    "kkj-cm": {
      language: "Kako",
      location: "Cameroon",
      id: 4096,
      tag: "kkj-CM",
      version: "Release 10"
    },
    kln: kln,
    "kln-ke": {
      language: "Kalenjin",
      location: "Kenya",
      id: 4096,
      tag: "kln-KE",
      version: "Release 10"
    },
    kam: kam,
    "kam-ke": {
      language: "Kamba",
      location: "Kenya",
      id: 4096,
      tag: "kam-KE",
      version: "Release 10"
    },
    kn: kn,
    "kn-in": {
      language: "Kannada",
      location: "India",
      id: 1099,
      tag: "kn-IN",
      version: "Release D"
    },
    ks: ks,
    "ks-arab": {
      language: "Kashmiri",
      location: "Perso-Arabic",
      id: 1120,
      tag: "ks-Arab",
      version: "Release 10"
    },
    "ks-arab-in": {
      language: "Kashmiri",
      location: "Perso-Arabic",
      id: 4096,
      tag: "ks-Arab-IN",
      version: "Release 10"
    },
    kk: kk,
    "kk-kz": {
      language: "Kazakh",
      location: "Kazakhstan",
      id: 1087,
      tag: "kk-KZ",
      version: "Release C"
    },
    km: km,
    "km-kh": {
      language: "Khmer",
      location: "Cambodia",
      id: 1107,
      tag: "km-KH",
      version: "Release V"
    },
    quc: quc,
    "quc-latn-gt": {
      language: "K'iche",
      location: "Guatemala",
      id: 1158,
      tag: "quc-Latn-GT",
      version: "Release 10"
    },
    ki: ki,
    "ki-ke": {
      language: "Kikuyu",
      location: "Kenya",
      id: 4096,
      tag: "ki-KE",
      version: "Release 10"
    },
    rw: rw,
    "rw-rw": {
      language: "Kinyarwanda",
      location: "Rwanda",
      id: 1159,
      tag: "rw-RW",
      version: "Release V"
    },
    sw: sw,
    "sw-ke": {
      language: "Kiswahili",
      location: "Kenya",
      id: 1089,
      tag: "sw-KE",
      version: "Release C"
    },
    "sw-tz": {
      language: "Kiswahili",
      location: "Tanzania",
      id: 4096,
      tag: "sw-TZ",
      version: "Release 10"
    },
    "sw-ug": {
      language: "Kiswahili",
      location: "Uganda",
      id: 4096,
      tag: "sw-UG",
      version: "Release 10"
    },
    kok: kok,
    "kok-in": {
      language: "Konkani",
      location: "India",
      id: 1111,
      tag: "kok-IN",
      version: "Release C"
    },
    ko: ko,
    "ko-kr": {
      language: "Korean",
      location: "Korea",
      id: 1042,
      tag: "ko-KR",
      version: "Release A"
    },
    "ko-kp": {
      language: "Korean",
      location: "North Korea",
      id: 4096,
      tag: "ko-KP",
      version: "Release 10.1"
    },
    khq: khq,
    "khq-ml": {
      language: "Koyra Chiini",
      location: "Mali",
      id: 4096,
      tag: "khq-ML",
      version: "Release 10"
    },
    ses: ses,
    "ses-ml": {
      language: "Koyraboro Senni",
      location: "Mali",
      id: 4096,
      tag: "ses-ML",
      version: "Release 10"
    },
    nmg: nmg,
    "nmg-cm": {
      language: "Kwasio",
      location: "Cameroon",
      id: 4096,
      tag: "nmg-CM",
      version: "Release 10"
    },
    ky: ky,
    "ky-kg": {
      language: "Kyrgyz",
      location: "Kyrgyzstan",
      id: 1088,
      tag: "ky-KG",
      version: "Release D"
    },
    "ku-arab-ir": {
      language: "Kurdish",
      location: "Perso-Arabic, Iran",
      id: 4096,
      tag: "ku-Arab-IR",
      version: "Release 10.1"
    },
    lkt: lkt,
    "lkt-us": {
      language: "Lakota",
      location: "United States",
      id: 4096,
      tag: "lkt-US",
      version: "Release 10"
    },
    lag: lag,
    "lag-tz": {
      language: "Langi",
      location: "Tanzania",
      id: 4096,
      tag: "lag-TZ",
      version: "Release 10"
    },
    lo: lo,
    "lo-la": {
      language: "Lao",
      location: "Lao P.D.R.",
      id: 1108,
      tag: "lo-LA",
      version: "Release V"
    },
    lv: lv,
    "lv-lv": {
      language: "Latvian",
      location: "Latvia",
      id: 1062,
      tag: "lv-LV",
      version: "Release B"
    },
    ln: ln,
    "ln-ao": {
      language: "Lingala",
      location: "Angola",
      id: 4096,
      tag: "ln-AO",
      version: "Release 10"
    },
    "ln-cf": {
      language: "Lingala",
      location: "Central African Republic",
      id: 4096,
      tag: "ln-CF",
      version: "Release 10"
    },
    "ln-cg": {
      language: "Lingala",
      location: "Congo",
      id: 4096,
      tag: "ln-CG",
      version: "Release 10"
    },
    "ln-cd": {
      language: "Lingala",
      location: "Congo DRC",
      id: 4096,
      tag: "ln-CD",
      version: "Release 10"
    },
    lt: lt,
    "lt-lt": {
      language: "Lithuanian",
      location: "Lithuania",
      id: 1063,
      tag: "lt-LT",
      version: "Release B"
    },
    nds: nds,
    "nds-de": {
      language: "Low German",
      location: "Germany",
      id: 4096,
      tag: "nds-DE",
      version: "Release 10.2"
    },
    "nds-nl": {
      language: "Low German",
      location: "Netherlands",
      id: 4096,
      tag: "nds-NL",
      version: "Release 10.2"
    },
    dsb: dsb,
    "dsb-de": {
      language: "Lower Sorbian",
      location: "Germany",
      id: 2094,
      tag: "dsb-DE",
      version: "Release V"
    },
    lu: lu,
    "lu-cd": {
      language: "Luba-Katanga",
      location: "Congo DRC",
      id: 4096,
      tag: "lu-CD",
      version: "Release 10"
    },
    luo: luo,
    "luo-ke": {
      language: "Luo",
      location: "Kenya",
      id: 4096,
      tag: "luo-KE",
      version: "Release 10"
    },
    lb: lb,
    "lb-lu": {
      language: "Luxembourgish",
      location: "Luxembourg",
      id: 1134,
      tag: "lb-LU",
      version: "Release E2"
    },
    luy: luy,
    "luy-ke": {
      language: "Luyia",
      location: "Kenya",
      id: 4096,
      tag: "luy-KE",
      version: "Release 10"
    },
    mk: mk,
    "mk-mk": {
      language: "Macedonian",
      location: "North Macedonia",
      id: 1071,
      tag: "mk-MK",
      version: "Release C"
    },
    jmc: jmc,
    "jmc-tz": {
      language: "Machame",
      location: "Tanzania",
      id: 4096,
      tag: "jmc-TZ",
      version: "Release 10"
    },
    mgh: mgh,
    "mgh-mz": {
      language: "Makhuwa-Meetto",
      location: "Mozambique",
      id: 4096,
      tag: "mgh-MZ",
      version: "Release 10"
    },
    kde: kde,
    "kde-tz": {
      language: "Makonde",
      location: "Tanzania",
      id: 4096,
      tag: "kde-TZ",
      version: "Release 10"
    },
    mg: mg,
    "mg-mg": {
      language: "Malagasy",
      location: "Madagascar",
      id: 4096,
      tag: "mg-MG",
      version: "Release 8.1"
    },
    ms: ms,
    "ms-bn": {
      language: "Malay",
      location: "Brunei Darussalam",
      id: 2110,
      tag: "ms-BN",
      version: "Release C"
    },
    "ms-my": {
      language: "Malay",
      location: "Malaysia",
      id: 1086,
      tag: "ms-MY",
      version: "Release C"
    },
    ml: ml,
    "ml-in": {
      language: "Malayalam",
      location: "India",
      id: 1100,
      tag: "ml-IN",
      version: "Release E1"
    },
    mt: mt,
    "mt-mt": {
      language: "Maltese",
      location: "Malta",
      id: 1082,
      tag: "mt-MT",
      version: "Release E1"
    },
    gv: gv,
    "gv-im": {
      language: "Manx",
      location: "Isle of Man",
      id: 4096,
      tag: "gv-IM",
      version: "Release 10"
    },
    mi: mi,
    "mi-nz": {
      language: "Maori",
      location: "New Zealand",
      id: 1153,
      tag: "mi-NZ",
      version: "Release E1"
    },
    arn: arn,
    "arn-cl": {
      language: "Mapudungun",
      location: "Chile",
      id: 1146,
      tag: "arn-CL",
      version: "Release E2"
    },
    mr: mr,
    "mr-in": {
      language: "Marathi",
      location: "India",
      id: 1102,
      tag: "mr-IN",
      version: "Release C"
    },
    mas: mas,
    "mas-ke": {
      language: "Masai",
      location: "Kenya",
      id: 4096,
      tag: "mas-KE",
      version: "Release 10"
    },
    "mas-tz": {
      language: "Masai",
      location: "Tanzania",
      id: 4096,
      tag: "mas-TZ",
      version: "Release 10"
    },
    "mzn-ir": {
      language: "Mazanderani",
      location: "Iran",
      id: 4096,
      tag: "mzn-IR",
      version: "Release 10.1"
    },
    mer: mer,
    "mer-ke": {
      language: "Meru",
      location: "Kenya",
      id: 4096,
      tag: "mer-KE",
      version: "Release 10"
    },
    mgo: mgo,
    "mgo-cm": {
      language: "Meta'",
      location: "Cameroon",
      id: 4096,
      tag: "mgo-CM",
      version: "Release 10"
    },
    moh: moh,
    "moh-ca": {
      language: "Mohawk",
      location: "Canada",
      id: 1148,
      tag: "moh-CA",
      version: "Release E2"
    },
    mn: mn,
    "mn-cyrl": {
      language: "Mongolian (Cyrillic)",
      location: null,
      id: 30800,
      tag: "mn-Cyrl",
      version: "Windows 7"
    },
    "mn-mn": {
      language: "Mongolian (Cyrillic)",
      location: "Mongolia",
      id: 1104,
      tag: "mn-MN",
      version: "Release D"
    },
    "mn-mong": {
      language: "Mongolian (Traditional Mongolian)",
      location: null,
      id: 31824,
      tag: "mn-Mong",
      version: "Windows 7"
    },
    "mn-mong-cn": {
      language: "Mongolian (Traditional Mongolian)",
      location: "People's Republic of China",
      id: 2128,
      tag: "mn-Mong-CN",
      version: "Windows V"
    },
    "mn-mong-mn": {
      language: "Mongolian (Traditional Mongolian)",
      location: "Mongolia",
      id: 3152,
      tag: "mn-Mong-MN",
      version: "Windows 7"
    },
    mfe: mfe,
    "mfe-mu": {
      language: "Morisyen",
      location: "Mauritius",
      id: 4096,
      tag: "mfe-MU",
      version: "Release 10"
    },
    mua: mua,
    "mua-cm": {
      language: "Mundang",
      location: "Cameroon",
      id: 4096,
      tag: "mua-CM",
      version: "Release 10"
    },
    nqo: nqo,
    "nqo-gn": {
      language: "N'ko",
      location: "Guinea",
      id: 4096,
      tag: "nqo-GN",
      version: "Release 8.1"
    },
    naq: naq,
    "naq-na": {
      language: "Nama",
      location: "Namibia",
      id: 4096,
      tag: "naq-NA",
      version: "Release 10"
    },
    ne: ne,
    "ne-in": {
      language: "Nepali",
      location: "India",
      id: 2145,
      tag: "ne-IN",
      version: "Release 8.1"
    },
    "ne-np": {
      language: "Nepali",
      location: "Nepal",
      id: 1121,
      tag: "ne-NP",
      version: "Release E2"
    },
    nnh: nnh,
    "nnh-cm": {
      language: "Ngiemboon",
      location: "Cameroon",
      id: 4096,
      tag: "nnh-CM",
      version: "Release 10"
    },
    jgo: jgo,
    "jgo-cm": {
      language: "Ngomba",
      location: "Cameroon",
      id: 4096,
      tag: "jgo-CM",
      version: "Release 10"
    },
    "lrc-iq": {
      language: "Northern Luri",
      location: "Iraq",
      id: 4096,
      tag: "lrc-IQ",
      version: "Release 10.1"
    },
    "lrc-ir": {
      language: "Northern Luri",
      location: "Iran",
      id: 4096,
      tag: "lrc-IR",
      version: "Release 10.1"
    },
    nd: nd,
    "nd-zw": {
      language: "North Ndebele",
      location: "Zimbabwe",
      id: 4096,
      tag: "nd-ZW",
      version: "Release 10"
    },
    no: no,
    nb: nb,
    "nb-no": {
      language: "Norwegian (Bokmal)",
      location: "Norway",
      id: 1044,
      tag: "nb-NO",
      version: "Release A"
    },
    nn: nn,
    "nn-no": {
      language: "Norwegian (Nynorsk)",
      location: "Norway",
      id: 2068,
      tag: "nn-NO",
      version: "Release A"
    },
    "nb-sj": {
      language: "Norwegian Bokmål",
      location: "Svalbard and Jan Mayen",
      id: 4096,
      tag: "nb-SJ",
      version: "Release 10"
    },
    nus: nus,
    "nus-sd": {
      language: "Nuer",
      location: "Sudan",
      id: 4096,
      tag: "nus-SD",
      version: "Release 10"
    },
    "nus-ss": {
      language: "Nuer",
      location: "South Sudan",
      id: 4096,
      tag: "nus-SS",
      version: "Release 10.1"
    },
    nyn: nyn,
    "nyn-ug": {
      language: "Nyankole",
      location: "Uganda",
      id: 4096,
      tag: "nyn-UG",
      version: "Release 10"
    },
    oc: oc,
    "oc-fr": {
      language: "Occitan",
      location: "France",
      id: 1154,
      tag: "oc-FR",
      version: "Release V"
    },
    or: or,
    "or-in": {
      language: "Odia",
      location: "India",
      id: 1096,
      tag: "or-IN",
      version: "Release V"
    },
    om: om,
    "om-et": {
      language: "Oromo",
      location: "Ethiopia",
      id: 1138,
      tag: "om-ET",
      version: "Release 8.1"
    },
    "om-ke": {
      language: "Oromo",
      location: "Kenya",
      id: 4096,
      tag: "om-KE",
      version: "Release 10"
    },
    os: os,
    "os-ge": {
      language: "Ossetian",
      location: "Cyrillic, Georgia",
      id: 4096,
      tag: "os-GE",
      version: "Release 10"
    },
    "os-ru": {
      language: "Ossetian",
      location: "Cyrillic, Russia",
      id: 4096,
      tag: "os-RU",
      version: "Release 10"
    },
    ps: ps,
    "ps-af": {
      language: "Pashto",
      location: "Afghanistan",
      id: 1123,
      tag: "ps-AF",
      version: "Release E2"
    },
    "ps-pk": {
      language: "Pashto",
      location: "Pakistan",
      id: 4096,
      tag: "ps-PK",
      version: "Release 10.5"
    },
    fa: fa,
    "fa-af": {
      language: "Persian",
      location: "Afghanistan",
      id: 4096,
      tag: "fa-AF",
      version: "Release 10"
    },
    "fa-ir": {
      language: "Persian",
      location: "Iran",
      id: 1065,
      tag: "fa-IR",
      version: "Release B"
    },
    pl: pl,
    "pl-pl": {
      language: "Polish",
      location: "Poland",
      id: 1045,
      tag: "pl-PL",
      version: "Release A"
    },
    pt: pt,
    "pt-ao": {
      language: "Portuguese",
      location: "Angola",
      id: 4096,
      tag: "pt-AO",
      version: "Release 8.1"
    },
    "pt-br": {
      language: "Portuguese",
      location: "Brazil",
      id: 1046,
      tag: "pt-BR",
      version: "Release A"
    },
    "pt-cv": {
      language: "Portuguese",
      location: "Cabo Verde",
      id: 4096,
      tag: "pt-CV",
      version: "Release 10"
    },
    "pt-gq": {
      language: "Portuguese",
      location: "Equatorial Guinea",
      id: 4096,
      tag: "pt-GQ",
      version: "Release 10.2"
    },
    "pt-gw": {
      language: "Portuguese",
      location: "Guinea-Bissau",
      id: 4096,
      tag: "pt-GW",
      version: "Release 10"
    },
    "pt-lu": {
      language: "Portuguese",
      location: "Luxembourg",
      id: 4096,
      tag: "pt-LU",
      version: "Release 10.2"
    },
    "pt-mo": {
      language: "Portuguese",
      location: "Macao SAR",
      id: 4096,
      tag: "pt-MO",
      version: "Release 10"
    },
    "pt-mz": {
      language: "Portuguese",
      location: "Mozambique",
      id: 4096,
      tag: "pt-MZ",
      version: "Release 10"
    },
    "pt-pt": {
      language: "Portuguese",
      location: "Portugal",
      id: 2070,
      tag: "pt-PT",
      version: "Release A"
    },
    "pt-st": {
      language: "Portuguese",
      location: "São Tomé and Príncipe",
      id: 4096,
      tag: "pt-ST",
      version: "Release 10"
    },
    "pt-ch": {
      language: "Portuguese",
      location: "Switzerland",
      id: 4096,
      tag: "pt-CH",
      version: "Release 10.2"
    },
    "pt-tl": {
      language: "Portuguese",
      location: "Timor-Leste",
      id: 4096,
      tag: "pt-TL",
      version: "Release 10"
    },
    "prg-001": {
      language: "Prussian",
      location: null,
      id: 4096,
      tag: "prg-001",
      version: "Release 10.1"
    },
    "qps-ploca": {
      language: "Pseudo Language",
      location: "Pseudo locale for east Asian/complex script localization testing",
      id: 1534,
      tag: "qps-ploca",
      version: "Release 7"
    },
    "qps-ploc": {
      language: "Pseudo Language",
      location: "Pseudo locale used for localization testing",
      id: 1281,
      tag: "qps-ploc",
      version: "Release 7"
    },
    "qps-plocm": {
      language: "Pseudo Language",
      location: "Pseudo locale used for localization testing of mirrored locales",
      id: 2559,
      tag: "qps-plocm",
      version: "Release 7"
    },
    pa: pa,
    "pa-arab": {
      language: "Punjabi",
      location: null,
      id: 31814,
      tag: "pa-Arab",
      version: "Release 8"
    },
    "pa-in": {
      language: "Punjabi",
      location: "India",
      id: 1094,
      tag: "pa-IN",
      version: "Release D"
    },
    "pa-arab-pk": {
      language: "Punjabi",
      location: "Islamic Republic of Pakistan",
      id: 2118,
      tag: "pa-Arab-PK",
      version: "Release 8"
    },
    quz: quz,
    "quz-bo": {
      language: "Quechua",
      location: "Bolivia",
      id: 1131,
      tag: "quz-BO",
      version: "Release E1"
    },
    "quz-ec": {
      language: "Quechua",
      location: "Ecuador",
      id: 2155,
      tag: "quz-EC",
      version: "Release E1"
    },
    "quz-pe": {
      language: "Quechua",
      location: "Peru",
      id: 3179,
      tag: "quz-PE",
      version: "Release E1"
    },
    ksh: ksh,
    "ksh-de": {
      language: "Ripuarian",
      location: "Germany",
      id: 4096,
      tag: "ksh-DE",
      version: "Release 10"
    },
    ro: ro,
    "ro-md": {
      language: "Romanian",
      location: "Moldova",
      id: 2072,
      tag: "ro-MD",
      version: "Release 8.1"
    },
    "ro-ro": {
      language: "Romanian",
      location: "Romania",
      id: 1048,
      tag: "ro-RO",
      version: "Release A"
    },
    rm: rm,
    "rm-ch": {
      language: "Romansh",
      location: "Switzerland",
      id: 1047,
      tag: "rm-CH",
      version: "Release E2"
    },
    rof: rof,
    "rof-tz": {
      language: "Rombo",
      location: "Tanzania",
      id: 4096,
      tag: "rof-TZ",
      version: "Release 10"
    },
    rn: rn,
    "rn-bi": {
      language: "Rundi",
      location: "Burundi",
      id: 4096,
      tag: "rn-BI",
      version: "Release 10"
    },
    ru: ru,
    "ru-by": {
      language: "Russian",
      location: "Belarus",
      id: 4096,
      tag: "ru-BY",
      version: "Release 10"
    },
    "ru-kz": {
      language: "Russian",
      location: "Kazakhstan",
      id: 4096,
      tag: "ru-KZ",
      version: "Release 10"
    },
    "ru-kg": {
      language: "Russian",
      location: "Kyrgyzstan",
      id: 4096,
      tag: "ru-KG",
      version: "Release 10"
    },
    "ru-md": {
      language: "Russian",
      location: "Moldova",
      id: 2073,
      tag: "ru-MD",
      version: "Release 10"
    },
    "ru-ru": {
      language: "Russian",
      location: "Russia",
      id: 1049,
      tag: "ru-RU",
      version: "Release A"
    },
    "ru-ua": {
      language: "Russian",
      location: "Ukraine",
      id: 4096,
      tag: "ru-UA",
      version: "Release 10"
    },
    rwk: rwk,
    "rwk-tz": {
      language: "Rwa",
      location: "Tanzania",
      id: 4096,
      tag: "rwk-TZ",
      version: "Release 10"
    },
    ssy: ssy,
    "ssy-er": {
      language: "Saho",
      location: "Eritrea",
      id: 4096,
      tag: "ssy-ER",
      version: "Release 10"
    },
    sah: sah,
    "sah-ru": {
      language: "Sakha",
      location: "Russia",
      id: 1157,
      tag: "sah-RU",
      version: "Release V"
    },
    saq: saq,
    "saq-ke": {
      language: "Samburu",
      location: "Kenya",
      id: 4096,
      tag: "saq-KE",
      version: "Release 10"
    },
    smn: smn,
    "smn-fi": {
      language: "Sami (Inari)",
      location: "Finland",
      id: 9275,
      tag: "smn-FI",
      version: "Release E1"
    },
    smj: smj,
    "smj-no": {
      language: "Sami (Lule)",
      location: "Norway",
      id: 4155,
      tag: "smj-NO",
      version: "Release E1"
    },
    "smj-se": {
      language: "Sami (Lule)",
      location: "Sweden",
      id: 5179,
      tag: "smj-SE",
      version: "Release E1"
    },
    se: se,
    "se-fi": {
      language: "Sami (Northern)",
      location: "Finland",
      id: 3131,
      tag: "se-FI",
      version: "Release E1"
    },
    "se-no": {
      language: "Sami (Northern)",
      location: "Norway",
      id: 1083,
      tag: "se-NO",
      version: "Release E1"
    },
    "se-se": {
      language: "Sami (Northern)",
      location: "Sweden",
      id: 2107,
      tag: "se-SE",
      version: "Release E1"
    },
    sms: sms,
    "sms-fi": {
      language: "Sami (Skolt)",
      location: "Finland",
      id: 8251,
      tag: "sms-FI",
      version: "Release E1"
    },
    sma: sma,
    "sma-no": {
      language: "Sami (Southern)",
      location: "Norway",
      id: 6203,
      tag: "sma-NO",
      version: "Release E1"
    },
    "sma-se": {
      language: "Sami (Southern)",
      location: "Sweden",
      id: 7227,
      tag: "sma-SE",
      version: "Release E1"
    },
    sg: sg,
    "sg-cf": {
      language: "Sango",
      location: "Central African Republic",
      id: 4096,
      tag: "sg-CF",
      version: "Release 10"
    },
    sbp: sbp,
    "sbp-tz": {
      language: "Sangu",
      location: "Tanzania",
      id: 4096,
      tag: "sbp-TZ",
      version: "Release 10"
    },
    sa: sa,
    "sa-in": {
      language: "Sanskrit",
      location: "India",
      id: 1103,
      tag: "sa-IN",
      version: "Release C"
    },
    gd: gd,
    "gd-gb": {
      language: "Scottish Gaelic",
      location: "United Kingdom",
      id: 1169,
      tag: "gd-GB",
      version: "Release 7"
    },
    seh: seh,
    "seh-mz": {
      language: "Sena",
      location: "Mozambique",
      id: 4096,
      tag: "seh-MZ",
      version: "Release 10"
    },
    "sr-cyrl": {
      language: "Serbian (Cyrillic)",
      location: null,
      id: 27674,
      tag: "sr-Cyrl",
      version: "Windows 7"
    },
    "sr-cyrl-ba": {
      language: "Serbian (Cyrillic)",
      location: "Bosnia and Herzegovina",
      id: 7194,
      tag: "sr-Cyrl-BA",
      version: "Release E1"
    },
    "sr-cyrl-me": {
      language: "Serbian (Cyrillic)",
      location: "Montenegro",
      id: 12314,
      tag: "sr-Cyrl-ME",
      version: "Release 7"
    },
    "sr-cyrl-rs": {
      language: "Serbian (Cyrillic)",
      location: "Serbia",
      id: 10266,
      tag: "sr-Cyrl-RS",
      version: "Release 7"
    },
    "sr-cyrl-cs": {
      language: "Serbian (Cyrillic)",
      location: "Serbia and Montenegro (Former)",
      id: 3098,
      tag: "sr-Cyrl-CS",
      version: "Release B"
    },
    "sr-latn": {
      language: "Serbian (Latin)",
      location: null,
      id: 28698,
      tag: "sr-Latn",
      version: "Windows 7"
    },
    sr: sr,
    "sr-latn-ba": {
      language: "Serbian (Latin)",
      location: "Bosnia and Herzegovina",
      id: 6170,
      tag: "sr-Latn-BA",
      version: "Release E1"
    },
    "sr-latn-me": {
      language: "Serbian (Latin)",
      location: "Montenegro",
      id: 11290,
      tag: "sr-Latn-ME",
      version: "Release 7"
    },
    "sr-latn-rs": {
      language: "Serbian (Latin)",
      location: "Serbia",
      id: 9242,
      tag: "sr-Latn-RS",
      version: "Release 7"
    },
    "sr-latn-cs": {
      language: "Serbian (Latin)",
      location: "Serbia and Montenegro (Former)",
      id: 2074,
      tag: "sr-Latn-CS",
      version: "Release B"
    },
    nso: nso,
    "nso-za": {
      language: "Sesotho sa Leboa",
      location: "South Africa",
      id: 1132,
      tag: "nso-ZA",
      version: "Release E1"
    },
    tn: tn,
    "tn-bw": {
      language: "Setswana",
      location: "Botswana",
      id: 2098,
      tag: "tn-BW",
      version: "Release 8"
    },
    "tn-za": {
      language: "Setswana",
      location: "South Africa",
      id: 1074,
      tag: "tn-ZA",
      version: "Release E1"
    },
    ksb: ksb,
    "ksb-tz": {
      language: "Shambala",
      location: "Tanzania",
      id: 4096,
      tag: "ksb-TZ",
      version: "Release 10"
    },
    sn: sn,
    "sn-latn": {
      language: "Shona",
      location: "Latin",
      id: 4096,
      tag: "sn-Latn",
      version: "Release 8.1"
    },
    "sn-latn-zw": {
      language: "Shona",
      location: "Zimbabwe",
      id: 4096,
      tag: "sn-Latn-ZW",
      version: "Release 8.1"
    },
    sd: sd,
    "sd-arab": {
      language: "Sindhi",
      location: null,
      id: 31833,
      tag: "sd-Arab",
      version: "Release 8"
    },
    "sd-arab-pk": {
      language: "Sindhi",
      location: "Islamic Republic of Pakistan",
      id: 2137,
      tag: "sd-Arab-PK",
      version: "Release 8"
    },
    si: si,
    "si-lk": {
      language: "Sinhala",
      location: "Sri Lanka",
      id: 1115,
      tag: "si-LK",
      version: "Release V"
    },
    sk: sk,
    "sk-sk": {
      language: "Slovak",
      location: "Slovakia",
      id: 1051,
      tag: "sk-SK",
      version: "Release A"
    },
    sl: sl,
    "sl-si": {
      language: "Slovenian",
      location: "Slovenia",
      id: 1060,
      tag: "sl-SI",
      version: "Release A"
    },
    xog: xog,
    "xog-ug": {
      language: "Soga",
      location: "Uganda",
      id: 4096,
      tag: "xog-UG",
      version: "Release 10"
    },
    so: so,
    "so-dj": {
      language: "Somali",
      location: "Djibouti",
      id: 4096,
      tag: "so-DJ",
      version: "Release 10"
    },
    "so-et": {
      language: "Somali",
      location: "Ethiopia",
      id: 4096,
      tag: "so-ET",
      version: "Release 10"
    },
    "so-ke": {
      language: "Somali",
      location: "Kenya",
      id: 4096,
      tag: "so-KE",
      version: "Release 10"
    },
    "so-so": {
      language: "Somali",
      location: "Somalia",
      id: 1143,
      tag: "so-SO",
      version: "Release 8.1"
    },
    st: st,
    "st-za": {
      language: "Sotho",
      location: "South Africa",
      id: 1072,
      tag: "st-ZA",
      version: "Release 8.1"
    },
    nr: nr,
    "nr-za": {
      language: "South Ndebele",
      location: "South Africa",
      id: 4096,
      tag: "nr-ZA",
      version: "Release 10"
    },
    "st-ls": {
      language: "Southern Sotho",
      location: "Lesotho",
      id: 4096,
      tag: "st-LS",
      version: "Release 10"
    },
    es: es,
    "es-ar": {
      language: "Spanish",
      location: "Argentina",
      id: 11274,
      tag: "es-AR",
      version: "Release B"
    },
    "es-bz": {
      language: "Spanish",
      location: "Belize",
      id: 4096,
      tag: "es-BZ",
      version: "Release 10.3"
    },
    "es-ve": {
      language: "Spanish",
      location: "Bolivarian Republic of Venezuela",
      id: 8202,
      tag: "es-VE",
      version: "Release B"
    },
    "es-bo": {
      language: "Spanish",
      location: "Bolivia",
      id: 16394,
      tag: "es-BO",
      version: "Release B"
    },
    "es-br": {
      language: "Spanish",
      location: "Brazil",
      id: 4096,
      tag: "es-BR",
      version: "Release 10.2"
    },
    "es-cl": {
      language: "Spanish",
      location: "Chile",
      id: 13322,
      tag: "es-CL",
      version: "Release B"
    },
    "es-co": {
      language: "Spanish",
      location: "Colombia",
      id: 9226,
      tag: "es-CO",
      version: "Release B"
    },
    "es-cr": {
      language: "Spanish",
      location: "Costa Rica",
      id: 5130,
      tag: "es-CR",
      version: "Release B"
    },
    "es-cu": {
      language: "Spanish",
      location: "Cuba",
      id: 23562,
      tag: "es-CU",
      version: "Release 10"
    },
    "es-do": {
      language: "Spanish",
      location: "Dominican Republic",
      id: 7178,
      tag: "es-DO",
      version: "Release B"
    },
    "es-ec": {
      language: "Spanish",
      location: "Ecuador",
      id: 12298,
      tag: "es-EC",
      version: "Release B"
    },
    "es-sv": {
      language: "Spanish",
      location: "El Salvador",
      id: 17418,
      tag: "es-SV",
      version: "Release B"
    },
    "es-gq": {
      language: "Spanish",
      location: "Equatorial Guinea",
      id: 4096,
      tag: "es-GQ",
      version: "Release 10"
    },
    "es-gt": {
      language: "Spanish",
      location: "Guatemala",
      id: 4106,
      tag: "es-GT",
      version: "Release B"
    },
    "es-hn": {
      language: "Spanish",
      location: "Honduras",
      id: 18442,
      tag: "es-HN",
      version: "Release B"
    },
    "es-419": {
      language: "Spanish",
      location: "Latin America",
      id: 22538,
      tag: "es-419",
      version: "Release 8.1"
    },
    "es-mx": {
      language: "Spanish",
      location: "Mexico",
      id: 2058,
      tag: "es-MX",
      version: "Release A"
    },
    "es-ni": {
      language: "Spanish",
      location: "Nicaragua",
      id: 19466,
      tag: "es-NI",
      version: "Release B"
    },
    "es-pa": {
      language: "Spanish",
      location: "Panama",
      id: 6154,
      tag: "es-PA",
      version: "Release B"
    },
    "es-py": {
      language: "Spanish",
      location: "Paraguay",
      id: 15370,
      tag: "es-PY",
      version: "Release B"
    },
    "es-pe": {
      language: "Spanish",
      location: "Peru",
      id: 10250,
      tag: "es-PE",
      version: "Release B"
    },
    "es-ph": {
      language: "Spanish",
      location: "Philippines",
      id: 4096,
      tag: "es-PH",
      version: "Release 10"
    },
    "es-pr": {
      language: "Spanish",
      location: "Puerto Rico",
      id: 20490,
      tag: "es-PR",
      version: "Release B"
    },
    "es-es_tradnl": {
      language: "Spanish",
      location: "Spain",
      id: 1034,
      tag: "es-ES_tradnl",
      version: "Release A"
    },
    "es-es": {
      language: "Spanish",
      location: "Spain",
      id: 3082,
      tag: "es-ES",
      version: "Release A"
    },
    "es-us": {
      language: "Spanish",
      location: "UnitedStates",
      id: 21514,
      tag: "es-US",
      version: "Release V"
    },
    "es-uy": {
      language: "Spanish",
      location: "Uruguay",
      id: 14346,
      tag: "es-UY",
      version: "Release B"
    },
    zgh: zgh,
    "zgh-tfng-ma": {
      language: "Standard Moroccan Tamazight",
      location: "Morocco",
      id: 4096,
      tag: "zgh-Tfng-MA",
      version: "Release 8.1"
    },
    "zgh-tfng": {
      language: "Standard Moroccan Tamazight",
      location: "Tifinagh",
      id: 4096,
      tag: "zgh-Tfng",
      version: "Release 8.1"
    },
    ss: ss,
    "ss-za": {
      language: "Swati",
      location: "South Africa",
      id: 4096,
      tag: "ss-ZA",
      version: "Release 10"
    },
    "ss-sz": {
      language: "Swati",
      location: "Swaziland",
      id: 4096,
      tag: "ss-SZ",
      version: "Release 10"
    },
    sv: sv,
    "sv-ax": {
      language: "Swedish",
      location: "Åland Islands",
      id: 4096,
      tag: "sv-AX",
      version: "Release 10"
    },
    "sv-fi": {
      language: "Swedish",
      location: "Finland",
      id: 2077,
      tag: "sv-FI",
      version: "Release B"
    },
    "sv-se": {
      language: "Swedish",
      location: "Sweden",
      id: 1053,
      tag: "sv-SE",
      version: "Release A"
    },
    syr: syr,
    "syr-sy": {
      language: "Syriac",
      location: "Syria",
      id: 1114,
      tag: "syr-SY",
      version: "Release D"
    },
    shi: shi,
    "shi-tfng": {
      language: "Tachelhit",
      location: "Tifinagh",
      id: 4096,
      tag: "shi-Tfng",
      version: "Release 10"
    },
    "shi-tfng-ma": {
      language: "Tachelhit",
      location: "Tifinagh, Morocco",
      id: 4096,
      tag: "shi-Tfng-MA",
      version: "Release 10"
    },
    "shi-latn": {
      language: "Tachelhit (Latin)",
      location: null,
      id: 4096,
      tag: "shi-Latn",
      version: "Release 10"
    },
    "shi-latn-ma": {
      language: "Tachelhit (Latin)",
      location: "Morocco",
      id: 4096,
      tag: "shi-Latn-MA",
      version: "Release 10"
    },
    dav: dav,
    "dav-ke": {
      language: "Taita",
      location: "Kenya",
      id: 4096,
      tag: "dav-KE",
      version: "Release 10"
    },
    tg: tg,
    "tg-cyrl": {
      language: "Tajik (Cyrillic)",
      location: null,
      id: 31784,
      tag: "tg-Cyrl",
      version: "Windows 7"
    },
    "tg-cyrl-tj": {
      language: "Tajik (Cyrillic)",
      location: "Tajikistan",
      id: 1064,
      tag: "tg-Cyrl-TJ",
      version: "Release V"
    },
    tzm: tzm,
    "tzm-latn": {
      language: "Tamazight (Latin)",
      location: null,
      id: 31839,
      tag: "tzm-Latn",
      version: "Windows 7"
    },
    "tzm-latn-dz": {
      language: "Tamazight (Latin)",
      location: "Algeria",
      id: 2143,
      tag: "tzm-Latn-DZ",
      version: "Release V"
    },
    ta: ta,
    "ta-in": {
      language: "Tamil",
      location: "India",
      id: 1097,
      tag: "ta-IN",
      version: "Release C"
    },
    "ta-my": {
      language: "Tamil",
      location: "Malaysia",
      id: 4096,
      tag: "ta-MY",
      version: "Release 10"
    },
    "ta-sg": {
      language: "Tamil",
      location: "Singapore",
      id: 4096,
      tag: "ta-SG",
      version: "Release 10"
    },
    "ta-lk": {
      language: "Tamil",
      location: "Sri Lanka",
      id: 2121,
      tag: "ta-LK",
      version: "Release 8"
    },
    twq: twq,
    "twq-ne": {
      language: "Tasawaq",
      location: "Niger",
      id: 4096,
      tag: "twq-NE",
      version: "Release 10"
    },
    tt: tt,
    "tt-ru": {
      language: "Tatar",
      location: "Russia",
      id: 1092,
      tag: "tt-RU",
      version: "Release D"
    },
    te: te,
    "te-in": {
      language: "Telugu",
      location: "India",
      id: 1098,
      tag: "te-IN",
      version: "Release D"
    },
    teo: teo,
    "teo-ke": {
      language: "Teso",
      location: "Kenya",
      id: 4096,
      tag: "teo-KE",
      version: "Release 10"
    },
    "teo-ug": {
      language: "Teso",
      location: "Uganda",
      id: 4096,
      tag: "teo-UG",
      version: "Release 10"
    },
    th: th,
    "th-th": {
      language: "Thai",
      location: "Thailand",
      id: 1054,
      tag: "th-TH",
      version: "Release B"
    },
    bo: bo,
    "bo-in": {
      language: "Tibetan",
      location: "India",
      id: 4096,
      tag: "bo-IN",
      version: "Release 10"
    },
    "bo-cn": {
      language: "Tibetan",
      location: "People's Republic of China",
      id: 1105,
      tag: "bo-CN",
      version: "Release V"
    },
    tig: tig,
    "tig-er": {
      language: "Tigre",
      location: "Eritrea",
      id: 4096,
      tag: "tig-ER",
      version: "Release 10"
    },
    ti: ti,
    "ti-er": {
      language: "Tigrinya",
      location: "Eritrea",
      id: 2163,
      tag: "ti-ER",
      version: "Release 8"
    },
    "ti-et": {
      language: "Tigrinya",
      location: "Ethiopia",
      id: 1139,
      tag: "ti-ET",
      version: "Release 8"
    },
    to: to,
    "to-to": {
      language: "Tongan",
      location: "Tonga",
      id: 4096,
      tag: "to-TO",
      version: "Release 10"
    },
    ts: ts,
    "ts-za": {
      language: "Tsonga",
      location: "South Africa",
      id: 1073,
      tag: "ts-ZA",
      version: "Release 8.1"
    },
    tr: tr,
    "tr-cy": {
      language: "Turkish",
      location: "Cyprus",
      id: 4096,
      tag: "tr-CY",
      version: "Release 10"
    },
    "tr-tr": {
      language: "Turkish",
      location: "Turkey",
      id: 1055,
      tag: "tr-TR",
      version: "Release A"
    },
    tk: tk,
    "tk-tm": {
      language: "Turkmen",
      location: "Turkmenistan",
      id: 1090,
      tag: "tk-TM",
      version: "Release V"
    },
    uk: uk,
    "uk-ua": {
      language: "Ukrainian",
      location: "Ukraine",
      id: 1058,
      tag: "uk-UA",
      version: "Release B"
    },
    hsb: hsb,
    "hsb-de": {
      language: "Upper Sorbian",
      location: "Germany",
      id: 1070,
      tag: "hsb-DE",
      version: "Release V"
    },
    ur: ur,
    "ur-in": {
      language: "Urdu",
      location: "India",
      id: 2080,
      tag: "ur-IN",
      version: "Release 8.1"
    },
    "ur-pk": {
      language: "Urdu",
      location: "Islamic Republic of Pakistan",
      id: 1056,
      tag: "ur-PK",
      version: "Release C"
    },
    ug: ug,
    "ug-cn": {
      language: "Uyghur",
      location: "People's Republic of China",
      id: 1152,
      tag: "ug-CN",
      version: "Release V"
    },
    "uz-arab": {
      language: "Uzbek",
      location: "Perso-Arabic",
      id: 4096,
      tag: "uz-Arab",
      version: "Release 10"
    },
    "uz-arab-af": {
      language: "Uzbek",
      location: "Perso-Arabic, Afghanistan",
      id: 4096,
      tag: "uz-Arab-AF",
      version: "Release 10"
    },
    "uz-cyrl": {
      language: "Uzbek (Cyrillic)",
      location: null,
      id: 30787,
      tag: "uz-Cyrl",
      version: "Windows 7"
    },
    "uz-cyrl-uz": {
      language: "Uzbek (Cyrillic)",
      location: "Uzbekistan",
      id: 2115,
      tag: "uz-Cyrl-UZ",
      version: "Release C"
    },
    uz: uz,
    "uz-latn": {
      language: "Uzbek (Latin)",
      location: null,
      id: 31811,
      tag: "uz-Latn",
      version: "Windows7"
    },
    "uz-latn-uz": {
      language: "Uzbek (Latin)",
      location: "Uzbekistan",
      id: 1091,
      tag: "uz-Latn-UZ",
      version: "Release C"
    },
    vai: vai,
    "vai-vaii": {
      language: "Vai",
      location: null,
      id: 4096,
      tag: "vai-Vaii",
      version: "Release 10"
    },
    "vai-vaii-lr": {
      language: "Vai",
      location: "Liberia",
      id: 4096,
      tag: "vai-Vaii-LR",
      version: "Release 10"
    },
    "vai-latn-lr": {
      language: "Vai (Latin)",
      location: "Liberia",
      id: 4096,
      tag: "vai-Latn-LR",
      version: "Release 10"
    },
    "vai-latn": {
      language: "Vai (Latin)",
      location: null,
      id: 4096,
      tag: "vai-Latn",
      version: "Release 10"
    },
    "ca-es-": {
      language: "Valencian",
      location: "Spain",
      id: 2051,
      tag: "ca-ES-",
      version: "Release 8"
    },
    ve: ve,
    "ve-za": {
      language: "Venda",
      location: "South Africa",
      id: 1075,
      tag: "ve-ZA",
      version: "Release 10"
    },
    vi: vi,
    "vi-vn": {
      language: "Vietnamese",
      location: "Vietnam",
      id: 1066,
      tag: "vi-VN",
      version: "Release B"
    },
    vo: vo,
    "vo-001": {
      language: "Volapük",
      location: "World",
      id: 4096,
      tag: "vo-001",
      version: "Release 10"
    },
    vun: vun,
    "vun-tz": {
      language: "Vunjo",
      location: "Tanzania",
      id: 4096,
      tag: "vun-TZ",
      version: "Release 10"
    },
    wae: wae,
    "wae-ch": {
      language: "Walser",
      location: "Switzerland",
      id: 4096,
      tag: "wae-CH",
      version: "Release 10"
    },
    cy: cy,
    "cy-gb": {
      language: "Welsh",
      location: "United Kingdom",
      id: 1106,
      tag: "cy-GB",
      version: "ReleaseE1"
    },
    wal: wal,
    "wal-et": {
      language: "Wolaytta",
      location: "Ethiopia",
      id: 4096,
      tag: "wal-ET",
      version: "Release 10"
    },
    wo: wo,
    "wo-sn": {
      language: "Wolof",
      location: "Senegal",
      id: 1160,
      tag: "wo-SN",
      version: "Release V"
    },
    xh: xh,
    "xh-za": {
      language: "Xhosa",
      location: "South Africa",
      id: 1076,
      tag: "xh-ZA",
      version: "Release E1"
    },
    yav: yav,
    "yav-cm": {
      language: "Yangben",
      location: "Cameroon",
      id: 4096,
      tag: "yav-CM",
      version: "Release 10"
    },
    ii: ii,
    "ii-cn": {
      language: "Yi",
      location: "People's Republic of China",
      id: 1144,
      tag: "ii-CN",
      version: "Release V"
    },
    yo: yo,
    "yo-bj": {
      language: "Yoruba",
      location: "Benin",
      id: 4096,
      tag: "yo-BJ",
      version: "Release 10"
    },
    "yo-ng": {
      language: "Yoruba",
      location: "Nigeria",
      id: 1130,
      tag: "yo-NG",
      version: "Release V"
    },
    dje: dje,
    "dje-ne": {
      language: "Zarma",
      location: "Niger",
      id: 4096,
      tag: "dje-NE",
      version: "Release 10"
    },
    zu: zu,
    "zu-za": {
      language: "Zulu",
      location: "South Africa",
      id: 1077,
      tag: "zu-ZA",
      version: "Release E1"
    }
  };
  var Abkhazian = {
    name: "Abkhazian",
    names: ["Abkhazian"],
    "iso639-2": "abk",
    "iso639-1": "ab"
  };
  var Achinese = {
    name: "Achinese",
    names: ["Achinese"],
    "iso639-2": "ace",
    "iso639-1": null
  };
  var Acoli = {
    name: "Acoli",
    names: ["Acoli"],
    "iso639-2": "ach",
    "iso639-1": null
  };
  var Adangme = {
    name: "Adangme",
    names: ["Adangme"],
    "iso639-2": "ada",
    "iso639-1": null
  };
  var Adygei = {
    name: "Adygei",
    names: ["Adyghe", "Adygei"],
    "iso639-2": "ady",
    "iso639-1": null
  };
  var Adyghe = {
    name: "Adyghe",
    names: ["Adyghe", "Adygei"],
    "iso639-2": "ady",
    "iso639-1": null
  };
  var Afar = {
    name: "Afar",
    names: ["Afar"],
    "iso639-2": "aar",
    "iso639-1": "aa"
  };
  var Afrihili = {
    name: "Afrihili",
    names: ["Afrihili"],
    "iso639-2": "afh",
    "iso639-1": null
  };
  var Afrikaans = {
    name: "Afrikaans",
    names: ["Afrikaans"],
    "iso639-2": "afr",
    "iso639-1": "af"
  };
  var Ainu = {
    name: "Ainu",
    names: ["Ainu"],
    "iso639-2": "ain",
    "iso639-1": null
  };
  var Akan = {
    name: "Akan",
    names: ["Akan"],
    "iso639-2": "aka",
    "iso639-1": "ak"
  };
  var Akkadian = {
    name: "Akkadian",
    names: ["Akkadian"],
    "iso639-2": "akk",
    "iso639-1": null
  };
  var Albanian = {
    name: "Albanian",
    names: ["Albanian"],
    "iso639-2": "alb/sqi",
    "iso639-1": "sq"
  };
  var Alemannic = {
    name: "Alemannic",
    names: ["Swiss German", "Alemannic", "Alsatian"],
    "iso639-2": "gsw",
    "iso639-1": null
  };
  var Aleut = {
    name: "Aleut",
    names: ["Aleut"],
    "iso639-2": "ale",
    "iso639-1": null
  };
  var Alsatian = {
    name: "Alsatian",
    names: ["Swiss German", "Alemannic", "Alsatian"],
    "iso639-2": "gsw",
    "iso639-1": null
  };
  var Amharic = {
    name: "Amharic",
    names: ["Amharic"],
    "iso639-2": "amh",
    "iso639-1": "am"
  };
  var Angika = {
    name: "Angika",
    names: ["Angika"],
    "iso639-2": "anp",
    "iso639-1": null
  };
  var Arabic = {
    name: "Arabic",
    names: ["Arabic"],
    "iso639-2": "ara",
    "iso639-1": "ar"
  };
  var Aragonese = {
    name: "Aragonese",
    names: ["Aragonese"],
    "iso639-2": "arg",
    "iso639-1": "an"
  };
  var Arapaho = {
    name: "Arapaho",
    names: ["Arapaho"],
    "iso639-2": "arp",
    "iso639-1": null
  };
  var Arawak = {
    name: "Arawak",
    names: ["Arawak"],
    "iso639-2": "arw",
    "iso639-1": null
  };
  var Armenian = {
    name: "Armenian",
    names: ["Armenian"],
    "iso639-2": "arm/hye",
    "iso639-1": "hy"
  };
  var Aromanian = {
    name: "Aromanian",
    names: ["Aromanian", "Arumanian", "Macedo-Romanian"],
    "iso639-2": "rup",
    "iso639-1": null
  };
  var Arumanian = {
    name: "Arumanian",
    names: ["Aromanian", "Arumanian", "Macedo-Romanian"],
    "iso639-2": "rup",
    "iso639-1": null
  };
  var Assamese = {
    name: "Assamese",
    names: ["Assamese"],
    "iso639-2": "asm",
    "iso639-1": "as"
  };
  var Asturian = {
    name: "Asturian",
    names: ["Asturian", "Bable", "Leonese", "Asturleonese"],
    "iso639-2": "ast",
    "iso639-1": null
  };
  var Asturleonese = {
    name: "Asturleonese",
    names: ["Asturian", "Bable", "Leonese", "Asturleonese"],
    "iso639-2": "ast",
    "iso639-1": null
  };
  var Avaric = {
    name: "Avaric",
    names: ["Avaric"],
    "iso639-2": "ava",
    "iso639-1": "av"
  };
  var Avestan = {
    name: "Avestan",
    names: ["Avestan"],
    "iso639-2": "ave",
    "iso639-1": "ae"
  };
  var Awadhi = {
    name: "Awadhi",
    names: ["Awadhi"],
    "iso639-2": "awa",
    "iso639-1": null
  };
  var Aymara = {
    name: "Aymara",
    names: ["Aymara"],
    "iso639-2": "aym",
    "iso639-1": "ay"
  };
  var Azerbaijani = {
    name: "Azerbaijani",
    names: ["Azerbaijani"],
    "iso639-2": "aze",
    "iso639-1": "az"
  };
  var Bable = {
    name: "Bable",
    names: ["Asturian", "Bable", "Leonese", "Asturleonese"],
    "iso639-2": "ast",
    "iso639-1": null
  };
  var Balinese = {
    name: "Balinese",
    names: ["Balinese"],
    "iso639-2": "ban",
    "iso639-1": null
  };
  var Baluchi = {
    name: "Baluchi",
    names: ["Baluchi"],
    "iso639-2": "bal",
    "iso639-1": null
  };
  var Bambara = {
    name: "Bambara",
    names: ["Bambara"],
    "iso639-2": "bam",
    "iso639-1": "bm"
  };
  var Basa = {
    name: "Basa",
    names: ["Basa"],
    "iso639-2": "bas",
    "iso639-1": null
  };
  var Bashkir = {
    name: "Bashkir",
    names: ["Bashkir"],
    "iso639-2": "bak",
    "iso639-1": "ba"
  };
  var Basque = {
    name: "Basque",
    names: ["Basque"],
    "iso639-2": "baq/eus",
    "iso639-1": "eu"
  };
  var Bedawiyet = {
    name: "Bedawiyet",
    names: ["Beja", "Bedawiyet"],
    "iso639-2": "bej",
    "iso639-1": null
  };
  var Beja = {
    name: "Beja",
    names: ["Beja", "Bedawiyet"],
    "iso639-2": "bej",
    "iso639-1": null
  };
  var Belarusian = {
    name: "Belarusian",
    names: ["Belarusian"],
    "iso639-2": "bel",
    "iso639-1": "be"
  };
  var Bemba = {
    name: "Bemba",
    names: ["Bemba"],
    "iso639-2": "bem",
    "iso639-1": null
  };
  var Bengali = {
    name: "Bengali",
    names: ["Bengali"],
    "iso639-2": "ben",
    "iso639-1": "bn"
  };
  var Bhojpuri = {
    name: "Bhojpuri",
    names: ["Bhojpuri"],
    "iso639-2": "bho",
    "iso639-1": null
  };
  var Bikol = {
    name: "Bikol",
    names: ["Bikol"],
    "iso639-2": "bik",
    "iso639-1": null
  };
  var Bilin = {
    name: "Bilin",
    names: ["Blin", "Bilin"],
    "iso639-2": "byn",
    "iso639-1": null
  };
  var Bini = {
    name: "Bini",
    names: ["Bini", "Edo"],
    "iso639-2": "bin",
    "iso639-1": null
  };
  var Bislama = {
    name: "Bislama",
    names: ["Bislama"],
    "iso639-2": "bis",
    "iso639-1": "bi"
  };
  var Blin = {
    name: "Blin",
    names: ["Blin", "Bilin"],
    "iso639-2": "byn",
    "iso639-1": null
  };
  var Bliss = {
    name: "Bliss",
    names: ["Blissymbols", "Blissymbolics", "Bliss"],
    "iso639-2": "zbl",
    "iso639-1": null
  };
  var Blissymbolics = {
    name: "Blissymbolics",
    names: ["Blissymbols", "Blissymbolics", "Bliss"],
    "iso639-2": "zbl",
    "iso639-1": null
  };
  var Blissymbols = {
    name: "Blissymbols",
    names: ["Blissymbols", "Blissymbolics", "Bliss"],
    "iso639-2": "zbl",
    "iso639-1": null
  };
  var Bosnian = {
    name: "Bosnian",
    names: ["Bosnian"],
    "iso639-2": "bos",
    "iso639-1": "bs"
  };
  var Braj = {
    name: "Braj",
    names: ["Braj"],
    "iso639-2": "bra",
    "iso639-1": null
  };
  var Breton = {
    name: "Breton",
    names: ["Breton"],
    "iso639-2": "bre",
    "iso639-1": "br"
  };
  var Buginese = {
    name: "Buginese",
    names: ["Buginese"],
    "iso639-2": "bug",
    "iso639-1": null
  };
  var Bulgarian = {
    name: "Bulgarian",
    names: ["Bulgarian"],
    "iso639-2": "bul",
    "iso639-1": "bg"
  };
  var Buriat = {
    name: "Buriat",
    names: ["Buriat"],
    "iso639-2": "bua",
    "iso639-1": null
  };
  var Burmese = {
    name: "Burmese",
    names: ["Burmese"],
    "iso639-2": "bur/mya",
    "iso639-1": "my"
  };
  var Caddo = {
    name: "Caddo",
    names: ["Caddo"],
    "iso639-2": "cad",
    "iso639-1": null
  };
  var Castilian = {
    name: "Castilian",
    names: ["Spanish", "Castilian"],
    "iso639-2": "spa",
    "iso639-1": "es"
  };
  var Catalan = {
    name: "Catalan",
    names: ["Catalan", "Valencian"],
    "iso639-2": "cat",
    "iso639-1": "ca"
  };
  var Cebuano = {
    name: "Cebuano",
    names: ["Cebuano"],
    "iso639-2": "ceb",
    "iso639-1": null
  };
  var Chagatai = {
    name: "Chagatai",
    names: ["Chagatai"],
    "iso639-2": "chg",
    "iso639-1": null
  };
  var Chamorro = {
    name: "Chamorro",
    names: ["Chamorro"],
    "iso639-2": "cha",
    "iso639-1": "ch"
  };
  var Chechen = {
    name: "Chechen",
    names: ["Chechen"],
    "iso639-2": "che",
    "iso639-1": "ce"
  };
  var Cherokee = {
    name: "Cherokee",
    names: ["Cherokee"],
    "iso639-2": "chr",
    "iso639-1": null
  };
  var Chewa = {
    name: "Chewa",
    names: ["Chichewa", "Chewa", "Nyanja"],
    "iso639-2": "nya",
    "iso639-1": "ny"
  };
  var Cheyenne = {
    name: "Cheyenne",
    names: ["Cheyenne"],
    "iso639-2": "chy",
    "iso639-1": null
  };
  var Chibcha = {
    name: "Chibcha",
    names: ["Chibcha"],
    "iso639-2": "chb",
    "iso639-1": null
  };
  var Chichewa = {
    name: "Chichewa",
    names: ["Chichewa", "Chewa", "Nyanja"],
    "iso639-2": "nya",
    "iso639-1": "ny"
  };
  var Chinese = {
    name: "Chinese",
    names: ["Chinese"],
    "iso639-2": "chi/zho",
    "iso639-1": "zh"
  };
  var Chipewyan = {
    name: "Chipewyan",
    names: ["Chipewyan", "Dene Suline"],
    "iso639-2": "chp",
    "iso639-1": null
  };
  var Choctaw = {
    name: "Choctaw",
    names: ["Choctaw"],
    "iso639-2": "cho",
    "iso639-1": null
  };
  var Chuang = {
    name: "Chuang",
    names: ["Zhuang", "Chuang"],
    "iso639-2": "zha",
    "iso639-1": "za"
  };
  var Chuukese = {
    name: "Chuukese",
    names: ["Chuukese"],
    "iso639-2": "chk",
    "iso639-1": null
  };
  var Chuvash = {
    name: "Chuvash",
    names: ["Chuvash"],
    "iso639-2": "chv",
    "iso639-1": "cv"
  };
  var Coptic = {
    name: "Coptic",
    names: ["Coptic"],
    "iso639-2": "cop",
    "iso639-1": null
  };
  var Cornish = {
    name: "Cornish",
    names: ["Cornish"],
    "iso639-2": "cor",
    "iso639-1": "kw"
  };
  var Corsican = {
    name: "Corsican",
    names: ["Corsican"],
    "iso639-2": "cos",
    "iso639-1": "co"
  };
  var Cree = {
    name: "Cree",
    names: ["Cree"],
    "iso639-2": "cre",
    "iso639-1": "cr"
  };
  var Creek = {
    name: "Creek",
    names: ["Creek"],
    "iso639-2": "mus",
    "iso639-1": null
  };
  var Croatian = {
    name: "Croatian",
    names: ["Croatian"],
    "iso639-2": "hrv",
    "iso639-1": "hr"
  };
  var Czech = {
    name: "Czech",
    names: ["Czech"],
    "iso639-2": "cze/ces",
    "iso639-1": "cs"
  };
  var Dakota = {
    name: "Dakota",
    names: ["Dakota"],
    "iso639-2": "dak",
    "iso639-1": null
  };
  var Danish = {
    name: "Danish",
    names: ["Danish"],
    "iso639-2": "dan",
    "iso639-1": "da"
  };
  var Dargwa = {
    name: "Dargwa",
    names: ["Dargwa"],
    "iso639-2": "dar",
    "iso639-1": null
  };
  var Delaware = {
    name: "Delaware",
    names: ["Delaware"],
    "iso639-2": "del",
    "iso639-1": null
  };
  var Dhivehi = {
    name: "Dhivehi",
    names: ["Divehi", "Dhivehi", "Maldivian"],
    "iso639-2": "div",
    "iso639-1": "dv"
  };
  var Dimili = {
    name: "Dimili",
    names: ["Zaza", "Dimili", "Dimli", "Kirdki", "Kirmanjki", "Zazaki"],
    "iso639-2": "zza",
    "iso639-1": null
  };
  var Dimli = {
    name: "Dimli",
    names: ["Zaza", "Dimili", "Dimli", "Kirdki", "Kirmanjki", "Zazaki"],
    "iso639-2": "zza",
    "iso639-1": null
  };
  var Dinka = {
    name: "Dinka",
    names: ["Dinka"],
    "iso639-2": "din",
    "iso639-1": null
  };
  var Divehi = {
    name: "Divehi",
    names: ["Divehi", "Dhivehi", "Maldivian"],
    "iso639-2": "div",
    "iso639-1": "dv"
  };
  var Dogri = {
    name: "Dogri",
    names: ["Dogri"],
    "iso639-2": "doi",
    "iso639-1": null
  };
  var Dogrib = {
    name: "Dogrib",
    names: ["Dogrib"],
    "iso639-2": "dgr",
    "iso639-1": null
  };
  var Duala = {
    name: "Duala",
    names: ["Duala"],
    "iso639-2": "dua",
    "iso639-1": null
  };
  var Dutch = {
    name: "Dutch",
    names: ["Dutch", "Flemish"],
    "iso639-2": "dut/nld",
    "iso639-1": "nl"
  };
  var Dyula = {
    name: "Dyula",
    names: ["Dyula"],
    "iso639-2": "dyu",
    "iso639-1": null
  };
  var Dzongkha = {
    name: "Dzongkha",
    names: ["Dzongkha"],
    "iso639-2": "dzo",
    "iso639-1": "dz"
  };
  var Edo = {
    name: "Edo",
    names: ["Bini", "Edo"],
    "iso639-2": "bin",
    "iso639-1": null
  };
  var Efik = {
    name: "Efik",
    names: ["Efik"],
    "iso639-2": "efi",
    "iso639-1": null
  };
  var Ekajuk = {
    name: "Ekajuk",
    names: ["Ekajuk"],
    "iso639-2": "eka",
    "iso639-1": null
  };
  var Elamite = {
    name: "Elamite",
    names: ["Elamite"],
    "iso639-2": "elx",
    "iso639-1": null
  };
  var English = {
    name: "English",
    names: ["English"],
    "iso639-2": "eng",
    "iso639-1": "en"
  };
  var Erzya = {
    name: "Erzya",
    names: ["Erzya"],
    "iso639-2": "myv",
    "iso639-1": null
  };
  var Esperanto = {
    name: "Esperanto",
    names: ["Esperanto"],
    "iso639-2": "epo",
    "iso639-1": "eo"
  };
  var Estonian = {
    name: "Estonian",
    names: ["Estonian"],
    "iso639-2": "est",
    "iso639-1": "et"
  };
  var Ewe = {
    name: "Ewe",
    names: ["Ewe"],
    "iso639-2": "ewe",
    "iso639-1": "ee"
  };
  var Ewondo = {
    name: "Ewondo",
    names: ["Ewondo"],
    "iso639-2": "ewo",
    "iso639-1": null
  };
  var Fang = {
    name: "Fang",
    names: ["Fang"],
    "iso639-2": "fan",
    "iso639-1": null
  };
  var Fanti = {
    name: "Fanti",
    names: ["Fanti"],
    "iso639-2": "fat",
    "iso639-1": null
  };
  var Faroese = {
    name: "Faroese",
    names: ["Faroese"],
    "iso639-2": "fao",
    "iso639-1": "fo"
  };
  var Fijian = {
    name: "Fijian",
    names: ["Fijian"],
    "iso639-2": "fij",
    "iso639-1": "fj"
  };
  var Filipino = {
    name: "Filipino",
    names: ["Filipino", "Pilipino"],
    "iso639-2": "fil",
    "iso639-1": null
  };
  var Finnish = {
    name: "Finnish",
    names: ["Finnish"],
    "iso639-2": "fin",
    "iso639-1": "fi"
  };
  var Flemish = {
    name: "Flemish",
    names: ["Dutch", "Flemish"],
    "iso639-2": "dut/nld",
    "iso639-1": "nl"
  };
  var Fon = {
    name: "Fon",
    names: ["Fon"],
    "iso639-2": "fon",
    "iso639-1": null
  };
  var French = {
    name: "French",
    names: ["French"],
    "iso639-2": "fre/fra",
    "iso639-1": "fr"
  };
  var Friulian = {
    name: "Friulian",
    names: ["Friulian"],
    "iso639-2": "fur",
    "iso639-1": null
  };
  var Fulah = {
    name: "Fulah",
    names: ["Fulah"],
    "iso639-2": "ful",
    "iso639-1": "ff"
  };
  var Ga = {
    name: "Ga",
    names: ["Ga"],
    "iso639-2": "gaa",
    "iso639-1": null
  };
  var Gaelic = {
    name: "Gaelic",
    names: ["Gaelic", "Scottish Gaelic"],
    "iso639-2": "gla",
    "iso639-1": "gd"
  };
  var Galician = {
    name: "Galician",
    names: ["Galician"],
    "iso639-2": "glg",
    "iso639-1": "gl"
  };
  var Ganda = {
    name: "Ganda",
    names: ["Ganda"],
    "iso639-2": "lug",
    "iso639-1": "lg"
  };
  var Gayo = {
    name: "Gayo",
    names: ["Gayo"],
    "iso639-2": "gay",
    "iso639-1": null
  };
  var Gbaya = {
    name: "Gbaya",
    names: ["Gbaya"],
    "iso639-2": "gba",
    "iso639-1": null
  };
  var Geez = {
    name: "Geez",
    names: ["Geez"],
    "iso639-2": "gez",
    "iso639-1": null
  };
  var Georgian = {
    name: "Georgian",
    names: ["Georgian"],
    "iso639-2": "geo/kat",
    "iso639-1": "ka"
  };
  var German = {
    name: "German",
    names: ["German"],
    "iso639-2": "ger/deu",
    "iso639-1": "de"
  };
  var Gikuyu = {
    name: "Gikuyu",
    names: ["Kikuyu", "Gikuyu"],
    "iso639-2": "kik",
    "iso639-1": "ki"
  };
  var Gilbertese = {
    name: "Gilbertese",
    names: ["Gilbertese"],
    "iso639-2": "gil",
    "iso639-1": null
  };
  var Gondi = {
    name: "Gondi",
    names: ["Gondi"],
    "iso639-2": "gon",
    "iso639-1": null
  };
  var Gorontalo = {
    name: "Gorontalo",
    names: ["Gorontalo"],
    "iso639-2": "gor",
    "iso639-1": null
  };
  var Gothic = {
    name: "Gothic",
    names: ["Gothic"],
    "iso639-2": "got",
    "iso639-1": null
  };
  var Grebo = {
    name: "Grebo",
    names: ["Grebo"],
    "iso639-2": "grb",
    "iso639-1": null
  };
  var Greenlandic = {
    name: "Greenlandic",
    names: ["Kalaallisut", "Greenlandic"],
    "iso639-2": "kal",
    "iso639-1": "kl"
  };
  var Guarani = {
    name: "Guarani",
    names: ["Guarani"],
    "iso639-2": "grn",
    "iso639-1": "gn"
  };
  var Gujarati = {
    name: "Gujarati",
    names: ["Gujarati"],
    "iso639-2": "guj",
    "iso639-1": "gu"
  };
  var Haida = {
    name: "Haida",
    names: ["Haida"],
    "iso639-2": "hai",
    "iso639-1": null
  };
  var Haitian = {
    name: "Haitian",
    names: ["Haitian", "Haitian Creole"],
    "iso639-2": "hat",
    "iso639-1": "ht"
  };
  var Hausa = {
    name: "Hausa",
    names: ["Hausa"],
    "iso639-2": "hau",
    "iso639-1": "ha"
  };
  var Hawaiian = {
    name: "Hawaiian",
    names: ["Hawaiian"],
    "iso639-2": "haw",
    "iso639-1": null
  };
  var Hebrew = {
    name: "Hebrew",
    names: ["Hebrew"],
    "iso639-2": "heb",
    "iso639-1": "he"
  };
  var Herero = {
    name: "Herero",
    names: ["Herero"],
    "iso639-2": "her",
    "iso639-1": "hz"
  };
  var Hiligaynon = {
    name: "Hiligaynon",
    names: ["Hiligaynon"],
    "iso639-2": "hil",
    "iso639-1": null
  };
  var Hindi = {
    name: "Hindi",
    names: ["Hindi"],
    "iso639-2": "hin",
    "iso639-1": "hi"
  };
  var Hittite = {
    name: "Hittite",
    names: ["Hittite"],
    "iso639-2": "hit",
    "iso639-1": null
  };
  var Hmong = {
    name: "Hmong",
    names: ["Hmong", "Mong"],
    "iso639-2": "hmn",
    "iso639-1": null
  };
  var Hungarian = {
    name: "Hungarian",
    names: ["Hungarian"],
    "iso639-2": "hun",
    "iso639-1": "hu"
  };
  var Hupa = {
    name: "Hupa",
    names: ["Hupa"],
    "iso639-2": "hup",
    "iso639-1": null
  };
  var Iban = {
    name: "Iban",
    names: ["Iban"],
    "iso639-2": "iba",
    "iso639-1": null
  };
  var Icelandic = {
    name: "Icelandic",
    names: ["Icelandic"],
    "iso639-2": "ice/isl",
    "iso639-1": "is"
  };
  var Ido = {
    name: "Ido",
    names: ["Ido"],
    "iso639-2": "ido",
    "iso639-1": "io"
  };
  var Igbo = {
    name: "Igbo",
    names: ["Igbo"],
    "iso639-2": "ibo",
    "iso639-1": "ig"
  };
  var Iloko = {
    name: "Iloko",
    names: ["Iloko"],
    "iso639-2": "ilo",
    "iso639-1": null
  };
  var Indonesian = {
    name: "Indonesian",
    names: ["Indonesian"],
    "iso639-2": "ind",
    "iso639-1": "id"
  };
  var Ingush = {
    name: "Ingush",
    names: ["Ingush"],
    "iso639-2": "inh",
    "iso639-1": null
  };
  var Interlingue = {
    name: "Interlingue",
    names: ["Interlingue", "Occidental"],
    "iso639-2": "ile",
    "iso639-1": "ie"
  };
  var Inuktitut = {
    name: "Inuktitut",
    names: ["Inuktitut"],
    "iso639-2": "iku",
    "iso639-1": "iu"
  };
  var Inupiaq = {
    name: "Inupiaq",
    names: ["Inupiaq"],
    "iso639-2": "ipk",
    "iso639-1": "ik"
  };
  var Irish = {
    name: "Irish",
    names: ["Irish"],
    "iso639-2": "gle",
    "iso639-1": "ga"
  };
  var Italian = {
    name: "Italian",
    names: ["Italian"],
    "iso639-2": "ita",
    "iso639-1": "it"
  };
  var Japanese = {
    name: "Japanese",
    names: ["Japanese"],
    "iso639-2": "jpn",
    "iso639-1": "ja"
  };
  var Javanese = {
    name: "Javanese",
    names: ["Javanese"],
    "iso639-2": "jav",
    "iso639-1": "jv"
  };
  var Jingpho = {
    name: "Jingpho",
    names: ["Kachin", "Jingpho"],
    "iso639-2": "kac",
    "iso639-1": null
  };
  var Kabardian = {
    name: "Kabardian",
    names: ["Kabardian"],
    "iso639-2": "kbd",
    "iso639-1": null
  };
  var Kabyle = {
    name: "Kabyle",
    names: ["Kabyle"],
    "iso639-2": "kab",
    "iso639-1": null
  };
  var Kachin = {
    name: "Kachin",
    names: ["Kachin", "Jingpho"],
    "iso639-2": "kac",
    "iso639-1": null
  };
  var Kalaallisut = {
    name: "Kalaallisut",
    names: ["Kalaallisut", "Greenlandic"],
    "iso639-2": "kal",
    "iso639-1": "kl"
  };
  var Kalmyk = {
    name: "Kalmyk",
    names: ["Kalmyk", "Oirat"],
    "iso639-2": "xal",
    "iso639-1": null
  };
  var Kamba = {
    name: "Kamba",
    names: ["Kamba"],
    "iso639-2": "kam",
    "iso639-1": null
  };
  var Kannada = {
    name: "Kannada",
    names: ["Kannada"],
    "iso639-2": "kan",
    "iso639-1": "kn"
  };
  var Kanuri = {
    name: "Kanuri",
    names: ["Kanuri"],
    "iso639-2": "kau",
    "iso639-1": "kr"
  };
  var Kapampangan = {
    name: "Kapampangan",
    names: ["Pampanga", "Kapampangan"],
    "iso639-2": "pam",
    "iso639-1": null
  };
  var Karelian = {
    name: "Karelian",
    names: ["Karelian"],
    "iso639-2": "krl",
    "iso639-1": null
  };
  var Kashmiri = {
    name: "Kashmiri",
    names: ["Kashmiri"],
    "iso639-2": "kas",
    "iso639-1": "ks"
  };
  var Kashubian = {
    name: "Kashubian",
    names: ["Kashubian"],
    "iso639-2": "csb",
    "iso639-1": null
  };
  var Kawi = {
    name: "Kawi",
    names: ["Kawi"],
    "iso639-2": "kaw",
    "iso639-1": null
  };
  var Kazakh = {
    name: "Kazakh",
    names: ["Kazakh"],
    "iso639-2": "kaz",
    "iso639-1": "kk"
  };
  var Khasi = {
    name: "Khasi",
    names: ["Khasi"],
    "iso639-2": "kha",
    "iso639-1": null
  };
  var Khotanese = {
    name: "Khotanese",
    names: ["Khotanese", "Sakan"],
    "iso639-2": "kho",
    "iso639-1": null
  };
  var Kikuyu = {
    name: "Kikuyu",
    names: ["Kikuyu", "Gikuyu"],
    "iso639-2": "kik",
    "iso639-1": "ki"
  };
  var Kimbundu = {
    name: "Kimbundu",
    names: ["Kimbundu"],
    "iso639-2": "kmb",
    "iso639-1": null
  };
  var Kinyarwanda = {
    name: "Kinyarwanda",
    names: ["Kinyarwanda"],
    "iso639-2": "kin",
    "iso639-1": "rw"
  };
  var Kirdki = {
    name: "Kirdki",
    names: ["Zaza", "Dimili", "Dimli", "Kirdki", "Kirmanjki", "Zazaki"],
    "iso639-2": "zza",
    "iso639-1": null
  };
  var Kirghiz = {
    name: "Kirghiz",
    names: ["Kirghiz", "Kyrgyz"],
    "iso639-2": "kir",
    "iso639-1": "ky"
  };
  var Kirmanjki = {
    name: "Kirmanjki",
    names: ["Zaza", "Dimili", "Dimli", "Kirdki", "Kirmanjki", "Zazaki"],
    "iso639-2": "zza",
    "iso639-1": null
  };
  var Klingon = {
    name: "Klingon",
    names: ["Klingon", "tlhIngan-Hol"],
    "iso639-2": "tlh",
    "iso639-1": null
  };
  var Komi = {
    name: "Komi",
    names: ["Komi"],
    "iso639-2": "kom",
    "iso639-1": "kv"
  };
  var Kongo = {
    name: "Kongo",
    names: ["Kongo"],
    "iso639-2": "kon",
    "iso639-1": "kg"
  };
  var Konkani = {
    name: "Konkani",
    names: ["Konkani"],
    "iso639-2": "kok",
    "iso639-1": null
  };
  var Korean = {
    name: "Korean",
    names: ["Korean"],
    "iso639-2": "kor",
    "iso639-1": "ko"
  };
  var Kosraean = {
    name: "Kosraean",
    names: ["Kosraean"],
    "iso639-2": "kos",
    "iso639-1": null
  };
  var Kpelle = {
    name: "Kpelle",
    names: ["Kpelle"],
    "iso639-2": "kpe",
    "iso639-1": null
  };
  var Kuanyama = {
    name: "Kuanyama",
    names: ["Kuanyama", "Kwanyama"],
    "iso639-2": "kua",
    "iso639-1": "kj"
  };
  var Kumyk = {
    name: "Kumyk",
    names: ["Kumyk"],
    "iso639-2": "kum",
    "iso639-1": null
  };
  var Kurdish = {
    name: "Kurdish",
    names: ["Kurdish"],
    "iso639-2": "kur",
    "iso639-1": "ku"
  };
  var Kurukh = {
    name: "Kurukh",
    names: ["Kurukh"],
    "iso639-2": "kru",
    "iso639-1": null
  };
  var Kutenai = {
    name: "Kutenai",
    names: ["Kutenai"],
    "iso639-2": "kut",
    "iso639-1": null
  };
  var Kwanyama = {
    name: "Kwanyama",
    names: ["Kuanyama", "Kwanyama"],
    "iso639-2": "kua",
    "iso639-1": "kj"
  };
  var Kyrgyz = {
    name: "Kyrgyz",
    names: ["Kirghiz", "Kyrgyz"],
    "iso639-2": "kir",
    "iso639-1": "ky"
  };
  var Ladino = {
    name: "Ladino",
    names: ["Ladino"],
    "iso639-2": "lad",
    "iso639-1": null
  };
  var Lahnda = {
    name: "Lahnda",
    names: ["Lahnda"],
    "iso639-2": "lah",
    "iso639-1": null
  };
  var Lamba = {
    name: "Lamba",
    names: ["Lamba"],
    "iso639-2": "lam",
    "iso639-1": null
  };
  var Lao = {
    name: "Lao",
    names: ["Lao"],
    "iso639-2": "lao",
    "iso639-1": "lo"
  };
  var Latin = {
    name: "Latin",
    names: ["Latin"],
    "iso639-2": "lat",
    "iso639-1": "la"
  };
  var Latvian = {
    name: "Latvian",
    names: ["Latvian"],
    "iso639-2": "lav",
    "iso639-1": "lv"
  };
  var Leonese = {
    name: "Leonese",
    names: ["Asturian", "Bable", "Leonese", "Asturleonese"],
    "iso639-2": "ast",
    "iso639-1": null
  };
  var Letzeburgesch = {
    name: "Letzeburgesch",
    names: ["Luxembourgish", "Letzeburgesch"],
    "iso639-2": "ltz",
    "iso639-1": "lb"
  };
  var Lezghian = {
    name: "Lezghian",
    names: ["Lezghian"],
    "iso639-2": "lez",
    "iso639-1": null
  };
  var Limburgan = {
    name: "Limburgan",
    names: ["Limburgan", "Limburger", "Limburgish"],
    "iso639-2": "lim",
    "iso639-1": "li"
  };
  var Limburger = {
    name: "Limburger",
    names: ["Limburgan", "Limburger", "Limburgish"],
    "iso639-2": "lim",
    "iso639-1": "li"
  };
  var Limburgish = {
    name: "Limburgish",
    names: ["Limburgan", "Limburger", "Limburgish"],
    "iso639-2": "lim",
    "iso639-1": "li"
  };
  var Lingala = {
    name: "Lingala",
    names: ["Lingala"],
    "iso639-2": "lin",
    "iso639-1": "ln"
  };
  var Lithuanian = {
    name: "Lithuanian",
    names: ["Lithuanian"],
    "iso639-2": "lit",
    "iso639-1": "lt"
  };
  var Lojban = {
    name: "Lojban",
    names: ["Lojban"],
    "iso639-2": "jbo",
    "iso639-1": null
  };
  var Lozi = {
    name: "Lozi",
    names: ["Lozi"],
    "iso639-2": "loz",
    "iso639-1": null
  };
  var Luiseno = {
    name: "Luiseno",
    names: ["Luiseno"],
    "iso639-2": "lui",
    "iso639-1": null
  };
  var Lunda = {
    name: "Lunda",
    names: ["Lunda"],
    "iso639-2": "lun",
    "iso639-1": null
  };
  var Lushai = {
    name: "Lushai",
    names: ["Lushai"],
    "iso639-2": "lus",
    "iso639-1": null
  };
  var Luxembourgish = {
    name: "Luxembourgish",
    names: ["Luxembourgish", "Letzeburgesch"],
    "iso639-2": "ltz",
    "iso639-1": "lb"
  };
  var Macedonian = {
    name: "Macedonian",
    names: ["Macedonian"],
    "iso639-2": "mac/mkd",
    "iso639-1": "mk"
  };
  var Madurese = {
    name: "Madurese",
    names: ["Madurese"],
    "iso639-2": "mad",
    "iso639-1": null
  };
  var Magahi = {
    name: "Magahi",
    names: ["Magahi"],
    "iso639-2": "mag",
    "iso639-1": null
  };
  var Maithili = {
    name: "Maithili",
    names: ["Maithili"],
    "iso639-2": "mai",
    "iso639-1": null
  };
  var Makasar = {
    name: "Makasar",
    names: ["Makasar"],
    "iso639-2": "mak",
    "iso639-1": null
  };
  var Malagasy = {
    name: "Malagasy",
    names: ["Malagasy"],
    "iso639-2": "mlg",
    "iso639-1": "mg"
  };
  var Malay = {
    name: "Malay",
    names: ["Malay"],
    "iso639-2": "may/msa",
    "iso639-1": "ms"
  };
  var Malayalam = {
    name: "Malayalam",
    names: ["Malayalam"],
    "iso639-2": "mal",
    "iso639-1": "ml"
  };
  var Maldivian = {
    name: "Maldivian",
    names: ["Divehi", "Dhivehi", "Maldivian"],
    "iso639-2": "div",
    "iso639-1": "dv"
  };
  var Maltese = {
    name: "Maltese",
    names: ["Maltese"],
    "iso639-2": "mlt",
    "iso639-1": "mt"
  };
  var Manchu = {
    name: "Manchu",
    names: ["Manchu"],
    "iso639-2": "mnc",
    "iso639-1": null
  };
  var Mandar = {
    name: "Mandar",
    names: ["Mandar"],
    "iso639-2": "mdr",
    "iso639-1": null
  };
  var Mandingo = {
    name: "Mandingo",
    names: ["Mandingo"],
    "iso639-2": "man",
    "iso639-1": null
  };
  var Manipuri = {
    name: "Manipuri",
    names: ["Manipuri"],
    "iso639-2": "mni",
    "iso639-1": null
  };
  var Manx = {
    name: "Manx",
    names: ["Manx"],
    "iso639-2": "glv",
    "iso639-1": "gv"
  };
  var Maori = {
    name: "Maori",
    names: ["Maori"],
    "iso639-2": "mao/mri",
    "iso639-1": "mi"
  };
  var Mapuche = {
    name: "Mapuche",
    names: ["Mapudungun", "Mapuche"],
    "iso639-2": "arn",
    "iso639-1": null
  };
  var Mapudungun = {
    name: "Mapudungun",
    names: ["Mapudungun", "Mapuche"],
    "iso639-2": "arn",
    "iso639-1": null
  };
  var Marathi = {
    name: "Marathi",
    names: ["Marathi"],
    "iso639-2": "mar",
    "iso639-1": "mr"
  };
  var Mari = {
    name: "Mari",
    names: ["Mari"],
    "iso639-2": "chm",
    "iso639-1": null
  };
  var Marshallese = {
    name: "Marshallese",
    names: ["Marshallese"],
    "iso639-2": "mah",
    "iso639-1": "mh"
  };
  var Marwari = {
    name: "Marwari",
    names: ["Marwari"],
    "iso639-2": "mwr",
    "iso639-1": null
  };
  var Masai = {
    name: "Masai",
    names: ["Masai"],
    "iso639-2": "mas",
    "iso639-1": null
  };
  var Mende = {
    name: "Mende",
    names: ["Mende"],
    "iso639-2": "men",
    "iso639-1": null
  };
  var Micmac = {
    name: "Micmac",
    names: ["Mi'kmaq", "Micmac"],
    "iso639-2": "mic",
    "iso639-1": null
  };
  var Minangkabau = {
    name: "Minangkabau",
    names: ["Minangkabau"],
    "iso639-2": "min",
    "iso639-1": null
  };
  var Mirandese = {
    name: "Mirandese",
    names: ["Mirandese"],
    "iso639-2": "mwl",
    "iso639-1": null
  };
  var Mohawk = {
    name: "Mohawk",
    names: ["Mohawk"],
    "iso639-2": "moh",
    "iso639-1": null
  };
  var Moksha = {
    name: "Moksha",
    names: ["Moksha"],
    "iso639-2": "mdf",
    "iso639-1": null
  };
  var Moldavian = {
    name: "Moldavian",
    names: ["Romanian", "Moldavian", "Moldovan"],
    "iso639-2": "rum/ron",
    "iso639-1": "ro"
  };
  var Moldovan = {
    name: "Moldovan",
    names: ["Romanian", "Moldavian", "Moldovan"],
    "iso639-2": "rum/ron",
    "iso639-1": "ro"
  };
  var Mong = {
    name: "Mong",
    names: ["Hmong", "Mong"],
    "iso639-2": "hmn",
    "iso639-1": null
  };
  var Mongo = {
    name: "Mongo",
    names: ["Mongo"],
    "iso639-2": "lol",
    "iso639-1": null
  };
  var Mongolian = {
    name: "Mongolian",
    names: ["Mongolian"],
    "iso639-2": "mon",
    "iso639-1": "mn"
  };
  var Montenegrin = {
    name: "Montenegrin",
    names: ["Montenegrin"],
    "iso639-2": "cnr",
    "iso639-1": null
  };
  var Mossi = {
    name: "Mossi",
    names: ["Mossi"],
    "iso639-2": "mos",
    "iso639-1": null
  };
  var Nauru = {
    name: "Nauru",
    names: ["Nauru"],
    "iso639-2": "nau",
    "iso639-1": "na"
  };
  var Navaho = {
    name: "Navaho",
    names: ["Navajo", "Navaho"],
    "iso639-2": "nav",
    "iso639-1": "nv"
  };
  var Navajo = {
    name: "Navajo",
    names: ["Navajo", "Navaho"],
    "iso639-2": "nav",
    "iso639-1": "nv"
  };
  var Ndonga = {
    name: "Ndonga",
    names: ["Ndonga"],
    "iso639-2": "ndo",
    "iso639-1": "ng"
  };
  var Neapolitan = {
    name: "Neapolitan",
    names: ["Neapolitan"],
    "iso639-2": "nap",
    "iso639-1": null
  };
  var Nepali = {
    name: "Nepali",
    names: ["Nepali"],
    "iso639-2": "nep",
    "iso639-1": "ne"
  };
  var Newari = {
    name: "Newari",
    names: ["Nepal Bhasa", "Newari"],
    "iso639-2": "new",
    "iso639-1": null
  };
  var Nias = {
    name: "Nias",
    names: ["Nias"],
    "iso639-2": "nia",
    "iso639-1": null
  };
  var Niuean = {
    name: "Niuean",
    names: ["Niuean"],
    "iso639-2": "niu",
    "iso639-1": null
  };
  var Nogai = {
    name: "Nogai",
    names: ["Nogai"],
    "iso639-2": "nog",
    "iso639-1": null
  };
  var Norwegian = {
    name: "Norwegian",
    names: ["Norwegian"],
    "iso639-2": "nor",
    "iso639-1": "no"
  };
  var Nuosu = {
    name: "Nuosu",
    names: ["Sichuan Yi", "Nuosu"],
    "iso639-2": "iii",
    "iso639-1": "ii"
  };
  var Nyamwezi = {
    name: "Nyamwezi",
    names: ["Nyamwezi"],
    "iso639-2": "nym",
    "iso639-1": null
  };
  var Nyanja = {
    name: "Nyanja",
    names: ["Chichewa", "Chewa", "Nyanja"],
    "iso639-2": "nya",
    "iso639-1": "ny"
  };
  var Nyankole = {
    name: "Nyankole",
    names: ["Nyankole"],
    "iso639-2": "nyn",
    "iso639-1": null
  };
  var Nyoro = {
    name: "Nyoro",
    names: ["Nyoro"],
    "iso639-2": "nyo",
    "iso639-1": null
  };
  var Nzima = {
    name: "Nzima",
    names: ["Nzima"],
    "iso639-2": "nzi",
    "iso639-1": null
  };
  var Occidental = {
    name: "Occidental",
    names: ["Interlingue", "Occidental"],
    "iso639-2": "ile",
    "iso639-1": "ie"
  };
  var Oirat = {
    name: "Oirat",
    names: ["Kalmyk", "Oirat"],
    "iso639-2": "xal",
    "iso639-1": null
  };
  var Ojibwa = {
    name: "Ojibwa",
    names: ["Ojibwa"],
    "iso639-2": "oji",
    "iso639-1": "oj"
  };
  var Oriya = {
    name: "Oriya",
    names: ["Oriya"],
    "iso639-2": "ori",
    "iso639-1": "or"
  };
  var Oromo = {
    name: "Oromo",
    names: ["Oromo"],
    "iso639-2": "orm",
    "iso639-1": "om"
  };
  var Osage = {
    name: "Osage",
    names: ["Osage"],
    "iso639-2": "osa",
    "iso639-1": null
  };
  var Ossetian = {
    name: "Ossetian",
    names: ["Ossetian", "Ossetic"],
    "iso639-2": "oss",
    "iso639-1": "os"
  };
  var Ossetic = {
    name: "Ossetic",
    names: ["Ossetian", "Ossetic"],
    "iso639-2": "oss",
    "iso639-1": "os"
  };
  var Pahlavi = {
    name: "Pahlavi",
    names: ["Pahlavi"],
    "iso639-2": "pal",
    "iso639-1": null
  };
  var Palauan = {
    name: "Palauan",
    names: ["Palauan"],
    "iso639-2": "pau",
    "iso639-1": null
  };
  var Pali = {
    name: "Pali",
    names: ["Pali"],
    "iso639-2": "pli",
    "iso639-1": "pi"
  };
  var Pampanga = {
    name: "Pampanga",
    names: ["Pampanga", "Kapampangan"],
    "iso639-2": "pam",
    "iso639-1": null
  };
  var Pangasinan = {
    name: "Pangasinan",
    names: ["Pangasinan"],
    "iso639-2": "pag",
    "iso639-1": null
  };
  var Panjabi = {
    name: "Panjabi",
    names: ["Panjabi", "Punjabi"],
    "iso639-2": "pan",
    "iso639-1": "pa"
  };
  var Papiamento = {
    name: "Papiamento",
    names: ["Papiamento"],
    "iso639-2": "pap",
    "iso639-1": null
  };
  var Pashto = {
    name: "Pashto",
    names: ["Pushto", "Pashto"],
    "iso639-2": "pus",
    "iso639-1": "ps"
  };
  var Pedi = {
    name: "Pedi",
    names: ["Pedi", "Sepedi", "Northern Sotho"],
    "iso639-2": "nso",
    "iso639-1": null
  };
  var Persian = {
    name: "Persian",
    names: ["Persian"],
    "iso639-2": "per/fas",
    "iso639-1": "fa"
  };
  var Phoenician = {
    name: "Phoenician",
    names: ["Phoenician"],
    "iso639-2": "phn",
    "iso639-1": null
  };
  var Pilipino = {
    name: "Pilipino",
    names: ["Filipino", "Pilipino"],
    "iso639-2": "fil",
    "iso639-1": null
  };
  var Pohnpeian = {
    name: "Pohnpeian",
    names: ["Pohnpeian"],
    "iso639-2": "pon",
    "iso639-1": null
  };
  var Polish = {
    name: "Polish",
    names: ["Polish"],
    "iso639-2": "pol",
    "iso639-1": "pl"
  };
  var Portuguese = {
    name: "Portuguese",
    names: ["Portuguese"],
    "iso639-2": "por",
    "iso639-1": "pt"
  };
  var Punjabi = {
    name: "Punjabi",
    names: ["Panjabi", "Punjabi"],
    "iso639-2": "pan",
    "iso639-1": "pa"
  };
  var Pushto = {
    name: "Pushto",
    names: ["Pushto", "Pashto"],
    "iso639-2": "pus",
    "iso639-1": "ps"
  };
  var Quechua = {
    name: "Quechua",
    names: ["Quechua"],
    "iso639-2": "que",
    "iso639-1": "qu"
  };
  var Rajasthani = {
    name: "Rajasthani",
    names: ["Rajasthani"],
    "iso639-2": "raj",
    "iso639-1": null
  };
  var Rapanui = {
    name: "Rapanui",
    names: ["Rapanui"],
    "iso639-2": "rap",
    "iso639-1": null
  };
  var Rarotongan = {
    name: "Rarotongan",
    names: ["Rarotongan", "Cook Islands Maori"],
    "iso639-2": "rar",
    "iso639-1": null
  };
  var Romanian = {
    name: "Romanian",
    names: ["Romanian", "Moldavian", "Moldovan"],
    "iso639-2": "rum/ron",
    "iso639-1": "ro"
  };
  var Romansh = {
    name: "Romansh",
    names: ["Romansh"],
    "iso639-2": "roh",
    "iso639-1": "rm"
  };
  var Romany = {
    name: "Romany",
    names: ["Romany"],
    "iso639-2": "rom",
    "iso639-1": null
  };
  var Rundi = {
    name: "Rundi",
    names: ["Rundi"],
    "iso639-2": "run",
    "iso639-1": "rn"
  };
  var Russian = {
    name: "Russian",
    names: ["Russian"],
    "iso639-2": "rus",
    "iso639-1": "ru"
  };
  var Sakan = {
    name: "Sakan",
    names: ["Khotanese", "Sakan"],
    "iso639-2": "kho",
    "iso639-1": null
  };
  var Samoan = {
    name: "Samoan",
    names: ["Samoan"],
    "iso639-2": "smo",
    "iso639-1": "sm"
  };
  var Sandawe = {
    name: "Sandawe",
    names: ["Sandawe"],
    "iso639-2": "sad",
    "iso639-1": null
  };
  var Sango = {
    name: "Sango",
    names: ["Sango"],
    "iso639-2": "sag",
    "iso639-1": "sg"
  };
  var Sanskrit = {
    name: "Sanskrit",
    names: ["Sanskrit"],
    "iso639-2": "san",
    "iso639-1": "sa"
  };
  var Santali = {
    name: "Santali",
    names: ["Santali"],
    "iso639-2": "sat",
    "iso639-1": null
  };
  var Sardinian = {
    name: "Sardinian",
    names: ["Sardinian"],
    "iso639-2": "srd",
    "iso639-1": "sc"
  };
  var Sasak = {
    name: "Sasak",
    names: ["Sasak"],
    "iso639-2": "sas",
    "iso639-1": null
  };
  var Scots = {
    name: "Scots",
    names: ["Scots"],
    "iso639-2": "sco",
    "iso639-1": null
  };
  var Selkup = {
    name: "Selkup",
    names: ["Selkup"],
    "iso639-2": "sel",
    "iso639-1": null
  };
  var Sepedi = {
    name: "Sepedi",
    names: ["Pedi", "Sepedi", "Northern Sotho"],
    "iso639-2": "nso",
    "iso639-1": null
  };
  var Serbian = {
    name: "Serbian",
    names: ["Serbian"],
    "iso639-2": "srp",
    "iso639-1": "sr"
  };
  var Serer = {
    name: "Serer",
    names: ["Serer"],
    "iso639-2": "srr",
    "iso639-1": null
  };
  var Shan = {
    name: "Shan",
    names: ["Shan"],
    "iso639-2": "shn",
    "iso639-1": null
  };
  var Shona = {
    name: "Shona",
    names: ["Shona"],
    "iso639-2": "sna",
    "iso639-1": "sn"
  };
  var Sicilian = {
    name: "Sicilian",
    names: ["Sicilian"],
    "iso639-2": "scn",
    "iso639-1": null
  };
  var Sidamo = {
    name: "Sidamo",
    names: ["Sidamo"],
    "iso639-2": "sid",
    "iso639-1": null
  };
  var Siksika = {
    name: "Siksika",
    names: ["Siksika"],
    "iso639-2": "bla",
    "iso639-1": null
  };
  var Sindhi = {
    name: "Sindhi",
    names: ["Sindhi"],
    "iso639-2": "snd",
    "iso639-1": "sd"
  };
  var Sinhala = {
    name: "Sinhala",
    names: ["Sinhala", "Sinhalese"],
    "iso639-2": "sin",
    "iso639-1": "si"
  };
  var Sinhalese = {
    name: "Sinhalese",
    names: ["Sinhala", "Sinhalese"],
    "iso639-2": "sin",
    "iso639-1": "si"
  };
  var Slovak = {
    name: "Slovak",
    names: ["Slovak"],
    "iso639-2": "slo/slk",
    "iso639-1": "sk"
  };
  var Slovenian = {
    name: "Slovenian",
    names: ["Slovenian"],
    "iso639-2": "slv",
    "iso639-1": "sl"
  };
  var Sogdian = {
    name: "Sogdian",
    names: ["Sogdian"],
    "iso639-2": "sog",
    "iso639-1": null
  };
  var Somali = {
    name: "Somali",
    names: ["Somali"],
    "iso639-2": "som",
    "iso639-1": "so"
  };
  var Soninke = {
    name: "Soninke",
    names: ["Soninke"],
    "iso639-2": "snk",
    "iso639-1": null
  };
  var Spanish = {
    name: "Spanish",
    names: ["Spanish", "Castilian"],
    "iso639-2": "spa",
    "iso639-1": "es"
  };
  var Sukuma = {
    name: "Sukuma",
    names: ["Sukuma"],
    "iso639-2": "suk",
    "iso639-1": null
  };
  var Sumerian = {
    name: "Sumerian",
    names: ["Sumerian"],
    "iso639-2": "sux",
    "iso639-1": null
  };
  var Sundanese = {
    name: "Sundanese",
    names: ["Sundanese"],
    "iso639-2": "sun",
    "iso639-1": "su"
  };
  var Susu = {
    name: "Susu",
    names: ["Susu"],
    "iso639-2": "sus",
    "iso639-1": null
  };
  var Swahili = {
    name: "Swahili",
    names: ["Swahili"],
    "iso639-2": "swa",
    "iso639-1": "sw"
  };
  var Swati = {
    name: "Swati",
    names: ["Swati"],
    "iso639-2": "ssw",
    "iso639-1": "ss"
  };
  var Swedish = {
    name: "Swedish",
    names: ["Swedish"],
    "iso639-2": "swe",
    "iso639-1": "sv"
  };
  var Syriac = {
    name: "Syriac",
    names: ["Syriac"],
    "iso639-2": "syr",
    "iso639-1": null
  };
  var Tagalog = {
    name: "Tagalog",
    names: ["Tagalog"],
    "iso639-2": "tgl",
    "iso639-1": "tl"
  };
  var Tahitian = {
    name: "Tahitian",
    names: ["Tahitian"],
    "iso639-2": "tah",
    "iso639-1": "ty"
  };
  var Tajik = {
    name: "Tajik",
    names: ["Tajik"],
    "iso639-2": "tgk",
    "iso639-1": "tg"
  };
  var Tamashek = {
    name: "Tamashek",
    names: ["Tamashek"],
    "iso639-2": "tmh",
    "iso639-1": null
  };
  var Tamil = {
    name: "Tamil",
    names: ["Tamil"],
    "iso639-2": "tam",
    "iso639-1": "ta"
  };
  var Tatar = {
    name: "Tatar",
    names: ["Tatar"],
    "iso639-2": "tat",
    "iso639-1": "tt"
  };
  var Telugu = {
    name: "Telugu",
    names: ["Telugu"],
    "iso639-2": "tel",
    "iso639-1": "te"
  };
  var Tereno = {
    name: "Tereno",
    names: ["Tereno"],
    "iso639-2": "ter",
    "iso639-1": null
  };
  var Tetum = {
    name: "Tetum",
    names: ["Tetum"],
    "iso639-2": "tet",
    "iso639-1": null
  };
  var Thai = {
    name: "Thai",
    names: ["Thai"],
    "iso639-2": "tha",
    "iso639-1": "th"
  };
  var Tibetan = {
    name: "Tibetan",
    names: ["Tibetan"],
    "iso639-2": "tib/bod",
    "iso639-1": "bo"
  };
  var Tigre = {
    name: "Tigre",
    names: ["Tigre"],
    "iso639-2": "tig",
    "iso639-1": null
  };
  var Tigrinya = {
    name: "Tigrinya",
    names: ["Tigrinya"],
    "iso639-2": "tir",
    "iso639-1": "ti"
  };
  var Timne = {
    name: "Timne",
    names: ["Timne"],
    "iso639-2": "tem",
    "iso639-1": null
  };
  var Tiv = {
    name: "Tiv",
    names: ["Tiv"],
    "iso639-2": "tiv",
    "iso639-1": null
  };
  var Tlingit = {
    name: "Tlingit",
    names: ["Tlingit"],
    "iso639-2": "tli",
    "iso639-1": null
  };
  var Tokelau = {
    name: "Tokelau",
    names: ["Tokelau"],
    "iso639-2": "tkl",
    "iso639-1": null
  };
  var Tsimshian = {
    name: "Tsimshian",
    names: ["Tsimshian"],
    "iso639-2": "tsi",
    "iso639-1": null
  };
  var Tsonga = {
    name: "Tsonga",
    names: ["Tsonga"],
    "iso639-2": "tso",
    "iso639-1": "ts"
  };
  var Tswana = {
    name: "Tswana",
    names: ["Tswana"],
    "iso639-2": "tsn",
    "iso639-1": "tn"
  };
  var Tumbuka = {
    name: "Tumbuka",
    names: ["Tumbuka"],
    "iso639-2": "tum",
    "iso639-1": null
  };
  var Turkish = {
    name: "Turkish",
    names: ["Turkish"],
    "iso639-2": "tur",
    "iso639-1": "tr"
  };
  var Turkmen = {
    name: "Turkmen",
    names: ["Turkmen"],
    "iso639-2": "tuk",
    "iso639-1": "tk"
  };
  var Tuvalu = {
    name: "Tuvalu",
    names: ["Tuvalu"],
    "iso639-2": "tvl",
    "iso639-1": null
  };
  var Tuvinian = {
    name: "Tuvinian",
    names: ["Tuvinian"],
    "iso639-2": "tyv",
    "iso639-1": null
  };
  var Twi = {
    name: "Twi",
    names: ["Twi"],
    "iso639-2": "twi",
    "iso639-1": "tw"
  };
  var Udmurt = {
    name: "Udmurt",
    names: ["Udmurt"],
    "iso639-2": "udm",
    "iso639-1": null
  };
  var Ugaritic = {
    name: "Ugaritic",
    names: ["Ugaritic"],
    "iso639-2": "uga",
    "iso639-1": null
  };
  var Uighur = {
    name: "Uighur",
    names: ["Uighur", "Uyghur"],
    "iso639-2": "uig",
    "iso639-1": "ug"
  };
  var Ukrainian = {
    name: "Ukrainian",
    names: ["Ukrainian"],
    "iso639-2": "ukr",
    "iso639-1": "uk"
  };
  var Umbundu = {
    name: "Umbundu",
    names: ["Umbundu"],
    "iso639-2": "umb",
    "iso639-1": null
  };
  var Undetermined = {
    name: "Undetermined",
    names: ["Undetermined"],
    "iso639-2": "und",
    "iso639-1": null
  };
  var Urdu = {
    name: "Urdu",
    names: ["Urdu"],
    "iso639-2": "urd",
    "iso639-1": "ur"
  };
  var Uyghur = {
    name: "Uyghur",
    names: ["Uighur", "Uyghur"],
    "iso639-2": "uig",
    "iso639-1": "ug"
  };
  var Uzbek = {
    name: "Uzbek",
    names: ["Uzbek"],
    "iso639-2": "uzb",
    "iso639-1": "uz"
  };
  var Vai = {
    name: "Vai",
    names: ["Vai"],
    "iso639-2": "vai",
    "iso639-1": null
  };
  var Valencian = {
    name: "Valencian",
    names: ["Catalan", "Valencian"],
    "iso639-2": "cat",
    "iso639-1": "ca"
  };
  var Venda = {
    name: "Venda",
    names: ["Venda"],
    "iso639-2": "ven",
    "iso639-1": "ve"
  };
  var Vietnamese = {
    name: "Vietnamese",
    names: ["Vietnamese"],
    "iso639-2": "vie",
    "iso639-1": "vi"
  };
  var Votic = {
    name: "Votic",
    names: ["Votic"],
    "iso639-2": "vot",
    "iso639-1": null
  };
  var Walloon = {
    name: "Walloon",
    names: ["Walloon"],
    "iso639-2": "wln",
    "iso639-1": "wa"
  };
  var Waray = {
    name: "Waray",
    names: ["Waray"],
    "iso639-2": "war",
    "iso639-1": null
  };
  var Washo = {
    name: "Washo",
    names: ["Washo"],
    "iso639-2": "was",
    "iso639-1": null
  };
  var Welsh = {
    name: "Welsh",
    names: ["Welsh"],
    "iso639-2": "wel/cym",
    "iso639-1": "cy"
  };
  var Wolaitta = {
    name: "Wolaitta",
    names: ["Wolaitta", "Wolaytta"],
    "iso639-2": "wal",
    "iso639-1": null
  };
  var Wolaytta = {
    name: "Wolaytta",
    names: ["Wolaitta", "Wolaytta"],
    "iso639-2": "wal",
    "iso639-1": null
  };
  var Wolof = {
    name: "Wolof",
    names: ["Wolof"],
    "iso639-2": "wol",
    "iso639-1": "wo"
  };
  var Xhosa = {
    name: "Xhosa",
    names: ["Xhosa"],
    "iso639-2": "xho",
    "iso639-1": "xh"
  };
  var Yakut = {
    name: "Yakut",
    names: ["Yakut"],
    "iso639-2": "sah",
    "iso639-1": null
  };
  var Yao = {
    name: "Yao",
    names: ["Yao"],
    "iso639-2": "yao",
    "iso639-1": null
  };
  var Yapese = {
    name: "Yapese",
    names: ["Yapese"],
    "iso639-2": "yap",
    "iso639-1": null
  };
  var Yiddish = {
    name: "Yiddish",
    names: ["Yiddish"],
    "iso639-2": "yid",
    "iso639-1": "yi"
  };
  var Yoruba = {
    name: "Yoruba",
    names: ["Yoruba"],
    "iso639-2": "yor",
    "iso639-1": "yo"
  };
  var Zapotec = {
    name: "Zapotec",
    names: ["Zapotec"],
    "iso639-2": "zap",
    "iso639-1": null
  };
  var Zaza = {
    name: "Zaza",
    names: ["Zaza", "Dimili", "Dimli", "Kirdki", "Kirmanjki", "Zazaki"],
    "iso639-2": "zza",
    "iso639-1": null
  };
  var Zazaki = {
    name: "Zazaki",
    names: ["Zaza", "Dimili", "Dimli", "Kirdki", "Kirmanjki", "Zazaki"],
    "iso639-2": "zza",
    "iso639-1": null
  };
  var Zenaga = {
    name: "Zenaga",
    names: ["Zenaga"],
    "iso639-2": "zen",
    "iso639-1": null
  };
  var Zhuang = {
    name: "Zhuang",
    names: ["Zhuang", "Chuang"],
    "iso639-2": "zha",
    "iso639-1": "za"
  };
  var Zulu = {
    name: "Zulu",
    names: ["Zulu"],
    "iso639-2": "zul",
    "iso639-1": "zu"
  };
  var Zuni = {
    name: "Zuni",
    names: ["Zuni"],
    "iso639-2": "zun",
    "iso639-1": null
  };
  var iso = {
    Abkhazian: Abkhazian,
    Achinese: Achinese,
    Acoli: Acoli,
    Adangme: Adangme,
    Adygei: Adygei,
    Adyghe: Adyghe,
    Afar: Afar,
    Afrihili: Afrihili,
    Afrikaans: Afrikaans,
    "Afro-Asiatic languages": {
      name: "Afro-Asiatic languages",
      names: ["Afro-Asiatic languages"],
      "iso639-2": "afa",
      "iso639-1": null
    },
    Ainu: Ainu,
    Akan: Akan,
    Akkadian: Akkadian,
    Albanian: Albanian,
    Alemannic: Alemannic,
    Aleut: Aleut,
    "Algonquian languages": {
      name: "Algonquian languages",
      names: ["Algonquian languages"],
      "iso639-2": "alg",
      "iso639-1": null
    },
    Alsatian: Alsatian,
    "Altaic languages": {
      name: "Altaic languages",
      names: ["Altaic languages"],
      "iso639-2": "tut",
      "iso639-1": null
    },
    Amharic: Amharic,
    Angika: Angika,
    "Apache languages": {
      name: "Apache languages",
      names: ["Apache languages"],
      "iso639-2": "apa",
      "iso639-1": null
    },
    Arabic: Arabic,
    Aragonese: Aragonese,
    Arapaho: Arapaho,
    Arawak: Arawak,
    Armenian: Armenian,
    Aromanian: Aromanian,
    "Artificial languages": {
      name: "Artificial languages",
      names: ["Artificial languages"],
      "iso639-2": "art",
      "iso639-1": null
    },
    Arumanian: Arumanian,
    Assamese: Assamese,
    Asturian: Asturian,
    Asturleonese: Asturleonese,
    "Athapascan languages": {
      name: "Athapascan languages",
      names: ["Athapascan languages"],
      "iso639-2": "ath",
      "iso639-1": null
    },
    "Australian languages": {
      name: "Australian languages",
      names: ["Australian languages"],
      "iso639-2": "aus",
      "iso639-1": null
    },
    "Austronesian languages": {
      name: "Austronesian languages",
      names: ["Austronesian languages"],
      "iso639-2": "map",
      "iso639-1": null
    },
    Avaric: Avaric,
    Avestan: Avestan,
    Awadhi: Awadhi,
    Aymara: Aymara,
    Azerbaijani: Azerbaijani,
    Bable: Bable,
    Balinese: Balinese,
    "Baltic languages": {
      name: "Baltic languages",
      names: ["Baltic languages"],
      "iso639-2": "bat",
      "iso639-1": null
    },
    Baluchi: Baluchi,
    Bambara: Bambara,
    "Bamileke languages": {
      name: "Bamileke languages",
      names: ["Bamileke languages"],
      "iso639-2": "bai",
      "iso639-1": null
    },
    "Banda languages": {
      name: "Banda languages",
      names: ["Banda languages"],
      "iso639-2": "bad",
      "iso639-1": null
    },
    "Bantu languages": {
      name: "Bantu languages",
      names: ["Bantu languages"],
      "iso639-2": "bnt",
      "iso639-1": null
    },
    Basa: Basa,
    Bashkir: Bashkir,
    Basque: Basque,
    "Batak languages": {
      name: "Batak languages",
      names: ["Batak languages"],
      "iso639-2": "btk",
      "iso639-1": null
    },
    Bedawiyet: Bedawiyet,
    Beja: Beja,
    Belarusian: Belarusian,
    Bemba: Bemba,
    Bengali: Bengali,
    "Berber languages": {
      name: "Berber languages",
      names: ["Berber languages"],
      "iso639-2": "ber",
      "iso639-1": null
    },
    Bhojpuri: Bhojpuri,
    "Bihari languages": {
      name: "Bihari languages",
      names: ["Bihari languages"],
      "iso639-2": "bih",
      "iso639-1": "bh"
    },
    Bikol: Bikol,
    Bilin: Bilin,
    Bini: Bini,
    Bislama: Bislama,
    Blin: Blin,
    Bliss: Bliss,
    Blissymbolics: Blissymbolics,
    Blissymbols: Blissymbols,
    "Bokmål, Norwegian": {
      name: "Bokmål, Norwegian",
      names: ["Bokmål, Norwegian", "Norwegian Bokmål"],
      "iso639-2": "nob",
      "iso639-1": "nb"
    },
    Bosnian: Bosnian,
    Braj: Braj,
    Breton: Breton,
    Buginese: Buginese,
    Bulgarian: Bulgarian,
    Buriat: Buriat,
    Burmese: Burmese,
    Caddo: Caddo,
    Castilian: Castilian,
    Catalan: Catalan,
    "Caucasian languages": {
      name: "Caucasian languages",
      names: ["Caucasian languages"],
      "iso639-2": "cau",
      "iso639-1": null
    },
    Cebuano: Cebuano,
    "Celtic languages": {
      name: "Celtic languages",
      names: ["Celtic languages"],
      "iso639-2": "cel",
      "iso639-1": null
    },
    "Central American Indian languages": {
      name: "Central American Indian languages",
      names: ["Central American Indian languages"],
      "iso639-2": "cai",
      "iso639-1": null
    },
    "Central Khmer": {
      name: "Central Khmer",
      names: ["Central Khmer"],
      "iso639-2": "khm",
      "iso639-1": "km"
    },
    Chagatai: Chagatai,
    "Chamic languages": {
      name: "Chamic languages",
      names: ["Chamic languages"],
      "iso639-2": "cmc",
      "iso639-1": null
    },
    Chamorro: Chamorro,
    Chechen: Chechen,
    Cherokee: Cherokee,
    Chewa: Chewa,
    Cheyenne: Cheyenne,
    Chibcha: Chibcha,
    Chichewa: Chichewa,
    Chinese: Chinese,
    "Chinook jargon": {
      name: "Chinook jargon",
      names: ["Chinook jargon"],
      "iso639-2": "chn",
      "iso639-1": null
    },
    Chipewyan: Chipewyan,
    Choctaw: Choctaw,
    Chuang: Chuang,
    "Church Slavic": {
      name: "Church Slavic",
      names: ["Church Slavic", "Old Slavonic", "Church Slavonic", "Old Bulgarian", "Old Church Slavonic"],
      "iso639-2": "chu",
      "iso639-1": "cu"
    },
    "Church Slavonic": {
      name: "Church Slavonic",
      names: ["Church Slavic", "Old Slavonic", "Church Slavonic", "Old Bulgarian", "Old Church Slavonic"],
      "iso639-2": "chu",
      "iso639-1": "cu"
    },
    Chuukese: Chuukese,
    Chuvash: Chuvash,
    "Classical Nepal Bhasa": {
      name: "Classical Nepal Bhasa",
      names: ["Classical Newari", "Old Newari", "Classical Nepal Bhasa"],
      "iso639-2": "nwc",
      "iso639-1": null
    },
    "Classical Newari": {
      name: "Classical Newari",
      names: ["Classical Newari", "Old Newari", "Classical Nepal Bhasa"],
      "iso639-2": "nwc",
      "iso639-1": null
    },
    "Classical Syriac": {
      name: "Classical Syriac",
      names: ["Classical Syriac"],
      "iso639-2": "syc",
      "iso639-1": null
    },
    "Cook Islands Maori": {
      name: "Cook Islands Maori",
      names: ["Rarotongan", "Cook Islands Maori"],
      "iso639-2": "rar",
      "iso639-1": null
    },
    Coptic: Coptic,
    Cornish: Cornish,
    Corsican: Corsican,
    Cree: Cree,
    Creek: Creek,
    "Creoles and pidgins": {
      name: "Creoles and pidgins",
      names: ["Creoles and pidgins"],
      "iso639-2": "crp",
      "iso639-1": null
    },
    "Creoles and pidgins, English based": {
      name: "Creoles and pidgins, English based",
      names: ["Creoles and pidgins, English based"],
      "iso639-2": "cpe",
      "iso639-1": null
    },
    "Creoles and pidgins, French-based": {
      name: "Creoles and pidgins, French-based",
      names: ["Creoles and pidgins, French-based"],
      "iso639-2": "cpf",
      "iso639-1": null
    },
    "Creoles and pidgins, Portuguese-based": {
      name: "Creoles and pidgins, Portuguese-based",
      names: ["Creoles and pidgins, Portuguese-based"],
      "iso639-2": "cpp",
      "iso639-1": null
    },
    "Crimean Tatar": {
      name: "Crimean Tatar",
      names: ["Crimean Tatar", "Crimean Turkish"],
      "iso639-2": "crh",
      "iso639-1": null
    },
    "Crimean Turkish": {
      name: "Crimean Turkish",
      names: ["Crimean Tatar", "Crimean Turkish"],
      "iso639-2": "crh",
      "iso639-1": null
    },
    Croatian: Croatian,
    "Cushitic languages": {
      name: "Cushitic languages",
      names: ["Cushitic languages"],
      "iso639-2": "cus",
      "iso639-1": null
    },
    Czech: Czech,
    Dakota: Dakota,
    Danish: Danish,
    Dargwa: Dargwa,
    Delaware: Delaware,
    "Dene Suline": {
      name: "Dene Suline",
      names: ["Chipewyan", "Dene Suline"],
      "iso639-2": "chp",
      "iso639-1": null
    },
    Dhivehi: Dhivehi,
    Dimili: Dimili,
    Dimli: Dimli,
    Dinka: Dinka,
    Divehi: Divehi,
    Dogri: Dogri,
    Dogrib: Dogrib,
    "Dravidian languages": {
      name: "Dravidian languages",
      names: ["Dravidian languages"],
      "iso639-2": "dra",
      "iso639-1": null
    },
    Duala: Duala,
    Dutch: Dutch,
    "Dutch, Middle (ca.1050-1350)": {
      name: "Dutch, Middle (ca.1050-1350)",
      names: ["Dutch, Middle (ca.1050-1350)"],
      "iso639-2": "dum",
      "iso639-1": null
    },
    Dyula: Dyula,
    Dzongkha: Dzongkha,
    "Eastern Frisian": {
      name: "Eastern Frisian",
      names: ["Eastern Frisian"],
      "iso639-2": "frs",
      "iso639-1": null
    },
    Edo: Edo,
    Efik: Efik,
    "Egyptian (Ancient)": {
      name: "Egyptian (Ancient)",
      names: ["Egyptian (Ancient)"],
      "iso639-2": "egy",
      "iso639-1": null
    },
    Ekajuk: Ekajuk,
    Elamite: Elamite,
    English: English,
    "English, Middle (1100-1500)": {
      name: "English, Middle (1100-1500)",
      names: ["English, Middle (1100-1500)"],
      "iso639-2": "enm",
      "iso639-1": null
    },
    "English, Old (ca.450-1100)": {
      name: "English, Old (ca.450-1100)",
      names: ["English, Old (ca.450-1100)"],
      "iso639-2": "ang",
      "iso639-1": null
    },
    Erzya: Erzya,
    Esperanto: Esperanto,
    Estonian: Estonian,
    Ewe: Ewe,
    Ewondo: Ewondo,
    Fang: Fang,
    Fanti: Fanti,
    Faroese: Faroese,
    Fijian: Fijian,
    Filipino: Filipino,
    Finnish: Finnish,
    "Finno-Ugrian languages": {
      name: "Finno-Ugrian languages",
      names: ["Finno-Ugrian languages"],
      "iso639-2": "fiu",
      "iso639-1": null
    },
    Flemish: Flemish,
    Fon: Fon,
    French: French,
    "French, Middle (ca.1400-1600)": {
      name: "French, Middle (ca.1400-1600)",
      names: ["French, Middle (ca.1400-1600)"],
      "iso639-2": "frm",
      "iso639-1": null
    },
    "French, Old (842-ca.1400)": {
      name: "French, Old (842-ca.1400)",
      names: ["French, Old (842-ca.1400)"],
      "iso639-2": "fro",
      "iso639-1": null
    },
    Friulian: Friulian,
    Fulah: Fulah,
    Ga: Ga,
    Gaelic: Gaelic,
    "Galibi Carib": {
      name: "Galibi Carib",
      names: ["Galibi Carib"],
      "iso639-2": "car",
      "iso639-1": null
    },
    Galician: Galician,
    Ganda: Ganda,
    Gayo: Gayo,
    Gbaya: Gbaya,
    Geez: Geez,
    Georgian: Georgian,
    German: German,
    "German, Low": {
      name: "German, Low",
      names: ["Low German", "Low Saxon", "German, Low", "Saxon, Low"],
      "iso639-2": "nds",
      "iso639-1": null
    },
    "German, Middle High (ca.1050-1500)": {
      name: "German, Middle High (ca.1050-1500)",
      names: ["German, Middle High (ca.1050-1500)"],
      "iso639-2": "gmh",
      "iso639-1": null
    },
    "German, Old High (ca.750-1050)": {
      name: "German, Old High (ca.750-1050)",
      names: ["German, Old High (ca.750-1050)"],
      "iso639-2": "goh",
      "iso639-1": null
    },
    "Germanic languages": {
      name: "Germanic languages",
      names: ["Germanic languages"],
      "iso639-2": "gem",
      "iso639-1": null
    },
    Gikuyu: Gikuyu,
    Gilbertese: Gilbertese,
    Gondi: Gondi,
    Gorontalo: Gorontalo,
    Gothic: Gothic,
    Grebo: Grebo,
    "Greek, Ancient (to 1453)": {
      name: "Greek, Ancient (to 1453)",
      names: ["Greek, Ancient (to 1453)"],
      "iso639-2": "grc",
      "iso639-1": null
    },
    "Greek, Modern (1453-)": {
      name: "Greek, Modern (1453-)",
      names: ["Greek, Modern (1453-)"],
      "iso639-2": "gre/ell",
      "iso639-1": "el"
    },
    Greenlandic: Greenlandic,
    Guarani: Guarani,
    Gujarati: Gujarati,
    "Gwich'in": {
      name: "Gwich'in",
      names: ["Gwich'in"],
      "iso639-2": "gwi",
      "iso639-1": null
    },
    Haida: Haida,
    Haitian: Haitian,
    "Haitian Creole": {
      name: "Haitian Creole",
      names: ["Haitian", "Haitian Creole"],
      "iso639-2": "hat",
      "iso639-1": "ht"
    },
    Hausa: Hausa,
    Hawaiian: Hawaiian,
    Hebrew: Hebrew,
    Herero: Herero,
    Hiligaynon: Hiligaynon,
    "Himachali languages": {
      name: "Himachali languages",
      names: ["Himachali languages", "Western Pahari languages"],
      "iso639-2": "him",
      "iso639-1": null
    },
    Hindi: Hindi,
    "Hiri Motu": {
      name: "Hiri Motu",
      names: ["Hiri Motu"],
      "iso639-2": "hmo",
      "iso639-1": "ho"
    },
    Hittite: Hittite,
    Hmong: Hmong,
    Hungarian: Hungarian,
    Hupa: Hupa,
    Iban: Iban,
    Icelandic: Icelandic,
    Ido: Ido,
    Igbo: Igbo,
    "Ijo languages": {
      name: "Ijo languages",
      names: ["Ijo languages"],
      "iso639-2": "ijo",
      "iso639-1": null
    },
    Iloko: Iloko,
    "Imperial Aramaic (700-300 BCE)": {
      name: "Imperial Aramaic (700-300 BCE)",
      names: ["Official Aramaic (700-300 BCE)", "Imperial Aramaic (700-300 BCE)"],
      "iso639-2": "arc",
      "iso639-1": null
    },
    "Inari Sami": {
      name: "Inari Sami",
      names: ["Inari Sami"],
      "iso639-2": "smn",
      "iso639-1": null
    },
    "Indic languages": {
      name: "Indic languages",
      names: ["Indic languages"],
      "iso639-2": "inc",
      "iso639-1": null
    },
    "Indo-European languages": {
      name: "Indo-European languages",
      names: ["Indo-European languages"],
      "iso639-2": "ine",
      "iso639-1": null
    },
    Indonesian: Indonesian,
    Ingush: Ingush,
    "Interlingua (International Auxiliary Language Association)": {
      name: "Interlingua (International Auxiliary Language Association)",
      names: ["Interlingua (International Auxiliary Language Association)"],
      "iso639-2": "ina",
      "iso639-1": "ia"
    },
    Interlingue: Interlingue,
    Inuktitut: Inuktitut,
    Inupiaq: Inupiaq,
    "Iranian languages": {
      name: "Iranian languages",
      names: ["Iranian languages"],
      "iso639-2": "ira",
      "iso639-1": null
    },
    Irish: Irish,
    "Irish, Middle (900-1200)": {
      name: "Irish, Middle (900-1200)",
      names: ["Irish, Middle (900-1200)"],
      "iso639-2": "mga",
      "iso639-1": null
    },
    "Irish, Old (to 900)": {
      name: "Irish, Old (to 900)",
      names: ["Irish, Old (to 900)"],
      "iso639-2": "sga",
      "iso639-1": null
    },
    "Iroquoian languages": {
      name: "Iroquoian languages",
      names: ["Iroquoian languages"],
      "iso639-2": "iro",
      "iso639-1": null
    },
    Italian: Italian,
    Japanese: Japanese,
    Javanese: Javanese,
    Jingpho: Jingpho,
    "Judeo-Arabic": {
      name: "Judeo-Arabic",
      names: ["Judeo-Arabic"],
      "iso639-2": "jrb",
      "iso639-1": null
    },
    "Judeo-Persian": {
      name: "Judeo-Persian",
      names: ["Judeo-Persian"],
      "iso639-2": "jpr",
      "iso639-1": null
    },
    Kabardian: Kabardian,
    Kabyle: Kabyle,
    Kachin: Kachin,
    Kalaallisut: Kalaallisut,
    Kalmyk: Kalmyk,
    Kamba: Kamba,
    Kannada: Kannada,
    Kanuri: Kanuri,
    Kapampangan: Kapampangan,
    "Kara-Kalpak": {
      name: "Kara-Kalpak",
      names: ["Kara-Kalpak"],
      "iso639-2": "kaa",
      "iso639-1": null
    },
    "Karachay-Balkar": {
      name: "Karachay-Balkar",
      names: ["Karachay-Balkar"],
      "iso639-2": "krc",
      "iso639-1": null
    },
    Karelian: Karelian,
    "Karen languages": {
      name: "Karen languages",
      names: ["Karen languages"],
      "iso639-2": "kar",
      "iso639-1": null
    },
    Kashmiri: Kashmiri,
    Kashubian: Kashubian,
    Kawi: Kawi,
    Kazakh: Kazakh,
    Khasi: Khasi,
    "Khoisan languages": {
      name: "Khoisan languages",
      names: ["Khoisan languages"],
      "iso639-2": "khi",
      "iso639-1": null
    },
    Khotanese: Khotanese,
    Kikuyu: Kikuyu,
    Kimbundu: Kimbundu,
    Kinyarwanda: Kinyarwanda,
    Kirdki: Kirdki,
    Kirghiz: Kirghiz,
    Kirmanjki: Kirmanjki,
    Klingon: Klingon,
    Komi: Komi,
    Kongo: Kongo,
    Konkani: Konkani,
    Korean: Korean,
    Kosraean: Kosraean,
    Kpelle: Kpelle,
    "Kru languages": {
      name: "Kru languages",
      names: ["Kru languages"],
      "iso639-2": "kro",
      "iso639-1": null
    },
    Kuanyama: Kuanyama,
    Kumyk: Kumyk,
    Kurdish: Kurdish,
    Kurukh: Kurukh,
    Kutenai: Kutenai,
    Kwanyama: Kwanyama,
    Kyrgyz: Kyrgyz,
    Ladino: Ladino,
    Lahnda: Lahnda,
    Lamba: Lamba,
    "Land Dayak languages": {
      name: "Land Dayak languages",
      names: ["Land Dayak languages"],
      "iso639-2": "day",
      "iso639-1": null
    },
    Lao: Lao,
    Latin: Latin,
    Latvian: Latvian,
    Leonese: Leonese,
    Letzeburgesch: Letzeburgesch,
    Lezghian: Lezghian,
    Limburgan: Limburgan,
    Limburger: Limburger,
    Limburgish: Limburgish,
    Lingala: Lingala,
    Lithuanian: Lithuanian,
    Lojban: Lojban,
    "Low German": {
      name: "Low German",
      names: ["Low German", "Low Saxon", "German, Low", "Saxon, Low"],
      "iso639-2": "nds",
      "iso639-1": null
    },
    "Low Saxon": {
      name: "Low Saxon",
      names: ["Low German", "Low Saxon", "German, Low", "Saxon, Low"],
      "iso639-2": "nds",
      "iso639-1": null
    },
    "Lower Sorbian": {
      name: "Lower Sorbian",
      names: ["Lower Sorbian"],
      "iso639-2": "dsb",
      "iso639-1": null
    },
    Lozi: Lozi,
    "Luba-Katanga": {
      name: "Luba-Katanga",
      names: ["Luba-Katanga"],
      "iso639-2": "lub",
      "iso639-1": "lu"
    },
    "Luba-Lulua": {
      name: "Luba-Lulua",
      names: ["Luba-Lulua"],
      "iso639-2": "lua",
      "iso639-1": null
    },
    Luiseno: Luiseno,
    "Lule Sami": {
      name: "Lule Sami",
      names: ["Lule Sami"],
      "iso639-2": "smj",
      "iso639-1": null
    },
    Lunda: Lunda,
    "Luo (Kenya and Tanzania)": {
      name: "Luo (Kenya and Tanzania)",
      names: ["Luo (Kenya and Tanzania)"],
      "iso639-2": "luo",
      "iso639-1": null
    },
    Lushai: Lushai,
    Luxembourgish: Luxembourgish,
    "Macedo-Romanian": {
      name: "Macedo-Romanian",
      names: ["Aromanian", "Arumanian", "Macedo-Romanian"],
      "iso639-2": "rup",
      "iso639-1": null
    },
    Macedonian: Macedonian,
    Madurese: Madurese,
    Magahi: Magahi,
    Maithili: Maithili,
    Makasar: Makasar,
    Malagasy: Malagasy,
    Malay: Malay,
    Malayalam: Malayalam,
    Maldivian: Maldivian,
    Maltese: Maltese,
    Manchu: Manchu,
    Mandar: Mandar,
    Mandingo: Mandingo,
    Manipuri: Manipuri,
    "Manobo languages": {
      name: "Manobo languages",
      names: ["Manobo languages"],
      "iso639-2": "mno",
      "iso639-1": null
    },
    Manx: Manx,
    Maori: Maori,
    Mapuche: Mapuche,
    Mapudungun: Mapudungun,
    Marathi: Marathi,
    Mari: Mari,
    Marshallese: Marshallese,
    Marwari: Marwari,
    Masai: Masai,
    "Mayan languages": {
      name: "Mayan languages",
      names: ["Mayan languages"],
      "iso639-2": "myn",
      "iso639-1": null
    },
    Mende: Mende,
    "Mi'kmaq": {
      name: "Mi'kmaq",
      names: ["Mi'kmaq", "Micmac"],
      "iso639-2": "mic",
      "iso639-1": null
    },
    Micmac: Micmac,
    Minangkabau: Minangkabau,
    Mirandese: Mirandese,
    Mohawk: Mohawk,
    Moksha: Moksha,
    Moldavian: Moldavian,
    Moldovan: Moldovan,
    "Mon-Khmer languages": {
      name: "Mon-Khmer languages",
      names: ["Mon-Khmer languages"],
      "iso639-2": "mkh",
      "iso639-1": null
    },
    Mong: Mong,
    Mongo: Mongo,
    Mongolian: Mongolian,
    Montenegrin: Montenegrin,
    Mossi: Mossi,
    "Multiple languages": {
      name: "Multiple languages",
      names: ["Multiple languages"],
      "iso639-2": "mul",
      "iso639-1": null
    },
    "Munda languages": {
      name: "Munda languages",
      names: ["Munda languages"],
      "iso639-2": "mun",
      "iso639-1": null
    },
    "N'Ko": {
      name: "N'Ko",
      names: ["N'Ko"],
      "iso639-2": "nqo",
      "iso639-1": null
    },
    "Nahuatl languages": {
      name: "Nahuatl languages",
      names: ["Nahuatl languages"],
      "iso639-2": "nah",
      "iso639-1": null
    },
    Nauru: Nauru,
    Navaho: Navaho,
    Navajo: Navajo,
    "Ndebele, North": {
      name: "Ndebele, North",
      names: ["Ndebele, North", "North Ndebele"],
      "iso639-2": "nde",
      "iso639-1": "nd"
    },
    "Ndebele, South": {
      name: "Ndebele, South",
      names: ["Ndebele, South", "South Ndebele"],
      "iso639-2": "nbl",
      "iso639-1": "nr"
    },
    Ndonga: Ndonga,
    Neapolitan: Neapolitan,
    "Nepal Bhasa": {
      name: "Nepal Bhasa",
      names: ["Nepal Bhasa", "Newari"],
      "iso639-2": "new",
      "iso639-1": null
    },
    Nepali: Nepali,
    Newari: Newari,
    Nias: Nias,
    "Niger-Kordofanian languages": {
      name: "Niger-Kordofanian languages",
      names: ["Niger-Kordofanian languages"],
      "iso639-2": "nic",
      "iso639-1": null
    },
    "Nilo-Saharan languages": {
      name: "Nilo-Saharan languages",
      names: ["Nilo-Saharan languages"],
      "iso639-2": "ssa",
      "iso639-1": null
    },
    Niuean: Niuean,
    "No linguistic content": {
      name: "No linguistic content",
      names: ["No linguistic content", "Not applicable"],
      "iso639-2": "zxx",
      "iso639-1": null
    },
    Nogai: Nogai,
    "Norse, Old": {
      name: "Norse, Old",
      names: ["Norse, Old"],
      "iso639-2": "non",
      "iso639-1": null
    },
    "North American Indian languages": {
      name: "North American Indian languages",
      names: ["North American Indian languages"],
      "iso639-2": "nai",
      "iso639-1": null
    },
    "North Ndebele": {
      name: "North Ndebele",
      names: ["Ndebele, North", "North Ndebele"],
      "iso639-2": "nde",
      "iso639-1": "nd"
    },
    "Northern Frisian": {
      name: "Northern Frisian",
      names: ["Northern Frisian"],
      "iso639-2": "frr",
      "iso639-1": null
    },
    "Northern Sami": {
      name: "Northern Sami",
      names: ["Northern Sami"],
      "iso639-2": "sme",
      "iso639-1": "se"
    },
    "Northern Sotho": {
      name: "Northern Sotho",
      names: ["Pedi", "Sepedi", "Northern Sotho"],
      "iso639-2": "nso",
      "iso639-1": null
    },
    Norwegian: Norwegian,
    "Norwegian Bokmål": {
      name: "Norwegian Bokmål",
      names: ["Bokmål, Norwegian", "Norwegian Bokmål"],
      "iso639-2": "nob",
      "iso639-1": "nb"
    },
    "Norwegian Nynorsk": {
      name: "Norwegian Nynorsk",
      names: ["Norwegian Nynorsk", "Nynorsk, Norwegian"],
      "iso639-2": "nno",
      "iso639-1": "nn"
    },
    "Not applicable": {
      name: "Not applicable",
      names: ["No linguistic content", "Not applicable"],
      "iso639-2": "zxx",
      "iso639-1": null
    },
    "Nubian languages": {
      name: "Nubian languages",
      names: ["Nubian languages"],
      "iso639-2": "nub",
      "iso639-1": null
    },
    Nuosu: Nuosu,
    Nyamwezi: Nyamwezi,
    Nyanja: Nyanja,
    Nyankole: Nyankole,
    "Nynorsk, Norwegian": {
      name: "Nynorsk, Norwegian",
      names: ["Norwegian Nynorsk", "Nynorsk, Norwegian"],
      "iso639-2": "nno",
      "iso639-1": "nn"
    },
    Nyoro: Nyoro,
    Nzima: Nzima,
    Occidental: Occidental,
    "Occitan (post 1500)": {
      name: "Occitan (post 1500)",
      names: ["Occitan (post 1500)"],
      "iso639-2": "oci",
      "iso639-1": "oc"
    },
    "Occitan, Old (to 1500)": {
      name: "Occitan, Old (to 1500)",
      names: ["Provençal, Old (to 1500)", "Occitan, Old (to 1500)"],
      "iso639-2": "pro",
      "iso639-1": null
    },
    "Official Aramaic (700-300 BCE)": {
      name: "Official Aramaic (700-300 BCE)",
      names: ["Official Aramaic (700-300 BCE)", "Imperial Aramaic (700-300 BCE)"],
      "iso639-2": "arc",
      "iso639-1": null
    },
    Oirat: Oirat,
    Ojibwa: Ojibwa,
    "Old Bulgarian": {
      name: "Old Bulgarian",
      names: ["Church Slavic", "Old Slavonic", "Church Slavonic", "Old Bulgarian", "Old Church Slavonic"],
      "iso639-2": "chu",
      "iso639-1": "cu"
    },
    "Old Church Slavonic": {
      name: "Old Church Slavonic",
      names: ["Church Slavic", "Old Slavonic", "Church Slavonic", "Old Bulgarian", "Old Church Slavonic"],
      "iso639-2": "chu",
      "iso639-1": "cu"
    },
    "Old Newari": {
      name: "Old Newari",
      names: ["Classical Newari", "Old Newari", "Classical Nepal Bhasa"],
      "iso639-2": "nwc",
      "iso639-1": null
    },
    "Old Slavonic": {
      name: "Old Slavonic",
      names: ["Church Slavic", "Old Slavonic", "Church Slavonic", "Old Bulgarian", "Old Church Slavonic"],
      "iso639-2": "chu",
      "iso639-1": "cu"
    },
    Oriya: Oriya,
    Oromo: Oromo,
    Osage: Osage,
    Ossetian: Ossetian,
    Ossetic: Ossetic,
    "Otomian languages": {
      name: "Otomian languages",
      names: ["Otomian languages"],
      "iso639-2": "oto",
      "iso639-1": null
    },
    Pahlavi: Pahlavi,
    Palauan: Palauan,
    Pali: Pali,
    Pampanga: Pampanga,
    Pangasinan: Pangasinan,
    Panjabi: Panjabi,
    Papiamento: Papiamento,
    "Papuan languages": {
      name: "Papuan languages",
      names: ["Papuan languages"],
      "iso639-2": "paa",
      "iso639-1": null
    },
    Pashto: Pashto,
    Pedi: Pedi,
    Persian: Persian,
    "Persian, Old (ca.600-400 B.C.)": {
      name: "Persian, Old (ca.600-400 B.C.)",
      names: ["Persian, Old (ca.600-400 B.C.)"],
      "iso639-2": "peo",
      "iso639-1": null
    },
    "Philippine languages": {
      name: "Philippine languages",
      names: ["Philippine languages"],
      "iso639-2": "phi",
      "iso639-1": null
    },
    Phoenician: Phoenician,
    Pilipino: Pilipino,
    Pohnpeian: Pohnpeian,
    Polish: Polish,
    Portuguese: Portuguese,
    "Prakrit languages": {
      name: "Prakrit languages",
      names: ["Prakrit languages"],
      "iso639-2": "pra",
      "iso639-1": null
    },
    "Provençal, Old (to 1500)": {
      name: "Provençal, Old (to 1500)",
      names: ["Provençal, Old (to 1500)", "Occitan, Old (to 1500)"],
      "iso639-2": "pro",
      "iso639-1": null
    },
    Punjabi: Punjabi,
    Pushto: Pushto,
    Quechua: Quechua,
    Rajasthani: Rajasthani,
    Rapanui: Rapanui,
    Rarotongan: Rarotongan,
    "Reserved for local use": {
      name: "Reserved for local use",
      names: ["Reserved for local use"],
      "iso639-2": "qaa-qtz",
      "iso639-1": null
    },
    "Romance languages": {
      name: "Romance languages",
      names: ["Romance languages"],
      "iso639-2": "roa",
      "iso639-1": null
    },
    Romanian: Romanian,
    Romansh: Romansh,
    Romany: Romany,
    Rundi: Rundi,
    Russian: Russian,
    Sakan: Sakan,
    "Salishan languages": {
      name: "Salishan languages",
      names: ["Salishan languages"],
      "iso639-2": "sal",
      "iso639-1": null
    },
    "Samaritan Aramaic": {
      name: "Samaritan Aramaic",
      names: ["Samaritan Aramaic"],
      "iso639-2": "sam",
      "iso639-1": null
    },
    "Sami languages": {
      name: "Sami languages",
      names: ["Sami languages"],
      "iso639-2": "smi",
      "iso639-1": null
    },
    Samoan: Samoan,
    Sandawe: Sandawe,
    Sango: Sango,
    Sanskrit: Sanskrit,
    Santali: Santali,
    Sardinian: Sardinian,
    Sasak: Sasak,
    "Saxon, Low": {
      name: "Saxon, Low",
      names: ["Low German", "Low Saxon", "German, Low", "Saxon, Low"],
      "iso639-2": "nds",
      "iso639-1": null
    },
    Scots: Scots,
    "Scottish Gaelic": {
      name: "Scottish Gaelic",
      names: ["Gaelic", "Scottish Gaelic"],
      "iso639-2": "gla",
      "iso639-1": "gd"
    },
    Selkup: Selkup,
    "Semitic languages": {
      name: "Semitic languages",
      names: ["Semitic languages"],
      "iso639-2": "sem",
      "iso639-1": null
    },
    Sepedi: Sepedi,
    Serbian: Serbian,
    Serer: Serer,
    Shan: Shan,
    Shona: Shona,
    "Sichuan Yi": {
      name: "Sichuan Yi",
      names: ["Sichuan Yi", "Nuosu"],
      "iso639-2": "iii",
      "iso639-1": "ii"
    },
    Sicilian: Sicilian,
    Sidamo: Sidamo,
    "Sign Languages": {
      name: "Sign Languages",
      names: ["Sign Languages"],
      "iso639-2": "sgn",
      "iso639-1": null
    },
    Siksika: Siksika,
    Sindhi: Sindhi,
    Sinhala: Sinhala,
    Sinhalese: Sinhalese,
    "Sino-Tibetan languages": {
      name: "Sino-Tibetan languages",
      names: ["Sino-Tibetan languages"],
      "iso639-2": "sit",
      "iso639-1": null
    },
    "Siouan languages": {
      name: "Siouan languages",
      names: ["Siouan languages"],
      "iso639-2": "sio",
      "iso639-1": null
    },
    "Skolt Sami": {
      name: "Skolt Sami",
      names: ["Skolt Sami"],
      "iso639-2": "sms",
      "iso639-1": null
    },
    "Slave (Athapascan)": {
      name: "Slave (Athapascan)",
      names: ["Slave (Athapascan)"],
      "iso639-2": "den",
      "iso639-1": null
    },
    "Slavic languages": {
      name: "Slavic languages",
      names: ["Slavic languages"],
      "iso639-2": "sla",
      "iso639-1": null
    },
    Slovak: Slovak,
    Slovenian: Slovenian,
    Sogdian: Sogdian,
    Somali: Somali,
    "Songhai languages": {
      name: "Songhai languages",
      names: ["Songhai languages"],
      "iso639-2": "son",
      "iso639-1": null
    },
    Soninke: Soninke,
    "Sorbian languages": {
      name: "Sorbian languages",
      names: ["Sorbian languages"],
      "iso639-2": "wen",
      "iso639-1": null
    },
    "Sotho, Northern": {
      name: "Sotho, Northern",
      names: ["Pedi", "Sepedi", "Northern Sotho"],
      "iso639-2": "nso",
      "iso639-1": null
    },
    "Sotho, Southern": {
      name: "Sotho, Southern",
      names: ["Sotho, Southern"],
      "iso639-2": "sot",
      "iso639-1": "st"
    },
    "South American Indian languages": {
      name: "South American Indian languages",
      names: ["South American Indian languages"],
      "iso639-2": "sai",
      "iso639-1": null
    },
    "South Ndebele": {
      name: "South Ndebele",
      names: ["Ndebele, South", "South Ndebele"],
      "iso639-2": "nbl",
      "iso639-1": "nr"
    },
    "Southern Altai": {
      name: "Southern Altai",
      names: ["Southern Altai"],
      "iso639-2": "alt",
      "iso639-1": null
    },
    "Southern Sami": {
      name: "Southern Sami",
      names: ["Southern Sami"],
      "iso639-2": "sma",
      "iso639-1": null
    },
    Spanish: Spanish,
    "Sranan Tongo": {
      name: "Sranan Tongo",
      names: ["Sranan Tongo"],
      "iso639-2": "srn",
      "iso639-1": null
    },
    "Standard Moroccan Tamazight": {
      name: "Standard Moroccan Tamazight",
      names: ["Standard Moroccan Tamazight"],
      "iso639-2": "zgh",
      "iso639-1": null
    },
    Sukuma: Sukuma,
    Sumerian: Sumerian,
    Sundanese: Sundanese,
    Susu: Susu,
    Swahili: Swahili,
    Swati: Swati,
    Swedish: Swedish,
    "Swiss German": {
      name: "Swiss German",
      names: ["Swiss German", "Alemannic", "Alsatian"],
      "iso639-2": "gsw",
      "iso639-1": null
    },
    Syriac: Syriac,
    Tagalog: Tagalog,
    Tahitian: Tahitian,
    "Tai languages": {
      name: "Tai languages",
      names: ["Tai languages"],
      "iso639-2": "tai",
      "iso639-1": null
    },
    Tajik: Tajik,
    Tamashek: Tamashek,
    Tamil: Tamil,
    Tatar: Tatar,
    Telugu: Telugu,
    Tereno: Tereno,
    Tetum: Tetum,
    Thai: Thai,
    Tibetan: Tibetan,
    Tigre: Tigre,
    Tigrinya: Tigrinya,
    Timne: Timne,
    Tiv: Tiv,
    "tlhIngan-Hol": {
      name: "tlhIngan-Hol",
      names: ["Klingon", "tlhIngan-Hol"],
      "iso639-2": "tlh",
      "iso639-1": null
    },
    Tlingit: Tlingit,
    "Tok Pisin": {
      name: "Tok Pisin",
      names: ["Tok Pisin"],
      "iso639-2": "tpi",
      "iso639-1": null
    },
    Tokelau: Tokelau,
    "Tonga (Nyasa)": {
      name: "Tonga (Nyasa)",
      names: ["Tonga (Nyasa)"],
      "iso639-2": "tog",
      "iso639-1": null
    },
    "Tonga (Tonga Islands)": {
      name: "Tonga (Tonga Islands)",
      names: ["Tonga (Tonga Islands)"],
      "iso639-2": "ton",
      "iso639-1": "to"
    },
    Tsimshian: Tsimshian,
    Tsonga: Tsonga,
    Tswana: Tswana,
    Tumbuka: Tumbuka,
    "Tupi languages": {
      name: "Tupi languages",
      names: ["Tupi languages"],
      "iso639-2": "tup",
      "iso639-1": null
    },
    Turkish: Turkish,
    "Turkish, Ottoman (1500-1928)": {
      name: "Turkish, Ottoman (1500-1928)",
      names: ["Turkish, Ottoman (1500-1928)"],
      "iso639-2": "ota",
      "iso639-1": null
    },
    Turkmen: Turkmen,
    Tuvalu: Tuvalu,
    Tuvinian: Tuvinian,
    Twi: Twi,
    Udmurt: Udmurt,
    Ugaritic: Ugaritic,
    Uighur: Uighur,
    Ukrainian: Ukrainian,
    Umbundu: Umbundu,
    "Uncoded languages": {
      name: "Uncoded languages",
      names: ["Uncoded languages"],
      "iso639-2": "mis",
      "iso639-1": null
    },
    Undetermined: Undetermined,
    "Upper Sorbian": {
      name: "Upper Sorbian",
      names: ["Upper Sorbian"],
      "iso639-2": "hsb",
      "iso639-1": null
    },
    Urdu: Urdu,
    Uyghur: Uyghur,
    Uzbek: Uzbek,
    Vai: Vai,
    Valencian: Valencian,
    Venda: Venda,
    Vietnamese: Vietnamese,
    "Volapük": {
      name: "Volapük",
      names: ["Volapük"],
      "iso639-2": "vol",
      "iso639-1": "vo"
    },
    Votic: Votic,
    "Wakashan languages": {
      name: "Wakashan languages",
      names: ["Wakashan languages"],
      "iso639-2": "wak",
      "iso639-1": null
    },
    Walloon: Walloon,
    Waray: Waray,
    Washo: Washo,
    Welsh: Welsh,
    "Western Frisian": {
      name: "Western Frisian",
      names: ["Western Frisian"],
      "iso639-2": "fry",
      "iso639-1": "fy"
    },
    "Western Pahari languages": {
      name: "Western Pahari languages",
      names: ["Himachali languages", "Western Pahari languages"],
      "iso639-2": "him",
      "iso639-1": null
    },
    Wolaitta: Wolaitta,
    Wolaytta: Wolaytta,
    Wolof: Wolof,
    Xhosa: Xhosa,
    Yakut: Yakut,
    Yao: Yao,
    Yapese: Yapese,
    Yiddish: Yiddish,
    Yoruba: Yoruba,
    "Yupik languages": {
      name: "Yupik languages",
      names: ["Yupik languages"],
      "iso639-2": "ypk",
      "iso639-1": null
    },
    "Zande languages": {
      name: "Zande languages",
      names: ["Zande languages"],
      "iso639-2": "znd",
      "iso639-1": null
    },
    Zapotec: Zapotec,
    Zaza: Zaza,
    Zazaki: Zazaki,
    Zenaga: Zenaga,
    Zhuang: Zhuang,
    Zulu: Zulu,
    Zuni: Zuni
  };

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  var locales = [];
  var isoKeys = Object.keys(iso);
  Object.keys(lcid).map(function (id) {
    var locale = lcid[id];
    var isoLanguage = isoKeys.find(function (name) {
      return name.toLowerCase() === locale.language.toLowerCase();
    });

    if (locale.location && isoLanguage) {
      var _locales$push;

      locales.push((_locales$push = {}, _defineProperty(_locales$push, "name", locale.language), _defineProperty(_locales$push, "location", locale.location), _defineProperty(_locales$push, "tag", locale.tag), _defineProperty(_locales$push, "lcid", locale.id), _defineProperty(_locales$push, "iso639-2", iso[isoLanguage]["iso639-2"]), _defineProperty(_locales$push, "iso639-1", iso[isoLanguage]["iso639-1"]), _locales$push));
    }
  });
  var defaultLocales = {
    ar: "ar-SA",
    ca: "ca-ES",
    da: "da-DK",
    en: "en-US",
    ko: "ko-KR",
    pa: "pa-IN",
    pt: "pt-BR",
    sv: "sv-SE"
  };
  /**
   * Converts a 2-digit language into a full language-LOCATION locale.
   * @param {String} locale
   */

  function findLocale(locale) {
    if (typeof locale !== "string" || locale.length === 5) return locale;
    if (defaultLocales[locale]) return defaultLocales[locale];
    var list = locales.filter(function (d) {
      return d["iso639-1"] === locale;
    });
    if (!list.length) return locale;else if (list.length === 1) return list[0].tag;else if (list.find(function (d) {
      return d.tag === "".concat(locale, "-").concat(locale.toUpperCase());
    })) return "".concat(locale, "-").concat(locale.toUpperCase());else return list[0].tag;
  }
  /**
      @function s
      @desc Returns 4 random characters, used for constructing unique identifiers.
      @private
  */


  function s() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }
  /**
      @function uuid
      @summary Returns a unique identifier.
  */


  function uuid() {
    return "".concat(s()).concat(s(), "-").concat(s(), "-").concat(s(), "-").concat(s(), "-").concat(s()).concat(s()).concat(s());
  }
  /**
      @constant RESET
      @desc String constant used to reset an individual config property.
  */


  var RESET = "D3PLUS-COMMON-RESET";
  var esES = {
    "and": "y",
    "Back": "Atrás",
    "Click to Expand": "Clic para Ampliar",
    "Click to Hide": "Clic para Ocultar",
    "Click to Highlight": "Clic para Resaltar",
    "Click to Reset": "Clic para Restablecer",
    "Download": "Descargar",
    "Loading Visualization": "Cargando Visualización",
    "No Data Available": "Datos No Disponibles",
    "Powered by D3plus": "Funciona con D3plus",
    "Share": "Porcentaje",
    "Shift+Click to Hide": "Mayús+Clic para Ocultar",
    "Total": "Total",
    "Values": "Valores"
  };
  var dictionaries = {
    "es-ES": esES
  };

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }
  /**
      @desc Recursive function that resets nested Object configs.
      @param {Object} obj
      @param {Object} defaults
      @private
  */


  function nestedReset(obj, defaults) {
    if (isObject(obj)) {
      for (var nestedKey in obj) {
        if ({}.hasOwnProperty.call(obj, nestedKey) && !nestedKey.startsWith("_")) {
          var defaultValue = defaults && isObject(defaults) ? defaults[nestedKey] : undefined;

          if (obj[nestedKey] === RESET) {
            if (defaultValue) obj[nestedKey] = defaultValue;else delete obj[nestedKey];
          } else if (isObject(obj[nestedKey])) {
            nestedReset(obj[nestedKey], defaultValue);
          }
        }
      }
    }
  }
  /**
   * @desc finds all prototype methods of a class and it's parent classes
   * @param {*} obj
   * @private
   */


  function getAllMethods(obj) {
    var props = [];

    do {
      props = props.concat(Object.getOwnPropertyNames(obj));
      obj = Object.getPrototypeOf(obj);
    } while (obj && obj !== Object.prototype);

    return props.filter(function (e) {
      return e.indexOf("_") !== 0 && !["config", "constructor", "parent", "render"].includes(e);
    });
  }
  /**
      @class BaseClass
      @summary An abstract class that contains some global methods and functionality.
  */


  var BaseClass = /*#__PURE__*/function () {
    /**
        @memberof BaseClass
        @desc Invoked when creating a new class instance, and sets any default parameters.
        @private
    */
    function BaseClass() {
      var _this = this;

      _classCallCheck(this, BaseClass);

      this._locale = "en-US";
      this._on = {};
      this._parent = {};

      this._translate = function (d) {
        var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _this._locale;
        var dictionary = dictionaries[locale];
        return dictionary && dictionary[d] ? dictionary[d] : d;
      };

      this._uuid = uuid();
    }
    /**
        @memberof BaseClass
        @desc If *value* is specified, sets the methods that correspond to the key/value pairs and returns this class. If *value* is not specified, returns the current configuration.
        @param {Object} [*value*]
        @chainable
    */


    _createClass(BaseClass, [{
      key: "config",
      value: function config(_) {
        var _this2 = this;

        if (!this._configDefault) {
          var config = {};
          getAllMethods(this.__proto__).forEach(function (k) {
            var v = _this2[k]();

            if (v !== _this2) config[k] = isObject(v) ? assign({}, v) : v;
          });
          this._configDefault = config;
        }

        if (arguments.length) {
          for (var k in _) {
            if ({}.hasOwnProperty.call(_, k) && k in this) {
              var v = _[k];

              if (v === RESET) {
                if (k === "on") this._on = this._configDefault[k];else this[k](this._configDefault[k]);
              } else {
                nestedReset(v, this._configDefault[k]);
                this[k](v);
              }
            }
          }

          return this;
        } else {
          var _config = {};
          getAllMethods(this.__proto__).forEach(function (k) {
            _config[k] = _this2[k]();
          });
          return _config;
        }
      }
      /**
          @memberof BaseClass
          @desc Sets the locale used for all text and number formatting. This method supports the locales defined in [d3plus-format](https://github.com/d3plus/d3plus-format/blob/master/src/locale.js). The locale can be defined as a complex Object (like in d3plus-format), a locale code (like "en-US"), or a 2-digit language code (like "en"). If a 2-digit code is provided, the "findLocale" function is used to identify the most approximate locale from d3plus-format.
          @param {Object|String} [*value* = "en-US"]
          @chainable
          @example
          {
            separator: "",
            suffixes: ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "B", "t", "q", "Q", "Z", "Y"],
            grouping: [3],
            delimiters: {
              thousands: ",",
              decimal: "."
            },
            currency: ["$", ""]
          }
      */

    }, {
      key: "locale",
      value: function locale(_) {
        return arguments.length ? (this._locale = findLocale(_), this) : this._locale;
      }
      /**
          @memberof BaseClass
          @desc Adds or removes a *listener* to each object for the specified event *typenames*. If a *listener* is not specified, returns the currently assigned listener for the specified event *typename*. Mirrors the core [d3-selection](https://github.com/d3/d3-selection#selection_on) behavior.
          @param {String} [*typenames*]
          @param {Function} [*listener*]
          @chainable
          @example <caption>By default, listeners apply globally to all objects, however, passing a namespace with the class name gives control over specific elements:</caption>
      new Plot
      .on("click.Shape", function(d) {
        console.log("data for shape clicked:", d);
      })
      .on("click.Legend", function(d) {
        console.log("data for legend clicked:", d);
      })
      */

    }, {
      key: "on",
      value: function on(_, f) {
        return arguments.length === 2 ? (this._on[_] = f, this) : arguments.length ? typeof _ === "string" ? this._on[_] : (this._on = Object.assign({}, this._on, _), this) : this._on;
      }
      /**
          @memberof Viz
          @desc If *value* is specified, sets the parent config used by the wrapper and returns the current class instance.
          @param {Object} [*value*]
          @chainable
      */

    }, {
      key: "parent",
      value: function parent(_) {
        return arguments.length ? (this._parent = _, this) : this._parent;
      }
      /**
          @memberof BaseClass
          @desc Defines how informational text strings should be displayed. By default, this function will try to find the string in question (which is the first argument provided to this function) inside of an internally managed translation Object. If you'd like to override to use custom text, simply pass this method your own custom formatting function.
          @param {Function} [*value*]
          @chainable
          @example <caption>For example, if we wanted to only change the string "Back" and allow all other string to return in English:</caption>
      .translate(function(d) {
      return d === "Back" ? "Get outta here" : d;
      })
      */

    }, {
      key: "translate",
      value: function translate(_) {
        return arguments.length ? (this._translate = _, this) : this._translate;
      }
      /**
          @memberof Viz
          @desc If *value* is specified, sets the config method for each shape and returns the current class instance.
          @param {Object} [*value*]
          @chainable
      */

    }, {
      key: "shapeConfig",
      value: function shapeConfig(_) {
        return arguments.length ? (this._shapeConfig = assign(this._shapeConfig, _), this) : this._shapeConfig;
      }
    }]);

    return BaseClass;
  }();
  /**
      @function constant
      @desc Wraps non-function variables in a simple return function.
      @param {Array|Number|Object|String} value The value to be returned from the function.
      @example <caption>this</caption>
  constant(42);
      @example <caption>returns this</caption>
  function() {
    return 42;
  }
  */


  function constant$1(value) {
    return function constant() {
      return value;
    };
  }
  /**
      @function prefix
      @desc Returns the appropriate CSS vendor prefix, given the current browser.
  */


  function prefix() {
    if ("-webkit-transform" in document.body.style) return "-webkit-";else if ("-moz-transform" in document.body.style) return "-moz-";else if ("-ms-transform" in document.body.style) return "-ms-";else if ("-o-transform" in document.body.style) return "-o-";else return "";
  }
  /**
      @function stylize
      @desc Applies each key/value in an object as a style.
      @param {D3selection} elem The D3 element to apply the styles to.
      @param {Object} styles An object of key/value style pairs.
  */


  function stylize(e) {
    var s = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    for (var k in s) {
      if ({}.hasOwnProperty.call(s, k)) e.style(k, s[k]);
    }
  }

  function getBoundingClientRect(element) {
    var rect = element.getBoundingClientRect();
    return {
      width: rect.width,
      height: rect.height,
      top: rect.top,
      right: rect.right,
      bottom: rect.bottom,
      left: rect.left,
      x: rect.left,
      y: rect.top
    };
  }
  /*:: import type { Window } from '../types'; */

  /*:: declare function getWindow(node: Node | Window): Window; */


  function getWindow(node) {
    if (node.toString() !== '[object Window]') {
      var ownerDocument = node.ownerDocument;
      return ownerDocument ? ownerDocument.defaultView || window : window;
    }

    return node;
  }

  function getWindowScroll(node) {
    var win = getWindow(node);
    var scrollLeft = win.pageXOffset;
    var scrollTop = win.pageYOffset;
    return {
      scrollLeft: scrollLeft,
      scrollTop: scrollTop
    };
  }
  /*:: declare function isElement(node: mixed): boolean %checks(node instanceof
    Element); */


  function isElement(node) {
    var OwnElement = getWindow(node).Element;
    return node instanceof OwnElement || node instanceof Element;
  }
  /*:: declare function isHTMLElement(node: mixed): boolean %checks(node instanceof
    HTMLElement); */


  function isHTMLElement(node) {
    var OwnElement = getWindow(node).HTMLElement;
    return node instanceof OwnElement || node instanceof HTMLElement;
  }
  /*:: declare function isShadowRoot(node: mixed): boolean %checks(node instanceof
    ShadowRoot); */


  function isShadowRoot(node) {
    var OwnElement = getWindow(node).ShadowRoot;
    return node instanceof OwnElement || node instanceof ShadowRoot;
  }

  function getHTMLElementScroll(element) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }

  function getNodeScroll(node) {
    if (node === getWindow(node) || !isHTMLElement(node)) {
      return getWindowScroll(node);
    } else {
      return getHTMLElementScroll(node);
    }
  }

  function getNodeName(element) {
    return element ? (element.nodeName || '').toLowerCase() : null;
  }

  function getDocumentElement(element) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return ((isElement(element) ? element.ownerDocument : // $FlowFixMe[prop-missing]
    element.document) || window.document).documentElement;
  }

  function getWindowScrollBarX(element) {
    // If <html> has a CSS width greater than the viewport, then this will be
    // incorrect for RTL.
    // Popper 1 is broken in this case and never had a bug report so let's assume
    // it's not an issue. I don't think anyone ever specifies width on <html>
    // anyway.
    // Browsers where the left scrollbar doesn't cause an issue report `0` for
    // this (e.g. Edge 2019, IE11, Safari)
    return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
  }

  function getComputedStyle(element) {
    return getWindow(element).getComputedStyle(element);
  }

  function isScrollParent(element) {
    // Firefox wants us to check `-x` and `-y` variations as well
    var _getComputedStyle = getComputedStyle(element),
        overflow = _getComputedStyle.overflow,
        overflowX = _getComputedStyle.overflowX,
        overflowY = _getComputedStyle.overflowY;

    return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
  } // Composite means it takes into account transforms as well as layout.


  function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
    if (isFixed === void 0) {
      isFixed = false;
    }

    var documentElement = getDocumentElement(offsetParent);
    var rect = getBoundingClientRect(elementOrVirtualElement);
    var isOffsetParentAnElement = isHTMLElement(offsetParent);
    var scroll = {
      scrollLeft: 0,
      scrollTop: 0
    };
    var offsets = {
      x: 0,
      y: 0
    };

    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
      if (getNodeName(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
      isScrollParent(documentElement)) {
        scroll = getNodeScroll(offsetParent);
      }

      if (isHTMLElement(offsetParent)) {
        offsets = getBoundingClientRect(offsetParent);
        offsets.x += offsetParent.clientLeft;
        offsets.y += offsetParent.clientTop;
      } else if (documentElement) {
        offsets.x = getWindowScrollBarX(documentElement);
      }
    }

    return {
      x: rect.left + scroll.scrollLeft - offsets.x,
      y: rect.top + scroll.scrollTop - offsets.y,
      width: rect.width,
      height: rect.height
    };
  } // Returns the layout rect of an element relative to its offsetParent. Layout
  // means it doesn't take into account transforms.


  function getLayoutRect(element) {
    return {
      x: element.offsetLeft,
      y: element.offsetTop,
      width: element.offsetWidth,
      height: element.offsetHeight
    };
  }

  function getParentNode(element) {
    if (getNodeName(element) === 'html') {
      return element;
    }

    return (// this is a quicker (but less type safe) way to save quite some bytes from the bundle
      // $FlowFixMe[incompatible-return]
      // $FlowFixMe[prop-missing]
      element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
      element.parentNode || // DOM Element detected
      // $FlowFixMe[incompatible-return]: need a better way to handle this...
      element.host || // ShadowRoot detected
      // $FlowFixMe[incompatible-call]: HTMLElement is a Node
      getDocumentElement(element) // fallback

    );
  }

  function getScrollParent(node) {
    if (['html', 'body', '#document'].indexOf(getNodeName(node)) >= 0) {
      // $FlowFixMe[incompatible-return]: assume body is always available
      return node.ownerDocument.body;
    }

    if (isHTMLElement(node) && isScrollParent(node)) {
      return node;
    }

    return getScrollParent(getParentNode(node));
  }
  /*
  given a DOM element, return the list of all scroll parents, up the list of ancesors
  until we get to the top window object. This list is what we attach scroll listeners
  to, because if any of these parent elements scroll, we'll need to re-calculate the
  reference element's position.
  */


  function listScrollParents(element, list) {
    if (list === void 0) {
      list = [];
    }

    var scrollParent = getScrollParent(element);
    var isBody = getNodeName(scrollParent) === 'body';
    var win = getWindow(scrollParent);
    var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
    var updatedList = list.concat(target);
    return isBody ? updatedList : // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    updatedList.concat(listScrollParents(getParentNode(target)));
  }

  function isTableElement(element) {
    return ['table', 'td', 'th'].indexOf(getNodeName(element)) >= 0;
  }

  function getTrueOffsetParent(element) {
    if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
    getComputedStyle(element).position === 'fixed') {
      return null;
    }

    var offsetParent = element.offsetParent;

    if (offsetParent) {
      var html = getDocumentElement(offsetParent);

      if (getNodeName(offsetParent) === 'body' && getComputedStyle(offsetParent).position === 'static' && getComputedStyle(html).position !== 'static') {
        return html;
      }
    }

    return offsetParent;
  } // `.offsetParent` reports `null` for fixed elements, while absolute elements
  // return the containing block


  function getContainingBlock(element) {
    var currentNode = getParentNode(element);

    while (isHTMLElement(currentNode) && ['html', 'body'].indexOf(getNodeName(currentNode)) < 0) {
      var css = getComputedStyle(currentNode); // This is non-exhaustive but covers the most common CSS properties that
      // create a containing block.

      if (css.transform !== 'none' || css.perspective !== 'none' || css.willChange && css.willChange !== 'auto') {
        return currentNode;
      } else {
        currentNode = currentNode.parentNode;
      }
    }

    return null;
  } // Gets the closest ancestor positioned element. Handles some edge cases,
  // such as table ancestors and cross browser bugs.


  function getOffsetParent(element) {
    var window = getWindow(element);
    var offsetParent = getTrueOffsetParent(element);

    while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === 'static') {
      offsetParent = getTrueOffsetParent(offsetParent);
    }

    if (offsetParent && getNodeName(offsetParent) === 'body' && getComputedStyle(offsetParent).position === 'static') {
      return window;
    }

    return offsetParent || getContainingBlock(element) || window;
  }

  var top = 'top';
  var bottom = 'bottom';
  var right = 'right';
  var left = 'left';
  var auto = 'auto';
  var basePlacements = [top, bottom, right, left];
  var start = 'start';
  var end = 'end';
  var clippingParents = 'clippingParents';
  var viewport = 'viewport';
  var popper = 'popper';
  var reference = 'reference';
  var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
    return acc.concat([placement + "-" + start, placement + "-" + end]);
  }, []);
  var placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
    return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
  }, []); // modifiers that need to read the DOM

  var beforeRead = 'beforeRead';
  var read = 'read';
  var afterRead = 'afterRead'; // pure-logic modifiers

  var beforeMain = 'beforeMain';
  var main = 'main';
  var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

  var beforeWrite = 'beforeWrite';
  var write = 'write';
  var afterWrite = 'afterWrite';
  var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

  function order(modifiers) {
    var map = new Map();
    var visited = new Set();
    var result = [];
    modifiers.forEach(function (modifier) {
      map.set(modifier.name, modifier);
    }); // On visiting object, check for its dependencies and visit them recursively

    function sort(modifier) {
      visited.add(modifier.name);
      var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
      requires.forEach(function (dep) {
        if (!visited.has(dep)) {
          var depModifier = map.get(dep);

          if (depModifier) {
            sort(depModifier);
          }
        }
      });
      result.push(modifier);
    }

    modifiers.forEach(function (modifier) {
      if (!visited.has(modifier.name)) {
        // check for visited object
        sort(modifier);
      }
    });
    return result;
  }

  function orderModifiers(modifiers) {
    // order based on dependencies
    var orderedModifiers = order(modifiers); // order based on phase

    return modifierPhases.reduce(function (acc, phase) {
      return acc.concat(orderedModifiers.filter(function (modifier) {
        return modifier.phase === phase;
      }));
    }, []);
  }

  function debounce(fn) {
    var pending;
    return function () {
      if (!pending) {
        pending = new Promise(function (resolve) {
          Promise.resolve().then(function () {
            pending = undefined;
            resolve(fn());
          });
        });
      }

      return pending;
    };
  }

  function getBasePlacement(placement) {
    return placement.split('-')[0];
  }

  function mergeByName(modifiers) {
    var merged = modifiers.reduce(function (merged, current) {
      var existing = merged[current.name];
      merged[current.name] = existing ? Object.assign(Object.assign(Object.assign({}, existing), current), {}, {
        options: Object.assign(Object.assign({}, existing.options), current.options),
        data: Object.assign(Object.assign({}, existing.data), current.data)
      }) : current;
      return merged;
    }, {}); // IE11 does not support Object.values

    return Object.keys(merged).map(function (key) {
      return merged[key];
    });
  }

  function getViewportRect(element) {
    var win = getWindow(element);
    var html = getDocumentElement(element);
    var visualViewport = win.visualViewport;
    var width = html.clientWidth;
    var height = html.clientHeight;
    var x = 0;
    var y = 0; // NB: This isn't supported on iOS <= 12. If the keyboard is open, the popper
    // can be obscured underneath it.
    // Also, `html.clientHeight` adds the bottom bar height in Safari iOS, even
    // if it isn't open, so if this isn't available, the popper will be detected
    // to overflow the bottom of the screen too early.

    if (visualViewport) {
      width = visualViewport.width;
      height = visualViewport.height; // Uses Layout Viewport (like Chrome; Safari does not currently)
      // In Chrome, it returns a value very close to 0 (+/-) but contains rounding
      // errors due to floating point numbers, so we need to check precision.
      // Safari returns a number <= 0, usually < -1 when pinch-zoomed
      // Feature detection fails in mobile emulation mode in Chrome.
      // Math.abs(win.innerWidth / visualViewport.scale - visualViewport.width) <
      // 0.001
      // Fallback here: "Not Safari" userAgent

      if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
        x = visualViewport.offsetLeft;
        y = visualViewport.offsetTop;
      }
    }

    return {
      width: width,
      height: height,
      x: x + getWindowScrollBarX(element),
      y: y
    };
  } // of the `<html>` and `<body>` rect bounds if horizontally scrollable


  function getDocumentRect(element) {
    var html = getDocumentElement(element);
    var winScroll = getWindowScroll(element);
    var body = element.ownerDocument.body;
    var width = Math.max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
    var height = Math.max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
    var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
    var y = -winScroll.scrollTop;

    if (getComputedStyle(body || html).direction === 'rtl') {
      x += Math.max(html.clientWidth, body ? body.clientWidth : 0) - width;
    }

    return {
      width: width,
      height: height,
      x: x,
      y: y
    };
  }

  function contains(parent, child) {
    var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

    if (parent.contains(child)) {
      return true;
    } // then fallback to custom implementation with Shadow DOM support
    else if (rootNode && isShadowRoot(rootNode)) {
        var next = child;

        do {
          if (next && parent.isSameNode(next)) {
            return true;
          } // $FlowFixMe[prop-missing]: need a better way to handle this...


          next = next.parentNode || next.host;
        } while (next);
      } // Give up, the result is false


    return false;
  }

  function rectToClientRect(rect) {
    return Object.assign(Object.assign({}, rect), {}, {
      left: rect.x,
      top: rect.y,
      right: rect.x + rect.width,
      bottom: rect.y + rect.height
    });
  }

  function getInnerBoundingClientRect(element) {
    var rect = getBoundingClientRect(element);
    rect.top = rect.top + element.clientTop;
    rect.left = rect.left + element.clientLeft;
    rect.bottom = rect.top + element.clientHeight;
    rect.right = rect.left + element.clientWidth;
    rect.width = element.clientWidth;
    rect.height = element.clientHeight;
    rect.x = rect.left;
    rect.y = rect.top;
    return rect;
  }

  function getClientRectFromMixedType(element, clippingParent) {
    return clippingParent === viewport ? rectToClientRect(getViewportRect(element)) : isHTMLElement(clippingParent) ? getInnerBoundingClientRect(clippingParent) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
  } // A "clipping parent" is an overflowable container with the characteristic of
  // clipping (or hiding) overflowing elements with a position different from
  // `initial`


  function getClippingParents(element) {
    var clippingParents = listScrollParents(getParentNode(element));
    var canEscapeClipping = ['absolute', 'fixed'].indexOf(getComputedStyle(element).position) >= 0;
    var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;

    if (!isElement(clipperElement)) {
      return [];
    } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414


    return clippingParents.filter(function (clippingParent) {
      return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== 'body';
    });
  } // Gets the maximum area that the element is visible in due to any number of
  // clipping parents


  function getClippingRect(element, boundary, rootBoundary) {
    var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
    var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
    var firstClippingParent = clippingParents[0];
    var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
      var rect = getClientRectFromMixedType(element, clippingParent);
      accRect.top = Math.max(rect.top, accRect.top);
      accRect.right = Math.min(rect.right, accRect.right);
      accRect.bottom = Math.min(rect.bottom, accRect.bottom);
      accRect.left = Math.max(rect.left, accRect.left);
      return accRect;
    }, getClientRectFromMixedType(element, firstClippingParent));
    clippingRect.width = clippingRect.right - clippingRect.left;
    clippingRect.height = clippingRect.bottom - clippingRect.top;
    clippingRect.x = clippingRect.left;
    clippingRect.y = clippingRect.top;
    return clippingRect;
  }

  function getVariation(placement) {
    return placement.split('-')[1];
  }

  function getMainAxisFromPlacement(placement) {
    return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
  }

  function computeOffsets(_ref) {
    var reference = _ref.reference,
        element = _ref.element,
        placement = _ref.placement;
    var basePlacement = placement ? getBasePlacement(placement) : null;
    var variation = placement ? getVariation(placement) : null;
    var commonX = reference.x + reference.width / 2 - element.width / 2;
    var commonY = reference.y + reference.height / 2 - element.height / 2;
    var offsets;

    switch (basePlacement) {
      case top:
        offsets = {
          x: commonX,
          y: reference.y - element.height
        };
        break;

      case bottom:
        offsets = {
          x: commonX,
          y: reference.y + reference.height
        };
        break;

      case right:
        offsets = {
          x: reference.x + reference.width,
          y: commonY
        };
        break;

      case left:
        offsets = {
          x: reference.x - element.width,
          y: commonY
        };
        break;

      default:
        offsets = {
          x: reference.x,
          y: reference.y
        };
    }

    var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;

    if (mainAxis != null) {
      var len = mainAxis === 'y' ? 'height' : 'width';

      switch (variation) {
        case start:
          offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
          break;

        case end:
          offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
          break;
      }
    }

    return offsets;
  }

  function getFreshSideObject() {
    return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    };
  }

  function mergePaddingObject(paddingObject) {
    return Object.assign(Object.assign({}, getFreshSideObject()), paddingObject);
  }

  function expandToHashMap(value, keys) {
    return keys.reduce(function (hashMap, key) {
      hashMap[key] = value;
      return hashMap;
    }, {});
  }

  function detectOverflow(state, options) {
    if (options === void 0) {
      options = {};
    }

    var _options = options,
        _options$placement = _options.placement,
        placement = _options$placement === void 0 ? state.placement : _options$placement,
        _options$boundary = _options.boundary,
        boundary = _options$boundary === void 0 ? clippingParents : _options$boundary,
        _options$rootBoundary = _options.rootBoundary,
        rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary,
        _options$elementConte = _options.elementContext,
        elementContext = _options$elementConte === void 0 ? popper : _options$elementConte,
        _options$altBoundary = _options.altBoundary,
        altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
        _options$padding = _options.padding,
        padding = _options$padding === void 0 ? 0 : _options$padding;
    var paddingObject = mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
    var altContext = elementContext === popper ? reference : popper;
    var referenceElement = state.elements.reference;
    var popperRect = state.rects.popper;
    var element = state.elements[altBoundary ? altContext : elementContext];
    var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary);
    var referenceClientRect = getBoundingClientRect(referenceElement);
    var popperOffsets = computeOffsets({
      reference: referenceClientRect,
      element: popperRect,
      strategy: 'absolute',
      placement: placement
    });
    var popperClientRect = rectToClientRect(Object.assign(Object.assign({}, popperRect), popperOffsets));
    var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
    // 0 or negative = within the clipping rect

    var overflowOffsets = {
      top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
      bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
      left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
      right: elementClientRect.right - clippingClientRect.right + paddingObject.right
    };
    var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

    if (elementContext === popper && offsetData) {
      var offset = offsetData[placement];
      Object.keys(overflowOffsets).forEach(function (key) {
        var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
        var axis = [top, bottom].indexOf(key) >= 0 ? 'y' : 'x';
        overflowOffsets[key] += offset[axis] * multiply;
      });
    }

    return overflowOffsets;
  }

  var DEFAULT_OPTIONS = {
    placement: 'bottom',
    modifiers: [],
    strategy: 'absolute'
  };

  function areValidElements() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return !args.some(function (element) {
      return !(element && typeof element.getBoundingClientRect === 'function');
    });
  }

  function popperGenerator(generatorOptions) {
    if (generatorOptions === void 0) {
      generatorOptions = {};
    }

    var _generatorOptions = generatorOptions,
        _generatorOptions$def = _generatorOptions.defaultModifiers,
        defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
        _generatorOptions$def2 = _generatorOptions.defaultOptions,
        defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
    return function createPopper(reference, popper, options) {
      if (options === void 0) {
        options = defaultOptions;
      }

      var state = {
        placement: 'bottom',
        orderedModifiers: [],
        options: Object.assign(Object.assign({}, DEFAULT_OPTIONS), defaultOptions),
        modifiersData: {},
        elements: {
          reference: reference,
          popper: popper
        },
        attributes: {},
        styles: {}
      };
      var effectCleanupFns = [];
      var isDestroyed = false;
      var instance = {
        state: state,
        setOptions: function setOptions(options) {
          cleanupModifierEffects();
          state.options = Object.assign(Object.assign(Object.assign({}, defaultOptions), state.options), options);
          state.scrollParents = {
            reference: isElement(reference) ? listScrollParents(reference) : reference.contextElement ? listScrollParents(reference.contextElement) : [],
            popper: listScrollParents(popper)
          }; // Orders the modifiers based on their dependencies and `phase`
          // properties

          var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

          state.orderedModifiers = orderedModifiers.filter(function (m) {
            return m.enabled;
          }); // Validate the provided modifiers so that the consumer will get warned

          runModifierEffects();
          return instance.update();
        },
        // Sync update – it will always be executed, even if not necessary. This
        // is useful for low frequency updates where sync behavior simplifies the
        // logic.
        // For high frequency updates (e.g. `resize` and `scroll` events), always
        // prefer the async Popper#update method
        forceUpdate: function forceUpdate() {
          if (isDestroyed) {
            return;
          }

          var _state$elements = state.elements,
              reference = _state$elements.reference,
              popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
          // anymore

          if (!areValidElements(reference, popper)) {
            return;
          } // Store the reference and popper rects to be read by modifiers


          state.rects = {
            reference: getCompositeRect(reference, getOffsetParent(popper), state.options.strategy === 'fixed'),
            popper: getLayoutRect(popper)
          }; // Modifiers have the ability to reset the current update cycle. The
          // most common use case for this is the `flip` modifier changing the
          // placement, which then needs to re-run all the modifiers, because the
          // logic was previously ran for the previous placement and is therefore
          // stale/incorrect

          state.reset = false;
          state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
          // is filled with the initial data specified by the modifier. This means
          // it doesn't persist and is fresh on each update.
          // To ensure persistent data, use `${name}#persistent`

          state.orderedModifiers.forEach(function (modifier) {
            return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
          });

          for (var index = 0; index < state.orderedModifiers.length; index++) {
            if (state.reset === true) {
              state.reset = false;
              index = -1;
              continue;
            }

            var _state$orderedModifie = state.orderedModifiers[index],
                fn = _state$orderedModifie.fn,
                _state$orderedModifie2 = _state$orderedModifie.options,
                _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
                name = _state$orderedModifie.name;

            if (typeof fn === 'function') {
              state = fn({
                state: state,
                options: _options,
                name: name,
                instance: instance
              }) || state;
            }
          }
        },
        // Async and optimistically optimized update – it will not be executed if
        // not necessary (debounced to run at most once-per-tick)
        update: debounce(function () {
          return new Promise(function (resolve) {
            instance.forceUpdate();
            resolve(state);
          });
        }),
        destroy: function destroy() {
          cleanupModifierEffects();
          isDestroyed = true;
        }
      };

      if (!areValidElements(reference, popper)) {
        return instance;
      }

      instance.setOptions(options).then(function (state) {
        if (!isDestroyed && options.onFirstUpdate) {
          options.onFirstUpdate(state);
        }
      }); // Modifiers have the ability to execute arbitrary code before the first
      // update cycle runs. They will be executed in the same order as the update
      // cycle. This is useful when a modifier adds some persistent data that
      // other modifiers need to use, but the modifier is run after the dependent
      // one.

      function runModifierEffects() {
        state.orderedModifiers.forEach(function (_ref3) {
          var name = _ref3.name,
              _ref3$options = _ref3.options,
              options = _ref3$options === void 0 ? {} : _ref3$options,
              effect = _ref3.effect;

          if (typeof effect === 'function') {
            var cleanupFn = effect({
              state: state,
              name: name,
              instance: instance,
              options: options
            });

            var noopFn = function noopFn() {};

            effectCleanupFns.push(cleanupFn || noopFn);
          }
        });
      }

      function cleanupModifierEffects() {
        effectCleanupFns.forEach(function (fn) {
          return fn();
        });
        effectCleanupFns = [];
      }

      return instance;
    };
  }

  var passive = {
    passive: true
  };

  function effect(_ref) {
    var state = _ref.state,
        instance = _ref.instance,
        options = _ref.options;
    var _options$scroll = options.scroll,
        scroll = _options$scroll === void 0 ? true : _options$scroll,
        _options$resize = options.resize,
        resize = _options$resize === void 0 ? true : _options$resize;
    var window = getWindow(state.elements.popper);
    var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);

    if (scroll) {
      scrollParents.forEach(function (scrollParent) {
        scrollParent.addEventListener('scroll', instance.update, passive);
      });
    }

    if (resize) {
      window.addEventListener('resize', instance.update, passive);
    }

    return function () {
      if (scroll) {
        scrollParents.forEach(function (scrollParent) {
          scrollParent.removeEventListener('scroll', instance.update, passive);
        });
      }

      if (resize) {
        window.removeEventListener('resize', instance.update, passive);
      }
    };
  } // eslint-disable-next-line import/no-unused-modules


  var eventListeners = {
    name: 'eventListeners',
    enabled: true,
    phase: 'write',
    fn: function fn() {},
    effect: effect,
    data: {}
  };

  function popperOffsets(_ref) {
    var state = _ref.state,
        name = _ref.name; // Offsets are the actual position the popper needs to have to be
    // properly positioned near its reference element
    // This is the most basic placement, and will be adjusted by
    // the modifiers in the next step

    state.modifiersData[name] = computeOffsets({
      reference: state.rects.reference,
      element: state.rects.popper,
      strategy: 'absolute',
      placement: state.placement
    });
  } // eslint-disable-next-line import/no-unused-modules


  var popperOffsets$1 = {
    name: 'popperOffsets',
    enabled: true,
    phase: 'read',
    fn: popperOffsets,
    data: {}
  };
  var unsetSides = {
    top: 'auto',
    right: 'auto',
    bottom: 'auto',
    left: 'auto'
  }; // Round the offsets to the nearest suitable subpixel based on the DPR.
  // Zooming can change the DPR, but it seems to report a value that will
  // cleanly divide the values into the appropriate subpixels.

  function roundOffsetsByDPR(_ref) {
    var x = _ref.x,
        y = _ref.y;
    var win = window;
    var dpr = win.devicePixelRatio || 1;
    return {
      x: Math.round(x * dpr) / dpr || 0,
      y: Math.round(y * dpr) / dpr || 0
    };
  }

  function mapToStyles(_ref2) {
    var _Object$assign2;

    var popper = _ref2.popper,
        popperRect = _ref2.popperRect,
        placement = _ref2.placement,
        offsets = _ref2.offsets,
        position = _ref2.position,
        gpuAcceleration = _ref2.gpuAcceleration,
        adaptive = _ref2.adaptive,
        roundOffsets = _ref2.roundOffsets;

    var _ref3 = roundOffsets ? roundOffsetsByDPR(offsets) : offsets,
        _ref3$x = _ref3.x,
        x = _ref3$x === void 0 ? 0 : _ref3$x,
        _ref3$y = _ref3.y,
        y = _ref3$y === void 0 ? 0 : _ref3$y;

    var hasX = offsets.hasOwnProperty('x');
    var hasY = offsets.hasOwnProperty('y');
    var sideX = left;
    var sideY = top;
    var win = window;

    if (adaptive) {
      var offsetParent = getOffsetParent(popper);

      if (offsetParent === getWindow(popper)) {
        offsetParent = getDocumentElement(popper);
      } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it

      /*:: offsetParent = (offsetParent: Element); */


      if (placement === top) {
        sideY = bottom;
        y -= offsetParent.clientHeight - popperRect.height;
        y *= gpuAcceleration ? 1 : -1;
      }

      if (placement === left) {
        sideX = right;
        x -= offsetParent.clientWidth - popperRect.width;
        x *= gpuAcceleration ? 1 : -1;
      }
    }

    var commonStyles = Object.assign({
      position: position
    }, adaptive && unsetSides);

    if (gpuAcceleration) {
      var _Object$assign;

      return Object.assign(Object.assign({}, commonStyles), {}, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) < 2 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
    }

    return Object.assign(Object.assign({}, commonStyles), {}, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
  }

  function computeStyles(_ref4) {
    var state = _ref4.state,
        options = _ref4.options;
    var _options$gpuAccelerat = options.gpuAcceleration,
        gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
        _options$adaptive = options.adaptive,
        adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
        _options$roundOffsets = options.roundOffsets,
        roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
    var commonStyles = {
      placement: getBasePlacement(state.placement),
      popper: state.elements.popper,
      popperRect: state.rects.popper,
      gpuAcceleration: gpuAcceleration
    };

    if (state.modifiersData.popperOffsets != null) {
      state.styles.popper = Object.assign(Object.assign({}, state.styles.popper), mapToStyles(Object.assign(Object.assign({}, commonStyles), {}, {
        offsets: state.modifiersData.popperOffsets,
        position: state.options.strategy,
        adaptive: adaptive,
        roundOffsets: roundOffsets
      })));
    }

    if (state.modifiersData.arrow != null) {
      state.styles.arrow = Object.assign(Object.assign({}, state.styles.arrow), mapToStyles(Object.assign(Object.assign({}, commonStyles), {}, {
        offsets: state.modifiersData.arrow,
        position: 'absolute',
        adaptive: false,
        roundOffsets: roundOffsets
      })));
    }

    state.attributes.popper = Object.assign(Object.assign({}, state.attributes.popper), {}, {
      'data-popper-placement': state.placement
    });
  } // eslint-disable-next-line import/no-unused-modules


  var computeStyles$1 = {
    name: 'computeStyles',
    enabled: true,
    phase: 'beforeWrite',
    fn: computeStyles,
    data: {}
  }; // and applies them to the HTMLElements such as popper and arrow

  function applyStyles(_ref) {
    var state = _ref.state;
    Object.keys(state.elements).forEach(function (name) {
      var style = state.styles[name] || {};
      var attributes = state.attributes[name] || {};
      var element = state.elements[name]; // arrow is optional + virtual elements

      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      } // Flow doesn't support to extend this property, but it's the most
      // effective way to apply styles to an HTMLElement
      // $FlowFixMe[cannot-write]


      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function (name) {
        var value = attributes[name];

        if (value === false) {
          element.removeAttribute(name);
        } else {
          element.setAttribute(name, value === true ? '' : value);
        }
      });
    });
  }

  function effect$1(_ref2) {
    var state = _ref2.state;
    var initialStyles = {
      popper: {
        position: state.options.strategy,
        left: '0',
        top: '0',
        margin: '0'
      },
      arrow: {
        position: 'absolute'
      },
      reference: {}
    };
    Object.assign(state.elements.popper.style, initialStyles.popper);

    if (state.elements.arrow) {
      Object.assign(state.elements.arrow.style, initialStyles.arrow);
    }

    return function () {
      Object.keys(state.elements).forEach(function (name) {
        var element = state.elements[name];
        var attributes = state.attributes[name] || {};
        var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

        var style = styleProperties.reduce(function (style, property) {
          style[property] = '';
          return style;
        }, {}); // arrow is optional + virtual elements

        if (!isHTMLElement(element) || !getNodeName(element)) {
          return;
        }

        Object.assign(element.style, style);
        Object.keys(attributes).forEach(function (attribute) {
          element.removeAttribute(attribute);
        });
      });
    };
  } // eslint-disable-next-line import/no-unused-modules


  var applyStyles$1 = {
    name: 'applyStyles',
    enabled: true,
    phase: 'write',
    fn: applyStyles,
    effect: effect$1,
    requires: ['computeStyles']
  };

  function distanceAndSkiddingToXY(placement, rects, offset) {
    var basePlacement = getBasePlacement(placement);
    var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;

    var _ref = typeof offset === 'function' ? offset(Object.assign(Object.assign({}, rects), {}, {
      placement: placement
    })) : offset,
        skidding = _ref[0],
        distance = _ref[1];

    skidding = skidding || 0;
    distance = (distance || 0) * invertDistance;
    return [left, right].indexOf(basePlacement) >= 0 ? {
      x: distance,
      y: skidding
    } : {
      x: skidding,
      y: distance
    };
  }

  function offset(_ref2) {
    var state = _ref2.state,
        options = _ref2.options,
        name = _ref2.name;
    var _options$offset = options.offset,
        offset = _options$offset === void 0 ? [0, 0] : _options$offset;
    var data = placements.reduce(function (acc, placement) {
      acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
      return acc;
    }, {});
    var _data$state$placement = data[state.placement],
        x = _data$state$placement.x,
        y = _data$state$placement.y;

    if (state.modifiersData.popperOffsets != null) {
      state.modifiersData.popperOffsets.x += x;
      state.modifiersData.popperOffsets.y += y;
    }

    state.modifiersData[name] = data;
  } // eslint-disable-next-line import/no-unused-modules


  var offset$1 = {
    name: 'offset',
    enabled: true,
    phase: 'main',
    requires: ['popperOffsets'],
    fn: offset
  };
  var hash = {
    left: 'right',
    right: 'left',
    bottom: 'top',
    top: 'bottom'
  };

  function getOppositePlacement(placement) {
    return placement.replace(/left|right|bottom|top/g, function (matched) {
      return hash[matched];
    });
  }

  var hash$1 = {
    start: 'end',
    end: 'start'
  };

  function getOppositeVariationPlacement(placement) {
    return placement.replace(/start|end/g, function (matched) {
      return hash$1[matched];
    });
  }
  /*:: type OverflowsMap = { [ComputedPlacement]: number }; */

  /*;; type OverflowsMap = { [key in ComputedPlacement]: number }; */


  function computeAutoPlacement(state, options) {
    if (options === void 0) {
      options = {};
    }

    var _options = options,
        placement = _options.placement,
        boundary = _options.boundary,
        rootBoundary = _options.rootBoundary,
        padding = _options.padding,
        flipVariations = _options.flipVariations,
        _options$allowedAutoP = _options.allowedAutoPlacements,
        allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
    var variation = getVariation(placement);
    var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function (placement) {
      return getVariation(placement) === variation;
    }) : basePlacements;
    var allowedPlacements = placements$1.filter(function (placement) {
      return allowedAutoPlacements.indexOf(placement) >= 0;
    });

    if (allowedPlacements.length === 0) {
      allowedPlacements = placements$1;
    } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...


    var overflows = allowedPlacements.reduce(function (acc, placement) {
      acc[placement] = detectOverflow(state, {
        placement: placement,
        boundary: boundary,
        rootBoundary: rootBoundary,
        padding: padding
      })[getBasePlacement(placement)];
      return acc;
    }, {});
    return Object.keys(overflows).sort(function (a, b) {
      return overflows[a] - overflows[b];
    });
  }

  function getExpandedFallbackPlacements(placement) {
    if (getBasePlacement(placement) === auto) {
      return [];
    }

    var oppositePlacement = getOppositePlacement(placement);
    return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
  }

  function flip(_ref) {
    var state = _ref.state,
        options = _ref.options,
        name = _ref.name;

    if (state.modifiersData[name]._skip) {
      return;
    }

    var _options$mainAxis = options.mainAxis,
        checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
        _options$altAxis = options.altAxis,
        checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
        specifiedFallbackPlacements = options.fallbackPlacements,
        padding = options.padding,
        boundary = options.boundary,
        rootBoundary = options.rootBoundary,
        altBoundary = options.altBoundary,
        _options$flipVariatio = options.flipVariations,
        flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
        allowedAutoPlacements = options.allowedAutoPlacements;
    var preferredPlacement = state.options.placement;
    var basePlacement = getBasePlacement(preferredPlacement);
    var isBasePlacement = basePlacement === preferredPlacement;
    var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
    var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
      return acc.concat(getBasePlacement(placement) === auto ? computeAutoPlacement(state, {
        placement: placement,
        boundary: boundary,
        rootBoundary: rootBoundary,
        padding: padding,
        flipVariations: flipVariations,
        allowedAutoPlacements: allowedAutoPlacements
      }) : placement);
    }, []);
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var checksMap = new Map();
    var makeFallbackChecks = true;
    var firstFittingPlacement = placements[0];

    for (var i = 0; i < placements.length; i++) {
      var placement = placements[i];

      var _basePlacement = getBasePlacement(placement);

      var isStartVariation = getVariation(placement) === start;
      var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
      var len = isVertical ? 'width' : 'height';
      var overflow = detectOverflow(state, {
        placement: placement,
        boundary: boundary,
        rootBoundary: rootBoundary,
        altBoundary: altBoundary,
        padding: padding
      });
      var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;

      if (referenceRect[len] > popperRect[len]) {
        mainVariationSide = getOppositePlacement(mainVariationSide);
      }

      var altVariationSide = getOppositePlacement(mainVariationSide);
      var checks = [];

      if (checkMainAxis) {
        checks.push(overflow[_basePlacement] <= 0);
      }

      if (checkAltAxis) {
        checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
      }

      if (checks.every(function (check) {
        return check;
      })) {
        firstFittingPlacement = placement;
        makeFallbackChecks = false;
        break;
      }

      checksMap.set(placement, checks);
    }

    if (makeFallbackChecks) {
      // `2` may be desired in some cases – research later
      var numberOfChecks = flipVariations ? 3 : 1;

      var _loop = function _loop(_i) {
        var fittingPlacement = placements.find(function (placement) {
          var checks = checksMap.get(placement);

          if (checks) {
            return checks.slice(0, _i).every(function (check) {
              return check;
            });
          }
        });

        if (fittingPlacement) {
          firstFittingPlacement = fittingPlacement;
          return "break";
        }
      };

      for (var _i = numberOfChecks; _i > 0; _i--) {
        var _ret = _loop(_i);

        if (_ret === "break") break;
      }
    }

    if (state.placement !== firstFittingPlacement) {
      state.modifiersData[name]._skip = true;
      state.placement = firstFittingPlacement;
      state.reset = true;
    }
  } // eslint-disable-next-line import/no-unused-modules


  var flip$1 = {
    name: 'flip',
    enabled: true,
    phase: 'main',
    fn: flip,
    requiresIfExists: ['offset'],
    data: {
      _skip: false
    }
  };

  function getAltAxis(axis) {
    return axis === 'x' ? 'y' : 'x';
  }

  function within(min, value, max) {
    return Math.max(min, Math.min(value, max));
  }

  function preventOverflow(_ref) {
    var state = _ref.state,
        options = _ref.options,
        name = _ref.name;
    var _options$mainAxis = options.mainAxis,
        checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
        _options$altAxis = options.altAxis,
        checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
        boundary = options.boundary,
        rootBoundary = options.rootBoundary,
        altBoundary = options.altBoundary,
        padding = options.padding,
        _options$tether = options.tether,
        tether = _options$tether === void 0 ? true : _options$tether,
        _options$tetherOffset = options.tetherOffset,
        tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
    var overflow = detectOverflow(state, {
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
      altBoundary: altBoundary
    });
    var basePlacement = getBasePlacement(state.placement);
    var variation = getVariation(state.placement);
    var isBasePlacement = !variation;
    var mainAxis = getMainAxisFromPlacement(basePlacement);
    var altAxis = getAltAxis(mainAxis);
    var popperOffsets = state.modifiersData.popperOffsets;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign(Object.assign({}, state.rects), {}, {
      placement: state.placement
    })) : tetherOffset;
    var data = {
      x: 0,
      y: 0
    };

    if (!popperOffsets) {
      return;
    }

    if (checkMainAxis) {
      var mainSide = mainAxis === 'y' ? top : left;
      var altSide = mainAxis === 'y' ? bottom : right;
      var len = mainAxis === 'y' ? 'height' : 'width';
      var offset = popperOffsets[mainAxis];
      var min = popperOffsets[mainAxis] + overflow[mainSide];
      var max = popperOffsets[mainAxis] - overflow[altSide];
      var additive = tether ? -popperRect[len] / 2 : 0;
      var minLen = variation === start ? referenceRect[len] : popperRect[len];
      var maxLen = variation === start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
      // outside the reference bounds

      var arrowElement = state.elements.arrow;
      var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
        width: 0,
        height: 0
      };
      var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : getFreshSideObject();
      var arrowPaddingMin = arrowPaddingObject[mainSide];
      var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
      // to include its full size in the calculation. If the reference is small
      // and near the edge of a boundary, the popper can overflow even if the
      // reference is not overflowing as well (e.g. virtual elements with no
      // width or height)

      var arrowLen = within(0, referenceRect[len], arrowRect[len]);
      var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - tetherOffsetValue : minLen - arrowLen - arrowPaddingMin - tetherOffsetValue;
      var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + tetherOffsetValue : maxLen + arrowLen + arrowPaddingMax + tetherOffsetValue;
      var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
      var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
      var offsetModifierValue = state.modifiersData.offset ? state.modifiersData.offset[state.placement][mainAxis] : 0;
      var tetherMin = popperOffsets[mainAxis] + minOffset - offsetModifierValue - clientOffset;
      var tetherMax = popperOffsets[mainAxis] + maxOffset - offsetModifierValue;
      var preventedOffset = within(tether ? Math.min(min, tetherMin) : min, offset, tether ? Math.max(max, tetherMax) : max);
      popperOffsets[mainAxis] = preventedOffset;
      data[mainAxis] = preventedOffset - offset;
    }

    if (checkAltAxis) {
      var _mainSide = mainAxis === 'x' ? top : left;

      var _altSide = mainAxis === 'x' ? bottom : right;

      var _offset = popperOffsets[altAxis];

      var _min = _offset + overflow[_mainSide];

      var _max = _offset - overflow[_altSide];

      var _preventedOffset = within(_min, _offset, _max);

      popperOffsets[altAxis] = _preventedOffset;
      data[altAxis] = _preventedOffset - _offset;
    }

    state.modifiersData[name] = data;
  } // eslint-disable-next-line import/no-unused-modules


  var preventOverflow$1 = {
    name: 'preventOverflow',
    enabled: true,
    phase: 'main',
    fn: preventOverflow,
    requiresIfExists: ['offset']
  };

  function arrow(_ref) {
    var _state$modifiersData$;

    var state = _ref.state,
        name = _ref.name;
    var arrowElement = state.elements.arrow;
    var popperOffsets = state.modifiersData.popperOffsets;
    var basePlacement = getBasePlacement(state.placement);
    var axis = getMainAxisFromPlacement(basePlacement);
    var isVertical = [left, right].indexOf(basePlacement) >= 0;
    var len = isVertical ? 'height' : 'width';

    if (!arrowElement || !popperOffsets) {
      return;
    }

    var paddingObject = state.modifiersData[name + "#persistent"].padding;
    var arrowRect = getLayoutRect(arrowElement);
    var minProp = axis === 'y' ? top : left;
    var maxProp = axis === 'y' ? bottom : right;
    var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
    var startDiff = popperOffsets[axis] - state.rects.reference[axis];
    var arrowOffsetParent = getOffsetParent(arrowElement);
    var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
    var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
    // outside of the popper bounds

    var min = paddingObject[minProp];
    var max = clientSize - arrowRect[len] - paddingObject[maxProp];
    var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
    var offset = within(min, center, max); // Prevents breaking syntax highlighting...

    var axisProp = axis;
    state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
  }

  function effect$2(_ref2) {
    var state = _ref2.state,
        options = _ref2.options,
        name = _ref2.name;
    var _options$element = options.element,
        arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element,
        _options$padding = options.padding,
        padding = _options$padding === void 0 ? 0 : _options$padding;

    if (arrowElement == null) {
      return;
    } // CSS selector


    if (typeof arrowElement === 'string') {
      arrowElement = state.elements.popper.querySelector(arrowElement);

      if (!arrowElement) {
        return;
      }
    }

    if (!contains(state.elements.popper, arrowElement)) {
      return;
    }

    state.elements.arrow = arrowElement;
    state.modifiersData[name + "#persistent"] = {
      padding: mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements))
    };
  } // eslint-disable-next-line import/no-unused-modules


  var arrow$1 = {
    name: 'arrow',
    enabled: true,
    phase: 'main',
    fn: arrow,
    effect: effect$2,
    requires: ['popperOffsets'],
    requiresIfExists: ['preventOverflow']
  };

  function getSideOffsets(overflow, rect, preventedOffsets) {
    if (preventedOffsets === void 0) {
      preventedOffsets = {
        x: 0,
        y: 0
      };
    }

    return {
      top: overflow.top - rect.height - preventedOffsets.y,
      right: overflow.right - rect.width + preventedOffsets.x,
      bottom: overflow.bottom - rect.height + preventedOffsets.y,
      left: overflow.left - rect.width - preventedOffsets.x
    };
  }

  function isAnySideFullyClipped(overflow) {
    return [top, right, bottom, left].some(function (side) {
      return overflow[side] >= 0;
    });
  }

  function hide(_ref) {
    var state = _ref.state,
        name = _ref.name;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var preventedOffsets = state.modifiersData.preventOverflow;
    var referenceOverflow = detectOverflow(state, {
      elementContext: 'reference'
    });
    var popperAltOverflow = detectOverflow(state, {
      altBoundary: true
    });
    var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
    var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
    var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
    var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
    state.modifiersData[name] = {
      referenceClippingOffsets: referenceClippingOffsets,
      popperEscapeOffsets: popperEscapeOffsets,
      isReferenceHidden: isReferenceHidden,
      hasPopperEscaped: hasPopperEscaped
    };
    state.attributes.popper = Object.assign(Object.assign({}, state.attributes.popper), {}, {
      'data-popper-reference-hidden': isReferenceHidden,
      'data-popper-escaped': hasPopperEscaped
    });
  } // eslint-disable-next-line import/no-unused-modules


  var hide$1 = {
    name: 'hide',
    enabled: true,
    phase: 'main',
    requiresIfExists: ['preventOverflow'],
    fn: hide
  };
  var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$1, preventOverflow$1, arrow$1, hide$1];
  var createPopper = /*#__PURE__*/popperGenerator({
    defaultModifiers: defaultModifiers
  }); // eslint-disable-next-line import/no-unused-modules

  /**
   * Creates a reference element for popper.
   * @param {Number[]} position
   * @prrivate
   */

  function generateReference() {
    var position = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [0, 0];
    return function () {
      return {
        width: 0,
        height: 0,
        top: position[1],
        right: position[0],
        bottom: position[1],
        left: position[0]
      };
    };
  }
  /**
      @class Tooltip
      @extends BaseClass
      @desc Creates HTML tooltips in the body of a webpage.
  */


  var Tooltip = /*#__PURE__*/function (_BaseClass) {
    "use strict";

    _inherits(Tooltip, _BaseClass);

    var _super = _createSuper(Tooltip);

    /**
        @memberof Tooltip
        @desc Invoked when creating a new class instance, and sets any default parameters.
        @private
    */
    function Tooltip() {
      var _this3;

      _classCallCheck2(this, Tooltip);

      _this3 = _super.call(this);
      _this3._arrow = accessor("arrow", "");
      _this3._arrowStyle = {
        "content": "",
        "background": "inherit",
        "border": "inherit",
        "border-width": "0 1px 1px 0",
        "height": "10px",
        "position": "absolute",
        "transform": "rotate(45deg)",
        "width": "10px",
        "z-index": "-1"
      };
      _this3._background = constant$1(defaults.light);
      _this3._body = accessor("body", "");
      _this3._bodyStyle = {
        "color": defaults.dark,
        "font-family": "'Roboto', 'Helvetica Neue', 'HelveticaNeue', 'Helvetica', 'Arial', sans-serif",
        "font-size": "12px",
        "font-weight": "400",
        "z-index": "1"
      };
      _this3._border = constant$1("1px solid rgba(0, 0, 0, 0.1)");
      _this3._borderRadius = constant$1("2px");
      _this3._className = "d3plus-tooltip";
      _this3._data = [];
      _this3._footer = accessor("footer", "");
      _this3._footerStyle = {
        "color": defaults.dark,
        "font-family": "'Roboto', 'Helvetica Neue', 'HelveticaNeue', 'Helvetica', 'Arial', sans-serif",
        "font-size": "12px",
        "font-weight": "400",
        "margin-top": "5px",
        "z-index": "1"
      };
      _this3._height = constant$1("auto");

      _this3._id = function (d, i) {
        return "".concat(i);
      };

      _this3._offset = constant$1(5);
      _this3._padding = constant$1("10px");
      _this3._pointerEvents = constant$1("auto");
      _this3._popperClasses = {};

      _this3._position = function (d) {
        return [d.x, d.y];
      };

      _this3._prefix = prefix();
      _this3._tableStyle = {
        "border-collapse": "collapse",
        "border-spacing": "0",
        "width": "100%"
      };
      _this3._tbody = [];
      _this3._tbodyStyle = {
        "color": defaults.dark,
        "font-family": "'Roboto', 'Helvetica Neue', 'HelveticaNeue', 'Helvetica', 'Arial', sans-serif",
        "font-size": "12px",
        "text-align": "center"
      };
      _this3._thead = [];
      _this3._theadStyle = {
        "color": defaults.dark,
        "font-family": "'Roboto', 'Helvetica Neue', 'HelveticaNeue', 'Helvetica', 'Arial', sans-serif",
        "font-size": "12px",
        "font-weight": "600",
        "text-align": "center"
      };
      _this3._title = accessor("title", "");
      _this3._titleStyle = {
        "color": defaults.dark,
        "font-family": "'Roboto', 'Helvetica Neue', 'HelveticaNeue', 'Helvetica', 'Arial', sans-serif",
        "font-size": "16px",
        "font-weight": "600",
        "margin-bottom": "5px"
      };
      _this3._trStyle = {
        "border-top": "1px solid rgba(0, 0, 0, 0.1)"
      };
      _this3._tdStyle = {};
      _this3._width = constant$1("auto");
      return _this3;
    }
    /**
        The inner return object and draw function that gets assigned the public methods.
        @private
    */


    _createClass2(Tooltip, [{
      key: "render",
      value: function render(callback) {
        var _this4 = this;

        var that = this;
        var tooltips = select("body").selectAll(".".concat(this._className)).data(this._data, this._id);
        var enter = tooltips.enter().append("div").attr("class", this._className);
        var update = tooltips.merge(enter);
        /**
            Creates DIV elements with a unique class and styles.
            @private
        */

        function divElement(cat) {
          enter.append("div").attr("class", "d3plus-tooltip-".concat(cat)).attr("id", function (d, i) {
            return "d3plus-tooltip-".concat(cat, "-").concat(d ? that._id(d, i) : "");
          });
          var div = update.select(".d3plus-tooltip-".concat(cat)).html(function (d, i) {
            return that["_".concat(cat)](d, i);
          }).style("display", function (d, i) {
            var val = that["_".concat(cat)](d, i);
            var visible = val !== false && val !== undefined && val !== null;
            return visible ? "block" : "none";
          });
          stylize(div, that["_".concat(cat, "Style")]);
        }
        /**
            Fetches table contents given functions or values.
            @private
        */


        function cellContent(d) {
          if (typeof d === "function") {
            var _datum = select(this.parentNode.parentNode).datum();

            return d(_datum, that._data.indexOf(_datum));
          } else return d;
        }
        /**
            Sets styles for both enter and update.
            @private
        */


        function boxStyles(box) {
          box.style("background", that._background).style("".concat(that._prefix, "border-radius"), that._borderRadius).style("pointer-events", that._pointerEvents).style("padding", that._padding).style("width", that._width).style("height", that._height).style("border", function (d, i) {
            var b = select(this).style("border");
            return b !== "0px none rgb(0, 0, 0)" ? b : that._border(d, i);
          });
        }

        divElement("title");
        divElement("body");
        var tableEnter = enter.append("table").attr("class", "d3plus-tooltip-table");
        var table = update.select(".d3plus-tooltip-table");
        stylize(table, this._tableStyle);
        tableEnter.append("thead").attr("class", "d3plus-tooltip-thead");
        var tableHead = update.select(".d3plus-tooltip-thead");
        stylize(tableHead, this._theadStyle);
        var theadTr = tableHead.selectAll("tr").data([0]);
        var theadTrEnter = theadTr.enter().append("tr");
        theadTr.exit().remove();
        var theadTrUpdate = theadTr.merge(theadTrEnter);
        stylize(theadTrUpdate, this._trStyle);
        var th = theadTrUpdate.selectAll("th").data(this._thead);
        th.enter().append("th").merge(th).html(cellContent);
        th.exit().remove();
        tableEnter.append("tbody").attr("class", "d3plus-tooltip-tbody");
        var tableBody = update.select(".d3plus-tooltip-tbody");
        stylize(tableBody, this._tbodyStyle);
        var tr = tableBody.selectAll("tr").data(this._tbody);
        var trEnter = tr.enter().append("tr");
        tr.exit().remove();
        var trUpdate = tr.merge(trEnter);
        stylize(trUpdate, this._trStyle);
        var td = trUpdate.selectAll("td").data(function (d) {
          return d;
        });
        td.enter().append("td").merge(td).html(cellContent);
        stylize(td, this._tdStyle);
        divElement("footer");
        divElement("arrow");
        enter.attr("id", function (d, i) {
          return "d3plus-tooltip-".concat(d ? _this4._id(d, i) : "");
        }).call(boxStyles).each(function (d, i) {
          var id = that._id(d, i);

          var tooltip = document.getElementById("d3plus-tooltip-".concat(id));
          var arrow = document.getElementById("d3plus-tooltip-arrow-".concat(id));
          var arrowHeight = arrow.offsetHeight;
          var arrowDistance = arrow.getBoundingClientRect().height / 2;
          arrow.style.bottom = "-".concat(arrowHeight / 2, "px");

          var position = that._position(d, i);

          var referenceObject = Array.isArray(position) ? {
            getBoundingClientRect: generateReference(position)
          } : position;
          _this4._popperClasses[id] = createPopper(referenceObject, tooltip, {
            placement: "top",
            placements: ["top", "bottom"],
            modifiers: [{
              name: "arrow",
              options: {
                element: arrow
              }
            }, {
              name: "offset",
              options: {
                offset: [0, that._offset(d, i) + arrowDistance]
              }
            }, {
              name: "preventOverflow",
              options: {
                boundary: "scrollParent",
                padding: 5
              }
            }, {
              name: "flip",
              options: {
                behavior: "flip",
                boundary: "viewport",
                padding: 5
              }
            }, {
              name: "update",
              enabled: true,
              phase: "afterWrite",
              fn: function fn(_ref5) {
                var state = _ref5.state;
                var arrowElement = state.elements.arrow;
                var arrowStyles = state.styles.arrow;
                var flipped = state.modifiersData.flip._skip;

                if (flipped) {
                  arrowElement.style.transform = "".concat(arrowStyles.transform, "rotate(225deg)");
                  arrowElement.style.top = "-".concat(arrowHeight / 2, "px");
                } else {
                  arrowElement.style.transform = "".concat(arrowStyles.transform, "rotate(45deg)");
                  arrowElement.style.bottom = "-".concat(arrowHeight / 2, "px");
                }
              }
            }],
            removeOnDestroy: true
          });
        });
        update.each(function (d, i) {
          var id = that._id(d, i);

          var position = that._position(d, i);

          var instance = _this4._popperClasses[id];

          if (instance) {
            instance.state.elements.reference.getBoundingClientRect = Array.isArray(position) ? generateReference(position) : position;
            instance.update();
          }
        }).call(boxStyles);
        tooltips.exit().each(function (d, i) {
          var id = that._id(d, i);

          var instance = _this4._popperClasses[id];

          if (instance) {
            instance.destroy();
            delete _this4._popperClasses[id];
          }
        }).remove();
        if (callback) setTimeout(callback, 100);
        return this;
      }
      /**
       @memberof Tooltip
       @desc Sets the inner HTML content of the arrow element, which by default is empty.
       @param {Function|String} [*value*]
       @example <caption>default accessor</caption>
       function value(d) {
      return d.arrow || "";
      }
       */

    }, {
      key: "arrow",
      value: function arrow(_) {
        return arguments.length ? (this._arrow = typeof _ === "function" ? _ : constant$1(_), this) : this._arrow;
      }
      /**
       @memberof Tooltip
       @desc If *value* is specified, sets the arrow styles to the specified values and returns this generator. If *value* is not specified, returns the current arrow styles.
       @param {Object} [*value*]
       @example <caption>default styles</caption>
       {
         "content": "",
         "border-width": "10px",
         "border-style": "solid",
         "border-color": "rgba(255, 255, 255, 0.75) transparent transparent transparent",
         "position": "absolute"
       }
       */

    }, {
      key: "arrowStyle",
      value: function arrowStyle(_) {
        return arguments.length ? (this._arrowStyle = Object.assign(this._arrowStyle, _), this) : this._arrowStyle;
      }
      /**
          @memberof Tooltip
          @desc If *value* is specified, sets the background accessor to the specified function or string and returns this generator. If *value* is not specified, returns the current background accessor.
          @param {Function|String} [*value* = "#f7f7f7"]
      */

    }, {
      key: "background",
      value: function background(_) {
        return arguments.length ? (this._background = typeof _ === "function" ? _ : constant$1(_), this) : this._background;
      }
      /**
          @memberof Tooltip
          @desc If *value* is specified, sets the body accessor to the specified function or string and returns this generator. If *value* is not specified, returns the current body accessor.
          @param {Function|String} [*value*]
          @example <caption>default accessor</caption>
      function value(d) {
      return d.body || "";
      }
      */

    }, {
      key: "body",
      value: function body(_) {
        return arguments.length ? (this._body = typeof _ === "function" ? _ : constant$1(_), this) : this._body;
      }
      /**
          @memberof Tooltip
          @desc If *value* is specified, sets the body styles to the specified values and returns this generator. If *value* is not specified, returns the current body styles.
          @param {Object} [*value*]
          @example <caption>default styles</caption>
      {
      "font-family": "'Roboto', 'Helvetica Neue', 'HelveticaNeue', 'Helvetica', 'Arial', sans-serif",
      "font-size": "12px",
      "font-weight": "400"
      }
      */

    }, {
      key: "bodyStyle",
      value: function bodyStyle(_) {
        return arguments.length ? (this._bodyStyle = Object.assign(this._bodyStyle, _), this) : this._bodyStyle;
      }
      /**
          @memberof Tooltip
          @desc If *value* is specified, sets the border accessor to the specified function or string and returns this generator. If *value* is not specified, returns the current border accessor.
          @param {Function|String} [*value* = "1px solid rgba(0, 0, 0, 0.1)"]
      */

    }, {
      key: "border",
      value: function border(_) {
        return arguments.length ? (this._border = typeof _ === "function" ? _ : constant$1(_), this) : this._border;
      }
      /**
          @memberof Tooltip
          @desc If *value* is specified, sets the border-radius accessor to the specified function or string and returns this generator. If *value* is not specified, returns the current border-radius accessor.
          @param {Function|String} [*value* = "2px"]
      */

    }, {
      key: "borderRadius",
      value: function borderRadius(_) {
        return arguments.length ? (this._borderRadius = typeof _ === "function" ? _ : constant$1(_), this) : this._borderRadius;
      }
      /**
          @memberof Tooltip
          @desc If *value* is specified, sets the class name to the specified string and returns this generator. If *value* is not specified, returns the current class name.
          @param {String} [*value* = "d3plus-tooltip"]
      */

    }, {
      key: "className",
      value: function className(_) {
        return arguments.length ? (this._className = _, this) : this._className;
      }
      /**
          @memberof Tooltip
          @desc If *data* is specified, sets the data array to the specified array and returns this generator. If *data* is not specified, returns the current data array.
          @param {Array} [*data* = []]
      */

    }, {
      key: "data",
      value: function data(_) {
        return arguments.length ? (this._data = _, this) : this._data;
      }
      /**
          @memberof Tooltip
          @desc If *value* is specified, sets the footer accessor to the specified function or string and returns this generator. If *value* is not specified, returns the current footer accessor.
          @param {Function|String} [*value*]
          @example <caption>default accessor</caption>
      function value(d) {
      return d.footer || "";
      }
      */

    }, {
      key: "footer",
      value: function footer(_) {
        return arguments.length ? (this._footer = typeof _ === "function" ? _ : constant$1(_), this) : this._footer;
      }
      /**
          @memberof Tooltip
          @desc If *value* is specified, sets the footer styles to the specified values and returns this generator. If *value* is not specified, returns the current footer styles.
          @param {Object} [*value*]
          @example <caption>default styles</caption>
      {
      "font-family": "'Roboto', 'Helvetica Neue', 'HelveticaNeue', 'Helvetica', 'Arial', sans-serif",
      "font-size": "12px",
      "font-weight": "400"
      }
      */

    }, {
      key: "footerStyle",
      value: function footerStyle(_) {
        return arguments.length ? (this._footerStyle = Object.assign(this._footerStyle, _), this) : this._footerStyle;
      }
      /**
          @memberof Tooltip
          @desc If *value* is specified, sets the height accessor to the specified function or string and returns this generator. If *value* is not specified, returns the current height accessor.
          @param {Function|String} [*value* = "auto"]
      */

    }, {
      key: "height",
      value: function height(_) {
        return arguments.length ? (this._height = typeof _ === "function" ? _ : constant$1(_), this) : this._height;
      }
      /**
          @memberof Tooltip
          @desc If *value* is specified, sets the id accessor to the specified function or string and returns this generator. If *value* is not specified, returns the current id accessor.
          @param {Function|String} [*value*]
          @example <caption>default accessor</caption>
      function value(d, i) {
      return d.id || "" + i;
      }
      */

    }, {
      key: "id",
      value: function id(_) {
        return arguments.length ? (this._id = typeof _ === "function" ? _ : constant$1(_), this) : this._id;
      }
      /**
          @memberof Tooltip
          @desc If *value* is specified, sets the offset accessor to the specified function or number and returns this generator. If *value* is not specified, returns the current offset accessor.
          @param {Function|Number} [*value* = 10]
      */

    }, {
      key: "offset",
      value: function offset(_) {
        return arguments.length ? (this._offset = typeof _ === "function" ? _ : constant$1(_), this) : this._offset;
      }
      /**
          @memberof Tooltip
          @desc If *value* is specified, sets the padding accessor to the specified function or string and returns this generator. If *value* is not specified, returns the current padding accessor.
          @param {Function|String} [*value* = "5px"]
      */

    }, {
      key: "padding",
      value: function padding(_) {
        return arguments.length ? (this._padding = typeof _ === "function" ? _ : constant$1(_), this) : this._padding;
      }
      /**
          @memberof Tooltip
          @desc If *value* is specified, sets the pointer-events accessor to the specified function or string and returns this generator. If *value* is not specified, returns the current pointer-events accessor.
          @param {Function|String} [*value* = "auto"]
      */

    }, {
      key: "pointerEvents",
      value: function pointerEvents(_) {
        return arguments.length ? (this._pointerEvents = typeof _ === "function" ? _ : constant$1(_), this) : this._pointerEvents;
      }
      /**
          @memberof Tooltip
          @desc If *value* is specified, sets the position accessor to the specified function or array and returns this generator. If *value* is not specified, returns the current position accessor. If *value* is an HTMLElement, anchors the Tooltip to that HTMLElement. If *value* is a selection string, anchors the Tooltip to the HTMLElement selected by that string. Otherwise, coordinate points must be in reference to the client viewport, not the overall page.
          @param {Function|Array|HTMLElement|String} [*value*]
          @example <caption>default accessor</caption>
       function value(d) {
        return [d.x, d.y];
      }
       */

    }, {
      key: "position",
      value: function position(_) {
        return arguments.length ? (this._position = typeof _ === "string" ? constant$1(select(_).node() || [0, 0]) : typeof _ === "function" ? _ : constant$1(_), this) : this._position;
      }
      /**
          @memberof Tooltip
          @desc If *value* is specified, sets the table styles to the specified values and returns this generator. If *value* is not specified, returns the current table styles.
          @param {Object} [*value*]
          @example <caption>default styles</caption>
      {
      "border-collapse": "collapse",
      "border-spacing": "0",
      "width": "100%"
      }
      */

    }, {
      key: "tableStyle",
      value: function tableStyle(_) {
        return arguments.length ? (this._tableStyle = Object.assign(this._tableStyle, _), this) : this._tableStyle;
      }
      /**
          @memberof Tooltip
          @desc If *value* is specified, sets the contents of the table body to the specified array of functions or strings and returns this generator. If *value* is not specified, returns the current table body data.
          @param {Array} [*value* = []]
      */

    }, {
      key: "tbody",
      value: function tbody(_) {
        return arguments.length ? (this._tbody = _, this) : this._tbody;
      }
      /**
          @memberof Tooltip
          @desc If *value* is specified, sets the table body styles to the specified values and returns this generator. If *value* is not specified, returns the current table body styles.
          @param {Object} [*value*]
          @example <caption>default styles</caption>
      {
      "font-family": "'Roboto', 'Helvetica Neue', 'HelveticaNeue', 'Helvetica', 'Arial', sans-serif",
      "font-size": "12px",
      "font-weight": "600",
      "text-align": "center"
      }
      */

    }, {
      key: "tbodyStyle",
      value: function tbodyStyle(_) {
        return arguments.length ? (this._tbodyStyle = Object.assign(this._tbodyStyle, _), this) : this._tbodyStyle;
      }
      /**
          @memberof Tooltip
          @desc If *value* is specified, sets the contents of the table head to the specified array of functions or strings and returns this generator. If *value* is not specified, returns the current table head data.
          @param {Array} [*value* = []]
      */

    }, {
      key: "thead",
      value: function thead(_) {
        return arguments.length ? (this._thead = _, this) : this._thead;
      }
      /**
          @memberof Tooltip
          @desc If *value* is specified, sets the table head styles to the specified values and returns this generator. If *value* is not specified, returns the current table head styles.
          @param {Object} [*value*]
          @example <caption>default styles</caption>
      {
      "font-family": "'Roboto', 'Helvetica Neue', 'HelveticaNeue', 'Helvetica', 'Arial', sans-serif",
      "font-size": "12px",
      "font-weight": "600",
      "text-align": "center"
      }
      */

    }, {
      key: "theadStyle",
      value: function theadStyle(_) {
        return arguments.length ? (this._theadStyle = Object.assign(this._theadStyle, _), this) : this._theadStyle;
      }
      /**
          @memberof Tooltip
          @desc If *value* is specified, sets the title accessor to the specified function or string and returns this generator. If *value* is not specified, returns the current title accessor.
          @param {Function|String} [*value*]
          @example <caption>default accessor</caption>
      function value(d) {
      return d.title || "";
      }
      */

    }, {
      key: "title",
      value: function title(_) {
        return arguments.length ? (this._title = typeof _ === "function" ? _ : constant$1(_), this) : this._title;
      }
      /**
          @memberof Tooltip
          @desc If *value* is specified, sets the title styles to the specified values and returns this generator. If *value* is not specified, returns the current title styles.
          @param {Object} [*value*]
          @example <caption>default styles</caption>
      {
      "font-family": "'Roboto', 'Helvetica Neue', 'HelveticaNeue', 'Helvetica', 'Arial', sans-serif",
      "font-size": "14px",
      "font-weight": "600",
      "padding-bottom": "5px"
      }
      */

    }, {
      key: "titleStyle",
      value: function titleStyle(_) {
        return arguments.length ? (this._titleStyle = Object.assign(this._titleStyle, _), this) : this._titleStyle;
      }
      /**
          @memberof Tooltip
          @desc An object with CSS keys and values to be applied to all <tr> elements inside of each <tbody>.
          @param {Object} [*value*]
          @example <caption>default styles</caption>
      {
        "border-top": "1px solid rgba(0, 0, 0, 0.1)"
      }
       */

    }, {
      key: "trStyle",
      value: function trStyle(_) {
        return arguments.length ? (this._trStyle = Object.assign(this._trStyle, _), this) : this._trStyle;
      }
      /**
          @memberof Tooltip
          @desc An object with CSS keys and values to be applied to all <td> elements inside of each <tr>.
          @param {Object} [*value*]
       */

    }, {
      key: "tdStyle",
      value: function tdStyle(_) {
        return arguments.length ? (this._tdStyle = Object.assign(this._tdStyle, _), this) : this._tdStyle;
      }
      /**
          @memberof Tooltip
          @desc If *value* is specified, sets the width accessor to the specified function or string and returns this generator. If *value* is not specified, returns the current width accessor.
          @param {Function|String} [*value* = "auto"]
      */

    }, {
      key: "width",
      value: function width(_) {
        return arguments.length ? (this._width = typeof _ === "function" ? _ : constant$1(_), this) : this._width;
      }
    }]);

    return Tooltip;
  }(BaseClass);

  exports.Tooltip = Tooltip;
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
});
//# sourceMappingURL=d3plus-tooltip.full.js.map
