import * as React from 'react';
import Svg, { Rect, Path } from 'react-native-svg';

const Copy = ({ width = 24, height = 24 }: SvgIconProps) => (
  <Svg width={width} height={height} fill="none">
    <Rect
      width={10.733}
      height={10.733}
      x={8.767}
      y={4.5}
      stroke="#000"
      rx={1.5}
    />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M7.2 8.767a.5.5 0 0 0-.5-.5H6a2 2 0 0 0-2 2V18a2 2 0 0 0 2 2h7.733a2 2 0 0 0 2-2v-.7a.5.5 0 1 0-1 0v.7a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-7.733a1 1 0 0 1 1-1h.7a.5.5 0 0 0 .5-.5Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default Copy;
