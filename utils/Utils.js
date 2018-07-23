import type {Point} from "./Constants"

/** distance of two point */
export const distanceOfPoint = (start, end): number => {
  return Math.hypot(end.x - start.x, end.y - start.y)
}

/** angle of two point */
export const angleOfPoint = (start, end): number => {
  let numerator = end.y - start.y
  let denominator = end.x - start.x === 0 ? Number.MIN_VALUE : end.x - start.x
  return Math.atan(numerator / denominator) * 180 / Math.PI
}

/** vector of two point */
export const vectorOfPoint = (start, end): Point => {
  let len = distanceOfPoint(start, end)
  let x = (end.x - start.x - len) * 0.5
  let y = (end.y - start.y) * 0.5
  return {x: x, y: y}
}
