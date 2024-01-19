import * as React from 'react';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';

const CloudUpload = ({ width = 24, height = 24 }: SvgIconProps) => (
  <Svg fill="none" width={width} height={height}>
    <Path
      stroke="url(#a)"
      strokeLinejoin="round"
      d="M1 14.18A4.82 4.82 0 0 0 5.82 19h12.852a3.749 3.749 0 0 0 .535-7.46A7.497 7.497 0 0 0 4.47 9.551 4.822 4.822 0 0 0 1 14.181Z"
    />
    <Path
      stroke="url(#b)"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.852 10.432 11.71 8.29m0 0-2.142 2.142M11.71 8.29v6.426"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={11.714}
        x2={11.714}
        y1={4}
        y2={19}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#0017FF" />
        <Stop offset={1} stopColor="#FF007A" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={11.71}
        x2={11.71}
        y1={8.29}
        y2={14.716}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#0017FF" />
        <Stop offset={1} stopColor="#FF007A" />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default CloudUpload;
