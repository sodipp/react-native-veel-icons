import * as React from 'react';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';

const VideoCamera = ({ width = 24, height = 24 }: SvgIconProps) => (
  <Svg width={width} height={height} fill="none">
    <Path fill="#fff" fillOpacity={0.01} d="M0 0h24v24H0V0Z" />
    <Path
      stroke="url(#a)"
      d="M16.5 10.5H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h13.5a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1Z"
    />
    <Path
      stroke="url(#b)"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10 13.5h4.5v4H10v-4Z"
    />
    <Path
      stroke="#0017FF"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.5 9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM6.5 9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
    />
    <Path
      stroke="url(#c)"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m17.5 17.5 4.5 2v-8l-4.5 2"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={9.75}
        x2={9.75}
        y1={10.5}
        y2={20.5}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#0017FF" />
        <Stop offset={1} stopColor="#FF007A" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={12.25}
        x2={12.25}
        y1={13.5}
        y2={17.5}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#0017FF" />
        <Stop offset={1} stopColor="#FF007A" />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={19.75}
        x2={19.75}
        y1={11.5}
        y2={19.5}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#0017FF" />
        <Stop offset={1} stopColor="#FF007A" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default VideoCamera;
