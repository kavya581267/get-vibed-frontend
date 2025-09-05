import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { FontSize, rsHeight, rsModerate, rsWidth, Spacing } from "../../theme/responsive";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { theme } from "../../theme/theme";
import CustomButton from "../../components/CustomButton";

export default function Profile() {
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
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#000" },
    // header: {flexDirection: "row",  alignItems: "center" },
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
        backgroundColor: "rgba(0,0,0,0.3)", // darken image for better text visibility
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
    }

});