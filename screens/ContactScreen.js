import React, { useState, useRef } from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Linking,
  Alert,
  KeyboardAvoidingView,
} from "react-native";
import { MessageTextInputMultiline } from "../components/mycomponents";
import { Button } from "react-native-paper";
import ProgressLoader from "rn-progress-loader";
import TextInput from "react-native-input-validator";

const SubmitData = () => {};

function ContactScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isLoaderVisible, setLoaderVisibility] = useState(false);

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
    <KeyboardAvoidingView style={styles.container}>
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
            value={name}
          />

          <TextInput
            style={styles.input}
            placeholder="Email Address"
            placeholderTextColor="white"
            keyboardType="email-address"
            type="email"
            onChangeText={(value) => setEmail(value)}
            value={email}
          />

          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            placeholderTextColor="white"
            keyboardType="numeric"
            type="phone"
            onChangeText={(value) => setPhone(value)}
            value={phone}
          />

          <MessageTextInputMultiline />

          <View style={styles.fixToText}>
            <Button
              onPress={() => Alert.alert("Contact details")}
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
              marginTop: 80,
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
    backgroundColor: "black",
    height: "100%",
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

  contactButton: {
    height: 50,
    margin: 10,
    padding: 6,
  },

  image: {
    flex: 1,
  },

  fixToText: {
    flexDirection: "row",
    justifyContent: "center",
    textDecorationColor: "green",
  },
});

export default ContactScreen;
