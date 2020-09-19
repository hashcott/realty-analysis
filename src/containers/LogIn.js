import React ,{useState, useCallback} from "react";
import { StyleSheet, Text, View, TextInput, Image } from "react-native";
import { Fontisto } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import firebase from "firebase";
import SpinnerButton from "react-native-spinner-button";

console.disableYellowBox = true;

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
        <Text style={{ color: "#FFF", fontSize: 24, fontWeight: "bold", marginTop: 10 }}>
          SIGN IN
        </Text>
      </View>
      {errorMessage && (
        <Text style={{ color: "red", textAlign : "center" }}>{errorMessage}</Text>
      )}
      <View style={styles.input}>
        <Fontisto name="email" size={24} color="black" />
        <TextInput
          placeholder="Your Email"
          style={{ marginLeft: 20, marginRight: 40 }}
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
          style={{ marginLeft: 20, marginRight: 40 }}
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
      {/* <View style={styles.signIn}>
        <Text style={{ color: "white" }}>abc</Text>
      </View> */}
      {/* <View style={styles.login}>
        <SpinnerButton buttonStyle={styles.buttonSignIn}>
          <AntDesign name="google" size={35} color="red" />
          <Text style={{ color: "grey", fontWeight: "bold", marginLeft: 20 }}>
            Login with Google
          </Text>
        </SpinnerButton>
      </View> */}
      {/* <View style={styles.login}>
        <SpinnerButton buttonStyle={styles.buttonSignIn}>
          <FontAwesome name="facebook-square" size={35} color="deepskyblue" />
          <Text style={{ color: "white", fontWeight: "bold", marginLeft: 20 }}>
            Login with Facebook
          </Text>
        </SpinnerButton>
      </View> */}
      {/* <SpinnerButton buttonStyle={styles.buttonBottom}>
        <Text
          style={{ color: "deepskyblue", fontWeight: "bold", fontSize: 16 }}
        >
          Forgot password?
        </Text>
      </SpinnerButton> */}
      <SpinnerButton onPress={() =>  props.navigation.navigate("Signup")} buttonStyle={styles.buttonBottom}>
        <Text style={{ color: "white", fontWeight: "600", fontSize: 16}}>
          Don't have a account?{" "}
        </Text>
        <Text style={{ color: "red", fontWeight: "bold", fontSize: 16}}>
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
    backgroundColor: 'black',
  },
  header: {
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    flexDirection: "row",
    backgroundColor:"#e8e8e8",
    // justifyContent: "fl",
    // alignItems: "center",
    width: "100%",
    borderColor: "#bbb",
    borderRadius: 10,
    padding : 12,
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
    backgroundColor: "black",
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
export default LogIn;
