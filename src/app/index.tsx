import { Steps, Welcome } from "@/modules";
import { Button } from "@/shared";

import { StyleSheet, View } from "react-native";

export default function RootLayout() {
  return (
    <View style={styles.container}>
      <Welcome />
      <Steps />
      <Button>
        <Button.Title>Começar</Button.Title>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    gap: 40,
  },
});
