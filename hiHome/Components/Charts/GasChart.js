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

const GasChart = (props) => {
  const DATAFREQUENCY =
    props.data.data.length -
    (props.data.data.length - parseInt(props.data.data.length / 7.5));

  const CO = props.data.data.map((a) => parseFloat(a.currentco2));
  const NO = props.data.data.map((a) => parseFloat(a.currentno2));
  const NH = props.data.data.map((a) => parseFloat(a.currentnh3));

  const TimeData = props.data.data.map((a) =>
    a.currentTime.substring(0, a.currentTime.length - 3)
  );
  let TimeStamp = TimeData.filter(
    (item, i) => Math.abs(i) % DATAFREQUENCY === 0
  );
  let COStamp = CO.filter((item, i) => Math.abs(i) % DATAFREQUENCY === 0);
  let NOStamp = NO.filter((item, i) => Math.abs(i) % DATAFREQUENCY === 0);
  let NHStamp = NH.filter((item, i) => Math.abs(i) % DATAFREQUENCY === 0);

  return (
    <View>
      <LineChart
        data={{
          labels: TimeStamp,
          datasets: [
            {
              data: COStamp,
              color: (opacity = 255) => `rgba(227,204,216, ${opacity})`, // optional
              strokeWidth: 2, // optional
            },
            {
              data: NOStamp,
              color: (opacity = 255) => `rgba(190,0,100, ${opacity})`, // optional
              strokeWidth: 2, // optional
            },
            {
              data: NHStamp,
              color: (opacity = 255) => `rgba(119,0,62, ${opacity})`, // optional
              strokeWidth: 2, // optional
            },
          ],
        }}
        width={Dimensions.get("window").width} // from react-native
        height={220}
        yAxisSuffix=""
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundGradientFrom: "#f5f5f5",
          backgroundGradientTo: "#f5f5f5",
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 255) => `rgba(190,0,88, ${opacity})`,
          labelColor: (opacity = 255) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: "4",
            strokeWidth: "1",
            stroke: "#efefef",
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
};

export default GasChart;
