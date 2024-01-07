import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import DoctorCard from "../../components/common/doctors/DoctorCard";
import Button from "../../components/common/basic/Button";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation, useRoute } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import { baseUrl } from "../../../apiUrl";

const ReviewsScreen = () => {
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
    navigation.navigate("Doctor Details");
  };
  const [review, setReview] = useState("");
  const handleReviewChange = (text) => {
    setReview(text);
  };
  const handleSubmit = () => {
    // Add logic here for submitting the review (e.g., send it to the backend)
    console.log("Review submitted:", review);
    // Clear the input after submission
    setReview("");
  };

  if (!doctor) {
    return <Text>Loading</Text>;
  }
  if (!reviews) {
    return <Text>Loading</Text>;
  }

  return (
    <ScrollView>
      {/* <View>
                <TouchableOpacity onPress={goToOtherScreen}>
                    <Text style={styles.back}><Icon style={styles.icon} name="arrow-left"/> Back </Text>
                </TouchableOpacity>
            </View> */}
      <DoctorCard doctor={doctor} />
      <View style={styles.view}>
        <Text style={styles.title1}>All Reviews</Text>
        {reviews.map((review, id) => {
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
                { borderBottomWidth: id == reviews.length - 1 ? 0 : 1 },
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
                {review.review.substring(0, 100)}
                {review.review.length > 100 && "..."}
              </Text>
            </View>
          );
        })}
      </View>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Write your review here..."
          value={review}
          onChangeText={handleReviewChange}
          multiline
        />
        <Button title="Submit Review!" onPress={handleSubmit} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  back: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 10,
  },
  icon: {
    fontSize: 15,
  },
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
  container: {
    margin: 20,
  },
  input: {
    height: 100,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
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

export default ReviewsScreen;
