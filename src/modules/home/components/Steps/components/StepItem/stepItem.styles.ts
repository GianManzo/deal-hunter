import { StyleSheet } from "react-native";
import { colors, fontFamily, size } from "@/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    gap: 16,
  },
  details: {
    flex: 1,
  },
  title: {
    fontSize: size.md,
    fontFamily: fontFamily.semiBold,
    color: colors.gray[600],
  },
  description: {
    fontSize: size.sm,
    fontFamily: fontFamily.regular,
    color: colors.gray[500],
    marginTop: 6,
  },
});
