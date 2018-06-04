import React, { Component } from "react";
import { SafeAreaView, Text } from "react-native";
import TimeRangeSelect from "../components/timeRange/index.js";

export default class Home extends Component {
  render() {
    return (
      <SafeAreaView style={{ display: "flex", flexGrow: 1 }}>
        <Text>Home</Text>
        <TimeRangeSelect isEditable={true} />
      </SafeAreaView>
    );
  }
}
