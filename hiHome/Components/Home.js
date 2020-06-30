import React, { useContext, useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  View,
  ActivityIndicator,
  Image,
} from "react-native";
import Constants from "expo-constants";
import { DataContext } from "./DataContext";
import HomeCard from "./HomeCard";
import HomeCardMap from "./HomeCardMap";

const timeOfDay = () => {
  const hour = new Date().getHours();
  if (hour <= 11 && hour >= 3) {
    return "Morning";
  } else if (hour <= 17 && hour > 11) {
    return "Afternoon";
  } else if (hour < 3 || hour > 17) {
    return "Evening";
  }
};

export default function Home() {
  const [inFlight, setInFlight] = useState(false);
  const apiData = useContext(DataContext);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {apiData.outdoor.main ? (
          <>
            <>
              <View
                style={{
                  flexDirection: "row",
                  height: 100,
                  minHeight: 100,
                  maxHeight: 100,
                  padding: 10,
                  marginTop: 10,
                  marginBottom: 10,
                  alignSelf: "center",
                  backgroundColor: "white",
                  borderRadius: 4,
                  height: "15%",
                  shadowColor: "black",
                  width: "95%",
                  shadowOffset: {
                    width: 5,
                    height: 5,
                  },
                  shadowOpacity: 0.1,
                  shadowRadius: 1,
                }}
              >
                <Text
                  style={{
                    alignSelf: "center",
                    fontSize: 28,
                    fontFamily: "System",
                    paddingLeft: 10,
                  }}
                >
                  Good {timeOfDay()}.
                </Text>
                <View
                  style={{
                    alignSelf: "center",
                  }}
                >
                  <Image
                    style={{
                      width: 50,
                      height: 50,
                    }}
                    source={{
                      uri: `http://openweathermap.org/img/wn/${apiData.outdoor.weather[0].icon}@2x.png`,
                    }}
                  />
                </View>
              </View>
            </>
            <>
              <HomeCardMap outdoor={apiData.outdoor} indoor={apiData.indoor} />
            </>
          </>
        ) : (
          <View style={{ flex: 1, justifyContent: "center", paddingTop: 300 }}>
            <ActivityIndicator />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  scrollView: {
    marginHorizontal: 20,
  },
  text: {
    fontSize: 18,
    fontFamily: "System",
    padding: 5,
    textAlign: "center",
  },
});
