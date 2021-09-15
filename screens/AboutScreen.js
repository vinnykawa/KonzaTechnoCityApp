
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native';
import SectionHistory from '../components/mycomponents';
import {SectionVision,SectionValues,SectionBoard,SectionMgt} from '../components/mycomponents';


const AboutScreen = () => {
    return (
        <View style={styles.container}>
          <ImageBackground source={require("../assets/konza_techno.png")} style={styles.image}>
        <View style={styles.imageContainer}>
          <Image
          source={ require('../assets/logo.png')}
           style={{width:410, 
           height:250,
           resizeMode:'cover',
           }} />
    
          <View style={styles.sectionContainer}>
            
            <SectionHistory text='HISTORY'/>
            <SectionVision text='VISION AND MISSION'/>
            <SectionValues text='CORE VALUES'/>
            <SectionBoard text='BOARD OF DIRECTORS'/>
            <SectionMgt text='MANAGEMENT'/>
            
    
          </View>
    
    
        </View>
        </ImageBackground>
      </View>
      );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      justifyContent: "space-around",
      alignItems: "center",
      height: "100%",
      textAlign: "center",
      backgroundColor: "black"
      
    },
  
    imageContainer: {
      flex: 3,
    },
  
    sectionContainer: {
      flex: 2,
    },

    image: {
      flex: 1,
      justifyContent: "center"
    },
  });

  export default AboutScreen;