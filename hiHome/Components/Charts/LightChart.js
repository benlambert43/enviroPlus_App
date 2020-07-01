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

const LightChart = (props) => {
  const DATAFREQUENCY =
    props.data.data.length -
    (props.data.data.length - parseInt(props.data.data.length / 7.5));

  const LightData = props.data.data.map((a) => parseFloat(a.currentLight));
  const TimeData = props.data.data.map((a) =>
    a.currentTime.substring(0, a.currentTime.length - 3)
  );
  let TimeStamp = TimeData.filter(
    (item, i) => Math.abs(i) % DATAFREQUENCY === 0
  );
  let LightStamp = LightData.filter(
    (item, i) => Math.abs(i) % DATAFREQUENCY === 0
  );

  return (
    <View>
      <LineChart
        data={{
          labels: TimeStamp,
          datasets: [
            {
              data: LightStamp,
            },
          ],
        }}
        width={Dimensions.get("window").width} // from react-native
        height={220}
        yAxisSuffix="L"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundGradientFrom: "#f5f5f5",
          backgroundGradientTo: "#f5f5f5",
          decimalPlaces: 1, // optional, defaults to 2dp
          color: (opacity = 255) => `rgba(255,201,0, ${opacity})`,
          labelColor: (opacity = 255) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: "3",
            strokeWidth: "2",
            stroke: "#efefef",
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
};

export default LightChart;
