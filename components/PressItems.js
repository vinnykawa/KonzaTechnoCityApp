
import  React  from 'react';
import { StyleSheet, Image, Text, View, Linking } from 'react-native';


import { TouchableOpacity } from "react-native-gesture-handler";

export const PressItemView = ({ item }) => {
  return (
    <TouchableOpacity
    onPress={() => {
          Linking.openURL(item.link);
        }}
    >
      <View style={styles.mainCardView}>
        <View style={{ flexDirection: "column" }}>
          <Image
            source={require('../assets/logo.png')}
            style={{
              width: 332,
              height: 150,
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
                <Text numberOfLines={5}
                  style={{
                    color: "grey",
                    fontSize: 14,
                  }}
                >
                  {item.content}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
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
