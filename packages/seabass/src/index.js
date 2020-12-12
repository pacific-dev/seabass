import React, { forwardRef } from 'react';
import { Box, Flex } from '@seabass-ui/flexbox';
import {
  Text as RNText,
  Pressable as RNPressable,
  Image as RNImage,
} from 'react-native';

export { Box, Flex };

export const Text = forwardRef(({variant = "body", ...props}, ref) => (
  <Box ref={ref} tx="text" variant={variant} as={RNText} {...props} />
));

export const Heading = forwardRef((props, ref) => (
  <Box
    ref={ref}
    as={RNText}
    tx="text"
    variant="heading"
    {...props}
    __style={{
      fontSize: 4,
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
    }}
  />
));

export const Link = forwardRef((props, ref) => (
  <Box ref={ref} as={RNText} variant="link" {...props} />
));

const pressableChildrens = (children) => {
  if (typeof children === 'string') {
    return (
      <Text
        __style={{
          color: null,
          lineHeight: 'inherit',
          fontSize: 'inherit',
          textAlign: 'center',
        }}
      >
        {children}
      </Text>
    );
  } else {
    return children;
  }
};

export const Pressable = forwardRef(({ children, ...props }, ref) => (
  <Box
    ref={ref}
    as={RNPressable}
    tx="pressable"
    variant="primary"
    {...props}
    __style={{
      px: 3,
      py: 2,
      borderRadius: 4,
    }}
  >
    {pressableChildrens(children)}
  </Box>
));

export const Image = forwardRef((props, ref) => (
  <Box
    ref={ref}
    as={RNImage}
    {...props}
    __style={{
      maxWidth: '100%',
      height: 'auto',
    }}
  />
));

export const Card = forwardRef((props, ref) => (
  <Box ref={ref} variant="card" {...props} />
));
