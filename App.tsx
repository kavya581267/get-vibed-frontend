import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import useAppFonts from './src/components/hooks/useAppFonts';
import { useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import RootNavigator from './src/navigation/RootNavigator';
import { GetVibedSplashScreen } from './src/screens/SplashScreen';
import { PaperProvider } from 'react-native-paper';
import MapWithVibers from './src/screens/map';

{/* SafeAreaProvider is a React context provider from the react-native-safe-area-context library.
It calculates and shares safe area inset values (like top, bottom, left, and right) for the current device.
It must be at the top level of your app so that components below it (like AppSafeAreaView) can access the inset values.
 AppSafeAreaView uses the useSafeAreaInsets() hook, and that hook only works when it’s inside a SafeAreaProvider */}
SplashScreen.preventAutoHideAsync();

export default function App() {
  const fontsLoaded = useAppFonts();
  const [showSplash, setShowSplash] = useState(true);
  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
      setTimeout(() => setShowSplash(false), 5000);
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
  
    <PaperProvider>
      <SafeAreaProvider>
        <View style={styles.container}>
        {showSplash ? <GetVibedSplashScreen /> : <RootNavigator />}
        </View>
      </SafeAreaProvider>
    </PaperProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#000',
  },
});
