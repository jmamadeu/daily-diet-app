import { ArrowUpRight, Plus } from "phosphor-react-native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { theme } from "~/theme";

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cardStatsContainer}>
        <View style={styles.cardStats}>
          <View style={styles.statsIcon}>
            <ArrowUpRight size={24} color={theme.colors.green.dark} />
          </View>

          <View style={styles.statsContent}>
            <Text style={theme.typography.titleG}>90,89 %</Text>
            <Text style={theme.typography.bodyS}>
              das refeições dentro da dieta
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.mealsContainer}>
        <View style={styles.labelContainer}>
           <Text style={theme.typography.bodyM}>Refeições</Text>
        </View> 
 
        <TouchableOpacity style={styles.button} activeOpacity={0.8}>
          <View style={styles.buttonIcon}>
            <Plus size={18} color={theme.colors.white} />
          </View>

          <Text style={styles.buttonText}>Nova Refeição</Text>
        </TouchableOpacity>
      </View>

      <View>
        <View>
          <Text>
            12.08.22
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    paddingHorizontal: 24,
  },
  cardStatsContainer: {
    marginTop: 32,
  },
  cardStats: {
    backgroundColor: theme.colors.green.light,
    borderRadius: 8,
    paddingBottom: 20,
  },
  statsIcon: {
    alignSelf: "flex-end",
    marginRight: 8,
    marginTop: 8,
  },
  statsContent: {
    justifyContent: "center",
    alignItems: "center",
  },
  mealsContainer: {
    marginTop: 40,
  },
  labelContainer: {
    marginBottom: 8,
  },
  button: {
    backgroundColor: theme.colors.gray[200],
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: 50,
  },
  buttonText: {
    ...theme.typography.titleXS,
    color: theme.colors.white,
  },
  buttonIcon: {
    marginRight: 12,
  },
});
