import * as React from 'react';
import { View } from 'react-native';
import Svg, { Circle, Path } from 'react-native-svg';

const LinkingFailure = ({
  width = 62,
  height = 61,
  color = ['#FF001F'],
}: SvgIconProps) => {
  return (
    <View style={{ width, height }}>
      <Svg width={width} height={height} fill="none">
        <Circle cx={31} cy={31} r={31} fill={color[0]} fillOpacity={0.08} />
        <Path
          d="M30.833 51.667c11.506 0 20.834-9.328 20.834-20.834S42.339 10 30.833 10 10 19.327 10 30.833c0 11.506 9.327 20.834 20.833 20.834z"
          stroke={color[0]}
          strokeWidth={1.5}
        />
        <Path
          d="M30.833 20.416v12.5"
          stroke={color[0]}
          strokeWidth={1.5}
          strokeLinecap="round"
        />
        <Path
          d="M30.833 41.25a2.083 2.083 0 100-4.167 2.083 2.083 0 000 4.167z"
          fill={color[0]}
        />
      </Svg>
    </View>
  );
};

export default LinkingFailure;
