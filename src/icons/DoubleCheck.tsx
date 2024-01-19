import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const DoubleCheck = ({
  width = 17,
  height = 14,
  color = ['#fff'],
}: SvgIconProps) => (
  <Svg width={width} height={height} fill="none">
    <Path
      fill={color[0]}
      d="m9.85 6.857-5.6 5.5a.5.5 0 0 1-.7 0L1.15 10a.5.5 0 1 1 .7-.713L3.9 11.3l5.25-5.156a.5.5 0 1 1 .7.71Zm6.007-.707a.5.5 0 0 0-.708-.006L9.9 11.3l-1.176-1.157a.5.5 0 0 0-.701.714l1.527 1.5a.5.5 0 0 0 .701 0l5.6-5.5a.501.501 0 0 0 .007-.707Z"
    />
  </Svg>
);
export default DoubleCheck;
