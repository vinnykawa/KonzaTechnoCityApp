// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
// https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/

import React from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
  ImageBackground,
  TouchableOpacity,
  Alert,
  Share,
} from "react-native";

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/core";
import auth from "@react-native-firebase/auth";

const CustomSidebarMenu = (props) => {
  const navigation = useNavigation();

  const onShare = async () => {
    try {
      const result = await Share.share({
        title: "Share",
        message: "Shairing KonzaTechnoCityApp",
        url: "https://www.google.com/",
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#000000",
      }}
    >
      <ImageBackground
        source={require("../assets/konza_techno.png")}
        style={{
          flex: 1,
          justifyContent: "center",
          backgroundColor: "black",
        }}
      >
        <DrawerContentScrollView
          {...props}
          style={{
            height: "100%",
            backgroundColor: "transparent",
            marginTop: -118,
          }}
        >
          <DrawerItemList style={{ backgroundColor: "green" }} {...props} />
          <View style={{ backgroundColor: "#00000099", marginTop: 0 }}>
            <Text
              style={{
                textAlign: "center",
                color: "white",
                paddingTop: 48,
                paddingBottom: 11,
                fontSize: 23,
                fontWeight: "bold",
                backgroundColor: "green",
                justifyContent: "space-between",
              }}
            >
              Konza Techno City
            </Text>
            <View style={styles.divider} />
            <DrawerItem
              label="Dashboard "
              labelStyle={{ color: "white" }}
              icon={() => (
                <Image
                  source={require("../assets/home.png")}
                  style={[styles.iconStyle, { tintColor: "white" }]}
                />
              )}
              onPress={() => {
                props.navigation.navigate("Dashboard");
              }}
            />
            <View style={styles.divider} />
            <View style={styles.divider} />
            <DrawerItem
              label="Contact Us"
              labelStyle={{ color: "white" }}
              icon={() => (
                <Image
                  source={require("../assets/Contact-us-white.png")}
                  style={[styles.iconStyle, { tintColor: "white" }]}
                />
              )}
              onPress={() => {
                props.navigation.navigate("Contact Us");
              }}
            />
            <View style={styles.divider} />
            <DrawerItem
              label="About Us"
              labelStyle={{ color: "white" }}
              icon={() => (
                <Image
                  source={require("../assets/about-us-white.png")}
                  style={[styles.iconStyle, { tintColor: "white" }]}
                />
              )}
              onPress={() => {
                props.navigation.navigate("About Us");
              }}
            />
            <View style={styles.divider} />
            {/* <DrawerItem
            label="Inverstors"
            labelStyle={{ color: "white" }}
            icon={() => (
              <Image
                source={require("../assets/investor-white.png")}
                style={[styles.iconStyle, { tintColor: "white" }]}
              />
            )}
            onPress={() => {
              props.navigation.navigate("Investors");
            }}
          />
          <View style={styles.divider} />
          <DrawerItem
            label="Overview"
            labelStyle={{ color: "white" }}
            icon={() => (
              <Image
                source={require("../assets/overview-white.png")}
                style={[styles.iconStyle, { tintColor: "white" }]}
              />
            )}
            onPress={() => {
              props.navigation.navigate("Overview");
            }}
          /> 
          <View style={styles.divider} /> */}
            <DrawerItem
              label="Alerts"
              labelStyle={{ color: "white" }}
              icon={() => (
                <Image
                  source={require("../assets/alerts-white.png")}
                  style={[styles.iconStyle, { tintColor: "white" }]}
                />
              )}
              onPress={() => {
                props.navigation.navigate("Alerts");
              }}
            />
            <View style={styles.divider} />
            <DrawerItem
              label="News"
              labelStyle={{ color: "white" }}
              icon={() => (
                <Image
                  source={require("../assets/news-white.png")}
                  style={[styles.iconStyle, { tintColor: "white" }]}
                />
              )}
              onPress={() => {
                props.navigation.navigate("News");
              }}
            />
            <View style={styles.divider} />
            <DrawerItem
              label="Press"
              labelStyle={{ color: "white" }}
              icon={() => (
                <Image
                  source={require("../assets/news-white.png")}
                  style={[styles.iconStyle, { tintColor: "white" }]}
                />
              )}
              onPress={() => {
                props.navigation.navigate("Press");
              }}
            />
            <View style={styles.divider} />
            <DrawerItem
              label="Events"
              labelStyle={{ color: "#ffffff" }}
              icon={() => (
                <Image
                  source={require("../assets/event-white.png")}
                  style={[styles.iconStyle, { tintColor: "white" }]}
                />
              )}
              onPress={() => {
                props.navigation.navigate("Events");
              }}
            />
            <View style={styles.divider} />
            <DrawerItem
              label="Feedback"
              labelStyle={{ color: "white" }}
              icon={() => (
                <Image
                  source={require("../assets/feedback-white.png")}
                  style={[styles.iconStyle, { tintColor: "white" }]}
                />
              )}
              onPress={() => {
                props.navigation.navigate("Feedback");
              }}
            />
            <View style={styles.divider} />
            <DrawerItem
              {...props}
              label="Gallery"
              labelStyle={{ color: "white" }}
              icon={() => (
                <Image
                  source={require("../assets/gallery-black.png")}
                  style={[styles.iconStyle, { tintColor: "white" }]}
                />
              )}
              onPress={() => props.navigation.navigate("Gallery")}
            />
            <View style={styles.divider} />
            <DrawerItem
              {...props}
              label="Share"
              labelStyle={{ color: "white" }}
              icon={() => (
                <Image
                  source={require("../assets/share.png")}
                  style={[styles.iconStyle, { tintColor: "white" }]}
                />
              )}
              onPress={onShare}
            />
            <View style={styles.divider} />
            <DrawerItem
              label="Sign out"
              labelStyle={{ color: "white" }}
              icon={() => (
                <Image
                  source={require("../assets/sign_in.png")}
                  style={[styles.iconStyle, { tintColor: "white" }]}
                />
              )}
              onPress={() => {
                auth()
                  .signOut()
                  .then(() => {
                    navigation.navigate("Login");
                  });
              }}
            />
            <View style={styles.divider} />
            <DrawerItem
              label=""
              style={{ padding: 5 }}
              icon={() => null}
              onPress={() => null}
            />

            <DrawerItem
              label=""
              style={{ padding: 5 }}
              icon={() => null}
              onPress={() => null}
            />

            <DrawerItem
              label=""
              style={{ padding: 5 }}
              icon={() => null}
              onPress={() => null}
            />
            <View style={styles.divider} />
          </View>
        </DrawerContentScrollView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: "stretch",
    width: 280,
    height: 150,
  },
  iconStyle: {
    width: 32,
    height: 32,
  },
  customItem: {
    backgroundColor: "#00000099",
  },
  divider: { height: 2, width: "100%", backgroundColor: "white" },
});

export default CustomSidebarMenu;
