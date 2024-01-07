import { ScrollView } from "react-native-gesture-handler";
import Button from "../../components/common/basic/Button";
import DoctorCard from "../../components/common/doctors/DoctorCard";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Pressable,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import { OpenMaps } from "../../utils/OpenMaps";
import { useNavigation, useRoute } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import { baseUrl } from "../../../apiUrl";

const DetailsDoctorScreen = () => {
  const [doctor, setDoctor] = useState();
  const [reviews, setReviews] = useState();
  // const doctor = { location: { latitude: 36.8936411, longitude: 10.1857502 } };
  const navigation = useNavigation();
  const route = useRoute();
  const doctor_id = route.params.doctor_id;

  useEffect(() => {
    (async function () {
      const response = await fetch(
        `http://${baseUrl()}/api/doctors/${doctor_id}`
      );
      const res = await response.json();
      setDoctor(res);
    })();
  }, []);

  useEffect(() => {
    (async function () {
      const response = await fetch(
        `http://${baseUrl()}/api/doctors/${doctor_id}/reviews`
      );
      const res = await response.json();
      setReviews(res);
    })();
  }, []);

  const goToOtherScreen = () => {
    // Navigate to the other screen when "See more" is clicked
    navigation.navigate("Reviews", { doctor_id });
  };
  if (!doctor) {
    return <Text>Loading</Text>;
  }

  return (
    <ScrollView>
      <DoctorCard doctor={doctor} />
      <View style={styles.Container}>
        <View>
          <Text style={[styles.title2]}>Location</Text>
        </View>
        <Pressable
          style={styles.mapPressableContainer}
          onPress={() =>
            OpenMaps(doctor.latitude, doctor.longitude, doctor.user.name)
          }
        >
          <View style={styles.mapOverlay}>
            <Text style={styles.mapOverlayText}>View On Maps...</Text>
            <Image
              source={require("../../../assets/images/doctors/click.gif")}
              style={{
                maxHeight: 50,
                marginTop: -20,
                opacity: 0.5,
                objectFit: "contain",
              }}
            />
          </View>
          <MapView
            style={{ height: "100%", width: "100%" }}
            region={{
              latitude: doctor.latitude,
              longitude: doctor.longitude,
              latitudeDelta: 0.05,
              longitudeDelta: 0.05,
            }}
          >
            <Marker
              coordinate={{
                latitude: doctor.latitude,
                longitude: doctor.longitude,
              }}
              identifier={"mk1"}
            />
          </MapView>
        </Pressable>
      </View>
      <View style={{ marginLeft: 30, marginRight: 30 }}>
        <Button title={"Next availability"} />
      </View>
      {reviews && (
        <View style={styles.view}>
          <Text style={styles.title1}>Reviews</Text>
          {reviews.slice(0, 3).map((review, id) => {
            let stars = [];
            const rating = Math.floor(review.rating * 2) / 2;
            const halfStar = rating - Math.floor(rating) != 0;
            for (let i = 1; i <= Math.floor(rating); i++) {
              stars.push(i);
            }
            return (
              <View
                key={id}
                style={[
                  styles.reviewContainer,
                  {
                    borderBottomWidth: id == reviews.length - 1 ? 0 : 1,
                  },
                ]}
              >
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

                <Text style={styles.paragraph}>
                  {review.review.substring(0, 80)}
                  {review.review.length > 80 && "..."}
                </Text>
              </View>
            );
          })}
          <View>
            <TouchableOpacity onPress={goToOtherScreen}>
              <Text style={styles.seeMore}>
                See More <Icon name="chevron-right" />{" "}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  view: {
    paddingTop: 16,
    paddingLeft: 20,
    paddingRight: 20,
  },
  title1: {
    color: "#1B98D2",
    fontSize: 18,
    fontWeight: "500",
    paddingTop: 10,
  },
  paragraph: {
    fontSize: 15,
    fontWeight: "bold",
    paddingTop: 20,
    paddingBottom: 15,
  },
  seeMore: {
    fontSize: 15,
    paddingBottom: 25,
    textAlign: "right",
    textDecorationLine: "underline",
  },

  mapPressableContainer: {
    margin: 20,
    height: 200,
    flex: 3,
    borderRadius: 20,
    position: "relative",
  },
  mapOverlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 5,
    backgroundColor: "#00000088",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 30,
  },
  mapOverlayText: {
    color: "white",
    fontSize: 16,
    padding: 20,
  },
  Location: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  title2: {
    marginTop: 10,
    marginLeft: 20,
    color: "#1B98D2",
    fontSize: 18,
    fontWeight: "500",
    shadowColor: "#000",
    shadowOpacity: 0.8,
    shadowRadius: 16.0,
    shadowOffset: { width: 6, height: 6 },
    elevation: 24,
  },
  spacing: {
    marginTop: 15,
  },
  starContainer: {
    flexDirection: "row",
    justifyContent: "start",
    alignItems: "center",
  },
  star: {
    marginHorizontal: 2,
  },
});

// const reviews = [
//   {
//     content:
//       "Dr. Smith is an exceptional physician! Their expertise and attention to detail make them stand out in their field. I've been under their care for various health concerns, and each time, they have provided thorough explanations and effective treatment plans. The friendly and supportive staff at the clinic also contribute to a positive overall experience. I highly recommend Dr. Smith for anyone seeking top-notch medical care.",
//   },

//   {
//     content:
//       "I've been a patient of Dr. Johnson for several years, and I couldn't be happier",
//   },

//   {
//     content:
//       "My experience with Dr. Williams has been nothing short of excellent. From the moment I walked into the office, the staff made me feel comfortable and at ease. Dr. Williams is not only highly skilled but also genuinely cares about their patients. They go above and beyond to ensure that all my questions are answered, and I feel involved in my healthcare decisions. The level of professionalism and dedication to patient well-being is evident throughout the entire practice. I'm grateful to have Dr. Williams as my healthcare provider.",
//   },
// ];

export default DetailsDoctorScreen;
