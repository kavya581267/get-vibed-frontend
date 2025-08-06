import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppSafeAreaView from './src/components/AppSafeAreaView';
import { rf, s, vs } from './src/theme/responsive';
import { typography } from './src/theme/typography';
import { theme } from './src/theme/theme';
import EventFeed from './src/components/EventFeed';

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

  return (

    <SafeAreaProvider>
      <AppSafeAreaView >
        <View style={styles.container}>
          <EventFeed
            events={sampleEvents}
            onEventPress={(id) => console.log('Event pressed:', id)}
            onLike={(id) => console.log('Liked:', id)}
            onComment={(id) => console.log('Comment:', id)}
            onShare={(id) => console.log('Share:', id)}
          />
        </View>

      </AppSafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
