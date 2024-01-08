import { FlatList, Pressable } from "react-native";
import React from "react";
import SpecialityCard from "./SpecialityCard";

const SpecialityList = (props) => {
  const specialities = [
    {
      name: "Dentist",
      image: require("../../../assets/images/home/tooth.png"),
    },
    {
      name: "Cardiologist",
      image: require("../../../assets/images/home/heart.png"),
    },
    {
      name: "Ophthalmologists",
      image: require("../../../assets/images/home/eye.png"),
    },
    {
      name: "Dermatologist",
      image: require("../../../assets/images/home/dermatology.png"),
    },
  ];

  const selected = props.selected ? props.selected : "";

  return (
    <FlatList
      data={specialities}
      horizontal
      renderItem={({ item, index }) => (
        <Pressable
          style={{ opacity: selected == item.name ? 0.5 : 1 }}
          onPress={() => {
            props.onPress(item.name);
          }}
        >
          <SpecialityCard color={colors[index % 4]} imageSource={item.image} />
        </Pressable>
      )}
      keyExtractor={(item, index) => String(index)}
    />
  );
};

const colors = ["#366DF4", "#4BC589", "#F87F42", "#F5484B"];

export default SpecialityList;
