import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const EyeOff = ({ width = 24, height = 24 }: SvgIconProps) => (
  <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
    <Path
      clipRule="evenodd"
      d="M12 20.5c4.97 0 9-4.161 9-7 0-2.839-4.03-7-9-7s-9 4.164-9 7c0 2.836 4.03 7 9 7z"
      stroke="#000"
      strokeLinejoin="round"
    />
    <Path
      d="M12 16.5a3 3 0 100-6 3 3 0 000 6z"
      stroke="#000"
      strokeLinejoin="round"
    />
    <Path
      d="M4 4l17 19"
      stroke="#000"
      strokeWidth={1.1}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path d="M0 0h24v24H0V0z" fill="#fff" fillOpacity={0.01} />
  </Svg>
);
export default EyeOff;
