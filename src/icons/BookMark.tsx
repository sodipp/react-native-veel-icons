import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const BookMark = ({ width = 24, height = 24, color }: SvgIconProps) => {
  return (
    <Svg width={width} height={height} fill="none">
      <Path
        fill={color !== undefined ? color[0] : undefined}
        fillOpacity={0.01}
        d="M0 0h24v24H0V0Z"
      />
      <Path
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17 5V2H4v17l3-1.5"
      />
      <Path
        stroke="black"
        strokeLinejoin="round"
        d="M7 22V5h13v17l-6.5-3.136L7 22Z"
      />
    </Svg>
  );
};
export default BookMark;
