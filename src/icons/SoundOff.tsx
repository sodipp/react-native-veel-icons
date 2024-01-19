import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SoundOff = ({ width = 24, height = 24 }: SvgIconProps) => (
  <Svg fill="none" width={width} height={height}>
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.008 4.266 7.492 6.293a2 2 0 0 1-.992.264H5a2 2 0 0 0-2 2V15.5a2 2 0 0 0 2 2h1.5a2 2 0 0 1 .992.264l2.516 2.026c1.333.762 2.992-.2 2.992-1.736V6.003c0-1.536-1.659-2.498-2.992-1.737Z"
    />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      d="M17 14.64 21.11 10M17 10l4.11 4.64"
    />
  </Svg>
);
export default SoundOff;
