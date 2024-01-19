import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const BigDownArrow = ({ width = 40, height = 40, color }: SvgIconProps) => (
  <Svg width={width} height={height} fill="none">
    <Path fill="none" fillOpacity={0.01} d="M40 40H0V0h40v40Z" />
    <Path
      stroke={color !== undefined ? color[0] : 'white'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m29.167 15-10 10-10-10"
    />
  </Svg>
);
export default BigDownArrow;
