import { StatusBar } from "react-native";
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
} from "@expo-google-fonts/inter";

import Home from "./src/screens/home";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar barStyle={"light-content"} backgroundColor="#0D0D0D" />
      <Home />
    </>
  );
}
