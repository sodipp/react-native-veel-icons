import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const EyeHalf = ({ width = 28, height = 28 }: SvgIconProps) => (
  <Svg width={width} height={height} fill="none">
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.667 9.333c3.382 4.89 7.16 7.334 11.333 7.334s7.95-2.444 11.333-7.334M6 13.231 3.333 16M22 13.23 24.667 16m-8 .667L18 20m-6.667-3.333L10 20"
    />
  </Svg>
);
export default EyeHalf;
