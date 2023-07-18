
import { type CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'login.vue.ademaas',
  appName: 'login-vue-ademaas',
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
    },
  },
};

export default config;
