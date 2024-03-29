import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { LogBox, StyleSheet } from "react-native";
import HomeScreen from "./src/screens/Home/HomeScreen";
import { DoctorsListScreen } from "./src/screens/Doctors/DoctorsListScreen";
import SearchButton from "./src/components/doctorsList/SearchButton";
import { createStackNavigator } from "@react-navigation/stack";
import FilterDoctorsScreen from "./src/screens/Doctors/FilterDoctorsScreen";
import ReviewsScreen from "./src/screens/Doctors/ReviewsScreen";
import DetailsDoctorScreen from "./src/screens/Doctors/DetailsDoctorScreen";
import DoctorAvailibilityScreen from "./src/screens/Doctors/DoctorAvailibilityScreen";
import SignUp from "./src/screens/Sign/SignUp";
import SignIn from "./src/screens/Sign/SignIn";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Logout from "./src/screens/Sign/Logout";
import ProfileScreen from "./src/screens/Profile/ProfileScreen";
import Appointments from "./src/screens/appointments/Appointments";
import AppointmentsHistory from "./src/screens/appointments/AppointmentsHistory";
import Successful from "./src/screens/Successful";
import HealthNews from "./src/screens/HealthNews";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default function App() {
  console.disableYellowBox = true;
  LogBox.ignoreLogs(["Warning: ..."]); //Hide warnings

  LogBox.ignoreAllLogs();
  const [token, setToken] = useState("");
  useEffect(() => {
    (async function () {
      const tokenP = await AsyncStorage.getItem("token");
      setToken(tokenP);
    })();
  }, []);

  function Root() {
    return (
      <Drawer.Navigator
        screenOptions={{
          drawerActiveBackgroundColor: "#ECFAF5",
          drawerActiveTintColor: "#0EBE7F",
        }}
      >
        <Drawer.Screen
          options={options.homeScreen}
          name="Home"
          component={HomeScreen}
        />

        <Drawer.Screen
          name="Find Doctors"
          component={DoctorsListScreen}
          options={{ headerRight: SearchButton }}
        />
        <Drawer.Screen
          name="Health News"
          component={HealthNews}
          options={{ drawerItemStyle: { height: 50 } }}
        />

        <Drawer.Screen
          name="Login"
          component={SignIn}
          options={{
            ...options.authOptions,
            drawerItemStyle: { height: !token ? 50 : 0 },
          }}
          initialParams={{ setToken: setToken }}
        />

        <Drawer.Screen
          name="Register"
          component={SignUp}
          options={{
            ...options.authOptions,
            drawerItemStyle: { height: !token ? 50 : 0 },
          }}
        />

        <Drawer.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            drawerItemStyle: { height: token ? 50 : 0 },
          }}
          initialParams={{ setToken: setToken }}
        />
        <Drawer.Screen
          name="Future Appointments"
          component={Appointments}
          options={{
            drawerItemStyle: { height: token ? 50 : 0 },
          }}
        />
        <Drawer.Screen
          name="Appointments History"
          options={{
            drawerItemStyle: { height: token ? 50 : 0 },
          }}
          component={AppointmentsHistory}
        />

        <Drawer.Screen
          name="Logout"
          component={Logout}
          options={{
            drawerItemStyle: { height: token ? 50 : 0 },
          }}
          initialParams={{ setToken: setToken }}
        />
      </Drawer.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Root"
          component={Root}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FilterDoctorsScreen"
          options={{ title: "Search" }}
          component={FilterDoctorsScreen}
        />
        <Stack.Screen
          name="DoctorsDetails"
          options={{ title: "Doctor's Details" }}
          component={DetailsDoctorScreen}
        />
        <Stack.Screen
          name="Schedule Appointment"
          component={DoctorAvailibilityScreen}
        />
        <Stack.Screen name="Successful Appointment" component={Successful} />
        <Stack.Screen name="Reviews" component={ReviewsScreen} />
        <Stack.Screen name="Doctor Details" component={DetailsDoctorScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const options = {
  homeScreen: {
    headerTitleStyle: { opacity: 0 },
    headerStyle: {
      backgroundColor: "#0EBE7F",
      elevation: 0,
      shadowOpacity: 0,
    },
  },
  authOptions: {
    headerTitleStyle: { opacity: 0 },
    headerStyle: {
      backgroundColor: "transparent",
      elevation: 0,
      shadowOpacity: 0,
    },
  },
  doctorsListScreen: {},
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
