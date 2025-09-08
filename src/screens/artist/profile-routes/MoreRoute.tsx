import { StyleSheet, Text, View } from "react-native";
import { FontSize, Radius, rsWidth } from "../../../theme/responsive";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";

export default function MoreRoute() {
    return (
        <View style={styles.scene}>

            <View style={styles.card}>
                <View style={{ flexDirection: "row" }}>
                    <MaterialCommunityIcons name="microphone" size={rsWidth(24)} color="#7B61FF" />
                    <Text style={{ color: "white", marginLeft: 10, alignSelf: "center",fontSize:FontSize.small}}>Events Performed</Text>
                </View>
                <Text style={{ color: "white",fontSize:FontSize.small }}>104</Text>
            </View>


            <View style={styles.card}>
                <View style={{ flexDirection: "row" }}>
                    <Ionicons name="disc" size={rsWidth(24)} color="#FFD233" />
                    <Text style={{ color: "white", marginLeft: 10, alignSelf: "center",fontSize:FontSize.small }}>Albums</Text>
                </View>
                <Text style={{ color: "white",fontSize:FontSize.small }}>10</Text>
            </View>
        </View>
    )
}

export const styles = StyleSheet.create({
    scene: { flex: 1, backgroundColor: "#000",  flexDirection: "row",justifyContent:"space-between" },
    card: {
        backgroundColor: "#111",
        borderRadius: Radius.md,
        width: rsWidth(182),
        height: rsWidth(76),
        flexDirection: "column",
        alignItems: "center",
        padding: 10,
    },
})