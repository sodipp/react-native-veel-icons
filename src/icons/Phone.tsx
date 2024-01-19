import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const Phone = ({ width = 24, height = 24 }: SvgIconProps) => (
  <Svg width={width} height={height} fill="none">
    <Path fill="#fff" fillOpacity={0.01} d="M0 0h24v24H0V0Z" />
    <Path fill="#fff" fillOpacity={0.01} d="M0 0h24v24H0V0Z" />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M20.89 10.303a6.533 6.533 0 0 0-.124-2.55 6.47 6.47 0 0 0-1.708-3.01 6.47 6.47 0 0 0-3.01-1.707 6.534 6.534 0 0 0-2.55-.125M17.095 9.902a2.996 2.996 0 0 0-.846-2.566c-.7-.7-1.658-.981-2.566-.846"
    />
    <Path
      stroke="#000"
      strokeLinejoin="round"
      d="M7.188 4.397a1 1 0 0 1 .874.515l1.223 2.203a1 1 0 0 1 .02.933l-1.178 2.357s.342 1.755 1.77 3.185c1.43 1.429 3.18 1.764 3.18 1.764l2.356-1.178a1 1 0 0 1 .933.02l2.21 1.23a1 1 0 0 1 .514.873v2.537c0 1.292-1.2 2.225-2.424 1.812-2.514-.849-6.416-2.464-8.89-4.937-2.473-2.473-4.088-6.376-4.936-8.89-.413-1.224.52-2.424 1.812-2.424h2.536Z"
    />
  </Svg>
);

export default Phone;
