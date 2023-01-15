import React from "react";
import Movies from "../screen/Movies";
import My from "../screen/My";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
// bottom-tab-navigator
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useColorScheme } from "react-native";
import { DARK_COLOR, GREEN_COLOR, YELLOW_COLOR } from "../colors";

const Tab = createBottomTabNavigator();

export default function Tabs() {
  const isDark = useColorScheme() === "dark";

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelPosition: "beside-icon",
        tabBarLabel: "Movies",
        tabBarActiveTintColor: isDark ? YELLOW_COLOR : GREEN_COLOR,
        headerTintColor: isDark ? YELLOW_COLOR : GREEN_COLOR,
      }}
      sceneContainerStyle={{
        backgroundColor: isDark ? DARK_COLOR : "white",
      }}
    >
      <Tab.Screen
        options={{
          title: "영화",
          headerTitleAlign: "center", //Android == left, IOS == center 이므로, 통일을 위해 설정
          tabBarLabel: "Movies",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="movie" size={size} color={color} />
          ),
        }}
        name="Movies"
        component={Movies}
      />
      <Tab.Screen
        options={{
          title: "마이페이지",
          tabBarLabel: "MY",
          tabBarBadge: "Hi",
          tabBarIcon: ({ color, size }) => (
            <Feather name="user" size={size} color={color} />
          ),
        }}
        name="My"
        component={My}
      />
    </Tab.Navigator>
  );
}
