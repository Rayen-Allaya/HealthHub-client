import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
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
import PrivacyPolicy from "./src/utils/PivacyPolicy";
import ProfileScreen from "./src/screens/Profile/ProfileScreen";
import { EditProfile } from "./src/screens/Profile/EditProfile";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default function App() {
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
          name="Login"
          component={SignIn}
          options={options.authOptions}
        />
        <Drawer.Screen
          name="Register"
          component={SignUp}
          options={options.authOptions}
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
        <Stack.Screen name="Reviews" component={ReviewsScreen} />
        <Stack.Screen name="Doctor Details" component={DetailsDoctorScreen} />
        <Stack.Screen name="Privacy Policy" component={PrivacyPolicy} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
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
