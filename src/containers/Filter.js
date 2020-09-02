import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons'; 
import { Slider, Button } from 'react-native';

export default function App() {
  return (
    <View>
      <View style={styles.search}>
        <Feather name="x" size={28} color="black" style={{marginBottom: 5}} />
        <TextInput 
          style={styles.input} 
          placeholder='Filter Search...'
        />
      </View>
      <View style={styles.range}>
        <Text style={{fontSize: 15, fontWeight: 'bold'}}>Price Range</Text>
        <View style={styles.priceInput}>
          <TextInput style={styles.input1} placeholder='$0.00'></TextInput>
          <TextInput style={styles.input1} placeholder='$0.00'></TextInput>
        </View>
        <Slider
          style={{width: 380, height: 5, marginBottom: 5}}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
        />
        <View style={{flexDirection:'row'}}>
          <Text style={{fontSize: 13, fontWeight: 'bold', color: 'grey', marginRight: 300}}>MIN</Text>
          <Text style={{fontSize: 13, fontWeight: 'bold', color: 'grey'}}>MAX</Text>
        </View>
      </View>
      <View style={styles.type}>
        <Text style={{fontSize: 15, fontWeight: 'bold'}}>Type of Real Estate</Text>
        <View style={styles.priceInput}>
          <Text style={styles.input2}>Chung cu</Text>
          <Text style={styles.input2}>Chung cu cao cap</Text>
        </View>
        <View style={styles.priceInput}>
          <Text style={styles.input2}>Nha dat</Text>
          <Text style={styles.input2}>Biet thu</Text>
        </View>
      </View>
      <View style={styles.range}>
      <Text style={{fontSize: 15, fontWeight: 'bold'}}>Area Range</Text>
        <View style={styles.priceInput}>
          <TextInput style={styles.input1} placeholder='0 m'></TextInput>
          <TextInput style={styles.input1} placeholder='0 m'></TextInput>
        </View>
        <Slider
          style={{width: 380, height: 5, marginBottom: 5}}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
        />
        <View style={{flexDirection:'row'}}>
          <Text style={{fontSize: 13, fontWeight: 'bold', color: 'grey', marginRight: 300}}>MIN</Text>
          <Text style={{fontSize: 13, fontWeight: 'bold', color: 'grey'}}>MAX</Text>
        </View>
      </View>
      <View style={styles.button} >
        <Text style={{color: 'white'}}>Apply</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  search: {
    marginTop: 50,
    marginLeft: 20,
    marginRight: 20,
    alignItems: "center",
    flexDirection: "row",
    borderBottomWidth: 2,
    borderBottomColor: '#ddd',
  },
  input: {
    marginBottom: 5,
    paddingHorizontal: 8,
    paddingVertical: 6    
  },
  range: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
  },
  priceInput: {
    alignItems: 'center',
    justifyContent:'center',
    flexDirection: 'row',
    marginBottom: 10
  },
  input1: {
    margin: 10,
    width: 160,
    padding: 12,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderWidth: 2,
    borderRadius: 10,
  },
  input2: {
    margin: 10,
    width: 180,
    padding: 12,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderWidth: 2,
    borderRadius: 10,
  },
  type: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
  },
  button: {
    margin: 30,
    alignItems: 'center',
    width: 350,
    backgroundColor: 'black',
    padding: 15,
    borderRadius: 10,
  }
});
