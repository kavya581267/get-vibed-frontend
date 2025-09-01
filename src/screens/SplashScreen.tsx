import { Image, StyleSheet, Text, View } from "react-native"
import { theme } from "../theme/theme"
import { FontSize, rsHeight, rsWidth } from "../theme/responsive"
import { typography } from "../theme/typography"
import { useSafeAreaInsets } from "react-native-safe-area-context"


export const Splash = () => {
    const insets = useSafeAreaInsets();
    return (
        <View style={styles.container}>
            <View >
                <Image style={styles.image} source={require('../../assets/splash.png')} />
            </View>
            <Text style={[styles.text , styles.primaryColor]}>Get<Text style={styles.secondaryColor}>Vibed</Text></Text>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 16
    },
    image: {
        width: rsWidth(88.27),
        height: rsHeight(90.62),
        resizeMode: "contain"
    },
    text: {
        fontSize: FontSize.h1,
        fontFamily: typography.heading1.fontFamily
    },
    primaryColor:{
        color: theme.colors.primary,
    },
    secondaryColor:{
        color: theme.colors.secondary,
    }
})