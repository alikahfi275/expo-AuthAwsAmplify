import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import {
  withAuthenticator,
  useAuthenticator,
} from "@aws-amplify/ui-react-native";

const LoginScreen = () => {
  const { user, signOut } = useAuthenticator();
  return (
    <View>
      <Pressable onPress={signOut}>
        <Text>
          Hello, {user?.signInDetails?.loginId}! Click here to sign out!
        </Text>
      </Pressable>
    </View>
  );
};

export default withAuthenticator(LoginScreen);
