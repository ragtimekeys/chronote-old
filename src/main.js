import React from "react";
import { Image } from "react-native";
import { TabNavigator } from "react-navigation";

import Home from "./home";
import homeIcon from "../icons/home.png";

import Quiz from "./quiz";
import quizIcon from "../icons/quiz.png";

import Schedule from "./schedule";
import scheduleIcon from "../icons/schedule.png";

export default TabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Image source={homeIcon} style={{ width: 30, height: 30, tintColor }} />
      )
    }
  },
  Schedule: {
    screen: Schedule,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={scheduleIcon}
          style={{ width: 30, height: 30, tintColor }}
        />
      )
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Image source={quizIcon} style={{ width: 30, height: 30, tintColor }} />
      )
    }
  }
});
