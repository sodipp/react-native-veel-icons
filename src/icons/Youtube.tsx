import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';

const Youtube = ({ width = 24, height = 24 }: SvgIconProps) => (
  <Svg width={width} height={height} fill="none">
    <G stroke="#999" strokeLinecap="round" strokeLinejoin="round">
      <Path d="M21.556 7.197a2.504 2.504 0 0 0-1.767-1.766c-1.157-.447-12.366-.666-15.618.012A2.503 2.503 0 0 0 2.405 7.21c-.523 2.292-.562 7.246.013 9.588a2.503 2.503 0 0 0 1.766 1.767c2.292.527 13.186.601 15.618 0a2.503 2.503 0 0 0 1.767-1.767c.557-2.496.596-7.143-.013-9.601Z" />
      <Path d="M15.284 11.998 10.06 9.002v5.991l5.224-2.995Z" />
    </G>
  </Svg>
);
export default Youtube;
