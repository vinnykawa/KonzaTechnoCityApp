import React, { useState } from 'react';
import { Text, View, StyleSheet, ImageBackground, Button, Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {MessageTextInputMultiline2} from '../components/mycomponents';

function RegisterScreen (){
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");


  

  const onRegister = async () => {

    let formdata = new FormData();
    formdata.append("user_id", "");
    formdata.append("f_name", name);
    formdata.append("l_name", name);
    formdata.append("phone", "");
    formdata.append("email", email);
    formdata.append("fcm_token", "");
    formdata.append("version_code", 1.0);
    formdata.append("version_name", "1.0");
    formdata.append("password", password);


    try {
      const response = await fetch (
        'https://konza.softwareke.net/api/v1/auth/register'
      , {
        method: 'POST',
        headers: {
          
          'Content-Type': "multipart/form-data"
        },
        body: formdata,
      });
      const json = await response.json();
      return json.movies;
    } catch (error) {
      console.error(error);
    }
  };

    return(

        <View style={styles.container}>
            <Text style={styles.contactText}>Register</Text>
            <View style={styles.inputcontainer}>

            <Image
          source={ require('../assets/logo.png')}
           style={{width:410, 
           height:250,
           resizeMode:'cover',
           }} />
            
           

                <TextInput style={styles.input}
                placeholder="Name"
                placeholderTextColor="grey"
                keyboardType="default"
                onChangeText={(value) => setName(value)}/>

                <TextInput style={styles.input}
                placeholder="Email Address"
                placeholderTextColor="grey"
                keyboardType="email-address"
                onChangeText={(value) => setEmail(value)}/>

                <TextInput style={styles.input}
                placeholder="Password"
                placeholderTextColor="grey"
                keyboardType="default"
                onChangeText={(value) => setPassword(value)}/>

                

              <View style={styles.fixToText}>     
                <Button 
                title="Submit"
                color="green"
               onPress={() => console.log(email)}
               />
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
    flex:0,
    textAlign: "center",
    color: "green",
    padding: 5,
    fontSize: 30,
    fontWeight: "bold",
    marginTop:40,
},

input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: "grey",
    borderColor: "green",
    
  },

imageStyle:{
  margin:20,
},
  

  fixToText: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 40,
  },

  feedback: {
      marginTop: 0,
  },

});

export default RegisterScreen;