/* eslint-disable import/no-default-export */
import {
  Nunito_400Regular as Nunito400Regular,
  Nunito_700Bold as Nunito700Bold,
} from "@expo-google-fonts/nunito"
import { useFonts } from "expo-font"
import * as SplashScreen from "expo-splash-screen"
import { StatusBar } from "expo-status-bar"
import { useCallback } from "react"
import { StyleSheet, View } from "react-native"
import { SafeAreaProvider } from "react-native-safe-area-context"

SplashScreen.preventAutoHideAsync()

import { Router } from "~/routes/router"

export default function App() {
  const [fontsLoaded] = useFonts({
    Nunito700Bold,
    Nunito400Regular,
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null
  }

  return (
    <SafeAreaProvider>
      <View style={styles.container} onLayout={onLayoutRootView}>
        <Router />
        <StatusBar style="auto" />
      </View>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
