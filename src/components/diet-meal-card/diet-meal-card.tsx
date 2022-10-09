/* eslint-disable react-native/no-unused-styles */
import { StyleSheet, Text, View } from "react-native"

import { theme } from "~/theme"

type DietMealCardProps = {
  status: "inDiet" | "outDiet"
}

export const DietMealCard: React.FC<DietMealCardProps> = ({ status }) => {
  return (
    <View style={styles.dietCardContainer}>
      <View style={styles.content}>
        <Text
          style={[theme.typography.bodyXS, { color: theme.colors.gray[100] }]}
        >
          20:00
        </Text>
        <View style={styles.line} />

        <Text style={theme.typography.bodyM}>Whey Protein with milk</Text>
      </View>

      <View style={[styles.status, styles[status]]} />
    </View>
  )
}

const styles = StyleSheet.create({
  dietCardContainer: {
    flexDirection: "row",
    borderColor: theme.colors.gray[500],
    borderWidth: 1,
    borderRadius: 6,
    height: 49,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 8,
  },
  status: {
    width: 14,
    height: 14,
    borderRadius: 7,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  line: {
    width: 1,
    height: 14,
    backgroundColor: theme.colors.gray[400],
    marginHorizontal: 14,
  },
  outDiet: {
    backgroundColor: theme.colors.red.mid,
  },
  inDiet: {
    backgroundColor: theme.colors.green.mid,
  },
})
