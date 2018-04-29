import React from "react";
import { StackNavigator } from "react-navigation";
import styled from "styled-components";

import Add from "../components/add";
import Routines from "./routines";
import AddRoutine from "./addRoutine";
import Save from "../components/save";

const AddWithMargin = styled(Add)`
  margin-right: 20px;
`;

const SaveWithMargin = styled(Save)`
  margin-right: 20px;
`;

export default StackNavigator({
  Routines: {
    screen: Routines,
    navigationOptions: ({ navigation }) => ({
      title: "Schedule",
      headerRight: (
        <AddWithMargin onPress={() => navigation.push("AddRoutine")} />
      )
    })
  },
  AddRoutine: {
    screen: AddRoutine,
    navigationOptions: () => ({
      title: "Add Routine",
      //don't forget to add the onPress
      headerRight: <SaveWithMargin />
    })
  }
});
