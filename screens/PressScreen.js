import React, {useState,useEffect} from "react";
import { Text, FlatList, StyleSheet, View, SafeAreaView } from "react-native";
import {PressItemView} from './../components/PressItems';
import{Card} from '../components/mycomponents'
import { ScrollView } from "react-native-gesture-handler";

function PressScreen (){

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getPress = async () => {
    try {
      const response = await fetch(
        "https://live.konza.go.ke/wp-json/wp/v2/press/"
      );
      const json = await response.json();

     // console.log(json);

      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPress();
  }, []);

  //console.log(data.title);


    return(
      <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={PressItemView}
        keyExtractor={(item) => item.date}
      />
    </SafeAreaView>
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

export default PressScreen;