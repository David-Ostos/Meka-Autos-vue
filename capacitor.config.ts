
import { type CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'meka.auto',
  appName: 'Meka Auto',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    GoogleAuth: {
      scopes: ["profile", "email"],
      serverClientId: "520770098242-hqplt1fvubopdp5o6csev8es3iu08l3o.apps.googleusercontent.com",
      forceCodeForRefreshToken: true,
      clientId: "520770098242-hqplt1fvubopdp5o6csev8es3iu08l3o.apps.googleusercontent.com",
      androidClientId:"520770098242-sd6ud262nemdpqsfcir4jbr4bkf6mne3.apps.googleusercontent.com"
    },
  },
};

export default config;
