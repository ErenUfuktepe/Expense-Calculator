import React from "react";
import ChartBar from "./ChartBar";

import "./Chart.css";

const Chart = (props) => {
    const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
    const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((chartBar) => (
        <ChartBar
          key={chartBar.label}
          value={chartBar.value}
          maxValue={totalMaximum}
          label={chartBar.label}
        />
      ))}
    </div>
  );
};

export default Chart;
