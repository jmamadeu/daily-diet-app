import { Pressable, StyleSheet, Text, View } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"

import { theme } from "~/theme"
import { useGetStatusBarHeight } from "~/hooks/use-get-status-bar-height"

type MealHeaderProps = {
  onBackButtonPress: () => void
  title: string
}

export const MealHeader: React.FC<MealHeaderProps> = ({
  onBackButtonPress,
  title,
}) => {
  const StatusBarHeight = useGetStatusBarHeight()

  return (
    <View style={[styles.container, { paddingTop: StatusBarHeight + 20 }]}>
      <View style={styles.content}>
        <Pressable onPress={onBackButtonPress}>
          <MaterialIcons
            name="keyboard-backspace"
            size={24}
            color={theme.colors.black}
          />
        </Pressable>

        <Text style={theme.typography.titleS}>{title}</Text>

        <View />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.gray[500],
    height: 132,
    paddingHorizontal: 24,
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
})
