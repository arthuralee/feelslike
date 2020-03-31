import React from "react";
import { StyleSheet, Text } from "react-native";
import moment from "moment";

export default function LastUpdatedLabel({ date }) {
  return (
    <Text style={styles.text}>
      {date
        ? `Updated ${moment(date).format("h:mm A")}`
        : "Not updated recently"}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    fontWeight: "300",
    color: "rgba(0,0,0,0.5)",
  },
});
