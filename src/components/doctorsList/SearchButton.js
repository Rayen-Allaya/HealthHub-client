import { Pressable } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";

const SearchButton = () => {
  const navigation = useNavigation();

  const onPressFunction = () => {
    navigation.navigate("Search");
  };
  return (
    <Pressable onPress={onPressFunction}>
      <Icon
        name="magnifying-glass"
        size={30}
        color="black"
        style={{ marginRight: 15 }}
      />
    </Pressable>
  );
};

export default SearchButton;
