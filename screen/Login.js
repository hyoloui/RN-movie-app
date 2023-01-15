import React, { useState } from "react";
import styled from "@emotion/native";
import { authService } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Login({ navigation: { navigate, reset } }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitLogin = () => {
    signInWithEmailAndPassword(authService, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("🚀 ~ file: Login.js:15 ~ .then ~ user", user);
        // ...
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
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(
          "🚀 ~ file: Login.js:20 ~ onSubmitLogin ~ errorCode",
          errorCode
        );
        const errorMessage = error.message;
        console.log(
          "🚀 ~ file: Login.js:22 ~ onSubmitLogin ~ errorMessage",
          errorMessage
        );
      });
  };
  return (
    <LoginContainer>
      <InputBox placeholder="Email" onChangeText={setEmail}>
        {email}
      </InputBox>
      <InputBox
        placeholder="Password"
        onChangeText={setPassword}
        onSubmitEditing={() => onSubmitLogin()}
      >
        {password}
      </InputBox>
      <ButtonBox onPress={() => onSubmitLogin()}>
        <ButtonText>Login</ButtonText>
      </ButtonBox>
      <ButtonBox onPress={() => navigate("Stacks", { screen: "Register" })}>
        <ButtonText>Register</ButtonText>
      </ButtonBox>
    </LoginContainer>
  );
}

const LoginContainer = styled.View`
  flex: 1;
  background-color: lightcoral;
  align-items: center;
  padding-top: 15%;
`;
const InputBox = styled.TextInput`
  width: 70%;
  height: 40px;
  background-color: white;
  border-radius: 10px;
  padding: 0 10px;
  margin-bottom: 10px;
`;
const ButtonBox = styled.TouchableOpacity`
  width: 70%;
  height: 40px;
  border: 1px solid white;
  background-color: black;
  border-radius: 10px;
  padding: 0 10px;
  margin-top: 10px;
`;
const ButtonText = styled.Text`
  margin: auto;
  font-size: 18px;
  text-align: center;
  color: white;
`;
