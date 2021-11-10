import React from "react";
import { View, Text, ImageBackground, StyleSheet,SafeAreaView,FlatList ,TextInput} from "react-native";
import { color } from "react-native-reanimated";
import Card from "../components/card";
import { MessageTextInputMultiline3 } from "../components/mycomponents";
import TextInputMultiline from "../components/MultilineTextInput";
import { MessageItemView } from "../components/messageItem";

function MessageScreen (){
    return(

        <View style={styles.container}>
            <SafeAreaView style={{width:'100%'}}>
                <FlatList
                    data={'hjjyhbhbhjbhjbjbj'}
                    renderItem={MessageItemView}
                    keyExtractor={item => item.id}
                />


<MessageTextInputMultiline3 style={styles.input}/>
            </SafeAreaView>

           
            
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 2,
        justifyContent: "space-around",
        alignItems:'center',
        backgroundColor:'grey',
        padding:2,
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