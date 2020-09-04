import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import SpinnerButton from 'react-native-spinner-button';
export const Detail = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
      <View style={styles.info}>
        <Image style={styles.picture}/>
        <Text style={styles.name}>Name of house</Text>
        <Text style={styles.location}>Location </Text>
      </View>
      <View>
      <SpinnerButton buttonStyle={styles.buttonFollow} >
        <Text style={{color: 'white'}}>Follow</Text>
      </SpinnerButton>
      </View>
      <View>
      <SpinnerButton buttonStyle={styles.buttonCall} >
        <Text style={{color: 'black'}}>Call</Text>
      </SpinnerButton>
      </View>
      <View style={styles.architecture}>
        <Image style={styles.picture1}/>
        <View style={styles.info2}></View>
      </View>
      <View>
        <SpinnerButton buttonStyle={styles.buttonCall} >
          <Text style={{color: 'black'}}>See More</Text>
        </SpinnerButton>
      </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  info: {
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  picture: {
    width: 200,
    height: 250,
    backgroundColor: 'pink',
  },
  name: {
    fontSize: 18,
    fontStyle: 'italic'
  },
  location: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  architecture: {
    alignItems:'center',
    justifyContent: 'center'
  },
  picture1: {
    width: 330,
    height: 380,
    backgroundColor: 'burlywood',
    marginBottom: 30,
  },
  info2: {
    width: 300,
    height: 350,
    backgroundColor: 'deepskyblue',
    marginBottom: 50,
  },
  buttonFollow: {
    margin:32,
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    borderRadius: 10,
    backgroundColor: 'black'
  },
  buttonCall: {
    marginBottom: 30,
    marginLeft: 32,
    marginRight: 32,
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    borderRadius: 10,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 2
  },
});
