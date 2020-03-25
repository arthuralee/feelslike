export type TempUnit = "C" | "F";

export function getLabelFromUnit(unit: TempUnit) {
  return unit === "C" ? "Celsius" : "Fahrenheit";
}

export function convert(value: number, to: TempUnit) {
  if (to === "F") {
    return value * (9 / 5) + 32;
  } else {
    return ((value - 32) * 5) / 9;
  }
}
