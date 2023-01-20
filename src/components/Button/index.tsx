import React from "react";
import { TouchableHighlight } from "react-native";
import Feather from "@expo/vector-icons/Feather";

import { styles } from "./styles";
import { useState } from "react";

export function Button() {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <TouchableHighlight
      style={styles.button}
      activeOpacity={1}
      underlayColor="#4EA8DE"
      onPress={() => {}}
      onPressIn={() => setIsFocus(true)}
      onPressOut={() => setIsFocus(false)}
    >
      <Feather name="plus-circle" size={24} color="white" />
    </TouchableHighlight>
  );
}
