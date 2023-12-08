import { FlatList } from "react-native";
import React from "react";
import SpecialityCard from "./SpecialityCard";

const SpecialityList = () => {
  const specialities = [
    { image: require("../../../assets/images/home/tooth.png") },
    { image: require("../../../assets/images/home/heart.png") },
    { image: require("../../../assets/images/home/eye.png") },
    { image: require("../../../assets/images/home/dermatology.png") },
  ];
  return (
    <FlatList
      data={specialities}
      horizontal
      renderItem={({ item, index }) => (
        <SpecialityCard color={colors[index % 4]} imageSource={item.image} />
      )}
      keyExtractor={(item, index) => String(index)}
    />
  );
};

const colors = ["#366DF4", "#4BC589", "#F87F42", "#F5484B"];

export default SpecialityList;
