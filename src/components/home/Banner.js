import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { SearchBar } from "react-native-elements";

export const Banner = () => {
  const [searchValue, setSearchValue] = useState("");

  const searchChangeHandler = (search) => {
    setSearchValue(search);
  };

  return (
    <View style={[styles.section]}>
      <Text style={[styles.title, styles.mainTitle]}>Welcome to HealHub</Text>
      <Text style={[styles.title, styles.secondaryTitle]}>
        Welcome to HealHub
      </Text>
      <SearchBar
        placeholder="Type Here..."
        round={true}
        value={searchValue}
        onChangeText={searchChangeHandler}
        containerStyle={[
          styles.searchBarContainer,
          styles.searchBarContainerPosition,
        ]}
        inputContainerStyle={[styles.searchBar]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    height: 140,
    backgroundColor: "#0EBE7F",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    marginBottom: 50,
    position: "relative",
  },
  title: {
    marginHorizontal: 20,
    color: "white",
  },
  mainTitle: {
    fontSize: 20,
  },
  secondaryTitle: {
    fontSize: 30,
    marginTop: 15,
    fontWeight: 700,
  },
  searchBarContainerPosition: {
    position: "absolute",
    width: "100%",
    bottom: -30,
  },
  searchBarContainer: {
    backgroundColor: "transparent",
    borderBottomColor: "transparent",
    borderTopColor: "transparent",
  },
  searchBar: { backgroundColor: "white", height: 60 },
});
