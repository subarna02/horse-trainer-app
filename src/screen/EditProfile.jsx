import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons"; // Import Ionicons for the back icon
import { useNavigation } from "@react-navigation/native";

const EditProfile = () => {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("johndoe@example.com");
  const [profilePicture, setProfilePicture] = useState(
    "https://via.placeholder.com/150"
  ); // Replace with user's current profile picture URL
  const insets = useSafeAreaInsets();
  const navigate = useNavigation();

  const handleSaveChanges = () => {
    Alert.alert(
      "Profile Updated",
      `Name: ${name}\nEmail: ${email}\nProfile Picture: ${profilePicture}`
    );
    // Add logic to save the updated profile details
  };

  const handleChangeProfilePicture = () => {
    Alert.alert("Change Profile Picture", "Feature coming soon!");
    // Add logic to update the profile picture
  };

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
        <Text style={styles.headerTitle}>Edit Profile</Text>
      </View>

      {/* Profile Picture Section */}
      <View style={styles.profilePictureSection}>
        <Image
          source={{ uri: profilePicture }}
          style={styles.profileImage}
        />
        <TouchableOpacity
          style={styles.changePictureButton}
          onPress={handleChangeProfilePicture}
        >
          <Text style={styles.changePictureText}>Change Profile Picture</Text>
        </TouchableOpacity>
      </View>

      {/* Form Section */}
      <View style={styles.formSection}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          placeholderTextColor="#AAA"
          value={name}
          onChangeText={setName}
        />

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          placeholderTextColor="#AAA"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <TouchableOpacity style={styles.saveButton} onPress={handleSaveChanges}>
          <Text style={styles.saveButtonText}>Save Changes</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default EditProfile;

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
  profilePictureSection: {
    alignItems: "center",
    marginBottom: 30,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
    backgroundColor: "#E0E0E0",
    borderWidth: 2,
    borderColor: "#8B4513",
  },
  changePictureButton: {
    backgroundColor: "#8B4513",
    padding: 10,
    borderRadius: 10,
  },
  changePictureText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#FFF",
  },
  formSection: {
    backgroundColor: "#FFF",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, // For Android shadow
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
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
  saveButton: {
    backgroundColor: "#8B4513",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  saveButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFF",
  },
});