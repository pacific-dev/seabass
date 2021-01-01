export const preset = {
  colors: {
    positive: ['rgba(68,208,88,1)', 'rgba(78,188,96,0.1)'],
    negative: ['rgba(255,45,85,1)', 'rgba(255,45,85,0.1))'],
    warning: ['rgba(255, 202, 15, 1)', 'rgba(255, 202, 15, 0.1)'],
    interactive: [
      'rgba(67,96,223,1)',
      'rgba(236,239,252,1)',
      'rgba(255,255,255,0.1)',
      'rgba(147,155,161,1)',
    ],
    background: 'rgba(255,255,255,1)',
    ui: ['rgba(238,242,245,1)', 'rgba(0,0,0,0.1)', 'rgba(0,0,0,0.86)'],
    text: [
      'rgba(0,0,0,1)',
      'rgba(147,155,161,1)',
      'rgba(255,255,255,0.7)',
      'rgba(67,96,223,1)',
      'rgba(255,255,255,1)',
    ],
    icon: [
      'rgba(0,0,0,1)',
      'rgba(147,155,161,1)',
      'rgba(255,255,255,0.4)',
      'rgba(67,96,223,1)',
      'rgba(255,255,255,1)',
    ],
    shadow: ['rgba(0,9,26,0.12)'],
    backdrop: 'rgba(0,0,0,0.4)',
    border: ['rgba(238,242,245,1)', 'rgba(67, 96, 223, 0.1)'],
    highlight: 'rgba(67,96,223,0.4)',
  },
  fonts: {
    body: 'inherit',
    heading: 'inherit',
    monospace: 'monospace',
  },
  fontSizes: [10, 13, 15, 17, 22, 28],
  lineHeights: [14, 18, 22, 24, 30, 38],
  space: [0, 4, 8, 12, 16, 24, 32, 48],
  sizes: {
    avatar: 48,
    interactive: 44,
  },
  radii: {
    small: 4,
    default: 8,
    medium: 16,
    circle: 99999,
  },
  shadows: {},
  text: {
    tiny: {
      color: 'text.0',
      fontSize: 0,
      lineHeight: 0,
    },
    small: {
      color: 'text.0',
      fontSize: 1,
      lineHeight: 1,
    },
    body: {
      color: 'text.0',
      fontSize: 2,
      lineHeight: 2,
    },
    heading: {
      color: 'text.0',
      fontSize: 3,
      lineHeight: 3,
    },
    large: {
      color: 'text.0',
      fontSize: 4,
      lineHeight: 4,
    },
    xlarge: {
      color: 'text.0',
      fontSize: 5,
      lineHeight: 5,
    },
  },
  variants: {
    avatar: {
      width: 'avatar',
      height: 'avatar',
      borderRadius: 'circle',
    },
    link: {
      color: 'interactive.0',
    },
  },
  forms: {
    input: {
      bg: 'ui.0',
      height: 'interactive',
    },
    textarea: {
      bg: 'ui.0',
      height: 88,
    },
  },
  pressable: {
    primary: {
      height: 'interactive',
      bg: 'interactive.0',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      px: 4,
      borderRadius: 'default',
      color: 'text.4',
      flex: 1,
    },
    secondary: {
      bg: 'interactive.1',
      color: 'text.3',
      px: 1,
    },
  },
};

export default preset;
