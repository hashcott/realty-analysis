import React, {useState, useCallback} from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { Octicons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import firebase from 'firebase';
import SpinnerButton from "react-native-spinner-button";
const SignUp = () => {
  const [name , setName] = useState("");
  const [email , setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const signup = useCallback(
    () => {
      handleSignUp();
    },
    [handleSignUp, email, password],
  )
  handleSignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(
        email,
        password
      )
      .then(() => props.navigation.navigate("Main"))
      .catch(error => setErrorMessage(error.message));
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Octicons name="home" size={70} color="deepskyblue" />
     
        <Text style={{ color: "#000", marginTop: 10, fontSize : 24, fontWeight : "bold" }}>
          SIGN UP
        </Text>
      </View>
      {errorMessage && (
        <Text style={{ color: "red", textAlign :"center" }}>{errorMessage}</Text>
      )}
      <View style={styles.input}>
        <Feather
          name="user"
          size={24}
          color="black"
          style={{ marginLeft: 20 }}
        />
        <TextInput
          placeholderTextColor={"darkgray"}
          placeholder="Your full name"
          style={{ marginLeft: 20, marginRight: 160 }}
          autoCapitalize="none"
          onChangeText={setName}
          value={name}
        />
      </View>
      <View style={styles.input}>
        <Fontisto name="email" size={24} color="black" />
        <TextInput
          placeholderTextColor={"darkgray"}
          placeholder="Your Email"
          style={{ marginLeft: 20, marginRight: 160 }}
          autoCapitalize="none"
          onChangeText={setEmail}
          value={email}
        />
      </View>
      <View style={styles.input}>
        <Feather name="unlock" size={24} color="black" />
        <TextInput
          placeholderTextColor={"darkgray"}
          placeholder="Your password"
          style={{ marginLeft: 15, marginRight: 140 }}
          autoCapitalize="none"
          onChangeText={setPassword}
          value={password}
          secureTextEntry
        />
      </View>
      <SpinnerButton buttonStyle={styles.buttonStyle}>
        <Text
          onPress={signup}
          style={{ color: "white", fontWeight: "bold" }}
        >
          Sign up
        </Text>
      </SpinnerButton>
      <SpinnerButton buttonStyle={styles.buttonBottom}>
        <Text style={{ color: "#bbb", fontWeight: "bold" }}>
          Have a account?{" "}
        </Text>
        <Text style={{ color: "deepskyblue", fontWeight: "bold" }}>
          Sign in
        </Text>
      </SpinnerButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    padding: 16,
    paddingTop: 120,
  },
  header: {
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    flexDirection: "row",
    backgroundColor:"#e8e8e8",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    borderColor: "#bbb",
    borderRadius: 10,
    padding : 20,
    marginVertical: 8,
  },
  buttonStyle: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    height: 65,
    width: 380,
    backgroundColor: "deepskyblue",
    borderRadius: 10,
  },
  buttonBottom: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
});
export default SignUp;
