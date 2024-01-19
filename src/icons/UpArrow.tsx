import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const UpArrow = ({ width = 25, height = 25, color }: SvgIconProps) => (
  <Svg width={width} height={height} fill="none">
    <Path fill="#fff" fillOpacity={0.01} d="M0 0h24v24H0V0Z" />
    <Path
      stroke={color != null ? color[0] : 'white'}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m6.5 15 6-6 6 6"
    />
  </Svg>
);
export default UpArrow;
