import React from "react";
import { Text, Flatlist, StyleSheet, View, ScrollView } from "react-native";
import CardItemView from '../components/alertItems';
import{Card} from '../components/mycomponents'

function AlertsScreen (){
    return(
      <ScrollView>
        <View style={styles.container}>
      <CardItemView/>
      <CardItemView/>
      <CardItemView/>
      <CardItemView/>
      <CardItemView/>
      <CardItemView/>
      <CardItemView/>
      <CardItemView/>
      <CardItemView/>
     </View>
     </ScrollView>
    );
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export default AlertsScreen;