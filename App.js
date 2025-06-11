import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import WelcomeScreen from "./src/screen/WelcomeScreen";
import RouteStack from "./src/navigation/RouteStack";

export default function App() {
  return (
    <NavigationContainer>
      <RouteStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
