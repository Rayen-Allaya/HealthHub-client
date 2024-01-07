import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const Successful = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Home");
    }, 2000);
  }, []);
  return (
    <View>
      <Text
        style={{
          color: "#0EBE7F",
          fontSize: 20,
          fontWeight: "700",
          marginTop: 200,
          textAlign: "center",
        }}
      >
        Your Appointment Is Accepted !
      </Text>
    </View>
  );
};

export default Successful;
