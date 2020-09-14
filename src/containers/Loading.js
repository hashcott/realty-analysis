import React, { useEffect } from "react";
import { getAll } from "../actions";
import { connect } from "react-redux";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import firebase from "firebase";

export let dataTest = [];

const Loading = ({ loading, navigation }) => {
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        return navigation.navigate("Login");
      }
      getAll();
      console.log(loading);
      if (!loading) {
        return navigation.navigate("Dashboard");
      }
    });
  });

  return (
    <View style={styles.container}>
      <Text>Loading</Text>
      <ActivityIndicator size="large" />
    </View>
  );
};
const mapStateToProps = (state) => {
  return { loading: state.all.loading };
};
export default connect(mapStateToProps, { getAll })(Loading);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
