import React, { useState, useEffect, useRef } from "react";
import { View, StyleSheet, Image, Text, FlatList, Dimensions, TouchableOpacity } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import { Modalize } from "react-native-modalize";
import { GestureHandlerRootView } from "react-native-gesture-handler";

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

    const renderItem = ({ item }) => (
        <View style={styles.userCard}>
            <Image source={{ uri: item.avatar }} style={styles.avatar} />
            <View style={{ flex: 1 }}>
                <Text style={styles.name}>
                    {item.name} • {item.age}F
                </Text>
                <Text style={styles.city}>{item.city}</Text>
            </View>
            <TouchableOpacity style={styles.addBtn}>
                <Text style={styles.addText}>+ Request</Text>
            </TouchableOpacity>
        </View>
    );

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

            <Modalize
                ref={modalRef}
                alwaysOpen={height * 0.35}
                modalHeight={height * 0.85}
                handleStyle={{ backgroundColor: "#444" }}
                modalStyle={styles.modal}
                panGestureEnabled={true}   //lets you drag the modal up/down with touch gestures.
                closeOnOverlayTap={false}  //tapping outside won’t close it
                flatListProps={{          //instead of wrapping a FlatList inside, you tell Modalize to directly render a FlatList inside it (prevents nested scroll warnings).
                    data: MOCK_VIBERS,
                    keyExtractor: (item) => item.id,
                    renderItem: renderItem,
                    contentContainerStyle: { paddingBottom: 40 },
                    ListHeaderComponent: (
                        <View style={styles.tabRow}>
                            {TABS.map((tab) => (
                                <TouchableOpacity
                                    key={tab}
                                    style={[styles.tab, activeTab === tab && styles.activeTab]}
                                    onPress={() => setActiveTab(tab)}
                                >
                                    <Text
                                        style={[
                                            styles.tabText,
                                            activeTab === tab && styles.activeTabText,
                                        ]}
                                    >
                                        {tab}
                                    </Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    ),
                }}
            />
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
    tabRow: {
        flexDirection: "row",
        justifyContent: "space-around",
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: "#222",
    },
    tab: {
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 20,
    },
    activeTab: {
        backgroundColor: "#1DB954",
    },
    tabText: {
        color: "#aaa",
        fontWeight: "600",
    },
    activeTabText: {
        color: "#fff",
    },
    userCard: {
        flexDirection: "row",
        alignItems: "center",
        padding: 12,
        borderBottomWidth: 1,
        borderBottomColor: "#222",
    },
    avatar: {
        width: 44,
        height: 44,
        borderRadius: 22,
        marginRight: 12,
    },
    name: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16,
    },
    city: {
        color: "#888",
        fontSize: 13,
    },
    addBtn: {
       // backgroundColor: "#1DB954",
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 20,
    },
    addText: {
        color: "#fff",
        fontWeight: "600",
    },

});
