import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  SectionList,
  Settings,
} from "react-native";
import { Linking } from "expo";
import { Ionicons } from "@expo/vector-icons";
import { connect } from "react-redux";

import { AppState } from "../store/reducer";
import ItemSeparator from "./ItemSeparator";
import TableRowItem from "./TableRowItem";
import TableRowHeader from "./TableRowHeader";
import { getLabelFromUnit } from "../util/units";

function SettingsScreen({ navigation, selectedTempUnit }) {
  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={[
          {
            title: "General",
            data: [
              <TableRowItem
                title="Units"
                key="units"
                icon={
                  <Ionicons
                    name="ios-flask"
                    size={20}
                    color="rgba(0,0,0,0.4)"
                  />
                }
                rightElement={
                  <Text style={styles.rightTitle}>
                    {getLabelFromUnit(selectedTempUnit)}
                  </Text>
                }
                onPress={() => {
                  navigation.navigate("Units");
                }}
              />,
            ],
          },
          {
            title: "Credits",
            data: [
              <TableRowItem
                title="Powered by Dark Sky"
                key="poweredby"
                onPress={() =>
                  Linking.openURL("https://darksky.net/poweredby/")
                }
              />,
            ],
          },
        ]}
        renderItem={({ item }) => item}
        renderSectionHeader={({ section: { title } }) => (
          <TableRowHeader title={title} />
        )}
        ItemSeparatorComponent={ItemSeparator}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rightTitle: {
    fontSize: 16,
    color: "#aaa",
  },
});

export default connect((state: AppState) => ({
  selectedTempUnit: state.tempUnit,
}))(SettingsScreen);
