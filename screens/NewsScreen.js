import React from "react";
import { Text, Flatlist, StyleSheet, View } from "react-native";
import NewsItemView from './../components/newsItems';
import{Card} from '../components/mycomponents'
import { ScrollView } from "react-native-gesture-handler";

function NewsScreen (){
    return(
        <ScrollView>
        <View style={styles.container}>
      <NewsItemView/>
      <NewsItemView/>
      <NewsItemView/>
      
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

export default NewsScreen;