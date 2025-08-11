import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { View, Text } from "react-native";
import EventFeed from "./EventFeed";
import { theme } from "../theme/theme";
import { typography } from "../theme/typography";
import { rf } from "../theme/responsive";

const TopTab = createMaterialTopTabNavigator();

function EventsScreen() {
    return <EventFeed
        events={sampleEvents}
        onEventPress={(id) => console.log('Event pressed:', id)}
        onLike={(id) => console.log('Liked:', id)}
        onComment={(id) => console.log('Comment:', id)}
        onShare={(id) => console.log('Share:', id)}
    />;
}

const EventFeedWithTopNav = () => {
    return (
        <TopTab.Navigator

            screenOptions={{
                tabBarLabelStyle: { fontSize: rf(11)},
                tabBarStyle: { backgroundColor: theme.colors.background },
                tabBarActiveTintColor: '#00FF88',
                tabBarInactiveTintColor: 'white',
            }}>
            <TopTab.Screen options={{ tabBarLabel: 'AroundYou' }} name="Around You" component={EventsScreen} />
            <TopTab.Screen name="Pubs" component={EventsScreen} />
            <TopTab.Screen name="Artists" component={EventsScreen} />
            <TopTab.Screen name="Events" component={EventsScreen} />

        </TopTab.Navigator>
    )
}

export default EventFeedWithTopNav;


const sampleEvents = [
    {
        id: '1',
        title: 'PRIME FRIDAY',
        subtitle: 'Pool Party',
        imageSource: require('../../assets/test1.png'),
        location: '10 Downing Street - Begumpet',
        description: 'The drinks will be flowing, the bass will be dropping, and the vibe will be off the charts! Whether you\'re here to dance, chill with friends, or make wild memories — this is the night you don\'t want to miss.',
        features: [
            'Signature Cocktails',
            'Midnight Munchies',
            'Live Dance Floor',
            'Insta-worthy moments guaranteed'
        ],
        timestamp: '2h ago'
    },
    {
        id: '2',
        title: 'PRIME FRIDAY',
        subtitle: 'Pool Party',
        imageSource: require('../../assets/test2.png'),
        location: 'Amnesia Lounge Bar - Banjara Hills',
        description: 'Get ready for a wild night packed with booming beats, electric energy, and non-stop vibes. \nWe’re bringing the heat with:',
        features: [
            'Signature Cocktails',
            'Midnight Munchies',
            'Live Dance Floor',
            'Insta-worthy moments guaranteed'
        ],
        timestamp: '2h ago'
    },
    {
        id: '3',
        title: 'PRIME FRIDAY',
        subtitle: 'Pool Party',
        imageSource: require('../../assets/test3.jpg'),
        location: 'Amnesia Lounge Bar - Banjara Hills',
        description: 'Get ready for a wild night packed with booming beats, electric energy, and non-stop vibes. \nWe’re bringing the heat with:',
        features: [
            'Signature Cocktails',
            'Midnight Munchies',
            'Live Dance Floor',
            'Insta-worthy moments guaranteed'
        ],
        timestamp: '2h ago'
    }
    // Add more events...
];
