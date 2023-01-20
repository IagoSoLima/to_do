import React from "react";
import { TouchableOpacity } from "react-native";
import Feather from "@expo/vector-icons/Feather";

import { styles } from "./styles";

export function Button() {
  return (
    <TouchableOpacity style={styles.button} activeOpacity={0.9}>
      <Feather name="plus-circle" size={24} color="white" />
    </TouchableOpacity>
  );
}
