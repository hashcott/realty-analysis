import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
} from "react-native";
import MapView, {Marker} from "react-native-maps";
import SpinnerButton from "react-native-spinner-button";

const windowWidth = Dimensions.get("window").width;

const Detail = ({ navigation, route }) => {
  navigation.setOptions({ title: route.params.title });
  const [latitude, setLatitude] = useState(parseFloat(route.params.latitude));
  const [longitude, setLongitude] = useState(
    parseFloat(route.params.longitude)
  );

  console.log(latitude + " " + longitude);
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.info}>
          <Image
            source={{ uri: route.params.illustration }}
            style={styles.picture}
          />
          <Text style={styles.name}>{route.params.title}</Text>
          <Text style={styles.location}>{route.params.subtitle}</Text>
        </View>
        <View>
          <SpinnerButton buttonStyle={styles.buttonFollow}>
            <Text style={{ color: "white" }}>Follow</Text>
          </SpinnerButton>
        </View>
        <View>
          <SpinnerButton buttonStyle={styles.buttonCall}>
            <Text style={{ color: "black" }}>Call</Text>
          </SpinnerButton>
        </View>
        <View style={styles.info2}>
          <Text style={styles.infoText}>Mô tả: {route.params.moTa}</Text>
          <Text style={styles.infoText}>
            Số lượng tầng: {route.params.soTang}
          </Text>
          <Text style={styles.infoText}>
            Diện tích: {route.params.dienTich}
          </Text>
          <Text style={styles.infoText}>
            Số lượng phòng ngủ: {route.params.soPhongNgu}
          </Text>
        </View>
        <View>
          <View style={{ width: 400, height: 300 }}>
            <MapView
              style={styles.map}
              provider="google"
              region={{
                latitude: latitude,
                longitude: longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
              scrollEnabled={false}
              zoomTapEnabled
            >
              <Marker
                coordinate={{
                  latitude: latitude,
                  longitude: longitude,
                }}
              />
            </MapView>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  info: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  picture: {
    width: windowWidth,
    height: 250,
    backgroundColor: "pink",
  },
  name: {
    fontSize: 18,
    fontStyle: "italic",
  },
  location: {
    fontWeight: "bold",
    fontSize: 14,
  },
  info2: {
    marginHorizontal: 20,
    width: windowWidth - 40,
    marginBottom: 50,
    flexDirection: "column",
  },
  buttonFollow: {
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    borderRadius: 10,
    backgroundColor: "black",
  },
  buttonCall: {
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    borderRadius: 10,
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 2,
  },
  infoText: {
    fontSize: 20,
    marginBottom: 5,
  },
  map: {
    flex: 1,
    marginHorizontal: 10,
  },
});

export default Detail;
