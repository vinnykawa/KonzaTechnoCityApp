import "react-native-gesture-handler";
import { registerRootComponent } from "expo";
//TODO uncomment
import messaging from "@react-native-firebase/messaging";
import { AsyncStorage } from "react-native";

import App from "./App";

// Register background handler
/*messaging().setBackgroundMessageHandler(async (remoteMessage) => {
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
      currentAlerts = JSON.parse(req);
      currentAlerts.push(alert);

      await AsyncStorage.setItem("alerts", JSON.stringify(currentAlerts))
        .then((json) => console.log("success updating alerts!"))
        .catch((error) => console.log("error updating alerts!"));
    })
    .catch((error) => console.log("error getting alerts!", error));

  console.log("Message handled in the background!", remoteMessage);
}); */

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
