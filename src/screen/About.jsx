import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons"; // Import Ionicons for the back icon
import { useNavigation } from "@react-navigation/native";

const About = () => {
  const insets = useSafeAreaInsets();
  const navigate = useNavigation();

  return (
    <ScrollView
      contentContainerStyle={[styles.container, { paddingTop: insets.top }]}
    >
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigate.goBack()} // Navigate back to the previous screen
        >
          <Ionicons name="arrow-back" size={24} color="#FFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>About the App</Text>
      </View>

      {/* About Section */}
      <View style={styles.aboutSection}>
        <Text style={styles.aboutTitle}>Horse Trainer App</Text>
        <Text style={styles.aboutText}>
          The Horse Trainer App is designed to help horse trainers manage their
          training sessions, track progress, and organize schedules. Whether
          you're a professional trainer or a horse enthusiast, this app is your
          go-to tool for effective horse training management.
        </Text>
      </View>

      {/* App Details Section */}
      <View style={styles.detailsSection}>
        <Text style={styles.detailItem}>
          <Text style={styles.boldText}>Version:</Text> 1.0.0
        </Text>
        <Text style={styles.detailItem}>
          <Text style={styles.boldText}>Developed By:</Text> Subarna Keshari Sutar
        </Text>
        <Text style={styles.detailItem}>
          <Text style={styles.boldText}>Contact:</Text> support@horsetrainerapp.com
        </Text>
      </View>

      {/* Footer Section */}
      <View style={styles.footerSection}>
        <Text style={styles.footerText}>
          © 2025 Horse Trainer App. All rights reserved.
        </Text>
      </View>
    </ScrollView>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#F5F5F5",
    padding: 20,
  },
  header: {
    flexDirection: "row", // Align back button and title horizontally
    alignItems: "center",
    backgroundColor: "#8B4513", // Saddle brown theme
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, // For Android shadow
  },
  backButton: {
    marginRight: 10, // Space between the back button and the title
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFF",
    flex: 1, // Push the title to the center
    textAlign: "center",
  },
  aboutSection: {
    marginBottom: 20,
  },
  aboutTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
    textAlign: "center",
  },
  aboutText: {
    fontSize: 16,
    color: "#666",
    lineHeight: 22,
    textAlign: "justify",
  },
  detailsSection: {
    marginTop: 20,
    marginBottom: 20,
  },
  detailItem: {
    fontSize: 16,
    color: "#333",
    marginBottom: 10,
  },
  boldText: {
    fontWeight: "bold",
    color: "#8B4513",
  },
  footerSection: {
    marginTop: 20,
    alignItems: "center",
  },
  footerText: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
  },
});