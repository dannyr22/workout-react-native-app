import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { FontAwesome, Entypo } from "@expo/vector-icons";

import PlannerScreen from "../screens/PlannerScreen";
import HomeScreen from "../screens/HomeScreen";
import WorkoutDetailScreen from "../screens/WorkoutDetailScreen";

export type RootStackParamList = {
  Root: undefined;
  Welcome: undefined;
  Home: undefined;
  Planner: undefined;
  WorkoutDetails: { slug: string };
};

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        component={BottomTabNavigator}
        name="Root"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={WorkoutDetailScreen}
        name="WorkoutDetails"
        options={{ title: "Workout Info'" }}
      />
    </Stack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator<RootStackParamList>();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator initialRouteName="Home">
      <BottomTab.Screen
        component={HomeScreen}
        name="Home"
        options={{
          unmountOnBlur: true,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" size={size} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        component={PlannerScreen}
        name="Planner"
        options={{
          unmountOnBlur: true,
          tabBarIcon: ({ color, size }) => (
            <Entypo name="add-to-list" size={size} color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
