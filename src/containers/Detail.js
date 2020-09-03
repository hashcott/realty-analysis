import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export const Detail = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
      <View style={styles.info}>
        <View style={styles.picture}></View>
        <Text style={styles.name}>Name of house</Text>
        <Text style={styles.location}>Location </Text>
      </View>
      <View style={styles.follow}>
        <Text style={{color: 'white',paddingTop:5}}>Follow</Text>
      </View>
      <View style={styles.call}>
        <Text style={{color: 'black', paddingTop:5}}>Call</Text>
      </View>
      <View style={styles.architecture}>
        <View style={styles.picture1}></View>
        <View style={styles.picture2}></View>
      </View>
      <View style={styles.more}>
        <Text style={{color: 'black', paddingTop:5}}>See More</Text>
      </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  info: {
    marginTop: 30,
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
  follow: {
    marginLeft: 40,
    marginBottom: 20,
    alignItems: 'center',
    width: 340,
    height: 60,
    padding: 12,
    backgroundColor: 'black',
    borderRadius: 10,
  },
  call: {
    marginLeft: 40,
    marginBottom: 20,
    alignItems: 'center',
    width: 340,
    height: 60,
    padding: 12,
    borderColor:'black',
    borderRadius: 10,
    borderWidth: 2,
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
  picture2: {
    width: 300,
    height: 350,
    backgroundColor: 'deepskyblue',
    marginBottom: 50,
  },
  more: {
    marginLeft: 40,
    marginBottom: 20,
    alignItems: 'center',
    width: 340,
    height: 60,
    padding: 12,
    borderColor:'black',
    borderRadius: 10,
    borderWidth: 2,
  }
});
