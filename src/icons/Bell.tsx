import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const Bell = ({ width = 20, height = 22 }: SvgIconProps) => (
  <Svg width={width} height={height} fill="none">
    <Path
      fill="#0017FF"
      d="M17 14.353H0v-1.214a2.488 2.488 0 0 0 2.485-2.486V6.015a6.015 6.015 0 1 1 12.03 0v4.638A2.488 2.488 0 0 0 17 13.14v1.214ZM2.738 13.139h11.524a3.67 3.67 0 0 1-.962-2.483V6.015a4.8 4.8 0 0 0-9.6 0v4.64c0 .959-.366 1.831-.965 2.486l.003-.002ZM8.5 18.214a2.926 2.926 0 0 1-2.922-2.92v-.024c0-.746.284-1.425.751-1.935l-.002.002.898.818a1.648 1.648 0 0 0-.432 1.134v-.001.006a1.708 1.708 0 0 0 3.416 0v-.024c0-.43-.164-.822-.433-1.117v.002l.898-.818a2.854 2.854 0 0 1 .75 1.959v-.002a2.926 2.926 0 0 1-2.924 2.92Zm5.408-8.5H3.092V8.5h10.816v1.214Z"
    />
  </Svg>
);
export default Bell;
