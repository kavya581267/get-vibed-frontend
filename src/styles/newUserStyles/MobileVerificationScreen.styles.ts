import { Platform, StyleSheet } from "react-native";
import { FontSize, Radius, rsBorder, rsModerate, Spacing } from "../../theme/responsive";
import { typography } from "../../theme/typography";
import { theme } from "../../theme/theme";


export const styles = StyleSheet.create({
     container: {
            flex: 1,
            padding: Spacing.lg,
            justifyContent: "space-between",
            paddingBottom: 0,
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
        inputContainer: {
            flexDirection: "row",
            alignItems: "center",
            borderWidth: rsBorder(0.64),
            borderRadius: Radius.pill,
            borderColor: theme.colors.border,
            color: theme.colors.input,
            paddingVertical: Platform.OS === "ios" ? Spacing.xs : 0,
            paddingHorizontal: Spacing.lg,
            marginTop: Spacing.md,
        },
    
        countryContainer: {
            flexDirection: "row",
            alignItems: "center",
        },
        flagArrowContainer: {
            flexDirection: "row",
            marginRight: Spacing.xs,
        },
        flag: {
            fontSize: FontSize.h3,
            marginRight: rsModerate(5),
        },
        arrow: {
            fontSize: FontSize.small,
            color: theme.colors.secondary,
        },
        code: {
            fontSize: FontSize.small,
            color: theme.colors.secondary,
        },
        input: {
            flex: 1,
            fontSize: FontSize.small,
            color: theme.colors.secondary,
            paddingLeft: rsModerate(6),
        },
})