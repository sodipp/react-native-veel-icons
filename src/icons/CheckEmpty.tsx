import * as React from 'react';
import Svg, { Rect } from 'react-native-svg';

const CheckEmpty = ({ width = 24, height = 24 }: SvgIconProps) => (
  <Svg fill="none" {...{ width, height }}>
    <Rect width={23} height={23} x={0.5} y={0.5} rx={1.5} />
    <Rect width={23} height={23} x={0.5} y={0.5} stroke="#0017FF" rx={1.5} />
  </Svg>
);
export default CheckEmpty;
