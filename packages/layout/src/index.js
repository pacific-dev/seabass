import React, { Children, forwardRef } from "react";
import flattenChildren from "react-keyed-flatten-children";
import { Box } from "@seabass/flexbox";

export const Stack = forwardRef(
  ({ children, space, vertical = true, ...props }, ref) => {
    const stackItems = flattenChildren(children);
    const variation = vertical ? "pt" : "pl";
    return (
      <Box
        ref={ref}
        __style={{ flexDirection: vertical ? "column" : "row" }}
        {...props}
      >
        {Children.map(stackItems, (child, index) => {
          const padding = index > 0 ? space : 0;
          const sx = { [variation]: padding };
          return <Box sx={sx}>{child}</Box>;
        })}
      </Box>
    );
  }
);
