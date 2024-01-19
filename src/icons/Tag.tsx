import * as React from 'react';
import { View } from 'react-native';
import Svg, { Defs, LinearGradient, Path, Stop } from 'react-native-svg';

const Tag = ({ width, height }: SvgIconProps) => {
  return (
    <View style={{ width, height }}>
      <Svg width={width} height={height} fill="none">
        <Path d="M0 0h24v24H0V0Z" fill="#fff" fillOpacity={0.01} />
        <Path
          d="m21.085 14.623-6.454 6.453a1.8 1.8 0 0 1-2.546 0L4 13V4h9l8.085 8.085a1.8 1.8 0 0 1 0 2.537Z"
          stroke="url(#a)"
          strokeLinejoin="round"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.25 10.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
          fill="#0017FF"
        />
        <Defs>
          <LinearGradient
            id="a"
            x1={12.804}
            y1={4}
            x2={12.804}
            y2={21.603}
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#0017FF" />
            <Stop offset={1} stopColor="#FF007A" />
          </LinearGradient>
        </Defs>
      </Svg>
    </View>
  );
};

export default Tag;
