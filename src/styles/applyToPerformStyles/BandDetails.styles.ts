import { StyleSheet } from "react-native";
import { FontSize, rsHeight, rsWidth, Spacing } from "../../theme/responsive";
import { theme } from "../../theme/theme";
import { typography } from "../../theme/typography";

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    body: {
        flex: 1,
        justifyContent: "space-between",
        padding: Spacing.md,
        paddingBottom: Spacing.xl
    },
    textHead: {
        color: theme.colors.secondary,
        fontSize: FontSize.body,
        fontWeight: "600",
        fontFamily: typography.family.inter,
        paddingBottom: Spacing.sm
    },

    text: {
        fontFamily: typography.family.inter,
        color: theme.colors.secondary,
        fontWeight: "400",
        fontSize: FontSize.small,
        paddingBottom: Spacing.sm,
        paddingTop: Spacing.sm
    },
    buttonRow: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    saveButton: {
        width: rsWidth(172),
        height: rsHeight(44),
        backgroundColor: "none",
        borderColor: theme.colors.secondary,
        borderWidth: 1
    },
    continueButton: {
        width: rsWidth(172),
        height: rsHeight(44),
    },
    buttonText: {
        fontSize: FontSize.small,
        fontWeight: "600",
        fontFamily: typography.family.inter,
        color: theme.colors.secondary
    },
    grid: {
        flexDirection: "row",
        flexWrap: "wrap",
    },

})