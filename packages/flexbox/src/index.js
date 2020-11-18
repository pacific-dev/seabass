import React, { forwardRef } from "react";
import { View } from "react-native";
import { create, get, flattenStyle } from "./factory";

const sx = (props) => create(props.sx)(props.theme);
const base = (props) => create(props.__style)(props.theme);
const variant = ({ theme, variant, tx = "variants" }) =>
  create(get(theme, tx + "." + variant, get(theme, variant)))(theme);

export const Box = forwardRef((props, ref) => {
  const Component = props.as || View;
  return (
    <Component
      ref={ref}
      {...props}
      style={flattenStyle([variant(props), base(props), sx(props)])}
    />
  );
});

export const Flex = Box;
