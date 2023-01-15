// react-navigation
import styled from "@emotion/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, TouchableOpacity } from "react-native";
import Detail from "../screen/Detail";
import Login from "../screen/Login";
import { Register } from "../screen/Register";

const Stack = createNativeStackNavigator();

export default function Stacks({ navigation: { goBack } }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: () => (
          <TouchableOpacity onPress={() => goBack()}>
            <BackText>← 뒤로</BackText>
          </TouchableOpacity>
        ),
      }}
    >
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
}

const BackText = styled.Text`
  color: white;
`;
