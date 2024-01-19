import * as React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

const CheckCircle = ({ width = 32, height = 32 }: SvgIconProps) => (
  <Svg fill="none" width={width} height={height}>
    <Circle cx={15} cy={15} r={14.5} stroke="#0017FF" strokeOpacity={0.5} />
    <Path
      stroke="#0017FF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeOpacity={0.5}
      d="m10 15 3.5 3.5 7-7.5"
    />
  </Svg>
);
export default CheckCircle;
