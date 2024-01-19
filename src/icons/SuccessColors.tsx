import * as React from 'react';
import { View } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

const SuccessColors = ({ width = 200, height = 200 }: SvgIconProps) => {
  return (
    <View style={{ width, height }}>
      <Svg width={width} height={height} fill="none">
        <Circle opacity={0.4} cx={62} cy={8} r={2} fill="#43CCF8" />
        <Circle opacity={0.4} cx={33} cy={100} r={2} fill="#FF007A" />
        <Circle
          opacity={0.4}
          cx={105}
          cy={125}
          r={2}
          fill="#0017FF"
          fillOpacity={0.2}
        />
        <Circle
          opacity={0.4}
          cx={148}
          cy={3}
          r={3}
          fill="#FF007A"
          fillOpacity={0.76}
        />
        <Circle opacity={0.4} cx={3} cy={60} r={3} fill="#FF007A" />
        <Circle opacity={0.4} cx={38} cy={144} r={3} fill="#001ACF" />
        <Circle
          opacity={0.4}
          cx={181}
          cy={63}
          r={3}
          fill="#0017FF"
          fillOpacity={0.5}
        />
        <Circle
          opacity={0.4}
          cx={147}
          cy={129}
          r={2}
          fill="#FF007A"
          fillOpacity={0.76}
        />
      </Svg>
    </View>
  );
};

export default SuccessColors;
