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
  incrementValue: number,
  limit?: number
) {
  const displayValue = displayTemp(value, unit);
  const limitDisplayValue = limit ? displayTemp(limit, unit) : null;
  let result;
  // Convert to F before incrementing/decrementing, and then
  // convert back so that the number changes in steps of 1
  result = displayValue + incrementValue;
  if (
    limitDisplayValue &&
    ((incrementValue > 0 && result >= limitDisplayValue) ||
      (incrementValue < 0 && result <= limitDisplayValue))
  ) {
    return value;
  }

  if (unit === "F") {
    result = convertFtoC(result);
  }

  return result;
}
