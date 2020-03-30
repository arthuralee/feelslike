import { enableScreens } from "react-native-screens";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { persistStore, persistReducer } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { AsyncStorage } from "react-native";

import reducer from "./store/reducer";
import BlankScreen from "./components/BlankScreen";
import HomeScreen from "./components/HomeScreen";
import SettingsScreen from "./components/settings/SettingsScreen";
import UnitsScreen from "./components/settings/UnitsScreen";
import RecsScreen from "./components/settings/RecsScreen";
import TempThresholdsScreen from "./components/settings/TempThresholdsScreen";

enableScreens();

const Stack = createStackNavigator();

// Redux and persistence setup
const persistedReducer = persistReducer(
  {
    key: "root",
    storage: AsyncStorage,
  },
  reducer
);
const store = createStore(persistedReducer);
const persistor = persistStore(store);

const settingsHeaderOptions = {
  headerTintColor: "#000",
  headerBackTitleVisible: false,
};

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<BlankScreen />}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Settings"
              component={SettingsScreen}
              options={settingsHeaderOptions}
            />
            <Stack.Screen
              name="Units"
              component={UnitsScreen}
              options={settingsHeaderOptions}
            />
            <Stack.Screen
              name="Customize recomendations"
              component={RecsScreen}
              options={settingsHeaderOptions}
            />
            <Stack.Screen
              name="Temperature thresholds"
              component={TempThresholdsScreen}
              options={settingsHeaderOptions}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
