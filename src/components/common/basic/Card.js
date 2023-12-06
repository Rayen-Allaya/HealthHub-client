import React from "react";
import { View, StyleSheet } from "react-native";

const Card = (props) => {
  return <View style={[props.style, styles.card]}>{props.children}</View>;
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
});

export default Card;
