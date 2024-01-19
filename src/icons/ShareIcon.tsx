import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const ShareIcon = ({
  width = 65,
  height = 50,
  color = ['white'],
}: SvgIconProps) => (
  <Svg width={width} height={height} fill="none">
    <Path
      d="M36.444 24.4l-3.736-3.733-3.82 3.733m3.779-3.733v16.8M27 28.133h-1.889a3.801 3.801 0 00-2.671 1.094 3.711 3.711 0 00-1.107 2.64v13.066c0 .99.398 1.94 1.107 2.64.708.7 1.67 1.094 2.671 1.094h15.111a3.801 3.801 0 002.672-1.094A3.711 3.711 0 0044 44.933V31.867c0-.99-.398-1.94-1.106-2.64a3.801 3.801 0 00-2.672-1.094h-1.889"
      stroke={color[0]}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default ShareIcon;
