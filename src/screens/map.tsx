import React, { useState, useEffect, useRef, JSX } from "react";
import { View, StyleSheet, Image, Text, FlatList, Dimensions, TouchableOpacity } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import { Modalize } from "react-native-modalize";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SceneMap } from "react-native-tab-view";
import EventsRoute from "./artist/profile-routes/EventsRoute";
import CustomTabView from "../components/CustomTabView";
import { theme } from "../theme/theme";
import { FontSize, Radius, rsHeight, rsWidth, Spacing } from "../theme/responsive";
import { SegmentedButtons } from "react-native-paper";
import MapSwipeToggle from "../components/MapSwipeToggle";

const { height } = Dimensions.get("window");



const MOCK_VIBERS = [
    {
        id: "v1",
        name: "Anita",
        avatar: "https://i.pravatar.cc/80?img=12",
        lat: 17.473,
        lng: 78.363,
        distance: "120m",
    },
    {
        id: "v2",
        name: "Ravi",
        avatar: "https://i.pravatar.cc/80?img=56",
        lat: 17.474,
        lng: 78.361,
        distance: "300m",
    },
    {
        id: "v3",
        name: "Sara",
        avatar: "https://i.pravatar.cc/80?img=5",
        lat: 17.472,
        lng: 78.362,
        distance: "420m",
    },
];

const TABS = ["Vibers", "Parties", "Pubs", "Other"];

export default function MapWithVibers() {
    const [location, setLocation] = useState(null);
    const bottomSheetRef = useRef(null);
    const modalRef = useRef<Modalize>(null);
    const [activeTab, setActiveTab] = useState("Vibers");

    const [routes] = React.useState([
        { key: "vibers", title: "Vibers" },
        { key: "parties", title: "Parties" },
        { key: "pubs", title: "Pubs" },
        { key: "others", title: "Others" },
    ]);

    const renderScene = SceneMap({
        vibers: EventsRoute,
        parties: EventsRoute,
        pubs: EventsRoute,
        others: EventsRoute,
    });

    useEffect(() => {
        // Auto open the sheet on mount
        modalRef.current?.open();
    }, []);

    useEffect(() => {
        (async () => {
            // Request permissions
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== "granted") {
                console.log("Permission to access location was denied");
                return;
            }

            // Watch real-time location updates
            let subscription = await Location.watchPositionAsync(
                {
                    accuracy: Location.Accuracy.High,
                    timeInterval: 2000, // update every 2 seconds
                    distanceInterval: 1, // or every 1 meter moved
                },
                (loc) => {
                    setLocation({
                        lat: loc.coords.latitude,
                        lng: loc.coords.longitude,
                    });
                }
            );

            // Cleanup on unmount
            return () => {
                subscription && subscription.remove();
            };
        })();
    }, []);


    if (!location) return <View style={styles.container} />;

    return (
        <GestureHandlerRootView style={styles.container}>
            <MapView
                style={StyleSheet.absoluteFillObject}
                initialRegion={{
                    latitude: location.lat,
                    longitude: location.lng,
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.005,
                }}
                showsUserLocation
            >
                {MOCK_VIBERS.map((v) => (
                    <Marker
                        key={v.id}
                        coordinate={{ latitude: v.lat, longitude: v.lng }}
                        title={v.name}
                    >
                        <Image source={{ uri: v.avatar }} style={styles.markerAvatar} />
                    </Marker>
                ))}
            </MapView>

            <View style={{ position: "absolute", top: 50, alignSelf: "center" }}>
                <MapSwipeToggle />
            </View>

            <Modalize
                ref={modalRef}
                alwaysOpen={height * 0.35}
                modalHeight={height * 0.85}
                handleStyle={{ backgroundColor: "#444" }}
                modalStyle={styles.modal}
                panGestureEnabled={true}   //lets you drag the modal up/down with touch gestures.
                closeOnOverlayTap={false}  //tapping outside won’t close it
            >
                <CustomTabView
                    routes={routes}
                    renderScene={renderScene}
                    activeTab={styles.customTab}
                    tabBarStyle={styles.tabStyle}
                    tabStyle = {{flex:1}}
                />
            </Modalize>

        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    markerAvatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: "#fff",
    },

    modal: {
        backgroundColor: "#0D0D0D",
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        paddingTop: 10,
    },

    customTab: {
        borderWidth: 1,
        borderColor: theme.colors.primary,
        borderRadius: Radius.xl,
        width: rsWidth(106),
        height: rsHeight(36)
    },
    tabStyle: {
        paddingTop: Spacing.tiny,
        paddingBottom: Spacing.tiny,
        paddingRight: Spacing.xs + 1,
        paddingLeft: Spacing.xs + 1,
    }

});
