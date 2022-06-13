import {latest as $lN7Lq$latest} from "@mapbox/mapbox-gl-style-spec";
import $lN7Lq$jsonstringifyprettycompact from "json-stringify-pretty-compact";



// Borrowed from Mapbox GL JS v1.13 in order to keep consistent formatting with
// other files formatted with this approach.
function $c482f29359734304$var$sortKeysBy(obj, reference) {
    const result = {
    };
    for(const key in reference)if (obj[key] !== undefined) {
        result[key] = obj[key];
        if (key === 'layout' || key === 'paint') {
            result[key] = {
            };
            for (const subKey of Object.keys(obj[key]).sort())result[key][subKey] = obj[key][subKey];
        }
    }
    for(const key1 in obj)if (result[key1] === undefined) result[key1] = obj[key1];
    return result;
}
var $c482f29359734304$export$2e2bcd8739ae039 = (style, spaces = 2)=>{
    style = $c482f29359734304$var$sortKeysBy(style, $lN7Lq$latest.$root);
    if (style.layers) style.layers = style.layers.map((layer)=>$c482f29359734304$var$sortKeysBy(layer, $lN7Lq$latest.layer)
    );
    return $lN7Lq$jsonstringifyprettycompact(style, {
        indent: spaces
    });
};




export {$c482f29359734304$export$2e2bcd8739ae039 as format};
//# sourceMappingURL=module.js.map
