import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const Filter = ({ width = 20, height = 20 }: SvgIconProps) => (
  <Svg width={width} height={height} fill="none">
    <Path fill="#fff" fillOpacity={0.01} d="M0 0h20v20H0V0Z" />
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M7.915 5H16.5a.5.5 0 0 1 0 1H7.915a1.5 1.5 0 0 1-2.83 0H3.5a.5.5 0 0 1 0-1h1.585a1.5 1.5 0 0 1 2.83 0Zm7 4H16.5a.5.5 0 0 1 0 1h-1.585a1.5 1.5 0 0 1-2.83 0H3.5a.5.5 0 0 1 0-1h8.585a1.5 1.5 0 0 1 2.83 0Zm1.585 4h-5.585a1.5 1.5 0 0 0-2.83 0H3.5a.5.5 0 0 0 0 1h4.585a1.5 1.5 0 0 0 2.83 0H16.5a.5.5 0 0 0 0-1Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default Filter;
