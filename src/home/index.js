import React, { Component } from "react";
import { Text, SafeAreaView } from "react-native";
import TimeRangeSelect from "../components/timeRangeSelect";

export default class Home extends Component {
  render() {
    return (
      <SafeAreaView>
        <Text>Home</Text>
        <TimeRangeSelect />
      </SafeAreaView>
    );
  }
}
