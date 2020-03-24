import React from "react";
import { StyleSheet, View } from "react-native";

export default function ItemSeparator() {
  return <View style={styles.itemSeparator} />;
}

const styles = StyleSheet.create({
  itemSeparator: {
    height: 1,
    backgroundColor: "#f3f3f3",
  },
});
