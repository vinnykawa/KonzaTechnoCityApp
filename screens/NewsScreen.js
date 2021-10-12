import React, { useEffect, useState } from "react";
import { Text, FlatList, StyleSheet, View, SafeAreaView } from "react-native";
import { NewsItemView } from "./../components/newsItems";
import { Card } from "../components/mycomponents";
import { ScrollView } from "react-native-gesture-handler";

function NewsScreen() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getNews = async () => {
    try {
      const response = await fetch(
        "https://live.konza.go.ke/wp-json/wp/v2/news/"
      );
      const json = await response.json();

      console.log(json);

      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getNews();
  }, []);

  console.log(data.title);

  const renderItem = ({ item }) => <Text>{item.title}</Text>;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={NewsItemView}
        keyExtractor={(item) => item.date}
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
});

export default NewsScreen;
