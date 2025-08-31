import AsyncStorage from '@react-native-async-storage/async-storage';

export const getObject = async (key: string): Promise<any> => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  } catch (error) {
    console.error('Error getting object from AsyncStorage:', error);
    return null;
  }
};

export const setObject = async (key: string, value: any): Promise<void> => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error('Error setting object to AsyncStorage:', error);
  }
};