import { Text, TouchableOpacity } from "react-native";
// react-navigation
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

const Zero = ({ navigation: { navigate } }) => {
    return (
        <TouchableOpacity onPress={() => navigate("one")}>
            <Text>제로</Text>
        </TouchableOpacity>
    );
};
const One = ({ navigation: { navigate, setOptions } }) => {
    return (
        <>
            <TouchableOpacity onPress={() => navigate("two")}>
                <Text>원</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setOptions({ title: "1" })}>
                <Text>원</Text>
            </TouchableOpacity>
        </>
    );
};
const Two = ({ navigation: { goBack, reset } }) => {
    return (
        <>
            <TouchableOpacity onPress={() => goBack()}>
                <Text>투</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() =>
                    reset({
                        index: 0,
                        routes: [{ name: "two" }, { name: "one" }],
                    })
                }
            >
                <Text>reset navigation</Text>
            </TouchableOpacity>
        </>
    );
};

export default function Stacks() {
    return (
        <Stack.Navigator initialRouteName="two">
            <Stack.Screen name="zero" component={Zero}></Stack.Screen>
            <Stack.Screen name="one" component={One}></Stack.Screen>
            <Stack.Screen name="two" component={Two}></Stack.Screen>
        </Stack.Navigator>
    );
}
