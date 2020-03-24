import React from "react";
import { StyleSheet, View, Text, TouchableHighlight } from "react-native";

export default function TableRowItem({
  title,
  onPress,
  icon,
  rightElement,
}: {
  title: string;
  onPress: () => void;
  icon?: React.ReactNode;
  rightElement?: React.ReactNode;
}) {
  return (
    <TouchableHighlight onPress={onPress}>
      <View style={styles.item}>
        {icon ? <View style={styles.iconContainer}>{icon}</View> : null}
        <Text style={styles.title}>{title}</Text>
        {rightElement ? <View>{rightElement}</View> : null}
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 15,
  },
  title: {
    fontSize: 16,
    color: "#333",
    flexGrow: 1,
  },
  iconContainer: {
    marginRight: 8,
  },
});
