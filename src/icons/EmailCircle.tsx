import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';

const EmailCircle = ({ width = 36, height = 31 }: SvgIconProps) => (
  <Svg width={width} height={height} fill="none">
    <Path
      stroke="#0017FF"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.595 7.919c8.878 8.805 9.616 8.49 18.81 0"
    />
    <Path
      stroke="#0017FF"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M24.703 5H3.297C2.581 5 2 5.58 2 6.297v17.514c0 .716.58 1.297 1.297 1.297h21.406c.716 0 1.297-.58 1.297-1.297V6.297C26 5.581 25.42 5 24.703 5Z"
    />
    <Circle cx={26} cy={17} r={9} fill="#0017FF" fillOpacity={0.2} />
  </Svg>
);
export default EmailCircle;
