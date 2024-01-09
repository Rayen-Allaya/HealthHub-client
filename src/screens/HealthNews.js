import { View, Text, FlatList, StyleSheet, Image } from "react-native";
import React, { useEffect, useState } from "react";
import Card from "../components/common/basic/Card";
import moment from "moment";

const HealthNews = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    (async function () {
      const response = await fetch(
        "https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=56fb6833a9fd4f06ac25c75dc6c90c0f"
      );
      const res = await response.json();
      setNews(res.articles);
    })();
  }, []);
  if (!news) {
    return <Text>Loading</Text>;
  }

  return (
    <View>
      <FlatList
        data={news}
        renderItem={({ item, index }) => {
          if (!item.urlToImage || !item.urlToImage.includes(".")) {
            return <></>;
          }
          return (
            <Card style={styles.appointmentCard}>
              <View style={styles.externalContainer}>
                <View style={styles.doctorContainer}>
                  <Image
                    style={[styles.doctorImage]}
                    source={{
                      uri: item.urlToImage,
                    }}
                  />
                  <Text
                    style={{
                      color: "#0EBE7F",
                      fontSize: 18,
                      fontWeight: "700",
                      padding: 10,
                    }}
                  >
                    {item.title}
                  </Text>

                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "500",
                      paddingHorizontal: 10,
                    }}
                  >
                    {item.author}
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "400",
                      paddingHorizontal: 10,
                    }}
                  >
                    {moment(item.publishedAt).format("hh:mm DD/MM/YYYY")}
                  </Text>

                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "400",
                      padding: 10,
                    }}
                  >
                    {item.content}
                  </Text>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "400",
                      paddingHorizontal: 10,
                      paddingBottom: 20,
                    }}
                  >
                    {item.description}
                  </Text>
                </View>
              </View>
            </Card>
          );
        }}
        keyExtractor={(item, index) => String(index)}
      />
      {news && news.length == 0 && (
        <Text
          style={{
            color: "#0EBE7F",
            fontSize: 20,
            fontWeight: "700",
            marginTop: 200,
            textAlign: "center",
          }}
        >
          Loading
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  appointmentCard: {
    backgroundColor: "white",
    // paddingVertical: 20,
    // paddingHorizontal: 10,
    margin: 10,
  },
  doctorImage: {
    flex: 1,
    objectFit: "cover",
    height: 300,
    width: "100%",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  externalContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  doctorContainer: {
    flex: 3,
  },
  time: {
    fontWeight: "800",
    color: "#0EBE7F",
    fontSize: 18,
    marginBottom: 5,
  },
  doctorName: {
    fontWeight: "700",
    fontSize: 16,
    paddingBottom: 5,
  },
  doctorSpeciality: {
    color: "#0EBE7F",
  },
});

export default HealthNews;
