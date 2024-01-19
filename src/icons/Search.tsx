import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const Search = ({ width = 20, height = 20, color }: SvgIconProps) => {
  return (
    <Svg width={width} height={height} fill="none">
      <Path d="M0 0h20v20H0V0Z" fill="#fff" fillOpacity={0.01} />
      <Path
        d="M8.75 15.833a7.083 7.083 0 1 0 0-14.166 7.083 7.083 0 0 0 0 14.166Z"
        stroke={color !== undefined ? color[0] : undefined}
        strokeLinejoin="round"
      />
      <Path
        d="m13.842 13.842 3.536 3.536"
        stroke={color !== undefined ? color[0] : undefined}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default Search;
