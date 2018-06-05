import React, { Component } from "react";
import { SafeAreaView, Text } from "react-native";
import TimeRangeSelect from "../components/timeRange/index.js";

export default class Home extends Component {
  state = {
    timeRangeSelectStartTime: 15 * 60,
    timeRangeSelectEndTime: 17 * 60
  };

  render() {
    return (
      <SafeAreaView style={{ display: "flex", flexGrow: 1 }}>
        <Text>Home</Text>
        <TimeRangeSelect
          isEditable={true}
          startTime={this.state.timeRangeSelectStartTime}
          endTime={this.state.timeRangeSelectEndTime}
          onChange={(timeRangeSelectStartTime, timeRangeSelectEndTime) => {
            this.setState({
              timeRangeSelectStartTime,
              timeRangeSelectEndTime
            });
          }}
        />
      </SafeAreaView>
    );
  }
}
