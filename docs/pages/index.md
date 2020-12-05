# Seabass

**Seabass** - React Native primitive UI components inspired by [Rebass](https://github.com/rebassjs/rebass).

Create themeable design systems in an easily configurable environment.

Define a theme:

```js
const theme = {
  colors: {
    primary: '#07c',
    secondary: '#30c',
  },
  fonts: {
    body: 'inherit',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  lineHeights: {
    body: 22,
    heading: 21,
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  radii: {
    default: 4,
    circle: 99999,
  },
  variants: {},
  pressable: {
    primary: {
      'fontSize': 2,
      'fontWeight': 'bold',
      'color': 'white',
      'bg': 'primary',
      'borderRadius': 'default',
      ':pressed': {
        opacity: 0.8,
      },
    },
  },
};
```

Compose components:

```jsx
import React from 'react';
import { Pressable, Heading, Box } from '@seabass-ui/seabass';
import { ThemeProvider } from '@seabass-ui/theme-provider';
import { Stack } from '@seabass-ui/layout';

export default (_props) => (
  <ThemeProvider theme={theme}>
    <Stack space={3} px={2}>
      <Box>
        <Heading>Hello</Heading>
      </Box>
      <Pressable
        sx={{ ':pressed': { backgroundColor: 'secondary', color: 'white' } }}
      >
        Press me!
      </Pressable>
    </Stack>
  </ThemeProvider>
);

```

See it in action in the [Example](https://github.com/pacific-dev/seabass/tree/main/example).