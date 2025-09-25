import React, { useState, useEffect} from "react";
import {
    View,
    StyleSheet
} from "react-native";
import * as Location from "expo-location";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import MapSwipeToggle from "../../../components/MapSwipeToggle";
import MapScreen from "./mapScreen";
import SwipeCard from "./SwipeCard";
import { rsFont, rsHeight } from "../../../theme/responsive";


export default function MapSwipeScreen() {


    const [activeTab, setActiveTab] = useState<"Map" | "Swipe">("Map");

    return (
        <GestureHandlerRootView style={styles.container}>
            {activeTab === "Map" && (
                <MapScreen />
            )}

            {activeTab === "Swipe" && (
                <SwipeCard />
            )}

            {/* Toggle */}
            <View style={styles.toggle}>
                <MapSwipeToggle active={activeTab} setActive={setActiveTab} />
            </View>

        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    toggle: { position: "absolute", top:rsHeight(10), alignSelf: "center", zIndex: 10 },
});
