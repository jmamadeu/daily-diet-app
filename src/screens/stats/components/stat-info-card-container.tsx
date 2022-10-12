import { StyleSheet, View } from "react-native"

import { StatInfoCard } from "~/components/stat-info-card/stat-info-card"
import { theme } from "~/theme"

type StatInfoCardContainerProps = typeof StatInfoCard.defaultProps & {
  backgroundColor: string
}

export const StatInfoCardContainer: React.FC<StatInfoCardContainerProps> = ({
  title = "",
  description = "",
  isLarge,
  backgroundColor,
}) => {
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <StatInfoCard title={title} description={description} isLarge={isLarge} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.gray[600],
    padding: 20,
    borderRadius: 8,
  },
})
