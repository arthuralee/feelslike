import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import LastUpdatedLabel from "./components/LastUpdatedLabel";
import WeatherBlock from "./components/WeatherBlock";
import Mountains from "./components/Mountains";

export default function App() {
  return (
    <View style={styles.background}>
      <ScrollView>
        <SafeAreaView>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>San Francisco</Text>
          </View>
          <WeatherBlock
            timeLabel="Right now"
            label="T-shirt"
            colorScale={1}
            temperature={71}
          />
          <WeatherBlock
            timeLabel="Later"
            label="Light jacket"
            colorScale={2}
            temperature={63}
          />
          <View style={styles.lastUpdatedContainer}>
            <LastUpdatedLabel />
          </View>
        </SafeAreaView>
      </ScrollView>

      <View style={styles.settingsButtonContainer}>
        <SafeAreaView>
          <Ionicons name="ios-settings" size={32} color="rgba(0,0,0,0.4)" />
        </SafeAreaView>
      </View>

      <Mountains />
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#E5F8FF",
  },
  settingsButtonContainer: {
    position: "absolute",
    top: 0,
    right: 20,
  },
  lastUpdatedContainer: {
    marginLeft: 23,
    marginTop: 10,
  },
  titleContainer: {
    marginLeft: 23,
    marginTop: 50,
    marginBottom: 20,
  },
  titleText: {
    fontSize: 45,
    letterSpacing: -0.5,
    fontWeight: "100",
  },
});
