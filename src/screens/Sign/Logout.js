import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect } from "react";
import { Text } from "react-native";

function Logout() {
  const navigation = useNavigation();
  const route = useRoute();
  let setToken = route.params.setToken;
  useEffect(() => {
    (async function () {
      await AsyncStorage.removeItem("token");
      navigation.navigate("Home");
      setToken("");
    })();
  }, []);
  return <Text>Logging Out</Text>;
}

export default Logout;
