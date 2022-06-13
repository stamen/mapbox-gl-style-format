import {latest as $lN7Lq$latest} from "@mapbox/mapbox-gl-style-spec";
import * as $lN7Lq$jsonstringifyprettycompact from "json-stringify-pretty-compact";

var $parcel$global =
typeof globalThis !== 'undefined'
  ? globalThis
  : typeof self !== 'undefined'
  ? self
  : typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
  ? global
  : {};
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequiref3bd"];
if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequiref3bd"] = parcelRequire;
}
var $e9036bc7e4b4ba73$exports = {};
"use strict";
Object.defineProperty($e9036bc7e4b4ba73$exports, "__esModule", {
    value: true
});
Object.defineProperty($e9036bc7e4b4ba73$exports, "format", {
    enumerable: true,
    get: function get() {
        return $e9036bc7e4b4ba73$var$_format["default"];
    }
});
parcelRequire.register("gS1CC", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports["default"] = void 0;


var $c482f29359734304$var$_jsonStringifyPrettyCompact = $c482f29359734304$var$_interopRequireDefault($lN7Lq$jsonstringifyprettycompact);
function $c482f29359734304$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function $c482f29359734304$var$_createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = $c482f29359734304$var$_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it["return"] != null) it["return"]();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function $c482f29359734304$var$_unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return $c482f29359734304$var$_arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return $c482f29359734304$var$_arrayLikeToArray(o, minLen);
}
function $c482f29359734304$var$_arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
// Borrowed from Mapbox GL JS v1.13 in order to keep consistent formatting with
// other files formatted with this approach.
function $c482f29359734304$var$sortKeysBy(obj, reference) {
    var result = {
    };
    for(var key in reference)if (obj[key] !== undefined) {
        result[key] = obj[key];
        if (key === 'layout' || key === 'paint') {
            result[key] = {
            };
            var _iterator = $c482f29359734304$var$_createForOfIteratorHelper(Object.keys(obj[key]).sort()), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var subKey = _step.value;
                    result[key][subKey] = obj[key][subKey];
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
        }
    }
    for(var _key in obj)if (result[_key] === undefined) result[_key] = obj[_key];
    return result;
}
var $c482f29359734304$var$_default = function _default(style) {
    var spaces = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
    style = $c482f29359734304$var$sortKeysBy(style, $lN7Lq$latest.$root);
    if (style.layers) style.layers = style.layers.map(function(layer) {
        return $c482f29359734304$var$sortKeysBy(layer, $lN7Lq$latest.layer);
    });
    return (0, $c482f29359734304$var$_jsonStringifyPrettyCompact["default"])(style, {
        indent: spaces
    });
};
module.exports["default"] = $c482f29359734304$var$_default;

});


var $e9036bc7e4b4ba73$var$_format = $e9036bc7e4b4ba73$var$_interopRequireDefault((parcelRequire("gS1CC")));
function $e9036bc7e4b4ba73$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}


export {$e9036bc7e4b4ba73$exports as default};
//# sourceMappingURL=module.js.map
