import React, { useState, useRef } from "react";
import {
  Text,
  View,
  StyleSheet,
  AsyncStorage,
  Image,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
//import { TextInput } from "react-native-gesture-handler";
import { Button } from "react-native-paper";
import TextInput from "react-native-input-validator";

import { MessageTextInputMultiline2 } from "../components/mycomponents";
import auth from "@react-native-firebase/auth";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import ProgressLoader from "rn-progress-loader";

function RegisterScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password1, setPassword1] = useState("");
  const [phone, setPhone] = useState("");
  const [isLoaderVisible, setLoaderVisibility] = useState(false);
  const navigation = useNavigation();

  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const passwordRef = useRef();

  const registerOnFirebase = (async) => {
    if (
      validateEmail() &&
      validateName() &&
      validatePhone() &&
      validatePassword()
    ) {
      setLoaderVisibility(true);
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then((data) => {
          console.log("User account created & signed in!", data);

          onRegister(data);
        })
        .catch((error) => {
          if (error.code === "auth/email-already-in-use") {
            console.log("That email address is already in use!");
            Alert.alert("Email address is already in use!");
          }

          if (error.code === "auth/invalid-email") {
            console.log("That email address is invalid!");
            Alert.alert("Email address is invalid!");
          }

          console.error(error);
        });
    }
  };

  const onRegister = async (data) => {
    const accessToken = await data.user.getIdToken();

    const postdata = {
      user_id: data.user.uid,
      f_name: name,
      l_name: name,
      phone: phone,
      email: email,
      fcm_token: "" + accessToken,
      version_code: 1.0,
      version_name: "1.0",
      password: password,
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
      console.log(postdata);
      const json = await response.json();

      console.log(json);
      setLoaderVisibility(false);
      if (json.code === 200) {
        const token = json.token;
        await AsyncStorage.setItem("token", token);
        navigation.replace("Main");
      }

      Alert.alert(json.message);
    } catch (error) {
      console.error(error);
    }
  };

  const validateEmail = () => {
    if (email.length == 0 || !emailRef.current.isValid()) {
      console.log("Email is Not Correct");
      Alert.alert("Invalid Email!");
      return false;
    } else {
      return true;
    }
  };

  const validateName = () => {
    if (name.length == 0 || !nameRef.current.isValid()) {
      Alert.alert("Name is required !");
      return false;
    } else {
      return true;
    }
  };

  const validatePhone = () => {
    if (phone.length < 10 || !phoneRef.current.isValid()) {
      Alert.alert("Phone is required !");
      return false;
    } else {
      return true;
    }
  };

  const validatePassword = () => {
    if (password.length == 0 || !passwordRef.current.isValid()) {
      Alert.alert("Password is required !");
      return false;
    } else if (password !== password1) {
      Alert.alert("Passwords do not match!");
      return false;
    }
    return true;
  };

  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
      }}
    >
      <ProgressLoader
        visible={isLoaderVisible}
        isModal={true}
        isHUD={true}
        hudColor={"#000000"}
        color={"#FFFFFF"}
      />

      <KeyboardAvoidingView
        keyboardVerticalOffset={100} // adjust the value here if you need more padding
        style={{ flex: 1 }}
        behavior="padding"
      >
        <ScrollView>
          <Text style={styles.contactText}>Register</Text>
          <View style={styles.inputcontainer}>
            <Image
              source={require("../assets/logo.png")}
              style={{ width: 410, height: 250, resizeMode: "cover" }}
            />

            <TextInput
              style={styles.input}
              placeholder="Name"
              placeholderTextColor="grey"
              keyboardType="default"
              onChangeText={(value) => setName(value)}
              type="name"
              onRef={(r) => {
                nameRef.current = r;
              }}
              value={name}
            />

            <TextInput
              style={styles.input}
              placeholder="Email Address"
              placeholderTextColor="grey"
              keyboardType="email-address"
              onChangeText={(value) => setEmail(value)}
              type="email"
              onRef={(r) => {
                emailRef.current = r;
              }}
              value={email}
            />

            <TextInput
              style={styles.input}
              placeholder="Phone Number"
              placeholderTextColor="grey"
              keyboardType="phone-pad"
              onChangeText={(value) => setPhone(value)}
              type="phone"
              onRef={(r) => {
                phoneRef.current = r;
              }}
              value={phone}
            />

            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="grey"
              keyboardType="default"
              secureTextEntry={true}
              onChangeText={(value) => setPassword(value)}
              type="alphanumeric"
              onRef={(r) => {
                passwordRef.current = r;
              }}
              value={password}
            />

            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              placeholderTextColor="grey"
              keyboardType="default"
              secureTextEntry={true}
              onChangeText={(value) => setPassword1(value)}
              type="alphanumeric"
              onRef={(r) => {
                passwordRef.current = r;
              }}
              value={password1}
            />

            <View style={styles.fixToText}>
              <Button
                color="green"
                mode={"outlined"}
                onPress={registerOnFirebase}
                style={{ marginBottom: 100 }}
              >
                Submit
              </Button>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
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
  },

  inputcontainer: {
    flex: 1,
    width: "100%",
    marginTop: 10,
  },

  contactText: {
    flex: 0,
    textAlign: "center",
    color: "green",
    padding: 5,
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 40,
  },

  input: {
    height: 40,
    marginLeft: 12,
    marginRight: 12,
    borderWidth: 1,
    padding: 10,
    color: "grey",
    borderColor: "green",
  },

  imageStyle: {
    margin: 20,
  },

  fixToText: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 40,
  },

  feedback: {
    marginTop: 0,
  },
});

export default RegisterScreen;
