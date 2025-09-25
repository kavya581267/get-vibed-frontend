import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import CustomTabBar from "../components/CustomTabBar";
import EventScreen from "../screens/artist/main-page/EventScreen";
import PartiesScreen from "../screens/artist/top-tab-view-routes/Parties";
import PubScreen from "../screens/artist/top-tab-view-routes/Pubs";
import OtherScreen from "../screens/artist/top-tab-view-routes/Others";


const Tab = createMaterialTopTabNavigator();

export default function TopTabs() {
  return (
    <Tab.Navigator
      tabBar={(props) => <CustomTabBar {...props} />} // use custom
      screenOptions={{
        swipeEnabled: true, // allow swipe between tabs
       
      }}
    >
      <Tab.Screen name="Events" component={EventScreen} />
      <Tab.Screen name="Parties" component={PartiesScreen} />
      <Tab.Screen name="Pubs" component={PubScreen} />
      <Tab.Screen name="Others" component={OtherScreen} />
    </Tab.Navigator>
  );
}
