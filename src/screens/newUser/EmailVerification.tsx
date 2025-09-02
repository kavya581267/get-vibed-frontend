import { Text, View } from "react-native"
import { AppKeyboardAvoidView } from "../../components/AppKeyboardAvoidView"
import { ProgressBar } from "../../components/ProgressBar"
import { rsHeight, Spacing } from "../../theme/responsive"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import CustomTextInput from "../../components/CustomTextInput"
import { useState } from "react"
import CustomButton from "../../components/CustomButton"
import { useNavigation } from "@react-navigation/native"
import { styles } from "../../styles/newUserStyles/EmailVerificationScreen.styles"


export const EmailVerificationScreen = () => {
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

            <CustomButton title="Continue" onPress={() => navigation.navigate("InterestsScreen")} disabled={email.length <= 10} />
        </AppKeyboardAvoidView>

    )
}

