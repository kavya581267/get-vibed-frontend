import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, useWindowDimensions, ViewStyle, ScrollView } from "react-native";
import { SceneRendererProps, TabView } from "react-native-tab-view";
import { theme } from "../theme/theme"; // adjust path
import { FontSize, rsFontModerate, Spacing } from "../theme/responsive";
import { ActiveTabGradientBackground } from "./ActiveTabGradientBackground";

type Route = {
    key: string;
    title: string;
};

interface CustomTabViewProps {
    routes: Route[];
    renderScene: (props: SceneRendererProps & { route: Route }) => React.ReactNode;
    initialIndex?: number;
    tabBarStyle?: ViewStyle;
    activeTab?: ViewStyle;
    tabLabelStyle?: ViewStyle;
    showIndicator?: boolean;   // for bottom line
}

export default function CustomTabView({ routes, renderScene, initialIndex = 0, tabBarStyle, tabLabelStyle, activeTab, showIndicator }: CustomTabViewProps) {
    const layout = useWindowDimensions();
    const [index, setIndex] = useState(initialIndex);

    return (
        <View style={{ flex: 1 }}>
            {/* Custom Tab Bar */}
             <View style={[styles.tabBar, tabBarStyle]}>
                {routes.map((route, i) => (
                    <TouchableOpacity
                        key={route.key}
                        style={[styles.tab, i === index ? activeTab : ""]}
                        onPress={() => setIndex(i)}
                    >
                        {i === index && !showIndicator ? (
                            <ActiveTabGradientBackground />
                        ) : null}

                        <Text
                            style={[
                                styles.tabLabel, tabLabelStyle,
                                { color: i === index && showIndicator ? theme.colors.primary : theme.colors.secondary }
                            ]}
                            
                        >
                            {route.title}
                        </Text>
                        {showIndicator && i === index && <View style={styles.indicator} />}
                    </TouchableOpacity>
                ))}
            </View>

            {/* Tab Content */}
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width: layout.width }}
                renderTabBar={() => null} // hide default tab bar
            />
        </View>
    );
}

const styles = StyleSheet.create({
    tabBar: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        backgroundColor: "transparent",
        paddingBottom: Spacing.md,
        paddingTop: Spacing.md
    },
    tab: {
        flex: 1,
        paddingHorizontal: 16,
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden", //so gradient doesn’t bleed out
        paddingBottom:Spacing.tiny
    },
    tabLabel: {
        paddingTop:rsFontModerate(5),
        fontSize: FontSize.tiny,
        fontWeight: "600",
        color: theme.colors.secondary,
        textAlign: "center"
    },
    indicator: {
        position: "absolute",
        bottom: 0,
        height: 2,
        width: "100%",
        backgroundColor: theme.colors.primary,
    },
});
