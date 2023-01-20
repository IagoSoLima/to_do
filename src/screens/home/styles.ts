import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A",
  },
  header: {
    width: "100%",
    alignItems: "center",
    backgroundColor: "#0D0D0D",
    paddingTop: 24,
    paddingBottom: 70,
  },
  form: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
    marginTop: -20,
  },
  list: {
    padding: 24,
  },
  headerList: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  textInfoCount: {
    fontSize: 14,
    fontFamily: "Inter_700Bold",
  },
  pendingCount: {
    color: "#4EA8DE",
  },
  concludedCount: {
    color: "#8284FA",
  },
  countTaskContainer: {
    width: 24,
    heigh: 19,
    backgroundColor: "#333333",
    marginLeft: 8,
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
  },
  countTask: {
    fontSize: 12,
    fontFamily: "Inter_700Bold",
    textAlign: "center",
    color: "#D9D9D9",
  },

  emptyList: {
    alignItems: "center",
    paddingTop: 48,
    borderTopWidth: 1,
    borderTopColor: "#333333",
  },

  emptyText: {
    fontSize: 14,
    fontFamily: "Inter_400Regular",
    color: "#808080",
  },

  bold: {
    fontFamily: "Inter_700Bold",
  },
});
