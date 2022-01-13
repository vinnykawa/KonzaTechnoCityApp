import React from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import { Paragraph, Headline, Subheading } from "react-native-paper";

function FeedDetailScreen({ route, navigation }) {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: item.image }}
        style={{ height: "30%", width: "100%", padding: 5, marginVertical: 10 }}
        resizeMode="stretch"
      />
      <Headline style={{ padding: 5, marginVertical: 5 }}>
        {item.title}
      </Headline>

      <Paragraph style={{ padding: 5, marginVertical: 5 }}>
        {item.content}
      </Paragraph>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    backgroundColor: "white",
    padding: 10,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    alignItems: "center",
    color: "grey",
  },
});

export default FeedDetailScreen;
