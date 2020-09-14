import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { Feather } from "@expo/vector-icons";

const SearchBar = (props) => {
  return (
    <View style={styles.searchBar}>
      <Feather
        style={{ padding: 12, paddingRight: 0 }}
        name="search"
        size={24}
        color="black"
      />
      <GooglePlacesAutocomplete
        placeholder="Tìm địa điểm"
        minLength={2}
        autoFocus={false}
        returnKeyType={"default"}
        listViewDisplayed={true}
        fetchDetails={true}
        onPress={(data, details = null) => props.handleSearch(details)}
        query={{
          // available options: https://developers.google.com/places/web-service/autocomplete
          key: "AIzaSyAhuvkbu8iQU3vptKQSbaHQNlTJv0ndTVw",
          language: "vn", // language of the results
          // types: '(cities)', // default: 'geocode'
        }}
        currentLocation={true}
        currentLocationLabel="Current location"
        styles={{
          textInputContainer: {
            backgroundColor: "rgba(0,0,0,0)",
            borderTopWidth: 0,
            borderBottomWidth: 0,
          },
          textInput: {
            marginLeft: 0,
            marginRight: 0,
            height: 38,
            color: "#5d5d5d",
            fontSize: 16,
          },
          predefinedPlacesDescription: {
            color: "#1faadb",
          },
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: "row",
    position: "absolute",
    left: 20,
    top: 20,
    right: 80,
    zIndex: 1,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
});

export default SearchBar;
