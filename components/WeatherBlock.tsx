import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { connect } from "react-redux";

import RecommendationLabel from "./RecommendationLabel";
import { displayTemp } from "../util/units";

const COLORS = [
  ["#E170E0", "#B65050"],
  ["#6D8BE5", "#D75CAE"],
  ["#707BE1", "#E094E7"],
  ["#70B5E1", "#9594E7"],
  ["#45B9CB", "#A5DA82"],
];

function WeatherBlock({
  timeLabel,
  label,
  colorScale,
  temperature,
  selectedTempUnit,
}) {
  return (
    <View style={styles.shadowContainer}>
      <LinearGradient
        style={styles.gradientContainer}
        colors={COLORS[colorScale]}
      >
        <View style={styles.topContainer}>
          <Text style={styles.timeText}>{timeLabel}</Text>
          <Text style={styles.tempText}>
            {displayTemp(temperature, selectedTempUnit)}º
          </Text>
        </View>
        <View style={styles.bottomContainer}>
          <RecommendationLabel text={label} />
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  shadowContainer: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 2,
  },
  gradientContainer: {
    justifyContent: "center",
    paddingHorizontal: 20,
    height: 200,
    margin: 20,
    borderRadius: 10,
    overflow: "hidden",
  },
  timeText: {
    textTransform: "uppercase",
    marginBottom: 20,
    fontSize: 24,
    color: "white",
    fontWeight: "300",
  },
  tempText: {
    fontWeight: "700",
    letterSpacing: -2,
    color: "rgba(255,255,255,0.3)",
    fontSize: 90,
    marginRight: -28,
    marginTop: -20,
  },
  topContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 20,
  },
  bottomContainer: {
    flex: 1,
  },
});

export default connect(state => ({
  selectedTempUnit: state.tempUnit,
}))(WeatherBlock);
