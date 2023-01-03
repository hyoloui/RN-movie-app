import React from "react";
import Movies from "../screen/Movies";
import My from "../screen/My";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
// bottom-tab-navigator
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default function Tabs() {
    return (
        <Tab.Navigator
            sceneContainerStyle={{ backgroundColor: "gray" }}
            screenOptions={{}}
        >
            <Tab.Screen
                options={{
                    title: "영화",
                    headerTitleAlign: "center", //Android == left, IOS == center 이므로, 통일을 위해 설정
                    tabBarLabel: "Movies",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                            name="movie"
                            size={size}
                            color={color}
                        />
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
