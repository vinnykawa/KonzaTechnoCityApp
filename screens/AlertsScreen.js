import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/core";
import {
  Text,
  FlatList,
  StyleSheet,
  View,
  SafeAreaView,
  ActivityIndicator,
  AsyncStorage,
  TouchableOpacity,
} from "react-native";
import CardItemView from "../components/alertItems";

import notifee from "@notifee/react-native";
import { Svg, Path } from "react-native-svg";
import { moderateScale } from "react-native-size-matters";

function AlertsScreen() {
  const navigation = useNavigation();

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  //TODO uncomment
  const getAlerts = async () => {
    //setLoading(true);

    var currentAlerts = [
      {
        title: "StanChart",
        message:
          "aaah aaah , Sould generatiuon, you know , hii song imeniweka juu , hapa  ni waoip waheshimiwa",
      },
    ];
    // setData(currentAlerts);

    const token = await AsyncStorage.getItem("token");
    const request = {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    };

    try {
      const response = await fetch(
        "https://konza.softwareske.net/api/v1/notifications",
        request
      );

      const json = await response.json();

      setData(json.data);

      console.log(json);
    } catch (error) {
      console.error(error);
    }

    //   await AsyncStorage.getItem("alerts")
    //     .then((req) => {
    //       // console.log("Got alerts", req);
    //       //currentAlerts = JSON.parse(req);

    //       setData(currentAlerts);
    //     })
    //     .catch((error) => console.log("error getting alerts! : ", error));
    // };
  };
  useEffect(() => {
    const interval = setInterval(getAlerts, 3000);

    notifee.setBadgeCount(0).then(() => console.log("Badge count unset!"));

    return () => clearInterval(interval);
  }, []);

  if (data)
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.mainCardView}>
              <View style={{ flexDirection: "column" }}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("AlertDetail", { item: item });
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{
                        width: 45,
                        height: 45,

                        borderRadius: 25,
                        borderStyle: "solid",
                        backgroundColor: "green",

                        justifyContent: "center",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 12,
                          textAlign: "center",
                          fontWeight: "bold",
                          color: "white",
                        }}
                      >
                        {getFormattedDate(item.created_at)}
                      </Text>
                    </View>
                    <View style={{ width: "90%" }}>
                      <View
                        style={{
                          flexDirection: "row",
                          width: "96%",
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 16,
                            color: "black",
                            fontWeight: "bold",
                            padding: 5,
                            flex: 2,
                            alignSelf: "flex-start",
                            textTransform: "capitalize",
                          }}
                        >
                          {item.title}
                        </Text>
                        <Text
                          style={{
                            fontSize: 16,
                            color: "grey",
                            padding: 5,
                            flex: 1,
                            textAlign: "right",
                          }}
                        >
                          {getFormattedTime(item.created_at)}
                        </Text>
                      </View>

                      <Text
                        numberOfLines={2}
                        style={{
                          color: "grey",
                          fontSize: 14,
                          padding: 5,
                          paddingRight: 25,
                        }}
                      >
                        {item.description}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      </SafeAreaView>
    );
  else
    return (
      <View style={{ flex: 1, alignItems: "center" }}>
        <Text style={(styles.gridTitle, { margin: 100 })}>
          You do not have any alerts!
        </Text>
      </View>
    );
}

function getFormattedDate(date) {
  let d = new Date(date);

  let ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(d);
  let mo = new Intl.DateTimeFormat("en", { month: "short" }).format(d);
  let da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(d);
  let hr = new Intl.DateTimeFormat("en", { hour: "2-digit" }).format(d);
  let min = new Intl.DateTimeFormat("en", { minute: "2-digit" }).format(d);

  return `${da} \n ${mo}`;
}

function getFormattedTime(date) {
  let d = new Date(date);

  let hr = new Intl.DateTimeFormat("en", { hour: "2-digit" }).format(d);

  return `${hr}`;
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
  footer: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  loadMoreBtn: {
    padding: 10,
    backgroundColor: "white",
    borderRadius: 4,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    color: "green",
    fontSize: 15,
    textAlign: "center",
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
    elevation: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 6,
    marginBottom: 6,
    marginLeft: 10,
    marginRight: 7,
  },
});

export default AlertsScreen;
