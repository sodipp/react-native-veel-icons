import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const TripleDots = ({ width = 18, height = 4, color }: SvgIconProps) => (
  <Svg width={width} height={height} fill="none">
    <Path
      fill={color !== undefined ? color[0] : '#fff'}
      fillRule="evenodd"
      d="M4 2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm7 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm5 2a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default TripleDots;
