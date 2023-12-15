import { Text, StyleSheet, View, TextInput, Image } from "react-native";
import React, { Component } from "react";
import { LinearGradient } from "expo-linear-gradient";
import SignInput from "../../components/common/basic/SignInput";
import Button from "../../components/common/basic/Button";
import Input from "../../components/common/basic/Input";
import Profilepic from "../../components/common/basic/Profilepic";

export const Profile = () => {
  return (
    <LinearGradient
      colors={["rgba(14, 190, 127,0.5)", "white"]}
      start={{ x: 0.2, y: 0.1 }}
      style={{
        // justifyContent: "center",
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        top: -100,
        paddingTop: 150,
      }}
    >
      <View style={styles.container}>
        <Profilepic
          source={require("../../../assets/images/profile/profilepic.jpg")}
          style={{ width: 150, height: 150, alignSelf: "center" }}
        />
        <Text style={styles.text}>Personnal Informations</Text>
        <Input
          placeholder={"Nom"}
          style={{
            width: 350,
            height: 64,
            color: "black",
            alignSelf: "center",
            borderColor: "grey",
          }}
        />
        <Input
          placeholder={"Prénom"}
          style={{
            width: 350,
            height: 64,
            color: "black",
            alignSelf: "center",
            borderColor: "grey",
          }}
        />
        <Input
          placeholder={"Numéro"}
          keyboardType={"decimal-pad"}
          style={{
            width: 350,
            height: 64,
            color: "black",
            alignSelf: "center",
            borderColor: "grey",
          }}
        />
        <Input
          placeholder={"Date de naissance"}
          style={{
            width: 350,
            height: 64,
            color: "black",
            alignSelf: "center",
            borderColor: "grey",
          }}
        />
        <Input
          placeholder={"Adresse"}
          style={{
            width: 350,
            height: 64,
            color: "black",
            alignSelf: "center",
            borderColor: "grey",
          }}
        />
        <Button
          title={"Continue"}
          width={200}
          style={{ margin: 10, alignSelf: "center", top: 40}}
        />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 2,
    rowGap: 8,
  },
  text: {
    marginTop: 50,
    marginBottom:10,
    alignSelf: "baseline",
    fontSize: 15,
    fontWeight: "bold",
  },
});
