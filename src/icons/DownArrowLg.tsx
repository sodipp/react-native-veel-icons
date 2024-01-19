import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const DownArrowLg = ({ width = 25, height = 25, color }: SvgIconProps) => (
  <Svg width={width} height={height} fill="none">
    <Path fill="#fff" fillOpacity={0.01} d="M24 24H0V0h24v24Z" />
    <Path
      stroke={color != null ? color[0] : 'white'}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m17.5 9-6 6-6-6"
    />
  </Svg>
);
export default DownArrowLg;
