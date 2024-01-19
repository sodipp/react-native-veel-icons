import * as React from 'react';
import Svg, { Defs, LinearGradient, Path, Stop } from 'react-native-svg';

const PasswordInvisible = ({
  height = 24,
  width = 24,
  color = ['black'],
}: SvgIconProps) => (
  <Svg width={width} height={height} fill="none">
    <Path
      stroke="url(#a)"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.286 8c2.9 4.19 6.137 6.286 9.714 6.286 3.577 0 6.815-2.095 9.714-6.286M5.143 11.34l-2.286 2.374m16-2.373 2.286 2.373m-6.857.572 1.143 2.857m-5.715-2.857-1.143 2.857"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={12}
        x2={12}
        y1={4.5}
        y2={19.5}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor={color[0]} />
        <Stop offset={1} stopColor={color.length > 1 ? color[1] : color[0]} />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default PasswordInvisible;
