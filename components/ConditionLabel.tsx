import React, { useEffect, useState } from "react";
import { StyleSheet, Text } from "react-native";
import * as Font from "expo-font";

export default function ConditionLabel({ text }) {
  const [isFontReady, setIsFontReady] = useState(false);
  useEffect(() => {
    Font.loadAsync({
      "FredokaOne-Regular": require("../assets/fonts/FredokaOne/FredokaOne-Regular.ttf"),
    }).then(() => {
      setIsFontReady(true);
    });
  });
  return isFontReady ? (
    <Text
      style={styles.conditionText}
      adjustsFontSizeToFit={true}
      numberOfLines={1}
    >
      {text}
    </Text>
  ) : null;
}

const styles = StyleSheet.create({
  conditionText: {
    fontFamily: "FredokaOne-Regular",
    fontSize: 48,
    color: "white",
    marginTop: -5,
  },
});
