import { StyleSheet, Text, View } from "react-native";


export default function EventsRoute() {
    return (
        <View style={styles.scene}>
            <Text style={styles.card}>🎤 Prime Friday Festival - 16 Sep ‘25</Text>
            <Text style={styles.card}>🎤 Prime Friday Festival - 24 Sep ‘25</Text>
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
