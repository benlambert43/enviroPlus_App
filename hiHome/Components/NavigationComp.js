import React, { useEffect, useState, useContext } from "react";
import { Text, View, ActivityIndicator } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { DataContext } from "./DataContext";
import Home from "./Home";
import CustomSpinner from "./CustomSpinner";

function Data() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Data</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function NavigationComp() {
  const [data, setData] = useState({ outdoor: {}, indoor: {} });
  const [inFlight, setInFlight] = useState(false);

  useEffect(() => {
    const getMoviesFromApiAsync = async () => {
      setInFlight(true);
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
        setInFlight(false);
      } catch (error) {
        console.error(error);
      }
    };
    getMoviesFromApiAsync();
  }, []);

  return (
    <DataContext.Provider value={data}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              if (route.name === "Home") {
                return <Ionicons name={"ios-home"} size={size} color={color} />;
              }
              if (route.name === "Settings") {
                return <Ionicons name={"ios-cog"} size={size} color={color} />;
              }
              if (route.name === "Data") {
                return (
                  <Ionicons name={"ios-analytics"} size={size} color={color} />
                );
              }
            },
          })}
          tabBarOptions={{
            activeTintColor: "#0058BE",
            inactiveTintColor: "grey",
          }}
        >
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Data" component={Data} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </DataContext.Provider>
  );
}
