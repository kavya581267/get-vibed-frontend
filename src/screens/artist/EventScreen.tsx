import {  Text, View } from "react-native";
import { FontSize, rsHeight, rsWidth, Spacing } from "../../theme/responsive";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "../../theme/theme";
import Card from "./Card";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import CustomTabBar from "../../components/CustomTabBar";

const Tab = createMaterialTopTabNavigator();

export default function MainTab() {
    return (
       <View style={{flex:1, backgroundColor: "#021d15"}}>
            {/* header */}
            <View style={{ padding:Spacing.md,paddingBottom:0 }}>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingBottom: Spacing.md }}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Ionicons name="navigate" size={rsHeight(24)} color={theme.colors.primary} style={{ transform: [{ scaleX: -1 }] }} />
                        <Text style={{ color: "#F3F3F3", fontSize: FontSize.small, marginLeft: Spacing.xs }}>
                            Jubilee Hills, Hyderabad
                        </Text>
                        <Ionicons name="chevron-down" size={rsWidth(14)} color="white" style={{ marginLeft: Spacing.xs }} />
                    </View>
                    <Ionicons name="search" size={rsWidth(19.52)} color="white" style={{ alignSelf: "center", marginTop: 3 }} />
                </View>  
            </View>

             <View style={{ height: 0.5, backgroundColor: theme.colors.border}}></View>

            <View style={{ flex: 1 }}>
                <Tab.Navigator
                    tabBar={(props) => <CustomTabBar {...props} />}
                    screenOptions={{
                        swipeEnabled: true,
                      
                    }}
                >
                    <Tab.Screen name="Events" component={Card} />
                    <Tab.Screen name="Parties" component={Card} />
                    <Tab.Screen name="Pubs" component={Card} />
                    <Tab.Screen name="Others" component={Card} />
                </Tab.Navigator>
            </View>
        </View>
    )
}