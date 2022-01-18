import React, { useEffect, useState } from "react";
import { Text, FlatList, StyleSheet, View, SafeAreaView, ActivityIndicator, TouchableOpacity, Share, Image } from "react-native";
//import { NewsItemView } from "../components/newsItems";
import { Card } from "../components/mycomponents";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-paper";


function NewsScreen() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const navigation = useNavigation();

  const getNews = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://live.konza.go.ke/wp-json/wp/v2/news?page="+ page
      );
      const json = await response.json();
      console.log(json);
      const code = json.code ?? "";

        
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
    getNews();
  }, []);

 // console.log(data.title);
 const renderFooter = () => {
  return (
    //Footer View with Load More button
    <View style={styles.footer}>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={getNews}
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


//renderitem
const NewsItemView = ({ item }) =>{
  // const navigation = useNavigation();
 
   const onShare = async () => {
     try {
       const result = await Share.share({
         title: item.title,
         message: item.link,
         url:item.link,
       });
       if (result.action === Share.sharedAction) {
         if (result.activityType) {
           // shared with activity type of result.activityType
         } else {
           // shared
         }
       } else if (result.action === Share.dismissedAction) {
         // dismissed
       }
     } catch (error) {
       alert(error.message);
     }
   };
 
   return (
    
       <View style={styles.mainCardView}>
         <View style={{ flexDirection: "column" }}>
         <TouchableOpacity
     onPress={() => {
       navigation.navigate("FeedDetailScreen", {item})
     }}
     >
           <Image
             source={{ uri: item.image }}
             style={{
               width: 332,
               height: 150,
               margin: 10,
               resizeMode: "stretch",
             }}
           />
 
           <View style={{ flexDirection: "row", alignItems: "center" }}>
             <View style={{ marginLeft: 12 }}>
               <Text
                 style={{
                   fontSize: 16,
                   color: "black",
                   fontWeight: "bold",
 
                   textTransform: "capitalize",
                 }}
               >
                 {item.title}
               </Text>
               <View
                 style={{
                   marginTop: 4,
                   borderWidth: 0,
                   width: "100%",
                 }}
               >
                 <Text numberOfLines={5}
                   style={{
                     color: "grey",
                     fontSize: 14,
                   }}
                 >
                   {item.content}
                 </Text>
               </View>
             </View>
           </View>
           </TouchableOpacity>
           <Button
           onPress={onShare}
           icon={'share'}
           mode={"outlined"}
           color={"green"}
           style={{ margin: 10 ,marginTop:10}}
         >
           Share
         </Button>
         </View>
       </View>
     
   );
 };
 

 // 

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={NewsItemView}
        keyExtractor={(item) => item.date}
        ListFooterComponent={hasMore ? renderFooter : null}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
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
  mainCardView: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 5,
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    paddingLeft: 14,
    paddingRight: 14,
    marginTop: 6,
    marginBottom: 6,
    marginLeft: 16,
    marginRight: 16,
  },
});

export default NewsScreen;
