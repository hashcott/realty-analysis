import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableHighlight,
} from "react-native";
import extraStyle from "../components/SliderEntry/SliderEntry.style";

const ItemLocation = ({ item }) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={styles.container}
      onPress={() => {
        alert(`You've clicked '${item.title}'`);
        
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <View style={{ width: 100, height: 100 }}>
          <Image source={{ uri: item.illustration }} style={extraStyle.image} />
        </View>
        <View style={extraStyle.textContainer}>
          <Text style={extraStyle.title} numberOfLines={2}>
            {item.title}
          </Text>
          <View style={{ marginTop: 6, flexDirection: "row" }}>
            <FontAwesome name="dollar" size={20} color="red" />
            <Text style={extraStyle.subtitle} numberOfLines={1}>
              {item.subtitle}
            </Text>
          </View>
          <Text style={extraStyle.subtitle} numberOfLines={1}>
            {item.type}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 400,
    height: 200,
    backgroundColor: 'white',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});

export default ItemLocation;
