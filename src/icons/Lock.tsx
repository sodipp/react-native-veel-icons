import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const Lock = () => (
  <Svg width={24} height={24} fill="none">
    <Path fill="#fff" fillOpacity={0.01} d="M0 0h24v24H0V0Z" />
    <Path
      stroke="#999"
      strokeLinejoin="round"
      d="M20 11H4a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1Z"
    />
    <Path
      stroke="#999"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7 11V7a5 5 0 0 1 10 0v4M12 15v3"
    />
  </Svg>
);
export default Lock;
