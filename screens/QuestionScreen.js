import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TextInput,
  Alert,
} from "react-native";
import { Rating } from "react-native-ratings";
import { Picker } from "@react-native-picker/picker";
import { Button, RadioButton } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";

import RadioButtonRN from "radio-buttons-react-native";
import SelectMultiple from "react-native-select-multiple";

function QuestionScreen({ route }) {
  const [selectedValue, setSelectedValue] = useState("");
  const [text, setText] = useState("Enter text");
  const [data, setData] = useState([]);
  const [rating, setRating] = useState(0);
  const [select, setSelection] = useState();
  const [choises, setChoises] = useState([]);
  function containsObject(obj) {
    var i;
    for (i = 0; i < response.length; i++) {
      if (response[i].question_id === obj.question_id) {
        response[i] = obj;
        return true;
      }
    }

    return false;
  }

  const getQuestions = async () => {
    const { surveyID } = route.params;

    console.log(text);

    //console.log(surveyID);
    const token =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiMmI1ZTdkZTEwMjNhZTc0MjRiMDg2ODgxOGRiODVlNzI0ZmZmZTExNWVhNjczYzlhZTRiZDIwMjFiOWQwOWMyOWY0ZmM4OGU5OTU2YmYwNmUiLCJpYXQiOjE2NDM5MDE0NjEuMDU5MTkxLCJuYmYiOjE2NDM5MDE0NjEuMDU5MTk2LCJleHAiOjE2NDM5MDUwNjEuMDUzNDQ1LCJzdWIiOiIyNSIsInNjb3BlcyI6W119.BzsASkqx-Tzd5VpiykpfyG0NleI14Bef1AsCn1_4dLOGKH8I8OZR69IIgQcI6EIC2-kxnuio9WS55wRqWPwxhaJBjvcELRjNLT3rzVKXTpIWDnKlLNn2npuOHKoXSbCHehY6lc8xQVGMXxRzbgsF2vxU3nUUNcSc29vSfIdjNc5W0PChP-dWnA7Cceugo-3DY9Y7tTfsKfRKXdaD55RwiBhBWPcq1L2lf9paejZto-e4iXL7MC_fOvgwpTJKmrGUL8rRlxp-d4S-NtztZumUpA2IoRqYTKRTwH3Pv-2ZTdykntMrUQMdMv1zoLoWYGh_ynrtmVWvJEKJ8ZYpbcClDewNyj0Qh4Sn0kjkqfZ8vMoSmABnRRk3NZBU5v4Xb0Z8kq9x58NldvWmlTCTSOffuD7uSE5Bucbmoa0g98k4H3fuzklZCXhwr6wPZfJuTWxbwn_nO6uS-zM7VIYSIDKMusxVTNCJBPGqvcPu3VozoLcHA5S6ascAGbrb3lSsIN0N4mYHB6baZ0K0SsBQKRghyloOnJYt-KwRg2c7Fapb7GPAvq5LRR89G5esPQdM4sCy8zefuofIojZXLCQe8ZM-RlL0Qpv8i-0iuLhrmIhYH7rqYG71ZDeHfIVf5ISanLYaaBMFqj922ta2Zn_0O6T_h9e_zUjlTi9emzN5raOkJ2Q";

    try {
      const response = await fetch(
        "http://konza.softwareske.com/api/v1/surveys/" + surveyID + "/fetch",
        {
          method: "GET",
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      const json = await response.json();
      const code = json.code ?? "";

      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
    }
  };

  useEffect(() => {
    getQuestions();
  }, []);

  const response = [];

  const surveyResponse = async () => {
    const token = await AsyncStorage.getItem("token");
    // const token =
    //   "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiMmI1ZTdkZTEwMjNhZTc0MjRiMDg2ODgxOGRiODVlNzI0ZmZmZTExNWVhNjczYzlhZTRiZDIwMjFiOWQwOWMyOWY0ZmM4OGU5OTU2YmYwNmUiLCJpYXQiOjE2NDM5MDE0NjEuMDU5MTkxLCJuYmYiOjE2NDM5MDE0NjEuMDU5MTk2LCJleHAiOjE2NDM5MDUwNjEuMDUzNDQ1LCJzdWIiOiIyNSIsInNjb3BlcyI6W119.BzsASkqx-Tzd5VpiykpfyG0NleI14Bef1AsCn1_4dLOGKH8I8OZR69IIgQcI6EIC2-kxnuio9WS55wRqWPwxhaJBjvcELRjNLT3rzVKXTpIWDnKlLNn2npuOHKoXSbCHehY6lc8xQVGMXxRzbgsF2vxU3nUUNcSc29vSfIdjNc5W0PChP-dWnA7Cceugo-3DY9Y7tTfsKfRKXdaD55RwiBhBWPcq1L2lf9paejZto-e4iXL7MC_fOvgwpTJKmrGUL8rRlxp-d4S-NtztZumUpA2IoRqYTKRTwH3Pv-2ZTdykntMrUQMdMv1zoLoWYGh_ynrtmVWvJEKJ8ZYpbcClDewNyj0Qh4Sn0kjkqfZ8vMoSmABnRRk3NZBU5v4Xb0Z8kq9x58NldvWmlTCTSOffuD7uSE5Bucbmoa0g98k4H3fuzklZCXhwr6wPZfJuTWxbwn_nO6uS-zM7VIYSIDKMusxVTNCJBPGqvcPu3VozoLcHA5S6ascAGbrb3lSsIN0N4mYHB6baZ0K0SsBQKRghyloOnJYt-KwRg2c7Fapb7GPAvq5LRR89G5esPQdM4sCy8zefuofIojZXLCQe8ZM-RlL0Qpv8i-0iuLhrmIhYH7rqYG71ZDeHfIVf5ISanLYaaBMFqj922ta2Zn_0O6T_h9e_zUjlTi9emzN5raOkJ2Q";

    const request = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({
        survey_id: "1",
        user_id: "testid",
        response: response,
      }),
    };

    try {
      //console.log(request + " Current Token is " + token);
      const response = await fetch(
        "http://konza.softwareske.com/api/v1/surveys/response/post",
        request
      );

      const json = await response.json();

      console.log(json);

      const message = json.message;
      // console.log(message);

      Alert.alert(message);
    } catch (error) {
      console.error(error);
    }
  };

  const optionsList = (item) => {
    let options = item.metadata.options;
    console.log(options);

    return options.map((obj) => {
      return <Picker.Item label={obj.value} value={obj} />;
    });
  };

  const choiceList = (item) => {
    let options = item.metadata.options;

    const data = [];

    options.map((obj) => {
      data.push(obj.value);
    });

    return data;
  };

  const radioList = (item) => {
    let options = item.metadata.options;
    console.log(options);

    setSelection(false);

    const data = [];

    options.map((obj) => {
      const format = {
        label: obj.value,
        id: obj.id,
        value: obj.value,
      };
      data.push(format);
    });
    return (
      <RadioButtonRN
        textColor={"#000000"}
        circleSize={16}
        selectedBtn={(obj) => {
          var respObj = {
            question_id: item.id,
            value: [
              {
                value: { id: obj.id, value: obj.value },
              },
            ],
          };

          if (!containsObject(respObj)) {
            //push new
            response.push(respObj);
          }

          console.log(response);
        }}
        box={false}
        data={data}
      />
    );
  };

  const renderFooter = () => {
    return (
      <View>
        <Button
          onPress={surveyResponse}
          mode={"outlined"}
          color={"green"}
          style={{ margin: 10 }}
        >
          Submit
        </Button>
      </View>
    );
  };
  //renderItems
  const renderItem = ({ item }) => {
    switch (item.type) {
      case "rating":
        return (
          <View style={styles.itemContainer}>
            <View style={{ flexDirection: "column", flex: 0 }}>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                {item.title}
              </Text>
              <Text>{item.description}</Text>
            </View>
            <View style={{ flexDirection: "row", alignSelf: "center" }}>
              <Rating
                showRating
                startingValue={1}
                onFinishRating={(rating) => {
                  console.log(item.id + "Rating is: " + rating);

                  var respObj = {
                    question_id: item.id,
                    value: [
                      {
                        value: rating,
                      },
                    ],
                  };

                  if (!containsObject(respObj)) {
                    //push new
                    response.push(respObj);
                  }

                  console.log(response);
                }}
                imageSize={30}
                style={{ paddingVertical: 0 }}
              />
            </View>
          </View>
        );

      case "select":
        return (
          <View style={styles.itemContainer}>
            <View style={{ flexDirection: "column", flex: 0 }}>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                {item.title}
              </Text>
              <Text>{item.description}</Text>
            </View>
            <View style={{ flexDirection: "row", alignSelf: "center" }}>
              <Picker
                selectedValue={selectedValue}
                mode="dropdown"
                style={{ height: 50, width: 150 }}
                onValueChange={(obj) => {
                  var respObj = {
                    question_id: item.id,
                    value: [obj],
                  };

                  if (!containsObject(respObj)) {
                    //push new
                    response.push(respObj);
                  }

                  console.log(response);
                }}
              >
                {optionsList(item)}
              </Picker>
            </View>
          </View>
        );

      case "text":
        return (
          <View style={styles.itemContainer}>
            <View style={{ flexDirection: "column", flex: 0 }}>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                {item.title}
              </Text>
              <Text>{item.description}</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <TextInput
                style={styles.input}
                placeholder="Name"
                placeholderTextColor="white"
                keyboardType="default"
                multiline={true}
                numberOfLines={4}
                onChangeText={(value) => {
                  var respObj = {
                    question_id: item.id,
                    value: [
                      {
                        value: value,
                      },
                    ],
                  };

                  if (!containsObject(respObj)) {
                    //push new
                    response.push(respObj);
                  }

                  console.log(response);
                }}
              />
            </View>
          </View>
        );

      case "choice":
        return (
          <View style={styles.itemContainer}>
            <View style={{ flexDirection: "column", flex: 0 }}>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                {item.title}
              </Text>
              <Text>{item.description}</Text>
            </View>
            <View style={{ flexDirection: "row", alignSelf: "flex-start" }}>
              <SelectMultiple
                items={choiceList(item)}
                selectedItems={choises}
                onSelectionsChange={(e) => {
                  let options = item.metadata.options;

                  const data = [];

                  const selectedValues = [];

                  e.forEach((element) => {
                    selectedValues.push(element.value);
                  });

                  options.map((obj) => {
                    if (selectedValues.indexOf(obj.value) >= 0)
                      data.push({ id: obj.id, value: obj.value });
                  });

                  var respObj = {
                    question_id: item.id,
                    value: [...data],
                  };

                  if (!containsObject(respObj)) {
                    //push new
                    response.push(respObj);
                  }

                  console.log(response);
                  setChoises(e);
                }}
              />
            </View>
          </View>
        );

      case "radio":
        return (
          <View style={styles.itemContainer}>
            <View style={{ flexDirection: "column", flex: 0 }}>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                {item.title}
              </Text>
              <Text>{item.description}</Text>
            </View>

            <View>{radioList(item)}</View>
          </View>
        );
    }
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <FlatList
          data={data.questions}
          renderItem={renderItem}
          keyExtractor={(item) => item.question_id}
          ListFooterComponent={renderFooter}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  itemContainer: {
    flexDirection: "column",
    padding: 10,
    backgroundColor: "white",
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "grey",
    marginVertical: 2,
    marginHorizontal: 2,
    flex: 1,
  },

  input: {
    height: 80,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: "black",
    borderColor: "grey",
    borderRadius: 5,
    flex: 1,
  },

  submitBtn: {
    width: 100,
    marginHorizontal: 50,
  },
});

export default QuestionScreen;
