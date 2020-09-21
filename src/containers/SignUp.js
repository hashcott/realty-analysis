import React, { useState, useCallback } from "react";
import { StyleSheet, Text, View, TextInput,Image } from "react-native";
import { Fontisto } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import firebase from "firebase";
import SpinnerButton from "react-native-spinner-button";

const SignUp = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const signup = useCallback(() => {
    handleSignUp();
  }, [handleSignUp, email, password]);
  const handleSignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => props.navigation.navigate("Dashboard"))
      .catch((error) => setErrorMessage(error.message));
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
        style={styles.logo}
        source={require('./../../assets/logo.png')}
      />
        <Text
          style={{
            color: "#FFF",
            marginTop: 10,
            fontSize: 24,
            fontWeight: "bold",
          }}
        >
          SIGN UP
        </Text>
      </View>
      {errorMessage && (
        <Text style={{ color: "red", textAlign: "center" }}>
          {errorMessage}
        </Text>
      )}
      {/*   */}
      <View style={styles.input}>
        <Fontisto name="email" size={24} color="black" />
        <TextInput
          placeholderTextColor={"darkgray"}
          placeholder="Your Email"
          style={{ marginLeft: 20, marginRight: 40 }}
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
          style={{ marginLeft: 20, marginRight: 40 }}
          autoCapitalize="none"
          onChangeText={setPassword}
          value={password}
          secureTextEntry
        />
      </View>
      <SpinnerButton buttonStyle={styles.buttonStyle}>
        <Text onPress={signup} style={{ color: "white", fontWeight: "bold" }}>
          Sign up
        </Text>
      </SpinnerButton>
      <SpinnerButton
        onPress={() => props.navigation.navigate("Login")}
        buttonStyle={styles.buttonBottom}
      >
        <Text style={{ color: "white", fontWeight: "700", fontSize: 16 }}>
          Have a account?{" "}
        </Text>
        <Text
          style={{ color: "red", fontWeight: "bold", fontSize: 16 }}
        >
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
    backgroundColor: "black",
  },
  header: {
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    flexDirection: "row",
    backgroundColor: "#e8e8e8",
    width: "100%",
    borderColor: "#bbb",
    borderRadius: 10,
    padding: 12,
    marginVertical: 8,
  },
  buttonStyle: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: 380,
    backgroundColor: "red",
    borderRadius: 10,
  },
  buttonBottom: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  logo: {
    width: 180,
    height: 180,
  },
});
export default SignUp;
