import { View, Text, StyleSheet, Pressable, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import Card from "../../components/common/basic/Card";
import moment from "moment";
import { Calendar } from "react-native-calendars";
import Icon from "react-native-vector-icons/FontAwesome";
import Input from "../../components/common/basic/Input";
import Button from "../../components/common/basic/Button";
import { useNavigation, useRoute } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { baseUrl } from "../../../apiUrl";

const constructCalendarMonth = (d) => {
  const days = [];
  const startOfMonth = d.startOf("month");
  // const endOfMonth = d.endOf("month");
  const firstCalendarDay = startOfMonth
    .clone()
    .subtract(startOfMonth.day() - 1, "days");
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 7; j++) {
      let day = firstCalendarDay.clone().add(i * 7 + j, "days");
      days.push(day);
    }
  }
  return days;
};

const DoctorAvailibilityScreen = () => {
  const [doctor, setDoctor] = useState();
  const [availibilities, setAvailibilities] = useState();
  const [rows, setRows] = useState();
  const [availableTimes, setAvailableTimes] = useState([]);
  const currentDate = moment();
  const [selectedDay, setSelectedDay] = useState(currentDate);

  // const doctor = { location: { latitude: 36.8936411, longitude: 10.1857502 } };
  const navigation = useNavigation();
  const route = useRoute();
  const doctor_id = route.params.doctor_id;

  useEffect(() => {
    (async function () {
      const response = await fetch(
        `http://${baseUrl()}/api/doctors/${doctor_id}`
      );
      const res = await response.json();
      setDoctor(res);
    })();
  }, []);

  useEffect(() => {
    (async function () {
      const response = await fetch(
        `http://${baseUrl()}/api/doctors/${doctor_id}/availibilities`
      );
      const res = await response.json();
      setRows(res);
      setAvailibilities(
        res.map((row, id) => {
          return moment(row.datetime);
        })
      );
      updateAvailableTime();
    })();
  }, []);

  const [date, setDate] = useState(currentDate.clone());

  const switchPreviousMonth = () => {
    setDate((prevState) => {
      return prevState.clone().subtract(1, "month");
    });
  };

  const switchNextMonth = () => {
    setDate((prevState) => {
      return prevState.clone().add(1, "month");
    });
  };

  if (!doctor || !availibilities) {
    return <Text>Loading</Text>;
  }

  function updateAvailableTime(day) {
    if (availibilities) {
      setSelectedDay(day);
      const dayAvailibilities = availibilities.filter(
        (date) => date.format("YYYY/MM/DD") === day.format("YYYY/MM/DD")
      );
      setAvailableTimes(dayAvailibilities.map((date) => date.clone()));
    }
  }

  const pressHandler = async (datetime) => {
    const id = rows.filter(
      (row) =>
        moment(row.datetime).format("YYYY/MM/DD hh:mm") ==
        moment(datetime).format("YYYY/MM/DD hh:mm")
    )[0].id;

    token = await AsyncStorage.getItem("token");

    let response = await fetch(
      `http://${baseUrl()}/api/appointments/${id}/create`,
      {
        headers: {
          authorization: `Bearer ${token}`,
          "content-type": "application/json",
        },
      }
    );
    let res = await response.json();
    navigation.navigate("Successful Appointment");
  };

  const calendarMonth = constructCalendarMonth(date);

  const appointmentHandler = () => {};

  return (
    <>
      <Text style={styles.doctorTitle}>{doctor.user.name}</Text>
      <Card style={styles.calendar}>
        <View style={styles.calendarHeader}>
          <Text style={styles.monthName}>
            {monthsOfYear[date.format("MM") - 1]}
          </Text>
          <View style={styles.arrows}>
            <Pressable onPress={switchPreviousMonth}>
              <Icon style={styles.arrow} name="chevron-left" size={25} />
            </Pressable>
            <Pressable onPress={switchNextMonth}>
              <Icon style={styles.arrow} name="chevron-right" size={25} />
            </Pressable>
          </View>
        </View>
        <View style={styles.daysOfWeek}>
          {daysOfWeek.map((day, index) => {
            return (
              <Text style={styles.dayOfWeek} key={day}>
                {day}
              </Text>
            );
          })}
        </View>
        <View style={styles.daysOfMonth}>
          {calendarMonth.map((day, index) => {
            return (
              <Pressable
                style={[styles.dayOfMonthContainer]}
                onPress={() => {
                  updateAvailableTime(day);
                }}
              >
                <Text
                  style={[
                    styles.dayOfMonth,
                    day.format("MM") != date.format("MM") &&
                      styles.dayOfNotCurrentMonth,
                    day.format("DD/MM/YYYY") ===
                      currentDate.format("DD/MM/YYYY") &&
                      styles.currentDayOfMonth,
                    availibilities
                      .map((date) => date.format("DD/MM/YYYY"))
                      .includes(day.format("DD/MM/YYYY")) &&
                      styles.availableDays,
                  ]}
                  key={index}
                >
                  {day.format("DD")}
                </Text>
              </Pressable>
            );
          })}
        </View>
      </Card>
      <View style={styles.timeCard}>
        <Text style={styles.availibleTimeTitle}>Available Times</Text>
        {availableTimes && availableTimes.length > 0 ? (
          <FlatList
            data={availableTimes}
            horizontal
            renderItem={(availibleTime) => {
              return (
                <Pressable
                  onPress={() => {
                    pressHandler(availibleTime.item);
                  }}
                >
                  <View style={[styles.availableTimeBubble]}>
                    <Text style={[styles.availableTimeBubbleText]}>
                      {availibleTime.item.format("hh:mm A")}
                    </Text>
                  </View>
                </Pressable>
              );
            }}
            keyExtractor={(item, index) => String(index)}
          />
        ) : (
          <Text style={[styles.noTime]}>No Times Available</Text>
        )}
        <Input
          style={styles.descriptionInput}
          placeholder="Add Description..."
        />
        <Button title={"Submit"} />
      </View>
    </>
  );
};

const daysOfWeek = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
const monthsOfYear = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const styles = StyleSheet.create({
  noTime: {
    margin: 30,
    fontSize: 16,
    color: "red",
  },
  doctorTitle: {
    fontSize: 24,
    fontWeight: "600",
    marginTop: 20,
    marginBottom: 10,
    textAlign: "center",
  },
  calendar: {
    backgroundColor: "white",
    margin: 10,
  },
  calendarHeader: {
    flexDirection: "row",
    backgroundColor: "#0EBE7F",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 15,
    justifyContent: "space-between",
    alignItems: "center",
  },
  arrows: {
    flexDirection: "row",
    alignItems: "center",
  },
  arrow: {
    marginLeft: 25,
    color: "white",
  },
  monthName: { color: "white", fontSize: 20, fontWeight: "700" },
  daysOfWeek: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#EDEDED",
    paddingVertical: 10,
  },
  dayOfWeek: {
    flex: 1,
    textAlign: "center",
  },

  daysOfMonth: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  dayOfNotCurrentMonth: {
    opacity: 0.3,
  },
  currentDayOfMonth: {
    color: "#0EBE7F",
    fontWeight: "600",
  },
  availableDays: {
    backgroundColor: "#0EBE7F55",
    borderRadius: 100,
  },
  dayOfMonthContainer: {
    width: "14.2857%",
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
  dayOfMonth: {
    // width: "14.2857%",
    textAlign: "center",
    paddingVertical: 5,
  },
  timeCard: {
    backgroundColor: "white",
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    padding: 10,
  },
  availibleTimeTitle: {
    marginTop: 10,
    marginLeft: 10,
    fontSize: 18,
    fontWeight: "700",
  },
  availableTimeBubble: {
    marginHorizontal: 5,
    marginTop: 20,
    backgroundColor: "#0EBE7F",
    justifyContent: "center",
    alignItems: "center",
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  availableTimeBubbleText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  descriptionInput: {
    marginVertical: 10,
  },
});

export default DoctorAvailibilityScreen;
