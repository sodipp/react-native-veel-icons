import * as React from 'react';
import Svg, { Path, Ellipse } from 'react-native-svg';

const BlockUser = ({ width = 28, height = 25 }: SvgIconProps) => (
  <Svg width={width} height={height} fill="none">
    <Path fill="#fff" fillOpacity={0.01} d="M0 0h21.993v22.91H0V0Z" />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.996 9.545c2.024 0 3.666-1.709 3.666-3.818 0-2.108-1.642-3.818-3.666-3.818S7.331 3.62 7.331 5.727c0 2.109 1.64 3.818 3.665 3.818ZM19.244 21c0-4.745-3.693-8.59-8.248-8.59-4.554 0-8.247 3.845-8.247 8.59"
    />
    <Ellipse cx={21} cy={15.273} fill="#fff" rx={7} ry={8.909} />
    <Path
      stroke="#000"
      strokeLinejoin="round"
      d="M23.962 12.946a5.091 5.091 0 0 1-7.2 7.2l7.2-7.199m-7.198 7.198a5.091 5.091 0 1 1 7.2-7.2"
    />
  </Svg>
);

export default BlockUser;
