import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import EventFeed from "./EventFeed";
import { StyleSheet, Text, View } from 'react-native';
import { spacing } from "../theme/spacing";
import { ms } from "react-native-size-matters";

const Tab = createBottomTabNavigator();

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

  function EventsScreen() {
    return <EventFeed
      events={sampleEvents}
      onEventPress={(id) => console.log('Event pressed:', id)}
      onLike={(id) => console.log('Liked:', id)}
      onComment={(id) => console.log('Comment:', id)}
      onShare={(id) => console.log('Share:', id)}
    />;
  }
  function DiscoverScreen() { return <View style={styles.screen}><Text>Discover</Text></View>; }
  function NotificationsScreen() { return <View style={styles.screen}><Text>Notifications</Text></View>; }
  function ProfileScreen() { return <View style={styles.screen}><Text>Profile</Text></View>; }


const AppBottomNav = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    headerShown: false,
                    tabBarIcon: ({ focused, color = 'white', size }) => {
                        let iconName: string;

                        switch (route.name) {
                            case 'Events':
                                iconName = 'calendar-outline';
                                break;
                            case 'Discover':
                                iconName = 'search-outline';
                                break;
                            case 'Notifications':
                                iconName = 'notifications-outline';
                                break;
                            case 'Profile':
                                iconName = 'person-outline';
                                break;
                            default:
                                iconName = 'ellipse-outline';
                        }

                        return <Icon name={iconName} size={size} color={color} />;
                    },
                    tabBarItemStyle: {
                        justifyContent: 'center',
                        alignItems: 'center',
                    },
                    tabBarActiveTintColor: '#00FF88',
                    tabBarInactiveTintColor: 'white',
                    tabBarStyle: {
                        position: 'absolute',
                        bottom: spacing.md,
                        backgroundColor: 'rgba(10, 10, 10, 0.9)',
                        borderRadius: ms(40),
                        height: ms(60),
                        width: '90%',
                        marginHorizontal: '5%',
                        paddingBottom: ms(20),
                        elevation: ms(10),
                        shadowColor: '#000',
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,
                        borderWidth: 1,
                        borderColor: 'rgba(10, 10, 10, 0.9)',
                    }
                })}
            >
                <Tab.Screen name="Events" component={EventsScreen} />
                <Tab.Screen name="Discover" component={DiscoverScreen} />
                <Tab.Screen name="Notifications" component={NotificationsScreen} />
                <Tab.Screen name="Profile" component={ProfileScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    )
    
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    screen: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
    },
  });


export default AppBottomNav;