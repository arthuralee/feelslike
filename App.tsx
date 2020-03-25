import { enableScreens } from "react-native-screens";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createStore } from "redux";
import { Provider } from "react-redux";

import reducer from "./store/reducer";
import HomeScreen from "./components/HomeScreen";
import SettingsScreen from "./components/SettingsScreen";
import UnitsScreen from "./components/UnitsScreen";

enableScreens();

const Stack = createStackNavigator();

const store = createStore(reducer);

const settingsHeaderOptions = {
  headerTintColor: "#000",
  headerBackTitleVisible: false,
};

export default function App() {
  return (
    <Provider store={store}>
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
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
