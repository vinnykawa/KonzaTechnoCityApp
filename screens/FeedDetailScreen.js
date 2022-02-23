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
      <ScrollView>
        <Image
          source={{ uri: item.image }}
          style={{
            height: 256,
            width: "100%",
            padding: 5,
            marginVertical: 10,
          }}
          resizeMode="stretch"
        />
        <Headline
          style={{
            padding: 5,
            marginVertical: 5,
            fontWeight: "bold",
            color: "green",
          }}
        >
          {item.title}
        </Headline>

        <Paragraph style={{ padding: 5, marginVertical: 5 }}>
          {item.content_full}
        </Paragraph>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
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
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 10,
    paddingLeft: 14,
    paddingRight: 14,
    marginTop: 6,
    marginBottom: 6,
    marginLeft: 0,
    marginRight: 0,
  },
});

export default FeedDetailScreen;
