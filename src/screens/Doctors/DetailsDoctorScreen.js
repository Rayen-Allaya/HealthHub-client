import { ScrollView } from "react-native-gesture-handler";
import Button from "../../components/common/basic/Button";
import DoctorCard from "../../components/common/doctors/DoctorCard";
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const DetailsDoctorScreen = () => {
  const reviews = [
    { content: "loremjds sdfs sdfs sdfs sdfsd sdfsd sdf " },
    { content: "loremjds sdfs sdfs sdfs sdfsd sdfsd sdf " },
    { content: "loremjds sdfs sdfs sdfs sdfsd sdfsd sdf " },
  ];
  return (
    <ScrollView>
      <DoctorCard />
      <View style={styles.view}>
        <Text style={styles.title1}>Hello World!</Text>
        {reviews.map((review, id) => {
          return (
            <View
              key={id}
              style={[
                styles.reviewContainer,
                { borderBottomWidth: id == reviews.length - 1 ? 0 : 0.4 },
              ]}
            >
              <Text style={styles.paragraph}>{review.content}</Text>
            </View>
          );
        })}
        <Button title={"Next availability "} />
      </View>
      <View style={styles.Container}>
        <View style={[styles.Location]}>
          <Text style={[styles.title2]}>Location</Text>
        </View>
        <Image
          style={[styles.imageContainer]}
          source= {require("../../../assets/images/home/map.jpg")}
        ></Image>
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
  },
  paragraph: {
    fontSize: 15,
    fontWeight: "bold",
    paddingBottom: 10,
    paddingTop: 10,
  },
  Container: {
    flexDirection: "row",
  },
  imageContainer: {
    margin:20,
    height: 200,
    flex: 1,
    borderRadius:20,
  },
  Location: {
    flex: 1,
    justifyContent:"center",
    alignItems:"center",
  },
  title2: {
    color: "#1B98D2",
    fontSize: 18,
    fontWeight: "500",
    shadowColor: "#000",
    shadowOpacity: .8,
    shadowRadius:16.00,
    shadowOffset:{width: 6, height: 6},
    elevation: 24,
  }
});

export default DetailsDoctorScreen;
