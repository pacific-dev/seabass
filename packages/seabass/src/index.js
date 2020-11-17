import React, { forwardRef } from "react";
import { Box, Flex } from "@seabass/flexbox";
import {
  Text as RNText,
  Pressable as RNPressable,
  Image as RNImage,
} from "react-native";

export { Box, Flex };

export const Text = forwardRef((props, ref) => (
  <Box ref={ref} tx="text" as={RNText} {...props} />
));

export const Heading = forwardRef((props, ref) => (
  <Box
    ref={ref}
    as={RNText}
    tx="text"
    variant="heading"
    {...props}
    __css={{
      fontSize: 4,
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
    }}
  />
));

export const Link = forwardRef((props, ref) => (
  <Box ref={ref} as={RNText} variant="link" {...props} />
));

export const Button = forwardRef((props, ref) => (
  <Box
    ref={ref}
    as={RNPressable}
    tx="buttons"
    variant="primary"
    {...props}
    __css={{
      appearance: "none",
      display: "inline-block",
      textAlign: "center",
      lineHeight: "inherit",
      textDecoration: "none",
      fontSize: "inherit",
      px: 3,
      py: 2,
      color: "white",
      bg: "primary",
      border: 0,
      borderRadius: 4,
    }}
  />
));

export const Image = forwardRef((props, ref) => (
  <Box
    ref={ref}
    as={RNImage}
    {...props}
    __css={{
      maxWidth: "100%",
      height: "auto",
    }}
  />
));

export const Card = forwardRef((props, ref) => (
  <Box ref={ref} variant="card" {...props} />
));
