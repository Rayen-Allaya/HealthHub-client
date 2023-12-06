import React from "react";
import SpecialityList from "../../components/doctorsList/SpecialityList";
import { ScrollView } from "react-native";
import PopularDoctors from "../../components/home/PopularDoctors";
import { Banner } from "../../components/home/Banner";

const HomeScreen = () => {
  return (
    <ScrollView>
      <Banner />
      <SpecialityList />
      <PopularDoctors />
    </ScrollView>
  );
};

export default HomeScreen;
