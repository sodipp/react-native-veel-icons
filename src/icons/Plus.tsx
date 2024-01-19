import * as React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

const Plus = ({ height = 25, width = 16 }: SvgIconProps) => (
  <Svg fill="none" height={height} width={width}>
    <Circle cx={8} cy={8} r={7.5} stroke="#BBB" />
    <Path
      stroke="#BBB"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.4 7.861h8M8.262 4v8"
    />
  </Svg>
);
export default Plus;
