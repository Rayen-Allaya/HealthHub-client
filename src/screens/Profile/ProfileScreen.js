import React, { useState } from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  Modal,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Avatar } from "react-native-elements";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Button from "../../components/common/basic/Button";

const ProfileScreen = () => {
  const navigation = useNavigation();
  const navigateToEditProfile = () => {
    navigation.navigate("EditProfile");
  };
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <LinearGradient
      colors={["rgba(14, 190, 127,0.5)", "white"]}
      start={{ x: 0.2, y: 0.1 }}
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        top: -100,
        paddingTop: 150,
      }}
    >
      <ScrollView style={styles.container}>
        <TouchableOpacity onPress={navigateToEditProfile}>
          {/* <Image
            source={require("../../../assets/images/profile/edit.png")}
            style={{
              width: 30,
              height: 30,
              alignSelf: "flex-end",
              justifyContent: "flex-end",
            }}
          /> */}
        </TouchableOpacity>
        <View style={{ alignSelf: "center" }}>
          {/* <Avatar
            source={require("../../../assets/images/profile/profilepic.jpg")}
            size={109}
            rounded
            showEditButton
            activeOpacity={0.7}
            containerStyle={{
              marginRight: 10,
              marginBottom: 20,
            }}
          /> */}

          <Text
            style={[
              styles.title,
              {
                alignSelf: "flex-start",
                margin: 10,
              },
            ]}
          >
            John Doe
          </Text>
        </View>

        <View style={styles.userInfoSection}>
          <View style={styles.row}>
            {/* <Image
              source={require("../../../assets/images/profile/location.png")}
              style={styles.logo}
            /> */}
            <Text style={{ color: "#777777", marginLeft: 20 }}>
              Tunis, Tunisia
            </Text>
          </View>
          <View style={styles.row}>
            {/* <Image
              source={require("../../../assets/images/profile/phone.png")}
              style={styles.logo}
            /> */}
            <Text style={{ color: "#777777", marginLeft: 20 }}>
              +91-900000009
            </Text>
          </View>

          <View style={styles.row}>
            {/* <Image
              source={require("../../../assets/images/profile/email.png")}
              style={styles.logo}
            /> */}
            <Text style={{ color: "#777777", marginLeft: 20 }}>
              john_doe@email.com
            </Text>
          </View>
        </View>

        <Button title={"History"} onPress={toggleModal} />

        <Modal
          animationOut
          transparent={true}
          coverScreen={false}
          visible={isModalVisible}
          onRequestClose={toggleModal}
        >
          <View style={styles.modalContainer}>
            <ScrollView style={styles.scrollContainer}>
              <Text
                style={{ fontSize: 18, flexDirection: "row", marginBottom: 2 }}
              >
                Doctor one two at 2pm
              </Text>
              <Text
                style={{ fontSize: 18, flexDirection: "row", marginBottom: 2 }}
              >
                dotor salah at 1pm
              </Text>
              <Text
                style={{ fontSize: 18, flexDirection: "row", marginBottom: 2 }}
              >
                dotor salah at 1pm
              </Text>
              <Text
                style={{ fontSize: 18, flexDirection: "row", marginBottom: 2 }}
              >
                dotor salah at 1pm
              </Text>
              <Text
                style={{ fontSize: 18, flexDirection: "row", marginBottom: 2 }}
              >
                dotor salah at 1pm
              </Text>
            </ScrollView>
            <TouchableOpacity onPress={toggleModal} style={styles.closeButton}>
              {/* <Image
                source={require("../../../assets/images/profile/arrow-up.png")}
                style={styles.logo}
              /> */}
            </TouchableOpacity>
          </View>
        </Modal>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    alignContent: "center",
  },
  userInfoSection: {
    borderRadius: 18,
    paddingHorizontal: 30,
    marginTop: 10,
    marginBottom: 20,
    backgroundColor: "white",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },

  row: {
    marginTop: 10,
    flexDirection: "row",
    columnGap: 2,
    margin: 10,
  },
  logo: {
    width: 20,
    height: 20,
    alignSelf: "center",
  },
  scrollContainer: {
    flexGrow: 1,
    marginBottom: 10,
  },
  modalContainer: {
    position: "absolute",
    maxHeight: 140,
    bottom: 180,
    left: 0,
    right: 0,
    backgroundColor: "white",
    padding: 15,
    margin: 8,
    borderRadius: 10,
  },
  closeButton: {
    marginButtom: 8,
    width: 50,
    alignSelf: "center",
    backgroundColor: "#0EBE7F",
    padding: 8,
    borderRadius: 5,
  },
});

export default ProfileScreen;
