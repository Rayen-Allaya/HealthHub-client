import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";

const Input = (props) => {
  return <TextInput {...props} style={[styles.input]} />;
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 12,
    height: 60,
    borderColor: "#E6E8EE",
    backgroundColor: "white",
    padding: 10,
  },
});

export default Input;
