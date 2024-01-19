import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const Person = () => (
  <Svg width={24} height={24} fill="none">
    <Path fill="#fff" fillOpacity={0.01} d="M0 0h24v24H0V0Z" />
    <Path
      stroke="#999"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM21 22a9 9 0 1 0-18 0"
    />
  </Svg>
);
export default Person;
