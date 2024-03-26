import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "io.ionic.starter",
  appName: "MyFirstIonicApp",
  webDir: "dist",
  server: {
    androidScheme: "https",
  },
  android: {
    webContentsDebuggingEnabled: true, // false when prod
  },
  ios: {
    webContentsDebuggingEnabled: true, // false when prod
  },
};

export default config;
