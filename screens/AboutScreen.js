import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import SectionHistory, { SectionSocial } from "../components/mycomponents";
import {
  SectionVision,
  SectionValues,
  SectionBoard,
  SectionMgt,
} from "../components/mycomponents";
import { FAB } from "react-native-paper";

const AboutScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        imageStyle={{ opacity: 0.4 }}
        source={require("../assets/konza_techno.png")}
        style={styles.image}
      >
        <View style={styles.imageContainer}>
          <Image
            source={require("../assets/logo.png")}
            style={{ width: 410, height: 250, resizeMode: "cover" }}
          />

          <View style={styles.sectionContainer}>
            <TouchableOpacity onPress={() => navigation.navigate("History")}>
              <SectionHistory text="History" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Mission")}>
              <SectionVision text="Vission and Mission" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Values")}>
              <SectionValues text="Core Values" />
            </TouchableOpacity>
            {/* <TouchableOpacity onPress={() => navigation.navigate("Directors")}>
              <SectionBoard text="BOARD OF DIRECTORS" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Management")}>
              <SectionMgt text="MANAGEMENT" />
            </TouchableOpacity> */}
            <TouchableOpacity onPress={() => navigation.navigate("Socials")}>
              <SectionSocial text="Social Media" />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    height: "100%",
    textAlign: "center",
    backgroundColor: "black",
  },

  imageContainer: {
    flex: 3,
  },

  sectionContainer: {
    flex: 2,
  },

  image: {
    flex: 1,
    justifyContent: "center",
  },

  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default AboutScreen;
