import { Platform } from "react-native";
import { rf, rsFontModerate } from "./responsive";

/**
 * Typography System - Platform-specific font styles
 * 
 * iOS follows Human Interface Guidelines:
 * - Uses San Francisco font (System)
 * - Slightly larger font sizes for better readability
 * - Numeric font weights (700, 600, 500, 400, 300)
 * 
 * Android follows Material Design:
 * - Uses Roboto font
 * - Standard Material Design font sizes
 * - String font weights (bold, normal)
 * 
 * Usage Examples:
 * <Text style={typography.heading1}>Main Title</Text>
 * <Text style={typography.bodyText}>Regular content</Text>
 * <Text style={[typography.caption, {color: 'gray'}]}>Small text</Text>
 * 
 * Available Styles:
 * - heading1: Large page titles, hero text
 * - heading2: Section headers, card titles
 * - heading3: Subsection headers
 * - title: Component titles, modal headers
 * - bodyText: Main content, paragraphs
 * - bodySmall: Secondary content, descriptions
 * - button: Button labels, CTAs
 * - label: Form labels, input labels
 * - caption: Image captions, metadata
 * - small: Fine print, disclaimers, timestamps
 */
export const typography = {

  or: {
    fontSize: rf(12),
    fontWeight: "600",
    fontFamily: "inter",
  },
  // Large page titles, hero text
  heading1: {
    fontSize: rf(32),
    fontWeight: "400",
    fontFamily: "LondrinaSolid_400Regular",
  },
  // Section headers, card titles
  heading2: {
    fontSize: rsFontModerate(28),
    fontWeight: '400',
    fontFamily: "LondrinaSolid_400Regular",
  },
  // Subsection headers
  heading3: {
    fontSize: Platform.OS === 'ios' ? rf(20) : rf(18),
    fontWeight: '600',
    fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
  },
  // Component titles, modal headers
  title: {
    fontSize: Platform.OS === 'ios' ? rf(18) : rf(16),
    fontWeight: '500',
    fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
  },
  subTitle: {
    fontSize: rsFontModerate(14),
    fontWeight: '400',
    fontFamily: "Inter",
  },
  // Main content, paragraphs
  bodyText: {
    fontSize: Platform.OS === 'ios' ? rf(17) : rf(16),
    fontWeight: Platform.OS === 'ios' ? '400' : 'normal',
    fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
  },
  // Secondary content, descriptions
  bodySmall: {
    fontSize: Platform.OS === 'ios' ? rf(15) : rf(14),
    fontWeight: Platform.OS === 'ios' ? '400' : 'normal',
    fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
  },
  // Button labels, CTAs
  button: {
    fontSize: rf(14),
    fontWeight: '600',
    fontFamily: "inter",
  },

  googleButton: {
    fontSize: rf(14),
    fontWeight: '500',
    fontFamily: "inter",
  },

  // Form labels, input labels
  label: {
    fontSize: Platform.OS === 'ios' ? rf(15) : rf(14),
    fontWeight: '500',
    fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
  },
  // Image captions, metadata
  caption: {
    fontSize: Platform.OS === 'ios' ? rf(13) : rf(12),
    fontWeight: '300',
    fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
  },
  // Fine print, disclaimers, timestamps
  small: {
    fontSize: Platform.OS === 'ios' ? rf(11) : rf(10),
    fontWeight: '300',
    fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
  },
} as const;