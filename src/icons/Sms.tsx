import * as React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

const Sms = ({ width = 36, height = 55 }: SvgIconProps) => (
  <Svg width={width} height={height} fill="none">
    <Circle cx={18} cy={18} r={18} fill="#FF007A" fillOpacity={0.04} />
    <Path
      fill="#fff"
      fillOpacity={0.01}
      d="M7.714 7.714h20.572v20.572H7.714V7.714Z"
    />
    <Path
      stroke="#F70080"
      strokeLinejoin="round"
      d="M24.429 10.286H11.572c-.71 0-1.286.575-1.286 1.285v12.857c0 .71.575 1.286 1.286 1.286h12.857c.71 0 1.286-.575 1.286-1.285V11.57c0-.71-.576-1.285-1.286-1.285Z"
    />
    <Path
      stroke="#FF007A"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M22.286 16.286h-8.572M18.857 19.286h-5.143"
    />
  </Svg>
);
export default Sms;
