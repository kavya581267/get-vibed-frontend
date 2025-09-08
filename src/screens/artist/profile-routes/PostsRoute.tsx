import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { Radius, rsHeight, rsWidth } from "../../../theme/responsive";


export default function PostsRoute() {
    return (
        <ScrollView>
            <View style={styles.scene}>
                <Image style={{ width: rsWidth(120), height: rsHeight(188), borderRadius: Radius.md }} resizeMode="contain" source={require("../../../../assets/image1.png")} />
                <Image style={{ width: rsWidth(120), height: rsHeight(188), borderRadius: Radius.md }} resizeMode="contain" source={require("../../../../assets/image1.png")} />
                <Image style={{ width: rsWidth(120), height: rsHeight(188), borderRadius: Radius.md }} resizeMode="contain" source={require("../../../../assets/image1.png")} />
                <Image style={{ width: rsWidth(120), height: rsHeight(188), borderRadius: Radius.md }} resizeMode="contain" source={require("../../../../assets/image1.png")} />
                <Image style={{ width: rsWidth(120), height: rsHeight(188), borderRadius: Radius.md }} resizeMode="contain" source={require("../../../../assets/image1.png")} />
                <Image style={{ width: rsWidth(120), height: rsHeight(188), borderRadius: Radius.md }} resizeMode="contain" source={require("../../../../assets/image1.png")} />
                <Image style={{ width: rsWidth(120), height: rsHeight(188), borderRadius: Radius.md }} resizeMode="contain" source={require("../../../../assets/image1.png")} />
                <Image style={{ width: rsWidth(120), height: rsHeight(188), borderRadius: Radius.md }} resizeMode="contain" source={require("../../../../assets/image1.png")} />
            </View>
        </ScrollView>
    )
}

export const styles = StyleSheet.create({
    scene: { flex: 1, backgroundColor: "#000", padding: 12, flexDirection: "row", flexWrap: "wrap" },

})