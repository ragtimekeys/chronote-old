import React, { Component } from "react";
import { Text, View } from "react-native";
import { StackNavigator } from "react-navigation";

class Quiz extends Component {
  render() {
    return (
      <View>
        <Text>Quiz</Text>
      </View>
    );
  }
}

export default StackNavigator({
  start: {
    screen: Quiz,
    navigationOptions: () => ({
      title: "Quiz"
    })
  }
});
