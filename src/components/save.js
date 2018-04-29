import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components";

const SaveButton = styled.Text`
  color: rgb(82, 136, 237);
  font-size: 17;
`;

const Save = props => (
  <TouchableOpacity {...props}>
    <SaveButton>Save</SaveButton>
  </TouchableOpacity>
);

export default Save;
