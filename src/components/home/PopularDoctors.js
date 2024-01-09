import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useEffect, useState } from "react";
import PopularDoctorsCard from "./PopularDoctorsCard";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import { baseUrl } from "../../../apiUrl";

const PopularDoctors = () => {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    (async function () {
      const response = await fetch(`http://${baseUrl()}/api/doctors`);
      // console.log(response);
      const res = await response.json();
      setDoctors(res.slice(0, 5));
    })();
  }, []);
  const navigation = useNavigation();
  const goToOtherScreen = () => {
    // Navigate to the other screen when "See more" is clicked
    navigation.navigate("Find Doctors");
  };
  // if (!doctors) {
  //   return <Text>Loading</Text>;
  // }
  return (
    <View style={[styles.section]}>
      <View style={[styles.titles]}>
        <Text style={[styles.title]}>Popular Doctors </Text>
        {/* <TouchableOpacity onPress={goToOtherScreen}>
          <Text style={[styles.narrow]}>
            See More <Icon name="chevron-right" />
          </Text>
        </TouchableOpacity> */}
      </View>

      <FlatList
        data={doctors}
        horizontal
        renderItem={({ item, index }) => <PopularDoctorsCard doctor={item} />}
        keyExtractor={(item, index) => String(index)}
      />
    </View>
  );
};

export default PopularDoctors;

const styles = StyleSheet.create({
  section: {
    paddingVertical: 35,
  },
  titles: {
    flexDirection: "row",
  },
  title: {
    marginHorizontal: 15,
    marginBottom: 10,
    fontSize: 24,
    fontWeight: 700,
  },
  narrow: {
    marginTop: 6,
    marginLeft: 100,
    // fontSize: 13,
    color: "black",
    fontWeight: 200,
    textDecorationLine: "underline",
  },
});
