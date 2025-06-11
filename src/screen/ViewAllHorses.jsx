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

const ViewAllHorses = () => {
  const insets = useSafeAreaInsets();
  const navigate = useNavigation();

  // Sample data for horses
  const horses = [
    {
      id: 1,
      name: "Thunder",
      breed: "Arabian",
      age: 5,
      notes: "Excellent endurance and speed.",
    },
    {
      id: 2,
      name: "Lightning",
      breed: "Thoroughbred",
      age: 7,
      notes: "Great for jumping competitions.",
    },
    {
      id: 3,
      name: "Shadow",
      breed: "Quarter Horse",
      age: 4,
      notes: "Calm temperament, ideal for beginners.",
    },
  ];

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      {/* Header */}
      {/* <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigate.navigate("HomeTabs")} // Navigate back to HomeTabs
        >
          <Ionicons name="arrow-back" size={24} color="#FFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>View All Horses</Text>
      </View> */}

      {/* Horses List Section */}   
      <ScrollView contentContainerStyle={styles.horsesSection}>
        {horses.map((horse) => (
          <View key={horse.id} style={styles.horseCard}>
            <Text style={styles.horseText}>
              <Text style={styles.boldText}>Name:</Text> {horse.name}
            </Text>
            <Text style={styles.horseText}>
              <Text style={styles.boldText}>Breed:</Text> {horse.breed}
            </Text>
            <Text style={styles.horseText}>
              <Text style={styles.boldText}>Age:</Text> {horse.age} years
            </Text>
            <Text style={styles.horseText}>
              <Text style={styles.boldText}>Notes:</Text> {horse.notes}
            </Text>
          </View>
        ))}
      </ScrollView>
      <TouchableOpacity
        onPress={() => navigate.navigate("AddHorse")} // Navigate to AddNewHorse screen
        style={{
          position: "absolute",
          bottom: 20,
          right: 20,
          height: 50,
          width: 50,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#8B4513", // Saddle brown theme
          borderRadius: 50,
          padding: 10,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 4,
          elevation: 5, // For Android shadow
        }}
      >
        <Text>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ViewAllHorses;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#F5F5F5", // Light gray background
    padding: 20,
    position: "relative", // For absolute positioning of the add button
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
  horsesSection: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 15,
    textAlign: "center", // Center the section title
  },
  horseCard: {
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
  horseText: {
    fontSize: 16,
    color: "#333",
    marginBottom: 5,
    lineHeight: 22, // Improve readability
  },
  boldText: {
    fontWeight: "bold",
    color: "#8B4513", // Saddle brown for bold text
  },
});
