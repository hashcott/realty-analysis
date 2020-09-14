import React, { useState, useEffect } from "react";
import { StyleSheet, View, SafeAreaView, FlatList } from "react-native";
import { getAll } from "../actions";
import { connect } from "react-redux";
import MapView from "react-native-maps";
import SearchBar from "../components/SearchBar";
import Carousel from "../components/Carousel/Carousel";
import CustomButton from "../components/CustomButton";
import ItemLocation from "../components/Item";
import * as Location from "expo-location";
import { test } from "../DummyData";

const Map = ({ navigation, data, loading, error }) => {
  const [displayList, setDisplayList] = useState(false);
  const [location, setLocation] = useState({});
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
      }

      let location = await Location.getCurrentPositionAsync({});
      let { latitude, longitude } = location.coords;
      setLocation({ latitude, longitude });
    })();
  }, []);
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
                ...location,
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
          <FlatList data={data} renderItem={renderItem} />
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

const mapStateToProps = (state) => {
  return { ...state.all };
};

export default connect(mapStateToProps, { getAll })(Map);
