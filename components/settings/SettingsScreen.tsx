import React from "react";
import { StyleSheet, SafeAreaView, SectionList } from "react-native";
import { Linking } from "expo";
import { Ionicons } from "@expo/vector-icons";
import { connect } from "react-redux";

import { AppState } from "../../store/reducer";
import ItemSeparator from "./ItemSeparator";
import TableRowItem from "./TableRowItem";
import TableRowHeader from "./TableRowHeader";
import { getLabelFromUnit } from "../../util/units";

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
                rightLabel={getLabelFromUnit(selectedTempUnit)}
                onPress={() => {
                  navigation.navigate("Units");
                }}
              />,
              <TableRowItem
                title="Customize recommendations"
                key="recs"
                icon={
                  <Ionicons
                    name="ios-build"
                    size={20}
                    color="rgba(0,0,0,0.4)"
                  />
                }
                onPress={() => {
                  navigation.navigate("Customize recomendations");
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
});

export default connect((state: AppState) => ({
  selectedTempUnit: state.tempUnit,
}))(SettingsScreen);
