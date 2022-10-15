import { useNavigation } from "@react-navigation/native"
import type { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { ArrowUpRight, Plus } from "phosphor-react-native"
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native"

import { DietMealCard } from "~/components/diet-meal-card/diet-meal-card"
import { StatInfoCard } from "~/components/stat-info-card/stat-info-card"
import type { MainStackNavigatorParamsList } from "~/routes/router"
import { theme } from "~/theme"

type HomeScreenNavigationProp = NativeStackNavigationProp<
  MainStackNavigatorParamsList,
  "Home"
>

export const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>()

  const handleNavigateToStats = () => {
    navigation.push("Stats")
  }

  const handleNavigateToSaveScreen = () => {
    navigation.push("SaveMeal", {
      headerTitle: "New Meal",
    })
  }

  const handleNavigateToMealDetails = () => {
    navigation.push("MealDetails", {
      headerTitle: "Meal",
    })
  }

  return (
    <View style={styles.container}>
      <View style={styles.cardStatsContainer}>
        <Pressable style={styles.cardStats} onPress={handleNavigateToStats}>
          <View style={styles.statsIcon}>
            <ArrowUpRight size={24} color={theme.colors.green.dark} />
          </View>

          <StatInfoCard
            title="90%"
            description="Meals within the diet"
            isLarge
          />
        </Pressable>
      </View>

      <View style={styles.mealsContainer}>
        <View style={styles.labelContainer}>
          <Text style={theme.typography.bodyM}>Meals</Text>
        </View>

        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.8}
          onPress={handleNavigateToSaveScreen}
        >
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
              <DietMealCard
                onPress={handleNavigateToMealDetails}
                status="inDiet"
              />
            </View>
          </View>
        </View>

        {/* <View>
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
        </View> */}
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
