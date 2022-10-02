import { ArrowUpRight } from "phosphor-react-native";
import { StyleSheet, Text, View } from "react-native";

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cardStats}>
        <View style={styles.statsIcon}>
          <ArrowUpRight size={24} color="#000" />
        </View>

        <View>
          <Text>90,89 %</Text>
          <Text>das refeições dentro da dieta</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  cardStats: {},
  statsIcon: {
    alignSelf: "flex-end",
  },
});
