import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from "@react-native-google-signin/google-signin";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import auth from "@react-native-firebase/auth";

const SignUpScreen: React.FC = () => {
  const navigation = useNavigation();
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return <></>;

  if (!user) {
    GoogleSignin.configure();
    return (
      <View style={styles.container}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            style={{ height: 128, width: 128, margin: 50 }}
            source={require("../assets/logo.png")}
          />
          <View
            style={{
              margin: 10,
              justifyContent: "center",
            }}
          >
            <Text>Please sign in to Konza Techno City App to continue</Text>
          </View>

          <GoogleSigninButton
            style={{ width: 192, height: 48 }}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Dark}
            onPress={() => signIn(navigation)}
            disabled={false}
          />
        </View>
      </View>
    );
  } else {
    navigation.replace("Main");
    return null;
  }
};

// Somewhere in your code
async function signIn(navigation: NavigationProp<any>) {
  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();

    console.log("LOGIN IN  ", userInfo);

    navigation.navigate("Main");
  } catch (error) {
    console.log("LOGIN FAILED : ", error.code);

    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      // user cancelled the login flow
    } else if (error.code === statusCodes.IN_PROGRESS) {
      // operation (e.g. sign in) is in progress already
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      // play services not available or outdated
    } else {
      // some other error happened
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    backgroundColor: "#F7F7F7",
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
});

export default SignUpScreen;
