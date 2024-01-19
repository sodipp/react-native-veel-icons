import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const BigUpArrow = ({ width = 40, height = 40, color }: SvgIconProps) => (
  <Svg width={width} height={height} fill="none">
    <Path fill="#fff" fillOpacity={0.01} d="M0 0h40v40H0V0Z" />
    <Path
      stroke={color !== undefined ? color[0] : 'white'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m10.833 25 10-10 10 10"
    />
  </Svg>
);
export default BigUpArrow;
