import * as React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

const Email = ({ width = 36, height = 36 }: SvgIconProps) => (
  <Svg width={width} height={height} fill="none">
    <Circle cx={18} cy={18} r={18} fill="#0017FF" fillOpacity={0.04} />
    <Path
      stroke="#0017FF"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 13.072c5.866 5.817 6.354 5.61 12.429 0"
    />
    <Path
      stroke="#0017FF"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M25.286 11.143H11.143a.857.857 0 0 0-.857.857v11.572c0 .473.383.857.857.857h14.143a.857.857 0 0 0 .857-.857V12a.857.857 0 0 0-.857-.857Z"
    />
  </Svg>
);
export default Email;
