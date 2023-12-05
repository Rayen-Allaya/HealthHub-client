import React from "react";
import SpecialityCard from "../../components/home/SpecialityCard";
import SpecialityList from "../../components/home/SpecialityList";
import { ScrollView, View } from "react-native";
import PopularDoctors from "../../components/home/PopularDoctors";
import { Banner } from "../../components/home/Banner";

const HomeScreen = () => {
  return (
    <ScrollView>
      <Banner />
      <SpecialityList />
      <PopularDoctors />
      {/* <SpecialityCard color={'red'} imageSource={require('../../../assets/images/home/tooth.png')}/>
        <SpecialityCard color={'blue'} imageSource={require('../../../assets/images/home/tooth.png')}/>
        <SpecialityCard color={'green'} imageSource={require('../../../assets/images/home/tooth.png')}/> */}
    </ScrollView>
  );
};

export default HomeScreen;
