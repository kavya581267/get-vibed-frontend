import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet } from "react-native";



export const ActiveTabGradientBackground = () => (
    <LinearGradient
        colors={["rgba(13, 13, 13, 0.36)", "rgba(20, 174, 92, 0.2304)"]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={StyleSheet.absoluteFill}
    >
    </LinearGradient>
);