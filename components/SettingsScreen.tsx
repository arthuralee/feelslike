import React from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  SectionList,
  TouchableHighlight,
} from "react-native";
import { Linking } from "expo";

function Item({ title, onPress }) {
  return (
    <TouchableHighlight onPress={onPress}>
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableHighlight>
  );
}

function ItemSeparator() {
  return <View style={styles.itemSeparator} />;
}

export default function SettingsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={[
          {
            title: "General",
            data: [<Item title="Units" key="units" onPress={() => {}} />],
          },
          {
            title: "Credits",
            data: [
              <Item
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
          <Text style={styles.header}>{title}</Text>
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
  item: {
    backgroundColor: "#fff",
    padding: 15,
  },
  header: {
    backgroundColor: "#f3f3f3",
    color: "#999",
    fontSize: 13,
    fontWeight: "bold",
    paddingTop: 20,
    paddingHorizontal: 10,
    paddingBottom: 10,
    textTransform: "uppercase",
  },
  title: {
    fontSize: 16,
    color: "#333",
  },
  itemSeparator: {
    height: 1,
    backgroundColor: "#f3f3f3",
  },
});
