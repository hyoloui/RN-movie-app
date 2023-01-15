import React, { useState } from "react";
import styled from "@emotion/native";
import { authService } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const Register = ({ navigation: { reset } }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgin] = useState("");

  const pwCheck = () => {
    if (password == passwordAgain) {
      return true;
    } else {
      console.log("password check, failed");
      return;
    }
  };
  const onSubmitJoin = () => {
    if (pwCheck()) {
      createUserWithEmailAndPassword(authService, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("🚀 ~ file: Register.js:25 ~ .then ~ user", user);
          // ...
          reset({
            index: 0,
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
            "🚀 ~ file: Register.js:30 ~ onSubmitJoin ~ errorCode",
            errorCode
          );
          const errorMessage = error.message;
          console.log(
            "🚀 ~ file: Register.js:32 ~ onSubmitJoin ~ errorMessage",
            errorMessage
          );
          // ..
        });
    }
  };

  return (
    <LoginContainer>
      <InputBox placeholder="Email" onChangeText={setEmail}>
        {email}
      </InputBox>
      <InputBox placeholder="Password" onChangeText={setPassword}>
        {password}
      </InputBox>
      <InputBox
        placeholder="Password check"
        onChangeText={setPasswordAgin}
        onSubmitEditing={() => onSubmitJoin()}
      >
        {passwordAgain}
      </InputBox>
      <ButtonBox onPress={() => onSubmitJoin()}>
        <ButtonText>Join</ButtonText>
      </ButtonBox>
    </LoginContainer>
  );
};

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
