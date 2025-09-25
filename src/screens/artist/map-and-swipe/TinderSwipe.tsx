import React, { useRef, useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    Animated,
    PanResponder,
    Dimensions,
    ImageBackground,
} from "react-native";
import { FontSize, Radius, rsFontModerate, rsHeight, rsModerate, rsWidth, Spacing } from "../../../theme/responsive";
import { theme } from "../../../theme/theme";
import { LinearGradient } from "expo-linear-gradient";
import InterestButton from "../../../components/InterestButton";

const SCREEN_WIDTH = Dimensions.get("window").width;

interface CardItem {
    id: number;
    name: string;
    image: any; // { uri: string } for remote OR require("./local.png") for local
    age: number;
    bio: string;
}

interface TinderSwipeProps {
    data: CardItem[];
}

const interests = ["Music Lover", "Pet Parent", "Night Owl"]

const TinderSwipe: React.FC<TinderSwipeProps> = ({ data }) => {
    const [index, setIndex] = useState(0);
    const position = useRef(new Animated.ValueXY()).current;

    // Rotate card when swiping left/right
    {/*. position.x tracks horizontal drag movement of the card.
         If you drag the card right, position.x becomes positive.
         If you drag the card left, position.x becomes negative. */}
    const rotate = position.x.interpolate({
        inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
        outputRange: ["-10deg", "0deg", "10deg"],
        extrapolate: "clamp",
    });

    // Handle swipe gestures
    const swipePanResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true, //I want this card to respond to touch and drag gestures.
        onPanResponderMove: (_, gesture) => {
            position.setValue({ x: gesture.dx, y: gesture.dy });
        },
        onPanResponderRelease: (_, gesture) => {
            if (gesture.dx > 120) {
                // Swipe right
                Animated.timing(position, {
                    toValue: { x: SCREEN_WIDTH + 100, y: gesture.dy },
                    duration: 200,
                    useNativeDriver: false,
                }).start(() => {
                    setIndex((prev) => (prev + 1) % data.length); // loop back
                    position.setValue({ x: 0, y: 0 });
                });
            } else if (gesture.dx < -120) {
                // Swipe left
                Animated.timing(position, {
                    toValue: { x: -SCREEN_WIDTH - 100, y: gesture.dy },
                    duration: 200,
                    useNativeDriver: false,
                }).start(() => {
                    setIndex((prev) => (prev + 1) % data.length); // loop back
                    position.setValue({ x: 0, y: 0 });
                });
            } else {
                // Reset position
                Animated.spring(position, {
                    toValue: { x: 0, y: 0 },
                    friction: 5,
                    useNativeDriver: false,
                }).start();
            }
        },
    });

    // Render cards
    const renderCards = () =>
        data.slice(index, index + 3)
            .map((item, i) => {
                if (!item) return null;

                let cardStyle: any = {};
                if (i === 0) cardStyle = { top: 50, transform: [{ translateX: position.x }, { translateY: position.y }, { rotate }] };
                if (i === 1) cardStyle = { top: 30, transform: [{ scale: 0.97 }] };
                if (i === 2) cardStyle = { top: 10, transform: [{ scale: 0.94 }] };

                if (i === 0) {
                    return (
                        <Animated.View
                            key={item.id}
                            {...swipePanResponder.panHandlers}
                            style={[styles.card, cardStyle]}
                        >
                            <ImageBackground source={item.image} style={styles.image}>
                                {/* LIKE label */}
                                <Animated.View
                                    style={[
                                        styles.likeBox,
                                        {
                                            opacity: position.x.interpolate({
                                                inputRange: [0, SCREEN_WIDTH / 1.2],
                                                outputRange: [0, 1],
                                                extrapolate: "clamp",
                                            }),
                                            transform: [{ rotate: "-20deg" }],
                                        },
                                    ]}
                                >
                                    <Text style={styles.likeText}>LIKE</Text>
                                </Animated.View>

                                {/* NOPE label */}
                                <Animated.View
                                    style={[
                                        styles.nopeBox,
                                        {
                                            opacity: position.x.interpolate({
                                                inputRange: [-SCREEN_WIDTH / 1.2, 0],
                                                outputRange: [1, 0],
                                                extrapolate: "clamp",
                                            }),
                                            transform: [{ rotate: "20deg" }],
                                        },
                                    ]}
                                >
                                    <Text style={styles.nopeText}>NOPE</Text>
                                </Animated.View>

                                <LinearGradient
                                    colors={["transparent", "rgba(0,0,0,0.7)"]}
                                    style={styles.gradient}
                                >
                                    <View style={{ flexDirection: "row", marginLeft: Spacing.md }}>
                                        <Text style={styles.text}>{item.name}</Text>
                                        <Text style={styles.textAge}>{item.age}</Text>
                                    </View>
                                    <Text style={styles.textCity}>Vizag</Text>
                                </LinearGradient>
                            </ImageBackground>
                        </Animated.View>
                    );
                }

                return (
                    <Animated.View key={item.id} style={[styles.card, cardStyle]}>
                        <ImageBackground source={item.image} style={styles.image}>
                            <LinearGradient
                                colors={["transparent", "rgba(0,0,0,0.7)"]}
                                style={styles.gradient}
                            >
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
        <View style={styles.container}>
            <View style={styles.swipeContainer}>
                <View style={styles.cardStack}>{renderCards()}</View>
                <View style={styles.bioContainer}>
                    <Text style={styles.bioTitle}>Bio</Text>
                    <Text style={styles.bioText}>{data[index].bio}</Text>
                </View>
                <View style={styles.grid}>{interests.map((item, idx) => <InterestButton key={idx} label={item} />)}</View>
            </View>
        </View>
    )
};

export default TinderSwipe;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: "center",
        // alignItems: "center",
        top: rsHeight(50),
    },
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
    image: {
        width: "100%",
        height: "100%",
        justifyContent: "flex-end",
    },

    text: {
        color: theme.colors.secondary,
        fontSize: FontSize.h1 - 2,
        fontWeight: "600",
    },
    textAge: {
        paddingLeft: Spacing.sm,
        color: "#AAAAAA",
        fontSize: FontSize.h1 - 2,
        fontWeight: "400",
    },
    textCity: {
        color: "#8C8C8C",
        fontSize: FontSize.body,
        fontWeight: "400",
        marginBottom: Spacing.md,
        marginLeft: Spacing.md
    },
    gradient: {
        width: "100%",
        height: "40%",        // only bottom part is dark
        position: "absolute",
        bottom: 0,
        justifyContent: "flex-end",
        // paddingBottom: Spacing.md,
    },
    swipeContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
    bioContainer: { paddingHorizontal: 20 },
    bioTitle: { fontSize: FontSize.body, fontWeight: "600", color: theme.colors.secondary, marginBottom: 6 },
    bioText: { fontSize: FontSize.body, color: "#8C8C8C" },
    cardStack: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    grid: {
        flexDirection: "row",
        paddingHorizontal: 20,
        paddingBottom: Spacing.big
    },
    likeBox: {
        position: "absolute",
        top: 40,
        left: 30,
        borderWidth: Radius.xs - 1,
        borderColor: "green",
        paddingHorizontal: Spacing.sm,
        paddingVertical: Spacing.tiny - 3,
        borderRadius: Radius.sm,
    },
    likeText: { color: "green", fontSize: FontSize.h1, fontWeight: "bold" },
    nopeBox: {
        position: "absolute",
        top: 40,
        right: 30,
        borderWidth: Radius.xs - 1,
        borderColor: "red",
        paddingHorizontal: Spacing.sm,
        paddingVertical: Spacing.tiny - 3,
        borderRadius: Radius.sm,
    },
    nopeText: { color: "red", fontSize: FontSize.h1, fontWeight: "bold" },

});
