import { ms, rsWidth } from "./responsive";

export const letterSpacing = {
  xs: 0.25,
  sm: 0.5,
  md: 1,
  lg: 1.5,
  xl: 2,
};

export const padding = {
  xs: ms(8),
  sm: ms(12),
  md: ms(16),
  lg: ms(22),
  xl: ms(32),
}

export const margin = {
  xs: rsWidth(8),
  sm: rsWidth(12),
  md: rsWidth(16),
  lg: rsWidth(22),
  xl: rsWidth(32),
}