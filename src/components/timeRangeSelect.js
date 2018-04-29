import React, { Component, PureComponent } from "react";
import { Text, View } from "react-native";
import { Svg } from "expo";

/*
  //Retrieving props from within the theme requires an arrow function
  //If being called from within the styled component, you would call getTheme like getTheme("black")
  const getTheme = key => props => props.theme[key];
*/

export default class TimeRangeSelect extends Component {
  state = {};

  render() {
    return (
      <View>
        <Text>cj wants to see it</Text>
        <Svg height={100} width={100}>
          <Circle cx={50} cy={50} r={45} strokeWidth={2.5} fill="#f1c40f" />
        </Svg>
      </View>
    );
  }
}
