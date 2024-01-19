import * as React from 'react';
import { View } from 'react-native';
import Svg, { Defs, LinearGradient, Path, Stop } from 'react-native-svg';

const Location = ({ width = 24, height = 24, color }: SvgIconProps) => {
  return (
    <View style={{ width, height }}>
      <Svg width={width} height={height} fill="none">
        <Path
          d="M12.021 23.064c4.681-6.777 7.021-11.458 7.021-14.043A7.021 7.021 0 1 0 5 9.021c0 2.585 2.34 7.266 7.021 14.043Z"
          stroke="url(#a)"
          strokeLinejoin="round"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
          fill={color !== undefined ? color[0] : 'black'}
        />
        <Defs>
          <LinearGradient
            id="a"
            x1={12.021}
            y1={2}
            x2={12.021}
            y2={23.064}
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor={color !== undefined ? color[0] : 'black'} />
            <Stop
              offset={1}
              stopColor={
                color !== undefined ? (color[1] ? color[1] : color[0]) : 'black'
              }
            />
          </LinearGradient>
        </Defs>
      </Svg>
    </View>
  );
};

export default Location;
