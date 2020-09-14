import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {} from "../actions";
import { connect } from "react-redux";

const Home = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home</Text>
    </View>
  );
};

const mapStateToProps = (state) => {
  return { ...state.example };
};

export default connect(mapStateToProps, {})(Home);

const styles = StyleSheet.create({});
