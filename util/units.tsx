export type TempUnit = "C" | "F";

export function getLabelFromUnit(unit: TempUnit) {
  return unit === "C" ? "Celsius" : "Fahrenheit";
}

export function displayTemp(value: number, tempUnit: TempUnit) {
  if (tempUnit === "F") {
    return Math.round(value * (9 / 5) + 32);
  } else {
    return Math.round(value);
  }
}
