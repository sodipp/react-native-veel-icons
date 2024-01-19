import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const PasswordVisible = ({ height = 24, width = 24 }: SvgIconProps) => (
  <Svg width={width} height={height} fill="none">
    <Path fill="#fff" fillOpacity={0.01} d="M0 0h24v24H0V0Z" />
    <Path
      stroke="#999"
      strokeLinejoin="round"
      d="M12 20.5c4.97 0 9-4.161 9-7 0-2.84-4.03-7-9-7s-9 4.164-9 7c0 2.836 4.03 7 9 7Z"
      clipRule="evenodd"
    />
    <Path
      stroke="#999"
      strokeLinejoin="round"
      d="M12 16.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
    />
  </Svg>
);
export default PasswordVisible;
