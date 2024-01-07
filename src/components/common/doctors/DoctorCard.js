import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React from "react";
import Card from "../basic/Card";
import Button from "../basic/Button";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";

const DoctorCard = (props) => {
  const doctor = props.doctor;
  const navigation = useNavigation();
  const bookNow = () => {
    navigation.navigate("Schedule Appointment", { doctor_id: doctor.id });
  };
  const cardClickHandler = () => {
    navigation.navigate("DoctorsDetails", { doctor_id: doctor.id });
  };
  let stars = [];
  const rating = Math.floor(doctor.rating * 2) / 2;
  const halfStar = rating - Math.floor(rating) != 0;
  for (let i = 1; i <= Math.floor(rating); i++) {
    stars.push(i);
  }
  // console.log(doctor.user);

  return (
    <Pressable onPress={cardClickHandler}>
      <Card style={[styles.card]}>
        <Image
          style={[styles.doctorImage]}
          source={{
            // uri: "https://www.shutterstock.com/image-photo/healthcare-medical-staff-concept-portrait-600nw-2281024823.jpg",
            uri: doctor.user.image,
          }}
        />
        <View style={{ flex: 1, justifyContent: "space-between" }}>
          <View style={styles.doctorDetails}>
            <Text style={[styles.doctorName]}>{doctor.user.name}</Text>
            <Text style={[styles.doctorSpeciality]}>{doctor.speciality}</Text>
          </View>
          <View style={[styles.spacing, styles.starContainer]}>
            {stars.map((it, id) => {
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
            {halfStar && (
              <Icon
                style={[styles.star]}
                name="star-half"
                size={20}
                color="#f6d060"
              />
            )}
          </View>
          <View style={styles.doctorDetails}>
            <Button title={"Book Now"} onPress={bookNow} />
          </View>
        </View>
      </Card>
    </Pressable>
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

export default DoctorCard;
