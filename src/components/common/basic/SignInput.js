import React from "react";
import { Image, StyleSheet, View, Text, TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/Feather";

const SignInput = ({ label, icon, value, setValue, type }) => {
  function changeHandler(e) {
    setValue(e);
  }
  return (
    <>
      <View>
        <View style={styles.container}>
          <Text style={styles.label}>{label}</Text>
          <Icon
            name={icon}
            size={20}
            color="black"
            style={{ marginRight: 15 }}
          />
        </View>
        <LinearGradient
          colors={["#0EBE7F", "white"]}
          style={styles.input}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
        >
          <TextInput
            value={value}
            keyboardType={type == "email" ? "email-address" : "default"}
            autoCapitalize="none"
            secureTextEntry={type == "password"}
            onChangeText={changeHandler}
            style={styles.text}
          />
        </LinearGradient>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 25,
    height: 50,
    borderColor: "#E6E8EE",
    padding: 10,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 5,
    opacity: 0.5,
  },
  label: {
    flex: 1,
    fontSize: 18,
    fontWeight: "800",
  },
  container: {
    flexDirection: "row",
    width: 130,
    marginLeft: 30,
  },
  text: {
    paddingLeft: 30,
    paddingRight: 30,
  },
});

export default SignInput;
