import React, { useMemo, useState } from "react";
import { TouchableOpacity, View } from "react-native";

import { Feather } from "@expo/vector-icons";

import { styles } from "./styles";

type Props = {
  state: "pending" | "concluded";
};

const Checkbox: React.FC<Props> = ({ state }) => {
  const [isFocus, setIsFocus] = useState(false);

  const isConcluded = useMemo(() => state === "concluded", [state]);
  const styleContainer = useMemo(() => {
    const style = styles.container;

    if (isConcluded && isFocus)
      return { ...style, ...styles.containerConcludedActive };

    if (isConcluded) return { ...style, ...styles.containerConcluded };

    return style;
  }, [state, isFocus]);
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.7}
      onPress={() => {}}
      onPressIn={() => setIsFocus(true)}
      onPressOut={() => setIsFocus(false)}
    >
      <View style={styleContainer}>
        {isConcluded && <Feather name="check" color="#F2F2F2" />}
      </View>
    </TouchableOpacity>
  );
};

export default Checkbox;
