import { ActivityIndicator, Text, View } from "react-native";
import { styles } from "./loading.styles";
import { colors } from "@/styles/theme";

export const Loading = () => {
  return (
    <ActivityIndicator
      size="large"
      color={colors.green.base}
      style={styles.container}
    />
  );
};
