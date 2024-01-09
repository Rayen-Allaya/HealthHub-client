import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import Card from "../common/basic/Card";
import { useNavigation } from "@react-navigation/native";

const PopularDoctorsCard = (props) => {
  const doctor = props.doctor;
  let stars = [];
  const rating = Math.floor(doctor.rating * 2) / 2;
  const halfStar = rating - Math.floor(rating) != 0;
  for (let i = 1; i <= Math.floor(rating); i++) {
    stars.push(i);
  }

  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() => {
        navigation.navigate("DoctorsDetails", { doctor_id: doctor.id });
      }}
    >
      <Card style={[styles.card]}>
        <Image
          source={{
            uri: doctor.user.image,
          }}
          style={[styles.spacing, styles.doctorImage]}
        />
        <Text style={[styles.spacing, styles.doctorName]}>{doctor.name}</Text>
        <Text style={[styles.spacing, styles.speciality]}>
          {doctor.speciality}
        </Text>
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
      </Card>
    </Pressable>
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
