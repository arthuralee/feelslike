import React from "react";
import { StyleSheet, View, Text, ActivityIndicator } from "react-native";

type Status = "loading" | "failed";

export default function LocationStatusIndicator({
  status,
}: {
  status: Status;
}) {
  return (
    <View style={styles.container}>
      {status === "loading" ? (
        <ActivityIndicator size="small" color="#777" />
      ) : null}
      <Text style={styles.text}>
        {status === "loading"
          ? "Getting your location"
          : "Failed to get location\n\nPlease make sure FeelsLike has permission to access your location"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 50,
  },
  text: {
    marginLeft: 5,
    fontSize: 18,
    fontWeight: "300",
    color: "#777",
  },
});
