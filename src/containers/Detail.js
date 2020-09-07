import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
} from "react-native";
import SpinnerButton from "react-native-spinner-button";

const windowWidth = Dimensions.get("window").width;

const Detail = ({ navigation, route }) => {
  navigation.setOptions({ title: route.params.title });
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
          <Text style={styles.infoText}>Số lượng tầng: </Text>
          <Text style={styles.infoText}>Diện tích: </Text>
          <Text style={styles.infoText}>Số lượng phòng: </Text>
        </View>
        <View>
          <SpinnerButton buttonStyle={styles.buttonCall}>
            <Text style={{ color: "black" }}>See More</Text>
          </SpinnerButton>
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
  },
});

export default Detail;
