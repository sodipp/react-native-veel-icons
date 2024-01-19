import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const RightArrow = ({
  width = 24,
  height = 24,
  color = ['#666'],
}: SvgIconProps) => (
  <Svg width={width} height={height} fill="none">
    <Path fill="#fff" fillOpacity={0.01} d="M24 24H0V0h24v24Z" />
    <Path
      stroke={color[0]}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m14.5 18-6-6 6-6"
    />
  </Svg>
);
export default RightArrow;
