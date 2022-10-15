import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

import { theme } from "~/theme"

type ButtonProps = {
  onPress?: () => void
  children: string
  left?: React.ReactNode
  outlined?: boolean
}

export const Button: React.FC<ButtonProps> = ({
  onPress,
  children,
  left,
  outlined,
}) => {
  return (
    <TouchableOpacity
      style={[styles.saveButton, outlined && styles.outlined]}
      activeOpacity={0.8}
      onPress={onPress}
    >
      {left && <View style={styles.left}>{left}</View>}
      <Text style={[styles.saveButtonText, outlined && styles.outlinedText]}>
        {children}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  saveButton: {
    backgroundColor: theme.colors.gray[200],
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: 50,
    paddingHorizontal: 24,
  },
  saveButtonText: {
    ...theme.typography.titleXS,
    color: "#fff",
  },
  left: {
    marginRight: 12,
  },
  outlined: {
    borderWidth: 1,
    borderColor: theme.colors.gray[100],
    backgroundColor: "transparent",
  },
  outlinedText: {
    color: theme.colors.gray[100],
  },
})
