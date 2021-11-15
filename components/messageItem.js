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

export const MessageItemView = ({ item }) => {
  return (
   
      <View style={styles.mainCardView}>
        <View style={{ flexDirection: "row",alignItems:'flex-start' }}>
            
              <View
                style={{
                  marginTop: 4,
                  borderWidth: 0,
                  width: "100%",
                }}
              >
                <Text
                  style={{
                    color: "black",
                    fontSize: 14,
                    textAlign:'left'
                  }}
                >
                  hello I need assistace
                </Text>
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
});
