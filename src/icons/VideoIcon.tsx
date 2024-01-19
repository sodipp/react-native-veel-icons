import * as React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';

const VideoIcon = ({
  width = 24,
  height = 24,
  color = ['black'],
}: SvgIconProps) => (
  <Svg width={width} height={height} fill="none">
    <Path fill={color[0]} fillOpacity={0.01} d="M0 0h24v24H0V0Z" />
    <Rect width={19} height={15} x={2.5} y={4.5} stroke={color[0]} rx={1.5} />
    <Path
      stroke={color[0]}
      strokeLinejoin="round"
      d="M10 9.49v5.02c0 .27.185.49.412.49.081 0 .16-.028.228-.081l3.175-2.49c.19-.148.242-.452.117-.677a.459.459 0 0 0-.114-.136l-3.175-2.533c-.19-.15-.446-.09-.573.133a.555.555 0 0 0-.07.273Z"
    />
  </Svg>
);

export default VideoIcon;
