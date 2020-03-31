import React, { useState, useEffect, useRef } from "react";
import {
  Animated,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Text,
} from "react-native";
import * as Location from "expo-location";

import LastUpdatedLabel from "./LastUpdatedLabel";
import Mountains from "./Mountains";
import SettingsButton from "./settings/SettingsButton";
import CurrentWeatherBlock from "./CurrentWeatherBlock";
import LocationStatusIndicator from "./LocationStatusIndicator";
import { WeatherData, fetchWeather } from "../util/api";
import { LoadingWeatherBlock } from "./WeatherBlock";

interface LocationData {
  latitude: number;
  longitude: number;
  placeName: string;
}

export default function HomeScreen({ navigation }) {
  const [location, setLocation] = useState<LocationData>(null);
  const [isFetchingLocation, setIsFetchingLocation] = useState(true);
  const [weatherData, setWeatherData] = useState<WeatherData>({
    status: "idle",
  });

  async function fetchLocation() {
    try {
      const { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        throw new Error("Location permission not granted");
      }

      const location = await Location.getCurrentPositionAsync({});
      const address = await Location.reverseGeocodeAsync({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
      setLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        placeName: address[0] ? address[0].city : "Unknown location",
      });
    } catch (e) {
    } finally {
      setIsFetchingLocation(false);
    }
  }

  const fadeInAnim = useRef(new Animated.Value(0)).current;
  const fadeInWeatherBlock = () => {
    Animated.timing(fadeInAnim, {
      toValue: 1,
      duration: 500,
    }).start();
  };

  useEffect(() => {
    if (!location) {
      fetchLocation();
    }
    if (location && weatherData.status === "idle") {
      setWeatherData({ ...weatherData, status: "pending" });
      fetchWeather(location).then(newWeatherData => {
        setWeatherData(newWeatherData);
        fadeInWeatherBlock();
      });
    }
  }, [location]);

  function renderBody() {
    return (
      <>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>{location.placeName}</Text>
        </View>
        <View style={styles.relativeContainer}>
          <LoadingWeatherBlock />
          <Animated.View
            style={[
              styles.weatherBlockContainer,
              {
                opacity: fadeInAnim,
              },
            ]}
          >
            {weatherData.status === "success" ? (
              <CurrentWeatherBlock
                temperature={weatherData.now.apparentTemperature}
              />
            ) : null}
          </Animated.View>
        </View>
        <View style={styles.lastUpdatedContainer}>
          <LastUpdatedLabel date={weatherData.lastUpdated} />
        </View>
      </>
    );
  }

  return (
    <View style={styles.background}>
      <ScrollView>
        <SafeAreaView>
          {location ? (
            renderBody()
          ) : (
            <View style={styles.titleContainer}>
              <LocationStatusIndicator
                status={isFetchingLocation ? "loading" : "failed"}
              />
            </View>
          )}
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
  relativeContainer: {
    position: "relative",
  },
  weatherBlockContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
  },
});
