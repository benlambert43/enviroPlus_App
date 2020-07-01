import React from "react";
import { Text, StyleSheet, View } from "react-native";
import Constants from "expo-constants";
import HumidityChart from "./Charts/HumidityChart";
import CurrentGasChart from "./Charts/CurrentGasChart";
import CurrentHumidityChart from "./Charts/CurrentHumidityChart";
import GasChart from "./Charts/GasChart";
import CurrentPressureChart from "./Charts/CurrentPressureChart";
import PressureChart from "./Charts/PressureChart";
import CurrentTempChart from "./Charts/CurrentTemp";
import TempChart from "./Charts/TempChart";
import CurrentLightChart from "./Charts/CurrentLight";
import LightChart from "./Charts/LightChart";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: "100%",
    paddingBottom: 80,
  },
  view: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

const Charting = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <View style={{ padding: 30 }}>
          <Text
            style={{
              fontSize: 18,
              fontFamily: "System",
              textAlign: "center",
              fontWeight: "bold",
              color: `rgba(0, 88 , 190, 1)`,
            }}
          >
            Humidity{"\n"}(%){"\n"}
          </Text>
          <CurrentHumidityChart data={props.data} />
          <HumidityChart data={props.data} />
        </View>
        <View style={{ padding: 30 }}>
          <Text
            style={{
              fontSize: 18,
              fontFamily: "System",
              textAlign: "center",
              fontWeight: "bold",
              color: `rgba(190,0,88,1)`,
            }}
          >
            Gas Levels{"\n"}(Relative Concentrations){"\n"}
          </Text>
          <CurrentGasChart data={props.data} />
          <GasChart data={props.data} />
        </View>
        <View style={{ padding: 30 }}>
          <Text
            style={{
              fontSize: 18,
              fontFamily: "System",
              textAlign: "center",
              fontWeight: "bold",
              color: `rgba(88,190,0,1)`,
            }}
          >
            Pressure{"\n"}(hPa, Relative){"\n"}
          </Text>
          <CurrentPressureChart data={props.data} />
          <PressureChart data={props.data} />
        </View>
        <View style={{ padding: 30 }}>
          <Text
            style={{
              fontSize: 18,
              fontFamily: "System",
              textAlign: "center",
              fontWeight: "bold",
              color: `rgba(190,102,0, 1)`,
            }}
          >
            Temperature{"\n"}(°F){"\n\n"}Temperature above 72°F:{"\n"}
          </Text>
          <CurrentTempChart data={props.data} />
          <TempChart data={props.data} />
        </View>
        <View style={{ padding: 30 }}>
          <Text
            style={{
              fontSize: 18,
              fontFamily: "System",
              textAlign: "center",
              fontWeight: "bold",
              color: `rgba(255,201,0,1)`,
            }}
          >
            Light {"\n"}(Lux, Relative) {"\n"}
          </Text>
          <CurrentLightChart data={props.data} />
          <LightChart data={props.data} />
        </View>
      </View>
    </View>
  );
};

export default Charting;
