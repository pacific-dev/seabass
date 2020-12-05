import React, { forwardRef } from 'react';
import { View } from 'react-native';
import { create, get, selectStyles, flattenStyle } from './factory';
import { useTheme } from '@seabass-ui/theme-provider';

const properties = (props, { theme }) => create(selectStyles(props))(theme);
const sx = (props, { theme }) => create(props.sx)(theme);
const base = (props, { theme }) => create(props.__style)(theme);

/* eslint-disable-next-line no-shadow */
const variant = ({ variant, tx = 'variants' }, { theme }) =>
  create(get(theme, tx + '.' + variant, get(theme, variant)))(theme);

export const Box = forwardRef((props, ref) => {
  const Component = props.as || View;
  const theme = useTheme();

  return (
    <Component
      ref={ref}
      {...props}
      style={flattenStyle([
        properties(props, { theme }),
        variant(props, { theme }),
        base(props, { theme }),
        sx(props, { theme }),
      ])}
    />
  );
});

export const Flex = Box;
