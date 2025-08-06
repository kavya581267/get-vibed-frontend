import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppSafeAreaView from './src/components/AppSafeAreaView';
import { rf, s, vs } from './src/theme/responsive';
import { typography } from './src/theme/typography';
import { theme } from './src/theme/theme';
import EventFeed from './src/components/EventFeed';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import CustomBottomTabBar from './src/components/CustomBottomTabBar';
import Icon from 'react-native-vector-icons/Ionicons';

{/* SafeAreaProvider is a React context provider from the react-native-safe-area-context library.
It calculates and shares safe area inset values (like top, bottom, left, and right) for the current device.
It must be at the top level of your app so that components below it (like AppSafeAreaView) can access the inset values.
 AppSafeAreaView uses the useSafeAreaInsets() hook, and that hook only works when it’s inside a SafeAreaProvider */}
export default function App() {
  const sampleEvents = [
    {
      id: '1',
      title: 'PRIME FRIDAY',
      subtitle: 'Pool Party',
      imageSource: require('./assets/test1.png'),
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
      imageSource: require('./assets/test2.png'),
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
      imageSource: require('./assets/test3.jpg'),
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

  const Tab = createBottomTabNavigator();

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

  return (

    <SafeAreaProvider>
      <AppSafeAreaView >

        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              headerShown: false,
              tabBarIcon: ({ focused, color='white', size }) => {
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
              tabBarInactiveTintColor: '#888',
              tabBarStyle: { 
                position: 'absolute',
                bottom: 15,
                backgroundColor: 'rgba(10, 10, 10, 0.9)',
                borderRadius: 40,
                height: 60,
                width: '90%',
                marginHorizontal: '5%',
               
                paddingBottom: 20,
                elevation: 10,
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

      </AppSafeAreaView>
    </SafeAreaProvider>
  );
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
