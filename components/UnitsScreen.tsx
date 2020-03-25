import React from "react";
import { StyleSheet, View, SafeAreaView, SectionList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { connect } from "react-redux";

import { AppState, setTempUnit } from "../store/reducer";
import { getLabelFromUnit } from "../util/units";
import TableRowItem from "./TableRowItem";
import TableRowHeader from "./TableRowHeader";
import ItemSeparator from "./ItemSeparator";

function Checkmark() {
  return (
    <View style={styles.checkmarkContainer}>
      <Ionicons name="ios-checkmark" size={40} color="rgb(0,122,255)" />
    </View>
  );
}

const TempUnitSelectionRow = connect(
  (state: AppState) => ({
    selectedTempUnit: state.tempUnit,
  }),
  { setTempUnit }
)(({ id, selectedTempUnit, setTempUnit }) => (
  <TableRowItem
    title={getLabelFromUnit(id)}
    rightElement={selectedTempUnit === id ? <Checkmark /> : null}
    onPress={() => {
      setTempUnit(id);
    }}
  />
));

export default function UnitsScreen({ selectedTempUnit, setTempUnit }) {
  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={[
          {
            title: "Select a unit",
            data: [
              <TempUnitSelectionRow id="F" key="F" />,
              <TempUnitSelectionRow id="C" key="C" />,
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
  checkmarkContainer: {
    marginVertical: "-100%",
  },
});
