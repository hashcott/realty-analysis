import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 
import Info from '../components/Info';
const Home4 = () => {
  const [dummy, setDummy] = useState([
    { title: '35 Nguyen Trai', price: '2 ty', type: 'Chung cu cao cap'},
    { title: '23 Hoang Quoc Viet', price: '4 ty', type: 'Chung cu cao cap'},
    { title: '29 Le Van Luong', price: '6 ty', type: 'Chung cu cao cap'},
  ]);
  return (
    <View>
      <View style={styles.finding}>
        <View style={styles.search}>
          <Feather name="search" size={30} color="black" />
          <TextInput 
            style={styles.input} 
            placeholder='Search Location'
          />
        </View>
        <View style={styles.filter}>
          <Feather name="filter" size={30} color="black"/>
        </View>
      </View>
      <View style={styles.data}>
        <View style={styles.list}>
          <FlatList
            data={dummy}
            renderItem={({ item }) => (
              <Info item={item}/>
            )}
            key={dummy.title}
          />
        </View>
        <View style={styles.location}>
          <FontAwesome5 name="location-arrow" size={26} color="white" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  data: {
    marginLeft: 20,
    marginRight: 20,
  },
  input: {
    paddingHorizontal: 8,
    paddingVertical: 6,
  },
  search: {
    width: 200,
    height: 50,
    marginRight: 100,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
  },
  finding: {
    marginTop: 60,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  filter: {
    width: 50,
    height: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
  },
  location: {
    paddingLeft: 15,
    alignContent: "center",
    justifyContent: "center",
    marginTop: 30,
    marginLeft: 310,
    borderRadius: 29,
    width: 60,
    height: 60,
    elevation: 1
  }
});
