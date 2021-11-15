import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Image,
  Text,
  TouchableWithoutFeedback,
  View,
  Linking,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Svg, Path } from "react-native-svg";
import { moderateScale } from "react-native-size-matters";

export const MessageItemView = ({ item }) => {
  if (item.message === null) {
    return (
      <View>
        <View style={[styles.item, styles.itemOut]}>
          <View style={[styles.balloon, { backgroundColor: "#1084ff" }]}>
            <Text style={{ paddingTop: 5, color: "white" }}>{item.reply}</Text>
            <View style={[styles.arrowContainer, styles.arrowRightContainer]}>
              <Svg
                style={styles.arrowRight}
                width={moderateScale(15.5, 0.6)}
                height={moderateScale(17.5, 0.6)}
                viewBox="32.485 17.5 15.515 17.5"
                enable-background="new 32.485 17.5 15.515 17.5"
              >
                <Path
                  d="M48,35c-7-4-6-8.75-6-17.5C28,17.5,29,35,48,35z"
                  fill="#1084ff"
                  x="0"
                  y="0"
                />
              </Svg>
            </View>
          </View>
        </View>
      </View>
    );
  } else
    return (
      <View>
        <View style={[styles.item, styles.itemIn]}>
          <View style={[styles.balloon, { backgroundColor: "grey" }]}>
            <Text style={{ paddingTop: 5, color: "white" }}>
              {item.message}
            </Text>
            <View style={[styles.arrowContainer, styles.arrowLeftContainer]}>
              <Svg
                style={styles.arrowLeft}
                width={moderateScale(15.5, 0.6)}
                height={moderateScale(17.5, 0.6)}
                viewBox="32.484 17.5 15.515 17.5"
                enable-background="new 32.485 17.5 15.515 17.5"
              >
                <Path
                  d="M38.484,17.5c0,8.75,1,13.5-6,17.5C51.484,35,52.484,17.5,38.484,17.5z"
                  fill="grey"
                  x="0"
                  y="0"
                />
              </Svg>
            </View>
          </View>
        </View>
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
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
    width:'80%'
  },
  subCardView: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: "white",
    borderColor: "grey",
    borderWidth: 1,
    borderStyle: "solid",
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    marginVertical: moderateScale(7, 2),
    flexDirection: "row",
  },
  itemIn: {
    marginLeft: 20,
  },
  itemOut: {
    alignSelf: "flex-end",
    marginRight: 20,
  },
  balloon: {
    maxWidth: moderateScale(250, 2),
    paddingHorizontal: moderateScale(10, 2),
    paddingTop: moderateScale(5, 2),
    paddingBottom: moderateScale(7, 2),
    borderRadius: 20,
  },
  arrowContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
    flex: 1,
  },
  arrowLeftContainer: {
    justifyContent: "flex-end",
    alignItems: "flex-start",
  },

  arrowRightContainer: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },

  arrowLeft: {
    left: moderateScale(-6, 0.5),
  },

  arrowRight: {
    right: moderateScale(-6, 0.5),
  },
});
