import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function Movies({ navigation: { navigate } }) {
    return (
        <>
            <View>
                <Text>Movies</Text>
            </View>
            <TouchableOpacity
                onPress={() =>
                    navigate("Stacks", { screen: "zero", params: { id: 112 } })
                }
            >
                <Text>Go To Zero</Text>
            </TouchableOpacity>
        </>
    );
}
