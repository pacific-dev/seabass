# Theme Specification

Similary to [Rebass](https://rebassjs.org/), `Seabass` follows [System UI specification](https://github.com/system-ui/theme-specification) for storing design system tokens.

Each token type stores an `Object`, access to the values is done in the styles
using key access. For simplicity, scales can be defined as `Array` and access
values by index.

## Quick intro

Example tokens with `Object` declaration:

```js
colors: {
  blue: '#07c',
  green: '#0fa',
}
```

Example tokens with `Array` declaration:

```js
fontSizes: [12, 14, 16, 20, 24, 32];
```

Nested objects are also allowed. Access to these values uses a chained get:

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

## Variants

Variants are a way to define commonly used stylistic variation objects. Overall it is similar to the React Native StyleSheet. The variant object has access to theme tokens, is defined in the theme specification, and can be inherited or inherit from other variants.

Example declaration:

```js
{
  variants: {
    text: {
      fontSize: 1,
    },
    link: {
      variant: 'text',
      color: 'primary',
    }
  }
}
```

Then apply a variant to your component:

```jsx
import React, { forwardRef } from 'react';
import { Box } from '@seabass-ui/flexbox';
import { Text, TouchableOpacity } from 'react-native';

export default (_) => (
  <>
    <Box variant="text" as={Text}>
      Hello world!
    </Box>
    <Box variant="link" as={Text} onPress={() => {}}>
      Press me!
    </Box>
  </>
);
```

Variants could be also grouped by their semantics:

```js
{
  variants: {
    text: {
      fontSize: 1,
    },
    link: {
      variant: 'text',
      color: 'primary',
    }
  },
  pressable: {
    primary: {
      bg: 'primary',
      color: 'white',
    },
    secondary: {
      variant: 'pressable.primary',
      bg: 'secondary',
    }
  }
}
```

To apply variant from a specific group, `tx` prop should be used:

```jsx
import React, { forwardRef } from 'react';
import { Box } from '@seabass-ui/flexbox';
import { Text, TouchableOpacity } from 'react-native';

export default (_) => (
  <>
    <Box variant="text" as={Text}>
      Hello world!
    </Box>
    <Box tx="pressable" variant="primary" as={TouchableOpacity} onPress={() => {}}>
      Press me!
    </Box>
  </>
);
```

Varinats could be also chained, using dot notation:
In theme object:

```js
secondary: {
  variant: 'pressable.primary',
  bg: 'secondary',
}
```

In components:

```jsx
import React, { forwardRef } from 'react';
import { Box } from '@seabass-ui/flexbox';
import { Text } from 'react-native';

export default (_) => (
  <Box variant="text.primary" as={Text}>
    Hello world!
  </Box>
);
```

## Style value

The value in the style object could be a `String`, a`Number`, or a `function`.
The `String` and `Number` will look for the value in the design tokens
or fallback to the provided value. The `function` will be called with the
theme object as a parameter.

Examples:

```js
{
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  variants: {
    text: {
      fontSize: 1,
      fontWeight: 'bold',
      lineHeight: ({fontSizes, lineHeights}) => fontSizes[1] * lineHeights['body'],
    }
  }
}
```

## Style references

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

To learn more about the motivation and some best practices, please refer to [System UI Theme Specification](https://github.com/system-ui/theme-specification).
