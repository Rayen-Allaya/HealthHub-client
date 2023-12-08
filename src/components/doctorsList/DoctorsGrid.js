import { View, Text, FlatList } from "react-native";
import React from "react";
import DoctorCard from "../../components/common/doctors/DoctorCard";

const DoctorsGrid = () => {
  const doctors = [1, 2, 3, 4, 5, 6];
  return (
    <View>
      <FlatList
        data={doctors}
        renderItem={({ item, index }) => <DoctorCard />}
        keyExtractor={(item, index) => String(index)}
      />
    </View>
  );
};

export default DoctorsGrid;
