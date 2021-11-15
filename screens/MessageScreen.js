import React, {useState} from "react";
import { View, Text, ImageBackground, StyleSheet,SafeAreaView,FlatList ,Button, Alert} from "react-native";
import { color } from "react-native-reanimated";
import Card from "../components/card";
import TextInputMultiline from "../components/MultilineTextInput";
import { MessageItemView } from "../components/messageItem";
import { TextInput } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';



 
function MessageScreen (){
    const [message, setMessage] = useState("");
    //get messages
    

  const onSend = async () => {
    

    const postdata = {
        "message": message,
        "uniqueRef": "344234re",
    }

    try {
        const token = await AsyncStorage.getItem('token');
       // console.log(token);

      const response = await fetch(
        "https://konza.softwareske.net/api/v1/customer/message/send",
        {
          method: "POST",
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer'+ token,
          },
        
          body:JSON.stringify(postdata)
        }
      );
      const json = await response.json();
     
      Alert.alert(json.message);
      
    } catch (error) {
      console.error(error);
    }
  };


        //custom TextInput
   /* const MessageTextInput = (props) => {
        return (
        <TextInput
            {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
            editable
            
        />
        );
        }

    const MessageTextInputMultiline = () => {
        const [message, setMessage] = useState("");

        return (
        <View
            style={{
            
            borderColor: 'white',
            borderWidth: 1,
            marginHorizontal: 11,
            marginBottom: 100,
            marginTop:10,
            }}>
            <Text style={{color: "white"}}>Your message goes here..</Text>
            <MessageTextInput
            
            multiline
            numberOfLines={4}
            style={{padding: 10, color: "white"}}
            onChangeText={(value) => setMessage(value)}
            >
            
            </MessageTextInput>
        </View>
        );
        } */
  
    
    return(

        <View style={styles.container}>
            <SafeAreaView style={{width:'100%'}}>
                <FlatList
                    data={'hjjyhbhbhjbhjbjbj'}
                    renderItem={MessageItemView}
                    keyExtractor={item => item.id}
                />

            <TextInput
                style={{height:100,marginVertical:10}}
                numberOfLines={5}
                label="Type Message"
                mode="outlined"
                multiline={true}
                activeOutlineColor="white"
                onChangeText={(value) => setMessage(value)}
                />

<Button   title="Send" color="green" onPress={onSend} />

            </SafeAreaView>
          

            

           
            
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flexDirection:"row",
        flex: 1,
        justifyContent: "space-around",
        alignItems:'center',
        backgroundColor:'grey',
        padding:5,
        paddingBottom:20,
        
    },
    image: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        
      },
    text: {
        alignItems: 'center',
        color: 'black',
    },
    input:{
        flex:1,
        margin:10,
    },
    mainCardView: {
        height: 90,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "white",
        borderRadius: 15,
        shadowColor: "grey",
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 1,
        shadowRadius: 8,
        elevation: 8,
        flexDirection: 'row',
       
        paddingLeft: 16,
        paddingRight: 14,
        marginTop: 6,
        marginBottom: 6,
        marginLeft: 16,
        marginRight: 16,
      },
});

export default MessageScreen;