import React, { useState, useEffect } from "react";
import { StyleSheet, View, SafeAreaView, FlatList } from "react-native";
import { createExample } from "../actions/Example";
import { connect } from "react-redux";
import MapView, { Marker } from "react-native-maps";
import SearchBar from "../components/SearchBar";
import Carousel from "../components/Carousel/Carousel";
import CustomButton from "../components/CustomButton";
import ItemLocation from "../components/Item";
import * as Location from "expo-location";

const Map = ({ navigation, route }) => {
  const [displayList, setDisplayList] = useState(false);
  const [location, setLocation] = useState({latitude: 21.0278,
    longitude: 105.8342 });
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
      "https://dreamkatchr.herokuapp.com/get30closest/" +
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

  const handleFilter = async (minPrice, maxPrice, minArea, maxArea, type) => {
    fetch(
      "https://dreamkatchr.herokuapp.com/filter/" +
        minPrice +
        "/" +
        maxPrice +
        "/" +
        minArea +
        "/" +
        maxArea +
        "/" +
        type
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

  const HandleClickItem = (item) => {
    console.log(item)
    navigation.navigate("Detail", item);
  };

  const HandleClickList = () => {
    setDisplayList(!displayList);
  };

  const renderItem = ({ item }) => (
    <ItemLocation item={item} HandleClick={HandleClickItem} />
  );

  const mapMarkers = () => {
    return listData.map((data) => {
      // console.log(data.latitude + " " + data.longitude);
      return (
        <Marker
          key={listData['']}
          coordinate={{
            latitude: parseFloat(data.latitude),
            longitude: parseFloat(data.longitude),
          }}
          title={data.giaCa}
          // pinColor="yellow"
        />
      );
    });
  };

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
                latitudeDelta: 0.0622,
                longitudeDelta: 0.0201,
              }}
            >
            <Marker
              coordinate={{
                latitude: location.latitude,
                longitude: location.longitude}}
              title={"current"}
            />
            {mapMarkers()}
            </MapView>
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

      <SearchBar handleSearch={handleSearch} styling={styles.searchBar}/>

      <CustomButton
        styling={styles.filter}
        HandleClickList={() => navigation.navigate("Filter", { handleFilter })}
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
    marginBottom: 15,
  },
  listContainer: {
    flex: 1,
    position: "absolute",
    left: 20,
    top: 90,
    height: 470,
  },
  searchBar: {
    position: "absolute",
    left: 20,
    top: 20,
    right: 80,
    zIndex: 1,
  }
});

const mapStateToProps = (state) => {
  return { ...state.example };
};

export default connect(mapStateToProps, { createExample })(Map);
