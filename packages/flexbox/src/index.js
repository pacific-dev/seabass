import React, { forwardRef } from "react";
import { View } from "react-native";
import { create, get, flattenStyle } from "./factory";
import { useTheme } from "@seabass/theme-provider";

const sx = (props, theme) => create(props.sx)(theme);
const base = (props, theme) => create(props.__style)(theme);
const variant = ({ variant, tx = "variants" }, theme) =>
  create(get(theme, tx + "." + variant, get(theme, variant)))(theme);

// TODO: Create styles also from props
export const Box = forwardRef((props, ref) => {
  const Component = props.as || View;
  const theme = useTheme();

  return (
    <Component
      ref={ref}
      {...props}
      style={flattenStyle([variant(props, theme), base(props, theme), sx(props, theme)])}
    />
  );
});

export const Flex = Box;
