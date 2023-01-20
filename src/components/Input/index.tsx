import React, { useRef } from "react";
import { TextInput, View } from "react-native";

import { styles } from "./styles";

export function Input() {
  const inputRef = useRef<TextInput>(null);
  return (
    <TextInput
      ref={inputRef}
      style={styles.input}
      placeholder={"Adicione uma nova tarefa"}
      placeholderTextColor={"#808080"}
    />
  );
}
