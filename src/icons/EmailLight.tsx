import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const EmailLight = ({ width = 18, height = 17 }: SvgIconProps) => (
  <Svg fill="none" width={width} height={height}>
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={0.5}
      d="M3.563 4.604c5.132 4.807 5.559 4.636 10.874 0"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={0.5}
      d="M15.188 3.01H2.812c-.414 0-.75.317-.75.709v9.562c0 .391.336.708.75.708h12.376c.414 0 .75-.317.75-.708V3.72c0-.392-.336-.709-.75-.709Z"
    />
  </Svg>
);
export default EmailLight;
