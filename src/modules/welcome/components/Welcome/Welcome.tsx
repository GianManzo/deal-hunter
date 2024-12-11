import { ActivityIndicator, Image, Text, View } from "react-native";
import { styles } from "./welcome.styles";
import { colors } from "@/styles/theme";

export const Welcome = () => {
  return (
    <View>
      <Image source={require("@/assets/logo.png")} style={styles.logo} />

      <Text style={styles.title}>Boas vindas ao DealHunter</Text>
      <Text style={styles.subtitle}>
        Tenha cupons de vantagem para usar em seus estabelecimentos favoritos.
      </Text>
    </View>
  );
};
