import { latest as reference } from "@mapbox/mapbox-gl-style-spec";
import stringifyPretty from 'json-stringify-pretty-compact';

// Borrowed from Mapbox GL JS v1.13 in order to keep consistent formatting with
// other files formatted with this approach.

function sortKeysBy(obj, reference) {
  const result = {};
  for (const key in reference) {
    if (obj[key] !== undefined) {
      result[key] = obj[key];

      if (key === 'layout' || key === 'paint') {
        result[key] = {};
        for (const subKey of Object.keys(obj[key]).sort()) {
          result[key][subKey] = obj[key][subKey];
        }
      }
    }
  }
  for (const key in obj) {
    if (result[key] === undefined) {
      result[key] = obj[key];
    }
  }
  return result;
}

export default (style, spaces = 2) => {
  style = sortKeysBy(style, reference.$root);

  if (style.layers) {
    style.layers = style.layers.map((layer) => sortKeysBy(layer, reference.layer));
  }

  return stringifyPretty(style, { indent: spaces });
};
