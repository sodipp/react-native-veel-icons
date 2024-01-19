import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';

const LikeFill = ({
  width = 68,
  height = 65,
  color = ['white'],
}: SvgIconProps) => (
  <Svg width={width} height={height} viewBox="0 0 68 65" fill="none">
    <G filter="url(#filter0_d_1_6)">
      <Path
        d="M28 21.333a7.333 7.333 0 00-7.333 7.334c0 7.333 8.666 14 13.333 15.55 4.667-1.55 13.333-8.217 13.333-15.55A7.333 7.333 0 0034 24.449a7.325 7.325 0 00-6-3.116z"
        fill={color[0]}
      />
      <Path
        d="M28 21.333a7.333 7.333 0 00-7.333 7.334c0 7.333 8.666 14 13.333 15.55 4.667-1.55 13.333-8.217 13.333-15.55A7.333 7.333 0 0034 24.449a7.325 7.325 0 00-6-3.116z"
        stroke={color[0]}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);
export default LikeFill;
