import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";

const Input = () => {
  return (
    <View>
      <TextInput style={styles.input} placeholder="useless placeholder" />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 12,
    height: 50,
    borderColor: "#E6E8EE",
    // margin: 12,
    padding: 10,
  },
});

export default Input;
