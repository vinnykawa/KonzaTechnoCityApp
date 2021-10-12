import React, { useState } from 'react';
import { Text, View, StyleSheet, ImageBackground, Button, Alert } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {MessageTextInputMultiline} from '../components/mycomponents';
import AsyncStorage from '@react-native-async-storage/async-storage';



const SubmitData = () =>{ 

};


function ContactScreen (){
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  
    return(

        <View style={styles.container}>
            <Text style={styles.contactText}>Contact Us</Text>
            <View style={styles.inputcontainer}>
            <ImageBackground source={require("../assets/konza_techno.png")} style={styles.image}>
                <TextInput style={styles.input}
                placeholder="Name"
                placeholderTextColor="white"
                keyboardType="default"
                onChangeText={(value) => setName(value)}
                />

                <TextInput style={styles.input}
                placeholder="Email Address"
                placeholderTextColor="white"
                keyboardType="email-address"
                onChangeText={(value) => setEmail(value)}/>

                <TextInput style={styles.input}
                placeholder="Phone Number"
                placeholderTextColor="white"
                keyboardType="numeric"
                onChangeText={(value) => setPhone(value)}/>

                <MessageTextInputMultiline/>
                 
                 <View style={styles.fixToText}>
                <Button 
                title="Submit"
                color="green"
                onPress={() => Alert.alert("Contact Details",{name})}
               />
               </View>

                </ImageBackground>
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
  marginTop: 10,
},

contactText: {
    flex:0,
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
    flexDirection: 'row',
    justifyContent: 'center',
  },

});

export default ContactScreen;