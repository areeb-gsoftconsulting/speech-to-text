import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'speech-to-text',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
