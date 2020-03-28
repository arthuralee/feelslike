export function getThresholdIndex(temp, tempThresholds) {
  let i = 0;
  while (temp > tempThresholds[i]) {
    i++;
  }
  return i;
}
