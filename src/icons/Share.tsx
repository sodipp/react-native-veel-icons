import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const Share = ({ width = 24, height = 24, color }: SvgIconProps) => (
  <Svg fill="none" width={width} height={height}>
    <Path
      stroke={color ? color[0] : '#000'}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17.333 10.667v7.666A1.668 1.668 0 0 1 15.667 20h-10A1.667 1.667 0 0 1 4 18.333v-10a1.667 1.667 0 0 1 1.667-1.666h6.978M15.333 4H20v4.667m-9.333 4.666 9-9"
    />
  </Svg>
);
export default Share;
