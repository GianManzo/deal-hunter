import { ActivityIndicator, Image, Text, View } from "react-native";
import { IconProps } from "@tabler/icons-react-native";

import { colors } from "@/styles/theme";
import { styles } from "./stepItem.styles";

interface StepItemProps {
  title: string;
  description: string;
  icon: React.ComponentType<IconProps>;
}

export const StepItem = ({ title, description, icon: Icon }: StepItemProps) => {
  return (
    <View style={styles.container}>
      {Icon && <Icon size={32} color={colors.red.base} />}

      <View style={styles.details}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};
