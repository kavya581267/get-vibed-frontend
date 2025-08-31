import { API_BASE_URL, APP_ENV, DEBUG_MODE, LOG_LEVEL } from '@env';

interface EnvConfig {
  API_BASE_URL: string;
  APP_ENV: 'development' | 'staging' | 'production';
  DEBUG_MODE: boolean;
  LOG_LEVEL: 'debug' | 'info' | 'warn' | 'error';
}

const getEnvVars = (): EnvConfig => {
  return {
    API_BASE_URL: API_BASE_URL || 'https://dev-api.example.com',
    APP_ENV: (APP_ENV as 'development' | 'staging' | 'production') || 'development',
    DEBUG_MODE: DEBUG_MODE === 'true' || __DEV__,
    LOG_LEVEL: (LOG_LEVEL as 'debug' | 'info' | 'warn' | 'error') || 'debug',
  };
};

export const ENV = getEnvVars();
export const isDev = ENV.APP_ENV === 'development' || __DEV__;
export const isStaging = ENV.APP_ENV === 'staging';
export const isProd = ENV.APP_ENV === 'production';