import React, { useEffect, useRef } from "react";
import { Animated } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

interface GradientBackgroundProps {
  children: React.ReactNode;
}

export const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

export const SplashGradientBackground: React.FC<GradientBackgroundProps> = ({ children }) => {
  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animation, {
          toValue: 1,
          duration: 4000,
          useNativeDriver: false, // must be false for color animation
        }),
        Animated.timing(animation, {
          toValue: 0,
          duration: 4000,
          useNativeDriver: false,
        }),
      ])
    ).start();
  }, []);

  // Animate between two sets of gradient colors
  const color1 = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ["#021d15", "#034732"], // dark teal → greenish
  });

  const color2 = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ["#000000", "#021d15"], // black → teal
  });

  const color3 = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ["#000000", "#111111"], // black → softer black
  });

  return (
    <AnimatedLinearGradient
      colors={[color1 as any, color2 as any, color3 as any]}
      locations={[0, 0.5, 1]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={{ flex: 1 }}
    >
      {children}
    </AnimatedLinearGradient>
  );
};





{/*
  import React, { useEffect, useRef } from "react";
import { Animated } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

interface GradientBackgroundProps {
  children: React.ReactNode;
}

export const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

export const SplashGradientBackground: React.FC<GradientBackgroundProps> = ({ children }) => {
  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animation, {
          toValue: 1,
          duration: 4000,
          useNativeDriver: false,
        }),
        Animated.timing(animation, {
          toValue: 0,
          duration: 4000,
          useNativeDriver: false,
        }),
      ])
    ).start();
  }, []);

  // Static dark tones
  const base1 = "#021d15";
  const base2 = "#000000";

  // Green that fades in and out
  const greenFade = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ["rgba(3, 71, 50, 0)", "rgba(3, 71, 50, 1)"], // transparent → green → transparent
  });

  return (
    <AnimatedLinearGradient
      colors={[base1, greenFade as any, base2]}
      locations={[0, 0.5, 1]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={{ flex: 1 }}
    >
      {children}
    </AnimatedLinearGradient>
  );
};

  */} 