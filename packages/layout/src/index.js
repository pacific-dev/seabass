import React, { Children, forwardRef } from 'react';
import flattenChildren from 'react-keyed-flatten-children';
import { Box } from '@seabass-ui/flexbox';

export const Stack = forwardRef(
  ({ children, space, vertical = true, ...props }, ref) => {
    const stackItems = flattenChildren(children);
    const variation = vertical ? 'pt' : 'pl';
    const flexDirection = vertical ? 'column' : 'row';
    return (
      <Box ref={ref} __style={{ flexDirection }} {...props}>
        {Children.map(stackItems, (child, index) => {
          const padding = index > 0 ? space : 0;
          const sx = { [variation]: padding };
          return <Box sx={sx}>{child}</Box>;
        })}
      </Box>
    );
  }
);
