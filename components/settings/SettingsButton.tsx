import React from "react";
import { StyleSheet, View, TouchableHighlight } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const SIZE = 32;

export default function SettingsButton({ onPress }: { onPress: () => void }) {
  return (
    <TouchableHighlight
      onPress={onPress}
      style={styles.container}
      underlayColor="rgba(0,0,0,0.15)"
    >
      <Ionicons name="ios-settings" size={SIZE} color="rgba(0,0,0,0.4)" />
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderRadius: SIZE,
    width: SIZE,
    height: SIZE,
  },
});
