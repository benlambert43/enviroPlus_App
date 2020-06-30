import React, { useState } from "react";
import HomeContent from "./HomeContent";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  RefreshControl,
} from "react-native";
import Constants from "expo-constants";

const Home = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState({ outdoor: {}, indoor: {} });

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    const getMoviesFromApiAsync = async () => {
      try {
        let outdoorResponse = await fetch(
          "http://api.openweathermap.org/data/2.5/weather?id=5429032&appid=b6bb5c7d10fde13ec854ea2b9dd19c69&units=imperial"
        );
        let indoorResponse = await fetch(
          "http://10.0.0.91:4000/envirodata/pullAll"
        );
        let outdoorJSON = await outdoorResponse.json();
        let indoorJSON = await indoorResponse.json();

        setData({ outdoor: outdoorJSON, indoor: indoorJSON });
        setRefreshing(false);
      } catch (error) {
        console.error(error);
      }
    };
    getMoviesFromApiAsync();
  }, [refreshing]);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <HomeContent data={data} />
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  scrollView: {},
});

export default Home;
