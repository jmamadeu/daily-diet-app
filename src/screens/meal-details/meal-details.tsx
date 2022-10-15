import { StyleSheet, Text, View } from "react-native"
import {
  AntDesign,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons"

import { BulletBox } from "~/components/bullet-box/bullet-box"
import { Button } from "~/components/button/button"
import { theme } from "~/theme"

export const MealDetailsScreen = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.mealName}>Sandwich</Text>
        <Text style={theme.typography.bodyM}>
          Integral bread sandwich with atum and tomato salad{" "}
        </Text>

        <View style={styles.dateContainer}>
          <Text style={[theme.typography.titleXS, { marginBottom: 8 }]}>
            Date and Time
          </Text>
          <Text style={theme.typography.bodyM}>12/08/2022 às 16:00</Text>
        </View>

        <View style={styles.dietStatusContainer}>
          <View style={styles.dietStatus}>
            <BulletBox color={theme.colors.green.dark} />
            <Text style={styles.dietStatusLabel}>inside the diet</Text>
          </View>
        </View>
      </View>
      <View>
        <Button left={<AntDesign name="edit" size={18} color="white" />}>
          Edit meal
        </Button>

        <View style={styles.divider} />

        <Button
          outlined
          left={<MaterialIcons name="delete-outline" size={18} color="black" />}
        >
          Delete meal
        </Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.gray[700],
    flex: 1,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    marginTop: -20,
    paddingHorizontal: 24,
    paddingTop: 40,
    paddingBottom: 40,
    justifyContent: "space-between",
  },
  mealName: {
    ...theme.typography.titleM,
    marginBottom: 8,
  },
  dateContainer: {
    marginTop: 24,
  },
  dietStatusContainer: {
    marginTop: 24,
    flexDirection: "row",
  },
  dietStatus: {
    backgroundColor: theme.colors.gray[600],
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",

    padding: 8,
    borderRadius: 100,
  },
  dietStatusLabel: {
    ...theme.typography.bodyS,
    marginLeft: 8,
  },
  divider: {
    height: 9,
  },
})
