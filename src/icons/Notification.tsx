import * as React from 'react';
import Svg, {
  Path,
  Circle,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';

const Notification = ({ width = 24, height = 24 }: SvgIconProps) => (
  <Svg width={width} height={height} fill="none">
    <Path fill="#fff" fillOpacity={0.01} d="M0 0h24v24H0V0Z" />
    <Path
      stroke="url(#a)"
      strokeLinejoin="round"
      d="M19.5 3h-15A1.5 1.5 0 0 0 3 4.5v15A1.5 1.5 0 0 0 4.5 21h15a1.5 1.5 0 0 0 1.5-1.5v-15A1.5 1.5 0 0 0 19.5 3Z"
    />
    <Circle cx={20} cy={4} r={3} fill="#0017FF" stroke="#fff" />
    <Defs>
      <LinearGradient
        id="a"
        x1={12}
        x2={12}
        y1={3}
        y2={21}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#0017FF" />
        <Stop offset={1} stopColor="#FF007A" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default Notification;
