import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import Card from "../common/basic/Card";

const PopularDoctorsCard = () => {
  return (
    <Card style={[styles.card]}>
      <Image
        source={{
          uri: "https://www.shutterstock.com/image-photo/healthcare-medical-staff-concept-portrait-600nw-2281024823.jpg",
        }}
        style={[styles.spacing, styles.doctorImage]}
      />
      <Text style={[styles.spacing, styles.doctorName]}>Dr.Fillerup Gard</Text>
      <Text style={[styles.spacing, styles.speciality]}>
        Medecine Specialist
      </Text>
      <View style={[styles.spacing, styles.starContainer]}>
        {[1, 2, 3, 4].map((it, id) => {
          return (
            <Icon
              key={id}
              style={[styles.star]}
              name="star"
              size={20}
              color="#f6d060"
            />
          );
        })}

        <Icon
          style={[styles.star]}
          name="star-half"
          size={20}
          color="#f6d060"
        />
      </View>
    </Card>
  );
};

export default PopularDoctorsCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    width: 200,
    margin: 10,
  },
  doctorImage: {
    resizeMode: "cover",
    height: 200,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  doctorName: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "600",
  },
  speciality: {
    textAlign: "center",
  },
  spacing: {
    marginBottom: 15,
  },
  starContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  star: {
    marginHorizontal: 2,
  },
});
