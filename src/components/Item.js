import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import extraStyle from "../components/SliderEntry/SliderEntry.style";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

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
        <View style={{ width: 120, height: 120 }}>
          <Image source={{ uri: item.illustration }} style={extraStyle.image} />
        </View>
        <View style={{ ...extraStyle.textContainer, width: 250 }}>
          <Text style={extraStyle.title} numberOfLines={2}>
            {item.title}
          </Text>
          <View style={extraStyle.subtitleContainer}>
            <FontAwesome name="dollar" size={20} color="red" />
            <Text style={extraStyle.subtitle} numberOfLines={1}>
              {item.subtitle}
            </Text>
          </View>
          <View style={extraStyle.subtitleContainer}>
            <MaterialCommunityIcons
              name="home-city-outline"
              size={24}
              color="black"
            />
            <Text style={extraStyle.subtitle} numberOfLines={1}>
              {item.type}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    width: 600,
  },
});

export default ItemLocation;
