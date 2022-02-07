import React, { useState, useEffect } from "react";
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  AsyncStorage,
} from "react-native";
//import { SurveyItem } from "../components/surveyItem";
import { useNavigation } from "@react-navigation/native";
import { color } from "react-native-reanimated";

function SurveyScreen({ navigation }) {
  const [data, setData] = useState([]);

  const getSurveys = async () => {
    const token = await AsyncStorage.getItem("token");
    // const token =
    //   "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiMmI1ZTdkZTEwMjNhZTc0MjRiMDg2ODgxOGRiODVlNzI0ZmZmZTExNWVhNjczYzlhZTRiZDIwMjFiOWQwOWMyOWY0ZmM4OGU5OTU2YmYwNmUiLCJpYXQiOjE2NDM5MDE0NjEuMDU5MTkxLCJuYmYiOjE2NDM5MDE0NjEuMDU5MTk2LCJleHAiOjE2NDM5MDUwNjEuMDUzNDQ1LCJzdWIiOiIyNSIsInNjb3BlcyI6W119.BzsASkqx-Tzd5VpiykpfyG0NleI14Bef1AsCn1_4dLOGKH8I8OZR69IIgQcI6EIC2-kxnuio9WS55wRqWPwxhaJBjvcELRjNLT3rzVKXTpIWDnKlLNn2npuOHKoXSbCHehY6lc8xQVGMXxRzbgsF2vxU3nUUNcSc29vSfIdjNc5W0PChP-dWnA7Cceugo-3DY9Y7tTfsKfRKXdaD55RwiBhBWPcq1L2lf9paejZto-e4iXL7MC_fOvgwpTJKmrGUL8rRlxp-d4S-NtztZumUpA2IoRqYTKRTwH3Pv-2ZTdykntMrUQMdMv1zoLoWYGh_ynrtmVWvJEKJ8ZYpbcClDewNyj0Qh4Sn0kjkqfZ8vMoSmABnRRk3NZBU5v4Xb0Z8kq9x58NldvWmlTCTSOffuD7uSE5Bucbmoa0g98k4H3fuzklZCXhwr6wPZfJuTWxbwn_nO6uS-zM7VIYSIDKMusxVTNCJBPGqvcPu3VozoLcHA5S6ascAGbrb3lSsIN0N4mYHB6baZ0K0SsBQKRghyloOnJYt-KwRg2c7Fapb7GPAvq5LRR89G5esPQdM4sCy8zefuofIojZXLCQe8ZM-RlL0Qpv8i-0iuLhrmIhYH7rqYG71ZDeHfIVf5ISanLYaaBMFqj922ta2Zn_0O6T_h9e_zUjlTi9emzN5raOkJ2Q";

    try {
      const response = await fetch(
        "http://konza.softwareske.com/api/v1/surveys/all",
        {
          method: "GET",
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      const json = await response.json();
      const code = json.code ?? "";

      console.log(json);

      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
    }
  };

  useEffect(() => {
    getSurveys();
  }, []);

  console.log(data);

  //RenderItem
  const SurveyItem = ({ item }) => {
    const surveyID = item.id;
    //console.log(surveyID);

    return (
      <View style={styles.mainCardView}>
        <TouchableOpacity
          style={{ flexDirection: "row" }}
          onPress={() => {
            navigation.navigate("Survey Questions", { surveyID });
          }}
        >
          <View style={{ flexDirection: "column", flex: 2 }}>
            <Text style={{ fontWeight: "bold", fontSize: 17 }}>
              {item.title}
            </Text>
            <Text style={{ color: "grey" }}>{item.description}</Text>
            <Text style={{ paddingVertical: 5 }}>
              Questions: {item.number_of_questions}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "column",
              flex: 1,
              justifyContent: "space-between",
              alignContent: "center",
            }}
          >
            <Text
              style={[
                styles.status,
                item.status === "active" ? styles.active : styles.closed,
              ]}
            >
              {item.status}
            </Text>
            {/* <Text style={{alignSelf:"flex-end",color :item.status ==="active"? "green" :"red"}}>{item.status}</Text> */}

            <Text>{item.created_on}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <FlatList
        data={data}
        renderItem={SurveyItem}
        keyExtractor={(Item) => Item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
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
    flex: 0,
  },
  active: {
    color: "green",
  },
  closed: {
    color: "red",
  },
  status: {
    alignSelf: "flex-end",
  },
});

export default SurveyScreen;
