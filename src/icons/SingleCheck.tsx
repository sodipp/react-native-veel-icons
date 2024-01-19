import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SingleCheck = ({
  width = 14,
  height = 12,
  color = ['#fff'],
}: SvgIconProps) => (
  <Svg width={width} height={height} fill="blue">
    <Path
      fill={color[0]}
      fillRule="evenodd"
      d="M12.875 1.829a.5.5 0 1 0-.754-.658l-7.48 8.569-2.766-3.169a.5.5 0 1 0-.754.658l3.143 3.6a.5.5 0 0 0 .754 0l7.857-9Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SingleCheck;
