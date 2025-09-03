import { Text, TextInput, TouchableOpacity, View } from "react-native"
import { rsHeight } from "../../theme/responsive"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { useState } from "react"
import { CountryPicker } from "react-native-country-codes-picker";
import CustomButton from "../../components/CustomButton"
import { AppKeyboardAvoidView } from "../../components/AppKeyboardAvoidView"
import { ProgressBar } from "../../components/ProgressBar"
import { useNavigation } from "@react-navigation/native"
import { styles } from "../../styles/newUserStyles/MobileVerificationScreen.styles"


export const MobileVerificationScreen = () => {
    const insets = useSafeAreaInsets();
    const navigation = useNavigation();

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
                <CustomButton title="Continue" onPress={() => navigation.navigate("OtpScreen")} disabled={phone.length < 10 || phone.length > 10} />
            </View>

        </AppKeyboardAvoidView>

    )
}

