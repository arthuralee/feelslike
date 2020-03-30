import React from "react";
import { StyleSheet, SafeAreaView, SectionList } from "react-native";
import { connect } from "react-redux";
import { Ionicons } from "@expo/vector-icons";

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

function RecsScreen({
  tempThresholds,
  tempThresholdLabels,
  setTempThresholdLabel,
  navigation,
}) {
  return (
    <SafeAreaView style={styles.container}>
      <SectionList<React.ReactElement>
        sections={[
          {
            title: "Recommendations",
            data: tempThresholds.map((temp, i) => (
              <TempThresholdRow
                temp={temp}
                label={tempThresholdLabels[i]}
                labelOnEndEditing={value => {
                  setTempThresholdLabel(value, i);
                }}
              />
            )),
          },
          {
            title: "Thresholds",
            data: [
              <TableRowItem
                title="Set temperature thresholds"
                key="recs"
                onPress={() => {
                  navigation.navigate("Temperature thresholds");
                }}
                rightElement={
                  <Ionicons
                    name="ios-arrow-forward"
                    size={20}
                    color="rgba(0,0,0,0.4)"
                  />
                }
              />,
            ],
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

export default connect(
  (state: AppState) => ({
    tempThresholds: state.tempThresholds,
    tempThresholdLabels: state.tempThresholdLabels,
  }),
  { setTempThresholdLabel }
)(RecsScreen);
