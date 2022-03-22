import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TextInput,
  AsyncStorage,
  Alert,
} from "react-native";
import { Rating } from "react-native-ratings";
import { Picker } from "@react-native-picker/picker";
import { Button } from "react-native-paper";
import ProgressLoader from "rn-progress-loader";
import RadioButtonRN from "radio-buttons-react-native";
import SelectMultiple from "react-native-select-multiple";
import { useNavigation } from "@react-navigation/native";

function QuestionScreen({ route }) {
  const [selectedValue, setSelectedValue] = useState("");
  const [text, setText] = useState("Enter text");
  const [data, setData] = useState([]);
  const [rating, setRating] = useState(0);
  const [select, setSelection] = useState();
  const [choises, setChoises] = useState([]);
  const [isLoaderVisible, setLoaderVisibility] = useState(false);
  const navigation = useNavigation();

  const response = useRef([]);

  function containsObject(obj) {
    var i;
    for (i = 0; i < response.current.length; i++) {
      if (response.current[i].question_id === obj.question_id) {
        response.current[i] = obj;
        return true;
      }
    }

    return false;
  }

  const getQuestions = async () => {
    const { surveyID } = route.params;
    const token = await AsyncStorage.getItem("token");
    setLoaderVisibility(true);

    try {
      const resp = await fetch(
        "http://konza.softwareske.com/api/v1/surveys/" + surveyID + "/fetch",
        {
          method: "GET",
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      const json = await resp.json();
      const code = json.code ?? "";
      console.log("\n Survey Questions::", json);
      setLoaderVisibility(false);

      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
    }
  };

  useEffect(() => {
    getQuestions();
  }, []);

  const surveyResponse = async () => {
    const token = await AsyncStorage.getItem("token");
    const user_id = await AsyncStorage.getItem("user_id");
    const { surveyID } = route.params;
    setLoaderVisibility(true);

    const request = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({
        survey_id: surveyID,
        user_id: user_id,
        response: response.current,
      }),
    };

    try {
      console.log(" :: Survey Request!", request.body);
      const response = await fetch(
        "http://konza.softwareske.com/api/v1/surveys/response/post",
        request
      );

      const json = await response.json();

      console.log(json);

      const message = json.message;
      // console.log(message);
      setLoaderVisibility(false);

      Alert.alert(message);

      if (json.code == 200) navigation.replace("Survey");
    } catch (error) {
      console.error(error);
    }
  };

  const optionsList = (item) => {
    let options = item.metadata.options;

    return options.map((obj, index) => {
      return <Picker.Item label={obj.value} value={obj.value} key={index} />;
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
    //console.log(options);

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
            response.current.push(respObj);
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
          mode={"contained"}
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
              <Text style={{ fontSize: 20, fontWeight: "bold", padding: 5 }}>
                {item.title}
              </Text>
              <Text style={{ padding: 5 }}>{item.description}</Text>
            </View>
            <View style={{ flexDirection: "row", alignSelf: "flex-start" }}>
              <Rating
                showRating
                startingValue={1}
                onFinishRating={(rating) => {
                  console.log(item.id + "Rating is: " + rating);

                  var respObj = {
                    question_id: item.id,
                    value: [
                      {
                        value: "" + rating,
                      },
                    ],
                  };

                  if (!containsObject(respObj)) {
                    //push new
                    response.current.push(respObj);
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
              <Text style={{ fontSize: 20, fontWeight: "bold", padding: 5 }}>
                {item.title}
              </Text>
              <Text style={{ padding: 5 }}>{item.description}</Text>
            </View>
            <View style={{ flexDirection: "row", alignSelf: "flex-start" }}>
              <Picker
                selectedValue={selectedValue}
                style={{ width: 200, height: 180 }}
                itemStyle={{ height: 160 }}
                onValueChange={(obj) => {
                  item.metadata.options.forEach((option) => {
                    // console.log("option", option);
                    // console.log("obj", obj);
                    if (option.value === obj) {
                      var respObj = {
                        question_id: item.id,
                        value: [{ value: obj }],
                      };

                      if (!containsObject(respObj)) {
                        //push new
                        response.current.push(respObj);
                      }
                    }
                  });

                  //console.log("SELECT::", response.current);
                  // const firstItem = [];
                  // firstItem[item.id] = item.metadata.options[0].value;
                  // const arr = selectedValue === "" ? firstItem : selectedValue;
                  // console.log(" current", arr);
                  // arr[item.id] = obj;
                  // console.log(response);

                  setSelectedValue(obj);
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
              <Text style={{ fontSize: 20, fontWeight: "bold", padding: 5 }}>
                {item.title}
              </Text>
              <Text style={{ padding: 5 }}>{item.description}</Text>
            </View>
            <View style={{ flexDirection: "row", alignContent: "flex-start" }}>
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
                    response.current.push(respObj);
                  }

                  // console.log(response);
                }}
              />
            </View>
          </View>
        );

      case "choice":
        return (
          <View style={styles.itemContainer}>
            <View style={{ flexDirection: "column", flex: 0 }}>
              <Text style={{ fontSize: 20, fontWeight: "bold", padding: 5 }}>
                {item.title}
              </Text>
              <Text style={{ padding: 5 }}>{item.description}</Text>
            </View>
            <View style={{ flexDirection: "row", alignSelf: "flex-start" }}>
              <SelectMultiple
                style={{ width: 350 }}
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
                    response.current.push(respObj);
                  }

                  // console.log(response);
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
              <Text style={{ fontSize: 20, fontWeight: "bold", padding: 5 }}>
                {item.title}
              </Text>
              <Text style={{ padding: 5 }}>{item.description}</Text>
            </View>

            <View>{radioList(item)}</View>
          </View>
        );
    }
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ProgressLoader
          visible={isLoaderVisible}
          isModal={true}
          isHUD={true}
          hudColor={"#000000"}
          color={"#FFFFFF"}
        />
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
    backgroundColor: "white",
  },

  itemContainer: {
    flexDirection: "column",
    padding: 10,
    backgroundColor: "white",
    borderColor: "white",
    marginVertical: 10,
    marginHorizontal: 10,
    flex: 1,
    shadowColor: "#ccc",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 8,
  },

  input: {
    height: 40,
    margin: 12,
    borderBottomWidth: 1,
    padding: 0,
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
