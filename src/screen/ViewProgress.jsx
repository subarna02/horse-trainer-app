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

const ViewProgress = () => {
  const insets = useSafeAreaInsets();
  const navigate = useNavigation();

  // Sample data for training sessions
  const trainingSessions = [
    {
      id: 1,
      horseName: "Thunder",
      trainingType: "Jumping",
      duration: "45 minutes",
      date: "June 10, 2025",
      notes: "Focused on high jumps.",
    },
    {
      id: 2,
      horseName: "Lightning",
      trainingType: "Endurance",
      duration: "60 minutes",
      date: "June 9, 2025",
      notes: "Improved stamina.",
    },
    {
      id: 3,
      horseName: "Shadow",
      trainingType: "Dressage",
      duration: "30 minutes",
      date: "June 8, 2025",
      notes: "Practiced basic movements.",
    },
  ];

  return (
    <ScrollView
      contentContainerStyle={[styles.container, { paddingTop: insets.top }]}
    >
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigate.navigate("HomeTabs")} // Navigate back to HomeTabs
        >
          <Ionicons name="arrow-back" size={24} color="#FFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>View Progress</Text>
      </View>

      {/* Training Sessions Section */}
      <View style={styles.sessionsSection}>
        <Text style={styles.sectionTitle}>Training Sessions</Text>
        {trainingSessions?.map((session) => (
          <View key={session.id} style={styles.sessionCard}>
            <View style={styles.cardHeader}>
              <Ionicons name="horse" size={24} color="#8B4513" />
              <Text style={styles.cardTitle}>{session.horseName}</Text>
            </View>
            <View style={styles.cardContent}>
              <Text style={styles.sessionText}>
                <Ionicons name="fitness" size={16} color="#8B4513" />{" "}
                <Text style={styles.boldText}>Training Type:</Text> {session.trainingType}
              </Text>
              <Text style={styles.sessionText}>
                <Ionicons name="time" size={16} color="#8B4513" />{" "}
                <Text style={styles.boldText}>Duration:</Text> {session.duration}
              </Text>
              <Text style={styles.sessionText}>
                <Ionicons name="calendar" size={16} color="#8B4513" />{" "}
                <Text style={styles.boldText}>Date:</Text> {session.date}
              </Text>
              <Text style={styles.sessionText}>
                <Ionicons name="document-text" size={16} color="#8B4513" />{" "}
                <Text style={styles.boldText}>Notes:</Text> {session.notes}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default ViewProgress;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#F5F5F5", // Light gray background
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
  sessionsSection: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 15,
    textAlign: "center", // Center the section title
  },
  sessionCard: {
    backgroundColor: "#FFF",
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, // For Android shadow
    borderLeftWidth: 5,
    borderLeftColor: "#8B4513", // Accent color for the card
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#8B4513", // Saddle brown for the title
    marginLeft: 10,
  },
  cardContent: {
    marginTop: 10,
  },
  sessionText: {
    fontSize: 16,
    color: "#333",
    marginBottom: 8,
    lineHeight: 22, // Improve readability
  },
  boldText: {
    fontWeight: "bold",
    color: "#8B4513", // Saddle brown for bold text
  },
});