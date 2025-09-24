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


export default function MapSwipeScreen() {


    const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null);
    const [activeTab, setActiveTab] = useState<"Map" | "Swipe">("Map");

    // --- Location setup ---
    useEffect(() => {
        (async () => {
            const { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== "granted") return;

            const subscription = await Location.watchPositionAsync(
                { accuracy: Location.Accuracy.High, timeInterval: 2000, distanceInterval: 1 },
                (loc) => setLocation({ lat: loc.coords.latitude, lng: loc.coords.longitude })
            );

            return () => subscription.remove();
        })();
    }, []);



    return (
        <GestureHandlerRootView style={styles.container}>
            {activeTab === "Map" && location && (
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
    toggle: { position: "absolute", top: 50, alignSelf: "center", zIndex: 10 },
});
