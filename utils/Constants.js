import {Dimensions} from "react-native"

const { width, height } = Dimensions.get('window')

/** color */
export const COLOR_BLUE_SYS = '#157EFB'
export const COLOR_BLUE_SYS_02 = 'rgba(21, 126, 251, 0.2)'
export const COLOR_BLUE_SYS_04 = 'rgba(21, 126, 251, 0.4)'
export const COLOR_GRAY = '#D9DFE7'

/** type */
export type Point = {
  x: number,
  y: number
}

/** dimension */
export const DIMENSION_WIDTH = Math.min(width, height) - 40
export const DIMENSION_HEIGHT = Math.min(width, height) - 40
export const DIMENSION_PAD_WIDTH = 80
export const DIMENSION_PAD_HEIGHT = 80

/** reset duration */
export const CLEAR_TIME = 200
