import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppSafeAreaView from './src/components/AppSafeAreaView';
import { rf, s, vs } from './src/theme/responsive';
import { typography } from './src/theme/typography';
{/* SafeAreaProvider is a React context provider from the react-native-safe-area-context library.
It calculates and shares safe area inset values (like top, bottom, left, and right) for the current device.
It must be at the top level of your app so that components below it (like AppSafeAreaView) can access the inset values.
 AppSafeAreaView uses the useSafeAreaInsets() hook, and that hook only works when it’s inside a SafeAreaProvider */}
export default function App() {
  return (

    <SafeAreaProvider>
      <AppSafeAreaView>
        <View>
         <Text style={typography.heading1}>Heading Open up App.tsx to start working  your app!</Text>
         <Text style={typography.heading2}>Sub Heading</Text>
          <Text style={typography.bodyText}>Open up App.tsx to start working  your app!</Text>
          <Text style={typography.caption}>Caption</Text>
        </View>
      </AppSafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
