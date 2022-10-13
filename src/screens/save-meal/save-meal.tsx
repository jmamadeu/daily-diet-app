import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

import { theme } from "~/theme"

export const SaveMealScreen = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.content}>
        <View>
          <View>
            <Text style={styles.label}>Name</Text>
            <View style={styles.inputFormGap} />
            <TextInput style={styles.input} />
          </View>

          <View style={styles.formGap} />

          <View>
            <Text style={styles.label}>Description</Text>
            <View style={styles.inputFormGap} />
            <TextInput multiline style={[styles.input, styles.inputArea]} />
          </View>

          <View style={styles.formGap} />

          <View style={styles.dateTimeContainer}>
            <View style={styles.dateTimeField}>
              <Text style={styles.label}>Date</Text>
              <View style={styles.inputFormGap} />
              <TextInput style={styles.input} />
            </View>

            <View style={styles.dateTimeField}>
              <Text style={styles.label}>Hour</Text>
              <View style={styles.inputFormGap} />
              <TextInput style={styles.input} />
            </View>
          </View>

          <View style={styles.formGap} />

          <View>
            <Text style={styles.label}>Is within the diet?</Text>
            <View style={styles.inputFormGap} />

            <View style={styles.dateTimeContainer}>
              <TouchableOpacity style={styles.button}>
                <View
                  style={[
                    styles.bullet,
                    { backgroundColor: theme.colors.green.dark },
                  ]}
                />
                <Text style={styles.buttonTitle}>Yes</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button}>
                <View
                  style={[
                    styles.bullet,
                    { backgroundColor: theme.colors.red.dark },
                  ]}
                />
                <Text style={styles.buttonTitle}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.saveButton} activeOpacity={0.8}>
          <Text style={styles.saveButtonText}>Save meal</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.gray[700],
    flex: 1,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    marginTop: -20,
  },
  content: {
    flex: 1,
    marginHorizontal: 24,
    marginBottom: 20,
    justifyContent: "space-between",
  },
  label: {
    ...theme.typography.titleXS,
    color: theme.colors.gray[200],
  },
  inputFormGap: {
    height: 4,
  },
  input: {
    height: 48,
    borderColor: theme.colors.gray[500],
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 8,
  },
  inputArea: {
    height: 120,
  },
  formGap: {
    height: 30,
  },
  dateTimeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dateTimeField: {
    minWidth: "48%",
  },
  button: {
    backgroundColor: theme.colors.gray[600],
    height: 50,
    minWidth: "48%",
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonTitle: {
    ...theme.typography.titleXS,
    marginLeft: 6,
  },
  bullet: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  saveButton: {
    backgroundColor: theme.colors.gray[200],
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: 50,
  },
  saveButtonText: {
    ...theme.typography.titleXS,
    color: "#fff",
  },
})
