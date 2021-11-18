import React, {useState,useEffect} from "react";
import { Text, FlatList, StyleSheet, View, SafeAreaView ,ActivityIndicator, TouchableOpacity} from "react-native";
import {PressItemView} from './../components/PressItems';
import{Card} from '../components/mycomponents'
import { ScrollView } from "react-native-gesture-handler";

function PressScreen (){

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const getPress = async () => {
    setLoading(true);

    try {
      const response = await fetch(
        "https://live.konza.go.ke/wp-json/wp/v2/press?page="+ page
      );
      const json = await response.json();
      const code = json.code ?? "";

     // console.log(json);

     if(code === ""){
    
      //Successful response
      setPage(page + 1);
      //Increasing the offset for the next API call
      setData([...data, ...json]);
      
     
     }else{
       setHasMore(false);
     }
setLoading(false);

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
  const renderFooter = () => {
    return (
      //Footer View with Load More button
      <View style={styles.footer}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={getPress}
          //On Click of button load more data
          style={styles.loadMoreBtn}>
          <Text style={styles.btnText}>Load More</Text>
          {isLoading ? (
            <ActivityIndicator
              color="green"
              style={{marginLeft: 8}} />
          ) : null}
        </TouchableOpacity>
      </View>
    );
  };


    return(
      <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={PressItemView}
        keyExtractor={(item) => item.date}
        ListFooterComponent={hasMore ? renderFooter : null}
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
  footer: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  loadMoreBtn: {
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: 'green',
    fontSize: 15,
    textAlign: 'center',
  },
});

export default PressScreen;