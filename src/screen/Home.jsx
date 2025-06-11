import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const insets = useSafeAreaInsets();
  const navigate = useNavigation();
  return (
    <ScrollView
      contentContainerStyle={[
        styles.container,
        { paddingTop: insets.top, flexGrow: 1 },
      ]}
    >
      {/* User Information Section */}
      <View style={styles.userInfoSection}>
        <Image
          source={{
            uri: "https://via.placeholder.com/100", // Replace with user's profile picture URL
          }}
          style={styles.profileImage}
        />
        <View style={styles.userDetails}>
          <Text style={styles.greeting}>Hello, John Doe!</Text>
          <Text style={styles.userSubtitle}>Welcome back to Horse Trainer</Text>
        </View>
      </View>

      {/* Welcome Section */}
      <View style={styles.welcomeSection}>
        <Text style={styles.welcomeText}>
          Welcome to the Horse Trainer App!
        </Text>
        <Text style={styles.subtitle}>
          Manage your training sessions, track progress, and more.
        </Text>
      </View>

      {/* Features Section */}
      <View style={styles.featureSection}>
        <TouchableOpacity
          style={styles.featureCard}
          onPress={() => navigate.navigate("Training")}
        >
          <Text style={styles.featureText}>Start Training</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.featureCard}
          onPress={() => navigate.navigate("ViewProgress")}
        >
          <Text style={styles.featureText}>View Progress</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.featureCard}
        onPress={() => navigate.navigate("Sessions")}
        >
          <Text style={styles.featureText}>Schedule Sessions</Text>
        </TouchableOpacity>
      </View>

      {/* Statistics Section */}
      <View style={styles.statisticsSection}>
        <Text style={styles.sectionTitle}>Statistics</Text>
        <View style={styles.statCard}>
          <Text style={styles.statText}>Total Training Hours: 120</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statText}>Horses Trained: 8</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statText}>Upcoming Sessions: 5</Text>
        </View>
      </View>

      {/* Recent Activities Section */}
      <View style={styles.recentSection}>
        <Text style={styles.sectionTitle}>Recent Activities</Text>
        <View style={styles.activityCard}>
          <Text style={styles.activityText}>
            Training Session: Jumping Practice
          </Text>
          <Text style={styles.activityDate}>June 10, 2025</Text>
        </View>
        <View style={styles.activityCard}>
          <Text style={styles.activityText}>
            Training Session: Endurance Training
          </Text>
          <Text style={styles.activityDate}>June 9, 2025</Text>
        </View>
      </View>

      {/* Upcoming Events Section */}
      <View style={styles.eventsSection}>
        <Text style={styles.sectionTitle}>Upcoming Events</Text>
        <View style={styles.eventCard}>
          <Text style={styles.eventText}>Horse Show: June 15, 2025</Text>
        </View>
        <View style={styles.eventCard}>
          <Text style={styles.eventText}>Training Workshop: June 20, 2025</Text>
        </View>
      </View>

      {/* Tips Section */}
      <View style={styles.tipsSection}>
        <Text style={styles.sectionTitle}>Tips for Training</Text>
        <View style={styles.tipCard}>
          <Text style={styles.tipText}>
            Always warm up your horse before training.
          </Text>
        </View>
        <View style={styles.tipCard}>
          <Text style={styles.tipText}>
            Maintain a consistent training schedule.
          </Text>
        </View>
      </View>

      {/* Quick Actions Section */}
      <View style={styles.quickActionsSection}>
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <TouchableOpacity style={styles.quickActionButton} onPress={() => navigate.navigate("AddHorse")}>
          <Text style={styles.quickActionText}>Add New Horse</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.quickActionButton} onPress={() => navigate.navigate("ViewAllHorses")}>
          <Text style={styles.quickActionText}>View All Horses</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#F5F5F5",
    padding: 20,
  },
  userInfoSection: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
    backgroundColor: "#E0E0E0",
    resizeMode: "cover",
    borderWidth: 2,
    borderColor: "#8B4513",
  },
  userDetails: {
    flex: 1,
  },
  greeting: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  userSubtitle: {
    fontSize: 14,
    color: "#666",
    marginTop: 5,
  },
  welcomeSection: {
    marginBottom: 20,
    alignItems: "center",
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
  },
  featureSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  featureCard: {
    flex: 1,
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginHorizontal: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  featureText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#8B4513",
  },
  statisticsSection: {
    marginTop: 30,
  },
  statCard: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  statText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  recentSection: {
    marginTop: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  activityCard: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  activityText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  activityDate: {
    fontSize: 14,
    color: "#666",
    marginTop: 5,
  },
  eventsSection: {
    marginTop: 30,
  },
  eventCard: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  eventText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  tipsSection: {
    marginTop: 30,
  },
  tipCard: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  tipText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  quickActionsSection: {
    marginTop: 30,
  },
  quickActionButton: {
    backgroundColor: "#8B4513",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 10,
  },
  quickActionText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFF",
  },
});
