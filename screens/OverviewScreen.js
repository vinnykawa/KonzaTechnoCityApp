import { useNavigation } from "@react-navigation/core";
import React, { useEffect } from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { FlatGrid } from "react-native-super-grid";

function OverviewScreen() {
  const navigation = useNavigation();

  // async function requestUserPermission() {
  //   const authStatus = await messaging().requestPermission();
  //   const enabled =
  //     authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
  //     authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  //   if (enabled) {
  //     console.log("Authorization status:", authStatus);
  //   }
  // }

  // useEffect(() => {
  //   requestUserPermission();
  // }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        imageStyle={{ opacity: 0.4 }}
        source={require("../assets/konza_techno.png")}
        style={styles.image}
      >
        <Image
          source={require("../assets/logo.png")}
          style={{ width: 410, height: 250, resizeMode: "cover" }}
        />
        <View
          style={{
            flex: 1,
            alignItems: "center",
            width: "100%",
            padding: 20,
          }}
        >
          <FlatGrid
            itemDimension={140}
            style={{ width: "100%" }}
            data={[
              {
                title: "Contact Us",
                icon: require("../assets/Contact-us-white.png"),
                onPress: () => {
                  navigation.navigate("Contact Us");
                },
              },
              {
                title: "About Us",
                icon: require("../assets/about-us-white.png"),
                onPress: () => {
                  navigation.navigate("About Us");
                },
              },
              {
                title: "Alerts",
                icon: require("../assets/alerts-white.png"),
                onPress: () => {
                  navigation.navigate("Alerts");
                },
              },
              {
                title: "News",
                icon: require("../assets/news-white.png"),
                onPress: () => {
                  navigation.navigate("News");
                },
              },
              {
                title: "Press",
                icon: require("../assets/news-white.png"),
                onPress: () => {
                  navigation.navigate("Press");
                },
              },
              {
                title: "Events",
                icon: require("../assets/event-white.png"),
                onPress: () => {
                  navigation.navigate("Events");
                },
              },
              {
                title: "Gallery",
                icon: require("../assets/gallery-black.png"),
                onPress: () => {
                  navigation.navigate("Gallery");
                },
              },
              {
                title: "Feedback",
                icon: require("../assets/feedback-white.png"),
                onPress: () => {
                  navigation.navigate("Feedback");
                },
              },
            ]}
            renderItem={({ item }) => (
              <View>
                {item !== null ? (
                  <TouchableOpacity onPress={item.onPress}>
                    <View style={styles.card}>
                      <Image style={styles.icon} source={item.icon} />

                      <Text style={styles.gridTitle}>{item.title}</Text>
                    </View>
                  </TouchableOpacity>
                ) : null}
              </View>
            )}
          />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    backgroundColor: "black",
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    alignItems: "center",
    color: "white",
  },
  card: {
    padding: 10,
    backgroundColor: "white",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  gridTitle: {
    fontSize: 17,
    fontWeight: "bold",
    textAlign: "left",
    color: "green",
  },
  gridFooter: {
    textAlign: "left",
    color: "grey",
    fontSize: 10,
    paddingTop: 20,
  },
  containerRow: {
    justifyContent: "space-between",
    flexDirection: "row",
    paddingBottom: 15,
  },
  icon: {
    width: 52,
    height: 52,
    marginBottom: 15,
    tintColor: "green",
  },
});

export default OverviewScreen;
