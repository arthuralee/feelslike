import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Mountains() {
  return (
    <View style={styles.container}>
      <View style={styles.mountain3} />
      <View style={styles.mountain1} />
      <View style={styles.mountain2} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    zIndex: -1,
  },
  mountain2: {
    position: "absolute",
    top: -60,
    right: -300,
    width: 600,
    height: 400,
    backgroundColor: "#ebe6d2",
    borderRadius: 400,
  },
  mountain1: {
    position: "absolute",
    top: -80,
    left: -200,
    width: 600,
    height: 600,
    backgroundColor: "#e1d8b7",
    borderRadius: 600,
  },
  mountain3: {
    position: "absolute",
    top: -80,
    width: 400,
    height: 400,
    backgroundColor: "#caf7ca",
    borderRadius: 400,
  },
});
