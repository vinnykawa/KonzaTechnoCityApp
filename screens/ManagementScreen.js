import React from "react";
import { View, Text, ImageBackground, StyleSheet, Image, ScrollView } from "react-native";
import{Paragraph, Headline, Subheading} from "react-native-paper";

function ManagementScreen() {
  return (
    <View style={styles.container}>
      
      <Headline style={{padding:5, marginVertical:5}}> Management </Headline>
      <Image 
      source={require('../assets/logo.png')}
      style={{height:'30%', width:'100%', padding:5, marginVertical:10}}
      resizeMode='stretch'
      />
      <Subheading style={{padding:5, marginVertical:5}}> Who we are</Subheading>

      <Paragraph style={{padding:5, marginVertical:5}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </Paragraph>

      <Subheading style={{padding:5, marginVertical:5}}> Who we are</Subheading>

      <Paragraph style={{padding:5, marginVertical:5}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
         </Paragraph>

       
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    backgroundColor: "white",
    padding:10,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    alignItems: "center",
    color: "grey",
  },
});

export default ManagementScreen;
