import React from "react";
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle, View } from "react-native";
import { theme } from "../theme/theme"; // your color + font system
import { typography } from "../theme/typography";
import { FontSize, Radius, rsHeight, rsWidth } from "../theme/responsive";

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
  disabled?: boolean;
  icon?: React.ReactNode,
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  style,
  textStyle,
  disabled = false,
  icon
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
      <View style={styles.content}>
        {icon && <View style={styles.icon}>{icon}</View>}
        <Text style={[styles.text, textStyle]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  content: {
    flexDirection: "row", 
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    marginRight: 8, 
  },
  button: {
    width: rsWidth(356),
    height: rsHeight(44),
    backgroundColor: theme.colors.primary,
    borderRadius: Radius.pill,
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
