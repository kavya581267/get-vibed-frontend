import { createBottomTabNavigator, TransitionPresets, TransitionSpecs } from '@react-navigation/bottom-tabs';
import Card from '../screens/artist/main-page/Card';
import MainTab from '../screens/artist/main-page/EventScreen';
import { BlurView } from 'expo-blur';
import { StyleSheet } from 'react-native';
import CustomBottomBar from '../components/CustomBottomBar';
import { withGradient } from '../components/hoc/withGradient';
import { withGradientSafeArea } from '../components/hoc/withGradientSafeArea';
import MapWithVibers from '../screens/artist/map-and-swipe/map';
import MapSwipeScreen from '../screens/artist/map-and-swipe/MapSwipeScreen';
import Profile from '../screens/artist/top-tab-view-routes/Profile';

const Tab = createBottomTabNavigator();

export default function BottomTab() {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false, tabBarStyle: { position: 'absolute', backgroundColor: "transparent" },
            tabBarBackground: () => (
                <BlurView tint="light" intensity={100} style={StyleSheet.absoluteFill} />
            ),
            animation: "shift", 
        }}
         detachInactiveScreens={false}
            tabBar={(props) => <CustomBottomBar {...props} />}
        >
            <Tab.Screen name="EventBottom" component={withGradientSafeArea(MainTab)}  />
            <Tab.Screen name="Bookings" component={withGradientSafeArea(Card)} />
            <Tab.Screen name="Pubs" component={withGradientSafeArea(MapSwipeScreen)} />
            <Tab.Screen name="Profile" component={withGradient(Profile)} />
        </Tab.Navigator>

    );
}


