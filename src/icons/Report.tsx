import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const Report = ({ width = 25, height = 25 }: SvgIconProps) => (
  <Svg width={width} height={height} fill="none">
    <Path
      stroke="#FF001F"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M14 9.333v3.5m0 3.5v.012M4.667 24.5V9.333a3.5 3.5 0 0 1 3.5-3.5h11.666a3.5 3.5 0 0 1 3.5 3.5v7a3.5 3.5 0 0 1-3.5 3.5h-10.5L4.667 24.5Z"
    />
  </Svg>
);
export default Report;
