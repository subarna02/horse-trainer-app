import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";

const StepTraining = () => {
  const [currentStep, setCurrentStep] = useState(1); // Track the current step
  const insets = useSafeAreaInsets();
  const navigate = useNavigation();
  const route = useRoute();

  // Extract training details from route params
  const { horseName, trainingType, duration, date, notes } = route.params;

  // Calculate total steps based on duration (1 step = 1 hour)
  const totalSteps = Math.ceil(duration / 60); // Convert minutes to hours

  // Instructions for each step
  const instructions = [
    "Warm up the horse with light walking exercises.",
    "Practice trotting in a straight line for 15 minutes.",
    "Introduce jumping exercises with low obstacles.",
    "Focus on endurance training with cantering for 20 minutes.",
    "Cool down the horse with slow walking and stretching.",
  ];

  const handleNextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      Alert.alert("Training Complete", "You have completed the training!");
      navigate.navigate("HomeTabs"); // Navigate back to HomeTabs or another screen
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
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
          onPress={() => navigate.goBack()} // Navigate back to the previous screen
        >
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Step Training</Text>
      </View>

      {/* Training Details */}
      <View style={styles.detailsSection}>
        <Text style={styles.detailText}>
          <Text style={styles.boldText}>Horse Name:</Text> {horseName}
        </Text>
        <Text style={styles.detailText}>
          <Text style={styles.boldText}>Training Type:</Text> {trainingType}
        </Text>
        <Text style={styles.detailText}>
          <Text style={styles.boldText}>Duration:</Text> {duration} minutes
        </Text>
        <Text style={styles.detailText}>
          <Text style={styles.boldText}>Date:</Text> {date}
        </Text>
        {notes ? (
          <Text style={styles.detailText}>
            <Text style={styles.boldText}>Notes:</Text> {notes}
          </Text>
        ) : null}
      </View>

      {/* Step Content */}
      <View style={styles.stepSection}>
        <Text style={styles.stepTitle}>Hour {currentStep}</Text>
        <Text style={styles.stepDescription}>
          {instructions[currentStep - 1] ||
            "No instruction available for this step."}
        </Text>
      </View>

      {/* Navigation Buttons */}
      <View style={styles.navigationButtons}>
        {/* Previous Button */}
        <TouchableOpacity
          style={[styles.navButton, currentStep === 1 && styles.disabledButton]}
          onPress={handlePreviousStep}
          disabled={currentStep === 1} // Disable only on the first step
        >
          <Text style={styles.navButtonText}>Previous</Text>
        </TouchableOpacity>

        {/* Next/Finish Button */}
        <TouchableOpacity style={styles.navButton} onPress={handleNextStep}>
          <Text style={styles.navButtonText}>
            {currentStep === totalSteps ? "Finish" : "Next"}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default StepTraining;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#F5F5F5",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#8B4513",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  backButton: {
    marginRight: 10,
  },
  backButtonText: {
    color: "#FFF",
    fontSize: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFF",
    flex: 1,
    textAlign: "center",
  },
  detailsSection: {
    marginBottom: 20,
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  detailText: {
    fontSize: 16,
    color: "#333",
    marginBottom: 5,
  },
  boldText: {
    fontWeight: "bold",
    color: "#8B4513",
  },
  stepSection: {
    alignItems: "center",
    marginBottom: 30,
    backgroundColor: "#FFF",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  stepTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  stepDescription: {
    fontSize: 16,
    color: "#666",
    lineHeight: 22,
    textAlign: "center",
  },
  navigationButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  navButton: {
    backgroundColor: "#8B4513",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    flex: 1,
    marginHorizontal: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  disabledButton: {
    backgroundColor: "#CCC",
  },
  navButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFF",
  },
});