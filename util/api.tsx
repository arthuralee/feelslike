import Constants from "expo-constants";

const ENDPOINT =
  Constants.manifest.releaseChannel === "prod" ? "weather" : "mock";
const API_KEY = "toEqcAA2dV5yntp8qIGcI5a6XaBPFEYj7EOORODV";
const API_URL = `https://api.feelslike.app.skieslab.io/${ENDPOINT}`;
const CACHE_TIMEOUT = 8000;

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

let cache = {};

function normalizeInput(location) {
  // Round lat and long to nearest 0.01, which gives
  // very roughly 1km of movement before refetching weather
  const lat = Math.round(location.latitude * 100) / 100;
  const long = Math.round(location.longitude * 100) / 100;
  return `${lat},${long}`;
}

function setCache(location, response) {
  const cacheKey = normalizeInput(location);
  cache[cacheKey] = response;
  setTimeout(() => {
    cache = {};
  }, CACHE_TIMEOUT);
  return response;
}

function getCache(location) {
  const cacheKey = normalizeInput(location);
  return cache[cacheKey];
}

export async function fetchWeather(location): Promise<WeatherData> {
  const cachedResponse = getCache(location);
  if (cachedResponse) {
    return cachedResponse;
  }

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
    return setCache(location, {
      now: responseJson.now,
      status: "success",
      lastUpdated: new Date(),
    });
  } catch (e) {
    return {
      status: "failed",
    };
  }
}
