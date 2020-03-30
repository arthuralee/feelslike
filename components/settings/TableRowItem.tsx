import React, { useRef, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  TextInput,
} from "react-native";

export default function TableRowItem({
  title,
  onPress,
  icon,
  rightElement,
  rightLabel,
  rightLabelEditable,
  rightLabelOnEndEditing,
}: {
  title: string;
  onPress: () => void;
  icon?: React.ReactNode;
  rightElement?: React.ReactNode;
  rightLabel?: string;
  rightLabelEditable?: boolean;
  rightLabelOnEndEditing?: (value: string) => void;
}) {
  const [textValue, setTextValue] = useState(rightLabel);
  const textInputRef = useRef(null);

  return (
    <TouchableHighlight
      onPress={() => {
        if (rightLabel && rightLabelEditable) {
          textInputRef.current.focus();
        }
        onPress();
      }}
    >
      <View style={styles.item}>
        {icon ? <View style={styles.iconContainer}>{icon}</View> : null}
        <Text style={styles.title}>{title}</Text>
        {rightElement ? (
          <View>{rightElement}</View>
        ) : rightLabel ? (
          rightLabelEditable ? (
            <TextInput
              style={styles.rightTitle}
              value={textValue}
              ref={textInputRef}
              onChangeText={setTextValue}
              onEndEditing={() => {
                rightLabelOnEndEditing(textValue);
              }}
            />
          ) : (
            <Text style={styles.rightTitle}>{rightLabel}</Text>
          )
        ) : null}
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
  rightTitle: {
    fontSize: 16,
    color: "#aaa",
  },
});
