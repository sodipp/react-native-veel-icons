import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const Error = ({
  width = 20,
  height = 20,
  color = ['#FF001F'],
}: SvgIconProps) => (
  <Svg width={width} height={height} fill="none">
    <Path
      fill={color[0]}
      d="M10.492 8.91A.5.5 0 0 0 9.5 9v4.502l.008.09a.5.5 0 0 0 .992-.09V9l-.008-.09Zm.307-2.16a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0ZM18 10a8 8 0 1 0-16 0 8 8 0 0 0 16 0ZM3 10a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z"
    />
  </Svg>
);
export default Error;
