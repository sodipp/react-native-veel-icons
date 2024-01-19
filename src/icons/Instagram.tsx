import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const Instagram = ({ width = 24, height = 24 }: SvgIconProps) => (
  <Svg width={width} height={height} fill="none">
    <Path
      stroke="#999"
      strokeMiterlimit={10}
      d="M15.595 4.205h-7.19a4.2 4.2 0 0 0-4.2 4.2v7.19a4.2 4.2 0 0 0 4.2 4.2h7.19a4.2 4.2 0 0 0 4.2-4.2v-7.19a4.2 4.2 0 0 0-4.2-4.2Z"
    />
    <Path
      stroke="#999"
      strokeMiterlimit={10}
      d="M12 15.764a3.763 3.763 0 1 0 0-7.527 3.763 3.763 0 0 0 0 7.527Z"
    />
    <Path
      fill="#999"
      d="M16.097 7.29a.333.333 0 1 0 0-.666.333.333 0 0 0 0 .667Z"
    />
  </Svg>
);
export default Instagram;
