import React, {useState, useEffect} from "react";
import { StyleSheet, Text, View,TouchableOpacity, Dimensions } from "react-native";
import {
  VictoryArea,
  VictoryClipContainer,
} from "victory-native";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const windowWidth = Dimensions.get('window').width;

const ItemReport = ({ item, HandleClick }) => {
  const [reportData, setReportData] = useState([{"date": 1, "price": 5.0200133}, {"date": 4, "price": 5.0200133}, {"date": 6, "price": 5.0200133}, {"date": 9, "price": 5.0200133}, {"date": 12, "price": 5.0200133}]);

  useEffect(() => {
    const temp1 = item.reportData.replaceAll("'", '"');
    const temp =  JSON.parse(temp1);
    setReportData(temp);
    console.log(reportData)
  }, [])

  
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
          {item.loai}
        </Text>
        {item.trend === "không đổi" &&
        <FontAwesome name="minus" size={40} color="orange" style={{ marginRight: 20 }}/>}
        {item.trend === "giảm" && 
        <Entypo
          name="arrow-down"
          size={40}
          color="red"
          style={{ marginRight: 20 }}
        />}
        {item.trend === "tăng" && 
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
        data={reportData}
        x="date"
        y="price"
      />
    </TouchableOpacity >
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    alignSelf: 'center',
    backgroundColor: "white",
    borderRadius: 8,
    width: windowWidth - 30,
    height: 200,
    marginTop: 10,
    marginBottom: 10,   
    shadowColor: "#e8e8e8",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,

    elevation: 4,
  },
  title: { fontSize: 26, fontWeight: "bold", marginLeft: 10 },
  
});

export default ItemReport;
