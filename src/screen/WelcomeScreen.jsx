import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const WelcomeScreen = () => {
  const navigate = useNavigation();
  return (
    <ImageBackground
      source={{
        uri: "https://images.unsplash.com/photo-1569701049604-820d8e89648e?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      }} // Replace with a valid image URL
      style={styles.background}
    >
      <LinearGradient
        colors={["rgba(0,0,0,0.6)", "rgba(0,0,0,0.3)", "transparent"]}
        style={styles.gradient}
      >
        <View style={styles.content}>
          <Text style={styles.title}>Welcome to Horse Trainer</Text>
          <Text style={styles.subtitle}>
            Your journey to train and care for your horse starts here!
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => 
              navigate.navigate("Login") // Navigate to the Login screen
            }
          >
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  gradient: {
    flex: 1,
    justifyContent: "flex-end", // Align content to the bottom
    alignItems: "center",
    paddingBottom: 50, // Add some padding at the bottom
  },
  content: {
    alignItems: "center",
    paddingHorizontal: 20,
    width: "100%", // Ensure content spans the full width
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FFF",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: "#FFF",
    textAlign: "center",
    marginBottom: 30,
  },
  button: {
    borderWidth: 1,
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#8B4513", // Saddle brown color for horse theme
    borderColor: "#8B4513",
    width: "100%", // Full width
    alignItems: "center",
    marginHorizontal: 20, // Add horizontal margin for spacing
  },
  buttonText: {
    fontSize: 18,
    color: "#FFF",
    fontWeight: "bold",
  },
});
