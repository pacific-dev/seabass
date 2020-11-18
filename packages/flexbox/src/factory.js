// Based on @styled-system/css
import { StyleSheet } from "react-native";

export const get = (obj, key, def, p, undef) => {
  key = key && key.split ? key.split(".") : [key];
  for (p = 0; p < key.length; p++) {
    obj = obj ? obj[key[p]] : undef;
  }
  return obj === undef ? def : obj;
};

export const deepMerge = (object, other) => {
  let target = object;

  for (const prop in other) {
    if (other.hasOwnProperty(prop)) {
      if (Object.prototype.toString.call(other[prop]) === "[object Object]") {
        target[prop] = deepMerge(target[prop], other[prop]);
      } else {
        target[prop] = other[prop];
      }
    }
  }

  return target;
};

const defaultTheme = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
};

const aliases = {
  bg: "backgroundColor",
  m: "margin",
  mt: "marginTop",
  mr: "marginRight",
  mb: "marginBottom",
  ml: "marginLeft",
  mx: "marginX",
  my: "marginY",
  p: "padding",
  pt: "paddingTop",
  pr: "paddingRight",
  pb: "paddingBottom",
  pl: "paddingLeft",
  px: "paddingHorizontal",
  py: "paddingY",
};

const scales = {
  color: "colors",
  backgroundColor: "colors",
  borderColor: "colors",
  margin: "space",
  marginTop: "space",
  marginRight: "space",
  marginBottom: "space",
  marginLeft: "space",
  marginX: "space",
  marginY: "space",
  padding: "space",
  paddingTop: "space",
  paddingRight: "space",
  paddingBottom: "space",
  paddingLeft: "space",
  paddingHorizontal: "space",
  paddingY: "space",
  top: "space",
  right: "space",
  bottom: "space",
  left: "space",
  gridGap: "space",
  gridColumnGap: "space",
  gridRowGap: "space",
  gap: "space",
  columnGap: "space",
  rowGap: "space",
  fontFamily: "fonts",
  fontSize: "fontSizes",
  fontWeight: "fontWeights",
  lineHeight: "lineHeights",
  letterSpacing: "letterSpacings",
  border: "borders",
  borderTop: "borders",
  borderRight: "borders",
  borderBottom: "borders",
  borderLeft: "borders",
  borderWidth: "borderWidths",
  borderStyle: "borderStyles",
  borderRadius: "radii",
  borderTopRightRadius: "radii",
  borderTopLeftRadius: "radii",
  borderBottomRightRadius: "radii",
  borderBottomLeftRadius: "radii",
  borderTopWidth: "borderWidths",
  borderTopColor: "colors",
  borderTopStyle: "borderStyles",
  borderBottomWidth: "borderWidths",
  borderBottomColor: "colors",
  borderBottomStyle: "borderStyles",
  borderLeftWidth: "borderWidths",
  borderLeftColor: "colors",
  borderLeftStyle: "borderStyles",
  borderRightWidth: "borderWidths",
  borderRightColor: "colors",
  borderRightStyle: "borderStyles",
  outlineColor: "colors",
  boxShadow: "shadows",
  textShadow: "shadows",
  zIndex: "zIndices",
  width: "sizes",
  minWidth: "sizes",
  maxWidth: "sizes",
  height: "sizes",
  minHeight: "sizes",
  maxHeight: "sizes",
  flexBasis: "sizes",
  size: "sizes",
};

const positiveOrNegative = (scale, value) => {
  if (typeof value !== "number" || value >= 0) {
    return get(scale, value, value);
  }
  const absolute = Math.abs(value);
  const n = get(scale, absolute, absolute);
  if (typeof n === "string") return "-" + n;
  return n * -1;
};

const multiples = {
  marginX: ["marginHorizontal"],
  marginY: ["marginVertical"],
  paddingX: ["paddingHorizonatl"],
  paddingY: ["paddingVertical"],
  size: ["width", "height"],
};

const transforms = [
  "margin",
  "marginTop",
  "marginRight",
  "marginBottom",
  "marginLeft",
  "marginX",
  "marginY",
  "top",
  "bottom",
  "left",
  "right",
].reduce(
  (acc, curr) => ({
    ...acc,
    [curr]: positiveOrNegative,
  }),
  {}
);

const modifiers = {
  ":pressed": "pressed",
};

// TODO: Implement Responsive based on screen sizes
export const responsive = (styles) => (_theme) => {
  return styles;
};

export const flattenStyle = (styles) => {
  const result = [];
  let modifiers = {};

  for (let i = 0, stylesLength = styles.length; i < stylesLength; ++i) {
    const [style, selectors] = styles[i];
    result.push(style);
    if (Object.keys(selectors).length > 0) {
      modifiers = deepMerge(modifiers, selectors);
    }
  }

  if (Object.keys(modifiers).length > 0) {
    return (props) => {
      const modified = [];

      for (const key in modifiers) {
        modified.push(props[key] ? modifiers[key] : null);
      }
      return result.concat(modified);
    };
  }

  return result;
};

export const create = (args) => (props = {}) => {
  const theme = { ...defaultTheme, ...(props.theme || props) };
  let result = {};
  let selectors = {};
  const obj = typeof args === "function" ? args(theme) : args;
  const styles = responsive(obj)(theme);

  for (const key in styles) {
    const x = styles[key];
    const val = typeof x === "function" ? x(theme) : x;

    if (key === "variant") {
      const variant = create(get(theme, val))(theme);
      result = { ...result, ...variant };
      continue;
    }

    if (val && typeof val === "object") {
      selectors[modifiers[key]] = create(val)(theme);
      continue;
    }

    const prop = get(aliases, key, key);
    const scaleName = get(scales, prop);
    const scale = get(theme, scaleName, get(theme, prop, {}));
    const transform = get(transforms, prop, get);
    const value = transform(scale, val, val);

    if (multiples[prop]) {
      const dirs = multiples[prop];

      for (let i = 0; i < dirs.length; i++) {
        result[dirs[i]] = value;
      }
    } else {
      result[prop] = value;
    }
  }

  return [result, selectors];
};
