import React from "react";
import { LinearGradient } from "expo-linear-gradient";

interface GradientBackgroundProps {
  children: React.ReactNode;
}

export const GradientBackground: React.FC<GradientBackgroundProps> = ({ children }) => (
  <LinearGradient
    colors={["#021d15", "#000000", "#000000"]}
    locations={[0, 0.5, 1]}
    start={{ x: 0, y: 0 }}
    end={{ x: 0, y: 1 }}
    style={{ flex: 1 }}
  >
    {children}
  </LinearGradient>
);