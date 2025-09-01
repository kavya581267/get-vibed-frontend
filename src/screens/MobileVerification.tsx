import { Alert, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { typography } from "../theme/typography"
import { theme } from "../theme/theme"
import { FontSize, Radius, rsBorder, rsHeight, rsModerate, Spacing } from "../theme/responsive"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { useState } from "react"
import { CountryPicker } from "react-native-country-codes-picker";
import CustomButton from "../components/CustomButton"
import { AppKeyboardAvoidView } from "../components/AppKeyboardAvoidView"
import { ProgressBar } from "../components/ProgressBar"


export const MobileVerificationScreen = () => {
    const insets = useSafeAreaInsets();

    const [phone, setPhone] = useState("");
    const [showCountryPicker, setShowCountryPicker] = useState(false);
    const [countryCode, setCountryCode] = useState("+91");
    const [countryFlag, setCountryFlag] = useState("🇮🇳")
    return (
        <AppKeyboardAvoidView style={styles.container}>
            <View>
                <ProgressBar currentStep={1} totalSteps={5} />
                <View style={{ marginTop: rsHeight(95) - insets.top }}>
                    <Text style={styles.title}>What's your mobile <Text style={styles.secondryColor}>Number?</Text></Text>
                    <Text style={styles.subTitle}>We'll send you OTP for verification</Text>
                </View>
                <View style={{ marginTop: rsHeight(70) - insets.top }}>
                    <View style={styles.inputContainer}>
                        <TouchableOpacity
                            onPress={() => setShowCountryPicker(true)}>
                            <View style={styles.countryContainer}>
                                <View style={styles.flagArrowContainer}>
                                    <Text style={styles.flag}>{countryFlag}</Text>
                                    <Text style={styles.arrow}>⌄</Text>
                                </View>

                            </View>
                        </TouchableOpacity>
                        <Text style={styles.code}>{countryCode}</Text>

                        <TextInput
                            style={styles.input}
                            placeholderTextColor="#aaa"
                            keyboardType="phone-pad"
                            value={phone}
                            onChangeText={setPhone}
                        />
                    </View>

                </View>
            </View>
            <CountryPicker
                show={showCountryPicker}
                lang="en"
                pickerButtonOnPress={(item) => {
                    setCountryCode(item.dial_code);
                    setCountryFlag(item.flag);
                    setShowCountryPicker(false);
                }}
                onBackdropPress={() => setShowCountryPicker(false)}
                style={{
                    modal: { height: 350, borderRadius: 20 },
                    textInput: { display: "none" },
                    itemsList: { maxHeight: 350 },
                }} />
            <View >
                <CustomButton title="Continue" onPress={() => Alert.alert("Phone Number", phone)} disabled={phone.length < 10 || phone.length > 10} />
            </View>

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