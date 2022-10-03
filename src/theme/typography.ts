import { StyleSheet } from "react-native";

import { colors } from "./colors";
import { Fonts } from "./fonts";

export const typography = StyleSheet.create({
  titleG: {
    fontSize: 32,
    fontFamily: Fonts.bold,
    color: colors.gray[100],
    lineHeight: 42,
  },
  titleM: {
    fontSize: 24,
    fontFamily: Fonts.bold,
    color: colors.gray[100],
    lineHeight: 31,
  },
  titleS: {
    fontSize: 18,
    fontFamily: Fonts.bold,
    color: colors.gray[100],
    lineHeight: 23,
  },
  titleXS: {
    fontSize: 14,
    fontFamily: Fonts.bold,
    color: colors.gray[100],
    lineHeight: 18,
  },
  bodyM: {
    fontSize: 16,
    fontFamily: Fonts.regular,
    color: colors.gray[200],
    lineHeight: 21,
  },
  bodyS: {
    fontSize: 14,
    fontFamily: Fonts.regular,
    color: colors.gray[200],
    lineHeight: 18,
  },
});
