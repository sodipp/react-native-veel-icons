import * as React from 'react';
import Svg, { Path, G, Defs, LinearGradient, Stop } from 'react-native-svg';

const Payment1 = ({ width = 24, height = 24 }: SvgIconProps) => (
  <Svg width={width} height={height} fill="none">
    <Path fill="#fff" fillOpacity={0.01} d="M0 0h24v24H0V0Z" />
    <G strokeLinejoin="round">
      <Path
        stroke="url(#a)"
        strokeLinecap="round"
        strokeWidth={0.894}
        d="M22 9V4.894C22 4.4 21.6 4 21.106 4H2.894C2.4 4 2 4.4 2 4.894V9"
      />
      <Path
        stroke="url(#b)"
        strokeWidth={0.894}
        d="M2 9h20v10.106c0 .494-.4.894-.894.894H2.894A.894.894 0 0 1 2 19.106V9Z"
      />
      <Path
        stroke="#001ACF"
        strokeLinecap="round"
        strokeWidth={2}
        d="M6 14.5h1M10 14.5h1M14 14.5h1"
      />
    </G>
    <Defs>
      <LinearGradient
        id="a"
        x1={12}
        x2={12}
        y1={4}
        y2={9}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#0017FF" />
        <Stop offset={1} stopColor="#0017FF" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={12}
        x2={12}
        y1={9}
        y2={20}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#0017FF" />
        <Stop offset={1} stopColor="#FF007A" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default Payment1;
