import { Pressable, StyleSheet, Text, View } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"

import { StatInfoCardContainer } from "./components/stat-info-card-container"

import { theme } from "~/theme"
import { useGetStatusBarHeight } from "~/hooks/use-get-status-bar-height"
import { StatInfoCard } from "~/components/stat-info-card/stat-info-card"

export const StatsScreen = () => {
  const StatusBarHeight = useGetStatusBarHeight()

  return (
    <View style={styles.container}>
      <View style={[styles.header, { paddingTop: StatusBarHeight }]}>
        <Pressable style={styles.backButton}>
          <MaterialIcons
            name="keyboard-backspace"
            size={24}
            color={theme.colors.green.dark}
          />
        </Pressable>

        <View style={[styles.contentContainer]}>
          <StatInfoCard
            title="90.89 %"
            description="Meals within the diet"
            isLarge
          />
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.bodyContent}>
          <Text style={theme.typography.titleXS}>General stats</Text>

          <View style={styles.cardsContainer}>
            <StatInfoCardContainer
              title="22.3"
              description="Best sequence of meals within the diet"
              backgroundColor={theme.colors.gray[600]}
            />

            <View style={styles.separator} />

            <StatInfoCardContainer
              title="50"
              description="Registered meals"
              backgroundColor={theme.colors.gray[600]}
            />

            <View style={styles.separator} />

            <View style={styles.lastStats}>
              <View style={styles.lastStatsCard}>
                <StatInfoCardContainer
                  title="22.3"
                  description="Meals without the diet"
                  backgroundColor={theme.colors.green.light}
                />
              </View>

              <View style={styles.separator} />

              <View style={styles.lastStatsCard}>
                <StatInfoCardContainer
                  title="22.3"
                  description="Meals within the diet"
                  backgroundColor={theme.colors.red.light}
                />
              </View>
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
  },
  header: {
    height: 200,
    backgroundColor: theme.colors.green.light,
    paddingHorizontal: 24,
  },
  backButton: {
    justifyContent: "flex-start",

    width: "100%",
  },
  contentContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  body: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: -30,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  bodyContent: {
    marginTop: 33,
    alignItems: "center",
    justifyContent: "center",
  },
  cardsContainer: {
    marginTop: 23,
  },
  lastStats: {
    flexDirection: "row",
  },
  lastStatsCard: {
    width: 160,
  },
  separator: {
    margin: 12,
  },
})