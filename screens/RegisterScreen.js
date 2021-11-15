import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Button,
  Image,
  Alert,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MessageTextInputMultiline2 } from "../components/mycomponents";

function RegisterScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const onRegister = async () => {
    

    const postdata = {
      "user_id":"34Ee2WE3432",
      "f_name":name,
      "l_name":name,
      "phone":phone,
      "email":email,
      "fcm_token":"fcm_0002334",
      "version_code":1.0,
      "version_name":"1.0",
      "password":password
    }

    try {
      const response = await fetch(
        "https://konza.softwareske.net/api/v1/auth/register",
        {
          method: "POST",
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body:JSON.stringify(postdata)
        }
      );
      const json = await response.json();
      const token = json.token;
      //console.log(token);
          if(response.code=== 200){
          await AsyncStorage.setItem('token', token);}
          else{
      Alert.alert(json.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
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
        />

        <TextInput
          style={styles.input}
          placeholder="Email Address"
          placeholderTextColor="grey"
          keyboardType="email-address"
          onChangeText={(value) => setEmail(value)}
        />

        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          placeholderTextColor="grey"
          keyboardType="phone-pad"
          onChangeText={(value) => setPhone(value)}
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="grey"
          keyboardType="default"
          secureTextEntry={true}
          onChangeText={(value) => setPassword(value)}
        />

        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="grey"
          keyboardType="default"
          secureTextEntry={true}
          onChangeText={(value) => setPassword(value)}
        />

        <View style={styles.fixToText}>
          <Button title="Submit" color="green" onPress={onRegister} />
        </View>
      </View>
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
    flex: 4,
    width: "100%",
    marginTop: 20,
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
    margin: 12,
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
