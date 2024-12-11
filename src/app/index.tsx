import { Steps, Welcome } from "@/modules";
import { StyleSheet, Text, View } from "react-native";

export default function RootLayout() {
  return (
    <View style={styles.container}>
      <Welcome />
      <Steps />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    gap: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
