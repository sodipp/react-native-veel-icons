import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const Check = ({
  width = 24,
  height = 24,
  color = ['#0017FF'],
}: SvgIconProps) => (
  <Svg width={width} height={height} fill="none">
    <Path
      stroke={color[0]}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m4.5 12 5.25 5.25L20.25 6"
    />
  </Svg>
);
export default Check;
