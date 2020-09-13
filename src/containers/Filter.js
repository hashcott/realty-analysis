import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import ReactNativeItemSelect from "react-native-item-select";
import FilterSlider from "../components/FilterSlider";

const Filter = () => {
  const textStyle = {
    textAlign: "center",
    color: "#696969",
    fontWeight: "bold",
  };
  const data = [
    { type: "chung cu" },
    { type: "nha dat" },
    { type: "biet thu" },
    { type: "chung cu cao cap" },
  ];
  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <FilterSlider
        title={"Price Range"}
        placeholder={"$0.00"}
        min={0}
        max={10}
        step={0.5}
      />

      <View style={styles.type}>
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>
          Type of Real Estate
        </Text>
        <ReactNativeItemSelect
          data={data}
          itemComponent={(item) => (
            <View>
              <Text style={{ ...textStyle, fontSize: 14 }}>{item.type}</Text>
            </View>
          )}
          onSubmit={(item) => navigate("Result")}
        />
      </View>

      <FilterSlider
        title={"Area Range"}
        placeholder={"0 m"}
        min={0}
        max={400}
        step={50}
      />

      <View style={styles.button}>
        <Text style={{ color: "white" }}>Apply</Text>
      </View>
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
