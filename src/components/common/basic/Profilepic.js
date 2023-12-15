import { View, Text, TextInput, StyleSheet, Image } from "react-native";
import React from "react";

const Profilepic = (props) => {
  return <Image {...props} style={[styles.profilepic, props.style]} />;
};

const styles = StyleSheet.create({
  profilepic: {
    borderRadius: 100,
    margin: 4,
  },
});

export default Profilepic;
