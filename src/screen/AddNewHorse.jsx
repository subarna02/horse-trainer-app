import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons"; // Import Ionicons for the back icon
import { useNavigation } from "@react-navigation/native";

const AddNewHorse = () => {
  const [horseName, setHorseName] = useState("");
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState("");
  const [notes, setNotes] = useState("");
  const insets = useSafeAreaInsets();
  const navigate = useNavigation();

  const handleAddHorse = () => {
    Alert.alert(
      "Horse Added",
      `Horse Name: ${horseName}\nBreed: ${breed}\nAge: ${age}\nNotes: ${notes}`
    );
    // Add logic to save the horse details
  };

  return (
    <ScrollView
      contentContainerStyle={[styles.container, { paddingTop: insets.top }]}
    >
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigate.goBack()} // Navigate back to HomeTabs
        >
          <Ionicons name="arrow-back" size={24} color="#FFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Add New Horse</Text>
      </View>

      {/* Form Section */}
      <View style={styles.formSection}>
        <Text style={styles.label}>Horse Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter horse's name"
          placeholderTextColor="#AAA"
          value={horseName}
          onChangeText={setHorseName}
        />

        <Text style={styles.label}>Breed</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter horse's breed"
          placeholderTextColor="#AAA"
          value={breed}
          onChangeText={setBreed}
        />

        <Text style={styles.label}>Age</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter horse's age"
          placeholderTextColor="#AAA"
          keyboardType="numeric"
          value={age}
          onChangeText={setAge}
        />

        <Text style={styles.label}>Notes</Text>
        <TextInput
          style={[styles.input, styles.notesInput]}
          placeholder="Enter additional notes (optional)"
          placeholderTextColor="#AAA"
          value={notes}
          onChangeText={setNotes}
          multiline
        />

        <TouchableOpacity style={styles.button} onPress={handleAddHorse}>
          <Text style={styles.buttonText}>Add Horse</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default AddNewHorse;

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
  notesInput: {
    height: 100, // Larger height for multiline input
    textAlignVertical: "top", // Align text to the top
  },
  button: {
    backgroundColor: "#8B4513", // Saddle brown theme
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFF",
  },
});