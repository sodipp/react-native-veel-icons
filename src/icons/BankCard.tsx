import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';

const BankCard = ({ height = 29, width = 38 }: SvgIconProps) => (
  <Svg fill="none" width={width} height={height}>
    <Path fill="#fff" fillOpacity={0.01} d="M9.162 0H38v28.838H9.162V0Z" />
    <Path
      stroke="#0017FF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={0.894}
      d="M35.597 10.815V5.7c0-.493-.4-.893-.894-.893H12.459c-.494 0-.894.4-.894.893v5.115"
    />
    <Path
      stroke="#0017FF"
      strokeLinejoin="round"
      strokeWidth={0.894}
      d="M11.565 10.815h24.032v12.324c0 .493-.4.893-.894.893H12.459a.894.894 0 0 1-.894-.893V10.815Z"
    />
    <Path
      stroke="#0017FF"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16.371 17.423h1.202M21.178 17.423h1.202M25.985 17.423h1.201"
    />
    <Circle
      cx={10.364}
      cy={18.425}
      r={10.364}
      fill="#0017FF"
      fillOpacity={0.2}
    />
  </Svg>
);
export default BankCard;
