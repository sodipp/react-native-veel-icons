import * as React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const Info = ({ width = 18, height = 18, color = ['#666'] }: SvgIconProps) => {
  return (
    <View style={{ width, height }}>
      <Svg width={width} height={height} fill="none">
        <Path d="M0 0h18v18H0V0Z" fill={color[0]} fillOpacity={0.01} />
        <Path
          d="M9 16.5c2.071 0 3.946-.84 5.303-2.197A7.477 7.477 0 0 0 16.5 9c0-2.071-.84-3.946-2.197-5.303A7.477 7.477 0 0 0 9 1.5c-2.071 0-3.946.84-5.303 2.197A7.477 7.477 0 0 0 1.5 9c0 2.071.84 3.946 2.197 5.303A7.477 7.477 0 0 0 9 16.5Z"
          stroke={color[0]}
          strokeLinejoin="round"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9 4.5A.75.75 0 1 1 9 6a.75.75 0 0 1 0-1.5Z"
          fill={color[0]}
        />
        <Path
          d="M9 12.75V7.5"
          stroke={color[0]}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </View>
  );
};

export default Info;
