import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function GoalItem({ text, onDeleteItem, id }) {
  return (
    <Pressable onPress={() => onDeleteItem(id)}>
      <View style={styles.item}>
        <Text style={styles.itemText}>{text}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  item: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  itemText: {
    color: "white",
  },
});
