import React from "react";
import { StyleSheet, Text } from "react-native";

export default function LastUpdatedLabel() {
  return <Text style={styles.text}>Last updated 11:29 PM</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    fontWeight: "300",
    color: "rgba(0,0,0,0.5)",
  },
});
