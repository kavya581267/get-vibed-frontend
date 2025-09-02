import { StyleSheet } from "react-native";
import { FontSize, Radius, rsBorder, rsHeight, rsWidth, Spacing } from "../../theme/responsive";
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
    otpContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: Spacing.xxl
    },
    otpInput: {
        width: rsWidth(60),
        height: rsHeight(49),
        borderRadius: Radius.pill,
        borderColor: theme.colors.border,
        borderWidth: rsBorder(0.64),
        textAlign: "center",
        fontSize: FontSize.small,
        color: theme.colors.secondary,
    },
})