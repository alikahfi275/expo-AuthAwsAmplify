// In App.js in a new project

import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/HomeScreen";
import LoginScreen from "./src/LoginScreen";
import { ThemeProvider } from "@aws-amplify/ui-react-native";
import { Amplify } from "aws-amplify";
import amplifyconfig from "./src/amplifyconfiguration.json";
import { SignIn } from "@aws-amplify/ui-react-native/dist/Authenticator/Defaults";
import SignInScreen from "./src/SignInScreen";
Amplify.configure(amplifyconfig);

const Stack = createNativeStackNavigator();

function App() {
  const theme = {
    tokens: {
      colors: {
        font: {
          primary: "black",
        },
      },
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="SignIn" component={SignInScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default App;
