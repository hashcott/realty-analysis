import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createExample } from "../actions/Example";
import { connect } from "react-redux";
import MapView from 'react-native-maps';

// AIzaSyAUFM0lGzma5_s4-rvMdg9GzzmgbJ2vhDA
const Map = () => {
  return (
  
    <MapView
    style={{ flex: 1 }}
    provider="google"
    region={{
          latitude: 40.76727216,
          longitude: -73.99392888,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
    }}
/>

  );
};

const mapStateToProps = (state) => {
  return { ...state.example };
};

export default connect(mapStateToProps, { createExample })(Map);

const styles = StyleSheet.create({});
