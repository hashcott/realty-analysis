import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { createExample } from "../actions/Example";
import { connect } from "react-redux";
import {
  VictoryChart,
  VictoryArea,
  VictoryLine,
  VictoryClipContainer,
  VictoryAxis,
  VictoryLabel
} from "victory-native";

const windowWidth = Dimensions.get("window").width;

const DetailReport = ({ navigation, route }) => {
  navigation.setOptions({ title: route.params.type });
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.container}>
        <Text style={{ fontSize: 25, fontWeight: "bold", textAlign: 'center', marginTop: 10}}>Xu hướng giá</Text>
        <Text style={{ fontSize: 18, textAlign: 'center'}}>Tháng 1 - Tháng 6</Text>

        
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
          <VictoryLabel x={35} y={25} style={{fontSize: 15}}
          text={"Tỷ"}
        />
        <VictoryLabel x={windowWidth - 78} y={250} style={{fontSize: 15}}
          text={"Tháng"}
        />
        </VictoryChart>
      </View>
      <View style={{margin: 20}}>
          <Text style={{fontSize: 24, fontWeight: 'bold'}}>Dự báo</Text>
          <Text style={{fontSize: 20}}>{route.params.predictText}</Text>
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
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
});