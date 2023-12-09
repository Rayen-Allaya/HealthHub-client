import { ScrollView } from "react-native-gesture-handler";
import Button from "../../components/common/basic/Button";
import DoctorCard from "../../components/common/doctors/DoctorCard";
import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { OpenMaps } from "../../utils/OpenMaps";
import Icon from 'react-native-vector-icons/FontAwesome';

const DetailsDoctorScreen = () => {
  const doctor = { location: { latitude: 36.8936411, longitude: 10.1857502 } };
  return (
    <ScrollView>
      <DoctorCard />
      <View style={styles.view}>
        <Text style={styles.title1}>Reviews</Text>
        {reviews.map((review, id) => {
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
              <Text style={styles.paragraph}>
                {review.content.substring(0, 80)}
                {review.content.length > 80 && "..."}
              </Text>
            </View>
          );
        })}
        <View style={[]}>
          <Text style={styles.seeMore}>See More <Icon name="chevron-right" /> </Text>
        </View>
        <Button title={"Next availability "} />
      </View>
      <View style={styles.Container}>
        <View style={[styles.Location]}>
          <Text style={[styles.title2]}>Location</Text>
        </View>
        <Pressable
          style={styles.mapPressableContainer}
          onPress={() =>
            OpenMaps(
              doctor.location.latitude,
              doctor.location.longitude,
              "Dr.Ahmed Salah"
            )
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
              latitude: doctor.location.latitude,
              longitude: doctor.location.longitude,
              latitudeDelta: 0.05,
              longitudeDelta: 0.05,
            }}
          >
            <Marker coordinate={doctor.location} identifier={"mk1"} />
          </MapView>
        </Pressable>
      </View>
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
    textDecorationLine: 'underline',
  },
  Container: {
    flexDirection: "row",
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
    color: "#1B98D2",
    fontSize: 18,
    fontWeight: "500",
    shadowColor: "#000",
    shadowOpacity: 0.8,
    shadowRadius: 16.0,
    shadowOffset: { width: 6, height: 6 },
    elevation: 24,
  },
});

const reviews = [
  {
    content:
      "Dr. Smith is an exceptional physician! Their expertise and attention to detail make them stand out in their field. I've been under their care for various health concerns, and each time, they have provided thorough explanations and effective treatment plans. The friendly and supportive staff at the clinic also contribute to a positive overall experience. I highly recommend Dr. Smith for anyone seeking top-notch medical care.",
  },

  {
    content:
      "I've been a patient of Dr. Johnson for several years, and I couldn't be happier",
  },

  {
    content:
      "My experience with Dr. Williams has been nothing short of excellent. From the moment I walked into the office, the staff made me feel comfortable and at ease. Dr. Williams is not only highly skilled but also genuinely cares about their patients. They go above and beyond to ensure that all my questions are answered, and I feel involved in my healthcare decisions. The level of professionalism and dedication to patient well-being is evident throughout the entire practice. I'm grateful to have Dr. Williams as my healthcare provider.",
  },
];

export default DetailsDoctorScreen;
