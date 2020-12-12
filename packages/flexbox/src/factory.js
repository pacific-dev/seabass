// Based on @styled-system/css

export const get = (obj, key, def, p, undef) => {
  key = key && key.split ? key.split('.') : [key];
  for (p = 0; p < key.length; p++) {
    obj = obj ? obj[key[p]] : undef;
  }
  return obj === undef ? def : obj;
};

export const deepMerge = (object, other) => {
  let target = object;

  for (const prop in other) {
    if (other.hasOwnProperty(prop)) {
      if (Object.prototype.toString.call(other[prop]) === '[object Object]') {
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
  bg: 'backgroundColor',
  m: 'margin',
  mt: 'marginTop',
  mr: 'marginRight',
  mb: 'marginBottom',
  ml: 'marginLeft',
  mx: 'marginX',
  my: 'marginY',
  ms: 'marginStart',
  me: 'marginEnd',
  p: 'padding',
  pt: 'paddingTop',
  pr: 'paddingRight',
  pb: 'paddingBottom',
  pl: 'paddingLeft',
  px: 'paddingX',
  py: 'paddingY',
  ps: 'paddingStart',
  pe: 'paddingEnd',
};

const scales = {
  color: 'colors',
  backgroundColor: 'colors',
  borderColor: 'colors',
  margin: 'space',
  marginTop: 'space',
  marginRight: 'space',
  marginBottom: 'space',
  marginLeft: 'space',
  marginX: 'space',
  marginY: 'space',
  marginStart: 'space',
  marginEnd: 'space',
  padding: 'space',
  paddingTop: 'space',
  paddingRight: 'space',
  paddingBottom: 'space',
  paddingLeft: 'space',
  paddingX: 'space',
  paddingY: 'space',
  paddingStart: 'space',
  paddingEnd: 'space',
  top: 'space',
  right: 'space',
  bottom: 'space',
  left: 'space',
  start: 'space',
  end: 'space',
  fontFamily: 'fonts',
  fontSize: 'fontSizes',
  fontWeight: 'fontWeights',
  lineHeight: 'lineHeights',
  letterSpacing: 'letterSpacings',
  border: 'borders',
  borderTop: 'borders',
  borderRight: 'borders',
  borderBottom: 'borders',
  borderLeft: 'borders',
  borderStart: 'borders',
  borderEnd: 'borders',
  borderWidth: 'borderWidths',
  borderStyle: 'borderStyles',
  borderRadius: 'radii',
  borderTopRightRadius: 'radii',
  borderTopLeftRadius: 'radii',
  borderBottomRightRadius: 'radii',
  borderBottomLeftRadius: 'radii',
  borderTopStartRadius: 'radii',
  borderTopEndRadius: 'radii',
  borderTopWidth: 'borderWidths',
  borderTopColor: 'colors',
  borderTopStyle: 'borderStyles',
  borderBottomWidth: 'borderWidths',
  borderBottomColor: 'colors',
  borderBottomStyle: 'borderStyles',
  borderLeftWidth: 'borderWidths',
  borderLeftColor: 'colors',
  borderLeftStyle: 'borderStyles',
  borderRightWidth: 'borderWidths',
  borderRightColor: 'colors',
  borderRightStyle: 'borderStyles',
  borderStartWidth: 'borderWidths',
  borderStartColor: 'colors',
  borderStartStyle: 'borderStyles',
  borderEndWidth: 'borderWidths',
  borderEndColor: 'colors',
  borderEndStyle: 'borderStyles',
  outlineColor: 'colors',
  //TODO: Use only one object for shadow
  shadowColor: 'shadowColor',
  shadowOpacity: 'shadowOpacity',
  shadowOffset: 'shadowOffset',
  shadowRadius: 'shadowRadius',
  elevation: 'elevation',
  textShadowOffset: 'textShadowOffset',
  textShadowRadius: 'textShadowRadius',
  textShadowColor: 'color',
  zIndex: 'zIndices',
  width: 'sizes',
  minWidth: 'sizes',
  maxWidth: 'sizes',
  height: 'sizes',
  minHeight: 'sizes',
  maxHeight: 'sizes',
  flexBasis: 'sizes',
  size: 'sizes',
};

const extraAllowedStyle = {
  fontStyle: true,
  fontVariant: true,
  textAlign: true,
  textAlignVertical: true,
  textDecorationLine: true,
  textDecorationStyle: true,
  textDecorationColor: true,
  textTransform: true,
  includeFontPadding: true,
  overflow: true,
  aspectRatio: true,
  alignContent: true,
  alignItems: true,
  alignSelf: true,
  justifyContent: true,
  flex: true,
  flexBasis: true,
  flexDirection: true,
  flexGrow: true,
  flexShrink: true,
  flexWrap: true,
  opacity: true,
  visible: true,
};

const positiveOrNegative = (scale, value) => {
  if (typeof value !== 'number' || value >= 0) {
    return get(scale, value, value);
  }
  const absolute = Math.abs(value);
  const n = get(scale, absolute, absolute);
  if (typeof n === 'string') return '-' + n;
  return n * -1;
};

const multiples = {
  marginX: ['marginHorizontal'],
  marginY: ['marginVertical'],
  paddingX: ['paddingHorizontal'],
  paddingY: ['paddingVertical'],
  size: ['width', 'height'],
};

const transforms = [
  'margin',
  'marginTop',
  'marginRight',
  'marginBottom',
  'marginLeft',
  'marginX',
  'marginY',
  'top',
  'bottom',
  'left',
  'right',
  'start',
  'end',
].reduce(
  (acc, curr) => ({
    ...acc,
    [curr]: positiveOrNegative,
  }),
  {}
);

const modifiers = {
  ':pressed': 'pressed',
};

export const selectStyles = (args) => {
  const result = {};

  for (const key in args) {
    if (
      aliases[key] !== undefined ||
      scales[key] !== undefined ||
      extraAllowedStyle[key] !== undefined
    ) {
      result[key] = args[key];
    }
  }

  return result;
};

// TODO: Implement Responsive based on screen sizes
export const responsive = (styles) => (_theme) => {
  return styles;
};

export const flattenStyle = (styles) => {
  const result = [];
  let __modifiers = {};

  for (let i = 0, stylesLength = styles.length; i < stylesLength; ++i) {
    const [style, selectors] = styles[i];
    result.push(style);
    if (Object.keys(selectors).length > 0) {
      __modifiers = deepMerge(__modifiers, selectors);
    }
  }

  if (Object.keys(__modifiers).length > 0) {
    return (props) => {
      const modified = [];

      for (const key in __modifiers) {
        modified.push(props[key] ? __modifiers[key] : null);
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
  const obj = typeof args === 'function' ? args(theme) : args;
  const styles = responsive(obj)(theme);

  for (const key in styles) {
    const x = styles[key];
    const val = typeof x === 'function' ? x(theme) : x;

    if (key === 'variant') {
      const variant = create(get(theme, val))(theme);
      result = { ...result, ...variant };
      continue;
    }

    if (val && typeof val === 'object') {
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
