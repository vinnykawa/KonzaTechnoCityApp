
import  React  from 'react';
import { StyleSheet, Image, Text, TouchableWithoutFeedback, View } from 'react-native';


const EventItemView = (item, index) =>{
    return (
      <TouchableWithoutFeedback
       /* onPress={() => {
          this.redirectToChatConverstion(item);
        }} */
        >
        
        <View style={styles.mainCardView}>
        <View style={{flexDirection: 'column'}}>
        <Image
          source={ require('../assets/moving.jpeg')}
           style={{width: 332, 
           height:150,
           margin: 10,
           resizeMode:'stretch',
           }} /> 
        

          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            
            <View style={{marginLeft: 12}}>
              <Text
                style={{
                  fontSize: 16,
                  color: "black",
                  fontWeight: 'bold',
                  
                  textTransform: 'capitalize',
                }}>
                We are relocating our offices
              </Text>
              <View
                style={{
                  marginTop: 4,
                  borderWidth: 0,
                  width: '100%',
                }}>
                <Text
                  style={{
                    color: "grey",
                    fontSize: 14,
                  }}>
                  Three counties, Kajiado, Makueni and Machakos have partnered with the national government through the Konza Technopolis Development Authority (KoTDA) to create 73,000 acres of new urban development.
                </Text>
              </View>
            </View>
          </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white",
    },
    mainCardView: {
      
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: "white",
      borderRadius: 5,
      shadowColor: "grey",
      shadowOffset: {width: 0, height: 0},
      shadowOpacity: 1,
      shadowRadius: 8,
      elevation: 8,
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 10,
      paddingLeft: 14,
      paddingRight: 14,
      marginTop: 6,
      marginBottom: 6,
      marginLeft: 16,
      marginRight: 16,
    },
    subCardView: {
      height: 50,
      width: 50,
      borderRadius: 25,
      backgroundColor: "white",
      borderColor: "grey",
      borderWidth: 1,
      borderStyle: 'solid',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  export default EventItemView;