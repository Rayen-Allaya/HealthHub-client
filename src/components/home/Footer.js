import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import SearchButton from "../doctorsList/SearchButton";
import { color } from "react-native-elements/dist/helpers";
import { useNavigation } from "@react-navigation/native";
import { TouchableHighlight } from "react-native-gesture-handler";

const Footer = () => {
  const navigation = useNavigation();
  const [IsPressed, setIsPressed] = useState(false);

  const onPressFunction = () => {
    navigation.navigate("Privacy Policy");
  };

  var touchProps = {
    style: IsPressed ? styles.btnPress : styles.btnNormal, // <-- but you can still apply other style changes
  };

  return (
    <View style={styles.container}>
      <TouchableHighlight {...touchProps}>
        <View style={styles.iconContainer}>
          <FontAwesome
            name="home"
            size={24}
            color="#858EA9"
            // style={styles.btnPress}
          />
          <FontAwesome
            name="heart"
            size={20}
            color="#858EA9"
            style={styles.btnPress}
          />
          <SearchButton color={"#858EA9"} size={20} />

          <MaterialIcons
            name="privacy-tip"
            size={20}
            color="#858EA9"
            onPress={onPressFunction}
          />
        </View>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    height: 45,
    borderTopWidth: 1, // Add a border for separation
    borderTopColor: "#ccc", // Set the border color
  },
  iconContainer: {
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  btnPress: {
    color: "red",
  },
});

export default Footer;
