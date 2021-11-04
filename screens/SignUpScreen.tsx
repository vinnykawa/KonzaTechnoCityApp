import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, TextInput, Alert } from "react-native";

import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from "@react-native-google-signin/google-signin";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import auth from "@react-native-firebase/auth";
import { Button } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";

const SignUpScreen: React.FC = () => {
  const navigation = useNavigation();
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  const onLogin = async () => {
    let formdata = new FormData();
    formdata.append("email", email);
    formdata.append("password", password);

    try {
      const response = await fetch(
        "https://konza.softwareske.net/api/v1/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "multipart/form-data",
          },
          body: formdata,
        }
      );

      const json = await response.json();

      const message = json.message;

      const code = json.code;

      const token = json.token;

      Alert.alert(message);

      console.log(json);
    } catch (error) {
      console.error(error);
    }
  };

  if (initializing) return <></>;

  if (!user) {
    GoogleSignin.configure();
    return (
      <View style={styles.container}>
        <View style={styles.center}>
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
          <View style={styles.inputcontainer}>
            <TextInput
              style={styles.input}
              placeholder="Email Address"
              placeholderTextColor="grey"
              keyboardType="email-address"
              onChangeText={(value) => setEmail(value)}
            />

            <TextInput
              style={styles.input}
              placeholder="password"
              placeholderTextColor="grey"
              keyboardType="default"
              onChangeText={(value) => setPassword(value)}
            />
          </View>
        </View>
        <View style={styles.center}>
          <Button
            onPress={onLogin}
            mode={"outlined"}
            color={"green"}
            style={{ margin: 10 }}
          >
            Login
          </Button>
          <Text style={{ padding: 10 }}>Don't have an account yet?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Register");
            }}
          >
            <Text style={{ padding: 10, color: "blue" }}>
              Click here to Register
            </Text>
          </TouchableOpacity>
          <Text style={{ padding: 10 }}>or </Text>
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: "black",
    borderColor: "grey",
  },
  inputcontainer: {
    flex: 4,
    width: "100%",
    marginTop: 10,
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SignUpScreen;
