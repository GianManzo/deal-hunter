import { StyleSheet } from "react-native";
import { colors, fontFamily, size } from "@/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.gray[100],
  },
  logo: {
    width: 48,
    height: 48,
    marginTop: 24,
    marginBottom: 28,
  },
  title: {
    fontSize: size.xl,
    fontFamily: fontFamily.bold,
    color: colors.gray[600],
  },
  subtitle: {
    fontSize: size.md,
    fontFamily: fontFamily.regular,
    color: colors.gray[500],
    marginTop: 12,
  },
});
