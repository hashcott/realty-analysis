import React from "react";
import { StyleSheet, View, TouchableHighlight } from "react-native";

import { Feather } from "@expo/vector-icons";

const CustomButton = (props) => {
  return (
    <TouchableHighlight
      activeOpacity={0.6}
      underlayColor="#DDDDDD"
      onPress={props.HandleClickList}
      style={styles.list}
    >
      <View>
        <Feather name={props.icon} size={24} color="black" />
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  list: {
    position: "absolute",
    backgroundColor: "white",
    padding: 10,
    paddingTop: 13,
    bottom: 180,
    right: 20,
    height: 50,
    zIndex: 1,
    width: 50,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CustomButton;
