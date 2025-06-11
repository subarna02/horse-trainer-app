import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "../screen/WelcomeScreen";
import Login from "../screen/Login";
import SignUp from "../screen/SignUp";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screen/Home";
import Profile from "../screen/Profile";
import StartTraining from "../screen/StartTraining";
import ViewProgress from "../screen/ViewProgress";
import ScheduleSessions from "../screen/ScheduleSessions";
import AddNewHorse from "../screen/AddNewHorse";
import ViewAllHorses from "../screen/ViewAllHorses";
import EditProfile from "../screen/EditProfile";
import About from "../screen/About";
import StepTraining from "../screen/StepTraining";
import { Ionicons } from "@expo/vector-icons"; // Import Ionicons for tab icons

const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#FFF",
          borderTopWidth: 1,
          borderTopColor: "#DDD",
          height: 60,
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Horses") {
            iconName = focused ? "paw" : "paw-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#8B4513", // Active tab color
        tabBarInactiveTintColor: "#666", // Inactive tab color
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Horses" component={ViewAllHorses} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};
const RouteStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="HomeTabs" component={HomeTabs} />
      <Stack.Screen name="Training" component={StartTraining} />
      <Stack.Screen name="ViewProgress" component={ViewProgress} />
      <Stack.Screen name="Sessions" component={ScheduleSessions} />
      <Stack.Screen name="AddHorse" component={AddNewHorse} />
      <Stack.Screen name="ViewAllHorses" component={ViewAllHorses} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="StepTraining" component={StepTraining
        
      } />
      {/* Add more screens as needed */}
    </Stack.Navigator>
  );
};

export default RouteStack;

const styles = StyleSheet.create({});
