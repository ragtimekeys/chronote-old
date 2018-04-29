import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components";

import addIcon from "../../icons/add.png";

const AddIcon = styled.Image`
  width: 20px;
  height: 20px;
  tint-color: rgb(82, 136, 237);
`;

const Add = props => (
  <TouchableOpacity {...props}>
    <AddIcon source={addIcon} />
  </TouchableOpacity>
);

export default Add;
