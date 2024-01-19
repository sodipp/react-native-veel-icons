import * as React from 'react';
import Svg, { Rect, Path } from 'react-native-svg';

const CheckFill = ({ width = 24, height = 24 }: SvgIconProps) => (
  <Svg fill="none" width={width} height={height}>
    <Rect width={23} height={23} x={0.5} y={0.5} fill="#0017FF" rx={1.5} />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m6 12.3 4 4.2 8-9"
    />
    <Rect width={23} height={23} x={0.5} y={0.5} stroke="#0017FF" rx={1.5} />
  </Svg>
);

export default CheckFill;
