import * as React from 'react';
import Svg, { Circle, Rect } from 'react-native-svg';

const Minus = ({ height = 25, width = 16 }: SvgIconProps) => (
  <Svg fill="none" width={width} height={height}>
    <Circle cx={8} cy={8} r={7.5} stroke="#BBB" />
    <Rect width={10} height={1} x={3} y={7} fill="#BBB" rx={0.5} />
  </Svg>
);

export default Minus;
