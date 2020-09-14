import React from "react";
import { StyleSheet, Text, View, SafeAreaView, FlatList } from "react-native";
import { createExample } from "../actions/Example";
import { connect } from "react-redux";
import { VictoryPie } from "victory-native";

import { graphicData, graphicColor, DATA } from "../DummyData";

const Dashboard = () => {
  console.disableYellowBox = true;

  const renderItem = ({ item }) => {
    return (
      <View style={styles.labels}>
        <View
          style={{
            backgroundColor: item.color,
            width: 20,
            height: 20,
            borderRadius: 10,
            marginRight: 10,
          }}
        ></View>
        <Text style={{ fontSize: 18 }}>{item.x}</Text>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.card}>
          <Text style={styles.graphTitle}>Loại hình bất động sản</Text>
          <VictoryPie
            data={graphicData}
            colorScale={graphicColor}
            width={250}
            height={250}
            innerRadius={50}
            style={{
              labels: {
                fill: "black",
                fontSize: 15,
                padding: 7,
              },
            }}
          />

          <View style={{ height: 100 }}>
            <FlatList
              data={DATA}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => {
  return { ...state.example };
};

export default connect(mapStateToProps, { createExample })(Dashboard);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e8e8e8",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#fff",
    padding: 30,
    borderRadius: 8,
    shadowColor: "#e8e8e8",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,

    elevation: 4,
  },
  graphTitle: {
    fontSize: 25,
    fontWeight: "bold",
    justifyContent: "center",
  },
  labels: {
    flexDirection: "row",
  },
});
