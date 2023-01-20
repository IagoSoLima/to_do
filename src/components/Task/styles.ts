import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 12,
    backgroundColor: "#333333",
    borderRadius: 8,
    marginBottom: 16,
  },

  containerConcluded: {
    backgroundColor: "#262626",
  },

  text: {
    flex: 1,
    fontSize: 14,
    fontFamily: "Inter_400Regular",
    color: "#F2F2F2",
    marginHorizontal: 8,
  },

  textConcluded: {
    color: "#808080",
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
  },
});
