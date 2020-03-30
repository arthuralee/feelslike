import React from "react";
import { StyleSheet, SafeAreaView, SectionList } from "react-native";
import { connect } from "react-redux";

import { AppState, setTempThresholdLabel } from "../../store/reducer";
import { displayTemp } from "../../util/units";
import TableRowItem from "./TableRowItem";
import TableRowHeader from "./TableRowHeader";
import ItemSeparator from "./ItemSeparator";

const TempThresholdRow = connect((state: AppState) => ({
  selectedTempUnit: state.tempUnit,
}))(({ temp, label, labelOnEndEditing, selectedTempUnit }) => (
  <TableRowItem
    title={`${displayTemp(temp, selectedTempUnit)}º ${selectedTempUnit}`}
    rightLabel={label}
    rightLabelEditable={true}
    rightLabelOnEndEditing={labelOnEndEditing}
    onPress={() => {}}
  />
));

interface RecsScreenListItem {
  temp: number;
  label: string;
}

function RecsScreen({
  tempThresholds,
  tempThresholdLabels,
  setTempThresholdLabel,
}) {
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
        renderItem={({ item, index }) => (
          <TempThresholdRow
            temp={item.temp}
            label={item.label}
            labelOnEndEditing={value => {
              setTempThresholdLabel(value, index);
            }}
          />
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
  { setTempThresholdLabel }
)(RecsScreen);
