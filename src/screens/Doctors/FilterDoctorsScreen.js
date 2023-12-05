import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import Input from "../../components/common/basic/Input";
import Card from "../../components/common/basic/Card";
import SpecialityList from "../../components/doctorsList/SpecialityList";
import SelectDropdown from "react-native-select-dropdown";
import Button from "../../components/common/basic/Button";

const FilterDoctorsScreen = () => {
  const countries = ["Ariana", "Sousse", "Monastir", "Mahdia", "Jerba", "Sfax"];
  return (
    <View>
      <Card style={styles.card}>
        <SpecialityList />
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Doctor's Name</Text>
          <TextInput style={styles.input} placeholder="Doctor's Name" />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Location</Text>
          <SelectDropdown
            data={countries}
            onSelect={(selectedItem, index) => {}}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
            buttonStyle={styles.selectDropdown}
            dropdownStyle={styles.selectDropdownList}
            defaultButtonText={"Select Government"}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Price Range</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TextInput
              style={[styles.input, styles.priceInput]}
              placeholder="Min"
              keyboardType="numeric"
            />
            <TextInput
              style={[styles.input, styles.priceInput]}
              placeholder="Max"
              keyboardType="numeric"
            />
          </View>
        </View>
        <View style={[styles.inputContainer, { marginTop: 40 }]}>
          <Button title={"Apply Filters"} />
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    margin: 10,
    padding: 10,
    paddingTop: 15,
    paddingBottom: 25,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 10,
  },
  inputContainer: {
    paddingHorizontal: 10,
    marginTop: 25,
  },
  input: {
    borderWidth: 1,
    borderRadius: 12,
    height: 60,
    borderColor: "#E6E8EE",
    backgroundColor: "white",
    padding: 10,
  },
  priceInput: {
    minWidth: 100,
    marginHorizontal: 5,
  },
  selectDropdown: {
    borderWidth: 1,
    borderRadius: 12,
    borderColor: "#E6E8EE",
    backgroundColor: "white",
    height: 60,
    width: "100%",
  },
  selectDropdownList: {
    borderRadius: 12,
  },
});

export default FilterDoctorsScreen;
