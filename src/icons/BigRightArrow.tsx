import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const BigRightArrow = ({ width = 22, height = 22 }: SvgProps) => (
  <Svg fill="none" width={width} height={height}>
    <Path fill="#fff" fillOpacity={0.01} d="M24 0v24H0V0h24Z" />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m9 6.5 6 6-6 6"
    />
  </Svg>
);
export default BigRightArrow;
