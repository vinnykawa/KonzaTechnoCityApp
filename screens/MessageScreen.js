import React from "react";
import {
  View,
  Text,
  Alert,
  StyleSheet,
  AsyncStorage,
  FlatList,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import { Button } from "react-native-paper";
import { color } from "react-native-reanimated";
import Card from "../components/card";
import TextInputMultiline from "../components/MultilineTextInput";
import { MessageItemView } from "../components/messageItem";
import { useNavigation } from "@react-navigation/native";
import auth from "@react-native-firebase/auth";

const MessageScreen = () => {
  const navigation = useNavigation();

  const getMessages = async () => {
    const token = await AsyncStorage.getItem("token");

    try {
      const response = await fetch(
        "https://konza.softwareske.net/api/v1/customer/message/get",
        {
          method: "GET",
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      const json = await response.json();
      console.log(json);
      if (json instanceof Array) {
        setMessages(json[0].reverse());
      } else {
        Alert.alert("Session Expired! Please login and try again");
        auth().signOut();

        await AsyncStorage.setItem("token", "");

        navigation.replace("Login");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const sendMessage = async () => {
    const token = await AsyncStorage.getItem("token");
    const request = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({
        message: message,
        uniqueRef: "" + Date.now(),
      }),
    };

    try {
      console.log(message + " Current Token is " + token);
      const response = await fetch(
        "https://konza.softwareske.net/api/v1/customer/message/send",
        request
      );

      const json = await response.json();

      setMessage("");

      getMessages();

      console.log(json);
    } catch (error) {
      console.error(error);
    }
  };

  //prevent getMessages from being called everytime component re-renders
  React.useEffect(() => {
    setInterval(getMessages,3000);
  }, []);

  const [message, setMessage] = React.useState("");
  const [messages, setMessages] = React.useState([]);

  return (
    <KeyboardAvoidingView
      behavior={"padding"}
      keyboardVerticalOffset={60}
      style={styles.container}
    >
      <View style={styles.contentContainer}>
        <View style={styles.titleWrapper}></View>
        <View style={styles.inputWrapper}>
          {messages.length > 0 ? (
            <FlatList
              data={messages}
              renderItem={MessageItemView}
              keyExtractor={(item) => item.id}
            />
          ) : (
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text>You have no messages !</Text>
            </View>
          )}
        </View>
      </View>

      <View style={styles.footer}>
        <View
          style={{
            borderColor: "grey",
            borderWidth: 1,
            marginHorizontal: 11,
          }}
        >
          <TextInput
            multiline
            numberOfLines={4}
            placeholder={"Your message goes here"}
            placeholderTextColor={"grey"}
            style={{ padding: 10, color: "black", minHeight: 70 }}
            onChangeText={(value) => setMessage(value)}
          />
        </View>
        <Button
          onPress={sendMessage}
          mode={"outlined"}
          color={"green"}
          style={{ margin: 10 }}
        >
          Send
        </Button>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  titleWrapper: {},
  inputWrapper: { height: "100%" },
  contentContainer: {
    flex: 1, // pushes the footer to the end of the screen
  },
  footer: {
    height: 160,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    alignItems: "center",
    color: "black",
    alignContent: "center",
  },
  input: {
    color: "black",
    backgroundColor: "grey",
    borderColor: "grey",
  },
  mainCardView: {
    height: 90,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 15,
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 8,
    flexDirection: "row",

    paddingLeft: 16,
    paddingRight: 14,
    marginTop: 6,
    marginBottom: 6,
    marginLeft: 16,
    marginRight: 16,
  },
});

export default MessageScreen;
