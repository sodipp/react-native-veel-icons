import * as React from 'react';
import Svg, { Path, G, Defs, LinearGradient, Stop } from 'react-native-svg';

const GradientEye = ({ width = 24, height = 24 }: SvgIconProps) => (
  <Svg width={width} height={height} fill="none">
    <Path fill="#fff" fillOpacity={0.01} d="M0 0h24v24H0V0Z" />
    <G strokeLinejoin="round">
      <Path
        stroke="url(#a)"
        d="M12 20.5c4.97 0 9-4.161 9-7 0-2.84-4.03-7-9-7s-9 4.164-9 7c0 2.836 4.03 7 9 7Z"
        clipRule="evenodd"
      />
      <Path stroke="url(#b)" d="M12 16.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
    </G>
    <Defs>
      <LinearGradient
        id="a"
        x1={12}
        x2={12}
        y1={6.5}
        y2={20.5}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#0017FF" />
        <Stop offset={1} stopColor="#FF007A" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={12}
        x2={12}
        y1={10.5}
        y2={16.5}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#0017FF" />
        <Stop offset={1} stopColor="#FF007A" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default GradientEye;
