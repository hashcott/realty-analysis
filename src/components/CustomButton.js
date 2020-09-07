import React from "react";
import { StyleSheet, View, TouchableHighlight } from "react-native";

import { Feather } from "@expo/vector-icons";

const CustomButton = (props) => {
  return (
    <TouchableHighlight
      activeOpacity={0.6}
      underlayColor="#DDDDDD"
      onPress={props.HandleClickList}
      style={{ ...styles.button, ...props.styling }}
    >
      <View>
        <Feather name={props.icon} size={24} color="black" />
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    backgroundColor: "white",
    bottom: 180,
    right: 20,
    height: 50,
    zIndex: 1,
    width: 50,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
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

export default CustomButton;
