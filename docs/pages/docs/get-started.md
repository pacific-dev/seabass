# Get Started

Install the main package.

```sh
$ yarn add @seabass-ui/seabass
```

# Theme Provider

Out of the box, the **Seabass** components can be styled without a theme.
You can create a theme and custom variant styles to components using a `ThemeProvider`.
To install the default theme and `ThemeProvider` install the following packages:

```sh
$ yarn add @seabass-ui/provider @seabass-ui/preset
```

Then wrap the application like in the following example:

```jsx
import React from 'react';
import { ThemeProvider } from '@seabass-ui/theme-provider';
import theme from '@seabass-ui/preset';

export default (props) => (
  <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
);
```