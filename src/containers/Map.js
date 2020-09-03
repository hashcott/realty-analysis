import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableHighlight,
  FlatList,
} from "react-native";
import { createExample } from "../actions/Example";
import { connect } from "react-redux";
import MapView from "react-native-maps";
import SearchBar from "../components/SearchBar";
import { Feather } from "@expo/vector-icons";
import Carousel from "../components/Carousel/Carousel";
import CustomButton from "../components/CustomButton";
import ItemLocation from "../components/Item";
import ENTRIES from "../DummyData";

const Map = ({ navigation }) => {
  const [displayList, setDisplayList] = useState(true);

  const HandleClickList = () => {
    setDisplayList(!displayList);
  };

  const renderItem = ({ item }) => (<ItemLocation item={item} />);

  return (
    <SafeAreaView style={{ flex: 1, top: 20 }}>
      {!displayList && (
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

          <Carousel />
          <CustomButton HandleClickList={HandleClickList} icon="list" />
        </View>
      )}

       {/* Need fix: Not render the list in the screen */}
      {displayList && (
        <View style={{ flex: 1 }}>
          <FlatList
            data={ENTRIES}
            renderItem={renderItem}
          />
        </View>
      )}

      {displayList && (
        <CustomButton HandleClickList={HandleClickList} icon="navigation" />
      )}

      <SearchBar />

      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor="#DDDDDD"
        onPress={() => navigation.navigate("Filter")}
        style={styles.filter}
      >
        <View>
          <Feather name="filter" size={24} color="black" />
        </View>
      </TouchableHighlight>
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
