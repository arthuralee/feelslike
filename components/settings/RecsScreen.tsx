import React from "react";
import { StyleSheet, View, SafeAreaView, SectionList } from "react-native";
import { connect } from "react-redux";

import { AppState, setTempUnit } from "../../store/reducer";
import { displayTemp } from "../../util/units";
import TableRowItem from "./TableRowItem";
import TableRowHeader from "./TableRowHeader";
import ItemSeparator from "./ItemSeparator";

const TempThresholdRow = connect((state: AppState) => ({
  selectedTempUnit: state.tempUnit,
}))(({ temp, label, selectedTempUnit }) => (
  <TableRowItem
    title={`${displayTemp(temp, selectedTempUnit)}º ${selectedTempUnit}`}
    rightLabel={label}
    onPress={() => {}}
  />
));

interface RecsScreenListItem {
  temp: number;
  label: string;
}

function RecsScreen({ tempThresholds, tempThresholdLabels }) {
  return (
    <SafeAreaView style={styles.container}>
      <SectionList<RecsScreenListItem>
        sections={[
          {
            title: "Recommendations",
            data: tempThresholds.map((temp, i) => ({
              temp,
              label: tempThresholdLabels[i],
            })),
          },
        ]}
        renderItem={({ item }) => (
          <TempThresholdRow temp={item.temp} label={item.label} />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <TableRowHeader title={title} />
        )}
        keyExtractor={(_, index) => index.toString()}
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

export default connect(
  (state: AppState) => ({
    tempThresholds: state.tempThresholds,
    tempThresholdLabels: state.tempThresholdLabels,
  }),
  { setTempUnit }
)(RecsScreen);
