import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

const Button = ({ title, width, height }) => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePressIn = () => {
    setIsPressed(true);
    setTimeout(() => {
      setIsPressed(false);
    }, 1000);
  };

  return (
    <View style={[styles.wrapperCustom, width={width}]}>
      <Pressable
        onPressIn={handlePressIn}
        style={({ pressed }) => [
          pressed && {
            opacity: 0.7,
          },
        ]}
      >
        <Text style={styles.text}>{title}</Text>
      </Pressable>
    </View>
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
