import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  StatusBar,
} from "react-native";

import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
//screens
import AboutScreen from "./screens/AboutScreen";
import ContactScreen from "./screens/ContactScreen";
import AlertsScreen from "./screens/AlertsScreen";
import NewsScreen from "./screens/NewsScreen";
import EventScreen from "./screens/EventsScreen";
import FeedbackScreen from "./screens/FeedbackScreen";
import GalleryScreen from "./screens/GalleryScreen";
import LoginScreen from "./screens/LoginScreen";
import InvestorsScreen from "./screens/InvestorsScreen";
import OverviewScreen from "./screens/OverviewScreen";
import PressScreen from "./screens/PressScreen";
import RegisterScreen from "./screens/RegisterScreen";
//custom side bar menu
import CustomSidebarMenu from "./components/CustomSidebarMenu";
//Fab
import { FAB } from "react-native-paper";
import auth from "@react-native-firebase/auth";
import MessageScreen from "./screens/MessageScreen";
import HistoryScreen from "./screens/HistoryScreen";
import MissionScreen from "./screens/MissionScreen";
import ValuesScreen from "./screens/CoreValuesScreen";
import DirectorsScreen from "./screens/BoardDirectorsScreen";
import ManagementScreen from "./screens/ManagementScreen";
import SocialMediaScreen from "./screens/SocialMediaScreen";
import GalleryPage from "./screens/GalleryPage";
//import messaging from "@react-native-firebase/messaging";

const Drawer = createDrawerNavigator();

export default function App() {
  const main = () => {
    const navigation = useNavigation();

    // useEffect(() => {
    //   const unsubscribe = messaging().onMessage(async (remoteMessage) => {
    //     console.log(
    //       "A new FCM message arrived!",
    //       JSON.stringify(remoteMessage)
    //     );
    //   });

    //   return unsubscribe;
    // }, []);

    return (
      <>
        <Drawer.Navigator
          screenOptions={{
            drawerActiveTintColor: "#FFFFFF",
            drawerInactiveTintColor: "#FFFFFF",
            //drawerInactiveBackgroundColor: "#6cc06755",
            //drawerActiveBackgroundColor: "#000000",

            drawerItemStyle: {
              height: 60,
              padding: 10,
            },

            drawerContentContainerStyle: {
              backgroundColor: "#FFFFFF",
            },

            headerStyle: {
              backgroundColor: "green",
            },
            headerTintColor: "white",
          }}
          drawerContent={(props) => <CustomSidebarMenu {...props} />}
          initialRouteName={"Dashboard"}
        >
          <Drawer.Screen
            name="Contact Us"
            options={{
              drawerItemStyle: { height: 0 },
            }}
            component={ContactScreen}
          />
          <Drawer.Group>
            <Drawer.Screen
              name="About Us"
              options={{
                drawerItemStyle: { height: 0 },
              }}
              component={AboutScreen}
            />
          </Drawer.Group>
          <Drawer.Screen
            name="Investors"
            options={{
              drawerItemStyle: { height: 0 },
            }}
            component={InvestorsScreen}
          />
          <Drawer.Screen
            name="Dashboard"
            options={{
              drawerItemStyle: { height: 0 },
            }}
            component={OverviewScreen}
          />
          <Drawer.Screen
            name="Alerts"
            options={{
              drawerItemStyle: { height: 0 },
            }}
            component={AlertsScreen}
          />
          <Drawer.Screen
            name="News"
            options={{
              drawerItemStyle: { height: 0 },
            }}
            component={NewsScreen}
          />
          <Drawer.Screen
            name="Press"
            options={{
              drawerItemStyle: { height: 0 },
            }}
            component={PressScreen}
          />
          <Drawer.Screen
            name="Events"
            options={{
              drawerItemStyle: { height: 0 },
            }}
            component={EventScreen}
          />
          <Drawer.Screen
            name="Feedback"
            options={{
              drawerItemStyle: { height: 0 },
            }}
            component={FeedbackScreen}
          />

          <Drawer.Screen
            name="Gallery"
            options={{
              drawerItemStyle: { height: 0 },
            }}
            component={GalleryScreen}
          />
        </Drawer.Navigator>
        <FAB
          style={styles.fab}
          icon={require("./assets/email.png")}
          onPress={() => navigation.navigate("Message")}
        />
      </>
    );
  };

  const Stack = createStackNavigator();

  const screenOptionStyle = {
    headerStyle: {
      backgroundColor: "green",
    },
    headerTintColor: "white",
    headerBackTitle: "Back",
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={screenOptionStyle}
        initialRouteName="Login"
      >
        <Stack.Screen
          name="Main"
          options={{ headerShown: false }}
          component={main}
        />

        <Stack.Screen
          name="Login"
          options={{ headerShown: false }}
          component={LoginScreen}
        />
        <Stack.Screen
          name="Register"
          options={{ headerShown: true }}
          component={RegisterScreen}
        />

        <Stack.Screen
          name="Message"
          options={{ headerShown: true }}
          component={MessageScreen}
        />

        <Stack.Screen
          name="About"
          options={{ headerShown: false }}
          component={AboutScreen}
        />
        <Stack.Screen
          name="History"
          options={{ headerShown: true }}
          component={HistoryScreen}
        />
        <Stack.Screen
          name="Mission"
          options={{ headerShown: true }}
          component={MissionScreen}
        />
        <Stack.Screen
          name="Values"
          options={{ headerShown: true }}
          component={ValuesScreen}
        />
        <Stack.Screen
          name="Directors"
          options={{ headerShown: true }}
          component={DirectorsScreen}
        />
        <Stack.Screen
          name="Management"
          options={{ headerShown: true }}
          component={ManagementScreen}
        />
        <Stack.Screen
          name="Socials"
          options={{ headerShown: true }}
          component={SocialMediaScreen}
        />

        <Stack.Screen
          name="GalleryPage"
          options={{ headerShown: true }}
          component={GalleryPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    height: "100%",
    textAlign: "center",
    backgroundColor: "black",
  },

  imageContainer: {
    flex: 3,
  },

  sectionContainer: {
    flex: 2,
  },

  icon: {
    width: 32,
    height: 32,
  },

  fab: {
    position: "absolute",
    margin: 10,
    right: 10,
    bottom: 10,
  },
});
