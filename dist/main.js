var $cMI0G$mapboxmapboxglstylespec = require("@mapbox/mapbox-gl-style-spec");
var $cMI0G$jsonstringifyprettycompact = require("json-stringify-pretty-compact");

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$export(module.exports, "format", () => $915ef6a9925cbcd7$export$2e2bcd8739ae039);


// Borrowed from Mapbox GL JS v1.13 in order to keep consistent formatting with
// other files formatted with this approach.
function $915ef6a9925cbcd7$var$sortKeysBy(obj, reference) {
    const result = {
    };
    for(const key in reference)if (obj[key] !== undefined) result[key] = obj[key];
    for(const key1 in obj)if (result[key1] === undefined) result[key1] = obj[key1];
    return result;
}
var $915ef6a9925cbcd7$export$2e2bcd8739ae039 = (style, spaces = 2)=>{
    style = $915ef6a9925cbcd7$var$sortKeysBy(style, $cMI0G$mapboxmapboxglstylespec.latest.$root);
    if (style.layers) style.layers = style.layers.map((layer)=>$915ef6a9925cbcd7$var$sortKeysBy(layer, $cMI0G$mapboxmapboxglstylespec.latest.layer)
    );
    return ($parcel$interopDefault($cMI0G$jsonstringifyprettycompact))(style, {
        indent: spaces
    });
};




//# sourceMappingURL=main.js.map
