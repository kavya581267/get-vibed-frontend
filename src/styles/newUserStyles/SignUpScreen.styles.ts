import { StyleSheet } from "react-native";
import { typography } from "../../theme/typography";
import { FontSize, Radius, rsBorder, rsHeight, rsWidth, Spacing } from "../../theme/responsive";
import { letterSpacing, padding } from "../../theme/spacing";
import { theme } from "../../theme/theme";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    title: {
        fontFamily: typography.heading1.fontFamily,
        fontSize: FontSize.h1,
        letterSpacing: letterSpacing.xs,
        textAlign: "center",
        marginBottom: Spacing.xl,
        color: theme.colors.secondary,
    },
    highlight: {
        color: theme.colors.primary,
    },

    input: {
        marginBottom: 16,
        backgroundColor: "transparent",
    },

    button: {
        borderRadius: Radius.pill,
        paddingVertical: 2,
        backgroundColor: theme.colors.primary,
        marginTop: Spacing.sm,
    },

    orText: {
        textAlign: "center",
        color: theme.colors.secondary,
        fontFamily: typography.or.fontFamily,
        fontSize: FontSize.tiny,
        fontWeight: typography.or.fontWeight,
        paddingTop: padding.xl,
        paddingBottom: padding.xl,
    },
    socialButton: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: rsBorder(0.64),
        borderColor: theme.colors.border,
        borderRadius: Radius.pill,
        paddingHorizontal: 16,
        width: rsWidth(356),
        height: rsHeight(44),
    },
    socialText: {
        color: theme.colors.secondary,
        fontSize: FontSize.small,
        fontWeight: typography.googleButton.fontWeight
    },

    paddingBottom: { paddingBottom: Spacing.md },
    paddingTop: { paddingTop: Spacing.md },
    marginBottom: { marginBottom: Spacing.sm },
    marginRight: {
        marginRight: Spacing.sm
    }
})