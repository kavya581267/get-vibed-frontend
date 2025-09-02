import { Image, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import CustomButton from "../../components/CustomButton";
import { ProgressBar } from "../../components/ProgressBar";
import { rsHeight, rsWidth } from "../../theme/responsive";
import { styles } from "../../styles/newUserStyles/SuccessScreen.styles";


export const SuccessScreen = () => {
    const insets = useSafeAreaInsets();
    return (

        <View style={styles.container}>
            <View>
                <ProgressBar currentStep={5} totalSteps={5} />
                <View style={{ marginTop: rsHeight(95) - insets.top }}>
                    <Text style={styles.title}>You're<Text style={styles.secondryColor}> All Set!</Text></Text>
                    <Text style={styles.subTitle}>We'll send you OTP for Email verification</Text>
                    <View style={{ alignItems: "center", marginTop: rsHeight(180) }}>
                        <Image style={{ width: rsWidth(117.79), height: rsHeight(121.43) }} source={require('../../../assets/success-icon.png')}></Image>
                    </View>
                </View>
            </View>
            <CustomButton title="Live Young! Party Hard!" onPress={() => console.log("done")} />
        </View>

    )
}

