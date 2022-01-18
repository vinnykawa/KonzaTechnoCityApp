import { useNavigation } from "@react-navigation/core";
import React, { useEffect } from "react";
import {
  Alert,
  View,
  Text,
  AsyncStorage,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { FlatGrid } from "react-native-super-grid";
import messaging from "@react-native-firebase/messaging";
import notifee from "@notifee/react-native";

function OverviewScreen() {
  const navigation = useNavigation();

  async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      getFcmToken();
      console.log("Authorization status:", authStatus);
    }
  }

  getFcmToken = async () => {
    const fcmToken = await messaging().getToken();
    if (fcmToken) {
      updateFCMToken(fcmToken);

      //call update fcm endpoint

      console.log("Your Firebase Token is:", fcmToken);
    } else {
      console.log("Failed", "No token received");
    }
  };

  updateFCMToken = async (token) => {
    const user_id = await AsyncStorage.getItem("user_id");
    const email = await AsyncStorage.getItem("email");

    try {
      const response = await fetch(
        "https://konza.softwareske.net/api/v1/auth/fcm/update",
        {
          method: "PUT",
          headers: {
            "Content-Type": "multipart/form-data",
          },
          body: JSON.stringify({
            fcm_token: token,
            user_id: user_id,
            email: email,
          }),
        }
      );

      const json = await response.json();

      const message = json.message;

      const code = json.code;

      // Alert.alert(json.message);
      if (code === 200) {
        console.log(message);
      }

      console.log(json);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    requestUserPermission();

    const unsubscribe = messaging().onMessage(async (remoteMessage) => {
      console.log("A new FCM message arrived!", JSON.stringify(remoteMessage));

      const alert = [
        {
          id: Date.now(),
          title: remoteMessage.notification.title,
          message: remoteMessage.notification.body,
        },
      ];

      var currentAlerts = [];
      await AsyncStorage.getItem("alerts")
        .then(async (req) => {
          console.log("Found alerts", req);

          if (req !== null) currentAlerts = JSON.parse(req);
          currentAlerts.push(...alert);

          await AsyncStorage.setItem("alerts", JSON.stringify(currentAlerts))
            .then((json) => console.log("success updating alerts!", json))
            .catch((error) => console.log("error updating alerts!", error));
        })
        .catch((error) => console.log("error getting alerts!", error));

        
      const channelId = await notifee.createChannel({
        id: "default",
        name: "Default Channel",
      });

      // Required for iOS
      // See https://notifee.app/react-native/docs/ios/permissions
      await notifee.requestPermission();

      const notificationId = await notifee
        .displayNotification({
          id: remoteMessage.messageId,
          title: remoteMessage.notification?.title,
          body: remoteMessage.notification?.body,
          android: {
            channelId,
          },
        })
        .then(() => {
          notifee.setBadgeCount(1).then(() => console.log("Badge count set!"));
        }); 
    });

    return unsubscribe;
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        imageStyle={{ opacity: 0.4 }}
        source={require("../assets/konza_techno.png")}
        style={styles.image}
      >
        <View
          style={{
            backgroundColor: "#F7F7F7",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Image
            source={require("../assets/logo.png")}
            style={{ width: 210, height: 200, resizeMode: "cover" }}
          />
        </View>

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
