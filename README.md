# Get Vibed Frontend

React Native app with TypeScript, environment configuration, and responsive design.

## Setup

```bash
npm install
```

## Development

### Run with Different Environments

**Expo Managed:**
```bash
npm run start:dev      # Development environment
npm run android:dev    # Android with dev env
npm run ios:dev        # iOS with dev env
npm run start:staging  # Staging environment
npm start              # Default environment
```

**Ejected React Native:**
```bash
ENVFILE=.env.development npx react-native run-android
ENVFILE=.env.staging npx react-native run-ios
ENVFILE=.env.production npx react-native run-android
```

## Environment Configuration

- `.env` - Default/development config
- `.env.development` - Development settings
- `.env.staging` - Staging settings  
- `.env.production` - Production settings

```typescript
import { ENV, isDev } from './src/config/env';

// Usage
fetch(`${ENV.API_BASE_URL}/users`);
if (isDev) console.log('Debug mode');
```

## Testing

```bash
npm test              # Run tests
npm run test:watch    # Watch mode
```

## Build

```bash
expo publish --release-channel staging
expo publish --release-channel production
```