import { Image, ImageBackground, Platform, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from "react-native";
import { FontSize, rsFontModerate, rsHeight, rsModerate, rsWidth, Spacing } from "../../theme/responsive";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { theme } from "../../theme/theme";
import CustomButton from "../../components/CustomButton";
import React, { useState } from "react";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import EventsRoute from "./profile-routes/EventsRoute";
import TracksRoute from "./profile-routes/TracksRoute";
import PostsRoute from "./profile-routes/PostsRoute";
import MoreRoute from "./profile-routes/MoreRoute";
import CustomTabView from "../../components/CustomTabView";


export default function Profile() {

    const [routes] = React.useState([
        { key: "events", title: "Upcoming Events" },
        { key: "tracks", title: "Tracks" },
        { key: "posts", title: "Posts" },
        { key: "more", title: "More" },
    ]);

    const renderScene = SceneMap({
        events: EventsRoute,
        tracks: TracksRoute,
        posts: PostsRoute,
        more: MoreRoute,
    });
    const [expanded, setExpanded] = useState(false);

    const toggleExpand = () => setExpanded(!expanded);
    return (
        <View style={styles.container}>
            <View >
                <ImageBackground
                    source={require("../../../assets/profile-pic.jpg")}
                    style={styles.image}
                    resizeMode="cover"
                >
                    {/* Overlay with semi-transparent background (optional) */}
                    <View style={styles.overlay} />

                    {/* Content on top of image */}
                    <View style={styles.details}>
                        <View style={styles.row}>
                            <Text style={styles.name}>Kavya singampalli</Text>
                            <MaterialCommunityIcons
                                name="check-decagram"
                                size={rsModerate(21)}
                                color="#4CAF50"
                                style={{ marginLeft: 6 }}
                            />
                        </View>
                        <Text style={styles.role}>Vocalist/Singer</Text>
                        <View style={styles.socialRow}>
                            <Ionicons name="logo-instagram" size={rsModerate(32)} color="#fff" />
                            <Ionicons name="logo-tiktok" size={rsModerate(32)} color="#fff" />
                            <Ionicons name="logo-facebook" size={rsModerate(32)} color="#fff" />
                            <Ionicons name="logo-youtube" size={rsModerate(32)} color="#fff" />
                        </View>

                        <CustomButton title="Edit Profile" style={styles.button} textStyle={styles.buttonText} onPress={() => console.log("Edit Profile")} />
                    </View>
                </ImageBackground>


                {/* expandable bio */}

                <Text style={styles.bio} numberOfLines={expanded ? undefined : 2}>
                    A soulful voice with timeless charm, Tiana Franci weaves emotion into every note. From intimate ballads to soaring anthems, the music speaks straight to the heart.
                </Text>

                <TouchableOpacity onPress={toggleExpand}>
                    <Text style={styles.toggleText}>
                        {expanded ? "Show Less" : "Show More"}
                    </Text>
                </TouchableOpacity>


                <View style={{ height: rsHeight(400) }}>
                    <CustomTabView routes={routes} renderScene={renderScene} />
                </View>

                <CustomButton title="Upload" onPress={() => console.log("upload")} style={styles.uploadButton} iconLeft={<MaterialCommunityIcons
                    name="plus-circle"
                    size={rsHeight(19.5)}
                    color={theme.colors.secondary}
                />
                } />

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#000" },
    row: {
        flexDirection: "row",
        alignItems: "center"
    },
    name: { fontSize: FontSize.h2, fontWeight: "700", color: theme.colors.secondary },
    role: { fontSize: FontSize.small, color: theme.colors.secondary, fontWeight: "500", marginTop: Spacing.sm },
    socialRow: {
        flexDirection: "row",
        marginTop: Spacing.sm,
        width: rsWidth(176),
        justifyContent: "space-between",
        marginBottom: Spacing.md
    },
    image: {
        width: rsWidth(402),
        height: rsHeight(317),
        justifyContent: "flex-end", // content sticks to bottom
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
    },
    details: {
        padding: 16,
    },
    button: {
        backgroundColor: "#272727",
        width: rsWidth(370),
        height: rsHeight(44)
    },
    buttonText: {
        fontSize: FontSize.small,
        fontWeight: "600"
    },
    bio: {
        fontSize: FontSize.small,
        color: theme.colors.secondary,
        paddingHorizontal: 16
    },
    toggleText: {
        fontWeight: "600",
        fontSize: FontSize.small,
        color: theme.colors.secondary,
        paddingHorizontal: 16
    },

    uploadButton: {
        position: "absolute",
        bottom:Platform.OS ==="ios"? rsHeight(100) : rsHeight(70), 
        alignSelf: "center",
        width: rsWidth(111),
    },


});