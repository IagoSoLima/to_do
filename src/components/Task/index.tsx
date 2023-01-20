import React, { useMemo } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Checkbox from "../Checkbox";
import DeleteButton from "../DeleteButton";
import { styles } from "./styles";

type Props = {
  id: string;
  description: string;
  state: "pending" | "concluded";
};

const Task: React.FC<Props> = ({ description, state }) => {
  const styleContainer = useMemo(
    () =>
      state === "pending"
        ? styles.container
        : { ...styles.container, ...styles.containerConcluded },
    [state]
  );
  const styleText = useMemo(
    () =>
      state === "pending"
        ? styles.text
        : { ...styles.text, ...styles.textConcluded },
    [state]
  );
  return (
    <View style={styleContainer}>
      <Checkbox state={state} />
      <Text style={styleText}>{description}</Text>
      <DeleteButton />
    </View>
  );
};

export default Task;
