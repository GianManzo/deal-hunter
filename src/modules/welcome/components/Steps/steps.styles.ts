import { StyleSheet } from "react-native";
import { colors, fontFamily, size } from "@/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 24,
  },
  title: {
    fontSize: size.md,
    fontFamily: fontFamily.regular,
    color: colors.gray[500],
  },
});
