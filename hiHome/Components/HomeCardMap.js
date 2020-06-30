import React from "react";
import HomeCard from "./HomeCard";

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
      }°. The outside pressure is ${
        props.outdoor.main.pressure
      } hPa and the humidity is ${props.outdoor.main.humidity}%`,
      icon: "ios-pin",
    },
    {
      key: 2,
      text: `Indoor Conditions\n\n The current indoor temperature is ${parseInt(
        (props.indoor[props.indoor.length - 1].currentAdjustedTemp * 9) / 5 + 32
      )}`,
      icon: "ios-home",
    },
  ];
  return (
    <>
      {cardData.map((item) => (
        <HomeCard item={item} key={item.key} />
      ))}
    </>
  );
};

export default HomeCardMap;
