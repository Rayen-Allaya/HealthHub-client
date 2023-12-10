import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import SearchButton from "../doctorsList/SearchButton";
import { color } from "react-native-elements/dist/helpers";

const Footer = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconContainer}>
        <FontAwesome name="home" size={24} color="#858EA9" />
        <FontAwesome name="heart" size={20} color="#858EA9" />
        <SearchButton color={"#858EA9"} size={20} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#fff",
    height: 45, // Set your desired height
    borderTopWidth: 1, // Add a border for separation
    borderTopColor: "#ccc", // Set the border color
  },
  iconContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
});

export default Footer;
