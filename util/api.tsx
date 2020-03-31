import Constants from "expo-constants";

const ENDPOINT =
  Constants.manifest.releaseChannel === "prod" ? "weather" : "mock";
const API_KEY = "toEqcAA2dV5yntp8qIGcI5a6XaBPFEYj7EOORODV";
const API_URL = `https://api.feelslike.app.skieslab.io/${ENDPOINT}`;

interface WeatherCondition {
  apparentTemperature: number;
  precipIntensity: number;
  precipProbability: number;
}

export interface WeatherData {
  status: "idle" | "success" | "pending" | "failed";
  now?: WeatherCondition;
  lastUpdated?: Date;
}

export async function fetchWeather(location): Promise<WeatherData> {
  try {
    const response = await fetch(
      `${API_URL}?lat=${location.latitude}&long=${location.longitude}`,
      {
        headers: {
          "x-api-key": API_KEY,
        },
      }
    );
    const responseJson = await response.json();
    return {
      now: responseJson.now,
      status: "success",
      lastUpdated: new Date(),
    };
  } catch (e) {
    return {
      status: "failed",
    };
  }
}
