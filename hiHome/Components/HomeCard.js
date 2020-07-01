import React, { useContext } from "react";
import { View, Text } from "react-native";
import { DataContext } from "./DataContext";
import { Ionicons } from "@expo/vector-icons";

const HomeCard = (props) => {
  return (
    <View
      style={{
        flexDirection: "row",
        height: 100,
        minHeight: 300,
        padding: 10,
        marginTop: 30,
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
          fontSize: 18,
          fontFamily: "System",
          paddingLeft: 10,
          paddingTop: 10,
        }}
      >
        <Ionicons name={props.item.icon} size={18} />
        {"  " + props.item.text}
      </Text>
    </View>
  );
};

export default HomeCard;
