import React from "react";
import { TouchableHighlight, TouchableHighlightProps } from "react-native";
import Feather from "@expo/vector-icons/Feather";

import { styles } from "./styles";
import { useState } from "react";

const Button: React.FC<TouchableHighlightProps> = (props) => {
  return (
    <TouchableHighlight
      style={styles.button}
      activeOpacity={1}
      underlayColor="#4EA8DE"
      {...props}
    >
      <Feather name="plus-circle" size={24} color="white" />
    </TouchableHighlight>
  );
};

export default Button;
