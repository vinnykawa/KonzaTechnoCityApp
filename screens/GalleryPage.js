import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  Text,
  ImageBackground,
  StyleSheet,
} from "react-native";
import GridImageView from "react-native-grid-image-viewer";
import { GalleryItemView } from "../components/GalleryItemView.js";

function GalleryPage({ route, navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const { images } = route.params;

  useEffect(() => {
    setData(images);
  }, []);

  // console.log(data.url);

  return (
    <View style={styles.container}>
      <GridImageView data={data}></GridImageView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    backgroundColor: "white",
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

export default GalleryPage;
