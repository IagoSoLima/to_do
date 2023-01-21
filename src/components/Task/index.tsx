import React, { useMemo } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Checkbox from "../Checkbox";
import DeleteButton from "../DeleteButton";
import { styles } from "./styles";

interface OnUpdateProps {
  id: string;
  state: "pending" | "concluded";
}

type Props = {
  id: string;
  description: string;
  state: "pending" | "concluded";
  onRemove: (id: string) => void;
  onUpdate: (args: OnUpdateProps) => void;
};

const Task: React.FC<Props> = ({
  id,
  description,
  state,
  onRemove,
  onUpdate,
}) => {
  const updateByState: { [key: string]: "concluded" | "pending" } = {
    pending: "concluded",
    concluded: "pending",
  };

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
      <Checkbox
        state={state}
        onPress={() => onUpdate({ id, state: updateByState[state] })}
      />
      <Text style={styleText}>{description}</Text>
      <DeleteButton onPress={() => onRemove(id)} />
    </View>
  );
};

export default Task;
