import React, { useState, useEffect, useRef } from "react";
import {
    View,
    StyleSheet,
    Image,
    Text,
    Dimensions,
    Animated,
    PanResponder,
    ImageBackground,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import MapSwipeToggle from "../components/MapSwipeToggle";
import { FontSize, Radius, rsHeight, rsWidth, Spacing } from "../theme/responsive";
import { theme } from "../theme/theme";
import InterestButton from "../components/InterestButton";
import { Modalize } from "react-native-modalize";
import CustomTabView from "../components/CustomTabView";
import VibersTab from "./artist/map/VibersTab";
import EventsRoute from "./artist/profile-routes/EventsRoute";
import PartiesScreen from "./artist/top-tab-view-routes/Parties";
import { SceneMap } from "react-native-tab-view";
import Profile from "./artist/top-tab-view-routes/Profile";

const SCREEN_WIDTH = Dimensions.get("window").width;
const { height } = Dimensions.get("window");

const MOCK_VIBERS = [
    { id: "v1", name: "Anita", avatar: "https://i.pravatar.cc/80?img=12", lat: 17.473, lng: 78.363, distance: "120m" },
    { id: "v2", name: "Ravi", avatar: "https://i.pravatar.cc/80?img=56", lat: 17.474, lng: 78.361, distance: "300m" },
    { id: "v3", name: "Sara", avatar: "https://i.pravatar.cc/80?img=5", lat: 17.472, lng: 78.362, distance: "420m" },
];

const SWIPE_CARDS = [
    { id: 1, name: "Alice", age: 22, image: require("../../assets/swipe1.jpg"), bio: "Loves music and pets" },
    { id: 2, name: "Bob", age: 25, image: require("../../assets/swipe2.jpg"), bio: "Night owl and foodie" },
    { id: 3, name: "Charlie", age: 28, image: require("../../assets/swipe3.jpg"), bio: "Traveler and adventurer" },
];

const interests = ["Music Lover", "Pet Parent", "Night Owl"];



export default function MapSwipeScreen() {
    const [routes] = React.useState([
        { key: "vibers", title: "Vibers" },
        { key: "parties", title: "Parties" },
        { key: "pubs", title: "Pubs" },
        { key: "others", title: "Others" },
    ]);

    const renderScene = SceneMap({
        vibers: VibersTab,
        parties: EventsRoute,
        pubs: Profile,
        others: PartiesScreen,
    });
    const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null);
    const [activeTab, setActiveTab] = useState<"Map" | "Swipe">("Map");
    const [index, setIndex] = useState(0);
    const position = useRef(new Animated.ValueXY()).current;
    const modalRef = useRef<Modalize>(null);

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

    // --- Swipe PanResponder ---
    const rotate = position.x.interpolate({
        inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
        outputRange: ["-10deg", "0deg", "10deg"],
        extrapolate: "clamp",
    });

    const swipePanResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: (_, gesture) => position.setValue({ x: gesture.dx, y: gesture.dy }),
        onPanResponderRelease: (_, gesture) => {
            if (gesture.dx > 120 || gesture.dx < -120) {
                const direction = gesture.dx > 0 ? SCREEN_WIDTH + 100 : -SCREEN_WIDTH - 100;
                Animated.timing(position, { toValue: { x: direction, y: gesture.dy }, duration: 200, useNativeDriver: false })
                    .start(() => {
                        setIndex((prev) => (prev + 1) % SWIPE_CARDS.length);
                        position.setValue({ x: 0, y: 0 });
                    });
            } else {
                Animated.spring(position, { toValue: { x: 0, y: 0 }, friction: 5, useNativeDriver: false }).start();
            }
        },
    });

    const renderCards = () =>
        SWIPE_CARDS.slice(index, index + 3)
            .map((item, i) => {
                if (!item) return null;
                let cardStyle: any = {};
                if (i === 0) cardStyle = { top: 50, transform: [{ translateX: position.x }, { translateY: position.y }, { rotate }] };
                if (i === 1) cardStyle = { top: 30, transform: [{ scale: 0.97 }] };
                if (i === 2) cardStyle = { top: 10, transform: [{ scale: 0.94 }] };
                return (
                    <Animated.View key={item.id} {...(i === 0 ? swipePanResponder.panHandlers : {})} style={[styles.card, cardStyle]}>
                        <ImageBackground source={item.image} style={styles.image}>
                            <LinearGradient colors={["transparent", "rgba(0,0,0,0.7)"]} style={styles.gradient}>
                                <View style={{ flexDirection: "row", marginLeft: Spacing.md }}>
                                    <Text style={styles.text}>{item.name}</Text>
                                    <Text style={styles.textAge}>{item.age}</Text>
                                </View>
                                <Text style={styles.textCity}>Vizag</Text>
                            </LinearGradient>
                        </ImageBackground>
                    </Animated.View>
                );
            })
            .reverse();

    return (
        <GestureHandlerRootView style={styles.container}>
            {activeTab === "Map" && location && (
                <MapView
                    style={StyleSheet.absoluteFillObject}
                    initialRegion={{ latitude: location.lat, longitude: location.lng, latitudeDelta: 0.005, longitudeDelta: 0.005 }}
                    showsUserLocation
                >
                    {MOCK_VIBERS.map((v) => (
                        <Marker key={v.id} coordinate={{ latitude: v.lat, longitude: v.lng }} title={v.name}>
                            <Image source={{ uri: v.avatar }} style={styles.markerAvatar} />
                        </Marker>
                    ))}
                </MapView>
            )}

            {activeTab === "Swipe" && (
                <View style={styles.swipeContainer}>
                    <View style={styles.cardStack}>{renderCards()}</View>
                    <View style={styles.bioContainer}>
                        <Text style={styles.bioTitle}>Bio</Text>
                        <Text style={styles.bioText}>{SWIPE_CARDS[index].bio}</Text>
                    </View>
                    <View style={styles.grid}>{interests.map((item, idx) => <InterestButton key={idx} label={item} />)}</View>
                </View>
            )}

            {/* Toggle */}
            <View style={styles.toggle}>
                <MapSwipeToggle active={activeTab} setActive={setActiveTab} />
            </View>
            {activeTab === "Map" &&
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
                        tabStyle={{ flex: 1 }}
                    />
                </Modalize>
            }
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    toggle: { position: "absolute", top: 50, alignSelf: "center", zIndex: 10 },
    swipeContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
    cardStack: { flex: 1, justifyContent: "center", alignItems: "center" },
    card: {
        position: "absolute",
        width: rsWidth(370),
        height: rsHeight(519),
        borderRadius: 30,
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 5 },
        overflow: "hidden",
    },
    image: { width: "100%", height: "100%", justifyContent: "flex-end" },
    gradient: { width: "100%", height: "40%", position: "absolute", bottom: 0, justifyContent: "flex-end" },
    text: { color: theme.colors.secondary, fontSize: FontSize.h1 - 2, fontWeight: "600" },
    textAge: { paddingLeft: Spacing.sm, color: "#AAAAAA", fontSize: FontSize.h1 - 2, fontWeight: "400" },
    textCity: { color: "#8C8C8C", fontSize: FontSize.body, fontWeight: "400", marginBottom: Spacing.md, marginLeft: Spacing.md },
    bioContainer: { paddingHorizontal: 20, paddingBottom: 10 },
    bioTitle: { fontSize: FontSize.body, fontWeight: "600", color: theme.colors.secondary, marginBottom: 6 },
    bioText: { fontSize: FontSize.body, color: "#8C8C8C" },
    grid: { flexDirection: "row", paddingHorizontal: 20, paddingBottom: Spacing.lg },
    markerAvatar: { width: 40, height: 40, borderRadius: 20, borderWidth: 2, borderColor: "#fff" },
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
