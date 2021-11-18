import React from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";
import {Button} from "react-native-paper";

function SocialMediaScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        imageStyle={{ opacity: 0.4 }}
        source={require("../assets/konza_techno.png")}
        style={styles.image}
      >
          <Button icon="whatsapp" color='#25D366' mode="contained" style={styles.socialButton}
           onPress={() => console.log('WhatsApp button pressed') } > WhatsApp</Button>

           <Button icon="twitter" color='#1DA1F2' mode="contained" style={styles.socialButton}
           onPress={() => console.log('Twitter button pressed') } > Twitter</Button>

           <Button icon="facebook" color='#1877F2' mode="contained" style={styles.socialButton}
           onPress={() => console.log('Facebook button pressed') } > Facebook</Button>

           <Button icon="instagram" color='#E4405F' mode="contained" style={styles.socialButton}
           onPress={() => console.log('Instagram button pressed') } > Instagram</Button>

           <Button icon="linkedin" color='#0A66C2' mode="contained" style={styles.socialButton}
           onPress={() => console.log('Linkedin button pressed') } > Linkedin</Button>
        
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    backgroundColor: "black",
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    alignItems: "center",
    color: "white",
  },
  socialButton:{
      width:'50%',
      height:50,
      margin:10,
      padding:6,
  },
});

export default SocialMediaScreen;
