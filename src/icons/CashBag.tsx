import * as React from 'react';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';

const CashBag = ({ width = 24, height = 24 }: SvgIconProps) => (
  <Svg width={width} height={height} fill="none">
    <Path
      stroke="url(#a)"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.392 16.209v1.629m0-9.71v1.516m0 12.162c5.645 0 9.677-2 9.677-6.452 0-4.839-2.42-8.064-7.258-10.484l1.903-2.451a1.065 1.065 0 0 0-.903-1.613H7.972a1.065 1.065 0 0 0-.903 1.613l1.903 2.467c-4.838 2.436-7.258 5.662-7.258 10.5 0 4.42 4.032 6.42 9.678 6.42Z"
    />
    <Path
      stroke="url(#b)"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.779 15.467a2 2 0 0 0 1.613.71 1.807 1.807 0 0 0 1.919-1.613 1.806 1.806 0 0 0-1.92-1.613 1.807 1.807 0 0 1-1.919-1.613 1.79 1.79 0 0 1 1.92-1.613 2.032 2.032 0 0 1 1.613.645"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={11.392}
        x2={11.392}
        y1={0.806}
        y2={21.806}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#0017FF" />
        <Stop offset={1} stopColor="#FF007A" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={11.392}
        x2={11.392}
        y1={9.72}
        y2={16.181}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#0017FF" />
        <Stop offset={1} stopColor="#FF007A" />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default CashBag;
