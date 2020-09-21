import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, Button } from "react-native";
import ReactNativeItemSelect from "react-native-item-select";
import FilterSlider from "../components/FilterSlider";

const Filter = ({ navigation, route }) => {
  const [dataType, setDataType] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [minArea, setMinArea] = useState(0);
  const [maxArea, setMaxArea] = useState(0);
  const [type, setType] = useState("Căn hộ Cao cấp")

  const textStyle = {
    textAlign: "center",
    color: "#696969",
    fontWeight: "bold",
  };

  const getData = async () => {
    fetch("https://dreamkatchr.herokuapp.com/getPercentEachType/filter")
      .then((response) => response.json())
      .then((data) => {
        let dataTemp = [];
        Object.keys(data).forEach((keys) => {
          dataTemp.push({ type: data[keys][""] });
        });
        dataTemp.pop();
        setDataType(dataTemp);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  if (dataType.length == 0) {
    getData();
  }

  const changePrice = (min, max) => {
    setMinPrice(min);
    setMaxPrice(max);
  };

  const changeArea = (min, max) => {
    setMinArea(min);
    setMaxArea(max);
  };

  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <FilterSlider
        title={"Price Range"}
        placeholder={" tỷ"}
        min={0}
        max={100}
        step={1}
        change={changePrice}
      />

      <View style={styles.type}>
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>
          Type of Real Estate
        </Text>
        {dataType.length != 0 && (
          <ReactNativeItemSelect
            data={dataType}
            itemComponent={(item) => (
              <View>
                <Text style={{ ...textStyle, fontSize: 14 }}>{item.type}</Text>
              </View>
            )}
            onSubmit={(item) => setType(item.type)}
          />
        )}
      </View>

      <FilterSlider
        title={"Area Range"}
        placeholder={" m"}
        min={0}
        max={400}
        step={50}
        change={changeArea}
      />

      <Button
        onPress={() =>  { route.params.handleFilter(minPrice, maxPrice, minArea, maxArea, type); 
          navigation.navigate("Map")}}
        title="Apply"
        color="black"
      />
      {/* <View style={styles.button}>
        <Text style={{ color: "white" }}>Apply</Text>
      </View> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  type: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
  },
  button: {
    margin: 30,
    alignItems: "center",
    width: 350,
    backgroundColor: "black",
    padding: 15,
    borderRadius: 10,
  },
});

export default Filter;
