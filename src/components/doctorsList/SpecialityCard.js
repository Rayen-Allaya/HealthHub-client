import Card from "../common/basic/Card";
import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const SpecialityCard = ({ color, imageSource }) => {
  return (
    <Card style={[styles.container, { backgroundColor: color }]}>
      <Image source={imageSource} style={styles.logo} />
      <View style={[styles.circle1]}></View>
      <View style={[styles.circle2]}></View>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
    width: 130,
    height: 130,
    margin: 10,
    position: "relative",
    overflow: "hidden",
  },
  logo: {
    resizeMode: "contain",
    height: 100,
  },
  circle1: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: "white",
    position: "absolute",
    opacity: 0.05,
    bottom: -130,
  },
  circle2: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: "white",
    position: "absolute",
    opacity: 0.05,
    bottom: -20,
    right: -75,
  },
});

export default SpecialityCard;
