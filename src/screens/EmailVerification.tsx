import { StyleSheet, Text, View } from "react-native"
import { AppKeyboardAvoidView } from "../components/AppKeyboardAvoidView"
import { ProgressBar } from "../components/ProgressBar"
import { rsHeight, Spacing } from "../theme/responsive"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { typography } from "../theme/typography"
import { theme } from "../theme/theme"
import CustomTextInput from "../components/CustomTextInput"
import { useState } from "react"
import CustomButton from "../components/CustomButton"
import { useNavigation } from "@react-navigation/native"
import { GradientBackground } from "../components/GradientBackground"
import AppSafeAreaView from "../components/AppSafeAreaView"


export const EmailVerification = () => {
    const insets = useSafeAreaInsets();
    const navigation = useNavigation();
    const [email, setEmail] = useState("");
    return (

        <AppKeyboardAvoidView style={styles.container}>
            <View>
                <ProgressBar currentStep={3} totalSteps={5} />
                <View style={{ marginTop: rsHeight(95) - insets.top }}>
                    <Text style={styles.title}>What's your <Text style={styles.secondryColor}>Email?</Text></Text>
                    <Text style={styles.subTitle}>We'll send you OTP for Email verification</Text>
                    <View style={{ marginTop: rsHeight(70) - insets.top }}>
                        <CustomTextInput style={{ marginTop: Spacing.md }} value={email} onChangeText={setEmail} keyboardType="email-address" placeholder="anything@gmail.com" />
                    </View>
                </View>
            </View>

            <CustomButton title="Continue" onPress={() => navigation.navigate("Interests")} disabled={email.length <= 10} />


        </AppKeyboardAvoidView>

    )
}

const styles = StyleSheet.create({
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