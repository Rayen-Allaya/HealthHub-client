import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import HomeScreen from "./src/screens/Home/HomeScreen";
import { DoctorsListScreen } from "./src/screens/Doctors/DoctorsListScreen";
import SearchButton from "./src/components/doctorsList/SearchButton";
import { createStackNavigator } from "@react-navigation/stack";
import FilterDoctorsScreen from "./src/screens/Doctors/FilterDoctorsScreen";
import DetailsDoctorScreen from "./src/screens/Doctors/DetailsDoctorScreen";
import SignUp from "./src/screens/Sign/SignUp";
import SignIn from "./src/screens/Sign/SignIn";
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
          name="Detail Doctors"
          component={DetailsDoctorScreen}
          options={{ headerRight: SearchButton }}
        />
        <Drawer.Screen
          name="SignUp"
          component={SignUp}
        />
        <Drawer.Screen
          name="SignIn"
          component={SignIn}
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
        <Stack.Screen name="Search" component={FilterDoctorsScreen} />
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
