import { TempUnit } from "../util/units";

export const SET_TEMP_UNIT = "SET_TEMP_UNIT";

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
