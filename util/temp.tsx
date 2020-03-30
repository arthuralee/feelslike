import { TempUnit, displayTemp, convertFtoC } from "./units";

export function getThresholdIndex(temp, tempThresholds) {
  let i = 0;
  while (temp > tempThresholds[i]) {
    i++;
  }
  return i;
}

export function updateTemp(
  value: number,
  unit: TempUnit,
  incrementValue: number
) {
  const displayValue = displayTemp(value, unit);
  // Convert to F before incrementing/decrementing, and then
  // convert back so that the number changes in steps of 1
  return unit === "C"
    ? displayValue + incrementValue
    : convertFtoC(displayValue + incrementValue);
}
