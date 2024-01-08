import React, { useState } from "react";
import SpecialityList from "../../components/doctorsList/SpecialityList";
import { ScrollView } from "react-native";
import PopularDoctors from "../../components/home/PopularDoctors";
import { Banner } from "../../components/home/Banner";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [governorate, setGovernorate] = useState("");
  const [name, setName] = useState("");
  const [speciality, setSpeciality] = useState("");

  function nameClickHandler(secname) {
    navigation.navigate("Find Doctors", { name: secname });
  }

  function specialityClickHandler(specName) {
    specName = specName.replace(/\s/g, "");
    // if (speciality == specName) {
    //   setSpeciality("");
    // } else {
    //   setSpeciality(specName);
    // }
    navigation.navigate("Find Doctors", { speciality: specName });
  }
  return (
    <ScrollView>
      <Banner name={name} setName={setName} />
      <SpecialityList onPress={specialityClickHandler} />
      <PopularDoctors />
    </ScrollView>
  );
};

export default HomeScreen;
