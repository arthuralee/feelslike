import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, View, Text } from "react-native";

import LastUpdatedLabel from "./LastUpdatedLabel";
import Mountains from "./Mountains";
import SettingsButton from "./settings/SettingsButton";
import CurrentWeatherBlock from "./CurrentWeatherBlock";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.background}>
      <ScrollView>
        <SafeAreaView>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>San Francisco</Text>
          </View>
          <CurrentWeatherBlock temperature={4} />
          <View style={styles.lastUpdatedContainer}>
            <LastUpdatedLabel />
          </View>
        </SafeAreaView>
      </ScrollView>

      <View style={styles.settingsButtonContainer}>
        <SafeAreaView>
          <SettingsButton onPress={() => navigation.navigate("Settings")} />
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
    right: 15,
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
