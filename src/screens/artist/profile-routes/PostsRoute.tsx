import { StyleSheet, Text, View } from "react-native";


export default function PostsRoute() {
    return (
        <View style={styles.scene}>
               <Text style={styles.card}>📸 Party Night</Text>
               <Text style={styles.card}>📸 Live Performance</Text>
           </View>
    )
}

export const styles = StyleSheet.create({
    scene: { flex: 1, backgroundColor: "#000", padding: 16 },
    card: {
        backgroundColor: "#111",
        color: "#fff",
        padding: 12,
        marginBottom: 8,
        borderRadius: 10,
    },
})