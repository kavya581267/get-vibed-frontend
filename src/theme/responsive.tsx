// responsive.ts
import { Dimensions, PixelRatio } from "react-native";

const { width, height } = Dimensions.get("window");

// 🔹 Figma baseline (iPhone 16 Pro → 390 x 844 dp)
export const guidelineBaseWidth = 390;
export const guidelineBaseHeight = 844;

// 🔹 Width & Height scaling
export const rsWidth = (size: number) => (width / guidelineBaseWidth) * size;
export const rsHeight = (size: number) => (height / guidelineBaseHeight) * size;

// 🔹 Font scaling (convert px → dp automatically)

export const rsFont = (size: number) => {
  return (width / guidelineBaseWidth) * size;
};

export const rsFontModerate = (size: number, factor = 0.5) => {
  return size + (rsFont(size) - size) * factor;
};

// 🔹 Moderate scaling (for padding, border radius)
export const rsModerate = (size: number, factor = 0.5) =>
  size + (rsWidth(size) - size) * factor;

export const rsBorder = (size: number, min: number = 0.5, max: number = 3) => {
  const scaled = (width / guidelineBaseWidth) * size;
  return Math.min(Math.max(scaled, min), max); // clamp for readability
};

// 🔹 Spacing system
export const Spacing = {
  xs: rsFontModerate(8),
  sm: rsFontModerate(12),
  md: rsFontModerate(16),
  lg: rsFontModerate(22),
  xl: rsFontModerate(32),
  xxl: rsFontModerate(40),
};

// 🔹 Typography system
export const FontSize = {
  h1: rsFontModerate(32),
  h2: rsFontModerate(24),
  h3: rsFontModerate(20),
  body: rsFontModerate(16),
  small: rsFontModerate(14),
  tiny: rsFontModerate(12),
};

export const Radius = {
  sm: rsModerate(4),
  md: rsModerate(8),
  lg: rsModerate(16),
  pill: rsModerate(250),
};

export const LineHeight = {
  h1: rsHeight(40),
  h2: rsHeight(32),
  body: rsHeight(24),
  small: rsHeight(20),
};

// 🔹 Aliases for compatibility
export const rf = rsFont;  // responsive font
//export const s = rsWidth;  // scale width
//export const vs = rsHeight; // vertical scale
export const ms = rsModerate; // moderate scale
