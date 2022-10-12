import { StyleSheet, View, Text } from "react-native"

import { theme } from "~/theme"

export type StatInfoCardProps = {
  isLarge?: boolean
  title: string
  description: string
}

export const StatInfoCard: React.FC<StatInfoCardProps> = ({
  title,
  description,
  isLarge,
}) => {
  return (
    <View style={styles.statsContent}>
      <Text style={isLarge ? theme.typography.titleG : theme.typography.titleM}>
        {title}
      </Text>
      <Text numberOfLines={2} style={[theme.typography.bodyS, styles.text]}>
        {description}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  statsContent: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    textAlign: "center",
  },
})
