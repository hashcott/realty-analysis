import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableHighlight,
} from "react-native";
import { createExample } from "../actions/Example";
import { connect } from "react-redux";
import MapView from "react-native-maps";
import SearchBar from "../components/SearchBar";
import { Feather } from "@expo/vector-icons";
import Carousel from '../components/Carousel/Carousel';


const Map = () => {
  const _renderItem = ({ item, index }) => {
    return (
      <View style={styles.slide}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, top: 20 }}>
      <View style={styles.edges}>
        <View style={styles.edges}>
          <MapView
            style={styles.map}
            provider="google"
            region={{
              latitude: 21.0227253,
              longitude: 105.7669231,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          />
        </View>

        <SearchBar />

        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={() => {}}
          style={styles.filter}
        >
          <View>
            <Feather name="filter" size={24} color="black" />
          </View>
        </TouchableHighlight>

        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={() => {}}
          style={styles.list}
        >
          <View>
            <Feather name="list" size={24} color="black" />
          </View>
        </TouchableHighlight>

        <Carousel />
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => {
  return { ...state.example };
};

export default connect(mapStateToProps, { createExample })(Map);

const styles = StyleSheet.create({
  edges: {
    bottom: 0,
    left: 0,
    position: "absolute",
    right: 0,
    top: 0,
  },
  list: {
    position: "absolute",
    backgroundColor: "white",
    padding: 10,
    paddingTop: 13,
    bottom: 180,
    right: 20,
    height: 50,
    zIndex: 1,
    width: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  filter: {
    position: "absolute",
    backgroundColor: "white",
    padding: 10,
    paddingTop: 13,
    top: 20,
    right: 20,
    height: 50,
    zIndex: 1,
  },
  map: {
    flex: 1,
  },
});
