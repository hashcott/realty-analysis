import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Octicons } from '@expo/vector-icons'; 
import { Fontisto } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons';  
import firebase from 'react-native-firebase'
import SpinnerButton from 'react-native-spinner-button';
const SignUp = () => {
    state = { name:'', email: '', password: '', errorMessage: null }
    handleSignUp = () => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.state.email, this.state.password, this.state.name)
          .then(() => this.props.navigation.navigate('Main'))
          .catch(error => this.setState({ errorMessage: error.message }))
    }   
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Octicons name="home" size={70} color="deepskyblue" />
        <Text style={{fontSize: 18, fontWeight: 'bold', marginTop: 10}}>Let's get started ...</Text>
        <Text style={{color:'grey', fontStyle:'italic', marginTop: 8}}>Create an new account</Text>
      </View>
      {this.state.errorMessage &&
        <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
        </Text>
      }
      <View style={styles.input}>
        <Feather name="user" size={35} color="black" style={{marginLeft: 20}} />
        <TextInput 
            placeholder='Your full name' 
            style={{marginLeft: 20, marginRight: 160}}
            autoCapitalize="none"
            onChangeText={name => this.setState({ name })}
            value={this.state.name}
        />
      </View>
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
        <Text onPress={this.handleSignUp} style={{color:'white', fontWeight:'bold'}}>Sign up</Text>
      </SpinnerButton>
      <SpinnerButton buttonStyle={styles.buttonBottom}>
        <Text style={{color:'#bbb', fontWeight:'bold'}}>Have a account? </Text>
        <Text style={{color:'deepskyblue', fontWeight:'bold'}}>Sign in</Text>
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
  buttonBottom: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'white'
  }
});
export default SignUp;