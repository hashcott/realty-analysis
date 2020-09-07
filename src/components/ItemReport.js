import React from "react";
import { StyleSheet, Text, View,TouchableOpacity, Dimensions } from "react-native";
import {
  VictoryArea,
  VictoryClipContainer,
} from "victory-native";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const windowWidth = Dimensions.get('window').width;

const ItemReport = ({ item, HandleClick }) => {
  return (
    <TouchableOpacity style={styles.itemContainer} onPress={() => {
        HandleClick(item)
      }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 10,
        }}
      >
        <MaterialCommunityIcons name="home-city-outline" size={30} color={item.color} style={{marginLeft: 20}} />
        <Text style={styles.title}>
          {item.x}
        </Text>
        {item.predict === "decrease" && 
        <Entypo
          name="arrow-down"
          size={40}
          color="red"
          style={{ marginRight: 20 }}
        />}
        {item.predict === "increase" && 
        <Entypo name="arrow-up" size={40} color="green" style={{ marginRight: 20 }} />}
      </View>

      <VictoryArea
        groupComponent={
          <VictoryClipContainer clipPadding={{ top: 8, right: 10 }} />
        }
        padding={{ top: 10, left: 20 }}
        height={130}
        width={windowWidth - 50}
        interpolation="natural"
        style={{
          data: {
            fill: "#E5E5E5",
            stroke: "black",
            strokeWidth: 5,
            strokeLinecap: "round",
          },
        }}
        data={item.reportData}
        x="month"
        y="price"
      />
    </TouchableOpacity >
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    alignSelf: 'center',
    backgroundColor: "white",
    borderRadius: 30,
    width: windowWidth - 30,
    height: 200,
    marginTop: 10,
    marginBottom: 10,   
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  title: { fontSize: 26, fontWeight: "bold", marginLeft: 10 },
  
});

export default ItemReport;
