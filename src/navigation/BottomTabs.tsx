
import Card from '../screens/artist/main-page/Card';
import MainTab from '../screens/artist/main-page/EventScreen';
import CustomBottomBar from '../components/CustomBottomBar';
import { withGradient } from '../components/hoc/withGradient';
import { withGradientSafeArea } from '../components/hoc/withGradientSafeArea';
import MapSwipeScreen from '../screens/artist/map-and-swipe/MapSwipeScreen';
import Profile from '../screens/artist/top-tab-view-routes/Profile';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

export default function BottomTab() {
    return (
        <Tab.Navigator
            tabBarPosition='bottom'
            screenOptions={{
                tabBarStyle: { position: 'absolute', backgroundColor: "transparent" },
            }}
            tabBar={(props) => <CustomBottomBar {...props} />}
        >
            <Tab.Screen name="EventBottom" component={withGradientSafeArea(MainTab)} />
            <Tab.Screen name="Bookings" component={withGradientSafeArea(Card)} />
            <Tab.Screen name="Pubs" component={withGradientSafeArea(MapSwipeScreen)} />
            <Tab.Screen name="Profile" component={withGradient(Profile)} />
        </Tab.Navigator>

    );
}


