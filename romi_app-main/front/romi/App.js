import React from "react";
import { View } from "react-native";
import Chat from './chatroom/Chat'
// import HomeScreen from "./screens/HomeScreen"
// import RomiApp from "./appFolder/RomiApp";
import UserSignIn from "./screens/UserSignIn";
import HomeScreen from "./screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={UserSignIn}
        ></Stack.Screen>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={HomeScreen}
        ></Stack.Screen>
        <Stack.Screen
          options={{ headerShown: true }}
          name="ChatRoom"
          component={Chat}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
