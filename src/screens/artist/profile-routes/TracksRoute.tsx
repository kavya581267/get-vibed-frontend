import { StyleSheet, Text, View } from "react-native";


export default function TracksRoute() {
    return (
        <View style={styles.scene}>
            <Text style={styles.card}>🎶 Hey Sunshine - 3:28</Text>
            <Text style={styles.card}>🎶 Walking Alone - 4:04</Text>
            <Text style={styles.card}>🎶 Monalisa - 2:15</Text>
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