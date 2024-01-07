import { View, Text, FlatList } from "react-native";
import React from "react";
import DoctorCard from "../../components/common/doctors/DoctorCard";

const DoctorsGrid = (props) => {
  const doctors = props.doctors;
  return (
    <View>
      <FlatList
        data={doctors}
        renderItem={({ item, index }) => <DoctorCard doctor={item} />}
        keyExtractor={(item, index) => String(index)}
      />
    </View>
  );
};

export default DoctorsGrid;
