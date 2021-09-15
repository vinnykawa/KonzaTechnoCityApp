import React from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";

function SignUpScreen (){
    return(

        <View style={styles.container}>
            <ImageBackground source={require("../assets/konza_techno.png")} style={styles.image}>
                <Text style={styles.text}>SignUp screen</Text>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "space-around",
        
    },
    image: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        
      },
    text: {
        alignItems: 'center',
        color: 'white',
    },
});

export default SignUpScreen;