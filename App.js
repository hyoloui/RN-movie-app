import Stacks from "./navigation/Stacks";
import { StatusBar } from "expo-status-bar";
import { Text, TouchableOpacity, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
    return (
        <NavigationContainer>
            <Stacks />
        </NavigationContainer>
    );
}
