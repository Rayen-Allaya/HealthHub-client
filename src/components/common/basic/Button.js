import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

const Button = ({ title, width, height, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        ({ pressed }) => [
          pressed && {
            opacity: 0.7,
          },
        ],
        styles.wrapperCustom,
      ]}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  wrapperCustom: {
    paddingVertical: 12,
    borderRadius: 12,
    backgroundColor: "#0EBE7F",
    resizeMode: "contain",
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    color: "white",
    fontWeight: "700",
  },
});

export default Button;
