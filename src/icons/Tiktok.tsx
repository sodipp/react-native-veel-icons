import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const Tiktok = ({ width = 24, height = 24 }: SvgIconProps) => (
  <Svg width={width} height={height} fill="none">
    <Path
      stroke="#999"
      d="M14.5 5v11a3.5 3.5 0 1 1-3.5-3.5m8-2A4.5 4.5 0 0 1 14.5 6"
    />
  </Svg>
);
export default Tiktok;
