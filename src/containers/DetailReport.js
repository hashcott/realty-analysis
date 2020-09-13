import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { createExample } from "../actions/Example";
import { connect } from "react-redux";
import {
  VictoryChart,
  VictoryArea,
  VictoryClipContainer,
  VictoryLabel,
} from "victory-native";

const windowWidth = Dimensions.get("window").width;

const DetailReport = ({ navigation, route }) => {
  navigation.setOptions({ title: route.params.type });
  return (
    <View style={{ flex: 1, backgroundColor: "#e8e8e8" }}>
      <View style={styles.container}>
        <Text style={styles.title}>Xu hướng giá</Text>
        <Text style={styles.subtitle}>Tháng 1 - Tháng 6</Text>

        <VictoryChart width={windowWidth - 30}>
          <VictoryArea
            groupComponent={
              <VictoryClipContainer clipPadding={{ top: 20, right: 10 }} />
            }
            interpolation="natural"
            style={{
              data: {
                fill: "#E5E5E5",
                stroke: "black",
                strokeWidth: 5,
                strokeLinecap: "round",
              },
            }}
            data={route.params.data}
            x="month"
            y="price"
          />
          <VictoryLabel x={35} y={25} style={{ fontSize: 15 }} text={"Tỷ"} />
          <VictoryLabel
            x={windowWidth - 78}
            y={250}
            style={{ fontSize: 15 }}
            text={"Tháng"}
          />
        </VictoryChart>
      </View>
      <View style={{ margin: 20 }}>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>Dự báo</Text>
        <Text style={{ fontSize: 20 }}>{route.params.predictText}</Text>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => {
  return { ...state.example };
};

export default connect(mapStateToProps, { createExample })(DetailReport);

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: "white",
    width: windowWidth - 30,
    alignSelf: "center",
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
  title: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
  },
  subtitle: { fontSize: 18, textAlign: "center" },
});
