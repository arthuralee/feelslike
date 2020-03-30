import { TempUnit } from "../util/units";

const SET_TEMP_UNIT = "SET_TEMP_UNIT";
const SET_TEMP_THRESHOLD_LABEL = "SET_TEMP_THRESHOLD_LABEL";

export type AppState = {
  tempUnit: TempUnit;
  tempThresholds: Array<number>;
  tempThresholdLabels: Array<string>;
};

const initialState: AppState = {
  tempUnit: "F",
  tempThresholds: [8, 12, 15, 20],
  tempThresholdLabels: [
    "Winter jacket",
    "Coat",
    "Sweater",
    "Light jacket",
    "T-shirt",
  ],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_TEMP_UNIT:
      return { ...state, tempUnit: action.unit };
    case SET_TEMP_THRESHOLD_LABEL:
      const newTempThresholdLabels = state.tempThresholdLabels.slice();
      newTempThresholdLabels[action.index] = action.label;
      return { ...state, tempThresholdLabels: newTempThresholdLabels };
    default:
      return state;
  }
}

export function setTempUnit(unit: TempUnit) {
  return {
    type: SET_TEMP_UNIT,
    unit,
  };
}

export function setTempThresholdLabel(label: string, index: number) {
  return {
    type: SET_TEMP_THRESHOLD_LABEL,
    label,
    index,
  };
}
