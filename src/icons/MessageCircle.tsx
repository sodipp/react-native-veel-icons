import * as React from 'react';
import Svg, { Ellipse, Path } from 'react-native-svg';

const MessageCircle = ({ width = 37, height = 32 }: SvgIconProps) => (
  <Svg width={width} height={height} fill="none">
    <Path fill="#fff" fillOpacity={0.01} d="M0 0h32.571v32.571H0V0Z" />
    <Path
      stroke="#F70080"
      strokeLinejoin="round"
      d="M26.464 4.071H6.107a2.036 2.036 0 0 0-2.035 2.036v20.357c0 1.124.91 2.036 2.035 2.036h20.357a2.036 2.036 0 0 0 2.036-2.036V6.107a2.036 2.036 0 0 0-2.036-2.036Z"
    />
    <Path
      stroke="#FF007A"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M23.071 13.571H9.5M17.643 18.321H9.5"
    />
    <Ellipse
      cx={28.825}
      cy={19.984}
      fill="#FF007A"
      fillOpacity={0.32}
      rx={9.04}
      ry={9.199}
    />
  </Svg>
);
export default MessageCircle;
