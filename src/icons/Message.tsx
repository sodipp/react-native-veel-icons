import * as React from 'react';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';

const Message = ({ width = 24, height = 24 }: SvgIconProps) => (
  <Svg width={width} height={height} fill="none">
    <Path fill="#fff" fillOpacity={0.01} d="M0 0h24v24H0V0Z" />
    <Path
      stroke="url(#a)"
      strokeLinejoin="round"
      d="M19.5 3h-15A1.5 1.5 0 0 0 3 4.5v15A1.5 1.5 0 0 0 4.5 21h15a1.5 1.5 0 0 0 1.5-1.5v-15A1.5 1.5 0 0 0 19.5 3Z"
    />
    <Path
      stroke="black"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17 10H7M13 13.5H7"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={12}
        x2={12}
        y1={3}
        y2={21}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="black" />
        <Stop offset={1} stopColor="black" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default Message;
