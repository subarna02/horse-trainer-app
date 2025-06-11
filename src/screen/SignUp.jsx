import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const SignUp = () => {
  const navigator = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {/* Back Icon */}
        <TouchableOpacity style={styles.backIcon} onPress={() => navigator.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>

        <Text style={styles.title}>Create Account</Text>
        <Text style={styles.subtitle}>Sign up to get started</Text>
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          placeholderTextColor="#AAA"
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#AAA"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#AAA"
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="#AAA"
          secureTextEntry
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log("Sign Up pressed")}
        >
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <Text style={styles.footerText}>
          Already have an account? <Text style={styles.link}>Login</Text>
        </Text>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#8B451330", // Light gray background
    padding: 20,
  },
  card: {
    width: "100%",
    maxWidth: 400,
    padding: 20,
    borderRadius: 15,
    backgroundColor: "#FFF", // White background for the card
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5, // For Android shadow
    position: "relative", // To position the back icon
  },
  backIcon: {
    position: "absolute",
    top: 15,
    left: 15,
    zIndex: 10,
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 50,
    padding: 5,
    backgroundColor: "#FFF", // White background for the icon
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3, // For Android shadow
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    backgroundColor: "#F9F9F9",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    fontSize: 16,
    color: "#333",
    borderWidth: 1,
    borderColor: "#DDD",
  },
  button: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#8B4513", // Saddle brown color for horse theme
    alignItems: "center",
    marginBottom: 15,
  },
  buttonText: {
    fontSize: 18,
    color: "#FFF",
    fontWeight: "bold",
  },
  footerText: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
  },
  link: {
    color: "#8B4513", // Saddle brown color for the link
    fontWeight: "bold",
  },
});