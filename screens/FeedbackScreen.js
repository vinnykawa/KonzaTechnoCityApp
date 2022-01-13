import React, { useState, useRef, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Alert,
  KeyboardAvoidingView,
  AsyncStorage,
} from "react-native";

import { MessageTextInputMultiline2 } from "../components/mycomponents";
import { Button } from "react-native-paper";
import ProgressLoader from "rn-progress-loader";
import TextInput from "react-native-input-validator";

function FeedbackScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isLoaderVisible, setLoaderVisibility] = useState(false);

  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const messageRef = useRef();

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

  const validateMessage = () => {
    if (message.length == 0 || !messageRef.current.isValid()) {
      Alert.alert("Message is required !");
      return false;
    }
    return true;
  };

  const submitFeedback = async () => {
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
          "https://konza.softwareske.net/api/v1/customer/feedback/send",
          {
            method: "POST",
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: "Bearer " + token,
            },
            body: JSON.stringify({
              user_id: user_id,
              message: message,
              name: name,
              email: email,
              phone: phone,
            }),
          }
        );

        const json = await response.json();

        setLoaderVisibility(false);

        console.log(
          "Request",
          JSON.stringify({
            user_id: user_id,
            message: message,
            name: name,
            email: email,
            phone: phone,
          })
        );

        console.log(json);

        const message = json.message;
        const code = json.code;

        // Alert.alert(json.message);
        if (code === 200) {
          Alert.alert("Your Feedback has been submitted!");
        }

        console.log(json);
      } catch (error) {
        console.error(error);
        setLoaderVisibility(false);
      }
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <Text style={styles.contactText}>Feedback</Text>
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
          {/* <MessageTextInputMultiline2 style={styles.feedback} /> */}
          <TextInput
            style={styles.input}
            placeholder="Your Message goes here"
            placeholderTextColor="white"
            keyboardType="default"
            onChangeText={(value) => setMessage(value)}
            type="alphanumeric"
            onRef={(r) => {
              messageRef.current = r;
            }}
            value={message}
            multiline={true}
            numberOfLines={4}
          />

          <TextInput
            style={styles.input}
            placeholder="Name"
            placeholderTextColor="white"
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
            placeholderTextColor="white"
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
            placeholderTextColor="white"
            keyboardType="phone-pad"
            onChangeText={(value) => setPhone(value)}
            type="phone"
            onRef={(r) => {
              phoneRef.current = r;
            }}
            value={phone}
          />

          <View style={styles.fixToText}>
            <Button
              onPress={() => submitFeedback()}
              mode={"contained"}
              color={"white"}
              style={{ marginBottom: 300 }}
              labelStyle={{ color: "green" }}
            >
              Submit
            </Button>
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
    flex: 1,
    width: "100%",
    marginTop: 10,
    backgroundColor: "black",
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
  },

  image: {
    flex: 1,
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

export default FeedbackScreen;
