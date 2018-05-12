import React from "react";
import { TouchableOpacity, Image } from "react-native";

import addIcon from "../../icons/add.png";

const Add = props => (
  <TouchableOpacity {...props}>
    <Image
      source={addIcon}
      style={{
        width: 20,
        height: 20,
        tintColor: "rgb(82, 136, 237)"
      }}
    />
  </TouchableOpacity>
);

export default Add;
