export type TempUnit = "C" | "F";

export function getLabelFromUnit(unit: TempUnit) {
  return unit === "C" ? "Celsius" : "Fahrenheit";
}

export function displayTemp(value: number, tempUnit: TempUnit) {
  if (tempUnit === "F") {
    return Math.round(convertCtOf(value));
  } else {
    return Math.round(value);
  }
}

export function convertCtOf(value: number) {
  return value * (9 / 5) + 32;
}

export function convertFtoC(value: number) {
  return (value - 32) * (5 / 9);
}
