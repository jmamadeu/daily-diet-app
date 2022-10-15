import { StyleSheet, Text, TouchableOpacity } from "react-native"

import { theme } from "~/theme"

type ButtonProps = {
  onPress: () => void
  children: string
}

export const Button: React.FC<ButtonProps> = ({ onPress, children }) => {
  return (
    <TouchableOpacity
      style={styles.saveButton}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <Text style={styles.saveButtonText}>{children}</Text>
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
})
