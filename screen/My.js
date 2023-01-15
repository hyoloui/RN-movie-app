import { useFocusEffect } from "@react-navigation/native";
import React, { useCallback } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { authService } from "../firebase";

export default function My({ navigation: { reset } }) {
  useFocusEffect(
    useCallback(() => {
      if (!authService.currentUser) {
        reset({
          index: 1,
          routes: [
            {
              name: "Tabs",
              params: {
                screen: "Movies",
              },
            },
            {
              name: "Stacks",
              params: {
                screen: "Login",
              },
            },
          ],
        });
        return;
      }
    }, [])
  );
  const signOut = () => {
    authService.signOut();
    reset({
      index: 1,
      routes: [
        {
          name: "Tabs",
          params: {
            screen: "Movies",
          },
        },
      ],
    });
    return;
  };
  return (
    <View>
      <Text>My</Text>
      <TouchableOpacity onPress={() => signOut()}>
        <Text>sign-out</Text>
      </TouchableOpacity>
    </View>
  );
}
