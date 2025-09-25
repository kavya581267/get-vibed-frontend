import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FontSize, Radius, rsHeight, rsWidth, Spacing } from "../theme/responsive";
import { theme } from "../theme/theme";
import { useNavigation } from "@react-navigation/native";

interface MapSwipeToggleProps {
    active: "Map" | "Swipe";
    setActive: (tab: "Map" | "Swipe") => void;
}

const MapSwipeToggle: React.FC<MapSwipeToggleProps> = ({ active, setActive }) => {
   

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={[styles.button, active === "Map" && styles.activeButton]}
                onPress={() => {setActive("Map")}}
            >
                <Text style={[styles.text, active === "Map" && styles.activeText]}>Map</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.button, active === "Swipe" && styles.activeButton]}
                onPress={() => {setActive("Swipe")}}
            >
                <Text style={[styles.text, active === "Swipe" && styles.activeText]}>Swipe</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: rsWidth(157),
        height: rsHeight(49),
        flexDirection: "row",
        backgroundColor: "#111", // dark pill background
        borderRadius: Radius.pill,
        padding: Spacing.tiny - 2,
    },
    button: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: Radius.pill,
    },
    activeButton: {
        backgroundColor: theme.colors.primary,
    },
    text: {
        fontSize: FontSize.small,
        fontWeight: "400",
        color: theme.colors.secondary,
    },
    activeText: {
        color: theme.colors.secondary,
        fontWeight: "600",
    },
});

export default MapSwipeToggle;
