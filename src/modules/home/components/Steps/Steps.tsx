import { ActivityIndicator, Image, Text, View } from "react-native";
import { styles } from "./steps.styles";
import { colors } from "@/styles/theme";
import { StepItem } from "./components/StepItem";
import { IconMapPin, IconQrcode, IconTicket } from "@tabler/icons-react-native";

export const Steps = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Veja como funciona:</Text>
      <StepItem
        icon={IconMapPin}
        title="Encontre estabelecimentos"
        description="Veja locais perto de você que são parceiros DealHunter"
      />
      <StepItem
        icon={IconQrcode}
        title="Ative o cupom com QR Code"
        description="Escaneie o código no estabelecimento para usar o benefício"
      />
      <StepItem
        icon={IconTicket}
        title="Usar cupons em estabelecimentos"
        description="Ative cupons onde estiver, em diferentes tipos de estabelecimento "
      />
    </View>
  );
};
