import { ReactFragment } from 'react';
import { ThemeProvider } from 'styled-components';
import { rgba } from 'polished';
import { IColors, IMode, ITheme } from 'types/Theme';

import { breakpoints } from './breakpoints';

const colorsLight: IColors = {
  primary: '#f14e4ed3',
  primaryHover: '#c42a2ad2',
  secondary: '#252b3b',
  secondaryHover: '#1b202b',
  light: '#fafafa',
  dark: '#000'
};

const colorsDark: IColors = {
  primary: '#f14e4ed3',
  primaryHover: '#c42a2ad2',
  secondary: '#252b3b',
  secondaryHover: '#1b202b',
  light: '#fafafa',
  dark: '#000'
};

const modes: IMode = {
  light: {
    primary: colorsLight.primary,
    primaryHover: colorsLight.primaryHover,
    secondary: colorsLight.secondary,
    secondaryHover: colorsLight.secondaryHover,
    light: colorsLight.light,
    lightShade: rgba(colorsLight.light, 0.7),
    dark: colorsLight.dark,
    darkShade: rgba(colorsLight.dark, 0.7),
    bg: colorsLight.light,
    shadow: rgba(colorsLight.dark, 0.45),
    text: rgba(colorsLight.dark, 0.7)
  },
  dark: {
    primary: colorsDark.primary,
    primaryHover: colorsDark.primaryHover,
    secondary: colorsDark.secondary,
    secondaryHover: colorsDark.secondaryHover,
    light: colorsDark.light,
    lightShade: rgba(colorsDark.light, 0.7),
    dark: colorsDark.dark,
    darkShade: rgba(colorsDark.dark, 0.7),
    bg: colorsDark.light,
    shadow: rgba(colorsDark.dark, 0.45),
    text: rgba(colorsDark.light, 0.7)
  }
};

export const theme: ITheme = {
  mode: 'dark',
  colors: modes,
  space: [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 48, 52, 56, 60, 64],
  breakpoints: {
    sm: `@media (min-width:${breakpoints.sm}px)`,
    md: `@media (min-width:${breakpoints.md}px)`,
    lg: `@media (min-width:${breakpoints.lg}px)`,
    xl: `@media (min-width:${breakpoints.xl}px)`
  }
};

interface PropsWithChildren {
  children: ReactFragment;
}

const Provider = ({ children }: PropsWithChildren) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Provider;
