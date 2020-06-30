import React from "react";
import HomeCard from "./HomeCard";
import { View } from "react-native";

const HomeCardMap = (props) => {
  const cardData = [
    {
      key: 1,
      text: `Littleton, CO\n\nIt is currently ${parseInt(
        props.outdoor.main.temp
      )}°F outside, and the weather condition is ${props.outdoor.weather[0].main.toLowerCase()}. It feels like ${parseInt(
        props.outdoor.main.feels_like
      )}°F with a wind speed of ${props.outdoor.wind.speed} from ${
        props.outdoor.wind.deg
      }°. The outside humidity is ${
        props.outdoor.main.humidity
      }% and the pressure is ${props.outdoor.main.pressure} hPa.`,
      icon: "ios-pin",
    },
    {
      key: 2,
      text: `Indoor Conditions\n\nThe current indoor temperature is ${parseInt(
        (props.indoor[props.indoor.length - 1].currentAdjustedTemp * 9) / 5 + 32
      )}°F.\nThe indoor humidity is ${parseInt(
        props.indoor[props.indoor.length - 1].currentHumidity
      )}%, and the indoor pressure is ${parseInt(
        props.indoor[props.indoor.length - 1].currentPressure
      )} hPa.`,
      icon: "ios-home",
    },
    {
      key: 3,
      text: `Gas Sensing\n\nThe current reducing (CO) gas reading is ${
        Math.round(
          (parseFloat(props.indoor[props.indoor.length - 1].currentco2) +
            Number.EPSILON) *
            100
        ) / 10000
      }ppm, oxidising (NO2) gas reading is ${
        Math.round(
          (parseFloat(props.indoor[props.indoor.length - 1].currentno2) +
            Number.EPSILON) *
            100
        ) / 10000
      }ppb, and the NH3 gas reading is ${
        Math.round(
          (parseFloat(props.indoor[props.indoor.length - 1].currentnh3) +
            Number.EPSILON) *
            100
        ) / 10000
      }ppm`,
      icon: "ios-cloudy",
    },
    {
      key: 4,
      text: `Light Sensing\n\nThe light sensor is reporting ${
        Math.round(
          (parseFloat(props.indoor[props.indoor.length - 1].currentLight) +
            Number.EPSILON) *
            100
        ) / 100
      } Lux`,
      icon: "ios-flashlight",
    },
    {
      key: 5,
      text: `Hardware Information\n\nThe current CPU temperature is ${
        Math.round(
          (parseFloat(props.indoor[props.indoor.length - 1].currentCpuTemp) +
            Number.EPSILON) *
            100
        ) / 100
      }°C\n\nThe last server sync was at ${
        props.indoor[props.indoor.length - 1].currentTime
      }`,
      icon: "ios-information-circle",
    },
  ];
  return (
    <View style={{ paddingBottom: 40 }}>
      {cardData.map((item) => (
        <HomeCard item={item} key={item.key} />
      ))}
    </View>
  );
};

export default HomeCardMap;
