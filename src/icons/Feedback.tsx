import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const Feedback = ({ width = 24, height = 24 }: SvgIconProps) => (
  <Svg width={width} height={height} fill="none">
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 21.4V2.6a.6.6 0 0 1 .6-.6h11.652a.6.6 0 0 1 .424.176l3.148 3.148A.6.6 0 0 1 20 5.75V21.4a.6.6 0 0 1-.6.6H4.6a.6.6 0 0 1-.6-.6Z"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16 2v3.4a.6.6 0 0 0 .6.6H20M12 18.25a4.25 4.25 0 1 0 0-8.5 4.25 4.25 0 0 0 0 8.5Z"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M18.25 14.25h-1.5m-1 2.5 1.5 1.5m0-8.5-1.5 1.5m-10 3h1.5m1 2.5-1.5 1.5m0-8.5 1.5 1.5m1.5-1.5s-.75-3 2.25-3 2.25 3 2.25 3"
    />
  </Svg>
);

export default Feedback;
