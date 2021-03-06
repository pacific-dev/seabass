// default theme preset

export const preset = {
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#07c',
    secondary: '#30c',
    muted: '#f6f6f9',
    gray: '#dddddf',
  },
  fonts: {
    body: 'inherit',
    heading: 'inherit',
    monospace: 'monospace',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 21,
    heading: 25,
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  sizes: {
    avatar: 48,
  },
  radii: {
    default: 4,
    circle: 99999,
  },
  shadows: {},
  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
    },
    display: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
      fontSize: 5,
    },
    caps: {
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
    },
  },
  variants: {
    avatar: {
      width: 'avatar',
      height: 'avatar',
      borderRadius: 'circle',
    },
    card: {
      p: 2,
      bg: 'background',
    },
    link: {
      color: 'primary',
    },
    nav: {
      'fontSize': 1,
      'fontWeight': 'bold',
      'p': 2,
      'color': 'inherit',
      ':pressed': {
        color: 'primary',
      },
    },
  },
  pressable: {
    primary: {
      'fontSize': 2,
      'fontWeight': 'bold',
      'color': 'background',
      'bg': 'primary',
      'borderRadius': 'default',
      ':pressed': {
        opacity: 0.8,
      },
    },
    outline: {
      variant: 'pressable.primary',
      color: 'primary',
      bg: 'transparent',
      border: 2,
      borderColor: 'primary',
      borderStyle: 'solid',
    },
    secondary: {
      variant: 'pressable.primary',
      color: 'background',
      bg: 'secondary',
    },
  },
};

export default preset;
