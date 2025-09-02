import { Text, TextInput, View } from "react-native"
import { rsHeight } from "../../theme/responsive"
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useState } from "react";
import CustomButton from "../../components/CustomButton";
import { AppKeyboardAvoidView } from "../../components/AppKeyboardAvoidView";
import { ProgressBar } from "../../components/ProgressBar";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../../styles/newUserStyles/OtpScreen.styles";

export const OtpScreen = () => {
    const insets = useSafeAreaInsets();
    const navigation = useNavigation();
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
            <CustomButton title="Continue" onPress={() => navigation.navigate("EmailVerificationScreen")} disabled={!isComplete} />
        </AppKeyboardAvoidView>

    )
}

