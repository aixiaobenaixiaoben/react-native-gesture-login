import {StyleSheet} from "react-native"
import {COLOR_BLUE_SYS, COLOR_BLUE_SYS_02, COLOR_BLUE_SYS_04, COLOR_GRAY} from "../Constants"


export default StyleSheet.create({
  circle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 64,
    height: 64,
    borderRadius: 32,
    borderWidth: 1,
    borderColor: COLOR_BLUE_SYS_04,
  },
  circleLined: {
    backgroundColor: COLOR_BLUE_SYS_02,
  },
  center: {
    width: 24,
    height: 24,
    backgroundColor: COLOR_GRAY,
    borderRadius: 12,
  },
  centerLined: {
    backgroundColor: COLOR_BLUE_SYS,
  }
})