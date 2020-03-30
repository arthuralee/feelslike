import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  SectionList,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { connect } from "react-redux";
import { Ionicons } from "@expo/vector-icons";

import {
  AppState,
  incrementTempThreshold,
  decrementTempThreshold,
} from "../../store/reducer";
import { displayTemp } from "../../util/units";
import TableRowHeader from "./TableRowHeader";
import ItemSeparator from "./ItemSeparator";

const StepButton = ({ iconName, onPress }) => (
  <TouchableOpacity
    activeOpacity={0.5}
    style={styles.stepButton}
    onPress={onPress}
  >
    <Ionicons name={iconName} size={40} color="#ccc" />
  </TouchableOpacity>
);

const TempThresholdRow = connect(
  (state: AppState) => ({
    selectedTempUnit: state.tempUnit,
  }),
  { incrementTempThreshold, decrementTempThreshold }
)(
  ({
    temp,
    selectedTempUnit,
    index,
    incrementTempThreshold,
    decrementTempThreshold,
  }) => (
    <View style={styles.item}>
      <StepButton
        iconName="md-remove-circle"
        onPress={() => decrementTempThreshold(index)}
      />
      <Text style={styles.title}>{`${displayTemp(
        temp,
        selectedTempUnit
      )}º ${selectedTempUnit}`}</Text>
      <StepButton
        iconName="md-add-circle"
        onPress={() => incrementTempThreshold(index)}
      />
    </View>
  )
);

function TempThresholdsScreen({ tempThresholds }) {
  return (
    <SafeAreaView style={styles.container}>
      <SectionList<React.ReactElement>
        sections={[
          {
            title: "Thresholds",
            data: tempThresholds.map((temp, i) => (
              <TempThresholdRow temp={temp} index={i} />
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
  item: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 5,
    justifyContent: "space-around",
  },
  title: {
    fontSize: 25,
    color: "#333",
  },
  stepButton: {
    padding: 20,
  },
});

export default connect((state: AppState) => ({
  tempThresholds: state.tempThresholds,
}))(TempThresholdsScreen);
