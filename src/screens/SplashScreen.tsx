import { Animated, Image, StyleSheet, Text, View } from "react-native"
import { theme } from "../theme/theme"
import { FontSize, rsHeight, rsWidth } from "../theme/responsive"
import { typography } from "../theme/typography"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { withGradientSafeArea } from "../components/hoc/withGradientSafeArea"
import { useEffect, useRef } from "react"
import { withAnimatedGradient } from "../components/hoc/withAnimatedGradient"


const Splash = () => {
    const insets = useSafeAreaInsets();
    const colorMap = ["primary", "primary", "primary", "secondary", "secondary", "secondary", "secondary", "secondary"];


    const logoScale = useRef(new Animated.Value(0)).current;

    // Text animations
    const text = "GetVibed".split("");
    const animatedValues = useRef(text.map(() => new Animated.Value(0))).current;

    useEffect(() => {
        Animated.spring(logoScale, {
            toValue: 1,
            friction: 5,
            tension: 50,
            useNativeDriver: true,
        }).start(() => {
            // Step 2: Animate each letter with stagger
            const animations = animatedValues.map((anim) =>
                Animated.timing(anim, {
                    toValue: 1,
                    duration: 200,
                    useNativeDriver: true,
                })
            );
            Animated.stagger(100, animations).start(() => {
                setTimeout(() => 10000); // after text animation, go home
            });
        });
    }, []);
    return (
        <View style={[styles.container]}>
            <Animated.Image
                style={[styles.image, { transform: [{ scale: logoScale }] }]}
                source={require("../../assets/splash.png")}
                resizeMode="contain"
            />
            <View style={{ flexDirection: "row" }}>
                {text.map((letter, index) => {
                    const opacity = animatedValues[index];
                    const translateY = opacity.interpolate({
                        inputRange: [0, 1],
                        outputRange: [20, 0], // small slide up
                    });
                    return (
                        <Animated.Text
                            key={index}
                            style={[
                                styles.text,
                                colorMap[index] === "primary" ? styles.primaryColor : styles.secondaryColor,
                                { opacity, transform: [{ translateY }] },
                            ]}
                        >
                            {letter}
                        </Animated.Text>
                    );
                })}
            </View>
        </View>
    )
}

export const GetVibedSplashScreen = withAnimatedGradient(Splash);

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
    primaryColor: {
        color: theme.colors.primary,
    },
    secondaryColor: {
        color: theme.colors.secondary,
    }
})