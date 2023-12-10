import { Pressable } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";

const SearchButton = ({ color = "black", size = 35 }) => {
  const navigation = useNavigation();

  const onPressFunction = () => {
    navigation.navigate("FilterDoctorsScreen");
  };
  return (
    <Pressable onPress={onPressFunction}>
      <Icon
        name="magnifying-glass"
        size={size}
        color={color}
        style={{ marginRight: 15 }}
      />
    </Pressable>
  );
};

export default SearchButton;
