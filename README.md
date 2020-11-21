# Seabass

React Native primitive UI components inspired by [Rebass](https://github.com/rebassjs/rebass).

### Getting Started

```jsx
import React from 'react'
import { Box, Heading, Button } from 'rebass'

export default props =>
  <Box>
    <Box py={2}>
      <Heading>Hello</Heading>
    </Box>
    <Pressable sx={{":pressed": {backgroundColor: "primary", color: "white"}}}>
        Hello World
    </Pressable>
  </Box>
```

### Motivation

Seabass provides a minimal amount of primitive components. It's a base for a design system or a component library.

Seabass is heavily inspired by [Rebass](https://github.com/rebassjs/rebass) and [Design System](http://design-system.com/).

### License

EPL-2.0, see [LICENSE.md](https://github.com/pacific-dev/seabass/blob/main/LICENSE) for details.