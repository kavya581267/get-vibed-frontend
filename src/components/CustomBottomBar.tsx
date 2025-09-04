import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FontSize, Radius, rsHeight, rsModerate, rsWidth, Spacing } from "../theme/responsive";
import { theme } from "../theme/theme";
import { transparent } from "react-native-paper/lib/typescript/styles/themes/v2/colors";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { BlurView } from "expo-blur";



export default function CustomBottomBar({ state, descriptors, navigation }: BottomTabBarProps) {
    const bottomTabs = [
        { label: "Events", activeIcon: require("../../assets/event-fill.png"), inactiveIcon: require("../../assets/event.png") },
        { label: "Bookings", activeIcon: require("../../assets/booking-fill.png"), inactiveIcon: require("../../assets/booking.png") },
        { label: "Analytics", activeIcon: require("../../assets/analytics.png"), inactiveIcon: require("../../assets/analytics.png") },
        { label: "Profile", activeIcon: require("../../assets/profile-fill.png"), inactiveIcon: require("../../assets/profile.png") },
    ];

    return (
        <View
            style={{
                position: "absolute",
                bottom: Spacing.xl,
                left: Spacing.xl,
                right: Spacing.xl,
                height: rsWidth(50),
                borderRadius: Radius.pill,
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
                overflow: 'hidden',
            }}
        >
            <BlurView tint="dark" intensity={100} style={StyleSheet.absoluteFillObject} />
            {state.routes.map((route, index) => {
                const isFocused = state.index === index;

                return (
                    <TouchableOpacity
                        key={route.key}
                        onPress={() => navigation.navigate(route.name)}
                        style={{ flex: 1 }}
                    >
                        <View
                            style={{
                               backgroundColor: isFocused ? "rgba(255, 255, 255, 0.1)" : Colors.transparent,
                                borderRadius: Radius.pill,
                              //  paddingHorizontal: isFocused ? Spacing.sm + 2 : 0,
                               // paddingVertical: isFocused ? Spacing.xs + 1 : 0,
                                alignItems: "center",
                                height:rsWidth(50),
                                width:rsWidth(92),
                                justifyContent:"center"
                            }}
                        >
                            <Image
                                source={isFocused ? bottomTabs[index].activeIcon : bottomTabs[index].inactiveIcon}
                                style={{ width: rsWidth(20), height: rsWidth(20), resizeMode: "contain",marginBottom:rsModerate(3) }}
                            />
                            <Text style={{color:isFocused? theme.colors.primary : theme.colors.bottomTab,fontSize:FontSize.tiny}}>
                                {bottomTabs[index].label}
                            </Text>
                        </View>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

