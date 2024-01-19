import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const Vimeo = ({ width = 24, height = 24 }: SvgIconProps) => (
  <Svg width={width} height={height} fill="none">
    <Path
      stroke="#999"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21.74 7.469c-.086 1.898-1.412 4.497-3.976 7.795-2.651 3.445-4.894 5.168-6.729 5.169-1.137 0-2.099-1.05-2.885-3.148l-1.574-5.771c-.583-2.097-1.21-3.147-1.878-3.148a6.034 6.034 0 0 0-1.531.919L2.25 8.103a249.82 249.82 0 0 0 2.845-2.537c1.284-1.108 2.247-1.692 2.89-1.75 1.517-.147 2.451.89 2.802 3.11.379 2.396.642 3.886.788 4.469.439 1.988.92 2.981 1.446 2.98.407 0 1.02-.645 1.838-1.934.816-1.289 1.254-2.27 1.313-2.944.117-1.112-.32-1.669-1.313-1.67-.497.007-.989.116-1.443.32.958-3.139 2.789-4.664 5.491-4.576 2.004.059 2.948 1.358 2.834 3.898Z"
    />
  </Svg>
);
export default Vimeo;
