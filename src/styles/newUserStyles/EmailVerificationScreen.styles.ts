import { StyleSheet } from "react-native";
import { Spacing } from "../../theme/responsive";
import { typography } from "../../theme/typography";
import { theme } from "../../theme/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: Spacing.lg,
        justifyContent: "space-between",
        paddingBottom: 0
    },
    title: {
        fontFamily: typography.heading2.fontFamily,
        color: theme.colors.primary,
        fontSize: typography.heading2.fontSize,
        fontWeight: typography.heading2.fontWeight
    },
    secondryColor: {
        color: theme.colors.secondary
    },
    subTitle: {
        color: theme.colors.input,
        fontSize: typography.subTitle.fontSize,
        fontFamily: typography.subTitle.fontFamily,
        fontWeight: typography.subTitle.fontWeight,
        marginTop: Spacing.xs
    },
})