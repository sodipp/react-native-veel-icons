import * as React from 'react';
import { View } from 'react-native';
import Svg, { Ellipse, Path } from 'react-native-svg';

const LinkingSuccess = ({
  width = 62,
  height = 62,
  color = ['#0017FF80'],
}: SvgIconProps) => {
  return (
    <View style={{ width, height }}>
      <Svg width={width} height={height} fill="none">
        <Ellipse
          cx={31}
          cy={30.5}
          rx={31}
          ry={30.5}
          fill={color[0]}
          fillOpacity={0.08}
        />
        <Path
          d="M31.222 9a22.223 22.223 0 100 44.445 22.223 22.223 0 000-44.445zm14.514 14.764L27.486 42 16.708 31.222a1.964 1.964 0 012.778-2.778l8.028 8.028 15.472-15.458a1.964 1.964 0 112.778 2.778l-.028-.028z"
          fill={color[0]}
          fillOpacity={0.5}
        />
      </Svg>
    </View>
  );
};

export default LinkingSuccess;
