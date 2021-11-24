import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import GridImageView from "react-native-grid-image-viewer";
import { GalleryItemView } from "./../components/GalleryItemView.js";

function GalleryScreen({ route }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const navigation = useNavigation();

  const getImages = async () => {
    try {
      const response = await fetch(
        "https://live.konza.go.ke/wp-json/wp/v2/gallery/"
      );
      const json = await response.json();

      // const imageUrls = [];

      // for (var i = 0; i < json.length; i++) {
      //   var obj = json[i];
      //   var imageUrl = obj.image;

      //   var gallery = obj.gallery;

      //   imageUrls[i] = imageUrl;

      //   imageUrls.push(...gallery);
      //   console.log(imageUrl);
      // }

      setData(json);
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

  return (
    <View style={styles.container}>
      {/* <GridImageView data={data}></GridImageView> */}
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("GalleryPage", { images: [...item.gallery] });
            }}
          >
            <GalleryItemView item={item} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.date}
      />
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
    alignItems: "center",
  },
  text: {
    alignItems: "center",
    color: "white",
  },
});

export default GalleryScreen;
