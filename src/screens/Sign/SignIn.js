import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Image,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import SignInput from "../../components/common/basic/SignInput";
import Button from "../../components/common/basic/Button";
import { useNavigation, useRoute } from "@react-navigation/native";
import { baseUrl } from "../../../apiUrl";
const SignIn = () => {
  const navigation = useNavigation();
  const navigateToSignIn = () => {
    navigation.navigate("Register");
  };
  const navigateToHome = () => {
    navigation.navigate("Home");
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const route = useRoute();

  let setToken = route.params.setToken;

  async function submit() {
    const response = await fetch(`http://${baseUrl()}/api/auth/login`, {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const res = await response.json();
    const token = res.token;
    console.log(res);
    await AsyncStorage.setItem("token", token);
    navigation.navigate("Home");
    setToken(token);
  }

  return (
    <LinearGradient
      colors={["rgba(14, 190, 127, 0.5)", "rgba(255, 255, 255, 0.5)"]}
      start={{ x: 1, y: 0.5 }}
      end={{ x: 0, y: 0.5 }}
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
      <View style={{ alignItems: "center", marginBottom: 10 }}>
        <Image
          source={require("../../../assets/images/home/logo.png")}
          style={styles.logo}
        />
      </View>
      <View style={styles.text}>
        <Text style={styles.join}>Welcome back</Text>
        <Text style={styles.paragraph}>
          Our platform offers the best booking system to enable you to save time
        </Text>
      </View>
      <SignInput
        label={"Email"}
        icon={"mail"}
        value={email}
        type={"email"}
        setValue={setEmail}
      />
      <SignInput
        label={"Password"}
        icon={"lock"}
        value={password}
        type={"password"}
        setValue={setPassword}
      />
      <Button
        onPress={submit}
        title={"Sign In"}
        style={{ marginHorizontal: 20, marginTop: 25 }}
      />

      <View style={{ marginTop: 10 }}>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <Text style={styles.footer}>Don't have an account ? </Text>
          <TouchableOpacity onPress={navigateToSignIn}>
            <Text
              style={{
                fontWeight: "800",
                textDecorationLine: "underline",
                color: "#0EBE7F",
              }}
            >
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={navigateToHome}>
          <Text style={[styles.footer, { textDecorationLine: "underline" }]}>
            Continue as a guest
          </Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  //   screen: {
  //     flex: 1,
  //     height: 11000,
  //   },
  logo: {
    height: 100,
    width: 100,
  },
  text: {
    alignItems: "center",
    marginTop: -25,
  },
  join: {
    fontSize: 30,
  },
  paragraph: {
    paddingLeft: 30,
    paddingRight: 30,
    textAlign: "center",
    marginBottom: 30,
  },
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
  footer: {
    textAlign: "center",
    color: "#0EBE7F",
  },
});

export default SignIn;
