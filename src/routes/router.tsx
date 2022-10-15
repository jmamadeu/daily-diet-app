import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { SvgLogo } from "~/assets/logo"
import { AvatarImage } from "~/components/avatar-image/avatar-image"
import { MealHeader } from "~/components/meal-header/meal-header"
import {
  FeedbackScreen,
  HomeScreen,
  SaveMealScreen,
  StatsScreen,
} from "~/screens"
import { MealDetailsScreen } from "~/screens/meal-details/meal-details"

export type MainStackNavigatorParamsList = {
  Home: undefined
  Stats: undefined
  SaveMeal: {
    headerTitle: string
  }
  Feedback: undefined
  MealDetails: {
    headerTitle: string
  }
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

        <MainStackNavigator.Group
          screenOptions={({ navigation, route }) => ({
            header() {
              return (
                <MealHeader
                  title={route.params?.headerTitle ?? ""}
                  onBackButtonPress={navigation.goBack}
                />
              )
            },
          })}
        >
          <MainStackNavigator.Screen
            component={SaveMealScreen}
            name="SaveMeal"
          />
          <MainStackNavigator.Screen
            component={MealDetailsScreen}
            name="MealDetails"
            options={{
              title: "Meal",
            }}
          />
        </MainStackNavigator.Group>

        <MainStackNavigator.Group
          screenOptions={{
            headerShown: false,
          }}
        >
          <MainStackNavigator.Screen
            component={FeedbackScreen}
            name="Feedback"
          />
        </MainStackNavigator.Group>
      </MainStackNavigator.Navigator>
    </NavigationContainer>
  )
}
