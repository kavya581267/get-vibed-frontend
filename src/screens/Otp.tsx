import { StyleSheet, Text, TextInput, View } from "react-native"
import { FontSize, Radius, rsBorder, rsHeight, rsWidth, Spacing } from "../theme/responsive"
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { typography } from "../theme/typography";
import { theme } from "../theme/theme";
import { useState } from "react";
import CustomButton from "../components/CustomButton";
import { AppKeyboardAvoidView } from "../components/AppKeyboardAvoidView";
import { ProgressBar } from "../components/ProgressBar";

export const Otp = () => {
    const insets = useSafeAreaInsets();
    const [otp, setOtp] = useState(["", "", "", ""]);

    const handleChange = (text: string, index: number) => {
        const newOtp = [...otp];
        newOtp[index] = text;
        setOtp(newOtp);
    };

    const isComplete = otp.every((digit) => digit !== "");
    return (

        <AppKeyboardAvoidView style={styles.container}>
            <View>
                <ProgressBar currentStep={2} totalSteps={5} />

                <View style={{ marginTop: rsHeight(95) - insets.top }}>
                    <Text style={styles.title}>What's your mobile <Text style={styles.secondryColor}>Number?</Text></Text>
                    <Text style={styles.subTitle}>We'll send you OTP for verification</Text>

                    <View style={styles.otpContainer}>
                        {otp.map((digit, index) => (
                            <TextInput
                                key={index}
                                style={styles.otpInput}
                                maxLength={1}
                                keyboardType="number-pad"
                                value={digit}
                                onChangeText={(text) => handleChange(text, index)}
                            />
                        ))}
                    </View>
                </View>
            </View>
            <CustomButton title="Continue" onPress={() => console.log("OTP", otp)} disabled={!isComplete} />
        </AppKeyboardAvoidView>

    )
}

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