import React ,{useState, useCallback} from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { Octicons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import firebase from "firebase";
import SpinnerButton from "react-native-spinner-button";
const LogIn = (props) => {
  const [email , setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const login = useCallback(
    () => {
      handleLogin();
    },
    [handleLogin, email, password],
  )
  const handleLogin = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => props.navigation.navigate("Main"))
      .catch((error) => setErrorMessage(error.message));
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Octicons name="home" size={45} color="deepskyblue" />
        <Text style={{ fontSize: 18, fontWeight: "bold", marginTop: 10 }}>
          LOGIN
        </Text>
      </View>
      {errorMessage && (
        <Text style={{ color: "red", textAlign : "center" }}>{errorMessage}</Text>
      )}
      <View style={styles.input}>
        <Fontisto name="email" size={24} color="black" />
        <TextInput
          placeholder="Your Email"
          style={{ marginLeft: 20, marginRight: 160 }}
          autoCapitalize="none"
          onChangeText={setEmail}
          placeholderTextColor={"darkgray"}
          value={email}
        />
      </View>
      <View style={styles.input}>
        <Feather name="unlock" size={24} color="black" /> 
        <TextInput
          placeholder="Your password"
          style={{ marginLeft: -10, marginRight: 160 }}
          autoCapitalize="none"
          onChangeText={setPassword}
          placeholderTextColor={"darkgray"}
          value={password}
          secureTextEntry
        />
      </View>
      <SpinnerButton buttonStyle={styles.buttonStyle}>
        <Text
          onPress={login}
          style={{ color: "white", fontWeight: "bold" }}
        >
          Sign in
        </Text>
      </SpinnerButton>
      <View style={styles.signIn}>
        <Text style={{ color: "white" }}>abc</Text>
      </View>
      {/* <View style={styles.login}>
        <SpinnerButton buttonStyle={styles.buttonSignIn}>
          <AntDesign name="google" size={35} color="red" />
          <Text style={{ color: "grey", fontWeight: "bold", marginLeft: 20 }}>
            Login with Google
          </Text>
        </SpinnerButton>
      </View>
      <View style={styles.login}>
        <SpinnerButton buttonStyle={styles.buttonSignIn}>
          <FontAwesome name="facebook-square" size={35} color="deepskyblue" />
          <Text style={{ color: "grey", fontWeight: "bold", marginLeft: 20 }}>
            Login with Facebook
          </Text>
        </SpinnerButton>
      </View> */}
      <SpinnerButton buttonStyle={styles.buttonBottom}>
        <Text
          style={{ color: "deepskyblue", fontWeight: "bold", fontSize: 16 }}
        >
          Forgot password?
        </Text>
      </SpinnerButton>
      <SpinnerButton onPress={() =>  props.navigation.navigate("Signup")} buttonStyle={styles.buttonBottom}>
        <Text style={{ color: "#bbb", fontWeight: "bold" }}>
          Don't have a account?{" "}
        </Text>
        <Text style={{ color: "deepskyblue", fontWeight: "bold" }}>
          Register
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
  signIn: {
    width: 200,
    borderBottomColor: "#bbb",
    borderBottomWidth: 2,
  },
  buttonSignIn: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    width: 360,
    borderColor: "#bbb",
    borderRadius: 10,
    borderWidth: 2,
    backgroundColor: "white",
  },
  buttonBottom: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
});
export default LogIn;
