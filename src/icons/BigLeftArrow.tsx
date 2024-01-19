import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const BigLeftArrow = ({
  width = 40,
  height = 40,
  color = [],
}: SvgIconProps) => (
  <Svg fill="none" width={width} height={height}>
    <Path fill="#fff" fillOpacity={0.01} d="M0 40V0h40v40H0Z" />
    <Path
      stroke={color.length > 0 ? color[0] : '#000'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m25 29.167-10-10 10-10"
    />
  </Svg>
);
export default BigLeftArrow;
