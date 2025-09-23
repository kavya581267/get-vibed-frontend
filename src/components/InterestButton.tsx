// components/InterestButton.tsx
import React from "react";
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from "react-native";
import { FontSize, Radius, rsBorder, rsModerate, Spacing } from "../theme/responsive";
import { theme } from "../theme/theme";

interface InterestButtonProps {
    label: string;
    selected?: boolean;
    onPress?: () => void;
    style?: ViewStyle | ViewStyle[];
    textStyle?: TextStyle | TextStyle[];
}

const InterestButton: React.FC<InterestButtonProps> = ({
    label,
    selected,
    onPress,
    style,
    textStyle,
}) => {
    return (
        <TouchableOpacity
            style={[styles.chip, selected && styles.chipSelected, style]}
            onPress={onPress}
            activeOpacity={0.8}
        >
            <Text
                style={[styles.chipText, selected && styles.chipTextSelected, textStyle]}
            >
                {label}
            </Text>
        </TouchableOpacity>
    );
};

export default InterestButton;

const styles = StyleSheet.create({
    chip: {
        paddingVertical: Spacing.sm,
        paddingHorizontal: Spacing.lg,
        borderRadius: Radius.pill,
        borderWidth: rsBorder(0.64),
        borderColor: theme.colors.border,
        margin:rsModerate(8),
        marginLeft:0
    },
    chipSelected: {
        backgroundColor: theme.colors.primary,
    },
    chipText: {
        fontSize: FontSize.small,
        color: theme.colors.secondary,
    },
    chipTextSelected: {
        color: theme.colors.secondary,
    },
});
