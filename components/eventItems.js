import React from "react";
import {
  StyleSheet,
  Image,
  Text,
  TouchableWithoutFeedback,
  View,
  Linking,
  Share,
} from "react-native";
import { Button } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";

export const EventItemView = ({ item }) => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        title: item.title,
        message: item.link,
        url: item.link,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={styles.mainCardView}>
      <View style={{ flexDirection: "column" }}>
        <TouchableOpacity
          onPress={() => {
            Linking.openURL(item.link);
          }}
        >
          <Image
            source={{ uri: item.image }}
            style={{
              width: 332,
              height: 200,
              margin: 10,
              resizeMode: "stretch",
            }}
          />

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={{ marginLeft: 12 }}>
              <Text
                style={{
                  fontSize: 16,
                  color: "black",
                  fontWeight: "bold",

                  textTransform: "capitalize",
                }}
              >
                {item.title}
              </Text>
              <View
                style={{
                  marginTop: 4,
                  borderWidth: 0,
                  width: "100%",
                }}
              >
                <Text
                  numberOfLines={5}
                  style={{
                    color: "grey",
                    fontSize: 14,
                  }}
                >
                  {item.content}
                </Text>
              </View>
              <View
                style={{
                  marginTop: 4,
                  borderWidth: 0,
                  width: "100%",
                }}
              >
                <Text
                  numberOfLines={1}
                  style={{
                    color: "black",
                    fontSize: 14,
                  }}
                >
                  Venue: {item.venue}
                </Text>
              </View>
              <View
                style={{
                  marginTop: 4,
                  borderWidth: 0,
                  width: "100%",
                }}
              >
                <Text
                  numberOfLines={1}
                  style={{
                    color: "black",
                    fontSize: 14,
                  }}
                >
                  Organizers: Konza Technopolis
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <Button
          onPress={onShare}
          icon={"share"}
          mode={"outlined"}
          color={"green"}
          style={{ margin: 10, marginTop: 10 }}
        >
          Share
        </Button>
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
