import React from "react";
import SpecialityList from "../../components/doctorsList/SpecialityList";
import { ScrollView, View } from "react-native";
import PopularDoctors from "../../components/home/PopularDoctors";
import { Banner } from "../../components/home/Banner";
import Footer from "../../components/home/Footer";

const HomeScreen = () => {
  return (
    <View>
      <ScrollView>
        <Banner />
        <SpecialityList />
        <PopularDoctors />
      </ScrollView>
      <Footer />
    </View>
  );
};

export default HomeScreen;
