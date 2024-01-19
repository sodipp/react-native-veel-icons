import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const VideoRequest = ({ width = 24, height = 24 }: SvgIconProps) => (
  <Svg width={width} height={height} fill="none">
    <Path
      stroke="#000"
      d="M15.5 7.5H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h13.5a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1Z"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m5.8 12.32 1.8 1.8 3.6-3.6M12.5 6a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM5.5 6a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM16.5 14.5l4.5 2v-8l-4.5 2"
    />
  </Svg>
);

export default VideoRequest;
