import React from "react";
import { connect } from "react-redux";

import WeatherBlock from "./WeatherBlock";
import { getThresholdIndex } from "../util/temp";

const RecommendationData = connect(state => ({
  tempThresholds: state.tempThresholds,
  tempThresholdLabels: state.tempThresholdLabels,
}))(function({
  temperature,
  tempThresholds,
  tempThresholdLabels,
  renderWeatherBlock,
}) {
  const threshold = getThresholdIndex(temperature, tempThresholds);
  return renderWeatherBlock(tempThresholdLabels[threshold], threshold);
});

export function CurrentWeatherBlock({ temperature }) {
  return (
    <RecommendationData
      temperature={temperature}
      renderWeatherBlock={(label, colorScale) => (
        <WeatherBlock
          timeLabel="Right now"
          label={label}
          colorScale={colorScale}
          temperature={temperature}
        />
      )}
    />
  );
}

export default connect(state => ({
  tempThresholds: state.tempThresholds,
  tempThresholdLabels: state.tempThresholdLabels,
}))(CurrentWeatherBlock);
