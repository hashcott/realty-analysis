import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { createExample } from "../actions/Example";
import { connect } from "react-redux";

import { VictoryPie} from "victory-native";

import { graphicData, graphicColor } from "../DummyData";

export const PieLabel = () => {
    const label = () => {
        let a = '';
        for(let i = 0; i < graphicData.length; i++) {
            a += `<View style={styles.labels}>
            <View style={styles.dot}></View>
            <Text style={{fontSize: 17}}>Chung cu</Text>
          </View>`
        }
        return a;
    }

    return (
        <View>
            {label()}
        </View>
    )
}

const styles = StyleSheet.create({
labels: {
    alignSelf: 'center',
    flexDirection:'row',
  },
  dot: {
    backgroundColor: 'yellow',
    width: 20,
    height: 20,
    borderRadius: 10,
    marginRight: 10
  }
});