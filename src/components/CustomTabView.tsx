import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, useWindowDimensions, ViewStyle } from "react-native";
import { SceneRendererProps, TabView } from "react-native-tab-view";
import { theme } from "../theme/theme"; // adjust path
import { FontSize, Spacing } from "../theme/responsive";

type Route = {
    key: string;
    title: string;
};

interface CustomTabViewProps {
    routes: Route[];
    renderScene: (props: SceneRendererProps & { route: Route }) => React.ReactNode;
    initialIndex?: number;
    tabBarStyle?: ViewStyle;
    activeTab?:ViewStyle;
    tabLabelStyle?: ViewStyle;
    showIndicator?: boolean;   // for bottom line
}

export default function CustomTabView({ routes, renderScene, initialIndex = 0,tabBarStyle,tabLabelStyle,activeTab,showIndicator}: CustomTabViewProps) {
    const layout = useWindowDimensions();
    const [index, setIndex] = useState(initialIndex);

    return (
        <View style={{ flex: 1 }}>
            {/* Custom Tab Bar */}
            <View style={[styles.tabBar,tabBarStyle]}>
                {routes.map((route, i) => (
                    <TouchableOpacity
                        key={route.key}
                        style={[styles.tab,i === index ? activeTab : ""]}
                        onPress={() => setIndex(i)}
                    >
                        <Text
                            style={[
                                styles.tabLabel,tabLabelStyle,
                                { color: i === index ? theme.colors.primary : theme.colors.secondary }
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
        justifyContent: "space-between",
        backgroundColor: "transparent",
    },
    tab: {
        // flex: 1,
        paddingHorizontal: 16,
        alignItems: "center",
       // paddingVertical: 12,
       justifyContent:"center"
    },
    tabLabel: {
        fontSize: FontSize.small,
        fontWeight: "600",
    },
    indicator: {
        position: "absolute",
        bottom: 0,
        height: 2,
        width: "100%",
        backgroundColor: theme.colors.primary,
    },
});
