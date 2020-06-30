import React from "react";
import {
  ScrollView,
  RefreshControl,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
} from "react-native";
import Charting from "./Charting";

const DataMapping = (props) => {
  return (
    <>
      <Charting data={props} />
    </>
  );
};

export default DataMapping;
