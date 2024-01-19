import * as React from 'react';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';

const UserProfile = ({ width = 24, height = 24 }: SvgIconProps) => (
  <Svg width={width} height={height} fill="none">
    <Path fill="#fff" fillOpacity={0.01} d="M0 0h24v24H0V0Z" />
    <Path
      stroke="url(#a)"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
    />
    <Path
      stroke="url(#b)"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 22a9 9 0 1 0-18 0"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={12}
        x2={12}
        y1={2}
        y2={10}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#0017FF" />
        <Stop offset={1} stopColor="#0017FF" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={12}
        x2={12}
        y1={13}
        y2={22}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#0017FF" />
        <Stop offset={1} stopColor="#FF007A" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default UserProfile;
