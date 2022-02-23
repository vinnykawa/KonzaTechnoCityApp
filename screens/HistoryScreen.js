import React from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import { Paragraph, Headline, Subheading } from "react-native-paper";

function HistoryScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView style={{ padding: 5 }}>
        <View style={styles.mainCardView}>
          <Text style={styles.text}>
            2019 - First Konza Complex Building Complete.
          </Text>
          <Image
            style={styles.image}
            source={require("../assets/history_2019.jpg")}
          />
          <Text style={{ padding: 10, fontSize: 14 }}>
            Major Phase-1 infrastructure begins first Konza Technopolis building
            complete - Konza Complex
          </Text>
        </View>
        <View style={styles.mainCardView}>
          <Text style={styles.text}>
            2018 - Major Phase-1 Infrastructure Construction Begins.
          </Text>
          <Image
            style={styles.image}
            source={require("../assets/history_2018.jpg")}
          />
          <Text style={{ padding: 10, fontSize: 14 }}>
            Major facilities: police, fire, schools and recreation. Major
            infrastructure Construction begins Parcel leasing begins.
          </Text>
        </View>
        <View style={styles.mainCardView}>
          <Text style={styles.text}>
            2017 - Commitment for Konza Data Center with China Exim Bank.
          </Text>
          <Image
            style={styles.image}
            source={require("../assets/history_2017.jpg")}
          />
          <Text style={{ padding: 10, fontSize: 14 }}>
            Commitment for Konza Data Center with China Exim Bank Phase 1A and
            Technology/ University Bands begins.
          </Text>
        </View>
        <View style={styles.mainCardView}>
          <Text style={styles.text}>
            2016 - KETRACO substation and ICTA Fibre Line complete.
          </Text>
          <Image
            style={styles.image}
            source={require("../assets/history_2016.jpg")}
          />
          <Text style={{ padding: 10, fontSize: 14 }}>
            KETRACO substation and ICTA Fibre Line complete Anchor tenant signed
            -KAIST
          </Text>
        </View>
        <View style={styles.mainCardView}>
          <Text style={styles.text}>
            2015 - Access and Arterial Road Construction and Preliminary
            Earthwork.
          </Text>
          <Image
            style={styles.image}
            source={require("../assets/history_2015.jpg")}
          />
          <Text style={{ padding: 10, fontSize: 14 }}>
            Major Phase-1 infrastructure begins first Konza Technopolis building
            complete - Konza Complex
          </Text>
        </View>
        <View style={styles.mainCardView}>
          <Text style={styles.text}>
            2014 - Infrastructure and Parcel Development Guidelines Begin.
          </Text>
          <Image
            style={styles.image}
            source={require("../assets/history_2014.jpg")}
          />
          <Text style={{ padding: 10, fontSize: 14 }}>
            Major Phase-1 infrastructure begins first Konza Technopolis building
            complete - Konza Complex
          </Text>
        </View>
        <View style={styles.mainCardView}>
          <Text style={styles.text}>
            2013 - Groundbreaking of Konza Technopolis.
          </Text>
          <Image
            style={styles.image}
            source={require("../assets/history_2013.jpg")}
          />
          <Text style={{ padding: 10, fontSize: 14 }}>
            Kenyan President Mwai Kibaki broke grounds in Malili marking the
            start of the development of Konza technopolis. The board of the
            Konza Technopolis Development Authority (KoTDA) was appointed as a
            special purpose entity to facilitate the development of Konza
            technopolis.
          </Text>
        </View>
        <View style={styles.mainCardView}>
          <Text style={styles.text}>2012- Phase 1 Master Plan Developed.</Text>
          <Image
            style={styles.image}
            source={require("../assets/history_2012.jpg")}
          />
          <Text style={{ padding: 10, fontSize: 14 }}>
            In 2012, the Ministry of Information, Communications and Technology
            retained a team of consultants led by New York City based HR&A
            Advisors, Inc. to prepare a detailed business plan and master plan
            for Phase 1. The Master Development Partner1 (MDP1) team included
            SHoP Architects, Dalberg, Centre for Urban and Regional Planning, OZ
            Architecture, and Tetra Tech. The MDP team held extensive interviews
            with stakeholders, business leaders, potential investors, and led 5
            workshops with government officials over nearly a year to develop a
            comprehensive plan for Konza.The first phase of Konza City is
            expected to create over 20,000 direct and indirect jobs. The city
            will be developed as a public private partnership, in which the
            Government will take a minimal role, developing the public
            infrastructure and regulatory guidelines.
          </Text>
        </View>
        <View style={styles.mainCardView}>
          <Text style={styles.text}>2009- Konza Technopolis Commissioned.</Text>
          <Image
            style={styles.image}
            source={require("../assets/history_2009.jpg")}
          />
          <Text style={{ padding: 10, fontSize: 14 }}>
            In 2009, the Government of Kenya hired the International Finance
            Corporation, a member of the World Bank, to advise on the
            development and implementation of a world-class technology city,
            which would grow the BPO/ITES and other technology industries in
            Kenya.The Government commissioned feasibility studies that
            demonstrated the viability of Konza, the focus on BPO/ITES, and its
            potential contributions to local economic development. The studies
            conducted include a Strategic Environmental and Social Assessment,
            Legal and Regulatory Due Diligence, and a Demand Assessment. The
            initial feasibility and concept master plan was prepared by Deloitte
            and Pell Frischmann, a United Kingdom based consultancy. Pell
            Frischmann proposed the establishment of Konza, a technology park
            with world class infrastructure that will be sustainable and have
            inclusive growth as key drivers.In 2009, The Konza Technology City
            project was initiated with the procurement of a 5,000 acre parcel of
            land at Malili Ranch, 60km south east of Nairobi along
            Mombasa-Nairobi A109 road. With this, the realization of Africa's
            Silicon Savannah officially launched.
          </Text>
        </View>
        <View style={styles.mainCardView}>
          <Text style={styles.text}>
            2008- Konza Technology City Approved as Kenya's Vision 2030 Flagship
            Project.
          </Text>
          <Image
            style={styles.image}
            source={require("../assets/history_2008.jpg")}
          />
          <Text style={{ padding: 10, fontSize: 14 }}>
            In 2008, the Government of Kenya approved the creation of Konza
            Technology City as a flagship Kenya Vision 2030 project. Vision 2030
            aims to create a globally competitive and prosperous nation with a
            high quality of life by 2030. As part of this vision, Konza will be
            a sustainable, world class technology hub and major economic driver
            for Kenya. Konza was initially conceived to capture the growing
            global Business Processing Outsourcing and Information Technology
            Enabled Services (BPO/ITES) sectors in Kenya. BPO/ITES business
            produced US$110 billion in revenues in 2010. Revenues from this
            industry are expected to increase three-fold to US$300 billion by
            2015. Africa attracts about 1% of the total revenues accruing from
            this growing industry. Only a few African countries, including South
            Africa, Egypt, Morocco, Ghana and Mauritius, have made an effort to
            develop their BPO/ITES industries. Given the robust tech industry
            already in Nairobi, Kenya has a unique opportunity to capture a
            sizable amount of the growing global BPO/ITES industry.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    backgroundColor: "white",
    padding: 10,
    flexDirection: "column",
  },
  image: {
    height: 200,
    width: "100%",
    resizeMode: "stretch",
  },
  text: {
    alignItems: "center",
    fontWeight: "bold",
    color: "black",
    fontSize: 17,
    padding: 10,
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
    elevation: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 10,
    marginLeft: 10,
    paddingRight: 14,
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 0,
    marginRight: 0,
  },
});

export default HistoryScreen;
