import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const Eye = ({ width = 32, height = 32, color = ['black'] }: SvgIconProps) => {
  return (
    <Svg width={width} height={height} fill="none">
      <Path
        clipRule="evenodd"
        d="M16 26.311c7.07 0 12.8-5.918 12.8-9.955C28.8 12.318 23.07 6.4 16 6.4S3.2 12.322 3.2 16.356c0 4.033 5.73 9.955 12.8 9.955z"
        stroke={color[0]}
        strokeLinejoin="round"
      />
      <Path
        d="M16 20.622a4.267 4.267 0 100-8.533 4.267 4.267 0 000 8.533z"
        stroke={color[0]}
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default Eye;
