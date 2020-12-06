# Box component

`Box` is a primitive component for all layout needs. It could be styled
using the inline styling props, with the `sx` prop which accepts a
style object, or with a component `variant`.

Also `Flex` alias is available for API parity. 

## Special Properties

| Prop      | Description                  | Default    |
| --------- | ---------------------------- | ---------- |
| `as`      | The component to be rendered | `View`     |
| `variant` | Style variant to be applied  | N/A        |
| `tx`      | Variant group                | `variants` |

## Style Properties

Similarly to [Styled System](https://styled-system.com/) but adapted to React Native specifications.

### Space Props

| Prop                                  | Theme Key |
| ------------------------------------- | --------- |
| `margin`, `m`                         | `space`   |
| `marginTop`, `mt`                     | `space`   |
| `marginRight`, `mr`                   | `space`   |
| `marginBottom`, `mb`                  | `space`   |
| `marginLeft`, `ml`                    | `space`   |
| `marginX`, `mx`, `marginHorizontal`   | `space`   |
| `marginY`, `my`, `marginVertical`     | `space`   |
| `marginStart`, `ms`                   | `space`   |
| `marginEnd`, `me`                     | `space`   |
| `padding`, `p`                        | `space`   |
| `paddingTop`, `pt`                    | `space`   |
| `paddingRight`, `pr`                  | `space`   |
| `paddingBottom`, `pb`                 | `space`   |
| `paddingLeft`, `pl`                   | `space`   |
| `paddingX`, `px`, `paddingHorizontal` | `space`   |
| `paddingY`, `py`, `paddingVertical`   | `space`   |
| `paddingStart`, `ps`                  | `space`   |
| `paddingEnd`, `pe`                    | `space`   |
| `top`                                 | `space`   |
| `right`                               | `space`   |
| `bottom`                              | `space`   |
| `left`                                | `space`   |
| `start`                               | `space`   |
| `end`                                 | `space`   |

### Layout Props

| Prop        | Theme Key |
| ----------- | --------- |
| `width`     | `sizes`   |
| `height`    | `sizes`   |
| `minWidth`  | `sizes`   |
| `maxWidth`  | `sizes`   |
| `minHeight` | `sizes`   |
| `maxHeight` | `sizes`   |

### Typography Props

| Prop            | Theme Key        |
| --------------- | ---------------- |
| `fontFamily`    | `fonts`          |
| `fontSize`      | `fontSizes`      |
| `fontWeight`    | `fontWeights`    |
| `lineHeight`    | `lineHeights`    |
| `letterSpacing` | `letterSpacings` |
| `fontStyle`     | N/A              |
| `textAlign`     | N/A              |

### Color Props

| Prop                    | Theme Key |
| ----------------------- | --------- |
| `color`                 | `colors`  |
| `backgroundColor`, `bg` | `colors`  |
| `borderColor`           | `colors`  |
| `borderTopColor`        | `colors`  |
| `borderBottomColor`     | `colors`  |
| `borderLeftColor`       | `colors`  |
| `borderRightColor`      | `colors`  |
| `borderEndColor`        | `colors`  |
| `borderStartColor`      | `colors`  |
| `opacity`               | N/A       |

### Border Width Props

| Prop                | Theme Key      |
| ------------------- | -------------- |
| `borderWidth`       | `borderWidths` |
| `borderTopWidth`    | `borderWidths` |
| `borderBottomWidth` | `borderWidths` |
| `borderLeftWidth`   | `borderWidths` |
| `borderRightWidth`  | `borderWidths` |
| `borderStartWidth`  | `borderWidths` |
| `borderEndWidth`    | `borderWidths` |

### Flexbox Props

| Prop             | Theme Key |
| ---------------- | --------- |
| `alignItems`     | N/A       |
| `alignContent`   | N/A       |
| `justifyItems`   | N/A       |
| `justifyContent` | N/A       |
| `flexWrap`       | N/A       |
| `flexDirection`  | N/A       |
| `flex`           | N/A       |
| `flexGrow`       | N/A       |
| `flexShrink`     | N/A       |
| `flexBasis`      | N/A       |
| `justifySelf`    | N/A       |
| `alignSelf`      | N/A       |
