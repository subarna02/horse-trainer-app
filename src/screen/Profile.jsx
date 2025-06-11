import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Profile = () => {
  const insets = useSafeAreaInsets();
  const navigate = useNavigation();
  const handleLogout = () => {
    Alert.alert("Logout", "Are you sure you want to logout?", [
      { text: "Cancel", style: "cancel" },
      { text: "Logout", onPress: () => console.log("User logged out") },
    ]);
  };

  const handleEditProfile = () => {
    navigate.navigate("EditProfile");
    console.log("Edit Profile Pressed");
    // Add navigation or logic for editing profile
  };

  const handleChangePassword = () => {
    console.log("Change Password Pressed");
    // Add navigation or logic for changing password
  };

  const handleNotificationSettings = () => {
    console.log("Notification Settings Pressed");
    // Add navigation or logic for notification settings
  };

  const handleLanguagePreferences = () => {
    console.log("Language Preferences Pressed");
    // Add navigation or logic for language preferences
  };

  const handleAboutApp = () => {
    navigate.navigate("About");
    console.log("About App Pressed");
    // Add navigation or logic for about the app
  };

  const handleHelpSupport = () => {
    console.log("Help & Support Pressed");
    // Add navigation or logic for help and support
  };

  return (
    <ScrollView
      contentContainerStyle={[styles.container, { paddingTop: insets.top }]}
    >
      {/* Profile Picture */}
      <View style={styles.profileSection}>
        <Image
          source={{
            uri: "https://via.placeholder.com/150", // Replace with user's profile picture URL
          }}
          style={styles.profileImage}
        />
        <Text style={styles.userName}>John Doe</Text>
        <Text style={styles.userEmail}>johndoe@example.com</Text>
      </View>

      {/* Options Section */}
      <View style={styles.optionsSection}>
        <TouchableOpacity style={styles.optionButton} onPress={handleEditProfile}>
          <Text style={styles.optionText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton} onPress={handleChangePassword}>
          <Text style={styles.optionText}>Change Password</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.optionButton}
          onPress={handleNotificationSettings}
        >
          <Text style={styles.optionText}>Notification Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.optionButton}
          onPress={handleLanguagePreferences}
        >
          <Text style={styles.optionText}>Language Preferences</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton} onPress={handleAboutApp}>
          <Text style={styles.optionText}>About the App</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton} onPress={handleHelpSupport}>
          <Text style={styles.optionText}>Help & Support</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton} onPress={handleLogout}>
          <Text style={styles.optionText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#F5F5F5",
    padding: 20,
  },
  profileSection: {
    alignItems: "center",
    marginBottom: 30,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
    backgroundColor: "#E0E0E0",
    borderWidth: 2,
    borderColor: "#8B4513",
  },
  userName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  userEmail: {
    fontSize: 16,
    color: "#666",
    marginTop: 5,
  },
  optionsSection: {
    marginTop: 20,
  },
  optionButton: {
    backgroundColor: "#8B4513",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 10,
  },
  optionText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFF",
  },
});