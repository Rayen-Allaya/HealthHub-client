import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import SearchButton from "../doctorsList/SearchButton";
import { color } from "react-native-elements/dist/helpers";
import { useNavigation } from "@react-navigation/native";
import { TouchableHighlight } from "react-native-gesture-handler";

const Footer = () => {
  const navigation = useNavigation();
  const [isPressed, setisPressed] = useState(false);

  const onPress = () => {
    setisPressed(true);
  };
  const getStyle = (isPressed) => {
    style: isPressed ? styles.btnPress : styles.btnNormal;
  };

  const onPressFunction = () => {
    navigation.navigate("Privacy Policy");
  };

  return (
    <View style={styles.container}>
      <TouchableHighlight style={getStyle} onPress={onPress}>
        <FontAwesome name="home" size={24} color="#858EA9" />
      </TouchableHighlight>

      <FontAwesome name="heart" size={20} color="#858EA9" />
      <SearchButton color={"#858EA9"} size={20} />
      <MaterialIcons
        name="privacy-tip"
        size={20}
        color="#858EA9"
        onPress={onPressFunction}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:'1',
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    height: 45,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  btnPress: {
    color: "red",
  },
});

export default Footer;
