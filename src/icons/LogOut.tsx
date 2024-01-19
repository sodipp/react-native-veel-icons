import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const LogOut = ({ width = 24, height = 24 }: SvgIconProps) => (
  <Svg width={width} height={height} fill="none">
    <Path fill="#fff" fillOpacity={0.01} d="M0 0h24v24H0V0Z" />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.996 3H3v18h9"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8 12h12M16.5 16.5 21 12l-4.5-4.5"
    />
  </Svg>
);
export default LogOut;
