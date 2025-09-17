import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ProgressBar as PaperProgressBar } from 'react-native-paper';
import { rsHeight, Spacing } from '../theme/responsive';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, totalSteps }) => {
  const progress = currentStep / totalSteps;
  
  return (
    <View style={{paddingTop:Spacing.xs}}>
      <PaperProgressBar 
        progress={progress} 
        color="#00c853" 
        style={styles.progressBar}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  
  progressBar: {
    height: rsHeight(6),
    backgroundColor: '#333',
  },
});