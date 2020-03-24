import React from "react";
import { StyleSheet, Text } from "react-native";

export default function TableRowHeader({ title }) {
  return <Text style={styles.header}>{title}</Text>;
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#f3f3f3",
    color: "#999",
    fontSize: 13,
    fontWeight: "bold",
    paddingTop: 20,
    paddingHorizontal: 10,
    paddingBottom: 10,
    textTransform: "uppercase",
  },
});
