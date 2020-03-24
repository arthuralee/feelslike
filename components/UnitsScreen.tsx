import React from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  SectionList,
  TouchableHighlight,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
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

export default function UnitsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={[
          {
            title: "Select a unit",
            data: [
              <TableRowItem
                title="Fahrenheit"
                key="F"
                rightElement={<Checkmark />}
                onPress={() => {}}
              />,
              <TableRowItem
                title="Celsius"
                key="C"
                rightElement={null}
                onPress={() => {}}
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
  checkmarkContainer: {
    marginVertical: "-100%",
  },
});
