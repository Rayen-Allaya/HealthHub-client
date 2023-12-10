import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";
import PopularDoctorsCard from "./PopularDoctorsCard";

const PopularDoctors = () => {
  const doctors = [1, 2, 3, 4];
  return (
    <View style={[styles.section]}>
      <Text style={[styles.title]}>Popular Doctors</Text>
      <FlatList
        data={doctors}
        horizontal
        renderItem={({ item, index }) => <PopularDoctorsCard />}
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
  title: {
    marginHorizontal: 15,
    marginBottom: 10,
    fontSize: 24,
    fontWeight: 700,
  },
});
