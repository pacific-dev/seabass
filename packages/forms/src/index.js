import React, { forwardRef } from 'react';
import { Text as RNText, TextInput as RNInput } from 'react-native';
import { Box } from '@seabass/flexbox';

export const Label = forwardRef((props, ref) => (
  <Box
    ref={ref}
    as={RNText}
    tx="forms"
    variant="label"
    {...props}
    __style={{
      width: '100%',
    }}
  />
));

export const Input = forwardRef((props, ref) => (
  <Box
    ref={ref}
    as={RNInput}
    type="text"
    tx="forms"
    variant="input"
    {...props}
    __style={{
      width: '100%',
      p: 2,
      fontSize: 'inherit',
      lineHeight: 'inherit',
      border: '1px solid',
      borderRadius: 'default',
      color: 'inherit',
      bg: 'transparent',
    }}
  />
));

export const Textarea = forwardRef((props, ref) => (
  <Box
    ref={ref}
    as={RNInput}
    multiline={true}
    tx="forms"
    variant="textarea"
    {...props}
    __style={{
      width: '100%',
      p: 2,
      fontSize: 'inherit',
      lineHeight: 'inherit',
      border: '1px solid',
      borderRadius: 'default',
      color: 'inherit',
      bg: 'transparent',
    }}
  />
));
