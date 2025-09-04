import React, { JSX } from "react";
import { View, TouchableOpacity, Text, ScrollView, Image } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import type { MaterialTopTabBarProps } from "@react-navigation/material-top-tabs";
import { FontSize, Radius, rsHeight, rsModerate, rsWidth, Spacing } from "../theme/responsive";
import { theme } from "../theme/theme";

const icons: Record<string, JSX.Element> = {
  Events: <Image style={{ width: rsWidth(24), height: rsHeight(24) }} source={require('../../assets/events-icon.png')} resizeMode="contain" />,
  Parties: <Image style={{ width: rsWidth(24), height: rsHeight(24) }} source={require('../../assets/parties-icon.png')} resizeMode="contain" />,
  Pubs: <Image style={{ width: rsWidth(24), height: rsHeight(24) }} source={require('../../assets/pubs-icon.png')} resizeMode="contain" />,
  Others: <Image style={{ width: rsWidth(24), height: rsHeight(24) }} source={require('../../assets/others-icon.png')} resizeMode="contain" />,
};

export default function CustomTabBar({ state, descriptors, navigation }: MaterialTopTabBarProps) {
  return (
    <View style={{ flexDirection: "row",padding:Spacing.md}}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{flex:1, justifyContent:"space-between" }}
      >
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label = options.title ?? route.name;
          const isFocused = state.index === index;

          return (
            <TouchableOpacity
              key={route.key}
              onPress={() => navigation.navigate(route.name)}
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
               // paddingVertical: rsModerate(6),
               // paddingHorizontal: rsModerate(11),
                borderRadius: Radius.xl,
               // backgroundColor: isFocused ? "#003B20" : "#1A1F1C",
                borderWidth: isFocused ? 1 : 0,
                borderColor: isFocused ? theme.colors.primary : "transparent",
                height:rsHeight(36),
                width:rsWidth(89)
              }}
            >
              {icons[label]}
              <Text
                style={{
                  color: theme.colors.secondary,
                //  color: isFocused ? theme.colors.primary : "#B0B0B0",
                  marginLeft: rsModerate(6),
                  fontWeight: "600",
                  fontSize: FontSize.tiny,
                }}
              >
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}
