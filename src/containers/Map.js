import React, { useState } from "react";
import { StyleSheet, View, SafeAreaView, FlatList } from "react-native";
import { createExample } from "../actions/Example";
import { connect } from "react-redux";
import MapView from "react-native-maps";
import SearchBar from "../components/SearchBar";
import Carousel from "../components/Carousel/Carousel";
import CustomButton from "../components/CustomButton";
import ItemLocation from "../components/Item";
import { ENTRIES } from "../DummyData";

const Map = ({ navigation }) => {
  const [displayList, setDisplayList] = useState(false);

  const HandleClickItem = (item) => {
    navigation.navigate("Detail", item);
  };

  const HandleClickList = () => {
    setDisplayList(!displayList);
  };

  const renderItem = ({ item }) => (
    <ItemLocation item={item} HandleClick={HandleClickItem} />
  );

  return (
    <SafeAreaView style={{ flex: 1, top: 20, backgroundColor: "white" }}>
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

          <Carousel HandleClick={HandleClickItem} />

          <CustomButton HandleClickList={HandleClickList} icon="list" />
        </View>
      )}

      {displayList && (
        <View style={styles.listContainer}>
          <FlatList data={ENTRIES} renderItem={renderItem} />
        </View>
      )}

      {displayList && (
        <CustomButton
          styling={styles.navigation}
          HandleClickList={HandleClickList}
          icon="navigation"
        />
      )}

      <SearchBar />

      <CustomButton
        styling={styles.filter}
        HandleClickList={() => navigation.navigate("Filter")}
        icon="filter"
      />
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
    top: 20,
    right: 20,
    borderRadius: 0,
  },
  navigation: {
    bottom: 30,
    right: 20,
  },
  map: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
    position: "absolute",
    left: 20,
    top: 90,
    height: 470,
  },
});
