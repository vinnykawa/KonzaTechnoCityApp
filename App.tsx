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
import SignUpScreen from "./screens/SignUpScreen";
import InvestorsScreen from "./screens/InvestorsScreen";
import OverviewScreen from "./screens/OverviewScreen";
import PressScreen from "./screens/PressScreen";
//custom side bar menu
import CustomSidebarMenu from "./CustomSidebarMenu";
//Fab
import { FAB } from "react-native-paper";
import auth from "@react-native-firebase/auth";

const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = (props) => {
  n;
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: "row" }}>
      <TouchableOpacity onPress={toggleDrawer}>
        {/*Donute Button Image */}
        <Image
          source={require("./assets/hamburger.png")}
          style={{ width: 25, height: 25, marginLeft: 5 }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default function App() {
  const main = () => {
    return (
      <Drawer.Navigator
        screenOptions={{
          drawerActiveTintColor: "#18201F",
          drawerInactiveBackgroundColor: "#111",
          drawerItemStyle: {
            marginVertical: 5,
            backgroundColor: "#548271",
          },
        }}
        drawerContent={(props) => <CustomSidebarMenu {...props} />}
        initialRouteName={"About Us"}
      >
        <Drawer.Screen
          name="Contact Us"
          options={{
            drawerLabel: "Contact Us",
            drawerIcon: () => (
              <Image
                source={require("./assets/placeholder.png")}
                style={[styles.icon, { tintColor: "white" }]}
              />
            ),
            drawerInactiveBackgroundColor: "#1B1B1B",
          }}
          component={ContactScreen}
        />
        <Drawer.Screen
          name="About Us"
          options={{
            drawerLabel: "About Us",
            drawerIcon: () => (
              <Image
                source={require("./assets/info.png")}
                style={[styles.icon, { tintColor: "grey" }]}
              />
            ),
          }}
          component={AboutScreen}
        />
        <Drawer.Screen
          name="Investors"
          options={{
            drawerLabel: "Investors",
            drawerIcon: () => (
              <Image
                source={require("./assets/home.png")}
                style={[styles.icon, { tintColor: "grey" }]}
              />
            ),
          }}
          component={InvestorsScreen}
        />
        <Drawer.Screen
          name="Overview"
          options={{
            drawerLabel: "Overview",
            drawerIcon: () => (
              <Image
                source={require("./assets/binoculars.png")}
                style={[styles.icon, { tintColor: "grey" }]}
              />
            ),
          }}
          component={OverviewScreen}
        />
        <Drawer.Screen
          name="Alerts"
          options={{
            drawerLabel: "Alerts",
            drawerIcon: () => (
              <Image
                source={require("./assets/bell.png")}
                style={[styles.icon, { tintColor: "grey" }]}
              />
            ),
          }}
          component={AlertsScreen}
        />
        <Drawer.Screen
          name="News"
          options={{
            drawerLabel: "News",
            drawerIcon: () => (
              <Image
                source={require("./assets/rss_feed_symbol.png")}
                style={[styles.icon, { tintColor: "grey" }]}
              />
            ),
          }}
          component={NewsScreen}
        />
        <Drawer.Screen
          name="Press"
          options={{
            drawerLabel: "Press",
            drawerIcon: () => (
              <Image
                source={require("./assets/press-pass.png")}
                style={[styles.icon, { tintColor: "grey" }]}
              />
            ),
          }}
          component={PressScreen}
        />
        <Drawer.Screen
          name="Events"
          options={{
            drawerLabel: "Events",
            drawerIcon: () => (
              <Image
                source={require("./assets/calendar.png")}
                style={[styles.icon, { tintColor: "grey" }]}
              />
            ),
          }}
          component={EventScreen}
        />
        <Drawer.Screen
          name="Feedback"
          options={{
            drawerLabel: "Feedback",
            drawerIcon: () => (
              <Image
                source={require("./assets/help_sign.png")}
                style={[styles.icon, { tintColor: "grey" }]}
              />
            ),
          }}
          component={FeedbackScreen}
        />
        <Drawer.Screen
          name="Gallery"
          options={{
            drawerLabel: "Gallery",
            drawerIcon: () => (
              <Image
                source={require("./assets/camera.png")}
                style={[styles.icon, { tintColor: "grey" }]}
              />
            ),
          }}
          component={GalleryScreen}
        />
      </Drawer.Navigator>
    );
  };

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Auth">
        <Stack.Screen
          name="Main"
          options={{ headerShown: false }}
          component={main}
        />
        <Stack.Screen
          name="Auth"
          options={{ headerShown: false }}
          component={SignUpScreen}
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
    width: 24,
    height: 24,
  },

  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
