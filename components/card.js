import React from "react";
import { View, Text, StyleSheet } from 'react-native';

const Card = () => {
    return(
        
          <View style={styles.mainCardView}>
            <Text style={{alignItems: "center"}}>This  text</Text>
          </View>

        
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "white",
        height: 80,
      },
      mainCardView: {
        height: 90,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "white",
        borderRadius: 1,
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

    export default Card;