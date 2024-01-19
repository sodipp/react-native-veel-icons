import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const InfoBig = ({ width = 28, height = 28 }: SvgIconProps) => (
  <Svg width={width} height={height} fill="none">
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M14 24.5c5.799 0 10.5-4.701 10.5-10.5S19.799 3.5 14 3.5 3.5 8.201 3.5 14 8.201 24.5 14 24.5Z"
    />
    <Path
      stroke="#000"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14 9.333h.012v.012H14v-.012Z"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M14 14v4.667"
    />
  </Svg>
);
export default InfoBig;
