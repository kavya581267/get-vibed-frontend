import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert, KeyboardAvoidingView, Platform } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import CustomTextInput from "../components/CustomTextInput";
import { typography } from "../theme/typography";
import { theme } from "../theme/theme";
import { letterSpacing, margin, padding } from "../theme/spacing";
import CustomButton from "../components/CustomButton";
import { FontSize, Radius, rsBorder, rsFont, rsHeight, rsWidth, Spacing } from "../theme/responsive";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";


export default function SignUpScreen() {
    const navigation = useNavigation();
    const insets = useSafeAreaInsets();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (

        <View style={styles.container}>
            {/* Title */}
            <View style={{ marginTop: rsHeight(175) - insets.top }}>
                <Text style={styles.title}>
                    <Text style={styles.highlight}>Sign</Text> Up
                </Text>
            </View>
            {/* Email Input */}
            <View style={styles.marginBottom}>
                <CustomTextInput
                    value={email}
                    onChangeText={setEmail}
                    placeholder="abc.xyz@example.com"
                />
            </View>

            {/* Password Input */}
            <View style={[styles.paddingBottom, styles.paddingTop]}>
                <CustomTextInput
                    value={password}
                    onChangeText={setPassword}
                    //placeholder="•••••••"
                    secureTextEntry
                />
            </View>

            {/* Create Account Button */}
            <View >
                <CustomButton
                    title="Party Now!"
                    style={styles.button}
                    textStyle={{ fontSize: typography.button.fontSize, fontWeight: typography.button.fontWeight }}
                    onPress={() => navigation.navigate("MobileVerificationScreen")}
                />
            </View>

            {/* OR Divider */}
            <Text style={styles.orText}>OR</Text>

            {/* Google Button */}
            <View style={styles.paddingBottom}>
                <TouchableOpacity style={styles.socialButton}>
                    <MaterialCommunityIcons name="google" size={FontSize.h3} color="#fff" style={{ marginRight: Spacing.sm }} />
                    <Text style={styles.socialText}>Continue with Google</Text>
                </TouchableOpacity>
            </View>


            {/* Instagram Button */}
            <TouchableOpacity style={styles.socialButton}>
                <MaterialCommunityIcons name="instagram" size={FontSize.h3} color="#fff" style={{ marginRight: Spacing.sm }} />
                <Text style={styles.socialText}>Continue with Instagram</Text>
            </TouchableOpacity>
            <View>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    title: {
        fontFamily: typography.heading1.fontFamily,
        fontSize: FontSize.h1,
        letterSpacing: letterSpacing.xs,
        textAlign: "center",
        marginBottom: Spacing.xl,
        color: theme.colors.secondary,
    },
    highlight: {
        color: theme.colors.primary,
    },

    input: {
        marginBottom: 16,
        backgroundColor: "transparent",
    },

    button: {
        borderRadius: Radius.pill,
        paddingVertical: 2,
        backgroundColor: theme.colors.primary,
        marginTop: Spacing.sm,
    },

    orText: {
        textAlign: "center",
        color: theme.colors.secondary,
        fontFamily: typography.or.fontFamily,
        fontSize: FontSize.tiny,
        fontWeight: typography.or.fontWeight,
        paddingTop: padding.xl,
        paddingBottom: padding.xl,
    },
    socialButton: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: rsBorder(0.64),
        borderColor: theme.colors.border,
        borderRadius: Radius.pill,
        paddingHorizontal: 16,
        width: rsWidth(356),
        height: rsHeight(44),
    },
    socialText: {
        color: theme.colors.secondary,
        fontSize: FontSize.small,
        fontWeight: typography.googleButton.fontWeight
    },

    paddingBottom: { paddingBottom: Spacing.md },
    paddingTop: { paddingTop: Spacing.md },
    marginBottom: { marginBottom: Spacing.sm },
});
