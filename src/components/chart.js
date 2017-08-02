import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

const average = (arr) => {
  const avg = arr.reduce((a,b) => a + b) / arr.length;
  return avg.toFixed(1);
};

const Chart = (props) => {
  const { data, color, unit } = props;
  return (
    <div>
      <Sparklines height={120} width={180} data={data}>
        <SparklinesLine color={color || 'red'} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>{ `${average(data)} ${unit}` }</div>
    </div>
  );
};

export default Chart;