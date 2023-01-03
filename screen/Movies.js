import styled from "@emotion/native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const SectionTitle = styled.Text`
    font-size: 30px;
    color: ${(props) => props.theme.title};
`;

export default function Movies({ navigation: { navigate } }) {
    return (
        <>
            <View>
                <SectionTitle>Movies</SectionTitle>
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
