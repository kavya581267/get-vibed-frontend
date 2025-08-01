# Environment Configuration

## Setup for Different React Native Types

### Expo Managed Workflow
- Uses `expo-constants` to read release channel
- Environment switching via Expo release channels

### Ejected/Bare React Native
- Uses `react-native-config` to read .env files
- Requires native linking (auto-linked in RN 0.60+)

## Environment Files

- `.env` - Default/development (committed)
- `.env.staging` - Staging config (gitignored)
- `.env.production` - Production config (gitignored)

## Usage

```typescript
import { ENV, isDev, isProd } from './src/config/env';

// API calls
fetch(`${ENV.API_BASE_URL}/users`);

// Conditional logic
if (isDev) {
  console.log('Development mode');
}
```

## Local Development

### Expo Managed
```bash
# Development environment
npm run start:dev
npm run android:dev
npm run ios:dev

# Staging environment
npm run start:staging
npm run android:staging
npm run ios:staging

# Default (uses .env)
npm start
npm run android
npm run ios
```

### Ejected React Native
```bash
# Development
ENVFILE=.env.development npx react-native run-android
ENVFILE=.env.development npx react-native run-ios

# Staging
ENVFILE=.env.staging npx react-native run-android
ENVFILE=.env.staging npx react-native run-ios

# Production
ENVFILE=.env.production npx react-native run-android
ENVFILE=.env.production npx react-native run-ios
```

## Build Commands

### Expo
```bash
expo publish --release-channel staging
expo publish --release-channel production
```