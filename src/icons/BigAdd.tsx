import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const BigAdd = ({
  width = 15,
  height = 15,
  color = ['#fff'],
}: SvgIconProps) => (
  <Svg width={width} height={height} fill="none">
    <Path
      stroke={color[0]}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7.026 1 7.01 13M1 7h12"
    />
  </Svg>
);
export default BigAdd;
