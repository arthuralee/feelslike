import { TempUnit } from "../util/units";
import { updateTemp } from "../util/temp";

const SET_TEMP_UNIT = "SET_TEMP_UNIT";
const SET_TEMP_THRESHOLD_LABEL = "SET_TEMP_THRESHOLD_LABEL";
const INCREMENT_TEMP_THRESHOLD = "INCREMENT_TEMP_THRESHOLD";
const DECREMENT_TEMP_THRESHOLD = "DECREMENT_TEMP_THRESHOLD";

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
    case INCREMENT_TEMP_THRESHOLD:
    case DECREMENT_TEMP_THRESHOLD:
      const newTempThresholds = state.tempThresholds.slice();
      newTempThresholds[action.index] = updateTemp(
        newTempThresholds[action.index],
        state.tempUnit,
        action.type === INCREMENT_TEMP_THRESHOLD ? 1 : -1
      );
      return { ...state, tempThresholds: newTempThresholds };
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

export function incrementTempThreshold(index: number) {
  return {
    type: INCREMENT_TEMP_THRESHOLD,
    index,
  };
}

export function decrementTempThreshold(index: number) {
  return {
    type: DECREMENT_TEMP_THRESHOLD,
    index,
  };
}
