import React, { useRef, useState } from "react";
import {
  Alert,
  Text,
  TouchableHighlight,
  TouchableHighlightProps,
  View,
} from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { styles } from "./styles";

// import { Container } from './styles';

const DeleteButton: React.FC<TouchableHighlightProps> = (props) => {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <TouchableHighlight
      style={styles.button}
      activeOpacity={0.7}
      underlayColor="#333333"
      onPressIn={() => setIsFocus(true)}
      onPressOut={() => setIsFocus(false)}
      {...props}
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
