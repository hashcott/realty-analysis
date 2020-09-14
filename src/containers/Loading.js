import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import firebase from 'firebase';

export let dataTest = [];

export default class Loading extends React.Component {
    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
          this.props.navigation.navigate(user ? 'Dashboard' : 'Login')
        })
    }
    

  render() {
    
    const handlePress = async () => {
      fetch('https://dreamkatchr.herokuapp.com/getAll')
      .then(response => response.json())
      .then(data => {
        for(var key in data) {
          var value = data[key];
          dataTest.push(value);
        }
        console.log(dataTest);
        this.props.navigation.navigate("Dashboard")})
      .catch((error) => {
        console.error(error);
      })};
    
      handlePress();
    return (
      <View style={styles.container}>
        <Text>Loading</Text>
        <ActivityIndicator size="large" />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})