import React from "react";
import { StyleSheet, View } from "react-native";

import Mountains from "./Mountains";

export default function BlankScreen() {
  return (
    <View style={styles.background}>
      <View style={styles.background}></View>
      <Mountains />
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#E5F8FF",
    zIndex: -1,
  },
});
