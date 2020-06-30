import React from "react";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";
import { View, Text, Dimensions } from "react-native";
import Constants from "expo-constants";

// DATA FREQUENCY
// Higher = fewer data points
// Lower = more data points

const CurrentPressureChart = (props) => {
  const data = {
    data: [
      parseFloat(props.data.data[props.data.data.length - 1].currentPressure) /
        1700,
    ],
  };

  const chartConfig = {
    backgroundColor: "#f5f5f5",
    backgroundGradientFrom: "#f5f5f5",
    backgroundGradientTo: "#f5f5f5",
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(88,190,0, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  };
  return (
    <View>
      <ProgressChart
        data={data}
        width={Dimensions.get("window").width}
        height={220}
        strokeWidth={16}
        radius={32}
        chartConfig={chartConfig}
        hideLegend={false}
      />
    </View>
  );
};

export default CurrentPressureChart;
