import React, { useRef, useState } from "react";
import { Alert, Text, TouchableHighlight, View } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { styles } from "./styles";

// import { Container } from './styles';

const DeleteButton: React.FC = () => {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <TouchableHighlight
      style={styles.button}
      activeOpacity={0.7}
      underlayColor="#333333"
      onPress={() => {}}
      onPressIn={() => setIsFocus(true)}
      onPressOut={() => setIsFocus(false)}
    >
      <Feather
        name="trash-2"
        size={14}
        color={isFocus ? "#E25858" : "#808080"}
      />
    </TouchableHighlight>
  );
};

export default DeleteButton;
