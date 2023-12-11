import { View, Text, StyleSheet, Pressable, Modal, FlatList } from "react-native";
import React, { useState } from "react";
import Card from "../../components/common/basic/Card";
import moment from "moment";
import { Calendar } from "react-native-calendars";
import Icon from "react-native-vector-icons/FontAwesome";
import Input from "../../components/common/basic/Input";
import Button from "../../components/common/basic/Button";

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
  const currentDate = moment();
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
  const [modalVisible, setModalVisible] = useState(false);
  const handleModalVisible = () => {
    setModalVisible(true);
  };

  const calendarMonth = constructCalendarMonth(date);
  return (
    <>
      <Text style={styles.doctorTitle}>Dr.Ahmed Salah</Text>
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
              <Text
                style={[
                  styles.dayOfMonth,
                  day.format("MM") != date.format("MM") &&
                    styles.dayOfNotCurrentMonth,
                  day.format("DD/MM/YYYY") ===
                    currentDate.format("DD/MM/YYYY") &&
                    styles.currentDayOfMonth,
                ]}
                key={index}
              >
                {day.format("DD")}
              </Text>
            );
          })}
        </View>
      </Card>
      <View style={styles.timeCard}>
        <Text style={styles.availibleTimeTitle}>Available Times</Text>
        <FlatList
          data={availableTimes}
          horizontal
          renderItem={(availibleTime) => {
            return (
              <View style={[styles.availableTimeBubble]}>
                <Text style={[styles.availableTimeBubbleText]}>
                  {availibleTime.item}
                </Text>
              </View>
            );
          }}
          keyExtractor={(item, index) => String(index)}
        />
        {/* Modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
      
      <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
          {/* <Image
            source={require('./path/to/your/image.png')} 
            style={styles.modalImage}
            /> */}
            <Text style={styles.modalText}>Your appointment will be reviewed by the doctor, a notification will be sent upon approval</Text>
            <Button style={{width:200,}} title="Close" onPress={() => setModalVisible(false)} />
          </View>
        </View>
        </Modal>
        <Input
          style={styles.descriptionInput}
          placeholder="Add Description..."
        />
        <Button title={"Submit"} onPress={handleModalVisible} />

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

const availableTimes = ["8:00", "9:00", "12:30", "14:00", "14:30", "15:00"];

const styles = StyleSheet.create({
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
  dayOfMonth: {
    width: "14.2857%",
    textAlign: "center",
    paddingVertical: 10,
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default DoctorAvailibilityScreen;
