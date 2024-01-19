import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const ExpandIcon = ({ height = 17, width = 21 }: SvgIconProps) => (
  <Svg fill="none" height={height} width={width}>
    <Path
      fill="#D9D9D9"
      fillRule="evenodd"
      d="M7 1H2a1 1 0 0 0-1 1v5H0V2a2 2 0 0 1 2-2h5v1Zm8 0h4a1 1 0 0 1 1 1v5h1V2a2 2 0 0 0-2-2h-4v1Zm5 10v4a1 1 0 0 1-1 1h-4v1h4a2 2 0 0 0 2-2v-4h-1ZM2 16h5v1H2a2 2 0 0 1-2-2v-4h1v4a1 1 0 0 0 1 1Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default ExpandIcon;
