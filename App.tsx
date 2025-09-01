import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppSafeAreaView from './src/components/AppSafeAreaView';
import { GradientBackground } from './src/components/GradientBackground';
import useAppFonts from './src/components/hooks/useAppFonts';
import { useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import SignUpScreen from './src/screens/SignUp';
import { Splash } from './src/screens/SplashScreen';
import { MobileVerificationScreen } from './src/screens/MobileVerification';
import { Otp } from './src/screens/Otp';
import { EmailVerification } from './src/screens/EmailVerification';
import { Interests } from './src/screens/Interests';
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
      setTimeout(() => setShowSplash(false), 2000);
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (

    <SafeAreaProvider>
      <View style={styles.container}>
        <GradientBackground>
          <AppSafeAreaView >
            {showSplash ? <Splash /> : <Interests />}
          </AppSafeAreaView>
        </GradientBackground>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});
