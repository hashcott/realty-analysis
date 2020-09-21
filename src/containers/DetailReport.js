import React, {useState, useEffect} from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { createExample } from "../actions/Example";
import { connect } from "react-redux";
import {
  VictoryChart,
  VictoryArea,
  VictoryClipContainer,
  VictoryLabel
} from "victory-native";

const windowWidth = Dimensions.get("window").width;

const DetailReport = ({ navigation, route }) => {
  navigation.setOptions({ title: route.params.type });

  const [reportData, setReportData] = useState([{"date": 1, "price": 5.0200133}, {"date": 4, "price": 5.0200133}, {"date": 6, "price": 5.0200133}, {"date": 9, "price": 5.0200133}, {"date": 12, "price": 5.0200133}]);

  useEffect(() => {
    const temp1 = route.params.data.replaceAll("'", '"');
    console.log(temp1)
    const temp = JSON.parse(temp1);
    setReportData(temp);
  }, [])

  return (
    <View style={{ flex: 1, backgroundColor: "#e8e8e8" }}>
      <View style={styles.container}>
        <Text style={styles.title}>Xu hướng giá</Text>
        <Text style={styles.subtitle}>Tháng 1 - Tháng 6</Text>

        <VictoryChart width={windowWidth - 30} >
          <VictoryArea
            groupComponent={
              <VictoryClipContainer clipPadding={{ top: 20, right: 10 }} />
            }
            // interpolation="natural"
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
            domain={{x: [6, 12]}}
            labels={({ datum }) => datum.price}
            labelComponent={<VictoryLabel renderInPortal dy={-5}/>}
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
        <Text style={{ fontSize: 20 }}>Giá nhà sẽ {route.params.predictText} trong những tháng tiếp theo</Text>
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
