import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import Card from "../basic/Card";
import Button from "../basic/Button";

const DoctorCard = () => {
  return (
    <Card style={[styles.card]}>
      <Image
        style={[styles.doctorImage]}
        source={{
          uri: "https://www.shutterstock.com/image-photo/healthcare-medical-staff-concept-portrait-600nw-2281024823.jpg",
        }}
      />
      <View style={{ flex: 1, justifyContent: "space-between" }}>
        <View style={styles.doctorDetails}>
          <Text style={[styles.doctorName]}>Dr.Ahmed Salah</Text>
          <Text style={[styles.doctorSpeciality]}>Ophthalmologist</Text>
        </View>
        <View style={styles.doctorDetails}>
          <Button title={"Book Now"} />
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
    minHeight: 200,
    backgroundColor: "white",
    flexDirection: "row",
  },
  doctorImage: {
    flex: 1,
    objectFit: "cover",
    height: "100%",
    width: "100%",
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
  },
  doctorDetails: {
    padding: 10,
  },
  doctorName: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: 700,
  },
  doctorSpeciality: {
    textAlign: "center",
    color: "#0EBE7F",
    marginVertical: 15,
  },
});

export default DoctorCard;
