import React, { useState, useRef } from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Linking,
  Alert,
  KeyboardAvoidingView,
  AsyncStorage,
  TextInput,
} from "react-native";
import { MessageTextInputMultiline } from "../components/mycomponents";
import { Button } from "react-native-paper";
import ProgressLoader from "rn-progress-loader";
import { useNavigation } from "@react-navigation/native";
import auth from "@react-native-firebase/auth";

const SubmitData = () => {};

function ContactScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [contactmessage, setMessage] = useState("");
  const [isLoaderVisible, setLoaderVisibility] = useState(false);

  const navigation = useNavigation();

  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const messageRef = useRef();

  function validateEmailAddress(email) {
    const res =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return res.test(String(email).toLowerCase());
  }

  const validateEmail = () => {
    if (!validateEmailAddress(email)) {
      console.log("Email is Not Correct");
      Alert.alert("Invalid Email!");
      return false;
    } else {
      return true;
    }
  };

  const validateName = () => {
    if (name.length == 0 || !nameRef) {
      Alert.alert("Name is required !");
      return false;
    } else {
      return true;
    }
  };

  const validatePhone = () => {
    if (phone.length < 10 || !phoneRef) {
      Alert.alert("Phone is required !");
      return false;
    } else {
      return true;
    }
  };

  const validateMessage = () => {
    if (contactmessage.length == 0) {
      Alert.alert("Message is required !");
      return false;
    }
    return true;
  };

  const submitContactInfo = async () => {
    if (
      validateName() &&
      validateEmail() &&
      validatePhone() &&
      validateMessage()
    ) {
      setLoaderVisibility(true);
      try {
        const user_id = await AsyncStorage.getItem("user_id");
        const token = await AsyncStorage.getItem("token");

        const response = await fetch(
          "https://konza.softwareske.net/api/v1/customer/contact",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + token,
            },
            body: JSON.stringify({
              user_id: user_id,
              message: contactmessage,
              name: name,
              email: email,
              phone: phone,
            }),
          }
        );

        console.log(
          "Request",
          JSON.stringify({
            user_id: user_id,
            message: contactmessage,
            name: name,
            email: email,
            phone: phone,
            token: token,
          })
        );

        const json = await response.json();

        setLoaderVisibility(false);

        const message = json.message;
        const code = json.code;

        // Alert.alert(json.message);
        if (code === 200) {
          Alert.alert(message);
        } else {
          Alert.alert("Session Expired! Please login and try again");
          auth().signOut();

          await AsyncStorage.setItem("token", "");

          navigation.replace("Login");
        }
        //clear fields
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");

        console.log(json);
      } catch (error) {
        console.error("isssaaa" + error);
        setLoaderVisibility(false);
      }
    }
  };

  const label = "Konza Technopolis Development Authority";
  const latitude = "-1.266894";
  const longitude = "36.799591";

  const url = Platform.select({
    ios: "maps:" + latitude + "," + longitude + "?q=" + label,
    android: "geo:" + latitude + "," + longitude + "?q=" + label,
  });

  const openDialScreen = () => {
    let number = "";
    const tel = "254204343013";
    if (Platform.OS === "ios") {
      number = "telprompt:" + "+" + tel;
    } else {
      number = "tel:" + "+" + tel;
    }
    Linking.openURL(number);
  };

  return (
    <KeyboardAvoidingView>
      <ProgressLoader
        visible={isLoaderVisible}
        isModal={true}
        isHUD={true}
        hudColor={"#000000"}
        color={"#FFFFFF"}
      />

      <View style={styles.inputcontainer}>
        <ImageBackground
          imageStyle={{ opacity: 0.4 }}
          source={require("../assets/konza_techno.png")}
          style={styles.image}
        >
          <TextInput
            style={styles.input}
            placeholder="Name"
            placeholderTextColor="white"
            keyboardType="default"
            type="name"
            onChangeText={(value) => setName(value)}
            onRef={(r) => {
              nameRef.current = r;
            }}
            value={name}
          />

          <TextInput
            style={styles.input}
            placeholder="Email Address"
            placeholderTextColor="white"
            keyboardType="email-address"
            type="email"
            onChangeText={(value) => setEmail(value)}
            onRef={(r) => {
              emailRef.current = r;
            }}
            value={email}
          />

          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            placeholderTextColor="white"
            keyboardType="numeric"
            type="phone"
            onChangeText={(value) => setPhone(value)}
            onRef={(r) => {
              phoneRef.current = r;
            }}
            value={phone}
          />

          <TextInput
            style={styles.messageInput}
            placeholder="Your Message goes here"
            placeholderTextColor="white"
            keyboardType="default"
            onChangeText={(value) => setMessage(value)}
            type="alphanumeric"
            onRef={(r) => {
              messageRef.current = r;
            }}
            value={contactmessage}
            multiline={true}
            numberOfLines={4}
          />

          <View style={{ flex: 0, justifyContent: "flex-end", marginTop: 70 }}>
            <View style={styles.fixToText}>
              <Button
                onPress={() => submitContactInfo()}
                mode={"contained"}
                color={"white"}
                style={{ margin: 10 }}
                labelStyle={{ color: "green" }}
              >
                Submit
              </Button>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                marginTop: 40,
              }}
            >
              <Button
                icon="phone-in-talk"
                color="white"
                mode="contained"
                style={styles.contactButton}
                labelStyle={{ color: "green" }}
                onPress={() => openDialScreen()}
              >
                {" "}
                Call Us
              </Button>

              <Button
                icon="map-marker"
                color="white"
                mode="contained"
                style={styles.contactButton}
                labelStyle={{ color: "green" }}
                onPress={() => {
                  Linking.openURL(url);
                }}
              >
                {" "}
                Locate Us
              </Button>
            </View>
          </View>
        </ImageBackground>
      </View>
    </KeyboardAvoidingView>
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
    width: "100%",
    backgroundColor: "black",
    height: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
  },

  contactText: {
    flex: 0,
    textAlign: "center",
    color: "green",
    padding: 5,
    fontSize: 30,
    fontWeight: "bold",
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: "white",
    borderColor: "white",
    borderRadius: 5,
  },

  messageInput: {
    height: 100,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: "white",
    borderColor: "white",
    borderRadius: 5,
  },

  contactButton: {
    height: 50,
    margin: 10,
    padding: 6,
  },

  image: {
    flex: 0,
    height: "100%",
  },

  fixToText: {
    flexDirection: "row",
    justifyContent: "center",
    textDecorationColor: "green",
  },
});

export default ContactScreen;
