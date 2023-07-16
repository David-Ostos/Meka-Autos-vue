
import { CapacitorConfig } from '@capacitor/cli';

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
      serverClientId: "1068404641306-tue5bp8ad2jka12gv3gcg82vjj27epc8.apps.googleusercontent.com",
      forceCodeForRefreshToken: true,
    },
  },
};

export default config;
