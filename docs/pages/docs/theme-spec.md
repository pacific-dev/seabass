# Theme Specification

Similary to [Rebass](https://rebassjs.org/), `Seabass` follows [System UI specification](https://github.com/system-ui/theme-specification) for storing design system tokens.

Each token type stores an `Object` and access to the values are done in styles
using key access. For simplicty scales can be defined as `Array` and access
values by index.

### Quick intro

Example `Object` declaration:

```js
colors: {
  blue: '#07c',
  green: '#0fa',
}
```

Example `Array` declaration:

```js
fontSizes: [12, 14, 16, 20, 24, 32];
```

Nested objects are also allowed, where access is done by chained get:

```js
colors: {
  blue: '#07c',
  blues: [
    '#004170',
    '#006fbe',
    '#2d8fd5',
    '#5aa7de',
  ]
}
```

### Variants

`TODO: Describe variant usage`

### Style references

| Theme Key        | Style Properties                                                                                                                                                                                                                     |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `space`          | `margin`, `marginTop`, `marginRight`, `marginBottom`, `marginLeft`, `marginVertical`, `marginHorizontal`, `padding`, `paddingTop`, `paddingRight`, `paddingBottom`, `paddingLeft`, `padding`, `paddingVertical`, `paddingHorizontal` |
| `fontSizes`      | `fontSize`                                                                                                                                                                                                                           |
| `colors`         | `color`, `backgroundColor`, `borderColor`                                                                                                                                                                                            |
| `fonts`          | `fontFamily`                                                                                                                                                                                                                         |
| `fontWeights`    | `fontWeight`                                                                                                                                                                                                                         |
| `lineHeights`    | `lineHeight`                                                                                                                                                                                                                         |
| `letterSpacings` | `letterSpacing`                                                                                                                                                                                                                      |
| `sizes`          | `width`, `height`, `minWidth`, `maxWidth`, `minHeight`, `maxHeight`                                                                                                                                                                  |
| `borders`        | `border`, `borderTop`, `borderRight`, `borderBottom`, `borderLeft`                                                                                                                                                                   |
| `borderWidths`   | `borderWidth`, `borderTopWidth`, `borderBottomWidth`, `borderLeftWidth`, `borderRightWidth`                                                                                                                                          |
| `borderStyles`   | `borderStyle`                                                                                                                                                                                                                        |
| `radii`          | `borderRadius`, `borderTopRightRadius`, `borderTopLeftRadius`,`borderBottomRightRadius`,`borderBottomLeftRadius`,`borderTopStartRadius`,`borderTopEndRadius`                                                                         |
| `zIndices`       | `zIndex`                                                                                                                                                                                                                             |

To learn more about motivation and some best practices please refer to [System UI Theme Specification](https://github.com/system-ui/theme-specification).
