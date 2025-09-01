import { Image, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import CustomButton from "../components/CustomButton";
import { ProgressBar } from "../components/ProgressBar";
import { rsHeight, rsWidth, Spacing } from "../theme/responsive";
import { typography } from "../theme/typography";
import { theme } from "../theme/theme";


export const Success = () => {
    const insets = useSafeAreaInsets();
    return (
        <View style={styles.container}>
            <View>
                <ProgressBar currentStep={5} totalSteps={5} />
                <View style={{ marginTop: rsHeight(95) - insets.top }}>
                    <Text style={styles.title}>You're<Text style={styles.secondryColor}>All Set!</Text></Text>
                    <Text style={styles.subTitle}>We'll send you OTP for Email verification</Text>
                    <View style={{alignItems:"center",marginTop:rsHeight(180)}}>
                        <Image style={{width:rsWidth(117.79),height:rsHeight(121.43)}} source={require('../../assets/success-icon.png')}></Image>
                    </View>
                </View>
            </View>
            <CustomButton title="Live Young! Party Hard!" onPress={() => console.log("done")} />
        </View>
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
