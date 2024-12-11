import { StyleSheet } from "react-native";
import { colors, fontFamily } from "@/styles/theme";

export const styles = StyleSheet.create({
  container: {
    height: 56,
    maxHeight: 56,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.green.base,
    flexDirection: "row",
    gap: 14,
  },
  text: {
    fontSize: 16,
    color: colors.gray[100],
    fontFamily: fontFamily.semiBold,
  },
});
