import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { FontSize, rsHeight } from "../../theme/responsive";
import CustomTextInput from "../../components/CustomTextInput";
import CustomButton from "../../components/CustomButton";
import { typography } from "../../theme/typography";
import { styles } from "../../styles/newUserStyles/SignUpScreen.styles";


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
                    <MaterialCommunityIcons name="google" size={FontSize.h3} color="#fff" style={styles.marginRight} />
                    <Text style={styles.socialText}>Continue with Google</Text>
                </TouchableOpacity>
            </View>


            {/* Instagram Button */}
            <TouchableOpacity style={styles.socialButton}>
                <MaterialCommunityIcons name="instagram" size={FontSize.h3} color="#fff" style={styles.marginRight} />
                <Text style={styles.socialText}>Continue with Instagram</Text>
            </TouchableOpacity>
            <View>
            </View>
        </View>

    );
}

