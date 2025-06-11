import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const navigate = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Welcome Back</Text>
        <Text style={styles.subtitle}>Login to continue</Text>
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
        <TouchableOpacity
          style={styles.button}
          onPress={() => 
            navigate.navigate("HomeTabs") 
          }
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <Text style={styles.footerText}>
          Don't have an account? 
          <TouchableOpacity
            style={{ marginLeft: 5 }}
            onPress={() => navigate.navigate("SignUp")}
          >
            <Text style={styles.link}> Sign Up</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </View>
  );
};

export default Login;

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
