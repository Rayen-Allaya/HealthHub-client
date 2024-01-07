import { Text, StyleSheet, View, TextInput, Image } from "react-native";
import React, { Component } from "react";
import { LinearGradient } from "expo-linear-gradient";
import SignInput from "../../components/common/basic/SignInput";
import Button from "../../components/common/basic/Button";
import Input from "../../components/common/basic/Input";
import { ScrollView } from "react-native-gesture-handler";
import { Avatar } from "react-native-elements";


export const EditProfile = () => {
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
      <ScrollView style={styles.container}>
        <Avatar
          source={require("../../../assets/images/profile/profilepic.jpg")}
          size={140}
          rounded
          showEditButton
          activeOpacity={0.7}
          containerStyle={{
            marginRight: 10,
            margin: 20,
            alignSelf:"center"
          }}
        />
        <Text style={styles.text}>Personnal Informations</Text>
        <Input placeholder={"Nom"} style={[styles.input]} />
        <Input placeholder={"Prénom"} style={[styles.input]} />
        <Input
          placeholder={"Numéro"}
          keyboardType={"phone-pad"}
          style={[styles.input]}
        />
        <Input placeholder={"Date de naissance"} style={[styles.input]} />
        <Input placeholder={"Adresse"} style={[styles.input]} />
        <Button
          title={"Submit"}
          width={200}
          style={{ margin: 10, alignSelf: "center", top: 40 }}
        />
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 2,
    rowGap: 8,
  },
  text: {
    marginTop: 17,
    marginBottom: 10,
    alignSelf: "center",
    fontSize: 24,
    fontWeight: "bold",

    
  },
  input: {
    width: 350,
    height: 64,
    color: "black",
    alignSelf: "center",
    borderColor: "grey",
    margin: 4,
    borderWidth:2,

  },
});
