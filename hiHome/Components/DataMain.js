import React, { useState, useEffect } from "react";
import {
  ScrollView,
  RefreshControl,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
} from "react-native";
import Constants from "expo-constants";
import DataMapping from "./DataMapping";

export default function DataMain() {
  const [refreshing, setRefreshing] = React.useState(false);
  const [data, setData] = useState({ outdoor: {}, indoor: {} });

  useEffect(() => {
    onRefresh();
  }, []);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    const getMoviesFromApiAsync = async () => {
      try {
        let indoorResponse = await fetch(
          "http://10.0.0.91:4000/envirodata/pullAll"
        );
        let indoorJSON = await indoorResponse.json();
        setData(indoorJSON);
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
        {data[0] ? <DataMapping data={data} /> : <></>}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
