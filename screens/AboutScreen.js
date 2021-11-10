
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native';
import SectionHistory from '../components/mycomponents';
import {SectionVision,SectionValues,SectionBoard,SectionMgt} from '../components/mycomponents';
import { FAB } from 'react-native-paper';


const AboutScreen = ({navigation}) => {
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
            <TouchableOpacity onPress={() => console.log('pressed history')}>
            <SectionHistory text='HISTORY'/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log('pressed vision')}>
            <SectionVision text='VISION AND MISSION'/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log('pressed values')}>
            <SectionValues text='CORE VALUES'/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log('pressed board')}>
            <SectionBoard text='BOARD OF DIRECTORS'/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log('pressed management')}>
            <SectionMgt text='MANAGEMENT'/>
            </TouchableOpacity>
            
    
          </View>
    
    
        </View>
        </ImageBackground>
        <FAB
        style={styles.fab}
        small
        icon={require("../assets/email.png")}
        onPress={() => navigation.navigate('Message')}
      />
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

    fab: {
      position: "absolute",
      margin: 16,
      right: 0,
      bottom: 0,
    },
  });

  export default AboutScreen;