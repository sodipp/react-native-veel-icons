import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const EmailBig = ({ width = 24, height = 24 }: SvgIconProps) => (
  <Svg width={width} height={height} fill="none">
    <Path
      fill="#fff"
      fillOpacity={0.01}
      fillRule="evenodd"
      d="M0 0h24v24H0V0Z"
      clipRule="evenodd"
    />
    <Path
      stroke="#999"
      strokeLinejoin="round"
      d="M22 9v10.91c0 .602-.448 1.09-1 1.09H3c-.552 0-1-.488-1-1.09V9l10 6.5L22 9Z"
    />
    <Path
      stroke="#999"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2 8.892 12 2l10 6.892"
    />
  </Svg>
);
export default EmailBig;
