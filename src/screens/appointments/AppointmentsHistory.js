import { View, Text, StyleSheet, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import Card from "../../components/common/basic/Card";
import { baseUrl } from "../../../apiUrl";
import AsyncStorage from "@react-native-async-storage/async-storage";
import moment from "moment";

const AppointmentsHistory = () => {
  const [appointments, setAppointments] = useState();
  useEffect(() => {
    (async function () {
      const token = await AsyncStorage.getItem("token");
      const response = await fetch(
        `http:/${baseUrl()}/api/appointmentsHistory`,
        {
          headers: {
            authorization: `Bearer ${token}`,
            "content-type": "application/json",
          },
        }
      );
      const res = await response.json();
      setAppointments(res);
    })();
  }, []);

  if (!appointments) {
    return <Text>Loading</Text>;
  }

  return (
    <View>
      <FlatList
        data={appointments}
        renderItem={({ item, index }) => {
          return (
            <Card style={styles.appointmentCard}>
              <View style={styles.externalContainer}>
                <View style={styles.doctorContainer}>
                  <Text style={styles.doctorName}>
                    {item && item.doctor && item.doctor.name
                      ? item.doctor.name
                      : " "}
                  </Text>
                  <Text style={styles.doctorSpeciality}>
                    {item &&
                    item.doctor &&
                    item.doctor.doctor_profile &&
                    item.doctor.doctor_profile.speciality
                      ? item.doctor.doctor_profile.speciality
                      : " "}
                  </Text>
                </View>
                <View style={{ alignItems: "center" }}>
                  <Text style={styles.time}>
                    {item && item.datetime
                      ? moment(item.datetime).format("hh:mm A")
                      : " "}
                  </Text>
                  <Text style={styles.date}>
                    {item && item.datetime
                      ? moment(item.datetime).format(" DD/MM/YYYY")
                      : " "}
                  </Text>
                </View>
              </View>
            </Card>
          );
        }}
        keyExtractor={(item, index) => String(index)}
      />
      {appointments && appointments.length == 0 && (
        <Text
          style={{
            color: "#0EBE7F",
            fontSize: 20,
            fontWeight: "700",
            marginTop: 200,
            textAlign: "center",
          }}
        >
          No History Appointments
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  appointmentCard: {
    backgroundColor: "white",
    paddingVertical: 20,
    paddingHorizontal: 10,
    margin: 10,
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

export default AppointmentsHistory;
