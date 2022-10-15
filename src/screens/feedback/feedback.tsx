import { useNavigation } from "@react-navigation/native"
import type { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

import { Button } from "~/components/button/button"
import type { MainStackNavigatorParamsList } from "~/routes/router"
import { theme } from "~/theme"

type FeedbackScreenNavigationProp = NativeStackNavigationProp<
  MainStackNavigatorParamsList,
  "Feedback"
>

export const FeedbackScreen = () => {
  const { navigate } = useNavigation<FeedbackScreenNavigationProp>()

  const handleNavigateToHomeScreen = () => {
    navigate("Home")
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.mainTitle}>Keep it up!</Text>
      <Text style={styles.description}>You're within the diet. Well done!</Text>

      <View style={styles.divider} />

      <Image
        source={require("../../assets/illustrations/positive-feedback.png")}
      />

      <View style={styles.divider} />

      <View>
        <Button onPress={handleNavigateToHomeScreen}>Go to home page</Button>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.gray[700],
    justifyContent: "center",
    alignItems: "center",
  },
  mainTitle: {
    ...theme.typography.titleM,
    color: theme.colors.green.dark,
  },
  description: {
    ...theme.typography.bodyM,
    color: theme.colors.gray[100],
    marginTop: 8,
  },
  divider: {
    height: 32,
  },
})
