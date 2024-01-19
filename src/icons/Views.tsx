import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const Views = ({
  width = 22,
  height = 27,
  color = ['white'],
}: SvgIconProps) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 22 27"
    preserveAspectRatio="xMidYMid meet"
    fill="none"
    // eslint-disable-next-line react-native/no-inline-styles
    style={{ marginLeft: 5 }}
  >
    <Path
      stroke={color[0]}
      strokeLinejoin="round"
      d="M1 3.06v21.143a2.061 2.061 0 0 0 3.2 1.719l15.875-10.48a2.059 2.059 0 0 0 .013-3.429L4.213 1.351A2.064 2.064 0 0 0 1 3.06Z"
    />
  </Svg>
);
export default Views;
