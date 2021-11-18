import React, {useEffect,useState} from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";
import GridImageView from 'react-native-grid-image-viewer';

function GalleryScreen (){

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
  
    const getImages = async () => {
      try {
        const response = await fetch(
          "https://live.konza.go.ke/wp-json/wp/v2/gallery/"
        );
        const json = await response.json();

        const imageUrls = [];

        for(var i = 0; i < json.length; i++) {
            var obj = json[i];
            var imageUrl = obj.image[0].url;

            imageUrls[i] = imageUrl;

            console.log(imageUrl);
        
            
        }
  
        
        
  
        setData(imageUrls);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
  
    useEffect(() => {
      getImages();
    }, []);
  
   // console.log(data.url);
  

    return(

        <View style={styles.container}>
            
                <GridImageView data={data}></GridImageView>
           
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "space-around",
        
    },
    image: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        
      },
    text: {
        alignItems: 'center',
        color: 'white',
    },
});

export default GalleryScreen;