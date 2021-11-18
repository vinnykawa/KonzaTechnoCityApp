import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  Alert,
  AsyncStorage,
  KeyboardAvoidingView,
} from "react-native";
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from "@react-native-google-signin/google-signin";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import auth from "@react-native-firebase/auth";
import { Button } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";

const LoginScreen: React.FC = () => {
  const navigation = useNavigation();
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const emailRef = React.createRef();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  const firebaseLogin = async () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then((data) => {
        onLogin(data);
      })
      .catch((error) => {
        Alert.alert(error.message);
      });
  };
  const onLogin = async (data) => {
    try {
      const response = await fetch(
        "https://konza.softwareske.net/api/v1/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "multipart/form-data",
          },
          body: JSON.stringify({
            email: email,
            user_id: data.user.uid === undefined ? data.user.id : data.user.uid,
          }),
        }
      );

      const json = await response.json();

      const message = json.message;

      const code = json.code;

      // Alert.alert(json.message);
      if (code === 200) {
        const token = json.token;

        await AsyncStorage.setItem("token", token);
      }

      console.log(json);
    } catch (error) {
      console.error(error);
    }
  };

  const validateEmail = (value) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(value) === false) {
      console.log("Email is Not Correct");
      Alert.alert("Email not Correct!");
      return false;
    } else {
      console.log("Email is Correct");
      setEmail(value);
    }
  };

  if (initializing) return <></>;

  if (!user) {
    GoogleSignin.configure();
    return (
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.center}>
          <Image
            style={{ width: 410, height: 250, resizeMode: "cover" }}
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
              onChangeText={(value) => validateEmail(value)}
            />

            <TextInput
              style={styles.input}
              placeholder="password"
              placeholderTextColor="grey"
              keyboardType="default"
              secureTextEntry={true}
              onChangeText={(value) => setPassword(value)}
            />
          </View>
        </View>
        <View style={styles.center}>
          <Button
            onPress={firebaseLogin}
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
      </KeyboardAvoidingView>
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

    //hit register just incase this is a new user
    const postdata = {
      user_id: userInfo.user.id,
      f_name: userInfo.user.givenName,
      l_name: userInfo.user.familyName,
      phone: "070000000",
      email: userInfo.user.email,
      fcm_token: "" + userInfo.idToken,
      version_code: 1.0,
      version_name: "1.0",
      password: "password",
    };

    try {
      const response = await fetch(
        "https://konza.softwareske.net/api/v1/auth/register",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(postdata),
        }
      );
      const json = await response.json();
      const code = json.code;
      console.log("post data", postdata);
      console.log("Tried to Hit Register with:  ", json);
    } catch (error) {
      console.error(error);
    }

    //hit konza login & get token
    const response = await fetch(
      "https://konza.softwareske.net/api/v1/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        body: JSON.stringify({
          email: userInfo.user.email,
          user_id: userInfo.user.id,
        }),
      }
    );

    const json = await response.json();

    const message = json.message;

    const code = json.code;

    // Alert.alert(json.message);
    if (code === 200) {
      const token = json.token;
      await AsyncStorage.setItem("token", token);
    }

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
    borderColor: "green",
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

export default LoginScreen;
