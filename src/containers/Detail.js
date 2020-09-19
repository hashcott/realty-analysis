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


  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.info}>
          <Image
            source={{ uri: route.params.imgSrc }}
            style={styles.picture}
          />
          <Text style={styles.name}>{route.params.diaChi}</Text>
          <Text style={styles.location}>{route.params.giaCa} tỷ</Text>
        </View>
        {/* <View>
          <SpinnerButton buttonStyle={styles.buttonFollow}>
            <Text style={{ color: "white" }}>Follow</Text>
          </SpinnerButton>
        </View>
        <View>
          <SpinnerButton buttonStyle={styles.buttonCall}>
            <Text style={{ color: "black" }}>Call</Text>
          </SpinnerButton>
        </View> */}
        <View style={styles.info2}>
        <Text style={styles.infoText}>
            Số lượng tầng: {route.params.soTang}
          </Text>
          <Text style={styles.infoText}>
            Diện tích: {route.params.dienTich}
          </Text>
          <Text style={styles.infoText}>
            Số lượng phòng ngủ: {route.params.soPhongNgu}
          </Text>
          <Text style={styles.infoText}>
            Pháp lý: {route.params.phapLy == 1 ? 'Có sổ đỏ' : 'Không có sổ đỏ'}
          </Text>
          <Text style={styles.infoText}>
            Ngày đăng tin: {route.params.ngayDangTin}
          </Text>
          <Text style={styles.infoText}>
            Ngày hết hạn: {route.params.ngayHetHan}
          </Text>
          <Text style={styles.infoText}>Mô tả: {route.params.moTa}</Text>
          
        </View>
        <View style={{alignItems: 'center'}}>
        <Text style={{fontWeight: 'bold', fontSize: 22, marginBottom: 10}}>
            Vị trí
          </Text>
          <View style={{ width: 400, height: 300 }}>
            <MapView
              style={styles.map}
              provider="google"
              region={{
                latitude: latitude,
                longitude: longitude,
                latitudeDelta: 0.0422,
                longitudeDelta: 0.0151,
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
    fontSize: 22,
    fontStyle: "italic",
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 5
  },
  location: {
    fontWeight: "bold",
    fontSize: 18,
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
