import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const LeftArrow = ({ width = 7, height = 14, color }: SvgIconProps) => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <Svg width={width} height={height} fill="none" style={{ marginTop: 3 }}>
      <Path
        d="m.5 1 6 6-6 6"
        stroke={color != null ? color[0] : '#BBB'}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default LeftArrow;
