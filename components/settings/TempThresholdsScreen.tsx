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
}))(({ temp, selectedTempUnit }) => (
  <TableRowItem
    title={`${displayTemp(temp, selectedTempUnit)}º ${selectedTempUnit}`}
    onPress={() => {}}
  />
));

function TempThresholdsScreen({ tempThresholds }) {
  return (
    <SafeAreaView style={styles.container}>
      <SectionList<React.ReactElement>
        sections={[
          {
            title: "Thresholds",
            data: tempThresholds.map((temp, i) => (
              <TempThresholdRow temp={temp} />
            )),
          },
        ]}
        renderItem={({ item }) => item}
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
});

export default connect((state: AppState) => ({
  tempThresholds: state.tempThresholds,
}))(TempThresholdsScreen);
