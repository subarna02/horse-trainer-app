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
import DateTimePicker from "@react-native-community/datetimepicker";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons"; // Import Ionicons for the back icon
import { useNavigation } from "@react-navigation/native";

const StartTraining = () => {
  const [horseName, setHorseName] = useState("");
  const [trainingType, setTrainingType] = useState("");
  const [duration, setDuration] = useState("");
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [notes, setNotes] = useState("");
  const insets = useSafeAreaInsets();
  const navigate = useNavigation();
  const handleStartTraining = () => {
    if (!horseName || !trainingType || !duration) {
      Alert.alert("Error", "Please fill out all required fields.");
      return;
    }
  
    navigate.navigate("StepTraining", {
      horseName,
      trainingType,
      duration,
      date: date.toDateString(),
      notes,
    });
  };

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  return (
    <ScrollView
      contentContainerStyle={[styles.container, { paddingTop: insets.top }]}
    >
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => 
            navigate.navigate("HomeTabs") // Navigate back to HomeTabs
          }
        >
          <Ionicons name="arrow-back" size={24} color="#FFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Start Training</Text>
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

        <Text style={styles.label}>Training Type</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter training type (e.g., Jumping, Endurance)"
          placeholderTextColor="#AAA"
          value={trainingType}
          onChangeText={setTrainingType}
        />

        <Text style={styles.label}>Duration (in minutes)</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter duration"
          placeholderTextColor="#AAA"
          keyboardType="numeric"
          value={duration}
          onChangeText={setDuration}
        />

        <Text style={styles.label}>Date</Text>
        <TouchableOpacity
          style={styles.datePickerButton}
          onPress={() => setShowDatePicker(true)}
        >
          <Text style={styles.datePickerText}>{date.toDateString()}</Text>
        </TouchableOpacity>
        {showDatePicker && (
          <DateTimePicker
            value={date}
            mode="date"
            display="default"
            onChange={handleDateChange}
          />
        )}

        <Text style={styles.label}>Notes</Text>
        <TextInput
          style={[styles.input, styles.notesInput]}
          placeholder="Enter additional notes (optional)"
          placeholderTextColor="#AAA"
          value={notes}
          onChangeText={setNotes}
          multiline
        />

        <TouchableOpacity style={styles.button} onPress={handleStartTraining}>
          <Text style={styles.buttonText}>Start Training</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default StartTraining;

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
  datePickerButton: {
    backgroundColor: "#F9F9F9",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#DDD",
  },
  datePickerText: {
    fontSize: 16,
    color: "#333",
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
