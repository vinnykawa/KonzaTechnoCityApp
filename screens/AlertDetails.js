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

function AlertDetails({ route, navigation }) {
  const { item } = route.params;

  let d = new Date(item.created_at);

  let ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(d);
  let mo = new Intl.DateTimeFormat("en", { month: "short" }).format(d);
  let da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(d);
  console.log(`${da}-${mo}-${ye}`);

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView style={{ padding: 5 }}>
        <View style={styles.mainCardView}>
          <Image
            style={styles.image}
            source={require("../assets/alerts-white.png")}
          />
          <Text style={styles.text}>{item.title}</Text>
          <Text
            style={{ padding: 10, fontSize: 14, color: "grey" }}
          >{`${da}-${mo}-${ye}`}</Text>

          <Text style={{ padding: 10, fontSize: 14 }}>{item.description}</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    backgroundColor: "white",
    padding: 10,
    flexDirection: "column",
  },
  image: {
    height: 64,
    width: 64,
    resizeMode: "stretch",
    tintColor: "grey",
  },
  text: {
    alignItems: "center",
    fontWeight: "bold",
    color: "black",
    fontSize: 17,
    padding: 10,
  },
  mainCardView: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 5,
    shadowColor: "#ccc",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 10,
    marginLeft: 10,
    paddingRight: 14,
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 0,
    marginRight: 0,
  },
});

export default AlertDetails;
