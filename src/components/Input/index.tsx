import React, { useMemo, useState } from "react";
import { TextInput, TextInputProps, View } from "react-native";

import { styles } from "./styles";

const Input: React.FC<TextInputProps> = (props) => {
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
      {...props}
    />
  );
};

export default Input;
