import React, { useMemo, useState } from "react";
import { TextInput, View } from "react-native";

import { styles } from "./styles";

export function Input() {
  const [focus, setFocus] = useState(false);
  const styleInput = useMemo(
    () => (!focus ? styles.input : { ...styles.input, ...styles.inputFocused }),
    [focus]
  );

  return (
    <TextInput
      style={styleInput}
      placeholder={"Adicione uma nova tarefa"}
      placeholderTextColor={"#808080"}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
    />
  );
}
