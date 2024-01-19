import * as React from 'react';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';

const Send = ({ width = 24, height = 24 }: SvgIconProps) => (
  <Svg width={width} height={height} fill="none">
    <Path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24V0Z" />
    <Path
      stroke="url(#a)"
      strokeLinejoin="round"
      d="m21.5 2.5-5.817 16.62c-.299.854-1.49.903-1.857.075L11.05 12.95l-6.245-2.776c-.828-.367-.78-1.558.076-1.857L21.5 2.5Z"
    />
    <Path
      stroke="url(#b)"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m21.5 2.5-10 10"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={12}
        x2={12}
        y1={2.5}
        y2={21.5}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#0017FF" />
        <Stop offset={1} stopColor="#FF007A" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={16.5}
        x2={16.5}
        y1={2.5}
        y2={12.5}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#0017FF" />
        <Stop offset={1} stopColor="#8E0AB6" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default Send;
