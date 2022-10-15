import { StyleSheet, View } from "react-native"

import { theme } from "~/theme"

type BulletBoxProps = {
  color: string
}

export const BulletBox: React.FC<BulletBoxProps> = ({ color }) => {
  return <View style={[styles.bullet, { backgroundColor: color }]} />
}

const styles = StyleSheet.create({
  bullet: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
})
