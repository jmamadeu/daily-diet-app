import { ArrowUpRight, Plus } from "phosphor-react-native"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

import { DietMealCard } from "~/components/diet-meal-card/diet-meal-card"
import { theme } from "~/theme"

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
            <Text style={theme.typography.bodyS}>Meals within the diet</Text>
          </View>
        </View>
      </View>

      <View style={styles.mealsContainer}>
        <View style={styles.labelContainer}>
          <Text style={theme.typography.bodyM}>Meals</Text>
        </View>

        <TouchableOpacity style={styles.button} activeOpacity={0.8}>
          <View style={styles.buttonIcon}>
            <Plus size={18} color={theme.colors.white} />
          </View>

          <Text style={styles.buttonText}>New Meal</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.dietsContainer}>
        <View>
          <Text style={theme.typography.titleS}>12.08.22</Text>
          <View style={styles.dietCards}>
            <View style={styles.dietCard}>
              <DietMealCard status="inDiet" />
            </View>
            <View style={styles.dietCard}>
              <DietMealCard status="outDiet" />
            </View>
            <View style={styles.dietCard}>
              <DietMealCard status="outDiet" />
            </View>
            <View style={styles.dietCard}>
              <DietMealCard status="outDiet" />
            </View>
          </View>
        </View>

        <View>
          <Text style={theme.typography.titleS}>12.08.22</Text>
          <View style={styles.dietCards}>
            <View style={styles.dietCard}>
              <DietMealCard status="inDiet" />
            </View>
            <View style={styles.dietCard}>
              <DietMealCard status="outDiet" />
            </View>
            <View style={styles.dietCard}>
              <DietMealCard status="outDiet" />
            </View>
            <View style={styles.dietCard}>
              <DietMealCard status="outDiet" />
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

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

  dietsContainer: {
    marginTop: 32,
  },
  dietCards: {
    marginTop: 8,
  },
  dietCard: {
    marginBottom: 6,
  },
})
