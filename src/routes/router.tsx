import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { SvgLogo } from "~/assets/logo"
import { AvatarImage } from "~/components/avatar-image/avatar-image"
import { HomeScreen, StatsScreen } from "~/screens"

export type MainStackNavigatorParamsList = {
  Home: undefined
  Stats: undefined
}

const MainStackNavigator =
  createNativeStackNavigator<MainStackNavigatorParamsList>()

export const Router = () => {
  return (
    <NavigationContainer>
      <MainStackNavigator.Navigator
        screenOptions={{
          headerShadowVisible: false,
        }}
      >
        <MainStackNavigator.Screen
          component={HomeScreen}
          name="Home"
          options={{
            headerTitle: "",
            headerLeft: () => <SvgLogo />,
            headerRight: () => <AvatarImage />,
          }}
        />

        <MainStackNavigator.Screen
          component={StatsScreen}
          name="Stats"
          options={{ headerShown: false }}
        />
      </MainStackNavigator.Navigator>
    </NavigationContainer>
  )
}
