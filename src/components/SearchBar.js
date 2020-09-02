import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Button } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { Feather } from "@expo/vector-icons";

const SearchBar = () => {
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
        fetchDetails={true}
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
    height: 50,
    zIndex: 1,
    backgroundColor: "white",
  },
});

export default SearchBar;
