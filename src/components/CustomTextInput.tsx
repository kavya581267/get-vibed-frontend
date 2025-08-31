import React, { useState } from "react";
import { TextInput, View, StyleSheet, TextInputProps, Text } from "react-native";
import { theme } from "../theme/theme";
import { scale } from "react-native-size-matters";
import { FontSize, Radius, rsBorder, rsFont, rsHeight, rsWidth, Spacing } from "../theme/responsive";

interface CustomTextInputProps extends TextInputProps {}

const CustomTextInput: React.FC<CustomTextInputProps> = ({ style, ...rest }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View>
      {rest.secureTextEntry && !rest.value && !isFocused && (
        <Text style={styles.dotPlaceholder}>
          • • • • • • • •   {/* add/remove dots as needed */}
        </Text>
      )}
      <TextInput
        {...rest}
        style={[
          styles.input,
          { borderColor: isFocused ? theme.colors.primary : theme.colors.border },
          style,
        ]}
        placeholderTextColor="grey"
       
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: rsWidth(356),
    height: rsHeight(49),
    borderWidth: rsBorder(0.64),
    borderRadius: Radius.pill,
    paddingHorizontal: Spacing.lg,
    color: theme.colors.input,
    fontSize: FontSize.small,
    backgroundColor: "transparent",
  },
  label: {
    color: theme.colors.input,
    fontSize: FontSize.small,
  },
   dotPlaceholder: {
    position: "absolute",
    left: Spacing.lg,
    top: rsHeight(10), 
    color: "#8E8E91",
    fontSize: FontSize.h2,
    letterSpacing: 8, 
    fontWeight: 'bold',
   
  },
});

export default CustomTextInput;

