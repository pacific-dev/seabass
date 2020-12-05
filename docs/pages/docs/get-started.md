# Get Started

Install the main package.

```bash
$ yarn add @seabass-ui/seabass
```

# Theme Provider

Out of the box the **Seabass** components can be styled without a theme.
You can create a theme and custom variant styles to components using a `ThemeProvider`.
To install default theme and `ThemeProvider` install following packages:

```bash
$ yarn add @seabass-ui/provider @seabass-ui/preset
```

Then wrap the application like in this example:

```jsx
import React from 'react';
import { ThemeProvider } from '@seabass-ui/theme-provider';
import theme from '@seabass-ui/preset';

export default (props) => (
  <ThemeProvider theme={theme}>
    {props.children}
  </ThemeProvider>
);

```