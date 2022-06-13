var $cMI0G$mapboxmapboxglstylespec = require("@mapbox/mapbox-gl-style-spec");
var $cMI0G$jsonstringifyprettycompact = require("json-stringify-pretty-compact");

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
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
Object.defineProperty(module.exports, "format", {
    enumerable: true,
    get: function get() {
        return $349a00930b14e029$var$_format["default"];
    }
});
parcelRequire.register("ctNYT", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports["default"] = void 0;


var $915ef6a9925cbcd7$var$_jsonStringifyPrettyCompact = $915ef6a9925cbcd7$var$_interopRequireDefault($cMI0G$jsonstringifyprettycompact);
function $915ef6a9925cbcd7$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function $915ef6a9925cbcd7$var$_createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = $915ef6a9925cbcd7$var$_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
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
function $915ef6a9925cbcd7$var$_unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return $915ef6a9925cbcd7$var$_arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return $915ef6a9925cbcd7$var$_arrayLikeToArray(o, minLen);
}
function $915ef6a9925cbcd7$var$_arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
// Borrowed from Mapbox GL JS v1.13 in order to keep consistent formatting with
// other files formatted with this approach.
function $915ef6a9925cbcd7$var$sortKeysBy(obj, reference) {
    var result = {
    };
    for(var key in reference)if (obj[key] !== undefined) {
        result[key] = obj[key];
        if (key === 'layout' || key === 'paint') {
            result[key] = {
            };
            var _iterator = $915ef6a9925cbcd7$var$_createForOfIteratorHelper(Object.keys(obj[key]).sort()), _step;
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
var $915ef6a9925cbcd7$var$_default = function _default(style) {
    var spaces = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
    style = $915ef6a9925cbcd7$var$sortKeysBy(style, $cMI0G$mapboxmapboxglstylespec.latest.$root);
    if (style.layers) style.layers = style.layers.map(function(layer) {
        return $915ef6a9925cbcd7$var$sortKeysBy(layer, $cMI0G$mapboxmapboxglstylespec.latest.layer);
    });
    return (0, $915ef6a9925cbcd7$var$_jsonStringifyPrettyCompact["default"])(style, {
        indent: spaces
    });
};
module.exports["default"] = $915ef6a9925cbcd7$var$_default;

});


var $349a00930b14e029$var$_format = $349a00930b14e029$var$_interopRequireDefault((parcelRequire("ctNYT")));
function $349a00930b14e029$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}


//# sourceMappingURL=main.js.map
