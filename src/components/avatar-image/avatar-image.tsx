import { Image, StyleSheet, View } from "react-native";

export const AvatarImage = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://avatars.githubusercontent.com/u/59426856?v=4",
        }}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  image: {
    height: 40,
    width: 40,
    borderRadius: 20,
    borderColor: "#333638",
    borderWidth: 2,
  },
});
