import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Card from '../screens/artist/Card';
import MainTab from '../screens/artist/EventScreen';
import { BlurView } from 'expo-blur';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import CustomBottomBar from '../components/CustomBottomBar';
import Profile from '../screens/artist/Profile';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function BottomTab() {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false, tabBarStyle: { position: 'absolute', backgroundColor: "transparent" },
            tabBarBackground: () => (
                <BlurView tint="light" intensity={100} style={StyleSheet.absoluteFill} />
            ),
        }}
            tabBar={(props) => <CustomBottomBar {...props} />}
        >
            <Tab.Screen name="EventBottom" component={MainTab} />
            <Tab.Screen name="Bookings" component={Card} />
            <Tab.Screen name="Pubs" component={Card} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>

    );
}


