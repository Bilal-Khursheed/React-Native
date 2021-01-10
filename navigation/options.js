import React from "react";
import { Easing, Animated, Dimensions } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";

// screens

import Onboarding from "../screens/Onboarding";

import Register from "../screens/Register";
import Login from "../screens/login";

const { width } = Dimensions.get("screen");

const Stack = createStackNavigator();

export default function OnboardingStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="none">
      <Stack.Screen
        name="Onoarding"
        component={Login}
        // option={{
        //   headerTransparent: true,
        // }}
      />
      {/* <Stack.Screen name="Login" component={Login} /> */}
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
}
