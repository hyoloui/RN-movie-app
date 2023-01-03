import { StatusBar } from "expo-status-bar";
import { Text, TouchableOpacity, View } from "react-native";
// react-navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

const Zero = ({ navigation: { navigate } }) => {
    return (
        <TouchableOpacity onPress={() => navigate("one")}>
            <Text>제로</Text>
        </TouchableOpacity>
    );
};
const One = ({ navigation: { navigate } }) => {
    return (
        <TouchableOpacity onPress={() => navigate("two")}>
            <Text>원</Text>
        </TouchableOpacity>
    );
};
const Two = ({ navigation: { goBack } }) => {
    return (
        <TouchableOpacity onPress={() => goBack()}>
            <Text>투</Text>
        </TouchableOpacity>
    );
};

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="zero" component={Zero}></Stack.Screen>
                <Stack.Screen name="one" component={One}></Stack.Screen>
                <Stack.Screen name="two" component={Two}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
