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

function ValuesScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", backgroundColor: "white" }}>
      <ScrollView style={{ padding: 5 }}>
        <Text style={styles.sectionText}>OUR CORE VALUES</Text>
        <View style={styles.mainCardView}>
          <Text style={styles.subtitle}>Nurturing</Text>
          <Text style={styles.text}>
            We celebrate and invest to grow a diverse set of talents and skills
            to achieve our vision. We see possibilities ahead of us and are
            committed to develop the Smart city to its true potential.
          </Text>

          <Text style={styles.subtitle}>Innovation</Text>
          <Text style={styles.text}>
            We choose to transform and continuously improve in everything we do,
            we are curious, creative, and constantly look for better ways to
            deliver our products and services to our customers.
          </Text>

          <Text style={styles.subtitle}>Collaboration</Text>
          <Text style={styles.text}>
            We optimize results by working smarter together. We multiply our
            contribution through strategic partnerships and deliver value to all
            parties.
          </Text>

          <Text style={styles.subtitle}>Excellence</Text>
          <Text style={styles.text}>
            We are passionate on delivering a better Konza to live, work and
            play through flexible and creative solutions inspired by outstanding
            services in time. • We conduct our business with integrity in a
            transparent, accountable and ethical manner.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionText: {
    flex: 0,
    textAlign: "center",
    color: "white",
    padding: 5,
    fontSize: 18,
    fontWeight: "bold",
    backgroundColor: "green",
    marginVertical: 10,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    alignSelf: "center",
    fontSize: 14,
  },
  paragraph: {
    fontSize: 15,
    alignSelf: "center",
    paddingVertical: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    alignSelf: "center",
    paddingVertical: 15,
  },
  subtitle: {
    fontWeight: "bold",
    fontSize: 18,
    alignSelf: "center",
    paddingVertical: 10,
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
    paddingLeft: 14,
    paddingRight: 14,
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 0,
    marginRight: 0,
  },
});

export default ValuesScreen;
