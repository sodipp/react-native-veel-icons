import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const Follow = ({ width = 28, height = 28 }: SvgIconProps) => (
  <Svg width={width} height={height} fill="none">
    <Path d="M0 0h21.993v22.91H0V0z" fill="#fff" fillOpacity={0.01} />
    <Path
      d="M10.996 9.545c2.024 0 3.666-1.709 3.666-3.818 0-2.108-1.642-3.818-3.666-3.818S7.331 3.62 7.331 5.727c0 2.109 1.64 3.818 3.665 3.818zM19.244 21c0-4.745-3.693-8.59-8.248-8.59S2.75 16.254 2.75 21"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default Follow;
