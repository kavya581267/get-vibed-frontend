import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

function AnimatedTabIcon({ focused, name, size, color }) {
    const scaleAnim = useRef(new Animated.Value(1)).current;
  
    useEffect(() => {
      Animated.spring(scaleAnim, {
        toValue: focused ? 1.2 : 1,
        useNativeDriver: true,
      }).start();
    }, [focused]);
  
    return (
      <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
        <Icon name={name} size={size} color={color} />
      </Animated.View>
    );
  }

  export default AnimatedTabIcon;