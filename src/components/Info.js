import React from 'react'
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

export default function Info({ item }) {
  return (
    <TouchableOpacity>
      <Text style={styles.item}>{item.title}, {item.price}, {item.type}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 1,
    borderRadius: 10,
    flexDirection: "column"
  }
});