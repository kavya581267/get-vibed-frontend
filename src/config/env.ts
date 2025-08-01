import { Platform } from 'react-native';

interface EnvConfig {
  API_BASE_URL: string;
  APP_ENV: 'development' | 'staging' | 'production';
  DEBUG_MODE: boolean;
  LOG_LEVEL: 'debug' | 'info' | 'warn' | 'error';
}

const getEnvVars = (): EnvConfig => {
  let Config: any;
  let Constants: any;
  
  try {
    // Try react-native-config first (for ejected/bare RN)
    Config = require('react-native-config').default;
  } catch {
    // Fallback to expo-constants (for Expo managed)
    try {
      Constants = require('expo-constants').default;
    } catch {
      // Neither available, use defaults
    }
  }

  // Get values from react-native-config or expo-constants
  const API_BASE_URL = Config?.API_BASE_URL || 'https://dev-api.example.com';
  const APP_ENV = Config?.APP_ENV || Constants?.expoConfig?.releaseChannel || 'development';
  const DEBUG_MODE = Config?.DEBUG_MODE === 'true' || __DEV__;
  const LOG_LEVEL = Config?.LOG_LEVEL || 'debug';

  return {
    API_BASE_URL,
    APP_ENV: APP_ENV as 'development' | 'staging' | 'production',
    DEBUG_MODE,
    LOG_LEVEL: LOG_LEVEL as 'debug' | 'info' | 'warn' | 'error',
  };
};

export const ENV = getEnvVars();
export const isDev = ENV.APP_ENV === 'development' || __DEV__;
export const isStaging = ENV.APP_ENV === 'staging';
export const isProd = ENV.APP_ENV === 'production';