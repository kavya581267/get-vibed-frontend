import React from 'react';
import { Text } from 'react-native';
import { render } from '@testing-library/react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppSafeAreaView from '../AppSafeAreaView';

const mockInsets = {
  top: 44,
  bottom: 34,
  left: 0,
  right: 0,
};

jest.mock('react-native-safe-area-context', () => ({
  SafeAreaProvider: ({ children }: any) => children,
  SafeAreaView: ({ children, style, ...props }: any) => {
    const MockedSafeAreaView = require('react-native').View;
    return <MockedSafeAreaView style={style} {...props}>{children}</MockedSafeAreaView>;
  },
  useSafeAreaInsets: () => mockInsets,
}));

describe('AppSafeAreaView', () => {
  it('renders children correctly', () => {
    const { getByText } = render(
      <AppSafeAreaView>
        <Text>Test Content</Text>
      </AppSafeAreaView>
    );

    expect(getByText('Test Content')).toBeTruthy();
  });

  it('applies default background color', () => {
    const { getByTestId } = render(
      <AppSafeAreaView testID="safe-area">
        <Text>Test</Text>
      </AppSafeAreaView>
    );

    expect(getByTestId('safe-area')).toHaveStyle({ backgroundColor: '#fff' });
  });

  it('applies custom background color', () => {
    const { getByTestId } = render(
      <AppSafeAreaView backgroundColor="#000" testID="safe-area">
        <Text>Test</Text>
      </AppSafeAreaView>
    );

    expect(getByTestId('safe-area')).toHaveStyle({ backgroundColor: '#000' });
  });

  it('applies safe area insets as padding', () => {
    const { getByTestId } = render(
      <AppSafeAreaView testID="safe-area">
        <Text>Test</Text>
      </AppSafeAreaView>
    );

    expect(getByTestId('safe-area')).toHaveStyle({
      paddingTop: mockInsets.top,
      paddingBottom: mockInsets.bottom,
      paddingLeft: mockInsets.left,
      paddingRight: mockInsets.right,
    });
  });
});