import React, { useState, useEffect } from "react";
import { StyleSheet, View, SafeAreaView, FlatList } from "react-native";
import { createExample } from "../actions/Example";
import { connect } from "react-redux";
import MapView from "react-native-maps";
import SearchBar from "../components/SearchBar";
import Carousel from "../components/Carousel/Carousel";
import CustomButton from "../components/CustomButton";
import ItemLocation from "../components/Item";
import * as Location from "expo-location";

const Map = ({ navigation }) => {
  const [displayList, setDisplayList] = useState(false);
  const [location, setLocation] = useState({});
  const [listData, setListData] = useState([]);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
      }

      let location = await Location.getCurrentPositionAsync({});
      let { latitude, longitude } = location.coords;
      setLocation({ latitude, longitude });
      handlePress(latitude, longitude);
    })();
  }, []);

  const handlePress = async (latitude, longitude) => {
    fetch(
      "https://dreamkatchr.herokuapp.com/get20closest/" +
        latitude +
        "/" +
        longitude
    )
      .then((response) => response.json())
      .then((data) => {
        let dataConvert = [];
        Object.keys(data).forEach((keys) => {
          dataConvert.push(data[keys]);
        });
        setListData(dataConvert);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleSearch = (detail) => {
    const locationSearch = detail.geometry.location;
    setLocation({
      latitude: locationSearch.lat,
      longitude: locationSearch.lng,
    });

    handlePress(locationSearch.lat, locationSearch.lng);
  };

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
                latitude: location.latitude,
                longitude: location.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            />
          </View>

          <Carousel HandleClick={HandleClickItem} data={listData} />

          <CustomButton HandleClickList={HandleClickList} icon="list" />
        </View>
      )}

      {displayList && (
        <View style={styles.listContainer}>
          <FlatList data={listData} renderItem={renderItem} />
        </View>
      )}

      {displayList && (
        <CustomButton
          styling={styles.navigation}
          HandleClickList={HandleClickList}
          icon="navigation"
        />
      )}

      <SearchBar handleSearch={handleSearch} />

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
  return { ...state.example };
};

export default connect(mapStateToProps, { createExample })(Map);
