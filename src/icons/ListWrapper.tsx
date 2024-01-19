import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const ListWrapper = ({ width = 24, height = 24 }: SvgIconProps) => (
  <Svg width={width} height={height} fill="none">
    <Path
      fill="#0017FF"
      fillOpacity={0.5}
      fillRule="evenodd"
      d="M11.207 0c3.07.005 5.537 2.261 7.774 4.48 2.337 2.316 5.112 4.821 5.017 8.203-.095 3.34-3.039 5.584-5.469 7.727-2.142 1.89-4.535 3.37-7.322 3.553-2.986.196-6.131-.348-8.295-2.527-2.203-2.22-2.998-5.541-2.905-8.753.09-3.11 1.39-5.955 3.4-8.231C5.5 2.079 8.133-.005 11.206 0Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default ListWrapper;
