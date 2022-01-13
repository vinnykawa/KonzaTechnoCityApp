import React from "react";
import { Text, View, Image, StyleSheet, TextInput } from "react-native";

export type SectionProps = { text: string };
//sections start
const SectionHistory = (props: SectionProps) => {
  return (
    <View style={{ flexDirection: "column" }}>
      <View style={styles.sectionRow}>
        <Image
          source={require("../assets/information-button.png")}
          style={{
            tintColor: "white",
            resizeMode: "contain",
            height: 30,
            width: 30,
          }}
        ></Image>
        <View style={{ marginLeft: 10 }}>
          <Text style={{ color: "white", fontSize: 25 }}>{props.text}</Text>
        </View>
      </View>

      <View
        style={{
          padding: 1,
          backgroundColor: "green",
        }}
      ></View>
    </View>
  );
};

const SectionVision = (props: SectionProps) => {
  return (
    <View style={{ flexDirection: "column" }}>
      <View style={styles.sectionRow}>
        <Image
          source={require("../assets/binoculars.png")}
          style={{
            tintColor: "white",
            resizeMode: "contain",
            height: 30,
            width: 30,
          }}
        ></Image>
        <View style={{ marginLeft: 10 }}>
          <Text style={{ color: "white", fontSize: 25 }}>{props.text}</Text>
        </View>
      </View>

      <View
        style={{
          padding: 1,
          backgroundColor: "green",
        }}
      ></View>
    </View>
  );
};

const SectionValues = (props: SectionProps) => {
  return (
    <View style={{ flexDirection: "column" }}>
      <View style={styles.sectionRow}>
        <Image
          source={require("../assets/book.png")}
          style={{
            tintColor: "white",
            resizeMode: "contain",
            height: 30,
            width: 30,
          }}
        ></Image>
        <View style={{ marginLeft: 10 }}>
          <Text style={{ color: "white", fontSize: 25 }}>{props.text}</Text>
        </View>
      </View>

      <View
        style={{
          padding: 1,
          backgroundColor: "green",
        }}
      ></View>
    </View>
  );
};

const SectionBoard = (props: SectionProps) => {
  return (
    <View style={{ flexDirection: "column" }}>
      <View style={styles.sectionRow}>
        <Image
          source={require("../assets/multiple-users-silhouette.png")}
          style={{
            tintColor: "white",
            resizeMode: "contain",
            height: 30,
            width: 30,
          }}
        ></Image>
        <View style={{ marginLeft: 10 }}>
          <Text style={{ color: "white", fontSize: 25 }}>{props.text}</Text>
        </View>
      </View>

      <View
        style={{
          padding: 1,
          backgroundColor: "green",
        }}
      ></View>
    </View>
  );
};

const SectionMgt = (props: SectionProps) => {
  return (
    <View style={{ flexDirection: "column" }}>
      <View style={styles.sectionRow}>
        <Image
          source={require("../assets/management.png")}
          style={{
            tintColor: "white",
            resizeMode: "contain",
            height: 30,
            width: 30,
          }}
        ></Image>
        <View style={{ marginLeft: 10 }}>
          <Text style={{ color: "white", fontSize: 25 }}>{props.text}</Text>
        </View>
      </View>

      <View
        style={{
          padding: 1,
          backgroundColor: "green",
        }}
      ></View>
    </View>
  );
};

const SectionSocial = (props: SectionProps) => {
  return (
    <View style={{ flexDirection: "column" }}>
      <View style={styles.sectionRow}>
        <Image
          source={require("../assets/social-media.png")}
          style={{
            tintColor: "white",
            resizeMode: "contain",
            height: 30,
            width: 30,
          }}
        ></Image>
        <View style={{ marginLeft: 10 }}>
          <Text style={{ color: "white", fontSize: 25 }}>{props.text}</Text>
        </View>
      </View>

      <View
        style={{
          padding: 1,
          backgroundColor: "green",
        }}
      ></View>
    </View>
  );
};
//sections end

//MultilineTextinput

const MessageTextInput = (props) => {
  return (
    <TextInput
      {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
      editable
    />
  );
};

const MessageTextInputMultiline = () => {
  return (
    <View
      style={{
        borderColor: "grey",
        borderWidth: 1,
        marginHorizontal: 11,
        marginBottom: 10,
        padding: 7,
      }}
    >
      <Text style={{ color: "white" }}>Your message goes here..</Text>
      <MessageTextInput
        multiline
        numberOfLines={4}
        style={{ padding: 10, color: "white" }}
        // onChangeText={(value) => setName(value)}
      ></MessageTextInput>
    </View>
  );
};

const MessageTextInputMultiline2 = () => {
  return (
    <View
      style={{
        borderColor: "white",
        borderWidth: 1,
        marginHorizontal: 11,
        margin: 30,
        padding: 7,
      }}
    >
      <Text style={{ color: "white" }}>Your message goes here..</Text>
      <MessageTextInput
        multiline
        numberOfLines={4}
        style={{ padding: 10, color: "white" }}
      ></MessageTextInput>
    </View>
  );
};

const MessageTextInputMultiline3 = () => {
  return (
    <View
      style={{
        borderColor: "white",
        borderWidth: 1,
        marginHorizontal: 11,
        marginBottom: 100,
        marginTop: 10,
        padding: 7,
      }}
    >
      <Text style={{ color: "white" }}>Your message goes here..</Text>
      <MessageTextInput
        multiline
        numberOfLines={4}
        style={{ padding: 10, color: "white" }}
        onChangeText={""}
      ></MessageTextInput>
    </View>
  );
};

//end of multilineTextinput

//card
const Card = () => {
  return (
    <View style={styles.container}>
      <View style={styles.mainCardView}>
        <Text style={{ alignItems: "center" }}>This is card text</Text>
      </View>
    </View>
  );
};
//end of card

const styles = StyleSheet.create({
  sectionRow: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },

  //card CSS
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  mainCardView: {
    height: 90,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 15,
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 8,
    flexDirection: "row",

    paddingLeft: 16,
    paddingRight: 14,
    marginTop: 6,
    marginBottom: 6,
    marginLeft: 16,
    marginRight: 16,
  },
});

export default SectionHistory;
export {
  SectionVision,
  SectionValues,
  SectionBoard,
  SectionMgt,
  SectionSocial,
};
export { MessageTextInputMultiline };
export { MessageTextInputMultiline2 };
export { MessageTextInputMultiline3 };
export { Card };
