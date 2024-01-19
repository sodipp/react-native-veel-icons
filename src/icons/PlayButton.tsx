import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const PlayButton = ({ width = 12, height = 12 }: SvgIconProps) => (
  <Svg width={width} height={height} fill="none">
    <Path
      stroke="#fff"
      strokeLinejoin="round"
      strokeOpacity={0.84}
      d="M3 1.734v7.532c0 .405.277.734.619.734.121 0 .24-.042.34-.122l4.763-3.733c.285-.224.364-.68.175-1.017a.69.69 0 0 0-.17-.205L3.963 1.125c-.284-.226-.668-.137-.859.2A.834.834 0 0 0 3 1.734Z"
    />
  </Svg>
);

export default PlayButton;
