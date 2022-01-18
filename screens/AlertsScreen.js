import React, { useEffect, useState } from "react";
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
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getAlerts = async () => {
    //setLoading(true);

    notifee.setBadgeCount(0).then(() => console.log("Badge count unset!"));

    var currentAlerts = [];

    AsyncStorage.getItem("alerts")
      .then((req) => {
        console.log("Got alerts", req);
        currentAlerts = JSON.parse(req);

        setData(currentAlerts);
      })
      .catch((error) => console.log("error getting alerts! : ", error));
  };

  useEffect(() => {
    getAlerts();
  }, []);

  console.log("Alerts is ==", data);
  if (data)
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.mainCardView}>
              <View style={{ flexDirection: "column" }}>
                <TouchableOpacity onPress={() => {}}>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <View style={{ marginLeft: 12 }}>
                      <Text
                        style={{
                          fontSize: 16,
                          color: "black",
                          fontWeight: "bold",
                          padding: 5,
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
                            padding: 5,
                          }}
                        >
                          {item.message}
                        </Text>
                      </View>
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
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    paddingLeft: 16,
    paddingRight: 14,
    marginTop: 6,
    marginBottom: 6,
    marginLeft: 16,
    marginRight: 16,
  },
});

export default AlertsScreen;
