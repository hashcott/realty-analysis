import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Octicons } from '@expo/vector-icons'; 
import { Fontisto } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import firebase from 'react-native-firebase'
import SpinnerButton from 'react-native-spinner-button';
const LogIn = () => {
    state = { email: '', password: '', errorMessage: null }
    handleLogin = () => {
        const { email, pasword } = this.state
        firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .then(() => this.props.navigation.navigate('Main'))
          .catch(error => this.setState({ errorMessage: error.message }))
    }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Octicons name="home" size={70} color="deepskyblue" />
        <Text style={{fontSize: 18, fontWeight: 'bold', marginTop: 10}}>Welcome to ...</Text>
        <Text style={{color:'grey', fontStyle:'italic', marginTop: 8}}>Sign in to continue</Text>
      </View>
      {this.state.errorMessage &&
        <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
        </Text>
      }
      <View style={styles.input}>
        <Fontisto name="email" size={35} color="black" />
        <TextInput 
            placeholder='Your Email' 
            style={{marginLeft: 20, marginRight: 160}}
            autoCapitalize="none"
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
        />
      </View>
      <View style={styles.input}>
        <Feather name="unlock" size={35} color="black" />
        <TextInput 
            placeholder='Your password' 
            style={{marginLeft: 15, marginRight: 140}}
            autoCapitalize="none"
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
        />
      </View>
      <SpinnerButton buttonStyle={styles.buttonStyle}>
        <Text onPress={this.handleLogin} style={{color:'white', fontWeight:'bold'}}>Sign in</Text>
      </SpinnerButton>
      <View style={styles.signIn}>
        <Text style={{color:'white'}}>abc</Text>
      </View>
      <View style={styles.login}>
        <SpinnerButton buttonStyle={styles.buttonSignIn}>
          <AntDesign name="google" size={35} color="red" />
          <Text style={{color:'grey', fontWeight:'bold', marginLeft: 20}}>Login with Google</Text>
        </SpinnerButton>
      </View>
      <View style={styles.login}>
        <SpinnerButton buttonStyle={styles.buttonSignIn}>
          <FontAwesome name="facebook-square" size={35} color="deepskyblue" />
          <Text style={{color:'grey', fontWeight:'bold', marginLeft: 20}}>Login with Facebook</Text>
        </SpinnerButton>
      </View>
      <SpinnerButton buttonStyle={styles.buttonBottom}>
        <Text style={{color:'deepskyblue', fontWeight:'bold', fontSize: 16}}>Forgot password?</Text>
      </SpinnerButton>
      <SpinnerButton buttonStyle={styles.buttonBottom}>
        <Text style={{color:'#bbb', fontWeight:'bold'}}>Don't have a account? </Text>
        <Text style={{color:'deepskyblue', fontWeight:'bold'}}>Register</Text>
      </SpinnerButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 80
  },
  input: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    height: 60,
    width: 360,
    borderColor: '#bbb',
    borderWidth: 2,
    borderRadius: 10,
  },
  buttonStyle: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: 65,
    width: 380,
    backgroundColor: 'deepskyblue',
    borderRadius: 10
  },
  signIn: {
    width: 200,
    borderBottomColor: '#bbb',
    borderBottomWidth:2
  },
  buttonSignIn: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    width: 360,
    borderColor: '#bbb',
    borderRadius: 10,
    borderWidth: 2,
    backgroundColor:'white'
  },
  buttonBottom: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'white'
  }
});
export default LogIn;