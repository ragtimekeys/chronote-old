import React from "react";
import { TouchableHighlight } from "react-native";
import styled from "styled-components";

import disclosureIcon from "../../icons/disclosure.png";

const Item = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  background: white;
  padding: 16px;
  padding-right: 8px;
  border-bottom-width: 0.5px;
  border-bottom-color: rgb(193, 191, 194);
`;

const ItemTitle = styled.Text`
  font-size: 18px;
  flex-grow: 1;
`;

const DisclosureIndicator = styled.Image`
  width: 14px;
  height: 14px;
  tint-color: rgb(193, 191, 194);
`;

const ListItem = ({
  hasDisclosureIndicator = true,
  onPress = () => {},
  children
}) => (
  <TouchableHighlight onPress={onPress}>
    <Item>
      <ItemTitle>{children}</ItemTitle>
      {hasDisclosureIndicator && (
        <DisclosureIndicator source={disclosureIcon} />
      )}
    </Item>
  </TouchableHighlight>
);

export default ListItem;
