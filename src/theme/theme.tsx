import { spacing } from './spacing';
import { typography } from './typography';

export const theme = {
  colors: {
    // Primary brand colors
    primary: '#00FF88', // Bright green accent
    primaryDark: '#00CC6A',
    
    // Background colors
    background: '#0A0A0A', // Very dark background
    surface: '#2A2A2A', // For elevated surfaces
    
    // Text colors
    text: '#FFFFFF',
    textSecondary: '#B0B0B0',
    textMuted: '#808080',
    
    // Accent colors
    accent: '#FFD700', // Golden yellow for highlights
    success: '#00FF88',
    warning: '#FF6B35',
    error: '#FF4757',
    
    // UI colors
    border: '#333333',
    shadow: 'rgba(0, 0, 0, 0.5)',
    overlay: 'rgba(0, 0, 0, 0.7)',
    
    // Button colors
    buttonPrimary: '#00FF88',
    buttonSecondary: '#333333',
    buttonDisabled: '#1A1A1A',
  },
  spacing,
  typography,
};