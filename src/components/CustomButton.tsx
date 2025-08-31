import React from "react";
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from "react-native";
import { theme } from "../theme/theme"; // your color + font system
import { typography } from "../theme/typography";
import { FontSize, Radius, rsHeight, rsWidth } from "../theme/responsive";

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
  disabled?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  style,
  textStyle,
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        disabled && styles.disabledButton,
        style, 
      ]}
      activeOpacity={0.8}
      onPress={!disabled ? onPress : undefined}
    >
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: rsWidth(356), 
    height: rsHeight(44), 
    backgroundColor: theme.colors.primary,
    borderRadius:Radius.pill, 
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: FontSize.small,
    fontWeight: typography.button.fontWeight,
    color: theme.colors.secondary,
  },
  disabledButton: {
    backgroundColor: theme.colors.border,
    opacity: 0.6,
  },
});

export default CustomButton;
