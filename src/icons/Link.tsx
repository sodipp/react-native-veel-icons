import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const Link = ({ width = 24, height = 24 }: SvgIconProps) => (
  <Svg width={width} height={height} fill="none">
    <Path
      stroke="#999"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8 12h8M9 8H6a4 4 0 0 0 0 8h3m6-8h3a4 4 0 1 1 0 8h-3"
    />
  </Svg>
);
export default Link;
