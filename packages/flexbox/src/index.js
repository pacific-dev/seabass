import React, { forwardRef } from "react";
import { StyleSheet, View } from "react-native";
import { create, get } from "./factory";

const sx = (props) => create(props.sx)(props.theme);
const base = (props) => create(props.__style)(props.theme);
// TODO: Precompile variants and use get
const variant = ({ theme, variant, tx = "variants" }) =>
  create(get(theme, tx + "." + variant, get(theme, variant)))(theme);

export const Box = forwardRef((props, ref) => {
  const Component = props.as || View;
  const baseStyle = StyleSheet.compose(base(props), sx(props))
  return (
    <Component
      ref={ref}
      {...props}
      style={StyleSheet.compose(variant(props), baseStyle)}
    />
  );
});

export const Flex = Box;
